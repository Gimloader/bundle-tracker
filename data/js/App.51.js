function a(a, b, c, w) {
    Object.defineProperty(a, b, {
        get: c,
        set: w,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('5MH3s', function(b, w) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return s;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('HZrmb'),
        h = c('0R8EW'),
        i = c('KzqIz'),
        j = c('GzycZ'),
        k = c('PjB0f'),
        l = c('RHao3'),
        m = c('r2BNY'),
        n = c('2EsxY'),
        o = c('+98NM'),
        p = c('qpNcE0'),
        q = c('dlNtt1'),
        r = c('855dH');
    var s = () => {
        var t;
        const {
            id: u,
            studentId: v
        } = (0, h.useParams)(), [w, x] = (0, i.useSearchParams)();
        var y;
        const z = Math.max(1, null !== (y = Number(w.get('page'))) && void 0 !== y ? y : 1),
            [A, B] = f.useState(0),
            C = f.useRef(null);
        (0, p.default)(C, t => {
            var D, E;
            B(null !== (E = null === (D = t.target) || void 0 === D ? void 0 : D.offsetTop) && void 0 !== E ? E : 0);
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
                    if (!F.members.find(t => t._id === v))
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
            L = null == F || null === (t = F.members) || void 0 === t ? void 0 : t.find(t => t._id === v),
            M = I && (null == I ? void 0 : I.totalItems) ? (0, e.jsx)(q.ReportPagination, {
                total: I.totalItems,
                current: z,
                onPageChange: t => {
                    x({
                        page: t
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
                                children: (null == K || null === (N = K.message) || void 0 === N ? void 0 : N.text) || 'There was an error fetching this class. Please try again.'
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
        var N;
    };
}), c.register('RHao3', function(b, p) {
    a(b.exports, 'GroupViewStudentHeader', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('gSUVO'),
        f = c('syqC2'),
        g = c('iYEuk12');
    const h = a => {
        const {
            student: i,
            group: j
        } = k;
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
                    children: k.children
                })
            ]
        }) : (0, d.jsx)('div', {
            style: {
                height: 154
            }
        });
    };
}), c.register('syqC2', function(b, p) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = c('Mtoqp').default;
}), c.register('Mtoqp', function(p, q) {
    a(p.exports, 'default', function() {
        return y;
    }, function(a) {
        return y = a;
    });
    var d = c('P7Ub/'),
        e = c('VAIs1'),
        f = c('8N2Yw'),
        g = c('uPP4W'),
        h = c('qEw51'),
        i = c('u3X1v'),
        j = c('Cpebg'),
        k = c('I3bfn'),
        l = c('XvTYR'),
        m = c('Y7KpO'),
        n = function(a, b) {
            var o = {};
            for (var p in a)
                Object.prototype.hasOwnProperty.call(a, p) && b.indexOf(p) < 0 && (o[p] = a[p]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(a); q < p.length; q++)
                    b.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(a, p[q]) && (o[p[q]] = a[p[q]]);
            }
            return o;
        };

    function o(a, b, c, r) {
        const p = c.indexOf(a) === c.length - 1,
            q = function(a, b) {
                if (!a.breadcrumbName)
                    return null;
                const r = Object.keys(b).join('|');
                return a.breadcrumbName.replace(new RegExp(`:(${ r })`, 'g'), (a, r) => b[r] || a);
            }(a, b);
        return p ? g.createElement('span', null, q) : g.createElement('a', {
            href: `#/${ r.join('/') }`
        }, q);
    }
    const p = (a, b) => (a = (a || '').replace(/^\//, ''), Object.keys(b).forEach(c => {
            a = a.replace(`:${ c }`, b[c]);
        }), a),
        q = (a, b, c) => {
            const r = (0, d.default)(a),
                s = p(b || '', c);
            return s && r.push(s), r;
        },
        r = a => {
            var {
                prefixCls: s,
                separator: t = '/',
                style: u,
                className: v,
                rootClassName: w,
                routes: x,
                children: y,
                itemRender: z = A,
                params: B = {}
            } = C, D = n(C, [
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
                getPrefixCls: E,
                direction: F
            } = g.useContext(h.ConfigContext);
            let G;
            const H = E('breadcrumb', s),
                [I, J] = (0, m.default)(H);
            if (x && x.length > 0) {
                const K = [];
                G = x.map(b => {
                    const L = p(b.path, B);
                    let M;
                    L && K.push(L), b.children && b.children.length && (M = g.createElement(i.default, {
                        items: b.children.map(b => ({
                            key: b.path || b.breadcrumbName,
                            label: z(b, B, x, q(K, b.path, B))
                        }))
                    }));
                    const N = {
                        separator: t
                    };
                    return M && (N.overlay = M), g.createElement(k.default, Object.assign({}, N, {
                        key: L || b.breadcrumbName
                    }), z(b, B, x, K));
                });
            } else
                y && (G = (0, f.default)(y).map((C, b) => C ? (0, j.cloneElement)(C, {
                    separator: t,
                    key: b
                }) : C));
            const K = b(e)(H, {
                [`${ H }-rtl`]: 'rtl' === F
            }, v, w, J);
            return I(g.createElement('nav', Object.assign({
                className: K,
                style: u
            }, D), g.createElement('ol', null, G)));
        };
    r.Item = k.default, r.Separator = l.default;
    var s = t;
}), c.register('I3bfn', function(b, j) {
    a(b.exports, 'default', function() {
        return n;
    }, function(a) {
        return n = a;
    });
    var d = c('JegR3'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('cB/2c'),
        h = function(a, b) {
            var i = {};
            for (var j in a)
                Object.prototype.hasOwnProperty.call(a, j) && b.indexOf(j) < 0 && (i[j] = a[j]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(a); k < j.length; k++)
                    b.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(a, j[k]) && (i[j[k]] = a[j[k]]);
            }
            return i;
        };
    const i = a => {
        const {
            prefixCls: j,
            separator: k = '/',
            children: l,
            menu: m,
            overlay: n,
            dropdownProps: o
        } = p, q = h(p, [
            'prefixCls',
            'separator',
            'children',
            'menu',
            'overlay',
            'dropdownProps'
        ]), {
            getPrefixCls: r
        } = e.useContext(f.ConfigContext), s = r('breadcrumb', j);
        let t;
        return t = 'href' in q ? e.createElement('a', Object.assign({
            className: `${ s }-link`
        }, q), l) : e.createElement('span', Object.assign({
            className: `${ s }-link`
        }, q), l), t = (j => {
            if (m || n) {
                const u = Object.assign({}, o);
                return 'overlay' in p && (u.overlay = n), e.createElement(g.default, Object.assign({
                    menu: m,
                    placement: 'bottom'
                }, u), e.createElement('span', {
                    className: `${ s }-overlay-link`
                }, j, e.createElement(d.default, null)));
            }
            return j;
        })(t), null != l ? e.createElement('li', null, t, k && e.createElement('span', {
            className: `${ s }-separator`
        }, k)) : null;
    };
    i.__ANT_BREADCRUMB_ITEM = !0;
    var j = k;
}), c.register('XvTYR', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('qEw51');
    const f = a => {
        let {
            children: g
        } = h;
        const {
            getPrefixCls: i
        } = d.useContext(e.ConfigContext), j = i('breadcrumb');
        return d.createElement('span', {
            className: `${ j }-separator`
        }, g || '/');
    };
    f.__ANT_BREADCRUMB_SEPARATOR = !0;
    var g = h;
}), c.register('Y7KpO', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('vvwoA'),
        e = c('jnIuq'),
        f = c('P38j/');
    const g = a => {
        const {
            componentCls: h,
            iconCls: i
        } = j;
        return {
            [h]: Object.assign(Object.assign({}, (0, f.resetComponent)(j)), {
                color: j.breadcrumbBaseColor,
                fontSize: j.breadcrumbFontSize,
                [i]: {
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
                }, (0, f.genFocusStyle)(j)),
                'li:last-child': {
                    color: j.breadcrumbLastItemColor,
                    [`& > ${ h }-separator`]: {
                        display: 'none'
                    }
                },
                [`${ h }-separator`]: {
                    marginInline: j.breadcrumbSeparatorMargin,
                    color: j.breadcrumbSeparatorColor
                },
                [`${ h }-link`]: {
                    [`\n          > ${ i } + span,\n          > ${ i } + a\n        `]: {
                        marginInlineStart: j.marginXXS
                    }
                },
                [`${ h }-overlay-link`]: {
                    borderRadius: j.borderRadiusSM,
                    height: j.lineHeight * j.fontSize,
                    display: 'inline-block',
                    padding: `0 ${ j.paddingXXS }px`,
                    marginInline: -j.marginXXS,
                    [`> ${ i }`]: {
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
    var h = (0, d.default)('Breadcrumb', a => {
        const i = (0, e.merge)(a, {
            breadcrumbBaseColor: a.colorTextDescription,
            breadcrumbFontSize: a.fontSize,
            breadcrumbIconFontSize: a.fontSize,
            breadcrumbLinkColor: a.colorTextDescription,
            breadcrumbLinkColorHover: a.colorText,
            breadcrumbLastItemColor: a.colorText,
            breadcrumbSeparatorMargin: a.marginXS,
            breadcrumbSeparatorColor: a.colorTextDescription
        });
        return [g(i)];
    });
}), c.register('2EsxY', function(b, k) {
    a(b.exports, 'useMemberReports', function() {
        return f;
    });
    var d = c('IsAdf'),
        e = c('PjB0f');
    const f = (a, b) => (0, d.useQuery)({
        queryKey: [
            'group-member-reports',
            b,
            {
                page: a
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, e.requestAsPromise)({
            url: '/api/game-report/fetch-by-group-member',
            data: {
                page: a,
                groupMemberId: b
            }
        })
    });
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
}), c.register('855dH', function(b, d) {
    a(b.exports, 'GroupViewStudentTable', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('qEw51'),
        f = c('VaygL'),
        g = c('uPP4W'),
        h = c('cKlnM'),
        i = c('gl+210'),
        j = c('PjB0f'),
        k = c('VIXGK0');
    const l = a => {
            const [m, n] = g.useState();
            return a.totalItems ? (0, d.jsxs)('div', {
                id: 'student-report-container',
                children: [
                    (0, d.jsx)(e.default, {
                        theme: {
                            token: {
                                padding: 35
                            }
                        },
                        children: (0, d.jsx)(f.default, {
                            dataSource: a.data.map(a => ({
                                key: a._id,
                                ...a
                            })),
                            columns: m,
                            bordered: !0,
                            pagination: !1,
                            tableLayout: 'auto',
                            size: 'large',
                            onRow: a => ({
                                onClick: () => {
                                    n(a);
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
                    a.pagination ? (0, d.jsx)('div', {
                        className: 'maxWidth flex-center',
                        style: {
                            padding: '35px 0px'
                        },
                        children: a.pagination
                    }) : null,
                    m ? (0, d.jsx)(k.GameReportCompletionModal, {
                        playerName: a.playerName,
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
        m = [{
                title: 'Kit',
                dataIndex: 'kit',
                key: 'report-kit',
                render: (a, b) => (0, d.jsx)(h.ReportKit, {
                    kit: a,
                    dateId: b._id
                })
            },
            {
                title: 'Individual Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: a => (0, d.jsx)(i.ReportProgressAccuracyMeter, {
                    percent: a
                })
            },
            {
                title: 'Questions Answered',
                dataIndex: 'questionsAnswered',
                key: 'questions-answered',
                render: a => (0, j.numberWithCommas)(a)
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
}), c.register('gl+210', function(b, o) {
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
}), c.register('VIXGK0', function(b, o) {
    a(b.exports, 'GameReportCompletionLink', function() {
        return k;
    }), a(b.exports, 'GameReportCompletionModal', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('Iz059'),
        g = c('cR5QE'),
        h = c('+98NM'),
        i = c('PjB0f'),
        j = c('9TAjB');
    const k = {
            icon: f.default,
            label: 'View Report',
            hiddenRender: a => (0, d.jsx)(l, {
                playerName: a.playerName,
                gameReportId: a.link.resultLinkId,
                participantId: a.link.completionLinkId,
                close: a.close
            })
        },
        l = a => {
            const [m, , n] = (0, i.useBoolean)(!0), [o, p] = e.useState();
            return e.useEffect(() => {
                (0, i.request)({
                    url: '/api/game-report/fetch-participant-data',
                    data: {
                        gameReportId: a.gameReportId,
                        participantId: a.participantId
                    },
                    success: a => p(a),
                    error: a => {
                        n();
                    }
                });
            }, [a.participantId]), (0, d.jsx)(g.default, {
                open: m,
                onCancel: n,
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
                children: o ? (0, d.jsx)(j.default, {
                    preventScroll: !0,
                    player: {
                        name: a.playerName,
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
}), c.register('Iz059', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('piGSI'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'BarChartOutlined';
    var i = e.forwardRef(h);
}), c.register('piGSI', function(b, c) {
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
                    d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z'
                }
            }]
        },
        name: 'bar-chart',
        theme: 'outlined'
    };
}), c.register('SHiyt7', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Gxa0x7'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'CopyOutlined';
    var i = e.forwardRef(h);
}), c.register('Gxa0x7', function(b, c) {
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
                    d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'
                }
            }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), c.register('JQ8A18', function(n, o) {
    a(n.exports, 'default', function() {
        return s;
    }, function(a) {
        return s = a;
    });
    var d = c('obWo+'),
        e = c('VAIs1'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('HVIEA'),
        i = c('PYjVb'),
        j = c('13lgq8'),
        k = c('RdtDA8'),
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
    const m = (a, c) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = x, y = l(x, [
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
                getPrefixCls: z,
                direction: A
            } = f.useContext(g.ConfigContext), [B, C] = f.useState(!0);
            f.useEffect(() => {
                'visible' in y && C(y.visible);
            }, [y.visible]);
            const D = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                E = Object.assign({
                    backgroundColor: t && !D ? t : void 0
                }, q),
                F = z('tag', n),
                [G, H] = (0, k.default)(F),
                I = b(e)(F, {
                    [`${ F }-${ t }`]: D,
                    [`${ F }-has-color`]: t && !D,
                    [`${ F }-hidden`]: !B,
                    [`${ F }-rtl`]: 'rtl' === A
                }, o, p, H),
                J = x => {
                    x.stopPropagation(), null == u || u(x), x.defaultPrevented || C(!1);
                },
                K = 'function' == typeof y.onClick || r && 'a' === r.type,
                L = s || null,
                M = L ? f.createElement(f.Fragment, null, L, f.createElement('span', null, r)) : r,
                N = f.createElement('span', Object.assign({}, y, {
                    ref: c,
                    className: I,
                    style: E
                }), M, w ? v ? f.createElement('span', {
                    className: `${ F }-close-icon`,
                    onClick: J
                }, v) : f.createElement(d.default, {
                    className: `${ F }-close-icon`,
                    onClick: J
                }) : null);
            return G(K ? f.createElement(i.default, null, N) : N);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = p;
}), c.register('13lgq8', function(j, k) {
    a(j.exports, 'default', function() {
        return i;
    }, function(a) {
        return i = a;
    });
    var d = c('VAIs1'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('RdtDA8'),
        h = function(a, b) {
            var i = {};
            for (var j in a)
                Object.prototype.hasOwnProperty.call(a, j) && b.indexOf(j) < 0 && (i[j] = a[j]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(a); k < j.length; k++)
                    b.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(a, j[k]) && (i[j[k]] = a[j[k]]);
            }
            return i;
        };
    var i = a => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = o, p = h(o, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: q
        } = e.useContext(f.ConfigContext), r = q('tag', j), [s, t] = (0, g.default)(r), u = b(d)(r, {
            [`${ r }-checkable`]: !0,
            [`${ r }-checkable-checked`]: l
        }, k, t);
        return s(e.createElement('span', Object.assign({}, p, {
            className: u,
            onClick: o => {
                null == m || m(!l), null == n || n(o);
            }
        })));
    };
}), c.register('RdtDA8', function(b, j) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('vvwoA'),
        e = c('jnIuq'),
        f = c('hTZV68'),
        g = c('JkiNt'),
        h = c('P38j/');
    const i = (a, b, c) => {
            const j = (0, f.default)(c);
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: a[`color${ c }`],
                    background: a[`color${ j }Bg`],
                    borderColor: a[`color${ j }Border`]
                }
            };
        },
        j = a => (0, g.genPresetColor)(a, (b, c) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = o;
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: a.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = a => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = p, q = n - m, r = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(p)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: p.marginXS,
                    paddingInline: q,
                    fontSize: p.tagFontSize,
                    lineHeight: `${ p.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: p.tagDefaultBg,
                    border: `${ p.lineWidth }px ${ p.lineType } ${ p.colorBorder }`,
                    borderRadius: p.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ p.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: p.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: r,
                        color: p.colorTextDescription,
                        fontSize: p.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ p.motionDurationMid }`,
                        '&:hover': {
                            color: p.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ p.iconCls }-close, ${ p.iconCls }-close:hover`]: {
                            color: p.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: p.colorPrimary,
                            backgroundColor: p.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: p.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: p.colorPrimary,
                            '&:hover': {
                                backgroundColor: p.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: p.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ p.iconCls } + span, > span + ${ p.iconCls }`]: {
                        marginInlineStart: q
                    }
                })
            };
        };
    var l = (0, d.default)('Tag', a => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = q, r = Math.round(m * n), s = q.fontSizeSM, t = r - 2 * o, u = q.colorFillAlter, v = q.colorText, w = (0, e.merge)(q, {
            tagFontSize: s,
            tagLineHeight: t,
            tagDefaultBg: u,
            tagDefaultColor: v,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(w),
            j(w),
            i(w, 'success', 'Success'),
            i(w, 'processing', 'Info'),
            i(w, 'error', 'Error'),
            i(w, 'warning', 'Warning')
        ];
    });
}), c.register('hTZV68', function(b, c) {
    function d(a) {
        if ('string' != typeof a)
            return a;
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('qLhB38', function(b, d) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('cR5QE'),
        h = c('lmfrI'),
        i = c('2WDH6');
    let j;
    const k = f.default.img.attrs(a => ({
        src: a.image
    }))(j || (j = (a => a)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), a => a.size, a => a.size, a => a.customRightMargin ? a.customRightMargin : 0, a => a.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var l = a => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ...a,
                    onClick: m => {
                        m.stopPropagation(), a.onClick && a.onClick(), a.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: a => {
                        a.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(a.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('bTRJM', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W');
    const f = e.lazy(() => c('FhxEZ0'));
    var g = a => (0, d.jsx)(e.Suspense, {
        fallback: a.fallback || null,
        children: (0, d.jsx)(f, {
            latex: a.latex
        })
    });
}), c.register('FhxEZ0', function(a, b) {
    a.exports = Promise.all([
        import('./' + c('tIOy4').resolve('8pe9D')),
        import('./' + c('tIOy4').resolve('5OCdz'))
    ]).then(() => c('feyVh'));
}), c.register('bzteU5', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('edRUl4'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DownloadOutlined';
    var i = e.forwardRef(h);
}), c.register('edRUl4', function(b, c) {
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
                    d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'download',
        theme: 'outlined'
    };
});