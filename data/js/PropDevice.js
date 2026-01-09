import {
    al as O,
    aQ as H,
    as as S,
    k as P,
    L as M
} from "./App-41.js";
import {
    a as E,
    i as D,
    c as T,
    d as B
} from "./FixSpinePlugin.js";
import {
    G as g
} from "./GetAssetPath.js";
import {
    F,
    R as X
} from "./ReplaceVisualEditingPreview.js";
import {
    A as I
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
var C = (o => (o.floor = "Floor", o.beneathProp = "Beneath Prop", o))(C || {}),
    w = (o => (o.off = "Off", o.on = "On", o.whenHit = "When Hit", o))(w || {});
const d = (o, a, r, t, i = !1) => {
        const e = i ? -r : r,
            s = {
                x: o * e,
                y: a * r
            },
            h = Phaser.Math.DegToRad(t);
        return {
            x: s.x * Math.cos(h) - s.y * Math.sin(h),
            y: s.x * Math.sin(h) + s.y * Math.cos(h)
        }
    },
    x = 20,
    l = 100,
    _ = 200,
    A = .25,
    R = 1e3,
    L = 350,
    c = 200,
    b = 10;
class si extends O {
    constructor(a) {
        super(a), this.showing = !0, this.healthbarShowTween = null, this.healthbarHideTween = null, this.createHealthbar = () => {
            this.canBeDamaged() && this.options.healthbar !== w.off && (this.healthbarContainer = this.parts.add.container({}), this.healthbarContainer2 = this.parts.add.container({
                parent: this.healthbarContainer.view
            }), this.healthbarContainer.view.x = this.x, this.healthbarContainer.view.y = this.y + 30, this.healthbarContainer2.view.x = 0, this.healthbarContainer2.view.y = 0, this.healthbarBg = this.parts.add.rect({
                width: c,
                height: b,
                color: 0,
                alpha: .25,
                parent: this.healthbarContainer2.view
            }), this.healthbarContainer2.view.add(this.healthbarBg.view), this.healthbarBg.view.x = 0, this.healthbarBg.view.y = 0, this.healthbar = this.parts.add.rect({
                width: c,
                height: b,
                color: 4567883,
                alpha: 1,
                parent: this.healthbarContainer2.view
            }), this.healthbarContainer2.view.add(this.healthbar.view), this.healthbar.view.x = 0, this.healthbar.view.y = 0, this.healthbarMark = this.parts.add.rect({
                width: 2,
                height: b,
                color: 6800492,
                alpha: 1,
                parent: this.healthbarContainer2.view
            }), this.healthbarContainer2.view.add(this.healthbarMark.view), this.healthbarMark.view.x = c / 2 - 1, this.healthbarMark.view.y = 0, this.options.healthbar === w.whenHit && (this.healthbarContainer2.view.alpha = 0), this.positionHealthbar())
        }, this.positionHealthbar = () => {
            var i, e;
            if (!this.canBeDamaged() || this.options.healthbar === w.off || !((i = this.sprite) != null && i.view) || !((e = this.healthbarContainer) != null && e.view)) return;
            const t = this.sprite.getBounds();
            this.healthbarContainer.view.x = (t.left + t.right) / 2, this.healthbarContainer.view.y = t.bottom + 30
        }, this.tweenHealthbarOnHit = () => {
            var t, i;
            this.options.healthbar === w.whenHit && ((t = this.healthbarShowTween) == null || t.stop(), this.healthbarShowTween = this.tweens.add({
                targets: this.healthbarContainer2.view,
                alpha: 1,
                duration: l,
                ease: Phaser.Math.Easing.Sine.InOut
            }), (i = this.healthbarHideTween) == null || i.stop(), this.healthbarHideTween = this.tweens.add({
                targets: this.healthbarContainer2.view,
                alpha: 0,
                duration: L,
                delay: R,
                ease: Phaser.Math.Easing.Sine.InOut
            }))
        }, this.updateHealthbar = t => {
            if (!this.canBeDamaged() || this.options.healthbar === w.off) return;
            const i = t ?? 1;
            this.healthbar.view.scaleX = i, this.healthbar.view.x = -(c * (1 - i)) / 2, this.healthbarBg.view.alpha = 0, this.healthbar.view.alpha = 0, this.healthbarMark.view.alpha = 0, i > 0 && (this.healthbar.view.alpha = 1, this.healthbarBg.view.alpha = 1, this.healthbarMark.view.alpha = this.healthbar.view.alpha, this.healthbarMark.view.x = -c / 2 + c * i - 1)
        }, this.onStateChange = t => {
            if (t === "visible" && (this.state.visible ? (I(this), this.show()) : this.hide()), t === "hitData") {
                const i = JSON.parse(this.state.hitData);
                i.alpha !== void 0 && i.damageToDeal !== void 0 && this.onHealthChange(i)
            }
        }, this.onHealthChange = t => {
            if ((t == null ? void 0 : t.damageToDeal) > 0) {
                let i = t == null ? void 0 : t.x,
                    e = t == null ? void 0 : t.y;
                if (!i || !e) {
                    const n = this.boundingBox.getBoundingBox(),
                        p = {
                            x: n.x + n.width / 2,
                            y: n.y + n.height / 2
                        };
                    i = p.x, e = p.y
                }
                const s = Phaser.Math.Snap.To(i, x),
                    h = Phaser.Math.Snap.To(e, x);
                E().worldManager.projectiles.damageMarkers.basic.applyDamage({
                    markerId: this.id,
                    damage: t.damageToDeal,
                    x: s,
                    y: h
                })
            }
            this.updateVisibleAlpha(t.alpha), this.spriteFlashOverlay && this.spriteFlashOverlay.view && (this.spriteFlashOverlay.view.alpha = 1, this.tweens.add({
                targets: this.spriteFlashOverlay.view,
                alpha: 0,
                duration: _
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
            const t = H(g(this.propOption.imageUrl)),
                i = F(this, "Scale"),
                e = t.width * this.propOption.scaleMultip,
                s = t.height * this.propOption.scaleMultip,
                h = {
                    x: (.5 - this.propOption.originX) * e,
                    y: (.5 - this.propOption.originY) * s
                },
                n = d(h.x, h.y, this.options.Scale, this.options.Angle, this.options.FlipX),
                p = 0;
            this.visualEditing.add.box({
                x: n.x,
                y: n.y,
                angle: this.options.Angle,
                width: e * this.options.Scale + p,
                height: s * this.options.Scale + p,
                minWidth: e * Math.max(.1, i.min) + p,
                maxWidth: e * i.max + p,
                minHeight: s * Math.max(.1, i.min) + p,
                maxHeight: s * i.max + p,
                onChange: m => {
                    const v = (m.height - p) / s,
                        u = m.angle,
                        f = {
                            x: (.5 - this.propOption.originX) * e,
                            y: (.5 - this.propOption.originY) * s
                        },
                        y = d(f.x, f.y, v, u, this.options.FlipX);
                    X(m.x - y.x, m.y - y.y, {
                        Angle: u,
                        Scale: v
                    })
                }
            })
        }, this.addPart = t => {
            this.sprite = this.parts.add.sprite({
                imageId: g(t),
                imageUrl: g(t),
                originX: this.propOption.originX,
                originY: this.propOption.originY,
                onReady: i => {
                    this.sprite = i, this.boundingBox.clearCached(), this.updateWirePoint(), this.addVisualEditing(), this.positionHealthbar()
                }
            }), this.sprite.view.scaleX = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.scaleY = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.angle = this.options.Angle, this.sprite.view.alpha = this.visibleAlpha, this.options.FlipX && (this.sprite.view.scaleX *= -1), this.options.Tint && (this.sprite.view.tint = Phaser.Display.Color.HexStringToColor(this.options.Tint).color), this.canBeDamaged() && (this.spriteFlashOverlay = this.parts.add.sprite({
                imageId: g(t),
                imageUrl: g(t),
                originX: this.propOption.originX,
                originY: this.propOption.originY,
                flipX: this.options.FlipX,
                depthChange: 10
            }), this.spriteFlashOverlay.view.scaleX = (this.options.Scale || 1) * this.propOption.scaleMultip, this.spriteFlashOverlay.view.scaleY = (this.options.Scale || 1) * this.propOption.scaleMultip, this.spriteFlashOverlay.view.angle = this.options.Angle, this.spriteFlashOverlay.view.alpha = 0, this.spriteFlashOverlay.view.tint = 16777215, this.spriteFlashOverlay.view.tintFill = !0), this.boundingBox.clearCached(), this.updateWirePoint()
        }, this.updateWirePoint = () => {
            if (!D() || this.isPreview) return;
            const t = this.sprite.getBounds();
            this.wirePoints.setBoth(t.x + t.width / 2, t.y + t.height / 2)
        }, this.addCircleCollider = t => {
            const i = this.options.FlipX ? -t.x : t.x,
                e = d(i, t.y, this.options.Scale, this.options.Angle);
            this.colliders.add.circle({
                r: t.r * this.options.Scale,
                x: e.x,
                y: e.y
            })
        }, this.addRectCollider = t => {
            const i = this.options.FlipX ? -t.x : t.x,
                e = this.options.FlipX ? -t.angle : t.angle,
                s = t.w * this.options.Scale,
                h = t.h * this.options.Scale,
                n = d(i, t.y, this.options.Scale, this.options.Angle);
            this.colliders.add.box({
                x: n.x,
                y: n.y,
                w: s,
                h,
                angle: this.options.Angle + e
            })
        }, this.addEllipseCollider = t => {
            const i = this.options.FlipX ? -t.x : t.x,
                e = this.options.FlipX ? -t.angle : t.angle,
                s = d(i, t.y, this.options.Scale, this.options.Angle);
            this.colliders.add.ellipse({
                x: s.x,
                y: s.y,
                r1: t.r1 * this.options.Scale,
                r2: t.r2 * this.options.Scale,
                angle: this.options.Angle + e
            })
        }, this.addShadow = t => {
            if (T()) return;
            const i = d(t.x, t.y, this.options.Scale, 0);
            this.shadows.add({
                x: this.options.FlipX ? -i.x : i.x,
                y: i.y,
                r1: t.r1 * this.options.Scale,
                r2: t.r2 * this.options.Scale,
                alphaMultip: this.getShadowVisibleAlpha(),
                depth: this.options.shadowsPlacement === C.beneathProp ? this.layers.getGlobalDepth() - S(1) : 0
            })
        }, this.canBeDamaged = () => this.options.canBeDamaged, this.updateVisibleAlpha = t => {
            const i = t === 0 ? 0 : (this.state.healthPercent ?? 1) * (1 - A) + A;
            this.visibleAlpha = i * (this.options.Alpha ?? 1)
        }, this.getShadowVisibleAlpha = () => this.visibleAlpha === 0 ? 0 : this.options.Alpha ?? 1, this.checkIfCollidersEnabled = () => this.state.visible && this.state.healthPercent > 0, this.updateVisibleAlpha(this.state.healthPercent ?? 1);
        const r = P(this.options.propId);
        r && (this.propOption = r, B() && !this.state.visible && (this.showing = !1), this.layers.setDefaultLayer(r.defaultLayer ?? M.DepthSortedCharactersAndDevices), this.createVisuals())
    }
    createVisuals() {
        var a, r, t, i, e, s;
        this.addPart(this.propOption.imageUrl), this.options.UseColliders && ((r = (a = this.propOption) == null ? void 0 : a.circleColliders) == null || r.forEach(h => {
            this.addCircleCollider(h)
        }), (i = (t = this.propOption) == null ? void 0 : t.rectColliders) == null || i.forEach(h => {
            this.addRectCollider(h)
        }), (s = (e = this.propOption) == null ? void 0 : e.ellipseColliders) == null || s.forEach(h => {
            this.addEllipseCollider(h)
        })), this.options.shadowsEnabled && this.options.Angle === 0 && this.propOption.shadows.forEach(h => {
            this.addShadow(h)
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
    si as
    default
};