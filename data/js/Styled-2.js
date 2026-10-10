import "./rolldown-runtime.js";
import {
    t as e
} from "./react-1.js";
import {
    t
} from "./card.js";
import {
    t as n
} from "./jsx-runtime.js";
import {
    c as r,
    n as i,
    s as a
} from "./_index.js";
e();
var o = n(),
    s = {
        color: i.Black,
        fontFamily: r.SFPro,
        width: `100%`
    },
    c = e => (0, o.jsx)(t, {
        style: s,
        ...e
    }),
    l = e => (0, o.jsx)(`div`, {
        style: {
            fontWeight: a.UltraBold,
            fontSize: 22
        },
        children: e.children
    }),
    u = e => (0, o.jsx)(`div`, {
        style: {
            marginTop: -2,
            marginBottom: 4,
            fontSize: 14,
            lineHeight: `16px`
        },
        children: e.children
    });
export {
    u as n, l as r, c as t
};