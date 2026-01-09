import {
    al as s
} from "./App-41.js";
import {
    G as r
} from "./GetAssetPath.js";
import {
    I as a,
    i as h,
    e as n,
    d
} from "./FixSpinePlugin.js";
import {
    a as e
} from "./ZonedDeviceDisplay.js";
import {
    F as p,
    R as l
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
const c = {
    imageId: r("devices/camera_size/base.png"),
    imageUrl: r("devices/camera_size/base.png")
};
class Ri extends s {
    constructor(m) {
        if (super(m), this.notifyManagerAboutUpdate = () => {
                this.scene.worldManager.devices.cameras.allCamerasNeedsUpdate = !0
            }, this.onDestroy = () => {
                this.notifyManagerAboutUpdate()
            }, this.setupVisualEditing = () => {
                if (!a() || !h()) return;
                const t = p(this, "width"),
                    o = p(this, "height");
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
                        l(i.x, i.y, {
                            width: i.width,
                            height: i.height
                        })
                    }
                })
            }, this.setupVisualEditing(), this.notifyManagerAboutUpdate(), n() || d()) return;
        this.layers.forceDepthManually(0), this.parts.add.sprite(c).view.setScale(.5), e.shouldShow(this) && this.parts.add.rect({
            color: 11400448,
            alpha: e.shouldShowInnerZone(this) ? .2 : 0,
            width: Math.abs(this.options.width),
            height: Math.abs(this.options.height),
            borderColor: 11400448,
            borderAlpha: 1,
            borderWidth: 4,
            ignoreInput: !0
        })
    }
}
export {
    Ri as
    default
};