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
a.register('d1GyP', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _x(b.exports, 'Container', function() {
        return _x;
    }), _x(b.exports, 'ContentContainer', function() {
        return _y;
    }), _x(b.exports, 'Content', function() {
        return _z;
    }), _x(b.exports, 'default', function() {
        return _w;
    });
    var e = a('0hzx+');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('b5kvC'),
        h = a('PMl60'),
        i = a('sHRDd'),
        j = a('70AkF'),
        k = a('7s5R80'),
        l = a('FmJ0q'),
        m = a('dYXIR'),
        n = a('BPFur'),
        o = a('c/Qa9'),
        p = a('oBBW6'),
        q = a('cvto726'),
        r = a('SZtvY');
    let s, t, u, v = _x => _x;
    var _w = () => {
        const {
            id: _x
        } = (0, j.useParams)(), {
            isLoading: y,
            error: z,
            data: A
        } = (0, l.default)(_x);
        var B, C;
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(h.Title, {
                    title: null !== (B = null == A ? void 0 : A.name) && void 0 !== B ? B : 'Group'
                }),
                (0, e.jsxs)(_x, {
                    children: [
                        (0, e.jsx)(r.GroupViewTopNavigationHeader, {
                            id: _x
                        }),
                        (0, e.jsxs)(_y, {
                            children: [
                                z ? (0, e.jsx)('div', {
                                    style: {
                                        height: 35
                                    }
                                }) : (0, e.jsx)(n.GroupViewHeader, {
                                    data: A
                                }),
                                (0, e.jsx)(_z, {
                                    children: y ? (0, e.jsx)(p.default, {
                                        paragraph: {
                                            rows: 4
                                        },
                                        title: !1,
                                        active: !0,
                                        className: 'maxWidth'
                                    }) : z ? (0, e.jsx)('div', {
                                        children: (null == z || null === (C = z.message) || void 0 === C ? void 0 : C.text) || 'There was an error fetching this class. Please try again.'
                                    }) : (0, e.jsxs)(q.default, {
                                        className: 'maxWidth',
                                        direction: 'vertical',
                                        size: 25,
                                        children: [
                                            (0, e.jsx)(m.GroupViewJoin, {
                                                groupId: _x,
                                                groupName: A.name
                                            }),
                                            (0, e.jsx)(o.GroupViewMembers, {
                                                members: A.members,
                                                groupId: _x
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
    const _x = f.default.div.attrs({
            className: 'vc flex-column'
        })(s || (s = v`
  flex: 1;
  background: ${ 0 };
  font-family: ${ 0 };
  color: ${ 0 };
`), i.default.Snow, g.Fonts.SFPro, i.default.Black),
        _y = f.default.div.attrs({
            className: 'flex-column'
        })(t || (t = v`
  width: 90%;
  max-width: 1200px;
  flex: 1;
`)),
        _z = (0, f.default)(k.default).attrs({
            className: 'maxWidth'
        })(u || (u = v`
  flex: 1;
  border-radius: 9px;
  padding: 35px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`));
}), a.register('7s5R80', function(b, c) {
    _b(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd');
    let g;
    var _h = _b => (0, d.jsx)(_i, {
        onClick: _b.onClick,
        className: _b.className,
        style: _b.style,
        children: _b.children
    });
    const _i = e.default.div(g || (g = (_b => _b)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), a.register('FmJ0q', function(b, c) {
    _b(b.exports, 'invalidateGroup', function() {
        return _h;
    }), _b(b.exports, 'default', function() {
        return _i;
    });
    var d = a('UapK50'),
        e = a('PMl60'),
        f = a('ACpZs');
    const g = ['group'],
        _h = _b => f.default.invalidateQueries([
            g,
            _b
        ]);
    var _i = _b => (0, d.useQuery)({
        queryKey: [
            g,
            _b
        ],
        retry: !1,
        queryFn: () => (0, e.requestAsPromise)({
            url: `/api/v1/groups/info/${ _b }`
        })
    });
}), a.register('dYXIR', function(b, c) {
    _b(b.exports, 'GroupViewJoin', function() {
        return _q;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC'),
        g = a('ulE4q'),
        h = a('oXQNI'),
        i = a('ewwAh'),
        j = a('MSsQO'),
        k = a('sHRDd'),
        l = a('jlX4s16'),
        m = a('PMl60');
    let n, o, p = _b => _b;
    const _q = _b => {
            const r = `${ (0, m.getDomain)() }/class/join/${ _b.groupId }`;
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsxs)(_r, {
                        children: [
                            'Have your students visit this link to join ',
                            (0, d.jsx)('b', {
                                children: _b.groupName
                            }),
                            '. They will have to authenticate with Google or email.'
                        ]
                    }),
                    (0, d.jsx)(h.default, {
                        hoverable: !0,
                        style: {
                            color: k.default.Black,
                            fontFamily: f.Fonts.SFPro,
                            marginTop: 15
                        },
                        children: (0, d.jsxs)(_s, {
                            children: [
                                (0, d.jsx)(i.default, {
                                    size: 'large',
                                    value: r,
                                    readOnly: !0
                                }),
                                (0, d.jsx)(g.default, {
                                    onClick: () => {
                                        _c(l)(r), j.default.success('Link copied!');
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
        _r = e.default.div(n || (n = p`
  font-size: 20px;
`)),
        _s = e.default.div.attrs({
            className: 'flex maxWidth vc'
        })(o || (o = p``));
}), a.register('jlX4s16', function(_b, _c) {
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
}), a.register('BPFur', function(b, c) {
    _d(b.exports, 'GroupViewHeader', function() {
        return _C;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('FmJ0q'),
        h = a('ulE4q'),
        i = a('/rAT0'),
        j = a('YRlpt'),
        k = a('cvto726'),
        l = a('b5kvC'),
        m = a('ieNls8'),
        n = a('GldUd7'),
        o = a('LHeQv'),
        p = a('gCqar24'),
        q = a('PMl60'),
        r = a('jzxyj10'),
        s = a('9twzo'),
        t = a('LTYu3'),
        u = a('o3y0X'),
        v = a('w0a3U'),
        w = a('l8WPF');
    let x, y, z, A, B = _d => _d;
    const _C = _d => {
            const D = e.useMemo(() => _d.data ? [{
                    key: 'rename',
                    label: 'Rename class',
                    icon: (0, d.jsx)(n.default, {}),
                    onClick: () => {
                        (0, u.promptModal)({
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
                            placeholder: _d.data.name,
                            okText: 'Save',
                            onOk: async D => {
                                await (0, q.requestAsPromise)({
                                    url: '/api/v1/groups/rename',
                                    data: {
                                        groupId: _d.data._id,
                                        newName: D
                                    }
                                }), (0, g.invalidateGroup)(_d.data._id);
                            }
                        });
                    }
                },
                {
                    key: 'modify-auto-accept',
                    label: (_d.data.autoAccept ? 'Disable' : 'Enable') + ' auto-accept',
                    icon: (0, d.jsx)(p.default, {}),
                    onClick: () => {
                        (0, v.Request)({
                            url: '/api/v1/groups/auto-accept',
                            data: {
                                groupId: _d.data._id,
                                autoAcceptOn: !_d.data.autoAccept
                            },
                            success: () => {
                                j.default.success({
                                    title: 'Auto-accept ' + (_d.data.autoAccept ? 'disabled' : 'enabled'),
                                    content: _d.data.autoAccept ? 'When students attempt to join this class, you will be asked to approve their request.' : 'Students can now join this class without manual approval by visiting the join link.'
                                }), (0, g.invalidateGroup)(_d.data._id);
                            },
                            error: _d => {
                                (0, q.throwMessageError)({
                                    e: _d,
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
                    icon: (0, d.jsx)(m.default, {}),
                    danger: !0,
                    onClick: () => {
                        j.default.confirm({
                            title: 'Are you sure you want to delete this class?',
                            okText: 'Yes',
                            okType: 'danger',
                            onOk: async () => {
                                await (0, q.requestAsPromise)({
                                    url: `/api/v1/groups/delete/${ _d.data._id }`
                                }), (0, t.invalidateClasses)(), (0, r.NavigateTo)(s.default.navigation.homeUrl);
                            }
                        });
                    }
                }
            ] : [], [_d.data]);
            return _d.data ? (0, d.jsxs)(_D, {
                children: [
                    (0, d.jsxs)(_E, {
                        children: [
                            (0, d.jsxs)(k.default, {
                                direction: 'horizontal',
                                size: 20,
                                wrap: !0,
                                children: [
                                    (0, d.jsx)(_F, {
                                        style: {
                                            background: _d.data.color
                                        }
                                    }),
                                    (0, d.jsx)(_G, {
                                        children: _d.data.name
                                    })
                                ]
                            }),
                            (0, d.jsx)('div', {
                                children: _d.customRightComponent ? _d.customRightComponent : (0, d.jsx)(i.default, {
                                    menu: {
                                        items: D
                                    },
                                    children: (0, d.jsx)(h.default, {
                                        icon: (0, d.jsx)(o.default, {}),
                                        type: 'default',
                                        shape: 'circle'
                                    })
                                })
                            })
                        ]
                    }),
                    _d.data.invites.length ? (0, d.jsx)(k.default, {
                        direction: 'vertical',
                        size: 15,
                        className: 'maxWidth',
                        style: {
                            marginTop: 20
                        },
                        children: _d.data.invites.map(D => (0, d.jsx)(w.GroupViewInvite, {
                            id: D._id,
                            name: D.name,
                            email: D.email,
                            groupId: _d.data._id
                        }, D._id))
                    }) : null
                ]
            }) : (0, d.jsx)('div', {
                style: {
                    height: 160
                }
            });
        },
        _D = f.default.div.attrs({
            className: 'maxWidth'
        })(x || (x = B`
  padding: 40px 0px;
  flex-shrink: 0;
`)),
        _E = f.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(y || (y = B``)),
        _F = f.default.div(z || (z = B`
  height: 80px;
  width: 80px;
  border-radius: 8px;
`)),
        _G = f.default.div(A || (A = B`
  font-size: 36px;
  font-weight: ${ 0 };
`), l.FontWeights.UltraBold);
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
}), a.register('GldUd7', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('1tgJh4'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'EditOutlined';
    var _i = e.forwardRef(h);
}), a.register('1tgJh4', function(b, c) {
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
                    d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'
                }
            }]
        },
        name: 'edit',
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
    _k(b.exports, 'default', function() {
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
}), a.register('jzxyj10', function(b, c) {
    _k(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _k => {
        d.history.push(_k);
    };
}), a.register('o3y0X', function(b, c) {
    _k(b.exports, 'promptModal', function() {
        return _z;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Z/8fU'),
        g = a('MKz5C'),
        h = a('ewwAh'),
        i = a('YRlpt');
    const j = e.forwardRef(({
        rules: _k,
        placeholder: l,
        onPressEnter: m,
        value: n,
        autoFocus: o
    }, f) => {
        const [p] = g.default.useForm();
        return e.useEffect(() => {
            p.setFieldsValue({
                input: n
            });
        }, []), e.useImperativeHandle(f, () => ({
            validate: () => p.validateFields().then(_k => _k.input)
        })), (0, d.jsx)(g.default, {
            form: p,
            style: {
                marginTop: 3
            },
            children: (0, d.jsx)(g.default.Item, {
                name: 'input',
                rules: _k,
                children: (0, d.jsx)(h.default, {
                    placeholder: l,
                    onPressEnter: m,
                    autoFocus: o,
                    autoComplete: 'off'
                })
            })
        });
    });

    function p({
        rules: q,
        placeholder: r,
        modalProps: s = {},
        okText: t,
        visible: u,
        submit: v,
        close: w,
        title: x,
        value: y,
        afterClose: _z,
        autoFocus: A
    }) {
        const B = e.useRef(null),
            C = async () => {
                try {
                    var D;
                    const E = await (null === (D = B.current) || void 0 === D ? void 0 : D.validate());
                    v(E);
                } catch (q) {}
            };
        return (0, d.jsx)(i.default, {
            ...s,
            open: u,
            onOk: C,
            okText: t,
            onCancel: () => w(),
            title: x,
            afterClose: _z,
            children: (0, d.jsx)(j, {
                ref: B,
                rules: q,
                value: y,
                placeholder: r,
                onPressEnter: C,
                autoFocus: null == A || A
            })
        });
    }
    const p = _k => new Promise((m, n) => {
        const q = document.createElement('div');
        document.body.appendChild(q);
        const {
            onOk: r,
            ...s
        } = _k;
        let t = {
            ...s,
            submit: async function(u) {
                if (r) {
                    const v = await r(u);
                    (v || void 0 === v) && i(u);
                } else
                    i(u);
            },
            close: i,
            visible: !0
        };

        function u(v) {
            t = {
                ...t,
                visible: !1,
                afterClose: () => (v => {
                    l(f).unmountComponentAtNode(q) && q.parentNode && q.parentNode.removeChild(q), void 0 !== v ? m(v) : n(v);
                })(v)
            }, j(t);
        }

        function u(v) {
            l(f).render((0, d.jsx)(_l, {
                ...v
            }), q);
        }
        j(t);
    });
}), a.register('l8WPF', function(b, c) {
    _i(b.exports, 'GroupViewInvite', function() {
        return _u;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd'),
        g = a('9R7cy'),
        h = a('ulE4q'),
        i = a('/rAT0'),
        j = a('MSsQO'),
        k = a('cvto726'),
        _l = a('ijg0s'),
        m = a('CJCpN'),
        n = a('LHeQv'),
        o = a('w0a3U'),
        p = a('PMl60'),
        q = a('FmJ0q');
    let r, s, t = _i => _i;
    const _u = _i => {
            const v = (w = !0) => {
                (0, o.Request)({
                    url: '/api/v1/groups/invites/' + (w ? 'accept' : 'deny'),
                    data: {
                        inviteId: _i.id
                    },
                    success: () => {
                        w && j.default.success('Student added to class!'), (0, q.invalidateGroup)(_i.groupId);
                    },
                    error: _i => {
                        (0, p.throwMessageError)({
                            e: _i,
                            default: {
                                title: 'Error replying to invite'
                            }
                        });
                    }
                });
            };
            return (0, d.jsxs)(_v, {
                children: [
                    (0, d.jsxs)('div', {
                        className: 'flex vc',
                        style: {
                            background: '#6200EA',
                            color: f.default.White,
                            padding: '5px 35px'
                        },
                        children: [
                            (0, d.jsx)(g.default, {
                                name: 'far fa-exclamation-circle'
                            }),
                            ' ',
                            (0, d.jsx)('div', {
                                style: {
                                    marginLeft: '0.4em'
                                },
                                children: 'Class Join Request'
                            })
                        ]
                    }),
                    (0, d.jsxs)(_w, {
                        children: [
                            (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsx)('div', {
                                        children: (0, d.jsx)('b', {
                                            children: _i.name
                                        })
                                    }),
                                    (0, d.jsx)('div', {
                                        children: (0, d.jsx)('i', {
                                            children: _i.email
                                        })
                                    })
                                ]
                            }),
                            (0, d.jsx)('div', {
                                children: (0, d.jsxs)(k.default, {
                                    direction: 'horizontal',
                                    size: 10,
                                    wrap: !0,
                                    align: 'center',
                                    children: [
                                        (0, d.jsx)(_l.default, {
                                            title: 'Accept',
                                            children: (0, d.jsx)(h.default, {
                                                type: 'dashed',
                                                style: {
                                                    color: '#388E3C'
                                                },
                                                icon: (0, d.jsx)(m.default, {}),
                                                shape: 'circle',
                                                onClick: () => {
                                                    w(!0);
                                                }
                                            })
                                        }),
                                        (0, d.jsx)(i.default, {
                                            menu: {
                                                items: [{
                                                    key: 'reject',
                                                    label: 'Decline request',
                                                    danger: !0,
                                                    onClick: () => {
                                                        w(!1);
                                                    }
                                                }]
                                            },
                                            children: (0, d.jsx)(n.default, {
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
        _v = e.default.div.attrs({
            className: 'maxWidth light-shadow'
        })(r || (r = t`
  border-radius: 8px;
  background: ${ 0 };
  overflow: hidden;
`), f.default.White),
        _w = e.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(s || (s = t`
  padding: 20px 35px;
`));
}), a.register('9R7cy', function(b, c) {
    _i(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _i => (0, d.jsx)('i', {
        className: `${ _i.name }${ _i.className ? ` ${ _i.className }` : '' }`,
        style: _i.style
    });
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
    _q(b.exports, 'default', function() {
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
}), a.register('c/Qa9', function(b, c) {
    _q(b.exports, 'GroupViewMembers', function() {
        return _w;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('FmJ0q'),
        g = a('ulE4q'),
        h = a('/rAT0'),
        i = a('MSsQO'),
        j = a('YRlpt'),
        k = a('cvto726'),
        l = a('XhmoI'),
        m = a('ieNls8'),
        n = a('GldUd7'),
        o = a('LHeQv'),
        p = a('0PFEY'),
        q = a('o3y0X'),
        r = a('PMl60'),
        s = a('b5kvC'),
        t = a('BtZXP'),
        u = a('hHkFq'),
        v = a('jzxyj10');
    const _w = _q => {
        var x;
        const [y, z, A] = (0, r.useBoolean)(!1), B = e.useMemo(() => [{
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
                render: (x, y) => {
                    const C = [{
                            key: `${ y._id }-rename`,
                            label: 'Change name',
                            icon: (0, d.jsx)(n.default, {}),
                            onClick: x => {
                                (0, p.default)(x.domEvent), (0, q.promptModal)({
                                    title: 'Change name',
                                    value: y.name,
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
                                    onOk: async x => {
                                        await (0, r.requestAsPromise)({
                                            url: '/api/v1/groups/members/rename',
                                            data: {
                                                groupMemberId: y._id,
                                                newName: x
                                            }
                                        }), i.default.success('Student renamed!'), (0, f.invalidateGroup)(_q.groupId);
                                    }
                                });
                            }
                        },
                        {
                            key: `${ y._id }-remove`,
                            label: 'Remove',
                            icon: (0, d.jsx)(m.default, {}),
                            danger: !0,
                            onClick: x => {
                                (0, p.default)(x.domEvent), j.default.confirm({
                                    title: (0, d.jsxs)('div', {
                                        style: {
                                            fontWeight: s.FontWeights.Normal
                                        },
                                        children: [
                                            'Are you sure you want to remove ',
                                            (0, d.jsx)('b', {
                                                children: y.name
                                            }),
                                            ' from this class?'
                                        ]
                                    }),
                                    okText: 'Yes',
                                    onOk: async () => {
                                        await (0, r.requestAsPromise)({
                                            url: '/api/v1/groups/members/remove',
                                            data: {
                                                groupMemberId: y._id
                                            }
                                        }), i.default.success('Student removed!'), (0, f.invalidateGroup)(_q.groupId);
                                    }
                                });
                            }
                        }
                    ];
                    return (0, d.jsxs)(k.default, {
                        size: 'middle',
                        children: [
                            (0, d.jsx)(g.default, {
                                children: 'View Progress'
                            }),
                            (0, d.jsx)('div', {
                                onClick: _q => _q.stopPropagation(),
                                children: (0, d.jsx)(h.default, {
                                    menu: {
                                        items: C
                                    },
                                    children: (0, d.jsx)(o.default, {
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
        ], [_q.groupId]);
        return (null === (x = _q.members) || void 0 === x ? void 0 : x.length) ? (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(l.default, {
                    size: 'large',
                    dataSource: _q.members.sort((_q, x) => _q.name.localeCompare(x.name)),
                    columns: B,
                    pagination: !1,
                    onRow: x => ({
                        style: {
                            cursor: 'pointer'
                        },
                        onClick: () => {
                            var C;
                            C = x._id, (0, r.isUpgraded)() ? (0, v.NavigateTo)(`/class/${ _q.groupId }/student/${ C }`) : z();
                        }
                    }),
                    rowKey: _q => _q._id
                }),
                (0, d.jsx)(t.default, {
                    visible: y,
                    close: A,
                    id: 'student progress',
                    copy: {
                        title: 'View student progress with Pro',
                        description: `To view all reports for a student in one place, upgrade to ${ u.COMPANY_NAME } Pro.`
                    }
                })
            ]
        }) : null;
    };
}), a.register('0PFEY', function(b, c) {
    _q(b.exports, 'default', function() {
        return _d;
    });
    var _d = _q => {
        null == _q || _q.stopPropagation();
    };
}), a.register('SZtvY', function(b, c) {
    _q(b.exports, 'GroupViewTopNavigationHeader', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('13HCY'),
        f = a('9R7cy'),
        g = a('RJjEi');
    const _h = _q => (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(g.default, {
            includeSpacer: !0,
            children: (0, d.jsx)(e.default, {
                options: [{
                        id: 'home',
                        label: 'Home',
                        icon: (0, d.jsx)(f.default, {
                            name: 'fas fa-home'
                        }),
                        path: `/class/${ _q.id }`
                    },
                    {
                        id: 'reports',
                        label: 'Reports',
                        icon: (0, d.jsx)(f.default, {
                            name: 'fas fa-analytics'
                        }),
                        path: `/class/${ _q.id }/reports`
                    }
                ]
            })
        })
    });
}), a.register('13HCY', function(b, c) {
    _q(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('s+8hx17'),
        h = a('bdn4O17'),
        i = a('qL8MZ');
    let j, k, l = _q => _q;
    var _m = _q => {
        const n = e.useMemo(() => {
                var o;
                return null !== (o = _q.theme) && void 0 !== o ? o : g.SiteHeaderTheme.light;
            }, [_q.theme]),
            o = e.useMemo(() => {
                var p;
                return null !== (p = _q.alpha) && void 0 !== p ? p : h.SiteHeaderAlpha.standard;
            }, [_q.alpha]),
            p = e.useMemo(() => {
                const _q = o === h.SiteHeaderAlpha.none ? 1 : n === g.SiteHeaderTheme.light ? 0.85 : 0.45;
                return n === g.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ _q })` : `rgba(16, 16, 16, ${ _q })`;
            }, [
                n,
                o
            ]),
            q = e.useMemo(() => n === g.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [n]);
        return (0, d.jsxs)(_n, {
            background: p,
            borderColor: q,
            children: [
                (0, d.jsxs)(_o, {
                    children: [
                        (0, d.jsx)(i.default, {
                            options: _h.options,
                            selectedOption: _h.selectedOption,
                            theme: n
                        }),
                        (0, d.jsx)('div', {
                            children: _h.rightSideContent
                        })
                    ]
                }),
                _h.bottomContent
            ]
        });
    };
    const _n = f.default.div.attrs({
            className: 'maxWidth'
        })(j || (j = l`
  background: ${ 0 };
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${ 0 };
`), _h => _h.background, _h => _h.borderColor),
        _o = f.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(k || (k = l``));
}), a.register('s+8hx17', function(b, c) {
    let d;
    var e;
    _h(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), a.register('bdn4O17', function(b, c) {
    let d;
    var e;
    _h(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), a.register('qL8MZ', function(b, c) {
    _h(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('cvto726'),
        f = a('nxOom'),
        g = a('Axq+p');
    let h;
    var _i = _h => (0, d.jsx)(_j, {
        children: (0, d.jsx)(e.default, {
            direction: 'horizontal',
            size: 8,
            wrap: !0,
            children: _h.options.map(b => (0, d.jsx)(f.default, {
                option: b,
                selected: _h.selectedOption === b.id,
                theme: _h.theme
            }, `option-${ b.id }`))
        })
    });
    const _j = g.default.div.attrs({
        className: 'scroll-x'
    })(h || (h = (_h => _h)`
  flex: 1;
`));
}), a.register('nxOom', function(b, c) {
    _h(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('s+8hx17'),
        g = a('Axq+p'),
        h = a('ibLRf19'),
        i = a('70AkF'),
        j = a('wYGc3'),
        k = a('2HvvA11');
    let l;
    var _m = _h => {
        const {
            theme: n,
            option: o
        } = _h, {
            pathname: p
        } = (0, j.useLocation)(), {
            label: q,
            icon: r,
            path: s,
            otherMatchingPaths: t
        } = o, u = (() => {
            if (s) {
                if ((0, i.matchPath)({
                        path: s
                    }, p))
                    return !0;
                if ((null == t ? void 0 : t.length) && t.some(_h => (0, i.matchPath)({
                        path: _h
                    }, p)))
                    return !0;
            }
            return !1;
        })(), v = e.useMemo(() => !!u || _h.selected, [
            u,
            _h.selected
        ]), w = e.useMemo(() => v ? '#1677ff' : 'transparent', [
            n,
            v
        ]), x = e.useMemo(() => v ? h.default.White : n === f.SiteHeaderTheme.light ? 'rgb(26, 27, 37)' : h.default.White, [
            n,
            v
        ]), y = e.useMemo(() => v ? w : n === f.SiteHeaderTheme.light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)', [
            n,
            v,
            w
        ]);
        return (0, d.jsx)(k.default, {
            to: s,
            target: _h.option.target,
            onClick: o.onSelect,
            style: {
                cursor: 'pointer'
            },
            children: (0, d.jsxs)(_n, {
                background: w,
                color: x,
                hoverBackground: y,
                children: [
                    r ? (0, d.jsx)('span', {
                        style: {
                            marginRight: 6,
                            fontSize: '0.9em'
                        },
                        children: r
                    }) : null,
                    q
                ]
            })
        });
    };
    const _n = g.default.div.attrs({
        className: 'flex-center'
    })(l || (l = (_h => _h)`
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
`), _h => _h.background, _h => _h.color, _h => _h.hoverBackground);
}), a.register('ibLRf19', function(b, c) {
    _h(b.exports, 'default', function() {
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
}), a.register('2HvvA11', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = _h => _h.external || !_h.to ? (0, d.jsx)('a', {
        href: _h.to,
        tabIndex: Number(_h.tabIndex || '0'),
        onClick: _h.onClick,
        onKeyPress: b => {
            _h.onClick && 'Enter' === b.key && (b.preventDefault(), _h.onClick());
        },
        className: _h.className,
        target: _h.target,
        style: _h.style,
        children: _h.children
    }) : (0, d.jsx)(e.Link, {
        to: _h.to,
        tabIndex: Number(_h.tabIndex || '0'),
        onClick: _h.onClick,
        className: _h.className,
        target: _h.target,
        style: _h.style,
        children: _h.children
    });
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
    _f(b.exports, 'initMoveMotion', function() {
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
        _m = (_f, b) => {
            const {
                antCls: n
            } = _f, o = `${ n }-${ b }`, {
                inKeyframes: p,
                outKeyframes: q
            } = l[b];
            return [
                (0, e.initMotion)(o, p, q, _f.motionDurationMid),
                {
                    [`\n        ${ o }-enter,\n        ${ o }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: _f.motionEaseOutCirc
                    },
                    [`${ o }-leave`]: {
                        animationTimingFunction: _f.motionEaseInOutCirc
                    }
                }
            ];
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
}), a.register('pMmde1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
    _o(b.exports, 'default', function() {
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
                    d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
                }
            }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), a.register('RW2Mp', function(b, c) {
    _o(b.exports, 'default', function() {
        return _A;
    });
    var d = a('5jnR813'),
        e = a('8DsNq12'),
        f = a('Li49B9'),
        g = a('hc2IK9'),
        h = a('HgFD113'),
        i = a('a01Gf12'),
        j = a('i+h089'),
        k = a('kp44T9'),
        l = a('LEQ5w'),
        m = a('JrtKP'),
        n = function(_o) {
            (0, j.default)(b, _o);
            var p = (0, k.default)(b);

            function q(r) {
                var s;
                (0, h.default)(this, q), (s = p.call(this, r)).handleChange = function(t) {
                    var u = s.props,
                        v = u.disabled,
                        w = u.onChange;
                    v || ('checked' in s.props || s.setState({
                        checked: t.target.checked
                    }), w && w({
                        target: (0, g.default)((0, g.default)({}, s.props), {}, {
                            checked: t.target.checked
                        }),
                        stopPropagation: function() {
                            t.stopPropagation();
                        },
                        preventDefault: function() {
                            t.preventDefault();
                        },
                        nativeEvent: t.nativeEvent
                    }));
                }, s.saveInput = function(t) {
                    s.input = t;
                };
                var t = 'checked' in r ? r.checked : r.defaultChecked;
                return s.state = {
                    checked: t
                }, s;
            }
            return (0, i.default)(b, [{
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
                        var q, r = this.props,
                            s = r.prefixCls,
                            t = r.className,
                            u = r.style,
                            v = r.name,
                            w = r.id,
                            x = r.type,
                            y = r.disabled,
                            z = r.readOnly,
                            _A = r.tabIndex,
                            B = r.onClick,
                            C = r.onFocus,
                            D = r.onBlur,
                            E = r.onKeyDown,
                            F = r.onKeyPress,
                            G = r.onKeyUp,
                            H = r.autoFocus,
                            I = r.value,
                            J = r.required,
                            K = (0, f.default)(r, [
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
                            L = Object.keys(K).reduce(function(M, N) {
                                return 'aria-' !== N.substr(0, 5) && 'data-' !== N.substr(0, 5) && 'role' !== N || (M[N] = K[N]), M;
                            }, {}),
                            M = this.state.checked,
                            N = _r(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return _r(l).createElement('span', {
                            className: N,
                            style: u
                        }, _r(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: _A,
                            className: ''.concat(s, '-input'),
                            checked: !!M,
                            onClick: B,
                            onFocus: C,
                            onBlur: D,
                            onKeyUp: G,
                            onKeyDown: E,
                            onKeyPress: F,
                            onChange: this.handleChange,
                            autoFocus: H,
                            ref: this.saveInput,
                            value: I
                        }, L)), _r(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(q, _r) {
                    return 'checked' in q ? (0, g.default)((0, g.default)({}, _r), {}, {
                        checked: q.checked
                    }) : null;
                }
            }]), b;
        }(l.Component);
    n.defaultProps = {
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
    var o = n;
}), a.register('5jnR813', function(b, c) {
    function d() {
        return d = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        }, d.apply(this, arguments);
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('8DsNq12', function(b, c) {
    function _d(_e, f, g) {
        return f in _e ? Object.defineProperty(_e, f, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _e[f] = g, _e;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Li49B9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('QUESF9');

    function _e(_f, g) {
        if (null == _f)
            return {};
        var h, i, j = (0, d.default)(_f, g);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(_f);
            for (i = 0; i < k.length; i++)
                h = k[i], g.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_f, h) && (j[h] = _f[h]);
        }
        return j;
    }
}), a.register('QUESF9', function(b, c) {
    function d(e, f) {
        if (null == e)
            return {};
        var g, h, i = {},
            j = Object.keys(e);
        for (h = 0; h < j.length; h++)
            g = j[h], f.indexOf(g) >= 0 || (i[g] = e[g]);
        return i;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('hc2IK9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8DsNq12');

    function e(_f, g) {
        var h = Object.keys(_f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(_f);
            g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(_f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function _e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? _e(Object(h), !0).forEach(function(i) {
                (0, d.default)(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : _e(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }
}), a.register('HgFD113', function(b, c) {
    function d(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('a01Gf12', function(b, c) {
    function _d(_e, f) {
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(_e, h.key, h);
        }
    }

    function d(e, f, g) {
        return f && _c(e.prototype, f), g && _c(e, g), e;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('i+h089', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var _d = a('ALEzF15');

    function _e(_f, g) {
        if ('function' != typeof g && null !== g)
            throw new TypeError('Super expression must either be null or a function');
        _f.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: _f,
                writable: !0,
                configurable: !0
            }
        }), g && (0, _d.default)(_f, g);
    }
}), a.register('ALEzF15', function(b, c) {
    function d(e, f) {
        return d = Object.setPrototypeOf || function(g, h) {
            return g.__proto__ = h, g;
        }, d(e, f);
    }
    _h(b.exports, 'default', function() {
        return _c;
    });
}), a.register('kp44T9', function(b, _c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('28Pwf16'),
        e = a('sQfA/14'),
        f = a('rKHa09');

    function _g(_h) {
        var i = (0, e.default)();
        return function() {
            var j, k = (0, d.default)(_h);
            if (i) {
                var l = (0, d.default)(this).constructor;
                j = Reflect.construct(k, arguments, l);
            } else
                j = k.apply(this, arguments);
            return (0, f.default)(this, j);
        };
    }
}), a.register('28Pwf16', function(b, c) {
    function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(f) {
            return f.__proto__ || Object.getPrototypeOf(f);
        }, d(e);
    }
    _g(b.exports, 'default', function() {
        return _d;
    });
}), a.register('sQfA/14', function(b, c) {
    function _d() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (_g) {
            return !1;
        }
    }
    _g(b.exports, 'default', function() {
        return _b;
    });
}), a.register('rKHa09', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('cW6NX14'),
        e = a('JgIFg');

    function _f(_g, h) {
        if (h && ('object' === _c(d)(h) || 'function' == typeof h))
            return h;
        if (void 0 !== h)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(_g);
    }
}), a.register('cW6NX14', function(b, _c) {
    function d(e) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (b.exports = d = function(f) {
            return typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0) : (b.exports = d = function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0), d(e);
    }
    b.exports = a, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('JgIFg', function(b, c) {
    function d(e) {
        if (void 0 === e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
    }
    _i(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Rtfgy20', function(b, _c) {
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
}), a.register('VckKB', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e() {
        const [, _f] = d.useReducer(_f => _f + 1, 0);
        return _f;
    }
}), a.register('fuuXY5', function(b, c) {
    _h(b.exports, 'responsiveArray', function() {
        return _f;
    }), _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('XpGPm');
    const _f = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function _g() {
        const [, _h] = (0, e.useToken)(), i = (_h => ({
            xs: `(max-width: ${ _h.screenXSMax }px)`,
            sm: `(min-width: ${ _h.screenSM }px)`,
            md: `(min-width: ${ _h.screenMD }px)`,
            lg: `(min-width: ${ _h.screenLG }px)`,
            xl: `(min-width: ${ _h.screenXL }px)`,
            xxl: `(min-width: ${ _h.screenXXL }px)`
        }))((_h => {
            const j = _h,
                k = [].concat(_f).reverse();
            return k.forEach((_h, b) => {
                const l = _h.toUpperCase(),
                    m = `screen${ l }Min`,
                    n = `screen${ l }`;
                if (!(j[m] <= j[n]))
                    throw new Error(`${ m }<=${ n } fails : !(${ j[m] }<=${ j[n] })`);
                if (b < k.length - 1) {
                    const o = `screen${ l }Max`;
                    if (!(j[n] <= j[o]))
                        throw new Error(`${ n }<=${ o } fails : !(${ j[n] }<=${ j[o] })`);
                    const p = `screen${ k[b + 1].toUpperCase() }Min`;
                    if (!(j[o] <= j[p]))
                        throw new Error(`${ o }<=${ p } fails : !(${ j[o] }<=${ j[p] })`);
                }
            }), _h;
        })(_h));
        return _k(d).useMemo(() => {
            const j = new Map();
            let _k = -1,
                l = {};
            return {
                matchHandlers: {},
                dispatch: _k => (l = _k, j.forEach(j => j(l)), j.size >= 1),
                subscribe(m) {
                    return j.size || this.register(), _k += 1, j.set(_k, m), m(l), _k;
                },
                unsubscribe(m) {
                    j.delete(m), j.size || this.unregister();
                },
                unregister() {
                    Object.keys(i).forEach(j => {
                        const m = i[j],
                            n = this.matchHandlers[m];
                        null == n || n.mql.removeListener(null == n ? void 0 : n.listener);
                    }), j.clear();
                },
                register() {
                    Object.keys(i).forEach(j => {
                        const m = i[j],
                            n = m => {
                                let {
                                    matches: o
                                } = m;
                                this.dispatch(Object.assign(Object.assign({}, l), {
                                    [j]: o
                                }));
                            },
                            o = window.matchMedia(m);
                        o.addListener(n), this.matchHandlers[m] = {
                            mql: o,
                            listener: n
                        }, n(o);
                    });
                },
                responsiveMap: i
            };
        }, [_h]);
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
});