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
c.register('6g4qq', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _x;
    });
    var g = c('gRbUn'),
        h = c('zcfNM'),
        i = c('+cTfn'),
        j = c('s0zaZ'),
        k = c('8/1qo'),
        l = c('IkpNC'),
        m = c('ZKc1Q'),
        n = c('ER390'),
        o = c('yaHpD'),
        p = c('WmcS+'),
        q = c('O0Kav'),
        r = c('UCr/h1'),
        s = c('quE27'),
        t = c('uGyn30'),
        u = c('hecDa'),
        v = c('KxkP827'),
        w = c('jw1ib');
    var _x = () => {
        const {
            id: y
        } = (0, h.useParams)(), [z, A] = (0, i.useSearchParams)();
        var B;
        const C = Math.max(1, null !== (B = Number(z.get('page'))) && void 0 !== B ? B : 1),
            {
                isLoading: D,
                error: E,
                data: F
            } = (0, l.default)(y),
            {
                isLoading: G,
                error: H,
                data: I,
                isFetching: J
            } = (0, o.useClassReports)(C, y),
            [K, L] = q.useState(0),
            M = q.useRef(null);
        (0, t.default)(M, y => {
            var N, O;
            L(null !== (O = null === (N = y.target) || void 0 === N ? void 0 : N.offsetTop) && void 0 !== O ? O : 0);
        });
        const N = q.useMemo(() => E || (H || void 0), [
            E,
            y,
            F,
            H
        ]);
        q.useEffect(() => {
            window.scrollTo(0, 0);
        }, [C]);
        const O = I && I.totalItems ? (0, g.jsx)(r.ReportPagination, {
                total: I.totalItems,
                current: C,
                onPageChange: y => {
                    A({
                        page: y
                    });
                }
            }) : null,
            P = (0, s.isUpgraded)();
        return (0, g.jsxs)(j.Container, {
            style: P ? void 0 : {
                filter: 'blur(4px)'
            },
            children: [
                (0, g.jsx)(u.default, {
                    id: 'class progress',
                    visible: !P,
                    copy: {
                        title: 'View class progress with Pro',
                        description: `To view all reports for a class in one place, upgrade to ${ w.COMPANY_NAME } Pro.`
                    },
                    close: () => {
                        (0, v.NavigateTo)(`/class/${ y }`);
                    }
                }),
                (0, g.jsx)(s.Title, {
                    title: (null == F ? void 0 : F.name) ? `${ null == F ? void 0 : F.name } | Reports` : 'Class Reports'
                }),
                (0, g.jsx)(k.GroupViewTopNavigationHeader, {
                    id: y
                }),
                (0, g.jsxs)(j.ContentContainer, {
                    ref: M,
                    children: [
                        N ? (0, g.jsx)('div', {
                            style: {
                                height: 35
                            }
                        }) : (0, g.jsx)(n.GroupViewHeader, {
                            data: F,
                            customRightComponent: O
                        }),
                        (0, g.jsx)(j.Content, {
                            className: 'flex',
                            style: {
                                padding: 0
                            },
                            children: D || G ? (0, g.jsx)(m.default, {
                                paragraph: {
                                    rows: 4
                                },
                                title: !1,
                                active: !0,
                                className: 'maxWidth',
                                style: {
                                    padding: 35
                                }
                            }) : N ? (0, g.jsx)('div', {
                                style: {
                                    padding: 35
                                },
                                children: (null == N || null === (_Q = N.message) || void 0 === _Q ? void 0 : _Q.text) || 'There was an error fetching this class. Please try again.'
                            }) : (0, g.jsx)(p.GroupViewReportsTable, {
                                data: null !== (_R = null == I ? void 0 : I.items) && void 0 !== _R ? _R : [],
                                pagination: O,
                                containerTopOffset: K,
                                isFetching: J,
                                totalItems: null !== (_S = null == I ? void 0 : I.totalItems) && void 0 !== _S ? _S : 0
                            })
                        })
                    ]
                })
            ]
        });
        var _Q, _R, _S;
    };
}), c.register('yaHpD', function(d, e) {
    a(d.exports, 'useClassReports', function() {
        return _h;
    });
    var f = c('GmO9j'),
        g = c('quE27');
    const _h = (a, d) => (0, f.useQuery)({
        queryKey: [
            'group-reports',
            d,
            {
                page: a
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, g.requestAsPromise)({
            url: '/api/game-report/fetch-all',
            data: {
                page: a,
                groupId: d
            }
        })
    });
}), c.register('WmcS+', function(d, e) {
    a(d.exports, 'GroupViewReportsTable', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('R2nG3'),
        h = c('v6sJ3'),
        i = c('KxkP827'),
        j = c('WHfsa1'),
        k = c('SuqDd1'),
        l = c('/o+cb0');
    const _m = a => a.totalItems ? (0, f.jsxs)('div', {
            id: 'group-reports-container',
            className: 'maxWidth',
            children: [
                (0, f.jsx)(g.default, {
                    theme: {
                        token: {
                            padding: 35
                        }
                    },
                    children: (0, f.jsx)(h.default, {
                        className: 'maxWidth',
                        dataSource: a.data.map(a => ({
                            key: a._id,
                            ...a
                        })),
                        columns: _n,
                        bordered: !0,
                        pagination: !1,
                        tableLayout: 'auto',
                        size: 'large',
                        onRow: a => ({
                            onClick: () => {
                                (0, i.NavigateTo)(`/report/${ a._id }`);
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
                            getContainer: () => document.getElementById('group-reports-container')
                        }
                    })
                }),
                a.pagination ? (0, f.jsx)('div', {
                    className: 'maxWidth flex-center',
                    style: {
                        padding: '35px 0px'
                    },
                    children: a.pagination
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
                        'Check back here after you host a live game or assignment with this class! ',
                        (0, f.jsx)('br', {}),
                        'All their reports will be displayed here for you to easily check in on their progress.'
                    ]
                })
            ]
        }),
        _n = [{
                title: 'Kit',
                dataIndex: 'kit',
                key: 'report-kit',
                render: (a, d) => (0, f.jsx)(j.ReportKit, {
                    kit: a,
                    dateId: d._id,
                    assignmentId: d.mapAssignment
                })
            },
            {
                title: 'Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: a => (0, f.jsx)(k.ReportProgressAccuracyMeter, {
                    percent: a
                })
            },
            {
                title: 'Participants',
                dataIndex: 'groups',
                key: 'report-groups',
                render: (a, d) => (0, f.jsx)(l.ReportParticipantsAndGroups, {
                    reportId: d._id,
                    participants: d.participants,
                    groups: []
                })
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
}), c.register('/o+cb0', function(d, e) {
    a(d.exports, 'ReportParticipantsAndGroups', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('quE27'),
        h = c('E2AMI26'),
        i = c('pR71j1');
    const _j = a => {
        var k;
        return (0, f.jsxs)('div', {
            children: [
                (0, f.jsxs)('div', {
                    style: {
                        fontStyle: 'italic'
                    },
                    children: [
                        a.participants,
                        ' ',
                        (0, g.plural)('participant', a.participants)
                    ]
                }),
                (null === (k = a.groups) || void 0 === k ? void 0 : k.length) ? (0, f.jsx)(h.default, {
                    direction: 'horizontal',
                    wrap: !0,
                    size: 'small',
                    style: {
                        marginTop: '0.3em'
                    },
                    children: a.groups.map(k => (0, f.jsx)(i.ReportLinkTag, {
                        to: `/class/${ k._id }`,
                        children: k.name
                    }, a.reportId + k._id))
                }) : null
            ]
        });
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
});