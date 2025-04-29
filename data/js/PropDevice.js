function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('GfpF3', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _y;
    });
    var f = b('s/YA9'),
        g = b('ZMrtj'),
        h = b('ltxDW'),
        i = b('5YVcp'),
        j = b('UkCpC'),
        k = b('UaUBz0'),
        l = b('GIe9o'),
        m = b('O4yrD'),
        n = b('hycyg'),
        o = b('+7143'),
        p = b('u/WlI21'),
        q = b('H4eGM'),
        r = b('heTaO'),
        s = b('uc4mA17'),
        t = b('/YaFu1'),
        u = b('UCu0V');
    const v = 100,
        w = 200;
    class x extends h.default {
        createVisuals() {
            var y, z, A, B, C, D;
            (this.addPart(this.propOption.imageUrl), this.options.UseColliders) && (null === (y = this.propOption) || void 0 === y || null === (z = y.circleColliders) || void 0 === z || z.forEach(y => {
                this.addCircleCollider(y);
            }), null === (A = this.propOption) || void 0 === A || null === (B = A.rectColliders) || void 0 === B || B.forEach(y => {
                this.addRectCollider(y);
            }), null === (C = this.propOption) || void 0 === C || null === (D = C.ellipseColliders) || void 0 === D || D.forEach(y => {
                this.addEllipseCollider(y);
            }));
            this.options.shadowsEnabled && 0 === this.options.Angle && this.propOption.shadows.forEach(y => {
                this.addShadow(y);
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
            }), this.shadows.forEach(a => this.tweens.add({
                targets: a,
                alphaMultip: 0,
                duration: v
            }));
        }
        hideInstantly() {
            this.showing = !1, this.sprite && this.sprite.view && (this.sprite.view.alpha = 0), this.healthbarContainer && this.healthbarContainer.view && (this.healthbarContainer.view.alpha = 0), this.shadows.forEach(a => {
                a.alphaMultip = 0;
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
            }), this.shadows.forEach(a => this.tweens.add({
                targets: a,
                alphaMultip: this.getShadowVisibleAlpha(),
                duration: v
            }));
        }
        constructor(y) {
            var z;
            super(y), (0, f.default)(this, 'showing', !0), (0, f.default)(this, 'healthbarShowTween', null), (0, f.default)(this, 'healthbarHideTween', null), (0, f.default)(this, 'createHealthbar', () => {
                this.canBeDamaged() && this.options.healthbar !== i.HealthbarMode.off && (this.healthbarContainer = this.parts.add.container({}), this.healthbarContainer2 = this.parts.add.container({
                    parent: this.healthbarContainer.view
                }), this.healthbarContainer.view.x = this.x, this.healthbarContainer.view.y = this.y + 30, this.healthbarContainer2.view.x = 0, this.healthbarContainer2.view.y = 0, this.healthbarBg = this.parts.add.rect({
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
            }), (0, f.default)(this, 'updateHealthbar', y => {
                if (!this.canBeDamaged())
                    return;
                if (this.options.healthbar === i.HealthbarMode.off)
                    return;
                const A = null != y ? y : 1;
                this.healthbar.view.scaleX = A, this.healthbar.view.x = -200 * (1 - A) / 2, this.healthbarBg.view.alpha = 0, this.healthbar.view.alpha = 0, this.healthbarMark.view.alpha = 0, A > 0 && (this.healthbar.view.alpha = 1, this.healthbarBg.view.alpha = 1, this.healthbarMark.view.alpha = this.healthbar.view.alpha, this.healthbarMark.view.x = w * A - 100 - 1);
            }), (0, f.default)(this, 'onStateChange', y => {
                if ('visible' === y && (this.state.visible ? ((0, t.default)(this), this.show()) : this.hide()), 'hitData' === y) {
                    const A = JSON.parse(this.state.hitData);
                    void 0 !== A.alpha && void 0 !== A.damageToDeal && this.onHealthChange(A);
                }
            }), (0, f.default)(this, 'onHealthChange', y => {
                if ((null == y ? void 0 : y.damageToDeal) > 0) {
                    let A = null == y ? void 0 : y.x,
                        B = null == y ? void 0 : y.y;
                    if (!A || !B) {
                        const C = this.boundingBox.getBoundingBox(),
                            D = {
                                x: C.x + C.width / 2,
                                y: C.y + C.height / 2
                            };
                        A = D.x, B = D.y;
                    }
                    const C = Phaser.Math.Snap.To(A, 20),
                        D = Phaser.Math.Snap.To(B, 20);
                    (0, r.default)().worldManager.projectiles.damageMarkers.basic.applyDamage({
                        markerId: this.id,
                        damage: y.damageToDeal,
                        x: C,
                        y: D
                    });
                }
                this.updateVisibleAlpha(y.alpha), this.spriteFlashOverlay && this.spriteFlashOverlay.view && (this.spriteFlashOverlay.view.alpha = 1, this.tweens.add({
                    targets: this.spriteFlashOverlay.view,
                    alpha: 0,
                    duration: 200
                })), this.sprite && this.sprite.view && this.tweens.add({
                    targets: this.sprite.view,
                    alpha: this.visibleAlpha,
                    duration: v
                }), this.shadows.forEach(y => this.tweens.add({
                    targets: y,
                    alphaMultip: this.getShadowVisibleAlpha(),
                    duration: v
                })), this.updateHealthbar(y.alpha), this.tweenHealthbarOnHit();
            }), (0, f.default)(this, 'addVisualEditing', () => {
                const A = (0, o.default)((0, k.default)(this.propOption.imageUrl)),
                    B = (0, s.FetchOptionSchemaProperty)(this, 'Scale'),
                    C = A.width * this.propOption.scaleMultip,
                    D = A.height * this.propOption.scaleMultip,
                    E = {
                        x: (0.5 - this.propOption.originX) * C,
                        y: (0.5 - this.propOption.originY) * D
                    },
                    F = (0, m.GetPosAfterTransform)(E.x, E.y, this.options.Scale, this.options.Angle);
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
                    onChange: A => {
                        const G = (A.height - 0) / D,
                            H = A.angle,
                            I = {
                                x: (0.5 - this.propOption.originX) * C,
                                y: (0.5 - this.propOption.originY) * D
                            },
                            J = (0, m.GetPosAfterTransform)(I.x, I.y, G, H);
                        (0, p.ReplaceVisualEditingPreview)(A.x - J.x, A.y - J.y, {
                            Angle: H,
                            Scale: G
                        });
                    }
                });
            }), (0, f.default)(this, 'addPart', y => {
                this.sprite = this.parts.add.sprite({
                    imageId: (0, k.default)(y),
                    imageUrl: (0, k.default)(y),
                    originX: this.propOption.originX,
                    originY: this.propOption.originY,
                    onReady: () => {
                        this.boundingBox.clearCached(), this.updateWirePoint(), this.addVisualEditing(), setTimeout(() => {
                            this.fixBoundingBox(), this.positionHealthbar();
                        }, 0);
                    }
                }), this.sprite.view.scaleX = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.scaleY = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.angle = this.options.Angle, this.sprite.view.alpha = this.visibleAlpha, this.options.FlipX && (this.sprite.view.scaleX *= -1), this.options.Tint && (this.sprite.view.tint = Phaser.Display.Color.HexStringToColor(this.options.Tint).color), this.canBeDamaged() && (this.spriteFlashOverlay = this.parts.add.sprite({
                    imageId: (0, k.default)(y),
                    imageUrl: (0, k.default)(y),
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
            }), (0, f.default)(this, 'addCircleCollider', y => {
                const A = this.options.FlipX ? -y.x : y.x,
                    B = (0, m.GetPosAfterTransform)(A, y.y, this.options.Scale, this.options.Angle);
                this.colliders.add.circle({
                    r: y.r * this.options.Scale,
                    x: B.x,
                    y: B.y
                });
            }), (0, f.default)(this, 'addRectCollider', y => {
                const A = this.options.FlipX ? -y.x : y.x,
                    B = this.options.FlipX ? -y.angle : y.angle,
                    C = y.w * this.options.Scale,
                    D = y.h * this.options.Scale,
                    E = (0, m.GetPosAfterTransform)(A, y.y, this.options.Scale, this.options.Angle);
                this.colliders.add.box({
                    x: E.x,
                    y: E.y,
                    w: C,
                    h: D,
                    angle: this.options.Angle + B
                });
            }), (0, f.default)(this, 'addEllipseCollider', y => {
                const A = this.options.FlipX ? -y.x : y.x,
                    B = this.options.FlipX ? -y.angle : y.angle,
                    C = (0, m.GetPosAfterTransform)(A, y.y, this.options.Scale, this.options.Angle);
                this.colliders.add.ellipse({
                    x: C.x,
                    y: C.y,
                    r1: y.r1 * this.options.Scale,
                    r2: y.r2 * this.options.Scale,
                    angle: this.options.Angle + B
                });
            }), (0, f.default)(this, 'addShadow', y => {
                if ((0, u.isPlatformer)())
                    return;
                const A = (0, m.GetPosAfterTransform)(y.x, y.y, this.options.Scale, 0);
                this.shadows.add({
                    x: this.options.FlipX ? -A.x : A.x,
                    y: A.y,
                    r1: y.r1 * this.options.Scale,
                    r2: y.r2 * this.options.Scale,
                    alphaMultip: this.getShadowVisibleAlpha(),
                    depth: this.options.shadowsPlacement === i.ShadowsPlacement.beneathProp ? this.layers.getGlobalDepth() - (0, q.default)(1) : 0
                });
            }), (0, f.default)(this, 'canBeDamaged', () => this.options.canBeDamaged), (0, f.default)(this, 'updateVisibleAlpha', y => {
                var A;
                const B = 0 === y ? 0 : 0.75 * (null !== (A = this.state.healthPercent) && void 0 !== A ? A : 1) + 0.25;
                var C;
                this.visibleAlpha = B * (null !== (C = this.options.Alpha) && void 0 !== C ? C : 1);
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
                const A = this.boundingBox.getBoundingBox(),
                    B = A.x + A.width - this.x;
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
}), b.register('5YVcp', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    a(c.exports, 'ShadowsPlacement', function() {
        return e;
    }), a(c.exports, 'HealthbarMode', function() {
        return g;
    }), (f = e || (e = {})).floor = 'Floor', f.beneathProp = 'Beneath Prop', (h = g || (g = {})).off = 'Off', h.on = 'On', h.whenHit = 'When Hit';
}), b.register('O4yrD', function(c, d) {
    a(c.exports, 'GetPosAfterTransform', function() {
        return _e;
    });
    const _e = (a, c, d, _e) => {
        const f = a * d,
            g = c * d,
            h = Phaser.Math.DegToRad(_e);
        return {
            x: f * Math.cos(h) - g * Math.sin(h),
            y: f * Math.sin(h) + g * Math.cos(h)
        };
    };
}), b.register('u/WlI21', function(c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function() {
        return _i;
    });
    var e = b('hemXM'),
        f = b('sWmxu5'),
        g = b('EzUqb'),
        h = b('GQMbT');
    const _i = (a, b, c) => {
        const j = (0, h.FetchVisualEditingPreview)(),
            k = (0, g.FetchCurrentlyEditedDevice)();
        if (!k || !j)
            return;
        const l = k.layers.isOnNaturalDepth() ? void 0 : b + k.layers.getDepthShift();
        (0, f.default)({
            deviceOption: j.deviceOption,
            id: e.VisualEditingConstants.previewId,
            x: a,
            y: b,
            depth: l,
            layerId: k.layers.getLayer(),
            name: j.name,
            isPreview: !0,
            options: {
                ...j.options,
                ...c
            },
            placedByClient: !0,
            state: j.deviceOption.defaultState
        });
    };
}), b.register('sWmxu5', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('heTaO'),
        f = b('2LtPo');
    var _g = a => {
        (0, e.default)().worldManager.devices.getDeviceById(a.id) && (0, f.default)(a);
    };
}), b.register('uc4mA17', function(c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function() {
        return _e;
    });
    const _e = (a, c) => {
        var f, g, h;
        const i = a.deviceOption.optionSchema.options.find(a => a.key === c);
        return {
            min: null === (f = null == i ? void 0 : i.option.props) || void 0 === f ? void 0 : f.min,
            max: null === (g = null == i ? void 0 : i.option.props) || void 0 === g ? void 0 : g.max,
            step: null === (h = null == i ? void 0 : i.option.props) || void 0 === h ? void 0 : h.step
        };
    };
}), b.register('/YaFu1', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('5Fjxs'),
        f = b('d7UqH');
    var _g = a => {
        const h = (0, f.default)((0, e.default)());
        a.colliders.forEach(a => {
            var i, j, k;
            const l = a.bodyId;
            null === (i = null == h ? void 0 : h.physics.getBody()) || void 0 === i || null === (j = i.character) || void 0 === j || null === (k = j.ignoredStaticBodies) || void 0 === k || k.add(l);
        });
    };
});