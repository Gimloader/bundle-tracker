function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('SruRO', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _A;
    });
    var f = b('gRbUn');
    b('O0Kav');
    var g = b('u4s09'),
        h = b('S78lq0'),
        i = b('MgONH'),
        j = b('JNGrh0'),
        k = b('8KqQ+'),
        l = b('E2AMI26'),
        m = b('q3tb00'),
        n = b('RoTfF'),
        o = b('Y8VMd'),
        p = b('u8Fxu'),
        q = b('8kp7a'),
        r = b('TfnJ9'),
        s = b('Eh2Wh'),
        t = b('YGjrn'),
        u = b('b6aHw');
    let v, w, x, y, z = a => a;
    var _A = a => {
        const {
            isLoading: B,
            data: C,
            error: D
        } = (0, h.default)(), {
            data: E,
            isLoading: F,
            error: G
        } = (0, o.default)();
        return (0, p.useWillUnmount)(() => {
            (0, h.removeCosmosItemShop)();
        }), B || F ? (0, f.jsx)(i.Centered, {
            className: 'maxAll',
            children: (0, f.jsx)(j.default, {
                style: {
                    color: k.default.White
                }
            })
        }) : D || G ? (0, f.jsx)(i.Centered, {
            className: 'maxAll',
            children: 'There was an error loading The Shop. Please refresh and try again.'
        }) : (0, f.jsx)(r.LimitedWidth, {
            customWidth: 900,
            children: (0, f.jsxs)(_B, {
                children: [
                    (0, f.jsx)(_C, {
                        children: 'Packs'
                    }),
                    (0, f.jsx)(_D, {
                        children: 'Open packs to earn new items that you can use in-game!'
                    }),
                    (0, f.jsx)(_E, {
                        style: {
                            marginTop: 20
                        },
                        children: C.packs.map(B => (0, f.jsx)(q.Pack, {
                            id: B.id,
                            name: B.name,
                            color: B.color,
                            cost: B.currencyCost,
                            redirect: !a.setToPackScreen,
                            handleClick: () => {
                                (0, t.playPackClickSound)(), a.setToPackScreen && a.setToPackScreen(B.id);
                            }
                        }, B.id))
                    }),
                    C.shop.items.length ? (0, f.jsxs)('div', {
                        className: 'maxWidth',
                        style: {
                            marginTop: 40
                        },
                        children: [
                            (0, f.jsxs)('div', {
                                className: 'maxWidth flex between vc',
                                children: [
                                    (0, f.jsx)(_C, {
                                        children: 'Items'
                                    }),
                                    (0, f.jsx)(u.default, {
                                        serverNowTime: C.shop.now,
                                        shopRefreshTime: C.shop.endUnix
                                    })
                                ]
                            }),
                            (0, f.jsxs)(_D, {
                                children: [
                                    'Purchase new items to use in-game!',
                                    (0, f.jsx)('br', {}),
                                    'Make sure to get the items you want before the shop refreshes!'
                                ]
                            }),
                            (0, f.jsx)('div', {
                                className: 'maxWidth',
                                style: {
                                    marginTop: 20
                                },
                                children: (0, f.jsx)(l.default, {
                                    direction: 'vertical',
                                    size: 20,
                                    className: 'maxWidth',
                                    children: C.shop.items.map(B => (0, f.jsx)(m.default, {
                                        id: B.cosmetic.id,
                                        name: B.cosmetic.name,
                                        image: (0, n.default)({
                                            id: B.cosmetic.id,
                                            type: B.cosmetic.type
                                        }),
                                        description: B.cosmetic.description,
                                        type: B.cosmetic.type,
                                        rarity: B.cosmetic.rarity,
                                        cost: B.currencyCost,
                                        owned: B.owned,
                                        tag: B.tag,
                                        style: B.cosmetic.style,
                                        currentCurrency: E.currency,
                                        onCosmeticSelectionChanged: a.onCosmeticSelectionChanged,
                                        blockCharacterPreview: a.blockCharacterPreview
                                    }, B.cosmetic.id + '-item'))
                                })
                            })
                        ]
                    }) : null
                ]
            })
        });
    };
    const _B = g.default.div.attrs({
            className: 'flex-column'
        })(v || (v = z``)),
        _C = g.default.div(w || (w = z`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 32px;
`), s.Fonts.FugazOne),
        _D = g.default.div(x || (x = z`
  font-family: ${ 0 };
  font-size: 16px;
  margin-top: -2px;
  color: rgba(255, 255, 255, 0.9);
`), s.Fonts.SFPro),
        _E = g.default.div(y || (y = z`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 27px;
  justify-content: center;
`));
}), b.register('S78lq0', function(c, d) {
    a(c.exports, 'removeCosmosItemShop', function() {
        return _i;
    }), a(c.exports, 'refetchCosmosItemShop', function() {
        return _j;
    }), a(c.exports, 'default', function() {
        return _k;
    });
    var e = b('GmO9j'),
        f = b('9IJbB'),
        g = b('quE27');
    const h = ['cosmos-item-shop'],
        _i = () => {
            f.default.removeQueries(h);
        },
        _j = () => f.default.refetchQueries(h);
    var _k = () => (0, e.useQuery)(h, () => (0, g.requestAsPromise)({
        url: '/api/cosmos/shop'
    }));
}), b.register('q3tb00', function(c, d) {
    a(c.exports, 'BORDER_RADIUS', function() {
        return _t;
    }), a(c.exports, 'Container', function() {
        return _v;
    }), a(c.exports, 'PreviewArea', function() {
        return _w;
    }), a(c.exports, 'PreviewContent', function() {
        return _x;
    }), a(c.exports, 'default', function() {
        return _u;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('u4s09'),
        h = b('pBG7d0'),
        i = b('WrOhL'),
        j = b('quE27'),
        k = b('YGjrn'),
        l = b('xI8Nf0'),
        m = b('z0fxm'),
        n = b('Eh2Wh'),
        o = b('4TLhr0');
    let p, q, r, s = a => a;
    const _t = 6;
    var _u = a => {
        const [v, w, x] = (0, j.useBoolean)(!1), [y, z, A] = (0, j.useBoolean)(!1), B = f.useMemo(() => a.type === i.CosmeticType.sticker ? 30 : 10, [a.type]);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(_v, {
                    onMouseEnter: z,
                    onMouseLeave: A,
                    onClick: () => {
                        (0, k.playClickSound)(), w();
                    },
                    children: [
                        (0, e.jsx)(_w, {
                            children: (0, e.jsx)(_x, {
                                style: {
                                    transform: `scale(${ y ? 1.1 : 1 })`
                                },
                                children: (0, e.jsx)(l.default, {
                                    image: a.image,
                                    background: (0, m.rarityToBackground)(a.rarity),
                                    padding: B
                                })
                            })
                        }),
                        (0, e.jsx)(h.default, {
                            name: a.name,
                            type: a.type,
                            rarity: a.rarity,
                            owned: a.owned,
                            cost: a.cost,
                            tag: a.tag
                        })
                    ]
                }),
                (0, e.jsx)(o.default, {
                    open: v,
                    close: x,
                    ...a
                })
            ]
        });
    };
    const _v = g.default.div.attrs({
            className: 'maxWidth medium-shadow'
        })(p || (p = s`
  border-radius: ${ 0 }px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  border: 3px solid;
  font-family: ${ 0 };
  &:last-child {
    margin-bottom: 0px;
  }
`), _t, n.Fonts.FugazOne),
        _w = g.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = s`
  height: 140px;
  overflow: hidden;
`)),
        _x = g.default.div.attrs({
            className: 'maxAll'
        })(r || (r = s`
  transition: transform 0.25s;
`));
}), b.register('pBG7d0', function(c, d) {
    a(c.exports, 'Container', function() {
        return _t;
    }), a(c.exports, 'Content', function() {
        return _u;
    }), a(c.exports, 'Title', function() {
        return _v;
    }), a(c.exports, 'Description', function() {
        return _w;
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('q3tb00'),
        h = b('z0fxm'),
        i = b('GYoVM'),
        j = b('0UnIU'),
        k = b('8KqQ+');
    let l, m, n, o, p, q, r = a => a;
    var _s = a => (0, e.jsx)(_t, {
        style: {
            background: (0, h.rarityToBackground)(a.rarity)
        },
        children: (0, e.jsxs)(_u, {
            children: [
                (0, e.jsxs)('div', {
                    className: 'flex-column',
                    style: {
                        alignItems: 'flex-start'
                    },
                    children: [
                        a.tag ? (0, e.jsx)(_y, {
                            children: a.tag
                        }) : null,
                        (0, e.jsx)(_v, {
                            children: a.name
                        }),
                        (0, e.jsx)(_w, {
                            children: a.owned ? 'Owned' : (0, i.cosmeticTypeName)(a.type)
                        })
                    ]
                }),
                (0, e.jsx)(_x, {
                    children: a.owned ? null : (0, e.jsx)(j.default, {
                        amount: a.cost
                    })
                })
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
`), k.default.White, () => g.BORDER_RADIUS, () => g.BORDER_RADIUS),
        _u = f.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(m || (m = r`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 25px;
`)),
        _v = f.default.div(n || (n = r`
  font-size: 24px;
`)),
        _w = f.default.div(o || (o = r`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 6px;
`)),
        _x = f.default.div(p || (p = r`
  margin-left: 10px;
`)),
        _y = f.default.div(q || (q = r`
  background: #00897b;
  padding: 11px;
  border-radius: 7px;
  line-height: 1;
  margin-bottom: 11px;
  font-size: 13px;
  text-transform: uppercase;
`));
}), b.register('xI8Nf0', function(c, d) {
    a(c.exports, 'default', function() {
        return _k;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('Z4bmH0');
    let h, i, j = a => a;
    var _k = a => {
        const [l, m] = (0, g.useInViewRef)();
        return (0, e.jsx)(_l, {
            ref: l,
            style: {
                padding: a.padding,
                background: a.background
            },
            children: m ? (0, e.jsx)(_m, {
                draggable: !1,
                src: a.image
            }) : null
        });
    };
    const _l = f.default.div.attrs({
            className: 'maxAll flex-center'
        })(h || (h = j`
  background: rgb(255, 255, 255);
  overflow: hidden;
`)),
        _m = f.default.img(i || (i = j`
  max-width: 100%;
  max-height: 100%;
`));
}), b.register('Z4bmH0', function(c, d) {
    a(c.exports, 'useInViewRef', function() {
        return _g;
    });
    var e = b('O0Kav'),
        f = {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: [
                0,
                1
            ]
        };

    function _g(h, i) {
        void 0 === h && (h = function() {}), void 0 === i && (i = f);
        var j = i.root,
            k = void 0 === j ? null : j,
            l = i.rootMargin,
            m = i.threshold,
            n = (0, e.useState)(null),
            o = n[0],
            p = n[1],
            q = (0, e.useState)(!1),
            r = q[0],
            s = q[1];
        (0, e.useEffect)(function() {
            if (o) {
                var t = new IntersectionObserver(function(u, v) {
                    u.forEach(function(w) {
                        var x = w.isIntersecting;
                        return s(x);
                    }), h(u, v);
                }, i);
                return t.observe(o),
                    function() {
                        t.disconnect();
                    };
            }
        }, [
            o,
            h,
            k,
            l,
            m
        ]);
        var t = (0, e.useCallback)(function(u) {
            p(u);
        }, []);
        return [
            t,
            r
        ];
    }
}), b.register('4TLhr0', function(c, d) {
    a(c.exports, 'default', function() {
        return _p;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('NmKrj'),
        h = b('RoTfF'),
        i = b('0UnIU'),
        j = b('quE27'),
        k = b('3jaMj'),
        l = b('UaUBz0'),
        m = b('S78lq0'),
        n = b('Y8VMd'),
        o = b('IMf/b4');
    var _p = a => {
        const [q, r] = f.useState(!1), [s, t] = f.useState(!1), {
            id: u,
            name: v,
            rarity: w,
            type: x,
            description: y,
            style: z
        } = a, A = a.owned || a.currentCurrency < a.cost, B = () => {
            A || q || (r(!0), (0, j.request)({
                url: '/api/cosmos/purchase-item',
                data: {
                    cosmeticId: a.id
                },
                success: () => {
                    (0, o.AnalyticsTrackEvent)({
                        event: 'cosmetic_purchased',
                        properties: {
                            id: u,
                            name: v,
                            type: x
                        }
                    }), (0, k.playSound)({
                        path: (0, l.default)('cosmos/cosmeticPurchased.mp3'),
                        volume: 0.6
                    }), (0, n.invalidateCosmosBasics)(), (0, m.refetchCosmosItemShop)(), t(!0);
                },
                error: q => {
                    (0, j.throwMessageError)({
                        e: q,
                        default: {
                            title: 'Error purchasing item.',
                            content: 'Please try again later.'
                        }
                    }), a.close();
                }
            }));
        };
        return (0, e.jsx)(g.default, {
            open: a.open,
            close: a.close,
            id: u,
            name: v,
            image: (0, h.default)({
                id: u,
                type: x
            }),
            rarity: w,
            type: x,
            description: y,
            style: z,
            purchased: s,
            callToAction: () => ({
                text: a.owned ? 'Owned' : (0, e.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        lineHeight: 1,
                        padding: '2px 0px'
                    },
                    children: [
                        (0, e.jsx)('div', {
                            style: {
                                marginTop: 2
                            },
                            children: 'Purchase'
                        }),
                        (0, e.jsx)('div', {
                            style: {
                                margin: '0px 7px'
                            },
                            children: '-'
                        }),
                        (0, e.jsx)(i.default, {
                            amount: a.cost,
                            size: 16,
                            grayscale: A
                        })
                    ]
                }),
                ariaLabel: a.owned ? 'Owned' : 'Purchase',
                disabled: A,
                onClick: B
            }),
            blockCharacterPreview: a.blockCharacterPreview,
            onCosmeticSelectionChanged: a.onCosmeticSelectionChanged
        });
    };
}), b.register('3jaMj', function(c, d) {
    a(c.exports, 'playSound', function() {
        return _g;
    }), a(c.exports, 'preloadSound', function() {
        return _i;
    });
    var e = b('6yrsF');
    const f = new Map(),
        _g = a => {
            const h = Date.now();
            if (!a.path)
                return null;
            const i = a.forceCreateNewSound ? void 0 : f.get(a.path),
                j = i || new(0, e.Howl)({
                    src: a.path
                });
            if (j.volume(a.volume), i)
                a.delay ? setTimeout(() => {
                    j.play();
                }, a.delay) : j.play();
            else {
                const k = () => {
                    if (f.get(a.path) || a.forceCreateNewSound || f.set(a.path, j), a.delay) {
                        const l = h + a.delay,
                            m = Date.now();
                        m > l ? j.play() : setTimeout(() => {
                            j.play();
                        }, l - m);
                    } else
                        j.play();
                };
                'loaded' === j.state() ? k() : j.once('load', k);
            }
            return j;
        },
        h = new Set(),
        _i = a => {
            const {
                path: j
            } = a;
            if (f.get(j))
                return;
            if (h.has(j))
                return;
            h.add(j);
            const k = new(0, e.Howl)({
                src: j
            });
            k.once('load', () => {
                h.delete(j), f.set(j, k);
            });
        };
}), b.register('IMf/b4', function(c, d) {
    a(c.exports, 'AnalyticsTrackEvent', function() {
        return _i;
    });
    var e = b('gK+6L'),
        f = b('quE27'),
        g = b('95m0H'),
        h = b('50Ts4');
    const _i = a => {
        var j, k, l;
        if ((window.gtag && !(null === (j = a.blockedSource) || void 0 === j ? void 0 : j.google) && window.gtag('event', a.event, a.properties), g.AnalyticsFlags.educatorOnly) && (null === (l = (0, f.getUser)()) || void 0 === l ? void 0 : l.accountType) !== e.default.educator)
            return;
        (null === (k = a.blockedSource) || void 0 === k ? void 0 : k.posthog) || (0, h.TrackPostHogEvent)({
            event: a.event,
            properties: a.properties,
            force: a.forcePostHog
        });
    };
}), b.register('u8Fxu', function(c, d) {
    a(c.exports, 'useWillUnmount', function() {
        return _f;
    });
    var e = b('O0Kav');

    function _f(g) {
        (0, e.useEffect)(function() {
            return g;
        }, []);
    }
}), b.register('8kp7a', function(c, d) {
    a(c.exports, 'Pack', function() {
        return _u;
    }), a(c.exports, 'PackImage', function() {
        return _z;
    });
    var e = b('gRbUn'),
        f = b('u4s09'),
        g = b('0UnIU'),
        h = b('Eh2Wh'),
        i = b('quE27'),
        j = b('O0Kav'),
        k = b('SAYZy'),
        l = b('P0+b1'),
        m = b('FB7HT26'),
        n = b('8KqQ+');
    let o, p, q, r, s, t = a => a;
    const _u = a => {
            const [v, w, x] = (0, i.useBoolean)(!1), y = (0, j.useMemo)(() => `radial-gradient(circle, ${ (0, k.lighten)(0.25, a.color) } 0%, ${ a.color } 100%)`, [
                a.color,
                v
            ]);
            return (0, e.jsx)(_v, {
                to: a.redirect ? `/rewards/pack/${ a.id }` : void 0,
                onClick: a.handleClick,
                children: (0, e.jsx)(_w, {
                    onMouseEnter: w,
                    onMouseLeave: x,
                    background: y,
                    children: (0, e.jsxs)(_x, {
                        children: [
                            (0, e.jsx)(_z, {
                                imageUrl: (0, l.getPackImage)(a.id),
                                hovering: v,
                                draggable: !1
                            }),
                            (0, e.jsx)(_y, {
                                children: a.name
                            }),
                            (0, e.jsx)(g.default, {
                                amount: a.cost,
                                size: 15
                            })
                        ]
                    })
                })
            });
        },
        _v = (0, f.default)(m.default)(o || (o = t`
  text-decoration: none;
  color: ${ 0 } !important;
`), n.default.White),
        _w = f.default.div.attrs({
            className: 'medium-shadow'
        })(p || (p = t`
  background: ${ 0 };

  border-radius: 8px;
  width: 280px;
  font-family: ${ 0 };
  text-transform: uppercase;
  width: ${ 0 }px;
  position: relative;
  cursor: pointer;
`), a => a.background, h.Fonts.FugazOne, () => 280),
        _x = f.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(q || (q = t`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.69) 0%,
    rgba(0, 0, 0, 0.008) 48.8%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 8px;
  padding: 30px;
`)),
        _y = f.default.div(r || (r = t`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 3px;
`)),
        _z = f.default.div(s || (s = t`
  width: 195px;
  height: 333px;
  transform: rotate(
      ${ 0 }deg
    )
    scale(${ 0 });
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5))
    brightness(${ 0 });
  transition: transform 0.22s ease-out, filter 0.22s ease-out;
  background-image: url(${ 0 });
  background-size: cover;
`), a => a.hovering ? 0 : 3, a => a.hovering ? 1.02 : 0.98, a => a.hovering ? 1.2 : 1, a => a.imageUrl);
}), b.register('P0+b1', function(c, d) {
    a(c.exports, 'getPackImage', function() {
        return _f;
    });
    var e = b('UaUBz0');
    const _f = a => (0, e.default)('cosmos/packs/' + a + '.png');
}), b.register('b6aHw', function(c, d) {
    a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('/4RRY'),
        h = b('u4s09'),
        i = b('Eh2Wh'),
        j = b('S78lq0');
    let k;
    const l = (a, b) => {
            const m = a % b;
            return [
                Math.floor(a / b),
                m
            ];
        },
        m = a => {
            const [n, o] = l(a, 86400), [p, q] = l(o, 3600), [r, s] = l(q, 60);
            let t = '';
            return n && (t += `${ n }d `), (p || n) && (t += `${ p }h `), t += `${ r }m `, t += `${ s }s`, t;
        };
    var _n = a => {
        const [o, p] = f.useState(Math.floor(Date.now() / 1000) - a.serverNowTime), [q, r] = f.useState(-999999);
        f.useEffect(() => {
            p(Math.floor(Date.now() / 1000) - a.serverNowTime), i();
        }, [a.serverNowTime]);
        const s = () => {
            const t = a.shopRefreshTime - (Math.floor(Date.now() / 1000) - o);
            r(t);
        };
        return f.useEffect(() => {
            s();
        }, []), f.useEffect(() => {
            q < 0 && q > -999 && (0, j.refetchCosmosItemShop)();
        }, [q]), (0, g.useIntervalWhen)(() => {
            s();
        }, 1000), q < 0 ? null : (0, e.jsx)(_o, {
            children: m(q)
        });
    };
    const _o = h.default.div(k || (k = (a => a)`
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
`), i.Fonts.FugazOne);
}), b.register('/4RRY', function(c, d) {
    a(c.exports, 'useIntervalWhen', function() {
        return _f;
    });
    var e = b('O0Kav');

    function _f(g, h, i, j) {
        void 0 === h && (h = 0), void 0 === i && (i = !0), void 0 === j && (j = !1);
        var k = (0, e.useRef)();

        function l() {
            k.current && k.current();
        }
        (0, e.useEffect)(function() {
            k.current = g;
        }), (0, e.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (i) {
                    j && l();
                    var m = window.setInterval(l, h);
                    return function() {
                        window.clearInterval(m);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            i,
            h
        ]);
    }
}), b.register('9rEO42', function(c, d) {
    Object.defineProperty(c.exports, '__esModule', {
        value: !0
    });
    var e, f = function() {
            function g(h, i) {
                for (var j = 0; j < i.length; j++) {
                    var k = i[j];
                    k.enumerable = k.enumerable || !1, k.configurable = !0, 'value' in k && (k.writable = !0), Object.defineProperty(h, k.key, k);
                }
            }
            return function(h, i, j) {
                return i && g(h.prototype, i), j && g(h, j), h;
            };
        }(),
        g = b('O0Kav'),
        h = (e = g) && e.__esModule ? e : {
            default: e
        },
        i = b('izSQB0');
    var j = {
            position: 'relative'
        },
        k = function(l) {
            function m(n) {
                ! function(o, p) {
                    if (!(o instanceof p))
                        throw new TypeError('Cannot call a class as a function');
                }(this, m);
                var o = function(p, q) {
                    if (!p)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !q || 'object' != typeof q && 'function' != typeof q ? p : q;
                }(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, n));
                return o.setRef = o.setRef.bind(o), o;
            }
            return function(n, o) {
                if ('function' != typeof o && null !== o)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof o);
                n.prototype = Object.create(o && o.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(n, o) : n.__proto__ = o);
            }(m, l), f(m, [{
                    key: 'componentWillReceiveProps',
                    value: function(n) {
                        n.active && !this.props.active && (0, i.confetti)(this.container, n.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(n) {
                        this.container = n;
                    }
                },
                {
                    key: 'render',
                    value: function() {
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
}), b.register('izSQB0', function(c, d) {
    Object.defineProperty(c.exports, '__esModule', {
        value: !0
    }), c.exports.confetti = function(e) {
        var f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            g = Object.assign({}, _l, f),
            h = g.elementCount,
            i = g.colors,
            j = g.width,
            k = g.height,
            l = g.angle,
            m = g.spread,
            n = g.startVelocity,
            o = g.decay,
            p = g.duration,
            q = g.random,
            r = _e(e, h, i, j, k),
            s = r.map(function(t) {
                return {
                    element: t,
                    physics: _i(l, m, n, q)
                };
            });
        return _j(e, s, o, p);
    };

    function _e(f, g, h, _i, _j) {
        return Array.from({
            length: g
        }).map(function(k, _l) {
            var m = document.createElement('div'),
                n = h[_l % h.length];
            return m.style['background-color'] = n, m.style.width = _i, m.style.height = _j, m.style.position = 'absolute', m.style.willChange = 'transform, opacity', f.appendChild(m), m;
        });
    }

    function f(g, h, i, j) {
        var k = g * (Math.PI / 180),
            l = h * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * j(),
            wobbleSpeed: 0.1 + 0.1 * j(),
            velocity: 0.5 * i + j() * i,
            angle2D: -k + (0.5 * l - j() * l),
            angle3D: -Math.PI / 4 + j() * (Math.PI / 2),
            tiltAngle: j() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * j()
        };
    }

    function g(h, i, j, k) {
        var l = void 0;
        return new Promise(function(m) {
            requestAnimationFrame(function _w(n) {
                l || (l = n);
                var o = l === n ? 0 : (n - l) / k;
                i.forEach(function(p) {
                    return function(q, r, s) {
                        q.physics.x += Math.cos(q.physics.angle2D) * q.physics.velocity, q.physics.y += Math.sin(q.physics.angle2D) * q.physics.velocity, q.physics.z += Math.sin(q.physics.angle3D) * q.physics.velocity, q.physics.wobble += q.physics.wobbleSpeed, q.physics.velocity *= s, q.physics.y += 3, q.physics.tiltAngle += q.physics.tiltAngleSpeed;
                        var t = q.physics,
                            u = t.x,
                            v = t.y,
                            _w = t.tiltAngle,
                            x = t.wobble,
                            y = 'translate3d(' + (u + 10 * Math.cos(x)) + 'px, ' + (v + 10 * Math.sin(x)) + 'px, 0) rotate3d(1, 1, 1, ' + _w + 'rad)';
                        q.element.style.transform = y, q.element.style.opacity = 1 - r;
                    }(p, o, j);
                }), n - l < k ? requestAnimationFrame(i) : (i.forEach(function(p) {
                    if (p.element.parentNode === h)
                        return h.removeChild(p.element);
                }), m());
            });
        });
    }
    var h = {
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