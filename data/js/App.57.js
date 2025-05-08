function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _E;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
    let u, v, w, x, y = z => z;
    const z = j.default.div(u || (u = y`
  min-height: 100%;
  background-color: ${ 0 };
`), p.default.Snow), A = j.default.div(v || (v = y`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 40px;
`)), B = j.default.h1(w || (w = y`
  font-size: 80px;
  margin-bottom: 0px;
  font-weight: ${ 0 };
  margin-top: -10px;
`), o.FontWeights.UltraBold), C = j.default.h2(x || (x = y`
  font-size: 23px;
  margin-top: -14px;
`));
    class D extends i.Component {
        componentDidMount() {
            this.fetchPurchasedAndRedeemedGiftCards();
        }
        render() {
            return (0, h.jsxs)(z, {
                children: [
                    (0, h.jsx)(t.default, { includeSpacer: !0 }),
                    this.state.loading && !this.state.redeemingGiftCard && (0, h.jsx)('div', {
                        className: 'ant-modal-mask flex hc vc',
                        style: {
                            flex: 1,
                            width: '100%'
                        },
                        children: (0, h.jsx)(n.default, {
                            indicator: (0, h.jsx)(k.default, {
                                style: {
                                    color: 'white',
                                    fontSize: 40
                                },
                                spin: !0
                            })
                        })
                    }),
                    (0, h.jsxs)(A, {
                        children: [
                            (0, h.jsx)('img', {
                                className: 'animated jackInTheBox',
                                src: '/client/img/dashboard/gift.svg',
                                style: {
                                    width: 140,
                                    marginTop: 40,
                                    height: 140
                                }
                            }),
                            (0, h.jsx)(B, { children: 'GiftKit' }),
                            (0, h.jsx)(C, { children: 'Have a Gimkit gift card? This is the place to redeem it!' }),
                            (0, h.jsx)(l.default, {
                                style: {
                                    width: 400,
                                    height: 55,
                                    marginTop: 20,
                                    marginBottom: 50
                                },
                                type: 'primary',
                                size: 'large',
                                onClick: this.showRedemptionModal,
                                children: 'Redeem Gift Card'
                            }),
                            (0, h.jsx)(q.default, {
                                purchasedGiftCards: this.state.purchasedGiftCards,
                                redeemedGiftCards: this.state.redeemedGiftCards
                            }),
                            (0, h.jsx)(r.default, {
                                show: this.state.showingRedemptionModal,
                                onHide: this.hideRedemptionModal,
                                redeemGiftCard: this.redeemGiftCard,
                                onCardCodeChange: this.onCardCodeChange,
                                cardCode: this.state.cardCode,
                                loading: this.state.loading
                            })
                        ]
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                cardValue: 0,
                cardCode: '',
                purchasedGiftCards: [],
                redeemedGiftCards: [],
                showingRedemptionModal: !1,
                loading: !0,
                redeemingGiftCard: !1
            }), (0, g.default)(this, 'fetchPurchasedAndRedeemedGiftCards', () => {
                (0, s.request)({
                    url: '/api/gift-cards/fetch',
                    success: E => {
                        this.setState({
                            purchasedGiftCards: E.purchased,
                            redeemedGiftCards: E.redeemed
                        });
                    },
                    both: () => this.setState({ loading: !1 })
                });
            }), (0, g.default)(this, 'redeemGiftCard', () => {
                this.setState({
                    loading: !0,
                    redeemingGiftCard: !0
                }), (0, s.request)({
                    url: '/api/gift-cards/redeem',
                    data: { code: this.state.cardCode },
                    success: E => {
                        m.default.success({
                            title: 'Success!',
                            content: `Gift card redeemed! ${ (0, s.getDollar)(E.value / 100) } has been added to your account balance.`
                        }), this.hideRedemptionModal(), this.fetchPurchasedAndRedeemedGiftCards(), this.setState({ cardCode: '' });
                    },
                    error: E => {
                        const F = E && E.message && E.message.text;
                        let G = 'An error occured while redeeming your gift card. Please try again.';
                        F && (F.includes('redeemed') ? G = 'This gift card has already been redeemed' : F.includes('invalid') && (G = 'This gift card code is invalid')), m.default.error({ content: G });
                    },
                    both: () => {
                        this.setState({
                            loading: !1,
                            redeemingGiftCard: !1
                        });
                    }
                });
            }), (0, g.default)(this, 'showRedemptionModal', () => {
                this.setState({ showingRedemptionModal: !0 });
            }), (0, g.default)(this, 'hideRedemptionModal', () => {
                this.setState({ showingRedemptionModal: !1 });
            }), (0, g.default)(this, 'onCardCodeChange', E => this.setState({ cardCode: E.target.value }));
        }
    }
    var _E = D;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    let j;
    const k = g.default.div(j || (j = (l => l)`
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }
`));
    var _l = m => (0, f.jsxs)(k, {
        children: [
            (0, f.jsx)(i.default, {
                title: 'Gifts you\'ve purchased',
                gifts: m.purchasedGiftCards
            }),
            m.redeemedGiftCards && 0 !== m.redeemedGiftCards.length && m.purchasedGiftCards && 0 !== m.purchasedGiftCards.length && (0, f.jsx)(h.default, {}),
            (0, f.jsx)(i.default, {
                title: 'Gifts you\'ve redeemed',
                gifts: m.redeemedGiftCards,
                hidePurchaseDate: !0
            })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    let j, k, l = m => m;
    const m = g.default.div(j || (j = l``)), n = g.default.h2(k || (k = l`
  text-align: center;
  font-size: 36px;
  font-family: ${ 0 };
  font-weight: ${ 0 };
`), h.Fonts.SFPro, h.FontWeights.UltraBold);
    var _o = p => p.gifts && 0 !== p.gifts.length ? (0, f.jsxs)(m, {
        children: [
            (0, f.jsx)(n, { children: p.title }),
            p.gifts.map(q => (0, f.jsx)(i.default, {
                value: q.value,
                dateRedeemed: q.dateRedeemed,
                code: q.dateRedeemed ? null : q.code,
                purchaseDate: p.hidePurchaseDate ? null : q.createdAt
            }, q.code))
        ]
    }) : null;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _D;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n, o, p, q, r, s, t, u = v => v;
    const v = (0, g.default)(h.default)(n || (n = u`
  display: flex;
  padding: 20px;
  margin-bottom: 14px !important;
  border-radius: 6px;
  color: black;
  font-family: ${ 0 };

  .ant-card-body {
    width: 100%;
    display: flex;
  }
`), k.Fonts.SFPro), w = g.default.h2(o || (o = u`
  font-size: 27px;
  font-weight: ${ 0 };
  margin-bottom: 0px;
`), k.FontWeights.UltraBold), x = (0, g.default)(w)(p || (p = u`
  font-size: 22px;
`)), y = g.default.p(q || (q = u`
  margin-bottom: 0px;
`)), z = g.default.div(r || (r = u`
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
`)), A = g.default.div(s || (s = u`
  justify-content: flex-end;
  flex-direction: column;
  width: 50%;
`)), B = g.default.div(t || (t = u`
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
`)), C = D => D.replace(/(.{4})(.{4})(.{4})(.{4})(.{4})/, '$1-$2-$3-$4-$5');
    var _D = E => (0, f.jsxs)(v, {
        children: [
            (0, f.jsxs)(z, {
                children: [
                    (0, f.jsx)(w, { children: (0, m.centsToFormatedMoney)(E.value) }),
                    E.purchaseDate && (0, f.jsxs)(y, {
                        children: [
                            'Purchased ',
                            (0, l.timeSince)(E.purchaseDate),
                            ' '
                        ]
                    }),
                    E.dateRedeemed ? (0, f.jsxs)(y, {
                        children: [
                            'Redeemed ',
                            (0, l.timeSince)(E.dateRedeemed),
                            ' '
                        ]
                    }) : (0, f.jsx)(y, { children: 'Not yet redeemed' })
                ]
            }),
            E.code && (0, f.jsxs)(A, {
                children: [
                    (0, f.jsx)(x, { children: 'Gift Card Code:' }),
                    (0, f.jsx)(B, {
                        onClick: () => {
                            return c = E.code, b(j)(C(c)), void i.default.success('Gift card copied to clipboard!');
                            var F;
                        },
                        children: C(E.code)
                    })
                ]
            })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'centsToFormatedMoney', function () {
        return _f;
    });
    const _f = g => (g / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m, n = o => o;
    const o = (0, i.default)(h.default)(k || (k = n`
  font-family: ${ 0 };
  color: black;
`), j.Fonts.SFPro), p = i.default.h2(l || (l = n`
  font-weight: ${ 0 };
  font-size: 25px;
  margin-bottom: -4px;
`), j.FontWeights.UltraBold), q = i.default.p(m || (m = n`
  font-size: 16px;
  opacity: 0.8;
  margin-bottom: 10px;
`));
    var _r = s => (0, f.jsxs)(o, {
        visible: s.show,
        onOk: s.redeemGiftCard,
        onCancel: s.onHide,
        okText: 'Redeem',
        okButtonProps: {
            disabled: !s.cardCode,
            loading: s.loading
        },
        closable: !0,
        children: [
            (0, f.jsx)(p, { children: 'Redeem a gift card' }),
            (0, f.jsx)(q, { children: 'Dashes not required' }),
            (0, f.jsx)(g.default, {
                onChange: s.onCardCodeChange,
                value: s.cardCode,
                size: 'large',
                placeholder: 'Gift card code...'
            })
        ]
    });
});