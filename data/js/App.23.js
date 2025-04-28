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
var a = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    b = a.parcelRequire388b;
b.register('4L7iU', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), _ab(c.exports, 'Tab', function() {
        return _A;
    }), _ab(c.exports, 'SortMode', function() {
        return _D;
    }), _ab(c.exports, 'View', function() {
        return _F;
    }), _ab(c.exports, 'default', function() {
        return _I;
    });
    var f = b('0hzx+'),
        g = b('LEQ5w'),
        h = b('TOFTW'),
        i = b('0HHAH'),
        j = b('FpbFp'),
        k = b('sHRDd'),
        l = b('RxgVI'),
        m = b('I1mnb'),
        n = b('1TXxv'),
        o = b('Axq+p'),
        p = b('b5kvC'),
        q = b('kYakY'),
        r = b('/Bs6p'),
        s = b('UaHT7'),
        t = b('YGjmt'),
        u = b('eyTQm'),
        v = b('cvto726'),
        w = b('2h3mG');
    let x, y, z, _A, B = _ab => _ab;
    var C;
    let _D;
    var E;
    let _F;
    var G;
    (C = _A || (_A = {})).All = 'all', C.Characters = 'characters', C.Trails = 'trails', C.Stickers = 'stickers', (E = _D || (_D = {})).recent = 'recent', E.alphabetical = 'alphabetical', E.rarity = 'rarity', (G = _F || (_F = {})).grid = 'grid', G.list = 'list';
    const H = [
        l.CosmeticRarity.mythic,
        l.CosmeticRarity.legendary,
        l.CosmeticRarity.epic,
        l.CosmeticRarity.rare,
        l.CosmeticRarity.uncommon,
        l.CosmeticRarity.common
    ];
    var _I = _ab => {
        var J, K;
        const {
            data: L,
            isLoading: M,
            error: N
        } = (0, h.default)(), [O, P] = g.useState(''), [Q] = (0, q.useDebouncedValue)(O, 150), [R, S] = g.useState(_A.All), [T, U] = (0, r.useLocalstorageState)('cosmos_sortMode', _D.recent), [V, W] = (0, r.useLocalstorageState)('cosmos_view', _F.grid), [X, Y] = g.useState(!0), Z = g.useMemo(() => R === _A.Characters ? l.CosmeticType.character : R === _A.Trails ? l.CosmeticType.trail : R === _A.Stickers ? l.CosmeticType.sticker : null, [R]), $ = g.useMemo(() => {
            if (!(null == L ? void 0 : L.ownedCosmetics))
                return [];
            const _ab = Q.toLowerCase(),
                bb = L.ownedCosmetics.filter(bb => {
                    var cb, db;
                    if (Z && bb.cosmetic.type !== Z)
                        return !1;
                    if (!X && bb.count <= 1)
                        return !1;
                    const eb = bb.cosmetic.name.toLowerCase();
                    var fb;
                    const gb = null !== (fb = null === (cb = bb.cosmetic.description) || void 0 === cb ? void 0 : cb.toLowerCase()) && void 0 !== fb ? fb : '';
                    var hb;
                    const ib = null !== (hb = null === (db = bb.cosmetic.packName) || void 0 === db ? void 0 : db.toLowerCase()) && void 0 !== hb ? hb : '';
                    return eb.includes(_ab) || gb.includes(_ab) || ib.includes(_ab);
                });
            return T === _D.rarity ? bb.sort((_ab, bb) => H.indexOf(_ab.cosmetic.rarity) - H.indexOf(bb.cosmetic.rarity)) : T === _D.alphabetical ? bb.sort((_ab, bb) => _ab.cosmetic.name.localeCompare(bb.cosmetic.name)) : bb;
        }, [
            L,
            Q,
            Z,
            T,
            X
        ]);
        return M ? (0, f.jsx)(i.Centered, {
            className: 'maxAll',
            children: (0, f.jsx)(j.default, {
                style: {
                    color: k.default.White
                }
            })
        }) : N ? (0, f.jsx)(i.Centered, {
            className: 'maxAll',
            children: 'There was an error loading your locker. Please refresh and try again.'
        }) : (0, f.jsxs)(m.LimitedWidth, {
            customWidth: 900,
            children: [
                (0, f.jsxs)(_J, {
                    children: [
                        (0, f.jsx)(_K, {
                            children: 'Locker'
                        }),
                        (0, f.jsxs)(v.default, {
                            size: 30,
                            className: 'maxWidth',
                            style: {
                                justifyContent: 'space-between'
                            },
                            children: [
                                (0, f.jsx)(t.Tabs, {
                                    tab: R,
                                    setTab: S
                                }),
                                (0, f.jsx)(u.ViewAndSort, {
                                    view: V,
                                    setView: W,
                                    sort: T,
                                    setSort: U,
                                    showAll: X,
                                    setShowAll: Y
                                })
                            ]
                        })
                    ]
                }),
                (0, f.jsxs)(_L, {
                    children: [
                        (0, f.jsx)(s.SearchBar, {
                            value: O,
                            onChange: P
                        }),
                        $.length ? (0, f.jsx)(n.default, {
                            cosmetics: $,
                            cosmeticType: Z,
                            gridView: V === _F.grid,
                            selectedCosmetics: L.selected,
                            selectedCosmeticEditStyles: null === (J = L.selected) || void 0 === J || null === (K = J.character) || void 0 === K ? void 0 : K.editStyleData,
                            requiresSelection: !Q && (Z === l.CosmeticType.character || Z === l.CosmeticType.trail),
                            onCosmeticSelectionChanged: _v.onCosmeticSelectionChanged,
                            blockCharacterPreview: _v.blockCharacterPreview
                        }) : (0, f.jsx)(w.EmptyState, {
                            mode: Q ? 'search' : X ? 'none' : 'filter',
                            cosmeticType: Z
                        })
                    ]
                })
            ]
        });
    };
    const _J = o.default.div.attrs({
            className: 'maxWidth'
        })(x || (x = B``)),
        _K = o.default.div(y || (y = B`
  font-family: ${ 0 };
  text-transform: uppercase;
  color: ${ 0 };
  font-size: 32px;
`), p.Fonts.FugazOne, k.default.White),
        _L = o.default.div.attrs({
            className: 'maxWidth'
        })(z || (z = B`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`));
}), b.register('1TXxv', function(c, d) {
    _v(c.exports, 'default', function() {
        return _r;
    });
    var e = b('0hzx+'),
        f = b('BXKZi0'),
        g = b('LEQ5w'),
        h = b('Axq+p'),
        i = b('RxgVI'),
        j = b('77h4P'),
        k = b('cvto726'),
        l = b('rSOD9'),
        m = b('bnNtv'),
        n = b('G2el2'),
        o = b('TOFTW'),
        p = b('UrnvN');
    let q;
    var _r = _v => {
        const s = g.useRef(null),
            [t] = (0, f.default)(s),
            u = g.useMemo(() => {
                const _v = t - 1,
                    w = Math.floor((_v - _s.gapBetweenItems) / (_s.itemWidth + _s.gapBetweenItems));
                if (w < 2)
                    return _v;
                const x = _v - (w * (_s.itemWidth + _s.gapBetweenItems) - _s.gapBetweenItems);
                return _s.itemWidth + x / w;
            }, [t]);
        return (0, e.jsx)(_t, {
            ref: s,
            children: (0, e.jsxs)(k.default, {
                className: 'maxWidth',
                direction: _k.gridView ? 'horizontal' : 'vertical',
                size: _k.gridView ? _s.gapBetweenItems : 15,
                wrap: !0,
                children: [
                    _k.cosmetics.map(s => {
                        var v, w, x, y, z;
                        const {
                            cosmetic: A,
                            count: B
                        } = s;
                        let C = !1;
                        return (null == s || null === (v = s.cosmetic) || void 0 === v ? void 0 : v.type) === i.CosmeticType.character ? C = (null === (w = _k.selectedCosmetics) || void 0 === w || null === (x = w.character) || void 0 === x ? void 0 : x.id) === A.id : (null == s || null === (y = s.cosmetic) || void 0 === y ? void 0 : y.type) === i.CosmeticType.trail && (C = (null === (z = _k.selectedCosmetics) || void 0 === z ? void 0 : z.trail) === A.id), (0, e.jsx)(j.default, {
                            id: A.id,
                            count: B,
                            name: A.name,
                            description: A.description,
                            pack: A.packName,
                            type: A.type,
                            rarity: A.rarity,
                            style: A.style,
                            sellCost: A.sellCost,
                            gridView: _k.gridView,
                            gridViewWidth: u,
                            selected: C,
                            editStyles: _k.selectedCosmeticEditStyles && C ? _k.selectedCosmeticEditStyles : void 0,
                            blockCharacterPreview: _k.blockCharacterPreview,
                            onCosmeticSelectionChanged: _k.onCosmeticSelectionChanged
                        }, A.id + _k.gridView);
                    }),
                    (() => {
                        var v, w, x;
                        if (!_k.requiresSelection)
                            return null;
                        if (!_k.cosmeticType)
                            return null;
                        let y = !1;
                        ((null === (v = _k.selectedCosmetics) || void 0 === v || null === (w = v.character) || void 0 === w ? void 0 : w.id) || _k.cosmeticType !== i.CosmeticType.character) && ((null === (x = _k.selectedCosmetics) || void 0 === x ? void 0 : x.trail) || _k.cosmeticType !== i.CosmeticType.trail) || (y = !0);
                        const z = () => {
                            y || ((0, m.playClickSound)(), (0, n.selectCosmetic)({
                                cosmeticType: _k.cosmeticType,
                                onSuccess: () => {
                                    (0, o.invalidateOwnedCosmetics)(), _k.onCosmeticSelectionChanged && _k.onCosmeticSelectionChanged();
                                }
                            }));
                        };
                        return _k.gridView ? (0, e.jsx)(l.EmptyGridViewItem, {
                            selected: y,
                            onSelect: z,
                            width: u
                        }) : (0, e.jsx)(p.EmptyListViewItem, {
                            selected: y,
                            onSelect: z
                        });
                    })()
                ]
            })
        });
    };
    const _s = {
            itemWidth: 120,
            gapBetweenItems: 10
        },
        _t = h.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = (_k => _k)``));
}), b.register('77h4P', function(c, d) {
    _k(c.exports, 'default', function() {
        return _p;
    });
    var e = b('0hzx+');
    b('LEQ5w');
    var f = b('RxgVI'),
        g = b('54XAm'),
        h = b('9HSHh'),
        i = b('rSOD9'),
        j = b('UrnvN'),
        k = b('PMl60'),
        l = b('OzXoU'),
        m = b('TOFTW'),
        n = b('G2el2'),
        o = b('bnNtv');
    var _p = _k => {
        const [q, r, s] = (0, k.useBoolean)(!1), t = (0, h.default)({
            id: _k.id,
            type: _k.type
        }), u = (0, g.rarityToBackground)(_k.rarity);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)('div', {
                    onClick: () => {
                        (0, o.playClickSound)(), r();
                    },
                    style: {
                        cursor: 'pointer'
                    },
                    children: _k.gridView ? (0, e.jsx)('div', {
                        style: {
                            width: _k.gridViewWidth,
                            flexShrink: 0
                        },
                        children: (0, e.jsx)(i.GridViewItem, {
                            selected: _k.selected,
                            image: t,
                            background: u,
                            imagePadding: _k.type === f.CosmeticType.sticker ? 24 : void 0,
                            count: _k.count
                        })
                    }) : (0, e.jsx)(j.ListViewItem, {
                        selected: _k.selected,
                        image: t,
                        background: u,
                        name: _k.name,
                        imagePadding: _k.type === f.CosmeticType.sticker ? 12 : void 0
                    })
                }),
                (0, e.jsx)(l.default, {
                    open: q,
                    close: s,
                    id: _k.id,
                    name: _k.name,
                    count: _k.count,
                    sellCost: _k.sellCost,
                    image: t,
                    rarity: _k.rarity,
                    type: _k.type,
                    description: _k.description,
                    pack: _k.pack,
                    style: _k.style,
                    editStyles: _k.editStyles,
                    callToAction: q => {
                        if (_k.type === f.CosmeticType.sticker)
                            return {
                                text: 'Close',
                                ariaLabel: 'Close',
                                onClick: () => {
                                    (0, o.playClickSound)(), s();
                                }
                            };
                        const v = void 0 !== q.editStyles && '{}' !== JSON.stringify(q.editStyles) && JSON.stringify(q.editStyles) !== JSON.stringify(_k.editStyles),
                            w = _k.selected ? v ? 'Update' : 'Selected' : 'Select';
                        return {
                            text: w,
                            ariaLabel: w,
                            disabled: _k.selected && !v,
                            onClick: () => {
                                (0, o.playClickSound)(), (0, n.selectCosmetic)({
                                    cosmeticId: _k.id,
                                    cosmeticType: _k.type,
                                    editStyles: q.editStyles,
                                    onSuccess: () => {
                                        _k.onCosmeticSelectionChanged && _k.onCosmeticSelectionChanged(), (0, m.invalidateOwnedCosmetics)(), s();
                                    }
                                });
                            }
                        };
                    },
                    blockCharacterPreview: _k.blockCharacterPreview
                })
            ]
        });
    };
}), b.register('UrnvN', function(c, d) {
    _k(c.exports, 'ListViewItem', function() {
        return _p;
    }), _k(c.exports, 'EmptyListViewItem', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('cvto726');
    b('LEQ5w');
    var g = b('Axq+p'),
        h = b('b5kvC'),
        i = b('sHRDd'),
        j = b('9R7cy');
    let k, l, m, n, o = _k => _k;
    const _p = _k => (0, e.jsx)(_r, {
            selected: _k.selected,
            children: (0, e.jsxs)(f.default, {
                className: 'maxWidth',
                direction: 'horizontal',
                size: 20,
                wrap: !0,
                children: [
                    (0, e.jsx)(_s, {
                        style: {
                            background: _k.background,
                            padding: _k.imagePadding || 8
                        },
                        children: (0, e.jsx)(_t, {
                            src: _k.image
                        })
                    }),
                    (0, e.jsx)(_u, {
                        children: _k.name
                    })
                ]
            })
        }),
        _q = _k => (0, e.jsx)(_r, {
            selected: _k.selected,
            style: {
                cursor: 'pointer'
            },
            onClick: _k.onSelect,
            children: (0, e.jsxs)(f.default, {
                className: 'maxWidth',
                direction: 'horizontal',
                size: 20,
                wrap: !0,
                children: [
                    (0, e.jsx)(_s, {
                        style: {
                            background: 'radial-gradient( circle, rgba(78,77,77,1) 0%, rgba(32,32,32,1) 100% )',
                            fontSize: 22
                        },
                        children: (0, e.jsx)(j.default, {
                            name: 'fas fa-times'
                        })
                    }),
                    (0, e.jsx)(_u, {
                        children: 'Empty Selection'
                    })
                ]
            })
        }),
        _r = g.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = o`
  padding: 12px 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-style: solid;
  border-color: #fdd835;
  border-width: ${ 0 }px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.23);
  }
`), _k => _k.selected ? 4 : 0),
        _s = g.default.div.attrs({
            className: 'flex-center'
        })(l || (l = o`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid ${ 0 };
`), i.default.White),
        _t = g.default.img(m || (m = o`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`)),
        _u = g.default.div(n || (n = o`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.93);
`), h.Fonts.FugazOne);
}), b.register('kYakY', function(c, d) {
    _k(c.exports, 'useDebouncedValue', function() {
        return _j;
    });
    var e = b('LEQ5w'),
        f = b('zrKZC0'),
        g = b('+i8ep'),
        h = b('IYtCH'),
        i = {
            initializeWithNull: !1
        },
        _j = function(_k, l, m) {
            void 0 === m && (m = {});
            var n = Object.assign({}, i, m).initializeWithNull,
                o = (0, e.useState)(n ? null : _k),
                p = o[0],
                q = o[1],
                r = (0, f.useDebounce)(q, l);
            return (0, g.useDidMount)(function() {
                n && r(_k);
            }), (0, h.useDidUpdate)(function() {
                r(_k);
            }, [_k]), [
                p,
                q
            ];
        };
}), b.register('zrKZC0', function(c, d) {
    _h(c.exports, 'useDebounce', function() {
        return _g;
    });
    var e = b('GjKYj'),
        f = b('LEQ5w');

    function _g(_h, i, j) {
        var k = (0, f.useCallback)(function(l) {
                return _d(e)(l, i, j);
            }, [
                i,
                j
            ]),
            l = (0, f.useRef)(k(_h));
        return (0, f.useEffect)(function() {
            l.current = k(_h);
        }, [
            _h,
            k
        ]), l.current;
    }
}), b.register('GjKYj', function(c, _d) {
    var e = /^\s+|\s+$/g,
        f = /^[-+]0x[0-9a-f]+$/i,
        g = /^0b[01]+$/i,
        h = /^0o[0-7]+$/i,
        i = parseInt,
        j = 'object' == typeof a && a && a.Object === Object && a,
        k = 'object' == typeof self && self && self.Object === Object && self,
        l = j || k || Function('return this')(),
        m = Object.prototype.toString,
        n = Math.max,
        o = Math.min,
        p = function() {
            return l.Date.now();
        };

    function q(r) {
        var s = typeof r;
        return !!r && ('object' == s || 'function' == s);
    }

    function q(r) {
        if ('number' == typeof r)
            return r;
        if (function(s) {
                return 'symbol' == typeof s || function(t) {
                    return !!t && 'object' == typeof t;
                }(s) && '[object Symbol]' == m.call(s);
            }(r))
            return NaN;
        if (_p(r)) {
            var s = 'function' == typeof r.valueOf ? r.valueOf() : r;
            r = _p(s) ? s + '' : s;
        }
        if ('string' != typeof r)
            return 0 === r ? r : +r;
        r = r.replace(e, '');
        var s = g.test(r);
        return s || h.test(r) ? i(r.slice(2), s ? 2 : 8) : f.test(r) ? NaN : +r;
    }
    c.exports = function(q, r, s) {
        var t, u, v, w, x, y, z = 0,
            A = !1,
            B = !1,
            C = !0;
        if ('function' != typeof q)
            throw new TypeError('Expected a function');

        function D(E) {
            var F = t,
                G = u;
            return t = u = void 0, z = E, w = q.apply(G, F);
        }

        function D(E) {
            return z = E, x = setTimeout(_D, r), A ? _s(E) : w;
        }

        function D(E) {
            var F = E - y;
            return void 0 === y || F >= r || F < 0 || B && E - z >= v;
        }

        function _D() {
            var E = p();
            if (b(E))
                return _D(E);
            x = setTimeout(_D, function(F) {
                var G = r - (F - y);
                return B ? o(G, v - (F - z)) : G;
            }(E));
        }

        function _D(E) {
            return x = void 0, C && t ? _s(E) : (t = u = void 0, w);
        }

        function D() {
            var E = p(),
                F = b(E);
            if (t = arguments, u = this, y = E, F) {
                if (void 0 === x)
                    return x(y);
                if (B)
                    return x = setTimeout(w, r), _s(y);
            }
            return void 0 === x && (x = setTimeout(w, r)), w;
        }
        return r = _q(r) || 0, _p(s) && (A = !!s.leading, v = (B = 'maxWait' in s) ? n(_q(s.maxWait) || 0, r) : v, C = 'trailing' in s ? !!s.trailing : C), S.cancel = function() {
            void 0 !== x && clearTimeout(x), z = 0, t = y = u = x = void 0;
        }, S.flush = function() {
            return void 0 === x ? w : C(p());
        }, S;
    };
}), b.register('IYtCH', function(c, d) {
    _g(c.exports, 'useDidUpdate', function() {
        return _f;
    });
    var e = b('LEQ5w');

    function _f(_g, h) {
        var i = (0, e.useRef)(!1);
        void 0 === h || Array.isArray(h) ? Array.isArray(h) && 0 === h.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : h = [h], (0, e.useEffect)(function() {
            i.current ? _g() : i.current = !0;
        }, h);
    }
}), b.register('/Bs6p', function(c, d) {
    _g(c.exports, 'useLocalstorageState', function() {
        return _f;
    });
    var e = b('LEQ5w');

    function f(_g, h) {
        var i = function(j) {
            if ('undefined' == typeof localStorage)
                return null;
            var k = localStorage.getItem(j) || 'null';
            try {
                return JSON.parse(k);
            } catch (j) {
                console.error(j);
            }
            return k;
        }(_g);
        return null === i ? h : i;
    }

    function _f(g, h) {
        var i = (0, e.useState)(function() {
                return _f(g, h);
            }),
            j = i[0],
            k = i[1],
            l = (0, e.useRef)(!1);
        (0, e.useEffect)(function() {
            l.current || function(m, n) {
                'undefined' == typeof localStorage || localStorage.setItem(m, JSON.stringify(n));
            }(g, j);
        }, [j]);
        var m = (0, e.useCallback)(function(n) {
            if (n.storageArea === localStorage && n.key === g)
                try {
                    l.current = !0;
                    var o = JSON.parse(n.newValue || 'null');
                    j !== o && k(o);
                } catch (g) {
                    console.log(g);
                }
        }, []);
        (0, e.useEffect)(function() {
            if ('undefined' != typeof window)
                return window.addEventListener('storage', m),
                    function() {
                        window.removeEventListener('storage', m);
                    };
            console.warn('useLocalstorageState: window is undefined.');
        }, []);
        var n = (0, e.useCallback)(function(o) {
                l.current = !1, k(o);
            }, []),
            o = (0, e.useCallback)(function() {
                localStorage.removeItem(g);
            }, []);
        return [
            j,
            n,
            o
        ];
    }
}), b.register('UaHT7', function(c, d) {
    _c(c.exports, 'SearchBar', function() {
        return _l;
    });
    var e = b('0hzx+'),
        _f = b('Axq+p'),
        g = b('9R7cy');
    let h, i, j, k = _c => _c;
    const _l = _c => {
            const {
                value: m,
                onChange: n
            } = _c;
            return (0, e.jsxs)(_m, {
                children: [
                    (0, e.jsx)(_n, {
                        children: (0, e.jsx)(g.default, {
                            name: 'fas fa-search'
                        })
                    }),
                    (0, e.jsx)(_o, {
                        value: m,
                        onChange: _c => n(_c.target.value),
                        placeholder: 'Search...'
                    })
                ]
            });
        },
        _m = _f.default.div.attrs({
            className: 'maxWidth flex vc'
        })(h || (h = k`
  border-radius: 30px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.07);
  position: relative;
`)),
        _n = _f.default.div(i || (i = k`
  top: 11px;
  left: 20px;
  position: absolute;
`)),
        _o = _f.default.input.attrs({
            className: 'maxWidth'
        })(j || (j = k`
  border: none;
  background: transparent;
  padding: 10px 20px;
  padding-left: 50px;
  border-radius: 30px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`));
}), b.register('YGjmt', function(c, d) {
    _c(c.exports, 'Tabs', function() {
        return _m;
    });
    var e = b('0hzx+'),
        f = b('cvto726'),
        g = b('4L7iU'),
        h = b('Axq+p'),
        i = b('bnNtv'),
        j = b('Mmd0d21');
    let k;
    const l = '#3d9241',
        _m = _c => {
            const n = n => _c.tab === n,
                o = n => () => {
                    n !== _c.tab && ((0, i.playClickSound)(), _c.setTab(n));
                };
            return (0, e.jsxs)(f.default, {
                direction: 'horizontal',
                size: 8,
                style: {
                    marginTop: 8,
                    marginBottom: 20
                },
                wrap: !0,
                children: [
                    (0, e.jsx)(_n, {
                        selected: n(g.Tab.All),
                        onClick: o(g.Tab.All),
                        children: 'All'
                    }),
                    (0, e.jsxs)(_n, {
                        selected: n(g.Tab.Characters),
                        onClick: o(g.Tab.Characters),
                        children: [
                            j.default.character,
                            's'
                        ]
                    }),
                    (0, e.jsxs)(_n, {
                        selected: n(g.Tab.Trails),
                        onClick: o(g.Tab.Trails),
                        children: [
                            j.default.trail,
                            's'
                        ]
                    }),
                    (0, e.jsxs)(_n, {
                        selected: n(g.Tab.Stickers),
                        onClick: o(g.Tab.Stickers),
                        children: [
                            j.default.sticker,
                            's'
                        ]
                    })
                ]
            });
        },
        _n = h.default.div(k || (k = (_c => _c)`
  background: ${ 0 };
  padding: 8px 18px;
  line-height: 1;
  font-size: 16px;
  border-radius: 50px;
  cursor: pointer;
  transition: background ${ 0 }s,
    transform 0.2s;
  will-change: background, transform;
  &:hover {
    background: ${ 0 };
    transform: scale(1.05);
  }
`), _c => _c.selected ? l : 'rgba(255, 255, 255, 0.1)', _c => _c.selected ? 0.1 : 0.2, _c => _c.selected ? l : 'rgba(255, 255, 255, 0.15)');
}), b.register('eyTQm', function(c, d) {
    _c(c.exports, 'ViewAndSort', function() {
        return _m;
    });
    var e = b('0hzx+'),
        f = b('1P5ls'),
        g = b('/rAT0'),
        h = b('cH8qQ'),
        i = b('4L7iU'),
        j = b('9R7cy'),
        k = b('LHeQv');
    const l = (0, e.jsx)(j.default, {
            name: 'fas fa-check',
            style: {
                color: '#673AB7'
            }
        }),
        _m = _c => {
            const n = n => {
                    if (_c.sort === n)
                        return l;
                },
                o = n => {
                    if (_c.view === n)
                        return l;
                },
                p = n => {
                    if (_c.showAll === n)
                        return l;
                },
                q = [{
                        key: 'sort_group',
                        type: 'group',
                        label: 'Sort',
                        children: [{
                                key: 'sort_recent',
                                label: 'Most Recent',
                                icon: n(i.SortMode.recent),
                                onClick: () => _c.setSort(i.SortMode.recent)
                            },
                            {
                                key: 'sort_rarity',
                                label: 'Rarity',
                                icon: n(i.SortMode.rarity),
                                onClick: () => _c.setSort(i.SortMode.rarity)
                            },
                            {
                                key: 'sort_name',
                                label: 'Name',
                                icon: n(i.SortMode.alphabetical),
                                onClick: () => _c.setSort(i.SortMode.alphabetical)
                            }
                        ]
                    },
                    {
                        key: 'view_group',
                        type: 'group',
                        label: 'View',
                        children: [{
                                key: 'view_grid',
                                label: 'Grid',
                                icon: o(i.View.grid),
                                onClick: () => _c.setView(i.View.grid)
                            },
                            {
                                key: 'view_list',
                                label: 'List',
                                icon: o(i.View.list),
                                onClick: () => _c.setView(i.View.list)
                            }
                        ]
                    },
                    {
                        key: 'filter_group',
                        type: 'group',
                        label: 'Filter',
                        children: [{
                                key: 'filter_all',
                                label: 'All',
                                icon: p(!0),
                                onClick: () => _c.setShowAll(!0)
                            },
                            {
                                key: 'filter_duplicates',
                                label: 'Duplicates',
                                icon: p(!1),
                                onClick: () => _c.setShowAll(!1)
                            }
                        ]
                    }
                ];
            return (0, e.jsx)(f.default, {
                theme: {
                    algorithm: h.default.defaultAlgorithm,
                    token: {
                        colorBgBase: '#ffffff'
                    }
                },
                children: (0, e.jsx)('div', {
                    style: {
                        cursor: 'pointer',
                        fontSize: 20
                    },
                    children: (0, e.jsx)(g.default, {
                        menu: {
                            items: q
                        },
                        children: (0, e.jsx)(k.default, {})
                    })
                })
            });
        };
}), b.register('2h3mG', function(c, d) {
    _c(c.exports, 'EmptyState', function() {
        return _p;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('Axq+p'),
        h = b('0HHAH'),
        i = b('2Xvuf'),
        j = b('D50le'),
        k = b('vShe/');
    let l, m, n, o = _c => _c;
    const _p = _c => {
            const q = f.useMemo(() => 'search' === _c.mode ? 'We couldn\'t find any cosmetics matching your search' : 'filter' === _c.mode ? 'No cosmetics match your filter' : _c.cosmeticType ? (0, e.jsxs)(e.Fragment, {
                    children: [
                        'Visit The Shop to add',
                        ' ',
                        (0, e.jsxs)('b', {
                            style: {
                                color: k.default.Yellow
                            },
                            children: [
                                (0, j.cosmeticTypeName)(_c.cosmeticType),
                                's'
                            ]
                        }),
                        ' ',
                        'to your collection!'
                    ]
                }) : (0, e.jsxs)(e.Fragment, {
                    children: [
                        'You don\'t own any cosmetics...yet! Visit',
                        ' ',
                        (0, e.jsx)('b', {
                            style: {
                                color: k.default.Yellow
                            },
                            children: 'The Shop'
                        }),
                        ' to add some to your collection!'
                    ]
                }), [
                    _c.mode,
                    _c.cosmeticType
                ]),
                r = f.useMemo(() => 'search' === _c.mode || 'filter' === _c.mode ? 'cosmos/searchEmpty.png' : 'cosmos/cosmeticsEmpty.png', [_c.mode]);
            return (0, e.jsxs)(_q, {
                children: [
                    (0, e.jsx)(_r, {
                        src: (0, i.default)(r)
                    }),
                    (0, e.jsx)(_s, {
                        children: q
                    })
                ]
            });
        },
        _q = (0, g.default)(h.CenteredColumn).attrs({
            className: 'maxWidth'
        })(l || (l = o`
  padding: 20px 0px;
`)),
        _r = g.default.img(m || (m = o`
  max-height: 175px;
  max-width: 90%;
`)),
        _s = g.default.div(n || (n = o`
  font-size: 16px;
  font-style: italic;
  opacity: 0.9;
  margin-top: 35px;
  text-align: center;
`));
}), b.register('FgYUV', function(_c, d) {
    Object.defineProperty(_c.exports, '__esModule', {
        value: !0
    });
    var e, f = function() {
            function g(h, i) {
                for (var j = 0; j < i.length; j++) {
                    var k = i[j];
                    k.enumerable = k.enumerable || !1, k.configurable = !0, 'value' in k && (k.writable = !0), Object.defineProperty(h, k.key, k);
                }
            }
            return function(g, h, i) {
                return h && _c(g.prototype, h), i && _c(g, i), g;
            };
        }(),
        g = b('LEQ5w'),
        h = (e = g) && e.__esModule ? e : {
            default: e
        },
        i = b('V9HIq');
    var j = {
            position: 'relative'
        },
        k = function(l) {
            function m(n) {
                ! function(o, p) {
                    if (!(o instanceof p))
                        throw new TypeError('Cannot call a class as a function');
                }(this, m);
                var o = function(p, q) {
                    if (!p)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !q || 'object' != typeof q && 'function' != typeof q ? p : q;
                }(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, n));
                return o.setRef = o.setRef.bind(o), o;
            }
            return function(m, n) {
                if ('function' != typeof n && null !== n)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof n);
                m.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: m,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(m, n) : m.__proto__ = n);
            }(d, l), f(d, [{
                    key: 'componentWillReceiveProps',
                    value: function(m) {
                        m.active && !this.props.active && (0, i.confetti)(this.container, m.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(m) {
                        this.container = m;
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return h.default.createElement('div', {
                            className: this.props.className,
                            style: j,
                            ref: this.setRef
                        });
                    }
                }
            ]), d;
        }(g.Component);
    _c.exports.default = k;
}), b.register('V9HIq', function(c, d) {
    Object.defineProperty(c.exports, '__esModule', {
        value: !0
    }), c.exports.confetti = function(e) {
        var f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            g = Object.assign({}, _l, f),
            h = g.elementCount,
            i = g.colors,
            j = g.width,
            k = g.height,
            l = g.angle,
            m = g.spread,
            n = g.startVelocity,
            o = g.decay,
            p = g.duration,
            q = g.random,
            r = a(e, h, i, j, k),
            s = r.map(function(t) {
                return {
                    element: t,
                    physics: b(l, m, n, q)
                };
            });
        return _j(e, s, o, p);
    };

    function e(f, g, h, i, _j) {
        return Array.from({
            length: g
        }).map(function(k, _l) {
            var m = document.createElement('div'),
                n = h[_l % h.length];
            return m.style['background-color'] = n, m.style.width = i, m.style.height = _j, m.style.position = 'absolute', m.style.willChange = 'transform, opacity', f.appendChild(m), m;
        });
    }

    function e(f, g, h, i) {
        var j = f * (Math.PI / 180),
            k = g * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * i(),
            wobbleSpeed: 0.1 + 0.1 * i(),
            velocity: 0.5 * h + i() * h,
            angle2D: -j + (0.5 * k - i() * k),
            angle3D: -Math.PI / 4 + i() * (Math.PI / 2),
            tiltAngle: i() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * i()
        };
    }

    function e(f, g, h, i) {
        var j = void 0;
        return new Promise(function(k) {
            requestAnimationFrame(function _u(l) {
                j || (j = l);
                var m = j === l ? 0 : (l - j) / i;
                g.forEach(function(n) {
                    return function(o, p, q) {
                        o.physics.x += Math.cos(o.physics.angle2D) * o.physics.velocity, o.physics.y += Math.sin(o.physics.angle2D) * o.physics.velocity, o.physics.z += Math.sin(o.physics.angle3D) * o.physics.velocity, o.physics.wobble += o.physics.wobbleSpeed, o.physics.velocity *= q, o.physics.y += 3, o.physics.tiltAngle += o.physics.tiltAngleSpeed;
                        var r = o.physics,
                            s = r.x,
                            t = r.y,
                            _u = r.tiltAngle,
                            v = r.wobble,
                            w = 'translate3d(' + (s + 10 * Math.cos(v)) + 'px, ' + (t + 10 * Math.sin(v)) + 'px, 0) rotate3d(1, 1, 1, ' + _u + 'rad)';
                        o.element.style.transform = w, o.element.style.opacity = 1 - p;
                    }(n, m, h);
                }), l - j < i ? requestAnimationFrame(_g) : (g.forEach(function(n) {
                    if (n.element.parentNode === f)
                        return f.removeChild(n.element);
                }), k());
            });
        });
    }
    var e = {
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
}), b.register('07pQo', function(c, d) {
    e(c.exports, 'playSound', function() {
        return _g;
    }), e(c.exports, 'preloadSound', function() {
        return _i;
    });
    var e = b('6yrsF');
    const f = new Map(),
        _g = e => {
            const h = Date.now();
            if (!e.path)
                return null;
            const i = e.forceCreateNewSound ? void 0 : f.get(e.path),
                j = i || new(0, e.Howl)({
                    src: e.path
                });
            if (j.volume(e.volume), i)
                e.delay ? setTimeout(() => {
                    j.play();
                }, e.delay) : j.play();
            else {
                const k = () => {
                    if (f.get(e.path) || e.forceCreateNewSound || f.set(e.path, j), e.delay) {
                        const l = h + e.delay,
                            m = Date.now();
                        m > l ? j.play() : setTimeout(() => {
                            j.play();
                        }, l - m);
                    } else
                        j.play();
                };
                'loaded' === j.state() ? k() : j.once('load', k);
            }
            return j;
        },
        h = new Set(),
        _i = e => {
            const {
                path: j
            } = e;
            if (f.get(j))
                return;
            if (h.has(j))
                return;
            h.add(j);
            const k = new(0, e.Howl)({
                src: j
            });
            k.once('load', () => {
                h.delete(j), f.set(j, k);
            });
        };
});