import "./rolldown-runtime.js";
import {
    S as e
} from "./utils.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./space.js";
import {
    t as r
} from "./jsx-runtime.js";
import {
    r as i
} from "./ReportAccuracyMeter.js";
t();
var a = r(),
    o = t => {
        var r;
        return (0, a.jsxs)(`div`, {
            children: [(0, a.jsxs)(`div`, {
                style: {
                    fontStyle: `italic`
                },
                children: [t.participants, ` `, e(`participant`, t.participants)]
            }), (r = t.groups) != null && r.length ? (0, a.jsx)(n, {
                direction: `horizontal`,
                wrap: !0,
                size: `small`,
                style: {
                    marginTop: `0.3em`
                },
                children: t.groups.map(e => (0, a.jsx)(i, {
                    to: `/class/${e._id}`,
                    children: e.name
                }, t.reportId + e._id))
            }) : null]
        })
    };
export {
    o as t
};