function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('2QQSe', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('s/YA9'),
        g = b('u/WlI21'),
        h = b('uc4mA17'),
        i = b('yK0U7'),
        j = b('hycyg'),
        k = b('UkCpC'),
        l = b('ltxDW'),
        m = b('vKzN6'),
        n = b('u6HEq'),
        o = b('dsz4G'),
        p = b('fI6of');
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
                    onQuestionAnswered: s => {
                        this.questionsAnswered = this.questionsAnswered + 1, this.sendToServerDevice(o.Messages.answered, {
                            answer: s
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
            }), (0, f.default)(this, 'getScale', () => this.options.size / 48), (0, f.default)(this, 'onStateChange', s => {
                'enabled' === s && (this.animateEnabledChange(), this.state.enabled ? this.onEnabled() : this.onDisabled()), 'questions' === s && this.deviceUI.update({
                    eqs: (0, i.EncryptData)(JSON.parse(this.state.questions || '[]'), this.id)
                }), 'currentQuestionId' === s && (this.deviceUI.update({
                    currentQuestionId: this.state.currentQuestionId
                }), this.currentQuestionId = this.state.currentQuestionId), 'correctText' === s && this.deviceUI.update({
                    textShownWhenAnsweringCorrectly: this.state.correctText
                }), 'incorrectText' === s && this.deviceUI.update({
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
                    onChange: t => {
                        (0, g.ReplaceVisualEditingPreview)(t.x, t.y, {
                            size: t.height / 2
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
}), b.register('vKzN6', function(c, d) {
    a(c.exports, 'BaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'gimkit_live_question_device_base',
        imageUrl: (0, b('UaUBz0').default)('devices/gimkit_live_question/on_2.png')
    };
}), b.register('u6HEq', function(c, d) {
    a(c.exports, 'DisabledBaseAsset', function() {
        return _e;
    });
    const _e = {
        imageId: 'gimkit_live_question_device_base_disabled',
        imageUrl: (0, b('UaUBz0').default)('devices/gimkit_live_question/off.png')
    };
});