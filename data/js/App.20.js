function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('9tTWw', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _i(b.exports, 'default', function() {
        return _m;
    });
    var e = a('0hzx+');
    a('LEQ5w');
    var f = a('1wJE8'),
        g = a('gXYJY'),
        h = a('C+hiJ'),
        i = a('cvto726'),
        j = a('x1Kah'),
        k = a('eKTkz'),
        l = a('I1mnb');
    var _m = _i => (0, e.jsx)(l.LimitedWidth, {
        children: (0, e.jsxs)(i.default, {
            direction: 'vertical',
            size: 30,
            className: 'maxWidth',
            children: [
                (0, e.jsx)(f.default, {
                    pageMode: _i.pageMode
                }),
                (0, e.jsx)(g.default, {
                    title: 'Benefits',
                    description: 'Access these exclusive benefits all season long',
                    children: (0, e.jsx)(h.default, {
                        forSelf: !0
                    })
                }),
                (0, e.jsx)(j.default, {}),
                (0, e.jsx)(k.default, {
                    pageMode: _i.pageMode
                })
            ]
        })
    });
}), a.register('1wJE8', function(b, c) {
    _i(b.exports, 'default', function() {
        return _x;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('0HHAH'),
        g = a('b5kvC'),
        h = a('led8j'),
        i = a('9R7cy'),
        j = a('sHRDd'),
        k = a('2HvvA11'),
        l = a('gs4MT'),
        m = a('l0C72'),
        n = a('1Doax'),
        o = a('k46wk1'),
        p = a('+xZ86');
    let q, r, s, t, u, v, w = _i => _i;
    var _x = _i => (0, d.jsxs)(_y, {
        children: [
            (0, d.jsx)(_z, {}),
            (0, d.jsxs)(_A, {
                children: [
                    m.SeasonTicketSeason.seasonName,
                    ' ',
                    m.SeasonTicketSeason.seasonNumber
                ]
            }),
            (0, d.jsx)(_B, {
                children: m.SeasonTicketName.name
            }),
            (0, o.OwnsSeasonTicket)() ? (0, d.jsxs)(_C, {
                children: [
                    'You already own this ',
                    m.SeasonTicketName.name,
                    '. Thanks so much for your support!'
                ]
            }) : (0, d.jsx)(k.default, {
                to: l.SEASON_TICKET_BASE,
                style: {
                    textDecoration: 'none'
                },
                target: _i.pageMode ? void 0 : '_blank',
                children: (0, d.jsxs)(h.default, {
                    style: {
                        fontFamily: g.Fonts.SFPro,
                        marginTop: 15
                    },
                    customFontWeight: g.FontWeights.Bold,
                    customColor: '#1677ff',
                    ariaLabel: `Purchase ${ m.SeasonTicketName.name }`,
                    children: [
                        (0, d.jsx)(i.default, {
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
            (0, d.jsxs)(_D, {
                children: [
                    'Season ends ',
                    p.SEASON_TICKET_END_DATE,
                    '.'
                ]
            })
        ]
    });
    const _y = (0, e.default)(f.CenteredColumn).attrs({
            className: 'maxWidth medium-shadow'
        })(q || (q = w`
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
`), g.Fonts.FugazOne, j.default.White),
        _z = e.default.img.attrs({
            src: n.SEASON_TICKET_TICKET_IMAGE
        })(r || (r = w`
  height: 97px;
  margin-bottom: 35px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
`)),
        _A = e.default.div(s || (s = w`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`)),
        _B = e.default.div(t || (t = w`
  font-size: 48px;
  margin-top: -10px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`)),
        _C = e.default.div(u || (u = w`
  text-transform: none;
  font-family: ${ 0 };
  background: rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.9);
  margin-top: 10px;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 6px;
`), g.Fonts.SFPro),
        _D = e.default.div(v || (v = w`
  text-transform: none;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  margin-top: 10px;
`), g.Fonts.SFPro);
}), a.register('1Doax', function(b, c) {
    _i(b.exports, 'SEASON_TICKET_TICKET_IMAGE', function() {
        return _d;
    });
    const _d = (0, a('2Xvuf').default)('stickers/season_3_2025.png');
}), a.register('+xZ86', function(b, c) {
    _i(b.exports, 'SEASON_TICKET_END_DATE', function() {
        return _d;
    });
    const _d = 'August 20th';
}), a.register('gXYJY', function(b, c) {
    _i(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC');
    let g, h, i, j = _i => _i;
    var _k = _i => (0, d.jsxs)(_l, {
        children: [
            (0, d.jsx)(_m, {
                children: _i.title
            }),
            (0, d.jsx)(_n, {
                children: _i.description
            }),
            _i.children
        ]
    });
    const _l = e.default.div(g || (g = j``)),
        _m = e.default.div(h || (h = j`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 32px;
`), f.Fonts.FugazOne),
        _n = e.default.div(i || (i = j`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  margin-top: -6px;
  margin-bottom: 20px;
`));
}), a.register('C+hiJ', function(b, c) {
    _i(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('cvto726');
    a('LEQ5w');
    var f = a('QYnkY'),
        g = a('l0C72'),
        h = a('PMl60'),
        i = a('Mmd0d21');
    const j = [{
            icon: 'vip',
            title: 'Exclusive Cosmetics',
            description: `Instantly earn over 15 exclusive cosmetics, only available by purchasing this season's ${ g.SeasonTicketName.singularName }. Cosmetics stay in your Locker after the season ends.`
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
            description: `Publish your maps to the world without paying 1,000 ${ i.default.currency }!`
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
            show: _i => !_i || (0, h.isStudent)()
        }
    ];
    var _k = _i => (0, d.jsx)(e.default, {
        direction: 'vertical',
        size: 20,
        className: 'maxWidth',
        children: j.filter(a => !a.show || a.show(_i.forSelf)).map((_i, a) => (0, d.jsx)(f.default, {
            ..._i
        }, 'benefit' + a))
    });
}), a.register('QYnkY', function(b, c) {
    _i(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('0HHAH'),
        g = a('b5kvC'),
        h = a('2Xvuf');
    let i, j, k, l, m, n, o, p = _i => _i;
    var _q = _i => (0, d.jsxs)(_r, {
        children: [
            (0, d.jsx)(_s, {
                children: (0, d.jsx)(_t, {
                    src: (0, h.default)(`seasonTicket/${ _i.icon }.svg`)
                })
            }),
            (0, d.jsxs)(_u, {
                children: [
                    _i.tag ? (0, d.jsx)(_v, {
                        children: _i.tag
                    }) : null,
                    (0, d.jsx)(_w, {
                        children: _i.title
                    }),
                    (0, d.jsx)(_x, {
                        children: _i.description
                    })
                ]
            })
        ]
    });
    const _r = (0, e.default)(f.VerticalCentered).attrs({
            className: 'maxWidth light-shadow'
        })(i || (i = p`
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
        _s = e.default.div(j || (j = p`
  margin-right: 32px;
`)),
        _t = e.default.img(k || (k = p`
  width: 40px;
`)),
        _u = e.default.div.attrs({
            className: 'flex-column'
        })(l || (l = p`
  align-items: flex-start;
`)),
        _v = e.default.div(m || (m = p`
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
`), g.Fonts.FugazOne),
        _w = e.default.div(n || (n = p`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
`), g.Fonts.FugazOne),
        _x = e.default.div(o || (o = p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.94);
  margin-top: -1px;
`));
}), a.register('x1Kah', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('gXYJY'),
        f = a('rkyR0'),
        g = a('1aG1x');
    var _h = () => {
        const {
            data: _i
        } = (0, f.default)();
        return _i && _i.length ? (0, d.jsx)(e.default, {
            title: 'Cosmetics',
            description: 'Instantly earn these exclusive cosmetics',
            children: _i.map(_i => (0, d.jsx)(g.default, {
                cosmetic: _i
            }, _i.id + '-item'))
        }) : null;
    };
}), a.register('rkyR0', function(b, c) {
    _g(b.exports, 'default', function() {
        return _g;
    });
    var d = a('UapK50'),
        e = a('PMl60');
    const f = ['season-ticket-cosmetics'];
    var _g = () => (0, d.useQuery)(f, () => (0, e.requestAsPromise)({
        url: '/api/cosmos/season-ticket'
    }));
}), a.register('1aG1x', function(b, c) {
    _g(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('RxgVI'),
        g = a('PVy3b0'),
        h = a('7UQCN0'),
        i = a('PMl60'),
        j = a('HfkRh0'),
        k = a('9HSHh'),
        l = a('54XAm'),
        m = a('D50le'),
        n = a('OzXoU');
    var _o = _g => {
        const {
            cosmetic: p
        } = _g, [q, r, s] = (0, i.useBoolean)(!1), [t, u, v] = (0, i.useBoolean)(!1), w = e.useMemo(() => p.type === f.CosmeticType.sticker ? 30 : 10, [p.type]);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(g.Container, {
                    onMouseEnter: u,
                    onMouseLeave: v,
                    onClick: r,
                    children: [
                        (0, d.jsx)(g.PreviewArea, {
                            children: (0, d.jsx)(g.PreviewContent, {
                                style: {
                                    transform: `scale(${ t ? 1.1 : 1 })`
                                },
                                children: (0, d.jsx)(j.default, {
                                    image: (0, k.default)({
                                        id: p.id,
                                        type: p.type
                                    }),
                                    background: (0, l.rarityToBackground)(p.rarity),
                                    padding: w
                                })
                            })
                        }),
                        (0, d.jsx)(h.Container, {
                            style: {
                                background: (0, l.rarityToBackground)(p.rarity)
                            },
                            children: (0, d.jsx)(h.Content, {
                                className: 'flex-center',
                                children: (0, d.jsxs)('div', {
                                    className: 'flex-column flex-center',
                                    children: [
                                        (0, d.jsx)(h.Title, {
                                            children: p.name
                                        }),
                                        (0, d.jsx)(h.Description, {
                                            children: (0, m.cosmeticTypeName)(p.type)
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                (0, d.jsx)(n.default, {
                    open: q,
                    close: s,
                    pack: p.packName,
                    ...p,
                    image: (0, k.default)({
                        id: p.id,
                        type: p.type
                    }),
                    callToAction: () => {}
                })
            ]
        });
    };
}), a.register('PVy3b0', function(b, c) {
    _g(b.exports, 'BORDER_RADIUS', function() {
        return _s;
    }), _g(b.exports, 'Container', function() {
        return _u;
    }), _g(b.exports, 'PreviewArea', function() {
        return _v;
    }), _g(b.exports, 'PreviewContent', function() {
        return _w;
    }), _g(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('7UQCN0'),
        h = a('RxgVI'),
        i = a('PMl60'),
        j = a('bnNtv'),
        k = a('HfkRh0'),
        l = a('54XAm'),
        m = a('b5kvC'),
        n = a('iEovJ');
    let o, p, q, r = _g => _g;
    const _s = 6;
    var _t = _g => {
        const [u, v, w] = (0, i.useBoolean)(!1), [x, y, z] = (0, i.useBoolean)(!1), A = e.useMemo(() => _g.type === h.CosmeticType.sticker ? 30 : 10, [_g.type]);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_u, {
                    onMouseEnter: y,
                    onMouseLeave: z,
                    onClick: () => {
                        (0, j.playClickSound)(), v();
                    },
                    children: [
                        (0, d.jsx)(_v, {
                            children: (0, d.jsx)(_w, {
                                style: {
                                    transform: `scale(${ x ? 1.1 : 1 })`
                                },
                                children: (0, d.jsx)(k.default, {
                                    image: _g.image,
                                    background: (0, l.rarityToBackground)(_g.rarity),
                                    padding: A
                                })
                            })
                        }),
                        (0, d.jsx)(g.default, {
                            name: _g.name,
                            type: _g.type,
                            rarity: _g.rarity,
                            owned: _g.owned,
                            cost: _g.cost,
                            tag: _g.tag
                        })
                    ]
                }),
                (0, d.jsx)(n.default, {
                    open: u,
                    close: w,
                    ..._g
                })
            ]
        });
    };
    const _u = f.default.div.attrs({
            className: 'maxWidth medium-shadow'
        })(o || (o = r`
  border-radius: ${ 0 }px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  border: 3px solid;
  font-family: ${ 0 };
  &:last-child {
    margin-bottom: 0px;
  }
`), _s, m.Fonts.FugazOne),
        _v = f.default.div.attrs({
            className: 'maxWidth'
        })(p || (p = r`
  height: 140px;
  overflow: hidden;
`)),
        _w = f.default.div.attrs({
            className: 'maxAll'
        })(q || (q = r`
  transition: transform 0.25s;
`));
}), a.register('7UQCN0', function(b, c) {
    _g(b.exports, 'Container', function() {
        return _s;
    }), _g(b.exports, 'Content', function() {
        return _t;
    }), _g(b.exports, 'Title', function() {
        return _u;
    }), _g(b.exports, 'Description', function() {
        return _v;
    }), _g(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('PVy3b0'),
        g = a('54XAm'),
        h = a('D50le'),
        i = a('koZ//'),
        j = a('sHRDd');
    let k, l, m, n, o, p, q = _g => _g;
    var _r = _g => (0, d.jsx)(_s, {
        style: {
            background: (0, g.rarityToBackground)(_g.rarity)
        },
        children: (0, d.jsxs)(_t, {
            children: [
                (0, d.jsxs)('div', {
                    className: 'flex-column',
                    style: {
                        alignItems: 'flex-start'
                    },
                    children: [
                        _g.tag ? (0, d.jsx)(_x, {
                            children: _g.tag
                        }) : null,
                        (0, d.jsx)(_u, {
                            children: _g.name
                        }),
                        (0, d.jsx)(_v, {
                            children: _g.owned ? 'Owned' : (0, h.cosmeticTypeName)(_g.type)
                        })
                    ]
                }),
                (0, d.jsx)(_w, {
                    children: _g.owned ? null : (0, d.jsx)(i.default, {
                        amount: _g.cost
                    })
                })
            ]
        })
    });
    const _s = e.default.div(k || (k = q`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  color: ${ 0 };
  text-transform: uppercase;
  border-bottom-left-radius: ${ 0 }px;
  border-bottom-right-radius: ${ 0 }px;
  overflow: hidden;
  line-height: 1;
`), j.default.White, () => f.BORDER_RADIUS, () => f.BORDER_RADIUS),
        _t = e.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(l || (l = q`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 25px;
`)),
        _u = e.default.div(m || (m = q`
  font-size: 24px;
`)),
        _v = e.default.div(n || (n = q`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 6px;
`)),
        _w = e.default.div(o || (o = q`
  margin-left: 10px;
`)),
        _x = e.default.div(p || (p = q`
  background: #00897b;
  padding: 11px;
  border-radius: 7px;
  line-height: 1;
  margin-bottom: 11px;
  font-size: 13px;
  text-transform: uppercase;
`));
}), a.register('HfkRh0', function(b, c) {
    _g(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('8ROMQ0');
    let g, h, i = _g => _g;
    var _j = _g => {
        const [k, l] = (0, f.useInViewRef)();
        return (0, d.jsx)(_k, {
            ref: k,
            style: {
                padding: _g.padding,
                background: _g.background
            },
            children: l ? (0, d.jsx)(_l, {
                draggable: !1,
                src: _g.image
            }) : null
        });
    };
    const _k = e.default.div.attrs({
            className: 'maxAll flex-center'
        })(g || (g = i`
  background: rgb(255, 255, 255);
  overflow: hidden;
`)),
        _l = e.default.img(h || (h = i`
  max-width: 100%;
  max-height: 100%;
`));
}), a.register('8ROMQ0', function(b, c) {
    _g(b.exports, 'useInViewRef', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: [
                0,
                1
            ]
        };

    function _f(_g, h) {
        void 0 === _g && (_g = function() {}), void 0 === h && (h = e);
        var i = h.root,
            j = void 0 === i ? null : i,
            k = h.rootMargin,
            l = h.threshold,
            m = (0, d.useState)(null),
            n = m[0],
            o = m[1],
            p = (0, d.useState)(!1),
            q = p[0],
            r = p[1];
        (0, d.useEffect)(function() {
            if (n) {
                var s = new IntersectionObserver(function(t, u) {
                    t.forEach(function(v) {
                        var w = v.isIntersecting;
                        return r(w);
                    }), _g(t, u);
                }, h);
                return s.observe(n),
                    function() {
                        s.disconnect();
                    };
            }
        }, [
            n,
            _g,
            j,
            k,
            l
        ]);
        var s = (0, d.useCallback)(function(t) {
            o(t);
        }, []);
        return [
            s,
            q
        ];
    }
}), a.register('iEovJ', function(b, c) {
    _b(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('OzXoU'),
        g = a('9HSHh'),
        h = a('koZ//'),
        i = a('PMl60'),
        j = a('07pQo'),
        k = a('2Xvuf'),
        l = a('9PNFm'),
        m = a('AX3TM'),
        n = a('Pq0g9');
    var _o = _b => {
        const [p, q] = e.useState(!1), [r, s] = e.useState(!1), {
            id: t,
            name: u,
            rarity: v,
            type: w,
            description: x,
            style: y
        } = _b, z = _b.owned || _b.currentCurrency < _b.cost, A = () => {
            z || p || (q(!0), (0, i.request)({
                url: '/api/cosmos/purchase-item',
                data: {
                    cosmeticId: _b.id
                },
                success: () => {
                    (0, n.AnalyticsTrackEvent)({
                        event: 'cosmetic_purchased',
                        properties: {
                            id: t,
                            name: u,
                            type: w
                        }
                    }), (0, j.playSound)({
                        path: (0, k.default)('cosmos/cosmeticPurchased.mp3'),
                        volume: 0.6
                    }), (0, m.invalidateCosmosBasics)(), (0, l.refetchCosmosItemShop)(), s(!0);
                },
                error: p => {
                    (0, i.throwMessageError)({
                        e: p,
                        default: {
                            title: 'Error purchasing item.',
                            content: 'Please try again later.'
                        }
                    }), _b.close();
                }
            }));
        };
        return (0, d.jsx)(f.default, {
            open: _b.open,
            close: _b.close,
            id: t,
            name: u,
            image: (0, g.default)({
                id: t,
                type: w
            }),
            rarity: v,
            type: w,
            description: x,
            style: y,
            purchased: r,
            callToAction: () => ({
                text: _b.owned ? 'Owned' : (0, d.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        lineHeight: 1,
                        padding: '2px 0px'
                    },
                    children: [
                        (0, d.jsx)('div', {
                            style: {
                                marginTop: 2
                            },
                            children: 'Purchase'
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                margin: '0px 7px'
                            },
                            children: '-'
                        }),
                        (0, d.jsx)(h.default, {
                            amount: _b.cost,
                            size: 16,
                            grayscale: z
                        })
                    ]
                }),
                ariaLabel: _b.owned ? 'Owned' : 'Purchase',
                disabled: z,
                onClick: A
            }),
            blockCharacterPreview: _b.blockCharacterPreview,
            onCosmeticSelectionChanged: _b.onCosmeticSelectionChanged
        });
    };
}), a.register('07pQo', function(b, c) {
    _b(b.exports, 'playSound', function() {
        return _f;
    }), _b(b.exports, 'preloadSound', function() {
        return _h;
    });
    var d = a('6yrsF');
    const e = new Map(),
        _f = _b => {
            const g = Date.now();
            if (!_b.path)
                return null;
            const h = _b.forceCreateNewSound ? void 0 : e.get(_b.path),
                i = h || new(0, d.Howl)({
                    src: _b.path
                });
            if (i.volume(_b.volume), h)
                _b.delay ? setTimeout(() => {
                    i.play();
                }, _b.delay) : i.play();
            else {
                const j = () => {
                    if (e.get(_b.path) || _b.forceCreateNewSound || e.set(_b.path, i), _b.delay) {
                        const k = g + _b.delay,
                            l = Date.now();
                        l > k ? i.play() : setTimeout(() => {
                            i.play();
                        }, k - l);
                    } else
                        i.play();
                };
                'loaded' === i.state() ? j() : i.once('load', j);
            }
            return i;
        },
        g = new Set(),
        _h = _b => {
            const {
                path: i
            } = _b;
            if (e.get(i))
                return;
            if (g.has(i))
                return;
            g.add(i);
            const j = new(0, d.Howl)({
                src: i
            });
            j.once('load', () => {
                g.delete(i), e.set(i, j);
            });
        };
}), a.register('9PNFm', function(b, c) {
    _b(b.exports, 'removeCosmosItemShop', function() {
        return _h;
    }), _b(b.exports, 'refetchCosmosItemShop', function() {
        return _i;
    }), _b(b.exports, 'default', function() {
        return _j;
    });
    var d = a('UapK50'),
        e = a('ACpZs'),
        f = a('PMl60');
    const g = ['cosmos-item-shop'],
        _h = () => {
            e.default.removeQueries(g);
        },
        _i = () => e.default.refetchQueries(g);
    var _j = () => (0, d.useQuery)(g, () => (0, f.requestAsPromise)({
        url: '/api/cosmos/shop'
    }));
}), a.register('Pq0g9', function(b, c) {
    _b(b.exports, 'AnalyticsTrackEvent', function() {
        return _h;
    });
    var d = a('e7pFf'),
        e = a('PMl60'),
        f = a('Td6aM'),
        g = a('J3ZQI');
    const _h = _b => {
        var i, j, k;
        if ((window.gtag && !(null === (i = _b.blockedSource) || void 0 === i ? void 0 : i.google) && window.gtag('event', _b.event, _b.properties), f.AnalyticsFlags.educatorOnly) && (null === (k = (0, e.getUser)()) || void 0 === k ? void 0 : k.accountType) !== d.default.educator)
            return;
        (null === (j = _b.blockedSource) || void 0 === j ? void 0 : j.posthog) || (0, g.TrackPostHogEvent)({
            event: _b.event,
            properties: _b.properties,
            force: _b.forcePostHog
        });
    };
}), a.register('eKTkz', function(b, c) {
    _b(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('0HHAH'),
        g = a('b5kvC'),
        h = a('led8j'),
        i = a('9R7cy'),
        j = a('2HvvA11'),
        k = a('gs4MT'),
        l = a('l0C72'),
        m = a('k46wk1'),
        n = a('+xZ86');
    let o, p, q = _b => _b;
    var _r = _b => (0, m.OwnsSeasonTicket)() ? null : (0, d.jsxs)(_s, {
        children: [
            (0, d.jsx)(j.default, {
                to: k.SEASON_TICKET_BASE,
                style: {
                    textDecoration: 'none'
                },
                target: _b.pageMode ? void 0 : '_blank',
                children: (0, d.jsxs)(h.default, {
                    style: {
                        fontFamily: g.Fonts.SFPro,
                        marginTop: 15
                    },
                    size: 'large',
                    customFontWeight: g.FontWeights.Bold,
                    customColor: '#1677ff',
                    ariaLabel: `Purchase ${ l.SeasonTicketName.name }`,
                    children: [
                        (0, d.jsx)(i.default, {
                            name: 'fal fa-sparkles',
                            style: {
                                marginRight: 10
                            }
                        }),
                        'Purchase ',
                        l.SeasonTicketName.name
                    ]
                })
            }),
            (0, d.jsxs)(_t, {
                children: [
                    'Season ends ',
                    n.SEASON_TICKET_END_DATE,
                    '.'
                ]
            })
        ]
    });
    const _s = (0, e.default)(f.CenteredColumn).attrs({
            className: 'maxWidth'
        })(o || (o = q`
  padding: 6px 0px;
`)),
        _t = e.default.div(p || (p = q`
  text-transform: none;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin-top: 10px;
`), g.Fonts.SFPro);
}), a.register('FgYUV', function(_b, c) {
    Object.defineProperty(_b.exports, '__esModule', {
        value: !0
    });
    var d, e = function() {
            function f(g, h) {
                for (var i = 0; i < h.length; i++) {
                    var j = h[i];
                    j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
                }
            }
            return function(f, g, h) {
                return g && _b(f.prototype, g), h && _b(f, h), f;
            };
        }(),
        f = a('LEQ5w'),
        g = (d = f) && d.__esModule ? d : {
            default: d
        },
        h = a('V9HIq');
    var i = {
            position: 'relative'
        },
        j = function(k) {
            function l(m) {
                ! function(n, o) {
                    if (!(n instanceof o))
                        throw new TypeError('Cannot call a class as a function');
                }(this, l);
                var n = function(o, p) {
                    if (!o)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !p || 'object' != typeof p && 'function' != typeof p ? o : p;
                }(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, m));
                return n.setRef = n.setRef.bind(n), n;
            }
            return function(l, m) {
                if ('function' != typeof m && null !== m)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof m);
                l.prototype = Object.create(m && m.prototype, {
                    constructor: {
                        value: l,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(l, m) : l.__proto__ = m);
            }(a, k), e(a, [{
                    key: 'componentWillReceiveProps',
                    value: function(l) {
                        l.active && !this.props.active && (0, h.confetti)(this.container, l.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(l) {
                        this.container = l;
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return g.default.createElement('div', {
                            className: this.props.className,
                            style: i,
                            ref: this.setRef
                        });
                    }
                }
            ]), a;
        }(f.Component);
    _b.exports.default = j;
}), a.register('V9HIq', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.confetti = function(d) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            f = Object.assign({}, _k, e),
            g = f.elementCount,
            h = f.colors,
            i = f.width,
            j = f.height,
            k = f.angle,
            l = f.spread,
            m = f.startVelocity,
            n = f.decay,
            o = f.duration,
            p = f.random,
            q = _d(d, g, h, i, j),
            r = q.map(function(s) {
                return {
                    element: s,
                    physics: _h(k, l, m, p)
                };
            });
        return _i(d, r, n, o);
    };

    function _d(e, f, g, _h, _i) {
        return Array.from({
            length: f
        }).map(function(j, _k) {
            var l = document.createElement('div'),
                m = g[_k % g.length];
            return l.style['background-color'] = m, l.style.width = _h, l.style.height = _i, l.style.position = 'absolute', l.style.willChange = 'transform, opacity', e.appendChild(l), l;
        });
    }

    function d(e, f, g, h) {
        var i = e * (Math.PI / 180),
            j = f * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * h(),
            wobbleSpeed: 0.1 + 0.1 * h(),
            velocity: 0.5 * g + h() * g,
            angle2D: -i + (0.5 * j - h() * j),
            angle3D: -Math.PI / 4 + h() * (Math.PI / 2),
            tiltAngle: h() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * h()
        };
    }

    function d(e, f, g, h) {
        var i = void 0;
        return new Promise(function(j) {
            requestAnimationFrame(function _t(k) {
                i || (i = k);
                var l = i === k ? 0 : (k - i) / h;
                f.forEach(function(m) {
                    return function(n, o, p) {
                        n.physics.x += Math.cos(n.physics.angle2D) * n.physics.velocity, n.physics.y += Math.sin(n.physics.angle2D) * n.physics.velocity, n.physics.z += Math.sin(n.physics.angle3D) * n.physics.velocity, n.physics.wobble += n.physics.wobbleSpeed, n.physics.velocity *= p, n.physics.y += 3, n.physics.tiltAngle += n.physics.tiltAngleSpeed;
                        var q = n.physics,
                            r = q.x,
                            s = q.y,
                            _t = q.tiltAngle,
                            u = q.wobble,
                            v = 'translate3d(' + (r + 10 * Math.cos(u)) + 'px, ' + (s + 10 * Math.sin(u)) + 'px, 0) rotate3d(1, 1, 1, ' + _t + 'rad)';
                        n.element.style.transform = v, n.element.style.opacity = 1 - o;
                    }(m, l, g);
                }), k - i < h ? requestAnimationFrame(i) : (f.forEach(function(m) {
                    if (m.element.parentNode === e)
                        return e.removeChild(m.element);
                }), j());
            });
        });
    }
    var d = {
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