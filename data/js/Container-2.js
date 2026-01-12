import {
    r as a,
    j as t,
    F as b,
    D as w,
    d as i,
    l as y,
    a1 as r,
    t as j,
    a as C,
    B,
    e as l,
    f as D,
    S as N,
    a5 as z,
    $ as F,
    i as U,
    a3 as W,
    V as M,
    T as L,
    U as R
} from "./_index.js";
import {
    o as P
} from "./mobxreact.esm.js";
import {
    S as p,
    F as K
} from "./FetchStripeToken.js";
import {
    s as o,
    S as _
} from "./stores.js";
import {
    c as f
} from "./Money.js";
import {
    l as G
} from "./stripe.esm.js";
import {
    g as V,
    a as q,
    b as I,
    c as T,
    d as H,
    e as J,
    f as Q
} from "./price.js";
import {
    N as X
} from "./NavigateTo.js";
const E = () => !1,
    Y = P(() => {
        const {
            checkout: e
        } = a.useContext(p), n = () => e.amountOff ? e.amountOff : e.percentageOff ? e.planCost * (1 - e.percentageOff) : 0;
        return t.jsxs("div", {
            className: "maxWidth",
            children: [t.jsxs(g, {
                children: [t.jsxs("div", {
                    children: [t.jsx("div", {
                        style: {
                            fontWeight: b.UltraBold,
                            fontSize: 23,
                            marginBottom: -7
                        },
                        children: e.planName
                    }), t.jsx("div", {
                        style: {
                            fontSize: 13,
                            opacity: .8
                        },
                        children: e.planDescription
                    })]
                }), t.jsx(m, {
                    children: f(e.planCost)
                })]
            }), e.hasCoupon ? t.jsxs(g, {
                children: [t.jsx("div", {
                    style: {
                        fontSize: 15
                    },
                    children: e.couponDescription || "Coupon"
                }), t.jsx("div", {
                    children: t.jsxs(m, {
                        style: {
                            color: "green"
                        },
                        children: ["-", f(n())]
                    })
                })]
            }) : null, e.accountCredit ? t.jsxs(g, {
                children: [t.jsx("div", {
                    style: {
                        fontSize: 15
                    },
                    children: "Account Credit"
                }), t.jsxs(m, {
                    style: {
                        color: "green"
                    },
                    children: ["-", f(e.accountCredit)]
                })]
            }) : null, e.totalCost !== e.planCost ? t.jsxs(t.Fragment, {
                children: [t.jsx(w, {}), t.jsxs(g, {
                    children: [t.jsx("div", {}), t.jsx(m, {
                        style: {
                            fontWeight: b.UltraBold
                        },
                        children: f(e.totalCost)
                    })]
                })]
            }) : null]
        })
    }),
    g = i.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`,
    m = i.div`
  font-size: 18px;
`,
    k = P(() => {
        const [e, n] = a.useState(!1), {
            checkout: s
        } = a.useContext(p);
        a.useEffect(() => {
            !s.planId || !s.stripePublicKey || y().type === r.proPass && s.existingPayingPlan !== s.planId && c().then().catch(d => !1)
        }, [s.existingPayingPlan, s.stripePublicKey, s.planId]);
        const c = async () => {
            if (s.stripePublicKey) {
                if (e) return;
                n(!0);
                let d;
                try {
                    d = await G(s.stripePublicKey)
                } catch {
                    n(!1), j({
                        default: {
                            title: "Connection Error",
                            content: "An error ocurred while connecting to our payments provider. Please try again later"
                        }
                    })
                }
                d && C({
                    url: "/api/billing/create-upgrade-session",
                    method: "POST",
                    data: {
                        plan: s.planId,
                        customPriceId: s.planId === r.pro ? V() : q()
                    },
                    success: async h => {
                        const $ = h;
                        let x;
                        try {
                            if (x = await d.redirectToCheckout({
                                    sessionId: $.id
                                }), x && x.error) throw x.error
                        } catch (A) {
                            n(!1), j({
                                e: A,
                                default: {
                                    title: "Connection Error",
                                    content: "An error ocurred. Please try again later"
                                }
                            })
                        }
                    },
                    error: h => {
                        n(!1), j({
                            e: h,
                            default: {
                                title: "Connection Error",
                                content: "An error ocurred while connecting to our payments provider. Please try again later"
                            }
                        })
                    }
                })
            }
        }, v = () => {
            c().then().catch(d => !1)
        };
        return y().type === r.proPass || E() ? null : t.jsx("div", {
            className: "flex flex-column hc vc maxWidth",
            children: t.jsx(Z, {
                children: t.jsx(B, {
                    id: "checkout-button",
                    onClick: v,
                    loading: e,
                    type: "primary",
                    style: {
                        width: "100%"
                    },
                    size: "large",
                    disabled: e,
                    children: `Subscribe to ${s.planName}`
                })
            })
        })
    }),
    Z = i.div`
  width: 100%;
  div {
    width: 100%;
  }
`,
    ee = e => e === r.pro ? I() : e === r.proPass ? T() : 0,
    te = (e, n) => e === r.pro ? "Billed annually" : e === r.proPass ? "Billed monthly" : "",
    u = e => {
        o.checkout.planName = "Gimkit Pro", o.checkout.planId = e, o.checkout.planDescription = te(e), o.checkout.planCost = ee(e)
    },
    O = "#F0FFF6",
    ne = "#a5d6a7",
    S = e => {
        const n = I(),
            s = T(),
            c = Math.round((s * 12 - n) / (s * 12) * 100);
        return t.jsxs(se, {
            selected: e.selected,
            onClick: e.onClick,
            disabled: e.disabled,
            children: [t.jsx(re, {
                children: e.title
            }), t.jsx(oe, {
                children: e.description
            }), e.showSaveTag ? t.jsxs(ie, {
                children: ["Save ", c, "%"]
            }) : null]
        })
    },
    se = i.div`
  border-style: solid;
  border-width: 2px;
  width: 284px;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  ${e=>e.disabled?`
  pointer-events: none;
  opacity: 0.2;
  `:null}
  border-color: ${e=>e.selected?ne:l.BorderGray};
  background: ${e=>e.selected?O:l.White};
  transition: all 0.35s;
  &:hover {
    background: ${O};
  }
`,
    re = i.h3`
  font-weight: ${b.UltraBold};
  font-size: 18px;
  margin-bottom: 0px;
  color: ${l.Black};
`,
    oe = i.p`
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 0px;
`,
    ie = i.div.attrs({
        className: "flex hc vc"
    })`
  height: 35px;
  width: 95px;
  background: #1a237e;
  margin-top: -109px;
  margin-left: 174px;
  position: absolute;
  color: ${l.White};
  font-size: 14px;
  border-radius: 22px;
`,
    ae = P(() => {
        const {
            checkout: e
        } = a.useContext(p);
        a.useEffect(() => {
            var c;
            u(r.pro);
            const s = y();
            !((c = s.freeTrial) != null && c.currentlyOnFreeTrial) && D() && (s.type === r.pro && u(r.proPass), e.existingPayingPlan = s.type)
        }, []);
        const n = y().type === r.proPass || E();
        return !e.stripePublicKey || n ? t.jsxs("div", {
            className: "maxWidth flex hc",
            style: {
                padding: 40
            },
            children: [t.jsx(N, {
                size: "large"
            }), n ? t.jsx(k, {}) : null]
        }) : t.jsxs(ce, {
            children: [t.jsx(z, {
                to: F,
                children: t.jsx("img", {
                    src: "/client/img/svgLogo.svg",
                    style: {
                        width: 158,
                        marginTop: 6
                    }
                })
            }), t.jsx(w, {}), t.jsxs(t.Fragment, {
                children: [t.jsxs("div", {
                    className: "flex maxWidth",
                    style: {
                        justifyContent: "space-between",
                        marginTop: 10
                    },
                    children: [t.jsx(S, {
                        title: "Annually",
                        description: t.jsxs("span", {
                            children: [H(), " a year", t.jsx("br", {}), "That works out to ", J({
                                simple: !0
                            }), " a month"]
                        }),
                        selected: e.planId === r.pro,
                        disabled: e.existingPayingPlan && e.existingPayingPlan === r.pro || e.couponIsOnlyForPlan && e.couponIsOnlyForPlan !== r.pro,
                        onClick: () => u(r.pro),
                        showSaveTag: !0
                    }), t.jsx(S, {
                        title: "Monthly",
                        description: t.jsxs("span", {
                            children: [Q({
                                simple: !0
                            }), " a month"]
                        }),
                        selected: e.planId === r.proPass,
                        disabled: e.existingPayingPlan && e.existingPayingPlan === r.proPass || e.couponIsOnlyForPlan && e.couponIsOnlyForPlan !== r.proPass,
                        onClick: () => u(r.proPass)
                    })]
                }), t.jsx("div", {
                    style: {
                        height: 20
                    }
                })]
            }), t.jsx(Y, {}), t.jsx("div", {
                style: {
                    height: 10
                }
            }), t.jsx(k, {})]
        })
    }),
    ce = i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`,
    le = () => {
        C({
            url: "/api/billing/account-balance",
            success: e => {
                e.balance && e.balance > 0 && (o.checkout.accountCredit = e.balance)
            }
        })
    },
    de = e => {
        C({
            url: `/api/stripe/coupons/${e}`,
            success: n => {
                n.metadata && n.metadata.onlyForPlan && (u(n.metadata.onlyForPlan), o.checkout.couponIsOnlyForPlan = o.checkout.planId), n.metadata && n.metadata.customDesc && (o.checkout.couponDescription = n.metadata.customDesc), o.checkout.amountOff = n.amountOff, o.checkout.percentageOff = 1 - n.percentageOff * .01, o.checkout.couponOneUseOnly = n.oneUseOnly, o.checkout.couponId = e, o.checkout.hasCoupon = !0
            }
        })
    },
    ue = P(() => {
        const {
            navigation: e
        } = a.useContext(p);
        a.useEffect(() => {
            if (U()) {
                X(F);
                return
            }
            W() && le(), K();
            const s = M("coupon");
            s && de(s)
        }, []);
        const n = () => {
            const {
                screen: s
            } = e;
            return s === _.checkout ? t.jsx(ae, {}) : null
        };
        return t.jsxs(t.Fragment, {
            children: [t.jsx(pe, {
                children: t.jsx(he, {
                    children: n()
                })
            }), t.jsx(L, {
                title: "Checkout"
            })]
        })
    }),
    pe = i.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    he = i.div.attrs({
        className: "scroll-y"
    })`
  background: ${l.White};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${R.SFPro};
  color: ${l.Black};
`,
    Ce = () => (a.useEffect(() => () => {
        o.checkout.reset(), o.navigation.reset()
    }, []), t.jsx(p.Provider, {
        value: o,
        children: t.jsx(ue, {})
    }));
export {
    Ce as
    default
};