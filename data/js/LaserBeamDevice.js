function e(e, t, a, i) {
    Object.defineProperty(e, t, {
        get: a,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("fdAQD", (function(a, i) {
    var s;
    s = a.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(a.exports, "default", (function() {
        return A
    }));
    var n = t("divCp"),
        r = t("bNmF9"),
        o = t("b1oqb"),
        d = t("36IJb"),
        c = t("6Tpu2"),
        h = t("4uojN"),
        l = t("cK78N"),
        p = t("cnijD"),
        m = t("k0pDL"),
        v = t("4Ik63"),
        u = t("bvStP");
    const f = .35;
    class g extends r.default {
        createPath() {
            if (!this.options.showPath) return;
            const e = Phaser.Math.DegToRad(this.options.angle),
                t = 16 * Math.floor((this.options.distance - 55 - 24) / 16),
                a = Math.cos(e) * t,
                i = Math.sin(e) * t,
                s = -a / 2,
                n = -i / 2,
                r = a / 2,
                h = i / 2,
                l = Math.floor(t / 16),
                p = (r - s) / l,
                m = (h - n) / l,
                v = (0, c.InPreGamePhase)() ? f : (1 - this.activeFactor) * f,
                g = (0, c.InPreGamePhase)() ? Phaser.BlendModes.NORMAL : Phaser.BlendModes.ADD;
            for (let e = 0; e <= l; e++) {
                const t = s + e * p,
                    a = n + e * m;
                this.parts.add.sprite({
                    ...o.DotAsset,
                    depthChange: Math.min(n, h) - a,
                    ignoreInput: !0,
                    layerId: u.default.DevicesUnderCharacters,
                    x: t,
                    y: a,
                    onReady: e => {
                        e.view.tint = (0, d.GetNumberFromHexColor)(this.options.laserColor), e.view.alpha = v, e.view.blendMode = g, e.view.setScale(.2), this.dots.push(e)
                    }
                })
            }
        }
        constructor(e) {
            super(e), (0, n.default)(this, "activeFactor", 1), (0, n.default)(this, "animationsReady", !1), (0, n.default)(this, "dots", []), (0, n.default)(this, "onUpdate", (() => {
                (0, c.InGamePhaseVisible)() && (this.laser.view.scaleY = (.5 * Math.random() + .5) * this.activeFactor, this.origin.view.scale = .03 * Math.random() * this.activeFactor + this.base.baseScale, this.endPoint.view.scale = .03 * Math.random() * this.activeFactor + this.base.baseScale, this.options.showPath && this.dots.forEach((e => {
                    e.view.alpha = (1 - this.activeFactor) * f
                })))
            })), (0, n.default)(this, "onStateChange", (e => {
                if ("active" === e) {
                    const e = this.state.active ? 1 : 0;
                    if (this.tweens.add({
                            targets: this,
                            activeFactor: e,
                            duration: 150,
                            delay: 200 * e
                        }), !this.animationsReady) return;
                    this.state.active && !this.prevState.active ? (this.origin.view.play((0, v.GetAnimName)(v.Anims.toActive, this.options.appearance)), this.endPoint.view.play((0, v.GetAnimName)(v.Anims.toActive, this.options.appearance))) : !this.state.active && this.prevState.active && (this.origin.view.play((0, v.GetAnimName)(v.Anims.toInactive, this.options.appearance)), this.endPoint.view.play((0, v.GetAnimName)(v.Anims.toInactive, this.options.appearance)))
                }
            })), (0, n.default)(this, "onMessage", (e => {
                "hit" === e.key && (0, m.OnHit)(e.data)
            })), (0, n.default)(this, "setupVisualEditing", (() => {
                if (!(0, c.InPreGamePhase)() || !(0, h.isSavedVersion)()) return;
                const e = (0, l.FetchOptionSchemaProperty)(this, "distance");
                this.visualEditing.add.circle({
                    radius: this.options.distance / 2 + 40,
                    angle: this.options.angle - 90,
                    minRadius: e.min,
                    maxRadius: e.max,
                    onChange: e => {
                        (0, p.ReplaceVisualEditingPreview)(e.x, e.y, {
                            distance: 2 * (e.radius - 40),
                            angle: e.angle + 90
                        })
                    }
                })
            })), this.base = o.bases[this.options.appearance], this.setupVisualEditing();
            const t = Phaser.Math.DegToRad(this.options.angle),
                a = Math.cos(t) * this.options.distance,
                i = Math.sin(t) * this.options.distance;
            this.createPath(), this.origin = this.parts.add.animatedSprite({
                ...this.base,
                x: -a / 2,
                y: -i / 2
            }), this.endPoint = this.parts.add.animatedSprite({
                ...this.base,
                x: a / 2,
                y: i / 2,
                onReady: e => {
                    this.animationsReady = !0, this.state.active || (0, c.InPreGamePhase)() ? (this.origin.view.play((0, v.GetAnimName)(v.Anims.active, this.options.appearance)), e.view.play((0, v.GetAnimName)(v.Anims.active, this.options.appearance))) : (this.origin.view.play((0, v.GetAnimName)(v.Anims.inactive, this.options.appearance)), e.view.play((0, v.GetAnimName)(v.Anims.inactive, this.options.appearance)))
                }
            }), this.laser = this.parts.add.sprite({
                ...o.LaserAsset,
                layerId: u.default.DevicesAboveCharacters
            }), this.origin.view.rotation = t, this.endPoint.view.rotation = this.origin.view.rotation + Math.PI, this.origin.view.setScale(this.base.baseScale), this.endPoint.view.setScale(this.base.baseScale), this.laser.view.rotation = t, this.laser.view.blendMode = Phaser.BlendModes.ADD, this.laser.view.tint = (0, d.GetNumberFromHexColor)(this.options.laserColor), this.laser.view.scaleX = (this.options.distance - 55) / 600, this.laser.view.scaleY = .75, this.options.showOrigin || (this.origin.view.alpha = 0), this.options.showEndPoint || (this.endPoint.view.alpha = 0), (0, c.InGamePhase)() && !this.state.active && (this.activeFactor = 0, this.laser.view.scaleY = 0)
        }
    }
    var A = g
})), t.register("b1oqb", (function(a, i) {
    e(a.exports, "LaserAsset", (function() {
        return o
    })), e(a.exports, "DotAsset", (function() {
        return d
    })), e(a.exports, "bases", (function() {
        return l
    }));
    var s = t("alREA"),
        n = t("4Ik63"),
        r = t("f1h2y");
    const o = {
            imageId: (0, s.default)("devices/laser_beam/laser.png"),
            imageUrl: (0, s.default)("devices/laser_beam/laser.png")
        },
        d = {
            imageId: (0, s.default)("devices/laser_beam/dot.png"),
            imageUrl: (0, s.default)("devices/laser_beam/dot.png")
        },
        c = r.LaserBeamAppearance.standard,
        h = r.LaserBeamAppearance.plant,
        l = {
            [c]: {
                baseScale: .36,
                spritesheetId: (0, s.default)("devices/laser_beam/standard_base.png"),
                spritesheetUrl: (0, s.default)("devices/laser_beam/standard_base.png"),
                frameWidth: 215,
                frameHeight: 130,
                animations: [{
                    animName: (0, n.GetAnimName)(n.Anims.inactive, c),
                    frameRate: 1,
                    animFrames: {
                        start: 0,
                        end: 0
                    }
                }, {
                    animName: (0, n.GetAnimName)(n.Anims.toActive, c),
                    repeat: 0,
                    frameRate: 24,
                    animFrames: {
                        start: 0,
                        end: 7
                    }
                }, {
                    animName: (0, n.GetAnimName)(n.Anims.active, c),
                    frameRate: 1,
                    animFrames: {
                        start: 7,
                        end: 7
                    }
                }, {
                    animName: (0, n.GetAnimName)(n.Anims.toInactive, c),
                    repeat: 0,
                    frameRate: 24,
                    animFrames: {
                        start: 7,
                        end: 0
                    }
                }]
            },
            [h]: {
                baseScale: .5,
                spritesheetId: (0, s.default)("devices/laser_beam/plant_base.png"),
                spritesheetUrl: (0, s.default)("devices/laser_beam/plant_base.png"),
                frameWidth: 127,
                frameHeight: 122,
                animations: [{
                    animName: (0, n.GetAnimName)(n.Anims.inactive, h),
                    frameRate: 12,
                    animFrames: {
                        start: 0,
                        end: 0
                    }
                }, {
                    animName: (0, n.GetAnimName)(n.Anims.toActive, h),
                    repeat: 0,
                    frameRate: 24,
                    animFrames: {
                        start: 0,
                        end: 4
                    }
                }, {
                    animName: (0, n.GetAnimName)(n.Anims.active, h),
                    frameRate: 12,
                    animFrames: {
                        start: 4,
                        end: 4
                    }
                }, {
                    animName: (0, n.GetAnimName)(n.Anims.toInactive, h),
                    repeat: 0,
                    frameRate: 24,
                    animFrames: {
                        start: 4,
                        end: 0
                    }
                }]
            }
        }
})), t.register("4Ik63", (function(t, a) {
    let i;
    var s;
    e(t.exports, "Anims", (function() {
        return i
    })), e(t.exports, "GetAnimName", (function() {
        return n
    })), (s = i || (i = {})).active = "ACTIVE", s.inactive = "INACTIVE", s.toActive = "TO_ACTIVE", s.toInactive = "TO_INACTIVE";
    const n = (e, t) => "LASER_BEAM_DEVICE_ORIGIN_ANIM_" + t + e
})), t.register("f1h2y", (function(t, a) {
    let i;
    var s;
    e(t.exports, "LaserBeamAppearance", (function() {
        return i
    })), (s = i || (i = {})).standard = "Standard", s.plant = "Plant"
})), t.register("cK78N", (function(t, a) {
    e(t.exports, "FetchOptionSchemaProperty", (function() {
        return i
    }));
    const i = (e, t) => {
        var a, i, s;
        const n = e.deviceOption.optionSchema.options.find((e => e.key === t));
        return {
            min: null === (a = null == n ? void 0 : n.option.props) || void 0 === a ? void 0 : a.min,
            max: null === (i = null == n ? void 0 : n.option.props) || void 0 === i ? void 0 : i.max,
            step: null === (s = null == n ? void 0 : n.option.props) || void 0 === s ? void 0 : s.step
        }
    }
})), t.register("cnijD", (function(a, i) {
    e(a.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var s = t("dWqri"),
        n = t("eCsxR"),
        r = t("ittx1"),
        o = t("dNzyU");
    const d = (e, t, a) => {
        const i = (0, o.FetchVisualEditingPreview)(),
            d = (0, r.FetchCurrentlyEditedDevice)();
        if (!d || !i) return;
        const c = d.layers.isOnNaturalDepth() ? void 0 : t + d.layers.getDepthShift();
        (0, n.default)({
            deviceOption: i.deviceOption,
            id: s.VisualEditingConstants.previewId,
            x: e,
            y: t,
            depth: c,
            layerId: d.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...a
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        })
    }
})), t.register("eCsxR", (function(a, i) {
    e(a.exports, "default", (function() {
        return r
    }));
    var s = t("gwuwo"),
        n = t("fCcDT");
    var r = e => {
        (0, s.default)().worldManager.devices.getDeviceById(e.id) && (0, n.default)(e)
    }
})), t.register("k0pDL", (function(a, i) {
    e(a.exports, "OnHit", (function() {
        return c
    }));
    var s = t("fhnJp"),
        n = t("4xLrO"),
        r = t("gwuwo"),
        o = t("ePPug"),
        d = t("iG5Lo");
    const c = e => {
        const {
            characterId: t,
            damage: a,
            type: i
        } = e;
        if (t && a && i) {
            const e = (0, o.AmISpectator)() ? (0, n.FetchSpectatedId)() : (0, s.default)();
            (0, r.default)().worldManager.projectiles.damageMarkers.characters.applyDamage({
                characterId: t,
                damage: a,
                type: i
            }), t === e && (0, d.default)({
                type: i
            })
        }
    }
}));