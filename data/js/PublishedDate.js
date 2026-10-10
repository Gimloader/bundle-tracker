import {
    t as e
} from "./jsx-runtime.js";
var t = e(),
    n = ({
        value: e
    }) => {
        let n = e ? new Date(e) : null;
        return !n || Number.isNaN(n.getTime()) ? null : (0, t.jsx)(`time`, {
            dateTime: n.toISOString(),
            title: n.toLocaleString(),
            children: n.toLocaleDateString(void 0, {
                month: `short`,
                day: `numeric`,
                year: `numeric`
            })
        })
    },
    r = e => !!e && !Number.isNaN(new Date(e).getTime());
export {
    r as n, n as t
};