function a(a, b, c, z) {
    Object.defineProperty(a, b, {
        get: c,
        set: z,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('2BF72', function(b, z) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return v;
    });
    var e = c('8kSQZ'),
        f = c('0R8EW'),
        g = c('KzqIz'),
        h = c('HZrmb'),
        i = c('r2BNY'),
        j = c('GzycZ'),
        k = c('+98NM'),
        l = c('m/z61'),
        m = c('hJPGt'),
        n = c('TRW+v'),
        o = c('uPP4W'),
        p = c('dlNtt1'),
        q = c('PjB0f'),
        r = c('qpNcE0'),
        s = c('VsZIM'),
        t = c('k0s2g17'),
        u = c('0wLl2');
    var v = () => {
        const {
            id: w
        } = (0, f.useParams)(), [x, y] = (0, g.useSearchParams)();
        var z;
        const A = Math.max(1, null !== (z = Number(x.get('page'))) && void 0 !== z ? z : 1),
            {
                isLoading: B,
                error: C,
                data: D
            } = (0, j.default)(w),
            {
                isLoading: E,
                error: F,
                data: G,
                isFetching: H
            } = (0, m.useClassReports)(A, w),
            [I, J] = o.useState(0),
            K = o.useRef(null);
        (0, r.default)(K, w => {
            var L, M;
            J(null !== (M = null === (L = w.target) || void 0 === L ? void 0 : L.offsetTop) && void 0 !== M ? M : 0);
        });
        const L = o.useMemo(() => C || (F || void 0), [
            C,
            w,
            D,
            F
        ]);
        o.useEffect(() => {
            window.scrollTo(0, 0);
        }, [A]);
        const M = G && G.totalItems ? (0, e.jsx)(p.ReportPagination, {
                total: G.totalItems,
                current: A,
                onPageChange: w => {
                    y({
                        page: w
                    });
                }
            }) : null,
            N = (0, q.isUpgraded)();
        return (0, e.jsxs)(h.Container, {
            style: N ? void 0 : {
                filter: 'blur(4px)'
            },
            children: [
                (0, e.jsx)(s.default, {
                    id: 'class progress',
                    visible: !N,
                    copy: {
                        title: 'View class progress with Pro',
                        description: `To view all reports for a class in one place, upgrade to ${ u.COMPANY_NAME } Pro.`
                    },
                    close: () => {
                        (0, t.NavigateTo)(`/class/${ w }`);
                    }
                }),
                (0, e.jsx)(q.Title, {
                    title: (null == D ? void 0 : D.name) ? `${ null == D ? void 0 : D.name } | Reports` : 'Class Reports'
                }),
                (0, e.jsx)(i.GroupViewTopNavigationHeader, {
                    id: w
                }),
                (0, e.jsxs)(h.ContentContainer, {
                    ref: K,
                    children: [
                        L ? (0, e.jsx)('div', {
                            style: {
                                height: 35
                            }
                        }) : (0, e.jsx)(l.GroupViewHeader, {
                            data: D,
                            customRightComponent: M
                        }),
                        (0, e.jsx)(h.Content, {
                            className: 'flex',
                            style: {
                                padding: 0
                            },
                            children: B || E ? (0, e.jsx)(k.default, {
                                paragraph: {
                                    rows: 4
                                },
                                title: !1,
                                active: !0,
                                className: 'maxWidth',
                                style: {
                                    padding: 35
                                }
                            }) : L ? (0, e.jsx)('div', {
                                style: {
                                    padding: 35
                                },
                                children: (null == L || null === (O = L.message) || void 0 === O ? void 0 : O.text) || 'There was an error fetching this class. Please try again.'
                            }) : (0, e.jsx)(n.GroupViewReportsTable, {
                                data: null !== (P = null == G ? void 0 : G.items) && void 0 !== P ? P : [],
                                pagination: M,
                                containerTopOffset: I,
                                isFetching: H,
                                totalItems: null !== (Q = null == G ? void 0 : G.totalItems) && void 0 !== Q ? Q : 0
                            })
                        })
                    ]
                })
            ]
        });
        var O, P, Q;
    };
}), c.register('hJPGt', function(b, d) {
    a(b.exports, 'useClassReports', function() {
        return f;
    });
    var d = c('IsAdf'),
        e = c('PjB0f');
    const f = (a, b) => (0, d.useQuery)({
        queryKey: [
            'group-reports',
            b,
            {
                page: a
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, e.requestAsPromise)({
            url: '/api/game-report/fetch-all',
            data: {
                page: a,
                groupId: b
            }
        })
    });
}), c.register('TRW+v', function(b, d) {
    a(b.exports, 'GroupViewReportsTable', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('qEw51'),
        f = c('VaygL'),
        g = c('k0s2g17'),
        h = c('cKlnM'),
        i = c('gl+210'),
        j = c('9d2W5');
    const k = a => a.totalItems ? (0, d.jsxs)('div', {
            id: 'group-reports-container',
            className: 'maxWidth',
            children: [
                (0, d.jsx)(e.default, {
                    theme: {
                        token: {
                            padding: 35
                        }
                    },
                    children: (0, d.jsx)(f.default, {
                        className: 'maxWidth',
                        dataSource: a.data.map(a => ({
                            key: a._id,
                            ...a
                        })),
                        columns: l,
                        bordered: !0,
                        pagination: !1,
                        tableLayout: 'auto',
                        size: 'large',
                        onRow: a => ({
                            onClick: () => {
                                (0, g.NavigateTo)(`/report/${ a._id }`);
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
                a.pagination ? (0, d.jsx)('div', {
                    className: 'maxWidth flex-center',
                    style: {
                        padding: '35px 0px'
                    },
                    children: a.pagination
                }) : null
            ]
        }) : (0, d.jsxs)('div', {
            style: {
                padding: 35,
                flex: 1
            },
            className: 'flex-column flex-center',
            children: [
                (0, d.jsx)('img', {
                    src: '/client/img/dashboard/report.svg',
                    style: {
                        height: 80
                    }
                }),
                (0, d.jsxs)('div', {
                    style: {
                        textAlign: 'center',
                        fontSize: '1.15em',
                        marginTop: 10
                    },
                    children: [
                        'Check back here after you host a live game or assignment with this class! ',
                        (0, d.jsx)('br', {}),
                        'All their reports will be displayed here for you to easily check in on their progress.'
                    ]
                })
            ]
        }),
        l = [{
                title: 'Kit',
                dataIndex: 'kit',
                key: 'report-kit',
                render: (a, b) => (0, d.jsx)(h.ReportKit, {
                    kit: a,
                    dateId: b._id,
                    assignmentId: b.mapAssignment
                })
            },
            {
                title: 'Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: a => (0, d.jsx)(i.ReportProgressAccuracyMeter, {
                    percent: a
                })
            },
            {
                title: 'Participants',
                dataIndex: 'groups',
                key: 'report-groups',
                render: (a, b) => (0, d.jsx)(j.ReportParticipantsAndGroups, {
                    reportId: b._id,
                    participants: b.participants,
                    groups: []
                })
            }
        ];
}), c.register('cKlnM', function(d, d) {
    a(d.exports, 'ReportKit', function() {
        return q;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('5nJMd26'),
        g = c('2MCaL'),
        h = c('PjB0f'),
        i = c('gSUVO'),
        j = c('DorSq'),
        k = c('lmfrI'),
        l = c('2WDH6');
    let m, n, o, p = a => a;
    const q = a => {
            const r = b(g)((0, h.dateFromObjectId)(a.dateId)).format('MMMM Do [at] LT');
            return (0, d.jsxs)(f.default, {
                direction: 'horizontal',
                size: 14,
                align: 'center',
                children: [
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(r, {
                            src: (0, l.getCloudinaryUrl)(a.kit.gif),
                            style: {
                                width: 55,
                                height: 55
                            }
                        })
                    }),
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(s, {
                                children: a.kit.title
                            }),
                            (0, d.jsx)(t, {
                                children: r
                            }),
                            a.assignmentId ? (0, d.jsx)('div', {
                                style: {
                                    marginTop: '0.25em'
                                },
                                children: (0, d.jsx)(j.ReportLinkTag, {
                                    to: `/assignment/${ a.assignmentId }`,
                                    children: 'Assignment'
                                })
                            }) : null
                        ]
                    })
                ]
            });
        },
        r = e.default.img(m || (m = p`
  border-radius: 5px;
  border: solid ${ 0 } 1px;
  flex-shrink: 0;
  object-fit: cover;
`), k.default.Black),
        s = e.default.div(n || (n = p`
  font-size: 1.1em;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        t = e.default.div(o || (o = p`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.05em;
`));
}), c.register('DorSq', function(b, d) {
    a(b.exports, 'ReportLinkTag', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('iYEuk12'),
        f = c('h99Nu');
    let g;
    const h = a => (0, d.jsx)(i, {
            onClick: a => null == a ? void 0 : a.stopPropagation(),
            to: a.to,
            children: a.children
        }),
        i = (0, f.default)(e.default)(g || (g = (a => a)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`));
}), c.register('2WDH6', function(b, c) {
    a(b.exports, 'getCloudinaryUrl', function() {
        return d;
    });
    const d = a => {
            const e = e(a);
            return e ? a.includes('/video/upload') ? `https://${ f }/video/upload/${ e }` : `https://${ f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : a;
        },
        e = a => {
            if (!i.some(b => a.includes(b)))
                return null;
            if (a.includes(g) && !a.includes(`/${ h }/`))
                return null;
            const f = a.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        f = 'media.gimkit.com',
        g = 'res.cloudinary.com',
        h = 'gimkit-production',
        i = [
            f,
            g
        ];
}), c.register('gl+210', function(b, i) {
    a(b.exports, 'ReportProgressAccuracyMeter', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('qEw51'),
        f = c('0x1Q5');
    c('uPP4W');
    var g = c('CDq40');
    const h = a => {
        const i = a.percent < 60 ? '#F44336' : a.percent < 80 ? '#FFC107' : '#66BB6A';
        return (0, d.jsx)(e.default, {
            theme: {
                components: {
                    Progress: {
                        colorText: (0, g.darken)(0.2, i)
                    }
                }
            },
            children: (0, d.jsx)(f.default, {
                type: 'dashboard',
                percent: a.percent,
                width: 65,
                strokeColor: i,
                status: 'normal'
            })
        });
    };
}), c.register('9d2W5', function(b, i) {
    a(b.exports, 'ReportParticipantsAndGroups', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('PjB0f'),
        f = c('5nJMd26'),
        g = c('DorSq');
    const h = a => {
        var i;
        return (0, d.jsxs)('div', {
            children: [
                (0, d.jsxs)('div', {
                    style: {
                        fontStyle: 'italic'
                    },
                    children: [
                        a.participants,
                        ' ',
                        (0, e.plural)('participant', a.participants)
                    ]
                }),
                (null === (i = a.groups) || void 0 === i ? void 0 : i.length) ? (0, d.jsx)(f.default, {
                    direction: 'horizontal',
                    wrap: !0,
                    size: 'small',
                    style: {
                        marginTop: '0.3em'
                    },
                    children: a.groups.map(i => (0, d.jsx)(g.ReportLinkTag, {
                        to: `/class/${ i._id }`,
                        children: i.name
                    }, a.reportId + i._id))
                }) : null
            ]
        });
    };
}), c.register('dlNtt1', function(b, i) {
    a(b.exports, 'ReportPagination', function() {
        return f;
    });
    var d = c('8kSQZ'),
        e = c('+WsvB');
    c('uPP4W');
    const f = a => {
        const {
            total: g,
            current: h,
            onPageChange: i
        } = j;
        return (0, d.jsx)(e.default, {
            simple: !0,
            current: h,
            total: g,
            defaultPageSize: 10,
            onChange: i
        });
    };
}), c.register('qpNcE0', function(b, k) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('vxwW1'),
        e = c('X8LPJ');

    function f() {}
    let g;
    const h = a => g || (g = function(a) {
        let i = !1,
            j = [];
        const k = new Map(),
            l = new(a || window.ResizeObserver)((a, l) => {
                j = j.concat(a), i || window.requestAnimationFrame(function() {
                    const m = new Set();
                    for (let n = 0; n < j.length; n++) {
                        if (m.has(j[n].target))
                            continue;
                        m.add(j[n].target);
                        const o = k.get(j[n].target);
                        null == o || o.forEach(m => m(j[n], l));
                    }
                    j = [], n = !1;
                }), i = !0;
            });
        return {
            observer: l,
            subscribe(a, i) {
                var m;
                l.observe(a);
                const n = null !== (m = k.get(a)) && void 0 !== m ? m : [];
                n.push(i), k.set(a, n);
            },
            unsubscribe(a, i) {
                var m;
                const n = null !== (m = k.get(a)) && void 0 !== m ? m : [];
                if (1 === n.length)
                    return l.unobserve(a), void k.delete(a);
                const o = n.indexOf(i); -
                1 !== o && n.splice(o, 1), k.set(a, n);
            }
        };
    }(a));
    var i = function(a, b, j = {}) {
        const k = h(j.polyfill),
            l = (0, e.default)(b);
        return (0, d.default)(() => {
            let m = !1;
            const n = a && 'current' in a ? a.current : a;
            if (!n)
                return f;

            function o(a, n) {
                m || l.current(a, n);
            }
            return k.subscribe(n, o), () => {
                m = !0, k.unsubscribe(n, o);
            };
        }, [
            a,
            k,
            l
        ]), k.observer;
    };
});