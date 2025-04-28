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
a.register('dX3Gq', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _D(b.exports, 'default', function() {
        return _r;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('sHRDd'),
        i = a('b5kvC'),
        j = a('xmEhF'),
        k = a('YvRqE'),
        l = a('SV281'),
        m = a('kMlb/'),
        n = a('N3eF9');
    let o, p;
    var q;
    (q = p || (p = {})).recipeSelection = 'recipeSelection', q.itemPreview = 'itemPreview';
    var _r = _D => {
        const [s, t] = f.useState(p.recipeSelection), [u, v] = f.useState(null), w = _D => {
            v(_D), t(p.itemPreview);
        }, x = () => {
            t(p.recipeSelection);
        };
        f.useEffect(() => {
            _D.status === j.CraftingTableStatus.availableForCollection && x();
        }, [_D.status]);
        return (0, e.jsx)(_s, {
            style: {
                background: (0, n.CraftingTableDeviceUIBackgroundColor)(_D.style)
            },
            children: (() => {
                if (_D.status === j.CraftingTableStatus.idle)
                    switch (s) {
                        case p.recipeSelection:
                            return (0, e.jsx)(m.default, {
                                setToRecipePreviewScreen: w,
                                style: _D.style,
                                group: _D.tableGroup
                            }, 'recipe-selection-screen');
                        case p.itemPreview:
                            return (0, e.jsx)(l.default, {
                                craft: _D.craft,
                                selectedRecipeId: u,
                                style: _D.style,
                                backToRecipeSelectionScreen: x
                            }, 'recipe-preview-screen');
                        default:
                            return null;
                    }
                return (0, e.jsx)(k.default, {
                    item: _D.item,
                    itemAmount: _D.itemAmount,
                    status: _D.status,
                    style: _D.style,
                    craftingDurationMs: _D.craftingDurationMs,
                    itemFinishesCraftingAt: _D.itemFinishesCraftingAt,
                    itemDisposalMs: _D.itemDisposalMs,
                    itemDisposedAt: _D.itemDisposedAt,
                    itemCrafterCharacterId: _D.itemCrafterCharacterId,
                    useCrafterCollectionAdvantage: _D.useCrafterCollectionAdvantage,
                    collect: _D.collect,
                    close: _D.close
                }, 'crafting-status-screen');
            })()
        });
    };
    const _s = g.default.div.attrs({
        className: 'maxAll flex-column vc scroll-y'
    })(o || (o = (_D => _D)`
  backdrop-filter: blur(5px);
  color: ${ 0 };
  padding: 25px;
  font-family: ${ 0 };
  text-transform: uppercase;
`), h.default.White, i.Fonts.FugazOne);
}), a.register('xmEhF', function(b, c) {
    let d;
    var e;
    _D(b.exports, 'CraftingTableStatus', function() {
        return d;
    }), (e = d || (d = {})).idle = 'idle', e.crafting = 'crafting', e.availableForCollection = 'availableForCollection';
}), a.register('YvRqE', function(b, c) {
    _D(b.exports, 'default', function() {
        return _y;
    });
    var d = a('0hzx+'),
        e = a('XZe6/'),
        f = a('TwXYL'),
        g = a('2x11J'),
        h = a('LEQ5w'),
        i = a('Axq+p'),
        j = a('PMl60'),
        k = a('bHGrl'),
        l = a('Jfada'),
        m = a('btxlR'),
        n = a('r/9Pw'),
        o = a('xmEhF'),
        p = a('SNA6d'),
        q = a('n2Pl7'),
        r = a('69oH7'),
        s = a('o2gEf');
    let t, u, v, w, x = _D => _D;
    var _y = (0, g.observer)(_D => {
        const z = h.useMemo(() => (0, m.default)(_D.item), [_D.item]),
            {
                session: {
                    gameTime: A
                }
            } = (0, k.default)(),
            B = h.useMemo(() => {
                if (_D.status === o.CraftingTableStatus.crafting)
                    return `Currently ${ s.default.preparing(_D.style) }...`;
                if (_D.useCrafterCollectionAdvantage && _D.itemCrafterCharacterId !== (0, l.default)()) {
                    const C = _D.itemFinishesCraftingAt + 1000 * n.default.secondsAdvantage - A;
                    if (C > 0) {
                        const _D = Math.ceil(C / 1000);
                        return `Collect in ${ _D } ${ (0, j.plural)('second', _D) }`;
                    }
                }
                return 'Ready to collect';
            }, [
                _b.status,
                A,
                _b.useCrafterCollectionAdvantage,
                _b.itemFinishesCraftingAt,
                _b.itemCrafterCharacterId
            ]);
        return z ? (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(_A, {
                    src: z.previewImage
                }),
                (0, d.jsx)(_B, {
                    children: (0, p.default)(z.id, _b.itemAmount)
                }),
                (0, d.jsxs)(_z, {
                    children: [
                        (0, d.jsx)(_C, {
                            children: B
                        }),
                        (0, d.jsxs)(e.AnimatePresence, {
                            mode: 'wait',
                            children: [
                                _b.status === o.CraftingTableStatus.crafting ? (0, d.jsx)(r.default, {
                                    itemFinishesCraftingAt: _b.itemFinishesCraftingAt,
                                    craftingDurationMs: _b.craftingDurationMs
                                }, 'craft-countdown') : null,
                                _b.status === o.CraftingTableStatus.availableForCollection ? (0, d.jsx)(q.default, {
                                    itemFinishesCraftingAt: _b.itemFinishesCraftingAt,
                                    itemDisposalMs: _b.itemDisposalMs,
                                    itemDisposalAt: _b.itemDisposedAt,
                                    collect: _b.collect,
                                    itemCrafterCharacterId: _b.itemCrafterCharacterId,
                                    useCrafterCollectionAdvantage: _b.useCrafterCollectionAdvantage,
                                    close: _b.close
                                }, 'craft-collection') : null
                            ]
                        })
                    ]
                })
            ]
        }) : null;
    });
    const _z = (0, i.default)(f.motion.div).attrs({
            className: 'maxWidth flex-column flex-center',
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            }
        })(t || (t = x``)),
        _A = i.default.img(u || (u = x`
  height: 82px;
`)),
        _B = i.default.div(v || (v = x`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`)),
        _C = i.default.div(w || (w = x`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 8px;
`));
}), a.register('r/9Pw', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        secondsAdvantage: 5
    };
}), a.register('SNA6d', function(b, c) {
    _b(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('ZCz9W');
    var _f = (_b, b) => {
        let g = (0, e.ItemName)(_b) || 'Item';
        return b > 1 && (g += ` (${ (0, d.numberWithCommas)(b) })`), g;
    };
}), a.register('n2Pl7', function(b, c) {
    _b(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('led8j'),
        g = a('Axq+p'),
        h = a('b5kvC'),
        i = a('VURM9'),
        j = a('PMl60'),
        k = a('FgYUV'),
        l = a('TwXYL'),
        m = a('vye/m'),
        n = a('2x11J'),
        o = a('bHGrl'),
        p = a('Jfada'),
        q = a('r/9Pw');
    let r, s, t = _b => _b;
    var _u = (0, n.observer)(_b => {
        const [, v] = e.useReducer(_b => _b + 1, 0), [w, x] = e.useState(!1), {
            session: {
                gameTime: y
            }
        } = (0, o.default)();
        e.useEffect(() => {
            x(!0);
        }, []), (0, i.useIntervalWhen)(v, 33, !!_b.itemDisposalMs);
        const z = e.useMemo(() => {
                if (!_b.useCrafterCollectionAdvantage)
                    return !1;
                if (_b.itemCrafterCharacterId !== (0, p.default)()) {
                    const A = _b.itemFinishesCraftingAt + 1000 * q.default.secondsAdvantage;
                    return y < A;
                }
                return !1;
            }, [
                _b.useCrafterCollectionAdvantage,
                y,
                _b.itemFinishesCraftingAt,
                _b.itemCrafterCharacterId
            ]),
            A = Math.max(1, (() => {
                const B = Math.max(_b.itemDisposalAt - (0, m.GetServerGameTimeWithCompensation)(), 0),
                    C = Math.ceil(B / 1000);
                return isNaN(C) ? 0 : C;
            })());
        return (0, d.jsxs)(_v, {
            children: [
                (0, d.jsx)(_c(k), {
                    config: _x,
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
                        _b.collect(), _b.close();
                    },
                    ariaLabel: 'Collect',
                    children: (0, d.jsx)('span', {
                        style: {
                            textTransform: 'uppercase'
                        },
                        children: 'Collect'
                    })
                }),
                _b.itemDisposalMs ? (0, d.jsxs)(_w, {
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
    const _v = (0, g.default)(l.motion.div).attrs({
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
        _w = g.default.div(s || (s = t`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-family: ${ 0 };
  font-weight: ${ 0 };
  text-transform: none;
`), h.Fonts.ProductSans, h.FontWeights.Bold),
        _x = {
            angle: 90,
            spread: 55,
            elementCount: 50,
            startVelocity: 30,
            decay: 0.95
        };
}), a.register('FgYUV', function(_b, _c) {
    Object.defineProperty(_b.exports, '__esModule', {
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
                return g && _b(f.prototype, g), h && _b(f, h), f;
            };
        }(),
        f = a('LEQ5w'),
        g = (d = f) && d.__esModule ? d : {
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
            }(_c, k), e(_c, [{
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
                        return g.default.createElement('div', {
                            className: this.props.className,
                            style: i,
                            ref: this.setRef
                        });
                    }
                }
            ]), _c;
        }(f.Component);
    _b.exports.default = j;
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
            q = a(d, g, h, i, j),
            r = q.map(function(s) {
                return {
                    element: s,
                    physics: _h(k, l, m, p)
                };
            });
        return _i(d, r, n, o);
    };

    function d(e, f, g, _h, _i) {
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
                }), k - i < h ? requestAnimationFrame(_f) : (f.forEach(function(m) {
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
}), a.register('69oH7', function(b, c) {
    _r(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('8y7vq'),
        _f = a('TwXYL'),
        g = a('LEQ5w'),
        h = a('VURM9'),
        i = a('Axq+p'),
        j = a('PMl60'),
        k = a('vye/m');
    let l, m, n = _r => _r;
    var _o = _r => {
        const [, p] = g.useReducer(_r => _r + 1, 0);
        (0, h.useIntervalWhen)(p, 33);
        const q = Math.max(_r.itemFinishesCraftingAt - (0, k.GetServerGameTimeWithCompensation)(), 0),
            r = Math.max(100 - q / _r.craftingDurationMs * 100, 0);
        if (isNaN(q))
            return null;
        const s = Math.max(1, Math.ceil(q / 1000)),
            t = `Ready in ${ s } ${ (0, j.plural)('second', s) }`;
        return isNaN(r) ? null : (0, d.jsxs)(_p, {
            children: [
                (0, d.jsx)(e.default, {
                    percent: r,
                    showInfo: !1,
                    status: 'active'
                }),
                (0, d.jsx)(_q, {
                    children: t
                })
            ]
        });
    };
    const _p = (0, i.default)(_f.motion.div).attrs({
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
        _q = i.default.div(m || (m = n`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1;
`));
}), a.register('o2gEf', function(b, c) {
    _r(b.exports, 'default', function() {
        return _g;
    });
    var d = a('qVhMZ'),
        e = a('4HzlY');
    const f = _r => _r === e.CraftingTableStyle.plant ? 'plant' : _r === e.CraftingTableStyle.craft ? 'craft' : 'purchase';
    var _g = {
        noItems: _r => `No items currently available to ${ f(_r) }.`,
        selectItem: _r => `Select an item to ${ f(_r) }...`,
        availableToCraft: _r => `Available To ${ (0, d.CapitalizeFirstLetter)(f(_r)) }`,
        instantNote: _r => _r === e.CraftingTableStyle.store ? 'Available immediately' : _r === e.CraftingTableStyle.plant ? 'Grows instantly' : 'Crafts instantly',
        durationNote: _r => b => b === e.CraftingTableStyle.store ? `Takes ${ _r } to prepare` : b === e.CraftingTableStyle.plant ? `Takes ${ _r } to grow` : `Takes ${ _r } to craft`,
        expireVerb: _r => _r === e.CraftingTableStyle.plant ? 'goes bad' : 'expires',
        resource: _r => _r === e.CraftingTableStyle.store ? 'resource' : 'ingredient',
        preparing: _r => _r === e.CraftingTableStyle.store ? 'preparing' : _r === e.CraftingTableStyle.plant ? 'growing' : 'crafting',
        baseVerb: f
    };
}), a.register('4HzlY', function(b, c) {
    let d;
    var e;
    _r(b.exports, 'CraftingTableStyle', function() {
        return d;
    }), (e = d || (d = {})).plant = 'plant', e.craft = 'craft', e.store = 'store';
}), a.register('SV281', function(b, c) {
    _r(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('7up2I');
    a('LEQ5w');
    var f = a('iubht'),
        g = a('q47go'),
        h = a('/SWgn'),
        i = a('xhrqf'),
        j = a('rVhRp'),
        k = a('TwXYL'),
        l = a('Axq+p');
    let m;
    var _n = (0, e.observer)(_r => {
        const o = (0, f.default)(_r.selectedRecipeId);
        return o ? (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(j.default, {
                    recipe: o
                }),
                (0, d.jsxs)(_o, {
                    children: [
                        (0, d.jsx)(g.default, {
                            craft: _r.craft,
                            recipe: o,
                            goBack: _r.backToRecipeSelectionScreen,
                            style: _r.style
                        }),
                        (0, d.jsx)(h.default, {
                            recipe: o,
                            style: _r.style
                        }),
                        (0, d.jsx)(i.default, {
                            recipe: o,
                            style: _r.style
                        })
                    ]
                })
            ]
        }) : null;
    });
    const _o = (0, l.default)(k.motion.div).attrs({
        className: 'maxWidth flex-column flex-center',
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    })(m || (m = (_r => _r)``));
}), a.register('iubht', function(b, c) {
    _r(b.exports, 'default', function() {
        return _e;
    });
    var d = a('iWivW');
    var _e = _r => {
        const f = d.default.world.devices.devices.get(_r);
        if (!f)
            return null;
        const g = f.options,
            h = new Map(),
            i = _r => g.numberOfIngredients >= _r,
            j = (_r, f) => {
                const k = h.get(_r);
                k ? k.amount += f : h.set(_r, {
                    item: _r,
                    amount: f
                });
            };
        i(1) && j(g.ingredient1Item, g.ingredient1Amount), i(2) && j(g.ingredient2Item, g.ingredient2Amount), i(3) && j(g.ingredient3Item, g.ingredient3Amount), i(4) && j(g.ingredient4Item, g.ingredient4Amount), i(5) && j(g.ingredient5Item, g.ingredient5Amount);
        return {
            id: _r,
            itemId: g.item,
            itemAmount: g.itemAmount,
            ingredients: Array.from(h.values()),
            timeToCraftMs: g.timeToCraftMs,
            timeToDisposeMs: g.itemDisposes ? g.disposeItemAfterMs : 0
        };
    };
}), a.register('q47go', function(b, c) {
    _r(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('2x11J');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('b5kvC'),
        h = a('led8j'),
        i = a('dp+oD'),
        j = a('qVhMZ'),
        k = a('o2gEf');
    let l, m, n = _r => _r;
    var _o = (0, e.observer)(_r => (0, d.jsxs)(_p, {
        children: [
            (0, d.jsx)(h.default, {
                type: 'success',
                size: 'small',
                style: {
                    width: '75%'
                },
                block: !0,
                disabled: !(0, i.default)(_r.recipe),
                onClick: () => {
                    _r.craft(_r.recipe.id);
                },
                ariaLabel: (0, j.CapitalizeFirstLetter)(k.default.baseVerb(_r.style)),
                children: (0, d.jsx)('span', {
                    style: {
                        textTransform: 'uppercase'
                    },
                    children: (0, j.CapitalizeFirstLetter)(k.default.baseVerb(_r.style))
                })
            }),
            (0, d.jsx)(_q, {
                onClick: _r.goBack,
                children: '...or go back'
            })
        ]
    }));
    const _p = f.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(l || (l = n`
  margin-top: 15px;
`)),
        _q = f.default.div(m || (m = n`
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
}), a.register('dp+oD', function(b, c) {
    _r(b.exports, 'default', function() {
        return _e;
    });
    var d = a('iWivW');
    var _e = _r => !_r.ingredients.find(_r => {
        if (!_r.item)
            return !1;
        const f = d.default.me.inventory.slots.get(_r.item);
        return !f || f.amount < _r.amount;
    });
}), a.register('/SWgn', function(b, c) {
    _r(b.exports, 'Container', function() {
        return _n;
    }), _r(b.exports, 'Label', function() {
        return _o;
    }), _r(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('QLuGk'),
        g = a('qVhMZ'),
        h = a('o2gEf'),
        i = a('PMl60');
    let j, k, l = _r => _r;
    var _m = _r => {
        const n = _r.recipe.ingredients.filter(_r => _r.item && _r.amount);
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)(_n, {
                children: [
                    (0, d.jsxs)(_o, {
                        children: [
                            'Required',
                            ' ',
                            (0, i.plural)((0, g.CapitalizeFirstLetter)(h.default.resource(_r.style)), n.length)
                        ]
                    }),
                    n.map((_r, n) => (0, d.jsx)(f.default, {
                        itemId: _r.item,
                        requiredAmount: _r.amount
                    }, `ingredient-${ _r.item }-${ n }`))
                ]
            })
        });
    };
    const _n = e.default.div.attrs({
            className: 'maxWidth'
        })(j || (j = l`
  margin-top: 30px;
`)),
        _o = e.default.div(k || (k = l`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 8px;
`));
}), a.register('QLuGk', function(b, c) {
    _r(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('2x11J');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('PMl60'),
        h = a('ZCz9W'),
        i = a('bHGrl'),
        j = a('btxlR');
    let k, l, m = _r => _r;
    var _n = (0, e.observer)(_r => {
        var o, p;
        const {
            me: {
                inventory: q
            }
        } = (0, i.default)(), {
            itemId: r,
            requiredAmount: s
        } = _r;
        let t = !0;
        const u = (null === (o = q.slots.get(r)) || void 0 === o ? void 0 : o.amount) || 0;
        let v = (0, h.ItemName)(r);
        return u >= s ? v += ` (${ (0, g.numberWithCommas)(s) })` : (t = !1, v += ` (${ (0, g.numberWithCommas)(u) }/${ (0, g.numberWithCommas)(s) })`), (0, d.jsxs)(_o, {
            style: {
                background: t ? 'rgba(255,255,255, 0.1)' : 'rgba(198, 40, 40, 0.5)'
            },
            children: [
                (0, d.jsx)('img', {
                    src: null === (p = (0, j.default)(r)) || void 0 === p ? void 0 : p.previewImage,
                    style: {
                        height: 35
                    }
                }),
                (0, d.jsx)(_p, {
                    children: v
                })
            ]
        });
    });
    const _o = f.default.div.attrs({
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
        _p = f.default.div(l || (l = m`
  line-height: 1;
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`));
}), a.register('xhrqf', function(b, c) {
    _r(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('PMl60'),
        h = a('/SWgn'),
        i = a('o2gEf'),
        j = a('qVhMZ');
    let k;
    const l = _r => {
            const m = _r / 60;
            return m >= 1 && _r % 60 == 0 ? `${ m } ${ (0, g.plural)('minute', m) }` : `${ _r } ${ (0, g.plural)('second', _r) }`;
        },
        m = _r => (0, d.jsx)(_o, {
            children: _r.children
        });
    var _n = _r => {
        const {
            recipe: o,
            style: p
        } = _r, q = e.useMemo(() => {
            if (0 === o.timeToCraftMs)
                return i.default.instantNote(p);
            const _r = Math.floor(o.timeToCraftMs / 1000);
            return i.default.durationNote(l(_r))(p);
        }, [o.timeToCraftMs]), r = e.useMemo(() => {
            if (0 === o.timeToDisposeMs)
                return `Never ${ i.default.expireVerb(p) }`;
            const s = Math.floor(o.timeToDisposeMs / 1000);
            return `${ (0, j.CapitalizeFirstLetter)(i.default.expireVerb(p)) } after ${ l(s) }`;
        }, [o.timeToDisposeMs]);
        return (0, d.jsxs)(h.Container, {
            children: [
                (0, d.jsx)(h.Label, {
                    children: 'Notes'
                }),
                (0, d.jsx)(m, {
                    children: q
                }),
                (0, d.jsx)(m, {
                    children: r
                })
            ]
        });
    };
    const _o = f.default.div.attrs({
        className: 'flex vc'
    })(k || (k = (_g => _g)`
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
}), a.register('rVhRp', function(b, c) {
    _g(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('btxlR'),
        g = a('SNA6d');
    let h, i, j = _g => _g;
    var _k = _g => {
        const {
            recipe: l
        } = _g;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(_l, {
                    src: (0, f.default)(l.itemId).previewImage
                }),
                (0, d.jsx)(_m, {
                    children: (0, g.default)(_g.recipe.itemId, _g.recipe.itemAmount)
                })
            ]
        });
    };
    const _l = e.default.img(h || (h = j`
  height: 82px;
`)),
        _m = e.default.div(i || (i = j`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`));
}), a.register('kMlb/', function(b, c) {
    _g(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('2x11J');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('b5kvC'),
        h = a('B5nzw'),
        i = a('Ltt5J'),
        j = a('TwXYL'),
        k = a('o2gEf');
    let l, m, n = _g => _g;
    var _o = (0, e.observer)(_g => {
        const p = (0, h.default)(_g.group);
        return p.length ? (0, d.jsxs)(_p, {
            children: [
                (0, d.jsx)(_q, {
                    children: k.default.selectItem(_g.style)
                }),
                p.map(p => (0, d.jsx)(i.default, {
                    recipeId: p,
                    style: _g.style,
                    onSelect: () => _g.setToRecipePreviewScreen(p)
                }, `recipe-${ p }`))
            ]
        }) : (0, d.jsx)('div', {
            className: 'maxAll flex-center',
            style: {
                textAlign: 'center'
            },
            children: (0, d.jsx)(_q, {
                children: k.default.noItems(_g.style)
            })
        });
    });
    const _p = (0, f.default)(j.motion.div).attrs({
            className: 'maxWidth flex-column flex-center',
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            }
        })(l || (l = n``)),
        _q = f.default.div(m || (m = n`
  font-family: ${ 0 };
  font-weight: ${ 0 };
  text-transform: none;
  margin-bottom: 15px;
  font-size: 22px;
`), g.Fonts.ProductSans, g.FontWeights.Bold);
}), a.register('B5nzw', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('EqyfB'),
        e = a('D5xLI');
    var _f = (_g = '') => {
        const h = [];
        return (0, e.default)().worldManager.devices.allDevices.filter(_g => _g.deviceOption.id === d.default.craftingRecipe).forEach(a => {
            const i = a.options;
            a.state.active && i.group === _g && (_g => {
                if (!_g.item || !_g.itemAmount)
                    return !1;
                let j = !1;
                for (let k = 1; k <= _g.numberOfIngredients; k++)
                    if (_g[`ingredient${ k }Item`] && _g[`ingredient${ k }Amount`]) {
                        j = !0;
                        break;
                    }
                return !!j;
            })(a.options) && h.push({
                id: a.id,
                y: a.y
            });
        }), h.sort((_g, h) => _g.y - h.y).map(_g => _g.id);
    };
}), a.register('Ltt5J', function(b, c) {
    e(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('TwXYL'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('btxlR'),
        i = a('dp+oD'),
        j = a('iubht'),
        k = a('SNA6d'),
        l = a('o2gEf');
    let m, n, o, p, q, r = e => e;
    var _s = e => {
        const t = (0, j.default)(e.recipeId),
            u = f.useMemo(() => (0, h.default)(t.itemId).previewImage, [t.itemId]),
            v = (0, i.default)(t);
        return (0, d.jsxs)(_t, {
            onClick: e.onSelect,
            children: [
                (0, d.jsx)(_u, {
                    src: u
                }),
                (0, d.jsxs)(_v, {
                    children: [
                        (0, d.jsx)(_w, {
                            children: (0, k.default)(t.itemId, t.itemAmount)
                        }),
                        (0, d.jsx)(_x, {
                            style: {
                                color: v ? '#a5d6a7' : '#ef9a9a'
                            },
                            children: v ? l.default.availableToCraft(e.style) : 'Insufficient Resources'
                        })
                    ]
                })
            ]
        });
    };
    const _t = g.default.div.attrs({
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
        _u = g.default.img(n || (n = r`
  height: 55px;
`)),
        _v = (0, g.default)(e.motion.div).attrs({
            className: 'flex-column'
        })(o || (o = r`
  margin-left: 15px;
  line-height: 1;
`)),
        _w = g.default.div(p || (p = r`
  font-size: 20px;
`)),
        _x = g.default.div(q || (q = r`
  color: #a5d6a7;
  font-size: 12px;
  margin-top: 6px;
  opacity: 0.8;
`));
}), a.register('N3eF9', function(b, c) {
    e(b.exports, 'CraftingTableDeviceUIBackgroundColor', function() {
        return _e;
    });
    var d = a('4HzlY');
    const _e = e => e === d.CraftingTableStyle.plant ? 'rgba(0,51,0,0.93)' : 'rgba(38,50,56,0.93)';
});