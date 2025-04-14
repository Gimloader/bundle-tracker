function e(e, t, i, a) {
    Object.defineProperty(e, t, {
        get: i,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("1PnOo", (function(i, a) {
    var s;
    s = i.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return y
    }));
    var n = t("divCp"),
        r = t("4uojN"),
        o = t("6Tpu2"),
        d = t("cnijD"),
        h = t("cK78N"),
        l = t("bNmF9"),
        c = t("2vrTm"),
        p = t("alREA"),
        u = t("050o1"),
        v = t("bDCcz"),
        f = t("81UFP"),
        g = t("bvStP"),
        w = t("Bn6v3");
    class m extends l.default {
        constructor(e) {
            super(e), (0, n.default)(this, "onStateChange", (e => {
                (0, o.InPreGamePhase)() || "active" === e && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.tweenAlpha(1)) : (this.interactiveZones.setForceDisabled(!0), this.tweenAlpha(0)))
            })), (0, n.default)(this, "createPreviewVisuals", (() => {
                const e = this.options.skinId.replace("character_", ""),
                    t = (0, p.default)(`characters/spine/normalized_preview/${e}.png`);
                this.skin = this.parts.add.sprite({
                    y: 50,
                    imageId: t,
                    imageUrl: t,
                    flipX: this.options.flipX,
                    manualDepth: this.options.useNaturalDepth ? (0, w.GetCharacterDepthFromYData)(this.y + 34, 1) : void 0,
                    depthChange: (0, u.default)(2),
                    onReady: e => {
                        e.view.setScale(.28), e.view.setOrigin(.5, 1), e.view.alpha = this.state.active ? 1 : 0, !this.options.activeOnStart && (0, o.InPreGamePhase)() && (e.view.alpha = .5)
                    }
                })
            })), (0, n.default)(this, "createSpineVisuals", (() => {
                this.spine = this.parts.add.characterSpine({
                    y: 34,
                    skinId: this.options.skinId,
                    manualDepth: this.options.useNaturalDepth ? (0, w.GetCharacterDepthFromYData)(this.y + 34, 1) : void 0,
                    flipX: this.options.flipX
                })
            })), (0, n.default)(this, "createShadow", (() => {
                (0, v.isPlatformer)() || (this.shadow = this.parts.add.sprite({
                    y: 45,
                    imageId: "character-shadow",
                    imageUrl: (0, p.default)("characters/shadow.png"),
                    onReady: e => {
                        e.view.setOrigin(.5, 1), e.view.setScale(f.SHADOW_SCALE), e.view.alpha = this.state.active ? f.SHADOW_ALPHA : 0, !this.options.activeOnStart && (0, o.InPreGamePhase)() && (e.view.alpha = .5 * f.SHADOW_ALPHA)
                    }
                }))
            })), (0, n.default)(this, "setupInteractivity", (() => {
                this.options.interactionEnabled && (this.interactiveZone = this.interactiveZones.add.circle({
                    r: this.options.radius
                }), this.interactiveZones.setForceDisabled(!this.state.active), this.interactiveZones.setInfo({
                    message: this.options.interactionMessage,
                    allowedToInteract: !0,
                    duration: this.options.interactionDuration
                }), this.interactiveZones.setCanInteractThroughColliders(!1), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(c.Messages.interacted)
                })
            })), (0, n.default)(this, "tweenAlpha", (e => {
                var t, i;
                (null === (t = this.spine) || void 0 === t ? void 0 : t.view) && this.tweens.add({
                    targets: this.spine.view,
                    alpha: e,
                    duration: 100
                }), (null === (i = this.shadow) || void 0 === i ? void 0 : i.view) && this.tweens.add({
                    targets: this.shadow.view,
                    alpha: e,
                    duration: 100
                })
            })), (0, n.default)(this, "setupVisualEditing", (() => {
                if (!(0, o.InPreGamePhase)() || !(0, r.isSavedVersion)()) return;
                if (!this.options.interactionEnabled) return;
                const e = (0, h.FetchOptionSchemaProperty)(this, "radius");
                this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: e.min,
                    maxRadius: e.max,
                    rotable: !1,
                    onChange: e => {
                        (0, d.ReplaceVisualEditingPreview)(e.x, e.y, {
                            radius: e.radius
                        })
                    }
                })
            })), this.layers.setDefaultLayer(g.default.DepthSortedCharactersAndDevices), (0, o.InPreGamePhase)() || this.isPreview ? this.createPreviewVisuals() : this.createSpineVisuals(), this.createShadow(), this.setupInteractivity(), this.setupVisualEditing()
        }
    }
    var y = m
})), t.register("cnijD", (function(i, a) {
    e(i.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var s = t("dWqri"),
        n = t("eCsxR"),
        r = t("ittx1"),
        o = t("dNzyU");
    const d = (e, t, i) => {
        const a = (0, o.FetchVisualEditingPreview)(),
            d = (0, r.FetchCurrentlyEditedDevice)();
        if (!d || !a) return;
        const h = d.layers.isOnNaturalDepth() ? void 0 : t + d.layers.getDepthShift();
        (0, n.default)({
            deviceOption: a.deviceOption,
            id: s.VisualEditingConstants.previewId,
            x: e,
            y: t,
            depth: h,
            layerId: d.layers.getLayer(),
            name: a.name,
            isPreview: !0,
            options: {
                ...a.options,
                ...i
            },
            placedByClient: !0,
            state: a.deviceOption.defaultState
        })
    }
})), t.register("eCsxR", (function(i, a) {
    e(i.exports, "default", (function() {
        return r
    }));
    var s = t("gwuwo"),
        n = t("fCcDT");
    var r = e => {
        (0, s.default)().worldManager.devices.getDeviceById(e.id) && (0, n.default)(e)
    }
})), t.register("cK78N", (function(t, i) {
    e(t.exports, "FetchOptionSchemaProperty", (function() {
        return a
    }));
    const a = (e, t) => {
        var i, a, s;
        const n = e.deviceOption.optionSchema.options.find((e => e.key === t));
        return {
            min: null === (i = null == n ? void 0 : n.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (a = null == n ? void 0 : n.option.props) || void 0 === a ? void 0 : a.max,
            step: null === (s = null == n ? void 0 : n.option.props) || void 0 === s ? void 0 : s.step
        }
    }
})), t.register("2vrTm", (function(t, i) {
    e(t.exports, "Messages", (function() {
        return a
    }));
    let a;
    (a || (a = {})).interacted = "interacted"
}));