function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('XZoNn', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _f(b.exports, 'default', function() {
        return _u;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('sHRDd'),
        h = a('PMl60'),
        i = a('OME2O'),
        j = a('c+mkO'),
        k = a('Axq+p'),
        l = a('l0C72'),
        m = a('1P5ls'),
        n = a('cH8qQ'),
        o = a('+i8ep');
    let p;
    const q = f.lazy(() => a('iif4V')),
        r = f.lazy(() => a('fZOo4')),
        s = f.lazy(() => a('7HPYO')),
        t = f.lazy(() => a('UNLkI'));
    var _u = _f => {
        const {
            screen: v
        } = _f;
        (0, o.useDidMount)(() => {
            (0, h.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        });
        return (0, e.jsx)(_v, {
            children: (0, e.jsx)(m.default, {
                theme: {
                    algorithm: n.default.defaultAlgorithm
                },
                children: (0, e.jsxs)(f.Suspense, {
                    fallback: (0, e.jsx)('div', {}),
                    children: [
                        _f.pageMode ? v === j.CosmosScreen.locker ? (0, e.jsx)(h.Title, {
                            title: 'Locker'
                        }) : v === j.CosmosScreen.shop ? (0, e.jsx)(h.Title, {
                            title: 'Shop'
                        }) : v === j.CosmosScreen.seasonTicket ? (0, e.jsx)(h.Title, {
                            title: l.SeasonTicketName.name
                        }) : v === j.CosmosScreen.pack ? (0, e.jsx)(h.Title, {
                            title: 'Pack'
                        }) : (0, e.jsx)(h.Title, {
                            title: 'Rewards'
                        }) : null,
                        v === j.CosmosScreen.locker ? (0, e.jsx)(r, {
                            onCosmeticSelectionChanged: _f.onCosmeticSelectionChanged,
                            blockCharacterPreview: _f.blockCharacterPreview
                        }) : v === j.CosmosScreen.shop ? (0, e.jsx)(s, {
                            onCosmeticSelectionChanged: _f.onCosmeticSelectionChanged,
                            blockCharacterPreview: _f.blockCharacterPreview,
                            setToPackScreen: _f.pageMode ? void 0 : v => {
                                null == _f || _f.setMetadata(v), null == _f || _f.setScreen(j.CosmosScreen.pack);
                            }
                        }) : v === j.CosmosScreen.seasonTicket ? (0, e.jsx)(q, {
                            pageMode: _f.pageMode
                        }) : v === j.CosmosScreen.pack ? (0, e.jsx)(t, {
                            pageMode: _f.pageMode,
                            metadata: _f.metadata
                        }) : (0, e.jsx)(i.default, {
                            notSyncedXP: _f.notSyncedXP,
                            blockDiscord: _f.blockDiscord
                        })
                    ]
                })
            })
        });
    };
    const _v = k.default.div(p || (p = (_f => _f)`
  flex: 1;
  color: ${ 0 };
  user-select: none;
`), g.default.White);
}), a.register('OME2O', function(b, c) {
    _f(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('cvto726');
    a('LEQ5w');
    var f = a('pJ089'),
        g = a('eYhak'),
        h = a('FpbFp'),
        i = a('sHRDd'),
        j = a('AX3TM'),
        k = a('0HHAH'),
        l = a('0E+cx'),
        m = a('xyzXH'),
        n = a('PMl60'),
        o = a('I1mnb');
    const p = _f => {
        const {
            data: q,
            error: r,
            isLoading: s
        } = (0, j.default)(), [t, u, _v] = (0, n.useBoolean)(!1);
        if (s)
            return (0, d.jsx)(k.Centered, {
                className: 'maxAll',
                children: (0, d.jsx)(h.default, {
                    style: {
                        color: i.default.White
                    }
                })
            });
        if (r)
            return (0, d.jsx)(k.Centered, {
                className: 'maxAll',
                children: 'There was an error loading your info. Please refresh and try again.'
            });
        const w = _f.notSyncedXP || 0,
            x = Math.min(w + (q.unredeemedXP || 0), q.xpNeededPerLevel);
        if (t && !_f.blockDiscord)
            return (0, d.jsx)(m.default, {
                close: _v
            });
        const y = (0, n.isStudent)() && !_f.blockDiscord && q.currentLevel >= 5;
        return (0, d.jsxs)(e.default, {
            direction: 'vertical',
            size: 35,
            className: 'maxAll',
            children: [
                (0, d.jsx)(f.default, {
                    ...q,
                    unredeemedXP: x
                }),
                (0, d.jsx)(g.default, {
                    notSyncedXP: w,
                    dailyXp: q.xpGainedToday,
                    periodXp: q.xpGainedInPeriod,
                    dailyXpLimit: q.maxXpToday,
                    periodXpLimit: q.maxXpInPeriod
                }),
                !!y && (0, d.jsx)(l.default, {
                    openDiscordScreen: u
                })
            ]
        });
    };
    var q = _f => (0, d.jsx)(o.LimitedWidth, {
        children: (0, d.jsx)(p, {
            ..._f
        })
    });
}), a.register('pJ089', function(b, c) {
    _f(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('fQckJ'),
        f = a('VMnOp'),
        g = a('Axq+p'),
        h = a('s603l'),
        i = a('tR8TY'),
        j = a('0/hVx');
    let k;
    var _l = _f => (0, d.jsxs)(_m, {
        style: {
            backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)'
        },
        children: [
            (0, d.jsx)(f.default, {
                selectedCharacter: _f.selectedCharacter
            }),
            (0, d.jsx)(h.default, {
                currentLevel: _f.currentLevel
            }),
            (0, d.jsx)(j.default, {
                currentLevel: _f.currentLevel,
                unredeemedXP: _f.unredeemedXP,
                xpNeededPerLevel: _f.xpNeededPerLevel
            }),
            (0, d.jsx)(i.default, {})
        ]
    });
    const _m = (0, g.default)(e.default).attrs({
        className: 'flex-center flex-column'
    })(k || (k = (_f => _f)`
  margin-top: ${ 0 }px;
`), f.CONTAINER_SIZE / 2);
}), a.register('fQckJ', function(b, c) {
    _f(b.exports, 'default', function() {
        return _g;
    });
    var d = a('Axq+p'),
        e = a('sHRDd');
    let f;
    var _g = d.default.div(f || (f = (_f => _f)`
  padding: 30px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.09);
  border: 4px solid ${ 0 };
`), e.default.White);
}), a.register('VMnOp', function(b, c) {
    _f(b.exports, 'CONTAINER_SIZE', function() {
        return _n;
    }), _f(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('sHRDd'),
        h = a('2Xvuf'),
        i = a('9HSHh'),
        j = a('RxgVI');
    let k, l, m = _f => _f;
    const _n = 150;
    var _o = _f => {
        const p = e.useMemo(() => _f.selectedCharacter ? (0, i.default)({
            type: j.CosmeticType.character,
            id: _f.selectedCharacter
        }) : (0, h.default)('characters/spine/preview/default_yellow.png'), [_f.selectedCharacter]);
        return (0, d.jsx)(_p, {
            children: (0, d.jsx)(_q, {
                src: p
            })
        });
    };
    const _p = f.default.div.attrs({
            className: 'flex-center'
        })(k || (k = m`
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
`), _n, _n, -1 * (_n / 2 + 30), g.default.White),
        _q = f.default.img(l || (l = m`
  max-height: 85%;
  max-width: 85%;
  margin-left: 2px;
  transform: rotate(354deg);
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
  user-drag: none;
`));
}), a.register('9HSHh', function(b, c) {
    _f(b.exports, 'default', function() {
        return _f;
    });
    var d = a('2Xvuf'),
        e = a('RxgVI');
    var _f = _f => {
        if (_f.type === e.CosmeticType.character) {
            const g = _f.id.replace('character_', '');
            return (0, d.default)(`characters/spine/preview/${ g }.png`);
        }
        if (_f.type === e.CosmeticType.trail) {
            const g = _f.id.replace(/^trail_/, '');
            return (0, d.default)(`trails/${ g }/preview.png`);
        }
        if (_f.type === e.CosmeticType.sticker) {
            const g = _f.id.replace(/^sticker_/, '');
            return (0, d.default)(`stickers/${ g }.png`);
        }
        return '/';
    };
}), a.register('s603l', function(b, c) {
    _f(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('0HHAH'),
        g = a('b5kvC'),
        h = a('Mmd0d21'),
        i = a('l0C72');
    let j, k, l = _f => _f;
    var _m = _f => (0, d.jsxs)(f.CenteredColumn, {
        style: {
            marginTop: 20,
            textAlign: 'center'
        },
        children: [
            (0, d.jsxs)(_n, {
                children: [
                    i.SeasonTicketSeason.seasonName,
                    ' ',
                    i.SeasonTicketSeason.seasonNumber
                ]
            }),
            (0, d.jsxs)(_o, {
                children: [
                    h.default.level,
                    ' ',
                    _f.currentLevel
                ]
            })
        ]
    });
    const _n = e.default.div(j || (j = l`
  font-size: 18px;
  font-style: italic;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  font-weight: ${ 0 };
`), g.FontWeights.Bold),
        _o = e.default.div(k || (k = l`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 52px;
  margin-top: -6px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
`), g.Fonts.FugazOne);
}), a.register('tR8TY', function(b, c) {
    _f(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC'),
        g = a('Mmd0d21');
    let h;
    var _i = () => (0, d.jsxs)('div', {
        style: {
            fontSize: 16,
            marginTop: 20,
            color: 'rgba(255,255,255,0.9)'
        },
        children: [
            (0, d.jsxs)(_j, {
                children: [
                    'Earn ',
                    g.default.xp,
                    ' to level up.'
                ]
            }),
            ' Each time you level up, you\'ll earn ',
            (0, d.jsxs)(_j, {
                children: [
                    '100 ',
                    g.default.currency
                ]
            }),
            ' which you can use to purchase items in the Shop.',
            (0, d.jsx)('br', {}),
            ' ',
            (0, d.jsx)('br', {}),
            'You can earn ',
            g.default.xp,
            ' by playing 2D modes. ',
            g.default.xp,
            ' is granted every minute you play and answer questions correctly!'
        ]
    });
    const _j = e.default.span(h || (h = (_f => _f)`
  font-weight: ${ 0 };
`), f.FontWeights.Bold);
}), a.register('0/hVx', function(b, c) {
    _f(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC'),
        g = a('ntfl7'),
        h = a('PMl60'),
        i = a('Mmd0d21');
    let j, k, l = _f => _f;
    var _m = _f => {
        const n = Math.min(_f.xpNeededPerLevel - 1, _f.unredeemedXP),
            o = Math.max(1, _f.xpNeededPerLevel - n),
            p = n / _f.xpNeededPerLevel * 100;
        return (0, d.jsxs)(_n, {
            children: [
                (0, d.jsxs)(_o, {
                    children: [
                        (0, d.jsxs)('div', {
                            children: [
                                (0, h.numberWithCommas)(n),
                                '/',
                                (0, h.numberWithCommas)(_f.xpNeededPerLevel),
                                'XP'
                            ]
                        }),
                        (0, d.jsxs)('div', {
                            children: [
                                (0, h.numberWithCommas)(o),
                                ' ',
                                i.default.xp,
                                ' to',
                                ' ',
                                i.default.level,
                                ' ',
                                _f.currentLevel + 1
                            ]
                        })
                    ]
                }),
                (0, d.jsx)(g.default, {
                    height: 60,
                    percentageComplete: p
                })
            ]
        });
    };
    const _n = e.default.div.attrs({
            className: 'maxWidth'
        })(j || (j = l`
  margin-top: 14px;
`)),
        _o = e.default.div.attrs({
            className: 'maxWidth flex between vc'
        })(k || (k = l`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  font-family: ${ 0 };
  margin-bottom: 8px;
`), f.Fonts.FugazOne);
}), a.register('ntfl7', function(b, c) {
    _f(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p');
    let f, g, h, i = _f => _f;
    var _j = _f => (0, d.jsxs)(_k, {
        style: {
            height: _f.height
        },
        children: [
            (0, d.jsx)(_l, {
                children: _f.children
            }),
            (0, d.jsx)(_m, {
                style: {
                    width: `${ Math.max(_f.percentageComplete, 2) }%`
                }
            })
        ]
    });
    const _k = e.default.div.attrs({
            className: 'maxWidth'
        })(f || (f = i`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
  position: relative;
`)),
        _l = e.default.div.attrs({
            className: 'maxAll'
        })(g || (g = i`
  position: absolute;
  top: 0;
  left: 0;
`)),
        _m = e.default.div.attrs({
            className: 'maxHeight'
        })(h || (h = i`
  width: 50%;
  background: #00c853;
`));
}), a.register('eYhak', function(b, c) {
    _f(b.exports, 'Title', function() {
        return _r;
    }), _f(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('fQckJ'),
        g = a('b5kvC'),
        h = a('cvto726'),
        i = a('cCxXb'),
        j = a('PMl60'),
        k = a('Mmd0d21'),
        l = a('rJF+L');
    let m, n, o = _f => _f;
    var _p = _f => {
        Math.min(_f.dailyXpLimit, _f.dailyXp + _f.notSyncedXP);
        const q = Math.min(_f.periodXpLimit, _f.periodXp + _f.notSyncedXP),
            {
                dailyXpLimit: r,
                periodXpLimit: s
            } = _f;
        return (0, d.jsxs)(_q, {
            children: [
                (0, d.jsx)(_r, {
                    children: 'Limits'
                }),
                (0, d.jsx)(f.default, {
                    children: (0, d.jsx)(h.default, {
                        direction: 'vertical',
                        size: 22,
                        className: 'maxWidth',
                        children: (0, d.jsxs)('div', {
                            children: [
                                (0, d.jsx)(i.default, {
                                    name: `Weekly ${ k.default.xp }`,
                                    description: 'Resets on Wednesdays at 2:00pm EST',
                                    percentageComplete: Math.floor(q / s * 100),
                                    progressText: `${ (0, j.numberWithCommas)(q) }/${ (0, j.numberWithCommas)(s) } ${ k.default.xp }`
                                }),
                                (0, d.jsx)(l.default, {
                                    text: `Increase your Weekly ${ k.default.xp } limit to 20,000`,
                                    marginTop: 10
                                })
                            ]
                        })
                    })
                })
            ]
        });
    };
    const _q = e.default.div(m || (m = o``)),
        _r = e.default.div(n || (n = o`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 6px;
`), g.Fonts.FugazOne);
}), a.register('cCxXb', function(b, c) {
    _f(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('ntfl7'),
        g = a('b5kvC');
    let h, i, j, k = _f => _f;
    var _l = _f => (0, d.jsxs)(_m, {
        children: [
            (0, d.jsx)(_n, {
                children: _f.name
            }),
            (0, d.jsx)(_o, {
                children: _f.description
            }),
            (0, d.jsx)(f.default, {
                height: 45,
                percentageComplete: _f.percentageComplete,
                children: (0, d.jsx)('div', {
                    className: 'maxAll flex vc',
                    children: (0, d.jsx)('span', {
                        style: {
                            fontFamily: g.Fonts.FugazOne,
                            textTransform: 'uppercase',
                            textShadow: '1px 1px 10px rgba(0,0,0,0.2)',
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: 12,
                            marginLeft: 15
                        },
                        children: _f.progressText
                    })
                })
            })
        ]
    });
    const _m = e.default.div(h || (h = k``)),
        _n = e.default.div(i || (i = k`
  font-size: 20px;
  font-weight: ${ 0 };
`), g.FontWeights.UltraBold),
        _o = e.default.div(j || (j = k`
  font-size: 16px;
  margin-bottom: 11px;
  color: rgba(255, 255, 255, 0.85);
  font-style: italic;
  margin-top: -2px;
`));
}), a.register('rJF+L', function(b, c) {
    _f(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('NIZyA'),
        f = a('1P5ls'),
        g = a('cH8qQ');
    a('LEQ5w');
    var h = a('2HvvA11'),
        i = a('gs4MT'),
        j = a('b5kvC'),
        k = a('l0C72'),
        l = a('k46wk1');
    var _m = _f => {
        return (0, l.OwnsSeasonTicket)() ? null : (0, d.jsx)(f.default, {
            theme: {
                algorithm: g.default.defaultAlgorithm
            },
            children: (0, d.jsx)(e.default, {
                showIcon: !0,
                style: {
                    marginTop: null !== (a = _f.marginTop) && void 0 !== a ? a : 0,
                    marginBottom: null !== (b = _f.marginBottom) && void 0 !== b ? b : 0
                },
                message: (0, d.jsxs)('span', {
                    children: [
                        _f.text,
                        ' with the',
                        ' ',
                        (0, d.jsx)(h.default, {
                            to: i.SEASON_TICKET_BASE,
                            style: {
                                textDecoration: 'underline',
                                fontWeight: j.FontWeights.Bold
                            },
                            children: k.SeasonTicketName.name
                        })
                    ]
                })
            })
        });
        var n, o;
    };
}), a.register('k46wk1', function(b, c) {
    _f(b.exports, 'OwnsSeasonTicket', function() {
        return _e;
    });
    var d = a('PMl60');
    const _e = () => {
        var _f, g, h;
        return null !== (h = null === (_f = (0, d.getUser)()) || void 0 === _f || null === (g = _f.seasonTicket) || void 0 === g ? void 0 : g.active) && void 0 !== h && h;
    };
}), a.register('0E+cx', function(b, c) {
    _b(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('PMl60'),
        g = a('b5kvC'),
        h = a('2Xvuf'),
        i = a('9R7cy'),
        j = a('fQckJ'),
        k = a('eYhak');
    let l, m, n, o, p, q = _b => _b;
    var _r = _b => {
        const [s, t, u] = (0, f.useBoolean)(!1);
        return (0, d.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, d.jsx)(k.Title, {
                    children: 'Community'
                }),
                (0, d.jsxs)(_s, {
                    onMouseEnter: t,
                    onMouseLeave: u,
                    onClick: _b.openDiscordScreen,
                    children: [
                        (0, d.jsxs)(_t, {
                            children: [
                                (0, d.jsx)(_u, {
                                    style: {
                                        transform: `rotate(${ s ? -10 : 0 }deg) scale(${ s ? 1.2 : 1 })`,
                                        opacity: s ? 1 : 0.9
                                    }
                                }),
                                (0, d.jsx)(_v, {
                                    style: {
                                        opacity: s ? 1 : 0.9
                                    },
                                    children: 'Join the Gimkit Discord Community!'
                                })
                            ]
                        }),
                        (0, d.jsx)(_w, {
                            children: (0, d.jsx)(i.default, {
                                name: 'far fa-external-link'
                            })
                        })
                    ]
                })
            ]
        });
    };
    const _s = (0, e.default)(j.default).attrs({
            className: 'flex between vc'
        })(l || (l = q`
  background: linear-gradient(to right, #000046, #1cb5e0);
  font-family: ${ 0 };
  cursor: pointer;
  border: 4px solid rgba(255, 255, 255, 0.8);
`), g.Fonts.SFPro),
        _t = e.default.div.attrs({
            className: 'flex vc'
        })(m || (m = q``)),
        _u = e.default.img.attrs({
            src: (0, h.default)('cosmos/discord.svg'),
            loading: 'lazy'
        })(n || (n = q`
  height: 30px;
  transition: transform 0.2s, opacity 0.2s;
`)),
        _v = e.default.div(o || (o = q`
  line-height: 1;
  font-size: 16px;
  font-weight: ${ 0 };
  margin-left: 15px;
  transition: opacity 0.2s;
`), g.FontWeights.Bold),
        _w = e.default.div(p || (p = q`
  font-size: 18px;
  margin-left: 30px;
`));
}), a.register('xyzXH', function(b, c) {
    _b(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('fQckJ'),
        g = a('sHRDd'),
        h = a('2Xvuf'),
        i = a('b5kvC'),
        j = a('led8j'),
        k = a('lhG1d');
    let l, m, n, o, p, q, r = _b => _b;
    var _s = _b => (0, d.jsx)(_t, {
        children: (0, d.jsxs)(_u, {
            children: [
                (0, d.jsx)(_v, {}),
                (0, d.jsx)(_w, {
                    children: 'Gimkit Discord Community'
                }),
                (0, d.jsx)(k.default, {
                    children: (0, d.jsxs)(_x, {
                        children: [
                            'Be a part of our Discord server to discuss all things Gimkit! ',
                            (0, d.jsx)('br', {}),
                            'To join, ',
                            (0, d.jsx)('b', {
                                children: 'you must be age 13 or older.'
                            })
                        ]
                    })
                }),
                (0, d.jsx)(j.default, {
                    type: 'success',
                    onClick: () => {
                        window.open('https://discord.com/invite/K7ZPTtz7SJ', '_blank'), _b.close();
                    },
                    ariaLabel: 'Join',
                    children: '\xA0\xA0\xA0\xA0JOIN\xA0\xA0\xA0\xA0'
                }),
                (0, d.jsx)(_y, {
                    onClick: _b.close,
                    children: '...or go back'
                })
            ]
        })
    });
    const _t = (0, e.default)(f.default)(l || (l = r`
  background: linear-gradient(to bottom, #000046, #1cb5e0);
  padding: 35px;
  border: 4px solid ${ 0 };
  overflow: hidden;
  font-family: ${ 0 };
  text-align: center;
`), g.default.White, i.Fonts.FugazOne),
        _u = e.default.div.attrs({
            className: 'flex-column flex-center maxWidth'
        })(m || (m = r``)),
        _v = e.default.img.attrs({
            src: (0, h.default)('cosmos/discord.svg')
        })(n || (n = r`
  height: 60px;
  opacity: 0.8px;
`)),
        _w = e.default.div(o || (o = r`
  text-transform: uppercase;
  font-size: 30px;
  margin-top: 14px;
`)),
        _x = e.default.div(p || (p = r`
  font-size: 16px;
  font-family: ${ 0 };
  margin-top: 10px;
  margin-bottom: 20px;
  opacity: 0.85;
`), i.Fonts.SFPro),
        _y = e.default.div(q || (q = r`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline;
  font-family: ${ 0 };
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: ${ 0 };
    text-decoration: underline;
  }
`), i.Fonts.SFPro, g.default.White);
}), a.register('I1mnb', function(b, c) {
    _b(b.exports, 'LimitedWidth', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('Axq+p');
    let f, g, h = _b => _b;
    const _i = _b => {
            var j;
            return (0, d.jsx)(_j, {
                children: (0, d.jsx)(_k, {
                    style: {
                        maxWidth: null !== (j = _b.customWidth) && void 0 !== j ? j : 721
                    },
                    children: _b.children
                })
            });
        },
        _j = e.default.div.attrs({
            className: 'maxWidth flex hc'
        })(f || (f = h``)),
        _k = e.default.div.attrs({
            className: 'maxWidth'
        })(g || (g = h``));
}), a.register('iif4V', function(_b, c) {
    _b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('lAS3I')),
        import('./' + a('HmN9A').resolve('emV63')),
        import('./' + a('HmN9A').resolve('dlj8o'))
    ]).then(() => a('9tTWw'));
}), a.register('fZOo4', function(b, c) {
    b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('lAS3I')),
        import('./' + a('HmN9A').resolve('emV63')),
        import('./' + a('HmN9A').resolve('gstzG'))
    ]).then(() => a('4L7iU'));
}), a.register('7HPYO', function(b, c) {
    b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('lAS3I')),
        import('./' + a('HmN9A').resolve('emV63')),
        import('./' + a('HmN9A').resolve('hK5D8'))
    ]).then(() => a('u2e7O'));
}), a.register('UNLkI', function(b, c) {
    b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('lAS3I')),
        import('./' + a('HmN9A').resolve('emV63')),
        import('./' + a('HmN9A').resolve('baSvy'))
    ]).then(() => a('uSL+K'));
});