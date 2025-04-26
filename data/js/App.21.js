function a(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('SmomX', function(b, d) {
    a(b.exports, 'rarityToColor', function() {
        return g;
    }), a(b.exports, 'rarityToBackground', function() {
        return h;
    });
    var d = c('lmfrI'),
        e = c('FNF0/'),
        f = c('hoTkY');
    const g = a => a === f.CosmeticRarity.common ? e.default.rarities.common : a === f.CosmeticRarity.uncommon ? e.default.rarities.uncommon : a === f.CosmeticRarity.rare ? e.default.rarities.rare : a === f.CosmeticRarity.epic ? e.default.rarities.epic : a === f.CosmeticRarity.legendary ? e.default.rarities.legendary : a === f.CosmeticRarity.mythic ? e.default.rarities.mythic : d.default.White,
        h = a => `radial-gradient(circle, rgba(255,255,255,1) 0%, ${ g(a) } 100%)`;
}), c.register('FNF0/', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        rarities: {
            common: '#606060',
            uncommon: 'rgb(6 143 0)',
            rare: 'rgb(8 97 190)',
            epic: 'rgb(53 6 146)',
            legendary: '#ba5605',
            mythic: '#cba638'
        }
    };
}), c.register('Zb18q', function(b, j) {
    a(b.exports, 'cosmeticTypeName', function() {
        return f;
    });
    var d = c('y8lS825'),
        e = c('hoTkY');
    const f = a => a === e.CosmeticType.character ? d.default.character : a === e.CosmeticType.sticker ? d.default.sticker : a === e.CosmeticType.trail ? d.default.trail : 'Cosmetic';
}), c.register('SeRL7', function(b, j) {
    a(b.exports, 'playClickSound', function() {
        return g;
    }), a(b.exports, 'playPackClickSound', function() {
        return h;
    });
    var d = c('4/f+U'),
        e = c('JJQ0+'),
        f = c('OlpXx');
    const g = () => {
            (0, f.playSound)({
                path: (0, e.default)('cosmos/pop.mp3'),
                volume: 0.4
            });
        },
        h = () => {
            (0, f.playSound)({
                path: (0, e.default)(`cosmos/packButton${ (0, d.random)(1, 2) }.mp3`),
                volume: 0.4
            });
        };
}), c.register('QIGeq', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('WVh9M');
    var g = a => {
        const [h, i] = e.useState(!0), {
            open: j,
            close: k
        } = l;
        e.useEffect(() => {
            l.open && i(!1);
        }, [j]);
        return !j && h ? null : (0, d.jsx)(f.default, {
            ...l,
            open: j,
            close: k,
            afterClose: () => {
                i(!0);
            }
        });
    };
}), c.register('WVh9M', function(b, q) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('cR5QE'),
        h = c('lmfrI'),
        i = c('h99Nu'),
        j = c('8PwLt'),
        k = c('iH6oQ'),
        l = c('lOyB1'),
        m = c('QO3Yh');
    let n;
    var o = a => {
        const [p, q] = e.useState(0);
        return (0, d.jsxs)(f.default, {
            theme: {
                token: {
                    colorText: h.default.White,
                    colorBgBase: '#453267'
                }
            },
            children: [
                (0, d.jsx)(p, {}),
                (0, d.jsx)(g.default, {
                    open: a.open,
                    onCancel: a.close,
                    afterClose: a.afterClose,
                    closeIcon: (0, d.jsx)(k.default, {}),
                    footer: null,
                    className: 'cosmos-preview-modal',
                    children: p ? (0, d.jsx)(m.SoldScreen, {
                        ...a,
                        soldAmount: p
                    }) : a.purchased ? (0, d.jsx)(l.default, {
                        ...a
                    }) : (0, d.jsx)(j.default, {
                        ...a,
                        setSoldAmount: q
                    })
                })
            ]
        });
    };
    const p = (0, i.createGlobalStyle)(n || (n = (a => a)`
  .cosmos-preview-modal > .ant-modal-content {
    border-radius: 10px !important;
    overflow: hidden;
    padding: 0px !important;
  }
`));
}), c.register('8PwLt', function(b, q) {
    a(b.exports, 'Bottom', function() {
        return o;
    }), a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('PYx44'),
        g = c('pioHL'),
        h = c('h99Nu'),
        i = c('lquUM'),
        j = c('huW1W'),
        k = c('I3V4C'),
        l = c('pJQZ/');
    let m;
    var n = a => {
        var o;
        const [p, q] = e.useState(null !== (o = a.editStyles) && void 0 !== o ? o : {}), [r, s] = e.useState(!1), t = (a, o) => {
            q({
                ...p,
                [a]: o
            });
        };
        return (0, d.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, d.jsx)(f.default, {
                    ...a,
                    editStyles: p
                }),
                (0, d.jsxs)(o, {
                    children: [
                        (0, d.jsx)(g.default, {
                            ...a
                        }),
                        r ? (0, d.jsx)(k.SellSelector, {
                            ...a,
                            setSoldAmount: a.setSoldAmount,
                            closeSellScreen: () => {
                                s(!1);
                            }
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [
                                a.description || a.pack ? (0, d.jsx)(l.default, {
                                    ...a
                                }) : null,
                                a.style ? (0, d.jsx)(j.EditStyles, {
                                    style: a.style,
                                    currentStyles: p,
                                    updateEditStyle: t
                                }) : null,
                                (0, d.jsx)(i.default, {
                                    ...a,
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
    const o = h.default.div(m || (m = (a => a)`
  padding: 20px 20px 25px 20px;
`));
}), c.register('PYx44', function(b, d) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('YimJ0'),
        h = c('SmomX'),
        i = c('hoTkY'),
        j = c('/w77y'),
        k = c('PjB0f');
    let l, m, n, o = a => a;
    const p = e.lazy(() => c('1jjnv'));
    var q = a => {
        const r = (0, h.rarityToBackground)(a.rarity);
        return (0, d.jsxs)(r, {
            style: {
                background: r
            },
            children: [
                a.count > 1 ? (0, d.jsx)(j.CountBadge, {
                    style: {
                        right: 20,
                        top: 42,
                        left: 'auto'
                    },
                    children: (0, k.numberWithCommas)(a.count)
                }) : null,
                (0, d.jsxs)(e.Suspense, {
                    fallback: null,
                    children: [
                        (() => {
                            const s = (0, d.jsx)(s, {
                                style: {
                                    padding: a.type === i.CosmeticType.sticker ? 24 : 8
                                },
                                children: (0, d.jsx)(t, {
                                    draggable: !1,
                                    src: a.image
                                })
                            });
                            return a.type !== i.CosmeticType.character || a.blockCharacterPreview ? s : (0, d.jsx)(p, {
                                id: a.id.replace('character_', ''),
                                editStyles: a.editStyles,
                                fallback: s
                            });
                        })(),
                        ' '
                    ]
                })
            ]
        });
    };
    const r = f.default.div.attrs({
            className: 'maxWidth'
        })(l || (l = o`
  height: 150px;
  overflow: hidden;
  position: relative;
`)),
        s = (0, f.default)(g.Centered).attrs({
            className: 'maxAll'
        })(m || (m = o``)),
        t = f.default.img(n || (n = o`
  max-height: 100%;
  max-width: 100%;
`));
}), c.register('/w77y', function(b, d) {
    a(b.exports, 'GridViewItem', function() {
        return q;
    }), a(b.exports, 'CountBadge', function() {
        return w;
    }), a(b.exports, 'EmptyGridViewItem', function() {
        return r;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('lmfrI'),
        g = c('YimJ0'),
        h = c('iMnBi'),
        i = c('gSUVO'),
        j = c('PjB0f');
    let k, l, m, n, o, p = a => a;
    const q = a => {
            var r;
            return (0, d.jsxs)(s, {
                selected: a.selected,
                children: [
                    (0, d.jsx)(t, {
                        children: (0, d.jsx)(u, {
                            style: {
                                background: a.background,
                                padding: null !== (r = a.imagePadding) && void 0 !== r ? r : 10
                            },
                            children: (0, d.jsx)(v, {
                                src: a.image
                            })
                        })
                    }),
                    a.count > 1 ? (0, d.jsx)(w, {
                        children: (0, j.numberWithCommas)(a.count)
                    }) : null
                ]
            });
        },
        r = a => (0, d.jsx)(s, {
            selected: a.selected,
            style: {
                width: a.width,
                cursor: 'pointer'
            },
            onClick: a.onSelect,
            children: (0, d.jsx)(t, {
                children: (0, d.jsx)(u, {
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
        s = e.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = p`
  height: 140px;
  border: 4px solid;
  border-color: ${ 0 };
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`), a => a.selected ? '#fdd835' : f.default.White),
        t = e.default.div.attrs({
            className: 'maxAll'
        })(l || (l = p`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`)),
        u = (0, e.default)(g.Centered).attrs({
            className: 'maxAll'
        })(m || (m = p``)),
        v = e.default.img(n || (n = p`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`)),
        w = e.default.div.attrs({
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
}), c.register('1jjnv', function(a, b) {
    a.exports = Promise.all([
        import('./' + c('tIOy4').resolve('fFyZG')),
        import('./' + c('tIOy4').resolve('fKT9H'))
    ]).then(() => c('Du15/'));
}), c.register('tIOy4', function(b, c) {
    var d, e;
    a(b.exports, 'register', function() {
        return d;
    }, function(a) {
        return d = a;
    }), a(b.exports, 'resolve', function() {
        return e;
    }, function(a) {
        return e = a;
    });
    var f = {};
    d = function(a) {
        for (var g = Object.keys(a), h = 0; h < g.length; h++)
            f[g[h]] = a[g[h]];
    }, e = function(a) {
        var g = f[a];
        if (null == g)
            throw new Error('Could not resolve bundle with id ' + a);
        return g;
    };
}), c.register('pioHL', function(b, q) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('YimJ0'),
        g = c('5nJMd26'),
        h = c('gSUVO'),
        i = c('Zb18q');
    let j, k, l, m = a => a;
    var n = a => {
        const {
            name: o,
            type: p,
            rarity: q
        } = r, s = [];
        return s.push((0, i.cosmeticTypeName)(p)), s.push(q), (0, d.jsxs)(o, {
            children: [
                (0, d.jsx)(p, {
                    children: o
                }),
                s.length ? (0, d.jsx)(g.default, {
                    direction: 'horizontal',
                    size: 10,
                    wrap: !0,
                    style: {
                        marginTop: 4
                    },
                    children: s.map(o => (0, d.jsx)(q, {
                        children: o
                    }, r.id + o))
                }) : null
            ]
        });
    };
    const o = (0, e.default)(f.CenteredColumn).attrs({
            className: 'maxWidth'
        })(j || (j = m`
  font-family: ${ 0 };
  text-transform: uppercase;
`), h.Fonts.FugazOne),
        p = e.default.div(k || (k = m`
  font-size: 36px;
  font-weight: ${ 0 };
  text-align: center;
`), h.FontWeights.Bold),
        q = e.default.div(l || (l = m`
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
}), c.register('lquUM', function(b, w) {
    a(b.exports, 'SellButton', function() {
        return m;
    }), a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('Dog9Y'),
        f = c('gSUVO'),
        g = c('YimJ0'),
        h = c('h99Nu'),
        i = c('S/jX4'),
        j = c('SeRL7');
    let k;
    var l = a => {
        const m = a.callToAction({
                editStyles: a.editStyles
            }),
            n = !!(a.count > 1 && a.sellCost && a.setToSellScreen);
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
                n ? (0, d.jsx)(m, {
                    onClick: () => {
                        (0, j.playPackClickSound)(), a.setToSellScreen();
                    },
                    children: 'Sell'
                }) : null
            ]
        }) : null;
    };
    const m = h.default.div(k || (k = (a => a)`
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
}), c.register('huW1W', function(b, w) {
    a(b.exports, 'EditStyles', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('71ftZ'),
        f = c('5nJMd26');
    const g = a => (0, d.jsx)('div', {
        className: 'maxWidth',
        style: {
            marginTop: 17
        },
        children: (0, d.jsx)(f.default, {
            className: 'maxWidth',
            direction: 'vertical',
            size: 15,
            children: a.style.categories.map(b => (0, d.jsx)(e.EditStyle, {
                category: b,
                value: a.currentStyles[b.name],
                onChange: c => {
                    a.updateEditStyle(b.name, c);
                }
            }, b.name + '-category'))
        })
    });
}), c.register('71ftZ', function(b, w) {
    a(b.exports, 'EditStyle', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('hoTkY'),
        g = c('h99Nu'),
        h = c('5nJMd26'),
        i = c('9ksWd'),
        j = c('gSUVO'),
        k = c('SeRL7'),
        l = c('lXcDq'),
        m = c('iMnBi');
    let n, o, p, q, r = a => a;
    const s = a => {
            const {
                category: t
            } = u, [v, w] = e.useState(!0), x = e.useMemo(() => {
                var y;
                if (!(null === (y = t.options) || void 0 === y ? void 0 : y.length))
                    return;
                const z = t.options.find(t => t.name === u.value);
                return z || t.options[0];
            }, [
                t,
                u.value
            ]), y = e.useMemo(() => {
                if (t.color)
                    return t.color.defaultColor;
            }, [t.color]), z = e.useMemo(() => {
                let A = t.name;
                return x ? `${ A } - ${ x.name }` : A;
            }, [
                t,
                x
            ]);
            return (0, d.jsxs)(t, {
                children: [
                    (0, d.jsxs)(u, {
                        onClick: () => {
                            w(u => !u);
                        },
                        children: [
                            (0, d.jsx)(v, {
                                children: z
                            }),
                            (0, d.jsx)(w, {
                                children: (0, d.jsx)(m.default, {
                                    name: 'fas fa-caret-' + (v ? 'up' : 'down')
                                })
                            })
                        ]
                    }),
                    v ? u.category.type === f.CosmeticStyleCategoryType.color ? (0, d.jsx)(l.EditStyleColor, {
                        value: null !== (o = u.value) && void 0 !== o ? o : y,
                        onChange: u.onChange
                    }) : (0, d.jsx)(h.default, {
                        direction: 'horizontal',
                        size: 7,
                        wrap: !0,
                        children: t.options.map(v => (0, d.jsx)(i.EditStyleOption, {
                            option: v,
                            selected: v.name === x.name,
                            select: () => {
                                (0, k.playClickSound)(), u.onChange(v.name);
                            }
                        }, v.name + t.name))
                    }) : null
                ]
            });
            var A;
        },
        t = g.default.div.attrs({
            className: 'maxWidth'
        })(n || (n = r``)),
        u = g.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(o || (o = r`
  gap: 10px;
  cursor: pointer;
  margin-bottom: 4px;
`)),
        v = g.default.div(p || (p = r`
  font-family: ${ 0 };
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
`), j.Fonts.FugazOne),
        w = g.default.div(q || (q = r`
  font-size: 16px;
  opacity: 0.9;
`));
}), c.register('9ksWd', function(b, h) {
    a(b.exports, 'EditStyleOption', function() {
        return j;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('lmfrI');
    let g, h, i = a => a;
    const j = a => {
            const {
                option: k
            } = l;
            return (0, d.jsx)(k, {
                selected: l.selected,
                onClick: l.selected ? void 0 : l.select,
                children: 'color' === k.preview.type ? (0, d.jsx)(l, {
                    style: {
                        background: `radial-gradient(circle at 13px 13px, ${ k.preview.color }, #000)`
                    }
                }) : null
            });
        },
        k = e.default.div.attrs({
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
`), a => a.selected ? 0.24 : 0.1, a => a.selected ? '#fdd835' : f.default.White, a => a.selected ? 0.24 : 0.17),
        l = e.default.div(h || (h = i`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`));
}), c.register('lXcDq', function(b, h) {
    a(b.exports, 'EditStyleColor', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('knI8E'),
        f = c('h99Nu');
    let g;
    const h = a => (0, d.jsx)(i, {
            children: (0, d.jsx)(e.HexColorPicker, {
                style: {
                    width: '100%'
                },
                color: a.value,
                onChange: b => {
                    a.onChange(b);
                }
            })
        }),
        i = f.default.div.attrs({
            className: 'maxWidth'
        })(g || (g = (a => a)`
  padding: 25px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`));
}), c.register('knI8E', function(h, i) {
    a(h.exports, 'HexColorPicker', function() {
        return K;
    });
    var d = c('uPP4W');

    function e() {
        return (e = Object.assign || function(a) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (a[h] = g[h]);
            }
            return a;
        }).apply(this, arguments);
    }

    function f(a, b) {
        if (null == a)
            return {};
        var g, h, i = {},
            j = Object.keys(a);
        for (h = 0; h < j.length; h++)
            b.indexOf(g = j[h]) >= 0 || (i[g] = a[g]);
        return i;
    }

    function g(a) {
        var h = (0, d.useRef)(a),
            i = (0, d.useRef)(function(a) {
                h.current && h.current(a);
            });
        return h.current = a, i.current;
    }
    var h = function(a, b, c) {
            return void 0 === b && (b = 0), void 0 === c && (c = 1), a > c ? c : a < b ? b : a;
        },
        i = function(a) {
            return 'touches' in a;
        },
        j = function(a) {
            return a && a.ownerDocument.defaultView || self;
        },
        k = function(a, b, c) {
            var l = a.getBoundingClientRect(),
                m = i(b) ? function(a, b) {
                    for (var n = 0; n < a.length; n++)
                        if (a[n].identifier === b)
                            return a[n];
                    return a[0];
                }(b.touches, c) : b;
            return {
                left: h((m.pageX - (l.left + j(a).pageXOffset)) / l.width),
                top: h((m.pageY - (l.top + j(a).pageYOffset)) / l.height)
            };
        },
        l = function(a) {
            !i(a) && a.preventDefault();
        },
        m = b(d).memo(function(a) {
            var n = a.onMove,
                o = a.onKey,
                p = f(a, [
                    'onMove',
                    'onKey'
                ]),
                q = (0, d.useRef)(null),
                r = g(n),
                s = g(o),
                t = (0, d.useRef)(null),
                u = (0, d.useRef)(!1),
                v = (0, d.useMemo)(function() {
                    var w = function(w) {
                            l(w), (i(w) ? w.touches.length > 0 : w.buttons > 0) && q.current ? r(k(q.current, w, t.current)) : n(!1);
                        },
                        x = function() {
                            return n(!1);
                        };

                    function y(y) {
                        var z = u.current,
                            A = j(q.current),
                            B = y ? A.addEventListener : A.removeEventListener;
                        B(z ? 'touchmove' : 'mousemove', w), B(z ? 'touchend' : 'mouseup', x);
                    }
                    return [
                        function(w) {
                            var z = w.nativeEvent,
                                A = q.current;
                            if (A && (l(z), ! function(w, z) {
                                    return z && !i(w);
                                }(z, u.current) && A)) {
                                if (i(z)) {
                                    u.current = !0;
                                    var B = z.changedTouches || [];
                                    B.length && (t.current = B[0].identifier);
                                }
                                A.focus(), r(k(A, z, t.current)), y(!0);
                            }
                        },
                        function(w) {
                            var z = w.which || w.keyCode;
                            z < 37 || z > 40 || (w.preventDefault(), s({
                                left: 39 === z ? 0.05 : 37 === z ? -0.05 : 0,
                                top: 40 === z ? 0.05 : 38 === z ? -0.05 : 0
                            }));
                        },
                        y
                    ];
                }, [
                    s,
                    r
                ]),
                w = v[0],
                x = v[1],
                y = v[2];
            return (0, d.useEffect)(function() {
                return y;
            }, [y]), b(d).createElement('div', e({}, p, {
                onTouchStart: w,
                onMouseDown: w,
                className: 'react-colorful__interactive',
                ref: q,
                onKeyDown: x,
                tabIndex: 0,
                role: 'slider'
            }));
        }),
        n = function(a) {
            return a.filter(Boolean).join(' ');
        },
        o = function(a) {
            var p = a.color,
                q = a.left,
                r = a.top,
                s = void 0 === r ? 0.5 : r,
                t = n([
                    'react-colorful__pointer',
                    a.className
                ]);
            return b(d).createElement('div', {
                className: t,
                style: {
                    top: 100 * s + '%',
                    left: 100 * q + '%'
                }
            }, b(d).createElement('div', {
                className: 'react-colorful__pointer-fill',
                style: {
                    backgroundColor: p
                }
            }));
        },
        p = function(a, b, c) {
            return void 0 === b && (b = 0), void 0 === c && (c = Math.pow(10, b)), Math.round(c * a) / c;
        },
        q = (Math.PI, function(a) {
            return y(r(a));
        }),
        r = function(a) {
            return '#' === a[0] && (a = a.substring(1)), a.length < 6 ? {
                r: parseInt(a[0] + a[0], 16),
                g: parseInt(a[1] + a[1], 16),
                b: parseInt(a[2] + a[2], 16),
                a: 4 === a.length ? p(parseInt(a[3] + a[3], 16) / 255, 2) : 1
            } : {
                r: parseInt(a.substring(0, 2), 16),
                g: parseInt(a.substring(2, 4), 16),
                b: parseInt(a.substring(4, 6), 16),
                a: 8 === a.length ? p(parseInt(a.substring(6, 8), 16) / 255, 2) : 1
            };
        },
        s = function(a) {
            return x(v(a));
        },
        t = function(a) {
            var u = a.s,
                v = a.v,
                w = a.a,
                x = (200 - u) * v / 100;
            return {
                h: p(a.h),
                s: p(x > 0 && x < 200 ? u * v / 100 / (x <= 100 ? x : 200 - x) * 100 : 0),
                l: p(x / 2),
                a: p(w, 2)
            };
        },
        u = function(a) {
            var v = t(a);
            return 'hsl(' + v.h + ', ' + v.s + '%, ' + v.l + '%)';
        },
        v = function(a) {
            var w = a.h,
                x = a.s,
                y = a.v,
                z = a.a;
            w = w / 360 * 6, x /= 100, y /= 100;
            var A = Math.floor(w),
                B = y * (1 - x),
                C = y * (1 - (w - A) * x),
                D = y * (1 - (1 - w + A) * x),
                E = A % 6;
            return {
                r: p(255 * [
                    y,
                    C,
                    B,
                    B,
                    D,
                    y
                ][E]),
                g: p(255 * [
                    D,
                    y,
                    y,
                    C,
                    B,
                    B
                ][E]),
                b: p(255 * [
                    B,
                    B,
                    D,
                    y,
                    y,
                    C
                ][E]),
                a: p(z, 2)
            };
        },
        w = function(a) {
            var x = a.toString(16);
            return x.length < 2 ? '0' + x : x;
        },
        x = function(a) {
            var y = a.r,
                z = a.g,
                A = a.b,
                B = a.a,
                C = B < 1 ? w(p(255 * B)) : '';
            return '#' + w(y) + w(z) + w(A) + C;
        },
        y = function(a) {
            var z = a.r,
                A = a.g,
                B = a.b,
                C = a.a,
                D = Math.max(z, A, B),
                E = D - Math.min(z, A, B),
                F = E ? D === z ? (A - B) / E : D === A ? 2 + (B - z) / E : 4 + (z - A) / E : 0;
            return {
                h: p(60 * (F < 0 ? F + 6 : F)),
                s: p(D ? E / D * 100 : 0),
                v: p(D / 255 * 100),
                a: C
            };
        },
        z = b(d).memo(function(a) {
            var A = a.hue,
                B = a.onChange,
                C = n([
                    'react-colorful__hue',
                    a.className
                ]);
            return b(d).createElement('div', {
                className: C
            }, b(d).createElement(m, {
                onMove: function(a) {
                    B({
                        h: 360 * a.left
                    });
                },
                onKey: function(a) {
                    B({
                        h: h(A + 360 * a.left, 0, 360)
                    });
                },
                'aria-label': 'Hue',
                'aria-valuenow': p(A),
                'aria-valuemax': '360',
                'aria-valuemin': '0'
            }, b(d).createElement(o, {
                className: 'react-colorful__hue-pointer',
                left: A / 360,
                color: u({
                    h: A,
                    s: 100,
                    v: 100,
                    a: 1
                })
            })));
        }),
        A = b(d).memo(function(a) {
            var B = a.hsva,
                C = a.onChange,
                D = {
                    backgroundColor: u({
                        h: B.h,
                        s: 100,
                        v: 100,
                        a: 1
                    })
                };
            return b(d).createElement('div', {
                className: 'react-colorful__saturation',
                style: D
            }, b(d).createElement(m, {
                onMove: function(a) {
                    C({
                        s: 100 * a.left,
                        v: 100 - 100 * a.top
                    });
                },
                onKey: function(a) {
                    C({
                        s: h(B.s + 100 * a.left, 0, 100),
                        v: h(B.v - 100 * a.top, 0, 100)
                    });
                },
                'aria-label': 'Color',
                'aria-valuetext': 'Saturation ' + p(B.s) + '%, Brightness ' + p(B.v) + '%'
            }, b(d).createElement(o, {
                className: 'react-colorful__saturation-pointer',
                top: 1 - B.v / 100,
                left: B.s / 100,
                color: u(B)
            })));
        }),
        B = function(a, b) {
            if (a === b)
                return !0;
            for (var C in a)
                if (a[C] !== b[C])
                    return !1;
            return !0;
        },
        C = function(a, b) {
            return a.toLowerCase() === b.toLowerCase() || B(r(a), r(b));
        };

    function D(a, b, c) {
        var E = g(c),
            F = (0, d.useState)(function() {
                return a.toHsva(b);
            }),
            G = F[0],
            H = F[1],
            I = (0, d.useRef)({
                color: b,
                hsva: G
            });
        (0, d.useEffect)(function() {
            if (!a.equal(b, I.current.color)) {
                var J = a.toHsva(b);
                I.current = {
                    hsva: J,
                    color: b
                }, H(J);
            }
        }, [
            b,
            a
        ]), (0, d.useEffect)(function() {
            var J;
            B(G, I.current.hsva) || a.equal(J = a.fromHsva(G), I.current.color) || (I.current = {
                hsva: G,
                color: J
            }, E(J));
        }, [
            G,
            a,
            E
        ]);
        var J = (0, d.useCallback)(function(a) {
            H(function(b) {
                return Object.assign({}, b, a);
            });
        }, []);
        return [
            G,
            J
        ];
    }
    var E, F = 'undefined' != typeof window ? d.useLayoutEffect : d.useEffect,
        G = new Map(),
        H = function(a) {
            F(function() {
                var I = a.current ? a.current.ownerDocument : document;
                if (void 0 !== I && !G.has(I)) {
                    var J = I.createElement('style');
                    J.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', G.set(I, J);
                    var K = E || ('undefined' != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                    K && J.setAttribute('nonce', K), I.head.appendChild(J);
                }
            }, []);
        },
        I = function(a) {
            var J = a.className,
                K = a.colorModel,
                L = a.color,
                M = void 0 === L ? K.defaultColor : L,
                N = a.onChange,
                O = f(a, [
                    'className',
                    'colorModel',
                    'color',
                    'onChange'
                ]),
                P = (0, d.useRef)(null);
            H(P);
            var Q = D(K, M, N),
                R = Q[0],
                S = Q[1],
                T = n([
                    'react-colorful',
                    J
                ]);
            return b(d).createElement('div', e({}, O, {
                ref: P,
                className: T
            }), b(d).createElement(A, {
                hsva: R,
                onChange: S
            }), b(d).createElement(z, {
                hue: R.h,
                onChange: S,
                className: 'react-colorful__last-control'
            }));
        },
        J = {
            defaultColor: '000',
            toHsva: q,
            fromHsva: function(a) {
                return s({
                    h: a.h,
                    s: a.s,
                    v: a.v,
                    a: 1
                });
            },
            equal: C
        },
        K = function(a) {
            return b(d).createElement(I, e({}, a, {
                colorModel: J
            }));
        };
}), c.register('I3V4C', function(b, C) {
    a(b.exports, 'SellSelector', function() {
        return z;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('YimJ0'),
        h = c('gSUVO'),
        i = c('PjB0f'),
        j = c('AyBNt'),
        k = c('EAfQq'),
        l = c('Dog9Y'),
        m = c('S/jX4'),
        n = c('lquUM'),
        o = c('AIQiJ'),
        p = c('uVDHR'),
        q = c('SeRL7'),
        r = c('OlpXx'),
        s = c('JJQ0+'),
        t = c('rjuBh');
    let u, v, w, x, y = a => a;
    const z = a => {
            const [A, B] = e.useState(!1), [C, D] = e.useState(a.count - 1), {
                closeSellScreen: E
            } = F, G = F.count - 1, H = F => {
                const I = Math.max(1, Math.min(G, F));
                D(I), (0, q.playPackClickSound)();
            };
            return (0, d.jsxs)(A, {
                children: [
                    (0, d.jsxs)(B, {
                        children: [
                            (0, d.jsxs)(g.Centered, {
                                className: 'maxWidth',
                                style: {
                                    gap: 6
                                },
                                children: [
                                    (0, d.jsx)(j.Button, {
                                        disabled: 1 === C,
                                        onClick: () => {
                                            H(C - 5);
                                        },
                                        children: '-5'
                                    }),
                                    (0, d.jsx)(j.Button, {
                                        disabled: 1 === C,
                                        onClick: () => {
                                            H(C - 1);
                                        },
                                        children: '-1'
                                    }),
                                    (0, d.jsx)(C, {
                                        children: (0, i.numberWithCommas)(C)
                                    }),
                                    (0, d.jsx)(j.Button, {
                                        disabled: C === G,
                                        onClick: () => {
                                            H(C + 1);
                                        },
                                        children: '+1'
                                    }),
                                    (0, d.jsx)(j.Button, {
                                        disabled: C === G,
                                        onClick: () => {
                                            H(C + 5);
                                        },
                                        children: '+5'
                                    })
                                ]
                            }),
                            (0, d.jsxs)(D, {
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
                                                children: F.name
                                            }),
                                            ' ',
                                            'for'
                                        ]
                                    }),
                                    (0, d.jsx)(k.default, {
                                        size: 12,
                                        amount: F.sellCost * C
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
                                    cosmeticId: F.id,
                                    count: C
                                },
                                success: A => {
                                    F.setSoldAmount(A.amount), (0, o.refetchOwnedCosmetics)(), (0, t.invalidateCosmosBasics)();
                                },
                                error: F => {
                                    (0, i.throwMessageError)({
                                        e: F,
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
        A = (0, f.default)(g.CenteredColumn).attrs({
            className: 'maxWidth'
        })(u || (u = y``)),
        B = (0, f.default)(g.CenteredColumn).attrs({
            className: 'maxWidth'
        })(v || (v = y`
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-top: 19px;
`)),
        C = f.default.div(w || (w = y`
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
        D = f.default.div.attrs({
            className: 'flex wrap'
        })(x || (x = y`
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 14px;
  gap: 6px;
`));
}), c.register('AyBNt', function(b, q) {
    a(b.exports, 'CountSelector', function() {
        return i;
    }), a(b.exports, 'Button', function() {
        return j;
    });
    var d = c('8kSQZ'),
        e = c('h99Nu');
    c('uPP4W');
    var f = c('5nJMd26'),
        g = c('SeRL7');
    let h;
    const i = a => {
            const j = j => {
                const k = Math.max(1, Math.min(25, j));
                a.setCount(k), (0, g.playPackClickSound)();
            };
            return (0, d.jsxs)(f.default, {
                size: 6,
                style: {
                    marginTop: 10
                },
                children: [
                    (0, d.jsx)(j, {
                        disabled: 1 === a.count,
                        onClick: () => {
                            j(a.count - 1);
                        },
                        children: '-1'
                    }),
                    (0, d.jsx)(j, {
                        disabled: 25 === a.count,
                        onClick: () => {
                            j(a.count + 1);
                        },
                        children: '+1'
                    }),
                    (0, d.jsx)(j, {
                        disabled: 25 === a.count,
                        onClick: () => {
                            j(a.count + 5);
                        },
                        children: '+5'
                    })
                ]
            });
        },
        j = e.default.div(h || (h = (a => a)`
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
}), c.register('AIQiJ', function(b, q) {
    a(b.exports, 'invalidateOwnedCosmetics', function() {
        return h;
    }), a(b.exports, 'refetchOwnedCosmetics', function() {
        return i;
    }), a(b.exports, 'default', function() {
        return j;
    });
    var d = c('IsAdf'),
        e = c('jnSVn'),
        f = c('PjB0f');
    const g = ['cosmos-owned-cosmetics'],
        h = () => {
            e.default.invalidateQueries(g);
        },
        i = () => {
            e.default.refetchQueries(g);
        };
    var j = () => (0, d.useQuery)(g, () => (0, f.requestAsPromise)({
        url: '/api/cosmos/owned-cosmetics'
    }));
}), c.register('pJQZ/', function(b, q) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('gSUVO'),
        g = c('YimJ0'),
        h = c('iMnBi');
    let i, j, k, l = a => a;
    const m = a => (0, d.jsxs)(p, {
        style: a.style,
        children: [
            (0, d.jsx)('div', {
                style: {
                    marginRight: 15,
                    flexShrink: 0
                },
                children: (0, d.jsx)(h.default, {
                    name: a.icon
                })
            }),
            (0, d.jsx)('div', {
                children: a.children
            })
        ]
    });
    var n = a => (0, d.jsx)(d.Fragment, {
        children: (0, d.jsxs)(o, {
            children: [
                a.description ? (0, d.jsx)(m, {
                    icon: 'fad fa-sparkles',
                    children: a.description
                }) : null,
                a.pack ? (0, d.jsxs)(m, {
                    icon: 'fad fa-box',
                    style: {
                        marginTop: a.description ? 10 : 0
                    },
                    children: [
                        'Part of the',
                        ' ',
                        (0, d.jsx)('span', {
                            style: {
                                fontWeight: f.FontWeights.Bold,
                                color: '#ffecb3'
                            },
                            children: a.pack
                        })
                    ]
                }) : null
            ]
        })
    });
    const o = e.default.div(i || (i = l`
  margin-top: 19px;
`)),
        p = (0, e.default)(g.VerticallyCentered)(j || (j = l`
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
}), c.register('iH6oQ', function(b, q) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('iMnBi');
    let g;
    var h = () => (0, d.jsx)(i, {
        children: (0, d.jsx)(f.default, {
            name: 'fas fa-times'
        })
    });
    const i = e.default.div(g || (g = (a => a)`
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.17s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`));
}), c.register('lOyB1', function(b, q) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('8PwLt'),
        f = c('PYx44'),
        g = c('lquUM'),
        h = c('D26Y6'),
        i = c('h99Nu'),
        j = c('eA1MC'),
        k = c('hoTkY'),
        l = c('SeRL7');
    let m;
    var n = a => {
        const o = a.type !== k.CosmeticType.sticker;
        return (0, d.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, d.jsx)(f.default, {
                    ...a,
                    editStyles: {}
                }),
                (0, d.jsxs)(e.Bottom, {
                    className: 'flex-center flex-column',
                    children: [
                        (0, d.jsx)(h.default, {
                            ...a
                        }),
                        (0, d.jsx)(g.default, {
                            ...a,
                            callToAction: () => {
                                const p = o ? 'Equip' : 'Close';
                                return {
                                    text: p,
                                    ariaLabel: p,
                                    onClick: () => {
                                        (0, l.playClickSound)(), o ? (0, j.selectCosmetic)({
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
                        o ? (0, d.jsx)(o, {
                            onClick: a.close,
                            children: 'Close'
                        }) : null
                    ]
                })
            ]
        });
    };
    const o = i.default.div(m || (m = (a => a)`
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
}), c.register('D26Y6', function(q, d) {
    a(q.exports, 'Container', function() {
        return p;
    }), a(q.exports, 'Name', function() {
        return q;
    }), a(q.exports, 'Purchased', function() {
        return r;
    }), a(q.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('gSUVO'),
        g = c('wiooy2'),
        h = c('PjB0f'),
        i = c('laJ/S');
    let j, k, l, m = a => a;
    const n = {
        angle: 90,
        spread: 70,
        startVelocity: 60,
        elementCount: 100,
        decay: 0.87
    };
    var o = a => {
        const [p, q] = (0, h.useBoolean)(!1);
        return (0, i.useDidMount)(q), (0, d.jsxs)(p, {
            children: [
                (0, d.jsx)(q, {
                    children: a.name
                }),
                (0, d.jsx)(b(g), {
                    active: p,
                    config: n
                }),
                (0, d.jsx)(r, {
                    children: 'Purchased!'
                })
            ]
        });
    };
    const p = e.default.div.attrs({
            className: 'flex-center flex-column animated bounceIn'
        })(j || (j = m`
  text-align: center;
  font-family: ${ 0 };
  text-transform: uppercase;
  animation-duration: 0.6s;
`), f.Fonts.FugazOne),
        q = e.default.div(k || (k = m`
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`)),
        r = e.default.div(l || (l = m`
  font-size: 48px;
  line-height: 1;
`));
}), c.register('eA1MC', function(b, j) {
    a(b.exports, 'selectCosmetic', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('rjuBh');
    const f = ({
        cosmeticId: g,
        cosmeticType: h,
        editStyles: i,
        onSuccess: j
    }) => {
        const k = {
            cosmeticId: g,
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
}), c.register('QO3Yh', function(b, n) {
    a(b.exports, 'SoldScreen', function() {
        return p;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('PYx44'),
        f = c('8PwLt'),
        g = c('D26Y6'),
        h = c('lquUM'),
        i = c('SeRL7'),
        j = c('h99Nu'),
        k = c('EAfQq'),
        l = c('gSUVO');
    let m, n, o = a => a;
    const p = a => (0, d.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, d.jsx)(e.default, {
                    ...a,
                    editStyles: {}
                }),
                (0, d.jsxs)(f.Bottom, {
                    className: 'flex-center flex-column',
                    children: [
                        (0, d.jsxs)(g.Container, {
                            children: [
                                (0, d.jsx)(g.Name, {
                                    children: a.name
                                }),
                                (0, d.jsx)(g.Purchased, {
                                    children: 'Sold!'
                                })
                            ]
                        }),
                        (0, d.jsx)(q, {
                            children: (0, d.jsxs)(r, {
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
                                        amount: a.soldAmount
                                    })
                                ]
                            })
                        }),
                        (0, d.jsx)(h.default, {
                            ...a,
                            callToAction: () => {
                                const q = 'Close';
                                return {
                                    text: q,
                                    ariaLabel: q,
                                    onClick: () => {
                                        (0, i.playClickSound)(), a.close();
                                    }
                                };
                            }
                        })
                    ]
                })
            ]
        }),
        q = j.default.div.attrs({
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
        r = j.default.div.attrs({
            className: 'flex'
        })(n || (n = o``));
});