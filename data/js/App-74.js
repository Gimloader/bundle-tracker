import {
    j as a,
    a as e,
    t as s
} from "./_index.js";
import n from "./Form.js";
import {
    s as d
} from "./index-4.js";
import "./index-19.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
import "./index-2.js";
import "./PaperClipOutlined.js";
import "./useForceUpdate.js";
import "./DeleteOutlined.js";
import "./DownloadOutlined.js";
import "./index-3.js";
import "./progress.js";
import "./CheckOutlined.js";
import "./index-28.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./Names.js";
import "./AccessibleAnchor.js";
import "./SeasonTicketName.js";
import "./OwnsSeasonTicket.js";
import "./App-41.js";
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
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./motion.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./CopyOutlined.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./ElementIds.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
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
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
import "./TrackEvent.js";
import "./TrackPostHogEvent.js";
import "./index-16.js";
import "./useForm.js";
import "./useBreakpoint.js";
import "./QuestionCircleOutlined.js";
import "./index-8.js";
import "./DownOutlined.js";
import "./index-11.js";
import "./useBubbleLock.js";
import "./StarOutlined.js";
const Tt = r => {
    const o = t => new Promise((m, p) => {
        e({
            url: "/api/created-map/listing/create",
            data: {
                name: t.name,
                description: t.description,
                imageUrl: t.imageUrl,
                educationalRating: t.educationalRating,
                map: window._mapId
            },
            success: () => {
                d.success("Map updated!"), r.refetch(), m(null)
            },
            error: i => {
                s({
                    e: i,
                    default: {
                        title: "Error updating map",
                        content: "Please try again."
                    }
                }), p(i)
            }
        })
    });
    return a.jsx(n, {
        ...r,
        isForUpdating: !0,
        handleSubmit: o
    })
};
export {
    Tt as
    default
};