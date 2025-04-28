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
a.register('Dgr6R', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _t(b.exports, 'default', function() {
        return _s;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('d1GyP'),
        h = a('70AkF'),
        i = a('wYGc3'),
        j = a('FmJ0q'),
        k = a('PMl60'),
        l = a('FNKbD'),
        m = a('SZtvY'),
        n = a('XbWQE'),
        o = a('oBBW6'),
        p = a('G5zL50'),
        q = a('xBWlV'),
        r = a('zCXjt');
    var _s = () => {
        var _t;
        const {
            id: u,
            studentId: v
        } = (0, h.useParams)(), [w, x] = (0, i.useSearchParams)();
        var y;
        const z = Math.max(1, null !== (y = Number(w.get('page'))) && void 0 !== y ? y : 1),
            [A, B] = f.useState(0),
            C = f.useRef(null);
        (0, p.default)(C, _t => {
            var D, E;
            B(null !== (E = null === (D = _t.target) || void 0 === D ? void 0 : D.offsetTop) && void 0 !== E ? E : 0);
        });
        const {
            isLoading: D,
            error: E,
            data: F
        } = (0, j.default)(u), {
            isLoading: G,
            error: H,
            data: I,
            isFetching: J
        } = (0, n.useMemberReports)(z, v);
        f.useEffect(() => {
            window.scrollTo(0, 0);
        }, [z]);
        const K = f.useMemo(() => {
                if (E)
                    return E;
                if (H)
                    return H;
                if (F) {
                    if (!F.members.find(_t => _t._id === v))
                        return {
                            message: {
                                text: 'This link is invalid. This student may have been removed from your class.'
                            }
                        };
                }
            }, [
                E,
                u,
                F,
                H
            ]),
            L = null == F || null === (_t = F.members) || void 0 === _t ? void 0 : _t.find(_t => _t._id === v),
            M = I && (null == I ? void 0 : I.totalItems) ? (0, e.jsx)(q.ReportPagination, {
                total: I.totalItems,
                current: z,
                onPageChange: _t => {
                    x({
                        page: _t
                    });
                }
            }) : null;
        return (0, e.jsxs)(g.Container, {
            children: [
                (0, e.jsx)(k.Title, {
                    title: (null == L ? void 0 : L.name) || 'Student'
                }),
                (0, e.jsx)(m.GroupViewTopNavigationHeader, {
                    id: u
                }),
                (0, e.jsxs)(g.ContentContainer, {
                    ref: C,
                    children: [
                        K ? (0, e.jsx)('div', {
                            style: {
                                height: 35
                            }
                        }) : (0, e.jsx)(l.GroupViewStudentHeader, {
                            student: L,
                            group: F,
                            children: M
                        }),
                        (0, e.jsx)(g.Content, {
                            className: 'flex',
                            style: {
                                padding: 0
                            },
                            children: (0, k.isUpgraded)() ? D || G ? (0, e.jsx)(o.default, {
                                paragraph: {
                                    rows: 4
                                },
                                title: !1,
                                active: !0,
                                className: 'maxWidth',
                                style: {
                                    padding: 35
                                }
                            }) : K ? (0, e.jsx)('div', {
                                style: {
                                    padding: 35
                                },
                                children: (null == K || null === (_N = K.message) || void 0 === _N ? void 0 : _N.text) || 'There was an error fetching this class. Please try again.'
                            }) : (0, e.jsx)(r.GroupViewStudentTable, {
                                data: I.items,
                                isFetching: J,
                                playerName: null == L ? void 0 : L.name,
                                containerTopOffset: A,
                                pagination: M,
                                totalItems: I.totalItems
                            }) : (0, e.jsx)('div', {
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
        var _N;
    };
}), a.register('FNKbD', function(b, c) {
    _d(b.exports, 'GroupViewStudentHeader', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('b5kvC'),
        f = a('fDi/k'),
        g = a('2HvvA11');
    const _h = _d => {
        const {
            student: i,
            group: j
        } = _d;
        return i && j ? (0, d.jsxs)('div', {
            className: 'flex maxWidth between vc',
            style: {
                padding: '40px 0px'
            },
            children: [
                (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsxs)(f.default, {
                            children: [
                                (0, d.jsx)(f.default.Item, {
                                    children: (0, d.jsx)(g.default, {
                                        to: `/class/${ j._id }`,
                                        children: j.name
                                    })
                                }),
                                (0, d.jsx)(f.default.Item, {
                                    children: 'Student Progress'
                                })
                            ]
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                fontSize: '2em',
                                fontWeight: e.FontWeights.UltraBold,
                                marginTop: 2
                            },
                            children: i.name
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                marginTop: '0.1em'
                            },
                            children: i.email
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    children: _d.children
                })
            ]
        }) : (0, d.jsx)('div', {
            style: {
                height: 154
            }
        });
    };
}), a.register('fDi/k', function(b, c) {
    _d(b.exports, 'default', function() {
        return _d;
    });
    var _d = a('lJfeK').default;
}), a.register('lJfeK', function(b, c) {
    _d(b.exports, 'default', function() {
        return _x;
    }, function(_d) {
        return _x = _d;
    });
    var d = a('gK9Sd'),
        e = a('JrtKP'),
        f = a('Ug51y0'),
        g = a('LEQ5w'),
        h = a('1P5ls'),
        i = a('WfOD7'),
        j = a('CMcLV'),
        k = a('+mw3l'),
        l = a('nbX38'),
        m = a('+J40X'),
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

    function o(p, q, r, s) {
        const t = r.indexOf(p) === r.length - 1,
            u = function(v, w) {
                if (!v.breadcrumbName)
                    return null;
                const x = Object.keys(w).join('|');
                return v.breadcrumbName.replace(new RegExp(`:(${ x })`, 'g'), (v, x) => w[x] || v);
            }(p, q);
        return t ? g.createElement('span', null, u) : g.createElement('a', {
            href: `#/${ s.join('/') }`
        }, u);
    }
    const o = (_I, _b) => (_I = (_I || '').replace(/^\//, ''), Object.keys(_b).forEach(a => {
            _I = _I.replace(`:${ a }`, _b[a]);
        }), _I),
        p = (_I, _b, a) => {
            const q = (0, d.default)(_I),
                r = o(_b || '', a);
            return r && q.push(r), q;
        },
        q = _I => {
            var {
                prefixCls: r,
                separator: s = '/',
                style: t,
                className: u,
                rootClassName: v,
                routes: w,
                children: _x,
                itemRender: y = z,
                params: A = {}
            } = _I, B = n(_I, [
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
                getPrefixCls: C,
                direction: D
            } = g.useContext(h.ConfigContext);
            let E;
            const F = C('breadcrumb', r),
                [G, H] = (0, m.default)(F);
            if (w && w.length > 0) {
                const _I = [];
                E = w.map(_b => {
                    const J = o(_b.path, A);
                    let K;
                    J && _I.push(J), _b.children && _b.children.length && (K = g.createElement(i.default, {
                        items: _b.children.map(_b => ({
                            key: _b.path || _b.breadcrumbName,
                            label: y(_b, A, w, p(_I, _b.path, A))
                        }))
                    }));
                    const L = {
                        separator: s
                    };
                    return K && (L.overlay = K), g.createElement(k.default, Object.assign({}, L, {
                        key: J || _b.breadcrumbName
                    }), y(_b, A, w, _I));
                });
            } else
                _x && (E = (0, f.default)(_x).map((_d, _b) => _d ? (0, j.cloneElement)(_d, {
                    separator: s,
                    key: _b
                }) : _d));
            const I = _b(e)(F, {
                [`${ F }-rtl`]: 'rtl' === D
            }, u, v, H);
            return G(g.createElement('nav', Object.assign({
                className: I,
                style: t
            }, B), g.createElement('ol', null, E)));
        };
    q.Item = k.default, q.Separator = l.default;
    var r = q;
}), a.register('+mw3l', function(_b, c) {
    _d(_b.exports, 'default', function() {
        return _n;
    }, function(_d) {
        return _n = _d;
    });
    var d = a('pMmde1'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('MdKih'),
        h = function(i, j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    const i = _h => {
        const {
            prefixCls: j,
            separator: k = '/',
            children: l,
            menu: m,
            overlay: _n,
            dropdownProps: o
        } = _h, p = h(_h, [
            'prefixCls',
            'separator',
            'children',
            'menu',
            'overlay',
            'dropdownProps'
        ]), {
            getPrefixCls: q
        } = e.useContext(f.ConfigContext), r = q('breadcrumb', j);
        let s;
        return s = 'href' in p ? e.createElement('a', Object.assign({
            className: `${ r }-link`
        }, p), l) : e.createElement('span', Object.assign({
            className: `${ r }-link`
        }, p), l), s = (j => {
            if (m || _n) {
                const t = Object.assign({}, o);
                return 'overlay' in _h && (t.overlay = _n), e.createElement(g.default, Object.assign({
                    menu: m,
                    placement: 'bottom'
                }, t), e.createElement('span', {
                    className: `${ r }-overlay-link`
                }, j, e.createElement(d.default, null)));
            }
            return j;
        })(s), null != l ? e.createElement('li', null, s, k && e.createElement('span', {
            className: `${ r }-separator`
        }, k)) : null;
    };
    i.__ANT_BREADCRUMB_ITEM = !0;
    var j = i;
}), a.register('nbX38', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('1P5ls');
    const f = _h => {
        let {
            children: g
        } = _h;
        const {
            getPrefixCls: h
        } = d.useContext(e.ConfigContext), i = h('breadcrumb');
        return d.createElement('span', {
            className: `${ i }-separator`
        }, g || '/');
    };
    f.__ANT_BREADCRUMB_SEPARATOR = !0;
    var _g = f;
}), a.register('+J40X', function(b, c) {
    _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('XC0UB'),
        e = a('l+IVY'),
        f = a('7hbGU');
    const g = _h => {
        const {
            componentCls: h,
            iconCls: i
        } = _h;
        return {
            [h]: Object.assign(Object.assign({}, (0, f.resetComponent)(_h)), {
                color: _h.breadcrumbBaseColor,
                fontSize: _h.breadcrumbFontSize,
                [i]: {
                    fontSize: _h.breadcrumbIconFontSize
                },
                ol: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: 0,
                    padding: 0,
                    listStyle: 'none'
                },
                a: Object.assign({
                    color: _h.breadcrumbLinkColor,
                    transition: `color ${ _h.motionDurationMid }`,
                    padding: `0 ${ _h.paddingXXS }px`,
                    borderRadius: _h.borderRadiusSM,
                    height: _h.lineHeight * _h.fontSize,
                    display: 'inline-block',
                    marginInline: -_h.marginXXS,
                    '&:hover': {
                        color: _h.breadcrumbLinkColorHover,
                        backgroundColor: _h.colorBgTextHover
                    }
                }, (0, f.genFocusStyle)(_h)),
                'li:last-child': {
                    color: _h.breadcrumbLastItemColor,
                    [`& > ${ h }-separator`]: {
                        display: 'none'
                    }
                },
                [`${ h }-separator`]: {
                    marginInline: _h.breadcrumbSeparatorMargin,
                    color: _h.breadcrumbSeparatorColor
                },
                [`${ h }-link`]: {
                    [`\n          > ${ i } + span,\n          > ${ i } + a\n        `]: {
                        marginInlineStart: _h.marginXXS
                    }
                },
                [`${ h }-overlay-link`]: {
                    borderRadius: _h.borderRadiusSM,
                    height: _h.lineHeight * _h.fontSize,
                    display: 'inline-block',
                    padding: `0 ${ _h.paddingXXS }px`,
                    marginInline: -_h.marginXXS,
                    [`> ${ i }`]: {
                        marginInlineStart: _h.marginXXS,
                        fontSize: _h.fontSizeIcon
                    },
                    '&:hover': {
                        color: _h.breadcrumbLinkColorHover,
                        backgroundColor: _h.colorBgTextHover,
                        a: {
                            color: _h.breadcrumbLinkColorHover
                        }
                    },
                    a: {
                        '&:hover': {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                [`&${ _h.componentCls }-rtl`]: {
                    direction: 'rtl'
                }
            })
        };
    };
    var _h = (0, d.default)('Breadcrumb', _h => {
        const i = (0, e.merge)(_h, {
            breadcrumbBaseColor: _h.colorTextDescription,
            breadcrumbFontSize: _h.fontSize,
            breadcrumbIconFontSize: _h.fontSize,
            breadcrumbLinkColor: _h.colorTextDescription,
            breadcrumbLinkColorHover: _h.colorText,
            breadcrumbLastItemColor: _h.colorText,
            breadcrumbSeparatorMargin: _h.marginXS,
            breadcrumbSeparatorColor: _h.colorTextDescription
        });
        return [g(i)];
    });
}), a.register('XbWQE', function(b, c) {
    _h(b.exports, 'useMemberReports', function() {
        return _f;
    });
    var d = a('UapK50'),
        e = a('PMl60');
    const _f = (_h, b) => (0, d.useQuery)({
        queryKey: [
            'group-member-reports',
            b,
            {
                page: _h
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, e.requestAsPromise)({
            url: '/api/game-report/fetch-by-group-member',
            data: {
                page: _h,
                groupMemberId: b
            }
        })
    });
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
                return _f;

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
}), a.register('xBWlV', function(b, c) {
    _i(b.exports, 'ReportPagination', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('42CAy');
    a('LEQ5w');
    const _f = _i => {
        const {
            total: g,
            current: h,
            onPageChange: i
        } = _i;
        return (0, d.jsx)(e.default, {
            simple: !0,
            current: h,
            total: g,
            defaultPageSize: 10,
            onChange: i
        });
    };
}), a.register('zCXjt', function(b, c) {
    _i(b.exports, 'GroupViewStudentTable', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('1P5ls'),
        f = a('XhmoI'),
        g = a('LEQ5w'),
        h = a('Jnm73'),
        i = a('ZpCrt'),
        j = a('PMl60'),
        k = a('VU/uj0');
    const _l = _i => {
            const [m, n] = g.useState();
            return _i.totalItems ? (0, d.jsxs)('div', {
                id: 'student-report-container',
                children: [
                    (0, d.jsx)(e.default, {
                        theme: {
                            token: {
                                padding: 35
                            }
                        },
                        children: (0, d.jsx)(f.default, {
                            dataSource: _i.data.map(_i => ({
                                key: _i._id,
                                ..._i
                            })),
                            columns: _m,
                            bordered: !0,
                            pagination: !1,
                            tableLayout: 'auto',
                            size: 'large',
                            onRow: _i => ({
                                onClick: () => {
                                    n(_i);
                                },
                                style: {
                                    cursor: 'pointer'
                                }
                            }),
                            loading: {
                                spinning: _i.isFetching,
                                indicator: null
                            },
                            sticky: {
                                offsetHeader: _i.containerTopOffset,
                                getContainer: () => document.getElementById('student-report-container')
                            }
                        })
                    }),
                    _i.pagination ? (0, d.jsx)('div', {
                        className: 'maxWidth flex-center',
                        style: {
                            padding: '35px 0px'
                        },
                        children: _i.pagination
                    }) : null,
                    m ? (0, d.jsx)(k.GameReportCompletionModal, {
                        playerName: _i.playerName,
                        gameReportId: m.gameReport,
                        participantId: m._id,
                        close: () => {
                            n(void 0);
                        }
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
                            'Check back here after this student plays a live game or assignment!',
                            ' ',
                            (0, d.jsx)('br', {}),
                            'All of their reports will show up here for you to easily check in on their progress.'
                        ]
                    })
                ]
            });
        },
        _m = [{
                title: 'Kit',
                dataIndex: 'kit',
                key: 'report-kit',
                render: (_i, b) => (0, d.jsx)(h.ReportKit, {
                    kit: _i,
                    dateId: b._id
                })
            },
            {
                title: 'Individual Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: _i => (0, d.jsx)(i.ReportProgressAccuracyMeter, {
                    percent: _i
                })
            },
            {
                title: 'Questions Answered',
                dataIndex: 'questionsAnswered',
                key: 'questions-answered',
                render: _i => (0, j.numberWithCommas)(_i)
            }
        ];
}), a.register('Jnm73', function(b, c) {
    _i(b.exports, 'ReportKit', function() {
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
    let m, n, o, p = _i => _i;
    const _q = _i => {
            const r = _b(g)((0, h.dateFromObjectId)(_i.dateId)).format('MMMM Do [at] LT');
            return (0, d.jsxs)(f.default, {
                direction: 'horizontal',
                size: 14,
                align: 'center',
                children: [
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(_r, {
                            src: (0, l.getCloudinaryUrl)(_i.kit.gif),
                            style: {
                                width: 55,
                                height: 55
                            }
                        })
                    }),
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(_s, {
                                children: _i.kit.title
                            }),
                            (0, d.jsx)(_t, {
                                children: r
                            }),
                            _i.assignmentId ? (0, d.jsx)('div', {
                                style: {
                                    marginTop: '0.25em'
                                },
                                children: (0, d.jsx)(j.ReportLinkTag, {
                                    to: `/assignment/${ _i.assignmentId }`,
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
    _i(_b.exports, 'ReportLinkTag', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('2HvvA11'),
        f = a('Axq+p');
    let g;
    const _h = _i => (0, d.jsx)(_i, {
            onClick: _i => null == _i ? void 0 : _i.stopPropagation(),
            to: _i.to,
            children: _i.children
        }),
        _i = (0, f.default)(e.default)(g || (g = (_i => _i)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`));
}), a.register('x8CoD', function(b, c) {
    _i(b.exports, 'getCloudinaryUrl', function() {
        return _d;
    });
    const _d = _i => {
            const e = _e(_i);
            return e ? _i.includes('/video/upload') ? `https://${ _f }/video/upload/${ e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : _i;
        },
        _e = _i => {
            if (!_i.some(b => _i.includes(b)))
                return null;
            if (_i.includes(_g) && !_i.includes(`/${ _h }/`))
                return null;
            const f = _i.split('/');
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
    _i(b.exports, 'ReportProgressAccuracyMeter', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('1P5ls'),
        f = a('8y7vq');
    a('LEQ5w');
    var g = a('GT7Vh');
    const _h = _i => {
        const i = _i.percent < 60 ? '#F44336' : _i.percent < 80 ? '#FFC107' : '#66BB6A';
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
                percent: _i.percent,
                width: 65,
                strokeColor: i,
                status: 'normal'
            })
        });
    };
}), a.register('VU/uj0', function(b, c) {
    _i(b.exports, 'GameReportCompletionLink', function() {
        return _k;
    }), _i(b.exports, 'GameReportCompletionModal', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('dtquX'),
        g = a('YRlpt'),
        h = a('oBBW6'),
        i = a('PMl60'),
        j = a('sjiOn');
    const _k = {
            icon: f.default,
            label: 'View Report',
            hiddenRender: _i => (0, d.jsx)(_l, {
                playerName: _i.playerName,
                gameReportId: _i.link.resultLinkId,
                participantId: _i.link.completionLinkId,
                close: _i.close
            })
        },
        _l = _i => {
            const [m, , n] = (0, i.useBoolean)(!0), [o, p] = e.useState();
            return e.useEffect(() => {
                (0, i.request)({
                    url: '/api/game-report/fetch-participant-data',
                    data: {
                        gameReportId: _i.gameReportId,
                        participantId: _i.participantId
                    },
                    success: _i => p(_i),
                    error: _i => {
                        n();
                    }
                });
            }, [_i.participantId]), (0, d.jsx)(g.default, {
                open: m,
                onCancel: n,
                afterClose: _i.close,
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
                children: o ? (0, d.jsx)(j.default, {
                    preventScroll: !0,
                    player: {
                        name: _i.playerName,
                        correctQuestionIds: o.correctQuestionIds,
                        incorrectQuestionIds: o.incorrectQuestionIds
                    },
                    questions: o.questions
                }) : (0, d.jsx)('div', {
                    className: 'maxWidth flex-center',
                    children: (0, d.jsx)(h.default, {
                        paragraph: {
                            rows: 16
                        }
                    })
                })
            });
        };
}), a.register('dtquX', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('zbmhG'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'BarChartOutlined';
    var _i = e.forwardRef(h);
}), a.register('zbmhG', function(b, c) {
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
                    d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z'
                }
            }]
        },
        name: 'bar-chart',
        theme: 'outlined'
    };
}), a.register('gn3Uk7', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('haBtH6'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CopyOutlined';
    var _i = e.forwardRef(h);
}), a.register('haBtH6', function(b, c) {
    _d(b.exports, 'default', function() {
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
                    d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'
                }
            }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), a.register('6BM9K6', function(b, c) {
    _d(b.exports, 'default', function() {
        return _s;
    }, function(_d) {
        return _s = _d;
    });
    var d = a('QECub'),
        e = a('JrtKP'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('dFMJk'),
        i = a('QyNEL'),
        j = a('J4wJU8'),
        k = a('E4QrV8'),
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
    const m = (_d, a) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: _s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = _d, x = l(_d, [
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
                getPrefixCls: y,
                direction: z
            } = f.useContext(g.ConfigContext), [A, B] = f.useState(!0);
            f.useEffect(() => {
                'visible' in x && B(x.visible);
            }, [x.visible]);
            const C = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                D = Object.assign({
                    backgroundColor: t && !C ? t : void 0
                }, q),
                E = y('tag', n),
                [F, G] = (0, k.default)(E),
                H = _j(e)(E, {
                    [`${ E }-${ t }`]: C,
                    [`${ E }-has-color`]: t && !C,
                    [`${ E }-hidden`]: !A,
                    [`${ E }-rtl`]: 'rtl' === z
                }, o, p, G),
                I = _d => {
                    _d.stopPropagation(), null == u || u(_d), _d.defaultPrevented || B(!1);
                },
                J = 'function' == typeof x.onClick || r && 'a' === r.type,
                K = _s || null,
                L = K ? f.createElement(f.Fragment, null, K, f.createElement('span', null, r)) : r,
                M = f.createElement('span', Object.assign({}, x, {
                    ref: a,
                    className: H,
                    style: D
                }), L, w ? v ? f.createElement('span', {
                    className: `${ E }-close-icon`,
                    onClick: I
                }, v) : f.createElement(d.default, {
                    className: `${ E }-close-icon`,
                    onClick: I
                }) : null);
            return F(J ? f.createElement(i.default, null, M) : M);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = n;
}), a.register('J4wJU8', function(b, c) {
    _d(b.exports, 'default', function() {
        return _i;
    }, function(_d) {
        return _i = _d;
    });
    var d = a('JrtKP'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('E4QrV8'),
        h = function(i, _j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && _j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    _j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    var _i = _e => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = _e, o = h(_e, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: p
        } = e.useContext(f.ConfigContext), q = p('tag', j), [r, s] = (0, g.default)(q), t = _b(d)(q, {
            [`${ q }-checkable`]: !0,
            [`${ q }-checkable-checked`]: l
        }, k, s);
        return r(e.createElement('span', Object.assign({}, o, {
            className: t,
            onClick: _e => {
                null == m || m(!l), null == n || n(_e);
            }
        })));
    };
}), a.register('E4QrV8', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('XC0UB'),
        e = a('l+IVY'),
        f = a('xbYck1'),
        g = a('bL6OF'),
        h = a('7hbGU');
    const i = (_e, _b, a) => {
            const j = (0, f.default)(a);
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: _e[`color${ a }`],
                    background: _e[`color${ j }Bg`],
                    borderColor: _e[`color${ j }Border`]
                }
            };
        },
        j = _e => (0, g.genPresetColor)(_e, (_b, a) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = a;
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: _e.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = _e => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = _e, p = n - m, q = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(_e)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: _e.marginXS,
                    paddingInline: p,
                    fontSize: _e.tagFontSize,
                    lineHeight: `${ _e.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: _e.tagDefaultBg,
                    border: `${ _e.lineWidth }px ${ _e.lineType } ${ _e.colorBorder }`,
                    borderRadius: _e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ _e.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: _e.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: q,
                        color: _e.colorTextDescription,
                        fontSize: _e.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ _e.motionDurationMid }`,
                        '&:hover': {
                            color: _e.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ _e.iconCls }-close, ${ _e.iconCls }-close:hover`]: {
                            color: _e.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: _e.colorPrimary,
                            backgroundColor: _e.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: _e.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: _e.colorPrimary,
                            '&:hover': {
                                backgroundColor: _e.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: _e.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ _e.iconCls } + span, > span + ${ _e.iconCls }`]: {
                        marginInlineStart: p
                    }
                })
            };
        };
    var _l = (0, d.default)('Tag', _e => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = _e, q = Math.round(m * n), r = _e.fontSizeSM, s = q - 2 * o, t = _e.colorFillAlter, u = _e.colorText, v = (0, e.merge)(_e, {
            tagFontSize: r,
            tagLineHeight: s,
            tagDefaultBg: t,
            tagDefaultColor: u,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(v),
            j(v),
            i(v, 'success', 'Success'),
            i(v, 'processing', 'Info'),
            i(v, 'error', 'Error'),
            i(v, 'warning', 'Warning')
        ];
    });
}), a.register('xbYck1', function(b, c) {
    function d(_e) {
        if ('string' != typeof _e)
            return _e;
        return _e.charAt(0).toUpperCase() + _e.slice(1);
    }
    _b(b.exports, 'default', function() {
        return _c;
    });
}), a.register('DKaq/', function(b, _c) {
    _b(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('YRlpt'),
        h = a('sHRDd'),
        i = a('x8CoD');
    let j;
    const k = f.default.img.attrs(_b => ({
        src: _b.image
    }))(j || (j = (_b => _b)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), _b => _b.size, _b => _b.size, _b => _b.customRightMargin ? _b.customRightMargin : 0, _b => _b.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var _l = _b => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ..._b,
                    onClick: m => {
                        m.stopPropagation(), _b.onClick && _b.onClick(), _b.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: _b => {
                        _b.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(_b.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), a.register('dDoty', function(b, c) {
    _b(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w');
    const f = e.lazy(() => a('l3sIa'));
    var _g = _b => (0, d.jsx)(e.Suspense, {
        fallback: _b.fallback || null,
        children: (0, d.jsx)(f, {
            latex: _b.latex
        })
    });
}), a.register('l3sIa', function(_b, c) {
    _b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('8pe9D')),
        import('./' + a('HmN9A').resolve('5OCdz'))
    ]).then(() => a('vZVkZ'));
}), a.register('PElTf4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('F10jM4'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownloadOutlined';
    var _i = e.forwardRef(h);
}), a.register('F10jM4', function(b, c) {
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
                    d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'download',
        theme: 'outlined'
    };
});