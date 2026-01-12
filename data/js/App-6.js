import {
    a as p,
    a2 as e,
    a3 as a,
    n as s,
    r as c,
    j as o
} from "./_index.js";
import {
    s as m,
    S as n,
    C as u
} from "./ContentContainer.js";
import {
    P as d
} from "./mobxreact.esm.js";
import {
    N as f
} from "./NavigateTo.js";
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
import "./App-4.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./util-1.js";
import "./index-16.js";
import "./useForm.js";
import "./useBreakpoint.js";
import "./useForceUpdate.js";
import "./index-13.js";
import "./FillRemainingSpace.js";
const g = i => {
        const {
            kit: t
        } = m;
        t.errorFetchingKit = !1, t.fetchingKit = !0, p({
            url: `/api/games/fetch/${i}`,
            method: "get",
            success: r => {
                a() && (m.user.loggedIn = !0), t.id = r.kit._id, t.name = r.kit.title, t.coverPhoto = r.kit.gif, t.creatorName = r.creator.name, t.creatorId = r.creator._id, t.kitPrivacy = r.kit.privacy, t.questions.replace(r.kit.questions)
            },
            error: r => {
                t.errorFetchingKit = !0, f(e)
            },
            both: () => t.fetchingKit = !1
        })
    },
    Gt = () => {
        const {
            id: i
        } = s();
        return c.useEffect(() => (g(i), () => {
            m.navigation.reset()
        }), [i]), o.jsx(n.Provider, {
            value: m,
            children: o.jsx(d, {
                ...m,
                children: o.jsx(o.Fragment, {
                    children: o.jsx(u, {
                        kitId: i
                    })
                })
            })
        })
    };
export {
    Gt as
    default
};