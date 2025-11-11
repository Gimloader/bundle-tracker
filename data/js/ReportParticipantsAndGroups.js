import {
    j as i,
    q as s
} from "./index-ku7LFjMf.js";
import {
    c as e
} from "./ReportAccuracyMeter-Bk9pkVLy.js";
import {
    S as n
} from "./index-BxZP8ZJO.js";
const p = t => {
    var a;
    return i.jsxs("div", {
        children: [i.jsxs("div", {
            style: {
                fontStyle: "italic"
            },
            children: [t.participants, " ", s("participant", t.participants)]
        }), (a = t.groups) != null && a.length ? i.jsx(n, {
            direction: "horizontal",
            wrap: !0,
            size: "small",
            style: {
                marginTop: "0.3em"
            },
            children: t.groups.map(r => i.jsx(e, {
                to: `/class/${r._id}`,
                children: r.name
            }, t.reportId + r._id))
        }) : null]
    })
};
export {
    p as R
};