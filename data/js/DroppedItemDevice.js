function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('lqRJQ', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _B(b.exports, 'default', function() {
        return _B;
    });
    var e = a('1bFPu'),
        f = a('JqBF0'),
        g = a('SINjC2'),
        h = a('1Chka'),
        i = a('I35Ay'),
        j = a('dil2H'),
        k = a('qMN8v'),
        l = a('s21gJ'),
        m = a('iWivW'),
        n = a('07pQo'),
        o = a('2Xvuf'),
        p = a('1f1YX'),
        q = a('ZCz9W'),
        r = a('QfDHU'),
        s = a('zVybl'),
        t = a('4dOVn'),
        u = a('P2jwS'),
        v = a('EDUTD'),
        w = a('Lsn7x'),
        x = a('l/TUi'),
        y = a('JEGzD'),
        z = a('uq5NQ');
    class A extends i.default {
        constructor(_B) {
            if (super(_B), (0, e.default)(this, 'hidden', !1), (0, e.default)(this, 'onUpdate', _B => {
                    var C;
                    (0, y.isPlatformer)() && (null === (C = this.item) || void 0 === C ? void 0 : C.view) && (this.item.view.y < this.state.fallY && (this.item.view.y += (0, z.default)(w.default.fall.fallSpeedPerSecond) * _B / 1000, this.item.view.y >= this.state.fallY && (this.item.view.y = this.state.fallY)), this.y = this.item.view.y);
                }), (0, e.default)(this, 'setInteractionInfo', () => {
                    const C = (0, q.ItemName)(this.options.itemId),
                        D = (0, s.IsWeapon)(this.options.itemId),
                        E = (0, t.IsItem)(this.options.itemId);
                    let F = !0;
                    if (D || E) {
                        var G, H;
                        const I = null !== (H = null === (G = m.default.me.inventory.slots.get(this.options.itemId)) || void 0 === G ? void 0 : G.amount) && void 0 !== H ? H : 0;
                        if (D) {
                            F = I < (0, u.GetMaxAmountOfWeapon)({
                                itemId: this.options.itemId
                            });
                        } else if (E) {
                            F = I < (0, v.GetMaxAmountOfItem)({
                                itemId: this.options.itemId
                            });
                        }
                    }
                    if (C) {
                        const G = this.state.amount || this.options.amount;
                        this.interactiveZones.setInfo({
                            message: (0, x.ItemNameWithCount)(C, G),
                            action: w.default.interaction.message.action,
                            allowedToInteract: F,
                            topHeader: F ? void 0 : w.default.interaction.message.fullInventory,
                            topHeaderColor: w.default.interaction.message.fullInventoryColor
                        });
                    }
                }), (0, e.default)(this, 'startShowUpTweens', () => {
                    if (!this.state.visible)
                        return;
                    this.item.view.alpha = 0, this.item.view.displayWidth = 0, this.item.view.displayHeight = 0, (0, y.isPlatformer)() && this.item.view.setOrigin(0.5);
                    const C = this.item.view.x,
                        D = this.item.view.y;
                    var E, F;
                    if (this.item.view.x = null !== (E = this.options.originX) && void 0 !== E ? E : C, this.item.view.y = null !== (F = this.options.originY) && void 0 !== F ? F : D, this.tweens.add({
                            targets: this.item.view,
                            alpha: 1,
                            displayWidth: 60,
                            displayHeight: 60,
                            x: C,
                            y: D,
                            duration: 350,
                            ease: Phaser.Math.Easing.Back.Out,
                            onComplete: () => {
                                this.startIdleTweens();
                            }
                        }), this.shadow) {
                        this.shadow.view.alpha = 0, this.shadow.view.scaleX = this.shadow.view.scaleY = 0;
                        const G = this.shadow.view.x,
                            H = this.shadow.view.y;
                        this.shadow.view.x += this.item.view.x - C, this.shadow.view.y += this.item.view.y - D, this.tweens.add({
                            targets: this.shadow.view,
                            alpha: 0.3,
                            scaleX: 0.6,
                            scaleY: 0.6,
                            x: G,
                            y: H,
                            duration: 350,
                            ease: Phaser.Math.Easing.Back.Out
                        });
                    }
                }), (0, e.default)(this, 'startHideTweens', () => {
                    this.state.visible && (this.tweens.add({
                        targets: this.item.view,
                        displayWidth: 0,
                        displayHeight: 0,
                        duration: 350,
                        ease: Phaser.Math.Easing.Back.In
                    }), this.shadow && (this.scene.tweens.getTweensOf(this.shadow.view).forEach(_B => {
                        _B.remove();
                    }), this.tweens.add({
                        targets: this.shadow.view,
                        scaleX: 0,
                        scaleY: 0,
                        duration: 250,
                        ease: Phaser.Math.Easing.Back.In
                    })));
                }), (0, e.default)(this, 'startIdleTweens', () => {
                    (0, y.isPlatformer)() || this.state.visible && (this.item.view.alpha = 1, this.tweens.add({
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
                }), (0, e.default)(this, 'onStateChange', _B => {
                    'amount' === _B && this.setInteractionInfo(), 'alreadyCollected' === _B && (this.prevState.alreadyCollected || !this.state.alreadyCollected || this.hidden || (this.hidden = !0, this.startHideTweens()));
                }), (0, e.default)(this, 'addOutline', () => {
                    this.state.visible && (0, k.AddOutline)({
                        view: this.item.view
                    });
                }), (0, e.default)(this, 'removeOutline', () => {
                    this.state.visible && (0, l.RemoveOutline)({
                        view: this.item.view
                    });
                }), (0, y.isPlatformer)() ? this.cull.ignoreCulling() : this.boundingBox.setHardcoded({
                    width: 75,
                    height: 125,
                    y: -112.5
                }), !this.state.visible)
                return;
            if (this.state.alreadyCollected)
                return;
            (0, y.isPlatformer)() || (this.shadow = this.parts.add.sprite({
                ...j.ShadowAsset,
                layerId: f.default.DevicesUnderCharacters
            }));
            const C = m.default.worldOptions.itemOptions.find(_B => _B.id === this.options.itemId);
            if (C) {
                const D = C.id,
                    E = C.previewImage,
                    F = (0, h.default)(D),
                    G = (0, g.default)({
                        height: F.height,
                        width: F.width,
                        newWidth: w.default.itemWidth
                    });
                (0, r.default)({
                    key: D,
                    url: E,
                    onLoad: () => {
                        this.isDestroyed || (this.item = this.parts.add.sprite({
                            imageId: D,
                            imageUrl: E,
                            layerId: f.default.DepthSortedCharactersAndDevices,
                            y: (0, y.isPlatformer)() ? 0 : -65,
                            depthChange: 75,
                            displayWidth: G.width,
                            displayHeight: G.height
                        }), this.interactiveZones.add.circle({
                            x: 0,
                            y: 0,
                            r: w.default.interaction.radius
                        }), this.setInteractionInfo(), this.interactiveZones.onInteractiveCb = () => {
                            this.setInteractionInfo(), this.addOutline();
                        }, this.interactiveZones.onNonInteractive = () => {
                            this.removeOutline();
                        }, this.interactiveZones.onInteraction = () => {
                            this.state.canBeCollected && !this.state.alreadyCollected && (this.sendToServerDevice('interacted'), (0, n.playSound)({
                                path: (0, o.default)('sounds/core/collectItem.mp3'),
                                volume: (0, p.getVolume)({
                                    volume: 0.7,
                                    type: p.SoundType.soundEffect
                                })
                            }));
                        }, this.interactiveZones.setCanInteractThroughColliders(!0), this.state.canBeCollected ? this.startIdleTweens() : this.startShowUpTweens());
                    }
                });
            }
        }
    }
    var _B = A;
}), a.register('SINjC2', function(b, c) {
    t(b.exports, 'default', function() {
        return _d;
    });
    var _d = t => {
        const e = t.newWidth / t.width;
        return {
            height: t.height * e,
            width: t.width * e
        };
    };
}), a.register('dil2H', function(b, c) {
    t(b.exports, 'ShadowAsset', function() {
        return _d;
    });
    const _d = {
        imageId: 'item_shadow',
        imageUrl: (0, a('2Xvuf').default)('devices/dropped_item/item-shadow.png')
    };
}), a.register('qMN8v', function(b, c) {
    t(b.exports, 'AddOutline', function() {
        return _e;
    });
    var d = a('D5xLI');
    const _e = t => {
        if (!t.view || !t.view.active)
            return;
        const f = {
                thickness: 2
            },
            g = t.options ? {
                ...f,
                ...t.options
            } : {
                ...f
            };
        (0, d.default)().plugins.get('rexOutlinePipeline').add(t.view, g);
    };
}), a.register('s21gJ', function(b, c) {
    t(b.exports, 'RemoveOutline', function() {
        return _e;
    });
    var d = a('D5xLI');
    const _e = t => {
        t.view && (0, d.default)().plugins.get('rexOutlinePipeline').remove(t.view);
    };
}), a.register('P2jwS', function(b, c) {
    t(b.exports, 'GetMaxAmountOfWeapon', function() {
        return _e;
    });
    var d = a('n92Pz');
    const _e = t => {
        let f = 0;
        return (0, d.EachInteractiveSlot)({
            callback: b => {
                b.itemId !== t.itemId && '' !== b.itemId && b.itemId || (f += 1);
            }
        }), f;
    };
}), a.register('n92Pz', function(b, c) {
    t(b.exports, 'EachInteractiveSlot', function() {
        return _f;
    });
    var d = a('iWivW'),
        e = a('hzwGB');
    const _f = t => {
        const g = (0, e.FetchMapOptions)().interactiveItemsSlots,
            h = d.default.me.inventory.interactiveSlotsOrder;
        for (let i = 0; i < g; i++) {
            const j = h[i],
                k = d.default.me.inventory.interactiveSlots.get(`${ j }`);
            if (t.callback(k, j))
                return;
        }
    };
}), a.register('EDUTD', function(b, c) {
    t(b.exports, 'GetMaxAmountOfItem', function() {
        return _f;
    });
    var d = a('btxlR'),
        e = a('n92Pz');
    const _f = t => {
        var g;
        const h = null !== (g = (0, d.default)(t.itemId).maxStackSize) && void 0 !== g ? g : 1;
        let i = 0;
        return (0, e.EachInteractiveSlot)({
            ...t,
            callback: g => {
                g.itemId !== t.itemId && '' !== g.itemId && g.itemId || (i += h);
            }
        }), i;
    };
}), a.register('Lsn7x', function(b, c) {
    t(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
            fallSpeedPerSecond: (0, a('OILaa').default)(100)
        }
    };
});