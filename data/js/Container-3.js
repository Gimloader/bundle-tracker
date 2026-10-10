import {
    o as e
} from "./rolldown-runtime.js";
import {
    U as t
} from "./utils.js";
import {
    t as n
} from "./react-1.js";
import {
    r
} from "./dist-3.js";
import {
    t as i
} from "./App-4.js";
import {
    t as a
} from "./App-16.js";
import {
    t as o
} from "./jsx-runtime.js";
import {
    t as s
} from "./NavigateTo.js";
import {
    t as c
} from "./FillRemainingSpace.js";
var l = e(n()),
    u = o(),
    d = () => {
        let [e] = r(), n = e.get(`q`);
        return l.useEffect(() => {
            n || s(t.navigation.homeUrl)
        }, [n]), n ? (0, u.jsx)(c, {
            children: (0, u.jsxs)(`div`, {
                className: `maxHeight flex-column`,
                style: {
                    overflow: `hidden`
                },
                children: [(0, u.jsx)(i, {
                    includeSpacer: !0
                }), (0, u.jsx)(`div`, {
                    style: {
                        flex: 1,
                        overflow: `hidden`
                    },
                    children: (0, u.jsx)(a, {
                        searchQuery: n,
                        overrideTitle: !0
                    })
                })]
            })
        }) : null
    },
    f = () => (0, u.jsx)(d, {});
export {
    f as
    default
};