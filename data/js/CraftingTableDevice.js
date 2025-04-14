function e(e, t, i, a) {
    Object.defineProperty(e, t, {
        get: i,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("jhAjg", (function(t, a) {
    var r;
    r = t.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return h
    }));
    var s = i("divCp"),
        n = i("bNmF9"),
        o = i("881Be"),
        l = i("awovU"),
        d = i("kakfs"),
        u = i("4cOQM"),
        c = i("e5vxg"),
        f = i("64qN0"),
        p = i("8Zl5K"),
        g = i("8W6Kn"),
        v = i("bGr6O");
    class m extends n.default {
        constructor(e) {
            super(e), (0, s.default)(this, "pieces", {
                progressBar: {}
            }), (0, s.default)(this, "interactivity", {
                withinBounds: !1
            }), (0, s.default)(this, "itemIsOutlined", !1), (0, s.default)(this, "openDeviceUI", (() => {
                (0, c.default)(this)
            })), (0, s.default)(this, "onStateChange", (e => {
                (0, p.default)(e, this)
            })), (0, s.default)(this, "onUpdate", (() => {
                (0, v.default)(this)
            })), (0, s.default)(this, "onDestroy", (() => {
                this.particles.destroy(), this.refetchInteractionTimeout && window.clearTimeout(this.refetchInteractionTimeout)
            })), this.createdAt = Date.now(), (0, d.CraftingTableCreateCollider)(this), this.callbackHelper = new(0, o.default)(this), this.particles = new(0, l.default)(this), (0, f.CraftingTableDeviceSetupInteractionRadius)(this), (0, u.default)(this), (0, g.default)(this), this.interactiveZones.onInteractiveCb = () => {
                this.interactivity.withinBounds = !0
            }, this.interactiveZones.onNonInteractive = () => {
                this.interactivity.withinBounds = !1
            }
        }
    }
    var h = m
})), i.register("881Be", (function(t, a) {
    e(t.exports, "default", (function() {
        return u
    }));
    var r = i("divCp"),
        s = i("1ohuV"),
        n = i("jVQO4"),
        o = i("alREA"),
        l = i("3iPiZ"),
        d = i("lH0LY");
    var u = class {
        constructor(e) {
            (0, r.default)(this, "craft", (e => {
                this.device.sendToServerDevice(s.Messages.craft, {
                    recipe: e
                });
                const t = (0, d.default)(e);
                t && t.timeToCraftMs > 0 && (0, n.playSound)({
                    path: (0, o.default)("devices/crafting_table/appear.mp3"),
                    volume: (0, l.getVolume)({
                        volume: .35,
                        type: l.SoundType.soundEffect
                    })
                })
            })), (0, r.default)(this, "collect", (() => {
                this.device.sendToServerDevice(s.Messages.collect), (0, n.playSound)({
                    path: (0, o.default)("sounds/core/collectItem.mp3"),
                    volume: (0, l.getVolume)({
                        volume: .7,
                        type: l.SoundType.soundEffect
                    })
                })
            })), this.device = e
        }
    }
})), i.register("1ohuV", (function(t, i) {
    let a;
    var r;
    e(t.exports, "Messages", (function() {
        return a
    })), (r = a || (a = {})).craft = "craft", r.collect = "collect"
})), i.register("lH0LY", (function(t, a) {
    e(t.exports, "default", (function() {
        return s
    }));
    var r = i("iRjsB");
    var s = e => {
        const t = r.default.world.devices.devices.get(e);
        if (!t) return null;
        const i = t.options,
            a = new Map,
            s = e => i.numberOfIngredients >= e,
            n = (e, t) => {
                const i = a.get(e);
                i ? i.amount += t : a.set(e, {
                    item: e,
                    amount: t
                })
            };
        s(1) && n(i.ingredient1Item, i.ingredient1Amount), s(2) && n(i.ingredient2Item, i.ingredient2Amount), s(3) && n(i.ingredient3Item, i.ingredient3Amount), s(4) && n(i.ingredient4Item, i.ingredient4Amount), s(5) && n(i.ingredient5Item, i.ingredient5Amount);
        return {
            id: e,
            itemId: i.item,
            itemAmount: i.itemAmount,
            ingredients: Array.from(a.values()),
            timeToCraftMs: i.timeToCraftMs,
            timeToDisposeMs: i.itemDisposes ? i.disposeItemAfterMs : 0
        }
    }
})), i.register("awovU", (function(a, r) {
    e(a.exports, "default", (function() {
        return u
    }));
    var s = i("divCp"),
        n = i("c3ah8"),
        o = i("alREA"),
        l = i("7qUZR"),
        d = i("6Tpu2");
    var u = class {
        constructor(e) {
            (0, s.default)(this, "burst", (() => {
                this.emitter && (this.emitter.setDepth(this.device.getMaxDepth() + 1), this.emitter.explode(50))
            })), (0, s.default)(this, "destroy", (() => {
                this.emitter && this.emitter.destroy(!0)
            })), (0, s.default)(this, "load", (() => {
                if (!(0, d.InGamePhase)()) return;
                const e = (0, o.default)("devices/crafting_table/particle.png");
                (0, l.default)({
                    key: e,
                    url: e,
                    onLoad: () => {
                        this.device.isDestroyed || (this.emitter = this.device.scene.add.particles(this.device.x, this.device.y, e, {
                            speed: {
                                min: -400,
                                max: 400
                            },
                            angle: {
                                min: 180,
                                max: 360
                            },
                            scale: {
                                start: .5,
                                end: 0
                            },
                            blendMode: t(n).BlendModes.SCREEN,
                            emitting: !1,
                            lifespan: 1e3,
                            gravityY: 250
                        }))
                    }
                })
            })), this.device = e
        }
    }
})), i.register("kakfs", (function(t, a) {
    e(t.exports, "CraftingTableCreateCollider", (function() {
        return n
    }));
    var r = i("bDCcz"),
        s = i("cRaEs");
    const n = e => {
        e.options.style === s.CraftingTableStyle.craft && ((0, r.isTopDown)() ? e.colliders.add.box({
            x: 0,
            y: 13,
            w: 105,
            h: 70
        }) : (0, r.isPlatformer)() && (e.colliders.add.box({
            x: 0,
            y: 0,
            w: 105,
            h: 92
        }), e.colliders.add.box({
            x: -39,
            y: 56,
            w: 14,
            h: 24
        }), e.colliders.add.box({
            x: 38,
            y: 56,
            w: 14,
            h: 24
        })))
    }
})), i.register("cRaEs", (function(t, i) {
    let a;
    var r;
    e(t.exports, "CraftingTableStyle", (function() {
        return a
    })), (r = a || (a = {})).plant = "plant", r.craft = "craft", r.store = "store"
})), i.register("4cOQM", (function(t, a) {
    e(t.exports, "default", (function() {
        return p
    }));
    var r = i("alREA"),
        s = i("9oxA4"),
        n = i("050o1"),
        o = i("bDCcz"),
        l = i("cRaEs"),
        d = i("5dEEM"),
        u = i("8oOHV"),
        c = i("1U8o5"),
        f = i("51atS");
    var p = e => {
        const {
            key: t,
            url: i,
            displayWidth: a,
            y: p,
            originY: g
        } = (e => e.options.style === l.CraftingTableStyle.plant ? {
            key: "crafting-table-plant",
            url: (0, r.default)("/devices/crafting_table/dirt.png"),
            displayWidth: 120
        } : {
            key: "crafting-table",
            url: (0, r.default)("/devices/crafting_table/table.png"),
            displayWidth: 110,
            originY: 1,
            y: 67
        })(e);
        e.pieces.base = e.parts.add.sprite({
            imageId: t,
            imageUrl: i,
            originY: null != g ? g : .5,
            y: null != p ? p : 0,
            layerId: (0, f.GetCraftingTableDeviceLayer)(e),
            depthChange: (0, n.default)(1),
            onReady: e => {
                const t = (0, s.default)({
                    height: e.view.displayHeight,
                    width: e.view.displayWidth,
                    newWidth: a
                });
                e.view.setDisplaySize(t.width, t.height)
            }
        }), e.options.style === l.CraftingTableStyle.craft && (0, o.isTopDown)() && e.shadows.add({
            r1: 70,
            r2: 30,
            y: 52
        }), e.state.status !== d.CraftingTableStatus.idle && ((0, u.default)(e), e.state.status === d.CraftingTableStatus.availableForCollection && (0, c.default)(e)), e.particles.load()
    }
})), i.register("9oxA4", (function(t, i) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = e => {
        const t = e.newWidth / e.width;
        return {
            height: e.height * t,
            width: e.width * t
        }
    }
})), i.register("5dEEM", (function(t, i) {
    let a;
    var r;
    e(t.exports, "CraftingTableStatus", (function() {
        return a
    })), (r = a || (a = {})).idle = "idle", r.crafting = "crafting", r.availableForCollection = "availableForCollection"
})), i.register("8oOHV", (function(t, a) {
    e(t.exports, "default", (function() {
        return c
    }));
    var r = i("7iSMe"),
        s = i("050o1"),
        n = i("6EcnK"),
        o = i("cLS8f"),
        l = i("jABV8"),
        d = i("5dEEM"),
        u = i("51atS");
    var c = e => {
        if (!e.state.itemId) return;
        const t = (0, n.default)(e.state.itemId);
        if (t) {
            if (e.pieces.item) {
                if (e.pieces.item.view.texture.key === t.previewImage) return;
                e.pieces.item.destroy(), e.pieces.item = void 0
            }
            e.pieces.item = e.parts.add.sprite({
                imageId: t.previewImage,
                imageUrl: t.previewImage,
                layerId: (0, u.GetCraftingTableDeviceLayer)(e),
                onReady: t => {
                    t.view.setDepth(e.getMaxDepth() + (0, s.default)(1));
                    const i = e.state.status === d.CraftingTableStatus.availableForCollection;
                    t.view.alpha = i ? 1 : 0;
                    const a = (0, r.default)({
                        width: t.view.displayWidth,
                        newWidth: l.default.width
                    });
                    if (t.view.setScale(a), i) return void o.default.itemReady.applyItemAnimation(e, t.view);
                    const n = Number(t.view.scale);
                    t.view.scale = 0, e.tweens.add({
                        targets: t.view,
                        scale: n,
                        duration: o.default.itemCreated.duration,
                        ease: o.default.itemCreated.ease
                    })
                }
            })
        }
    }
})), i.register("7iSMe", (function(t, i) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = e => e.newWidth / e.width
})), i.register("cLS8f", (function(a, r) {
    e(a.exports, "default", (function() {
        return n
    }));
    var s = i("c3ah8");
    var n = {
        itemCreated: {
            duration: 250,
            ease: t(s).Math.Easing.Quadratic.Out
        },
        itemDestroyed: {
            duration: 200,
            ease: t(s).Math.Easing.Sine.Out
        },
        itemReady: {
            applyItemAnimation: (e, i) => {
                const a = i.scale;
                e.tweens.add({
                    targets: i,
                    scale: {
                        from: a,
                        to: 1.1 * a
                    },
                    duration: 1e3,
                    ease: t(s).Math.Easing.Sine.Out,
                    yoyo: !0,
                    repeat: -1
                })
            },
            applyShineAnimation: (e, i) => {
                e.tweens.add({
                    targets: i,
                    alpha: .25,
                    duration: 500,
                    ease: t(s).Math.Easing.Sine.In,
                    yoyo: !0,
                    repeat: -1
                })
            }
        }
    }
})), i.register("jABV8", (function(t, i) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        width: 60
    }
})), i.register("51atS", (function(t, a) {
    e(t.exports, "GetCraftingTableDeviceLayer", (function() {
        return o
    }));
    var r = i("bvStP"),
        s = i("bDCcz"),
        n = i("cRaEs");
    const o = e => (0, s.isPlatformer)() ? e.layers.getLayer() : e.options.style == n.CraftingTableStyle.plant ? r.default.DevicesUnderCharacters : r.default.DepthSortedCharactersAndDevices
})), i.register("1U8o5", (function(a, r) {
    e(a.exports, "default", (function() {
        return f
    }));
    var s = i("c3ah8"),
        n = i("7iSMe"),
        o = i("050o1"),
        l = i("6EcnK"),
        d = i("cLS8f"),
        u = i("jABV8"),
        c = i("51atS");
    var f = e => {
        const i = e.state.itemId;
        if (!i) return;
        const a = (0, l.default)(i);
        a && (e.pieces.itemShine && (e.pieces.itemShine.destroy(), e.pieces.itemShine = null), e.pieces.itemShine = e.parts.add.sprite({
            imageId: a.previewImage,
            imageUrl: a.previewImage,
            layerId: (0, c.GetCraftingTableDeviceLayer)(e),
            onReady: i => {
                i.view.setDepth(e.getMaxDepth() + (0, o.default)(2));
                const a = (0, n.default)({
                    width: i.view.displayWidth,
                    newWidth: u.default.width
                });
                i.view.setScale(a), i.view.alpha = 0, i.view.blendMode = t(s).BlendModes.ADD, d.default.itemReady.applyShineAnimation(e, i.view)
            }
        }))
    }
})), i.register("e5vxg", (function(t, i) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = e => {
        e.deviceUI.open({
            status: e.state.status,
            style: e.options.style,
            tableGroup: e.options.group,
            craft: e.callbackHelper.craft,
            collect: e.callbackHelper.collect,
            item: e.state.itemId,
            itemAmount: e.state.itemAmount,
            craftingDurationMs: e.state.craftingDurationMs,
            itemFinishesCraftingAt: e.state.itemFinishesCraftingAt,
            itemDisposalMs: e.state.itemDisposalMs,
            itemDisposedAt: e.state.itemDisposedAt,
            itemCrafterCharacterId: e.state.itemCrafterCharacterId,
            useCrafterCollectionAdvantage: e.options.useCrafterCollectionAdvantage
        })
    }
})), i.register("64qN0", (function(t, a) {
    e(t.exports, "CraftingTableDeviceSetupInteractionRadius", (function() {
        return s
    }));
    var r = i("cRaEs");
    const s = e => {
        const {
            style: t
        } = e.options;
        t !== r.CraftingTableStyle.plant ? e.interactiveZones.add.circle({
            r: 120,
            y: 10
        }) : e.interactiveZones.add.circle({
            r: 100
        })
    }
})), i.register("8Zl5K", (function(t, a) {
    e(t.exports, "default", (function() {
        return n
    }));
    var r = i("8W6Kn"),
        s = i("6hzeP");
    var n = (e, t) => {
        "status" === e && (0, s.default)(t), "itemId" === e && (t.deviceUI.update({
            item: t.state.itemId
        }), (0, r.default)(t)), "craftingDurationMs" === e && t.deviceUI.update({
            craftingDurationMs: t.state.craftingDurationMs
        }), "itemFinishesCraftingAt" === e && t.deviceUI.update({
            itemFinishesCraftingAt: t.state.itemFinishesCraftingAt
        }), "itemAmount" === e && t.deviceUI.update({
            itemAmount: t.state.itemAmount
        }), "itemDisposedAt" === e && t.deviceUI.update({
            itemDisposedAt: t.state.itemDisposedAt
        }), "itemDisposalMs" === e && t.deviceUI.update({
            itemDisposalMs: t.state.itemDisposalMs
        }), "itemCrafterCharacterId" === e && t.deviceUI.update({
            itemCrafterCharacterId: t.state.itemCrafterCharacterId
        })
    }
})), i.register("8W6Kn", (function(t, a) {
    e(t.exports, "default", (function() {
        return f
    }));
    var r = i("3sJmi"),
        s = i("iRjsB"),
        n = i("fhnJp"),
        o = i("577hQ"),
        l = i("kkz6q"),
        d = i("5dEEM"),
        u = i("dsxHT");
    const c = e => {
        if (e.state.status === d.CraftingTableStatus.availableForCollection) {
            let t = 1;
            if (!(e.state.itemCrafterCharacterId === (0, n.default)()) && e.options.useCrafterCollectionAdvantage) {
                const i = e.state.itemFinishesCraftingAt + 1e3 * l.default.secondsAdvantage,
                    a = Math.ceil((i - s.default.session.gameTime) / 1e3);
                a < 1 ? t = 1 : (e.refetchInteractionTimeout = window.setTimeout((() => {
                    c(e)
                }), 250), t = a)
            }
            e.interactiveZones.setInfo({
                message: `Collect ${(0,u.default)(e.state.itemId,e.state.itemAmount)}`,
                allowedToInteract: !0,
                duration: t
            }), e.interactiveZones.onInteraction = () => {
                e.callbackHelper.collect()
            }
        } else e.state.status === d.CraftingTableStatus.idle ? e.interactiveZones.setInfo({
            message: (0, r.CapitalizeFirstLetter)(o.default.baseVerb(e.options.style)),
            allowedToInteract: !0
        }) : e.interactiveZones.setInfo({
            message: `${(0,r.CapitalizeFirstLetter)(o.default.preparing(e.options.style))} ${(0,u.default)(e.state.itemId,e.state.itemAmount)}`,
            action: "to check status",
            allowedToInteract: !0
        }), e.interactiveZones.onInteraction = () => {
            e.openDeviceUI()
        }
    };
    var f = c
})), i.register("577hQ", (function(t, a) {
    e(t.exports, "default", (function() {
        return o
    }));
    var r = i("3sJmi"),
        s = i("cRaEs");
    const n = e => e === s.CraftingTableStyle.plant ? "plant" : e === s.CraftingTableStyle.craft ? "craft" : "purchase";
    var o = {
        noItems: e => `No items currently available to ${n(e)}.`,
        selectItem: e => `Select an item to ${n(e)}...`,
        availableToCraft: e => `Available To ${(0,r.CapitalizeFirstLetter)(n(e))}`,
        instantNote: e => e === s.CraftingTableStyle.store ? "Available immediately" : e === s.CraftingTableStyle.plant ? "Grows instantly" : "Crafts instantly",
        durationNote: e => t => t === s.CraftingTableStyle.store ? `Takes ${e} to prepare` : t === s.CraftingTableStyle.plant ? `Takes ${e} to grow` : `Takes ${e} to craft`,
        expireVerb: e => e === s.CraftingTableStyle.plant ? "goes bad" : "expires",
        resource: e => e === s.CraftingTableStyle.store ? "resource" : "ingredient",
        preparing: e => e === s.CraftingTableStyle.store ? "preparing" : e === s.CraftingTableStyle.plant ? "growing" : "crafting",
        baseVerb: n
    }
})), i.register("kkz6q", (function(t, i) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        secondsAdvantage: 5
    }
})), i.register("dsxHT", (function(t, a) {
    e(t.exports, "default", (function() {
        return n
    }));
    var r = i("iMOcM"),
        s = i("3ugly");
    var n = (e, t) => {
        let i = (0, s.ItemName)(e) || "Item";
        return t > 1 && (i += ` (${(0,r.numberWithCommas)(t)})`), i
    }
})), i.register("6hzeP", (function(t, a) {
    e(t.exports, "default", (function() {
        return v
    }));
    var r = i("iRjsB"),
        s = i("alREA"),
        n = i("3iPiZ"),
        o = i("jVQO4"),
        l = i("cLS8f"),
        d = i("5dEEM"),
        u = i("8oOHV"),
        c = i("1U8o5"),
        f = i("cm5O9"),
        p = i("fdwDs"),
        g = i("8W6Kn");
    var v = e => {
        const t = e.state.status;
        if (t === d.CraftingTableStatus.idle && ((0, f.default)(e), (0, p.default)(e)), t !== d.CraftingTableStatus.crafting && t !== d.CraftingTableStatus.availableForCollection || (0, u.default)(e), t === d.CraftingTableStatus.availableForCollection && (e.pieces.item && l.default.itemReady.applyItemAnimation(e, e.pieces.item.view), (0, c.default)(e), e.state.itemDisposedAt || (0, p.default)(e), e.cull.isInsideView && !r.default.session.loadingPhase)) {
            Date.now() - e.createdAt > 1500 && ((0, o.playSound)({
                path: (0, s.default)("devices/crafting_table/complete.mp3"),
                volume: (0, n.getVolume)({
                    volume: .4,
                    type: n.SoundType.soundEffect
                })
            }), e.particles.burst())
        }
        e.deviceUI.update({
            status: e.state.status
        }), (0, g.default)(e)
    }
})), i.register("cm5O9", (function(t, a) {
    e(t.exports, "default", (function() {
        return s
    }));
    var r = i("cLS8f");
    var s = e => {
        if (e.pieces.item) {
            const t = e.pieces.item;
            e.pieces.item = void 0, e.tweens.add({
                targets: t.view,
                scale: 0,
                opacity: .5,
                duration: r.default.itemDestroyed.duration,
                ease: r.default.itemDestroyed.ease,
                onComplete: () => {
                    t.destroy()
                }
            })
        }
        if (e.pieces.itemShine) {
            const t = e.pieces.itemShine;
            e.pieces.itemShine = void 0, e.tweens.add({
                targets: t.view,
                scale: 0,
                opacity: .5,
                duration: r.default.itemDestroyed.duration,
                ease: r.default.itemDestroyed.ease,
                onComplete: () => {
                    t.destroy()
                }
            })
        }
    }
})), i.register("fdwDs", (function(t, i) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = e => {
        e.pieces.progressBar.background && e.pieces.progressBar.bar && (e.pieces.progressBar.background.view.destroy(), e.pieces.progressBar.bar.view.destroy(), e.pieces.progressBar.background = void 0, e.pieces.progressBar.bar = void 0)
    }
})), i.register("bGr6O", (function(t, a) {
    e(t.exports, "default", (function() {
        return c
    }));
    var r = i("cmvpZ"),
        s = i("bssnp"),
        n = i("rUtvU"),
        o = i("5xt14"),
        l = i("9SvNC"),
        d = i("5dEEM"),
        u = i("eIE9W");
    var c = e => {
        if (e.cull.isInsideView) {
            if (e.state.status === d.CraftingTableStatus.crafting) {
                var t, i, a;
                const n = e.state.itemFinishesCraftingAt - e.state.craftingDurationMs,
                    o = ((0, s.GetServerGameTimeWithCompensation)() - n) / e.state.craftingDurationMs;
                (0, u.default)({
                    device: e,
                    completion: o,
                    color: l.default.progressColor
                });
                const d = (0, r.clamp)(o, .25, 1);
                null === (t = e.pieces) || void 0 === t || null === (i = t.item) || void 0 === i || null === (a = i.view) || void 0 === a || a.setAlpha(d)
            }
            var c, f, p, g, v;
            if (e.state.status === d.CraftingTableStatus.availableForCollection)
                if (null === (c = e.pieces) || void 0 === c || null === (f = c.item) || void 0 === f || null === (p = f.view) || void 0 === p || p.setAlpha(1), e.state.itemDisposedAt) {
                    const t = e.state.itemDisposedAt - e.state.itemDisposalMs,
                        i = 1 - ((0, s.GetServerGameTimeWithCompensation)() - t) / e.state.itemDisposalMs;
                    (0, u.default)({
                        device: e,
                        completion: i,
                        color: l.default.expirationColor
                    })
                } if (e.itemIsOutlined)
                if (!e.interactivity.withinBounds || e.state.status !== d.CraftingTableStatus.availableForCollection) e.itemIsOutlined = !1, (null === (g = e.pieces) || void 0 === g ? void 0 : g.item) && (0, o.RemoveOutline)({
                    view: e.pieces.item.view
                });
            if (e.interactivity.withinBounds) e.state.status === d.CraftingTableStatus.availableForCollection && !e.itemIsOutlined && (null === (v = e.pieces.item) || void 0 === v ? void 0 : v.view) && (e.itemIsOutlined = !0, (0, n.AddOutline)({
                view: e.pieces.item.view
            }))
        }
    }
})), i.register("rUtvU", (function(t, a) {
    e(t.exports, "AddOutline", (function() {
        return s
    }));
    var r = i("gwuwo");
    const s = e => {
        if (!e.view || !e.view.active) return;
        const t = {
                thickness: 2
            },
            i = e.options ? {
                ...t,
                ...e.options
            } : {
                ...t
            };
        (0, r.default)().plugins.get("rexOutlinePipeline").add(e.view, i)
    }
})), i.register("5xt14", (function(t, a) {
    e(t.exports, "RemoveOutline", (function() {
        return s
    }));
    var r = i("gwuwo");
    const s = e => {
        e.view && (0, r.default)().plugins.get("rexOutlinePipeline").remove(e.view)
    }
})), i.register("9SvNC", (function(t, a) {
    e(t.exports, "default", (function() {
        return n
    }));
    var r = i("bDCcz"),
        s = i("cRaEs");
    var n = {
        width: 55,
        height: 12,
        backgroundColor: 16777215,
        borderColor: 2503224,
        borderWidth: 5,
        progressColor: 4431943,
        expirationColor: 15092249,
        yOffset: e => e.options.style === s.CraftingTableStyle.plant ? 70 : (0, r.isPlatformer)() ? -75 : 85
    }
})), i.register("eIE9W", (function(t, a) {
    e(t.exports, "default", (function() {
        return n
    }));
    var r = i("9SvNC"),
        s = i("hzrgE");
    var n = e => {
        const {
            device: t,
            completion: i
        } = e;
        t.pieces.progressBar.bar && t.pieces.progressBar.background || (0, s.default)(t), t.pieces.progressBar.bar.updateFillColor({
            color: e.color,
            blockRedraw: !0
        }), t.pieces.progressBar.bar.updateDimensions({
            height: r.default.height,
            width: r.default.width * i
        }), t.pieces.progressBar.bar.view.setX(t.x - (r.default.width - r.default.width * i) / 2)
    }
})), i.register("hzrgE", (function(t, a) {
    e(t.exports, "default", (function() {
        return o
    }));
    var r = i("cLS8f"),
        s = i("9SvNC"),
        n = i("51atS");
    var o = e => {
        e.pieces.progressBar.background && e.pieces.progressBar.background.destroy(), e.pieces.progressBar.bar && e.pieces.progressBar.bar.destroy(), e.pieces.progressBar.background = e.parts.add.rect({
            width: s.default.width,
            height: s.default.height,
            y: s.default.yOffset(e),
            color: s.default.backgroundColor,
            borderColor: s.default.borderColor,
            borderWidth: s.default.borderWidth,
            borderAlpha: 1,
            layerId: (0, n.GetCraftingTableDeviceLayer)(e)
        }), e.pieces.progressBar.bar = e.parts.add.rect({
            width: s.default.width,
            height: s.default.height,
            y: s.default.yOffset(e),
            color: s.default.progressColor,
            layerId: (0, n.GetCraftingTableDeviceLayer)(e)
        }), e.pieces.progressBar.background.view.setScale(0), e.pieces.progressBar.bar.view.setAlpha(0), e.tweens.add({
            targets: e.pieces.progressBar.background.view,
            scale: 1,
            duration: r.default.itemCreated.duration,
            ease: r.default.itemCreated.ease,
            onComplete: () => {
                var t;
                (null === (t = e.pieces.progressBar.bar) || void 0 === t ? void 0 : t.view) && e.pieces.progressBar.bar.view.setAlpha(1)
            }
        })
    }
}));