function e(e, t, r, i) {
    Object.defineProperty(e, t, {
        get: r,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    i = r.parcelRequire388b;
i.register("fo63o", (function(t, r) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "Tab", (function() {
        return T
    })), e(t.exports, "SortMode", (function() {
        return V
    })), e(t.exports, "View", (function() {
        return N
    })), e(t.exports, "default", (function() {
        return I
    }));
    var n = i("hxEiv"),
        a = i("fywoC"),
        s = i("9j0jv"),
        c = i("4ifJF"),
        l = i("9Mv96"),
        d = i("lKmIF"),
        u = i("6a2jS"),
        f = i("77Dar"),
        p = i("eQVkb"),
        m = i("2FDaO"),
        y = i("69SUA"),
        h = i("7MBQI"),
        g = i("dOEXC"),
        v = i("admq8"),
        x = i("47sTv"),
        b = i("hsots"),
        w = i("i5Qjx"),
        C = i("fRobV");
    let S, j, k, T, O = e => e;
    var M;
    let V;
    var E;
    let N;
    var A;
    (M = T || (T = {})).All = "all", M.Characters = "characters", M.Trails = "trails", M.Stickers = "stickers", (E = V || (V = {})).recent = "recent", E.alphabetical = "alphabetical", E.rarity = "rarity", (A = N || (N = {})).grid = "grid", A.list = "list";
    const W = [u.CosmeticRarity.mythic, u.CosmeticRarity.legendary, u.CosmeticRarity.epic, u.CosmeticRarity.rare, u.CosmeticRarity.uncommon, u.CosmeticRarity.common];
    var I = e => {
        var t, r;
        const {
            data: i,
            isLoading: o,
            error: m
        } = (0, s.default)(), [y, S] = a.useState(""), [j] = (0, h.useDebouncedValue)(y, 150), [k, O] = a.useState(T.All), [M, E] = (0, g.useLocalstorageState)("cosmos_sortMode", V.recent), [A, I] = (0, g.useLocalstorageState)("cosmos_view", N.grid), [D, F] = a.useState(!0), z = a.useMemo((() => k === T.Characters ? u.CosmeticType.character : k === T.Trails ? u.CosmeticType.trail : k === T.Stickers ? u.CosmeticType.sticker : null), [k]), L = a.useMemo((() => {
            if (!(null == i ? void 0 : i.ownedCosmetics)) return [];
            const e = j.toLowerCase(),
                t = i.ownedCosmetics.filter((t => {
                    var r, i;
                    if (z && t.cosmetic.type !== z) return !1;
                    if (!D && t.count <= 1) return !1;
                    const o = t.cosmetic.name.toLowerCase();
                    var n;
                    const a = null !== (n = null === (r = t.cosmetic.description) || void 0 === r ? void 0 : r.toLowerCase()) && void 0 !== n ? n : "";
                    var s;
                    const c = null !== (s = null === (i = t.cosmetic.packName) || void 0 === i ? void 0 : i.toLowerCase()) && void 0 !== s ? s : "";
                    return o.includes(e) || a.includes(e) || c.includes(e)
                }));
            return M === V.rarity ? t.sort(((e, t) => W.indexOf(e.cosmetic.rarity) - W.indexOf(t.cosmetic.rarity))) : M === V.alphabetical ? t.sort(((e, t) => e.cosmetic.name.localeCompare(t.cosmetic.name))) : t
        }), [i, j, z, M, D]);
        return o ? (0, n.jsx)(c.Centered, {
            className: "maxAll",
            children: (0, n.jsx)(l.default, {
                style: {
                    color: d.default.White
                }
            })
        }) : m ? (0, n.jsx)(c.Centered, {
            className: "maxAll",
            children: "There was an error loading your locker. Please refresh and try again."
        }) : (0, n.jsxs)(f.LimitedWidth, {
            customWidth: 900,
            children: [(0, n.jsxs)(_, {
                children: [(0, n.jsx)(P, {
                    children: "Locker"
                }), (0, n.jsxs)(w.default, {
                    size: 30,
                    className: "maxWidth",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [(0, n.jsx)(x.Tabs, {
                        tab: k,
                        setTab: O
                    }), (0, n.jsx)(b.ViewAndSort, {
                        view: A,
                        setView: I,
                        sort: M,
                        setSort: E,
                        showAll: D,
                        setShowAll: F
                    })]
                })]
            }), (0, n.jsxs)(R, {
                children: [(0, n.jsx)(v.SearchBar, {
                    value: y,
                    onChange: S
                }), L.length ? (0, n.jsx)(p.default, {
                    cosmetics: L,
                    cosmeticType: z,
                    gridView: A === N.grid,
                    selectedCosmetics: i.selected,
                    selectedCosmeticEditStyles: null === (t = i.selected) || void 0 === t || null === (r = t.character) || void 0 === r ? void 0 : r.editStyleData,
                    requiresSelection: !j && (z === u.CosmeticType.character || z === u.CosmeticType.trail),
                    onCosmeticSelectionChanged: e.onCosmeticSelectionChanged,
                    blockCharacterPreview: e.blockCharacterPreview
                }) : (0, n.jsx)(C.EmptyState, {
                    mode: j ? "search" : D ? "none" : "filter",
                    cosmeticType: z
                })]
            })]
        })
    };
    const _ = m.default.div.attrs({
            className: "maxWidth"
        })(S || (S = O``)),
        P = m.default.div(j || (j = O`
  font-family: ${0};
  text-transform: uppercase;
  color: ${0};
  font-size: 32px;
`), y.Fonts.FugazOne, d.default.White),
        R = m.default.div.attrs({
            className: "maxWidth"
        })(k || (k = O`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`))
})), i.register("eQVkb", (function(t, r) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = i("hxEiv"),
        n = i("56tQE"),
        a = i("fywoC"),
        s = i("2FDaO"),
        c = i("6a2jS"),
        l = i("fe25m"),
        d = i("i5Qjx"),
        u = i("guoa4"),
        f = i("6BIRj"),
        p = i("9SlNd"),
        m = i("9j0jv"),
        y = i("4XoWx");
    let h;
    var g = e => {
        const t = a.useRef(null),
            [r] = (0, n.default)(t),
            i = a.useMemo((() => {
                const e = r - 1,
                    t = Math.floor((e - v.gapBetweenItems) / (v.itemWidth + v.gapBetweenItems));
                if (t < 2) return e;
                const i = e - (t * (v.itemWidth + v.gapBetweenItems) - v.gapBetweenItems);
                return v.itemWidth + i / t
            }), [r]);
        return (0, o.jsx)(x, {
            ref: t,
            children: (0, o.jsxs)(d.default, {
                className: "maxWidth",
                direction: e.gridView ? "horizontal" : "vertical",
                size: e.gridView ? v.gapBetweenItems : 15,
                wrap: !0,
                children: [e.cosmetics.map((t => {
                    var r, n, a, s, d;
                    const {
                        cosmetic: u,
                        count: f
                    } = t;
                    let p = !1;
                    return (null == t || null === (r = t.cosmetic) || void 0 === r ? void 0 : r.type) === c.CosmeticType.character ? p = (null === (n = e.selectedCosmetics) || void 0 === n || null === (a = n.character) || void 0 === a ? void 0 : a.id) === u.id : (null == t || null === (s = t.cosmetic) || void 0 === s ? void 0 : s.type) === c.CosmeticType.trail && (p = (null === (d = e.selectedCosmetics) || void 0 === d ? void 0 : d.trail) === u.id), (0, o.jsx)(l.default, {
                        id: u.id,
                        count: f,
                        name: u.name,
                        description: u.description,
                        pack: u.packName,
                        type: u.type,
                        rarity: u.rarity,
                        style: u.style,
                        sellCost: u.sellCost,
                        gridView: e.gridView,
                        gridViewWidth: i,
                        selected: p,
                        editStyles: e.selectedCosmeticEditStyles && p ? e.selectedCosmeticEditStyles : void 0,
                        blockCharacterPreview: e.blockCharacterPreview,
                        onCosmeticSelectionChanged: e.onCosmeticSelectionChanged
                    }, u.id + e.gridView)
                })), (() => {
                    var t, r, n;
                    if (!e.requiresSelection) return null;
                    if (!e.cosmeticType) return null;
                    let a = !1;
                    ((null === (t = e.selectedCosmetics) || void 0 === t || null === (r = t.character) || void 0 === r ? void 0 : r.id) || e.cosmeticType !== c.CosmeticType.character) && ((null === (n = e.selectedCosmetics) || void 0 === n ? void 0 : n.trail) || e.cosmeticType !== c.CosmeticType.trail) || (a = !0);
                    const s = () => {
                        a || ((0, f.playClickSound)(), (0, p.selectCosmetic)({
                            cosmeticType: e.cosmeticType,
                            onSuccess: () => {
                                (0, m.invalidateOwnedCosmetics)(), e.onCosmeticSelectionChanged && e.onCosmeticSelectionChanged()
                            }
                        }))
                    };
                    return e.gridView ? (0, o.jsx)(u.EmptyGridViewItem, {
                        selected: a,
                        onSelect: s,
                        width: i
                    }) : (0, o.jsx)(y.EmptyListViewItem, {
                        selected: a,
                        onSelect: s
                    })
                })()]
            })
        })
    };
    const v = {
            itemWidth: 120,
            gapBetweenItems: 10
        },
        x = s.default.div.attrs({
            className: "maxWidth"
        })(h || (h = (e => e)``))
})), i.register("fe25m", (function(t, r) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = i("hxEiv");
    i("fywoC");
    var n = i("6a2jS"),
        a = i("a5sZj"),
        s = i("1lU5G"),
        c = i("guoa4"),
        l = i("4XoWx"),
        d = i("iMOcM"),
        u = i("hifxW"),
        f = i("9j0jv"),
        p = i("9SlNd"),
        m = i("6BIRj");
    var y = e => {
        const [t, r, i] = (0, d.useBoolean)(!1), y = (0, s.default)({
            id: e.id,
            type: e.type
        }), h = (0, a.rarityToBackground)(e.rarity);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("div", {
                onClick: () => {
                    (0, m.playClickSound)(), r()
                },
                style: {
                    cursor: "pointer"
                },
                children: e.gridView ? (0, o.jsx)("div", {
                    style: {
                        width: e.gridViewWidth,
                        flexShrink: 0
                    },
                    children: (0, o.jsx)(c.GridViewItem, {
                        selected: e.selected,
                        image: y,
                        background: h,
                        imagePadding: e.type === n.CosmeticType.sticker ? 24 : void 0,
                        count: e.count
                    })
                }) : (0, o.jsx)(l.ListViewItem, {
                    selected: e.selected,
                    image: y,
                    background: h,
                    name: e.name,
                    imagePadding: e.type === n.CosmeticType.sticker ? 12 : void 0
                })
            }), (0, o.jsx)(u.default, {
                open: t,
                close: i,
                id: e.id,
                name: e.name,
                count: e.count,
                sellCost: e.sellCost,
                image: y,
                rarity: e.rarity,
                type: e.type,
                description: e.description,
                pack: e.pack,
                style: e.style,
                editStyles: e.editStyles,
                callToAction: t => {
                    if (e.type === n.CosmeticType.sticker) return {
                        text: "Close",
                        ariaLabel: "Close",
                        onClick: () => {
                            (0, m.playClickSound)(), i()
                        }
                    };
                    const r = void 0 !== t.editStyles && "{}" !== JSON.stringify(t.editStyles) && JSON.stringify(t.editStyles) !== JSON.stringify(e.editStyles),
                        o = e.selected ? r ? "Update" : "Selected" : "Select";
                    return {
                        text: o,
                        ariaLabel: o,
                        disabled: e.selected && !r,
                        onClick: () => {
                            (0, m.playClickSound)(), (0, p.selectCosmetic)({
                                cosmeticId: e.id,
                                cosmeticType: e.type,
                                editStyles: t.editStyles,
                                onSuccess: () => {
                                    e.onCosmeticSelectionChanged && e.onCosmeticSelectionChanged(), (0, f.invalidateOwnedCosmetics)(), i()
                                }
                            })
                        }
                    }
                },
                blockCharacterPreview: e.blockCharacterPreview
            })]
        })
    }
})), i.register("4XoWx", (function(t, r) {
    e(t.exports, "ListViewItem", (function() {
        return y
    })), e(t.exports, "EmptyListViewItem", (function() {
        return h
    }));
    var o = i("hxEiv"),
        n = i("i5Qjx");
    i("fywoC");
    var a = i("2FDaO"),
        s = i("69SUA"),
        c = i("lKmIF"),
        l = i("py2Xr");
    let d, u, f, p, m = e => e;
    const y = e => (0, o.jsx)(g, {
            selected: e.selected,
            children: (0, o.jsxs)(n.default, {
                className: "maxWidth",
                direction: "horizontal",
                size: 20,
                wrap: !0,
                children: [(0, o.jsx)(v, {
                    style: {
                        background: e.background,
                        padding: e.imagePadding || 8
                    },
                    children: (0, o.jsx)(x, {
                        src: e.image
                    })
                }), (0, o.jsx)(b, {
                    children: e.name
                })]
            })
        }),
        h = e => (0, o.jsx)(g, {
            selected: e.selected,
            style: {
                cursor: "pointer"
            },
            onClick: e.onSelect,
            children: (0, o.jsxs)(n.default, {
                className: "maxWidth",
                direction: "horizontal",
                size: 20,
                wrap: !0,
                children: [(0, o.jsx)(v, {
                    style: {
                        background: "radial-gradient( circle, rgba(78,77,77,1) 0%, rgba(32,32,32,1) 100% )",
                        fontSize: 22
                    },
                    children: (0, o.jsx)(l.default, {
                        name: "fas fa-times"
                    })
                }), (0, o.jsx)(b, {
                    children: "Empty Selection"
                })]
            })
        }),
        g = a.default.div.attrs({
            className: "maxWidth"
        })(d || (d = m`
  padding: 12px 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-style: solid;
  border-color: #fdd835;
  border-width: ${0}px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.23);
  }
`), (e => e.selected ? 4 : 0)),
        v = a.default.div.attrs({
            className: "flex-center"
        })(u || (u = m`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid ${0};
`), c.default.White),
        x = a.default.img(f || (f = m`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`)),
        b = a.default.div(p || (p = m`
  font-family: ${0};
  text-transform: uppercase;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.93);
`), s.Fonts.FugazOne)
})), i.register("7MBQI", (function(t, r) {
    e(t.exports, "useDebouncedValue", (function() {
        return l
    }));
    var o = i("fywoC"),
        n = i("eP2ui"),
        a = i("cPGmn"),
        s = i("1tUw4"),
        c = {
            initializeWithNull: !1
        },
        l = function(e, t, r) {
            void 0 === r && (r = {});
            var i = Object.assign({}, c, r).initializeWithNull,
                l = (0, o.useState)(i ? null : e),
                d = l[0],
                u = l[1],
                f = (0, n.useDebounce)(u, t);
            return (0, a.useDidMount)((function() {
                i && f(e)
            })), (0, s.useDidUpdate)((function() {
                f(e)
            }), [e]), [d, u]
        }
})), i.register("eP2ui", (function(r, o) {
    e(r.exports, "useDebounce", (function() {
        return s
    }));
    var n = i("bna3d"),
        a = i("fywoC");

    function s(e, r, i) {
        var o = (0, a.useCallback)((function(e) {
                return t(n)(e, r, i)
            }), [r, i]),
            s = (0, a.useRef)(o(e));
        return (0, a.useEffect)((function() {
            s.current = o(e)
        }), [e, o]), s.current
    }
})), i.register("bna3d", (function(e, t) {
    var i = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        n = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        s = parseInt,
        c = "object" == typeof r && r && r.Object === Object && r,
        l = "object" == typeof self && self && self.Object === Object && self,
        d = c || l || Function("return this")(),
        u = Object.prototype.toString,
        f = Math.max,
        p = Math.min,
        m = function() {
            return d.Date.now()
        };

    function y(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }

    function h(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
                return "symbol" == typeof e || function(e) {
                    return !!e && "object" == typeof e
                }(e) && "[object Symbol]" == u.call(e)
            }(e)) return NaN;
        if (y(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = y(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var r = n.test(e);
        return r || a.test(e) ? s(e.slice(2), r ? 2 : 8) : o.test(e) ? NaN : +e
    }
    e.exports = function(e, t, r) {
        var i, o, n, a, s, c, l = 0,
            d = !1,
            u = !1,
            g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function v(t) {
            var r = i,
                n = o;
            return i = o = void 0, l = t, a = e.apply(n, r)
        }

        function x(e) {
            return l = e, s = setTimeout(w, t), d ? v(e) : a
        }

        function b(e) {
            var r = e - c;
            return void 0 === c || r >= t || r < 0 || u && e - l >= n
        }

        function w() {
            var e = m();
            if (b(e)) return C(e);
            s = setTimeout(w, function(e) {
                var r = t - (e - c);
                return u ? p(r, n - (e - l)) : r
            }(e))
        }

        function C(e) {
            return s = void 0, g && i ? v(e) : (i = o = void 0, a)
        }

        function S() {
            var e = m(),
                r = b(e);
            if (i = arguments, o = this, c = e, r) {
                if (void 0 === s) return x(c);
                if (u) return s = setTimeout(w, t), v(c)
            }
            return void 0 === s && (s = setTimeout(w, t)), a
        }
        return t = h(t) || 0, y(r) && (d = !!r.leading, n = (u = "maxWait" in r) ? f(h(r.maxWait) || 0, t) : n, g = "trailing" in r ? !!r.trailing : g), S.cancel = function() {
            void 0 !== s && clearTimeout(s), l = 0, i = c = o = s = void 0
        }, S.flush = function() {
            return void 0 === s ? a : C(m())
        }, S
    }
})), i.register("1tUw4", (function(t, r) {
    e(t.exports, "useDidUpdate", (function() {
        return n
    }));
    var o = i("fywoC");

    function n(e, t) {
        var r = (0, o.useRef)(!1);
        void 0 === t || Array.isArray(t) ? Array.isArray(t) && 0 === t.length && console.warn("Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.") : t = [t], (0, o.useEffect)((function() {
            r.current ? e() : r.current = !0
        }), t)
    }
})), i.register("dOEXC", (function(t, r) {
    e(t.exports, "useLocalstorageState", (function() {
        return a
    }));
    var o = i("fywoC");

    function n(e, t) {
        var r = function(e) {
            if ("undefined" == typeof localStorage) return null;
            var t = localStorage.getItem(e) || "null";
            try {
                return JSON.parse(t)
            } catch (e) {
                console.error(e)
            }
            return t
        }(e);
        return null === r ? t : r
    }

    function a(e, t) {
        var r = (0, o.useState)((function() {
                return n(e, t)
            })),
            i = r[0],
            a = r[1],
            s = (0, o.useRef)(!1);
        (0, o.useEffect)((function() {
            s.current || function(e, t) {
                "undefined" == typeof localStorage || localStorage.setItem(e, JSON.stringify(t))
            }(e, i)
        }), [i]);
        var c = (0, o.useCallback)((function(t) {
            if (t.storageArea === localStorage && t.key === e) try {
                s.current = !0;
                var r = JSON.parse(t.newValue || "null");
                i !== r && a(r)
            } catch (e) {
                console.log(e)
            }
        }), []);
        (0, o.useEffect)((function() {
            if ("undefined" != typeof window) return window.addEventListener("storage", c),
                function() {
                    window.removeEventListener("storage", c)
                };
            console.warn("useLocalstorageState: window is undefined.")
        }), []);
        var l = (0, o.useCallback)((function(e) {
                s.current = !1, a(e)
            }), []),
            d = (0, o.useCallback)((function() {
                localStorage.removeItem(e)
            }), []);
        return [i, l, d]
    }
})), i.register("admq8", (function(t, r) {
    e(t.exports, "SearchBar", (function() {
        return u
    }));
    var o = i("hxEiv"),
        n = i("2FDaO"),
        a = i("py2Xr");
    let s, c, l, d = e => e;
    const u = e => {
            const {
                value: t,
                onChange: r
            } = e;
            return (0, o.jsxs)(f, {
                children: [(0, o.jsx)(p, {
                    children: (0, o.jsx)(a.default, {
                        name: "fas fa-search"
                    })
                }), (0, o.jsx)(m, {
                    value: t,
                    onChange: e => r(e.target.value),
                    placeholder: "Search..."
                })]
            })
        },
        f = n.default.div.attrs({
            className: "maxWidth flex vc"
        })(s || (s = d`
  border-radius: 30px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.07);
  position: relative;
`)),
        p = n.default.div(c || (c = d`
  top: 11px;
  left: 20px;
  position: absolute;
`)),
        m = n.default.input.attrs({
            className: "maxWidth"
        })(l || (l = d`
  border: none;
  background: transparent;
  padding: 10px 20px;
  padding-left: 50px;
  border-radius: 30px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`))
})), i.register("47sTv", (function(t, r) {
    e(t.exports, "Tabs", (function() {
        return f
    }));
    var o = i("hxEiv"),
        n = i("i5Qjx"),
        a = i("fo63o"),
        s = i("2FDaO"),
        c = i("6BIRj"),
        l = i("2Y5iQ");
    let d;
    const u = "#3d9241",
        f = e => {
            const t = t => e.tab === t,
                r = t => () => {
                    t !== e.tab && ((0, c.playClickSound)(), e.setTab(t))
                };
            return (0, o.jsxs)(n.default, {
                direction: "horizontal",
                size: 8,
                style: {
                    marginTop: 8,
                    marginBottom: 20
                },
                wrap: !0,
                children: [(0, o.jsx)(p, {
                    selected: t(a.Tab.All),
                    onClick: r(a.Tab.All),
                    children: "All"
                }), (0, o.jsxs)(p, {
                    selected: t(a.Tab.Characters),
                    onClick: r(a.Tab.Characters),
                    children: [l.default.character, "s"]
                }), (0, o.jsxs)(p, {
                    selected: t(a.Tab.Trails),
                    onClick: r(a.Tab.Trails),
                    children: [l.default.trail, "s"]
                }), (0, o.jsxs)(p, {
                    selected: t(a.Tab.Stickers),
                    onClick: r(a.Tab.Stickers),
                    children: [l.default.sticker, "s"]
                })]
            })
        },
        p = s.default.div(d || (d = (e => e)`
  background: ${0};
  padding: 8px 18px;
  line-height: 1;
  font-size: 16px;
  border-radius: 50px;
  cursor: pointer;
  transition: background ${0}s,
    transform 0.2s;
  will-change: background, transform;
  &:hover {
    background: ${0};
    transform: scale(1.05);
  }
`), (e => e.selected ? u : "rgba(255, 255, 255, 0.1)"), (e => e.selected ? .1 : .2), (e => e.selected ? u : "rgba(255, 255, 255, 0.15)"))
})), i.register("hsots", (function(t, r) {
    e(t.exports, "ViewAndSort", (function() {
        return f
    }));
    var o = i("hxEiv"),
        n = i("4gMdJ"),
        a = i("gnAdP"),
        s = i("l4uFh"),
        c = i("fo63o"),
        l = i("py2Xr"),
        d = i("90RCV");
    const u = (0, o.jsx)(l.default, {
            name: "fas fa-check",
            style: {
                color: "#673AB7"
            }
        }),
        f = e => {
            const t = t => {
                    if (e.sort === t) return u
                },
                r = t => {
                    if (e.view === t) return u
                },
                i = t => {
                    if (e.showAll === t) return u
                },
                l = [{
                    key: "sort_group",
                    type: "group",
                    label: "Sort",
                    children: [{
                        key: "sort_recent",
                        label: "Most Recent",
                        icon: t(c.SortMode.recent),
                        onClick: () => e.setSort(c.SortMode.recent)
                    }, {
                        key: "sort_rarity",
                        label: "Rarity",
                        icon: t(c.SortMode.rarity),
                        onClick: () => e.setSort(c.SortMode.rarity)
                    }, {
                        key: "sort_name",
                        label: "Name",
                        icon: t(c.SortMode.alphabetical),
                        onClick: () => e.setSort(c.SortMode.alphabetical)
                    }]
                }, {
                    key: "view_group",
                    type: "group",
                    label: "View",
                    children: [{
                        key: "view_grid",
                        label: "Grid",
                        icon: r(c.View.grid),
                        onClick: () => e.setView(c.View.grid)
                    }, {
                        key: "view_list",
                        label: "List",
                        icon: r(c.View.list),
                        onClick: () => e.setView(c.View.list)
                    }]
                }, {
                    key: "filter_group",
                    type: "group",
                    label: "Filter",
                    children: [{
                        key: "filter_all",
                        label: "All",
                        icon: i(!0),
                        onClick: () => e.setShowAll(!0)
                    }, {
                        key: "filter_duplicates",
                        label: "Duplicates",
                        icon: i(!1),
                        onClick: () => e.setShowAll(!1)
                    }]
                }];
            return (0, o.jsx)(n.default, {
                theme: {
                    algorithm: s.default.defaultAlgorithm,
                    token: {
                        colorBgBase: "#ffffff"
                    }
                },
                children: (0, o.jsx)("div", {
                    style: {
                        cursor: "pointer",
                        fontSize: 20
                    },
                    children: (0, o.jsx)(a.default, {
                        menu: {
                            items: l
                        },
                        children: (0, o.jsx)(d.default, {})
                    })
                })
            })
        }
})), i.register("fRobV", (function(t, r) {
    e(t.exports, "EmptyState", (function() {
        return y
    }));
    var o = i("hxEiv"),
        n = i("fywoC"),
        a = i("2FDaO"),
        s = i("4ifJF"),
        c = i("alREA"),
        l = i("bDJkg"),
        d = i("8UJqa");
    let u, f, p, m = e => e;
    const y = e => {
            const t = n.useMemo((() => "search" === e.mode ? "We couldn't find any cosmetics matching your search" : "filter" === e.mode ? "No cosmetics match your filter" : e.cosmeticType ? (0, o.jsxs)(o.Fragment, {
                    children: ["Visit The Shop to add", " ", (0, o.jsxs)("b", {
                        style: {
                            color: d.default.Yellow
                        },
                        children: [(0, l.cosmeticTypeName)(e.cosmeticType), "s"]
                    }), " ", "to your collection!"]
                }) : (0, o.jsxs)(o.Fragment, {
                    children: ["You don't own any cosmetics...yet! Visit", " ", (0, o.jsx)("b", {
                        style: {
                            color: d.default.Yellow
                        },
                        children: "The Shop"
                    }), " to add some to your collection!"]
                })), [e.mode, e.cosmeticType]),
                r = n.useMemo((() => "search" === e.mode || "filter" === e.mode ? "cosmos/searchEmpty.png" : "cosmos/cosmeticsEmpty.png"), [e.mode]);
            return (0, o.jsxs)(h, {
                children: [(0, o.jsx)(g, {
                    src: (0, c.default)(r)
                }), (0, o.jsx)(v, {
                    children: t
                })]
            })
        },
        h = (0, a.default)(s.CenteredColumn).attrs({
            className: "maxWidth"
        })(u || (u = m`
  padding: 20px 0px;
`)),
        g = a.default.img(f || (f = m`
  max-height: 175px;
  max-width: 90%;
`)),
        v = a.default.div(p || (p = m`
  font-size: 16px;
  font-style: italic;
  opacity: 0.9;
  margin-top: 35px;
  text-align: center;
`))
})), i.register("2RhIb", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var r, o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r), i && e(t, i), t
            }
        }(),
        n = i("fywoC"),
        a = (r = n) && r.__esModule ? r : {
            default: r
        },
        s = i("3o5yH");
    var c = {
            position: "relative"
        },
        l = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return r.setRef = r.setRef.bind(r), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), o(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.active && !this.props.active && (0, s.confetti)(this.container, e.config)
                }
            }, {
                key: "setRef",
                value: function(e) {
                    this.container = e
                }
            }, {
                key: "render",
                value: function() {
                    return a.default.createElement("div", {
                        className: this.props.className,
                        style: c,
                        ref: this.setRef
                    })
                }
            }]), t
        }(n.Component);
    e.exports.default = l
})), i.register("3o5yH", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.confetti = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = Object.assign({}, n, t),
            s = a.elementCount,
            c = a.colors,
            l = a.width,
            d = a.height,
            u = a.angle,
            f = a.spread,
            p = a.startVelocity,
            m = a.decay,
            y = a.duration,
            h = a.random,
            g = r(e, s, c, l, d),
            v = g.map((function(e) {
                return {
                    element: e,
                    physics: i(u, f, p, h)
                }
            }));
        return o(e, v, m, y)
    };

    function r(e, t, r, i, o) {
        return Array.from({
            length: t
        }).map((function(t, n) {
            var a = document.createElement("div"),
                s = r[n % r.length];
            return a.style["background-color"] = s, a.style.width = i, a.style.height = o, a.style.position = "absolute", a.style.willChange = "transform, opacity", e.appendChild(a), a
        }))
    }

    function i(e, t, r, i) {
        var o = e * (Math.PI / 180),
            n = t * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * i(),
            wobbleSpeed: .1 + .1 * i(),
            velocity: .5 * r + i() * r,
            angle2D: -o + (.5 * n - i() * n),
            angle3D: -Math.PI / 4 + i() * (Math.PI / 2),
            tiltAngle: i() * Math.PI,
            tiltAngleSpeed: .1 + .3 * i()
        }
    }

    function o(e, t, r, i) {
        var o = void 0;
        return new Promise((function(n) {
            requestAnimationFrame((function a(s) {
                o || (o = s);
                var c = o === s ? 0 : (s - o) / i;
                t.forEach((function(e) {
                    return function(e, t, r) {
                        e.physics.x += Math.cos(e.physics.angle2D) * e.physics.velocity, e.physics.y += Math.sin(e.physics.angle2D) * e.physics.velocity, e.physics.z += Math.sin(e.physics.angle3D) * e.physics.velocity, e.physics.wobble += e.physics.wobbleSpeed, e.physics.velocity *= r, e.physics.y += 3, e.physics.tiltAngle += e.physics.tiltAngleSpeed;
                        var i = e.physics,
                            o = i.x,
                            n = i.y,
                            a = i.tiltAngle,
                            s = i.wobble,
                            c = "translate3d(" + (o + 10 * Math.cos(s)) + "px, " + (n + 10 * Math.sin(s)) + "px, 0) rotate3d(1, 1, 1, " + a + "rad)";
                        e.element.style.transform = c, e.element.style.opacity = 1 - t
                    }(e, c, r)
                })), s - o < i ? requestAnimationFrame(a) : (t.forEach((function(t) {
                    if (t.element.parentNode === e) return e.removeChild(t.element)
                })), n())
            }))
        }))
    }
    var n = {
        angle: 90,
        decay: .9,
        spread: 45,
        startVelocity: 45,
        elementCount: 50,
        width: "10px",
        height: "10px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        duration: 3e3,
        random: Math.random
    }
})), i.register("jVQO4", (function(t, r) {
    e(t.exports, "playSound", (function() {
        return a
    })), e(t.exports, "preloadSound", (function() {
        return c
    }));
    var o = i("6yrsF");
    const n = new Map,
        a = e => {
            const t = Date.now();
            if (!e.path) return null;
            const r = e.forceCreateNewSound ? void 0 : n.get(e.path),
                i = r || new(0, o.Howl)({
                    src: e.path
                });
            if (i.volume(e.volume), r) e.delay ? setTimeout((() => {
                i.play()
            }), e.delay) : i.play();
            else {
                const r = () => {
                    if (n.get(e.path) || e.forceCreateNewSound || n.set(e.path, i), e.delay) {
                        const r = t + e.delay,
                            o = Date.now();
                        o > r ? i.play() : setTimeout((() => {
                            i.play()
                        }), r - o)
                    } else i.play()
                };
                "loaded" === i.state() ? r() : i.once("load", r)
            }
            return i
        },
        s = new Set,
        c = e => {
            const {
                path: t
            } = e;
            if (n.get(t)) return;
            if (s.has(t)) return;
            s.add(t);
            const r = new(0, o.Howl)({
                src: t
            });
            r.once("load", (() => {
                s.delete(t), n.set(t, r)
            }))
        }
}));