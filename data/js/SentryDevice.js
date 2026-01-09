import {
    d as a,
    e as s,
    c as e
} from "./FixSpinePlugin.js";
import {
    F as n,
    R as d
} from "./ReplaceVisualEditingPreview.js";
import {
    al as h,
    as as c,
    aE as l,
    aF as u
} from "./App-41.js";
import {
    G as o
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
class Hi extends h {
    constructor(p) {
        if (super(p), this.currentFallVelocity = 0, a() || s()) return;
        const t = n(this, "rangeRadius");
        this.visualEditing.add.circle({
            radius: this.options.rangeRadius,
            minRadius: t.min,
            maxRadius: t.max,
            rotable: !1,
            onChange: i => {
                d(i.x, i.y, {
                    rangeRadius: Math.round(i.radius)
                })
            }
        });
        const m = this.options.skinId.replace("character_", ""),
            r = o(`characters/spine/normalized_preview/${m}.png`);
        this.parts.add.sprite({
            y: 30 - 50 * .28,
            imageId: r,
            imageUrl: r,
            depthChange: c(2),
            onReady: i => {
                i.view.setScale(.28 * this.options.scale), i.view.setOrigin(.5, 550 / 600)
            }
        }), e() || this.parts.add.sprite({
            y: 30 / 2 - 5 * this.options.scale,
            imageId: "character-shadow",
            imageUrl: o("characters/shadow.png"),
            onReady: i => {
                i.view.setOrigin(.5, .5), i.view.setScale(l * this.options.scale), i.view.setAlpha(u)
            }
        })
    }
}
export {
    Hi as
    default
};