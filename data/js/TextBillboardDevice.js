import {
    al as l
} from "./App-41.js";
import {
    i as c,
    L as d
} from "./LoadGoogleFontAfterSceneStart.js";
import {
    P as g,
    a as r,
    i as h,
    I as a,
    e as f,
    d as u
} from "./FixSpinePlugin.js";
import {
    T as x
} from "./TextPadding.js";
import {
    F as S,
    R as v
} from "./ReplaceVisualEditingPreview.js";
import "./_index.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./GetAssetPath.js";
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
const p = {
    Animation: {
        Visibility: {
            DurationMS: 400,
            Ease: g.Math.Easing.Linear
        }
    }
};
class Nt extends l {
    constructor(m) {
        super(m), this.createVisuals = () => {
            if (this.isDestroyed) return;
            const t = c(this.options.googleFont),
                e = r().cameraHelper.zoom,
                i = this.options.fontSize * e,
                n = 1 / e;
            let s = {
                fontSize: `${i}px`,
                align: "center",
                fontFamily: t ? `"${this.options.googleFont}"` : "Roboto",
                color: this.state.textColor || this.options.color
            };
            this.options.strokeThickness && this.options.strokeColor && (s.strokeThickness = this.options.strokeThickness * e, s.stroke = this.options.strokeColor);
            let o = this.state.text || this.options.text;
            o || h() && (o = "Text Here"), this.text = this.parts.add.text({
                text: o,
                textStyle: s
            }), this.text.view.scale = n, this.text.view.angle = this.options.rotation, !t && this.options.googleFont ? d({
                familyName: this.options.googleFont,
                onLoad: () => {
                    this.isDestroyed || (this.text.view.setFontFamily(`"${this.options.googleFont}"`), this.updateScale(), this.parts.show(), this.setupVisualEditing())
                }
            }) : (this.parts.show(), this.setupVisualEditing()), this.text.view.setAlpha(this.getAlpha())
        }, this.onUpdate = () => {
            this.currentScale !== this.neededScale && this.cull.isInsideView && this.updateScale()
        }, this.getWidth = () => this.text ? this.text.view.width : 100, this.getHeight = () => this.text ? this.text.view.height * 2 : 100, this.updateScale = () => {
            const t = 1 / r().cameraHelper.zoom;
            this.neededScale = t, !(this.currentScale === t || !this.cull.isInsideView) && (this.setFontSize(), this.setStroke(), this.currentScale = t, this.boundingBox.clearCached())
        }, this.setFontSize = () => {
            const t = this.neededScale;
            this.text.view.scale = t;
            const e = this.options.fontSize * r().cameraHelper.zoom,
                i = x();
            this.text.view.setPadding(i, i, i, i), this.text.view.setFontSize(e)
        }, this.setStroke = () => {
            if (this.options.strokeThickness && this.options.strokeColor) {
                const t = this.options.strokeThickness * r().cameraHelper.zoom;
                this.text.view.setStroke(this.options.strokeColor, t)
            }
        }, this.getAlpha = () => h() && a() ? this.options.alpha : f() && a() ? this.options.visibleOnGameStart === "No" ? 0 : this.options.alpha : this.state.visible ? this.options.alpha : 0, this.onStateChange = t => {
            if (this.text) {
                if (t === "visible") {
                    if (!u()) return;
                    this.tweens.add({
                        targets: [this.text.view],
                        alpha: this.getAlpha(),
                        duration: p.Animation.Visibility.DurationMS,
                        ease: p.Animation.Visibility.Ease
                    })
                } else t === "text" ? this.text.view.setText(this.state.text) : t === "textColor" && this.text.view.setColor(this.state.textColor);
                this.updateScale()
            }
        }, this.setupVisualEditing = () => {
            if (!a() || !h() || this.visualEditing.uses()) return;
            const t = S(this, "fontSize"),
                e = this.getWidth() * t.min / this.options.fontSize,
                i = this.getWidth() * t.max / this.options.fontSize,
                n = this.getHeight() * t.min / this.options.fontSize,
                s = this.getHeight() * t.max / this.options.fontSize;
            this.visualEditing.add.box({
                width: this.getWidth() * 2,
                height: this.getHeight(),
                angle: this.options.rotation,
                minWidth: e,
                maxWidth: i,
                minHeight: n,
                maxHeight: s,
                onChange: o => {
                    v(o.x, o.y, {
                        rotation: o.angle,
                        fontSize: o.height / this.getHeight() * this.options.fontSize
                    })
                }
            })
        }, this.createVisuals()
    }
}
export {
    Nt as
    default
};