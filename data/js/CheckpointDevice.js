import {
    G as s
} from "./GetAssetPath.js";
import {
    N as d
} from "./NewWidthSameAspectRatio.js";
import {
    g as l,
    S as c,
    e as b,
    d as u
} from "./FixSpinePlugin.js";
import {
    p as w
} from "./playSound.js";
import {
    F as v,
    R as g
} from "./ReplaceVisualEditingPreview.js";
import {
    al as f
} from "./App-41.js";
import "./_index.js";
import "./MapModeType.js";
import "./MapStyle.js";
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
const m = "checkpoint-idle",
    p = "checkpoint-pop";
class _i extends f {
    constructor(a) {
        if (super(a), this.bubbleIsReady = !1, this.createdAt = Date.now(), this.onBubbleActiveChange = () => {
                this.state.active ? (Date.now() - this.createdAt > 1e3 && this.options.playAudio && this.options.visibleInGame && this.cull.isInsideView && w({
                    path: s("devices/checkpoint/sound.mp3"),
                    volume: l({
                        volume: .75,
                        type: c.soundEffect
                    })
                }), this.bubble.view.play(p)) : (this.bubble.view.setAlpha(0), this.tweens.add({
                    targets: this.bubble.view,
                    alpha: 1,
                    duration: 400
                }), this.bubble.view.play(m))
            }, this.onStateChange = () => {
                this.bubbleIsReady && this.onBubbleActiveChange()
            }, (b() || u()) && (!this.options.visibleInGame || !this.options.enabled)) return;
        const e = v(this, "width");
        this.bubble = this.parts.add.animatedSprite({
            spritesheetId: "checkpoint-device",
            spritesheetUrl: s("devices/checkpoint/bubble.png"),
            frameWidth: 500,
            frameHeight: 492,
            animations: [{
                animName: m,
                frameRate: 1,
                animFrames: {
                    start: 0,
                    end: 0
                }
            }, {
                animName: p,
                frameRate: 34,
                animFrames: {
                    start: 0,
                    end: 11
                },
                repeat: 0
            }],
            onReady: i => {
                const t = d({
                    width: i.view.width,
                    height: i.view.height,
                    newWidth: this.options.width
                });
                i.view.displayWidth = t.width, i.view.displayHeight = t.height;
                const r = t.height / i.view.height,
                    h = e.min * r,
                    n = e.max * r;
                this.visualEditing.add.box({
                    angle: 0,
                    rotable: !1,
                    width: t.width,
                    height: t.height,
                    minWidth: e.min,
                    maxWidth: e.max,
                    minHeight: h,
                    maxHeight: n,
                    onChange: o => {
                        g(o.x, o.y, {
                            width: o.width
                        })
                    }
                }), this.tweens.add({
                    targets: i.view,
                    y: i.view.y - t.height / 20,
                    duration: 1500,
                    yoyo: !0,
                    repeat: -1,
                    ease: Phaser.Math.Easing.Sine.InOut
                }), this.state.active ? (i.view.setAlpha(0), i.view.play(p)) : i.view.play(m), this.bubbleIsReady = !0
            }
        })
    }
}
export {
    _i as
    default
};