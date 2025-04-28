function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('wbPN9', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _B(b.exports, 'default', function() {
        return _B;
    });
    var e = a('1bFPu'),
        f = a('iWivW'),
        g = a('2Xvuf'),
        h = a('SINjC2'),
        i = a('I35Ay'),
        j = a('Lsn7x'),
        k = a('8WvaZ'),
        l = a('JqBF0'),
        m = a('o6xwR'),
        n = a('vye/m'),
        o = a('l/TUi'),
        p = a('ZCz9W'),
        q = a('zVybl'),
        r = a('4dOVn'),
        s = a('P2jwS'),
        t = a('EDUTD'),
        u = a('07pQo'),
        v = a('1f1YX'),
        w = a('jrwpx'),
        x = a('qMN8v'),
        y = a('s21gJ'),
        z = a('/pbxo');
    class A extends i.default {
        constructor(_B) {
            super(_B), (0, e.default)(this, 'hasLoaded', !1), (0, e.default)(this, 'isShowing', !0), (0, e.default)(this, 'isWithinInteractionRange', !1), (0, e.default)(this, 'itemDimensions', {
                width: 0,
                height: 0
            }), (0, e.default)(this, 'setInteractionInfo', () => {
                const C = (0, p.ItemName)(this.options.itemId),
                    D = (0, q.IsWeapon)(this.options.itemId),
                    E = (0, r.IsItem)(this.options.itemId);
                let F = !0;
                if (D || E) {
                    var G, H;
                    const I = null !== (H = null === (G = f.default.me.inventory.slots.get(this.options.itemId)) || void 0 === G ? void 0 : G.amount) && void 0 !== H ? H : 0;
                    if (D) {
                        F = I < (0, s.GetMaxAmountOfWeapon)({
                            itemId: this.options.itemId
                        });
                    } else if (E) {
                        F = I < (0, t.GetMaxAmountOfItem)({
                            itemId: this.options.itemId
                        });
                    }
                }
                if (C) {
                    const G = this.options.itemAmount;
                    this.interactiveZones.setInfo({
                        message: (0, o.ItemNameWithCount)(C, G),
                        action: j.default.interaction.message.action,
                        allowedToInteract: F,
                        topHeader: F ? void 0 : j.default.interaction.message.fullInventory,
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
                    ease: _C(k).Math.Easing.Back.In
                }), this.interactiveZones.setForceDisabled(!1);
            }), (0, e.default)(this, 'hide', () => {
                this.isShowing = !1, this.tweens.add({
                    targets: this.itemImage.view,
                    displayWidth: 0,
                    displayHeight: 0,
                    duration: 250,
                    ease: _C(k).Math.Easing.Back.Out
                }), this.interactiveZones.setForceDisabled(!0), this.isWithinInteractionRange && this.removeOutline();
            }), (0, e.default)(this, 'onUpdate', () => {
                if (!this.hasLoaded)
                    return;
                var _C;
                if ((0, n.GetServerGameTimeWithCompensation)() >= (null !== (_C = this.state.itemAvailableTimestamp) && void 0 !== _C ? _C : 0)) {
                    if (this.isShowing)
                        return;
                    this.show();
                } else {
                    if (!this.isShowing)
                        return;
                    this.hide();
                }
            });
            const C = (0, g.default)(`devices/models/baseModel/bases/${ (0, m.default)(this.options.itemId) }.png`);
            this.base = this.parts.add.sprite({
                imageId: C,
                imageUrl: C,
                layerId: l.default.DevicesUnderCharacters
            }), this.base.view.setScale(0.15);
            const D = f.default.worldOptions.itemOptions.find(_b => _b.id === this.options.itemId);
            if (D) {
                const E = D.previewImage;
                this.itemImage = this.parts.add.sprite({
                    imageId: E,
                    imageUrl: E,
                    layerId: l.default.DepthSortedCharactersAndDevices,
                    onReady: _b => {
                        this.itemDimensions = (0, h.default)({
                            height: _b.view.height,
                            width: _b.view.width,
                            newWidth: j.default.itemWidth
                        }), _b.view.setDisplaySize(this.itemDimensions.width, this.itemDimensions.height), this.hasLoaded = !0;
                    }
                }), this.itemImage.view.setY(this.itemImage.view.y - 50), this.tweens.add({
                    targets: this.itemImage.view,
                    y: this.itemImage.view.y - 15,
                    duration: 1200,
                    yoyo: !0,
                    repeat: -1,
                    ease: _b(k).Math.Easing.Sine.InOut
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
    var _B = A;
}), a.register('SINjC2', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _d;
    });
    var _d = _b => {
        const _e = _b.newWidth / _b.width;
        return {
            height: _b.height * _e,
            width: _b.width * _e
        };
    };
}), a.register('Lsn7x', function(b, c) {
    _h(b.exports, 'default', function() {
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
}), a.register('o6xwR', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('iWivW'),
        e = a('kc9WN');
    const f = {
        [e.InventoryItemRarity.common]: 'light_gray',
        [e.InventoryItemRarity.uncommon]: 'green',
        [e.InventoryItemRarity.rare]: 'blue',
        [e.InventoryItemRarity.epic]: 'purple',
        [e.InventoryItemRarity.legendary]: 'yellow'
    };
    var _g = b => {
        if (!b)
            return f.uncommon;
        const _h = d.default.worldOptions.itemOptions.find(_h => _h.id === b);
        if (!_h)
            return f.uncommon;
        var i;
        const j = null !== (i = null == _h ? void 0 : _h.rarity) && void 0 !== i ? i : e.InventoryItemRarity.common;
        return f[j];
    };
}), a.register('P2jwS', function(b, c) {
    _f(b.exports, 'GetMaxAmountOfWeapon', function() {
        return _e;
    });
    var d = a('n92Pz');
    const _e = b => {
        let _f = 0;
        return (0, d.EachInteractiveSlot)({
            callback: a => {
                a.itemId !== b.itemId && '' !== a.itemId && a.itemId || (_f += 1);
            }
        }), _f;
    };
}), a.register('n92Pz', function(b, c) {
    _g(b.exports, 'EachInteractiveSlot', function() {
        return _f;
    });
    var d = a('iWivW'),
        e = a('hzwGB');
    const _f = b => {
        const _g = (0, e.FetchMapOptions)().interactiveItemsSlots,
            h = d.default.me.inventory.interactiveSlotsOrder;
        for (let i = 0; i < _g; i++) {
            const j = h[i],
                k = d.default.me.inventory.interactiveSlots.get(`${ j }`);
            if (b.callback(k, j))
                return;
        }
    };
}), a.register('EDUTD', function(b, c) {
    _g(b.exports, 'GetMaxAmountOfItem', function() {
        return _f;
    });
    var d = a('btxlR'),
        e = a('n92Pz');
    const _f = b => {
        var _g;
        const h = null !== (_g = (0, d.default)(b.itemId).maxStackSize) && void 0 !== _g ? _g : 1;
        let i = 0;
        return (0, e.EachInteractiveSlot)({
            ...b,
            callback: _g => {
                _g.itemId !== b.itemId && '' !== _g.itemId && _g.itemId || (i += h);
            }
        }), i;
    };
}), a.register('jrwpx', function(b, c) {
    let d;
    _f(b.exports, 'Messages', function() {
        return d;
    }), (d || (d = {})).collect = 'collect';
}), a.register('qMN8v', function(b, c) {
    _f(b.exports, 'AddOutline', function() {
        return _e;
    });
    var d = a('D5xLI');
    const _e = b => {
        if (!b.view || !b.view.active)
            return;
        const _f = {
                thickness: 2
            },
            g = b.options ? {
                ..._f,
                ...b.options
            } : {
                ..._f
            };
        (0, d.default)().plugins.get('rexOutlinePipeline').add(b.view, g);
    };
}), a.register('s21gJ', function(b, c) {
    t(b.exports, 'RemoveOutline', function() {
        return _e;
    });
    var d = a('D5xLI');
    const _e = b => {
        b.view && (0, d.default)().plugins.get('rexOutlinePipeline').remove(b.view);
    };
});