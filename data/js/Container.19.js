function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('msB5+', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        titleFont: c('Eh2Wh').Fonts.FugazOne
    };
}), c.register('08tOC', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('b8gE1'),
        h = new Map([
            [
                'Win',
                'Meta'
            ],
            [
                'Scroll',
                'ScrollLock'
            ],
            [
                'Spacebar',
                ' '
            ],
            [
                'Down',
                'ArrowDown'
            ],
            [
                'Left',
                'ArrowLeft'
            ],
            [
                'Right',
                'ArrowRight'
            ],
            [
                'Up',
                'ArrowUp'
            ],
            [
                'Del',
                'Delete'
            ],
            [
                'Crsel',
                'CrSel'
            ],
            [
                'Exsel',
                'ExSel'
            ],
            [
                'Apps',
                'ContextMenu'
            ],
            [
                'Esc',
                'Escape'
            ],
            [
                'Decimal',
                '.'
            ],
            [
                'Multiply',
                '*'
            ],
            [
                'Add',
                '+'
            ],
            [
                'Subtract',
                '-'
            ],
            [
                'Divide',
                '/'
            ]
        ]),
        _i = function(j, k) {
            var l = (0, g.default)(j),
                m = (0, g.default)(k);
            (0, f.useEffect)(function() {
                var n = function(o) {
                    var p;
                    ! function(q) {
                        if (h.has(q.key)) {
                            var r = h.get(q.key);
                            Object.defineProperty(q, 'key', {
                                get: function() {
                                    return r;
                                }
                            });
                        }
                    }(o), (p = l.current, Array.isArray(p) ? p : [p]).includes(o.key) && m.current(o);
                };
                return window.addEventListener('keydown', n),
                    function() {
                        window.removeEventListener('keydown', n);
                    };
            }, []);
        };
}), c.register('b8gE1', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('nbLyA'),
        _h = function(i) {
            var j = (0, f.useRef)(i);
            return (0, g.default)(function() {
                j.current = i;
            }), j;
        };
}), c.register('nbLyA', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = c('O0Kav').useLayoutEffect;
}), c.register('ZGMPa', function(d, e) {
    a(d.exports, 'FreePlanType', function() {
        return _g;
    }), a(d.exports, 'getFreePlanType', function() {
        return _i;
    }), a(d.exports, 'getLimitedGameLimit', function() {
        return _j;
    });
    var f = c('SKBBo');
    let _g;
    var h;
    (h = _g || (_g = {})).limitedModes = 'limitedModes', h.limitedGames = 'limitedGames';
    const _i = () => 'game-limit' === f.default.getFeatureFlag('game-limit-free-plan-secondary') ? _g.limitedGames : _g.limitedModes,
        _j = () => 5;
}), c.register('DOXh4', function(d, e) {
    a(d.exports, 'default', function() {
        return _z;
    });
    var f = c('gRbUn'),
        g = c('9aZ6t'),
        h = c('O0Kav'),
        i = c('u4s09'),
        j = c('G4dQH'),
        k = c('bQWYI'),
        l = c('08tOC'),
        m = c('P11ai26'),
        n = c('msB5+'),
        o = c('8KqQ+');
    let p, q, r, s, t, u, v, w, x, y = a => a;
    var _z = a => {
        const [A, B] = h.useState(0), C = h.useRef(!1), D = h.useRef(null), [E] = (0, k.default)(D), F = h.useMemo(() => a.verticalList ? 0 : A * j.EXPERIENCE_FULL_WIDTH * -1 + m.default.sideMargin, [
            A,
            a.verticalList
        ]), G = h.useMemo(() => !(A <= 0), [A]);
        (0, l.default)([
            'ArrowLeft',
            'ArrowRight'
        ], a => {
            C.current && ('ArrowLeft' === a.key && q(), 'ArrowRight' === a.key && r());
        });
        const H = h.useMemo(() => {
                if (A + 1 === a.list.items.length)
                    return !1;
                const I = (E - m.default.sideMargin) / j.EXPERIENCE_FULL_WIDTH;
                return !(A >= a.list.items.length - I);
            }, [
                E,
                A,
                a.list.items.length
            ]),
            I = () => {
                G && B(Math.max(0, A - 1));
            },
            J = () => {
                H && B(A + 1);
            };
        return (0, f.jsxs)(_A, {
            onMouseEnter: () => {
                C.current = !0;
            },
            onMouseLeave: () => {
                C.current = !1;
            },
            children: [
                a.hideListName ? null : (0, f.jsx)(_B, {
                    children: a.list.name
                }),
                (0, f.jsxs)(_C, {
                    children: [
                        (0, f.jsx)(_D, {
                            animate: {
                                x: F
                            },
                            initial: {
                                x: a.verticalList ? 0 : m.default.sideMargin
                            },
                            transition: {
                                duration: 0.3,
                                ease: 'easeOut'
                            },
                            style: a.verticalList ? {
                                display: 'grid',
                                gridTemplateColumns: `repeat(auto-fill, ${ j.EXPERIENCE_WIDTH }px)`,
                                justifyContent: 'center',
                                gap: 20,
                                margin: '0px 25px'
                            } : {
                                gap: j.MARGIN_RIGHT
                            },
                            ref: D,
                            children: a.list.items.map(A => (0, f.jsx)(j.default, {
                                name: A.name,
                                tagline: A.tagline,
                                image: A.imageUrl,
                                currentlySelected: !!a.forceAllSelected || a.currentlySelectedExperienceId === A._id,
                                onSelect: a.onExperienceSelected ? () => a.onExperienceSelected(A._id) : null,
                                isProExperience: A.isPremiumExperience,
                                noShadowOnContainer: a.noShadowOnItems,
                                forcePremiumBadge: a.forcePremiumBadge,
                                tag: A.tag
                            }, `list-${ a.list._id }-${ A._id }`))
                        }),
                        a.verticalList ? null : (0, f.jsxs)(_E, {
                            children: [
                                (0, f.jsx)(_G, {
                                    animate: {
                                        opacity: G ? 1 : 0
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    onClick: I,
                                    children: (0, f.jsx)(_I, {
                                        style: {
                                            cursor: G ? 'pointer' : 'auto'
                                        },
                                        children: (0, f.jsx)('i', {
                                            className: 'fas fa-chevron-left'
                                        })
                                    })
                                }),
                                (0, f.jsx)(_H, {
                                    animate: {
                                        opacity: H ? 1 : 0
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    onClick: J,
                                    children: (0, f.jsx)(_I, {
                                        style: {
                                            cursor: H ? 'pointer' : 'auto'
                                        },
                                        children: (0, f.jsx)('i', {
                                            className: 'fas fa-chevron-right'
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    const _A = i.default.div.attrs({
            className: 'maxWidth'
        })(p || (p = y``)),
        _B = i.default.div(q || (q = y`
  font-family: ${ 0 };
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`), n.default.titleFont),
        _C = i.default.div.attrs({
            className: 'maxWidth'
        })(r || (r = y`
  position: relative;
  overflow: hidden;
`)),
        _D = (0, i.default)(g.motion.div).attrs({
            className: 'flex'
        })(s || (s = y``)),
        _E = i.default.div.attrs({
            className: 'maxAll flex vc between'
        })(t || (t = y`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`)),
        F = (0, i.default)(g.motion.div).attrs({
            className: 'flex-center maxHeight'
        })(u || (u = y`
  width: 60px;
  line-height: 1;
  color: ${ 0 };
`), o.default.White),
        _G = (0, i.default)(F)(v || (v = y`
  background: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0.61) 0%,
    hsla(0, 0%, 0%, 0.603) 8.3%,
    hsla(0, 0%, 0%, 0.583) 16.2%,
    hsla(0, 0%, 0%, 0.551) 23.9%,
    hsla(0, 0%, 0%, 0.511) 31.4%,
    hsla(0, 0%, 0%, 0.463) 38.6%,
    hsla(0, 0%, 0%, 0.409) 45.6%,
    hsla(0, 0%, 0%, 0.352) 52.3%,
    hsla(0, 0%, 0%, 0.294) 58.9%,
    hsla(0, 0%, 0%, 0.236) 65.2%,
    hsla(0, 0%, 0%, 0.18) 71.4%,
    hsla(0, 0%, 0%, 0.128) 77.4%,
    hsla(0, 0%, 0%, 0.082) 83.3%,
    hsla(0, 0%, 0%, 0.044) 89%,
    hsla(0, 0%, 0%, 0.016) 94.5%,
    hsla(0, 0%, 0%, 0) 100%
  );
`)),
        _H = (0, i.default)(F)(w || (w = y`
  background: linear-gradient(
    to left,
    hsla(0, 0%, 0%, 0.61) 0%,
    hsla(0, 0%, 0%, 0.603) 8.3%,
    hsla(0, 0%, 0%, 0.583) 16.2%,
    hsla(0, 0%, 0%, 0.551) 23.9%,
    hsla(0, 0%, 0%, 0.511) 31.4%,
    hsla(0, 0%, 0%, 0.463) 38.6%,
    hsla(0, 0%, 0%, 0.409) 45.6%,
    hsla(0, 0%, 0%, 0.352) 52.3%,
    hsla(0, 0%, 0%, 0.294) 58.9%,
    hsla(0, 0%, 0%, 0.236) 65.2%,
    hsla(0, 0%, 0%, 0.18) 71.4%,
    hsla(0, 0%, 0%, 0.128) 77.4%,
    hsla(0, 0%, 0%, 0.082) 83.3%,
    hsla(0, 0%, 0%, 0.044) 89%,
    hsla(0, 0%, 0%, 0.016) 94.5%,
    hsla(0, 0%, 0%, 0) 100%
  );
`)),
        _I = i.default.div.attrs({
            className: 'flex-center'
        })(x || (x = y`
  font-size: 32px;
  pointer-events: all;
  will-change: transform;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`));
}), c.register('G4dQH', function(d, e) {
    a(d.exports, 'EXPERIENCE_WIDTH', function() {
        return _x;
    }), a(d.exports, 'MARGIN_RIGHT', function() {
        return _y;
    }), a(d.exports, 'EXPERIENCE_FULL_WIDTH', function() {
        return _z;
    }), a(d.exports, 'default', function() {
        return _B;
    });
    var f = c('gRbUn'),
        g = c('8KqQ+'),
        h = c('Eh2Wh'),
        i = c('quE27'),
        j = c('9aZ6t'),
        k = c('O0Kav'),
        l = c('u4s09'),
        m = c('msB5+'),
        n = c('ZGMPa');
    let o, p, q, r, s, t, u, v, w = a => a;
    const _x = 350,
        _y = 10,
        _z = _x + _y,
        A = 0.2;
    var _B = a => {
        const [C, D, E] = (0, i.useBoolean)(!1), F = (0, n.getFreePlanType)(), G = k.useMemo(() => a.isProExperience && !(0, i.isStudent)() && F === n.FreePlanType.limitedModes && !(0, i.isUpgraded)(), [
            a.isProExperience,
            F
        ]);
        return (0, f.jsxs)(_C, {
            onMouseEnter: D,
            onMouseLeave: E,
            style: {
                backgroundImage: `url('${ a.image }')`,
                borderColor: a.currentlySelected ? '#fdd835' : g.default.White
            },
            onClick: a.onSelect,
            className: a.noShadowOnContainer ? '' : 'light-shadow',
            children: [
                a.forcePremiumBadge || G ? (0, f.jsx)(_D, {
                    animate: {
                        opacity: C ? 0 : 1
                    },
                    initial: {
                        opacity: 1
                    },
                    transition: {
                        duration: A
                    },
                    children: (0, f.jsx)(_E, {})
                }) : (0, f.jsx)('div', {}),
                (0, f.jsxs)(_F, {
                    children: [
                        G ? (0, f.jsx)(_G, {
                            animate: {
                                opacity: C ? 0 : 1
                            },
                            initial: {
                                opacity: 1
                            },
                            transition: {
                                duration: A
                            },
                            children: 'Gimkit Pro Exclusive'
                        }) : null,
                        !G && a.tag ? (0, f.jsx)(_H, {
                            animate: {
                                opacity: C ? 0 : 1
                            },
                            initial: {
                                opacity: 1
                            },
                            transition: {
                                duration: A
                            },
                            children: a.tag
                        }) : null,
                        (0, f.jsx)(_I, {
                            children: a.name
                        }),
                        (0, f.jsx)(_J, {
                            animate: {
                                height: C ? 'auto' : 0
                            },
                            initial: {
                                height: 0
                            },
                            transition: {
                                duration: A
                            },
                            children: a.tagline
                        })
                    ]
                })
            ]
        });
    };
    const _C = l.default.div.attrs({
            className: 'flex flex-column between'
        })(o || (o = w`
  border-width: 4px;
  border-style: solid;
  width: ${ 0 }px;
  height: 180px;
  border-radius: 4px;
  background-image: url('');
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  flex-shrink: 0;
  cursor: pointer;
  transition: border-color 0.3s;
`), _x),
        _D = (0, l.default)(j.motion.div).attrs({
            className: 'maxWidth'
        })(p || (p = w`
  padding: 10px 15px;
`)),
        _E = l.default.img.attrs({
            src: '/client/img/pro/star.svg'
        })(q || (q = w`
  height: 20px;
`)),
        _F = l.default.div.attrs({
            className: 'maxWidth flex-column'
        })(r || (r = w`
  padding: 10px 15px;
  background: linear-gradient(
    to top,
    hsla(0, 0%, 0%, 0.69) 0%,
    hsla(0, 0%, 0%, 0.681) 8.1%,
    hsla(0, 0%, 0%, 0.656) 15.5%,
    hsla(0, 0%, 0%, 0.618) 22.4%,
    hsla(0, 0%, 0%, 0.569) 28.9%,
    hsla(0, 0%, 0%, 0.511) 35%,
    hsla(0, 0%, 0%, 0.447) 41%,
    hsla(0, 0%, 0%, 0.379) 46.7%,
    hsla(0, 0%, 0%, 0.311) 52.5%,
    hsla(0, 0%, 0%, 0.243) 58.3%,
    hsla(0, 0%, 0%, 0.179) 64.3%,
    hsla(0, 0%, 0%, 0.121) 70.5%,
    hsla(0, 0%, 0%, 0.072) 77.1%,
    hsla(0, 0%, 0%, 0.034) 84.2%,
    hsla(0, 0%, 0%, 0.009) 91.8%,
    hsla(0, 0%, 0%, 0) 100%
  );
  overflow: hidden;
  align-items: flex-start;
`)),
        _G = (0, l.default)(j.motion.div)(s || (s = w`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: -2px;
  text-shadow: 1px 1px 1px ${ 0 };
  color: ${ 0 };
`), m.default.titleFont, g.default.Black, g.default.White),
        _H = (0, l.default)(j.motion.div)(t || (t = w`
  font-family: ${ 0 };
  text-transform: uppercase;
  background: rgba(255, 87, 34, 0.8);
  padding: 7px 10px;
  font-size: 11px;
  line-height: 1;
  border-radius: 10px;
  margin-bottom: 4px;
`), m.default.titleFont),
        _I = l.default.div(u || (u = w`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
  text-shadow: 2px 2px 2px ${ 0 };
  color: ${ 0 };
`), m.default.titleFont, g.default.Black, g.default.White),
        _J = (0, l.default)(j.motion.div)(v || (v = w`
  font-size: 14px;
  text-shadow: 1px 1px 1px ${ 0 };
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1px;
  overflow: hidden;
  font-family: ${ 0 };
`), g.default.Black, h.Fonts.ProductSans);
}), c.register('hecDa', function(d, e) {
    a(d.exports, 'PADDING', function() {
        return _v;
    }), a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('AE7vR'),
        h = c('8KqQ+'),
        i = c('Eh2Wh'),
        j = c('quE27'),
        k = c('O0Kav'),
        l = c('u4s09'),
        m = c('P11ai26'),
        n = c('q8eNF'),
        o = c('CsaeO'),
        p = c('41Yw7'),
        q = c('50Ts4'),
        r = c('ZGMPa');
    let s, t, u = a => a;
    const _v = m.default.sideMargin;
    var _w = a => {
        k.useEffect(() => {
            a.visible && a.showModes && (0, j.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        }, [
            a.visible,
            a.showModes
        ]), k.useEffect(() => {
            a.visible && (0, q.TrackPostHogEvent)({
                event: 'upgrade modal open',
                properties: {
                    reason: a.id
                }
            });
        }, [
            a.visible,
            a.id
        ]);
        const x = (0, j.getUser)();
        if (!x)
            return null;
        const y = (0, r.getFreePlanType)(),
            z = a.showModes && y === r.FreePlanType.limitedModes;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_x, {}),
                (0, f.jsx)(g.default, {
                    className: 'upgrade-modal',
                    footer: null,
                    width: 850,
                    style: {
                        top: 30
                    },
                    bodyStyle: {
                        padding: '0px',
                        background: h.default.Snow
                    },
                    open: a.visible,
                    onCancel: a.close,
                    closable: !1,
                    children: (0, f.jsxs)(_y, {
                        children: [
                            (0, f.jsx)(p.default, {
                                user: x,
                                close: a.close,
                                copy: a.copy,
                                showingModes: z
                            }),
                            z ? (0, f.jsx)(o.default, {}) : null,
                            (0, f.jsx)(n.default, {
                                showingModes: z
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _x = (0, l.createGlobalStyle)(s || (s = u`
  .upgrade-modal > .ant-modal-content {
    border-radius: 10px;
    overflow: hidden !important;
    padding: 0px !important;
  }
`)),
        _y = l.default.div.attrs({
            className: 'maxWidth'
        })(t || (t = u`
  color: ${ 0 };
  font-family: ${ 0 };
`), h.default.Black, i.Fonts.SFPro);
}), c.register('q8eNF', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('/poDA27'),
        h = c('P1KtI'),
        i = c('VNuyu'),
        j = c('8KqQ+'),
        k = c('nKuOQ'),
        l = c('FB7HT26'),
        m = c('quE27'),
        n = c('O0Kav'),
        o = c('u4s09'),
        p = c('zzCtd25'),
        q = c('REBfR'),
        r = c('reX8k');
    let s, t, u, v = a => a;
    var _w = a => {
        const [x, y] = n.useState(!1), [z, A] = n.useState(!1);
        return (0, f.jsxs)('div', {
            className: 'flex flex-column vc',
            style: {
                marginTop: a.showingModes ? 25 : 20,
                paddingBottom: 30
            },
            children: [
                (0, f.jsx)(l.default, {
                    to: k.CHECKOUT,
                    children: (0, f.jsx)(h.default, {
                        type: 'primary',
                        size: 'large',
                        icon: (0, f.jsx)(g.default, {}),
                        style: {
                            width: 380,
                            height: 70
                        },
                        children: (0, m.isUpgraded)() ? 'Upgrade to Gimkit Pro early' : 'Upgrade to Gimkit Pro'
                    })
                }),
                (0, p.onlyOfferAnnualUpgrade)() ? (0, f.jsx)(_x, {
                    children: '$59.88 a year - works out to $4.99 a month'
                }) : null,
                (0, f.jsx)(i.default, {
                    style: {
                        margin: '26px 0px'
                    }
                }),
                (0, f.jsxs)('div', {
                    className: 'flex vc',
                    children: [
                        (0, f.jsx)(_y, {
                            to: k.GROUP_PRICING,
                            children: 'Group license pricing'
                        }),
                        (0, f.jsx)(_z, {}),
                        (0, f.jsx)(_y, {
                            onClick: () => A(!0),
                            children: 'Pay For Me Link'
                        }),
                        !x && (0, f.jsxs)(f.Fragment, {
                            children: [
                                (0, f.jsx)(_z, {}),
                                (0, f.jsx)(_y, {
                                    onClick: () => y(!0),
                                    children: 'FAQ'
                                })
                            ]
                        })
                    ]
                }),
                x && (0, f.jsx)(q.default, {}),
                (0, f.jsx)(r.default, {
                    showPayForMeModal: z,
                    onCancel: () => A(!1)
                })
            ]
        });
    };
    const _x = o.default.div(s || (s = v`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 12px;
`)),
        _y = (0, o.default)(l.default)(t || (t = v`
  font-size: 16px;
  display: block;
  color: ${ 0 };
  text-decoration: underline;
`), j.default.Black),
        _z = o.default.i.attrs({
            className: 'fas fa-circle'
        })(u || (u = v`
  margin: 0px 12px;
  font-size: 10px;
`));
}), c.register('REBfR', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn'),
        g = c('VNuyu'),
        h = c('8KqQ+'),
        i = c('Eh2Wh');
    c('O0Kav');
    var j = c('u4s09'),
        k = c('hecDa'),
        l = c('ZGMPa');
    let m, n, o, p, q = a => a;
    const r = [{
            question: 'What happens if I pay now and my school pays later?',
            answer: (0, f.jsxs)('span', {
                children: [
                    'If your school purchases a group license and you\'ve already purchased Gimkit Pro, you\u2019ll get refunded for your unused time.',
                    ' ',
                    (0, f.jsx)('b', {
                        children: 'So if you purchase a year of Gimkit Pro today and your school upgrades next month, we\u2019d refund you $54.89.'
                    }),
                    ' ',
                    'That refund happens automatically. No need to contact support!'
                ]
            })
        },
        {
            question: 'What\'s included with Gimkit Pro?',
            answer: (0, f.jsxs)('span', {
                children: [
                    (0, l.getFreePlanType)() === l.FreePlanType.limitedModes ? 'Unrestricted access to all modes, including Gimkit Pro Exclusives.' : 'No game limits, host as many games as you\'d like!',
                    ' ',
                    'You\'ll also be able to create assignments (play Gimkit asynchronously) and upload audio + images to your questions.'
                ]
            })
        },
        {
            question: 'What\'s your refund policy?',
            answer: (0, f.jsxs)('span', {
                children: [
                    'Bad refund policies are infuriating. You feel like the company is just trying to rip you off. We never want our customers to feel that way, so our refund policy is simple: If you\u2019re ever unhappy with your subscription for any reason, just contact us and we\u2019ll take care of you.',
                    ' ',
                    (0, f.jsx)('a', {
                        href: 'https://www.notion.so/gimkit/A-fair-refund-policy-a1688f61330b49a495a48bd0fd08697b',
                        target: '_blank',
                        children: 'Check out our full refund policy here.'
                    })
                ]
            })
        }
    ];
    var _s = () => (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(g.default, {
                style: {
                    margin: '26px 0px'
                }
            }),
            (0, f.jsx)(_t, {
                children: r.map(a => (0, f.jsxs)(_u, {
                    children: [
                        (0, f.jsx)(_v, {
                            children: a.question
                        }),
                        (0, f.jsx)(_w, {
                            children: a.answer
                        })
                    ]
                }, a.question))
            })
        ]
    });
    const _t = j.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = q`
  padding: 0px ${ 0 }px;
`), () => k.PADDING),
        _u = j.default.div(n || (n = q`
  margin-bottom: 15px;
  background: ${ 0 };
  padding: 30px;
  border-radius: 6px;
  border-style: solid;
  border-color: ${ 0 };
  border-width: 2px;
  &:last-child {
    margin-bottom: 0px;
  }
`), h.default.White, h.default.BorderGray),
        _v = j.default.div(o || (o = q`
  font-size: 21px;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        _w = j.default.div(p || (p = q`
  font-size: 16px;
  margin-top: 5px;
`));
}), c.register('reX8k', function(d, e) {
    a(d.exports, 'default', function() {
        return _y;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('P1KtI'),
        i = c('VNuyu'),
        j = c('aevdF'),
        k = c('Bjl070'),
        l = c('AE7vR'),
        m = c('yruHD'),
        n = c('quE27'),
        o = c('gS4g327'),
        p = c('jw1ib'),
        q = c('u4s09'),
        r = c('8KqQ+'),
        s = c('Eh2Wh');
    let t, u, v, w, x = a => a;
    var _y = a => {
        const [z, A] = b(g).useState(!0), [B, C] = b(g).useState(null), [D, E] = b(g).useState(null), F = () => `${ (0, n.getDomain)() }/pay-for-me/${ D }`;
        return b(g).useEffect(() => {
            (0, n.request)({
                method: 'GET',
                url: '/api/billing/pay-for-me-link',
                success: a => {
                    E(a);
                },
                error: a => {
                    C(a), (0, n.throwMessageError)({
                        e: a,
                        default: {
                            title: 'Error connecting to our server',
                            content: 'An error ocurred while connecting to our server. Please try again later.'
                        }
                    });
                },
                both: () => A(!1)
            });
        }, []), (0, f.jsx)(l.default, {
            open: a.showPayForMeModal,
            onCancel: a.onCancel,
            footer: null,
            closable: !1,
            width: 690,
            bodyStyle: {
                padding: 0
            },
            children: z ? (0, f.jsx)('div', {
                style: {
                    height: 361
                },
                className: 'flex maxWidth maxHeight hc vc',
                children: (0, f.jsx)(m.default, {
                    size: 'large'
                })
            }) : (0, f.jsxs)(_z, {
                children: [
                    (0, f.jsx)(_C, {
                        onClick: a.onCancel
                    }),
                    (0, f.jsxs)(_A, {
                        children: [
                            (0, f.jsx)('span', {
                                style: {
                                    fontWeight: s.FontWeights.UltraBold
                                },
                                children: 'Pay For Me'
                            }),
                            ' ',
                            'link'
                        ]
                    }),
                    (0, f.jsxs)(_B, {
                        children: [
                            'Send this link to someone to allow them to pay for your',
                            ' ',
                            p.COMPANY_NAME,
                            ' Pro subscription. Once they pay, you\'ll get one full year of ',
                            p.COMPANY_NAME,
                            ' Pro and we\'ll make sure autorenew is off so they aren\'t charged again.',
                            (0, f.jsx)('br', {}),
                            ' ',
                            (0, f.jsx)('br', {}),
                            'One more thing: once they pay for your subscription, we\'ll send you an email letting you know!'
                        ]
                    }),
                    (0, f.jsx)(i.default, {}),
                    !B && (0, f.jsxs)('div', {
                        className: 'flex',
                        children: [
                            (0, f.jsx)(j.default, {
                                value: F(),
                                size: 'large',
                                readOnly: !0
                            }),
                            (0, f.jsx)(h.default, {
                                size: 'large',
                                type: 'primary',
                                style: {
                                    marginLeft: 10
                                },
                                onClick: () => {
                                    b(o)(F()), k.default.success('Pay For Me link copied to clipboard!');
                                },
                                children: 'Copy Link'
                            })
                        ]
                    })
                ]
            })
        });
    };
    const _z = q.default.div.attrs({
            className: 'maxWidth'
        })(t || (t = x`
  color: ${ 0 };
  font-family: ${ 0 };
  padding: 30px;
`), r.default.Black, s.Fonts.SFPro),
        _A = q.default.div(u || (u = x`
  font-size: 32px;
`)),
        _B = q.default.div(v || (v = x`
  font-size: 17px;
  margin-top: 14px;
`)),
        _C = q.default.i.attrs({
            className: 'fal fa-times'
        })(w || (w = x`
  position: absolute;
  font-size: 24px;
  top: 30px;
  right: 30px;
  opacity: 0.8;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`));
}), c.register('CsaeO', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('quE27'),
        h = c('O0Kav'),
        i = c('u4s09'),
        j = c('DOXh4'),
        k = c('41Yw7');
    let l;
    const m = {
        Classic: 1
    };
    var _n = () => {
        const [o, p] = h.useState([]);
        return h.useEffect(() => {
            (0, g.request)({
                url: '/api/experiences',
                data: {
                    mode: 'liveGame'
                },
                cacheKey: 'EXPERIENCES',
                success: o => {
                    let q = [];
                    const r = [];
                    o.forEach(o => {
                        o.items.forEach(o => {
                            o.isPremiumExperience && (r.includes(o._id) || (q.push({
                                ...o,
                                isPremiumExperience: !0
                            }), r.push(o._id)));
                        });
                    }), Object.keys(m).forEach(o => {
                        const s = m[o],
                            t = q.find(s => s.name === o);
                        t && (q = q.filter(s => s.name !== o), q.splice(s, 0, t));
                    }), p(q);
                }
            });
        }, []), o.length ? (0, f.jsx)(_o, {
            children: (0, f.jsx)(j.default, {
                list: {
                    _id: '_',
                    name: '_',
                    items: o
                },
                hideListName: !0,
                noShadowOnItems: !0,
                forceAllSelected: !0,
                forcePremiumBadge: !0
            })
        }) : (0, f.jsx)(_o, {
            children: (0, f.jsx)('div', {
                style: {
                    height: 180
                }
            })
        });
    };
    const _o = i.default.div.attrs({
        className: 'maxWidth'
    })(l || (l = (a => a)`
  margin-top: ${ 0 }px;
`), () => 25 - k.BOTTOM_PADDING);
}), c.register('41Yw7', function(d, e) {
    a(d.exports, 'BOTTOM_PADDING', function() {
        return _s;
    }), a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn'),
        g = c('8KqQ+'),
        h = c('Eh2Wh'),
        i = c('quE27');
    c('O0Kav');
    var j = c('u4s09'),
        k = c('hecDa'),
        l = c('ZGMPa');
    let m, n, o, p, q, r = a => a;
    const _s = 180;
    var _t = a => {
        const {
            copy: u
        } = a;
        return (0, f.jsxs)(_u, {
            background: a.showingModes ? '#0A2540' : 'transparent',
            color: a.showingModes ? g.default.White : g.default.Black,
            bottomPadding: a.showingModes ? _s : 0,
            maskImage: !!a.showingModes,
            children: [
                (0, f.jsx)(_v, {
                    onClick: a.close
                }),
                (0, f.jsxs)(_w, {
                    children: [
                        (0, f.jsx)(_x, {
                            children: u && u.title ? u.title : (0, i.isUpgraded)() ? (0, f.jsx)(f.Fragment, {
                                children: 'Your trial ends soon.'
                            }) : (0, l.getFreePlanType)() === l.FreePlanType.limitedGames ? (0, f.jsx)(f.Fragment, {
                                children: 'Upgrade to host unlimited games'
                            }) : (0, f.jsx)('div', {
                                style: {
                                    fontSize: 40,
                                    marginTop: 30
                                },
                                children: 'Get all game modes for $4.99 a month.'
                            })
                        }),
                        (0, f.jsx)(_y, {
                            style: {
                                marginTop: a.showingModes ? 10 : 5
                            },
                            children: (() => {
                                if (u && u.description)
                                    return u.description;
                                const v = (0, l.getFreePlanType)(),
                                    w = v === l.FreePlanType.limitedModes ? 'a few game modes that rotate every few weeks' : `host ${ (0, l.getLimitedGameLimit)() } games per month`;
                                return (0, f.jsxs)('div', {
                                    className: 'maxWidth',
                                    style: {
                                        textAlign: 'left'
                                    },
                                    children: [
                                        (0, i.isUpgraded)() ? `After your Pro trial ends, you'll be placed on our free plan. Under the free plan, you're limited to ${ w }.` : `You're on the free version of Gimkit, which limits you to ${ w }.`,
                                        (0, f.jsx)('br', {}),
                                        ' ',
                                        (0, f.jsx)('br', {}),
                                        v === l.FreePlanType.limitedModes ? 'Want access to every single mode?' : 'Want to host unlimited games?',
                                        ' ',
                                        'Upgrade to Gimkit Pro! It\u2019s just $4.99 a month and you\u2019ll be helping support us, an independent small business.',
                                        v === l.FreePlanType.limitedModes ? (0, f.jsxs)(f.Fragment, {
                                            children: [
                                                (0, f.jsx)('br', {}),
                                                ' ',
                                                (0, f.jsx)('br', {}),
                                                'Upgrade to get access to these game modes and more:'
                                            ]
                                        }) : null
                                    ]
                                });
                            })()
                        })
                    ]
                })
            ]
        });
    };
    const _u = j.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(m || (m = r`
  padding: ${ 0 }px 0px;
  padding-top: 30px;
  background: ${ 0 };
  color: ${ 0 };
  text-align: center;
  padding-bottom: ${ 0 }px;
  ${ 0 }
`), () => k.PADDING, a => a.background, a => a.color, a => a.bottomPadding, a => a.maskImage ? `mask-image: linear-gradient(\n    to bottom,\n    ${ a.background } 50%,\n    transparent 100%);` : ''),
        _v = j.default.i.attrs({
            className: 'fal fa-times'
        })(n || (n = r`
  position: absolute;
  font-size: 24px;
  top: 25px;
  right: ${ 0 }px;
  opacity: 0.8;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`), () => k.PADDING),
        _w = j.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = r`
  padding: 0px ${ 0 }px;
`), () => k.PADDING),
        _x = j.default.div(p || (p = r`
  font-size: 42px;
  font-weight: ${ 0 };
`), h.FontWeights.UltraBold),
        _y = j.default.div(q || (q = r`
  font-size: 20px;
`));
}), c.register('jH8Dk', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('7sglQ'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ReadOutlined';
    var _k = g.forwardRef(j);
}), c.register('7sglQ', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 00324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z'
                }
            }]
        },
        name: 'read',
        theme: 'outlined'
    };
});