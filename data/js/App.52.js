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
a.register('5tMOq', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _w(b.exports, 'default', function() {
        return _v;
    });
    var e = a('0hzx+'),
        f = a('70AkF'),
        g = a('wYGc3'),
        h = a('d1GyP'),
        i = a('SZtvY'),
        j = a('FmJ0q'),
        k = a('oBBW6'),
        l = a('BPFur'),
        m = a('K2TCH'),
        n = a('WMt1q'),
        o = a('LEQ5w'),
        p = a('xBWlV'),
        q = a('PMl60'),
        r = a('G5zL50'),
        s = a('BtZXP'),
        t = a('jzxyj10'),
        u = a('hHkFq');
    var _v = () => {
        const {
            id: _w
        } = (0, f.useParams)(), [x, y] = (0, g.useSearchParams)();
        var z;
        const A = Math.max(1, null !== (z = Number(x.get('page'))) && void 0 !== z ? z : 1),
            {
                isLoading: B,
                error: C,
                data: D
            } = (0, j.default)(_w),
            {
                isLoading: E,
                error: F,
                data: G,
                isFetching: H
            } = (0, m.useClassReports)(A, _w),
            [I, J] = o.useState(0),
            K = o.useRef(null);
        (0, r.default)(K, _w => {
            var L, M;
            J(null !== (M = null === (L = _w.target) || void 0 === L ? void 0 : L.offsetTop) && void 0 !== M ? M : 0);
        });
        const L = o.useMemo(() => C || (F || void 0), [
            C,
            _w,
            D,
            F
        ]);
        o.useEffect(() => {
            window.scrollTo(0, 0);
        }, [A]);
        const M = G && G.totalItems ? (0, e.jsx)(p.ReportPagination, {
                total: G.totalItems,
                current: A,
                onPageChange: _w => {
                    y({
                        page: _w
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
                        (0, t.NavigateTo)(`/class/${ _w }`);
                    }
                }),
                (0, e.jsx)(q.Title, {
                    title: (null == D ? void 0 : D.name) ? `${ null == D ? void 0 : D.name } | Reports` : 'Class Reports'
                }),
                (0, e.jsx)(i.GroupViewTopNavigationHeader, {
                    id: _w
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
                                children: (null == L || null === (_O = L.message) || void 0 === _O ? void 0 : _O.text) || 'There was an error fetching this class. Please try again.'
                            }) : (0, e.jsx)(n.GroupViewReportsTable, {
                                data: null !== (_P = null == G ? void 0 : G.items) && void 0 !== _P ? _P : [],
                                pagination: M,
                                containerTopOffset: I,
                                isFetching: H,
                                totalItems: null !== (_Q = null == G ? void 0 : G.totalItems) && void 0 !== _Q ? _Q : 0
                            })
                        })
                    ]
                })
            ]
        });
        var _O, _P, _Q;
    };
}), a.register('K2TCH', function(b, c) {
    _h(b.exports, 'useClassReports', function() {
        return _f;
    });
    var d = a('UapK50'),
        e = a('PMl60');
    const _f = (_h, b) => (0, d.useQuery)({
        queryKey: [
            'group-reports',
            b,
            {
                page: _h
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, e.requestAsPromise)({
            url: '/api/game-report/fetch-all',
            data: {
                page: _h,
                groupId: b
            }
        })
    });
}), a.register('WMt1q', function(b, c) {
    _h(b.exports, 'GroupViewReportsTable', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('1P5ls'),
        f = a('XhmoI'),
        g = a('jzxyj10'),
        h = a('Jnm73'),
        i = a('ZpCrt'),
        j = a('miHuM');
    const _k = _h => _h.totalItems ? (0, d.jsxs)('div', {
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
                        dataSource: _h.data.map(_h => ({
                            key: _h._id,
                            ..._h
                        })),
                        columns: _l,
                        bordered: !0,
                        pagination: !1,
                        tableLayout: 'auto',
                        size: 'large',
                        onRow: _h => ({
                            onClick: () => {
                                (0, g.NavigateTo)(`/report/${ _h._id }`);
                            },
                            style: {
                                cursor: 'pointer'
                            }
                        }),
                        loading: {
                            spinning: _h.isFetching,
                            indicator: null
                        },
                        sticky: {
                            offsetHeader: _h.containerTopOffset,
                            getContainer: () => document.getElementById('group-reports-container')
                        }
                    })
                }),
                _h.pagination ? (0, d.jsx)('div', {
                    className: 'maxWidth flex-center',
                    style: {
                        padding: '35px 0px'
                    },
                    children: _h.pagination
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
        _l = [{
                title: 'Kit',
                dataIndex: 'kit',
                key: 'report-kit',
                render: (_h, b) => (0, d.jsx)(h.ReportKit, {
                    kit: _h,
                    dateId: b._id,
                    assignmentId: b.mapAssignment
                })
            },
            {
                title: 'Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: _h => (0, d.jsx)(i.ReportProgressAccuracyMeter, {
                    percent: _h
                })
            },
            {
                title: 'Participants',
                dataIndex: 'groups',
                key: 'report-groups',
                render: (_h, b) => (0, d.jsx)(j.ReportParticipantsAndGroups, {
                    reportId: b._id,
                    participants: b.participants,
                    groups: []
                })
            }
        ];
}), a.register('Jnm73', function(b, c) {
    _h(b.exports, 'ReportKit', function() {
        return _q;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('cvto726'),
        g = a('ECzOP'),
        h = a('PMl60'),
        i = a('b5kvC'),
        j = a('4ReN8'),
        k = a('sHRDd'),
        l = a('x8CoD');
    let m, n, o, p = _h => _h;
    const _q = _h => {
            const r = _b(g)((0, h.dateFromObjectId)(_h.dateId)).format('MMMM Do [at] LT');
            return (0, d.jsxs)(f.default, {
                direction: 'horizontal',
                size: 14,
                align: 'center',
                children: [
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(_r, {
                            src: (0, l.getCloudinaryUrl)(_h.kit.gif),
                            style: {
                                width: 55,
                                height: 55
                            }
                        })
                    }),
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(_s, {
                                children: _h.kit.title
                            }),
                            (0, d.jsx)(_t, {
                                children: r
                            }),
                            _h.assignmentId ? (0, d.jsx)('div', {
                                style: {
                                    marginTop: '0.25em'
                                },
                                children: (0, d.jsx)(j.ReportLinkTag, {
                                    to: `/assignment/${ _h.assignmentId }`,
                                    children: 'Assignment'
                                })
                            }) : null
                        ]
                    })
                ]
            });
        },
        _r = e.default.img(m || (m = p`
  border-radius: 5px;
  border: solid ${ 0 } 1px;
  flex-shrink: 0;
  object-fit: cover;
`), k.default.Black),
        _s = e.default.div(n || (n = p`
  font-size: 1.1em;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        _t = e.default.div(o || (o = p`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.05em;
`));
}), a.register('4ReN8', function(_b, c) {
    _h(_b.exports, 'ReportLinkTag', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('2HvvA11'),
        f = a('Axq+p');
    let g;
    const _h = _h => (0, d.jsx)(_i, {
            onClick: _h => null == _h ? void 0 : _h.stopPropagation(),
            to: _h.to,
            children: _h.children
        }),
        _i = (0, f.default)(e.default)(g || (g = (_h => _h)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`));
}), a.register('x8CoD', function(b, c) {
    _h(b.exports, 'getCloudinaryUrl', function() {
        return _d;
    });
    const _d = _h => {
            const e = _e(_h);
            return e ? _h.includes('/video/upload') ? `https://${ _f }/video/upload/${ e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : _h;
        },
        _e = _h => {
            if (!_i.some(b => _h.includes(b)))
                return null;
            if (_h.includes(_g) && !_h.includes(`/${ _h }/`))
                return null;
            const f = _h.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        _f = 'media.gimkit.com',
        _g = 'res.cloudinary.com',
        _h = 'gimkit-production',
        _i = [
            _f,
            _g
        ];
}), a.register('ZpCrt', function(b, c) {
    _h(b.exports, 'ReportProgressAccuracyMeter', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('1P5ls'),
        f = a('8y7vq');
    a('LEQ5w');
    var g = a('GT7Vh');
    const _h = _h => {
        const i = _h.percent < 60 ? '#F44336' : _h.percent < 80 ? '#FFC107' : '#66BB6A';
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
                percent: _h.percent,
                width: 65,
                strokeColor: i,
                status: 'normal'
            })
        });
    };
}), a.register('miHuM', function(b, c) {
    _h(b.exports, 'ReportParticipantsAndGroups', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('PMl60'),
        f = a('cvto726'),
        g = a('4ReN8');
    const _h = _h => {
        var i;
        return (0, d.jsxs)('div', {
            children: [
                (0, d.jsxs)('div', {
                    style: {
                        fontStyle: 'italic'
                    },
                    children: [
                        _h.participants,
                        ' ',
                        (0, e.plural)('participant', _h.participants)
                    ]
                }),
                (null === (i = _h.groups) || void 0 === i ? void 0 : i.length) ? (0, d.jsx)(f.default, {
                    direction: 'horizontal',
                    wrap: !0,
                    size: 'small',
                    style: {
                        marginTop: '0.3em'
                    },
                    children: _h.groups.map(i => (0, d.jsx)(g.ReportLinkTag, {
                        to: `/class/${ i._id }`,
                        children: i.name
                    }, _h.reportId + i._id))
                }) : null
            ]
        });
    };
}), a.register('xBWlV', function(b, c) {
    _h(b.exports, 'ReportPagination', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('42CAy');
    a('LEQ5w');
    const _f = _h => {
        const {
            total: g,
            current: h,
            onPageChange: i
        } = _h;
        return (0, d.jsx)(e.default, {
            simple: !0,
            current: h,
            total: g,
            defaultPageSize: 10,
            onChange: i
        });
    };
}), a.register('G5zL50', function(b, c) {
    _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('dR/Gi'),
        e = a('20TiJ');

    function f() {}
    let f;
    const g = _h => f || (f = function(_h) {
        let i = !1,
            j = [];
        const k = new Map(),
            l = new(_h || window.ResizeObserver)((_h, l) => {
                j = j.concat(_h), i || window.requestAnimationFrame(function() {
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
            subscribe(m, n) {
                var o;
                l.observe(m);
                const p = null !== (o = k.get(m)) && void 0 !== o ? o : [];
                p.push(n), k.set(m, p);
            },
            unsubscribe(m, n) {
                var o;
                const p = null !== (o = k.get(m)) && void 0 !== o ? o : [];
                if (1 === p.length)
                    return l.unobserve(m), void k.delete(m);
                const q = p.indexOf(n); -
                1 !== q && p.splice(q, 1), k.set(m, p);
            }
        };
    }(_i));
    var _h = function(_i, j, k = {}) {
        const l = g(k.polyfill),
            m = (0, e.default)(j);
        return (0, d.default)(() => {
            let n = !1;
            const o = _i && 'current' in _i ? _i.current : _i;
            if (!o)
                return s;

            function p(q, r) {
                n || m.current(q, r);
            }
            return l.subscribe(o, d), () => {
                n = !0, l.unsubscribe(o, d);
            };
        }, [
            _i,
            l,
            m
        ]), l.observer;
    };
});