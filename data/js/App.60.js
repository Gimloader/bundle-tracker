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
r.register("a9VTo", (function(t, n) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return O
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        s = r("iMOcM"),
        l = r("sgWtV"),
        c = r("2FDaO"),
        u = r("lKmIF"),
        d = r("69SUA"),
        f = r("bfV0l"),
        p = r("gHmyG"),
        m = r("7xle4"),
        g = r("lq0to"),
        h = r("347bU"),
        v = r("3uz2P"),
        y = r("b1oE9"),
        x = r("iROck"),
        b = r("cHCps");
    let w, E, j = e => e;
    const C = "cc",
        S = "po";
    var O = () => {
        const [e, t] = i.useState(null), [r, n] = i.useState(null), [a, c] = i.useState(!1), [u, d] = i.useState(null), {
            id: w,
            source: E
        } = (0, v.useParams)();
        i.useEffect((() => {
            E !== C && E !== S && (0, x.NavigateTo)(y.HOMEPAGE)
        }), [E]), i.useEffect((() => {
            (0, s.request)({
                url: "/api/quote/fetch/" + w,
                success: e => {
                    const {
                        quote: r,
                        plan: a
                    } = e;
                    c(!!e.quote.renewalForExistingBulk), t(r), n(a)
                },
                error: e => {
                    d(e), (0, l.throwError)({
                        title: "Error fetching quote"
                    })
                }
            })
        }), [w]);
        return (0, o.jsxs)(N, {
            className: "flex-column vc",
            children: [(0, o.jsx)(b.default, {
                includeSpacer: !0
            }), (0, o.jsx)(_, {
                children: (() => {
                    if (u) return (0, o.jsx)(f.default, {
                        type: "error",
                        message: "Error fetching quote"
                    });
                    if (!e || !r) return (0, o.jsx)(p.default, {});
                    let t = "";
                    E === S && (t = "Purchase Order"), E === C && (t = "Credit Card ");
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(g.default, {
                            title: a ? `Renew with a ${t}` : `Paying with ${t}`,
                            plan: r.name,
                            cost: e.price
                        }), E === S && (0, o.jsx)(m.default, {
                            quote: e,
                            planId: r.id,
                            planLengthInDays: r.days
                        }), E === C && (0, o.jsx)(h.default, {
                            quote: e,
                            planId: r.id,
                            planLengthInDays: r.days
                        })]
                    })
                })()
            })]
        })
    };
    const N = c.default.div(w || (w = j`
  min-height: 100%;
  background: ${0};
  width: 100%;
  color: ${0};
  font-family: ${0};
  padding: 20px;
`), u.default.Snow, u.default.Black, d.Fonts.SFPro),
        _ = c.default.div(E || (E = j`
  width: 100%;
  max-width: 700px;
`))
})), r.register("7xle4", (function(n, a) {
    e(n.exports, "MANAGER_DOES_NOT_EXIST_ERROR", (function() {
        return O
    })), e(n.exports, "PeopleFormContainer", (function() {
        return I
    })), e(n.exports, "PeopleFormHeader", (function() {
        return P
    })), e(n.exports, "default", (function() {
        return N
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        s = r("kuXvx"),
        l = r("93yIm"),
        c = r("fC6cp"),
        u = r("b9Zw0"),
        d = r("cy4A6"),
        f = r("gHmyG"),
        p = r("03g0M"),
        m = r("2FDaO"),
        g = r("iMOcM"),
        h = r("sgWtV"),
        v = r("69SUA"),
        y = r("j9HoW"),
        x = r("iROck"),
        b = r("2nCEo");
    let w, E, j, C, S = e => e;
    const O = "Managers are required to have a Gimkit account, and it looks like one doesn't exist under this email.";
    var N = e => {
        const [r, n] = i.useState(!1), [a, m] = i.useState(e.quote.name), [v, w] = i.useState(""), [E, j] = i.useState(""), [C, S] = i.useState(!1), [N, M] = i.useState(""), [A, L] = i.useState([]), [z, D] = i.useState([]), F = !!(a && E && N && v);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(c.default, {}), (0, o.jsx)(k, {
                children: "Group Name"
            }), (0, o.jsx)(u.default, {
                placeholder: "Name here...",
                onChange: e => m(e.target.value),
                value: a,
                maxLength: 50,
                autoComplete: "chrome-off"
            }), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, o.jsx)(k, {
                children: "School or District Name"
            }), (0, o.jsx)(u.default, {
                placeholder: "Name here...",
                onChange: e => w(e.target.value),
                value: v,
                maxLength: 100,
                autoComplete: "chrome-off"
            }), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, o.jsx)(k, {
                children: "Purchase Order Number"
            }), (0, o.jsx)(u.default, {
                placeholder: "Purchase order number here...",
                value: E,
                onChange: e => j(e.target.value)
            }), (0, o.jsx)(c.default, {}), (0, o.jsxs)("div", {
                className: "flex",
                children: [(0, o.jsxs)(I, {
                    children: [(0, o.jsx)(P, {
                        children: "Send a copy of the invoice to..."
                    }), (0, o.jsx)(y.default, {
                        type: "invoiceCopy",
                        initialEmail: (0, g.getUser)().email,
                        addType: "Recipient",
                        onChange: L
                    })]
                }), (0, o.jsx)("div", {
                    style: {
                        width: 12
                    }
                }), (0, o.jsxs)(I, {
                    children: [(0, o.jsx)(P, {
                        children: "Group license managers..."
                    }), (0, o.jsx)(y.default, {
                        type: "manager",
                        initialEmail: (0, g.getUser)().email,
                        addType: "Manager",
                        ensureActiveUser: !0,
                        ensureActiveUserErrorMessage: O,
                        onChange: D
                    })]
                })]
            }), (0, o.jsx)(c.default, {}), (0, o.jsx)(k, {
                children: "Purchase Order PDF"
            }), (0, o.jsx)(_, {
                children: (0, o.jsx)(p.default.Dragger, {
                    disabled: !(!C && !N),
                    multiple: !1,
                    height: 200,
                    showUploadList: !1,
                    accept: "application/pdf",
                    beforeUpload: e => {
                        const t = e.size / 1024 / 1024 < 5;
                        return t || d.default.error("PDF must be less than 5MB"), t
                    },
                    customRequest: ({
                        file: e
                    }) => {
                        const t = new FormData;
                        t.append("file", e), S(!0), (0, g.request)({
                            url: "/bulk/purchase-order/upload",
                            method: "post",
                            data: t,
                            success: e => M(e.url),
                            error: () => (0, h.throwError)({
                                title: "Error uploading document",
                                content: "Please try again"
                            }),
                            both: () => S(!1)
                        })
                    },
                    children: (0, o.jsx)(o.Fragment, {
                        children: N ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("p", {
                                className: "ant-upload-drag-icon",
                                children: (0, o.jsx)(s.default, {})
                            }), (0, o.jsx)("p", {
                                className: "ant-upload-text",
                                children: "Purchase Order Uploaded!"
                            })]
                        }) : C ? (0, o.jsx)(f.default, {}) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("p", {
                                className: "ant-upload-drag-icon",
                                children: (0, o.jsx)(s.default, {})
                            }), (0, o.jsx)("p", {
                                className: "ant-upload-text",
                                children: "Click or drag to upload a PDF"
                            }), (0, o.jsx)("p", {
                                className: "ant-upload-hint",
                                children: "Document must be less than 5MB."
                            })]
                        })
                    })
                })
            }), (0, o.jsxs)(l.default, {
                style: {
                    marginTop: 10
                },
                onClick: () => {
                    !r && F && (n(!0), (0, g.request)({
                        url: "/api/bulk/createFromPlan",
                        method: "post",
                        data: {
                            name: a,
                            billingName: v,
                            quoteId: e.quote.quoteId,
                            purchaseOrderDocument: N,
                            purchaseOrderNumber: E,
                            invoiceEmails: A,
                            adminEmails: z
                        },
                        success: e => (0, x.NavigateTo)(`/group-subscription/complete?subscriptionId=${e.subscriptionId}`),
                        error: e => (0, g.throwMessageError)({
                            e: e,
                            default: {
                                title: "Error creating subscription"
                            }
                        }),
                        both: () => n(!1)
                    }))
                },
                loading: r,
                type: "primary",
                block: !0,
                size: "large",
                disabled: !F,
                children: [e.quote.renewalForExistingBulk ? "Renew" : "Start", " License"]
            }), (0, o.jsx)(c.default, {}), (0, o.jsx)("div", {
                style: {
                    marginBottom: 20
                },
                children: e.quote.renewalForExistingBulk ? (0, o.jsxs)(o.Fragment, {
                    children: ["This group license will become active immediately. All group members will be imported automatically from your expiring group to this group. Educators covered under this license will have full Pro access until whichever is later:", " ", (0, o.jsxs)("b", {
                        children: [t(b)().add(e.planLengthInDays, "day").format("L"), " or a year after the current group license expiration."]
                    }), " ", "If payment is not received within 45 days, the license will automatically deactivate."]
                }) : (0, o.jsxs)(o.Fragment, {
                    children: ["This group license will become active immediately. Educators covered under this license will have full Pro access until", " ", (0, o.jsxs)("b", {
                        children: [t(b)().add(e.planLengthInDays, "day").format("L"), "."]
                    }), " If payment is not received within 45 days, the license will automatically deactivate."]
                })
            })]
        })
    };
    const _ = m.default.div(w || (w = S`
  .ant-upload.ant-upload-drag {
    height: 200px;
  }
`)),
        k = m.default.div(E || (E = S`
  font-weight: ${0};
  font-size: 19px;
  margin-bottom: 2px;
`), v.FontWeights.Bold),
        I = m.default.div(j || (j = S`
  width: calc(50% - 6px);
`)),
        P = m.default.div(C || (C = S`
  font-weight: ${0};
  font-size: 19px;
  margin-bottom: 6px;
`), v.FontWeights.Bold)
})), r.register("kuXvx", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("eDOL9"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "UploadOutlined";
    var c = o.forwardRef(l)
})), r.register("eDOL9", (function(t, r) {
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
                    d: "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "upload",
        theme: "outlined"
    }
})), r.register("j9HoW", (function(t, n) {
    e(t.exports, "default", (function() {
        return w
    }));
    var a = r("hxEiv"),
        o = r("hjoUW"),
        i = r("93yIm"),
        s = r("b9Zw0"),
        l = r("fBuQJ"),
        c = r("lKmIF"),
        u = r("69SUA"),
        d = r("sgWtV"),
        f = r("dknAM"),
        p = r("iMOcM"),
        m = r("fywoC"),
        g = r("2FDaO");
    let h, v, y, x, b = e => e;
    var w = e => {
        const [t, r] = m.useState([e.initialEmail]), [n, g] = m.useState(""), [h, v] = m.useState(!1), [y, x] = m.useState(!1), b = () => v(!1);
        m.useEffect((() => {
            e.onChange(t)
        }), [t.length]);
        const w = !(!n || !(0, f.validateEmail)(n)),
            O = e => {
                r((t => [...t, e])), b(), g("")
            },
            N = () => {
                w && (y || (t.includes(n) ? (0, d.throwError)({
                    title: "Email is already on the list!"
                }) : e.ensureActiveUser ? (x(!0), (0, p.request)({
                    url: "/api/bulk/user/exists",
                    data: {
                        email: n
                    },
                    success: t => {
                        t.exists ? O(n) : (0, d.throwError)({
                            title: "Couldn't add them!",
                            content: e.ensureActiveUserErrorMessage || "User not found"
                        })
                    },
                    error: () => {
                        (0, d.throwError)({
                            title: "We ran into an error. Please try again later."
                        })
                    },
                    both: () => x(!1)
                })) : O(n)))
            };
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)(E, {
                children: [t.map((t => (0, a.jsx)(j, {
                    children: t
                }, `${e.type}-${t}`))), (0, a.jsx)(C, {
                    children: (0, a.jsxs)(i.default, {
                        type: "primary",
                        icon: (0, a.jsx)(o.default, {}),
                        onClick: () => {
                            v(!0)
                        },
                        children: ["Add ", e.addType]
                    })
                })]
            }), (0, a.jsxs)(l.default, {
                open: h,
                onCancel: b,
                closable: !0,
                style: {
                    color: c.default.Black,
                    fontFamily: u.Fonts.SFPro
                },
                footer: null,
                children: [(0, a.jsxs)(S, {
                    children: ["Add ", e.addType]
                }), (0, a.jsxs)("div", {
                    className: "flex",
                    style: {
                        marginTop: 3
                    },
                    children: [(0, a.jsx)(s.default, {
                        type: "email",
                        placeholder: "Email address here...",
                        autoFocus: !0,
                        value: n,
                        onChange: e => g(e.target.value.trim().toLowerCase()),
                        onPressEnter: e => {
                            e.preventDefault(), N()
                        },
                        autoComplete: "chrome-off"
                    }), (0, a.jsx)(i.default, {
                        type: "primary",
                        icon: (0, a.jsx)(o.default, {}),
                        style: {
                            marginLeft: 10
                        },
                        disabled: !w,
                        onClick: N,
                        loading: y,
                        children: "Add"
                    })]
                })]
            })]
        })
    };
    const E = g.default.div.attrs({
            className: "maxWidth"
        })(h || (h = b`
  background: ${0};
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
`), c.default.White),
        j = g.default.div(v || (v = b`
  border: 1px solid #d9d9d9;
  padding: 6px 12px;
  border-radius: 3px;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`)),
        C = g.default.div.attrs({
            className: "maxWidth flex hc"
        })(y || (y = b`
  margin-top: 30px;
`)),
        S = g.default.div(x || (x = b`
  font-size: 24px;
  font-weight: ${0};
`), u.FontWeights.Bold)
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return o
    }));
    var a = r("bd8je");
    const o = e => {
        a.history.push(e)
    }
})), r.register("lq0to", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("iMOcM"),
        i = r("2FDaO"),
        s = r("69SUA"),
        l = r("lKmIF");
    let c, u, d = e => e;
    var f = e => (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(p, {
            children: e.title
        }), (0, a.jsxs)(m, {
            children: [e.plan, " - ", (0, o.getMoney)(e.cost / 100, {
                forceUSD: !0
            })]
        })]
    });
    const p = i.default.h2(c || (c = d`
  font-weight: ${0};
  font-size: 37px;
  color: ${0};
`), s.FontWeights.UltraBold, l.default.Black),
        m = i.default.p(u || (u = d`
  margin-top: -26px;
  font-size: 17px;
`))
})), r.register("347bU", (function(n, a) {
    e(n.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        s = r("93yIm"),
        l = r("fC6cp"),
        c = r("b9Zw0"),
        u = r("gHmyG"),
        d = r("2FDaO"),
        f = r("iMOcM"),
        p = r("69SUA"),
        m = r("kgPjU"),
        g = r("7xle4"),
        h = r("j9HoW"),
        v = r("2nCEo");
    let y;
    var x = e => {
        const [r, n] = i.useState(!1), [a, d] = i.useState(e.quote.name), [p, y] = i.useState(""), [x, w] = i.useState(""), [E, j] = i.useState([]), [C, S] = i.useState([]), O = !(!a || !p);
        if (i.useEffect((() => {
                n(!0), (0, f.request)({
                    url: "/api/billing/stripe-key",
                    success: e => {
                        e && e.key && w(e.key)
                    },
                    error: e => (0, f.throwMessageError)({
                        e: e,
                        default: {
                            title: "Our payment processor is currently down",
                            content: "Please try again later"
                        }
                    }),
                    both: () => n(!1)
                })
            }), []), !x) return (0, o.jsx)(u.default, {});
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(l.default, {}), (0, o.jsx)(b, {
                children: "Group Name"
            }), (0, o.jsx)(c.default, {
                placeholder: "Name here...",
                onChange: e => d(e.target.value),
                value: a,
                maxLength: 50,
                autoComplete: "chrome-off"
            }), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, o.jsx)(b, {
                children: "School or District Name"
            }), (0, o.jsx)(c.default, {
                placeholder: "Name here...",
                onChange: e => y(e.target.value),
                value: p,
                maxLength: 100,
                autoComplete: "chrome-off"
            }), (0, o.jsx)(l.default, {}), (0, o.jsxs)("div", {
                className: "flex",
                children: [(0, o.jsxs)(g.PeopleFormContainer, {
                    children: [(0, o.jsx)(g.PeopleFormHeader, {
                        children: "Send a copy of the receipt to..."
                    }), (0, o.jsx)(h.default, {
                        type: "receiptCopy",
                        initialEmail: (0, f.getUser)().email,
                        addType: "Recipient",
                        onChange: j
                    })]
                }), (0, o.jsx)("div", {
                    style: {
                        width: 12
                    }
                }), (0, o.jsxs)(g.PeopleFormContainer, {
                    children: [(0, o.jsx)(g.PeopleFormHeader, {
                        children: "Group license managers..."
                    }), (0, o.jsx)(h.default, {
                        type: "manager",
                        initialEmail: (0, f.getUser)().email,
                        addType: "Manager",
                        ensureActiveUser: !0,
                        ensureActiveUserErrorMessage: g.MANAGER_DOES_NOT_EXIST_ERROR,
                        onChange: S
                    })]
                })]
            }), (0, o.jsx)(l.default, {}), (0, o.jsx)(s.default, {
                id: "checkout-button",
                style: {
                    marginBottom: 20
                },
                loading: r,
                type: "primary",
                block: !0,
                size: "large",
                onClick: async t => {
                    if (r || !O) return;
                    let o;
                    n(!0);
                    try {
                        o = await (0, m.loadStripe)(x)
                    } catch (e) {
                        n(!1), (0, f.throwMessageError)({
                            e: e,
                            default: {
                                title: "Issue connecting to our payment provider",
                                content: "An error ocurred while connecting to our payments provider. Please try again later"
                            }
                        })
                    }(0, f.request)({
                        url: "/api/billing/create-bulk-session",
                        method: "POST",
                        data: {
                            name: a,
                            billingName: p,
                            quoteId: e.quote.quoteId,
                            receiptEmails: E,
                            adminEmails: C
                        },
                        success: async e => {
                            const t = e;
                            let r;
                            try {
                                if (r = await o.redirectToCheckout({
                                        sessionId: t.id
                                    }), r && r.error) throw r.error
                            } catch (e) {
                                (0, f.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "Error",
                                        content: "An error ocurred. Please try again later"
                                    }
                                })
                            }
                        },
                        error: e => {
                            (0, f.throwMessageError)({
                                e: e,
                                default: {
                                    title: "Error",
                                    content: "An error ocurred. Please try again later"
                                }
                            })
                        },
                        both: () => n(!1)
                    })
                },
                disabled: !O,
                children: "Checkout"
            }), (0, o.jsx)("div", {
                style: {
                    marginBottom: 20
                },
                children: e.quote.renewalForExistingBulk ? (0, o.jsxs)(o.Fragment, {
                    children: ["This group license will become active immediately. All group members will be imported automatically from your expiring group to this group. Educators covered under this license will have full Pro access until whichever is later:", " ", (0, o.jsxs)("b", {
                        children: [t(v)().add(1, "year").format("L"), ", or a year after the current group license expiration."]
                    }), " "]
                }) : (0, o.jsxs)(o.Fragment, {
                    children: ["This group license will become active immediately. Educators covered under the license will have full Pro access until", " ", (0, o.jsxs)("b", {
                        children: [" ", t(v)().add(1, "year").format("L"), "."]
                    })]
                })
            })]
        })
    };
    const b = d.default.div(y || (y = (e => e)`
  font-weight: ${0};
  font-size: 19px;
  margin-bottom: 2px;
`), p.FontWeights.Bold)
})), r.register("kgPjU", (function(t, r) {
    e(t.exports, "loadStripe", (function() {
        return d
    }));
    var n = "https://js.stripe.com/v3",
        a = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        o = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
        i = null,
        s = function(e) {
            return null !== i || (i = new Promise((function(t, r) {
                if ("undefined" != typeof window)
                    if (window.Stripe && e && console.warn(o), window.Stripe) t(window.Stripe);
                    else try {
                        var i = function() {
                            for (var e = document.querySelectorAll('script[src^="'.concat(n, '"]')), t = 0; t < e.length; t++) {
                                var r = e[t];
                                if (a.test(r.src)) return r
                            }
                            return null
                        }();
                        i && e ? console.warn(o) : i || (i = function(e) {
                            var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                                r = document.createElement("script");
                            r.src = "".concat(n).concat(t);
                            var a = document.head || document.body;
                            if (!a) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                            return a.appendChild(r), r
                        }(e)), i.addEventListener("load", (function() {
                            window.Stripe ? t(window.Stripe) : r(new Error("Stripe.js not available"))
                        })), i.addEventListener("error", (function() {
                            r(new Error("Failed to load Stripe.js"))
                        }))
                    } catch (e) {
                        return void r(e)
                    } else t(null)
            }))), i
        },
        l = function(e, t, r) {
            if (null === e) return null;
            var n = e.apply(void 0, t);
            return function(e, t) {
                e && e._registerWrapper && e._registerWrapper({
                    name: "stripe-js",
                    version: "1.9.0",
                    startTime: t
                })
            }(n, r), n
        },
        c = Promise.resolve().then((function() {
            return s(null)
        })),
        u = !1;
    c.catch((function(e) {
        u || console.warn(e)
    }));
    var d = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        u = !0;
        var n = Date.now();
        return c.then((function(e) {
            return l(e, t, n)
        }))
    }
})), r.register("9g8O0", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("ewhoP"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DeleteOutlined";
    var c = o.forwardRef(l)
})), r.register("ewhoP", (function(t, r) {
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
                    d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                }
            }]
        },
        name: "delete",
        theme: "outlined"
    }
})), r.register("hy09K", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("eLGc8"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "PaperClipOutlined";
    var c = o.forwardRef(l)
})), r.register("eLGc8", (function(t, r) {
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
                    d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"
                }
            }]
        },
        name: "paper-clip",
        theme: "outlined"
    }
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("iI4DW"),
        o = r("fywoC"),
        i = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: l
            } = n, c = o.useRef(null), [u, d] = o.useState(0), [f, p] = o.useState(0), [m, g] = (0, a.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: h
            } = o.useContext(i.ConfigContext), v = h(t || "select", s);
            return o.useEffect((() => {
                if (g(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            d(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const a = r ? `.${r(v)}` : `.${v}-dropdown`,
                                o = null === (n = c.current) || void 0 === n ? void 0 : n.querySelector(a);
                            o && (clearInterval(t), e.observe(o))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), o.createElement(i.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, o.createElement("div", {
                ref: c,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: f
                }
            }, o.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, l), {
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
        o = r("aWAHQ");
    const i = new(0, a.Keyframes)("antMoveDownIn", {
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
        l = new(0, a.Keyframes)("antMoveLeftIn", {
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
        d = new(0, a.Keyframes)("antMoveRightOut", {
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
                inKeyframes: i,
                outKeyframes: s
            },
            "move-left": {
                inKeyframes: l,
                outKeyframes: c
            },
            "move-right": {
                inKeyframes: u,
                outKeyframes: d
            }
        },
        p = (e, t) => {
            const {
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: a,
                outKeyframes: i
            } = f[t];
            return [(0, o.initMotion)(n, a, i, e.motionDurationMid), {
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
    var o = r("fe1on"),
        i = r("jyxW7"),
        s = r("fywoC"),
        l = r("4gMdJ"),
        c = r("1eqVQ"),
        u = r("7yXSw"),
        d = r("c9Vcn"),
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
        } = s.useContext(l.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: h,
            className: v,
            rootClassName: y,
            children: x,
            direction: b = "horizontal",
            prefixCls: w,
            split: E,
            style: j,
            wrap: C = !1
        } = e, S = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), O = (0, c.default)(), [N, _] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? g[e] : e || 0
        }(e)))), [u]), k = (0, i.default)(x, {
            keepEmpty: !0
        }), I = void 0 === h && "horizontal" === b ? "center" : h, P = r("space", w), [M, A] = (0, f.default)(P), L = t(o)(P, A, `${P}-${b}`, {
            [`${P}-rtl`]: "rtl" === a,
            [`${P}-align-${I}`]: I
        }, v, y), z = `${P}-item`, D = "rtl" === a ? "marginLeft" : "marginRight";
        let F = 0;
        const T = k.map(((e, t) => {
                null != e && (F = t);
                const r = e && e.key || `${z}-${t}`;
                return s.createElement(d.default, {
                    className: z,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: D,
                    split: E,
                    wrap: C
                }, e)
            })),
            R = s.useMemo((() => ({
                horizontalSize: N,
                verticalSize: _,
                latestIndex: F,
                supportFlexGap: O
            })), [N, _, F, O]);
        if (0 === k.length) return null;
        const B = {};
        return C && (B.flexWrap = "wrap", O || (B.marginBottom = -_)), O && (B.columnGap = N, B.rowGap = _), M(s.createElement("div", Object.assign({
            className: L,
            style: Object.assign(Object.assign({}, B), j)
        }, S), s.createElement(m.Provider, {
            value: R
        }, T)))
    };
    h.Compact = u.default;
    var v = h
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC"),
        o = r("azMeL"),
        i = () => {
            const [e, t] = a.useState(!1);
            return a.useEffect((() => {
                t((0, o.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC"),
        o = r("i5Qjx");

    function i(e) {
        let {
            className: t,
            direction: r,
            index: n,
            marginDirection: i,
            children: s,
            split: l,
            wrap: c
        } = e;
        const {
            horizontalSize: u,
            verticalSize: d,
            latestIndex: f,
            supportFlexGap: p
        } = a.useContext(o.SpaceContext);
        let m = {};
        return p || ("vertical" === r ? n < f && (m = {
            marginBottom: u / (l ? 2 : 1)
        }) : m = Object.assign(Object.assign({}, n < f && {
            [i]: u / (l ? 2 : 1)
        }), c && {
            paddingBottom: d
        })), null == s ? null : a.createElement(a.Fragment, null, a.createElement("div", {
            className: t,
            style: m
        }, s), n < f && l && a.createElement("span", {
            className: `${t}-split`,
            style: m
        }, l))
    }
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        a = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, o, i, s, l, c, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), s = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var o = a[t.format] || a.default;
                            window.clipboardData.setData(o, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), l.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), o = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(o, e)
            }
        } finally {
            l && ("function" == typeof l.removeRange ? l.removeRange(s) : l.removeAllRanges()), c && document.body.removeChild(c), i()
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
        return o
    }));
    var a = r("fywoC");

    function o(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, a.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, a.useState)((function() {
                return t.matches
            })),
            n = r[0],
            o = r[1];
        return (0, a.useEffect)((function() {
            o(t.matches);
            var e = function(e) {
                return o(e.matches)
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
        o = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return a(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var i = o(r("fywoC"));

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = i.useState(s()),
            t = e[0],
            r = e[1];
        return i.useLayoutEffect((function() {
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
        o = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
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
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && a(t, e, r);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var s = i(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            a = s.useRef(),
            o = s.useCallback((function() {
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
                var e = new ResizeObserver(o);
                return e.observe(a.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [a, o]), n({
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
        o = r("fywoC"),
        i = r("bVHCc"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "UsergroupAddOutlined";
    var c = o.forwardRef(l)
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
        o = r("fywoC"),
        i = r("4GmeK"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "LogoutOutlined";
    var c = o.forwardRef(l)
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
})), r.register("kLpOI", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("ayjhg"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "CheckOutlined";
    var c = o.forwardRef(l)
})), r.register("ayjhg", (function(t, r) {
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
                    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
            }]
        },
        name: "check",
        theme: "outlined"
    }
})), r.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("hxEiv"),
        o = r("beXRF");
    r("fywoC");
    var i = e => e.external || !e.to ? (0, a.jsx)("a", {
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
    }) : (0, a.jsx)(o.Link, {
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
        return o
    }));
    var a = r("hrYih");
    const o = () => "annual-only" === a.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("5UEB4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "StarOutlined";
    var c = o.forwardRef(l)
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
        o = r("3KQc0"),
        i = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = a.useState((() => {
            var r, n;
            const a = e && "current" in e ? e.current : e;
            return a ? [a.offsetWidth, a.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, o.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("6rvT3"),
        o = r("9iNNJ"),
        i = r("3Yjty"),
        s = r("f1PHW");
    let l;
    const c = () => l || (l = function() {
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
            n = (0, i.default)(t);
        return (0, o.default)((() => {
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
        return o
    }));
    var o = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC");
    var o = e => {
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
                for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                t = a, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return n.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, n
    }
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = e => (0, a.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("eFy2j", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC");

    function o() {
        const [, e] = a.useReducer((e => e + 1), 0);
        return e
    }
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function a(e) {
        var t, r, a = (0, n.lazy)(e),
            o = (0, n.forwardRef)((function(e, r) {
                var o = (0, n.useRef)(null != t ? t : a);
                return (0, n.createElement)(o.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return o.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, o
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
        o = r("fywoC"),
        i = r("8N8s4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "QuestionCircleOutlined";
    var c = o.forwardRef(l)
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
})), r.register("bcnSK", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC"),
        o = r("bSGy0");
    var i = a.createContext(o.default)
})), r.register("bSGy0", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("g4NpA"),
        o = r("lvpm8");
    var i = {
        login: new(0, a.default),
        navigation: new(0, o.default)
    }
})), r.register("g4NpA", (function(t, n) {
    e(t.exports, "informationTypes", (function() {
        return i
    })), e(t.exports, "default", (function() {
        return C
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    const i = {
            email: "EMAIL",
            password: "PASSWORD",
            accountPassword: "ACCOUNT_PASSWORD",
            firstName: "FIRST_NAME",
            lastName: "LAST_NAME",
            accountType: "ACCOUNT_TYPE",
            country: "COUNTRY",
            areaOfExpertise: "AREA_OF_EXPERTISE",
            gradeLevel: "GRADE_LEVEL",
            organization: "ORGANIZATION",
            acceptedLatestPolicies: "ACCEPTED_LATEST_POLICIES",
            schoolId: "SCHOOL_ID",
            districtId: "DISTRICT_ID"
        },
        s = {
            userExists: !1,
            email: "",
            accountType: null,
            googleToken: "",
            firstName: "",
            lastName: "",
            password: "",
            schoolId: "",
            districtId: "",
            country: "",
            areaOfExpertise: "",
            gradeLevel: "",
            organization: "",
            acceptsLatestPolicies: !1,
            authenticated: !1
        },
        {
            userExists: l,
            email: c,
            accountType: u,
            googleToken: d,
            firstName: f,
            lastName: p,
            password: m,
            schoolId: g,
            districtId: h,
            country: v,
            areaOfExpertise: y,
            gradeLevel: x,
            organization: b,
            acceptsLatestPolicies: w,
            authenticated: E
        } = s;
    class j {
        constructor() {
            this.userExists = l, this.email = c, this.accountType = u, this.googleToken = d, this.firstName = f, this.lastName = p, this.password = m, this.schoolId = g, this.districtId = h, this.country = v, this.areaOfExpertise = y, this.gradeLevel = x, this.organization = b, this.acceptsLatestPolicies = w, this.authenticated = E, this.informationNeeded = o.observable.array([i.email]), this.reset = () => {
                Object.keys(s).forEach((e => this[e] = s[e])), this.informationNeeded.replace([i.email])
            }, (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], j.prototype, "userExists", void 0), (0, a.__decorate)([o.observable], j.prototype, "email", void 0), (0, a.__decorate)([o.observable], j.prototype, "accountType", void 0), (0, a.__decorate)([o.observable], j.prototype, "googleToken", void 0), (0, a.__decorate)([o.observable], j.prototype, "firstName", void 0), (0, a.__decorate)([o.observable], j.prototype, "lastName", void 0), (0, a.__decorate)([o.observable], j.prototype, "password", void 0), (0, a.__decorate)([o.observable], j.prototype, "schoolId", void 0), (0, a.__decorate)([o.observable], j.prototype, "districtId", void 0), (0, a.__decorate)([o.observable], j.prototype, "country", void 0), (0, a.__decorate)([o.observable], j.prototype, "areaOfExpertise", void 0), (0, a.__decorate)([o.observable], j.prototype, "gradeLevel", void 0), (0, a.__decorate)([o.observable], j.prototype, "organization", void 0), (0, a.__decorate)([o.observable], j.prototype, "acceptsLatestPolicies", void 0), (0, a.__decorate)([o.observable], j.prototype, "authenticated", void 0), (0, a.__decorate)([o.observable], j.prototype, "informationNeeded", void 0), (0, a.__decorate)([o.action], j.prototype, "reset", void 0);
    var C = j
})), r.register("lvpm8", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    const i = {
            currentStage: r("9ZLc2").default.email,
            emailSignInBlocked: !1,
            creatingAccount: !1,
            loggingIn: !1,
            updatingAccountInformation: !1,
            loginError: null,
            redirectUri: "",
            classJoiningId: "",
            classJoiningName: "",
            classJoiningTeacherName: ""
        },
        {
            currentStage: s,
            emailSignInBlocked: l,
            creatingAccount: c,
            loggingIn: u,
            updatingAccountInformation: d,
            loginError: f,
            redirectUri: p,
            classJoiningId: m,
            classJoiningName: g,
            classJoiningTeacherName: h
        } = i;
    class v {
        constructor() {
            this.currentStage = s, this.emailSignInBlocked = l, this.creatingAccount = c, this.loggingIn = u, this.updatingAccountInformation = d, this.loginError = f, this.redirectUri = p, this.classJoiningId = m, this.classJoiningName = g, this.classJoiningTeacherName = h, this.reset = () => {
                Object.keys(i).forEach((e => this[e] = i[e]))
            }, (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], v.prototype, "currentStage", void 0), (0, a.__decorate)([o.observable], v.prototype, "emailSignInBlocked", void 0), (0, a.__decorate)([o.observable], v.prototype, "creatingAccount", void 0), (0, a.__decorate)([o.observable], v.prototype, "loggingIn", void 0), (0, a.__decorate)([o.observable], v.prototype, "updatingAccountInformation", void 0), (0, a.__decorate)([o.observable], v.prototype, "loginError", void 0), (0, a.__decorate)([o.observable], v.prototype, "redirectUri", void 0), (0, a.__decorate)([o.observable], v.prototype, "classJoiningId", void 0), (0, a.__decorate)([o.observable], v.prototype, "classJoiningName", void 0), (0, a.__decorate)([o.observable], v.prototype, "classJoiningTeacherName", void 0), (0, a.__decorate)([o.action], v.prototype, "reset", void 0);
    var y = v
})), r.register("9ZLc2", (function(t, r) {
    let n;
    var a;
    e(t.exports, "default", (function() {
        return o
    })), (a = n || (n = {})).email = "email", a.password = "password", a.accountType = "accountType", a.studentSpecificInfo = "studentSpecificInfo", a.nameAndPassword = "nameAndPassword", a.school = "school", a.educatorSpecificInfo = "educatorSpecificInfo", a.nonSchoolSpecificInfo = "nonSchoolSpecificInfo", a.acceptPolicies = "acceptPolicies", a.verifyClass = "verifyClass";
    var o = n
})), r.register("7abSH", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("lpEVe"),
        i = r("93yIm");
    var s = (0, o.observer)((e => (0, a.jsx)(i.default, {
        disabled: e.disabled,
        size: e.size || "middle",
        type: "primary",
        onClick: e.onClick,
        style: Object.assign({
            width: "100%"
        }, e.style),
        loading: e.loading,
        children: e.children
    })))
})), r.register("da8gK", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("bfV0l");
    var i = e => e.error ? (0, a.jsx)(o.default, {
        message: "Error",
        style: e.style,
        type: "error",
        description: e.error && e.error.message && e.error.message.text ? e.error.message.text : "string" == typeof e.error ? e.error : "Unknown Error. Please try again.",
        showIcon: !0
    }) : null
})), r.register("4eEdH", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("ddWN5"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DownloadOutlined";
    var c = o.forwardRef(l)
})), r.register("ddWN5", (function(t, r) {
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
                    d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "download",
        theme: "outlined"
    }
}));