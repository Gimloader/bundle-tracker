import {
    I as s,
    i as a,
    d as n
} from "./FixSpinePlugin.js";
import {
    F as p,
    R as d
} from "./ReplaceVisualEditingPreview.js";
import {
    a as m
} from "./ZonedDeviceDisplay.js";
import {
    al as c
} from "./App-41.js";
import {
    G as l
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
const g = {
    imageId: "character_proximity_device",
    imageUrl: l("devices/character_proximity/radar.png")
};
var e = (i => (i.everywhere = "everywhere", i.zone = "zone", i))(e || {});
class Wi extends c {
    constructor(h) {
        super(h), this.setupVisualEditing = () => {
            if (!s() || !a()) return;
            const r = p(this, "width"),
                o = p(this, "height");
            this.visualEditing.add.box({
                width: this.options.width,
                height: this.options.height,
                minWidth: r.min,
                maxWidth: r.max,
                minHeight: o.min,
                maxHeight: o.max,
                rotable: !1,
                keepRatio: !1,
                onChange: t => {
                    d(t.x, t.y, {
                        width: t.width,
                        height: t.height
                    })
                }
            })
        }, !n() && (this.layers.forceDepthManually(0), this.parts.add.sprite(g), this.options.detectionArea !== e.everywhere && m.shouldShow(this) && (this.setupVisualEditing(), this.parts.add.rect({
            color: 8375794,
            alpha: m.shouldShowInnerZone(this) ? .2 : 0,
            borderAlpha: 1,
            width: Math.abs(this.options.width),
            height: Math.abs(this.options.height),
            borderColor: 8375794,
            borderWidth: 4,
            ignoreInput: !0
        })))
    }
}
export {
    Wi as
    default
};