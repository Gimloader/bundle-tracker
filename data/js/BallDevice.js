import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./GetAssetPath.js";
import {
    t as n
} from "./phaser.js";
import {
    C as r
} from "./FixPhaserBootProcess.js";
import {
    t as i
} from "./FetchScene.js";
import {
    n as a,
    t as o
} from "./isVersion.js";
import {
    r as s,
    t as c
} from "./InPhase.js";
import {
    s as l,
    t as u
} from "./Device.js";
import {
    r as d,
    t as f
} from "./GlobalLocalDepth.js";
import {
    n as p,
    t as m
} from "./FetchOptionSchemaProperty.js";
var h = 1e3 / r.tickRate,
    g = class {
        constructor(e) {
            this.targetX = 0, this.targetY = 0, this.targetIsDirty = !1, this.pointMap = [], this.currentPoint = null, this.currentTime = 0, this.moveToTargetPosition = () => {
                let e = this.pointMap[0];
                if (!e) return;
                let t = this.currentTime;
                if (!(t < e.startTime)) {
                    if (t > e.endTime) this.pointMap.shift(), this.ball.container.view.x = e.endX, this.ball.container.view.y = e.endY, this.moveToTargetPosition();
                    else if (e.startTime <= t) {
                        this.currentPoint = e;
                        let n = Phaser.Math.Percent(t, e.startTime, e.endTime),
                            r = Phaser.Math.Linear(e.startX, e.endX, n),
                            i = Phaser.Math.Linear(e.startY, e.endY, n);
                        this.ball.container.view.x = r, this.ball.container.view.y = i
                    }
                }
            }, this.getCurrentEndInfo = () => {
                if (!this.pointMap.length) {
                    let e = this.currentTime;
                    return {
                        x: this.ball.container.view.x,
                        y: this.ball.container.view.y,
                        start: e,
                        end: e + h
                    }
                }
                let e = this.pointMap[this.pointMap.length - 1];
                return {
                    x: e.endX,
                    y: e.endY,
                    start: e.endTime,
                    end: e.endTime + h
                }
            }, this.update = e => {
                if (this.currentTime += e, this.targetIsDirty) {
                    this.targetIsDirty = !1;
                    let e = this.getCurrentEndInfo();
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
            }, this.setTargetX = e => {
                this.targetX !== e && (this.targetX = e, this.targetIsDirty = !0)
            }, this.setTargetY = e => {
                this.targetY !== e && (this.targetY = e, this.targetIsDirty = !0)
            }, this.ball = e, this.targetX = e.x, this.targetY = e.y
        }
    },
    _ = {
        animation: {
            timeScale: 1,
            maxHeight: 35,
            hitScale: .9,
            animateShadow: !0
        }
    },
    v = 175,
    y = 100,
    b = class {
        constructor(e) {
            this.ballHeight = 0, this.squeezeScale = 1, this.cumulTime = 0, this.hitTimeHeight = 0, this.hitTimeScale = 0, this.updateScale = () => {
                if (this.hitTimeScale === 0) return;
                let e = this.cumulTime - this.hitTimeScale;
                this.squeezeScale = e < y ? 1 - (1 - _.animation.hitScale) * Math.sin(e * Math.PI / 2 / y) : Phaser.Math.Easing.Elastic.Out(Math.min(1, (e - y) / 2500)) * (1 - _.animation.hitScale) + _.animation.hitScale, this.ball.container.view.scaleX = this.squeezeScale
            }, this.updateHeight = () => {
                if (this.hitTimeHeight === 0) return;
                let e = this.cumulTime - this.hitTimeHeight;
                this.ballHeight = e < v ? _.animation.maxHeight * Math.sin(e * Math.PI / 2 / v) : _.animation.maxHeight - Phaser.Math.Easing.Bounce.Out(Math.min(1, (e - v) / 1e3)) * _.animation.maxHeight, this.ball.ball.view.y = -this.ballHeight, this.ball.frame.view.y = -this.ballHeight
            }, this.update = e => {
                this.cumulTime += e * _.animation.timeScale, this.updateScale(), this.updateHeight()
            }, this.hit = e => {
                this.hitTimeHeight = this.cumulTime - 350 * Math.asin(this.ballHeight / _.animation.maxHeight) / Math.PI, this.hitTimeScale = this.cumulTime - 200 * Math.asin((1 - this.squeezeScale) / (1 - _.animation.hitScale)) / Math.PI, this.ball.container.view.rotation = e, this.ball.container2.view.rotation = -e
            }, this.ball = e
        }
    },
    x = 75e-5,
    S = class {
        constructor(e) {
            this.prevX = 0, this.prevY = 0, this.cumulX = 0, this.cumulY = 0, this.update = () => {
                let e = this.prevX - this.ball.container.view.x,
                    t = this.prevY - this.ball.container.view.y,
                    n = this.ball.ball.view.rotation - e * 2 / this.ball.options.radius,
                    r = x * (520 / this.ball.options.radius);
                this.cumulX += t * r * Math.sin(n), this.cumulY += t * r * Math.cos(n), this.ball.ball.view.setData(`uAlpha`, this.ball.container2.view.alpha), this.ball.ball.view.setData(`uShiftX`, this.cumulX), this.ball.ball.view.setData(`uShiftY`, this.cumulY), this.ball.ball.view.rotation = n, this.prevX = this.ball.container.view.x, this.prevY = this.ball.container.view.y
            }, this.ball = e, this.prevX = e.x, this.prevY = e.y
        }
    },
    C = e(n()),
    w = class {
        constructor(e) {
            this.burst = (e, t, n) => {
                this.emitter && (this.emitter.setPosition(e, t), this.emitter.setDepth(n), this.emitter.explode(250))
            }, this.destroy = () => {
                this.emitter && this.emitter.destroy(!0)
            }, this.load = () => {
                if (!c() && !o()) return;
                let e = t(`devices/crafting_table/particle.png`);
                l({
                    key: e,
                    url: e,
                    onLoad: () => {
                        this.device.isDestroyed || (this.emitter = this.device.scene.add.particles(this.device.x, this.device.y, e, {
                            speed: {
                                min: -400,
                                max: 400
                            },
                            scale: {
                                start: .5,
                                end: 0
                            },
                            blendMode: C.default.BlendModes.SCREEN,
                            emitting: !1,
                            lifespan: 1e3
                        }).setDepth(this.device.getMaxDepth() + 1))
                    }
                })
            }, this.device = e, this.load()
        }
    },
    T = {
        frame: {
            imageId: t(`devices/ball/ball_circle.png`),
            imageUrl: t(`devices/ball/ball_circle.png`)
        }
    },
    E = .75,
    D = e => {
        e.container.view.setDepth(f(e.container.view.y + e.options.radius * E, d.DepthSortedCharactersAndDevices))
    },
    O = e => {
        e.container = e.parts.add.container({}), e.container2 = e.parts.add.container({
            parent: e.container.view
        }), e.container.view.x = e.x, e.container.view.y = e.y;
        let n = t(`devices/ball/${e.options.appearance}.png`);
        e.ball = e.parts.add.sprite({
            imageId: n,
            imageUrl: n,
            parent: e.container2.view,
            onReady: t => {
                t.view.x = 0, t.view.y = 0;
                let n = i().renderer.pipelines.get(`Ball`);
                t.view.setData(`uAlpha`, e.isPreview ? .6 : 1), t.view.setData(`uShiftX`, 0), t.view.setData(`uShiftY`, 0), t.view.setPipeline(n)
            }
        }), e.frame = e.parts.add.sprite({
            ...T.frame,
            parent: e.container2.view,
            onReady: e => {
                e.view.x = 0, e.view.y = 0
            }
        }), e.ball.view.setScale(e.options.radius / 1700), e.frame.view.setScale(e.options.radius / 250), e.cull.ignoreCulling(), D(e), e.shadow = e.shadows.add({
            r1: 85,
            r2: 30,
            x: 0,
            y: 75
        })
    },
    k = 1,
    A = .4,
    j = .2,
    M = e => {
        if (!e.shadow || (e.shadow.x = e.container.view.x, e.shadow.y = e.container.view.y + e.options.radius * .9, _.animation.animateShadow === !1)) return;
        let t = 1 - j * e.animations.ballHeight / _.animation.maxHeight;
        e.shadow.r1 = k * t * e.container2.view.scaleX * e.options.radius, e.shadow.r2 = A * t * e.container2.view.scaleY * e.options.radius, e.shadow.alphaMultip = e.container2.view.alpha * e.container.view.alpha
    },
    N = e => {
        (!s() || o()) && (e.projectiles.setDynamic(!0), e.projectiles.collidesWithProjectile = t => {
            let {
                x: n,
                y: r,
                radius: i
            } = t;
            return e.container2.view.alpha < .5 || !e.state.active ? !1 : Phaser.Math.Distance.Between(n, r, e.container.view.x, e.container.view.y) < e.options.radius + i
        }, e.projectiles.onClientPredictedHit = t => {
            let {
                x: n,
                y: r
            } = t, i = Phaser.Math.Angle.Between(n, r, e.container.view.x, e.container.view.y);
            e.animations.hit(i)
        })
    },
    P = class extends u {
        constructor(e) {
            if (super(e), this.onUpdate = e => {
                    this.movement.update(e), this.animations.update(e), this.rotation.update(), M(this), D(this)
                }, this.onStateChange = e => {
                    e === `x` && this.movement.setTargetX(this.state.x), e === `y` && this.movement.setTargetY(this.state.y), e === `active` && this.updateActive()
                }, this.updateActive = () => {
                    s() && o() ? this.container.view.alpha = 1 : s() ? this.container.view.alpha = this.options.activeOnStart ? 1 : .5 : this.container.view.alpha = +!!this.state.active
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
                }, this.fakeProjectileExplosionCallback = e => {
                    let {
                        x: t,
                        y: n
                    } = e, r = Phaser.Math.Angle.Between(t, n, this.container.view.x, this.container.view.y);
                    this.animations.hit(r)
                }, this.onMessage = e => {
                    e.key === `goal` && (this.hide(), setTimeout(() => {
                        this.isDestroyed || this.particles.burst(this.container.view.x, this.container.view.y, this.container.view.depth)
                    }, 250)), e.key === `reset` && (this.movement.onReset(), this.show())
                }, O(this), N(this), this.movement = new g(this), this.animations = new b(this), this.rotation = new S(this), this.particles = new w(this), this.updateActive(), s() && a()) {
                let e = m(this, `radius`);
                this.visualEditing.add.circle({
                    angle: 0,
                    rotable: !1,
                    radius: this.options.radius,
                    minRadius: e.min,
                    maxRadius: e.max,
                    onChange: e => {
                        p(e.x, e.y, {
                            radius: e.radius
                        })
                    }
                })
            }
        }
    };
export {
    P as BallDevice, P as
    default
};