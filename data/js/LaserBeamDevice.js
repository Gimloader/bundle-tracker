import {
    t as e
} from "./GetAssetPath.js";
import {
    n as t
} from "./isVersion.js";
import {
    n,
    r,
    t as i
} from "./InPhase.js";
import {
    t as a
} from "./Device.js";
import {
    r as o
} from "./GlobalLocalDepth.js";
import {
    v as s
} from "./App-42.js";
import {
    n as c,
    t as l
} from "./FetchOptionSchemaProperty.js";
import {
    t as u
} from "./OnHit.js";
var d = function(e) {
        return e.active = `ACTIVE`, e.inactive = `INACTIVE`, e.toActive = `TO_ACTIVE`, e.toInactive = `TO_INACTIVE`, e
    }({}),
    f = (e, t) => `LASER_BEAM_DEVICE_ORIGIN_ANIM_` + t + e,
    p = function(e) {
        return e.standard = `Standard`, e.plant = `Plant`, e
    }({}),
    m = {
        imageId: e(`devices/laser_beam/laser.png`),
        imageUrl: e(`devices/laser_beam/laser.png`)
    },
    h = {
        imageId: e(`devices/laser_beam/dot.png`),
        imageUrl: e(`devices/laser_beam/dot.png`)
    },
    g = p.standard,
    _ = p.plant,
    v = {
        baseScale: .36,
        spritesheetId: e(`devices/laser_beam/standard_base.png`),
        spritesheetUrl: e(`devices/laser_beam/standard_base.png`),
        frameWidth: 215,
        frameHeight: 130,
        animations: [{
            animName: f(d.inactive, g),
            frameRate: 1,
            animFrames: {
                start: 0,
                end: 0
            }
        }, {
            animName: f(d.toActive, g),
            repeat: 0,
            frameRate: 24,
            animFrames: {
                start: 0,
                end: 7
            }
        }, {
            animName: f(d.active, g),
            frameRate: 1,
            animFrames: {
                start: 7,
                end: 7
            }
        }, {
            animName: f(d.toInactive, g),
            repeat: 0,
            frameRate: 24,
            animFrames: {
                start: 7,
                end: 0
            }
        }]
    },
    y = {
        baseScale: .5,
        spritesheetId: e(`devices/laser_beam/plant_base.png`),
        spritesheetUrl: e(`devices/laser_beam/plant_base.png`),
        frameWidth: 127,
        frameHeight: 122,
        animations: [{
            animName: f(d.inactive, _),
            frameRate: 12,
            animFrames: {
                start: 0,
                end: 0
            }
        }, {
            animName: f(d.toActive, _),
            repeat: 0,
            frameRate: 24,
            animFrames: {
                start: 0,
                end: 4
            }
        }, {
            animName: f(d.active, _),
            frameRate: 12,
            animFrames: {
                start: 4,
                end: 4
            }
        }, {
            animName: f(d.toInactive, _),
            repeat: 0,
            frameRate: 24,
            animFrames: {
                start: 4,
                end: 0
            }
        }]
    },
    b = {
        [g]: v,
        [_]: y
    },
    x = 600,
    S = 55,
    C = 16,
    w = .35,
    T = class extends a {
        constructor(e) {
            super(e), this.activeFactor = 1, this.animationsReady = !1, this.dots = [], this.onUpdate = () => {
                n() && (this.laser.view.scaleY = (Math.random() * .5 + .5) * this.activeFactor, this.origin.view.scale = Math.random() * .03 * this.activeFactor + this.base.baseScale, this.endPoint.view.scale = Math.random() * .03 * this.activeFactor + this.base.baseScale, this.options.showPath && this.dots.forEach(e => {
                    e.view.alpha = (1 - this.activeFactor) * w
                }))
            }, this.onStateChange = e => {
                if (e === `active`) {
                    let e = +!!this.state.active;
                    if (this.tweens.add({
                            targets: this,
                            activeFactor: e,
                            duration: 150,
                            delay: e * 200
                        }), !this.animationsReady) return;
                    this.state.active && !this.prevState.active ? (this.origin.view.play(f(d.toActive, this.options.appearance)), this.endPoint.view.play(f(d.toActive, this.options.appearance))) : !this.state.active && this.prevState.active && (this.origin.view.play(f(d.toInactive, this.options.appearance)), this.endPoint.view.play(f(d.toInactive, this.options.appearance)))
                }
            }, this.onMessage = e => {
                e.key === `hit` && u(e.data)
            }, this.setupVisualEditing = () => {
                if (!r() || !t()) return;
                let e = l(this, `distance`);
                this.visualEditing.add.circle({
                    radius: this.options.distance / 2 + 40,
                    angle: this.options.angle - 90,
                    minRadius: e.min,
                    maxRadius: e.max,
                    onChange: e => {
                        c(e.x, e.y, {
                            distance: (e.radius - 40) * 2,
                            angle: e.angle + 90
                        })
                    }
                })
            }, this.base = b[this.options.appearance], this.setupVisualEditing();
            let a = Phaser.Math.DegToRad(this.options.angle),
                p = Math.cos(a) * this.options.distance,
                h = Math.sin(a) * this.options.distance;
            this.createPath(), this.origin = this.parts.add.animatedSprite({
                ...this.base,
                x: -p / 2,
                y: -h / 2
            }), this.endPoint = this.parts.add.animatedSprite({
                ...this.base,
                x: p / 2,
                y: h / 2,
                onReady: e => {
                    this.animationsReady = !0, this.state.active || r() ? (this.origin.view.play(f(d.active, this.options.appearance)), e.view.play(f(d.active, this.options.appearance))) : (this.origin.view.play(f(d.inactive, this.options.appearance)), e.view.play(f(d.inactive, this.options.appearance)))
                }
            }), this.laser = this.parts.add.sprite({
                ...m,
                layerId: o.DevicesAboveCharacters
            }), this.origin.view.rotation = a, this.endPoint.view.rotation = this.origin.view.rotation + Math.PI, this.origin.view.setScale(this.base.baseScale), this.endPoint.view.setScale(this.base.baseScale), this.laser.view.rotation = a, this.laser.view.blendMode = Phaser.BlendModes.ADD, this.laser.view.tint = s(this.options.laserColor), this.laser.view.scaleX = (this.options.distance - S) / x, this.laser.view.scaleY = .75, this.options.showOrigin || (this.origin.view.alpha = 0), this.options.showEndPoint || (this.endPoint.view.alpha = 0), i() && !this.state.active && (this.activeFactor = 0, this.laser.view.scaleY = 0)
        }
        createPath() {
            if (!this.options.showPath) return;
            let e = Phaser.Math.DegToRad(this.options.angle),
                t = Math.floor((this.options.distance - S - C * 1.5) / C) * C,
                n = Math.cos(e) * t,
                i = Math.sin(e) * t,
                a = -n / 2,
                c = -i / 2,
                l = n / 2,
                u = i / 2,
                d = Math.floor(t / C),
                f = (l - a) / d,
                p = (u - c) / d,
                m = r() ? w : (1 - this.activeFactor) * w,
                g = r() ? Phaser.BlendModes.NORMAL : Phaser.BlendModes.ADD;
            for (let e = 0; e <= d; e++) {
                let t = a + e * f,
                    n = c + e * p;
                this.parts.add.sprite({
                    ...h,
                    depthChange: Math.min(c, u) - n,
                    ignoreInput: !0,
                    layerId: o.DevicesUnderCharacters,
                    x: t,
                    y: n,
                    onReady: e => {
                        e.view.tint = s(this.options.laserColor), e.view.alpha = m, e.view.blendMode = g, e.view.setScale(.2), this.dots.push(e)
                    }
                })
            }
        }
    };
export {
    T as
    default
};