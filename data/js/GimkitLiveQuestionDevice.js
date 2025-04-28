function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Y6kqM', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _r(b.exports, 'default', function() {
        return _r;
    });
    var e = a('1bFPu'),
        f = a('IFO6W13'),
        g = a('R2Ucl10'),
        h = a('5drJf'),
        i = a('9tz3H'),
        j = a('/pbxo'),
        k = a('I35Ay'),
        l = a('2+ct9'),
        m = a('dgkkY'),
        n = a('XesPI'),
        o = a('iWivW');
    const p = 276;
    class q extends k.default {
        constructor(_r) {
            super(_r), (0, e.default)(this, 'questionsAnswered', 0), (0, e.default)(this, 'createBases', () => {
                this.base = this.parts.add.sprite(l.BaseAsset), this.disabledBase = this.parts.add.sprite(m.DisabledBaseAsset);
                const s = !this.isPreview && this.state.enabled;
                this.base.view.alpha = s ? 1 : 0, this.disabledBase.view.alpha = s ? 0 : 1, this.base.view.setScale(this.getScale()), this.disabledBase.view.setScale(this.getScale()), this.isPreview || (this.colliders.add.box({
                    x: 0,
                    y: 0,
                    w: this.getScale() * p + 20,
                    h: 96 * this.getScale()
                }), this.setupInteractiveZone());
            }), (0, e.default)(this, 'openDeviceUI', () => {
                this.deviceUI.open({
                    eqs: (0, h.EncryptData)(JSON.parse(this.state.questions || '[]'), this.id),
                    currentQuestionId: this.currentQuestionId,
                    textShownWhenAnsweringCorrectly: this.state.correctText || 'Correct!',
                    textShownWhenAnsweringIncorrectly: this.state.incorrectText || 'Incorrect!',
                    customActionText: this.options.useCustomAction ? this.options.customActionText : void 0,
                    customActionCallback: this.options.useCustomAction && this.options.channelToTriggerCustomAction ? () => {
                        this.sendToServerDevice(n.Messages.customAction);
                    } : void 0,
                    onQuestionAnswered: _r => {
                        this.questionsAnswered = this.questionsAnswered + 1, this.sendToServerDevice(n.Messages.answered, {
                            answer: _r
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
                    allowGoogleTranslate: o.default.session.allowGoogleTranslate
                });
            }), (0, e.default)(this, 'setupInteractiveZone', () => {
                this.interactiveZones.add.rect({
                    width: this.getScale() * p + 125,
                    height: 96 * this.getScale() + 125
                }), this.interactiveZones.setInfo({
                    message: 'Answer Questions',
                    allowedToInteract: !0
                }), this.interactiveZones.onInteraction = () => {
                    this.state.enabled && this.openDeviceUI();
                };
            }), (0, e.default)(this, 'animateEnabledChange', () => {
                this.tweens.add({
                    targets: [this.base.view],
                    duration: 350,
                    alpha: this.state.enabled ? 1 : 0
                }), this.tweens.add({
                    targets: [this.disabledBase.view],
                    duration: 350,
                    alpha: this.state.enabled ? 0 : 1
                });
            }), (0, e.default)(this, 'onEnabled', () => {
                this.interactiveZones.setForceDisabled(!1);
            }), (0, e.default)(this, 'onDisabled', () => {
                this.deviceUI.close(), this.interactiveZones.setForceDisabled(!0);
            }), (0, e.default)(this, 'getScale', () => this.options.size / 48), (0, e.default)(this, 'onStateChange', _r => {
                'enabled' === _r && (this.animateEnabledChange(), this.state.enabled ? this.onEnabled() : this.onDisabled()), 'questions' === _r && this.deviceUI.update({
                    eqs: (0, h.EncryptData)(JSON.parse(this.state.questions || '[]'), this.id)
                }), 'currentQuestionId' === _r && (this.deviceUI.update({
                    currentQuestionId: this.state.currentQuestionId
                }), this.currentQuestionId = this.state.currentQuestionId), 'correctText' === _r && this.deviceUI.update({
                    textShownWhenAnsweringCorrectly: this.state.correctText
                }), 'incorrectText' === _r && this.deviceUI.update({
                    textShownWhenAnsweringIncorrectly: this.state.incorrectText
                });
            }), (0, e.default)(this, 'setupVisualEditing', () => {
                if (!(0, j.InPreGamePhase)() || !(0, i.isSavedVersion)())
                    return;
                const s = (0, g.FetchOptionSchemaProperty)(this, 'size'),
                    t = 2.875;
                this.visualEditing.add.box({
                    width: 2 * this.options.size * t,
                    height: 2 * this.options.size,
                    minHeight: 2 * s.min,
                    maxHeight: 2 * s.max,
                    minWidth: 2 * s.min * t,
                    maxWidth: 2 * s.max * t,
                    keepRatio: !0,
                    rotable: !1,
                    onChange: s => {
                        (0, f.ReplaceVisualEditingPreview)(s.x, s.y, {
                            size: s.height / 2
                        });
                    }
                });
            }), this.setupVisualEditing(), this.createBases(), this.boundingBox.setHardcoded({
                width: p * this.getScale(),
                height: 96 * this.getScale()
            }), this.currentQuestionId = this.state.currentQuestionId;
        }
    }
    var _r = q;
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
}), a.register('2+ct9', function(b, c) {
    e(b.exports, 'BaseAsset', function() {
        return _d;
    });
    const _d = {
        imageId: 'gimkit_live_question_device_base',
        imageUrl: (0, a('2Xvuf').default)('devices/gimkit_live_question/on_2.png')
    };
}), a.register('dgkkY', function(b, c) {
    e(b.exports, 'DisabledBaseAsset', function() {
        return _d;
    });
    const _d = {
        imageId: 'gimkit_live_question_device_base_disabled',
        imageUrl: (0, a('2Xvuf').default)('devices/gimkit_live_question/off.png')
    };
});