function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('61m84', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _t;
    });
    var f = b('s/YA9'),
        g = b('hycyg'),
        h = b('UkCpC'),
        i = b('u/WlI21'),
        j = b('uc4mA17'),
        k = b('ltxDW'),
        l = b('9tJOw0'),
        m = b('UaUBz0'),
        n = b('H4eGM'),
        o = b('UCu0V'),
        p = b('RZJBP'),
        q = b('GIe9o'),
        r = b('DKdsl');
    class s extends k.default {
        constructor(t) {
            super(t), (0, f.default)(this, 'onStateChange', t => {
                (0, h.InPreGamePhase)() || 'active' === t && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.tweenAlpha(1)) : (this.interactiveZones.setForceDisabled(!0), this.tweenAlpha(0)));
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
                    onReady: u => {
                        u.view.setScale(0.28), u.view.setOrigin(0.5, 1), u.view.alpha = this.state.active ? 1 : 0, !this.options.activeOnStart && (0, h.InPreGamePhase)() && (u.view.alpha = 0.5);
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
                    onReady: t => {
                        t.view.setOrigin(0.5, 1), t.view.setScale(p.SHADOW_SCALE), t.view.alpha = this.state.active ? p.SHADOW_ALPHA : 0, !this.options.activeOnStart && (0, h.InPreGamePhase)() && (t.view.alpha = 0.5 * p.SHADOW_ALPHA);
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
            }), (0, f.default)(this, 'tweenAlpha', t => {
                var u, v;
                (null === (u = this.spine) || void 0 === u ? void 0 : u.view) && this.tweens.add({
                    targets: this.spine.view,
                    alpha: t,
                    duration: 100
                }), (null === (v = this.shadow) || void 0 === v ? void 0 : v.view) && this.tweens.add({
                    targets: this.shadow.view,
                    alpha: t,
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
                    onChange: u => {
                        (0, i.ReplaceVisualEditingPreview)(u.x, u.y, {
                            radius: u.radius
                        });
                    }
                });
            }), this.layers.setDefaultLayer(q.default.DepthSortedCharactersAndDevices), (0, h.InPreGamePhase)() || this.isPreview ? this.createPreviewVisuals() : this.createSpineVisuals(), this.createShadow(), this.setupInteractivity(), this.setupVisualEditing();
        }
    }
    var _t = s;
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
}), b.register('9tJOw0', function(c, d) {
    a(c.exports, 'Messages', function() {
        return _e;
    });
    let _e;
    (_e || (_e = {})).interacted = 'interacted';
});