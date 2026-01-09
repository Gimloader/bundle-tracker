import {
    d as p,
    e
} from "./FixSpinePlugin.js";
import {
    F as r,
    R as h
} from "./ReplaceVisualEditingPreview.js";
import {
    al as s
} from "./App-41.js";
import "./GetAssetPath.js";
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
class Vi extends s {
    constructor(m) {
        if (super(m), p() || e()) return;
        this.parts.add.rect({
            width: this.options.width,
            height: this.options.height,
            color: 65280,
            alpha: .15
        });
        const t = r(this, "width"),
            o = r(this, "height");
        this.visualEditing.add.box({
            keepRatio: !1,
            rotable: !0,
            width: this.options.width,
            height: this.options.height,
            minWidth: t.min,
            maxWidth: t.max,
            minHeight: o.min,
            maxHeight: o.max,
            onChange: i => {
                h(i.x, i.y, {
                    width: i.width,
                    height: i.height
                })
            }
        })
    }
}
export {
    Vi as
    default
};