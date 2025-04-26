function a(a, b, C, D) {
    Object.defineProperty(a, b, {
        get: C,
        set: D,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('lacHU', function(C, D) {
    var c;
    c = C.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(C.exports, 'default', function() {
        return A;
    });
    var d = b('UM8oI'),
        e = b('cMsWT'),
        f = b('VkIHd0'),
        g = b('Mr5c3'),
        h = b('sgILU'),
        i = b('WCnVH'),
        j = b('95CV8'),
        k = b('HBzWf'),
        l = b('7Sbqr'),
        m = b('OlpXx'),
        n = b('JJQ0+'),
        o = b('Ena4B'),
        p = b('bBQb9'),
        q = b('y7G4G'),
        r = b('im/Hv'),
        s = b('C95/2'),
        t = b('6oJNt'),
        u = b('ssApT'),
        v = b('Xo6NF'),
        w = b('FsWdw'),
        x = b('HMNV0'),
        y = b('qCS7H');
    class z extends h.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'hidden', !1), (0, d.default)(this, 'onUpdate', a => {
                    var A;
                    (0, x.isPlatformer)() && (null === (A = this.item) || void 0 === A ? void 0 : A.view) && (this.item.view.y < this.state.fallY && (this.item.view.y += (0, y.default)(v.default.fall.fallSpeedPerSecond) * a / 1000, this.item.view.y >= this.state.fallY && (this.item.view.y = this.state.fallY)), this.y = this.item.view.y);
                }), (0, d.default)(this, 'setInteractionInfo', () => {
                    const A = (0, p.ItemName)(this.options.itemId),
                        B = (0, r.IsWeapon)(this.options.itemId),
                        C = (0, s.IsItem)(this.options.itemId);
                    let D = !0;
                    if (B || C) {
                        var E, F;
                        const G = null !== (F = null === (E = l.default.me.inventory.slots.get(this.options.itemId)) || void 0 === E ? void 0 : E.amount) && void 0 !== F ? F : 0;
                        if (B) {
                            D = G < (0, t.GetMaxAmountOfWeapon)({
                                itemId: this.options.itemId
                            });
                        } else if (C) {
                            D = G < (0, u.GetMaxAmountOfItem)({
                                itemId: this.options.itemId
                            });
                        }
                    }
                    if (A) {
                        const E = this.state.amount || this.options.amount;
                        this.interactiveZones.setInfo({
                            message: (0, w.ItemNameWithCount)(A, E),
                            action: v.default.interaction.message.action,
                            allowedToInteract: D,
                            topHeader: D ? void 0 : v.default.interaction.message.fullInventory,
                            topHeaderColor: v.default.interaction.message.fullInventoryColor
                        });
                    }
                }), (0, d.default)(this, 'startShowUpTweens', () => {
                    if (!this.state.visible)
                        return;
                    this.item.view.alpha = 0, this.item.view.displayWidth = 0, this.item.view.displayHeight = 0, (0, x.isPlatformer)() && this.item.view.setOrigin(0.5);
                    const A = this.item.view.x,
                        B = this.item.view.y;
                    var C, D;
                    if (this.item.view.x = null !== (C = this.options.originX) && void 0 !== C ? C : A, this.item.view.y = null !== (D = this.options.originY) && void 0 !== D ? D : B, this.tweens.add({
                            targets: this.item.view,
                            alpha: 1,
                            displayWidth: 60,
                            displayHeight: 60,
                            x: A,
                            y: B,
                            duration: 350,
                            ease: Phaser.Math.Easing.Back.Out,
                            onComplete: () => {
                                this.startIdleTweens();
                            }
                        }), this.shadow) {
                        this.shadow.view.alpha = 0, this.shadow.view.scaleX = this.shadow.view.scaleY = 0;
                        const E = this.shadow.view.x,
                            F = this.shadow.view.y;
                        this.shadow.view.x += this.item.view.x - A, this.shadow.view.y += this.item.view.y - B, this.tweens.add({
                            targets: this.shadow.view,
                            alpha: 0.3,
                            scaleX: 0.6,
                            scaleY: 0.6,
                            x: E,
                            y: F,
                            duration: 350,
                            ease: Phaser.Math.Easing.Back.Out
                        });
                    }
                }), (0, d.default)(this, 'startHideTweens', () => {
                    this.state.visible && (this.tweens.add({
                        targets: this.item.view,
                        displayWidth: 0,
                        displayHeight: 0,
                        duration: 350,
                        ease: Phaser.Math.Easing.Back.In
                    }), this.shadow && (this.scene.tweens.getTweensOf(this.shadow.view).forEach(a => {
                        a.remove();
                    }), this.tweens.add({
                        targets: this.shadow.view,
                        scaleX: 0,
                        scaleY: 0,
                        duration: 250,
                        ease: Phaser.Math.Easing.Back.In
                    })));
                }), (0, d.default)(this, 'startIdleTweens', () => {
                    (0, x.isPlatformer)() || this.state.visible && (this.item.view.alpha = 1, this.tweens.add({
                        targets: this.item.view,
                        y: this.item.view.y - 15,
                        alpha: 1,
                        duration: 1200,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    }), this.shadow && (this.shadow.view.alpha = 0.3, this.shadow.view.setScale(0.6), this.tweens.add({
                        targets: this.shadow.view,
                        scaleX: 0.5,
                        scaleY: 0.5,
                        alpha: 0.2,
                        duration: 1200,
                        yoyo: !0,
                        repeat: -1,
                        ease: Phaser.Math.Easing.Sine.InOut
                    })));
                }), (0, d.default)(this, 'onStateChange', a => {
                    'amount' === a && this.setInteractionInfo(), 'alreadyCollected' === a && (this.prevState.alreadyCollected || !this.state.alreadyCollected || this.hidden || (this.hidden = !0, this.startHideTweens()));
                }), (0, d.default)(this, 'addOutline', () => {
                    this.state.visible && (0, j.AddOutline)({
                        view: this.item.view
                    });
                }), (0, d.default)(this, 'removeOutline', () => {
                    this.state.visible && (0, k.RemoveOutline)({
                        view: this.item.view
                    });
                }), (0, x.isPlatformer)() ? this.cull.ignoreCulling() : this.boundingBox.setHardcoded({
                    width: 75,
                    height: 125,
                    y: -112.5
                }), !this.state.visible)
                return;
            if (this.state.alreadyCollected)
                return;
            (0, x.isPlatformer)() || (this.shadow = this.parts.add.sprite({
                ...i.ShadowAsset,
                layerId: e.default.DevicesUnderCharacters
            }));
            const A = l.default.worldOptions.itemOptions.find(a => a.id === this.options.itemId);
            if (A) {
                const B = A.id,
                    C = A.previewImage,
                    D = (0, g.default)(B),
                    E = (0, f.default)({
                        height: D.height,
                        width: D.width,
                        newWidth: v.default.itemWidth
                    });
                (0, q.default)({
                    key: B,
                    url: C,
                    onLoad: () => {
                        this.isDestroyed || (this.item = this.parts.add.sprite({
                            imageId: B,
                            imageUrl: C,
                            layerId: e.default.DepthSortedCharactersAndDevices,
                            y: (0, x.isPlatformer)() ? 0 : -65,
                            depthChange: 75,
                            displayWidth: E.width,
                            displayHeight: E.height
                        }), this.interactiveZones.add.circle({
                            x: 0,
                            y: 0,
                            r: v.default.interaction.radius
                        }), this.setInteractionInfo(), this.interactiveZones.onInteractiveCb = () => {
                            this.setInteractionInfo(), this.addOutline();
                        }, this.interactiveZones.onNonInteractive = () => {
                            this.removeOutline();
                        }, this.interactiveZones.onInteraction = () => {
                            this.state.canBeCollected && !this.state.alreadyCollected && (this.sendToServerDevice('interacted'), (0, m.playSound)({
                                path: (0, n.default)('sounds/core/collectItem.mp3'),
                                volume: (0, o.getVolume)({
                                    volume: 0.7,
                                    type: o.SoundType.soundEffect
                                })
                            }));
                        }, this.interactiveZones.setCanInteractThroughColliders(!0), this.state.canBeCollected ? this.startIdleTweens() : this.startShowUpTweens());
                    }
                });
            }
        }
    }
    var A = B;
}), b.register('VkIHd0', function(b, f) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = a => {
        const d = a.newWidth / a.width;
        return {
            height: a.height * d,
            width: a.width * d
        };
    };
}), b.register('WCnVH', function(f, h) {
    a(f.exports, 'ShadowAsset', function() {
        return c;
    });
    const c = {
        imageId: 'item_shadow',
        imageUrl: (0, b('JJQ0+').default)('devices/dropped_item/item-shadow.png')
    };
}), b.register('95CV8', function(f, h) {
    a(f.exports, 'AddOutline', function() {
        return d;
    });
    var c = b('dAmf5');
    const d = a => {
        if (!a.view || !a.view.active)
            return;
        const e = {
                thickness: 2
            },
            f = a.options ? {
                ...e,
                ...a.options
            } : {
                ...e
            };
        (0, c.default)().plugins.get('rexOutlinePipeline').add(a.view, f);
    };
}), b.register('HBzWf', function(g, h) {
    a(g.exports, 'RemoveOutline', function() {
        return d;
    });
    var c = b('dAmf5');
    const d = a => {
        a.view && (0, c.default)().plugins.get('rexOutlinePipeline').remove(a.view);
    };
}), b.register('6oJNt', function(g, h) {
    a(g.exports, 'GetMaxAmountOfWeapon', function() {
        return d;
    });
    var c = b('OkFOu');
    const d = a => {
        let e = 0;
        return (0, c.EachInteractiveSlot)({
            callback: g => {
                g.itemId !== a.itemId && '' !== g.itemId && g.itemId || (e += 1);
            }
        }), e;
    };
}), b.register('OkFOu', function(g, h) {
    a(g.exports, 'EachInteractiveSlot', function() {
        return e;
    });
    var c = b('7Sbqr'),
        d = b('lRhCY');
    const e = a => {
        const f = (0, d.FetchMapOptions)().interactiveItemsSlots,
            g = c.default.me.inventory.interactiveSlotsOrder;
        for (let h = 0; h < f; h++) {
            const i = g[h],
                j = c.default.me.inventory.interactiveSlots.get(`${ i }`);
            if (a.callback(j, i))
                return;
        }
    };
}), b.register('ssApT', function(g, h) {
    a(g.exports, 'GetMaxAmountOfItem', function() {
        return e;
    });
    var c = b('0x6bL'),
        d = b('OkFOu');
    const e = a => {
        var f;
        const g = null !== (f = (0, c.default)(a.itemId).maxStackSize) && void 0 !== f ? f : 1;
        let h = 0;
        return (0, d.EachInteractiveSlot)({
            ...a,
            callback: f => {
                f.itemId !== a.itemId && '' !== f.itemId && f.itemId || (h += g);
            }
        }), h;
    };
}), b.register('Xo6NF', function(i, s) {
    a(i.exports, 'default', function() {
        return c;
    });
    var c = {
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
            fallSpeedPerSecond: (0, b('N50Eu').default)(100)
        }
    };
});