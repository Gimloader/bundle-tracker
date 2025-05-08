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
    }), a(d.exports, 'Container', function () {
        return _z;
    }), a(d.exports, 'ContentContainer', function () {
        return _A;
    }), a(d.exports, 'Content', function () {
        return _B;
    }), a(d.exports, 'default', function () {
        return _y;
    });
    var g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
    let u, v, w, x = y => y;
    var _y = () => {
        const {id: z} = (0, l.useParams)(), {
                isLoading: A,
                error: B,
                data: C
            } = (0, n.default)(z);
        var D, E;
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(j.Title, { title: null !== (D = null == C ? void 0 : C.name) && void 0 !== D ? D : 'Group' }),
                (0, g.jsxs)(_z, {
                    children: [
                        (0, g.jsx)(t.GroupViewTopNavigationHeader, { id: z }),
                        (0, g.jsxs)(_A, {
                            children: [
                                B ? (0, g.jsx)('div', { style: { height: 35 } }) : (0, g.jsx)(p.GroupViewHeader, { data: C }),
                                (0, g.jsx)(_B, {
                                    children: A ? (0, g.jsx)(r.default, {
                                        paragraph: { rows: 4 },
                                        title: !1,
                                        active: !0,
                                        className: 'maxWidth'
                                    }) : B ? (0, g.jsx)('div', { children: (null == B || null === (E = B.message) || void 0 === E ? void 0 : E.text) || 'There was an error fetching this class. Please try again.' }) : (0, g.jsxs)(s.default, {
                                        className: 'maxWidth',
                                        direction: 'vertical',
                                        size: 25,
                                        children: [
                                            (0, g.jsx)(o.GroupViewJoin, {
                                                groupId: z,
                                                groupName: C.name
                                            }),
                                            (0, g.jsx)(q.GroupViewMembers, {
                                                members: C.members,
                                                groupId: z
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    const _z = h.default.div.attrs({ className: 'vc flex-column' })(u || (u = x`
  flex: 1;
  background: ${ 0 };
  font-family: ${ 0 };
  color: ${ 0 };
`), k.default.Snow, i.Fonts.SFPro, k.default.Black), _A = h.default.div.attrs({ className: 'flex-column' })(v || (v = x`
  width: 90%;
  max-width: 1200px;
  flex: 1;
`)), _B = (0, h.default)(m.default).attrs({ className: 'maxWidth' })(w || (w = x`
  flex: 1;
  border-radius: 9px;
  padding: 35px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`));
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
    a(d.exports, 'invalidateGroup', function () {
        return _j;
    }), a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const i = ['group'], _j = k => h.default.invalidateQueries([
            i,
            k
        ]);
    var _k = l => (0, f.useQuery)({
        queryKey: [
            i,
            l
        ],
        retry: !1,
        queryFn: () => (0, g.requestAsPromise)({ url: `/api/v1/groups/info/${ l }` })
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'GroupViewJoin', function () {
        return _s;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    let p, q, r = s => s;
    const _s = t => {
            const u = `${ (0, o.getDomain)() }/class/join/${ t.groupId }`;
            return (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsxs)(_t, {
                        children: [
                            'Have your students visit this link to join ',
                            (0, f.jsx)('b', { children: t.groupName }),
                            '. They will have to authenticate with Google or email.'
                        ]
                    }),
                    (0, f.jsx)(j.default, {
                        hoverable: !0,
                        style: {
                            color: m.default.Black,
                            fontFamily: h.Fonts.SFPro,
                            marginTop: 15
                        },
                        children: (0, f.jsxs)(_u, {
                            children: [
                                (0, f.jsx)(k.default, {
                                    size: 'large',
                                    value: u,
                                    readOnly: !0
                                }),
                                (0, f.jsx)(i.default, {
                                    onClick: () => {
                                        b(n)(u), l.default.success('Link copied!');
                                    },
                                    type: 'primary',
                                    style: { marginLeft: 10 },
                                    size: 'large',
                                    children: 'Copy Link'
                                })
                            ]
                        })
                    })
                ]
            });
        }, _t = g.default.div(p || (p = r`
  font-size: 20px;
`)), _u = g.default.div.attrs({ className: 'flex maxWidth vc' })(q || (q = r``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'GroupViewHeader', function () {
        return _E;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....');
    let z, A, B, C, D = E => E;
    const _E = F => {
            const G = g.useMemo(() => F.data ? [
                {
                    key: 'rename',
                    label: 'Rename class',
                    icon: (0, f.jsx)(p.default, {}),
                    onClick: () => {
                        (0, w.promptModal)({
                            title: 'Rename class',
                            rules: [
                                {
                                    required: !0,
                                    message: 'Name is required'
                                },
                                {
                                    max: 28,
                                    message: 'Class name must be less than 28 characters'
                                }
                            ],
                            placeholder: F.data.name,
                            okText: 'Save',
                            onOk: async H => {
                                await (0, s.requestAsPromise)({
                                    url: '/api/v1/groups/rename',
                                    data: {
                                        groupId: F.data._id,
                                        newName: H
                                    }
                                }), (0, i.invalidateGroup)(F.data._id);
                            }
                        });
                    }
                },
                {
                    key: 'modify-auto-accept',
                    label: (F.data.autoAccept ? 'Disable' : 'Enable') + ' auto-accept',
                    icon: (0, f.jsx)(r.default, {}),
                    onClick: () => {
                        (0, x.Request)({
                            url: '/api/v1/groups/auto-accept',
                            data: {
                                groupId: F.data._id,
                                autoAcceptOn: !F.data.autoAccept
                            },
                            success: () => {
                                l.default.success({
                                    title: 'Auto-accept ' + (F.data.autoAccept ? 'disabled' : 'enabled'),
                                    content: F.data.autoAccept ? 'When students attempt to join this class, you will be asked to approve their request.' : 'Students can now join this class without manual approval by visiting the join link.'
                                }), (0, i.invalidateGroup)(F.data._id);
                            },
                            error: H => {
                                (0, s.throwMessageError)({
                                    e: H,
                                    default: { title: 'Error updating auto-accept. Please try agian.' }
                                });
                            }
                        });
                    }
                },
                {
                    key: 'delete-class',
                    label: 'Delete class',
                    icon: (0, f.jsx)(o.default, {}),
                    danger: !0,
                    onClick: () => {
                        l.default.confirm({
                            title: 'Are you sure you want to delete this class?',
                            okText: 'Yes',
                            okType: 'danger',
                            onOk: async () => {
                                await (0, s.requestAsPromise)({ url: `/api/v1/groups/delete/${ F.data._id }` }), (0, v.invalidateClasses)(), (0, t.NavigateTo)(u.default.navigation.homeUrl);
                            }
                        });
                    }
                }
            ] : [], [F.data]);
            return F.data ? (0, f.jsxs)(_F, {
                children: [
                    (0, f.jsxs)(_G, {
                        children: [
                            (0, f.jsxs)(m.default, {
                                direction: 'horizontal',
                                size: 20,
                                wrap: !0,
                                children: [
                                    (0, f.jsx)(_H, { style: { background: F.data.color } }),
                                    (0, f.jsx)(_I, { children: F.data.name })
                                ]
                            }),
                            (0, f.jsx)('div', {
                                children: F.customRightComponent ? F.customRightComponent : (0, f.jsx)(k.default, {
                                    menu: { items: G },
                                    children: (0, f.jsx)(j.default, {
                                        icon: (0, f.jsx)(q.default, {}),
                                        type: 'default',
                                        shape: 'circle'
                                    })
                                })
                            })
                        ]
                    }),
                    F.data.invites.length ? (0, f.jsx)(m.default, {
                        direction: 'vertical',
                        size: 15,
                        className: 'maxWidth',
                        style: { marginTop: 20 },
                        children: F.data.invites.map(H => (0, f.jsx)(y.GroupViewInvite, {
                            id: H._id,
                            name: H.name,
                            email: H.email,
                            groupId: F.data._id
                        }, H._id))
                    }) : null
                ]
            }) : (0, f.jsx)('div', { style: { height: 160 } });
        }, _F = h.default.div.attrs({ className: 'maxWidth' })(z || (z = D`
  padding: 40px 0px;
  flex-shrink: 0;
`)), _G = h.default.div.attrs({ className: 'maxWidth flex vc between' })(A || (A = D``)), _H = h.default.div(B || (B = D`
  height: 80px;
  width: 80px;
  border-radius: 8px;
`)), _I = h.default.div(C || (C = D`
  font-size: 36px;
  font-weight: ${ 0 };
`), n.FontWeights.UltraBold);
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
    j.displayName = 'EditOutlined';
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
                    attrs: { d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z' }
                }]
        },
        name: 'edit',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'promptModal', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const l = g.forwardRef(({
        rules: m,
        placeholder: n,
        onPressEnter: o,
        value: p,
        autoFocus: q
    }, r) => {
        const [s] = i.default.useForm();
        return g.useEffect(() => {
            s.setFieldsValue({ input: p });
        }, []), g.useImperativeHandle(r, () => ({ validate: () => s.validateFields().then(t => t.input) })), (0, f.jsx)(i.default, {
            form: s,
            style: { marginTop: 3 },
            children: (0, f.jsx)(i.default.Item, {
                name: 'input',
                rules: m,
                children: (0, f.jsx)(j.default, {
                    placeholder: n,
                    onPressEnter: o,
                    autoFocus: q,
                    autoComplete: 'off'
                })
            })
        });
    });
    function m({
        rules: n,
        placeholder: o,
        modalProps: p = {},
        okText: q,
        visible: r,
        submit: s,
        close: t,
        title: u,
        value: v,
        afterClose: w,
        autoFocus: x
    }) {
        const y = g.useRef(null), z = async () => {
                try {
                    var A;
                    const B = await (null === (A = y.current) || void 0 === A ? void 0 : A.validate());
                    s(B);
                } catch (A) {
                }
            };
        return (0, f.jsx)(k.default, {
            ...p,
            open: r,
            onOk: z,
            okText: q,
            onCancel: () => t(),
            title: u,
            afterClose: w,
            children: (0, f.jsx)(l, {
                ref: y,
                rules: n,
                value: v,
                placeholder: o,
                onPressEnter: z,
                autoFocus: null == x || x
            })
        });
    }
    const _p = q => new Promise((r, s) => {
        const t = document.createElement('div');
        document.body.appendChild(t);
        const {
            onOk: u,
            ...v
        } = q;
        let w = {
            ...v,
            submit: async function (x) {
                if (u) {
                    const y = await u(x);
                    (y || void 0 === y) && k(x);
                } else
                    k(x);
            },
            close: k,
            visible: !0
        };
        function x(y) {
            w = {
                ...w,
                visible: !1,
                afterClose: () => (z => {
                    b(h).unmountComponentAtNode(t) && t.parentNode && t.parentNode.removeChild(t), void 0 !== z ? r(z) : s(z);
                })(y)
            }, l(w);
        }
        function y(z) {
            b(h).render((0, f.jsx)(m, { ...z }), t);
        }
        y(w);
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'GroupViewInvite', function () {
        return _w;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....');
    let t, u, v = w => w;
    const _w = x => {
            const y = (z = !0) => {
                (0, q.Request)({
                    url: '/api/v1/groups/invites/' + (z ? 'accept' : 'deny'),
                    data: { inviteId: x.id },
                    success: () => {
                        z && l.default.success('Student added to class!'), (0, s.invalidateGroup)(x.groupId);
                    },
                    error: A => {
                        (0, r.throwMessageError)({
                            e: A,
                            default: { title: 'Error replying to invite' }
                        });
                    }
                });
            };
            return (0, f.jsxs)(_x, {
                children: [
                    (0, f.jsxs)('div', {
                        className: 'flex vc',
                        style: {
                            background: '#6200EA',
                            color: h.default.White,
                            padding: '5px 35px'
                        },
                        children: [
                            (0, f.jsx)(i.default, { name: 'far fa-exclamation-circle' }),
                            ' ',
                            (0, f.jsx)('div', {
                                style: { marginLeft: '0.4em' },
                                children: 'Class Join Request'
                            })
                        ]
                    }),
                    (0, f.jsxs)(_y, {
                        children: [
                            (0, f.jsxs)('div', {
                                children: [
                                    (0, f.jsx)('div', { children: (0, f.jsx)('b', { children: x.name }) }),
                                    (0, f.jsx)('div', { children: (0, f.jsx)('i', { children: x.email }) })
                                ]
                            }),
                            (0, f.jsx)('div', {
                                children: (0, f.jsxs)(m.default, {
                                    direction: 'horizontal',
                                    size: 10,
                                    wrap: !0,
                                    align: 'center',
                                    children: [
                                        (0, f.jsx)(n.default, {
                                            title: 'Accept',
                                            children: (0, f.jsx)(j.default, {
                                                type: 'dashed',
                                                style: { color: '#388E3C' },
                                                icon: (0, f.jsx)(o.default, {}),
                                                shape: 'circle',
                                                onClick: () => {
                                                    y(!0);
                                                }
                                            })
                                        }),
                                        (0, f.jsx)(k.default, {
                                            menu: {
                                                items: [{
                                                        key: 'reject',
                                                        label: 'Decline request',
                                                        danger: !0,
                                                        onClick: () => {
                                                            y(!1);
                                                        }
                                                    }]
                                            },
                                            children: (0, f.jsx)(p.default, { style: { cursor: 'pointer' } })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
        }, _x = g.default.div.attrs({ className: 'maxWidth light-shadow' })(t || (t = v`
  border-radius: 8px;
  background: ${ 0 };
  overflow: hidden;
`), h.default.White), _y = g.default.div.attrs({ className: 'maxWidth flex between vc' })(u || (u = v`
  padding: 20px 35px;
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
    a(d.exports, 'GroupViewMembers', function () {
        return _y;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....');
    const _y = z => {
        var A;
        const [B, C, D] = (0, t.useBoolean)(!1), E = g.useMemo(() => [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email'
                },
                {
                    title: '',
                    key: 'actions',
                    align: 'right',
                    render: (F, G) => {
                        const H = [
                            {
                                key: `${ G._id }-rename`,
                                label: 'Change name',
                                icon: (0, f.jsx)(p.default, {}),
                                onClick: I => {
                                    (0, r.default)(I.domEvent), (0, s.promptModal)({
                                        title: 'Change name',
                                        value: G.name,
                                        placeholder: 'Enter new name',
                                        rules: [
                                            {
                                                required: !0,
                                                message: 'Name is required'
                                            },
                                            {
                                                max: 40,
                                                message: 'Name must be less than 40 characters'
                                            }
                                        ],
                                        onOk: async J => {
                                            await (0, t.requestAsPromise)({
                                                url: '/api/v1/groups/members/rename',
                                                data: {
                                                    groupMemberId: G._id,
                                                    newName: J
                                                }
                                            }), k.default.success('Student renamed!'), (0, h.invalidateGroup)(z.groupId);
                                        }
                                    });
                                }
                            },
                            {
                                key: `${ G._id }-remove`,
                                label: 'Remove',
                                icon: (0, f.jsx)(o.default, {}),
                                danger: !0,
                                onClick: I => {
                                    (0, r.default)(I.domEvent), l.default.confirm({
                                        title: (0, f.jsxs)('div', {
                                            style: { fontWeight: u.FontWeights.Normal },
                                            children: [
                                                'Are you sure you want to remove ',
                                                (0, f.jsx)('b', { children: G.name }),
                                                ' from this class?'
                                            ]
                                        }),
                                        okText: 'Yes',
                                        onOk: async () => {
                                            await (0, t.requestAsPromise)({
                                                url: '/api/v1/groups/members/remove',
                                                data: { groupMemberId: G._id }
                                            }), k.default.success('Student removed!'), (0, h.invalidateGroup)(z.groupId);
                                        }
                                    });
                                }
                            }
                        ];
                        return (0, f.jsxs)(m.default, {
                            size: 'middle',
                            children: [
                                (0, f.jsx)(i.default, { children: 'View Progress' }),
                                (0, f.jsx)('div', {
                                    onClick: I => I.stopPropagation(),
                                    children: (0, f.jsx)(j.default, {
                                        menu: { items: H },
                                        children: (0, f.jsx)(q.default, { style: { cursor: 'pointer' } })
                                    })
                                })
                            ]
                        });
                    }
                }
            ], [z.groupId]);
        return (null === (A = z.members) || void 0 === A ? void 0 : A.length) ? (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(n.default, {
                    size: 'large',
                    dataSource: z.members.sort((F, G) => F.name.localeCompare(G.name)),
                    columns: E,
                    pagination: !1,
                    onRow: F => ({
                        style: { cursor: 'pointer' },
                        onClick: () => {
                            var G;
                            G = F._id, (0, t.isUpgraded)() ? (0, x.NavigateTo)(`/class/${ z.groupId }/student/${ G }`) : C();
                        }
                    }),
                    rowKey: F => F._id
                }),
                (0, f.jsx)(v.default, {
                    visible: B,
                    close: D,
                    id: 'student progress',
                    copy: {
                        title: 'View student progress with Pro',
                        description: `To view all reports for a student in one place, upgrade to ${ w.COMPANY_NAME } Pro.`
                    }
                })
            ]
        }) : null;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => {
        null == g || g.stopPropagation();
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'GroupViewTopNavigationHeader', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const _j = k => (0, f.jsx)(f.Fragment, {
        children: (0, f.jsx)(i.default, {
            includeSpacer: !0,
            children: (0, f.jsx)(g.default, {
                options: [
                    {
                        id: 'home',
                        label: 'Home',
                        icon: (0, f.jsx)(h.default, { name: 'fas fa-home' }),
                        path: `/class/${ k.id }`
                    },
                    {
                        id: 'reports',
                        label: 'Reports',
                        icon: (0, f.jsx)(h.default, { name: 'fas fa-analytics' }),
                        path: `/class/${ k.id }/reports`
                    }
                ]
            })
        })
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l, m, n = o => o;
    var _o = p => {
        const q = g.useMemo(() => {
                var r;
                return null !== (r = p.theme) && void 0 !== r ? r : i.SiteHeaderTheme.light;
            }, [p.theme]), r = g.useMemo(() => {
                var s;
                return null !== (s = p.alpha) && void 0 !== s ? s : j.SiteHeaderAlpha.standard;
            }, [p.alpha]), s = g.useMemo(() => {
                const t = r === j.SiteHeaderAlpha.none ? 1 : q === i.SiteHeaderTheme.light ? 0.85 : 0.45;
                return q === i.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ t })` : `rgba(16, 16, 16, ${ t })`;
            }, [
                q,
                r
            ]), t = g.useMemo(() => q === i.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [q]);
        return (0, f.jsxs)(_p, {
            background: s,
            borderColor: t,
            children: [
                (0, f.jsxs)(_q, {
                    children: [
                        (0, f.jsx)(k.default, {
                            options: p.options,
                            selectedOption: p.selectedOption,
                            theme: q
                        }),
                        (0, f.jsx)('div', { children: p.rightSideContent })
                    ]
                }),
                p.bottomContent
            ]
        });
    };
    const _p = h.default.div.attrs({ className: 'maxWidth' })(l || (l = n`
  background: ${ 0 };
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${ 0 };
`), q => q.background, q => q.borderColor), _q = h.default.div.attrs({ className: 'maxWidth flex vc between' })(m || (m = n``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    let j;
    var _k = l => (0, f.jsx)(_l, {
        children: (0, f.jsx)(g.default, {
            direction: 'horizontal',
            size: 8,
            wrap: !0,
            children: l.options.map(m => (0, f.jsx)(h.default, {
                option: m,
                selected: l.selectedOption === m.id,
                theme: l.theme
            }, `option-${ m.id }`))
        })
    });
    const _l = i.default.div.attrs({ className: 'scroll-x' })(j || (j = (m => m)`
  flex: 1;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n;
    var _o = p => {
        const {
                theme: q,
                option: r
            } = p, {pathname: s} = (0, l.useLocation)(), {
                label: t,
                icon: u,
                path: v,
                otherMatchingPaths: w
            } = r, x = (() => {
                if (v) {
                    if ((0, k.matchPath)({ path: v }, s))
                        return !0;
                    if ((null == w ? void 0 : w.length) && w.some(y => (0, k.matchPath)({ path: y }, s)))
                        return !0;
                }
                return !1;
            })(), y = g.useMemo(() => !!x || p.selected, [
                x,
                p.selected
            ]), z = g.useMemo(() => y ? '#1677ff' : 'transparent', [
                q,
                y
            ]), A = g.useMemo(() => y ? j.default.White : q === h.SiteHeaderTheme.light ? 'rgb(26, 27, 37)' : j.default.White, [
                q,
                y
            ]), B = g.useMemo(() => y ? z : q === h.SiteHeaderTheme.light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)', [
                q,
                y,
                z
            ]);
        return (0, f.jsx)(m.default, {
            to: v,
            target: p.option.target,
            onClick: r.onSelect,
            style: { cursor: 'pointer' },
            children: (0, f.jsxs)(_p, {
                background: z,
                color: A,
                hoverBackground: B,
                children: [
                    u ? (0, f.jsx)('span', {
                        style: {
                            marginRight: 6,
                            fontSize: '0.9em'
                        },
                        children: u
                    }) : null,
                    t
                ]
            })
        });
    };
    const _p = i.default.div.attrs({ className: 'flex-center' })(n || (n = (q => q)`
  line-height: 1;
  padding: 6px 12px;
  border-radius: 50px;
  background: ${ 0 };
  white-space: nowrap;
  color: ${ 0 };
  font-size: 15px;
  cursor: pointer;
  transition: background 0.14s ease-in-out;
  &:hover {
    background: ${ 0 };
  }
`), q => q.background, q => q.color, q => q.hoverBackground);
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
    j.displayName = 'DownOutlined';
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
                    attrs: { d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z' }
                }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = function (q) {
            (0, l.default)(d, q);
            var r = (0, m.default)(d);
            function s(t) {
                var u;
                (0, j.default)(this, s), (u = r.call(this, t)).handleChange = function (v) {
                    var w = u.props, x = w.disabled, y = w.onChange;
                    x || ('checked' in u.props || u.setState({ checked: v.target.checked }), y && y({
                        target: (0, i.default)((0, i.default)({}, u.props), {}, { checked: v.target.checked }),
                        stopPropagation: function () {
                            v.stopPropagation();
                        },
                        preventDefault: function () {
                            v.preventDefault();
                        },
                        nativeEvent: v.nativeEvent
                    }));
                }, u.saveInput = function (v) {
                    u.input = v;
                };
                var v = 'checked' in t ? t.checked : t.defaultChecked;
                return u.state = { checked: v }, u;
            }
            return (0, k.default)(s, [
                {
                    key: 'focus',
                    value: function () {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function () {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var v, w = this.props, x = w.prefixCls, y = w.className, z = w.style, A = w.name, B = w.id, C = w.type, D = w.disabled, E = w.readOnly, F = w.tabIndex, G = w.onClick, H = w.onFocus, I = w.onBlur, J = w.onKeyDown, K = w.onKeyPress, L = w.onKeyUp, M = w.autoFocus, N = w.value, O = w.required, P = (0, h.default)(w, [
                                'prefixCls',
                                'className',
                                'style',
                                'name',
                                'id',
                                'type',
                                'disabled',
                                'readOnly',
                                'tabIndex',
                                'onClick',
                                'onFocus',
                                'onBlur',
                                'onKeyDown',
                                'onKeyPress',
                                'onKeyUp',
                                'autoFocus',
                                'value',
                                'required'
                            ]), Q = Object.keys(P).reduce(function (R, S) {
                                return 'aria-' !== S.substr(0, 5) && 'data-' !== S.substr(0, 5) && 'role' !== S || (R[S] = P[S]), R;
                            }, {}), R = this.state.checked, S = u(o)(x, y, (v = {}, (0, g.default)(v, ''.concat(x, '-checked'), R), (0, g.default)(v, ''.concat(x, '-disabled'), D), v));
                        return u(n).createElement('span', {
                            className: S,
                            style: z
                        }, u(n).createElement('input', (0, f.default)({
                            name: A,
                            id: B,
                            type: C,
                            required: O,
                            readOnly: E,
                            disabled: D,
                            tabIndex: F,
                            className: ''.concat(x, '-input'),
                            checked: !!R,
                            onClick: G,
                            onFocus: H,
                            onBlur: I,
                            onKeyUp: L,
                            onKeyDown: J,
                            onKeyPress: K,
                            onChange: this.handleChange,
                            autoFocus: M,
                            ref: this.saveInput,
                            value: N
                        }, Q)), u(n).createElement('span', { className: ''.concat(x, '-inner') }));
                    }
                }
            ], [{
                    key: 'getDerivedStateFromProps',
                    value: function (v, w) {
                        return 'checked' in v ? (0, i.default)((0, i.default)({}, w), {}, { checked: v.checked }) : null;
                    }
                }]), s;
        }(n.Component);
    p.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function () {
        },
        onBlur: function () {
        },
        onChange: function () {
        },
        onKeyDown: function () {
        },
        onKeyPress: function () {
        },
        onKeyUp: function () {
        }
    };
    var _q = p;
}), c.register('.....', function (d, e) {
    function f() {
        return f = Object.assign || function (g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (_g[j] = h[j]);
        }
        return _g;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {}, l = Object.keys(g);
        for (f = 0; f < l.length; f++)
            i = l[f], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function (l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }
    function _j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? g(Object(m), !0).forEach(function (n) {
                (0, f.default)(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : g(Object(m)).forEach(function (n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(g, f.key, f);
        }
    }
    function i(j, k, l) {
        return k && f(j.prototype, k), l && f(j, l), j;
    }
    a(d.exports, 'default', function () {
        return i;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if ('function' != typeof i && null !== i)
            throw new TypeError('Super expression must either be null or a function');
        h.prototype = Object.create(i && i.prototype, {
            constructor: {
                value: h,
                writable: !0,
                configurable: !0
            }
        }), i && (0, f.default)(h, i);
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function (i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j) {
        var k = (0, g.default)();
        return function () {
            var l, m = (0, f.default)(j);
            if (k) {
                var n = (0, f.default)(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return (0, h.default)(this, l);
        };
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function (h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
            })), !0;
        } catch (a) {
            return !1;
        }
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function (h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function (h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
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
    a(d.exports, 'responsiveArray', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const _h = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];
    function _i() {
        const [, j] = (0, g.useToken)(), k = (l => ({
                xs: `(max-width: ${ l.screenXSMax }px)`,
                sm: `(min-width: ${ l.screenSM }px)`,
                md: `(min-width: ${ l.screenMD }px)`,
                lg: `(min-width: ${ l.screenLG }px)`,
                xl: `(min-width: ${ l.screenXL }px)`,
                xxl: `(min-width: ${ l.screenXXL }px)`
            }))((l => {
                const m = l, n = [].concat(_h).reverse();
                return n.forEach((o, p) => {
                    const q = o.toUpperCase(), r = `screen${ q }Min`, s = `screen${ q }`;
                    if (!(m[r] <= m[s]))
                        throw new Error(`${ r }<=${ s } fails : !(${ m[r] }<=${ m[s] })`);
                    if (p < n.length - 1) {
                        const t = `screen${ q }Max`;
                        if (!(m[s] <= m[t]))
                            throw new Error(`${ s }<=${ t } fails : !(${ m[s] }<=${ m[t] })`);
                        const u = `screen${ n[p + 1].toUpperCase() }Min`;
                        if (!(m[t] <= m[u]))
                            throw new Error(`${ t }<=${ u } fails : !(${ m[t] }<=${ m[u] })`);
                    }
                }), l;
            })(j));
        return b(f).useMemo(() => {
            const l = new Map();
            let m = -1, n = {};
            return {
                matchHandlers: {},
                dispatch: o => (n = o, l.forEach(p => p(n)), l.size >= 1),
                subscribe(o) {
                    return l.size || this.register(), m += 1, l.set(m, o), o(n), m;
                },
                unsubscribe(o) {
                    l.delete(o), l.size || this.unregister();
                },
                unregister() {
                    Object.keys(k).forEach(o => {
                        const p = k[o], q = this.matchHandlers[p];
                        null == q || q.mql.removeListener(null == q ? void 0 : q.listener);
                    }), l.clear();
                },
                register() {
                    Object.keys(k).forEach(o => {
                        const p = k[o], q = r => {
                                let {matches: s} = r;
                                this.dispatch(Object.assign(Object.assign({}, n), { [o]: s }));
                            }, r = window.matchMedia(p);
                        r.addListener(q), this.matchHandlers[p] = {
                            mql: r,
                            listener: q
                        }, q(r);
                    });
                },
                responsiveMap: k
            };
        }, [j]);
    }
});