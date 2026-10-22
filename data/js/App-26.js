import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    E as n,
    G as r,
    Q as i,
    h as a,
    p as o
} from "./utils.js";
import {
    t as s
} from "./react-1.js";
import {
    l as c
} from "./dist-3.js";
import {
    t as l
} from "./message.js";
import {
    t as u
} from "./modal-1.js";
import {
    t as d
} from "./button-1.js";
import {
    t as f
} from "./input.js";
import {
    n as p
} from "./tabs.js";
import {
    t as m
} from "./spin.js";
import {
    t as h
} from "./upload.js";
import {
    t as g
} from "./App-4.js";
import {
    t as _
} from "./UploadOutlined.js";
import "./Paths.js";
import {
    t as v
} from "./jsx-runtime.js";
import {
    b as y,
    c as b,
    l as x,
    n as S,
    s as C,
    y as w
} from "./_index.js";
import {
    n as T
} from "./EmailStage.js";
import {
    t as E
} from "./NavigateTo.js";
import {
    t as D
} from "./stripe.esm.js";
var O = e(s()),
    k = v(),
    A = e => {
        let [n, i] = O.useState([e.initialEmail]), [a, o] = O.useState(``), [s, c] = O.useState(!1), [l, m] = O.useState(!1), h = () => c(!0), g = () => c(!1);
        O.useEffect(() => {
            e.onChange(n)
        }, [n.length]);
        let _ = e => o(e.target.value.trim().toLowerCase()),
            v = !!(a && T(a)),
            y = e => {
                i(t => [...t, e]), g(), o(``)
            },
            x = () => {
                v && (l || (n.includes(a) ? r({
                    title: `Email is already on the list!`
                }) : e.ensureActiveUser ? (m(!0), t({
                    url: `/api/bulk/user/exists`,
                    data: {
                        email: a
                    },
                    success: t => {
                        t.exists ? y(a) : r({
                            title: `Couldn't add them!`,
                            content: e.ensureActiveUserErrorMessage || `User not found`
                        })
                    },
                    error: () => {
                        r({
                            title: `We ran into an error. Please try again later.`
                        })
                    },
                    both: () => m(!1)
                })) : y(a)))
            };
        return (0, k.jsxs)(k.Fragment, {
            children: [(0, k.jsxs)(j, {
                children: [n.map(t => (0, k.jsx)(M, {
                    children: t
                }, `${e.type}-${t}`)), (0, k.jsx)(N, {
                    children: (0, k.jsxs)(d, {
                        type: `primary`,
                        icon: (0, k.jsx)(p, {}),
                        onClick: () => {
                            h()
                        },
                        children: [`Add `, e.addType]
                    })
                })]
            }), (0, k.jsxs)(u, {
                open: s,
                onCancel: g,
                closable: !0,
                style: {
                    color: S.Black,
                    fontFamily: b.SFPro
                },
                footer: null,
                children: [(0, k.jsxs)(P, {
                    children: [`Add `, e.addType]
                }), (0, k.jsxs)(`div`, {
                    className: `flex`,
                    style: {
                        marginTop: 3
                    },
                    children: [(0, k.jsx)(f, {
                        type: `email`,
                        placeholder: `Email address here...`,
                        autoFocus: !0,
                        value: a,
                        onChange: _,
                        onPressEnter: e => {
                            e.preventDefault(), x()
                        },
                        autoComplete: `chrome-off`
                    }), (0, k.jsx)(d, {
                        type: `primary`,
                        icon: (0, k.jsx)(p, {}),
                        style: {
                            marginLeft: 10
                        },
                        disabled: !v,
                        onClick: x,
                        loading: l,
                        children: `Add`
                    })]
                })]
            })]
        })
    },
    j = x.div.attrs({
        className: `maxWidth`
    })`
  background: ${S.White};
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
`,
    M = x.div`
  border: 1px solid #d9d9d9;
  padding: 6px 12px;
  border-radius: 3px;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`,
    N = x.div.attrs({
        className: `maxWidth flex hc`
    })`
  margin-top: 30px;
`,
    P = x.div`
  font-size: 24px;
  font-weight: ${C.Bold};
`,
    F = e(i()),
    I = `Managers are required to have a Gimkit account, and it looks like one doesn't exist under this email.`,
    L = e => {
        let [i, o] = O.useState(!1), [s, c] = O.useState(e.quote.name), [u, p] = O.useState(``), [g, v] = O.useState(``), [y, b] = O.useState(!1), [x, S] = O.useState(``), [C, T] = O.useState([]), [D, j] = O.useState([]), M = ({
            file: e
        }) => {
            let n = new FormData;
            n.append(`file`, e), b(!0), t({
                url: `/bulk/purchase-order/upload`,
                method: `post`,
                data: n,
                success: e => S(e.url),
                error: () => r({
                    title: `Error uploading document`,
                    content: `Please try again`
                }),
                both: () => b(!1)
            })
        }, N = e => {
            let t = e.size / 1024 / 1024 < 5;
            return t || l.error(`PDF must be less than 5MB`), t
        }, P = e => c(e.target.value), L = e => p(e.target.value), H = e => v(e.target.value), U = !!(s && g && x && u);
        return (0, k.jsxs)(k.Fragment, {
            children: [(0, k.jsx)(w, {}), (0, k.jsx)(z, {
                children: `Group Name`
            }), (0, k.jsx)(f, {
                placeholder: `Name here...`,
                onChange: P,
                value: s,
                maxLength: 50,
                autoComplete: `chrome-off`
            }), (0, k.jsx)(`div`, {
                style: {
                    height: 10
                }
            }), (0, k.jsx)(z, {
                children: `School or District Name`
            }), (0, k.jsx)(f, {
                placeholder: `Name here...`,
                onChange: L,
                value: u,
                maxLength: 100,
                autoComplete: `chrome-off`
            }), (0, k.jsx)(`div`, {
                style: {
                    height: 10
                }
            }), (0, k.jsx)(z, {
                children: `Purchase Order Number`
            }), (0, k.jsx)(f, {
                placeholder: `Purchase order number here...`,
                value: g,
                onChange: H
            }), (0, k.jsx)(w, {}), (0, k.jsxs)(`div`, {
                className: `flex`,
                children: [(0, k.jsxs)(B, {
                    children: [(0, k.jsx)(V, {
                        children: `Send a copy of the invoice to...`
                    }), (0, k.jsx)(A, {
                        type: `invoiceCopy`,
                        initialEmail: a().email,
                        addType: `Recipient`,
                        onChange: T
                    })]
                }), (0, k.jsx)(`div`, {
                    style: {
                        width: 12
                    }
                }), (0, k.jsxs)(B, {
                    children: [(0, k.jsx)(V, {
                        children: `Group license managers...`
                    }), (0, k.jsx)(A, {
                        type: `manager`,
                        initialEmail: a().email,
                        addType: `Manager`,
                        ensureActiveUser: !0,
                        ensureActiveUserErrorMessage: I,
                        onChange: j
                    })]
                })]
            }), (0, k.jsx)(w, {}), (0, k.jsx)(z, {
                children: `Purchase Order PDF`
            }), (0, k.jsx)(R, {
                children: (0, k.jsx)(h.Dragger, {
                    disabled: !!(y || x),
                    multiple: !1,
                    height: 200,
                    showUploadList: !1,
                    accept: `application/pdf`,
                    beforeUpload: N,
                    customRequest: M,
                    children: (0, k.jsx)(k.Fragment, {
                        children: x ? (0, k.jsxs)(k.Fragment, {
                            children: [(0, k.jsx)(`p`, {
                                className: `ant-upload-drag-icon`,
                                children: (0, k.jsx)(_, {})
                            }), (0, k.jsx)(`p`, {
                                className: `ant-upload-text`,
                                children: `Purchase Order Uploaded!`
                            })]
                        }) : y ? (0, k.jsx)(m, {}) : (0, k.jsxs)(k.Fragment, {
                            children: [(0, k.jsx)(`p`, {
                                className: `ant-upload-drag-icon`,
                                children: (0, k.jsx)(_, {})
                            }), (0, k.jsx)(`p`, {
                                className: `ant-upload-text`,
                                children: `Click or drag to upload a PDF`
                            }), (0, k.jsx)(`p`, {
                                className: `ant-upload-hint`,
                                children: `Document must be less than 5MB.`
                            })]
                        })
                    })
                })
            }), (0, k.jsxs)(d, {
                style: {
                    marginTop: 10
                },
                onClick: () => {
                    !i && U && (o(!0), t({
                        url: `/api/bulk/createFromPlan`,
                        method: `post`,
                        data: {
                            name: s,
                            billingName: u,
                            quoteId: e.quote.quoteId,
                            purchaseOrderDocument: x,
                            purchaseOrderNumber: g,
                            invoiceEmails: C,
                            adminEmails: D
                        },
                        success: e => E(`/group-subscription/complete?subscriptionId=${e.subscriptionId}`),
                        error: e => n({
                            e,
                            default: {
                                title: `Error creating subscription`
                            }
                        }),
                        both: () => o(!1)
                    }))
                },
                loading: i,
                type: `primary`,
                block: !0,
                size: `large`,
                disabled: !U,
                children: [e.quote.renewalForExistingBulk ? `Renew` : `Start`, ` License`]
            }), (0, k.jsx)(w, {}), (0, k.jsx)(`div`, {
                style: {
                    marginBottom: 20
                },
                children: e.quote.renewalForExistingBulk ? (0, k.jsxs)(k.Fragment, {
                    children: [`This group license will become active immediately. All group members will be imported automatically from your expiring group to this group. Educators covered under this license will have full Pro access until whichever is later:`, ` `, (0, k.jsxs)(`b`, {
                        children: [(0, F.default)().add(e.planLengthInDays, `day`).format(`L`), ` or a year after the current group license expiration.`]
                    }), ` `, `If payment is not received within 45 days, the license will automatically deactivate.`]
                }) : (0, k.jsxs)(k.Fragment, {
                    children: [`This group license will become active immediately. Educators covered under this license will have full Pro access until`, ` `, (0, k.jsxs)(`b`, {
                        children: [(0, F.default)().add(e.planLengthInDays, `day`).format(`L`), `.`]
                    }), ` If payment is not received within 45 days, the license will automatically deactivate.`]
                })
            })]
        })
    },
    R = x.div`
  .ant-upload.ant-upload-drag {
    height: 200px;
  }
`,
    z = x.div`
  font-weight: ${C.Bold};
  font-size: 19px;
  margin-bottom: 2px;
`,
    B = x.div`
  width: calc(50% - 6px);
`,
    V = x.div`
  font-weight: ${C.Bold};
  font-size: 19px;
  margin-bottom: 6px;
`,
    H = e => (0, k.jsxs)(k.Fragment, {
        children: [(0, k.jsx)(U, {
            children: e.title
        }), (0, k.jsxs)(W, {
            children: [e.plan, ` - `, o(e.cost / 100, {
                forceUSD: !0
            })]
        })]
    }),
    U = x.h2`
  font-weight: ${C.UltraBold};
  font-size: 37px;
  color: ${S.Black};
`,
    W = x.p`
  margin-top: -26px;
  font-size: 17px;
`,
    G = e => {
        let [r, i] = O.useState(!1), [o, s] = O.useState(e.quote.name), [c, l] = O.useState(``), [u, p] = O.useState(``), [h, g] = O.useState([]), [_, v] = O.useState([]), y = e => s(e.target.value), b = e => l(e.target.value), x = !!(o && c);
        return O.useEffect(() => {
            i(!0), t({
                url: `/api/billing/stripe-key`,
                success: e => {
                    e && e.key && p(e.key)
                },
                error: e => n({
                    e,
                    default: {
                        title: `Our payment processor is currently down`,
                        content: `Please try again later`
                    }
                }),
                both: () => i(!1)
            })
        }, []), u ? (0, k.jsxs)(k.Fragment, {
            children: [(0, k.jsx)(w, {}), (0, k.jsx)(K, {
                children: `Group Name`
            }), (0, k.jsx)(f, {
                placeholder: `Name here...`,
                onChange: y,
                value: o,
                maxLength: 50,
                autoComplete: `chrome-off`
            }), (0, k.jsx)(`div`, {
                style: {
                    height: 10
                }
            }), (0, k.jsx)(K, {
                children: `School or District Name`
            }), (0, k.jsx)(f, {
                placeholder: `Name here...`,
                onChange: b,
                value: c,
                maxLength: 100,
                autoComplete: `chrome-off`
            }), (0, k.jsx)(w, {}), (0, k.jsxs)(`div`, {
                className: `flex`,
                children: [(0, k.jsxs)(B, {
                    children: [(0, k.jsx)(V, {
                        children: `Send a copy of the receipt to...`
                    }), (0, k.jsx)(A, {
                        type: `receiptCopy`,
                        initialEmail: a().email,
                        addType: `Recipient`,
                        onChange: g
                    })]
                }), (0, k.jsx)(`div`, {
                    style: {
                        width: 12
                    }
                }), (0, k.jsxs)(B, {
                    children: [(0, k.jsx)(V, {
                        children: `Group license managers...`
                    }), (0, k.jsx)(A, {
                        type: `manager`,
                        initialEmail: a().email,
                        addType: `Manager`,
                        ensureActiveUser: !0,
                        ensureActiveUserErrorMessage: I,
                        onChange: v
                    })]
                })]
            }), (0, k.jsx)(w, {}), (0, k.jsx)(d, {
                id: `checkout-button`,
                style: {
                    marginBottom: 20
                },
                loading: r,
                type: `primary`,
                block: !0,
                size: `large`,
                onClick: async a => {
                    if (r || !x) return;
                    i(!0);
                    let s;
                    try {
                        s = await D(u)
                    } catch (e) {
                        i(!1), n({
                            e,
                            default: {
                                title: `Issue connecting to our payment provider`,
                                content: `An error ocurred while connecting to our payments provider. Please try again later`
                            }
                        })
                    }
                    t({
                        url: `/api/billing/create-bulk-session`,
                        method: `POST`,
                        data: {
                            name: o,
                            billingName: c,
                            quoteId: e.quote.quoteId,
                            receiptEmails: h,
                            adminEmails: _
                        },
                        success: async e => {
                            let t = e,
                                r;
                            try {
                                if (r = await s.redirectToCheckout({
                                        sessionId: t.id
                                    }), r && r.error) throw r.error
                            } catch (e) {
                                n({
                                    e,
                                    default: {
                                        title: `Error`,
                                        content: `An error ocurred. Please try again later`
                                    }
                                })
                            }
                        },
                        error: e => {
                            n({
                                e,
                                default: {
                                    title: `Error`,
                                    content: `An error ocurred. Please try again later`
                                }
                            })
                        },
                        both: () => i(!1)
                    })
                },
                disabled: !x,
                children: `Checkout`
            }), (0, k.jsx)(`div`, {
                style: {
                    marginBottom: 20
                },
                children: e.quote.renewalForExistingBulk ? (0, k.jsxs)(k.Fragment, {
                    children: [`This group license will become active immediately. All group members will be imported automatically from your expiring group to this group. Educators covered under this license will have full Pro access until whichever is later:`, ` `, (0, k.jsxs)(`b`, {
                        children: [(0, F.default)().add(1, `year`).format(`L`), `, or a year after the current group license expiration.`]
                    }), ` `]
                }) : (0, k.jsxs)(k.Fragment, {
                    children: [`This group license will become active immediately. Educators covered under the license will have full Pro access until`, ` `, (0, k.jsxs)(`b`, {
                        children: [` `, (0, F.default)().add(1, `year`).format(`L`), `.`]
                    })]
                })
            })]
        }) : (0, k.jsx)(m, {})
    },
    K = x.div`
  font-weight: ${C.Bold};
  font-size: 19px;
  margin-bottom: 2px;
`,
    q = {
        creditCard: `cc`,
        purchaseOrder: `po`
    },
    J = () => {
        let [e, n] = O.useState(null), [i, a] = O.useState(null), [o, s] = O.useState(!1), [l, u] = O.useState(null), {
            id: d,
            source: f
        } = c();
        return O.useEffect(() => {
            f !== q.creditCard && f !== q.purchaseOrder && E(`/`)
        }, [f]), O.useEffect(() => {
            t({
                url: `/api/quote/fetch/` + d,
                success: e => {
                    let {
                        quote: t,
                        plan: r
                    } = e;
                    s(!!e.quote.renewalForExistingBulk), n(t), a(r)
                },
                error: e => {
                    u(e), r({
                        title: `Error fetching quote`
                    })
                }
            })
        }, [d]), (0, k.jsxs)(Y, {
            className: `flex-column vc`,
            children: [(0, k.jsx)(g, {
                includeSpacer: !0
            }), (0, k.jsx)(X, {
                children: (() => {
                    if (l) return (0, k.jsx)(y, {
                        type: `error`,
                        message: `Error fetching quote`
                    });
                    if (!e || !i) return (0, k.jsx)(m, {});
                    let t = ``;
                    return f === q.purchaseOrder && (t = `Purchase Order`), f === q.creditCard && (t = `Credit Card `), (0, k.jsxs)(k.Fragment, {
                        children: [(0, k.jsx)(H, {
                            title: o ? `Renew with a ${t}` : `Paying with ${t}`,
                            plan: i.name,
                            cost: e.price
                        }), f === q.purchaseOrder && (0, k.jsx)(L, {
                            quote: e,
                            planId: i.id,
                            planLengthInDays: i.days
                        }), f === q.creditCard && (0, k.jsx)(G, {
                            quote: e,
                            planId: i.id,
                            planLengthInDays: i.days
                        })]
                    })
                })()
            })]
        })
    },
    Y = x.div`
  min-height: 100%;
  background: ${S.Snow};
  width: 100%;
  color: ${S.Black};
  font-family: ${b.SFPro};
  padding: 20px;
`,
    X = x.div`
  width: 100%;
  max-width: 700px;
`;
export {
    J as
    default
};