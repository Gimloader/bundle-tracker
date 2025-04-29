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
c.register('JaOuz', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'BallDevice', function() {
        return _u;
    }), a(d.exports, 'default', function() {
        return _v;
    });
    var g = c('s/YA9'),
        h = c('ltxDW'),
        i = c('gOsQ0'),
        j = c('8cAL6'),
        k = c('WsVR5'),
        l = c('2V/oD'),
        m = c('WSTcp'),
        n = c('dy5+h'),
        o = c('UkCpC'),
        p = c('hycyg'),
        q = c('uc4mA17'),
        r = c('u/WlI21'),
        s = c('qtqgb'),
        t = c('mNtet');
    class _u extends h.default {
        constructor(v) {
            if (super(v), (0, g.default)(this, 'onUpdate', v => {
                    this.movement.update(v), this.animations.update(v), this.rotation.update(), (0, s.UpdateShadow)(this), (0, n.UpdateDepth)(this);
                }), (0, g.default)(this, 'onStateChange', v => {
                    'x' === v && this.movement.setTargetX(this.state.x), 'y' === v && this.movement.setTargetY(this.state.y), 'active' === v && this.updateActive();
                }), (0, g.default)(this, 'updateActive', () => {
                    (0, o.InPreGamePhase)() && (0, p.isPublishedVersion)() ? this.container.view.alpha = 1: (0, o.InPreGamePhase)() ? this.container.view.alpha = this.options.activeOnStart ? 1 : 0.5 : this.container.view.alpha = this.state.active ? 1 : 0;
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
                }), (0, g.default)(this, 'fakeProjectileExplosionCallback', v => {
                    const {
                        x: w,
                        y: x
                    } = v, y = Phaser.Math.Angle.Between(w, x, this.container.view.x, this.container.view.y);
                    this.animations.hit(y);
                }), (0, g.default)(this, 'onMessage', v => {
                    'goal' === v.key && (this.hide(), setTimeout(() => {
                        this.isDestroyed || this.particles.burst(this.container.view.x, this.container.view.y, this.container.view.depth);
                    }, 250)), 'reset' === v.key && (this.movement.onReset(), this.show());
                }), (0, m.CreateVisuals)(this), (0, t.SetupProjectiles)(this), this.movement = new(0, i.BallMovement)(this), this.animations = new(0, j.BallAnimations)(this), this.rotation = new(0, k.BallRotation)(this), this.particles = new(0, l.BallDeviceParticles)(this), this.updateActive(), (0, o.InPreGamePhase)() && (0, p.isSavedVersion)()) {
                const w = (0, q.FetchOptionSchemaProperty)(this, 'radius');
                this.visualEditing.add.circle({
                    angle: 0,
                    rotable: !1,
                    radius: this.options.radius,
                    minRadius: w.min,
                    maxRadius: w.max,
                    onChange: w => {
                        (0, r.ReplaceVisualEditingPreview)(w.x, w.y, {
                            radius: w.radius
                        });
                    }
                });
            }
        }
    }
    var _v = _u;
}), c.register('gOsQ0', function(d, e) {
    a(d.exports, 'BallMovement', function() {
        return _h;
    });
    var f = c('s/YA9');
    const g = 1000 / c('C+MU+').PhysicsConstants.tickRate;
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
                        const l = Phaser.Math.Percent(k, j.startTime, j.endTime),
                            m = Phaser.Math.Linear(j.startX, j.endX, l),
                            n = Phaser.Math.Linear(j.startY, j.endY, l);
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
                const j = this.pointMap[this.pointMap.length - 1];
                return {
                    x: j.endX,
                    y: j.endY,
                    start: j.endTime,
                    end: j.endTime + g
                };
            }), (0, f.default)(this, 'update', i => {
                if (this.currentTime += i, this.targetIsDirty) {
                    this.targetIsDirty = !1;
                    const j = this.getCurrentEndInfo();
                    this.pointMap.push({
                        startX: j.x,
                        startY: j.y,
                        endX: this.targetX,
                        endY: this.targetY,
                        startTime: j.start,
                        endTime: j.end
                    });
                }
                this.moveToTargetPosition();
            }), (0, f.default)(this, 'onReset', () => {
                this.pointMap = [], this.ball.container.view.x = this.ball.x, this.ball.container.view.y = this.ball.y, this.targetX = this.ball.x, this.targetY = this.ball.y;
            }), (0, f.default)(this, 'setTargetX', i => {
                this.targetX !== i && (this.targetX = i, this.targetIsDirty = !0);
            }), (0, f.default)(this, 'setTargetY', i => {
                this.targetY !== i && (this.targetY = i, this.targetIsDirty = !0);
            }), this.ball = i, this.targetX = i.x, this.targetY = i.y;
        }
    }
}), c.register('8cAL6', function(d, e) {
    a(d.exports, 'BallAnimations', function() {
        return _j;
    });
    var f = c('s/YA9'),
        g = c('n6eIK');
    const h = 175,
        i = 100;
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
            }), (0, f.default)(this, 'update', k => {
                this.cumulTime += k * g.BallConsts.animation.timeScale, this.updateScale(), this.updateHeight();
            }), (0, f.default)(this, 'hit', k => {
                this.hitTimeHeight = this.cumulTime - 350 * Math.asin(this.ballHeight / g.BallConsts.animation.maxHeight) / Math.PI, this.hitTimeScale = this.cumulTime - 200 * Math.asin((1 - this.squeezeScale) / (1 - g.BallConsts.animation.hitScale)) / Math.PI, this.ball.container.view.rotation = k, this.ball.container2.view.rotation = -k;
            }), this.ball = k;
        }
    }
}), c.register('n6eIK', function(d, e) {
    a(d.exports, 'BallConsts', function() {
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
}), c.register('WsVR5', function(d, e) {
    a(d.exports, 'BallRotation', function() {
        return _g;
    });
    var f = c('s/YA9');
    class _g {
        constructor(h) {
            (0, f.default)(this, 'prevX', 0), (0, f.default)(this, 'prevY', 0), (0, f.default)(this, 'cumulX', 0), (0, f.default)(this, 'cumulY', 0), (0, f.default)(this, 'update', () => {
                let i = this.prevX - this.ball.container.view.x,
                    j = this.prevY - this.ball.container.view.y;
                const k = this.ball.ball.view.rotation - 2 * i / this.ball.options.radius,
                    l = 520 / this.ball.options.radius * 0.00075;
                this.cumulX += j * l * Math.sin(k), this.cumulY += j * l * Math.cos(k), this.ball.ball.view.setData('uAlpha', this.ball.container2.view.alpha), this.ball.ball.view.setData('uShiftX', this.cumulX), this.ball.ball.view.setData('uShiftY', this.cumulY), this.ball.ball.view.rotation = k, this.prevX = this.ball.container.view.x, this.prevY = this.ball.container.view.y;
            }), this.ball = h, this.prevX = h.x, this.prevY = h.y;
        }
    }
}), c.register('2V/oD', function(d, e) {
    a(d.exports, 'BallDeviceParticles', function() {
        return _l;
    });
    var f = c('s/YA9'),
        g = c('ddhGF'),
        h = c('UkCpC'),
        i = c('UaUBz0'),
        j = c('k/JOU'),
        k = c('hycyg');
    class _l {
        constructor(m) {
            (0, f.default)(this, 'burst', (m, b, c) => {
                this.emitter && (this.emitter.setPosition(m, b), this.emitter.setDepth(c), this.emitter.explode(250));
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
}), c.register('WSTcp', function(d, e) {
    a(d.exports, 'CreateVisuals', function() {
        return _j;
    });
    var f = c('fUuS9'),
        g = c('heTaO'),
        h = c('dy5+h'),
        i = c('UaUBz0');
    const _j = a => {
        a.container = a.parts.add.container({}), a.container2 = a.parts.add.container({
            parent: a.container.view
        }), a.container.view.x = a.x, a.container.view.y = a.y;
        const k = (0, i.default)(`devices/ball/${ a.options.appearance }.png`);
        a.ball = a.parts.add.sprite({
            imageId: k,
            imageUrl: k,
            parent: a.container2.view,
            onReady: k => {
                k.view.x = 0, k.view.y = 0;
                const l = (0, g.default)().renderer.pipelines.get('Ball');
                k.view.setData('uAlpha', a.isPreview ? 0.6 : 1), k.view.setData('uShiftX', 0), k.view.setData('uShiftY', 0), k.view.setPipeline(l);
            }
        }), a.frame = a.parts.add.sprite({
            ...f.BlastBallAssets.frame,
            parent: a.container2.view,
            onReady: a => {
                a.view.x = 0, a.view.y = 0;
            }
        }), a.ball.view.setScale(a.options.radius / 1700), a.frame.view.setScale(a.options.radius / 250), a.cull.ignoreCulling(), (0, h.UpdateDepth)(a), a.shadow = a.shadows.add({
            r1: 85,
            r2: 30,
            x: 0,
            y: 75
        });
    };
}), c.register('fUuS9', function(d, e) {
    a(d.exports, 'BlastBallAssets', function() {
        return _g;
    });
    var f = c('UaUBz0');
    const _g = {
        frame: {
            imageId: (0, f.default)('devices/ball/ball_circle.png'),
            imageUrl: (0, f.default)('devices/ball/ball_circle.png')
        }
    };
}), c.register('dy5+h', function(d, e) {
    a(d.exports, 'UpdateDepth', function() {
        return _h;
    });
    var f = c('mSv2o'),
        g = c('GIe9o');
    const _h = a => {
        a.container.view.setDepth((0, f.GetGlobalDepth)(a.container.view.y + 0.75 * a.options.radius, g.default.DepthSortedCharactersAndDevices));
    };
}), c.register('uc4mA17', function(d, e) {
    a(d.exports, 'FetchOptionSchemaProperty', function() {
        return _f;
    });
    const _f = (a, d) => {
        var g, h, i;
        const j = a.deviceOption.optionSchema.options.find(a => a.key === d);
        return {
            min: null === (g = null == j ? void 0 : j.option.props) || void 0 === g ? void 0 : g.min,
            max: null === (h = null == j ? void 0 : j.option.props) || void 0 === h ? void 0 : h.max,
            step: null === (i = null == j ? void 0 : j.option.props) || void 0 === i ? void 0 : i.step
        };
    };
}), c.register('u/WlI21', function(d, e) {
    a(d.exports, 'ReplaceVisualEditingPreview', function() {
        return _j;
    });
    var f = c('hemXM'),
        g = c('sWmxu5'),
        h = c('EzUqb'),
        i = c('GQMbT');
    const _j = (a, d, c) => {
        const k = (0, i.FetchVisualEditingPreview)(),
            l = (0, h.FetchCurrentlyEditedDevice)();
        if (!l || !k)
            return;
        const m = l.layers.isOnNaturalDepth() ? void 0 : d + l.layers.getDepthShift();
        (0, g.default)({
            deviceOption: k.deviceOption,
            id: f.VisualEditingConstants.previewId,
            x: a,
            y: d,
            depth: m,
            layerId: l.layers.getLayer(),
            name: k.name,
            isPreview: !0,
            options: {
                ...k.options,
                ...c
            },
            placedByClient: !0,
            state: k.deviceOption.defaultState
        });
    };
}), c.register('sWmxu5', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('heTaO'),
        g = c('2LtPo');
    var _h = a => {
        (0, f.default)().worldManager.devices.getDeviceById(a.id) && (0, g.default)(a);
    };
}), c.register('qtqgb', function(d, e) {
    a(d.exports, 'UpdateShadow', function() {
        return _g;
    });
    var f = c('n6eIK');
    const _g = a => {
        if (!a.shadow)
            return;
        if (a.shadow.x = a.container.view.x, a.shadow.y = a.container.view.y + 0.9 * a.options.radius, !1 === f.BallConsts.animation.animateShadow)
            return;
        const h = 1 - 0.2 * a.animations.ballHeight / f.BallConsts.animation.maxHeight;
        a.shadow.r1 = 1 * h * a.container2.view.scaleX * a.options.radius, a.shadow.r2 = 0.4 * h * a.container2.view.scaleY * a.options.radius, a.shadow.alphaMultip = a.container2.view.alpha * a.container.view.alpha;
    };
}), c.register('mNtet', function(d, e) {
    a(d.exports, 'SetupProjectiles', function() {
        return _h;
    });
    var f = c('UkCpC'),
        g = c('hycyg');
    const _h = a => {
        (0, f.InPreGamePhase)() && !(0, g.isPublishedVersion)() || (a.projectiles.setDynamic(!0), a.projectiles.collidesWithProjectile = d => {
            const {
                x: i,
                y: j,
                radius: k
            } = d;
            if (a.container2.view.alpha < 0.5 || !a.state.active)
                return !1;
            return Phaser.Math.Distance.Between(i, j, a.container.view.x, a.container.view.y) < a.options.radius + k;
        }, a.projectiles.onClientPredictedHit = d => {
            const {
                x: i,
                y: j
            } = d, k = Phaser.Math.Angle.Between(i, j, a.container.view.x, a.container.view.y);
            a.animations.hit(k);
        });
    };
});