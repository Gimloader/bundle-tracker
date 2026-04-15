import {
    u as j,
    r as d,
    j as e,
    b as u,
    M as te,
    B as S,
    d as i,
    F as f,
    e as h,
    U as k,
    a as y,
    aa as ne,
    A as se,
    R as re,
    c as C,
    a4 as O,
    D as G,
    ar as ie,
    S as W,
    aX as oe,
    T as H,
    n as ae,
    $ as le
} from "./_index.js";
import {
    T as K
} from "./index-5.js";
import {
    I as U
} from "./index-3.js";
import {
    P as ce
} from "./Paper.js";
import {
    c as de,
    S as w
} from "./index-2.js";
import {
    s as me
} from "./index-4.js";
import {
    a as he
} from "./advancedFormat.js";
import {
    a as xe
} from "./GameReportCompletionLink.js";
import {
    M as B,
    D as ge
} from "./index-10.js";
import {
    R as x
} from "./index-13.js";
import {
    I as ue,
    f as pe,
    g as fe
} from "./App-3.js";
import {
    A as Y
} from "./AccessibleAnchor.js";
import {
    I as je
} from "./ImagePreview.js";
import {
    M as ve
} from "./MapModeType.js";
import {
    N as ye
} from "./NavigateTo.js";
import {
    S as Ce
} from "./App-4.js";
import "./context.js";
import "./Player.js";
import "./Question.js";
import "./LazyLatexRenderer.js";
import "./getCloudinaryUrl.js";
import "./FontAwesomeIcon.js";
import "./index-11.js";
import "./useBubbleLock.js";
import "./index-12.js";
import "./CopyOutlined.js";
import "./EditOutlined.js";
import "./App-2.js";
import "./Sizes.js";
import "./motion.js";
import "./index-1.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./StarOutlined.js";
import "./DownloadOutlined.js";
import "./BarChartOutlined.js";
import "./move.js";
import "./useForm.js";
import "./mobxreact.esm.js";
import "./Hook.js";
import "./index-7.js";
import "./DownOutlined.js";
import "./index-8.js";
import "./CheckOutlined.js";
import "./AppTypes.js";
import "./Shortcut.js";
import "./Names.js";
import "./index-6.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
const be = t => {
        const [s, r, o] = j(!1), [n, l] = d.useState(t.title), [m, a] = d.useState(""), [c, $, Z] = j(!1), ee = T => a(T.target.value), _ = () => {
            c || ($(), y({
                url: "/api/map-assignment/change-title",
                data: {
                    id: t.id,
                    title: m
                },
                success: T => {
                    l(T.title), a(""), o()
                },
                both: () => {
                    Z()
                }
            }))
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsxs(Ne, {
                children: [e.jsxs(Se, {
                    children: ["Assignment - Due ", u(t.dueDate).format("MMMM Do")]
                }), e.jsx("div", {
                    children: e.jsx(K, {
                        title: "Change Name",
                        placement: "left",
                        children: e.jsx(ke, {
                            onClick: r,
                            children: n
                        })
                    })
                })]
            }), e.jsx(te, {
                open: s,
                onCancel: o,
                closable: !0,
                footer: e.jsx(S, {
                    type: "primary",
                    loading: c,
                    onClick: _,
                    children: "Save"
                }),
                width: 600,
                children: e.jsxs($e, {
                    children: [e.jsx(Te, {
                        children: "New Name"
                    }), e.jsx(we, {
                        children: "Leave empty to use the name of the game mode for this assignment!"
                    }), e.jsx(U, {
                        size: "large",
                        style: {
                            width: "100%"
                        },
                        maxLength: 32,
                        placeholder: t.title || "Assignment...",
                        value: m,
                        onChange: ee,
                        onPressEnter: _
                    })]
                })
            })]
        })
    },
    Ne = i.div.attrs({
        className: "maxWidth flex-center flex-column"
    })``,
    Se = i.div`
  font-size: 18px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.85);
`,
    ke = i.div`
  font-size: 56px;
  font-weight: ${f.UltraBold};
  text-align: center;
  cursor: pointer;
`,
    $e = i.div`
  color: ${h.Black};
  font-family: ${k.SFPro};
`,
    Te = i.div`
  font-size: 22px;
  font-weight: ${f.Bold};
`,
    we = i.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
`,
    Le = t => {
        const s = ne() + "/join/" + t.id,
            r = () => {
                de(s), me.success("Link copied to clipboard!")
            };
        return e.jsxs(Me, {
            children: [e.jsx(Re, {
                children: "Share this link with your students to have them complete this assignment!"
            }), e.jsxs(Pe, {
                children: [e.jsx(U, {
                    value: s,
                    style: {
                        color: h.Black
                    },
                    size: "large"
                }), e.jsx(S, {
                    size: "large",
                    type: "primary",
                    style: {
                        marginLeft: 10
                    },
                    onClick: r,
                    children: "Copy Link"
                })]
            })]
        })
    },
    Me = i.div`
  padding: 35px;
`,
    Re = i.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
`,
    Pe = i.div.attrs({
        className: "flex vc "
    })`
  padding: 20px;
  margin-top: 20px;
  border: 1px solid ${h.BorderGray};
  border-radius: 4px;
  margin-top: 10px;
`,
    I = (t, s) => t.sort((r, o) => {
        const n = s(r),
            l = s(o);
        return n.localeCompare(l)
    }),
    z = t => t.split(" ").pop() || t,
    F = (t, s) => t.sort((r, o) => {
        const n = z(s(r)),
            l = z(s(o));
        return n.localeCompare(l)
    }),
    A = t => e.jsxs(Ie, {
        children: [e.jsx(Fe, {}), e.jsx(Ae, {
            children: "Nothing yet..."
        }), e.jsx(De, {
            children: t.children
        })]
    }),
    Ie = i.div.attrs({
        className: "flex-column flex-center maxWidth"
    })`
  flex: 1;
  min-height: 400px;
  text-align: center;
`,
    Fe = i.img.attrs({
        src: "/client/img/assignment/box.svg"
    })`
  height: 80px;
`,
    Ae = i.div`
  font-weight: ${f.UltraBold};
  font-size: 28px;
  margin-top: 15px;
`,
    De = i.div`
  font-size: 18px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`,
    D = () => e.jsx(Ee, {
        children: e.jsx(se, {
            active: !0,
            title: !1,
            paragraph: {
                rows: 14
            }
        })
    }),
    Ee = i.div.attrs({
        className: "maxWidth"
    })`
  .ant-skeleton-paragraph li {
    width: 100% !important;
  }
`;
u.extend(he);
const q = t => `${u(t).format("MMMM Do")} at ${u(t).format("h:mma")}`;
var E = (t => (t.gameReport = "gameReport", t))(E || {});
const X = t => {
        var a;
        const [s, r] = d.useState(), {
            links: o
        } = t, n = d.useMemo(() => t.links.map(c => c.type === E.gameReport ? {
            link: c,
            handler: xe
        } : null).filter(c => !!c), [o.length]), l = d.useMemo(() => {
            if (!s) return null;
            const c = n.find($ => $.link._id === s);
            return !c || !c.handler.hiddenRender ? null : c.handler.hiddenRender({
                link: c.link,
                playerName: t.playerName,
                close: () => r("")
            })
        }, [s, n.length]);
        if (!n.length) return null;
        if (n.length === 1) {
            const c = (a = n[0]) == null ? void 0 : a.handler;
            return e.jsxs(e.Fragment, {
                children: [e.jsx(K, {
                    title: c.label,
                    children: e.jsx(S, {
                        shape: "circle",
                        icon: e.jsx(c.icon, {}),
                        onClick: () => r(n[0].link._id)
                    })
                }), l]
            })
        }
        const m = e.jsx(B, {
            children: n.map(c => e.jsx(B.Item, {
                onClick: () => r(c.link._id),
                icon: e.jsx(c.handler.icon, {}),
                children: c.handler.label
            }, c.link._id))
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(ge, {
                overlay: m,
                children: e.jsx(S, {
                    shape: "circle",
                    icon: e.jsx(re, {})
                })
            }), l]
        })
    },
    _e = t => {
        const {
            playerName: s,
            completion: r
        } = t;
        return e.jsx(C, {
            bodyStyle: {
                padding: "15px 20px",
                background: h.Snow
            },
            style: {
                overflow: "hidden"
            },
            children: e.jsxs(Be, {
                children: [e.jsxs(ze, {
                    children: ["Completed ", q(r.completedAt)]
                }), e.jsx(Oe, {
                    children: e.jsx(X, {
                        links: r.links || [],
                        playerName: s
                    })
                })]
            })
        })
    },
    Be = i.div.attrs({
        className: "flex between vc"
    })`
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  line-height: 1;
`,
    ze = i.div``,
    Oe = i.div``,
    Ge = t => {
        const {
            data: {
                name: s,
                completions: r
            }
        } = t, o = r.length > 1, n = () => o ? `Completed ${r.length} times` : `Completed ${q(r[0].completedAt)}`;
        return e.jsx(C, {
            children: e.jsxs(We, {
                children: [e.jsxs(He, {
                    children: [e.jsxs(Ke, {
                        children: [e.jsx(J, {
                            children: s
                        }), e.jsx(Q, {
                            children: n()
                        })]
                    }), e.jsx(Ue, {
                        children: o ? null : e.jsx(X, {
                            links: r[0].links || [],
                            playerName: s
                        })
                    })]
                }), o ? e.jsxs(e.Fragment, {
                    children: [e.jsx("div", {
                        style: {
                            height: 17
                        }
                    }), r.map((l, m) => e.jsxs(d.Fragment, {
                        children: [e.jsx(_e, {
                            completion: l,
                            playerName: s
                        }), m !== r.length - 1 && e.jsx("div", {
                            style: {
                                height: 10
                            }
                        })]
                    }, `${t.data._id}-completion-${m}`))]
                }) : null]
            })
        })
    },
    We = i.div`
  color: ${h.Black};
`,
    He = i.div.attrs({
        className: "flex between vc"
    })``,
    Ke = i.div``,
    J = i.div`
  font-size: 18px;
  font-weight: ${f.Bold};
  color: rgba(0, 0, 0, 0.9);
`,
    Q = i.div`
  font-size: 15px;
  margin-top: 2px;
`,
    Ue = i.div``,
    Ye = t => {
        const [s, r, o] = j(!0), [n, l] = d.useState([]);
        if (d.useEffect(() => {
                r(), y({
                    url: "/api/map-assignment/completions",
                    data: {
                        id: t.id,
                        group: t.group
                    },
                    success: a => l(a),
                    both: o,
                    cacheKey: "ASSIGNMENT_COMPLETED"
                })
            }, [t.group]), s) return e.jsx(D, {});
        if (!n.length) return e.jsx(A, {
            children: t.group ? "Nobody in this class has completed this assignment yet" : "Nobody has completed this assignment yet"
        });
        const m = t.sort === v.firstName ? I(n, a => a.name) : F(n, a => a.name);
        return e.jsxs("div", {
            className: "maxWidth",
            children: [m.length >= 1e3 ? e.jsxs(e.Fragment, {
                children: [e.jsx(O, {
                    message: e.jsx("span", {
                        style: {
                            fontWeight: f.Bold
                        },
                        children: "Only 1,000 Completions Shown"
                    }),
                    description: "This assignment has been completed 1,000+ times. Only the first 1,000 completions are shown, meaning data for some students may be missing.",
                    showIcon: !0,
                    type: "warning"
                }), e.jsx(G, {})]
            }) : null, m.map((a, c) => e.jsxs(d.Fragment, {
                children: [e.jsx(Ge, {
                    data: a
                }), c !== n.length - 1 && e.jsx("div", {
                    style: {
                        height: 10
                    }
                })]
            }, a._id + "-player"))]
        })
    },
    L = {
        marginLeft: 15
    },
    p = {
        fontSize: 16,
        color: "rgba(0,0,0,0.9)"
    },
    M = "NO_GROUP",
    qe = t => {
        const s = n => {
                t.onStatusChange(n.target.value)
            },
            r = n => {
                n.target.value === M ? t.onGroupChange("") : t.onGroupChange(n.target.value)
            },
            o = n => {
                t.onSortChange(n.target.value)
            };
        return e.jsxs(Xe, {
            children: [t.groups && t.groups.length ? e.jsxs(e.Fragment, {
                children: [e.jsx(R, {
                    children: "Class"
                }), e.jsx(x.Group, {
                    value: t.group || M,
                    onChange: r,
                    className: "flex-column",
                    style: L,
                    children: e.jsxs(w, {
                        direction: "vertical",
                        children: [e.jsx(x, {
                            value: M,
                            style: p,
                            children: "Any Class"
                        }), t.groups.map(n => e.jsx(x, {
                            value: n._id,
                            style: p,
                            children: n.name
                        }, n._id + "-class-option"))]
                    })
                }), e.jsx("div", {
                    style: {
                        height: 40
                    }
                })]
            }) : null, t.groups && t.groups.length ? e.jsxs(e.Fragment, {
                children: [e.jsx(R, {
                    children: "Status"
                }), e.jsx(x.Group, {
                    value: t.status,
                    onChange: s,
                    style: L,
                    children: e.jsxs(w, {
                        direction: "vertical",
                        children: [e.jsx(x, {
                            value: N.completed,
                            style: p,
                            children: "Completed"
                        }), e.jsx(x, {
                            value: N.inProgress,
                            style: p,
                            children: "In Progress"
                        }), e.jsx(x, {
                            value: N.notStarted,
                            style: p,
                            children: "Has Not Started"
                        })]
                    })
                }), e.jsx("div", {
                    style: {
                        height: 40
                    }
                })]
            }) : null, e.jsx(R, {
                children: "Sort"
            }), e.jsx(x.Group, {
                value: t.sort,
                onChange: o,
                style: L,
                children: e.jsxs(w, {
                    direction: "vertical",
                    children: [e.jsx(x, {
                        value: v.firstName,
                        style: p,
                        children: "First Name"
                    }), e.jsx(x, {
                        value: v.lastName,
                        style: p,
                        children: "Last Initial"
                    })]
                })
            })]
        })
    },
    Xe = i.div`
  width: 220px;
  flex-shrink: 0;
  min-height: calc(100vh - 305px); // height of the top section
  border-right: 1px solid rgb(240, 240, 240);
  padding: 30px 0px 40px 0px;
`,
    R = ({
        children: t
    }) => e.jsx(Je, {
        children: e.jsx(Qe, {
            children: t
        })
    }),
    Je = i.div.attrs({
        className: "flex vc"
    })`
  margin-bottom: 15px;
`,
    Qe = i.div`
  font-size: 18px;
  font-weight: ${f.Bold};
  line-height: 1;
`,
    V = t => e.jsxs(C, {
        style: {
            color: h.Black
        },
        children: [e.jsx(J, {
            children: t.name
        }), ie.isNil(t.percentageComplete) ? null : e.jsxs(Q, {
            children: [t.percentageComplete, "% complete"]
        })]
    }),
    Ve = t => {
        const [s, r] = d.useState([]), [o, n, l] = j(!0);
        if (d.useEffect(() => {
                n(), y({
                    url: "/api/map-assignment/in-progress",
                    data: {
                        id: t.id,
                        group: t.group
                    },
                    success: a => r(a),
                    both: l,
                    cacheKey: "ASSIGNMENT_IN_PROGRESS"
                })
            }, [t.group]), o) return e.jsx(D, {});
        if (!s.length) return e.jsx(A, {
            children: t.group ? "No students in this class are currently working on this assignment" : "Nobody is currently working on this assignment"
        });
        const m = t.sort === v.firstName ? I(s, a => a.name) : F(s, a => a.name);
        return e.jsx("div", {
            className: "maxWidth",
            children: m.map((a, c) => e.jsxs(d.Fragment, {
                children: [e.jsx(V, {
                    name: a.name,
                    percentageComplete: a.percentageComplete
                }), c !== s.length - 1 && e.jsx("div", {
                    style: {
                        height: 10
                    }
                })]
            }, a._id + "-in-progress"))
        })
    },
    Ze = t => {
        const [s, r] = d.useState([]), [o, n, l] = j(!0);
        if (d.useEffect(() => {
                n(), y({
                    url: "/api/map-assignment/not-started",
                    data: {
                        id: t.id,
                        group: t.group
                    },
                    success: a => r(a),
                    both: l,
                    cacheKey: "ASSIGNMENT_NOT_STARTED"
                })
            }, [t.group]), o) return e.jsx(D, {});
        if (!s.length) return e.jsx(A, {
            children: "Looks like everybody has either completed this assignment or is working on it!"
        });
        const m = t.sort === v.firstName ? I(s, a => a.name) : F(s, a => a.name);
        return e.jsx("div", {
            className: "maxWidth",
            children: m.map((a, c) => e.jsxs(d.Fragment, {
                children: [e.jsx(V, {
                    name: a.name
                }), c !== s.length - 1 && e.jsx("div", {
                    style: {
                        height: 10
                    }
                })]
            }, a._id + "-not-started"))
        })
    };
var N = (t => (t.completed = "completed", t.inProgress = "in-progress", t.notStarted = "not-started", t))(N || {}),
    v = (t => (t.firstName = "firstName", t.lastName = "lastName", t))(v || {});
const et = t => {
        const [s, r] = d.useState("completed"), [o, n] = d.useState(""), [l, m] = d.useState("firstName"), a = () => s === "completed" ? e.jsx(Ye, {
            id: t.id,
            group: o,
            sort: l
        }) : s === "in-progress" ? e.jsx(Ve, {
            id: t.id,
            group: o,
            sort: l
        }) : s === "not-started" ? e.jsx(Ze, {
            id: t.id,
            group: o,
            sort: l
        }) : null;
        return e.jsxs(tt, {
            children: [e.jsx(qe, {
                group: o,
                onGroupChange: n,
                groups: t.groups,
                status: s,
                onStatusChange: r,
                sort: l,
                onSortChange: m
            }), e.jsx(nt, {
                children: a()
            })]
        })
    },
    tt = i.div.attrs({
        className: "flex"
    })`
  padding: 0px 30px;
`,
    nt = i.div.attrs({
        className: "flex"
    })`
  flex: 1;
  padding: 30px;
  padding-right: 0px;
`,
    st = t => {
        const [s, r, o] = j(!0), [n, l] = d.useState();
        return d.useEffect(() => {
            y({
                url: `/api/games/basic-info/${t.id}`,
                success: m => l(m),
                cacheKey: "SIMPLE_KIT",
                both: o
            })
        }, [t.id]), s ? e.jsx(C, {
            style: {
                height: 110
            },
            bodyStyle: {
                height: "100%"
            },
            children: e.jsx("div", {
                className: "maxAll flex-center",
                children: e.jsx(W, {})
            })
        }) : e.jsx(C, {
            hoverable: !0,
            children: e.jsx(Y, {
                to: n ? `/view/${n._id}` : void 0,
                children: e.jsxs(rt, {
                    children: [n != null && n.gif ? e.jsx(je, {
                        size: 60,
                        blockModalOpen: !0,
                        image: n.gif
                    }) : e.jsx(it, {}), e.jsxs(ot, {
                        children: [e.jsx(at, {
                            children: (n == null ? void 0 : n.title) || "Deleted Kit"
                        }), e.jsx(lt, {
                            children: "Kit"
                        })]
                    })]
                })
            })
        })
    },
    rt = i.div.attrs({
        className: "flex vc"
    })`
  color: ${h.Black};
`,
    it = i.div`
  height: 60px;
  width: 60px;
  border-radius: 5px;
  background: ${h.BackgroundPurple};
`,
    ot = i.div`
  margin-left: 20px;
`,
    at = i.div`
  font-size: 16px;
  font-weight: ${f.Bold};
`,
    lt = i.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 3px;
  font-style: italic;
`,
    ct = t => {
        const {
            connectedResource: {
                value: s,
                type: r
            }
        } = t;
        return r !== ue.kit ? null : e.jsx(st, {
            id: s
        })
    },
    dt = t => {
        const {
            hooks: s
        } = t.info, [r, o] = d.useState([]);
        return e.jsx(mt, {
            children: e.jsx(pe, {
                hooks: s.template,
                defaultState: s.values,
                readOnly: !0,
                modeType: ve.assignment,
                location: fe.experiencePicker,
                onConnectedResourcesChange: o,
                header: n => !n && !r.length ? e.jsx(P, {
                    children: "There is currently no info to show for this assignment."
                }) : n ? e.jsx(P, {
                    children: "These are the options you set when creating this assignment. They cannot be changed."
                }) : null,
                footer: n => r.length ? e.jsxs(e.Fragment, {
                    children: [n > 0 ? e.jsx(G, {
                        style: {
                            marginTop: 30,
                            marginBottom: 30
                        }
                    }) : null, e.jsx(P, {
                        children: "Here are the resources connected to this assignment. They cannot be changed."
                    }), r.map((l, m) => e.jsxs(d.Fragment, {
                        children: [e.jsx(ct, {
                            connectedResource: l
                        }), m + 1 !== r.length ? e.jsx("div", {
                            style: {
                                height: 10
                            }
                        }) : null]
                    }, `connected-resource-${l.value}`))]
                }) : null
            })
        })
    },
    mt = i.div`
  padding: 35px;
`,
    P = i.div`
  font-size: 16px;
  margin-bottom: 16px;
`,
    ht = t => {
        const {
            tab: s,
            id: r,
            info: o
        } = t, n = () => s === g.share ? e.jsx(Le, {
            id: r
        }) : s === g.results ? e.jsx(et, {
            id: r,
            groups: o.groups
        }) : s === g.info ? e.jsx(dt, {
            info: o
        }) : null;
        return e.jsx(xt, {
            children: n()
        })
    },
    xt = i(ce).attrs({
        className: "scroll-x"
    })`
  width: 1000px;
  max-width: 90%;
  flex: 1;
  padding: 0px;
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: ${h.Black};
  font-family: ${k.SFPro};
`,
    gt = t => {
        const s = n => n === t.tab,
            r = n => () => t.onTabChange(n),
            o = () => t.info.links.length ? e.jsx(e.Fragment, {
                children: t.info.links.map(n => n.linkType === E.gameReport ? e.jsx(b, {
                    icon: "fa-external-link",
                    title: "Open Report",
                    to: `/report/${n.linkId}`
                }, `link-${n._id}`) : null)
            }) : null;
        return e.jsxs(ut, {
            children: [t.isPastDue ? null : e.jsx(b, {
                selected: s(g.share),
                onClick: r(g.share),
                title: "Share",
                icon: "fa-share"
            }), e.jsx(b, {
                selected: s(g.results),
                onClick: r(g.results),
                title: "Results",
                icon: "fa-poll"
            }), t.info.hooks.template.hooks.length ? e.jsx(b, {
                selected: s(g.info),
                onClick: r(g.info),
                title: "Info",
                icon: "fa-info-circle"
            }) : null, o()]
        })
    },
    b = t => e.jsxs(pt, {
        selected: t.selected,
        onClick: t.onClick,
        to: t.to,
        target: t.to ? "_blank" : void 0,
        children: [e.jsx("i", {
            className: `far ${t.icon}`,
            style: {
                marginRight: 10
            }
        }), e.jsx("span", {
            children: t.title
        })]
    }),
    ut = i.div.attrs({
        className: "flex-center wrap"
    })`
  padding: 0px 20px;
  margin-bottom: 30px;
  margin-top: 15px;
  column-gap: 12px;
  row-gap: 12px;
`,
    pt = i(Y).attrs({
        className: "flex vc hc"
    })`
  color: rgba(0, 0, 0, 0.8);
  font-family: ${k.SFPro};
  background: ${h.White};
  border-style: solid;
  border-color: ${t=>t.selected?"#66bb6a":h.BorderGray};
  border-width: 2px;
  height: 43px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 5px;
  font-size: 18px;
  transition: border-color 0.3s;
  line-height: 1;
  cursor: pointer;
  &:hover {
    color: #66bb6a;
  }
`;
var g = (t => (t.share = "share", t.results = "results", t.info = "info", t))(g || {});
const ft = t => {
        const {
            title: s,
            dueDate: r
        } = t.info, [o, n] = d.useState("share"), l = u().isAfter(u(r));
        d.useEffect(() => {
            l && n("results")
        }, [l]);
        const m = u(oe(t.id)).add(546, "days"),
            c = !u().isAfter(m) && Math.abs(u().diff(m, "months")) < 3;
        return e.jsxs(e.Fragment, {
            children: [c ? e.jsx(O, {
                banner: !0,
                message: `Assignments are automatically deleted after 1.5 years. This assignment will be deleted on ${m.format("MMMM Do")}.`
            }) : null, e.jsxs(jt, {
                children: [e.jsx(be, {
                    id: t.id,
                    title: s,
                    dueDate: r
                }), e.jsx(gt, {
                    tab: o,
                    onTabChange: n,
                    info: t.info,
                    isPastDue: l
                }), e.jsx(ht, {
                    id: t.id,
                    info: t.info,
                    tab: o
                })]
            }), e.jsx(H, {
                title: `${s} | Assignment`
            })]
        })
    },
    jt = i.div.attrs({
        className: "maxWidth flex-column vc"
    })`
  flex: 1;
  padding: 40px 20px 0px 20px;
`,
    vn = () => {
        const [t, s] = d.useState(), {
            id: r
        } = ae();
        d.useEffect(() => {
            y({
                url: `/api/map-assignment/basic-info/${r}`,
                success: n => {
                    s(n)
                },
                error: () => ye(le)
            })
        }, []);
        const o = () => t ? e.jsx(ft, {
            id: r,
            info: t
        }) : e.jsx(yt, {
            children: e.jsx(W, {
                size: "large"
            })
        });
        return e.jsxs(e.Fragment, {
            children: [e.jsx(H, {
                title: "Assignment"
            }), e.jsxs(vt, {
                children: [e.jsx(Ce, {
                    includeSpacer: !0
                }), o()]
            })]
        })
    },
    vt = i.div.attrs({
        className: "flex flex-column"
    })`
  flex: 1;
  background: ${h.Snow};
  color: ${h.Black};
  font-family: ${k.SFPro};
`,
    yt = i.div.attrs({
        className: "maxAll flex-center"
    })``;
export {
    vn as
    default
};