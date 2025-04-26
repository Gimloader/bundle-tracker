function a(a, b, d, h) {
    Object.defineProperty(a, b, {
        get: d,
        set: h,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('YcrGn', function(d, h) {
    var c;
    c = d.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return q;
    });
    var d = b('UM8oI'),
        e = b('wSwKo5'),
        f = b('/Lvpl17'),
        g = b('jh162'),
        h = b('Bpt+p'),
        i = b('5Ux1a'),
        j = b('sgILU'),
        k = b('rf4tA'),
        l = b('NvXlK'),
        m = b('gEqOp'),
        n = b('7Sbqr');
    const o = 276;
    class p extends j.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'questionsAnswered', 0), (0, d.default)(this, 'createBases', () => {
                this.base = this.parts.add.sprite(k.BaseAsset), this.disabledBase = this.parts.add.sprite(l.DisabledBaseAsset);
                const q = !this.isPreview && this.state.enabled;
                this.base.view.alpha = q ? 1 : 0, this.disabledBase.view.alpha = q ? 0 : 1, this.base.view.setScale(this.getScale()), this.disabledBase.view.setScale(this.getScale()), this.isPreview || (this.colliders.add.box({
                    x: 0,
                    y: 0,
                    w: this.getScale() * o + 20,
                    h: 96 * this.getScale()
                }), this.setupInteractiveZone());
            }), (0, d.default)(this, 'openDeviceUI', () => {
                this.deviceUI.open({
                    eqs: (0, g.EncryptData)(JSON.parse(this.state.questions || '[]'), this.id),
                    currentQuestionId: this.currentQuestionId,
                    textShownWhenAnsweringCorrectly: this.state.correctText || 'Correct!',
                    textShownWhenAnsweringIncorrectly: this.state.incorrectText || 'Incorrect!',
                    customActionText: this.options.useCustomAction ? this.options.customActionText : void 0,
                    customActionCallback: this.options.useCustomAction && this.options.channelToTriggerCustomAction ? () => {
                        this.sendToServerDevice(m.Messages.customAction);
                    } : void 0,
                    onQuestionAnswered: a => {
                        this.questionsAnswered = this.questionsAnswered + 1, this.sendToServerDevice(m.Messages.answered, {
                            answer: a
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
                    allowGoogleTranslate: n.default.session.allowGoogleTranslate
                });
            }), (0, d.default)(this, 'setupInteractiveZone', () => {
                this.interactiveZones.add.rect({
                    width: this.getScale() * o + 125,
                    height: 96 * this.getScale() + 125
                }), this.interactiveZones.setInfo({
                    message: 'Answer Questions',
                    allowedToInteract: !0
                }), this.interactiveZones.onInteraction = () => {
                    this.state.enabled && this.openDeviceUI();
                };
            }), (0, d.default)(this, 'animateEnabledChange', () => {
                this.tweens.add({
                    targets: [this.base.view],
                    duration: 350,
                    alpha: this.state.enabled ? 1 : 0
                }), this.tweens.add({
                    targets: [this.disabledBase.view],
                    duration: 350,
                    alpha: this.state.enabled ? 0 : 1
                });
            }), (0, d.default)(this, 'onEnabled', () => {
                this.interactiveZones.setForceDisabled(!1);
            }), (0, d.default)(this, 'onDisabled', () => {
                this.deviceUI.close(), this.interactiveZones.setForceDisabled(!0);
            }), (0, d.default)(this, 'getScale', () => this.options.size / 48), (0, d.default)(this, 'onStateChange', a => {
                'enabled' === a && (this.animateEnabledChange(), this.state.enabled ? this.onEnabled() : this.onDisabled()), 'questions' === a && this.deviceUI.update({
                    eqs: (0, g.EncryptData)(JSON.parse(this.state.questions || '[]'), this.id)
                }), 'currentQuestionId' === a && (this.deviceUI.update({
                    currentQuestionId: this.state.currentQuestionId
                }), this.currentQuestionId = this.state.currentQuestionId), 'correctText' === a && this.deviceUI.update({
                    textShownWhenAnsweringCorrectly: this.state.correctText
                }), 'incorrectText' === a && this.deviceUI.update({
                    textShownWhenAnsweringIncorrectly: this.state.incorrectText
                });
            }), (0, d.default)(this, 'setupVisualEditing', () => {
                if (!(0, i.InPreGamePhase)() || !(0, h.isSavedVersion)())
                    return;
                const q = (0, f.FetchOptionSchemaProperty)(this, 'size'),
                    r = 2.875;
                this.visualEditing.add.box({
                    width: 2 * this.options.size * r,
                    height: 2 * this.options.size,
                    minHeight: 2 * q.min,
                    maxHeight: 2 * q.max,
                    minWidth: 2 * q.min * r,
                    maxWidth: 2 * q.max * r,
                    keepRatio: !0,
                    rotable: !1,
                    onChange: q => {
                        (0, e.ReplaceVisualEditingPreview)(q.x, q.y, {
                            size: q.height / 2
                        });
                    }
                });
            }), this.setupVisualEditing(), this.createBases(), this.boundingBox.setHardcoded({
                width: o * this.getScale(),
                height: 96 * this.getScale()
            }), this.currentQuestionId = this.state.currentQuestionId;
        }
    }
    var q = r;
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
}), b.register('rf4tA', function(i, s) {
    a(i.exports, 'BaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'gimkit_live_question_device_base',
        imageUrl: (0, b('JJQ0+').default)('devices/gimkit_live_question/on_2.png')
    };
}), b.register('NvXlK', function(i, s) {
    a(i.exports, 'DisabledBaseAsset', function() {
        return c;
    });
    const c = {
        imageId: 'gimkit_live_question_device_base_disabled',
        imageUrl: (0, b('JJQ0+').default)('devices/gimkit_live_question/off.png')
    };
});