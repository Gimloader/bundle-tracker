function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('qSeBW', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _q(b.exports, 'default', function() {
        return _q;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('wsOOE'),
        h = a('rNpyP'),
        i = a('ALLk/'),
        j = a('o8c72'),
        k = a('PGP2m'),
        l = a('/S4Sw'),
        m = a('tuYWU'),
        n = a('HcCdg'),
        o = a('8MR73');
    class p extends f.default {
        constructor(_q) {
            super(_q), (0, e.default)(this, 'pieces', {
                progressBar: {}
            }), (0, e.default)(this, 'interactivity', {
                withinBounds: !1
            }), (0, e.default)(this, 'itemIsOutlined', !1), (0, e.default)(this, 'openDeviceUI', () => {
                (0, k.default)(this);
            }), (0, e.default)(this, 'onStateChange', _q => {
                (0, m.default)(_q, this);
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
    var _q = p;
}), a.register('wsOOE', function(b, c) {
    _k(b.exports, 'default', function() {
        return _j;
    });
    var d = a('1bFPu'),
        e = a('qommb'),
        f = a('07pQo'),
        g = a('2Xvuf'),
        h = a('1f1YX'),
        i = a('iubht');
    var _j = class {
        constructor(_k) {
            (0, d.default)(this, 'craft', _k => {
                this.device.sendToServerDevice(e.Messages.craft, {
                    recipe: _k
                });
                const l = (0, i.default)(_k);
                l && l.timeToCraftMs > 0 && (0, f.playSound)({
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
            }), this.device = _k;
        }
    };
}), a.register('qommb', function(b, c) {
    let d;
    var e;
    _j(b.exports, 'Messages', function() {
        return d;
    }), (e = d || (d = {})).craft = 'craft', e.collect = 'collect';
}), a.register('iubht', function(b, c) {
    _j(b.exports, 'default', function() {
        return _e;
    });
    var d = a('iWivW');
    var _e = _j => {
        const f = d.default.world.devices.devices.get(_j);
        if (!f)
            return null;
        const g = f.options,
            h = new Map(),
            i = _j => g.numberOfIngredients >= _j,
            j = (_j, f) => {
                const k = h.get(_j);
                k ? k.amount += f : h.set(_j, {
                    item: _j,
                    amount: f
                });
            };
        i(1) && j(g.ingredient1Item, g.ingredient1Amount), i(2) && j(g.ingredient2Item, g.ingredient2Amount), i(3) && j(g.ingredient3Item, g.ingredient3Amount), i(4) && j(g.ingredient4Item, g.ingredient4Amount), i(5) && j(g.ingredient5Item, g.ingredient5Amount);
        return {
            id: _j,
            itemId: g.item,
            itemAmount: g.itemAmount,
            ingredients: Array.from(h.values()),
            timeToCraftMs: g.timeToCraftMs,
            timeToDisposeMs: g.itemDisposes ? g.disposeItemAfterMs : 0
        };
    };
}), a.register('rNpyP', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('1bFPu'),
        e = a('8WvaZ'),
        f = a('2Xvuf'),
        g = a('QfDHU'),
        h = a('/pbxo');
    var _i = class {
        constructor(_j) {
            (0, d.default)(this, 'burst', () => {
                this.emitter && (this.emitter.setDepth(this.device.getMaxDepth() + 1), this.emitter.explode(50));
            }), (0, d.default)(this, 'destroy', () => {
                this.emitter && this.emitter.destroy(!0);
            }), (0, d.default)(this, 'load', () => {
                if (!(0, h.InGamePhase)())
                    return;
                const k = (0, f.default)('devices/crafting_table/particle.png');
                (0, g.default)({
                    key: k,
                    url: k,
                    onLoad: () => {
                        this.device.isDestroyed || (this.emitter = this.device.scene.add.particles(this.device.x, this.device.y, k, {
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
                            blendMode: _b(e).BlendModes.SCREEN,
                            emitting: !1,
                            lifespan: 1000,
                            gravityY: 250
                        }));
                    }
                });
            }), this.device = _j;
        }
    };
}), a.register('ALLk/', function(_b, c) {
    e(_b.exports, 'CraftingTableCreateCollider', function() {
        return _f;
    });
    var d = a('JEGzD'),
        e = a('4HzlY');
    const _f = e => {
        e.options.style === e.CraftingTableStyle.craft && ((0, d.isTopDown)() ? e.colliders.add.box({
            x: 0,
            y: 13,
            w: 105,
            h: 70
        }) : (0, d.isPlatformer)() && (e.colliders.add.box({
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
        })));
    };
}), a.register('4HzlY', function(b, c) {
    let d;
    var e;
    e(b.exports, 'CraftingTableStyle', function() {
        return d;
    }), (e = d || (d = {})).plant = 'plant', e.craft = 'craft', e.store = 'store';
}), a.register('o8c72', function(b, c) {
    e(b.exports, 'default', function() {
        return _m;
    });
    var d = a('2Xvuf'),
        e = a('SINjC2'),
        f = a('5CmLs'),
        g = a('JEGzD'),
        h = a('4HzlY'),
        i = a('xmEhF'),
        j = a('Rkm/2'),
        k = a('jHkRX'),
        l = a('MLszK');
    var _m = e => {
        const {
            key: n,
            url: o,
            displayWidth: p,
            y: q,
            originY: r
        } = (e => e.options.style === h.CraftingTableStyle.plant ? {
            key: 'crafting-table-plant',
            url: (0, d.default)('/devices/crafting_table/dirt.png'),
            displayWidth: 120
        } : {
            key: 'crafting-table',
            url: (0, d.default)('/devices/crafting_table/table.png'),
            displayWidth: 110,
            originY: 1,
            y: 67
        })(e);
        e.pieces.base = e.parts.add.sprite({
            imageId: n,
            imageUrl: o,
            originY: null != r ? r : 0.5,
            y: null != q ? q : 0,
            layerId: (0, l.GetCraftingTableDeviceLayer)(e),
            depthChange: (0, f.default)(1),
            onReady: e => {
                const s = (0, e.default)({
                    height: e.view.displayHeight,
                    width: e.view.displayWidth,
                    newWidth: p
                });
                e.view.setDisplaySize(s.width, s.height);
            }
        }), e.options.style === h.CraftingTableStyle.craft && (0, g.isTopDown)() && e.shadows.add({
            r1: 70,
            r2: 30,
            y: 52
        }), e.state.status !== i.CraftingTableStatus.idle && ((0, j.default)(e), e.state.status === i.CraftingTableStatus.availableForCollection && (0, k.default)(e)), e.particles.load();
    };
}), a.register('SINjC2', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = e => {
        const e = e.newWidth / e.width;
        return {
            height: e.height * e,
            width: e.width * e
        };
    };
}), a.register('xmEhF', function(b, c) {
    let d;
    var e;
    e(b.exports, 'CraftingTableStatus', function() {
        return d;
    }), (e = d || (d = {})).idle = 'idle', e.crafting = 'crafting', e.availableForCollection = 'availableForCollection';
}), a.register('Rkm/2', function(b, c) {
    e(b.exports, 'default', function() {
        return _k;
    });
    var d = a('EpdYL'),
        e = a('5CmLs'),
        f = a('btxlR'),
        g = a('mRtJl'),
        h = a('O+Bf9'),
        i = a('xmEhF'),
        j = a('MLszK');
    var _k = e => {
        if (!e.state.itemId)
            return;
        const l = (0, f.default)(e.state.itemId);
        if (l) {
            if (e.pieces.item) {
                if (e.pieces.item.view.texture.key === l.previewImage)
                    return;
                e.pieces.item.destroy(), e.pieces.item = void 0;
            }
            e.pieces.item = e.parts.add.sprite({
                imageId: l.previewImage,
                imageUrl: l.previewImage,
                layerId: (0, j.GetCraftingTableDeviceLayer)(e),
                onReady: l => {
                    l.view.setDepth(e.getMaxDepth() + (0, e.default)(1));
                    const m = e.state.status === i.CraftingTableStatus.availableForCollection;
                    l.view.alpha = m ? 1 : 0;
                    const n = (0, d.default)({
                        width: l.view.displayWidth,
                        newWidth: h.default.width
                    });
                    if (l.view.setScale(n), m)
                        return void g.default.itemReady.applyItemAnimation(e, l.view);
                    const o = Number(l.view.scale);
                    l.view.scale = 0, e.tweens.add({
                        targets: l.view,
                        scale: o,
                        duration: g.default.itemCreated.duration,
                        ease: g.default.itemCreated.ease
                    });
                }
            });
        }
    };
}), a.register('EpdYL', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = e => e.newWidth / e.width;
}), a.register('mRtJl', function(b, c) {
    e(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8WvaZ');
    var _e = {
        itemCreated: {
            duration: 250,
            ease: _b(d).Math.Easing.Quadratic.Out
        },
        itemDestroyed: {
            duration: 200,
            ease: _b(d).Math.Easing.Sine.Out
        },
        itemReady: {
            applyItemAnimation: (e, a) => {
                const f = a.scale;
                e.tweens.add({
                    targets: a,
                    scale: {
                        from: f,
                        to: 1.1 * f
                    },
                    duration: 1000,
                    ease: _b(d).Math.Easing.Sine.Out,
                    yoyo: !0,
                    repeat: -1
                });
            },
            applyShineAnimation: (e, a) => {
                e.tweens.add({
                    targets: a,
                    alpha: 0.25,
                    duration: 500,
                    ease: _b(d).Math.Easing.Sine.In,
                    yoyo: !0,
                    repeat: -1
                });
            }
        }
    };
}), a.register('O+Bf9', function(_b, c) {
    e(_b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        width: 60
    };
}), a.register('MLszK', function(b, c) {
    e(b.exports, 'GetCraftingTableDeviceLayer', function() {
        return _g;
    });
    var d = a('JqBF0'),
        e = a('JEGzD'),
        f = a('4HzlY');
    const _g = e => (0, e.isPlatformer)() ? e.layers.getLayer() : e.options.style == f.CraftingTableStyle.plant ? d.default.DevicesUnderCharacters : d.default.DepthSortedCharactersAndDevices;
}), a.register('jHkRX', function(b, c) {
    e(b.exports, 'default', function() {
        return _k;
    });
    var d = a('8WvaZ'),
        e = a('EpdYL'),
        f = a('5CmLs'),
        g = a('btxlR'),
        h = a('mRtJl'),
        i = a('O+Bf9'),
        j = a('MLszK');
    var _k = e => {
        const l = e.state.itemId;
        if (!l)
            return;
        const m = (0, g.default)(l);
        m && (e.pieces.itemShine && (e.pieces.itemShine.destroy(), e.pieces.itemShine = null), e.pieces.itemShine = e.parts.add.sprite({
            imageId: m.previewImage,
            imageUrl: m.previewImage,
            layerId: (0, j.GetCraftingTableDeviceLayer)(e),
            onReady: l => {
                l.view.setDepth(e.getMaxDepth() + (0, f.default)(2));
                const n = (0, e.default)({
                    width: l.view.displayWidth,
                    newWidth: i.default.width
                });
                l.view.setScale(n), l.view.alpha = 0, l.view.blendMode = _b(d).BlendModes.ADD, h.default.itemReady.applyShineAnimation(e, l.view);
            }
        }));
    };
}), a.register('PGP2m', function(_b, c) {
    e(_b.exports, 'default', function() {
        return _d;
    });
    var _d = e => {
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
        });
    };
}), a.register('/S4Sw', function(b, c) {
    e(b.exports, 'CraftingTableDeviceSetupInteractionRadius', function() {
        return _e;
    });
    var d = a('4HzlY');
    const _e = e => {
        const {
            style: f
        } = e.options;
        f !== d.CraftingTableStyle.plant ? e.interactiveZones.add.circle({
            r: 120,
            y: 10
        }) : e.interactiveZones.add.circle({
            r: 100
        });
    };
}), a.register('tuYWU', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('HcCdg'),
        e = a('khqvu');
    var _f = (e, b) => {
        'status' === e && (0, e.default)(b), 'itemId' === e && (b.deviceUI.update({
            item: b.state.itemId
        }), (0, d.default)(b)), 'craftingDurationMs' === e && b.deviceUI.update({
            craftingDurationMs: b.state.craftingDurationMs
        }), 'itemFinishesCraftingAt' === e && b.deviceUI.update({
            itemFinishesCraftingAt: b.state.itemFinishesCraftingAt
        }), 'itemAmount' === e && b.deviceUI.update({
            itemAmount: b.state.itemAmount
        }), 'itemDisposedAt' === e && b.deviceUI.update({
            itemDisposedAt: b.state.itemDisposedAt
        }), 'itemDisposalMs' === e && b.deviceUI.update({
            itemDisposalMs: b.state.itemDisposalMs
        }), 'itemCrafterCharacterId' === e && b.deviceUI.update({
            itemCrafterCharacterId: b.state.itemCrafterCharacterId
        });
    };
}), a.register('HcCdg', function(b, c) {
    e(b.exports, 'default', function() {
        return _l;
    });
    var d = a('qVhMZ'),
        e = a('iWivW'),
        f = a('Jfada'),
        g = a('o2gEf'),
        h = a('r/9Pw'),
        i = a('xmEhF'),
        j = a('SNA6d');
    const k = e => {
        if (e.state.status === i.CraftingTableStatus.availableForCollection) {
            let l = 1;
            if (!(e.state.itemCrafterCharacterId === (0, f.default)()) && e.options.useCrafterCollectionAdvantage) {
                const m = e.state.itemFinishesCraftingAt + 1000 * h.default.secondsAdvantage,
                    n = Math.ceil((m - e.default.session.gameTime) / 1000);
                n < 1 ? l = 1 : (e.refetchInteractionTimeout = window.setTimeout(() => {
                    k(e);
                }, 250), l = n);
            }
            e.interactiveZones.setInfo({
                message: `Collect ${ (0, j.default)(e.state.itemId, e.state.itemAmount) }`,
                allowedToInteract: !0,
                duration: l
            }), e.interactiveZones.onInteraction = () => {
                e.callbackHelper.collect();
            };
        } else
            e.state.status === i.CraftingTableStatus.idle ? e.interactiveZones.setInfo({
                message: (0, d.CapitalizeFirstLetter)(g.default.baseVerb(e.options.style)),
                allowedToInteract: !0
            }) : e.interactiveZones.setInfo({
                message: `${ (0, d.CapitalizeFirstLetter)(g.default.preparing(e.options.style)) } ${ (0, j.default)(e.state.itemId, e.state.itemAmount) }`,
                action: 'to check status',
                allowedToInteract: !0
            }), e.interactiveZones.onInteraction = () => {
                e.openDeviceUI();
            };
    };
    var _l = k;
}), a.register('o2gEf', function(b, c) {
    e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('qVhMZ'),
        e = a('4HzlY');
    const f = e => e === e.CraftingTableStyle.plant ? 'plant' : e === e.CraftingTableStyle.craft ? 'craft' : 'purchase';
    var _g = {
        noItems: e => `No items currently available to ${ f(e) }.`,
        selectItem: e => `Select an item to ${ f(e) }...`,
        availableToCraft: e => `Available To ${ (0, d.CapitalizeFirstLetter)(f(e)) }`,
        instantNote: e => e === e.CraftingTableStyle.store ? 'Available immediately' : e === e.CraftingTableStyle.plant ? 'Grows instantly' : 'Crafts instantly',
        durationNote: e => b => b === e.CraftingTableStyle.store ? `Takes ${ e } to prepare` : b === e.CraftingTableStyle.plant ? `Takes ${ e } to grow` : `Takes ${ e } to craft`,
        expireVerb: e => e === e.CraftingTableStyle.plant ? 'goes bad' : 'expires',
        resource: e => e === e.CraftingTableStyle.store ? 'resource' : 'ingredient',
        preparing: e => e === e.CraftingTableStyle.store ? 'preparing' : e === e.CraftingTableStyle.plant ? 'growing' : 'crafting',
        baseVerb: f
    };
}), a.register('r/9Pw', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        secondsAdvantage: 5
    };
}), a.register('SNA6d', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('ZCz9W');
    var _f = (e, b) => {
        let g = (0, e.ItemName)(e) || 'Item';
        return b > 1 && (g += ` (${ (0, d.numberWithCommas)(b) })`), g;
    };
}), a.register('khqvu', function(b, c) {
    e(b.exports, 'default', function() {
        return _o;
    });
    var d = a('iWivW'),
        e = a('2Xvuf'),
        f = a('1f1YX'),
        g = a('07pQo'),
        h = a('mRtJl'),
        i = a('xmEhF'),
        j = a('Rkm/2'),
        k = a('jHkRX'),
        l = a('RQdoU'),
        m = a('PGu2K'),
        n = a('HcCdg');
    var _o = e => {
        const p = e.state.status;
        if (p === i.CraftingTableStatus.idle && ((0, l.default)(e), (0, m.default)(e)), p !== i.CraftingTableStatus.crafting && p !== i.CraftingTableStatus.availableForCollection || (0, j.default)(e), p === i.CraftingTableStatus.availableForCollection && (e.pieces.item && h.default.itemReady.applyItemAnimation(e, e.pieces.item.view), (0, k.default)(e), e.state.itemDisposedAt || (0, m.default)(e), e.cull.isInsideView && !d.default.session.loadingPhase)) {
            Date.now() - e.createdAt > 1500 && ((0, g.playSound)({
                path: (0, e.default)('devices/crafting_table/complete.mp3'),
                volume: (0, f.getVolume)({
                    volume: 0.4,
                    type: f.SoundType.soundEffect
                })
            }), e.particles.burst());
        }
        e.deviceUI.update({
            status: e.state.status
        }), (0, n.default)(e);
    };
}), a.register('RQdoU', function(b, c) {
    e(b.exports, 'default', function() {
        return _e;
    });
    var d = a('mRtJl');
    var _e = e => {
        if (e.pieces.item) {
            const f = e.pieces.item;
            e.pieces.item = void 0, e.tweens.add({
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
        if (e.pieces.itemShine) {
            const f = e.pieces.itemShine;
            e.pieces.itemShine = void 0, e.tweens.add({
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
}), a.register('PGu2K', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = e => {
        e.pieces.progressBar.background && e.pieces.progressBar.bar && (e.pieces.progressBar.background.view.destroy(), e.pieces.progressBar.bar.view.destroy(), e.pieces.progressBar.background = void 0, e.pieces.progressBar.bar = void 0);
    };
}), a.register('8MR73', function(b, c) {
    e(b.exports, 'default', function() {
        return _k;
    });
    var d = a('fe6E3'),
        e = a('vye/m'),
        f = a('qMN8v'),
        g = a('s21gJ'),
        h = a('NPbcp'),
        i = a('xmEhF'),
        j = a('cPxnw');
    var _k = e => {
        if (e.cull.isInsideView) {
            if (e.state.status === i.CraftingTableStatus.crafting) {
                var l, m, n;
                const o = e.state.itemFinishesCraftingAt - e.state.craftingDurationMs,
                    p = ((0, e.GetServerGameTimeWithCompensation)() - o) / e.state.craftingDurationMs;
                (0, j.default)({
                    device: e,
                    completion: p,
                    color: h.default.progressColor
                });
                const q = (0, d.clamp)(p, 0.25, 1);
                null === (l = e.pieces) || void 0 === l || null === (m = l.item) || void 0 === m || null === (n = m.view) || void 0 === n || n.setAlpha(q);
            }
            var l, m, n, o, p;
            if (e.state.status === i.CraftingTableStatus.availableForCollection)
                if (null === (l = e.pieces) || void 0 === l || null === (m = l.item) || void 0 === m || null === (n = m.view) || void 0 === n || n.setAlpha(1), e.state.itemDisposedAt) {
                    const q = e.state.itemDisposedAt - e.state.itemDisposalMs,
                        r = 1 - ((0, e.GetServerGameTimeWithCompensation)() - q) / e.state.itemDisposalMs;
                    (0, j.default)({
                        device: e,
                        completion: r,
                        color: h.default.expirationColor
                    });
                }
            if (e.itemIsOutlined)
                if (!e.interactivity.withinBounds || e.state.status !== i.CraftingTableStatus.availableForCollection)
                    e.itemIsOutlined = !1, (null === (o = e.pieces) || void 0 === o ? void 0 : o.item) && (0, g.RemoveOutline)({
                        view: e.pieces.item.view
                    });
            if (e.interactivity.withinBounds)
                e.state.status === i.CraftingTableStatus.availableForCollection && !e.itemIsOutlined && (null === (p = e.pieces.item) || void 0 === p ? void 0 : p.view) && (e.itemIsOutlined = !0, (0, f.AddOutline)({
                    view: e.pieces.item.view
                }));
        }
    };
}), a.register('qMN8v', function(b, c) {
    e(b.exports, 'AddOutline', function() {
        return _e;
    });
    var d = a('D5xLI');
    const _e = e => {
        if (!e.view || !e.view.active)
            return;
        const f = {
                thickness: 2
            },
            g = e.options ? {
                ...f,
                ...e.options
            } : {
                ...f
            };
        (0, d.default)().plugins.get('rexOutlinePipeline').add(e.view, g);
    };
}), a.register('s21gJ', function(b, c) {
    e(b.exports, 'RemoveOutline', function() {
        return _e;
    });
    var d = a('D5xLI');
    const _e = e => {
        e.view && (0, d.default)().plugins.get('rexOutlinePipeline').remove(e.view);
    };
}), a.register('NPbcp', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('JEGzD'),
        e = a('4HzlY');
    var _f = {
        width: 55,
        height: 12,
        backgroundColor: 16777215,
        borderColor: 2503224,
        borderWidth: 5,
        progressColor: 4431943,
        expirationColor: 15092249,
        yOffset: e => e.options.style === e.CraftingTableStyle.plant ? 70 : (0, d.isPlatformer)() ? -75 : 85
    };
}), a.register('cPxnw', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('NPbcp'),
        e = a('dPJ87');
    var _f = e => {
        const {
            device: g,
            completion: h
        } = e;
        g.pieces.progressBar.bar && g.pieces.progressBar.background || (0, e.default)(g), g.pieces.progressBar.bar.updateFillColor({
            color: e.color,
            blockRedraw: !0
        }), g.pieces.progressBar.bar.updateDimensions({
            height: d.default.height,
            width: d.default.width * h
        }), g.pieces.progressBar.bar.view.setX(g.x - (d.default.width - d.default.width * h) / 2);
    };
}), a.register('dPJ87', function(b, c) {
    e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('mRtJl'),
        e = a('NPbcp'),
        f = a('MLszK');
    var _g = e => {
        e.pieces.progressBar.background && e.pieces.progressBar.background.destroy(), e.pieces.progressBar.bar && e.pieces.progressBar.bar.destroy(), e.pieces.progressBar.background = e.parts.add.rect({
            width: e.default.width,
            height: e.default.height,
            y: e.default.yOffset(e),
            color: e.default.backgroundColor,
            borderColor: e.default.borderColor,
            borderWidth: e.default.borderWidth,
            borderAlpha: 1,
            layerId: (0, f.GetCraftingTableDeviceLayer)(e)
        }), e.pieces.progressBar.bar = e.parts.add.rect({
            width: e.default.width,
            height: e.default.height,
            y: e.default.yOffset(e),
            color: e.default.progressColor,
            layerId: (0, f.GetCraftingTableDeviceLayer)(e)
        }), e.pieces.progressBar.background.view.setScale(0), e.pieces.progressBar.bar.view.setAlpha(0), e.tweens.add({
            targets: e.pieces.progressBar.background.view,
            scale: 1,
            duration: d.default.itemCreated.duration,
            ease: d.default.itemCreated.ease,
            onComplete: () => {
                var h;
                (null === (h = e.pieces.progressBar.bar) || void 0 === h ? void 0 : h.view) && e.pieces.progressBar.bar.view.setAlpha(1);
            }
        });
    };
});