import {
    j as e,
    c as t,
    e as s,
    U as i,
    F as n
} from "./_index.js";
const r = o => e.jsx(t, {
    hoverable: !0,
    style: {
        marginBottom: 10
    },
    onClick: o.onSelect,
    children: e.jsxs("div", {
        style: {
            fontFamily: i.SFPro,
            color: s.Black
        },
        children: [e.jsx("div", {
            style: {
                fontSize: 18,
                fontWeight: n.Bold
            },
            children: o.name
        }), e.jsx("div", {
            style: {
                fontSize: 14
            },
            children: o.description
        })]
    })
});
export {
    r as S
};