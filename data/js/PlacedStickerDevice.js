import {
    al as c,
    aH as h,
    T as n
} from "./App-41.js";
import {
    s as d,
    g as l,
    S as v
} from "./FixSpinePlugin.js";
import {
    G as e
} from "./GetAssetPath.js";
import {
    p as u
} from "./playSound.js";
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
class Yt extends c {
    constructor(p) {
        if (super(p), this.onStateChange = t => {
                t === "beingRemoved" && this.state.beingRemoved && this.sticker && this.tweens.add({
                    targets: this.sticker.view,
                    alpha: 0,
                    scale: this.sticker.view.scale * .25,
                    duration: 400,
                    ease: Phaser.Math.Easing.Quadratic.Out
                })
            }, this.state.beingRemoved || !this.options.stickerId) return;
        const s = this.options.stickerId.replace("sticker_", ""),
            o = e(`stickers/${s}.png`);
        this.parts.add.sprite({
            imageId: o,
            imageUrl: o,
            onReady: t => {
                const m = d.session.gameTime,
                    r = this.options.placedAtTimeStamp,
                    a = m - r;
                this.sticker = t, t.view.setScale(this.options.scale), this.boundingBox.setHardcoded({
                    width: t.view.displayWidth,
                    height: t.view.displayHeight
                }), t.view.setScale(this.options.scale), t.view.setDepth(this.options.depth + h.Fill + .1), t.view.setAlpha(0);
                const i = t.view.y;
                t.view.setY(i - 25), a > 1e3 ? (t.view.setAlpha(.85), t.view.setY(i), t.view.setScale(this.options.scale)) : (this.tweens.add({
                    targets: t.view,
                    scale: this.options.scale,
                    alpha: .95,
                    y: i,
                    duration: 400,
                    ease: Phaser.Math.Easing.Bounce.Out
                }), this.options.placedByCharacterId === n() && u({
                    path: e("devices/placed_sticker/placed.mp3"),
                    volume: l({
                        volume: .6,
                        type: v.soundEffect
                    })
                }))
            }
        })
    }
}
export {
    Yt as
    default
};