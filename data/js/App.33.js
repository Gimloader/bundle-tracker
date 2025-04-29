function a(b) {
    return b && b.__esModule ? b.default : b;
}

function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('62MCK', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return _w;
    });
    var g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('eNYTb'),
        j = c('VEpXm'),
        k = c('u4s09'),
        l = c('ngmu/'),
        m = c('MgONH'),
        n = c('JNGrh0'),
        o = c('8KqQ+'),
        p = c('quE27'),
        q = c('jw1ib'),
        r = c('z15iB'),
        s = c('Tzf4u');
    r = c('z15iB');
    let t, u, v = a => a;
    var _w = () => {
        const {
            isLoading: x,
            error: y,
            data: z
        } = (0, i.default)(), A = h.useMemo(() => {
            const B = a(s)();
            return 0 !== B.day() && 6 !== B.day() && (B.hour() >= r.START_HOUR && B.hour() < r.END_HOUR);
        }, []);
        return (0, p.isStudent)() && A ? (0, g.jsx)(m.Centered, {
            style: {
                padding: 35
            },
            children: (0, g.jsx)(r.SchoolHours, {})
        }) : y ? (0, g.jsx)('div', {
            className: 'flex-center maxWidth',
            style: {
                marginTop: 50
            },
            children: (0, g.jsx)('div', {
                className: 'light-shadow',
                style: {
                    background: 'rgba(255,255,255,0.1)',
                    padding: 35,
                    borderRadius: 12,
                    maxWidth: '90%'
                },
                children: 'There was an error loading Discovery. Please refresh and try again.'
            })
        }) : x ? (0, g.jsx)(m.Centered, {
            style: {
                marginTop: 100
            },
            children: (0, g.jsx)(n.default, {
                style: {
                    color: o.default.White
                }
            })
        }) : (0, g.jsxs)(_x, {
            children: [
                (0, g.jsx)(p.Title, {
                    title: `${ q.COMPANY_NAME } Creative | Discovery`,
                    override: !0
                }),
                (0, g.jsx)(_y, {
                    children: (0, g.jsx)(j.default, {
                        lists: null != z ? z : []
                    })
                })
            ]
        });
    };
    const _x = k.default.div.attrs({
            className: 'maxWidth flex hc'
        })(t || (t = v`
  padding: 35px 0px;
`)),
        _y = k.default.div(u || (u = v`
  width: ${ 0 };
  max-width: ${ 0 };
`), l.CreativeContentWidth.width, l.CreativeContentWidth.maxWidth);
}), c.register('eNYTb', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('GmO9j'),
        g = c('quE27');
    const h = ['creative-discovery'];
    var _i = () => (0, f.useQuery)(h, () => (0, g.requestAsPromise)({
        url: '/api/created-map/listing/discovery'
    }), {
        refetchOnMount: !1,
        refetchOnWindowFocus: !1
    });
}), c.register('VEpXm', function(d, e) {
    b(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('R2nG3'),
        i = c('aevdF'),
        j = c('E2AMI26'),
        k = c('NmQt6'),
        l = c('J201A'),
        m = c('g6QeD'),
        n = c('4DY7h'),
        o = c('HOIhZ'),
        p = c('+cTfn'),
        q = c('MlQ/v');
    var _r = d => {
        const [s] = (0, p.useSearchParams)(), [t, u] = g.useState(s.get('q')), {
            data: v,
            isLoading: w
        } = (0, q.useDiscoverySearch)(t), x = !(!t || !w);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(h.default, {
                    theme: {
                        algorithm: k.default.darkAlgorithm
                    },
                    children: (0, f.jsx)(i.default.Search, {
                        onSearch: d => {
                            const y = new URL(window.location.href);
                            y.searchParams.set('q', d), window.history.pushState({}, '', y), u(d);
                        },
                        loading: x,
                        placeholder: 'Search for maps...',
                        size: 'large',
                        style: {
                            marginBottom: 20
                        }
                    })
                }),
                !x && t ? (0, f.jsx)('div', {
                    className: 'maxWidth',
                    style: {
                        marginBottom: 20
                    },
                    children: (0, f.jsx)(n.default, {
                        className: 'maxWidth',
                        children: v.length ? (0, f.jsx)(j.default, {
                            direction: 'vertical',
                            size: 14,
                            className: 'maxWidth',
                            children: v.map(d => (0, f.jsx)(m.default, {
                                listing: d
                            }, d._id + '-search'))
                        }) : (0, f.jsxs)('div', {
                            style: {
                                opacity: 0.9,
                                fontStyle: 'italic'
                            },
                            children: [
                                (0, f.jsx)('span', {
                                    style: {
                                        color: o.default.Yellow
                                    },
                                    children: 'No results found.'
                                }),
                                ' ',
                                'Try searching for something else!'
                            ]
                        })
                    })
                }) : null,
                (0, f.jsx)(j.default, {
                    className: 'maxWidth',
                    direction: 'vertical',
                    size: 20,
                    children: d.lists.map(d => (0, f.jsx)(l.default, {
                        list: d
                    }, d.name + '-list'))
                })
            ]
        });
    };
}), c.register('J201A', function(d, e) {
    b(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn'),
        g = c('E2AMI26'),
        h = c('g6QeD'),
        i = c('4DY7h'),
        j = c('jQPD7');
    var _k = d => {
        const {
            name: l,
            description: m,
            items: n
        } = d.list;
        return (0, f.jsxs)(i.default, {
            children: [
                (0, f.jsx)(j.Title, {
                    children: l
                }),
                (0, f.jsx)(j.Description, {
                    children: m
                }),
                (0, f.jsx)(g.default, {
                    style: {
                        marginTop: 18
                    },
                    direction: 'vertical',
                    className: 'maxWidth',
                    size: 14,
                    children: n.map(d => (0, f.jsx)(h.default, {
                        listing: d
                    }, d._id))
                })
            ]
        });
    };
}), c.register('g6QeD', function(d, e) {
    b(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('FB7HT26'),
        i = c('8KqQ+'),
        j = c('E2AMI26'),
        k = c('Eh2Wh'),
        l = c('HloXO');
    let m, n, o, p, q = d => d;
    var _r = d => {
        const {
            _id: s,
            title: t,
            image: u,
            tags: v
        } = d.listing;
        return (0, f.jsx)('div', {
            className: 'maxWidth',
            children: (0, f.jsx)(h.default, {
                className: 'maxWidth',
                style: {
                    color: i.default.White
                },
                to: `/creative/map/${ s }`,
                children: (0, f.jsx)(_s, {
                    children: (0, f.jsxs)(j.default, {
                        direction: 'horizontal',
                        size: 20,
                        align: 'center',
                        children: [
                            (0, f.jsx)(_t, {
                                style: {
                                    backgroundImage: `url(${ (0, l.getCloudinaryUrl)(u) })`
                                }
                            }),
                            (0, f.jsxs)('div', {
                                children: [
                                    (0, f.jsx)(_u, {
                                        children: t
                                    }),
                                    v.length ? (0, f.jsx)(j.default, {
                                        direction: 'horizontal',
                                        size: 6,
                                        wrap: !0,
                                        style: {
                                            marginTop: 6
                                        },
                                        children: v.map(d => (0, f.jsx)(_v, {
                                            children: d
                                        }, d + s))
                                    }) : null
                                ]
                            })
                        ]
                    })
                })
            })
        });
    };
    const _s = g.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = q`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  line-height: 0;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`)),
        _t = g.default.div(n || (n = q`
  width: ${ 0 }px;
  height: ${ 0 }px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-size: cover;
`), 130, 73.125),
        _u = g.default.div(o || (o = q`
  font-family: ${ 0 };
  font-size: 16px;
  line-height: 1;
  margin-top: 2px;
  text-transform: uppercase;
`), k.Fonts.FugazOne),
        _v = g.default.div(p || (p = q`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 50px;
  font-style: italic;
  font-weight: ${ 0 };
`), k.FontWeights.Bold);
}), c.register('HloXO', function(d, e) {
    b(d.exports, 'getCloudinaryUrl', function() {
        return _f;
    });
    const _f = d => {
            const g = _g(d);
            return g ? d.includes('/video/upload') ? `https://${ _h }/video/upload/${ g }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ g }` : d;
        },
        _g = d => {
            if (!_k.some(b => d.includes(b)))
                return null;
            if (d.includes(_i) && !d.includes(`/${ _j }/`))
                return null;
            const h = d.split('/');
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
}), c.register('MlQ/v', function(d, e) {
    b(d.exports, 'useDiscoverySearch', function() {
        return _h;
    });
    var f = c('GmO9j'),
        g = c('quE27');
    const _h = d => (0, f.useQuery)({
        queryKey: [
            'useDiscoverySearch',
            {
                searchQuery: d
            }
        ],
        enabled: !!d,
        queryFn: () => (0, g.requestAsPromise)({
            url: '/api/created-map/listing/discovery/search',
            data: {
                query: d
            }
        })
    });
}), c.register('z15iB', function(d, e) {
    b(d.exports, 'START_HOUR', function() {
        return _o;
    }), b(d.exports, 'END_HOUR', function() {
        return _p;
    }), b(d.exports, 'SchoolHours', function() {
        return _q;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('4DY7h'),
        h = c('u4s09'),
        i = c('Eh2Wh'),
        j = c('HOIhZ');
    let k, l, m, n = d => d;
    const _o = 8,
        _p = 16,
        _q = () => (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)('img', {
                    src: '/client/img/creative/banner.png',
                    style: {
                        height: 200
                    }
                }),
                (0, f.jsx)(_s, {
                    children: 'Discovery Is Closed During School Hours'
                }),
                (0, f.jsxs)(_t, {
                    children: [
                        'Check back in after ',
                        (0, f.jsx)('b', {
                            style: {
                                color: j.default.Yellow
                            },
                            children: '4pm'
                        }),
                        ' to view & play maps made by the Gimkit Creative community!'
                    ]
                })
            ]
        }),
        _r = (0, h.default)(g.default).attrs({
            className: 'flex-column flex-center'
        })(k || (k = n`
  max-width: 700px;
  font-family: ${ 0 };
  overflow: hidden;
`), i.Fonts.FugazOne),
        _s = h.default.div(l || (l = n`
  font-size: 28px;
  text-transform: uppercase;
  margin-top: 15px;
`)),
        _t = h.default.div(m || (m = n`
  font-family: ${ 0 };
  opacity: 0.9;
  font-size: 16px;
  margin-top: 3px;
`), i.Fonts.SFPro);
});