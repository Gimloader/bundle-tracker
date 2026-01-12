import {
    j as e,
    c3 as s,
    c4 as c,
    c5 as l,
    C as r,
    B as n,
    c9 as g,
    F as y,
    T as S,
    D as I,
    ca as N,
    e as $,
    d as m,
    r as o,
    cb as Q,
    n as L,
    a as F,
    S as B,
    U as W,
    t as E
} from "./_index.js";
import {
    N as x
} from "./NavigateTo.js";
import {
    c as D
} from "./index-2.js";
import {
    I as T
} from "./index-3.js";
import {
    s as A
} from "./index-4.js";
import {
    o as O
} from "./mobxreact.esm.js";
import {
    S as U
} from "./App-4.js";
import "./context.js";
import "./Shortcut.js";
import "./Names.js";
import "./AccessibleAnchor.js";
import "./index-1.js";
import "./index-6.js";
import "./FontAwesomeIcon.js";
import "./App-2.js";
import "./Sizes.js";
import "./motion.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./StarOutlined.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
const z = t => {
        const i = () => {
            g(() => {
                x(`/group-subscription/pay/${t.quoteId}/po`)
            })
        };
        return e.jsxs(s, {
            children: [e.jsxs(c, {
                children: [t.isRenewal ? "Renew" : "Pay", " with Purchase Order"]
            }), e.jsx(l, {
                children: t.isRenewal ? `Upload your purchase order to instantly renew your group's ${r} Pro access and get your invoice!` : `Get your group license up and running today! Upload your purchase order to get your group access to ${r} Pro!`
            }), e.jsxs(n, {
                onClick: i,
                type: "primary",
                block: !0,
                style: {
                    marginTop: 5
                },
                disabled: t.converted,
                children: [t.isRenewal ? "Renew" : "Pay", " with Purchase Order"]
            })]
        })
    },
    j = t => "https://www.gimkit.com/quote/" + t,
    f = t => "/quote-printable/" + t,
    H = t => e.jsxs(e.Fragment, {
        children: [e.jsxs(s, {
            children: [e.jsx("div", {
                style: {
                    fontWeight: y.UltraBold,
                    fontSize: 27
                },
                children: t.name
            }), e.jsx("div", {
                style: {
                    fontWeight: y.Bold,
                    fontSize: 14,
                    opacity: .8
                },
                children: t.planName
            })]
        }), e.jsx("div", {
            style: {
                height: 10
            }
        }), e.jsx(n, {
            size: "large",
            block: !0,
            type: "primary",
            href: f(t.quoteId),
            target: "_blank",
            children: "Download Quote PDF"
        })]
    }),
    M = t => {
        const i = () => {
            D(j(t.quoteId)), A.success("Quote link copied to clipboard.")
        };
        return e.jsxs(s, {
            children: [e.jsx(c, {
                children: "Quote Link"
            }), e.jsx(l, {
                children: "Come back to this link to view the quote at anytime"
            }), e.jsx(T, {
                value: j(t.quoteId),
                readOnly: !0
            }), e.jsx(n, {
                onClick: i,
                style: {
                    marginTop: 5
                },
                block: !0,
                type: "dashed",
                children: "Copy Link"
            })]
        })
    },
    G = t => e.jsxs(s, {
        children: [e.jsx(c, {
            children: "Contact"
        }), e.jsx(l, {
            children: t.isRenewal ? "We're here to help! Let us know if you have any questions about your group license renewal." : "Let us know if you have any questions about your group quote!"
        }), e.jsxs(n, {
            href: `mailto:groups@gimkit.com?subject=${r+" Quote for "+t.name+" - "+t.quoteId}`,
            block: !0,
            type: "primary",
            children: ["Contact ", r, " Support"]
        })]
    }),
    _ = t => {
        const i = () => {
            g(() => {
                x(`/group-subscription/pay/${t.quoteId}/cc`)
            })
        };
        return e.jsxs(s, {
            children: [e.jsxs(c, {
                children: [t.isRenewal ? "Renew" : "Pay", " with Credit Card"]
            }), e.jsx(l, {
                children: t.isRenewal ? `Use a credit card to renew your group's ${r} Pro license!` : `Pay with credit card to get your group access to ${r} Pro!`
            }), e.jsxs(n, {
                onClick: i,
                type: "primary",
                block: !0,
                style: {
                    marginTop: 5
                },
                disabled: t.converted,
                children: [t.isRenewal ? "Renew" : "Pay", " with Credit Card"]
            })]
        })
    },
    a = () => e.jsx("div", {
        style: {
            height: 10
        }
    }),
    V = t => e.jsxs(Y, {
        children: [e.jsx(S, {
            title: `Quote for ${t.name}`
        }), e.jsx(H, {
            name: t.name,
            quoteId: t.id,
            planName: t.planName
        }), e.jsx(I, {}), e.jsx(z, {
            converted: t.converted,
            quoteId: t.id,
            isRenewal: t.isRenewal
        }), e.jsx(a, {}), e.jsx(_, {
            converted: t.converted,
            quoteId: t.id,
            isRenewal: t.isRenewal
        }), e.jsx(a, {}), e.jsx(M, {
            quoteId: t.id
        }), e.jsx(a, {}), e.jsx(G, {
            quoteId: t.id,
            name: t.name,
            isRenewal: t.isRenewal
        }), e.jsx(a, {}), e.jsx(N, {})]
    }),
    Y = m.div.attrs({
        className: "flex vc flex-column"
    })`
  height: 100%;
  width: 500px;
  margin-right: 20px;
  padding: 20px;
  color: ${$.Black};
  box-sizing: border-box;
`,
    J = O(t => {
        const {
            navigation: {
                headerHeight: i
            }
        } = o.useContext(Q);
        return e.jsx("div", {
            className: "flex hc vc",
            style: {
                width: 400,
                height: `calc(100vh - ${i}px)`
            },
            children: e.jsx("iframe", {
                src: f(t.id) + "/#toolbar=0",
                title: "Quote",
                style: {
                    width: 400,
                    height: "75%",
                    position: "fixed"
                },
                frameBorder: 0
            })
        })
    }),
    qe = () => {
        const [t, i] = o.useState(!0), [w, p] = o.useState(""), [v, k] = o.useState(""), [C, b] = o.useState(!1), [q, R] = o.useState(!1), {
            id: d
        } = L();
        return o.useEffect(() => {
            F({
                url: "/api/quote/fetch/" + d,
                success: u => {
                    const {
                        quote: h,
                        plan: P
                    } = u;
                    p(h.name), k(P.name), R(h.converted), b(!!h.renewalForExistingBulk), i(!1)
                },
                error: u => {
                    E({
                        e: u,
                        default: {
                            title: "Error fetching quote."
                        }
                    }), x("/")
                }
            })
        }, []), t ? e.jsx("div", {
            className: "hc vc flex maxWidth maxHeight",
            children: e.jsx(B, {})
        }) : e.jsxs(K, {
            children: [e.jsx(U, {
                includeSpacer: !0
            }), e.jsxs(X, {
                children: [e.jsx(V, {
                    id: d,
                    name: w,
                    planName: v,
                    converted: q,
                    isRenewal: C
                }), e.jsx(J, {
                    id: d
                })]
            })]
        })
    },
    K = m.div`
  flex: 1;
  width: 100%;
`,
    X = m.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: ${W.SFPro};
`;
export {
    qe as
    default
};