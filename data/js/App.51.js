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
c.register('qhT43', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _u;
    });
    var g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('s0zaZ'),
        j = c('zcfNM'),
        k = c('+cTfn'),
        l = c('IkpNC'),
        m = c('quE27'),
        n = c('tcXaz'),
        o = c('8/1qo'),
        p = c('g701t'),
        q = c('ZKc1Q'),
        r = c('uGyn30'),
        s = c('UCr/h1'),
        t = c('eVAtz');
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
        (0, r.default)(E, v => {
            var F, G;
            D(null !== (G = null === (F = v.target) || void 0 === F ? void 0 : F.offsetTop) && void 0 !== G ? G : 0);
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
                    if (!H.members.find(v => v._id === x))
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
            N = null == H || null === (v = H.members) || void 0 === v ? void 0 : v.find(v => v._id === x),
            O = K && (null == K ? void 0 : K.totalItems) ? (0, g.jsx)(s.ReportPagination, {
                total: K.totalItems,
                current: B,
                onPageChange: v => {
                    z({
                        page: v
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
}), c.register('tcXaz', function(d, e) {
    a(d.exports, 'GroupViewStudentHeader', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('Eh2Wh'),
        h = c('kPneg'),
        i = c('FB7HT26');
    const _j = a => {
        const {
            student: k,
            group: l
        } = a;
        return k && l ? (0, f.jsxs)('div', {
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
                                        to: `/class/${ l._id }`,
                                        children: l.name
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
                            children: k.name
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                marginTop: '0.1em'
                            },
                            children: k.email
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    children: a.children
                })
            ]
        }) : (0, f.jsx)('div', {
            style: {
                height: 154
            }
        });
    };
}), c.register('kPneg', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = c('B5nE3').default;
}), c.register('B5nE3', function(d, e) {
    a(d.exports, 'default', function() {
        return _A;
    }, function(f) {
        return _A = f;
    });
    var f = c('g8lYc'),
        g = c('/U36/'),
        h = c('6E2xk1'),
        i = c('O0Kav'),
        j = c('R2nG3'),
        k = c('xAv1a'),
        l = c('WQymh'),
        m = c('NP2lY'),
        n = c('eQsxw'),
        o = c('rgoJr'),
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
                return x.breadcrumbName.replace(new RegExp(`:(${ z })`, 'g'), (x, z) => y[z] || x);
            }(r, s);
        return v ? i.createElement('span', null, w) : i.createElement('a', {
            href: `#/${ u.join('/') }`
        }, w);
    }
    const r = (a, b) => (a = (a || '').replace(/^\//, ''), Object.keys(b).forEach(c => {
            a = a.replace(`:${ c }`, b[c]);
        }), a),
        s = (a, b, c) => {
            const t = (0, f.default)(a),
                u = r(b || '', c);
            return u && t.push(u), t;
        },
        t = a => {
            var {
                prefixCls: u,
                separator: v = '/',
                style: w,
                className: x,
                rootClassName: y,
                routes: z,
                children: _A,
                itemRender: B = C,
                params: D = {}
            } = a, E = p(a, [
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
                getPrefixCls: F,
                direction: G
            } = i.useContext(j.ConfigContext);
            let H;
            const I = F('breadcrumb', u),
                [J, K] = (0, o.default)(I);
            if (z && z.length > 0) {
                const L = [];
                H = z.map(b => {
                    const M = r(b.path, D);
                    let N;
                    M && L.push(M), b.children && b.children.length && (N = i.createElement(k.default, {
                        items: b.children.map(b => ({
                            key: b.path || b.breadcrumbName,
                            label: B(b, D, z, s(L, b.path, D))
                        }))
                    }));
                    const O = {
                        separator: v
                    };
                    return N && (O.overlay = N), i.createElement(m.default, Object.assign({}, O, {
                        key: M || b.breadcrumbName
                    }), B(b, D, z, L));
                });
            } else
                _A && (H = (0, h.default)(_A).map((a, b) => a ? (0, l.cloneElement)(a, {
                    separator: v,
                    key: b
                }) : a));
            const L = b(g)(I, {
                [`${ I }-rtl`]: 'rtl' === G
            }, x, y, K);
            return J(i.createElement('nav', Object.assign({
                className: L,
                style: w
            }, E), i.createElement('ol', null, H)));
        };
    t.Item = m.default, t.Separator = n.default;
    var u = t;
}), c.register('NP2lY', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    }, function(f) {
        return _p = f;
    });
    var f = c('OQRaD'),
        g = c('O0Kav'),
        h = c('R2nG3'),
        i = c('KW5HX'),
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
    const k = a => {
        const {
            prefixCls: l,
            separator: m = '/',
            children: n,
            menu: o,
            overlay: _p,
            dropdownProps: q
        } = a, r = j(a, [
            'prefixCls',
            'separator',
            'children',
            'menu',
            'overlay',
            'dropdownProps'
        ]), {
            getPrefixCls: s
        } = g.useContext(h.ConfigContext), t = s('breadcrumb', l);
        let u;
        return u = 'href' in r ? g.createElement('a', Object.assign({
            className: `${ t }-link`
        }, r), n) : g.createElement('span', Object.assign({
            className: `${ t }-link`
        }, r), n), u = (l => {
            if (o || _p) {
                const v = Object.assign({}, q);
                return 'overlay' in a && (v.overlay = _p), g.createElement(i.default, Object.assign({
                    menu: o,
                    placement: 'bottom'
                }, v), g.createElement('span', {
                    className: `${ t }-overlay-link`
                }, l, g.createElement(f.default, null)));
            }
            return l;
        })(u), null != n ? g.createElement('li', null, u, m && g.createElement('span', {
            className: `${ t }-separator`
        }, m)) : null;
    };
    k.__ANT_BREADCRUMB_ITEM = !0;
    var l = k;
}), c.register('eQsxw', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('R2nG3');
    const h = a => {
        let {
            children: i
        } = a;
        const {
            getPrefixCls: j
        } = f.useContext(g.ConfigContext), k = j('breadcrumb');
        return f.createElement('span', {
            className: `${ k }-separator`
        }, i || '/');
    };
    h.__ANT_BREADCRUMB_SEPARATOR = !0;
    var _i = h;
}), c.register('rgoJr', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('GhPPX'),
        g = c('qJkLY'),
        h = c('/zzpx');
    const i = a => {
        const {
            componentCls: j,
            iconCls: k
        } = a;
        return {
            [j]: Object.assign(Object.assign({}, (0, h.resetComponent)(a)), {
                color: a.breadcrumbBaseColor,
                fontSize: a.breadcrumbFontSize,
                [k]: {
                    fontSize: a.breadcrumbIconFontSize
                },
                ol: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: 0,
                    padding: 0,
                    listStyle: 'none'
                },
                a: Object.assign({
                    color: a.breadcrumbLinkColor,
                    transition: `color ${ a.motionDurationMid }`,
                    padding: `0 ${ a.paddingXXS }px`,
                    borderRadius: a.borderRadiusSM,
                    height: a.lineHeight * a.fontSize,
                    display: 'inline-block',
                    marginInline: -a.marginXXS,
                    '&:hover': {
                        color: a.breadcrumbLinkColorHover,
                        backgroundColor: a.colorBgTextHover
                    }
                }, (0, h.genFocusStyle)(a)),
                'li:last-child': {
                    color: a.breadcrumbLastItemColor,
                    [`& > ${ j }-separator`]: {
                        display: 'none'
                    }
                },
                [`${ j }-separator`]: {
                    marginInline: a.breadcrumbSeparatorMargin,
                    color: a.breadcrumbSeparatorColor
                },
                [`${ j }-link`]: {
                    [`\n          > ${ k } + span,\n          > ${ k } + a\n        `]: {
                        marginInlineStart: a.marginXXS
                    }
                },
                [`${ j }-overlay-link`]: {
                    borderRadius: a.borderRadiusSM,
                    height: a.lineHeight * a.fontSize,
                    display: 'inline-block',
                    padding: `0 ${ a.paddingXXS }px`,
                    marginInline: -a.marginXXS,
                    [`> ${ k }`]: {
                        marginInlineStart: a.marginXXS,
                        fontSize: a.fontSizeIcon
                    },
                    '&:hover': {
                        color: a.breadcrumbLinkColorHover,
                        backgroundColor: a.colorBgTextHover,
                        a: {
                            color: a.breadcrumbLinkColorHover
                        }
                    },
                    a: {
                        '&:hover': {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                [`&${ a.componentCls }-rtl`]: {
                    direction: 'rtl'
                }
            })
        };
    };
    var _j = (0, f.default)('Breadcrumb', a => {
        const k = (0, g.merge)(a, {
            breadcrumbBaseColor: a.colorTextDescription,
            breadcrumbFontSize: a.fontSize,
            breadcrumbIconFontSize: a.fontSize,
            breadcrumbLinkColor: a.colorTextDescription,
            breadcrumbLinkColorHover: a.colorText,
            breadcrumbLastItemColor: a.colorText,
            breadcrumbSeparatorMargin: a.marginXS,
            breadcrumbSeparatorColor: a.colorTextDescription
        });
        return [i(k)];
    });
}), c.register('g701t', function(d, e) {
    a(d.exports, 'useMemberReports', function() {
        return _h;
    });
    var f = c('GmO9j'),
        g = c('quE27');
    const _h = (a, d) => (0, f.useQuery)({
        queryKey: [
            'group-member-reports',
            d,
            {
                page: a
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, g.requestAsPromise)({
            url: '/api/game-report/fetch-by-group-member',
            data: {
                page: a,
                groupMemberId: d
            }
        })
    });
}), c.register('uGyn30', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('Nnw7z'),
        g = c('xRoVg');

    function h() {}
    let i;
    const j = a => i || (i = function(k) {
        let l = !1,
            m = [];
        const n = new Map(),
            o = new(k || window.ResizeObserver)((k, o) => {
                m = m.concat(k), l || window.requestAnimationFrame(function() {
                    const p = new Set();
                    for (let q = 0; q < m.length; q++) {
                        if (p.has(m[q].target))
                            continue;
                        p.add(m[q].target);
                        const r = n.get(m[q].target);
                        null == r || r.forEach(p => p(m[q], o));
                    }
                    m = [], q = !1;
                }), l = !0;
            });
        return {
            observer: o,
            subscribe(p, q) {
                var r;
                o.observe(p);
                const s = null !== (r = n.get(p)) && void 0 !== r ? r : [];
                s.push(q), n.set(p, s);
            },
            unsubscribe(p, q) {
                var r;
                const s = null !== (r = n.get(p)) && void 0 !== r ? r : [];
                if (1 === s.length)
                    return o.unobserve(p), void n.delete(p);
                const t = s.indexOf(q); -
                1 !== t && s.splice(t, 1), n.set(p, s);
            }
        };
    }(a));
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
}), c.register('UCr/h1', function(d, e) {
    a(d.exports, 'ReportPagination', function() {
        return _h;
    });
    var f = c('gRbUn'),
        g = c('jpULn');
    c('O0Kav');
    const _h = a => {
        const {
            total: i,
            current: j,
            onPageChange: k
        } = a;
        return (0, f.jsx)(g.default, {
            simple: !0,
            current: j,
            total: i,
            defaultPageSize: 10,
            onChange: k
        });
    };
}), c.register('eVAtz', function(d, e) {
    a(d.exports, 'GroupViewStudentTable', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('R2nG3'),
        h = c('v6sJ3'),
        i = c('O0Kav'),
        j = c('WHfsa1'),
        k = c('SuqDd1'),
        l = c('quE27'),
        m = c('c6fiS0');
    const _n = a => {
            const [o, p] = i.useState();
            return a.totalItems ? (0, f.jsxs)('div', {
                id: 'student-report-container',
                children: [
                    (0, f.jsx)(g.default, {
                        theme: {
                            token: {
                                padding: 35
                            }
                        },
                        children: (0, f.jsx)(h.default, {
                            dataSource: a.data.map(a => ({
                                key: a._id,
                                ...a
                            })),
                            columns: _o,
                            bordered: !0,
                            pagination: !1,
                            tableLayout: 'auto',
                            size: 'large',
                            onRow: a => ({
                                onClick: () => {
                                    p(a);
                                },
                                style: {
                                    cursor: 'pointer'
                                }
                            }),
                            loading: {
                                spinning: a.isFetching,
                                indicator: null
                            },
                            sticky: {
                                offsetHeader: a.containerTopOffset,
                                getContainer: () => document.getElementById('student-report-container')
                            }
                        })
                    }),
                    a.pagination ? (0, f.jsx)('div', {
                        className: 'maxWidth flex-center',
                        style: {
                            padding: '35px 0px'
                        },
                        children: a.pagination
                    }) : null,
                    o ? (0, f.jsx)(m.GameReportCompletionModal, {
                        playerName: a.playerName,
                        gameReportId: o.gameReport,
                        participantId: o._id,
                        close: () => {
                            p(void 0);
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
                render: (a, d) => (0, f.jsx)(j.ReportKit, {
                    kit: a,
                    dateId: d._id
                })
            },
            {
                title: 'Individual Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: a => (0, f.jsx)(k.ReportProgressAccuracyMeter, {
                    percent: a
                })
            },
            {
                title: 'Questions Answered',
                dataIndex: 'questionsAnswered',
                key: 'questions-answered',
                render: a => (0, l.numberWithCommas)(a)
            }
        ];
}), c.register('WHfsa1', function(d, e) {
    a(d.exports, 'ReportKit', function() {
        return _s;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('E2AMI26'),
        i = c('Tzf4u'),
        j = c('quE27'),
        k = c('Eh2Wh'),
        l = c('pR71j1'),
        m = c('8KqQ+'),
        n = c('HloXO');
    let o, p, q, r = a => a;
    const _s = a => {
            const t = b(i)((0, j.dateFromObjectId)(a.dateId)).format('MMMM Do [at] LT');
            return (0, f.jsxs)(h.default, {
                direction: 'horizontal',
                size: 14,
                align: 'center',
                children: [
                    (0, f.jsx)('div', {
                        children: (0, f.jsx)(_t, {
                            src: (0, n.getCloudinaryUrl)(a.kit.gif),
                            style: {
                                width: 55,
                                height: 55
                            }
                        })
                    }),
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(_u, {
                                children: a.kit.title
                            }),
                            (0, f.jsx)(_v, {
                                children: t
                            }),
                            a.assignmentId ? (0, f.jsx)('div', {
                                style: {
                                    marginTop: '0.25em'
                                },
                                children: (0, f.jsx)(l.ReportLinkTag, {
                                    to: `/assignment/${ a.assignmentId }`,
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
}), c.register('pR71j1', function(d, e) {
    a(d.exports, 'ReportLinkTag', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('FB7HT26'),
        h = c('u4s09');
    let i;
    const _j = a => (0, f.jsx)(_k, {
            onClick: a => null == a ? void 0 : a.stopPropagation(),
            to: a.to,
            children: a.children
        }),
        _k = (0, h.default)(g.default)(i || (i = (a => a)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`));
}), c.register('HloXO', function(d, e) {
    a(d.exports, 'getCloudinaryUrl', function() {
        return _f;
    });
    const _f = a => {
            const g = _g(a);
            return g ? a.includes('/video/upload') ? `https://${ _h }/video/upload/${ g }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ g }` : a;
        },
        _g = a => {
            if (!_k.some(d => a.includes(d)))
                return null;
            if (a.includes(_i) && !a.includes(`/${ _j }/`))
                return null;
            const h = a.split('/');
            if (!h || !h.length || h.length < 2)
                return null;
            const i = h[h.length - 2],
                j = h[h.length - 1];
            return i && j && i.startsWith('v') ? `${ i }/${ j }` : null;
        },
        _h = 'media.gimkit.com',
        _i = 'res.cloudinary.com',
        _j = 'gimkit-production',
        _k = [
            _h,
            _i
        ];
}), c.register('SuqDd1', function(d, e) {
    a(d.exports, 'ReportProgressAccuracyMeter', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('R2nG3'),
        h = c('eyhCL');
    c('O0Kav');
    var i = c('SAYZy');
    const _j = a => {
        const k = a.percent < 60 ? '#F44336' : a.percent < 80 ? '#FFC107' : '#66BB6A';
        return (0, f.jsx)(g.default, {
            theme: {
                components: {
                    Progress: {
                        colorText: (0, i.darken)(0.2, k)
                    }
                }
            },
            children: (0, f.jsx)(h.default, {
                type: 'dashboard',
                percent: a.percent,
                width: 65,
                strokeColor: k,
                status: 'normal'
            })
        });
    };
}), c.register('c6fiS0', function(d, e) {
    a(d.exports, 'GameReportCompletionLink', function() {
        return _m;
    }), a(d.exports, 'GameReportCompletionModal', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('cOX1W'),
        i = c('AE7vR'),
        j = c('ZKc1Q'),
        k = c('quE27'),
        l = c('6IEcI');
    const _m = {
            icon: h.default,
            label: 'View Report',
            hiddenRender: a => (0, f.jsx)(_n, {
                playerName: a.playerName,
                gameReportId: a.link.resultLinkId,
                participantId: a.link.completionLinkId,
                close: a.close
            })
        },
        _n = a => {
            const [o, , p] = (0, k.useBoolean)(!0), [q, r] = g.useState();
            return g.useEffect(() => {
                (0, k.request)({
                    url: '/api/game-report/fetch-participant-data',
                    data: {
                        gameReportId: a.gameReportId,
                        participantId: a.participantId
                    },
                    success: a => r(a),
                    error: a => {
                        p();
                    }
                });
            }, [a.participantId]), (0, f.jsx)(i.default, {
                open: o,
                onCancel: p,
                afterClose: a.close,
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
                children: q ? (0, f.jsx)(l.default, {
                    preventScroll: !0,
                    player: {
                        name: a.playerName,
                        correctQuestionIds: q.correctQuestionIds,
                        incorrectQuestionIds: q.incorrectQuestionIds
                    },
                    questions: q.questions
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
}), c.register('cOX1W', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('/raBs'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'BarChartOutlined';
    var _k = g.forwardRef(j);
}), c.register('/raBs', function(d, e) {
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
}), c.register('rLQJQ7', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('M2CB57'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CopyOutlined';
    var _k = g.forwardRef(j);
}), c.register('M2CB57', function(d, e) {
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
}), c.register('HFnro8', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('AE7vR'),
        j = c('8KqQ+'),
        k = c('HloXO');
    let l;
    const m = h.default.img.attrs(a => ({
        src: a.image
    }))(l || (l = (a => a)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), a => a.size, a => a.size, a => a.customRightMargin ? a.customRightMargin : 0, a => a.showBorder && `border: solid ${ j.default.Black } 1px;`);
    var _n = a => {
        const [o, p] = g.useState(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(m, {
                    ...a,
                    onClick: o => {
                        o.stopPropagation(), a.onClick && a.onClick(), a.blockModalOpen || p(!0);
                    }
                }),
                (0, f.jsx)(i.default, {
                    open: o,
                    onCancel: a => {
                        a.stopPropagation(), p(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(a.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('JuRCP', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn'),
        g = c('O0Kav');
    const h = g.lazy(() => c('bPSSr0'));
    var _i = a => (0, f.jsx)(g.Suspense, {
        fallback: a.fallback || null,
        children: (0, f.jsx)(h, {
            latex: a.latex
        })
    });
}), c.register('bPSSr0', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('Dq3qN').resolve('emcKB')),
        import('./' + c('Dq3qN').resolve('5OCdz'))
    ]).then(() => c('vZVkZ'));
}), c.register('jS3EY5', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('K5dB24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownloadOutlined';
    var _k = g.forwardRef(j);
}), c.register('K5dB24', function(d, e) {
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