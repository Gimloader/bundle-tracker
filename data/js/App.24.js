function a(a, b, A, B) {
    Object.defineProperty(a, b, {
        get: A,
        set: B,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('W8gcG', function(A, B) {
    var c;
    c = A.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(A.exports, 'default', function() {
        return y;
    });
    var d = b('8kSQZ');
    b('uPP4W');
    var e = b('h99Nu'),
        f = b('mEBCp'),
        g = b('YimJ0'),
        h = b('fgVTE0'),
        i = b('lmfrI'),
        j = b('5nJMd26'),
        k = b('8jDAw0'),
        l = b('Rbi1s'),
        m = b('rjuBh'),
        n = b('k6F40'),
        o = b('lze6V'),
        p = b('0Gy6k'),
        q = b('gSUVO'),
        r = b('SeRL7'),
        s = b('lCo95');
    let t, u, v, w, x = a => a;
    var y = a => {
        const {
            isLoading: z,
            data: A,
            error: B
        } = (0, f.default)(), {
            data: C,
            isLoading: D,
            error: E
        } = (0, m.default)();
        return (0, n.useWillUnmount)(() => {
            (0, f.removeCosmosItemShop)();
        }), z || D ? (0, d.jsx)(g.Centered, {
            className: 'maxAll',
            children: (0, d.jsx)(h.default, {
                style: {
                    color: i.default.White
                }
            })
        }) : B || E ? (0, d.jsx)(g.Centered, {
            className: 'maxAll',
            children: 'There was an error loading The Shop. Please refresh and try again.'
        }) : (0, d.jsx)(p.LimitedWidth, {
            customWidth: 900,
            children: (0, d.jsxs)(z, {
                children: [
                    (0, d.jsx)(A, {
                        children: 'Packs'
                    }),
                    (0, d.jsx)(B, {
                        children: 'Open packs to earn new items that you can use in-game!'
                    }),
                    (0, d.jsx)(C, {
                        style: {
                            marginTop: 20
                        },
                        children: A.packs.map(z => (0, d.jsx)(o.Pack, {
                            id: z.id,
                            name: z.name,
                            color: z.color,
                            cost: z.currencyCost,
                            redirect: !a.setToPackScreen,
                            handleClick: () => {
                                (0, r.playPackClickSound)(), a.setToPackScreen && a.setToPackScreen(z.id);
                            }
                        }, z.id))
                    }),
                    A.shop.items.length ? (0, d.jsxs)('div', {
                        className: 'maxWidth',
                        style: {
                            marginTop: 40
                        },
                        children: [
                            (0, d.jsxs)('div', {
                                className: 'maxWidth flex between vc',
                                children: [
                                    (0, d.jsx)(A, {
                                        children: 'Items'
                                    }),
                                    (0, d.jsx)(s.default, {
                                        serverNowTime: A.shop.now,
                                        shopRefreshTime: A.shop.endUnix
                                    })
                                ]
                            }),
                            (0, d.jsxs)(B, {
                                children: [
                                    'Purchase new items to use in-game!',
                                    (0, d.jsx)('br', {}),
                                    'Make sure to get the items you want before the shop refreshes!'
                                ]
                            }),
                            (0, d.jsx)('div', {
                                className: 'maxWidth',
                                style: {
                                    marginTop: 20
                                },
                                children: (0, d.jsx)(j.default, {
                                    direction: 'vertical',
                                    size: 20,
                                    className: 'maxWidth',
                                    children: A.shop.items.map(z => (0, d.jsx)(k.default, {
                                        id: z.cosmetic.id,
                                        name: z.cosmetic.name,
                                        image: (0, l.default)({
                                            id: z.cosmetic.id,
                                            type: z.cosmetic.type
                                        }),
                                        description: z.cosmetic.description,
                                        type: z.cosmetic.type,
                                        rarity: z.cosmetic.rarity,
                                        cost: z.currencyCost,
                                        owned: z.owned,
                                        tag: z.tag,
                                        style: z.cosmetic.style,
                                        currentCurrency: C.currency,
                                        onCosmeticSelectionChanged: a.onCosmeticSelectionChanged,
                                        blockCharacterPreview: a.blockCharacterPreview
                                    }, z.cosmetic.id + '-item'))
                                })
                            })
                        ]
                    }) : null
                ]
            })
        });
    };
    const z = e.default.div.attrs({
            className: 'flex-column'
        })(t || (t = x``)),
        A = e.default.div(u || (u = x`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 32px;
`), q.Fonts.FugazOne),
        B = e.default.div(v || (v = x`
  font-family: ${ 0 };
  font-size: 16px;
  margin-top: -2px;
  color: rgba(255, 255, 255, 0.9);
`), q.Fonts.SFPro),
        C = e.default.div(w || (w = x`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 27px;
  justify-content: center;
`));
}), b.register('mEBCp', function(u, v) {
    a(u.exports, 'removeCosmosItemShop', function() {
        return g;
    }), a(u.exports, 'refetchCosmosItemShop', function() {
        return h;
    }), a(u.exports, 'default', function() {
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
}), b.register('k6F40', function(u, v) {
    a(u.exports, 'useWillUnmount', function() {
        return d;
    });
    var c = b('uPP4W');

    function d(a) {
        (0, c.useEffect)(function() {
            return a;
        }, []);
    }
}), b.register('lze6V', function(u, v) {
    a(u.exports, 'Pack', function() {
        return s;
    }), a(u.exports, 'PackImage', function() {
        return x;
    });
    var c = b('8kSQZ'),
        d = b('h99Nu'),
        e = b('EAfQq'),
        f = b('gSUVO'),
        g = b('PjB0f'),
        h = b('uPP4W'),
        i = b('CDq40'),
        j = b('HjRN7'),
        k = b('iYEuk12'),
        l = b('lmfrI');
    let m, n, o, p, q, r = a => a;
    const s = a => {
            const [t, u, v] = (0, g.useBoolean)(!1), w = (0, h.useMemo)(() => `radial-gradient(circle, ${ (0, i.lighten)(0.25, a.color) } 0%, ${ a.color } 100%)`, [
                a.color,
                t
            ]);
            return (0, c.jsx)(t, {
                to: a.redirect ? `/rewards/pack/${ a.id }` : void 0,
                onClick: a.handleClick,
                children: (0, c.jsx)(u, {
                    onMouseEnter: u,
                    onMouseLeave: v,
                    background: w,
                    children: (0, c.jsxs)(v, {
                        children: [
                            (0, c.jsx)(x, {
                                imageUrl: (0, j.getPackImage)(a.id),
                                hovering: t,
                                draggable: !1
                            }),
                            (0, c.jsx)(w, {
                                children: a.name
                            }),
                            (0, c.jsx)(e.default, {
                                amount: a.cost,
                                size: 15
                            })
                        ]
                    })
                })
            });
        },
        t = (0, d.default)(k.default)(m || (m = r`
  text-decoration: none;
  color: ${ 0 } !important;
`), l.default.White),
        u = d.default.div.attrs({
            className: 'medium-shadow'
        })(n || (n = r`
  background: ${ 0 };

  border-radius: 8px;
  width: 280px;
  font-family: ${ 0 };
  text-transform: uppercase;
  width: ${ 0 }px;
  position: relative;
  cursor: pointer;
`), a => a.background, f.Fonts.FugazOne, () => 280),
        v = d.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(o || (o = r`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.69) 0%,
    rgba(0, 0, 0, 0.008) 48.8%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 8px;
  padding: 30px;
`)),
        w = d.default.div(p || (p = r`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 3px;
`)),
        x = d.default.div(q || (q = r`
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
}), b.register('HjRN7', function(k, n) {
    a(k.exports, 'getPackImage', function() {
        return d;
    });
    var c = b('JJQ0+');
    const d = a => (0, c.default)('cosmos/packs/' + a + '.png');
}), b.register('lCo95', function(k, n) {
    a(k.exports, 'default', function() {
        return l;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('uIVkr'),
        f = b('h99Nu'),
        g = b('gSUVO'),
        h = b('mEBCp');
    let i;
    const j = (a, b) => {
            const k = a % b;
            return [
                Math.floor(a / b),
                k
            ];
        },
        k = a => {
            const [l, m] = j(a, 86400), [n, o] = j(m, 3600), [p, q] = j(o, 60);
            let r = '';
            return l && (r += `${ l }d `), (n || l) && (r += `${ n }h `), r += `${ p }m `, r += `${ q }s`, r;
        };
    var l = a => {
        const [m, n] = d.useState(Math.floor(Date.now() / 1000) - a.serverNowTime), [o, p] = d.useState(-999999);
        d.useEffect(() => {
            n(Math.floor(Date.now() / 1000) - a.serverNowTime), g();
        }, [a.serverNowTime]);
        const q = () => {
            const r = a.shopRefreshTime - (Math.floor(Date.now() / 1000) - m);
            p(r);
        };
        return d.useEffect(() => {
            q();
        }, []), d.useEffect(() => {
            o < 0 && o > -999 && (0, h.refetchCosmosItemShop)();
        }, [o]), (0, e.useIntervalWhen)(() => {
            q();
        }, 1000), o < 0 ? null : (0, c.jsx)(m, {
            children: k(o)
        });
    };
    const m = f.default.div(i || (i = (a => a)`
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
`), g.Fonts.FugazOne);
}), b.register('uIVkr', function(f, c) {
    a(f.exports, 'useIntervalWhen', function() {
        return d;
    });
    var c = b('uPP4W');

    function d(a, b, f, c) {
        void 0 === b && (b = 0), void 0 === f && (f = !0), void 0 === c && (c = !1);
        var e = (0, c.useRef)();

        function f() {
            e.current && e.current();
        }
        (0, c.useEffect)(function() {
            e.current = a;
        }), (0, c.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (f) {
                    c && f();
                    var g = window.setInterval(f, b);
                    return function() {
                        window.clearInterval(g);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            f,
            b
        ]);
    }
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