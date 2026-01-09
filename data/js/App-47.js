import {
    y as a,
    n as p,
    j as t,
    e as o,
    S as l,
    D as c,
    F as d,
    d as u
} from "./_index.js";
import {
    P as h,
    I as g,
    K as f
} from "./App-46.js";
import {
    u as x
} from "./useQuery.js";
import "./App-4.js";
import "./Shortcut.js";
import "./Names.js";
import "./mobxreact.esm.js";
import "./AccessibleAnchor.js";
import "./index-1.js";
import "./index-2.js";
import "./index-6.js";
import "./FontAwesomeIcon.js";
import "./App-2.js";
import "./Sizes.js";
import "./motion.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./index-3.js";
import "./index-4.js";
import "./context.js";
import "./StarOutlined.js";
import "./NavigateTo.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
import "./CapitalizeFirstLetter.js";
import "./getCloudinaryUrl.js";
import "./Language.js";
import "./EducatorSpecificInfoStage.js";
import "./NameAndPasswordStage.js";
import "./ContinueButton.js";
import "./index-8.js";
import "./CheckOutlined.js";
import "./DownOutlined.js";
import "./index-13.js";
import "./useBubbleLock.js";
import "./useForm.js";
import "./index-20.js";
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