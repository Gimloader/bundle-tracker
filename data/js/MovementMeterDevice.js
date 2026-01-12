import {
    G as i
} from "./GetAssetPath.js";
import {
    g as l,
    S as c,
    d as w,
    e as y
} from "./FixSpinePlugin.js";
import {
    al as I,
    T as A,
    b6 as f,
    b7 as h,
    b8 as u,
    am as b,
    an as C
} from "./App-41.js";
import {
    p as g
} from "./playSound.js";
import {
    b$ as d
} from "./_index.js";
import "./MapModeType.js";
import "./MapStyle.js";
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
import "./howler.js";
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
var r = (o => (o.warning = "warning", o.outOfItem = "outOfItem", o))(r || {});
class _t extends I {
    constructor(v) {
        if (super(v), this.onMessage = t => {
                var p, m, n, s, a;
                ((p = t == null ? void 0 : t.data) == null ? void 0 : p.characterId) === A() && (t.key === r.warning ? (this.options.showWarningAlert && g({
                    path: i("sounds/alert-notification.mp3"),
                    volume: l({
                        type: c.soundEffect,
                        volume: .4
                    })
                }), ((m = this.options.warningAlertTitle) != null && m.length || (n = this.options.warningAlertContent) != null && n.length) && f({
                    id: d(),
                    title: this.options.warningAlertTitle,
                    description: this.options.warningAlertContent,
                    type: u.warning,
                    placement: h.topRight
                })) : t.key === r.outOfItem && (g({
                    path: i("sounds/power-down.mp3"),
                    volume: l({
                        type: c.soundEffect,
                        volume: .32
                    })
                }), ((s = this.options.outOfItemAlertTitle) != null && s.length || (a = this.options.outOfItemAlertTitle) != null && a.length) && f({
                    id: d(),
                    title: this.options.outOfItemAlertTitle,
                    description: this.options.outOfItemAlertContent,
                    type: u.error,
                    placement: h.topRight
                })))
            }, w() || y()) return;
        const e = C.Manager;
        new b({
            device: this,
            baseColor: e.baseColor,
            boxColor: e.boxColor,
            content: {
                icon: {
                    image: i("devices/movement_meter/icon.png"),
                    scale: 1
                }
            }
        })
    }
}
export {
    _t as
    default
};