import {
    j as e,
    e as c,
    F as R,
    d as s,
    c4 as l,
    c5 as a,
    c6 as p,
    B as u,
    c7 as I,
    c8 as E,
    D as h,
    C as M,
    aV as B,
    r,
    W as D,
    V as v,
    ae as O,
    a as b,
    T as _,
    U as N,
    S as U,
    h as C,
    t as F
} from "./index-JueF_e_O.js";
import {
    S as G
} from "./App-CVsQbxzN.js";
import "./Shortcut-CMqBR2Ku.js";
import "./Names-DfDh6qGd.js";
import "./mobxreact.esm-Ws-CV3HT.js";
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
import "./index-CrBw-JUo.js";
import "./index-C3nE64hA.js";
import "./context-CjY8B7F1.js";
import "./StarOutlined-BGGlbh6F.js";
import "./NavigateTo-B9Fkdix9.js";
import "./index-WAenXna7.js";
import "./colors-DeP7YnlJ.js";
import "./useWarningOnMountInDevelopment-VsZQFfAu.js";
import "./index-D2z5EOhv.js";
import "./index-DwJM4HGs.js";
import "./move-BQfrK9lH.js";
const L = t => e.jsxs("div", {
        className: "flex vc flex-column",
        children: [e.jsx("img", {
            src: "/client/img/quote/medal.svg",
            style: {
                height: 130
            }
        }), e.jsx(Y, {
            children: "Woohoo!"
        }), e.jsx(z, {
            children: t.isRenewal ? "Your group license renewal is complete!" : "Your group license is ready to go!"
        })]
    }),
    Y = s.h1`
  color: ${c.Black};
  font-weight: ${R.UltraBold};
  font-size: 50px;
`,
    z = s.p`
  margin-top: -41px;
  font-size: 18px;
`,
    W = t => e.jsxs(e.Fragment, {
        children: [e.jsxs(l, {
            children: [e.jsx(a, {
                children: "Invoice"
            }), e.jsx(p, {
                children: "Click the button below to print out your invoice. A copy of this invoice has also been sent to your email."
            }), e.jsx(u, {
                style: {
                    marginTop: 5
                },
                href: t.invoiceLink,
                target: "_blank",
                type: "primary",
                block: !0,
                children: "Print Invoice"
            })]
        }), e.jsx("div", {
            style: {
                height: 10
            }
        }), e.jsxs(l, {
            children: [e.jsx(a, {
                children: "Payment Information"
            }), e.jsxs(p, {
                children: [e.jsx("div", {
                    style: {
                        marginTop: 3
                    },
                    children: "Please send your check to the following address:"
                }), e.jsx("br", {}), e.jsx("div", {
                    children: e.jsx("b", {
                        children: "Gimkit, Inc"
                    })
                }), e.jsx("div", {
                    children: I
                }), e.jsx("div", {
                    children: E
                }), e.jsx(h, {}), e.jsx("div", {
                    children: "With the check, please include a copy of the invoice. All Gimkit invoices on Purchase Orders have NET45 Terms."
                })]
            })]
        })]
    }),
    H = t => e.jsx(e.Fragment, {
        children: e.jsxs(l, {
            children: [e.jsx(a, {
                children: "Receipt"
            }), e.jsx(p, {
                children: "Click the button below to print out your receipt A copy of this receipt has also been sent to your email."
            }), e.jsx(u, {
                style: {
                    marginTop: 5
                },
                href: t.receiptLink,
                target: "_blank",
                type: "primary",
                block: !0,
                children: "Print Receipt"
            })]
        })
    }),
    V = t => {
        const {
            isRenewal: o
        } = t;
        return e.jsxs(l, {
            children: [e.jsx(a, {
                children: o ? "Renewal Complete!" : "Get Started!"
            }), e.jsx(p, {
                children: o ? "Your new group license is active! All of your teachers have been imported over from your expiring group. Click the button below to manage your new group license!" : `Your group license is active! Click the button below to invite your teachers to join your license and gain ${M} Pro access!`
            }), e.jsx(u, {
                href: B,
                type: "primary",
                style: {
                    marginTop: 5
                },
                block: !0,
                children: "Manage Group"
            })]
        })
    },
    q = [{
        text: "Group license help center",
        link: "https://help.gimkit.com/en/category/group-subscriptions-3m7198/"
    }, {
        text: "Managing group licenses",
        link: "https://help.gimkit.com/en/article/managing-group-subscriptions-117yzia/"
    }],
    J = () => e.jsxs(K, {
        className: "flex vc flex-column",
        children: [e.jsx(w, {
            children: "📚 Resources"
        }), e.jsx(S, {
            children: "Take a look at the resources below to help you use your group license!"
        }), q.map(t => e.jsx("div", {
            style: {
                fontSize: 16,
                marginBottom: 5
            },
            children: e.jsx("a", {
                href: t.link,
                target: "_blank",
                children: t.text
            })
        }, t.link)), e.jsx(h, {}), e.jsx(w, {
            children: "👋 Need Help?"
        }), e.jsx("div", {
            style: {
                height: 5
            }
        }), e.jsxs(S, {
            children: ["Just email us at", " ", e.jsx("a", {
                href: "mailto:groups@gimkit.com",
                children: "groups@gimkit.com"
            }), "!"]
        })]
    }),
    K = s.div`
  text-align: center;
`,
    w = s.h2`
  font-size: 32px;
  font-weight: ${R.UltraBold};
  color: ${c.Black};
`,
    S = s.p`
  font-size: 17px;
  margin-top: -25px;
`,
    d = "Error fetching subscription info. Try refreshing the page. If you continue to see this error, please contact support.",
    Se = () => {
        const [t, o] = r.useState(!0), [m, x] = r.useState(""), [T, g] = r.useState(""), [P, j] = r.useState(""), [f, y] = r.useState(!1);
        r.useEffect(() => {
            D({})
        }, []), r.useEffect(() => {
            const k = v("session_id");
            if (k) O({
                sessionId: k,
                onSuccess: n => {
                    b({
                        url: `/api/bulk/complete/${n.subscriptionId}`,
                        success: i => {
                            x(i.paymentMethod), g(i.receiptUrl), j(i.invoiceUrl), y(i.renewal), o(!1)
                        },
                        error: i => C({
                            title: d
                        })
                    })
                },
                onError: n => C({
                    title: d
                }),
                onBoth: () => o(!1)
            });
            else {
                const n = v("subscriptionId");
                b({
                    url: `/api/bulk/complete/${n}`,
                    success: i => {
                        x(i.paymentMethod), g(i.receiptUrl), j(i.invoiceUrl), y(i.renewal), o(!1)
                    },
                    error: i => F({
                        e: i,
                        default: {
                            title: d
                        }
                    })
                })
            }
        }, []);
        const $ = () => e.jsxs(e.Fragment, {
                children: [e.jsx(L, {
                    isRenewal: f
                }), e.jsx(h, {}), m === "creditCard" && e.jsx(H, {
                    receiptLink: T
                }), m === "purchaseOrder" && e.jsx(W, {
                    invoiceLink: P
                }), e.jsx("div", {
                    style: {
                        height: 10
                    }
                }), e.jsx(V, {
                    isRenewal: f
                }), e.jsx(h, {}), e.jsx(J, {})]
            }),
            A = () => t ? e.jsx("div", {
                className: "maxWidth flex hc",
                children: e.jsx(U, {})
            }) : $();
        return e.jsxs(e.Fragment, {
            children: [e.jsx(_, {
                title: "Group License Complete"
            }), e.jsxs(Q, {
                className: "flex-column vc",
                children: [e.jsx(G, {
                    includeSpacer: !0
                }), e.jsx(X, {
                    children: A()
                })]
            })]
        })
    },
    Q = s.div`
  flex: 1;
  background: ${c.Snow};
  width: 100%;
  color: ${c.Black};
  font-family: ${N.SFPro};
  padding: 20px;
  min-height: 900px;
`,
    X = s.div`
  width: 100%;
  max-width: 550px;
`;
export {
    Se as
    default
};