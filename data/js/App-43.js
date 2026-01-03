import {
    n as d,
    r as x,
    j as e,
    ai as u,
    cs as r,
    d as a
} from "./index-JueF_e_O.js";
import {
    C as h
} from "./App-C0J5to4W.js";
import {
    c as o,
    e as p,
    b as t,
    d as f
} from "./ElementIds-BgK3Rezn.js";
import {
    S as k
} from "./App-CVsQbxzN.js";
import {
    a as c
} from "./Shortcut-CMqBR2Ku.js";
import {
    S as j
} from "./App-Cn07I0ls.js";
import {
    F as i
} from "./FontAwesomeIcon-CiZylb_V.js";
import {
    A as S
} from "./AnimatedBackground-CStbvNAZ.js";
import "./GetAssetPath-D1U8ycN4.js";
import "./Centered-Cf2wQqVp.js";
import "./Names-DfDh6qGd.js";
import "./SeasonTicketName-BN_q1-rH.js";
import "./SeasonTicketInlineUpsell-B-M9OdKv.js";
import "./AccessibleAnchor-C5KFFiup.js";
import "./OwnsSeasonTicket-WIUrnSdW.js";
import "./index-Dx05C7sF.js";
import "./CircularProgress-Cjtfl07m.js";
import "./capitalize-DYAFKEJ7.js";
import "./inheritsLoose-CU-hyjUj.js";
import "./useQuery-Bxz3ggSG.js";
import "./mobxreact.esm-Ws-CV3HT.js";
import "./index-DWUaWm5X.js";
import "./index-txCQgMuj.js";
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