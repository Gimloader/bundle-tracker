function e(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("3iku3", (function(t, n) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return z
    }));
    var i = r("divCp"),
        o = r("hxEiv"),
        s = r("fywoC"),
        d = r("2FDaO"),
        c = r("kpdXN"),
        u = r("93yIm"),
        l = r("fBuQJ"),
        f = r("gHmyG"),
        p = r("69SUA"),
        m = r("lKmIF"),
        g = r("bXIOg"),
        h = r("kpEqP"),
        v = r("iMOcM"),
        x = r("cHCps");
    let y, w, b, C, O = e => e;
    const j = d.default.div(y || (y = O`
  min-height: 100%;
  background-color: ${0};
`), m.default.Snow),
        S = d.default.div(w || (w = O`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 40px;
`)),
        M = d.default.h1(b || (b = O`
  font-size: 80px;
  margin-bottom: 0px;
  font-weight: ${0};
  margin-top: -10px;
`), p.FontWeights.UltraBold),
        k = d.default.h2(C || (C = O`
  font-size: 23px;
  margin-top: -14px;
`));
    class E extends s.Component {
        componentDidMount() {
            this.fetchPurchasedAndRedeemedGiftCards()
        }
        render() {
            return (0, o.jsxs)(j, {
                children: [(0, o.jsx)(x.default, {
                    includeSpacer: !0
                }), this.state.loading && !this.state.redeemingGiftCard && (0, o.jsx)("div", {
                    className: "ant-modal-mask flex hc vc",
                    style: {
                        flex: 1,
                        width: "100%"
                    },
                    children: (0, o.jsx)(f.default, {
                        indicator: (0, o.jsx)(c.default, {
                            style: {
                                color: "white",
                                fontSize: 40
                            },
                            spin: !0
                        })
                    })
                }), (0, o.jsxs)(S, {
                    children: [(0, o.jsx)("img", {
                        className: "animated jackInTheBox",
                        src: "/client/img/dashboard/gift.svg",
                        style: {
                            width: 140,
                            marginTop: 40,
                            height: 140
                        }
                    }), (0, o.jsx)(M, {
                        children: "GiftKit"
                    }), (0, o.jsx)(k, {
                        children: "Have a Gimkit gift card? This is the place to redeem it!"
                    }), (0, o.jsx)(u.default, {
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
                    }), (0, o.jsx)(g.default, {
                        purchasedGiftCards: this.state.purchasedGiftCards,
                        redeemedGiftCards: this.state.redeemedGiftCards
                    }), (0, o.jsx)(h.default, {
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
        constructor(...e) {
            super(...e), (0, i.default)(this, "state", {
                cardValue: 0,
                cardCode: "",
                purchasedGiftCards: [],
                redeemedGiftCards: [],
                showingRedemptionModal: !1,
                loading: !0,
                redeemingGiftCard: !1
            }), (0, i.default)(this, "fetchPurchasedAndRedeemedGiftCards", (() => {
                (0, v.request)({
                    url: "/api/gift-cards/fetch",
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
            })), (0, i.default)(this, "redeemGiftCard", (() => {
                this.setState({
                    loading: !0,
                    redeemingGiftCard: !0
                }), (0, v.request)({
                    url: "/api/gift-cards/redeem",
                    data: {
                        code: this.state.cardCode
                    },
                    success: e => {
                        l.default.success({
                            title: "Success!",
                            content: `Gift card redeemed! ${(0,v.getDollar)(e.value/100)} has been added to your account balance.`
                        }), this.hideRedemptionModal(), this.fetchPurchasedAndRedeemedGiftCards(), this.setState({
                            cardCode: ""
                        })
                    },
                    error: e => {
                        const t = e && e.message && e.message.text;
                        let r = "An error occured while redeeming your gift card. Please try again.";
                        t && (t.includes("redeemed") ? r = "This gift card has already been redeemed" : t.includes("invalid") && (r = "This gift card code is invalid")), l.default.error({
                            content: r
                        })
                    },
                    both: () => {
                        this.setState({
                            loading: !1,
                            redeemingGiftCard: !1
                        })
                    }
                })
            })), (0, i.default)(this, "showRedemptionModal", (() => {
                this.setState({
                    showingRedemptionModal: !0
                })
            })), (0, i.default)(this, "hideRedemptionModal", (() => {
                this.setState({
                    showingRedemptionModal: !1
                })
            })), (0, i.default)(this, "onCardCodeChange", (e => this.setState({
                cardCode: e.target.value
            })))
        }
    }
    var z = E
})), r.register("bXIOg", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        o = r("fC6cp"),
        s = r("7RYKv");
    let d;
    const c = i.default.div(d || (d = (e => e)`
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }
`));
    var u = e => (0, a.jsxs)(c, {
        children: [(0, a.jsx)(s.default, {
            title: "Gifts you've purchased",
            gifts: e.purchasedGiftCards
        }), e.redeemedGiftCards && 0 !== e.redeemedGiftCards.length && e.purchasedGiftCards && 0 !== e.purchasedGiftCards.length && (0, a.jsx)(o.default, {}), (0, a.jsx)(s.default, {
            title: "Gifts you've redeemed",
            gifts: e.redeemedGiftCards,
            hidePurchaseDate: !0
        })]
    })
})), r.register("7RYKv", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        o = r("69SUA"),
        s = r("HwhgN");
    let d, c, u = e => e;
    const l = i.default.div(d || (d = u``)),
        f = i.default.h2(c || (c = u`
  text-align: center;
  font-size: 36px;
  font-family: ${0};
  font-weight: ${0};
`), o.Fonts.SFPro, o.FontWeights.UltraBold);
    var p = e => e.gifts && 0 !== e.gifts.length ? (0, a.jsxs)(l, {
        children: [(0, a.jsx)(f, {
            children: e.title
        }), e.gifts.map((t => (0, a.jsx)(s.default, {
            value: t.value,
            dateRedeemed: t.dateRedeemed,
            code: t.dateRedeemed ? null : t.code,
            purchaseDate: e.hidePurchaseDate ? null : t.createdAt
        }, t.code)))]
    }) : null
})), r.register("HwhgN", (function(n, a) {
    e(n.exports, "default", (function() {
        return z
    }));
    var i = r("hxEiv");
    r("fywoC");
    var o = r("2FDaO"),
        s = r("7ECC6"),
        d = r("cy4A6"),
        c = r("dhxiD"),
        u = r("69SUA"),
        l = r("iMOcM"),
        f = r("2KDwk");
    let p, m, g, h, v, x, y, w = e => e;
    const b = (0, o.default)(s.default)(p || (p = w`
  display: flex;
  padding: 20px;
  margin-bottom: 14px !important;
  border-radius: 6px;
  color: black;
  font-family: ${0};

  .ant-card-body {
    width: 100%;
    display: flex;
  }
`), u.Fonts.SFPro),
        C = o.default.h2(m || (m = w`
  font-size: 27px;
  font-weight: ${0};
  margin-bottom: 0px;
`), u.FontWeights.UltraBold),
        O = (0, o.default)(C)(g || (g = w`
  font-size: 22px;
`)),
        j = o.default.p(h || (h = w`
  margin-bottom: 0px;
`)),
        S = o.default.div(v || (v = w`
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
`)),
        M = o.default.div(x || (x = w`
  justify-content: flex-end;
  flex-direction: column;
  width: 50%;
`)),
        k = o.default.div(y || (y = w`
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
`)),
        E = e => e.replace(/(.{4})(.{4})(.{4})(.{4})(.{4})/, "$1-$2-$3-$4-$5");
    var z = e => (0, i.jsxs)(b, {
        children: [(0, i.jsxs)(S, {
            children: [(0, i.jsx)(C, {
                children: (0, f.centsToFormatedMoney)(e.value)
            }), e.purchaseDate && (0, i.jsxs)(j, {
                children: ["Purchased ", (0, l.timeSince)(e.purchaseDate), " "]
            }), e.dateRedeemed ? (0, i.jsxs)(j, {
                children: ["Redeemed ", (0, l.timeSince)(e.dateRedeemed), " "]
            }) : (0, i.jsx)(j, {
                children: "Not yet redeemed"
            })]
        }), e.code && (0, i.jsxs)(M, {
            children: [(0, i.jsx)(O, {
                children: "Gift Card Code:"
            }), (0, i.jsx)(k, {
                onClick: () => {
                    return r = e.code, t(c)(E(r)), void d.default.success("Gift card copied to clipboard!");
                    var r
                },
                children: E(e.code)
            })]
        })]
    })
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        a = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, i, o, s, d, c, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (o = n(), s = document.createRange(), d = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var i = a[t.format] || a.default;
                            window.clipboardData.setData(i, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), d.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), i = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, e)
            }
        } finally {
            d && ("function" == typeof d.removeRange ? d.removeRange(s) : d.removeAllRanges()), c && document.body.removeChild(c), o()
        }
        return u
    }
})), r.register("1fK2g", (function(e, t) {
    e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null
        }
        return e.removeAllRanges(),
            function() {
                "Caret" === e.type && e.removeAllRanges(), e.rangeCount || r.forEach((function(t) {
                    e.addRange(t)
                })), t && t.focus()
            }
    }
})), r.register("2KDwk", (function(t, r) {
    e(t.exports, "centsToFormatedMoney", (function() {
        return n
    }));
    const n = e => (e / 100).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
})), r.register("kpEqP", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("b9Zw0"),
        o = r("fBuQJ"),
        s = r("2FDaO"),
        d = r("69SUA");
    let c, u, l, f = e => e;
    const p = (0, s.default)(o.default)(c || (c = f`
  font-family: ${0};
  color: black;
`), d.Fonts.SFPro),
        m = s.default.h2(u || (u = f`
  font-weight: ${0};
  font-size: 25px;
  margin-bottom: -4px;
`), d.FontWeights.UltraBold),
        g = s.default.p(l || (l = f`
  font-size: 16px;
  opacity: 0.8;
  margin-bottom: 10px;
`));
    var h = e => (0, a.jsxs)(p, {
        visible: e.show,
        onOk: e.redeemGiftCard,
        onCancel: e.onHide,
        okText: "Redeem",
        okButtonProps: {
            disabled: !e.cardCode,
            loading: e.loading
        },
        closable: !0,
        children: [(0, a.jsx)(m, {
            children: "Redeem a gift card"
        }), (0, a.jsx)(g, {
            children: "Dashes not required"
        }), (0, a.jsx)(i.default, {
            onChange: e.onCardCodeChange,
            value: e.cardCode,
            size: "large",
            placeholder: "Gift card code..."
        })]
    })
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("iI4DW"),
        i = r("fywoC"),
        o = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: d
            } = n, c = i.useRef(null), [u, l] = i.useState(0), [f, p] = i.useState(0), [m, g] = (0, a.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: h
            } = i.useContext(o.ConfigContext), v = h(t || "select", s);
            return i.useEffect((() => {
                if (g(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            l(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const a = r ? `.${r(v)}` : `.${v}-dropdown`,
                                i = null === (n = c.current) || void 0 === n ? void 0 : n.querySelector(a);
                            i && (clearInterval(t), e.observe(i))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), i.createElement(o.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, i.createElement("div", {
                ref: c,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: f
                }
            }, i.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, d), {
                    margin: 0
                }),
                open: m,
                visible: m,
                getPopupContainer: () => c.current
            }))))
        }
    }
})), r.register("hacAX", (function(t, n) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var a = r("lt5sb"),
        i = r("aWAHQ");
    const o = new(0, a.Keyframes)("antMoveDownIn", {
            "0%": {
                transform: "translate3d(0, 100%, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        s = new(0, a.Keyframes)("antMoveDownOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(0, 100%, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        d = new(0, a.Keyframes)("antMoveLeftIn", {
            "0%": {
                transform: "translate3d(-100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        c = new(0, a.Keyframes)("antMoveLeftOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(-100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        u = new(0, a.Keyframes)("antMoveRightIn", {
            "0%": {
                transform: "translate3d(100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        l = new(0, a.Keyframes)("antMoveRightOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        f = {
            "move-up": {
                inKeyframes: new(0, a.Keyframes)("antMoveUpIn", {
                    "0%": {
                        transform: "translate3d(0, -100%, 0)",
                        transformOrigin: "0 0",
                        opacity: 0
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                        transformOrigin: "0 0",
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, a.Keyframes)("antMoveUpOut", {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                        transformOrigin: "0 0",
                        opacity: 1
                    },
                    "100%": {
                        transform: "translate3d(0, -100%, 0)",
                        transformOrigin: "0 0",
                        opacity: 0
                    }
                })
            },
            "move-down": {
                inKeyframes: o,
                outKeyframes: s
            },
            "move-left": {
                inKeyframes: d,
                outKeyframes: c
            },
            "move-right": {
                inKeyframes: u,
                outKeyframes: l
            }
        },
        p = (e, t) => {
            const {
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: a,
                outKeyframes: o
            } = f[t];
            return [(0, i.initMotion)(n, a, o, e.motionDurationMid), {
                [`\n        ${n}-enter,\n        ${n}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${n}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), r.register("i5Qjx", (function(n, a) {
    e(n.exports, "SpaceContext", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(n.exports, "default", (function() {
        return v
    }), (function(e) {
        return v = e
    }));
    var i = r("fe1on"),
        o = r("jyxW7"),
        s = r("fywoC"),
        d = r("4gMdJ"),
        c = r("1eqVQ"),
        u = r("7yXSw"),
        l = r("c9Vcn"),
        f = r("5gjI2"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
            }
            return r
        };
    const m = s.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        g = {
            small: 8,
            middle: 16,
            large: 24
        };
    const h = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: a
        } = s.useContext(d.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: h,
            className: v,
            rootClassName: x,
            children: y,
            direction: w = "horizontal",
            prefixCls: b,
            split: C,
            style: O,
            wrap: j = !1
        } = e, S = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), M = (0, c.default)(), [k, E] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? g[e] : e || 0
        }(e)))), [u]), z = (0, o.default)(y, {
            keepEmpty: !0
        }), R = void 0 === h && "horizontal" === w ? "center" : h, D = r("space", b), [G, N] = (0, f.default)(D), P = t(i)(D, N, `${D}-${w}`, {
            [`${D}-rtl`]: "rtl" === a,
            [`${D}-align-${R}`]: R
        }, v, x), K = `${D}-item`, _ = "rtl" === a ? "marginLeft" : "marginRight";
        let $ = 0;
        const B = z.map(((e, t) => {
                null != e && ($ = t);
                const r = e && e.key || `${K}-${t}`;
                return s.createElement(l.default, {
                    className: K,
                    key: r,
                    direction: w,
                    index: t,
                    marginDirection: _,
                    split: C,
                    wrap: j
                }, e)
            })),
            F = s.useMemo((() => ({
                horizontalSize: k,
                verticalSize: E,
                latestIndex: $,
                supportFlexGap: M
            })), [k, E, $, M]);
        if (0 === z.length) return null;
        const W = {};
        return j && (W.flexWrap = "wrap", M || (W.marginBottom = -E)), M && (W.columnGap = k, W.rowGap = E), G(s.createElement("div", Object.assign({
            className: P,
            style: Object.assign(Object.assign({}, W), O)
        }, S), s.createElement(m.Provider, {
            value: F
        }, B)))
    };
    h.Compact = u.default;
    var v = h
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC"),
        i = r("azMeL"),
        o = () => {
            const [e, t] = a.useState(!1);
            return a.useEffect((() => {
                t((0, i.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC"),
        i = r("i5Qjx");

    function o(e) {
        let {
            className: t,
            direction: r,
            index: n,
            marginDirection: o,
            children: s,
            split: d,
            wrap: c
        } = e;
        const {
            horizontalSize: u,
            verticalSize: l,
            latestIndex: f,
            supportFlexGap: p
        } = a.useContext(i.SpaceContext);
        let m = {};
        return p || ("vertical" === r ? n < f && (m = {
            marginBottom: u / (d ? 2 : 1)
        }) : m = Object.assign(Object.assign({}, n < f && {
            [o]: u / (d ? 2 : 1)
        }), c && {
            paddingBottom: l
        })), null == s ? null : a.createElement(a.Fragment, null, a.createElement("div", {
            className: t,
            style: m
        }, s), n < f && d && a.createElement("span", {
            className: `${t}-split`,
            style: m
        }, d))
    }
})), r.register("6WS0O", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        sideMargin: 50,
        optionWidth: 200
    }
})), r.register("77qSl", (function(t, n) {
    e(t.exports, "useMediaMatch", (function() {
        return i
    }));
    var a = r("fywoC");

    function i(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, a.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, a.useState)((function() {
                return t.matches
            })),
            n = r[0],
            i = r[1];
        return (0, a.useEffect)((function() {
            i(t.matches);
            var e = function(e) {
                return i(e.matches)
            };
            return t.addEventListener ? (t.addEventListener("change", e), function() {
                return t.removeEventListener("change", e)
            }) : (t.addListener(e), function() {
                return t.removeListener(e)
            })
        }), [t]), n
    }
})), r.register("3bHhZ", (function(e, t) {
    var n = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        a = e.exports && e.exports.__exportStar || function(e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), a(r("coa3i"), e.exports), a(r("exKSe"), e.exports), a(r("4Nv4f"), e.exports)
})), r.register("coa3i", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useBreakpoints = e.exports.useBreakpoint = void 0;
    var n = r("4Nv4f");
    e.exports.useBreakpoint = function(e) {
        return (0, n.useWindowSize)().width < e
    }, e.exports.useBreakpoints = function(e) {
        var t = (0, n.useWindowSize)().width;
        return e.map((function(e) {
            return t < e
        }))
    }
})), r.register("4Nv4f", (function(e, t) {
    var n = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        a = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        i = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return a(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var o = i(r("fywoC"));

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = o.useState(s()),
            t = e[0],
            r = e[1];
        return o.useLayoutEffect((function() {
            function e() {
                r(s())
            }
            return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
        }), []), t
    }
})), r.register("exKSe", (function(e, t) {
    var n = e.exports && e.exports.__assign || function() {
            return n = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }, n.apply(this, arguments)
        },
        a = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        i = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        o = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && a(t, e, r);
            return i(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var s = o(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            a = s.useRef(),
            i = s.useCallback((function() {
                if (a.current) {
                    var e = a.current.offsetHeight,
                        n = a.current.offsetWidth;
                    e === t.height && n === t.width || r({
                        height: e,
                        width: n
                    })
                }
            }), [t.height, t.width]);
        return s.useLayoutEffect((function() {
            if (a && a.current) {
                var e = new ResizeObserver(i);
                return e.observe(a.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [a, i]), n({
            ref: a
        }, t)
    }
})), r.register("hDWWf", (function(t, r) {
    let n;
    var a;
    e(t.exports, "SiteHeaderTheme", (function() {
        return n
    })), (a = n || (n = {})).light = "light", a.dark = "dark"
})), r.register("hSz8d", (function(t, r) {
    let n;
    var a;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return n
    })), (a = n || (n = {})).none = "none", a.standard = "standard", a.darker = "darker"
})), r.register("9Vz35", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        name: r("2Y5iQ").default.areaName,
        iconImage: "/client/img/header/rewards.svg"
    }
})), r.register("2Y5iQ", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        areaName: "Rewards",
        level: "Level",
        xp: "XP",
        currency: "GimBucks",
        character: "Gim",
        sticker: "Sticker",
        trail: "Trail"
    }
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("bVHCc"),
        s = r("dwKuN"),
        d = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    d.displayName = "UsergroupAddOutlined";
    var c = i.forwardRef(d)
})), r.register("bVHCc", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"
                }
            }]
        },
        name: "usergroup-add",
        theme: "outlined"
    }
})), r.register("kVS28", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("4GmeK"),
        s = r("dwKuN"),
        d = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    d.displayName = "LogoutOutlined";
    var c = i.forwardRef(d)
})), r.register("4GmeK", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"
                }
            }]
        },
        name: "logout",
        theme: "outlined"
    }
})), r.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("hxEiv"),
        i = r("beXRF");
    r("fywoC");
    var o = e => e.external || !e.to ? (0, a.jsx)("a", {
        href: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        onKeyPress: t => {
            e.onClick && "Enter" === t.key && (t.preventDefault(), e.onClick())
        },
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    }) : (0, a.jsx)(i.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), r.register("9kZfj", (function(t, n) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return i
    }));
    var a = r("hrYih");
    const i = () => "annual-only" === a.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("5UEB4"),
        s = r("dwKuN"),
        d = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    d.displayName = "StarOutlined";
    var c = i.forwardRef(d)
})), r.register("5UEB4", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"
                }
            }]
        },
        name: "star",
        theme: "outlined"
    }
})), r.register("56tQE", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("fywoC"),
        i = r("3KQc0"),
        o = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = a.useState((() => {
            var r, n;
            const a = e && "current" in e ? e.current : e;
            return a ? [a.offsetWidth, a.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, o.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, i.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("6rvT3"),
        i = r("9iNNJ"),
        o = r("3Yjty"),
        s = r("f1PHW");
    let d;
    const c = () => d || (d = function() {
        const e = new Map,
            t = new(0, a.default)((0, s.default)(((t, r) => {
                var n;
                if (1 === t.length) null === (n = e.get(t[0].target)) || void 0 === n || n(t[0], r);
                else
                    for (let n = 0; n < t.length; n++) {
                        var a;
                        null === (a = e.get(t[n].target)) || void 0 === a || a(t[n], r)
                    }
            })));
        return {
            observer: t,
            subscribe(r, n) {
                t.observe(r), e.set(r, n)
            },
            unsubscribe(r) {
                t.unobserve(r), e.delete(r)
            }
        }
    }());
    var u = function(e, t) {
        const r = c(),
            n = (0, o.default)(t);
        return (0, i.default)((() => {
            let t = !1;
            const a = e && "current" in e ? e.current : e;
            if (a) return r.subscribe(a, ((e, r) => {
                t || n.current(e, r)
            })), () => {
                t = !0, r.unsubscribe(a)
            }
        }), [e, r, n]), r.observer
    }
})), r.register("9iNNJ", (function(n, a) {
    e(n.exports, "default", (function() {
        return i
    }));
    var i = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC");
    var i = e => {
        const t = a.useRef(e);
        return a.useEffect((() => {
            t.current = e
        })), t
    }
})), r.register("f1PHW", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = function(e) {
        var t = [],
            r = null,
            n = function() {
                for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                t = a, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return n.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, n
    }
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return i
    }));
    var a = r("bd8je");
    const i = e => {
        a.history.push(e)
    }
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = e => (0, a.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function a(e) {
        var t, r, a = (0, n.lazy)(e),
            i = (0, n.forwardRef)((function(e, r) {
                var i = (0, n.useRef)(null != t ? t : a);
                return (0, n.createElement)(i.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return i.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, i
    }
    e.exports.lazyWithPreload = a, e.exports.default = a
})), r.register("4aaLU", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        White: "white",
        Black: "black",
        BackgroundGray: "#eeeeee",
        PrimaryBlue: "#05f",
        SecondaryPurple: "#1E076B",
        DisabledGray: "#838383",
        LightSuccessGreen: "#6abf69",
        DarkSuccessGreen: "#2e7d32"
    }
})), r.register("exbzb", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("8N8s4"),
        s = r("dwKuN"),
        d = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    d.displayName = "QuestionCircleOutlined";
    var c = i.forwardRef(d)
})), r.register("8N8s4", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
                }
            }]
        },
        name: "question-circle",
        theme: "outlined"
    }
}));