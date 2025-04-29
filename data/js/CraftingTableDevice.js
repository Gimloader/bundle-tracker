function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('eQ3Wk', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _s;
    });
    var g = c('s/YA9'),
        h = c('ltxDW'),
        i = c('+LMgx'),
        j = c('oqNjq'),
        k = c('RD3Zp'),
        l = c('f+H4j'),
        m = c('jfPoa'),
        n = c('fwV+d'),
        o = c('X0Sl3'),
        p = c('5WfaH'),
        q = c('rtb8e');
    class r extends h.default {
        constructor(s) {
            super(s), (0, g.default)(this, 'pieces', {
                progressBar: {}
            }), (0, g.default)(this, 'interactivity', {
                withinBounds: !1
            }), (0, g.default)(this, 'itemIsOutlined', !1), (0, g.default)(this, 'openDeviceUI', () => {
                (0, m.default)(this);
            }), (0, g.default)(this, 'onStateChange', s => {
                (0, o.default)(s, this);
            }), (0, g.default)(this, 'onUpdate', () => {
                (0, q.default)(this);
            }), (0, g.default)(this, 'onDestroy', () => {
                this.particles.destroy(), this.refetchInteractionTimeout && window.clearTimeout(this.refetchInteractionTimeout);
            }), this.createdAt = Date.now(), (0, k.CraftingTableCreateCollider)(this), this.callbackHelper = new(0, i.default)(this), this.particles = new(0, j.default)(this), (0, n.CraftingTableDeviceSetupInteractionRadius)(this), (0, l.default)(this), (0, p.default)(this), this.interactiveZones.onInteractiveCb = () => {
                this.interactivity.withinBounds = !0;
            }, this.interactiveZones.onNonInteractive = () => {
                this.interactivity.withinBounds = !1;
            };
        }
    }
    var _s = r;
}), c.register('+LMgx', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('s/YA9'),
        g = c('1D09i'),
        h = c('3jaMj'),
        i = c('UaUBz0'),
        j = c('CbU7r'),
        k = c('cgeyf0');
    var _l = class {
        constructor(m) {
            (0, f.default)(this, 'craft', m => {
                this.device.sendToServerDevice(g.Messages.craft, {
                    recipe: m
                });
                const n = (0, k.default)(m);
                n && n.timeToCraftMs > 0 && (0, h.playSound)({
                    path: (0, i.default)('devices/crafting_table/appear.mp3'),
                    volume: (0, j.getVolume)({
                        volume: 0.35,
                        type: j.SoundType.soundEffect
                    })
                });
            }), (0, f.default)(this, 'collect', () => {
                this.device.sendToServerDevice(g.Messages.collect), (0, h.playSound)({
                    path: (0, i.default)('sounds/core/collectItem.mp3'),
                    volume: (0, j.getVolume)({
                        volume: 0.7,
                        type: j.SoundType.soundEffect
                    })
                });
            }), this.device = m;
        }
    };
}), c.register('1D09i', function(d, e) {
    let f;
    var g;
    a(d.exports, 'Messages', function() {
        return f;
    }), (g = f || (f = {})).craft = 'craft', g.collect = 'collect';
}), c.register('cgeyf0', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('fI6of');
    var _g = a => {
        const h = f.default.world.devices.devices.get(a);
        if (!h)
            return null;
        const i = h.options,
            j = new Map(),
            k = a => i.numberOfIngredients >= a,
            l = (a, h) => {
                const m = j.get(a);
                m ? m.amount += h : j.set(a, {
                    item: a,
                    amount: h
                });
            };
        k(1) && l(i.ingredient1Item, i.ingredient1Amount), k(2) && l(i.ingredient2Item, i.ingredient2Amount), k(3) && l(i.ingredient3Item, i.ingredient3Amount), k(4) && l(i.ingredient4Item, i.ingredient4Amount), k(5) && l(i.ingredient5Item, i.ingredient5Amount);
        return {
            id: a,
            itemId: i.item,
            itemAmount: i.itemAmount,
            ingredients: Array.from(j.values()),
            timeToCraftMs: i.timeToCraftMs,
            timeToDisposeMs: i.itemDisposes ? i.disposeItemAfterMs : 0
        };
    };
}), c.register('oqNjq', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('s/YA9'),
        g = c('ddhGF'),
        h = c('UaUBz0'),
        i = c('k/JOU'),
        j = c('UkCpC');
    var _k = class {
        constructor(l) {
            (0, f.default)(this, 'burst', () => {
                this.emitter && (this.emitter.setDepth(this.device.getMaxDepth() + 1), this.emitter.explode(50));
            }), (0, f.default)(this, 'destroy', () => {
                this.emitter && this.emitter.destroy(!0);
            }), (0, f.default)(this, 'load', () => {
                if (!(0, j.InGamePhase)())
                    return;
                const m = (0, h.default)('devices/crafting_table/particle.png');
                (0, i.default)({
                    key: m,
                    url: m,
                    onLoad: () => {
                        this.device.isDestroyed || (this.emitter = this.device.scene.add.particles(this.device.x, this.device.y, m, {
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
                            blendMode: b(g).BlendModes.SCREEN,
                            emitting: !1,
                            lifespan: 1000,
                            gravityY: 250
                        }));
                    }
                });
            }), this.device = l;
        }
    };
}), c.register('RD3Zp', function(d, e) {
    a(d.exports, 'CraftingTableCreateCollider', function() {
        return _h;
    });
    var f = c('UCu0V'),
        g = c('FqwHz0');
    const _h = a => {
        a.options.style === g.CraftingTableStyle.craft && ((0, f.isTopDown)() ? a.colliders.add.box({
            x: 0,
            y: 13,
            w: 105,
            h: 70
        }) : (0, f.isPlatformer)() && (a.colliders.add.box({
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
}), c.register('FqwHz0', function(d, e) {
    let f;
    var g;
    a(d.exports, 'CraftingTableStyle', function() {
        return f;
    }), (g = f || (f = {})).plant = 'plant', g.craft = 'craft', g.store = 'store';
}), c.register('f+H4j', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('UaUBz0'),
        g = c('ktWA02'),
        h = c('H4eGM'),
        i = c('UCu0V'),
        j = c('FqwHz0'),
        k = c('P9ORi0'),
        l = c('T7Qf7'),
        m = c('o/FZF'),
        n = c('XOtRw');
    var _o = a => {
        const {
            key: p,
            url: q,
            displayWidth: r,
            y: s,
            originY: t
        } = (a => a.options.style === j.CraftingTableStyle.plant ? {
            key: 'crafting-table-plant',
            url: (0, f.default)('/devices/crafting_table/dirt.png'),
            displayWidth: 120
        } : {
            key: 'crafting-table',
            url: (0, f.default)('/devices/crafting_table/table.png'),
            displayWidth: 110,
            originY: 1,
            y: 67
        })(a);
        a.pieces.base = a.parts.add.sprite({
            imageId: p,
            imageUrl: q,
            originY: null != t ? t : 0.5,
            y: null != s ? s : 0,
            layerId: (0, n.GetCraftingTableDeviceLayer)(a),
            depthChange: (0, h.default)(1),
            onReady: a => {
                const u = (0, g.default)({
                    height: a.view.displayHeight,
                    width: a.view.displayWidth,
                    newWidth: r
                });
                a.view.setDisplaySize(u.width, u.height);
            }
        }), a.options.style === j.CraftingTableStyle.craft && (0, i.isTopDown)() && a.shadows.add({
            r1: 70,
            r2: 30,
            y: 52
        }), a.state.status !== k.CraftingTableStatus.idle && ((0, l.default)(a), a.state.status === k.CraftingTableStatus.availableForCollection && (0, m.default)(a)), a.particles.load();
    };
}), c.register('ktWA02', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = a => {
        const g = a.newWidth / a.width;
        return {
            height: a.height * g,
            width: a.width * g
        };
    };
}), c.register('P9ORi0', function(d, e) {
    let f;
    var g;
    a(d.exports, 'CraftingTableStatus', function() {
        return f;
    }), (g = f || (f = {})).idle = 'idle', g.crafting = 'crafting', g.availableForCollection = 'availableForCollection';
}), c.register('T7Qf7', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('2jYaV'),
        g = c('H4eGM'),
        h = c('256sH'),
        i = c('QD/pD'),
        j = c('d4acJ'),
        k = c('P9ORi0'),
        l = c('XOtRw');
    var _m = a => {
        if (!a.state.itemId)
            return;
        const n = (0, h.default)(a.state.itemId);
        if (n) {
            if (a.pieces.item) {
                if (a.pieces.item.view.texture.key === n.previewImage)
                    return;
                a.pieces.item.destroy(), a.pieces.item = void 0;
            }
            a.pieces.item = a.parts.add.sprite({
                imageId: n.previewImage,
                imageUrl: n.previewImage,
                layerId: (0, l.GetCraftingTableDeviceLayer)(a),
                onReady: n => {
                    n.view.setDepth(a.getMaxDepth() + (0, g.default)(1));
                    const o = a.state.status === k.CraftingTableStatus.availableForCollection;
                    n.view.alpha = o ? 1 : 0;
                    const p = (0, f.default)({
                        width: n.view.displayWidth,
                        newWidth: j.default.width
                    });
                    if (n.view.setScale(p), o)
                        return void i.default.itemReady.applyItemAnimation(a, n.view);
                    const q = Number(n.view.scale);
                    n.view.scale = 0, a.tweens.add({
                        targets: n.view,
                        scale: q,
                        duration: i.default.itemCreated.duration,
                        ease: i.default.itemCreated.ease
                    });
                }
            });
        }
    };
}), c.register('2jYaV', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = a => a.newWidth / a.width;
}), c.register('QD/pD', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('ddhGF');
    var _g = {
        itemCreated: {
            duration: 250,
            ease: b(f).Math.Easing.Quadratic.Out
        },
        itemDestroyed: {
            duration: 200,
            ease: b(f).Math.Easing.Sine.Out
        },
        itemReady: {
            applyItemAnimation: (a, c) => {
                const h = c.scale;
                a.tweens.add({
                    targets: c,
                    scale: {
                        from: h,
                        to: 1.1 * h
                    },
                    duration: 1000,
                    ease: b(f).Math.Easing.Sine.Out,
                    yoyo: !0,
                    repeat: -1
                });
            },
            applyShineAnimation: (a, c) => {
                a.tweens.add({
                    targets: c,
                    alpha: 0.25,
                    duration: 500,
                    ease: b(f).Math.Easing.Sine.In,
                    yoyo: !0,
                    repeat: -1
                });
            }
        }
    };
}), c.register('d4acJ', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        width: 60
    };
}), c.register('XOtRw', function(d, e) {
    a(d.exports, 'GetCraftingTableDeviceLayer', function() {
        return _i;
    });
    var f = c('GIe9o'),
        g = c('UCu0V'),
        h = c('FqwHz0');
    const _i = a => (0, g.isPlatformer)() ? a.layers.getLayer() : a.options.style == h.CraftingTableStyle.plant ? f.default.DevicesUnderCharacters : f.default.DepthSortedCharactersAndDevices;
}), c.register('o/FZF', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('ddhGF'),
        g = c('2jYaV'),
        h = c('H4eGM'),
        i = c('256sH'),
        j = c('QD/pD'),
        k = c('d4acJ'),
        l = c('XOtRw');
    var _m = a => {
        const n = a.state.itemId;
        if (!n)
            return;
        const o = (0, i.default)(n);
        o && (a.pieces.itemShine && (a.pieces.itemShine.destroy(), a.pieces.itemShine = null), a.pieces.itemShine = a.parts.add.sprite({
            imageId: o.previewImage,
            imageUrl: o.previewImage,
            layerId: (0, l.GetCraftingTableDeviceLayer)(a),
            onReady: n => {
                n.view.setDepth(a.getMaxDepth() + (0, h.default)(2));
                const p = (0, g.default)({
                    width: n.view.displayWidth,
                    newWidth: k.default.width
                });
                n.view.setScale(p), n.view.alpha = 0, n.view.blendMode = b(f).BlendModes.ADD, j.default.itemReady.applyShineAnimation(a, n.view);
            }
        }));
    };
}), c.register('jfPoa', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = a => {
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
}), c.register('fwV+d', function(d, e) {
    a(d.exports, 'CraftingTableDeviceSetupInteractionRadius', function() {
        return _g;
    });
    var f = c('FqwHz0');
    const _g = a => {
        const {
            style: h
        } = a.options;
        h !== f.CraftingTableStyle.plant ? a.interactiveZones.add.circle({
            r: 120,
            y: 10
        }) : a.interactiveZones.add.circle({
            r: 100
        });
    };
}), c.register('X0Sl3', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('5WfaH'),
        g = c('CbxD8');
    var _h = (a, d) => {
        'status' === a && (0, g.default)(d), 'itemId' === a && (d.deviceUI.update({
            item: d.state.itemId
        }), (0, f.default)(d)), 'craftingDurationMs' === a && d.deviceUI.update({
            craftingDurationMs: d.state.craftingDurationMs
        }), 'itemFinishesCraftingAt' === a && d.deviceUI.update({
            itemFinishesCraftingAt: d.state.itemFinishesCraftingAt
        }), 'itemAmount' === a && d.deviceUI.update({
            itemAmount: d.state.itemAmount
        }), 'itemDisposedAt' === a && d.deviceUI.update({
            itemDisposedAt: d.state.itemDisposedAt
        }), 'itemDisposalMs' === a && d.deviceUI.update({
            itemDisposalMs: d.state.itemDisposalMs
        }), 'itemCrafterCharacterId' === a && d.deviceUI.update({
            itemCrafterCharacterId: d.state.itemCrafterCharacterId
        });
    };
}), c.register('5WfaH', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('Q6LQJ'),
        g = c('fI6of'),
        h = c('5Fjxs'),
        i = c('45kGo0'),
        j = c('DhD8i0'),
        k = c('P9ORi0'),
        l = c('OB2Ky0');
    const m = a => {
        if (a.state.status === k.CraftingTableStatus.availableForCollection) {
            let n = 1;
            if (!(a.state.itemCrafterCharacterId === (0, h.default)()) && a.options.useCrafterCollectionAdvantage) {
                const o = a.state.itemFinishesCraftingAt + 1000 * j.default.secondsAdvantage,
                    p = Math.ceil((o - g.default.session.gameTime) / 1000);
                p < 1 ? n = 1 : (a.refetchInteractionTimeout = window.setTimeout(() => {
                    m(a);
                }, 250), n = p);
            }
            a.interactiveZones.setInfo({
                message: `Collect ${ (0, l.default)(a.state.itemId, a.state.itemAmount) }`,
                allowedToInteract: !0,
                duration: n
            }), a.interactiveZones.onInteraction = () => {
                a.callbackHelper.collect();
            };
        } else
            a.state.status === k.CraftingTableStatus.idle ? a.interactiveZones.setInfo({
                message: (0, f.CapitalizeFirstLetter)(i.default.baseVerb(a.options.style)),
                allowedToInteract: !0
            }) : a.interactiveZones.setInfo({
                message: `${ (0, f.CapitalizeFirstLetter)(i.default.preparing(a.options.style)) } ${ (0, l.default)(a.state.itemId, a.state.itemAmount) }`,
                action: 'to check status',
                allowedToInteract: !0
            }), a.interactiveZones.onInteraction = () => {
                a.openDeviceUI();
            };
    };
    var _n = m;
}), c.register('45kGo0', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('Q6LQJ'),
        g = c('FqwHz0');
    const h = a => a === g.CraftingTableStyle.plant ? 'plant' : a === g.CraftingTableStyle.craft ? 'craft' : 'purchase';
    var _i = {
        noItems: a => `No items currently available to ${ h(a) }.`,
        selectItem: a => `Select an item to ${ h(a) }...`,
        availableToCraft: a => `Available To ${ (0, f.CapitalizeFirstLetter)(h(a)) }`,
        instantNote: a => a === g.CraftingTableStyle.store ? 'Available immediately' : a === g.CraftingTableStyle.plant ? 'Grows instantly' : 'Crafts instantly',
        durationNote: a => d => d === g.CraftingTableStyle.store ? `Takes ${ a } to prepare` : d === g.CraftingTableStyle.plant ? `Takes ${ a } to grow` : `Takes ${ a } to craft`,
        expireVerb: a => a === g.CraftingTableStyle.plant ? 'goes bad' : 'expires',
        resource: a => a === g.CraftingTableStyle.store ? 'resource' : 'ingredient',
        preparing: a => a === g.CraftingTableStyle.store ? 'preparing' : a === g.CraftingTableStyle.plant ? 'growing' : 'crafting',
        baseVerb: h
    };
}), c.register('DhD8i0', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        secondsAdvantage: 5
    };
}), c.register('OB2Ky0', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('quE27'),
        g = c('G0Kso');
    var _h = (a, d) => {
        let i = (0, g.ItemName)(a) || 'Item';
        return d > 1 && (i += ` (${ (0, f.numberWithCommas)(d) })`), i;
    };
}), c.register('CbxD8', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('fI6of'),
        g = c('UaUBz0'),
        h = c('CbU7r'),
        i = c('3jaMj'),
        j = c('QD/pD'),
        k = c('P9ORi0'),
        l = c('T7Qf7'),
        m = c('o/FZF'),
        n = c('fDMjN'),
        o = c('mEz9t'),
        p = c('5WfaH');
    var _q = a => {
        const r = a.state.status;
        if (r === k.CraftingTableStatus.idle && ((0, n.default)(a), (0, o.default)(a)), r !== k.CraftingTableStatus.crafting && r !== k.CraftingTableStatus.availableForCollection || (0, l.default)(a), r === k.CraftingTableStatus.availableForCollection && (a.pieces.item && j.default.itemReady.applyItemAnimation(a, a.pieces.item.view), (0, m.default)(a), a.state.itemDisposedAt || (0, o.default)(a), a.cull.isInsideView && !f.default.session.loadingPhase)) {
            Date.now() - a.createdAt > 1500 && ((0, i.playSound)({
                path: (0, g.default)('devices/crafting_table/complete.mp3'),
                volume: (0, h.getVolume)({
                    volume: 0.4,
                    type: h.SoundType.soundEffect
                })
            }), a.particles.burst());
        }
        a.deviceUI.update({
            status: a.state.status
        }), (0, p.default)(a);
    };
}), c.register('fDMjN', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('QD/pD');
    var _g = a => {
        if (a.pieces.item) {
            const h = a.pieces.item;
            a.pieces.item = void 0, a.tweens.add({
                targets: h.view,
                scale: 0,
                opacity: 0.5,
                duration: f.default.itemDestroyed.duration,
                ease: f.default.itemDestroyed.ease,
                onComplete: () => {
                    h.destroy();
                }
            });
        }
        if (a.pieces.itemShine) {
            const h = a.pieces.itemShine;
            a.pieces.itemShine = void 0, a.tweens.add({
                targets: h.view,
                scale: 0,
                opacity: 0.5,
                duration: f.default.itemDestroyed.duration,
                ease: f.default.itemDestroyed.ease,
                onComplete: () => {
                    h.destroy();
                }
            });
        }
    };
}), c.register('mEz9t', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = a => {
        a.pieces.progressBar.background && a.pieces.progressBar.bar && (a.pieces.progressBar.background.view.destroy(), a.pieces.progressBar.bar.view.destroy(), a.pieces.progressBar.background = void 0, a.pieces.progressBar.bar = void 0);
    };
}), c.register('rtb8e', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('9zaF+'),
        g = c('w+fxX'),
        h = c('vRyCf'),
        i = c('39l0B'),
        j = c('5I7eZ'),
        k = c('P9ORi0'),
        l = c('Il9Vc');
    var _m = a => {
        if (a.cull.isInsideView) {
            if (a.state.status === k.CraftingTableStatus.crafting) {
                var n, o, p;
                const q = a.state.itemFinishesCraftingAt - a.state.craftingDurationMs,
                    r = ((0, g.GetServerGameTimeWithCompensation)() - q) / a.state.craftingDurationMs;
                (0, l.default)({
                    device: a,
                    completion: r,
                    color: j.default.progressColor
                });
                const s = (0, f.clamp)(r, 0.25, 1);
                null === (n = a.pieces) || void 0 === n || null === (o = n.item) || void 0 === o || null === (p = o.view) || void 0 === p || p.setAlpha(s);
            }
            var n, o, p, q, r;
            if (a.state.status === k.CraftingTableStatus.availableForCollection)
                if (null === (n = a.pieces) || void 0 === n || null === (o = n.item) || void 0 === o || null === (p = o.view) || void 0 === p || p.setAlpha(1), a.state.itemDisposedAt) {
                    const s = a.state.itemDisposedAt - a.state.itemDisposalMs,
                        t = 1 - ((0, g.GetServerGameTimeWithCompensation)() - s) / a.state.itemDisposalMs;
                    (0, l.default)({
                        device: a,
                        completion: t,
                        color: j.default.expirationColor
                    });
                }
            if (a.itemIsOutlined)
                if (!a.interactivity.withinBounds || a.state.status !== k.CraftingTableStatus.availableForCollection)
                    a.itemIsOutlined = !1, (null === (q = a.pieces) || void 0 === q ? void 0 : q.item) && (0, i.RemoveOutline)({
                        view: a.pieces.item.view
                    });
            if (a.interactivity.withinBounds)
                a.state.status === k.CraftingTableStatus.availableForCollection && !a.itemIsOutlined && (null === (r = a.pieces.item) || void 0 === r ? void 0 : r.view) && (a.itemIsOutlined = !0, (0, h.AddOutline)({
                    view: a.pieces.item.view
                }));
        }
    };
}), c.register('vRyCf', function(d, e) {
    a(d.exports, 'AddOutline', function() {
        return _g;
    });
    var f = c('heTaO');
    const _g = a => {
        if (!a.view || !a.view.active)
            return;
        const h = {
                thickness: 2
            },
            i = a.options ? {
                ...h,
                ...a.options
            } : {
                ...h
            };
        (0, f.default)().plugins.get('rexOutlinePipeline').add(a.view, i);
    };
}), c.register('39l0B', function(d, e) {
    a(d.exports, 'RemoveOutline', function() {
        return _g;
    });
    var f = c('heTaO');
    const _g = a => {
        a.view && (0, f.default)().plugins.get('rexOutlinePipeline').remove(a.view);
    };
}), c.register('5I7eZ', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('UCu0V'),
        g = c('FqwHz0');
    var _h = {
        width: 55,
        height: 12,
        backgroundColor: 16777215,
        borderColor: 2503224,
        borderWidth: 5,
        progressColor: 4431943,
        expirationColor: 15092249,
        yOffset: a => a.options.style === g.CraftingTableStyle.plant ? 70 : (0, f.isPlatformer)() ? -75 : 85
    };
}), c.register('Il9Vc', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('5I7eZ'),
        g = c('Y5Nzt');
    var _h = a => {
        const {
            device: i,
            completion: j
        } = a;
        i.pieces.progressBar.bar && i.pieces.progressBar.background || (0, g.default)(i), i.pieces.progressBar.bar.updateFillColor({
            color: a.color,
            blockRedraw: !0
        }), i.pieces.progressBar.bar.updateDimensions({
            height: f.default.height,
            width: f.default.width * j
        }), i.pieces.progressBar.bar.view.setX(i.x - (f.default.width - f.default.width * j) / 2);
    };
}), c.register('Y5Nzt', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('QD/pD'),
        g = c('5I7eZ'),
        h = c('XOtRw');
    var _i = a => {
        a.pieces.progressBar.background && a.pieces.progressBar.background.destroy(), a.pieces.progressBar.bar && a.pieces.progressBar.bar.destroy(), a.pieces.progressBar.background = a.parts.add.rect({
            width: g.default.width,
            height: g.default.height,
            y: g.default.yOffset(a),
            color: g.default.backgroundColor,
            borderColor: g.default.borderColor,
            borderWidth: g.default.borderWidth,
            borderAlpha: 1,
            layerId: (0, h.GetCraftingTableDeviceLayer)(a)
        }), a.pieces.progressBar.bar = a.parts.add.rect({
            width: g.default.width,
            height: g.default.height,
            y: g.default.yOffset(a),
            color: g.default.progressColor,
            layerId: (0, h.GetCraftingTableDeviceLayer)(a)
        }), a.pieces.progressBar.background.view.setScale(0), a.pieces.progressBar.bar.view.setAlpha(0), a.tweens.add({
            targets: a.pieces.progressBar.background.view,
            scale: 1,
            duration: f.default.itemCreated.duration,
            ease: f.default.itemCreated.ease,
            onComplete: () => {
                var j;
                (null === (j = a.pieces.progressBar.bar) || void 0 === j ? void 0 : j.view) && a.pieces.progressBar.bar.view.setAlpha(1);
            }
        });
    };
});