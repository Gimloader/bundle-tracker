function t(t, i, e, a) {
    Object.defineProperty(t, i, {
        get: e,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("hHHMP", (function(e, a) {
    var h;
    h = e.exports, Object.defineProperty(h, "__esModule", {
        value: !0,
        configurable: !0
    }), t(e.exports, "default", (function() {
        return S
    }));
    var s = i("divCp"),
        o = i("7w7xg"),
        r = i("bNmF9"),
        n = i("5FMGA"),
        l = i("6Tpu2"),
        d = i("alREA"),
        p = i("bvStP"),
        u = i("7LkVp"),
        c = i("4uojN"),
        v = i("fHf8O"),
        g = i("cnijD"),
        w = i("050o1"),
        f = i("gwuwo"),
        b = i("cK78N"),
        x = i("kbbzW"),
        y = i("bDCcz");
    const m = 100,
        C = 200;
    class O extends r.default {
        createVisuals() {
            var t, i, e, a, h, s;
            (this.addPart(this.propOption.imageUrl), this.options.UseColliders) && (null === (t = this.propOption) || void 0 === t || null === (i = t.circleColliders) || void 0 === i || i.forEach((t => {
                this.addCircleCollider(t)
            })), null === (e = this.propOption) || void 0 === e || null === (a = e.rectColliders) || void 0 === a || a.forEach((t => {
                this.addRectCollider(t)
            })), null === (h = this.propOption) || void 0 === h || null === (s = h.ellipseColliders) || void 0 === s || s.forEach((t => {
                this.addEllipseCollider(t)
            })));
            this.options.shadowsEnabled && 0 === this.options.Angle && this.propOption.shadows.forEach((t => {
                this.addShadow(t)
            })), this.createHealthbar(), this.updateHealthbar(this.state.healthPercent), this.showing || this.hideInstantly()
        }
        hide() {
            this.showing = !1, this.sprite && this.sprite.view && this.tweens.add({
                targets: this.sprite.view,
                alpha: 0,
                duration: m
            }), this.healthbarContainer && this.healthbarContainer.view && this.tweens.add({
                targets: this.healthbarContainer.view,
                alpha: 0,
                duration: m
            }), this.shadows.forEach((t => this.tweens.add({
                targets: t,
                alphaMultip: 0,
                duration: m
            })))
        }
        hideInstantly() {
            this.showing = !1, this.sprite && this.sprite.view && (this.sprite.view.alpha = 0), this.healthbarContainer && this.healthbarContainer.view && (this.healthbarContainer.view.alpha = 0), this.shadows.forEach((t => {
                t.alphaMultip = 0
            }))
        }
        show() {
            this.showing = !0, this.sprite && this.sprite.view && this.tweens.add({
                targets: this.sprite.view,
                alpha: this.visibleAlpha,
                duration: m
            }), this.healthbarContainer && this.healthbarContainer.view && this.tweens.add({
                targets: this.healthbarContainer.view,
                alpha: 1,
                duration: m
            }), this.shadows.forEach((t => this.tweens.add({
                targets: t,
                alphaMultip: this.getShadowVisibleAlpha(),
                duration: m
            })))
        }
        constructor(t) {
            var i;
            super(t), (0, s.default)(this, "showing", !0), (0, s.default)(this, "healthbarShowTween", null), (0, s.default)(this, "healthbarHideTween", null), (0, s.default)(this, "createHealthbar", (() => {
                this.canBeDamaged() && this.options.healthbar !== n.HealthbarMode.off && (this.healthbarContainer = this.parts.add.container({}), this.healthbarContainer2 = this.parts.add.container({
                    parent: this.healthbarContainer.view
                }), this.healthbarContainer.view.x = this.x, this.healthbarContainer.view.y = this.y + 30, this.healthbarContainer2.view.x = 0, this.healthbarContainer2.view.y = 0, this.healthbarBg = this.parts.add.rect({
                    width: C,
                    height: 10,
                    color: 0,
                    alpha: .25,
                    parent: this.healthbarContainer2.view
                }), this.healthbarContainer2.view.add(this.healthbarBg.view), this.healthbarBg.view.x = 0, this.healthbarBg.view.y = 0, this.healthbar = this.parts.add.rect({
                    width: C,
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
                }), this.healthbarContainer2.view.add(this.healthbarMark.view), this.healthbarMark.view.x = 99, this.healthbarMark.view.y = 0, this.options.healthbar === n.HealthbarMode.whenHit && (this.healthbarContainer2.view.alpha = 0), this.positionHealthbar())
            })), (0, s.default)(this, "positionHealthbar", (() => {
                if (!this.canBeDamaged()) return;
                if (this.options.healthbar === n.HealthbarMode.off) return;
                if (!this.sprite.view || !this.healthbarContainer.view) return;
                const t = this.sprite.getBounds();
                this.healthbarContainer.view.x = (t.left + t.right) / 2, this.healthbarContainer.view.y = t.bottom + 30
            })), (0, s.default)(this, "tweenHealthbarOnHit", (() => {
                var t, i;
                this.options.healthbar === n.HealthbarMode.whenHit && (null === (t = this.healthbarShowTween) || void 0 === t || t.stop(), this.healthbarShowTween = this.tweens.add({
                    targets: this.healthbarContainer2.view,
                    alpha: 1,
                    duration: m,
                    ease: Phaser.Math.Easing.Sine.InOut
                }), null === (i = this.healthbarHideTween) || void 0 === i || i.stop(), this.healthbarHideTween = this.tweens.add({
                    targets: this.healthbarContainer2.view,
                    alpha: 0,
                    duration: 350,
                    delay: 1e3,
                    ease: Phaser.Math.Easing.Sine.InOut
                }))
            })), (0, s.default)(this, "updateHealthbar", (t => {
                if (!this.canBeDamaged()) return;
                if (this.options.healthbar === n.HealthbarMode.off) return;
                const i = null != t ? t : 1;
                this.healthbar.view.scaleX = i, this.healthbar.view.x = -200 * (1 - i) / 2, this.healthbarBg.view.alpha = 0, this.healthbar.view.alpha = 0, this.healthbarMark.view.alpha = 0, i > 0 && (this.healthbar.view.alpha = 1, this.healthbarBg.view.alpha = 1, this.healthbarMark.view.alpha = this.healthbar.view.alpha, this.healthbarMark.view.x = C * i - 100 - 1)
            })), (0, s.default)(this, "onStateChange", (t => {
                if ("visible" === t && (this.state.visible ? ((0, x.default)(this), this.show()) : this.hide()), "hitData" === t) {
                    const t = JSON.parse(this.state.hitData);
                    void 0 !== t.alpha && void 0 !== t.damageToDeal && this.onHealthChange(t)
                }
            })), (0, s.default)(this, "onHealthChange", (t => {
                if ((null == t ? void 0 : t.damageToDeal) > 0) {
                    let i = null == t ? void 0 : t.x,
                        e = null == t ? void 0 : t.y;
                    if (!i || !e) {
                        const t = this.boundingBox.getBoundingBox(),
                            a = {
                                x: t.x + t.width / 2,
                                y: t.y + t.height / 2
                            };
                        i = a.x, e = a.y
                    }
                    const a = Phaser.Math.Snap.To(i, 20),
                        h = Phaser.Math.Snap.To(e, 20);
                    (0, f.default)().worldManager.projectiles.damageMarkers.basic.applyDamage({
                        markerId: this.id,
                        damage: t.damageToDeal,
                        x: a,
                        y: h
                    })
                }
                this.updateVisibleAlpha(t.alpha), this.spriteFlashOverlay && this.spriteFlashOverlay.view && (this.spriteFlashOverlay.view.alpha = 1, this.tweens.add({
                    targets: this.spriteFlashOverlay.view,
                    alpha: 0,
                    duration: 200
                })), this.sprite && this.sprite.view && this.tweens.add({
                    targets: this.sprite.view,
                    alpha: this.visibleAlpha,
                    duration: m
                }), this.shadows.forEach((t => this.tweens.add({
                    targets: t,
                    alphaMultip: this.getShadowVisibleAlpha(),
                    duration: m
                }))), this.updateHealthbar(t.alpha), this.tweenHealthbarOnHit()
            })), (0, s.default)(this, "addVisualEditing", (() => {
                const t = (0, v.default)((0, d.default)(this.propOption.imageUrl)),
                    i = (0, b.FetchOptionSchemaProperty)(this, "Scale"),
                    e = t.width * this.propOption.scaleMultip,
                    a = t.height * this.propOption.scaleMultip,
                    h = {
                        x: (.5 - this.propOption.originX) * e,
                        y: (.5 - this.propOption.originY) * a
                    },
                    s = (0, u.GetPosAfterTransform)(h.x, h.y, this.options.Scale, this.options.Angle);
                Math.max(0, 50 - e * Math.max(.5, i.min)), Math.max(0, 50 - a * Math.max(.5, i.min));
                this.visualEditing.add.box({
                    x: s.x,
                    y: s.y,
                    angle: this.options.Angle,
                    width: e * this.options.Scale + 0,
                    height: a * this.options.Scale + 0,
                    minWidth: e * Math.max(.1, i.min) + 0,
                    maxWidth: e * i.max + 0,
                    minHeight: a * Math.max(.1, i.min) + 0,
                    maxHeight: a * i.max + 0,
                    onChange: t => {
                        const i = (t.height - 0) / a,
                            h = t.angle,
                            s = {
                                x: (.5 - this.propOption.originX) * e,
                                y: (.5 - this.propOption.originY) * a
                            },
                            o = (0, u.GetPosAfterTransform)(s.x, s.y, i, h);
                        (0, g.ReplaceVisualEditingPreview)(t.x - o.x, t.y - o.y, {
                            Angle: h,
                            Scale: i
                        })
                    }
                })
            })), (0, s.default)(this, "addPart", (t => {
                this.sprite = this.parts.add.sprite({
                    imageId: (0, d.default)(t),
                    imageUrl: (0, d.default)(t),
                    originX: this.propOption.originX,
                    originY: this.propOption.originY,
                    onReady: () => {
                        this.boundingBox.clearCached(), this.updateWirePoint(), this.addVisualEditing(), setTimeout((() => {
                            this.fixBoundingBox(), this.positionHealthbar()
                        }), 0)
                    }
                }), this.sprite.view.scaleX = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.scaleY = (this.options.Scale || 1) * this.propOption.scaleMultip, this.sprite.view.angle = this.options.Angle, this.sprite.view.alpha = this.visibleAlpha, this.options.FlipX && (this.sprite.view.scaleX *= -1), this.options.Tint && (this.sprite.view.tint = Phaser.Display.Color.HexStringToColor(this.options.Tint).color), this.canBeDamaged() && (this.spriteFlashOverlay = this.parts.add.sprite({
                    imageId: (0, d.default)(t),
                    imageUrl: (0, d.default)(t),
                    originX: this.propOption.originX,
                    originY: this.propOption.originY,
                    flipX: this.options.FlipX,
                    depthChange: 10
                }), this.spriteFlashOverlay.view.scaleX = (this.options.Scale || 1) * this.propOption.scaleMultip, this.spriteFlashOverlay.view.scaleY = (this.options.Scale || 1) * this.propOption.scaleMultip, this.spriteFlashOverlay.view.angle = this.options.Angle, this.spriteFlashOverlay.view.alpha = 0, this.spriteFlashOverlay.view.tint = 16777215, this.spriteFlashOverlay.view.tintFill = !0), this.boundingBox.clearCached(), this.updateWirePoint()
            })), (0, s.default)(this, "updateWirePoint", (() => {
                if (!(0, c.isSavedVersion)() || this.isPreview) return;
                const t = this.boundingBox.getBoundingBox();
                this.wirePoints.setBoth(t.x + t.width / 2, t.y + t.height / 2)
            })), (0, s.default)(this, "addCircleCollider", (t => {
                const i = this.options.FlipX ? -t.x : t.x,
                    e = (0, u.GetPosAfterTransform)(i, t.y, this.options.Scale, this.options.Angle);
                this.colliders.add.circle({
                    r: t.r * this.options.Scale,
                    x: e.x,
                    y: e.y
                })
            })), (0, s.default)(this, "addRectCollider", (t => {
                const i = this.options.FlipX ? -t.x : t.x,
                    e = this.options.FlipX ? -t.angle : t.angle,
                    a = t.w * this.options.Scale,
                    h = t.h * this.options.Scale,
                    s = (0, u.GetPosAfterTransform)(i, t.y, this.options.Scale, this.options.Angle);
                this.colliders.add.box({
                    x: s.x,
                    y: s.y,
                    w: a,
                    h: h,
                    angle: this.options.Angle + e
                })
            })), (0, s.default)(this, "addEllipseCollider", (t => {
                const i = this.options.FlipX ? -t.x : t.x,
                    e = this.options.FlipX ? -t.angle : t.angle,
                    a = (0, u.GetPosAfterTransform)(i, t.y, this.options.Scale, this.options.Angle);
                this.colliders.add.ellipse({
                    x: a.x,
                    y: a.y,
                    r1: t.r1 * this.options.Scale,
                    r2: t.r2 * this.options.Scale,
                    angle: this.options.Angle + e
                })
            })), (0, s.default)(this, "addShadow", (t => {
                if ((0, y.isPlatformer)()) return;
                const i = (0, u.GetPosAfterTransform)(t.x, t.y, this.options.Scale, 0);
                this.shadows.add({
                    x: this.options.FlipX ? -i.x : i.x,
                    y: i.y,
                    r1: t.r1 * this.options.Scale,
                    r2: t.r2 * this.options.Scale,
                    alphaMultip: this.getShadowVisibleAlpha(),
                    depth: this.options.shadowsPlacement === n.ShadowsPlacement.beneathProp ? this.layers.getGlobalDepth() - (0, w.default)(1) : 0
                })
            })), (0, s.default)(this, "canBeDamaged", (() => this.options.canBeDamaged)), (0, s.default)(this, "updateVisibleAlpha", (t => {
                var i;
                const e = 0 === t ? 0 : .75 * (null !== (i = this.state.healthPercent) && void 0 !== i ? i : 1) + .25;
                var a;
                this.visibleAlpha = e * (null !== (a = this.options.Alpha) && void 0 !== a ? a : 1)
            })), (0, s.default)(this, "getShadowVisibleAlpha", (() => {
                return 0 === this.visibleAlpha ? 0 : null !== (t = this.options.Alpha) && void 0 !== t ? t : 1;
                var t
            })), (0, s.default)(this, "checkIfCollidersEnabled", (() => this.state.visible && this.state.healthPercent > 0)), (0, s.default)(this, "fixBoundingBox", (() => {
                if (!this.options.FlipX) return;
                if (this.boundingBox.isHardcoded()) return;
                if (this.isPreview) return;
                const t = this.boundingBox.getBoundingBox(),
                    i = t.x + t.width - this.x;
                this.boundingBox.setHardcoded({
                    x: -i,
                    y: t.y - this.y,
                    width: t.width,
                    height: t.height
                })
            })), this.updateVisibleAlpha(null !== (i = this.state.healthPercent) && void 0 !== i ? i : 1);
            const e = (0, o.default)(this.options.propId);
            var a;
            e && (this.propOption = e, (0, l.InGamePhase)() && !this.state.visible && (this.showing = !1), this.layers.setDefaultLayer(null !== (a = e.defaultLayer) && void 0 !== a ? a : p.default.DepthSortedCharactersAndDevices), this.createVisuals())
        }
    }
    var S = O
})), i.register("5FMGA", (function(i, e) {
    let a;
    var h;
    let s;
    var o;
    t(i.exports, "ShadowsPlacement", (function() {
        return a
    })), t(i.exports, "HealthbarMode", (function() {
        return s
    })), (h = a || (a = {})).floor = "Floor", h.beneathProp = "Beneath Prop", (o = s || (s = {})).off = "Off", o.on = "On", o.whenHit = "When Hit"
})), i.register("7LkVp", (function(i, e) {
    t(i.exports, "GetPosAfterTransform", (function() {
        return a
    }));
    const a = (t, i, e, a) => {
        const h = t * e,
            s = i * e,
            o = Phaser.Math.DegToRad(a);
        return {
            x: h * Math.cos(o) - s * Math.sin(o),
            y: h * Math.sin(o) + s * Math.cos(o)
        }
    }
})), i.register("cnijD", (function(e, a) {
    t(e.exports, "ReplaceVisualEditingPreview", (function() {
        return n
    }));
    var h = i("dWqri"),
        s = i("eCsxR"),
        o = i("ittx1"),
        r = i("dNzyU");
    const n = (t, i, e) => {
        const a = (0, r.FetchVisualEditingPreview)(),
            n = (0, o.FetchCurrentlyEditedDevice)();
        if (!n || !a) return;
        const l = n.layers.isOnNaturalDepth() ? void 0 : i + n.layers.getDepthShift();
        (0, s.default)({
            deviceOption: a.deviceOption,
            id: h.VisualEditingConstants.previewId,
            x: t,
            y: i,
            depth: l,
            layerId: n.layers.getLayer(),
            name: a.name,
            isPreview: !0,
            options: {
                ...a.options,
                ...e
            },
            placedByClient: !0,
            state: a.deviceOption.defaultState
        })
    }
})), i.register("eCsxR", (function(e, a) {
    t(e.exports, "default", (function() {
        return o
    }));
    var h = i("gwuwo"),
        s = i("fCcDT");
    var o = t => {
        (0, h.default)().worldManager.devices.getDeviceById(t.id) && (0, s.default)(t)
    }
})), i.register("cK78N", (function(i, e) {
    t(i.exports, "FetchOptionSchemaProperty", (function() {
        return a
    }));
    const a = (t, i) => {
        var e, a, h;
        const s = t.deviceOption.optionSchema.options.find((t => t.key === i));
        return {
            min: null === (e = null == s ? void 0 : s.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (a = null == s ? void 0 : s.option.props) || void 0 === a ? void 0 : a.max,
            step: null === (h = null == s ? void 0 : s.option.props) || void 0 === h ? void 0 : h.step
        }
    }
})), i.register("kbbzW", (function(e, a) {
    t(e.exports, "default", (function() {
        return o
    }));
    var h = i("fhnJp"),
        s = i("1UlqS");
    var o = t => {
        const i = (0, s.default)((0, h.default)());
        t.colliders.forEach((t => {
            var e, a, h;
            const s = t.bodyId;
            null === (e = null == i ? void 0 : i.physics.getBody()) || void 0 === e || null === (a = e.character) || void 0 === a || null === (h = a.ignoredStaticBodies) || void 0 === h || h.add(s)
        }))
    }
}));