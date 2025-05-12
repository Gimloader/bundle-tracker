function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _A;
    });
    var f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....');
    let v, w, x, y, z = A => A;
    var _A = B => {
        const {
                isLoading: C,
                data: D,
                error: E
            } = (0, h.default)(), {
                data: F,
                isLoading: G,
                error: H
            } = (0, o.default)();
        return (0, p.useWillUnmount)(() => {
            (0, h.removeCosmosItemShop)();
        }), C || G ? (0, f.jsx)(i.Centered, {
            className: 'maxAll',
            children: (0, f.jsx)(j.default, { style: { color: k.default.White } })
        }) : E || H ? (0, f.jsx)(i.Centered, {
            className: 'maxAll',
            children: 'There was an error loading The Shop. Please refresh and try again.'
        }) : (0, f.jsx)(r.LimitedWidth, {
            customWidth: 900,
            children: (0, f.jsxs)(_B, {
                children: [
                    (0, f.jsx)(_C, { children: 'Packs' }),
                    (0, f.jsx)(_D, { children: 'Open packs to earn new items that you can use in-game!' }),
                    (0, f.jsx)(_E, {
                        style: { marginTop: 20 },
                        children: D.packs.map(I => (0, f.jsx)(q.Pack, {
                            id: I.id,
                            name: I.name,
                            color: I.color,
                            cost: I.currencyCost,
                            redirect: !B.setToPackScreen,
                            handleClick: () => {
                                (0, t.playPackClickSound)(), B.setToPackScreen && B.setToPackScreen(I.id);
                            }
                        }, I.id))
                    }),
                    D.shop.items.length ? (0, f.jsxs)('div', {
                        className: 'maxWidth',
                        style: { marginTop: 40 },
                        children: [
                            (0, f.jsxs)('div', {
                                className: 'maxWidth flex between vc',
                                children: [
                                    (0, f.jsx)(_C, { children: 'Items' }),
                                    (0, f.jsx)(u.default, {
                                        serverNowTime: D.shop.now,
                                        shopRefreshTime: D.shop.endUnix
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
                                style: { marginTop: 20 },
                                children: (0, f.jsx)(l.default, {
                                    direction: 'vertical',
                                    size: 20,
                                    className: 'maxWidth',
                                    children: D.shop.items.map(I => (0, f.jsx)(m.default, {
                                        id: I.cosmetic.id,
                                        name: I.cosmetic.name,
                                        image: (0, n.default)({
                                            id: I.cosmetic.id,
                                            type: I.cosmetic.type
                                        }),
                                        description: I.cosmetic.description,
                                        type: I.cosmetic.type,
                                        rarity: I.cosmetic.rarity,
                                        cost: I.currencyCost,
                                        owned: I.owned,
                                        tag: I.tag,
                                        style: I.cosmetic.style,
                                        currentCurrency: F.currency,
                                        onCosmeticSelectionChanged: B.onCosmeticSelectionChanged,
                                        blockCharacterPreview: B.blockCharacterPreview
                                    }, I.cosmetic.id + '-item'))
                                })
                            })
                        ]
                    }) : null
                ]
            })
        });
    };
    const _B = g.default.div.attrs({ className: 'flex-column' })(v || (v = z``)), _C = g.default.div(w || (w = z`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 32px;
`), s.Fonts.FugazOne), _D = g.default.div(x || (x = z`
  font-family: ${ 0 };
  font-size: 16px;
  margin-top: -2px;
  color: rgba(255, 255, 255, 0.9);
`), s.Fonts.SFPro), _E = g.default.div(y || (y = z`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 27px;
  justify-content: center;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'removeCosmosItemShop', function () {
        return _i;
    }), a(c.exports, 'refetchCosmosItemShop', function () {
        return _j;
    }), a(c.exports, 'default', function () {
        return _k;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const h = ['cosmos-item-shop'], _i = () => {
            f.default.removeQueries(h);
        }, _j = () => f.default.refetchQueries(h);
    var _k = () => (0, e.useQuery)(h, () => (0, g.requestAsPromise)({ url: '/api/cosmos/shop' }));
}), b.register('.....', function (c, d) {
    a(c.exports, 'BORDER_RADIUS', function () {
        return _t;
    }), a(c.exports, 'Container', function () {
        return _v;
    }), a(c.exports, 'PreviewArea', function () {
        return _w;
    }), a(c.exports, 'PreviewContent', function () {
        return _x;
    }), a(c.exports, 'default', function () {
        return _u;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    let p, q, r, s = t => t;
    const _t = 6;
    var _u = v => {
        const [w, x, y] = (0, j.useBoolean)(!1), [z, A, B] = (0, j.useBoolean)(!1), C = f.useMemo(() => v.type === i.CosmeticType.sticker ? 30 : 10, [v.type]);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(_v, {
                    onMouseEnter: A,
                    onMouseLeave: B,
                    onClick: () => {
                        (0, k.playClickSound)(), x();
                    },
                    children: [
                        (0, e.jsx)(_w, {
                            children: (0, e.jsx)(_x, {
                                style: { transform: `scale(${ z ? 1.1 : 1 })` },
                                children: (0, e.jsx)(l.default, {
                                    image: v.image,
                                    background: (0, m.rarityToBackground)(v.rarity),
                                    padding: C
                                })
                            })
                        }),
                        (0, e.jsx)(h.default, {
                            name: v.name,
                            type: v.type,
                            rarity: v.rarity,
                            owned: v.owned,
                            cost: v.cost,
                            tag: v.tag
                        })
                    ]
                }),
                (0, e.jsx)(o.default, {
                    open: w,
                    close: y,
                    ...v
                })
            ]
        });
    };
    const _v = g.default.div.attrs({ className: 'maxWidth medium-shadow' })(p || (p = s`
  border-radius: ${ 0 }px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  border: 3px solid;
  font-family: ${ 0 };
  &:last-child {
    margin-bottom: 0px;
  }
`), _t, n.Fonts.FugazOne), _w = g.default.div.attrs({ className: 'maxWidth' })(q || (q = s`
  height: 140px;
  overflow: hidden;
`)), _x = g.default.div.attrs({ className: 'maxAll' })(r || (r = s`
  transition: transform 0.25s;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'Container', function () {
        return _t;
    }), a(c.exports, 'Content', function () {
        return _u;
    }), a(c.exports, 'Title', function () {
        return _v;
    }), a(c.exports, 'Description', function () {
        return _w;
    }), a(c.exports, 'default', function () {
        return _s;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....');
    let l, m, n, o, p, q, r = s => s;
    var _s = t => (0, e.jsx)(_t, {
        style: { background: (0, h.rarityToBackground)(t.rarity) },
        children: (0, e.jsxs)(_u, {
            children: [
                (0, e.jsxs)('div', {
                    className: 'flex-column',
                    style: { alignItems: 'flex-start' },
                    children: [
                        t.tag ? (0, e.jsx)(_y, { children: t.tag }) : null,
                        (0, e.jsx)(_v, { children: t.name }),
                        (0, e.jsx)(_w, { children: t.owned ? 'Owned' : (0, i.cosmeticTypeName)(t.type) })
                    ]
                }),
                (0, e.jsx)(_x, { children: t.owned ? null : (0, e.jsx)(j.default, { amount: t.cost }) })
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
`), k.default.White, () => g.BORDER_RADIUS, () => g.BORDER_RADIUS), _u = f.default.div.attrs({ className: 'maxWidth flex vc between' })(m || (m = r`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 25px;
`)), _v = f.default.div(n || (n = r`
  font-size: 24px;
`)), _w = f.default.div(o || (o = r`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 6px;
`)), _x = f.default.div(p || (p = r`
  margin-left: 10px;
`)), _y = f.default.div(q || (q = r`
  background: #00897b;
  padding: 11px;
  border-radius: 7px;
  line-height: 1;
  margin-bottom: 11px;
  font-size: 13px;
  text-transform: uppercase;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _k;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....');
    let h, i, j = k => k;
    var _k = l => {
        const [m, n] = (0, g.useInViewRef)();
        return (0, e.jsx)(_l, {
            ref: m,
            style: {
                padding: l.padding,
                background: l.background
            },
            children: n ? (0, e.jsx)(_m, {
                draggable: !1,
                src: l.image
            }) : null
        });
    };
    const _l = f.default.div.attrs({ className: 'maxAll flex-center' })(h || (h = j`
  background: rgb(255, 255, 255);
  overflow: hidden;
`)), _m = f.default.img(i || (i = j`
  max-width: 100%;
  max-height: 100%;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'useInViewRef', function () {
        return _g;
    });
    var e = b('.....'), f = {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: [
                0,
                1
            ]
        };
    function _g(h, i) {
        void 0 === h && (h = function () {
        }), void 0 === i && (i = f);
        var j = i.root, k = void 0 === j ? null : j, l = i.rootMargin, m = i.threshold, n = (0, e.useState)(null), o = n[0], p = n[1], q = (0, e.useState)(!1), r = q[0], s = q[1];
        (0, e.useEffect)(function () {
            if (o) {
                var t = new IntersectionObserver(function (u, v) {
                    u.forEach(function (w) {
                        var x = w.isIntersecting;
                        return s(x);
                    }), h(u, v);
                }, i);
                return t.observe(o), function () {
                    t.disconnect();
                };
            }
        }, [
            o,
            h,
            k,
            _g,
            m
        ]);
        var t = (0, e.useCallback)(function (u) {
            p(u);
        }, []);
        return [
            t,
            r
        ];
    }
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _p;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    var _p = q => {
        const [r, s] = f.useState(!1), [t, u] = f.useState(!1), {
                id: v,
                name: w,
                rarity: x,
                type: y,
                description: z,
                style: A
            } = q, B = q.owned || q.currentCurrency < q.cost, C = () => {
                B || r || (s(!0), (0, j.request)({
                    url: '/api/cosmos/purchase-item',
                    data: { cosmeticId: q.id },
                    success: () => {
                        (0, o.AnalyticsTrackEvent)({
                            event: 'cosmetic_purchased',
                            properties: {
                                id: v,
                                name: w,
                                type: y
                            }
                        }), (0, k.playSound)({
                            path: (0, l.default)('cosmos/cosmeticPurchased.mp3'),
                            volume: 0.6
                        }), (0, n.invalidateCosmosBasics)(), (0, m.refetchCosmosItemShop)(), u(!0);
                    },
                    error: D => {
                        (0, j.throwMessageError)({
                            e: D,
                            default: {
                                title: 'Error purchasing item.',
                                content: 'Please try again later.'
                            }
                        }), q.close();
                    }
                }));
            };
        return (0, e.jsx)(g.default, {
            open: q.open,
            close: q.close,
            id: v,
            name: w,
            image: (0, h.default)({
                id: v,
                type: y
            }),
            rarity: x,
            type: y,
            description: z,
            style: A,
            purchased: t,
            callToAction: () => ({
                text: q.owned ? 'Owned' : (0, e.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        lineHeight: 1,
                        padding: '2px 0px'
                    },
                    children: [
                        (0, e.jsx)('div', {
                            style: { marginTop: 2 },
                            children: 'Purchase'
                        }),
                        (0, e.jsx)('div', {
                            style: { margin: '0px 7px' },
                            children: '-'
                        }),
                        (0, e.jsx)(i.default, {
                            amount: q.cost,
                            size: 16,
                            grayscale: B
                        })
                    ]
                }),
                ariaLabel: q.owned ? 'Owned' : 'Purchase',
                disabled: B,
                onClick: C
            }),
            blockCharacterPreview: q.blockCharacterPreview,
            onCosmeticSelectionChanged: q.onCosmeticSelectionChanged
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'playSound', function () {
        return _g;
    }), a(c.exports, 'preloadSound', function () {
        return _i;
    });
    var e = b('.....');
    const f = new Map(), _g = h => {
            const i = Date.now();
            if (!h.path)
                return null;
            const j = h.forceCreateNewSound ? void 0 : f.get(h.path), k = j || new (0, e.Howl)({ src: h.path });
            if (k.volume(h.volume), j)
                h.delay ? setTimeout(() => {
                    k.play();
                }, h.delay) : k.play();
            else {
                const l = () => {
                    if (f.get(h.path) || h.forceCreateNewSound || f.set(h.path, k), h.delay) {
                        const m = i + h.delay, n = Date.now();
                        n > m ? k.play() : setTimeout(() => {
                            k.play();
                        }, m - n);
                    } else
                        k.play();
                };
                'loaded' === k.state() ? l() : k.once('load', l);
            }
            return k;
        }, h = new Set(), _i = j => {
            const {path: k} = j;
            if (f.get(k))
                return;
            if (h.has(k))
                return;
            h.add(k);
            const l = new (0, e.Howl)({ src: k });
            l.once('load', () => {
                h.delete(k), f.set(k, l);
            });
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'AnalyticsTrackEvent', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    const _i = j => {
        var k, l, m;
        if ((window.gtag && !(null === (k = j.blockedSource) || void 0 === k ? void 0 : k.google) && window.gtag('event', j.event, j.properties), g.AnalyticsFlags.educatorOnly) && (null === (m = (0, f.getUser)()) || void 0 === m ? void 0 : m.accountType) !== e.default.educator)
            return;
        (null === (l = j.blockedSource) || void 0 === l ? void 0 : l.posthog) || (0, h.TrackPostHogEvent)({
            event: j.event,
            properties: j.properties,
            force: j.forcePostHog
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'TrackPostHogEvent', function () {
        return _e;
    });
    b('.....');
    const _e = f => {
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'useWillUnmount', function () {
        return _f;
    });
    var e = b('.....');
    function _f(g) {
        (0, e.useEffect)(function () {
            return g;
        }, []);
    }
}), b.register('.....', function (c, d) {
    a(c.exports, 'Pack', function () {
        return _u;
    }), a(c.exports, 'PackImage', function () {
        return _z;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....');
    let o, p, q, r, s, t = u => u;
    const _u = v => {
            const [w, x, y] = (0, i.useBoolean)(!1), z = (0, j.useMemo)(() => `radial-gradient(circle, ${ (0, k.lighten)(0.25, v.color) } 0%, ${ v.color } 100%)`, [
                    v.color,
                    w
                ]);
            return (0, e.jsx)(_v, {
                to: v.redirect ? `/rewards/pack/${ v.id }` : void 0,
                onClick: v.handleClick,
                children: (0, e.jsx)(_w, {
                    onMouseEnter: x,
                    onMouseLeave: y,
                    background: z,
                    children: (0, e.jsxs)(_x, {
                        children: [
                            (0, e.jsx)(_z, {
                                imageUrl: (0, l.getPackImage)(v.id),
                                hovering: w,
                                draggable: !1
                            }),
                            (0, e.jsx)(_y, { children: v.name }),
                            (0, e.jsx)(g.default, {
                                amount: v.cost,
                                size: 15
                            })
                        ]
                    })
                })
            });
        }, _v = (0, f.default)(m.default)(o || (o = t`
  text-decoration: none;
  color: ${ 0 } !important;
`), n.default.White), _w = f.default.div.attrs({ className: 'medium-shadow' })(p || (p = t`
  background: ${ 0 };

  border-radius: 8px;
  width: 280px;
  font-family: ${ 0 };
  text-transform: uppercase;
  width: ${ 0 }px;
  position: relative;
  cursor: pointer;
`), x => x.background, h.Fonts.FugazOne, () => 280), _x = f.default.div.attrs({ className: 'maxWidth flex-center flex-column' })(q || (q = t`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.69) 0%,
    rgba(0, 0, 0, 0.008) 48.8%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 8px;
  padding: 30px;
`)), _y = f.default.div(r || (r = t`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 3px;
`)), _z = f.default.div(s || (s = t`
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
`), A => A.hovering ? 0 : 3, A => A.hovering ? 1.02 : 0.98, A => A.hovering ? 1.2 : 1, A => A.imageUrl);
}), b.register('.....', function (c, d) {
    a(c.exports, 'getPackImage', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => (0, e.default)('cosmos/packs/' + g + '.png');
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _n;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....');
    let k;
    const l = (m, n) => {
            const o = m % n;
            return [
                Math.floor(m / n),
                o
            ];
        }, m = n => {
            const [o, p] = l(n, 86400), [q, r] = l(p, 3600), [s, t] = l(r, 60);
            let u = '';
            return o && (u += `${ o }d `), (q || o) && (u += `${ q }h `), u += `${ s }m `, u += `${ t }s`, u;
        };
    var _n = o => {
        const [p, q] = f.useState(Math.floor(Date.now() / 1000) - o.serverNowTime), [r, s] = f.useState(-999999);
        f.useEffect(() => {
            q(Math.floor(Date.now() / 1000) - o.serverNowTime), i();
        }, [o.serverNowTime]);
        const t = () => {
            const u = o.shopRefreshTime - (Math.floor(Date.now() / 1000) - p);
            s(u);
        };
        return f.useEffect(() => {
            t();
        }, []), f.useEffect(() => {
            r < 0 && r > -999 && (0, j.refetchCosmosItemShop)();
        }, [r]), (0, g.useIntervalWhen)(() => {
            t();
        }, 1000), r < 0 ? null : (0, e.jsx)(_o, { children: m(r) });
    };
    const _o = h.default.div(k || (k = (p => p)`
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
`), i.Fonts.FugazOne);
}), b.register('.....', function (c, d) {
    a(c.exports, 'useIntervalWhen', function () {
        return _f;
    });
    var e = b('.....');
    function _f(g, h, i, j) {
        void 0 === h && (h = 0), void 0 === i && (i = !0), void 0 === j && (j = !1);
        var k = (0, e.useRef)();
        function l() {
            _f.current && _f.current();
        }
        (0, e.useEffect)(function () {
            _f.current = g;
        }), (0, e.useEffect)(function () {
            if ('undefined' != typeof window) {
                if (i) {
                    j && l();
                    var m = window.setInterval(l, h);
                    return function () {
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
}), b.register('.....', function (c, d) {
    Object.defineProperty(c.exports, '__esModule', { value: !0 });
    var e, f = function () {
            function g(h, i) {
                for (var j = 0; j < i.length; j++) {
                    var k = i[j];
                    k.enumerable = k.enumerable || !1, k.configurable = !0, 'value' in k && (k.writable = !0), Object.defineProperty(h, k.key, k);
                }
            }
            return function (j, k, l) {
                return k && g(j.prototype, k), l && g(j, l), j;
            };
        }(), g = b('.....'), h = (e = g) && e.__esModule ? e : { default: e }, i = b('.....');
    var j = { position: 'relative' }, k = function (l) {
            function m(n) {
                !function (o, p) {
                    if (!(o instanceof p))
                        throw new TypeError('Cannot call a class as a function');
                }(this, m);
                var o = function (p, q) {
                    if (!p)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !q || 'object' != typeof q && 'function' != typeof q ? p : q;
                }(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, n));
                return o.setRef = o.setRef.bind(o), o;
            }
            return function (o, p) {
                if ('function' != typeof p && null !== p)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof p);
                o.prototype = Object.create(p && p.prototype, {
                    constructor: {
                        value: o,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(o, p) : o.__proto__ = p);
            }(m, l), f(m, [
                {
                    key: 'componentWillReceiveProps',
                    value: function (o) {
                        o.active && !this.props.active && (0, i.confetti)(this.container, o.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function (o) {
                        this.container = o;
                    }
                },
                {
                    key: 'render',
                    value: function () {
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
}), b.register('.....', function (c, d) {
    Object.defineProperty(c.exports, '__esModule', { value: !0 }), c.exports.confetti = function (e) {
        var f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, g = Object.assign({}, _l, f), h = g.elementCount, i = g.colors, j = g.width, k = g.height, l = g.angle, m = g.spread, n = g.startVelocity, o = g.decay, p = g.duration, q = g.random, r = _e(e, h, i, j, k), s = r.map(function (t) {
                return {
                    element: t,
                    physics: _f(l, m, n, q)
                };
            });
        return _k(e, s, o, p);
    };
    function _e(f, g, h, i, j) {
        return Array.from({ length: g }).map(function (k, l) {
            var m = document.createElement('div'), n = h[l % h.length];
            return m.style['background-color'] = n, m.style.width = i, m.style.height = j, m.style.position = 'absolute', m.style.willChange = 'transform, opacity', f.appendChild(m), m;
        });
    }
    function _f(g, h, i, j) {
        var _k = g * (Math.PI / 180), _l = h * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * j(),
            wobbleSpeed: 0.1 + 0.1 * j(),
            velocity: 0.5 * i + j() * i,
            angle2D: -_k + (0.5 * _l - j() * _l),
            angle3D: -Math.PI / 4 + j() * (Math.PI / 2),
            tiltAngle: j() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * j()
        };
    }
    function i(j, k, l, m) {
        var n = void 0;
        return new Promise(function (o) {
            requestAnimationFrame(function i(p) {
                i || (i = p);
                var q = i === p ? 0 : (p - i) / m;
                k.forEach(function (r) {
                    return function (s, t, u) {
                        s.physics.x += Math.cos(s.physics.angle2D) * s.physics.velocity, s.physics.y += Math.sin(s.physics.angle2D) * s.physics.velocity, s.physics.z += Math.sin(s.physics.angle3D) * s.physics.velocity, s.physics.wobble += s.physics.wobbleSpeed, s.physics.velocity *= u, s.physics.y += 3, s.physics.tiltAngle += s.physics.tiltAngleSpeed;
                        var v = s.physics, w = v.x, x = v.y, y = v.tiltAngle, z = v.wobble, A = 'translate3d(' + (w + 10 * Math.cos(z)) + 'px, ' + (x + 10 * Math.sin(z)) + 'px, 0) rotate3d(1, 1, 1, ' + y + 'rad)';
                        s.element.style.transform = A, s.element.style.opacity = 1 - t;
                    }(r, q, l);
                }), p - i < m ? requestAnimationFrame(i) : (k.forEach(function (r) {
                    if (r.element.parentNode === j)
                        return j.removeChild(r.element);
                }), o());
            });
        });
    }
    var k = {
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