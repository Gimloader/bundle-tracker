function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _n;
    });
    var f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....');
    var _n = o => (0, f.jsx)(m.LimitedWidth, {
        children: (0, f.jsxs)(j.default, {
            direction: 'vertical',
            size: 30,
            className: 'maxWidth',
            children: [
                (0, f.jsx)(g.default, { pageMode: o.pageMode }),
                (0, f.jsx)(h.default, {
                    title: 'Benefits',
                    description: 'Access these exclusive benefits all season long',
                    children: (0, f.jsx)(i.default, { forSelf: !0 })
                }),
                (0, f.jsx)(k.default, {}),
                (0, f.jsx)(l.default, { pageMode: o.pageMode })
            ]
        })
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _y;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....');
    let r, s, t, u, v, w, x = y => y;
    var _y = z => (0, e.jsxs)(_z, {
        children: [
            (0, e.jsx)(_A, {}),
            (0, e.jsxs)(_B, {
                children: [
                    n.SeasonTicketSeason.seasonName,
                    ' ',
                    n.SeasonTicketSeason.seasonNumber
                ]
            }),
            (0, e.jsx)(_C, { children: n.SeasonTicketName.name }),
            (0, p.OwnsSeasonTicket)() ? (0, e.jsxs)(_D, {
                children: [
                    'You already own this ',
                    n.SeasonTicketName.name,
                    '. Thanks so much for your support!'
                ]
            }) : (0, e.jsx)(l.default, {
                to: m.SEASON_TICKET_BASE,
                style: { textDecoration: 'none' },
                target: z.pageMode ? void 0 : '_blank',
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
                            style: { marginRight: 10 }
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
    const _z = (0, f.default)(g.CenteredColumn).attrs({ className: 'maxWidth medium-shadow' })(r || (r = x`
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
`), h.Fonts.FugazOne, k.default.White), _A = f.default.img.attrs({ src: o.SEASON_TICKET_TICKET_IMAGE })(s || (s = x`
  height: 97px;
  margin-bottom: 35px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
`)), _B = f.default.div(t || (t = x`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`)), _C = f.default.div(u || (u = x`
  font-size: 48px;
  margin-top: -10px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`)), _D = f.default.div(v || (v = x`
  text-transform: none;
  font-family: ${ 0 };
  background: rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.9);
  margin-top: 10px;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 6px;
`), h.Fonts.SFPro), _E = f.default.div(w || (w = x`
  text-transform: none;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  margin-top: 10px;
`), h.Fonts.SFPro);
}), b.register('.....', function (c, d) {
    a(c.exports, 'SEASON_TICKET_TICKET_IMAGE', function () {
        return _e;
    });
    const _e = (0, b('.....').default)('stickers/season_3_2025.png');
}), b.register('.....', function (c, d) {
    a(c.exports, 'SEASON_TICKET_END_DATE', function () {
        return _e;
    });
    const _e = 'August 20th';
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _l;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....');
    let h, i, j, k = l => l;
    var _l = m => (0, e.jsxs)(_m, {
        children: [
            (0, e.jsx)(_n, { children: m.title }),
            (0, e.jsx)(_o, { children: m.description }),
            m.children
        ]
    });
    const _m = f.default.div(h || (h = k``)), _n = f.default.div(i || (i = k`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 32px;
`), g.Fonts.FugazOne), _o = f.default.div(j || (j = k`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  margin-top: -6px;
  margin-bottom: 20px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _l;
    });
    var e = b('.....'), f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....');
    const k = [
        {
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
            show: l => !l || (0, i.isStudent)()
        }
    ];
    var _l = m => (0, e.jsx)(f.default, {
        direction: 'vertical',
        size: 20,
        className: 'maxWidth',
        children: k.filter(n => !n.show || n.show(m.forSelf)).map((n, o) => (0, e.jsx)(g.default, { ...n }, 'benefit' + o))
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _r;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    let j, k, l, m, n, o, p, q = r => r;
    var _r = s => (0, e.jsxs)(_s, {
        children: [
            (0, e.jsx)(_t, { children: (0, e.jsx)(_u, { src: (0, i.default)(`seasonTicket/${ s.icon }.svg`) }) }),
            (0, e.jsxs)(_v, {
                children: [
                    s.tag ? (0, e.jsx)(_w, { children: s.tag }) : null,
                    (0, e.jsx)(_x, { children: s.title }),
                    (0, e.jsx)(_y, { children: s.description })
                ]
            })
        ]
    });
    const _s = (0, f.default)(g.VerticalCentered).attrs({ className: 'maxWidth light-shadow' })(j || (j = q`
  padding: 28px 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  backdrop-filter: blur(3px);
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`)), _t = f.default.div(k || (k = q`
  margin-right: 32px;
`)), _u = f.default.img(l || (l = q`
  width: 40px;
`)), _v = f.default.div.attrs({ className: 'flex-column' })(m || (m = q`
  align-items: flex-start;
`)), _w = f.default.div(n || (n = q`
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
`), h.Fonts.FugazOne), _x = f.default.div(o || (o = q`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
`), h.Fonts.FugazOne), _y = f.default.div(p || (p = q`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.94);
  margin-top: -1px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....');
    var _i = () => {
        const {data: j} = (0, g.default)();
        return j && j.length ? (0, e.jsx)(f.default, {
            title: 'Cosmetics',
            description: 'Instantly earn these exclusive cosmetics',
            children: j.map(k => (0, e.jsx)(h.default, { cosmetic: k }, k.id + '-item'))
        }) : null;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....');
    const g = ['season-ticket-cosmetics'];
    var _h = () => (0, e.useQuery)(g, () => (0, f.requestAsPromise)({ url: '/api/cosmos/season-ticket' }));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _p;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    var _p = q => {
        const {cosmetic: r} = q, [s, t, u] = (0, j.useBoolean)(!1), [v, w, x] = (0, j.useBoolean)(!1), y = f.useMemo(() => r.type === g.CosmeticType.sticker ? 30 : 10, [r.type]);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(h.Container, {
                    onMouseEnter: w,
                    onMouseLeave: x,
                    onClick: t,
                    children: [
                        (0, e.jsx)(h.PreviewArea, {
                            children: (0, e.jsx)(h.PreviewContent, {
                                style: { transform: `scale(${ v ? 1.1 : 1 })` },
                                children: (0, e.jsx)(k.default, {
                                    image: (0, l.default)({
                                        id: r.id,
                                        type: r.type
                                    }),
                                    background: (0, m.rarityToBackground)(r.rarity),
                                    padding: y
                                })
                            })
                        }),
                        (0, e.jsx)(i.Container, {
                            style: { background: (0, m.rarityToBackground)(r.rarity) },
                            children: (0, e.jsx)(i.Content, {
                                className: 'flex-center',
                                children: (0, e.jsxs)('div', {
                                    className: 'flex-column flex-center',
                                    children: [
                                        (0, e.jsx)(i.Title, { children: r.name }),
                                        (0, e.jsx)(i.Description, { children: (0, n.cosmeticTypeName)(r.type) })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                (0, e.jsx)(o.default, {
                    open: s,
                    close: u,
                    pack: r.packName,
                    ...r,
                    image: (0, l.default)({
                        id: r.id,
                        type: r.type
                    }),
                    callToAction: () => {
                    }
                })
            ]
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'BORDER_RADIUS', function () {
        return _t;
    }), a(c.exports, 'Container', function () {
        return _v;
    }), a(c.exports, 'PreviewArea', function () {
        return _w;
    }), a(c.exports, 'PreviewContent', function () {
        return _x;
    }), a(c.exports, 'default', function () {
        return _u;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    let p, q, r, s = t => t;
    const _t = 6;
    var _u = v => {
        const [w, x, y] = (0, j.useBoolean)(!1), [z, A, B] = (0, j.useBoolean)(!1), C = f.useMemo(() => v.type === i.CosmeticType.sticker ? 30 : 10, [v.type]);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(_v, {
                    onMouseEnter: A,
                    onMouseLeave: B,
                    onClick: () => {
                        (0, k.playClickSound)(), x();
                    },
                    children: [
                        (0, e.jsx)(_w, {
                            children: (0, e.jsx)(_x, {
                                style: { transform: `scale(${ z ? 1.1 : 1 })` },
                                children: (0, e.jsx)(l.default, {
                                    image: v.image,
                                    background: (0, m.rarityToBackground)(v.rarity),
                                    padding: C
                                })
                            })
                        }),
                        (0, e.jsx)(h.default, {
                            name: v.name,
                            type: v.type,
                            rarity: v.rarity,
                            owned: v.owned,
                            cost: v.cost,
                            tag: v.tag
                        })
                    ]
                }),
                (0, e.jsx)(o.default, {
                    open: w,
                    close: y,
                    ...v
                })
            ]
        });
    };
    const _v = g.default.div.attrs({ className: 'maxWidth medium-shadow' })(p || (p = s`
  border-radius: ${ 0 }px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  border: 3px solid;
  font-family: ${ 0 };
  &:last-child {
    margin-bottom: 0px;
  }
`), _t, n.Fonts.FugazOne), _w = g.default.div.attrs({ className: 'maxWidth' })(q || (q = s`
  height: 140px;
  overflow: hidden;
`)), _x = g.default.div.attrs({ className: 'maxAll' })(r || (r = s`
  transition: transform 0.25s;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'Container', function () {
        return _t;
    }), a(c.exports, 'Content', function () {
        return _u;
    }), a(c.exports, 'Title', function () {
        return _v;
    }), a(c.exports, 'Description', function () {
        return _w;
    }), a(c.exports, 'default', function () {
        return _s;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....');
    let l, m, n, o, p, q, r = s => s;
    var _s = t => (0, e.jsx)(_t, {
        style: { background: (0, h.rarityToBackground)(t.rarity) },
        children: (0, e.jsxs)(_u, {
            children: [
                (0, e.jsxs)('div', {
                    className: 'flex-column',
                    style: { alignItems: 'flex-start' },
                    children: [
                        t.tag ? (0, e.jsx)(_y, { children: t.tag }) : null,
                        (0, e.jsx)(_v, { children: t.name }),
                        (0, e.jsx)(_w, { children: t.owned ? 'Owned' : (0, i.cosmeticTypeName)(t.type) })
                    ]
                }),
                (0, e.jsx)(_x, { children: t.owned ? null : (0, e.jsx)(j.default, { amount: t.cost }) })
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
`), k.default.White, () => g.BORDER_RADIUS, () => g.BORDER_RADIUS), _u = f.default.div.attrs({ className: 'maxWidth flex vc between' })(m || (m = r`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 25px;
`)), _v = f.default.div(n || (n = r`
  font-size: 24px;
`)), _w = f.default.div(o || (o = r`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 6px;
`)), _x = f.default.div(p || (p = r`
  margin-left: 10px;
`)), _y = f.default.div(q || (q = r`
  background: #00897b;
  padding: 11px;
  border-radius: 7px;
  line-height: 1;
  margin-bottom: 11px;
  font-size: 13px;
  text-transform: uppercase;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _k;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....');
    let h, i, j = k => k;
    var _k = l => {
        const [m, n] = (0, g.useInViewRef)();
        return (0, e.jsx)(_l, {
            ref: m,
            style: {
                padding: l.padding,
                background: l.background
            },
            children: n ? (0, e.jsx)(_m, {
                draggable: !1,
                src: l.image
            }) : null
        });
    };
    const _l = f.default.div.attrs({ className: 'maxAll flex-center' })(h || (h = j`
  background: rgb(255, 255, 255);
  overflow: hidden;
`)), _m = f.default.img(i || (i = j`
  max-width: 100%;
  max-height: 100%;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'useInViewRef', function () {
        return _g;
    });
    var e = b('.....'), f = {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: [
                0,
                1
            ]
        };
    function _g(h, i) {
        void 0 === h && (h = function () {
        }), void 0 === i && (i = f);
        var j = i.root, k = void 0 === j ? null : j, l = i.rootMargin, m = i.threshold, n = (0, e.useState)(null), o = n[0], p = n[1], q = (0, e.useState)(!1), r = q[0], s = q[1];
        (0, e.useEffect)(function () {
            if (o) {
                var t = new IntersectionObserver(function (u, v) {
                    u.forEach(function (w) {
                        var x = w.isIntersecting;
                        return s(x);
                    }), h(u, v);
                }, i);
                return t.observe(o), function () {
                    t.disconnect();
                };
            }
        }, [
            o,
            h,
            k,
            _g,
            m
        ]);
        var t = (0, e.useCallback)(function (u) {
            p(u);
        }, []);
        return [
            t,
            r
        ];
    }
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _p;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    var _p = q => {
        const [r, s] = f.useState(!1), [t, u] = f.useState(!1), {
                id: v,
                name: w,
                rarity: x,
                type: y,
                description: z,
                style: A
            } = q, B = q.owned || q.currentCurrency < q.cost, C = () => {
                B || r || (s(!0), (0, j.request)({
                    url: '/api/cosmos/purchase-item',
                    data: { cosmeticId: q.id },
                    success: () => {
                        (0, o.AnalyticsTrackEvent)({
                            event: 'cosmetic_purchased',
                            properties: {
                                id: v,
                                name: w,
                                type: y
                            }
                        }), (0, k.playSound)({
                            path: (0, l.default)('cosmos/cosmeticPurchased.mp3'),
                            volume: 0.6
                        }), (0, n.invalidateCosmosBasics)(), (0, m.refetchCosmosItemShop)(), u(!0);
                    },
                    error: D => {
                        (0, j.throwMessageError)({
                            e: D,
                            default: {
                                title: 'Error purchasing item.',
                                content: 'Please try again later.'
                            }
                        }), q.close();
                    }
                }));
            };
        return (0, e.jsx)(g.default, {
            open: q.open,
            close: q.close,
            id: v,
            name: w,
            image: (0, h.default)({
                id: v,
                type: y
            }),
            rarity: x,
            type: y,
            description: z,
            style: A,
            purchased: t,
            callToAction: () => ({
                text: q.owned ? 'Owned' : (0, e.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        lineHeight: 1,
                        padding: '2px 0px'
                    },
                    children: [
                        (0, e.jsx)('div', {
                            style: { marginTop: 2 },
                            children: 'Purchase'
                        }),
                        (0, e.jsx)('div', {
                            style: { margin: '0px 7px' },
                            children: '-'
                        }),
                        (0, e.jsx)(i.default, {
                            amount: q.cost,
                            size: 16,
                            grayscale: B
                        })
                    ]
                }),
                ariaLabel: q.owned ? 'Owned' : 'Purchase',
                disabled: B,
                onClick: C
            }),
            blockCharacterPreview: q.blockCharacterPreview,
            onCosmeticSelectionChanged: q.onCosmeticSelectionChanged
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'playSound', function () {
        return _g;
    }), a(c.exports, 'preloadSound', function () {
        return _i;
    });
    var e = b('.....');
    const f = new Map(), _g = h => {
            const i = Date.now();
            if (!h.path)
                return null;
            const j = h.forceCreateNewSound ? void 0 : f.get(h.path), k = j || new (0, e.Howl)({ src: h.path });
            if (k.volume(h.volume), j)
                h.delay ? setTimeout(() => {
                    k.play();
                }, h.delay) : k.play();
            else {
                const l = () => {
                    if (f.get(h.path) || h.forceCreateNewSound || f.set(h.path, k), h.delay) {
                        const m = i + h.delay, n = Date.now();
                        n > m ? k.play() : setTimeout(() => {
                            k.play();
                        }, m - n);
                    } else
                        k.play();
                };
                'loaded' === k.state() ? l() : k.once('load', l);
            }
            return k;
        }, h = new Set(), _i = j => {
            const {path: k} = j;
            if (f.get(k))
                return;
            if (h.has(k))
                return;
            h.add(k);
            const l = new (0, e.Howl)({ src: k });
            l.once('load', () => {
                h.delete(k), f.set(k, l);
            });
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'removeCosmosItemShop', function () {
        return _i;
    }), a(c.exports, 'refetchCosmosItemShop', function () {
        return _j;
    }), a(c.exports, 'default', function () {
        return _k;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const h = ['cosmos-item-shop'], _i = () => {
            f.default.removeQueries(h);
        }, _j = () => f.default.refetchQueries(h);
    var _k = () => (0, e.useQuery)(h, () => (0, g.requestAsPromise)({ url: '/api/cosmos/shop' }));
}), b.register('.....', function (c, d) {
    a(c.exports, 'AnalyticsTrackEvent', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    const _i = j => {
        var k, l, m;
        if ((window.gtag && !(null === (k = j.blockedSource) || void 0 === k ? void 0 : k.google) && window.gtag('event', j.event, j.properties), g.AnalyticsFlags.educatorOnly) && (null === (m = (0, f.getUser)()) || void 0 === m ? void 0 : m.accountType) !== e.default.educator)
            return;
        (null === (l = j.blockedSource) || void 0 === l ? void 0 : l.posthog) || (0, h.TrackPostHogEvent)({
            event: j.event,
            properties: j.properties,
            force: j.forcePostHog
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'TrackPostHogEvent', function () {
        return _e;
    });
    b('.....');
    const _e = f => {
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _s;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    let p, q, r = s => s;
    var _s = t => (0, n.OwnsSeasonTicket)() ? null : (0, e.jsxs)(_t, {
        children: [
            (0, e.jsx)(k.default, {
                to: l.SEASON_TICKET_BASE,
                style: { textDecoration: 'none' },
                target: t.pageMode ? void 0 : '_blank',
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
                            style: { marginRight: 10 }
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
    const _t = (0, f.default)(g.CenteredColumn).attrs({ className: 'maxWidth' })(p || (p = r`
  padding: 6px 0px;
`)), _u = f.default.div(q || (q = r`
  text-transform: none;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin-top: 10px;
`), h.Fonts.SFPro);
}), b.register('.....', function (c, d) {
    Object.defineProperty(c.exports, '__esModule', { value: !0 });
    var e, f = function () {
            function g(h, i) {
                for (var j = 0; j < i.length; j++) {
                    var k = i[j];
                    k.enumerable = k.enumerable || !1, k.configurable = !0, 'value' in k && (k.writable = !0), Object.defineProperty(h, k.key, k);
                }
            }
            return function (j, k, l) {
                return k && g(j.prototype, k), l && g(j, l), j;
            };
        }(), g = b('.....'), h = (e = g) && e.__esModule ? e : { default: e }, i = b('.....');
    var j = { position: 'relative' }, k = function (l) {
            function m(n) {
                !function (o, p) {
                    if (!(o instanceof p))
                        throw new TypeError('Cannot call a class as a function');
                }(this, m);
                var o = function (p, q) {
                    if (!p)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !q || 'object' != typeof q && 'function' != typeof q ? p : q;
                }(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, n));
                return o.setRef = o.setRef.bind(o), o;
            }
            return function (o, p) {
                if ('function' != typeof p && null !== p)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof p);
                o.prototype = Object.create(p && p.prototype, {
                    constructor: {
                        value: o,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(o, p) : o.__proto__ = p);
            }(m, l), f(m, [
                {
                    key: 'componentWillReceiveProps',
                    value: function (o) {
                        o.active && !this.props.active && (0, i.confetti)(this.container, o.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function (o) {
                        this.container = o;
                    }
                },
                {
                    key: 'render',
                    value: function () {
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
}), b.register('.....', function (c, d) {
    Object.defineProperty(c.exports, '__esModule', { value: !0 }), c.exports.confetti = function (e) {
        var f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, g = Object.assign({}, _l, f), h = g.elementCount, i = g.colors, j = g.width, k = g.height, l = g.angle, m = g.spread, n = g.startVelocity, o = g.decay, p = g.duration, q = g.random, r = _e(e, h, i, j, k), s = r.map(function (t) {
                return {
                    element: t,
                    physics: _f(l, m, n, q)
                };
            });
        return _k(e, s, o, p);
    };
    function _e(f, g, h, i, j) {
        return Array.from({ length: g }).map(function (k, l) {
            var m = document.createElement('div'), n = h[l % h.length];
            return m.style['background-color'] = n, m.style.width = i, m.style.height = j, m.style.position = 'absolute', m.style.willChange = 'transform, opacity', f.appendChild(m), m;
        });
    }
    function _f(g, h, i, j) {
        var _k = g * (Math.PI / 180), _l = h * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * j(),
            wobbleSpeed: 0.1 + 0.1 * j(),
            velocity: 0.5 * i + j() * i,
            angle2D: -_k + (0.5 * _l - j() * _l),
            angle3D: -Math.PI / 4 + j() * (Math.PI / 2),
            tiltAngle: j() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * j()
        };
    }
    function i(j, k, l, m) {
        var n = void 0;
        return new Promise(function (o) {
            requestAnimationFrame(function i(p) {
                i || (i = p);
                var q = i === p ? 0 : (p - i) / m;
                k.forEach(function (r) {
                    return function (s, t, u) {
                        s.physics.x += Math.cos(s.physics.angle2D) * s.physics.velocity, s.physics.y += Math.sin(s.physics.angle2D) * s.physics.velocity, s.physics.z += Math.sin(s.physics.angle3D) * s.physics.velocity, s.physics.wobble += s.physics.wobbleSpeed, s.physics.velocity *= u, s.physics.y += 3, s.physics.tiltAngle += s.physics.tiltAngleSpeed;
                        var v = s.physics, w = v.x, x = v.y, y = v.tiltAngle, z = v.wobble, A = 'translate3d(' + (w + 10 * Math.cos(z)) + 'px, ' + (x + 10 * Math.sin(z)) + 'px, 0) rotate3d(1, 1, 1, ' + y + 'rad)';
                        s.element.style.transform = A, s.element.style.opacity = 1 - t;
                    }(r, q, l);
                }), p - i < m ? requestAnimationFrame(i) : (k.forEach(function (r) {
                    if (r.element.parentNode === j)
                        return j.removeChild(r.element);
                }), o());
            });
        });
    }
    var k = {
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