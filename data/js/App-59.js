import {
    r as o,
    j as s
} from "./_index.js";
import {
    ae as a,
    o as n,
    aj as c,
    ak as u
} from "./App-41.js";
import {
    u as l
} from "./useTimeout.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./FixSpinePlugin.js";
import "./GetAssetPath.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
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
import "./useWarningOnMountInDevelopment.js";
const C = r => {
        const [m, e] = o.useState(!0), {
            start: i,
            clear: p
        } = l(() => {
            r.close()
        }, 350), t = o.useCallback(() => {
            e(!1), i()
        }, [i, r.close]);
        return o.useEffect(() => () => {
            p()
        }, [p]), n(Phaser.Input.Keyboard.KeyCodes.ESC, t, [t]), s.jsx(c, {
            open: m,
            close: t,
            onCosmeticSelectionChanged: u,
            onlyLockerAvailable: !0,
            useCustomAnimation: !0
        })
    },
    Ot = a(C);
export {
    Ot as
    default
};