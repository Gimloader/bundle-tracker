import {
    y as a,
    n as p,
    j as t,
    e as o,
    S as l,
    D as c,
    F as d,
    d as u
} from "./index-JueF_e_O.js";
import {
    P as h,
    I as g,
    K as f
} from "./App-Ca9bMRyR.js";
import {
    u as x
} from "./useQuery-Bxz3ggSG.js";
import "./App-CVsQbxzN.js";
import "./Shortcut-CMqBR2Ku.js";
import "./Names-DfDh6qGd.js";
import "./mobxreact.esm-Ws-CV3HT.js";
import "./AccessibleAnchor-C5KFFiup.js";
import "./index-DWUaWm5X.js";
import "./index-Dx05C7sF.js";
import "./index-txCQgMuj.js";
import "./FontAwesomeIcon-CiZylb_V.js";
import "./App-BKUv5aDr.js";
import "./Sizes-BhgpZp_e.js";
import "./motion-C-xmDj6Z.js";
import "./price-1Xs9YDh1.js";
import "./TrackPostHogEvent-BOHwnqir.js";
import "./index-CrBw-JUo.js";
import "./index-C3nE64hA.js";
import "./context-CjY8B7F1.js";
import "./StarOutlined-BGGlbh6F.js";
import "./NavigateTo-B9Fkdix9.js";
import "./index-WAenXna7.js";
import "./colors-DeP7YnlJ.js";
import "./useWarningOnMountInDevelopment-VsZQFfAu.js";
import "./index-D2z5EOhv.js";
import "./index-DwJM4HGs.js";
import "./move-BQfrK9lH.js";
import "./CapitalizeFirstLetter-BbjzObVf.js";
import "./getCloudinaryUrl-Drn97BLG.js";
import "./Language-BH3GJlTJ.js";
import "./EducatorSpecificInfoStage-B26i9RHU.js";
import "./NameAndPasswordStage-0xPQ51fN.js";
import "./ContinueButton-CoGA3WWh.js";
import "./index-7_9qGeDt.js";
import "./CheckOutlined-BVeheXUJ.js";
import "./DownOutlined-2rilSz_X.js";
import "./index-BHb_x4P0.js";
import "./useBubbleLock-iAvgPw8B.js";
import "./useForm-BgB5oypL.js";
import "./index-Glo9ShIH.js";
const y = i => x({
        queryKey: ["profile", i],
        queryFn: async () => await a({
            url: "/api/games/profile/" + i
        }),
        refetchOnMount: !1
    }),
    nr = () => {
        const {
            id: i
        } = p(), {
            data: r,
            error: s,
            isLoading: m
        } = y(i), n = () => m ? t.jsx("div", {
            className: "maxAll flex-center",
            children: t.jsx(l, {
                size: "large"
            })
        }) : s ? t.jsx("div", {
            className: "maxAll flex-center",
            children: "There was an error loading the kits for this user. Please try again later."
        }) : t.jsxs(t.Fragment, {
            children: [t.jsx(j, {
                children: r == null ? void 0 : r.user.name
            }), t.jsx(c, {
                style: {
                    marginBottom: 35
                }
            }), r.games.length ? t.jsx(g, {
                children: r == null ? void 0 : r.games.map(e => t.jsx(f, {
                    id: e._id,
                    title: e.title,
                    image: e.gif,
                    questionCount: e.questionCount,
                    playCount: e.playCount,
                    creatorName: e.creator,
                    createdAt: e.dateCreated
                }, e._id))
            }) : t.jsx("div", {
                style: {
                    background: o.White,
                    padding: 30,
                    borderRadius: 8
                },
                className: "light-shadow",
                children: "This user does not currently have any public kits. Check back later!"
            })]
        });
        return t.jsx(h, {
            title: (r == null ? void 0 : r.user.name) ?? "Profile",
            classNames: {
                container: "flex-center"
            },
            styles: {
                container: {
                    backgroundColor: o.Snow
                },
                content: {
                    padding: 40,
                    width: "85%",
                    maxWidth: 1350
                }
            },
            children: n()
        })
    },
    j = u.div`
  font-size: 42px;
  color: ${o.Black};
  font-weight: ${d.UltraBold};
`;
export {
    nr as
    default
};