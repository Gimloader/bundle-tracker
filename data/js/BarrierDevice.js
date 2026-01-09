import {
    I as p,
    i as a
} from "./FixSpinePlugin.js";
import {
    al as l,
    ai as n
} from "./App-41.js";
import {
    F as s,
    R as h
} from "./ReplaceVisualEditingPreview.js";
import {
    A as d
} from "./AddIgnoredStaticBodiesWhenCollisionsEnabled.js";
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
var e = (o => (o.rectangle = "rectangle", o.circle = "circle", o))(e || {});
class Hi extends l {
    constructor(m) {
        if (super(m), this.createVisuals = () => {
                this.part || (this.isCircle && (this.part = this.parts.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius,
                    color: this.color,
                    alpha: this.options.alpha,
                    borderColor: this.borderColor,
                    borderAlpha: 1,
                    borderWidth: this.borderWidth
                })), this.isRectangle && (this.part = this.parts.add.rect({
                    x: 0,
                    y: 0,
                    width: this.options.width,
                    height: this.options.height,
                    angle: this.options.angle,
                    color: this.color,
                    alpha: this.options.alpha,
                    borderColor: this.borderColor,
                    borderAlpha: 1,
                    borderWidth: this.borderWidth,
                    cornerRadius: 8
                })), this.part.view.alpha = this.alpha)
            }, this.createColliders = () => {
                this.options.collisionEnabled && (this.isCircle && this.colliders.add.circle({
                    x: 0,
                    y: 0,
                    r: this.options.radius
                }), this.isRectangle && this.colliders.add.box({
                    x: 0,
                    y: 0,
                    w: this.options.width,
                    h: this.options.height,
                    angle: this.options.angle
                }))
            }, this.onStateChange = i => {
                i === "active" && (this.state.active && d(this), this.part.view.setAlpha(this.alpha))
            }, this.checkIfCollidersEnabled = () => this.state.active, p() && a())
            if (this.isCircle) {
                const i = s(this, "radius");
                this.visualEditing.add.circle({
                    angle: 0,
                    rotable: !1,
                    radius: this.options.radius,
                    minRadius: i.min,
                    maxRadius: i.max,
                    onChange: t => {
                        h(t.x, t.y, {
                            radius: t.radius
                        })
                    }
                })
            } else {
                const i = s(this, "width"),
                    t = s(this, "height");
                this.visualEditing.add.box({
                    angle: this.options.angle,
                    keepRatio: !1,
                    rotable: !0,
                    width: this.options.width,
                    height: this.options.height,
                    minWidth: i.min,
                    maxWidth: i.max,
                    minHeight: t.min,
                    maxHeight: t.max,
                    onChange: r => {
                        h(r.x, r.y, {
                            width: r.width,
                            height: r.height,
                            angle: r.angle
                        })
                    }
                })
            } this.createVisuals(), this.createColliders()
    }
    get alpha() {
        return p() && a() || this.options.visibleInGame && this.state.active ? 1 : 0
    }
    get isCircle() {
        return this.options.shape === e.circle
    }
    get isRectangle() {
        return this.options.shape === e.rectangle
    }
    get color() {
        return Phaser.Display.Color.HexStringToColor(this.options.color).color
    }
    get borderWidth() {
        return this.options.showBorder ? 8 : 0
    }
    get borderColor() {
        return Phaser.Display.Color.HexStringToColor(n(this.options.color)).color
    }
}
export {
    Hi as
    default
};