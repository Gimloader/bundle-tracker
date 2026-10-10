import {
    n as e
} from "./isVersion.js";
import {
    r as t,
    t as n
} from "./InPhase.js";
import {
    g as r,
    t as i
} from "./Device.js";
import {
    r as a
} from "./DrawToCanvas.js";
import {
    r as o,
    t as s
} from "./ScalableShapeCache.js";
import {
    Et as c,
    Rt as l,
    v as u
} from "./App-42.js";
import {
    n as d,
    t as f
} from "./FetchOptionSchemaProperty.js";
var p = function(e) {
        return e.none = `None`, e.pulse = `Pulse`, e.spinClockwise = `Spin Clockwise`, e.spinCounterClockwise = `Spin Counter Clockwise`, e
    }({}),
    m = 1.2,
    h = 500,
    g = class extends i {
        constructor(i) {
            super(i), this.isDuringAnimation = !1, this.needsTextureUpdate = !0, this.playTween = () => {
                if (this.options.animation === p.none || this.isDuringAnimation) return;
                this.isDuringAnimation = !0;
                let e = this.options.animationDuration * 1e3,
                    t = this.options.animation,
                    n = {
                        targets: [this.fill.view, this.border.view],
                        duration: e,
                        onComplete: () => {
                            this.isDuringAnimation = !1
                        }
                    };
                if (this.options.loop && (n.repeat = -1, n.repeatDelay = this.options.animationLoopDelay * 1e3), t === p.pulse) {
                    let e = this.getScale();
                    n.scaleX = e * m, n.scaleY = e * m, n.yoyo = !0
                }
                t === p.spinClockwise && (n.angle = 360), t === p.spinCounterClockwise && (n.angle = -360), this.tweens.add(n)
            }, this.calculateOrigin = e => {
                let {
                    x: t,
                    y: n,
                    w: r,
                    h: i
                } = e, o = a.editor.baseSize, s = o / 2, c = o / 2, l = t, u = n, d = s, f = c, p = d - l, m = f - u;
                return {
                    originX: p / r,
                    originY: m / i
                }
            }, this.updateTexture = () => {
                let {
                    key: e,
                    size: t
                } = s({
                    requestId: this.id + `_fill`,
                    fillEnclosedAreas: this.options.fillEnclosedAreas,
                    customAssetId: this.options.customAssetId,
                    borderWidth: 0
                }), {
                    key: n
                } = s({
                    requestId: this.id + `_border`,
                    customAssetId: this.options.customAssetId,
                    borderWidth: this.options.borderWidth
                }), r = this.getScale(), i = t.maxX - t.minX, a = t.maxY - t.minY, {
                    originX: o,
                    originY: c
                } = this.calculateOrigin({
                    x: t.minX,
                    y: t.minY,
                    w: i,
                    h: a,
                    alpha: this.options.angle,
                    scale: r
                });
                this.fill.view.setTexture(e), this.fill.view.setOrigin(o, c), this.fill.view.angle = this.options.angle, this.border.view.setTexture(n), this.border.view.setOrigin(o, c), this.border.view.angle = this.options.angle, this.boundingBox.clearCached()
            }, this.getScale = () => .5 * this.options.width / a.editor.baseSize, this.setupVisualEditing = () => {
                if (!t() || !e()) return;
                let n = f(this, `width`),
                    r = f(this, `height`);
                this.visualEditing.add.box({
                    width: this.options.width / 2,
                    height: this.options.height / 2,
                    angle: this.options.angle,
                    rotable: !0,
                    minWidth: n.min / 2,
                    maxWidth: n.max / 2,
                    minHeight: r.min / 2,
                    maxHeight: r.max / 2,
                    keepRatio: !0,
                    onChange: e => {
                        d(e.x, e.y, {
                            width: e.width * 2,
                            height: e.height * 2,
                            angle: e.angle
                        })
                    }
                })
            }, this.tweenVisibility = e => {
                this.tweens.add({
                    targets: [this.fill.view, this.border.view],
                    alpha: +!!e,
                    duration: h
                })
            }, this.onStateChange = e => {
                e === `visible` && this.tweenVisibility(this.state.visible), e === `animationCounter` && this.state.animationCounter > 0 && this.playTween()
            }, this.onScalableShapeChanged = e => {
                this.options.customAssetId === e && this.cull.isInsideView ? (this.updateTexture(), this.needsTextureUpdate = !1) : this.needsTextureUpdate = !0
            }, this.destroy = e => {
                super.destroy(e), e.isBeingReplaced || (o({
                    requestId: this.id + `_fill`,
                    fillEnclosedAreas: this.options.fillEnclosedAreas,
                    customAssetId: this.options.customAssetId,
                    borderWidth: 0
                }), o({
                    requestId: this.id + `_border`,
                    customAssetId: this.options.customAssetId,
                    borderWidth: this.options.borderWidth
                }))
            }, this.fill = this.parts.add.sprite({
                imageId: r.imageId,
                depthChange: c(1)
            }), this.border = this.parts.add.sprite({
                imageId: r.imageId
            }), this.fill.view.tint = u(this.options.fillColor), this.border.view.tint = u(this.options.borderColor);
            let g = this.getScale();
            if (this.fill.view.setScale(g), this.border.view.setScale(g), this.setupVisualEditing(), this.cull.setOnEnterViewCallback(() => {
                    this.needsTextureUpdate && (this.updateTexture(), this.needsTextureUpdate = !1)
                }), l() && this.options.animation !== p.none && this.options.animateOnGameStart && this.playTween(), t() && e() && !this.options.visibleOnGameStart && (this.fill.view.setAlpha(.6), this.border.view.setAlpha(.6)), n()) {
                let e = this.state.visible ?? this.options.visibleOnGameStart;
                this.fill.view.setAlpha(+!!e), this.border.view.setAlpha(+!!e)
            }
            this.isPreview && this.updateTexture()
        }
    };
export {
    g as
    default
};