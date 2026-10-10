import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    i as n,
    l as r
} from "./dist-3.js";
import {
    t as i
} from "./App-4.js";
import {
    d as a
} from "./Paths.js";
import {
    t as o
} from "./jsx-runtime.js";
import {
    n as s
} from "./SiteHeaderAlpha.js";
import {
    l as c
} from "./_index.js";
import {
    t as l
} from "./FontAwesomeIcon.js";
import {
    a as u,
    n as d,
    r as f,
    t as p
} from "./Navigation.js";
import m from "./App-46.js";
import {
    t as h
} from "./App-6.js";
import {
    t as g
} from "./AnimatedBackground-2.js";
var _ = e(t()),
    v = o(),
    y = [{
        param: `locker`,
        screen: u.locker
    }, {
        param: `shop`,
        screen: u.shop
    }, {
        param: `season-ticket`,
        screen: u.seasonTicket
    }, {
        param: `pack`,
        screen: u.pack
    }],
    b = () => {
        let {
            id: e
        } = r(), t = _.useMemo(() => {
            var t;
            return e ? ((t = y.find(t => t.param === e)) == null ? void 0 : t.screen) || !1 : u.xp
        }, [e]);
        return t ? (0, v.jsx)(x, {
            id: f.container,
            children: (0, v.jsxs)(g, {
                children: [(0, v.jsx)(i, {
                    theme: s.dark,
                    includeSpacer: !0,
                    hideBorder: !0,
                    containerDivStyle: {
                        backdropFilter: `blur(4px)`
                    },
                    children: (0, v.jsx)(h, {
                        theme: s.dark,
                        rightSideContent: (0, v.jsx)(d, {}),
                        bottomContent: (0, v.jsx)(`div`, {
                            style: {
                                height: 9
                            }
                        }),
                        options: [{
                            id: u.xp,
                            label: p[u.xp].title,
                            path: a,
                            icon: (0, v.jsx)(l, {
                                name: p[u.xp].icon
                            })
                        }, {
                            id: u.seasonTicket,
                            label: p[u.seasonTicket].title,
                            path: `${a}/season-ticket`,
                            icon: (0, v.jsx)(l, {
                                name: p[u.seasonTicket].icon
                            })
                        }, {
                            id: u.locker,
                            label: p[u.locker].title,
                            path: `${a}/locker`,
                            icon: (0, v.jsx)(l, {
                                name: p[u.locker].icon
                            })
                        }, {
                            id: u.shop,
                            label: p[u.shop].title,
                            path: `${a}/shop`,
                            icon: (0, v.jsx)(l, {
                                name: p[u.shop].icon
                            })
                        }]
                    })
                }), (0, v.jsx)(S, {
                    id: f.content,
                    children: (0, v.jsx)(C, {
                        children: (0, v.jsx)(m, {
                            screen: t,
                            pageMode: !0
                        })
                    })
                })]
            })
        }) : (0, v.jsx)(n, {
            replace: !0,
            to: a
        })
    },
    x = c.div.attrs({
        className: `flex-column`
    })`
  flex: 1;
`,
    S = c.div.attrs({
        className: `flex-column vc`
    })`
  backdrop-filter: blur(4px);
  flex: 1;
`,
    C = c.div.attrs({
        className: `flex-column`
    })`
  width: 90%;
  max-width: 90%;
  padding: 30px 0px;
  padding-bottom: 100px;
  flex: 1;
`;
export {
    b as
    default
};