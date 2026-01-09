import {
    Z as h
} from "./ZoneConstants.js";
import {
    al as g,
    as as p,
    au as l
} from "./App-41.js";
import {
    I as s,
    i as r,
    d as a,
    e as c
} from "./FixSpinePlugin.js";
import {
    a as m
} from "./ZonedDeviceDisplay.js";
import {
    G as e
} from "./GetAssetPath.js";
import {
    F as n,
    R as u
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
const f = {
        imageId: e("devices/capture_flag_zone/base.png"),
        imageUrl: e("devices/capture_flag_zone/base.png")
    },
    w = {
        imageId: e("devices/capture_flag_zone/icon.png"),
        imageUrl: e("devices/capture_flag_zone/icon.png")
    };
class Ut extends g {
    constructor(d) {
        if (super(d), this.onStateChange = t => {
                if (t === "active") {
                    if (this.rect && this.rect.view) {
                        const i = this.getAlpha();
                        this.rect.updateAlpha(i)
                    }
                    if (this.sprite && this.sprite.view) {
                        const i = this.getAlpha();
                        this.sprite.view.alpha = i
                    }
                }
            }, this.setupVisualEditing = () => {
                if (!s() || !r()) return;
                const t = n(this, "width"),
                    i = n(this, "height");
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: this.options.rotation,
                    minWidth: t.min,
                    maxWidth: t.max,
                    minHeight: i.min,
                    maxHeight: i.max,
                    keepRatio: !1,
                    onChange: o => {
                        u(o.x, o.y, {
                            rotation: o.angle,
                            width: o.width,
                            height: o.height
                        })
                    }
                })
            }, s() && r()) {
            const t = this.parts.add.sprite({
                ...f,
                depthChange: p(2)
            });
            t.view.angle = this.options.rotation, t.view.setScale(.5)
        }
        if (a() || c() ? this.options.visibleInGame : m.shouldShow(this)) {
            this.setupVisualEditing();
            const t = l(this.options.color);
            this.rect = this.parts.add.rect({
                color: t,
                alpha: this.getAlpha(),
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                angle: this.options.rotation,
                borderColor: t,
                borderAlpha: a() ? 0 : 1,
                borderWidth: 4,
                depthChange: p(1),
                ignoreInput: !0
            }), s() && r() && (this.sprite = this.parts.add.sprite({
                ...w,
                depthChange: p(2)
            }), this.sprite.view.setScale(.1))
        }
    }
    getAlpha() {
        return a() ? this.state.active ? h.alpha : 0 : r() && m.shouldShowInnerZone(this) ? h.alpha : 0
    }
}
export {
    Ut as
    default
};