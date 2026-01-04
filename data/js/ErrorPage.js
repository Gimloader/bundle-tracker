import {
    j as t,
    T as e,
    F as i,
    D as o,
    B as s,
    e as n,
    U as l,
    d as r
} from "./_index.js";
import {
    S as a
} from "./App-4.js";
import {
    R as m
} from "./WarningOutlined.js";
import "./Shortcut.js";
import "./Names.js";
import "./mobxreact.esm.js";
import "./AccessibleAnchor.js";
import "./index-1.js";
import "./index-2.js";
import "./index-6.js";
import "./FontAwesomeIcon.js";
import "./App-2.js";
import "./Sizes.js";
import "./motion.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./index-3.js";
import "./index-4.js";
import "./context.js";
import "./StarOutlined.js";
import "./NavigateTo.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
const $ = () => t.jsxs(t.Fragment, {
        children: [t.jsx(e, {
            title: "Error"
        }), t.jsxs(p, {
            className: "flex-column vc",
            children: [t.jsx(a, {
                includeSpacer: !0
            }), t.jsxs(d, {
                className: "flex flex-column hc vc wrap",
                children: [t.jsx(m, {
                    style: {
                        fontSize: 60,
                        color: "red"
                    }
                }), t.jsx("div", {
                    style: {
                        fontSize: 32,
                        fontWeight: i.UltraBold
                    },
                    children: "Something went wrong..."
                }), t.jsx("div", {
                    style: {
                        marginTop: -6,
                        fontSize: 18
                    },
                    children: "We may be experiencing technical difficulties"
                }), t.jsx(o, {}), t.jsx("div", {
                    style: {
                        fontSize: 25,
                        fontWeight: i.UltraBold
                    },
                    children: "Status:"
                }), t.jsx("img", {
                    src: "https://gimkit.crisp.watch/includes/badge/",
                    style: {
                        height: 70,
                        width: 70,
                        borderRadius: "50%",
                        marginBottom: 10
                    }
                }), t.jsxs("div", {
                    style: {
                        fontSize: 18
                    },
                    children: [t.jsxs("div", {
                        children: [t.jsx("span", {
                            style: {
                                color: "green"
                            },
                            children: "Green:"
                        }), " Servers Healthy"]
                    }), t.jsxs("div", {
                        children: [t.jsx("span", {
                            style: {
                                color: "orange"
                            },
                            children: "Orange:"
                        }), " Servers Slow"]
                    }), t.jsxs("div", {
                        children: [t.jsx("span", {
                            style: {
                                color: "red"
                            },
                            children: "Red:"
                        }), " Servers Not Working"]
                    })]
                }), t.jsx(s, {
                    type: "primary",
                    style: {
                        marginTop: 10
                    },
                    href: "https://gimkit.crisp.watch/en/",
                    target: "_blank",
                    children: "Open Status Page"
                }), t.jsx("div", {
                    style: {
                        height: 25
                    }
                })]
            })]
        })]
    }),
    p = r.div`
  padding-top: 25px;
  text-align: center;
  width: 100%;
  color: ${n.Black};
  font-family: ${l.SFPro};
`,
    d = r.div`
  width: 100%;
  width: 90%;
  max-width: 650px;
`;
export {
    $ as
    default
};