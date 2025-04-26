function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, x) {
    Object.defineProperty(a, b, {
        get: c,
        set: x,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('SZZAz', function(x, y) {
    var d;
    d = x.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(x.exports, 'default', function() {
        return u;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('H+EBG'),
        h = c('EKslC'),
        i = c('h99Nu'),
        j = c('mZ5QQ'),
        k = c('YimJ0'),
        l = c('fgVTE0'),
        m = c('lmfrI'),
        n = c('PjB0f'),
        o = c('0wLl2'),
        p = c('Gv9/o'),
        q = c('2MCaL');
    p = c('Gv9/o');
    let r, s, t = a => a;
    var u = () => {
        const {
            isLoading: v,
            error: w,
            data: x
        } = (0, g.default)(), y = f.useMemo(() => {
            const z = a(q)();
            return 0 !== z.day() && 6 !== z.day() && (z.hour() >= p.START_HOUR && z.hour() < p.END_HOUR);
        }, []);
        return (0, n.isStudent)() && y ? (0, e.jsx)(k.Centered, {
            style: {
                padding: 35
            },
            children: (0, e.jsx)(p.SchoolHours, {})
        }) : w ? (0, e.jsx)('div', {
            className: 'flex-center maxWidth',
            style: {
                marginTop: 50
            },
            children: (0, e.jsx)('div', {
                className: 'light-shadow',
                style: {
                    background: 'rgba(255,255,255,0.1)',
                    padding: 35,
                    borderRadius: 12,
                    maxWidth: '90%'
                },
                children: 'There was an error loading Discovery. Please refresh and try again.'
            })
        }) : v ? (0, e.jsx)(k.Centered, {
            style: {
                marginTop: 100
            },
            children: (0, e.jsx)(l.default, {
                style: {
                    color: m.default.White
                }
            })
        }) : (0, e.jsxs)(v, {
            children: [
                (0, e.jsx)(n.Title, {
                    title: `${ o.COMPANY_NAME } Creative | Discovery`,
                    override: !0
                }),
                (0, e.jsx)(w, {
                    children: (0, e.jsx)(h.default, {
                        lists: null != x ? x : []
                    })
                })
            ]
        });
    };
    const v = i.default.div.attrs({
            className: 'maxWidth flex hc'
        })(r || (r = t`
  padding: 35px 0px;
`)),
        w = i.default.div(s || (s = t`
  width: ${ 0 };
  max-width: ${ 0 };
`), j.CreativeContentWidth.width, j.CreativeContentWidth.maxWidth);
}), c.register('H+EBG', function(a, s) {
    b(a.exports, 'default', function() {
        return g;
    });
    var d = c('IsAdf'),
        e = c('PjB0f');
    const f = ['creative-discovery'];
    var g = () => (0, d.useQuery)(f, () => (0, e.requestAsPromise)({
        url: '/api/created-map/listing/discovery'
    }), {
        refetchOnMount: !1,
        refetchOnWindowFocus: !1
    });
}), c.register('EKslC', function(a, s) {
    b(a.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('c6x8w'),
        h = c('5nJMd26'),
        i = c('KlhV/'),
        j = c('EqyF2'),
        k = c('meju8'),
        l = c('heX9A'),
        m = c('S/jX4'),
        n = c('KzqIz'),
        o = c('QeVZO');
    var p = a => {
        const [q] = (0, n.useSearchParams)(), [r, s] = e.useState(q.get('q')), {
            data: t,
            isLoading: u
        } = (0, o.useDiscoverySearch)(r), v = !(!r || !u);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(f.default, {
                    theme: {
                        algorithm: i.default.darkAlgorithm
                    },
                    children: (0, d.jsx)(g.default.Search, {
                        onSearch: a => {
                            const w = new URL(window.location.href);
                            w.searchParams.set('q', a), window.history.pushState({}, '', w), s(a);
                        },
                        loading: v,
                        placeholder: 'Search for maps...',
                        size: 'large',
                        style: {
                            marginBottom: 20
                        }
                    })
                }),
                !v && r ? (0, d.jsx)('div', {
                    className: 'maxWidth',
                    style: {
                        marginBottom: 20
                    },
                    children: (0, d.jsx)(l.default, {
                        className: 'maxWidth',
                        children: t.length ? (0, d.jsx)(h.default, {
                            direction: 'vertical',
                            size: 14,
                            className: 'maxWidth',
                            children: t.map(a => (0, d.jsx)(k.default, {
                                listing: a
                            }, a._id + '-search'))
                        }) : (0, d.jsxs)('div', {
                            style: {
                                opacity: 0.9,
                                fontStyle: 'italic'
                            },
                            children: [
                                (0, d.jsx)('span', {
                                    style: {
                                        color: m.default.Yellow
                                    },
                                    children: 'No results found.'
                                }),
                                ' ',
                                'Try searching for something else!'
                            ]
                        })
                    })
                }) : null,
                (0, d.jsx)(h.default, {
                    className: 'maxWidth',
                    direction: 'vertical',
                    size: 20,
                    children: a.lists.map(a => (0, d.jsx)(j.default, {
                        list: a
                    }, a.name + '-list'))
                })
            ]
        });
    };
}), c.register('EqyF2', function(a, l) {
    b(a.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ'),
        e = c('5nJMd26'),
        f = c('meju8'),
        g = c('heX9A'),
        h = c('/naIW');
    var i = a => {
        const {
            name: j,
            description: k,
            items: l
        } = a.list;
        return (0, d.jsxs)(g.default, {
            children: [
                (0, d.jsx)(h.Title, {
                    children: j
                }),
                (0, d.jsx)(h.Description, {
                    children: k
                }),
                (0, d.jsx)(e.default, {
                    style: {
                        marginTop: 18
                    },
                    direction: 'vertical',
                    className: 'maxWidth',
                    size: 14,
                    children: l.map(a => (0, d.jsx)(f.default, {
                        listing: a
                    }, a._id))
                })
            ]
        });
    };
}), c.register('meju8', function(a, s) {
    b(a.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('iYEuk12'),
        g = c('lmfrI'),
        h = c('5nJMd26'),
        i = c('gSUVO'),
        j = c('2WDH6');
    let k, l, m, n, o = a => a;
    var p = a => {
        const {
            _id: q,
            title: r,
            image: s,
            tags: t
        } = a.listing;
        return (0, d.jsx)('div', {
            className: 'maxWidth',
            children: (0, d.jsx)(f.default, {
                className: 'maxWidth',
                style: {
                    color: g.default.White
                },
                to: `/creative/map/${ q }`,
                children: (0, d.jsx)(q, {
                    children: (0, d.jsxs)(h.default, {
                        direction: 'horizontal',
                        size: 20,
                        align: 'center',
                        children: [
                            (0, d.jsx)(r, {
                                style: {
                                    backgroundImage: `url(${ (0, j.getCloudinaryUrl)(s) })`
                                }
                            }),
                            (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsx)(s, {
                                        children: r
                                    }),
                                    t.length ? (0, d.jsx)(h.default, {
                                        direction: 'horizontal',
                                        size: 6,
                                        wrap: !0,
                                        style: {
                                            marginTop: 6
                                        },
                                        children: t.map(a => (0, d.jsx)(t, {
                                            children: a
                                        }, a + q))
                                    }) : null
                                ]
                            })
                        ]
                    })
                })
            })
        });
    };
    const q = e.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = o`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  line-height: 0;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`)),
        r = e.default.div(l || (l = o`
  width: ${ 0 }px;
  height: ${ 0 }px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-size: cover;
`), 130, 73.125),
        s = e.default.div(m || (m = o`
  font-family: ${ 0 };
  font-size: 16px;
  line-height: 1;
  margin-top: 2px;
  text-transform: uppercase;
`), i.Fonts.FugazOne),
        t = e.default.div(n || (n = o`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 50px;
  font-style: italic;
  font-weight: ${ 0 };
`), i.FontWeights.Bold);
}), c.register('2WDH6', function(a, c) {
    b(a.exports, 'getCloudinaryUrl', function() {
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
}), c.register('QeVZO', function(a, i) {
    b(a.exports, 'useDiscoverySearch', function() {
        return f;
    });
    var d = c('IsAdf'),
        e = c('PjB0f');
    const f = a => (0, d.useQuery)({
        queryKey: [
            'useDiscoverySearch',
            {
                searchQuery: a
            }
        ],
        enabled: !!a,
        queryFn: () => (0, e.requestAsPromise)({
            url: '/api/created-map/listing/discovery/search',
            data: {
                query: a
            }
        })
    });
}), c.register('Gv9/o', function(a, i) {
    b(a.exports, 'START_HOUR', function() {
        return m;
    }), b(a.exports, 'END_HOUR', function() {
        return n;
    }), b(a.exports, 'SchoolHours', function() {
        return o;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('heX9A'),
        f = c('h99Nu'),
        g = c('gSUVO'),
        h = c('S/jX4');
    let i, j, k, l = a => a;
    const m = 8,
        n = 16,
        o = () => (0, d.jsxs)(p, {
            children: [
                (0, d.jsx)('img', {
                    src: '/client/img/creative/banner.png',
                    style: {
                        height: 200
                    }
                }),
                (0, d.jsx)(q, {
                    children: 'Discovery Is Closed During School Hours'
                }),
                (0, d.jsxs)(r, {
                    children: [
                        'Check back in after ',
                        (0, d.jsx)('b', {
                            style: {
                                color: h.default.Yellow
                            },
                            children: '4pm'
                        }),
                        ' to view & play maps made by the Gimkit Creative community!'
                    ]
                })
            ]
        }),
        p = (0, f.default)(e.default).attrs({
            className: 'flex-column flex-center'
        })(i || (i = l`
  max-width: 700px;
  font-family: ${ 0 };
  overflow: hidden;
`), g.Fonts.FugazOne),
        q = f.default.div(j || (j = l`
  font-size: 28px;
  text-transform: uppercase;
  margin-top: 15px;
`)),
        r = f.default.div(k || (k = l`
  font-family: ${ 0 };
  opacity: 0.9;
  font-size: 16px;
  margin-top: 3px;
`), g.Fonts.SFPro);
});