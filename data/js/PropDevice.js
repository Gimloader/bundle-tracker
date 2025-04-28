function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('dH9pf', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _x(b.exports, 'default', function() {
        return _x;
    });
    var e = a('1bFPu'),
        f = a('bV9vv'),
        g = a('I35Ay'),
        h = a('AA+mi'),
        i = a('/pbxo'),
        j = a('2Xvuf'),
        k = a('JqBF0'),
        l = a('YiQK+'),
        m = a('9tz3H'),
        n = a('1Chka'),
        o = a('IFO6W13'),
        p = a('5CmLs'),
        q = a('D5xLI'),
        r = a('R2Ucl10'),
        s = a('NyV64'),
        t = a('JEGzD');
    const u = 100,
        v = 200;
    class w extends g.default {
        createVisuals() {
            var _x, y, z, A, B, C;
            (this.addPart(this.propOption.imageUrl), this.options.UseColliders) && (null === (_x = this.propOption) || void 0 === _x || null === (y = _x.circleColliders) || void 0 === y || y.forEach(_x => {
                this.addCircleCollider(_x);
            }), null === (z = this.propOption) || void 0 === z || null === (A = z.rectColliders) || void 0 === A || A.forEach(_x => {
                this.addRectCollider(_x);
            }), null === (B = this.propOption) || void 0 === B || null === (C = B.ellipseColliders) || void 0 === C || C.forEach(_x => {
                this.addEllipseCollider(_x);
            }));
            this.options.shadowsEnabled && 0 === this.options.Angle && this.propOption.shadows.forEach(_x => {
                this.addShadow(_x);
            }), this.createHealthbar(), this.updateHealthbar(this.state.healthPercent), this.showing || this.hideInstantly();
        }
        hide() {
            this.showing = !1, this.sprite && this.sprite.view && this.tweens.add({
                targets: this.sprite.view,
                alpha: 0,
                duration: u
            }), this.healthbarContainer && this.healthbarContainer.view && this.tweens.add({
                targets: this.healthbarContainer.view,
                alpha: 0,
                duration: u
            }), this.shadows.forEach(_x => this.tweens.add({
                targets: _x,
                alphaMultip: 0,
                duration: u
            }));
        }
        hideInstantly() {
            this.showing = !1, this.sprite && this.sprite.view && (this.sprite.view.alpha = 0), this.healthbarContainer && this.healthbarContainer.view && (this.healthbarContainer.view.alpha = 0), this.shadows.forEach(_x => {
                _x.alphaMultip = 0;
            });
        }
        show() {
            this.showing = !0, this.sprite && this.sprite.view && this.tweens.add({
                targets: this.sprite.view,
                alpha: this.visibleAlpha,
                duration: u
            }), this.healthbarContainer && this.healthbarContainer.view && this.tweens.add({
                targets: this.healthbarContainer.view,
                alpha: 1,
                duration: u
            }), this.shadows.forEach(_x => this.tweens.add({
                targets: _x,
                alphaMultip: this.getShadowVisibleAlpha(),
                duration: u
            }));
        }
        constructor(_x) {
            var y;
            super(_x), (0, e.default)(this, 'showing', !0), (0, e.default)(this, 'healthbarShowTween', null), (0, e.default)(this, 'healthbarHideTween', null), (0, e.default)(this, 'createHealthbar', () => {
                this.canBeDamaged() && this.options.healthbar !== h.HealthbarMode.off && (this.healthbarContainer = this.parts.add.container({}), this.healthbarContainer2 = this.parts.add.container({
                    parent: this.healthbarContainer.view
                }), this.healthbarContainer.view.x = this.x, this.healthbarContainer.view.y = this.y + 30, this.healthbarContainer2.view.x = 0, this.healthbarContainer2.view.y = 0, this.healthbarBg = this.parts.add.rect({
                    width: v,
                    height: 10,
                    color: 0,
                    alpha: 0.25,
                    parent: this.healthbarContainer2.view
                }), this.healthbarContainer2.view.add(this.healthbarBg.view), this.healthbarBg.view.x = 0, this.healthbarBg.view.y = 0, this.healthbar = this.parts.add.rect({
                    width: v,
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
                }), this.healthbarContainer2.view.add(this.healthbarMark.view), this.healthbarMark.view.x = 99, this.healthbarMark.view.y = 0, this.options.healthbar === h.HealthbarMode.whenHit && (this.healthbarContainer2.view.alpha = 0), this.positionHealthbar());
            }), (0, e.default)(this, 'positionHealthbar', () => {
                if (!this.canBeDamaged())
                    return;
                if (this.options.healthbar === h.HealthbarMode.off)
                    return;
                if (!this.sprite.view || !this.healthbarContainer.view)
                    return;
                const z = this.sprite.getBounds();
                this.healthbarContainer.view.x = (z.left + z.right) / 2, this.healthbarContainer.view.y = z.bottom + 30;
            }), (0, e.default)(this, 'tweenHealthbarOnHit', () => {
                var z, A;
                this.options.healthbar === h.HealthbarMode.whenHit && (null === (z = this.healthbarShowTween) || void 0 === z || z.stop(), this.healthbarShowTween = this.tweens.add({
                    targets: this.healthbarContainer2.view,
                    alpha: 1,
                    duration: u,
                    ease: Phaser.Math.Easing.Sine.InOut
                }), null === (A = this.healthbarHideTween) || void 0 === A || A.stop(), this.healthbarHideTween = this.tweens.add({
                    targets: this.healthbarContainer2.view,
                    alpha: 0,
                    duration: 350,
                    delay: 1000,
                    ease: Phaser.Math.Easing.Sine.InOut
                }));
            }), (0, e.default)(this, 'updateHealthbar', _x => {
                if (!this.canBeDamaged())
                    return;
                if (this.options.healthbar === h.HealthbarMode.off)
                    return;
                const z = null != _x ? _x : 1;
                this.healthbar.view.scaleX = z, this.healthbar.view.x = -200 * (1 - z) / 2, this.healthbarBg.view.alpha = 0, this.healthbar.view.alpha = 0, this.healthbarMark.view.alpha = 0, z > 0 && (this.healthbar.view.alpha = 1, this.healthbarBg.view.alpha = 1, this.healthbarMark.view.alpha = this.healthbar.view.alpha, this.healthbarMark.view.x = v * z - 100 - 1);
            }), (0, e.default)(this, 'onStateChange', _x => {
                if ('visible' === _x && (this.state.visible ? ((0, s.default)(this), this.show()) : this.hide()), 'hitData' === _x) {
                    const z = JSON.parse(this.state.hitData);
                    void 0 !== z.alpha && void 0 !== z.damageToDeal && this.onHealthChange(z);
                }
            }), (0, e.default)(this, 'onHealthChange', _x => {
                if ((null == _x ? void 0 : _x.damageToDeal) > 0) {
                    let z = null == _x ? void 0 : _x.x,
                        A = null == _x ? void 0 : _x.y;
                    if (!z || !A) {
                        const B = this.boundingBox.getBoundingBox(),
                            C = {
                                x: B.x + B.width / 2,
                                y: B.y + B.height / 2
                            };
                        z = C.x, A = C.y;
                    }
                    const B = Phaser.Math.Snap.To(z, 20),
                        C = Phaser.Math.Snap.To(A, 20);
                    (0, q.default)().worldManager.projectiles.damageMarkers.basic.applyDamage({
                        markerId: this.id,
                        damage: _x.damageToDeal,
                        x: B,
                        y: C
                    });
                }
                this.updateVisibleAlpha(_x.alpha), this.spriteFlashOverlay && this.spriteFlashOverlay.view && (this.spriteFlashOverlay.view.alpha = 1, this.tweens.add({
                    targets: this.spriteFlashOverlay.view,
                    alpha: 0,
                    duration: 200
                })), this.sprite && this.sprite.view && this.tweens.add({
                    targets: this.sprite.view,
                    alpha: this.visibleAlpha,
                    duration: u
                }), this.shadows.forEach(_x => this.tweens.add({
                    targets: _x,
                    alphaMultip: this.getShadowVisibleAlpha(),
                    duration: u
                })), this.updateHealthbar(_x.alpha), this.tweenHealthbarOnHit();
            }), (0, e.default)(this, 'addVisualEditing', () => {
                const z = (0, n.default)((0, j.default)(this.propOption.imageUrl)),
                    A = (0, r.FetchOptionSchemaProperty)(this, 'Scale'),
                    B = z.width * this.propOption.scaleMultip,
                    C = z.height * this.propOption.scaleMultip,
                    D = {
                        x: (0.5 - this.propOption.originX) * B,
                        y: (0.5 - this.propOption.originY) * C
                    },
                    E = (0, l.GetPosAfterTransform)(D.x, D.y, this.options.Scale, this.options.Angle);
                Math.max(0, 50 - B * Math.max(0.5, A.min)), Math.max(0, 50 - C * Math.max(0.5, A.min));
                this.visualEditing.add.box({
                    x: E.x,
                    y: E.y,
                    angle: this.options.Angle,
                    width: B * this.options.Scale + 0,
                    height: C * this.options.Scale + 0,
                    minWidth: B * Math.max(0.1, A.min) + 0,
                    maxWidth: B * A.max + 0,
                    minHeight: C * Math.max(0.1, A.min) + 0,
                    maxHeight: C * A.max + 0,
                    onChange: z => {
                        const F = (z.height - 0) / C,
                            G = z.angle,
                            H = {
                                x: (0.5 - this.propOption.originX) * B,
                                y: (0.5 - this.propOption.originY) * C
                            },
                            I = (0, l.GetPosAfterTransform)(H.x, H.y, F, G);
                        (0, o.ReplaceVisualEditingPreview)(z.x - I.x, z.y - I.y, {
                            Angle: G,
                            Scale: F
                        });
                    }
                });
            }), (0, e.default)(this, 'addPart', _x => {
                this.sprite = this.parts.add.sprite({
                    imageId: (0, j.default)(_x),
                    imageUrl: (0, j.default)(_x),
                    originX: this.propOption.originX,
                    originY: this.propOption.originY,
                    onReady: () => {
                        this.boundingBox.clearCached(), this.updateWirePoint(), this.addVisualEditing(), setTimeout(() => {
                            this.fixBoundingBox(), this.positionHealthbar();
                        }, 0);
                    }
                }), this.sprite.view.scaleX = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.scaleY = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.angle = this.options.Angle, this.sprite.view.alpha = this.visibleAlpha, this.options.FlipX && (this.sprite.view.scaleX *= -1), this.options.Tint && (this.sprite.view.tint = Phaser.Display.Color.HexStringToColor(this.options.Tint).color), this.canBeDamaged() && (this.spriteFlashOverlay = this.parts.add.sprite({
                    imageId: (0, j.default)(_x),
                    imageUrl: (0, j.default)(_x),
                    originX: this.propOption.originX,
                    originY: this.propOption.originY,
                    flipX: this.options.FlipX,
                    depthChange: 10
                }), this.spriteFlashOverlay.view.scaleX = (this.options.Scale || 1) * this.propOption.scaleMultip, this.spriteFlashOverlay.view.scaleY = (this.options.Scale || 1) * this.propOption.scaleMultip, this.spriteFlashOverlay.view.angle = this.options.Angle, this.spriteFlashOverlay.view.alpha = 0, this.spriteFlashOverlay.view.tint = 16777215, this.spriteFlashOverlay.view.tintFill = !0), this.boundingBox.clearCached(), this.updateWirePoint();
            }), (0, e.default)(this, 'updateWirePoint', () => {
                if (!(0, m.isSavedVersion)() || this.isPreview)
                    return;
                const z = this.boundingBox.getBoundingBox();
                this.wirePoints.setBoth(z.x + z.width / 2, z.y + z.height / 2);
            }), (0, e.default)(this, 'addCircleCollider', _x => {
                const z = this.options.FlipX ? -_x.x : _x.x,
                    A = (0, l.GetPosAfterTransform)(z, _x.y, this.options.Scale, this.options.Angle);
                this.colliders.add.circle({
                    r: _x.r * this.options.Scale,
                    x: A.x,
                    y: A.y
                });
            }), (0, e.default)(this, 'addRectCollider', _x => {
                const z = this.options.FlipX ? -_x.x : _x.x,
                    A = this.options.FlipX ? -_x.angle : _x.angle,
                    B = _x.w * this.options.Scale,
                    C = _x.h * this.options.Scale,
                    D = (0, l.GetPosAfterTransform)(z, _x.y, this.options.Scale, this.options.Angle);
                this.colliders.add.box({
                    x: D.x,
                    y: D.y,
                    w: B,
                    h: C,
                    angle: this.options.Angle + A
                });
            }), (0, e.default)(this, 'addEllipseCollider', _x => {
                const z = this.options.FlipX ? -_x.x : _x.x,
                    A = this.options.FlipX ? -_x.angle : _x.angle,
                    B = (0, l.GetPosAfterTransform)(z, _x.y, this.options.Scale, this.options.Angle);
                this.colliders.add.ellipse({
                    x: B.x,
                    y: B.y,
                    r1: _x.r1 * this.options.Scale,
                    r2: _x.r2 * this.options.Scale,
                    angle: this.options.Angle + A
                });
            }), (0, e.default)(this, 'addShadow', _x => {
                if ((0, t.isPlatformer)())
                    return;
                const z = (0, l.GetPosAfterTransform)(_x.x, _x.y, this.options.Scale, 0);
                this.shadows.add({
                    x: this.options.FlipX ? -z.x : z.x,
                    y: z.y,
                    r1: _x.r1 * this.options.Scale,
                    r2: _x.r2 * this.options.Scale,
                    alphaMultip: this.getShadowVisibleAlpha(),
                    depth: this.options.shadowsPlacement === h.ShadowsPlacement.beneathProp ? this.layers.getGlobalDepth() - (0, p.default)(1) : 0
                });
            }), (0, e.default)(this, 'canBeDamaged', () => this.options.canBeDamaged), (0, e.default)(this, 'updateVisibleAlpha', _x => {
                var z;
                const A = 0 === _x ? 0 : 0.75 * (null !== (z = this.state.healthPercent) && void 0 !== z ? z : 1) + 0.25;
                var B;
                this.visibleAlpha = A * (null !== (B = this.options.Alpha) && void 0 !== B ? B : 1);
            }), (0, e.default)(this, 'getShadowVisibleAlpha', () => {
                return 0 === this.visibleAlpha ? 0 : null !== (_x = this.options.Alpha) && void 0 !== _x ? _x : 1;
                var z;
            }), (0, e.default)(this, 'checkIfCollidersEnabled', () => this.state.visible && this.state.healthPercent > 0), (0, e.default)(this, 'fixBoundingBox', () => {
                if (!this.options.FlipX)
                    return;
                if (this.boundingBox.isHardcoded())
                    return;
                if (this.isPreview)
                    return;
                const z = this.boundingBox.getBoundingBox(),
                    A = z.x + z.width - this.x;
                this.boundingBox.setHardcoded({
                    x: -A,
                    y: z.y - this.y,
                    width: z.width,
                    height: z.height
                });
            }), this.updateVisibleAlpha(null !== (y = this.state.healthPercent) && void 0 !== y ? y : 1);
            const z = (0, f.default)(this.options.propId);
            var A;
            z && (this.propOption = z, (0, i.InGamePhase)() && !this.state.visible && (this.showing = !1), this.layers.setDefaultLayer(null !== (A = z.defaultLayer) && void 0 !== A ? A : k.default.DepthSortedCharactersAndDevices), this.createVisuals());
        }
    }
    var _x = w;
}), a.register('AA+mi', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    t(b.exports, 'ShadowsPlacement', function() {
        return d;
    }), t(b.exports, 'HealthbarMode', function() {
        return f;
    }), (e = d || (d = {})).floor = 'Floor', e.beneathProp = 'Beneath Prop', (g = f || (f = {})).off = 'Off', g.on = 'On', g.whenHit = 'When Hit';
}), a.register('YiQK+', function(b, c) {
    t(b.exports, 'GetPosAfterTransform', function() {
        return _d;
    });
    const _d = (t, b, c, _d) => {
        const e = t * c,
            f = b * c,
            g = Phaser.Math.DegToRad(_d);
        return {
            x: e * Math.cos(g) - f * Math.sin(g),
            y: e * Math.sin(g) + f * Math.cos(g)
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
    const _h = (t, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: t,
            y: a,
            depth: k,
            layerId: j.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...b
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
}), a.register('NyV64', function(b, c) {
    t(b.exports, 'default', function() {
        return _f;
    });
    var d = a('Jfada'),
        e = a('B7ZvS');
    var _f = t => {
        const g = (0, e.default)((0, d.default)());
        t.colliders.forEach(t => {
            var h, i, j;
            const k = t.bodyId;
            null === (h = null == g ? void 0 : g.physics.getBody()) || void 0 === h || null === (i = h.character) || void 0 === i || null === (j = i.ignoredStaticBodies) || void 0 === j || j.add(k);
        });
    };
});