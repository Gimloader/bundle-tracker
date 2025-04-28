function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('u2e7O', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _g(b.exports, 'default', function() {
        return _z;
    });
    var e = a('0hzx+');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('9PNFm'),
        h = a('0HHAH'),
        i = a('FpbFp'),
        j = a('sHRDd'),
        k = a('cvto726'),
        l = a('PVy3b0'),
        m = a('9HSHh'),
        n = a('AX3TM'),
        o = a('GqzrW'),
        p = a('7GvlY'),
        q = a('I1mnb'),
        r = a('b5kvC'),
        s = a('bnNtv'),
        t = a('BXKn9');
    let u, v, w, x, y = _g => _g;
    var _z = _g => {
        const {
            isLoading: A,
            data: B,
            error: C
        } = (0, g.default)(), {
            data: D,
            isLoading: E,
            error: F
        } = (0, n.default)();
        return (0, o.useWillUnmount)(() => {
            (0, g.removeCosmosItemShop)();
        }), A || E ? (0, e.jsx)(h.Centered, {
            className: 'maxAll',
            children: (0, e.jsx)(i.default, {
                style: {
                    color: j.default.White
                }
            })
        }) : C || F ? (0, e.jsx)(h.Centered, {
            className: 'maxAll',
            children: 'There was an error loading The Shop. Please refresh and try again.'
        }) : (0, e.jsx)(q.LimitedWidth, {
            customWidth: 900,
            children: (0, e.jsxs)(_A, {
                children: [
                    (0, e.jsx)(_B, {
                        children: 'Packs'
                    }),
                    (0, e.jsx)(_C, {
                        children: 'Open packs to earn new items that you can use in-game!'
                    }),
                    (0, e.jsx)(_D, {
                        style: {
                            marginTop: 20
                        },
                        children: B.packs.map(A => (0, e.jsx)(p.Pack, {
                            id: A.id,
                            name: A.name,
                            color: A.color,
                            cost: A.currencyCost,
                            redirect: !_g.setToPackScreen,
                            handleClick: () => {
                                (0, s.playPackClickSound)(), _g.setToPackScreen && _g.setToPackScreen(A.id);
                            }
                        }, A.id))
                    }),
                    B.shop.items.length ? (0, e.jsxs)('div', {
                        className: 'maxWidth',
                        style: {
                            marginTop: 40
                        },
                        children: [
                            (0, e.jsxs)('div', {
                                className: 'maxWidth flex between vc',
                                children: [
                                    (0, e.jsx)(_B, {
                                        children: 'Items'
                                    }),
                                    (0, e.jsx)(t.default, {
                                        serverNowTime: B.shop.now,
                                        shopRefreshTime: B.shop.endUnix
                                    })
                                ]
                            }),
                            (0, e.jsxs)(_C, {
                                children: [
                                    'Purchase new items to use in-game!',
                                    (0, e.jsx)('br', {}),
                                    'Make sure to get the items you want before the shop refreshes!'
                                ]
                            }),
                            (0, e.jsx)('div', {
                                className: 'maxWidth',
                                style: {
                                    marginTop: 20
                                },
                                children: (0, e.jsx)(k.default, {
                                    direction: 'vertical',
                                    size: 20,
                                    className: 'maxWidth',
                                    children: B.shop.items.map(A => (0, e.jsx)(l.default, {
                                        id: A.cosmetic.id,
                                        name: A.cosmetic.name,
                                        image: (0, m.default)({
                                            id: A.cosmetic.id,
                                            type: A.cosmetic.type
                                        }),
                                        description: A.cosmetic.description,
                                        type: A.cosmetic.type,
                                        rarity: A.cosmetic.rarity,
                                        cost: A.currencyCost,
                                        owned: A.owned,
                                        tag: A.tag,
                                        style: A.cosmetic.style,
                                        currentCurrency: D.currency,
                                        onCosmeticSelectionChanged: _g.onCosmeticSelectionChanged,
                                        blockCharacterPreview: _g.blockCharacterPreview
                                    }, A.cosmetic.id + '-item'))
                                })
                            })
                        ]
                    }) : null
                ]
            })
        });
    };
    const _A = f.default.div.attrs({
            className: 'flex-column'
        })(u || (u = y``)),
        _B = f.default.div(v || (v = y`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 32px;
`), r.Fonts.FugazOne),
        _C = f.default.div(w || (w = y`
  font-family: ${ 0 };
  font-size: 16px;
  margin-top: -2px;
  color: rgba(255, 255, 255, 0.9);
`), r.Fonts.SFPro),
        _D = f.default.div(x || (x = y`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 27px;
  justify-content: center;
`));
}), a.register('9PNFm', function(b, c) {
    _g(b.exports, 'removeCosmosItemShop', function() {
        return _h;
    }), _g(b.exports, 'refetchCosmosItemShop', function() {
        return _i;
    }), _g(b.exports, 'default', function() {
        return _j;
    });
    var d = a('UapK50'),
        e = a('ACpZs'),
        f = a('PMl60');
    const g = ['cosmos-item-shop'],
        _h = () => {
            e.default.removeQueries(g);
        },
        _i = () => e.default.refetchQueries(g);
    var _j = () => (0, d.useQuery)(g, () => (0, f.requestAsPromise)({
        url: '/api/cosmos/shop'
    }));
}), a.register('PVy3b0', function(b, c) {
    _g(b.exports, 'BORDER_RADIUS', function() {
        return _s;
    }), _g(b.exports, 'Container', function() {
        return _u;
    }), _g(b.exports, 'PreviewArea', function() {
        return _v;
    }), _g(b.exports, 'PreviewContent', function() {
        return _w;
    }), _g(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('7UQCN0'),
        h = a('RxgVI'),
        i = a('PMl60'),
        j = a('bnNtv'),
        k = a('HfkRh0'),
        l = a('54XAm'),
        m = a('b5kvC'),
        n = a('iEovJ');
    let o, p, q, r = _g => _g;
    const _s = 6;
    var _t = _g => {
        const [u, v, w] = (0, i.useBoolean)(!1), [x, y, z] = (0, i.useBoolean)(!1), A = e.useMemo(() => _g.type === h.CosmeticType.sticker ? 30 : 10, [_g.type]);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_u, {
                    onMouseEnter: y,
                    onMouseLeave: z,
                    onClick: () => {
                        (0, j.playClickSound)(), v();
                    },
                    children: [
                        (0, d.jsx)(_v, {
                            children: (0, d.jsx)(_w, {
                                style: {
                                    transform: `scale(${ x ? 1.1 : 1 })`
                                },
                                children: (0, d.jsx)(k.default, {
                                    image: _g.image,
                                    background: (0, l.rarityToBackground)(_g.rarity),
                                    padding: A
                                })
                            })
                        }),
                        (0, d.jsx)(g.default, {
                            name: _g.name,
                            type: _g.type,
                            rarity: _g.rarity,
                            owned: _g.owned,
                            cost: _g.cost,
                            tag: _g.tag
                        })
                    ]
                }),
                (0, d.jsx)(n.default, {
                    open: u,
                    close: w,
                    ..._g
                })
            ]
        });
    };
    const _u = f.default.div.attrs({
            className: 'maxWidth medium-shadow'
        })(o || (o = r`
  border-radius: ${ 0 }px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  border: 3px solid;
  font-family: ${ 0 };
  &:last-child {
    margin-bottom: 0px;
  }
`), _s, m.Fonts.FugazOne),
        _v = f.default.div.attrs({
            className: 'maxWidth'
        })(p || (p = r`
  height: 140px;
  overflow: hidden;
`)),
        _w = f.default.div.attrs({
            className: 'maxAll'
        })(q || (q = r`
  transition: transform 0.25s;
`));
}), a.register('7UQCN0', function(b, c) {
    _g(b.exports, 'Container', function() {
        return _s;
    }), _g(b.exports, 'Content', function() {
        return _t;
    }), _g(b.exports, 'Title', function() {
        return _u;
    }), _g(b.exports, 'Description', function() {
        return _v;
    }), _g(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('PVy3b0'),
        g = a('54XAm'),
        h = a('D50le'),
        i = a('koZ//'),
        j = a('sHRDd');
    let k, l, m, n, o, p, q = _g => _g;
    var _r = _g => (0, d.jsx)(_s, {
        style: {
            background: (0, g.rarityToBackground)(_g.rarity)
        },
        children: (0, d.jsxs)(_t, {
            children: [
                (0, d.jsxs)('div', {
                    className: 'flex-column',
                    style: {
                        alignItems: 'flex-start'
                    },
                    children: [
                        _g.tag ? (0, d.jsx)(_x, {
                            children: _g.tag
                        }) : null,
                        (0, d.jsx)(_u, {
                            children: _g.name
                        }),
                        (0, d.jsx)(_v, {
                            children: _g.owned ? 'Owned' : (0, h.cosmeticTypeName)(_g.type)
                        })
                    ]
                }),
                (0, d.jsx)(_w, {
                    children: _g.owned ? null : (0, d.jsx)(i.default, {
                        amount: _g.cost
                    })
                })
            ]
        })
    });
    const _s = e.default.div(k || (k = q`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  color: ${ 0 };
  text-transform: uppercase;
  border-bottom-left-radius: ${ 0 }px;
  border-bottom-right-radius: ${ 0 }px;
  overflow: hidden;
  line-height: 1;
`), j.default.White, () => f.BORDER_RADIUS, () => f.BORDER_RADIUS),
        _t = e.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(l || (l = q`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 25px;
`)),
        _u = e.default.div(m || (m = q`
  font-size: 24px;
`)),
        _v = e.default.div(n || (n = q`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 6px;
`)),
        _w = e.default.div(o || (o = q`
  margin-left: 10px;
`)),
        _x = e.default.div(p || (p = q`
  background: #00897b;
  padding: 11px;
  border-radius: 7px;
  line-height: 1;
  margin-bottom: 11px;
  font-size: 13px;
  text-transform: uppercase;
`));
}), a.register('HfkRh0', function(b, c) {
    _g(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('8ROMQ0');
    let g, h, i = _g => _g;
    var _j = _g => {
        const [k, l] = (0, f.useInViewRef)();
        return (0, d.jsx)(_k, {
            ref: k,
            style: {
                padding: _g.padding,
                background: _g.background
            },
            children: l ? (0, d.jsx)(_l, {
                draggable: !1,
                src: _g.image
            }) : null
        });
    };
    const _k = e.default.div.attrs({
            className: 'maxAll flex-center'
        })(g || (g = i`
  background: rgb(255, 255, 255);
  overflow: hidden;
`)),
        _l = e.default.img(h || (h = i`
  max-width: 100%;
  max-height: 100%;
`));
}), a.register('8ROMQ0', function(b, c) {
    _g(b.exports, 'useInViewRef', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: [
                0,
                1
            ]
        };

    function _f(_g, h) {
        void 0 === _g && (_g = function() {}), void 0 === h && (h = e);
        var i = h.root,
            j = void 0 === i ? null : i,
            k = h.rootMargin,
            l = h.threshold,
            m = (0, d.useState)(null),
            n = m[0],
            o = m[1],
            p = (0, d.useState)(!1),
            q = p[0],
            r = p[1];
        (0, d.useEffect)(function() {
            if (n) {
                var s = new IntersectionObserver(function(t, u) {
                    t.forEach(function(v) {
                        var w = v.isIntersecting;
                        return r(w);
                    }), _g(t, u);
                }, h);
                return s.observe(n),
                    function() {
                        s.disconnect();
                    };
            }
        }, [
            n,
            _g,
            j,
            k,
            l
        ]);
        var s = (0, d.useCallback)(function(t) {
            o(t);
        }, []);
        return [
            s,
            q
        ];
    }
}), a.register('iEovJ', function(b, c) {
    _f(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('OzXoU'),
        g = a('9HSHh'),
        h = a('koZ//'),
        i = a('PMl60'),
        j = a('07pQo'),
        k = a('2Xvuf'),
        l = a('9PNFm'),
        m = a('AX3TM'),
        n = a('Pq0g9');
    var _o = _f => {
        const [p, q] = e.useState(!1), [r, s] = e.useState(!1), {
            id: t,
            name: u,
            rarity: v,
            type: w,
            description: x,
            style: y
        } = _f, z = _f.owned || _f.currentCurrency < _f.cost, A = () => {
            z || p || (q(!0), (0, i.request)({
                url: '/api/cosmos/purchase-item',
                data: {
                    cosmeticId: _f.id
                },
                success: () => {
                    (0, n.AnalyticsTrackEvent)({
                        event: 'cosmetic_purchased',
                        properties: {
                            id: t,
                            name: u,
                            type: w
                        }
                    }), (0, j.playSound)({
                        path: (0, k.default)('cosmos/cosmeticPurchased.mp3'),
                        volume: 0.6
                    }), (0, m.invalidateCosmosBasics)(), (0, l.refetchCosmosItemShop)(), s(!0);
                },
                error: p => {
                    (0, i.throwMessageError)({
                        e: p,
                        default: {
                            title: 'Error purchasing item.',
                            content: 'Please try again later.'
                        }
                    }), _f.close();
                }
            }));
        };
        return (0, d.jsx)(f.default, {
            open: _f.open,
            close: _f.close,
            id: t,
            name: u,
            image: (0, g.default)({
                id: t,
                type: w
            }),
            rarity: v,
            type: w,
            description: x,
            style: y,
            purchased: r,
            callToAction: () => ({
                text: _f.owned ? 'Owned' : (0, d.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        lineHeight: 1,
                        padding: '2px 0px'
                    },
                    children: [
                        (0, d.jsx)('div', {
                            style: {
                                marginTop: 2
                            },
                            children: 'Purchase'
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                margin: '0px 7px'
                            },
                            children: '-'
                        }),
                        (0, d.jsx)(h.default, {
                            amount: _f.cost,
                            size: 16,
                            grayscale: z
                        })
                    ]
                }),
                ariaLabel: _f.owned ? 'Owned' : 'Purchase',
                disabled: z,
                onClick: A
            }),
            blockCharacterPreview: _f.blockCharacterPreview,
            onCosmeticSelectionChanged: _f.onCosmeticSelectionChanged
        });
    };
}), a.register('07pQo', function(b, c) {
    _f(b.exports, 'playSound', function() {
        return _f;
    }), _f(b.exports, 'preloadSound', function() {
        return _h;
    });
    var d = a('6yrsF');
    const e = new Map(),
        _f = _f => {
            const g = Date.now();
            if (!_f.path)
                return null;
            const h = _f.forceCreateNewSound ? void 0 : e.get(_f.path),
                i = h || new(0, d.Howl)({
                    src: _f.path
                });
            if (i.volume(_f.volume), h)
                _f.delay ? setTimeout(() => {
                    i.play();
                }, _f.delay) : i.play();
            else {
                const j = () => {
                    if (e.get(_f.path) || _f.forceCreateNewSound || e.set(_f.path, i), _f.delay) {
                        const k = g + _f.delay,
                            l = Date.now();
                        l > k ? i.play() : setTimeout(() => {
                            i.play();
                        }, k - l);
                    } else
                        i.play();
                };
                'loaded' === i.state() ? j() : i.once('load', j);
            }
            return i;
        },
        g = new Set(),
        _h = _f => {
            const {
                path: i
            } = _f;
            if (e.get(i))
                return;
            if (g.has(i))
                return;
            g.add(i);
            const j = new(0, d.Howl)({
                src: i
            });
            j.once('load', () => {
                g.delete(i), e.set(i, j);
            });
        };
}), a.register('Pq0g9', function(b, c) {
    _f(b.exports, 'AnalyticsTrackEvent', function() {
        return _h;
    });
    var d = a('e7pFf'),
        e = a('PMl60'),
        f = a('Td6aM'),
        g = a('J3ZQI');
    const _h = _f => {
        var i, j, k;
        if ((window.gtag && !(null === (i = _f.blockedSource) || void 0 === i ? void 0 : i.google) && window.gtag('event', _f.event, _f.properties), f.AnalyticsFlags.educatorOnly) && (null === (k = (0, e.getUser)()) || void 0 === k ? void 0 : k.accountType) !== d.default.educator)
            return;
        (null === (j = _f.blockedSource) || void 0 === j ? void 0 : j.posthog) || (0, g.TrackPostHogEvent)({
            event: _f.event,
            properties: _f.properties,
            force: _f.forcePostHog
        });
    };
}), a.register('GqzrW', function(b, c) {
    _f(b.exports, 'useWillUnmount', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f) {
        (0, d.useEffect)(function() {
            return _f;
        }, []);
    }
}), a.register('7GvlY', function(b, c) {
    _f(b.exports, 'Pack', function() {
        return _t;
    }), _f(b.exports, 'PackImage', function() {
        return _y;
    });
    var d = a('0hzx+'),
        e = a('Axq+p'),
        f = a('koZ//'),
        g = a('b5kvC'),
        h = a('PMl60'),
        i = a('LEQ5w'),
        j = a('GT7Vh'),
        k = a('o7BSx'),
        l = a('2HvvA11'),
        m = a('sHRDd');
    let n, o, p, q, r, s = _f => _f;
    const _t = _f => {
            const [u, v, w] = (0, h.useBoolean)(!1), x = (0, i.useMemo)(() => `radial-gradient(circle, ${ (0, j.lighten)(0.25, _f.color) } 0%, ${ _f.color } 100%)`, [
                _f.color,
                u
            ]);
            return (0, d.jsx)(_u, {
                to: _f.redirect ? `/rewards/pack/${ _f.id }` : void 0,
                onClick: _f.handleClick,
                children: (0, d.jsx)(_v, {
                    onMouseEnter: v,
                    onMouseLeave: w,
                    background: x,
                    children: (0, d.jsxs)(_w, {
                        children: [
                            (0, d.jsx)(_y, {
                                imageUrl: (0, k.getPackImage)(_f.id),
                                hovering: u,
                                draggable: !1
                            }),
                            (0, d.jsx)(_x, {
                                children: _f.name
                            }),
                            (0, d.jsx)(f.default, {
                                amount: _f.cost,
                                size: 15
                            })
                        ]
                    })
                })
            });
        },
        _u = (0, e.default)(l.default)(n || (n = s`
  text-decoration: none;
  color: ${ 0 } !important;
`), m.default.White),
        _v = e.default.div.attrs({
            className: 'medium-shadow'
        })(o || (o = s`
  background: ${ 0 };

  border-radius: 8px;
  width: 280px;
  font-family: ${ 0 };
  text-transform: uppercase;
  width: ${ 0 }px;
  position: relative;
  cursor: pointer;
`), _f => _f.background, g.Fonts.FugazOne, () => 280),
        _w = e.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(p || (p = s`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.69) 0%,
    rgba(0, 0, 0, 0.008) 48.8%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 8px;
  padding: 30px;
`)),
        _x = e.default.div(q || (q = s`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 3px;
`)),
        _y = e.default.div(r || (r = s`
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
`), _f => _f.hovering ? 0 : 3, _f => _f.hovering ? 1.02 : 0.98, _f => _f.hovering ? 1.2 : 1, _f => _f.imageUrl);
}), a.register('o7BSx', function(b, c) {
    _f(b.exports, 'getPackImage', function() {
        return _e;
    });
    var d = a('2Xvuf');
    const _e = _f => (0, d.default)('cosmos/packs/' + _f + '.png');
}), a.register('BXKn9', function(b, c) {
    _f(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('VURM9'),
        g = a('Axq+p'),
        h = a('b5kvC'),
        i = a('9PNFm');
    let j;
    const k = (_f, a) => {
            const l = _f % a;
            return [
                Math.floor(_f / a),
                l
            ];
        },
        l = _f => {
            const [m, n] = k(_f, 86400), [o, p] = k(n, 3600), [q, r] = k(p, 60);
            let s = '';
            return m && (s += `${ m }d `), (o || m) && (s += `${ o }h `), s += `${ q }m `, s += `${ r }s`, s;
        };
    var _m = _f => {
        const [n, o] = e.useState(Math.floor(Date.now() / 1000) - _f.serverNowTime), [p, q] = e.useState(-999999);
        e.useEffect(() => {
            o(Math.floor(Date.now() / 1000) - _f.serverNowTime), h();
        }, [_f.serverNowTime]);
        const r = () => {
            const s = _f.shopRefreshTime - (Math.floor(Date.now() / 1000) - n);
            q(s);
        };
        return e.useEffect(() => {
            r();
        }, []), e.useEffect(() => {
            p < 0 && p > -999 && (0, i.refetchCosmosItemShop)();
        }, [p]), (0, f.useIntervalWhen)(() => {
            r();
        }, 1000), p < 0 ? null : (0, d.jsx)(_n, {
            children: l(p)
        });
    };
    const _n = g.default.div(j || (j = (_f => _f)`
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${ 0 };
  color: rgba(255, 255, 255, 0.9);
`), h.Fonts.FugazOne);
}), a.register('VURM9', function(b, c) {
    _f(b.exports, 'useIntervalWhen', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f, g, h, i) {
        void 0 === g && (g = 0), void 0 === h && (h = !0), void 0 === i && (i = !1);
        var j = (0, d.useRef)();

        function k() {
            j.current && j.current();
        }
        (0, d.useEffect)(function() {
            j.current = _f;
        }), (0, d.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (h) {
                    i && _g();
                    var k = window.setInterval(_g, g);
                    return function() {
                        window.clearInterval(k);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            h,
            g
        ]);
    }
}), a.register('FgYUV', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    var d, e = function() {
            function f(g, h) {
                for (var i = 0; i < h.length; i++) {
                    var j = h[i];
                    j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
                }
            }
            return function(f, g, h) {
                return g && b(f.prototype, g), h && b(f, h), f;
            };
        }(),
        f = a('LEQ5w'),
        _g = (d = f) && d.__esModule ? d : {
            default: d
        },
        h = a('V9HIq');
    var i = {
            position: 'relative'
        },
        j = function(k) {
            function l(m) {
                ! function(n, o) {
                    if (!(n instanceof o))
                        throw new TypeError('Cannot call a class as a function');
                }(this, l);
                var n = function(o, p) {
                    if (!o)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !p || 'object' != typeof p && 'function' != typeof p ? o : p;
                }(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, m));
                return n.setRef = n.setRef.bind(n), n;
            }
            return function(l, m) {
                if ('function' != typeof m && null !== m)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof m);
                l.prototype = Object.create(m && m.prototype, {
                    constructor: {
                        value: l,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(l, m) : l.__proto__ = m);
            }(a, k), e(a, [{
                    key: 'componentWillReceiveProps',
                    value: function(l) {
                        l.active && !this.props.active && (0, h.confetti)(this.container, l.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(l) {
                        this.container = l;
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return _g.default.createElement('div', {
                            className: this.props.className,
                            style: i,
                            ref: this.setRef
                        });
                    }
                }
            ]), a;
        }(f.Component);
    b.exports.default = j;
}), a.register('V9HIq', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.confetti = function(d) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            f = Object.assign({}, _k, e),
            g = f.elementCount,
            h = f.colors,
            i = f.width,
            j = f.height,
            k = f.angle,
            l = f.spread,
            m = f.startVelocity,
            n = f.decay,
            o = f.duration,
            p = f.random,
            q = _d(d, g, h, i, j),
            r = q.map(function(s) {
                return {
                    element: s,
                    physics: _h(k, l, m, p)
                };
            });
        return _i(d, r, n, o);
    };

    function _d(e, f, g, _h, _i) {
        return Array.from({
            length: f
        }).map(function(j, _k) {
            var l = document.createElement('div'),
                m = g[_k % g.length];
            return l.style['background-color'] = m, l.style.width = _h, l.style.height = _i, l.style.position = 'absolute', l.style.willChange = 'transform, opacity', e.appendChild(l), l;
        });
    }

    function d(e, f, g, h) {
        var i = e * (Math.PI / 180),
            j = f * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * h(),
            wobbleSpeed: 0.1 + 0.1 * h(),
            velocity: 0.5 * g + h() * g,
            angle2D: -i + (0.5 * j - h() * j),
            angle3D: -Math.PI / 4 + h() * (Math.PI / 2),
            tiltAngle: h() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * h()
        };
    }

    function d(e, f, g, h) {
        var i = void 0;
        return new Promise(function(j) {
            requestAnimationFrame(function _t(k) {
                i || (i = k);
                var l = i === k ? 0 : (k - i) / h;
                f.forEach(function(m) {
                    return function(n, o, p) {
                        n.physics.x += Math.cos(n.physics.angle2D) * n.physics.velocity, n.physics.y += Math.sin(n.physics.angle2D) * n.physics.velocity, n.physics.z += Math.sin(n.physics.angle3D) * n.physics.velocity, n.physics.wobble += n.physics.wobbleSpeed, n.physics.velocity *= p, n.physics.y += 3, n.physics.tiltAngle += n.physics.tiltAngleSpeed;
                        var q = n.physics,
                            r = q.x,
                            s = q.y,
                            _t = q.tiltAngle,
                            u = q.wobble,
                            v = 'translate3d(' + (r + 10 * Math.cos(u)) + 'px, ' + (s + 10 * Math.sin(u)) + 'px, 0) rotate3d(1, 1, 1, ' + _t + 'rad)';
                        n.element.style.transform = v, n.element.style.opacity = 1 - o;
                    }(m, l, g);
                }), k - i < h ? requestAnimationFrame(i) : (f.forEach(function(m) {
                    if (m.element.parentNode === e)
                        return e.removeChild(m.element);
                }), j());
            });
        });
    }
    var d = {
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