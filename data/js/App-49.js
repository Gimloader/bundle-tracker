import "./rolldown-runtime.js";
import {
    w as e
} from "./utils.js";
import {
    t
} from "./react-1.js";
import {
    l as n
} from "./dist-3.js";
import {
    t as r
} from "./spin.js";
import {
    t as i
} from "./jsx-runtime.js";
import {
    t as a
} from "./useQuery.js";
import {
    l as o,
    n as s,
    s as c,
    y as l
} from "./_index.js";
import {
    Items as u,
    n as d,
    t as f
} from "./App-48.js";
t();
var p = t => a({
        queryKey: [`profile`, t],
        queryFn: async () => await e({
            url: `/api/games/profile/` + t
        }),
        refetchOnMount: !1
    }),
    m = i(),
    h = () => {
        let {
            id: e
        } = n(), {
            data: t,
            error: i,
            isLoading: a
        } = p(e);
        return (0, m.jsx)(d, {
            title: (t == null ? void 0 : t.user.name) ?? `Profile`,
            classNames: {
                container: `flex-center`
            },
            styles: {
                container: {
                    backgroundColor: s.Snow
                },
                content: {
                    padding: 40,
                    width: `85%`,
                    maxWidth: 1350
                }
            },
            children: a ? (0, m.jsx)(`div`, {
                className: `maxAll flex-center`,
                children: (0, m.jsx)(r, {
                    size: `large`
                })
            }) : i ? (0, m.jsx)(`div`, {
                className: `maxAll flex-center`,
                children: `There was an error loading the kits for this user. Please try again later.`
            }) : (0, m.jsxs)(m.Fragment, {
                children: [(0, m.jsx)(g, {
                    children: t == null ? void 0 : t.user.name
                }), (0, m.jsx)(l, {
                    style: {
                        marginBottom: 35
                    }
                }), t.games.length ? (0, m.jsx)(u, {
                    children: t == null ? void 0 : t.games.map(e => (0, m.jsx)(f, {
                        id: e._id,
                        title: e.title,
                        image: e.gif,
                        questionCount: e.questionCount,
                        playCount: e.playCount,
                        creatorName: e.creator,
                        createdAt: e.dateCreated
                    }, e._id))
                }) : (0, m.jsx)(`div`, {
                    style: {
                        background: s.White,
                        padding: 30,
                        borderRadius: 8
                    },
                    className: `light-shadow`,
                    children: `This user does not currently have any public kits. Check back later!`
                })]
            })
        })
    },
    g = o.div`
  font-size: 42px;
  color: ${s.Black};
  font-weight: ${c.UltraBold};
`;
export {
    h as
    default
};