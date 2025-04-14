function t(t, e, a, i) {
    Object.defineProperty(t, e, {
        get: a,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("1QGRJ", (function(a, i) {
    var r;
    r = a.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), t(a.exports, "default", (function() {
        return k
    }));
    var s = e("divCp"),
        n = e("bNmF9"),
        o = e("9akbZ"),
        d = e("kD2Z6"),
        l = e("6Tpu2"),
        c = e("bvStP"),
        u = e("jA9Ql"),
        h = e("efsDV"),
        p = e("a5ZMe"),
        f = e("cpvHe"),
        g = e("aiwFZ"),
        S = e("kXNtU"),
        v = e("hW9Ub"),
        w = e("9pePj"),
        C = e("050o1"),
        y = e("aKxRF"),
        m = e("4uojN"),
        F = e("cK78N"),
        x = e("cnijD");
    class I extends n.default {
        constructor(t) {
            if (super(t), (0, s.default)(this, "goingBackToBase", !1), (0, s.default)(this, "idleRotation", 0), (0, s.default)(this, "currentFlagX", 0), (0, s.default)(this, "currentFlagY", 0), (0, s.default)(this, "pickupShiftX", 0), (0, s.default)(this, "pickupShiftY", 0), (0, s.default)(this, "dropShiftY", 0), (0, s.default)(this, "backScale", 1), (0, s.default)(this, "backAlpha", 1), (0, s.default)(this, "shadowAlpha", 0), (0, s.default)(this, "shadowScale", 0), (0, s.default)(this, "flipScale", 1), (0, s.default)(this, "cumulTime", 1e3 * Math.random()), (0, s.default)(this, "onUpdate", (t => {
                    (0, w.UpdateCarriedFlag)(this), this.cumulTime += t, this.idleRotation = Math.sin(this.cumulTime / 400 / h.Consts.FlagSwingInterval) * h.Consts.FlagSwingAmplitude, this.flag.view.rotation = this.idleRotation, this.flag.view.scaleX = h.Consts.BaseScale * this.flipScale, this.flag.view.scaleY = h.Consts.BaseScale * this.backScale, this.flag.view.x = this.currentFlagX + this.pickupShiftX, this.flag.view.y = this.currentFlagY + this.pickupShiftY + this.dropShiftY, this.flag.view.setDepth((0, u.GetGlobalDepth)(this.flag.view.y, c.default.DepthSortedCharactersAndDevices)), this.flagShadow.view.alpha = this.shadowAlpha, this.flagShadow.view.scaleX = this.flagShadow.view.scaleY = this.shadowScale
                })), (0, s.default)(this, "transitionToState", (() => {
                    this.state.currentState === o.CurrentState.carried ? (0, g.OnPickup)(this) : this.state.currentState === o.CurrentState.dropped ? (0, S.OnDrop)(this) : this.state.currentState === o.CurrentState.idle && (0, v.OnBackToBase)(this)
                })), (0, s.default)(this, "onStateChange", (t => {
                    (0, f.UpdateZone)(this), (0, p.UpdateInteractiveInfo)(this), "currentState" === t && this.transitionToState(), "characterId" === t && this.state.characterId && (this.lastCharacterIdToHoldFlag = this.state.characterId)
                })), (0, s.default)(this, "setupVisualEditing", (() => {
                    if (!(0, l.InPreGamePhase)() || !(0, m.isSavedVersion)()) return;
                    const t = (0, F.FetchOptionSchemaProperty)(this, "radius");
                    this.visualEditing.add.circle({
                        radius: this.options.radius,
                        minRadius: t.min,
                        maxRadius: t.max,
                        rotable: !1,
                        onChange: t => {
                            (0, x.ReplaceVisualEditingPreview)(t.x, t.y, {
                                radius: t.radius
                            })
                        }
                    })
                })), (0, s.default)(this, "isInBase", (() => this.state.currentState === o.CurrentState.idle)), this.cull.ignoreCulling(), this.flag = this.parts.add.sprite({
                    ...(0, d.GetFlagAsset)(this.options.flagColor),
                    originX: h.Consts.FlagOriginX,
                    originY: h.Consts.FlagOriginY,
                    onReady: t => {
                        t.view.setScale(h.Consts.BaseScale)
                    }
                }), this.flagPlatform = this.parts.add.sprite({
                    ...d.FlagPlatform,
                    originX: h.Consts.PlatformOriginX,
                    originY: h.Consts.PlatformOriginY,
                    layerId: c.default.DevicesUnderCharacters,
                    depthChange: (0, C.default)(2),
                    onReady: t => {
                        t.view.setScale(h.Consts.BaseScale)
                    }
                }), this.flagShadow = this.parts.add.sprite({
                    ...d.FlagShadow,
                    layerId: c.default.DevicesUnderCharacters,
                    onReady: t => {
                        t.view.setScale(0)
                    }
                }), this.currentFlagX = this.x, this.currentFlagY = this.y, (0, l.InGamePhase)() && (this.zone = this.interactiveZones.add.circle({
                    r: h.Consts.InteractivityRadius
                }), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice("interact")
                }, (0, p.UpdateInteractiveInfo)(this), (0, f.UpdateZone)(this), this.state.currentState === o.CurrentState.carried ? (0, g.SetCarriedState)(this) : this.state.currentState === o.CurrentState.dropped && (0, S.SetDroppedState)(this)), this.options.useSafeZone) {
                this.setupVisualEditing();
                const t = this.options.owningTeamId === (0, y.default)();
                this.parts.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius,
                    color: t ? h.Consts.Colors.SafeZone.Body.Owner : h.Consts.Colors.SafeZone.Body.NonOwner,
                    alpha: .2,
                    borderColor: t ? h.Consts.Colors.SafeZone.Border.Owner : h.Consts.Colors.SafeZone.Border.NonOwner,
                    borderAlpha: .5,
                    borderWidth: 4,
                    depthChange: (0, C.default)(1)
                }), t && this.colliders.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius
                })
            }
            this.lastCharacterIdToHoldFlag = this.state.characterId
        }
    }
    var k = I
})), e.register("9akbZ", (function(e, a) {
    let i;
    var r;
    let s;
    var n;
    t(e.exports, "CurrentState", (function() {
        return s
    })), (r = i || (i = {})).black = "black", r.blue = "blue", r.green = "green", r.orange = "orange", r.purple = "purple", r.red = "red", r.white = "white", (n = s || (s = {})).idle = "idle", n.carried = "carried", n.dropped = "dropped";
    s.idle
})), e.register("kD2Z6", (function(a, i) {
    t(a.exports, "FlagPlatform", (function() {
        return s
    })), t(a.exports, "FlagShadow", (function() {
        return n
    })), t(a.exports, "GetFlagAsset", (function() {
        return o
    }));
    var r = e("alREA");
    const s = {
            imageId: "flag_platform",
            imageUrl: (0, r.default)("devices/flag/flag_platform.png")
        },
        n = {
            imageId: "flag_shadow",
            imageUrl: (0, r.default)("devices/shadow/shadow_device.png")
        },
        o = t => ({
            imageId: `flag_${t}`,
            imageUrl: (0, r.default)(`devices/flag/flag_${t}.png`)
        })
})), e.register("efsDV", (function(e, a) {
    t(e.exports, "Consts", (function() {
        return i
    }));
    const i = {
        FlagOriginX: .935,
        FlagOriginY: 356 / 359,
        PlatformOriginX: 106 / 211,
        PlatformOriginY: 56 / 142,
        BackToBaseText: "Return Flag To Base",
        PickUpText: "Pick Up Flag",
        NoInteractiveSlotsHeader: "No Interactive Slots",
        NoInteractiveSlotsText: "Interactive Items Disabled",
        NoInteractiveSlotsHeaderColor: "#ffcdd2",
        FlagShiftFactor: -.1,
        FlagSwingAmplitude: .1,
        FlagSwingInterval: 1,
        FlagDockedShift: -35,
        FlagDropShift: -35,
        FlagDropHeight: 35,
        BaseScale: .35,
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
    }
})), e.register("a5ZMe", (function(a, i) {
    t(a.exports, "UpdateInteractiveInfo", (function() {
        return l
    }));
    var r = e("aKxRF"),
        s = e("6Tpu2"),
        n = e("efsDV"),
        o = e("9akbZ"),
        d = e("30KqB");
    const l = t => {
        if ((0, s.InPreGamePhase)()) return;
        if (!(0, d.FetchMapOptions)().interactiveItemsSlots) return void t.interactiveZones.setInfo({
            message: n.Consts.NoInteractiveSlotsText,
            allowedToInteract: !1,
            topHeaderColor: n.Consts.NoInteractiveSlotsHeaderColor,
            topHeader: n.Consts.NoInteractiveSlotsHeader,
            duration: 1
        });
        const e = t.options.owningTeamId === (0, r.default)(),
            a = t.state.currentState === o.CurrentState.dropped,
            i = t.state.currentState === o.CurrentState.idle;
        return e && a ? (t.interactiveZones.setForceDisabled(!1), void t.interactiveZones.setInfo({
            message: n.Consts.BackToBaseText,
            allowedToInteract: !0,
            duration: 1
        })) : e || !i && !a ? void t.interactiveZones.setForceDisabled(!0) : (t.interactiveZones.setForceDisabled(!1), void t.interactiveZones.setInfo({
            message: n.Consts.PickUpText,
            allowedToInteract: !0,
            duration: 1
        }))
    }
})), e.register("cpvHe", (function(a, i) {
    t(a.exports, "UpdateZone", (function() {
        return s
    }));
    var r = e("9akbZ");
    const s = t => {
        if (!t.zone) return;
        let e = {
            x: t.x,
            y: t.y
        };
        t.state.currentState === r.CurrentState.dropped && (e.x = t.state.x, e.y = t.state.y);
        const a = e.x - t.x,
            i = e.y - t.y;
        t.zone.x = a, t.zone.y = i
    }
})), e.register("aiwFZ", (function(a, i) {
    t(a.exports, "OnPickup", (function() {
        return c
    })), t(a.exports, "SetCarriedState", (function() {
        return u
    }));
    var r = e("1UlqS"),
        s = e("alREA"),
        n = e("fhnJp"),
        o = e("3iPiZ"),
        d = e("jVQO4"),
        l = e("efsDV");
    const c = t => {
            const e = (0, r.default)(t.state.characterId),
                a = (0, n.default)();
            t.state.characterId === a && (0, d.playSound)({
                path: (0, s.default)("sounds/core/collectItem.mp3"),
                volume: (0, o.getVolume)({
                    volume: .7,
                    type: o.SoundType.soundEffect
                })
            }), e && (t.pickupShiftX = t.flag.view.x - e.body.x, t.pickupShiftY = t.flag.view.y - e.body.y, t.tweens.add({
                targets: t,
                pickupShiftX: 0,
                pickupShiftY: l.Consts.FlagDockedShift,
                duration: 250,
                ease: Phaser.Math.Easing.Back.Out
            }), t.tweens.add({
                targets: t,
                shadowAlpha: 0,
                shadowScale: 0,
                duration: 100
            }))
        },
        u = t => {
            t.pickupShiftX = 0, t.pickupShiftY = l.Consts.FlagDockedShift
        }
})), e.register("kXNtU", (function(a, i) {
    t(a.exports, "OnDrop", (function() {
        return l
    })), t(a.exports, "SetDroppedState", (function() {
        return c
    }));
    var r = e("alREA"),
        s = e("fhnJp"),
        n = e("3iPiZ"),
        o = e("jVQO4"),
        d = e("efsDV");
    const l = t => {
            t.lastCharacterIdToHoldFlag === (0, s.default)() && (0, o.playSound)({
                path: (0, r.default)("sounds/core/dropItem.mp3"),
                volume: (0, n.getVolume)({
                    volume: .45,
                    type: n.SoundType.soundEffect
                })
            }), t.flagShadow.view.x = t.state.x, t.flagShadow.view.y = t.state.y + d.Consts.FlagDropShift, t.pickupShiftY = d.Consts.FlagDockedShift, t.tweens.add({
                targets: t,
                currentFlagX: t.state.x,
                currentFlagY: t.state.y,
                duration: 300
            }), t.tweens.add({
                targets: t,
                dropShiftY: -d.Consts.FlagDropHeight,
                duration: 150,
                ease: Phaser.Math.Easing.Sine.Out,
                onComplete: () => {
                    t.tweens.add({
                        targets: t,
                        shadowAlpha: .5,
                        shadowScale: .25,
                        ease: Phaser.Math.Easing.Back.Out,
                        duration: 200
                    }), t.tweens.add({
                        targets: t,
                        dropShiftY: 0,
                        duration: 150,
                        ease: Phaser.Math.Easing.Sine.In
                    })
                }
            })
        },
        c = t => {
            t.flagShadow.view.x = t.state.x, t.flagShadow.view.y = t.state.y + d.Consts.FlagDropShift, t.pickupShiftY = d.Consts.FlagDockedShift, t.currentFlagX = t.state.x, t.currentFlagY = t.state.y, t.shadowAlpha = .5, t.shadowScale = .25, t.dropShiftY = 0
        }
})), e.register("hW9Ub", (function(e, a) {
    t(e.exports, "OnBackToBase", (function() {
        return i
    }));
    const i = t => {
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
                })
            }
        })
    }
})), e.register("9pePj", (function(a, i) {
    t(a.exports, "UpdateCarriedFlag", (function() {
        return n
    }));
    var r = e("1UlqS"),
        s = e("9akbZ");
    const n = t => {
        if (t.state.currentState !== s.CurrentState.carried) return;
        const e = (0, r.default)(t.state.characterId);
        e && (t.currentFlagX = e.body.x, t.currentFlagY = e.body.y, t.flipScale = e.flip.isFlipped ? -1 : 1)
    }
})), e.register("cK78N", (function(e, a) {
    t(e.exports, "FetchOptionSchemaProperty", (function() {
        return i
    }));
    const i = (t, e) => {
        var a, i, r;
        const s = t.deviceOption.optionSchema.options.find((t => t.key === e));
        return {
            min: null === (a = null == s ? void 0 : s.option.props) || void 0 === a ? void 0 : a.min,
            max: null === (i = null == s ? void 0 : s.option.props) || void 0 === i ? void 0 : i.max,
            step: null === (r = null == s ? void 0 : s.option.props) || void 0 === r ? void 0 : r.step
        }
    }
})), e.register("cnijD", (function(a, i) {
    t(a.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var r = e("dWqri"),
        s = e("eCsxR"),
        n = e("ittx1"),
        o = e("dNzyU");
    const d = (t, e, a) => {
        const i = (0, o.FetchVisualEditingPreview)(),
            d = (0, n.FetchCurrentlyEditedDevice)();
        if (!d || !i) return;
        const l = d.layers.isOnNaturalDepth() ? void 0 : e + d.layers.getDepthShift();
        (0, s.default)({
            deviceOption: i.deviceOption,
            id: r.VisualEditingConstants.previewId,
            x: t,
            y: e,
            depth: l,
            layerId: d.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...a
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        })
    }
})), e.register("eCsxR", (function(a, i) {
    t(a.exports, "default", (function() {
        return n
    }));
    var r = e("gwuwo"),
        s = e("fCcDT");
    var n = t => {
        (0, r.default)().worldManager.devices.getDeviceById(t.id) && (0, s.default)(t)
    }
}));