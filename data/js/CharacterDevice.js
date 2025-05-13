function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _t;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....'),
        n = b('.....'),
        o = b('.....'),
        p = b('.....'),
        q = b('.....'),
        r = b('.....');
    class s extends k.default {
        constructor(t) {
            super(t), (0, f.default)(this, 'onStateChange', u => {
                (0, h.InPreGamePhase)() || 'active' === u && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.tweenAlpha(1)) : (this.interactiveZones.setForceDisabled(!0), this.tweenAlpha(0)));
            }), (0, f.default)(this, 'createPreviewVisuals', () => {
                const u = this.options.skinId.replace('character_', ''),
                    v = (0, m.default)(`characters/spine/normalized_preview/${ u }.png`);
                this.skin = this.parts.add.sprite({
                    y: 50,
                    imageId: v,
                    imageUrl: v,
                    flipX: this.options.flipX,
                    manualDepth: this.options.useNaturalDepth ? (0, r.GetCharacterDepthFromYData)(this.y + 34, 1) : void 0,
                    depthChange: (0, n.default)(2),
                    onReady: w => {
                        w.view.setScale(0.28), w.view.setOrigin(0.5, 1), w.view.alpha = this.state.active ? 1 : 0, !this.options.activeOnStart && (0, h.InPreGamePhase)() && (w.view.alpha = 0.5);
                    }
                });
            }), (0, f.default)(this, 'createSpineVisuals', () => {
                this.spine = this.parts.add.characterSpine({
                    y: 34,
                    skinId: this.options.skinId,
                    manualDepth: this.options.useNaturalDepth ? (0, r.GetCharacterDepthFromYData)(this.y + 34, 1) : void 0,
                    flipX: this.options.flipX
                });
            }), (0, f.default)(this, 'createShadow', () => {
                (0, o.isPlatformer)() || (this.shadow = this.parts.add.sprite({
                    y: 45,
                    imageId: 'character-shadow',
                    imageUrl: (0, m.default)('characters/shadow.png'),
                    onReady: u => {
                        u.view.setOrigin(0.5, 1), u.view.setScale(p.SHADOW_SCALE), u.view.alpha = this.state.active ? p.SHADOW_ALPHA : 0, !this.options.activeOnStart && (0, h.InPreGamePhase)() && (u.view.alpha = 0.5 * p.SHADOW_ALPHA);
                    }
                }));
            }), (0, f.default)(this, 'setupInteractivity', () => {
                this.options.interactionEnabled && (this.interactiveZone = this.interactiveZones.add.circle({
                    r: this.options.radius
                }), this.interactiveZones.setForceDisabled(!this.state.active), this.interactiveZones.setInfo({
                    message: this.options.interactionMessage,
                    allowedToInteract: !0,
                    duration: this.options.interactionDuration
                }), this.interactiveZones.setCanInteractThroughColliders(!1), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(l.Messages.interacted);
                });
            }), (0, f.default)(this, 'tweenAlpha', u => {
                var v, w;
                (null === (v = this.spine) || void 0 === v ? void 0 : v.view) && this.tweens.add({
                    targets: this.spine.view,
                    alpha: u,
                    duration: 100
                }), (null === (w = this.shadow) || void 0 === w ? void 0 : w.view) && this.tweens.add({
                    targets: this.shadow.view,
                    alpha: u,
                    duration: 100
                });
            }), (0, f.default)(this, 'setupVisualEditing', () => {
                if (!(0, h.InPreGamePhase)() || !(0, g.isSavedVersion)())
                    return;
                if (!this.options.interactionEnabled)
                    return;
                const u = (0, j.FetchOptionSchemaProperty)(this, 'radius');
                this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: u.min,
                    maxRadius: u.max,
                    rotable: !1,
                    onChange: v => {
                        (0, i.ReplaceVisualEditingPreview)(v.x, v.y, {
                            radius: v.radius
                        });
                    }
                });
            }), this.layers.setDefaultLayer(q.default.DepthSortedCharactersAndDevices), (0, h.InPreGamePhase)() || this.isPreview ? this.createPreviewVisuals() : this.createSpineVisuals(), this.createShadow(), this.setupInteractivity(), this.setupVisualEditing();
        }
    }
    var _t = s;
}), b.register('.....', function(c, d) {
    a(c.exports, 'ReplaceVisualEditingPreview', function() {
        return _i;
    });
    var e = b('.....'),
        f = b('.....'),
        g = b('.....'),
        h = b('.....');
    const _i = (j, k, l) => {
        const m = (0, h.FetchVisualEditingPreview)(),
            n = (0, g.FetchCurrentlyEditedDevice)();
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');
    var _g = h => {
        (0, e.default)().worldManager.devices.getDeviceById(h.id) && (0, f.default)(h);
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'FetchOptionSchemaProperty', function() {
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
}), b.register('.....', function(c, d) {
    a(c.exports, 'Messages', function() {
        return _e;
    });
    let _e;
    (_e || (_e = {})).interacted = 'interacted';
});