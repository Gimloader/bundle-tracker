const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/BulkAnalytics.js", "assets/rolldown-runtime.js", "assets/utils.js", "assets/dist-1.js", "assets/react-1.js", "assets/modal-1.js", "assets/assertThisInitialized.js", "assets/Compact.js", "assets/color.js", "assets/ContextIsolator.js", "assets/dist-2.js", "assets/wrapNativeSuper.js", "assets/InfoCircleFilled.js", "assets/compact-item.js", "assets/useLocale.js", "assets/useCSSVarCls.js", "assets/pickAttrs.js", "assets/button-1.js", "assets/PurePanel.js", "assets/Company.js", "assets/Paths.js", "assets/decorate.js", "assets/jsx-runtime.js", "assets/progress.js", "assets/tooltip-1.js", "assets/es-1.js", "assets/es-2.js", "assets/_index.js", "assets/dist-3.js", "assets/spin.js", "assets/QueryClientProvider.js", "assets/queryClient.js", "assets/infiniteQueryBehavior.js", "assets/index-Tu04tXLf.css", "assets/CheckOutlined.js", "assets/BarChartOutlined.js", "assets/useQuery.js", "assets/clsx.js", "assets/_baseAssignValue.js", "assets/toNumber.js", "assets/toInteger.js", "assets/tiny-invariant.js"]))) => i.map(i => d[i]);
import {
    o as e,
    r as t
} from "./rolldown-runtime.js";
import {
    C as n,
    E as r,
    G as i,
    Q as a,
    S as o,
    a as s,
    h as c,
    o as l,
    t as u,
    u as d,
    w as f
} from "./utils.js";
import {
    t as p
} from "./react-1.js";
import {
    c as m,
    s as h
} from "./assertThisInitialized.js";
import {
    l as g
} from "./dist-3.js";
import {
    r as ee
} from "./compact-item.js";
import {
    t as _
} from "./tooltip-1.js";
import {
    t as v
} from "./message.js";
import {
    t as y
} from "./modal-1.js";
import {
    t as b
} from "./button-1.js";
import {
    t as x
} from "./input.js";
import {
    n as te,
    t as S
} from "./tabs.js";
import {
    t as C
} from "./card.js";
import {
    t as w
} from "./spin.js";
import {
    t as ne
} from "./DeleteOutlined.js";
import {
    t as re
} from "./App-4.js";
import {
    t as ie
} from "./StarOutlined.js";
import {
    t as ae
} from "./UsergroupAddOutlined.js";
import {
    t as oe
} from "./tag.js";
import {
    t as se
} from "./copy-to-clipboard.js";
import {
    n as T
} from "./Company.js";
import {
    E,
    w as ce
} from "./Paths.js";
import {
    t as le
} from "./jsx-runtime.js";
import {
    t as ue
} from "./QueryClientProvider.js";
import {
    t as de
} from "./queryClient.js";
import {
    t as D
} from "./useQuery.js";
import {
    b as fe,
    c as O,
    h as pe,
    l as k,
    n as A,
    s as j,
    y as M
} from "./_index.js";
import {
    t as N
} from "./AccessibleAnchor.js";
import {
    t as me
} from "./Paper.js";
import {
    t as P
} from "./react-flip-move.es.js";
import {
    t as he
} from "./ErrorMessage.js";
import {
    n as ge
} from "./EmailStage.js";
import {
    t as F
} from "./NavigateTo.js";
var _e = {
    icon: {
        tag: `svg`,
        attrs: {
            viewBox: `64 64 896 896`,
            focusable: `false`
        },
        children: [{
            tag: `path`,
            attrs: {
                d: `M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z`
            }
        }]
    },
    name: `dollar`,
    theme: `outlined`
};
m();
var I = e(p()),
    ve = I.forwardRef(function(e, t) {
        return I.createElement(ee, h({}, e, {
            ref: t,
            icon: _e
        }))
    }),
    L = new de,
    R = [`specific-bulk`],
    ye = e => D([R, e], () => f({
        url: `/api/bulk/fetch/` + e
    })),
    z = e => L.refetchQueries([R, e]),
    B = e(a()),
    V = le(),
    be = `#388e3c`,
    xe = `#f44336`,
    Se = e => {
        let {
            id: t,
            name: n,
            startDate: r,
            isActive: i
        } = e;
        return (0, V.jsxs)(Ce, {
            to: `/groups/${t}`,
            children: [(0, V.jsx)(we, {
                style: {
                    background: i ? be : xe
                },
                children: i ? `Active` : `Inactive`
            }), (0, V.jsx)(Te, {
                children: n
            }), r ? (0, V.jsxs)(Ee, {
                children: [`Started on `, r]
            }) : null]
        })
    },
    Ce = k(N).attrs({
        className: `flex-column`
    })`
  padding-top: 0px;
  border: 1px solid;
  border-color: ${A.BorderGray};
  border-radius: 3px;
  align-items: flex-start;
  padding: 24px;
  transition: background 0.15s;
  margin-bottom: 10px;
  color: ${A.Black};
  text-decoration: none;
  &:hover {
    background: rgba(232, 245, 233, 0.2);
    cursor: pointer;
    color: ${A.Black};
  }
  &:last-of-type {
    margin-bottom: 0px;
  }
`,
    we = k.div`
  font-style: italic;
  padding: 4px 16px;
  border-radius: 8px;
  color: ${A.White};
  margin-bottom: 9px;
  font-size: 12px;
`,
    Te = k.div`
  font-weight: ${j.Bold};
  font-size: 16px;
`,
    Ee = k.div`
  font-style: italic;
  font-size: 13px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`,
    De = e => (0, V.jsx)(H, {
        children: (0, V.jsxs)(U, {
            children: [(0, V.jsxs)(`div`, {
                style: {
                    textAlign: `center`
                },
                className: `flex-column flex-center`,
                children: [(0, V.jsxs)(W, {
                    children: [T, ` Groups`]
                }), (0, V.jsxs)(Oe, {
                    children: [`Welcome to `, T, ` Groups! Below are the group licenses you manage. Click into a license to invite members, add managers, view usage analytics, and more!`]
                }), (0, V.jsx)(N, {
                    to: E,
                    style: {
                        marginBottom: 30,
                        marginTop: -10
                    },
                    children: (0, V.jsx)(b, {
                        size: `large`,
                        type: `primary`,
                        icon: (0, V.jsx)(te, {}),
                        children: `Start New Group`
                    })
                })]
            }), (0, V.jsx)(G, {
                children: e.bulks.map(e => (0, V.jsx)(Se, {
                    id: e.id,
                    name: e.name,
                    isActive: e.isActive,
                    startDate: (0, B.default)(s(e.id)).format(`MMMM Do, YYYY`)
                }, e.id + `-item`))
            })]
        })
    }),
    H = k.div.attrs({
        className: `flex-column vc`
    })`
  flex: 1;
  padding: 35px 45px;
  padding-bottom: 0px;
  overflow: hidden;
`,
    U = k.div.attrs({
        className: `flex-column`
    })`
  flex: 1;
  width: 90%;
  max-width: 1200px;
`,
    W = k.div`
  font-size: 54px;
  font-weight: ${j.UltraBold};
`,
    Oe = k.div`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 700px;
`,
    G = k(me).attrs({
        className: `maxWidth`
    })`
  flex: 1;
  padding: 30px;
  border-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`,
    K = e => (0, V.jsx)(C, {
        style: {
            fontFamily: O.SFPro,
            color: A.Black,
            marginBottom: 5
        },
        children: (0, V.jsxs)(`div`, {
            className: `flex maxWidth vc`,
            style: {
                justifyContent: `space-between`
            },
            children: [(0, V.jsx)(`div`, {
                children: e.email
            }), (0, V.jsx)(`div`, {
                children: (0, V.jsx)(_, {
                    title: `Remove`,
                    children: (0, V.jsx)(ne, {
                        onClick: e.remove,
                        style: {
                            cursor: `pointer`
                        }
                    })
                })
            })]
        })
    }),
    q = {
        fontFamily: O.SFPro,
        color: A.Black
    },
    ke = e => {
        let {
            bulk: t,
            bulkId: r
        } = e, [a, o] = I.useState(``), [s, l] = I.useState(!1), [u, d] = I.useState(null), f = e => {
            o(e.target.value.toLowerCase()), d(null)
        }, p = a && ge(a), m = () => {
            p && (l(!0), n({
                url: `/api/bulk/add-admin`,
                data: {
                    bulk: r,
                    newAdmin: a
                },
                success: () => {
                    z(r), v.success(`Manager added!`), o(``)
                },
                error: e => {
                    e && e.message && e.message.text && e.message.text === `USER NOT FOUND` ? i({
                        title: `User not found`,
                        content: `This user does not exist on Gimkit yet. In order to be an manager for this license, they will need to create a free account first.`
                    }) : d(e)
                },
                both: () => l(!1)
            }))
        }, h = e => {
            t.owners.length < 2 ? i({
                title: `Cannot remove`,
                content: `Please add another admin before removing yourself`
            }) : c().email === e ? y.confirm({
                title: `Are you sure you want to remove yourself as a manager?`,
                onOk: () => {
                    n({
                        url: `/api/bulk/remove-admin`,
                        data: {
                            bulk: r
                        },
                        success: () => window.location.reload(),
                        error: () => i({
                            title: `Error removing user from license`
                        })
                    })
                }
            }) : i({
                title: `Cannot remove`,
                content: `Managers can only remove themselves`
            })
        };
        return (0, V.jsxs)(V.Fragment, {
            children: [(0, V.jsx)(C, {
                style: q,
                children: (0, V.jsxs)(`div`, {
                    children: [(0, V.jsx)(`div`, {
                        style: {
                            fontSize: 25,
                            fontWeight: j.UltraBold
                        },
                        children: `Managers`
                    }), (0, V.jsx)(`div`, {
                        style: {
                            fontSize: 15,
                            marginTop: -6
                        },
                        children: `Managers can remove members, add other managers, and modify group options`
                    })]
                })
            }), (0, V.jsxs)(C, {
                style: {
                    ...q,
                    marginTop: 10,
                    marginBottom: 10
                },
                children: [(0, V.jsx)(`div`, {
                    style: {
                        fontWeight: j.UltraBold,
                        fontSize: 25
                    },
                    children: `Add Manager`
                }), (0, V.jsx)(x, {
                    size: `large`,
                    placeholder: `Manager email...`,
                    style: {
                        width: `100%`,
                        marginTop: -1
                    },
                    value: a,
                    onChange: f,
                    onPressEnter: m
                }), (0, V.jsx)(b, {
                    style: {
                        width: `100%`,
                        marginTop: 5
                    },
                    type: `primary`,
                    disabled: !p,
                    loading: s,
                    onClick: m,
                    children: `Add`
                }), (0, V.jsx)(he, {
                    error: u,
                    style: {
                        marginTop: 5
                    }
                })]
            }), (0, V.jsx)(P, {
                children: t.owners.map(e => (0, V.jsx)(`div`, {
                    children: (0, V.jsx)(K, {
                        email: e,
                        remove: () => h(e)
                    })
                }, `admin-` + e))
            })]
        })
    },
    J = [`all-bulks`],
    Y = () => D(J, () => f({
        url: `/api/bulk/fetch-all`
    })),
    Ae = () => {
        L.invalidateQueries(J)
    },
    je = e => {
        let {
            bulk: t,
            bulkId: i
        } = e, [a, o] = I.useState(!1), [s, c] = I.useState(!1), {
            isActive: l,
            name: u,
            expiration: d,
            statusText: f
        } = t;
        return (0, V.jsx)(V.Fragment, {
            children: (0, V.jsxs)(`div`, {
                className: `maxWidth`,
                style: {
                    paddingBottom: 39
                },
                children: [(0, V.jsxs)(`div`, {
                    className: `maxWidth flex vc`,
                    style: {
                        justifyContent: `space-between`
                    },
                    children: [(0, V.jsxs)(`div`, {
                        children: [(0, V.jsxs)(`div`, {
                            className: `flex vc`,
                            style: {
                                marginBottom: -11
                            },
                            children: [(0, V.jsx)(`div`, {
                                style: {
                                    fontWeight: j.UltraBold,
                                    fontSize: 34,
                                    cursor: `pointer`
                                },
                                onClick: () => c(!0),
                                children: (0, V.jsx)(_, {
                                    title: `Rename Group License`,
                                    placement: `topLeft`,
                                    children: u
                                })
                            }), (0, V.jsx)(oe, {
                                style: {
                                    marginLeft: 10
                                },
                                color: l ? `green` : `red`,
                                children: l ? f || `Active` : d && (0, B.default)().isAfter(B.default.unix(d)) ? `Inactive` : f || `Inactive`
                            })]
                        }), (0, V.jsx)(`div`, {
                            style: {
                                fontSize: 18,
                                opacity: .8
                            },
                            children: l ? d ? `Expires on ${B.default.unix(d).format(`L`)}` : `Paid with credit/debit card` : d && (0, B.default)().isAfter(B.default.unix(d)) ? `Expired on ${B.default.unix(d).format(`L`)}` : `Inactive group license`
                        })]
                    }), (0, V.jsx)(`div`, {
                        children: t.allowedToRenew ? (0, V.jsx)(b, {
                            size: `large`,
                            type: `primary`,
                            onClick: () => {
                                o(!0), n({
                                    url: `/api/quote/createFromRenewal`,
                                    method: `post`,
                                    data: {
                                        id: i
                                    },
                                    success: e => {
                                        F(`/quote/${e}`)
                                    },
                                    error: e => {
                                        r({
                                            e,
                                            default: {
                                                title: `Error generating a renewal quote. Please try again later`
                                            }
                                        })
                                    },
                                    both: () => o(!1)
                                })
                            },
                            loading: a,
                            icon: (0, V.jsx)(ie, {}),
                            children: `Renew`
                        }) : null
                    })]
                }), t.isActive ? null : (0, V.jsx)(fe, {
                    type: `error`,
                    message: `Group License No Longer Active`,
                    description: (0, V.jsxs)(V.Fragment, {
                        children: [`To reactivate this group license,`, ` `, (0, V.jsx)(N, {
                            to: `mailto:groups@gimkit.com`,
                            external: !0,
                            children: `contact support.`
                        })]
                    }),
                    style: {
                        marginTop: 15
                    },
                    showIcon: !0
                }), (0, V.jsx)(Me, {
                    open: s,
                    close: () => c(!1),
                    onNewName: e => {
                        n({
                            url: `/api/bulk/rename`,
                            data: {
                                id: i,
                                name: e
                            }
                        }), z(i), Ae()
                    }
                })]
            })
        })
    },
    Me = e => {
        let [t, n] = I.useState(``), r = !!t, i = e => n(e.target.value), a = () => {
            r && (e.onNewName(t), e.close())
        };
        return (0, V.jsx)(y, {
            open: e.open,
            closable: !0,
            onCancel: e.close,
            title: `Rename Group`,
            afterClose: () => n(``),
            footer: (0, V.jsxs)(V.Fragment, {
                children: [(0, V.jsx)(b, {
                    onClick: e.close,
                    children: `Cancel`
                }), (0, V.jsx)(b, {
                    disabled: !r,
                    type: `primary`,
                    onClick: a,
                    children: `Rename`
                })]
            }),
            children: (0, V.jsx)(x, {
                size: `large`,
                style: {
                    width: `100%`
                },
                autoFocus: !0,
                placeholder: `New group name...`,
                value: t,
                maxLength: 32,
                onChange: i,
                onPressEnter: a
            })
        })
    },
    X = {
        fontFamily: O.SFPro,
        color: A.Black
    },
    Ne = e => (0, V.jsx)(C, {
        style: {
            ...X,
            minWidth: 215,
            marginLeft: 20
        },
        children: (0, V.jsxs)(`div`, {
            className: `flex vc`,
            children: [(0, V.jsx)(Z, {
                count: e.maxSeats,
                description: `total seats`
            }), (0, V.jsx)(M, {
                type: `vertical`,
                style: {
                    marginLeft: 20,
                    marginRight: 20
                }
            }), (0, V.jsx)(Z, {
                count: e.seatsRemaining,
                description: `${o(`seat`,e.seatsRemaining)} remaining`
            })]
        })
    }),
    Z = e => (0, V.jsxs)(`div`, {
        className: `flex flex-column vc`,
        children: [(0, V.jsx)(`div`, {
            style: {
                fontSize: 23,
                fontWeight: j.UltraBold
            },
            children: e.count
        }), (0, V.jsx)(`div`, {
            style: {
                marginTop: -7,
                fontSize: 11,
                opacity: .8
            },
            children: e.description
        })]
    }),
    Pe = e => {
        let {
            bulkId: t,
            bulk: i
        } = e, a = Math.abs(i.maxSeats - i.seats.length), o = e => {
            n({
                url: `/api/bulk/remove-member`,
                data: {
                    bulk: t,
                    removedMember: e
                },
                success: () => z(t),
                error: e => r({
                    e,
                    default: {
                        title: `Error removing user from license`
                    }
                })
            })
        };
        return (0, V.jsxs)(V.Fragment, {
            children: [(0, V.jsx)(C, {
                style: X,
                children: (0, V.jsxs)(`div`, {
                    className: `flex vc`,
                    style: {
                        justifyContent: `space-between`
                    },
                    children: [(0, V.jsxs)(`div`, {
                        children: [(0, V.jsx)(`div`, {
                            style: {
                                fontSize: 25,
                                fontWeight: j.UltraBold
                            },
                            children: `Members`
                        }), (0, V.jsxs)(`div`, {
                            style: {
                                fontSize: 15,
                                marginTop: -6
                            },
                            children: [`Members receive `, T, ` Pro covered by this group license`]
                        })]
                    }), !i.hiddenSeatLimit && (0, V.jsx)(Ne, {
                        maxSeats: i.maxSeats,
                        seatsRemaining: a
                    })]
                })
            }), i.seats.length ? (0, V.jsx)(P, {
                style: {
                    marginTop: 10
                },
                children: i.seats.map(e => (0, V.jsx)(`div`, {
                    children: (0, V.jsx)(K, {
                        email: e,
                        remove: () => o(e)
                    })
                }, `member-` + e))
            }) : (0, V.jsx)(C, {
                className: `maxWidth`,
                style: {
                    marginTop: 10
                },
                children: `Nobody is a member of this group license...yet!`
            })]
        })
    },
    Fe = e(se()),
    Ie = e => {
        let [t, r] = I.useState(!1), a = (a, o) => {
            t || (r(!0), n({
                url: `/api/bulk/members/import`,
                data: {
                    bulk: e.currentBulk,
                    importedBulk: a
                },
                success: () => {
                    z(e.currentBulk), y.success({
                        title: `Members imported!`,
                        content: (0, V.jsxs)(V.Fragment, {
                            children: [`All members from `, (0, V.jsx)(`b`, {
                                children: o
                            }), ` have been imported into this group license.`]
                        })
                    })
                },
                error: e => {
                    i({
                        title: `Error importing members`,
                        content: `Please try again.`
                    })
                },
                both: () => {
                    r(!1), e.close()
                }
            }))
        };
        return (0, V.jsx)(y, {
            open: e.visible,
            onCancel: e.close,
            width: 650,
            footer: null,
            closable: !0,
            style: {
                top: 25
            },
            children: (0, V.jsxs)(Le, {
                children: [(0, V.jsx)(Re, {
                    children: `Import members from which group license?`
                }), (0, V.jsx)(M, {
                    style: {
                        margin: `30px 0px`
                    }
                }), e.otherBulks.map(e => (0, V.jsxs)(C, {
                    style: {
                        marginBottom: 10,
                        color: A.Black
                    },
                    className: `maxWidth`,
                    onClick: () => a(e.id, e.name),
                    hoverable: !0,
                    children: [(0, V.jsx)(`div`, {
                        style: {
                            fontSize: 18,
                            fontWeight: j.Bold
                        },
                        children: e.name
                    }), (0, V.jsxs)(`div`, {
                        children: [`Started`, ` `, (0, B.default)(l(e.id)).format(`MMMM Do, YYYY`)]
                    })]
                }, `import-sub-${e.id}`))]
            })
        })
    },
    Le = k.div`
  color: ${A.Black};
  font-family: ${O.SFPro};
`,
    Re = k.div`
  font-size: 28px;
  font-weight: ${j.Bold};
  line-height: 1;
  margin-top: 20px;
`,
    ze = {
        ...X,
        width: `calc(50% - 4px)`,
        flex: 1
    },
    Be = {
        textAlign: `center`,
        fontSize: 32
    },
    Ve = e => {
        let [t, i] = I.useState(!1), a = Y().data, {
            bulkId: o,
            bulk: s
        } = e, c = `${d()}/group/join/${o}`, l = () => {
            (0, Fe.default)(c), v.success(`Link copied to clipboard!`)
        }, u = () => {
            n({
                url: `/api/bulk/toggle-join-by-link`,
                method: `post`,
                data: {
                    bulk: o
                },
                success: () => {
                    v.success(`Group is ${s.joinByLinkEnabled?`closed`:`open`} to new members!`), z(o)
                },
                error: e => r({
                    e,
                    default: {
                        title: `Error switching.`
                    }
                })
            })
        }, f = () => {
            let e = s.blockSeatRenewalEmails !== !0;
            n({
                url: `/api/bulk/update-block-seat-renewal-emails`,
                data: {
                    id: o,
                    blockSeatRenewalEmails: e
                },
                success: () => {
                    y.success({
                        title: `Renewal emails ${e?`disabled`:`enabled`}`,
                        content: `Members of this group will ${e?`no longer`:`now`} receive renewal emails when this license is close to expiring.`
                    }), z(o)
                },
                error: e => r({
                    e,
                    default: {
                        title: `Error updating.`
                    }
                })
            })
        }, p = () => i(!0), m = () => i(!1), h = (a || []).filter(e => e.id !== o), g = !s.joinByLinkEnabled;
        return (0, V.jsxs)(V.Fragment, {
            children: [(0, V.jsxs)(`div`, {
                style: X,
                children: [(0, V.jsxs)(`div`, {
                    style: {
                        opacity: g ? .6 : 1,
                        pointerEvents: g ? `none` : `auto`
                    },
                    children: [(0, V.jsx)(He, {
                        children: `Invite`
                    }), (0, V.jsx)(Ue, {
                        children: `Get educators under your group license! Share the invite link below to have them automatically join this group.`
                    }), (0, V.jsxs)(`div`, {
                        className: `maxWidth flex vc`,
                        style: {
                            marginTop: 7
                        },
                        children: [(0, V.jsx)(x, {
                            value: c,
                            readOnly: !0,
                            size: `large`
                        }), (0, V.jsx)(b, {
                            onClick: l,
                            style: {
                                marginLeft: 10
                            },
                            type: `primary`,
                            size: `large`,
                            children: `Copy Link`
                        })]
                    }), (0, V.jsx)(M, {}), (0, V.jsxs)(`div`, {
                        className: `flex`,
                        children: [(0, V.jsxs)(C, {
                            style: ze,
                            hoverable: !0,
                            bodyStyle: Be,
                            className: `flex hc vc flex-column`,
                            children: [(0, V.jsx)(ve, {}), (0, V.jsx)(M, {}), (0, V.jsxs)(`div`, {
                                style: {
                                    fontSize: 16
                                },
                                children: [T, ` Pro subscribers who use this link to join your group license will be refunded automatically for their unused subscription time.`]
                            })]
                        }), (0, V.jsx)(`div`, {
                            style: {
                                width: 8
                            }
                        }), (0, V.jsxs)(C, {
                            style: ze,
                            hoverable: !0,
                            bodyStyle: Be,
                            className: `flex hc vc flex-column`,
                            children: [(0, V.jsx)(ae, {}), (0, V.jsx)(M, {}), (0, V.jsxs)(`div`, {
                                style: {
                                    fontSize: 16
                                },
                                children: [`You can view and remove members by clicking the `, (0, V.jsx)(`b`, {
                                    children: `Members`
                                }), ` `, `tab above.`]
                            })]
                        })]
                    }), (0, V.jsx)(M, {})]
                }), (0, V.jsxs)(`div`, {
                    className: `flex flex-column`,
                    children: [(0, V.jsxs)(N, {
                        onClick: u,
                        children: [g ? `Open` : `Close`, ` group to new members`]
                    }), h.length && s.isActive ? (0, V.jsx)(N, {
                        onClick: p,
                        children: `Import members from previous group license`
                    }) : null, s.isActive ? (0, V.jsxs)(N, {
                        onClick: f,
                        children: [s.blockSeatRenewalEmails ? `Enable` : `Disable`, ` renewal emails for members of this group`]
                    }) : null, (0, V.jsx)(N, {
                        to: `mailto:groups@gimkit.com`,
                        external: !0,
                        children: `Contact support`
                    })]
                })]
            }), (0, V.jsx)(Ie, {
                visible: t,
                currentBulk: o,
                otherBulks: h,
                close: m
            })]
        })
    },
    He = k.div`
  font-weight: ${j.UltraBold};
  font-size: 30px;
`,
    Ue = k.div`
  font-size: 18px;
  margin-top: -7px;
`,
    We = I.lazy(() => pe(() => import(`./BulkAnalytics.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]))),
    {
        TabPane: Q
    } = S,
    Ge = e => {
        let {
            bulkId: t
        } = e, [n, r] = I.useState(`invite`), {
            data: i,
            error: a,
            isLoading: o
        } = ye(t);
        return o ? (0, V.jsxs)(`div`, {
            style: {
                flex: 1
            },
            className: `flex-center`,
            children: [(0, V.jsx)(u, {
                title: `Group License`
            }), (0, V.jsx)(w, {
                size: `large`
            })]
        }) : a ? (F(ce), null) : (0, V.jsxs)(H, {
            children: [(0, V.jsx)(u, {
                title: `${i.name} | Group License`
            }), (0, V.jsxs)(U, {
                children: [(0, V.jsx)(je, {
                    bulk: i,
                    bulkId: e.bulkId
                }), (0, V.jsx)(G, {
                    children: (0, V.jsxs)(S, {
                        type: `card`,
                        activeKey: n,
                        onChange: e => {
                            let t = e;
                            t === `invoice` ? i.invoiceUrl && window.open(i.invoiceUrl) : t === `receipt` ? i.receiptUrl && window.open(i.receiptUrl) : r(t)
                        },
                        children: [(0, V.jsx)(Q, {
                            tab: `Invite`,
                            children: (0, V.jsx)(Ve, {
                                bulk: i,
                                bulkId: t
                            })
                        }, `invite`), (0, V.jsx)(Q, {
                            tab: `Members`,
                            children: (0, V.jsx)(Pe, {
                                bulk: i,
                                bulkId: t
                            })
                        }, `members`), (0, V.jsx)(Q, {
                            tab: `Managers`,
                            children: (0, V.jsx)(ke, {
                                bulk: i,
                                bulkId: t
                            })
                        }, `managers`), (0, V.jsx)(Q, {
                            tab: `Usage Report`,
                            children: (0, V.jsx)(I.Suspense, {
                                fallback: null,
                                children: (0, V.jsx)(We, {
                                    bulkId: t
                                })
                            })
                        }, `analytics`), i.receiptUrl ? (0, V.jsx)(Q, {
                            tab: `View Receipt`
                        }, `receipt`) : null, i.invoiceUrl ? (0, V.jsx)(Q, {
                            tab: `View Invoice`
                        }, `invoice`) : null]
                    })
                })]
            })]
        })
    },
    Ke = () => (0, V.jsx)(qe, {
        children: (0, V.jsxs)(Je, {
            children: [(0, V.jsxs)(W, {
                children: [T, ` Groups`]
            }), (0, V.jsxs)(Ye, {
                children: [`Welcome to `, T, ` Groups! You don’t manage any group licenses yet. Click the button below to get your group started!`]
            }), (0, V.jsx)(N, {
                to: E,
                className: `maxWidth`,
                children: (0, V.jsx)(b, {
                    block: !0,
                    size: `large`,
                    type: `primary`,
                    style: {
                        height: 50,
                        marginTop: 20
                    },
                    children: `Start New Group`
                })
            })]
        })
    }),
    qe = k.div.attrs({
        className: `maxAll flex-center`
    })``,
    Je = k.div.attrs({
        className: `flex-center flex-column medium-shadow`
    })`
  width: 80%;
  max-width: 700px;
  margin: 20px;
  background: ${A.White};
  padding: 45px;
  border-radius: 6px;
`,
    Ye = k.div`
  font-size: 16px;
  margin-top: 3px;
`,
    Xe = () => {
        let {
            isLoading: e,
            data: t
        } = Y();
        return (0, V.jsxs)(V.Fragment, {
            children: [(0, V.jsx)(u, {
                title: `Group Licenses`
            }), (() => {
                if (e) return (0, V.jsx)(Ze, {
                    children: (0, V.jsx)(w, {
                        size: `large`
                    })
                });
                let n = t && Array.isArray(t) ? t : [];
                return n.length ? (0, V.jsx)(De, {
                    bulks: n
                }) : (0, V.jsx)(Ke, {})
            })()]
        })
    },
    Ze = k.div.attrs({
        className: `maxAll flex-center`
    })``,
    Qe = t({
        default: () => $
    }),
    $ = () => {
        let {
            id: e
        } = g(), t = e;
        return (0, V.jsx)(ue, {
            client: L,
            children: (0, V.jsxs)($e, {
                children: [(0, V.jsx)(re, {
                    includeSpacer: !0
                }), t ? (0, V.jsx)(Ge, {
                    bulkId: t
                }) : (0, V.jsx)(Xe, {})]
            })
        })
    },
    $e = k.div.attrs({
        className: `flex-column`
    })`
  flex: 1;
  color: ${A.Black};
  background: ${A.Snow};
  font-family: ${O.SFPro};
`;
export {
    $ as
    default, Qe as t
};