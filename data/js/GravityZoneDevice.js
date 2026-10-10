import {
    t as e
} from "./GetAssetPath.js";
import {
    D as t
} from "./FixPhaserBootProcess.js";
import {
    n,
    t as r
} from "./isVersion.js";
import {
    r as i,
    t as a
} from "./InPhase.js";
import {
    t as o
} from "./FetchMyId.js";
import {
    S as s,
    i as c,
    t as l
} from "./Device.js";
import {
    n as u,
    t as d
} from "./GetGravityMultiplier.js";
import {
    D as f,
    Et as p,
    v as m
} from "./App-42.js";
import {
    t as h
} from "./ZoneConstants.js";
import {
    t as g
} from "./ZonedDeviceDisplay.js";
import {
    n as _,
    t as v
} from "./FetchOptionSchemaProperty.js";
var y = {
        imageId: e(`devices/zone/base.png`),
        imageUrl: e(`devices/zone/base.png`)
    },
    b = e => {
        let {
            character: t
        } = e, n = t.physics.state.jump.lastJumpGravityMultiplier ?? 1, r = d({
            character: t
        });
        if (n === r) return;
        let i = t.physics.state.forces.find(e => e.id === u.jump);
        if (!i || !i.ticks || i.ticks.length === 0) return;
        let a = i.ticks,
            o = a.findIndex(e => e.y === 0),
            s = o === -1 ? a : a.slice(0, o),
            c = o === -1 ? 0 : a.length - o,
            l = s.reduce((e, t) => e + -Math.min(t.y, 0), 0);
        if (l <= 1e-6) {
            i.ticks = Array.from({
                length: c
            }, () => ({
                x: 0,
                y: 0
            }));
            return
        }
        let p = n / r,
            m = s.length,
            h = Math.round(m * p);
        h < 1 && (h = 1);
        let g = l * p;
        i.ticks = [...f({
            count: g,
            numTicks: h,
            ease: Phaser.Math.Easing.Quadratic.Out
        }).map(e => ({
            x: 0,
            y: -e
        })), ...Array.from({
            length: c
        }, () => ({
            x: 0,
            y: 0
        }))]
    },
    x = e => {
        let {
            character: t
        } = e;
        t.physics.state.gravityZones.find(t => t.deviceId === e.deviceId) || (t.physics.state.gravityZones.push({
            deviceId: e.deviceId,
            gravityMultiplier: e.gravityMultiplier
        }), b({
            character: t
        }))
    },
    S = e => {
        let {
            character: t
        } = e;
        t.physics.state.gravityZones.find(t => t.deviceId === e.deviceId) && (t.physics.state.gravityZones = t.physics.state.gravityZones.filter(t => t.deviceId !== e.deviceId), b({
            character: t
        }))
    },
    C = class extends l {
        constructor(e) {
            if (super(e), this.onEnter = () => {
                    let e = t(o());
                    e && x({
                        character: e,
                        deviceId: this.id,
                        gravityMultiplier: this.options.gravityMultiplier
                    })
                }, this.onLeave = () => {
                    let e = t(o());
                    e && S({
                        character: e,
                        deviceId: this.id,
                        gravityMultiplier: this.options.gravityMultiplier
                    })
                }, this.onDestroy = () => {
                    var e;
                    let t = o(),
                        n = s().bodies.find(this.sensor.bodyId);
                    n != null && (e = n.sensor) != null && (e = e.charactersInSensor) != null && e.has(t) && this.onLeave()
                }, this.onReconcile = () => {
                    let e = o(),
                        n = t(e);
                    if (!n) return;
                    let r = s().bodies.find(this.sensor.bodyId);
                    n.physics.state.gravityZones.find(e => e.deviceId === this.id) === void 0 ? r.sensor.charactersInSensor.delete(e) : r.sensor.charactersInSensor.add(e)
                }, this.setupVisualEditing = () => {
                    if (!i() || !n()) return;
                    let e = v(this, `width`),
                        t = v(this, `height`);
                    this.visualEditing.add.box({
                        width: this.options.width,
                        height: this.options.height,
                        angle: this.options.rotation,
                        minWidth: e.min,
                        maxWidth: e.max,
                        minHeight: t.min,
                        maxHeight: t.max,
                        keepRatio: !1,
                        onChange: e => {
                            _(e.x, e.y, {
                                rotation: e.angle,
                                width: e.width,
                                height: e.height
                            })
                        }
                    })
                }, i() && n()) {
                let e = this.parts.add.sprite({
                    ...y,
                    depthChange: p(2)
                });
                e.view.angle = this.options.rotation, e.view.setScale(.5)
            }
            if (a() || r() ? this.options.visibleInGame : g.shouldShow(this)) {
                this.setupVisualEditing();
                let e = m(this.options.color);
                this.zone = this.parts.add.rect({
                    color: e,
                    alpha: this.getAlpha(),
                    width: Math.abs(this.options.width),
                    height: Math.abs(this.options.height),
                    angle: this.options.rotation,
                    borderColor: e,
                    borderAlpha: +!a(),
                    borderWidth: 4,
                    depthChange: p(1),
                    ignoreInput: !0
                })
            }
            this.sensor = this.sensors.add.rect({
                x: 0,
                y: 0,
                w: this.options.width - 110,
                h: this.options.height - 110,
                angle: this.options.rotation,
                type: c.around,
                onFresh: () => {
                    this.onEnter()
                },
                onStop: () => {
                    this.onLeave()
                }
            })
        }
        getAlpha() {
            return a() || n() && g.shouldShowInnerZone(this) ? h.alpha : 0
        }
    };
export {
    C as GravityZoneDevice, C as
    default
};