import {
    al as W,
    ap as l,
    aq as d,
    ar as c,
    as as P,
    at as u,
    au as g,
    av as _
} from "./App-41.js";
import {
    F as w,
    R as k
} from "./ReplaceVisualEditingPreview.js";
import {
    I as f,
    i as v,
    d as G
} from "./FixSpinePlugin.js";
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
var r = (s => (s.none = "None", s.pulse = "Pulse", s.spinClockwise = "Spin Clockwise", s.spinCounterClockwise = "Spin Counter Clockwise", s))(r || {});
const b = 1.2,
    X = 500;
class Zt extends W {
    constructor(C) {
        super(C), this.isDuringAnimation = !1, this.needsTextureUpdate = !0, this.playTween = () => {
            if (this.options.animation === r.none || this.isDuringAnimation) return;
            this.isDuringAnimation = !0;
            const t = this.options.animationDuration * 1e3,
                e = this.options.animation,
                i = {
                    targets: [this.fill.view, this.border.view],
                    duration: t,
                    onComplete: () => {
                        this.isDuringAnimation = !1
                    }
                };
            if (this.options.loop && (i.repeat = -1, i.repeatDelay = this.options.animationLoopDelay * 1e3), e === r.pulse) {
                const o = this.getScale();
                i.scaleX = o * b, i.scaleY = o * b, i.yoyo = !0
            }
            e === r.spinClockwise && (i.angle = 360), e === r.spinCounterClockwise && (i.angle = -360), this.tweens.add(i)
        }, this.calculateOrigin = t => {
            const {
                x: e,
                y: i,
                w: o,
                h
            } = t, n = d.editor.baseSize, a = n / 2, p = n / 2, I = e, S = i, x = a, y = p, A = x - I, T = y - S, D = A / o, O = T / h;
            return {
                originX: D,
                originY: O
            }
        }, this.updateTexture = () => {
            const {
                key: t,
                size: e
            } = l({
                requestId: this.id + "_fill",
                customAssetId: this.options.customAssetId,
                borderWidth: 0
            }), {
                key: i
            } = l({
                requestId: this.id + "_border",
                customAssetId: this.options.customAssetId,
                borderWidth: this.options.borderWidth
            }), o = this.getScale(), h = e.maxX - e.minX, n = e.maxY - e.minY, {
                originX: a,
                originY: p
            } = this.calculateOrigin({
                x: e.minX,
                y: e.minY,
                w: h,
                h: n,
                alpha: this.options.angle,
                scale: o
            });
            this.fill.view.setTexture(t), this.fill.view.setOrigin(a, p), this.fill.view.angle = this.options.angle, this.border.view.setTexture(i), this.border.view.setOrigin(a, p), this.border.view.angle = this.options.angle, this.boundingBox.clearCached()
        }, this.getScale = () => .5 * this.options.width / d.editor.baseSize, this.setupVisualEditing = () => {
            if (!f() || !v()) return;
            const t = w(this, "width"),
                e = w(this, "height");
            this.visualEditing.add.box({
                width: this.options.width / 2,
                height: this.options.height / 2,
                angle: this.options.angle,
                rotable: !0,
                minWidth: t.min / 2,
                maxWidth: t.max / 2,
                minHeight: e.min / 2,
                maxHeight: e.max / 2,
                keepRatio: !0,
                onChange: i => {
                    k(i.x, i.y, {
                        width: i.width * 2,
                        height: i.height * 2,
                        angle: i.angle
                    })
                }
            })
        }, this.tweenVisibility = t => {
            this.tweens.add({
                targets: [this.fill.view, this.border.view],
                alpha: t ? 1 : 0,
                duration: X
            })
        }, this.onStateChange = t => {
            t === "visible" && this.tweenVisibility(this.state.visible), t === "animationCounter" && this.state.animationCounter > 0 && this.playTween()
        }, this.onScalableShapeChanged = t => {
            this.options.customAssetId === t && this.cull.isInsideView ? (this.updateTexture(), this.needsTextureUpdate = !1) : this.needsTextureUpdate = !0
        }, this.destroy = t => {
            super.destroy(t), t.isBeingReplaced || (c({
                requestId: this.id + "_fill",
                customAssetId: this.options.customAssetId,
                borderWidth: 0
            }), c({
                requestId: this.id + "_border",
                customAssetId: this.options.customAssetId,
                borderWidth: this.options.borderWidth
            }))
        }, this.fill = this.parts.add.sprite({
            imageId: u.imageId,
            depthChange: P(1)
        }), this.border = this.parts.add.sprite({
            imageId: u.imageId
        }), this.fill.view.tint = g(this.options.fillColor), this.border.view.tint = g(this.options.borderColor);
        const m = this.getScale();
        this.fill.view.setScale(m), this.border.view.setScale(m), this.setupVisualEditing(), this.cull.setOnEnterViewCallback(() => {
            this.needsTextureUpdate && (this.updateTexture(), this.needsTextureUpdate = !1)
        }), _() && this.options.animation !== r.none && this.options.animateOnGameStart && this.playTween(), f() && v() && !this.options.visibleOnGameStart && (this.fill.view.setAlpha(.6), this.border.view.setAlpha(.6)), G() && !this.options.visibleOnGameStart && (this.fill.view.setAlpha(0), this.border.view.setAlpha(0)), this.isPreview && this.updateTexture()
    }
}
export {
    Zt as
    default
};