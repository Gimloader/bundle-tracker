function a(a, b, c, A) {
    Object.defineProperty(a, b, {
        get: c,
        set: A,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('HZrmb', function(b, A) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'Container', function() {
        return x;
    }), a(b.exports, 'ContentContainer', function() {
        return y;
    }), a(b.exports, 'Content', function() {
        return z;
    }), a(b.exports, 'default', function() {
        return w;
    });
    var e = c('8kSQZ');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('gSUVO'),
        h = c('PjB0f'),
        i = c('lmfrI'),
        j = c('0R8EW'),
        k = c('FfkIK1'),
        l = c('GzycZ'),
        m = c('V7Jys'),
        n = c('m/z61'),
        o = c('Lsoyi'),
        p = c('+98NM'),
        q = c('5nJMd26'),
        r = c('r2BNY');
    let s, t, u, v = a => a;
    var w = () => {
        const {
            id: x
        } = (0, j.useParams)(), {
            isLoading: y,
            error: z,
            data: A
        } = (0, l.default)(x);
        var B, C;
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(h.Title, {
                    title: null !== (B = null == A ? void 0 : A.name) && void 0 !== B ? B : 'Group'
                }),
                (0, e.jsxs)(x, {
                    children: [
                        (0, e.jsx)(r.GroupViewTopNavigationHeader, {
                            id: x
                        }),
                        (0, e.jsxs)(y, {
                            children: [
                                z ? (0, e.jsx)('div', {
                                    style: {
                                        height: 35
                                    }
                                }) : (0, e.jsx)(n.GroupViewHeader, {
                                    data: A
                                }),
                                (0, e.jsx)(z, {
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
                                                groupId: x,
                                                groupName: A.name
                                            }),
                                            (0, e.jsx)(o.GroupViewMembers, {
                                                members: A.members,
                                                groupId: x
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
    const x = f.default.div.attrs({
            className: 'vc flex-column'
        })(s || (s = v`
  flex: 1;
  background: ${ 0 };
  font-family: ${ 0 };
  color: ${ 0 };
`), i.default.Snow, g.Fonts.SFPro, i.default.Black),
        y = f.default.div.attrs({
            className: 'flex-column'
        })(t || (t = v`
  width: 90%;
  max-width: 1200px;
  flex: 1;
`)),
        z = (0, f.default)(k.default).attrs({
            className: 'maxWidth'
        })(u || (u = v`
  flex: 1;
  border-radius: 9px;
  padding: 35px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`));
}), c.register('FfkIK1', function(b, d) {
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
}), c.register('GzycZ', function(b, d) {
    a(b.exports, 'invalidateGroup', function() {
        return h;
    }), a(b.exports, 'default', function() {
        return i;
    });
    var d = c('IsAdf'),
        e = c('PjB0f'),
        f = c('jnSVn');
    const g = ['group'],
        h = a => f.default.invalidateQueries([
            g,
            a
        ]);
    var i = a => (0, d.useQuery)({
        queryKey: [
            g,
            a
        ],
        retry: !1,
        queryFn: () => (0, e.requestAsPromise)({
            url: `/api/v1/groups/info/${ a }`
        })
    });
}), c.register('V7Jys', function(d, e) {
    a(d.exports, 'GroupViewJoin', function() {
        return q;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('gSUVO'),
        g = c('IsmrL'),
        h = c('f9f+a'),
        i = c('c6x8w'),
        j = c('jrTkz0'),
        k = c('lmfrI'),
        l = c('SlNZ027'),
        m = c('PjB0f');
    let n, o, p = a => a;
    const q = a => {
            const r = `${ (0, m.getDomain)() }/class/join/${ a.groupId }`;
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsxs)(r, {
                        children: [
                            'Have your students visit this link to join ',
                            (0, d.jsx)('b', {
                                children: a.groupName
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
                        children: (0, d.jsxs)(s, {
                            children: [
                                (0, d.jsx)(i.default, {
                                    size: 'large',
                                    value: r,
                                    readOnly: !0
                                }),
                                (0, d.jsx)(g.default, {
                                    onClick: () => {
                                        b(l)(r), j.default.success('Link copied!');
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
        r = e.default.div(n || (n = p`
  font-size: 20px;
`)),
        s = e.default.div.attrs({
            className: 'flex maxWidth vc'
        })(o || (o = p``));
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
}), c.register('m/z61', function(b, n) {
    a(b.exports, 'GroupViewHeader', function() {
        return C;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('GzycZ'),
        h = c('IsmrL'),
        i = c('M1Vx4'),
        j = c('cR5QE'),
        k = c('5nJMd26'),
        l = c('gSUVO'),
        m = c('4jOgw8'),
        n = c('Ynp9Z7'),
        o = c('j/N3t'),
        p = c('qgO2124'),
        q = c('PjB0f'),
        r = c('k0s2g17'),
        s = c('seamH'),
        t = c('XZQjh'),
        u = c('EL45R'),
        v = c('uVDHR'),
        w = c('KOgpf');
    let x, y, z, A, B = a => a;
    const C = a => {
            const D = e.useMemo(() => a.data ? [{
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
                            placeholder: a.data.name,
                            okText: 'Save',
                            onOk: async D => {
                                await (0, q.requestAsPromise)({
                                    url: '/api/v1/groups/rename',
                                    data: {
                                        groupId: a.data._id,
                                        newName: D
                                    }
                                }), (0, g.invalidateGroup)(a.data._id);
                            }
                        });
                    }
                },
                {
                    key: 'modify-auto-accept',
                    label: (a.data.autoAccept ? 'Disable' : 'Enable') + ' auto-accept',
                    icon: (0, d.jsx)(p.default, {}),
                    onClick: () => {
                        (0, v.Request)({
                            url: '/api/v1/groups/auto-accept',
                            data: {
                                groupId: a.data._id,
                                autoAcceptOn: !a.data.autoAccept
                            },
                            success: () => {
                                j.default.success({
                                    title: 'Auto-accept ' + (a.data.autoAccept ? 'disabled' : 'enabled'),
                                    content: a.data.autoAccept ? 'When students attempt to join this class, you will be asked to approve their request.' : 'Students can now join this class without manual approval by visiting the join link.'
                                }), (0, g.invalidateGroup)(a.data._id);
                            },
                            error: a => {
                                (0, q.throwMessageError)({
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
                    icon: (0, d.jsx)(m.default, {}),
                    danger: !0,
                    onClick: () => {
                        j.default.confirm({
                            title: 'Are you sure you want to delete this class?',
                            okText: 'Yes',
                            okType: 'danger',
                            onOk: async () => {
                                await (0, q.requestAsPromise)({
                                    url: `/api/v1/groups/delete/${ a.data._id }`
                                }), (0, t.invalidateClasses)(), (0, r.NavigateTo)(s.default.navigation.homeUrl);
                            }
                        });
                    }
                }
            ] : [], [a.data]);
            return a.data ? (0, d.jsxs)(D, {
                children: [
                    (0, d.jsxs)(E, {
                        children: [
                            (0, d.jsxs)(k.default, {
                                direction: 'horizontal',
                                size: 20,
                                wrap: !0,
                                children: [
                                    (0, d.jsx)(F, {
                                        style: {
                                            background: a.data.color
                                        }
                                    }),
                                    (0, d.jsx)(G, {
                                        children: a.data.name
                                    })
                                ]
                            }),
                            (0, d.jsx)('div', {
                                children: a.customRightComponent ? a.customRightComponent : (0, d.jsx)(i.default, {
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
                    a.data.invites.length ? (0, d.jsx)(k.default, {
                        direction: 'vertical',
                        size: 15,
                        className: 'maxWidth',
                        style: {
                            marginTop: 20
                        },
                        children: a.data.invites.map(D => (0, d.jsx)(w.GroupViewInvite, {
                            id: D._id,
                            name: D.name,
                            email: D.email,
                            groupId: a.data._id
                        }, D._id))
                    }) : null
                ]
            }) : (0, d.jsx)('div', {
                style: {
                    height: 160
                }
            });
        },
        D = f.default.div.attrs({
            className: 'maxWidth'
        })(x || (x = B`
  padding: 40px 0px;
  flex-shrink: 0;
`)),
        E = f.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(y || (y = B``)),
        F = f.default.div(z || (z = B`
  height: 80px;
  width: 80px;
  border-radius: 8px;
`)),
        G = f.default.div(A || (A = B`
  font-size: 36px;
  font-weight: ${ 0 };
`), l.FontWeights.UltraBold);
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
}), c.register('Ynp9Z7', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('6bYDI7'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'EditOutlined';
    var i = e.forwardRef(h);
}), c.register('6bYDI7', function(b, c) {
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
                    d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'
                }
            }]
        },
        name: 'edit',
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
}), c.register('k0s2g17', function(b, n) {
    a(b.exports, 'NavigateTo', function() {
        return e;
    });
    var d = c('Cr/BM');
    const e = a => {
        d.history.push(a);
    };
}), c.register('EL45R', function(n, o) {
    a(n.exports, 'promptModal', function() {
        return z;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('nLioi'),
        g = c('UaRy4'),
        h = c('c6x8w'),
        i = c('cR5QE');
    const j = e.forwardRef(({
        rules: k,
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
            validate: () => p.validateFields().then(k => k.input)
        })), (0, d.jsx)(g.default, {
            form: p,
            style: {
                marginTop: 3
            },
            children: (0, d.jsx)(g.default.Item, {
                name: 'input',
                rules: k,
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
        afterClose: z,
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
            afterClose: z,
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
    const B = q => new Promise((s, t) => {
        const C = document.createElement('div');
        document.body.appendChild(C);
        const {
            onOk: D,
            ...E
        } = F;
        let G = {
            ...E,
            submit: async function(F) {
                if (D) {
                    const H = await D(F);
                    (H || void 0 === H) && i(F);
                } else
                    i(F);
            },
            close: i,
            visible: !0
        };

        function H(F) {
            G = {
                ...G,
                visible: !1,
                afterClose: () => (F => {
                    r(v).unmountComponentAtNode(C) && C.parentNode && C.parentNode.removeChild(C), void 0 !== F ? s(F) : t(F);
                })(F)
            }, j(G);
        }

        function I(F) {
            r(v).render((0, d.jsx)(y, {
                ...F
            }), C);
        }
        I(G);
    });
}), c.register('KOgpf', function(b, d) {
    a(b.exports, 'GroupViewInvite', function() {
        return u;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('lmfrI'),
        g = c('iMnBi'),
        h = c('IsmrL'),
        i = c('M1Vx4'),
        j = c('jrTkz0'),
        k = c('5nJMd26'),
        l = c('YfLmS'),
        m = c('oSNZM'),
        n = c('j/N3t'),
        o = c('uVDHR'),
        p = c('PjB0f'),
        q = c('GzycZ');
    let r, s, t = a => a;
    const u = a => {
            const v = (w = !0) => {
                (0, o.Request)({
                    url: '/api/v1/groups/invites/' + (w ? 'accept' : 'deny'),
                    data: {
                        inviteId: a.id
                    },
                    success: () => {
                        w && j.default.success('Student added to class!'), (0, q.invalidateGroup)(a.groupId);
                    },
                    error: a => {
                        (0, p.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error replying to invite'
                            }
                        });
                    }
                });
            };
            return (0, d.jsxs)(v, {
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
                    (0, d.jsxs)(w, {
                        children: [
                            (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsx)('div', {
                                        children: (0, d.jsx)('b', {
                                            children: a.name
                                        })
                                    }),
                                    (0, d.jsx)('div', {
                                        children: (0, d.jsx)('i', {
                                            children: a.email
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
                                        (0, d.jsx)(l.default, {
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
        v = e.default.div.attrs({
            className: 'maxWidth light-shadow'
        })(r || (r = t`
  border-radius: 8px;
  background: ${ 0 };
  overflow: hidden;
`), f.default.White),
        w = e.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(s || (s = t`
  padding: 20px 35px;
`));
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
}), c.register('oSNZM', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('lByv9'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var i = e.forwardRef(h);
}), c.register('lByv9', function(b, c) {
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
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), c.register('Lsoyi', function(b, z) {
    a(b.exports, 'GroupViewMembers', function() {
        return w;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('GzycZ'),
        g = c('IsmrL'),
        h = c('M1Vx4'),
        i = c('jrTkz0'),
        j = c('cR5QE'),
        k = c('5nJMd26'),
        l = c('VaygL'),
        m = c('4jOgw8'),
        n = c('Ynp9Z7'),
        o = c('j/N3t'),
        p = c('rFtvN1'),
        q = c('EL45R'),
        r = c('PjB0f'),
        s = c('gSUVO'),
        t = c('VsZIM'),
        u = c('0wLl2'),
        v = c('k0s2g17');
    const w = a => {
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
                                        }), i.default.success('Student renamed!'), (0, f.invalidateGroup)(a.groupId);
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
                                        }), i.default.success('Student removed!'), (0, f.invalidateGroup)(a.groupId);
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
                                onClick: a => a.stopPropagation(),
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
        ], [a.groupId]);
        return (null === (x = a.members) || void 0 === x ? void 0 : x.length) ? (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(l.default, {
                    size: 'large',
                    dataSource: a.members.sort((a, x) => a.name.localeCompare(x.name)),
                    columns: B,
                    pagination: !1,
                    onRow: x => ({
                        style: {
                            cursor: 'pointer'
                        },
                        onClick: () => {
                            var C;
                            C = x._id, (0, r.isUpgraded)() ? (0, v.NavigateTo)(`/class/${ a.groupId }/student/${ C }`) : z();
                        }
                    }),
                    rowKey: a => a._id
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
}), c.register('rFtvN1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => {
        null == a || a.stopPropagation();
    };
}), c.register('r2BNY', function(b, p) {
    a(b.exports, 'GroupViewTopNavigationHeader', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('EKzax2'),
        f = c('iMnBi'),
        g = c('1//3g');
    const h = a => (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(g.default, {
            includeSpacer: !0,
            children: (0, d.jsx)(e.default, {
                options: [{
                        id: 'home',
                        label: 'Home',
                        icon: (0, d.jsx)(f.default, {
                            name: 'fas fa-home'
                        }),
                        path: `/class/${ a.id }`
                    },
                    {
                        id: 'reports',
                        label: 'Reports',
                        icon: (0, d.jsx)(f.default, {
                            name: 'fas fa-analytics'
                        }),
                        path: `/class/${ a.id }/reports`
                    }
                ]
            })
        })
    });
}), c.register('EKzax2', function(b, p) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('UnfL724'),
        h = c('dN+BG24'),
        i = c('HKMol0');
    let j, k, l = a => a;
    var m = a => {
        const n = e.useMemo(() => {
                var o;
                return null !== (o = a.theme) && void 0 !== o ? o : g.SiteHeaderTheme.light;
            }, [a.theme]),
            o = e.useMemo(() => {
                var p;
                return null !== (p = a.alpha) && void 0 !== p ? p : h.SiteHeaderAlpha.standard;
            }, [a.alpha]),
            p = e.useMemo(() => {
                const q = o === h.SiteHeaderAlpha.none ? 1 : n === g.SiteHeaderTheme.light ? 0.85 : 0.45;
                return n === g.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ q })` : `rgba(16, 16, 16, ${ q })`;
            }, [
                n,
                o
            ]),
            q = e.useMemo(() => n === g.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [n]);
        return (0, d.jsxs)(n, {
            background: p,
            borderColor: q,
            children: [
                (0, d.jsxs)(o, {
                    children: [
                        (0, d.jsx)(i.default, {
                            options: a.options,
                            selectedOption: a.selectedOption,
                            theme: n
                        }),
                        (0, d.jsx)('div', {
                            children: a.rightSideContent
                        })
                    ]
                }),
                a.bottomContent
            ]
        });
    };
    const n = f.default.div.attrs({
            className: 'maxWidth'
        })(j || (j = l`
  background: ${ 0 };
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${ 0 };
`), a => a.background, a => a.borderColor),
        o = f.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(k || (k = l``));
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
}), c.register('HKMol0', function(b, q) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('5nJMd26'),
        f = c('pSEDe2'),
        g = c('h99Nu');
    let h;
    var i = a => (0, d.jsx)(j, {
        children: (0, d.jsx)(e.default, {
            direction: 'horizontal',
            size: 8,
            wrap: !0,
            children: a.options.map(b => (0, d.jsx)(f.default, {
                option: b,
                selected: a.selectedOption === b.id,
                theme: a.theme
            }, `option-${ b.id }`))
        })
    });
    const j = g.default.div.attrs({
        className: 'scroll-x'
    })(h || (h = (a => a)`
  flex: 1;
`));
}), c.register('pSEDe2', function(b, q) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('UnfL724'),
        g = c('h99Nu'),
        h = c('cdiGP23'),
        i = c('0R8EW'),
        j = c('KzqIz'),
        k = c('iYEuk12');
    let l;
    var m = a => {
        const {
            theme: n,
            option: o
        } = p, {
            pathname: q
        } = (0, j.useLocation)(), {
            label: r,
            icon: s,
            path: t,
            otherMatchingPaths: u
        } = v, w = (() => {
            if (t) {
                if ((0, i.matchPath)({
                        path: t
                    }, q))
                    return !0;
                if ((null == u ? void 0 : u.length) && u.some(p => (0, i.matchPath)({
                        path: p
                    }, q)))
                    return !0;
            }
            return !1;
        })(), x = e.useMemo(() => !!w || p.selected, [
            w,
            p.selected
        ]), y = e.useMemo(() => x ? '#1677ff' : 'transparent', [
            n,
            x
        ]), z = e.useMemo(() => x ? h.default.White : n === f.SiteHeaderTheme.light ? 'rgb(26, 27, 37)' : h.default.White, [
            n,
            x
        ]), A = e.useMemo(() => x ? y : n === f.SiteHeaderTheme.light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)', [
            n,
            x,
            y
        ]);
        return (0, d.jsx)(k.default, {
            to: t,
            target: p.option.target,
            onClick: v.onSelect,
            style: {
                cursor: 'pointer'
            },
            children: (0, d.jsxs)(n, {
                background: y,
                color: z,
                hoverBackground: A,
                children: [
                    s ? (0, d.jsx)('span', {
                        style: {
                            marginRight: 6,
                            fontSize: '0.9em'
                        },
                        children: s
                    }) : null,
                    r
                ]
            })
        });
    };
    const n = g.default.div.attrs({
        className: 'flex-center'
    })(l || (l = (a => a)`
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
}), c.register('iYEuk12', function(b, j) {
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
}), c.register('JegR3', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('WKaIG'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var i = e.forwardRef(h);
}), c.register('WKaIG', function(b, c) {
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
                    d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
                }
            }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), c.register('CrMLT9', function(p, t) {
    a(p.exports, 'default', function() {
        return A;
    });
    var d = c('b5p1k13'),
        e = c('WfHYJ18'),
        f = c('cabca9'),
        g = c('aCkIb5'),
        h = c('PKxjP16'),
        i = c('zTitA16'),
        j = c('MvitG9'),
        k = c('oG3bd5'),
        l = c('uPP4W'),
        m = c('VAIs1'),
        n = function(a) {
            (0, j.default)(p, a);
            var o = (0, k.default)(p);

            function p(a) {
                var q;
                (0, h.default)(this, p), (q = o.call(this, a)).handleChange = function(a) {
                    var r = q.props,
                        s = r.disabled,
                        t = r.onChange;
                    s || ('checked' in q.props || q.setState({
                        checked: a.target.checked
                    }), t && t({
                        target: (0, g.default)((0, g.default)({}, q.props), {}, {
                            checked: a.target.checked
                        }),
                        stopPropagation: function() {
                            a.stopPropagation();
                        },
                        preventDefault: function() {
                            a.preventDefault();
                        },
                        nativeEvent: a.nativeEvent
                    }));
                }, q.saveInput = function(a) {
                    q.input = a;
                };
                var r = 'checked' in a ? a.checked : a.defaultChecked;
                return q.state = {
                    checked: r
                }, q;
            }
            return (0, i.default)(p, [{
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
                            A = r.tabIndex,
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
                            L = Object.keys(K).reduce(function(q, b) {
                                return 'aria-' !== b.substr(0, 5) && 'data-' !== b.substr(0, 5) && 'role' !== b || (q[b] = K[b]), q;
                            }, {}),
                            M = this.state.checked,
                            N = b(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return b(l).createElement('span', {
                            className: N,
                            style: u
                        }, b(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: A,
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
                        }, L)), b(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(a, b) {
                    return 'checked' in a ? (0, g.default)((0, g.default)({}, b), {}, {
                        checked: a.checked
                    }) : null;
                }
            }]), p;
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
    var o = p;
}), c.register('b5p1k13', function(b, c) {
    function d() {
        return d = Object.assign || function(a) {
            for (var e = 1; e < arguments.length; e++) {
                var f = arguments[e];
                for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (a[g] = f[g]);
            }
            return a;
        }, d.apply(this, arguments);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('WfHYJ18', function(b, c) {
    function d(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('cabca9', function(b, g) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('l2czd17');

    function e(a, b) {
        if (null == a)
            return {};
        var f, g, h = (0, d.default)(a, b);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(a);
            for (g = 0; g < i.length; g++)
                f = i[g], b.indexOf(f) >= 0 || Object.prototype.propertyIsEnumerable.call(a, f) && (h[f] = a[f]);
        }
        return h;
    }
}), c.register('l2czd17', function(b, c) {
    function d(a, b) {
        if (null == a)
            return {};
        var e, f, g = {},
            h = Object.keys(a);
        for (f = 0; f < h.length; f++)
            e = h[f], b.indexOf(e) >= 0 || (g[e] = a[e]);
        return g;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('aCkIb5', function(b, g) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('WfHYJ18');

    function e(a, b) {
        var f = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(a);
            b && (g = g.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), f.push.apply(f, g);
        }
        return f;
    }

    function f(a) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? e(Object(h), !0).forEach(function(g) {
                (0, d.default)(a, g, h[g]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(h)) : e(Object(h)).forEach(function(g) {
                Object.defineProperty(a, g, Object.getOwnPropertyDescriptor(h, g));
            });
        }
        return a;
    }
}), c.register('PKxjP16', function(b, c) {
    function d(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('zTitA16', function(b, c) {
    function d(a, b) {
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(a, f.key, f);
        }
    }

    function e(a, b, c) {
        return b && d(a.prototype, b), c && d(a, c), a;
    }
    a(b.exports, 'default', function() {
        return e;
    });
}), c.register('MvitG9', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('/jzVl15');

    function e(a, b) {
        if ('function' != typeof b && null !== b)
            throw new TypeError('Super expression must either be null or a function');
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                writable: !0,
                configurable: !0
            }
        }), b && (0, d.default)(a, b);
    }
}), c.register('/jzVl15', function(b, c) {
    function d(a, b) {
        return d = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, d(a, b);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('oG3bd5', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('fmP4g15'),
        e = c('5UNjR15'),
        f = c('EDgo89');

    function g(a) {
        var h = (0, e.default)();
        return function() {
            var i, j = (0, d.default)(a);
            if (h) {
                var k = (0, d.default)(this).constructor;
                i = Reflect.construct(j, arguments, k);
            } else
                i = j.apply(this, arguments);
            return (0, f.default)(this, i);
        };
    }
}), c.register('fmP4g15', function(b, c) {
    function d(a) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, d(a);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('5UNjR15', function(b, c) {
    function d() {
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
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('EDgo89', function(d, d) {
    a(d.exports, 'default', function() {
        return f;
    });
    var d = c('V09ZX15'),
        e = c('//YgM17');

    function f(a, c) {
        if (c && ('object' === b(d)(c) || 'function' == typeof c))
            return c;
        if (void 0 !== c)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(a);
    }
}), c.register('V09ZX15', function(a, b) {
    function d(b) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (a.exports = d = function(a) {
            return typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0) : (a.exports = d = function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0), d(b);
    }
    a.exports = d, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('//YgM17', function(b, c) {
    function d(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('bdX0N23', function(b, d) {
    a(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return e;
    });
    var d = c('3EnRx');
    const e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
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
}), c.register('eb1oQ2', function(b, l) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');

    function e() {
        const [, f] = d.useReducer(f => f + 1, 0);
        return f;
    }
}), c.register('hulaC5', function(l, m) {
    a(l.exports, 'responsiveArray', function() {
        return f;
    }), a(l.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('ffwc8');
    const f = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function g() {
        const [, h] = (0, e.useToken)(), i = (h => ({
            xs: `(max-width: ${ h.screenXSMax }px)`,
            sm: `(min-width: ${ h.screenSM }px)`,
            md: `(min-width: ${ h.screenMD }px)`,
            lg: `(min-width: ${ h.screenLG }px)`,
            xl: `(min-width: ${ h.screenXL }px)`,
            xxl: `(min-width: ${ h.screenXXL }px)`
        }))((h => {
            const j = k,
                l = [].concat(f).reverse();
            return l.forEach((k, l) => {
                const m = k.toUpperCase(),
                    n = `screen${ m }Min`,
                    o = `screen${ m }`;
                if (!(j[n] <= j[o]))
                    throw new Error(`${ n }<=${ o } fails : !(${ j[n] }<=${ j[o] })`);
                if (l < l.length - 1) {
                    const p = `screen${ m }Max`;
                    if (!(j[o] <= j[p]))
                        throw new Error(`${ o }<=${ p } fails : !(${ j[o] }<=${ j[p] })`);
                    const q = `screen${ l[l + 1].toUpperCase() }Min`;
                    if (!(j[p] <= j[q]))
                        throw new Error(`${ p }<=${ q } fails : !(${ j[p] }<=${ j[q] })`);
                }
            }), k;
        })(h));
        return b(d).useMemo(() => {
            const j = new Map();
            let k = -1,
                l = {};
            return {
                matchHandlers: {},
                dispatch: k => (l = k, j.forEach(j => j(l)), j.size >= 1),
                subscribe(i) {
                    return j.size || this.register(), k += 1, j.set(k, i), i(l), k;
                },
                unsubscribe(k) {
                    j.delete(k), j.size || this.unregister();
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
                                } = p;
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
        }, [h]);
    }
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
});