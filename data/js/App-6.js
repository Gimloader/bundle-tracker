import {
    a as p,
    a5 as e,
    a6 as a,
    n as s,
    r as c,
    j as o
} from "./index-JueF_e_O.js";
import {
    s as m,
    S as n,
    C as u
} from "./ContentContainer-BtjlqBjJ.js";
import {
    P as d
} from "./mobxreact.esm-Ws-CV3HT.js";
import {
    N as f
} from "./NavigateTo-B9Fkdix9.js";
import "./ImagePreview-D1w737eq.js";
import "./getCloudinaryUrl-Drn97BLG.js";
import "./MenuItem-DD2t2rp-.js";
import "./Question-DFBLELga.js";
import "./LazyLatexRenderer-QF7uKX2E.js";
import "./FontAwesomeIcon-CiZylb_V.js";
import "./index-QLK40o1i.js";
import "./useBubbleLock-iAvgPw8B.js";
import "./index-DwJM4HGs.js";
import "./index-CgktaOfj.js";
import "./CopyOutlined-D8Tnfq0_.js";
import "./EditOutlined-B6aDouN2.js";
import "./App-L6yX0L6n.js";
import "./Sizes-BhgpZp_e.js";
import "./App-BKUv5aDr.js";
import "./AccessibleAnchor-C5KFFiup.js";
import "./motion-C-xmDj6Z.js";
import "./index-DWUaWm5X.js";
import "./price-1Xs9YDh1.js";
import "./TrackPostHogEvent-BOHwnqir.js";
import "./index-Dx05C7sF.js";
import "./index-CrBw-JUo.js";
import "./index-C3nE64hA.js";
import "./context-CjY8B7F1.js";
import "./StarOutlined-BGGlbh6F.js";
import "./Shortcut-CMqBR2Ku.js";
import "./Names-DfDh6qGd.js";
import "./NotionContentWrapper-DzaDTzji.js";
import "./index-txCQgMuj.js";
import "./fonts-vWzMkxX4.js";
import "./UsergroupAddOutlined-DHD6lQOl.js";
import "./App-Bm_VwUT0.js";
import "./Hook-gQ03nro0.js";
import "./index-B0XdKQV8.js";
import "./DownOutlined-2rilSz_X.js";
import "./index-7_9qGeDt.js";
import "./move-BQfrK9lH.js";
import "./CheckOutlined-BVeheXUJ.js";
import "./AppTypes-CyYfgWns.js";
import "./Codes-PICm55I_.js";
import "./index-B9GXaOh9.js";
import "./index-D2z5EOhv.js";
import "./DeleteOutlined-pTRLjAw2.js";
import "./advancedFormat-Cxo7fGHE.js";
import "./useQuery-Bxz3ggSG.js";
import "./QuizTypes-SHiKhVER.js";
import "./MapModeType-BXMqp17U.js";
import "./TrackEvent-C_GWthE7.js";
import "./InfiniteScroller-l5wgWpmD.js";
import "./index.es-C7rPLWlk.js";
import "./CircularProgress-Cjtfl07m.js";
import "./capitalize-DYAFKEJ7.js";
import "./inheritsLoose-CU-hyjUj.js";
import "./Paper-Cctx9C_2.js";
import "./RedirectToHomepage-CwaTsLJn.js";
import "./CopyKit-DXBaiYDZ.js";
import "./QuestionCircleOutlined-BQK1Tego.js";
import "./PlayCircleOutlined-CxebZFp5.js";
import "./ShareAltOutlined-BpbAyXMh.js";
import "./App-CVsQbxzN.js";
import "./index-WAenXna7.js";
import "./colors-DeP7YnlJ.js";
import "./useWarningOnMountInDevelopment-VsZQFfAu.js";
import "./util-D-n1b5ES.js";
import "./index-Cb9CjGY0.js";
import "./useForm-BgB5oypL.js";
import "./useBreakpoint-CLaqhf0_.js";
import "./useForceUpdate-B8fMqphv.js";
import "./index-BHb_x4P0.js";
import "./FillRemainingSpace-Bjf2gprg.js";
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