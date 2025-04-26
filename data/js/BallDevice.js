function a(a, b, c, w) {
    Object.defineProperty(a, b, {
        get: c,
        set: w,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('6gnDM', function(b, w) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'BallDevice', function() {
        return s;
    }), a(b.exports, 'default', function() {
        return t;
    });
    var e = c('UM8oI'),
        f = c('sgILU'),
        g = c('4onyU'),
        h = c('E1gTE'),
        i = c('68Umd'),
        j = c('oZKGJ'),
        k = c('icH/n'),
        l = c('UpQL6'),
        m = c('5Ux1a'),
        n = c('Bpt+p'),
        o = c('/Lvpl17'),
        p = c('wSwKo5'),
        q = c('wyh8h'),
        r = c('qlxGY');
    class s extends f.default {
        constructor(a) {
            if (super(a), (0, e.default)(this, 'onUpdate', a => {
                    this.movement.update(a), this.animations.update(a), this.rotation.update(), (0, q.UpdateShadow)(this), (0, l.UpdateDepth)(this);
                }), (0, e.default)(this, 'onStateChange', a => {
                    'x' === a && this.movement.setTargetX(this.state.x), 'y' === a && this.movement.setTargetY(this.state.y), 'active' === a && this.updateActive();
                }), (0, e.default)(this, 'updateActive', () => {
                    (0, m.InPreGamePhase)() && (0, n.isPublishedVersion)() ? this.container.view.alpha = 1: (0, m.InPreGamePhase)() ? this.container.view.alpha = this.options.activeOnStart ? 1 : 0.5 : this.container.view.alpha = this.state.active ? 1 : 0;
                }), (0, e.default)(this, 'hide', () => {
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
                }), (0, e.default)(this, 'show', () => {
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
                }), (0, e.default)(this, 'fakeProjectileExplosionCallback', a => {
                    const {
                        x: t,
                        y: u
                    } = v, w = Phaser.Math.Angle.Between(t, u, this.container.view.x, this.container.view.y);
                    this.animations.hit(w);
                }), (0, e.default)(this, 'onMessage', a => {
                    'goal' === a.key && (this.hide(), setTimeout(() => {
                        this.isDestroyed || this.particles.burst(this.container.view.x, this.container.view.y, this.container.view.depth);
                    }, 250)), 'reset' === a.key && (this.movement.onReset(), this.show());
                }), (0, k.CreateVisuals)(this), (0, r.SetupProjectiles)(this), this.movement = new(0, g.BallMovement)(this), this.animations = new(0, h.BallAnimations)(this), this.rotation = new(0, i.BallRotation)(this), this.particles = new(0, j.BallDeviceParticles)(this), this.updateActive(), (0, m.InPreGamePhase)() && (0, n.isSavedVersion)()) {
                const t = (0, o.FetchOptionSchemaProperty)(this, 'radius');
                this.visualEditing.add.circle({
                    angle: 0,
                    rotable: !1,
                    radius: this.options.radius,
                    minRadius: t.min,
                    maxRadius: t.max,
                    onChange: t => {
                        (0, p.ReplaceVisualEditingPreview)(t.x, t.y, {
                            radius: t.radius
                        });
                    }
                });
            }
        }
    }
    var t = u;
}), c.register('4onyU', function(b, j) {
    a(b.exports, 'BallMovement', function() {
        return f;
    });
    var d = c('UM8oI');
    const e = 1000 / c('333CK').PhysicsConstants.tickRate;
    class f {
        constructor(a) {
            (0, d.default)(this, 'targetX', 0), (0, d.default)(this, 'targetY', 0), (0, d.default)(this, 'targetIsDirty', !1), (0, d.default)(this, 'pointMap', []), (0, d.default)(this, 'currentPoint', null), (0, d.default)(this, 'currentTime', 0), (0, d.default)(this, 'moveToTargetPosition', () => {
                const g = this.pointMap[0];
                if (!g)
                    return;
                const h = this.currentTime;
                if (!(h < g.startTime)) {
                    if (h > g.endTime)
                        return this.pointMap.shift(), this.ball.container.view.x = g.endX, this.ball.container.view.y = g.endY, void this.moveToTargetPosition();
                    if (g.startTime <= h) {
                        this.currentPoint = g;
                        const i = Phaser.Math.Percent(h, g.startTime, g.endTime),
                            j = Phaser.Math.Linear(g.startX, g.endX, i),
                            k = Phaser.Math.Linear(g.startY, g.endY, i);
                        this.ball.container.view.x = j, this.ball.container.view.y = k;
                    }
                }
            }), (0, d.default)(this, 'getCurrentEndInfo', () => {
                if (!this.pointMap.length) {
                    const g = this.currentTime;
                    return {
                        x: this.ball.container.view.x,
                        y: this.ball.container.view.y,
                        start: g,
                        end: g + e
                    };
                }
                const g = this.pointMap[this.pointMap.length - 1];
                return {
                    x: g.endX,
                    y: g.endY,
                    start: g.endTime,
                    end: g.endTime + e
                };
            }), (0, d.default)(this, 'update', a => {
                if (this.currentTime += a, this.targetIsDirty) {
                    this.targetIsDirty = !1;
                    const g = this.getCurrentEndInfo();
                    this.pointMap.push({
                        startX: g.x,
                        startY: g.y,
                        endX: this.targetX,
                        endY: this.targetY,
                        startTime: g.start,
                        endTime: g.end
                    });
                }
                this.moveToTargetPosition();
            }), (0, d.default)(this, 'onReset', () => {
                this.pointMap = [], this.ball.container.view.x = this.ball.x, this.ball.container.view.y = this.ball.y, this.targetX = this.ball.x, this.targetY = this.ball.y;
            }), (0, d.default)(this, 'setTargetX', a => {
                this.targetX !== a && (this.targetX = a, this.targetIsDirty = !0);
            }), (0, d.default)(this, 'setTargetY', a => {
                this.targetY !== a && (this.targetY = a, this.targetIsDirty = !0);
            }), this.ball = a, this.targetX = a.x, this.targetY = a.y;
        }
    }
}), c.register('E1gTE', function(b, d) {
    a(b.exports, 'BallAnimations', function() {
        return h;
    });
    var d = c('UM8oI'),
        e = c('JcWqt');
    const f = 175,
        g = 100;
    class h {
        constructor(a) {
            (0, d.default)(this, 'ballHeight', 0), (0, d.default)(this, 'squeezeScale', 1), (0, d.default)(this, 'cumulTime', 0), (0, d.default)(this, 'hitTimeHeight', 0), (0, d.default)(this, 'hitTimeScale', 0), (0, d.default)(this, 'updateScale', () => {
                if (0 === this.hitTimeScale)
                    return;
                const i = this.cumulTime - this.hitTimeScale;
                this.squeezeScale = i < g ? 1 - (1 - e.BallConsts.animation.hitScale) * Math.sin(i * Math.PI / 2 / g) : Phaser.Math.Easing.Elastic.Out(Math.min(1, (i - g) / 2500)) * (1 - e.BallConsts.animation.hitScale) + e.BallConsts.animation.hitScale, this.ball.container.view.scaleX = this.squeezeScale;
            }), (0, d.default)(this, 'updateHeight', () => {
                if (0 === this.hitTimeHeight)
                    return;
                const i = this.cumulTime - this.hitTimeHeight;
                this.ballHeight = i < f ? e.BallConsts.animation.maxHeight * Math.sin(i * Math.PI / 2 / f) : e.BallConsts.animation.maxHeight - Phaser.Math.Easing.Bounce.Out(Math.min(1, (i - f) / 1000)) * e.BallConsts.animation.maxHeight, this.ball.ball.view.y = -this.ballHeight, this.ball.frame.view.y = -this.ballHeight;
            }), (0, d.default)(this, 'update', a => {
                this.cumulTime += a * e.BallConsts.animation.timeScale, this.updateScale(), this.updateHeight();
            }), (0, d.default)(this, 'hit', a => {
                this.hitTimeHeight = this.cumulTime - 350 * Math.asin(this.ballHeight / e.BallConsts.animation.maxHeight) / Math.PI, this.hitTimeScale = this.cumulTime - 200 * Math.asin((1 - this.squeezeScale) / (1 - e.BallConsts.animation.hitScale)) / Math.PI, this.ball.container.view.rotation = a, this.ball.container2.view.rotation = -a;
            }), this.ball = a;
        }
    }
}), c.register('JcWqt', function(b, c) {
    a(b.exports, 'BallConsts', function() {
        return d;
    });
    const d = {
        animation: {
            timeScale: 1,
            maxHeight: 35,
            hitScale: 0.9,
            animateShadow: !0
        }
    };
}), c.register('68Umd', function(b, i) {
    a(b.exports, 'BallRotation', function() {
        return e;
    });
    var d = c('UM8oI');
    class e {
        constructor(a) {
            (0, d.default)(this, 'prevX', 0), (0, d.default)(this, 'prevY', 0), (0, d.default)(this, 'cumulX', 0), (0, d.default)(this, 'cumulY', 0), (0, d.default)(this, 'update', () => {
                let f = this.prevX - this.ball.container.view.x,
                    g = this.prevY - this.ball.container.view.y;
                const h = this.ball.ball.view.rotation - 2 * f / this.ball.options.radius,
                    i = 520 / this.ball.options.radius * 0.00075;
                this.cumulX += g * i * Math.sin(h), this.cumulY += g * i * Math.cos(h), this.ball.ball.view.setData('uAlpha', this.ball.container2.view.alpha), this.ball.ball.view.setData('uShiftX', this.cumulX), this.ball.ball.view.setData('uShiftY', this.cumulY), this.ball.ball.view.rotation = h, this.prevX = this.ball.container.view.x, this.prevY = this.ball.container.view.y;
            }), this.ball = a, this.prevX = a.x, this.prevY = a.y;
        }
    }
}), c.register('oZKGJ', function(d, d) {
    a(d.exports, 'BallDeviceParticles', function() {
        return j;
    });
    var d = c('UM8oI'),
        e = c('kneek'),
        f = c('5Ux1a'),
        g = c('JJQ0+'),
        h = c('y7G4G'),
        i = c('Bpt+p');
    class j {
        constructor(a) {
            (0, d.default)(this, 'burst', (a, b, c) => {
                this.emitter && (this.emitter.setPosition(a, b), this.emitter.setDepth(c), this.emitter.explode(250));
            }), (0, d.default)(this, 'destroy', () => {
                this.emitter && this.emitter.destroy(!0);
            }), (0, d.default)(this, 'load', () => {
                if (!(0, f.InGamePhase)() && !(0, i.isPublishedVersion)())
                    return;
                const k = (0, g.default)('devices/crafting_table/particle.png');
                (0, h.default)({
                    key: k,
                    url: k,
                    onLoad: () => {
                        this.device.isDestroyed || (this.emitter = this.device.scene.add.particles(this.device.x, this.device.y, k, {
                            speed: {
                                min: -400,
                                max: 400
                            },
                            scale: {
                                start: 0.5,
                                end: 0
                            },
                            blendMode: b(e).BlendModes.SCREEN,
                            emitting: !1,
                            lifespan: 1000
                        }).setDepth(this.device.getMaxDepth() + 1));
                    }
                });
            }), this.device = a, this.load();
        }
    }
}), c.register('icH/n', function(b, d) {
    a(b.exports, 'CreateVisuals', function() {
        return h;
    });
    var d = c('F2srZ'),
        e = c('dAmf5'),
        f = c('UpQL6'),
        g = c('JJQ0+');
    const h = a => {
        a.container = a.parts.add.container({}), a.container2 = a.parts.add.container({
            parent: a.container.view
        }), a.container.view.x = a.x, a.container.view.y = a.y;
        const i = (0, g.default)(`devices/ball/${ a.options.appearance }.png`);
        a.ball = a.parts.add.sprite({
            imageId: i,
            imageUrl: i,
            parent: a.container2.view,
            onReady: i => {
                i.view.x = 0, i.view.y = 0;
                const j = (0, e.default)().renderer.pipelines.get('Ball');
                i.view.setData('uAlpha', a.isPreview ? 0.6 : 1), i.view.setData('uShiftX', 0), i.view.setData('uShiftY', 0), i.view.setPipeline(j);
            }
        }), a.frame = a.parts.add.sprite({
            ...d.BlastBallAssets.frame,
            parent: a.container2.view,
            onReady: a => {
                a.view.x = 0, a.view.y = 0;
            }
        }), a.ball.view.setScale(a.options.radius / 1700), a.frame.view.setScale(a.options.radius / 250), a.cull.ignoreCulling(), (0, f.UpdateDepth)(a), a.shadow = a.shadows.add({
            r1: 85,
            r2: 30,
            x: 0,
            y: 75
        });
    };
}), c.register('F2srZ', function(b, d) {
    a(b.exports, 'BlastBallAssets', function() {
        return e;
    });
    var d = c('JJQ0+');
    const e = {
        frame: {
            imageId: (0, d.default)('devices/ball/ball_circle.png'),
            imageUrl: (0, d.default)('devices/ball/ball_circle.png')
        }
    };
}), c.register('UpQL6', function(b, d) {
    a(b.exports, 'UpdateDepth', function() {
        return f;
    });
    var d = c('aR65c'),
        e = c('cMsWT');
    const f = a => {
        a.container.view.setDepth((0, d.GetGlobalDepth)(a.container.view.y + 0.75 * a.options.radius, e.default.DepthSortedCharactersAndDevices));
    };
}), c.register('/Lvpl17', function(b, c) {
    a(b.exports, 'FetchOptionSchemaProperty', function() {
        return d;
    });
    const d = (a, b) => {
        var e, f, g;
        const h = a.deviceOption.optionSchema.options.find(a => a.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), c.register('wSwKo5', function(b, i) {
    a(b.exports, 'ReplaceVisualEditingPreview', function() {
        return h;
    });
    var d = c('2pEsK'),
        e = c('Am0b71'),
        f = c('KDS1x'),
        g = c('83+vO');
    const h = (a, b, c) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : b + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: k,
            layerId: j.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...c
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        });
    };
}), c.register('Am0b71', function(b, h) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('dAmf5'),
        e = c('jgFbX');
    var f = a => {
        (0, d.default)().worldManager.devices.getDeviceById(a.id) && (0, e.default)(a);
    };
}), c.register('wyh8h', function(b, h) {
    a(b.exports, 'UpdateShadow', function() {
        return e;
    });
    var d = c('JcWqt');
    const e = a => {
        if (!a.shadow)
            return;
        if (a.shadow.x = a.container.view.x, a.shadow.y = a.container.view.y + 0.9 * a.options.radius, !1 === d.BallConsts.animation.animateShadow)
            return;
        const f = 1 - 0.2 * a.animations.ballHeight / d.BallConsts.animation.maxHeight;
        a.shadow.r1 = 1 * f * a.container2.view.scaleX * a.options.radius, a.shadow.r2 = 0.4 * f * a.container2.view.scaleY * a.options.radius, a.shadow.alphaMultip = a.container2.view.alpha * a.container.view.alpha;
    };
}), c.register('qlxGY', function(b, h) {
    a(b.exports, 'SetupProjectiles', function() {
        return f;
    });
    var d = c('5Ux1a'),
        e = c('Bpt+p');
    const f = a => {
        (0, d.InPreGamePhase)() && !(0, e.isPublishedVersion)() || (a.projectiles.setDynamic(!0), a.projectiles.collidesWithProjectile = b => {
            const {
                x: g,
                y: h,
                radius: i
            } = j;
            if (a.container2.view.alpha < 0.5 || !a.state.active)
                return !1;
            return Phaser.Math.Distance.Between(g, h, a.container.view.x, a.container.view.y) < a.options.radius + i;
        }, a.projectiles.onClientPredictedHit = b => {
            const {
                x: g,
                y: h
            } = i, j = Phaser.Math.Angle.Between(g, h, a.container.view.x, a.container.view.y);
            a.animations.hit(j);
        });
    };
});