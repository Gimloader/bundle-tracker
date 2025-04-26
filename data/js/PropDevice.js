function a(a, b, y, z) {
    Object.defineProperty(a, b, {
        get: y,
        set: z,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('El6hM', function(y, z) {
    var c;
    c = y.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(y.exports, 'default', function() {
        return w;
    });
    var d = b('UM8oI'),
        e = b('ZH/OP'),
        f = b('sgILU'),
        g = b('RLQly'),
        h = b('5Ux1a'),
        i = b('JJQ0+'),
        j = b('cMsWT'),
        k = b('+U4yU'),
        l = b('Bpt+p'),
        m = b('Mr5c3'),
        n = b('wSwKo5'),
        o = b('Q0Vn8'),
        p = b('dAmf5'),
        q = b('/Lvpl17'),
        r = b('1Xmw+1'),
        s = b('HMNV0');
    const t = 100,
        u = 200;
    class v extends f.default {
        createVisuals() {
            var w, x, y, z, A, B;
            (this.addPart(this.propOption.imageUrl), this.options.UseColliders) && (null === (w = this.propOption) || void 0 === w || null === (x = w.circleColliders) || void 0 === x || x.forEach(w => {
                this.addCircleCollider(w);
            }), null === (y = this.propOption) || void 0 === y || null === (z = y.rectColliders) || void 0 === z || z.forEach(w => {
                this.addRectCollider(w);
            }), null === (A = this.propOption) || void 0 === A || null === (B = A.ellipseColliders) || void 0 === B || B.forEach(w => {
                this.addEllipseCollider(w);
            }));
            this.options.shadowsEnabled && 0 === this.options.Angle && this.propOption.shadows.forEach(w => {
                this.addShadow(w);
            }), this.createHealthbar(), this.updateHealthbar(this.state.healthPercent), this.showing || this.hideInstantly();
        }
        hide() {
            this.showing = !1, this.sprite && this.sprite.view && this.tweens.add({
                targets: this.sprite.view,
                alpha: 0,
                duration: t
            }), this.healthbarContainer && this.healthbarContainer.view && this.tweens.add({
                targets: this.healthbarContainer.view,
                alpha: 0,
                duration: t
            }), this.shadows.forEach(w => this.tweens.add({
                targets: w,
                alphaMultip: 0,
                duration: t
            }));
        }
        hideInstantly() {
            this.showing = !1, this.sprite && this.sprite.view && (this.sprite.view.alpha = 0), this.healthbarContainer && this.healthbarContainer.view && (this.healthbarContainer.view.alpha = 0), this.shadows.forEach(w => {
                w.alphaMultip = 0;
            });
        }
        show() {
            this.showing = !0, this.sprite && this.sprite.view && this.tweens.add({
                targets: this.sprite.view,
                alpha: this.visibleAlpha,
                duration: t
            }), this.healthbarContainer && this.healthbarContainer.view && this.tweens.add({
                targets: this.healthbarContainer.view,
                alpha: 1,
                duration: t
            }), this.shadows.forEach(w => this.tweens.add({
                targets: w,
                alphaMultip: this.getShadowVisibleAlpha(),
                duration: t
            }));
        }
        constructor(a) {
            var w;
            super(a), (0, d.default)(this, 'showing', !0), (0, d.default)(this, 'healthbarShowTween', null), (0, d.default)(this, 'healthbarHideTween', null), (0, d.default)(this, 'createHealthbar', () => {
                this.canBeDamaged() && this.options.healthbar !== g.HealthbarMode.off && (this.healthbarContainer = this.parts.add.container({}), this.healthbarContainer2 = this.parts.add.container({
                    parent: this.healthbarContainer.view
                }), this.healthbarContainer.view.x = this.x, this.healthbarContainer.view.y = this.y + 30, this.healthbarContainer2.view.x = 0, this.healthbarContainer2.view.y = 0, this.healthbarBg = this.parts.add.rect({
                    width: u,
                    height: 10,
                    color: 0,
                    alpha: 0.25,
                    parent: this.healthbarContainer2.view
                }), this.healthbarContainer2.view.add(this.healthbarBg.view), this.healthbarBg.view.x = 0, this.healthbarBg.view.y = 0, this.healthbar = this.parts.add.rect({
                    width: u,
                    height: 10,
                    color: 4567883,
                    alpha: 1,
                    parent: this.healthbarContainer2.view
                }), this.healthbarContainer2.view.add(this.healthbar.view), this.healthbar.view.x = 0, this.healthbar.view.y = 0, this.healthbarMark = this.parts.add.rect({
                    width: 2,
                    height: 10,
                    color: 6800492,
                    alpha: 1,
                    parent: this.healthbarContainer2.view
                }), this.healthbarContainer2.view.add(this.healthbarMark.view), this.healthbarMark.view.x = 99, this.healthbarMark.view.y = 0, this.options.healthbar === g.HealthbarMode.whenHit && (this.healthbarContainer2.view.alpha = 0), this.positionHealthbar());
            }), (0, d.default)(this, 'positionHealthbar', () => {
                if (!this.canBeDamaged())
                    return;
                if (this.options.healthbar === g.HealthbarMode.off)
                    return;
                if (!this.sprite.view || !this.healthbarContainer.view)
                    return;
                const x = this.sprite.getBounds();
                this.healthbarContainer.view.x = (x.left + x.right) / 2, this.healthbarContainer.view.y = x.bottom + 30;
            }), (0, d.default)(this, 'tweenHealthbarOnHit', () => {
                var x, y;
                this.options.healthbar === g.HealthbarMode.whenHit && (null === (x = this.healthbarShowTween) || void 0 === x || x.stop(), this.healthbarShowTween = this.tweens.add({
                    targets: this.healthbarContainer2.view,
                    alpha: 1,
                    duration: t,
                    ease: Phaser.Math.Easing.Sine.InOut
                }), null === (y = this.healthbarHideTween) || void 0 === y || y.stop(), this.healthbarHideTween = this.tweens.add({
                    targets: this.healthbarContainer2.view,
                    alpha: 0,
                    duration: 350,
                    delay: 1000,
                    ease: Phaser.Math.Easing.Sine.InOut
                }));
            }), (0, d.default)(this, 'updateHealthbar', a => {
                if (!this.canBeDamaged())
                    return;
                if (this.options.healthbar === g.HealthbarMode.off)
                    return;
                const x = null != a ? a : 1;
                this.healthbar.view.scaleX = x, this.healthbar.view.x = -200 * (1 - x) / 2, this.healthbarBg.view.alpha = 0, this.healthbar.view.alpha = 0, this.healthbarMark.view.alpha = 0, x > 0 && (this.healthbar.view.alpha = 1, this.healthbarBg.view.alpha = 1, this.healthbarMark.view.alpha = this.healthbar.view.alpha, this.healthbarMark.view.x = u * x - 100 - 1);
            }), (0, d.default)(this, 'onStateChange', a => {
                if ('visible' === a && (this.state.visible ? ((0, r.default)(this), this.show()) : this.hide()), 'hitData' === a) {
                    const x = JSON.parse(this.state.hitData);
                    void 0 !== x.alpha && void 0 !== x.damageToDeal && this.onHealthChange(x);
                }
            }), (0, d.default)(this, 'onHealthChange', a => {
                if ((null == a ? void 0 : a.damageToDeal) > 0) {
                    let x = null == a ? void 0 : a.x,
                        y = null == a ? void 0 : a.y;
                    if (!x || !y) {
                        const z = this.boundingBox.getBoundingBox(),
                            A = {
                                x: z.x + z.width / 2,
                                y: z.y + z.height / 2
                            };
                        x = A.x, y = A.y;
                    }
                    const z = Phaser.Math.Snap.To(x, 20),
                        A = Phaser.Math.Snap.To(y, 20);
                    (0, p.default)().worldManager.projectiles.damageMarkers.basic.applyDamage({
                        markerId: this.id,
                        damage: a.damageToDeal,
                        x: z,
                        y: A
                    });
                }
                this.updateVisibleAlpha(a.alpha), this.spriteFlashOverlay && this.spriteFlashOverlay.view && (this.spriteFlashOverlay.view.alpha = 1, this.tweens.add({
                    targets: this.spriteFlashOverlay.view,
                    alpha: 0,
                    duration: 200
                })), this.sprite && this.sprite.view && this.tweens.add({
                    targets: this.sprite.view,
                    alpha: this.visibleAlpha,
                    duration: t
                }), this.shadows.forEach(a => this.tweens.add({
                    targets: a,
                    alphaMultip: this.getShadowVisibleAlpha(),
                    duration: t
                })), this.updateHealthbar(a.alpha), this.tweenHealthbarOnHit();
            }), (0, d.default)(this, 'addVisualEditing', () => {
                const x = (0, m.default)((0, i.default)(this.propOption.imageUrl)),
                    y = (0, q.FetchOptionSchemaProperty)(this, 'Scale'),
                    z = x.width * this.propOption.scaleMultip,
                    A = x.height * this.propOption.scaleMultip,
                    B = {
                        x: (0.5 - this.propOption.originX) * z,
                        y: (0.5 - this.propOption.originY) * A
                    },
                    C = (0, k.GetPosAfterTransform)(B.x, B.y, this.options.Scale, this.options.Angle);
                Math.max(0, 50 - z * Math.max(0.5, y.min)), Math.max(0, 50 - A * Math.max(0.5, y.min));
                this.visualEditing.add.box({
                    x: C.x,
                    y: C.y,
                    angle: this.options.Angle,
                    width: z * this.options.Scale + 0,
                    height: A * this.options.Scale + 0,
                    minWidth: z * Math.max(0.1, y.min) + 0,
                    maxWidth: z * y.max + 0,
                    minHeight: A * Math.max(0.1, y.min) + 0,
                    maxHeight: A * y.max + 0,
                    onChange: x => {
                        const D = (x.height - 0) / A,
                            E = x.angle,
                            F = {
                                x: (0.5 - this.propOption.originX) * z,
                                y: (0.5 - this.propOption.originY) * A
                            },
                            G = (0, k.GetPosAfterTransform)(F.x, F.y, D, E);
                        (0, n.ReplaceVisualEditingPreview)(x.x - G.x, x.y - G.y, {
                            Angle: E,
                            Scale: D
                        });
                    }
                });
            }), (0, d.default)(this, 'addPart', a => {
                this.sprite = this.parts.add.sprite({
                    imageId: (0, i.default)(a),
                    imageUrl: (0, i.default)(a),
                    originX: this.propOption.originX,
                    originY: this.propOption.originY,
                    onReady: () => {
                        this.boundingBox.clearCached(), this.updateWirePoint(), this.addVisualEditing(), setTimeout(() => {
                            this.fixBoundingBox(), this.positionHealthbar();
                        }, 0);
                    }
                }), this.sprite.view.scaleX = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.scaleY = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.angle = this.options.Angle, this.sprite.view.alpha = this.visibleAlpha, this.options.FlipX && (this.sprite.view.scaleX *= -1), this.options.Tint && (this.sprite.view.tint = Phaser.Display.Color.HexStringToColor(this.options.Tint).color), this.canBeDamaged() && (this.spriteFlashOverlay = this.parts.add.sprite({
                    imageId: (0, i.default)(a),
                    imageUrl: (0, i.default)(a),
                    originX: this.propOption.originX,
                    originY: this.propOption.originY,
                    flipX: this.options.FlipX,
                    depthChange: 10
                }), this.spriteFlashOverlay.view.scaleX = (this.options.Scale || 1) * this.propOption.scaleMultip, this.spriteFlashOverlay.view.scaleY = (this.options.Scale || 1) * this.propOption.scaleMultip, this.spriteFlashOverlay.view.angle = this.options.Angle, this.spriteFlashOverlay.view.alpha = 0, this.spriteFlashOverlay.view.tint = 16777215, this.spriteFlashOverlay.view.tintFill = !0), this.boundingBox.clearCached(), this.updateWirePoint();
            }), (0, d.default)(this, 'updateWirePoint', () => {
                if (!(0, l.isSavedVersion)() || this.isPreview)
                    return;
                const x = this.boundingBox.getBoundingBox();
                this.wirePoints.setBoth(x.x + x.width / 2, x.y + x.height / 2);
            }), (0, d.default)(this, 'addCircleCollider', a => {
                const x = this.options.FlipX ? -a.x : a.x,
                    y = (0, k.GetPosAfterTransform)(x, a.y, this.options.Scale, this.options.Angle);
                this.colliders.add.circle({
                    r: a.r * this.options.Scale,
                    x: y.x,
                    y: y.y
                });
            }), (0, d.default)(this, 'addRectCollider', a => {
                const x = this.options.FlipX ? -a.x : a.x,
                    y = this.options.FlipX ? -a.angle : a.angle,
                    z = a.w * this.options.Scale,
                    A = a.h * this.options.Scale,
                    B = (0, k.GetPosAfterTransform)(x, a.y, this.options.Scale, this.options.Angle);
                this.colliders.add.box({
                    x: B.x,
                    y: B.y,
                    w: z,
                    h: A,
                    angle: this.options.Angle + y
                });
            }), (0, d.default)(this, 'addEllipseCollider', a => {
                const x = this.options.FlipX ? -a.x : a.x,
                    y = this.options.FlipX ? -a.angle : a.angle,
                    z = (0, k.GetPosAfterTransform)(x, a.y, this.options.Scale, this.options.Angle);
                this.colliders.add.ellipse({
                    x: z.x,
                    y: z.y,
                    r1: a.r1 * this.options.Scale,
                    r2: a.r2 * this.options.Scale,
                    angle: this.options.Angle + y
                });
            }), (0, d.default)(this, 'addShadow', a => {
                if ((0, s.isPlatformer)())
                    return;
                const x = (0, k.GetPosAfterTransform)(a.x, a.y, this.options.Scale, 0);
                this.shadows.add({
                    x: this.options.FlipX ? -x.x : x.x,
                    y: x.y,
                    r1: a.r1 * this.options.Scale,
                    r2: a.r2 * this.options.Scale,
                    alphaMultip: this.getShadowVisibleAlpha(),
                    depth: this.options.shadowsPlacement === g.ShadowsPlacement.beneathProp ? this.layers.getGlobalDepth() - (0, o.default)(1) : 0
                });
            }), (0, d.default)(this, 'canBeDamaged', () => this.options.canBeDamaged), (0, d.default)(this, 'updateVisibleAlpha', a => {
                var x;
                const y = 0 === a ? 0 : 0.75 * (null !== (x = this.state.healthPercent) && void 0 !== x ? x : 1) + 0.25;
                var z;
                this.visibleAlpha = y * (null !== (z = this.options.Alpha) && void 0 !== z ? z : 1);
            }), (0, d.default)(this, 'getShadowVisibleAlpha', () => {
                return 0 === this.visibleAlpha ? 0 : null !== (a = this.options.Alpha) && void 0 !== a ? a : 1;
                var x;
            }), (0, d.default)(this, 'checkIfCollidersEnabled', () => this.state.visible && this.state.healthPercent > 0), (0, d.default)(this, 'fixBoundingBox', () => {
                if (!this.options.FlipX)
                    return;
                if (this.boundingBox.isHardcoded())
                    return;
                if (this.isPreview)
                    return;
                const x = this.boundingBox.getBoundingBox(),
                    y = x.x + x.width - this.x;
                this.boundingBox.setHardcoded({
                    x: -y,
                    y: x.y - this.y,
                    width: x.width,
                    height: x.height
                });
            }), this.updateVisibleAlpha(null !== (w = this.state.healthPercent) && void 0 !== w ? w : 1);
            const x = (0, e.default)(this.options.propId);
            var y;
            x && (this.propOption = x, (0, h.InGamePhase)() && !this.state.visible && (this.showing = !1), this.layers.setDefaultLayer(null !== (y = x.defaultLayer) && void 0 !== y ? y : j.default.DepthSortedCharactersAndDevices), this.createVisuals());
        }
    }
    var w = x;
}), b.register('RLQly', function(b, d) {
    let c;
    var d;
    let e;
    var f;
    a(b.exports, 'ShadowsPlacement', function() {
        return c;
    }), a(b.exports, 'HealthbarMode', function() {
        return e;
    }), (d = c || (c = {})).floor = 'Floor', d.beneathProp = 'Beneath Prop', (f = e || (e = {})).off = 'Off', f.on = 'On', f.whenHit = 'When Hit';
}), b.register('+U4yU', function(b, d) {
    a(b.exports, 'GetPosAfterTransform', function() {
        return c;
    });
    const c = (a, b, d, c) => {
        const d = a * d,
            e = b * d,
            f = Phaser.Math.DegToRad(c);
        return {
            x: d * Math.cos(f) - e * Math.sin(f),
            y: d * Math.sin(f) + e * Math.cos(f)
        };
    };
}), b.register('wSwKo5', function(d, h) {
    a(d.exports, 'ReplaceVisualEditingPreview', function() {
        return g;
    });
    var c = b('2pEsK'),
        d = b('Am0b71'),
        e = b('KDS1x'),
        f = b('83+vO');
    const g = (a, b, d) => {
        const h = (0, f.FetchVisualEditingPreview)(),
            i = (0, e.FetchCurrentlyEditedDevice)();
        if (!i || !h)
            return;
        const j = i.layers.isOnNaturalDepth() ? void 0 : b + i.layers.getDepthShift();
        (0, d.default)({
            deviceOption: h.deviceOption,
            id: c.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: j,
            layerId: i.layers.getLayer(),
            name: h.name,
            isPreview: !0,
            options: {
                ...h.options,
                ...d
            },
            placedByClient: !0,
            state: h.deviceOption.defaultState
        });
    };
}), b.register('Am0b71', function(d, c) {
    a(d.exports, 'default', function() {
        return e;
    });
    var c = b('dAmf5'),
        d = b('jgFbX');
    var e = a => {
        (0, c.default)().worldManager.devices.getDeviceById(a.id) && (0, d.default)(a);
    };
}), b.register('/Lvpl17', function(b, d) {
    a(b.exports, 'FetchOptionSchemaProperty', function() {
        return c;
    });
    const c = (a, b) => {
        var d, e, f;
        const g = a.deviceOption.optionSchema.options.find(a => a.key === b);
        return {
            min: null === (d = null == g ? void 0 : g.option.props) || void 0 === d ? void 0 : d.min,
            max: null === (e = null == g ? void 0 : g.option.props) || void 0 === e ? void 0 : e.max,
            step: null === (f = null == g ? void 0 : g.option.props) || void 0 === f ? void 0 : f.step
        };
    };
}), b.register('1Xmw+1', function(g, h) {
    a(g.exports, 'default', function() {
        return e;
    });
    var c = b('PUlKf'),
        d = b('EdRoV');
    var e = a => {
        const f = (0, d.default)((0, c.default)());
        a.colliders.forEach(a => {
            var g, h, i;
            const j = a.bodyId;
            null === (g = null == f ? void 0 : f.physics.getBody()) || void 0 === g || null === (h = g.character) || void 0 === h || null === (i = h.ignoredStaticBodies) || void 0 === i || i.add(j);
        });
    };
});