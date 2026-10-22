import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    D as n,
    l as r
} from "./utils.js";
import {
    t as i
} from "./react-1.js";
import {
    n as a
} from "./compact-item.js";
import {
    t as o
} from "./message.js";
import {
    t as s
} from "./modal-1.js";
import {
    t as c
} from "./button-1.js";
import {
    t as l
} from "./input.js";
import {
    t as u
} from "./card.js";
import {
    t as d
} from "./spin.js";
import {
    t as f
} from "./App-4.js";
import {
    t as p
} from "./copy-to-clipboard.js";
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
    t as b
} from "./Money.js";
var x = e(i()),
    S = e(p()),
    C = m(),
    w = g(u)`
  display: flex;
  padding: 20px;
  margin-bottom: 14px !important;
  border-radius: 6px;
  color: black;
  font-family: ${h.SFPro};

  .ant-card-body {
    width: 100%;
    display: flex;
  }
`,
    T = g.h2`
  font-size: 27px;
  font-weight: ${v.UltraBold};
  margin-bottom: 0px;
`,
    E = g(T)`
  font-size: 22px;
`,
    D = g.p`
  margin-bottom: 0px;
`,
    O = g.div`
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
`,
    k = g.div`
  justify-content: flex-end;
  flex-direction: column;
  width: 50%;
`,
    A = g.div`
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
    j = e => e.replace(/(.{4})(.{4})(.{4})(.{4})(.{4})/, `$1-$2-$3-$4-$5`),
    M = e => {
        (0, S.default)(j(e)), o.success(`Gift card copied to clipboard!`)
    },
    N = e => (0, C.jsxs)(w, {
        children: [(0, C.jsxs)(O, {
            children: [(0, C.jsx)(T, {
                children: b(e.value)
            }), e.purchaseDate && (0, C.jsxs)(D, {
                children: [`Purchased `, n(e.purchaseDate), ` `]
            }), e.dateRedeemed ? (0, C.jsxs)(D, {
                children: [`Redeemed `, n(e.dateRedeemed), ` `]
            }) : (0, C.jsx)(D, {
                children: `Not yet redeemed`
            })]
        }), e.code && (0, C.jsxs)(k, {
            children: [(0, C.jsx)(E, {
                children: `Gift Card Code:`
            }), (0, C.jsx)(A, {
                onClick: () => M(e.code),
                children: j(e.code)
            })]
        })]
    }),
    P = g.div``,
    F = g.h2`
  text-align: center;
  font-size: 36px;
  font-family: ${h.SFPro};
  font-weight: ${v.UltraBold};
`,
    I = e => e.gifts && e.gifts.length !== 0 ? (0, C.jsxs)(P, {
        children: [(0, C.jsx)(F, {
            children: e.title
        }), e.gifts.map(t => (0, C.jsx)(N, {
            value: t.value,
            dateRedeemed: t.dateRedeemed,
            code: t.dateRedeemed ? null : t.code,
            purchaseDate: e.hidePurchaseDate ? null : t.createdAt
        }, t.code))]
    }) : null,
    L = g.div`
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }
`,
    R = e => (0, C.jsxs)(L, {
        children: [(0, C.jsx)(I, {
            title: `Gifts you've purchased`,
            gifts: e.purchasedGiftCards
        }), e.redeemedGiftCards && e.redeemedGiftCards.length !== 0 && e.purchasedGiftCards && e.purchasedGiftCards.length !== 0 && (0, C.jsx)(y, {}), (0, C.jsx)(I, {
            title: `Gifts you've redeemed`,
            gifts: e.redeemedGiftCards,
            hidePurchaseDate: !0
        })]
    }),
    z = g(s)`
  font-family: ${h.SFPro};
  color: black;
`,
    B = g.h2`
  font-weight: ${v.UltraBold};
  font-size: 25px;
  margin-bottom: -4px;
`,
    V = g.p`
  font-size: 16px;
  opacity: 0.8;
  margin-bottom: 10px;
`,
    H = e => (0, C.jsxs)(z, {
        visible: e.show,
        onOk: e.redeemGiftCard,
        onCancel: e.onHide,
        okText: `Redeem`,
        okButtonProps: {
            disabled: !e.cardCode,
            loading: e.loading
        },
        closable: !0,
        children: [(0, C.jsx)(B, {
            children: `Redeem a gift card`
        }), (0, C.jsx)(V, {
            children: `Dashes not required`
        }), (0, C.jsx)(l, {
            onChange: e.onCardCodeChange,
            value: e.cardCode,
            size: `large`,
            placeholder: `Gift card code...`
        })]
    }),
    U = g.div`
  min-height: 100%;
  background-color: ${_.Snow};
`,
    W = g.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 40px;
`,
    G = g.h1`
  font-size: 80px;
  margin-bottom: 0px;
  font-weight: ${v.UltraBold};
  margin-top: -10px;
`,
    K = g.h2`
  font-size: 23px;
  margin-top: -14px;
`,
    q = class extends x.Component {
        constructor(...e) {
            super(...e), this.state = {
                cardValue: 0,
                cardCode: ``,
                purchasedGiftCards: [],
                redeemedGiftCards: [],
                showingRedemptionModal: !1,
                loading: !0,
                redeemingGiftCard: !1
            }, this.fetchPurchasedAndRedeemedGiftCards = () => {
                t({
                    url: `/api/gift-cards/fetch`,
                    success: e => {
                        this.setState({
                            purchasedGiftCards: e.purchased,
                            redeemedGiftCards: e.redeemed
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
                }), t({
                    url: `/api/gift-cards/redeem`,
                    data: {
                        code: this.state.cardCode
                    },
                    success: e => {
                        s.success({
                            title: `Success!`,
                            content: `Gift card redeemed! ${r(e.value/100)} has been added to your account balance.`
                        }), this.hideRedemptionModal(), this.fetchPurchasedAndRedeemedGiftCards(), this.setState({
                            cardCode: ``
                        })
                    },
                    error: e => {
                        let t = e && e.message && e.message.text,
                            n = `An error occured while redeeming your gift card. Please try again.`;
                        t && (t.includes(`redeemed`) ? n = `This gift card has already been redeemed` : t.includes(`invalid`) && (n = `This gift card code is invalid`)), s.error({
                            content: n
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
            }, this.onCardCodeChange = e => this.setState({
                cardCode: e.target.value
            })
        }
        componentDidMount() {
            this.fetchPurchasedAndRedeemedGiftCards()
        }
        render() {
            return (0, C.jsxs)(U, {
                children: [(0, C.jsx)(f, {
                    includeSpacer: !0
                }), this.state.loading && !this.state.redeemingGiftCard && (0, C.jsx)(`div`, {
                    className: `ant-modal-mask flex hc vc`,
                    style: {
                        flex: 1,
                        width: `100%`
                    },
                    children: (0, C.jsx)(d, {
                        indicator: (0, C.jsx)(a, {
                            style: {
                                color: `white`,
                                fontSize: 40
                            },
                            spin: !0
                        })
                    })
                }), (0, C.jsxs)(W, {
                    children: [(0, C.jsx)(`img`, {
                        className: `animated jackInTheBox`,
                        src: `/client/img/dashboard/gift.svg`,
                        style: {
                            width: 140,
                            marginTop: 40,
                            height: 140
                        }
                    }), (0, C.jsx)(G, {
                        children: `GiftKit`
                    }), (0, C.jsx)(K, {
                        children: `Have a Gimkit gift card? This is the place to redeem it!`
                    }), (0, C.jsx)(c, {
                        style: {
                            width: 400,
                            height: 55,
                            marginTop: 20,
                            marginBottom: 50
                        },
                        type: `primary`,
                        size: `large`,
                        onClick: this.showRedemptionModal,
                        children: `Redeem Gift Card`
                    }), (0, C.jsx)(R, {
                        purchasedGiftCards: this.state.purchasedGiftCards,
                        redeemedGiftCards: this.state.redeemedGiftCards
                    }), (0, C.jsx)(H, {
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
    };
export {
    q as
    default
};