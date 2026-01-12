import {
    r as o,
    j as t,
    d as m,
    e as _,
    U as Y,
    u as ee,
    E as te,
    cm as re,
    R as ie
} from "./_index.js";
import {
    r as ne,
    P as se,
    p as L,
    s as q,
    G as ae,
    i as H,
    E as oe,
    c as ce,
    u as le
} from "./App-67.js";
import {
    a as de,
    C as R
} from "./Centered.js";
import {
    f as g,
    g as j
} from "./ElementIds.js";
import {
    g as ue,
    L as me
} from "./App-44.js";
import {
    b as fe
} from "./index-1.js";
import {
    F as B
} from "./FontAwesomeIcon.js";
import {
    S as E
} from "./index-2.js";
import {
    D as he
} from "./index-10.js";
import {
    G as ge
} from "./GetAssetPath.js";
import {
    C as G
} from "./Button.js";
import {
    u as ye
} from "./useDebouncedValue.js";
import {
    C as xe
} from "./CircularProgress.js";
import {
    C as P
} from "./Names.js";
import "./playSound.js";
import "./howler.js";
import "./useQuery.js";
import "./confetti.js";
import "./SeasonTicketName.js";
import "./SeasonTicketInlineUpsell.js";
import "./AccessibleAnchor.js";
import "./OwnsSeasonTicket.js";
import "./index-5.js";
import "./move.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./capitalize.js";

function Ce(e) {
    var r;
    if (typeof localStorage > "u") return null;
    var a = (r = localStorage.getItem(e)) !== null && r !== void 0 ? r : "null";
    try {
        return JSON.parse(a)
    } catch (s) {
        console.error(s)
    }
    return a
}

function Se(e, r) {
    return typeof localStorage > "u" ? null : localStorage.setItem(e, JSON.stringify(r))
}

function we(e, r) {
    var a = Ce(e);
    return a === null ? r : a
}

function J(e, r) {
    var a = o.useState(function() {
            return we(e, r)
        }),
        s = a[0],
        f = a[1],
        i = o.useRef(!1),
        n = o.useRef(!1),
        c = o.useMemo(function() {
            return "rooks-".concat(e, "-localstorage-update")
        }, [e]);
    o.useEffect(function() {
        (!i.current || !n.current) && Se(e, s)
    }, [e, s]);
    var u = o.useCallback(function(d) {
        var C;
        if (d.storageArea === localStorage && d.key === e) try {
            i.current = !0;
            var h = JSON.parse((C = d.newValue) !== null && C !== void 0 ? C : "null");
            s !== h && f(h)
        } catch (N) {
            console.log(N)
        }
    }, [e, s]);
    o.useEffect(function() {
        return typeof window < "u" ? (window.addEventListener("storage", u), function() {
            window.removeEventListener("storage", u)
        }) : (console.warn("useLocalstorageState: window is undefined."), function() {})
    }, [u]);
    var l = o.useCallback(function(d) {
        try {
            n.current = !0;
            var C = d.detail.newValue;
            s !== C && f(C)
        } catch (h) {
            console.log(h)
        }
    }, [s]);
    o.useEffect(function() {
        return typeof document < "u" ? (document.addEventListener(c, l), function() {
            document.removeEventListener(c, l)
        }) : (console.warn("[useLocalstorageState] document is undefined."), function() {})
    }, [c, l]);
    var y = o.useCallback(function(d) {
            if (typeof document < "u") {
                var C = new CustomEvent(c, {
                    detail: {
                        newValue: d
                    }
                });
                document.dispatchEvent(C)
            } else console.warn("[useLocalstorageState] document is undefined.")
        }, [c]),
        x = o.useCallback(function(d) {
            i.current = !1, n.current = !1, f(d), y(d)
        }, [y]),
        k = o.useCallback(function() {
            localStorage.removeItem(e)
        }, [e]);
    return [s, x, k]
}
const ve = e => t.jsx(K, {
        selected: e.selected,
        children: t.jsxs(E, {
            className: "maxWidth",
            direction: "horizontal",
            size: 20,
            wrap: !0,
            children: [t.jsx(X, {
                style: {
                    background: e.background,
                    padding: e.imagePadding || 8
                },
                children: t.jsx(ke, {
                    src: e.image
                })
            }), t.jsx(Z, {
                children: e.name
            })]
        })
    }),
    be = e => t.jsx(K, {
        selected: e.selected,
        style: {
            cursor: "pointer"
        },
        onClick: e.onSelect,
        children: t.jsxs(E, {
            className: "maxWidth",
            direction: "horizontal",
            size: 20,
            wrap: !0,
            children: [t.jsx(X, {
                style: {
                    background: "radial-gradient( circle, rgba(78,77,77,1) 0%, rgba(32,32,32,1) 100% )",
                    fontSize: 22
                },
                children: t.jsx(B, {
                    name: "fas fa-times"
                })
            }), t.jsx(Z, {
                children: "Empty Selection"
            })]
        })
    }),
    K = m.div.attrs({
        className: "maxWidth"
    })`
  padding: 12px 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-style: solid;
  border-color: #fdd835;
  border-width: ${e=>e.selected?4:0}px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.23);
  }
`,
    X = m.div.attrs({
        className: "flex-center"
    })`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid ${_.White};
`,
    ke = m.img`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`,
    Z = m.div`
  font-family: ${Y.FugazOne};
  text-transform: uppercase;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.93);
`,
    je = e => {
        const [r, a, s] = ee(!1), f = ue({
            id: e.id,
            type: e.type
        }), i = ne(e.rarity), n = () => e.gridView ? t.jsx("div", {
            style: {
                width: e.gridViewWidth,
                flexShrink: 0
            },
            children: t.jsx(ae, {
                selected: e.selected,
                image: f,
                background: i,
                imagePadding: e.type === g.sticker ? 24 : void 0,
                count: e.count
            })
        }) : t.jsx(ve, {
            selected: e.selected,
            image: f,
            background: i,
            name: e.name,
            imagePadding: e.type === g.sticker ? 12 : void 0
        }), c = () => t.jsx("div", {
            onClick: () => {
                L(), a()
            },
            style: {
                cursor: "pointer"
            },
            children: n()
        }), u = l => {
            if (e.type === g.sticker) return {
                text: "Close",
                ariaLabel: "Close",
                onClick: () => {
                    L(), s()
                }
            };
            const y = l.editStyles !== void 0 && JSON.stringify(l.editStyles) !== "{}" && JSON.stringify(l.editStyles) !== JSON.stringify(e.editStyles),
                x = e.selected ? y ? "Update" : "Selected" : "Select";
            return {
                text: x,
                ariaLabel: x,
                disabled: e.selected && !y,
                onClick: () => {
                    L(), q({
                        cosmeticId: e.id,
                        cosmeticType: e.type,
                        editStyles: l.editStyles,
                        onSuccess: () => {
                            e.onCosmeticSelectionChanged && e.onCosmeticSelectionChanged(), H(), s()
                        }
                    })
                }
            }
        };
        return t.jsxs(t.Fragment, {
            children: [c(), t.jsx(se, {
                open: r,
                close: s,
                id: e.id,
                name: e.name,
                count: e.count,
                sellCost: e.sellCost,
                image: f,
                rarity: e.rarity,
                type: e.type,
                description: e.description,
                pack: e.pack,
                style: e.style,
                editStyles: e.editStyles,
                callToAction: u,
                blockCharacterPreview: e.blockCharacterPreview
            })]
        })
    },
    pe = e => {
        const r = o.useRef(null),
            [a] = fe(r),
            s = o.useMemo(() => {
                const i = a - 1,
                    n = Math.floor((i - v.gapBetweenItems) / (v.itemWidth + v.gapBetweenItems));
                if (n < 2) return i;
                const c = i - (n * (v.itemWidth + v.gapBetweenItems) - v.gapBetweenItems);
                return v.itemWidth + c / n
            }, [a]),
            f = () => {
                var c, u, l;
                if (!e.requiresSelection || !e.cosmeticType) return null;
                let i = !1;
                (!((u = (c = e.selectedCosmetics) == null ? void 0 : c.character) != null && u.id) && e.cosmeticType === g.character || !((l = e.selectedCosmetics) != null && l.trail) && e.cosmeticType === g.trail) && (i = !0);
                const n = () => {
                    i || (L(), q({
                        cosmeticType: e.cosmeticType,
                        onSuccess: () => {
                            H(), e.onCosmeticSelectionChanged && e.onCosmeticSelectionChanged()
                        }
                    }))
                };
                return e.gridView ? t.jsx(oe, {
                    selected: i,
                    onSelect: n,
                    width: s
                }) : t.jsx(be, {
                    selected: i,
                    onSelect: n
                })
            };
        return t.jsx(Te, {
            ref: r,
            children: t.jsxs(E, {
                className: "maxWidth",
                direction: e.gridView ? "horizontal" : "vertical",
                size: e.gridView ? v.gapBetweenItems : 15,
                wrap: !0,
                children: [e.cosmetics.map(i => {
                    var l, y, x, k, d;
                    const {
                        cosmetic: n,
                        count: c
                    } = i;
                    let u = !1;
                    return ((l = i == null ? void 0 : i.cosmetic) == null ? void 0 : l.type) === g.character ? u = ((x = (y = e.selectedCosmetics) == null ? void 0 : y.character) == null ? void 0 : x.id) === n.id : ((k = i == null ? void 0 : i.cosmetic) == null ? void 0 : k.type) === g.trail && (u = ((d = e.selectedCosmetics) == null ? void 0 : d.trail) === n.id), t.jsx(je, {
                        id: n.id,
                        count: c,
                        name: n.name,
                        description: n.description,
                        pack: n.packName,
                        type: n.type,
                        rarity: n.rarity,
                        style: n.style,
                        sellCost: n.sellCost,
                        gridView: e.gridView,
                        gridViewWidth: s,
                        selected: u,
                        editStyles: e.selectedCosmeticEditStyles && u ? e.selectedCosmeticEditStyles : void 0,
                        blockCharacterPreview: e.blockCharacterPreview,
                        onCosmeticSelectionChanged: e.onCosmeticSelectionChanged
                    }, n.id + e.gridView)
                }), f()]
            })
        })
    },
    v = {
        itemWidth: 120,
        gapBetweenItems: 10
    },
    Te = m.div.attrs({
        className: "maxWidth"
    })``,
    Le = e => {
        const {
            value: r,
            onChange: a
        } = e;
        return t.jsxs(Ee, {
            children: [t.jsx(Ne, {
                children: t.jsx(B, {
                    name: "fas fa-search"
                })
            }), t.jsx(We, {
                value: r,
                onChange: s => a(s.target.value),
                placeholder: "Search..."
            })]
        })
    },
    Ee = m.div.attrs({
        className: "maxWidth flex vc"
    })`
  border-radius: 30px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.07);
  position: relative;
`,
    Ne = m.div`
  top: 11px;
  left: 20px;
  position: absolute;
`,
    We = m.input.attrs({
        className: "maxWidth"
    })`
  border: none;
  background: transparent;
  padding: 10px 20px;
  padding-left: 50px;
  border-radius: 30px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`,
    U = "#3d9241",
    Ve = e => {
        const r = s => e.tab === s,
            a = s => () => {
                s !== e.tab && (L(), e.setTab(s))
            };
        return t.jsxs(E, {
            direction: "horizontal",
            size: 8,
            style: {
                marginTop: 8,
                marginBottom: 20
            },
            wrap: !0,
            children: [t.jsx(W, {
                selected: r(w.All),
                onClick: a(w.All),
                children: "All"
            }), t.jsxs(W, {
                selected: r(w.Characters),
                onClick: a(w.Characters),
                children: [P.character, "s"]
            }), t.jsxs(W, {
                selected: r(w.Trails),
                onClick: a(w.Trails),
                children: [P.trail, "s"]
            }), t.jsxs(W, {
                selected: r(w.Stickers),
                onClick: a(w.Stickers),
                children: [P.sticker, "s"]
            })]
        })
    },
    W = m.div`
  background: ${e=>e.selected?U:"rgba(255, 255, 255, 0.1)"};
  padding: 8px 18px;
  line-height: 1;
  font-size: 16px;
  border-radius: 50px;
  cursor: pointer;
  transition: background ${e=>e.selected?.1:.2}s,
    transform 0.2s;
  will-change: background, transform;
  &:hover {
    background: ${e=>e.selected?U:"rgba(255, 255, 255, 0.15)"};
    transform: scale(1.05);
  }
`,
    O = t.jsx(B, {
        name: "fas fa-check",
        style: {
            color: "#673AB7"
        }
    }),
    Ae = e => {
        const r = i => {
                if (e.sort === i) return O
            },
            a = i => {
                if (e.view === i) return O
            },
            s = i => {
                if (e.showAll === i) return O
            },
            f = [{
                key: "sort_group",
                type: "group",
                label: "Sort",
                children: [{
                    key: "sort_recent",
                    label: "Most Recent",
                    icon: r(b.recent),
                    onClick: () => e.setSort(b.recent)
                }, {
                    key: "sort_rarity",
                    label: "Rarity",
                    icon: r(b.rarity),
                    onClick: () => e.setSort(b.rarity)
                }, {
                    key: "sort_name",
                    label: "Name",
                    icon: r(b.alphabetical),
                    onClick: () => e.setSort(b.alphabetical)
                }]
            }, {
                key: "view_group",
                type: "group",
                label: "View",
                children: [{
                    key: "view_grid",
                    label: "Grid",
                    icon: a(T.grid),
                    onClick: () => e.setView(T.grid)
                }, {
                    key: "view_list",
                    label: "List",
                    icon: a(T.list),
                    onClick: () => e.setView(T.list)
                }]
            }, {
                key: "filter_group",
                type: "group",
                label: "Filter",
                children: [{
                    key: "filter_all",
                    label: "All",
                    icon: s(!0),
                    onClick: () => e.setShowAll(!0)
                }, {
                    key: "filter_duplicates",
                    label: "Duplicates",
                    icon: s(!1),
                    onClick: () => e.setShowAll(!1)
                }]
            }];
        return t.jsx(te, {
            theme: {
                algorithm: re.defaultAlgorithm,
                token: {
                    colorBgBase: "#ffffff"
                }
            },
            children: t.jsx("div", {
                style: {
                    cursor: "pointer",
                    fontSize: 20
                },
                children: t.jsx(he, {
                    menu: {
                        items: f
                    },
                    children: t.jsx(ie, {})
                })
            })
        })
    },
    Ie = e => {
        const r = o.useMemo(() => e.mode === "search" ? "We couldn't find any cosmetics matching your search" : e.mode === "filter" ? "No cosmetics match your filter" : e.cosmeticType ? t.jsxs(t.Fragment, {
                children: ["Visit The Shop to add", " ", t.jsxs("b", {
                    style: {
                        color: G.Yellow
                    },
                    children: [ce(e.cosmeticType), "s"]
                }), " ", "to your collection!"]
            }) : t.jsxs(t.Fragment, {
                children: ["You don't own any cosmetics...yet! Visit", " ", t.jsx("b", {
                    style: {
                        color: G.Yellow
                    },
                    children: "The Shop"
                }), " to add some to your collection!"]
            }), [e.mode, e.cosmeticType]),
            a = o.useMemo(() => e.mode === "search" || e.mode === "filter" ? "cosmos/searchEmpty.png" : "cosmos/cosmeticsEmpty.png", [e.mode]);
        return t.jsxs(ze, {
            children: [t.jsx(Pe, {
                src: ge(a)
            }), t.jsx(Oe, {
                children: r
            })]
        })
    },
    ze = m(de).attrs({
        className: "maxWidth"
    })`
  padding: 20px 0px;
`,
    Pe = m.img`
  max-height: 175px;
  max-width: 90%;
`,
    Oe = m.div`
  font-size: 16px;
  font-style: italic;
  opacity: 0.9;
  margin-top: 35px;
  text-align: center;
`;
var w = (e => (e.All = "all", e.Characters = "characters", e.Trails = "trails", e.Stickers = "stickers", e))(w || {}),
    b = (e => (e.recent = "recent", e.alphabetical = "alphabetical", e.rarity = "rarity", e))(b || {}),
    T = (e => (e.grid = "grid", e.list = "list", e))(T || {});
const Q = [j.mythic, j.legendary, j.epic, j.rare, j.uncommon, j.common],
    ft = e => {
        var M, F;
        const {
            data: r,
            isLoading: a,
            error: s
        } = le(), [f, i] = o.useState(""), [n] = ye(f, 150), [c, u] = o.useState("all"), [l, y] = J("cosmos_sortMode", "recent"), [x, k] = J("cosmos_view", "grid"), [d, C] = o.useState(!0), h = o.useMemo(() => c === "characters" ? g.character : c === "trails" ? g.trail : c === "stickers" ? g.sticker : null, [c]), N = o.useMemo(() => {
            if (!(r != null && r.ownedCosmetics)) return [];
            const V = n.toLowerCase(),
                A = r.ownedCosmetics.filter(S => {
                    var $, D;
                    if (h && S.cosmetic.type !== h || !d && S.count <= 1) return !1;
                    const p = S.cosmetic.name.toLowerCase(),
                        I = (($ = S.cosmetic.description) == null ? void 0 : $.toLowerCase()) ?? "",
                        z = ((D = S.cosmetic.packName) == null ? void 0 : D.toLowerCase()) ?? "";
                    return p.includes(V) || I.includes(V) || z.includes(V)
                });
            return l === "rarity" ? A.sort((S, p) => {
                const I = Q.indexOf(S.cosmetic.rarity),
                    z = Q.indexOf(p.cosmetic.rarity);
                return I - z
            }) : l === "alphabetical" ? A.sort((S, p) => S.cosmetic.name.localeCompare(p.cosmetic.name)) : A
        }, [r, n, h, l, d]);
        return a ? t.jsx(R, {
            className: "maxAll",
            children: t.jsx(xe, {
                style: {
                    color: _.White
                }
            })
        }) : s ? t.jsx(R, {
            className: "maxAll",
            children: "There was an error loading your locker. Please refresh and try again."
        }) : t.jsxs(me, {
            customWidth: 900,
            children: [t.jsxs(_e, {
                children: [t.jsx(Be, {
                    children: "Locker"
                }), t.jsxs(E, {
                    size: 30,
                    className: "maxWidth",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [t.jsx(Ve, {
                        tab: c,
                        setTab: u
                    }), t.jsx(Ae, {
                        view: x,
                        setView: k,
                        sort: l,
                        setSort: y,
                        showAll: d,
                        setShowAll: C
                    })]
                })]
            }), t.jsxs(Me, {
                children: [t.jsx(Le, {
                    value: f,
                    onChange: i
                }), N.length ? t.jsx(pe, {
                    cosmetics: N,
                    cosmeticType: h,
                    gridView: x === "grid",
                    selectedCosmetics: r.selected,
                    selectedCosmeticEditStyles: (F = (M = r.selected) == null ? void 0 : M.character) == null ? void 0 : F.editStyleData,
                    requiresSelection: n ? !1 : h === g.character || h === g.trail,
                    onCosmeticSelectionChanged: e.onCosmeticSelectionChanged,
                    blockCharacterPreview: e.blockCharacterPreview
                }) : t.jsx(Ie, {
                    mode: n ? "search" : d ? "none" : "filter",
                    cosmeticType: h
                })]
            })]
        })
    },
    _e = m.div.attrs({
        className: "maxWidth"
    })``,
    Be = m.div`
  font-family: ${Y.FugazOne};
  text-transform: uppercase;
  color: ${_.White};
  font-size: 32px;
`,
    Me = m.div.attrs({
        className: "maxWidth"
    })`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`;
export {
    b as SortMode, w as Tab, T as View, ft as
    default
};