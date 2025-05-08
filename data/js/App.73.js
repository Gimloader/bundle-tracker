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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _v;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    let s, t, u = v => v;
    var _v = () => {
        const [w, x] = i.useState(), {id: y} = (0, p.useParams)();
        i.useEffect(() => {
            (0, m.request)({
                url: `/api/map-assignment/basic-info/${ y }`,
                success: z => {
                    x(z);
                },
                error: () => (0, q.NavigateTo)(o.DASHBOARD)
            });
        }, []);
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(m.Title, { title: 'Assignment' }),
                (0, g.jsxs)(_w, {
                    children: [
                        (0, g.jsx)(r.default, { includeSpacer: !0 }),
                        w ? (0, g.jsx)(n.default, {
                            id: y,
                            info: w
                        }) : (0, g.jsx)(_x, { children: (0, g.jsx)(h.default, { size: 'large' }) })
                    ]
                })
            ]
        });
    };
    const _w = j.default.div.attrs({ className: 'flex flex-column' })(s || (s = u`
  flex: 1;
  background: ${ 0 };
  color: ${ 0 };
  font-family: ${ 0 };
`), k.default.Snow, k.default.Black, l.Fonts.SFPro), _x = j.default.div.attrs({ className: 'maxAll flex-center' })(t || (t = u``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'Tab', function () {
        return _p;
    }), a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    let o, _p;
    var q;
    (q = _p || (_p = {})).share = 'share', q.results = 'results', q.info = 'info';
    var _r = s => {
        const {
                title: t,
                dueDate: u
            } = s.info, [v, w] = g.useState(_p.share), x = b(n)().isAfter(b(n)(u));
        g.useEffect(() => {
            x && w(_p.results);
        }, [x]);
        const y = b(n)((0, l.dateFromObjectId)(s.id)).add(546, 'days'), z = !b(n)().isAfter(y) && Math.abs(b(n)().diff(y, 'months')) < 3;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                z ? (0, f.jsx)(m.default, {
                    banner: !0,
                    message: `Assignments are automatically deleted after 1.5 years. This assignment will be deleted on ${ y.format('MMMM Do') }.`
                }) : null,
                (0, f.jsxs)(_s, {
                    children: [
                        (0, f.jsx)(i.default, {
                            id: s.id,
                            title: t,
                            dueDate: u
                        }),
                        (0, f.jsx)(k.default, {
                            tab: v,
                            onTabChange: w,
                            info: s.info,
                            isPastDue: x
                        }),
                        (0, f.jsx)(j.default, {
                            id: s.id,
                            info: s.info,
                            tab: v
                        })
                    ]
                }),
                (0, f.jsx)(l.Title, { title: `${ t } | Assignment` })
            ]
        });
    };
    const _s = h.default.div.attrs({ className: 'maxWidth flex-column vc' })(o || (o = (t => t)`
  flex: 1;
  padding: 40px 20px 0px 20px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q, r, s, t, u, v, w = x => x;
    var _x = y => {
        const [z, A, B] = (0, p.useBoolean)(!1), [C, D] = l.useState(y.title), [E, F] = l.useState(''), [G, H, I] = (0, p.useBoolean)(!1), J = () => {
                G || (H(), (0, p.request)({
                    url: '/api/map-assignment/change-title',
                    data: {
                        id: y.id,
                        title: E
                    },
                    success: K => {
                        D(K.title), F(''), B();
                    },
                    both: () => {
                        I();
                    }
                }));
            };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_y, {
                    children: [
                        (0, f.jsxs)(_z, {
                            children: [
                                'Assignment - Due ',
                                b(k)(y.dueDate).format('MMMM Do')
                            ]
                        }),
                        (0, f.jsx)('div', {
                            children: (0, f.jsx)(j.default, {
                                title: 'Change Name',
                                placement: 'left',
                                children: (0, f.jsx)(_A, {
                                    onClick: A,
                                    children: C
                                })
                            })
                        })
                    ]
                }),
                (0, f.jsx)(i.default, {
                    open: z,
                    onCancel: B,
                    closable: !0,
                    footer: (0, f.jsx)(g.default, {
                        type: 'primary',
                        loading: G,
                        onClick: J,
                        children: 'Save'
                    }),
                    width: 600,
                    children: (0, f.jsxs)(_B, {
                        children: [
                            (0, f.jsx)(_C, { children: 'New Name' }),
                            (0, f.jsx)(_D, { children: 'Leave empty to use the name of the game mode for this assignment!' }),
                            (0, f.jsx)(h.default, {
                                size: 'large',
                                style: { width: '100%' },
                                maxLength: 32,
                                placeholder: y.title || 'Assignment...',
                                value: E,
                                onChange: K => F(K.target.value),
                                onPressEnter: J
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _y = m.default.div.attrs({ className: 'maxWidth flex-center flex-column' })(q || (q = w``)), _z = m.default.div(r || (r = w`
  font-size: 18px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.85);
`)), _A = m.default.div(s || (s = w`
  font-size: 56px;
  font-weight: ${ 0 };
  text-align: center;
  cursor: pointer;
`), o.FontWeights.UltraBold), _B = m.default.div(t || (t = w`
  color: ${ 0 };
  font-family: ${ 0 };
`), n.default.Black, o.Fonts.SFPro), _C = m.default.div(u || (u = w`
  font-size: 22px;
  font-weight: ${ 0 };
`), o.FontWeights.Bold), _D = m.default.div(v || (v = w`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    let o;
    var _p = q => {
        const {
            tab: r,
            id: s,
            info: t
        } = q;
        return (0, f.jsx)(_q, {
            children: r === g.Tab.share ? (0, f.jsx)(l.default, { id: s }) : r === g.Tab.results ? (0, f.jsx)(m.default, {
                id: s,
                groups: t.groups
            }) : r === g.Tab.info ? (0, f.jsx)(n.default, { info: t }) : null
        });
    };
    const _q = (0, h.default)(i.default).attrs({ className: 'scroll-x' })(o || (o = (r => r)`
  width: 1000px;
  max-width: 90%;
  flex: 1;
  padding: 0px;
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: ${ 0 };
  font-family: ${ 0 };
`), j.default.Black, k.Fonts.SFPro);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    let i;
    var _j = k => (0, f.jsx)(_k, {
        onClick: k.onClick,
        className: k.className,
        style: k.style,
        children: k.children
    });
    const _k = g.default.div(i || (i = (l => l)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), h.default.White);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    c('.....');
    var k = c('.....'), l = c('.....'), m = c('.....');
    let n, o, p, q = r => r;
    var _r = s => {
        const t = (0, m.getDomain)() + '/join/' + s.id;
        return (0, f.jsxs)(_s, {
            children: [
                (0, f.jsx)(_t, { children: 'Share this link with your students to have them complete this assignment!' }),
                (0, f.jsxs)(_u, {
                    children: [
                        (0, f.jsx)(h.default, {
                            value: t,
                            style: { color: l.default.Black },
                            size: 'large'
                        }),
                        (0, f.jsx)(g.default, {
                            size: 'large',
                            type: 'primary',
                            style: { marginLeft: 10 },
                            onClick: () => {
                                b(j)(t), i.default.success('Link copied to clipboard!');
                            },
                            children: 'Copy Link'
                        })
                    ]
                })
            ]
        });
    };
    const _s = k.default.div(n || (n = q`
  padding: 35px;
`)), _t = k.default.div(o || (o = q`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
`)), _u = k.default.div.attrs({ className: 'flex vc ' })(p || (p = q`
  padding: 20px;
  margin-top: 20px;
  border: 1px solid ${ 0 };
  border-radius: 4px;
  margin-top: 10px;
`), l.default.BorderGray);
}), c.register('.....', function (d, e) {
    a(d.exports, 'Status', function () {
        return _o;
    }), a(d.exports, 'Sort', function () {
        return _r;
    }), a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    let m, n, _o, p = q => q;
    var q;
    let _r;
    var s;
    (q = _o || (_o = {})).completed = 'completed', q.inProgress = 'in-progress', q.notStarted = 'not-started', (s = _r || (_r = {})).firstName = 'firstName', s.lastName = 'lastName';
    var _t = u => {
        const [v, w] = g.useState(_o.completed), [x, y] = g.useState(''), [z, A] = g.useState(_r.firstName);
        return (0, f.jsxs)(_u, {
            children: [
                (0, f.jsx)(j.default, {
                    group: x,
                    onGroupChange: y,
                    groups: u.groups,
                    status: v,
                    onStatusChange: w,
                    sort: z,
                    onSortChange: A
                }),
                (0, f.jsx)(_v, {
                    children: v === _o.completed ? (0, f.jsx)(i.default, {
                        id: u.id,
                        group: x,
                        sort: z
                    }) : v === _o.inProgress ? (0, f.jsx)(k.default, {
                        id: u.id,
                        group: x,
                        sort: z
                    }) : v === _o.notStarted ? (0, f.jsx)(l.default, {
                        id: u.id,
                        group: x,
                        sort: z
                    }) : null
                })
            ]
        });
    };
    const _u = h.default.div.attrs({ className: 'flex' })(m || (m = p`
  padding: 0px 30px;
`)), _v = h.default.div.attrs({ className: 'flex' })(n || (n = p`
  flex: 1;
  padding: 30px;
  padding-right: 0px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....');
    var _r = s => {
        const [t, u, v] = (0, k.useBoolean)(!0), [w, x] = i.useState([]);
        if (i.useEffect(() => {
                u(), (0, k.request)({
                    url: '/api/map-assignment/completions',
                    data: {
                        id: s.id,
                        group: s.group
                    },
                    success: y => x(y),
                    both: v,
                    cacheKey: 'ASSIGNMENT_COMPLETED'
                });
            }, [s.group]), t)
            return (0, f.jsx)(o.default, {});
        if (!w.length)
            return (0, f.jsx)(n.default, { children: s.group ? 'Nobody in this class has completed this assignment yet' : 'Nobody has completed this assignment yet' });
        const y = s.sort === p.Sort.firstName ? (0, l.default)(w, z => z.name) : (0, m.default)(w, z => z.name);
        return (0, f.jsxs)('div', {
            className: 'maxWidth',
            children: [
                y.length >= 1000 ? (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(g.default, {
                            message: (0, f.jsx)('span', {
                                style: { fontWeight: j.FontWeights.Bold },
                                children: 'Only 1,000 Completions Shown'
                            }),
                            description: 'This assignment has been completed 1,000+ times. Only the first 1,000 completions are shown, meaning data for some students may be missing.',
                            showIcon: !0,
                            type: 'warning'
                        }),
                        (0, f.jsx)(h.default, {})
                    ]
                }) : null,
                y.map((z, A) => (0, f.jsxs)(i.Fragment, {
                    children: [
                        (0, f.jsx)(q.default, { data: z }),
                        A !== w.length - 1 && (0, f.jsx)('div', { style: { height: 10 } })
                    ]
                }, z._id + '-player'))
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = (g, h) => g.sort((i, j) => {
        const k = h(i), l = h(j);
        return k.localeCompare(l);
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    const f = g => g.split(' ').pop() || g;
    var _g = (h, i) => h.sort((j, k) => {
        const l = f(i(j)), m = f(i(k));
        return l.localeCompare(m);
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    let i, j, k, l, m = n => n;
    var _n = o => (0, f.jsxs)(_o, {
        children: [
            (0, f.jsx)(_p, {}),
            (0, f.jsx)(_q, { children: 'Nothing yet...' }),
            (0, f.jsx)(_r, { children: o.children })
        ]
    });
    const _o = g.default.div.attrs({ className: 'flex-column flex-center maxWidth' })(i || (i = m`
  flex: 1;
  min-height: 400px;
  text-align: center;
`)), _p = g.default.img.attrs({ src: '/client/img/assignment/box.svg' })(j || (j = m`
  height: 80px;
`)), _q = g.default.div(k || (k = m`
  font-weight: ${ 0 };
  font-size: 28px;
  margin-top: 15px;
`), h.FontWeights.UltraBold), _r = g.default.div(l || (l = m`
  font-size: 18px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....');
    let i;
    var _j = () => (0, f.jsx)(_k, {
        children: (0, f.jsx)(g.default, {
            active: !0,
            title: !1,
            paragraph: { rows: 14 }
        })
    });
    const _k = h.default.div.attrs({ className: 'maxWidth' })(i || (i = (l => l)`
  .ant-skeleton-paragraph li {
    width: 100% !important;
  }
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'Name', function () {
        return _z;
    }), a(d.exports, 'Description', function () {
        return _A;
    }), a(d.exports, 'default', function () {
        return _v;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    let o, p, q, r, s, t, u = v => v;
    var _v = w => {
        const {
                data: {
                    name: x,
                    completions: y
                }
            } = w, z = y.length > 1;
        return (0, f.jsx)(g.default, {
            children: (0, f.jsxs)(_w, {
                children: [
                    (0, f.jsxs)(_x, {
                        children: [
                            (0, f.jsxs)(_y, {
                                children: [
                                    (0, f.jsx)(_z, { children: x }),
                                    (0, f.jsx)(_A, { children: z ? `Completed ${ y.length } times` : `Completed ${ (0, n.default)(y[0].completedAt) }` })
                                ]
                            }),
                            (0, f.jsx)(_B, {
                                children: z ? null : (0, f.jsx)(m.default, {
                                    links: y[0].links || [],
                                    playerName: x
                                })
                            })
                        ]
                    }),
                    z ? (0, f.jsxs)(f.Fragment, {
                        children: [
                            (0, f.jsx)('div', { style: { height: 17 } }),
                            y.map((A, B) => (0, f.jsxs)(h.Fragment, {
                                children: [
                                    (0, f.jsx)(l.default, {
                                        completion: A,
                                        playerName: x
                                    }),
                                    B !== y.length - 1 && (0, f.jsx)('div', { style: { height: 10 } })
                                ]
                            }, `${ w.data._id }-completion-${ B }`))
                        ]
                    }) : null
                ]
            })
        });
    };
    const _w = i.default.div(o || (o = u`
  color: ${ 0 };
`), j.default.Black), _x = i.default.div.attrs({ className: 'flex between vc' })(p || (p = u``)), _y = i.default.div(q || (q = u``)), _z = i.default.div(r || (r = u`
  font-size: 18px;
  font-weight: ${ 0 };
  color: rgba(0, 0, 0, 0.9);
`), k.FontWeights.Bold), _A = i.default.div(s || (s = u`
  font-size: 15px;
  margin-top: 2px;
`)), _B = i.default.div(t || (t = u``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l, m, n, o = p => p;
    var _p = q => {
        const {
            playerName: r,
            completion: s
        } = q;
        return (0, f.jsx)(g.default, {
            bodyStyle: {
                padding: '15px 20px',
                background: j.default.Snow
            },
            style: { overflow: 'hidden' },
            children: (0, f.jsxs)(_q, {
                children: [
                    (0, f.jsxs)(_r, {
                        children: [
                            'Completed ',
                            (0, h.default)(s.completedAt)
                        ]
                    }),
                    (0, f.jsx)(_s, {
                        children: (0, f.jsx)(k.default, {
                            links: s.links || [],
                            playerName: r
                        })
                    })
                ]
            })
        });
    };
    const _q = i.default.div.attrs({ className: 'flex between vc' })(l || (l = o`
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  line-height: 1;
`)), _r = i.default.div(m || (m = o``)), _s = i.default.div(n || (n = o``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => `${ b(f)(h).format('MMMM Do') } at ${ b(f)(h).format('h:mma') }`;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    var _o = p => {
        const [q, r] = l.useState(), {links: s} = p, t = l.useMemo(() => p.links.map(u => u.type === m.MapAssignmentResultLinkType.gameReport ? {
                link: u,
                handler: n.GameReportCompletionLink
            } : null).filter(u => !!u), [s.length]), u = l.useMemo(() => {
                if (!q)
                    return null;
                const v = t.find(w => w.link._id === q);
                return v && v.handler.hiddenRender ? v.handler.hiddenRender({
                    link: v.link,
                    playerName: p.playerName,
                    close: () => r('')
                }) : null;
            }, [
                q,
                t.length
            ]);
        if (!t.length)
            return null;
        if (1 === t.length) {
            var v;
            const w = null === (v = t[0]) || void 0 === v ? void 0 : v.handler;
            return (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(k.default, {
                        title: w.label,
                        children: (0, f.jsx)(h.default, {
                            shape: 'circle',
                            icon: (0, f.jsx)(w.icon, {}),
                            onClick: () => r(t[0].link._id)
                        })
                    }),
                    u
                ]
            });
        }
        const x = (0, f.jsx)(j.default, {
            children: t.map(y => (0, f.jsx)(j.default.Item, {
                onClick: () => r(y.link._id),
                icon: (0, f.jsx)(y.handler.icon, {}),
                children: y.handler.label
            }, y.link._id))
        });
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(i.default, {
                    overlay: x,
                    children: (0, f.jsx)(h.default, {
                        shape: 'circle',
                        icon: (0, f.jsx)(g.default, {})
                    })
                }),
                u
            ]
        });
    };
}), c.register('.....', function (d, e) {
    let f;
    a(d.exports, 'MapAssignmentResultLinkType', function () {
        return f;
    }), (f || (f = {})).gameReport = 'gameReport';
}), c.register('.....', function (d, e) {
    a(d.exports, 'GameReportCompletionLink', function () {
        return _m;
    }), a(d.exports, 'GameReportCompletionModal', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    const _m = {
            icon: h.default,
            label: 'View Report',
            hiddenRender: n => (0, f.jsx)(_n, {
                playerName: n.playerName,
                gameReportId: n.link.resultLinkId,
                participantId: n.link.completionLinkId,
                close: n.close
            })
        }, _n = o => {
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
                bodyStyle: { minHeight: 'max-content' },
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
                    children: (0, f.jsx)(j.default, { paragraph: { rows: 16 } })
                })
            });
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'BarChartOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z' }
                }]
        },
        name: 'bar-chart',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    c('.....');
    var i = c('.....'), j = c('.....'), k = c('.....');
    let l, m, n, o = p => p;
    const p = { marginLeft: 15 }, q = {
            fontSize: 16,
            color: 'rgba(0,0,0,0.9)'
        }, r = 'NO_GROUP';
    var _s = t => (0, f.jsxs)(_t, {
        children: [
            t.groups && t.groups.length ? (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(_u, { children: 'Class' }),
                    (0, f.jsx)(g.default.Group, {
                        value: t.group || r,
                        onChange: u => {
                            u.target.value === r ? t.onGroupChange('') : t.onGroupChange(u.target.value);
                        },
                        className: 'flex-column',
                        style: p,
                        children: (0, f.jsxs)(h.default, {
                            direction: 'vertical',
                            children: [
                                (0, f.jsx)(g.default, {
                                    value: r,
                                    style: q,
                                    children: 'Any Class'
                                }),
                                t.groups.map(u => (0, f.jsx)(g.default, {
                                    value: u._id,
                                    style: q,
                                    children: u.name
                                }, u._id + '-class-option'))
                            ]
                        })
                    }),
                    (0, f.jsx)('div', { style: { height: 40 } })
                ]
            }) : null,
            t.groups && t.groups.length ? (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(_u, { children: 'Status' }),
                    (0, f.jsx)(g.default.Group, {
                        value: t.status,
                        onChange: u => {
                            t.onStatusChange(u.target.value);
                        },
                        style: p,
                        children: (0, f.jsxs)(h.default, {
                            direction: 'vertical',
                            children: [
                                (0, f.jsx)(g.default, {
                                    value: k.Status.completed,
                                    style: q,
                                    children: 'Completed'
                                }),
                                (0, f.jsx)(g.default, {
                                    value: k.Status.inProgress,
                                    style: q,
                                    children: 'In Progress'
                                }),
                                (0, f.jsx)(g.default, {
                                    value: k.Status.notStarted,
                                    style: q,
                                    children: 'Has Not Started'
                                })
                            ]
                        })
                    }),
                    (0, f.jsx)('div', { style: { height: 40 } })
                ]
            }) : null,
            (0, f.jsx)(_u, { children: 'Sort' }),
            (0, f.jsx)(g.default.Group, {
                value: t.sort,
                onChange: u => {
                    t.onSortChange(u.target.value);
                },
                style: p,
                children: (0, f.jsxs)(h.default, {
                    direction: 'vertical',
                    children: [
                        (0, f.jsx)(g.default, {
                            value: k.Sort.firstName,
                            style: q,
                            children: 'First Name'
                        }),
                        (0, f.jsx)(g.default, {
                            value: k.Sort.lastName,
                            style: q,
                            children: 'Last Initial'
                        })
                    ]
                })
            })
        ]
    });
    const _t = i.default.div(l || (l = o`
  width: 220px;
  flex-shrink: 0;
  min-height: calc(100vh - 305px); // height of the top section
  border-right: 1px solid rgb(240, 240, 240);
  padding: 30px 0px 40px 0px;
`)), _u = ({children: v}) => (0, f.jsx)(_v, { children: (0, f.jsx)(_w, { children: v }) }), _v = i.default.div.attrs({ className: 'flex vc' })(m || (m = o`
  margin-bottom: 15px;
`)), _w = i.default.div(n || (n = o`
  font-size: 18px;
  font-weight: ${ 0 };
  line-height: 1;
`), j.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    var _o = p => {
        const [q, r] = g.useState([]), [s, t, u] = (0, h.useBoolean)(!0);
        if (g.useEffect(() => {
                t(), (0, h.request)({
                    url: '/api/map-assignment/in-progress',
                    data: {
                        id: p.id,
                        group: p.group
                    },
                    success: v => r(v),
                    both: u,
                    cacheKey: 'ASSIGNMENT_IN_PROGRESS'
                });
            }, [p.group]), s)
            return (0, f.jsx)(j.default, {});
        if (!q.length)
            return (0, f.jsx)(n.default, { children: p.group ? 'No students in this class are currently working on this assignment' : 'Nobody is currently working on this assignment' });
        const v = p.sort === k.Sort.firstName ? (0, l.default)(q, w => w.name) : (0, m.default)(q, w => w.name);
        return (0, f.jsx)('div', {
            className: 'maxWidth',
            children: v.map((w, x) => (0, f.jsxs)(g.Fragment, {
                children: [
                    (0, f.jsx)(i.default, {
                        name: w.name,
                        percentageComplete: w.percentageComplete
                    }),
                    x !== q.length - 1 && (0, f.jsx)('div', { style: { height: 10 } })
                ]
            }, w._id + '-in-progress'))
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    c('.....');
    var i = c('.....'), j = c('.....');
    var _k = l => (0, f.jsxs)(g.default, {
        style: { color: i.default.Black },
        children: [
            (0, f.jsx)(j.Name, { children: l.name }),
            (0, h.isNil)(l.percentageComplete) ? null : (0, f.jsxs)(j.Description, {
                children: [
                    l.percentageComplete,
                    '% complete'
                ]
            })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    var _o = p => {
        const [q, r] = g.useState([]), [s, t, u] = (0, h.useBoolean)(!0);
        if (g.useEffect(() => {
                t(), (0, h.request)({
                    url: '/api/map-assignment/not-started',
                    data: {
                        id: p.id,
                        group: p.group
                    },
                    success: v => r(v),
                    both: u,
                    cacheKey: 'ASSIGNMENT_NOT_STARTED'
                });
            }, [p.group]), s)
            return (0, f.jsx)(j.default, {});
        if (!q.length)
            return (0, f.jsx)(n.default, { children: 'Looks like everybody has either completed this assignment or is working on it!' });
        const v = p.sort === k.Sort.firstName ? (0, l.default)(q, w => w.name) : (0, m.default)(q, w => w.name);
        return (0, f.jsx)('div', {
            className: 'maxWidth',
            children: v.map((w, x) => (0, f.jsxs)(g.Fragment, {
                children: [
                    (0, f.jsx)(i.default, { name: w.name }),
                    x !== q.length - 1 && (0, f.jsx)('div', { style: { height: 10 } })
                ]
            }, w._id + '-not-started'))
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n, o, p = q => q;
    var _q = r => {
        const {hooks: s} = r.info, [t, u] = g.useState([]);
        return (0, f.jsx)(_r, {
            children: (0, f.jsx)(h.default, {
                hooks: s.template,
                defaultState: s.values,
                readOnly: !0,
                modeType: m.MapModeType.assignment,
                location: i.HookFormLocation.experiencePicker,
                onConnectedResourcesChange: u,
                header: v => v || t.length ? v ? (0, f.jsx)(_s, { children: 'These are the options you set when creating this assignment. They cannot be changed.' }) : null : (0, f.jsx)(_s, { children: 'There is currently no info to show for this assignment.' }),
                footer: v => t.length ? (0, f.jsxs)(f.Fragment, {
                    children: [
                        v > 0 ? (0, f.jsx)(k.default, {
                            style: {
                                marginTop: 30,
                                marginBottom: 30
                            }
                        }) : null,
                        (0, f.jsx)(_s, { children: 'Here are the resources connected to this assignment. They cannot be changed.' }),
                        t.map((w, x) => (0, f.jsxs)(g.Fragment, {
                            children: [
                                (0, f.jsx)(l.default, { connectedResource: w }),
                                x + 1 !== t.length ? (0, f.jsx)('div', { style: { height: 10 } }) : null
                            ]
                        }, `connected-resource-${ w.value }`))
                    ]
                }) : null
            })
        });
    };
    const _r = j.default.div(n || (n = p`
  padding: 35px;
`)), _s = j.default.div(o || (o = p`
  font-size: 16px;
  margin-bottom: 16px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    var _i = j => {
        const {
            connectedResource: {
                value: k,
                type: l
            }
        } = j;
        return l !== g.IHookConnectedResourceType.kit ? null : (0, f.jsx)(h.default, { id: k });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _v;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    let p, q, r, s, t, u = v => v;
    var _v = w => {
        const [x, y, z] = (0, n.useBoolean)(!0), [A, B] = i.useState();
        return i.useEffect(() => {
            (0, n.request)({
                url: `/api/games/basic-info/${ w.id }`,
                success: C => B(C),
                cacheKey: 'SIMPLE_KIT',
                both: z
            });
        }, [w.id]), x ? (0, f.jsx)(g.default, {
            style: { height: 110 },
            bodyStyle: { height: '100%' },
            children: (0, f.jsx)('div', {
                className: 'maxAll flex-center',
                children: (0, f.jsx)(h.default, {})
            })
        }) : (0, f.jsx)(g.default, {
            hoverable: !0,
            children: (0, f.jsx)(m.default, {
                to: A ? `/view/${ A._id }` : void 0,
                children: (0, f.jsxs)(_w, {
                    children: [
                        (null == A ? void 0 : A.gif) ? (0, f.jsx)(o.default, {
                            size: 60,
                            blockModalOpen: !0,
                            image: A.gif
                        }) : (0, f.jsx)(_x, {}),
                        (0, f.jsxs)(_y, {
                            children: [
                                (0, f.jsx)(_z, { children: (null == A ? void 0 : A.title) || 'Deleted Kit' }),
                                (0, f.jsx)(_A, { children: 'Kit' })
                            ]
                        })
                    ]
                })
            })
        });
    };
    const _w = j.default.div.attrs({ className: 'flex vc' })(p || (p = u`
  color: ${ 0 };
`), k.default.Black), _x = j.default.div(q || (q = u`
  height: 60px;
  width: 60px;
  border-radius: 5px;
  background: ${ 0 };
`), k.default.BackgroundPurple), _y = j.default.div(r || (r = u`
  margin-left: 20px;
`)), _z = j.default.div(s || (s = u`
  font-size: 16px;
  font-weight: ${ 0 };
`), l.FontWeights.Bold), _A = j.default.div(t || (t = u`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 3px;
  font-style: italic;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l;
    const m = h.default.img.attrs(n => ({ src: n.image }))(l || (l = (n => n)`
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
                        style: { width: '100%' }
                    })
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'getCloudinaryUrl', function () {
        return _f;
    });
    const _f = g => {
            const h = _g(g);
            return h ? g.includes('/video/upload') ? `https://${ _h }/video/upload/${ h }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ h }` : g;
        }, _g = h => {
            if (!_k.some(i => h.includes(i)))
                return null;
            if (h.includes(_i) && !h.includes(`/${ _j }/`))
                return null;
            const i = h.split('/');
            if (!i || !i.length || i.length < 2)
                return null;
            const j = i[i.length - 2], k = i[i.length - 1];
            return j && k && j.startsWith('v') ? `${ j }/${ k }` : null;
        }, _h = 'media.gimkit.com', _i = 'res.cloudinary.com', _j = 'gimkit-production', _k = [
            _h,
            _i
        ];
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'MapModeType', function () {
        return f;
    }), (g = f || (f = {})).liveGame = 'liveGame', g.assignment = 'assignment';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    let m, n, o = p => p;
    var _p = q => {
        const r = s => s === q.tab, s = t => () => q.onTabChange(t);
        return (0, f.jsxs)(_r, {
            children: [
                q.isPastDue ? null : (0, f.jsx)(_q, {
                    selected: r(k.Tab.share),
                    onClick: s(k.Tab.share),
                    title: 'Share',
                    icon: 'fa-share'
                }),
                (0, f.jsx)(_q, {
                    selected: r(k.Tab.results),
                    onClick: s(k.Tab.results),
                    title: 'Results',
                    icon: 'fa-poll'
                }),
                q.info.hooks.template.hooks.length ? (0, f.jsx)(_q, {
                    selected: r(k.Tab.info),
                    onClick: s(k.Tab.info),
                    title: 'Info',
                    icon: 'fa-info-circle'
                }) : null,
                q.info.links.length ? (0, f.jsx)(f.Fragment, {
                    children: q.info.links.map(t => t.linkType === l.MapAssignmentResultLinkType.gameReport ? (0, f.jsx)(_q, {
                        icon: 'fa-external-link',
                        title: 'Open Report',
                        to: `/report/${ t.linkId }`
                    }, `link-${ t._id }`) : null)
                }) : null
            ]
        });
    };
    const _q = r => (0, f.jsxs)(_s, {
            selected: r.selected,
            onClick: r.onClick,
            to: r.to,
            target: r.to ? '_blank' : void 0,
            children: [
                (0, f.jsx)('i', {
                    className: `far ${ r.icon }`,
                    style: { marginRight: 10 }
                }),
                (0, f.jsx)('span', { children: r.title })
            ]
        }), _r = g.default.div.attrs({ className: 'flex-center wrap' })(m || (m = o`
  padding: 0px 20px;
  margin-bottom: 30px;
  margin-top: 15px;
  column-gap: 12px;
  row-gap: 12px;
`)), _s = (0, g.default)(j.default).attrs({ className: 'flex vc hc' })(n || (n = o`
  color: rgba(0, 0, 0, 0.8);
  font-family: ${ 0 };
  background: ${ 0 };
  border-style: solid;
  border-color: ${ 0 };
  border-width: 2px;
  height: 43px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 5px;
  font-size: 18px;
  transition: border-color 0.3s;
  line-height: 1;
  cursor: pointer;
  &:hover {
    color: #66bb6a;
  }
`), i.Fonts.SFPro, h.default.White, t => t.selected ? '#66bb6a' : h.default.BorderGray);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CopyOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z' }
                }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EditOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z' }
                }]
        },
        name: 'edit',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    }, function (f) {
        return _q = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
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
            const G = (0, j.isPresetColor)(x) || (0, j.isPresetStatusColor)(x), H = Object.assign({ backgroundColor: x && !G ? x : void 0 }, u), I = C('tag', r), [J, K] = (0, m.default)(I), L = b(g)(I, {
                    [`${ I }-${ x }`]: G,
                    [`${ I }-has-color`]: x && !G,
                    [`${ I }-hidden`]: !E,
                    [`${ I }-rtl`]: 'rtl' === D
                }, s, t, K), M = N => {
                    N.stopPropagation(), null == y || y(N), N.defaultPrevented || F(!1);
                }, N = 'function' == typeof B.onClick || v && 'a' === v.type, O = w || null, P = O ? h.createElement(h.Fragment, null, O, h.createElement('span', null, v)) : v, Q = h.createElement('span', Object.assign({}, B, {
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
        }, p = h.forwardRef(o);
    p.CheckableTag = l.default;
    var _q = p;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    }, function (f) {
        return _k = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
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
        const {getPrefixCls: s} = g.useContext(h.ConfigContext), t = s('tag', m), [u, v] = (0, i.default)(t), w = b(f)(t, {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const k = (l, m, n) => {
            const o = (0, h.default)(n);
            return {
                [`${ l.componentCls }-${ m }`]: {
                    color: l[`color${ n }`],
                    background: l[`color${ o }Bg`],
                    borderColor: l[`color${ o }Border`]
                }
            };
        }, l = m => (0, i.genPresetColor)(m, (n, o) => {
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
        }), m = n => {
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
                    [`&${ r }-rtl`]: { direction: 'rtl' },
                    '&, a, a:hover': { color: n.tagDefaultColor },
                    [`${ r }-close-icon`]: {
                        marginInlineStart: t,
                        color: n.colorTextDescription,
                        fontSize: n.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ n.motionDurationMid }`,
                        '&:hover': { color: n.colorTextHeading }
                    },
                    [`&${ r }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ n.iconCls }-close, ${ n.iconCls }-close:hover`]: { color: n.colorTextLightSolid }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ r }-checkable-checked):hover`]: {
                            color: n.colorPrimary,
                            backgroundColor: n.colorFillSecondary
                        },
                        '&:active, &-checked': { color: n.colorTextLightSolid },
                        '&-checked': {
                            backgroundColor: n.colorPrimary,
                            '&:hover': { backgroundColor: n.colorPrimaryHover }
                        },
                        '&:active': { backgroundColor: n.colorPrimaryActive }
                    },
                    '&-hidden': { display: 'none' },
                    [`> ${ n.iconCls } + span, > span + ${ n.iconCls }`]: { marginInlineStart: s }
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
}), c.register('.....', function (d, e) {
    function f(g) {
        if ('string' != typeof g)
            return g;
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CheckOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z' }
                }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z' }
                }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = function (q) {
            (0, l.default)(d, q);
            var r = (0, m.default)(d);
            function s(t) {
                var u;
                (0, j.default)(this, s), (u = r.call(this, t)).handleChange = function (v) {
                    var w = u.props, x = w.disabled, y = w.onChange;
                    x || ('checked' in u.props || u.setState({ checked: v.target.checked }), y && y({
                        target: (0, i.default)((0, i.default)({}, u.props), {}, { checked: v.target.checked }),
                        stopPropagation: function () {
                            v.stopPropagation();
                        },
                        preventDefault: function () {
                            v.preventDefault();
                        },
                        nativeEvent: v.nativeEvent
                    }));
                }, u.saveInput = function (v) {
                    u.input = v;
                };
                var v = 'checked' in t ? t.checked : t.defaultChecked;
                return u.state = { checked: v }, u;
            }
            return (0, k.default)(s, [
                {
                    key: 'focus',
                    value: function () {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function () {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var v, w = this.props, x = w.prefixCls, y = w.className, z = w.style, A = w.name, B = w.id, C = w.type, D = w.disabled, E = w.readOnly, F = w.tabIndex, G = w.onClick, H = w.onFocus, I = w.onBlur, J = w.onKeyDown, K = w.onKeyPress, L = w.onKeyUp, M = w.autoFocus, N = w.value, O = w.required, P = (0, h.default)(w, [
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
                            ]), Q = Object.keys(P).reduce(function (R, S) {
                                return 'aria-' !== S.substr(0, 5) && 'data-' !== S.substr(0, 5) && 'role' !== S || (R[S] = P[S]), R;
                            }, {}), R = this.state.checked, S = u(o)(x, y, (v = {}, (0, g.default)(v, ''.concat(x, '-checked'), R), (0, g.default)(v, ''.concat(x, '-disabled'), D), v));
                        return u(n).createElement('span', {
                            className: S,
                            style: z
                        }, u(n).createElement('input', (0, f.default)({
                            name: A,
                            id: B,
                            type: C,
                            required: O,
                            readOnly: E,
                            disabled: D,
                            tabIndex: F,
                            className: ''.concat(x, '-input'),
                            checked: !!R,
                            onClick: G,
                            onFocus: H,
                            onBlur: I,
                            onKeyUp: L,
                            onKeyDown: J,
                            onKeyPress: K,
                            onChange: this.handleChange,
                            autoFocus: M,
                            ref: this.saveInput,
                            value: N
                        }, Q)), u(n).createElement('span', { className: ''.concat(x, '-inner') }));
                    }
                }
            ], [{
                    key: 'getDerivedStateFromProps',
                    value: function (v, w) {
                        return 'checked' in v ? (0, i.default)((0, i.default)({}, w), {}, { checked: v.checked }) : null;
                    }
                }]), s;
        }(n.Component);
    p.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function () {
        },
        onBlur: function () {
        },
        onChange: function () {
        },
        onKeyDown: function () {
        },
        onKeyPress: function () {
        },
        onKeyUp: function () {
        }
    };
    var _q = p;
}), c.register('.....', function (d, e) {
    function f() {
        return f = Object.assign || function (g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (_g[j] = h[j]);
        }
        return _g;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {}, l = Object.keys(g);
        for (f = 0; f < l.length; f++)
            i = l[f], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function (l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }
    function _j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? g(Object(m), !0).forEach(function (n) {
                (0, f.default)(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : g(Object(m)).forEach(function (n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(g, f.key, f);
        }
    }
    function i(j, k, l) {
        return k && f(j.prototype, k), l && f(j, l), j;
    }
    a(d.exports, 'default', function () {
        return i;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if ('function' != typeof i && null !== i)
            throw new TypeError('Super expression must either be null or a function');
        h.prototype = Object.create(i && i.prototype, {
            constructor: {
                value: h,
                writable: !0,
                configurable: !0
            }
        }), i && (0, f.default)(h, i);
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function (i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j) {
        var k = (0, g.default)();
        return function () {
            var l, m = (0, f.default)(j);
            if (k) {
                var n = (0, f.default)(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return (0, h.default)(this, l);
        };
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function (h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
            })), !0;
        } catch (a) {
            return !1;
        }
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function (h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function (h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const h = g.lazy(() => c('.....'));
    var _i = j => (0, f.jsx)(g.Suspense, {
        fallback: j.fallback || null,
        children: (0, f.jsx)(h, { latex: j.latex })
    });
}), c.register('.....', function (d, e) {
    d.exports = Promise.all([
        import('./' + c('.....').resolve('emcKB')),
        import('./' + c('.....').resolve('5OCdz'))
    ]).then(() => c('.....'));
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'HookType', function () {
        return f;
    }), (g = f || (f = {})).selectBox = 'selectBox', g.kit = 'kit', g.number = 'number';
}), c.register('.....', function (d, e) {
    let f;
    var g;
    let h;
    var i;
    a(d.exports, 'LocalStorageNames', function () {
        return h;
    }), (g = f || (f = {})).time = 'time', g.target = 'target', g.race = 'race', g.allIn = 'allIn', (i = h || (h = {})).language = 'gimkit-3.0-game-language', i.currency = 'gimkit-game-currency', i.music = 'gimkit-music-track', i.allowGoogleTranslate = 'gimkit-google-translate-allowed', i.editorDefaultLanguage = 'gimkit-editor-v4-default-language', i.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', i.editorDefaultSubject = 'gimkit-editor-v4-default-subject', i.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', i.hookSavedOptions = 'gimkit-hook-saved-options';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownloadOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z' }
                }]
        },
        name: 'download',
        theme: 'outlined'
    };
});