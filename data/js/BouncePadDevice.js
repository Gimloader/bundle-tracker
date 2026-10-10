import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./lodash.js";
import {
    t as n
} from "./playSound.js";
import {
    D as r,
    o as i,
    s as a
} from "./FixPhaserBootProcess.js";
import {
    t as o
} from "./isVersion.js";
import {
    r as s,
    t as c
} from "./InPhase.js";
import {
    t as l
} from "./FetchMyId.js";
import {
    t as u
} from "./Device.js";
import {
    r as d
} from "./GlobalLocalDepth.js";
import {
    E as f,
    _ as p,
    k as m,
    v as h,
    x as g
} from "./App-42.js";
import {
    n as _,
    t as v
} from "./FetchOptionSchemaProperty.js";
var y = {
        atlasUrl: e(`devices/bounce_pad/spine/skeleton.atlas`),
        jsonUrl: e(`devices/bounce_pad/spine/skeleton.json`)
    },
    b = {
        bounceAngleTolerance: 45,
        boundingBox: {
            width: 130,
            height: 60
        },
        collisions: {
            width: 110,
            height: 25
        },
        spine: {
            baseScale: .2
        },
        downwardAngles: {
            min: 0,
            max: 180
        }
    },
    x = t(),
    S = function(e) {
        return e.use = `use`, e
    }({}),
    C = class extends u {
        constructor(t) {
            super(t), this.use = () => {
                this.cull.isInsideView && n({
                    path: e(`devices/bounce_pad/sound/bounce${(0,x.random)(1,2)}.mp3`),
                    volume: a({
                        volume: p(this.x, this.y) * .7,
                        type: i.soundEffect
                    })
                }), this.playAnimation(`rebound`)
            }, this.playAnimation = e => {
                if (!this.spine.view) return;
                let t = e === `idle`;
                this.spine.view.animationState.setAnimation(0, e, t)
            }, this.onMessage = e => {
                e.key === S.use && e.data.characterId !== l() && this.use()
            }, this.setupView = () => {
                let e = b.boundingBox.width * this.options.scale,
                    t = b.boundingBox.height * this.options.scale,
                    n = this.options.angle * Math.PI / 180,
                    r = Math.abs(Math.cos(n)),
                    i = Math.abs(Math.sin(n)),
                    a = e * r + t * i,
                    o = e * i + t * r;
                this.spine = this.parts.add.spine({
                    ...y,
                    spineViewId: this.id,
                    defaultAnimation: `idle`,
                    boundingBox: {
                        left: -a / 2,
                        right: a / 2,
                        top: -o / 2,
                        bottom: o / 2
                    },
                    onReady: e => {
                        e.view.setScale(b.spine.baseScale * this.options.scale), e.view.angle = this.options.angle;
                        let t = h(this.options.color),
                            n = Phaser.Display.Color.ColorToRGBA(t);
                        e.view.skeleton.slots[1].color.r = n.r / 255, e.view.skeleton.slots[1].color.g = n.g / 255, e.view.skeleton.slots[1].color.b = n.b / 255
                    }
                })
            }, this.bounce = (e, t) => {
                let n = r(e);
                if (!n) return;
                this.use();
                let i = Phaser.Math.DegToRad(t),
                    a = this.options.force,
                    o = Math.cos(i - Math.PI / 2) * a,
                    s = Math.sin(i - Math.PI / 2) * a,
                    c = n.physics.state.lastUsedVelocityToCalculateMovement.x,
                    l = o;
                Math.sign(c) === Math.sign(o) ? Math.abs(c) > Math.abs(o) && (l = c) : l = o + c, m({
                    character: n
                }), g({
                    character: n,
                    x: l,
                    y: s,
                    cancelInertiaOnNextGrounded: !0,
                    limitControlFactor: !0
                })
            }, this.onStop = (e, t) => {
                if (this.skipDownwardAngle(t)) return;
                let n = r(e);
                n && (n.physics.state.jump.jumpsLeft = Math.max(1, f({
                    characterId: e
                }).maxJumps), n.physics.state.jump.jumpCounter = 1)
            }, this.skipDownwardAngle = e => {
                if (!this.options.disableDownward) return !1;
                let t = Phaser.Math.Wrap(e, -180, 180);
                return t > b.downwardAngles.min && t < b.downwardAngles.max
            }, this.setupCollider = () => {
                this.colliders.add.capsule({
                    x: 0,
                    y: 0,
                    r1: b.collisions.width * this.options.scale,
                    r2: b.collisions.height * this.options.scale,
                    angle: this.options.angle,
                    onFresh: (e, t) => {
                        this.handleCollision(e, t)
                    },
                    onUpdate: (e, t) => {
                        this.handleCollision(e, t)
                    },
                    onStop: e => {
                        this.onStop(e, this.options.angle)
                    }
                })
            }, this.handleCollision = (e, t) => {
                if (!t || !(t != null && t.normal1)) return;
                let n = Phaser.Math.Angle.Between(0, 0, t.normal1.x, t.normal1.y),
                    r = Phaser.Math.RadToDeg(n);
                if (this.skipDownwardAngle(r)) return;
                let i = Phaser.Math.Wrap(r - this.options.angle + 90, -180, 180),
                    a = b.bounceAngleTolerance;
                Math.abs(i) <= a ? this.bounce(e, this.options.angle) : Math.abs(Math.abs(i) - 180) <= a && this.bounce(e, this.options.angle + 180)
            }, this.setupInViewCallbacks = () => {
                s() || this.cull.setOnEnterViewCallback(() => {
                    var e;
                    (e = this.spine) != null && e.view && (this.spine.setMixDuration(0), this.playAnimation((this.state.active, `idle`)), this.spine.view.updatePose(0), this.spine.resetMixDuration())
                })
            }, this.setupVisualEditing = () => {
                if (c() || o()) return;
                let e = v(this, `scale`),
                    t = b.boundingBox.width,
                    n = b.boundingBox.height;
                this.visualEditing.add.box({
                    keepRatio: !0,
                    rotable: !0,
                    angle: this.options.angle,
                    width: t * this.options.scale,
                    height: n * this.options.scale,
                    minWidth: t * e.min,
                    maxWidth: t * e.max,
                    minHeight: n * e.min,
                    maxHeight: n * e.max,
                    onChange: e => {
                        _(e.x, e.y, {
                            scale: e.width / t,
                            angle: e.angle
                        })
                    }
                })
            }, this.layers.setDefaultLayer(d.DevicesUnderCharacters), this.setupView(), this.setupCollider(), this.setupVisualEditing(), this.setupInViewCallbacks(), this.cull.setMargin(50)
        }
    };
export {
    C as
    default
};