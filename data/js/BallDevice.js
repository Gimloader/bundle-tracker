function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'BallDevice', function () {
        return _u;
    }), a(d.exports, 'default', function () {
        return _v;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
    class _u extends h.default {
        constructor(v) {
            if (super(v), (0, g.default)(this, 'onUpdate', w => {
                    this.movement.update(w), this.animations.update(w), this.rotation.update(), (0, s.UpdateShadow)(this), (0, n.UpdateDepth)(this);
                }), (0, g.default)(this, 'onStateChange', w => {
                    'x' === w && this.movement.setTargetX(this.state.x), 'y' === w && this.movement.setTargetY(this.state.y), 'active' === w && this.updateActive();
                }), (0, g.default)(this, 'updateActive', () => {
                    (0, o.InPreGamePhase)() && (0, p.isPublishedVersion)() ? this.container.view.alpha = 1 : (0, o.InPreGamePhase)() ? this.container.view.alpha = this.options.activeOnStart ? 1 : 0.5 : this.container.view.alpha = this.state.active ? 1 : 0;
                }), (0, g.default)(this, 'hide', () => {
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
                    });
                }), (0, g.default)(this, 'show', () => {
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
                    });
                }), (0, g.default)(this, 'fakeProjectileExplosionCallback', w => {
                    const {
                            x: x,
                            y: y
                        } = w, z = Phaser.Math.Angle.Between(x, y, this.container.view.x, this.container.view.y);
                    this.animations.hit(z);
                }), (0, g.default)(this, 'onMessage', w => {
                    'goal' === w.key && (this.hide(), setTimeout(() => {
                        this.isDestroyed || this.particles.burst(this.container.view.x, this.container.view.y, this.container.view.depth);
                    }, 250)), 'reset' === w.key && (this.movement.onReset(), this.show());
                }), (0, m.CreateVisuals)(this), (0, t.SetupProjectiles)(this), this.movement = new (0, i.BallMovement)(this), this.animations = new (0, j.BallAnimations)(this), this.rotation = new (0, k.BallRotation)(this), this.particles = new (0, l.BallDeviceParticles)(this), this.updateActive(), (0, o.InPreGamePhase)() && (0, p.isSavedVersion)()) {
                const w = (0, q.FetchOptionSchemaProperty)(this, 'radius');
                this.visualEditing.add.circle({
                    angle: 0,
                    rotable: !1,
                    radius: this.options.radius,
                    minRadius: w.min,
                    maxRadius: w.max,
                    onChange: x => {
                        (0, r.ReplaceVisualEditingPreview)(x.x, x.y, { radius: x.radius });
                    }
                });
            }
        }
    }
    var _v = _u;
}), c.register('.....', function (d, e) {
    a(d.exports, 'BallMovement', function () {
        return _h;
    });
    var f = c('.....');
    const g = 1000 / c('.....').PhysicsConstants.tickRate;
    class _h {
        constructor(i) {
            (0, f.default)(this, 'targetX', 0), (0, f.default)(this, 'targetY', 0), (0, f.default)(this, 'targetIsDirty', !1), (0, f.default)(this, 'pointMap', []), (0, f.default)(this, 'currentPoint', null), (0, f.default)(this, 'currentTime', 0), (0, f.default)(this, 'moveToTargetPosition', () => {
                const j = this.pointMap[0];
                if (!j)
                    return;
                const k = this.currentTime;
                if (!(k < j.startTime)) {
                    if (k > j.endTime)
                        return this.pointMap.shift(), this.ball.container.view.x = j.endX, this.ball.container.view.y = j.endY, void this.moveToTargetPosition();
                    if (j.startTime <= k) {
                        this.currentPoint = j;
                        const l = Phaser.Math.Percent(k, j.startTime, j.endTime), m = Phaser.Math.Linear(j.startX, j.endX, l), n = Phaser.Math.Linear(j.startY, j.endY, l);
                        this.ball.container.view.x = m, this.ball.container.view.y = n;
                    }
                }
            }), (0, f.default)(this, 'getCurrentEndInfo', () => {
                if (!this.pointMap.length) {
                    const j = this.currentTime;
                    return {
                        x: this.ball.container.view.x,
                        y: this.ball.container.view.y,
                        start: j,
                        end: j + g
                    };
                }
                const k = this.pointMap[this.pointMap.length - 1];
                return {
                    x: k.endX,
                    y: k.endY,
                    start: k.endTime,
                    end: k.endTime + g
                };
            }), (0, f.default)(this, 'update', j => {
                if (this.currentTime += j, this.targetIsDirty) {
                    this.targetIsDirty = !1;
                    const k = this.getCurrentEndInfo();
                    this.pointMap.push({
                        startX: k.x,
                        startY: k.y,
                        endX: this.targetX,
                        endY: this.targetY,
                        startTime: k.start,
                        endTime: k.end
                    });
                }
                this.moveToTargetPosition();
            }), (0, f.default)(this, 'onReset', () => {
                this.pointMap = [], this.ball.container.view.x = this.ball.x, this.ball.container.view.y = this.ball.y, this.targetX = this.ball.x, this.targetY = this.ball.y;
            }), (0, f.default)(this, 'setTargetX', j => {
                this.targetX !== j && (this.targetX = j, this.targetIsDirty = !0);
            }), (0, f.default)(this, 'setTargetY', j => {
                this.targetY !== j && (this.targetY = j, this.targetIsDirty = !0);
            }), this.ball = i, this.targetX = i.x, this.targetY = i.y;
        }
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'BallAnimations', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....');
    const h = 175, i = 100;
    class _j {
        constructor(k) {
            (0, f.default)(this, 'ballHeight', 0), (0, f.default)(this, 'squeezeScale', 1), (0, f.default)(this, 'cumulTime', 0), (0, f.default)(this, 'hitTimeHeight', 0), (0, f.default)(this, 'hitTimeScale', 0), (0, f.default)(this, 'updateScale', () => {
                if (0 === this.hitTimeScale)
                    return;
                const l = this.cumulTime - this.hitTimeScale;
                this.squeezeScale = l < i ? 1 - (1 - g.BallConsts.animation.hitScale) * Math.sin(l * Math.PI / 2 / i) : Phaser.Math.Easing.Elastic.Out(Math.min(1, (l - i) / 2500)) * (1 - g.BallConsts.animation.hitScale) + g.BallConsts.animation.hitScale, this.ball.container.view.scaleX = this.squeezeScale;
            }), (0, f.default)(this, 'updateHeight', () => {
                if (0 === this.hitTimeHeight)
                    return;
                const l = this.cumulTime - this.hitTimeHeight;
                this.ballHeight = l < h ? g.BallConsts.animation.maxHeight * Math.sin(l * Math.PI / 2 / h) : g.BallConsts.animation.maxHeight - Phaser.Math.Easing.Bounce.Out(Math.min(1, (l - h) / 1000)) * g.BallConsts.animation.maxHeight, this.ball.ball.view.y = -this.ballHeight, this.ball.frame.view.y = -this.ballHeight;
            }), (0, f.default)(this, 'update', l => {
                this.cumulTime += l * g.BallConsts.animation.timeScale, this.updateScale(), this.updateHeight();
            }), (0, f.default)(this, 'hit', l => {
                this.hitTimeHeight = this.cumulTime - 350 * Math.asin(this.ballHeight / g.BallConsts.animation.maxHeight) / Math.PI, this.hitTimeScale = this.cumulTime - 200 * Math.asin((1 - this.squeezeScale) / (1 - g.BallConsts.animation.hitScale)) / Math.PI, this.ball.container.view.rotation = l, this.ball.container2.view.rotation = -l;
            }), this.ball = k;
        }
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'BallConsts', function () {
        return _f;
    });
    const _f = {
        animation: {
            timeScale: 1,
            maxHeight: 35,
            hitScale: 0.9,
            animateShadow: !0
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'BallRotation', function () {
        return _g;
    });
    var f = c('.....');
    class _g {
        constructor(h) {
            (0, f.default)(this, 'prevX', 0), (0, f.default)(this, 'prevY', 0), (0, f.default)(this, 'cumulX', 0), (0, f.default)(this, 'cumulY', 0), (0, f.default)(this, 'update', () => {
                let i = this.prevX - this.ball.container.view.x, j = this.prevY - this.ball.container.view.y;
                const k = this.ball.ball.view.rotation - 2 * i / this.ball.options.radius, l = 520 / this.ball.options.radius * 0.00075;
                this.cumulX += j * l * Math.sin(k), this.cumulY += j * l * Math.cos(k), this.ball.ball.view.setData('uAlpha', this.ball.container2.view.alpha), this.ball.ball.view.setData('uShiftX', this.cumulX), this.ball.ball.view.setData('uShiftY', this.cumulY), this.ball.ball.view.rotation = k, this.prevX = this.ball.container.view.x, this.prevY = this.ball.container.view.y;
            }), this.ball = h, this.prevX = h.x, this.prevY = h.y;
        }
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'BallDeviceParticles', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    class _l {
        constructor(m) {
            (0, f.default)(this, 'burst', (n, o, p) => {
                this.emitter && (this.emitter.setPosition(n, o), this.emitter.setDepth(p), this.emitter.explode(250));
            }), (0, f.default)(this, 'destroy', () => {
                this.emitter && this.emitter.destroy(!0);
            }), (0, f.default)(this, 'load', () => {
                if (!(0, h.InGamePhase)() && !(0, k.isPublishedVersion)())
                    return;
                const n = (0, i.default)('devices/crafting_table/particle.png');
                (0, j.default)({
                    key: n,
                    url: n,
                    onLoad: () => {
                        this.device.isDestroyed || (this.emitter = this.device.scene.add.particles(this.device.x, this.device.y, n, {
                            speed: {
                                min: -400,
                                max: 400
                            },
                            scale: {
                                start: 0.5,
                                end: 0
                            },
                            blendMode: b(g).BlendModes.SCREEN,
                            emitting: !1,
                            lifespan: 1000
                        }).setDepth(this.device.getMaxDepth() + 1));
                    }
                });
            }), this.device = m, this.load();
        }
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'CreateVisuals', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const _j = k => {
        k.container = k.parts.add.container({}), k.container2 = k.parts.add.container({ parent: k.container.view }), k.container.view.x = k.x, k.container.view.y = k.y;
        const l = (0, i.default)(`devices/ball/${ k.options.appearance }.png`);
        k.ball = k.parts.add.sprite({
            imageId: l,
            imageUrl: l,
            parent: k.container2.view,
            onReady: m => {
                m.view.x = 0, m.view.y = 0;
                const n = (0, g.default)().renderer.pipelines.get('Ball');
                m.view.setData('uAlpha', k.isPreview ? 0.6 : 1), m.view.setData('uShiftX', 0), m.view.setData('uShiftY', 0), m.view.setPipeline(n);
            }
        }), k.frame = k.parts.add.sprite({
            ...f.BlastBallAssets.frame,
            parent: k.container2.view,
            onReady: m => {
                m.view.x = 0, m.view.y = 0;
            }
        }), k.ball.view.setScale(k.options.radius / 1700), k.frame.view.setScale(k.options.radius / 250), k.cull.ignoreCulling(), (0, h.UpdateDepth)(k), k.shadow = k.shadows.add({
            r1: 85,
            r2: 30,
            x: 0,
            y: 75
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'BlastBallAssets', function () {
        return _g;
    });
    var f = c('.....');
    const _g = {
        frame: {
            imageId: (0, f.default)('devices/ball/ball_circle.png'),
            imageUrl: (0, f.default)('devices/ball/ball_circle.png')
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'UpdateDepth', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = i => {
        i.container.view.setDepth((0, f.GetGlobalDepth)(i.container.view.y + 0.75 * i.options.radius, g.default.DepthSortedCharactersAndDevices));
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'FetchOptionSchemaProperty', function () {
        return _f;
    });
    const _f = (g, h) => {
        var i, j, k;
        const l = g.deviceOption.optionSchema.options.find(m => m.key === h);
        return {
            min: null === (i = null == l ? void 0 : l.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (j = null == l ? void 0 : l.option.props) || void 0 === j ? void 0 : j.max,
            step: null === (k = null == l ? void 0 : l.option.props) || void 0 === k ? void 0 : k.step
        };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'ReplaceVisualEditingPreview', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const _j = (k, l, m) => {
        const n = (0, i.FetchVisualEditingPreview)(), o = (0, h.FetchCurrentlyEditedDevice)();
        if (!o || !n)
            return;
        const p = o.layers.isOnNaturalDepth() ? void 0 : l + o.layers.getDepthShift();
        (0, g.default)({
            deviceOption: n.deviceOption,
            id: f.VisualEditingConstants.previewId,
            x: k,
            y: l,
            depth: p,
            layerId: o.layers.getLayer(),
            name: n.name,
            isPreview: !0,
            options: {
                ...n.options,
                ...m
            },
            placedByClient: !0,
            state: n.deviceOption.defaultState
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, f.default)().worldManager.devices.getDeviceById(i.id) && (0, g.default)(i);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'UpdateShadow', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        if (!h.shadow)
            return;
        if (h.shadow.x = h.container.view.x, h.shadow.y = h.container.view.y + 0.9 * h.options.radius, !1 === f.BallConsts.animation.animateShadow)
            return;
        const i = 1 - 0.2 * h.animations.ballHeight / f.BallConsts.animation.maxHeight;
        h.shadow.r1 = 1 * i * h.container2.view.scaleX * h.options.radius, h.shadow.r2 = 0.4 * i * h.container2.view.scaleY * h.options.radius, h.shadow.alphaMultip = h.container2.view.alpha * h.container.view.alpha;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'SetupProjectiles', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = i => {
        (0, f.InPreGamePhase)() && !(0, g.isPublishedVersion)() || (i.projectiles.setDynamic(!0), i.projectiles.collidesWithProjectile = j => {
            const {
                x: k,
                y: l,
                radius: m
            } = j;
            if (i.container2.view.alpha < 0.5 || !i.state.active)
                return !1;
            return Phaser.Math.Distance.Between(k, l, i.container.view.x, i.container.view.y) < i.options.radius + m;
        }, i.projectiles.onClientPredictedHit = j => {
            const {
                    x: k,
                    y: l
                } = j, m = Phaser.Math.Angle.Between(k, l, i.container.view.x, i.container.view.y);
            i.animations.hit(m);
        });
    };
});