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
c.register('s0zaZ', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'Container', function() {
        return _z;
    }), a(d.exports, 'ContentContainer', function() {
        return _A;
    }), a(d.exports, 'Content', function() {
        return _B;
    }), a(d.exports, 'default', function() {
        return _y;
    });
    var g = c('gRbUn');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('Eh2Wh'),
        j = c('quE27'),
        k = c('8KqQ+'),
        l = c('zcfNM'),
        m = c('F0ESS9'),
        n = c('IkpNC'),
        o = c('i1BX7'),
        p = c('ER390'),
        q = c('ooe3P'),
        r = c('ZKc1Q'),
        s = c('E2AMI26'),
        t = c('8/1qo');
    let u, v, w, x = a => a;
    var _y = () => {
        const {
            id: z
        } = (0, l.useParams)(), {
            isLoading: A,
            error: B,
            data: C
        } = (0, n.default)(z);
        var D, E;
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(j.Title, {
                    title: null !== (D = null == C ? void 0 : C.name) && void 0 !== D ? D : 'Group'
                }),
                (0, g.jsxs)(_z, {
                    children: [
                        (0, g.jsx)(t.GroupViewTopNavigationHeader, {
                            id: z
                        }),
                        (0, g.jsxs)(_A, {
                            children: [
                                B ? (0, g.jsx)('div', {
                                    style: {
                                        height: 35
                                    }
                                }) : (0, g.jsx)(p.GroupViewHeader, {
                                    data: C
                                }),
                                (0, g.jsx)(_B, {
                                    children: A ? (0, g.jsx)(r.default, {
                                        paragraph: {
                                            rows: 4
                                        },
                                        title: !1,
                                        active: !0,
                                        className: 'maxWidth'
                                    }) : B ? (0, g.jsx)('div', {
                                        children: (null == B || null === (E = B.message) || void 0 === E ? void 0 : E.text) || 'There was an error fetching this class. Please try again.'
                                    }) : (0, g.jsxs)(s.default, {
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
    const _z = h.default.div.attrs({
            className: 'vc flex-column'
        })(u || (u = x`
  flex: 1;
  background: ${ 0 };
  font-family: ${ 0 };
  color: ${ 0 };
`), k.default.Snow, i.Fonts.SFPro, k.default.Black),
        _A = h.default.div.attrs({
            className: 'flex-column'
        })(v || (v = x`
  width: 90%;
  max-width: 1200px;
  flex: 1;
`)),
        _B = (0, h.default)(m.default).attrs({
            className: 'maxWidth'
        })(w || (w = x`
  flex: 1;
  border-radius: 9px;
  padding: 35px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`));
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
}), c.register('IkpNC', function(d, e) {
    a(d.exports, 'invalidateGroup', function() {
        return _j;
    }), a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('GmO9j'),
        g = c('quE27'),
        h = c('9IJbB');
    const i = ['group'],
        _j = a => h.default.invalidateQueries([
            i,
            a
        ]);
    var _k = a => (0, f.useQuery)({
        queryKey: [
            i,
            a
        ],
        retry: !1,
        queryFn: () => (0, g.requestAsPromise)({
            url: `/api/v1/groups/info/${ a }`
        })
    });
}), c.register('i1BX7', function(d, e) {
    a(d.exports, 'GroupViewJoin', function() {
        return _s;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('Eh2Wh'),
        i = c('P1KtI'),
        j = c('QZ0Z+'),
        k = c('aevdF'),
        l = c('Bjl070'),
        m = c('8KqQ+'),
        n = c('gS4g327'),
        o = c('quE27');
    let p, q, r = a => a;
    const _s = a => {
            const t = `${ (0, o.getDomain)() }/class/join/${ a.groupId }`;
            return (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsxs)(_t, {
                        children: [
                            'Have your students visit this link to join ',
                            (0, f.jsx)('b', {
                                children: a.groupName
                            }),
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
                                    value: t,
                                    readOnly: !0
                                }),
                                (0, f.jsx)(i.default, {
                                    onClick: () => {
                                        b(n)(t), l.default.success('Link copied!');
                                    },
                                    type: 'primary',
                                    style: {
                                        marginLeft: 10
                                    },
                                    size: 'large',
                                    children: 'Copy Link'
                                })
                            ]
                        })
                    })
                ]
            });
        },
        _t = g.default.div(p || (p = r`
  font-size: 20px;
`)),
        _u = g.default.div.attrs({
            className: 'flex maxWidth vc'
        })(q || (q = r``));
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
}), c.register('ER390', function(d, e) {
    a(d.exports, 'GroupViewHeader', function() {
        return _E;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('IkpNC'),
        j = c('P1KtI'),
        k = c('M3JwW'),
        l = c('AE7vR'),
        m = c('E2AMI26'),
        n = c('Eh2Wh'),
        o = c('Y6i538'),
        p = c('+Nyqr7'),
        q = c('1ZCzi'),
        r = c('8sxYw24'),
        s = c('quE27'),
        t = c('KxkP827'),
        u = c('ERlVg'),
        v = c('NdYR4'),
        w = c('gpLs2'),
        x = c('sPeAY'),
        y = c('iispd');
    let z, A, B, C, D = a => a;
    const _E = a => {
            const F = g.useMemo(() => a.data ? [{
                    key: 'rename',
                    label: 'Rename class',
                    icon: (0, f.jsx)(p.default, {}),
                    onClick: () => {
                        (0, w.promptModal)({
                            title: 'Rename class',
                            rules: [{
                                    required: !0,
                                    message: 'Name is required'
                                },
                                {
                                    max: 28,
                                    message: 'Class name must be less than 28 characters'
                                }
                            ],
                            placeholder: a.data.name,
                            okText: 'Save',
                            onOk: async F => {
                                await (0, s.requestAsPromise)({
                                    url: '/api/v1/groups/rename',
                                    data: {
                                        groupId: a.data._id,
                                        newName: F
                                    }
                                }), (0, i.invalidateGroup)(a.data._id);
                            }
                        });
                    }
                },
                {
                    key: 'modify-auto-accept',
                    label: (a.data.autoAccept ? 'Disable' : 'Enable') + ' auto-accept',
                    icon: (0, f.jsx)(r.default, {}),
                    onClick: () => {
                        (0, x.Request)({
                            url: '/api/v1/groups/auto-accept',
                            data: {
                                groupId: a.data._id,
                                autoAcceptOn: !a.data.autoAccept
                            },
                            success: () => {
                                l.default.success({
                                    title: 'Auto-accept ' + (a.data.autoAccept ? 'disabled' : 'enabled'),
                                    content: a.data.autoAccept ? 'When students attempt to join this class, you will be asked to approve their request.' : 'Students can now join this class without manual approval by visiting the join link.'
                                }), (0, i.invalidateGroup)(a.data._id);
                            },
                            error: a => {
                                (0, s.throwMessageError)({
                                    e: a,
                                    default: {
                                        title: 'Error updating auto-accept. Please try agian.'
                                    }
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
                                await (0, s.requestAsPromise)({
                                    url: `/api/v1/groups/delete/${ a.data._id }`
                                }), (0, v.invalidateClasses)(), (0, t.NavigateTo)(u.default.navigation.homeUrl);
                            }
                        });
                    }
                }
            ] : [], [a.data]);
            return a.data ? (0, f.jsxs)(_F, {
                children: [
                    (0, f.jsxs)(_G, {
                        children: [
                            (0, f.jsxs)(m.default, {
                                direction: 'horizontal',
                                size: 20,
                                wrap: !0,
                                children: [
                                    (0, f.jsx)(_H, {
                                        style: {
                                            background: a.data.color
                                        }
                                    }),
                                    (0, f.jsx)(_I, {
                                        children: a.data.name
                                    })
                                ]
                            }),
                            (0, f.jsx)('div', {
                                children: a.customRightComponent ? a.customRightComponent : (0, f.jsx)(k.default, {
                                    menu: {
                                        items: F
                                    },
                                    children: (0, f.jsx)(j.default, {
                                        icon: (0, f.jsx)(q.default, {}),
                                        type: 'default',
                                        shape: 'circle'
                                    })
                                })
                            })
                        ]
                    }),
                    a.data.invites.length ? (0, f.jsx)(m.default, {
                        direction: 'vertical',
                        size: 15,
                        className: 'maxWidth',
                        style: {
                            marginTop: 20
                        },
                        children: a.data.invites.map(F => (0, f.jsx)(y.GroupViewInvite, {
                            id: F._id,
                            name: F.name,
                            email: F.email,
                            groupId: a.data._id
                        }, F._id))
                    }) : null
                ]
            }) : (0, f.jsx)('div', {
                style: {
                    height: 160
                }
            });
        },
        _F = h.default.div.attrs({
            className: 'maxWidth'
        })(z || (z = D`
  padding: 40px 0px;
  flex-shrink: 0;
`)),
        _G = h.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(A || (A = D``)),
        _H = h.default.div(B || (B = D`
  height: 80px;
  width: 80px;
  border-radius: 8px;
`)),
        _I = h.default.div(C || (C = D`
  font-size: 36px;
  font-weight: ${ 0 };
`), n.FontWeights.UltraBold);
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
}), c.register('+Nyqr7', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('lzm1Z7'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EditOutlined';
    var _k = g.forwardRef(j);
}), c.register('lzm1Z7', function(d, e) {
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
                    d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'
                }
            }]
        },
        name: 'edit',
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
}), c.register('KxkP827', function(d, e) {
    a(d.exports, 'NavigateTo', function() {
        return _g;
    });
    var f = c('qb3Ih');
    const _g = a => {
        f.history.push(a);
    };
}), c.register('gpLs2', function(d, e) {
    a(d.exports, 'promptModal', function() {
        return _B;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('kZLBJ'),
        i = c('X6XDJ'),
        j = c('aevdF'),
        k = c('AE7vR');
    const l = g.forwardRef(({
        rules: m,
        placeholder: n,
        onPressEnter: o,
        value: p,
        autoFocus: q
    }, h) => {
        const [r] = i.default.useForm();
        return g.useEffect(() => {
            r.setFieldsValue({
                input: p
            });
        }, []), g.useImperativeHandle(h, () => ({
            validate: () => r.validateFields().then(m => m.input)
        })), (0, f.jsx)(i.default, {
            form: r,
            style: {
                marginTop: 3
            },
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

    function r({
        rules: s,
        placeholder: t,
        modalProps: u = {},
        okText: v,
        visible: w,
        submit: x,
        close: y,
        title: z,
        value: A,
        afterClose: _B,
        autoFocus: C
    }) {
        const D = g.useRef(null),
            E = async () => {
                try {
                    var F;
                    const G = await (null === (F = D.current) || void 0 === F ? void 0 : F.validate());
                    x(G);
                } catch (s) {}
            };
        return (0, f.jsx)(k.default, {
            ...u,
            open: w,
            onOk: E,
            okText: v,
            onCancel: () => y(),
            title: z,
            afterClose: _B,
            children: (0, f.jsx)(l, {
                ref: D,
                rules: s,
                value: A,
                placeholder: t,
                onPressEnter: E,
                autoFocus: null == C || C
            })
        });
    }
    const s = m => new Promise((o, p) => {
        const t = document.createElement('div');
        document.body.appendChild(t);
        const {
            onOk: u,
            ...v
        } = m;
        let w = {
            ...v,
            submit: async function(x) {
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
                afterClose: () => (y => {
                    n(h).unmountComponentAtNode(t) && t.parentNode && t.parentNode.removeChild(t), void 0 !== y ? o(y) : p(y);
                })(y)
            }, l(w);
        }

        function y(z) {
            n(h).render((0, f.jsx)(r, {
                ...z
            }), t);
        }
        y(w);
    });
}), c.register('iispd', function(d, e) {
    a(d.exports, 'GroupViewInvite', function() {
        return _w;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('8KqQ+'),
        i = c('t52Ep'),
        j = c('P1KtI'),
        k = c('M3JwW'),
        l = c('Bjl070'),
        m = c('E2AMI26'),
        n = c('Dn89R'),
        o = c('BA14D'),
        p = c('1ZCzi'),
        q = c('sPeAY'),
        r = c('quE27'),
        s = c('IkpNC');
    let t, u, v = a => a;
    const _w = a => {
            const x = (y = !0) => {
                (0, q.Request)({
                    url: '/api/v1/groups/invites/' + (y ? 'accept' : 'deny'),
                    data: {
                        inviteId: a.id
                    },
                    success: () => {
                        y && l.default.success('Student added to class!'), (0, s.invalidateGroup)(a.groupId);
                    },
                    error: a => {
                        (0, r.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error replying to invite'
                            }
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
                            (0, f.jsx)(i.default, {
                                name: 'far fa-exclamation-circle'
                            }),
                            ' ',
                            (0, f.jsx)('div', {
                                style: {
                                    marginLeft: '0.4em'
                                },
                                children: 'Class Join Request'
                            })
                        ]
                    }),
                    (0, f.jsxs)(_y, {
                        children: [
                            (0, f.jsxs)('div', {
                                children: [
                                    (0, f.jsx)('div', {
                                        children: (0, f.jsx)('b', {
                                            children: a.name
                                        })
                                    }),
                                    (0, f.jsx)('div', {
                                        children: (0, f.jsx)('i', {
                                            children: a.email
                                        })
                                    })
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
                                                style: {
                                                    color: '#388E3C'
                                                },
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
                                            children: (0, f.jsx)(p.default, {
                                                style: {
                                                    cursor: 'pointer'
                                                }
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            });
        },
        _x = g.default.div.attrs({
            className: 'maxWidth light-shadow'
        })(t || (t = v`
  border-radius: 8px;
  background: ${ 0 };
  overflow: hidden;
`), h.default.White),
        _y = g.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(u || (u = v`
  padding: 20px 35px;
`));
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
}), c.register('BA14D', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('+iTmi'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CheckOutlined';
    var _k = g.forwardRef(j);
}), c.register('+iTmi', function(d, e) {
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
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), c.register('ooe3P', function(d, e) {
    a(d.exports, 'GroupViewMembers', function() {
        return _y;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('IkpNC'),
        i = c('P1KtI'),
        j = c('M3JwW'),
        k = c('Bjl070'),
        l = c('AE7vR'),
        m = c('E2AMI26'),
        n = c('v6sJ3'),
        o = c('Y6i538'),
        p = c('+Nyqr7'),
        q = c('1ZCzi'),
        r = c('u5JEh1'),
        s = c('gpLs2'),
        t = c('quE27'),
        u = c('Eh2Wh'),
        v = c('hecDa'),
        w = c('jw1ib'),
        x = c('KxkP827');
    const _y = a => {
        var z;
        const [A, B, C] = (0, t.useBoolean)(!1), D = g.useMemo(() => [{
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
                render: (z, A) => {
                    const E = [{
                            key: `${ A._id }-rename`,
                            label: 'Change name',
                            icon: (0, f.jsx)(p.default, {}),
                            onClick: z => {
                                (0, r.default)(z.domEvent), (0, s.promptModal)({
                                    title: 'Change name',
                                    value: A.name,
                                    placeholder: 'Enter new name',
                                    rules: [{
                                            required: !0,
                                            message: 'Name is required'
                                        },
                                        {
                                            max: 40,
                                            message: 'Name must be less than 40 characters'
                                        }
                                    ],
                                    onOk: async z => {
                                        await (0, t.requestAsPromise)({
                                            url: '/api/v1/groups/members/rename',
                                            data: {
                                                groupMemberId: A._id,
                                                newName: z
                                            }
                                        }), k.default.success('Student renamed!'), (0, h.invalidateGroup)(a.groupId);
                                    }
                                });
                            }
                        },
                        {
                            key: `${ A._id }-remove`,
                            label: 'Remove',
                            icon: (0, f.jsx)(o.default, {}),
                            danger: !0,
                            onClick: z => {
                                (0, r.default)(z.domEvent), l.default.confirm({
                                    title: (0, f.jsxs)('div', {
                                        style: {
                                            fontWeight: u.FontWeights.Normal
                                        },
                                        children: [
                                            'Are you sure you want to remove ',
                                            (0, f.jsx)('b', {
                                                children: A.name
                                            }),
                                            ' from this class?'
                                        ]
                                    }),
                                    okText: 'Yes',
                                    onOk: async () => {
                                        await (0, t.requestAsPromise)({
                                            url: '/api/v1/groups/members/remove',
                                            data: {
                                                groupMemberId: A._id
                                            }
                                        }), k.default.success('Student removed!'), (0, h.invalidateGroup)(a.groupId);
                                    }
                                });
                            }
                        }
                    ];
                    return (0, f.jsxs)(m.default, {
                        size: 'middle',
                        children: [
                            (0, f.jsx)(i.default, {
                                children: 'View Progress'
                            }),
                            (0, f.jsx)('div', {
                                onClick: a => a.stopPropagation(),
                                children: (0, f.jsx)(j.default, {
                                    menu: {
                                        items: E
                                    },
                                    children: (0, f.jsx)(q.default, {
                                        style: {
                                            cursor: 'pointer'
                                        }
                                    })
                                })
                            })
                        ]
                    });
                }
            }
        ], [a.groupId]);
        return (null === (z = a.members) || void 0 === z ? void 0 : z.length) ? (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(n.default, {
                    size: 'large',
                    dataSource: a.members.sort((a, z) => a.name.localeCompare(z.name)),
                    columns: D,
                    pagination: !1,
                    onRow: z => ({
                        style: {
                            cursor: 'pointer'
                        },
                        onClick: () => {
                            var E;
                            E = z._id, (0, t.isUpgraded)() ? (0, x.NavigateTo)(`/class/${ a.groupId }/student/${ E }`) : B();
                        }
                    }),
                    rowKey: a => a._id
                }),
                (0, f.jsx)(v.default, {
                    visible: A,
                    close: C,
                    id: 'student progress',
                    copy: {
                        title: 'View student progress with Pro',
                        description: `To view all reports for a student in one place, upgrade to ${ w.COMPANY_NAME } Pro.`
                    }
                })
            ]
        }) : null;
    };
}), c.register('u5JEh1', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = a => {
        null == a || a.stopPropagation();
    };
}), c.register('8/1qo', function(d, e) {
    a(d.exports, 'GroupViewTopNavigationHeader', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('M3OCl2'),
        h = c('t52Ep'),
        i = c('tBC08');
    const _j = a => (0, f.jsx)(f.Fragment, {
        children: (0, f.jsx)(i.default, {
            includeSpacer: !0,
            children: (0, f.jsx)(g.default, {
                options: [{
                        id: 'home',
                        label: 'Home',
                        icon: (0, f.jsx)(h.default, {
                            name: 'fas fa-home'
                        }),
                        path: `/class/${ a.id }`
                    },
                    {
                        id: 'reports',
                        label: 'Reports',
                        icon: (0, f.jsx)(h.default, {
                            name: 'fas fa-analytics'
                        }),
                        path: `/class/${ a.id }/reports`
                    }
                ]
            })
        })
    });
}), c.register('M3OCl2', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('W/XnX24'),
        j = c('zOtFd24'),
        k = c('3IofR2');
    let l, m, n = a => a;
    var _o = a => {
        const p = g.useMemo(() => {
                var q;
                return null !== (q = a.theme) && void 0 !== q ? q : i.SiteHeaderTheme.light;
            }, [a.theme]),
            q = g.useMemo(() => {
                var r;
                return null !== (r = a.alpha) && void 0 !== r ? r : j.SiteHeaderAlpha.standard;
            }, [a.alpha]),
            r = g.useMemo(() => {
                const s = q === j.SiteHeaderAlpha.none ? 1 : p === i.SiteHeaderTheme.light ? 0.85 : 0.45;
                return p === i.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ s })` : `rgba(16, 16, 16, ${ s })`;
            }, [
                p,
                q
            ]),
            s = g.useMemo(() => p === i.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [p]);
        return (0, f.jsxs)(_p, {
            background: r,
            borderColor: s,
            children: [
                (0, f.jsxs)(_q, {
                    children: [
                        (0, f.jsx)(k.default, {
                            options: a.options,
                            selectedOption: a.selectedOption,
                            theme: p
                        }),
                        (0, f.jsx)('div', {
                            children: a.rightSideContent
                        })
                    ]
                }),
                a.bottomContent
            ]
        });
    };
    const _p = h.default.div.attrs({
            className: 'maxWidth'
        })(l || (l = n`
  background: ${ 0 };
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${ 0 };
`), a => a.background, a => a.borderColor),
        _q = h.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(m || (m = n``));
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
}), c.register('3IofR2', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('E2AMI26'),
        h = c('pWL4I2'),
        i = c('u4s09');
    let j;
    var _k = a => (0, f.jsx)(_l, {
        children: (0, f.jsx)(g.default, {
            direction: 'horizontal',
            size: 8,
            wrap: !0,
            children: a.options.map(d => (0, f.jsx)(h.default, {
                option: d,
                selected: a.selectedOption === d.id,
                theme: a.theme
            }, `option-${ d.id }`))
        })
    });
    const _l = i.default.div.attrs({
        className: 'scroll-x'
    })(j || (j = (a => a)`
  flex: 1;
`));
}), c.register('pWL4I2', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('W/XnX24'),
        i = c('u4s09'),
        j = c('44iM223'),
        k = c('zcfNM'),
        l = c('+cTfn'),
        m = c('FB7HT26');
    let n;
    var _o = a => {
        const {
            theme: p,
            option: q
        } = a, {
            pathname: r
        } = (0, l.useLocation)(), {
            label: s,
            icon: t,
            path: u,
            otherMatchingPaths: v
        } = q, w = (() => {
            if (u) {
                if ((0, k.matchPath)({
                        path: u
                    }, r))
                    return !0;
                if ((null == v ? void 0 : v.length) && v.some(a => (0, k.matchPath)({
                        path: a
                    }, r)))
                    return !0;
            }
            return !1;
        })(), x = g.useMemo(() => !!w || a.selected, [
            w,
            a.selected
        ]), y = g.useMemo(() => x ? '#1677ff' : 'transparent', [
            p,
            x
        ]), z = g.useMemo(() => x ? j.default.White : p === h.SiteHeaderTheme.light ? 'rgb(26, 27, 37)' : j.default.White, [
            p,
            x
        ]), A = g.useMemo(() => x ? y : p === h.SiteHeaderTheme.light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)', [
            p,
            x,
            y
        ]);
        return (0, f.jsx)(m.default, {
            to: u,
            target: a.option.target,
            onClick: q.onSelect,
            style: {
                cursor: 'pointer'
            },
            children: (0, f.jsxs)(_p, {
                background: y,
                color: z,
                hoverBackground: A,
                children: [
                    t ? (0, f.jsx)('span', {
                        style: {
                            marginRight: 6,
                            fontSize: '0.9em'
                        },
                        children: t
                    }) : null,
                    s
                ]
            })
        });
    };
    const _p = i.default.div.attrs({
        className: 'flex-center'
    })(n || (n = (a => a)`
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
`), a => a.background, a => a.color, a => a.hoverBackground);
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
}), c.register('OQRaD', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('tWyJZ'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('tWyJZ', function(d, e) {
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
                    d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
                }
            }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), c.register('y095j9', function(d, e) {
    a(d.exports, 'default', function() {
        return _D;
    });
    var f = c('+pD1R20'),
        g = c('KQrGU18'),
        h = c('N14UI9'),
        i = c('fS0tD9'),
        j = c('/3DFz16'),
        k = c('oFGsY16'),
        l = c('pjWA99'),
        m = c('86FOw9'),
        n = c('O0Kav'),
        o = c('/U36/'),
        p = function(q) {
            (0, l.default)(d, q);
            var r = (0, m.default)(d);

            function s(t) {
                var u;
                (0, j.default)(this, s), (u = r.call(this, t)).handleChange = function(v) {
                    var w = u.props,
                        x = w.disabled,
                        y = w.onChange;
                    x || ('checked' in u.props || u.setState({
                        checked: v.target.checked
                    }), y && y({
                        target: (0, i.default)((0, i.default)({}, u.props), {}, {
                            checked: v.target.checked
                        }),
                        stopPropagation: function() {
                            v.stopPropagation();
                        },
                        preventDefault: function() {
                            v.preventDefault();
                        },
                        nativeEvent: v.nativeEvent
                    }));
                }, u.saveInput = function(v) {
                    u.input = v;
                };
                var v = 'checked' in t ? t.checked : t.defaultChecked;
                return u.state = {
                    checked: v
                }, u;
            }
            return (0, k.default)(s, [{
                    key: 'focus',
                    value: function() {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function() {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var t, u = this.props,
                            v = u.prefixCls,
                            w = u.className,
                            x = u.style,
                            y = u.name,
                            z = u.id,
                            A = u.type,
                            B = u.disabled,
                            C = u.readOnly,
                            _D = u.tabIndex,
                            E = u.onClick,
                            F = u.onFocus,
                            G = u.onBlur,
                            H = u.onKeyDown,
                            I = u.onKeyPress,
                            J = u.onKeyUp,
                            K = u.autoFocus,
                            L = u.value,
                            M = u.required,
                            N = (0, h.default)(u, [
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
                            ]),
                            O = Object.keys(N).reduce(function(P, Q) {
                                return 'aria-' !== Q.substr(0, 5) && 'data-' !== Q.substr(0, 5) && 'role' !== Q || (P[Q] = N[Q]), P;
                            }, {}),
                            P = this.state.checked,
                            Q = b(o)(v, w, (t = {}, (0, g.default)(t, ''.concat(v, '-checked'), P), (0, g.default)(t, ''.concat(v, '-disabled'), B), t));
                        return b(n).createElement('span', {
                            className: Q,
                            style: x
                        }, b(n).createElement('input', (0, f.default)({
                            name: y,
                            id: z,
                            type: A,
                            required: M,
                            readOnly: C,
                            disabled: B,
                            tabIndex: _D,
                            className: ''.concat(v, '-input'),
                            checked: !!P,
                            onClick: E,
                            onFocus: F,
                            onBlur: G,
                            onKeyUp: J,
                            onKeyDown: H,
                            onKeyPress: I,
                            onChange: this.handleChange,
                            autoFocus: K,
                            ref: this.saveInput,
                            value: L
                        }, O)), b(n).createElement('span', {
                            className: ''.concat(v, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(t, u) {
                    return 'checked' in t ? (0, i.default)((0, i.default)({}, u), {}, {
                        checked: t.checked
                    }) : null;
                }
            }]), s;
        }(n.Component);
    p.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var q = p;
}), c.register('+pD1R20', function(d, e) {
    function f() {
        return f = Object.assign || function(g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('KQrGU18', function(d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('N14UI9', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('wlMK917');

    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (l[j] = h[j]);
        }
        return l;
    }
}), c.register('wlMK917', function(d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {},
            l = Object.keys(g);
        for (j = 0; j < l.length; j++)
            i = l[j], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('fS0tD9', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('KQrGU18');

    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function(l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }

    function _h(i) {
        for (var j = 1; j < arguments.length; j++) {
            var k = null != arguments[j] ? arguments[j] : {};
            j % 2 ? g(Object(k), !0).forEach(function(l) {
                (0, f.default)(i, l, k[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(k)) : g(Object(k)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(k, l));
            });
        }
        return i;
    }
}), c.register('/3DFz16', function(d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('oFGsY16', function(d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
        }
    }

    function g(h, i, j) {
        return i && f(h.prototype, i), j && f(h, j), h;
    }
    a(d.exports, 'default', function() {
        return g;
    });
}), c.register('pjWA99', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('/dMWm15');

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
}), c.register('/dMWm15', function(d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function(i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('86FOw9', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('FRSEq15'),
        g = c('kgMwM15'),
        h = c('qEFpg9');

    function _i(j) {
        var k = (0, g.default)();
        return function() {
            var l, m = (0, f.default)(j);
            if (k) {
                var n = (0, f.default)(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return (0, h.default)(this, l);
        };
    }
}), c.register('FRSEq15', function(d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('kgMwM15', function(d, e) {
    function f() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (a) {
            return !1;
        }
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('qEFpg9', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('nPZ0615'),
        g = c('SUQix17');

    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('nPZ0615', function(d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function(h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('SUQix17', function(d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('zzCtd25', function(d, e) {
    a(d.exports, 'onlyOfferAnnualUpgrade', function() {
        return _g;
    });
    var f = c('SKBBo');
    const _g = () => 'annual-only' === f.default.getFeatureFlag('annual-only-pro');
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
}), c.register('IUu1b4', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g() {
        const [, h] = f.useReducer(h => h + 1, 0);
        return h;
    }
}), c.register('nBr9H5', function(d, e) {
    a(d.exports, 'responsiveArray', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('60hla');
    const _h = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function _i() {
        const [, j] = (0, g.useToken)(), k = (j => ({
            xs: `(max-width: ${ j.screenXSMax }px)`,
            sm: `(min-width: ${ j.screenSM }px)`,
            md: `(min-width: ${ j.screenMD }px)`,
            lg: `(min-width: ${ j.screenLG }px)`,
            xl: `(min-width: ${ j.screenXL }px)`,
            xxl: `(min-width: ${ j.screenXXL }px)`
        }))((j => {
            const l = j,
                m = [].concat(_h).reverse();
            return m.forEach((j, d) => {
                const n = j.toUpperCase(),
                    o = `screen${ n }Min`,
                    p = `screen${ n }`;
                if (!(l[o] <= l[p]))
                    throw new Error(`${ o }<=${ p } fails : !(${ l[o] }<=${ l[p] })`);
                if (d < m.length - 1) {
                    const q = `screen${ n }Max`;
                    if (!(l[p] <= l[q]))
                        throw new Error(`${ p }<=${ q } fails : !(${ l[p] }<=${ l[q] })`);
                    const r = `screen${ m[d + 1].toUpperCase() }Min`;
                    if (!(l[q] <= l[r]))
                        throw new Error(`${ q }<=${ r } fails : !(${ l[q] }<=${ l[r] })`);
                }
            }), j;
        })(j));
        return b(f).useMemo(() => {
            const l = new Map();
            let m = -1,
                n = {};
            return {
                matchHandlers: {},
                dispatch: m => (n = m, l.forEach(l => l(n)), l.size >= 1),
                subscribe(o) {
                    return l.size || this.register(), m += 1, l.set(m, o), o(n), m;
                },
                unsubscribe(o) {
                    l.delete(o), l.size || this.unregister();
                },
                unregister() {
                    Object.keys(k).forEach(l => {
                        const o = k[l],
                            p = this.matchHandlers[o];
                        null == p || p.mql.removeListener(null == p ? void 0 : p.listener);
                    }), l.clear();
                },
                register() {
                    Object.keys(k).forEach(l => {
                        const o = k[l],
                            p = o => {
                                let {
                                    matches: q
                                } = o;
                                this.dispatch(Object.assign(Object.assign({}, n), {
                                    [l]: q
                                }));
                            },
                            q = window.matchMedia(o);
                        q.addListener(p), this.matchHandlers[o] = {
                            mql: q,
                            listener: p
                        }, p(q);
                    });
                },
                responsiveMap: k
            };
        }, [j]);
    }
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
});