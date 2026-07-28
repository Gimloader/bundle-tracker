import {
    al as C,
    am as H,
    k as S,
    L as P
} from "./App-41.js";
import {
    a as T,
    i as D,
    c as y,
    d as E
} from "./FixSpinePlugin.js";
import {
    G as w
} from "./GetAssetPath.js";
import {
    F as B,
    R as F
} from "./ReplaceVisualEditingPreview.js";
import {
    A as M
} from "./AddIgnoredStaticBodiesWhenCollisionsEnabled.js";
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
import "./clsx.m.js";
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
var A = (p => (p.floor = "Floor", p.beneathProp = "Beneath Prop", p))(A || {}),
    g = (p => (p.off = "Off", p.on = "On", p.whenHit = "When Hit", p))(g || {});
const d = (p, a, r, t, i = !1) => {
        const s = i ? -r : r,
            e = {
                x: p * s,
                y: a * r
            },
            o = Phaser.Math.DegToRad(t);
        return {
            x: e.x * Math.cos(o) - e.y * Math.sin(o),
            y: e.x * Math.sin(o) + e.y * Math.cos(o)
        }
    },
    O = 20,
    l = 100,
    X = 200,
    x = .25,
    I = 1e3,
    L = 350,
    c = 200,
    m = 10;
class ii extends C {
    constructor(a) {
        super(a), this.showing = !0, this.healthbarShowTween = null, this.healthbarHideTween = null, this.createHealthbar = () => {
            this.canBeDamaged() && this.options.healthbar !== g.off && (this.healthbarContainer = this.parts.add.container({}), this.healthbarContainer2 = this.parts.add.container({
                parent: this.healthbarContainer.view
            }), this.healthbarContainer.view.x = this.x, this.healthbarContainer.view.y = this.y + 30, this.healthbarContainer2.view.x = 0, this.healthbarContainer2.view.y = 0, this.healthbarBg = this.parts.add.rect({
                width: c,
                height: m,
                color: 0,
                alpha: .25,
                parent: this.healthbarContainer2.view
            }), this.healthbarContainer2.view.add(this.healthbarBg.view), this.healthbarBg.view.x = 0, this.healthbarBg.view.y = 0, this.healthbar = this.parts.add.rect({
                width: c,
                height: m,
                color: 4567883,
                alpha: 1,
                parent: this.healthbarContainer2.view
            }), this.healthbarContainer2.view.add(this.healthbar.view), this.healthbar.view.x = 0, this.healthbar.view.y = 0, this.healthbarMark = this.parts.add.rect({
                width: 2,
                height: m,
                color: 6800492,
                alpha: 1,
                parent: this.healthbarContainer2.view
            }), this.healthbarContainer2.view.add(this.healthbarMark.view), this.healthbarMark.view.x = c / 2 - 1, this.healthbarMark.view.y = 0, this.options.healthbar === g.whenHit && (this.healthbarContainer2.view.alpha = 0), this.positionHealthbar())
        }, this.positionHealthbar = () => {
            var i, s;
            if (!this.canBeDamaged() || this.options.healthbar === g.off || !((i = this.sprite) != null && i.view) || !((s = this.healthbarContainer) != null && s.view)) return;
            const t = this.sprite.getBounds();
            this.healthbarContainer.view.x = (t.left + t.right) / 2, this.healthbarContainer.view.y = t.bottom + 30
        }, this.tweenHealthbarOnHit = () => {
            var t, i;
            this.options.healthbar === g.whenHit && ((t = this.healthbarShowTween) == null || t.stop(), this.healthbarShowTween = this.tweens.add({
                targets: this.healthbarContainer2.view,
                alpha: 1,
                duration: l,
                ease: Phaser.Math.Easing.Sine.InOut
            }), (i = this.healthbarHideTween) == null || i.stop(), this.healthbarHideTween = this.tweens.add({
                targets: this.healthbarContainer2.view,
                alpha: 0,
                duration: L,
                delay: I,
                ease: Phaser.Math.Easing.Sine.InOut
            }))
        }, this.updateHealthbar = t => {
            if (!this.canBeDamaged() || this.options.healthbar === g.off) return;
            const i = t ?? 1;
            this.healthbar.view.scaleX = i, this.healthbar.view.x = -(c * (1 - i)) / 2, this.healthbarBg.view.alpha = 0, this.healthbar.view.alpha = 0, this.healthbarMark.view.alpha = 0, i > 0 && (this.healthbar.view.alpha = 1, this.healthbarBg.view.alpha = 1, this.healthbarMark.view.alpha = this.healthbar.view.alpha, this.healthbarMark.view.x = -c / 2 + c * i - 1)
        }, this.onStateChange = t => {
            if (t === "visible" && (this.state.visible ? (M(this), this.show()) : this.hide()), t === "hitData") {
                const i = JSON.parse(this.state.hitData);
                i.alpha !== void 0 && i.damageToDeal !== void 0 && this.onHealthChange(i)
            }
        }, this.onHealthChange = t => {
            if ((t == null ? void 0 : t.damageToDeal) > 0) {
                let i = t == null ? void 0 : t.x,
                    s = t == null ? void 0 : t.y;
                if (!i || !s) {
                    const h = this.boundingBox.getBoundingBox(),
                        n = {
                            x: h.x + h.width / 2,
                            y: h.y + h.height / 2
                        };
                    i = n.x, s = n.y
                }
                const e = Phaser.Math.Snap.To(i, O),
                    o = Phaser.Math.Snap.To(s, O);
                T().worldManager.projectiles.damageMarkers.basic.applyDamage({
                    markerId: this.id,
                    damage: t.damageToDeal,
                    x: e,
                    y: o
                })
            }
            this.updateVisibleAlpha(t.alpha), this.spriteFlashOverlay && this.spriteFlashOverlay.view && (this.spriteFlashOverlay.view.alpha = 1, this.tweens.add({
                targets: this.spriteFlashOverlay.view,
                alpha: 0,
                duration: X
            })), this.sprite && this.sprite.view && this.tweens.add({
                targets: this.sprite.view,
                alpha: this.visibleAlpha,
                duration: l
            }), this.shadows.forEach(i => this.tweens.add({
                targets: i,
                alphaMultip: this.getShadowVisibleAlpha(),
                duration: l
            })), this.updateHealthbar(t.alpha), this.tweenHealthbarOnHit()
        }, this.addVisualEditing = () => {
            const t = B(this, "Scale"),
                i = this.propOption.image.width * this.propOption.scale,
                s = this.propOption.image.height * this.propOption.scale,
                e = {
                    x: (.5 - this.propOption.originX) * i,
                    y: (.5 - this.propOption.originY) * s
                },
                o = d(e.x, e.y, this.options.Scale, this.options.Angle, this.options.FlipX),
                h = 0;
            this.visualEditing.add.box({
                x: o.x,
                y: o.y,
                angle: this.options.Angle,
                width: i * this.options.Scale + h,
                height: s * this.options.Scale + h,
                minWidth: i * Math.max(.1, t.min) + h,
                maxWidth: i * t.max + h,
                minHeight: s * Math.max(.1, t.min) + h,
                maxHeight: s * t.max + h,
                onChange: n => {
                    const v = (n.height - h) / s,
                        b = n.angle,
                        f = {
                            x: (.5 - this.propOption.originX) * i,
                            y: (.5 - this.propOption.originY) * s
                        },
                        u = d(f.x, f.y, v, b, this.options.FlipX);
                    F(n.x - u.x, n.y - u.y, {
                        Angle: b,
                        Scale: v
                    })
                }
            })
        }, this.addPart = t => {
            this.sprite = this.parts.add.sprite({
                imageId: w(t),
                imageUrl: w(t),
                originX: this.propOption.originX,
                originY: this.propOption.originY,
                onReady: i => {
                    this.sprite = i, this.boundingBox.clearCached(), this.updateWirePoint(), this.addVisualEditing(), this.positionHealthbar()
                }
            }), this.sprite.view.scaleX = (this.options.Scale || 1) * this.propOption.scale, this.sprite.view.scaleY = (this.options.Scale || 1) * this.propOption.scale, this.sprite.view.angle = this.options.Angle, this.sprite.view.alpha = this.visibleAlpha, this.options.FlipX && (this.sprite.view.scaleX *= -1), this.options.Tint && (this.sprite.view.tint = Phaser.Display.Color.HexStringToColor(this.options.Tint).color), this.canBeDamaged() && (this.spriteFlashOverlay = this.parts.add.sprite({
                imageId: w(t),
                imageUrl: w(t),
                originX: this.propOption.originX,
                originY: this.propOption.originY,
                flipX: this.options.FlipX,
                depthChange: 10
            }), this.spriteFlashOverlay.view.scaleX = (this.options.Scale || 1) * this.propOption.scale, this.spriteFlashOverlay.view.scaleY = (this.options.Scale || 1) * this.propOption.scale, this.spriteFlashOverlay.view.angle = this.options.Angle, this.spriteFlashOverlay.view.alpha = 0, this.spriteFlashOverlay.view.tint = 16777215, this.spriteFlashOverlay.view.tintFill = !0), this.boundingBox.clearCached(), this.updateWirePoint()
        }, this.updateWirePoint = () => {
            if (!D() || this.isPreview) return;
            const t = this.sprite.getBounds();
            this.wirePoints.setBoth(t.x + t.width / 2, t.y + t.height / 2)
        }, this.convertOffsetToLocal = (t, i) => ({
            x: (t - (this.propOption.originX - .5) * this.propOption.image.width) * this.propOption.scale,
            y: (i - (this.propOption.originY - .5) * this.propOption.image.height) * this.propOption.scale
        }), this.addCircleCollider = t => {
            const i = this.convertOffsetToLocal(t.x, t.y),
                s = this.options.FlipX ? -i.x : i.x,
                e = d(s, i.y, this.options.Scale, this.options.Angle);
            this.colliders.add.circle({
                r: t.radius * this.propOption.scale * this.options.Scale,
                x: e.x,
                y: e.y
            })
        }, this.addRectCollider = t => {
            const i = this.convertOffsetToLocal(t.x, t.y),
                s = this.options.FlipX ? -i.x : i.x,
                e = this.options.FlipX ? -t.angle : t.angle,
                o = t.width * this.propOption.scale * this.options.Scale,
                h = t.height * this.propOption.scale * this.options.Scale,
                n = d(s, i.y, this.options.Scale, this.options.Angle);
            this.colliders.add.box({
                x: n.x,
                y: n.y,
                w: o,
                h,
                angle: this.options.Angle + e
            })
        }, this.addCapsuleCollider = t => {
            const i = this.convertOffsetToLocal(t.x, t.y),
                s = this.options.FlipX ? -i.x : i.x,
                e = this.options.FlipX ? -t.angle : t.angle,
                o = t.radius * this.propOption.scale,
                h = t.halfHeight * this.propOption.scale,
                n = d(s, i.y, this.options.Scale, this.options.Angle);
            this.colliders.add.capsule({
                x: n.x,
                y: n.y,
                r1: o * this.options.Scale,
                r2: (o + h) * this.options.Scale,
                angle: this.options.Angle + e
            })
        }, this.addShadow = t => {
            if (y()) return;
            const i = this.convertOffsetToLocal(t.x, t.y),
                s = d(i.x, i.y, this.options.Scale, 0);
            this.shadows.add({
                x: this.options.FlipX ? -s.x : s.x,
                y: s.y,
                r1: t.radiusX / 2 * this.propOption.scale * this.options.Scale,
                r2: t.radiusY / 2 * this.propOption.scale * this.options.Scale,
                alphaMultip: this.getShadowVisibleAlpha(),
                depth: this.options.shadowsPlacement === A.beneathProp ? this.layers.getGlobalDepth() - H(1) : 0
            })
        }, this.canBeDamaged = () => this.options.canBeDamaged, this.updateVisibleAlpha = t => {
            const i = t === 0 ? 0 : (this.state.healthPercent ?? 1) * (1 - x) + x;
            this.visibleAlpha = i * (this.options.Alpha ?? 1)
        }, this.getShadowVisibleAlpha = () => this.visibleAlpha === 0 ? 0 : this.options.Alpha ?? 1, this.checkIfCollidersEnabled = () => this.state.visible && this.state.healthPercent > 0, this.updateVisibleAlpha(this.state.healthPercent ?? 1);
        const r = S(this.options.propId);
        r && (this.propOption = r, E() && !this.state.visible && (this.showing = !1), this.layers.setDefaultLayer(r.defaultLayer ?? P.DepthSortedCharactersAndDevices), this.createVisuals())
    }
    createVisuals() {
        if (this.addPart(this.propOption.image.path), this.options.UseColliders) {
            const a = y() ? this.propOption.colliders.platformer : this.propOption.colliders.topDown;
            a.circle.forEach(r => {
                this.addCircleCollider(r)
            }), a.rectangle.forEach(r => {
                this.addRectCollider(r)
            }), a.capsule.forEach(r => {
                this.addCapsuleCollider(r)
            })
        }
        this.options.shadowsEnabled && this.options.Angle === 0 && this.propOption.shadows.forEach(a => {
            this.addShadow(a)
        }), this.createHealthbar(), this.updateHealthbar(this.state.healthPercent), this.showing || this.hideInstantly()
    }
    hide() {
        this.showing = !1, this.sprite && this.sprite.view && this.tweens.add({
            targets: this.sprite.view,
            alpha: 0,
            duration: l
        }), this.healthbarContainer && this.healthbarContainer.view && this.tweens.add({
            targets: this.healthbarContainer.view,
            alpha: 0,
            duration: l
        }), this.shadows.forEach(a => this.tweens.add({
            targets: a,
            alphaMultip: 0,
            duration: l
        }))
    }
    hideInstantly() {
        this.showing = !1, this.sprite && this.sprite.view && (this.sprite.view.alpha = 0), this.healthbarContainer && this.healthbarContainer.view && (this.healthbarContainer.view.alpha = 0), this.shadows.forEach(a => {
            a.alphaMultip = 0
        })
    }
    show() {
        this.showing = !0, this.sprite && this.sprite.view && this.tweens.add({
            targets: this.sprite.view,
            alpha: this.visibleAlpha,
            duration: l
        }), this.healthbarContainer && this.healthbarContainer.view && this.tweens.add({
            targets: this.healthbarContainer.view,
            alpha: 1,
            duration: l
        }), this.shadows.forEach(a => this.tweens.add({
            targets: a,
            alphaMultip: this.getShadowVisibleAlpha(),
            duration: l
        }))
    }
}
export {
    ii as
    default
};