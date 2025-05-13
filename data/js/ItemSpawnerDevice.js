function a(b) {
    return b && b.__esModule ? b.default : b;
}

function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return _D;
    });
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....'),
        v = c('.....'),
        w = c('.....'),
        x = c('.....'),
        y = c('.....'),
        z = c('.....'),
        A = c('.....'),
        B = c('.....');
    class C extends k.default {
        constructor(D) {
            super(D), (0, g.default)(this, 'hasLoaded', !1), (0, g.default)(this, 'isShowing', !0), (0, g.default)(this, 'isWithinInteractionRange', !1), (0, g.default)(this, 'itemDimensions', {
                width: 0,
                height: 0
            }), (0, g.default)(this, 'setInteractionInfo', () => {
                const E = (0, r.ItemName)(this.options.itemId),
                    F = (0, s.IsWeapon)(this.options.itemId),
                    G = (0, t.IsItem)(this.options.itemId);
                let H = !0;
                if (F || G) {
                    var I, J;
                    const K = null !== (J = null === (I = h.default.me.inventory.slots.get(this.options.itemId)) || void 0 === I ? void 0 : I.amount) && void 0 !== J ? J : 0;
                    if (F) {
                        H = K < (0, u.GetMaxAmountOfWeapon)({
                            itemId: this.options.itemId
                        });
                    } else if (G) {
                        H = K < (0, v.GetMaxAmountOfItem)({
                            itemId: this.options.itemId
                        });
                    }
                }
                if (K) {
                    const L = this.options.itemAmount;
                    this.interactiveZones.setInfo({
                        message: (0, q.ItemNameWithCount)(K, L),
                        action: l.default.interaction.message.action,
                        allowedToInteract: H,
                        topHeader: H ? void 0 : l.default.interaction.message.fullInventory,
                        topHeaderColor: l.default.interaction.message.fullInventoryColor
                    });
                }
            }), (0, g.default)(this, 'addOutline', () => {
                this.hasLoaded && (0, z.AddOutline)({
                    view: this.itemImage.view
                });
            }), (0, g.default)(this, 'removeOutline', () => {
                this.hasLoaded && (0, A.RemoveOutline)({
                    view: this.itemImage.view
                });
            }), (0, g.default)(this, 'show', () => {
                this.isShowing = !0, this.tweens.add({
                    targets: this.itemImage.view,
                    displayWidth: this.itemDimensions.width,
                    displayHeight: this.itemDimensions.height,
                    duration: 250,
                    ease: a(m).Math.Easing.Back.In
                }), this.interactiveZones.setForceDisabled(!1);
            }), (0, g.default)(this, 'hide', () => {
                this.isShowing = !1, this.tweens.add({
                    targets: this.itemImage.view,
                    displayWidth: 0,
                    displayHeight: 0,
                    duration: 250,
                    ease: a(m).Math.Easing.Back.Out
                }), this.interactiveZones.setForceDisabled(!0), this.isWithinInteractionRange && this.removeOutline();
            }), (0, g.default)(this, 'onUpdate', () => {
                if (!this.hasLoaded)
                    return;
                var E;
                if ((0, p.GetServerGameTimeWithCompensation)() >= (null !== (E = this.state.itemAvailableTimestamp) && void 0 !== E ? E : 0)) {
                    if (this.isShowing)
                        return;
                    this.show();
                } else {
                    if (!this.isShowing)
                        return;
                    this.hide();
                }
            });
            const E = (0, i.default)(`devices/models/baseModel/bases/${ (0, o.default)(this.options.itemId) }.png`);
            this.base = this.parts.add.sprite({
                imageId: E,
                imageUrl: E,
                layerId: n.default.DevicesUnderCharacters
            }), this.base.view.setScale(0.15);
            const F = h.default.worldOptions.itemOptions.find(G => G.id === this.options.itemId);
            if (F) {
                const G = F.previewImage;
                this.itemImage = this.parts.add.sprite({
                    imageId: G,
                    imageUrl: G,
                    layerId: n.default.DepthSortedCharactersAndDevices,
                    onReady: H => {
                        this.itemDimensions = (0, j.default)({
                            height: H.view.height,
                            width: H.view.width,
                            newWidth: l.default.itemWidth
                        }), H.view.setDisplaySize(this.itemDimensions.width, this.itemDimensions.height), this.hasLoaded = !0;
                    }
                }), this.itemImage.view.setY(this.itemImage.view.y - 50), this.tweens.add({
                    targets: this.itemImage.view,
                    y: this.itemImage.view.y - 15,
                    duration: 1200,
                    yoyo: !0,
                    repeat: -1,
                    ease: a(m).Math.Easing.Sine.InOut
                }), this.interactiveZones.add.circle({
                    x: 0,
                    y: 0,
                    r: 100
                }), this.setInteractionInfo(), this.interactiveZones.onInteractiveCb = () => {
                    (0, B.InPreGamePhase)() || (this.isWithinInteractionRange = !0, this.setInteractionInfo(), this.addOutline());
                }, this.interactiveZones.onNonInteractive = () => {
                    (0, B.InPreGamePhase)() || (this.removeOutline(), this.isWithinInteractionRange = !1);
                }, this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(y.Messages.collect), (0, w.playSound)({
                        path: (0, i.default)('sounds/core/collectItem.mp3'),
                        volume: (0, x.getVolume)({
                            volume: 0.7,
                            type: x.SoundType.soundEffect
                        })
                    });
                };
            }
        }
    }
    var _D = C;
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = g => {
        const h = g.newWidth / g.width;
        return {
            height: g.height * h,
            width: g.width * h
        };
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        itemWidth: 60,
        floatingHeight: {
            topDown: 112.5,
            platformer: 30
        },
        interaction: {
            radius: 50,
            message: {
                action: 'to collect',
                fullInventory: 'Inventory Full',
                fullInventoryColor: '#ffcdd2'
            }
        },
        fall: {
            fallSpeedPerSecond: (0, c('.....').default)(100)
        }
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    const h = {
        [g.InventoryItemRarity.common]: 'light_gray',
        [g.InventoryItemRarity.uncommon]: 'green',
        [g.InventoryItemRarity.rare]: 'blue',
        [g.InventoryItemRarity.epic]: 'purple',
        [g.InventoryItemRarity.legendary]: 'yellow'
    };
    var _i = j => {
        if (!j)
            return h.uncommon;
        const k = f.default.worldOptions.itemOptions.find(l => l.id === j);
        if (!k)
            return h.uncommon;
        var l;
        const m = null !== (l = null == k ? void 0 : k.rarity) && void 0 !== l ? l : g.InventoryItemRarity.common;
        return h[m];
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'GetMaxAmountOfWeapon', function() {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        let i = 0;
        return (0, f.EachInteractiveSlot)({
            callback: j => {
                j.itemId !== h.itemId && '' !== j.itemId && j.itemId || (i += 1);
            }
        }), i;
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'EachInteractiveSlot', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = i => {
        const j = (0, g.FetchMapOptions)().interactiveItemsSlots,
            k = f.default.me.inventory.interactiveSlotsOrder;
        for (let l = 0; l < j; l++) {
            const m = k[l],
                n = f.default.me.inventory.interactiveSlots.get(`${ m }`);
            if (i.callback(n, m))
                return;
        }
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'GetMaxAmountOfItem', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = i => {
        var j;
        const k = null !== (j = (0, f.default)(i.itemId).maxStackSize) && void 0 !== j ? j : 1;
        let l = 0;
        return (0, g.EachInteractiveSlot)({
            ...i,
            callback: m => {
                m.itemId !== i.itemId && '' !== m.itemId && m.itemId || (l += k);
            }
        }), l;
    };
}), c.register('.....', function(d, e) {
    let f;
    b(d.exports, 'Messages', function() {
        return f;
    }), (f || (f = {})).collect = 'collect';
}), c.register('.....', function(d, e) {
    b(d.exports, 'AddOutline', function() {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        if (!h.view || !h.view.active)
            return;
        const i = {
                thickness: 2
            },
            j = h.options ? {
                ...i,
                ...h.options
            } : {
                ...i
            };
        (0, f.default)().plugins.get('rexOutlinePipeline').add(h.view, j);
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'RemoveOutline', function() {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        h.view && (0, f.default)().plugins.get('rexOutlinePipeline').remove(h.view);
    };
});