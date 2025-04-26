function a(a, b, q, r) {
    Object.defineProperty(a, b, {
        get: q,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('Y3Af1', function(q, r) {
    var c;
    c = q.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(q.exports, 'default', function() {
        return t;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('lmfrI'),
        g = b('PjB0f'),
        h = b('grws7'),
        i = b('afYkG'),
        j = b('h99Nu'),
        k = b('ImHrc1'),
        l = b('qEw51'),
        m = b('KlhV/'),
        n = b('laJ/S');
    let o;
    const p = e.lazy(() => b('m/rC0')),
        q = e.lazy(() => b('+5hNR')),
        r = e.lazy(() => b('CCRQp')),
        s = e.lazy(() => b('bjWQV'));
    var t = a => {
        const {
            screen: u
        } = v;
        (0, n.useDidMount)(() => {
            (0, g.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        });
        return (0, d.jsx)(u, {
            children: (0, d.jsx)(l.default, {
                theme: {
                    algorithm: m.default.defaultAlgorithm
                },
                children: (0, d.jsxs)(e.Suspense, {
                    fallback: (0, d.jsx)('div', {}),
                    children: [
                        v.pageMode ? u === i.CosmosScreen.locker ? (0, d.jsx)(g.Title, {
                            title: 'Locker'
                        }) : u === i.CosmosScreen.shop ? (0, d.jsx)(g.Title, {
                            title: 'Shop'
                        }) : u === i.CosmosScreen.seasonTicket ? (0, d.jsx)(g.Title, {
                            title: k.SeasonTicketName.name
                        }) : u === i.CosmosScreen.pack ? (0, d.jsx)(g.Title, {
                            title: 'Pack'
                        }) : (0, d.jsx)(g.Title, {
                            title: 'Rewards'
                        }) : null,
                        u === i.CosmosScreen.locker ? (0, d.jsx)(q, {
                            onCosmeticSelectionChanged: v.onCosmeticSelectionChanged,
                            blockCharacterPreview: v.blockCharacterPreview
                        }) : u === i.CosmosScreen.shop ? (0, d.jsx)(r, {
                            onCosmeticSelectionChanged: v.onCosmeticSelectionChanged,
                            blockCharacterPreview: v.blockCharacterPreview,
                            setToPackScreen: v.pageMode ? void 0 : u => {
                                null == v || v.setMetadata(u), null == v || v.setScreen(i.CosmosScreen.pack);
                            }
                        }) : u === i.CosmosScreen.seasonTicket ? (0, d.jsx)(p, {
                            pageMode: v.pageMode
                        }) : u === i.CosmosScreen.pack ? (0, d.jsx)(s, {
                            pageMode: v.pageMode,
                            metadata: v.metadata
                        }) : (0, d.jsx)(h.default, {
                            notSyncedXP: v.notSyncedXP,
                            blockDiscord: v.blockDiscord
                        })
                    ]
                })
            })
        });
    };
    const u = j.default.div(o || (o = (a => a)`
  flex: 1;
  color: ${ 0 };
  user-select: none;
`), f.default.White);
}), b.register('grws7', function(q, r) {
    a(q.exports, 'default', function() {
        return u;
    });
    var c = b('8kSQZ'),
        d = b('5nJMd26');
    b('uPP4W');
    var e = b('QxgDW'),
        f = b('xLAjN'),
        g = b('fgVTE0'),
        h = b('lmfrI'),
        i = b('rjuBh'),
        j = b('YimJ0'),
        k = b('yscPJ'),
        l = b('yMXNb'),
        m = b('PjB0f'),
        n = b('0Gy6k');
    const o = a => {
        const {
            data: p,
            error: q,
            isLoading: r
        } = (0, i.default)(), [s, t, u] = (0, m.useBoolean)(!1);
        if (r)
            return (0, c.jsx)(j.Centered, {
                className: 'maxAll',
                children: (0, c.jsx)(g.default, {
                    style: {
                        color: h.default.White
                    }
                })
            });
        if (q)
            return (0, c.jsx)(j.Centered, {
                className: 'maxAll',
                children: 'There was an error loading your info. Please refresh and try again.'
            });
        const v = a.notSyncedXP || 0,
            w = Math.min(v + (p.unredeemedXP || 0), p.xpNeededPerLevel);
        if (s && !a.blockDiscord)
            return (0, c.jsx)(l.default, {
                close: u
            });
        const x = (0, m.isStudent)() && !a.blockDiscord && p.currentLevel >= 5;
        return (0, c.jsxs)(d.default, {
            direction: 'vertical',
            size: 35,
            className: 'maxAll',
            children: [
                (0, c.jsx)(e.default, {
                    ...p,
                    unredeemedXP: w
                }),
                (0, c.jsx)(f.default, {
                    notSyncedXP: v,
                    dailyXp: p.xpGainedToday,
                    periodXp: p.xpGainedInPeriod,
                    dailyXpLimit: p.maxXpToday,
                    periodXpLimit: p.maxXpInPeriod
                }),
                !!x && (0, c.jsx)(k.default, {
                    openDiscordScreen: t
                })
            ]
        });
    };
    var p = a => (0, c.jsx)(n.LimitedWidth, {
        children: (0, c.jsx)(o, {
            ...a
        })
    });
}), b.register('QxgDW', function(n, o) {
    a(n.exports, 'default', function() {
        return k;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('9O9yA'),
        e = b('bU1BH'),
        f = b('h99Nu'),
        g = b('NynNl'),
        h = b('32RS3'),
        i = b('oZdTn');
    let j;
    var k = a => (0, c.jsxs)(l, {
        style: {
            backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)'
        },
        children: [
            (0, c.jsx)(e.default, {
                selectedCharacter: a.selectedCharacter
            }),
            (0, c.jsx)(g.default, {
                currentLevel: a.currentLevel
            }),
            (0, c.jsx)(i.default, {
                currentLevel: a.currentLevel,
                unredeemedXP: a.unredeemedXP,
                xpNeededPerLevel: a.xpNeededPerLevel
            }),
            (0, c.jsx)(h.default, {})
        ]
    });
    const l = (0, f.default)(d.default).attrs({
        className: 'flex-center flex-column'
    })(j || (j = (a => a)`
  margin-top: ${ 0 }px;
`), e.CONTAINER_SIZE / 2);
}), b.register('9O9yA', function(n, o) {
    a(n.exports, 'default', function() {
        return f;
    });
    var c = b('h99Nu'),
        d = b('lmfrI');
    let e;
    var f = c.default.div(e || (e = (a => a)`
  padding: 30px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.09);
  border: 4px solid ${ 0 };
`), d.default.White);
}), b.register('bU1BH', function(n, o) {
    a(n.exports, 'CONTAINER_SIZE', function() {
        return m;
    }), a(n.exports, 'default', function() {
        return n;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('h99Nu'),
        f = b('lmfrI'),
        g = b('JJQ0+'),
        h = b('Rbi1s'),
        i = b('hoTkY');
    let j, k, l = a => a;
    const m = 150;
    var n = a => {
        const o = d.useMemo(() => a.selectedCharacter ? (0, h.default)({
            type: i.CosmeticType.character,
            id: a.selectedCharacter
        }) : (0, g.default)('characters/spine/preview/default_yellow.png'), [a.selectedCharacter]);
        return (0, c.jsx)(o, {
            children: (0, c.jsx)(p, {
                src: o
            })
        });
    };
    const o = e.default.div.attrs({
            className: 'flex-center'
        })(j || (j = l`
  height: ${ 0 }px;
  width: ${ 0 }px;
  border-radius: 50%;
  margin-top: ${ 0 }px;
  background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  );
  border: 4px solid ${ 0 };
`), m, m, -1 * (m / 2 + 30), f.default.White),
        p = e.default.img(k || (k = l`
  max-height: 85%;
  max-width: 85%;
  margin-left: 2px;
  transform: rotate(354deg);
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
  user-drag: none;
`));
}), b.register('Rbi1s', function(n, o) {
    a(n.exports, 'default', function() {
        return e;
    });
    var c = b('JJQ0+'),
        d = b('hoTkY');
    var e = a => {
        if (a.type === d.CosmeticType.character) {
            const f = a.id.replace('character_', '');
            return (0, c.default)(`characters/spine/preview/${ f }.png`);
        }
        if (a.type === d.CosmeticType.trail) {
            const f = a.id.replace(/^trail_/, '');
            return (0, c.default)(`trails/${ f }/preview.png`);
        }
        if (a.type === d.CosmeticType.sticker) {
            const f = a.id.replace(/^sticker_/, '');
            return (0, c.default)(`stickers/${ f }.png`);
        }
        return '/';
    };
}), b.register('NynNl', function(n, o) {
    a(n.exports, 'default', function() {
        return l;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('YimJ0'),
        f = b('gSUVO'),
        g = b('y8lS825'),
        h = b('ImHrc1');
    let i, j, k = a => a;
    var l = a => (0, c.jsxs)(e.CenteredColumn, {
        style: {
            marginTop: 20,
            textAlign: 'center'
        },
        children: [
            (0, c.jsxs)(m, {
                children: [
                    h.SeasonTicketSeason.seasonName,
                    ' ',
                    h.SeasonTicketSeason.seasonNumber
                ]
            }),
            (0, c.jsxs)(n, {
                children: [
                    g.default.level,
                    ' ',
                    a.currentLevel
                ]
            })
        ]
    });
    const m = d.default.div(i || (i = k`
  font-size: 18px;
  font-style: italic;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  font-weight: ${ 0 };
`), f.FontWeights.Bold),
        n = d.default.div(j || (j = k`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 52px;
  margin-top: -6px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
`), f.Fonts.FugazOne);
}), b.register('32RS3', function(n, o) {
    a(n.exports, 'default', function() {
        return h;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('gSUVO'),
        f = b('y8lS825');
    let g;
    var h = () => (0, c.jsxs)('div', {
        style: {
            fontSize: 16,
            marginTop: 20,
            color: 'rgba(255,255,255,0.9)'
        },
        children: [
            (0, c.jsxs)(i, {
                children: [
                    'Earn ',
                    f.default.xp,
                    ' to level up.'
                ]
            }),
            ' Each time you level up, you\'ll earn ',
            (0, c.jsxs)(i, {
                children: [
                    '100 ',
                    f.default.currency
                ]
            }),
            ' which you can use to purchase items in the Shop.',
            (0, c.jsx)('br', {}),
            ' ',
            (0, c.jsx)('br', {}),
            'You can earn ',
            f.default.xp,
            ' by playing 2D modes. ',
            f.default.xp,
            ' is granted every minute you play and answer questions correctly!'
        ]
    });
    const i = d.default.span(g || (g = (a => a)`
  font-weight: ${ 0 };
`), e.FontWeights.Bold);
}), b.register('oZdTn', function(n, o) {
    a(n.exports, 'default', function() {
        return l;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('gSUVO'),
        f = b('d1HEf'),
        g = b('PjB0f'),
        h = b('y8lS825');
    let i, j, k = a => a;
    var l = a => {
        const m = Math.min(a.xpNeededPerLevel - 1, a.unredeemedXP),
            n = Math.max(1, a.xpNeededPerLevel - m),
            o = m / a.xpNeededPerLevel * 100;
        return (0, c.jsxs)(m, {
            children: [
                (0, c.jsxs)(n, {
                    children: [
                        (0, c.jsxs)('div', {
                            children: [
                                (0, g.numberWithCommas)(m),
                                '/',
                                (0, g.numberWithCommas)(a.xpNeededPerLevel),
                                'XP'
                            ]
                        }),
                        (0, c.jsxs)('div', {
                            children: [
                                (0, g.numberWithCommas)(n),
                                ' ',
                                h.default.xp,
                                ' to',
                                ' ',
                                h.default.level,
                                ' ',
                                a.currentLevel + 1
                            ]
                        })
                    ]
                }),
                (0, c.jsx)(f.default, {
                    height: 60,
                    percentageComplete: o
                })
            ]
        });
    };
    const m = d.default.div.attrs({
            className: 'maxWidth'
        })(i || (i = k`
  margin-top: 14px;
`)),
        n = d.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(j || (j = k`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  font-family: ${ 0 };
  margin-bottom: 8px;
`), e.Fonts.FugazOne);
}), b.register('d1HEf', function(q, r) {
    a(q.exports, 'default', function() {
        return i;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu');
    let e, f, g, h = a => a;
    var i = a => (0, c.jsxs)(j, {
        style: {
            height: a.height
        },
        children: [
            (0, c.jsx)(k, {
                children: a.children
            }),
            (0, c.jsx)(l, {
                style: {
                    width: `${ Math.max(a.percentageComplete, 2) }%`
                }
            })
        ]
    });
    const j = d.default.div.attrs({
            className: 'maxWidth'
        })(e || (e = h`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
  position: relative;
`)),
        k = d.default.div.attrs({
            className: 'maxAll'
        })(f || (f = h`
  position: absolute;
  top: 0;
  left: 0;
`)),
        l = d.default.div.attrs({
            className: 'maxHeight'
        })(g || (g = h`
  width: 50%;
  background: #00c853;
`));
}), b.register('xLAjN', function(q, r) {
    a(q.exports, 'Title', function() {
        return q;
    }), a(q.exports, 'default', function() {
        return o;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('9O9yA'),
        f = b('gSUVO'),
        g = b('5nJMd26'),
        h = b('0b8AN'),
        i = b('PjB0f'),
        j = b('y8lS825'),
        k = b('/6tvL');
    let l, m, n = a => a;
    var o = a => {
        Math.min(a.dailyXpLimit, a.dailyXp + a.notSyncedXP);
        const p = Math.min(a.periodXpLimit, a.periodXp + a.notSyncedXP),
            {
                dailyXpLimit: q,
                periodXpLimit: r
            } = s;
        return (0, c.jsxs)(p, {
            children: [
                (0, c.jsx)(q, {
                    children: 'Limits'
                }),
                (0, c.jsx)(e.default, {
                    children: (0, c.jsx)(g.default, {
                        direction: 'vertical',
                        size: 22,
                        className: 'maxWidth',
                        children: (0, c.jsxs)('div', {
                            children: [
                                (0, c.jsx)(h.default, {
                                    name: `Weekly ${ j.default.xp }`,
                                    description: 'Resets on Wednesdays at 2:00pm EST',
                                    percentageComplete: Math.floor(p / r * 100),
                                    progressText: `${ (0, i.numberWithCommas)(p) }/${ (0, i.numberWithCommas)(r) } ${ j.default.xp }`
                                }),
                                (0, c.jsx)(k.default, {
                                    text: `Increase your Weekly ${ j.default.xp } limit to 20,000`,
                                    marginTop: 10
                                })
                            ]
                        })
                    })
                })
            ]
        });
    };
    const p = d.default.div(l || (l = n``)),
        q = d.default.div(m || (m = n`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 6px;
`), f.Fonts.FugazOne);
}), b.register('0b8AN', function(n, t) {
    a(n.exports, 'default', function() {
        return k;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('d1HEf'),
        f = b('gSUVO');
    let g, h, i, j = a => a;
    var k = a => (0, c.jsxs)(l, {
        children: [
            (0, c.jsx)(m, {
                children: a.name
            }),
            (0, c.jsx)(n, {
                children: a.description
            }),
            (0, c.jsx)(e.default, {
                height: 45,
                percentageComplete: a.percentageComplete,
                children: (0, c.jsx)('div', {
                    className: 'maxAll flex vc',
                    children: (0, c.jsx)('span', {
                        style: {
                            fontFamily: f.Fonts.FugazOne,
                            textTransform: 'uppercase',
                            textShadow: '1px 1px 10px rgba(0,0,0,0.2)',
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: 12,
                            marginLeft: 15
                        },
                        children: a.progressText
                    })
                })
            })
        ]
    });
    const l = d.default.div(g || (g = j``)),
        m = d.default.div(h || (h = j`
  font-size: 20px;
  font-weight: ${ 0 };
`), f.FontWeights.UltraBold),
        n = d.default.div(i || (i = j`
  font-size: 16px;
  margin-bottom: 11px;
  color: rgba(255, 255, 255, 0.85);
  font-style: italic;
  margin-top: -2px;
`));
}), b.register('/6tvL', function(n, t) {
    a(n.exports, 'default', function() {
        return l;
    });
    var c = b('8kSQZ'),
        d = b('bPH7V'),
        e = b('qEw51'),
        f = b('KlhV/');
    b('uPP4W');
    var g = b('iYEuk12'),
        h = b('q721a'),
        i = b('gSUVO'),
        j = b('ImHrc1'),
        k = b('rZ3/P');
    var l = a => {
        return (0, k.OwnsSeasonTicket)() ? null : (0, c.jsx)(e.default, {
            theme: {
                algorithm: f.default.defaultAlgorithm
            },
            children: (0, c.jsx)(d.default, {
                showIcon: !0,
                style: {
                    marginTop: null !== (b = a.marginTop) && void 0 !== b ? b : 0,
                    marginBottom: null !== (n = a.marginBottom) && void 0 !== n ? n : 0
                },
                message: (0, c.jsxs)('span', {
                    children: [
                        a.text,
                        ' with the',
                        ' ',
                        (0, c.jsx)(g.default, {
                            to: h.SEASON_TICKET_BASE,
                            style: {
                                textDecoration: 'underline',
                                fontWeight: i.FontWeights.Bold
                            },
                            children: j.SeasonTicketName.name
                        })
                    ]
                })
            })
        });
        var m, n;
    };
}), b.register('rZ3/P', function(g, t) {
    a(g.exports, 'OwnsSeasonTicket', function() {
        return d;
    });
    var c = b('PjB0f');
    const d = () => {
        var e, f, g;
        return null !== (g = null === (e = (0, c.getUser)()) || void 0 === e || null === (f = e.seasonTicket) || void 0 === f ? void 0 : f.active) && void 0 !== g && g;
    };
}), b.register('yscPJ', function(s, t) {
    a(s.exports, 'default', function() {
        return q;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('PjB0f'),
        f = b('gSUVO'),
        g = b('JJQ0+'),
        h = b('iMnBi'),
        i = b('9O9yA'),
        j = b('xLAjN');
    let k, l, m, n, o, p = a => a;
    var q = a => {
        const [r, s, t] = (0, e.useBoolean)(!1);
        return (0, c.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, c.jsx)(j.Title, {
                    children: 'Community'
                }),
                (0, c.jsxs)(r, {
                    onMouseEnter: s,
                    onMouseLeave: t,
                    onClick: a.openDiscordScreen,
                    children: [
                        (0, c.jsxs)(s, {
                            children: [
                                (0, c.jsx)(t, {
                                    style: {
                                        transform: `rotate(${ r ? -10 : 0 }deg) scale(${ r ? 1.2 : 1 })`,
                                        opacity: r ? 1 : 0.9
                                    }
                                }),
                                (0, c.jsx)(u, {
                                    style: {
                                        opacity: r ? 1 : 0.9
                                    },
                                    children: 'Join the Gimkit Discord Community!'
                                })
                            ]
                        }),
                        (0, c.jsx)(v, {
                            children: (0, c.jsx)(h.default, {
                                name: 'far fa-external-link'
                            })
                        })
                    ]
                })
            ]
        });
    };
    const r = (0, d.default)(i.default).attrs({
            className: 'flex between vc'
        })(k || (k = p`
  background: linear-gradient(to right, #000046, #1cb5e0);
  font-family: ${ 0 };
  cursor: pointer;
  border: 4px solid rgba(255, 255, 255, 0.8);
`), f.Fonts.SFPro),
        s = d.default.div.attrs({
            className: 'flex vc'
        })(l || (l = p``)),
        t = d.default.img.attrs({
            src: (0, g.default)('cosmos/discord.svg'),
            loading: 'lazy'
        })(m || (m = p`
  height: 30px;
  transition: transform 0.2s, opacity 0.2s;
`)),
        u = d.default.div(n || (n = p`
  line-height: 1;
  font-size: 16px;
  font-weight: ${ 0 };
  margin-left: 15px;
  transition: opacity 0.2s;
`), f.FontWeights.Bold),
        v = d.default.div(o || (o = p`
  font-size: 18px;
  margin-left: 30px;
`));
}), b.register('yMXNb', function(r, a) {
    a(r.exports, 'default', function() {
        return r;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('9O9yA'),
        f = b('lmfrI'),
        g = b('JJQ0+'),
        h = b('gSUVO'),
        i = b('Dog9Y'),
        j = b('nHOR/');
    let k, l, m, n, o, p, q = a => a;
    var r = a => (0, c.jsx)(s, {
        children: (0, c.jsxs)(t, {
            children: [
                (0, c.jsx)(u, {}),
                (0, c.jsx)(v, {
                    children: 'Gimkit Discord Community'
                }),
                (0, c.jsx)(j.default, {
                    children: (0, c.jsxs)(w, {
                        children: [
                            'Be a part of our Discord server to discuss all things Gimkit! ',
                            (0, c.jsx)('br', {}),
                            'To join, ',
                            (0, c.jsx)('b', {
                                children: 'you must be age 13 or older.'
                            })
                        ]
                    })
                }),
                (0, c.jsx)(i.default, {
                    type: 'success',
                    onClick: () => {
                        window.open('https://discord.com/invite/K7ZPTtz7SJ', '_blank'), a.close();
                    },
                    ariaLabel: 'Join',
                    children: '\xA0\xA0\xA0\xA0JOIN\xA0\xA0\xA0\xA0'
                }),
                (0, c.jsx)(x, {
                    onClick: a.close,
                    children: '...or go back'
                })
            ]
        })
    });
    const s = (0, d.default)(e.default)(k || (k = q`
  background: linear-gradient(to bottom, #000046, #1cb5e0);
  padding: 35px;
  border: 4px solid ${ 0 };
  overflow: hidden;
  font-family: ${ 0 };
  text-align: center;
`), f.default.White, h.Fonts.FugazOne),
        t = d.default.div.attrs({
            className: 'flex-column flex-center maxWidth'
        })(l || (l = q``)),
        u = d.default.img.attrs({
            src: (0, g.default)('cosmos/discord.svg')
        })(m || (m = q`
  height: 60px;
  opacity: 0.8px;
`)),
        v = d.default.div(n || (n = q`
  text-transform: uppercase;
  font-size: 30px;
  margin-top: 14px;
`)),
        w = d.default.div(o || (o = q`
  font-size: 16px;
  font-family: ${ 0 };
  margin-top: 10px;
  margin-bottom: 20px;
  opacity: 0.85;
`), h.Fonts.SFPro),
        x = d.default.div(p || (p = q`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline;
  font-family: ${ 0 };
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: ${ 0 };
    text-decoration: underline;
  }
`), h.Fonts.SFPro, f.default.White);
}), b.register('0Gy6k', function(r, a) {
    a(r.exports, 'LimitedWidth', function() {
        return h;
    });
    var c = b('8kSQZ'),
        d = b('h99Nu');
    let e, f, g = a => a;
    const h = a => {
            var i;
            return (0, c.jsx)(i, {
                children: (0, c.jsx)(j, {
                    style: {
                        maxWidth: null !== (i = a.customWidth) && void 0 !== i ? i : 721
                    },
                    children: a.children
                })
            });
        },
        i = d.default.div.attrs({
            className: 'maxWidth flex hc'
        })(e || (e = g``)),
        j = d.default.div.attrs({
            className: 'maxWidth'
        })(f || (f = g``));
}), b.register('m/rC0', function(a, r) {
    a.exports = Promise.all([
        import('./' + b('tIOy4').resolve('1LSU6')),
        import('./' + b('tIOy4').resolve('bRZSS')),
        import('./' + b('tIOy4').resolve('dlj8o'))
    ]).then(() => b('5d3ST'));
}), b.register('+5hNR', function(a, r) {
    a.exports = Promise.all([
        import('./' + b('tIOy4').resolve('1LSU6')),
        import('./' + b('tIOy4').resolve('bRZSS')),
        import('./' + b('tIOy4').resolve('gstzG'))
    ]).then(() => b('zlMYi'));
}), b.register('CCRQp', function(a, r) {
    a.exports = Promise.all([
        import('./' + b('tIOy4').resolve('1LSU6')),
        import('./' + b('tIOy4').resolve('bRZSS')),
        import('./' + b('tIOy4').resolve('hK5D8'))
    ]).then(() => b('W8gcG'));
}), b.register('bjWQV', function(a, r) {
    a.exports = Promise.all([
        import('./' + b('tIOy4').resolve('1LSU6')),
        import('./' + b('tIOy4').resolve('bRZSS')),
        import('./' + b('tIOy4').resolve('baSvy'))
    ]).then(() => b('yxYDl'));
});