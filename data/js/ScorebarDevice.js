import {
    s as r,
    I as p,
    i as e
} from "./FixSpinePlugin.js";
import {
    G as s
} from "./GetAssetPath.js";
import {
    al as a,
    am as n,
    an as c
} from "./App-41.js";
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
class Po extends a {
    constructor(m) {
        if (super(m), this.getTeamColor = o => {
                const t = "colorTeam" + o;
                return this.options.useTeamSettingsDeviceForColors ? this.state[t] ?? "#ffffff" : this.options[t]
            }, this.setStore = () => {
                const o = [],
                    t = [];
                for (let i = 1; i <= this.options.numberOfTeams && !(i > 4); i++) o.push(this.options["team" + i]), t.push(this.getTeamColor(i));
                r.gui.scorebar = {
                    teams: o,
                    teamColors: t
                }
            }, this.onStateChange = o => {
                this.setStore()
            }, this.onDestroy = o => {
                o.isBeingReplaced || (r.gui.scorebar = void 0)
            }, p() && e()) {
            const o = c.Overlay;
            new n({
                device: this,
                baseColor: o.baseColor,
                boxColor: o.boxColor,
                content: {
                    icon: {
                        image: s("devices/gui/icon.png"),
                        scale: .9
                    }
                }
            })
        }
        this.setStore()
    }
}
export {
    Po as
    default
};