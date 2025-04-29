function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('rJDZI', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _z;
    });
    var f = b('s/YA9'),
        g = b('ltxDW'),
        h = b('av19s'),
        i = b('h6XAb'),
        j = b('UkCpC'),
        k = b('GIe9o'),
        l = b('mSv2o'),
        m = b('33zcM'),
        n = b('Gq90W'),
        o = b('1itrS'),
        p = b('eDCbM'),
        q = b('edU7I'),
        r = b('5vCOh'),
        s = b('yn+jb'),
        t = b('H4eGM'),
        u = b('09Gub'),
        v = b('hycyg'),
        w = b('uc4mA17'),
        x = b('u/WlI21');
    class y extends g.default {
        constructor(z) {
            if (super(z), (0, f.default)(this, 'goingBackToBase', !1), (0, f.default)(this, 'idleRotation', 0), (0, f.default)(this, 'currentFlagX', 0), (0, f.default)(this, 'currentFlagY', 0), (0, f.default)(this, 'pickupShiftX', 0), (0, f.default)(this, 'pickupShiftY', 0), (0, f.default)(this, 'dropShiftY', 0), (0, f.default)(this, 'backScale', 1), (0, f.default)(this, 'backAlpha', 1), (0, f.default)(this, 'shadowAlpha', 0), (0, f.default)(this, 'shadowScale', 0), (0, f.default)(this, 'flipScale', 1), (0, f.default)(this, 'cumulTime', 1000 * Math.random()), (0, f.default)(this, 'onUpdate', z => {
                    (0, s.UpdateCarriedFlag)(this), this.cumulTime += z, this.idleRotation = Math.sin(this.cumulTime / 400 / m.Consts.FlagSwingInterval) * m.Consts.FlagSwingAmplitude, this.flag.view.rotation = this.idleRotation, this.flag.view.scaleX = m.Consts.BaseScale * this.flipScale, this.flag.view.scaleY = m.Consts.BaseScale * this.backScale, this.flag.view.x = this.currentFlagX + this.pickupShiftX, this.flag.view.y = this.currentFlagY + this.pickupShiftY + this.dropShiftY, this.flag.view.setDepth((0, l.GetGlobalDepth)(this.flag.view.y, k.default.DepthSortedCharactersAndDevices)), this.flagShadow.view.alpha = this.shadowAlpha, this.flagShadow.view.scaleX = this.flagShadow.view.scaleY = this.shadowScale;
                }), (0, f.default)(this, 'transitionToState', () => {
                    this.state.currentState === h.CurrentState.carried ? (0, p.OnPickup)(this) : this.state.currentState === h.CurrentState.dropped ? (0, q.OnDrop)(this) : this.state.currentState === h.CurrentState.idle && (0, r.OnBackToBase)(this);
                }), (0, f.default)(this, 'onStateChange', z => {
                    (0, o.UpdateZone)(this), (0, n.UpdateInteractiveInfo)(this), 'currentState' === z && this.transitionToState(), 'characterId' === z && this.state.characterId && (this.lastCharacterIdToHoldFlag = this.state.characterId);
                }), (0, f.default)(this, 'setupVisualEditing', () => {
                    if (!(0, j.InPreGamePhase)() || !(0, v.isSavedVersion)())
                        return;
                    const A = (0, w.FetchOptionSchemaProperty)(this, 'radius');
                    this.visualEditing.add.circle({
                        radius: this.options.radius,
                        minRadius: A.min,
                        maxRadius: A.max,
                        rotable: !1,
                        onChange: A => {
                            (0, x.ReplaceVisualEditingPreview)(A.x, A.y, {
                                radius: A.radius
                            });
                        }
                    });
                }), (0, f.default)(this, 'isInBase', () => this.state.currentState === h.CurrentState.idle), this.cull.ignoreCulling(), this.flag = this.parts.add.sprite({
                    ...(0, i.GetFlagAsset)(this.options.flagColor),
                    originX: m.Consts.FlagOriginX,
                    originY: m.Consts.FlagOriginY,
                    onReady: z => {
                        z.view.setScale(m.Consts.BaseScale);
                    }
                }), this.flagPlatform = this.parts.add.sprite({
                    ...i.FlagPlatform,
                    originX: m.Consts.PlatformOriginX,
                    originY: m.Consts.PlatformOriginY,
                    layerId: k.default.DevicesUnderCharacters,
                    depthChange: (0, t.default)(2),
                    onReady: z => {
                        z.view.setScale(m.Consts.BaseScale);
                    }
                }), this.flagShadow = this.parts.add.sprite({
                    ...i.FlagShadow,
                    layerId: k.default.DevicesUnderCharacters,
                    onReady: z => {
                        z.view.setScale(0);
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
}), b.register('av19s', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    a(c.exports, 'CurrentState', function() {
        return g;
    }), (f = e || (e = {})).black = 'black', f.blue = 'blue', f.green = 'green', f.orange = 'orange', f.purple = 'purple', f.red = 'red', f.white = 'white', (h = g || (g = {})).idle = 'idle', h.carried = 'carried', h.dropped = 'dropped';
    g.idle;
}), b.register('h6XAb', function(c, d) {
    a(c.exports, 'FlagPlatform', function() {
        return _f;
    }), a(c.exports, 'FlagShadow', function() {
        return _g;
    }), a(c.exports, 'GetFlagAsset', function() {
        return _h;
    });
    var e = b('UaUBz0');
    const _f = {
            imageId: 'flag_platform',
            imageUrl: (0, e.default)('devices/flag/flag_platform.png')
        },
        _g = {
            imageId: 'flag_shadow',
            imageUrl: (0, e.default)('devices/shadow/shadow_device.png')
        },
        _h = a => ({
            imageId: `flag_${ a }`,
            imageUrl: (0, e.default)(`devices/flag/flag_${ a }.png`)
        });
}), b.register('33zcM', function(c, d) {
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
}), b.register('Gq90W', function(c, d) {
    a(c.exports, 'UpdateInteractiveInfo', function() {
        return _j;
    });
    var e = b('09Gub'),
        f = b('UkCpC'),
        g = b('33zcM'),
        h = b('av19s'),
        i = b('ITS8K');
    const _j = a => {
        if ((0, f.InPreGamePhase)())
            return;
        if (!(0, i.FetchMapOptions)().interactiveItemsSlots)
            return void a.interactiveZones.setInfo({
                message: g.Consts.NoInteractiveSlotsText,
                allowedToInteract: !1,
                topHeaderColor: g.Consts.NoInteractiveSlotsHeaderColor,
                topHeader: g.Consts.NoInteractiveSlotsHeader,
                duration: 1
            });
        const k = a.options.owningTeamId === (0, e.default)(),
            l = a.state.currentState === h.CurrentState.dropped,
            m = a.state.currentState === h.CurrentState.idle;
        return k && l ? (a.interactiveZones.setForceDisabled(!1), void a.interactiveZones.setInfo({
            message: g.Consts.BackToBaseText,
            allowedToInteract: !0,
            duration: 1
        })) : k || !m && !l ? void a.interactiveZones.setForceDisabled(!0) : (a.interactiveZones.setForceDisabled(!1), void a.interactiveZones.setInfo({
            message: g.Consts.PickUpText,
            allowedToInteract: !0,
            duration: 1
        }));
    };
}), b.register('1itrS', function(c, d) {
    a(c.exports, 'UpdateZone', function() {
        return _f;
    });
    var e = b('av19s');
    const _f = a => {
        if (!a.zone)
            return;
        let g = {
            x: a.x,
            y: a.y
        };
        a.state.currentState === e.CurrentState.dropped && (g.x = a.state.x, g.y = a.state.y);
        const h = g.x - a.x,
            i = g.y - a.y;
        a.zone.x = h, a.zone.y = i;
    };
}), b.register('eDCbM', function(c, d) {
    a(c.exports, 'OnPickup', function() {
        return _k;
    }), a(c.exports, 'SetCarriedState', function() {
        return _l;
    });
    var e = b('d7UqH'),
        f = b('UaUBz0'),
        g = b('5Fjxs'),
        h = b('CbU7r'),
        i = b('3jaMj'),
        j = b('33zcM');
    const _k = a => {
            const l = (0, e.default)(a.state.characterId),
                m = (0, g.default)();
            a.state.characterId === m && (0, i.playSound)({
                path: (0, f.default)('sounds/core/collectItem.mp3'),
                volume: (0, h.getVolume)({
                    volume: 0.7,
                    type: h.SoundType.soundEffect
                })
            }), l && (a.pickupShiftX = a.flag.view.x - l.body.x, a.pickupShiftY = a.flag.view.y - l.body.y, a.tweens.add({
                targets: a,
                pickupShiftX: 0,
                pickupShiftY: j.Consts.FlagDockedShift,
                duration: 250,
                ease: Phaser.Math.Easing.Back.Out
            }), a.tweens.add({
                targets: a,
                shadowAlpha: 0,
                shadowScale: 0,
                duration: 100
            }));
        },
        _l = a => {
            a.pickupShiftX = 0, a.pickupShiftY = j.Consts.FlagDockedShift;
        };
}), b.register('edU7I', function(c, d) {
    a(c.exports, 'OnDrop', function() {
        return _j;
    }), a(c.exports, 'SetDroppedState', function() {
        return _k;
    });
    var e = b('UaUBz0'),
        f = b('5Fjxs'),
        g = b('CbU7r'),
        h = b('3jaMj'),
        i = b('33zcM');
    const _j = a => {
            a.lastCharacterIdToHoldFlag === (0, f.default)() && (0, h.playSound)({
                path: (0, e.default)('sounds/core/dropItem.mp3'),
                volume: (0, g.getVolume)({
                    volume: 0.45,
                    type: g.SoundType.soundEffect
                })
            }), a.flagShadow.view.x = a.state.x, a.flagShadow.view.y = a.state.y + i.Consts.FlagDropShift, a.pickupShiftY = i.Consts.FlagDockedShift, a.tweens.add({
                targets: a,
                currentFlagX: a.state.x,
                currentFlagY: a.state.y,
                duration: 300
            }), a.tweens.add({
                targets: a,
                dropShiftY: -i.Consts.FlagDropHeight,
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
        _k = a => {
            a.flagShadow.view.x = a.state.x, a.flagShadow.view.y = a.state.y + i.Consts.FlagDropShift, a.pickupShiftY = i.Consts.FlagDockedShift, a.currentFlagX = a.state.x, a.currentFlagY = a.state.y, a.shadowAlpha = 0.5, a.shadowScale = 0.25, a.dropShiftY = 0;
        };
}), b.register('5vCOh', function(c, d) {
    a(c.exports, 'OnBackToBase', function() {
        return _e;
    });
    const _e = a => {
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
}), b.register('yn+jb', function(c, d) {
    a(c.exports, 'UpdateCarriedFlag', function() {
        return _g;
    });
    var e = b('d7UqH'),
        f = b('av19s');
    const _g = a => {
        if (a.state.currentState !== f.CurrentState.carried)
            return;
        const h = (0, e.default)(a.state.characterId);
        h && (a.currentFlagX = h.body.x, a.currentFlagY = h.body.y, a.flipScale = h.flip.isFlipped ? -1 : 1);
    };
}), b.register('uc4mA17', function(c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function() {
        return _e;
    });
    const _e = (a, c) => {
        var f, g, h;
        const i = a.deviceOption.optionSchema.options.find(a => a.key === c);
        return {
            min: null === (f = null == i ? void 0 : i.option.props) || void 0 === f ? void 0 : f.min,
            max: null === (g = null == i ? void 0 : i.option.props) || void 0 === g ? void 0 : g.max,
            step: null === (h = null == i ? void 0 : i.option.props) || void 0 === h ? void 0 : h.step
        };
    };
}), b.register('u/WlI21', function(c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function() {
        return _i;
    });
    var e = b('hemXM'),
        f = b('sWmxu5'),
        g = b('EzUqb'),
        h = b('GQMbT');
    const _i = (a, b, c) => {
        const j = (0, h.FetchVisualEditingPreview)(),
            k = (0, g.FetchCurrentlyEditedDevice)();
        if (!k || !j)
            return;
        const l = k.layers.isOnNaturalDepth() ? void 0 : b + k.layers.getDepthShift();
        (0, f.default)({
            deviceOption: j.deviceOption,
            id: e.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: l,
            layerId: k.layers.getLayer(),
            name: j.name,
            isPreview: !0,
            options: {
                ...j.options,
                ...c
            },
            placedByClient: !0,
            state: j.deviceOption.defaultState
        });
    };
}), b.register('sWmxu5', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('heTaO'),
        f = b('2LtPo');
    var _g = a => {
        (0, e.default)().worldManager.devices.getDeviceById(a.id) && (0, f.default)(a);
    };
});