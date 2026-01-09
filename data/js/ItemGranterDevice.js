import {
    al as a,
    as as m,
    aQ as h,
    L as d
} from "./App-41.js";
import {
    s as n,
    e as w,
    d as g
} from "./FixSpinePlugin.js";
import {
    N as c
} from "./NewWidthSameAspectRatio.js";
import {
    B as l,
    U as I
} from "./Assets.js";
import "./_index.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./GetAssetPath.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./playSound.js";
import "./howler.js";
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
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
class Nt extends a {
    constructor(p) {
        super(p), this.addBase = () => {
            const i = m(1);
            this.base = this.parts.add.sprite({
                ...l,
                y: -30,
                depthChange: i
            }), this.base.view.setScale(.5), this.colliders.add.box({
                x: 0,
                y: 10,
                w: 90,
                h: 40
            })
        }, this.addItemPreview = () => {
            if (!this.base) return;
            const i = m(2),
                t = {
                    ...I
                };
            if (this.options.itemId) {
                const e = n.worldOptions.itemOptions.find(s => s.id === this.options.itemId);
                e && (t.imageId = e.id, t.imageUrl = e.previewImage)
            }
            const r = h(t.imageId),
                o = c({
                    height: r.height,
                    width: r.width,
                    newWidth: 60
                });
            this.itemPreview = this.parts.add.sprite({
                imageId: t.imageId,
                imageUrl: t.imageUrl,
                depthChange: i,
                y: -43,
                displayWidth: o.width,
                displayHeight: o.height
            }), this.itemPreview.view.alpha = .6, this.tweens.add({
                targets: this.itemPreview.view,
                y: this.itemPreview.view.y - 10,
                duration: 1200,
                yoyo: !0,
                repeat: -1,
                ease: Phaser.Math.Easing.Sine.InOut
            }), this.tweens.add({
                targets: this.itemPreview.view,
                alpha: 1,
                duration: 1200,
                yoyo: !0,
                repeat: -1,
                ease: Phaser.Math.Easing.Sine.InOut
            })
        }, !(w() || g()) && (this.layers.setDefaultLayer(d.DepthSortedCharactersAndDevices), this.addBase(), this.addItemPreview())
    }
}
export {
    Nt as
    default
};