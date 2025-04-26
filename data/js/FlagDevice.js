function a(a, b, j, c) {
    Object.defineProperty(a, b, {
        get: j,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('hmu3T', function(j, c) {
    var c;
    c = j.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(j.exports, 'default', function() {
        return x;
    });
    var d = b('UM8oI'),
        e = b('sgILU'),
        f = b('oGwma'),
        g = b('NypLh'),
        h = b('5Ux1a'),
        i = b('cMsWT'),
        j = b('aR65c'),
        k = b('fV94y'),
        l = b('1f5/Q'),
        m = b('C5in8'),
        n = b('+KH6E'),
        o = b('dfOCE'),
        p = b('4me3n'),
        q = b('CUvci'),
        r = b('Q0Vn8'),
        s = b('julgI'),
        t = b('Bpt+p'),
        u = b('/Lvpl17'),
        v = b('wSwKo5');
    class w extends e.default {
        constructor(a) {
            if (super(a), (0, d.default)(this, 'goingBackToBase', !1), (0, d.default)(this, 'idleRotation', 0), (0, d.default)(this, 'currentFlagX', 0), (0, d.default)(this, 'currentFlagY', 0), (0, d.default)(this, 'pickupShiftX', 0), (0, d.default)(this, 'pickupShiftY', 0), (0, d.default)(this, 'dropShiftY', 0), (0, d.default)(this, 'backScale', 1), (0, d.default)(this, 'backAlpha', 1), (0, d.default)(this, 'shadowAlpha', 0), (0, d.default)(this, 'shadowScale', 0), (0, d.default)(this, 'flipScale', 1), (0, d.default)(this, 'cumulTime', 1000 * Math.random()), (0, d.default)(this, 'onUpdate', a => {
                    (0, q.UpdateCarriedFlag)(this), this.cumulTime += a, this.idleRotation = Math.sin(this.cumulTime / 400 / k.Consts.FlagSwingInterval) * k.Consts.FlagSwingAmplitude, this.flag.view.rotation = this.idleRotation, this.flag.view.scaleX = k.Consts.BaseScale * this.flipScale, this.flag.view.scaleY = k.Consts.BaseScale * this.backScale, this.flag.view.x = this.currentFlagX + this.pickupShiftX, this.flag.view.y = this.currentFlagY + this.pickupShiftY + this.dropShiftY, this.flag.view.setDepth((0, j.GetGlobalDepth)(this.flag.view.y, i.default.DepthSortedCharactersAndDevices)), this.flagShadow.view.alpha = this.shadowAlpha, this.flagShadow.view.scaleX = this.flagShadow.view.scaleY = this.shadowScale;
                }), (0, d.default)(this, 'transitionToState', () => {
                    this.state.currentState === f.CurrentState.carried ? (0, n.OnPickup)(this) : this.state.currentState === f.CurrentState.dropped ? (0, o.OnDrop)(this) : this.state.currentState === f.CurrentState.idle && (0, p.OnBackToBase)(this);
                }), (0, d.default)(this, 'onStateChange', a => {
                    (0, m.UpdateZone)(this), (0, l.UpdateInteractiveInfo)(this), 'currentState' === a && this.transitionToState(), 'characterId' === a && this.state.characterId && (this.lastCharacterIdToHoldFlag = this.state.characterId);
                }), (0, d.default)(this, 'setupVisualEditing', () => {
                    if (!(0, h.InPreGamePhase)() || !(0, t.isSavedVersion)())
                        return;
                    const x = (0, u.FetchOptionSchemaProperty)(this, 'radius');
                    this.visualEditing.add.circle({
                        radius: this.options.radius,
                        minRadius: x.min,
                        maxRadius: x.max,
                        rotable: !1,
                        onChange: x => {
                            (0, v.ReplaceVisualEditingPreview)(x.x, x.y, {
                                radius: x.radius
                            });
                        }
                    });
                }), (0, d.default)(this, 'isInBase', () => this.state.currentState === f.CurrentState.idle), this.cull.ignoreCulling(), this.flag = this.parts.add.sprite({
                    ...(0, g.GetFlagAsset)(this.options.flagColor),
                    originX: k.Consts.FlagOriginX,
                    originY: k.Consts.FlagOriginY,
                    onReady: a => {
                        a.view.setScale(k.Consts.BaseScale);
                    }
                }), this.flagPlatform = this.parts.add.sprite({
                    ...g.FlagPlatform,
                    originX: k.Consts.PlatformOriginX,
                    originY: k.Consts.PlatformOriginY,
                    layerId: i.default.DevicesUnderCharacters,
                    depthChange: (0, r.default)(2),
                    onReady: a => {
                        a.view.setScale(k.Consts.BaseScale);
                    }
                }), this.flagShadow = this.parts.add.sprite({
                    ...g.FlagShadow,
                    layerId: i.default.DevicesUnderCharacters,
                    onReady: a => {
                        a.view.setScale(0);
                    }
                }), this.currentFlagX = this.x, this.currentFlagY = this.y, (0, h.InGamePhase)() && (this.zone = this.interactiveZones.add.circle({
                    r: k.Consts.InteractivityRadius
                }), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice('interact');
                }, (0, l.UpdateInteractiveInfo)(this), (0, m.UpdateZone)(this), this.state.currentState === f.CurrentState.carried ? (0, n.SetCarriedState)(this) : this.state.currentState === f.CurrentState.dropped && (0, o.SetDroppedState)(this)), this.options.useSafeZone) {
                this.setupVisualEditing();
                const x = this.options.owningTeamId === (0, s.default)();
                this.parts.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius,
                    color: x ? k.Consts.Colors.SafeZone.Body.Owner : k.Consts.Colors.SafeZone.Body.NonOwner,
                    alpha: 0.2,
                    borderColor: x ? k.Consts.Colors.SafeZone.Border.Owner : k.Consts.Colors.SafeZone.Border.NonOwner,
                    borderAlpha: 0.5,
                    borderWidth: 4,
                    depthChange: (0, r.default)(1)
                }), x && this.colliders.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius
                });
            }
            this.lastCharacterIdToHoldFlag = this.state.characterId;
        }
    }
    var x = y;
}), b.register('oGwma', function(b, j) {
    let c;
    var d;
    let e;
    var f;
    a(b.exports, 'CurrentState', function() {
        return e;
    }), (d = c || (c = {})).black = 'black', d.blue = 'blue', d.green = 'green', d.orange = 'orange', d.purple = 'purple', d.red = 'red', d.white = 'white', (f = e || (e = {})).idle = 'idle', f.carried = 'carried', f.dropped = 'dropped';
    e.idle;
}), b.register('NypLh', function(j, c) {
    a(j.exports, 'FlagPlatform', function() {
        return d;
    }), a(j.exports, 'FlagShadow', function() {
        return e;
    }), a(j.exports, 'GetFlagAsset', function() {
        return f;
    });
    var c = b('JJQ0+');
    const d = {
            imageId: 'flag_platform',
            imageUrl: (0, c.default)('devices/flag/flag_platform.png')
        },
        e = {
            imageId: 'flag_shadow',
            imageUrl: (0, c.default)('devices/shadow/shadow_device.png')
        },
        f = a => ({
            imageId: `flag_${ a }`,
            imageUrl: (0, c.default)(`devices/flag/flag_${ a }.png`)
        });
}), b.register('fV94y', function(b, j) {
    a(b.exports, 'Consts', function() {
        return c;
    });
    const c = {
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
}), b.register('1f5/Q', function(j, k) {
    a(j.exports, 'UpdateInteractiveInfo', function() {
        return h;
    });
    var c = b('julgI'),
        d = b('5Ux1a'),
        e = b('fV94y'),
        f = b('oGwma'),
        g = b('lRhCY');
    const h = a => {
        if ((0, d.InPreGamePhase)())
            return;
        if (!(0, g.FetchMapOptions)().interactiveItemsSlots)
            return void a.interactiveZones.setInfo({
                message: e.Consts.NoInteractiveSlotsText,
                allowedToInteract: !1,
                topHeaderColor: e.Consts.NoInteractiveSlotsHeaderColor,
                topHeader: e.Consts.NoInteractiveSlotsHeader,
                duration: 1
            });
        const i = a.options.owningTeamId === (0, c.default)(),
            j = a.state.currentState === f.CurrentState.dropped,
            k = a.state.currentState === f.CurrentState.idle;
        return i && j ? (a.interactiveZones.setForceDisabled(!1), void a.interactiveZones.setInfo({
            message: e.Consts.BackToBaseText,
            allowedToInteract: !0,
            duration: 1
        })) : i || !k && !j ? void a.interactiveZones.setForceDisabled(!0) : (a.interactiveZones.setForceDisabled(!1), void a.interactiveZones.setInfo({
            message: e.Consts.PickUpText,
            allowedToInteract: !0,
            duration: 1
        }));
    };
}), b.register('C5in8', function(f, g) {
    a(f.exports, 'UpdateZone', function() {
        return d;
    });
    var c = b('oGwma');
    const d = a => {
        if (!a.zone)
            return;
        let e = {
            x: a.x,
            y: a.y
        };
        a.state.currentState === c.CurrentState.dropped && (e.x = a.state.x, e.y = a.state.y);
        const f = e.x - a.x,
            g = e.y - a.y;
        a.zone.x = f, a.zone.y = g;
    };
}), b.register('+KH6E', function(k, c) {
    a(k.exports, 'OnPickup', function() {
        return i;
    }), a(k.exports, 'SetCarriedState', function() {
        return j;
    });
    var c = b('EdRoV'),
        d = b('JJQ0+'),
        e = b('PUlKf'),
        f = b('Ena4B'),
        g = b('OlpXx'),
        h = b('fV94y');
    const i = a => {
            const j = (0, c.default)(a.state.characterId),
                k = (0, e.default)();
            a.state.characterId === k && (0, g.playSound)({
                path: (0, d.default)('sounds/core/collectItem.mp3'),
                volume: (0, f.getVolume)({
                    volume: 0.7,
                    type: f.SoundType.soundEffect
                })
            }), j && (a.pickupShiftX = a.flag.view.x - j.body.x, a.pickupShiftY = a.flag.view.y - j.body.y, a.tweens.add({
                targets: a,
                pickupShiftX: 0,
                pickupShiftY: h.Consts.FlagDockedShift,
                duration: 250,
                ease: Phaser.Math.Easing.Back.Out
            }), a.tweens.add({
                targets: a,
                shadowAlpha: 0,
                shadowScale: 0,
                duration: 100
            }));
        },
        j = a => {
            a.pickupShiftX = 0, a.pickupShiftY = h.Consts.FlagDockedShift;
        };
}), b.register('dfOCE', function(d, c) {
    a(d.exports, 'OnDrop', function() {
        return h;
    }), a(d.exports, 'SetDroppedState', function() {
        return i;
    });
    var c = b('JJQ0+'),
        d = b('PUlKf'),
        e = b('Ena4B'),
        f = b('OlpXx'),
        g = b('fV94y');
    const h = a => {
            a.lastCharacterIdToHoldFlag === (0, d.default)() && (0, f.playSound)({
                path: (0, c.default)('sounds/core/dropItem.mp3'),
                volume: (0, e.getVolume)({
                    volume: 0.45,
                    type: e.SoundType.soundEffect
                })
            }), a.flagShadow.view.x = a.state.x, a.flagShadow.view.y = a.state.y + g.Consts.FlagDropShift, a.pickupShiftY = g.Consts.FlagDockedShift, a.tweens.add({
                targets: a,
                currentFlagX: a.state.x,
                currentFlagY: a.state.y,
                duration: 300
            }), a.tweens.add({
                targets: a,
                dropShiftY: -g.Consts.FlagDropHeight,
                duration: 150,
                ease: Phaser.Math.Easing.Sine.Out,
                onComplete: () => {
                    a.tweens.add({
                        targets: a,
                        shadowAlpha: 0.5,
                        shadowScale: 0.25,
                        ease: Phaser.Math.Easing.Back.Out,
                        duration: 200
                    }), a.tweens.add({
                        targets: a,
                        dropShiftY: 0,
                        duration: 150,
                        ease: Phaser.Math.Easing.Sine.In
                    });
                }
            });
        },
        i = a => {
            a.flagShadow.view.x = a.state.x, a.flagShadow.view.y = a.state.y + g.Consts.FlagDropShift, a.pickupShiftY = g.Consts.FlagDockedShift, a.currentFlagX = a.state.x, a.currentFlagY = a.state.y, a.shadowAlpha = 0.5, a.shadowScale = 0.25, a.dropShiftY = 0;
        };
}), b.register('4me3n', function(b, d) {
    a(b.exports, 'OnBackToBase', function() {
        return c;
    });
    const c = a => {
        a.goingBackToBase = !0, a.tweens.add({
            targets: a,
            shadowAlpha: 0,
            shadowScale: 0,
            ease: Phaser.Math.Easing.Back.In,
            duration: 200
        }), a.tweens.add({
            targets: a,
            backScale: 0,
            ease: Phaser.Math.Easing.Back.In,
            duration: 300
        }), a.tweens.add({
            targets: a,
            backAlpha: 0,
            duration: 100,
            delay: 150,
            onComplete: () => {
                a.goingBackToBase = !1, a.dropShiftY = 0, a.pickupShiftY = 0, a.currentFlagX = a.x, a.currentFlagY = a.y, a.tweens.add({
                    targets: a,
                    backScale: 1,
                    ease: Phaser.Math.Easing.Back.Out,
                    duration: 300
                }), a.tweens.add({
                    targets: a,
                    backAlpha: 0,
                    duration: 150
                });
            }
        });
    };
}), b.register('CUvci', function(d, c) {
    a(d.exports, 'UpdateCarriedFlag', function() {
        return e;
    });
    var c = b('EdRoV'),
        d = b('oGwma');
    const e = a => {
        if (a.state.currentState !== d.CurrentState.carried)
            return;
        const f = (0, c.default)(a.state.characterId);
        f && (a.currentFlagX = f.body.x, a.currentFlagY = f.body.y, a.flipScale = f.flip.isFlipped ? -1 : 1);
    };
}), b.register('/Lvpl17', function(b, d) {
    a(b.exports, 'FetchOptionSchemaProperty', function() {
        return c;
    });
    const c = (a, b) => {
        var d, e, f;
        const g = a.deviceOption.optionSchema.options.find(a => a.key === b);
        return {
            min: null === (d = null == g ? void 0 : g.option.props) || void 0 === d ? void 0 : d.min,
            max: null === (e = null == g ? void 0 : g.option.props) || void 0 === e ? void 0 : e.max,
            step: null === (f = null == g ? void 0 : g.option.props) || void 0 === f ? void 0 : f.step
        };
    };
}), b.register('wSwKo5', function(a, h) {
    a(a.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, a) => {
        const h = (0, f.FetchVisualEditingPreview)(),
            i = (0, e.FetchCurrentlyEditedDevice)();
        if (!i || !h)
            return;
        const j = i.layers.isOnNaturalDepth() ? void 0 : b + i.layers.getDepthShift();
        (0, d.default)({
            deviceOption: h.deviceOption,
            id: c.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: j,
            layerId: i.layers.getLayer(),
            name: h.name,
            isPreview: !0,
            options: {
                ...h.options,
                ...a
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(a, i) {
    a(a.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
});