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
        return _x;
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
        t = c('.....'),
        u = c('.....'),
        v = c('.....'),
        w = c('.....');
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
        (0, t.default)(M, N => {
            var O, P;
            L(null !== (P = null === (O = N.target) || void 0 === O ? void 0 : O.offsetTop) && void 0 !== P ? P : 0);
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
                onPageChange: P => {
                    A({
                        page: P
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'useClassReports', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = (i, j) => (0, f.useQuery)({
        queryKey: [
            'group-reports',
            j,
            {
                page: i
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, g.requestAsPromise)({
            url: '/api/game-report/fetch-all',
            data: {
                page: i,
                groupId: j
            }
        })
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'GroupViewReportsTable', function() {
        return _m;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    const _m = n => n.totalItems ? (0, f.jsxs)('div', {
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
                        dataSource: n.data.map(o => ({
                            key: o._id,
                            ...o
                        })),
                        columns: _n,
                        bordered: !0,
                        pagination: !1,
                        tableLayout: 'auto',
                        size: 'large',
                        onRow: o => ({
                            onClick: () => {
                                (0, i.NavigateTo)(`/report/${ o._id }`);
                            },
                            style: {
                                cursor: 'pointer'
                            }
                        }),
                        loading: {
                            spinning: n.isFetching,
                            indicator: null
                        },
                        sticky: {
                            offsetHeader: n.containerTopOffset,
                            getContainer: () => document.getElementById('group-reports-container')
                        }
                    })
                }),
                n.pagination ? (0, f.jsx)('div', {
                    className: 'maxWidth flex-center',
                    style: {
                        padding: '35px 0px'
                    },
                    children: n.pagination
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
                render: (o, p) => (0, f.jsx)(j.ReportKit, {
                    kit: o,
                    dateId: p._id,
                    assignmentId: p.mapAssignment
                })
            },
            {
                title: 'Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: o => (0, f.jsx)(k.ReportProgressAccuracyMeter, {
                    percent: o
                })
            },
            {
                title: 'Participants',
                dataIndex: 'groups',
                key: 'report-groups',
                render: (o, p) => (0, f.jsx)(l.ReportParticipantsAndGroups, {
                    reportId: p._id,
                    participants: p.participants,
                    groups: []
                })
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
    a(d.exports, 'ReportParticipantsAndGroups', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = k => {
        var l;
        return (0, f.jsxs)('div', {
            children: [
                (0, f.jsxs)('div', {
                    style: {
                        fontStyle: 'italic'
                    },
                    children: [
                        k.participants,
                        ' ',
                        (0, g.plural)('participant', k.participants)
                    ]
                }),
                (null === (l = k.groups) || void 0 === l ? void 0 : l.length) ? (0, f.jsx)(h.default, {
                    direction: 'horizontal',
                    wrap: !0,
                    size: 'small',
                    style: {
                        marginTop: '0.3em'
                    },
                    children: k.groups.map(m => (0, f.jsx)(i.ReportLinkTag, {
                        to: `/class/${ m._id }`,
                        children: m.name
                    }, k.reportId + m._id))
                }) : null
            ]
        });
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
});