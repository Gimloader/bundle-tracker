function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('9xzx0', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _p(b.exports, 'default', function() {
        return _o;
    });
    var e = a('0hzx+'),
        f = a('70AkF'),
        g = a('zVNit'),
        h = a('Axq+p'),
        i = a('rdBwA'),
        j = a('FpbFp'),
        k = a('0HHAH'),
        l = a('9R7cy'),
        m = a('vShe/');
    let n;
    var _o = () => {
        var _p;
        const {
            id: q
        } = (0, f.useParams)(), {
            data: r,
            isLoading: s,
            error: t
        } = (0, g.default)(q);
        return s ? (0, e.jsx)(_p, {
            children: (0, e.jsx)(j.default, {
                style: {
                    color: m.default.White,
                    marginTop: 50
                }
            })
        }) : t ? (0, e.jsx)(_p, {
            children: (0, e.jsxs)(k.CenteredColumn, {
                className: 'light-shadow',
                style: {
                    background: 'rgba(255,255,255,0.1)',
                    padding: 30,
                    borderRadius: 8,
                    width: '90%',
                    marginTop: 25,
                    maxWidth: 500
                },
                children: [
                    (0, e.jsx)('div', {
                        children: (0, e.jsx)(l.default, {
                            name: 'fas fa-exclamation-triangle',
                            style: {
                                color: m.default.Yellow,
                                fontSize: 42,
                                marginBottom: 20
                            }
                        })
                    }),
                    (0, e.jsx)('div', {
                        style: {
                            fontSize: 16
                        },
                        children: (null == t || null === (_p = t.message) || void 0 === _p ? void 0 : _p.text) || 'There was an error. Please refresh and try again.'
                    })
                ]
            })
        }) : (0, e.jsx)(_p, {
            children: r ? (0, e.jsx)(i.default, {
                response: r
            }) : null
        });
    };
    const _p = h.default.div.attrs({
        className: 'maxWidth flex-center'
    })(n || (n = (e => e)`
  padding: 35px 0px;
`));
}), a.register('zVNit', function(b, c) {
    e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('UapK50'),
        e = a('PMl60');
    const f = ['creative-map-listing'];
    var _g = e => (0, d.useQuery)({
        queryKey: [
            f,
            e
        ],
        retry: !1,
        queryFn: () => (0, e.requestAsPromise)({
            url: `/api/created-map/listing/info/${ e }`
        })
    });
}), a.register('rdBwA', function(b, c) {
    e(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('BXKZi0'),
        h = a('Na/F6'),
        i = a('1P5ls'),
        j = a('fmVdR'),
        k = a('cH8qQ'),
        l = a('KcMEX'),
        m = a('PMl60'),
        n = a('hHkFq'),
        o = a('x8CoD');
    let p, q, r, s = e => e;
    var _t = e => {
        const u = e.useRef(null),
            [v] = (0, g.default)(u),
            w = Math.min(500, 0.9 * v),
            x = w * (9 / 16);
        return (0, d.jsxs)(_u, {
            ref: u,
            children: [
                (0, d.jsx)(_v, {
                    style: {
                        width: w,
                        height: x,
                        backgroundImage: `url(${ (0, o.getCloudinaryUrl)(e.response.image) })`
                    }
                }),
                (0, d.jsxs)(_w, {
                    style: {
                        marginTop: x / 2 * -1,
                        paddingTop: x / 2 + 35
                    },
                    children: [
                        (0, d.jsx)(m.Title, {
                            title: `${ e.response.title } | ${ n.COMPANY_NAME } Creative`,
                            override: !0
                        }),
                        (0, d.jsx)(h.default, {
                            ...e.response
                        }),
                        (0, d.jsx)(i.default, {
                            theme: {
                                algorithm: k.default.darkAlgorithm
                            },
                            children: (0, d.jsx)(j.default, {})
                        }),
                        (0, d.jsx)(l.default, {
                            response: e.response
                        })
                    ]
                })
            ]
        });
    };
    const _u = f.default.div.attrs({
            className: 'flex-column flex-center'
        })(p || (p = s`
  width: 80%;
  max-width: 900px;
`)),
        _v = f.default.div.attrs({
            className: 'medium-shadow'
        })(q || (q = s`
  border-radius: 8px;
  background-size: cover;
  z-index: 2;
`)),
        _w = f.default.div.attrs({
            className: 'maxWidth light-shadow'
        })(r || (r = s`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  padding: 35px;
  border-radius: 12px;
`));
}), a.register('Na/F6', function(b, c) {
    e(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('0HHAH'),
        g = a('b5kvC'),
        h = a('cvto726');
    let i, j, k, l, m = e => e;
    var _n = e => (0, d.jsxs)(_o, {
        children: [
            e.tags.length ? (0, d.jsx)(h.default, {
                wrap: !0,
                direction: 'horizontal',
                size: 10,
                style: {
                    marginBottom: 6
                },
                children: e.tags.map((e, a) => (0, d.jsx)(_q, {
                    children: e
                }, e + a))
            }) : null,
            (0, d.jsx)(_p, {
                children: e.title
            }),
            (0, d.jsx)(_r, {
                children: e.description
            })
        ]
    });
    const _o = (0, e.default)(f.CenteredColumn).attrs({
            className: 'maxWidth'
        })(i || (i = m`
  font-family: ${ 0 };
  font-size: 42px;
  margin-bottom: 6px;
  text-transform: uppercase;
  text-align: center;
`), g.Fonts.FugazOne),
        _p = e.default.div(j || (j = m`
  margin-bottom: 2px;
  font-size: 42px;
`)),
        _q = e.default.div(k || (k = m`
  font-family: ${ 0 };
  background: rgba(255, 255, 255, 0.1);
  line-height: 1;
  font-size: 14px;
  padding: 8px 21px 6px 21px;
  border-radius: 50px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), g.Fonts.FugazOne),
        _r = e.default.div(l || (l = m`
  font-family: ${ 0 };
  text-transform: none;
  font-size: 16px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
`), g.Fonts.SFPro);
}), a.register('KcMEX', function(b, c) {
    e(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('GCmKS'),
        g = a('w+7xi');
    var _h = e => {
        const [i, j] = e.useState();
        return !i && e.response.kits ? (0, d.jsx)(g.default, {
            kits: e.response.kits,
            selectKit: j
        }) : (0, d.jsx)(f.default, {
            kitId: i
        });
    };
}), a.register('GCmKS', function(b, c) {
    e(b.exports, 'default', function() {
        return _y;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('led8j'),
        g = a('Axq+p'),
        h = a('0HHAH'),
        i = a('b5kvC'),
        j = a('2HvvA11'),
        k = a('vShe/'),
        l = a('hHkFq'),
        m = a('gs4MT'),
        n = a('ulE4q'),
        o = a('ewwAh'),
        p = a('YRlpt'),
        q = a('PMl60'),
        r = a('70AkF'),
        s = a('Pq0g9');
    let t, u, v, w = e => e;
    const x = 'https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative';
    var _y = e => {
        const [z, A, B] = (0, q.useBoolean)(!1), [C, D, E] = (0, q.useBoolean)(!1), [F, G] = (0, q.useBoolean)(!1), [H, I] = e.useState(''), [J, K, L] = (0, q.useBoolean)(!1), {
            id: M
        } = (0, r.useParams)();
        return (0, d.jsxs)(_z, {
            children: [
                (0, q.isUpgraded)() || (0, q.isStudent)() ? null : (0, d.jsxs)(_A, {
                    children: [
                        'This map is limited to 5 players.',
                        ' ',
                        (0, d.jsxs)(j.default, {
                            to: m.CHECKOUT,
                            style: {
                                color: k.default.Yellow,
                                textDecoration: 'underline'
                            },
                            children: [
                                'Upgrade to ',
                                l.COMPANY_NAME,
                                ' Pro'
                            ]
                        }),
                        ' ',
                        'to remove this limit.'
                    ]
                }),
                (0, d.jsx)(f.default, {
                    size: 'large',
                    type: 'success',
                    block: !0,
                    onClick: () => {
                        if (z)
                            return;
                        A();
                        const N = {
                            listing: M
                        };
                        e.kitId && (N.kit = e.kitId), (0, s.AnalyticsTrackEvent)({
                            event: 'creative_discovery_hosted',
                            properties: {
                                id: M
                            }
                        }), (0, q.request)({
                            url: '/api/matchmaker/intent/map/play/listing/create',
                            data: N,
                            success: e => {
                                window.location.href = `/host?id=${ e }`;
                            },
                            error: e => {
                                (0, q.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: 'There was an error loading you in.'
                                    }
                                });
                            },
                            both: B
                        });
                    },
                    ariaLabel: 'Play Live',
                    style: {
                        fontFamily: i.Fonts.FugazOne,
                        width: '100%',
                        maxWidth: 350,
                        lineHeight: 1
                    },
                    children: (0, d.jsx)('span', {
                        style: {
                            textTransform: 'uppercase'
                        },
                        children: 'Play Live'
                    })
                }),
                (0, d.jsxs)(_B, {
                    children: [
                        'This map was not created by ',
                        l.COMPANY_NAME,
                        '. If anything in this map breaks our',
                        ' ',
                        (0, d.jsx)(j.default, {
                            to: x,
                            external: !0,
                            target: '_blank',
                            style: {
                                color: k.default.Yellow,
                                textDecoration: 'underline'
                            },
                            children: 'Community Guidelines'
                        }),
                        ', please',
                        ' ',
                        (0, d.jsx)(j.default, {
                            style: {
                                color: k.default.Yellow,
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            },
                            onClick: K,
                            children: 'report'
                        }),
                        ' ',
                        'and we will take proper action.'
                    ]
                }),
                (0, d.jsx)(p.default, {
                    open: J,
                    onCancel: L,
                    title: 'Report map',
                    footer: F ? (0, d.jsx)(n.default, {
                        onClick: L,
                        type: 'primary',
                        children: 'Close'
                    }, 'reported-close') : [
                        (0, d.jsx)(n.default, {
                            onClick: L,
                            children: 'Cancel'
                        }, 'reporting-close'),
                        (0, d.jsx)(n.default, {
                            danger: !0,
                            loading: C,
                            onClick: () => {
                                C || (D(), (0, q.request)({
                                    url: `/api/created-map/listing/report/${ M }`,
                                    data: {
                                        comment: H
                                    },
                                    success: () => {
                                        G();
                                    },
                                    both: () => {
                                        E();
                                    }
                                }));
                            },
                            children: 'Report Map'
                        }, 'reporting-submit')
                    ],
                    children: F ? (0, d.jsx)(d.Fragment, {
                        children: 'Your report was sent to our team. Thanks for keeping Gimkit safe!'
                    }) : (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Found a map that breaks our',
                            ' ',
                            (0, d.jsx)(j.default, {
                                to: x,
                                external: !0,
                                target: '_blank',
                                style: {
                                    textDecoration: 'underline'
                                },
                                children: 'Community Guidelines'
                            }),
                            '? Report it here and our team will take a look. Thanks for keeping Gimkit safe!',
                            (0, d.jsx)(o.default.TextArea, {
                                placeholder: 'Optional comment...',
                                style: {
                                    marginTop: 10
                                },
                                maxLength: 1000,
                                onChange: e => I(e.target.value)
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _z = (0, g.default)(h.CenteredColumn).attrs({
            className: 'maxWidth'
        })(t || (t = w`
  padding-top: 10px;
`)),
        _A = g.default.div(u || (u = w`
  font-size: 14px;
  font-style: italic;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.15);
  padding: 14px 22px;
  border-radius: 6px;
`)),
        _B = g.default.div(v || (v = w`
  font-size: 12px;
  font-style: italic;
  margin-top: 20px;
`));
}), a.register('w+7xi', function(b, c) {
    e(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('0HHAH'),
        g = a('vShe/'),
        h = a('cvto726'),
        i = a('b5kvC'),
        j = a('2HvvA11'),
        k = a('gs4MT'),
        l = a('x8CoD');
    let m, n, o, p, q, r = e => e;
    const s = e => (0, d.jsx)(_w, {
        onClick: e.onSelect,
        children: (0, d.jsxs)(h.default, {
            direction: 'horizontal',
            size: 16,
            wrap: !0,
            align: 'center',
            children: [
                (0, d.jsx)(_x, {
                    style: {
                        backgroundImage: `url(${ (0, l.getCloudinaryUrl)(e.gif) })`
                    }
                }),
                (0, d.jsx)(_y, {
                    children: e.title
                })
            ]
        })
    });
    var _t = e => e.kits.length ? (0, d.jsxs)(_u, {
        children: [
            (0, d.jsxs)(_v, {
                children: [
                    'This map allows players to answer questions.',
                    (0, d.jsx)('br', {}),
                    'Select the kit you would like players to answer questions from:'
                ]
            }),
            (0, d.jsx)(h.default, {
                direction: 'vertical',
                size: 15,
                className: 'maxWidth',
                style: {
                    marginTop: 25
                },
                children: e.kits.map(a => (0, d.jsx)(s, {
                    onSelect: () => e.selectKit(a._id),
                    title: a.title,
                    gif: a.gif
                }, a._id))
            })
        ]
    }) : (0, d.jsx)(_u, {
        children: (0, d.jsxs)(_v, {
            children: [
                'This map has players answer questions from a kit, but you',
                ' ',
                (0, d.jsx)('b', {
                    children: 'do not currently have any kits with questions.'
                }),
                (0, d.jsx)('br', {}),
                (0, d.jsx)('br', {}),
                (0, d.jsx)(j.default, {
                    to: k.KIT_CREATOR,
                    style: {
                        color: g.default.Yellow,
                        textDecoration: 'underline'
                    },
                    children: 'Create a kit,'
                }),
                ' ',
                'add some questions and then come back here to play this map!'
            ]
        })
    });
    const _u = (0, e.default)(f.CenteredColumn).attrs({
            className: 'maxWidth'
        })(m || (m = r``)),
        _v = e.default.div(n || (n = r`
  text-align: center;
`)),
        _w = e.default.div.attrs({
            className: 'maxWidth flex vc'
        })(o || (o = r`
  cursor: pointer;

  border-radius: 6px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
    border-color: ${ 0 };
  }
`), g.default.Yellow),
        _x = e.default.div.attrs({
            className: 'light-shadow'
        })(p || (p = r`
  height: 65px;
  width: 65px;
  border-radius: 5px;
  background-size: cover;
`)),
        _y = e.default.div(q || (q = r`
  font-weight: ${ 0 };
  font-size: 16px;
`), i.FontWeights.Bold);
}), a.register('x8CoD', function(b, c) {
    e(b.exports, 'getCloudinaryUrl', function() {
        return _d;
    });
    const _d = e => {
            const e = _e(e);
            return e ? e.includes('/video/upload') ? `https://${ _f }/video/upload/${ e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : e;
        },
        _e = e => {
            if (!_i.some(b => e.includes(b)))
                return null;
            if (e.includes(_g) && !e.includes(`/${ _h }/`))
                return null;
            const f = e.split('/');
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
});