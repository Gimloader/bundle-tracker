function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _p;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....');
    let o;
    var _p = () => {
        var q;
        const {
            id: r
        } = (0, g.useParams)(), {
            data: s,
            isLoading: t,
            error: u
        } = (0, h.default)(r);
        return t ? (0, f.jsx)(_q, {
            children: (0, f.jsx)(k.default, {
                style: {
                    color: n.default.White,
                    marginTop: 50
                }
            })
        }) : u ? (0, f.jsx)(_q, {
            children: (0, f.jsxs)(l.CenteredColumn, {
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
                    (0, f.jsx)('div', {
                        children: (0, f.jsx)(m.default, {
                            name: 'fas fa-exclamation-triangle',
                            style: {
                                color: n.default.Yellow,
                                fontSize: 42,
                                marginBottom: 20
                            }
                        })
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            fontSize: 16
                        },
                        children: (null == u || null === (q = u.message) || void 0 === q ? void 0 : q.text) || 'There was an error. Please refresh and try again.'
                    })
                ]
            })
        }) : (0, f.jsx)(_q, {
            children: s ? (0, f.jsx)(j.default, {
                response: s
            }) : null
        });
    };
    const _q = i.default.div.attrs({
        className: 'maxWidth flex-center'
    })(o || (o = (r => r)`
  padding: 35px 0px;
`));
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('.....'),
        f = b('.....');
    const g = ['creative-map-listing'];
    var _h = i => (0, e.useQuery)({
        queryKey: [
            g,
            i
        ],
        retry: !1,
        queryFn: () => (0, f.requestAsPromise)({
            url: `/api/created-map/listing/info/${ i }`
        })
    });
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _u;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....'),
        p = b('.....');
    let q, r, s, t = u => u;
    var _u = v => {
        const w = f.useRef(null),
            [x] = (0, h.default)(w),
            y = Math.min(500, 0.9 * x),
            z = y * (9 / 16);
        return (0, e.jsxs)(_v, {
            ref: w,
            children: [
                (0, e.jsx)(_w, {
                    style: {
                        width: y,
                        height: z,
                        backgroundImage: `url(${ (0, p.getCloudinaryUrl)(v.response.image) })`
                    }
                }),
                (0, e.jsxs)(_x, {
                    style: {
                        marginTop: z / 2 * -1,
                        paddingTop: z / 2 + 35
                    },
                    children: [
                        (0, e.jsx)(n.Title, {
                            title: `${ v.response.title } | ${ o.COMPANY_NAME } Creative`,
                            override: !0
                        }),
                        (0, e.jsx)(i.default, {
                            ...v.response
                        }),
                        (0, e.jsx)(j.default, {
                            theme: {
                                algorithm: l.default.darkAlgorithm
                            },
                            children: (0, e.jsx)(k.default, {})
                        }),
                        (0, e.jsx)(m.default, {
                            response: v.response
                        })
                    ]
                })
            ]
        });
    };
    const _v = g.default.div.attrs({
            className: 'flex-column flex-center'
        })(q || (q = t`
  width: 80%;
  max-width: 900px;
`)),
        _w = g.default.div.attrs({
            className: 'medium-shadow'
        })(r || (r = t`
  border-radius: 8px;
  background-size: cover;
  z-index: 2;
`)),
        _x = g.default.div.attrs({
            className: 'maxWidth light-shadow'
        })(s || (s = t`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  padding: 35px;
  border-radius: 12px;
`));
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _o;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....');
    let j, k, l, m, n = o => o;
    var _o = p => (0, e.jsxs)(_p, {
        children: [
            p.tags.length ? (0, e.jsx)(i.default, {
                wrap: !0,
                direction: 'horizontal',
                size: 10,
                style: {
                    marginBottom: 6
                },
                children: p.tags.map((q, r) => (0, e.jsx)(_r, {
                    children: q
                }, q + r))
            }) : null,
            (0, e.jsx)(_q, {
                children: p.title
            }),
            (0, e.jsx)(_s, {
                children: p.description
            })
        ]
    });
    const _p = (0, f.default)(g.CenteredColumn).attrs({
            className: 'maxWidth'
        })(j || (j = n`
  font-family: ${ 0 };
  font-size: 42px;
  margin-bottom: 6px;
  text-transform: uppercase;
  text-align: center;
`), h.Fonts.FugazOne),
        _q = f.default.div(k || (k = n`
  margin-bottom: 2px;
  font-size: 42px;
`)),
        _r = f.default.div(l || (l = n`
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
`), h.Fonts.FugazOne),
        _s = f.default.div(m || (m = n`
  font-family: ${ 0 };
  text-transform: none;
  font-size: 16px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
`), h.Fonts.SFPro);
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....');
    var _i = j => {
        const [k, l] = f.useState();
        return !k && j.response.kits ? (0, e.jsx)(h.default, {
            kits: j.response.kits,
            selectKit: l
        }) : (0, e.jsx)(g.default, {
            kitId: k
        });
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _z;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....'),
        p = b('.....'),
        q = b('.....'),
        r = b('.....'),
        s = b('.....'),
        t = b('.....');
    let u, v, w, x = y => y;
    const y = 'https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative';
    var _z = A => {
        const [B, C, D] = (0, r.useBoolean)(!1), [E, F, G] = (0, r.useBoolean)(!1), [H, I] = (0, r.useBoolean)(!1), [J, K] = f.useState(''), [L, M, N] = (0, r.useBoolean)(!1), {
            id: O
        } = (0, s.useParams)();
        return (0, e.jsxs)(_A, {
            children: [
                (0, r.isUpgraded)() || (0, r.isStudent)() ? null : (0, e.jsxs)(_B, {
                    children: [
                        'This map is limited to 5 players.',
                        ' ',
                        (0, e.jsxs)(k.default, {
                            to: n.CHECKOUT,
                            style: {
                                color: l.default.Yellow,
                                textDecoration: 'underline'
                            },
                            children: [
                                'Upgrade to ',
                                m.COMPANY_NAME,
                                ' Pro'
                            ]
                        }),
                        ' ',
                        'to remove this limit.'
                    ]
                }),
                (0, e.jsx)(g.default, {
                    size: 'large',
                    type: 'success',
                    block: !0,
                    onClick: () => {
                        if (B)
                            return;
                        C();
                        const P = {
                            listing: O
                        };
                        A.kitId && (P.kit = A.kitId), (0, t.AnalyticsTrackEvent)({
                            event: 'creative_discovery_hosted',
                            properties: {
                                id: O
                            }
                        }), (0, r.request)({
                            url: '/api/matchmaker/intent/map/play/listing/create',
                            data: P,
                            success: Q => {
                                window.location.href = `/host?id=${ Q }`;
                            },
                            error: Q => {
                                (0, r.throwMessageError)({
                                    e: Q,
                                    default: {
                                        title: 'There was an error loading you in.'
                                    }
                                });
                            },
                            both: D
                        });
                    },
                    ariaLabel: 'Play Live',
                    style: {
                        fontFamily: j.Fonts.FugazOne,
                        width: '100%',
                        maxWidth: 350,
                        lineHeight: 1
                    },
                    children: (0, e.jsx)('span', {
                        style: {
                            textTransform: 'uppercase'
                        },
                        children: 'Play Live'
                    })
                }),
                (0, e.jsxs)(_C, {
                    children: [
                        'This map was not created by ',
                        m.COMPANY_NAME,
                        '. If anything in this map breaks our',
                        ' ',
                        (0, e.jsx)(k.default, {
                            to: y,
                            external: !0,
                            target: '_blank',
                            style: {
                                color: l.default.Yellow,
                                textDecoration: 'underline'
                            },
                            children: 'Community Guidelines'
                        }),
                        ', please',
                        ' ',
                        (0, e.jsx)(k.default, {
                            style: {
                                color: l.default.Yellow,
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            },
                            onClick: M,
                            children: 'report'
                        }),
                        ' ',
                        'and we will take proper action.'
                    ]
                }),
                (0, e.jsx)(q.default, {
                    open: L,
                    onCancel: N,
                    title: 'Report map',
                    footer: H ? (0, e.jsx)(o.default, {
                        onClick: N,
                        type: 'primary',
                        children: 'Close'
                    }, 'reported-close') : [
                        (0, e.jsx)(o.default, {
                            onClick: N,
                            children: 'Cancel'
                        }, 'reporting-close'),
                        (0, e.jsx)(o.default, {
                            danger: !0,
                            loading: E,
                            onClick: () => {
                                E || (F(), (0, r.request)({
                                    url: `/api/created-map/listing/report/${ O }`,
                                    data: {
                                        comment: J
                                    },
                                    success: () => {
                                        I();
                                    },
                                    both: () => {
                                        G();
                                    }
                                }));
                            },
                            children: 'Report Map'
                        }, 'reporting-submit')
                    ],
                    children: H ? (0, e.jsx)(e.Fragment, {
                        children: 'Your report was sent to our team. Thanks for keeping Gimkit safe!'
                    }) : (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Found a map that breaks our',
                            ' ',
                            (0, e.jsx)(k.default, {
                                to: y,
                                external: !0,
                                target: '_blank',
                                style: {
                                    textDecoration: 'underline'
                                },
                                children: 'Community Guidelines'
                            }),
                            '? Report it here and our team will take a look. Thanks for keeping Gimkit safe!',
                            (0, e.jsx)(p.default.TextArea, {
                                placeholder: 'Optional comment...',
                                style: {
                                    marginTop: 10
                                },
                                maxLength: 1000,
                                onChange: P => K(P.target.value)
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _A = (0, h.default)(i.CenteredColumn).attrs({
            className: 'maxWidth'
        })(u || (u = x`
  padding-top: 10px;
`)),
        _B = h.default.div(v || (v = x`
  font-size: 14px;
  font-style: italic;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.15);
  padding: 14px 22px;
  border-radius: 6px;
`)),
        _C = h.default.div(w || (w = x`
  font-size: 12px;
  font-style: italic;
  margin-top: 20px;
`));
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _u;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....');
    let n, o, p, q, r, s = t => t;
    const t = u => (0, e.jsx)(_x, {
        onClick: u.onSelect,
        children: (0, e.jsxs)(i.default, {
            direction: 'horizontal',
            size: 16,
            wrap: !0,
            align: 'center',
            children: [
                (0, e.jsx)(_y, {
                    style: {
                        backgroundImage: `url(${ (0, m.getCloudinaryUrl)(u.gif) })`
                    }
                }),
                (0, e.jsx)(_z, {
                    children: u.title
                })
            ]
        })
    });
    var _u = v => v.kits.length ? (0, e.jsxs)(_v, {
        children: [
            (0, e.jsxs)(_w, {
                children: [
                    'This map allows players to answer questions.',
                    (0, e.jsx)('br', {}),
                    'Select the kit you would like players to answer questions from:'
                ]
            }),
            (0, e.jsx)(i.default, {
                direction: 'vertical',
                size: 15,
                className: 'maxWidth',
                style: {
                    marginTop: 25
                },
                children: v.kits.map(w => (0, e.jsx)(t, {
                    onSelect: () => v.selectKit(w._id),
                    title: w.title,
                    gif: w.gif
                }, w._id))
            })
        ]
    }) : (0, e.jsx)(_v, {
        children: (0, e.jsxs)(_w, {
            children: [
                'This map has players answer questions from a kit, but you',
                ' ',
                (0, e.jsx)('b', {
                    children: 'do not currently have any kits with questions.'
                }),
                (0, e.jsx)('br', {}),
                (0, e.jsx)('br', {}),
                (0, e.jsx)(k.default, {
                    to: l.KIT_CREATOR,
                    style: {
                        color: h.default.Yellow,
                        textDecoration: 'underline'
                    },
                    children: 'Create a kit,'
                }),
                ' ',
                'add some questions and then come back here to play this map!'
            ]
        })
    });
    const _v = (0, f.default)(g.CenteredColumn).attrs({
            className: 'maxWidth'
        })(n || (n = s``)),
        _w = f.default.div(o || (o = s`
  text-align: center;
`)),
        _x = f.default.div.attrs({
            className: 'maxWidth flex vc'
        })(p || (p = s`
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
`), h.default.Yellow),
        _y = f.default.div.attrs({
            className: 'light-shadow'
        })(q || (q = s`
  height: 65px;
  width: 65px;
  border-radius: 5px;
  background-size: cover;
`)),
        _z = f.default.div(r || (r = s`
  font-weight: ${ 0 };
  font-size: 16px;
`), j.FontWeights.Bold);
}), b.register('.....', function(c, d) {
    a(c.exports, 'getCloudinaryUrl', function() {
        return _e;
    });
    const _e = f => {
            const g = _f(f);
            return g ? f.includes('/video/upload') ? `https://${ _g }/video/upload/${ g }` : `https://${ _g }/image/upload/f_auto,fl_lossy,q_auto/${ g }` : f;
        },
        _f = g => {
            if (!_j.some(h => g.includes(h)))
                return null;
            if (g.includes(_h) && !g.includes(`/${ _i }/`))
                return null;
            const h = g.split('/');
            if (!h || !h.length || h.length < 2)
                return null;
            const i = h[h.length - 2],
                j = h[h.length - 1];
            return i && j && i.startsWith('v') ? `${ i }/${ j }` : null;
        },
        _g = 'media.gimkit.com',
        _h = 'res.cloudinary.com',
        _i = 'gimkit-production',
        _j = [
            _g,
            _h
        ];
});