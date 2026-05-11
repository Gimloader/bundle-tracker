import {
    j as t,
    c1 as l,
    U as c,
    d,
    F as a,
    c as g,
    D as x,
    M as n,
    r as u,
    a as h,
    S as C,
    bA as G,
    B as j,
    c2 as b,
    e as y
} from "./_index.js";
import {
    c as w
} from "./index-2.js";
import {
    c as R
} from "./Money.js";
import {
    s as v
} from "./index-4.js";
import {
    I as S
} from "./index-3.js";
import {
    S as M
} from "./App-4.js";
import "./context.js";
import "./Shortcut.js";
import "./Names.js";
import "./mobxreact.esm.js";
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
import "./NavigateTo.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
const $ = d(g)`
  display: flex;
  padding: 20px;
  margin-bottom: 14px !important;
  border-radius: 6px;
  color: black;
  font-family: ${c.SFPro};

  .ant-card-body {
    width: 100%;
    display: flex;
  }
`,
    f = d.h2`
  font-size: 27px;
  font-weight: ${a.UltraBold};
  margin-bottom: 0px;
`,
    k = d(f)`
  font-size: 22px;
`,
    o = d.p`
  margin-bottom: 0px;
`,
    T = d.div`
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
`,
    z = d.div`
  justify-content: flex-end;
  flex-direction: column;
  width: 50%;
`,
    D = d.div`
  margin: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
  padding: 4px 12px;
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`,
    p = e => e.replace(/(.{4})(.{4})(.{4})(.{4})(.{4})/, "$1-$2-$3-$4-$5"),
    P = e => {
        w(p(e)), v.success("Gift card copied to clipboard!")
    },
    B = e => t.jsxs($, {
        children: [t.jsxs(T, {
            children: [t.jsx(f, {
                children: R(e.value)
            }), e.purchaseDate && t.jsxs(o, {
                children: ["Purchased ", l(e.purchaseDate), " "]
            }), e.dateRedeemed ? t.jsxs(o, {
                children: ["Redeemed ", l(e.dateRedeemed), " "]
            }) : t.jsx(o, {
                children: "Not yet redeemed"
            })]
        }), e.code && t.jsxs(z, {
            children: [t.jsx(k, {
                children: "Gift Card Code:"
            }), t.jsx(D, {
                onClick: () => P(e.code),
                children: p(e.code)
            })]
        })]
    }),
    F = d.div``,
    H = d.h2`
  text-align: center;
  font-size: 36px;
  font-family: ${c.SFPro};
  font-weight: ${a.UltraBold};
`,
    m = e => e.gifts && e.gifts.length !== 0 ? t.jsxs(F, {
        children: [t.jsx(H, {
            children: e.title
        }), e.gifts.map(i => t.jsx(B, {
            value: i.value,
            dateRedeemed: i.dateRedeemed,
            code: i.dateRedeemed ? null : i.code,
            purchaseDate: e.hidePurchaseDate ? null : i.createdAt
        }, i.code))]
    }) : null,
    W = d.div`
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }
`,
    A = e => t.jsxs(W, {
        children: [t.jsx(m, {
            title: "Gifts you've purchased",
            gifts: e.purchasedGiftCards
        }), e.redeemedGiftCards && e.redeemedGiftCards.length !== 0 && e.purchasedGiftCards && e.purchasedGiftCards.length !== 0 && t.jsx(x, {}), t.jsx(m, {
            title: "Gifts you've redeemed",
            gifts: e.redeemedGiftCards,
            hidePurchaseDate: !0
        })]
    }),
    I = d(n)`
  font-family: ${c.SFPro};
  color: black;
`,
    U = d.h2`
  font-weight: ${a.UltraBold};
  font-size: 25px;
  margin-bottom: -4px;
`,
    N = d.p`
  font-size: 16px;
  opacity: 0.8;
  margin-bottom: 10px;
`,
    q = e => t.jsxs(I, {
        visible: e.show,
        onOk: e.redeemGiftCard,
        onCancel: e.onHide,
        okText: "Redeem",
        okButtonProps: {
            disabled: !e.cardCode,
            loading: e.loading
        },
        closable: !0,
        children: [t.jsx(U, {
            children: "Redeem a gift card"
        }), t.jsx(N, {
            children: "Dashes not required"
        }), t.jsx(S, {
            onChange: e.onCardCodeChange,
            value: e.cardCode,
            size: "large",
            placeholder: "Gift card code..."
        })]
    }),
    E = d.div`
  min-height: 100%;
  background-color: ${y.Snow};
`,
    L = d.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 40px;
`,
    K = d.h1`
  font-size: 80px;
  margin-bottom: 0px;
  font-weight: ${a.UltraBold};
  margin-top: -10px;
`,
    O = d.h2`
  font-size: 23px;
  margin-top: -14px;
`;
class je extends u.Component {
    constructor() {
        super(...arguments), this.state = {
            cardValue: 0,
            cardCode: "",
            purchasedGiftCards: [],
            redeemedGiftCards: [],
            showingRedemptionModal: !1,
            loading: !0,
            redeemingGiftCard: !1
        }, this.fetchPurchasedAndRedeemedGiftCards = () => {
            h({
                url: "/api/gift-cards/fetch",
                success: i => {
                    this.setState({
                        purchasedGiftCards: i.purchased,
                        redeemedGiftCards: i.redeemed
                    })
                },
                both: () => this.setState({
                    loading: !1
                })
            })
        }, this.redeemGiftCard = () => {
            this.setState({
                loading: !0,
                redeemingGiftCard: !0
            }), h({
                url: "/api/gift-cards/redeem",
                data: {
                    code: this.state.cardCode
                },
                success: i => {
                    n.success({
                        title: "Success!",
                        content: `Gift card redeemed! ${b(i.value/100)} has been added to your account balance.`
                    }), this.hideRedemptionModal(), this.fetchPurchasedAndRedeemedGiftCards(), this.setState({
                        cardCode: ""
                    })
                },
                error: i => {
                    const r = i && i.message && i.message.text;
                    let s = "An error occured while redeeming your gift card. Please try again.";
                    r && (r.includes("redeemed") ? s = "This gift card has already been redeemed" : r.includes("invalid") && (s = "This gift card code is invalid")), n.error({
                        content: s
                    })
                },
                both: () => {
                    this.setState({
                        loading: !1,
                        redeemingGiftCard: !1
                    })
                }
            })
        }, this.showRedemptionModal = () => {
            this.setState({
                showingRedemptionModal: !0
            })
        }, this.hideRedemptionModal = () => {
            this.setState({
                showingRedemptionModal: !1
            })
        }, this.onCardCodeChange = i => this.setState({
            cardCode: i.target.value
        })
    }
    componentDidMount() {
        this.fetchPurchasedAndRedeemedGiftCards()
    }
    render() {
        return t.jsxs(E, {
            children: [t.jsx(M, {
                includeSpacer: !0
            }), this.state.loading && !this.state.redeemingGiftCard && t.jsx("div", {
                className: "ant-modal-mask flex hc vc",
                style: {
                    flex: 1,
                    width: "100%"
                },
                children: t.jsx(C, {
                    indicator: t.jsx(G, {
                        style: {
                            color: "white",
                            fontSize: 40
                        },
                        spin: !0
                    })
                })
            }), t.jsxs(L, {
                children: [t.jsx("img", {
                    className: "animated jackInTheBox",
                    src: "/client/img/dashboard/gift.svg",
                    style: {
                        width: 140,
                        marginTop: 40,
                        height: 140
                    }
                }), t.jsx(K, {
                    children: "GiftKit"
                }), t.jsx(O, {
                    children: "Have a Gimkit gift card? This is the place to redeem it!"
                }), t.jsx(j, {
                    style: {
                        width: 400,
                        height: 55,
                        marginTop: 20,
                        marginBottom: 50
                    },
                    type: "primary",
                    size: "large",
                    onClick: this.showRedemptionModal,
                    children: "Redeem Gift Card"
                }), t.jsx(A, {
                    purchasedGiftCards: this.state.purchasedGiftCards,
                    redeemedGiftCards: this.state.redeemedGiftCards
                }), t.jsx(q, {
                    show: this.state.showingRedemptionModal,
                    onHide: this.hideRedemptionModal,
                    redeemGiftCard: this.redeemGiftCard,
                    onCardCodeChange: this.onCardCodeChange,
                    cardCode: this.state.cardCode,
                    loading: this.state.loading
                })]
            })]
        })
    }
}
export {
    je as
    default
};