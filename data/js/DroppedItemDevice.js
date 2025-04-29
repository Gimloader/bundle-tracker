function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('niIXs', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _C;
    });
    var f = b('s/YA9'),
        g = b('GIe9o'),
        h = b('ktWA02'),
        i = b('+7143'),
        j = b('ltxDW'),
        k = b('KpPOJ'),
        l = b('vRyCf'),
        m = b('39l0B'),
        n = b('fI6of'),
        o = b('3jaMj'),
        p = b('UaUBz0'),
        q = b('CbU7r'),
        r = b('G0Kso'),
        s = b('k/JOU'),
        t = b('5E/NY'),
        u = b('sErv5'),
        v = b('ejBxU'),
        w = b('QajNs'),
        x = b('KxOV+'),
        y = b('ugFC6'),
        z = b('UCu0V'),
        A = b('Cw8ur');
    class B extends j.default {
        constructor(C) {
            if (super(C), (0, f.default)(this, 'hidden', !1), (0, f.default)(this, 'onUpdate', C => {
                    var D;
                    (0, z.isPlatformer)() && (null === (D = this.item) || void 0 === D ? void 0 : D.view) && (this.item.view.y < this.state.fallY && (this.item.view.y += (0, A.default)(x.default.fall.fallSpeedPerSecond) * C / 1000, this.item.view.y >= this.state.fallY && (this.item.view.y = this.state.fallY)), this.y = this.item.view.y);
                }), (0, f.default)(this, 'setInteractionInfo', () => {
                    const D = (0, r.ItemName)(this.options.itemId),
                        E = (0, t.IsWeapon)(this.options.itemId),
                        F = (0, u.IsItem)(this.options.itemId);
                    let G = !0;
                    if (E || F) {
                        var H, I;
                        const J = null !== (I = null === (H = n.default.me.inventory.slots.get(this.options.itemId)) || void 0 === H ? void 0 : H.amount) && void 0 !== I ? I : 0;
                        if (E) {
                            G = J < (0, v.GetMaxAmountOfWeapon)({
                                itemId: this.options.itemId
                            });
                        } else if (F) {
                            G = J < (0, w.GetMaxAmountOfItem)({
                                itemId: this.options.itemId
                            });
                        }
                    }
                    if (D) {
                        const H = this.state.amount || this.options.amount;
                        this.interactiveZones.setInfo({
                            message: (0, y.ItemNameWithCount)(D, H),
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
                    const D = this.item.view.x,
                        E = this.item.view.y,
                        F = this.options.originX ? this.options.originX : void 0,
                        G = this.options.originY ? this.options.originY : void 0;
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
                        const H = this.shadow.view.x,
                            I = this.shadow.view.y;
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
                    }), this.shadow && (this.scene.tweens.getTweensOf(this.shadow.view).forEach(C => {
                        C.remove();
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
                }), (0, f.default)(this, 'onStateChange', C => {
                    'amount' === C && this.setInteractionInfo(), 'alreadyCollected' === C && (this.prevState.alreadyCollected || !this.state.alreadyCollected || this.hidden || (this.hidden = !0, this.startHideTweens()));
                }), (0, f.default)(this, 'addOutline', () => {
                    this.state.visible && (0, l.AddOutline)({
                        view: this.item.view
                    });
                }), (0, f.default)(this, 'removeOutline', () => {
                    this.state.visible && (0, m.RemoveOutline)({
                        view: this.item.view
                    });
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
            const D = n.default.worldOptions.itemOptions.find(C => C.id === this.options.itemId);
            if (D) {
                const E = D.id,
                    F = D.previewImage,
                    G = (0, i.default)(E),
                    H = (0, h.default)({
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
}), b.register('ktWA02', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = a => {
        const f = a.newWidth / a.width;
        return {
            height: a.height * f,
            width: a.width * f
        };
    };
}), b.register('KpPOJ', function(c, d) {
    a(c.exports, 'ShadowAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'item_shadow',
        imageUrl: (0, b('UaUBz0').default)('devices/dropped_item/item-shadow.png')
    };
}), b.register('vRyCf', function(c, d) {
    a(c.exports, 'AddOutline', function() {
        return _f;
    });
    var e = b('heTaO');
    const _f = a => {
        if (!a.view || !a.view.active)
            return;
        const g = {
                thickness: 2
            },
            h = a.options ? {
                ...g,
                ...a.options
            } : {
                ...g
            };
        (0, e.default)().plugins.get('rexOutlinePipeline').add(a.view, h);
    };
}), b.register('39l0B', function(c, d) {
    a(c.exports, 'RemoveOutline', function() {
        return _f;
    });
    var e = b('heTaO');
    const _f = a => {
        a.view && (0, e.default)().plugins.get('rexOutlinePipeline').remove(a.view);
    };
}), b.register('ejBxU', function(c, d) {
    a(c.exports, 'GetMaxAmountOfWeapon', function() {
        return _f;
    });
    var e = b('hzFRp');
    const _f = a => {
        let g = 0;
        return (0, e.EachInteractiveSlot)({
            callback: c => {
                c.itemId !== a.itemId && '' !== c.itemId && c.itemId || (g += 1);
            }
        }), g;
    };
}), b.register('hzFRp', function(c, d) {
    a(c.exports, 'EachInteractiveSlot', function() {
        return _g;
    });
    var e = b('fI6of'),
        f = b('ITS8K');
    const _g = a => {
        const h = (0, f.FetchMapOptions)().interactiveItemsSlots,
            i = e.default.me.inventory.interactiveSlotsOrder;
        for (let j = 0; j < h; j++) {
            const k = i[j],
                l = e.default.me.inventory.interactiveSlots.get(`${ k }`);
            if (a.callback(l, k))
                return;
        }
    };
}), b.register('QajNs', function(c, d) {
    a(c.exports, 'GetMaxAmountOfItem', function() {
        return _g;
    });
    var e = b('256sH'),
        f = b('hzFRp');
    const _g = a => {
        var h;
        const i = null !== (h = (0, e.default)(a.itemId).maxStackSize) && void 0 !== h ? h : 1;
        let j = 0;
        return (0, f.EachInteractiveSlot)({
            ...a,
            callback: h => {
                h.itemId !== a.itemId && '' !== h.itemId && h.itemId || (j += i);
            }
        }), j;
    };
}), b.register('KxOV+', function(c, d) {
    a(c.exports, 'default', function() {
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
        fall: {
            fallSpeedPerSecond: (0, b('BAjCp').default)(100)
        }
    };
});