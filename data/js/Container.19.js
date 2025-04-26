function a(a, b, c, i) {
    Object.defineProperty(a, b, {
        get: c,
        set: i,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('Lm/x1', function(b, i) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        titleFont: c('gSUVO').Fonts.FugazOne
    };
}), c.register('exyhx', function(b, i) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('sR0vy'),
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
        g = function(a, b) {
            var h = (0, e.default)(a),
                i = (0, e.default)(b);
            (0, d.useEffect)(function() {
                var j = function(j) {
                    var k;
                    ! function(j) {
                        if (f.has(j.key)) {
                            var l = f.get(j.key);
                            Object.defineProperty(j, 'key', {
                                get: function() {
                                    return l;
                                }
                            });
                        }
                    }(j), (k = h.current, Array.isArray(k) ? k : [k]).includes(j.key) && i.current(j);
                };
                return window.addEventListener('keydown', j),
                    function() {
                        window.removeEventListener('keydown', j);
                    };
            }, []);
        };
}), c.register('sR0vy', function(b, A) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('0b/Ed'),
        f = function(a) {
            var g = (0, d.useRef)(a);
            return (0, e.default)(function() {
                g.current = a;
            }), g;
        };
}), c.register('0b/Ed', function(b, A) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = c('uPP4W').useLayoutEffect;
}), c.register('QcyFw', function(b, A) {
    a(b.exports, 'FreePlanType', function() {
        return e;
    }), a(b.exports, 'getFreePlanType', function() {
        return g;
    }), a(b.exports, 'getLimitedGameLimit', function() {
        return h;
    });
    var d = c('3EnRx');
    let e;
    var f;
    (f = e || (e = {})).limitedModes = 'limitedModes', f.limitedGames = 'limitedGames';
    const g = () => 'game-limit' === d.default.getFeatureFlag('game-limit-free-plan-secondary') ? e.limitedGames : e.limitedModes,
        h = () => 5;
}), c.register('EyDtu', function(b, A) {
    a(b.exports, 'default', function() {
        return x;
    });
    var d = c('8kSQZ'),
        e = c('b9Bct'),
        f = c('uPP4W'),
        g = c('h99Nu'),
        h = c('aVhTi'),
        i = c('U8PGt'),
        j = c('exyhx'),
        k = c('2gkXu26'),
        l = c('Lm/x1'),
        m = c('lmfrI');
    let n, o, p, q, r, s, t, u, v, w = a => a;
    var x = a => {
        const [y, z] = f.useState(0), A = f.useRef(!1), B = f.useRef(null), [C] = (0, i.default)(B), D = f.useMemo(() => a.verticalList ? 0 : y * h.EXPERIENCE_FULL_WIDTH * -1 + k.default.sideMargin, [
            y,
            a.verticalList
        ]), E = f.useMemo(() => !(y <= 0), [y]);
        (0, j.default)([
            'ArrowLeft',
            'ArrowRight'
        ], a => {
            A.current && ('ArrowLeft' === a.key && o(), 'ArrowRight' === a.key && p());
        });
        const F = f.useMemo(() => {
                if (y + 1 === a.list.items.length)
                    return !1;
                const G = (C - k.default.sideMargin) / h.EXPERIENCE_FULL_WIDTH;
                return !(y >= a.list.items.length - G);
            }, [
                C,
                y,
                a.list.items.length
            ]),
            G = () => {
                E && z(Math.max(0, y - 1));
            },
            H = () => {
                F && z(y + 1);
            };
        return (0, d.jsxs)(y, {
            onMouseEnter: () => {
                A.current = !0;
            },
            onMouseLeave: () => {
                A.current = !1;
            },
            children: [
                a.hideListName ? null : (0, d.jsx)(z, {
                    children: a.list.name
                }),
                (0, d.jsxs)(A, {
                    children: [
                        (0, d.jsx)(B, {
                            animate: {
                                x: D
                            },
                            initial: {
                                x: a.verticalList ? 0 : k.default.sideMargin
                            },
                            transition: {
                                duration: 0.3,
                                ease: 'easeOut'
                            },
                            style: a.verticalList ? {
                                display: 'grid',
                                gridTemplateColumns: `repeat(auto-fill, ${ h.EXPERIENCE_WIDTH }px)`,
                                justifyContent: 'center',
                                gap: 20,
                                margin: '0px 25px'
                            } : {
                                gap: h.MARGIN_RIGHT
                            },
                            ref: B,
                            children: a.list.items.map(y => (0, d.jsx)(h.default, {
                                name: y.name,
                                tagline: y.tagline,
                                image: y.imageUrl,
                                currentlySelected: !!a.forceAllSelected || a.currentlySelectedExperienceId === y._id,
                                onSelect: a.onExperienceSelected ? () => a.onExperienceSelected(y._id) : null,
                                isProExperience: y.isPremiumExperience,
                                noShadowOnContainer: a.noShadowOnItems,
                                forcePremiumBadge: a.forcePremiumBadge,
                                tag: y.tag
                            }, `list-${ a.list._id }-${ y._id }`))
                        }),
                        a.verticalList ? null : (0, d.jsxs)(C, {
                            children: [
                                (0, d.jsx)(E, {
                                    animate: {
                                        opacity: E ? 1 : 0
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    onClick: G,
                                    children: (0, d.jsx)(G, {
                                        style: {
                                            cursor: E ? 'pointer' : 'auto'
                                        },
                                        children: (0, d.jsx)('i', {
                                            className: 'fas fa-chevron-left'
                                        })
                                    })
                                }),
                                (0, d.jsx)(F, {
                                    animate: {
                                        opacity: F ? 1 : 0
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    onClick: H,
                                    children: (0, d.jsx)(G, {
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
    const y = g.default.div.attrs({
            className: 'maxWidth'
        })(n || (n = w``)),
        z = g.default.div(o || (o = w`
  font-family: ${ 0 };
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`), l.default.titleFont),
        A = g.default.div.attrs({
            className: 'maxWidth'
        })(p || (p = w`
  position: relative;
  overflow: hidden;
`)),
        B = (0, g.default)(e.motion.div).attrs({
            className: 'flex'
        })(q || (q = w``)),
        C = g.default.div.attrs({
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
        E = (0, g.default)(D)(t || (t = w`
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
        F = (0, g.default)(D)(u || (u = w`
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
        G = g.default.div.attrs({
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
}), c.register('aVhTi', function(b, C) {
    a(b.exports, 'EXPERIENCE_WIDTH', function() {
        return v;
    }), a(b.exports, 'MARGIN_RIGHT', function() {
        return w;
    }), a(b.exports, 'EXPERIENCE_FULL_WIDTH', function() {
        return x;
    }), a(b.exports, 'default', function() {
        return z;
    });
    var d = c('8kSQZ'),
        e = c('lmfrI'),
        f = c('gSUVO'),
        g = c('PjB0f'),
        h = c('b9Bct'),
        i = c('uPP4W'),
        j = c('h99Nu'),
        k = c('Lm/x1'),
        l = c('QcyFw');
    let m, n, o, p, q, r, s, t, u = a => a;
    const v = 350,
        w = 10,
        x = v + w,
        y = 0.2;
    var z = a => {
        const [A, B, C] = (0, g.useBoolean)(!1), D = (0, l.getFreePlanType)(), E = i.useMemo(() => a.isProExperience && !(0, g.isStudent)() && D === l.FreePlanType.limitedModes && !(0, g.isUpgraded)(), [
            a.isProExperience,
            D
        ]);
        return (0, d.jsxs)(A, {
            onMouseEnter: B,
            onMouseLeave: C,
            style: {
                backgroundImage: `url('${ a.image }')`,
                borderColor: a.currentlySelected ? '#fdd835' : e.default.White
            },
            onClick: a.onSelect,
            className: a.noShadowOnContainer ? '' : 'light-shadow',
            children: [
                a.forcePremiumBadge || E ? (0, d.jsx)(B, {
                    animate: {
                        opacity: A ? 0 : 1
                    },
                    initial: {
                        opacity: 1
                    },
                    transition: {
                        duration: y
                    },
                    children: (0, d.jsx)(C, {})
                }) : (0, d.jsx)('div', {}),
                (0, d.jsxs)(D, {
                    children: [
                        E ? (0, d.jsx)(E, {
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
                        !E && a.tag ? (0, d.jsx)(F, {
                            animate: {
                                opacity: A ? 0 : 1
                            },
                            initial: {
                                opacity: 1
                            },
                            transition: {
                                duration: y
                            },
                            children: a.tag
                        }) : null,
                        (0, d.jsx)(G, {
                            children: a.name
                        }),
                        (0, d.jsx)(H, {
                            animate: {
                                height: A ? 'auto' : 0
                            },
                            initial: {
                                height: 0
                            },
                            transition: {
                                duration: y
                            },
                            children: a.tagline
                        })
                    ]
                })
            ]
        });
    };
    const A = j.default.div.attrs({
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
`), v),
        B = (0, j.default)(h.motion.div).attrs({
            className: 'maxWidth'
        })(n || (n = u`
  padding: 10px 15px;
`)),
        C = j.default.img.attrs({
            src: '/client/img/pro/star.svg'
        })(o || (o = u`
  height: 20px;
`)),
        D = j.default.div.attrs({
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
        E = (0, j.default)(h.motion.div)(q || (q = u`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: -2px;
  text-shadow: 1px 1px 1px ${ 0 };
  color: ${ 0 };
`), k.default.titleFont, e.default.Black, e.default.White),
        F = (0, j.default)(h.motion.div)(r || (r = u`
  font-family: ${ 0 };
  text-transform: uppercase;
  background: rgba(255, 87, 34, 0.8);
  padding: 7px 10px;
  font-size: 11px;
  line-height: 1;
  border-radius: 10px;
  margin-bottom: 4px;
`), k.default.titleFont),
        G = j.default.div(s || (s = u`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 22px;
  text-shadow: 2px 2px 2px ${ 0 };
  color: ${ 0 };
`), k.default.titleFont, e.default.Black, e.default.White),
        H = (0, j.default)(h.motion.div)(t || (t = u`
  font-size: 14px;
  text-shadow: 1px 1px 1px ${ 0 };
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1px;
  overflow: hidden;
  font-family: ${ 0 };
`), e.default.Black, f.Fonts.ProductSans);
}), c.register('VsZIM', function(b, x) {
    a(b.exports, 'PADDING', function() {
        return t;
    }), a(b.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('cR5QE'),
        f = c('lmfrI'),
        g = c('gSUVO'),
        h = c('PjB0f'),
        i = c('uPP4W'),
        j = c('h99Nu'),
        k = c('2gkXu26'),
        l = c('Lektn'),
        m = c('m4FEw'),
        n = c('d/j4H'),
        o = c('OW/xn'),
        p = c('QcyFw');
    let q, r, s = a => a;
    const t = k.default.sideMargin;
    var u = a => {
        i.useEffect(() => {
            a.visible && a.showModes && (0, h.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
        }, [
            a.visible,
            a.showModes
        ]), i.useEffect(() => {
            a.visible && (0, o.TrackPostHogEvent)({
                event: 'upgrade modal open',
                properties: {
                    reason: a.id
                }
            });
        }, [
            a.visible,
            a.id
        ]);
        const v = (0, h.getUser)();
        if (!v)
            return null;
        const w = (0, p.getFreePlanType)(),
            x = a.showModes && w === p.FreePlanType.limitedModes;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(v, {}),
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
                    open: a.visible,
                    onCancel: a.close,
                    closable: !1,
                    children: (0, d.jsxs)(w, {
                        children: [
                            (0, d.jsx)(n.default, {
                                user: v,
                                close: a.close,
                                copy: a.copy,
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
    const v = (0, j.createGlobalStyle)(q || (q = s`
  .upgrade-modal > .ant-modal-content {
    border-radius: 10px;
    overflow: hidden !important;
    padding: 0px !important;
  }
`)),
        w = j.default.div.attrs({
            className: 'maxWidth'
        })(r || (r = s`
  color: ${ 0 };
  font-family: ${ 0 };
`), f.default.Black, g.Fonts.SFPro);
}), c.register('Lektn', function(b, x) {
    a(b.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('zgQWX27'),
        f = c('IsmrL'),
        g = c('ExtIT'),
        h = c('lmfrI'),
        i = c('q721a'),
        j = c('iYEuk12'),
        k = c('PjB0f'),
        l = c('uPP4W'),
        m = c('h99Nu'),
        n = c('bdX0N23'),
        o = c('YC0ht'),
        p = c('XW3wc');
    let q, r, s, t = a => a;
    var u = a => {
        const [v, w] = l.useState(!1), [x, y] = l.useState(!1);
        return (0, d.jsxs)('div', {
            className: 'flex flex-column vc',
            style: {
                marginTop: a.showingModes ? 25 : 20,
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
                (0, n.onlyOfferAnnualUpgrade)() ? (0, d.jsx)(v, {
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
                        (0, d.jsx)(w, {
                            to: i.GROUP_PRICING,
                            children: 'Group license pricing'
                        }),
                        (0, d.jsx)(x, {}),
                        (0, d.jsx)(w, {
                            onClick: () => y(!0),
                            children: 'Pay For Me Link'
                        }),
                        !v && (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsx)(x, {}),
                                (0, d.jsx)(w, {
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
    const v = m.default.div(q || (q = t`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 12px;
`)),
        w = (0, m.default)(j.default)(r || (r = t`
  font-size: 16px;
  display: block;
  color: ${ 0 };
  text-decoration: underline;
`), h.default.Black),
        x = m.default.i.attrs({
            className: 'fas fa-circle'
        })(s || (s = t`
  margin: 0px 12px;
  font-size: 10px;
`));
}), c.register('YC0ht', function(b, y) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ'),
        e = c('ExtIT'),
        f = c('lmfrI'),
        g = c('gSUVO');
    c('uPP4W');
    var h = c('h99Nu'),
        i = c('VsZIM'),
        j = c('QcyFw');
    let k, l, m, n, o = a => a;
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
    var q = () => (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(e.default, {
                style: {
                    margin: '26px 0px'
                }
            }),
            (0, d.jsx)(r, {
                children: p.map(a => (0, d.jsxs)(s, {
                    children: [
                        (0, d.jsx)(t, {
                            children: a.question
                        }),
                        (0, d.jsx)(u, {
                            children: a.answer
                        })
                    ]
                }, a.question))
            })
        ]
    });
    const r = h.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = o`
  padding: 0px ${ 0 }px;
`), () => i.PADDING),
        s = h.default.div(l || (l = o`
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
        t = h.default.div(m || (m = o`
  font-size: 21px;
  font-weight: ${ 0 };
`), g.FontWeights.Bold),
        u = h.default.div(n || (n = o`
  font-size: 16px;
  margin-top: 5px;
`));
}), c.register('XW3wc', function(y, z) {
    a(y.exports, 'default', function() {
        return w;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('IsmrL'),
        g = c('ExtIT'),
        h = c('c6x8w'),
        i = c('jrTkz0'),
        j = c('cR5QE'),
        k = c('iHElh'),
        l = c('PjB0f'),
        m = c('SlNZ027'),
        n = c('0wLl2'),
        o = c('h99Nu'),
        p = c('lmfrI'),
        q = c('gSUVO');
    let r, s, t, u, v = a => a;
    var w = a => {
        const [x, y] = b(e).useState(!0), [z, A] = b(e).useState(null), [B, C] = b(e).useState(null), D = () => `${ (0, l.getDomain)() }/pay-for-me/${ B }`;
        return b(e).useEffect(() => {
            (0, l.request)({
                method: 'GET',
                url: '/api/billing/pay-for-me-link',
                success: a => {
                    C(a);
                },
                error: a => {
                    A(a), (0, l.throwMessageError)({
                        e: a,
                        default: {
                            title: 'Error connecting to our server',
                            content: 'An error ocurred while connecting to our server. Please try again later.'
                        }
                    });
                },
                both: () => y(!1)
            });
        }, []), (0, d.jsx)(j.default, {
            open: a.showPayForMeModal,
            onCancel: a.onCancel,
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
            }) : (0, d.jsxs)(x, {
                children: [
                    (0, d.jsx)(A, {
                        onClick: a.onCancel
                    }),
                    (0, d.jsxs)(y, {
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
                    (0, d.jsxs)(z, {
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
                                    b(m)(D()), i.default.success('Pay For Me link copied to clipboard!');
                                },
                                children: 'Copy Link'
                            })
                        ]
                    })
                ]
            })
        });
    };
    const x = o.default.div.attrs({
            className: 'maxWidth'
        })(r || (r = v`
  color: ${ 0 };
  font-family: ${ 0 };
  padding: 30px;
`), p.default.Black, q.Fonts.SFPro),
        y = o.default.div(s || (s = v`
  font-size: 32px;
`)),
        z = o.default.div(t || (t = v`
  font-size: 17px;
  margin-top: 14px;
`)),
        A = o.default.i.attrs({
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
}), c.register('m4FEw', function(b, p) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('PjB0f'),
        f = c('uPP4W'),
        g = c('h99Nu'),
        h = c('EyDtu'),
        i = c('d/j4H');
    let j;
    const k = {
        Classic: 1
    };
    var l = () => {
        const [m, n] = f.useState([]);
        return f.useEffect(() => {
            (0, e.request)({
                url: '/api/experiences',
                data: {
                    mode: 'liveGame'
                },
                cacheKey: 'EXPERIENCES',
                success: m => {
                    let o = [];
                    const p = [];
                    m.forEach(m => {
                        m.items.forEach(m => {
                            m.isPremiumExperience && (p.includes(m._id) || (o.push({
                                ...m,
                                isPremiumExperience: !0
                            }), p.push(m._id)));
                        });
                    }), Object.keys(k).forEach(m => {
                        const q = k[m],
                            r = o.find(q => q.name === m);
                        r && (o = o.filter(q => q.name !== m), o.splice(q, 0, r));
                    }), n(o);
                }
            });
        }, []), m.length ? (0, d.jsx)(m, {
            children: (0, d.jsx)(h.default, {
                list: {
                    _id: '_',
                    name: '_',
                    items: m
                },
                hideListName: !0,
                noShadowOnItems: !0,
                forceAllSelected: !0,
                forcePremiumBadge: !0
            })
        }) : (0, d.jsx)(m, {
            children: (0, d.jsx)('div', {
                style: {
                    height: 180
                }
            })
        });
    };
    const m = g.default.div.attrs({
        className: 'maxWidth'
    })(j || (j = (a => a)`
  margin-top: ${ 0 }px;
`), () => 25 - i.BOTTOM_PADDING);
}), c.register('d/j4H', function(b, d) {
    a(b.exports, 'BOTTOM_PADDING', function() {
        return q;
    }), a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('lmfrI'),
        f = c('gSUVO'),
        g = c('PjB0f');
    c('uPP4W');
    var h = c('h99Nu'),
        i = c('VsZIM'),
        j = c('QcyFw');
    let k, l, m, n, o, p = a => a;
    const q = 180;
    var r = a => {
        const {
            copy: s
        } = t;
        return (0, d.jsxs)(s, {
            background: t.showingModes ? '#0A2540' : 'transparent',
            color: t.showingModes ? e.default.White : e.default.Black,
            bottomPadding: t.showingModes ? q : 0,
            maskImage: !!t.showingModes,
            children: [
                (0, d.jsx)(t, {
                    onClick: t.close
                }),
                (0, d.jsxs)(u, {
                    children: [
                        (0, d.jsx)(v, {
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
                        (0, d.jsx)(w, {
                            style: {
                                marginTop: t.showingModes ? 10 : 5
                            },
                            children: (() => {
                                if (s && s.description)
                                    return s.description;
                                const u = (0, j.getFreePlanType)(),
                                    v = u === j.FreePlanType.limitedModes ? 'a few game modes that rotate every few weeks' : `host ${ (0, j.getLimitedGameLimit)() } games per month`;
                                return (0, d.jsxs)('div', {
                                    className: 'maxWidth',
                                    style: {
                                        textAlign: 'left'
                                    },
                                    children: [
                                        (0, g.isUpgraded)() ? `After your Pro trial ends, you'll be placed on our free plan. Under the free plan, you're limited to ${ v }.` : `You're on the free version of Gimkit, which limits you to ${ v }.`,
                                        (0, d.jsx)('br', {}),
                                        ' ',
                                        (0, d.jsx)('br', {}),
                                        u === j.FreePlanType.limitedModes ? 'Want access to every single mode?' : 'Want to host unlimited games?',
                                        ' ',
                                        'Upgrade to Gimkit Pro! It\u2019s just $4.99 a month and you\u2019ll be helping support us, an independent small business.',
                                        u === j.FreePlanType.limitedModes ? (0, d.jsxs)(d.Fragment, {
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
    const s = h.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(k || (k = p`
  padding: ${ 0 }px 0px;
  padding-top: 30px;
  background: ${ 0 };
  color: ${ 0 };
  text-align: center;
  padding-bottom: ${ 0 }px;
  ${ 0 }
`), () => i.PADDING, a => a.background, a => a.color, a => a.bottomPadding, a => a.maskImage ? `mask-image: linear-gradient(\n    to bottom,\n    ${ a.background } 50%,\n    transparent 100%);` : ''),
        t = h.default.i.attrs({
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
        u = h.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = p`
  padding: 0px ${ 0 }px;
`), () => i.PADDING),
        v = h.default.div(n || (n = p`
  font-size: 42px;
  font-weight: ${ 0 };
`), f.FontWeights.UltraBold),
        w = h.default.div(o || (o = p`
  font-size: 20px;
`));
}), c.register('L2h2Z', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('ot5Uq'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'ReadOutlined';
    var i = e.forwardRef(h);
}), c.register('ot5Uq', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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