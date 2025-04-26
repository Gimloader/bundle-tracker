function a(a, b, q, c) {
    Object.defineProperty(a, b, {
        get: q,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('5d3ST', function(q, c) {
    var c;
    c = q.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(q.exports, 'default', function() {
        return l;
    });
    var d = b('8kSQZ');
    b('uPP4W');
    var e = b('wnejr'),
        f = b('qMdxg'),
        g = b('tRI+l'),
        h = b('5nJMd26'),
        i = b('qfDnR'),
        j = b('l2bw2'),
        k = b('0Gy6k');
    var l = a => (0, d.jsx)(k.LimitedWidth, {
        children: (0, d.jsxs)(h.default, {
            direction: 'vertical',
            size: 30,
            className: 'maxWidth',
            children: [
                (0, d.jsx)(e.default, {
                    pageMode: a.pageMode
                }),
                (0, d.jsx)(f.default, {
                    title: 'Benefits',
                    description: 'Access these exclusive benefits all season long',
                    children: (0, d.jsx)(g.default, {
                        forSelf: !0
                    })
                }),
                (0, d.jsx)(i.default, {}),
                (0, d.jsx)(j.default, {
                    pageMode: a.pageMode
                })
            ]
        })
    });
}), b.register('wnejr', function(q, c) {
    a(q.exports, 'default', function() {
        return w;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('YimJ0'),
        f = b('gSUVO'),
        g = b('Dog9Y'),
        h = b('iMnBi'),
        i = b('lmfrI'),
        j = b('iYEuk12'),
        k = b('q721a'),
        l = b('ImHrc1'),
        m = b('70zaw'),
        n = b('rZ3/P'),
        o = b('uHmrc');
    let p, q, r, s, t, u, v = a => a;
    var w = a => (0, c.jsxs)(x, {
        children: [
            (0, c.jsx)(y, {}),
            (0, c.jsxs)(z, {
                children: [
                    l.SeasonTicketSeason.seasonName,
                    ' ',
                    l.SeasonTicketSeason.seasonNumber
                ]
            }),
            (0, c.jsx)(A, {
                children: l.SeasonTicketName.name
            }),
            (0, n.OwnsSeasonTicket)() ? (0, c.jsxs)(B, {
                children: [
                    'You already own this ',
                    l.SeasonTicketName.name,
                    '. Thanks so much for your support!'
                ]
            }) : (0, c.jsx)(j.default, {
                to: k.SEASON_TICKET_BASE,
                style: {
                    textDecoration: 'none'
                },
                target: a.pageMode ? void 0 : '_blank',
                children: (0, c.jsxs)(g.default, {
                    style: {
                        fontFamily: f.Fonts.SFPro,
                        marginTop: 15
                    },
                    customFontWeight: f.FontWeights.Bold,
                    customColor: '#1677ff',
                    ariaLabel: `Purchase ${ l.SeasonTicketName.name }`,
                    children: [
                        (0, c.jsx)(h.default, {
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
            (0, c.jsxs)(C, {
                children: [
                    'Season ends ',
                    o.SEASON_TICKET_END_DATE,
                    '.'
                ]
            })
        ]
    });
    const x = (0, d.default)(e.CenteredColumn).attrs({
            className: 'maxWidth medium-shadow'
        })(p || (p = v`
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
`), f.Fonts.FugazOne, i.default.White),
        y = d.default.img.attrs({
            src: m.SEASON_TICKET_TICKET_IMAGE
        })(q || (q = v`
  height: 97px;
  margin-bottom: 35px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
`)),
        z = d.default.div(r || (r = v`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`)),
        A = d.default.div(s || (s = v`
  font-size: 48px;
  margin-top: -10px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`)),
        B = d.default.div(t || (t = v`
  text-transform: none;
  font-family: ${ 0 };
  background: rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.9);
  margin-top: 10px;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 6px;
`), f.Fonts.SFPro),
        C = d.default.div(u || (u = v`
  text-transform: none;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  margin-top: 10px;
`), f.Fonts.SFPro);
}), b.register('70zaw', function(q, c) {
    a(q.exports, 'SEASON_TICKET_TICKET_IMAGE', function() {
        return c;
    });
    const c = (0, b('JJQ0+').default)('stickers/season_3_2025.png');
}), b.register('uHmrc', function(b, q) {
    a(b.exports, 'SEASON_TICKET_END_DATE', function() {
        return c;
    });
    const c = 'August 20th';
}), b.register('qMdxg', function(q, r) {
    a(q.exports, 'default', function() {
        return j;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('gSUVO');
    let f, g, h, i = a => a;
    var j = a => (0, c.jsxs)(k, {
        children: [
            (0, c.jsx)(l, {
                children: a.title
            }),
            (0, c.jsx)(m, {
                children: a.description
            }),
            a.children
        ]
    });
    const k = d.default.div(f || (f = i``)),
        l = d.default.div(g || (g = i`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 32px;
`), e.Fonts.FugazOne),
        m = d.default.div(h || (h = i`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  margin-top: -6px;
  margin-bottom: 20px;
`));
}), b.register('tRI+l', function(q, r) {
    a(q.exports, 'default', function() {
        return j;
    });
    var c = b('8kSQZ'),
        d = b('5nJMd26');
    b('uPP4W');
    var e = b('jxnVk'),
        f = b('ImHrc1'),
        g = b('PjB0f'),
        h = b('y8lS825');
    const i = [{
            icon: 'vip',
            title: 'Exclusive Cosmetics',
            description: `Instantly earn over 15 exclusive cosmetics, only available by purchasing this season's ${ f.SeasonTicketName.singularName }. Cosmetics stay in your Locker after the season ends.`
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
            description: `Publish your maps to the world without paying 1,000 ${ h.default.currency }!`
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
            show: a => !a || (0, g.isStudent)()
        }
    ];
    var j = a => (0, c.jsx)(d.default, {
        direction: 'vertical',
        size: 20,
        className: 'maxWidth',
        children: i.filter(b => !b.show || b.show(a.forSelf)).map((a, b) => (0, c.jsx)(e.default, {
            ...a
        }, 'benefit' + b))
    });
}), b.register('jxnVk', function(q, r) {
    a(q.exports, 'default', function() {
        return p;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('YimJ0'),
        f = b('gSUVO'),
        g = b('JJQ0+');
    let h, i, j, k, l, m, n, o = a => a;
    var p = a => (0, c.jsxs)(q, {
        children: [
            (0, c.jsx)(r, {
                children: (0, c.jsx)(s, {
                    src: (0, g.default)(`seasonTicket/${ a.icon }.svg`)
                })
            }),
            (0, c.jsxs)(t, {
                children: [
                    a.tag ? (0, c.jsx)(u, {
                        children: a.tag
                    }) : null,
                    (0, c.jsx)(v, {
                        children: a.title
                    }),
                    (0, c.jsx)(w, {
                        children: a.description
                    })
                ]
            })
        ]
    });
    const q = (0, d.default)(e.VerticalCentered).attrs({
            className: 'maxWidth light-shadow'
        })(h || (h = o`
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
        r = d.default.div(i || (i = o`
  margin-right: 32px;
`)),
        s = d.default.img(j || (j = o`
  width: 40px;
`)),
        t = d.default.div.attrs({
            className: 'flex-column'
        })(k || (k = o`
  align-items: flex-start;
`)),
        u = d.default.div(l || (l = o`
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
`), f.Fonts.FugazOne),
        v = d.default.div(m || (m = o`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
`), f.Fonts.FugazOne),
        w = d.default.div(n || (n = o`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.94);
  margin-top: -1px;
`));
}), b.register('qfDnR', function(q, r) {
    a(q.exports, 'default', function() {
        return g;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('qMdxg'),
        e = b('gj2HS'),
        f = b('Xnshu');
    var g = () => {
        const {
            data: h
        } = (0, e.default)();
        return h && h.length ? (0, c.jsx)(d.default, {
            title: 'Cosmetics',
            description: 'Instantly earn these exclusive cosmetics',
            children: h.map(h => (0, c.jsx)(f.default, {
                cosmetic: h
            }, h.id + '-item'))
        }) : null;
    };
}), b.register('gj2HS', function(q, r) {
    a(q.exports, 'default', function() {
        return f;
    });
    var c = b('IsAdf'),
        d = b('PjB0f');
    const e = ['season-ticket-cosmetics'];
    var f = () => (0, c.useQuery)(e, () => (0, d.requestAsPromise)({
        url: '/api/cosmos/season-ticket'
    }));
}), b.register('Xnshu', function(q, r) {
    a(q.exports, 'default', function() {
        return n;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('hoTkY'),
        f = b('8jDAw0'),
        g = b('D8u+L0'),
        h = b('PjB0f'),
        i = b('Xgmcq0'),
        j = b('Rbi1s'),
        k = b('SmomX'),
        l = b('Zb18q'),
        m = b('QIGeq');
    var n = a => {
        const {
            cosmetic: o
        } = p, [q, r, s] = (0, h.useBoolean)(!1), [t, u, v] = (0, h.useBoolean)(!1), w = d.useMemo(() => o.type === e.CosmeticType.sticker ? 30 : 10, [o.type]);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsxs)(f.Container, {
                    onMouseEnter: u,
                    onMouseLeave: v,
                    onClick: r,
                    children: [
                        (0, c.jsx)(f.PreviewArea, {
                            children: (0, c.jsx)(f.PreviewContent, {
                                style: {
                                    transform: `scale(${ t ? 1.1 : 1 })`
                                },
                                children: (0, c.jsx)(i.default, {
                                    image: (0, j.default)({
                                        id: o.id,
                                        type: o.type
                                    }),
                                    background: (0, k.rarityToBackground)(o.rarity),
                                    padding: w
                                })
                            })
                        }),
                        (0, c.jsx)(g.Container, {
                            style: {
                                background: (0, k.rarityToBackground)(o.rarity)
                            },
                            children: (0, c.jsx)(g.Content, {
                                className: 'flex-center',
                                children: (0, c.jsxs)('div', {
                                    className: 'flex-column flex-center',
                                    children: [
                                        (0, c.jsx)(g.Title, {
                                            children: o.name
                                        }),
                                        (0, c.jsx)(g.Description, {
                                            children: (0, l.cosmeticTypeName)(o.type)
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                (0, c.jsx)(m.default, {
                    open: q,
                    close: s,
                    pack: o.packName,
                    ...o,
                    image: (0, j.default)({
                        id: o.id,
                        type: o.type
                    }),
                    callToAction: () => {}
                })
            ]
        });
    };
}), b.register('8jDAw0', function(u, v) {
    a(u.exports, 'BORDER_RADIUS', function() {
        return r;
    }), a(u.exports, 'Container', function() {
        return t;
    }), a(u.exports, 'PreviewArea', function() {
        return u;
    }), a(u.exports, 'PreviewContent', function() {
        return v;
    }), a(u.exports, 'default', function() {
        return s;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('h99Nu'),
        f = b('D8u+L0'),
        g = b('hoTkY'),
        h = b('PjB0f'),
        i = b('SeRL7'),
        j = b('Xgmcq0'),
        k = b('SmomX'),
        l = b('gSUVO'),
        m = b('Q3m9x0');
    let n, o, p, q = a => a;
    const r = 6;
    var s = a => {
        const [t, u, v] = (0, h.useBoolean)(!1), [w, x, y] = (0, h.useBoolean)(!1), z = d.useMemo(() => a.type === g.CosmeticType.sticker ? 30 : 10, [a.type]);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsxs)(t, {
                    onMouseEnter: x,
                    onMouseLeave: y,
                    onClick: () => {
                        (0, i.playClickSound)(), u();
                    },
                    children: [
                        (0, c.jsx)(u, {
                            children: (0, c.jsx)(v, {
                                style: {
                                    transform: `scale(${ w ? 1.1 : 1 })`
                                },
                                children: (0, c.jsx)(j.default, {
                                    image: a.image,
                                    background: (0, k.rarityToBackground)(a.rarity),
                                    padding: z
                                })
                            })
                        }),
                        (0, c.jsx)(f.default, {
                            name: a.name,
                            type: a.type,
                            rarity: a.rarity,
                            owned: a.owned,
                            cost: a.cost,
                            tag: a.tag
                        })
                    ]
                }),
                (0, c.jsx)(m.default, {
                    open: t,
                    close: v,
                    ...a
                })
            ]
        });
    };
    const t = e.default.div.attrs({
            className: 'maxWidth medium-shadow'
        })(n || (n = q`
  border-radius: ${ 0 }px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  border: 3px solid;
  font-family: ${ 0 };
  &:last-child {
    margin-bottom: 0px;
  }
`), r, l.Fonts.FugazOne),
        u = e.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = q`
  height: 140px;
  overflow: hidden;
`)),
        v = e.default.div.attrs({
            className: 'maxAll'
        })(p || (p = q`
  transition: transform 0.25s;
`));
}), b.register('D8u+L0', function(k, g) {
    a(k.exports, 'Container', function() {
        return r;
    }), a(k.exports, 'Content', function() {
        return s;
    }), a(k.exports, 'Title', function() {
        return t;
    }), a(k.exports, 'Description', function() {
        return u;
    }), a(k.exports, 'default', function() {
        return q;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('8jDAw0'),
        f = b('SmomX'),
        g = b('Zb18q'),
        h = b('EAfQq'),
        i = b('lmfrI');
    let j, k, l, m, n, o, p = a => a;
    var q = a => (0, c.jsx)(r, {
        style: {
            background: (0, f.rarityToBackground)(a.rarity)
        },
        children: (0, c.jsxs)(s, {
            children: [
                (0, c.jsxs)('div', {
                    className: 'flex-column',
                    style: {
                        alignItems: 'flex-start'
                    },
                    children: [
                        a.tag ? (0, c.jsx)(w, {
                            children: a.tag
                        }) : null,
                        (0, c.jsx)(t, {
                            children: a.name
                        }),
                        (0, c.jsx)(u, {
                            children: a.owned ? 'Owned' : (0, g.cosmeticTypeName)(a.type)
                        })
                    ]
                }),
                (0, c.jsx)(v, {
                    children: a.owned ? null : (0, c.jsx)(h.default, {
                        amount: a.cost
                    })
                })
            ]
        })
    });
    const r = d.default.div(j || (j = p`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  color: ${ 0 };
  text-transform: uppercase;
  border-bottom-left-radius: ${ 0 }px;
  border-bottom-right-radius: ${ 0 }px;
  overflow: hidden;
  line-height: 1;
`), i.default.White, () => e.BORDER_RADIUS, () => e.BORDER_RADIUS),
        s = d.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(k || (k = p`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 25px;
`)),
        t = d.default.div(l || (l = p`
  font-size: 24px;
`)),
        u = d.default.div(m || (m = p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 6px;
`)),
        v = d.default.div(n || (n = p`
  margin-left: 10px;
`)),
        w = d.default.div(o || (o = p`
  background: #00897b;
  padding: 11px;
  border-radius: 7px;
  line-height: 1;
  margin-bottom: 11px;
  font-size: 13px;
  text-transform: uppercase;
`));
}), b.register('Xgmcq0', function(k, g) {
    a(k.exports, 'default', function() {
        return i;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('iPHbw0');
    let f, g, h = a => a;
    var i = a => {
        const [j, k] = (0, e.useInViewRef)();
        return (0, c.jsx)(j, {
            ref: j,
            style: {
                padding: a.padding,
                background: a.background
            },
            children: k ? (0, c.jsx)(k, {
                draggable: !1,
                src: a.image
            }) : null
        });
    };
    const j = d.default.div.attrs({
            className: 'maxAll flex-center'
        })(f || (f = h`
  background: rgb(255, 255, 255);
  overflow: hidden;
`)),
        k = d.default.img(g || (g = h`
  max-width: 100%;
  max-height: 100%;
`));
}), b.register('iPHbw0', function(f, g) {
    a(f.exports, 'useInViewRef', function() {
        return e;
    });
    var c = b('uPP4W'),
        d = {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: [
                0,
                1
            ]
        };

    function e(a, b) {
        void 0 === a && (a = function() {}), void 0 === b && (b = d);
        var f = b.root,
            g = void 0 === f ? null : f,
            h = b.rootMargin,
            i = b.threshold,
            j = (0, c.useState)(null),
            k = j[0],
            l = j[1],
            m = (0, c.useState)(!1),
            n = m[0],
            o = m[1];
        (0, c.useEffect)(function() {
            if (k) {
                var p = new IntersectionObserver(function(b, p) {
                    b.forEach(function(a) {
                        var q = a.isIntersecting;
                        return o(q);
                    }), a(b, p);
                }, b);
                return p.observe(k),
                    function() {
                        p.disconnect();
                    };
            }
        }, [
            k,
            a,
            g,
            h,
            i
        ]);
        var p = (0, c.useCallback)(function(a) {
            l(a);
        }, []);
        return [
            p,
            n
        ];
    }
}), b.register('Q3m9x0', function(p, q) {
    a(p.exports, 'default', function() {
        return n;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('QIGeq'),
        f = b('Rbi1s'),
        g = b('EAfQq'),
        h = b('PjB0f'),
        i = b('OlpXx'),
        j = b('JJQ0+'),
        k = b('mEBCp'),
        l = b('rjuBh'),
        m = b('CJCMN4');
    var n = a => {
        const [o, p] = d.useState(!1), [q, r] = d.useState(!1), {
            id: s,
            name: t,
            rarity: u,
            type: v,
            description: w,
            style: x
        } = y, z = y.owned || y.currentCurrency < y.cost, A = () => {
            z || o || (p(!0), (0, h.request)({
                url: '/api/cosmos/purchase-item',
                data: {
                    cosmeticId: y.id
                },
                success: () => {
                    (0, m.AnalyticsTrackEvent)({
                        event: 'cosmetic_purchased',
                        properties: {
                            id: s,
                            name: t,
                            type: v
                        }
                    }), (0, i.playSound)({
                        path: (0, j.default)('cosmos/cosmeticPurchased.mp3'),
                        volume: 0.6
                    }), (0, l.invalidateCosmosBasics)(), (0, k.refetchCosmosItemShop)(), r(!0);
                },
                error: o => {
                    (0, h.throwMessageError)({
                        e: o,
                        default: {
                            title: 'Error purchasing item.',
                            content: 'Please try again later.'
                        }
                    }), y.close();
                }
            }));
        };
        return (0, c.jsx)(e.default, {
            open: y.open,
            close: y.close,
            id: s,
            name: t,
            image: (0, f.default)({
                id: s,
                type: v
            }),
            rarity: u,
            type: v,
            description: w,
            style: x,
            purchased: q,
            callToAction: () => ({
                text: y.owned ? 'Owned' : (0, c.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        lineHeight: 1,
                        padding: '2px 0px'
                    },
                    children: [
                        (0, c.jsx)('div', {
                            style: {
                                marginTop: 2
                            },
                            children: 'Purchase'
                        }),
                        (0, c.jsx)('div', {
                            style: {
                                margin: '0px 7px'
                            },
                            children: '-'
                        }),
                        (0, c.jsx)(g.default, {
                            amount: y.cost,
                            size: 16,
                            grayscale: z
                        })
                    ]
                }),
                ariaLabel: y.owned ? 'Owned' : 'Purchase',
                disabled: z,
                onClick: A
            }),
            blockCharacterPreview: y.blockCharacterPreview,
            onCosmeticSelectionChanged: y.onCosmeticSelectionChanged
        });
    };
}), b.register('OlpXx', function(g, h) {
    a(g.exports, 'playSound', function() {
        return e;
    }), a(g.exports, 'preloadSound', function() {
        return g;
    });
    var c = b('6yrsF');
    const d = new Map(),
        e = a => {
            const f = Date.now();
            if (!a.path)
                return null;
            const g = a.forceCreateNewSound ? void 0 : d.get(a.path),
                h = g || new(0, c.Howl)({
                    src: a.path
                });
            if (h.volume(a.volume), g)
                a.delay ? setTimeout(() => {
                    h.play();
                }, a.delay) : h.play();
            else {
                const i = () => {
                    if (d.get(a.path) || a.forceCreateNewSound || d.set(a.path, h), a.delay) {
                        const j = f + a.delay,
                            k = Date.now();
                        k > j ? h.play() : setTimeout(() => {
                            h.play();
                        }, j - k);
                    } else
                        h.play();
                };
                'loaded' === h.state() ? i() : h.once('load', i);
            }
            return h;
        },
        f = new Set(),
        g = a => {
            const {
                path: h
            } = i;
            if (d.get(h))
                return;
            if (f.has(h))
                return;
            f.add(h);
            const j = new(0, c.Howl)({
                src: h
            });
            j.once('load', () => {
                f.delete(h), d.set(h, j);
            });
        };
}), b.register('mEBCp', function(i, j) {
    a(i.exports, 'removeCosmosItemShop', function() {
        return g;
    }), a(i.exports, 'refetchCosmosItemShop', function() {
        return h;
    }), a(i.exports, 'default', function() {
        return i;
    });
    var c = b('IsAdf'),
        d = b('jnSVn'),
        e = b('PjB0f');
    const f = ['cosmos-item-shop'],
        g = () => {
            d.default.removeQueries(f);
        },
        h = () => d.default.refetchQueries(f);
    var i = () => (0, c.useQuery)(f, () => (0, e.requestAsPromise)({
        url: '/api/cosmos/shop'
    }));
}), b.register('CJCMN4', function(i, j) {
    a(i.exports, 'AnalyticsTrackEvent', function() {
        return g;
    });
    var c = b('pvZv3'),
        d = b('PjB0f'),
        e = b('61G7M'),
        f = b('OW/xn');
    const g = a => {
        var h, i, j;
        if ((window.gtag && !(null === (h = a.blockedSource) || void 0 === h ? void 0 : h.google) && window.gtag('event', a.event, a.properties), e.AnalyticsFlags.educatorOnly) && (null === (j = (0, d.getUser)()) || void 0 === j ? void 0 : j.accountType) !== c.default.educator)
            return;
        (null === (i = a.blockedSource) || void 0 === i ? void 0 : i.posthog) || (0, f.TrackPostHogEvent)({
            event: a.event,
            properties: a.properties,
            force: a.forcePostHog
        });
    };
}), b.register('l2bw2', function(f, c) {
    a(f.exports, 'default', function() {
        return q;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('YimJ0'),
        f = b('gSUVO'),
        g = b('Dog9Y'),
        h = b('iMnBi'),
        i = b('iYEuk12'),
        j = b('q721a'),
        k = b('ImHrc1'),
        l = b('rZ3/P'),
        m = b('uHmrc');
    let n, o, p = a => a;
    var q = a => (0, l.OwnsSeasonTicket)() ? null : (0, c.jsxs)(r, {
        children: [
            (0, c.jsx)(i.default, {
                to: j.SEASON_TICKET_BASE,
                style: {
                    textDecoration: 'none'
                },
                target: a.pageMode ? void 0 : '_blank',
                children: (0, c.jsxs)(g.default, {
                    style: {
                        fontFamily: f.Fonts.SFPro,
                        marginTop: 15
                    },
                    size: 'large',
                    customFontWeight: f.FontWeights.Bold,
                    customColor: '#1677ff',
                    ariaLabel: `Purchase ${ k.SeasonTicketName.name }`,
                    children: [
                        (0, c.jsx)(h.default, {
                            name: 'fal fa-sparkles',
                            style: {
                                marginRight: 10
                            }
                        }),
                        'Purchase ',
                        k.SeasonTicketName.name
                    ]
                })
            }),
            (0, c.jsxs)(s, {
                children: [
                    'Season ends ',
                    m.SEASON_TICKET_END_DATE,
                    '.'
                ]
            })
        ]
    });
    const r = (0, d.default)(e.CenteredColumn).attrs({
            className: 'maxWidth'
        })(n || (n = p`
  padding: 6px 0px;
`)),
        s = d.default.div(o || (o = p`
  text-transform: none;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin-top: 10px;
`), f.Fonts.SFPro);
}), b.register('wiooy2', function(a, f) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var c, d = function() {
            function e(e, b) {
                for (var f = 0; f < b.length; f++) {
                    var g = b[f];
                    g.enumerable = g.enumerable || !1, g.configurable = !0, 'value' in g && (g.writable = !0), Object.defineProperty(e, g.key, g);
                }
            }
            return function(b, k, c) {
                return k && e(b.prototype, k), c && e(b, c), b;
            };
        }(),
        e = b('uPP4W'),
        f = (c = e) && c.__esModule ? c : {
            default: c
        },
        g = b('alDvw');
    var h = {
            position: 'relative'
        },
        i = function(a) {
            function j(a) {
                ! function(a, j) {
                    if (!(a instanceof j))
                        throw new TypeError('Cannot call a class as a function');
                }(this, j);
                var k = function(a, j) {
                    if (!a)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !j || 'object' != typeof j && 'function' != typeof j ? a : j;
                }(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this, a));
                return k.setRef = k.setRef.bind(k), k;
            }
            return function(a, j) {
                if ('function' != typeof j && null !== j)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof j);
                a.prototype = Object.create(j && j.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), j && (Object.setPrototypeOf ? Object.setPrototypeOf(a, j) : a.__proto__ = j);
            }(j, a), d(j, [{
                    key: 'componentWillReceiveProps',
                    value: function(a) {
                        a.active && !this.props.active && (0, g.confetti)(this.container, a.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(a) {
                        this.container = a;
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return f.default.createElement('div', {
                            className: this.props.className,
                            style: h,
                            ref: this.setRef
                        });
                    }
                }
            ]), j;
        }(e.Component);
    a.exports.default = i;
}), b.register('alDvw', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.confetti = function(a) {
        var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            d = Object.assign({}, f, c),
            e = d.elementCount,
            f = d.colors,
            g = d.width,
            h = d.height,
            i = d.angle,
            j = d.spread,
            k = d.startVelocity,
            l = d.decay,
            m = d.duration,
            n = d.random,
            o = c(a, e, f, g, h),
            p = o.map(function(a) {
                return {
                    element: a,
                    physics: d(i, j, k, n)
                };
            });
        return e(a, p, l, m);
    };

    function c(a, b, c, d, e) {
        return Array.from({
            length: b
        }).map(function(b, f) {
            var d = document.createElement('div'),
                e = c[f % c.length];
            return d.style['background-color'] = e, d.style.width = d, d.style.height = e, d.style.position = 'absolute', d.style.willChange = 'transform, opacity', a.appendChild(d), d;
        });
    }

    function d(a, b, c, d) {
        var e = a * (Math.PI / 180),
            f = b * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * d(),
            wobbleSpeed: 0.1 + 0.1 * d(),
            velocity: 0.5 * c + d() * c,
            angle2D: -e + (0.5 * f - d() * f),
            angle3D: -Math.PI / 4 + d() * (Math.PI / 2),
            tiltAngle: d() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * d()
        };
    }

    function e(a, b, c, d) {
        var f = void 0;
        return new Promise(function(j) {
            requestAnimationFrame(function k(l) {
                f || (f = l);
                var g = f === l ? 0 : (l - f) / d;
                b.forEach(function(a) {
                    return function(a, b, c) {
                        a.physics.x += Math.cos(a.physics.angle2D) * a.physics.velocity, a.physics.y += Math.sin(a.physics.angle2D) * a.physics.velocity, a.physics.z += Math.sin(a.physics.angle3D) * a.physics.velocity, a.physics.wobble += a.physics.wobbleSpeed, a.physics.velocity *= c, a.physics.y += 3, a.physics.tiltAngle += a.physics.tiltAngleSpeed;
                        var h = a.physics,
                            i = h.x,
                            j = h.y,
                            k = h.tiltAngle,
                            l = h.wobble,
                            m = 'translate3d(' + (i + 10 * Math.cos(l)) + 'px, ' + (j + 10 * Math.sin(l)) + 'px, 0) rotate3d(1, 1, 1, ' + k + 'rad)';
                        a.element.style.transform = m, a.element.style.opacity = 1 - b;
                    }(a, g, c);
                }), s - f < d ? requestAnimationFrame(i) : (b.forEach(function(b) {
                    if (b.element.parentNode === a)
                        return a.removeChild(b.element);
                }), f());
            });
        });
    }
    var f = {
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