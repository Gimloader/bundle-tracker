import {
    al as p,
    b1 as e,
    aY as a,
    am as d,
    an as n
} from "./App-41.js";
import {
    s as t,
    I as g,
    i as h
} from "./FixSpinePlugin.js";
import {
    G as l
} from "./GetAssetPath.js";
import {
    S as c
} from "./SecondsToDuration.js";
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
class Ii extends p {
    constructor(m) {
        if (super(m), this.onStateChange = i => {
                this.updateState()
            }, this.onDestroy = () => {
                t.session.gameSession.widgets.widgets.replace(t.session.gameSession.widgets.widgets.filter(i => i.id !== this.id))
            }, this.updateState = () => {
                this.options.widgetType === e.image && this.state.active ? this.addImageToListOrUpdateOnList() : this.options.widgetType === e.gameTime && this.state.active ? this.addGameTimeToListOrUpdateOnList() : this.state.active && this.state.value !== void 0 && this.addToListOrUpdateOnList()
            }, this.addToListOrUpdateOnList = () => {
                this.state.value !== void 0 && (t.session.gameSession.widgets.widgets.find(i => i.id === this.id) && t.session.gameSession.widgets.widgets.replace(t.session.gameSession.widgets.widgets.map(i => i.id === this.id ? {
                    ...i,
                    statValue: this.state.value
                } : i)), t.session.gameSession.widgets.widgets.push({
                    type: e.statistic,
                    id: this.id,
                    y: this.y,
                    placement: this.options.widgetPlacement,
                    statName: this.options.statisticLabel,
                    statValue: this.state.value
                }))
            }, this.addGameTimeToListOrUpdateOnList = () => {
                if (this.state.value === void 0) return;
                const i = this.state.value,
                    r = Math.max(0, i / 1e3),
                    o = c(r);
                t.session.gameSession.widgets.widgets.find(s => s.id === this.id) && t.session.gameSession.widgets.widgets.replace(t.session.gameSession.widgets.widgets.map(s => s.id === this.id ? {
                    ...s,
                    gameTimeValue: o
                } : s)), t.session.gameSession.widgets.widgets.push({
                    type: e.gameTime,
                    id: this.id,
                    y: this.y,
                    placement: this.options.widgetPlacement,
                    gameTimeName: this.options.gameTimeLabel,
                    gameTimeValue: o
                })
            }, this.addImageToListOrUpdateOnList = () => {
                t.session.gameSession.widgets.widgets.find(i => i.id === this.id) && t.session.gameSession.widgets.widgets.replace(t.session.gameSession.widgets.widgets.map(i => i.id === this.id ? {
                    type: e.image,
                    id: this.id,
                    y: this.y,
                    placement: this.options.widgetPlacement,
                    imageHeight: this.options.imageHeight,
                    imageBackgroundColor: this.options.imageBackgroundColor,
                    imageUrl: a(this.options.imageUrl),
                    imageStyle: this.options.imageStyle
                } : i)), t.session.gameSession.widgets.widgets.push({
                    type: e.image,
                    id: this.id,
                    y: this.y,
                    placement: this.options.widgetPlacement,
                    imageHeight: this.options.imageHeight,
                    imageBackgroundColor: this.options.imageBackgroundColor,
                    imageUrl: a(this.options.imageUrl),
                    imageStyle: this.options.imageStyle
                })
            }, g() && h()) {
            const i = n.Overlay;
            new d({
                device: this,
                baseColor: i.baseColor,
                boxColor: i.boxColor,
                content: {
                    icon: {
                        image: l("devices/end_of_game_widget/icon.png")
                    }
                }
            })
        }
        this.updateState()
    }
}
export {
    Ii as
    default
};