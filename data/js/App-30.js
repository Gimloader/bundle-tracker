const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/BulkAnalytics.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/useQuery.js", "assets/BarChartOutlined.js", "assets/progress.js", "assets/CheckOutlined.js", "assets/index-5.js", "assets/throttle.js", "assets/toNumber.js", "assets/toInteger.js", "assets/App-2.js", "assets/Sizes.js", "assets/AccessibleAnchor.js", "assets/motion.js", "assets/index-1.js", "assets/price.js", "assets/TrackPostHogEvent.js", "assets/index-2.js", "assets/index-3.js", "assets/index-4.js", "assets/context.js", "assets/StarOutlined.js", "assets/Paper.js", "assets/DeleteOutlined.js", "assets/react-flip-move.es.js", "assets/EmailStage.js", "assets/mobxreact.esm.js", "assets/ContinueButton.js", "assets/ErrorMessage.js", "assets/NavigateTo.js", "assets/index-12.js", "assets/UsergroupAddOutlined.js", "assets/App-4.js", "assets/Shortcut.js", "assets/Names.js", "assets/index-6.js", "assets/FontAwesomeIcon.js", "assets/index-15.js", "assets/colors.js", "assets/useWarningOnMountInDevelopment.js", "assets/index-10.js", "assets/move.js"]))) => i.map(i => d[i]);
import {
    r as m,
    I as ae,
    _ as le,
    cc as ce,
    y as W,
    j as e,
    e as u,
    d as l,
    F as x,
    C as M,
    af as D,
    B as k,
    a_ as de,
    b as j,
    Y as me,
    c as g,
    U as A,
    a as w,
    h as N,
    l as ue,
    M as $,
    a4 as xe,
    t as E,
    D as C,
    q as pe,
    aX as he,
    aa as ge,
    T as z,
    S as _,
    aT as fe,
    a$ as Y,
    p as je,
    n as ve,
    cd as be
} from "./_index.js";
import {
    u as V
} from "./useQuery.js";
import {
    A as y
} from "./AccessibleAnchor.js";
import {
    P as ye
} from "./Paper.js";
import {
    T as q
} from "./index-5.js";
import {
    R as ke
} from "./DeleteOutlined.js";
import {
    e as Q
} from "./react-flip-move.es.js";
import {
    v as we
} from "./EmailStage.js";
import {
    E as Se
} from "./ErrorMessage.js";
import {
    I as L
} from "./index-3.js";
import {
    s as T
} from "./index-4.js";
import {
    N as H
} from "./NavigateTo.js";
import {
    T as Ce
} from "./index-12.js";
import {
    R as Me
} from "./StarOutlined.js";
import {
    c as Be
} from "./index-2.js";
import {
    R as Ne
} from "./UsergroupAddOutlined.js";
import {
    S as Ae
} from "./App-4.js";
import "./mobxreact.esm.js";
import "./ContinueButton.js";
import "./context.js";
import "./Shortcut.js";
import "./Names.js";
import "./index-1.js";
import "./index-6.js";
import "./FontAwesomeIcon.js";
import "./App-2.js";
import "./Sizes.js";
import "./motion.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-10.js";
import "./move.js";
var Ie = {
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
    },
    $e = function(s, n) {
        return m.createElement(ae, le({}, s, {
            ref: n,
            icon: Ie
        }))
    },
    Re = m.forwardRef($e);
const P = new ce,
    K = ["specific-bulk"],
    ze = t => V([K, t], () => W({
        url: "/api/bulk/fetch/" + t
    })),
    I = t => P.refetchQueries([K, t]),
    Te = "#388e3c",
    Ee = "#f44336",
    Le = t => {
        const {
            id: s,
            name: n,
            startDate: i,
            isActive: r
        } = t;
        return e.jsxs(Pe, {
            to: `/groups/${s}`,
            children: [e.jsx(Fe, {
                style: {
                    background: r ? Te : Ee
                },
                children: r ? "Active" : "Inactive"
            }), e.jsx(Oe, {
                children: n
            }), i ? e.jsxs(Ge, {
                children: ["Started on ", i]
            }) : null]
        })
    },
    Pe = l(y).attrs({
        className: "flex-column"
    })`
  padding-top: 0px;
  border: 1px solid;
  border-color: ${u.BorderGray};
  border-radius: 3px;
  align-items: flex-start;
  padding: 24px;
  transition: background 0.15s;
  margin-bottom: 10px;
  color: ${u.Black};
  text-decoration: none;
  &:hover {
    background: rgba(232, 245, 233, 0.2);
    cursor: pointer;
    color: ${u.Black};
  }
  &:last-of-type {
    margin-bottom: 0px;
  }
`,
    Fe = l.div`
  font-style: italic;
  padding: 4px 16px;
  border-radius: 8px;
  color: ${u.White};
  margin-bottom: 9px;
  font-size: 12px;
`,
    Oe = l.div`
  font-weight: ${x.Bold};
  font-size: 16px;
`,
    Ge = l.div`
  font-style: italic;
  font-size: 13px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`,
    Ue = t => e.jsx(J, {
        children: e.jsxs(X, {
            children: [e.jsxs("div", {
                style: {
                    textAlign: "center"
                },
                className: "flex-column flex-center",
                children: [e.jsxs(Z, {
                    children: [M, " Groups"]
                }), e.jsxs(We, {
                    children: ["Welcome to ", M, " Groups! Below are the group licenses you manage. Click into a license to invite members, add managers, view usage analytics, and more!"]
                }), e.jsx(y, {
                    to: D,
                    style: {
                        marginBottom: 30,
                        marginTop: -10
                    },
                    children: e.jsx(k, {
                        size: "large",
                        type: "primary",
                        icon: e.jsx(de, {}),
                        children: "Start New Group"
                    })
                })]
            }), e.jsx(ee, {
                children: t.bulks.map(s => e.jsx(Le, {
                    id: s.id,
                    name: s.name,
                    isActive: s.isActive,
                    startDate: j(me(s.id)).format("MMMM Do, YYYY")
                }, s.id + "-item"))
            })]
        })
    }),
    J = l.div.attrs({
        className: "flex-column vc"
    })`
  flex: 1;
  padding: 35px 45px;
  padding-bottom: 0px;
  overflow: hidden;
`,
    X = l.div.attrs({
        className: "flex-column"
    })`
  flex: 1;
  width: 90%;
  max-width: 1200px;
`,
    Z = l.div`
  font-size: 54px;
  font-weight: ${x.UltraBold};
`,
    We = l.div`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 700px;
`,
    ee = l(ye).attrs({
        className: "maxWidth"
    })`
  flex: 1;
  padding: 30px;
  border-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`,
    te = t => e.jsx(g, {
        style: {
            fontFamily: A.SFPro,
            color: u.Black,
            marginBottom: 5
        },
        children: e.jsxs("div", {
            className: "flex maxWidth vc",
            style: {
                justifyContent: "space-between"
            },
            children: [e.jsx("div", {
                children: t.email
            }), e.jsx("div", {
                children: e.jsx(q, {
                    title: "Remove",
                    children: e.jsx(ke, {
                        onClick: t.remove,
                        style: {
                            cursor: "pointer"
                        }
                    })
                })
            })]
        })
    }),
    F = {
        fontFamily: A.SFPro,
        color: u.Black
    },
    De = t => {
        const {
            bulk: s,
            bulkId: n
        } = t, [i, r] = m.useState(""), [o, c] = m.useState(!1), [p, f] = m.useState(null), d = a => {
            r(a.target.value.toLowerCase()), f(null)
        }, h = i && we(i), v = () => {
            h && (c(!0), w({
                url: "/api/bulk/add-admin",
                data: {
                    bulk: n,
                    newAdmin: i
                },
                success: () => {
                    I(n), T.success("Manager added!"), r("")
                },
                error: a => {
                    if (a && a.message && a.message.text && a.message.text === "USER NOT FOUND") {
                        N({
                            title: "User not found",
                            content: "This user does not exist on Gimkit yet. In order to be an manager for this license, they will need to create a free account first."
                        });
                        return
                    }
                    f(a)
                },
                both: () => c(!1)
            }))
        }, b = a => {
            if (s.owners.length < 2) {
                N({
                    title: "Cannot remove",
                    content: "Please add another admin before removing yourself"
                });
                return
            }
            if (ue().email !== a) {
                N({
                    title: "Cannot remove",
                    content: "Managers can only remove themselves"
                });
                return
            }
            $.confirm({
                title: "Are you sure you want to remove yourself as a manager?",
                onOk: () => {
                    w({
                        url: "/api/bulk/remove-admin",
                        data: {
                            bulk: n
                        },
                        success: () => window.location.reload(),
                        error: () => N({
                            title: "Error removing user from license"
                        })
                    })
                }
            })
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(g, {
                style: F,
                children: e.jsxs("div", {
                    children: [e.jsx("div", {
                        style: {
                            fontSize: 25,
                            fontWeight: x.UltraBold
                        },
                        children: "Managers"
                    }), e.jsx("div", {
                        style: {
                            fontSize: 15,
                            marginTop: -6
                        },
                        children: "Managers can remove members, add other managers, and modify group options"
                    })]
                })
            }), e.jsxs(g, {
                style: {
                    ...F,
                    marginTop: 10,
                    marginBottom: 10
                },
                children: [e.jsx("div", {
                    style: {
                        fontWeight: x.UltraBold,
                        fontSize: 25
                    },
                    children: "Add Manager"
                }), e.jsx(L, {
                    size: "large",
                    placeholder: "Manager email...",
                    style: {
                        width: "100%",
                        marginTop: -1
                    },
                    value: i,
                    onChange: d,
                    onPressEnter: v
                }), e.jsx(k, {
                    style: {
                        width: "100%",
                        marginTop: 5
                    },
                    type: "primary",
                    disabled: !h,
                    loading: o,
                    onClick: v,
                    children: "Add"
                }), e.jsx(Se, {
                    error: p,
                    style: {
                        marginTop: 5
                    }
                })]
            }), e.jsx(Q, {
                children: s.owners.map(a => e.jsx("div", {
                    children: e.jsx(te, {
                        email: a,
                        remove: () => b(a)
                    })
                }, "admin-" + a))
            })]
        })
    },
    se = ["all-bulks"],
    re = () => V(se, () => W({
        url: "/api/bulk/fetch-all"
    })),
    _e = () => {
        P.invalidateQueries(se)
    },
    Ye = t => {
        const {
            bulk: s,
            bulkId: n
        } = t, [i, r] = m.useState(!1), [o, c] = m.useState(!1), {
            isActive: p,
            name: f,
            expiration: d,
            statusText: h
        } = s, v = () => c(!0), b = () => c(!1), a = B => {
            w({
                url: "/api/bulk/rename",
                data: {
                    id: n,
                    name: B
                }
            }), I(n), _e()
        }, ne = () => p ? d ? `Expires on ${j.unix(d).format("L")}` : "Paid with credit/debit card" : d && j().isAfter(j.unix(d)) ? `Expired on ${j.unix(d).format("L")}` : "Inactive group license", ie = () => p ? h || "Active" : d && j().isAfter(j.unix(d)) ? "Inactive" : h || "Inactive", oe = () => {
            r(!0), w({
                url: "/api/quote/createFromRenewal",
                method: "post",
                data: {
                    id: n
                },
                success: B => {
                    H(`/quote/${B}`)
                },
                error: B => {
                    E({
                        e: B,
                        default: {
                            title: "Error generating a renewal quote. Please try again later"
                        }
                    })
                },
                both: () => r(!1)
            })
        };
        return e.jsx(e.Fragment, {
            children: e.jsxs("div", {
                className: "maxWidth",
                style: {
                    paddingBottom: 39
                },
                children: [e.jsxs("div", {
                    className: "maxWidth flex vc",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [e.jsxs("div", {
                        children: [e.jsxs("div", {
                            className: "flex vc",
                            style: {
                                marginBottom: -11
                            },
                            children: [e.jsx("div", {
                                style: {
                                    fontWeight: x.UltraBold,
                                    fontSize: 34,
                                    cursor: "pointer"
                                },
                                onClick: v,
                                children: e.jsx(q, {
                                    title: "Rename Group License",
                                    placement: "topLeft",
                                    children: f
                                })
                            }), e.jsx(Ce, {
                                style: {
                                    marginLeft: 10
                                },
                                color: p ? "green" : "red",
                                children: ie()
                            })]
                        }), e.jsx("div", {
                            style: {
                                fontSize: 18,
                                opacity: .8
                            },
                            children: ne()
                        })]
                    }), e.jsx("div", {
                        children: s.allowedToRenew ? e.jsx(k, {
                            size: "large",
                            type: "primary",
                            onClick: oe,
                            loading: i,
                            icon: e.jsx(Me, {}),
                            children: "Renew"
                        }) : null
                    })]
                }), s.isActive ? null : e.jsx(xe, {
                    type: "error",
                    message: "Group License No Longer Active",
                    description: e.jsxs(e.Fragment, {
                        children: ["To reactivate this group license,", " ", e.jsx(y, {
                            to: "mailto:groups@gimkit.com",
                            external: !0,
                            children: "contact support."
                        })]
                    }),
                    style: {
                        marginTop: 15
                    },
                    showIcon: !0
                }), e.jsx(Ve, {
                    open: o,
                    close: b,
                    onNewName: a
                })]
            })
        })
    },
    Ve = t => {
        const [s, n] = m.useState(""), i = !!s, r = c => n(c.target.value), o = () => {
            i && (t.onNewName(s), t.close())
        };
        return e.jsx($, {
            open: t.open,
            closable: !0,
            onCancel: t.close,
            title: "Rename Group",
            afterClose: () => n(""),
            footer: e.jsxs(e.Fragment, {
                children: [e.jsx(k, {
                    onClick: t.close,
                    children: "Cancel"
                }), e.jsx(k, {
                    disabled: !i,
                    type: "primary",
                    onClick: o,
                    children: "Rename"
                })]
            }),
            children: e.jsx(L, {
                size: "large",
                style: {
                    width: "100%"
                },
                autoFocus: !0,
                placeholder: "New group name...",
                value: s,
                maxLength: 32,
                onChange: r,
                onPressEnter: o
            })
        })
    },
    R = {
        fontFamily: A.SFPro,
        color: u.Black
    },
    qe = t => e.jsx(g, {
        style: {
            ...R,
            minWidth: 215,
            marginLeft: 20
        },
        children: e.jsxs("div", {
            className: "flex vc",
            children: [e.jsx(O, {
                count: t.maxSeats,
                description: "total seats"
            }), e.jsx(C, {
                type: "vertical",
                style: {
                    marginLeft: 20,
                    marginRight: 20
                }
            }), e.jsx(O, {
                count: t.seatsRemaining,
                description: `${pe("seat",t.seatsRemaining)} remaining`
            })]
        })
    }),
    O = t => e.jsxs("div", {
        className: "flex flex-column vc",
        children: [e.jsx("div", {
            style: {
                fontSize: 23,
                fontWeight: x.UltraBold
            },
            children: t.count
        }), e.jsx("div", {
            style: {
                marginTop: -7,
                fontSize: 11,
                opacity: .8
            },
            children: t.description
        })]
    }),
    Qe = t => {
        const {
            bulkId: s,
            bulk: n
        } = t, i = Math.abs(n.maxSeats - n.seats.length), r = o => {
            w({
                url: "/api/bulk/remove-member",
                data: {
                    bulk: s,
                    removedMember: o
                },
                success: () => I(s),
                error: c => E({
                    e: c,
                    default: {
                        title: "Error removing user from license"
                    }
                })
            })
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(g, {
                style: R,
                children: e.jsxs("div", {
                    className: "flex vc",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [e.jsxs("div", {
                        children: [e.jsx("div", {
                            style: {
                                fontSize: 25,
                                fontWeight: x.UltraBold
                            },
                            children: "Members"
                        }), e.jsxs("div", {
                            style: {
                                fontSize: 15,
                                marginTop: -6
                            },
                            children: ["Members receive ", M, " Pro covered by this group license"]
                        })]
                    }), !n.hiddenSeatLimit && e.jsx(qe, {
                        maxSeats: n.maxSeats,
                        seatsRemaining: i
                    })]
                })
            }), n.seats.length ? e.jsx(Q, {
                style: {
                    marginTop: 10
                },
                children: n.seats.map(o => e.jsx("div", {
                    children: e.jsx(te, {
                        email: o,
                        remove: () => r(o)
                    })
                }, "member-" + o))
            }) : e.jsx(g, {
                className: "maxWidth",
                style: {
                    marginTop: 10
                },
                children: "Nobody is a member of this group license...yet!"
            })]
        })
    },
    He = t => {
        const [s, n] = m.useState(!1), i = (r, o) => {
            s || (n(!0), w({
                url: "/api/bulk/members/import",
                data: {
                    bulk: t.currentBulk,
                    importedBulk: r
                },
                success: () => {
                    I(t.currentBulk), $.success({
                        title: "Members imported!",
                        content: e.jsxs(e.Fragment, {
                            children: ["All members from ", e.jsx("b", {
                                children: o
                            }), " have been imported into this group license."]
                        })
                    })
                },
                error: c => {
                    N({
                        title: "Error importing members",
                        content: "Please try again."
                    })
                },
                both: () => {
                    n(!1), t.close()
                }
            }))
        };
        return e.jsx($, {
            open: t.visible,
            onCancel: t.close,
            width: 650,
            footer: null,
            closable: !0,
            style: {
                top: 25
            },
            children: e.jsxs(Ke, {
                children: [e.jsx(Je, {
                    children: "Import members from which group license?"
                }), e.jsx(C, {
                    style: {
                        margin: "30px 0px"
                    }
                }), t.otherBulks.map(r => e.jsxs(g, {
                    style: {
                        marginBottom: 10,
                        color: u.Black
                    },
                    className: "maxWidth",
                    onClick: () => i(r.id, r.name),
                    hoverable: !0,
                    children: [e.jsx("div", {
                        style: {
                            fontSize: 18,
                            fontWeight: x.Bold
                        },
                        children: r.name
                    }), e.jsxs("div", {
                        children: ["Started", " ", j(he(r.id)).format("MMMM Do, YYYY")]
                    })]
                }, `import-sub-${r.id}`))]
            })
        })
    },
    Ke = l.div`
  color: ${u.Black};
  font-family: ${A.SFPro};
`,
    Je = l.div`
  font-size: 28px;
  font-weight: ${x.Bold};
  line-height: 1;
  margin-top: 20px;
`,
    G = {
        ...R,
        width: "calc(50% - 4px)",
        flex: 1
    },
    U = {
        textAlign: "center",
        fontSize: 32
    },
    Xe = t => {
        const [s, n] = m.useState(!1), i = re().data, {
            bulkId: r,
            bulk: o
        } = t, c = `${ge()}/group/join/${r}`, p = () => {
            Be(c), T.success("Link copied to clipboard!")
        }, f = () => {
            w({
                url: "/api/bulk/toggle-join-by-link",
                method: "post",
                data: {
                    bulk: r
                },
                success: () => {
                    T.success(`Group is ${o.joinByLinkEnabled?"closed":"open"} to new members!`), I(r)
                },
                error: a => E({
                    e: a,
                    default: {
                        title: "Error switching."
                    }
                })
            })
        }, d = () => n(!0), h = () => n(!1), v = (i || []).filter(a => a.id !== r), b = !o.joinByLinkEnabled;
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                style: R,
                children: [e.jsxs("div", {
                    style: {
                        opacity: b ? .6 : 1,
                        pointerEvents: b ? "none" : "auto"
                    },
                    children: [e.jsx(Ze, {
                        children: "Invite"
                    }), e.jsx(et, {
                        children: "Get educators under your group license! Share the invite link below to have them automatically join this group."
                    }), e.jsxs("div", {
                        className: "maxWidth flex vc",
                        style: {
                            marginTop: 7
                        },
                        children: [e.jsx(L, {
                            value: c,
                            readOnly: !0,
                            size: "large"
                        }), e.jsx(k, {
                            onClick: p,
                            style: {
                                marginLeft: 10
                            },
                            type: "primary",
                            size: "large",
                            children: "Copy Link"
                        })]
                    }), e.jsx(C, {}), e.jsxs("div", {
                        className: "flex",
                        children: [e.jsxs(g, {
                            style: G,
                            hoverable: !0,
                            bodyStyle: U,
                            className: "flex hc vc flex-column",
                            children: [e.jsx(Re, {}), e.jsx(C, {}), e.jsxs("div", {
                                style: {
                                    fontSize: 16
                                },
                                children: [M, " Pro subscribers who use this link to join your group license will be refunded automatically for their unused subscription time."]
                            })]
                        }), e.jsx("div", {
                            style: {
                                width: 8
                            }
                        }), e.jsxs(g, {
                            style: G,
                            hoverable: !0,
                            bodyStyle: U,
                            className: "flex hc vc flex-column",
                            children: [e.jsx(Ne, {}), e.jsx(C, {}), e.jsxs("div", {
                                style: {
                                    fontSize: 16
                                },
                                children: ["You can view and remove members by clicking the ", e.jsx("b", {
                                    children: "Members"
                                }), " ", "tab above."]
                            })]
                        })]
                    }), e.jsx(C, {})]
                }), e.jsxs("div", {
                    className: "flex flex-column",
                    children: [e.jsxs(y, {
                        onClick: f,
                        children: [b ? "Open" : "Close", " group to new members"]
                    }), v.length && o.isActive ? e.jsx(y, {
                        onClick: d,
                        children: "Import members from previous group license"
                    }) : null, e.jsx(y, {
                        to: "mailto:groups@gimkit.com",
                        external: !0,
                        children: "Contact support"
                    })]
                })]
            }), e.jsx(He, {
                visible: s,
                currentBulk: r,
                otherBulks: v,
                close: h
            })]
        })
    },
    Ze = l.div`
  font-weight: ${x.UltraBold};
  font-size: 30px;
`,
    et = l.div`
  font-size: 18px;
  margin-top: -7px;
`,
    tt = m.lazy(() => je(() => import("./BulkAnalytics.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]))),
    {
        TabPane: S
    } = Y,
    st = t => {
        const {
            bulkId: s
        } = t, [n, i] = m.useState("invite"), {
            data: r,
            error: o,
            isLoading: c
        } = ze(s);
        if (c) return e.jsxs("div", {
            style: {
                flex: 1
            },
            className: "flex-center",
            children: [e.jsx(z, {
                title: "Group License"
            }), e.jsx(_, {
                size: "large"
            })]
        });
        if (o) return H(fe), null;
        const p = f => {
            const d = f;
            if (d === "invoice") {
                r.invoiceUrl && window.open(r.invoiceUrl);
                return
            }
            if (d === "receipt") {
                r.receiptUrl && window.open(r.receiptUrl);
                return
            }
            i(d)
        };
        return e.jsxs(J, {
            children: [e.jsx(z, {
                title: `${r.name} | Group License`
            }), e.jsxs(X, {
                children: [e.jsx(Ye, {
                    bulk: r,
                    bulkId: t.bulkId
                }), e.jsx(ee, {
                    children: e.jsxs(Y, {
                        type: "card",
                        activeKey: n,
                        onChange: p,
                        children: [e.jsx(S, {
                            tab: "Invite",
                            children: e.jsx(Xe, {
                                bulk: r,
                                bulkId: s
                            })
                        }, "invite"), e.jsx(S, {
                            tab: "Members",
                            children: e.jsx(Qe, {
                                bulk: r,
                                bulkId: s
                            })
                        }, "members"), e.jsx(S, {
                            tab: "Managers",
                            children: e.jsx(De, {
                                bulk: r,
                                bulkId: s
                            })
                        }, "managers"), e.jsx(S, {
                            tab: "Usage Report",
                            children: e.jsx(m.Suspense, {
                                fallback: null,
                                children: e.jsx(tt, {
                                    bulkId: s
                                })
                            })
                        }, "analytics"), r.receiptUrl ? e.jsx(S, {
                            tab: "View Receipt"
                        }, "receipt") : null, r.invoiceUrl ? e.jsx(S, {
                            tab: "View Invoice"
                        }, "invoice") : null]
                    })
                })]
            })]
        })
    },
    rt = () => e.jsx(nt, {
        children: e.jsxs(it, {
            children: [e.jsxs(Z, {
                children: [M, " Groups"]
            }), e.jsxs(ot, {
                children: ["Welcome to ", M, " Groups! You don’t manage any group licenses yet. Click the button below to get your group started!"]
            }), e.jsx(y, {
                to: D,
                className: "maxWidth",
                children: e.jsx(k, {
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
    }),
    nt = l.div.attrs({
        className: "maxAll flex-center"
    })``,
    it = l.div.attrs({
        className: "flex-center flex-column medium-shadow"
    })`
  width: 80%;
  max-width: 700px;
  margin: 20px;
  background: ${u.White};
  padding: 45px;
  border-radius: 6px;
`,
    ot = l.div`
  font-size: 16px;
  margin-top: 3px;
`,
    at = () => {
        const {
            isLoading: t,
            data: s
        } = re(), n = () => {
            if (t) return e.jsx(lt, {
                children: e.jsx(_, {
                    size: "large"
                })
            });
            const i = s && Array.isArray(s) ? s : [];
            return i.length ? e.jsx(Ue, {
                bulks: i
            }) : e.jsx(rt, {})
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(z, {
                title: "Group Licenses"
            }), n()]
        })
    },
    lt = l.div.attrs({
        className: "maxAll flex-center"
    })``,
    Yt = () => {
        const {
            id: t
        } = ve(), s = t;
        return e.jsx(be, {
            client: P,
            children: e.jsxs(ct, {
                children: [e.jsx(Ae, {
                    includeSpacer: !0
                }), s ? e.jsx(st, {
                    bulkId: s
                }) : e.jsx(at, {})]
            })
        })
    },
    ct = l.div.attrs({
        className: "flex-column"
    })`
  flex: 1;
  color: ${u.Black};
  background: ${u.Snow};
  font-family: ${A.SFPro};
`;
export {
    Yt as
    default
};