import {
    m as y,
    o as e,
    aZ as O,
    dD as d
} from "./_index.js";
var P = Object.defineProperty,
    f = (p, o, a, c) => {
        for (var s = void 0, r = p.length - 1, i; r >= 0; r--)(i = p[r]) && (s = i(o, a, s) || s);
        return s && P(o, a, s), s
    },
    g = (p => (p.checkout = "checkout", p))(g || {});
const u = {
        screen: "checkout",
        loadingTokenSubmit: !1
    },
    {
        screen: m,
        loadingTokenSubmit: C
    } = u;
class l {
    constructor() {
        this.screen = m, this.loadingTokenSubmit = C, this.reset = () => {
            Object.keys(u).forEach(o => this[o] = u[o])
        }, y(this)
    }
}
f([e], l.prototype, "screen");
f([e], l.prototype, "loadingTokenSubmit");
f([O], l.prototype, "reset");
var b = Object.defineProperty,
    v = Object.getOwnPropertyDescriptor,
    n = (p, o, a, c) => {
        for (var s = c > 1 ? void 0 : c ? v(o, a) : o, r = p.length - 1, i; r >= 0; r--)(i = p[r]) && (s = (c ? i(o, a, s) : i(s)) || s);
        return c && s && b(o, a, s), s
    };
const h = {
        planName: "",
        planId: "",
        couponId: "",
        planCost: 0,
        planDescription: "",
        accountCredit: 0,
        percentageOff: 1,
        amountOff: 0,
        couponDescription: "",
        hasCoupon: !1,
        couponOneUseOnly: !0,
        couponIsOnlyForPlan: "",
        existingPayingPlan: "",
        stripePublicKey: ""
    },
    {
        planName: I,
        planId: D,
        couponId: _,
        planCost: j,
        planDescription: k,
        accountCredit: x,
        percentageOff: N,
        amountOff: S,
        couponDescription: w,
        hasCoupon: F,
        couponOneUseOnly: K,
        couponIsOnlyForPlan: T,
        existingPayingPlan: U,
        stripePublicKey: $
    } = h;
class t {
    constructor() {
        this.planName = I, this.planId = D, this.couponId = _, this.planCost = j, this.planDescription = k, this.accountCredit = x, this.percentageOff = N, this.amountOff = S, this.couponDescription = w, this.hasCoupon = F, this.couponOneUseOnly = K, this.couponIsOnlyForPlan = T, this.existingPayingPlan = U, this.stripePublicKey = $, this.reset = () => {
            Object.keys(h).forEach(o => {
                this[o] = h[o]
            })
        }, y(this)
    }
    get totalCost() {
        const o = this.planCost * this.percentageOff - this.amountOff - this.accountCredit;
        return o < 0 ? 0 : o
    }
}
n([e], t.prototype, "planName", 2);
n([e], t.prototype, "planId", 2);
n([e], t.prototype, "couponId", 2);
n([e], t.prototype, "planCost", 2);
n([e], t.prototype, "planDescription", 2);
n([e], t.prototype, "accountCredit", 2);
n([e], t.prototype, "percentageOff", 2);
n([e], t.prototype, "amountOff", 2);
n([e], t.prototype, "couponDescription", 2);
n([e], t.prototype, "hasCoupon", 2);
n([e], t.prototype, "couponOneUseOnly", 2);
n([e], t.prototype, "couponIsOnlyForPlan", 2);
n([e], t.prototype, "existingPayingPlan", 2);
n([e], t.prototype, "stripePublicKey", 2);
n([d], t.prototype, "totalCost", 1);
n([O], t.prototype, "reset", 2);
const Z = {
    navigation: new l,
    checkout: new t
};
export {
    g as S, Z as s
};