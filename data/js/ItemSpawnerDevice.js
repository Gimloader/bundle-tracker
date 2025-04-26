function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, E) {
    Object.defineProperty(a, b, {
        get: c,
        set: E,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('TEI1Y', function(E, F) {
    var d;
    d = E.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(E.exports, 'default', function() {
        return B;
    });
    var e = c('UM8oI'),
        f = c('7Sbqr'),
        g = c('JJQ0+'),
        h = c('VkIHd0'),
        i = c('sgILU'),
        j = c('Xo6NF'),
        k = c('kneek'),
        l = c('cMsWT'),
        m = c('PEeqg'),
        n = c('tYqUt'),
        o = c('FsWdw'),
        p = c('bBQb9'),
        q = c('im/Hv'),
        r = c('C95/2'),
        s = c('6oJNt'),
        t = c('ssApT'),
        u = c('OlpXx'),
        v = c('Ena4B'),
        w = c('9SxGc'),
        x = c('95CV8'),
        y = c('HBzWf'),
        z = c('5Ux1a');
    class A extends i.default {
        constructor(b) {
            super(b), (0, e.default)(this, 'hasLoaded', !1), (0, e.default)(this, 'isShowing', !0), (0, e.default)(this, 'isWithinInteractionRange', !1), (0, e.default)(this, 'itemDimensions', {
                width: 0,
                height: 0
            }), (0, e.default)(this, 'setInteractionInfo', () => {
                const B = (0, p.ItemName)(this.options.itemId),
                    C = (0, q.IsWeapon)(this.options.itemId),
                    D = (0, r.IsItem)(this.options.itemId);
                let E = !0;
                if (C || D) {
                    var F, G;
                    const H = null !== (G = null === (F = f.default.me.inventory.slots.get(this.options.itemId)) || void 0 === F ? void 0 : F.amount) && void 0 !== G ? G : 0;
                    if (C) {
                        E = H < (0, s.GetMaxAmountOfWeapon)({
                            itemId: this.options.itemId
                        });
                    } else if (D) {
                        E = H < (0, t.GetMaxAmountOfItem)({
                            itemId: this.options.itemId
                        });
                    }
                }
                if (B) {
                    const F = this.options.itemAmount;
                    this.interactiveZones.setInfo({
                        message: (0, o.ItemNameWithCount)(B, F),
                        action: j.default.interaction.message.action,
                        allowedToInteract: E,
                        topHeader: E ? void 0 : j.default.interaction.message.fullInventory,
                        topHeaderColor: j.default.interaction.message.fullInventoryColor
                    });
                }
            }), (0, e.default)(this, 'addOutline', () => {
                this.hasLoaded && (0, x.AddOutline)({
                    view: this.itemImage.view
                });
            }), (0, e.default)(this, 'removeOutline', () => {
                this.hasLoaded && (0, y.RemoveOutline)({
                    view: this.itemImage.view
                });
            }), (0, e.default)(this, 'show', () => {
                this.isShowing = !0, this.tweens.add({
                    targets: this.itemImage.view,
                    displayWidth: this.itemDimensions.width,
                    displayHeight: this.itemDimensions.height,
                    duration: 250,
                    ease: a(k).Math.Easing.Back.In
                }), this.interactiveZones.setForceDisabled(!1);
            }), (0, e.default)(this, 'hide', () => {
                this.isShowing = !1, this.tweens.add({
                    targets: this.itemImage.view,
                    displayWidth: 0,
                    displayHeight: 0,
                    duration: 250,
                    ease: a(k).Math.Easing.Back.Out
                }), this.interactiveZones.setForceDisabled(!0), this.isWithinInteractionRange && this.removeOutline();
            }), (0, e.default)(this, 'onUpdate', () => {
                if (!this.hasLoaded)
                    return;
                var B;
                if ((0, n.GetServerGameTimeWithCompensation)() >= (null !== (B = this.state.itemAvailableTimestamp) && void 0 !== B ? B : 0)) {
                    if (this.isShowing)
                        return;
                    this.show();
                } else {
                    if (!this.isShowing)
                        return;
                    this.hide();
                }
            });
            const B = (0, g.default)(`devices/models/baseModel/bases/${ (0, m.default)(this.options.itemId) }.png`);
            this.base = this.parts.add.sprite({
                imageId: B,
                imageUrl: B,
                layerId: l.default.DevicesUnderCharacters
            }), this.base.view.setScale(0.15);
            const C = f.default.worldOptions.itemOptions.find(a => a.id === this.options.itemId);
            if (C) {
                const D = C.previewImage;
                this.itemImage = this.parts.add.sprite({
                    imageId: D,
                    imageUrl: D,
                    layerId: l.default.DepthSortedCharactersAndDevices,
                    onReady: a => {
                        this.itemDimensions = (0, h.default)({
                            height: a.view.height,
                            width: a.view.width,
                            newWidth: j.default.itemWidth
                        }), a.view.setDisplaySize(this.itemDimensions.width, this.itemDimensions.height), this.hasLoaded = !0;
                    }
                }), this.itemImage.view.setY(this.itemImage.view.y - 50), this.tweens.add({
                    targets: this.itemImage.view,
                    y: this.itemImage.view.y - 15,
                    duration: 1200,
                    yoyo: !0,
                    repeat: -1,
                    ease: a(k).Math.Easing.Sine.InOut
                }), this.interactiveZones.add.circle({
                    x: 0,
                    y: 0,
                    r: 100
                }), this.setInteractionInfo(), this.interactiveZones.onInteractiveCb = () => {
                    (0, z.InPreGamePhase)() || (this.isWithinInteractionRange = !0, this.setInteractionInfo(), this.addOutline());
                }, this.interactiveZones.onNonInteractive = () => {
                    (0, z.InPreGamePhase)() || (this.removeOutline(), this.isWithinInteractionRange = !1);
                }, this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(w.Messages.collect), (0, u.playSound)({
                        path: (0, g.default)('sounds/core/collectItem.mp3'),
                        volume: (0, v.getVolume)({
                            volume: 0.7,
                            type: v.SoundType.soundEffect
                        })
                    });
                };
            }
        }
    }
    var B = C;
}), c.register('VkIHd0', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = a => {
        const e = a.newWidth / a.width;
        return {
            height: a.height * e,
            width: a.width * e
        };
    };
}), c.register('Xo6NF', function(a, j) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = {
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
            fallSpeedPerSecond: (0, c('N50Eu').default)(100)
        }
    };
}), c.register('PEeqg', function(a, j) {
    b(a.exports, 'default', function() {
        return g;
    });
    var d = c('7Sbqr'),
        e = c('idESs');
    const f = {
        [e.InventoryItemRarity.common]: 'light_gray',
        [e.InventoryItemRarity.uncommon]: 'green',
        [e.InventoryItemRarity.rare]: 'blue',
        [e.InventoryItemRarity.epic]: 'purple',
        [e.InventoryItemRarity.legendary]: 'yellow'
    };
    var g = a => {
        if (!a)
            return f.uncommon;
        const h = d.default.worldOptions.itemOptions.find(h => h.id === a);
        if (!h)
            return f.uncommon;
        var i;
        const j = null !== (i = null == h ? void 0 : h.rarity) && void 0 !== i ? i : e.InventoryItemRarity.common;
        return f[j];
    };
}), c.register('6oJNt', function(a, i) {
    b(a.exports, 'GetMaxAmountOfWeapon', function() {
        return e;
    });
    var d = c('OkFOu');
    const e = a => {
        let f = 0;
        return (0, d.EachInteractiveSlot)({
            callback: c => {
                c.itemId !== a.itemId && '' !== c.itemId && c.itemId || (f += 1);
            }
        }), f;
    };
}), c.register('OkFOu', function(a, i) {
    b(a.exports, 'EachInteractiveSlot', function() {
        return f;
    });
    var d = c('7Sbqr'),
        e = c('lRhCY');
    const f = a => {
        const g = (0, e.FetchMapOptions)().interactiveItemsSlots,
            h = d.default.me.inventory.interactiveSlotsOrder;
        for (let i = 0; i < g; i++) {
            const j = h[i],
                k = d.default.me.inventory.interactiveSlots.get(`${ j }`);
            if (a.callback(k, j))
                return;
        }
    };
}), c.register('ssApT', function(a, i) {
    b(a.exports, 'GetMaxAmountOfItem', function() {
        return f;
    });
    var d = c('0x6bL'),
        e = c('OkFOu');
    const f = a => {
        var g;
        const h = null !== (g = (0, d.default)(a.itemId).maxStackSize) && void 0 !== g ? g : 1;
        let i = 0;
        return (0, e.EachInteractiveSlot)({
            ...a,
            callback: g => {
                g.itemId !== a.itemId && '' !== g.itemId && g.itemId || (i += h);
            }
        }), i;
    };
}), c.register('9SxGc', function(a, c) {
    let d;
    b(a.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).collect = 'collect';
}), c.register('95CV8', function(a, n) {
    b(a.exports, 'AddOutline', function() {
        return e;
    });
    var d = c('dAmf5');
    const e = a => {
        if (!a.view || !a.view.active)
            return;
        const f = {
                thickness: 2
            },
            g = a.options ? {
                ...f,
                ...a.options
            } : {
                ...f
            };
        (0, d.default)().plugins.get('rexOutlinePipeline').add(a.view, g);
    };
}), c.register('HBzWf', function(a, n) {
    b(a.exports, 'RemoveOutline', function() {
        return e;
    });
    var d = c('dAmf5');
    const e = a => {
        a.view && (0, d.default)().plugins.get('rexOutlinePipeline').remove(a.view);
    };
});