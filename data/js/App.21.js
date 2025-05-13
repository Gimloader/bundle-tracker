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
c.register('.....', function(d, e) {
    a(d.exports, 'rarityToColor', function() {
        return _i;
    }), a(d.exports, 'rarityToBackground', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const _i = j => j === h.CosmeticRarity.common ? g.default.rarities.common : j === h.CosmeticRarity.uncommon ? g.default.rarities.uncommon : j === h.CosmeticRarity.rare ? g.default.rarities.rare : j === h.CosmeticRarity.epic ? g.default.rarities.epic : j === h.CosmeticRarity.legendary ? g.default.rarities.legendary : j === h.CosmeticRarity.mythic ? g.default.rarities.mythic : f.default.White,
        _j = k => `radial-gradient(circle, rgba(255,255,255,1) 0%, ${ _i(k) } 100%)`;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        rarities: {
            common: '#606060',
            uncommon: 'rgb(6 143 0)',
            rare: 'rgb(8 97 190)',
            epic: 'rgb(53 6 146)',
            legendary: '#ba5605',
            mythic: '#cba638'
        }
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'cosmeticTypeName', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = i => i === g.CosmeticType.character ? f.default.character : i === g.CosmeticType.sticker ? f.default.sticker : i === g.CosmeticType.trail ? f.default.trail : 'Cosmetic';
}), c.register('.....', function(d, e) {
    a(d.exports, 'playClickSound', function() {
        return _i;
    }), a(d.exports, 'playPackClickSound', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const _i = () => {
            (0, h.playSound)({
                path: (0, g.default)('cosmos/pop.mp3'),
                volume: 0.4
            });
        },
        _j = () => {
            (0, h.playSound)({
                path: (0, g.default)(`cosmos/packButton${ (0, f.random)(1, 2) }.mp3`),
                volume: 0.4
            });
        };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    var _i = j => {
        const [k, l] = g.useState(!0), {
            open: m,
            close: n
        } = j;
        g.useEffect(() => {
            j.open && l(!1);
        }, [m]);
        return !m && k ? null : (0, f.jsx)(h.default, {
            ...j,
            open: m,
            close: n,
            afterClose: () => {
                l(!0);
            }
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....');
    let p;
    var _q = r => {
        const [s, t] = g.useState(0);
        return (0, f.jsxs)(h.default, {
            theme: {
                token: {
                    colorText: j.default.White,
                    colorBgBase: '#453267'
                }
            },
            children: [
                (0, f.jsx)(_r, {}),
                (0, f.jsx)(i.default, {
                    open: r.open,
                    onCancel: r.close,
                    afterClose: r.afterClose,
                    closeIcon: (0, f.jsx)(m.default, {}),
                    footer: null,
                    className: 'cosmos-preview-modal',
                    children: s ? (0, f.jsx)(o.SoldScreen, {
                        ...r,
                        soldAmount: s
                    }) : r.purchased ? (0, f.jsx)(n.default, {
                        ...r
                    }) : (0, f.jsx)(l.default, {
                        ...r,
                        setSoldAmount: t
                    })
                })
            ]
        });
    };
    const _r = (0, k.createGlobalStyle)(p || (p = (s => s)`
  .cosmos-preview-modal > .ant-modal-content {
    border-radius: 10px !important;
    overflow: hidden;
    padding: 0px !important;
  }
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'Bottom', function() {
        return _q;
    }), a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....');
    let o;
    var _p = q => {
        var r;
        const [s, t] = g.useState(null !== (r = q.editStyles) && void 0 !== r ? r : {}), [u, v] = g.useState(!1), w = (x, y) => {
            t({
                ...s,
                [x]: y
            });
        };
        return (0, f.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, f.jsx)(h.default, {
                    ...q,
                    editStyles: s
                }),
                (0, f.jsxs)(_q, {
                    children: [
                        (0, f.jsx)(i.default, {
                            ...q
                        }),
                        u ? (0, f.jsx)(m.SellSelector, {
                            ...q,
                            setSoldAmount: q.setSoldAmount,
                            closeSellScreen: () => {
                                v(!1);
                            }
                        }) : (0, f.jsxs)(f.Fragment, {
                            children: [
                                q.description || q.pack ? (0, f.jsx)(n.default, {
                                    ...q
                                }) : null,
                                q.style ? (0, f.jsx)(l.EditStyles, {
                                    style: q.style,
                                    currentStyles: s,
                                    updateEditStyle: w
                                }) : null,
                                (0, f.jsx)(k.default, {
                                    ...q,
                                    editStyles: s,
                                    setToSellScreen: () => {
                                        v(!0);
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    const _q = j.default.div(o || (o = (r => r)`
  padding: 20px 20px 25px 20px;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    let n, o, p, q = r => r;
    const r = g.lazy(() => c('.....'));
    var _s = t => {
        const u = (0, j.rarityToBackground)(t.rarity);
        return (0, f.jsxs)(_t, {
            style: {
                background: u
            },
            children: [
                t.count > 1 ? (0, f.jsx)(l.CountBadge, {
                    style: {
                        right: 20,
                        top: 42,
                        left: 'auto'
                    },
                    children: (0, m.numberWithCommas)(t.count)
                }) : null,
                (0, f.jsxs)(g.Suspense, {
                    fallback: null,
                    children: [
                        (() => {
                            const v = (0, f.jsx)(_u, {
                                style: {
                                    padding: t.type === k.CosmeticType.sticker ? 24 : 8
                                },
                                children: (0, f.jsx)(_v, {
                                    draggable: !1,
                                    src: t.image
                                })
                            });
                            return t.type !== k.CosmeticType.character || t.blockCharacterPreview ? v : (0, f.jsx)(r, {
                                id: t.id.replace('character_', ''),
                                editStyles: t.editStyles,
                                fallback: v
                            });
                        })(),
                        ' '
                    ]
                })
            ]
        });
    };
    const _t = h.default.div.attrs({
            className: 'maxWidth'
        })(n || (n = q`
  height: 150px;
  overflow: hidden;
  position: relative;
`)),
        _u = (0, h.default)(i.Centered).attrs({
            className: 'maxAll'
        })(o || (o = q``)),
        _v = h.default.img(p || (p = q`
  max-height: 100%;
  max-width: 100%;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'GridViewItem', function() {
        return _s;
    }), a(d.exports, 'CountBadge', function() {
        return _y;
    }), a(d.exports, 'EmptyGridViewItem', function() {
        return _t;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    let m, n, o, p, q, r = s => s;
    const _s = t => {
            var u;
            return (0, f.jsxs)(_u, {
                selected: t.selected,
                children: [
                    (0, f.jsx)(_v, {
                        children: (0, f.jsx)(_w, {
                            style: {
                                background: t.background,
                                padding: null !== (u = t.imagePadding) && void 0 !== u ? u : 10
                            },
                            children: (0, f.jsx)(_x, {
                                src: t.image
                            })
                        })
                    }),
                    t.count > 1 ? (0, f.jsx)(_y, {
                        children: (0, l.numberWithCommas)(t.count)
                    }) : null
                ]
            });
        },
        _t = u => (0, f.jsx)(_u, {
            selected: u.selected,
            style: {
                width: u.width,
                cursor: 'pointer'
            },
            onClick: u.onSelect,
            children: (0, f.jsx)(_v, {
                children: (0, f.jsx)(_w, {
                    style: {
                        background: 'radial-gradient( circle, rgba(78,77,77,1) 0%, rgba(32,32,32,1) 100% )',
                        fontSize: 42,
                        color: 'rgba(255,255,255,0.5)'
                    },
                    children: (0, f.jsx)(j.default, {
                        name: 'fal fa-times'
                    })
                })
            })
        }),
        _u = g.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = r`
  height: 140px;
  border: 4px solid;
  border-color: ${ 0 };
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`), v => v.selected ? '#fdd835' : h.default.White),
        _v = g.default.div.attrs({
            className: 'maxAll'
        })(n || (n = r`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`)),
        _w = (0, g.default)(i.Centered).attrs({
            className: 'maxAll'
        })(o || (o = r``)),
        _x = g.default.img(p || (p = r`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`)),
        _y = g.default.div.attrs({
            className: 'flex-center'
        })(q || (q = r`
  position: absolute;
  top: 7px;
  left: 7px;
  padding: 3px 6px;
  background: #ff6f00;
  color: ${ 0 };
  border-radius: 50px;
  line-height: 1;
  font-weight: ${ 0 };
  font-size: 10px;
`), h.default.White, k.FontWeights.Bold);
}), c.register('.....', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('.....').resolve('bgF9Q')),
        import('./' + c('.....').resolve('fKT9H'))
    ]).then(() => c('.....'));
}), c.register('.....', function(d, e) {
    var f, g;
    a(d.exports, 'register', function() {
        return f;
    }, function(h) {
        return f = h;
    }), a(d.exports, 'resolve', function() {
        return g;
    }, function(h) {
        return g = h;
    });
    var h = {};
    f = function(i) {
        for (var j = Object.keys(i), k = 0; k < j.length; k++)
            h[j[k]] = i[j[k]];
    }, g = function(i) {
        var j = h[i];
        if (null == j)
            throw new Error('Could not resolve bundle with id ' + i);
        return j;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    let l, m, n, o = p => p;
    var _p = q => {
        const {
            name: r,
            type: s,
            rarity: t
        } = q, u = [];
        return u.push((0, k.cosmeticTypeName)(s)), u.push(t), (0, f.jsxs)(_q, {
            children: [
                (0, f.jsx)(_r, {
                    children: r
                }),
                u.length ? (0, f.jsx)(i.default, {
                    direction: 'horizontal',
                    size: 10,
                    wrap: !0,
                    style: {
                        marginTop: 4
                    },
                    children: u.map(v => (0, f.jsx)(_s, {
                        children: v
                    }, q.id + v))
                }) : null
            ]
        });
    };
    const _q = (0, g.default)(h.CenteredColumn).attrs({
            className: 'maxWidth'
        })(l || (l = o`
  font-family: ${ 0 };
  text-transform: uppercase;
`), j.Fonts.FugazOne),
        _r = g.default.div(m || (m = o`
  font-size: 36px;
  font-weight: ${ 0 };
  text-align: center;
`), j.FontWeights.Bold),
        _s = g.default.div(n || (n = o`
  font-family: ${ 0 };
  background: rgba(255, 255, 255, 0.1);
  line-height: 1;
  font-size: 14px;
  padding: 8px 21px 6px 21px;
  border-radius: 50px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), j.Fonts.FugazOne);
}), c.register('.....', function(d, e) {
    a(d.exports, 'SellButton', function() {
        return _o;
    }), a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    let m;
    var _n = o => {
        const p = o.callToAction({
                editStyles: o.editStyles
            }),
            q = !!(o.count > 1 && o.sellCost && o.setToSellScreen);
        return p ? (0, f.jsxs)(i.CenteredColumn, {
            className: 'maxAll',
            style: {
                marginTop: 20
            },
            children: [
                (0, f.jsx)(g.default, {
                    type: 'success',
                    customHorizontalPadding: 35,
                    disabled: p.disabled,
                    ariaLabel: p.ariaLabel,
                    onClick: () => {
                        p.onClick();
                    },
                    children: (0, f.jsx)('div', {
                        style: {
                            fontFamily: h.Fonts.FugazOne,
                            textTransform: 'uppercase',
                            fontSize: 16
                        },
                        children: p.text
                    })
                }, `cta-${ p.disabled }}`),
                q ? (0, f.jsx)(_o, {
                    onClick: () => {
                        (0, l.playPackClickSound)(), o.setToSellScreen();
                    },
                    children: 'Sell'
                }) : null
            ]
        }) : null;
    };
    const _o = j.default.div(m || (m = (p => p)`
  color: ${ 0 };
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 8px;
  transition: color 0.2s ease-in-out;
  font-style: italic;
  &:hover {
    color: #ffff99;
  }
`), k.default.Yellow);
}), c.register('.....', function(d, e) {
    a(d.exports, 'EditStyles', function() {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    const _i = j => (0, f.jsx)('div', {
        className: 'maxWidth',
        style: {
            marginTop: 17
        },
        children: (0, f.jsx)(h.default, {
            className: 'maxWidth',
            direction: 'vertical',
            size: 15,
            children: j.style.categories.map(k => (0, f.jsx)(g.EditStyle, {
                category: k,
                value: j.currentStyles[k.name],
                onChange: l => {
                    j.updateEditStyle(k.name, l);
                }
            }, k.name + '-category'))
        })
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'EditStyle', function() {
        return _u;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....');
    let p, q, r, s, t = u => u;
    const _u = v => {
            const {
                category: w
            } = v, [x, y] = g.useState(!0), z = g.useMemo(() => {
                var A;
                if (!(null === (A = w.options) || void 0 === A ? void 0 : A.length))
                    return;
                const B = w.options.find(C => C.name === v.value);
                return B || w.options[0];
            }, [
                w,
                v.value
            ]), A = g.useMemo(() => {
                if (w.color)
                    return w.color.defaultColor;
            }, [w.color]), B = g.useMemo(() => {
                let C = w.name;
                return z ? `${ C } - ${ z.name }` : C;
            }, [
                w,
                z
            ]);
            return (0, f.jsxs)(_v, {
                children: [
                    (0, f.jsxs)(_w, {
                        onClick: () => {
                            y(C => !C);
                        },
                        children: [
                            (0, f.jsx)(_x, {
                                children: B
                            }),
                            (0, f.jsx)(_y, {
                                children: (0, f.jsx)(o.default, {
                                    name: 'fas fa-caret-' + (x ? 'up' : 'down')
                                })
                            })
                        ]
                    }),
                    x ? v.category.type === h.CosmeticStyleCategoryType.color ? (0, f.jsx)(n.EditStyleColor, {
                        value: null !== (q = v.value) && void 0 !== q ? q : A,
                        onChange: v.onChange
                    }) : (0, f.jsx)(j.default, {
                        direction: 'horizontal',
                        size: 7,
                        wrap: !0,
                        children: w.options.map(C => (0, f.jsx)(k.EditStyleOption, {
                            option: C,
                            selected: C.name === z.name,
                            select: () => {
                                (0, m.playClickSound)(), v.onChange(C.name);
                            }
                        }, C.name + w.name))
                    }) : null
                ]
            });
            var C;
        },
        _v = i.default.div.attrs({
            className: 'maxWidth'
        })(p || (p = t``)),
        _w = i.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(q || (q = t`
  gap: 10px;
  cursor: pointer;
  margin-bottom: 4px;
`)),
        _x = i.default.div(r || (r = t`
  font-family: ${ 0 };
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
`), l.Fonts.FugazOne),
        _y = i.default.div(s || (s = t`
  font-size: 16px;
  opacity: 0.9;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'EditStyleOption', function() {
        return _l;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    let i, j, k = l => l;
    const _l = m => {
            const {
                option: n
            } = m;
            return (0, f.jsx)(_m, {
                selected: m.selected,
                onClick: m.selected ? void 0 : m.select,
                children: 'color' === n.preview.type ? (0, f.jsx)(_n, {
                    style: {
                        background: `radial-gradient(circle at 13px 13px, ${ n.preview.color }, #000)`
                    }
                }) : null
            });
        },
        _m = g.default.div.attrs({
            className: 'flex-center'
        })(i || (i = k`
  width: 65px;
  height: 65px;
  background: rgba(255, 255, 255, ${ 0 });
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${ 0 };
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: rgba(
      255,
      255,
      255,
      ${ 0 }
    );
  }
`), n => n.selected ? 0.24 : 0.1, n => n.selected ? '#fdd835' : h.default.White, n => n.selected ? 0.24 : 0.17),
        _n = g.default.div(j || (j = k`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'EditStyleColor', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    let i;
    const _j = k => (0, f.jsx)(_k, {
            children: (0, f.jsx)(g.HexColorPicker, {
                style: {
                    width: '100%'
                },
                color: k.value,
                onChange: l => {
                    k.onChange(l);
                }
            })
        }),
        _k = h.default.div.attrs({
            className: 'maxWidth'
        })(i || (i = (l => l)`
  padding: 25px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'HexColorPicker', function() {
        return _Y;
    });
    var f = c('.....');

    function g() {
        return (g = Object.assign || function(h) {
            for (var i = 1; i < arguments.length; i++) {
                var j = arguments[i];
                for (var k in j)
                    Object.prototype.hasOwnProperty.call(j, k) && (h[k] = j[k]);
            }
            return h;
        }).apply(this, arguments);
    }

    function h(i, j) {
        if (null == i)
            return {};
        var k, l, m = {},
            n = Object.keys(i);
        for (l = 0; l < n.length; l++)
            j.indexOf(k = n[l]) >= 0 || (m[k] = i[k]);
        return m;
    }

    function m(n) {
        var o = (0, n.useRef)(n),
            p = (0, n.useRef)(function(q) {
                o.current && o.current(q);
            });
        return o.current = n, p.current;
    }
    var p = function(q, r, s) {
            return void 0 === r && (r = 0), void 0 === s && (s = 1), q > s ? s : q < r ? r : q;
        },
        q = function(r) {
            return 'touches' in r;
        },
        r = function(s) {
            return s && s.ownerDocument.defaultView || self;
        },
        s = function(t, u, v) {
            var w = t.getBoundingClientRect(),
                x = q(u) ? function(y, z) {
                    for (var A = 0; A < y.length; A++)
                        if (y[A].identifier === z)
                            return y[A];
                    return y[0];
                }(u.touches, v) : u;
            return {
                left: p((x.pageX - (w.left + r(t).pageXOffset)) / w.width),
                top: p((x.pageY - (w.top + r(t).pageYOffset)) / w.height)
            };
        },
        t = function(u) {
            !q(u) && u.preventDefault();
        },
        u = o(n).memo(function(v) {
            var w = v.onMove,
                x = v.onKey,
                y = h(v, [
                    'onMove',
                    'onKey'
                ]),
                z = (0, n.useRef)(null),
                A = m(w),
                B = m(x),
                C = (0, n.useRef)(null),
                D = (0, n.useRef)(!1),
                E = (0, n.useMemo)(function() {
                    var F = function(G) {
                            t(G), (q(G) ? G.touches.length > 0 : G.buttons > 0) && z.current ? A(s(z.current, G, C.current)) : w(!1);
                        },
                        G = function() {
                            return w(!1);
                        };

                    function H(I) {
                        var J = D.current,
                            K = r(z.current),
                            L = I ? K.addEventListener : K.removeEventListener;
                        L(J ? 'touchmove' : 'mousemove', F), L(J ? 'touchend' : 'mouseup', G);
                    }
                    return [
                        function(L) {
                            var M = L.nativeEvent,
                                N = z.current;
                            if (N && (t(M), ! function(O, P) {
                                    return P && !q(O);
                                }(M, D.current) && N)) {
                                if (q(M)) {
                                    D.current = !0;
                                    var O = M.changedTouches || [];
                                    O.length && (C.current = O[0].identifier);
                                }
                                N.focus(), A(s(N, M, C.current)), H(!0);
                            }
                        },
                        function(L) {
                            var M = L.which || L.keyCode;
                            M < 37 || M > 40 || (L.preventDefault(), B({
                                left: 39 === M ? 0.05 : 37 === M ? -0.05 : 0,
                                top: 40 === M ? 0.05 : 38 === M ? -0.05 : 0
                            }));
                        },
                        H
                    ];
                }, [
                    B,
                    A
                ]),
                F = E[0],
                G = E[1],
                H = E[2];
            return (0, n.useEffect)(function() {
                return H;
            }, [H]), o(n).createElement('div', g({}, y, {
                onTouchStart: F,
                onMouseDown: F,
                className: 'react-colorful__interactive',
                ref: z,
                onKeyDown: G,
                tabIndex: 0,
                role: 'slider'
            }));
        }),
        v = function(w) {
            return w.filter(Boolean).join(' ');
        },
        w = function(x) {
            var y = x.color,
                z = x.left,
                A = x.top,
                B = void 0 === A ? 0.5 : A,
                C = v([
                    'react-colorful__pointer',
                    x.className
                ]);
            return o(n).createElement('div', {
                className: C,
                style: {
                    top: 100 * B + '%',
                    left: 100 * z + '%'
                }
            }, o(n).createElement('div', {
                className: 'react-colorful__pointer-fill',
                style: {
                    backgroundColor: y
                }
            }));
        },
        x = function(y, z, A) {
            return void 0 === z && (z = 0), void 0 === A && (A = Math.pow(10, z)), Math.round(A * y) / A;
        },
        y = (Math.PI, function(z) {
            return _G(_z(z));
        }),
        _z = function(A) {
            return '#' === A[0] && (A = A.substring(1)), A.length < 6 ? {
                r: parseInt(A[0] + A[0], 16),
                g: parseInt(A[1] + A[1], 16),
                b: parseInt(A[2] + A[2], 16),
                a: 4 === A.length ? x(parseInt(A[3] + A[3], 16) / 255, 2) : 1
            } : {
                r: parseInt(A.substring(0, 2), 16),
                g: parseInt(A.substring(2, 4), 16),
                b: parseInt(A.substring(4, 6), 16),
                a: 8 === A.length ? x(parseInt(A.substring(6, 8), 16) / 255, 2) : 1
            };
        },
        A = function(B) {
            return _F(_D(B));
        },
        B = function(C) {
            var D = C.s,
                E = C.v,
                F = C.a,
                G = (200 - D) * E / 100;
            return {
                h: x(C.h),
                s: x(G > 0 && G < 200 ? D * E / 100 / (G <= 100 ? G : 200 - G) * 100 : 0),
                l: x(G / 2),
                a: x(F, 2)
            };
        },
        C = function(D) {
            var E = B(D);
            return 'hsl(' + E.h + ', ' + E.s + '%, ' + E.l + '%)';
        },
        _D = function(E) {
            var F = E.h,
                G = E.s,
                H = E.v,
                I = E.a;
            F = F / 360 * 6, G /= 100, H /= 100;
            var J = Math.floor(F),
                K = H * (1 - G),
                L = H * (1 - (F - J) * G),
                M = H * (1 - (1 - F + J) * G),
                N = J % 6;
            return {
                r: x(255 * [
                    H,
                    L,
                    K,
                    K,
                    M,
                    H
                ][N]),
                g: x(255 * [
                    M,
                    H,
                    H,
                    L,
                    K,
                    K
                ][N]),
                b: x(255 * [
                    K,
                    K,
                    M,
                    H,
                    H,
                    L
                ][N]),
                a: x(I, 2)
            };
        },
        E = function(F) {
            var G = F.toString(16);
            return G.length < 2 ? '0' + G : G;
        },
        _F = function(G) {
            var H = G.r,
                I = G.g,
                J = G.b,
                K = G.a,
                L = K < 1 ? E(x(255 * K)) : '';
            return '#' + E(H) + E(I) + E(J) + L;
        },
        _G = function(H) {
            var I = H.r,
                J = H.g,
                K = H.b,
                L = H.a,
                M = Math.max(I, J, K),
                N = M - Math.min(I, J, K),
                O = N ? M === I ? (J - K) / N : M === J ? 2 + (K - I) / N : 4 + (I - J) / N : 0;
            return {
                h: x(60 * (O < 0 ? O + 6 : O)),
                s: x(M ? N / M * 100 : 0),
                v: x(M / 255 * 100),
                a: L
            };
        },
        H = o(n).memo(function(I) {
            var J = I.hue,
                K = I.onChange,
                L = v([
                    'react-colorful__hue',
                    I.className
                ]);
            return o(n).createElement('div', {
                className: L
            }, o(n).createElement(u, {
                onMove: function(M) {
                    K({
                        h: 360 * M.left
                    });
                },
                onKey: function(M) {
                    K({
                        h: p(J + 360 * M.left, 0, 360)
                    });
                },
                'aria-label': 'Hue',
                'aria-valuenow': x(J),
                'aria-valuemax': '360',
                'aria-valuemin': '0'
            }, o(n).createElement(w, {
                className: 'react-colorful__hue-pointer',
                left: J / 360,
                color: C({
                    h: J,
                    s: 100,
                    v: 100,
                    a: 1
                })
            })));
        }),
        I = o(n).memo(function(J) {
            var K = J.hsva,
                L = J.onChange,
                M = {
                    backgroundColor: C({
                        h: K.h,
                        s: 100,
                        v: 100,
                        a: 1
                    })
                };
            return o(n).createElement('div', {
                className: 'react-colorful__saturation',
                style: M
            }, o(n).createElement(u, {
                onMove: function(N) {
                    L({
                        s: 100 * N.left,
                        v: 100 - 100 * N.top
                    });
                },
                onKey: function(N) {
                    L({
                        s: p(K.s + 100 * N.left, 0, 100),
                        v: p(K.v - 100 * N.top, 0, 100)
                    });
                },
                'aria-label': 'Color',
                'aria-valuetext': 'Saturation ' + x(K.s) + '%, Brightness ' + x(K.v) + '%'
            }, o(n).createElement(w, {
                className: 'react-colorful__saturation-pointer',
                top: 1 - K.v / 100,
                left: K.s / 100,
                color: C(K)
            })));
        }),
        J = function(K, L) {
            if (K === L)
                return !0;
            for (var M in K)
                if (K[M] !== L[M])
                    return !1;
            return !0;
        },
        K = function(L, M) {
            return L.toLowerCase() === M.toLowerCase() || J(_z(L), _z(M));
        };

    function L(M, N, O) {
        var P = m(O),
            Q = (0, n.useState)(function() {
                return M.toHsva(N);
            }),
            R = Q[0],
            S = Q[1],
            T = (0, n.useRef)({
                color: N,
                hsva: g
            });
        (0, n.useEffect)(function() {
            if (!M.equal(N, T.current.color)) {
                var U = M.toHsva(N);
                T.current = {
                    hsva: U,
                    color: N
                }, h(U);
            }
        }, [
            N,
            M
        ]), (0, n.useEffect)(function() {
            var U;
            J(g, T.current.hsva) || M.equal(U = M.fromHsva(g), T.current.color) || (T.current = {
                hsva: g,
                color: U
            }, P(U));
        }, [
            g,
            M,
            P
        ]);
        var U = (0, n.useCallback)(function(V) {
            h(function(W) {
                return Object.assign({}, W, V);
            });
        }, []);
        return [
            g,
            U
        ];
    }
    var S, T = 'undefined' != typeof window ? n.useLayoutEffect : n.useEffect,
        U = new Map(),
        V = function(W) {
            T(function() {
                var X = W.current ? W.current.ownerDocument : document;
                if (void 0 !== X && !U.has(X)) {
                    var Y = X.createElement('style');
                    Y.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', U.set(X, Y);
                    var Z = S || ('undefined' != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                    Z && Y.setAttribute('nonce', Z), X.head.appendChild(Y);
                }
            }, []);
        },
        W = function(X) {
            var Y = X.className,
                Z = X.colorModel,
                $ = X.color,
                ab = void 0 === $ ? Z.defaultColor : $,
                bb = X.onChange,
                cb = h(X, [
                    'className',
                    'colorModel',
                    'color',
                    'onChange'
                ]),
                db = (0, n.useRef)(null);
            V(db);
            var eb = L(Z, ab, bb),
                fb = eb[0],
                gb = eb[1],
                hb = v([
                    'react-colorful',
                    Y
                ]);
            return o(n).createElement('div', g({}, cb, {
                ref: db,
                className: hb
            }), o(n).createElement(I, {
                hsva: fb,
                onChange: gb
            }), o(n).createElement(H, {
                hue: fb.h,
                onChange: gb,
                className: 'react-colorful__last-control'
            }));
        },
        X = {
            defaultColor: '000',
            toHsva: y,
            fromHsva: function(Y) {
                return A({
                    h: Y.h,
                    s: Y.s,
                    v: Y.v,
                    a: 1
                });
            },
            equal: K
        },
        _Y = function(Z) {
            return o(n).createElement(W, g({}, Z, {
                colorModel: X
            }));
        };
}), c.register('.....', function(d, e) {
    a(d.exports, 'SellSelector', function() {
        return _B;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....'),
        v = c('.....');
    let w, x, y, z, A = B => B;
    const _B = C => {
            const [D, E] = g.useState(!1), [F, G] = g.useState(C.count - 1), {
                closeSellScreen: H
            } = C, I = C.count - 1, J = K => {
                const L = Math.max(1, Math.min(I, K));
                G(L), (0, s.playPackClickSound)();
            };
            return (0, f.jsxs)(_C, {
                children: [
                    (0, f.jsxs)(_D, {
                        children: [
                            (0, f.jsxs)(i.Centered, {
                                className: 'maxWidth',
                                style: {
                                    gap: 6
                                },
                                children: [
                                    (0, f.jsx)(l.Button, {
                                        disabled: 1 === F,
                                        onClick: () => {
                                            J(F - 5);
                                        },
                                        children: '-5'
                                    }),
                                    (0, f.jsx)(l.Button, {
                                        disabled: 1 === F,
                                        onClick: () => {
                                            J(F - 1);
                                        },
                                        children: '-1'
                                    }),
                                    (0, f.jsx)(_E, {
                                        children: (0, k.numberWithCommas)(F)
                                    }),
                                    (0, f.jsx)(l.Button, {
                                        disabled: F === I,
                                        onClick: () => {
                                            J(F + 1);
                                        },
                                        children: '+1'
                                    }),
                                    (0, f.jsx)(l.Button, {
                                        disabled: F === I,
                                        onClick: () => {
                                            J(F + 5);
                                        },
                                        children: '+5'
                                    })
                                ]
                            }),
                            (0, f.jsxs)(_F, {
                                children: [
                                    (0, f.jsxs)('span', {
                                        children: [
                                            'Selling ',
                                            (0, k.numberWithCommas)(F),
                                            ' ',
                                            (0, f.jsx)('span', {
                                                style: {
                                                    fontWeight: j.FontWeights.Bold,
                                                    textDecoration: 'underline'
                                                },
                                                children: C.name
                                            }),
                                            ' ',
                                            'for'
                                        ]
                                    }),
                                    (0, f.jsx)(m.default, {
                                        size: 12,
                                        amount: C.sellCost * F
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, f.jsx)(n.default, {
                        type: 'success',
                        customHorizontalPadding: 35,
                        ariaLabel: 'Sell',
                        onClick: () => {
                            D || ((0, t.playSound)({
                                path: (0, u.default)('cosmos/sold.mp3'),
                                volume: 0.6
                            }), E(!0), (0, r.Request)({
                                url: '/api/cosmos/sell',
                                data: {
                                    cosmeticId: C.id,
                                    count: F
                                },
                                success: K => {
                                    C.setSoldAmount(K.amount), (0, q.refetchOwnedCosmetics)(), (0, v.invalidateCosmosBasics)();
                                },
                                error: K => {
                                    (0, k.throwMessageError)({
                                        e: K,
                                        default: {
                                            title: 'Error selling this item',
                                            content: 'Please try again later'
                                        }
                                    });
                                },
                                both: () => {
                                    E(!1);
                                }
                            }));
                        },
                        style: {
                            marginTop: 20
                        },
                        children: (0, f.jsx)('div', {
                            style: {
                                fontFamily: j.Fonts.FugazOne,
                                textTransform: 'uppercase',
                                fontSize: 16
                            },
                            children: 'Sell'
                        })
                    }),
                    (0, f.jsx)(p.SellButton, {
                        onClick: () => {
                            (0, s.playPackClickSound)(), H();
                        },
                        children: 'Go back'
                    })
                ]
            });
        },
        _C = (0, h.default)(i.CenteredColumn).attrs({
            className: 'maxWidth'
        })(w || (w = A``)),
        _D = (0, h.default)(i.CenteredColumn).attrs({
            className: 'maxWidth'
        })(x || (x = A`
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-top: 19px;
`)),
        _E = h.default.div(y || (y = A`
  font-size: 24px;
  font-family: ${ 0 };
  line-height: 1;
  border: 2px solid ${ 0 };
  border-radius: 4px;
  padding: 10px 30px;
  padding-top: 13px;
  margin: 0px 10px;
  background: rgba(255, 255, 255, 0.05);
`), j.Fonts.FugazOne, o.default.Yellow),
        _F = h.default.div.attrs({
            className: 'flex wrap'
        })(z || (z = A`
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 14px;
  gap: 6px;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'CountSelector', function() {
        return _k;
    }), a(d.exports, 'Button', function() {
        return _l;
    });
    var f = c('.....'),
        g = c('.....');
    c('.....');
    var h = c('.....'),
        i = c('.....');
    let j;
    const _k = l => {
            const m = n => {
                const o = Math.max(1, Math.min(25, n));
                l.setCount(o), (0, i.playPackClickSound)();
            };
            return (0, f.jsxs)(h.default, {
                size: 6,
                style: {
                    marginTop: 10
                },
                children: [
                    (0, f.jsx)(_l, {
                        disabled: 1 === l.count,
                        onClick: () => {
                            m(l.count - 1);
                        },
                        children: '-1'
                    }),
                    (0, f.jsx)(_l, {
                        disabled: 25 === l.count,
                        onClick: () => {
                            m(l.count + 1);
                        },
                        children: '+1'
                    }),
                    (0, f.jsx)(_l, {
                        disabled: 25 === l.count,
                        onClick: () => {
                            m(l.count + 5);
                        },
                        children: '+5'
                    })
                ]
            });
        },
        _l = g.default.div(j || (j = (m => m)`
  background: rgba(255, 255, 255, 0.1);
  opacity: ${ 0 };
  padding: 6px 12px;
  line-height: 1;
  font-size: 11px;
  border-radius: 4px;
  transition: transform 0.15s, background 0.15s;
  will-change: transform, background;
  user-select: none;
  cursor: ${ 0 };
  ${ 0 }
`), m => m.disabled ? 0.5 : 1, m => m.disabled ? 'not-allowed' : 'pointer', m => !m.disabled && '&:hover {\n    transform: scale(1.05);\n    background: rgba(255, 255, 255, 0.15);\n  }');
}), c.register('.....', function(d, e) {
    a(d.exports, 'invalidateOwnedCosmetics', function() {
        return _j;
    }), a(d.exports, 'refetchOwnedCosmetics', function() {
        return _k;
    }), a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const i = ['cosmos-owned-cosmetics'],
        _j = () => {
            g.default.invalidateQueries(i);
        },
        _k = () => {
            g.default.refetchQueries(i);
        };
    var _l = () => (0, f.useQuery)(i, () => (0, h.requestAsPromise)({
        url: '/api/cosmos/owned-cosmetics'
    }));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    let k, l, m, n = o => o;
    const o = p => (0, f.jsxs)(_r, {
        style: p.style,
        children: [
            (0, f.jsx)('div', {
                style: {
                    marginRight: 15,
                    flexShrink: 0
                },
                children: (0, f.jsx)(j.default, {
                    name: p.icon
                })
            }),
            (0, f.jsx)('div', {
                children: p.children
            })
        ]
    });
    var _p = q => (0, f.jsx)(f.Fragment, {
        children: (0, f.jsxs)(_q, {
            children: [
                q.description ? (0, f.jsx)(o, {
                    icon: 'fad fa-sparkles',
                    children: q.description
                }) : null,
                q.pack ? (0, f.jsxs)(o, {
                    icon: 'fad fa-box',
                    style: {
                        marginTop: q.description ? 10 : 0
                    },
                    children: [
                        'Part of the',
                        ' ',
                        (0, f.jsx)('span', {
                            style: {
                                fontWeight: h.FontWeights.Bold,
                                color: '#ffecb3'
                            },
                            children: q.pack
                        })
                    ]
                }) : null
            ]
        })
    });
    const _q = g.default.div(k || (k = n`
  margin-top: 19px;
`)),
        _r = (0, g.default)(i.VerticallyCentered)(l || (l = n`
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.93);
  transition: background 0.2s ease-in-out;
  cursor: default;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`));
    g.default.div(m || (m = n``));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    let i;
    var _j = () => (0, f.jsx)(_k, {
        children: (0, f.jsx)(h.default, {
            name: 'fas fa-times'
        })
    });
    const _k = g.default.div(i || (i = (l => l)`
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.17s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....');
    let o;
    var _p = q => {
        const r = q.type !== m.CosmeticType.sticker;
        return (0, f.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, f.jsx)(h.default, {
                    ...q,
                    editStyles: {}
                }),
                (0, f.jsxs)(g.Bottom, {
                    className: 'flex-center flex-column',
                    children: [
                        (0, f.jsx)(j.default, {
                            ...q
                        }),
                        (0, f.jsx)(i.default, {
                            ...q,
                            callToAction: () => {
                                const s = r ? 'Equip' : 'Close';
                                return {
                                    text: s,
                                    ariaLabel: s,
                                    onClick: () => {
                                        (0, n.playClickSound)(), r ? (0, l.selectCosmetic)({
                                            cosmeticId: q.id,
                                            cosmeticType: q.type,
                                            onSuccess: () => {
                                                q.onCosmeticSelectionChanged && q.onCosmeticSelectionChanged(), q.close();
                                            }
                                        }) : q.close();
                                    }
                                };
                            }
                        }),
                        r ? (0, f.jsx)(_q, {
                            onClick: q.close,
                            children: 'Close'
                        }) : null
                    ]
                })
            ]
        });
    };
    const _q = k.default.div(o || (o = (r => r)`
  color: #bbdefb;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 8px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #e3f2fd;
  }
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'Container', function() {
        return _r;
    }), a(d.exports, 'Name', function() {
        return _s;
    }), a(d.exports, 'Purchased', function() {
        return _t;
    }), a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    let l, m, n, o = p => p;
    const p = {
        angle: 90,
        spread: 70,
        startVelocity: 60,
        elementCount: 100,
        decay: 0.87
    };
    var _q = r => {
        const [s, t] = (0, j.useBoolean)(!1);
        return (0, k.useDidMount)(t), (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(_s, {
                    children: r.name
                }),
                (0, f.jsx)(b(i), {
                    active: s,
                    config: p
                }),
                (0, f.jsx)(_t, {
                    children: 'Purchased!'
                })
            ]
        });
    };
    const _r = g.default.div.attrs({
            className: 'flex-center flex-column animated bounceIn'
        })(l || (l = o`
  text-align: center;
  font-family: ${ 0 };
  text-transform: uppercase;
  animation-duration: 0.6s;
`), h.Fonts.FugazOne),
        _s = g.default.div(m || (m = o`
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`)),
        _t = g.default.div(n || (n = o`
  font-size: 48px;
  line-height: 1;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'selectCosmetic', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = ({
        cosmeticId: i,
        cosmeticType: j,
        editStyles: k,
        onSuccess: l
    }) => {
        const m = {
            cosmeticId: i,
            cosmeticType: j
        };
        k && Object.keys(k).length > 0 && (m.editStyles = k), (0, f.request)({
            url: '/api/cosmos/select-cosmetic',
            data: m,
            success: () => {
                (0, g.invalidateCosmosBasics)(), l();
            }
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'SoldScreen', function() {
        return _r;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....');
    let o, p, q = r => r;
    const _r = s => (0, f.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, f.jsx)(g.default, {
                    ...s,
                    editStyles: {}
                }),
                (0, f.jsxs)(h.Bottom, {
                    className: 'flex-center flex-column',
                    children: [
                        (0, f.jsxs)(i.Container, {
                            children: [
                                (0, f.jsx)(i.Name, {
                                    children: s.name
                                }),
                                (0, f.jsx)(i.Purchased, {
                                    children: 'Sold!'
                                })
                            ]
                        }),
                        (0, f.jsx)(_s, {
                            children: (0, f.jsxs)(_t, {
                                children: [
                                    (0, f.jsx)('span', {
                                        style: {
                                            marginTop: 3,
                                            marginRight: 8
                                        },
                                        children: 'You earned'
                                    }),
                                    (0, f.jsx)(m.default, {
                                        size: 14,
                                        amount: s.soldAmount
                                    })
                                ]
                            })
                        }),
                        (0, f.jsx)(j.default, {
                            ...s,
                            callToAction: () => {
                                const t = 'Close';
                                return {
                                    text: t,
                                    ariaLabel: t,
                                    onClick: () => {
                                        (0, k.playClickSound)(), s.close();
                                    }
                                };
                            }
                        })
                    ]
                })
            ]
        }),
        _s = l.default.div.attrs({
            className: 'maxWidth flex-center'
        })(o || (o = q`
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: 14px;
  line-height: 1;
  font-family: ${ 0 };
  text-transform: uppercase;
  margin-top: 12px;
`), n.Fonts.FugazOne),
        _t = l.default.div.attrs({
            className: 'flex'
        })(p || (p = q``));
});