import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    E as n,
    _ as r,
    g as i,
    h as a,
    m as o,
    q as s,
    t as c,
    v as l
} from "./utils.js";
import {
    t as u
} from "./react-1.js";
import {
    n as d
} from "./dist-3.js";
import {
    t as f
} from "./button-1.js";
import {
    t as p
} from "./spin.js";
import "./Paths.js";
import {
    t as m
} from "./jsx-runtime.js";
import {
    c as h,
    l as g,
    n as _,
    s as v,
    y
} from "./_index.js";
import {
    r as b
} from "./mobxreact.esm.js";
import {
    t as x
} from "./NavigateTo.js";
import {
    t as S
} from "./stripe.esm.js";
import {
    n as C,
    t as w
} from "./stores-1.js";
import {
    n as T,
    t as E
} from "./FetchStripeToken.js";
import {
    t as D
} from "./Money.js";
import {
    a as O,
    c as k,
    i as A,
    n as j,
    o as M,
    r as N,
    s as P,
    t as F
} from "./price.js";
var I = e(u()),
    L = m(),
    R = b(() => {
        let {
            checkout: e
        } = I.useContext(T);
        return (0, L.jsxs)(`div`, {
            className: `maxWidth`,
            children: [(0, L.jsxs)(z, {
                children: [(0, L.jsxs)(`div`, {
                    children: [(0, L.jsx)(`div`, {
                        style: {
                            fontWeight: v.UltraBold,
                            fontSize: 23,
                            marginBottom: -7
                        },
                        children: e.planName
                    }), (0, L.jsx)(`div`, {
                        style: {
                            fontSize: 13,
                            opacity: .8
                        },
                        children: e.planDescription
                    })]
                }), (0, L.jsx)(B, {
                    children: D(e.planCost)
                })]
            }), e.hasCoupon ? (0, L.jsxs)(z, {
                children: [(0, L.jsx)(`div`, {
                    style: {
                        fontSize: 15
                    },
                    children: e.couponDescription || `Coupon`
                }), (0, L.jsx)(`div`, {
                    children: (0, L.jsxs)(B, {
                        style: {
                            color: `green`
                        },
                        children: [`-`, D(e.amountOff ? e.amountOff : e.percentageOff ? e.planCost * (1 - e.percentageOff) : 0)]
                    })
                })]
            }) : null, e.accountCredit ? (0, L.jsxs)(z, {
                children: [(0, L.jsx)(`div`, {
                    style: {
                        fontSize: 15
                    },
                    children: `Account Credit`
                }), (0, L.jsxs)(B, {
                    style: {
                        color: `green`
                    },
                    children: [`-`, D(e.accountCredit)]
                })]
            }) : null, e.totalCost === e.planCost ? null : (0, L.jsxs)(L.Fragment, {
                children: [(0, L.jsx)(y, {}), (0, L.jsxs)(z, {
                    children: [(0, L.jsx)(`div`, {}), (0, L.jsx)(B, {
                        style: {
                            fontWeight: v.UltraBold
                        },
                        children: D(e.totalCost)
                    })]
                })]
            })]
        })
    }),
    z = g.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`,
    B = g.div`
  font-size: 18px;
`,
    V = b(() => {
        let [e, r] = I.useState(!1), {
            checkout: i
        } = I.useContext(T);
        I.useEffect(() => {
            i.planId && i.stripePublicKey && (k() || a().type === s.proPass) && i.existingPayingPlan !== i.planId && o().then().catch(e => !1)
        }, [i.existingPayingPlan, i.stripePublicKey, i.planId]);
        let o = async () => {
            if (i.stripePublicKey) {
                if (e) return;
                r(!0);
                let a;
                try {
                    a = await S(i.stripePublicKey)
                } catch {
                    r(!1), n({
                        default: {
                            title: `Connection Error`,
                            content: `An error ocurred while connecting to our payments provider. Please try again later`
                        }
                    })
                }
                a && t({
                    url: `/api/billing/create-upgrade-session`,
                    method: `POST`,
                    data: {
                        plan: i.planId,
                        customPriceId: i.planId === s.pro ? j() : M()
                    },
                    success: async e => {
                        let t = e,
                            i;
                        try {
                            if (i = await a.redirectToCheckout({
                                    sessionId: t.id
                                }), i && i.error) throw i.error
                        } catch (e) {
                            r(!1), n({
                                e,
                                default: {
                                    title: `Connection Error`,
                                    content: `An error ocurred. Please try again later`
                                }
                            })
                        }
                    },
                    error: e => {
                        r(!1), n({
                            e,
                            default: {
                                title: `Connection Error`,
                                content: `An error ocurred while connecting to our payments provider. Please try again later`
                            }
                        })
                    }
                })
            }
        };
        return a().type === s.proPass || k() ? null : (0, L.jsx)(`div`, {
            className: `flex flex-column hc vc maxWidth`,
            children: (0, L.jsx)(H, {
                children: (0, L.jsx)(f, {
                    id: `checkout-button`,
                    onClick: () => {
                        o().then().catch(e => !1)
                    },
                    loading: e,
                    type: `primary`,
                    style: {
                        width: `100%`
                    },
                    size: `large`,
                    disabled: e,
                    children: `Subscribe to ${i.planName}`
                })
            })
        })
    }),
    H = g.div`
  width: 100%;
  div {
    width: 100%;
  }
`,
    U = e => e === s.pro ? N() : e === s.proPass ? P() : 0,
    W = (e, t) => e === s.pro ? `Billed annually` : e === s.proPass ? `Billed monthly` : ``,
    G = e => {
        w.checkout.planName = `Gimkit Pro`, w.checkout.planId = e, w.checkout.planDescription = W(e), w.checkout.planCost = U(e)
    },
    K = `#F0FFF6`,
    q = `#a5d6a7`,
    J = e => {
        let t = N(),
            n = P(),
            r = Math.round((n * 12 - t) / (n * 12) * 100);
        return (0, L.jsxs)(Y, {
            selected: e.selected,
            onClick: e.onClick,
            disabled: e.disabled,
            children: [(0, L.jsx)(X, {
                children: e.title
            }), (0, L.jsx)(Z, {
                children: e.description
            }), e.showSaveTag ? (0, L.jsxs)(Q, {
                children: [`Save `, r, `%`]
            }) : null]
        })
    },
    Y = g.div`
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
  border-color: ${e=>e.selected?q:_.BorderGray};
  background: ${e=>e.selected?K:_.White};
  transition: all 0.35s;
  &:hover {
    background: ${K};
  }
`,
    X = g.h3`
  font-weight: ${v.UltraBold};
  font-size: 18px;
  margin-bottom: 0px;
  color: ${_.Black};
`,
    Z = g.p`
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 0px;
`,
    Q = g.div.attrs({
        className: `flex hc vc`
    })`
  height: 35px;
  width: 95px;
  background: #1a237e;
  margin-top: -109px;
  margin-left: 174px;
  position: absolute;
  color: ${_.White};
  font-size: 14px;
  border-radius: 22px;
`,
    $ = b(() => {
        let {
            checkout: e
        } = I.useContext(T);
        I.useEffect(() => {
            var t;
            G(s.pro);
            let n = a();
            if (!((t = n.freeTrial) != null && t.currentlyOnFreeTrial) && l()) {
                if (n.type === s.pro) {
                    if (k()) {
                        x(`/me`);
                        return
                    }
                    G(s.proPass)
                }
                e.existingPayingPlan = n.type
            }
        }, []);
        let t = a().type === s.proPass || k();
        return !e.stripePublicKey || t ? (0, L.jsxs)(`div`, {
            className: `maxWidth flex hc`,
            style: {
                padding: 40
            },
            children: [(0, L.jsx)(p, {
                size: `large`
            }), t ? (0, L.jsx)(V, {}) : null]
        }) : (0, L.jsxs)(ee, {
            children: [(0, L.jsx)(d, {
                to: `/me`,
                children: (0, L.jsx)(`img`, {
                    src: `/client/img/svgLogo.svg`,
                    style: {
                        width: 158,
                        marginTop: 6
                    }
                })
            }), (0, L.jsx)(y, {}), k() ? null : (0, L.jsxs)(L.Fragment, {
                children: [(0, L.jsxs)(`div`, {
                    className: `flex maxWidth`,
                    style: {
                        justifyContent: `space-between`,
                        marginTop: 10
                    },
                    children: [(0, L.jsx)(J, {
                        title: `Annually`,
                        description: (0, L.jsxs)(`span`, {
                            children: [F(), ` a year`, (0, L.jsx)(`br`, {}), `That works out to `, A({
                                simple: !0
                            }), ` a month`]
                        }),
                        selected: e.planId === s.pro,
                        disabled: e.existingPayingPlan && e.existingPayingPlan === s.pro || e.couponIsOnlyForPlan && e.couponIsOnlyForPlan !== s.pro,
                        onClick: () => G(s.pro),
                        showSaveTag: !0
                    }), (0, L.jsx)(J, {
                        title: `Monthly`,
                        description: (0, L.jsxs)(`span`, {
                            children: [O({
                                simple: !0
                            }), ` a month`]
                        }),
                        selected: e.planId === s.proPass,
                        disabled: e.existingPayingPlan && e.existingPayingPlan === s.proPass || e.couponIsOnlyForPlan && e.couponIsOnlyForPlan !== s.proPass,
                        onClick: () => G(s.proPass)
                    })]
                }), (0, L.jsx)(`div`, {
                    style: {
                        height: 20
                    }
                })]
            }), (0, L.jsx)(R, {}), (0, L.jsx)(`div`, {
                style: {
                    height: 10
                }
            }), (0, L.jsx)(V, {})]
        })
    }),
    ee = g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`,
    te = () => {
        t({
            url: `/api/billing/account-balance`,
            success: e => {
                e.balance && e.balance > 0 && (w.checkout.accountCredit = e.balance)
            }
        })
    },
    ne = e => {
        t({
            url: `/api/stripe/coupons/${e}`,
            success: t => {
                t.metadata && t.metadata.onlyForPlan && (G(t.metadata.onlyForPlan), w.checkout.couponIsOnlyForPlan = w.checkout.planId), t.metadata && t.metadata.customDesc && (w.checkout.couponDescription = t.metadata.customDesc), w.checkout.amountOff = t.amountOff, w.checkout.percentageOff = 1 - t.percentageOff * .01, w.checkout.couponOneUseOnly = t.oneUseOnly, w.checkout.couponId = e, w.checkout.hasCoupon = !0
            }
        })
    },
    re = b(() => {
        let {
            navigation: e
        } = I.useContext(T);
        return I.useEffect(() => {
            if (r()) {
                x(`/me`);
                return
            }
            i() && te(), E();
            let e = o(`coupon`);
            e && ne(e)
        }, []), (0, L.jsxs)(L.Fragment, {
            children: [(0, L.jsx)(ie, {
                children: (0, L.jsx)(ae, {
                    children: (() => {
                        let {
                            screen: t
                        } = e;
                        return t === C.checkout ? (0, L.jsx)($, {}) : null
                    })()
                })
            }), (0, L.jsx)(c, {
                title: `Checkout`
            })]
        })
    }),
    ie = g.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    ae = g.div.attrs({
        className: `scroll-y`
    })`
  background: ${_.White};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${h.SFPro};
  color: ${_.Black};
`,
    oe = () => (I.useEffect(() => () => {
        w.checkout.reset(), w.navigation.reset()
    }, []), (0, L.jsx)(T.Provider, {
        value: w,
        children: (0, L.jsx)(re, {})
    }));
export {
    oe as
    default
};