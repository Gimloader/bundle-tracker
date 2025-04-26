function a(a, b, s, h) {
    Object.defineProperty(a, b, {
        get: s,
        set: h,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('smd1O', function(s, h) {
    var c;
    c = s.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(s.exports, 'default', function() {
        return r;
    });
    var d = b('UM8oI'),
        e = b('Bpt+p'),
        f = b('5Ux1a'),
        g = b('wSwKo5'),
        h = b('/Lvpl17'),
        i = b('sgILU'),
        j = b('SZ9Pa0'),
        k = b('JJQ0+'),
        l = b('Q0Vn8'),
        m = b('HMNV0'),
        n = b('eaWFX'),
        o = b('cMsWT'),
        p = b('Ea3Jh');
    class q extends i.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'onStateChange', a => {
                (0, f.InPreGamePhase)() || 'active' === a && (this.state.active ? (this.interactiveZones.setForceDisabled(!1), this.tweenAlpha(1)) : (this.interactiveZones.setForceDisabled(!0), this.tweenAlpha(0)));
            }), (0, d.default)(this, 'createPreviewVisuals', () => {
                const r = this.options.skinId.replace('character_', ''),
                    s = (0, k.default)(`characters/spine/normalized_preview/${ r }.png`);
                this.skin = this.parts.add.sprite({
                    y: 50,
                    imageId: s,
                    imageUrl: s,
                    flipX: this.options.flipX,
                    manualDepth: this.options.useNaturalDepth ? (0, p.GetCharacterDepthFromYData)(this.y + 34, 1) : void 0,
                    depthChange: (0, l.default)(2),
                    onReady: r => {
                        r.view.setScale(0.28), r.view.setOrigin(0.5, 1), r.view.alpha = this.state.active ? 1 : 0, !this.options.activeOnStart && (0, f.InPreGamePhase)() && (r.view.alpha = 0.5);
                    }
                });
            }), (0, d.default)(this, 'createSpineVisuals', () => {
                this.spine = this.parts.add.characterSpine({
                    y: 34,
                    skinId: this.options.skinId,
                    manualDepth: this.options.useNaturalDepth ? (0, p.GetCharacterDepthFromYData)(this.y + 34, 1) : void 0,
                    flipX: this.options.flipX
                });
            }), (0, d.default)(this, 'createShadow', () => {
                (0, m.isPlatformer)() || (this.shadow = this.parts.add.sprite({
                    y: 45,
                    imageId: 'character-shadow',
                    imageUrl: (0, k.default)('characters/shadow.png'),
                    onReady: a => {
                        a.view.setOrigin(0.5, 1), a.view.setScale(n.SHADOW_SCALE), a.view.alpha = this.state.active ? n.SHADOW_ALPHA : 0, !this.options.activeOnStart && (0, f.InPreGamePhase)() && (a.view.alpha = 0.5 * n.SHADOW_ALPHA);
                    }
                }));
            }), (0, d.default)(this, 'setupInteractivity', () => {
                this.options.interactionEnabled && (this.interactiveZone = this.interactiveZones.add.circle({
                    r: this.options.radius
                }), this.interactiveZones.setForceDisabled(!this.state.active), this.interactiveZones.setInfo({
                    message: this.options.interactionMessage,
                    allowedToInteract: !0,
                    duration: this.options.interactionDuration
                }), this.interactiveZones.setCanInteractThroughColliders(!1), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(j.Messages.interacted);
                });
            }), (0, d.default)(this, 'tweenAlpha', a => {
                var r, s;
                (null === (r = this.spine) || void 0 === r ? void 0 : r.view) && this.tweens.add({
                    targets: this.spine.view,
                    alpha: a,
                    duration: 100
                }), (null === (s = this.shadow) || void 0 === s ? void 0 : s.view) && this.tweens.add({
                    targets: this.shadow.view,
                    alpha: a,
                    duration: 100
                });
            }), (0, d.default)(this, 'setupVisualEditing', () => {
                if (!(0, f.InPreGamePhase)() || !(0, e.isSavedVersion)())
                    return;
                if (!this.options.interactionEnabled)
                    return;
                const r = (0, h.FetchOptionSchemaProperty)(this, 'radius');
                this.visualEditing.add.circle({
                    radius: this.options.radius,
                    minRadius: r.min,
                    maxRadius: r.max,
                    rotable: !1,
                    onChange: r => {
                        (0, g.ReplaceVisualEditingPreview)(r.x, r.y, {
                            radius: r.radius
                        });
                    }
                });
            }), this.layers.setDefaultLayer(o.default.DepthSortedCharactersAndDevices), (0, f.InPreGamePhase)() || this.isPreview ? this.createPreviewVisuals() : this.createSpineVisuals(), this.createShadow(), this.setupInteractivity(), this.setupVisualEditing();
        }
    }
    var r = s;
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
}), b.register('SZ9Pa0', function(b, i) {
    a(b.exports, 'Messages', function() {
        return c;
    });
    let c;
    (c || (c = {})).interacted = 'interacted';
});