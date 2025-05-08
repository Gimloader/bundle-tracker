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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _t;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q, r;
    var s;
    (s = r || (r = {})).recipeSelection = 'recipeSelection', s.itemPreview = 'itemPreview';
    var _t = u => {
        const [v, w] = h.useState(r.recipeSelection), [x, y] = h.useState(null), z = A => {
                y(A), w(r.itemPreview);
            }, A = () => {
                w(r.recipeSelection);
            };
        h.useEffect(() => {
            u.status === l.CraftingTableStatus.availableForCollection && A();
        }, [u.status]);
        return (0, g.jsx)(_u, {
            style: { background: (0, p.CraftingTableDeviceUIBackgroundColor)(u.style) },
            children: (() => {
                if (u.status === l.CraftingTableStatus.idle)
                    switch (v) {
                    case r.recipeSelection:
                        return (0, g.jsx)(o.default, {
                            setToRecipePreviewScreen: z,
                            style: u.style,
                            group: u.tableGroup
                        }, 'recipe-selection-screen');
                    case r.itemPreview:
                        return (0, g.jsx)(n.default, {
                            craft: u.craft,
                            selectedRecipeId: x,
                            style: u.style,
                            backToRecipeSelectionScreen: A
                        }, 'recipe-preview-screen');
                    default:
                        return null;
                    }
                return (0, g.jsx)(m.default, {
                    item: u.item,
                    itemAmount: u.itemAmount,
                    status: u.status,
                    style: u.style,
                    craftingDurationMs: u.craftingDurationMs,
                    itemFinishesCraftingAt: u.itemFinishesCraftingAt,
                    itemDisposalMs: u.itemDisposalMs,
                    itemDisposedAt: u.itemDisposedAt,
                    itemCrafterCharacterId: u.itemCrafterCharacterId,
                    useCrafterCollectionAdvantage: u.useCrafterCollectionAdvantage,
                    collect: u.collect,
                    close: u.close
                }, 'crafting-status-screen');
            })()
        });
    };
    const _u = i.default.div.attrs({ className: 'maxAll flex-column vc scroll-y' })(q || (q = (v => v)`
  backdrop-filter: blur(5px);
  color: ${ 0 };
  padding: 25px;
  font-family: ${ 0 };
  text-transform: uppercase;
`), j.default.White, k.Fonts.FugazOne);
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'CraftingTableStatus', function () {
        return f;
    }), (g = f || (f = {})).idle = 'idle', g.crafting = 'crafting', g.availableForCollection = 'availableForCollection';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _A;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v, w, x, y, z = A => A;
    var _A = (0, i.observer)(B => {
        const C = j.useMemo(() => (0, o.default)(B.item), [B.item]), {
                session: {gameTime: D}
            } = (0, m.default)(), E = j.useMemo(() => {
                if (B.status === q.CraftingTableStatus.crafting)
                    return `Currently ${ u.default.preparing(B.style) }...`;
                if (B.useCrafterCollectionAdvantage && B.itemCrafterCharacterId !== (0, n.default)()) {
                    const F = B.itemFinishesCraftingAt + 1000 * p.default.secondsAdvantage - D;
                    if (F > 0) {
                        const G = Math.ceil(F / 1000);
                        return `Collect in ${ G } ${ (0, l.plural)('second', G) }`;
                    }
                }
                return 'Ready to collect';
            }, [
                B.status,
                D,
                B.useCrafterCollectionAdvantage,
                B.itemFinishesCraftingAt,
                B.itemCrafterCharacterId
            ]);
        return C ? (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_C, { src: C.previewImage }),
                (0, f.jsx)(_D, { children: (0, r.default)(C.id, B.itemAmount) }),
                (0, f.jsxs)(_B, {
                    children: [
                        (0, f.jsx)(_E, { children: E }),
                        (0, f.jsxs)(g.AnimatePresence, {
                            mode: 'wait',
                            children: [
                                B.status === q.CraftingTableStatus.crafting ? (0, f.jsx)(t.default, {
                                    itemFinishesCraftingAt: B.itemFinishesCraftingAt,
                                    craftingDurationMs: B.craftingDurationMs
                                }, 'craft-countdown') : null,
                                B.status === q.CraftingTableStatus.availableForCollection ? (0, f.jsx)(s.default, {
                                    itemFinishesCraftingAt: B.itemFinishesCraftingAt,
                                    itemDisposalMs: B.itemDisposalMs,
                                    itemDisposalAt: B.itemDisposedAt,
                                    collect: B.collect,
                                    itemCrafterCharacterId: B.itemCrafterCharacterId,
                                    useCrafterCollectionAdvantage: B.useCrafterCollectionAdvantage,
                                    close: B.close
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
            initial: { opacity: 0 },
            animate: { opacity: 1 }
        })(v || (v = z``)), _C = k.default.img(w || (w = z`
  height: 82px;
`)), _D = k.default.div(x || (x = z`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`)), _E = k.default.div(y || (y = z`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 8px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = { secondsAdvantage: 5 };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = (i, j) => {
        let k = (0, g.ItemName)(i) || 'Item';
        return j > 1 && (k += ` (${ (0, f.numberWithCommas)(j) })`), k;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _w;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....');
    let t, u, v = w => w;
    var _w = (0, p.observer)(x => {
        const [, y] = g.useReducer(z => z + 1, 0), [z, A] = g.useState(!1), {
                session: {gameTime: B}
            } = (0, q.default)();
        g.useEffect(() => {
            A(!0);
        }, []), (0, k.useIntervalWhen)(y, 33, !!x.itemDisposalMs);
        const C = g.useMemo(() => {
                if (!x.useCrafterCollectionAdvantage)
                    return !1;
                if (x.itemCrafterCharacterId !== (0, r.default)()) {
                    const D = x.itemFinishesCraftingAt + 1000 * s.default.secondsAdvantage;
                    return B < D;
                }
                return !1;
            }, [
                x.useCrafterCollectionAdvantage,
                B,
                x.itemFinishesCraftingAt,
                x.itemCrafterCharacterId
            ]), D = Math.max(1, (() => {
                const E = Math.max(x.itemDisposalAt - (0, o.GetServerGameTimeWithCompensation)(), 0), F = Math.ceil(E / 1000);
                return isNaN(F) ? 0 : F;
            })());
        return (0, f.jsxs)(_x, {
            children: [
                (0, f.jsx)(b(m), {
                    config: _z,
                    active: z
                }),
                (0, f.jsx)(h.default, {
                    block: !0,
                    type: 'success',
                    disabled: C,
                    style: { width: '80%' },
                    onClick: () => {
                        x.collect(), x.close();
                    },
                    ariaLabel: 'Collect',
                    children: (0, f.jsx)('span', {
                        style: { textTransform: 'uppercase' },
                        children: 'Collect'
                    })
                }),
                x.itemDisposalMs ? (0, f.jsxs)(_y, {
                    children: [
                        'Goes bad in ',
                        D,
                        ' ',
                        (0, l.plural)('second', D)
                    ]
                }) : null
            ]
        });
    });
    const _x = (0, i.default)(n.motion.div).attrs({
            className: 'maxWidth flex-center flex-column',
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.25 }
        })(t || (t = v`
  margin-top: 25px;
`)), _y = i.default.div(u || (u = v`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-family: ${ 0 };
  font-weight: ${ 0 };
  text-transform: none;
`), j.Fonts.ProductSans, j.FontWeights.Bold), _z = {
            angle: 90,
            spread: 55,
            elementCount: 50,
            startVelocity: 30,
            decay: 0.95
        };
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 });
    var f, g = function () {
            function h(i, j) {
                for (var k = 0; k < j.length; k++) {
                    var l = j[k];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, 'value' in l && (l.writable = !0), Object.defineProperty(i, l.key, l);
                }
            }
            return function (k, l, m) {
                return l && h(k.prototype, l), m && h(k, m), k;
            };
        }(), h = c('.....'), i = (f = h) && f.__esModule ? f : { default: f }, j = c('.....');
    var k = { position: 'relative' }, l = function (m) {
            function n(o) {
                !function (p, q) {
                    if (!(p instanceof q))
                        throw new TypeError('Cannot call a class as a function');
                }(this, n);
                var p = function (q, r) {
                    if (!q)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !r || 'object' != typeof r && 'function' != typeof r ? q : r;
                }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, o));
                return p.setRef = p.setRef.bind(p), p;
            }
            return function (p, q) {
                if ('function' != typeof q && null !== q)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof q);
                p.prototype = Object.create(q && q.prototype, {
                    constructor: {
                        value: p,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), q && (Object.setPrototypeOf ? Object.setPrototypeOf(p, q) : p.__proto__ = q);
            }(n, m), g(n, [
                {
                    key: 'componentWillReceiveProps',
                    value: function (p) {
                        p.active && !this.props.active && (0, j.confetti)(this.container, p.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function (p) {
                        this.container = p;
                    }
                },
                {
                    key: 'render',
                    value: function () {
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
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.confetti = function (f) {
        var g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, h = Object.assign({}, _m, g), i = h.elementCount, j = h.colors, k = h.width, l = h.height, m = h.angle, n = h.spread, o = h.startVelocity, p = h.decay, q = h.duration, r = h.random, s = c(f, i, j, k, l), t = s.map(function (u) {
                return {
                    element: u,
                    physics: _g(m, n, o, r)
                };
            });
        return _l(f, t, p, q);
    };
    function f(g, h, i, j, k) {
        return Array.from({ length: h }).map(function (l, m) {
            var n = document.createElement('div'), o = i[m % i.length];
            return n.style['background-color'] = o, n.style.width = j, n.style.height = k, n.style.position = 'absolute', n.style.willChange = 'transform, opacity', g.appendChild(n), n;
        });
    }
    function _g(h, i, j, k) {
        var _l = h * (Math.PI / 180), _m = i * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * k(),
            wobbleSpeed: 0.1 + 0.1 * k(),
            velocity: 0.5 * j + k() * j,
            angle2D: -_l + (0.5 * _m - k() * _m),
            angle3D: -Math.PI / 4 + k() * (Math.PI / 2),
            tiltAngle: k() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * k()
        };
    }
    function j(k, l, m, n) {
        var o = void 0;
        return new Promise(function (p) {
            requestAnimationFrame(function s(q) {
                j || (j = q);
                var r = j === q ? 0 : (q - j) / n;
                l.forEach(function (s) {
                    return function (t, u, v) {
                        t.physics.x += Math.cos(t.physics.angle2D) * t.physics.velocity, t.physics.y += Math.sin(t.physics.angle2D) * t.physics.velocity, t.physics.z += Math.sin(t.physics.angle3D) * t.physics.velocity, t.physics.wobble += t.physics.wobbleSpeed, t.physics.velocity *= v, t.physics.y += 3, t.physics.tiltAngle += t.physics.tiltAngleSpeed;
                        var w = t.physics, x = w.x, y = w.y, z = w.tiltAngle, A = w.wobble, B = 'translate3d(' + (x + 10 * Math.cos(A)) + 'px, ' + (y + 10 * Math.sin(A)) + 'px, 0) rotate3d(1, 1, 1, ' + z + 'rad)';
                        t.element.style.transform = B, t.element.style.opacity = 1 - u;
                    }(s, r, m);
                }), q - j < n ? requestAnimationFrame(s) : (l.forEach(function (s) {
                    if (s.element.parentNode === k)
                        return k.removeChild(s.element);
                }), p());
            });
        });
    }
    var l = {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n, o, p = q => q;
    var _q = r => {
        const [, s] = i.useReducer(t => t + 1, 0);
        (0, j.useIntervalWhen)(s, 33);
        const t = Math.max(r.itemFinishesCraftingAt - (0, m.GetServerGameTimeWithCompensation)(), 0), u = Math.max(100 - t / r.craftingDurationMs * 100, 0);
        if (isNaN(t))
            return null;
        const v = Math.max(1, Math.ceil(t / 1000)), w = `Ready in ${ v } ${ (0, l.plural)('second', v) }`;
        return isNaN(u) ? null : (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(g.default, {
                    percent: u,
                    showInfo: !1,
                    status: 'active'
                }),
                (0, f.jsx)(_s, { children: w })
            ]
        });
    };
    const _r = (0, k.default)(h.motion.div).attrs({
            className: 'maxWidth',
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.15 }
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
`)), _s = k.default.div(o || (o = p`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const h = i => i === g.CraftingTableStyle.plant ? 'plant' : i === g.CraftingTableStyle.craft ? 'craft' : 'purchase';
    var _i = {
        noItems: j => `No items currently available to ${ h(j) }.`,
        selectItem: j => `Select an item to ${ h(j) }...`,
        availableToCraft: j => `Available To ${ (0, f.CapitalizeFirstLetter)(h(j)) }`,
        instantNote: j => j === g.CraftingTableStyle.store ? 'Available immediately' : j === g.CraftingTableStyle.plant ? 'Grows instantly' : 'Crafts instantly',
        durationNote: j => k => k === g.CraftingTableStyle.store ? `Takes ${ j } to prepare` : k === g.CraftingTableStyle.plant ? `Takes ${ j } to grow` : `Takes ${ j } to craft`,
        expireVerb: j => j === g.CraftingTableStyle.plant ? 'goes bad' : 'expires',
        resource: j => j === g.CraftingTableStyle.store ? 'resource' : 'ingredient',
        preparing: j => j === g.CraftingTableStyle.store ? 'preparing' : j === g.CraftingTableStyle.plant ? 'growing' : 'crafting',
        baseVerb: h
    };
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'CraftingTableStyle', function () {
        return f;
    }), (g = f || (f = {})).plant = 'plant', g.craft = 'craft', g.store = 'store';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    let o;
    var _p = (0, g.observer)(q => {
        const r = (0, h.default)(q.selectedRecipeId);
        return r ? (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(l.default, { recipe: r }),
                (0, f.jsxs)(_q, {
                    children: [
                        (0, f.jsx)(i.default, {
                            craft: q.craft,
                            recipe: r,
                            goBack: q.backToRecipeSelectionScreen,
                            style: q.style
                        }),
                        (0, f.jsx)(j.default, {
                            recipe: r,
                            style: q.style
                        }),
                        (0, f.jsx)(k.default, {
                            recipe: r,
                            style: q.style
                        })
                    ]
                })
            ]
        }) : null;
    });
    const _q = (0, n.default)(m.motion.div).attrs({
        className: 'maxWidth flex-column flex-center',
        initial: { opacity: 0 },
        animate: { opacity: 1 }
    })(o || (o = (r => r)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const i = f.default.world.devices.devices.get(h);
        if (!i)
            return null;
        const j = i.options, k = new Map(), l = m => j.numberOfIngredients >= m, m = (n, o) => {
                const p = k.get(n);
                p ? p.amount += o : k.set(n, {
                    item: n,
                    amount: o
                });
            };
        l(1) && m(j.ingredient1Item, j.ingredient1Amount), l(2) && m(j.ingredient2Item, j.ingredient2Amount), l(3) && m(j.ingredient3Item, j.ingredient3Amount), l(4) && m(j.ingredient4Item, j.ingredient4Amount), l(5) && m(j.ingredient5Item, j.ingredient5Amount);
        return {
            id: h,
            itemId: j.item,
            itemAmount: j.itemAmount,
            ingredients: Array.from(k.values()),
            timeToCraftMs: j.timeToCraftMs,
            timeToDisposeMs: j.itemDisposes ? j.disposeItemAfterMs : 0
        };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n, o, p = q => q;
    var _q = (0, g.observer)(r => (0, f.jsxs)(_r, {
        children: [
            (0, f.jsx)(j.default, {
                type: 'success',
                size: 'small',
                style: { width: '75%' },
                block: !0,
                disabled: !(0, k.default)(r.recipe),
                onClick: () => {
                    r.craft(r.recipe.id);
                },
                ariaLabel: (0, l.CapitalizeFirstLetter)(m.default.baseVerb(r.style)),
                children: (0, f.jsx)('span', {
                    style: { textTransform: 'uppercase' },
                    children: (0, l.CapitalizeFirstLetter)(m.default.baseVerb(r.style))
                })
            }),
            (0, f.jsx)(_s, {
                onClick: r.goBack,
                children: '...or go back'
            })
        ]
    }));
    const _r = h.default.div.attrs({ className: 'maxWidth flex-center flex-column' })(n || (n = p`
  margin-top: 15px;
`)), _s = h.default.div(o || (o = p`
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => !h.ingredients.find(i => {
        if (!i.item)
            return !1;
        const j = f.default.me.inventory.slots.get(i.item);
        return !j || j.amount < i.amount;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'Container', function () {
        return _p;
    }), a(d.exports, 'Label', function () {
        return _q;
    }), a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l, m, n = o => o;
    var _o = p => {
        const q = p.recipe.ingredients.filter(r => r.item && r.amount);
        return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)(_p, {
                children: [
                    (0, f.jsxs)(_q, {
                        children: [
                            'Required',
                            ' ',
                            (0, k.plural)((0, i.CapitalizeFirstLetter)(j.default.resource(p.style)), q.length)
                        ]
                    }),
                    q.map((r, s) => (0, f.jsx)(h.default, {
                        itemId: r.item,
                        requiredAmount: r.amount
                    }, `ingredient-${ r.item }-${ s }`))
                ]
            })
        });
    };
    const _p = g.default.div.attrs({ className: 'maxWidth' })(l || (l = n`
  margin-top: 30px;
`)), _q = g.default.div(m || (m = n`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 8px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    let m, n, o = p => p;
    var _p = (0, g.observer)(q => {
        var r, s;
        const {
                me: {inventory: t}
            } = (0, k.default)(), {
                itemId: u,
                requiredAmount: v
            } = q;
        let w = !0;
        const x = (null === (r = t.slots.get(u)) || void 0 === r ? void 0 : r.amount) || 0;
        let y = (0, j.ItemName)(u);
        return x >= v ? y += ` (${ (0, i.numberWithCommas)(v) })` : (w = !1, y += ` (${ (0, i.numberWithCommas)(x) }/${ (0, i.numberWithCommas)(v) })`), (0, f.jsxs)(_q, {
            style: { background: w ? 'rgba(255,255,255, 0.1)' : 'rgba(198, 40, 40, 0.5)' },
            children: [
                (0, f.jsx)('img', {
                    src: null === (s = (0, l.default)(u)) || void 0 === s ? void 0 : s.previewImage,
                    style: { height: 35 }
                }),
                (0, f.jsx)(_r, { children: y })
            ]
        });
    });
    const _q = h.default.div.attrs({ className: 'flex vc' })(m || (m = o`
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 4px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`)), _r = h.default.div(n || (n = o`
  line-height: 1;
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    let m;
    const n = o => {
            const p = o / 60;
            return p >= 1 && o % 60 == 0 ? `${ p } ${ (0, i.plural)('minute', p) }` : `${ o } ${ (0, i.plural)('second', o) }`;
        }, o = p => (0, f.jsx)(_q, { children: p.children });
    var _p = q => {
        const {
                recipe: r,
                style: s
            } = q, t = g.useMemo(() => {
                if (0 === r.timeToCraftMs)
                    return k.default.instantNote(s);
                const u = Math.floor(r.timeToCraftMs / 1000);
                return k.default.durationNote(n(u))(s);
            }, [r.timeToCraftMs]), u = g.useMemo(() => {
                if (0 === r.timeToDisposeMs)
                    return `Never ${ k.default.expireVerb(s) }`;
                const v = Math.floor(r.timeToDisposeMs / 1000);
                return `${ (0, l.CapitalizeFirstLetter)(k.default.expireVerb(s)) } after ${ n(v) }`;
            }, [r.timeToDisposeMs]);
        return (0, f.jsxs)(j.Container, {
            children: [
                (0, f.jsx)(j.Label, { children: 'Notes' }),
                (0, f.jsx)(o, { children: t }),
                (0, f.jsx)(o, { children: u })
            ]
        });
    };
    const _q = h.default.div.attrs({ className: 'flex vc' })(m || (m = (r => r)`
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    let j, k, l = m => m;
    var _m = n => {
        const {recipe: o} = n;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_n, { src: (0, h.default)(o.itemId).previewImage }),
                (0, f.jsx)(_o, { children: (0, i.default)(n.recipe.itemId, n.recipe.itemAmount) })
            ]
        });
    };
    const _n = g.default.img(j || (j = l`
  height: 82px;
`)), _o = g.default.div(k || (k = l`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n, o, p = q => q;
    var _q = (0, g.observer)(r => {
        const s = (0, j.default)(r.group);
        return s.length ? (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(_s, { children: m.default.selectItem(r.style) }),
                s.map(t => (0, f.jsx)(k.default, {
                    recipeId: t,
                    style: r.style,
                    onSelect: () => r.setToRecipePreviewScreen(t)
                }, `recipe-${ t }`))
            ]
        }) : (0, f.jsx)('div', {
            className: 'maxAll flex-center',
            style: { textAlign: 'center' },
            children: (0, f.jsx)(_s, { children: m.default.noItems(r.style) })
        });
    });
    const _r = (0, h.default)(l.motion.div).attrs({
            className: 'maxWidth flex-column flex-center',
            initial: { opacity: 0 },
            animate: { opacity: 1 }
        })(n || (n = p``)), _s = h.default.div(o || (o = p`
  font-family: ${ 0 };
  font-weight: ${ 0 };
  text-transform: none;
  margin-bottom: 15px;
  font-size: 22px;
`), i.Fonts.ProductSans, i.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = (i = '') => {
        const j = [];
        return (0, g.default)().worldManager.devices.allDevices.filter(k => k.deviceOption.id === f.default.craftingRecipe).forEach(k => {
            const l = k.options;
            k.state.active && l.group === i && (m => {
                if (!m.item || !m.itemAmount)
                    return !1;
                let n = !1;
                for (let o = 1; o <= m.numberOfIngredients; o++)
                    if (m[`ingredient${ o }Item`] && m[`ingredient${ o }Amount`]) {
                        n = !0;
                        break;
                    }
                return !!n;
            })(k.options) && j.push({
                id: k.id,
                y: k.y
            });
        }), j.sort((k, l) => k.y - l.y).map(k => k.id);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    let o, p, q, r, s, t = u => u;
    var _u = v => {
        const w = (0, l.default)(v.recipeId), x = h.useMemo(() => (0, j.default)(w.itemId).previewImage, [w.itemId]), y = (0, k.default)(w);
        return (0, f.jsxs)(_v, {
            onClick: v.onSelect,
            children: [
                (0, f.jsx)(_w, { src: x }),
                (0, f.jsxs)(_x, {
                    children: [
                        (0, f.jsx)(_y, { children: (0, m.default)(w.itemId, w.itemAmount) }),
                        (0, f.jsx)(_z, {
                            style: { color: y ? '#a5d6a7' : '#ef9a9a' },
                            children: y ? n.default.availableToCraft(v.style) : 'Insufficient Resources'
                        })
                    ]
                })
            ]
        });
    };
    const _v = i.default.div.attrs({ className: 'maxWidth flex vc' })(o || (o = t`
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
`)), _w = i.default.img(p || (p = t`
  height: 55px;
`)), _x = (0, i.default)(g.motion.div).attrs({ className: 'flex-column' })(q || (q = t`
  margin-left: 15px;
  line-height: 1;
`)), _y = i.default.div(r || (r = t`
  font-size: 20px;
`)), _z = i.default.div(s || (s = t`
  color: #a5d6a7;
  font-size: 12px;
  margin-top: 6px;
  opacity: 0.8;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'CraftingTableDeviceUIBackgroundColor', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => h === f.CraftingTableStyle.plant ? 'rgba(0,51,0,0.93)' : 'rgba(38,50,56,0.93)';
});