import {
    I as r,
    c as l
} from "./FixSpinePlugin.js";
import {
    al as d
} from "./App-41.js";
import {
    G as e
} from "./GetAssetPath.js";
import "./_index.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
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
import "./FillRemainingSpace.js";
import "./index-24.js";
const a = {
        imageId: e("devices/chest/open.png"),
        imageUrl: e("devices/chest/open.png"),
        originY: .8
    },
    o = {
        imageId: e("devices/chest/closed.png"),
        imageUrl: e("devices/chest/closed.png"),
        originY: .8
    };
var p = (s => (s.open = "open", s))(p || {});
const h = {
    interactionRadius: 200,
    topDownCollider: {
        x: 0,
        y: 0,
        w: 120,
        h: 30
    }
};
class Di extends d {
    constructor(n) {
        super(n), this.animateOpen = () => {
            var t;
            if (!this.state.active || ((t = this.open.view) == null ? void 0 : t.alpha) === 1) return;
            this.closed.view && (this.closed.view.alpha = 0), this.closedFlash.view && (this.closedFlash.view.alpha = 0);
            const i = [];
            this.open.view && (this.open.view.alpha = 1, i.push(this.open.view)), this.openFlash.view && (this.openFlash.view.alpha = 1, i.push(this.openFlash.view), this.tweens.add({
                targets: this.openFlash.view,
                alpha: 0,
                duration: 200
            })), i.length && this.tweens.add({
                targets: i,
                scaleX: .55,
                scaleY: .55,
                duration: 150,
                ease: Phaser.Math.Easing.Sine.Out,
                onComplete: () => {
                    this.tweens.add({
                        targets: i,
                        scaleX: .5,
                        scaleY: .5,
                        duration: 250,
                        ease: Phaser.Math.Easing.Sine.InOut
                    })
                }
            })
        }, this.animateClose = () => {
            var t;
            if (!this.state.active || ((t = this.closed.view) == null ? void 0 : t.alpha) === 1) return;
            this.open.view && (this.open.view.alpha = 0), this.openFlash.view && (this.openFlash.view.alpha = 0);
            const i = [];
            this.closed.view && (this.closed.view.alpha = 1, i.push(this.closed.view)), this.closedFlash.view && (this.closedFlash.view.alpha = 1, i.push(this.closedFlash.view), this.tweens.add({
                targets: this.closedFlash.view,
                alpha: 0,
                duration: 200
            })), i.length && this.tweens.add({
                targets: i,
                scaleX: .45,
                scaleY: .45,
                duration: 150,
                ease: Phaser.Math.Easing.Sine.Out,
                onComplete: () => {
                    this.tweens.add({
                        targets: i,
                        scaleX: .5,
                        scaleY: .5,
                        duration: 250,
                        ease: Phaser.Math.Easing.Sine.InOut
                    })
                }
            })
        }, this.activate = () => {
            this.open.view && (this.open.view.alpha = 0), this.closed.view && (this.closed.view.alpha = 0), this.openFlash.view && (this.openFlash.view.alpha = 0), this.closedFlash.view && (this.closedFlash.view.alpha = 0), this.state.open ? this.open.view && this.tweens.add({
                targets: this.open.view,
                alpha: 1,
                duration: 250,
                ease: Phaser.Math.Easing.Sine.InOut
            }) : this.closed.view && this.tweens.add({
                targets: this.closed.view,
                alpha: 1,
                duration: 250,
                ease: Phaser.Math.Easing.Sine.InOut
            })
        }, this.deactivate = () => {
            const i = [];
            this.open.view && i.push(this.open.view), this.closed.view && i.push(this.closed.view), this.openFlash.view && i.push(this.openFlash.view), this.closedFlash.view && i.push(this.closedFlash.view), i.length && this.tweens.add({
                targets: i,
                alpha: 0,
                duration: 250,
                ease: Phaser.Math.Easing.Sine.InOut
            })
        }, this.updateInteractiveZones = () => {
            const i = this.state.open || !this.state.active;
            this.interactiveZones.setForceDisabled(i)
        }, this.onStateChange = i => {
            i === "open" && (this.state.open ? this.animateOpen() : this.animateClose()), i === "active" && (this.state.active ? this.activate() : this.deactivate()), this.updateInteractiveZones()
        }, this.open = this.parts.add.sprite({
            ...a,
            onReady: i => {
                i.view.setScale(.5), i.view.alpha = this.state.active && this.state.open ? 1 : 0
            }
        }), this.openFlash = this.parts.add.sprite({
            ...a,
            onReady: i => {
                i.view.setScale(.5), i.view.tint = 16777215, i.view.tintFill = !0, i.view.alpha = 0
            }
        }), this.closed = this.parts.add.sprite({
            ...o,
            onReady: i => {
                i.view.setScale(.5), i.view.alpha = this.state.active && !this.state.open ? 1 : 0, this.isPreview && r() && (i.view.alpha = 1)
            }
        }), this.closedFlash = this.parts.add.sprite({
            ...o,
            onReady: i => {
                i.view.setScale(.5), i.view.tint = 16777215, i.view.tintFill = !0, i.view.alpha = 0
            }
        }), l() || (this.shadows.add({
            x: 0,
            y: 0,
            r1: 60,
            r2: 40
        }), this.colliders.add.box({
            ...h.topDownCollider
        })), this.interactiveZone = this.interactiveZones.add.circle({
            r: h.interactionRadius
        }), this.interactiveZones.setInfo({
            message: "Open chest",
            allowedToInteract: !0,
            duration: 1
        }), this.interactiveZones.onInteraction = () => {
            this.sendToServerDevice(p.open)
        }, this.updateInteractiveZones()
    }
}
export {
    Di as
    default
};