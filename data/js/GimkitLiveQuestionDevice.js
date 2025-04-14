function e(e, t, i, s) {
    Object.defineProperty(e, t, {
        get: i,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("4BBSq", (function(i, s) {
    var n;
    n = i.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(i.exports, "default", (function() {
        return b
    }));
    var o = t("divCp"),
        a = t("cnijD"),
        r = t("cK78N"),
        d = t("jcI11"),
        c = t("4uojN"),
        u = t("6Tpu2"),
        h = t("bNmF9"),
        l = t("3p9ts"),
        p = t("dNRws"),
        v = t("9Ohuj"),
        g = t("iRjsB");
    const f = 276;
    class w extends h.default {
        constructor(e) {
            super(e), (0, o.default)(this, "questionsAnswered", 0), (0, o.default)(this, "createBases", (() => {
                this.base = this.parts.add.sprite(l.BaseAsset), this.disabledBase = this.parts.add.sprite(p.DisabledBaseAsset);
                const e = !this.isPreview && this.state.enabled;
                this.base.view.alpha = e ? 1 : 0, this.disabledBase.view.alpha = e ? 0 : 1, this.base.view.setScale(this.getScale()), this.disabledBase.view.setScale(this.getScale()), this.isPreview || (this.colliders.add.box({
                    x: 0,
                    y: 0,
                    w: this.getScale() * f + 20,
                    h: 96 * this.getScale()
                }), this.setupInteractiveZone())
            })), (0, o.default)(this, "openDeviceUI", (() => {
                this.deviceUI.open({
                    eqs: (0, d.EncryptData)(JSON.parse(this.state.questions || "[]"), this.id),
                    currentQuestionId: this.currentQuestionId,
                    textShownWhenAnsweringCorrectly: this.state.correctText || "Correct!",
                    textShownWhenAnsweringIncorrectly: this.state.incorrectText || "Incorrect!",
                    customActionText: this.options.useCustomAction ? this.options.customActionText : void 0,
                    customActionCallback: this.options.useCustomAction && this.options.channelToTriggerCustomAction ? () => {
                        this.sendToServerDevice(v.Messages.customAction)
                    } : void 0,
                    onQuestionAnswered: e => {
                        this.questionsAnswered = this.questionsAnswered + 1, this.sendToServerDevice(v.Messages.answered, {
                            answer: e
                        }), this.currentQuestionId = this.state.nextQuestionId || this.state.currentQuestionId || "", this.deviceUI.update({
                            currentQuestionId: this.currentQuestionId,
                            questionsAnswered: this.questionsAnswered
                        })
                    },
                    soundConfig: {
                        sound: this.options.sound,
                        correctSound: this.options.correctSound,
                        incorrectSound: this.options.incorrectSound,
                        actionSound: this.options.actionSound
                    },
                    closableByUser: this.options.closable,
                    questionsAnswered: this.questionsAnswered,
                    allowGoogleTranslate: g.default.session.allowGoogleTranslate
                })
            })), (0, o.default)(this, "setupInteractiveZone", (() => {
                this.interactiveZones.add.rect({
                    width: this.getScale() * f + 125,
                    height: 96 * this.getScale() + 125
                }), this.interactiveZones.setInfo({
                    message: "Answer Questions",
                    allowedToInteract: !0
                }), this.interactiveZones.onInteraction = () => {
                    this.state.enabled && this.openDeviceUI()
                }
            })), (0, o.default)(this, "animateEnabledChange", (() => {
                this.tweens.add({
                    targets: [this.base.view],
                    duration: 350,
                    alpha: this.state.enabled ? 1 : 0
                }), this.tweens.add({
                    targets: [this.disabledBase.view],
                    duration: 350,
                    alpha: this.state.enabled ? 0 : 1
                })
            })), (0, o.default)(this, "onEnabled", (() => {
                this.interactiveZones.setForceDisabled(!1)
            })), (0, o.default)(this, "onDisabled", (() => {
                this.deviceUI.close(), this.interactiveZones.setForceDisabled(!0)
            })), (0, o.default)(this, "getScale", (() => this.options.size / 48)), (0, o.default)(this, "onStateChange", (e => {
                "enabled" === e && (this.animateEnabledChange(), this.state.enabled ? this.onEnabled() : this.onDisabled()), "questions" === e && this.deviceUI.update({
                    eqs: (0, d.EncryptData)(JSON.parse(this.state.questions || "[]"), this.id)
                }), "currentQuestionId" === e && (this.deviceUI.update({
                    currentQuestionId: this.state.currentQuestionId
                }), this.currentQuestionId = this.state.currentQuestionId), "correctText" === e && this.deviceUI.update({
                    textShownWhenAnsweringCorrectly: this.state.correctText
                }), "incorrectText" === e && this.deviceUI.update({
                    textShownWhenAnsweringIncorrectly: this.state.incorrectText
                })
            })), (0, o.default)(this, "setupVisualEditing", (() => {
                if (!(0, u.InPreGamePhase)() || !(0, c.isSavedVersion)()) return;
                const e = (0, r.FetchOptionSchemaProperty)(this, "size"),
                    t = 2.875;
                this.visualEditing.add.box({
                    width: 2 * this.options.size * t,
                    height: 2 * this.options.size,
                    minHeight: 2 * e.min,
                    maxHeight: 2 * e.max,
                    minWidth: 2 * e.min * t,
                    maxWidth: 2 * e.max * t,
                    keepRatio: !0,
                    rotable: !1,
                    onChange: e => {
                        (0, a.ReplaceVisualEditingPreview)(e.x, e.y, {
                            size: e.height / 2
                        })
                    }
                })
            })), this.setupVisualEditing(), this.createBases(), this.boundingBox.setHardcoded({
                width: f * this.getScale(),
                height: 96 * this.getScale()
            }), this.currentQuestionId = this.state.currentQuestionId
        }
    }
    var b = w
})), t.register("cnijD", (function(i, s) {
    e(i.exports, "ReplaceVisualEditingPreview", (function() {
        return d
    }));
    var n = t("dWqri"),
        o = t("eCsxR"),
        a = t("ittx1"),
        r = t("dNzyU");
    const d = (e, t, i) => {
        const s = (0, r.FetchVisualEditingPreview)(),
            d = (0, a.FetchCurrentlyEditedDevice)();
        if (!d || !s) return;
        const c = d.layers.isOnNaturalDepth() ? void 0 : t + d.layers.getDepthShift();
        (0, o.default)({
            deviceOption: s.deviceOption,
            id: n.VisualEditingConstants.previewId,
            x: e,
            y: t,
            depth: c,
            layerId: d.layers.getLayer(),
            name: s.name,
            isPreview: !0,
            options: {
                ...s.options,
                ...i
            },
            placedByClient: !0,
            state: s.deviceOption.defaultState
        })
    }
})), t.register("eCsxR", (function(i, s) {
    e(i.exports, "default", (function() {
        return a
    }));
    var n = t("gwuwo"),
        o = t("fCcDT");
    var a = e => {
        (0, n.default)().worldManager.devices.getDeviceById(e.id) && (0, o.default)(e)
    }
})), t.register("cK78N", (function(t, i) {
    e(t.exports, "FetchOptionSchemaProperty", (function() {
        return s
    }));
    const s = (e, t) => {
        var i, s, n;
        const o = e.deviceOption.optionSchema.options.find((e => e.key === t));
        return {
            min: null === (i = null == o ? void 0 : o.option.props) || void 0 === i ? void 0 : i.min,
            max: null === (s = null == o ? void 0 : o.option.props) || void 0 === s ? void 0 : s.max,
            step: null === (n = null == o ? void 0 : o.option.props) || void 0 === n ? void 0 : n.step
        }
    }
})), t.register("3p9ts", (function(i, s) {
    e(i.exports, "BaseAsset", (function() {
        return n
    }));
    const n = {
        imageId: "gimkit_live_question_device_base",
        imageUrl: (0, t("alREA").default)("devices/gimkit_live_question/on_2.png")
    }
})), t.register("dNRws", (function(i, s) {
    e(i.exports, "DisabledBaseAsset", (function() {
        return n
    }));
    const n = {
        imageId: "gimkit_live_question_device_base_disabled",
        imageUrl: (0, t("alREA").default)("devices/gimkit_live_question/off.png")
    }
}));