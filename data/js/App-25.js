import {
    r,
    j as e,
    B as T,
    a$ as H,
    M as Z,
    W as Q,
    e as I,
    d as c,
    F as B,
    h as D,
    a as P,
    D as E,
    l as A,
    S as W,
    t as k,
    b as L,
    c9 as ee,
    q as te,
    a6 as re,
    a4 as ae
} from "./_index.js";
import {
    v as se
} from "./EmailStage.js";
import {
    I as S
} from "./index-3.js";
import {
    N as X
} from "./NavigateTo.js";
import {
    U as ie
} from "./index-19.js";
import {
    R as _
} from "./UploadOutlined.js";
import {
    s as oe
} from "./index-4.js";
import {
    l as ne
} from "./stripe.esm.js";
import {
    S as le
} from "./App-4.js";
import "./mobxreact.esm.js";
import "./ContinueButton.js";
import "./ErrorMessage.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
import "./index-2.js";
import "./PaperClipOutlined.js";
import "./useForceUpdate.js";
import "./DeleteOutlined.js";
import "./DownloadOutlined.js";
import "./progress.js";
import "./CheckOutlined.js";
import "./context.js";
import "./Shortcut.js";
import "./Names.js";
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
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
const $ = t => {
        const [d, s] = r.useState([t.initialEmail]), [i, f] = r.useState(""), [m, j] = r.useState(!1), [h, g] = r.useState(!1), n = () => j(!0), x = () => j(!1);
        r.useEffect(() => {
            t.onChange(d)
        }, [d.length]);
        const a = o => f(o.target.value.trim().toLowerCase()),
            p = !!(i && se(i)),
            y = o => {
                s(F => [...F, o]), x(), f("")
            },
            w = () => {
                if (p && !h) {
                    if (d.includes(i)) {
                        D({
                            title: "Email is already on the list!"
                        });
                        return
                    }
                    if (!t.ensureActiveUser) {
                        y(i);
                        return
                    }
                    g(!0), P({
                        url: "/api/bulk/user/exists",
                        data: {
                            email: i
                        },
                        success: o => {
                            o.exists ? y(i) : D({
                                title: "Couldn't add them!",
                                content: t.ensureActiveUserErrorMessage || "User not found"
                            })
                        },
                        error: () => {
                            D({
                                title: "We ran into an error. Please try again later."
                            })
                        },
                        both: () => g(!1)
                    })
                }
            };
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(ce, {
                children: [d.map(o => e.jsx(de, {
                    children: o
                }, `${t.type}-${o}`)), e.jsx(ue, {
                    children: e.jsxs(T, {
                        type: "primary",
                        icon: e.jsx(H, {}),
                        onClick: () => {
                            n()
                        },
                        children: ["Add ", t.addType]
                    })
                })]
            }), e.jsxs(Z, {
                open: m,
                onCancel: x,
                closable: !0,
                style: {
                    color: I.Black,
                    fontFamily: Q.SFPro
                },
                footer: null,
                children: [e.jsxs(me, {
                    children: ["Add ", t.addType]
                }), e.jsxs("div", {
                    className: "flex",
                    style: {
                        marginTop: 3
                    },
                    children: [e.jsx(S, {
                        type: "email",
                        placeholder: "Email address here...",
                        autoFocus: !0,
                        value: i,
                        onChange: a,
                        onPressEnter: o => {
                            o.preventDefault(), w()
                        },
                        autoComplete: "chrome-off"
                    }), e.jsx(T, {
                        type: "primary",
                        icon: e.jsx(H, {}),
                        style: {
                            marginLeft: 10
                        },
                        disabled: !p,
                        onClick: w,
                        loading: h,
                        children: "Add"
                    })]
                })]
            })]
        })
    },
    ce = c.div.attrs({
        className: "maxWidth"
    })`
  background: ${I.White};
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
`,
    de = c.div`
  border: 1px solid #d9d9d9;
  padding: 6px 12px;
  border-radius: 3px;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`,
    ue = c.div.attrs({
        className: "maxWidth flex hc"
    })`
  margin-top: 30px;
`,
    me = c.div`
  font-size: 24px;
  font-weight: ${B.Bold};
`,
    J = "Managers are required to have a Gimkit account, and it looks like one doesn't exist under this email.",
    he = t => {
        const [d, s] = r.useState(!1), [i, f] = r.useState(t.quote.name), [m, j] = r.useState(""), [h, g] = r.useState(""), [n, x] = r.useState(!1), [a, p] = r.useState(""), [y, w] = r.useState([]), [o, F] = r.useState([]), R = ({
            file: l
        }) => {
            const N = new FormData;
            N.append("file", l), x(!0), P({
                url: "/bulk/purchase-order/upload",
                method: "post",
                data: N,
                success: Y => p(Y.url),
                error: () => D({
                    title: "Error uploading document",
                    content: "Please try again"
                }),
                both: () => x(!1)
            })
        }, u = l => {
            const N = l.size / 1024 / 1024 < 5;
            return N || oe.error("PDF must be less than 5MB"), N
        }, q = l => f(l.target.value), v = l => j(l.target.value), z = l => g(l.target.value), b = !!(i && h && a && m), G = () => {
            d || !b || (s(!0), P({
                url: "/api/bulk/createFromPlan",
                method: "post",
                data: {
                    name: i,
                    billingName: m,
                    quoteId: t.quote.quoteId,
                    purchaseOrderDocument: a,
                    purchaseOrderNumber: h,
                    invoiceEmails: y,
                    adminEmails: o
                },
                success: l => X(`/group-subscription/complete?subscriptionId=${l.subscriptionId}`),
                error: l => k({
                    e: l,
                    default: {
                        title: "Error creating subscription"
                    }
                }),
                both: () => s(!1)
            }))
        }, V = () => t.quote.renewalForExistingBulk ? e.jsxs(e.Fragment, {
            children: ["This group license will become active immediately. All group members will be imported automatically from your expiring group to this group. Educators covered under this license will have full Pro access until whichever is later:", " ", e.jsxs("b", {
                children: [L().add(t.planLengthInDays, "day").format("L"), " or a year after the current group license expiration."]
            }), " ", "If payment is not received within 45 days, the license will automatically deactivate."]
        }) : e.jsxs(e.Fragment, {
            children: ["This group license will become active immediately. Educators covered under this license will have full Pro access until", " ", e.jsxs("b", {
                children: [L().add(t.planLengthInDays, "day").format("L"), "."]
            }), " If payment is not received within 45 days, the license will automatically deactivate."]
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(E, {}), e.jsx(O, {
                children: "Group Name"
            }), e.jsx(S, {
                placeholder: "Name here...",
                onChange: q,
                value: i,
                maxLength: 50,
                autoComplete: "chrome-off"
            }), e.jsx("div", {
                style: {
                    height: 10
                }
            }), e.jsx(O, {
                children: "School or District Name"
            }), e.jsx(S, {
                placeholder: "Name here...",
                onChange: v,
                value: m,
                maxLength: 100,
                autoComplete: "chrome-off"
            }), e.jsx("div", {
                style: {
                    height: 10
                }
            }), e.jsx(O, {
                children: "Purchase Order Number"
            }), e.jsx(S, {
                placeholder: "Purchase order number here...",
                value: h,
                onChange: z
            }), e.jsx(E, {}), e.jsxs("div", {
                className: "flex",
                children: [e.jsxs(M, {
                    children: [e.jsx(U, {
                        children: "Send a copy of the invoice to..."
                    }), e.jsx($, {
                        type: "invoiceCopy",
                        initialEmail: A().email,
                        addType: "Recipient",
                        onChange: w
                    })]
                }), e.jsx("div", {
                    style: {
                        width: 12
                    }
                }), e.jsxs(M, {
                    children: [e.jsx(U, {
                        children: "Group license managers..."
                    }), e.jsx($, {
                        type: "manager",
                        initialEmail: A().email,
                        addType: "Manager",
                        ensureActiveUser: !0,
                        ensureActiveUserErrorMessage: J,
                        onChange: F
                    })]
                })]
            }), e.jsx(E, {}), e.jsx(O, {
                children: "Purchase Order PDF"
            }), e.jsx(pe, {
                children: e.jsx(ie.Dragger, {
                    disabled: !!(n || a),
                    multiple: !1,
                    height: 200,
                    showUploadList: !1,
                    accept: "application/pdf",
                    beforeUpload: u,
                    customRequest: R,
                    children: e.jsx(e.Fragment, {
                        children: a ? e.jsxs(e.Fragment, {
                            children: [e.jsx("p", {
                                className: "ant-upload-drag-icon",
                                children: e.jsx(_, {})
                            }), e.jsx("p", {
                                className: "ant-upload-text",
                                children: "Purchase Order Uploaded!"
                            })]
                        }) : n ? e.jsx(W, {}) : e.jsxs(e.Fragment, {
                            children: [e.jsx("p", {
                                className: "ant-upload-drag-icon",
                                children: e.jsx(_, {})
                            }), e.jsx("p", {
                                className: "ant-upload-text",
                                children: "Click or drag to upload a PDF"
                            }), e.jsx("p", {
                                className: "ant-upload-hint",
                                children: "Document must be less than 5MB."
                            })]
                        })
                    })
                })
            }), e.jsxs(T, {
                style: {
                    marginTop: 10
                },
                onClick: G,
                loading: d,
                type: "primary",
                block: !0,
                size: "large",
                disabled: !b,
                children: [t.quote.renewalForExistingBulk ? "Renew" : "Start", " License"]
            }), e.jsx(E, {}), e.jsx("div", {
                style: {
                    marginBottom: 20
                },
                children: V()
            })]
        })
    },
    pe = c.div`
  .ant-upload.ant-upload-drag {
    height: 200px;
  }
`,
    O = c.div`
  font-weight: ${B.Bold};
  font-size: 19px;
  margin-bottom: 2px;
`,
    M = c.div`
  width: calc(50% - 6px);
`,
    U = c.div`
  font-weight: ${B.Bold};
  font-size: 19px;
  margin-bottom: 6px;
`,
    ge = t => e.jsxs(e.Fragment, {
        children: [e.jsx(xe, {
            children: t.title
        }), e.jsxs(fe, {
            children: [t.plan, " - ", ee(t.cost / 100, {
                forceUSD: !0
            })]
        })]
    }),
    xe = c.h2`
  font-weight: ${B.UltraBold};
  font-size: 37px;
  color: ${I.Black};
`,
    fe = c.p`
  margin-top: -26px;
  font-size: 17px;
`,
    je = t => {
        const [d, s] = r.useState(!1), [i, f] = r.useState(t.quote.name), [m, j] = r.useState(""), [h, g] = r.useState(""), [n, x] = r.useState([]), [a, p] = r.useState([]), y = u => f(u.target.value), w = u => j(u.target.value), o = !!(i && m);
        if (r.useEffect(() => {
                s(!0), P({
                    url: "/api/billing/stripe-key",
                    success: u => {
                        u && u.key && g(u.key)
                    },
                    error: u => k({
                        e: u,
                        default: {
                            title: "Our payment processor is currently down",
                            content: "Please try again later"
                        }
                    }),
                    both: () => s(!1)
                })
            }, []), !h) return e.jsx(W, {});
        const F = async u => {
            if (d || !o) return;
            s(!0);
            let q;
            try {
                q = await ne(h)
            } catch (v) {
                s(!1), k({
                    e: v,
                    default: {
                        title: "Issue connecting to our payment provider",
                        content: "An error ocurred while connecting to our payments provider. Please try again later"
                    }
                })
            }
            P({
                url: "/api/billing/create-bulk-session",
                method: "POST",
                data: {
                    name: i,
                    billingName: m,
                    quoteId: t.quote.quoteId,
                    receiptEmails: n,
                    adminEmails: a
                },
                success: async v => {
                    const z = v;
                    let b;
                    try {
                        if (b = await q.redirectToCheckout({
                                sessionId: z.id
                            }), b && b.error) throw b.error
                    } catch (G) {
                        k({
                            e: G,
                            default: {
                                title: "Error",
                                content: "An error ocurred. Please try again later"
                            }
                        })
                    }
                },
                error: v => {
                    k({
                        e: v,
                        default: {
                            title: "Error",
                            content: "An error ocurred. Please try again later"
                        }
                    })
                },
                both: () => s(!1)
            })
        }, R = () => t.quote.renewalForExistingBulk ? e.jsxs(e.Fragment, {
            children: ["This group license will become active immediately. All group members will be imported automatically from your expiring group to this group. Educators covered under this license will have full Pro access until whichever is later:", " ", e.jsxs("b", {
                children: [L().add(1, "year").format("L"), ", or a year after the current group license expiration."]
            }), " "]
        }) : e.jsxs(e.Fragment, {
            children: ["This group license will become active immediately. Educators covered under the license will have full Pro access until", " ", e.jsxs("b", {
                children: [" ", L().add(1, "year").format("L"), "."]
            })]
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(E, {}), e.jsx(K, {
                children: "Group Name"
            }), e.jsx(S, {
                placeholder: "Name here...",
                onChange: y,
                value: i,
                maxLength: 50,
                autoComplete: "chrome-off"
            }), e.jsx("div", {
                style: {
                    height: 10
                }
            }), e.jsx(K, {
                children: "School or District Name"
            }), e.jsx(S, {
                placeholder: "Name here...",
                onChange: w,
                value: m,
                maxLength: 100,
                autoComplete: "chrome-off"
            }), e.jsx(E, {}), e.jsxs("div", {
                className: "flex",
                children: [e.jsxs(M, {
                    children: [e.jsx(U, {
                        children: "Send a copy of the receipt to..."
                    }), e.jsx($, {
                        type: "receiptCopy",
                        initialEmail: A().email,
                        addType: "Recipient",
                        onChange: x
                    })]
                }), e.jsx("div", {
                    style: {
                        width: 12
                    }
                }), e.jsxs(M, {
                    children: [e.jsx(U, {
                        children: "Group license managers..."
                    }), e.jsx($, {
                        type: "manager",
                        initialEmail: A().email,
                        addType: "Manager",
                        ensureActiveUser: !0,
                        ensureActiveUserErrorMessage: J,
                        onChange: p
                    })]
                })]
            }), e.jsx(E, {}), e.jsx(T, {
                id: "checkout-button",
                style: {
                    marginBottom: 20
                },
                loading: d,
                type: "primary",
                block: !0,
                size: "large",
                onClick: F,
                disabled: !o,
                children: "Checkout"
            }), e.jsx("div", {
                style: {
                    marginBottom: 20
                },
                children: R()
            })]
        })
    },
    K = c.div`
  font-weight: ${B.Bold};
  font-size: 19px;
  margin-bottom: 2px;
`,
    C = {
        creditCard: "cc",
        purchaseOrder: "po"
    },
    it = () => {
        const [t, d] = r.useState(null), [s, i] = r.useState(null), [f, m] = r.useState(!1), [j, h] = r.useState(null), {
            id: g,
            source: n
        } = te();
        r.useEffect(() => {
            n !== C.creditCard && n !== C.purchaseOrder && X(ae)
        }, [n]), r.useEffect(() => {
            P({
                url: "/api/quote/fetch/" + g,
                success: a => {
                    const {
                        quote: p,
                        plan: y
                    } = a;
                    m(!!a.quote.renewalForExistingBulk), d(p), i(y)
                },
                error: a => {
                    h(a), D({
                        title: "Error fetching quote"
                    })
                }
            })
        }, [g]);
        const x = () => {
            if (j) return e.jsx(re, {
                type: "error",
                message: "Error fetching quote"
            });
            if (!t || !s) return e.jsx(W, {});
            let a = "";
            n === C.purchaseOrder && (a = "Purchase Order"), n === C.creditCard && (a = "Credit Card ");
            const p = () => f ? `Renew with a ${a}` : `Paying with ${a}`;
            return e.jsxs(e.Fragment, {
                children: [e.jsx(ge, {
                    title: p(),
                    plan: s.name,
                    cost: t.price
                }), n === C.purchaseOrder && e.jsx(he, {
                    quote: t,
                    planId: s.id,
                    planLengthInDays: s.days
                }), n === C.creditCard && e.jsx(je, {
                    quote: t,
                    planId: s.id,
                    planLengthInDays: s.days
                })]
            })
        };
        return e.jsxs(ye, {
            className: "flex-column vc",
            children: [e.jsx(le, {
                includeSpacer: !0
            }), e.jsx(ve, {
                children: x()
            })]
        })
    },
    ye = c.div`
  min-height: 100%;
  background: ${I.Snow};
  width: 100%;
  color: ${I.Black};
  font-family: ${Q.SFPro};
  padding: 20px;
`,
    ve = c.div`
  width: 100%;
  max-width: 700px;
`;
export {
    it as
    default
};