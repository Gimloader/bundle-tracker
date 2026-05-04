import {
    j as e,
    H as o,
    cn as s,
    a6 as n,
    F as r,
    Z as i
} from "./_index.js";
import {
    A as a
} from "./AccessibleAnchor.js";
import {
    S as m
} from "./SeasonTicketName.js";
import {
    O as l
} from "./OwnsSeasonTicket.js";
const f = t => l() ? null : e.jsx(o, {
    theme: {
        algorithm: s.defaultAlgorithm
    },
    children: e.jsx(n, {
        showIcon: !0,
        style: {
            marginTop: t.marginTop ?? 0,
            marginBottom: t.marginBottom ?? 0
        },
        message: e.jsxs("span", {
            children: [t.text, " with the", " ", e.jsx(a, {
                to: i,
                style: {
                    textDecoration: "underline",
                    fontWeight: r.Bold
                },
                children: m.name
            })]
        })
    })
});
export {
    f as S
};