import {
    R as l,
    F as C
} from "./FetchOptionSchemaProperty.js";
import {
    aK as F,
    L as m,
    af as u,
    b6 as c,
    b7 as P
} from "./App-41.js";
import {
    I as p,
    i as A
} from "./FixSpinePlugin.js";
import {
    U as T
} from "./Assets.js";
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
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
const S = 80,
    D = -30,
    f = 10,
    w = 1e3,
    n = 64,
    R = 16752412,
    M = .4,
    v = Math.PI / 180,
    r = 360,
    N = o => (o % r + r) % r,
    g = o => Phaser.Math.Angle.Wrap((N(o) - 90) * v);
class Zt extends F {
    constructor(I) {
        super(I), this.currentAngle = 0, this.targetAngle = 0, this.idleAnimationName = "", this.fireAnimationName = "", this.createVisuals = () => {
            this.createEditorRangeGuide(), this.createGadget(), this.cull.setMargin(this.getRadius() + n), this.updateGadgetTransform()
        }, this.createEditorRangeGuide = () => {
            if (!p() || !A()) return;
            const e = this.getRadius(),
                t = this.parts.add.graphics({
                    x: 0,
                    y: 0,
                    width: e * 2 + 8,
                    height: e * 2 + 8,
                    ignoreInput: !0,
                    layerId: m.DevicesUnderCharacters
                });
            t.view.disableInteractive();
            const i = Number(this.options.restAngle),
                a = Number.isFinite(i) ? i : 0,
                s = Number(this.options.angleRange),
                h = this.options.mode === "shootAtPlayers" ? Phaser.Math.Clamp(Number.isFinite(s) ? s : r, 0, r) : r,
                y = a - h / 2,
                E = h >= r;
            if (t.view.lineStyle(3, R, .7), E) t.view.strokeCircle(0, 0, e);
            else {
                const d = g(y),
                    b = d + h * v;
                t.view.beginPath(), t.view.arc(0, 0, e, d, b, !1, .01), t.view.strokePath()
            }
            t.view.fillStyle(R, .8), t.view.fillCircle(0, 0, 3)
        }, this.createGadget = () => {
            const e = u(this.options.gadgetId),
                t = e != null && e.weapon ? c[e.weapon.appearance] : void 0;
            if (!(t != null && t.weapon)) {
                this.gadget = this.parts.add.sprite({
                    ...T,
                    displayWidth: n,
                    displayHeight: n,
                    layerId: m.DevicesAboveCharacters,
                    onReady: this.updateGadgetTransform
                });
                return
            }
            const i = `${t.id}-weapon`;
            this.idleAnimationName = `${i}-idle`, this.fireAnimationName = `${i}-fire`, this.gadget = this.parts.add.animatedSprite({
                spritesheetId: i,
                spritesheetUrl: t.weapon.imageUrl,
                frameWidth: t.weapon.frameWidth,
                frameHeight: t.weapon.frameHeight,
                originX: t.weapon.originX,
                originY: t.weapon.originY,
                displayWidth: n,
                displayHeight: n,
                layerId: m.DevicesAboveCharacters,
                animations: [{
                    animName: this.idleAnimationName,
                    animFrames: {
                        frames: t.weapon.idleFrames
                    },
                    frameRate: t.weapon.frameRate,
                    repeat: -1
                }, {
                    animName: this.fireAnimationName,
                    animFrames: {
                        frames: t.weapon.fireFrames
                    },
                    frameRate: t.weapon.frameRate,
                    repeat: 0
                }],
                onReady: a => {
                    a.view.setScale(t.weapon.scale), a.view.on(Phaser.Animations.Events.ANIMATION_COMPLETE, s => {
                        s.key === this.fireAnimationName && a.view.anims.play(this.idleAnimationName)
                    }), this.updateGadgetTransform()
                }
            })
        }, this.setupVisualEditing = () => {
            if (!p() || !A()) return;
            const e = this.options.mode === "shootAtPlayers",
                t = Number(this.options.restAngle),
                i = this.getWeaponCenterRadius();
            if (this.visualEditing.add.circle({
                    radius: this.getRadius(),
                    angle: (Number.isFinite(t) ? t : 0) - 90,
                    minRadius: f,
                    maxRadius: w,
                    rotable: e,
                    onChange: s => {
                        l(s.x, s.y, {
                            radiusOffset: Math.round(s.radius - i),
                            ...e && {
                                restAngle: Math.round(N(s.angle + 90))
                            }
                        })
                    }
                }), !e) return;
            const a = C(this, "targetRange");
            this.visualEditing.add.circle({
                radius: this.options.targetRange,
                minRadius: a.min,
                maxRadius: a.max,
                rotable: !1,
                onChange: s => {
                    l(s.x, s.y, {
                        targetRange: Math.round(s.radius)
                    })
                }
            })
        }, this.updateGadgetTransform = () => {
            var i;
            if (!((i = this.gadget) != null && i.view)) return;
            const e = this.currentAngle,
                t = this.getRadius();
            this.gadget.view.x = this.x + Math.cos(e) * t, this.gadget.view.y = this.y + Math.sin(e) * t, this.gadget.view.rotation = e, this.gadget.view.setFlipY(e > Math.PI / 2 || e < -Math.PI / 2), this.gadget.setDepth(), this.updateActiveAppearance(), this.boundingBox.clearCached()
        }, this.updateActiveAppearance = () => {
            var i;
            if (!((i = this.gadget) != null && i.view)) return;
            const e = p() || this.state.active !== !1,
                t = this.options.semiTransparentWhenInactive ? M : 0;
            this.gadget.view.setVisible(!0), this.gadget.view.setAlpha(e ? 1 : t)
        }, this.getSyncedAimAngle = () => Number.isFinite(this.state.aimAngle) ? Phaser.Math.Angle.Wrap(this.state.aimAngle) : 0, this.getInitialAimAngle = () => {
            if (!p()) return this.getSyncedAimAngle();
            if (this.options.mode === "sequence") {
                const i = String(this.options.angleSequence ?? "").split(/[,\s]+/).map(Number).find(Number.isFinite);
                return g(i ?? 0)
            }
            const e = Number(this.options.restAngle),
                t = Number.isFinite(e) ? e : 0;
            return g(t)
        }, this.setTargetAngle = e => {
            var i;
            if (!Number.isFinite(e)) return;
            (i = this.angleTween) == null || i.stop(), this.targetAngle = Phaser.Math.Angle.Wrap(e);
            const t = Phaser.Math.Angle.Wrap(this.targetAngle - Phaser.Math.Angle.Wrap(this.currentAngle));
            if (this.options.mode === "sequence") {
                this.currentAngle = this.targetAngle, this.updateGadgetTransform();
                return
            }
            this.angleTween = this.tweens.add({
                targets: this,
                currentAngle: this.currentAngle + t,
                duration: 100,
                onUpdate: this.updateGadgetTransform,
                onComplete: () => {
                    this.currentAngle = this.targetAngle, this.angleTween = void 0, this.updateGadgetTransform()
                }
            })
        }, this.getRadius = () => Phaser.Math.Clamp(this.getWeaponCenterRadius() + this.getRadiusOffset(), f, w), this.getRadiusOffset = () => {
            const e = Number(this.options.radiusOffset);
            return Number.isFinite(e) ? e : D
        }, this.getWeaponCenterRadius = () => {
            var a;
            const e = u(this.options.gadgetId),
                t = e != null && e.weapon ? c[e.weapon.appearance] : void 0,
                i = Number((a = t == null ? void 0 : t.weapon) == null ? void 0 : a.fromCharacterCenterRadius);
            return Number.isFinite(i) ? i : S
        }, this.onProjectileFired = () => {
            this.gadget instanceof P && this.fireAnimationName && this.gadget.view.anims.play(this.fireAnimationName, !0)
        }, this.onStateChange = e => {
            e === "aimAngle" && this.setTargetAngle(this.getSyncedAimAngle()), e === "active" && this.updateActiveAppearance()
        }, this.currentAngle = this.targetAngle = this.getInitialAimAngle(), this.layers.setDefaultLayer(m.DepthSortedCharactersAndDevices), this.createVisuals(), this.setupVisualEditing()
    }
}
export {
    Zt as
    default
};