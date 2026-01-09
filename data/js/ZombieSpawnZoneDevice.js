import {
    al as l,
    as as m,
    au as c,
    L as g
} from "./App-41.js";
import {
    d as r,
    I as a,
    i as p,
    e
} from "./FixSpinePlugin.js";
import {
    a as h
} from "./ZonedDeviceDisplay.js";
import {
    F as s,
    R as u
} from "./ReplaceVisualEditingPreview.js";
import {
    G as n
} from "./GetAssetPath.js";
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
const w = {
    imageId: n("devices/zombie_spawn_zone/icon.png"),
    imageUrl: n("devices/zombie_spawn_zone/icon.png")
};
class Lt extends l {
    constructor(d) {
        if (super(d), this.updatePartAlpha = t => {
                const i = this.getAlpha();
                r() && t.updateAlpha(i > 0 ? 1 : 0)
            }, this.updateAlpha = () => {
                const t = this.getAlpha();
                r() && this.parts.forEach(i => {
                    i.updateAlpha(t > 0 ? 1 : 0)
                }), this.rect && this.rect.updateAlpha(t)
            }, this.setupVisualEditing = () => {
                if (!a() || !p()) return;
                const t = s(this, "width"),
                    i = s(this, "height");
                s(this, "rotation"), this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: this.options.rotation,
                    rotable: !0,
                    minWidth: t.min,
                    maxWidth: t.max,
                    minHeight: i.min,
                    maxHeight: i.max,
                    keepRatio: !1,
                    onChange: o => {
                        u(o.x, o.y, {
                            width: o.width,
                            height: o.height,
                            rotation: o.angle
                        })
                    }
                })
            }, a() && p() && this.parts.add.sprite({
                ...w,
                depthChange: m(2)
            }).view.setScale(.17), r() || e() ? 0 : h.shouldShow(this)) {
            this.setupVisualEditing();
            const t = c("#00FF00");
            this.rect = this.parts.add.rect({
                color: t,
                layerId: g.DevicesUnderCharacters,
                alpha: this.getAlpha(),
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: t,
                borderAlpha: r() || e() ? 0 : 1,
                borderWidth: 4,
                depthChange: m(1),
                ignoreInput: !0,
                angle: this.options.rotation
            })
        }
    }
    getAlpha() {
        return r() ? 0 : e() || p() && h.shouldShowInnerZone(this) ? 1 : 0
    }
}
export {
    Lt as ZombieSpawnZoneDevice, Lt as
    default
};