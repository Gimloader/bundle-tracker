import {
    G as p
} from "./GetAssetPath.js";
import {
    al as e,
    T as s,
    am as a,
    an as c
} from "./App-41.js";
import {
    I as l,
    i as d
} from "./FixSpinePlugin.js";
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
var t = (i => (i.triggered = "triggered", i))(t || {});
class Bo extends e {
    constructor(m) {
        if (super(m), this.onMessage = o => {
                var r;
                o.key === t.triggered && ((r = o == null ? void 0 : o.data) == null ? void 0 : r.characterId) === s() && this.model && this.model.base && this.model.base.view && this.tweens.add({
                    targets: this.model.base.view,
                    duration: 150,
                    alpha: .85,
                    scale: this.model.base.view.scale * 1.15,
                    yoyo: !0
                })
            }, l() && d()) {
            const o = c.Manager;
            this.model = new a({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    icon: {
                        image: p("devices/player_appearance_modifier/icon.png")
                    }
                }
            })
        }
    }
}
export {
    Bo as
    default
};