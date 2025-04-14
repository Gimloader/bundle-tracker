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
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("2z16z", (function(t, i) {
    var n;
    n = t.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return v
    }));
    var a = r("hxEiv"),
        s = r("fywoC"),
        o = r("2FDaO"),
        l = r("lKmIF"),
        c = r("69SUA"),
        u = r("5dEEM"),
        f = r("bvhts"),
        d = r("YsIs3"),
        p = r("7Ggr5"),
        m = r("d4Dab");
    let g, h;
    var x;
    (x = h || (h = {})).recipeSelection = "recipeSelection", x.itemPreview = "itemPreview";
    var v = e => {
        const [t, r] = s.useState(h.recipeSelection), [i, n] = s.useState(null), o = e => {
            n(e), r(h.itemPreview)
        }, l = () => {
            r(h.recipeSelection)
        };
        s.useEffect((() => {
            e.status === u.CraftingTableStatus.availableForCollection && l()
        }), [e.status]);
        return (0, a.jsx)(b, {
            style: {
                background: (0, m.CraftingTableDeviceUIBackgroundColor)(e.style)
            },
            children: (() => {
                if (e.status === u.CraftingTableStatus.idle) switch (t) {
                    case h.recipeSelection:
                        return (0, a.jsx)(p.default, {
                            setToRecipePreviewScreen: o,
                            style: e.style,
                            group: e.tableGroup
                        }, "recipe-selection-screen");
                    case h.itemPreview:
                        return (0, a.jsx)(d.default, {
                            craft: e.craft,
                            selectedRecipeId: i,
                            style: e.style,
                            backToRecipeSelectionScreen: l
                        }, "recipe-preview-screen");
                    default:
                        return null
                }
                return (0, a.jsx)(f.default, {
                    item: e.item,
                    itemAmount: e.itemAmount,
                    status: e.status,
                    style: e.style,
                    craftingDurationMs: e.craftingDurationMs,
                    itemFinishesCraftingAt: e.itemFinishesCraftingAt,
                    itemDisposalMs: e.itemDisposalMs,
                    itemDisposedAt: e.itemDisposedAt,
                    itemCrafterCharacterId: e.itemCrafterCharacterId,
                    useCrafterCollectionAdvantage: e.useCrafterCollectionAdvantage,
                    collect: e.collect,
                    close: e.close
                }, "crafting-status-screen")
            })()
        })
    };
    const b = o.default.div.attrs({
        className: "maxAll flex-column vc scroll-y"
    })(g || (g = (e => e)`
  backdrop-filter: blur(5px);
  color: ${0};
  padding: 25px;
  font-family: ${0};
  text-transform: uppercase;
`), l.default.White, c.Fonts.FugazOne)
})), r.register("5dEEM", (function(t, r) {
    let i;
    var n;
    e(t.exports, "CraftingTableStatus", (function() {
        return i
    })), (n = i || (i = {})).idle = "idle", n.crafting = "crafting", n.availableForCollection = "availableForCollection"
})), r.register("bvhts", (function(t, i) {
    e(t.exports, "default", (function() {
        return A
    }));
    var n = r("hxEiv"),
        a = r("8XRIE"),
        s = r("6vbUb"),
        o = r("lpEVe"),
        l = r("fywoC"),
        c = r("2FDaO"),
        u = r("iMOcM"),
        f = r("gwxnT"),
        d = r("fhnJp"),
        p = r("6EcnK"),
        m = r("kkz6q"),
        g = r("5dEEM"),
        h = r("dsxHT"),
        x = r("gRoVs"),
        v = r("dhHg7"),
        b = r("577hQ");
    let y, C, M, w, j = e => e;
    var A = (0, o.observer)((e => {
        const t = l.useMemo((() => (0, p.default)(e.item)), [e.item]),
            {
                session: {
                    gameTime: r
                }
            } = (0, f.default)(),
            i = l.useMemo((() => {
                if (e.status === g.CraftingTableStatus.crafting) return `Currently ${b.default.preparing(e.style)}...`;
                if (e.useCrafterCollectionAdvantage && e.itemCrafterCharacterId !== (0, d.default)()) {
                    const t = e.itemFinishesCraftingAt + 1e3 * m.default.secondsAdvantage - r;
                    if (t > 0) {
                        const e = Math.ceil(t / 1e3);
                        return `Collect in ${e} ${(0,u.plural)("second",e)}`
                    }
                }
                return "Ready to collect"
            }), [e.status, r, e.useCrafterCollectionAdvantage, e.itemFinishesCraftingAt, e.itemCrafterCharacterId]);
        return t ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(I, {
                src: t.previewImage
            }), (0, n.jsx)(S, {
                children: (0, h.default)(t.id, e.itemAmount)
            }), (0, n.jsxs)(T, {
                children: [(0, n.jsx)(D, {
                    children: i
                }), (0, n.jsxs)(a.AnimatePresence, {
                    mode: "wait",
                    children: [e.status === g.CraftingTableStatus.crafting ? (0, n.jsx)(v.default, {
                        itemFinishesCraftingAt: e.itemFinishesCraftingAt,
                        craftingDurationMs: e.craftingDurationMs
                    }, "craft-countdown") : null, e.status === g.CraftingTableStatus.availableForCollection ? (0, n.jsx)(x.default, {
                        itemFinishesCraftingAt: e.itemFinishesCraftingAt,
                        itemDisposalMs: e.itemDisposalMs,
                        itemDisposalAt: e.itemDisposedAt,
                        collect: e.collect,
                        itemCrafterCharacterId: e.itemCrafterCharacterId,
                        useCrafterCollectionAdvantage: e.useCrafterCollectionAdvantage,
                        close: e.close
                    }, "craft-collection") : null]
                })]
            })]
        }) : null
    }));
    const T = (0, c.default)(s.motion.div).attrs({
            className: "maxWidth flex-column flex-center",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            }
        })(y || (y = j``)),
        I = c.default.img(C || (C = j`
  height: 82px;
`)),
        S = c.default.div(M || (M = j`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`)),
        D = c.default.div(w || (w = j`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 8px;
`))
})), r.register("kkz6q", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var i = {
        secondsAdvantage: 5
    }
})), r.register("dsxHT", (function(t, i) {
    e(t.exports, "default", (function() {
        return s
    }));
    var n = r("iMOcM"),
        a = r("3ugly");
    var s = (e, t) => {
        let r = (0, a.ItemName)(e) || "Item";
        return t > 1 && (r += ` (${(0,n.numberWithCommas)(t)})`), r
    }
})), r.register("gRoVs", (function(i, n) {
    e(i.exports, "default", (function() {
        return M
    }));
    var a = r("hxEiv"),
        s = r("fywoC"),
        o = r("aQuqp"),
        l = r("2FDaO"),
        c = r("69SUA"),
        u = r("7a91g"),
        f = r("iMOcM"),
        d = r("2RhIb"),
        p = r("6vbUb"),
        m = r("bssnp"),
        g = r("lpEVe"),
        h = r("gwxnT"),
        x = r("fhnJp"),
        v = r("kkz6q");
    let b, y, C = e => e;
    var M = (0, g.observer)((e => {
        const [, r] = s.useReducer((e => e + 1), 0), [i, n] = s.useState(!1), {
            session: {
                gameTime: l
            }
        } = (0, h.default)();
        s.useEffect((() => {
            n(!0)
        }), []), (0, u.useIntervalWhen)(r, 33, !!e.itemDisposalMs);
        const c = s.useMemo((() => {
                if (!e.useCrafterCollectionAdvantage) return !1;
                if (e.itemCrafterCharacterId !== (0, x.default)()) {
                    const t = e.itemFinishesCraftingAt + 1e3 * v.default.secondsAdvantage;
                    return l < t
                }
                return !1
            }), [e.useCrafterCollectionAdvantage, l, e.itemFinishesCraftingAt, e.itemCrafterCharacterId]),
            p = Math.max(1, (() => {
                const t = Math.max(e.itemDisposalAt - (0, m.GetServerGameTimeWithCompensation)(), 0),
                    r = Math.ceil(t / 1e3);
                return isNaN(r) ? 0 : r
            })());
        return (0, a.jsxs)(w, {
            children: [(0, a.jsx)(t(d), {
                config: A,
                active: i
            }), (0, a.jsx)(o.default, {
                block: !0,
                type: "success",
                disabled: c,
                style: {
                    width: "80%"
                },
                onClick: () => {
                    e.collect(), e.close()
                },
                ariaLabel: "Collect",
                children: (0, a.jsx)("span", {
                    style: {
                        textTransform: "uppercase"
                    },
                    children: "Collect"
                })
            }), e.itemDisposalMs ? (0, a.jsxs)(j, {
                children: ["Goes bad in ", p, " ", (0, f.plural)("second", p)]
            }) : null]
        })
    }));
    const w = (0, l.default)(p.motion.div).attrs({
            className: "maxWidth flex-center flex-column",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: .25
            }
        })(b || (b = C`
  margin-top: 25px;
`)),
        j = l.default.div(y || (y = C`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-family: ${0};
  font-weight: ${0};
  text-transform: none;
`), c.Fonts.ProductSans, c.FontWeights.Bold),
        A = {
            angle: 90,
            spread: 55,
            elementCount: 50,
            startVelocity: 30,
            decay: .95
        }
})), r.register("2RhIb", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var i, n = function() {
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
        a = r("fywoC"),
        s = (i = a) && i.__esModule ? i : {
            default: i
        },
        o = r("3o5yH");
    var l = {
            position: "relative"
        },
        c = function(e) {
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
            }(t, e), n(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.active && !this.props.active && (0, o.confetti)(this.container, e.config)
                }
            }, {
                key: "setRef",
                value: function(e) {
                    this.container = e
                }
            }, {
                key: "render",
                value: function() {
                    return s.default.createElement("div", {
                        className: this.props.className,
                        style: l,
                        ref: this.setRef
                    })
                }
            }]), t
        }(a.Component);
    e.exports.default = c
})), r.register("3o5yH", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.confetti = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = Object.assign({}, a, t),
            o = s.elementCount,
            l = s.colors,
            c = s.width,
            u = s.height,
            f = s.angle,
            d = s.spread,
            p = s.startVelocity,
            m = s.decay,
            g = s.duration,
            h = s.random,
            x = r(e, o, l, c, u),
            v = x.map((function(e) {
                return {
                    element: e,
                    physics: i(f, d, p, h)
                }
            }));
        return n(e, v, m, g)
    };

    function r(e, t, r, i, n) {
        return Array.from({
            length: t
        }).map((function(t, a) {
            var s = document.createElement("div"),
                o = r[a % r.length];
            return s.style["background-color"] = o, s.style.width = i, s.style.height = n, s.style.position = "absolute", s.style.willChange = "transform, opacity", e.appendChild(s), s
        }))
    }

    function i(e, t, r, i) {
        var n = e * (Math.PI / 180),
            a = t * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * i(),
            wobbleSpeed: .1 + .1 * i(),
            velocity: .5 * r + i() * r,
            angle2D: -n + (.5 * a - i() * a),
            angle3D: -Math.PI / 4 + i() * (Math.PI / 2),
            tiltAngle: i() * Math.PI,
            tiltAngleSpeed: .1 + .3 * i()
        }
    }

    function n(e, t, r, i) {
        var n = void 0;
        return new Promise((function(a) {
            requestAnimationFrame((function s(o) {
                n || (n = o);
                var l = n === o ? 0 : (o - n) / i;
                t.forEach((function(e) {
                    return function(e, t, r) {
                        e.physics.x += Math.cos(e.physics.angle2D) * e.physics.velocity, e.physics.y += Math.sin(e.physics.angle2D) * e.physics.velocity, e.physics.z += Math.sin(e.physics.angle3D) * e.physics.velocity, e.physics.wobble += e.physics.wobbleSpeed, e.physics.velocity *= r, e.physics.y += 3, e.physics.tiltAngle += e.physics.tiltAngleSpeed;
                        var i = e.physics,
                            n = i.x,
                            a = i.y,
                            s = i.tiltAngle,
                            o = i.wobble,
                            l = "translate3d(" + (n + 10 * Math.cos(o)) + "px, " + (a + 10 * Math.sin(o)) + "px, 0) rotate3d(1, 1, 1, " + s + "rad)";
                        e.element.style.transform = l, e.element.style.opacity = 1 - t
                    }(e, l, r)
                })), o - n < i ? requestAnimationFrame(s) : (t.forEach((function(t) {
                    if (t.element.parentNode === e) return e.removeChild(t.element)
                })), a())
            }))
        }))
    }
    var a = {
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
})), r.register("dhHg7", (function(t, i) {
    e(t.exports, "default", (function() {
        return g
    }));
    var n = r("hxEiv"),
        a = r("fI2SP"),
        s = r("6vbUb"),
        o = r("fywoC"),
        l = r("7a91g"),
        c = r("2FDaO"),
        u = r("iMOcM"),
        f = r("bssnp");
    let d, p, m = e => e;
    var g = e => {
        const [, t] = o.useReducer((e => e + 1), 0);
        (0, l.useIntervalWhen)(t, 33);
        const r = Math.max(e.itemFinishesCraftingAt - (0, f.GetServerGameTimeWithCompensation)(), 0),
            i = Math.max(100 - r / e.craftingDurationMs * 100, 0);
        if (isNaN(r)) return null;
        const s = Math.max(1, Math.ceil(r / 1e3)),
            c = `Ready in ${s} ${(0,u.plural)("second",s)}`;
        return isNaN(i) ? null : (0, n.jsxs)(h, {
            children: [(0, n.jsx)(a.default, {
                percent: i,
                showInfo: !1,
                status: "active"
            }), (0, n.jsx)(x, {
                children: c
            })]
        })
    };
    const h = (0, c.default)(s.motion.div).attrs({
            className: "maxWidth",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: .15
            }
        })(d || (d = m`
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 30px;
  padding-bottom: 32px;
  margin-top: 20px;
  border-radius: 6px;
  .ant-progress-bg {
    height: 22px !important;
    transition: all 0.05s cubic-bezier(0.78, 0.14, 0.15, 0.86) !important;
  }
`)),
        x = c.default.div(p || (p = m`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1;
`))
})), r.register("577hQ", (function(t, i) {
    e(t.exports, "default", (function() {
        return o
    }));
    var n = r("3sJmi"),
        a = r("cRaEs");
    const s = e => e === a.CraftingTableStyle.plant ? "plant" : e === a.CraftingTableStyle.craft ? "craft" : "purchase";
    var o = {
        noItems: e => `No items currently available to ${s(e)}.`,
        selectItem: e => `Select an item to ${s(e)}...`,
        availableToCraft: e => `Available To ${(0,n.CapitalizeFirstLetter)(s(e))}`,
        instantNote: e => e === a.CraftingTableStyle.store ? "Available immediately" : e === a.CraftingTableStyle.plant ? "Grows instantly" : "Crafts instantly",
        durationNote: e => t => t === a.CraftingTableStyle.store ? `Takes ${e} to prepare` : t === a.CraftingTableStyle.plant ? `Takes ${e} to grow` : `Takes ${e} to craft`,
        expireVerb: e => e === a.CraftingTableStyle.plant ? "goes bad" : "expires",
        resource: e => e === a.CraftingTableStyle.store ? "resource" : "ingredient",
        preparing: e => e === a.CraftingTableStyle.store ? "preparing" : e === a.CraftingTableStyle.plant ? "growing" : "crafting",
        baseVerb: s
    }
})), r.register("cRaEs", (function(t, r) {
    let i;
    var n;
    e(t.exports, "CraftingTableStyle", (function() {
        return i
    })), (n = i || (i = {})).plant = "plant", n.craft = "craft", n.store = "store"
})), r.register("YsIs3", (function(t, i) {
    e(t.exports, "default", (function() {
        return m
    }));
    var n = r("hxEiv"),
        a = r("cSKYy");
    r("fywoC");
    var s = r("lH0LY"),
        o = r("lmdTA"),
        l = r("etDQH"),
        c = r("8xhk3"),
        u = r("inB4Z"),
        f = r("6vbUb"),
        d = r("2FDaO");
    let p;
    var m = (0, a.observer)((e => {
        const t = (0, s.default)(e.selectedRecipeId);
        return t ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(u.default, {
                recipe: t
            }), (0, n.jsxs)(g, {
                children: [(0, n.jsx)(o.default, {
                    craft: e.craft,
                    recipe: t,
                    goBack: e.backToRecipeSelectionScreen,
                    style: e.style
                }), (0, n.jsx)(l.default, {
                    recipe: t,
                    style: e.style
                }), (0, n.jsx)(c.default, {
                    recipe: t,
                    style: e.style
                })]
            })]
        }) : null
    }));
    const g = (0, d.default)(f.motion.div).attrs({
        className: "maxWidth flex-column flex-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    })(p || (p = (e => e)``))
})), r.register("lH0LY", (function(t, i) {
    e(t.exports, "default", (function() {
        return a
    }));
    var n = r("iRjsB");
    var a = e => {
        const t = n.default.world.devices.devices.get(e);
        if (!t) return null;
        const r = t.options,
            i = new Map,
            a = e => r.numberOfIngredients >= e,
            s = (e, t) => {
                const r = i.get(e);
                r ? r.amount += t : i.set(e, {
                    item: e,
                    amount: t
                })
            };
        a(1) && s(r.ingredient1Item, r.ingredient1Amount), a(2) && s(r.ingredient2Item, r.ingredient2Amount), a(3) && s(r.ingredient3Item, r.ingredient3Amount), a(4) && s(r.ingredient4Item, r.ingredient4Amount), a(5) && s(r.ingredient5Item, r.ingredient5Amount);
        return {
            id: e,
            itemId: r.item,
            itemAmount: r.itemAmount,
            ingredients: Array.from(i.values()),
            timeToCraftMs: r.timeToCraftMs,
            timeToDisposeMs: r.itemDisposes ? r.disposeItemAfterMs : 0
        }
    }
})), r.register("lmdTA", (function(t, i) {
    e(t.exports, "default", (function() {
        return g
    }));
    var n = r("hxEiv"),
        a = r("lpEVe");
    r("fywoC");
    var s = r("2FDaO"),
        o = r("69SUA"),
        l = r("aQuqp"),
        c = r("DT2Px"),
        u = r("3sJmi"),
        f = r("577hQ");
    let d, p, m = e => e;
    var g = (0, a.observer)((e => (0, n.jsxs)(h, {
        children: [(0, n.jsx)(l.default, {
            type: "success",
            size: "small",
            style: {
                width: "75%"
            },
            block: !0,
            disabled: !(0, c.default)(e.recipe),
            onClick: () => {
                e.craft(e.recipe.id)
            },
            ariaLabel: (0, u.CapitalizeFirstLetter)(f.default.baseVerb(e.style)),
            children: (0, n.jsx)("span", {
                style: {
                    textTransform: "uppercase"
                },
                children: (0, u.CapitalizeFirstLetter)(f.default.baseVerb(e.style))
            })
        }), (0, n.jsx)(x, {
            onClick: e.goBack,
            children: "...or go back"
        })]
    })));
    const h = s.default.div.attrs({
            className: "maxWidth flex-center flex-column"
        })(d || (d = m`
  margin-top: 15px;
`)),
        x = s.default.div(p || (p = m`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 6px;
  font-weight: ${0};
  font-family: ${0};
  text-transform: none;
  text-decoration: underline;
  transition: color 0.2s;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`), o.FontWeights.Bold, o.Fonts.ProductSans)
})), r.register("DT2Px", (function(t, i) {
    e(t.exports, "default", (function() {
        return a
    }));
    var n = r("iRjsB");
    var a = e => !e.ingredients.find((e => {
        if (!e.item) return !1;
        const t = n.default.me.inventory.slots.get(e.item);
        return !t || t.amount < e.amount
    }))
})), r.register("etDQH", (function(t, i) {
    e(t.exports, "Container", (function() {
        return m
    })), e(t.exports, "Label", (function() {
        return g
    })), e(t.exports, "default", (function() {
        return p
    }));
    var n = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        s = r("9MQQB"),
        o = r("3sJmi"),
        l = r("577hQ"),
        c = r("iMOcM");
    let u, f, d = e => e;
    var p = e => {
        const t = e.recipe.ingredients.filter((e => e.item && e.amount));
        return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)(m, {
                children: [(0, n.jsxs)(g, {
                    children: ["Required", " ", (0, c.plural)((0, o.CapitalizeFirstLetter)(l.default.resource(e.style)), t.length)]
                }), t.map(((e, t) => (0, n.jsx)(s.default, {
                    itemId: e.item,
                    requiredAmount: e.amount
                }, `ingredient-${e.item}-${t}`)))]
            })
        })
    };
    const m = a.default.div.attrs({
            className: "maxWidth"
        })(u || (u = d`
  margin-top: 30px;
`)),
        g = a.default.div(f || (f = d`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 8px;
`))
})), r.register("9MQQB", (function(t, i) {
    e(t.exports, "default", (function() {
        return m
    }));
    var n = r("hxEiv"),
        a = r("lpEVe");
    r("fywoC");
    var s = r("2FDaO"),
        o = r("iMOcM"),
        l = r("3ugly"),
        c = r("gwxnT"),
        u = r("6EcnK");
    let f, d, p = e => e;
    var m = (0, a.observer)((e => {
        var t, r;
        const {
            me: {
                inventory: i
            }
        } = (0, c.default)(), {
            itemId: a,
            requiredAmount: s
        } = e;
        let f = !0;
        const d = (null === (t = i.slots.get(a)) || void 0 === t ? void 0 : t.amount) || 0;
        let p = (0, l.ItemName)(a);
        return d >= s ? p += ` (${(0,o.numberWithCommas)(s)})` : (f = !1, p += ` (${(0,o.numberWithCommas)(d)}/${(0,o.numberWithCommas)(s)})`), (0, n.jsxs)(g, {
            style: {
                background: f ? "rgba(255,255,255, 0.1)" : "rgba(198, 40, 40, 0.5)"
            },
            children: [(0, n.jsx)("img", {
                src: null === (r = (0, u.default)(a)) || void 0 === r ? void 0 : r.previewImage,
                style: {
                    height: 35
                }
            }), (0, n.jsx)(h, {
                children: p
            })]
        })
    }));
    const g = s.default.div.attrs({
            className: "flex vc"
        })(f || (f = p`
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 4px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`)),
        h = s.default.div(d || (d = p`
  line-height: 1;
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`))
})), r.register("8xhk3", (function(t, i) {
    e(t.exports, "default", (function() {
        return m
    }));
    var n = r("hxEiv"),
        a = r("fywoC"),
        s = r("2FDaO"),
        o = r("iMOcM"),
        l = r("etDQH"),
        c = r("577hQ"),
        u = r("3sJmi");
    let f;
    const d = e => {
            const t = e / 60;
            return t >= 1 && e % 60 == 0 ? `${t} ${(0,o.plural)("minute",t)}` : `${e} ${(0,o.plural)("second",e)}`
        },
        p = e => (0, n.jsx)(g, {
            children: e.children
        });
    var m = e => {
        const {
            recipe: t,
            style: r
        } = e, i = a.useMemo((() => {
            if (0 === t.timeToCraftMs) return c.default.instantNote(r);
            const e = Math.floor(t.timeToCraftMs / 1e3);
            return c.default.durationNote(d(e))(r)
        }), [t.timeToCraftMs]), s = a.useMemo((() => {
            if (0 === t.timeToDisposeMs) return `Never ${c.default.expireVerb(r)}`;
            const e = Math.floor(t.timeToDisposeMs / 1e3);
            return `${(0,u.CapitalizeFirstLetter)(c.default.expireVerb(r))} after ${d(e)}`
        }), [t.timeToDisposeMs]);
        return (0, n.jsxs)(l.Container, {
            children: [(0, n.jsx)(l.Label, {
                children: "Notes"
            }), (0, n.jsx)(p, {
                children: i
            }), (0, n.jsx)(p, {
                children: s
            })]
        })
    };
    const g = s.default.div.attrs({
        className: "flex vc"
    })(f || (f = (e => e)`
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  border-radius: 4px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`))
})), r.register("inB4Z", (function(t, i) {
    e(t.exports, "default", (function() {
        return f
    }));
    var n = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        s = r("6EcnK"),
        o = r("dsxHT");
    let l, c, u = e => e;
    var f = e => {
        const {
            recipe: t
        } = e;
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(d, {
                src: (0, s.default)(t.itemId).previewImage
            }), (0, n.jsx)(p, {
                children: (0, o.default)(e.recipe.itemId, e.recipe.itemAmount)
            })]
        })
    };
    const d = a.default.img(l || (l = u`
  height: 82px;
`)),
        p = a.default.div(c || (c = u`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`))
})), r.register("7Ggr5", (function(t, i) {
    e(t.exports, "default", (function() {
        return g
    }));
    var n = r("hxEiv"),
        a = r("lpEVe");
    r("fywoC");
    var s = r("2FDaO"),
        o = r("69SUA"),
        l = r("diy3W"),
        c = r("5wCXS"),
        u = r("6vbUb"),
        f = r("577hQ");
    let d, p, m = e => e;
    var g = (0, a.observer)((e => {
        const t = (0, l.default)(e.group);
        return t.length ? (0, n.jsxs)(h, {
            children: [(0, n.jsx)(x, {
                children: f.default.selectItem(e.style)
            }), t.map((t => (0, n.jsx)(c.default, {
                recipeId: t,
                style: e.style,
                onSelect: () => e.setToRecipePreviewScreen(t)
            }, `recipe-${t}`)))]
        }) : (0, n.jsx)("div", {
            className: "maxAll flex-center",
            style: {
                textAlign: "center"
            },
            children: (0, n.jsx)(x, {
                children: f.default.noItems(e.style)
            })
        })
    }));
    const h = (0, s.default)(u.motion.div).attrs({
            className: "maxWidth flex-column flex-center",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            }
        })(d || (d = m``)),
        x = s.default.div(p || (p = m`
  font-family: ${0};
  font-weight: ${0};
  text-transform: none;
  margin-bottom: 15px;
  font-size: 22px;
`), o.Fonts.ProductSans, o.FontWeights.Bold)
})), r.register("diy3W", (function(t, i) {
    e(t.exports, "default", (function() {
        return s
    }));
    var n = r("z5iun"),
        a = r("gwuwo");
    var s = (e = "") => {
        const t = [];
        return (0, a.default)().worldManager.devices.allDevices.filter((e => e.deviceOption.id === n.default.craftingRecipe)).forEach((r => {
            const i = r.options;
            r.state.active && i.group === e && (e => {
                if (!e.item || !e.itemAmount) return !1;
                let t = !1;
                for (let r = 1; r <= e.numberOfIngredients; r++)
                    if (e[`ingredient${r}Item`] && e[`ingredient${r}Amount`]) {
                        t = !0;
                        break
                    } return !!t
            })(r.options) && t.push({
                id: r.id,
                y: r.y
            })
        })), t.sort(((e, t) => e.y - t.y)).map((e => e.id))
    }
})), r.register("5wCXS", (function(t, i) {
    e(t.exports, "default", (function() {
        return b
    }));
    var n = r("hxEiv"),
        a = r("6vbUb"),
        s = r("fywoC"),
        o = r("2FDaO"),
        l = r("6EcnK"),
        c = r("DT2Px"),
        u = r("lH0LY"),
        f = r("dsxHT"),
        d = r("577hQ");
    let p, m, g, h, x, v = e => e;
    var b = e => {
        const t = (0, u.default)(e.recipeId),
            r = s.useMemo((() => (0, l.default)(t.itemId).previewImage), [t.itemId]),
            i = (0, c.default)(t);
        return (0, n.jsxs)(y, {
            onClick: e.onSelect,
            children: [(0, n.jsx)(C, {
                src: r
            }), (0, n.jsxs)(M, {
                children: [(0, n.jsx)(w, {
                    children: (0, f.default)(t.itemId, t.itemAmount)
                }), (0, n.jsx)(j, {
                    style: {
                        color: i ? "#a5d6a7" : "#ef9a9a"
                    },
                    children: i ? d.default.availableToCraft(e.style) : "Insufficient Resources"
                })]
            })]
        })
    };
    const y = o.default.div.attrs({
            className: "maxWidth flex vc"
        })(p || (p = v`
  background: rgba(255, 255, 255, 0.1);
  padding: 25px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: background 0.2s;
  overflow: hidden;
  &:last-of-type {
    margin-bottom: 0px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`)),
        C = o.default.img(m || (m = v`
  height: 55px;
`)),
        M = (0, o.default)(a.motion.div).attrs({
            className: "flex-column"
        })(g || (g = v`
  margin-left: 15px;
  line-height: 1;
`)),
        w = o.default.div(h || (h = v`
  font-size: 20px;
`)),
        j = o.default.div(x || (x = v`
  color: #a5d6a7;
  font-size: 12px;
  margin-top: 6px;
  opacity: 0.8;
`))
})), r.register("d4Dab", (function(t, i) {
    e(t.exports, "CraftingTableDeviceUIBackgroundColor", (function() {
        return a
    }));
    var n = r("cRaEs");
    const a = e => e === n.CraftingTableStyle.plant ? "rgba(0,51,0,0.93)" : "rgba(38,50,56,0.93)"
}));