const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/Overview.js", "assets/rolldown-runtime.js", "assets/react-1.js", "assets/button-1.js", "assets/assertThisInitialized.js", "assets/Compact.js", "assets/color.js", "assets/compact-item.js", "assets/typography.js", "assets/es-2.js", "assets/_index.js", "assets/dist-1.js", "assets/utils.js", "assets/modal-1.js", "assets/ContextIsolator.js", "assets/dist-2.js", "assets/wrapNativeSuper.js", "assets/InfoCircleFilled.js", "assets/useLocale.js", "assets/useCSSVarCls.js", "assets/pickAttrs.js", "assets/PurePanel.js", "assets/Company.js", "assets/Paths.js", "assets/decorate.js", "assets/jsx-runtime.js", "assets/dist-3.js", "assets/spin.js", "assets/QueryClientProvider.js", "assets/queryClient.js", "assets/infiniteQueryBehavior.js", "assets/index-Tu04tXLf.css", "assets/tooltip-1.js", "assets/es-1.js", "assets/styleChecker.js", "assets/input.js", "assets/useVariants.js", "assets/CheckOutlined.js", "assets/CopyOutlined.js", "assets/EditOutlined.js", "assets/EnterOutlined.js", "assets/copy-to-clipboard.js", "assets/AccessibleAnchor.js", "assets/GetAssetPath.js", "assets/Centered.js", "assets/Button-2.js", "assets/polished.esm.js", "assets/inheritsLoose.js", "assets/Requirements.js", "assets/space.js", "assets/Names.js", "assets/SeasonTicketName.js", "assets/Form-2.js", "assets/message.js", "assets/context.js", "assets/select.js", "assets/move.js", "assets/es-3.js", "assets/DownOutlined.js", "assets/checkbox.js", "assets/useBubbleLock.js", "assets/form-1.js", "assets/useForm.js", "assets/collapse.js", "assets/useBreakpoint.js", "assets/useForceUpdate.js", "assets/QuestionCircleOutlined.js", "assets/slider.js", "assets/upload.js", "assets/progress.js", "assets/DeleteOutlined.js", "assets/DownloadOutlined.js", "assets/PaperClipOutlined.js", "assets/StarOutlined.js", "assets/TrackEvent.js", "assets/TrackPostHogEvent.js", "assets/OwnsSeasonTicket.js", "assets/Send.js", "assets/FetchRoom.js", "assets/stores-2.js", "assets/MapModeType.js", "assets/MapStyle.js"]))) => i.map(i => d[i]);
import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    E as n
} from "./utils.js";
import {
    t as r
} from "./react-1.js";
import {
    t as i
} from "./message.js";
import {
    t as a
} from "./jsx-runtime.js";
import {
    h as o
} from "./_index.js";
var s = e(r()),
    c = a(),
    l = s.lazy(() => o(() => import(`./Overview.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]))),
    u = s.lazy(() => o(() => import(`./Requirements.js`), __vite__mapDeps([48, 1, 2, 3, 4, 5, 6, 7, 49, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 50, 51, 45, 46, 47]))),
    d = s.lazy(() => o(() => import(`./Form-2.js`), __vite__mapDeps([52, 1, 12, 11, 2, 13, 4, 5, 6, 14, 15, 16, 17, 7, 18, 19, 20, 3, 21, 22, 23, 24, 25, 53, 54, 55, 9, 10, 26, 27, 28, 29, 30, 31, 56, 57, 33, 35, 36, 37, 58, 59, 60, 61, 32, 62, 63, 64, 65, 66, 67, 49, 8, 34, 38, 39, 40, 41, 68, 69, 70, 71, 72, 73, 42, 74, 75, 50, 51, 76, 45, 46, 47, 77, 78, 79, 80, 81]))),
    f = e => {
        let [r, a] = s.useState(`overview`);
        return (0, c.jsx)(s.Suspense, {
            fallback: null,
            children: r === `overview` ? (0, c.jsx)(l, {
                next: () => a(`requirements`)
            }) : r === `requirements` ? (0, c.jsx)(u, {
                requiresUsername: e.requiresUsername,
                refetch: e.refetch,
                publishRequirementError: e.publishRequirementError,
                next: () => a(`form`)
            }) : r === `form` ? (0, c.jsx)(d, {
                handleSubmit: r => new Promise((a, o) => {
                    t({
                        url: `/api/created-map/listing/create`,
                        data: {
                            name: r.name,
                            description: r.description,
                            imageUrl: r.imageUrl,
                            educationalRating: r.educationalRating,
                            map: window._mapId
                        },
                        success: () => {
                            i.success(`Map published!`), e.refetch(), a(null)
                        },
                        error: e => {
                            n({
                                e,
                                default: {
                                    title: `Error publishing map`,
                                    content: `Please try again.`
                                }
                            }), o(e)
                        }
                    })
                })
            }) : null
        })
    };
export {
    f as
    default
};