import {
    aW as w,
    b5 as g,
    T as d,
    al as F,
    G as I,
    L as n,
    as as l
} from "./App-41.js";
import {
    C as s
} from "./Interfaces.js";
import {
    G as o
} from "./GetAssetPath.js";
import {
    I as c,
    F as m,
    g as f,
    S as u,
    i as y,
    d as k
} from "./FixSpinePlugin.js";
import {
    p as S
} from "./playSound.js";
import {
    F as x,
    R as B
} from "./ReplaceVisualEditingPreview.js";
import "./_index.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./motion.js";
import "./index-2.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-3.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./progress.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./howler.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
const C = {
        imageId: "flag_platform",
        imageUrl: o("devices/flag/flag_platform.png")
    },
    T = {
        imageId: "flag_shadow",
        imageUrl: o("devices/shadow/shadow_device.png")
    },
    Y = t => ({
        imageId: `flag_${t}`,
        imageUrl: o(`devices/flag/flag_${t}.png`)
    }),
    a = {
        FlagOriginX: 187 / 200,
        FlagOriginY: 356 / 359,
        PlatformOriginX: 106 / 211,
        PlatformOriginY: 56 / 142,
        BackToBaseText: "Return Flag To Base",
        PickUpText: "Pick Up Flag",
        NoInteractiveSlotsHeader: "No Interactive Slots",
        NoInteractiveSlotsText: "Interactive Items Disabled",
        NoInteractiveSlotsHeaderColor: "#ffcdd2",
        FlagSwingAmplitude: .1,
        FlagSwingInterval: 1,
        FlagDockedShift: -35,
        FlagDropShift: -35,
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
    h = t => {
        if (c()) return;
        if (!w().interactiveItemsSlots) {
            t.interactiveZones.setInfo({
                message: a.NoInteractiveSlotsText,
                allowedToInteract: !1,
                topHeaderColor: a.NoInteractiveSlotsHeaderColor,
                topHeader: a.NoInteractiveSlotsHeader,
                duration: 1
            });
            return
        }
        const i = t.options.owningTeamId === g(),
            r = t.state.currentState === s.dropped,
            e = t.state.currentState === s.idle;
        if (i && r) {
            t.interactiveZones.setForceDisabled(!1), t.interactiveZones.setInfo({
                message: a.BackToBaseText,
                allowedToInteract: !0,
                duration: 1
            });
            return
        }
        if (!i && (e || r)) {
            t.interactiveZones.setForceDisabled(!1), t.interactiveZones.setInfo({
                message: a.PickUpText,
                allowedToInteract: !0,
                duration: 1
            });
            return
        }
        t.interactiveZones.setForceDisabled(!0)
    },
    p = t => {
        if (!t.zone) return;
        let i = {
            x: t.x,
            y: t.y
        };
        t.state.currentState === s.dropped && (i.x = t.state.x, i.y = t.state.y);
        const r = i.x - t.x,
            e = i.y - t.y;
        t.zone.x = r, t.zone.y = e
    },
    D = t => {
        const i = m(t.state.characterId),
            r = d();
        t.state.characterId === r && S({
            path: o("sounds/core/collectItem.mp3"),
            volume: f({
                volume: .7,
                type: u.soundEffect
            })
        }), i && (t.pickupShiftX = t.flag.view.x - i.body.x, t.pickupShiftY = t.flag.view.y - i.body.y, t.tweens.add({
            targets: t,
            pickupShiftX: 0,
            pickupShiftY: a.FlagDockedShift,
            duration: 250,
            ease: Phaser.Math.Easing.Back.Out
        }), t.tweens.add({
            targets: t,
            shadowAlpha: 0,
            shadowScale: 0,
            duration: 100
        }))
    },
    O = t => {
        t.pickupShiftX = 0, t.pickupShiftY = a.FlagDockedShift
    },
    P = t => {
        t.lastCharacterIdToHoldFlag === d() && S({
            path: o("sounds/core/dropItem.mp3"),
            volume: f({
                volume: .45,
                type: u.soundEffect
            })
        }), t.flagShadow.view.x = t.state.x, t.flagShadow.view.y = t.state.y + a.FlagDropShift, t.pickupShiftY = a.FlagDockedShift, t.tweens.add({
            targets: t,
            currentFlagX: t.state.x,
            currentFlagY: t.state.y,
            duration: 300
        }), t.tweens.add({
            targets: t,
            dropShiftY: -35,
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
    b = t => {
        t.flagShadow.view.x = t.state.x, t.flagShadow.view.y = t.state.y + a.FlagDropShift, t.pickupShiftY = a.FlagDockedShift, t.currentFlagX = t.state.x, t.currentFlagY = t.state.y, t.shadowAlpha = .5, t.shadowScale = .25, t.dropShiftY = 0
    },
    X = t => {
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
    },
    A = t => {
        if (t.state.currentState !== s.carried) return;
        const i = m(t.state.characterId);
        i && (t.currentFlagX = i.body.x, t.currentFlagY = i.body.y, t.flipScale = i.flip.isFlipped ? -1 : 1)
    };
class Qt extends F {
    constructor(i) {
        if (super(i), this.goingBackToBase = !1, this.idleRotation = 0, this.currentFlagX = 0, this.currentFlagY = 0, this.pickupShiftX = 0, this.pickupShiftY = 0, this.dropShiftY = 0, this.backScale = 1, this.backAlpha = 1, this.shadowAlpha = 0, this.shadowScale = 0, this.flipScale = 1, this.cumulTime = Math.random() * 1e3, this.onUpdate = r => {
                A(this), this.cumulTime += r, this.idleRotation = Math.sin(this.cumulTime / 400 / a.FlagSwingInterval) * a.FlagSwingAmplitude, this.flag.view.rotation = this.idleRotation, this.flag.view.scaleX = a.BaseScale * this.flipScale, this.flag.view.scaleY = a.BaseScale * this.backScale, this.flag.view.x = this.currentFlagX + this.pickupShiftX, this.flag.view.y = this.currentFlagY + this.pickupShiftY + this.dropShiftY, this.flag.view.setDepth(I(this.flag.view.y, n.DepthSortedCharactersAndDevices)), this.flagShadow.view.alpha = this.shadowAlpha, this.flagShadow.view.scaleX = this.flagShadow.view.scaleY = this.shadowScale
            }, this.transitionToState = () => {
                this.state.currentState === s.carried ? D(this) : this.state.currentState === s.dropped ? P(this) : this.state.currentState === s.idle && X(this)
            }, this.onStateChange = r => {
                p(this), h(this), r === "currentState" && this.transitionToState(), r === "characterId" && this.state.characterId && (this.lastCharacterIdToHoldFlag = this.state.characterId)
            }, this.setupVisualEditing = () => {
                if (!c() || !y()) return;
                const r = x(this, "radius");
                this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: r.min,
                    maxRadius: r.max,
                    rotable: !1,
                    onChange: e => {
                        B(e.x, e.y, {
                            radius: e.radius
                        })
                    }
                })
            }, this.isInBase = () => this.state.currentState === s.idle, this.cull.ignoreCulling(), this.flag = this.parts.add.sprite({
                ...Y(this.options.flagColor),
                originX: a.FlagOriginX,
                originY: a.FlagOriginY,
                onReady: r => {
                    r.view.setScale(a.BaseScale)
                }
            }), this.flagPlatform = this.parts.add.sprite({
                ...C,
                originX: a.PlatformOriginX,
                originY: a.PlatformOriginY,
                layerId: n.DevicesUnderCharacters,
                depthChange: l(2),
                onReady: r => {
                    r.view.setScale(a.BaseScale)
                }
            }), this.flagShadow = this.parts.add.sprite({
                ...T,
                layerId: n.DevicesUnderCharacters,
                onReady: r => {
                    r.view.setScale(0)
                }
            }), this.currentFlagX = this.x, this.currentFlagY = this.y, k() && (this.zone = this.interactiveZones.add.circle({
                r: a.InteractivityRadius
            }), this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice("interact")
            }, h(this), p(this), this.state.currentState === s.carried ? O(this) : this.state.currentState === s.dropped && b(this)), this.options.useSafeZone) {
            this.setupVisualEditing();
            const r = this.options.owningTeamId === g();
            this.parts.add.circle({
                x: 0,
                y: 0,
                r: this.options.radius,
                color: r ? a.Colors.SafeZone.Body.Owner : a.Colors.SafeZone.Body.NonOwner,
                alpha: .2,
                borderColor: r ? a.Colors.SafeZone.Border.Owner : a.Colors.SafeZone.Border.NonOwner,
                borderAlpha: .5,
                borderWidth: 4,
                depthChange: l(1)
            }), r && this.colliders.add.circle({
                x: 0,
                y: 0,
                r: this.options.radius
            })
        }
        this.lastCharacterIdToHoldFlag = this.state.characterId
    }
}
export {
    Qt as
    default
};