function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('EndGa', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _p;
    });
    var f = b('gRbUn'),
        g = b('zcfNM'),
        h = b('RVMrO'),
        i = b('u4s09'),
        j = b('CXxXH'),
        k = b('JNGrh0'),
        l = b('MgONH'),
        m = b('t52Ep'),
        n = b('HOIhZ');
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
    })(o || (o = (a => a)`
  padding: 35px 0px;
`));
}), b.register('RVMrO', function(c, d) {
    a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('GmO9j'),
        f = b('quE27');
    const g = ['creative-map-listing'];
    var _h = a => (0, e.useQuery)({
        queryKey: [
            g,
            a
        ],
        retry: !1,
        queryFn: () => (0, f.requestAsPromise)({
            url: `/api/created-map/listing/info/${ a }`
        })
    });
}), b.register('CXxXH', function(c, d) {
    a(c.exports, 'default', function() {
        return _u;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('u4s09'),
        h = b('bQWYI'),
        i = b('4HK1D'),
        j = b('R2nG3'),
        k = b('VNuyu'),
        l = b('NmQt6'),
        m = b('urqKz'),
        n = b('quE27'),
        o = b('jw1ib'),
        p = b('HloXO');
    let q, r, s, t = a => a;
    var _u = a => {
        const v = f.useRef(null),
            [w] = (0, h.default)(v),
            x = Math.min(500, 0.9 * w),
            y = x * (9 / 16);
        return (0, e.jsxs)(_v, {
            ref: v,
            children: [
                (0, e.jsx)(_w, {
                    style: {
                        width: x,
                        height: y,
                        backgroundImage: `url(${ (0, p.getCloudinaryUrl)(a.response.image) })`
                    }
                }),
                (0, e.jsxs)(_x, {
                    style: {
                        marginTop: y / 2 * -1,
                        paddingTop: y / 2 + 35
                    },
                    children: [
                        (0, e.jsx)(n.Title, {
                            title: `${ a.response.title } | ${ o.COMPANY_NAME } Creative`,
                            override: !0
                        }),
                        (0, e.jsx)(i.default, {
                            ...a.response
                        }),
                        (0, e.jsx)(j.default, {
                            theme: {
                                algorithm: l.default.darkAlgorithm
                            },
                            children: (0, e.jsx)(k.default, {})
                        }),
                        (0, e.jsx)(m.default, {
                            response: a.response
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
}), b.register('4HK1D', function(c, d) {
    a(c.exports, 'default', function() {
        return _o;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('MgONH'),
        h = b('Eh2Wh'),
        i = b('E2AMI26');
    let j, k, l, m, n = a => a;
    var _o = a => (0, e.jsxs)(_p, {
        children: [
            a.tags.length ? (0, e.jsx)(i.default, {
                wrap: !0,
                direction: 'horizontal',
                size: 10,
                style: {
                    marginBottom: 6
                },
                children: a.tags.map((a, b) => (0, e.jsx)(_r, {
                    children: a
                }, a + b))
            }) : null,
            (0, e.jsx)(_q, {
                children: a.title
            }),
            (0, e.jsx)(_s, {
                children: a.description
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
}), b.register('urqKz', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('/1658'),
        h = b('4YDAp');
    var _i = a => {
        const [j, k] = f.useState();
        return !j && a.response.kits ? (0, e.jsx)(h.default, {
            kits: a.response.kits,
            selectKit: k
        }) : (0, e.jsx)(g.default, {
            kitId: j
        });
    };
}), b.register('/1658', function(c, d) {
    a(c.exports, 'default', function() {
        return _z;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('aPZ+w'),
        h = b('u4s09'),
        i = b('MgONH'),
        j = b('Eh2Wh'),
        k = b('FB7HT26'),
        l = b('HOIhZ'),
        m = b('jw1ib'),
        n = b('nKuOQ'),
        o = b('P1KtI'),
        p = b('aevdF'),
        q = b('AE7vR'),
        r = b('quE27'),
        s = b('zcfNM'),
        t = b('IMf/b4');
    let u, v, w, x = a => a;
    const y = 'https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative';
    var _z = a => {
        const [A, B, C] = (0, r.useBoolean)(!1), [D, E, F] = (0, r.useBoolean)(!1), [G, H] = (0, r.useBoolean)(!1), [I, J] = f.useState(''), [K, L, M] = (0, r.useBoolean)(!1), {
            id: N
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
                        if (A)
                            return;
                        B();
                        const O = {
                            listing: N
                        };
                        a.kitId && (O.kit = a.kitId), (0, t.AnalyticsTrackEvent)({
                            event: 'creative_discovery_hosted',
                            properties: {
                                id: N
                            }
                        }), (0, r.request)({
                            url: '/api/matchmaker/intent/map/play/listing/create',
                            data: O,
                            success: a => {
                                window.location.href = `/host?id=${ a }`;
                            },
                            error: a => {
                                (0, r.throwMessageError)({
                                    e: a,
                                    default: {
                                        title: 'There was an error loading you in.'
                                    }
                                });
                            },
                            both: C
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
                            onClick: L,
                            children: 'report'
                        }),
                        ' ',
                        'and we will take proper action.'
                    ]
                }),
                (0, e.jsx)(q.default, {
                    open: K,
                    onCancel: M,
                    title: 'Report map',
                    footer: G ? (0, e.jsx)(o.default, {
                        onClick: M,
                        type: 'primary',
                        children: 'Close'
                    }, 'reported-close') : [
                        (0, e.jsx)(o.default, {
                            onClick: M,
                            children: 'Cancel'
                        }, 'reporting-close'),
                        (0, e.jsx)(o.default, {
                            danger: !0,
                            loading: D,
                            onClick: () => {
                                D || (E(), (0, r.request)({
                                    url: `/api/created-map/listing/report/${ N }`,
                                    data: {
                                        comment: I
                                    },
                                    success: () => {
                                        H();
                                    },
                                    both: () => {
                                        F();
                                    }
                                }));
                            },
                            children: 'Report Map'
                        }, 'reporting-submit')
                    ],
                    children: G ? (0, e.jsx)(e.Fragment, {
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
                                onChange: a => J(a.target.value)
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
}), b.register('4YDAp', function(c, d) {
    a(c.exports, 'default', function() {
        return _u;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('MgONH'),
        h = b('HOIhZ'),
        i = b('E2AMI26'),
        j = b('Eh2Wh'),
        k = b('FB7HT26'),
        l = b('nKuOQ'),
        m = b('HloXO');
    let n, o, p, q, r, s = a => a;
    const t = a => (0, e.jsx)(_x, {
        onClick: a.onSelect,
        children: (0, e.jsxs)(i.default, {
            direction: 'horizontal',
            size: 16,
            wrap: !0,
            align: 'center',
            children: [
                (0, e.jsx)(_y, {
                    style: {
                        backgroundImage: `url(${ (0, m.getCloudinaryUrl)(a.gif) })`
                    }
                }),
                (0, e.jsx)(_z, {
                    children: a.title
                })
            ]
        })
    });
    var _u = a => a.kits.length ? (0, e.jsxs)(_v, {
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
                children: a.kits.map(b => (0, e.jsx)(t, {
                    onSelect: () => a.selectKit(b._id),
                    title: b.title,
                    gif: b.gif
                }, b._id))
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
}), b.register('HloXO', function(c, d) {
    a(c.exports, 'getCloudinaryUrl', function() {
        return _e;
    });
    const _e = a => {
            const f = _f(a);
            return f ? a.includes('/video/upload') ? `https://${ _g }/video/upload/${ f }` : `https://${ _g }/image/upload/f_auto,fl_lossy,q_auto/${ f }` : a;
        },
        _f = a => {
            if (!_j.some(c => a.includes(c)))
                return null;
            if (a.includes(_h) && !a.includes(`/${ _i }/`))
                return null;
            const g = a.split('/');
            if (!g || !g.length || g.length < 2)
                return null;
            const h = g[g.length - 2],
                i = g[g.length - 1];
            return h && i && h.startsWith('v') ? `${ h }/${ i }` : null;
        },
        _g = 'media.gimkit.com',
        _h = 'res.cloudinary.com',
        _i = 'gimkit-production',
        _j = [
            _g,
            _h
        ];
});