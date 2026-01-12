import {
    d as s,
    e as y,
    U as A,
    F as L,
    x as r,
    n as W,
    V as w,
    ac as $,
    a as P,
    j as e,
    T as I,
    D as R,
    S as D,
    t as l,
    C as n,
    B as j
} from "./_index.js";
import {
    l as _
} from "./stripe.esm.js";
import {
    S as B,
    F as H
} from "./FetchStripeToken.js";
import "./stores.js";
import "./NavigateTo.js";
const V = s.div.attrs({
        className: "maxWidth maxHeight flex hc vc"
    })`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
`,
    K = s.div.attrs({
        className: "scroll-y"
    })`
  background: ${y.White};
  padding: 35px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 670px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${A.SFPro};
  color: ${y.Black};
`,
    O = s.div.attrs({
        className: "maxWidth flex flex-column vc"
    })``,
    q = s.img.attrs({
        src: "/client/img/svgLogo.svg"
    })`
  height: 35px;
`,
    G = s.div.attrs({
        className: "maxWidth flex flex-column vc"
    })``,
    o = {
        TopHeader: s.div`
    font-size: 17px;
  `,
        Title: s.div`
    font-size: 36px;
    font-weight: ${L.Bold};
  `,
        Description: s.div`
    margin-top: 16px;
    font-size: 17px;
    text-align: center;
  `
    },
    ee = () => {
        const {
            checkout: p
        } = r.useContext(B);
        let [g, v] = r.useState(!1), [f, a] = r.useState(!0), [i, S] = r.useState(""), [T, b] = r.useState(""), [C, F] = r.useState(!1), [h, k] = r.useState(null);
        const {
            id: m
        } = W();
        r.useEffect(() => {
            H();
            const t = w("session_id");
            t ? $({
                sessionId: t,
                onSuccess: () => {
                    F(!0), x()
                },
                onError: c => {
                    a(!1), l({
                        e: c,
                        default: {
                            title: "An error ocurred when charging your card",
                            content: "Please contact support."
                        }
                    })
                }
            }) : x()
        }, []);
        const x = () => {
                P({
                    url: `/api/billing/pay-for-me-info/${m}`,
                    method: "GET",
                    success: t => {
                        v(t.isUpgraded), S(t.firstName), b(t.lastName), k(t.receiptUrl)
                    },
                    error: t => l({
                        e: t,
                        default: {
                            title: "We were unable to verify the user's id",
                            content: "Please try again later"
                        }
                    }),
                    both: () => a(!1)
                })
            },
            N = async t => {
                if (p.stripePublicKey) {
                    if (f) return;
                    a(!0);
                    let c;
                    try {
                        c = await _(p.stripePublicKey)
                    } catch {
                        a(!1), l({
                            default: {
                                title: "Connection Error",
                                content: "An error ocurred while connecting to our payments provider. Please try again later"
                            }
                        })
                    }
                    c && P({
                        url: "/api/billing/create-pay-for-me-session",
                        method: "POST",
                        data: {
                            encryptedUserId: m
                        },
                        success: async d => {
                            const U = d;
                            let u;
                            try {
                                if (u = await c.redirectToCheckout({
                                        sessionId: U.id
                                    }), u && u.error) throw u.error
                            } catch (z) {
                                a(!1), l({
                                    e: z,
                                    default: {
                                        title: "Connection Error",
                                        content: "An error ocurred. Please try again later"
                                    }
                                })
                            }
                        },
                        error: d => {
                            a(!1), l({
                                e: d,
                                default: {
                                    title: "Connection Error",
                                    content: "An error ocurred while connecting to our payments provider. Please try again later"
                                }
                            })
                        }
                    })
                }
            }, E = () => {
                h && window.open(h)
            }, M = () => {
                const t = w("session_id");
                return g && !t ? e.jsxs("div", {
                    style: {
                        fontSize: 20
                    },
                    children: [i, " has already been upgraded to ", n, " Pro."]
                }) : t && g && C ? e.jsxs(e.Fragment, {
                    children: [e.jsxs(o.TopHeader, {
                        children: [i, " has been upgraded to"]
                    }), e.jsxs(o.Title, {
                        children: [n, " Pro!"]
                    }), e.jsxs(o.Description, {
                        children: ["We charged your card $59.88 and upgraded ", i, " to", " ", n, " Pro for one year. This was a one-time charge and auto-renew is off."]
                    }), h && e.jsx("div", {
                        style: {
                            marginTop: 30
                        },
                        children: e.jsx(j, {
                            type: "primary",
                            size: "large",
                            onClick: E,
                            style: {
                                width: 400,
                                height: 60
                            },
                            children: "View and Print Receipt"
                        })
                    })]
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsxs(o.TopHeader, {
                        children: ["Purchase ", n, " Pro for"]
                    }), e.jsxs(o.Title, {
                        children: [i, " ", T]
                    }), e.jsxs(o.Description, {
                        children: ["Make a one-time $59.88 payment for ", i, " to receive one year of ", n, " Pro. Auto-renew is off, which means you will only be charged once."]
                    }), e.jsx("div", {
                        style: {
                            marginTop: 30
                        },
                        children: e.jsxs(j, {
                            type: "primary",
                            size: "large",
                            onClick: N,
                            style: {
                                width: 400,
                                height: 60
                            },
                            children: ["Purchase ", n, " Pro for ", i]
                        })
                    })]
                })
            };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(I, {
                title: "Pay For Me"
            }), e.jsx(V, {
                children: e.jsxs(K, {
                    children: [e.jsxs(O, {
                        children: [e.jsx(q, {}), e.jsx(R, {})]
                    }), e.jsx(G, {
                        children: f ? e.jsx(D, {
                            size: "large",
                            style: {
                                marginTop: 10
                            }
                        }) : M()
                    })]
                })
            })]
        })
    };
export {
    ee as
    default
};