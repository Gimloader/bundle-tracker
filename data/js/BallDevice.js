function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('BsLzG', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _t(b.exports, 'BallDevice', function() {
        return _s;
    }), _t(b.exports, 'default', function() {
        return _t;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('uFWyR'),
        h = a('qxIR/'),
        i = a('3zHoB'),
        j = a('fxujI'),
        k = a('tbSDI'),
        l = a('U8Wrq'),
        m = a('/pbxo'),
        n = a('9tz3H'),
        o = a('R2Ucl10'),
        p = a('IFO6W13'),
        q = a('xQWqH'),
        r = a('t3x+i');
    class _s extends f.default {
        constructor(_t) {
            if (super(_t), (0, e.default)(this, 'onUpdate', _t => {
                    this.movement.update(_t), this.animations.update(_t), this.rotation.update(), (0, q.UpdateShadow)(this), (0, l.UpdateDepth)(this);
                }), (0, e.default)(this, 'onStateChange', _t => {
                    'x' === _t && this.movement.setTargetX(this.state.x), 'y' === _t && this.movement.setTargetY(this.state.y), 'active' === _t && this.updateActive();
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
                }), (0, e.default)(this, 'fakeProjectileExplosionCallback', _t => {
                    const {
                        x: u,
                        y: v
                    } = _t, w = Phaser.Math.Angle.Between(u, v, this.container.view.x, this.container.view.y);
                    this.animations.hit(w);
                }), (0, e.default)(this, 'onMessage', _t => {
                    'goal' === _t.key && (this.hide(), setTimeout(() => {
                        this.isDestroyed || this.particles.burst(this.container.view.x, this.container.view.y, this.container.view.depth);
                    }, 250)), 'reset' === _t.key && (this.movement.onReset(), this.show());
                }), (0, k.CreateVisuals)(this), (0, r.SetupProjectiles)(this), this.movement = new(0, g.BallMovement)(this), this.animations = new(0, h.BallAnimations)(this), this.rotation = new(0, i.BallRotation)(this), this.particles = new(0, j.BallDeviceParticles)(this), this.updateActive(), (0, m.InPreGamePhase)() && (0, n.isSavedVersion)()) {
                const u = (0, o.FetchOptionSchemaProperty)(this, 'radius');
                this.visualEditing.add.circle({
                    angle: 0,
                    rotable: !1,
                    radius: this.options.radius,
                    minRadius: u.min,
                    maxRadius: u.max,
                    onChange: u => {
                        (0, p.ReplaceVisualEditingPreview)(u.x, u.y, {
                            radius: u.radius
                        });
                    }
                });
            }
        }
    }
    var _t = _s;
}), a.register('uFWyR', function(b, c) {
    _g(b.exports, 'BallMovement', function() {
        return _f;
    });
    var d = a('1bFPu');
    const e = 1000 / a('e2Ti9').PhysicsConstants.tickRate;
    class _f {
        constructor(_g) {
            (0, d.default)(this, 'targetX', 0), (0, d.default)(this, 'targetY', 0), (0, d.default)(this, 'targetIsDirty', !1), (0, d.default)(this, 'pointMap', []), (0, d.default)(this, 'currentPoint', null), (0, d.default)(this, 'currentTime', 0), (0, d.default)(this, 'moveToTargetPosition', () => {
                const h = this.pointMap[0];
                if (!h)
                    return;
                const i = this.currentTime;
                if (!(i < h.startTime)) {
                    if (i > h.endTime)
                        return this.pointMap.shift(), this.ball.container.view.x = h.endX, this.ball.container.view.y = h.endY, void this.moveToTargetPosition();
                    if (h.startTime <= i) {
                        this.currentPoint = h;
                        const j = Phaser.Math.Percent(i, h.startTime, h.endTime),
                            k = Phaser.Math.Linear(h.startX, h.endX, j),
                            l = Phaser.Math.Linear(h.startY, h.endY, j);
                        this.ball.container.view.x = k, this.ball.container.view.y = l;
                    }
                }
            }), (0, d.default)(this, 'getCurrentEndInfo', () => {
                if (!this.pointMap.length) {
                    const h = this.currentTime;
                    return {
                        x: this.ball.container.view.x,
                        y: this.ball.container.view.y,
                        start: h,
                        end: h + e
                    };
                }
                const h = this.pointMap[this.pointMap.length - 1];
                return {
                    x: h.endX,
                    y: h.endY,
                    start: h.endTime,
                    end: h.endTime + e
                };
            }), (0, d.default)(this, 'update', _g => {
                if (this.currentTime += _g, this.targetIsDirty) {
                    this.targetIsDirty = !1;
                    const h = this.getCurrentEndInfo();
                    this.pointMap.push({
                        startX: h.x,
                        startY: h.y,
                        endX: this.targetX,
                        endY: this.targetY,
                        startTime: h.start,
                        endTime: h.end
                    });
                }
                this.moveToTargetPosition();
            }), (0, d.default)(this, 'onReset', () => {
                this.pointMap = [], this.ball.container.view.x = this.ball.x, this.ball.container.view.y = this.ball.y, this.targetX = this.ball.x, this.targetY = this.ball.y;
            }), (0, d.default)(this, 'setTargetX', _g => {
                this.targetX !== _g && (this.targetX = _g, this.targetIsDirty = !0);
            }), (0, d.default)(this, 'setTargetY', _g => {
                this.targetY !== _g && (this.targetY = _g, this.targetIsDirty = !0);
            }), this.ball = _g, this.targetX = _g.x, this.targetY = _g.y;
        }
    }
}), a.register('qxIR/', function(b, c) {
    _i(b.exports, 'BallAnimations', function() {
        return _h;
    });
    var d = a('1bFPu'),
        e = a('nGnZy');
    const f = 175,
        g = 100;
    class _h {
        constructor(_i) {
            (0, d.default)(this, 'ballHeight', 0), (0, d.default)(this, 'squeezeScale', 1), (0, d.default)(this, 'cumulTime', 0), (0, d.default)(this, 'hitTimeHeight', 0), (0, d.default)(this, 'hitTimeScale', 0), (0, d.default)(this, 'updateScale', () => {
                if (0 === this.hitTimeScale)
                    return;
                const j = this.cumulTime - this.hitTimeScale;
                this.squeezeScale = j < g ? 1 - (1 - e.BallConsts.animation.hitScale) * Math.sin(j * Math.PI / 2 / g) : Phaser.Math.Easing.Elastic.Out(Math.min(1, (j - g) / 2500)) * (1 - e.BallConsts.animation.hitScale) + e.BallConsts.animation.hitScale, this.ball.container.view.scaleX = this.squeezeScale;
            }), (0, d.default)(this, 'updateHeight', () => {
                if (0 === this.hitTimeHeight)
                    return;
                const j = this.cumulTime - this.hitTimeHeight;
                this.ballHeight = j < f ? e.BallConsts.animation.maxHeight * Math.sin(j * Math.PI / 2 / f) : e.BallConsts.animation.maxHeight - Phaser.Math.Easing.Bounce.Out(Math.min(1, (j - f) / 1000)) * e.BallConsts.animation.maxHeight, this.ball.ball.view.y = -this.ballHeight, this.ball.frame.view.y = -this.ballHeight;
            }), (0, d.default)(this, 'update', _i => {
                this.cumulTime += _i * e.BallConsts.animation.timeScale, this.updateScale(), this.updateHeight();
            }), (0, d.default)(this, 'hit', _i => {
                this.hitTimeHeight = this.cumulTime - 350 * Math.asin(this.ballHeight / e.BallConsts.animation.maxHeight) / Math.PI, this.hitTimeScale = this.cumulTime - 200 * Math.asin((1 - this.squeezeScale) / (1 - e.BallConsts.animation.hitScale)) / Math.PI, this.ball.container.view.rotation = _i, this.ball.container2.view.rotation = -_i;
            }), this.ball = _i;
        }
    }
}), a.register('nGnZy', function(b, c) {
    _f(b.exports, 'BallConsts', function() {
        return _d;
    });
    const _d = {
        animation: {
            timeScale: 1,
            maxHeight: 35,
            hitScale: 0.9,
            animateShadow: !0
        }
    };
}), a.register('3zHoB', function(b, c) {
    _f(b.exports, 'BallRotation', function() {
        return _e;
    });
    var d = a('1bFPu');
    class _e {
        constructor(_f) {
            (0, d.default)(this, 'prevX', 0), (0, d.default)(this, 'prevY', 0), (0, d.default)(this, 'cumulX', 0), (0, d.default)(this, 'cumulY', 0), (0, d.default)(this, 'update', () => {
                let g = this.prevX - this.ball.container.view.x,
                    h = this.prevY - this.ball.container.view.y;
                const i = this.ball.ball.view.rotation - 2 * g / this.ball.options.radius,
                    j = 520 / this.ball.options.radius * 0.00075;
                this.cumulX += h * j * Math.sin(i), this.cumulY += h * j * Math.cos(i), this.ball.ball.view.setData('uAlpha', this.ball.container2.view.alpha), this.ball.ball.view.setData('uShiftX', this.cumulX), this.ball.ball.view.setData('uShiftY', this.cumulY), this.ball.ball.view.rotation = i, this.prevX = this.ball.container.view.x, this.prevY = this.ball.container.view.y;
            }), this.ball = _f, this.prevX = _f.x, this.prevY = _f.y;
        }
    }
}), a.register('fxujI', function(b, c) {
    _k(b.exports, 'BallDeviceParticles', function() {
        return _j;
    });
    var d = a('1bFPu'),
        e = a('8WvaZ'),
        f = a('/pbxo'),
        g = a('2Xvuf'),
        h = a('QfDHU'),
        i = a('9tz3H');
    class _j {
        constructor(_k) {
            (0, d.default)(this, 'burst', (_k, _b, a) => {
                this.emitter && (this.emitter.setPosition(_k, _b), this.emitter.setDepth(a), this.emitter.explode(250));
            }), (0, d.default)(this, 'destroy', () => {
                this.emitter && this.emitter.destroy(!0);
            }), (0, d.default)(this, 'load', () => {
                if (!(0, f.InGamePhase)() && !(0, i.isPublishedVersion)())
                    return;
                const l = (0, g.default)('devices/crafting_table/particle.png');
                (0, h.default)({
                    key: l,
                    url: l,
                    onLoad: () => {
                        this.device.isDestroyed || (this.emitter = this.device.scene.add.particles(this.device.x, this.device.y, l, {
                            speed: {
                                min: -400,
                                max: 400
                            },
                            scale: {
                                start: 0.5,
                                end: 0
                            },
                            blendMode: _b(e).BlendModes.SCREEN,
                            emitting: !1,
                            lifespan: 1000
                        }).setDepth(this.device.getMaxDepth() + 1));
                    }
                });
            }), this.device = _k, this.load();
        }
    }
}), a.register('tbSDI', function(_b, c) {
    t(_b.exports, 'CreateVisuals', function() {
        return _h;
    });
    var d = a('R+iI/'),
        e = a('D5xLI'),
        f = a('U8Wrq'),
        g = a('2Xvuf');
    const _h = t => {
        t.container = t.parts.add.container({}), t.container2 = t.parts.add.container({
            parent: t.container.view
        }), t.container.view.x = t.x, t.container.view.y = t.y;
        const i = (0, g.default)(`devices/ball/${ t.options.appearance }.png`);
        t.ball = t.parts.add.sprite({
            imageId: i,
            imageUrl: i,
            parent: t.container2.view,
            onReady: i => {
                i.view.x = 0, i.view.y = 0;
                const j = (0, e.default)().renderer.pipelines.get('Ball');
                i.view.setData('uAlpha', t.isPreview ? 0.6 : 1), i.view.setData('uShiftX', 0), i.view.setData('uShiftY', 0), i.view.setPipeline(j);
            }
        }), t.frame = t.parts.add.sprite({
            ...d.BlastBallAssets.frame,
            parent: t.container2.view,
            onReady: t => {
                t.view.x = 0, t.view.y = 0;
            }
        }), t.ball.view.setScale(t.options.radius / 1700), t.frame.view.setScale(t.options.radius / 250), t.cull.ignoreCulling(), (0, f.UpdateDepth)(t), t.shadow = t.shadows.add({
            r1: 85,
            r2: 30,
            x: 0,
            y: 75
        });
    };
}), a.register('R+iI/', function(b, c) {
    t(b.exports, 'BlastBallAssets', function() {
        return _e;
    });
    var d = a('2Xvuf');
    const _e = {
        frame: {
            imageId: (0, d.default)('devices/ball/ball_circle.png'),
            imageUrl: (0, d.default)('devices/ball/ball_circle.png')
        }
    };
}), a.register('U8Wrq', function(b, c) {
    t(b.exports, 'UpdateDepth', function() {
        return _f;
    });
    var d = a('r7Wu5'),
        e = a('JqBF0');
    const _f = t => {
        t.container.view.setDepth((0, d.GetGlobalDepth)(t.container.view.y + 0.75 * t.options.radius, e.default.DepthSortedCharactersAndDevices));
    };
}), a.register('R2Ucl10', function(b, c) {
    t(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (t, b) => {
        var e, f, g;
        const h = t.deviceOption.optionSchema.options.find(t => t.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), a.register('IFO6W13', function(b, c) {
    t(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (t, b, a) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : b + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: t,
            y: b,
            depth: k,
            layerId: j.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...a
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        });
    };
}), a.register('+oovY4', function(b, c) {
    t(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = t => {
        (0, d.default)().worldManager.devices.getDeviceById(t.id) && (0, e.default)(t);
    };
}), a.register('xQWqH', function(b, c) {
    t(b.exports, 'UpdateShadow', function() {
        return _e;
    });
    var d = a('nGnZy');
    const _e = t => {
        if (!t.shadow)
            return;
        if (t.shadow.x = t.container.view.x, t.shadow.y = t.container.view.y + 0.9 * t.options.radius, !1 === d.BallConsts.animation.animateShadow)
            return;
        const f = 1 - 0.2 * t.animations.ballHeight / d.BallConsts.animation.maxHeight;
        t.shadow.r1 = 1 * f * t.container2.view.scaleX * t.options.radius, t.shadow.r2 = 0.4 * f * t.container2.view.scaleY * t.options.radius, t.shadow.alphaMultip = t.container2.view.alpha * t.container.view.alpha;
    };
}), a.register('t3x+i', function(b, c) {
    t(b.exports, 'SetupProjectiles', function() {
        return _f;
    });
    var d = a('/pbxo'),
        e = a('9tz3H');
    const _f = t => {
        (0, d.InPreGamePhase)() && !(0, e.isPublishedVersion)() || (t.projectiles.setDynamic(!0), t.projectiles.collidesWithProjectile = b => {
            const {
                x: g,
                y: h,
                radius: i
            } = b;
            if (t.container2.view.alpha < 0.5 || !t.state.active)
                return !1;
            return Phaser.Math.Distance.Between(g, h, t.container.view.x, t.container.view.y) < t.options.radius + i;
        }, t.projectiles.onClientPredictedHit = b => {
            const {
                x: g,
                y: h
            } = b, i = Phaser.Math.Angle.Between(g, h, t.container.view.x, t.container.view.y);
            t.animations.hit(i);
        });
    };
});