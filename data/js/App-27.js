import {
    r as o,
    l as E,
    a6 as P,
    n as k,
    a as u,
    j as t,
    e as s,
    U as $,
    d as i,
    S as q,
    T as B,
    D as I,
    B as F,
    F as x,
    h as l
} from "./index-JueF_e_O.js";
import {
    v as W
} from "./EmailStage-DqJq-WlQ.js";
import {
    N as z
} from "./NavigateTo-B9Fkdix9.js";
import {
    S as Q
} from "./App-CVsQbxzN.js";
import {
    I as h
} from "./index-CrBw-JUo.js";
import "./mobxreact.esm-Ws-CV3HT.js";
import "./ContinueButton-CoGA3WWh.js";
import "./ErrorMessage-BmZBzmwA.js";
import "./index-C3nE64hA.js";
import "./context-CjY8B7F1.js";
import "./Shortcut-CMqBR2Ku.js";
import "./Names-DfDh6qGd.js";
import "./AccessibleAnchor-C5KFFiup.js";
import "./index-DWUaWm5X.js";
import "./index-Dx05C7sF.js";
import "./index-txCQgMuj.js";
import "./FontAwesomeIcon-CiZylb_V.js";
import "./App-BKUv5aDr.js";
import "./Sizes-BhgpZp_e.js";
import "./motion-C-xmDj6Z.js";
import "./price-1Xs9YDh1.js";
import "./TrackPostHogEvent-BOHwnqir.js";
import "./StarOutlined-BGGlbh6F.js";
import "./index-WAenXna7.js";
import "./colors-DeP7YnlJ.js";
import "./useWarningOnMountInDevelopment-VsZQFfAu.js";
import "./index-D2z5EOhv.js";
import "./index-DwJM4HGs.js";
import "./move-BQfrK9lH.js";
const ft = () => {
        const [f, j] = o.useState(!0), [v, w] = o.useState(""), [m, S] = o.useState(""), [r, b] = o.useState(P() ? E().email : ""), [c, p] = o.useState(!1), {
            plan: a
        } = k();
        o.useEffect(() => {
            u({
                url: "/api/quote/fetch-plans",
                success: e => {
                    if (a) {
                        if (e && e.plans && !e.plans.includes(a)) {
                            l({
                                title: "Invalid plan",
                                onOk: () => window.location.href = "/"
                            });
                            return
                        }
                        w(a), j(!1)
                    }
                },
                error: () => l({
                    title: "Plan not found"
                })
            })
        }, []);
        const d = m && r && W(r),
            C = e => {
                S(e.target.value)
            },
            N = e => {
                b(e.target.value)
            },
            n = () => {
                c || !d || (p(!0), u({
                    url: "/api/quote/createFromPlan",
                    method: "post",
                    data: {
                        planId: v,
                        email: r,
                        name: m
                    },
                    success: e => {
                        z(`/quote/${e.quoteId}`)
                    },
                    error: () => l({
                        title: "Error creating quote",
                        content: "Please contact support"
                    }),
                    both: () => p(!1)
                }))
            },
            y = () => f ? t.jsx("div", {
                className: "maxWidth hc flex",
                children: t.jsx(q, {})
            }) : t.jsxs(t.Fragment, {
                children: [t.jsx(B, {
                    title: "New Quote"
                }), t.jsxs(D, {
                    className: "flex vc wrap",
                    children: [t.jsx("img", {
                        src: "/client/img/quote/together.svg",
                        style: {
                            height: 120,
                            width: 120,
                            marginRight: 15
                        }
                    }), t.jsxs("div", {
                        children: [t.jsx(G, {
                            children: "New Quote"
                        }), t.jsx(U, {
                            children: "We're so excited to get your group on Gimkit Pro!"
                        })]
                    })]
                }), t.jsx(I, {}), t.jsx(g, {
                    children: "What is the name of your group?"
                }), t.jsx(h, {
                    onChange: C,
                    placeholder: "Group name...",
                    size: "large",
                    maxLength: 55,
                    onPressEnter: n
                }), t.jsx("div", {
                    style: {
                        height: 10
                    }
                }), t.jsx(g, {
                    children: "What is your email?"
                }), t.jsx(h, {
                    onChange: N,
                    placeholder: "Email here...",
                    size: "large",
                    value: r,
                    onPressEnter: n,
                    type: "email"
                }), t.jsxs("div", {
                    className: "maxWidth flex",
                    style: {
                        justifyContent: "space-between",
                        marginTop: 5
                    },
                    children: [t.jsx("div", {}), t.jsx(F, {
                        onClick: n,
                        loading: c,
                        disabled: !d,
                        type: "primary",
                        children: "Submit"
                    })]
                })]
            });
        return t.jsxs(T, {
            className: "flex-column vc",
            children: [t.jsx(Q, {
                includeSpacer: !0
            }), t.jsx(L, {
                children: y()
            })]
        })
    },
    T = i.div`
  min-height: 100%;
  background: ${s.Snow};
  width: 100%;
  color: ${s.Black};
  font-family: ${$.SFPro};
`,
    L = i.div`
  width: 100%;
  max-width: 550px;
  padding: 20px;
`,
    D = i.div`
  width: 100%;
`,
    G = i.h1`
  font-size: 39px;
  color: ${s.Black};
  font-weight: ${x.UltraBold};
  margin-bottom: -10px;
`,
    U = i.p`
  font-size: 17px;
  margin-bottom: 0px;
`,
    g = i.h2`
  font-weight: ${x.Bold};
  color: ${s.Black};
  font-size: 22px;
  margin-bottom: 0px;
`;
export {
    ft as
    default
};