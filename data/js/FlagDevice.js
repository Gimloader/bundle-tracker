function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('+vGa1', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _y(b.exports, 'default', function() {
        return _y;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('s1zbr'),
        h = a('HXwZ2'),
        i = a('/pbxo'),
        j = a('JqBF0'),
        k = a('r7Wu5'),
        l = a('sCKk4'),
        m = a('K0VOz'),
        n = a('mgR+A'),
        o = a('yQXc/'),
        p = a('L48JT'),
        q = a('G5ism'),
        r = a('g6Uq4'),
        s = a('5CmLs'),
        t = a('k4WXU'),
        u = a('9tz3H'),
        v = a('R2Ucl10'),
        w = a('IFO6W13');
    class x extends f.default {
        constructor(_y) {
            if (super(_y), (0, e.default)(this, 'goingBackToBase', !1), (0, e.default)(this, 'idleRotation', 0), (0, e.default)(this, 'currentFlagX', 0), (0, e.default)(this, 'currentFlagY', 0), (0, e.default)(this, 'pickupShiftX', 0), (0, e.default)(this, 'pickupShiftY', 0), (0, e.default)(this, 'dropShiftY', 0), (0, e.default)(this, 'backScale', 1), (0, e.default)(this, 'backAlpha', 1), (0, e.default)(this, 'shadowAlpha', 0), (0, e.default)(this, 'shadowScale', 0), (0, e.default)(this, 'flipScale', 1), (0, e.default)(this, 'cumulTime', 1000 * Math.random()), (0, e.default)(this, 'onUpdate', _y => {
                    (0, r.UpdateCarriedFlag)(this), this.cumulTime += _y, this.idleRotation = Math.sin(this.cumulTime / 400 / l.Consts.FlagSwingInterval) * l.Consts.FlagSwingAmplitude, this.flag.view.rotation = this.idleRotation, this.flag.view.scaleX = l.Consts.BaseScale * this.flipScale, this.flag.view.scaleY = l.Consts.BaseScale * this.backScale, this.flag.view.x = this.currentFlagX + this.pickupShiftX, this.flag.view.y = this.currentFlagY + this.pickupShiftY + this.dropShiftY, this.flag.view.setDepth((0, k.GetGlobalDepth)(this.flag.view.y, j.default.DepthSortedCharactersAndDevices)), this.flagShadow.view.alpha = this.shadowAlpha, this.flagShadow.view.scaleX = this.flagShadow.view.scaleY = this.shadowScale;
                }), (0, e.default)(this, 'transitionToState', () => {
                    this.state.currentState === g.CurrentState.carried ? (0, o.OnPickup)(this) : this.state.currentState === g.CurrentState.dropped ? (0, p.OnDrop)(this) : this.state.currentState === g.CurrentState.idle && (0, q.OnBackToBase)(this);
                }), (0, e.default)(this, 'onStateChange', _y => {
                    (0, n.UpdateZone)(this), (0, m.UpdateInteractiveInfo)(this), 'currentState' === _y && this.transitionToState(), 'characterId' === _y && this.state.characterId && (this.lastCharacterIdToHoldFlag = this.state.characterId);
                }), (0, e.default)(this, 'setupVisualEditing', () => {
                    if (!(0, i.InPreGamePhase)() || !(0, u.isSavedVersion)())
                        return;
                    const z = (0, v.FetchOptionSchemaProperty)(this, 'radius');
                    this.visualEditing.add.circle({
                        radius: this.options.radius,
                        minRadius: z.min,
                        maxRadius: z.max,
                        rotable: !1,
                        onChange: z => {
                            (0, w.ReplaceVisualEditingPreview)(z.x, z.y, {
                                radius: z.radius
                            });
                        }
                    });
                }), (0, e.default)(this, 'isInBase', () => this.state.currentState === g.CurrentState.idle), this.cull.ignoreCulling(), this.flag = this.parts.add.sprite({
                    ...(0, h.GetFlagAsset)(this.options.flagColor),
                    originX: l.Consts.FlagOriginX,
                    originY: l.Consts.FlagOriginY,
                    onReady: _y => {
                        _y.view.setScale(l.Consts.BaseScale);
                    }
                }), this.flagPlatform = this.parts.add.sprite({
                    ...h.FlagPlatform,
                    originX: l.Consts.PlatformOriginX,
                    originY: l.Consts.PlatformOriginY,
                    layerId: j.default.DevicesUnderCharacters,
                    depthChange: (0, s.default)(2),
                    onReady: _y => {
                        _y.view.setScale(l.Consts.BaseScale);
                    }
                }), this.flagShadow = this.parts.add.sprite({
                    ...h.FlagShadow,
                    layerId: j.default.DevicesUnderCharacters,
                    onReady: _y => {
                        _y.view.setScale(0);
                    }
                }), this.currentFlagX = this.x, this.currentFlagY = this.y, (0, i.InGamePhase)() && (this.zone = this.interactiveZones.add.circle({
                    r: l.Consts.InteractivityRadius
                }), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice('interact');
                }, (0, m.UpdateInteractiveInfo)(this), (0, n.UpdateZone)(this), this.state.currentState === g.CurrentState.carried ? (0, o.SetCarriedState)(this) : this.state.currentState === g.CurrentState.dropped && (0, p.SetDroppedState)(this)), this.options.useSafeZone) {
                this.setupVisualEditing();
                const z = this.options.owningTeamId === (0, t.default)();
                this.parts.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius,
                    color: z ? l.Consts.Colors.SafeZone.Body.Owner : l.Consts.Colors.SafeZone.Body.NonOwner,
                    alpha: 0.2,
                    borderColor: z ? l.Consts.Colors.SafeZone.Border.Owner : l.Consts.Colors.SafeZone.Border.NonOwner,
                    borderAlpha: 0.5,
                    borderWidth: 4,
                    depthChange: (0, s.default)(1)
                }), z && this.colliders.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius
                });
            }
            this.lastCharacterIdToHoldFlag = this.state.characterId;
        }
    }
    var _y = x;
}), a.register('s1zbr', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    t(b.exports, 'CurrentState', function() {
        return f;
    }), (e = d || (d = {})).black = 'black', e.blue = 'blue', e.green = 'green', e.orange = 'orange', e.purple = 'purple', e.red = 'red', e.white = 'white', (g = f || (f = {})).idle = 'idle', g.carried = 'carried', g.dropped = 'dropped';
    f.idle;
}), a.register('HXwZ2', function(b, c) {
    t(b.exports, 'FlagPlatform', function() {
        return _e;
    }), t(b.exports, 'FlagShadow', function() {
        return _f;
    }), t(b.exports, 'GetFlagAsset', function() {
        return _g;
    });
    var d = a('2Xvuf');
    const _e = {
            imageId: 'flag_platform',
            imageUrl: (0, d.default)('devices/flag/flag_platform.png')
        },
        _f = {
            imageId: 'flag_shadow',
            imageUrl: (0, d.default)('devices/shadow/shadow_device.png')
        },
        _g = t => ({
            imageId: `flag_${ t }`,
            imageUrl: (0, d.default)(`devices/flag/flag_${ t }.png`)
        });
}), a.register('sCKk4', function(b, c) {
    t(b.exports, 'Consts', function() {
        return _d;
    });
    const _d = {
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
}), a.register('K0VOz', function(b, c) {
    t(b.exports, 'UpdateInteractiveInfo', function() {
        return _i;
    });
    var d = a('k4WXU'),
        e = a('/pbxo'),
        f = a('sCKk4'),
        g = a('s1zbr'),
        h = a('hzwGB');
    const _i = t => {
        if ((0, e.InPreGamePhase)())
            return;
        if (!(0, h.FetchMapOptions)().interactiveItemsSlots)
            return void t.interactiveZones.setInfo({
                message: f.Consts.NoInteractiveSlotsText,
                allowedToInteract: !1,
                topHeaderColor: f.Consts.NoInteractiveSlotsHeaderColor,
                topHeader: f.Consts.NoInteractiveSlotsHeader,
                duration: 1
            });
        const j = t.options.owningTeamId === (0, d.default)(),
            k = t.state.currentState === g.CurrentState.dropped,
            l = t.state.currentState === g.CurrentState.idle;
        return j && k ? (t.interactiveZones.setForceDisabled(!1), void t.interactiveZones.setInfo({
            message: f.Consts.BackToBaseText,
            allowedToInteract: !0,
            duration: 1
        })) : j || !l && !k ? void t.interactiveZones.setForceDisabled(!0) : (t.interactiveZones.setForceDisabled(!1), void t.interactiveZones.setInfo({
            message: f.Consts.PickUpText,
            allowedToInteract: !0,
            duration: 1
        }));
    };
}), a.register('mgR+A', function(b, c) {
    t(b.exports, 'UpdateZone', function() {
        return _e;
    });
    var d = a('s1zbr');
    const _e = t => {
        if (!t.zone)
            return;
        let f = {
            x: t.x,
            y: t.y
        };
        t.state.currentState === d.CurrentState.dropped && (f.x = t.state.x, f.y = t.state.y);
        const g = f.x - t.x,
            h = f.y - t.y;
        t.zone.x = g, t.zone.y = h;
    };
}), a.register('yQXc/', function(b, c) {
    t(b.exports, 'OnPickup', function() {
        return _j;
    }), t(b.exports, 'SetCarriedState', function() {
        return _k;
    });
    var d = a('B7ZvS'),
        e = a('2Xvuf'),
        f = a('Jfada'),
        g = a('1f1YX'),
        h = a('07pQo'),
        i = a('sCKk4');
    const _j = t => {
            const k = (0, d.default)(t.state.characterId),
                l = (0, f.default)();
            t.state.characterId === l && (0, h.playSound)({
                path: (0, e.default)('sounds/core/collectItem.mp3'),
                volume: (0, g.getVolume)({
                    volume: 0.7,
                    type: g.SoundType.soundEffect
                })
            }), k && (t.pickupShiftX = t.flag.view.x - k.body.x, t.pickupShiftY = t.flag.view.y - k.body.y, t.tweens.add({
                targets: t,
                pickupShiftX: 0,
                pickupShiftY: i.Consts.FlagDockedShift,
                duration: 250,
                ease: Phaser.Math.Easing.Back.Out
            }), t.tweens.add({
                targets: t,
                shadowAlpha: 0,
                shadowScale: 0,
                duration: 100
            }));
        },
        _k = t => {
            t.pickupShiftX = 0, t.pickupShiftY = i.Consts.FlagDockedShift;
        };
}), a.register('L48JT', function(b, c) {
    t(b.exports, 'OnDrop', function() {
        return _i;
    }), t(b.exports, 'SetDroppedState', function() {
        return _j;
    });
    var d = a('2Xvuf'),
        e = a('Jfada'),
        f = a('1f1YX'),
        g = a('07pQo'),
        h = a('sCKk4');
    const _i = t => {
            t.lastCharacterIdToHoldFlag === (0, e.default)() && (0, g.playSound)({
                path: (0, d.default)('sounds/core/dropItem.mp3'),
                volume: (0, f.getVolume)({
                    volume: 0.45,
                    type: f.SoundType.soundEffect
                })
            }), t.flagShadow.view.x = t.state.x, t.flagShadow.view.y = t.state.y + h.Consts.FlagDropShift, t.pickupShiftY = h.Consts.FlagDockedShift, t.tweens.add({
                targets: t,
                currentFlagX: t.state.x,
                currentFlagY: t.state.y,
                duration: 300
            }), t.tweens.add({
                targets: t,
                dropShiftY: -h.Consts.FlagDropHeight,
                duration: 150,
                ease: Phaser.Math.Easing.Sine.Out,
                onComplete: () => {
                    t.tweens.add({
                        targets: t,
                        shadowAlpha: 0.5,
                        shadowScale: 0.25,
                        ease: Phaser.Math.Easing.Back.Out,
                        duration: 200
                    }), t.tweens.add({
                        targets: t,
                        dropShiftY: 0,
                        duration: 150,
                        ease: Phaser.Math.Easing.Sine.In
                    });
                }
            });
        },
        _j = t => {
            t.flagShadow.view.x = t.state.x, t.flagShadow.view.y = t.state.y + h.Consts.FlagDropShift, t.pickupShiftY = h.Consts.FlagDockedShift, t.currentFlagX = t.state.x, t.currentFlagY = t.state.y, t.shadowAlpha = 0.5, t.shadowScale = 0.25, t.dropShiftY = 0;
        };
}), a.register('G5ism', function(b, c) {
    t(b.exports, 'OnBackToBase', function() {
        return _d;
    });
    const _d = t => {
        t.goingBackToBase = !0, t.tweens.add({
            targets: t,
            shadowAlpha: 0,
            shadowScale: 0,
            ease: Phaser.Math.Easing.Back.In,
            duration: 200
        }), t.tweens.add({
            targets: t,
            backScale: 0,
            ease: Phaser.Math.Easing.Back.In,
            duration: 300
        }), t.tweens.add({
            targets: t,
            backAlpha: 0,
            duration: 100,
            delay: 150,
            onComplete: () => {
                t.goingBackToBase = !1, t.dropShiftY = 0, t.pickupShiftY = 0, t.currentFlagX = t.x, t.currentFlagY = t.y, t.tweens.add({
                    targets: t,
                    backScale: 1,
                    ease: Phaser.Math.Easing.Back.Out,
                    duration: 300
                }), t.tweens.add({
                    targets: t,
                    backAlpha: 0,
                    duration: 150
                });
            }
        });
    };
}), a.register('g6Uq4', function(b, c) {
    t(b.exports, 'UpdateCarriedFlag', function() {
        return _f;
    });
    var d = a('B7ZvS'),
        e = a('s1zbr');
    const _f = t => {
        if (t.state.currentState !== e.CurrentState.carried)
            return;
        const g = (0, d.default)(t.state.characterId);
        g && (t.currentFlagX = g.body.x, t.currentFlagY = g.body.y, t.flipScale = g.flip.isFlipped ? -1 : 1);
    };
}), a.register('R2Ucl10', function(b, c) {
    t(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (t, b) => {
        var e, f, g;
        const h = t.deviceOption.optionSchema.options.find(t => t.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), a.register('IFO6W13', function(b, c) {
    t(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (t, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: t,
            y: a,
            depth: k,
            layerId: j.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...b
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        });
    };
}), a.register('+oovY4', function(b, c) {
    t(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = t => {
        (0, d.default)().worldManager.devices.getDeviceById(t.id) && (0, e.default)(t);
    };
});