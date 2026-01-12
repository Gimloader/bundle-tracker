const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/Overview.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/Centered.js", "assets/GetAssetPath.js", "assets/AccessibleAnchor.js", "assets/Button.js", "assets/polished.esm.js", "assets/inheritsLoose.js", "assets/index-14.js", "assets/EditOutlined.js", "assets/styleChecker.js", "assets/index-5.js", "assets/index-3.js", "assets/index-2.js", "assets/CheckOutlined.js", "assets/CopyOutlined.js", "assets/Requirements.js", "assets/SeasonTicketName.js", "assets/Names.js", "assets/Form.js", "assets/index-19.js", "assets/index-10.js", "assets/move.js", "assets/PaperClipOutlined.js", "assets/useForceUpdate.js", "assets/DeleteOutlined.js", "assets/DownloadOutlined.js", "assets/progress.js", "assets/index-28.js", "assets/index-4.js", "assets/context.js", "assets/OwnsSeasonTicket.js", "assets/App-41.js", "assets/FixSpinePlugin.js", "assets/MapModeType.js", "assets/MapStyle.js", "assets/playSound.js", "assets/howler.js", "assets/mobxreact.esm.js", "assets/index-21.js", "assets/QuizTypes.js", "assets/TutorialConsts.js", "assets/ActionButton.js", "assets/index-18.js", "assets/FontAwesomeIcon.js", "assets/CapitalizeFirstLetter.js", "assets/motion.js", "assets/SixteenByNineScaler.js", "assets/index-20.js", "assets/index-22.js", "assets/index-1.js", "assets/ElementIds.js", "assets/useQuery.js", "assets/___vite-browser-external_commonjs-proxy.js", "assets/util-1.js", "assets/util-2.js", "assets/Shortcut.js", "assets/useWillUnmount.js", "assets/use-motion-value.js", "assets/use-transform.js", "assets/index-6.js", "assets/CircularProgress.js", "assets/capitalize.js", "assets/index-17.js", "assets/use-force-update.js", "assets/GimkitLiveQuestion.js", "assets/Text.js", "assets/getCloudinaryUrl.js", "assets/LazyLatexRenderer.js", "assets/Tooltip.js", "assets/index-9.js", "assets/index-23.js", "assets/useIntervalWhen.js", "assets/react-flip-move.es.js", "assets/sounds.js", "assets/App-5.js", "assets/AnimatedBackground-2.js", "assets/useDebouncedValue.js", "assets/FillRemainingSpace.js", "assets/index-24.js", "assets/TrackEvent.js", "assets/TrackPostHogEvent.js", "assets/index-16.js", "assets/useForm.js", "assets/useBreakpoint.js", "assets/QuestionCircleOutlined.js", "assets/index-8.js", "assets/DownOutlined.js", "assets/index-11.js", "assets/useBubbleLock.js", "assets/StarOutlined.js"]))) => i.map(i => d[i]);
import {
    r as e,
    j as t,
    p as s,
    a as p,
    t as d
} from "./_index.js";
import {
    s as _
} from "./index-4.js";
import "./context.js";
const E = e.lazy(() => s(() => import("./Overview.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]))),
    f = e.lazy(() => s(() => import("./Requirements.js"), __vite__mapDeps([17, 1, 2, 18, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]))),
    h = e.lazy(() => s(() => import("./Form.js"), __vite__mapDeps([20, 1, 2, 21, 22, 12, 23, 14, 24, 25, 26, 27, 13, 28, 15, 29, 6, 7, 8, 30, 31, 19, 5, 18, 32, 33, 34, 4, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 3, 46, 47, 9, 10, 11, 16, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91]))),
    b = n => {
        const [i, a] = e.useState("overview"), u = () => {
            if (i === "overview") return t.jsx(E, {
                next: () => a("requirements")
            });
            if (i === "requirements") return t.jsx(f, {
                publishRequirementError: n.publishRequirementError,
                next: () => a("form")
            });
            if (i === "form") {
                const l = r => new Promise((m, c) => {
                    p({
                        url: "/api/created-map/listing/create",
                        data: {
                            name: r.name,
                            description: r.description,
                            imageUrl: r.imageUrl,
                            educationalRating: r.educationalRating,
                            map: window._mapId
                        },
                        success: () => {
                            _.success("Map published!"), n.refetch(), m(null)
                        },
                        error: o => {
                            d({
                                e: o,
                                default: {
                                    title: "Error publishing map",
                                    content: "Please try again."
                                }
                            }), c(o)
                        }
                    })
                });
                return t.jsx(h, {
                    handleSubmit: l
                })
            }
            return null
        };
        return t.jsx(e.Suspense, {
            fallback: null,
            children: u()
        })
    };
export {
    b as
    default
};