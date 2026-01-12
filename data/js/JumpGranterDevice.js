import {
    aw as h,
    al as d,
    T as o,
    ax as l,
    ay as u
} from "./App-41.js";
import {
    G as a
} from "./GetAssetPath.js";
import {
    F as p,
    g as c,
    S as v,
    d as f,
    i as y,
    I as g
} from "./FixSpinePlugin.js";
import {
    N as w
} from "./NewWidthSameAspectRatio.js";
import {
    p as b
} from "./playSound.js";
import {
    ar as A
} from "./_index.js";
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
var e = (t => (t.idle = "idle", t.activate = "activate", t.inactive = "inactive", t))(e || {});
const S = {
    spritesheetId: a("devices/jump_granter/animation.png"),
    spritesheetUrl: a("devices/jump_granter/animation.png"),
    frameWidth: 391,
    frameHeight: 373,
    animations: [{
        animName: "idle",
        frameRate: 1,
        repeat: -1,
        animFrames: {
            start: 0,
            end: 0
        }
    }, {
        animName: "activate",
        frameRate: 36,
        repeat: 0,
        animFrames: {
            start: 0,
            end: 7
        }
    }, {
        animName: "inactive",
        frameRate: 1,
        repeat: -1,
        animFrames: {
            start: 7,
            end: 7
        }
    }]
};
var r = (t => (t.reset = "reset", t.grant = "grant", t))(r || {});
const n = {
    radius: h(125),
    width: 125
};
class Hi extends d {
    constructor(s) {
        super(s), this.isDisabled = !1, this.isAnimationReady = !1, this.size = {
            width: 0,
            height: 0
        }, this.grantJumps = () => {
            const i = p(o());
            i && (b({
                path: a(`devices/jump_granter/collect${A.random(1,3)}.mp3`),
                volume: c({
                    volume: .8,
                    type: v.soundEffect
                })
            }), this.options.mode === r.reset ? (i.physics.state.jump.jumpCounter = 0, i.physics.state.jump.jumpsLeft = l({
                characterId: i.id
            }).maxJumps) : this.options.mode === r.grant && (i.physics.state.jump.jumpsLeft += this.options.jumpsNumber))
        }, this.isSensorActive = () => this.isDisabled || this.state.disabled ? !1 : this.state.active, this.animateAlpha = () => {
            var m;
            const i = this.state.active ? 1 : 0;
            (m = this.anim) != null && m.view && this.tweens.add({
                targets: [this.anim.view],
                alpha: i,
                duration: 250
            })
        }, this.onStateChange = i => {
            i === "disabled" && (!this.isDisabled && this.state.disabled && this.isAnimationReady ? this.anim.view.play(e.activate) : !this.isDisabled && !this.state.disabled && this.isAnimationReady && this.startIdleAnimation()), i === "active" && this.animateAlpha()
        }, this.startIdleAnimation = () => {
            this.anim.view.play(e.idle), this.anim.view.setScale(0), this.tweens.add({
                targets: this.anim.view,
                displayWidth: this.size.width,
                displayHeight: this.size.height,
                duration: 350,
                ease: Phaser.Math.Easing.Back.Out
            })
        }, this.anim = this.parts.add.animatedSprite({
            ...S,
            onReady: i => {
                this.size = {
                    ...w({
                        height: i.view.height,
                        width: i.view.width,
                        newWidth: n.width
                    })
                }, i.view.displayWidth = this.size.width, i.view.displayHeight = this.size.height, this.tweens.add({
                    targets: i.view,
                    y: i.view.y - 15,
                    duration: 1500,
                    yoyo: !0,
                    repeat: -1,
                    ease: Phaser.Math.Easing.Sine.InOut
                }), this.isAnimationReady = !0, !this.state.active && f() && (i.view.alpha = 0), (this.isDisabled || this.state.disabled) && i.view.play(e.inactive)
            }
        }), !(y() && g()) && this.sensors.add.circle({
            r: n.radius,
            type: u.around,
            onFresh: () => {
                if (!this.isSensorActive()) return;
                const i = p(o());
                i && (i.physics.state.grounded || (this.grantJumps(), this.isDisabled = !0, this.isAnimationReady && this.anim.view.play(e.activate), this.timeout = setTimeout(() => {
                    this.isDestroyed || (this.isDisabled = !1, !this.state.disabled && this.isAnimationReady && this.startIdleAnimation())
                }, this.options.disabledTime * 1e3)))
            }
        })
    }
    destroy(s) {
        super.destroy(s), this.timeout && clearTimeout(this.timeout)
    }
}
export {
    Hi as
    default
};