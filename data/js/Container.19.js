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
c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        titleFont: c('.....').Fonts.FugazOne
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....'),
        _h = function(i) {
            var j = (0, f.useRef)(i);
            return (0, g.default)(function() {
                j.current = i;
            }), j;
        };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = c('.....').useLayoutEffect;
}), c.register('.....', function(d, e) {
    let f;
    var g;
    a(d.exports, 'FreePlanType', function() {
        return f;
    }), a(d.exports, 'getFreePlanType', function() {
        return _h;
    }), a(d.exports, 'getLimitedGameLimit', function() {
        return _i;
    }), (g = f || (f = {})).limitedModes = 'limitedModes', g.limitedGames = 'limitedGames';
    const _h = () => f.limitedModes,
        _i = () => 5;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _z;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....');
    let p, q, r, s, t, u, v, w, x, y = z => z;
    var _z = A => {
        const [B, C] = h.useState(0), D = h.useRef(!1), E = h.useRef(null), [F] = (0, k.default)(E), G = h.useMemo(() => A.verticalList ? 0 : B * j.EXPERIENCE_FULL_WIDTH * -1 + m.default.sideMargin, [
            B,
            A.verticalList
        ]), H = h.useMemo(() => !(B <= 0), [B]);
        (0, l.default)([
            'ArrowLeft',
            'ArrowRight'
        ], I => {
            D.current && ('ArrowLeft' === I.key && q(), 'ArrowRight' === I.key && r());
        });
        const I = h.useMemo(() => {
                if (B + 1 === A.list.items.length)
                    return !1;
                const J = (F - m.default.sideMargin) / j.EXPERIENCE_FULL_WIDTH;
                return !(B >= A.list.items.length - J);
            }, [
                F,
                B,
                A.list.items.length
            ]),
            J = () => {
                H && C(Math.max(0, B - 1));
            },
            K = () => {
                I && C(B + 1);
            };
        return (0, f.jsxs)(_A, {
            onMouseEnter: () => {
                D.current = !0;
            },
            onMouseLeave: () => {
                D.current = !1;
            },
            children: [
                A.hideListName ? null : (0, f.jsx)(_B, {
                    children: A.list.name
                }),
                (0, f.jsxs)(_C, {
                    children: [
                        (0, f.jsx)(_D, {
                            animate: {
                                x: G
                            },
                            initial: {
                                x: A.verticalList ? 0 : m.default.sideMargin
                            },
                            transition: {
                                duration: 0.3,
                                ease: 'easeOut'
                            },
                            style: A.verticalList ? {
                                display: 'grid',
                                gridTemplateColumns: `repeat(auto-fill, ${ j.EXPERIENCE_WIDTH }px)`,
                                justifyContent: 'center',
                                gap: 20,
                                margin: '0px 25px'
                            } : {
                                gap: j.MARGIN_RIGHT
                            },
                            ref: E,
                            children: A.list.items.map(L => (0, f.jsx)(j.default, {
                                name: L.name,
                                tagline: L.tagline,
                                image: L.imageUrl,
                                currentlySelected: !!A.forceAllSelected || A.currentlySelectedExperienceId === L._id,
                                onSelect: A.onExperienceSelected ? () => A.onExperienceSelected(L._id) : null,
                                isProExperience: L.isPremiumExperience,
                                noShadowOnContainer: A.noShadowOnItems,
                                forcePremiumBadge: A.forcePremiumBadge,
                                tag: L.tag
                            }, `list-${ A.list._id }-${ L._id }`))
                        }),
                        A.verticalList ? null : (0, f.jsxs)(_E, {
                            children: [
                                (0, f.jsx)(_G, {
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
                                            className: 'fas fa-chevron-left'
                                        })
                                    })
                                }),
                                (0, f.jsx)(_H, {
                                    animate: {
                                        opacity: I ? 1 : 0
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    onClick: K,
                                    children: (0, f.jsx)(_I, {
                                        style: {
                                            cursor: I ? 'pointer' : 'auto'
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'EXPERIENCE_WIDTH', function() {
        return _x;
    }), a(d.exports, 'MARGIN_RIGHT', function() {
        return _y;
    }), a(d.exports, 'EXPERIENCE_FULL_WIDTH', function() {
        return _z;
    }), a(d.exports, 'default', function() {
        return _B;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....');
    let o, p, q, r, s, t, u, v, w = x => x;
    const _x = 350,
        _y = 10,
        _z = _x + _y,
        A = 0.2;
    var _B = C => {
        const [D, E, F] = (0, i.useBoolean)(!1), G = (0, n.getFreePlanType)(), H = k.useMemo(() => C.isProExperience && !(0, i.isStudent)() && G === n.FreePlanType.limitedModes && !(0, i.isUpgraded)(), [
            C.isProExperience,
            G
        ]);
        return (0, f.jsxs)(_C, {
            onMouseEnter: E,
            onMouseLeave: F,
            style: {
                backgroundImage: `url('${ C.image }')`,
                borderColor: C.currentlySelected ? '#fdd835' : g.default.White
            },
            onClick: C.onSelect,
            className: C.noShadowOnContainer ? '' : 'light-shadow',
            children: [
                C.forcePremiumBadge || H ? (0, f.jsx)(_D, {
                    animate: {
                        opacity: D ? 0 : 1
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
                        H ? (0, f.jsx)(_G, {
                            animate: {
                                opacity: D ? 0 : 1
                            },
                            initial: {
                                opacity: 1
                            },
                            transition: {
                                duration: A
                            },
                            children: 'Gimkit Pro Exclusive'
                        }) : null,
                        !H && C.tag ? (0, f.jsx)(_H, {
                            animate: {
                                opacity: D ? 0 : 1
                            },
                            initial: {
                                opacity: 1
                            },
                            transition: {
                                duration: A
                            },
                            children: C.tag
                        }) : null,
                        (0, f.jsx)(_I, {
                            children: C.name
                        }),
                        (0, f.jsx)(_J, {
                            animate: {
                                height: D ? 'auto' : 0
                            },
                            initial: {
                                height: 0
                            },
                            transition: {
                                duration: A
                            },
                            children: C.tagline
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'PADDING', function() {
        return _v;
    }), a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....');
    let s, t, u = v => v;
    const _v = m.default.sideMargin;
    var _w = x => {
        k.useEffect(() => {
            x.visible && x.showModes && (0, j.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        }, [
            x.visible,
            x.showModes
        ]), k.useEffect(() => {
            x.visible && (0, q.TrackPostHogEvent)({
                event: 'upgrade modal open',
                properties: {
                    reason: x.id
                }
            });
        }, [
            x.visible,
            x.id
        ]);
        const y = (0, j.getUser)();
        if (!y)
            return null;
        const z = (0, r.getFreePlanType)(),
            A = x.showModes && z === r.FreePlanType.limitedModes;
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
                    open: x.visible,
                    onCancel: x.close,
                    closable: !1,
                    children: (0, f.jsxs)(_y, {
                        children: [
                            (0, f.jsx)(p.default, {
                                user: y,
                                close: x.close,
                                copy: x.copy,
                                showingModes: A
                            }),
                            A ? (0, f.jsx)(o.default, {}) : null,
                            (0, f.jsx)(n.default, {
                                showingModes: A
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....');
    let s, t, u, v = w => w;
    var _w = x => {
        const [y, z] = n.useState(!1), [A, B] = n.useState(!1);
        return (0, f.jsxs)('div', {
            className: 'flex flex-column vc',
            style: {
                marginTop: x.showingModes ? 25 : 20,
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
                            onClick: () => B(!0),
                            children: 'Pay For Me Link'
                        }),
                        !y && (0, f.jsxs)(f.Fragment, {
                            children: [
                                (0, f.jsx)(_z, {}),
                                (0, f.jsx)(_y, {
                                    onClick: () => z(!0),
                                    children: 'FAQ'
                                })
                            ]
                        })
                    ]
                }),
                y && (0, f.jsx)(q.default, {}),
                (0, f.jsx)(r.default, {
                    showPayForMeModal: A,
                    onCancel: () => B(!1)
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    c('.....');
    var j = c('.....'),
        k = c('.....'),
        l = c('.....');
    let m, n, o, p, q = r => r;
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
                children: r.map(t => (0, f.jsxs)(_u, {
                    children: [
                        (0, f.jsx)(_v, {
                            children: t.question
                        }),
                        (0, f.jsx)(_w, {
                            children: t.answer
                        })
                    ]
                }, t.question))
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _y;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....');
    let t, u, v, w, x = y => y;
    var _y = z => {
        const [A, B] = b(g).useState(!0), [C, D] = b(g).useState(null), [E, F] = b(g).useState(null), G = () => `${ (0, n.getDomain)() }/pay-for-me/${ E }`;
        return b(g).useEffect(() => {
            (0, n.request)({
                method: 'GET',
                url: '/api/billing/pay-for-me-link',
                success: H => {
                    F(H);
                },
                error: H => {
                    D(H), (0, n.throwMessageError)({
                        e: H,
                        default: {
                            title: 'Error connecting to our server',
                            content: 'An error ocurred while connecting to our server. Please try again later.'
                        }
                    });
                },
                both: () => B(!1)
            });
        }, []), (0, f.jsx)(l.default, {
            open: z.showPayForMeModal,
            onCancel: z.onCancel,
            footer: null,
            closable: !1,
            width: 690,
            bodyStyle: {
                padding: 0
            },
            children: A ? (0, f.jsx)('div', {
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
                        onClick: z.onCancel
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
                    !C && (0, f.jsxs)('div', {
                        className: 'flex',
                        children: [
                            (0, f.jsx)(j.default, {
                                value: G(),
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
                                    b(o)(G()), k.default.success('Pay For Me link copied to clipboard!');
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
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
                success: q => {
                    let r = [];
                    const s = [];
                    q.forEach(t => {
                        t.items.forEach(u => {
                            u.isPremiumExperience && (s.includes(u._id) || (r.push({
                                ...u,
                                isPremiumExperience: !0
                            }), s.push(u._id)));
                        });
                    }), Object.keys(m).forEach(t => {
                        const u = m[t],
                            v = r.find(w => w.name === t);
                        v && (r = r.filter(w => w.name !== t), r.splice(u, 0, v));
                    }), p(r);
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
    })(l || (l = (p => p)`
  margin-top: ${ 0 }px;
`), () => 25 - k.BOTTOM_PADDING);
}), c.register('.....', function(d, e) {
    a(d.exports, 'BOTTOM_PADDING', function() {
        return _s;
    }), a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    c('.....');
    var j = c('.....'),
        k = c('.....'),
        l = c('.....');
    let m, n, o, p, q, r = s => s;
    const _s = 180;
    var _t = u => {
        const {
            copy: v
        } = u;
        return (0, f.jsxs)(_u, {
            background: u.showingModes ? '#0A2540' : 'transparent',
            color: u.showingModes ? g.default.White : g.default.Black,
            bottomPadding: u.showingModes ? _s : 0,
            maskImage: !!u.showingModes,
            children: [
                (0, f.jsx)(_v, {
                    onClick: u.close
                }),
                (0, f.jsxs)(_w, {
                    children: [
                        (0, f.jsx)(_x, {
                            children: v && v.title ? v.title : (0, i.isUpgraded)() ? (0, f.jsx)(f.Fragment, {
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
                                marginTop: u.showingModes ? 10 : 5
                            },
                            children: (() => {
                                if (v && v.description)
                                    return v.description;
                                const w = (0, l.getFreePlanType)(),
                                    x = w === l.FreePlanType.limitedModes ? 'a few game modes that rotate every few weeks' : `host ${ (0, l.getLimitedGameLimit)() } games per month`;
                                return (0, f.jsxs)('div', {
                                    className: 'maxWidth',
                                    style: {
                                        textAlign: 'left'
                                    },
                                    children: [
                                        (0, i.isUpgraded)() ? `After your Pro trial ends, you'll be placed on our free plan. Under the free plan, you're limited to ${ x }.` : `You're on the free version of Gimkit, which limits you to ${ x }.`,
                                        (0, f.jsx)('br', {}),
                                        ' ',
                                        (0, f.jsx)('br', {}),
                                        w === l.FreePlanType.limitedModes ? 'Want access to every single mode?' : 'Want to host unlimited games?',
                                        ' ',
                                        'Upgrade to Gimkit Pro! It\u2019s just $4.99 a month and you\u2019ll be helping support us, an independent small business.',
                                        w === l.FreePlanType.limitedModes ? (0, f.jsxs)(f.Fragment, {
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
`), () => k.PADDING, v => v.background, v => v.color, v => v.bottomPadding, v => v.maskImage ? `mask-image: linear-gradient(\n    to bottom,\n    ${ v.background } 50%,\n    transparent 100%);` : ''),
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
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ReadOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
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