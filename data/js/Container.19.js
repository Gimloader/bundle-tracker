function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('lUVF/', function(b, c) {
    _h(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        titleFont: a('b5kvC').Fonts.FugazOne
    };
}), a.register('R043n', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('VWUSb'),
        f = new Map([
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
        _g = function(_h, i) {
            var j = (0, e.default)(_h),
                k = (0, e.default)(i);
            (0, d.useEffect)(function() {
                var l = function(m) {
                    var n;
                    ! function(o) {
                        if (f.has(o.key)) {
                            var p = f.get(o.key);
                            Object.defineProperty(o, 'key', {
                                get: function() {
                                    return p;
                                }
                            });
                        }
                    }(m), (n = j.current, Array.isArray(n) ? n : [n]).includes(m.key) && k.current(m);
                };
                return window.addEventListener('keydown', l),
                    function() {
                        window.removeEventListener('keydown', l);
                    };
            }, []);
        };
}), a.register('VWUSb', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('85FZz'),
        _f = function(_g) {
            var h = (0, d.useRef)(_g);
            return (0, e.default)(function() {
                h.current = _g;
            }), h;
        };
}), a.register('85FZz', function(b, c) {
    _m(b.exports, 'default', function() {
        return _d;
    });
    var _d = a('LEQ5w').useLayoutEffect;
}), a.register('/urNL', function(b, c) {
    _m(b.exports, 'FreePlanType', function() {
        return _e;
    }), _m(b.exports, 'getFreePlanType', function() {
        return _g;
    }), _m(b.exports, 'getLimitedGameLimit', function() {
        return _h;
    });
    var d = a('THxMC');
    let _e;
    var f;
    (f = _e || (_e = {})).limitedModes = 'limitedModes', f.limitedGames = 'limitedGames';
    const _g = () => 'game-limit' === d.default.getFeatureFlag('game-limit-free-plan-secondary') ? _e.limitedGames : _e.limitedModes,
        _h = () => 5;
}), a.register('kJEAP', function(b, c) {
    _m(b.exports, 'default', function() {
        return _x;
    });
    var d = a('0hzx+'),
        e = a('TwXYL'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('mHJPF'),
        i = a('BXKZi0'),
        j = a('R043n'),
        k = a('Kc6XZ23'),
        l = a('lUVF/'),
        m = a('sHRDd');
    let n, o, p, q, r, s, t, u, v, w = _m => _m;
    var _x = _m => {
        const [y, z] = f.useState(0), A = f.useRef(!1), B = f.useRef(null), [C] = (0, i.default)(B), D = f.useMemo(() => _m.verticalList ? 0 : y * h.EXPERIENCE_FULL_WIDTH * -1 + k.default.sideMargin, [
            y,
            _m.verticalList
        ]), E = f.useMemo(() => !(y <= 0), [y]);
        (0, j.default)([
            'ArrowLeft',
            'ArrowRight'
        ], _m => {
            A.current && ('ArrowLeft' === _m.key && o(), 'ArrowRight' === _m.key && p());
        });
        const F = f.useMemo(() => {
                if (y + 1 === _m.list.items.length)
                    return !1;
                const G = (C - k.default.sideMargin) / h.EXPERIENCE_FULL_WIDTH;
                return !(y >= _m.list.items.length - G);
            }, [
                C,
                y,
                _m.list.items.length
            ]),
            G = () => {
                E && z(Math.max(0, y - 1));
            },
            H = () => {
                F && z(y + 1);
            };
        return (0, d.jsxs)(_y, {
            onMouseEnter: () => {
                A.current = !0;
            },
            onMouseLeave: () => {
                A.current = !1;
            },
            children: [
                _m.hideListName ? null : (0, d.jsx)(_z, {
                    children: _m.list.name
                }),
                (0, d.jsxs)(_A, {
                    children: [
                        (0, d.jsx)(_B, {
                            animate: {
                                x: D
                            },
                            initial: {
                                x: _m.verticalList ? 0 : k.default.sideMargin
                            },
                            transition: {
                                duration: 0.3,
                                ease: 'easeOut'
                            },
                            style: _m.verticalList ? {
                                display: 'grid',
                                gridTemplateColumns: `repeat(auto-fill, ${ h.EXPERIENCE_WIDTH }px)`,
                                justifyContent: 'center',
                                gap: 20,
                                margin: '0px 25px'
                            } : {
                                gap: h.MARGIN_RIGHT
                            },
                            ref: B,
                            children: _m.list.items.map(y => (0, d.jsx)(h.default, {
                                name: y.name,
                                tagline: y.tagline,
                                image: y.imageUrl,
                                currentlySelected: !!_m.forceAllSelected || _m.currentlySelectedExperienceId === y._id,
                                onSelect: _m.onExperienceSelected ? () => _m.onExperienceSelected(y._id) : null,
                                isProExperience: y.isPremiumExperience,
                                noShadowOnContainer: _m.noShadowOnItems,
                                forcePremiumBadge: _m.forcePremiumBadge,
                                tag: y.tag
                            }, `list-${ _m.list._id }-${ y._id }`))
                        }),
                        _m.verticalList ? null : (0, d.jsxs)(_C, {
                            children: [
                                (0, d.jsx)(_E, {
                                    animate: {
                                        opacity: E ? 1 : 0
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    onClick: G,
                                    children: (0, d.jsx)(_G, {
                                        style: {
                                            cursor: E ? 'pointer' : 'auto'
                                        },
                                        children: (0, d.jsx)('i', {
                                            className: 'fas fa-chevron-left'
                                        })
                                    })
                                }),
                                (0, d.jsx)(_F, {
                                    animate: {
                                        opacity: F ? 1 : 0
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    onClick: H,
                                    children: (0, d.jsx)(_G, {
                                        style: {
                                            cursor: F ? 'pointer' : 'auto'
                                        },
                                        children: (0, d.jsx)('i', {
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
    const _y = g.default.div.attrs({
            className: 'maxWidth'
        })(n || (n = w``)),
        _z = g.default.div(o || (o = w`
  font-family: ${ 0 };
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`), l.default.titleFont),
        _A = g.default.div.attrs({
            className: 'maxWidth'
        })(p || (p = w`
  position: relative;
  overflow: hidden;
`)),
        _B = (0, g.default)(e.motion.div).attrs({
            className: 'flex'
        })(q || (q = w``)),
        _C = g.default.div.attrs({
            className: 'maxAll flex vc between'
        })(r || (r = w`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`)),
        D = (0, g.default)(e.motion.div).attrs({
            className: 'flex-center maxHeight'
        })(s || (s = w`
  width: 60px;
  line-height: 1;
  color: ${ 0 };
`), m.default.White),
        _E = (0, g.default)(D)(t || (t = w`
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
        _F = (0, g.default)(D)(u || (u = w`
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
        _G = g.default.div.attrs({
            className: 'flex-center'
        })(v || (v = w`
  font-size: 32px;
  pointer-events: all;
  will-change: transform;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`));
}), a.register('mHJPF', function(b, c) {
    _m(b.exports, 'EXPERIENCE_WIDTH', function() {
        return _v;
    }), _m(b.exports, 'MARGIN_RIGHT', function() {
        return _w;
    }), _m(b.exports, 'EXPERIENCE_FULL_WIDTH', function() {
        return _x;
    }), _m(b.exports, 'default', function() {
        return _z;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('b5kvC'),
        g = a('PMl60'),
        h = a('TwXYL'),
        i = a('LEQ5w'),
        j = a('Axq+p'),
        k = a('lUVF/'),
        l = a('/urNL');
    let m, n, o, p, q, r, s, t, u = _m => _m;
    const _v = 350,
        _w = 10,
        _x = _v + _w,
        y = 0.2;
    var _z = _m => {
        const [A, B, C] = (0, g.useBoolean)(!1), D = (0, l.getFreePlanType)(), E = i.useMemo(() => _m.isProExperience && !(0, g.isStudent)() && D === l.FreePlanType.limitedModes && !(0, g.isUpgraded)(), [
            _m.isProExperience,
            D
        ]);
        return (0, d.jsxs)(_A, {
            onMouseEnter: B,
            onMouseLeave: C,
            style: {
                backgroundImage: `url('${ _m.image }')`,
                borderColor: _m.currentlySelected ? '#fdd835' : e.default.White
            },
            onClick: _m.onSelect,
            className: _m.noShadowOnContainer ? '' : 'light-shadow',
            children: [
                _m.forcePremiumBadge || E ? (0, d.jsx)(_B, {
                    animate: {
                        opacity: A ? 0 : 1
                    },
                    initial: {
                        opacity: 1
                    },
                    transition: {
                        duration: y
                    },
                    children: (0, d.jsx)(_C, {})
                }) : (0, d.jsx)('div', {}),
                (0, d.jsxs)(_D, {
                    children: [
                        E ? (0, d.jsx)(_E, {
                            animate: {
                                opacity: A ? 0 : 1
                            },
                            initial: {
                                opacity: 1
                            },
                            transition: {
                                duration: y
                            },
                            children: 'Gimkit Pro Exclusive'
                        }) : null,
                        !E && _m.tag ? (0, d.jsx)(_F, {
                            animate: {
                                opacity: A ? 0 : 1
                            },
                            initial: {
                                opacity: 1
                            },
                            transition: {
                                duration: y
                            },
                            children: _m.tag
                        }) : null,
                        (0, d.jsx)(_G, {
                            children: _m.name
                        }),
                        (0, d.jsx)(_H, {
                            animate: {
                                height: A ? 'auto' : 0
                            },
                            initial: {
                                height: 0
                            },
                            transition: {
                                duration: y
                            },
                            children: _m.tagline
                        })
                    ]
                })
            ]
        });
    };
    const _A = j.default.div.attrs({
            className: 'flex flex-column between'
        })(m || (m = u`
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
`), _v),
        _B = (0, j.default)(h.motion.div).attrs({
            className: 'maxWidth'
        })(n || (n = u`
  padding: 10px 15px;
`)),
        _C = j.default.img.attrs({
            src: '/client/img/pro/star.svg'
        })(o || (o = u`
  height: 20px;
`)),
        _D = j.default.div.attrs({
            className: 'maxWidth flex-column'
        })(p || (p = u`
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
        _E = (0, j.default)(h.motion.div)(q || (q = u`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: -2px;
  text-shadow: 1px 1px 1px ${ 0 };
  color: ${ 0 };
`), k.default.titleFont, e.default.Black, e.default.White),
        _F = (0, j.default)(h.motion.div)(r || (r = u`
  font-family: ${ 0 };
  text-transform: uppercase;
  background: rgba(255, 87, 34, 0.8);
  padding: 7px 10px;
  font-size: 11px;
  line-height: 1;
  border-radius: 10px;
  margin-bottom: 4px;
`), k.default.titleFont),
        _G = j.default.div(s || (s = u`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
  text-shadow: 2px 2px 2px ${ 0 };
  color: ${ 0 };
`), k.default.titleFont, e.default.Black, e.default.White),
        _H = (0, j.default)(h.motion.div)(t || (t = u`
  font-size: 14px;
  text-shadow: 1px 1px 1px ${ 0 };
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1px;
  overflow: hidden;
  font-family: ${ 0 };
`), e.default.Black, f.Fonts.ProductSans);
}), a.register('BtZXP', function(b, c) {
    _m(b.exports, 'PADDING', function() {
        return _t;
    }), _m(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('YRlpt'),
        f = a('sHRDd'),
        g = a('b5kvC'),
        h = a('PMl60'),
        i = a('LEQ5w'),
        j = a('Axq+p'),
        k = a('Kc6XZ23'),
        l = a('GXYoL'),
        m = a('NPZ0g'),
        n = a('kX1xb'),
        o = a('J3ZQI'),
        p = a('/urNL');
    let q, r, s = _m => _m;
    const _t = k.default.sideMargin;
    var _u = _m => {
        i.useEffect(() => {
            _m.visible && _m.showModes && (0, h.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        }, [
            _m.visible,
            _m.showModes
        ]), i.useEffect(() => {
            _m.visible && (0, o.TrackPostHogEvent)({
                event: 'upgrade modal open',
                properties: {
                    reason: _m.id
                }
            });
        }, [
            _m.visible,
            _m.id
        ]);
        const v = (0, h.getUser)();
        if (!v)
            return null;
        const w = (0, p.getFreePlanType)(),
            x = _m.showModes && w === p.FreePlanType.limitedModes;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(_v, {}),
                (0, d.jsx)(e.default, {
                    className: 'upgrade-modal',
                    footer: null,
                    width: 850,
                    style: {
                        top: 30
                    },
                    bodyStyle: {
                        padding: '0px',
                        background: f.default.Snow
                    },
                    open: _m.visible,
                    onCancel: _m.close,
                    closable: !1,
                    children: (0, d.jsxs)(_w, {
                        children: [
                            (0, d.jsx)(n.default, {
                                user: v,
                                close: _m.close,
                                copy: _m.copy,
                                showingModes: x
                            }),
                            x ? (0, d.jsx)(m.default, {}) : null,
                            (0, d.jsx)(l.default, {
                                showingModes: x
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _v = (0, j.createGlobalStyle)(q || (q = s`
  .upgrade-modal > .ant-modal-content {
    border-radius: 10px;
    overflow: hidden !important;
    padding: 0px !important;
  }
`)),
        _w = j.default.div.attrs({
            className: 'maxWidth'
        })(r || (r = s`
  color: ${ 0 };
  font-family: ${ 0 };
`), f.default.Black, g.Fonts.SFPro);
}), a.register('GXYoL', function(b, c) {
    _m(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('xQDqe25'),
        f = a('ulE4q'),
        g = a('fmVdR'),
        h = a('sHRDd'),
        i = a('gs4MT'),
        j = a('2HvvA11'),
        k = a('PMl60'),
        l = a('LEQ5w'),
        m = a('Axq+p'),
        n = a('Rtfgy20'),
        o = a('xs/eX'),
        p = a('jPLfO');
    let q, r, s, t = _m => _m;
    var _u = _m => {
        const [v, w] = l.useState(!1), [x, y] = l.useState(!1);
        return (0, d.jsxs)('div', {
            className: 'flex flex-column vc',
            style: {
                marginTop: _m.showingModes ? 25 : 20,
                paddingBottom: 30
            },
            children: [
                (0, d.jsx)(j.default, {
                    to: i.CHECKOUT,
                    children: (0, d.jsx)(f.default, {
                        type: 'primary',
                        size: 'large',
                        icon: (0, d.jsx)(e.default, {}),
                        style: {
                            width: 380,
                            height: 70
                        },
                        children: (0, k.isUpgraded)() ? 'Upgrade to Gimkit Pro early' : 'Upgrade to Gimkit Pro'
                    })
                }),
                (0, n.onlyOfferAnnualUpgrade)() ? (0, d.jsx)(_v, {
                    children: '$59.88 a year - works out to $4.99 a month'
                }) : null,
                (0, d.jsx)(g.default, {
                    style: {
                        margin: '26px 0px'
                    }
                }),
                (0, d.jsxs)('div', {
                    className: 'flex vc',
                    children: [
                        (0, d.jsx)(_w, {
                            to: i.GROUP_PRICING,
                            children: 'Group license pricing'
                        }),
                        (0, d.jsx)(_x, {}),
                        (0, d.jsx)(_w, {
                            onClick: () => y(!0),
                            children: 'Pay For Me Link'
                        }),
                        !v && (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsx)(_x, {}),
                                (0, d.jsx)(_w, {
                                    onClick: () => w(!0),
                                    children: 'FAQ'
                                })
                            ]
                        })
                    ]
                }),
                v && (0, d.jsx)(o.default, {}),
                (0, d.jsx)(p.default, {
                    showPayForMeModal: x,
                    onCancel: () => y(!1)
                })
            ]
        });
    };
    const _v = m.default.div(q || (q = t`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 12px;
`)),
        _w = (0, m.default)(j.default)(r || (r = t`
  font-size: 16px;
  display: block;
  color: ${ 0 };
  text-decoration: underline;
`), h.default.Black),
        _x = m.default.i.attrs({
            className: 'fas fa-circle'
        })(s || (s = t`
  margin: 0px 12px;
  font-size: 10px;
`));
}), a.register('xs/eX', function(b, c) {
    _m(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('fmVdR'),
        f = a('sHRDd'),
        g = a('b5kvC');
    a('LEQ5w');
    var h = a('Axq+p'),
        i = a('BtZXP'),
        j = a('/urNL');
    let k, l, m, n, o = _m => _m;
    const p = [{
            question: 'What happens if I pay now and my school pays later?',
            answer: (0, d.jsxs)('span', {
                children: [
                    'If your school purchases a group license and you\'ve already purchased Gimkit Pro, you\u2019ll get refunded for your unused time.',
                    ' ',
                    (0, d.jsx)('b', {
                        children: 'So if you purchase a year of Gimkit Pro today and your school upgrades next month, we\u2019d refund you $54.89.'
                    }),
                    ' ',
                    'That refund happens automatically. No need to contact support!'
                ]
            })
        },
        {
            question: 'What\'s included with Gimkit Pro?',
            answer: (0, d.jsxs)('span', {
                children: [
                    (0, j.getFreePlanType)() === j.FreePlanType.limitedModes ? 'Unrestricted access to all modes, including Gimkit Pro Exclusives.' : 'No game limits, host as many games as you\'d like!',
                    ' ',
                    'You\'ll also be able to create assignments (play Gimkit asynchronously) and upload audio + images to your questions.'
                ]
            })
        },
        {
            question: 'What\'s your refund policy?',
            answer: (0, d.jsxs)('span', {
                children: [
                    'Bad refund policies are infuriating. You feel like the company is just trying to rip you off. We never want our customers to feel that way, so our refund policy is simple: If you\u2019re ever unhappy with your subscription for any reason, just contact us and we\u2019ll take care of you.',
                    ' ',
                    (0, d.jsx)('a', {
                        href: 'https://www.notion.so/gimkit/A-fair-refund-policy-a1688f61330b49a495a48bd0fd08697b',
                        target: '_blank',
                        children: 'Check out our full refund policy here.'
                    })
                ]
            })
        }
    ];
    var _q = () => (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(e.default, {
                style: {
                    margin: '26px 0px'
                }
            }),
            (0, d.jsx)(_r, {
                children: p.map(_m => (0, d.jsxs)(_s, {
                    children: [
                        (0, d.jsx)(_t, {
                            children: _m.question
                        }),
                        (0, d.jsx)(_u, {
                            children: _m.answer
                        })
                    ]
                }, _m.question))
            })
        ]
    });
    const _r = h.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = o`
  padding: 0px ${ 0 }px;
`), () => i.PADDING),
        _s = h.default.div(l || (l = o`
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
`), f.default.White, f.default.BorderGray),
        _t = h.default.div(m || (m = o`
  font-size: 21px;
  font-weight: ${ 0 };
`), g.FontWeights.Bold),
        _u = h.default.div(n || (n = o`
  font-size: 16px;
  margin-top: 5px;
`));
}), a.register('jPLfO', function(b, c) {
    _m(b.exports, 'default', function() {
        return _w;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('fmVdR'),
        h = a('ewwAh'),
        i = a('MSsQO'),
        j = a('YRlpt'),
        k = a('6CIVV'),
        l = a('PMl60'),
        m = a('jlX4s16'),
        n = a('hHkFq'),
        o = a('Axq+p'),
        p = a('sHRDd'),
        q = a('b5kvC');
    let r, s, t, u, v = _m => _m;
    var _w = _m => {
        const [x, y] = _b(e).useState(!0), [z, A] = _b(e).useState(null), [B, C] = _b(e).useState(null), D = () => `${ (0, l.getDomain)() }/pay-for-me/${ B }`;
        return _b(e).useEffect(() => {
            (0, l.request)({
                method: 'GET',
                url: '/api/billing/pay-for-me-link',
                success: _m => {
                    C(_m);
                },
                error: _m => {
                    A(_m), (0, l.throwMessageError)({
                        e: _m,
                        default: {
                            title: 'Error connecting to our server',
                            content: 'An error ocurred while connecting to our server. Please try again later.'
                        }
                    });
                },
                both: () => y(!1)
            });
        }, []), (0, d.jsx)(j.default, {
            open: _m.showPayForMeModal,
            onCancel: _m.onCancel,
            footer: null,
            closable: !1,
            width: 690,
            bodyStyle: {
                padding: 0
            },
            children: x ? (0, d.jsx)('div', {
                style: {
                    height: 361
                },
                className: 'flex maxWidth maxHeight hc vc',
                children: (0, d.jsx)(k.default, {
                    size: 'large'
                })
            }) : (0, d.jsxs)(_x, {
                children: [
                    (0, d.jsx)(_A, {
                        onClick: _m.onCancel
                    }),
                    (0, d.jsxs)(_y, {
                        children: [
                            (0, d.jsx)('span', {
                                style: {
                                    fontWeight: q.FontWeights.UltraBold
                                },
                                children: 'Pay For Me'
                            }),
                            ' ',
                            'link'
                        ]
                    }),
                    (0, d.jsxs)(_z, {
                        children: [
                            'Send this link to someone to allow them to pay for your',
                            ' ',
                            n.COMPANY_NAME,
                            ' Pro subscription. Once they pay, you\'ll get one full year of ',
                            n.COMPANY_NAME,
                            ' Pro and we\'ll make sure autorenew is off so they aren\'t charged again.',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            'One more thing: once they pay for your subscription, we\'ll send you an email letting you know!'
                        ]
                    }),
                    (0, d.jsx)(g.default, {}),
                    !z && (0, d.jsxs)('div', {
                        className: 'flex',
                        children: [
                            (0, d.jsx)(h.default, {
                                value: D(),
                                size: 'large',
                                readOnly: !0
                            }),
                            (0, d.jsx)(f.default, {
                                size: 'large',
                                type: 'primary',
                                style: {
                                    marginLeft: 10
                                },
                                onClick: () => {
                                    _b(m)(D()), i.default.success('Pay For Me link copied to clipboard!');
                                },
                                children: 'Copy Link'
                            })
                        ]
                    })
                ]
            })
        });
    };
    const _x = o.default.div.attrs({
            className: 'maxWidth'
        })(r || (r = v`
  color: ${ 0 };
  font-family: ${ 0 };
  padding: 30px;
`), p.default.Black, q.Fonts.SFPro),
        _y = o.default.div(s || (s = v`
  font-size: 32px;
`)),
        _z = o.default.div(t || (t = v`
  font-size: 17px;
  margin-top: 14px;
`)),
        _A = o.default.i.attrs({
            className: 'fal fa-times'
        })(u || (u = v`
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
}), a.register('NPZ0g', function(_b, c) {
    _m(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('PMl60'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('kJEAP'),
        i = a('kX1xb');
    let j;
    const k = {
        Classic: 1
    };
    var _l = () => {
        const [_m, n] = f.useState([]);
        return f.useEffect(() => {
            (0, e.request)({
                url: '/api/experiences',
                data: {
                    mode: 'liveGame'
                },
                cacheKey: 'EXPERIENCES',
                success: _m => {
                    let o = [];
                    const p = [];
                    _m.forEach(_m => {
                        _m.items.forEach(_m => {
                            _m.isPremiumExperience && (p.includes(_m._id) || (o.push({
                                ..._m,
                                isPremiumExperience: !0
                            }), p.push(_m._id)));
                        });
                    }), Object.keys(k).forEach(_m => {
                        const q = k[_m],
                            r = o.find(q => q.name === _m);
                        r && (o = o.filter(q => q.name !== _m), o.splice(q, 0, r));
                    }), n(o);
                }
            });
        }, []), _m.length ? (0, d.jsx)(_m, {
            children: (0, d.jsx)(h.default, {
                list: {
                    _id: '_',
                    name: '_',
                    items: _m
                },
                hideListName: !0,
                noShadowOnItems: !0,
                forceAllSelected: !0,
                forcePremiumBadge: !0
            })
        }) : (0, d.jsx)(_m, {
            children: (0, d.jsx)('div', {
                style: {
                    height: 180
                }
            })
        });
    };
    const _m = g.default.div.attrs({
        className: 'maxWidth'
    })(j || (j = (_t => _t)`
  margin-top: ${ 0 }px;
`), () => 25 - i.BOTTOM_PADDING);
}), a.register('kX1xb', function(b, c) {
    _t(b.exports, 'BOTTOM_PADDING', function() {
        return _q;
    }), _t(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('b5kvC'),
        g = a('PMl60');
    a('LEQ5w');
    var h = a('Axq+p'),
        i = a('BtZXP'),
        j = a('/urNL');
    let k, l, m, n, o, p = _t => _t;
    const _q = 180;
    var _r = _t => {
        const {
            copy: s
        } = _t;
        return (0, d.jsxs)(_s, {
            background: _t.showingModes ? '#0A2540' : 'transparent',
            color: _t.showingModes ? e.default.White : e.default.Black,
            bottomPadding: _t.showingModes ? _q : 0,
            maskImage: !!_t.showingModes,
            children: [
                (0, d.jsx)(_t, {
                    onClick: _t.close
                }),
                (0, d.jsxs)(_u, {
                    children: [
                        (0, d.jsx)(_v, {
                            children: s && s.title ? s.title : (0, g.isUpgraded)() ? (0, d.jsx)(d.Fragment, {
                                children: 'Your trial ends soon.'
                            }) : (0, j.getFreePlanType)() === j.FreePlanType.limitedGames ? (0, d.jsx)(d.Fragment, {
                                children: 'Upgrade to host unlimited games'
                            }) : (0, d.jsx)('div', {
                                style: {
                                    fontSize: 40,
                                    marginTop: 30
                                },
                                children: 'Get all game modes for $4.99 a month.'
                            })
                        }),
                        (0, d.jsx)(_w, {
                            style: {
                                marginTop: _t.showingModes ? 10 : 5
                            },
                            children: (() => {
                                if (s && s.description)
                                    return s.description;
                                const _t = (0, j.getFreePlanType)(),
                                    u = _t === j.FreePlanType.limitedModes ? 'a few game modes that rotate every few weeks' : `host ${ (0, j.getLimitedGameLimit)() } games per month`;
                                return (0, d.jsxs)('div', {
                                    className: 'maxWidth',
                                    style: {
                                        textAlign: 'left'
                                    },
                                    children: [
                                        (0, g.isUpgraded)() ? `After your Pro trial ends, you'll be placed on our free plan. Under the free plan, you're limited to ${ u }.` : `You're on the free version of Gimkit, which limits you to ${ u }.`,
                                        (0, d.jsx)('br', {}),
                                        ' ',
                                        (0, d.jsx)('br', {}),
                                        _t === j.FreePlanType.limitedModes ? 'Want access to every single mode?' : 'Want to host unlimited games?',
                                        ' ',
                                        'Upgrade to Gimkit Pro! It\u2019s just $4.99 a month and you\u2019ll be helping support us, an independent small business.',
                                        _t === j.FreePlanType.limitedModes ? (0, d.jsxs)(d.Fragment, {
                                            children: [
                                                (0, d.jsx)('br', {}),
                                                ' ',
                                                (0, d.jsx)('br', {}),
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
    const _s = h.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(k || (k = p`
  padding: ${ 0 }px 0px;
  padding-top: 30px;
  background: ${ 0 };
  color: ${ 0 };
  text-align: center;
  padding-bottom: ${ 0 }px;
  ${ 0 }
`), () => i.PADDING, _i => _i.background, _i => _i.color, _i => _i.bottomPadding, _i => _i.maskImage ? `mask-image: linear-gradient(\n    to bottom,\n    ${ _i.background } 50%,\n    transparent 100%);` : ''),
        _t = h.default.i.attrs({
            className: 'fal fa-times'
        })(l || (l = p`
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
`), () => i.PADDING),
        _u = h.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = p`
  padding: 0px ${ 0 }px;
`), () => i.PADDING),
        _v = h.default.div(n || (n = p`
  font-size: 42px;
  font-weight: ${ 0 };
`), f.FontWeights.UltraBold),
        _w = h.default.div(o || (o = p`
  font-size: 20px;
`));
}), a.register('kXV54', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('Ljprz'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'ReadOutlined';
    var _i = e.forwardRef(h);
}), a.register('Ljprz', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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