import {
    aK as d,
    aL as g,
    G as b,
    L as f,
    al as v
} from "./App-41.js";
import {
    d as y,
    e as c,
    P as T,
    a as x,
    I as l,
    i as S
} from "./FixSpinePlugin.js";
import {
    G as m
} from "./GetAssetPath.js";
import {
    F as P,
    R as M
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
const u = 1e3 / d.tickRate;
class X {
    constructor(a) {
        this.targetX = 0, this.targetY = 0, this.targetIsDirty = !1, this.pointMap = [], this.currentPoint = null, this.currentTime = 0, this.moveToTargetPosition = () => {
            const t = this.pointMap[0];
            if (!t) return;
            const e = this.currentTime;
            if (!(e < t.startTime)) {
                if (e > t.endTime) {
                    this.pointMap.shift(), this.ball.container.view.x = t.endX, this.ball.container.view.y = t.endY, this.moveToTargetPosition();
                    return
                }
                if (t.startTime <= e) {
                    this.currentPoint = t;
                    const s = Phaser.Math.Percent(e, t.startTime, t.endTime),
                        r = Phaser.Math.Linear(t.startX, t.endX, s),
                        p = Phaser.Math.Linear(t.startY, t.endY, s);
                    this.ball.container.view.x = r, this.ball.container.view.y = p
                }
            }
        }, this.getCurrentEndInfo = () => {
            if (!this.pointMap.length) {
                const e = this.currentTime;
                return {
                    x: this.ball.container.view.x,
                    y: this.ball.container.view.y,
                    start: e,
                    end: e + u
                }
            }
            const t = this.pointMap[this.pointMap.length - 1];
            return {
                x: t.endX,
                y: t.endY,
                start: t.endTime,
                end: t.endTime + u
            }
        }, this.update = t => {
            if (this.currentTime += t, this.targetIsDirty) {
                this.targetIsDirty = !1;
                const e = this.getCurrentEndInfo();
                this.pointMap.push({
                    startX: e.x,
                    startY: e.y,
                    endX: this.targetX,
                    endY: this.targetY,
                    startTime: e.start,
                    endTime: e.end
                })
            }
            this.moveToTargetPosition()
        }, this.onReset = () => {
            this.pointMap = [], this.ball.container.view.x = this.ball.x, this.ball.container.view.y = this.ball.y, this.targetX = this.ball.x, this.targetY = this.ball.y
        }, this.setTargetX = t => {
            this.targetX !== t && (this.targetX = t, this.targetIsDirty = !0)
        }, this.setTargetY = t => {
            this.targetY !== t && (this.targetY = t, this.targetIsDirty = !0)
        }, this.ball = a, this.targetX = a.x, this.targetY = a.y
    }
}
const n = {
        animation: {
            timeScale: 1,
            maxHeight: 35,
            hitScale: .9
        }
    },
    o = 175,
    h = 100;
class Y {
    constructor(a) {
        this.ballHeight = 0, this.squeezeScale = 1, this.cumulTime = 0, this.hitTimeHeight = 0, this.hitTimeScale = 0, this.updateScale = () => {
            if (this.hitTimeScale === 0) return;
            const t = this.cumulTime - this.hitTimeScale;
            t < h ? this.squeezeScale = 1 - (1 - n.animation.hitScale) * Math.sin(t * Math.PI / 2 / h) : this.squeezeScale = Phaser.Math.Easing.Elastic.Out(Math.min(1, (t - h) / 2500)) * (1 - n.animation.hitScale) + n.animation.hitScale, this.ball.container.view.scaleX = this.squeezeScale
        }, this.updateHeight = () => {
            if (this.hitTimeHeight === 0) return;
            const t = this.cumulTime - this.hitTimeHeight;
            t < o ? this.ballHeight = n.animation.maxHeight * Math.sin(t * Math.PI / 2 / o) : this.ballHeight = n.animation.maxHeight - Phaser.Math.Easing.Bounce.Out(Math.min(1, (t - o) / 1e3)) * n.animation.maxHeight, this.ball.ball.view.y = -this.ballHeight, this.ball.frame.view.y = -this.ballHeight
        }, this.update = t => {
            this.cumulTime += t * n.animation.timeScale, this.updateScale(), this.updateHeight()
        }, this.hit = t => {
            this.hitTimeHeight = this.cumulTime - 2 * o * Math.asin(this.ballHeight / n.animation.maxHeight) / Math.PI, this.hitTimeScale = this.cumulTime - 2 * h * Math.asin((1 - this.squeezeScale) / (1 - n.animation.hitScale)) / Math.PI, this.ball.container.view.rotation = t, this.ball.container2.view.rotation = -t
        }, this.ball = a
    }
}
const D = 75e-5;
class I {
    constructor(a) {
        this.prevX = 0, this.prevY = 0, this.cumulX = 0, this.cumulY = 0, this.update = () => {
            let t = this.prevX - this.ball.container.view.x,
                e = this.prevY - this.ball.container.view.y;
            const s = this.ball.ball.view.rotation - t * 2 / this.ball.options.radius,
                r = D * (520 / this.ball.options.radius);
            this.cumulX += e * r * Math.sin(s), this.cumulY += e * r * Math.cos(s), this.ball.ball.view.setData("uAlpha", this.ball.container2.view.alpha), this.ball.ball.view.setData("uShiftX", this.cumulX), this.ball.ball.view.setData("uShiftY", this.cumulY), this.ball.ball.view.rotation = s, this.prevX = this.ball.container.view.x, this.prevY = this.ball.container.view.y
        }, this.ball = a, this.prevX = a.x, this.prevY = a.y
    }
}
class H {
    constructor(a) {
        this.burst = (t, e, s) => {
            this.emitter && (this.emitter.setPosition(t, e), this.emitter.setDepth(s), this.emitter.explode(250))
        }, this.destroy = () => {
            this.emitter && this.emitter.destroy(!0)
        }, this.load = () => {
            if (!y() && !c()) return;
            const t = m("devices/crafting_table/particle.png");
            g({
                key: t,
                url: t,
                onLoad: () => {
                    this.device.isDestroyed || (this.emitter = this.device.scene.add.particles(this.device.x, this.device.y, t, {
                        speed: {
                            min: -400,
                            max: 400
                        },
                        scale: {
                            start: .5,
                            end: 0
                        },
                        blendMode: T.BlendModes.SCREEN,
                        emitting: !1,
                        lifespan: 1e3
                    }).setDepth(this.device.getMaxDepth() + 1))
                }
            })
        }, this.device = a, this.load()
    }
}
const E = {
        frame: {
            imageId: m("devices/ball/ball_circle.png"),
            imageUrl: m("devices/ball/ball_circle.png")
        }
    },
    C = .75,
    w = i => {
        i.container.view.setDepth(b(i.container.view.y + i.options.radius * C, f.DepthSortedCharactersAndDevices))
    },
    A = i => {
        i.container = i.parts.add.container({}), i.container2 = i.parts.add.container({
            parent: i.container.view
        }), i.container.view.x = i.x, i.container.view.y = i.y;
        const a = m(`devices/ball/${i.options.appearance}.png`);
        i.ball = i.parts.add.sprite({
            imageId: a,
            imageUrl: a,
            parent: i.container2.view,
            onReady: t => {
                t.view.x = 0, t.view.y = 0;
                const s = x().renderer.pipelines.get("Ball");
                t.view.setData("uAlpha", i.isPreview ? .6 : 1), t.view.setData("uShiftX", 0), t.view.setData("uShiftY", 0), t.view.setPipeline(s)
            }
        }), i.frame = i.parts.add.sprite({
            ...E.frame,
            parent: i.container2.view,
            onReady: t => {
                t.view.x = 0, t.view.y = 0
            }
        }), i.ball.view.setScale(i.options.radius / 1700), i.frame.view.setScale(i.options.radius / 250), i.cull.ignoreCulling(), w(i), i.shadow = i.shadows.add({
            r1: 85,
            r2: 30,
            x: 0,
            y: 75
        })
    },
    R = 1,
    _ = .4,
    B = .2,
    O = i => {
        if (!i.shadow) return;
        i.shadow.x = i.container.view.x, i.shadow.y = i.container.view.y + i.options.radius * .9;
        const a = 1 - B * i.animations.ballHeight / n.animation.maxHeight;
        i.shadow.r1 = R * a * i.container2.view.scaleX * i.options.radius, i.shadow.r2 = _ * a * i.container2.view.scaleY * i.options.radius, i.shadow.alphaMultip = i.container2.view.alpha * i.container.view.alpha
    },
    L = i => {
        l() && !c() || (i.projectiles.setDynamic(!0), i.projectiles.collidesWithProjectile = a => {
            const {
                x: t,
                y: e,
                radius: s
            } = a;
            if (i.container2.view.alpha < .5 || !i.state.active) return !1;
            const r = Phaser.Math.Distance.Between(t, e, i.container.view.x, i.container.view.y),
                p = i.options.radius + s;
            return r < p
        }, i.projectiles.onClientPredictedHit = a => {
            const {
                x: t,
                y: e
            } = a, s = Phaser.Math.Angle.Between(t, e, i.container.view.x, i.container.view.y);
            i.animations.hit(s)
        })
    };
class ei extends v {
    constructor(a) {
        if (super(a), this.onUpdate = t => {
                this.movement.update(t), this.animations.update(t), this.rotation.update(), O(this), w(this)
            }, this.onStateChange = t => {
                t === "x" && this.movement.setTargetX(this.state.x), t === "y" && this.movement.setTargetY(this.state.y), t === "active" && this.updateActive()
            }, this.updateActive = () => {
                if (l() && c()) {
                    this.container.view.alpha = 1;
                    return
                }
                if (l()) {
                    this.container.view.alpha = this.options.activeOnStart ? 1 : .5;
                    return
                }
                this.container.view.alpha = this.state.active ? 1 : 0
            }, this.hide = () => {
                this.tweens.add({
                    targets: this.container2.view,
                    scaleX: 0,
                    scaleY: 0,
                    ease: Phaser.Math.Easing.Back.In,
                    duration: 300
                }), this.tweens.add({
                    targets: this.container2.view,
                    alpha: 0,
                    duration: 100,
                    delay: 175
                })
            }, this.show = () => {
                this.tweens.add({
                    targets: this.container2.view,
                    scaleX: 1,
                    scaleY: 1,
                    ease: Phaser.Math.Easing.Back.Out,
                    duration: 350
                }), this.tweens.add({
                    targets: this.container2.view,
                    alpha: 1,
                    duration: 100
                })
            }, this.fakeProjectileExplosionCallback = t => {
                const {
                    x: e,
                    y: s
                } = t, r = Phaser.Math.Angle.Between(e, s, this.container.view.x, this.container.view.y);
                this.animations.hit(r)
            }, this.onMessage = t => {
                t.key === "goal" && (this.hide(), setTimeout(() => {
                    this.isDestroyed || this.particles.burst(this.container.view.x, this.container.view.y, this.container.view.depth)
                }, 250)), t.key === "reset" && (this.movement.onReset(), this.show())
            }, A(this), L(this), this.movement = new X(this), this.animations = new Y(this), this.rotation = new I(this), this.particles = new H(this), this.updateActive(), l() && S()) {
            const t = P(this, "radius");
            this.visualEditing.add.circle({
                angle: 0,
                rotable: !1,
                radius: this.options.radius,
                minRadius: t.min,
                maxRadius: t.max,
                onChange: e => {
                    M(e.x, e.y, {
                        radius: e.radius
                    })
                }
            })
        }
    }
}
export {
    ei as BallDevice, ei as
    default
};