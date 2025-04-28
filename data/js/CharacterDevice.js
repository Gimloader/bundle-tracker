function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('LxNE6', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _s(b.exports, 'default', function() {
        return _s;
    });
    var e = a('1bFPu'),
        f = a('9tz3H'),
        g = a('/pbxo'),
        h = a('IFO6W13'),
        i = a('R2Ucl10'),
        j = a('I35Ay'),
        k = a('KcL9V'),
        l = a('2Xvuf'),
        m = a('5CmLs'),
        n = a('JEGzD'),
        o = a('DWF4E'),
        p = a('JqBF0'),
        q = a('GzcmL');
    class r extends j.default {
        constructor(_s) {
            super(_s), (0, e.default)(this, 'onStateChange', _s => {
                (0, g.InPreGamePhase)() || 'active' === _s && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.tweenAlpha(1)) : (this.interactiveZones.setForceDisabled(!0), this.tweenAlpha(0)));
            }), (0, e.default)(this, 'createPreviewVisuals', () => {
                const t = this.options.skinId.replace('character_', ''),
                    u = (0, l.default)(`characters/spine/normalized_preview/${ t }.png`);
                this.skin = this.parts.add.sprite({
                    y: 50,
                    imageId: u,
                    imageUrl: u,
                    flipX: this.options.flipX,
                    manualDepth: this.options.useNaturalDepth ? (0, q.GetCharacterDepthFromYData)(this.y + 34, 1) : void 0,
                    depthChange: (0, m.default)(2),
                    onReady: t => {
                        t.view.setScale(0.28), t.view.setOrigin(0.5, 1), t.view.alpha = this.state.active ? 1 : 0, !this.options.activeOnStart && (0, g.InPreGamePhase)() && (t.view.alpha = 0.5);
                    }
                });
            }), (0, e.default)(this, 'createSpineVisuals', () => {
                this.spine = this.parts.add.characterSpine({
                    y: 34,
                    skinId: this.options.skinId,
                    manualDepth: this.options.useNaturalDepth ? (0, q.GetCharacterDepthFromYData)(this.y + 34, 1) : void 0,
                    flipX: this.options.flipX
                });
            }), (0, e.default)(this, 'createShadow', () => {
                (0, n.isPlatformer)() || (this.shadow = this.parts.add.sprite({
                    y: 45,
                    imageId: 'character-shadow',
                    imageUrl: (0, l.default)('characters/shadow.png'),
                    onReady: _s => {
                        _s.view.setOrigin(0.5, 1), _s.view.setScale(o.SHADOW_SCALE), _s.view.alpha = this.state.active ? o.SHADOW_ALPHA : 0, !this.options.activeOnStart && (0, g.InPreGamePhase)() && (_s.view.alpha = 0.5 * o.SHADOW_ALPHA);
                    }
                }));
            }), (0, e.default)(this, 'setupInteractivity', () => {
                this.options.interactionEnabled && (this.interactiveZone = this.interactiveZones.add.circle({
                    r: this.options.radius
                }), this.interactiveZones.setForceDisabled(!this.state.active), this.interactiveZones.setInfo({
                    message: this.options.interactionMessage,
                    allowedToInteract: !0,
                    duration: this.options.interactionDuration
                }), this.interactiveZones.setCanInteractThroughColliders(!1), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(k.Messages.interacted);
                });
            }), (0, e.default)(this, 'tweenAlpha', _s => {
                var t, u;
                (null === (t = this.spine) || void 0 === t ? void 0 : t.view) && this.tweens.add({
                    targets: this.spine.view,
                    alpha: _s,
                    duration: 100
                }), (null === (u = this.shadow) || void 0 === u ? void 0 : u.view) && this.tweens.add({
                    targets: this.shadow.view,
                    alpha: _s,
                    duration: 100
                });
            }), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, g.InPreGamePhase)() || !(0, f.isSavedVersion)())
                    return;
                if (!this.options.interactionEnabled)
                    return;
                const t = (0, i.FetchOptionSchemaProperty)(this, 'radius');
                this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: t.min,
                    maxRadius: t.max,
                    rotable: !1,
                    onChange: t => {
                        (0, h.ReplaceVisualEditingPreview)(t.x, t.y, {
                            radius: t.radius
                        });
                    }
                });
            }), this.layers.setDefaultLayer(p.default.DepthSortedCharactersAndDevices), (0, g.InPreGamePhase)() || this.isPreview ? this.createPreviewVisuals() : this.createSpineVisuals(), this.createShadow(), this.setupInteractivity(), this.setupVisualEditing();
        }
    }
    var _s = r;
}), a.register('IFO6W13', function(b, c) {
    e(b.exports, 'ReplaceVisualEditingPreview', function() {
        return _h;
    });
    var d = a('HqwPM'),
        e = a('+oovY4'),
        f = a('A17vD'),
        g = a('HXXiu');
    const _h = (e, a, b) => {
        const i = (0, g.FetchVisualEditingPreview)(),
            j = (0, f.FetchCurrentlyEditedDevice)();
        if (!j || !i)
            return;
        const k = j.layers.isOnNaturalDepth() ? void 0 : a + j.layers.getDepthShift();
        (0, e.default)({
            deviceOption: i.deviceOption,
            id: d.VisualEditingConstants.previewId,
            x: e,
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
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('D5xLI'),
        e = a('aIyMH');
    var _f = e => {
        (0, d.default)().worldManager.devices.getDeviceById(e.id) && (0, e.default)(e);
    };
}), a.register('R2Ucl10', function(b, c) {
    e(b.exports, 'FetchOptionSchemaProperty', function() {
        return _d;
    });
    const _d = (e, b) => {
        var e, f, g;
        const h = e.deviceOption.optionSchema.options.find(e => e.key === b);
        return {
            min: null === (e = null == h ? void 0 : h.option.props) || void 0 === e ? void 0 : e.min,
            max: null === (f = null == h ? void 0 : h.option.props) || void 0 === f ? void 0 : f.max,
            step: null === (g = null == h ? void 0 : h.option.props) || void 0 === g ? void 0 : g.step
        };
    };
}), a.register('KcL9V', function(b, c) {
    e(b.exports, 'Messages', function() {
        return _d;
    });
    let _d;
    (_d || (_d = {})).interacted = 'interacted';
});