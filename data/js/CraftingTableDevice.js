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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _s;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....');
    class r extends h.default {
        constructor(s) {
            super(s), (0, g.default)(this, 'pieces', { progressBar: {} }), (0, g.default)(this, 'interactivity', { withinBounds: !1 }), (0, g.default)(this, 'itemIsOutlined', !1), (0, g.default)(this, 'openDeviceUI', () => {
                (0, m.default)(this);
            }), (0, g.default)(this, 'onStateChange', t => {
                (0, o.default)(t, this);
            }), (0, g.default)(this, 'onUpdate', () => {
                (0, q.default)(this);
            }), (0, g.default)(this, 'onDestroy', () => {
                this.particles.destroy(), this.refetchInteractionTimeout && window.clearTimeout(this.refetchInteractionTimeout);
            }), this.createdAt = Date.now(), (0, k.CraftingTableCreateCollider)(this), this.callbackHelper = new (0, i.default)(this), this.particles = new (0, j.default)(this), (0, n.CraftingTableDeviceSetupInteractionRadius)(this), (0, l.default)(this), (0, p.default)(this), this.interactiveZones.onInteractiveCb = () => {
                this.interactivity.withinBounds = !0;
            }, this.interactiveZones.onNonInteractive = () => {
                this.interactivity.withinBounds = !1;
            };
        }
    }
    var _s = r;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    var _l = class {
        constructor(m) {
            (0, f.default)(this, 'craft', n => {
                this.device.sendToServerDevice(g.Messages.craft, { recipe: n });
                const o = (0, k.default)(n);
                o && o.timeToCraftMs > 0 && (0, h.playSound)({
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
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'Messages', function () {
        return f;
    }), (g = f || (f = {})).craft = 'craft', g.collect = 'collect';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const i = f.default.world.devices.devices.get(h);
        if (!i)
            return null;
        const j = i.options, k = new Map(), l = m => j.numberOfIngredients >= m, m = (n, o) => {
                const p = k.get(n);
                p ? p.amount += o : k.set(n, {
                    item: n,
                    amount: o
                });
            };
        l(1) && m(j.ingredient1Item, j.ingredient1Amount), l(2) && m(j.ingredient2Item, j.ingredient2Amount), l(3) && m(j.ingredient3Item, j.ingredient3Amount), l(4) && m(j.ingredient4Item, j.ingredient4Amount), l(5) && m(j.ingredient5Item, j.ingredient5Amount);
        return {
            id: h,
            itemId: j.item,
            itemAmount: j.itemAmount,
            ingredients: Array.from(k.values()),
            timeToCraftMs: j.timeToCraftMs,
            timeToDisposeMs: j.itemDisposes ? j.disposeItemAfterMs : 0
        };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'CraftingTableCreateCollider', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = i => {
        i.options.style === g.CraftingTableStyle.craft && ((0, f.isTopDown)() ? i.colliders.add.box({
            x: 0,
            y: 13,
            w: 105,
            h: 70
        }) : (0, f.isPlatformer)() && (i.colliders.add.box({
            x: 0,
            y: 0,
            w: 105,
            h: 92
        }), i.colliders.add.box({
            x: -39,
            y: 56,
            w: 14,
            h: 24
        }), i.colliders.add.box({
            x: 38,
            y: 56,
            w: 14,
            h: 24
        })));
    };
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'CraftingTableStyle', function () {
        return f;
    }), (g = f || (f = {})).plant = 'plant', g.craft = 'craft', g.store = 'store';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    var _o = p => {
        const {
            key: q,
            url: r,
            displayWidth: s,
            y: t,
            originY: u
        } = (v => v.options.style === j.CraftingTableStyle.plant ? {
            key: 'crafting-table-plant',
            url: (0, f.default)('/devices/crafting_table/dirt.png'),
            displayWidth: 120
        } : {
            key: 'crafting-table',
            url: (0, f.default)('/devices/crafting_table/table.png'),
            displayWidth: 110,
            originY: 1,
            y: 67
        })(p);
        p.pieces.base = p.parts.add.sprite({
            imageId: q,
            imageUrl: r,
            originY: null != u ? u : 0.5,
            y: null != t ? t : 0,
            layerId: (0, n.GetCraftingTableDeviceLayer)(p),
            depthChange: (0, h.default)(1),
            onReady: v => {
                const w = (0, g.default)({
                    height: v.view.displayHeight,
                    width: v.view.displayWidth,
                    newWidth: s
                });
                v.view.setDisplaySize(w.width, w.height);
            }
        }), p.options.style === j.CraftingTableStyle.craft && (0, i.isTopDown)() && p.shadows.add({
            r1: 70,
            r2: 30,
            y: 52
        }), p.state.status !== k.CraftingTableStatus.idle && ((0, l.default)(p), p.state.status === k.CraftingTableStatus.availableForCollection && (0, m.default)(p)), p.particles.load();
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => {
        const h = g.newWidth / g.width;
        return {
            height: g.height * h,
            width: g.width * h
        };
    };
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'CraftingTableStatus', function () {
        return f;
    }), (g = f || (f = {})).idle = 'idle', g.crafting = 'crafting', g.availableForCollection = 'availableForCollection';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = n => {
        if (!n.state.itemId)
            return;
        const o = (0, h.default)(n.state.itemId);
        if (o) {
            if (n.pieces.item) {
                if (n.pieces.item.view.texture.key === o.previewImage)
                    return;
                n.pieces.item.destroy(), n.pieces.item = void 0;
            }
            n.pieces.item = n.parts.add.sprite({
                imageId: o.previewImage,
                imageUrl: o.previewImage,
                layerId: (0, l.GetCraftingTableDeviceLayer)(n),
                onReady: p => {
                    p.view.setDepth(n.getMaxDepth() + (0, g.default)(1));
                    const q = n.state.status === k.CraftingTableStatus.availableForCollection;
                    p.view.alpha = q ? 1 : 0;
                    const r = (0, f.default)({
                        width: p.view.displayWidth,
                        newWidth: j.default.width
                    });
                    if (p.view.setScale(r), q)
                        return void i.default.itemReady.applyItemAnimation(n, p.view);
                    const s = Number(p.view.scale);
                    p.view.scale = 0, n.tweens.add({
                        targets: p.view,
                        scale: s,
                        duration: i.default.itemCreated.duration,
                        ease: i.default.itemCreated.ease
                    });
                }
            });
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => g.newWidth / g.width;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
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
            applyItemAnimation: (h, i) => {
                const j = i.scale;
                h.tweens.add({
                    targets: i,
                    scale: {
                        from: j,
                        to: 1.1 * j
                    },
                    duration: 1000,
                    ease: b(f).Math.Easing.Sine.Out,
                    yoyo: !0,
                    repeat: -1
                });
            },
            applyShineAnimation: (h, i) => {
                h.tweens.add({
                    targets: i,
                    alpha: 0.25,
                    duration: 500,
                    ease: b(f).Math.Easing.Sine.In,
                    yoyo: !0,
                    repeat: -1
                });
            }
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = { width: 60 };
}), c.register('.....', function (d, e) {
    a(d.exports, 'GetCraftingTableDeviceLayer', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const _i = j => (0, g.isPlatformer)() ? j.layers.getLayer() : j.options.style == h.CraftingTableStyle.plant ? f.default.DevicesUnderCharacters : f.default.DepthSortedCharactersAndDevices;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = n => {
        const o = n.state.itemId;
        if (!o)
            return;
        const p = (0, i.default)(o);
        p && (n.pieces.itemShine && (n.pieces.itemShine.destroy(), n.pieces.itemShine = null), n.pieces.itemShine = n.parts.add.sprite({
            imageId: p.previewImage,
            imageUrl: p.previewImage,
            layerId: (0, l.GetCraftingTableDeviceLayer)(n),
            onReady: q => {
                q.view.setDepth(n.getMaxDepth() + (0, h.default)(2));
                const r = (0, g.default)({
                    width: q.view.displayWidth,
                    newWidth: k.default.width
                });
                q.view.setScale(r), q.view.alpha = 0, q.view.blendMode = b(f).BlendModes.ADD, j.default.itemReady.applyShineAnimation(n, q.view);
            }
        }));
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => {
        g.deviceUI.open({
            status: g.state.status,
            style: g.options.style,
            tableGroup: g.options.group,
            craft: g.callbackHelper.craft,
            collect: g.callbackHelper.collect,
            item: g.state.itemId,
            itemAmount: g.state.itemAmount,
            craftingDurationMs: g.state.craftingDurationMs,
            itemFinishesCraftingAt: g.state.itemFinishesCraftingAt,
            itemDisposalMs: g.state.itemDisposalMs,
            itemDisposedAt: g.state.itemDisposedAt,
            itemCrafterCharacterId: g.state.itemCrafterCharacterId,
            useCrafterCollectionAdvantage: g.options.useCrafterCollectionAdvantage
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'CraftingTableDeviceSetupInteractionRadius', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        const {style: i} = h.options;
        i !== f.CraftingTableStyle.plant ? h.interactiveZones.add.circle({
            r: 120,
            y: 10
        }) : h.interactiveZones.add.circle({ r: 100 });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = (i, j) => {
        'status' === i && (0, g.default)(j), 'itemId' === i && (j.deviceUI.update({ item: j.state.itemId }), (0, f.default)(j)), 'craftingDurationMs' === i && j.deviceUI.update({ craftingDurationMs: j.state.craftingDurationMs }), 'itemFinishesCraftingAt' === i && j.deviceUI.update({ itemFinishesCraftingAt: j.state.itemFinishesCraftingAt }), 'itemAmount' === i && j.deviceUI.update({ itemAmount: j.state.itemAmount }), 'itemDisposedAt' === i && j.deviceUI.update({ itemDisposedAt: j.state.itemDisposedAt }), 'itemDisposalMs' === i && j.deviceUI.update({ itemDisposalMs: j.state.itemDisposalMs }), 'itemCrafterCharacterId' === i && j.deviceUI.update({ itemCrafterCharacterId: j.state.itemCrafterCharacterId });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    const m = n => {
        if (n.state.status === k.CraftingTableStatus.availableForCollection) {
            let o = 1;
            if (!(n.state.itemCrafterCharacterId === (0, h.default)()) && n.options.useCrafterCollectionAdvantage) {
                const p = n.state.itemFinishesCraftingAt + 1000 * j.default.secondsAdvantage, q = Math.ceil((p - g.default.session.gameTime) / 1000);
                q < 1 ? o = 1 : (n.refetchInteractionTimeout = window.setTimeout(() => {
                    m(n);
                }, 250), o = q);
            }
            n.interactiveZones.setInfo({
                message: `Collect ${ (0, l.default)(n.state.itemId, n.state.itemAmount) }`,
                allowedToInteract: !0,
                duration: o
            }), n.interactiveZones.onInteraction = () => {
                n.callbackHelper.collect();
            };
        } else
            n.state.status === k.CraftingTableStatus.idle ? n.interactiveZones.setInfo({
                message: (0, f.CapitalizeFirstLetter)(i.default.baseVerb(n.options.style)),
                allowedToInteract: !0
            }) : n.interactiveZones.setInfo({
                message: `${ (0, f.CapitalizeFirstLetter)(i.default.preparing(n.options.style)) } ${ (0, l.default)(n.state.itemId, n.state.itemAmount) }`,
                action: 'to check status',
                allowedToInteract: !0
            }), n.interactiveZones.onInteraction = () => {
                n.openDeviceUI();
            };
    };
    var _n = m;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const h = i => i === g.CraftingTableStyle.plant ? 'plant' : i === g.CraftingTableStyle.craft ? 'craft' : 'purchase';
    var _i = {
        noItems: j => `No items currently available to ${ h(j) }.`,
        selectItem: j => `Select an item to ${ h(j) }...`,
        availableToCraft: j => `Available To ${ (0, f.CapitalizeFirstLetter)(h(j)) }`,
        instantNote: j => j === g.CraftingTableStyle.store ? 'Available immediately' : j === g.CraftingTableStyle.plant ? 'Grows instantly' : 'Crafts instantly',
        durationNote: j => k => k === g.CraftingTableStyle.store ? `Takes ${ j } to prepare` : k === g.CraftingTableStyle.plant ? `Takes ${ j } to grow` : `Takes ${ j } to craft`,
        expireVerb: j => j === g.CraftingTableStyle.plant ? 'goes bad' : 'expires',
        resource: j => j === g.CraftingTableStyle.store ? 'resource' : 'ingredient',
        preparing: j => j === g.CraftingTableStyle.store ? 'preparing' : j === g.CraftingTableStyle.plant ? 'growing' : 'crafting',
        baseVerb: h
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = { secondsAdvantage: 5 };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = (i, j) => {
        let k = (0, g.ItemName)(i) || 'Item';
        return j > 1 && (k += ` (${ (0, f.numberWithCommas)(j) })`), k;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    var _q = r => {
        const s = r.state.status;
        if (s === k.CraftingTableStatus.idle && ((0, n.default)(r), (0, o.default)(r)), s !== k.CraftingTableStatus.crafting && s !== k.CraftingTableStatus.availableForCollection || (0, l.default)(r), s === k.CraftingTableStatus.availableForCollection && (r.pieces.item && j.default.itemReady.applyItemAnimation(r, r.pieces.item.view), (0, m.default)(r), r.state.itemDisposedAt || (0, o.default)(r), r.cull.isInsideView && !f.default.session.loadingPhase)) {
            Date.now() - r.createdAt > 1500 && ((0, i.playSound)({
                path: (0, g.default)('devices/crafting_table/complete.mp3'),
                volume: (0, h.getVolume)({
                    volume: 0.4,
                    type: h.SoundType.soundEffect
                })
            }), r.particles.burst());
        }
        r.deviceUI.update({ status: r.state.status }), (0, p.default)(r);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        if (h.pieces.item) {
            const i = h.pieces.item;
            h.pieces.item = void 0, h.tweens.add({
                targets: i.view,
                scale: 0,
                opacity: 0.5,
                duration: f.default.itemDestroyed.duration,
                ease: f.default.itemDestroyed.ease,
                onComplete: () => {
                    i.destroy();
                }
            });
        }
        if (h.pieces.itemShine) {
            const j = h.pieces.itemShine;
            h.pieces.itemShine = void 0, h.tweens.add({
                targets: j.view,
                scale: 0,
                opacity: 0.5,
                duration: f.default.itemDestroyed.duration,
                ease: f.default.itemDestroyed.ease,
                onComplete: () => {
                    j.destroy();
                }
            });
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => {
        g.pieces.progressBar.background && g.pieces.progressBar.bar && (g.pieces.progressBar.background.view.destroy(), g.pieces.progressBar.bar.view.destroy(), g.pieces.progressBar.background = void 0, g.pieces.progressBar.bar = void 0);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = n => {
        if (n.cull.isInsideView) {
            if (n.state.status === k.CraftingTableStatus.crafting) {
                var o, p, q;
                const r = n.state.itemFinishesCraftingAt - n.state.craftingDurationMs, s = ((0, g.GetServerGameTimeWithCompensation)() - r) / n.state.craftingDurationMs;
                (0, l.default)({
                    device: n,
                    completion: s,
                    color: j.default.progressColor
                });
                const t = (0, f.clamp)(s, 0.25, 1);
                null === (o = n.pieces) || void 0 === o || null === (p = o.item) || void 0 === p || null === (q = p.view) || void 0 === q || q.setAlpha(t);
            }
            var u, v, w, x, y;
            if (n.state.status === t.CraftingTableStatus.availableForCollection)
                if (null === (u = n.pieces) || void 0 === u || null === (v = u.item) || void 0 === v || null === (w = v.view) || void 0 === w || w.setAlpha(1), n.state.itemDisposedAt) {
                    const z = n.state.itemDisposedAt - n.state.itemDisposalMs, A = 1 - ((0, g.GetServerGameTimeWithCompensation)() - z) / n.state.itemDisposalMs;
                    (0, l.default)({
                        device: n,
                        completion: A,
                        color: j.default.expirationColor
                    });
                }
            if (n.itemIsOutlined)
                if (!n.interactivity.withinBounds || n.state.status !== t.CraftingTableStatus.availableForCollection)
                    n.itemIsOutlined = !1, (null === (x = n.pieces) || void 0 === x ? void 0 : x.item) && (0, s.RemoveOutline)({ view: n.pieces.item.view });
            if (n.interactivity.withinBounds)
                n.state.status === t.CraftingTableStatus.availableForCollection && !n.itemIsOutlined && (null === (y = n.pieces.item) || void 0 === y ? void 0 : y.view) && (n.itemIsOutlined = !0, (0, r.AddOutline)({ view: n.pieces.item.view }));
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'AddOutline', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        if (!h.view || !h.view.active)
            return;
        const i = { thickness: 2 }, j = h.options ? {
                ...i,
                ...h.options
            } : { ...i };
        (0, f.default)().plugins.get('rexOutlinePipeline').add(h.view, j);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'RemoveOutline', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        h.view && (0, f.default)().plugins.get('rexOutlinePipeline').remove(h.view);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = {
        width: 55,
        height: 12,
        backgroundColor: 16777215,
        borderColor: 2503224,
        borderWidth: 5,
        progressColor: 4431943,
        expirationColor: 15092249,
        yOffset: i => i.options.style === g.CraftingTableStyle.plant ? 70 : (0, f.isPlatformer)() ? -75 : 85
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        const {
            device: j,
            completion: k
        } = i;
        j.pieces.progressBar.bar && j.pieces.progressBar.background || (0, g.default)(j), j.pieces.progressBar.bar.updateFillColor({
            color: i.color,
            blockRedraw: !0
        }), j.pieces.progressBar.bar.updateDimensions({
            height: f.default.height,
            width: f.default.width * k
        }), j.pieces.progressBar.bar.view.setX(j.x - (f.default.width - f.default.width * k) / 2);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = j => {
        j.pieces.progressBar.background && j.pieces.progressBar.background.destroy(), j.pieces.progressBar.bar && j.pieces.progressBar.bar.destroy(), j.pieces.progressBar.background = j.parts.add.rect({
            width: g.default.width,
            height: g.default.height,
            y: g.default.yOffset(j),
            color: g.default.backgroundColor,
            borderColor: g.default.borderColor,
            borderWidth: g.default.borderWidth,
            borderAlpha: 1,
            layerId: (0, h.GetCraftingTableDeviceLayer)(j)
        }), j.pieces.progressBar.bar = j.parts.add.rect({
            width: g.default.width,
            height: g.default.height,
            y: g.default.yOffset(j),
            color: g.default.progressColor,
            layerId: (0, h.GetCraftingTableDeviceLayer)(j)
        }), j.pieces.progressBar.background.view.setScale(0), j.pieces.progressBar.bar.view.setAlpha(0), j.tweens.add({
            targets: j.pieces.progressBar.background.view,
            scale: 1,
            duration: f.default.itemCreated.duration,
            ease: f.default.itemCreated.ease,
            onComplete: () => {
                var k;
                (null === (k = j.pieces.progressBar.bar) || void 0 === k ? void 0 : k.view) && j.pieces.progressBar.bar.view.setAlpha(1);
            }
        });
    };
});