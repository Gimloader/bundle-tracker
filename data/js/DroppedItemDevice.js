function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _C;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....'), v = b('.....'), w = b('.....'), x = b('.....'), y = b('.....'), z = b('.....'), A = b('.....');
    class B extends j.default {
        constructor(C) {
            if (super(C), (0, f.default)(this, 'hidden', !1), (0, f.default)(this, 'onUpdate', D => {
                    var E;
                    (0, z.isPlatformer)() && (null === (E = this.item) || void 0 === E ? void 0 : E.view) && (this.item.view.y < this.state.fallY && (this.item.view.y += (0, A.default)(x.default.fall.fallSpeedPerSecond) * D / 1000, this.item.view.y >= this.state.fallY && (this.item.view.y = this.state.fallY)), this.y = this.item.view.y);
                }), (0, f.default)(this, 'setInteractionInfo', () => {
                    const D = (0, r.ItemName)(this.options.itemId), E = (0, t.IsWeapon)(this.options.itemId), F = (0, u.IsItem)(this.options.itemId);
                    let G = !0;
                    if (E || F) {
                        var H, I;
                        const J = null !== (I = null === (H = n.default.me.inventory.slots.get(this.options.itemId)) || void 0 === H ? void 0 : H.amount) && void 0 !== I ? I : 0;
                        if (E) {
                            G = J < (0, v.GetMaxAmountOfWeapon)({ itemId: this.options.itemId });
                        } else if (F) {
                            G = J < (0, w.GetMaxAmountOfItem)({ itemId: this.options.itemId });
                        }
                    }
                    if (J) {
                        const K = this.state.amount || this.options.amount;
                        this.interactiveZones.setInfo({
                            message: (0, y.ItemNameWithCount)(J, K),
                            action: x.default.interaction.message.action,
                            allowedToInteract: G,
                            topHeader: G ? void 0 : x.default.interaction.message.fullInventory,
                            topHeaderColor: x.default.interaction.message.fullInventoryColor
                        });
                    }
                }), (0, f.default)(this, 'startShowUpTweens', () => {
                    if (!this.state.visible)
                        return;
                    this.item.view.alpha = 0, this.item.view.displayWidth = 0, this.item.view.displayHeight = 0, (0, z.isPlatformer)() && this.item.view.setOrigin(0.5);
                    const D = this.item.view.x, E = this.item.view.y, F = this.options.originX ? this.options.originX : void 0, G = this.options.originY ? this.options.originY : void 0;
                    if (this.item.view.x = null != F ? F : D, this.item.view.y = null != G ? G : E, this.tweens.add({
                            targets: this.item.view,
                            alpha: 1,
                            displayWidth: 60,
                            displayHeight: 60,
                            x: D,
                            y: E,
                            duration: 350,
                            ease: Phaser.Math.Easing.Back.Out,
                            onComplete: () => {
                                this.startIdleTweens();
                            }
                        }), this.shadow) {
                        this.shadow.view.alpha = 0, this.shadow.view.scaleX = this.shadow.view.scaleY = 0;
                        const H = this.shadow.view.x, I = this.shadow.view.y;
                        this.shadow.view.x += this.item.view.x - D, this.shadow.view.y += this.item.view.y - E, this.tweens.add({
                            targets: this.shadow.view,
                            alpha: 0.3,
                            scaleX: 0.6,
                            scaleY: 0.6,
                            x: H,
                            y: I,
                            duration: 350,
                            ease: Phaser.Math.Easing.Back.Out
                        });
                    }
                }), (0, f.default)(this, 'startHideTweens', () => {
                    this.state.visible && (this.tweens.add({
                        targets: this.item.view,
                        displayWidth: 0,
                        displayHeight: 0,
                        duration: 350,
                        ease: Phaser.Math.Easing.Back.In
                    }), this.shadow && (this.scene.tweens.getTweensOf(this.shadow.view).forEach(D => {
                        D.remove();
                    }), this.tweens.add({
                        targets: this.shadow.view,
                        scaleX: 0,
                        scaleY: 0,
                        duration: 250,
                        ease: Phaser.Math.Easing.Back.In
                    })));
                }), (0, f.default)(this, 'startIdleTweens', () => {
                    (0, z.isPlatformer)() || this.state.visible && (this.item.view.alpha = 1, this.tweens.add({
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
                }), (0, f.default)(this, 'onStateChange', D => {
                    'amount' === D && this.setInteractionInfo(), 'alreadyCollected' === D && (this.prevState.alreadyCollected || !this.state.alreadyCollected || this.hidden || (this.hidden = !0, this.startHideTweens()));
                }), (0, f.default)(this, 'addOutline', () => {
                    this.state.visible && (0, l.AddOutline)({ view: this.item.view });
                }), (0, f.default)(this, 'removeOutline', () => {
                    this.state.visible && (0, m.RemoveOutline)({ view: this.item.view });
                }), (0, z.isPlatformer)() ? this.cull.ignoreCulling() : this.boundingBox.setHardcoded({
                    width: 75,
                    height: 125,
                    y: -112.5
                }), !this.state.visible)
                return;
            if (this.state.alreadyCollected)
                return;
            (0, z.isPlatformer)() || (this.shadow = this.parts.add.sprite({
                ...k.ShadowAsset,
                layerId: g.default.DevicesUnderCharacters
            }));
            const D = n.default.worldOptions.itemOptions.find(E => E.id === this.options.itemId);
            if (D) {
                const E = D.id, F = D.previewImage, G = (0, i.default)(E), H = (0, h.default)({
                        height: G.height,
                        width: G.width,
                        newWidth: x.default.itemWidth
                    });
                (0, s.default)({
                    key: E,
                    url: F,
                    onLoad: () => {
                        this.isDestroyed || (this.item = this.parts.add.sprite({
                            imageId: E,
                            imageUrl: F,
                            layerId: g.default.DepthSortedCharactersAndDevices,
                            y: (0, z.isPlatformer)() ? 0 : -65,
                            depthChange: 75,
                            displayWidth: H.width,
                            displayHeight: H.height
                        }), this.interactiveZones.add.circle({
                            x: 0,
                            y: 0,
                            r: x.default.interaction.radius
                        }), this.setInteractionInfo(), this.interactiveZones.onInteractiveCb = () => {
                            this.setInteractionInfo(), this.addOutline();
                        }, this.interactiveZones.onNonInteractive = () => {
                            this.removeOutline();
                        }, this.interactiveZones.onInteraction = () => {
                            this.state.canBeCollected && !this.state.alreadyCollected && (this.sendToServerDevice('interacted'), (0, o.playSound)({
                                path: (0, p.default)('sounds/core/collectItem.mp3'),
                                volume: (0, q.getVolume)({
                                    volume: 0.7,
                                    type: q.SoundType.soundEffect
                                })
                            }));
                        }, this.interactiveZones.setCanInteractThroughColliders(!0), this.state.canBeCollected ? this.startIdleTweens() : this.startShowUpTweens());
                    }
                });
            }
        }
    }
    var _C = B;
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = f => {
        const g = f.newWidth / f.width;
        return {
            height: f.height * g,
            width: f.width * g
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'ShadowAsset', function () {
        return _e;
    });
    const _e = {
        imageId: 'item_shadow',
        imageUrl: (0, b('.....').default)('devices/dropped_item/item-shadow.png')
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'AddOutline', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        if (!g.view || !g.view.active)
            return;
        const h = { thickness: 2 }, i = g.options ? {
                ...h,
                ...g.options
            } : { ...h };
        (0, e.default)().plugins.get('rexOutlinePipeline').add(g.view, i);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'RemoveOutline', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        g.view && (0, e.default)().plugins.get('rexOutlinePipeline').remove(g.view);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'GetMaxAmountOfWeapon', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        let h = 0;
        return (0, e.EachInteractiveSlot)({
            callback: i => {
                i.itemId !== g.itemId && '' !== i.itemId && i.itemId || (h += 1);
            }
        }), h;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'EachInteractiveSlot', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = h => {
        const i = (0, f.FetchMapOptions)().interactiveItemsSlots, j = e.default.me.inventory.interactiveSlotsOrder;
        for (let k = 0; k < i; k++) {
            const l = j[k], m = e.default.me.inventory.interactiveSlots.get(`${ l }`);
            if (h.callback(m, l))
                return;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'GetMaxAmountOfItem', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = h => {
        var i;
        const j = null !== (i = (0, e.default)(h.itemId).maxStackSize) && void 0 !== i ? i : 1;
        let k = 0;
        return (0, f.EachInteractiveSlot)({
            ...h,
            callback: l => {
                l.itemId !== h.itemId && '' !== l.itemId && l.itemId || (k += j);
            }
        }), k;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = {
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
        fall: { fallSpeedPerSecond: (0, b('.....').default)(100) }
    };
});