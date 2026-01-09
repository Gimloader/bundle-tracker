import {
    al as w,
    aR as v,
    aS as u,
    aT as f,
    aU as g,
    aV as I,
    L as d,
    aQ as y,
    aL as C
} from "./App-41.js";
import {
    N as S
} from "./NewWidthSameAspectRatio.js";
import {
    G as l
} from "./GetAssetPath.js";
import {
    A as O
} from "./AddOutline.js";
import {
    R as x
} from "./RemoveOutline.js";
import {
    c as a,
    s as p,
    g as T,
    S as D
} from "./FixSpinePlugin.js";
import {
    p as W
} from "./playSound.js";
import {
    D as r,
    G as Y,
    a as P
} from "./Constants.js";
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
const A = {
    imageId: "item_shadow",
    imageUrl: l("devices/dropped_item/item-shadow.png")
};
class Kt extends w {
    constructor(c) {
        if (super(c), this.hidden = !1, this.onUpdate = t => {
                var i;
                a() && (i = this.item) != null && i.view && (this.item.view.y < this.state.fallY && (this.item.view.y += v(r.fall.fallSpeedPerSecond) * t / 1e3, this.item.view.y >= this.state.fallY && (this.item.view.y = this.state.fallY)), this.y = this.item.view.y)
            }, this.setInteractionInfo = () => {
                var n;
                const t = u(this.options.itemId),
                    i = f(this.options.itemId),
                    s = g(this.options.itemId);
                let e = !0;
                if (i || s) {
                    const o = ((n = p.me.inventory.slots.get(this.options.itemId)) == null ? void 0 : n.amount) ?? 0;
                    if (i) {
                        const m = Y({
                            itemId: this.options.itemId
                        });
                        e = o < m
                    } else if (s) {
                        const m = P({
                            itemId: this.options.itemId
                        });
                        e = o < m
                    }
                }
                if (t) {
                    const o = this.state.amount || this.options.amount;
                    this.interactiveZones.setInfo({
                        message: I(t, o),
                        action: r.interaction.message.action,
                        allowedToInteract: e,
                        topHeader: e ? void 0 : r.interaction.message.fullInventory,
                        topHeaderColor: r.interaction.message.fullInventoryColor
                    })
                }
            }, this.startShowUpTweens = () => {
                if (!this.state.visible) return;
                this.item.view.alpha = 0, this.item.view.displayWidth = 0, this.item.view.displayHeight = 0, a() && this.item.view.setOrigin(.5);
                const t = this.item.view.x,
                    i = this.item.view.y,
                    s = this.options.originX ? this.options.originX : void 0,
                    e = this.options.originY ? this.options.originY : void 0;
                if (this.item.view.x = s ?? t, this.item.view.y = e ?? i, this.tweens.add({
                        targets: this.item.view,
                        alpha: 1,
                        displayWidth: 60,
                        displayHeight: 60,
                        x: t,
                        y: i,
                        duration: 350,
                        ease: Phaser.Math.Easing.Back.Out,
                        onComplete: () => {
                            this.startIdleTweens()
                        }
                    }), this.shadow) {
                    this.shadow.view.alpha = 0, this.shadow.view.scaleX = this.shadow.view.scaleY = 0;
                    const n = this.shadow.view.x,
                        o = this.shadow.view.y;
                    this.shadow.view.x += this.item.view.x - t, this.shadow.view.y += this.item.view.y - i, this.tweens.add({
                        targets: this.shadow.view,
                        alpha: .3,
                        scaleX: .6,
                        scaleY: .6,
                        x: n,
                        y: o,
                        duration: 350,
                        ease: Phaser.Math.Easing.Back.Out
                    })
                }
            }, this.startHideTweens = () => {
                this.state.visible && (this.tweens.add({
                    targets: this.item.view,
                    displayWidth: 0,
                    displayHeight: 0,
                    duration: 350,
                    ease: Phaser.Math.Easing.Back.In
                }), this.shadow && (this.scene.tweens.getTweensOf(this.shadow.view).forEach(t => {
                    t.remove()
                }), this.tweens.add({
                    targets: this.shadow.view,
                    scaleX: 0,
                    scaleY: 0,
                    duration: 250,
                    ease: Phaser.Math.Easing.Back.In
                })))
            }, this.startIdleTweens = () => {
                a() || this.state.visible && (this.item.view.alpha = 1, this.tweens.add({
                    targets: this.item.view,
                    y: this.item.view.y - 15,
                    alpha: 1,
                    duration: 1200,
                    yoyo: !0,
                    repeat: -1,
                    ease: Phaser.Math.Easing.Sine.InOut
                }), this.shadow && (this.shadow.view.alpha = .3, this.shadow.view.setScale(.6), this.tweens.add({
                    targets: this.shadow.view,
                    scaleX: .5,
                    scaleY: .5,
                    alpha: .2,
                    duration: 1200,
                    yoyo: !0,
                    repeat: -1,
                    ease: Phaser.Math.Easing.Sine.InOut
                })))
            }, this.onStateChange = t => {
                t === "amount" && this.setInteractionInfo(), t === "alreadyCollected" && !this.prevState.alreadyCollected && this.state.alreadyCollected && !this.hidden && (this.hidden = !0, this.startHideTweens())
            }, this.addOutline = () => {
                this.state.visible && O({
                    view: this.item.view
                })
            }, this.removeOutline = () => {
                this.state.visible && x({
                    view: this.item.view
                })
            }, a() ? this.cull.ignoreCulling() : this.boundingBox.setHardcoded({
                width: 75,
                height: 125,
                y: -112.5
            }), !this.state.visible || this.state.alreadyCollected) return;
        a() || (this.shadow = this.parts.add.sprite({
            ...A,
            layerId: d.DevicesUnderCharacters
        }));
        const h = p.worldOptions.itemOptions.find(t => t.id === this.options.itemId);
        if (h) {
            const t = h.id,
                i = h.previewImage,
                s = y(t),
                e = S({
                    height: s.height,
                    width: s.width,
                    newWidth: r.itemWidth
                });
            C({
                key: t,
                url: i,
                onLoad: () => {
                    this.isDestroyed || (this.item = this.parts.add.sprite({
                        imageId: t,
                        imageUrl: i,
                        layerId: d.DepthSortedCharactersAndDevices,
                        y: a() ? 0 : -65,
                        depthChange: 75,
                        displayWidth: e.width,
                        displayHeight: e.height
                    }), this.interactiveZones.add.circle({
                        x: 0,
                        y: 0,
                        r: r.interaction.radius
                    }), this.setInteractionInfo(), this.interactiveZones.onInteractiveCb = () => {
                        this.setInteractionInfo(), this.addOutline()
                    }, this.interactiveZones.onNonInteractive = () => {
                        this.removeOutline()
                    }, this.interactiveZones.onInteraction = () => {
                        this.state.canBeCollected && !this.state.alreadyCollected && (this.sendToServerDevice("interacted"), W({
                            path: l("sounds/core/collectItem.mp3"),
                            volume: T({
                                volume: .7,
                                type: D.soundEffect
                            })
                        }))
                    }, this.interactiveZones.setCanInteractThroughColliders(!0), this.state.canBeCollected ? this.startIdleTweens() : this.startShowUpTweens())
                }
            })
        }
    }
}
export {
    Kt as
    default
};