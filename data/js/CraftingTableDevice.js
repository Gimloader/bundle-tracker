function a(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('1d4CU', function(b, d) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return q;
    });
    var e = c('UM8oI'),
        f = c('sgILU'),
        g = c('NtVk4'),
        h = c('DQ0mq'),
        i = c('pCzzv'),
        j = c('8/pZt'),
        k = c('N6kkw'),
        l = c('VoiwV'),
        m = c('lTPJn'),
        n = c('xCR3e'),
        o = c('A1VQU');
    class p extends f.default {
        constructor(a) {
            super(a), (0, e.default)(this, 'pieces', {
                progressBar: {}
            }), (0, e.default)(this, 'interactivity', {
                withinBounds: !1
            }), (0, e.default)(this, 'itemIsOutlined', !1), (0, e.default)(this, 'openDeviceUI', () => {
                (0, k.default)(this);
            }), (0, e.default)(this, 'onStateChange', a => {
                (0, m.default)(a, this);
            }), (0, e.default)(this, 'onUpdate', () => {
                (0, o.default)(this);
            }), (0, e.default)(this, 'onDestroy', () => {
                this.particles.destroy(), this.refetchInteractionTimeout && window.clearTimeout(this.refetchInteractionTimeout);
            }), this.createdAt = Date.now(), (0, i.CraftingTableCreateCollider)(this), this.callbackHelper = new(0, g.default)(this), this.particles = new(0, h.default)(this), (0, l.CraftingTableDeviceSetupInteractionRadius)(this), (0, j.default)(this), (0, n.default)(this), this.interactiveZones.onInteractiveCb = () => {
                this.interactivity.withinBounds = !0;
            }, this.interactiveZones.onNonInteractive = () => {
                this.interactivity.withinBounds = !1;
            };
        }
    }
    var q = r;
}), c.register('NtVk4', function(b, d) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('UM8oI'),
        e = c('8HdBA'),
        f = c('OlpXx'),
        g = c('JJQ0+'),
        h = c('Ena4B'),
        i = c('6df+W0');
    var j = class {
        constructor(a) {
            (0, d.default)(this, 'craft', a => {
                this.device.sendToServerDevice(e.Messages.craft, {
                    recipe: a
                });
                const k = (0, i.default)(a);
                k && k.timeToCraftMs > 0 && (0, f.playSound)({
                    path: (0, g.default)('devices/crafting_table/appear.mp3'),
                    volume: (0, h.getVolume)({
                        volume: 0.35,
                        type: h.SoundType.soundEffect
                    })
                });
            }), (0, d.default)(this, 'collect', () => {
                this.device.sendToServerDevice(e.Messages.collect), (0, f.playSound)({
                    path: (0, g.default)('sounds/core/collectItem.mp3'),
                    volume: (0, h.getVolume)({
                        volume: 0.7,
                        type: h.SoundType.soundEffect
                    })
                });
            }), this.device = a;
        }
    };
}), c.register('8HdBA', function(b, c) {
    let d;
    var e;
    a(b.exports, 'Messages', function() {
        return d;
    }), (e = d || (d = {})).craft = 'craft', e.collect = 'collect';
}), c.register('6df+W0', function(b, h) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('7Sbqr');
    var e = a => {
        const f = d.default.world.devices.devices.get(a);
        if (!f)
            return null;
        const g = f.options,
            h = new Map(),
            i = a => g.numberOfIngredients >= a,
            j = (a, f) => {
                const k = h.get(a);
                k ? k.amount += f : h.set(a, {
                    item: a,
                    amount: f
                });
            };
        i(1) && j(g.ingredient1Item, g.ingredient1Amount), i(2) && j(g.ingredient2Item, g.ingredient2Amount), i(3) && j(g.ingredient3Item, g.ingredient3Amount), i(4) && j(g.ingredient4Item, g.ingredient4Amount), i(5) && j(g.ingredient5Item, g.ingredient5Amount);
        return {
            id: a,
            itemId: g.item,
            itemAmount: g.itemAmount,
            ingredients: Array.from(h.values()),
            timeToCraftMs: g.timeToCraftMs,
            timeToDisposeMs: g.itemDisposes ? g.disposeItemAfterMs : 0
        };
    };
}), c.register('DQ0mq', function(d, d) {
    a(d.exports, 'default', function() {
        return i;
    });
    var d = c('UM8oI'),
        e = c('kneek'),
        f = c('JJQ0+'),
        g = c('y7G4G'),
        h = c('5Ux1a');
    var i = class {
        constructor(a) {
            (0, d.default)(this, 'burst', () => {
                this.emitter && (this.emitter.setDepth(this.device.getMaxDepth() + 1), this.emitter.explode(50));
            }), (0, d.default)(this, 'destroy', () => {
                this.emitter && this.emitter.destroy(!0);
            }), (0, d.default)(this, 'load', () => {
                if (!(0, h.InGamePhase)())
                    return;
                const j = (0, f.default)('devices/crafting_table/particle.png');
                (0, g.default)({
                    key: j,
                    url: j,
                    onLoad: () => {
                        this.device.isDestroyed || (this.emitter = this.device.scene.add.particles(this.device.x, this.device.y, j, {
                            speed: {
                                min: -400,
                                max: 400
                            },
                            angle: {
                                min: 180,
                                max: 360
                            },
                            scale: {
                                start: 0.5,
                                end: 0
                            },
                            blendMode: b(e).BlendModes.SCREEN,
                            emitting: !1,
                            lifespan: 1000,
                            gravityY: 250
                        }));
                    }
                });
            }), this.device = a;
        }
    };
}), c.register('pCzzv', function(b, d) {
    a(b.exports, 'CraftingTableCreateCollider', function() {
        return f;
    });
    var d = c('HMNV0'),
        e = c('bavPu0');
    const f = a => {
        a.options.style === e.CraftingTableStyle.craft && ((0, d.isTopDown)() ? a.colliders.add.box({
            x: 0,
            y: 13,
            w: 105,
            h: 70
        }) : (0, d.isPlatformer)() && (a.colliders.add.box({
            x: 0,
            y: 0,
            w: 105,
            h: 92
        }), a.colliders.add.box({
            x: -39,
            y: 56,
            w: 14,
            h: 24
        }), a.colliders.add.box({
            x: 38,
            y: 56,
            w: 14,
            h: 24
        })));
    };
}), c.register('bavPu0', function(b, c) {
    let d;
    var e;
    a(b.exports, 'CraftingTableStyle', function() {
        return d;
    }), (e = d || (d = {})).plant = 'plant', e.craft = 'craft', e.store = 'store';
}), c.register('8/pZt', function(b, p) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('JJQ0+'),
        e = c('VkIHd0'),
        f = c('Q0Vn8'),
        g = c('HMNV0'),
        h = c('bavPu0'),
        i = c('FnxQ90'),
        j = c('6LqnM'),
        k = c('WdciG'),
        l = c('RPYAs');
    var m = a => {
        const {
            key: n,
            url: o,
            displayWidth: p,
            y: q,
            originY: r
        } = (a => a.options.style === h.CraftingTableStyle.plant ? {
            key: 'crafting-table-plant',
            url: (0, d.default)('/devices/crafting_table/dirt.png'),
            displayWidth: 120
        } : {
            key: 'crafting-table',
            url: (0, d.default)('/devices/crafting_table/table.png'),
            displayWidth: 110,
            originY: 1,
            y: 67
        })(a);
        a.pieces.base = a.parts.add.sprite({
            imageId: n,
            imageUrl: o,
            originY: null != r ? r : 0.5,
            y: null != q ? q : 0,
            layerId: (0, l.GetCraftingTableDeviceLayer)(a),
            depthChange: (0, f.default)(1),
            onReady: a => {
                const s = (0, e.default)({
                    height: a.view.displayHeight,
                    width: a.view.displayWidth,
                    newWidth: p
                });
                a.view.setDisplaySize(s.width, s.height);
            }
        }), a.options.style === h.CraftingTableStyle.craft && (0, g.isTopDown)() && a.shadows.add({
            r1: 70,
            r2: 30,
            y: 52
        }), a.state.status !== i.CraftingTableStatus.idle && ((0, j.default)(a), a.state.status === i.CraftingTableStatus.availableForCollection && (0, k.default)(a)), a.particles.load();
    };
}), c.register('VkIHd0', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => {
        const e = a.newWidth / a.width;
        return {
            height: a.height * e,
            width: a.width * e
        };
    };
}), c.register('FnxQ90', function(b, c) {
    let d;
    var e;
    a(b.exports, 'CraftingTableStatus', function() {
        return d;
    }), (e = d || (d = {})).idle = 'idle', e.crafting = 'crafting', e.availableForCollection = 'availableForCollection';
}), c.register('6LqnM', function(b, n) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('ik1Vy'),
        e = c('Q0Vn8'),
        f = c('0x6bL'),
        g = c('0sBay'),
        h = c('fFbqX'),
        i = c('FnxQ90'),
        j = c('RPYAs');
    var k = a => {
        if (!a.state.itemId)
            return;
        const l = (0, f.default)(a.state.itemId);
        if (l) {
            if (a.pieces.item) {
                if (a.pieces.item.view.texture.key === l.previewImage)
                    return;
                a.pieces.item.destroy(), a.pieces.item = void 0;
            }
            a.pieces.item = a.parts.add.sprite({
                imageId: l.previewImage,
                imageUrl: l.previewImage,
                layerId: (0, j.GetCraftingTableDeviceLayer)(a),
                onReady: l => {
                    l.view.setDepth(a.getMaxDepth() + (0, e.default)(1));
                    const m = a.state.status === i.CraftingTableStatus.availableForCollection;
                    l.view.alpha = m ? 1 : 0;
                    const n = (0, d.default)({
                        width: l.view.displayWidth,
                        newWidth: h.default.width
                    });
                    if (l.view.setScale(n), m)
                        return void g.default.itemReady.applyItemAnimation(a, l.view);
                    const o = Number(l.view.scale);
                    l.view.scale = 0, a.tweens.add({
                        targets: l.view,
                        scale: o,
                        duration: g.default.itemCreated.duration,
                        ease: g.default.itemCreated.ease
                    });
                }
            });
        }
    };
}), c.register('ik1Vy', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => a.newWidth / a.width;
}), c.register('0sBay', function(f, d) {
    a(f.exports, 'default', function() {
        return e;
    });
    var d = c('kneek');
    var e = {
        itemCreated: {
            duration: 250,
            ease: b(d).Math.Easing.Quadratic.Out
        },
        itemDestroyed: {
            duration: 200,
            ease: b(d).Math.Easing.Sine.Out
        },
        itemReady: {
            applyItemAnimation: (a, c) => {
                const f = c.scale;
                a.tweens.add({
                    targets: c,
                    scale: {
                        from: f,
                        to: 1.1 * f
                    },
                    duration: 1000,
                    ease: b(d).Math.Easing.Sine.Out,
                    yoyo: !0,
                    repeat: -1
                });
            },
            applyShineAnimation: (a, c) => {
                a.tweens.add({
                    targets: c,
                    alpha: 0.25,
                    duration: 500,
                    ease: b(d).Math.Easing.Sine.In,
                    yoyo: !0,
                    repeat: -1
                });
            }
        }
    };
}), c.register('fFbqX', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        width: 60
    };
}), c.register('RPYAs', function(b, m) {
    a(b.exports, 'GetCraftingTableDeviceLayer', function() {
        return g;
    });
    var d = c('cMsWT'),
        e = c('HMNV0'),
        f = c('bavPu0');
    const g = a => (0, e.isPlatformer)() ? a.layers.getLayer() : a.options.style == f.CraftingTableStyle.plant ? d.default.DevicesUnderCharacters : d.default.DepthSortedCharactersAndDevices;
}), c.register('WdciG', function(m, d) {
    a(m.exports, 'default', function() {
        return k;
    });
    var d = c('kneek'),
        e = c('ik1Vy'),
        f = c('Q0Vn8'),
        g = c('0x6bL'),
        h = c('0sBay'),
        i = c('fFbqX'),
        j = c('RPYAs');
    var k = a => {
        const l = a.state.itemId;
        if (!l)
            return;
        const m = (0, g.default)(l);
        m && (a.pieces.itemShine && (a.pieces.itemShine.destroy(), a.pieces.itemShine = null), a.pieces.itemShine = a.parts.add.sprite({
            imageId: m.previewImage,
            imageUrl: m.previewImage,
            layerId: (0, j.GetCraftingTableDeviceLayer)(a),
            onReady: l => {
                l.view.setDepth(a.getMaxDepth() + (0, f.default)(2));
                const n = (0, e.default)({
                    width: l.view.displayWidth,
                    newWidth: i.default.width
                });
                l.view.setScale(n), l.view.alpha = 0, l.view.blendMode = b(d).BlendModes.ADD, h.default.itemReady.applyShineAnimation(a, l.view);
            }
        }));
    };
}), c.register('N6kkw', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => {
        a.deviceUI.open({
            status: a.state.status,
            style: a.options.style,
            tableGroup: a.options.group,
            craft: a.callbackHelper.craft,
            collect: a.callbackHelper.collect,
            item: a.state.itemId,
            itemAmount: a.state.itemAmount,
            craftingDurationMs: a.state.craftingDurationMs,
            itemFinishesCraftingAt: a.state.itemFinishesCraftingAt,
            itemDisposalMs: a.state.itemDisposalMs,
            itemDisposedAt: a.state.itemDisposedAt,
            itemCrafterCharacterId: a.state.itemCrafterCharacterId,
            useCrafterCollectionAdvantage: a.options.useCrafterCollectionAdvantage
        });
    };
}), c.register('VoiwV', function(b, n) {
    a(b.exports, 'CraftingTableDeviceSetupInteractionRadius', function() {
        return e;
    });
    var d = c('bavPu0');
    const e = a => {
        const {
            style: f
        } = a.options;
        f !== d.CraftingTableStyle.plant ? a.interactiveZones.add.circle({
            r: 120,
            y: 10
        }) : a.interactiveZones.add.circle({
            r: 100
        });
    };
}), c.register('lTPJn', function(b, n) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('xCR3e'),
        e = c('uGSxC');
    var f = (a, b) => {
        'status' === a && (0, e.default)(b), 'itemId' === a && (b.deviceUI.update({
            item: b.state.itemId
        }), (0, d.default)(b)), 'craftingDurationMs' === a && b.deviceUI.update({
            craftingDurationMs: b.state.craftingDurationMs
        }), 'itemFinishesCraftingAt' === a && b.deviceUI.update({
            itemFinishesCraftingAt: b.state.itemFinishesCraftingAt
        }), 'itemAmount' === a && b.deviceUI.update({
            itemAmount: b.state.itemAmount
        }), 'itemDisposedAt' === a && b.deviceUI.update({
            itemDisposedAt: b.state.itemDisposedAt
        }), 'itemDisposalMs' === a && b.deviceUI.update({
            itemDisposalMs: b.state.itemDisposalMs
        }), 'itemCrafterCharacterId' === a && b.deviceUI.update({
            itemCrafterCharacterId: b.state.itemCrafterCharacterId
        });
    };
}), c.register('xCR3e', function(b, n) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('RJ/fk'),
        e = c('7Sbqr'),
        f = c('PUlKf'),
        g = c('v2cUN0'),
        h = c('2XxG10'),
        i = c('FnxQ90'),
        j = c('wktBO');
    const k = a => {
        if (a.state.status === i.CraftingTableStatus.availableForCollection) {
            let l = 1;
            if (!(a.state.itemCrafterCharacterId === (0, f.default)()) && a.options.useCrafterCollectionAdvantage) {
                const m = a.state.itemFinishesCraftingAt + 1000 * h.default.secondsAdvantage,
                    n = Math.ceil((m - e.default.session.gameTime) / 1000);
                n < 1 ? l = 1 : (a.refetchInteractionTimeout = window.setTimeout(() => {
                    k(a);
                }, 250), l = n);
            }
            a.interactiveZones.setInfo({
                message: `Collect ${ (0, j.default)(a.state.itemId, a.state.itemAmount) }`,
                allowedToInteract: !0,
                duration: l
            }), a.interactiveZones.onInteraction = () => {
                a.callbackHelper.collect();
            };
        } else
            a.state.status === i.CraftingTableStatus.idle ? a.interactiveZones.setInfo({
                message: (0, d.CapitalizeFirstLetter)(g.default.baseVerb(a.options.style)),
                allowedToInteract: !0
            }) : a.interactiveZones.setInfo({
                message: `${ (0, d.CapitalizeFirstLetter)(g.default.preparing(a.options.style)) } ${ (0, j.default)(a.state.itemId, a.state.itemAmount) }`,
                action: 'to check status',
                allowedToInteract: !0
            }), a.interactiveZones.onInteraction = () => {
                a.openDeviceUI();
            };
    };
    var l = m;
}), c.register('v2cUN0', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('RJ/fk'),
        e = c('bavPu0');
    const f = a => a === e.CraftingTableStyle.plant ? 'plant' : a === e.CraftingTableStyle.craft ? 'craft' : 'purchase';
    var g = {
        noItems: a => `No items currently available to ${ f(a) }.`,
        selectItem: a => `Select an item to ${ f(a) }...`,
        availableToCraft: a => `Available To ${ (0, d.CapitalizeFirstLetter)(f(a)) }`,
        instantNote: a => a === e.CraftingTableStyle.store ? 'Available immediately' : a === e.CraftingTableStyle.plant ? 'Grows instantly' : 'Crafts instantly',
        durationNote: a => b => b === e.CraftingTableStyle.store ? `Takes ${ a } to prepare` : b === e.CraftingTableStyle.plant ? `Takes ${ a } to grow` : `Takes ${ a } to craft`,
        expireVerb: a => a === e.CraftingTableStyle.plant ? 'goes bad' : 'expires',
        resource: a => a === e.CraftingTableStyle.store ? 'resource' : 'ingredient',
        preparing: a => a === e.CraftingTableStyle.store ? 'preparing' : a === e.CraftingTableStyle.plant ? 'growing' : 'crafting',
        baseVerb: f
    };
}), c.register('2XxG10', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        secondsAdvantage: 5
    };
}), c.register('wktBO', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('bBQb9');
    var f = (a, b) => {
        let g = (0, e.ItemName)(a) || 'Item';
        return b > 1 && (g += ` (${ (0, d.numberWithCommas)(b) })`), g;
    };
}), c.register('uGSxC', function(b, d) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('7Sbqr'),
        e = c('JJQ0+'),
        f = c('Ena4B'),
        g = c('OlpXx'),
        h = c('0sBay'),
        i = c('FnxQ90'),
        j = c('6LqnM'),
        k = c('WdciG'),
        l = c('4+6b1'),
        m = c('GjnKF'),
        n = c('xCR3e');
    var o = a => {
        const p = a.state.status;
        if (p === i.CraftingTableStatus.idle && ((0, l.default)(a), (0, m.default)(a)), p !== i.CraftingTableStatus.crafting && p !== i.CraftingTableStatus.availableForCollection || (0, j.default)(a), p === i.CraftingTableStatus.availableForCollection && (a.pieces.item && h.default.itemReady.applyItemAnimation(a, a.pieces.item.view), (0, k.default)(a), a.state.itemDisposedAt || (0, m.default)(a), a.cull.isInsideView && !d.default.session.loadingPhase)) {
            Date.now() - a.createdAt > 1500 && ((0, g.playSound)({
                path: (0, e.default)('devices/crafting_table/complete.mp3'),
                volume: (0, f.getVolume)({
                    volume: 0.4,
                    type: f.SoundType.soundEffect
                })
            }), a.particles.burst());
        }
        a.deviceUI.update({
            status: a.state.status
        }), (0, n.default)(a);
    };
}), c.register('4+6b1', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('0sBay');
    var e = a => {
        if (a.pieces.item) {
            const f = a.pieces.item;
            a.pieces.item = void 0, a.tweens.add({
                targets: f.view,
                scale: 0,
                opacity: 0.5,
                duration: d.default.itemDestroyed.duration,
                ease: d.default.itemDestroyed.ease,
                onComplete: () => {
                    f.destroy();
                }
            });
        }
        if (a.pieces.itemShine) {
            const f = a.pieces.itemShine;
            a.pieces.itemShine = void 0, a.tweens.add({
                targets: f.view,
                scale: 0,
                opacity: 0.5,
                duration: d.default.itemDestroyed.duration,
                ease: d.default.itemDestroyed.ease,
                onComplete: () => {
                    f.destroy();
                }
            });
        }
    };
}), c.register('GjnKF', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => {
        a.pieces.progressBar.background && a.pieces.progressBar.bar && (a.pieces.progressBar.background.view.destroy(), a.pieces.progressBar.bar.view.destroy(), a.pieces.progressBar.background = void 0, a.pieces.progressBar.bar = void 0);
    };
}), c.register('A1VQU', function(b, n) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('4/f+U'),
        e = c('tYqUt'),
        f = c('95CV8'),
        g = c('HBzWf'),
        h = c('ysOmq'),
        i = c('FnxQ90'),
        j = c('2X2Wl');
    var k = a => {
        if (a.cull.isInsideView) {
            if (a.state.status === i.CraftingTableStatus.crafting) {
                var l, m, n;
                const o = a.state.itemFinishesCraftingAt - a.state.craftingDurationMs,
                    p = ((0, e.GetServerGameTimeWithCompensation)() - o) / a.state.craftingDurationMs;
                (0, j.default)({
                    device: a,
                    completion: p,
                    color: h.default.progressColor
                });
                const q = (0, d.clamp)(p, 0.25, 1);
                null === (l = a.pieces) || void 0 === l || null === (m = l.item) || void 0 === m || null === (n = m.view) || void 0 === n || n.setAlpha(q);
            }
            var l, m, n, o, p;
            if (a.state.status === i.CraftingTableStatus.availableForCollection)
                if (null === (l = a.pieces) || void 0 === l || null === (m = l.item) || void 0 === m || null === (n = m.view) || void 0 === n || n.setAlpha(1), a.state.itemDisposedAt) {
                    const q = a.state.itemDisposedAt - a.state.itemDisposalMs,
                        r = 1 - ((0, e.GetServerGameTimeWithCompensation)() - q) / a.state.itemDisposalMs;
                    (0, j.default)({
                        device: a,
                        completion: r,
                        color: h.default.expirationColor
                    });
                }
            if (a.itemIsOutlined)
                if (!a.interactivity.withinBounds || a.state.status !== i.CraftingTableStatus.availableForCollection)
                    a.itemIsOutlined = !1, (null === (o = a.pieces) || void 0 === o ? void 0 : o.item) && (0, g.RemoveOutline)({
                        view: a.pieces.item.view
                    });
            if (a.interactivity.withinBounds)
                a.state.status === i.CraftingTableStatus.availableForCollection && !a.itemIsOutlined && (null === (p = a.pieces.item) || void 0 === p ? void 0 : p.view) && (a.itemIsOutlined = !0, (0, f.AddOutline)({
                    view: a.pieces.item.view
                }));
        }
    };
}), c.register('95CV8', function(b, a) {
    a(b.exports, 'AddOutline', function() {
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
}), c.register('HBzWf', function(b, a) {
    a(b.exports, 'RemoveOutline', function() {
        return e;
    });
    var d = c('dAmf5');
    const e = a => {
        a.view && (0, d.default)().plugins.get('rexOutlinePipeline').remove(a.view);
    };
}), c.register('ysOmq', function(b, a) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('HMNV0'),
        e = c('bavPu0');
    var f = {
        width: 55,
        height: 12,
        backgroundColor: 16777215,
        borderColor: 2503224,
        borderWidth: 5,
        progressColor: 4431943,
        expirationColor: 15092249,
        yOffset: a => a.options.style === e.CraftingTableStyle.plant ? 70 : (0, d.isPlatformer)() ? -75 : 85
    };
}), c.register('2X2Wl', function(b, a) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('ysOmq'),
        e = c('rx+Gh');
    var f = a => {
        const {
            device: g,
            completion: h
        } = i;
        g.pieces.progressBar.bar && g.pieces.progressBar.background || (0, e.default)(g), g.pieces.progressBar.bar.updateFillColor({
            color: i.color,
            blockRedraw: !0
        }), g.pieces.progressBar.bar.updateDimensions({
            height: d.default.height,
            width: d.default.width * h
        }), g.pieces.progressBar.bar.view.setX(g.x - (d.default.width - d.default.width * h) / 2);
    };
}), c.register('rx+Gh', function(b, a) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('0sBay'),
        e = c('ysOmq'),
        f = c('RPYAs');
    var g = a => {
        a.pieces.progressBar.background && a.pieces.progressBar.background.destroy(), a.pieces.progressBar.bar && a.pieces.progressBar.bar.destroy(), a.pieces.progressBar.background = a.parts.add.rect({
            width: e.default.width,
            height: e.default.height,
            y: e.default.yOffset(a),
            color: e.default.backgroundColor,
            borderColor: e.default.borderColor,
            borderWidth: e.default.borderWidth,
            borderAlpha: 1,
            layerId: (0, f.GetCraftingTableDeviceLayer)(a)
        }), a.pieces.progressBar.bar = a.parts.add.rect({
            width: e.default.width,
            height: e.default.height,
            y: e.default.yOffset(a),
            color: e.default.progressColor,
            layerId: (0, f.GetCraftingTableDeviceLayer)(a)
        }), a.pieces.progressBar.background.view.setScale(0), a.pieces.progressBar.bar.view.setAlpha(0), a.tweens.add({
            targets: a.pieces.progressBar.background.view,
            scale: 1,
            duration: d.default.itemCreated.duration,
            ease: d.default.itemCreated.ease,
            onComplete: () => {
                var h;
                (null === (h = a.pieces.progressBar.bar) || void 0 === h ? void 0 : h.view) && a.pieces.progressBar.bar.view.setAlpha(1);
            }
        });
    };
});