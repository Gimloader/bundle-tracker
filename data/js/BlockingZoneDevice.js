import {
    al as c,
    as as h,
    au as g,
    L as f
} from "./App-41.js";
import {
    d as r,
    I as a,
    i as e,
    e as s
} from "./FixSpinePlugin.js";
import {
    a as m
} from "./ZonedDeviceDisplay.js";
import {
    F as n,
    R as w
} from "./ReplaceVisualEditingPreview.js";
import {
    G as d
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
var l = (i => (i[i.doNotOverride = 1] = "doNotOverride", i[i.yes = 2] = "yes", i[i.no = 3] = "no", i))(l || {});
const A = {
    imageId: d("devices/blocking_zone/icon.png"),
    imageUrl: d("devices/blocking_zone/icon.png")
};
class zt extends c {
    constructor(u) {
        if (super(u), this.updatePartAlpha = t => {
                const o = this.getAlpha();
                r() && t.updateAlpha(o > 0 ? 1 : 0)
            }, this.updateAlpha = () => {
                const t = this.getAlpha();
                r() && this.parts.forEach(o => {
                    o.updateAlpha(t > 0 ? 1 : 0)
                }), this.rect && this.rect.updateAlpha(t)
            }, this.onStateChange = t => {
                t === "active" && this.updateAlpha()
            }, this.setupVisualEditing = () => {
                if (!a() || !e()) return;
                const t = n(this, "width"),
                    o = n(this, "height");
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: 0,
                    rotable: !1,
                    minWidth: t.min,
                    maxWidth: t.max,
                    minHeight: o.min,
                    maxHeight: o.max,
                    keepRatio: !1,
                    onChange: p => {
                        w(p.x, p.y, {
                            width: p.width,
                            height: p.height
                        })
                    }
                })
            }, this.isActive = () => this.state.active, this.isBlockingBlockBuilding = () => this.options.blockBuilding === l.yes, a() && e() && this.parts.add.sprite({
                ...A,
                depthChange: h(2)
            }).view.setScale(.17), r() || s() ? this.options.visibleInGame : m.shouldShow(this)) {
            this.setupVisualEditing();
            const t = g(this.options.color);
            this.rect = this.parts.add.rect({
                color: t,
                layerId: f.DevicesUnderCharacters,
                alpha: this.getAlpha(),
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                borderColor: t,
                borderAlpha: r() || s() ? 0 : 1,
                borderWidth: 4,
                depthChange: h(1),
                ignoreInput: !0
            })
        }
    }
    getAlpha() {
        return r() ? this.state.active ? 1 : 0 : s() || e() && m.shouldShowInnerZone(this) ? 1 : 0
    }
}
export {
    zt as BlockingZoneDevice, zt as
    default
};