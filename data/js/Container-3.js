import {
    z as i,
    r as m,
    a8 as p,
    j as r
} from "./_index.js";
import {
    S as e
} from "./App-15.js";
import {
    S as a
} from "./App-4.js";
import {
    F as s
} from "./FillRemainingSpace.js";
import {
    N as n
} from "./NavigateTo.js";
import "./ContentContainer.js";
import "./mobxreact.esm.js";
import "./ImagePreview.js";
import "./getCloudinaryUrl.js";
import "./MenuItem.js";
import "./Question.js";
import "./LazyLatexRenderer.js";
import "./FontAwesomeIcon.js";
import "./index-11.js";
import "./useBubbleLock.js";
import "./index-5.js";
import "./index-12.js";
import "./CopyOutlined.js";
import "./EditOutlined.js";
import "./App-1.js";
import "./Sizes.js";
import "./App-2.js";
import "./AccessibleAnchor.js";
import "./motion.js";
import "./index-1.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./index-2.js";
import "./index-3.js";
import "./index-4.js";
import "./context.js";
import "./StarOutlined.js";
import "./Shortcut.js";
import "./Names.js";
import "./NotionContentWrapper.js";
import "./index-6.js";
import "./fonts.js";
import "./UsergroupAddOutlined.js";
import "./App-3.js";
import "./Hook.js";
import "./index-7.js";
import "./DownOutlined.js";
import "./index-8.js";
import "./move.js";
import "./CheckOutlined.js";
import "./AppTypes.js";
import "./Codes.js";
import "./index-9.js";
import "./index-10.js";
import "./DeleteOutlined.js";
import "./advancedFormat.js";
import "./useQuery.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./TrackEvent.js";
import "./InfiniteScroller.js";
import "./index.es.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./inheritsLoose.js";
import "./Paper.js";
import "./RedirectToHomepage.js";
import "./CopyKit.js";
import "./QuestionCircleOutlined.js";
import "./PlayCircleOutlined.js";
import "./ShareAltOutlined.js";
import "./util-1.js";
import "./index-16.js";
import "./useForm.js";
import "./useBreakpoint.js";
import "./useForceUpdate.js";
import "./index-13.js";
import "./KitPreview.js";
import "./Language.js";
import "./EducatorSpecificInfoStage.js";
import "./NameAndPasswordStage.js";
import "./ContinueButton.js";
import "./FilterOutlined.js";
import "./index-20.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
const l = () => {
        const [o] = i(), t = o.get("q");
        return m.useEffect(() => {
            t || n(p.navigation.homeUrl)
        }, [t]), t ? r.jsx(s, {
            children: r.jsxs("div", {
                className: "maxHeight flex-column",
                style: {
                    overflow: "hidden"
                },
                children: [r.jsx(a, {
                    includeSpacer: !0
                }), r.jsx("div", {
                    style: {
                        flex: 1,
                        overflow: "hidden"
                    },
                    children: r.jsx(e, {
                        searchQuery: t,
                        overrideTitle: !0
                    })
                })]
            })
        }) : null
    },
    Br = () => r.jsx(l, {});
export {
    Br as
    default
};