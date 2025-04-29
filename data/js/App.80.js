function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('gRKvt', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _v;
    });
    var f = b('gRbUn'),
        g = b('O0Kav'),
        h = b('8KqQ+'),
        i = b('quE27'),
        j = b('J+uK+'),
        k = b('8Int8'),
        l = b('u4s09'),
        m = b('hupyL1'),
        n = b('R2nG3'),
        o = b('NmQt6'),
        p = b('lKjHC');
    let q;
    const r = g.lazy(() => b('Y1eSs')),
        s = g.lazy(() => b('fPERJ')),
        t = g.lazy(() => b('oWoy8')),
        u = g.lazy(() => b('6O/vf'));
    var _v = a => {
        const {
            screen: w
        } = a;
        (0, p.useDidMount)(() => {
            (0, i.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        });
        return (0, f.jsx)(_w, {
            children: (0, f.jsx)(n.default, {
                theme: {
                    algorithm: o.default.defaultAlgorithm
                },
                children: (0, f.jsxs)(g.Suspense, {
                    fallback: (0, f.jsx)('div', {}),
                    children: [
                        a.pageMode ? w === k.CosmosScreen.locker ? (0, f.jsx)(i.Title, {
                            title: 'Locker'
                        }) : w === k.CosmosScreen.shop ? (0, f.jsx)(i.Title, {
                            title: 'Shop'
                        }) : w === k.CosmosScreen.seasonTicket ? (0, f.jsx)(i.Title, {
                            title: m.SeasonTicketName.name
                        }) : w === k.CosmosScreen.pack ? (0, f.jsx)(i.Title, {
                            title: 'Pack'
                        }) : (0, f.jsx)(i.Title, {
                            title: 'Rewards'
                        }) : null,
                        w === k.CosmosScreen.locker ? (0, f.jsx)(s, {
                            onCosmeticSelectionChanged: a.onCosmeticSelectionChanged,
                            blockCharacterPreview: a.blockCharacterPreview
                        }) : w === k.CosmosScreen.shop ? (0, f.jsx)(t, {
                            onCosmeticSelectionChanged: a.onCosmeticSelectionChanged,
                            blockCharacterPreview: a.blockCharacterPreview,
                            setToPackScreen: a.pageMode ? void 0 : w => {
                                null == a || a.setMetadata(w), null == a || a.setScreen(k.CosmosScreen.pack);
                            }
                        }) : w === k.CosmosScreen.seasonTicket ? (0, f.jsx)(r, {
                            pageMode: a.pageMode
                        }) : w === k.CosmosScreen.pack ? (0, f.jsx)(u, {
                            pageMode: a.pageMode,
                            metadata: a.metadata
                        }) : (0, f.jsx)(j.default, {
                            notSyncedXP: a.notSyncedXP,
                            blockDiscord: a.blockDiscord
                        })
                    ]
                })
            })
        });
    };
    const _w = l.default.div(q || (q = (a => a)`
  flex: 1;
  color: ${ 0 };
  user-select: none;
`), h.default.White);
}), b.register('J+uK+', function(c, d) {
    a(c.exports, 'default', function() {
        return _w;
    });
    var e = b('gRbUn'),
        f = b('E2AMI26');
    b('O0Kav');
    var g = b('CCD3z'),
        h = b('287yX'),
        i = b('JNGrh0'),
        j = b('8KqQ+'),
        k = b('Y8VMd'),
        l = b('MgONH'),
        m = b('xeJKP'),
        n = b('wljt9'),
        o = b('quE27'),
        p = b('TfnJ9');
    const q = a => {
        const {
            data: r,
            error: s,
            isLoading: t
        } = (0, k.default)(), [u, v, _w] = (0, o.useBoolean)(!1);
        if (t)
            return (0, e.jsx)(l.Centered, {
                className: 'maxAll',
                children: (0, e.jsx)(i.default, {
                    style: {
                        color: j.default.White
                    }
                })
            });
        if (s)
            return (0, e.jsx)(l.Centered, {
                className: 'maxAll',
                children: 'There was an error loading your info. Please refresh and try again.'
            });
        const x = a.notSyncedXP || 0,
            y = Math.min(x + (r.unredeemedXP || 0), r.xpNeededPerLevel);
        if (u && !a.blockDiscord)
            return (0, e.jsx)(n.default, {
                close: _w
            });
        const z = (0, o.isStudent)() && !a.blockDiscord && r.currentLevel >= 5;
        return (0, e.jsxs)(f.default, {
            direction: 'vertical',
            size: 35,
            className: 'maxAll',
            children: [
                (0, e.jsx)(g.default, {
                    ...r,
                    unredeemedXP: y
                }),
                (0, e.jsx)(h.default, {
                    notSyncedXP: x,
                    dailyXp: r.xpGainedToday,
                    periodXp: r.xpGainedInPeriod,
                    dailyXpLimit: r.maxXpToday,
                    periodXpLimit: r.maxXpInPeriod
                }),
                !!z && (0, e.jsx)(m.default, {
                    openDiscordScreen: v
                })
            ]
        });
    };
    var r = a => (0, e.jsx)(p.LimitedWidth, {
        children: (0, e.jsx)(q, {
            ...a
        })
    });
}), b.register('CCD3z', function(c, d) {
    a(c.exports, 'default', function() {
        return _m;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('FzqBp'),
        g = b('wC1Yp'),
        h = b('u4s09'),
        i = b('zM8Q4'),
        j = b('nsJcn'),
        k = b('OZDtP');
    let l;
    var _m = a => (0, e.jsxs)(_n, {
        style: {
            backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)'
        },
        children: [
            (0, e.jsx)(g.default, {
                selectedCharacter: a.selectedCharacter
            }),
            (0, e.jsx)(i.default, {
                currentLevel: a.currentLevel
            }),
            (0, e.jsx)(k.default, {
                currentLevel: a.currentLevel,
                unredeemedXP: a.unredeemedXP,
                xpNeededPerLevel: a.xpNeededPerLevel
            }),
            (0, e.jsx)(j.default, {})
        ]
    });
    const _n = (0, h.default)(f.default).attrs({
        className: 'flex-center flex-column'
    })(l || (l = (a => a)`
  margin-top: ${ 0 }px;
`), g.CONTAINER_SIZE / 2);
}), b.register('FzqBp', function(c, d) {
    a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('u4s09'),
        f = b('8KqQ+');
    let g;
    var _h = e.default.div(g || (g = (a => a)`
  padding: 30px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.09);
  border: 4px solid ${ 0 };
`), f.default.White);
}), b.register('wC1Yp', function(c, d) {
    a(c.exports, 'CONTAINER_SIZE', function() {
        return _o;
    }), a(c.exports, 'default', function() {
        return _p;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('u4s09'),
        h = b('8KqQ+'),
        i = b('UaUBz0'),
        j = b('RoTfF'),
        k = b('WrOhL');
    let l, m, n = a => a;
    const _o = 150;
    var _p = a => {
        const q = f.useMemo(() => a.selectedCharacter ? (0, j.default)({
            type: k.CosmeticType.character,
            id: a.selectedCharacter
        }) : (0, i.default)('characters/spine/preview/default_yellow.png'), [a.selectedCharacter]);
        return (0, e.jsx)(_q, {
            children: (0, e.jsx)(_r, {
                src: q
            })
        });
    };
    const _q = g.default.div.attrs({
            className: 'flex-center'
        })(l || (l = n`
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
`), _o, _o, -1 * (_o / 2 + 30), h.default.White),
        _r = g.default.img(m || (m = n`
  max-height: 85%;
  max-width: 85%;
  margin-left: 2px;
  transform: rotate(354deg);
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
  user-drag: none;
`));
}), b.register('RoTfF', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('UaUBz0'),
        f = b('WrOhL');
    var _g = a => {
        if (a.type === f.CosmeticType.character) {
            const h = a.id.replace('character_', '');
            return (0, e.default)(`characters/spine/preview/${ h }.png`);
        }
        if (a.type === f.CosmeticType.trail) {
            const h = a.id.replace(/^trail_/, '');
            return (0, e.default)(`trails/${ h }/preview.png`);
        }
        if (a.type === f.CosmeticType.sticker) {
            const h = a.id.replace(/^sticker_/, '');
            return (0, e.default)(`stickers/${ h }.png`);
        }
        return '/';
    };
}), b.register('zM8Q4', function(c, d) {
    a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('MgONH'),
        h = b('Eh2Wh'),
        i = b('LE3I425'),
        j = b('hupyL1');
    let k, l, m = a => a;
    var _n = a => (0, e.jsxs)(g.CenteredColumn, {
        style: {
            marginTop: 20,
            textAlign: 'center'
        },
        children: [
            (0, e.jsxs)(_o, {
                children: [
                    j.SeasonTicketSeason.seasonName,
                    ' ',
                    j.SeasonTicketSeason.seasonNumber
                ]
            }),
            (0, e.jsxs)(_p, {
                children: [
                    i.default.level,
                    ' ',
                    a.currentLevel
                ]
            })
        ]
    });
    const _o = f.default.div(k || (k = m`
  font-size: 18px;
  font-style: italic;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  font-weight: ${ 0 };
`), h.FontWeights.Bold),
        _p = f.default.div(l || (l = m`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 52px;
  margin-top: -6px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
`), h.Fonts.FugazOne);
}), b.register('nsJcn', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('Eh2Wh'),
        h = b('LE3I425');
    let i;
    var _j = () => (0, e.jsxs)('div', {
        style: {
            fontSize: 16,
            marginTop: 20,
            color: 'rgba(255,255,255,0.9)'
        },
        children: [
            (0, e.jsxs)(_k, {
                children: [
                    'Earn ',
                    h.default.xp,
                    ' to level up.'
                ]
            }),
            ' Each time you level up, you\'ll earn ',
            (0, e.jsxs)(_k, {
                children: [
                    '100 ',
                    h.default.currency
                ]
            }),
            ' which you can use to purchase items in the Shop.',
            (0, e.jsx)('br', {}),
            ' ',
            (0, e.jsx)('br', {}),
            'You can earn ',
            h.default.xp,
            ' by playing 2D modes. ',
            h.default.xp,
            ' is granted every minute you play and answer questions correctly!'
        ]
    });
    const _k = f.default.span(i || (i = (a => a)`
  font-weight: ${ 0 };
`), g.FontWeights.Bold);
}), b.register('OZDtP', function(c, d) {
    a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('Eh2Wh'),
        h = b('eYpww'),
        i = b('quE27'),
        j = b('LE3I425');
    let k, l, m = a => a;
    var _n = a => {
        const o = Math.min(a.xpNeededPerLevel - 1, a.unredeemedXP),
            p = Math.max(1, a.xpNeededPerLevel - o),
            q = o / a.xpNeededPerLevel * 100;
        return (0, e.jsxs)(_o, {
            children: [
                (0, e.jsxs)(_p, {
                    children: [
                        (0, e.jsxs)('div', {
                            children: [
                                (0, i.numberWithCommas)(o),
                                '/',
                                (0, i.numberWithCommas)(a.xpNeededPerLevel),
                                'XP'
                            ]
                        }),
                        (0, e.jsxs)('div', {
                            children: [
                                (0, i.numberWithCommas)(p),
                                ' ',
                                j.default.xp,
                                ' to',
                                ' ',
                                j.default.level,
                                ' ',
                                a.currentLevel + 1
                            ]
                        })
                    ]
                }),
                (0, e.jsx)(h.default, {
                    height: 60,
                    percentageComplete: q
                })
            ]
        });
    };
    const _o = f.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = m`
  margin-top: 14px;
`)),
        _p = f.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(l || (l = m`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  font-family: ${ 0 };
  margin-bottom: 8px;
`), g.Fonts.FugazOne);
}), b.register('eYpww', function(c, d) {
    a(c.exports, 'default', function() {
        return _k;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09');
    let g, h, i, j = a => a;
    var _k = a => (0, e.jsxs)(_l, {
        style: {
            height: a.height
        },
        children: [
            (0, e.jsx)(_m, {
                children: a.children
            }),
            (0, e.jsx)(_n, {
                style: {
                    width: `${ Math.max(a.percentageComplete, 2) }%`
                }
            })
        ]
    });
    const _l = f.default.div.attrs({
            className: 'maxWidth'
        })(g || (g = j`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
  position: relative;
`)),
        _m = f.default.div.attrs({
            className: 'maxAll'
        })(h || (h = j`
  position: absolute;
  top: 0;
  left: 0;
`)),
        _n = f.default.div.attrs({
            className: 'maxHeight'
        })(i || (i = j`
  width: 50%;
  background: #00c853;
`));
}), b.register('287yX', function(c, d) {
    a(c.exports, 'Title', function() {
        return _s;
    }), a(c.exports, 'default', function() {
        return _q;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('FzqBp'),
        h = b('Eh2Wh'),
        i = b('E2AMI26'),
        j = b('ffNw8'),
        k = b('quE27'),
        l = b('LE3I425'),
        m = b('C1J2w');
    let n, o, p = a => a;
    var _q = a => {
        Math.min(a.dailyXpLimit, a.dailyXp + a.notSyncedXP);
        const r = Math.min(a.periodXpLimit, a.periodXp + a.notSyncedXP),
            {
                dailyXpLimit: s,
                periodXpLimit: t
            } = a;
        return (0, e.jsxs)(_r, {
            children: [
                (0, e.jsx)(_s, {
                    children: 'Limits'
                }),
                (0, e.jsx)(g.default, {
                    children: (0, e.jsx)(i.default, {
                        direction: 'vertical',
                        size: 22,
                        className: 'maxWidth',
                        children: (0, e.jsxs)('div', {
                            children: [
                                (0, e.jsx)(j.default, {
                                    name: `Weekly ${ l.default.xp }`,
                                    description: 'Resets on Wednesdays at 2:00pm EST',
                                    percentageComplete: Math.floor(r / t * 100),
                                    progressText: `${ (0, k.numberWithCommas)(r) }/${ (0, k.numberWithCommas)(t) } ${ l.default.xp }`
                                }),
                                (0, e.jsx)(m.default, {
                                    text: `Increase your Weekly ${ l.default.xp } limit to 20,000`,
                                    marginTop: 10
                                })
                            ]
                        })
                    })
                })
            ]
        });
    };
    const _r = f.default.div(n || (n = p``)),
        _s = f.default.div(o || (o = p`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 6px;
`), h.Fonts.FugazOne);
}), b.register('ffNw8', function(c, d) {
    a(c.exports, 'default', function() {
        return _m;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('eYpww'),
        h = b('Eh2Wh');
    let i, j, k, l = a => a;
    var _m = a => (0, e.jsxs)(_n, {
        children: [
            (0, e.jsx)(_o, {
                children: a.name
            }),
            (0, e.jsx)(_p, {
                children: a.description
            }),
            (0, e.jsx)(g.default, {
                height: 45,
                percentageComplete: a.percentageComplete,
                children: (0, e.jsx)('div', {
                    className: 'maxAll flex vc',
                    children: (0, e.jsx)('span', {
                        style: {
                            fontFamily: h.Fonts.FugazOne,
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
    const _n = f.default.div(i || (i = l``)),
        _o = f.default.div(j || (j = l`
  font-size: 20px;
  font-weight: ${ 0 };
`), h.FontWeights.UltraBold),
        _p = f.default.div(k || (k = l`
  font-size: 16px;
  margin-bottom: 11px;
  color: rgba(255, 255, 255, 0.85);
  font-style: italic;
  margin-top: -2px;
`));
}), b.register('C1J2w', function(c, d) {
    a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('gRbUn'),
        f = b('qMSe6'),
        g = b('R2nG3'),
        h = b('NmQt6');
    b('O0Kav');
    var i = b('FB7HT26'),
        j = b('nKuOQ'),
        k = b('Eh2Wh'),
        l = b('hupyL1'),
        m = b('B/GC10');
    var _n = a => {
        return (0, m.OwnsSeasonTicket)() ? null : (0, e.jsx)(g.default, {
            theme: {
                algorithm: h.default.defaultAlgorithm
            },
            children: (0, e.jsx)(f.default, {
                showIcon: !0,
                style: {
                    marginTop: null !== (b = a.marginTop) && void 0 !== b ? b : 0,
                    marginBottom: null !== (c = a.marginBottom) && void 0 !== c ? c : 0
                },
                message: (0, e.jsxs)('span', {
                    children: [
                        a.text,
                        ' with the',
                        ' ',
                        (0, e.jsx)(i.default, {
                            to: j.SEASON_TICKET_BASE,
                            style: {
                                textDecoration: 'underline',
                                fontWeight: k.FontWeights.Bold
                            },
                            children: l.SeasonTicketName.name
                        })
                    ]
                })
            })
        });
        var o, p;
    };
}), b.register('B/GC10', function(c, d) {
    a(c.exports, 'OwnsSeasonTicket', function() {
        return _f;
    });
    var e = b('quE27');
    const _f = () => {
        var g, h, i;
        return null !== (i = null === (g = (0, e.getUser)()) || void 0 === g || null === (h = g.seasonTicket) || void 0 === h ? void 0 : h.active) && void 0 !== i && i;
    };
}), b.register('xeJKP', function(c, d) {
    a(c.exports, 'default', function() {
        return _s;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('quE27'),
        h = b('Eh2Wh'),
        i = b('UaUBz0'),
        j = b('t52Ep'),
        k = b('FzqBp'),
        l = b('287yX');
    let m, n, o, p, q, r = a => a;
    var _s = a => {
        const [t, u, v] = (0, g.useBoolean)(!1);
        return (0, e.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, e.jsx)(l.Title, {
                    children: 'Community'
                }),
                (0, e.jsxs)(_t, {
                    onMouseEnter: u,
                    onMouseLeave: v,
                    onClick: a.openDiscordScreen,
                    children: [
                        (0, e.jsxs)(_u, {
                            children: [
                                (0, e.jsx)(_v, {
                                    style: {
                                        transform: `rotate(${ t ? -10 : 0 }deg) scale(${ t ? 1.2 : 1 })`,
                                        opacity: t ? 1 : 0.9
                                    }
                                }),
                                (0, e.jsx)(_w, {
                                    style: {
                                        opacity: t ? 1 : 0.9
                                    },
                                    children: 'Join the Gimkit Discord Community!'
                                })
                            ]
                        }),
                        (0, e.jsx)(_x, {
                            children: (0, e.jsx)(j.default, {
                                name: 'far fa-external-link'
                            })
                        })
                    ]
                })
            ]
        });
    };
    const _t = (0, f.default)(k.default).attrs({
            className: 'flex between vc'
        })(m || (m = r`
  background: linear-gradient(to right, #000046, #1cb5e0);
  font-family: ${ 0 };
  cursor: pointer;
  border: 4px solid rgba(255, 255, 255, 0.8);
`), h.Fonts.SFPro),
        _u = f.default.div.attrs({
            className: 'flex vc'
        })(n || (n = r``)),
        _v = f.default.img.attrs({
            src: (0, i.default)('cosmos/discord.svg'),
            loading: 'lazy'
        })(o || (o = r`
  height: 30px;
  transition: transform 0.2s, opacity 0.2s;
`)),
        _w = f.default.div(p || (p = r`
  line-height: 1;
  font-size: 16px;
  font-weight: ${ 0 };
  margin-left: 15px;
  transition: opacity 0.2s;
`), h.FontWeights.Bold),
        _x = f.default.div(q || (q = r`
  font-size: 18px;
  margin-left: 30px;
`));
}), b.register('wljt9', function(c, d) {
    a(c.exports, 'default', function() {
        return _t;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('FzqBp'),
        h = b('8KqQ+'),
        i = b('UaUBz0'),
        j = b('Eh2Wh'),
        k = b('aPZ+w'),
        l = b('V704d');
    let m, n, o, p, q, r, s = a => a;
    var _t = a => (0, e.jsx)(_u, {
        children: (0, e.jsxs)(_v, {
            children: [
                (0, e.jsx)(_w, {}),
                (0, e.jsx)(_x, {
                    children: 'Gimkit Discord Community'
                }),
                (0, e.jsx)(l.default, {
                    children: (0, e.jsxs)(_y, {
                        children: [
                            'Be a part of our Discord server to discuss all things Gimkit! ',
                            (0, e.jsx)('br', {}),
                            'To join, ',
                            (0, e.jsx)('b', {
                                children: 'you must be age 13 or older.'
                            })
                        ]
                    })
                }),
                (0, e.jsx)(k.default, {
                    type: 'success',
                    onClick: () => {
                        window.open('https://discord.com/invite/K7ZPTtz7SJ', '_blank'), a.close();
                    },
                    ariaLabel: 'Join',
                    children: '\xA0\xA0\xA0\xA0JOIN\xA0\xA0\xA0\xA0'
                }),
                (0, e.jsx)(_z, {
                    onClick: a.close,
                    children: '...or go back'
                })
            ]
        })
    });
    const _u = (0, f.default)(g.default)(m || (m = s`
  background: linear-gradient(to bottom, #000046, #1cb5e0);
  padding: 35px;
  border: 4px solid ${ 0 };
  overflow: hidden;
  font-family: ${ 0 };
  text-align: center;
`), h.default.White, j.Fonts.FugazOne),
        _v = f.default.div.attrs({
            className: 'flex-column flex-center maxWidth'
        })(n || (n = s``)),
        _w = f.default.img.attrs({
            src: (0, i.default)('cosmos/discord.svg')
        })(o || (o = s`
  height: 60px;
  opacity: 0.8px;
`)),
        _x = f.default.div(p || (p = s`
  text-transform: uppercase;
  font-size: 30px;
  margin-top: 14px;
`)),
        _y = f.default.div(q || (q = s`
  font-size: 16px;
  font-family: ${ 0 };
  margin-top: 10px;
  margin-bottom: 20px;
  opacity: 0.85;
`), j.Fonts.SFPro),
        _z = f.default.div(r || (r = s`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline;
  font-family: ${ 0 };
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: ${ 0 };
    text-decoration: underline;
  }
`), j.Fonts.SFPro, h.default.White);
}), b.register('TfnJ9', function(c, d) {
    a(c.exports, 'LimitedWidth', function() {
        return _j;
    });
    var e = b('gRbUn'),
        f = b('u4s09');
    let g, h, i = a => a;
    const _j = a => {
            var k;
            return (0, e.jsx)(_k, {
                children: (0, e.jsx)(_l, {
                    style: {
                        maxWidth: null !== (k = a.customWidth) && void 0 !== k ? k : 721
                    },
                    children: a.children
                })
            });
        },
        _k = f.default.div.attrs({
            className: 'maxWidth flex hc'
        })(g || (g = i``)),
        _l = f.default.div.attrs({
            className: 'maxWidth'
        })(h || (h = i``));
}), b.register('Y1eSs', function(c, d) {
    c.exports = Promise.all([
        import('./' + b('Dq3qN').resolve('lAS3I')),
        import('./' + b('Dq3qN').resolve('emV63')),
        import('./' + b('Dq3qN').resolve('dlj8o'))
    ]).then(() => b('3icon'));
}), b.register('fPERJ', function(c, d) {
    c.exports = Promise.all([
        import('./' + b('Dq3qN').resolve('lAS3I')),
        import('./' + b('Dq3qN').resolve('emV63')),
        import('./' + b('Dq3qN').resolve('gstzG'))
    ]).then(() => b('ECSXP'));
}), b.register('oWoy8', function(c, d) {
    c.exports = Promise.all([
        import('./' + b('Dq3qN').resolve('lAS3I')),
        import('./' + b('Dq3qN').resolve('emV63')),
        import('./' + b('Dq3qN').resolve('hK5D8'))
    ]).then(() => b('SruRO'));
}), b.register('6O/vf', function(c, d) {
    c.exports = Promise.all([
        import('./' + b('Dq3qN').resolve('lAS3I')),
        import('./' + b('Dq3qN').resolve('emV63')),
        import('./' + b('Dq3qN').resolve('baSvy'))
    ]).then(() => b('0oHOB'));
});