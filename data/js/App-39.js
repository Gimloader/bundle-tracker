import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    O as n,
    Q as r,
    o as i,
    t as a,
    u as o
} from "./utils.js";
import {
    t as s
} from "./react-1.js";
import {
    l as c
} from "./dist-3.js";
import {
    t as l
} from "./tooltip-1.js";
import {
    t as u
} from "./message.js";
import {
    a as d,
    t as ee
} from "./modal-1.js";
import {
    t as f
} from "./button-1.js";
import {
    r as p,
    t as m
} from "./dropdown.js";
import {
    t as h
} from "./input.js";
import {
    t as g
} from "./EllipsisOutlined.js";
import {
    t as _
} from "./advancedFormat.js";
import {
    t as v
} from "./radio.js";
import {
    t as y
} from "./card.js";
import {
    t as b
} from "./spin.js";
import {
    t as x
} from "./space.js";
import {
    t as te
} from "./App-4.js";
import {
    t as ne
} from "./copy-to-clipboard.js";
import "./Paths.js";
import {
    t as re
} from "./jsx-runtime.js";
import {
    b as S,
    c as C,
    l as w,
    n as T,
    s as E,
    y as D
} from "./_index.js";
import {
    t as O
} from "./AccessibleAnchor.js";
import {
    t as ie
} from "./Paper.js";
import {
    t as ae
} from "./NavigateTo.js";
import {
    t as oe
} from "./lodash.js";
import {
    t as se
} from "./MapModeType.js";
import {
    t as ce
} from "./ImagePreview.js";
import {
    a as le,
    o as ue,
    t as de
} from "./App-3.js";
import {
    t as fe
} from "./GameReportCompletionLink.js";
var k = e(r()),
    A = e(s()),
    j = re(),
    pe = e => {
        let [r, i, a] = n(!1), [o, s] = A.useState(e.title), [c, u] = A.useState(``), [d, p, m] = n(!1), g = e => u(e.target.value), _ = () => {
            d || (p(), t({
                url: `/api/map-assignment/change-title`,
                data: {
                    id: e.id,
                    title: c
                },
                success: e => {
                    s(e.title), u(``), a()
                },
                both: () => {
                    m()
                }
            }))
        };
        return (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsxs)(me, {
                children: [(0, j.jsxs)(he, {
                    children: [`Assignment - Due `, (0, k.default)(e.dueDate).format(`MMMM Do`)]
                }), (0, j.jsx)(`div`, {
                    children: (0, j.jsx)(l, {
                        title: `Change Name`,
                        placement: `left`,
                        children: (0, j.jsx)(ge, {
                            onClick: i,
                            children: o
                        })
                    })
                })]
            }), (0, j.jsx)(ee, {
                open: r,
                onCancel: a,
                closable: !0,
                footer: (0, j.jsx)(f, {
                    type: `primary`,
                    loading: d,
                    onClick: _,
                    children: `Save`
                }),
                width: 600,
                children: (0, j.jsxs)(_e, {
                    children: [(0, j.jsx)(ve, {
                        children: `New Name`
                    }), (0, j.jsx)(ye, {
                        children: `Leave empty to use the name of the game mode for this assignment!`
                    }), (0, j.jsx)(h, {
                        size: `large`,
                        style: {
                            width: `100%`
                        },
                        maxLength: 32,
                        placeholder: e.title || `Assignment...`,
                        value: c,
                        onChange: g,
                        onPressEnter: _
                    })]
                })
            })]
        })
    },
    me = w.div.attrs({
        className: `maxWidth flex-center flex-column`
    })``,
    he = w.div`
  font-size: 18px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.85);
`,
    ge = w.div`
  font-size: 56px;
  font-weight: ${E.UltraBold};
  text-align: center;
  cursor: pointer;
`,
    _e = w.div`
  color: ${T.Black};
  font-family: ${C.SFPro};
`,
    ve = w.div`
  font-size: 22px;
  font-weight: ${E.Bold};
`,
    ye = w.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
`,
    be = e(ne()),
    xe = e => {
        let t = o() + `/join/` + e.id;
        return (0, j.jsxs)(M, {
            children: [(0, j.jsx)(Se, {
                children: `Share this link with your students to have them complete this assignment!`
            }), (0, j.jsxs)(Ce, {
                children: [(0, j.jsx)(h, {
                    value: t,
                    style: {
                        color: T.Black
                    },
                    size: `large`
                }), (0, j.jsx)(f, {
                    size: `large`,
                    type: `primary`,
                    style: {
                        marginLeft: 10
                    },
                    onClick: () => {
                        (0, be.default)(t), u.success(`Link copied to clipboard!`)
                    },
                    children: `Copy Link`
                })]
            })]
        })
    },
    M = w.div`
  padding: 35px;
`,
    Se = w.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
`,
    Ce = w.div.attrs({
        className: `flex vc `
    })`
  padding: 20px;
  margin-top: 20px;
  border: 1px solid ${T.BorderGray};
  border-radius: 4px;
  margin-top: 10px;
`,
    N = (e, t) => e.sort((e, n) => {
        let r = t(e),
            i = t(n);
        return r.localeCompare(i)
    }),
    P = e => e.split(` `).pop() || e,
    F = (e, t) => e.sort((e, n) => {
        let r = P(t(e)),
            i = P(t(n));
        return r.localeCompare(i)
    }),
    I = e => (0, j.jsxs)(we, {
        children: [(0, j.jsx)(Te, {}), (0, j.jsx)(Ee, {
            children: `Nothing yet...`
        }), (0, j.jsx)(De, {
            children: e.children
        })]
    }),
    we = w.div.attrs({
        className: `flex-column flex-center maxWidth`
    })`
  flex: 1;
  min-height: 400px;
  text-align: center;
`,
    Te = w.img.attrs({
        src: `/client/img/assignment/box.svg`
    })`
  height: 80px;
`,
    Ee = w.div`
  font-weight: ${E.UltraBold};
  font-size: 28px;
  margin-top: 15px;
`,
    De = w.div`
  font-size: 18px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`,
    L = () => (0, j.jsx)(Oe, {
        children: (0, j.jsx)(d, {
            active: !0,
            title: !1,
            paragraph: {
                rows: 14
            }
        })
    }),
    Oe = w.div.attrs({
        className: `maxWidth`
    })`
  .ant-skeleton-paragraph li {
    width: 100% !important;
  }
`,
    ke = e(_());
k.default.extend(ke.default);
var R = e => `${(0,k.default)(e).format(`MMMM Do`)} at ${(0,k.default)(e).format(`h:mma`)}`,
    z = function(e) {
        return e.gameReport = `gameReport`, e
    }({}),
    B = e => {
        let [t, n] = A.useState(), {
            links: r
        } = e, i = A.useMemo(() => e.links.map(e => e.type === z.gameReport ? {
            link: e,
            handler: fe
        } : null).filter(e => !!e), [r.length]), a = A.useMemo(() => {
            if (!t) return null;
            let r = i.find(e => e.link._id === t);
            return !r || !r.handler.hiddenRender ? null : r.handler.hiddenRender({
                link: r.link,
                playerName: e.playerName,
                close: () => n(``)
            })
        }, [t, i.length]);
        if (!i.length) return null;
        if (i.length === 1) {
            var o;
            let e = (o = i[0]) == null ? void 0 : o.handler;
            return (0, j.jsxs)(j.Fragment, {
                children: [(0, j.jsx)(l, {
                    title: e.label,
                    children: (0, j.jsx)(f, {
                        shape: `circle`,
                        icon: (0, j.jsx)(e.icon, {}),
                        onClick: () => n(i[0].link._id)
                    })
                }), a]
            })
        }
        let s = (0, j.jsx)(p, {
            children: i.map(e => (0, j.jsx)(p.Item, {
                onClick: () => n(e.link._id),
                icon: (0, j.jsx)(e.handler.icon, {}),
                children: e.handler.label
            }, e.link._id))
        });
        return (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)(m, {
                overlay: s,
                children: (0, j.jsx)(f, {
                    shape: `circle`,
                    icon: (0, j.jsx)(g, {})
                })
            }), a]
        })
    },
    Ae = e => {
        let {
            playerName: t,
            completion: n
        } = e;
        return (0, j.jsx)(y, {
            bodyStyle: {
                padding: `15px 20px`,
                background: T.Snow
            },
            style: {
                overflow: `hidden`
            },
            children: (0, j.jsxs)(je, {
                children: [(0, j.jsxs)(Me, {
                    children: [`Completed `, R(n.completedAt)]
                }), (0, j.jsx)(Ne, {
                    children: (0, j.jsx)(B, {
                        links: n.links || [],
                        playerName: t
                    })
                })]
            })
        })
    },
    je = w.div.attrs({
        className: `flex between vc`
    })`
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  line-height: 1;
`,
    Me = w.div``,
    Ne = w.div``,
    Pe = e => {
        let {
            data: {
                name: t,
                completions: n
            }
        } = e, r = n.length > 1;
        return (0, j.jsx)(y, {
            children: (0, j.jsxs)(Fe, {
                children: [(0, j.jsxs)(Ie, {
                    children: [(0, j.jsxs)(Le, {
                        children: [(0, j.jsx)(V, {
                            children: t
                        }), (0, j.jsx)(H, {
                            children: r ? `Completed ${n.length} times` : `Completed ${R(n[0].completedAt)}`
                        })]
                    }), (0, j.jsx)(Re, {
                        children: r ? null : (0, j.jsx)(B, {
                            links: n[0].links || [],
                            playerName: t
                        })
                    })]
                }), r ? (0, j.jsxs)(j.Fragment, {
                    children: [(0, j.jsx)(`div`, {
                        style: {
                            height: 17
                        }
                    }), n.map((r, i) => (0, j.jsxs)(A.Fragment, {
                        children: [(0, j.jsx)(Ae, {
                            completion: r,
                            playerName: t
                        }), i !== n.length - 1 && (0, j.jsx)(`div`, {
                            style: {
                                height: 10
                            }
                        })]
                    }, `${e.data._id}-completion-${i}`))]
                }) : null]
            })
        })
    },
    Fe = w.div`
  color: ${T.Black};
`,
    Ie = w.div.attrs({
        className: `flex between vc`
    })``,
    Le = w.div``,
    V = w.div`
  font-size: 18px;
  font-weight: ${E.Bold};
  color: rgba(0, 0, 0, 0.9);
`,
    H = w.div`
  font-size: 15px;
  margin-top: 2px;
`,
    Re = w.div``,
    ze = e => {
        let [r, i, a] = n(!0), [o, s] = A.useState([]);
        if (A.useEffect(() => {
                i(), t({
                    url: `/api/map-assignment/completions`,
                    data: {
                        id: e.id,
                        group: e.group
                    },
                    success: e => s(e),
                    both: a,
                    cacheKey: `ASSIGNMENT_COMPLETED`
                })
            }, [e.group]), r) return (0, j.jsx)(L, {});
        if (!o.length) return (0, j.jsx)(I, {
            children: e.group ? `Nobody in this class has completed this assignment yet` : `Nobody has completed this assignment yet`
        });
        let c = e.sort === Y.firstName ? N(o, e => e.name) : F(o, e => e.name);
        return (0, j.jsxs)(`div`, {
            className: `maxWidth`,
            children: [c.length >= 1e3 ? (0, j.jsxs)(j.Fragment, {
                children: [(0, j.jsx)(S, {
                    message: (0, j.jsx)(`span`, {
                        style: {
                            fontWeight: E.Bold
                        },
                        children: `Only 1,000 Completions Shown`
                    }),
                    description: `This assignment has been completed 1,000+ times. Only the first 1,000 completions are shown, meaning data for some students may be missing.`,
                    showIcon: !0,
                    type: `warning`
                }), (0, j.jsx)(D, {})]
            }) : null, c.map((e, t) => (0, j.jsxs)(A.Fragment, {
                children: [(0, j.jsx)(Pe, {
                    data: e
                }), t !== o.length - 1 && (0, j.jsx)(`div`, {
                    style: {
                        height: 10
                    }
                })]
            }, e._id + `-player`))]
        })
    },
    U = {
        marginLeft: 15
    },
    W = {
        fontSize: 16,
        color: `rgba(0,0,0,0.9)`
    },
    G = `NO_GROUP`,
    Be = e => (0, j.jsxs)(Ve, {
        children: [e.groups && e.groups.length ? (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)(K, {
                children: `Class`
            }), (0, j.jsx)(v.Group, {
                value: e.group || G,
                onChange: t => {
                    t.target.value === G ? e.onGroupChange(``) : e.onGroupChange(t.target.value)
                },
                className: `flex-column`,
                style: U,
                children: (0, j.jsxs)(x, {
                    direction: `vertical`,
                    children: [(0, j.jsx)(v, {
                        value: G,
                        style: W,
                        children: `Any Class`
                    }), e.groups.map(e => (0, j.jsx)(v, {
                        value: e._id,
                        style: W,
                        children: e.name
                    }, e._id + `-class-option`))]
                })
            }), (0, j.jsx)(`div`, {
                style: {
                    height: 40
                }
            })]
        }) : null, e.groups && e.groups.length ? (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)(K, {
                children: `Status`
            }), (0, j.jsx)(v.Group, {
                value: e.status,
                onChange: t => {
                    e.onStatusChange(t.target.value)
                },
                style: U,
                children: (0, j.jsxs)(x, {
                    direction: `vertical`,
                    children: [(0, j.jsx)(v, {
                        value: J.completed,
                        style: W,
                        children: `Completed`
                    }), (0, j.jsx)(v, {
                        value: J.inProgress,
                        style: W,
                        children: `In Progress`
                    }), (0, j.jsx)(v, {
                        value: J.notStarted,
                        style: W,
                        children: `Has Not Started`
                    })]
                })
            }), (0, j.jsx)(`div`, {
                style: {
                    height: 40
                }
            })]
        }) : null, (0, j.jsx)(K, {
            children: `Sort`
        }), (0, j.jsx)(v.Group, {
            value: e.sort,
            onChange: t => {
                e.onSortChange(t.target.value)
            },
            style: U,
            children: (0, j.jsxs)(x, {
                direction: `vertical`,
                children: [(0, j.jsx)(v, {
                    value: Y.firstName,
                    style: W,
                    children: `First Name`
                }), (0, j.jsx)(v, {
                    value: Y.lastName,
                    style: W,
                    children: `Last Initial`
                })]
            })
        })]
    }),
    Ve = w.div`
  width: 220px;
  flex-shrink: 0;
  min-height: calc(100vh - 305px); // height of the top section
  border-right: 1px solid rgb(240, 240, 240);
  padding: 30px 0px 40px 0px;
`,
    K = ({
        children: e
    }) => (0, j.jsx)(He, {
        children: (0, j.jsx)(Ue, {
            children: e
        })
    }),
    He = w.div.attrs({
        className: `flex vc`
    })`
  margin-bottom: 15px;
`,
    Ue = w.div`
  font-size: 18px;
  font-weight: ${E.Bold};
  line-height: 1;
`,
    We = oe(),
    q = e => (0, j.jsxs)(y, {
        style: {
            color: T.Black
        },
        children: [(0, j.jsx)(V, {
            children: e.name
        }), (0, We.isNil)(e.percentageComplete) ? null : (0, j.jsxs)(H, {
            children: [e.percentageComplete, `% complete`]
        })]
    }),
    Ge = e => {
        let [r, i] = A.useState([]), [a, o, s] = n(!0);
        if (A.useEffect(() => {
                o(), t({
                    url: `/api/map-assignment/in-progress`,
                    data: {
                        id: e.id,
                        group: e.group
                    },
                    success: e => i(e),
                    both: s,
                    cacheKey: `ASSIGNMENT_IN_PROGRESS`
                })
            }, [e.group]), a) return (0, j.jsx)(L, {});
        if (!r.length) return (0, j.jsx)(I, {
            children: e.group ? `No students in this class are currently working on this assignment` : `Nobody is currently working on this assignment`
        });
        let c = e.sort === Y.firstName ? N(r, e => e.name) : F(r, e => e.name);
        return (0, j.jsx)(`div`, {
            className: `maxWidth`,
            children: c.map((e, t) => (0, j.jsxs)(A.Fragment, {
                children: [(0, j.jsx)(q, {
                    name: e.name,
                    percentageComplete: e.percentageComplete
                }), t !== r.length - 1 && (0, j.jsx)(`div`, {
                    style: {
                        height: 10
                    }
                })]
            }, e._id + `-in-progress`))
        })
    },
    Ke = e => {
        let [r, i] = A.useState([]), [a, o, s] = n(!0);
        if (A.useEffect(() => {
                o(), t({
                    url: `/api/map-assignment/not-started`,
                    data: {
                        id: e.id,
                        group: e.group
                    },
                    success: e => i(e),
                    both: s,
                    cacheKey: `ASSIGNMENT_NOT_STARTED`
                })
            }, [e.group]), a) return (0, j.jsx)(L, {});
        if (!r.length) return (0, j.jsx)(I, {
            children: `Looks like everybody has either completed this assignment or is working on it!`
        });
        let c = e.sort === Y.firstName ? N(r, e => e.name) : F(r, e => e.name);
        return (0, j.jsx)(`div`, {
            className: `maxWidth`,
            children: c.map((e, t) => (0, j.jsxs)(A.Fragment, {
                children: [(0, j.jsx)(q, {
                    name: e.name
                }), t !== r.length - 1 && (0, j.jsx)(`div`, {
                    style: {
                        height: 10
                    }
                })]
            }, e._id + `-not-started`))
        })
    },
    J = function(e) {
        return e.completed = `completed`, e.inProgress = `in-progress`, e.notStarted = `not-started`, e
    }({}),
    Y = function(e) {
        return e.firstName = `firstName`, e.lastName = `lastName`, e
    }({}),
    qe = e => {
        let [t, n] = A.useState(`completed`), [r, i] = A.useState(``), [a, o] = A.useState(`firstName`);
        return (0, j.jsxs)(Je, {
            children: [(0, j.jsx)(Be, {
                group: r,
                onGroupChange: i,
                groups: e.groups,
                status: t,
                onStatusChange: n,
                sort: a,
                onSortChange: o
            }), (0, j.jsx)(Ye, {
                children: t === `completed` ? (0, j.jsx)(ze, {
                    id: e.id,
                    group: r,
                    sort: a
                }) : t === `in-progress` ? (0, j.jsx)(Ge, {
                    id: e.id,
                    group: r,
                    sort: a
                }) : t === `not-started` ? (0, j.jsx)(Ke, {
                    id: e.id,
                    group: r,
                    sort: a
                }) : null
            })]
        })
    },
    Je = w.div.attrs({
        className: `flex`
    })`
  padding: 0px 30px;
`,
    Ye = w.div.attrs({
        className: `flex`
    })`
  flex: 1;
  padding: 30px;
  padding-right: 0px;
`,
    Xe = e => {
        let [r, i, a] = n(!0), [o, s] = A.useState();
        return A.useEffect(() => {
            t({
                url: `/api/games/basic-info/${e.id}`,
                success: e => s(e),
                cacheKey: `SIMPLE_KIT`,
                both: a
            })
        }, [e.id]), r ? (0, j.jsx)(y, {
            style: {
                height: 110
            },
            bodyStyle: {
                height: `100%`
            },
            children: (0, j.jsx)(`div`, {
                className: `maxAll flex-center`,
                children: (0, j.jsx)(b, {})
            })
        }) : (0, j.jsx)(y, {
            hoverable: !0,
            children: (0, j.jsx)(O, {
                to: o ? `/view/${o._id}` : void 0,
                children: (0, j.jsxs)(Ze, {
                    children: [o != null && o.gif ? (0, j.jsx)(ce, {
                        size: 60,
                        blockModalOpen: !0,
                        image: o.gif
                    }) : (0, j.jsx)(Qe, {}), (0, j.jsxs)($e, {
                        children: [(0, j.jsx)(et, {
                            children: (o == null ? void 0 : o.title) || `Deleted Kit`
                        }), (0, j.jsx)(tt, {
                            children: `Kit`
                        })]
                    })]
                })
            })
        })
    },
    Ze = w.div.attrs({
        className: `flex vc`
    })`
  color: ${T.Black};
`,
    Qe = w.div`
  height: 60px;
  width: 60px;
  border-radius: 5px;
  background: ${T.BackgroundPurple};
`,
    $e = w.div`
  margin-left: 20px;
`,
    et = w.div`
  font-size: 16px;
  font-weight: ${E.Bold};
`,
    tt = w.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 3px;
  font-style: italic;
`,
    nt = e => {
        let {
            connectedResource: {
                value: t,
                type: n
            }
        } = e;
        return n === ue.kit ? (0, j.jsx)(Xe, {
            id: t
        }) : null
    },
    rt = e => {
        let {
            hooks: t
        } = e.info, [n, r] = A.useState([]);
        return (0, j.jsx)(it, {
            children: (0, j.jsx)(de, {
                hooks: t.template,
                defaultState: t.values,
                readOnly: !0,
                modeType: se.assignment,
                location: le.experiencePicker,
                onConnectedResourcesChange: r,
                header: e => !e && !n.length ? (0, j.jsx)(X, {
                    children: `There is currently no info to show for this assignment.`
                }) : e ? (0, j.jsx)(X, {
                    children: `These are the options you set when creating this assignment. They cannot be changed.`
                }) : null,
                footer: e => n.length ? (0, j.jsxs)(j.Fragment, {
                    children: [e > 0 ? (0, j.jsx)(D, {
                        style: {
                            marginTop: 30,
                            marginBottom: 30
                        }
                    }) : null, (0, j.jsx)(X, {
                        children: `Here are the resources connected to this assignment. They cannot be changed.`
                    }), n.map((e, t) => (0, j.jsxs)(A.Fragment, {
                        children: [(0, j.jsx)(nt, {
                            connectedResource: e
                        }), t + 1 === n.length ? null : (0, j.jsx)(`div`, {
                            style: {
                                height: 10
                            }
                        })]
                    }, `connected-resource-${e.value}`))]
                }) : null
            })
        })
    },
    it = w.div`
  padding: 35px;
`,
    X = w.div`
  font-size: 16px;
  margin-bottom: 16px;
`,
    at = e => {
        let {
            tab: t,
            id: n,
            info: r
        } = e;
        return (0, j.jsx)(ot, {
            children: t === $.share ? (0, j.jsx)(xe, {
                id: n
            }) : t === $.results ? (0, j.jsx)(qe, {
                id: n,
                groups: r.groups
            }) : t === $.info ? (0, j.jsx)(rt, {
                info: r
            }) : null
        })
    },
    ot = w(ie).attrs({
        className: `scroll-x`
    })`
  width: 1000px;
  max-width: 90%;
  flex: 1;
  padding: 0px;
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: ${T.Black};
  font-family: ${C.SFPro};
`,
    Z = e => {
        let t = t => t === e.tab,
            n = t => () => e.onTabChange(t);
        return (0, j.jsxs)(st, {
            children: [e.isPastDue ? null : (0, j.jsx)(Q, {
                selected: t($.share),
                onClick: n($.share),
                title: `Share`,
                icon: `fa-share`
            }), (0, j.jsx)(Q, {
                selected: t($.results),
                onClick: n($.results),
                title: `Results`,
                icon: `fa-poll`
            }), e.info.hooks.template.hooks.length ? (0, j.jsx)(Q, {
                selected: t($.info),
                onClick: n($.info),
                title: `Info`,
                icon: `fa-info-circle`
            }) : null, e.info.links.length ? (0, j.jsx)(j.Fragment, {
                children: e.info.links.map(e => e.linkType === z.gameReport ? (0, j.jsx)(Q, {
                    icon: `fa-external-link`,
                    title: `Open Report`,
                    to: `/report/${e.linkId}`
                }, `link-${e._id}`) : null)
            }) : null]
        })
    },
    Q = e => (0, j.jsxs)(ct, {
        selected: e.selected,
        onClick: e.onClick,
        to: e.to,
        target: e.to ? `_blank` : void 0,
        children: [(0, j.jsx)(`i`, {
            className: `far ${e.icon}`,
            style: {
                marginRight: 10
            }
        }), (0, j.jsx)(`span`, {
            children: e.title
        })]
    }),
    st = w.div.attrs({
        className: `flex-center wrap`
    })`
  padding: 0px 20px;
  margin-bottom: 30px;
  margin-top: 15px;
  column-gap: 12px;
  row-gap: 12px;
`,
    ct = w(O).attrs({
        className: `flex vc hc`
    })`
  color: rgba(0, 0, 0, 0.8);
  font-family: ${C.SFPro};
  background: ${T.White};
  border-style: solid;
  border-color: ${e=>e.selected?`#66bb6a`:T.BorderGray};
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
`,
    $ = function(e) {
        return e.share = `share`, e.results = `results`, e.info = `info`, e
    }({}),
    lt = e => {
        let {
            title: t,
            dueDate: n
        } = e.info, [r, o] = A.useState(`share`), s = (0, k.default)().isAfter((0, k.default)(n));
        A.useEffect(() => {
            s && o(`results`)
        }, [s]);
        let c = (0, k.default)(i(e.id)).add(546, `days`),
            l = !(0, k.default)().isAfter(c) && Math.abs((0, k.default)().diff(c, `months`)) < 3;
        return (0, j.jsxs)(j.Fragment, {
            children: [l ? (0, j.jsx)(S, {
                banner: !0,
                message: `Assignments are automatically deleted after 1.5 years. This assignment will be deleted on ${c.format(`MMMM Do`)}.`
            }) : null, (0, j.jsxs)(ut, {
                children: [(0, j.jsx)(pe, {
                    id: e.id,
                    title: t,
                    dueDate: n
                }), (0, j.jsx)(Z, {
                    tab: r,
                    onTabChange: o,
                    info: e.info,
                    isPastDue: s
                }), (0, j.jsx)(at, {
                    id: e.id,
                    info: e.info,
                    tab: r
                })]
            }), (0, j.jsx)(a, {
                title: `${t} | Assignment`
            })]
        })
    },
    ut = w.div.attrs({
        className: `maxWidth flex-column vc`
    })`
  flex: 1;
  padding: 40px 20px 0px 20px;
`,
    dt = () => {
        let [e, n] = A.useState(), {
            id: r
        } = c();
        return A.useEffect(() => {
            t({
                url: `/api/map-assignment/basic-info/${r}`,
                success: e => {
                    n(e)
                },
                error: () => ae(`/me`)
            })
        }, []), (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)(a, {
                title: `Assignment`
            }), (0, j.jsxs)(ft, {
                children: [(0, j.jsx)(te, {
                    includeSpacer: !0
                }), e ? (0, j.jsx)(lt, {
                    id: r,
                    info: e
                }) : (0, j.jsx)(pt, {
                    children: (0, j.jsx)(b, {
                        size: `large`
                    })
                })]
            })]
        })
    },
    ft = w.div.attrs({
        className: `flex flex-column`
    })`
  flex: 1;
  background: ${T.Snow};
  color: ${T.Black};
  font-family: ${C.SFPro};
`,
    pt = w.div.attrs({
        className: `maxAll flex-center`
    })``;
export {
    dt as
    default
};