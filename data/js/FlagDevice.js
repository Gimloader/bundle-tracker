import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./playSound.js";
import {
    D as n,
    o as r,
    s as i,
    u as a
} from "./FixPhaserBootProcess.js";
import {
    n as o
} from "./isVersion.js";
import {
    r as s,
    t as c
} from "./InPhase.js";
import {
    t as l
} from "./FetchMyId.js";
import {
    t as u
} from "./FetchMyTeam.js";
import {
    t as d
} from "./Device.js";
import {
    r as f,
    t as p
} from "./GlobalLocalDepth.js";
import {
    Et as m
} from "./App-42.js";
import {
    n as h,
    t as g
} from "./FetchOptionSchemaProperty.js";
import {
    t as _
} from "./Interfaces.js";
var v = {
        imageId: `flag_platform`,
        imageUrl: e(`devices/flag/flag_platform.png`)
    },
    y = {
        imageId: `flag_shadow`,
        imageUrl: e(`devices/shadow/shadow_device.png`)
    },
    b = t => ({
        imageId: `flag_${t}`,
        imageUrl: e(`devices/flag/flag_${t}.png`)
    }),
    x = {
        FlagOriginX: 187 / 200,
        FlagOriginY: 356 / 359,
        PlatformOriginX: 106 / 211,
        PlatformOriginY: 56 / 142,
        BackToBaseText: `Return Flag To Base`,
        PickUpText: `Pick Up Flag`,
        NoInteractiveSlotsHeader: `No Interactive Slots`,
        NoInteractiveSlotsText: `Interactive Items Disabled`,
        NoInteractiveSlotsHeaderColor: `#ffcdd2`,
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
    },
    S = e => {
        if (s()) return;
        if (!a().interactiveItemsSlots) {
            e.interactiveZones.setInfo({
                message: x.NoInteractiveSlotsText,
                allowedToInteract: !1,
                topHeaderColor: x.NoInteractiveSlotsHeaderColor,
                topHeader: x.NoInteractiveSlotsHeader,
                duration: 1
            });
            return
        }
        let t = e.options.owningTeamId === u(),
            n = e.state.currentState === _.dropped,
            r = e.state.currentState === _.idle;
        t && n ? (e.interactiveZones.setForceDisabled(!1), e.interactiveZones.setInfo({
            message: x.BackToBaseText,
            allowedToInteract: !0,
            duration: 1
        })) : !t && (r || n) ? (e.interactiveZones.setForceDisabled(!1), e.interactiveZones.setInfo({
            message: x.PickUpText,
            allowedToInteract: !0,
            duration: 1
        })) : e.interactiveZones.setForceDisabled(!0)
    },
    C = e => {
        if (!e.zone) return;
        let t = {
            x: e.x,
            y: e.y
        };
        e.state.currentState === _.dropped && (t.x = e.state.x, t.y = e.state.y);
        let n = t.x - e.x,
            r = t.y - e.y;
        e.zone.x = n, e.zone.y = r
    },
    w = a => {
        let o = n(a.state.characterId),
            s = l();
        a.state.characterId === s && t({
            path: e(`sounds/core/collectItem.mp3`),
            volume: i({
                volume: .7,
                type: r.soundEffect
            })
        }), o && (a.pickupShiftX = a.flag.view.x - o.body.x, a.pickupShiftY = a.flag.view.y - o.body.y, a.tweens.add({
            targets: a,
            pickupShiftX: 0,
            pickupShiftY: x.FlagDockedShift,
            duration: 250,
            ease: Phaser.Math.Easing.Back.Out
        }), a.tweens.add({
            targets: a,
            shadowAlpha: 0,
            shadowScale: 0,
            duration: 100
        }))
    },
    T = e => {
        e.pickupShiftX = 0, e.pickupShiftY = x.FlagDockedShift
    },
    E = n => {
        n.lastCharacterIdToHoldFlag === l() && t({
            path: e(`sounds/core/dropItem.mp3`),
            volume: i({
                volume: .45,
                type: r.soundEffect
            })
        }), n.flagShadow.view.x = n.state.x, n.flagShadow.view.y = n.state.y + x.FlagDropShift, n.pickupShiftY = x.FlagDockedShift, n.tweens.add({
            targets: n,
            currentFlagX: n.state.x,
            currentFlagY: n.state.y,
            duration: 300
        }), n.tweens.add({
            targets: n,
            dropShiftY: -x.FlagDropHeight,
            duration: 150,
            ease: Phaser.Math.Easing.Sine.Out,
            onComplete: () => {
                n.tweens.add({
                    targets: n,
                    shadowAlpha: .5,
                    shadowScale: .25,
                    ease: Phaser.Math.Easing.Back.Out,
                    duration: 200
                }), n.tweens.add({
                    targets: n,
                    dropShiftY: 0,
                    duration: 150,
                    ease: Phaser.Math.Easing.Sine.In
                })
            }
        })
    },
    D = e => {
        e.flagShadow.view.x = e.state.x, e.flagShadow.view.y = e.state.y + x.FlagDropShift, e.pickupShiftY = x.FlagDockedShift, e.currentFlagX = e.state.x, e.currentFlagY = e.state.y, e.shadowAlpha = .5, e.shadowScale = .25, e.dropShiftY = 0
    },
    O = e => {
        e.goingBackToBase = !0, e.tweens.add({
            targets: e,
            shadowAlpha: 0,
            shadowScale: 0,
            ease: Phaser.Math.Easing.Back.In,
            duration: 200
        }), e.tweens.add({
            targets: e,
            backScale: 0,
            ease: Phaser.Math.Easing.Back.In,
            duration: 300
        }), e.tweens.add({
            targets: e,
            backAlpha: 0,
            duration: 100,
            delay: 150,
            onComplete: () => {
                e.goingBackToBase = !1, e.dropShiftY = 0, e.pickupShiftY = 0, e.currentFlagX = e.x, e.currentFlagY = e.y, e.tweens.add({
                    targets: e,
                    backScale: 1,
                    ease: Phaser.Math.Easing.Back.Out,
                    duration: 300
                }), e.tweens.add({
                    targets: e,
                    backAlpha: 0,
                    duration: 150
                })
            }
        })
    },
    k = e => {
        if (e.state.currentState !== _.carried) return;
        let t = n(e.state.characterId);
        t && (e.currentFlagX = t.body.x, e.currentFlagY = t.body.y, e.flipScale = t.flip.isFlipped ? -1 : 1)
    },
    A = class extends d {
        constructor(e) {
            if (super(e), this.goingBackToBase = !1, this.idleRotation = 0, this.currentFlagX = 0, this.currentFlagY = 0, this.pickupShiftX = 0, this.pickupShiftY = 0, this.dropShiftY = 0, this.backScale = 1, this.backAlpha = 1, this.shadowAlpha = 0, this.shadowScale = 0, this.flipScale = 1, this.cumulTime = Math.random() * 1e3, this.onUpdate = e => {
                    k(this), this.cumulTime += e, this.idleRotation = Math.sin(this.cumulTime / 400 / x.FlagSwingInterval) * x.FlagSwingAmplitude, this.flag.view.rotation = this.idleRotation, this.flag.view.scaleX = x.BaseScale * this.flipScale, this.flag.view.scaleY = x.BaseScale * this.backScale, this.flag.view.x = this.currentFlagX + this.pickupShiftX, this.flag.view.y = this.currentFlagY + this.pickupShiftY + this.dropShiftY, this.flag.view.setDepth(p(this.flag.view.y, f.DepthSortedCharactersAndDevices)), this.flagShadow.view.alpha = this.shadowAlpha, this.flagShadow.view.scaleX = this.flagShadow.view.scaleY = this.shadowScale
                }, this.transitionToState = () => {
                    this.state.currentState === _.carried ? w(this) : this.state.currentState === _.dropped ? E(this) : this.state.currentState === _.idle && O(this)
                }, this.onStateChange = e => {
                    C(this), S(this), e === `currentState` && this.transitionToState(), e === `characterId` && this.state.characterId && (this.lastCharacterIdToHoldFlag = this.state.characterId)
                }, this.setupVisualEditing = () => {
                    if (!s() || !o()) return;
                    let e = g(this, `radius`);
                    this.visualEditing.add.circle({
                        radius: this.options.radius,
                        minRadius: e.min,
                        maxRadius: e.max,
                        rotable: !1,
                        onChange: e => {
                            h(e.x, e.y, {
                                radius: e.radius
                            })
                        }
                    })
                }, this.isInBase = () => this.state.currentState === _.idle, this.cull.ignoreCulling(), this.flag = this.parts.add.sprite({
                    ...b(this.options.flagColor),
                    originX: x.FlagOriginX,
                    originY: x.FlagOriginY,
                    onReady: e => {
                        e.view.setScale(x.BaseScale)
                    }
                }), this.flagPlatform = this.parts.add.sprite({
                    ...v,
                    originX: x.PlatformOriginX,
                    originY: x.PlatformOriginY,
                    layerId: f.DevicesUnderCharacters,
                    depthChange: m(2),
                    onReady: e => {
                        e.view.setScale(x.BaseScale)
                    }
                }), this.flagShadow = this.parts.add.sprite({
                    ...y,
                    layerId: f.DevicesUnderCharacters,
                    onReady: e => {
                        e.view.setScale(0)
                    }
                }), this.currentFlagX = this.x, this.currentFlagY = this.y, c() && (this.zone = this.interactiveZones.add.circle({
                    r: x.InteractivityRadius
                }), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(`interact`)
                }, S(this), C(this), this.state.currentState === _.carried ? T(this) : this.state.currentState === _.dropped && D(this)), this.options.useSafeZone) {
                this.setupVisualEditing();
                let e = this.options.owningTeamId === u();
                this.parts.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius,
                    color: e ? x.Colors.SafeZone.Body.Owner : x.Colors.SafeZone.Body.NonOwner,
                    alpha: .2,
                    borderColor: e ? x.Colors.SafeZone.Border.Owner : x.Colors.SafeZone.Border.NonOwner,
                    borderAlpha: .5,
                    borderWidth: 4,
                    depthChange: m(1)
                }), e && this.colliders.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius
                })
            }
            this.lastCharacterIdToHoldFlag = this.state.characterId
        }
    };
export {
    A as
    default
};