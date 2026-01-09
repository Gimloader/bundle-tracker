import {
    I as n,
    d as h,
    e as d,
    a as p
} from "./FixSpinePlugin.js";
import {
    al as g
} from "./App-41.js";
import {
    G as e
} from "./GetAssetPath.js";
import "./_index.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
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
import "./FillRemainingSpace.js";
import "./index-24.js";
const u = {
        imageId: e("devices/trigger/trigger_up.png"),
        imageUrl: e("devices/trigger/trigger_up.png")
    },
    c = {
        imageId: e("devices/trigger/trigger_down.png"),
        imageUrl: e("devices/trigger/trigger_down.png")
    };
var s = (t => (t.steppedOn = "steppedOn", t))(s || {});
const w = 350,
    r = t => {
        p().plugins.get("rexGrayScalePipeline").add(t, {
            intensity: 1
        })
    },
    o = t => {
        p().plugins.get("rexGrayScalePipeline").remove(t)
    };
class Ut extends g {
    constructor(m) {
        super(m), this.stepOnCounter = 0, this.onMessage = i => {
            if (i.key === s.steppedOn) {
                if (!this.up || !this.down) return;
                this.stepOnCounter += 1;
                const a = this.stepOnCounter;
                this.down.view.setAlpha(1), this.up.view.setAlpha(0), this.downTimeout = window.setTimeout(() => {
                    a === this.stepOnCounter && (this.down.view.setAlpha(0), this.up.view.setAlpha(1))
                }, w)
            }
        }, this.onDestroy = () => {
            this.downTimeout && window.clearTimeout(this.downTimeout)
        }, this.onStateChange = i => {
            i === "active" && this.updateGrayscale()
        }, this.updateGrayscale = () => {
            if (this.up && this.down) {
                let i = this.state.active;
                n() && (i = this.options.activeOnGameStart), i ? (o(this.up.view), o(this.down.view)) : (r(this.up.view), r(this.down.view))
            }
        }, !(!this.options.visibleInGame && (h() || d())) && (this.up = this.parts.add.sprite(u), this.down = this.parts.add.sprite(c), this.up.view.setScale(.4), this.down.view.setScale(.4), this.down.view.setAlpha(0), this.updateGrayscale())
    }
}
export {
    Ut as
    default
};