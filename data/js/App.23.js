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
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    d = c.parcelRequire388b;
d.register('ECSXP', function(e, f) {
    var g;
    g = e.exports, Object.defineProperty(g, '__esModule', {
        value: !0,
        configurable: !0
    }), a(e.exports, 'Tab', function() {
        return _C;
    }), a(e.exports, 'SortMode', function() {
        return _F;
    }), a(e.exports, 'View', function() {
        return _H;
    }), a(e.exports, 'default', function() {
        return _K;
    });
    var h = d('gRbUn'),
        i = d('O0Kav'),
        j = d('kFQpk'),
        k = d('MgONH'),
        l = d('JNGrh0'),
        m = d('8KqQ+'),
        n = d('WrOhL'),
        o = d('TfnJ9'),
        p = d('H8QDs'),
        q = d('u4s09'),
        r = d('Eh2Wh'),
        s = d('G1RoA0'),
        t = d('gwSOf'),
        u = d('UDIgg'),
        v = d('KbqS8'),
        w = d('cpLNZ'),
        x = d('E2AMI26'),
        y = d('sXPK/');
    let z, A, B, _C, D = a => a;
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
    var _K = a => {
        var L, M;
        const {
            data: N,
            isLoading: O,
            error: P
        } = (0, j.default)(), [Q, R] = i.useState(''), [S] = (0, s.useDebouncedValue)(Q, 150), [T, U] = i.useState(_C.All), [V, W] = (0, t.useLocalstorageState)('cosmos_sortMode', _F.recent), [X, Y] = (0, t.useLocalstorageState)('cosmos_view', _H.grid), [Z, $] = i.useState(!0), ab = i.useMemo(() => T === _C.Characters ? n.CosmeticType.character : T === _C.Trails ? n.CosmeticType.trail : T === _C.Stickers ? n.CosmeticType.sticker : null, [T]), bb = i.useMemo(() => {
            if (!(null == N ? void 0 : N.ownedCosmetics))
                return [];
            const cb = S.toLowerCase(),
                db = N.ownedCosmetics.filter(db => {
                    var eb, fb;
                    if (ab && db.cosmetic.type !== ab)
                        return !1;
                    if (!Z && db.count <= 1)
                        return !1;
                    const gb = db.cosmetic.name.toLowerCase();
                    var hb;
                    const ib = null !== (hb = null === (eb = db.cosmetic.description) || void 0 === eb ? void 0 : eb.toLowerCase()) && void 0 !== hb ? hb : '';
                    var jb;
                    const kb = null !== (jb = null === (fb = db.cosmetic.packName) || void 0 === fb ? void 0 : fb.toLowerCase()) && void 0 !== jb ? jb : '';
                    return gb.includes(cb) || ib.includes(cb) || kb.includes(cb);
                });
            return V === _F.rarity ? db.sort((cb, db) => J.indexOf(cb.cosmetic.rarity) - J.indexOf(db.cosmetic.rarity)) : V === _F.alphabetical ? db.sort((cb, db) => cb.cosmetic.name.localeCompare(db.cosmetic.name)) : db;
        }, [
            N,
            S,
            ab,
            V,
            Z
        ]);
        return O ? (0, h.jsx)(k.Centered, {
            className: 'maxAll',
            children: (0, h.jsx)(l.default, {
                style: {
                    color: m.default.White
                }
            })
        }) : P ? (0, h.jsx)(k.Centered, {
            className: 'maxAll',
            children: 'There was an error loading your locker. Please refresh and try again.'
        }) : (0, h.jsxs)(o.LimitedWidth, {
            customWidth: 900,
            children: [
                (0, h.jsxs)(_L, {
                    children: [
                        (0, h.jsx)(_M, {
                            children: 'Locker'
                        }),
                        (0, h.jsxs)(x.default, {
                            size: 30,
                            className: 'maxWidth',
                            style: {
                                justifyContent: 'space-between'
                            },
                            children: [
                                (0, h.jsx)(v.Tabs, {
                                    tab: T,
                                    setTab: U
                                }),
                                (0, h.jsx)(w.ViewAndSort, {
                                    view: X,
                                    setView: Y,
                                    sort: V,
                                    setSort: W,
                                    showAll: Z,
                                    setShowAll: $
                                })
                            ]
                        })
                    ]
                }),
                (0, h.jsxs)(_N, {
                    children: [
                        (0, h.jsx)(u.SearchBar, {
                            value: Q,
                            onChange: R
                        }),
                        bb.length ? (0, h.jsx)(p.default, {
                            cosmetics: bb,
                            cosmeticType: ab,
                            gridView: X === _H.grid,
                            selectedCosmetics: N.selected,
                            selectedCosmeticEditStyles: null === (L = N.selected) || void 0 === L || null === (M = L.character) || void 0 === M ? void 0 : M.editStyleData,
                            requiresSelection: !S && (ab === n.CosmeticType.character || ab === n.CosmeticType.trail),
                            onCosmeticSelectionChanged: a.onCosmeticSelectionChanged,
                            blockCharacterPreview: a.blockCharacterPreview
                        }) : (0, h.jsx)(y.EmptyState, {
                            mode: S ? 'search' : Z ? 'none' : 'filter',
                            cosmeticType: ab
                        })
                    ]
                })
            ]
        });
    };
    const _L = q.default.div.attrs({
            className: 'maxWidth'
        })(z || (z = D``)),
        _M = q.default.div(A || (A = D`
  font-family: ${ 0 };
  text-transform: uppercase;
  color: ${ 0 };
  font-size: 32px;
`), r.Fonts.FugazOne, m.default.White),
        _N = q.default.div.attrs({
            className: 'maxWidth'
        })(B || (B = D`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`));
}), d.register('H8QDs', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('gRbUn'),
        h = d('bQWYI'),
        i = d('O0Kav'),
        j = d('u4s09'),
        k = d('WrOhL'),
        l = d('8bpYK'),
        m = d('E2AMI26'),
        n = d('BIQwd'),
        o = d('YGjrn'),
        p = d('e75GL'),
        q = d('kFQpk'),
        r = d('yxCjd');
    let s;
    var _t = a => {
        const u = i.useRef(null),
            [v] = (0, h.default)(u),
            w = i.useMemo(() => {
                const x = v - 1,
                    y = Math.floor((x - _u.gapBetweenItems) / (_u.itemWidth + _u.gapBetweenItems));
                if (y < 2)
                    return x;
                const z = x - (y * (_u.itemWidth + _u.gapBetweenItems) - _u.gapBetweenItems);
                return _u.itemWidth + z / y;
            }, [v]);
        return (0, g.jsx)(_v, {
            ref: u,
            children: (0, g.jsxs)(m.default, {
                className: 'maxWidth',
                direction: a.gridView ? 'horizontal' : 'vertical',
                size: a.gridView ? _u.gapBetweenItems : 15,
                wrap: !0,
                children: [
                    a.cosmetics.map(u => {
                        var x, y, z, A, B;
                        const {
                            cosmetic: C,
                            count: D
                        } = u;
                        let E = !1;
                        return (null == u || null === (x = u.cosmetic) || void 0 === x ? void 0 : x.type) === k.CosmeticType.character ? E = (null === (y = a.selectedCosmetics) || void 0 === y || null === (z = y.character) || void 0 === z ? void 0 : z.id) === C.id : (null == u || null === (A = u.cosmetic) || void 0 === A ? void 0 : A.type) === k.CosmeticType.trail && (E = (null === (B = a.selectedCosmetics) || void 0 === B ? void 0 : B.trail) === C.id), (0, g.jsx)(l.default, {
                            id: C.id,
                            count: D,
                            name: C.name,
                            description: C.description,
                            pack: C.packName,
                            type: C.type,
                            rarity: C.rarity,
                            style: C.style,
                            sellCost: C.sellCost,
                            gridView: a.gridView,
                            gridViewWidth: w,
                            selected: E,
                            editStyles: a.selectedCosmeticEditStyles && E ? a.selectedCosmeticEditStyles : void 0,
                            blockCharacterPreview: a.blockCharacterPreview,
                            onCosmeticSelectionChanged: a.onCosmeticSelectionChanged
                        }, C.id + a.gridView);
                    }),
                    (() => {
                        var x, y, z;
                        if (!a.requiresSelection)
                            return null;
                        if (!a.cosmeticType)
                            return null;
                        let A = !1;
                        ((null === (x = a.selectedCosmetics) || void 0 === x || null === (y = x.character) || void 0 === y ? void 0 : y.id) || a.cosmeticType !== k.CosmeticType.character) && ((null === (z = a.selectedCosmetics) || void 0 === z ? void 0 : z.trail) || a.cosmeticType !== k.CosmeticType.trail) || (A = !0);
                        const B = () => {
                            A || ((0, o.playClickSound)(), (0, p.selectCosmetic)({
                                cosmeticType: a.cosmeticType,
                                onSuccess: () => {
                                    (0, q.invalidateOwnedCosmetics)(), a.onCosmeticSelectionChanged && a.onCosmeticSelectionChanged();
                                }
                            }));
                        };
                        return a.gridView ? (0, g.jsx)(n.EmptyGridViewItem, {
                            selected: A,
                            onSelect: B,
                            width: w
                        }) : (0, g.jsx)(r.EmptyListViewItem, {
                            selected: A,
                            onSelect: B
                        });
                    })()
                ]
            })
        });
    };
    const _u = {
            itemWidth: 120,
            gapBetweenItems: 10
        },
        _v = j.default.div.attrs({
            className: 'maxWidth'
        })(s || (s = (a => a)``));
}), d.register('8bpYK', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('gRbUn');
    d('O0Kav');
    var h = d('WrOhL'),
        i = d('z0fxm'),
        j = d('RoTfF'),
        k = d('BIQwd'),
        l = d('yxCjd'),
        m = d('quE27'),
        n = d('NmKrj'),
        o = d('kFQpk'),
        p = d('e75GL'),
        q = d('YGjrn');
    var _r = a => {
        const [s, t, u] = (0, m.useBoolean)(!1), v = (0, j.default)({
            id: a.id,
            type: a.type
        }), w = (0, i.rarityToBackground)(a.rarity);
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)('div', {
                    onClick: () => {
                        (0, q.playClickSound)(), t();
                    },
                    style: {
                        cursor: 'pointer'
                    },
                    children: a.gridView ? (0, g.jsx)('div', {
                        style: {
                            width: a.gridViewWidth,
                            flexShrink: 0
                        },
                        children: (0, g.jsx)(k.GridViewItem, {
                            selected: a.selected,
                            image: v,
                            background: w,
                            imagePadding: a.type === h.CosmeticType.sticker ? 24 : void 0,
                            count: a.count
                        })
                    }) : (0, g.jsx)(l.ListViewItem, {
                        selected: a.selected,
                        image: v,
                        background: w,
                        name: a.name,
                        imagePadding: a.type === h.CosmeticType.sticker ? 12 : void 0
                    })
                }),
                (0, g.jsx)(n.default, {
                    open: s,
                    close: u,
                    id: a.id,
                    name: a.name,
                    count: a.count,
                    sellCost: a.sellCost,
                    image: v,
                    rarity: a.rarity,
                    type: a.type,
                    description: a.description,
                    pack: a.pack,
                    style: a.style,
                    editStyles: a.editStyles,
                    callToAction: s => {
                        if (a.type === h.CosmeticType.sticker)
                            return {
                                text: 'Close',
                                ariaLabel: 'Close',
                                onClick: () => {
                                    (0, q.playClickSound)(), u();
                                }
                            };
                        const x = void 0 !== s.editStyles && '{}' !== JSON.stringify(s.editStyles) && JSON.stringify(s.editStyles) !== JSON.stringify(a.editStyles),
                            y = a.selected ? x ? 'Update' : 'Selected' : 'Select';
                        return {
                            text: y,
                            ariaLabel: y,
                            disabled: a.selected && !x,
                            onClick: () => {
                                (0, q.playClickSound)(), (0, p.selectCosmetic)({
                                    cosmeticId: a.id,
                                    cosmeticType: a.type,
                                    editStyles: s.editStyles,
                                    onSuccess: () => {
                                        a.onCosmeticSelectionChanged && a.onCosmeticSelectionChanged(), (0, o.invalidateOwnedCosmetics)(), u();
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
}), d.register('yxCjd', function(e, f) {
    a(e.exports, 'ListViewItem', function() {
        return _r;
    }), a(e.exports, 'EmptyListViewItem', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('E2AMI26');
    d('O0Kav');
    var i = d('u4s09'),
        j = d('Eh2Wh'),
        k = d('8KqQ+'),
        l = d('t52Ep');
    let m, n, o, p, q = a => a;
    const _r = a => (0, g.jsx)(_t, {
            selected: a.selected,
            children: (0, g.jsxs)(h.default, {
                className: 'maxWidth',
                direction: 'horizontal',
                size: 20,
                wrap: !0,
                children: [
                    (0, g.jsx)(_u, {
                        style: {
                            background: a.background,
                            padding: a.imagePadding || 8
                        },
                        children: (0, g.jsx)(_v, {
                            src: a.image
                        })
                    }),
                    (0, g.jsx)(_w, {
                        children: a.name
                    })
                ]
            })
        }),
        _s = a => (0, g.jsx)(_t, {
            selected: a.selected,
            style: {
                cursor: 'pointer'
            },
            onClick: a.onSelect,
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
                        children: (0, g.jsx)(l.default, {
                            name: 'fas fa-times'
                        })
                    }),
                    (0, g.jsx)(_w, {
                        children: 'Empty Selection'
                    })
                ]
            })
        }),
        _t = i.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = q`
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
        _u = i.default.div.attrs({
            className: 'flex-center'
        })(n || (n = q`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid ${ 0 };
`), k.default.White),
        _v = i.default.img(o || (o = q`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`)),
        _w = i.default.div(p || (p = q`
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.93);
`), j.Fonts.FugazOne);
}), d.register('G1RoA0', function(e, f) {
    a(e.exports, 'useDebouncedValue', function() {
        return _l;
    });
    var g = d('O0Kav'),
        h = d('odbD70'),
        i = d('lKjHC'),
        j = d('kyZNW'),
        k = {
            initializeWithNull: !1
        },
        _l = function(m, n, o) {
            void 0 === o && (o = {});
            var p = Object.assign({}, k, o).initializeWithNull,
                q = (0, g.useState)(p ? null : m),
                r = q[0],
                s = q[1],
                t = (0, h.useDebounce)(s, n);
            return (0, i.useDidMount)(function() {
                p && t(m);
            }), (0, j.useDidUpdate)(function() {
                t(m);
            }, [m]), [
                r,
                s
            ];
        };
}), d.register('odbD70', function(e, f) {
    a(e.exports, 'useDebounce', function() {
        return _i;
    });
    var g = d('/hvd+0'),
        h = d('O0Kav');

    function _i(j, k, l) {
        var m = (0, h.useCallback)(function(n) {
                return b(g)(n, k, l);
            }, [
                k,
                l
            ]),
            n = (0, h.useRef)(m(j));
        return (0, h.useEffect)(function() {
            n.current = m(j);
        }, [
            j,
            m
        ]), n.current;
    }
}), d.register('/hvd+0', function(e, f) {
    var g = /^\s+|\s+$/g,
        h = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        j = /^0o[0-7]+$/i,
        k = parseInt,
        l = 'object' == typeof c && c && c.Object === Object && c,
        m = 'object' == typeof self && self && self.Object === Object && self,
        n = l || m || Function('return this')(),
        o = Object.prototype.toString,
        p = Math.max,
        q = Math.min,
        r = function() {
            return n.Date.now();
        };

    function s(t) {
        var u = typeof t;
        return !!t && ('object' == u || 'function' == u);
    }

    function t(u) {
        if ('number' == typeof u)
            return u;
        if (function(v) {
                return 'symbol' == typeof v || function(w) {
                    return !!w && 'object' == typeof w;
                }(v) && '[object Symbol]' == o.call(v);
            }(u))
            return NaN;
        if (s(u)) {
            var v = 'function' == typeof u.valueOf ? u.valueOf() : u;
            u = s(v) ? v + '' : v;
        }
        if ('string' != typeof u)
            return 0 === u ? u : +u;
        u = u.replace(g, '');
        var v = i.test(u);
        return v || j.test(u) ? k(u.slice(2), v ? 2 : 8) : h.test(u) ? NaN : +u;
    }
    e.exports = function(u, v, w) {
        var x, y, z, A, B, C, D = 0,
            E = !1,
            F = !1,
            G = !0;
        if ('function' != typeof u)
            throw new TypeError('Expected a function');

        function H(I) {
            var J = x,
                K = y;
            return x = y = void 0, D = I, A = u.apply(K, J);
        }

        function I(J) {
            return D = J, B = setTimeout(_K, v), E ? H(J) : A;
        }

        function J(K) {
            var L = K - C;
            return void 0 === C || L >= v || L < 0 || F && K - D >= z;
        }

        function _K() {
            var L = r();
            if (J(L))
                return _L(L);
            B = setTimeout(_K, function(M) {
                var N = v - (M - C);
                return F ? q(N, z - (M - D)) : N;
            }(L));
        }

        function _L(M) {
            return B = void 0, G && x ? H(M) : (x = y = void 0, A);
        }

        function M() {
            var N = r(),
                O = J(N);
            if (x = arguments, y = this, C = N, O) {
                if (void 0 === B)
                    return I(C);
                if (F)
                    return B = setTimeout(_K, v), H(C);
            }
            return void 0 === B && (B = setTimeout(_K, v)), A;
        }
        return v = t(v) || 0, s(w) && (E = !!w.leading, z = (F = 'maxWait' in w) ? p(t(w.maxWait) || 0, v) : z, G = 'trailing' in w ? !!w.trailing : G), M.cancel = function() {
            void 0 !== B && clearTimeout(B), D = 0, x = C = y = B = void 0;
        }, M.flush = function() {
            return void 0 === B ? A : _L(r());
        }, M;
    };
}), d.register('kyZNW', function(e, f) {
    a(e.exports, 'useDidUpdate', function() {
        return _h;
    });
    var g = d('O0Kav');

    function _h(i, j) {
        var k = (0, g.useRef)(!1);
        void 0 === j || Array.isArray(j) ? Array.isArray(j) && 0 === j.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : j = [j], (0, g.useEffect)(function() {
            k.current ? i() : k.current = !0;
        }, j);
    }
}), d.register('gwSOf', function(e, f) {
    a(e.exports, 'useLocalstorageState', function() {
        return _i;
    });
    var g = d('O0Kav');

    function h(i, j) {
        var k = function(l) {
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

    function _i(j, k) {
        var l = (0, g.useState)(function() {
                return h(j, k);
            }),
            m = l[0],
            n = l[1],
            o = (0, g.useRef)(!1);
        (0, g.useEffect)(function() {
            o.current || function(p, q) {
                'undefined' == typeof localStorage || localStorage.setItem(p, JSON.stringify(q));
            }(j, m);
        }, [m]);
        var p = (0, g.useCallback)(function(q) {
            if (q.storageArea === localStorage && q.key === j)
                try {
                    o.current = !0;
                    var r = JSON.parse(q.newValue || 'null');
                    m !== r && n(r);
                } catch (j) {
                    console.log(j);
                }
        }, []);
        (0, g.useEffect)(function() {
            if ('undefined' != typeof window)
                return window.addEventListener('storage', p),
                    function() {
                        window.removeEventListener('storage', p);
                    };
            console.warn('useLocalstorageState: window is undefined.');
        }, []);
        var q = (0, g.useCallback)(function(r) {
                o.current = !1, n(r);
            }, []),
            r = (0, g.useCallback)(function() {
                localStorage.removeItem(j);
            }, []);
        return [
            m,
            q,
            r
        ];
    }
}), d.register('UDIgg', function(e, f) {
    a(e.exports, 'SearchBar', function() {
        return _n;
    });
    var g = d('gRbUn'),
        h = d('u4s09'),
        i = d('t52Ep');
    let j, k, l, m = a => a;
    const _n = a => {
            const {
                value: o,
                onChange: p
            } = a;
            return (0, g.jsxs)(_o, {
                children: [
                    (0, g.jsx)(_p, {
                        children: (0, g.jsx)(i.default, {
                            name: 'fas fa-search'
                        })
                    }),
                    (0, g.jsx)(_q, {
                        value: o,
                        onChange: a => p(a.target.value),
                        placeholder: 'Search...'
                    })
                ]
            });
        },
        _o = h.default.div.attrs({
            className: 'maxWidth flex vc'
        })(j || (j = m`
  border-radius: 30px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.07);
  position: relative;
`)),
        _p = h.default.div(k || (k = m`
  top: 11px;
  left: 20px;
  position: absolute;
`)),
        _q = h.default.input.attrs({
            className: 'maxWidth'
        })(l || (l = m`
  border: none;
  background: transparent;
  padding: 10px 20px;
  padding-left: 50px;
  border-radius: 30px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`));
}), d.register('KbqS8', function(e, f) {
    a(e.exports, 'Tabs', function() {
        return _o;
    });
    var g = d('gRbUn'),
        h = d('E2AMI26'),
        i = d('ECSXP'),
        j = d('u4s09'),
        k = d('YGjrn'),
        l = d('LE3I425');
    let m;
    const n = '#3d9241',
        _o = a => {
            const p = p => a.tab === p,
                q = p => () => {
                    p !== a.tab && ((0, k.playClickSound)(), a.setTab(p));
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
                        selected: p(i.Tab.All),
                        onClick: q(i.Tab.All),
                        children: 'All'
                    }),
                    (0, g.jsxs)(_p, {
                        selected: p(i.Tab.Characters),
                        onClick: q(i.Tab.Characters),
                        children: [
                            l.default.character,
                            's'
                        ]
                    }),
                    (0, g.jsxs)(_p, {
                        selected: p(i.Tab.Trails),
                        onClick: q(i.Tab.Trails),
                        children: [
                            l.default.trail,
                            's'
                        ]
                    }),
                    (0, g.jsxs)(_p, {
                        selected: p(i.Tab.Stickers),
                        onClick: q(i.Tab.Stickers),
                        children: [
                            l.default.sticker,
                            's'
                        ]
                    })
                ]
            });
        },
        _p = j.default.div(m || (m = (a => a)`
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
`), a => a.selected ? n : 'rgba(255, 255, 255, 0.1)', a => a.selected ? 0.1 : 0.2, a => a.selected ? n : 'rgba(255, 255, 255, 0.15)');
}), d.register('cpLNZ', function(e, f) {
    a(e.exports, 'ViewAndSort', function() {
        return _o;
    });
    var g = d('gRbUn'),
        h = d('R2nG3'),
        i = d('M3JwW'),
        j = d('NmQt6'),
        k = d('ECSXP'),
        l = d('t52Ep'),
        m = d('1ZCzi');
    const n = (0, g.jsx)(l.default, {
            name: 'fas fa-check',
            style: {
                color: '#673AB7'
            }
        }),
        _o = a => {
            const p = p => {
                    if (a.sort === p)
                        return n;
                },
                q = p => {
                    if (a.view === p)
                        return n;
                },
                r = p => {
                    if (a.showAll === p)
                        return n;
                },
                s = [{
                        key: 'sort_group',
                        type: 'group',
                        label: 'Sort',
                        children: [{
                                key: 'sort_recent',
                                label: 'Most Recent',
                                icon: p(k.SortMode.recent),
                                onClick: () => a.setSort(k.SortMode.recent)
                            },
                            {
                                key: 'sort_rarity',
                                label: 'Rarity',
                                icon: p(k.SortMode.rarity),
                                onClick: () => a.setSort(k.SortMode.rarity)
                            },
                            {
                                key: 'sort_name',
                                label: 'Name',
                                icon: p(k.SortMode.alphabetical),
                                onClick: () => a.setSort(k.SortMode.alphabetical)
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
                                icon: q(k.View.grid),
                                onClick: () => a.setView(k.View.grid)
                            },
                            {
                                key: 'view_list',
                                label: 'List',
                                icon: q(k.View.list),
                                onClick: () => a.setView(k.View.list)
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
                                icon: r(!0),
                                onClick: () => a.setShowAll(!0)
                            },
                            {
                                key: 'filter_duplicates',
                                label: 'Duplicates',
                                icon: r(!1),
                                onClick: () => a.setShowAll(!1)
                            }
                        ]
                    }
                ];
            return (0, g.jsx)(h.default, {
                theme: {
                    algorithm: j.default.defaultAlgorithm,
                    token: {
                        colorBgBase: '#ffffff'
                    }
                },
                children: (0, g.jsx)('div', {
                    style: {
                        cursor: 'pointer',
                        fontSize: 20
                    },
                    children: (0, g.jsx)(i.default, {
                        menu: {
                            items: s
                        },
                        children: (0, g.jsx)(m.default, {})
                    })
                })
            });
        };
}), d.register('sXPK/', function(e, f) {
    a(e.exports, 'EmptyState', function() {
        return _r;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('u4s09'),
        j = d('MgONH'),
        k = d('UaUBz0'),
        l = d('GYoVM'),
        m = d('HOIhZ');
    let n, o, p, q = a => a;
    const _r = a => {
            const s = h.useMemo(() => 'search' === a.mode ? 'We couldn\'t find any cosmetics matching your search' : 'filter' === a.mode ? 'No cosmetics match your filter' : a.cosmeticType ? (0, g.jsxs)(g.Fragment, {
                    children: [
                        'Visit The Shop to add',
                        ' ',
                        (0, g.jsxs)('b', {
                            style: {
                                color: m.default.Yellow
                            },
                            children: [
                                (0, l.cosmeticTypeName)(a.cosmeticType),
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
                            style: {
                                color: m.default.Yellow
                            },
                            children: 'The Shop'
                        }),
                        ' to add some to your collection!'
                    ]
                }), [
                    a.mode,
                    a.cosmeticType
                ]),
                t = h.useMemo(() => 'search' === a.mode || 'filter' === a.mode ? 'cosmos/searchEmpty.png' : 'cosmos/cosmeticsEmpty.png', [a.mode]);
            return (0, g.jsxs)(_s, {
                children: [
                    (0, g.jsx)(_t, {
                        src: (0, k.default)(t)
                    }),
                    (0, g.jsx)(_u, {
                        children: s
                    })
                ]
            });
        },
        _s = (0, i.default)(j.CenteredColumn).attrs({
            className: 'maxWidth'
        })(n || (n = q`
  padding: 20px 0px;
`)),
        _t = i.default.img(o || (o = q`
  max-height: 175px;
  max-width: 90%;
`)),
        _u = i.default.div(p || (p = q`
  font-size: 16px;
  font-style: italic;
  opacity: 0.9;
  margin-top: 35px;
  text-align: center;
`));
}), d.register('9rEO42', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    var g, h = function() {
            function i(j, k) {
                for (var l = 0; l < k.length; l++) {
                    var m = k[l];
                    m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(j, m.key, m);
                }
            }
            return function(j, k, l) {
                return k && i(j.prototype, k), l && i(j, l), j;
            };
        }(),
        i = d('O0Kav'),
        j = (g = i) && g.__esModule ? g : {
            default: g
        },
        k = d('izSQB0');
    var l = {
            position: 'relative'
        },
        m = function(n) {
            function o(p) {
                ! function(q, r) {
                    if (!(q instanceof r))
                        throw new TypeError('Cannot call a class as a function');
                }(this, o);
                var q = function(r, s) {
                    if (!r)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !s || 'object' != typeof s && 'function' != typeof s ? r : s;
                }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, p));
                return q.setRef = q.setRef.bind(q), q;
            }
            return function(p, q) {
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
            }(o, n), h(o, [{
                    key: 'componentWillReceiveProps',
                    value: function(p) {
                        p.active && !this.props.active && (0, k.confetti)(this.container, p.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(p) {
                        this.container = p;
                    }
                },
                {
                    key: 'render',
                    value: function() {
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
}), d.register('izSQB0', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    }), e.exports.confetti = function(g) {
        var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = Object.assign({}, _n, h),
            j = i.elementCount,
            k = i.colors,
            l = i.width,
            m = i.height,
            n = i.angle,
            o = i.spread,
            p = i.startVelocity,
            q = i.decay,
            r = i.duration,
            s = i.random,
            t = c(g, j, k, l, m),
            u = t.map(function(v) {
                return {
                    element: v,
                    physics: d(n, o, p, s)
                };
            });
        return _l(g, u, q, r);
    };

    function g(h, i, j, k, _l) {
        return Array.from({
            length: i
        }).map(function(m, _n) {
            var o = document.createElement('div'),
                p = j[_n % j.length];
            return o.style['background-color'] = p, o.style.width = k, o.style.height = _l, o.style.position = 'absolute', o.style.willChange = 'transform, opacity', h.appendChild(o), o;
        });
    }

    function h(i, j, k, l) {
        var m = i * (Math.PI / 180),
            n = j * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * l(),
            wobbleSpeed: 0.1 + 0.1 * l(),
            velocity: 0.5 * k + l() * k,
            angle2D: -m + (0.5 * n - l() * n),
            angle3D: -Math.PI / 4 + l() * (Math.PI / 2),
            tiltAngle: l() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * l()
        };
    }

    function i(j, k, l, m) {
        var n = void 0;
        return new Promise(function(o) {
            requestAnimationFrame(function _y(p) {
                n || (n = p);
                var q = n === p ? 0 : (p - n) / m;
                k.forEach(function(r) {
                    return function(s, t, u) {
                        s.physics.x += Math.cos(s.physics.angle2D) * s.physics.velocity, s.physics.y += Math.sin(s.physics.angle2D) * s.physics.velocity, s.physics.z += Math.sin(s.physics.angle3D) * s.physics.velocity, s.physics.wobble += s.physics.wobbleSpeed, s.physics.velocity *= u, s.physics.y += 3, s.physics.tiltAngle += s.physics.tiltAngleSpeed;
                        var v = s.physics,
                            w = v.x,
                            x = v.y,
                            _y = v.tiltAngle,
                            z = v.wobble,
                            A = 'translate3d(' + (w + 10 * Math.cos(z)) + 'px, ' + (x + 10 * Math.sin(z)) + 'px, 0) rotate3d(1, 1, 1, ' + _y + 'rad)';
                        s.element.style.transform = A, s.element.style.opacity = 1 - t;
                    }(r, q, l);
                }), p - n < m ? requestAnimationFrame(_i) : (k.forEach(function(r) {
                    if (r.element.parentNode === j)
                        return j.removeChild(r.element);
                }), o());
            });
        });
    }
    var j = {
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
}), d.register('3jaMj', function(e, f) {
    a(e.exports, 'playSound', function() {
        return _i;
    }), a(e.exports, 'preloadSound', function() {
        return _k;
    });
    var g = d('6yrsF');
    const h = new Map(),
        _i = a => {
            const j = Date.now();
            if (!a.path)
                return null;
            const k = a.forceCreateNewSound ? void 0 : h.get(a.path),
                l = k || new(0, g.Howl)({
                    src: a.path
                });
            if (l.volume(a.volume), k)
                a.delay ? setTimeout(() => {
                    l.play();
                }, a.delay) : l.play();
            else {
                const m = () => {
                    if (h.get(a.path) || a.forceCreateNewSound || h.set(a.path, l), a.delay) {
                        const n = j + a.delay,
                            o = Date.now();
                        o > n ? l.play() : setTimeout(() => {
                            l.play();
                        }, n - o);
                    } else
                        l.play();
                };
                'loaded' === l.state() ? m() : l.once('load', m);
            }
            return l;
        },
        j = new Set(),
        _k = a => {
            const {
                path: l
            } = a;
            if (h.get(l))
                return;
            if (j.has(l))
                return;
            j.add(l);
            const m = new(0, g.Howl)({
                src: l
            });
            m.once('load', () => {
                j.delete(l), h.set(l, m);
            });
        };
});