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
a.register('54XAm', function(b, c) {
    _b(b.exports, 'rarityToColor', function() {
        return _g;
    }), _b(b.exports, 'rarityToBackground', function() {
        return _h;
    });
    var d = a('sHRDd'),
        e = a('Jn87d'),
        f = a('RxgVI');
    const _g = _b => _b === f.CosmeticRarity.common ? e.default.rarities.common : _b === f.CosmeticRarity.uncommon ? e.default.rarities.uncommon : _b === f.CosmeticRarity.rare ? e.default.rarities.rare : _b === f.CosmeticRarity.epic ? e.default.rarities.epic : _b === f.CosmeticRarity.legendary ? e.default.rarities.legendary : _b === f.CosmeticRarity.mythic ? e.default.rarities.mythic : d.default.White,
        _h = _b => `radial-gradient(circle, rgba(255,255,255,1) 0%, ${ _g(_b) } 100%)`;
}), a.register('Jn87d', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        rarities: {
            common: '#606060',
            uncommon: 'rgb(6 143 0)',
            rare: 'rgb(8 97 190)',
            epic: 'rgb(53 6 146)',
            legendary: '#ba5605',
            mythic: '#cba638'
        }
    };
}), a.register('D50le', function(b, c) {
    _b(b.exports, 'cosmeticTypeName', function() {
        return _f;
    });
    var d = a('Mmd0d21'),
        e = a('RxgVI');
    const _f = _b => _b === e.CosmeticType.character ? d.default.character : _b === e.CosmeticType.sticker ? d.default.sticker : _b === e.CosmeticType.trail ? d.default.trail : 'Cosmetic';
}), a.register('bnNtv', function(b, c) {
    _b(b.exports, 'playClickSound', function() {
        return _g;
    }), _b(b.exports, 'playPackClickSound', function() {
        return _h;
    });
    var d = a('fe6E3'),
        e = a('2Xvuf'),
        f = a('07pQo');
    const _g = () => {
            (0, f.playSound)({
                path: (0, e.default)('cosmos/pop.mp3'),
                volume: 0.4
            });
        },
        _h = () => {
            (0, f.playSound)({
                path: (0, e.default)(`cosmos/packButton${ (0, d.random)(1, 2) }.mp3`),
                volume: 0.4
            });
        };
}), a.register('OzXoU', function(b, c) {
    _b(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('gdLd9');
    var _g = _b => {
        const [h, i] = e.useState(!0), {
            open: j,
            close: k
        } = _b;
        e.useEffect(() => {
            _b.open && i(!1);
        }, [j]);
        return !j && h ? null : (0, d.jsx)(f.default, {
            ..._b,
            open: j,
            close: k,
            afterClose: () => {
                i(!0);
            }
        });
    };
}), a.register('gdLd9', function(b, c) {
    _b(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('YRlpt'),
        h = a('sHRDd'),
        i = a('Axq+p'),
        j = a('Okc1U'),
        k = a('L6zjz'),
        l = a('/bpdY'),
        m = a('uioP/');
    let n;
    var _o = _b => {
        const [p, q] = e.useState(0);
        return (0, d.jsxs)(f.default, {
            theme: {
                token: {
                    colorText: h.default.White,
                    colorBgBase: '#453267'
                }
            },
            children: [
                (0, d.jsx)(_p, {}),
                (0, d.jsx)(g.default, {
                    open: _b.open,
                    onCancel: _b.close,
                    afterClose: _b.afterClose,
                    closeIcon: (0, d.jsx)(k.default, {}),
                    footer: null,
                    className: 'cosmos-preview-modal',
                    children: p ? (0, d.jsx)(m.SoldScreen, {
                        ..._b,
                        soldAmount: p
                    }) : _b.purchased ? (0, d.jsx)(l.default, {
                        ..._b
                    }) : (0, d.jsx)(j.default, {
                        ..._b,
                        setSoldAmount: q
                    })
                })
            ]
        });
    };
    const _p = (0, i.createGlobalStyle)(n || (n = (_b => _b)`
  .cosmos-preview-modal > .ant-modal-content {
    border-radius: 10px !important;
    overflow: hidden;
    padding: 0px !important;
  }
`));
}), a.register('Okc1U', function(b, c) {
    _b(b.exports, 'Bottom', function() {
        return _o;
    }), _b(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('cH/Et'),
        g = a('FXbmS'),
        h = a('Axq+p'),
        i = a('0lq5+'),
        j = a('p4KeO'),
        k = a('8HI2i'),
        l = a('+tlgU');
    let m;
    var _n = _b => {
        var o;
        const [p, q] = e.useState(null !== (o = _b.editStyles) && void 0 !== o ? o : {}), [r, s] = e.useState(!1), t = (_b, o) => {
            q({
                ...p,
                [_b]: o
            });
        };
        return (0, d.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, d.jsx)(f.default, {
                    ..._b,
                    editStyles: p
                }),
                (0, d.jsxs)(_o, {
                    children: [
                        (0, d.jsx)(g.default, {
                            ..._b
                        }),
                        r ? (0, d.jsx)(k.SellSelector, {
                            ..._b,
                            setSoldAmount: _b.setSoldAmount,
                            closeSellScreen: () => {
                                s(!1);
                            }
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [
                                _b.description || _b.pack ? (0, d.jsx)(l.default, {
                                    ..._b
                                }) : null,
                                _b.style ? (0, d.jsx)(j.EditStyles, {
                                    style: _b.style,
                                    currentStyles: p,
                                    updateEditStyle: t
                                }) : null,
                                (0, d.jsx)(i.default, {
                                    ..._b,
                                    editStyles: p,
                                    setToSellScreen: () => {
                                        s(!0);
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    const _o = h.default.div(m || (m = (_b => _b)`
  padding: 20px 20px 25px 20px;
`));
}), a.register('cH/Et', function(b, c) {
    _b(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('0HHAH'),
        h = a('54XAm'),
        i = a('RxgVI'),
        j = a('rSOD9'),
        k = a('PMl60');
    let l, m, n, o = _b => _b;
    const p = e.lazy(() => a('IDEqP'));
    var _q = _b => {
        const r = (0, h.rarityToBackground)(_b.rarity);
        return (0, d.jsxs)(_r, {
            style: {
                background: r
            },
            children: [
                _b.count > 1 ? (0, d.jsx)(j.CountBadge, {
                    style: {
                        right: 20,
                        top: 42,
                        left: 'auto'
                    },
                    children: (0, k.numberWithCommas)(_b.count)
                }) : null,
                (0, d.jsxs)(e.Suspense, {
                    fallback: null,
                    children: [
                        (() => {
                            const s = (0, d.jsx)(_s, {
                                style: {
                                    padding: _b.type === i.CosmeticType.sticker ? 24 : 8
                                },
                                children: (0, d.jsx)(_t, {
                                    draggable: !1,
                                    src: _b.image
                                })
                            });
                            return _b.type !== i.CosmeticType.character || _b.blockCharacterPreview ? s : (0, d.jsx)(p, {
                                id: _b.id.replace('character_', ''),
                                editStyles: _b.editStyles,
                                fallback: s
                            });
                        })(),
                        ' '
                    ]
                })
            ]
        });
    };
    const _r = f.default.div.attrs({
            className: 'maxWidth'
        })(l || (l = o`
  height: 150px;
  overflow: hidden;
  position: relative;
`)),
        _s = (0, f.default)(g.Centered).attrs({
            className: 'maxAll'
        })(m || (m = o``)),
        _t = f.default.img(n || (n = o`
  max-height: 100%;
  max-width: 100%;
`));
}), a.register('rSOD9', function(b, c) {
    _b(b.exports, 'GridViewItem', function() {
        return _q;
    }), _b(b.exports, 'CountBadge', function() {
        return _w;
    }), _b(b.exports, 'EmptyGridViewItem', function() {
        return _r;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd'),
        g = a('0HHAH'),
        h = a('9R7cy'),
        i = a('b5kvC'),
        j = a('PMl60');
    let k, l, m, n, o, p = _b => _b;
    const _q = _b => {
            var r;
            return (0, d.jsxs)(_s, {
                selected: _b.selected,
                children: [
                    (0, d.jsx)(_t, {
                        children: (0, d.jsx)(_u, {
                            style: {
                                background: _b.background,
                                padding: null !== (r = _b.imagePadding) && void 0 !== r ? r : 10
                            },
                            children: (0, d.jsx)(_v, {
                                src: _b.image
                            })
                        })
                    }),
                    _b.count > 1 ? (0, d.jsx)(_w, {
                        children: (0, j.numberWithCommas)(_b.count)
                    }) : null
                ]
            });
        },
        _r = _b => (0, d.jsx)(_s, {
            selected: _b.selected,
            style: {
                width: _b.width,
                cursor: 'pointer'
            },
            onClick: _b.onSelect,
            children: (0, d.jsx)(_t, {
                children: (0, d.jsx)(_u, {
                    style: {
                        background: 'radial-gradient( circle, rgba(78,77,77,1) 0%, rgba(32,32,32,1) 100% )',
                        fontSize: 42,
                        color: 'rgba(255,255,255,0.5)'
                    },
                    children: (0, d.jsx)(h.default, {
                        name: 'fal fa-times'
                    })
                })
            })
        }),
        _s = e.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = p`
  height: 140px;
  border: 4px solid;
  border-color: ${ 0 };
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`), _b => _b.selected ? '#fdd835' : f.default.White),
        _t = e.default.div.attrs({
            className: 'maxAll'
        })(l || (l = p`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`)),
        _u = (0, e.default)(g.Centered).attrs({
            className: 'maxAll'
        })(m || (m = p``)),
        _v = e.default.img(n || (n = p`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`)),
        _w = e.default.div.attrs({
            className: 'flex-center'
        })(o || (o = p`
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
`), f.default.White, i.FontWeights.Bold);
}), a.register('IDEqP', function(_b, c) {
    _b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('2lWdt')),
        import('./' + a('HmN9A').resolve('fKT9H'))
    ]).then(() => a('silyI'));
}), a.register('HmN9A', function(b, c) {
    var d, e;
    _f(b.exports, 'register', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _f(b.exports, 'resolve', function() {
        return e;
    }, function(_f) {
        return e = _f;
    });
    var f = {};
    d = function(g) {
        for (var h = Object.keys(g), i = 0; i < h.length; i++)
            f[h[i]] = g[h[i]];
    }, e = function(g) {
        var h = f[g];
        if (null == h)
            throw new Error('Could not resolve bundle with id ' + g);
        return h;
    };
}), a.register('FXbmS', function(b, c) {
    _z(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('0HHAH'),
        g = a('cvto726'),
        h = a('b5kvC'),
        i = a('D50le');
    let j, k, l, m = _z => _z;
    var _n = _z => {
        const {
            name: o,
            type: p,
            rarity: q
        } = _z, r = [];
        return r.push((0, i.cosmeticTypeName)(p)), r.push(q), (0, d.jsxs)(_o, {
            children: [
                (0, d.jsx)(_p, {
                    children: o
                }),
                r.length ? (0, d.jsx)(g.default, {
                    direction: 'horizontal',
                    size: 10,
                    wrap: !0,
                    style: {
                        marginTop: 4
                    },
                    children: r.map(o => (0, d.jsx)(_q, {
                        children: o
                    }, _z.id + o))
                }) : null
            ]
        });
    };
    const _o = (0, e.default)(f.CenteredColumn).attrs({
            className: 'maxWidth'
        })(j || (j = m`
  font-family: ${ 0 };
  text-transform: uppercase;
`), h.Fonts.FugazOne),
        _p = e.default.div(k || (k = m`
  font-size: 36px;
  font-weight: ${ 0 };
  text-align: center;
`), h.FontWeights.Bold),
        _q = e.default.div(l || (l = m`
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
`), h.Fonts.FugazOne);
}), a.register('0lq5+', function(b, c) {
    _z(b.exports, 'SellButton', function() {
        return _m;
    }), _z(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('led8j'),
        f = a('b5kvC'),
        g = a('0HHAH'),
        h = a('Axq+p'),
        i = a('vShe/'),
        j = a('bnNtv');
    let k;
    var _l = _z => {
        const m = _z.callToAction({
                editStyles: _z.editStyles
            }),
            n = !!(_z.count > 1 && _z.sellCost && _z.setToSellScreen);
        return m ? (0, d.jsxs)(g.CenteredColumn, {
            className: 'maxAll',
            style: {
                marginTop: 20
            },
            children: [
                (0, d.jsx)(e.default, {
                    type: 'success',
                    customHorizontalPadding: 35,
                    disabled: m.disabled,
                    ariaLabel: m.ariaLabel,
                    onClick: () => {
                        m.onClick();
                    },
                    children: (0, d.jsx)('div', {
                        style: {
                            fontFamily: f.Fonts.FugazOne,
                            textTransform: 'uppercase',
                            fontSize: 16
                        },
                        children: m.text
                    })
                }, `cta-${ m.disabled }}`),
                n ? (0, d.jsx)(_m, {
                    onClick: () => {
                        (0, j.playPackClickSound)(), _z.setToSellScreen();
                    },
                    children: 'Sell'
                }) : null
            ]
        }) : null;
    };
    const _m = h.default.div(k || (k = (_z => _z)`
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
`), i.default.Yellow);
}), a.register('p4KeO', function(b, c) {
    _z(b.exports, 'EditStyles', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('5W/2T'),
        f = a('cvto726');
    const _g = _z => (0, d.jsx)('div', {
        className: 'maxWidth',
        style: {
            marginTop: 17
        },
        children: (0, d.jsx)(f.default, {
            className: 'maxWidth',
            direction: 'vertical',
            size: 15,
            children: _z.style.categories.map(b => (0, d.jsx)(e.EditStyle, {
                category: b,
                value: _z.currentStyles[b.name],
                onChange: a => {
                    _z.updateEditStyle(b.name, a);
                }
            }, b.name + '-category'))
        })
    });
}), a.register('5W/2T', function(b, c) {
    _z(b.exports, 'EditStyle', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('RxgVI'),
        g = a('Axq+p'),
        h = a('cvto726'),
        i = a('+jUgq'),
        j = a('b5kvC'),
        k = a('bnNtv'),
        l = a('yiDfN'),
        m = a('9R7cy');
    let n, o, p, q, r = _z => _z;
    const _s = _z => {
            const {
                category: t
            } = _z, [u, v] = e.useState(!0), w = e.useMemo(() => {
                var x;
                if (!(null === (x = t.options) || void 0 === x ? void 0 : x.length))
                    return;
                const y = t.options.find(t => t.name === _z.value);
                return y || t.options[0];
            }, [
                t,
                _z.value
            ]), x = e.useMemo(() => {
                if (t.color)
                    return t.color.defaultColor;
            }, [t.color]), y = e.useMemo(() => {
                let _z = t.name;
                return w ? `${ _z } - ${ w.name }` : _z;
            }, [
                t,
                w
            ]);
            return (0, d.jsxs)(_t, {
                children: [
                    (0, d.jsxs)(_u, {
                        onClick: () => {
                            v(_f => !_f);
                        },
                        children: [
                            (0, d.jsx)(_v, {
                                children: y
                            }),
                            (0, d.jsx)(_w, {
                                children: (0, d.jsx)(m.default, {
                                    name: 'fas fa-caret-' + (u ? 'up' : 'down')
                                })
                            })
                        ]
                    }),
                    u ? _f.category.type === f.CosmeticStyleCategoryType.color ? (0, d.jsx)(l.EditStyleColor, {
                        value: null !== (o = _f.value) && void 0 !== o ? o : x,
                        onChange: _f.onChange
                    }) : (0, d.jsx)(h.default, {
                        direction: 'horizontal',
                        size: 7,
                        wrap: !0,
                        children: t.options.map(u => (0, d.jsx)(i.EditStyleOption, {
                            option: u,
                            selected: u.name === w.name,
                            select: () => {
                                (0, k.playClickSound)(), _f.onChange(u.name);
                            }
                        }, u.name + t.name))
                    }) : null
                ]
            });
            var z;
        },
        _t = g.default.div.attrs({
            className: 'maxWidth'
        })(n || (n = r``)),
        _u = g.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(o || (o = r`
  gap: 10px;
  cursor: pointer;
  margin-bottom: 4px;
`)),
        _v = g.default.div(p || (p = r`
  font-family: ${ 0 };
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
`), j.Fonts.FugazOne),
        _w = g.default.div(q || (q = r`
  font-size: 16px;
  opacity: 0.9;
`));
}), a.register('+jUgq', function(b, c) {
    _f(b.exports, 'EditStyleOption', function() {
        return _j;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd');
    let g, h, i = _f => _f;
    const _j = _f => {
            const {
                option: k
            } = _f;
            return (0, d.jsx)(_k, {
                selected: _f.selected,
                onClick: _f.selected ? void 0 : _f.select,
                children: 'color' === k.preview.type ? (0, d.jsx)(_l, {
                    style: {
                        background: `radial-gradient(circle at 13px 13px, ${ k.preview.color }, #000)`
                    }
                }) : null
            });
        },
        _k = e.default.div.attrs({
            className: 'flex-center'
        })(g || (g = i`
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
`), _f => _f.selected ? 0.24 : 0.1, _f => _f.selected ? '#fdd835' : f.default.White, _f => _f.selected ? 0.24 : 0.17),
        _l = e.default.div(h || (h = i`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`));
}), a.register('yiDfN', function(b, c) {
    _f(b.exports, 'EditStyleColor', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('g8XFG'),
        f = a('Axq+p');
    let g;
    const _h = _f => (0, d.jsx)(_i, {
            children: (0, d.jsx)(e.HexColorPicker, {
                style: {
                    width: '100%'
                },
                color: _f.value,
                onChange: b => {
                    _f.onChange(b);
                }
            })
        }),
        _i = f.default.div.attrs({
            className: 'maxWidth'
        })(g || (g = (_f => _f)`
  padding: 25px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`));
}), a.register('g8XFG', function(b, c) {
    _f(b.exports, 'HexColorPicker', function() {
        return _G;
    });
    var d = a('LEQ5w');

    function e() {
        return (e = Object.assign || function(_f) {
            for (var g = 1; g < arguments.length; g++) {
                var h = arguments[g];
                for (var i in h)
                    Object.prototype.hasOwnProperty.call(h, i) && (_f[i] = h[i]);
            }
            return _f;
        }).apply(this, arguments);
    }

    function e(f, g) {
        if (null == f)
            return {};
        var h, i, j = {},
            k = Object.keys(f);
        for (i = 0; i < k.length; i++)
            g.indexOf(h = k[i]) >= 0 || (j[h] = f[h]);
        return j;
    }

    function e(f) {
        var g = (0, d.useRef)(f),
            h = (0, d.useRef)(function(i) {
                g.current && g.current(i);
            });
        return g.current = f, h.current;
    }
    var e = function(f, g, h) {
            return void 0 === g && (g = 0), void 0 === h && (h = 1), f > h ? h : f < g ? g : f;
        },
        f = function(g) {
            return 'touches' in g;
        },
        g = function(h) {
            return h && h.ownerDocument.defaultView || self;
        },
        h = function(i, j, k) {
            var l = i.getBoundingClientRect(),
                m = f(j) ? function(n, o) {
                    for (var p = 0; p < n.length; p++)
                        if (n[p].identifier === o)
                            return n[p];
                    return n[0];
                }(j.touches, k) : j;
            return {
                left: e((m.pageX - (l.left + g(i).pageXOffset)) / l.width),
                top: e((m.pageY - (l.top + g(i).pageYOffset)) / l.height)
            };
        },
        i = function(j) {
            !f(j) && j.preventDefault();
        },
        j = _v(d).memo(function(k) {
            var l = k.onMove,
                m = k.onKey,
                n = _r(k, [
                    'onMove',
                    'onKey'
                ]),
                o = (0, d.useRef)(null),
                p = _B(l),
                q = _B(m),
                r = (0, d.useRef)(null),
                s = (0, d.useRef)(!1),
                t = (0, d.useMemo)(function() {
                    var u = function(v) {
                            i(v), (f(v) ? v.touches.length > 0 : v.buttons > 0) && o.current ? p(h(o.current, v, r.current)) : l(!1);
                        },
                        _v = function() {
                            return l(!1);
                        };

                    function w(x) {
                        var y = s.current,
                            z = g(o.current),
                            A = x ? z.addEventListener : z.removeEventListener;
                        A(y ? 'touchmove' : 'mousemove', u), A(y ? 'touchend' : 'mouseup', _v);
                    }
                    return [
                        function(w) {
                            var x = w.nativeEvent,
                                y = o.current;
                            if (y && (i(x), ! function(z, A) {
                                    return A && !f(z);
                                }(x, s.current) && y)) {
                                if (f(x)) {
                                    s.current = !0;
                                    var z = x.changedTouches || [];
                                    z.length && (r.current = z[0].identifier);
                                }
                                y.focus(), p(h(y, x, r.current)), l(!0);
                            }
                        },
                        function(w) {
                            var x = w.which || w.keyCode;
                            x < 37 || x > 40 || (w.preventDefault(), q({
                                left: 39 === x ? 0.05 : 37 === x ? -0.05 : 0,
                                top: 40 === x ? 0.05 : 38 === x ? -0.05 : 0
                            }));
                        },
                        l
                    ];
                }, [
                    q,
                    p
                ]),
                u = t[0],
                v = t[1],
                w = t[2];
            return (0, d.useEffect)(function() {
                return w;
            }, [w]), _o(d).createElement('div', _q({}, n, {
                onTouchStart: u,
                onMouseDown: u,
                className: 'react-colorful__interactive',
                ref: o,
                onKeyDown: v,
                tabIndex: 0,
                role: 'slider'
            }));
        }),
        k = function(l) {
            return l.filter(Boolean).join(' ');
        },
        l = function(m) {
            var n = m.color,
                o = m.left,
                p = m.top,
                _q = void 0 === p ? 0.5 : p,
                _r = k([
                    'react-colorful__pointer',
                    m.className
                ]);
            return _o(d).createElement('div', {
                className: _r,
                style: {
                    top: 100 * _q + '%',
                    left: 100 * o + '%'
                }
            }, _o(d).createElement('div', {
                className: 'react-colorful__pointer-fill',
                style: {
                    backgroundColor: n
                }
            }));
        },
        m = function(n, _o, p) {
            return void 0 === _o && (_o = 0), void 0 === p && (p = Math.pow(10, _o)), Math.round(p * n) / p;
        },
        n = (Math.PI, function(o) {
            return _v(_o(o));
        }),
        _o = function(p) {
            return '#' === p[0] && (p = p.substring(1)), p.length < 6 ? {
                r: parseInt(p[0] + p[0], 16),
                g: parseInt(p[1] + p[1], 16),
                b: parseInt(p[2] + p[2], 16),
                a: 4 === p.length ? m(parseInt(p[3] + p[3], 16) / 255, 2) : 1
            } : {
                r: parseInt(p.substring(0, 2), 16),
                g: parseInt(p.substring(2, 4), 16),
                b: parseInt(p.substring(4, 6), 16),
                a: 8 === p.length ? m(parseInt(p.substring(6, 8), 16) / 255, 2) : 1
            };
        },
        p = function(q) {
            return _u(_s(q));
        },
        q = function(r) {
            var s = r.s,
                t = r.v,
                u = r.a,
                v = (200 - s) * t / 100;
            return {
                h: m(r.h),
                s: m(v > 0 && v < 200 ? s * t / 100 / (v <= 100 ? v : 200 - v) * 100 : 0),
                l: m(v / 2),
                a: m(u, 2)
            };
        },
        r = function(s) {
            var t = q(s);
            return 'hsl(' + t.h + ', ' + t.s + '%, ' + t.l + '%)';
        },
        _s = function(t) {
            var u = t.h,
                v = t.s,
                w = t.v,
                x = t.a;
            u = u / 360 * 6, v /= 100, w /= 100;
            var y = Math.floor(u),
                z = w * (1 - v),
                A = w * (1 - (u - y) * v),
                _B = w * (1 - (1 - u + y) * v),
                C = y % 6;
            return {
                r: m(255 * [
                    w,
                    A,
                    z,
                    z,
                    _B,
                    w
                ][C]),
                g: m(255 * [
                    _B,
                    w,
                    w,
                    A,
                    z,
                    z
                ][C]),
                b: m(255 * [
                    z,
                    z,
                    _B,
                    w,
                    w,
                    A
                ][C]),
                a: m(x, 2)
            };
        },
        t = function(u) {
            var v = u.toString(16);
            return v.length < 2 ? '0' + v : v;
        },
        _u = function(v) {
            var w = v.r,
                x = v.g,
                y = v.b,
                z = v.a,
                A = z < 1 ? t(m(255 * z)) : '';
            return '#' + t(w) + t(x) + t(y) + A;
        },
        _v = function(w) {
            var x = w.r,
                y = w.g,
                z = w.b,
                A = w.a,
                B = Math.max(x, y, z),
                C = B - Math.min(x, y, z),
                D = C ? B === x ? (y - z) / C : B === y ? 2 + (z - x) / C : 4 + (x - y) / C : 0;
            return {
                h: m(60 * (D < 0 ? D + 6 : D)),
                s: m(B ? C / B * 100 : 0),
                v: m(B / 255 * 100),
                a: A
            };
        },
        w = _A(d).memo(function(x) {
            var y = x.hue,
                z = x.onChange,
                A = k([
                    'react-colorful__hue',
                    x.className
                ]);
            return _A(d).createElement('div', {
                className: A
            }, _A(d).createElement(j, {
                onMove: function(B) {
                    z({
                        h: 360 * B.left
                    });
                },
                onKey: function(B) {
                    z({
                        h: e(y + 360 * B.left, 0, 360)
                    });
                },
                'aria-label': 'Hue',
                'aria-valuenow': m(y),
                'aria-valuemax': '360',
                'aria-valuemin': '0'
            }, _A(d).createElement(l, {
                className: 'react-colorful__hue-pointer',
                left: y / 360,
                color: r({
                    h: y,
                    s: 100,
                    v: 100,
                    a: 1
                })
            })));
        }),
        x = _A(d).memo(function(y) {
            var z = y.hsva,
                A = y.onChange,
                B = {
                    backgroundColor: r({
                        h: z.h,
                        s: 100,
                        v: 100,
                        a: 1
                    })
                };
            return _A(d).createElement('div', {
                className: 'react-colorful__saturation',
                style: B
            }, _A(d).createElement(j, {
                onMove: function(C) {
                    A({
                        s: 100 * C.left,
                        v: 100 - 100 * C.top
                    });
                },
                onKey: function(C) {
                    A({
                        s: e(z.s + 100 * C.left, 0, 100),
                        v: e(z.v - 100 * C.top, 0, 100)
                    });
                },
                'aria-label': 'Color',
                'aria-valuetext': 'Saturation ' + m(z.s) + '%, Brightness ' + m(z.v) + '%'
            }, _A(d).createElement(l, {
                className: 'react-colorful__saturation-pointer',
                top: 1 - z.v / 100,
                left: z.s / 100,
                color: r(z)
            })));
        }),
        y = function(z, _A) {
            if (z === _A)
                return !0;
            for (var B in z)
                if (z[B] !== _A[B])
                    return !1;
            return !0;
        },
        z = function(A, B) {
            return A.toLowerCase() === B.toLowerCase() || y(_o(A), _o(B));
        };

    function A(B, C, D) {
        var E = _J(D),
            F = (0, d.useState)(function() {
                return B.toHsva(C);
            }),
            G = F[0],
            H = F[1],
            I = (0, d.useRef)({
                color: C,
                hsva: G
            });
        (0, d.useEffect)(function() {
            if (!B.equal(C, I.current.color)) {
                var J = B.toHsva(C);
                I.current = {
                    hsva: J,
                    color: C
                }, H(J);
            }
        }, [
            C,
            B
        ]), (0, d.useEffect)(function() {
            var J;
            y(G, I.current.hsva) || B.equal(J = B.fromHsva(G), I.current.color) || (I.current = {
                hsva: G,
                color: J
            }, E(J));
        }, [
            G,
            B,
            E
        ]);
        var J = (0, d.useCallback)(function(K) {
            H(function(L) {
                return Object.assign({}, L, K);
            });
        }, []);
        return [
            G,
            J
        ];
    }
    var A, B = 'undefined' != typeof window ? d.useLayoutEffect : d.useEffect,
        C = new Map(),
        D = function(E) {
            B(function() {
                var F = E.current ? E.current.ownerDocument : document;
                if (void 0 !== F && !C.has(F)) {
                    var G = F.createElement('style');
                    G.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', C.set(F, G);
                    var H = A || ('undefined' != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                    H && G.setAttribute('nonce', H), F.head.appendChild(G);
                }
            }, []);
        },
        E = function(F) {
            var G = F.className,
                H = F.colorModel,
                I = F.color,
                _J = void 0 === I ? H.defaultColor : I,
                K = F.onChange,
                L = _g(F, [
                    'className',
                    'colorModel',
                    'color',
                    'onChange'
                ]),
                M = (0, d.useRef)(null);
            D(M);
            var N = N(H, _J, K),
                O = N[0],
                P = N[1],
                Q = k([
                    'react-colorful',
                    G
                ]);
            return _b(d).createElement('div', _f({}, L, {
                ref: M,
                className: Q
            }), _b(d).createElement(x, {
                hsva: O,
                onChange: P
            }), _b(d).createElement(w, {
                hue: O.h,
                onChange: P,
                className: 'react-colorful__last-control'
            }));
        },
        F = {
            defaultColor: '000',
            toHsva: n,
            fromHsva: function(G) {
                return p({
                    h: G.h,
                    s: G.s,
                    v: G.v,
                    a: 1
                });
            },
            equal: z
        },
        _G = function(H) {
            return _b(d).createElement(E, _f({}, H, {
                colorModel: F
            }));
        };
}), a.register('8HI2i', function(_b, c) {
    _g(_b.exports, 'SellSelector', function() {
        return _z;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        _f = a('Axq+p'),
        _g = a('0HHAH'),
        h = a('b5kvC'),
        i = a('PMl60'),
        j = a('jelfZ'),
        k = a('koZ//'),
        l = a('led8j'),
        m = a('vShe/'),
        n = a('0lq5+'),
        o = a('TOFTW'),
        p = a('w0a3U'),
        q = a('bnNtv'),
        r = a('07pQo'),
        s = a('2Xvuf'),
        t = a('AX3TM');
    let u, v, w, x, y = _g => _g;
    const _z = _g => {
            const [A, B] = e.useState(!1), [C, D] = e.useState(_g.count - 1), {
                closeSellScreen: E
            } = _g, F = _g.count - 1, G = _g => {
                const H = Math.max(1, Math.min(F, _g));
                D(H), (0, q.playPackClickSound)();
            };
            return (0, d.jsxs)(_A, {
                children: [
                    (0, d.jsxs)(_B, {
                        children: [
                            (0, d.jsxs)(_g.Centered, {
                                className: 'maxWidth',
                                style: {
                                    gap: 6
                                },
                                children: [
                                    (0, d.jsx)(j.Button, {
                                        disabled: 1 === C,
                                        onClick: () => {
                                            G(C - 5);
                                        },
                                        children: '-5'
                                    }),
                                    (0, d.jsx)(j.Button, {
                                        disabled: 1 === C,
                                        onClick: () => {
                                            G(C - 1);
                                        },
                                        children: '-1'
                                    }),
                                    (0, d.jsx)(_C, {
                                        children: (0, i.numberWithCommas)(C)
                                    }),
                                    (0, d.jsx)(j.Button, {
                                        disabled: C === F,
                                        onClick: () => {
                                            G(C + 1);
                                        },
                                        children: '+1'
                                    }),
                                    (0, d.jsx)(j.Button, {
                                        disabled: C === F,
                                        onClick: () => {
                                            G(C + 5);
                                        },
                                        children: '+5'
                                    })
                                ]
                            }),
                            (0, d.jsxs)(_D, {
                                children: [
                                    (0, d.jsxs)('span', {
                                        children: [
                                            'Selling ',
                                            (0, i.numberWithCommas)(C),
                                            ' ',
                                            (0, d.jsx)('span', {
                                                style: {
                                                    fontWeight: h.FontWeights.Bold,
                                                    textDecoration: 'underline'
                                                },
                                                children: _g.name
                                            }),
                                            ' ',
                                            'for'
                                        ]
                                    }),
                                    (0, d.jsx)(k.default, {
                                        size: 12,
                                        amount: _g.sellCost * C
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, d.jsx)(l.default, {
                        type: 'success',
                        customHorizontalPadding: 35,
                        ariaLabel: 'Sell',
                        onClick: () => {
                            A || ((0, r.playSound)({
                                path: (0, s.default)('cosmos/sold.mp3'),
                                volume: 0.6
                            }), B(!0), (0, p.Request)({
                                url: '/api/cosmos/sell',
                                data: {
                                    cosmeticId: _g.id,
                                    count: C
                                },
                                success: A => {
                                    _g.setSoldAmount(A.amount), (0, o.refetchOwnedCosmetics)(), (0, t.invalidateCosmosBasics)();
                                },
                                error: _g => {
                                    (0, i.throwMessageError)({
                                        e: _g,
                                        default: {
                                            title: 'Error selling this item',
                                            content: 'Please try again later'
                                        }
                                    });
                                },
                                both: () => {
                                    B(!1);
                                }
                            }));
                        },
                        style: {
                            marginTop: 20
                        },
                        children: (0, d.jsx)('div', {
                            style: {
                                fontFamily: h.Fonts.FugazOne,
                                textTransform: 'uppercase',
                                fontSize: 16
                            },
                            children: 'Sell'
                        })
                    }),
                    (0, d.jsx)(n.SellButton, {
                        onClick: () => {
                            (0, q.playPackClickSound)(), E();
                        },
                        children: 'Go back'
                    })
                ]
            });
        },
        _A = (0, _f.default)(_g.CenteredColumn).attrs({
            className: 'maxWidth'
        })(u || (u = y``)),
        _B = (0, _f.default)(_g.CenteredColumn).attrs({
            className: 'maxWidth'
        })(v || (v = y`
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-top: 19px;
`)),
        _C = _f.default.div(w || (w = y`
  font-size: 24px;
  font-family: ${ 0 };
  line-height: 1;
  border: 2px solid ${ 0 };
  border-radius: 4px;
  padding: 10px 30px;
  padding-top: 13px;
  margin: 0px 10px;
  background: rgba(255, 255, 255, 0.05);
`), h.Fonts.FugazOne, m.default.Yellow),
        _D = _f.default.div.attrs({
            className: 'flex wrap'
        })(x || (x = y`
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 14px;
  gap: 6px;
`));
}), a.register('jelfZ', function(b, c) {
    _g(b.exports, 'CountSelector', function() {
        return _i;
    }), _g(b.exports, 'Button', function() {
        return _j;
    });
    var d = a('0hzx+'),
        e = a('Axq+p');
    a('LEQ5w');
    var f = a('cvto726'),
        g = a('bnNtv');
    let h;
    const _i = _g => {
            const j = j => {
                const k = Math.max(1, Math.min(25, j));
                _g.setCount(k), (0, g.playPackClickSound)();
            };
            return (0, d.jsxs)(f.default, {
                size: 6,
                style: {
                    marginTop: 10
                },
                children: [
                    (0, d.jsx)(_j, {
                        disabled: 1 === _g.count,
                        onClick: () => {
                            j(_g.count - 1);
                        },
                        children: '-1'
                    }),
                    (0, d.jsx)(_j, {
                        disabled: 25 === _g.count,
                        onClick: () => {
                            j(_g.count + 1);
                        },
                        children: '+1'
                    }),
                    (0, d.jsx)(_j, {
                        disabled: 25 === _g.count,
                        onClick: () => {
                            j(_g.count + 5);
                        },
                        children: '+5'
                    })
                ]
            });
        },
        _j = e.default.div(h || (h = (_g => _g)`
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
`), _g => _g.disabled ? 0.5 : 1, _g => _g.disabled ? 'not-allowed' : 'pointer', _g => !_g.disabled && '&:hover {\n    transform: scale(1.05);\n    background: rgba(255, 255, 255, 0.15);\n  }');
}), a.register('TOFTW', function(b, c) {
    _g(b.exports, 'invalidateOwnedCosmetics', function() {
        return _h;
    }), _g(b.exports, 'refetchOwnedCosmetics', function() {
        return _i;
    }), _g(b.exports, 'default', function() {
        return _j;
    });
    var d = a('UapK50'),
        e = a('ACpZs'),
        f = a('PMl60');
    const g = ['cosmos-owned-cosmetics'],
        _h = () => {
            e.default.invalidateQueries(g);
        },
        _i = () => {
            e.default.refetchQueries(g);
        };
    var _j = () => (0, d.useQuery)(g, () => (0, f.requestAsPromise)({
        url: '/api/cosmos/owned-cosmetics'
    }));
}), a.register('+tlgU', function(b, c) {
    _g(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC'),
        g = a('0HHAH'),
        h = a('9R7cy');
    let i, j, k, l = _g => _g;
    const m = _g => (0, d.jsxs)(_p, {
        style: _g.style,
        children: [
            (0, d.jsx)('div', {
                style: {
                    marginRight: 15,
                    flexShrink: 0
                },
                children: (0, d.jsx)(h.default, {
                    name: _g.icon
                })
            }),
            (0, d.jsx)('div', {
                children: _g.children
            })
        ]
    });
    var _n = _g => (0, d.jsx)(d.Fragment, {
        children: (0, d.jsxs)(_o, {
            children: [
                _g.description ? (0, d.jsx)(m, {
                    icon: 'fad fa-sparkles',
                    children: _g.description
                }) : null,
                _g.pack ? (0, d.jsxs)(m, {
                    icon: 'fad fa-box',
                    style: {
                        marginTop: _g.description ? 10 : 0
                    },
                    children: [
                        'Part of the',
                        ' ',
                        (0, d.jsx)('span', {
                            style: {
                                fontWeight: f.FontWeights.Bold,
                                color: '#ffecb3'
                            },
                            children: _g.pack
                        })
                    ]
                }) : null
            ]
        })
    });
    const _o = e.default.div(i || (i = l`
  margin-top: 19px;
`)),
        _p = (0, e.default)(g.VerticallyCentered)(j || (j = l`
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
    e.default.div(k || (k = l``));
}), a.register('L6zjz', function(b, c) {
    _g(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('9R7cy');
    let g;
    var _h = () => (0, d.jsx)(_i, {
        children: (0, d.jsx)(f.default, {
            name: 'fas fa-times'
        })
    });
    const _i = e.default.div(g || (g = (_g => _g)`
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.17s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`));
}), a.register('/bpdY', function(b, c) {
    _g(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Okc1U'),
        f = a('cH/Et'),
        g = a('0lq5+'),
        h = a('8VBfg'),
        i = a('Axq+p'),
        j = a('G2el2'),
        k = a('RxgVI'),
        l = a('bnNtv');
    let m;
    var _n = _g => {
        const o = _g.type !== k.CosmeticType.sticker;
        return (0, d.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, d.jsx)(f.default, {
                    ..._g,
                    editStyles: {}
                }),
                (0, d.jsxs)(e.Bottom, {
                    className: 'flex-center flex-column',
                    children: [
                        (0, d.jsx)(h.default, {
                            ..._g
                        }),
                        (0, d.jsx)(g.default, {
                            ..._g,
                            callToAction: () => {
                                const p = o ? 'Equip' : 'Close';
                                return {
                                    text: p,
                                    ariaLabel: p,
                                    onClick: () => {
                                        (0, l.playClickSound)(), o ? (0, j.selectCosmetic)({
                                            cosmeticId: _g.id,
                                            cosmeticType: _g.type,
                                            onSuccess: () => {
                                                _g.onCosmeticSelectionChanged && _g.onCosmeticSelectionChanged(), _g.close();
                                            }
                                        }) : _g.close();
                                    }
                                };
                            }
                        }),
                        o ? (0, d.jsx)(_o, {
                            onClick: _g.close,
                            children: 'Close'
                        }) : null
                    ]
                })
            ]
        });
    };
    const _o = i.default.div(m || (m = (_g => _g)`
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
}), a.register('8VBfg', function(b, c) {
    _g(b.exports, 'Container', function() {
        return _p;
    }), _g(b.exports, 'Name', function() {
        return _q;
    }), _g(b.exports, 'Purchased', function() {
        return _r;
    }), _g(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC'),
        g = a('FgYUV'),
        h = a('PMl60'),
        i = a('+i8ep');
    let j, k, l, m = _g => _g;
    const n = {
        angle: 90,
        spread: 70,
        startVelocity: 60,
        elementCount: 100,
        decay: 0.87
    };
    var _o = _g => {
        const [p, q] = (0, h.useBoolean)(!1);
        return (0, i.useDidMount)(q), (0, d.jsxs)(_p, {
            children: [
                (0, d.jsx)(_q, {
                    children: _g.name
                }),
                (0, d.jsx)(_b(g), {
                    active: p,
                    config: n
                }),
                (0, d.jsx)(_r, {
                    children: 'Purchased!'
                })
            ]
        });
    };
    const _p = e.default.div.attrs({
            className: 'flex-center flex-column animated bounceIn'
        })(j || (j = m`
  text-align: center;
  font-family: ${ 0 };
  text-transform: uppercase;
  animation-duration: 0.6s;
`), f.Fonts.FugazOne),
        _q = e.default.div(k || (k = m`
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`)),
        _r = e.default.div(l || (l = m`
  font-size: 48px;
  line-height: 1;
`));
}), a.register('G2el2', function(_b, c) {
    _g(_b.exports, 'selectCosmetic', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('AX3TM');
    const _f = ({
        cosmeticId: _g,
        cosmeticType: h,
        editStyles: i,
        onSuccess: j
    }) => {
        const k = {
            cosmeticId: _g,
            cosmeticType: h
        };
        i && Object.keys(i).length > 0 && (k.editStyles = i), (0, d.request)({
            url: '/api/cosmos/select-cosmetic',
            data: k,
            success: () => {
                (0, e.invalidateCosmosBasics)(), j();
            }
        });
    };
}), a.register('uioP/', function(b, c) {
    e(b.exports, 'SoldScreen', function() {
        return _p;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('cH/Et'),
        f = a('Okc1U'),
        g = a('8VBfg'),
        h = a('0lq5+'),
        i = a('bnNtv'),
        j = a('Axq+p'),
        k = a('koZ//'),
        l = a('b5kvC');
    let m, n, o = e => e;
    const _p = e => (0, d.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, d.jsx)(e.default, {
                    ...e,
                    editStyles: {}
                }),
                (0, d.jsxs)(f.Bottom, {
                    className: 'flex-center flex-column',
                    children: [
                        (0, d.jsxs)(g.Container, {
                            children: [
                                (0, d.jsx)(g.Name, {
                                    children: e.name
                                }),
                                (0, d.jsx)(g.Purchased, {
                                    children: 'Sold!'
                                })
                            ]
                        }),
                        (0, d.jsx)(_q, {
                            children: (0, d.jsxs)(_r, {
                                children: [
                                    (0, d.jsx)('span', {
                                        style: {
                                            marginTop: 3,
                                            marginRight: 8
                                        },
                                        children: 'You earned'
                                    }),
                                    (0, d.jsx)(k.default, {
                                        size: 14,
                                        amount: e.soldAmount
                                    })
                                ]
                            })
                        }),
                        (0, d.jsx)(h.default, {
                            ...e,
                            callToAction: () => {
                                const q = 'Close';
                                return {
                                    text: q,
                                    ariaLabel: q,
                                    onClick: () => {
                                        (0, i.playClickSound)(), e.close();
                                    }
                                };
                            }
                        })
                    ]
                })
            ]
        }),
        _q = j.default.div.attrs({
            className: 'maxWidth flex-center'
        })(m || (m = o`
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: 14px;
  line-height: 1;
  font-family: ${ 0 };
  text-transform: uppercase;
  margin-top: 12px;
`), l.Fonts.FugazOne),
        _r = j.default.div.attrs({
            className: 'flex'
        })(n || (n = o``));
});