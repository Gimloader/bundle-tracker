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
c.register('q/kb5', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _t;
    });
    var g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('u4s09'),
        j = c('8KqQ+'),
        k = c('Eh2Wh'),
        l = c('P9ORi0'),
        m = c('fa1mb'),
        n = c('g+A0Z'),
        o = c('dqGfi'),
        p = c('3RzrV');
    let q, r;
    var s;
    (s = r || (r = {})).recipeSelection = 'recipeSelection', s.itemPreview = 'itemPreview';
    var _t = a => {
        const [u, v] = h.useState(r.recipeSelection), [w, x] = h.useState(null), y = a => {
            x(a), v(r.itemPreview);
        }, z = () => {
            v(r.recipeSelection);
        };
        h.useEffect(() => {
            a.status === l.CraftingTableStatus.availableForCollection && z();
        }, [a.status]);
        return (0, g.jsx)(_u, {
            style: {
                background: (0, p.CraftingTableDeviceUIBackgroundColor)(a.style)
            },
            children: (() => {
                if (a.status === l.CraftingTableStatus.idle)
                    switch (u) {
                        case r.recipeSelection:
                            return (0, g.jsx)(o.default, {
                                setToRecipePreviewScreen: y,
                                style: a.style,
                                group: a.tableGroup
                            }, 'recipe-selection-screen');
                        case r.itemPreview:
                            return (0, g.jsx)(n.default, {
                                craft: a.craft,
                                selectedRecipeId: w,
                                style: a.style,
                                backToRecipeSelectionScreen: z
                            }, 'recipe-preview-screen');
                        default:
                            return null;
                    }
                return (0, g.jsx)(m.default, {
                    item: a.item,
                    itemAmount: a.itemAmount,
                    status: a.status,
                    style: a.style,
                    craftingDurationMs: a.craftingDurationMs,
                    itemFinishesCraftingAt: a.itemFinishesCraftingAt,
                    itemDisposalMs: a.itemDisposalMs,
                    itemDisposedAt: a.itemDisposedAt,
                    itemCrafterCharacterId: a.itemCrafterCharacterId,
                    useCrafterCollectionAdvantage: a.useCrafterCollectionAdvantage,
                    collect: a.collect,
                    close: a.close
                }, 'crafting-status-screen');
            })()
        });
    };
    const _u = i.default.div.attrs({
        className: 'maxAll flex-column vc scroll-y'
    })(q || (q = (a => a)`
  backdrop-filter: blur(5px);
  color: ${ 0 };
  padding: 25px;
  font-family: ${ 0 };
  text-transform: uppercase;
`), j.default.White, k.Fonts.FugazOne);
}), c.register('P9ORi0', function(d, e) {
    let f;
    var g;
    a(d.exports, 'CraftingTableStatus', function() {
        return f;
    }), (g = f || (f = {})).idle = 'idle', g.crafting = 'crafting', g.availableForCollection = 'availableForCollection';
}), c.register('fa1mb', function(d, e) {
    a(d.exports, 'default', function() {
        return _A;
    });
    var f = c('gRbUn'),
        g = c('TixUC'),
        h = c('9aZ6t'),
        i = c('6jmvl'),
        j = c('O0Kav'),
        k = c('u4s09'),
        l = c('quE27'),
        m = c('K/2xB'),
        n = c('5Fjxs'),
        o = c('256sH'),
        p = c('DhD8i0'),
        q = c('P9ORi0'),
        r = c('OB2Ky0'),
        s = c('Vh5lq'),
        t = c('Ds56g'),
        u = c('45kGo0');
    let v, w, x, y, z = a => a;
    var _A = (0, i.observer)(a => {
        const B = j.useMemo(() => (0, o.default)(a.item), [a.item]),
            {
                session: {
                    gameTime: C
                }
            } = (0, m.default)(),
            D = j.useMemo(() => {
                if (a.status === q.CraftingTableStatus.crafting)
                    return `Currently ${ u.default.preparing(a.style) }...`;
                if (a.useCrafterCollectionAdvantage && a.itemCrafterCharacterId !== (0, n.default)()) {
                    const E = a.itemFinishesCraftingAt + 1000 * p.default.secondsAdvantage - C;
                    if (E > 0) {
                        const F = Math.ceil(E / 1000);
                        return `Collect in ${ F } ${ (0, l.plural)('second', F) }`;
                    }
                }
                return 'Ready to collect';
            }, [
                a.status,
                C,
                a.useCrafterCollectionAdvantage,
                a.itemFinishesCraftingAt,
                a.itemCrafterCharacterId
            ]);
        return B ? (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_C, {
                    src: B.previewImage
                }),
                (0, f.jsx)(_D, {
                    children: (0, r.default)(B.id, a.itemAmount)
                }),
                (0, f.jsxs)(_B, {
                    children: [
                        (0, f.jsx)(_E, {
                            children: D
                        }),
                        (0, f.jsxs)(g.AnimatePresence, {
                            mode: 'wait',
                            children: [
                                a.status === q.CraftingTableStatus.crafting ? (0, f.jsx)(t.default, {
                                    itemFinishesCraftingAt: a.itemFinishesCraftingAt,
                                    craftingDurationMs: a.craftingDurationMs
                                }, 'craft-countdown') : null,
                                a.status === q.CraftingTableStatus.availableForCollection ? (0, f.jsx)(s.default, {
                                    itemFinishesCraftingAt: a.itemFinishesCraftingAt,
                                    itemDisposalMs: a.itemDisposalMs,
                                    itemDisposalAt: a.itemDisposedAt,
                                    collect: a.collect,
                                    itemCrafterCharacterId: a.itemCrafterCharacterId,
                                    useCrafterCollectionAdvantage: a.useCrafterCollectionAdvantage,
                                    close: a.close
                                }, 'craft-collection') : null
                            ]
                        })
                    ]
                })
            ]
        }) : null;
    });
    const _B = (0, k.default)(h.motion.div).attrs({
            className: 'maxWidth flex-column flex-center',
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            }
        })(v || (v = z``)),
        _C = k.default.img(w || (w = z`
  height: 82px;
`)),
        _D = k.default.div(x || (x = z`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`)),
        _E = k.default.div(y || (y = z`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 8px;
`));
}), c.register('DhD8i0', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        secondsAdvantage: 5
    };
}), c.register('OB2Ky0', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('quE27'),
        g = c('G0Kso');
    var _h = (a, d) => {
        let i = (0, g.ItemName)(a) || 'Item';
        return d > 1 && (i += ` (${ (0, f.numberWithCommas)(d) })`), i;
    };
}), c.register('Vh5lq', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('aPZ+w'),
        i = c('u4s09'),
        j = c('Eh2Wh'),
        k = c('/4RRY'),
        l = c('quE27'),
        m = c('9rEO42'),
        n = c('9aZ6t'),
        o = c('w+fxX'),
        p = c('6jmvl'),
        q = c('K/2xB'),
        r = c('5Fjxs'),
        s = c('DhD8i0');
    let t, u, v = a => a;
    var _w = (0, p.observer)(a => {
        const [, x] = g.useReducer(a => a + 1, 0), [y, z] = g.useState(!1), {
            session: {
                gameTime: A
            }
        } = (0, q.default)();
        g.useEffect(() => {
            z(!0);
        }, []), (0, k.useIntervalWhen)(x, 33, !!a.itemDisposalMs);
        const B = g.useMemo(() => {
                if (!a.useCrafterCollectionAdvantage)
                    return !1;
                if (a.itemCrafterCharacterId !== (0, r.default)()) {
                    const C = a.itemFinishesCraftingAt + 1000 * s.default.secondsAdvantage;
                    return A < C;
                }
                return !1;
            }, [
                a.useCrafterCollectionAdvantage,
                A,
                a.itemFinishesCraftingAt,
                a.itemCrafterCharacterId
            ]),
            C = Math.max(1, (() => {
                const D = Math.max(a.itemDisposalAt - (0, o.GetServerGameTimeWithCompensation)(), 0),
                    E = Math.ceil(D / 1000);
                return isNaN(E) ? 0 : E;
            })());
        return (0, f.jsxs)(_x, {
            children: [
                (0, f.jsx)(b(m), {
                    config: _z,
                    active: y
                }),
                (0, f.jsx)(h.default, {
                    block: !0,
                    type: 'success',
                    disabled: B,
                    style: {
                        width: '80%'
                    },
                    onClick: () => {
                        a.collect(), a.close();
                    },
                    ariaLabel: 'Collect',
                    children: (0, f.jsx)('span', {
                        style: {
                            textTransform: 'uppercase'
                        },
                        children: 'Collect'
                    })
                }),
                a.itemDisposalMs ? (0, f.jsxs)(_y, {
                    children: [
                        'Goes bad in ',
                        C,
                        ' ',
                        (0, l.plural)('second', C)
                    ]
                }) : null
            ]
        });
    });
    const _x = (0, i.default)(n.motion.div).attrs({
            className: 'maxWidth flex-center flex-column',
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.25
            }
        })(t || (t = v`
  margin-top: 25px;
`)),
        _y = i.default.div(u || (u = v`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-family: ${ 0 };
  font-weight: ${ 0 };
  text-transform: none;
`), j.Fonts.ProductSans, j.FontWeights.Bold),
        _z = {
            angle: 90,
            spread: 55,
            elementCount: 50,
            startVelocity: 30,
            decay: 0.95
        };
}), c.register('9rEO42', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    });
    var f, g = function() {
            function h(i, j) {
                for (var k = 0; k < j.length; k++) {
                    var l = j[k];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, 'value' in l && (l.writable = !0), Object.defineProperty(i, l.key, l);
                }
            }
            return function(i, j, k) {
                return j && h(i.prototype, j), k && h(i, k), i;
            };
        }(),
        h = c('O0Kav'),
        i = (f = h) && f.__esModule ? f : {
            default: f
        },
        j = c('izSQB0');
    var k = {
            position: 'relative'
        },
        l = function(m) {
            function n(o) {
                ! function(p, q) {
                    if (!(p instanceof q))
                        throw new TypeError('Cannot call a class as a function');
                }(this, n);
                var p = function(q, r) {
                    if (!q)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !r || 'object' != typeof r && 'function' != typeof r ? q : r;
                }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, o));
                return p.setRef = p.setRef.bind(p), p;
            }
            return function(o, p) {
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
            }(n, m), g(n, [{
                    key: 'componentWillReceiveProps',
                    value: function(o) {
                        o.active && !this.props.active && (0, j.confetti)(this.container, o.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(o) {
                        this.container = o;
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return i.default.createElement('div', {
                            className: this.props.className,
                            style: k,
                            ref: this.setRef
                        });
                    }
                }
            ]), n;
        }(h.Component);
    d.exports.default = l;
}), c.register('izSQB0', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.confetti = function(f) {
        var g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            h = Object.assign({}, _m, g),
            i = h.elementCount,
            j = h.colors,
            k = h.width,
            l = h.height,
            m = h.angle,
            n = h.spread,
            o = h.startVelocity,
            p = h.decay,
            q = h.duration,
            r = h.random,
            s = c(f, i, j, k, l),
            t = s.map(function(u) {
                return {
                    element: u,
                    physics: _j(m, n, o, r)
                };
            });
        return _k(f, t, p, q);
    };

    function f(g, h, i, _j, _k) {
        return Array.from({
            length: h
        }).map(function(l, _m) {
            var n = document.createElement('div'),
                o = i[_m % i.length];
            return n.style['background-color'] = o, n.style.width = _j, n.style.height = _k, n.style.position = 'absolute', n.style.willChange = 'transform, opacity', g.appendChild(n), n;
        });
    }

    function g(h, i, j, k) {
        var l = h * (Math.PI / 180),
            m = i * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * k(),
            wobbleSpeed: 0.1 + 0.1 * k(),
            velocity: 0.5 * j + k() * j,
            angle2D: -l + (0.5 * m - k() * m),
            angle3D: -Math.PI / 4 + k() * (Math.PI / 2),
            tiltAngle: k() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * k()
        };
    }

    function h(i, j, k, l) {
        var m = void 0;
        return new Promise(function(n) {
            requestAnimationFrame(function _x(o) {
                m || (m = o);
                var p = m === o ? 0 : (o - m) / l;
                j.forEach(function(q) {
                    return function(r, s, t) {
                        r.physics.x += Math.cos(r.physics.angle2D) * r.physics.velocity, r.physics.y += Math.sin(r.physics.angle2D) * r.physics.velocity, r.physics.z += Math.sin(r.physics.angle3D) * r.physics.velocity, r.physics.wobble += r.physics.wobbleSpeed, r.physics.velocity *= t, r.physics.y += 3, r.physics.tiltAngle += r.physics.tiltAngleSpeed;
                        var u = r.physics,
                            v = u.x,
                            w = u.y,
                            _x = u.tiltAngle,
                            y = u.wobble,
                            z = 'translate3d(' + (v + 10 * Math.cos(y)) + 'px, ' + (w + 10 * Math.sin(y)) + 'px, 0) rotate3d(1, 1, 1, ' + _x + 'rad)';
                        r.element.style.transform = z, r.element.style.opacity = 1 - s;
                    }(q, p, k);
                }), o - m < l ? requestAnimationFrame(_h) : (j.forEach(function(q) {
                    if (q.element.parentNode === i)
                        return i.removeChild(q.element);
                }), n());
            });
        });
    }
    var i = {
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
}), c.register('Ds56g', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('eyhCL'),
        _h = c('9aZ6t'),
        i = c('O0Kav'),
        j = c('/4RRY'),
        k = c('u4s09'),
        l = c('quE27'),
        m = c('w+fxX');
    let n, o, p = a => a;
    var _q = a => {
        const [, r] = i.useReducer(a => a + 1, 0);
        (0, j.useIntervalWhen)(r, 33);
        const s = Math.max(a.itemFinishesCraftingAt - (0, m.GetServerGameTimeWithCompensation)(), 0),
            t = Math.max(100 - s / a.craftingDurationMs * 100, 0);
        if (isNaN(s))
            return null;
        const u = Math.max(1, Math.ceil(s / 1000)),
            v = `Ready in ${ u } ${ (0, l.plural)('second', u) }`;
        return isNaN(t) ? null : (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(g.default, {
                    percent: t,
                    showInfo: !1,
                    status: 'active'
                }),
                (0, f.jsx)(_s, {
                    children: v
                })
            ]
        });
    };
    const _r = (0, k.default)(_h.motion.div).attrs({
            className: 'maxWidth',
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.15
            }
        })(n || (n = p`
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 30px;
  padding-bottom: 32px;
  margin-top: 20px;
  border-radius: 6px;
  .ant-progress-bg {
    height: 22px !important;
    transition: all 0.05s cubic-bezier(0.78, 0.14, 0.15, 0.86) !important;
  }
`)),
        _s = k.default.div(o || (o = p`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1;
`));
}), c.register('45kGo0', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('Q6LQJ'),
        g = c('FqwHz0');
    const h = a => a === g.CraftingTableStyle.plant ? 'plant' : a === g.CraftingTableStyle.craft ? 'craft' : 'purchase';
    var _i = {
        noItems: a => `No items currently available to ${ h(a) }.`,
        selectItem: a => `Select an item to ${ h(a) }...`,
        availableToCraft: a => `Available To ${ (0, f.CapitalizeFirstLetter)(h(a)) }`,
        instantNote: a => a === g.CraftingTableStyle.store ? 'Available immediately' : a === g.CraftingTableStyle.plant ? 'Grows instantly' : 'Crafts instantly',
        durationNote: a => d => d === g.CraftingTableStyle.store ? `Takes ${ a } to prepare` : d === g.CraftingTableStyle.plant ? `Takes ${ a } to grow` : `Takes ${ a } to craft`,
        expireVerb: a => a === g.CraftingTableStyle.plant ? 'goes bad' : 'expires',
        resource: a => a === g.CraftingTableStyle.store ? 'resource' : 'ingredient',
        preparing: a => a === g.CraftingTableStyle.store ? 'preparing' : a === g.CraftingTableStyle.plant ? 'growing' : 'crafting',
        baseVerb: h
    };
}), c.register('FqwHz0', function(d, e) {
    let f;
    var g;
    a(d.exports, 'CraftingTableStyle', function() {
        return f;
    }), (g = f || (f = {})).plant = 'plant', g.craft = 'craft', g.store = 'store';
}), c.register('g+A0Z', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('NU2gN');
    c('O0Kav');
    var h = c('cgeyf0'),
        i = c('13vzf'),
        j = c('Hjbso'),
        k = c('l695x'),
        l = c('c5aSn'),
        m = c('9aZ6t'),
        n = c('u4s09');
    let o;
    var _p = (0, g.observer)(a => {
        const q = (0, h.default)(a.selectedRecipeId);
        return q ? (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(l.default, {
                    recipe: q
                }),
                (0, f.jsxs)(_q, {
                    children: [
                        (0, f.jsx)(i.default, {
                            craft: a.craft,
                            recipe: q,
                            goBack: a.backToRecipeSelectionScreen,
                            style: a.style
                        }),
                        (0, f.jsx)(j.default, {
                            recipe: q,
                            style: a.style
                        }),
                        (0, f.jsx)(k.default, {
                            recipe: q,
                            style: a.style
                        })
                    ]
                })
            ]
        }) : null;
    });
    const _q = (0, n.default)(m.motion.div).attrs({
        className: 'maxWidth flex-column flex-center',
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    })(o || (o = (a => a)``));
}), c.register('cgeyf0', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('fI6of');
    var _g = a => {
        const h = f.default.world.devices.devices.get(a);
        if (!h)
            return null;
        const i = h.options,
            j = new Map(),
            k = a => i.numberOfIngredients >= a,
            l = (a, h) => {
                const m = j.get(a);
                m ? m.amount += h : j.set(a, {
                    item: a,
                    amount: h
                });
            };
        k(1) && l(i.ingredient1Item, i.ingredient1Amount), k(2) && l(i.ingredient2Item, i.ingredient2Amount), k(3) && l(i.ingredient3Item, i.ingredient3Amount), k(4) && l(i.ingredient4Item, i.ingredient4Amount), k(5) && l(i.ingredient5Item, i.ingredient5Amount);
        return {
            id: a,
            itemId: i.item,
            itemAmount: i.itemAmount,
            ingredients: Array.from(j.values()),
            timeToCraftMs: i.timeToCraftMs,
            timeToDisposeMs: i.itemDisposes ? i.disposeItemAfterMs : 0
        };
    };
}), c.register('13vzf', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('6jmvl');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('Eh2Wh'),
        j = c('aPZ+w'),
        k = c('917Ra'),
        l = c('Q6LQJ'),
        m = c('45kGo0');
    let n, o, p = a => a;
    var _q = (0, g.observer)(a => (0, f.jsxs)(_r, {
        children: [
            (0, f.jsx)(j.default, {
                type: 'success',
                size: 'small',
                style: {
                    width: '75%'
                },
                block: !0,
                disabled: !(0, k.default)(a.recipe),
                onClick: () => {
                    a.craft(a.recipe.id);
                },
                ariaLabel: (0, l.CapitalizeFirstLetter)(m.default.baseVerb(a.style)),
                children: (0, f.jsx)('span', {
                    style: {
                        textTransform: 'uppercase'
                    },
                    children: (0, l.CapitalizeFirstLetter)(m.default.baseVerb(a.style))
                })
            }),
            (0, f.jsx)(_s, {
                onClick: a.goBack,
                children: '...or go back'
            })
        ]
    }));
    const _r = h.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(n || (n = p`
  margin-top: 15px;
`)),
        _s = h.default.div(o || (o = p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 6px;
  font-weight: ${ 0 };
  font-family: ${ 0 };
  text-transform: none;
  text-decoration: underline;
  transition: color 0.2s;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`), i.FontWeights.Bold, i.Fonts.ProductSans);
}), c.register('917Ra', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('fI6of');
    var _g = a => !a.ingredients.find(a => {
        if (!a.item)
            return !1;
        const h = f.default.me.inventory.slots.get(a.item);
        return !h || h.amount < a.amount;
    });
}), c.register('Hjbso', function(d, e) {
    a(d.exports, 'Container', function() {
        return _p;
    }), a(d.exports, 'Label', function() {
        return _q;
    }), a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('BbSze'),
        i = c('Q6LQJ'),
        j = c('45kGo0'),
        k = c('quE27');
    let l, m, n = a => a;
    var _o = a => {
        const p = a.recipe.ingredients.filter(a => a.item && a.amount);
        return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)(_p, {
                children: [
                    (0, f.jsxs)(_q, {
                        children: [
                            'Required',
                            ' ',
                            (0, k.plural)((0, i.CapitalizeFirstLetter)(j.default.resource(a.style)), p.length)
                        ]
                    }),
                    p.map((a, p) => (0, f.jsx)(h.default, {
                        itemId: a.item,
                        requiredAmount: a.amount
                    }, `ingredient-${ a.item }-${ p }`))
                ]
            })
        });
    };
    const _p = g.default.div.attrs({
            className: 'maxWidth'
        })(l || (l = n`
  margin-top: 30px;
`)),
        _q = g.default.div(m || (m = n`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 8px;
`));
}), c.register('BbSze', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('6jmvl');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('quE27'),
        j = c('G0Kso'),
        k = c('K/2xB'),
        l = c('256sH');
    let m, n, o = a => a;
    var _p = (0, g.observer)(a => {
        var q, r;
        const {
            me: {
                inventory: s
            }
        } = (0, k.default)(), {
            itemId: t,
            requiredAmount: u
        } = a;
        let v = !0;
        const w = (null === (q = s.slots.get(t)) || void 0 === q ? void 0 : q.amount) || 0;
        let x = (0, j.ItemName)(t);
        return w >= u ? x += ` (${ (0, i.numberWithCommas)(u) })` : (v = !1, x += ` (${ (0, i.numberWithCommas)(w) }/${ (0, i.numberWithCommas)(u) })`), (0, f.jsxs)(_q, {
            style: {
                background: v ? 'rgba(255,255,255, 0.1)' : 'rgba(198, 40, 40, 0.5)'
            },
            children: [
                (0, f.jsx)('img', {
                    src: null === (r = (0, l.default)(t)) || void 0 === r ? void 0 : r.previewImage,
                    style: {
                        height: 35
                    }
                }),
                (0, f.jsx)(_r, {
                    children: x
                })
            ]
        });
    });
    const _q = h.default.div.attrs({
            className: 'flex vc'
        })(m || (m = o`
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 4px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`)),
        _r = h.default.div(n || (n = o`
  line-height: 1;
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`));
}), c.register('l695x', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('quE27'),
        j = c('Hjbso'),
        k = c('45kGo0'),
        l = c('Q6LQJ');
    let m;
    const n = a => {
            const o = a / 60;
            return o >= 1 && a % 60 == 0 ? `${ o } ${ (0, i.plural)('minute', o) }` : `${ a } ${ (0, i.plural)('second', a) }`;
        },
        o = a => (0, f.jsx)(_q, {
            children: a.children
        });
    var _p = a => {
        const {
            recipe: q,
            style: r
        } = a, s = g.useMemo(() => {
            if (0 === q.timeToCraftMs)
                return k.default.instantNote(r);
            const t = Math.floor(q.timeToCraftMs / 1000);
            return k.default.durationNote(n(t))(r);
        }, [q.timeToCraftMs]), t = g.useMemo(() => {
            if (0 === q.timeToDisposeMs)
                return `Never ${ k.default.expireVerb(r) }`;
            const u = Math.floor(q.timeToDisposeMs / 1000);
            return `${ (0, l.CapitalizeFirstLetter)(k.default.expireVerb(r)) } after ${ n(u) }`;
        }, [q.timeToDisposeMs]);
        return (0, f.jsxs)(j.Container, {
            children: [
                (0, f.jsx)(j.Label, {
                    children: 'Notes'
                }),
                (0, f.jsx)(o, {
                    children: s
                }),
                (0, f.jsx)(o, {
                    children: t
                })
            ]
        });
    };
    const _q = h.default.div.attrs({
        className: 'flex vc'
    })(m || (m = (a => a)`
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  border-radius: 4px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`));
}), c.register('c5aSn', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('256sH'),
        i = c('OB2Ky0');
    let j, k, l = a => a;
    var _m = a => {
        const {
            recipe: n
        } = a;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_n, {
                    src: (0, h.default)(n.itemId).previewImage
                }),
                (0, f.jsx)(_o, {
                    children: (0, i.default)(a.recipe.itemId, a.recipe.itemAmount)
                })
            ]
        });
    };
    const _n = g.default.img(j || (j = l`
  height: 82px;
`)),
        _o = g.default.div(k || (k = l`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`));
}), c.register('dqGfi', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('6jmvl');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('Eh2Wh'),
        j = c('xRoGr'),
        k = c('RhdCO'),
        l = c('9aZ6t'),
        m = c('45kGo0');
    let n, o, p = a => a;
    var _q = (0, g.observer)(a => {
        const r = (0, j.default)(a.group);
        return r.length ? (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(_s, {
                    children: m.default.selectItem(a.style)
                }),
                r.map(r => (0, f.jsx)(k.default, {
                    recipeId: r,
                    style: a.style,
                    onSelect: () => a.setToRecipePreviewScreen(r)
                }, `recipe-${ r }`))
            ]
        }) : (0, f.jsx)('div', {
            className: 'maxAll flex-center',
            style: {
                textAlign: 'center'
            },
            children: (0, f.jsx)(_s, {
                children: m.default.noItems(a.style)
            })
        });
    });
    const _r = (0, h.default)(l.motion.div).attrs({
            className: 'maxWidth flex-column flex-center',
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            }
        })(n || (n = p``)),
        _s = h.default.div(o || (o = p`
  font-family: ${ 0 };
  font-weight: ${ 0 };
  text-transform: none;
  margin-bottom: 15px;
  font-size: 22px;
`), i.Fonts.ProductSans, i.FontWeights.Bold);
}), c.register('xRoGr', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('OFuf70'),
        g = c('heTaO');
    var _h = (i = '') => {
        const j = [];
        return (0, g.default)().worldManager.devices.allDevices.filter(i => i.deviceOption.id === f.default.craftingRecipe).forEach(c => {
            const k = c.options;
            c.state.active && k.group === i && (i => {
                if (!i.item || !i.itemAmount)
                    return !1;
                let l = !1;
                for (let m = 1; m <= i.numberOfIngredients; m++)
                    if (i[`ingredient${ m }Item`] && i[`ingredient${ m }Amount`]) {
                        l = !0;
                        break;
                    }
                return !!l;
            })(c.options) && j.push({
                id: c.id,
                y: c.y
            });
        }), j.sort((i, j) => i.y - j.y).map(i => i.id);
    };
}), c.register('RhdCO', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('9aZ6t'),
        h = c('O0Kav'),
        i = c('u4s09'),
        j = c('256sH'),
        k = c('917Ra'),
        l = c('cgeyf0'),
        m = c('OB2Ky0'),
        n = c('45kGo0');
    let o, p, q, r, s, t = a => a;
    var _u = a => {
        const v = (0, l.default)(a.recipeId),
            w = h.useMemo(() => (0, j.default)(v.itemId).previewImage, [v.itemId]),
            x = (0, k.default)(v);
        return (0, f.jsxs)(_v, {
            onClick: a.onSelect,
            children: [
                (0, f.jsx)(_w, {
                    src: w
                }),
                (0, f.jsxs)(_x, {
                    children: [
                        (0, f.jsx)(_y, {
                            children: (0, m.default)(v.itemId, v.itemAmount)
                        }),
                        (0, f.jsx)(_z, {
                            style: {
                                color: x ? '#a5d6a7' : '#ef9a9a'
                            },
                            children: x ? n.default.availableToCraft(a.style) : 'Insufficient Resources'
                        })
                    ]
                })
            ]
        });
    };
    const _v = i.default.div.attrs({
            className: 'maxWidth flex vc'
        })(o || (o = t`
  background: rgba(255, 255, 255, 0.1);
  padding: 25px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: background 0.2s;
  overflow: hidden;
  &:last-of-type {
    margin-bottom: 0px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`)),
        _w = i.default.img(p || (p = t`
  height: 55px;
`)),
        _x = (0, i.default)(g.motion.div).attrs({
            className: 'flex-column'
        })(q || (q = t`
  margin-left: 15px;
  line-height: 1;
`)),
        _y = i.default.div(r || (r = t`
  font-size: 20px;
`)),
        _z = i.default.div(s || (s = t`
  color: #a5d6a7;
  font-size: 12px;
  margin-top: 6px;
  opacity: 0.8;
`));
}), c.register('3RzrV', function(d, e) {
    a(d.exports, 'CraftingTableDeviceUIBackgroundColor', function() {
        return _g;
    });
    var f = c('FqwHz0');
    const _g = a => a === f.CraftingTableStyle.plant ? 'rgba(0,51,0,0.93)' : 'rgba(38,50,56,0.93)';
});