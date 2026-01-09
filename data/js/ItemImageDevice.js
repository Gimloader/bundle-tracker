import {
    P as n,
    I as m,
    i as e
} from "./FixSpinePlugin.js";
import {
    al as h,
    az as l
} from "./App-41.js";
import {
    F as u,
    R as g
} from "./ReplaceVisualEditingPreview.js";
import {
    U as d
} from "./Assets.js";
import {
    A as c
} from "./AddOutline.js";
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
var s = (o => (o.automatic = "automatic", o.custom = "custom", o))(s || {});
class Wi extends h {
    constructor(a) {
        super(a), this.createVisuals = () => {
            const i = {
                    ...d
                },
                t = l(this.options.itemId);
            t && (i.imageId = t.previewImage, i.imageUrl = t.previewImage), this.part = this.parts.add.sprite({
                ...i,
                onReady: r => {
                    if (r.view.displayWidth = this.options.size, r.view.displayHeight = this.options.size, r.view.angle = this.options.angle, this.options.outline) {
                        let p = this.options.outlineSize === s.custom ? this.options.customOutlineSize : this.options.size / 25;
                        p > this.options.size / 10 && (p = this.options.size / 10), c({
                            view: r.view,
                            options: {
                                outlineColor: n.Display.Color.HexStringToColor(this.options.outlineColor).color,
                                thickness: p
                            }
                        })
                    }
                }
            }), this.part.view.alpha = this.getAlpha()
        }, this.getAlpha = () => m() ? e() || this.options.visibleOnGameStart ? 1 : 0 : this.state.visible ? 1 : 0, this.setupVisualEditing = () => {
            if (!m() || !e()) return;
            const i = u(this, "size");
            this.visualEditing.add.box({
                width: this.options.size,
                height: this.options.size,
                angle: this.options.angle,
                minWidth: i.min,
                maxWidth: i.max,
                minHeight: i.min,
                maxHeight: i.max,
                rotable: !0,
                keepRatio: !0,
                onChange: t => {
                    g(t.x, t.y, {
                        size: t.width,
                        angle: t.angle
                    })
                }
            })
        }, this.onStateChange = i => {
            i === "visible" && (this.part.view.alpha = this.getAlpha())
        }, this.setupVisualEditing(), this.createVisuals()
    }
}
export {
    Wi as
    default
};