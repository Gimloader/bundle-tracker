import {
    j as t,
    U as a,
    dU as i,
    D as s,
    B as n,
    d as e
} from "./_index.js";
import {
    a as p
} from "./Centered.js";
import {
    G as m
} from "./GetAssetPath.js";
import {
    A as l
} from "./AccessibleAnchor.js";
import {
    C as h
} from "./Button.js";
import {
    T as r
} from "./index-14.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-5.js";
import "./index-3.js";
import "./index-2.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
const F = o => t.jsxs(c, {
        children: [t.jsx(x, {}), t.jsx(r.Title, {
            style: {
                fontFamily: a.FugazOne,
                textTransform: "uppercase"
            },
            level: 1,
            children: "Publish"
        }), t.jsxs(r.Text, {
            style: {
                marginTop: 10
            },
            children: ["Share your map with the world! Publish your map to have it appear on our", " ", t.jsx(l, {
                to: i,
                target: "_blank",
                style: {
                    color: h.Yellow,
                    textDecoration: "underline"
                },
                children: "Creative Discovery"
            }), " ", "page, where anybody can find and play your map!"]
        }), t.jsx(s, {}), t.jsx(n, {
            size: "large",
            block: !0,
            type: "primary",
            style: {
                height: 55
            },
            onClick: o.next,
            children: "Continue"
        })]
    }),
    c = e(p).attrs({
        className: "maxWidth"
    })`
  text-align: center;
`,
    x = e.img.attrs({
        src: m("publishing/megaphone.svg")
    })`
  height: 85px;
  margin-bottom: 17px;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(-8deg);
`;
export {
    F as
    default
};