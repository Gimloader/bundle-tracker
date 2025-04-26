function a(a, b, c, u) {
    Object.defineProperty(a, b, {
        get: c,
        set: u,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('b+MXt', function(b, u) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return r;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('h99Nu'),
        h = c('lmfrI'),
        i = c('gSUVO'),
        j = c('FnxQ90'),
        k = c('wqUlZ'),
        l = c('C6djv'),
        m = c('jpzYQ'),
        n = c('xivN+');
    let o, p;
    var q;
    (q = p || (p = {})).recipeSelection = 'recipeSelection', q.itemPreview = 'itemPreview';
    var r = a => {
        const [s, t] = f.useState(p.recipeSelection), [u, v] = f.useState(null), w = a => {
            v(a), t(p.itemPreview);
        }, x = () => {
            t(p.recipeSelection);
        };
        f.useEffect(() => {
            a.status === j.CraftingTableStatus.availableForCollection && x();
        }, [a.status]);
        return (0, e.jsx)(s, {
            style: {
                background: (0, n.CraftingTableDeviceUIBackgroundColor)(a.style)
            },
            children: (() => {
                if (a.status === j.CraftingTableStatus.idle)
                    switch (s) {
                        case p.recipeSelection:
                            return (0, e.jsx)(m.default, {
                                setToRecipePreviewScreen: w,
                                style: a.style,
                                group: a.tableGroup
                            }, 'recipe-selection-screen');
                        case p.itemPreview:
                            return (0, e.jsx)(l.default, {
                                craft: a.craft,
                                selectedRecipeId: u,
                                style: a.style,
                                backToRecipeSelectionScreen: x
                            }, 'recipe-preview-screen');
                        default:
                            return null;
                    }
                return (0, e.jsx)(k.default, {
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
    const s = g.default.div.attrs({
        className: 'maxAll flex-column vc scroll-y'
    })(o || (o = (a => a)`
  backdrop-filter: blur(5px);
  color: ${ 0 };
  padding: 25px;
  font-family: ${ 0 };
  text-transform: uppercase;
`), h.default.White, i.Fonts.FugazOne);
}), c.register('FnxQ90', function(b, c) {
    let d;
    var e;
    a(b.exports, 'CraftingTableStatus', function() {
        return d;
    }), (e = d || (d = {})).idle = 'idle', e.crafting = 'crafting', e.availableForCollection = 'availableForCollection';
}), c.register('wqUlZ', function(b, B) {
    a(b.exports, 'default', function() {
        return y;
    });
    var d = c('8kSQZ'),
        e = c('FgarE'),
        f = c('b9Bct'),
        g = c('Vlfxs'),
        h = c('uPP4W'),
        i = c('h99Nu'),
        j = c('PjB0f'),
        k = c('am7L5'),
        l = c('PUlKf'),
        m = c('0x6bL'),
        n = c('2XxG10'),
        o = c('FnxQ90'),
        p = c('wktBO'),
        q = c('/vOZQ'),
        r = c('c72TK'),
        s = c('v2cUN0');
    let t, u, v, w, x = a => a;
    var y = (0, g.observer)(a => {
        const z = h.useMemo(() => (0, m.default)(a.item), [a.item]),
            {
                session: {
                    gameTime: A
                }
            } = (0, k.default)(),
            B = h.useMemo(() => {
                if (a.status === o.CraftingTableStatus.crafting)
                    return `Currently ${ s.default.preparing(a.style) }...`;
                if (a.useCrafterCollectionAdvantage && a.itemCrafterCharacterId !== (0, l.default)()) {
                    const C = a.itemFinishesCraftingAt + 1000 * n.default.secondsAdvantage - A;
                    if (C > 0) {
                        const D = Math.ceil(C / 1000);
                        return `Collect in ${ D } ${ (0, j.plural)('second', D) }`;
                    }
                }
                return 'Ready to collect';
            }, [
                a.status,
                A,
                a.useCrafterCollectionAdvantage,
                a.itemFinishesCraftingAt,
                a.itemCrafterCharacterId
            ]);
        return z ? (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(A, {
                    src: z.previewImage
                }),
                (0, d.jsx)(B, {
                    children: (0, p.default)(z.id, a.itemAmount)
                }),
                (0, d.jsxs)(z, {
                    children: [
                        (0, d.jsx)(C, {
                            children: B
                        }),
                        (0, d.jsxs)(e.AnimatePresence, {
                            mode: 'wait',
                            children: [
                                a.status === o.CraftingTableStatus.crafting ? (0, d.jsx)(r.default, {
                                    itemFinishesCraftingAt: a.itemFinishesCraftingAt,
                                    craftingDurationMs: a.craftingDurationMs
                                }, 'craft-countdown') : null,
                                a.status === o.CraftingTableStatus.availableForCollection ? (0, d.jsx)(q.default, {
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
    const z = (0, i.default)(f.motion.div).attrs({
            className: 'maxWidth flex-column flex-center',
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            }
        })(t || (t = x``)),
        A = i.default.img(u || (u = x`
  height: 82px;
`)),
        B = i.default.div(v || (v = x`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`)),
        C = i.default.div(w || (w = x`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 8px;
`));
}), c.register('2XxG10', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        secondsAdvantage: 5
    };
}), c.register('wktBO', function(b, w) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('bBQb9');
    var f = (a, b) => {
        let g = (0, e.ItemName)(a) || 'Item';
        return b > 1 && (g += ` (${ (0, d.numberWithCommas)(b) })`), g;
    };
}), c.register('/vOZQ', function(w, x) {
    a(w.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('Dog9Y'),
        g = c('h99Nu'),
        h = c('gSUVO'),
        i = c('uIVkr'),
        j = c('PjB0f'),
        k = c('wiooy2'),
        l = c('b9Bct'),
        m = c('tYqUt'),
        n = c('Vlfxs'),
        o = c('am7L5'),
        p = c('PUlKf'),
        q = c('2XxG10');
    let r, s, t = a => a;
    var u = (0, n.observer)(a => {
        const [, v] = e.useReducer(a => a + 1, 0), [w, x] = e.useState(!1), {
            session: {
                gameTime: y
            }
        } = (0, o.default)();
        e.useEffect(() => {
            x(!0);
        }, []), (0, i.useIntervalWhen)(v, 33, !!a.itemDisposalMs);
        const z = e.useMemo(() => {
                if (!a.useCrafterCollectionAdvantage)
                    return !1;
                if (a.itemCrafterCharacterId !== (0, p.default)()) {
                    const A = a.itemFinishesCraftingAt + 1000 * q.default.secondsAdvantage;
                    return y < A;
                }
                return !1;
            }, [
                a.useCrafterCollectionAdvantage,
                y,
                a.itemFinishesCraftingAt,
                a.itemCrafterCharacterId
            ]),
            A = Math.max(1, (() => {
                const B = Math.max(a.itemDisposalAt - (0, m.GetServerGameTimeWithCompensation)(), 0),
                    C = Math.ceil(B / 1000);
                return isNaN(C) ? 0 : C;
            })());
        return (0, d.jsxs)(v, {
            children: [
                (0, d.jsx)(b(k), {
                    config: x,
                    active: w
                }),
                (0, d.jsx)(f.default, {
                    block: !0,
                    type: 'success',
                    disabled: z,
                    style: {
                        width: '80%'
                    },
                    onClick: () => {
                        a.collect(), a.close();
                    },
                    ariaLabel: 'Collect',
                    children: (0, d.jsx)('span', {
                        style: {
                            textTransform: 'uppercase'
                        },
                        children: 'Collect'
                    })
                }),
                a.itemDisposalMs ? (0, d.jsxs)(w, {
                    children: [
                        'Goes bad in ',
                        A,
                        ' ',
                        (0, j.plural)('second', A)
                    ]
                }) : null
            ]
        });
    });
    const v = (0, g.default)(l.motion.div).attrs({
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
        })(r || (r = t`
  margin-top: 25px;
`)),
        w = g.default.div(s || (s = t`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-family: ${ 0 };
  font-weight: ${ 0 };
  text-transform: none;
`), h.Fonts.ProductSans, h.FontWeights.Bold),
        x = {
            angle: 90,
            spread: 55,
            elementCount: 50,
            startVelocity: 30,
            decay: 0.95
        };
}), c.register('wiooy2', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var d, e = function() {
            function f(f, b) {
                for (var g = 0; g < b.length; g++) {
                    var h = b[g];
                    h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(f, h.key, h);
                }
            }
            return function(b, c, d) {
                return c && f(b.prototype, c), d && f(b, d), b;
            };
        }(),
        f = c('uPP4W'),
        g = (d = f) && d.__esModule ? d : {
            default: d
        },
        h = c('alDvw');
    var i = {
            position: 'relative'
        },
        j = function(a) {
            function k(a) {
                ! function(a, k) {
                    if (!(a instanceof k))
                        throw new TypeError('Cannot call a class as a function');
                }(this, k);
                var l = function(a, k) {
                    if (!a)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !k || 'object' != typeof k && 'function' != typeof k ? a : k;
                }(this, (k.__proto__ || Object.getPrototypeOf(k)).call(this, a));
                return l.setRef = l.setRef.bind(l), l;
            }
            return function(a, k) {
                if ('function' != typeof k && null !== k)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof k);
                a.prototype = Object.create(k && k.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), k && (Object.setPrototypeOf ? Object.setPrototypeOf(a, k) : a.__proto__ = k);
            }(k, a), e(k, [{
                    key: 'componentWillReceiveProps',
                    value: function(a) {
                        a.active && !this.props.active && (0, h.confetti)(this.container, a.config);
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
                        return g.default.createElement('div', {
                            className: this.props.className,
                            style: i,
                            ref: this.setRef
                        });
                    }
                }
            ]), k;
        }(f.Component);
    a.exports.default = j;
}), c.register('alDvw', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.confetti = function(a) {
        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            e = Object.assign({}, g, d),
            f = e.elementCount,
            g = e.colors,
            h = e.width,
            i = e.height,
            j = e.angle,
            k = e.spread,
            l = e.startVelocity,
            m = e.decay,
            n = e.duration,
            o = e.random,
            p = c(a, f, g, h, i),
            q = p.map(function(a) {
                return {
                    element: a,
                    physics: e(j, k, l, o)
                };
            });
        return f(a, q, m, n);
    };

    function d(a, b, d, e, f) {
        return Array.from({
            length: b
        }).map(function(b, g) {
            var e = document.createElement('div'),
                f = d[g % d.length];
            return e.style['background-color'] = f, e.style.width = e, e.style.height = f, e.style.position = 'absolute', e.style.willChange = 'transform, opacity', a.appendChild(e), e;
        });
    }

    function e(a, b, d, e) {
        var f = a * (Math.PI / 180),
            g = b * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * e(),
            wobbleSpeed: 0.1 + 0.1 * e(),
            velocity: 0.5 * d + e() * d,
            angle2D: -f + (0.5 * g - e() * g),
            angle3D: -Math.PI / 4 + e() * (Math.PI / 2),
            tiltAngle: e() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * e()
        };
    }

    function f(a, b, d, e) {
        var g = void 0;
        return new Promise(function(k) {
            requestAnimationFrame(function l(m) {
                g || (g = m);
                var h = g === m ? 0 : (m - g) / e;
                b.forEach(function(a) {
                    return function(a, b, d) {
                        a.physics.x += Math.cos(a.physics.angle2D) * a.physics.velocity, a.physics.y += Math.sin(a.physics.angle2D) * a.physics.velocity, a.physics.z += Math.sin(a.physics.angle3D) * a.physics.velocity, a.physics.wobble += a.physics.wobbleSpeed, a.physics.velocity *= d, a.physics.y += 3, a.physics.tiltAngle += a.physics.tiltAngleSpeed;
                        var i = a.physics,
                            j = i.x,
                            k = i.y,
                            l = i.tiltAngle,
                            m = i.wobble,
                            n = 'translate3d(' + (j + 10 * Math.cos(m)) + 'px, ' + (k + 10 * Math.sin(m)) + 'px, 0) rotate3d(1, 1, 1, ' + l + 'rad)';
                        a.element.style.transform = n, a.element.style.opacity = 1 - b;
                    }(a, h, d);
                }), g - g < e ? requestAnimationFrame(f) : (b.forEach(function(b) {
                    if (b.element.parentNode === a)
                        return a.removeChild(b.element);
                }), g());
            });
        });
    }
    var g = {
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
}), c.register('c72TK', function(b, r) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('0x1Q5'),
        f = c('b9Bct'),
        g = c('uPP4W'),
        h = c('uIVkr'),
        i = c('h99Nu'),
        j = c('PjB0f'),
        k = c('tYqUt');
    let l, m, n = a => a;
    var o = a => {
        const [, p] = g.useReducer(a => a + 1, 0);
        (0, h.useIntervalWhen)(p, 33);
        const q = Math.max(a.itemFinishesCraftingAt - (0, k.GetServerGameTimeWithCompensation)(), 0),
            r = Math.max(100 - q / a.craftingDurationMs * 100, 0);
        if (isNaN(q))
            return null;
        const s = Math.max(1, Math.ceil(q / 1000)),
            t = `Ready in ${ s } ${ (0, j.plural)('second', s) }`;
        return isNaN(r) ? null : (0, d.jsxs)(p, {
            children: [
                (0, d.jsx)(e.default, {
                    percent: r,
                    showInfo: !1,
                    status: 'active'
                }),
                (0, d.jsx)(q, {
                    children: t
                })
            ]
        });
    };
    const p = (0, i.default)(f.motion.div).attrs({
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
        })(l || (l = n`
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
        q = i.default.div(m || (m = n`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1;
`));
}), c.register('v2cUN0', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('RJ/fk'),
        e = c('bavPu0');
    const f = a => a === e.CraftingTableStyle.plant ? 'plant' : a === e.CraftingTableStyle.craft ? 'craft' : 'purchase';
    var g = {
        noItems: a => `No items currently available to ${ f(a) }.`,
        selectItem: a => `Select an item to ${ f(a) }...`,
        availableToCraft: a => `Available To ${ (0, d.CapitalizeFirstLetter)(f(a)) }`,
        instantNote: a => a === e.CraftingTableStyle.store ? 'Available immediately' : a === e.CraftingTableStyle.plant ? 'Grows instantly' : 'Crafts instantly',
        durationNote: a => b => b === e.CraftingTableStyle.store ? `Takes ${ a } to prepare` : b === e.CraftingTableStyle.plant ? `Takes ${ a } to grow` : `Takes ${ a } to craft`,
        expireVerb: a => a === e.CraftingTableStyle.plant ? 'goes bad' : 'expires',
        resource: a => a === e.CraftingTableStyle.store ? 'resource' : 'ingredient',
        preparing: a => a === e.CraftingTableStyle.store ? 'preparing' : a === e.CraftingTableStyle.plant ? 'growing' : 'crafting',
        baseVerb: f
    };
}), c.register('bavPu0', function(b, c) {
    let d;
    var e;
    a(b.exports, 'CraftingTableStyle', function() {
        return d;
    }), (e = d || (d = {})).plant = 'plant', e.craft = 'craft', e.store = 'store';
}), c.register('C6djv', function(b, h) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('8k9IL');
    c('uPP4W');
    var f = c('6df+W0'),
        g = c('L+gnv'),
        h = c('/joq8'),
        i = c('YFce0'),
        j = c('TLGsq'),
        k = c('b9Bct'),
        l = c('h99Nu');
    let m;
    var n = (0, e.observer)(a => {
        const o = (0, f.default)(a.selectedRecipeId);
        return o ? (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(j.default, {
                    recipe: o
                }),
                (0, d.jsxs)(o, {
                    children: [
                        (0, d.jsx)(g.default, {
                            craft: a.craft,
                            recipe: o,
                            goBack: a.backToRecipeSelectionScreen,
                            style: a.style
                        }),
                        (0, d.jsx)(h.default, {
                            recipe: o,
                            style: a.style
                        }),
                        (0, d.jsx)(i.default, {
                            recipe: o,
                            style: a.style
                        })
                    ]
                })
            ]
        }) : null;
    });
    const o = (0, l.default)(k.motion.div).attrs({
        className: 'maxWidth flex-column flex-center',
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    })(m || (m = (a => a)``));
}), c.register('6df+W0', function(b, h) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('7Sbqr');
    var e = a => {
        const f = d.default.world.devices.devices.get(a);
        if (!f)
            return null;
        const g = f.options,
            h = new Map(),
            i = a => g.numberOfIngredients >= a,
            j = (a, f) => {
                const k = h.get(a);
                k ? k.amount += f : h.set(a, {
                    item: a,
                    amount: f
                });
            };
        i(1) && j(g.ingredient1Item, g.ingredient1Amount), i(2) && j(g.ingredient2Item, g.ingredient2Amount), i(3) && j(g.ingredient3Item, g.ingredient3Amount), i(4) && j(g.ingredient4Item, g.ingredient4Amount), i(5) && j(g.ingredient5Item, g.ingredient5Amount);
        return {
            id: a,
            itemId: g.item,
            itemAmount: g.itemAmount,
            ingredients: Array.from(h.values()),
            timeToCraftMs: g.timeToCraftMs,
            timeToDisposeMs: g.itemDisposes ? g.disposeItemAfterMs : 0
        };
    };
}), c.register('L+gnv', function(b, q) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('Vlfxs');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('gSUVO'),
        h = c('Dog9Y'),
        i = c('WcvSs'),
        j = c('RJ/fk'),
        k = c('v2cUN0');
    let l, m, n = a => a;
    var o = (0, e.observer)(a => (0, d.jsxs)(p, {
        children: [
            (0, d.jsx)(h.default, {
                type: 'success',
                size: 'small',
                style: {
                    width: '75%'
                },
                block: !0,
                disabled: !(0, i.default)(a.recipe),
                onClick: () => {
                    a.craft(a.recipe.id);
                },
                ariaLabel: (0, j.CapitalizeFirstLetter)(k.default.baseVerb(a.style)),
                children: (0, d.jsx)('span', {
                    style: {
                        textTransform: 'uppercase'
                    },
                    children: (0, j.CapitalizeFirstLetter)(k.default.baseVerb(a.style))
                })
            }),
            (0, d.jsx)(q, {
                onClick: a.goBack,
                children: '...or go back'
            })
        ]
    }));
    const p = f.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(l || (l = n`
  margin-top: 15px;
`)),
        q = f.default.div(m || (m = n`
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
`), g.FontWeights.Bold, g.Fonts.ProductSans);
}), c.register('WcvSs', function(b, q) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('7Sbqr');
    var e = a => !a.ingredients.find(a => {
        if (!a.item)
            return !1;
        const f = d.default.me.inventory.slots.get(a.item);
        return !f || f.amount < a.amount;
    });
}), c.register('/joq8', function(b, q) {
    a(b.exports, 'Container', function() {
        return n;
    }), a(b.exports, 'Label', function() {
        return o;
    }), a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('VRfK5'),
        g = c('RJ/fk'),
        h = c('v2cUN0'),
        i = c('PjB0f');
    let j, k, l = a => a;
    var m = a => {
        const n = a.recipe.ingredients.filter(a => a.item && a.amount);
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)(n, {
                children: [
                    (0, d.jsxs)(o, {
                        children: [
                            'Required',
                            ' ',
                            (0, i.plural)((0, g.CapitalizeFirstLetter)(h.default.resource(a.style)), n.length)
                        ]
                    }),
                    n.map((a, n) => (0, d.jsx)(f.default, {
                        itemId: a.item,
                        requiredAmount: a.amount
                    }, `ingredient-${ a.item }-${ n }`))
                ]
            })
        });
    };
    const n = e.default.div.attrs({
            className: 'maxWidth'
        })(j || (j = l`
  margin-top: 30px;
`)),
        o = e.default.div(k || (k = l`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 8px;
`));
}), c.register('VRfK5', function(b, q) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('Vlfxs');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('PjB0f'),
        h = c('bBQb9'),
        i = c('am7L5'),
        j = c('0x6bL');
    let k, l, m = a => a;
    var n = (0, e.observer)(a => {
        var o, p;
        const {
            me: {
                inventory: q
            }
        } = (0, i.default)(), {
            itemId: r,
            requiredAmount: s
        } = t;
        let u = !0;
        const v = (null === (o = q.slots.get(r)) || void 0 === o ? void 0 : o.amount) || 0;
        let w = (0, h.ItemName)(r);
        return v >= s ? w += ` (${ (0, g.numberWithCommas)(s) })` : (u = !1, w += ` (${ (0, g.numberWithCommas)(v) }/${ (0, g.numberWithCommas)(s) })`), (0, d.jsxs)(o, {
            style: {
                background: u ? 'rgba(255,255,255, 0.1)' : 'rgba(198, 40, 40, 0.5)'
            },
            children: [
                (0, d.jsx)('img', {
                    src: null === (p = (0, j.default)(r)) || void 0 === p ? void 0 : p.previewImage,
                    style: {
                        height: 35
                    }
                }),
                (0, d.jsx)(p, {
                    children: w
                })
            ]
        });
    });
    const o = f.default.div.attrs({
            className: 'flex vc'
        })(k || (k = m`
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 4px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`)),
        p = f.default.div(l || (l = m`
  line-height: 1;
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`));
}), c.register('YFce0', function(b, r) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('PjB0f'),
        h = c('/joq8'),
        i = c('v2cUN0'),
        j = c('RJ/fk');
    let k;
    const l = a => {
            const m = a / 60;
            return m >= 1 && a % 60 == 0 ? `${ m } ${ (0, g.plural)('minute', m) }` : `${ a } ${ (0, g.plural)('second', a) }`;
        },
        m = a => (0, d.jsx)(o, {
            children: a.children
        });
    var n = a => {
        const {
            recipe: o,
            style: p
        } = q, r = e.useMemo(() => {
            if (0 === o.timeToCraftMs)
                return i.default.instantNote(p);
            const s = Math.floor(o.timeToCraftMs / 1000);
            return i.default.durationNote(l(s))(p);
        }, [o.timeToCraftMs]), s = e.useMemo(() => {
            if (0 === o.timeToDisposeMs)
                return `Never ${ i.default.expireVerb(p) }`;
            const t = Math.floor(o.timeToDisposeMs / 1000);
            return `${ (0, j.CapitalizeFirstLetter)(i.default.expireVerb(p)) } after ${ l(t) }`;
        }, [o.timeToDisposeMs]);
        return (0, d.jsxs)(h.Container, {
            children: [
                (0, d.jsx)(h.Label, {
                    children: 'Notes'
                }),
                (0, d.jsx)(m, {
                    children: r
                }),
                (0, d.jsx)(m, {
                    children: s
                })
            ]
        });
    };
    const o = f.default.div.attrs({
        className: 'flex vc'
    })(k || (k = (a => a)`
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
}), c.register('TLGsq', function(b, i) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('0x6bL'),
        g = c('wktBO');
    let h, i, j = a => a;
    var k = a => {
        const {
            recipe: l
        } = m;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(l, {
                    src: (0, f.default)(l.itemId).previewImage
                }),
                (0, d.jsx)(m, {
                    children: (0, g.default)(m.recipe.itemId, m.recipe.itemAmount)
                })
            ]
        });
    };
    const l = e.default.img(h || (h = j`
  height: 82px;
`)),
        m = e.default.div(i || (i = j`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`));
}), c.register('jpzYQ', function(b, i) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('Vlfxs');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('gSUVO'),
        h = c('NC3rO'),
        i = c('PxaWz'),
        j = c('b9Bct'),
        k = c('v2cUN0');
    let l, m, n = a => a;
    var o = (0, e.observer)(a => {
        const p = (0, h.default)(a.group);
        return p.length ? (0, d.jsxs)(p, {
            children: [
                (0, d.jsx)(q, {
                    children: k.default.selectItem(a.style)
                }),
                p.map(p => (0, d.jsx)(i.default, {
                    recipeId: p,
                    style: a.style,
                    onSelect: () => a.setToRecipePreviewScreen(p)
                }, `recipe-${ p }`))
            ]
        }) : (0, d.jsx)('div', {
            className: 'maxAll flex-center',
            style: {
                textAlign: 'center'
            },
            children: (0, d.jsx)(q, {
                children: k.default.noItems(a.style)
            })
        });
    });
    const p = (0, f.default)(j.motion.div).attrs({
            className: 'maxWidth flex-column flex-center',
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            }
        })(l || (l = n``)),
        q = f.default.div(m || (m = n`
  font-family: ${ 0 };
  font-weight: ${ 0 };
  text-transform: none;
  margin-bottom: 15px;
  font-size: 22px;
`), g.Fonts.ProductSans, g.FontWeights.Bold);
}), c.register('NC3rO', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('7X8h3'),
        e = c('dAmf5');
    var f = (g = '') => {
        const h = [];
        return (0, e.default)().worldManager.devices.allDevices.filter(g => g.deviceOption.id === d.default.craftingRecipe).forEach(c => {
            const i = c.options;
            c.state.active && i.group === g && (g => {
                if (!g.item || !g.itemAmount)
                    return !1;
                let j = !1;
                for (let k = 1; k <= g.numberOfIngredients; k++)
                    if (g[`ingredient${ k }Item`] && g[`ingredient${ k }Amount`]) {
                        j = !0;
                        break;
                    }
                return !!j;
            })(c.options) && h.push({
                id: c.id,
                y: c.y
            });
        }), h.sort((g, h) => g.y - h.y).map(g => g.id);
    };
}), c.register('PxaWz', function(b, v) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('b9Bct'),
        f = c('uPP4W'),
        g = c('h99Nu'),
        h = c('0x6bL'),
        i = c('WcvSs'),
        j = c('6df+W0'),
        k = c('wktBO'),
        l = c('v2cUN0');
    let m, n, o, p, q, r = a => a;
    var s = a => {
        const t = (0, j.default)(a.recipeId),
            u = f.useMemo(() => (0, h.default)(t.itemId).previewImage, [t.itemId]),
            v = (0, i.default)(t);
        return (0, d.jsxs)(t, {
            onClick: a.onSelect,
            children: [
                (0, d.jsx)(u, {
                    src: u
                }),
                (0, d.jsxs)(v, {
                    children: [
                        (0, d.jsx)(w, {
                            children: (0, k.default)(t.itemId, t.itemAmount)
                        }),
                        (0, d.jsx)(x, {
                            style: {
                                color: v ? '#a5d6a7' : '#ef9a9a'
                            },
                            children: v ? l.default.availableToCraft(a.style) : 'Insufficient Resources'
                        })
                    ]
                })
            ]
        });
    };
    const t = g.default.div.attrs({
            className: 'maxWidth flex vc'
        })(m || (m = r`
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
        u = g.default.img(n || (n = r`
  height: 55px;
`)),
        v = (0, g.default)(e.motion.div).attrs({
            className: 'flex-column'
        })(o || (o = r`
  margin-left: 15px;
  line-height: 1;
`)),
        w = g.default.div(p || (p = r`
  font-size: 20px;
`)),
        x = g.default.div(q || (q = r`
  color: #a5d6a7;
  font-size: 12px;
  margin-top: 6px;
  opacity: 0.8;
`));
}), c.register('xivN+', function(b, i) {
    a(b.exports, 'CraftingTableDeviceUIBackgroundColor', function() {
        return e;
    });
    var d = c('bavPu0');
    const e = a => a === d.CraftingTableStyle.plant ? 'rgba(0,51,0,0.93)' : 'rgba(38,50,56,0.93)';
});