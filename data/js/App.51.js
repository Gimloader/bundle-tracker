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
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _u;
    });
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....');
    var _u = () => {
        var v;
        const {
            id: w,
            studentId: x
        } = (0, j.useParams)(), [y, z] = (0, k.useSearchParams)();
        var A;
        const B = Math.max(1, null !== (A = Number(y.get('page'))) && void 0 !== A ? A : 1),
            [C, D] = h.useState(0),
            E = h.useRef(null);
        (0, r.default)(E, F => {
            var G, H;
            D(null !== (H = null === (G = F.target) || void 0 === G ? void 0 : G.offsetTop) && void 0 !== H ? H : 0);
        });
        const {
            isLoading: F,
            error: G,
            data: H
        } = (0, l.default)(w), {
            isLoading: I,
            error: J,
            data: K,
            isFetching: L
        } = (0, p.useMemberReports)(B, x);
        h.useEffect(() => {
            window.scrollTo(0, 0);
        }, [B]);
        const M = h.useMemo(() => {
                if (G)
                    return G;
                if (J)
                    return J;
                if (H) {
                    if (!H.members.find(N => N._id === x))
                        return {
                            message: {
                                text: 'This link is invalid. This student may have been removed from your class.'
                            }
                        };
                }
            }, [
                G,
                w,
                H,
                J
            ]),
            N = null == H || null === (v = H.members) || void 0 === v ? void 0 : v.find(O => O._id === x),
            O = K && (null == K ? void 0 : K.totalItems) ? (0, g.jsx)(s.ReportPagination, {
                total: K.totalItems,
                current: B,
                onPageChange: P => {
                    z({
                        page: P
                    });
                }
            }) : null;
        return (0, g.jsxs)(i.Container, {
            children: [
                (0, g.jsx)(m.Title, {
                    title: (null == N ? void 0 : N.name) || 'Student'
                }),
                (0, g.jsx)(o.GroupViewTopNavigationHeader, {
                    id: w
                }),
                (0, g.jsxs)(i.ContentContainer, {
                    ref: E,
                    children: [
                        M ? (0, g.jsx)('div', {
                            style: {
                                height: 35
                            }
                        }) : (0, g.jsx)(n.GroupViewStudentHeader, {
                            student: N,
                            group: H,
                            children: O
                        }),
                        (0, g.jsx)(i.Content, {
                            className: 'flex',
                            style: {
                                padding: 0
                            },
                            children: (0, m.isUpgraded)() ? F || I ? (0, g.jsx)(q.default, {
                                paragraph: {
                                    rows: 4
                                },
                                title: !1,
                                active: !0,
                                className: 'maxWidth',
                                style: {
                                    padding: 35
                                }
                            }) : M ? (0, g.jsx)('div', {
                                style: {
                                    padding: 35
                                },
                                children: (null == M || null === (_P = M.message) || void 0 === _P ? void 0 : _P.text) || 'There was an error fetching this class. Please try again.'
                            }) : (0, g.jsx)(t.GroupViewStudentTable, {
                                data: K.items,
                                isFetching: L,
                                playerName: null == N ? void 0 : N.name,
                                containerTopOffset: C,
                                pagination: O,
                                totalItems: K.totalItems
                            }) : (0, g.jsx)('div', {
                                style: {
                                    padding: 35
                                },
                                children: 'Upgrade to view student performance data.'
                            })
                        })
                    ]
                })
            ]
        });
        var _P;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'GroupViewStudentHeader', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = k => {
        const {
            student: l,
            group: m
        } = k;
        return l && m ? (0, f.jsxs)('div', {
            className: 'flex maxWidth between vc',
            style: {
                padding: '40px 0px'
            },
            children: [
                (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsxs)(h.default, {
                            children: [
                                (0, f.jsx)(h.default.Item, {
                                    children: (0, f.jsx)(i.default, {
                                        to: `/class/${ m._id }`,
                                        children: m.name
                                    })
                                }),
                                (0, f.jsx)(h.default.Item, {
                                    children: 'Student Progress'
                                })
                            ]
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                fontSize: '2em',
                                fontWeight: g.FontWeights.UltraBold,
                                marginTop: 2
                            },
                            children: l.name
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                marginTop: '0.1em'
                            },
                            children: l.email
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    children: k.children
                })
            ]
        }) : (0, f.jsx)('div', {
            style: {
                height: 154
            }
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = c('.....').default;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    }, function(f) {
        return _w = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = function(q, r) {
            var s = {};
            for (var t in q)
                Object.prototype.hasOwnProperty.call(q, t) && r.indexOf(t) < 0 && (s[t] = q[t]);
            if (null != q && 'function' == typeof Object.getOwnPropertySymbols) {
                var u = 0;
                for (t = Object.getOwnPropertySymbols(q); u < t.length; u++)
                    r.indexOf(t[u]) < 0 && Object.prototype.propertyIsEnumerable.call(q, t[u]) && (s[t[u]] = q[t[u]]);
            }
            return s;
        };

    function q(r, s, t, u) {
        const v = t.indexOf(r) === t.length - 1,
            w = function(x, y) {
                if (!x.breadcrumbName)
                    return null;
                const z = Object.keys(y).join('|');
                return x.breadcrumbName.replace(new RegExp(`:(${ z })`, 'g'), (A, B) => y[B] || A);
            }(r, s);
        return v ? i.createElement('span', null, w) : i.createElement('a', {
            href: `#/${ u.join('/') }`
        }, w);
    }
    const t = (u, v) => (u = (u || '').replace(/^\//, ''), Object.keys(v).forEach(w => {
            u = u.replace(`:${ w }`, v[w]);
        }), u),
        u = (v, w, x) => {
            const y = (0, w.default)(v),
                z = t(w || '', x);
            return z && y.push(z), y;
        },
        v = w => {
            var {
                prefixCls: x,
                separator: y = '/',
                style: z,
                className: A,
                rootClassName: B,
                routes: C,
                children: D,
                itemRender: E = F,
                params: G = {}
            } = w, H = p(w, [
                'prefixCls',
                'separator',
                'style',
                'className',
                'rootClassName',
                'routes',
                'children',
                'itemRender',
                'params'
            ]);
            const {
                getPrefixCls: I,
                direction: J
            } = i.useContext(j.ConfigContext);
            let K;
            const L = I('breadcrumb', x),
                [M, N] = (0, o.default)(L);
            if (C && C.length > 0) {
                const O = [];
                K = C.map(P => {
                    const Q = t(P.path, G);
                    let R;
                    Q && O.push(Q), P.children && P.children.length && (R = i.createElement(k.default, {
                        items: P.children.map(S => ({
                            key: S.path || S.breadcrumbName,
                            label: E(S, G, C, u(O, S.path, G))
                        }))
                    }));
                    const S = {
                        separator: y
                    };
                    return R && (S.overlay = R), i.createElement(m.default, Object.assign({}, S, {
                        key: Q || P.breadcrumbName
                    }), E(P, G, C, O));
                });
            } else
                D && (K = (0, h.default)(D).map((P, Q) => P ? (0, l.cloneElement)(P, {
                    separator: y,
                    key: Q
                }) : P));
            const P = b(g)(L, {
                [`${ L }-rtl`]: 'rtl' === J
            }, A, B, N);
            return M(i.createElement('nav', Object.assign({
                className: P,
                style: z
            }, H), i.createElement('ol', null, K)));
        };
    v.Item = m.default, v.Separator = n.default;
    var _w = v;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    }, function(f) {
        return _l = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
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
    const k = l => {
        const {
            prefixCls: m,
            separator: n = '/',
            children: o,
            menu: p,
            overlay: q,
            dropdownProps: r
        } = l, s = j(l, [
            'prefixCls',
            'separator',
            'children',
            'menu',
            'overlay',
            'dropdownProps'
        ]), {
            getPrefixCls: t
        } = g.useContext(h.ConfigContext), u = t('breadcrumb', m);
        let v;
        return v = 'href' in s ? g.createElement('a', Object.assign({
            className: `${ u }-link`
        }, s), o) : g.createElement('span', Object.assign({
            className: `${ u }-link`
        }, s), o), v = (w => {
            if (p || q) {
                const x = Object.assign({}, r);
                return 'overlay' in l && (x.overlay = q), g.createElement(i.default, Object.assign({
                    menu: p,
                    placement: 'bottom'
                }, x), g.createElement('span', {
                    className: `${ u }-overlay-link`
                }, w, g.createElement(f.default, null)));
            }
            return w;
        })(v), null != o ? g.createElement('li', null, v, n && g.createElement('span', {
            className: `${ u }-separator`
        }, n)) : null;
    };
    k.__ANT_BREADCRUMB_ITEM = !0;
    var _l = k;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    const h = i => {
        let {
            children: j
        } = i;
        const {
            getPrefixCls: k
        } = f.useContext(g.ConfigContext), l = k('breadcrumb');
        return f.createElement('span', {
            className: `${ l }-separator`
        }, j || '/');
    };
    h.__ANT_BREADCRUMB_SEPARATOR = !0;
    var _i = h;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const i = j => {
        const {
            componentCls: k,
            iconCls: l
        } = j;
        return {
            [k]: Object.assign(Object.assign({}, (0, h.resetComponent)(j)), {
                color: j.breadcrumbBaseColor,
                fontSize: j.breadcrumbFontSize,
                [l]: {
                    fontSize: j.breadcrumbIconFontSize
                },
                ol: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: 0,
                    padding: 0,
                    listStyle: 'none'
                },
                a: Object.assign({
                    color: j.breadcrumbLinkColor,
                    transition: `color ${ j.motionDurationMid }`,
                    padding: `0 ${ j.paddingXXS }px`,
                    borderRadius: j.borderRadiusSM,
                    height: j.lineHeight * j.fontSize,
                    display: 'inline-block',
                    marginInline: -j.marginXXS,
                    '&:hover': {
                        color: j.breadcrumbLinkColorHover,
                        backgroundColor: j.colorBgTextHover
                    }
                }, (0, h.genFocusStyle)(j)),
                'li:last-child': {
                    color: j.breadcrumbLastItemColor,
                    [`& > ${ k }-separator`]: {
                        display: 'none'
                    }
                },
                [`${ k }-separator`]: {
                    marginInline: j.breadcrumbSeparatorMargin,
                    color: j.breadcrumbSeparatorColor
                },
                [`${ k }-link`]: {
                    [`\n          > ${ l } + span,\n          > ${ l } + a\n        `]: {
                        marginInlineStart: j.marginXXS
                    }
                },
                [`${ k }-overlay-link`]: {
                    borderRadius: j.borderRadiusSM,
                    height: j.lineHeight * j.fontSize,
                    display: 'inline-block',
                    padding: `0 ${ j.paddingXXS }px`,
                    marginInline: -j.marginXXS,
                    [`> ${ l }`]: {
                        marginInlineStart: j.marginXXS,
                        fontSize: j.fontSizeIcon
                    },
                    '&:hover': {
                        color: j.breadcrumbLinkColorHover,
                        backgroundColor: j.colorBgTextHover,
                        a: {
                            color: j.breadcrumbLinkColorHover
                        }
                    },
                    a: {
                        '&:hover': {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                [`&${ j.componentCls }-rtl`]: {
                    direction: 'rtl'
                }
            })
        };
    };
    var _j = (0, f.default)('Breadcrumb', k => {
        const l = (0, g.merge)(k, {
            breadcrumbBaseColor: k.colorTextDescription,
            breadcrumbFontSize: k.fontSize,
            breadcrumbIconFontSize: k.fontSize,
            breadcrumbLinkColor: k.colorTextDescription,
            breadcrumbLinkColorHover: k.colorText,
            breadcrumbLastItemColor: k.colorText,
            breadcrumbSeparatorMargin: k.marginXS,
            breadcrumbSeparatorColor: k.colorTextDescription
        });
        return [i(l)];
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'useMemberReports', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = (i, j) => (0, f.useQuery)({
        queryKey: [
            'group-member-reports',
            j,
            {
                page: i
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, g.requestAsPromise)({
            url: '/api/game-report/fetch-by-group-member',
            data: {
                page: i,
                groupMemberId: j
            }
        })
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....');

    function h() {}
    let i;
    const j = k => i || (i = function(l) {
        let m = !1,
            n = [];
        const o = new Map(),
            p = new(l || window.ResizeObserver)((q, r) => {
                n = n.concat(q), m || window.requestAnimationFrame(function() {
                    const s = new Set();
                    for (let t = 0; t < n.length; t++) {
                        if (s.has(n[t].target))
                            continue;
                        s.add(n[t].target);
                        const u = o.get(n[t].target);
                        null == u || u.forEach(v => v(n[t], r));
                    }
                    n = [], t = !1;
                }), m = !0;
            });
        return {
            observer: p,
            subscribe(q, r) {
                var s;
                p.observe(q);
                const t = null !== (s = o.get(q)) && void 0 !== s ? s : [];
                t.push(r), o.set(q, t);
            },
            unsubscribe(q, r) {
                var s;
                const t = null !== (s = o.get(q)) && void 0 !== s ? s : [];
                if (1 === t.length)
                    return p.unobserve(q), void o.delete(q);
                const u = t.indexOf(r); -
                1 !== u && t.splice(u, 1), o.set(q, t);
            }
        };
    }(k));
    var _k = function(l, m, n = {}) {
        const o = j(n.polyfill),
            p = (0, g.default)(m);
        return (0, f.default)(() => {
            let q = !1;
            const r = l && 'current' in l ? l.current : l;
            if (!r)
                return h;

            function s(t, u) {
                q || p.current(t, u);
            }
            return o.subscribe(r, s), () => {
                q = !0, o.unsubscribe(r, s);
            };
        }, [
            l,
            o,
            p
        ]), o.observer;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'ReportPagination', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    c('.....');
    const _h = i => {
        const {
            total: j,
            current: k,
            onPageChange: l
        } = i;
        return (0, f.jsx)(g.default, {
            simple: !0,
            current: k,
            total: j,
            defaultPageSize: 10,
            onChange: l
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'GroupViewStudentTable', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    const _n = o => {
            const [p, q] = i.useState();
            return o.totalItems ? (0, f.jsxs)('div', {
                id: 'student-report-container',
                children: [
                    (0, f.jsx)(g.default, {
                        theme: {
                            token: {
                                padding: 35
                            }
                        },
                        children: (0, f.jsx)(h.default, {
                            dataSource: o.data.map(r => ({
                                key: r._id,
                                ...r
                            })),
                            columns: _o,
                            bordered: !0,
                            pagination: !1,
                            tableLayout: 'auto',
                            size: 'large',
                            onRow: r => ({
                                onClick: () => {
                                    q(r);
                                },
                                style: {
                                    cursor: 'pointer'
                                }
                            }),
                            loading: {
                                spinning: o.isFetching,
                                indicator: null
                            },
                            sticky: {
                                offsetHeader: o.containerTopOffset,
                                getContainer: () => document.getElementById('student-report-container')
                            }
                        })
                    }),
                    o.pagination ? (0, f.jsx)('div', {
                        className: 'maxWidth flex-center',
                        style: {
                            padding: '35px 0px'
                        },
                        children: o.pagination
                    }) : null,
                    p ? (0, f.jsx)(m.GameReportCompletionModal, {
                        playerName: o.playerName,
                        gameReportId: p.gameReport,
                        participantId: p._id,
                        close: () => {
                            q(void 0);
                        }
                    }) : null
                ]
            }) : (0, f.jsxs)('div', {
                style: {
                    padding: 35,
                    flex: 1
                },
                className: 'flex-column flex-center',
                children: [
                    (0, f.jsx)('img', {
                        src: '/client/img/dashboard/report.svg',
                        style: {
                            height: 80
                        }
                    }),
                    (0, f.jsxs)('div', {
                        style: {
                            textAlign: 'center',
                            fontSize: '1.15em',
                            marginTop: 10
                        },
                        children: [
                            'Check back here after this student plays a live game or assignment!',
                            ' ',
                            (0, f.jsx)('br', {}),
                            'All of their reports will show up here for you to easily check in on their progress.'
                        ]
                    })
                ]
            });
        },
        _o = [{
                title: 'Kit',
                dataIndex: 'kit',
                key: 'report-kit',
                render: (p, q) => (0, f.jsx)(j.ReportKit, {
                    kit: p,
                    dateId: q._id
                })
            },
            {
                title: 'Individual Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: p => (0, f.jsx)(k.ReportProgressAccuracyMeter, {
                    percent: p
                })
            },
            {
                title: 'Questions Answered',
                dataIndex: 'questionsAnswered',
                key: 'questions-answered',
                render: p => (0, l.numberWithCommas)(p)
            }
        ];
}), c.register('.....', function(d, e) {
    a(d.exports, 'ReportKit', function() {
        return _s;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....');
    let o, p, q, r = s => s;
    const _s = t => {
            const u = b(i)((0, j.dateFromObjectId)(t.dateId)).format('MMMM Do [at] LT');
            return (0, f.jsxs)(h.default, {
                direction: 'horizontal',
                size: 14,
                align: 'center',
                children: [
                    (0, f.jsx)('div', {
                        children: (0, f.jsx)(_t, {
                            src: (0, n.getCloudinaryUrl)(t.kit.gif),
                            style: {
                                width: 55,
                                height: 55
                            }
                        })
                    }),
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(_u, {
                                children: t.kit.title
                            }),
                            (0, f.jsx)(_v, {
                                children: u
                            }),
                            t.assignmentId ? (0, f.jsx)('div', {
                                style: {
                                    marginTop: '0.25em'
                                },
                                children: (0, f.jsx)(l.ReportLinkTag, {
                                    to: `/assignment/${ t.assignmentId }`,
                                    children: 'Assignment'
                                })
                            }) : null
                        ]
                    })
                ]
            });
        },
        _t = g.default.img(o || (o = r`
  border-radius: 5px;
  border: solid ${ 0 } 1px;
  flex-shrink: 0;
  object-fit: cover;
`), m.default.Black),
        _u = g.default.div(p || (p = r`
  font-size: 1.1em;
  font-weight: ${ 0 };
`), k.FontWeights.Bold),
        _v = g.default.div(q || (q = r`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.05em;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'ReportLinkTag', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    let i;
    const _j = k => (0, f.jsx)(_k, {
            onClick: l => null == l ? void 0 : l.stopPropagation(),
            to: k.to,
            children: k.children
        }),
        _k = (0, h.default)(g.default)(i || (i = (l => l)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'getCloudinaryUrl', function() {
        return _f;
    });
    const _f = g => {
            const h = _g(g);
            return h ? g.includes('/video/upload') ? `https://${ _h }/video/upload/${ h }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ h }` : g;
        },
        _g = h => {
            if (!_k.some(i => h.includes(i)))
                return null;
            if (h.includes(_i) && !h.includes(`/${ _j }/`))
                return null;
            const i = h.split('/');
            if (!i || !i.length || i.length < 2)
                return null;
            const j = i[i.length - 2],
                k = i[i.length - 1];
            return j && k && j.startsWith('v') ? `${ j }/${ k }` : null;
        },
        _h = 'media.gimkit.com',
        _i = 'res.cloudinary.com',
        _j = 'gimkit-production',
        _k = [
            _h,
            _i
        ];
}), c.register('.....', function(d, e) {
    a(d.exports, 'ReportProgressAccuracyMeter', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    c('.....');
    var i = c('.....');
    const _j = k => {
        const l = k.percent < 60 ? '#F44336' : k.percent < 80 ? '#FFC107' : '#66BB6A';
        return (0, f.jsx)(g.default, {
            theme: {
                components: {
                    Progress: {
                        colorText: (0, i.darken)(0.2, l)
                    }
                }
            },
            children: (0, f.jsx)(h.default, {
                type: 'dashboard',
                percent: k.percent,
                width: 65,
                strokeColor: l,
                status: 'normal'
            })
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'GameReportCompletionLink', function() {
        return _m;
    }), a(d.exports, 'GameReportCompletionModal', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    const _m = {
            icon: h.default,
            label: 'View Report',
            hiddenRender: n => (0, f.jsx)(_n, {
                playerName: n.playerName,
                gameReportId: n.link.resultLinkId,
                participantId: n.link.completionLinkId,
                close: n.close
            })
        },
        _n = o => {
            const [p, , q] = (0, k.useBoolean)(!0), [r, s] = g.useState();
            return g.useEffect(() => {
                (0, k.request)({
                    url: '/api/game-report/fetch-participant-data',
                    data: {
                        gameReportId: o.gameReportId,
                        participantId: o.participantId
                    },
                    success: t => s(t),
                    error: t => {
                        q();
                    }
                });
            }, [o.participantId]), (0, f.jsx)(i.default, {
                open: p,
                onCancel: q,
                afterClose: o.close,
                style: {
                    top: 20,
                    maxWidth: 1200
                },
                bodyStyle: {
                    minHeight: 'max-content'
                },
                closable: !0,
                width: '85%',
                footer: null,
                children: r ? (0, f.jsx)(l.default, {
                    preventScroll: !0,
                    player: {
                        name: o.playerName,
                        correctQuestionIds: r.correctQuestionIds,
                        incorrectQuestionIds: r.incorrectQuestionIds
                    },
                    questions: r.questions
                }) : (0, f.jsx)('div', {
                    className: 'maxWidth flex-center',
                    children: (0, f.jsx)(j.default, {
                        paragraph: {
                            rows: 16
                        }
                    })
                })
            });
        };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'BarChartOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
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
                    d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z'
                }
            }]
        },
        name: 'bar-chart',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CopyOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
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
                    d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'
                }
            }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    }, function(f) {
        return _q = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
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
            const G = (0, j.isPresetColor)(x) || (0, j.isPresetStatusColor)(x),
                H = Object.assign({
                    backgroundColor: x && !G ? x : void 0
                }, u),
                I = C('tag', r),
                [J, K] = (0, m.default)(I),
                L = b(g)(I, {
                    [`${ I }-${ x }`]: G,
                    [`${ I }-has-color`]: x && !G,
                    [`${ I }-hidden`]: !E,
                    [`${ I }-rtl`]: 'rtl' === D
                }, s, t, K),
                M = N => {
                    N.stopPropagation(), null == y || y(N), N.defaultPrevented || F(!1);
                },
                N = 'function' == typeof B.onClick || v && 'a' === v.type,
                O = w || null,
                P = O ? h.createElement(h.Fragment, null, O, h.createElement('span', null, v)) : v,
                Q = h.createElement('span', Object.assign({}, B, {
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
        },
        p = h.forwardRef(o);
    p.CheckableTag = l.default;
    var _q = p;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    }, function(f) {
        return _k = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
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
        const {
            getPrefixCls: s
        } = g.useContext(h.ConfigContext), t = s('tag', m), [u, v] = (0, i.default)(t), w = b(f)(t, {
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    const k = (l, m, n) => {
            const o = (0, h.default)(n);
            return {
                [`${ l.componentCls }-${ m }`]: {
                    color: l[`color${ n }`],
                    background: l[`color${ o }Bg`],
                    borderColor: l[`color${ o }Border`]
                }
            };
        },
        l = m => (0, i.genPresetColor)(m, (n, o) => {
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
        }),
        m = n => {
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
                    [`&${ r }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: n.tagDefaultColor
                    },
                    [`${ r }-close-icon`]: {
                        marginInlineStart: t,
                        color: n.colorTextDescription,
                        fontSize: n.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ n.motionDurationMid }`,
                        '&:hover': {
                            color: n.colorTextHeading
                        }
                    },
                    [`&${ r }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ n.iconCls }-close, ${ n.iconCls }-close:hover`]: {
                            color: n.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ r }-checkable-checked):hover`]: {
                            color: n.colorPrimary,
                            backgroundColor: n.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: n.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: n.colorPrimary,
                            '&:hover': {
                                backgroundColor: n.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: n.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ n.iconCls } + span, > span + ${ n.iconCls }`]: {
                        marginInlineStart: s
                    }
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
}), c.register('.....', function(d, e) {
    function f(g) {
        if ('string' != typeof g)
            return g;
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    let l;
    const m = h.default.img.attrs(n => ({
        src: n.image
    }))(l || (l = (n => n)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), n => n.size, n => n.size, n => n.customRightMargin ? n.customRightMargin : 0, n => n.showBorder && `border: solid ${ j.default.Black } 1px;`);
    var _n = o => {
        const [p, q] = g.useState(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(m, {
                    ...o,
                    onClick: r => {
                        r.stopPropagation(), o.onClick && o.onClick(), o.blockModalOpen || q(!0);
                    }
                }),
                (0, f.jsx)(i.default, {
                    open: p,
                    onCancel: r => {
                        r.stopPropagation(), q(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(o.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    const h = g.lazy(() => c('.....'));
    var _i = j => (0, f.jsx)(g.Suspense, {
        fallback: j.fallback || null,
        children: (0, f.jsx)(h, {
            latex: j.latex
        })
    });
}), c.register('.....', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('.....').resolve('emcKB')),
        import('./' + c('.....').resolve('5OCdz'))
    ]).then(() => c('.....'));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownloadOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
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
                    d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'download',
        theme: 'outlined'
    };
});