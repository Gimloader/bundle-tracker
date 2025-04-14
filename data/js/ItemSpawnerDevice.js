function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("cRhWC", (function(n, s) {
    var o;
    o = n.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), t(n.exports, "default", (function() {
        return M
    }));
    var a = i("divCp"),
        r = i("iRjsB"),
        d = i("alREA"),
        l = i("9oxA4"),
        u = i("bNmF9"),
        h = i("kRzgw"),
        c = i("c3ah8"),
        m = i("bvStP"),
        f = i("f3xPZ"),
        v = i("bssnp"),
        g = i("9zkt5"),
        I = i("3ugly"),
        p = i("4awyC"),
        w = i("7ypii"),
        y = i("eURCd"),
        S = i("jSE8L"),
        x = i("jVQO4"),
        O = i("3iPiZ"),
        R = i("aCad7"),
        b = i("rUtvU"),
        W = i("5xt14"),
        C = i("6Tpu2");
    class D extends u.default {
        constructor(t) {
            super(t), (0, a.default)(this, "hasLoaded", !1), (0, a.default)(this, "isShowing", !0), (0, a.default)(this, "isWithinInteractionRange", !1), (0, a.default)(this, "itemDimensions", {
                width: 0,
                height: 0
            }), (0, a.default)(this, "setInteractionInfo", (() => {
                const e = (0, I.ItemName)(this.options.itemId),
                    t = (0, p.IsWeapon)(this.options.itemId),
                    i = (0, w.IsItem)(this.options.itemId);
                let n = !0;
                if (t || i) {
                    var s, o;
                    const e = null !== (o = null === (s = r.default.me.inventory.slots.get(this.options.itemId)) || void 0 === s ? void 0 : s.amount) && void 0 !== o ? o : 0;
                    if (t) {
                        n = e < (0, y.GetMaxAmountOfWeapon)({
                            itemId: this.options.itemId
                        })
                    } else if (i) {
                        n = e < (0, S.GetMaxAmountOfItem)({
                            itemId: this.options.itemId
                        })
                    }
                }
                if (e) {
                    const t = this.options.itemAmount;
                    this.interactiveZones.setInfo({
                        message: (0, g.ItemNameWithCount)(e, t),
                        action: h.default.interaction.message.action,
                        allowedToInteract: n,
                        topHeader: n ? void 0 : h.default.interaction.message.fullInventory,
                        topHeaderColor: h.default.interaction.message.fullInventoryColor
                    })
                }
            })), (0, a.default)(this, "addOutline", (() => {
                this.hasLoaded && (0, b.AddOutline)({
                    view: this.itemImage.view
                })
            })), (0, a.default)(this, "removeOutline", (() => {
                this.hasLoaded && (0, W.RemoveOutline)({
                    view: this.itemImage.view
                })
            })), (0, a.default)(this, "show", (() => {
                this.isShowing = !0, this.tweens.add({
                    targets: this.itemImage.view,
                    displayWidth: this.itemDimensions.width,
                    displayHeight: this.itemDimensions.height,
                    duration: 250,
                    ease: e(c).Math.Easing.Back.In
                }), this.interactiveZones.setForceDisabled(!1)
            })), (0, a.default)(this, "hide", (() => {
                this.isShowing = !1, this.tweens.add({
                    targets: this.itemImage.view,
                    displayWidth: 0,
                    displayHeight: 0,
                    duration: 250,
                    ease: e(c).Math.Easing.Back.Out
                }), this.interactiveZones.setForceDisabled(!0), this.isWithinInteractionRange && this.removeOutline()
            })), (0, a.default)(this, "onUpdate", (() => {
                if (!this.hasLoaded) return;
                var e;
                if ((0, v.GetServerGameTimeWithCompensation)() >= (null !== (e = this.state.itemAvailableTimestamp) && void 0 !== e ? e : 0)) {
                    if (this.isShowing) return;
                    this.show()
                } else {
                    if (!this.isShowing) return;
                    this.hide()
                }
            }));
            const i = (0, d.default)(`devices/models/baseModel/bases/${(0,f.default)(this.options.itemId)}.png`);
            this.base = this.parts.add.sprite({
                imageId: i,
                imageUrl: i,
                layerId: m.default.DevicesUnderCharacters
            }), this.base.view.setScale(.15);
            const n = r.default.worldOptions.itemOptions.find((e => e.id === this.options.itemId));
            if (n) {
                const t = n.previewImage;
                this.itemImage = this.parts.add.sprite({
                    imageId: t,
                    imageUrl: t,
                    layerId: m.default.DepthSortedCharactersAndDevices,
                    onReady: e => {
                        this.itemDimensions = (0, l.default)({
                            height: e.view.height,
                            width: e.view.width,
                            newWidth: h.default.itemWidth
                        }), e.view.setDisplaySize(this.itemDimensions.width, this.itemDimensions.height), this.hasLoaded = !0
                    }
                }), this.itemImage.view.setY(this.itemImage.view.y - 50), this.tweens.add({
                    targets: this.itemImage.view,
                    y: this.itemImage.view.y - 15,
                    duration: 1200,
                    yoyo: !0,
                    repeat: -1,
                    ease: e(c).Math.Easing.Sine.InOut
                }), this.interactiveZones.add.circle({
                    x: 0,
                    y: 0,
                    r: 100
                }), this.setInteractionInfo(), this.interactiveZones.onInteractiveCb = () => {
                    (0, C.InPreGamePhase)() || (this.isWithinInteractionRange = !0, this.setInteractionInfo(), this.addOutline())
                }, this.interactiveZones.onNonInteractive = () => {
                    (0, C.InPreGamePhase)() || (this.removeOutline(), this.isWithinInteractionRange = !1)
                }, this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(R.Messages.collect), (0, x.playSound)({
                        path: (0, d.default)("sounds/core/collectItem.mp3"),
                        volume: (0, O.getVolume)({
                            volume: .7,
                            type: O.SoundType.soundEffect
                        })
                    })
                }
            }
        }
    }
    var M = D
})), i.register("9oxA4", (function(e, i) {
    t(e.exports, "default", (function() {
        return n
    }));
    var n = e => {
        const t = e.newWidth / e.width;
        return {
            height: e.height * t,
            width: e.width * t
        }
    }
})), i.register("kRzgw", (function(e, n) {
    t(e.exports, "default", (function() {
        return s
    }));
    var s = {
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
            fallSpeedPerSecond: (0, i("r04Cv").default)(100)
        }
    }
})), i.register("f3xPZ", (function(e, n) {
    t(e.exports, "default", (function() {
        return r
    }));
    var s = i("iRjsB"),
        o = i("jSWV1");
    const a = {
        [o.InventoryItemRarity.common]: "light_gray",
        [o.InventoryItemRarity.uncommon]: "green",
        [o.InventoryItemRarity.rare]: "blue",
        [o.InventoryItemRarity.epic]: "purple",
        [o.InventoryItemRarity.legendary]: "yellow"
    };
    var r = e => {
        if (!e) return a.uncommon;
        const t = s.default.worldOptions.itemOptions.find((t => t.id === e));
        if (!t) return a.uncommon;
        var i;
        const n = null !== (i = null == t ? void 0 : t.rarity) && void 0 !== i ? i : o.InventoryItemRarity.common;
        return a[n]
    }
})), i.register("eURCd", (function(e, n) {
    t(e.exports, "GetMaxAmountOfWeapon", (function() {
        return o
    }));
    var s = i("8GQrR");
    const o = e => {
        let t = 0;
        return (0, s.EachInteractiveSlot)({
            callback: i => {
                i.itemId !== e.itemId && "" !== i.itemId && i.itemId || (t += 1)
            }
        }), t
    }
})), i.register("8GQrR", (function(e, n) {
    t(e.exports, "EachInteractiveSlot", (function() {
        return a
    }));
    var s = i("iRjsB"),
        o = i("30KqB");
    const a = e => {
        const t = (0, o.FetchMapOptions)().interactiveItemsSlots,
            i = s.default.me.inventory.interactiveSlotsOrder;
        for (let n = 0; n < t; n++) {
            const t = i[n],
                o = s.default.me.inventory.interactiveSlots.get(`${t}`);
            if (e.callback(o, t)) return
        }
    }
})), i.register("jSE8L", (function(e, n) {
    t(e.exports, "GetMaxAmountOfItem", (function() {
        return a
    }));
    var s = i("6EcnK"),
        o = i("8GQrR");
    const a = e => {
        var t;
        const i = null !== (t = (0, s.default)(e.itemId).maxStackSize) && void 0 !== t ? t : 1;
        let n = 0;
        return (0, o.EachInteractiveSlot)({
            ...e,
            callback: t => {
                t.itemId !== e.itemId && "" !== t.itemId && t.itemId || (n += i)
            }
        }), n
    }
})), i.register("aCad7", (function(e, i) {
    let n;
    t(e.exports, "Messages", (function() {
        return n
    })), (n || (n = {})).collect = "collect"
})), i.register("rUtvU", (function(e, n) {
    t(e.exports, "AddOutline", (function() {
        return o
    }));
    var s = i("gwuwo");
    const o = e => {
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
        (0, s.default)().plugins.get("rexOutlinePipeline").add(e.view, i)
    }
})), i.register("5xt14", (function(e, n) {
    t(e.exports, "RemoveOutline", (function() {
        return o
    }));
    var s = i("gwuwo");
    const o = e => {
        e.view && (0, s.default)().plugins.get("rexOutlinePipeline").remove(e.view)
    }
}));