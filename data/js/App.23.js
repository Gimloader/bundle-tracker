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
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    d = c.parcelRequire388b;
d.register('zlMYi', function(b, c) {
    var e;
    e = b.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'Tab', function() {
        return A;
    }), a(b.exports, 'SortMode', function() {
        return D;
    }), a(b.exports, 'View', function() {
        return F;
    }), a(b.exports, 'default', function() {
        return I;
    });
    var f = d('8kSQZ'),
        g = d('uPP4W'),
        h = d('AIQiJ'),
        i = d('YimJ0'),
        j = d('fgVTE0'),
        k = d('lmfrI'),
        l = d('hoTkY'),
        m = d('0Gy6k'),
        n = d('PmsqL'),
        o = d('h99Nu'),
        p = d('gSUVO'),
        q = d('xk+2C0'),
        r = d('eeWKg'),
        s = d('Xxp6m'),
        t = d('4XKFX'),
        u = d('6FgIn'),
        v = d('5nJMd26'),
        w = d('pKomi');
    let x, y, z, A, B = a => a;
    var C;
    let D;
    var E;
    let F;
    var G;
    (C = A || (A = {})).All = 'all', C.Characters = 'characters', C.Trails = 'trails', C.Stickers = 'stickers', (E = D || (D = {})).recent = 'recent', E.alphabetical = 'alphabetical', E.rarity = 'rarity', (G = F || (F = {})).grid = 'grid', G.list = 'list';
    const H = [
        l.CosmeticRarity.mythic,
        l.CosmeticRarity.legendary,
        l.CosmeticRarity.epic,
        l.CosmeticRarity.rare,
        l.CosmeticRarity.uncommon,
        l.CosmeticRarity.common
    ];
    var I = a => {
        var J, K;
        const {
            data: L,
            isLoading: M,
            error: N
        } = (0, h.default)(), [O, P] = g.useState(''), [Q] = (0, q.useDebouncedValue)(O, 150), [R, S] = g.useState(A.All), [T, U] = (0, r.useLocalstorageState)('cosmos_sortMode', D.recent), [V, W] = (0, r.useLocalstorageState)('cosmos_view', F.grid), [X, Y] = g.useState(!0), Z = g.useMemo(() => R === A.Characters ? l.CosmeticType.character : R === A.Trails ? l.CosmeticType.trail : R === A.Stickers ? l.CosmeticType.sticker : null, [R]), $ = g.useMemo(() => {
            if (!(null == L ? void 0 : L.ownedCosmetics))
                return [];
            const _ = Q.toLowerCase(),
                ab = L.ownedCosmetics.filter(ab => {
                    var bb, cb;
                    if (Z && ab.cosmetic.type !== Z)
                        return !1;
                    if (!X && ab.count <= 1)
                        return !1;
                    const db = ab.cosmetic.name.toLowerCase();
                    var eb;
                    const fb = null !== (eb = null === (bb = ab.cosmetic.description) || void 0 === bb ? void 0 : bb.toLowerCase()) && void 0 !== eb ? eb : '';
                    var gb;
                    const hb = null !== (gb = null === (cb = ab.cosmetic.packName) || void 0 === cb ? void 0 : cb.toLowerCase()) && void 0 !== gb ? gb : '';
                    return db.includes(_) || fb.includes(_) || hb.includes(_);
                });
            return T === D.rarity ? ab.sort((_, ab) => H.indexOf(_.cosmetic.rarity) - H.indexOf(ab.cosmetic.rarity)) : T === D.alphabetical ? ab.sort((_, ab) => _.cosmetic.name.localeCompare(ab.cosmetic.name)) : ab;
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
                (0, f.jsxs)(J, {
                    children: [
                        (0, f.jsx)(K, {
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
                (0, f.jsxs)(L, {
                    children: [
                        (0, f.jsx)(s.SearchBar, {
                            value: O,
                            onChange: P
                        }),
                        $.length ? (0, f.jsx)(n.default, {
                            cosmetics: $,
                            cosmeticType: Z,
                            gridView: V === F.grid,
                            selectedCosmetics: L.selected,
                            selectedCosmeticEditStyles: null === (J = L.selected) || void 0 === J || null === (K = J.character) || void 0 === K ? void 0 : K.editStyleData,
                            requiresSelection: !Q && (Z === l.CosmeticType.character || Z === l.CosmeticType.trail),
                            onCosmeticSelectionChanged: a.onCosmeticSelectionChanged,
                            blockCharacterPreview: a.blockCharacterPreview
                        }) : (0, f.jsx)(w.EmptyState, {
                            mode: Q ? 'search' : X ? 'none' : 'filter',
                            cosmeticType: Z
                        })
                    ]
                })
            ]
        });
    };
    const J = o.default.div.attrs({
            className: 'maxWidth'
        })(x || (x = B``)),
        K = o.default.div(y || (y = B`
  font-family: ${ 0 };
  text-transform: uppercase;
  color: ${ 0 };
  font-size: 32px;
`), p.Fonts.FugazOne, k.default.White),
        L = o.default.div.attrs({
            className: 'maxWidth'
        })(z || (z = B`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`));
}), d.register('PmsqL', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ'),
        f = d('U8PGt'),
        g = d('uPP4W'),
        h = d('h99Nu'),
        i = d('hoTkY'),
        j = d('0F57G'),
        k = d('5nJMd26'),
        l = d('/w77y'),
        m = d('SeRL7'),
        n = d('eA1MC'),
        o = d('AIQiJ'),
        p = d('i0+wn');
    let q;
    var r = a => {
        const s = g.useRef(null),
            [t] = (0, f.default)(s),
            u = g.useMemo(() => {
                const v = t - 1,
                    w = Math.floor((v - s.gapBetweenItems) / (s.itemWidth + s.gapBetweenItems));
                if (w < 2)
                    return v;
                const x = v - (w * (s.itemWidth + s.gapBetweenItems) - s.gapBetweenItems);
                return s.itemWidth + x / w;
            }, [t]);
        return (0, e.jsx)(t, {
            ref: s,
            children: (0, e.jsxs)(k.default, {
                className: 'maxWidth',
                direction: a.gridView ? 'horizontal' : 'vertical',
                size: a.gridView ? s.gapBetweenItems : 15,
                wrap: !0,
                children: [
                    a.cosmetics.map(s => {
                        var v, w, x, y, z;
                        const {
                            cosmetic: A,
                            count: B
                        } = C;
                        let D = !1;
                        return (null == C || null === (v = C.cosmetic) || void 0 === v ? void 0 : v.type) === i.CosmeticType.character ? D = (null === (w = a.selectedCosmetics) || void 0 === w || null === (x = w.character) || void 0 === x ? void 0 : x.id) === A.id : (null == C || null === (y = C.cosmetic) || void 0 === y ? void 0 : y.type) === i.CosmeticType.trail && (D = (null === (z = a.selectedCosmetics) || void 0 === z ? void 0 : z.trail) === A.id), (0, e.jsx)(j.default, {
                            id: A.id,
                            count: B,
                            name: A.name,
                            description: A.description,
                            pack: A.packName,
                            type: A.type,
                            rarity: A.rarity,
                            style: A.style,
                            sellCost: A.sellCost,
                            gridView: a.gridView,
                            gridViewWidth: u,
                            selected: D,
                            editStyles: a.selectedCosmeticEditStyles && D ? a.selectedCosmeticEditStyles : void 0,
                            blockCharacterPreview: a.blockCharacterPreview,
                            onCosmeticSelectionChanged: a.onCosmeticSelectionChanged
                        }, A.id + a.gridView);
                    }),
                    (() => {
                        var E, F, G;
                        if (!a.requiresSelection)
                            return null;
                        if (!a.cosmeticType)
                            return null;
                        let H = !1;
                        ((null === (E = a.selectedCosmetics) || void 0 === E || null === (F = E.character) || void 0 === F ? void 0 : F.id) || a.cosmeticType !== i.CosmeticType.character) && ((null === (G = a.selectedCosmetics) || void 0 === G ? void 0 : G.trail) || a.cosmeticType !== i.CosmeticType.trail) || (H = !0);
                        const I = () => {
                            H || ((0, B.playClickSound)(), (0, D.selectCosmetic)({
                                cosmeticType: a.cosmeticType,
                                onSuccess: () => {
                                    (0, o.invalidateOwnedCosmetics)(), a.onCosmeticSelectionChanged && a.onCosmeticSelectionChanged();
                                }
                            }));
                        };
                        return a.gridView ? (0, e.jsx)(A.EmptyGridViewItem, {
                            selected: H,
                            onSelect: I,
                            width: u
                        }) : (0, e.jsx)(p.EmptyListViewItem, {
                            selected: H,
                            onSelect: I
                        });
                    })()
                ]
            })
        });
    };
    const s = {
            itemWidth: 120,
            gapBetweenItems: 10
        },
        t = h.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = (a => a)``));
}), d.register('0F57G', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('hoTkY'),
        g = d('SmomX'),
        h = d('Rbi1s'),
        i = d('/w77y'),
        j = d('i0+wn'),
        k = d('PjB0f'),
        l = d('QIGeq'),
        m = d('AIQiJ'),
        n = d('eA1MC'),
        o = d('SeRL7');
    var p = a => {
        const [q, r, s] = (0, k.useBoolean)(!1), t = (0, h.default)({
            id: a.id,
            type: a.type
        }), u = (0, g.rarityToBackground)(a.rarity);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)('div', {
                    onClick: () => {
                        (0, o.playClickSound)(), r();
                    },
                    style: {
                        cursor: 'pointer'
                    },
                    children: a.gridView ? (0, e.jsx)('div', {
                        style: {
                            width: a.gridViewWidth,
                            flexShrink: 0
                        },
                        children: (0, e.jsx)(i.GridViewItem, {
                            selected: a.selected,
                            image: t,
                            background: u,
                            imagePadding: a.type === f.CosmeticType.sticker ? 24 : void 0,
                            count: a.count
                        })
                    }) : (0, e.jsx)(j.ListViewItem, {
                        selected: a.selected,
                        image: t,
                        background: u,
                        name: a.name,
                        imagePadding: a.type === f.CosmeticType.sticker ? 12 : void 0
                    })
                }),
                (0, e.jsx)(l.default, {
                    open: q,
                    close: s,
                    id: a.id,
                    name: a.name,
                    count: a.count,
                    sellCost: a.sellCost,
                    image: t,
                    rarity: a.rarity,
                    type: a.type,
                    description: a.description,
                    pack: a.pack,
                    style: a.style,
                    editStyles: a.editStyles,
                    callToAction: q => {
                        if (a.type === f.CosmeticType.sticker)
                            return {
                                text: 'Close',
                                ariaLabel: 'Close',
                                onClick: () => {
                                    (0, o.playClickSound)(), s();
                                }
                            };
                        const v = void 0 !== q.editStyles && '{}' !== JSON.stringify(q.editStyles) && JSON.stringify(q.editStyles) !== JSON.stringify(a.editStyles),
                            w = a.selected ? v ? 'Update' : 'Selected' : 'Select';
                        return {
                            text: w,
                            ariaLabel: w,
                            disabled: a.selected && !v,
                            onClick: () => {
                                (0, o.playClickSound)(), (0, n.selectCosmetic)({
                                    cosmeticId: a.id,
                                    cosmeticType: a.type,
                                    editStyles: q.editStyles,
                                    onSuccess: () => {
                                        a.onCosmeticSelectionChanged && a.onCosmeticSelectionChanged(), (0, m.invalidateOwnedCosmetics)(), s();
                                    }
                                });
                            }
                        };
                    },
                    blockCharacterPreview: a.blockCharacterPreview
                })
            ]
        });
    };
}), d.register('i0+wn', function(b, c) {
    a(b.exports, 'ListViewItem', function() {
        return p;
    }), a(b.exports, 'EmptyListViewItem', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('5nJMd26');
    d('uPP4W');
    var g = d('h99Nu'),
        h = d('gSUVO'),
        i = d('lmfrI'),
        j = d('iMnBi');
    let k, l, m, n, o = a => a;
    const p = a => (0, e.jsx)(r, {
            selected: a.selected,
            children: (0, e.jsxs)(f.default, {
                className: 'maxWidth',
                direction: 'horizontal',
                size: 20,
                wrap: !0,
                children: [
                    (0, e.jsx)(s, {
                        style: {
                            background: a.background,
                            padding: a.imagePadding || 8
                        },
                        children: (0, e.jsx)(t, {
                            src: a.image
                        })
                    }),
                    (0, e.jsx)(u, {
                        children: a.name
                    })
                ]
            })
        }),
        q = a => (0, e.jsx)(r, {
            selected: a.selected,
            style: {
                cursor: 'pointer'
            },
            onClick: a.onSelect,
            children: (0, e.jsxs)(f.default, {
                className: 'maxWidth',
                direction: 'horizontal',
                size: 20,
                wrap: !0,
                children: [
                    (0, e.jsx)(s, {
                        style: {
                            background: 'radial-gradient( circle, rgba(78,77,77,1) 0%, rgba(32,32,32,1) 100% )',
                            fontSize: 22
                        },
                        children: (0, e.jsx)(j.default, {
                            name: 'fas fa-times'
                        })
                    }),
                    (0, e.jsx)(u, {
                        children: 'Empty Selection'
                    })
                ]
            })
        }),
        r = g.default.div.attrs({
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
`), a => a.selected ? 4 : 0),
        s = g.default.div.attrs({
            className: 'flex-center'
        })(l || (l = o`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid ${ 0 };
`), i.default.White),
        t = g.default.img(m || (m = o`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`)),
        u = g.default.div(n || (n = o`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.93);
`), h.Fonts.FugazOne);
}), d.register('xk+2C0', function(b, c) {
    a(b.exports, 'useDebouncedValue', function() {
        return j;
    });
    var e = d('uPP4W'),
        f = d('eK6B80'),
        g = d('laJ/S'),
        h = d('4MvmP'),
        i = {
            initializeWithNull: !1
        },
        j = function(a, b, c) {
            void 0 === c && (c = {});
            var k = Object.assign({}, i, c).initializeWithNull,
                l = (0, e.useState)(k ? null : a),
                m = l[0],
                n = l[1],
                o = (0, f.useDebounce)(n, b);
            return (0, g.useDidMount)(function() {
                k && o(a);
            }), (0, h.useDidUpdate)(function() {
                o(a);
            }, [a]), [
                m,
                n
            ];
        };
}), d.register('eK6B80', function(c, h) {
    a(c.exports, 'useDebounce', function() {
        return g;
    });
    var e = d('pW5ZG0'),
        f = d('uPP4W');

    function g(a, c, d) {
        var h = (0, f.useCallback)(function(a) {
                return b(e)(a, c, d);
            }, [
                c,
                d
            ]),
            i = (0, f.useRef)(h(a));
        return (0, f.useEffect)(function() {
            i.current = h(a);
        }, [
            a,
            h
        ]), i.current;
    }
}), d.register('pW5ZG0', function(a, b) {
    var e = /^\s+|\s+$/g,
        f = /^[-+]0x[0-9a-f]+$/i,
        g = /^0b[01]+$/i,
        h = /^0o[0-7]+$/i,
        i = j,
        k = 'object' == typeof c && c && c.Object === Object && c,
        l = 'object' == typeof self && self && self.Object === Object && self,
        m = k || l || Function('return this')(),
        n = Object.prototype.toString,
        o = Math.max,
        p = Math.min,
        q = function() {
            return m.Date.now();
        };

    function r(a) {
        var s = typeof a;
        return !!a && ('object' == s || 'function' == s);
    }

    function s(a) {
        if ('number' == typeof a)
            return a;
        if (function(a) {
                return 'symbol' == typeof a || function(a) {
                    return !!a && 'object' == typeof a;
                }(a) && '[object Symbol]' == n.call(a);
            }(a))
            return NaN;
        if (r(a)) {
            var t = 'function' == typeof a.valueOf ? a.valueOf() : a;
            a = r(t) ? t + '' : t;
        }
        if ('string' != typeof a)
            return 0 === a ? a : +a;
        a = a.replace(e, '');
        var t = g.test(a);
        return t || h.test(a) ? i(a.slice(2), t ? 2 : 8) : f.test(a) ? NaN : +a;
    }
    a.exports = function(a, b, c) {
        var t, u, v, w, x, y, z = 0,
            A = !1,
            B = !1,
            C = !0;
        if ('function' != typeof a)
            throw new TypeError('Expected a function');

        function D(b) {
            var E = F,
                G = H;
            return F = H = void 0, z = b, w = a.apply(G, E);
        }

        function E(a) {
            return z = a, x = setTimeout(G, b), A ? D(a) : w;
        }

        function F(a) {
            var G = a - y;
            return void 0 === y || G >= b || G < 0 || B && a - z >= v;
        }

        function G() {
            var H = q();
            if (F(H))
                return H(H);
            x = setTimeout(G, function(H) {
                var I = b - (H - y);
                return B ? p(I, v - (H - z)) : I;
            }(H));
        }

        function H(a) {
            return x = void 0, C && t ? D(a) : (t = u = void 0, w);
        }

        function I() {
            var J = q(),
                K = F(J);
            if (t = arguments, u = this, y = J, K) {
                if (void 0 === x)
                    return E(y);
                if (B)
                    return x = setTimeout(G, b), D(y);
            }
            return void 0 === x && (x = setTimeout(G, b)), w;
        }
        return b = s(b) || 0, r(c) && (A = !!c.leading, v = (B = 'maxWait' in c) ? o(s(c.maxWait) || 0, b) : v, C = 'trailing' in c ? !!c.trailing : C), I.cancel = function() {
            void 0 !== x && clearTimeout(x), z = 0, t = y = u = x = void 0;
        }, I.flush = function() {
            return void 0 === x ? w : H(q());
        }, I;
    };
}), d.register('4MvmP', function(b, c) {
    a(b.exports, 'useDidUpdate', function() {
        return f;
    });
    var e = d('uPP4W');

    function f(a, b) {
        var g = (0, e.useRef)(!1);
        void 0 === b || Array.isArray(b) ? Array.isArray(b) && 0 === b.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : b = [b], (0, e.useEffect)(function() {
            g.current ? a() : g.current = !0;
        }, b);
    }
}), d.register('eeWKg', function(b, c) {
    a(b.exports, 'useLocalstorageState', function() {
        return g;
    });
    var e = d('uPP4W');

    function f(a, b) {
        var g = function(a) {
            if ('undefined' == typeof localStorage)
                return null;
            var h = localStorage.getItem(a) || 'null';
            try {
                return JSON.parse(h);
            } catch (a) {
                console.error(a);
            }
            return h;
        }(a);
        return null === g ? b : g;
    }

    function g(a, b) {
        var h = (0, e.useState)(function() {
                return f(a, b);
            }),
            i = h[0],
            j = h[1],
            k = (0, e.useRef)(!1);
        (0, e.useEffect)(function() {
            k.current || function(a, b) {
                'undefined' == typeof localStorage || localStorage.setItem(a, JSON.stringify(b));
            }(a, i);
        }, [i]);
        var l = (0, e.useCallback)(function(b) {
            if (b.storageArea === localStorage && b.key === a)
                try {
                    k.current = !0;
                    var m = JSON.parse(b.newValue || 'null');
                    i !== m && j(m);
                } catch (a) {
                    console.log(a);
                }
        }, []);
        (0, e.useEffect)(function() {
            if ('undefined' != typeof window)
                return window.addEventListener('storage', l),
                    function() {
                        window.removeEventListener('storage', l);
                    };
            console.warn('useLocalstorageState: window is undefined.');
        }, []);
        var m = (0, e.useCallback)(function(a) {
                k.current = !1, j(a);
            }, []),
            n = (0, e.useCallback)(function() {
                localStorage.removeItem(a);
            }, []);
        return [
            i,
            m,
            n
        ];
    }
}), d.register('Xxp6m', function(b, c) {
    a(b.exports, 'SearchBar', function() {
        return l;
    });
    var e = d('8kSQZ'),
        f = d('h99Nu'),
        g = d('iMnBi');
    let h, i, j, k = a => a;
    const l = a => {
            const {
                value: m,
                onChange: n
            } = o;
            return (0, e.jsxs)(m, {
                children: [
                    (0, e.jsx)(n, {
                        children: (0, e.jsx)(g.default, {
                            name: 'fas fa-search'
                        })
                    }),
                    (0, e.jsx)(o, {
                        value: m,
                        onChange: o => n(o.target.value),
                        placeholder: 'Search...'
                    })
                ]
            });
        },
        m = f.default.div.attrs({
            className: 'maxWidth flex vc'
        })(h || (h = k`
  border-radius: 30px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.07);
  position: relative;
`)),
        n = f.default.div(i || (i = k`
  top: 11px;
  left: 20px;
  position: absolute;
`)),
        o = f.default.input.attrs({
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
}), d.register('4XKFX', function(b, c) {
    a(b.exports, 'Tabs', function() {
        return m;
    });
    var e = d('8kSQZ'),
        f = d('5nJMd26'),
        g = d('zlMYi'),
        h = d('h99Nu'),
        i = d('SeRL7'),
        j = d('y8lS825');
    let k;
    const l = '#3d9241',
        m = a => {
            const n = n => a.tab === n,
                o = n => () => {
                    n !== a.tab && ((0, i.playClickSound)(), a.setTab(n));
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
                    (0, e.jsx)(n, {
                        selected: n(g.Tab.All),
                        onClick: o(g.Tab.All),
                        children: 'All'
                    }),
                    (0, e.jsxs)(n, {
                        selected: n(g.Tab.Characters),
                        onClick: o(g.Tab.Characters),
                        children: [
                            j.default.character,
                            's'
                        ]
                    }),
                    (0, e.jsxs)(n, {
                        selected: n(g.Tab.Trails),
                        onClick: o(g.Tab.Trails),
                        children: [
                            j.default.trail,
                            's'
                        ]
                    }),
                    (0, e.jsxs)(n, {
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
        n = h.default.div(k || (k = (a => a)`
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
`), a => a.selected ? l : 'rgba(255, 255, 255, 0.1)', a => a.selected ? 0.1 : 0.2, a => a.selected ? l : 'rgba(255, 255, 255, 0.15)');
}), d.register('6FgIn', function(b, c) {
    a(b.exports, 'ViewAndSort', function() {
        return m;
    });
    var e = d('8kSQZ'),
        f = d('qEw51'),
        g = d('M1Vx4'),
        h = d('KlhV/'),
        i = d('zlMYi'),
        j = d('iMnBi'),
        k = d('j/N3t');
    const l = (0, e.jsx)(j.default, {
            name: 'fas fa-check',
            style: {
                color: '#673AB7'
            }
        }),
        m = a => {
            const n = n => {
                    if (a.sort === n)
                        return l;
                },
                o = n => {
                    if (a.view === n)
                        return l;
                },
                p = n => {
                    if (a.showAll === n)
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
                                onClick: () => a.setSort(i.SortMode.recent)
                            },
                            {
                                key: 'sort_rarity',
                                label: 'Rarity',
                                icon: n(i.SortMode.rarity),
                                onClick: () => a.setSort(i.SortMode.rarity)
                            },
                            {
                                key: 'sort_name',
                                label: 'Name',
                                icon: n(i.SortMode.alphabetical),
                                onClick: () => a.setSort(i.SortMode.alphabetical)
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
                                onClick: () => a.setView(i.View.grid)
                            },
                            {
                                key: 'view_list',
                                label: 'List',
                                icon: o(i.View.list),
                                onClick: () => a.setView(i.View.list)
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
                                onClick: () => a.setShowAll(!0)
                            },
                            {
                                key: 'filter_duplicates',
                                label: 'Duplicates',
                                icon: p(!1),
                                onClick: () => a.setShowAll(!1)
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
}), d.register('pKomi', function(b, c) {
    a(b.exports, 'EmptyState', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('YimJ0'),
        i = d('JJQ0+'),
        j = d('Zb18q'),
        k = d('S/jX4');
    let l, m, n, o = a => a;
    const p = a => {
            const q = f.useMemo(() => 'search' === a.mode ? 'We couldn\'t find any cosmetics matching your search' : 'filter' === a.mode ? 'No cosmetics match your filter' : a.cosmeticType ? (0, e.jsxs)(e.Fragment, {
                    children: [
                        'Visit The Shop to add',
                        ' ',
                        (0, e.jsxs)('b', {
                            style: {
                                color: k.default.Yellow
                            },
                            children: [
                                (0, j.cosmeticTypeName)(a.cosmeticType),
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
                    a.mode,
                    a.cosmeticType
                ]),
                r = f.useMemo(() => 'search' === a.mode || 'filter' === a.mode ? 'cosmos/searchEmpty.png' : 'cosmos/cosmeticsEmpty.png', [a.mode]);
            return (0, e.jsxs)(q, {
                children: [
                    (0, e.jsx)(r, {
                        src: (0, i.default)(r)
                    }),
                    (0, e.jsx)(s, {
                        children: q
                    })
                ]
            });
        },
        q = (0, g.default)(h.CenteredColumn).attrs({
            className: 'maxWidth'
        })(l || (l = o`
  padding: 20px 0px;
`)),
        r = g.default.img(m || (m = o`
  max-height: 175px;
  max-width: 90%;
`)),
        s = g.default.div(n || (n = o`
  font-size: 16px;
  font-style: italic;
  opacity: 0.9;
  margin-top: 35px;
  text-align: center;
`));
}), d.register('wiooy2', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var e, f = function() {
            function g(g, b) {
                for (var h = 0; h < b.length; h++) {
                    var i = b[h];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(g, i.key, i);
                }
            }
            return function(b, e, d) {
                return e && g(b.prototype, e), d && g(b, d), b;
            };
        }(),
        g = d('uPP4W'),
        h = (e = g) && e.__esModule ? e : {
            default: e
        },
        i = d('alDvw');
    var j = {
            position: 'relative'
        },
        k = function(a) {
            function l(a) {
                ! function(a, l) {
                    if (!(a instanceof l))
                        throw new TypeError('Cannot call a class as a function');
                }(this, l);
                var m = function(a, l) {
                    if (!a)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !l || 'object' != typeof l && 'function' != typeof l ? a : l;
                }(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, a));
                return m.setRef = m.setRef.bind(m), m;
            }
            return function(a, l) {
                if ('function' != typeof l && null !== l)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof l);
                a.prototype = Object.create(l && l.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : a.__proto__ = l);
            }(l, a), f(l, [{
                    key: 'componentWillReceiveProps',
                    value: function(a) {
                        a.active && !this.props.active && (0, i.confetti)(this.container, a.config);
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
                        return h.default.createElement('div', {
                            className: this.props.className,
                            style: j,
                            ref: this.setRef
                        });
                    }
                }
            ]), l;
        }(g.Component);
    a.exports.default = k;
}), d.register('alDvw', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.confetti = function(a) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            f = Object.assign({}, h, e),
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
            q = c(a, g, h, i, j),
            r = q.map(function(a) {
                return {
                    element: a,
                    physics: d(k, l, m, p)
                };
            });
        return g(a, r, n, o);
    };

    function e(a, b, e, d, g) {
        return Array.from({
            length: b
        }).map(function(b, h) {
            var f = document.createElement('div'),
                g = e[h % e.length];
            return f.style['background-color'] = g, f.style.width = d, f.style.height = g, f.style.position = 'absolute', f.style.willChange = 'transform, opacity', a.appendChild(f), f;
        });
    }

    function f(a, b, e, f) {
        var g = a * (Math.PI / 180),
            h = b * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * f(),
            wobbleSpeed: 0.1 + 0.1 * f(),
            velocity: 0.5 * e + f() * e,
            angle2D: -g + (0.5 * h - f() * h),
            angle3D: -Math.PI / 4 + f() * (Math.PI / 2),
            tiltAngle: f() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * f()
        };
    }

    function g(a, b, e, f) {
        var h = void 0;
        return new Promise(function(l) {
            requestAnimationFrame(function m(n) {
                h || (h = n);
                var i = h === n ? 0 : (n - h) / f;
                b.forEach(function(a) {
                    return function(a, b, e) {
                        a.physics.x += Math.cos(a.physics.angle2D) * a.physics.velocity, a.physics.y += Math.sin(a.physics.angle2D) * a.physics.velocity, a.physics.z += Math.sin(a.physics.angle3D) * a.physics.velocity, a.physics.wobble += a.physics.wobbleSpeed, a.physics.velocity *= e, a.physics.y += 3, a.physics.tiltAngle += a.physics.tiltAngleSpeed;
                        var j = a.physics,
                            k = j.x,
                            l = j.y,
                            m = j.tiltAngle,
                            n = j.wobble,
                            o = 'translate3d(' + (k + 10 * Math.cos(n)) + 'px, ' + (l + 10 * Math.sin(n)) + 'px, 0) rotate3d(1, 1, 1, ' + m + 'rad)';
                        a.element.style.transform = o, a.element.style.opacity = 1 - b;
                    }(a, i, e);
                }), h - h < f ? requestAnimationFrame(g) : (b.forEach(function(b) {
                    if (b.element.parentNode === a)
                        return a.removeChild(b.element);
                }), h());
            });
        });
    }
    var h = {
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
}), d.register('OlpXx', function(b, c) {
    a(b.exports, 'playSound', function() {
        return g;
    }), a(b.exports, 'preloadSound', function() {
        return i;
    });
    var e = d('6yrsF');
    const f = new Map(),
        g = a => {
            const h = Date.now();
            if (!a.path)
                return null;
            const i = a.forceCreateNewSound ? void 0 : f.get(a.path),
                j = i || new(0, e.Howl)({
                    src: a.path
                });
            if (j.volume(a.volume), i)
                a.delay ? setTimeout(() => {
                    j.play();
                }, a.delay) : j.play();
            else {
                const k = () => {
                    if (f.get(a.path) || a.forceCreateNewSound || f.set(a.path, j), a.delay) {
                        const l = h + a.delay,
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
        i = a => {
            const {
                path: j
            } = k;
            if (f.get(j))
                return;
            if (h.has(j))
                return;
            h.add(j);
            const l = new(0, e.Howl)({
                src: j
            });
            l.once('load', () => {
                h.delete(j), f.set(j, l);
            });
        };
});