import {
    al as m,
    T as e
} from "./App-41.js";
import {
    e as s,
    d as c
} from "./FixSpinePlugin.js";
import {
    G as a
} from "./GetAssetPath.js";
import "./_index.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./playSound.js";
import "./howler.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./motion.js";
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
import "./index-1.js";
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
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
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
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
const n = {
    imageId: "password_lock",
    imageUrl: a("devices/password_lock/icon.png")
};
var i = (r => (r.guess = "guess", r))(i || {}),
    o = (r => (r.incorrect = "incorrect", r))(o || {});
class Pt extends m {
    constructor(p) {
        super(p), this.incorrectCounter = 0, this.guess = t => {
            this.sendToServerDevice(i.guess, {
                password: t
            })
        }, this.openDeviceUI = () => {
            this.deviceUI.open({
                maxAttempts: this.options.maxAttempts,
                useMaxAttempts: this.options.useMaxAttempts,
                attempts: this.state.attempts,
                guess: this.guess,
                incorrectCounter: this.incorrectCounter
            })
        }, this.onStateChange = t => {
            t === "attempts" && this.deviceUI.update({
                attempts: this.state.attempts
            })
        }, this.onMessage = t => {
            t.key === o.incorrect && (t == null ? void 0 : t.data) === e() && (this.incorrectCounter += 1, this.deviceUI.update({
                incorrectCounter: this.incorrectCounter
            }))
        }, !(s() || c()) && (this.layers.forceDepthManually(0), this.parts.add.sprite(n))
    }
}
export {
    Pt as
    default
};