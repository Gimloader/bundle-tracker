import {
    Z as n
} from "./ZoneConstants.js";
import {
    al as f,
    as as p,
    au as w
} from "./App-41.js";
import {
    I as d,
    i as a,
    d as e,
    e as v
} from "./FixSpinePlugin.js";
import {
    a as l
} from "./ZonedDeviceDisplay.js";
import {
    G as g
} from "./GetAssetPath.js";
import {
    F as h,
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
var m = (o => (o.rectangle = "rectangle", o.circle = "circle", o))(m || {});
const b = {
    imageId: g("devices/zone/base.png"),
    imageUrl: g("devices/zone/base.png")
};
class Li extends f {
    constructor(c) {
        if (super(c), this.onStateChange = i => {
                if (i === "active" && this.zone && this.zone.view) {
                    const r = this.getAlpha();
                    this.zone.updateAlpha(r)
                }
            }, this.setupVisualEditing = () => {
                if (!d() || !a()) return;
                if (this.options.shape === m.circle) {
                    const t = h(this, "radius");
                    this.visualEditing.add.circle({
                        radius: this.options.radius,
                        rotable: !1,
                        minRadius: t.min,
                        maxRadius: t.max,
                        onChange: s => {
                            u(s.x, s.y, {
                                radius: s.radius
                            })
                        }
                    });
                    return
                }
                const i = h(this, "width"),
                    r = h(this, "height");
                this.visualEditing.add.box({
                    width: this.options.width,
                    height: this.options.height,
                    angle: this.options.rotation,
                    minWidth: i.min,
                    maxWidth: i.max,
                    minHeight: r.min,
                    maxHeight: r.max,
                    keepRatio: !1,
                    onChange: t => {
                        u(t.x, t.y, {
                            rotation: t.angle,
                            width: t.width,
                            height: t.height
                        })
                    }
                })
            }, d() && a()) {
            const i = this.parts.add.sprite({
                ...b,
                depthChange: p(2)
            });
            i.view.angle = this.options.rotation, i.view.setScale(.5)
        }
        if (e() || v() ? this.options.visibleInGame : l.shouldShow(this)) {
            this.setupVisualEditing();
            const i = w(this.options.color);
            if (this.options.shape === m.circle) {
                this.zone = this.parts.add.circle({
                    color: i,
                    alpha: this.getAlpha(),
                    r: this.options.radius,
                    depthChange: p(1),
                    ignoreInput: !0,
                    borderColor: i,
                    borderAlpha: e() ? 0 : 1,
                    borderWidth: 4
                });
                return
            }
            this.zone = this.parts.add.rect({
                color: i,
                alpha: this.getAlpha(),
                width: Math.abs(this.options.width),
                height: Math.abs(this.options.height),
                angle: this.options.rotation,
                borderColor: i,
                borderAlpha: e() ? 0 : 1,
                borderWidth: 4,
                depthChange: p(1),
                ignoreInput: !0
            })
        }
    }
    getAlpha() {
        return e() ? this.state.active ? n.alpha : 0 : a() && l.shouldShowInnerZone(this) ? n.alpha : 0
    }
}
export {
    Li as
    default
};