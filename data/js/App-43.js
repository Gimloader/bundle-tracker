import {
    n as d,
    r as x,
    j as e,
    ag as u,
    cr as r,
    d as a
} from "./_index.js";
import {
    C as h
} from "./App-44.js";
import {
    c as o,
    e as p,
    b as t,
    d as f
} from "./ElementIds.js";
import {
    S as k
} from "./App-4.js";
import {
    a as c
} from "./Shortcut.js";
import {
    S as j
} from "./App-5.js";
import {
    F as i
} from "./FontAwesomeIcon.js";
import {
    A as S
} from "./AnimatedBackground-2.js";
import "./GetAssetPath.js";
import "./Centered.js";
import "./Names.js";
import "./SeasonTicketName.js";
import "./SeasonTicketInlineUpsell.js";
import "./AccessibleAnchor.js";
import "./OwnsSeasonTicket.js";
import "./index-2.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./inheritsLoose.js";
import "./useQuery.js";
import "./mobxreact.esm.js";
import "./index-1.js";
import "./index-6.js";
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
const C = [{
        param: "locker",
        screen: o.locker
    }, {
        param: "shop",
        screen: o.shop
    }, {
        param: "season-ticket",
        screen: o.seasonTicket
    }, {
        param: "pack",
        screen: o.pack
    }],
    co = () => {
        const {
            id: s
        } = d(), n = x.useMemo(() => {
            var m;
            return s ? ((m = C.find(l => l.param === s)) == null ? void 0 : m.screen) || !1 : o.xp
        }, [s]);
        return n ? e.jsx(b, {
            id: p.container,
            children: e.jsxs(S, {
                children: [e.jsx(k, {
                    theme: c.dark,
                    includeSpacer: !0,
                    hideBorder: !0,
                    containerDivStyle: {
                        backdropFilter: "blur(4px)"
                    },
                    children: e.jsx(j, {
                        theme: c.dark,
                        rightSideContent: e.jsx(f, {}),
                        bottomContent: e.jsx("div", {
                            style: {
                                height: 9
                            }
                        }),
                        options: [{
                            id: o.xp,
                            label: t[o.xp].title,
                            path: r,
                            icon: e.jsx(i, {
                                name: t[o.xp].icon
                            })
                        }, {
                            id: o.seasonTicket,
                            label: t[o.seasonTicket].title,
                            path: `${r}/season-ticket`,
                            icon: e.jsx(i, {
                                name: t[o.seasonTicket].icon
                            })
                        }, {
                            id: o.locker,
                            label: t[o.locker].title,
                            path: `${r}/locker`,
                            icon: e.jsx(i, {
                                name: t[o.locker].icon
                            })
                        }, {
                            id: o.shop,
                            label: t[o.shop].title,
                            path: `${r}/shop`,
                            icon: e.jsx(i, {
                                name: t[o.shop].icon
                            })
                        }]
                    })
                }), e.jsx(g, {
                    id: p.content,
                    children: e.jsx(v, {
                        children: e.jsx(h, {
                            screen: n,
                            pageMode: !0
                        })
                    })
                })]
            })
        }) : e.jsx(u, {
            replace: !0,
            to: r
        })
    },
    b = a.div.attrs({
        className: "flex-column"
    })`
  flex: 1;
`,
    g = a.div.attrs({
        className: "flex-column vc"
    })`
  backdrop-filter: blur(4px);
  flex: 1;
`,
    v = a.div.attrs({
        className: "flex-column"
    })`
  width: 90%;
  max-width: 90%;
  padding: 30px 0px;
  padding-bottom: 100px;
  flex: 1;
`;
export {
    co as
    default
};