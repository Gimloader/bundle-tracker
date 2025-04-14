function t(t, e, i, a) {
    Object.defineProperty(t, e, {
        get: i,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}

function e(t) {
    return t && t.__esModule ? t.default : t
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("fGY9J", (function(e, a) {
    var s;
    s = e.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), t(e.exports, "BallDevice", (function() {
        return b
    })), t(e.exports, "default", (function() {
        return y
    }));
    var n = i("divCp"),
        r = i("bNmF9"),
        l = i("arZim"),
        o = i("iCGiG"),
        h = i("cXAW2"),
        c = i("kyCFF"),
        u = i("66eqP"),
        d = i("e8wfw"),
        p = i("6Tpu2"),
        v = i("4uojN"),
        f = i("cK78N"),
        m = i("cnijD"),
        w = i("27Ca6"),
        g = i("bPbov");
    class b extends r.default {
        constructor(t) {
            if (super(t), (0, n.default)(this, "onUpdate", (t => {
                    this.movement.update(t), this.animations.update(t), this.rotation.update(), (0, w.UpdateShadow)(this), (0, d.UpdateDepth)(this)
                })), (0, n.default)(this, "onStateChange", (t => {
                    "x" === t && this.movement.setTargetX(this.state.x), "y" === t && this.movement.setTargetY(this.state.y), "active" === t && this.updateActive()
                })), (0, n.default)(this, "updateActive", (() => {
                    (0, p.InPreGamePhase)() && (0, v.isPublishedVersion)() ? this.container.view.alpha = 1: (0, p.InPreGamePhase)() ? this.container.view.alpha = this.options.activeOnStart ? 1 : .5 : this.container.view.alpha = this.state.active ? 1 : 0
                })), (0, n.default)(this, "hide", (() => {
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
                })), (0, n.default)(this, "show", (() => {
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
                })), (0, n.default)(this, "fakeProjectileExplosionCallback", (t => {
                    const {
                        x: e,
                        y: i
                    } = t, a = Phaser.Math.Angle.Between(e, i, this.container.view.x, this.container.view.y);
                    this.animations.hit(a)
                })), (0, n.default)(this, "onMessage", (t => {
                    "goal" === t.key && (this.hide(), setTimeout((() => {
                        this.isDestroyed || this.particles.burst(this.container.view.x, this.container.view.y, this.container.view.depth)
                    }), 250)), "reset" === t.key && (this.movement.onReset(), this.show())
                })), (0, u.CreateVisuals)(this), (0, g.SetupProjectiles)(this), this.movement = new(0, l.BallMovement)(this), this.animations = new(0, o.BallAnimations)(this), this.rotation = new(0, h.BallRotation)(this), this.particles = new(0, c.BallDeviceParticles)(this), this.updateActive(), (0, p.InPreGamePhase)() && (0, v.isSavedVersion)()) {
                const t = (0, f.FetchOptionSchemaProperty)(this, "radius");
                this.visualEditing.add.circle({
                    angle: 0,
                    rotable: !1,
                    radius: this.options.radius,
                    minRadius: t.min,
                    maxRadius: t.max,
                    onChange: t => {
                        (0, m.ReplaceVisualEditingPreview)(t.x, t.y, {
                            radius: t.radius
                        })
                    }
                })
            }
        }
    }
    var y = b
})), i.register("arZim", (function(e, a) {
    t(e.exports, "BallMovement", (function() {
        return r
    }));
    var s = i("divCp");
    const n = 1e3 / i("1gsQ3").PhysicsConstants.tickRate;
    class r {
        constructor(t) {
            (0, s.default)(this, "targetX", 0), (0, s.default)(this, "targetY", 0), (0, s.default)(this, "targetIsDirty", !1), (0, s.default)(this, "pointMap", []), (0, s.default)(this, "currentPoint", null), (0, s.default)(this, "currentTime", 0), (0, s.default)(this, "moveToTargetPosition", (() => {
                const t = this.pointMap[0];
                if (!t) return;
                const e = this.currentTime;
                if (!(e < t.startTime)) {
                    if (e > t.endTime) return this.pointMap.shift(), this.ball.container.view.x = t.endX, this.ball.container.view.y = t.endY, void this.moveToTargetPosition();
                    if (t.startTime <= e) {
                        this.currentPoint = t;
                        const i = Phaser.Math.Percent(e, t.startTime, t.endTime),
                            a = Phaser.Math.Linear(t.startX, t.endX, i),
                            s = Phaser.Math.Linear(t.startY, t.endY, i);
                        this.ball.container.view.x = a, this.ball.container.view.y = s
                    }
                }
            })), (0, s.default)(this, "getCurrentEndInfo", (() => {
                if (!this.pointMap.length) {
                    const t = this.currentTime;
                    return {
                        x: this.ball.container.view.x,
                        y: this.ball.container.view.y,
                        start: t,
                        end: t + n
                    }
                }
                const t = this.pointMap[this.pointMap.length - 1];
                return {
                    x: t.endX,
                    y: t.endY,
                    start: t.endTime,
                    end: t.endTime + n
                }
            })), (0, s.default)(this, "update", (t => {
                if (this.currentTime += t, this.targetIsDirty) {
                    this.targetIsDirty = !1;
                    const t = this.getCurrentEndInfo();
                    this.pointMap.push({
                        startX: t.x,
                        startY: t.y,
                        endX: this.targetX,
                        endY: this.targetY,
                        startTime: t.start,
                        endTime: t.end
                    })
                }
                this.moveToTargetPosition()
            })), (0, s.default)(this, "onReset", (() => {
                this.pointMap = [], this.ball.container.view.x = this.ball.x, this.ball.container.view.y = this.ball.y, this.targetX = this.ball.x, this.targetY = this.ball.y
            })), (0, s.default)(this, "setTargetX", (t => {
                this.targetX !== t && (this.targetX = t, this.targetIsDirty = !0)
            })), (0, s.default)(this, "setTargetY", (t => {
                this.targetY !== t && (this.targetY = t, this.targetIsDirty = !0)
            })), this.ball = t, this.targetX = t.x, this.targetY = t.y
        }
    }
})), i.register("iCGiG", (function(e, a) {
    t(e.exports, "BallAnimations", (function() {
        return o
    }));
    var s = i("divCp"),
        n = i("3FcQn");
    const r = 175,
        l = 100;
    class o {
        constructor(t) {
            (0, s.default)(this, "ballHeight", 0), (0, s.default)(this, "squeezeScale", 1), (0, s.default)(this, "cumulTime", 0), (0, s.default)(this, "hitTimeHeight", 0), (0, s.default)(this, "hitTimeScale", 0), (0, s.default)(this, "updateScale", (() => {
                if (0 === this.hitTimeScale) return;
                const t = this.cumulTime - this.hitTimeScale;
                this.squeezeScale = t < l ? 1 - (1 - n.BallConsts.animation.hitScale) * Math.sin(t * Math.PI / 2 / l) : Phaser.Math.Easing.Elastic.Out(Math.min(1, (t - l) / 2500)) * (1 - n.BallConsts.animation.hitScale) + n.BallConsts.animation.hitScale, this.ball.container.view.scaleX = this.squeezeScale
            })), (0, s.default)(this, "updateHeight", (() => {
                if (0 === this.hitTimeHeight) return;
                const t = this.cumulTime - this.hitTimeHeight;
                this.ballHeight = t < r ? n.BallConsts.animation.maxHeight * Math.sin(t * Math.PI / 2 / r) : n.BallConsts.animation.maxHeight - Phaser.Math.Easing.Bounce.Out(Math.min(1, (t - r) / 1e3)) * n.BallConsts.animation.maxHeight, this.ball.ball.view.y = -this.ballHeight, this.ball.frame.view.y = -this.ballHeight
            })), (0, s.default)(this, "update", (t => {
                this.cumulTime += t * n.BallConsts.animation.timeScale, this.updateScale(), this.updateHeight()
            })), (0, s.default)(this, "hit", (t => {
                this.hitTimeHeight = this.cumulTime - 350 * Math.asin(this.ballHeight / n.BallConsts.animation.maxHeight) / Math.PI, this.hitTimeScale = this.cumulTime - 200 * Math.asin((1 - this.squeezeScale) / (1 - n.BallConsts.animation.hitScale)) / Math.PI, this.ball.container.view.rotation = t, this.ball.container2.view.rotation = -t
            })), this.ball = t
        }
    }
})), i.register("3FcQn", (function(e, i) {
    t(e.exports, "BallConsts", (function() {
        return a
    }));
    const a = {
        animation: {
            timeScale: 1,
            maxHeight: 35,
            hitScale: .9,
            animateShadow: !0
        }
    }
})), i.register("cXAW2", (function(e, a) {
    t(e.exports, "BallRotation", (function() {
        return n
    }));
    var s = i("divCp");
    class n {
        constructor(t) {
            (0, s.default)(this, "prevX", 0), (0, s.default)(this, "prevY", 0), (0, s.default)(this, "cumulX", 0), (0, s.default)(this, "cumulY", 0), (0, s.default)(this, "update", (() => {
                let t = this.prevX - this.ball.container.view.x,
                    e = this.prevY - this.ball.container.view.y;
                const i = this.ball.ball.view.rotation - 2 * t / this.ball.options.radius,
                    a = 520 / this.ball.options.radius * 75e-5;
                this.cumulX += e * a * Math.sin(i), this.cumulY += e * a * Math.cos(i), this.ball.ball.view.setData("uAlpha", this.ball.container2.view.alpha), this.ball.ball.view.setData("uShiftX", this.cumulX), this.ball.ball.view.setData("uShiftY", this.cumulY), this.ball.ball.view.rotation = i, this.prevX = this.ball.container.view.x, this.prevY = this.ball.container.view.y
            })), this.ball = t, this.prevX = t.x, this.prevY = t.y
        }
    }
})), i.register("kyCFF", (function(a, s) {
    t(a.exports, "BallDeviceParticles", (function() {
        return u
    }));
    var n = i("divCp"),
        r = i("c3ah8"),
        l = i("6Tpu2"),
        o = i("alREA"),
        h = i("7qUZR"),
        c = i("4uojN");
    class u {
        constructor(t) {
            (0, n.default)(this, "burst", ((t, e, i) => {
                this.emitter && (this.emitter.setPosition(t, e), this.emitter.setDepth(i), this.emitter.explode(250))
            })), (0, n.default)(this, "destroy", (() => {
                this.emitter && this.emitter.destroy(!0)
            })), (0, n.default)(this, "load", (() => {
                if (!(0, l.InGamePhase)() && !(0, c.isPublishedVersion)()) return;
                const t = (0, o.default)("devices/crafting_table/particle.png");
                (0, h.default)({
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
                            blendMode: e(r).BlendModes.SCREEN,
                            emitting: !1,
                            lifespan: 1e3
                        }).setDepth(this.device.getMaxDepth() + 1))
                    }
                })
            })), this.device = t, this.load()
        }
    }
})), i.register("66eqP", (function(e, a) {
    t(e.exports, "CreateVisuals", (function() {
        return o
    }));
    var s = i("iDxt2"),
        n = i("gwuwo"),
        r = i("e8wfw"),
        l = i("alREA");
    const o = t => {
        t.container = t.parts.add.container({}), t.container2 = t.parts.add.container({
            parent: t.container.view
        }), t.container.view.x = t.x, t.container.view.y = t.y;
        const e = (0, l.default)(`devices/ball/${t.options.appearance}.png`);
        t.ball = t.parts.add.sprite({
            imageId: e,
            imageUrl: e,
            parent: t.container2.view,
            onReady: e => {
                e.view.x = 0, e.view.y = 0;
                const i = (0, n.default)().renderer.pipelines.get("Ball");
                e.view.setData("uAlpha", t.isPreview ? .6 : 1), e.view.setData("uShiftX", 0), e.view.setData("uShiftY", 0), e.view.setPipeline(i)
            }
        }), t.frame = t.parts.add.sprite({
            ...s.BlastBallAssets.frame,
            parent: t.container2.view,
            onReady: t => {
                t.view.x = 0, t.view.y = 0
            }
        }), t.ball.view.setScale(t.options.radius / 1700), t.frame.view.setScale(t.options.radius / 250), t.cull.ignoreCulling(), (0, r.UpdateDepth)(t), t.shadow = t.shadows.add({
            r1: 85,
            r2: 30,
            x: 0,
            y: 75
        })
    }
})), i.register("iDxt2", (function(e, a) {
    t(e.exports, "BlastBallAssets", (function() {
        return n
    }));
    var s = i("alREA");
    const n = {
        frame: {
            imageId: (0, s.default)("devices/ball/ball_circle.png"),
            imageUrl: (0, s.default)("devices/ball/ball_circle.png")
        }
    }
})), i.register("e8wfw", (function(e, a) {
    t(e.exports, "UpdateDepth", (function() {
        return r
    }));
    var s = i("jA9Ql"),
        n = i("bvStP");
    const r = t => {
        t.container.view.setDepth((0, s.GetGlobalDepth)(t.container.view.y + .75 * t.options.radius, n.default.DepthSortedCharactersAndDevices))
    }
})), i.register("cK78N", (function(e, i) {
    t(e.exports, "FetchOptionSchemaProperty", (function() {
        return a
    }));
    const a = (t, e) => {
        var i, a, s;
        const n = t.deviceOption.optionSchema.options.find((t => t.key === e));
        return {
            min: null === (i = null == n ? void 0 : n.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (a = null == n ? void 0 : n.option.props) || void 0 === a ? void 0 : a.max,
            step: null === (s = null == n ? void 0 : n.option.props) || void 0 === s ? void 0 : s.step
        }
    }
})), i.register("cnijD", (function(e, a) {
    t(e.exports, "ReplaceVisualEditingPreview", (function() {
        return o
    }));
    var s = i("dWqri"),
        n = i("eCsxR"),
        r = i("ittx1"),
        l = i("dNzyU");
    const o = (t, e, i) => {
        const a = (0, l.FetchVisualEditingPreview)(),
            o = (0, r.FetchCurrentlyEditedDevice)();
        if (!o || !a) return;
        const h = o.layers.isOnNaturalDepth() ? void 0 : e + o.layers.getDepthShift();
        (0, n.default)({
            deviceOption: a.deviceOption,
            id: s.VisualEditingConstants.previewId,
            x: t,
            y: e,
            depth: h,
            layerId: o.layers.getLayer(),
            name: a.name,
            isPreview: !0,
            options: {
                ...a.options,
                ...i
            },
            placedByClient: !0,
            state: a.deviceOption.defaultState
        })
    }
})), i.register("eCsxR", (function(e, a) {
    t(e.exports, "default", (function() {
        return r
    }));
    var s = i("gwuwo"),
        n = i("fCcDT");
    var r = t => {
        (0, s.default)().worldManager.devices.getDeviceById(t.id) && (0, n.default)(t)
    }
})), i.register("27Ca6", (function(e, a) {
    t(e.exports, "UpdateShadow", (function() {
        return n
    }));
    var s = i("3FcQn");
    const n = t => {
        if (!t.shadow) return;
        if (t.shadow.x = t.container.view.x, t.shadow.y = t.container.view.y + .9 * t.options.radius, !1 === s.BallConsts.animation.animateShadow) return;
        const e = 1 - .2 * t.animations.ballHeight / s.BallConsts.animation.maxHeight;
        t.shadow.r1 = 1 * e * t.container2.view.scaleX * t.options.radius, t.shadow.r2 = .4 * e * t.container2.view.scaleY * t.options.radius, t.shadow.alphaMultip = t.container2.view.alpha * t.container.view.alpha
    }
})), i.register("bPbov", (function(e, a) {
    t(e.exports, "SetupProjectiles", (function() {
        return r
    }));
    var s = i("6Tpu2"),
        n = i("4uojN");
    const r = t => {
        (0, s.InPreGamePhase)() && !(0, n.isPublishedVersion)() || (t.projectiles.setDynamic(!0), t.projectiles.collidesWithProjectile = e => {
            const {
                x: i,
                y: a,
                radius: s
            } = e;
            if (t.container2.view.alpha < .5 || !t.state.active) return !1;
            return Phaser.Math.Distance.Between(i, a, t.container.view.x, t.container.view.y) < t.options.radius + s
        }, t.projectiles.onClientPredictedHit = e => {
            const {
                x: i,
                y: a
            } = e, s = Phaser.Math.Angle.Between(i, a, t.container.view.x, t.container.view.y);
            t.animations.hit(s)
        })
    }
}));