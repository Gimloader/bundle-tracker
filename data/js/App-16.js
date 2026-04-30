import {
    b6 as V,
    y as g,
    aa as L,
    j as e,
    c as B,
    U as F,
    e as j,
    B as w,
    d as c,
    b7 as D,
    r as h,
    M as b,
    R as N,
    aW as P,
    t as T,
    a8 as H,
    F as _,
    u as J,
    C as Q,
    f as Y,
    n as K,
    T as X,
    A as Z
} from "./_index.js";
import {
    P as ee
} from "./Paper.js";
import {
    u as te
} from "./useQuery.js";
import {
    c as ae,
    S as v
} from "./index-2.js";
import {
    I as A
} from "./index-3.js";
import {
    s as k
} from "./index-4.js";
import {
    N as E
} from "./NavigateTo.js";
import {
    i as se,
    F as re
} from "./useClasses.js";
import {
    F as C
} from "./index-16.js";
import {
    F as I
} from "./FontAwesomeIcon.js";
import {
    T as ne
} from "./index-5.js";
import {
    R as ie
} from "./CheckOutlined.js";
import {
    D as $
} from "./index-10.js";
import {
    R as M
} from "./EditOutlined.js";
import {
    R as oe
} from "./UsergroupAddOutlined.js";
import {
    R as W
} from "./DeleteOutlined.js";
import {
    S
} from "./StopPropagation.js";
import {
    U as le
} from "./App-2.js";
import {
    S as ce
} from "./App-5.js";
import {
    S as de
} from "./App-4.js";
const z = ["group"],
    me = t => te({
        queryKey: [z, t],
        retry: !1,
        queryFn: () => g({
            url: `/api/v1/groups/info/${t}`
        })
    }),
    y = t => V.invalidateQueries([z, t]),
    ue = t => {
        const r = `${L()}/class/join/${t.groupId}`,
            a = () => {
                ae(r), k.success("Link copied!")
            };
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(xe, {
                children: ["Have your students visit this link to join ", e.jsx("b", {
                    children: t.groupName
                }), ". They will have to authenticate with Google or email."]
            }), e.jsx(B, {
                hoverable: !0,
                style: {
                    color: j.Black,
                    fontFamily: F.SFPro,
                    marginTop: 15
                },
                children: e.jsxs(pe, {
                    children: [e.jsx(A, {
                        size: "large",
                        value: r,
                        readOnly: !0
                    }), e.jsx(w, {
                        onClick: a,
                        type: "primary",
                        style: {
                            marginLeft: 10
                        },
                        size: "large",
                        children: "Copy Link"
                    })]
                })
            })]
        })
    },
    xe = c.div`
  font-size: 20px;
`,
    pe = c.div.attrs({
        className: "flex maxWidth vc"
    })``,
    he = h.forwardRef(({
        rules: t,
        placeholder: r,
        onPressEnter: a,
        value: s,
        autoFocus: d
    }, l) => {
        const [m] = C.useForm();
        return h.useEffect(() => {
            m.setFieldsValue({
                input: s
            })
        }, []), h.useImperativeHandle(l, () => ({
            validate: () => m.validateFields().then(n => n.input)
        })), e.jsx(C, {
            form: m,
            style: {
                marginTop: 3
            },
            children: e.jsx(C.Item, {
                name: "input",
                rules: t,
                children: e.jsx(A, {
                    placeholder: r,
                    onPressEnter: a,
                    autoFocus: d,
                    autoComplete: "off"
                })
            })
        })
    });

function fe({
    rules: t,
    placeholder: r,
    modalProps: a = {},
    okText: s,
    visible: d,
    submit: l,
    close: m,
    title: n,
    value: o,
    afterClose: x,
    autoFocus: u
}) {
    const p = h.useRef(null),
        i = async () => {
            var f;
            try {
                const R = await ((f = p.current) == null ? void 0 : f.validate());
                l(R)
            } catch {}
        };
    return e.jsx(b, {
        ...a,
        open: d,
        onOk: i,
        okText: s,
        onCancel: () => m(),
        title: n,
        afterClose: x,
        children: e.jsx(he, {
            ref: p,
            rules: t,
            value: o,
            placeholder: r,
            onPressEnter: i,
            autoFocus: u ?? !0
        })
    })
}
const O = t => new Promise((r, a) => {
        const s = document.createElement("div");
        document.body.appendChild(s);
        const d = D.createRoot(s),
            {
                onOk: l,
                ...m
            } = t;
        let n = {
            ...m,
            submit: u,
            close: x,
            visible: !0
        };
        const o = i => {
            d.unmount(), s.parentNode && s.parentNode.removeChild(s), i !== void 0 ? r(i) : a(i)
        };

        function x(i) {
            n = {
                ...n,
                visible: !1,
                afterClose: () => o(i)
            }, p(n)
        }
        async function u(i) {
            if (l) {
                const f = await l(i);
                (f || f === void 0) && x(i)
            } else x(i)
        }

        function p(i) {
            d.render(e.jsx(fe, {
                ...i
            }))
        }
        p(n)
    }),
    ge = t => {
        const r = (a = !0) => {
            P({
                url: `/api/v1/groups/invites/${a?"accept":"deny"}`,
                data: {
                    inviteId: t.id
                },
                success: () => {
                    a && k.success("Student added to class!"), y(t.groupId)
                },
                error: s => {
                    T({
                        e: s,
                        default: {
                            title: "Error replying to invite"
                        }
                    })
                }
            })
        };
        return e.jsxs(je, {
            children: [e.jsxs("div", {
                className: "flex vc",
                style: {
                    background: "#6200EA",
                    color: j.White,
                    padding: "5px 35px"
                },
                children: [e.jsx(I, {
                    name: "far fa-exclamation-circle"
                }), " ", e.jsx("div", {
                    style: {
                        marginLeft: "0.4em"
                    },
                    children: "Class Join Request"
                })]
            }), e.jsxs(ve, {
                children: [e.jsxs("div", {
                    children: [e.jsx("div", {
                        children: e.jsx("b", {
                            children: t.name
                        })
                    }), e.jsx("div", {
                        children: e.jsx("i", {
                            children: t.email
                        })
                    })]
                }), e.jsx("div", {
                    children: e.jsxs(v, {
                        direction: "horizontal",
                        size: 10,
                        wrap: !0,
                        align: "center",
                        children: [e.jsx(ne, {
                            title: "Accept",
                            children: e.jsx(w, {
                                type: "dashed",
                                style: {
                                    color: "#388E3C"
                                },
                                icon: e.jsx(ie, {}),
                                shape: "circle",
                                onClick: () => {
                                    r(!0)
                                }
                            })
                        }), e.jsx($, {
                            menu: {
                                items: [{
                                    key: "reject",
                                    label: "Decline request",
                                    danger: !0,
                                    onClick: () => {
                                        r(!1)
                                    }
                                }]
                            },
                            children: e.jsx(N, {
                                style: {
                                    cursor: "pointer"
                                }
                            })
                        })]
                    })
                })]
            })]
        })
    },
    je = c.div.attrs({
        className: "maxWidth light-shadow"
    })`
  border-radius: 8px;
  background: ${j.White};
  overflow: hidden;
`,
    ve = c.div.attrs({
        className: "maxWidth flex between vc"
    })`
  padding: 20px 35px;
`,
    ye = t => {
        const r = h.useMemo(() => t.data ? [{
            key: "rename",
            label: "Rename class",
            icon: e.jsx(M, {}),
            onClick: () => {
                O({
                    title: "Rename class",
                    rules: [{
                        required: !0,
                        message: "Name is required"
                    }, {
                        max: 28,
                        message: "Class name must be less than 28 characters"
                    }],
                    placeholder: t.data.name,
                    okText: "Save",
                    onOk: async a => {
                        await g({
                            url: "/api/v1/groups/rename",
                            data: {
                                groupId: t.data._id,
                                newName: a
                            }
                        }), y(t.data._id)
                    }
                })
            }
        }, {
            key: "modify-auto-accept",
            label: `${t.data.autoAccept?"Disable":"Enable"} auto-accept`,
            icon: e.jsx(oe, {}),
            onClick: () => {
                P({
                    url: "/api/v1/groups/auto-accept",
                    data: {
                        groupId: t.data._id,
                        autoAcceptOn: !t.data.autoAccept
                    },
                    success: () => {
                        b.success({
                            title: `Auto-accept ${t.data.autoAccept?"disabled":"enabled"}`,
                            content: t.data.autoAccept ? "When students attempt to join this class, you will be asked to approve their request." : "Students can now join this class without manual approval by visiting the join link."
                        }), y(t.data._id)
                    },
                    error: a => {
                        T({
                            e: a,
                            default: {
                                title: "Error updating auto-accept. Please try agian."
                            }
                        })
                    }
                })
            }
        }, {
            key: "delete-class",
            label: "Delete class",
            icon: e.jsx(W, {}),
            danger: !0,
            onClick: () => {
                b.confirm({
                    title: "Are you sure you want to delete this class?",
                    okText: "Yes",
                    okType: "danger",
                    onOk: async () => {
                        await g({
                            url: `/api/v1/groups/delete/${t.data._id}`
                        }), se(), E(H.navigation.homeUrl)
                    }
                })
            }
        }] : [], [t.data]);
        return t.data ? e.jsxs(be, {
            children: [e.jsxs(ke, {
                children: [e.jsxs(v, {
                    direction: "horizontal",
                    size: 20,
                    wrap: !0,
                    children: [e.jsx(we, {
                        style: {
                            background: t.data.color
                        }
                    }), e.jsx(Ce, {
                        children: t.data.name
                    })]
                }), e.jsx("div", {
                    children: t.customRightComponent ? t.customRightComponent : e.jsx($, {
                        menu: {
                            items: r
                        },
                        children: e.jsx(w, {
                            icon: e.jsx(N, {}),
                            type: "default",
                            shape: "circle"
                        })
                    })
                })]
            }), t.data.invites.length ? e.jsx(v, {
                direction: "vertical",
                size: 15,
                className: "maxWidth",
                style: {
                    marginTop: 20
                },
                children: t.data.invites.map(a => e.jsx(ge, {
                    id: a._id,
                    name: a.name,
                    email: a.email,
                    groupId: t.data._id
                }, a._id))
            }) : null]
        }) : e.jsx("div", {
            style: {
                height: 160
            }
        })
    },
    be = c.div.attrs({
        className: "maxWidth"
    })`
  padding: 40px 0px;
  flex-shrink: 0;
`,
    ke = c.div.attrs({
        className: "maxWidth flex vc between"
    })``,
    we = c.div`
  height: 80px;
  width: 80px;
  border-radius: 8px;
`,
    Ce = c.div`
  font-size: 36px;
  font-weight: ${_.UltraBold};
`,
    Ie = t => {
        var m;
        const [r, a, s] = J(!1), d = n => {
            if (!Y()) {
                a();
                return
            }
            E(`/class/${t.groupId}/student/${n}`)
        }, l = h.useMemo(() => [{
            title: "Name",
            dataIndex: "name",
            key: "name"
        }, {
            title: "Email",
            dataIndex: "email",
            key: "email"
        }, {
            title: "",
            key: "actions",
            align: "right",
            render: (n, o) => {
                const x = [{
                    key: `${o._id}-rename`,
                    label: "Change name",
                    icon: e.jsx(M, {}),
                    onClick: u => {
                        S(u.domEvent), O({
                            title: "Change name",
                            value: o.name,
                            placeholder: "Enter new name",
                            rules: [{
                                required: !0,
                                message: "Name is required"
                            }, {
                                max: 40,
                                message: "Name must be less than 40 characters"
                            }],
                            onOk: async p => {
                                await g({
                                    url: "/api/v1/groups/members/rename",
                                    data: {
                                        groupMemberId: o._id,
                                        newName: p
                                    }
                                }), k.success("Student renamed!"), y(t.groupId)
                            }
                        })
                    }
                }, {
                    key: `${o._id}-remove`,
                    label: "Remove",
                    icon: e.jsx(W, {}),
                    danger: !0,
                    onClick: u => {
                        S(u.domEvent), b.confirm({
                            title: e.jsxs("div", {
                                style: {
                                    fontWeight: _.Normal
                                },
                                children: ["Are you sure you want to remove ", e.jsx("b", {
                                    children: o.name
                                }), " from this class?"]
                            }),
                            okText: "Yes",
                            onOk: async () => {
                                await g({
                                    url: "/api/v1/groups/members/remove",
                                    data: {
                                        groupMemberId: o._id
                                    }
                                }), k.success("Student removed!"), y(t.groupId)
                            }
                        })
                    }
                }];
                return e.jsxs(v, {
                    size: "middle",
                    children: [e.jsx(w, {
                        children: "View Progress"
                    }), e.jsx("div", {
                        onClick: u => u.stopPropagation(),
                        children: e.jsx($, {
                            menu: {
                                items: x
                            },
                            children: e.jsx(N, {
                                style: {
                                    cursor: "pointer"
                                }
                            })
                        })
                    })]
                })
            }
        }], [t.groupId]);
        return (m = t.members) != null && m.length ? e.jsxs(e.Fragment, {
            children: [e.jsx(re, {
                size: "large",
                dataSource: t.members.sort((n, o) => n.name.localeCompare(o.name)),
                columns: l,
                pagination: !1,
                onRow: n => ({
                    style: {
                        cursor: "pointer"
                    },
                    onClick: () => {
                        d(n._id)
                    }
                }),
                rowKey: n => n._id
            }), e.jsx(le, {
                visible: r,
                close: s,
                id: "student progress",
                copy: {
                    title: "View student progress with Pro",
                    description: `To view all reports for a student in one place, upgrade to ${Q} Pro.`
                }
            })]
        }) : null
    },
    Ne = t => e.jsx(e.Fragment, {
        children: e.jsx(de, {
            includeSpacer: !0,
            children: e.jsx(ce, {
                options: [{
                    id: "home",
                    label: "Home",
                    icon: e.jsx(I, {
                        name: "fas fa-home"
                    }),
                    path: `/class/${t.id}`
                }, {
                    id: "reports",
                    label: "Reports",
                    icon: e.jsx(I, {
                        name: "fas fa-analytics"
                    }),
                    path: `/class/${t.id}/reports`
                }]
            })
        })
    }),
    $e = () => {
        const {
            id: t
        } = K(), {
            isLoading: r,
            error: a,
            data: s
        } = me(t), d = () => {
            var l;
            return r ? e.jsx(Z, {
                paragraph: {
                    rows: 4
                },
                title: !1,
                active: !0,
                className: "maxWidth"
            }) : a ? e.jsx("div", {
                children: ((l = a == null ? void 0 : a.message) == null ? void 0 : l.text) || "There was an error fetching this class. Please try again."
            }) : e.jsxs(v, {
                className: "maxWidth",
                direction: "vertical",
                size: 25,
                children: [e.jsx(ue, {
                    groupId: t,
                    groupName: s.name
                }), e.jsx(Ie, {
                    members: s.members,
                    groupId: t
                })]
            })
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(X, {
                title: (s == null ? void 0 : s.name) ?? "Group"
            }), e.jsxs(q, {
                children: [e.jsx(Ne, {
                    id: t
                }), e.jsxs(G, {
                    children: [a ? e.jsx("div", {
                        style: {
                            height: 35
                        }
                    }) : e.jsx(ye, {
                        data: s
                    }), e.jsx(U, {
                        children: d()
                    })]
                })]
            })]
        })
    },
    q = c.div.attrs({
        className: "vc flex-column"
    })`
  flex: 1;
  background: ${j.Snow};
  font-family: ${F.SFPro};
  color: ${j.Black};
`,
    G = c.div.attrs({
        className: "flex-column"
    })`
  width: 90%;
  max-width: 1200px;
  flex: 1;
`,
    U = c(ee).attrs({
        className: "maxWidth"
    })`
  flex: 1;
  border-radius: 9px;
  padding: 35px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`,
    Je = Object.freeze(Object.defineProperty({
        __proto__: null,
        Container: q,
        Content: U,
        ContentContainer: G,
        default: $e
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Je as A, q as C, Ne as G, G as a, U as b, ye as c, me as u
};