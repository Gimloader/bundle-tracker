function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _z;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....'),
        p = b('.....'),
        q = b('.....'),
        r = b('.....'),
        s = b('.....'),
        t = b('.....'),
        u = b('.....'),
        v = b('.....'),
        w = b('.....'),
        x = b('.....');
    class y extends g.default {
        constructor(z) {
            if (super(z), (0, f.default)(this, 'goingBackToBase', !1), (0, f.default)(this, 'idleRotation', 0), (0, f.default)(this, 'currentFlagX', 0), (0, f.default)(this, 'currentFlagY', 0), (0, f.default)(this, 'pickupShiftX', 0), (0, f.default)(this, 'pickupShiftY', 0), (0, f.default)(this, 'dropShiftY', 0), (0, f.default)(this, 'backScale', 1), (0, f.default)(this, 'backAlpha', 1), (0, f.default)(this, 'shadowAlpha', 0), (0, f.default)(this, 'shadowScale', 0), (0, f.default)(this, 'flipScale', 1), (0, f.default)(this, 'cumulTime', 1000 * Math.random()), (0, f.default)(this, 'onUpdate', A => {
                    (0, s.UpdateCarriedFlag)(this), this.cumulTime += A, this.idleRotation = Math.sin(this.cumulTime / 400 / m.Consts.FlagSwingInterval) * m.Consts.FlagSwingAmplitude, this.flag.view.rotation = this.idleRotation, this.flag.view.scaleX = m.Consts.BaseScale * this.flipScale, this.flag.view.scaleY = m.Consts.BaseScale * this.backScale, this.flag.view.x = this.currentFlagX + this.pickupShiftX, this.flag.view.y = this.currentFlagY + this.pickupShiftY + this.dropShiftY, this.flag.view.setDepth((0, l.GetGlobalDepth)(this.flag.view.y, k.default.DepthSortedCharactersAndDevices)), this.flagShadow.view.alpha = this.shadowAlpha, this.flagShadow.view.scaleX = this.flagShadow.view.scaleY = this.shadowScale;
                }), (0, f.default)(this, 'transitionToState', () => {
                    this.state.currentState === h.CurrentState.carried ? (0, p.OnPickup)(this) : this.state.currentState === h.CurrentState.dropped ? (0, q.OnDrop)(this) : this.state.currentState === h.CurrentState.idle && (0, r.OnBackToBase)(this);
                }), (0, f.default)(this, 'onStateChange', A => {
                    (0, o.UpdateZone)(this), (0, n.UpdateInteractiveInfo)(this), 'currentState' === A && this.transitionToState(), 'characterId' === A && this.state.characterId && (this.lastCharacterIdToHoldFlag = this.state.characterId);
                }), (0, f.default)(this, 'setupVisualEditing', () => {
                    if (!(0, j.InPreGamePhase)() || !(0, v.isSavedVersion)())
                        return;
                    const A = (0, w.FetchOptionSchemaProperty)(this, 'radius');
                    this.visualEditing.add.circle({
                        radius: this.options.radius,
                        minRadius: A.min,
                        maxRadius: A.max,
                        rotable: !1,
                        onChange: B => {
                            (0, x.ReplaceVisualEditingPreview)(B.x, B.y, {
                                radius: B.radius
                            });
                        }
                    });
                }), (0, f.default)(this, 'isInBase', () => this.state.currentState === h.CurrentState.idle), this.cull.ignoreCulling(), this.flag = this.parts.add.sprite({
                    ...(0, i.GetFlagAsset)(this.options.flagColor),
                    originX: m.Consts.FlagOriginX,
                    originY: m.Consts.FlagOriginY,
                    onReady: A => {
                        A.view.setScale(m.Consts.BaseScale);
                    }
                }), this.flagPlatform = this.parts.add.sprite({
                    ...i.FlagPlatform,
                    originX: m.Consts.PlatformOriginX,
                    originY: m.Consts.PlatformOriginY,
                    layerId: k.default.DevicesUnderCharacters,
                    depthChange: (0, t.default)(2),
                    onReady: A => {
                        A.view.setScale(m.Consts.BaseScale);
                    }
                }), this.flagShadow = this.parts.add.sprite({
                    ...i.FlagShadow,
                    layerId: k.default.DevicesUnderCharacters,
                    onReady: A => {
                        A.view.setScale(0);
                    }
                }), this.currentFlagX = this.x, this.currentFlagY = this.y, (0, j.InGamePhase)() && (this.zone = this.interactiveZones.add.circle({
                    r: m.Consts.InteractivityRadius
                }), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice('interact');
                }, (0, n.UpdateInteractiveInfo)(this), (0, o.UpdateZone)(this), this.state.currentState === h.CurrentState.carried ? (0, p.SetCarriedState)(this) : this.state.currentState === h.CurrentState.dropped && (0, q.SetDroppedState)(this)), this.options.useSafeZone) {
                this.setupVisualEditing();
                const A = this.options.owningTeamId === (0, u.default)();
                this.parts.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius,
                    color: A ? m.Consts.Colors.SafeZone.Body.Owner : m.Consts.Colors.SafeZone.Body.NonOwner,
                    alpha: 0.2,
                    borderColor: A ? m.Consts.Colors.SafeZone.Border.Owner : m.Consts.Colors.SafeZone.Border.NonOwner,
                    borderAlpha: 0.5,
                    borderWidth: 4,
                    depthChange: (0, t.default)(1)
                }), A && this.colliders.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius
                });
            }
            this.lastCharacterIdToHoldFlag = this.state.characterId;
        }
    }
    var _z = y;
}), b.register('.....', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    a(c.exports, 'CurrentState', function() {
        return g;
    }), (f = e || (e = {})).black = 'black', f.blue = 'blue', f.green = 'green', f.orange = 'orange', f.purple = 'purple', f.red = 'red', f.white = 'white', (h = g || (g = {})).idle = 'idle', h.carried = 'carried', h.dropped = 'dropped';
    g.idle;
}), b.register('.....', function(c, d) {
    a(c.exports, 'FlagPlatform', function() {
        return _f;
    }), a(c.exports, 'FlagShadow', function() {
        return _g;
    }), a(c.exports, 'GetFlagAsset', function() {
        return _h;
    });
    var e = b('.....');
    const _f = {
            imageId: 'flag_platform',
            imageUrl: (0, e.default)('devices/flag/flag_platform.png')
        },
        _g = {
            imageId: 'flag_shadow',
            imageUrl: (0, e.default)('devices/shadow/shadow_device.png')
        },
        _h = i => ({
            imageId: `flag_${ i }`,
            imageUrl: (0, e.default)(`devices/flag/flag_${ i }.png`)
        });
}), b.register('.....', function(c, d) {
    a(c.exports, 'Consts', function() {
        return _e;
    });
    const _e = {
        FlagOriginX: 0.935,
        FlagOriginY: 356 / 359,
        PlatformOriginX: 106 / 211,
        PlatformOriginY: 56 / 142,
        BackToBaseText: 'Return Flag To Base',
        PickUpText: 'Pick Up Flag',
        NoInteractiveSlotsHeader: 'No Interactive Slots',
        NoInteractiveSlotsText: 'Interactive Items Disabled',
        NoInteractiveSlotsHeaderColor: '#ffcdd2',
        FlagShiftFactor: -0.1,
        FlagSwingAmplitude: 0.1,
        FlagSwingInterval: 1,
        FlagDockedShift: -35,
        FlagDropShift: -35,
        FlagDropHeight: 35,
        BaseScale: 0.35,
        InteractivityRadius: 100,
        Colors: {
            SafeZone: {
                Body: {
                    Owner: 15022389,
                    NonOwner: 2001125
                },
                Border: {
                    Owner: 0,
                    NonOwner: 16777215
                }
            }
        }
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'UpdateInteractiveInfo', function() {
        return _j;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....');
    const _j = k => {
        if ((0, f.InPreGamePhase)())
            return;
        if (!(0, i.FetchMapOptions)().interactiveItemsSlots)
            return void k.interactiveZones.setInfo({
                message: g.Consts.NoInteractiveSlotsText,
                allowedToInteract: !1,
                topHeaderColor: g.Consts.NoInteractiveSlotsHeaderColor,
                topHeader: g.Consts.NoInteractiveSlotsHeader,
                duration: 1
            });
        const l = k.options.owningTeamId === (0, e.default)(),
            m = k.state.currentState === h.CurrentState.dropped,
            n = k.state.currentState === h.CurrentState.idle;
        return l && m ? (k.interactiveZones.setForceDisabled(!1), void k.interactiveZones.setInfo({
            message: g.Consts.BackToBaseText,
            allowedToInteract: !0,
            duration: 1
        })) : l || !n && !m ? void k.interactiveZones.setForceDisabled(!0) : (k.interactiveZones.setForceDisabled(!1), void k.interactiveZones.setInfo({
            message: g.Consts.PickUpText,
            allowedToInteract: !0,
            duration: 1
        }));
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'UpdateZone', function() {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        if (!g.zone)
            return;
        let h = {
            x: g.x,
            y: g.y
        };
        g.state.currentState === e.CurrentState.dropped && (h.x = g.state.x, h.y = g.state.y);
        const i = h.x - g.x,
            j = h.y - g.y;
        g.zone.x = i, g.zone.y = j;
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'OnPickup', function() {
        return _k;
    }), a(c.exports, 'SetCarriedState', function() {
        return _l;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....');
    const _k = l => {
            const m = (0, e.default)(l.state.characterId),
                n = (0, g.default)();
            l.state.characterId === n && (0, i.playSound)({
                path: (0, f.default)('sounds/core/collectItem.mp3'),
                volume: (0, h.getVolume)({
                    volume: 0.7,
                    type: h.SoundType.soundEffect
                })
            }), m && (l.pickupShiftX = l.flag.view.x - m.body.x, l.pickupShiftY = l.flag.view.y - m.body.y, l.tweens.add({
                targets: l,
                pickupShiftX: 0,
                pickupShiftY: j.Consts.FlagDockedShift,
                duration: 250,
                ease: Phaser.Math.Easing.Back.Out
            }), l.tweens.add({
                targets: l,
                shadowAlpha: 0,
                shadowScale: 0,
                duration: 100
            }));
        },
        _l = m => {
            m.pickupShiftX = 0, m.pickupShiftY = j.Consts.FlagDockedShift;
        };
}), b.register('.....', function(c, d) {
    a(c.exports, 'OnDrop', function() {
        return _j;
    }), a(c.exports, 'SetDroppedState', function() {
        return _k;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....');
    const _j = k => {
            k.lastCharacterIdToHoldFlag === (0, f.default)() && (0, h.playSound)({
                path: (0, e.default)('sounds/core/dropItem.mp3'),
                volume: (0, g.getVolume)({
                    volume: 0.45,
                    type: g.SoundType.soundEffect
                })
            }), k.flagShadow.view.x = k.state.x, k.flagShadow.view.y = k.state.y + i.Consts.FlagDropShift, k.pickupShiftY = i.Consts.FlagDockedShift, k.tweens.add({
                targets: k,
                currentFlagX: k.state.x,
                currentFlagY: k.state.y,
                duration: 300
            }), k.tweens.add({
                targets: k,
                dropShiftY: -i.Consts.FlagDropHeight,
                duration: 150,
                ease: Phaser.Math.Easing.Sine.Out,
                onComplete: () => {
                    k.tweens.add({
                        targets: k,
                        shadowAlpha: 0.5,
                        shadowScale: 0.25,
                        ease: Phaser.Math.Easing.Back.Out,
                        duration: 200
                    }), k.tweens.add({
                        targets: k,
                        dropShiftY: 0,
                        duration: 150,
                        ease: Phaser.Math.Easing.Sine.In
                    });
                }
            });
        },
        _k = l => {
            l.flagShadow.view.x = l.state.x, l.flagShadow.view.y = l.state.y + i.Consts.FlagDropShift, l.pickupShiftY = i.Consts.FlagDockedShift, l.currentFlagX = l.state.x, l.currentFlagY = l.state.y, l.shadowAlpha = 0.5, l.shadowScale = 0.25, l.dropShiftY = 0;
        };
}), b.register('.....', function(c, d) {
    a(c.exports, 'OnBackToBase', function() {
        return _e;
    });
    const _e = f => {
        f.goingBackToBase = !0, f.tweens.add({
            targets: f,
            shadowAlpha: 0,
            shadowScale: 0,
            ease: Phaser.Math.Easing.Back.In,
            duration: 200
        }), f.tweens.add({
            targets: f,
            backScale: 0,
            ease: Phaser.Math.Easing.Back.In,
            duration: 300
        }), f.tweens.add({
            targets: f,
            backAlpha: 0,
            duration: 100,
            delay: 150,
            onComplete: () => {
                f.goingBackToBase = !1, f.dropShiftY = 0, f.pickupShiftY = 0, f.currentFlagX = f.x, f.currentFlagY = f.y, f.tweens.add({
                    targets: f,
                    backScale: 1,
                    ease: Phaser.Math.Easing.Back.Out,
                    duration: 300
                }), f.tweens.add({
                    targets: f,
                    backAlpha: 0,
                    duration: 150
                });
            }
        });
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'UpdateCarriedFlag', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    const _g = h => {
        if (h.state.currentState !== f.CurrentState.carried)
            return;
        const i = (0, e.default)(h.state.characterId);
        i && (h.currentFlagX = i.body.x, h.currentFlagY = i.body.y, h.flipScale = i.flip.isFlipped ? -1 : 1);
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function() {
        return _e;
    });
    const _e = (f, g) => {
        var h, i, j;
        const k = f.deviceOption.optionSchema.options.find(l => l.key === g);
        return {
            min: null === (h = null == k ? void 0 : k.option.props) || void 0 === h ? void 0 : h.min,
            max: null === (i = null == k ? void 0 : k.option.props) || void 0 === i ? void 0 : i.max,
            step: null === (j = null == k ? void 0 : k.option.props) || void 0 === j ? void 0 : j.step
        };
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function() {
        return _i;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....');
    const _i = (j, k, l) => {
        const m = (0, h.FetchVisualEditingPreview)(),
            n = (0, g.FetchCurrentlyEditedDevice)();
        if (!n || !m)
            return;
        const o = n.layers.isOnNaturalDepth() ? void 0 : k + n.layers.getDepthShift();
        (0, f.default)({
            deviceOption: m.deviceOption,
            id: e.VisualEditingConstants.previewId,
            x: j,
            y: k,
            depth: o,
            layerId: n.layers.getLayer(),
            name: m.name,
            isPreview: !0,
            options: {
                ...m.options,
                ...l
            },
            placedByClient: !0,
            state: m.deviceOption.defaultState
        });
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    var _g = h => {
        (0, e.default)().worldManager.devices.getDeviceById(h.id) && (0, f.default)(h);
    };
});