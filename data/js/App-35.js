import {
    j as t,
    D as q,
    d as a,
    F as w,
    u as v,
    r as i,
    B as A,
    a as S,
    t as B,
    e as N,
    c as D,
    U as F,
    M as K,
    a3 as P,
    dJ as O,
    n as R,
    S as _,
    T as H
} from "./_index.js";
import {
    e as Y
} from "./react-flip-move.es.js";
import {
    Q as J
} from "./Question.js";
import {
    F as k
} from "./FontAwesomeIcon.js";
import {
    u as V,
    Q as z
} from "./App-14.js";
import {
    o as X
} from "./mobxreact.esm.js";
import {
    s as I
} from "./index-18.js";
import {
    T as L
} from "./index-5.js";
import {
    u as Z
} from "./useIntervalWhen.js";
import {
    N as G
} from "./NavigateTo.js";
import {
    I as ee
} from "./index-3.js";
import {
    P as te
} from "./Paper.js";
import "./ImagePreview.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./index-11.js";
import "./useBubbleLock.js";
import "./index-12.js";
import "./CopyOutlined.js";
import "./EditOutlined.js";
import "./index-4.js";
import "./context.js";
import "./index-19.js";
import "./index-10.js";
import "./move.js";
import "./index-2.js";
import "./PaperClipOutlined.js";
import "./useForceUpdate.js";
import "./DeleteOutlined.js";
import "./DownloadOutlined.js";
import "./progress.js";
import "./CheckOutlined.js";
import "./App-2.js";
import "./Sizes.js";
import "./AccessibleAnchor.js";
import "./motion.js";
import "./index-1.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./StarOutlined.js";
import "./index-6.js";
import "./SaveOutlined.js";
import "./PlayCircleOutlined.js";
import "./mathlive.min.js";
import "./index-8.js";
import "./DownOutlined.js";
import "./Tooltip.js";
import "./capitalize.js";
import "./inheritsLoose.js";
import "./index-13.js";
import "./useForm.js";
const se = () => t.jsxs(ie, {
        children: [t.jsx(ne, {}), t.jsx(oe, {
            children: "KitCollab"
        }), t.jsx(q, {})]
    }),
    ie = a.div``,
    ne = a.img.attrs({
        src: "/client/img/svgLogo.svg"
    })`
  height: 22px;
  opacity: 0.8;
`,
    oe = a.div`
  font-size: 45px;
  font-weight: ${w.UltraBold};
  line-height: 1;
  margin-top: 15px;
`,
    M = e => ({
        text: e.text,
        type: e.type,
        answers: e.answers.map(s => {
            const o = {
                text: s.text,
                correct: s.correct
            };
            return s.textType ? {
                ...o,
                textType: s.textType
            } : o
        })
    }),
    ae = e => {
        const s = i.useMemo(() => e.status === g.accepted ? "Accepted" : e.status === g.rejected ? "Rejected" : "Waiting For Approval", [e.status]),
            o = i.useMemo(() => e.status === g.accepted ? "#1b5e20" : e.status === g.rejected ? "#b71c1c" : "#283593", [e.status]);
        return t.jsxs(ce, {
            style: {
                backgroundColor: o
            },
            children: [t.jsx(de, {
                children: s
            }), t.jsx(le, {
                children: e.canEdit ? t.jsxs(t.Fragment, {
                    children: [t.jsx(L, {
                        title: "Edit Question",
                        children: t.jsx("div", {
                            onClick: e.openEditor,
                            children: t.jsx(k, {
                                style: {
                                    marginRight: 10
                                },
                                name: "far fa-edit"
                            })
                        })
                    }), t.jsx(L, {
                        title: "Delete Question",
                        children: t.jsx("div", {
                            onClick: e.deleteQuestion,
                            children: t.jsx(k, {
                                name: "far fa-trash-alt"
                            })
                        })
                    })]
                }) : null
            })]
        })
    },
    re = X(e => {
        const s = V(() => ({
                _id: e.id,
                text: e.question.text,
                type: e.question.type,
                answers: e.question.answers.map((r, j) => ({
                    _id: `${e.id}-answer-${j}`,
                    text: r.text,
                    correct: r.correct,
                    textType: r.textType
                }))
            })),
            [o, m, u] = v(!1),
            [c, n] = i.useState(e.status),
            [d, x, f] = v(!1),
            b = i.useCallback(() => {
                e.deleteQuestion(e.id)
            }, [e.id]);
        i.useEffect(() => {
            if (c !== e.status && (n(e.status), e.status === g.accepted && I.success({
                    message: "Question Accepted!",
                    description: "Your question was added to the kit!"
                }), e.status === g.rejected)) {
                const r = Math.random().toString();
                I.error({
                    message: "Question Rejected",
                    description: "Your question was rejected and sent back for you to modify.",
                    btn: t.jsx(A, {
                        onClick: () => {
                            m(), I.destroy(r)
                        },
                        children: "Modify Question"
                    }),
                    key: r
                })
            }
        }, [e.status]);
        const l = c !== g.accepted,
            y = r => {
                Object.keys(r).forEach(j => {
                    s[j] = r[j]
                })
            },
            p = r => {
                if (d) return;
                x();
                const j = M(r);
                S({
                    url: "/api/kitcollab/question/edit",
                    data: {
                        questionId: e.id,
                        question: j,
                        userSessionId: e.userSessionId
                    },
                    success: () => {
                        n(g.waiting), y(r), u()
                    },
                    error: C => {
                        B({
                            e: C,
                            default: {
                                title: "Error updating question. Try again later."
                            }
                        })
                    },
                    both: () => f()
                })
            };
        return t.jsxs(t.Fragment, {
            children: [t.jsx(J, {
                question: s,
                showAllAnswers: !0,
                blockToggleShowAnswers: !0,
                customStyle: {
                    marginBottom: 20
                },
                customBodyStyle: {
                    padding: 0
                },
                customTopComponent: t.jsx(ae, {
                    canEdit: l,
                    openEditor: m,
                    deleteQuestion: b,
                    status: c
                }),
                customContentStyle: {
                    padding: 24,
                    paddingTop: 14
                }
            }), t.jsx(z, {
                visible: !!(o && l),
                close: u,
                existingQuestion: s,
                submitQuestion: p,
                imagesBlocked: !0,
                audioBlocked: !0,
                latexBlocked: !0,
                loading: d,
                buttonLabel: c === g.rejected ? "Resubmit" : "Save"
            })]
        })
    }),
    ce = a.div.attrs({
        className: "maxWidth flex vc between"
    })`
  transition: background 0.3s;
  color: ${N.White};
  padding: 14px 24px;
  z-index: 999;
`,
    de = a.div.attrs({
        className: "flex vc"
    })`
  font-size: 16px;
  line-height: 1;
`,
    le = a.div.attrs({
        className: "flex vc"
    })`
  font-size: 16px;
`,
    ue = e => {
        const s = i.useRef(),
            [o, m, u] = v(!1),
            [c, n] = i.useState(!1),
            [d, x, f] = v(!1),
            b = y => {
                if (d) return;
                x();
                const p = M(y);
                S({
                    url: `/api/kitcollab/contribute/question/${e.sessionId}`,
                    data: {
                        question: p,
                        userName: e.userName,
                        userSessionId: e.userSessionId
                    },
                    success: r => {
                        n(!0), e.addQuestion(r, p), u()
                    },
                    error: r => {
                        B({
                            e: r,
                            default: {
                                title: "Error submitting question. Try again later."
                            }
                        })
                    },
                    both: () => f()
                })
            },
            l = () => {
                c && s.current && s.current.clear(), n(!1)
            };
        return t.jsxs(t.Fragment, {
            children: [t.jsx(D, {
                style: {
                    marginBottom: 20
                },
                hoverable: !0,
                onClick: m,
                children: t.jsx(me, {
                    children: t.jsxs("div", {
                        className: "flex-center flex-column maxWidth",
                        children: [t.jsx(xe, {
                            children: t.jsx(k, {
                                name: "fas fa-plus"
                            })
                        }), t.jsx(ge, {
                            children: "Contribute New Question"
                        })]
                    })
                })
            }), t.jsx(z, {
                ref: s,
                visible: o,
                close: u,
                submitQuestion: b,
                imagesBlocked: !0,
                audioBlocked: !0,
                latexBlocked: !0,
                loading: d,
                afterClose: l
            })]
        })
    },
    me = a.div`
  color: ${N.Black};
  font-family: ${F.SFPro};
  padding: 30px;
  text-align: center;
  @media (max-width: 660px) {
    padding: 30px 10px;
  }
`,
    xe = a.div.attrs({
        className: "flex-center"
    })`
  font-size: 22px;
  background: #2e7d32;
  color: ${N.White};
  height: 43px;
  width: 43px;
  border-radius: 50%;
`,
    ge = a.div`
  font-size: 26px;
  line-height: 1;
  margin-top: 16px;
  font-weight: ${w.Bold};
  @media (max-width: 660px) {
    line-height: 1.5;
  }
`;
var g = (e => (e.waiting = "waiting", e.rejected = "rejected", e.accepted = "accepted", e))(g || {});
const he = e => {
        const [s, o] = i.useState([]), m = () => {
            S({
                url: `/api/kitcollab/my-questions/${e.sessionId}`,
                data: {
                    userSessionId: e.userSessionId
                },
                success: n => {
                    o(n)
                }
            })
        }, u = (n, d) => {
            o(x => [{
                _id: n,
                status: "waiting",
                question: d
            }, ...x])
        }, c = n => {
            K.confirm({
                title: "Are you sure you want to delete this question?",
                okText: "Yes",
                onOk: () => {
                    o(d => d.filter(x => x._id !== n)), S({
                        url: "/api/kitcollab/question/remove",
                        data: {
                            questionId: n,
                            userSessionId: e.userSessionId
                        }
                    })
                }
            })
        };
        return i.useEffect(() => {
            m()
        }, []), Z(() => m(), 8e3), t.jsxs("div", {
            style: {
                minHeight: 500
            },
            children: [t.jsx(se, {}), t.jsx(ue, {
                sessionId: e.sessionId,
                userName: e.userName,
                userSessionId: e.userSessionId,
                addQuestion: u
            }), t.jsx(Y, {
                children: s.map(n => t.jsx("div", {
                    className: "maxWidth",
                    children: t.jsx(re, {
                        id: n._id,
                        question: n.question,
                        status: n.status,
                        deleteQuestion: c,
                        userSessionId: e.userSessionId
                    })
                }, `submitted-question-${n._id}`))
            })]
        })
    },
    fe = e => t.jsxs(je, {
        children: [t.jsx(be, {}), t.jsx(pe, {
            children: "KitCollab"
        }), t.jsxs(Se, {
            children: [t.jsx("b", {
                children: e.creatorName
            }), " invited you to contribute questions to their", " ", t.jsx("b", {
                children: e.gameName
            }), " kit. Once you enter, you can submit questions to be added to the kit."]
        }), t.jsx(q, {
            style: {
                margin: "30px 0px"
            }
        })]
    }),
    je = a.div.attrs({
        className: "maxWidth flex-center flex-column"
    })``,
    be = a.img.attrs({
        src: "/client/img/svgLogo.svg"
    })`
  height: 24px;
  opacity: 0.8;
`,
    pe = a.div`
  font-size: 48px;
  font-weight: ${w.UltraBold};
  line-height: 1;
  margin-top: 10px;
`,
    Se = a.div`
  font-size: 18px;
  margin-top: 15px;
`,
    E = e => t.jsx(A, {
        size: "large",
        block: !0,
        type: "primary",
        style: Object.assign({
            height: 50
        }, e.style || {}),
        onClick: e.onClick,
        loading: e.loading,
        disabled: e.disabled,
        children: e.label
    }),
    ye = e => {
        const [s, o] = i.useState("");
        i.useEffect(() => {
            e.onNameChange(s)
        }, [s]);
        const m = c => {
                o(c.target.value.trimStart())
            },
            u = () => {
                s && e.join()
            };
        return t.jsxs(t.Fragment, {
            children: [t.jsx(ee, {
                size: "large",
                placeholder: "Enter your name...",
                style: {
                    height: 45,
                    marginBottom: 10
                },
                autoFocus: !0,
                value: s,
                onChange: m,
                maxLength: 48,
                onPressEnter: u
            }), t.jsx(E, {
                onClick: u,
                loading: e.loading,
                label: "Enter",
                disabled: !s
            })]
        })
    },
    Ne = e => t.jsx(E, {
        onClick: e.join,
        loading: e.loading,
        label: "Enter"
    }),
    ve = e => t.jsxs(t.Fragment, {
        children: [t.jsx(E, {
            label: "Login",
            onClick: () => {
                G(O(window.location.pathname))
            },
            style: {
                marginBottom: 15
            }
        }), t.jsxs(we, {
            children: ["To enter, you must be in a class ran by ", e.creatorName, "."]
        })]
    }),
    Ce = e => t.jsxs(Be, {
        children: ["This KitCollab is only open to those in a class ran by ", e.creatorName, "."]
    }),
    Ie = e => {
        const {
            sessionId: s,
            creatorName: o,
            canAccess: m,
            mustBeLoggedIn: u
        } = e, [c, n] = i.useState(!1), [d, x] = i.useState(""), f = () => {
            c || (n(!0), S({
                url: `/api/kitcollab/session/join/${s}`,
                data: {
                    name: d
                },
                success: l => {
                    l && l.id && (d && e.setUserName(d), e.setUserSessionId(l.id)), e.switchToDashboardScreen()
                },
                error: l => {
                    B({
                        e: l,
                        default: {
                            title: "Error joining. Please try again later."
                        }
                    }), n(!1)
                }
            }))
        }, b = () => {
            const l = P();
            return !u && !l ? t.jsx(ye, {
                join: f,
                onNameChange: x,
                loading: c
            }) : l ? m ? t.jsx(Ne, {
                join: f,
                loading: c
            }) : t.jsx(Ce, {
                creatorName: o
            }) : t.jsx(ve, {
                creatorName: o
            })
        };
        return t.jsx(ke, {
            children: b()
        })
    },
    ke = a.div.attrs({
        className: "maxWidth"
    })``,
    we = a.div.attrs({
        className: "maxWidth"
    })`
  font-size: 16px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`,
    Be = a.div.attrs({
        className: "maxWidth"
    })`
  font-size: 16px;
  text-align: center;
  padding: 20px 30px;
  border-radius: 50px;
  background: #ffebee;
  border: 2px solid #e53935;
`,
    Ee = e => t.jsxs(Te, {
        children: [t.jsx(fe, {
            creatorName: e.creatorName,
            gameName: e.gameName
        }), t.jsx(Ie, {
            sessionId: e.sessionId,
            creatorName: e.creatorName,
            canAccess: e.canAccess,
            mustBeLoggedIn: e.mustBeLoggedIn,
            switchToDashboardScreen: e.switchToDashboardScreen,
            setUserName: e.setUserName,
            setUserSessionId: e.setUserSessionId
        })]
    }),
    Te = a.div``,
    Et = () => {
        const e = R().id,
            [s, o] = i.useState(""),
            [m, u] = i.useState(""),
            [c, n] = i.useState("join"),
            [d, x] = i.useState(!0),
            [f, b] = i.useState(""),
            [l, y] = i.useState(""),
            [p, r] = i.useState(!1),
            [j, C] = i.useState(!1),
            [T, Q] = i.useState(""),
            W = () => n("dashboard");
        i.useEffect(() => {
            S({
                url: `/api/kitcollab/contributor/session-info/${e}`,
                success: h => {
                    b(h.sessionOwnerName), y(h.gameName), r(h.canAccess), C(h.mustBeLoggedIn)
                },
                error: h => {
                    h && h.message && h.message.text ? Q(h.message.text) : Q("There was an error. Please try again later.")
                },
                both: () => {
                    x(!1)
                }
            })
        }, []);
        const U = () => T ? t.jsx("div", {
            style: {
                fontSize: 18
            },
            children: T
        }) : c === "dashboard" ? t.jsx(he, {
            sessionId: e,
            userName: s,
            userSessionId: m
        }) : t.jsx(Ee, {
            sessionId: e,
            creatorName: f,
            canAccess: p,
            gameName: l,
            mustBeLoggedIn: j,
            switchToDashboardScreen: W,
            setUserName: o,
            setUserSessionId: u
        });
        return d ? t.jsx($, {
            children: t.jsx(_, {
                size: "large"
            })
        }) : t.jsxs(t.Fragment, {
            children: [t.jsx($, {
                children: t.jsx(Qe, {
                    children: U()
                })
            }), t.jsx(H, {
                title: "KitCollab"
            })]
        })
    },
    $ = a.div.attrs({
        className: "flex-center scroll-y"
    })`
  flex: 1;
  background: ${N.Snow};
  color: ${N.Black};
  font-family: ${F.SFPro};
`,
    Qe = a(te)`
  width: 90%;
  max-width: 640px;
  border-radius: 8px;
  padding: 40px 30px;
  margin: 40px 0px;
`;
export {
    Et as
    default
};