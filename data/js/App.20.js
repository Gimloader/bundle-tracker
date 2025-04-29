function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('3icon', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var f = b('gRbUn');
    b('O0Kav');
    var g = b('vQr53'),
        h = b('BzWye'),
        i = b('IvnC4'),
        j = b('E2AMI26'),
        k = b('rwUlh'),
        l = b('ySfF+'),
        m = b('TfnJ9');
    var _n = a => (0, f.jsx)(m.LimitedWidth, {
        children: (0, f.jsxs)(j.default, {
            direction: 'vertical',
            size: 30,
            className: 'maxWidth',
            children: [
                (0, f.jsx)(g.default, {
                    pageMode: a.pageMode
                }),
                (0, f.jsx)(h.default, {
                    title: 'Benefits',
                    description: 'Access these exclusive benefits all season long',
                    children: (0, f.jsx)(i.default, {
                        forSelf: !0
                    })
                }),
                (0, f.jsx)(k.default, {}),
                (0, f.jsx)(l.default, {
                    pageMode: a.pageMode
                })
            ]
        })
    });
}), b.register('vQr53', function(c, d) {
    a(c.exports, 'default', function() {
        return _y;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('MgONH'),
        h = b('Eh2Wh'),
        i = b('aPZ+w'),
        j = b('t52Ep'),
        k = b('8KqQ+'),
        l = b('FB7HT26'),
        m = b('nKuOQ'),
        n = b('hupyL1'),
        o = b('Kc2GZ'),
        p = b('B/GC10'),
        q = b('shlm9');
    let r, s, t, u, v, w, x = a => a;
    var _y = a => (0, e.jsxs)(_z, {
        children: [
            (0, e.jsx)(_A, {}),
            (0, e.jsxs)(_B, {
                children: [
                    n.SeasonTicketSeason.seasonName,
                    ' ',
                    n.SeasonTicketSeason.seasonNumber
                ]
            }),
            (0, e.jsx)(_C, {
                children: n.SeasonTicketName.name
            }),
            (0, p.OwnsSeasonTicket)() ? (0, e.jsxs)(_D, {
                children: [
                    'You already own this ',
                    n.SeasonTicketName.name,
                    '. Thanks so much for your support!'
                ]
            }) : (0, e.jsx)(l.default, {
                to: m.SEASON_TICKET_BASE,
                style: {
                    textDecoration: 'none'
                },
                target: a.pageMode ? void 0 : '_blank',
                children: (0, e.jsxs)(i.default, {
                    style: {
                        fontFamily: h.Fonts.SFPro,
                        marginTop: 15
                    },
                    customFontWeight: h.FontWeights.Bold,
                    customColor: '#1677ff',
                    ariaLabel: `Purchase ${ n.SeasonTicketName.name }`,
                    children: [
                        (0, e.jsx)(j.default, {
                            name: 'fal fa-sparkles',
                            style: {
                                marginRight: 10
                            }
                        }),
                        'Purchase ',
                        n.SeasonTicketName.name
                    ]
                })
            }),
            (0, e.jsxs)(_E, {
                children: [
                    'Season ends ',
                    q.SEASON_TICKET_END_DATE,
                    '.'
                ]
            })
        ]
    });
    const _z = (0, f.default)(g.CenteredColumn).attrs({
            className: 'maxWidth medium-shadow'
        })(r || (r = x`
  font-family: ${ 0 };
  text-transform: uppercase;
  padding: 60px 30px;
  border-radius: 8px;
  border: 4px solid ${ 0 };
  background-image: linear-gradient(
    179deg,
    rgb(255 226 6) 9.2%,
    rgb(170 95 41) 103.9%
  );
  @media (max-width: 820px) {
    text-align: center;
  }
`), h.Fonts.FugazOne, k.default.White),
        _A = f.default.img.attrs({
            src: o.SEASON_TICKET_TICKET_IMAGE
        })(s || (s = x`
  height: 97px;
  margin-bottom: 35px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
`)),
        _B = f.default.div(t || (t = x`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`)),
        _C = f.default.div(u || (u = x`
  font-size: 48px;
  margin-top: -10px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`)),
        _D = f.default.div(v || (v = x`
  text-transform: none;
  font-family: ${ 0 };
  background: rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.9);
  margin-top: 10px;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 6px;
`), h.Fonts.SFPro),
        _E = f.default.div(w || (w = x`
  text-transform: none;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  margin-top: 10px;
`), h.Fonts.SFPro);
}), b.register('Kc2GZ', function(c, d) {
    a(c.exports, 'SEASON_TICKET_TICKET_IMAGE', function() {
        return _e;
    });
    const _e = (0, b('UaUBz0').default)('stickers/season_3_2025.png');
}), b.register('shlm9', function(c, d) {
    a(c.exports, 'SEASON_TICKET_END_DATE', function() {
        return _e;
    });
    const _e = 'August 20th';
}), b.register('BzWye', function(c, d) {
    a(c.exports, 'default', function() {
        return _l;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('Eh2Wh');
    let h, i, j, k = a => a;
    var _l = a => (0, e.jsxs)(_m, {
        children: [
            (0, e.jsx)(_n, {
                children: a.title
            }),
            (0, e.jsx)(_o, {
                children: a.description
            }),
            a.children
        ]
    });
    const _m = f.default.div(h || (h = k``)),
        _n = f.default.div(i || (i = k`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 32px;
`), g.Fonts.FugazOne),
        _o = f.default.div(j || (j = k`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  margin-top: -6px;
  margin-bottom: 20px;
`));
}), b.register('IvnC4', function(c, d) {
    a(c.exports, 'default', function() {
        return _l;
    });
    var e = b('gRbUn'),
        f = b('E2AMI26');
    b('O0Kav');
    var g = b('mFHN/'),
        h = b('hupyL1'),
        i = b('quE27'),
        j = b('LE3I425');
    const k = [{
            icon: 'vip',
            title: 'Exclusive Cosmetics',
            description: `Instantly earn over 15 exclusive cosmetics, only available by purchasing this season's ${ h.SeasonTicketName.singularName }. Cosmetics stay in your Locker after the season ends.`
        },
        {
            icon: 'rise',
            title: 'Increased XP Limit',
            description: 'Weekly XP limit increased to 20,000. Earn more GimBucks and rewards for your learning!'
        },
        {
            icon: 'hammer',
            title: 'Terrains, Props, & Devices',
            description: 'Exclusive access to over 75 terrains, props, and devices to use in your Gimkit Creative maps.'
        },
        {
            icon: 'megaphone',
            title: 'Free Creative Publishing',
            description: `Publish your maps to the world without paying 1,000 ${ j.default.currency }!`
        },
        {
            icon: 'idea',
            title: 'Creative Slots',
            description: 'Store up to 25 maps on your account!'
        },
        {
            icon: 'dog',
            title: 'Play With Friends',
            description: 'Host live games with up to 15 players!',
            show: a => !a || (0, i.isStudent)()
        }
    ];
    var _l = a => (0, e.jsx)(f.default, {
        direction: 'vertical',
        size: 20,
        className: 'maxWidth',
        children: k.filter(b => !b.show || b.show(a.forSelf)).map((a, b) => (0, e.jsx)(g.default, {
            ...a
        }, 'benefit' + b))
    });
}), b.register('mFHN/', function(c, d) {
    a(c.exports, 'default', function() {
        return _r;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('MgONH'),
        h = b('Eh2Wh'),
        i = b('UaUBz0');
    let j, k, l, m, n, o, p, q = a => a;
    var _r = a => (0, e.jsxs)(_s, {
        children: [
            (0, e.jsx)(_t, {
                children: (0, e.jsx)(_u, {
                    src: (0, i.default)(`seasonTicket/${ a.icon }.svg`)
                })
            }),
            (0, e.jsxs)(_v, {
                children: [
                    a.tag ? (0, e.jsx)(_w, {
                        children: a.tag
                    }) : null,
                    (0, e.jsx)(_x, {
                        children: a.title
                    }),
                    (0, e.jsx)(_y, {
                        children: a.description
                    })
                ]
            })
        ]
    });
    const _s = (0, f.default)(g.VerticalCentered).attrs({
            className: 'maxWidth light-shadow'
        })(j || (j = q`
  padding: 28px 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  backdrop-filter: blur(3px);
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`)),
        _t = f.default.div(k || (k = q`
  margin-right: 32px;
`)),
        _u = f.default.img(l || (l = q`
  width: 40px;
`)),
        _v = f.default.div.attrs({
            className: 'flex-column'
        })(m || (m = q`
  align-items: flex-start;
`)),
        _w = f.default.div(n || (n = q`
  font-family: ${ 0 };
  background: rgba(255, 255, 255, 0.1);
  line-height: 1;
  text-transform: uppercase;
  font-size: 12px;
  padding: 6px 14px 4px 14px;
  border-radius: 50px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  margin-bottom: 7px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), h.Fonts.FugazOne),
        _x = f.default.div(o || (o = q`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
`), h.Fonts.FugazOne),
        _y = f.default.div(p || (p = q`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.94);
  margin-top: -1px;
`));
}), b.register('rwUlh', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('BzWye'),
        g = b('mQjmx'),
        h = b('ZZqF2');
    var _i = () => {
        const {
            data: j
        } = (0, g.default)();
        return j && j.length ? (0, e.jsx)(f.default, {
            title: 'Cosmetics',
            description: 'Instantly earn these exclusive cosmetics',
            children: j.map(j => (0, e.jsx)(h.default, {
                cosmetic: j
            }, j.id + '-item'))
        }) : null;
    };
}), b.register('mQjmx', function(c, d) {
    a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('GmO9j'),
        f = b('quE27');
    const g = ['season-ticket-cosmetics'];
    var _h = () => (0, e.useQuery)(g, () => (0, f.requestAsPromise)({
        url: '/api/cosmos/season-ticket'
    }));
}), b.register('ZZqF2', function(c, d) {
    a(c.exports, 'default', function() {
        return _p;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('WrOhL'),
        h = b('q3tb00'),
        i = b('pBG7d0'),
        j = b('quE27'),
        k = b('xI8Nf0'),
        l = b('RoTfF'),
        m = b('z0fxm'),
        n = b('GYoVM'),
        o = b('NmKrj');
    var _p = a => {
        const {
            cosmetic: q
        } = a, [r, s, t] = (0, j.useBoolean)(!1), [u, v, w] = (0, j.useBoolean)(!1), x = f.useMemo(() => q.type === g.CosmeticType.sticker ? 30 : 10, [q.type]);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(h.Container, {
                    onMouseEnter: v,
                    onMouseLeave: w,
                    onClick: s,
                    children: [
                        (0, e.jsx)(h.PreviewArea, {
                            children: (0, e.jsx)(h.PreviewContent, {
                                style: {
                                    transform: `scale(${ u ? 1.1 : 1 })`
                                },
                                children: (0, e.jsx)(k.default, {
                                    image: (0, l.default)({
                                        id: q.id,
                                        type: q.type
                                    }),
                                    background: (0, m.rarityToBackground)(q.rarity),
                                    padding: x
                                })
                            })
                        }),
                        (0, e.jsx)(i.Container, {
                            style: {
                                background: (0, m.rarityToBackground)(q.rarity)
                            },
                            children: (0, e.jsx)(i.Content, {
                                className: 'flex-center',
                                children: (0, e.jsxs)('div', {
                                    className: 'flex-column flex-center',
                                    children: [
                                        (0, e.jsx)(i.Title, {
                                            children: q.name
                                        }),
                                        (0, e.jsx)(i.Description, {
                                            children: (0, n.cosmeticTypeName)(q.type)
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                (0, e.jsx)(o.default, {
                    open: r,
                    close: t,
                    pack: q.packName,
                    ...q,
                    image: (0, l.default)({
                        id: q.id,
                        type: q.type
                    }),
                    callToAction: () => {}
                })
            ]
        });
    };
}), b.register('q3tb00', function(c, d) {
    a(c.exports, 'BORDER_RADIUS', function() {
        return _t;
    }), a(c.exports, 'Container', function() {
        return _v;
    }), a(c.exports, 'PreviewArea', function() {
        return _w;
    }), a(c.exports, 'PreviewContent', function() {
        return _x;
    }), a(c.exports, 'default', function() {
        return _u;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('u4s09'),
        h = b('pBG7d0'),
        i = b('WrOhL'),
        j = b('quE27'),
        k = b('YGjrn'),
        l = b('xI8Nf0'),
        m = b('z0fxm'),
        n = b('Eh2Wh'),
        o = b('4TLhr0');
    let p, q, r, s = a => a;
    const _t = 6;
    var _u = a => {
        const [v, w, x] = (0, j.useBoolean)(!1), [y, z, A] = (0, j.useBoolean)(!1), B = f.useMemo(() => a.type === i.CosmeticType.sticker ? 30 : 10, [a.type]);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(_v, {
                    onMouseEnter: z,
                    onMouseLeave: A,
                    onClick: () => {
                        (0, k.playClickSound)(), w();
                    },
                    children: [
                        (0, e.jsx)(_w, {
                            children: (0, e.jsx)(_x, {
                                style: {
                                    transform: `scale(${ y ? 1.1 : 1 })`
                                },
                                children: (0, e.jsx)(l.default, {
                                    image: a.image,
                                    background: (0, m.rarityToBackground)(a.rarity),
                                    padding: B
                                })
                            })
                        }),
                        (0, e.jsx)(h.default, {
                            name: a.name,
                            type: a.type,
                            rarity: a.rarity,
                            owned: a.owned,
                            cost: a.cost,
                            tag: a.tag
                        })
                    ]
                }),
                (0, e.jsx)(o.default, {
                    open: v,
                    close: x,
                    ...a
                })
            ]
        });
    };
    const _v = g.default.div.attrs({
            className: 'maxWidth medium-shadow'
        })(p || (p = s`
  border-radius: ${ 0 }px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  border: 3px solid;
  font-family: ${ 0 };
  &:last-child {
    margin-bottom: 0px;
  }
`), _t, n.Fonts.FugazOne),
        _w = g.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = s`
  height: 140px;
  overflow: hidden;
`)),
        _x = g.default.div.attrs({
            className: 'maxAll'
        })(r || (r = s`
  transition: transform 0.25s;
`));
}), b.register('pBG7d0', function(c, d) {
    a(c.exports, 'Container', function() {
        return _t;
    }), a(c.exports, 'Content', function() {
        return _u;
    }), a(c.exports, 'Title', function() {
        return _v;
    }), a(c.exports, 'Description', function() {
        return _w;
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('q3tb00'),
        h = b('z0fxm'),
        i = b('GYoVM'),
        j = b('0UnIU'),
        k = b('8KqQ+');
    let l, m, n, o, p, q, r = a => a;
    var _s = a => (0, e.jsx)(_t, {
        style: {
            background: (0, h.rarityToBackground)(a.rarity)
        },
        children: (0, e.jsxs)(_u, {
            children: [
                (0, e.jsxs)('div', {
                    className: 'flex-column',
                    style: {
                        alignItems: 'flex-start'
                    },
                    children: [
                        a.tag ? (0, e.jsx)(_y, {
                            children: a.tag
                        }) : null,
                        (0, e.jsx)(_v, {
                            children: a.name
                        }),
                        (0, e.jsx)(_w, {
                            children: a.owned ? 'Owned' : (0, i.cosmeticTypeName)(a.type)
                        })
                    ]
                }),
                (0, e.jsx)(_x, {
                    children: a.owned ? null : (0, e.jsx)(j.default, {
                        amount: a.cost
                    })
                })
            ]
        })
    });
    const _t = f.default.div(l || (l = r`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  color: ${ 0 };
  text-transform: uppercase;
  border-bottom-left-radius: ${ 0 }px;
  border-bottom-right-radius: ${ 0 }px;
  overflow: hidden;
  line-height: 1;
`), k.default.White, () => g.BORDER_RADIUS, () => g.BORDER_RADIUS),
        _u = f.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(m || (m = r`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 25px;
`)),
        _v = f.default.div(n || (n = r`
  font-size: 24px;
`)),
        _w = f.default.div(o || (o = r`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 6px;
`)),
        _x = f.default.div(p || (p = r`
  margin-left: 10px;
`)),
        _y = f.default.div(q || (q = r`
  background: #00897b;
  padding: 11px;
  border-radius: 7px;
  line-height: 1;
  margin-bottom: 11px;
  font-size: 13px;
  text-transform: uppercase;
`));
}), b.register('xI8Nf0', function(c, d) {
    a(c.exports, 'default', function() {
        return _k;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('Z4bmH0');
    let h, i, j = a => a;
    var _k = a => {
        const [l, m] = (0, g.useInViewRef)();
        return (0, e.jsx)(_l, {
            ref: l,
            style: {
                padding: a.padding,
                background: a.background
            },
            children: m ? (0, e.jsx)(_m, {
                draggable: !1,
                src: a.image
            }) : null
        });
    };
    const _l = f.default.div.attrs({
            className: 'maxAll flex-center'
        })(h || (h = j`
  background: rgb(255, 255, 255);
  overflow: hidden;
`)),
        _m = f.default.img(i || (i = j`
  max-width: 100%;
  max-height: 100%;
`));
}), b.register('Z4bmH0', function(c, d) {
    a(c.exports, 'useInViewRef', function() {
        return _g;
    });
    var e = b('O0Kav'),
        f = {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: [
                0,
                1
            ]
        };

    function _g(h, i) {
        void 0 === h && (h = function() {}), void 0 === i && (i = f);
        var j = i.root,
            k = void 0 === j ? null : j,
            l = i.rootMargin,
            m = i.threshold,
            n = (0, e.useState)(null),
            o = n[0],
            p = n[1],
            q = (0, e.useState)(!1),
            r = q[0],
            s = q[1];
        (0, e.useEffect)(function() {
            if (o) {
                var t = new IntersectionObserver(function(u, v) {
                    u.forEach(function(w) {
                        var x = w.isIntersecting;
                        return s(x);
                    }), h(u, v);
                }, i);
                return t.observe(o),
                    function() {
                        t.disconnect();
                    };
            }
        }, [
            o,
            h,
            k,
            l,
            m
        ]);
        var t = (0, e.useCallback)(function(u) {
            p(u);
        }, []);
        return [
            t,
            r
        ];
    }
}), b.register('4TLhr0', function(c, d) {
    a(c.exports, 'default', function() {
        return _p;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('NmKrj'),
        h = b('RoTfF'),
        i = b('0UnIU'),
        j = b('quE27'),
        k = b('3jaMj'),
        l = b('UaUBz0'),
        m = b('S78lq0'),
        n = b('Y8VMd'),
        o = b('IMf/b4');
    var _p = a => {
        const [q, r] = f.useState(!1), [s, t] = f.useState(!1), {
            id: u,
            name: v,
            rarity: w,
            type: x,
            description: y,
            style: z
        } = a, A = a.owned || a.currentCurrency < a.cost, B = () => {
            A || q || (r(!0), (0, j.request)({
                url: '/api/cosmos/purchase-item',
                data: {
                    cosmeticId: a.id
                },
                success: () => {
                    (0, o.AnalyticsTrackEvent)({
                        event: 'cosmetic_purchased',
                        properties: {
                            id: u,
                            name: v,
                            type: x
                        }
                    }), (0, k.playSound)({
                        path: (0, l.default)('cosmos/cosmeticPurchased.mp3'),
                        volume: 0.6
                    }), (0, n.invalidateCosmosBasics)(), (0, m.refetchCosmosItemShop)(), t(!0);
                },
                error: q => {
                    (0, j.throwMessageError)({
                        e: q,
                        default: {
                            title: 'Error purchasing item.',
                            content: 'Please try again later.'
                        }
                    }), a.close();
                }
            }));
        };
        return (0, e.jsx)(g.default, {
            open: a.open,
            close: a.close,
            id: u,
            name: v,
            image: (0, h.default)({
                id: u,
                type: x
            }),
            rarity: w,
            type: x,
            description: y,
            style: z,
            purchased: s,
            callToAction: () => ({
                text: a.owned ? 'Owned' : (0, e.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        lineHeight: 1,
                        padding: '2px 0px'
                    },
                    children: [
                        (0, e.jsx)('div', {
                            style: {
                                marginTop: 2
                            },
                            children: 'Purchase'
                        }),
                        (0, e.jsx)('div', {
                            style: {
                                margin: '0px 7px'
                            },
                            children: '-'
                        }),
                        (0, e.jsx)(i.default, {
                            amount: a.cost,
                            size: 16,
                            grayscale: A
                        })
                    ]
                }),
                ariaLabel: a.owned ? 'Owned' : 'Purchase',
                disabled: A,
                onClick: B
            }),
            blockCharacterPreview: a.blockCharacterPreview,
            onCosmeticSelectionChanged: a.onCosmeticSelectionChanged
        });
    };
}), b.register('3jaMj', function(c, d) {
    a(c.exports, 'playSound', function() {
        return _g;
    }), a(c.exports, 'preloadSound', function() {
        return _i;
    });
    var e = b('6yrsF');
    const f = new Map(),
        _g = a => {
            const h = Date.now();
            if (!a.path)
                return null;
            const i = a.forceCreateNewSound ? void 0 : f.get(a.path),
                j = i || new(0, e.Howl)({
                    src: a.path
                });
            if (j.volume(a.volume), i)
                a.delay ? setTimeout(() => {
                    j.play();
                }, a.delay) : j.play();
            else {
                const k = () => {
                    if (f.get(a.path) || a.forceCreateNewSound || f.set(a.path, j), a.delay) {
                        const l = h + a.delay,
                            m = Date.now();
                        m > l ? j.play() : setTimeout(() => {
                            j.play();
                        }, l - m);
                    } else
                        j.play();
                };
                'loaded' === j.state() ? k() : j.once('load', k);
            }
            return j;
        },
        h = new Set(),
        _i = a => {
            const {
                path: j
            } = a;
            if (f.get(j))
                return;
            if (h.has(j))
                return;
            h.add(j);
            const k = new(0, e.Howl)({
                src: j
            });
            k.once('load', () => {
                h.delete(j), f.set(j, k);
            });
        };
}), b.register('S78lq0', function(c, d) {
    a(c.exports, 'removeCosmosItemShop', function() {
        return _i;
    }), a(c.exports, 'refetchCosmosItemShop', function() {
        return _j;
    }), a(c.exports, 'default', function() {
        return _k;
    });
    var e = b('GmO9j'),
        f = b('9IJbB'),
        g = b('quE27');
    const h = ['cosmos-item-shop'],
        _i = () => {
            f.default.removeQueries(h);
        },
        _j = () => f.default.refetchQueries(h);
    var _k = () => (0, e.useQuery)(h, () => (0, g.requestAsPromise)({
        url: '/api/cosmos/shop'
    }));
}), b.register('IMf/b4', function(c, d) {
    a(c.exports, 'AnalyticsTrackEvent', function() {
        return _i;
    });
    var e = b('gK+6L'),
        f = b('quE27'),
        g = b('95m0H'),
        h = b('50Ts4');
    const _i = a => {
        var j, k, l;
        if ((window.gtag && !(null === (j = a.blockedSource) || void 0 === j ? void 0 : j.google) && window.gtag('event', a.event, a.properties), g.AnalyticsFlags.educatorOnly) && (null === (l = (0, f.getUser)()) || void 0 === l ? void 0 : l.accountType) !== e.default.educator)
            return;
        (null === (k = a.blockedSource) || void 0 === k ? void 0 : k.posthog) || (0, h.TrackPostHogEvent)({
            event: a.event,
            properties: a.properties,
            force: a.forcePostHog
        });
    };
}), b.register('ySfF+', function(c, d) {
    a(c.exports, 'default', function() {
        return _s;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('MgONH'),
        h = b('Eh2Wh'),
        i = b('aPZ+w'),
        j = b('t52Ep'),
        k = b('FB7HT26'),
        l = b('nKuOQ'),
        m = b('hupyL1'),
        n = b('B/GC10'),
        o = b('shlm9');
    let p, q, r = a => a;
    var _s = a => (0, n.OwnsSeasonTicket)() ? null : (0, e.jsxs)(_t, {
        children: [
            (0, e.jsx)(k.default, {
                to: l.SEASON_TICKET_BASE,
                style: {
                    textDecoration: 'none'
                },
                target: a.pageMode ? void 0 : '_blank',
                children: (0, e.jsxs)(i.default, {
                    style: {
                        fontFamily: h.Fonts.SFPro,
                        marginTop: 15
                    },
                    size: 'large',
                    customFontWeight: h.FontWeights.Bold,
                    customColor: '#1677ff',
                    ariaLabel: `Purchase ${ m.SeasonTicketName.name }`,
                    children: [
                        (0, e.jsx)(j.default, {
                            name: 'fal fa-sparkles',
                            style: {
                                marginRight: 10
                            }
                        }),
                        'Purchase ',
                        m.SeasonTicketName.name
                    ]
                })
            }),
            (0, e.jsxs)(_u, {
                children: [
                    'Season ends ',
                    o.SEASON_TICKET_END_DATE,
                    '.'
                ]
            })
        ]
    });
    const _t = (0, f.default)(g.CenteredColumn).attrs({
            className: 'maxWidth'
        })(p || (p = r`
  padding: 6px 0px;
`)),
        _u = f.default.div(q || (q = r`
  text-transform: none;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin-top: 10px;
`), h.Fonts.SFPro);
}), b.register('9rEO42', function(c, d) {
    Object.defineProperty(c.exports, '__esModule', {
        value: !0
    });
    var e, f = function() {
            function g(h, i) {
                for (var j = 0; j < i.length; j++) {
                    var k = i[j];
                    k.enumerable = k.enumerable || !1, k.configurable = !0, 'value' in k && (k.writable = !0), Object.defineProperty(h, k.key, k);
                }
            }
            return function(h, i, j) {
                return i && g(h.prototype, i), j && g(h, j), h;
            };
        }(),
        g = b('O0Kav'),
        h = (e = g) && e.__esModule ? e : {
            default: e
        },
        i = b('izSQB0');
    var j = {
            position: 'relative'
        },
        k = function(l) {
            function m(n) {
                ! function(o, p) {
                    if (!(o instanceof p))
                        throw new TypeError('Cannot call a class as a function');
                }(this, m);
                var o = function(p, q) {
                    if (!p)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !q || 'object' != typeof q && 'function' != typeof q ? p : q;
                }(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, n));
                return o.setRef = o.setRef.bind(o), o;
            }
            return function(n, o) {
                if ('function' != typeof o && null !== o)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof o);
                n.prototype = Object.create(o && o.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(n, o) : n.__proto__ = o);
            }(m, l), f(m, [{
                    key: 'componentWillReceiveProps',
                    value: function(n) {
                        n.active && !this.props.active && (0, i.confetti)(this.container, n.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(n) {
                        this.container = n;
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return h.default.createElement('div', {
                            className: this.props.className,
                            style: j,
                            ref: this.setRef
                        });
                    }
                }
            ]), m;
        }(g.Component);
    c.exports.default = k;
}), b.register('izSQB0', function(c, d) {
    Object.defineProperty(c.exports, '__esModule', {
        value: !0
    }), c.exports.confetti = function(e) {
        var f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            g = Object.assign({}, _l, f),
            h = g.elementCount,
            i = g.colors,
            j = g.width,
            k = g.height,
            l = g.angle,
            m = g.spread,
            n = g.startVelocity,
            o = g.decay,
            p = g.duration,
            q = g.random,
            r = _e(e, h, i, j, k),
            s = r.map(function(t) {
                return {
                    element: t,
                    physics: _i(l, m, n, q)
                };
            });
        return _j(e, s, o, p);
    };

    function _e(f, g, h, _i, _j) {
        return Array.from({
            length: g
        }).map(function(k, _l) {
            var m = document.createElement('div'),
                n = h[_l % h.length];
            return m.style['background-color'] = n, m.style.width = _i, m.style.height = _j, m.style.position = 'absolute', m.style.willChange = 'transform, opacity', f.appendChild(m), m;
        });
    }

    function f(g, h, i, j) {
        var k = g * (Math.PI / 180),
            l = h * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * j(),
            wobbleSpeed: 0.1 + 0.1 * j(),
            velocity: 0.5 * i + j() * i,
            angle2D: -k + (0.5 * l - j() * l),
            angle3D: -Math.PI / 4 + j() * (Math.PI / 2),
            tiltAngle: j() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * j()
        };
    }

    function g(h, i, j, k) {
        var l = void 0;
        return new Promise(function(m) {
            requestAnimationFrame(function _w(n) {
                l || (l = n);
                var o = l === n ? 0 : (n - l) / k;
                i.forEach(function(p) {
                    return function(q, r, s) {
                        q.physics.x += Math.cos(q.physics.angle2D) * q.physics.velocity, q.physics.y += Math.sin(q.physics.angle2D) * q.physics.velocity, q.physics.z += Math.sin(q.physics.angle3D) * q.physics.velocity, q.physics.wobble += q.physics.wobbleSpeed, q.physics.velocity *= s, q.physics.y += 3, q.physics.tiltAngle += q.physics.tiltAngleSpeed;
                        var t = q.physics,
                            u = t.x,
                            v = t.y,
                            _w = t.tiltAngle,
                            x = t.wobble,
                            y = 'translate3d(' + (u + 10 * Math.cos(x)) + 'px, ' + (v + 10 * Math.sin(x)) + 'px, 0) rotate3d(1, 1, 1, ' + _w + 'rad)';
                        q.element.style.transform = y, q.element.style.opacity = 1 - r;
                    }(p, o, j);
                }), n - l < k ? requestAnimationFrame(i) : (i.forEach(function(p) {
                    if (p.element.parentNode === h)
                        return h.removeChild(p.element);
                }), m());
            });
        });
    }
    var h = {
        angle: 90,
        decay: 0.9,
        spread: 45,
        startVelocity: 45,
        elementCount: 50,
        width: '10px',
        height: '10px',
        colors: [
            '#a864fd',
            '#29cdff',
            '#78ff44',
            '#ff718d',
            '#fdff6a'
        ],
        duration: 3000,
        random: Math.random
    };
});