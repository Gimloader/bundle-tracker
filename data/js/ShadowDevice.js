import {
    al as m
} from "./App-41.js";
import {
    G as s
} from "./GetAssetPath.js";
import {
    I as e,
    i as h
} from "./FixSpinePlugin.js";
import {
    F as r,
    R as a
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
const d = {
    imageId: "shadow_device",
    imageUrl: s("devices/shadow/shadow_device.png")
};
class Ai extends m {
    constructor(p) {
        super(p), this.setupVisualEditing = () => {
            if (!e() || !h()) return;
            const t = r(this, "width"),
                o = r(this, "height");
            this.visualEditing.add.box({
                width: this.options.width,
                height: this.options.height,
                minWidth: t.min,
                maxWidth: t.max,
                minHeight: o.min,
                maxHeight: o.max,
                rotable: !1,
                keepRatio: !1,
                onChange: i => {
                    a(i.x, i.y, {
                        width: i.width,
                        height: i.height
                    })
                }
            })
        }, this.setupVisualEditing(), this.icon = this.parts.add.sprite(d), this.icon.view.alpha = 1e-7, this.icon.view.scaleX = this.options.width / 300, this.icon.view.scaleY = this.options.height / 130, this.shadows.add({
            depth: this.layers.getGlobalDepth(),
            r1: this.options.width / 2,
            r2: this.options.height / 2
        }), this.boundingBox.clearCached()
    }
}
export {
    Ai as
    default
};