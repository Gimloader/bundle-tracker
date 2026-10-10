import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./stores-2.js";
import {
    n
} from "./isVersion.js";
import {
    r
} from "./InPhase.js";
import {
    t as i
} from "./Device.js";
import {
    a
} from "./GimkitLiveQuestion.js";
import {
    B as o
} from "./App-42.js";
import {
    n as s,
    t as c
} from "./FetchOptionSchemaProperty.js";
var l = {
        imageId: `gimkit_live_question_device_base`,
        imageUrl: e(`devices/gimkit_live_question/on_2.png`)
    },
    u = {
        imageId: `gimkit_live_question_device_base_disabled`,
        imageUrl: e(`devices/gimkit_live_question/off.png`)
    },
    d = 96,
    f = 276,
    p = class extends i {
        constructor(e) {
            super(e), this.questionsAnswered = 0, this.createBases = () => {
                this.base = this.parts.add.sprite(l), this.disabledBase = this.parts.add.sprite(u);
                let e = !this.isPreview && this.state.enabled;
                this.base.view.alpha = +!!e, this.disabledBase.view.alpha = +!e, this.base.view.setScale(this.getScale()), this.disabledBase.view.setScale(this.getScale()), this.isPreview || (this.colliders.add.box({
                    x: 0,
                    y: 0,
                    w: this.getScale() * f + 20,
                    h: this.getScale() * d
                }), this.setupInteractiveZone())
            }, this.openDeviceUI = () => {
                this.deviceUI.open({
                    eqs: a(JSON.parse(this.state.questions || `[]`), this.id),
                    currentQuestionId: this.currentQuestionId,
                    textShownWhenAnsweringCorrectly: this.state.correctText || `Correct!`,
                    textShownWhenAnsweringIncorrectly: this.state.incorrectText || `Incorrect!`,
                    customActionText: this.options.useCustomAction ? this.options.customActionText : void 0,
                    customActionCallback: this.options.useCustomAction && this.options.channelToTriggerCustomAction ? () => {
                        this.sendToServerDevice(o.customAction)
                    } : void 0,
                    onQuestionAnswered: e => {
                        this.questionsAnswered += 1, this.sendToServerDevice(o.answered, {
                            answer: e
                        }), this.currentQuestionId = this.state.nextQuestionId || this.state.currentQuestionId || ``, this.deviceUI.update({
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
                    allowGoogleTranslate: t.session.allowGoogleTranslate
                })
            }, this.setupInteractiveZone = () => {
                this.interactiveZones.add.rect({
                    width: this.getScale() * f + 125,
                    height: this.getScale() * d + 125
                }), this.interactiveZones.setInfo({
                    message: `Answer Questions`,
                    allowedToInteract: !0
                }), this.interactiveZones.onInteraction = () => {
                    this.state.enabled && this.openDeviceUI()
                }
            }, this.animateEnabledChange = () => {
                this.tweens.add({
                    targets: [this.base.view],
                    duration: 350,
                    alpha: +!!this.state.enabled
                }), this.tweens.add({
                    targets: [this.disabledBase.view],
                    duration: 350,
                    alpha: +!this.state.enabled
                })
            }, this.onEnabled = () => {
                this.interactiveZones.setForceDisabled(!1)
            }, this.onDisabled = () => {
                this.deviceUI.close(), this.interactiveZones.setForceDisabled(!0)
            }, this.getScale = () => this.options.size / 48, this.onStateChange = e => {
                e === `enabled` && (this.animateEnabledChange(), this.state.enabled ? this.onEnabled() : this.onDisabled()), e === `questions` && this.deviceUI.update({
                    eqs: a(JSON.parse(this.state.questions || `[]`), this.id)
                }), e === `currentQuestionId` && (this.deviceUI.update({
                    currentQuestionId: this.state.currentQuestionId
                }), this.currentQuestionId = this.state.currentQuestionId), e === `correctText` && this.deviceUI.update({
                    textShownWhenAnsweringCorrectly: this.state.correctText
                }), e === `incorrectText` && this.deviceUI.update({
                    textShownWhenAnsweringIncorrectly: this.state.incorrectText
                })
            }, this.setupVisualEditing = () => {
                if (!r() || !n()) return;
                let e = c(this, `size`),
                    t = f / d;
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
                        s(e.x, e.y, {
                            size: e.height / 2
                        })
                    }
                })
            }, this.setupVisualEditing(), this.createBases(), this.boundingBox.setHardcoded({
                width: f * this.getScale(),
                height: d * this.getScale()
            }), this.currentQuestionId = this.state.currentQuestionId
        }
    };
export {
    p as
    default
};