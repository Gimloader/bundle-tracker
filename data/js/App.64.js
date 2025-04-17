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
r.register("2jLa9", (function(t, n) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return v
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("dhSIL"),
        s = r("2FDaO"),
        l = r("lKmIF"),
        c = r("69SUA"),
        u = r("hLIXI"),
        d = r("iaud2"),
        f = r("cS38C"),
        p = r("3uz2P"),
        m = r("cHCps");
    let g;
    var v = () => {
        const {
            id: e
        } = (0, p.useParams)(), t = e;
        return (0, a.jsx)(i.QueryClientProvider, {
            client: u.default,
            children: (0, a.jsxs)(h, {
                children: [(0, a.jsx)(m.default, {
                    includeSpacer: !0
                }), t ? (0, a.jsx)(d.default, {
                    bulkId: t
                }) : (0, a.jsx)(f.default, {})]
            })
        })
    };
    const h = s.default.div.attrs({
        className: "flex-column"
    })(g || (g = (e => e)`
  flex: 1;
  color: ${0};
  background: ${0};
  font-family: ${0};
`), l.default.Black, l.default.Snow, c.Fonts.SFPro)
})), r.register("hLIXI", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = new(0, r("bQalE").QueryClient)
})), r.register("iaud2", (function(t, n) {
    e(t.exports, "default", (function() {
        return C
    }));
    var o = r("hxEiv"),
        a = r("gHmyG"),
        i = r("hdT9U"),
        s = r("fywoC"),
        l = r("b1oE9"),
        c = r("3nrYE"),
        u = r("dlGsk"),
        d = r("dB7FZ"),
        f = r("l4C5V"),
        p = r("jEs7P"),
        m = r("j0UEl"),
        g = r("iMOcM"),
        v = r("iROck");
    const h = s.lazy((() => r("aVnTi")));
    let x;
    var y;
    (y = x || (x = {})).invite = "invite", y.members = "members", y.managers = "managers", y.analytics = "analytics", y.invoice = "invoice", y.receipt = "receipt";
    const {
        TabPane: b
    } = i.default;
    var C = e => {
        const {
            bulkId: t
        } = e, [r, n] = s.useState(x.invite), {
            data: y,
            error: C,
            isLoading: w
        } = (0, c.default)(t);
        if (w) return (0, o.jsxs)("div", {
            style: {
                flex: 1
            },
            className: "flex-center",
            children: [(0, o.jsx)(g.Title, {
                title: "Group License"
            }), (0, o.jsx)(a.default, {
                size: "large"
            })]
        });
        if (C) return (0, v.NavigateTo)(l.GROUP_DASHBOARD), null;
        return (0, o.jsxs)(u.Container, {
            children: [(0, o.jsx)(g.Title, {
                title: `${y.name} | Group License`
            }), (0, o.jsxs)(u.Content, {
                children: [(0, o.jsx)(f.default, {
                    bulk: y,
                    bulkId: e.bulkId
                }), (0, o.jsx)(u.PrimaryContent, {
                    children: (0, o.jsxs)(i.default, {
                        type: "card",
                        activeKey: r,
                        onChange: e => {
                            const t = e;
                            t !== x.invoice ? t !== x.receipt ? n(t) : y.receiptUrl && window.open(y.receiptUrl) : y.invoiceUrl && window.open(y.invoiceUrl)
                        },
                        children: [(0, o.jsx)(b, {
                            tab: "Invite",
                            children: (0, o.jsx)(p.default, {
                                bulk: y,
                                bulkId: t
                            })
                        }, x.invite), (0, o.jsx)(b, {
                            tab: "Members",
                            children: (0, o.jsx)(m.default, {
                                bulk: y,
                                bulkId: t
                            })
                        }, x.members), (0, o.jsx)(b, {
                            tab: "Managers",
                            children: (0, o.jsx)(d.default, {
                                bulk: y,
                                bulkId: t
                            })
                        }, x.managers), (0, o.jsx)(b, {
                            tab: "Usage Report",
                            children: (0, o.jsx)(s.Suspense, {
                                fallback: null,
                                children: (0, o.jsx)(h, {
                                    bulkId: t
                                })
                            })
                        }, x.analytics), y.receiptUrl ? (0, o.jsx)(b, {
                            tab: "View Receipt"
                        }, x.receipt) : null, y.invoiceUrl ? (0, o.jsx)(b, {
                            tab: "View Invoice"
                        }, x.invoice) : null]
                    })
                })]
            })]
        })
    }
})), r.register("3nrYE", (function(t, n) {
    e(t.exports, "refetchSpecificBulk", (function() {
        return l
    })), e(t.exports, "default", (function() {
        return c
    }));
    var o = r("eMRqp"),
        a = r("iMOcM"),
        i = r("hLIXI");
    const s = ["specific-bulk"],
        l = e => i.default.refetchQueries([s, e]);
    var c = e => (0, o.useQuery)([s, e], (() => (0, a.requestAsPromise)({
        url: "/api/bulk/fetch/" + e
    })))
})), r.register("dlGsk", (function(n, o) {
    e(n.exports, "Container", (function() {
        return k
    })), e(n.exports, "Content", (function() {
        return S
    })), e(n.exports, "Title", (function() {
        return O
    })), e(n.exports, "PrimaryContent", (function() {
        return N
    })), e(n.exports, "default", (function() {
        return j
    }));
    var a = r("hxEiv"),
        i = r("hjoUW"),
        s = r("93yIm"),
        l = r("2nCEo");
    r("fywoC");
    var c = r("2FDaO"),
        u = r("46bRO"),
        d = r("69SUA"),
        f = r("b1oE9"),
        p = r("kyvf1"),
        m = r("cO2Su"),
        g = r("iMOcM"),
        v = r("7um8m");
    let h, x, y, b, C, w = e => e;
    var j = e => (0, a.jsx)(k, {
        children: (0, a.jsxs)(S, {
            children: [(0, a.jsxs)("div", {
                style: {
                    textAlign: "center"
                },
                className: "flex-column flex-center",
                children: [(0, a.jsxs)(O, {
                    children: [u.COMPANY_NAME, " Groups"]
                }), (0, a.jsxs)(E, {
                    children: ["Welcome to ", u.COMPANY_NAME, " Groups! Below are the group licenses you manage. Click into a license to invite members, add managers, view usage analytics, and more!"]
                }), (0, a.jsx)(p.default, {
                    to: f.GROUP_PRICING,
                    style: {
                        marginBottom: 30,
                        marginTop: -10
                    },
                    children: (0, a.jsx)(s.default, {
                        size: "large",
                        type: "primary",
                        icon: (0, a.jsx)(i.default, {}),
                        children: "Start New Group"
                    })
                })]
            }), (0, a.jsx)(N, {
                children: e.bulks.map((e => (0, a.jsx)(v.default, {
                    id: e.id,
                    name: e.name,
                    isActive: e.isActive,
                    startDate: t(l)((0, g.dateFromId)(e.id)).format("MMMM Do, YYYY")
                }, e.id + "-item")))
            })]
        })
    });
    const k = c.default.div.attrs({
            className: "flex-column vc"
        })(h || (h = w`
  flex: 1;
  padding: 35px 45px;
  padding-bottom: 0px;
  overflow: hidden;
`)),
        S = c.default.div.attrs({
            className: "flex-column"
        })(x || (x = w`
  flex: 1;
  width: 90%;
  max-width: 1200px;
`)),
        O = c.default.div(y || (y = w`
  font-size: 54px;
  font-weight: ${0};
`), d.FontWeights.UltraBold),
        E = c.default.div(b || (b = w`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 700px;
`)),
        N = (0, c.default)(m.default).attrs({
            className: "maxWidth"
        })(C || (C = w`
  flex: 1;
  padding: 30px;
  border-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`))
})), r.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv"),
        a = r("beXRF");
    r("fywoC");
    var i = e => e.external || !e.to ? (0, o.jsx)("a", {
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
    }) : (0, o.jsx)(a.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), r.register("cO2Su", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("lKmIF");
    let s;
    var l = e => (0, o.jsx)(c, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const c = a.default.div(s || (s = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${0};
  padding: 20px;
`), i.default.White)
})), r.register("7um8m", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("lKmIF"),
        s = r("69SUA"),
        l = r("kyvf1");
    let c, u, d, f, p = e => e;
    var m = e => {
        const {
            id: t,
            name: r,
            startDate: n,
            isActive: a
        } = e;
        return (0, o.jsxs)(g, {
            to: `/groups/${t}`,
            children: [(0, o.jsx)(v, {
                style: {
                    background: a ? "#388e3c" : "#f44336"
                },
                children: a ? "Active" : "Inactive"
            }), (0, o.jsx)(h, {
                children: r
            }), n ? (0, o.jsxs)(x, {
                children: ["Started on ", n]
            }) : null]
        })
    };
    const g = (0, a.default)(l.default).attrs({
            className: "flex-column"
        })(c || (c = p`
  padding-top: 0px;
  border: 1px solid;
  border-color: ${0};
  border-radius: 3px;
  align-items: flex-start;
  padding: 24px;
  transition: background 0.15s;
  margin-bottom: 10px;
  color: ${0};
  text-decoration: none;
  &:hover {
    background: rgba(232, 245, 233, 0.2);
    cursor: pointer;
    color: ${0};
  }
  &:last-of-type {
    margin-bottom: 0px;
  }
`), i.default.BorderGray, i.default.Black, i.default.Black),
        v = a.default.div(u || (u = p`
  font-style: italic;
  padding: 4px 16px;
  border-radius: 8px;
  color: ${0};
  margin-bottom: 9px;
  font-size: 12px;
`), i.default.White),
        h = a.default.div(d || (d = p`
  font-weight: ${0};
  font-size: 16px;
`), s.FontWeights.Bold),
        x = a.default.div(f || (f = p`
  font-style: italic;
  font-size: 13px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`))
})), r.register("dB7FZ", (function(t, n) {
    e(t.exports, "default", (function() {
        return C
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("93yIm"),
        s = r("7ECC6"),
        l = r("b9Zw0"),
        c = r("cy4A6"),
        u = r("fBuQJ"),
        d = r("69SUA"),
        f = r("lKmIF"),
        p = r("1YiMb"),
        m = r("2cVVi"),
        g = r("3nrYE"),
        v = r("sgWtV"),
        h = r("dknAM"),
        x = r("iMOcM"),
        y = r("da8gK");
    const b = {
        fontFamily: d.Fonts.SFPro,
        color: f.default.Black
    };
    var C = e => {
        const {
            bulk: t,
            bulkId: r
        } = e, [n, f] = a.useState(""), [C, w] = a.useState(!1), [j, k] = a.useState(null), S = n && (0, h.validateEmail)(n), O = () => {
            S && (w(!0), (0, x.request)({
                url: "/api/bulk/add-admin",
                data: {
                    bulk: r,
                    newAdmin: n
                },
                success: () => {
                    (0, g.refetchSpecificBulk)(r), c.default.success("Manager added!"), f("")
                },
                error: e => {
                    e && e.message && e.message.text && "USER NOT FOUND" === e.message.text ? (0, v.throwError)({
                        title: "User not found",
                        content: "This user does not exist on Gimkit yet. In order to be an manager for this license, they will need to create a free account first."
                    }) : k(e)
                },
                both: () => w(!1)
            }))
        };
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(s.default, {
                style: b,
                children: (0, o.jsxs)("div", {
                    children: [(0, o.jsx)("div", {
                        style: {
                            fontSize: 25,
                            fontWeight: d.FontWeights.UltraBold
                        },
                        children: "Managers"
                    }), (0, o.jsx)("div", {
                        style: {
                            fontSize: 15,
                            marginTop: -6
                        },
                        children: "Managers can remove members, add other managers, and modify group options"
                    })]
                })
            }), (0, o.jsxs)(s.default, {
                style: {
                    ...b,
                    marginTop: 10,
                    marginBottom: 10
                },
                children: [(0, o.jsx)("div", {
                    style: {
                        fontWeight: d.FontWeights.UltraBold,
                        fontSize: 25
                    },
                    children: "Add Manager"
                }), (0, o.jsx)(l.default, {
                    size: "large",
                    placeholder: "Manager email...",
                    style: {
                        width: "100%",
                        marginTop: -1
                    },
                    value: n,
                    onChange: e => {
                        f(e.target.value.toLowerCase()), k(null)
                    },
                    onPressEnter: O
                }), (0, o.jsx)(i.default, {
                    style: {
                        width: "100%",
                        marginTop: 5
                    },
                    type: "primary",
                    disabled: !S,
                    loading: C,
                    onClick: O,
                    children: "Add"
                }), (0, o.jsx)(y.default, {
                    error: j,
                    style: {
                        marginTop: 5
                    }
                })]
            }), (0, o.jsx)(m.default, {
                children: t.owners.map((e => (0, o.jsx)("div", {
                    children: (0, o.jsx)(p.default, {
                        email: e,
                        remove: () => {
                            return n = e, void(t.owners.length < 2 ? (0, v.throwError)({
                                title: "Cannot remove",
                                content: "Please add another admin before removing yourself"
                            }) : (0, x.getUser)().email === n ? u.default.confirm({
                                title: "Are you sure you want to remove yourself as a manager?",
                                onOk: () => {
                                    (0, x.request)({
                                        url: "/api/bulk/remove-admin",
                                        data: {
                                            bulk: r
                                        },
                                        success: () => window.location.reload(),
                                        error: () => (0, v.throwError)({
                                            title: "Error removing user from license"
                                        })
                                    })
                                }
                            }) : (0, v.throwError)({
                                title: "Cannot remove",
                                content: "Managers can only remove themselves"
                            }));
                            var n
                        }
                    })
                }, "admin-" + e)))
            })]
        })
    }
})), r.register("1YiMb", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("9g8O0"),
        i = r("7ECC6"),
        s = r("e4KJZ"),
        l = r("69SUA"),
        c = r("lKmIF");
    var u = e => (0, o.jsx)(i.default, {
        style: {
            fontFamily: l.Fonts.SFPro,
            color: c.default.Black,
            marginBottom: 5
        },
        children: (0, o.jsxs)("div", {
            className: "flex maxWidth vc",
            style: {
                justifyContent: "space-between"
            },
            children: [(0, o.jsx)("div", {
                children: e.email
            }), (0, o.jsx)("div", {
                children: (0, o.jsx)(s.default, {
                    title: "Remove",
                    children: (0, o.jsx)(a.default, {
                        onClick: e.remove,
                        style: {
                            cursor: "pointer"
                        }
                    })
                })
            })]
        })
    })
})), r.register("9g8O0", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("ewhoP"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DeleteOutlined";
    var c = a.forwardRef(l)
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
})), r.register("da8gK", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("bfV0l");
    var i = e => e.error ? (0, o.jsx)(a.default, {
        message: "Error",
        style: e.style,
        type: "error",
        description: e.error && e.error.message && e.error.message.text ? e.error.message.text : "string" == typeof e.error ? e.error : "Unknown Error. Please try again.",
        showIcon: !0
    }) : null
})), r.register("l4C5V", (function(n, o) {
    e(n.exports, "default", (function() {
        return w
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        s = r("69SUA"),
        l = r("aYYSA"),
        c = r("bfV0l"),
        u = r("93yIm"),
        d = r("b9Zw0"),
        f = r("fBuQJ"),
        p = r("5g49A"),
        m = r("e4KJZ"),
        g = r("iMOcM"),
        v = r("kyvf1"),
        h = r("3nrYE"),
        x = r("1uixS"),
        y = r("iROck"),
        b = r("2nCEo");
    const C = e => {
        const [t, r] = i.useState(""), n = !!t, o = () => {
            n && (e.onNewName(t), e.close())
        };
        return (0, a.jsx)(f.default, {
            open: e.open,
            closable: !0,
            onCancel: e.close,
            title: "Rename Group",
            afterClose: () => r(""),
            footer: (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.default, {
                    onClick: e.close,
                    children: "Cancel"
                }), (0, a.jsx)(u.default, {
                    disabled: !n,
                    type: "primary",
                    onClick: o,
                    children: "Rename"
                })]
            }),
            children: (0, a.jsx)(d.default, {
                size: "large",
                style: {
                    width: "100%"
                },
                autoFocus: !0,
                placeholder: "New group name...",
                value: t,
                maxLength: 32,
                onChange: e => r(e.target.value),
                onPressEnter: o
            })
        })
    };
    var w = e => {
        const {
            bulk: r,
            bulkId: n
        } = e, [o, d] = i.useState(!1), [f, w] = i.useState(!1), {
            isActive: j,
            name: k,
            expiration: S,
            statusText: O
        } = r;
        return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
                className: "maxWidth",
                style: {
                    paddingBottom: 39
                },
                children: [(0, a.jsxs)("div", {
                    className: "maxWidth flex vc",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            className: "flex vc",
                            style: {
                                marginBottom: -11
                            },
                            children: [(0, a.jsx)("div", {
                                style: {
                                    fontWeight: s.FontWeights.UltraBold,
                                    fontSize: 34,
                                    cursor: "pointer"
                                },
                                onClick: () => w(!0),
                                children: (0, a.jsx)(m.default, {
                                    title: "Rename Group License",
                                    placement: "topLeft",
                                    children: k
                                })
                            }), (0, a.jsx)(p.default, {
                                style: {
                                    marginLeft: 10
                                },
                                color: j ? "green" : "red",
                                children: j ? O || "Active" : S && t(b)().isAfter(t(b).unix(S)) ? "Inactive" : O || "Inactive"
                            })]
                        }), (0, a.jsx)("div", {
                            style: {
                                fontSize: 18,
                                opacity: .8
                            },
                            children: j ? S ? `Expires on ${t(b).unix(S).format("L")}` : "Paid with credit/debit card" : S && t(b)().isAfter(t(b).unix(S)) ? `Expired on ${t(b).unix(S).format("L")}` : "Inactive group license"
                        })]
                    }), (0, a.jsx)("div", {
                        children: r.allowedToRenew ? (0, a.jsx)(u.default, {
                            size: "large",
                            type: "primary",
                            onClick: () => {
                                d(!0), (0, g.request)({
                                    url: "/api/quote/createFromRenewal",
                                    method: "post",
                                    data: {
                                        id: n
                                    },
                                    success: e => {
                                        (0, y.NavigateTo)(`/quote/${e}`)
                                    },
                                    error: e => {
                                        (0, g.throwMessageError)({
                                            e: e,
                                            default: {
                                                title: "Error generating a renewal quote. Please try again later"
                                            }
                                        })
                                    },
                                    both: () => d(!1)
                                })
                            },
                            loading: o,
                            icon: (0, a.jsx)(l.default, {}),
                            children: "Renew"
                        }) : null
                    })]
                }), r.isActive ? null : (0, a.jsx)(c.default, {
                    type: "error",
                    message: "Group License No Longer Active",
                    description: (0, a.jsxs)(a.Fragment, {
                        children: ["To reactivate this group license,", " ", (0, a.jsx)(v.default, {
                            to: "mailto:groups@gimkit.com",
                            external: !0,
                            children: "contact support."
                        })]
                    }),
                    style: {
                        marginTop: 15
                    },
                    showIcon: !0
                }), (0, a.jsx)(C, {
                    open: f,
                    close: () => w(!1),
                    onNewName: e => {
                        (0, g.request)({
                            url: "/api/bulk/rename",
                            data: {
                                id: n,
                                name: e
                            }
                        }), (0, h.refetchSpecificBulk)(n), (0, x.invalidateAllBulks)()
                    }
                })]
            })
        })
    }
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5UEB4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "StarOutlined";
    var c = a.forwardRef(l)
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
})), r.register("5g49A", (function(n, o) {
    e(n.exports, "default", (function() {
        return v
    }), (function(e) {
        return v = e
    }));
    var a = r("legzE"),
        i = r("fe1on"),
        s = r("fywoC"),
        l = r("4gMdJ"),
        c = r("2iORQ"),
        u = r("eM84N"),
        d = r("8elTB"),
        f = r("jfXop"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const m = (e, r) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: d,
                style: m,
                children: g,
                icon: v,
                color: h,
                onClose: x,
                closeIcon: y,
                closable: b = !1
            } = e, C = p(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
            const {
                getPrefixCls: w,
                direction: j
            } = s.useContext(l.ConfigContext), [k, S] = s.useState(!0);
            s.useEffect((() => {
                "visible" in C && S(C.visible)
            }), [C.visible]);
            const O = (0, c.isPresetColor)(h) || (0, c.isPresetStatusColor)(h),
                E = Object.assign({
                    backgroundColor: h && !O ? h : void 0
                }, m),
                N = w("tag", n),
                [M, I] = (0, f.default)(N),
                _ = t(i)(N, {
                    [`${N}-${h}`]: O,
                    [`${N}-has-color`]: h && !O,
                    [`${N}-hidden`]: !k,
                    [`${N}-rtl`]: "rtl" === j
                }, o, d, I),
                P = e => {
                    e.stopPropagation(), null == x || x(e), e.defaultPrevented || S(!1)
                },
                z = "function" == typeof C.onClick || g && "a" === g.type,
                A = v || null,
                B = A ? s.createElement(s.Fragment, null, A, s.createElement("span", null, g)) : g,
                T = s.createElement("span", Object.assign({}, C, {
                    ref: r,
                    className: _,
                    style: E
                }), B, b ? y ? s.createElement("span", {
                    className: `${N}-close-icon`,
                    onClick: P
                }, y) : s.createElement(a.default, {
                    className: `${N}-close-icon`,
                    onClick: P
                }) : null);
            return M(z ? s.createElement(u.default, null, T) : T)
        },
        g = s.forwardRef(m);
    g.CheckableTag = d.default;
    var v = g
})), r.register("8elTB", (function(n, o) {
    e(n.exports, "default", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = r("fe1on"),
        i = r("fywoC"),
        s = r("4gMdJ"),
        l = r("jfXop"),
        c = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    var u = e => {
        var {
            prefixCls: r,
            className: n,
            checked: o,
            onChange: u,
            onClick: d
        } = e, f = c(e, ["prefixCls", "className", "checked", "onChange", "onClick"]);
        const {
            getPrefixCls: p
        } = i.useContext(s.ConfigContext), m = p("tag", r), [g, v] = (0, l.default)(m), h = t(a)(m, {
            [`${m}-checkable`]: !0,
            [`${m}-checkable-checked`]: o
        }, n, v);
        return g(i.createElement("span", Object.assign({}, f, {
            className: h,
            onClick: e => {
                null == u || u(!o), null == d || d(e)
            }
        })))
    }
})), r.register("jfXop", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("huF4L"),
        a = r("1QMe3"),
        i = r("3pCmM"),
        s = r("10VQw"),
        l = r("kCC5O");
    const c = (e, t, r) => {
            const n = (0, i.default)(r);
            return {
                [`${e.componentCls}-${t}`]: {
                    color: e[`color${r}`],
                    background: e[`color${n}Bg`],
                    borderColor: e[`color${n}Border`]
                }
            }
        },
        u = e => (0, s.genPresetColor)(e, ((t, r) => {
            let {
                textColor: n,
                lightBorderColor: o,
                lightColor: a,
                darkColor: i
            } = r;
            return {
                [`${e.componentCls}-${t}`]: {
                    color: n,
                    background: a,
                    borderColor: o,
                    "&-inverse": {
                        color: e.colorTextLightSolid,
                        background: i,
                        borderColor: i
                    }
                }
            }
        })),
        d = e => {
            const {
                paddingXXS: t,
                lineWidth: r,
                tagPaddingHorizontal: n,
                componentCls: o
            } = e, a = n - r, i = t - r;
            return {
                [o]: Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
                    display: "inline-block",
                    height: "auto",
                    marginInlineEnd: e.marginXS,
                    paddingInline: a,
                    fontSize: e.tagFontSize,
                    lineHeight: `${e.tagLineHeight}px`,
                    whiteSpace: "nowrap",
                    background: e.tagDefaultBg,
                    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                    borderRadius: e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${e.motionDurationMid}`,
                    textAlign: "start",
                    [`&${o}-rtl`]: {
                        direction: "rtl"
                    },
                    "&, a, a:hover": {
                        color: e.tagDefaultColor
                    },
                    [`${o}-close-icon`]: {
                        marginInlineStart: i,
                        color: e.colorTextDescription,
                        fontSize: e.tagIconSize,
                        cursor: "pointer",
                        transition: `all ${e.motionDurationMid}`,
                        "&:hover": {
                            color: e.colorTextHeading
                        }
                    },
                    [`&${o}-has-color`]: {
                        borderColor: "transparent",
                        [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
                            color: e.colorTextLightSolid
                        }
                    },
                    "&-checkable": {
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        cursor: "pointer",
                        [`&:not(${o}-checkable-checked):hover`]: {
                            color: e.colorPrimary,
                            backgroundColor: e.colorFillSecondary
                        },
                        "&:active, &-checked": {
                            color: e.colorTextLightSolid
                        },
                        "&-checked": {
                            backgroundColor: e.colorPrimary,
                            "&:hover": {
                                backgroundColor: e.colorPrimaryHover
                            }
                        },
                        "&:active": {
                            backgroundColor: e.colorPrimaryActive
                        }
                    },
                    "&-hidden": {
                        display: "none"
                    },
                    [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
                        marginInlineStart: a
                    }
                })
            }
        };
    var f = (0, o.default)("Tag", (e => {
        const {
            fontSize: t,
            lineHeight: r,
            lineWidth: n,
            fontSizeIcon: o
        } = e, i = Math.round(t * r), s = e.fontSizeSM, l = i - 2 * n, f = e.colorFillAlter, p = e.colorText, m = (0, a.merge)(e, {
            tagFontSize: s,
            tagLineHeight: l,
            tagDefaultBg: f,
            tagDefaultColor: p,
            tagIconSize: o - 2 * n,
            tagPaddingHorizontal: 8
        });
        return [d(m), u(m), c(m, "success", "Success"), c(m, "processing", "Info"), c(m, "error", "Error"), c(m, "warning", "Warning")]
    }))
})), r.register("3pCmM", (function(t, r) {
    function n(e) {
        if ("string" != typeof e) return e;
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("1uixS", (function(t, n) {
    e(t.exports, "invalidateAllBulks", (function() {
        return l
    })), e(t.exports, "default", (function() {
        return c
    }));
    var o = r("eMRqp"),
        a = r("iMOcM"),
        i = r("hLIXI");
    const s = ["all-bulks"],
        l = () => {
            i.default.invalidateQueries(s)
        };
    var c = () => (0, o.useQuery)(s, (() => (0, a.requestAsPromise)({
        url: "/api/bulk/fetch-all"
    })))
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return a
    }));
    var o = r("bd8je");
    const a = e => {
        o.history.push(e)
    }
})), r.register("jEs7P", (function(n, o) {
    e(n.exports, "default", (function() {
        return M
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        s = r("1HPaX"),
        l = r("dohZB"),
        c = r("93yIm"),
        u = r("7ECC6"),
        d = r("fC6cp"),
        f = r("b9Zw0"),
        p = r("cy4A6"),
        m = r("j0UEl"),
        g = r("2FDaO"),
        v = r("69SUA"),
        h = r("dhxiD"),
        x = r("kyvf1"),
        y = r("iMOcM"),
        b = r("46bRO"),
        C = r("3nrYE"),
        w = r("1uixS"),
        j = r("fSJip");
    let k, S, O = e => e;
    const E = {
            ...m.CardStyle,
            width: "calc(50% - 4px)",
            flex: 1
        },
        N = {
            textAlign: "center",
            fontSize: 32
        };
    var M = e => {
        const [r, n] = i.useState(!1), o = (0, w.default)().data, {
            bulkId: g,
            bulk: v
        } = e, k = `${(0,y.getDomain)()}/group/join/${g}`, S = (o || []).filter((e => e.id !== g)), O = !v.joinByLinkEnabled;
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)("div", {
                style: m.CardStyle,
                children: [(0, a.jsxs)("div", {
                    style: {
                        opacity: O ? .6 : 1,
                        pointerEvents: O ? "none" : "auto"
                    },
                    children: [(0, a.jsx)(I, {
                        children: "Invite"
                    }), (0, a.jsx)(_, {
                        children: "Get educators under your group license! Share the invite link below to have them automatically join this group."
                    }), (0, a.jsxs)("div", {
                        className: "maxWidth flex vc",
                        style: {
                            marginTop: 7
                        },
                        children: [(0, a.jsx)(f.default, {
                            value: k,
                            readOnly: !0,
                            size: "large"
                        }), (0, a.jsx)(c.default, {
                            onClick: () => {
                                t(h)(k), p.default.success("Link copied to clipboard!")
                            },
                            style: {
                                marginLeft: 10
                            },
                            type: "primary",
                            size: "large",
                            children: "Copy Link"
                        })]
                    }), (0, a.jsx)(d.default, {}), (0, a.jsxs)("div", {
                        className: "flex",
                        children: [(0, a.jsxs)(u.default, {
                            style: E,
                            hoverable: !0,
                            bodyStyle: N,
                            className: "flex hc vc flex-column",
                            children: [(0, a.jsx)(s.default, {}), (0, a.jsx)(d.default, {}), (0, a.jsxs)("div", {
                                style: {
                                    fontSize: 16
                                },
                                children: [b.COMPANY_NAME, " Pro subscribers who use this link to join your group license will be refunded automatically for their unused subscription time."]
                            })]
                        }), (0, a.jsx)("div", {
                            style: {
                                width: 8
                            }
                        }), (0, a.jsxs)(u.default, {
                            style: E,
                            hoverable: !0,
                            bodyStyle: N,
                            className: "flex hc vc flex-column",
                            children: [(0, a.jsx)(l.default, {}), (0, a.jsx)(d.default, {}), (0, a.jsxs)("div", {
                                style: {
                                    fontSize: 16
                                },
                                children: ["You can view and remove members by clicking the ", (0, a.jsx)("b", {
                                    children: "Members"
                                }), " ", "tab above."]
                            })]
                        })]
                    }), (0, a.jsx)(d.default, {})]
                }), (0, a.jsxs)("div", {
                    className: "flex flex-column",
                    children: [(0, a.jsxs)(x.default, {
                        onClick: () => {
                            (0, y.request)({
                                url: "/api/bulk/toggle-join-by-link",
                                method: "post",
                                data: {
                                    bulk: g
                                },
                                success: () => {
                                    p.default.success(`Group is ${v.joinByLinkEnabled?"closed":"open"} to new members!`), (0, C.refetchSpecificBulk)(g)
                                },
                                error: e => (0, y.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "Error switching."
                                    }
                                })
                            })
                        },
                        children: [O ? "Open" : "Close", " group to new members"]
                    }), S.length && v.isActive ? (0, a.jsx)(x.default, {
                        onClick: () => n(!0),
                        children: "Import members from previous group license"
                    }) : null, (0, a.jsx)(x.default, {
                        to: "mailto:groups@gimkit.com",
                        external: !0,
                        children: "Contact support"
                    })]
                })]
            }), (0, a.jsx)(j.default, {
                visible: r,
                currentBulk: g,
                otherBulks: S,
                close: () => n(!1)
            })]
        })
    };
    const I = g.default.div(k || (k = O`
  font-weight: ${0};
  font-size: 30px;
`), v.FontWeights.UltraBold),
        _ = g.default.div(S || (S = O`
  font-size: 18px;
  margin-top: -7px;
`))
})), r.register("1HPaX", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("lfyEM"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DollarOutlined";
    var c = a.forwardRef(l)
})), r.register("lfyEM", (function(t, r) {
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
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"
                }
            }]
        },
        name: "dollar",
        theme: "outlined"
    }
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("bVHCc"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "UsergroupAddOutlined";
    var c = a.forwardRef(l)
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
})), r.register("j0UEl", (function(t, n) {
    e(t.exports, "CardStyle", (function() {
        return m
    })), e(t.exports, "default", (function() {
        return h
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("7ECC6"),
        i = r("fC6cp"),
        s = r("69SUA"),
        l = r("lKmIF"),
        c = r("46bRO"),
        u = r("1YiMb"),
        d = r("2cVVi"),
        f = r("iMOcM"),
        p = r("3nrYE");
    const m = {
            fontFamily: s.Fonts.SFPro,
            color: l.default.Black
        },
        g = e => (0, o.jsx)(a.default, {
            style: {
                ...m,
                minWidth: 215,
                marginLeft: 20
            },
            children: (0, o.jsxs)("div", {
                className: "flex vc",
                children: [(0, o.jsx)(v, {
                    count: e.maxSeats,
                    description: "total seats"
                }), (0, o.jsx)(i.default, {
                    type: "vertical",
                    style: {
                        marginLeft: 20,
                        marginRight: 20
                    }
                }), (0, o.jsx)(v, {
                    count: e.seatsRemaining,
                    description: `${(0,f.plural)("seat",e.seatsRemaining)} remaining`
                })]
            })
        }),
        v = e => (0, o.jsxs)("div", {
            className: "flex flex-column vc",
            children: [(0, o.jsx)("div", {
                style: {
                    fontSize: 23,
                    fontWeight: s.FontWeights.UltraBold
                },
                children: e.count
            }), (0, o.jsx)("div", {
                style: {
                    marginTop: -7,
                    fontSize: 11,
                    opacity: .8
                },
                children: e.description
            })]
        });
    var h = e => {
        const {
            bulkId: t,
            bulk: r
        } = e, n = Math.abs(r.maxSeats - r.seats.length);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(a.default, {
                style: m,
                children: (0, o.jsxs)("div", {
                    className: "flex vc",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [(0, o.jsxs)("div", {
                        children: [(0, o.jsx)("div", {
                            style: {
                                fontSize: 25,
                                fontWeight: s.FontWeights.UltraBold
                            },
                            children: "Members"
                        }), (0, o.jsxs)("div", {
                            style: {
                                fontSize: 15,
                                marginTop: -6
                            },
                            children: ["Members receive ", c.COMPANY_NAME, " Pro covered by this group license"]
                        })]
                    }), !r.hiddenSeatLimit && (0, o.jsx)(g, {
                        maxSeats: r.maxSeats,
                        seatsRemaining: n
                    })]
                })
            }), r.seats.length ? (0, o.jsx)(d.default, {
                style: {
                    marginTop: 10
                },
                children: r.seats.map((e => (0, o.jsx)("div", {
                    children: (0, o.jsx)(u.default, {
                        email: e,
                        remove: () => {
                            return r = e, void(0, f.request)({
                                url: "/api/bulk/remove-member",
                                data: {
                                    bulk: t,
                                    removedMember: r
                                },
                                success: () => (0, p.refetchSpecificBulk)(t),
                                error: e => (0, f.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "Error removing user from license"
                                    }
                                })
                            });
                            var r
                        }
                    })
                }, "member-" + e)))
            }) : (0, o.jsx)(a.default, {
                className: "maxWidth",
                style: {
                    marginTop: 10
                },
                children: "Nobody is a member of this group license...yet!"
            })]
        })
    }
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, a, i, s, l, c, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), s = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var a = o[t.format] || o.default;
                            window.clipboardData.setData(a, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), l.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), a = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
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
})), r.register("fSJip", (function(n, o) {
    e(n.exports, "default", (function() {
        return b
    }));
    var a = r("hxEiv"),
        i = r("7ECC6"),
        s = r("fC6cp"),
        l = r("fBuQJ"),
        c = r("lKmIF"),
        u = r("69SUA"),
        d = r("sgWtV"),
        f = r("iMOcM"),
        p = r("2nCEo"),
        m = r("fywoC"),
        g = r("2FDaO"),
        v = r("3nrYE");
    let h, x, y = e => e;
    var b = e => {
        const [r, n] = m.useState(!1);
        return (0, a.jsx)(l.default, {
            open: e.visible,
            onCancel: e.close,
            width: 650,
            footer: null,
            closable: !0,
            style: {
                top: 25
            },
            children: (0, a.jsxs)(C, {
                children: [(0, a.jsx)(w, {
                    children: "Import members from which group license?"
                }), (0, a.jsx)(s.default, {
                    style: {
                        margin: "30px 0px"
                    }
                }), e.otherBulks.map((o => (0, a.jsxs)(i.default, {
                    style: {
                        marginBottom: 10,
                        color: c.default.Black
                    },
                    className: "maxWidth",
                    onClick: () => {
                        return t = o.id, i = o.name, void(r || (n(!0), (0, f.request)({
                            url: "/api/bulk/members/import",
                            data: {
                                bulk: e.currentBulk,
                                importedBulk: t
                            },
                            success: () => {
                                (0, v.refetchSpecificBulk)(e.currentBulk), l.default.success({
                                    title: "Members imported!",
                                    content: (0, a.jsxs)(a.Fragment, {
                                        children: ["All members from ", (0, a.jsx)("b", {
                                            children: i
                                        }), " have been imported into this group license."]
                                    })
                                })
                            },
                            error: e => {
                                (0, d.throwError)({
                                    title: "Error importing members",
                                    content: "Please try again."
                                })
                            },
                            both: () => {
                                n(!1), e.close()
                            }
                        })));
                        var t, i
                    },
                    hoverable: !0,
                    children: [(0, a.jsx)("div", {
                        style: {
                            fontSize: 18,
                            fontWeight: u.FontWeights.Bold
                        },
                        children: o.name
                    }), (0, a.jsxs)("div", {
                        children: ["Started", " ", t(p)((0, f.dateFromObjectId)(o.id)).format("MMMM Do, YYYY")]
                    })]
                }, `import-sub-${o.id}`)))]
            })
        })
    };
    const C = g.default.div(h || (h = y`
  color: ${0};
  font-family: ${0};
`), c.default.Black, u.Fonts.SFPro),
        w = g.default.div(x || (x = y`
  font-size: 28px;
  font-weight: ${0};
  line-height: 1;
  margin-top: 20px;
`), u.FontWeights.Bold)
})), r.register("aVnTi", (function(e, t) {
    e.exports = Promise.all([import("./" + r("ihc6Q").resolve("fzXqn")), import("./" + r("ihc6Q").resolve("kKpXS")), import("./" + r("ihc6Q").resolve("bRCFZ"))]).then((() => r("jFvxW")))
})), r.register("cS38C", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("1uixS"),
        i = r("2FDaO"),
        s = r("gHmyG"),
        l = r("dlGsk"),
        c = r("iMOcM"),
        u = r("6CRaa");
    let d;
    var f = () => {
        const {
            isLoading: e,
            data: t
        } = (0, a.default)();
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(c.Title, {
                title: "Group Licenses"
            }), (() => {
                if (e) return (0, o.jsx)(p, {
                    children: (0, o.jsx)(s.default, {
                        size: "large"
                    })
                });
                const r = t && Array.isArray(t) ? t : [];
                return r.length ? (0, o.jsx)(l.default, {
                    bulks: r
                }) : (0, o.jsx)(u.default, {})
            })()]
        })
    };
    const p = i.default.div.attrs({
        className: "maxAll flex-center"
    })(d || (d = (e => e)``))
})), r.register("6CRaa", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var o = r("hxEiv"),
        a = r("93yIm");
    r("fywoC");
    var i = r("2FDaO"),
        s = r("46bRO"),
        l = r("lKmIF"),
        c = r("b1oE9"),
        u = r("kyvf1"),
        d = r("dlGsk");
    let f, p, m, g = e => e;
    var v = () => (0, o.jsx)(h, {
        children: (0, o.jsxs)(x, {
            children: [(0, o.jsxs)(d.Title, {
                children: [s.COMPANY_NAME, " Groups"]
            }), (0, o.jsxs)(y, {
                children: ["Welcome to ", s.COMPANY_NAME, " Groups! You don’t manage any group licenses yet. Click the button below to get your group started!"]
            }), (0, o.jsx)(u.default, {
                to: c.GROUP_PRICING,
                className: "maxWidth",
                children: (0, o.jsx)(a.default, {
                    block: !0,
                    size: "large",
                    type: "primary",
                    style: {
                        height: 50,
                        marginTop: 20
                    },
                    children: "Start New Group"
                })
            })]
        })
    });
    const h = i.default.div.attrs({
            className: "maxAll flex-center"
        })(f || (f = g``)),
        x = i.default.div.attrs({
            className: "flex-center flex-column medium-shadow"
        })(p || (p = g`
  width: 80%;
  max-width: 700px;
  margin: 20px;
  background: ${0};
  padding: 45px;
  border-radius: 6px;
`), l.default.White),
        y = i.default.div(m || (m = g`
  font-size: 16px;
  margin-top: 3px;
`))
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("iI4DW"),
        a = r("fywoC"),
        i = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: l
            } = n, c = a.useRef(null), [u, d] = a.useState(0), [f, p] = a.useState(0), [m, g] = (0, o.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: v
            } = a.useContext(i.ConfigContext), h = v(t || "select", s);
            return a.useEffect((() => {
                if (g(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            d(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const o = r ? `.${r(h)}` : `.${h}-dropdown`,
                                a = null === (n = c.current) || void 0 === n ? void 0 : n.querySelector(o);
                            a && (clearInterval(t), e.observe(a))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), a.createElement(i.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, a.createElement("div", {
                ref: c,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: f
                }
            }, a.createElement(e, Object.assign({}, n, {
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
    var o = r("lt5sb"),
        a = r("aWAHQ");
    const i = new(0, o.Keyframes)("antMoveDownIn", {
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
        s = new(0, o.Keyframes)("antMoveDownOut", {
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
        l = new(0, o.Keyframes)("antMoveLeftIn", {
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
        c = new(0, o.Keyframes)("antMoveLeftOut", {
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
        u = new(0, o.Keyframes)("antMoveRightIn", {
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
        d = new(0, o.Keyframes)("antMoveRightOut", {
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
                inKeyframes: new(0, o.Keyframes)("antMoveUpIn", {
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
                outKeyframes: new(0, o.Keyframes)("antMoveUpOut", {
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
                inKeyframes: o,
                outKeyframes: i
            } = f[t];
            return [(0, a.initMotion)(n, o, i, e.motionDurationMid), {
                [`\n        ${n}-enter,\n        ${n}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${n}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), r.register("i5Qjx", (function(n, o) {
    e(n.exports, "SpaceContext", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(n.exports, "default", (function() {
        return h
    }), (function(e) {
        return h = e
    }));
    var a = r("fe1on"),
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
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
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
    const v = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: o
        } = s.useContext(l.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: v,
            className: h,
            rootClassName: x,
            children: y,
            direction: b = "horizontal",
            prefixCls: C,
            split: w,
            style: j,
            wrap: k = !1
        } = e, S = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), O = (0, c.default)(), [E, N] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? g[e] : e || 0
        }(e)))), [u]), M = (0, i.default)(y, {
            keepEmpty: !0
        }), I = void 0 === v && "horizontal" === b ? "center" : v, _ = r("space", C), [P, z] = (0, f.default)(_), A = t(a)(_, z, `${_}-${b}`, {
            [`${_}-rtl`]: "rtl" === o,
            [`${_}-align-${I}`]: I
        }, h, x), B = `${_}-item`, T = "rtl" === o ? "marginLeft" : "marginRight";
        let L = 0;
        const F = M.map(((e, t) => {
                null != e && (L = t);
                const r = e && e.key || `${B}-${t}`;
                return s.createElement(d.default, {
                    className: B,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: T,
                    split: w,
                    wrap: k
                }, e)
            })),
            R = s.useMemo((() => ({
                horizontalSize: E,
                verticalSize: N,
                latestIndex: L,
                supportFlexGap: O
            })), [E, N, L, O]);
        if (0 === M.length) return null;
        const $ = {};
        return k && ($.flexWrap = "wrap", O || ($.marginBottom = -N)), O && ($.columnGap = E, $.rowGap = N), P(s.createElement("div", Object.assign({
            className: A,
            style: Object.assign(Object.assign({}, $), j)
        }, S), s.createElement(m.Provider, {
            value: R
        }, F)))
    };
    v.Compact = u.default;
    var h = v
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("azMeL"),
        i = () => {
            const [e, t] = o.useState(!1);
            return o.useEffect((() => {
                t((0, a.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("i5Qjx");

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
        } = o.useContext(a.SpaceContext);
        let m = {};
        return p || ("vertical" === r ? n < f && (m = {
            marginBottom: u / (l ? 2 : 1)
        }) : m = Object.assign(Object.assign({}, n < f && {
            [i]: u / (l ? 2 : 1)
        }), c && {
            paddingBottom: d
        })), null == s ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: m
        }, s), n < f && l && o.createElement("span", {
            className: `${t}-split`,
            style: m
        }, l))
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
        return a
    }));
    var o = r("fywoC");

    function a(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, o.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, o.useState)((function() {
                return t.matches
            })),
            n = r[0],
            a = r[1];
        return (0, o.useEffect)((function() {
            a(t.matches);
            var e = function(e) {
                return a(e.matches)
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
        o = e.exports && e.exports.__exportStar || function(e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), o(r("coa3i"), e.exports), o(r("exKSe"), e.exports), o(r("4Nv4f"), e.exports)
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
        o = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        a = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var i = a(r("fywoC"));

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
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, n.apply(this, arguments)
        },
        o = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
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
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
            return a(t, e), t
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
            o = s.useRef(),
            a = s.useCallback((function() {
                if (o.current) {
                    var e = o.current.offsetHeight,
                        n = o.current.offsetWidth;
                    e === t.height && n === t.width || r({
                        height: e,
                        width: n
                    })
                }
            }), [t.height, t.width]);
        return s.useLayoutEffect((function() {
            if (o && o.current) {
                var e = new ResizeObserver(a);
                return e.observe(o.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [o, a]), n({
            ref: o
        }, t)
    }
})), r.register("hDWWf", (function(t, r) {
    let n;
    var o;
    e(t.exports, "SiteHeaderTheme", (function() {
        return n
    })), (o = n || (n = {})).light = "light", o.dark = "dark"
})), r.register("hSz8d", (function(t, r) {
    let n;
    var o;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return n
    })), (o = n || (n = {})).none = "none", o.standard = "standard", o.darker = "darker"
})), r.register("9Vz35", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = {
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
})), r.register("kVS28", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("4GmeK"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "LogoutOutlined";
    var c = a.forwardRef(l)
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
})), r.register("9kZfj", (function(t, n) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return a
    }));
    var o = r("hrYih");
    const a = () => "annual-only" === o.default.getFeatureFlag("annual-only-pro")
})), r.register("56tQE", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("fywoC"),
        a = r("3KQc0"),
        i = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = o.useState((() => {
            var r, n;
            const o = e && "current" in e ? e.current : e;
            return o ? [o.offsetWidth, o.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, a.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("6rvT3"),
        a = r("9iNNJ"),
        i = r("3Yjty"),
        s = r("f1PHW");
    let l;
    const c = () => l || (l = function() {
        const e = new Map,
            t = new(0, o.default)((0, s.default)(((t, r) => {
                var n;
                if (1 === t.length) null === (n = e.get(t[0].target)) || void 0 === n || n(t[0], r);
                else
                    for (let n = 0; n < t.length; n++) {
                        var o;
                        null === (o = e.get(t[n].target)) || void 0 === o || o(t[n], r)
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
        return (0, a.default)((() => {
            let t = !1;
            const o = e && "current" in e ? e.current : e;
            if (o) return r.subscribe(o, ((e, r) => {
                t || n.current(e, r)
            })), () => {
                t = !0, r.unsubscribe(o)
            }
        }), [e, r, n]), r.observer
    }
})), r.register("9iNNJ", (function(n, o) {
    e(n.exports, "default", (function() {
        return a
    }));
    var a = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC");
    var a = e => {
        const t = o.useRef(e);
        return o.useEffect((() => {
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
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                t = o, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return n.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, n
    }
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = e => (0, o.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function o(e) {
        var t, r, o = (0, n.lazy)(e),
            a = (0, n.forwardRef)((function(e, r) {
                var a = (0, n.useRef)(null != t ? t : o);
                return (0, n.createElement)(a.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return a.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, a
    }
    e.exports.lazyWithPreload = o, e.exports.default = o
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
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("8N8s4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "QuestionCircleOutlined";
    var c = a.forwardRef(l)
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
    var o = r("fywoC"),
        a = r("bSGy0");
    var i = o.createContext(a.default)
})), r.register("bSGy0", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("g4NpA"),
        a = r("lvpm8");
    var i = {
        login: new(0, o.default),
        navigation: new(0, a.default)
    }
})), r.register("g4NpA", (function(t, n) {
    e(t.exports, "informationTypes", (function() {
        return i
    })), e(t.exports, "default", (function() {
        return k
    }));
    var o = r("kHqmx"),
        a = r("4MuSt");
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
            districtId: v,
            country: h,
            areaOfExpertise: x,
            gradeLevel: y,
            organization: b,
            acceptsLatestPolicies: C,
            authenticated: w
        } = s;
    class j {
        constructor() {
            this.userExists = l, this.email = c, this.accountType = u, this.googleToken = d, this.firstName = f, this.lastName = p, this.password = m, this.schoolId = g, this.districtId = v, this.country = h, this.areaOfExpertise = x, this.gradeLevel = y, this.organization = b, this.acceptsLatestPolicies = C, this.authenticated = w, this.informationNeeded = a.observable.array([i.email]), this.reset = () => {
                Object.keys(s).forEach((e => this[e] = s[e])), this.informationNeeded.replace([i.email])
            }, (0, a.makeObservable)(this)
        }
    }(0, o.__decorate)([a.observable], j.prototype, "userExists", void 0), (0, o.__decorate)([a.observable], j.prototype, "email", void 0), (0, o.__decorate)([a.observable], j.prototype, "accountType", void 0), (0, o.__decorate)([a.observable], j.prototype, "googleToken", void 0), (0, o.__decorate)([a.observable], j.prototype, "firstName", void 0), (0, o.__decorate)([a.observable], j.prototype, "lastName", void 0), (0, o.__decorate)([a.observable], j.prototype, "password", void 0), (0, o.__decorate)([a.observable], j.prototype, "schoolId", void 0), (0, o.__decorate)([a.observable], j.prototype, "districtId", void 0), (0, o.__decorate)([a.observable], j.prototype, "country", void 0), (0, o.__decorate)([a.observable], j.prototype, "areaOfExpertise", void 0), (0, o.__decorate)([a.observable], j.prototype, "gradeLevel", void 0), (0, o.__decorate)([a.observable], j.prototype, "organization", void 0), (0, o.__decorate)([a.observable], j.prototype, "acceptsLatestPolicies", void 0), (0, o.__decorate)([a.observable], j.prototype, "authenticated", void 0), (0, o.__decorate)([a.observable], j.prototype, "informationNeeded", void 0), (0, o.__decorate)([a.action], j.prototype, "reset", void 0);
    var k = j
})), r.register("lvpm8", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var o = r("kHqmx"),
        a = r("4MuSt");
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
            classJoiningTeacherName: v
        } = i;
    class h {
        constructor() {
            this.currentStage = s, this.emailSignInBlocked = l, this.creatingAccount = c, this.loggingIn = u, this.updatingAccountInformation = d, this.loginError = f, this.redirectUri = p, this.classJoiningId = m, this.classJoiningName = g, this.classJoiningTeacherName = v, this.reset = () => {
                Object.keys(i).forEach((e => this[e] = i[e]))
            }, (0, a.makeObservable)(this)
        }
    }(0, o.__decorate)([a.observable], h.prototype, "currentStage", void 0), (0, o.__decorate)([a.observable], h.prototype, "emailSignInBlocked", void 0), (0, o.__decorate)([a.observable], h.prototype, "creatingAccount", void 0), (0, o.__decorate)([a.observable], h.prototype, "loggingIn", void 0), (0, o.__decorate)([a.observable], h.prototype, "updatingAccountInformation", void 0), (0, o.__decorate)([a.observable], h.prototype, "loginError", void 0), (0, o.__decorate)([a.observable], h.prototype, "redirectUri", void 0), (0, o.__decorate)([a.observable], h.prototype, "classJoiningId", void 0), (0, o.__decorate)([a.observable], h.prototype, "classJoiningName", void 0), (0, o.__decorate)([a.observable], h.prototype, "classJoiningTeacherName", void 0), (0, o.__decorate)([a.action], h.prototype, "reset", void 0);
    var x = h
})), r.register("9ZLc2", (function(t, r) {
    let n;
    var o;
    e(t.exports, "default", (function() {
        return a
    })), (o = n || (n = {})).email = "email", o.password = "password", o.accountType = "accountType", o.studentSpecificInfo = "studentSpecificInfo", o.nameAndPassword = "nameAndPassword", o.school = "school", o.educatorSpecificInfo = "educatorSpecificInfo", o.nonSchoolSpecificInfo = "nonSchoolSpecificInfo", o.acceptPolicies = "acceptPolicies", o.verifyClass = "verifyClass";
    var a = n
})), r.register("7abSH", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("lpEVe"),
        i = r("93yIm");
    var s = (0, a.observer)((e => (0, o.jsx)(i.default, {
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
}));