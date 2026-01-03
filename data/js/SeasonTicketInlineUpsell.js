import {
    j as e,
    E as o,
    cn as s,
    a0 as n,
    F as r,
    X as i
} from "./index-JueF_e_O.js";
import {
    A as a
} from "./AccessibleAnchor-C5KFFiup.js";
import {
    S as m
} from "./SeasonTicketName-BN_q1-rH.js";
import {
    O as l
} from "./OwnsSeasonTicket-WIUrnSdW.js";
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