function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _y;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....');
    const v = 100, w = 200;
    class x extends h.default {
        createVisuals() {
            var y, z, A, B, C, D;
            (this.addPart(this.propOption.imageUrl), this.options.UseColliders) && (null === (y = this.propOption) || void 0 === y || null === (z = y.circleColliders) || void 0 === z || z.forEach(E => {
                this.addCircleCollider(E);
            }), null === (A = this.propOption) || void 0 === A || null === (B = A.rectColliders) || void 0 === B || B.forEach(E => {
                this.addRectCollider(E);
            }), null === (C = this.propOption) || void 0 === C || null === (D = C.ellipseColliders) || void 0 === D || D.forEach(E => {
                this.addEllipseCollider(E);
            }));
            this.options.shadowsEnabled && 0 === this.options.Angle && this.propOption.shadows.forEach(E => {
                this.addShadow(E);
            }), this.createHealthbar(), this.updateHealthbar(this.state.healthPercent), this.showing || this.hideInstantly();
        }
        hide() {
            this.showing = !1, this.sprite && this.sprite.view && this.tweens.add({
                targets: this.sprite.view,
                alpha: 0,
                duration: v
            }), this.healthbarContainer && this.healthbarContainer.view && this.tweens.add({
                targets: this.healthbarContainer.view,
                alpha: 0,
                duration: v
            }), this.shadows.forEach(y => this.tweens.add({
                targets: y,
                alphaMultip: 0,
                duration: v
            }));
        }
        hideInstantly() {
            this.showing = !1, this.sprite && this.sprite.view && (this.sprite.view.alpha = 0), this.healthbarContainer && this.healthbarContainer.view && (this.healthbarContainer.view.alpha = 0), this.shadows.forEach(y => {
                y.alphaMultip = 0;
            });
        }
        show() {
            this.showing = !0, this.sprite && this.sprite.view && this.tweens.add({
                targets: this.sprite.view,
                alpha: this.visibleAlpha,
                duration: v
            }), this.healthbarContainer && this.healthbarContainer.view && this.tweens.add({
                targets: this.healthbarContainer.view,
                alpha: 1,
                duration: v
            }), this.shadows.forEach(y => this.tweens.add({
                targets: y,
                alphaMultip: this.getShadowVisibleAlpha(),
                duration: v
            }));
        }
        constructor(y) {
            var z;
            super(y), (0, f.default)(this, 'showing', !0), (0, f.default)(this, 'healthbarShowTween', null), (0, f.default)(this, 'healthbarHideTween', null), (0, f.default)(this, 'createHealthbar', () => {
                this.canBeDamaged() && this.options.healthbar !== i.HealthbarMode.off && (this.healthbarContainer = this.parts.add.container({}), this.healthbarContainer2 = this.parts.add.container({ parent: this.healthbarContainer.view }), this.healthbarContainer.view.x = this.x, this.healthbarContainer.view.y = this.y + 30, this.healthbarContainer2.view.x = 0, this.healthbarContainer2.view.y = 0, this.healthbarBg = this.parts.add.rect({
                    width: w,
                    height: 10,
                    color: 0,
                    alpha: 0.25,
                    parent: this.healthbarContainer2.view
                }), this.healthbarContainer2.view.add(this.healthbarBg.view), this.healthbarBg.view.x = 0, this.healthbarBg.view.y = 0, this.healthbar = this.parts.add.rect({
                    width: w,
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
                }), this.healthbarContainer2.view.add(this.healthbarMark.view), this.healthbarMark.view.x = 99, this.healthbarMark.view.y = 0, this.options.healthbar === i.HealthbarMode.whenHit && (this.healthbarContainer2.view.alpha = 0), this.positionHealthbar());
            }), (0, f.default)(this, 'positionHealthbar', () => {
                if (!this.canBeDamaged())
                    return;
                if (this.options.healthbar === i.HealthbarMode.off)
                    return;
                if (!this.sprite.view || !this.healthbarContainer.view)
                    return;
                const A = this.sprite.getBounds();
                this.healthbarContainer.view.x = (A.left + A.right) / 2, this.healthbarContainer.view.y = A.bottom + 30;
            }), (0, f.default)(this, 'tweenHealthbarOnHit', () => {
                var A, B;
                this.options.healthbar === i.HealthbarMode.whenHit && (null === (A = this.healthbarShowTween) || void 0 === A || A.stop(), this.healthbarShowTween = this.tweens.add({
                    targets: this.healthbarContainer2.view,
                    alpha: 1,
                    duration: v,
                    ease: Phaser.Math.Easing.Sine.InOut
                }), null === (B = this.healthbarHideTween) || void 0 === B || B.stop(), this.healthbarHideTween = this.tweens.add({
                    targets: this.healthbarContainer2.view,
                    alpha: 0,
                    duration: 350,
                    delay: 1000,
                    ease: Phaser.Math.Easing.Sine.InOut
                }));
            }), (0, f.default)(this, 'updateHealthbar', A => {
                if (!this.canBeDamaged())
                    return;
                if (this.options.healthbar === i.HealthbarMode.off)
                    return;
                const B = null != A ? A : 1;
                this.healthbar.view.scaleX = B, this.healthbar.view.x = -200 * (1 - B) / 2, this.healthbarBg.view.alpha = 0, this.healthbar.view.alpha = 0, this.healthbarMark.view.alpha = 0, B > 0 && (this.healthbar.view.alpha = 1, this.healthbarBg.view.alpha = 1, this.healthbarMark.view.alpha = this.healthbar.view.alpha, this.healthbarMark.view.x = w * B - 100 - 1);
            }), (0, f.default)(this, 'onStateChange', A => {
                if ('visible' === A && (this.state.visible ? ((0, t.default)(this), this.show()) : this.hide()), 'hitData' === A) {
                    const B = JSON.parse(this.state.hitData);
                    void 0 !== B.alpha && void 0 !== B.damageToDeal && this.onHealthChange(B);
                }
            }), (0, f.default)(this, 'onHealthChange', A => {
                if ((null == A ? void 0 : A.damageToDeal) > 0) {
                    let B = null == A ? void 0 : A.x, C = null == A ? void 0 : A.y;
                    if (!B || !C) {
                        const D = this.boundingBox.getBoundingBox(), E = {
                                x: D.x + D.width / 2,
                                y: D.y + D.height / 2
                            };
                        B = E.x, C = E.y;
                    }
                    const F = Phaser.Math.Snap.To(B, 20), G = Phaser.Math.Snap.To(C, 20);
                    (0, r.default)().worldManager.projectiles.damageMarkers.basic.applyDamage({
                        markerId: this.id,
                        damage: D.damageToDeal,
                        x: F,
                        y: G
                    });
                }
                this.updateVisibleAlpha(D.alpha), this.spriteFlashOverlay && this.spriteFlashOverlay.view && (this.spriteFlashOverlay.view.alpha = 1, this.tweens.add({
                    targets: this.spriteFlashOverlay.view,
                    alpha: 0,
                    duration: 200
                })), this.sprite && this.sprite.view && this.tweens.add({
                    targets: this.sprite.view,
                    alpha: this.visibleAlpha,
                    duration: v
                }), this.shadows.forEach(F => this.tweens.add({
                    targets: F,
                    alphaMultip: this.getShadowVisibleAlpha(),
                    duration: v
                })), this.updateHealthbar(D.alpha), this.tweenHealthbarOnHit();
            }), (0, f.default)(this, 'addVisualEditing', () => {
                const A = (0, o.default)((0, k.default)(this.propOption.imageUrl)), B = (0, s.FetchOptionSchemaProperty)(this, 'Scale'), C = A.width * this.propOption.scaleMultip, D = A.height * this.propOption.scaleMultip, E = {
                        x: (0.5 - this.propOption.originX) * C,
                        y: (0.5 - this.propOption.originY) * D
                    }, F = (0, m.GetPosAfterTransform)(E.x, E.y, this.options.Scale, this.options.Angle);
                Math.max(0, 50 - C * Math.max(0.5, B.min)), Math.max(0, 50 - D * Math.max(0.5, B.min));
                this.visualEditing.add.box({
                    x: F.x,
                    y: F.y,
                    angle: this.options.Angle,
                    width: C * this.options.Scale + 0,
                    height: D * this.options.Scale + 0,
                    minWidth: C * Math.max(0.1, B.min) + 0,
                    maxWidth: C * B.max + 0,
                    minHeight: D * Math.max(0.1, B.min) + 0,
                    maxHeight: D * B.max + 0,
                    onChange: G => {
                        const H = (G.height - 0) / D, I = G.angle, J = {
                                x: (0.5 - this.propOption.originX) * C,
                                y: (0.5 - this.propOption.originY) * D
                            }, K = (0, m.GetPosAfterTransform)(J.x, J.y, H, I);
                        (0, p.ReplaceVisualEditingPreview)(G.x - K.x, G.y - K.y, {
                            Angle: I,
                            Scale: H
                        });
                    }
                });
            }), (0, f.default)(this, 'addPart', A => {
                this.sprite = this.parts.add.sprite({
                    imageId: (0, k.default)(A),
                    imageUrl: (0, k.default)(A),
                    originX: this.propOption.originX,
                    originY: this.propOption.originY,
                    onReady: () => {
                        this.boundingBox.clearCached(), this.updateWirePoint(), this.addVisualEditing(), setTimeout(() => {
                            this.fixBoundingBox(), this.positionHealthbar();
                        }, 0);
                    }
                }), this.sprite.view.scaleX = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.scaleY = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.angle = this.options.Angle, this.sprite.view.alpha = this.visibleAlpha, this.options.FlipX && (this.sprite.view.scaleX *= -1), this.options.Tint && (this.sprite.view.tint = Phaser.Display.Color.HexStringToColor(this.options.Tint).color), this.canBeDamaged() && (this.spriteFlashOverlay = this.parts.add.sprite({
                    imageId: (0, k.default)(A),
                    imageUrl: (0, k.default)(A),
                    originX: this.propOption.originX,
                    originY: this.propOption.originY,
                    flipX: this.options.FlipX,
                    depthChange: 10
                }), this.spriteFlashOverlay.view.scaleX = (this.options.Scale || 1) * this.propOption.scaleMultip, this.spriteFlashOverlay.view.scaleY = (this.options.Scale || 1) * this.propOption.scaleMultip, this.spriteFlashOverlay.view.angle = this.options.Angle, this.spriteFlashOverlay.view.alpha = 0, this.spriteFlashOverlay.view.tint = 16777215, this.spriteFlashOverlay.view.tintFill = !0), this.boundingBox.clearCached(), this.updateWirePoint();
            }), (0, f.default)(this, 'updateWirePoint', () => {
                if (!(0, n.isSavedVersion)() || this.isPreview)
                    return;
                const A = this.boundingBox.getBoundingBox();
                this.wirePoints.setBoth(A.x + A.width / 2, A.y + A.height / 2);
            }), (0, f.default)(this, 'addCircleCollider', A => {
                const B = this.options.FlipX ? -A.x : A.x, C = (0, m.GetPosAfterTransform)(B, A.y, this.options.Scale, this.options.Angle);
                this.colliders.add.circle({
                    r: A.r * this.options.Scale,
                    x: C.x,
                    y: C.y
                });
            }), (0, f.default)(this, 'addRectCollider', A => {
                const B = this.options.FlipX ? -A.x : A.x, C = this.options.FlipX ? -A.angle : A.angle, D = A.w * this.options.Scale, E = A.h * this.options.Scale, F = (0, m.GetPosAfterTransform)(B, A.y, this.options.Scale, this.options.Angle);
                this.colliders.add.box({
                    x: F.x,
                    y: F.y,
                    w: D,
                    h: E,
                    angle: this.options.Angle + C
                });
            }), (0, f.default)(this, 'addEllipseCollider', A => {
                const B = this.options.FlipX ? -A.x : A.x, C = this.options.FlipX ? -A.angle : A.angle, D = (0, m.GetPosAfterTransform)(B, A.y, this.options.Scale, this.options.Angle);
                this.colliders.add.ellipse({
                    x: D.x,
                    y: D.y,
                    r1: A.r1 * this.options.Scale,
                    r2: A.r2 * this.options.Scale,
                    angle: this.options.Angle + C
                });
            }), (0, f.default)(this, 'addShadow', A => {
                if ((0, u.isPlatformer)())
                    return;
                const B = (0, m.GetPosAfterTransform)(A.x, A.y, this.options.Scale, 0);
                this.shadows.add({
                    x: this.options.FlipX ? -B.x : B.x,
                    y: B.y,
                    r1: A.r1 * this.options.Scale,
                    r2: A.r2 * this.options.Scale,
                    alphaMultip: this.getShadowVisibleAlpha(),
                    depth: this.options.shadowsPlacement === i.ShadowsPlacement.beneathProp ? this.layers.getGlobalDepth() - (0, q.default)(1) : 0
                });
            }), (0, f.default)(this, 'canBeDamaged', () => this.options.canBeDamaged), (0, f.default)(this, 'updateVisibleAlpha', A => {
                var B;
                const C = 0 === A ? 0 : 0.75 * (null !== (B = this.state.healthPercent) && void 0 !== B ? B : 1) + 0.25;
                var D;
                this.visibleAlpha = C * (null !== (D = this.options.Alpha) && void 0 !== D ? D : 1);
            }), (0, f.default)(this, 'getShadowVisibleAlpha', () => {
                return 0 === this.visibleAlpha ? 0 : null !== (y = this.options.Alpha) && void 0 !== y ? y : 1;
                var A;
            }), (0, f.default)(this, 'checkIfCollidersEnabled', () => this.state.visible && this.state.healthPercent > 0), (0, f.default)(this, 'fixBoundingBox', () => {
                if (!this.options.FlipX)
                    return;
                if (this.boundingBox.isHardcoded())
                    return;
                if (this.isPreview)
                    return;
                const A = this.boundingBox.getBoundingBox(), B = A.x + A.width - this.x;
                this.boundingBox.setHardcoded({
                    x: -B,
                    y: A.y - this.y,
                    width: A.width,
                    height: A.height
                });
            }), this.updateVisibleAlpha(null !== (z = this.state.healthPercent) && void 0 !== z ? z : 1);
            const A = (0, g.default)(this.options.propId);
            var B;
            A && (this.propOption = A, (0, j.InGamePhase)() && !this.state.visible && (this.showing = !1), this.layers.setDefaultLayer(null !== (B = A.defaultLayer) && void 0 !== B ? B : l.default.DepthSortedCharactersAndDevices), this.createVisuals());
        }
    }
    var _y = x;
}), b.register('.....', function (c, d) {
    let e;
    var f;
    let g;
    var h;
    a(c.exports, 'ShadowsPlacement', function () {
        return e;
    }), a(c.exports, 'HealthbarMode', function () {
        return g;
    }), (f = e || (e = {})).floor = 'Floor', f.beneathProp = 'Beneath Prop', (h = g || (g = {})).off = 'Off', h.on = 'On', h.whenHit = 'When Hit';
}), b.register('.....', function (c, d) {
    a(c.exports, 'GetPosAfterTransform', function () {
        return _e;
    });
    const _e = (f, g, h, i) => {
        const j = f * h, k = g * h, l = Phaser.Math.DegToRad(i);
        return {
            x: j * Math.cos(l) - k * Math.sin(l),
            y: j * Math.sin(l) + k * Math.cos(l)
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    const _i = (j, k, l) => {
        const m = (0, h.FetchVisualEditingPreview)(), n = (0, g.FetchCurrentlyEditedDevice)();
        if (!n || !m)
            return;
        const o = n.layers.isOnNaturalDepth() ? void 0 : k + n.layers.getDepthShift();
        (0, f.default)({
            deviceOption: m.deviceOption,
            id: e.VisualEditingConstants.previewId,
            x: j,
            y: k,
            depth: o,
            layerId: n.layers.getLayer(),
            name: m.name,
            isPreview: !0,
            options: {
                ...m.options,
                ...l
            },
            placedByClient: !0,
            state: m.deviceOption.defaultState
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    var _g = h => {
        (0, e.default)().worldManager.devices.getDeviceById(h.id) && (0, f.default)(h);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function () {
        return _e;
    });
    const _e = (f, g) => {
        var h, i, j;
        const k = f.deviceOption.optionSchema.options.find(l => l.key === g);
        return {
            min: null === (h = null == k ? void 0 : k.option.props) || void 0 === h ? void 0 : h.min,
            max: null === (i = null == k ? void 0 : k.option.props) || void 0 === i ? void 0 : i.max,
            step: null === (j = null == k ? void 0 : k.option.props) || void 0 === j ? void 0 : j.step
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    var _g = h => {
        const i = (0, f.default)((0, e.default)());
        h.colliders.forEach(j => {
            var k, l, m;
            const n = j.bodyId;
            null === (k = null == i ? void 0 : i.physics.getBody()) || void 0 === k || null === (l = k.character) || void 0 === l || null === (m = l.ignoredStaticBodies) || void 0 === m || m.add(n);
        });
    };
});