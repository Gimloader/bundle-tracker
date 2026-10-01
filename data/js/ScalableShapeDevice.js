import {
    aK as O,
    b0 as m,
    b1 as d,
    b2 as c,
    aQ as W,
    b3 as u,
    aU as g,
    b4 as P
} from "./App-41.js";
import {
    F as w,
    R as _
} from "./FetchOptionSchemaProperty.js";
import {
    I as f,
    i as b,
    e as k
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
import "./MapSound.js";
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
import "./CircularProgress.js";
import "./clsx.m.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./use-motion-value.js";
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
import "./CloseCircleOutlined.js";
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
var r = (s => (s.none = "None", s.pulse = "Pulse", s.spinClockwise = "Spin Clockwise", s.spinCounterClockwise = "Spin Counter Clockwise", s))(r || {});
const v = 1.2,
    G = 500;
class $i extends O {
    constructor(C) {
        super(C), this.isDuringAnimation = !1, this.needsTextureUpdate = !0, this.playTween = () => {
            if (this.options.animation === r.none || this.isDuringAnimation) return;
            this.isDuringAnimation = !0;
            const i = this.options.animationDuration * 1e3,
                e = this.options.animation,
                t = {
                    targets: [this.fill.view, this.border.view],
                    duration: i,
                    onComplete: () => {
                        this.isDuringAnimation = !1
                    }
                };
            if (this.options.loop && (t.repeat = -1, t.repeatDelay = this.options.animationLoopDelay * 1e3), e === r.pulse) {
                const o = this.getScale();
                t.scaleX = o * v, t.scaleY = o * v, t.yoyo = !0
            }
            e === r.spinClockwise && (t.angle = 360), e === r.spinCounterClockwise && (t.angle = -360), this.tweens.add(t)
        }, this.calculateOrigin = i => {
            const {
                x: e,
                y: t,
                w: o,
                h: p
            } = i, n = d.editor.baseSize, a = n / 2, h = n / 2, I = e, S = t, x = a, A = h, y = x - I, T = A - S, D = y / o, E = T / p;
            return {
                originX: D,
                originY: E
            }
        }, this.updateTexture = () => {
            const {
                key: i,
                size: e
            } = m({
                requestId: this.id + "_fill",
                fillEnclosedAreas: this.options.fillEnclosedAreas,
                customAssetId: this.options.customAssetId,
                borderWidth: 0
            }), {
                key: t
            } = m({
                requestId: this.id + "_border",
                customAssetId: this.options.customAssetId,
                borderWidth: this.options.borderWidth
            }), o = this.getScale(), p = e.maxX - e.minX, n = e.maxY - e.minY, {
                originX: a,
                originY: h
            } = this.calculateOrigin({
                x: e.minX,
                y: e.minY,
                w: p,
                h: n,
                alpha: this.options.angle,
                scale: o
            });
            this.fill.view.setTexture(i), this.fill.view.setOrigin(a, h), this.fill.view.angle = this.options.angle, this.border.view.setTexture(t), this.border.view.setOrigin(a, h), this.border.view.angle = this.options.angle, this.boundingBox.clearCached()
        }, this.getScale = () => .5 * this.options.width / d.editor.baseSize, this.setupVisualEditing = () => {
            if (!f() || !b()) return;
            const i = w(this, "width"),
                e = w(this, "height");
            this.visualEditing.add.box({
                width: this.options.width / 2,
                height: this.options.height / 2,
                angle: this.options.angle,
                rotable: !0,
                minWidth: i.min / 2,
                maxWidth: i.max / 2,
                minHeight: e.min / 2,
                maxHeight: e.max / 2,
                keepRatio: !0,
                onChange: t => {
                    _(t.x, t.y, {
                        width: t.width * 2,
                        height: t.height * 2,
                        angle: t.angle
                    })
                }
            })
        }, this.tweenVisibility = i => {
            this.tweens.add({
                targets: [this.fill.view, this.border.view],
                alpha: i ? 1 : 0,
                duration: G
            })
        }, this.onStateChange = i => {
            i === "visible" && this.tweenVisibility(this.state.visible), i === "animationCounter" && this.state.animationCounter > 0 && this.playTween()
        }, this.onScalableShapeChanged = i => {
            this.options.customAssetId === i && this.cull.isInsideView ? (this.updateTexture(), this.needsTextureUpdate = !1) : this.needsTextureUpdate = !0
        }, this.destroy = i => {
            super.destroy(i), i.isBeingReplaced || (c({
                requestId: this.id + "_fill",
                fillEnclosedAreas: this.options.fillEnclosedAreas,
                customAssetId: this.options.customAssetId,
                borderWidth: 0
            }), c({
                requestId: this.id + "_border",
                customAssetId: this.options.customAssetId,
                borderWidth: this.options.borderWidth
            }))
        }, this.fill = this.parts.add.sprite({
            imageId: u.imageId,
            depthChange: W(1)
        }), this.border = this.parts.add.sprite({
            imageId: u.imageId
        }), this.fill.view.tint = g(this.options.fillColor), this.border.view.tint = g(this.options.borderColor);
        const l = this.getScale();
        if (this.fill.view.setScale(l), this.border.view.setScale(l), this.setupVisualEditing(), this.cull.setOnEnterViewCallback(() => {
                this.needsTextureUpdate && (this.updateTexture(), this.needsTextureUpdate = !1)
            }), P() && this.options.animation !== r.none && this.options.animateOnGameStart && this.playTween(), f() && b() && !this.options.visibleOnGameStart && (this.fill.view.setAlpha(.6), this.border.view.setAlpha(.6)), k()) {
            const i = this.state.visible ?? this.options.visibleOnGameStart;
            this.fill.view.setAlpha(i ? 1 : 0), this.border.view.setAlpha(i ? 1 : 0)
        }
        this.isPreview && this.updateTexture()
    }
}
export {
    $i as
    default
};