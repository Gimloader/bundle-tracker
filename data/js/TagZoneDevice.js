import {
    I as n,
    i as d,
    d as c,
    e as l
} from "./FixSpinePlugin.js";
import {
    F as e,
    R as g
} from "./ReplaceVisualEditingPreview.js";
import {
    a as p
} from "./ZonedDeviceDisplay.js";
import {
    al as u,
    am as v,
    an as w
} from "./App-41.js";
import {
    G as s
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
const m = s("devices/tag_zone/zone_icon.png"),
    f = {
        imageId: m,
        imageUrl: m
    };
var a = (t => (t.everywhere = "everywhere", t.zone = "zone", t))(a || {});
class Bi extends u {
    constructor(h) {
        if (super(h), this.setupVisualEditing = () => {
                if (!n() || !d()) return;
                const i = e(this, "width"),
                    r = e(this, "height");
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    minWidth: i.min,
                    maxWidth: i.max,
                    minHeight: r.min,
                    maxHeight: r.max,
                    rotable: !1,
                    keepRatio: !1,
                    onChange: o => {
                        g(o.x, o.y, {
                            width: o.width,
                            height: o.height
                        })
                    }
                })
            }, !(c() || l())) {
            if (this.options.detectionArea === a.everywhere) {
                const i = w.Manager;
                new v({
                    device: this,
                    baseColor: i.baseColor,
                    boxColor: i.boxColor,
                    content: {
                        icon: {
                            image: s("devices/tag_zone/icon.png"),
                            scale: .8
                        }
                    }
                });
                return
            }
            this.setupVisualEditing(), p.shouldShow(this) && (this.layers.forceDepthManually(0), this.parts.add.sprite(f).view.setScale(.15), this.parts.add.rect({
                color: 4435243,
                alpha: p.shouldShowInnerZone(this) ? .2 : 0,
                borderAlpha: 1,
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: 4435243,
                borderWidth: 4,
                ignoreInput: !0
            }))
        }
    }
}
export {
    Bi as
    default
};