function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('s6EBb', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _v(b.exports, 'default', function() {
        return _u;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('zavMO'),
        h = a('6loCe'),
        i = a('Axq+p'),
        j = a('MvIHy'),
        k = a('0HHAH'),
        l = a('FpbFp'),
        m = a('sHRDd'),
        n = a('PMl60'),
        o = a('hHkFq'),
        p = a('r9FUN'),
        q = a('ECzOP');
    p = a('r9FUN');
    let r, s, t = _b => _b;
    var _u = () => {
        const {
            isLoading: _v,
            error: w,
            data: x
        } = (0, g.default)(), y = f.useMemo(() => {
            const z = _b(q)();
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
        }) : _v ? (0, e.jsx)(k.Centered, {
            style: {
                marginTop: 100
            },
            children: (0, e.jsx)(l.default, {
                style: {
                    color: m.default.White
                }
            })
        }) : (0, e.jsxs)(_v, {
            children: [
                (0, e.jsx)(n.Title, {
                    title: `${ o.COMPANY_NAME } Creative | Discovery`,
                    override: !0
                }),
                (0, e.jsx)(_w, {
                    children: (0, e.jsx)(h.default, {
                        lists: null != x ? x : []
                    })
                })
            ]
        });
    };
    const _v = i.default.div.attrs({
            className: 'maxWidth flex hc'
        })(r || (r = t`
  padding: 35px 0px;
`)),
        _w = i.default.div(s || (s = t`
  width: ${ 0 };
  max-width: ${ 0 };
`), j.CreativeContentWidth.width, j.CreativeContentWidth.maxWidth);
}), a.register('zavMO', function(_b, c) {
    _q(_b.exports, 'default', function() {
        return _g;
    });
    var d = a('UapK50'),
        e = a('PMl60');
    const f = ['creative-discovery'];
    var _g = () => (0, d.useQuery)(f, () => (0, e.requestAsPromise)({
        url: '/api/created-map/listing/discovery'
    }), {
        refetchOnMount: !1,
        refetchOnWindowFocus: !1
    });
}), a.register('6loCe', function(b, c) {
    _q(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('ewwAh'),
        h = a('cvto726'),
        i = a('cH8qQ'),
        j = a('efbqi'),
        k = a('ARIaf'),
        l = a('E+Wfz'),
        m = a('vShe/'),
        n = a('wYGc3'),
        o = a('5rZak');
    var _p = b => {
        const [_q] = (0, n.useSearchParams)(), [r, s] = e.useState(_q.get('q')), {
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
                        onSearch: b => {
                            const w = new URL(window.location.href);
                            w.searchParams.set('q', b), window.history.pushState({}, '', w), s(b);
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
                            children: t.map(b => (0, d.jsx)(k.default, {
                                listing: b
                            }, b._id + '-search'))
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
                    children: b.lists.map(b => (0, d.jsx)(j.default, {
                        list: b
                    }, b.name + '-list'))
                })
            ]
        });
    };
}), a.register('efbqi', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('cvto726'),
        f = a('ARIaf'),
        g = a('E+Wfz'),
        h = a('JM8XB');
    var _i = b => {
        const {
            name: _j,
            description: k,
            items: l
        } = b.list;
        return (0, d.jsxs)(g.default, {
            children: [
                (0, d.jsx)(h.Title, {
                    children: _j
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
                    children: l.map(b => (0, d.jsx)(f.default, {
                        listing: b
                    }, b._id))
                })
            ]
        });
    };
}), a.register('ARIaf', function(b, c) {
    _q(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('2HvvA11'),
        g = a('sHRDd'),
        h = a('cvto726'),
        i = a('b5kvC'),
        j = a('x8CoD');
    let k, l, m, n, o = b => b;
    var _p = b => {
        const {
            _id: _q,
            title: r,
            image: s,
            tags: t
        } = b.listing;
        return (0, d.jsx)('div', {
            className: 'maxWidth',
            children: (0, d.jsx)(f.default, {
                className: 'maxWidth',
                style: {
                    color: g.default.White
                },
                to: `/creative/map/${ _q }`,
                children: (0, d.jsx)(_q, {
                    children: (0, d.jsxs)(h.default, {
                        direction: 'horizontal',
                        size: 20,
                        align: 'center',
                        children: [
                            (0, d.jsx)(_r, {
                                style: {
                                    backgroundImage: `url(${ (0, j.getCloudinaryUrl)(s) })`
                                }
                            }),
                            (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsx)(_s, {
                                        children: r
                                    }),
                                    t.length ? (0, d.jsx)(h.default, {
                                        direction: 'horizontal',
                                        size: 6,
                                        wrap: !0,
                                        style: {
                                            marginTop: 6
                                        },
                                        children: t.map(b => (0, d.jsx)(_t, {
                                            children: b
                                        }, b + _q))
                                    }) : null
                                ]
                            })
                        ]
                    })
                })
            })
        });
    };
    const _q = e.default.div.attrs({
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
        _r = e.default.div(l || (l = o`
  width: ${ 0 }px;
  height: ${ 0 }px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-size: cover;
`), 130, 73.125),
        _s = e.default.div(m || (m = o`
  font-family: ${ 0 };
  font-size: 16px;
  line-height: 1;
  margin-top: 2px;
  text-transform: uppercase;
`), i.Fonts.FugazOne),
        _t = e.default.div(n || (n = o`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 50px;
  font-style: italic;
  font-weight: ${ 0 };
`), i.FontWeights.Bold);
}), a.register('x8CoD', function(b, c) {
    _e(b.exports, 'getCloudinaryUrl', function() {
        return _d;
    });
    const _d = b => {
            const _e = _e(b);
            return _e ? b.includes('/video/upload') ? `https://${ _f }/video/upload/${ _e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ _e }` : b;
        },
        _e = b => {
            if (!_i.some(_f => b.includes(_f)))
                return null;
            if (b.includes(_g) && !b.includes(`/${ _h }/`))
                return null;
            const _f = b.split('/');
            if (!_f || !_f.length || _f.length < 2)
                return null;
            const g = _f[_f.length - 2],
                h = _f[_f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        _f = 'media.gimkit.com',
        _g = 'res.cloudinary.com',
        _h = 'gimkit-production',
        _i = [
            _f,
            _g
        ];
}), a.register('5rZak', function(b, c) {
    t(b.exports, 'useDiscoverySearch', function() {
        return _f;
    });
    var d = a('UapK50'),
        e = a('PMl60');
    const _f = b => (0, d.useQuery)({
        queryKey: [
            'useDiscoverySearch',
            {
                searchQuery: b
            }
        ],
        enabled: !!b,
        queryFn: () => (0, e.requestAsPromise)({
            url: '/api/created-map/listing/discovery/search',
            data: {
                query: b
            }
        })
    });
}), a.register('r9FUN', function(b, c) {
    t(b.exports, 'START_HOUR', function() {
        return _m;
    }), t(b.exports, 'END_HOUR', function() {
        return _n;
    }), t(b.exports, 'SchoolHours', function() {
        return _o;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('E+Wfz'),
        f = a('Axq+p'),
        g = a('b5kvC'),
        h = a('vShe/');
    let i, j, k, l = b => b;
    const _m = 8,
        _n = 16,
        _o = () => (0, d.jsxs)(_p, {
            children: [
                (0, d.jsx)('img', {
                    src: '/client/img/creative/banner.png',
                    style: {
                        height: 200
                    }
                }),
                (0, d.jsx)(_q, {
                    children: 'Discovery Is Closed During School Hours'
                }),
                (0, d.jsxs)(_r, {
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
        _p = (0, f.default)(e.default).attrs({
            className: 'flex-column flex-center'
        })(i || (i = l`
  max-width: 700px;
  font-family: ${ 0 };
  overflow: hidden;
`), g.Fonts.FugazOne),
        _q = f.default.div(j || (j = l`
  font-size: 28px;
  text-transform: uppercase;
  margin-top: 15px;
`)),
        _r = f.default.div(k || (k = l`
  font-family: ${ 0 };
  opacity: 0.9;
  font-size: 16px;
  margin-top: 3px;
`), g.Fonts.SFPro);
});