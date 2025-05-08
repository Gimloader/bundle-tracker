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
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}, d = c.parcelRequire388b;
d.register('.....', function (e, f) {
    var g;
    g = e.exports, Object.defineProperty(g, '__esModule', {
        value: !0,
        configurable: !0
    }), a(e.exports, 'Tab', function () {
        return _C;
    }), a(e.exports, 'SortMode', function () {
        return _F;
    }), a(e.exports, 'View', function () {
        return _H;
    }), a(e.exports, 'default', function () {
        return _K;
    });
    var h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....'), w = d('.....'), x = d('.....'), y = d('.....');
    let z, A, B, _C, D = E => E;
    var E;
    let _F;
    var G;
    let _H;
    var I;
    (E = _C || (_C = {})).All = 'all', E.Characters = 'characters', E.Trails = 'trails', E.Stickers = 'stickers', (G = _F || (_F = {})).recent = 'recent', G.alphabetical = 'alphabetical', G.rarity = 'rarity', (I = _H || (_H = {})).grid = 'grid', I.list = 'list';
    const J = [
        n.CosmeticRarity.mythic,
        n.CosmeticRarity.legendary,
        n.CosmeticRarity.epic,
        n.CosmeticRarity.rare,
        n.CosmeticRarity.uncommon,
        n.CosmeticRarity.common
    ];
    var _K = L => {
        var M, N;
        const {
                data: O,
                isLoading: P,
                error: Q
            } = (0, j.default)(), [R, S] = i.useState(''), [T] = (0, s.useDebouncedValue)(R, 150), [U, V] = i.useState(_C.All), [W, X] = (0, t.useLocalstorageState)('cosmos_sortMode', _F.recent), [Y, Z] = (0, t.useLocalstorageState)('cosmos_view', _H.grid), [$, ab] = i.useState(!0), bb = i.useMemo(() => U === _C.Characters ? n.CosmeticType.character : U === _C.Trails ? n.CosmeticType.trail : U === _C.Stickers ? n.CosmeticType.sticker : null, [U]), cb = i.useMemo(() => {
                if (!(null == O ? void 0 : O.ownedCosmetics))
                    return [];
                const db = T.toLowerCase(), eb = O.ownedCosmetics.filter(fb => {
                        var gb, hb;
                        if (bb && fb.cosmetic.type !== bb)
                            return !1;
                        if (!$ && fb.count <= 1)
                            return !1;
                        const ib = fb.cosmetic.name.toLowerCase();
                        var jb;
                        const kb = null !== (jb = null === (gb = fb.cosmetic.description) || void 0 === gb ? void 0 : gb.toLowerCase()) && void 0 !== jb ? jb : '';
                        var lb;
                        const mb = null !== (lb = null === (hb = fb.cosmetic.packName) || void 0 === hb ? void 0 : hb.toLowerCase()) && void 0 !== lb ? lb : '';
                        return ib.includes(db) || kb.includes(db) || mb.includes(db);
                    });
                return W === _F.rarity ? eb.sort((fb, gb) => J.indexOf(fb.cosmetic.rarity) - J.indexOf(gb.cosmetic.rarity)) : W === _F.alphabetical ? eb.sort((fb, gb) => fb.cosmetic.name.localeCompare(gb.cosmetic.name)) : eb;
            }, [
                O,
                T,
                bb,
                W,
                $
            ]);
        return P ? (0, h.jsx)(k.Centered, {
            className: 'maxAll',
            children: (0, h.jsx)(l.default, { style: { color: m.default.White } })
        }) : Q ? (0, h.jsx)(k.Centered, {
            className: 'maxAll',
            children: 'There was an error loading your locker. Please refresh and try again.'
        }) : (0, h.jsxs)(o.LimitedWidth, {
            customWidth: 900,
            children: [
                (0, h.jsxs)(_L, {
                    children: [
                        (0, h.jsx)(_M, { children: 'Locker' }),
                        (0, h.jsxs)(x.default, {
                            size: 30,
                            className: 'maxWidth',
                            style: { justifyContent: 'space-between' },
                            children: [
                                (0, h.jsx)(v.Tabs, {
                                    tab: U,
                                    setTab: V
                                }),
                                (0, h.jsx)(w.ViewAndSort, {
                                    view: Y,
                                    setView: Z,
                                    sort: W,
                                    setSort: X,
                                    showAll: $,
                                    setShowAll: ab
                                })
                            ]
                        })
                    ]
                }),
                (0, h.jsxs)(_N, {
                    children: [
                        (0, h.jsx)(u.SearchBar, {
                            value: R,
                            onChange: S
                        }),
                        cb.length ? (0, h.jsx)(p.default, {
                            cosmetics: cb,
                            cosmeticType: bb,
                            gridView: Y === _H.grid,
                            selectedCosmetics: O.selected,
                            selectedCosmeticEditStyles: null === (M = O.selected) || void 0 === M || null === (N = M.character) || void 0 === N ? void 0 : N.editStyleData,
                            requiresSelection: !T && (bb === n.CosmeticType.character || bb === n.CosmeticType.trail),
                            onCosmeticSelectionChanged: L.onCosmeticSelectionChanged,
                            blockCharacterPreview: L.blockCharacterPreview
                        }) : (0, h.jsx)(y.EmptyState, {
                            mode: T ? 'search' : $ ? 'none' : 'filter',
                            cosmeticType: bb
                        })
                    ]
                })
            ]
        });
    };
    const _L = q.default.div.attrs({ className: 'maxWidth' })(z || (z = D``)), _M = q.default.div(A || (A = D`
  font-family: ${ 0 };
  text-transform: uppercase;
  color: ${ 0 };
  font-size: 32px;
`), r.Fonts.FugazOne, m.default.White), _N = q.default.div.attrs({ className: 'maxWidth' })(B || (B = D`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _t;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....');
    let s;
    var _t = u => {
        const v = i.useRef(null), [w] = (0, h.default)(v), x = i.useMemo(() => {
                const y = w - 1, z = Math.floor((y - _u.gapBetweenItems) / (_u.itemWidth + _u.gapBetweenItems));
                if (z < 2)
                    return y;
                const A = y - (z * (_u.itemWidth + _u.gapBetweenItems) - _u.gapBetweenItems);
                return _u.itemWidth + A / z;
            }, [w]);
        return (0, g.jsx)(_v, {
            ref: v,
            children: (0, g.jsxs)(m.default, {
                className: 'maxWidth',
                direction: u.gridView ? 'horizontal' : 'vertical',
                size: u.gridView ? _u.gapBetweenItems : 15,
                wrap: !0,
                children: [
                    u.cosmetics.map(y => {
                        var z, A, B, C, D;
                        const {
                            cosmetic: E,
                            count: F
                        } = y;
                        let G = !1;
                        return (null == y || null === (z = y.cosmetic) || void 0 === z ? void 0 : z.type) === k.CosmeticType.character ? G = (null === (A = u.selectedCosmetics) || void 0 === A || null === (B = A.character) || void 0 === B ? void 0 : B.id) === E.id : (null == y || null === (C = y.cosmetic) || void 0 === C ? void 0 : C.type) === k.CosmeticType.trail && (G = (null === (D = u.selectedCosmetics) || void 0 === D ? void 0 : D.trail) === E.id), (0, g.jsx)(l.default, {
                            id: E.id,
                            count: F,
                            name: E.name,
                            description: E.description,
                            pack: E.packName,
                            type: E.type,
                            rarity: E.rarity,
                            style: E.style,
                            sellCost: E.sellCost,
                            gridView: u.gridView,
                            gridViewWidth: x,
                            selected: G,
                            editStyles: u.selectedCosmeticEditStyles && G ? u.selectedCosmeticEditStyles : void 0,
                            blockCharacterPreview: u.blockCharacterPreview,
                            onCosmeticSelectionChanged: u.onCosmeticSelectionChanged
                        }, E.id + u.gridView);
                    }),
                    (() => {
                        var y, z, A;
                        if (!u.requiresSelection)
                            return null;
                        if (!u.cosmeticType)
                            return null;
                        let B = !1;
                        ((null === (y = u.selectedCosmetics) || void 0 === y || null === (z = y.character) || void 0 === z ? void 0 : z.id) || u.cosmeticType !== k.CosmeticType.character) && ((null === (A = u.selectedCosmetics) || void 0 === A ? void 0 : A.trail) || u.cosmeticType !== k.CosmeticType.trail) || (B = !0);
                        const C = () => {
                            B || ((0, o.playClickSound)(), (0, p.selectCosmetic)({
                                cosmeticType: u.cosmeticType,
                                onSuccess: () => {
                                    (0, q.invalidateOwnedCosmetics)(), u.onCosmeticSelectionChanged && u.onCosmeticSelectionChanged();
                                }
                            }));
                        };
                        return u.gridView ? (0, g.jsx)(n.EmptyGridViewItem, {
                            selected: B,
                            onSelect: C,
                            width: x
                        }) : (0, g.jsx)(r.EmptyListViewItem, {
                            selected: B,
                            onSelect: C
                        });
                    })()
                ]
            })
        });
    };
    const _u = {
            itemWidth: 120,
            gapBetweenItems: 10
        }, _v = j.default.div.attrs({ className: 'maxWidth' })(s || (s = (w => w)``));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _r;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....');
    var _r = s => {
        const [t, u, v] = (0, m.useBoolean)(!1), w = (0, j.default)({
                id: s.id,
                type: s.type
            }), x = (0, i.rarityToBackground)(s.rarity);
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)('div', {
                    onClick: () => {
                        (0, q.playClickSound)(), u();
                    },
                    style: { cursor: 'pointer' },
                    children: s.gridView ? (0, g.jsx)('div', {
                        style: {
                            width: s.gridViewWidth,
                            flexShrink: 0
                        },
                        children: (0, g.jsx)(k.GridViewItem, {
                            selected: s.selected,
                            image: w,
                            background: x,
                            imagePadding: s.type === h.CosmeticType.sticker ? 24 : void 0,
                            count: s.count
                        })
                    }) : (0, g.jsx)(l.ListViewItem, {
                        selected: s.selected,
                        image: w,
                        background: x,
                        name: s.name,
                        imagePadding: s.type === h.CosmeticType.sticker ? 12 : void 0
                    })
                }),
                (0, g.jsx)(n.default, {
                    open: t,
                    close: v,
                    id: s.id,
                    name: s.name,
                    count: s.count,
                    sellCost: s.sellCost,
                    image: w,
                    rarity: s.rarity,
                    type: s.type,
                    description: s.description,
                    pack: s.pack,
                    style: s.style,
                    editStyles: s.editStyles,
                    callToAction: y => {
                        if (s.type === h.CosmeticType.sticker)
                            return {
                                text: 'Close',
                                ariaLabel: 'Close',
                                onClick: () => {
                                    (0, q.playClickSound)(), v();
                                }
                            };
                        const z = void 0 !== y.editStyles && '{}' !== JSON.stringify(y.editStyles) && JSON.stringify(y.editStyles) !== JSON.stringify(s.editStyles), A = s.selected ? z ? 'Update' : 'Selected' : 'Select';
                        return {
                            text: A,
                            ariaLabel: A,
                            disabled: s.selected && !z,
                            onClick: () => {
                                (0, q.playClickSound)(), (0, p.selectCosmetic)({
                                    cosmeticId: s.id,
                                    cosmeticType: s.type,
                                    editStyles: y.editStyles,
                                    onSuccess: () => {
                                        s.onCosmeticSelectionChanged && s.onCosmeticSelectionChanged(), (0, o.invalidateOwnedCosmetics)(), v();
                                    }
                                });
                            }
                        };
                    },
                    blockCharacterPreview: s.blockCharacterPreview
                })
            ]
        });
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'ListViewItem', function () {
        return _r;
    }), a(e.exports, 'EmptyListViewItem', function () {
        return _s;
    });
    var g = d('.....'), h = d('.....');
    d('.....');
    var i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    let m, n, o, p, q = r => r;
    const _r = s => (0, g.jsx)(_t, {
            selected: s.selected,
            children: (0, g.jsxs)(h.default, {
                className: 'maxWidth',
                direction: 'horizontal',
                size: 20,
                wrap: !0,
                children: [
                    (0, g.jsx)(_u, {
                        style: {
                            background: s.background,
                            padding: s.imagePadding || 8
                        },
                        children: (0, g.jsx)(_v, { src: s.image })
                    }),
                    (0, g.jsx)(_w, { children: s.name })
                ]
            })
        }), _s = t => (0, g.jsx)(_t, {
            selected: t.selected,
            style: { cursor: 'pointer' },
            onClick: t.onSelect,
            children: (0, g.jsxs)(h.default, {
                className: 'maxWidth',
                direction: 'horizontal',
                size: 20,
                wrap: !0,
                children: [
                    (0, g.jsx)(_u, {
                        style: {
                            background: 'radial-gradient( circle, rgba(78,77,77,1) 0%, rgba(32,32,32,1) 100% )',
                            fontSize: 22
                        },
                        children: (0, g.jsx)(l.default, { name: 'fas fa-times' })
                    }),
                    (0, g.jsx)(_w, { children: 'Empty Selection' })
                ]
            })
        }), _t = i.default.div.attrs({ className: 'maxWidth' })(m || (m = q`
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
`), u => u.selected ? 4 : 0), _u = i.default.div.attrs({ className: 'flex-center' })(n || (n = q`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid ${ 0 };
`), k.default.White), _v = i.default.img(o || (o = q`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`)), _w = i.default.div(p || (p = q`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.93);
`), j.Fonts.FugazOne);
}), d.register('.....', function (e, f) {
    a(e.exports, 'useDebouncedValue', function () {
        return _l;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = { initializeWithNull: !1 }, _l = function (m, n, o) {
            void 0 === o && (o = {});
            var p = Object.assign({}, k, o).initializeWithNull, q = (0, g.useState)(p ? null : m), r = q[0], s = q[1], t = (0, h.useDebounce)(s, n);
            return (0, i.useDidMount)(function () {
                p && t(m);
            }), (0, j.useDidUpdate)(function () {
                t(m);
            }, [m]), [
                r,
                s
            ];
        };
}), d.register('.....', function (e, f) {
    a(e.exports, 'useDebounce', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    function _i(j, k, l) {
        var m = (0, h.useCallback)(function (n) {
                return b(g)(n, k, l);
            }, [
                k,
                l
            ]), n = (0, h.useRef)(m(j));
        return (0, h.useEffect)(function () {
            _i.current = m(j);
        }, [
            j,
            m
        ]), _i.current;
    }
}), d.register('.....', function (e, f) {
    var g = /^\s+|\s+$/g, h = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, j = /^0o[0-7]+$/i, k = parseInt, l = 'object' == typeof c && c && c.Object === Object && c, m = 'object' == typeof self && self && self.Object === Object && self, n = l || m || Function('return this')(), o = Object.prototype.toString, p = Math.max, q = Math.min, r = function () {
            return n.Date.now();
        };
    function s(t) {
        var u = typeof t;
        return !!t && ('object' == u || 'function' == u);
    }
    function u(v) {
        if ('number' == typeof v)
            return v;
        if (function (w) {
                return 'symbol' == typeof w || function (x) {
                    return !!x && 'object' == typeof x;
                }(w) && '[object Symbol]' == o.call(w);
            }(v))
            return NaN;
        if (s(v)) {
            var w = 'function' == typeof v.valueOf ? v.valueOf() : v;
            v = s(w) ? w + '' : w;
        }
        if ('string' != typeof v)
            return 0 === v ? v : +v;
        v = v.replace(g, '');
        var x = i.test(v);
        return x || j.test(v) ? k(v.slice(2), x ? 2 : 8) : h.test(v) ? NaN : +v;
    }
    e.exports = function (x, y, z) {
        var A, B, C, D, E, F, G = 0, H = !1, I = !1, J = !0;
        if ('function' != typeof x)
            throw new TypeError('Expected a function');
        function K(L) {
            var M = A, N = B;
            return A = B = void 0, G = L, D = x.apply(N, M);
        }
        function N(O) {
            return G = O, E = setTimeout(_Q, y), H ? K(O) : D;
        }
        function O(P) {
            var Q = P - F;
            return void 0 === F || Q >= y || Q < 0 || I && P - G >= N;
        }
        function _Q() {
            var R = r();
            if (O(R))
                return _S(R);
            E = setTimeout(_Q, function (S) {
                var T = y - (S - F);
                return I ? q(T, N - (S - G)) : T;
            }(R));
        }
        function _S(T) {
            return E = void 0, J && A ? K(T) : (A = B = void 0, D);
        }
        function T() {
            var U = r(), V = O(U);
            if (A = arguments, B = this, F = U, V) {
                if (void 0 === E)
                    return N(F);
                if (I)
                    return E = setTimeout(_Q, y), K(F);
            }
            return void 0 === E && (E = setTimeout(_Q, y)), D;
        }
        return y = u(y) || 0, s(V) && (H = !!V.leading, N = (I = 'maxWait' in V) ? p(u(V.maxWait) || 0, y) : N, J = 'trailing' in V ? !!V.trailing : J), T.cancel = function () {
            void 0 !== E && clearTimeout(E), G = 0, A = F = B = E = void 0;
        }, T.flush = function () {
            return void 0 === E ? D : _S(r());
        }, T;
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'useDidUpdate', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        var k = (0, g.useRef)(!1);
        void 0 === j || Array.isArray(j) ? Array.isArray(j) && 0 === j.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : j = [j], (0, g.useEffect)(function () {
            k.current ? i() : k.current = !0;
        }, j);
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'useLocalstorageState', function () {
        return _j;
    });
    var g = d('.....');
    function h(i, j) {
        var k = function (l) {
            if ('undefined' == typeof localStorage)
                return null;
            var m = localStorage.getItem(l) || 'null';
            try {
                return JSON.parse(m);
            } catch (l) {
                console.error(l);
            }
            return m;
        }(i);
        return null === k ? j : k;
    }
    function _j(k, l) {
        var m = (0, g.useState)(function () {
                return h(k, l);
            }), n = m[0], o = m[1], p = (0, g.useRef)(!1);
        (0, g.useEffect)(function () {
            p.current || function (q, r) {
                'undefined' == typeof localStorage || localStorage.setItem(q, JSON.stringify(r));
            }(k, n);
        }, [n]);
        var q = (0, g.useCallback)(function (r) {
            if (r.storageArea === localStorage && r.key === k)
                try {
                    p.current = !0;
                    var s = JSON.parse(r.newValue || 'null');
                    n !== s && _j(s);
                } catch (k) {
                    console.log(k);
                }
        }, []);
        (0, g.useEffect)(function () {
            if ('undefined' != typeof window)
                return window.addEventListener('storage', q), function () {
                    window.removeEventListener('storage', q);
                };
            console.warn('useLocalstorageState: window is undefined.');
        }, []);
        var r = (0, g.useCallback)(function (s) {
                p.current = !1, _j(s);
            }, []), s = (0, g.useCallback)(function () {
                localStorage.removeItem(k);
            }, []);
        return [
            n,
            r,
            s
        ];
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'SearchBar', function () {
        return _n;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    let j, k, l, m = n => n;
    const _n = o => {
            const {
                value: p,
                onChange: q
            } = o;
            return (0, g.jsxs)(_o, {
                children: [
                    (0, g.jsx)(_p, { children: (0, g.jsx)(i.default, { name: 'fas fa-search' }) }),
                    (0, g.jsx)(_q, {
                        value: p,
                        onChange: r => q(r.target.value),
                        placeholder: 'Search...'
                    })
                ]
            });
        }, _o = h.default.div.attrs({ className: 'maxWidth flex vc' })(j || (j = m`
  border-radius: 30px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.07);
  position: relative;
`)), _p = h.default.div(k || (k = m`
  top: 11px;
  left: 20px;
  position: absolute;
`)), _q = h.default.input.attrs({ className: 'maxWidth' })(l || (l = m`
  border: none;
  background: transparent;
  padding: 10px 20px;
  padding-left: 50px;
  border-radius: 30px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`));
}), d.register('.....', function (e, f) {
    a(e.exports, 'Tabs', function () {
        return _o;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    let m;
    const n = '#3d9241', _o = p => {
            const q = r => p.tab === r, r = s => () => {
                    s !== p.tab && ((0, k.playClickSound)(), p.setTab(s));
                };
            return (0, g.jsxs)(h.default, {
                direction: 'horizontal',
                size: 8,
                style: {
                    marginTop: 8,
                    marginBottom: 20
                },
                wrap: !0,
                children: [
                    (0, g.jsx)(_p, {
                        selected: q(i.Tab.All),
                        onClick: r(i.Tab.All),
                        children: 'All'
                    }),
                    (0, g.jsxs)(_p, {
                        selected: q(i.Tab.Characters),
                        onClick: r(i.Tab.Characters),
                        children: [
                            l.default.character,
                            's'
                        ]
                    }),
                    (0, g.jsxs)(_p, {
                        selected: q(i.Tab.Trails),
                        onClick: r(i.Tab.Trails),
                        children: [
                            l.default.trail,
                            's'
                        ]
                    }),
                    (0, g.jsxs)(_p, {
                        selected: q(i.Tab.Stickers),
                        onClick: r(i.Tab.Stickers),
                        children: [
                            l.default.sticker,
                            's'
                        ]
                    })
                ]
            });
        }, _p = j.default.div(m || (m = (q => q)`
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
`), q => q.selected ? n : 'rgba(255, 255, 255, 0.1)', q => q.selected ? 0.1 : 0.2, q => q.selected ? n : 'rgba(255, 255, 255, 0.15)');
}), d.register('.....', function (e, f) {
    a(e.exports, 'ViewAndSort', function () {
        return _o;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....');
    const n = (0, g.jsx)(l.default, {
            name: 'fas fa-check',
            style: { color: '#673AB7' }
        }), _o = p => {
            const q = r => {
                    if (p.sort === r)
                        return n;
                }, r = s => {
                    if (p.view === s)
                        return n;
                }, s = t => {
                    if (p.showAll === t)
                        return n;
                }, t = [
                    {
                        key: 'sort_group',
                        type: 'group',
                        label: 'Sort',
                        children: [
                            {
                                key: 'sort_recent',
                                label: 'Most Recent',
                                icon: q(k.SortMode.recent),
                                onClick: () => p.setSort(k.SortMode.recent)
                            },
                            {
                                key: 'sort_rarity',
                                label: 'Rarity',
                                icon: q(k.SortMode.rarity),
                                onClick: () => p.setSort(k.SortMode.rarity)
                            },
                            {
                                key: 'sort_name',
                                label: 'Name',
                                icon: q(k.SortMode.alphabetical),
                                onClick: () => p.setSort(k.SortMode.alphabetical)
                            }
                        ]
                    },
                    {
                        key: 'view_group',
                        type: 'group',
                        label: 'View',
                        children: [
                            {
                                key: 'view_grid',
                                label: 'Grid',
                                icon: r(k.View.grid),
                                onClick: () => p.setView(k.View.grid)
                            },
                            {
                                key: 'view_list',
                                label: 'List',
                                icon: r(k.View.list),
                                onClick: () => p.setView(k.View.list)
                            }
                        ]
                    },
                    {
                        key: 'filter_group',
                        type: 'group',
                        label: 'Filter',
                        children: [
                            {
                                key: 'filter_all',
                                label: 'All',
                                icon: s(!0),
                                onClick: () => p.setShowAll(!0)
                            },
                            {
                                key: 'filter_duplicates',
                                label: 'Duplicates',
                                icon: s(!1),
                                onClick: () => p.setShowAll(!1)
                            }
                        ]
                    }
                ];
            return (0, g.jsx)(h.default, {
                theme: {
                    algorithm: j.default.defaultAlgorithm,
                    token: { colorBgBase: '#ffffff' }
                },
                children: (0, g.jsx)('div', {
                    style: {
                        cursor: 'pointer',
                        fontSize: 20
                    },
                    children: (0, g.jsx)(i.default, {
                        menu: { items: t },
                        children: (0, g.jsx)(m.default, {})
                    })
                })
            });
        };
}), d.register('.....', function (e, f) {
    a(e.exports, 'EmptyState', function () {
        return _r;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....');
    let n, o, p, q = r => r;
    const _r = s => {
            const t = h.useMemo(() => 'search' === s.mode ? 'We couldn\'t find any cosmetics matching your search' : 'filter' === s.mode ? 'No cosmetics match your filter' : s.cosmeticType ? (0, g.jsxs)(g.Fragment, {
                    children: [
                        'Visit The Shop to add',
                        ' ',
                        (0, g.jsxs)('b', {
                            style: { color: m.default.Yellow },
                            children: [
                                (0, l.cosmeticTypeName)(s.cosmeticType),
                                's'
                            ]
                        }),
                        ' ',
                        'to your collection!'
                    ]
                }) : (0, g.jsxs)(g.Fragment, {
                    children: [
                        'You don\'t own any cosmetics...yet! Visit',
                        ' ',
                        (0, g.jsx)('b', {
                            style: { color: m.default.Yellow },
                            children: 'The Shop'
                        }),
                        ' to add some to your collection!'
                    ]
                }), [
                    s.mode,
                    s.cosmeticType
                ]), u = h.useMemo(() => 'search' === s.mode || 'filter' === s.mode ? 'cosmos/searchEmpty.png' : 'cosmos/cosmeticsEmpty.png', [s.mode]);
            return (0, g.jsxs)(_s, {
                children: [
                    (0, g.jsx)(_t, { src: (0, k.default)(u) }),
                    (0, g.jsx)(_u, { children: t })
                ]
            });
        }, _s = (0, i.default)(j.CenteredColumn).attrs({ className: 'maxWidth' })(n || (n = q`
  padding: 20px 0px;
`)), _t = i.default.img(o || (o = q`
  max-height: 175px;
  max-width: 90%;
`)), _u = i.default.div(p || (p = q`
  font-size: 16px;
  font-style: italic;
  opacity: 0.9;
  margin-top: 35px;
  text-align: center;
`));
}), d.register('.....', function (e, f) {
    Object.defineProperty(e.exports, '__esModule', { value: !0 });
    var g, h = function () {
            function i(j, k) {
                for (var l = 0; l < k.length; l++) {
                    var m = k[l];
                    m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(j, m.key, m);
                }
            }
            return function (l, m, n) {
                return m && i(l.prototype, m), n && i(l, n), l;
            };
        }(), i = d('.....'), j = (g = i) && g.__esModule ? g : { default: g }, k = d('.....');
    var l = { position: 'relative' }, m = function (n) {
            function o(p) {
                !function (q, r) {
                    if (!(q instanceof r))
                        throw new TypeError('Cannot call a class as a function');
                }(this, o);
                var q = function (r, s) {
                    if (!r)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !s || 'object' != typeof s && 'function' != typeof s ? r : s;
                }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, p));
                return q.setRef = q.setRef.bind(q), q;
            }
            return function (q, r) {
                if ('function' != typeof r && null !== r)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof r);
                q.prototype = Object.create(r && r.prototype, {
                    constructor: {
                        value: q,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(q, r) : q.__proto__ = r);
            }(o, n), h(o, [
                {
                    key: 'componentWillReceiveProps',
                    value: function (q) {
                        q.active && !this.props.active && (0, k.confetti)(this.container, q.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function (q) {
                        this.container = q;
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        return j.default.createElement('div', {
                            className: this.props.className,
                            style: l,
                            ref: this.setRef
                        });
                    }
                }
            ]), o;
        }(i.Component);
    e.exports.default = m;
}), d.register('.....', function (e, f) {
    Object.defineProperty(e.exports, '__esModule', { value: !0 }), e.exports.confetti = function (g) {
        var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = Object.assign({}, _n, h), j = i.elementCount, k = i.colors, l = i.width, m = i.height, n = i.angle, o = i.spread, p = i.startVelocity, q = i.decay, r = i.duration, s = i.random, t = c(g, j, k, l, m), u = t.map(function (v) {
                return {
                    element: v,
                    physics: d(n, o, p, s)
                };
            });
        return _m(g, u, q, r);
    };
    function g(h, i, j, k, l) {
        return Array.from({ length: i }).map(function (m, n) {
            var o = document.createElement('div'), p = j[n % j.length];
            return o.style['background-color'] = p, o.style.width = k, o.style.height = l, o.style.position = 'absolute', o.style.willChange = 'transform, opacity', h.appendChild(o), o;
        });
    }
    function h(i, j, k, l) {
        var _m = i * (Math.PI / 180), _n = j * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * l(),
            wobbleSpeed: 0.1 + 0.1 * l(),
            velocity: 0.5 * k + l() * k,
            angle2D: -_m + (0.5 * _n - l() * _n),
            angle3D: -Math.PI / 4 + l() * (Math.PI / 2),
            tiltAngle: l() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * l()
        };
    }
    function k(l, m, n, o) {
        var p = void 0;
        return new Promise(function (q) {
            requestAnimationFrame(function a(r) {
                k || (k = r);
                var s = k === r ? 0 : (r - k) / o;
                m.forEach(function (t) {
                    return function (u, v, w) {
                        u.physics.x += Math.cos(u.physics.angle2D) * u.physics.velocity, u.physics.y += Math.sin(u.physics.angle2D) * u.physics.velocity, u.physics.z += Math.sin(u.physics.angle3D) * u.physics.velocity, u.physics.wobble += u.physics.wobbleSpeed, u.physics.velocity *= w, u.physics.y += 3, u.physics.tiltAngle += u.physics.tiltAngleSpeed;
                        var x = u.physics, y = x.x, z = x.y, A = x.tiltAngle, B = x.wobble, C = 'translate3d(' + (y + 10 * Math.cos(B)) + 'px, ' + (z + 10 * Math.sin(B)) + 'px, 0) rotate3d(1, 1, 1, ' + A + 'rad)';
                        u.element.style.transform = C, u.element.style.opacity = 1 - v;
                    }(t, s, n);
                }), r - k < o ? requestAnimationFrame(a) : (m.forEach(function (t) {
                    if (t.element.parentNode === l)
                        return l.removeChild(t.element);
                }), q());
            });
        });
    }
    var m = {
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
}), d.register('.....', function (e, f) {
    a(e.exports, 'playSound', function () {
        return _i;
    }), a(e.exports, 'preloadSound', function () {
        return _k;
    });
    var g = d('.....');
    const h = new Map(), _i = j => {
            const k = Date.now();
            if (!j.path)
                return null;
            const l = j.forceCreateNewSound ? void 0 : h.get(j.path), m = l || new (0, g.Howl)({ src: j.path });
            if (m.volume(j.volume), l)
                j.delay ? setTimeout(() => {
                    m.play();
                }, j.delay) : m.play();
            else {
                const n = () => {
                    if (h.get(j.path) || j.forceCreateNewSound || h.set(j.path, m), j.delay) {
                        const o = k + j.delay, p = Date.now();
                        p > o ? m.play() : setTimeout(() => {
                            m.play();
                        }, o - p);
                    } else
                        m.play();
                };
                'loaded' === m.state() ? n() : m.once('load', n);
            }
            return m;
        }, j = new Set(), _k = l => {
            const {path: m} = l;
            if (h.get(m))
                return;
            if (j.has(m))
                return;
            j.add(m);
            const n = new (0, g.Howl)({ src: m });
            n.once('load', () => {
                j.delete(m), h.set(m, n);
            });
        };
});