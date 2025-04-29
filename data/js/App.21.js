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
c.register('z0fxm', function(d, e) {
    a(d.exports, 'rarityToColor', function() {
        return _i;
    }), a(d.exports, 'rarityToBackground', function() {
        return _j;
    });
    var f = c('8KqQ+'),
        g = c('YS8La'),
        h = c('WrOhL');
    const _i = a => a === h.CosmeticRarity.common ? g.default.rarities.common : a === h.CosmeticRarity.uncommon ? g.default.rarities.uncommon : a === h.CosmeticRarity.rare ? g.default.rarities.rare : a === h.CosmeticRarity.epic ? g.default.rarities.epic : a === h.CosmeticRarity.legendary ? g.default.rarities.legendary : a === h.CosmeticRarity.mythic ? g.default.rarities.mythic : f.default.White,
        _j = a => `radial-gradient(circle, rgba(255,255,255,1) 0%, ${ _i(a) } 100%)`;
}), c.register('YS8La', function(d, e) {
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
}), c.register('GYoVM', function(d, e) {
    a(d.exports, 'cosmeticTypeName', function() {
        return _h;
    });
    var f = c('LE3I425'),
        g = c('WrOhL');
    const _h = a => a === g.CosmeticType.character ? f.default.character : a === g.CosmeticType.sticker ? f.default.sticker : a === g.CosmeticType.trail ? f.default.trail : 'Cosmetic';
}), c.register('YGjrn', function(d, e) {
    a(d.exports, 'playClickSound', function() {
        return _i;
    }), a(d.exports, 'playPackClickSound', function() {
        return _j;
    });
    var f = c('9zaF+'),
        g = c('UaUBz0'),
        h = c('3jaMj');
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
}), c.register('NmKrj', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('Ojydz');
    var _i = a => {
        const [j, k] = g.useState(!0), {
            open: l,
            close: m
        } = a;
        g.useEffect(() => {
            a.open && k(!1);
        }, [l]);
        return !l && j ? null : (0, f.jsx)(h.default, {
            ...a,
            open: l,
            close: m,
            afterClose: () => {
                k(!0);
            }
        });
    };
}), c.register('Ojydz', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('R2nG3'),
        i = c('AE7vR'),
        j = c('8KqQ+'),
        k = c('u4s09'),
        l = c('tqJRW'),
        m = c('9JK54'),
        n = c('qIsX/'),
        o = c('a+Qty');
    let p;
    var _q = a => {
        const [r, s] = g.useState(0);
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
                    open: a.open,
                    onCancel: a.close,
                    afterClose: a.afterClose,
                    closeIcon: (0, f.jsx)(m.default, {}),
                    footer: null,
                    className: 'cosmos-preview-modal',
                    children: r ? (0, f.jsx)(o.SoldScreen, {
                        ...a,
                        soldAmount: r
                    }) : a.purchased ? (0, f.jsx)(n.default, {
                        ...a
                    }) : (0, f.jsx)(l.default, {
                        ...a,
                        setSoldAmount: s
                    })
                })
            ]
        });
    };
    const _r = (0, k.createGlobalStyle)(p || (p = (a => a)`
  .cosmos-preview-modal > .ant-modal-content {
    border-radius: 10px !important;
    overflow: hidden;
    padding: 0px !important;
  }
`));
}), c.register('tqJRW', function(d, e) {
    a(d.exports, 'Bottom', function() {
        return _q;
    }), a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('t9ew9'),
        i = c('cbGtm'),
        j = c('u4s09'),
        k = c('OB51q'),
        l = c('Titq6'),
        m = c('SCvOg'),
        n = c('rbAZM');
    let o;
    var _p = a => {
        var q;
        const [r, s] = g.useState(null !== (q = a.editStyles) && void 0 !== q ? q : {}), [t, u] = g.useState(!1), v = (a, q) => {
            s({
                ...r,
                [a]: q
            });
        };
        return (0, f.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, f.jsx)(h.default, {
                    ...a,
                    editStyles: r
                }),
                (0, f.jsxs)(_q, {
                    children: [
                        (0, f.jsx)(i.default, {
                            ...a
                        }),
                        t ? (0, f.jsx)(m.SellSelector, {
                            ...a,
                            setSoldAmount: a.setSoldAmount,
                            closeSellScreen: () => {
                                u(!1);
                            }
                        }) : (0, f.jsxs)(f.Fragment, {
                            children: [
                                a.description || a.pack ? (0, f.jsx)(n.default, {
                                    ...a
                                }) : null,
                                a.style ? (0, f.jsx)(l.EditStyles, {
                                    style: a.style,
                                    currentStyles: r,
                                    updateEditStyle: v
                                }) : null,
                                (0, f.jsx)(k.default, {
                                    ...a,
                                    editStyles: r,
                                    setToSellScreen: () => {
                                        u(!0);
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    const _q = j.default.div(o || (o = (a => a)`
  padding: 20px 20px 25px 20px;
`));
}), c.register('t9ew9', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('MgONH'),
        j = c('z0fxm'),
        k = c('WrOhL'),
        l = c('BIQwd'),
        m = c('quE27');
    let n, o, p, q = a => a;
    const r = g.lazy(() => c('IexIc'));
    var _s = a => {
        const t = (0, j.rarityToBackground)(a.rarity);
        return (0, f.jsxs)(_t, {
            style: {
                background: t
            },
            children: [
                a.count > 1 ? (0, f.jsx)(l.CountBadge, {
                    style: {
                        right: 20,
                        top: 42,
                        left: 'auto'
                    },
                    children: (0, m.numberWithCommas)(a.count)
                }) : null,
                (0, f.jsxs)(g.Suspense, {
                    fallback: null,
                    children: [
                        (() => {
                            const u = (0, f.jsx)(_u, {
                                style: {
                                    padding: a.type === k.CosmeticType.sticker ? 24 : 8
                                },
                                children: (0, f.jsx)(_v, {
                                    draggable: !1,
                                    src: a.image
                                })
                            });
                            return a.type !== k.CosmeticType.character || a.blockCharacterPreview ? u : (0, f.jsx)(r, {
                                id: a.id.replace('character_', ''),
                                editStyles: a.editStyles,
                                fallback: u
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
}), c.register('BIQwd', function(d, e) {
    a(d.exports, 'GridViewItem', function() {
        return _s;
    }), a(d.exports, 'CountBadge', function() {
        return _y;
    }), a(d.exports, 'EmptyGridViewItem', function() {
        return _t;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('8KqQ+'),
        i = c('MgONH'),
        j = c('t52Ep'),
        k = c('Eh2Wh'),
        l = c('quE27');
    let m, n, o, p, q, r = a => a;
    const _s = a => {
            var t;
            return (0, f.jsxs)(_u, {
                selected: a.selected,
                children: [
                    (0, f.jsx)(_v, {
                        children: (0, f.jsx)(_w, {
                            style: {
                                background: a.background,
                                padding: null !== (t = a.imagePadding) && void 0 !== t ? t : 10
                            },
                            children: (0, f.jsx)(_x, {
                                src: a.image
                            })
                        })
                    }),
                    a.count > 1 ? (0, f.jsx)(_y, {
                        children: (0, l.numberWithCommas)(a.count)
                    }) : null
                ]
            });
        },
        _t = a => (0, f.jsx)(_u, {
            selected: a.selected,
            style: {
                width: a.width,
                cursor: 'pointer'
            },
            onClick: a.onSelect,
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
`), a => a.selected ? '#fdd835' : h.default.White),
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
}), c.register('IexIc', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('Dq3qN').resolve('2lWdt')),
        import('./' + c('Dq3qN').resolve('fKT9H'))
    ]).then(() => c('en+bc'));
}), c.register('Dq3qN', function(d, e) {
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
}), c.register('cbGtm', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('MgONH'),
        i = c('E2AMI26'),
        j = c('Eh2Wh'),
        k = c('GYoVM');
    let l, m, n, o = a => a;
    var _p = a => {
        const {
            name: q,
            type: r,
            rarity: s
        } = a, t = [];
        return t.push((0, k.cosmeticTypeName)(r)), t.push(s), (0, f.jsxs)(_q, {
            children: [
                (0, f.jsx)(_r, {
                    children: q
                }),
                t.length ? (0, f.jsx)(i.default, {
                    direction: 'horizontal',
                    size: 10,
                    wrap: !0,
                    style: {
                        marginTop: 4
                    },
                    children: t.map(q => (0, f.jsx)(_s, {
                        children: q
                    }, a.id + q))
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
}), c.register('OB51q', function(d, e) {
    a(d.exports, 'SellButton', function() {
        return _o;
    }), a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('aPZ+w'),
        h = c('Eh2Wh'),
        i = c('MgONH'),
        j = c('u4s09'),
        k = c('HOIhZ'),
        l = c('YGjrn');
    let m;
    var _n = a => {
        const o = a.callToAction({
                editStyles: a.editStyles
            }),
            p = !!(a.count > 1 && a.sellCost && a.setToSellScreen);
        return o ? (0, f.jsxs)(i.CenteredColumn, {
            className: 'maxAll',
            style: {
                marginTop: 20
            },
            children: [
                (0, f.jsx)(g.default, {
                    type: 'success',
                    customHorizontalPadding: 35,
                    disabled: o.disabled,
                    ariaLabel: o.ariaLabel,
                    onClick: () => {
                        o.onClick();
                    },
                    children: (0, f.jsx)('div', {
                        style: {
                            fontFamily: h.Fonts.FugazOne,
                            textTransform: 'uppercase',
                            fontSize: 16
                        },
                        children: o.text
                    })
                }, `cta-${ o.disabled }}`),
                p ? (0, f.jsx)(_o, {
                    onClick: () => {
                        (0, l.playPackClickSound)(), a.setToSellScreen();
                    },
                    children: 'Sell'
                }) : null
            ]
        }) : null;
    };
    const _o = j.default.div(m || (m = (a => a)`
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
}), c.register('Titq6', function(d, e) {
    a(d.exports, 'EditStyles', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('7vuc+'),
        h = c('E2AMI26');
    const _i = a => (0, f.jsx)('div', {
        className: 'maxWidth',
        style: {
            marginTop: 17
        },
        children: (0, f.jsx)(h.default, {
            className: 'maxWidth',
            direction: 'vertical',
            size: 15,
            children: a.style.categories.map(d => (0, f.jsx)(g.EditStyle, {
                category: d,
                value: a.currentStyles[d.name],
                onChange: c => {
                    a.updateEditStyle(d.name, c);
                }
            }, d.name + '-category'))
        })
    });
}), c.register('7vuc+', function(d, e) {
    a(d.exports, 'EditStyle', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('WrOhL'),
        i = c('u4s09'),
        j = c('E2AMI26'),
        k = c('8fUHS'),
        l = c('Eh2Wh'),
        m = c('YGjrn'),
        n = c('uiTQg'),
        o = c('t52Ep');
    let p, q, r, s, t = a => a;
    const _u = a => {
            const {
                category: v
            } = a, [w, x] = g.useState(!0), y = g.useMemo(() => {
                var z;
                if (!(null === (z = v.options) || void 0 === z ? void 0 : z.length))
                    return;
                const A = v.options.find(v => v.name === a.value);
                return A || v.options[0];
            }, [
                v,
                a.value
            ]), z = g.useMemo(() => {
                if (v.color)
                    return v.color.defaultColor;
            }, [v.color]), A = g.useMemo(() => {
                let B = v.name;
                return y ? `${ B } - ${ y.name }` : B;
            }, [
                v,
                y
            ]);
            return (0, f.jsxs)(_v, {
                children: [
                    (0, f.jsxs)(_w, {
                        onClick: () => {
                            x(a => !a);
                        },
                        children: [
                            (0, f.jsx)(_x, {
                                children: A
                            }),
                            (0, f.jsx)(_y, {
                                children: (0, f.jsx)(o.default, {
                                    name: 'fas fa-caret-' + (w ? 'up' : 'down')
                                })
                            })
                        ]
                    }),
                    w ? a.category.type === h.CosmeticStyleCategoryType.color ? (0, f.jsx)(n.EditStyleColor, {
                        value: null !== (q = a.value) && void 0 !== q ? q : z,
                        onChange: a.onChange
                    }) : (0, f.jsx)(j.default, {
                        direction: 'horizontal',
                        size: 7,
                        wrap: !0,
                        children: v.options.map(w => (0, f.jsx)(k.EditStyleOption, {
                            option: w,
                            selected: w.name === y.name,
                            select: () => {
                                (0, m.playClickSound)(), a.onChange(w.name);
                            }
                        }, w.name + v.name))
                    }) : null
                ]
            });
            var B;
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
}), c.register('8fUHS', function(d, e) {
    a(d.exports, 'EditStyleOption', function() {
        return _l;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('8KqQ+');
    let i, j, k = a => a;
    const _l = a => {
            const {
                option: m
            } = a;
            return (0, f.jsx)(_m, {
                selected: a.selected,
                onClick: a.selected ? void 0 : a.select,
                children: 'color' === m.preview.type ? (0, f.jsx)(_n, {
                    style: {
                        background: `radial-gradient(circle at 13px 13px, ${ m.preview.color }, #000)`
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
`), a => a.selected ? 0.24 : 0.1, a => a.selected ? '#fdd835' : h.default.White, a => a.selected ? 0.24 : 0.17),
        _n = g.default.div(j || (j = k`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`));
}), c.register('uiTQg', function(d, e) {
    a(d.exports, 'EditStyleColor', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('MjmBI'),
        h = c('u4s09');
    let i;
    const _j = a => (0, f.jsx)(_k, {
            children: (0, f.jsx)(g.HexColorPicker, {
                style: {
                    width: '100%'
                },
                color: a.value,
                onChange: d => {
                    a.onChange(d);
                }
            })
        }),
        _k = h.default.div.attrs({
            className: 'maxWidth'
        })(i || (i = (a => a)`
  padding: 25px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`));
}), c.register('MjmBI', function(d, e) {
    a(d.exports, 'HexColorPicker', function() {
        return _M;
    });
    var f = c('O0Kav');

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

    function i(j) {
        var k = (0, f.useRef)(j),
            l = (0, f.useRef)(function(m) {
                k.current && k.current(m);
            });
        return k.current = j, l.current;
    }
    var j = function(k, l, m) {
            return void 0 === l && (l = 0), void 0 === m && (m = 1), k > m ? m : k < l ? l : k;
        },
        k = function(l) {
            return 'touches' in l;
        },
        l = function(m) {
            return m && m.ownerDocument.defaultView || self;
        },
        m = function(n, o, p) {
            var q = n.getBoundingClientRect(),
                r = k(o) ? function(s, t) {
                    for (var u = 0; u < s.length; u++)
                        if (s[u].identifier === t)
                            return s[u];
                    return s[0];
                }(o.touches, p) : o;
            return {
                left: j((r.pageX - (q.left + l(n).pageXOffset)) / q.width),
                top: j((r.pageY - (q.top + l(n).pageYOffset)) / q.height)
            };
        },
        n = function(o) {
            !k(o) && o.preventDefault();
        },
        o = b(f).memo(function(p) {
            var q = p.onMove,
                r = p.onKey,
                s = h(p, [
                    'onMove',
                    'onKey'
                ]),
                t = (0, f.useRef)(null),
                u = i(q),
                v = i(r),
                w = (0, f.useRef)(null),
                x = (0, f.useRef)(!1),
                y = (0, f.useMemo)(function() {
                    var z = function(A) {
                            n(A), (k(A) ? A.touches.length > 0 : A.buttons > 0) && t.current ? u(m(t.current, A, w.current)) : q(!1);
                        },
                        A = function() {
                            return q(!1);
                        };

                    function B(C) {
                        var D = x.current,
                            E = l(t.current),
                            F = C ? E.addEventListener : E.removeEventListener;
                        F(D ? 'touchmove' : 'mousemove', z), F(D ? 'touchend' : 'mouseup', A);
                    }
                    return [
                        function(C) {
                            var D = C.nativeEvent,
                                E = t.current;
                            if (E && (n(D), ! function(F, G) {
                                    return G && !k(F);
                                }(D, x.current) && E)) {
                                if (k(D)) {
                                    x.current = !0;
                                    var F = D.changedTouches || [];
                                    F.length && (w.current = F[0].identifier);
                                }
                                E.focus(), u(m(E, D, w.current)), B(!0);
                            }
                        },
                        function(C) {
                            var D = C.which || C.keyCode;
                            D < 37 || D > 40 || (C.preventDefault(), v({
                                left: 39 === D ? 0.05 : 37 === D ? -0.05 : 0,
                                top: 40 === D ? 0.05 : 38 === D ? -0.05 : 0
                            }));
                        },
                        B
                    ];
                }, [
                    v,
                    u
                ]),
                z = y[0],
                A = y[1],
                B = y[2];
            return (0, f.useEffect)(function() {
                return B;
            }, [B]), b(f).createElement('div', g({}, s, {
                onTouchStart: z,
                onMouseDown: z,
                className: 'react-colorful__interactive',
                ref: t,
                onKeyDown: A,
                tabIndex: 0,
                role: 'slider'
            }));
        }),
        p = function(q) {
            return q.filter(Boolean).join(' ');
        },
        q = function(r) {
            var s = r.color,
                t = r.left,
                u = r.top,
                v = void 0 === u ? 0.5 : u,
                w = p([
                    'react-colorful__pointer',
                    r.className
                ]);
            return b(f).createElement('div', {
                className: w,
                style: {
                    top: 100 * v + '%',
                    left: 100 * t + '%'
                }
            }, b(f).createElement('div', {
                className: 'react-colorful__pointer-fill',
                style: {
                    backgroundColor: s
                }
            }));
        },
        r = function(s, t, u) {
            return void 0 === t && (t = 0), void 0 === u && (u = Math.pow(10, t)), Math.round(u * s) / u;
        },
        s = (Math.PI, function(t) {
            return _A(_t(t));
        }),
        _t = function(u) {
            return '#' === u[0] && (u = u.substring(1)), u.length < 6 ? {
                r: parseInt(u[0] + u[0], 16),
                g: parseInt(u[1] + u[1], 16),
                b: parseInt(u[2] + u[2], 16),
                a: 4 === u.length ? r(parseInt(u[3] + u[3], 16) / 255, 2) : 1
            } : {
                r: parseInt(u.substring(0, 2), 16),
                g: parseInt(u.substring(2, 4), 16),
                b: parseInt(u.substring(4, 6), 16),
                a: 8 === u.length ? r(parseInt(u.substring(6, 8), 16) / 255, 2) : 1
            };
        },
        u = function(v) {
            return _z(_x(v));
        },
        v = function(w) {
            var x = w.s,
                y = w.v,
                z = w.a,
                A = (200 - x) * y / 100;
            return {
                h: r(w.h),
                s: r(A > 0 && A < 200 ? x * y / 100 / (A <= 100 ? A : 200 - A) * 100 : 0),
                l: r(A / 2),
                a: r(z, 2)
            };
        },
        w = function(x) {
            var y = v(x);
            return 'hsl(' + y.h + ', ' + y.s + '%, ' + y.l + '%)';
        },
        _x = function(y) {
            var z = y.h,
                A = y.s,
                B = y.v,
                C = y.a;
            z = z / 360 * 6, A /= 100, B /= 100;
            var D = Math.floor(z),
                E = B * (1 - A),
                F = B * (1 - (z - D) * A),
                G = B * (1 - (1 - z + D) * A),
                H = D % 6;
            return {
                r: r(255 * [
                    B,
                    F,
                    E,
                    E,
                    G,
                    B
                ][H]),
                g: r(255 * [
                    G,
                    B,
                    B,
                    F,
                    E,
                    E
                ][H]),
                b: r(255 * [
                    E,
                    E,
                    G,
                    B,
                    B,
                    F
                ][H]),
                a: r(C, 2)
            };
        },
        y = function(z) {
            var A = z.toString(16);
            return A.length < 2 ? '0' + A : A;
        },
        _z = function(A) {
            var B = A.r,
                C = A.g,
                D = A.b,
                E = A.a,
                F = E < 1 ? y(r(255 * E)) : '';
            return '#' + y(B) + y(C) + y(D) + F;
        },
        _A = function(B) {
            var C = B.r,
                D = B.g,
                E = B.b,
                F = B.a,
                G = Math.max(C, D, E),
                H = G - Math.min(C, D, E),
                I = H ? G === C ? (D - E) / H : G === D ? 2 + (E - C) / H : 4 + (C - D) / H : 0;
            return {
                h: r(60 * (I < 0 ? I + 6 : I)),
                s: r(G ? H / G * 100 : 0),
                v: r(G / 255 * 100),
                a: F
            };
        },
        B = b(f).memo(function(C) {
            var D = C.hue,
                E = C.onChange,
                F = p([
                    'react-colorful__hue',
                    C.className
                ]);
            return b(f).createElement('div', {
                className: F
            }, b(f).createElement(o, {
                onMove: function(G) {
                    E({
                        h: 360 * G.left
                    });
                },
                onKey: function(G) {
                    E({
                        h: j(D + 360 * G.left, 0, 360)
                    });
                },
                'aria-label': 'Hue',
                'aria-valuenow': r(D),
                'aria-valuemax': '360',
                'aria-valuemin': '0'
            }, b(f).createElement(q, {
                className: 'react-colorful__hue-pointer',
                left: D / 360,
                color: w({
                    h: D,
                    s: 100,
                    v: 100,
                    a: 1
                })
            })));
        }),
        C = b(f).memo(function(D) {
            var E = D.hsva,
                F = D.onChange,
                G = {
                    backgroundColor: w({
                        h: E.h,
                        s: 100,
                        v: 100,
                        a: 1
                    })
                };
            return b(f).createElement('div', {
                className: 'react-colorful__saturation',
                style: G
            }, b(f).createElement(o, {
                onMove: function(H) {
                    F({
                        s: 100 * H.left,
                        v: 100 - 100 * H.top
                    });
                },
                onKey: function(H) {
                    F({
                        s: j(E.s + 100 * H.left, 0, 100),
                        v: j(E.v - 100 * H.top, 0, 100)
                    });
                },
                'aria-label': 'Color',
                'aria-valuetext': 'Saturation ' + r(E.s) + '%, Brightness ' + r(E.v) + '%'
            }, b(f).createElement(q, {
                className: 'react-colorful__saturation-pointer',
                top: 1 - E.v / 100,
                left: E.s / 100,
                color: w(E)
            })));
        }),
        D = function(E, F) {
            if (E === F)
                return !0;
            for (var G in E)
                if (E[G] !== F[G])
                    return !1;
            return !0;
        },
        E = function(F, G) {
            return F.toLowerCase() === G.toLowerCase() || D(_t(F), _t(G));
        };

    function F(G, H, I) {
        var J = i(I),
            K = (0, f.useState)(function() {
                return G.toHsva(H);
            }),
            L = K[0],
            M = K[1],
            N = (0, f.useRef)({
                color: H,
                hsva: L
            });
        (0, f.useEffect)(function() {
            if (!G.equal(H, N.current.color)) {
                var O = G.toHsva(H);
                N.current = {
                    hsva: O,
                    color: H
                }, M(O);
            }
        }, [
            H,
            G
        ]), (0, f.useEffect)(function() {
            var O;
            D(L, N.current.hsva) || G.equal(O = G.fromHsva(L), N.current.color) || (N.current = {
                hsva: L,
                color: O
            }, J(O));
        }, [
            L,
            G,
            J
        ]);
        var O = (0, f.useCallback)(function(P) {
            M(function(Q) {
                return Object.assign({}, Q, P);
            });
        }, []);
        return [
            L,
            O
        ];
    }
    var G, H = 'undefined' != typeof window ? f.useLayoutEffect : f.useEffect,
        I = new Map(),
        J = function(K) {
            H(function() {
                var L = K.current ? K.current.ownerDocument : document;
                if (void 0 !== L && !I.has(L)) {
                    var M = L.createElement('style');
                    M.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', I.set(L, M);
                    var N = G || ('undefined' != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                    N && M.setAttribute('nonce', N), L.head.appendChild(M);
                }
            }, []);
        },
        K = function(L) {
            var M = L.className,
                N = L.colorModel,
                O = L.color,
                P = void 0 === O ? N.defaultColor : O,
                Q = L.onChange,
                R = h(L, [
                    'className',
                    'colorModel',
                    'color',
                    'onChange'
                ]),
                S = (0, f.useRef)(null);
            J(S);
            var T = F(N, P, Q),
                U = T[0],
                V = T[1],
                W = p([
                    'react-colorful',
                    M
                ]);
            return b(f).createElement('div', g({}, R, {
                ref: S,
                className: W
            }), b(f).createElement(C, {
                hsva: U,
                onChange: V
            }), b(f).createElement(B, {
                hue: U.h,
                onChange: V,
                className: 'react-colorful__last-control'
            }));
        },
        L = {
            defaultColor: '000',
            toHsva: s,
            fromHsva: function(M) {
                return u({
                    h: M.h,
                    s: M.s,
                    v: M.v,
                    a: 1
                });
            },
            equal: E
        },
        _M = function(N) {
            return b(f).createElement(K, g({}, N, {
                colorModel: L
            }));
        };
}), c.register('SCvOg', function(d, e) {
    a(d.exports, 'SellSelector', function() {
        return _B;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('MgONH'),
        j = c('Eh2Wh'),
        k = c('quE27'),
        l = c('Twsyh'),
        m = c('0UnIU'),
        n = c('aPZ+w'),
        o = c('HOIhZ'),
        p = c('OB51q'),
        q = c('kFQpk'),
        r = c('sPeAY'),
        s = c('YGjrn'),
        t = c('3jaMj'),
        u = c('UaUBz0'),
        v = c('Y8VMd');
    let w, x, y, z, A = a => a;
    const _B = a => {
            const [C, D] = g.useState(!1), [E, F] = g.useState(a.count - 1), {
                closeSellScreen: G
            } = a, H = a.count - 1, I = a => {
                const J = Math.max(1, Math.min(H, a));
                F(J), (0, s.playPackClickSound)();
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
                                        disabled: 1 === E,
                                        onClick: () => {
                                            I(E - 5);
                                        },
                                        children: '-5'
                                    }),
                                    (0, f.jsx)(l.Button, {
                                        disabled: 1 === E,
                                        onClick: () => {
                                            I(E - 1);
                                        },
                                        children: '-1'
                                    }),
                                    (0, f.jsx)(_E, {
                                        children: (0, k.numberWithCommas)(E)
                                    }),
                                    (0, f.jsx)(l.Button, {
                                        disabled: E === H,
                                        onClick: () => {
                                            I(E + 1);
                                        },
                                        children: '+1'
                                    }),
                                    (0, f.jsx)(l.Button, {
                                        disabled: E === H,
                                        onClick: () => {
                                            I(E + 5);
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
                                            (0, k.numberWithCommas)(E),
                                            ' ',
                                            (0, f.jsx)('span', {
                                                style: {
                                                    fontWeight: j.FontWeights.Bold,
                                                    textDecoration: 'underline'
                                                },
                                                children: a.name
                                            }),
                                            ' ',
                                            'for'
                                        ]
                                    }),
                                    (0, f.jsx)(m.default, {
                                        size: 12,
                                        amount: a.sellCost * E
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
                            C || ((0, t.playSound)({
                                path: (0, u.default)('cosmos/sold.mp3'),
                                volume: 0.6
                            }), D(!0), (0, r.Request)({
                                url: '/api/cosmos/sell',
                                data: {
                                    cosmeticId: a.id,
                                    count: E
                                },
                                success: C => {
                                    a.setSoldAmount(C.amount), (0, q.refetchOwnedCosmetics)(), (0, v.invalidateCosmosBasics)();
                                },
                                error: a => {
                                    (0, k.throwMessageError)({
                                        e: a,
                                        default: {
                                            title: 'Error selling this item',
                                            content: 'Please try again later'
                                        }
                                    });
                                },
                                both: () => {
                                    D(!1);
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
                            (0, s.playPackClickSound)(), G();
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
}), c.register('Twsyh', function(d, e) {
    a(d.exports, 'CountSelector', function() {
        return _k;
    }), a(d.exports, 'Button', function() {
        return _l;
    });
    var f = c('gRbUn'),
        g = c('u4s09');
    c('O0Kav');
    var h = c('E2AMI26'),
        i = c('YGjrn');
    let j;
    const _k = a => {
            const l = l => {
                const m = Math.max(1, Math.min(25, l));
                a.setCount(m), (0, i.playPackClickSound)();
            };
            return (0, f.jsxs)(h.default, {
                size: 6,
                style: {
                    marginTop: 10
                },
                children: [
                    (0, f.jsx)(_l, {
                        disabled: 1 === a.count,
                        onClick: () => {
                            l(a.count - 1);
                        },
                        children: '-1'
                    }),
                    (0, f.jsx)(_l, {
                        disabled: 25 === a.count,
                        onClick: () => {
                            l(a.count + 1);
                        },
                        children: '+1'
                    }),
                    (0, f.jsx)(_l, {
                        disabled: 25 === a.count,
                        onClick: () => {
                            l(a.count + 5);
                        },
                        children: '+5'
                    })
                ]
            });
        },
        _l = g.default.div(j || (j = (a => a)`
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
`), a => a.disabled ? 0.5 : 1, a => a.disabled ? 'not-allowed' : 'pointer', a => !a.disabled && '&:hover {\n    transform: scale(1.05);\n    background: rgba(255, 255, 255, 0.15);\n  }');
}), c.register('kFQpk', function(d, e) {
    a(d.exports, 'invalidateOwnedCosmetics', function() {
        return _j;
    }), a(d.exports, 'refetchOwnedCosmetics', function() {
        return _k;
    }), a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('GmO9j'),
        g = c('9IJbB'),
        h = c('quE27');
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
}), c.register('rbAZM', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('Eh2Wh'),
        i = c('MgONH'),
        j = c('t52Ep');
    let k, l, m, n = a => a;
    const o = a => (0, f.jsxs)(_r, {
        style: a.style,
        children: [
            (0, f.jsx)('div', {
                style: {
                    marginRight: 15,
                    flexShrink: 0
                },
                children: (0, f.jsx)(j.default, {
                    name: a.icon
                })
            }),
            (0, f.jsx)('div', {
                children: a.children
            })
        ]
    });
    var _p = a => (0, f.jsx)(f.Fragment, {
        children: (0, f.jsxs)(_q, {
            children: [
                a.description ? (0, f.jsx)(o, {
                    icon: 'fad fa-sparkles',
                    children: a.description
                }) : null,
                a.pack ? (0, f.jsxs)(o, {
                    icon: 'fad fa-box',
                    style: {
                        marginTop: a.description ? 10 : 0
                    },
                    children: [
                        'Part of the',
                        ' ',
                        (0, f.jsx)('span', {
                            style: {
                                fontWeight: h.FontWeights.Bold,
                                color: '#ffecb3'
                            },
                            children: a.pack
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
}), c.register('9JK54', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('t52Ep');
    let i;
    var _j = () => (0, f.jsx)(_k, {
        children: (0, f.jsx)(h.default, {
            name: 'fas fa-times'
        })
    });
    const _k = g.default.div(i || (i = (a => a)`
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.17s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`));
}), c.register('qIsX/', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('tqJRW'),
        h = c('t9ew9'),
        i = c('OB51q'),
        j = c('J4CaO'),
        k = c('u4s09'),
        l = c('e75GL'),
        m = c('WrOhL'),
        n = c('YGjrn');
    let o;
    var _p = a => {
        const q = a.type !== m.CosmeticType.sticker;
        return (0, f.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, f.jsx)(h.default, {
                    ...a,
                    editStyles: {}
                }),
                (0, f.jsxs)(g.Bottom, {
                    className: 'flex-center flex-column',
                    children: [
                        (0, f.jsx)(j.default, {
                            ...a
                        }),
                        (0, f.jsx)(i.default, {
                            ...a,
                            callToAction: () => {
                                const r = q ? 'Equip' : 'Close';
                                return {
                                    text: r,
                                    ariaLabel: r,
                                    onClick: () => {
                                        (0, n.playClickSound)(), q ? (0, l.selectCosmetic)({
                                            cosmeticId: a.id,
                                            cosmeticType: a.type,
                                            onSuccess: () => {
                                                a.onCosmeticSelectionChanged && a.onCosmeticSelectionChanged(), a.close();
                                            }
                                        }) : a.close();
                                    }
                                };
                            }
                        }),
                        q ? (0, f.jsx)(_q, {
                            onClick: a.close,
                            children: 'Close'
                        }) : null
                    ]
                })
            ]
        });
    };
    const _q = k.default.div(o || (o = (a => a)`
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
}), c.register('J4CaO', function(d, e) {
    a(d.exports, 'Container', function() {
        return _r;
    }), a(d.exports, 'Name', function() {
        return _s;
    }), a(d.exports, 'Purchased', function() {
        return _t;
    }), a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('Eh2Wh'),
        i = c('9rEO42'),
        j = c('quE27'),
        k = c('lKjHC');
    let l, m, n, o = a => a;
    const p = {
        angle: 90,
        spread: 70,
        startVelocity: 60,
        elementCount: 100,
        decay: 0.87
    };
    var _q = a => {
        const [r, s] = (0, j.useBoolean)(!1);
        return (0, k.useDidMount)(s), (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(_s, {
                    children: a.name
                }),
                (0, f.jsx)(b(i), {
                    active: r,
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
}), c.register('e75GL', function(d, e) {
    a(d.exports, 'selectCosmetic', function() {
        return _h;
    });
    var f = c('quE27'),
        g = c('Y8VMd');
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
}), c.register('a+Qty', function(d, e) {
    a(d.exports, 'SoldScreen', function() {
        return _r;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('t9ew9'),
        h = c('tqJRW'),
        i = c('J4CaO'),
        j = c('OB51q'),
        k = c('YGjrn'),
        l = c('u4s09'),
        m = c('0UnIU'),
        n = c('Eh2Wh');
    let o, p, q = a => a;
    const _r = a => (0, f.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, f.jsx)(g.default, {
                    ...a,
                    editStyles: {}
                }),
                (0, f.jsxs)(h.Bottom, {
                    className: 'flex-center flex-column',
                    children: [
                        (0, f.jsxs)(i.Container, {
                            children: [
                                (0, f.jsx)(i.Name, {
                                    children: a.name
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
                                        amount: a.soldAmount
                                    })
                                ]
                            })
                        }),
                        (0, f.jsx)(j.default, {
                            ...a,
                            callToAction: () => {
                                const s = 'Close';
                                return {
                                    text: s,
                                    ariaLabel: s,
                                    onClick: () => {
                                        (0, k.playClickSound)(), a.close();
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