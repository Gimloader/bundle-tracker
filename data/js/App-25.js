import {
    r,
    j as e,
    B as q,
    a_ as W,
    M as Z,
    U as Q,
    e as I,
    d as c,
    F as B,
    h as D,
    a as P,
    D as E,
    l as A,
    S as H,
    t as k,
    b as L,
    c8 as ee,
    n as te,
    a4 as re,
    a2 as ae
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
    s as ne
} from "./index-4.js";
import {
    l as oe
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
const U = t => {
        const [d, s] = r.useState([t.initialEmail]), [i, f] = r.useState(""), [m, j] = r.useState(!1), [h, g] = r.useState(!1), o = () => j(!0), x = () => j(!1);
        r.useEffect(() => {
            t.onChange(d)
        }, [d.length]);
        const a = n => f(n.target.value.trim().toLowerCase()),
            p = !!(i && se(i)),
            y = n => {
                s(F => [...F, n]), x(), f("")
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
                        success: n => {
                            n.exists ? y(i) : D({
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
                children: [d.map(n => e.jsx(de, {
                    children: n
                }, `${t.type}-${n}`)), e.jsx(ue, {
                    children: e.jsxs(q, {
                        type: "primary",
                        icon: e.jsx(W, {}),
                        onClick: () => {
                            o()
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
                        onPressEnter: n => {
                            n.preventDefault(), w()
                        },
                        autoComplete: "chrome-off"
                    }), e.jsx(q, {
                        type: "primary",
                        icon: e.jsx(W, {}),
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
        const [d, s] = r.useState(!1), [i, f] = r.useState(t.quote.name), [m, j] = r.useState(""), [h, g] = r.useState(""), [o, x] = r.useState(!1), [a, p] = r.useState(""), [y, w] = r.useState([]), [n, F] = r.useState([]), R = ({
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
            return N || ne.error("PDF must be less than 5MB"), N
        }, O = l => f(l.target.value), v = l => j(l.target.value), z = l => g(l.target.value), b = !!(i && h && a && m), G = () => {
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
                    adminEmails: n
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
            children: [e.jsx(E, {}), e.jsx(T, {
                children: "Group Name"
            }), e.jsx(S, {
                placeholder: "Name here...",
                onChange: O,
                value: i,
                maxLength: 50,
                autoComplete: "chrome-off"
            }), e.jsx("div", {
                style: {
                    height: 10
                }
            }), e.jsx(T, {
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
            }), e.jsx(T, {
                children: "Purchase Order Number"
            }), e.jsx(S, {
                placeholder: "Purchase order number here...",
                value: h,
                onChange: z
            }), e.jsx(E, {}), e.jsxs("div", {
                className: "flex",
                children: [e.jsxs(M, {
                    children: [e.jsx($, {
                        children: "Send a copy of the invoice to..."
                    }), e.jsx(U, {
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
                    children: [e.jsx($, {
                        children: "Group license managers..."
                    }), e.jsx(U, {
                        type: "manager",
                        initialEmail: A().email,
                        addType: "Manager",
                        ensureActiveUser: !0,
                        ensureActiveUserErrorMessage: J,
                        onChange: F
                    })]
                })]
            }), e.jsx(E, {}), e.jsx(T, {
                children: "Purchase Order PDF"
            }), e.jsx(pe, {
                children: e.jsx(ie.Dragger, {
                    disabled: !!(o || a),
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
                        }) : o ? e.jsx(H, {}) : e.jsxs(e.Fragment, {
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
            }), e.jsxs(q, {
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
    T = c.div`
  font-weight: ${B.Bold};
  font-size: 19px;
  margin-bottom: 2px;
`,
    M = c.div`
  width: calc(50% - 6px);
`,
    $ = c.div`
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
        const [d, s] = r.useState(!1), [i, f] = r.useState(t.quote.name), [m, j] = r.useState(""), [h, g] = r.useState(""), [o, x] = r.useState([]), [a, p] = r.useState([]), y = u => f(u.target.value), w = u => j(u.target.value), n = !!(i && m);
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
            }, []), !h) return e.jsx(H, {});
        const F = async u => {
            if (d || !n) return;
            s(!0);
            let O;
            try {
                O = await oe(h)
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
                    receiptEmails: o,
                    adminEmails: a
                },
                success: async v => {
                    const z = v;
                    let b;
                    try {
                        if (b = await O.redirectToCheckout({
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
                    children: [e.jsx($, {
                        children: "Send a copy of the receipt to..."
                    }), e.jsx(U, {
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
                    children: [e.jsx($, {
                        children: "Group license managers..."
                    }), e.jsx(U, {
                        type: "manager",
                        initialEmail: A().email,
                        addType: "Manager",
                        ensureActiveUser: !0,
                        ensureActiveUserErrorMessage: J,
                        onChange: p
                    })]
                })]
            }), e.jsx(E, {}), e.jsx(q, {
                id: "checkout-button",
                style: {
                    marginBottom: 20
                },
                loading: d,
                type: "primary",
                block: !0,
                size: "large",
                onClick: F,
                disabled: !n,
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
            source: o
        } = te();
        r.useEffect(() => {
            o !== C.creditCard && o !== C.purchaseOrder && X(ae)
        }, [o]), r.useEffect(() => {
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
            if (!t || !s) return e.jsx(H, {});
            let a = "";
            o === C.purchaseOrder && (a = "Purchase Order"), o === C.creditCard && (a = "Credit Card ");
            const p = () => f ? `Renew with a ${a}` : `Paying with ${a}`;
            return e.jsxs(e.Fragment, {
                children: [e.jsx(ge, {
                    title: p(),
                    plan: s.name,
                    cost: t.price
                }), o === C.purchaseOrder && e.jsx(he, {
                    quote: t,
                    planId: s.id,
                    planLengthInDays: s.days
                }), o === C.creditCard && e.jsx(je, {
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