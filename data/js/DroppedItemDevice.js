function t(t, e, i, s) {
    Object.defineProperty(t, e, {
        get: i,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("j6eu0", (function(i, s) {
    var a;
    a = i.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), t(i.exports, "default", (function() {
        return R
    }));
    var n = e("divCp"),
        o = e("bvStP"),
        r = e("9oxA4"),
        d = e("fHf8O"),
        l = e("bNmF9"),
        h = e("hsmfd"),
        u = e("rUtvU"),
        c = e("5xt14"),
        f = e("iRjsB"),
        v = e("jVQO4"),
        w = e("alREA"),
        m = e("3iPiZ"),
        p = e("3ugly"),
        g = e("7qUZR"),
        I = e("4awyC"),
        y = e("7ypii"),
        x = e("eURCd"),
        O = e("jSE8L"),
        S = e("kRzgw"),
        C = e("9zkt5"),
        b = e("bDCcz"),
        P = e("780Y0");
    class E extends l.default {
        constructor(t) {
            if (super(t), (0, n.default)(this, "hidden", !1), (0, n.default)(this, "onUpdate", (t => {
                    var e;
                    (0, b.isPlatformer)() && (null === (e = this.item) || void 0 === e ? void 0 : e.view) && (this.item.view.y < this.state.fallY && (this.item.view.y += (0, P.default)(S.default.fall.fallSpeedPerSecond) * t / 1e3, this.item.view.y >= this.state.fallY && (this.item.view.y = this.state.fallY)), this.y = this.item.view.y)
                })), (0, n.default)(this, "setInteractionInfo", (() => {
                    const t = (0, p.ItemName)(this.options.itemId),
                        e = (0, I.IsWeapon)(this.options.itemId),
                        i = (0, y.IsItem)(this.options.itemId);
                    let s = !0;
                    if (e || i) {
                        var a, n;
                        const t = null !== (n = null === (a = f.default.me.inventory.slots.get(this.options.itemId)) || void 0 === a ? void 0 : a.amount) && void 0 !== n ? n : 0;
                        if (e) {
                            s = t < (0, x.GetMaxAmountOfWeapon)({
                                itemId: this.options.itemId
                            })
                        } else if (i) {
                            s = t < (0, O.GetMaxAmountOfItem)({
                                itemId: this.options.itemId
                            })
                        }
                    }
                    if (t) {
                        const e = this.state.amount || this.options.amount;
                        this.interactiveZones.setInfo({
                            message: (0, C.ItemNameWithCount)(t, e),
                            action: S.default.interaction.message.action,
                            allowedToInteract: s,
                            topHeader: s ? void 0 : S.default.interaction.message.fullInventory,
                            topHeaderColor: S.default.interaction.message.fullInventoryColor
                        })
                    }
                })), (0, n.default)(this, "startShowUpTweens", (() => {
                    if (!this.state.visible) return;
                    this.item.view.alpha = 0, this.item.view.displayWidth = 0, this.item.view.displayHeight = 0, (0, b.isPlatformer)() && this.item.view.setOrigin(.5);
                    const t = this.item.view.x,
                        e = this.item.view.y;
                    var i, s;
                    if (this.item.view.x = null !== (i = this.options.originX) && void 0 !== i ? i : t, this.item.view.y = null !== (s = this.options.originY) && void 0 !== s ? s : e, this.tweens.add({
                            targets: this.item.view,
                            alpha: 1,
                            displayWidth: 60,
                            displayHeight: 60,
                            x: t,
                            y: e,
                            duration: 350,
                            ease: Phaser.Math.Easing.Back.Out,
                            onComplete: () => {
                                this.startIdleTweens()
                            }
                        }), this.shadow) {
                        this.shadow.view.alpha = 0, this.shadow.view.scaleX = this.shadow.view.scaleY = 0;
                        const i = this.shadow.view.x,
                            s = this.shadow.view.y;
                        this.shadow.view.x += this.item.view.x - t, this.shadow.view.y += this.item.view.y - e, this.tweens.add({
                            targets: this.shadow.view,
                            alpha: .3,
                            scaleX: .6,
                            scaleY: .6,
                            x: i,
                            y: s,
                            duration: 350,
                            ease: Phaser.Math.Easing.Back.Out
                        })
                    }
                })), (0, n.default)(this, "startHideTweens", (() => {
                    this.state.visible && (this.tweens.add({
                        targets: this.item.view,
                        displayWidth: 0,
                        displayHeight: 0,
                        duration: 350,
                        ease: Phaser.Math.Easing.Back.In
                    }), this.shadow && (this.scene.tweens.getTweensOf(this.shadow.view).forEach((t => {
                        t.remove()
                    })), this.tweens.add({
                        targets: this.shadow.view,
                        scaleX: 0,
                        scaleY: 0,
                        duration: 250,
                        ease: Phaser.Math.Easing.Back.In
                    })))
                })), (0, n.default)(this, "startIdleTweens", (() => {
                    (0, b.isPlatformer)() || this.state.visible && (this.item.view.alpha = 1, this.tweens.add({
                        targets: this.item.view,
                        y: this.item.view.y - 15,
                        alpha: 1,
                        duration: 1200,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    }), this.shadow && (this.shadow.view.alpha = .3, this.shadow.view.setScale(.6), this.tweens.add({
                        targets: this.shadow.view,
                        scaleX: .5,
                        scaleY: .5,
                        alpha: .2,
                        duration: 1200,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    })))
                })), (0, n.default)(this, "onStateChange", (t => {
                    "amount" === t && this.setInteractionInfo(), "alreadyCollected" === t && (this.prevState.alreadyCollected || !this.state.alreadyCollected || this.hidden || (this.hidden = !0, this.startHideTweens()))
                })), (0, n.default)(this, "addOutline", (() => {
                    this.state.visible && (0, u.AddOutline)({
                        view: this.item.view
                    })
                })), (0, n.default)(this, "removeOutline", (() => {
                    this.state.visible && (0, c.RemoveOutline)({
                        view: this.item.view
                    })
                })), (0, b.isPlatformer)() ? this.cull.ignoreCulling() : this.boundingBox.setHardcoded({
                    width: 75,
                    height: 125,
                    y: -112.5
                }), !this.state.visible) return;
            if (this.state.alreadyCollected) return;
            (0, b.isPlatformer)() || (this.shadow = this.parts.add.sprite({
                ...h.ShadowAsset,
                layerId: o.default.DevicesUnderCharacters
            }));
            const e = f.default.worldOptions.itemOptions.find((t => t.id === this.options.itemId));
            if (e) {
                const t = e.id,
                    i = e.previewImage,
                    s = (0, d.default)(t),
                    a = (0, r.default)({
                        height: s.height,
                        width: s.width,
                        newWidth: S.default.itemWidth
                    });
                (0, g.default)({
                    key: t,
                    url: i,
                    onLoad: () => {
                        this.isDestroyed || (this.item = this.parts.add.sprite({
                            imageId: t,
                            imageUrl: i,
                            layerId: o.default.DepthSortedCharactersAndDevices,
                            y: (0, b.isPlatformer)() ? 0 : -65,
                            depthChange: 75,
                            displayWidth: a.width,
                            displayHeight: a.height
                        }), this.interactiveZones.add.circle({
                            x: 0,
                            y: 0,
                            r: S.default.interaction.radius
                        }), this.setInteractionInfo(), this.interactiveZones.onInteractiveCb = () => {
                            this.setInteractionInfo(), this.addOutline()
                        }, this.interactiveZones.onNonInteractive = () => {
                            this.removeOutline()
                        }, this.interactiveZones.onInteraction = () => {
                            this.state.canBeCollected && !this.state.alreadyCollected && (this.sendToServerDevice("interacted"), (0, v.playSound)({
                                path: (0, w.default)("sounds/core/collectItem.mp3"),
                                volume: (0, m.getVolume)({
                                    volume: .7,
                                    type: m.SoundType.soundEffect
                                })
                            }))
                        }, this.interactiveZones.setCanInteractThroughColliders(!0), this.state.canBeCollected ? this.startIdleTweens() : this.startShowUpTweens())
                    }
                })
            }
        }
    }
    var R = E
})), e.register("9oxA4", (function(e, i) {
    t(e.exports, "default", (function() {
        return s
    }));
    var s = t => {
        const e = t.newWidth / t.width;
        return {
            height: t.height * e,
            width: t.width * e
        }
    }
})), e.register("hsmfd", (function(i, s) {
    t(i.exports, "ShadowAsset", (function() {
        return a
    }));
    const a = {
        imageId: "item_shadow",
        imageUrl: (0, e("alREA").default)("devices/dropped_item/item-shadow.png")
    }
})), e.register("rUtvU", (function(i, s) {
    t(i.exports, "AddOutline", (function() {
        return n
    }));
    var a = e("gwuwo");
    const n = t => {
        if (!t.view || !t.view.active) return;
        const e = {
                thickness: 2
            },
            i = t.options ? {
                ...e,
                ...t.options
            } : {
                ...e
            };
        (0, a.default)().plugins.get("rexOutlinePipeline").add(t.view, i)
    }
})), e.register("5xt14", (function(i, s) {
    t(i.exports, "RemoveOutline", (function() {
        return n
    }));
    var a = e("gwuwo");
    const n = t => {
        t.view && (0, a.default)().plugins.get("rexOutlinePipeline").remove(t.view)
    }
})), e.register("eURCd", (function(i, s) {
    t(i.exports, "GetMaxAmountOfWeapon", (function() {
        return n
    }));
    var a = e("8GQrR");
    const n = t => {
        let e = 0;
        return (0, a.EachInteractiveSlot)({
            callback: i => {
                i.itemId !== t.itemId && "" !== i.itemId && i.itemId || (e += 1)
            }
        }), e
    }
})), e.register("8GQrR", (function(i, s) {
    t(i.exports, "EachInteractiveSlot", (function() {
        return o
    }));
    var a = e("iRjsB"),
        n = e("30KqB");
    const o = t => {
        const e = (0, n.FetchMapOptions)().interactiveItemsSlots,
            i = a.default.me.inventory.interactiveSlotsOrder;
        for (let s = 0; s < e; s++) {
            const e = i[s],
                n = a.default.me.inventory.interactiveSlots.get(`${e}`);
            if (t.callback(n, e)) return
        }
    }
})), e.register("jSE8L", (function(i, s) {
    t(i.exports, "GetMaxAmountOfItem", (function() {
        return o
    }));
    var a = e("6EcnK"),
        n = e("8GQrR");
    const o = t => {
        var e;
        const i = null !== (e = (0, a.default)(t.itemId).maxStackSize) && void 0 !== e ? e : 1;
        let s = 0;
        return (0, n.EachInteractiveSlot)({
            ...t,
            callback: e => {
                e.itemId !== t.itemId && "" !== e.itemId && e.itemId || (s += i)
            }
        }), s
    }
})), e.register("kRzgw", (function(i, s) {
    t(i.exports, "default", (function() {
        return a
    }));
    var a = {
        itemWidth: 60,
        floatingHeight: {
            topDown: 112.5,
            platformer: 30
        },
        interaction: {
            radius: 50,
            message: {
                action: "to collect",
                fullInventory: "Inventory Full",
                fullInventoryColor: "#ffcdd2"
            }
        },
        fall: {
            fallSpeedPerSecond: (0, e("r04Cv").default)(100)
        }
    }
}));