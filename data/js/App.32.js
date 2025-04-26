function a(a, b, q, r) {
    Object.defineProperty(a, b, {
        get: q,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('kxc8y', function(q, r) {
    var c;
    c = q.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(q.exports, 'default', function() {
        return n;
    });
    var d = b('8kSQZ'),
        e = b('0R8EW'),
        f = b('FECEn'),
        g = b('h99Nu'),
        h = b('kno7P'),
        i = b('fgVTE0'),
        j = b('YimJ0'),
        k = b('iMnBi'),
        l = b('S/jX4');
    let m;
    var n = () => {
        var o;
        const {
            id: p
        } = (0, e.useParams)(), {
            data: q,
            isLoading: r,
            error: s
        } = (0, f.default)(p);
        return r ? (0, d.jsx)(o, {
            children: (0, d.jsx)(i.default, {
                style: {
                    color: l.default.White,
                    marginTop: 50
                }
            })
        }) : s ? (0, d.jsx)(o, {
            children: (0, d.jsxs)(j.CenteredColumn, {
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
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(k.default, {
                            name: 'fas fa-exclamation-triangle',
                            style: {
                                color: l.default.Yellow,
                                fontSize: 42,
                                marginBottom: 20
                            }
                        })
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            fontSize: 16
                        },
                        children: (null == s || null === (o = s.message) || void 0 === o ? void 0 : o.text) || 'There was an error. Please refresh and try again.'
                    })
                ]
            })
        }) : (0, d.jsx)(o, {
            children: q ? (0, d.jsx)(h.default, {
                response: q
            }) : null
        });
    };
    const o = g.default.div.attrs({
        className: 'maxWidth flex-center'
    })(m || (m = (a => a)`
  padding: 35px 0px;
`));
}), b.register('FECEn', function(u, v) {
    a(u.exports, 'default', function() {
        return f;
    });
    var c = b('IsAdf'),
        d = b('PjB0f');
    const e = ['creative-map-listing'];
    var f = a => (0, c.useQuery)({
        queryKey: [
            e,
            a
        ],
        retry: !1,
        queryFn: () => (0, d.requestAsPromise)({
            url: `/api/created-map/listing/info/${ a }`
        })
    });
}), b.register('kno7P', function(u, v) {
    a(u.exports, 'default', function() {
        return s;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('h99Nu'),
        f = b('U8PGt'),
        g = b('N+DRo'),
        h = b('qEw51'),
        i = b('ExtIT'),
        j = b('KlhV/'),
        k = b('cBqDd'),
        l = b('PjB0f'),
        m = b('0wLl2'),
        n = b('2WDH6');
    let o, p, q, r = a => a;
    var s = a => {
        const t = d.useRef(null),
            [u] = (0, f.default)(t),
            v = Math.min(500, 0.9 * u),
            w = v * (9 / 16);
        return (0, c.jsxs)(t, {
            ref: t,
            children: [
                (0, c.jsx)(u, {
                    style: {
                        width: v,
                        height: w,
                        backgroundImage: `url(${ (0, n.getCloudinaryUrl)(a.response.image) })`
                    }
                }),
                (0, c.jsxs)(v, {
                    style: {
                        marginTop: w / 2 * -1,
                        paddingTop: w / 2 + 35
                    },
                    children: [
                        (0, c.jsx)(l.Title, {
                            title: `${ a.response.title } | ${ m.COMPANY_NAME } Creative`,
                            override: !0
                        }),
                        (0, c.jsx)(g.default, {
                            ...a.response
                        }),
                        (0, c.jsx)(h.default, {
                            theme: {
                                algorithm: j.default.darkAlgorithm
                            },
                            children: (0, c.jsx)(i.default, {})
                        }),
                        (0, c.jsx)(k.default, {
                            response: a.response
                        })
                    ]
                })
            ]
        });
    };
    const t = e.default.div.attrs({
            className: 'flex-column flex-center'
        })(o || (o = r`
  width: 80%;
  max-width: 900px;
`)),
        u = e.default.div.attrs({
            className: 'medium-shadow'
        })(p || (p = r`
  border-radius: 8px;
  background-size: cover;
  z-index: 2;
`)),
        v = e.default.div.attrs({
            className: 'maxWidth light-shadow'
        })(q || (q = r`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  padding: 35px;
  border-radius: 12px;
`));
}), b.register('N+DRo', function(i, A) {
    a(i.exports, 'default', function() {
        return m;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('YimJ0'),
        f = b('gSUVO'),
        g = b('5nJMd26');
    let h, i, j, k, l = a => a;
    var m = a => (0, c.jsxs)(n, {
        children: [
            a.tags.length ? (0, c.jsx)(g.default, {
                wrap: !0,
                direction: 'horizontal',
                size: 10,
                style: {
                    marginBottom: 6
                },
                children: a.tags.map((a, b) => (0, c.jsx)(p, {
                    children: a
                }, a + b))
            }) : null,
            (0, c.jsx)(o, {
                children: a.title
            }),
            (0, c.jsx)(q, {
                children: a.description
            })
        ]
    });
    const n = (0, d.default)(e.CenteredColumn).attrs({
            className: 'maxWidth'
        })(h || (h = l`
  font-family: ${ 0 };
  font-size: 42px;
  margin-bottom: 6px;
  text-transform: uppercase;
  text-align: center;
`), f.Fonts.FugazOne),
        o = d.default.div(i || (i = l`
  margin-bottom: 2px;
  font-size: 42px;
`)),
        p = d.default.div(j || (j = l`
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
`), f.Fonts.FugazOne),
        q = d.default.div(k || (k = l`
  font-family: ${ 0 };
  text-transform: none;
  font-size: 16px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
`), f.Fonts.SFPro);
}), b.register('cBqDd', function(i, A) {
    a(i.exports, 'default', function() {
        return g;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('Fr1wt'),
        f = b('rjv6T');
    var g = a => {
        const [h, i] = d.useState();
        return !h && a.response.kits ? (0, c.jsx)(f.default, {
            kits: a.response.kits,
            selectKit: i
        }) : (0, c.jsx)(e.default, {
            kitId: h
        });
    };
}), b.register('Fr1wt', function(z, A) {
    a(z.exports, 'default', function() {
        return x;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('Dog9Y'),
        f = b('h99Nu'),
        g = b('YimJ0'),
        h = b('gSUVO'),
        i = b('iYEuk12'),
        j = b('S/jX4'),
        k = b('0wLl2'),
        l = b('q721a'),
        m = b('IsmrL'),
        n = b('c6x8w'),
        o = b('cR5QE'),
        p = b('PjB0f'),
        q = b('0R8EW'),
        r = b('CJCMN4');
    let s, t, u, v = a => a;
    const w = 'https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative';
    var x = a => {
        const [y, z, A] = (0, p.useBoolean)(!1), [B, C, D] = (0, p.useBoolean)(!1), [E, F] = (0, p.useBoolean)(!1), [G, H] = d.useState(''), [I, J, K] = (0, p.useBoolean)(!1), {
            id: L
        } = (0, q.useParams)();
        return (0, c.jsxs)(y, {
            children: [
                (0, p.isUpgraded)() || (0, p.isStudent)() ? null : (0, c.jsxs)(z, {
                    children: [
                        'This map is limited to 5 players.',
                        ' ',
                        (0, c.jsxs)(i.default, {
                            to: l.CHECKOUT,
                            style: {
                                color: j.default.Yellow,
                                textDecoration: 'underline'
                            },
                            children: [
                                'Upgrade to ',
                                k.COMPANY_NAME,
                                ' Pro'
                            ]
                        }),
                        ' ',
                        'to remove this limit.'
                    ]
                }),
                (0, c.jsx)(e.default, {
                    size: 'large',
                    type: 'success',
                    block: !0,
                    onClick: () => {
                        if (y)
                            return;
                        z();
                        const M = {
                            listing: L
                        };
                        a.kitId && (M.kit = a.kitId), (0, r.AnalyticsTrackEvent)({
                            event: 'creative_discovery_hosted',
                            properties: {
                                id: L
                            }
                        }), (0, p.request)({
                            url: '/api/matchmaker/intent/map/play/listing/create',
                            data: M,
                            success: a => {
                                window.location.href = `/host?id=${ a }`;
                            },
                            error: a => {
                                (0, p.throwMessageError)({
                                    e: a,
                                    default: {
                                        title: 'There was an error loading you in.'
                                    }
                                });
                            },
                            both: A
                        });
                    },
                    ariaLabel: 'Play Live',
                    style: {
                        fontFamily: h.Fonts.FugazOne,
                        width: '100%',
                        maxWidth: 350,
                        lineHeight: 1
                    },
                    children: (0, c.jsx)('span', {
                        style: {
                            textTransform: 'uppercase'
                        },
                        children: 'Play Live'
                    })
                }),
                (0, c.jsxs)(A, {
                    children: [
                        'This map was not created by ',
                        k.COMPANY_NAME,
                        '. If anything in this map breaks our',
                        ' ',
                        (0, c.jsx)(i.default, {
                            to: w,
                            external: !0,
                            target: '_blank',
                            style: {
                                color: j.default.Yellow,
                                textDecoration: 'underline'
                            },
                            children: 'Community Guidelines'
                        }),
                        ', please',
                        ' ',
                        (0, c.jsx)(i.default, {
                            style: {
                                color: j.default.Yellow,
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            },
                            onClick: J,
                            children: 'report'
                        }),
                        ' ',
                        'and we will take proper action.'
                    ]
                }),
                (0, c.jsx)(o.default, {
                    open: I,
                    onCancel: K,
                    title: 'Report map',
                    footer: E ? (0, c.jsx)(m.default, {
                        onClick: K,
                        type: 'primary',
                        children: 'Close'
                    }, 'reported-close') : [
                        (0, c.jsx)(m.default, {
                            onClick: K,
                            children: 'Cancel'
                        }, 'reporting-close'),
                        (0, c.jsx)(m.default, {
                            danger: !0,
                            loading: B,
                            onClick: () => {
                                B || (C(), (0, p.request)({
                                    url: `/api/created-map/listing/report/${ L }`,
                                    data: {
                                        comment: G
                                    },
                                    success: () => {
                                        F();
                                    },
                                    both: () => {
                                        D();
                                    }
                                }));
                            },
                            children: 'Report Map'
                        }, 'reporting-submit')
                    ],
                    children: E ? (0, c.jsx)(c.Fragment, {
                        children: 'Your report was sent to our team. Thanks for keeping Gimkit safe!'
                    }) : (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Found a map that breaks our',
                            ' ',
                            (0, c.jsx)(i.default, {
                                to: w,
                                external: !0,
                                target: '_blank',
                                style: {
                                    textDecoration: 'underline'
                                },
                                children: 'Community Guidelines'
                            }),
                            '? Report it here and our team will take a look. Thanks for keeping Gimkit safe!',
                            (0, c.jsx)(n.default.TextArea, {
                                placeholder: 'Optional comment...',
                                style: {
                                    marginTop: 10
                                },
                                maxLength: 1000,
                                onChange: a => H(a.target.value)
                            })
                        ]
                    })
                })
            ]
        });
    };
    const y = (0, f.default)(g.CenteredColumn).attrs({
            className: 'maxWidth'
        })(s || (s = v`
  padding-top: 10px;
`)),
        z = f.default.div(t || (t = v`
  font-size: 14px;
  font-style: italic;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.15);
  padding: 14px 22px;
  border-radius: 6px;
`)),
        A = f.default.div(u || (u = v`
  font-size: 12px;
  font-style: italic;
  margin-top: 20px;
`));
}), b.register('rjv6T', function(f, c) {
    a(f.exports, 'default', function() {
        return s;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('YimJ0'),
        f = b('S/jX4'),
        g = b('5nJMd26'),
        h = b('gSUVO'),
        i = b('iYEuk12'),
        j = b('q721a'),
        k = b('2WDH6');
    let l, m, n, o, p, q = a => a;
    const r = a => (0, c.jsx)(v, {
        onClick: a.onSelect,
        children: (0, c.jsxs)(g.default, {
            direction: 'horizontal',
            size: 16,
            wrap: !0,
            align: 'center',
            children: [
                (0, c.jsx)(w, {
                    style: {
                        backgroundImage: `url(${ (0, k.getCloudinaryUrl)(a.gif) })`
                    }
                }),
                (0, c.jsx)(x, {
                    children: a.title
                })
            ]
        })
    });
    var s = a => a.kits.length ? (0, c.jsxs)(t, {
        children: [
            (0, c.jsxs)(u, {
                children: [
                    'This map allows players to answer questions.',
                    (0, c.jsx)('br', {}),
                    'Select the kit you would like players to answer questions from:'
                ]
            }),
            (0, c.jsx)(g.default, {
                direction: 'vertical',
                size: 15,
                className: 'maxWidth',
                style: {
                    marginTop: 25
                },
                children: a.kits.map(b => (0, c.jsx)(r, {
                    onSelect: () => a.selectKit(b._id),
                    title: b.title,
                    gif: b.gif
                }, b._id))
            })
        ]
    }) : (0, c.jsx)(t, {
        children: (0, c.jsxs)(u, {
            children: [
                'This map has players answer questions from a kit, but you',
                ' ',
                (0, c.jsx)('b', {
                    children: 'do not currently have any kits with questions.'
                }),
                (0, c.jsx)('br', {}),
                (0, c.jsx)('br', {}),
                (0, c.jsx)(i.default, {
                    to: j.KIT_CREATOR,
                    style: {
                        color: f.default.Yellow,
                        textDecoration: 'underline'
                    },
                    children: 'Create a kit,'
                }),
                ' ',
                'add some questions and then come back here to play this map!'
            ]
        })
    });
    const t = (0, d.default)(e.CenteredColumn).attrs({
            className: 'maxWidth'
        })(l || (l = q``)),
        u = d.default.div(m || (m = q`
  text-align: center;
`)),
        v = d.default.div.attrs({
            className: 'maxWidth flex vc'
        })(n || (n = q`
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
`), f.default.Yellow),
        w = d.default.div.attrs({
            className: 'light-shadow'
        })(o || (o = q`
  height: 65px;
  width: 65px;
  border-radius: 5px;
  background-size: cover;
`)),
        x = d.default.div(p || (p = q`
  font-weight: ${ 0 };
  font-size: 16px;
`), h.FontWeights.Bold);
}), b.register('2WDH6', function(b, f) {
    a(b.exports, 'getCloudinaryUrl', function() {
        return c;
    });
    const c = a => {
            const d = d(a);
            return d ? a.includes('/video/upload') ? `https://${ e }/video/upload/${ d }` : `https://${ e }/image/upload/f_auto,fl_lossy,q_auto/${ d }` : a;
        },
        d = a => {
            if (!h.some(b => a.includes(b)))
                return null;
            if (a.includes(f) && !a.includes(`/${ g }/`))
                return null;
            const e = a.split('/');
            if (!e || !e.length || e.length < 2)
                return null;
            const f = e[e.length - 2],
                g = e[e.length - 1];
            return f && g && f.startsWith('v') ? `${ f }/${ g }` : null;
        },
        e = 'media.gimkit.com',
        f = 'res.cloudinary.com',
        g = 'gimkit-production',
        h = [
            e,
            f
        ];
});