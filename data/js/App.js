import {
    y as a,
    n as p,
    j as t,
    e as o,
    S as l,
    D as c,
    F as d,
    d as u
} from "./index-ku7LFjMf.js";
import {
    P as h,
    I as g,
    K as f
} from "./App-CN9G3421.js";
import {
    u as x
} from "./useQuery-hdmTx8_W.js";
import "./App-ovs4aexB.js";
import "./Shortcut-DXonFE_o.js";
import "./Names-DfDh6qGd.js";
import "./mobxreact.esm-DMnKt9Bd.js";
import "./AccessibleAnchor-BF5rAXAt.js";
import "./index-D9ienx5q.js";
import "./index-BxZP8ZJO.js";
import "./index-BHufcC9X.js";
import "./FontAwesomeIcon-T_jlP-aU.js";
import "./App-rSwKrHRH.js";
import "./Sizes-BhgpZp_e.js";
import "./motion-CNFKkFwI.js";
import "./price-1Xs9YDh1.js";
import "./TrackPostHogEvent-VjbQag8Y.js";
import "./index-CnyfLCPk.js";
import "./index-CSZs-q3q.js";
import "./context-B_DQj2FC.js";
import "./StarOutlined-CcfStKnz.js";
import "./NavigateTo-DZfG1e6D.js";
import "./index-D8wXVplQ.js";
import "./colors-DeP7YnlJ.js";
import "./useWarningOnMountInDevelopment-8ZFYEU6R.js";
import "./index-ypkKQaxP.js";
import "./index-mg0IShzL.js";
import "./move-Bk7EurOW.js";
import "./CapitalizeFirstLetter-BbjzObVf.js";
import "./getCloudinaryUrl-Drn97BLG.js";
import "./Language-BH3GJlTJ.js";
import "./EducatorSpecificInfoStage-DBfRUQ2Z.js";
import "./NameAndPasswordStage-DnrCc3e5.js";
import "./ContinueButton-CnDUpGoE.js";
import "./index-BoJ_LMH6.js";
import "./CheckOutlined-WriBlnUi.js";
import "./DownOutlined-970bfPno.js";
import "./index-AXYz8sET.js";
import "./useBubbleLock-BvdmxBqf.js";
import "./useForm-DrNW71pE.js";
import "./index-D74oUuA1.js";
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