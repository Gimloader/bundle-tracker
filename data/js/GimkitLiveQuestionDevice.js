import {
    F as d,
    R as c
} from "./ReplaceVisualEditingPreview.js";
import {
    E as r
} from "./GimkitLiveQuestion.js";
import {
    s as p,
    I as m,
    i as u
} from "./FixSpinePlugin.js";
import {
    al as l,
    a_ as n
} from "./App-41.js";
import {
    G as a
} from "./GetAssetPath.js";
import "./_index.js";
import "./mobxreact.esm.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./capitalize.js";
import "./inheritsLoose.js";
import "./Tooltip.js";
import "./howler.js";
import "./polished.esm.js";
import "./index-1.js";
import "./motion.js";
import "./index-17.js";
import "./use-force-update.js";
import "./use-motion-value.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./Button.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./index-2.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-3.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./progress.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./use-transform.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
const g = {
        imageId: "gimkit_live_question_device_base",
        imageUrl: a("devices/gimkit_live_question/on_2.png")
    },
    v = {
        imageId: "gimkit_live_question_device_base_disabled",
        imageUrl: a("devices/gimkit_live_question/off.png")
    },
    e = 96,
    i = 276;
class Wt extends l {
    constructor(h) {
        super(h), this.questionsAnswered = 0, this.createBases = () => {
            this.base = this.parts.add.sprite(g), this.disabledBase = this.parts.add.sprite(v);
            const t = this.isPreview ? !1 : this.state.enabled;
            this.base.view.alpha = t ? 1 : 0, this.disabledBase.view.alpha = t ? 0 : 1, this.base.view.setScale(this.getScale()), this.disabledBase.view.setScale(this.getScale()), this.isPreview || (this.colliders.add.box({
                x: 0,
                y: 0,
                w: this.getScale() * i + 20,
                h: this.getScale() * e
            }), this.setupInteractiveZone())
        }, this.openDeviceUI = () => {
            this.deviceUI.open({
                eqs: r(JSON.parse(this.state.questions || "[]"), this.id),
                currentQuestionId: this.currentQuestionId,
                textShownWhenAnsweringCorrectly: this.state.correctText || "Correct!",
                textShownWhenAnsweringIncorrectly: this.state.incorrectText || "Incorrect!",
                customActionText: this.options.useCustomAction ? this.options.customActionText : void 0,
                customActionCallback: this.options.useCustomAction && this.options.channelToTriggerCustomAction ? () => {
                    this.sendToServerDevice(n.customAction)
                } : void 0,
                onQuestionAnswered: t => {
                    this.questionsAnswered = this.questionsAnswered + 1, this.sendToServerDevice(n.answered, {
                        answer: t
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
                allowGoogleTranslate: p.session.allowGoogleTranslate
            })
        }, this.setupInteractiveZone = () => {
            this.interactiveZones.add.rect({
                width: this.getScale() * i + 125,
                height: this.getScale() * e + 125
            }), this.interactiveZones.setInfo({
                message: "Answer Questions",
                allowedToInteract: !0
            }), this.interactiveZones.onInteraction = () => {
                this.state.enabled && this.openDeviceUI()
            }
        }, this.animateEnabledChange = () => {
            this.tweens.add({
                targets: [this.base.view],
                duration: 350,
                alpha: this.state.enabled ? 1 : 0
            }), this.tweens.add({
                targets: [this.disabledBase.view],
                duration: 350,
                alpha: this.state.enabled ? 0 : 1
            })
        }, this.onEnabled = () => {
            this.interactiveZones.setForceDisabled(!1)
        }, this.onDisabled = () => {
            this.deviceUI.close(), this.interactiveZones.setForceDisabled(!0)
        }, this.getScale = () => this.options.size / 48, this.onStateChange = t => {
            t === "enabled" && (this.animateEnabledChange(), this.state.enabled ? this.onEnabled() : this.onDisabled()), t === "questions" && this.deviceUI.update({
                eqs: r(JSON.parse(this.state.questions || "[]"), this.id)
            }), t === "currentQuestionId" && (this.deviceUI.update({
                currentQuestionId: this.state.currentQuestionId
            }), this.currentQuestionId = this.state.currentQuestionId), t === "correctText" && this.deviceUI.update({
                textShownWhenAnsweringCorrectly: this.state.correctText
            }), t === "incorrectText" && this.deviceUI.update({
                textShownWhenAnsweringIncorrectly: this.state.incorrectText
            })
        }, this.setupVisualEditing = () => {
            if (!m() || !u()) return;
            const t = d(this, "size"),
                s = i / e;
            this.visualEditing.add.box({
                width: 2 * this.options.size * s,
                height: 2 * this.options.size,
                minHeight: 2 * t.min,
                maxHeight: 2 * t.max,
                minWidth: 2 * t.min * s,
                maxWidth: 2 * t.max * s,
                keepRatio: !0,
                rotable: !1,
                onChange: o => {
                    c(o.x, o.y, {
                        size: o.height / 2
                    })
                }
            })
        }, this.setupVisualEditing(), this.createBases(), this.boundingBox.setHardcoded({
            width: i * this.getScale(),
            height: e * this.getScale()
        }), this.currentQuestionId = this.state.currentQuestionId
    }
}
export {
    Wt as
    default
};