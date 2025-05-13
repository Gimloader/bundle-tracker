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
        return _s;
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
        p = b('.....');
    const q = 276;
    class r extends l.default {
        constructor(s) {
            super(s), (0, f.default)(this, 'questionsAnswered', 0), (0, f.default)(this, 'createBases', () => {
                this.base = this.parts.add.sprite(m.BaseAsset), this.disabledBase = this.parts.add.sprite(n.DisabledBaseAsset);
                const t = !this.isPreview && this.state.enabled;
                this.base.view.alpha = t ? 1 : 0, this.disabledBase.view.alpha = t ? 0 : 1, this.base.view.setScale(this.getScale()), this.disabledBase.view.setScale(this.getScale()), this.isPreview || (this.colliders.add.box({
                    x: 0,
                    y: 0,
                    w: this.getScale() * q + 20,
                    h: 96 * this.getScale()
                }), this.setupInteractiveZone());
            }), (0, f.default)(this, 'openDeviceUI', () => {
                this.deviceUI.open({
                    eqs: (0, i.EncryptData)(JSON.parse(this.state.questions || '[]'), this.id),
                    currentQuestionId: this.currentQuestionId,
                    textShownWhenAnsweringCorrectly: this.state.correctText || 'Correct!',
                    textShownWhenAnsweringIncorrectly: this.state.incorrectText || 'Incorrect!',
                    customActionText: this.options.useCustomAction ? this.options.customActionText : void 0,
                    customActionCallback: this.options.useCustomAction && this.options.channelToTriggerCustomAction ? () => {
                        this.sendToServerDevice(o.Messages.customAction);
                    } : void 0,
                    onQuestionAnswered: t => {
                        this.questionsAnswered = this.questionsAnswered + 1, this.sendToServerDevice(o.Messages.answered, {
                            answer: t
                        }), this.currentQuestionId = this.state.nextQuestionId || this.state.currentQuestionId || '', this.deviceUI.update({
                            currentQuestionId: this.currentQuestionId,
                            questionsAnswered: this.questionsAnswered
                        });
                    },
                    soundConfig: {
                        sound: this.options.sound,
                        correctSound: this.options.correctSound,
                        incorrectSound: this.options.incorrectSound,
                        actionSound: this.options.actionSound
                    },
                    closableByUser: this.options.closable,
                    questionsAnswered: this.questionsAnswered,
                    allowGoogleTranslate: p.default.session.allowGoogleTranslate
                });
            }), (0, f.default)(this, 'setupInteractiveZone', () => {
                this.interactiveZones.add.rect({
                    width: this.getScale() * q + 125,
                    height: 96 * this.getScale() + 125
                }), this.interactiveZones.setInfo({
                    message: 'Answer Questions',
                    allowedToInteract: !0
                }), this.interactiveZones.onInteraction = () => {
                    this.state.enabled && this.openDeviceUI();
                };
            }), (0, f.default)(this, 'animateEnabledChange', () => {
                this.tweens.add({
                    targets: [this.base.view],
                    duration: 350,
                    alpha: this.state.enabled ? 1 : 0
                }), this.tweens.add({
                    targets: [this.disabledBase.view],
                    duration: 350,
                    alpha: this.state.enabled ? 0 : 1
                });
            }), (0, f.default)(this, 'onEnabled', () => {
                this.interactiveZones.setForceDisabled(!1);
            }), (0, f.default)(this, 'onDisabled', () => {
                this.deviceUI.close(), this.interactiveZones.setForceDisabled(!0);
            }), (0, f.default)(this, 'getScale', () => this.options.size / 48), (0, f.default)(this, 'onStateChange', t => {
                'enabled' === t && (this.animateEnabledChange(), this.state.enabled ? this.onEnabled() : this.onDisabled()), 'questions' === t && this.deviceUI.update({
                    eqs: (0, i.EncryptData)(JSON.parse(this.state.questions || '[]'), this.id)
                }), 'currentQuestionId' === t && (this.deviceUI.update({
                    currentQuestionId: this.state.currentQuestionId
                }), this.currentQuestionId = this.state.currentQuestionId), 'correctText' === t && this.deviceUI.update({
                    textShownWhenAnsweringCorrectly: this.state.correctText
                }), 'incorrectText' === t && this.deviceUI.update({
                    textShownWhenAnsweringIncorrectly: this.state.incorrectText
                });
            }), (0, f.default)(this, 'setupVisualEditing', () => {
                if (!(0, k.InPreGamePhase)() || !(0, j.isSavedVersion)())
                    return;
                const t = (0, h.FetchOptionSchemaProperty)(this, 'size'),
                    u = 2.875;
                this.visualEditing.add.box({
                    width: 2 * this.options.size * u,
                    height: 2 * this.options.size,
                    minHeight: 2 * t.min,
                    maxHeight: 2 * t.max,
                    minWidth: 2 * t.min * u,
                    maxWidth: 2 * t.max * u,
                    keepRatio: !0,
                    rotable: !1,
                    onChange: v => {
                        (0, g.ReplaceVisualEditingPreview)(v.x, v.y, {
                            size: v.height / 2
                        });
                    }
                });
            }), this.setupVisualEditing(), this.createBases(), this.boundingBox.setHardcoded({
                width: q * this.getScale(),
                height: 96 * this.getScale()
            }), this.currentQuestionId = this.state.currentQuestionId;
        }
    }
    var _s = r;
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
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'gimkit_live_question_device_base',
        imageUrl: (0, b('.....').default)('devices/gimkit_live_question/on_2.png')
    };
}), b.register('.....', function(c, d) {
    a(c.exports, 'DisabledBaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'gimkit_live_question_device_base_disabled',
        imageUrl: (0, b('.....').default)('devices/gimkit_live_question/off.png')
    };
});