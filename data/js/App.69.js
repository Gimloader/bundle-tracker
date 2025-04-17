function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("dy43q", (function(t, r) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return w
    }));
    var a = n("hxEiv"),
        i = n("lKmIF"),
        s = n("69SUA"),
        l = n("fywoC"),
        c = n("2FDaO"),
        u = n("iMOcM"),
        d = n("3Wr5F"),
        f = n("1c2UH"),
        p = n("gHmyG"),
        g = n("cO2Su"),
        m = n("3uz2P");
    let h, x, v, y = e => e;
    var b;
    (b = v || (v = {})).join = "join", b.dashboard = "dashboard";
    var w = () => {
        const e = (0, m.useParams)().id,
            [t, n] = l.useState(""),
            [r, o] = l.useState(""),
            [i, s] = l.useState(v.join),
            [c, g] = l.useState(!0),
            [h, x] = l.useState(""),
            [y, b] = l.useState(""),
            [w, O] = l.useState(!1),
            [S, k] = l.useState(!1),
            [N, E] = l.useState(""),
            I = () => s(v.dashboard);
        l.useEffect((() => {
            (0, u.request)({
                url: `/api/kitcollab/contributor/session-info/${e}`,
                success: e => {
                    x(e.sessionOwnerName), b(e.gameName), O(e.canAccess), k(e.mustBeLoggedIn)
                },
                error: e => {
                    e && e.message && e.message.text ? E(e.message.text) : E("There was an error. Please try again later.")
                },
                both: () => {
                    g(!1)
                }
            })
        }), []);
        return c ? (0, a.jsx)(C, {
            children: (0, a.jsx)(p.default, {
                size: "large"
            })
        }) : (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(C, {
                children: (0, a.jsx)(j, {
                    children: N ? (0, a.jsx)("div", {
                        style: {
                            fontSize: 18
                        },
                        children: N
                    }) : i === v.dashboard ? (0, a.jsx)(d.default, {
                        sessionId: e,
                        userName: t,
                        userSessionId: r
                    }) : (0, a.jsx)(f.default, {
                        sessionId: e,
                        creatorName: h,
                        canAccess: w,
                        gameName: y,
                        mustBeLoggedIn: S,
                        switchToDashboardScreen: I,
                        setUserName: n,
                        setUserSessionId: o
                    })
                })
            }), (0, a.jsx)(u.Title, {
                title: "KitCollab"
            })]
        })
    };
    const C = c.default.div.attrs({
            className: "flex-center scroll-y"
        })(h || (h = y`
  flex: 1;
  background: ${0};
  color: ${0};
  font-family: ${0};
`), i.default.Snow, i.default.Black, s.Fonts.SFPro),
        j = (0, c.default)(g.default)(x || (x = y`
  width: 90%;
  max-width: 640px;
  border-radius: 8px;
  padding: 40px 30px;
  margin: 40px 0px;
`))
})), n.register("3Wr5F", (function(t, r) {
    e(t.exports, "GameSubmittedQuestionStatus", (function() {
        return p
    })), e(t.exports, "default", (function() {
        return m
    }));
    var o = n("hxEiv"),
        a = n("7a91g"),
        i = n("fBuQJ"),
        s = n("iMOcM"),
        l = n("fywoC"),
        c = n("2cVVi"),
        u = n("1sWzb"),
        d = n("kPKEV"),
        f = n("gjtX9");
    let p;
    var g;
    (g = p || (p = {})).waiting = "waiting", g.rejected = "rejected", g.accepted = "accepted";
    var m = e => {
        const [t, n] = l.useState([]), r = () => {
            (0, s.request)({
                url: `/api/kitcollab/my-questions/${e.sessionId}`,
                data: {
                    userSessionId: e.userSessionId
                },
                success: e => {
                    n(e)
                }
            })
        }, g = t => {
            i.default.confirm({
                title: "Are you sure you want to delete this question?",
                okText: "Yes",
                onOk: () => {
                    n((e => e.filter((e => e._id !== t)))), (0, s.request)({
                        url: "/api/kitcollab/question/remove",
                        data: {
                            questionId: t,
                            userSessionId: e.userSessionId
                        }
                    })
                }
            })
        };
        return l.useEffect((() => {
            r()
        }), []), (0, a.useIntervalWhen)((() => r()), 8e3), (0, o.jsxs)("div", {
            style: {
                minHeight: 500
            },
            children: [(0, o.jsx)(u.default, {}), (0, o.jsx)(f.default, {
                sessionId: e.sessionId,
                userName: e.userName,
                userSessionId: e.userSessionId,
                addQuestion: (e, t) => {
                    n((n => [{
                        _id: e,
                        status: p.waiting,
                        question: t
                    }, ...n]))
                }
            }), (0, o.jsx)(c.default, {
                children: t.map((t => (0, o.jsx)("div", {
                    className: "maxWidth",
                    children: (0, o.jsx)(d.default, {
                        id: t._id,
                        question: t.question,
                        status: t.status,
                        deleteQuestion: g,
                        userSessionId: e.userSessionId
                    })
                }, `submitted-question-${t._id}`)))
            })]
        })
    }
})), n.register("7a91g", (function(t, r) {
    e(t.exports, "useIntervalWhen", (function() {
        return a
    }));
    var o = n("fywoC");

    function a(e, t, n, r) {
        void 0 === t && (t = 0), void 0 === n && (n = !0), void 0 === r && (r = !1);
        var a = (0, o.useRef)();

        function i() {
            a.current && a.current()
        }(0, o.useEffect)((function() {
            a.current = e
        })), (0, o.useEffect)((function() {
            if ("undefined" != typeof window) {
                if (n) {
                    r && i();
                    var e = window.setInterval(i, t);
                    return function() {
                        window.clearInterval(e)
                    }
                }
            } else console.warn("useIntervalWhen: window is undefined.")
        }), [n, t])
    }
})), n.register("1sWzb", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("hxEiv"),
        a = n("69SUA");
    n("fywoC");
    var i = n("2FDaO"),
        s = n("fC6cp");
    let l, c, u, d = e => e;
    var f = () => (0, o.jsxs)(p, {
        children: [(0, o.jsx)(g, {}), (0, o.jsx)(m, {
            children: "KitCollab"
        }), (0, o.jsx)(s.default, {})]
    });
    const p = i.default.div(l || (l = d``)),
        g = i.default.img.attrs({
            src: "/client/img/svgLogo.svg"
        })(c || (c = d`
  height: 22px;
  opacity: 0.8;
`)),
        m = i.default.div(u || (u = d`
  font-size: 45px;
  font-weight: ${0};
  line-height: 1;
  margin-top: 15px;
`), a.FontWeights.UltraBold)
})), n.register("kPKEV", (function(t, r) {
    e(t.exports, "default", (function() {
        return O
    }));
    var o = n("hxEiv"),
        a = n("8FJCY"),
        i = n("fywoC"),
        s = n("2FDaO"),
        l = n("lKmIF"),
        c = n("93yIm"),
        u = n("axHII"),
        d = n("e4KJZ"),
        f = n("py2Xr"),
        p = n("b1wB5"),
        g = n("iMOcM"),
        m = n("cnteN"),
        h = n("lpEVe"),
        x = n("cSKYy"),
        v = n("3Wr5F");
    let y, b, w, C = e => e;
    const j = e => {
        const t = i.useMemo((() => e.status === v.GameSubmittedQuestionStatus.accepted ? "Accepted" : e.status === v.GameSubmittedQuestionStatus.rejected ? "Rejected" : "Waiting For Approval"), [e.status]),
            n = i.useMemo((() => e.status === v.GameSubmittedQuestionStatus.accepted ? "#1b5e20" : e.status === v.GameSubmittedQuestionStatus.rejected ? "#b71c1c" : "#283593"), [e.status]);
        return (0, o.jsxs)(S, {
            style: {
                backgroundColor: n
            },
            children: [(0, o.jsx)(k, {
                children: t
            }), (0, o.jsx)(N, {
                children: e.canEdit ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(d.default, {
                        title: "Edit Question",
                        children: (0, o.jsx)("div", {
                            onClick: e.openEditor,
                            children: (0, o.jsx)(f.default, {
                                style: {
                                    marginRight: 10
                                },
                                name: "far fa-edit"
                            })
                        })
                    }), (0, o.jsx)(d.default, {
                        title: "Delete Question",
                        children: (0, o.jsx)("div", {
                            onClick: e.deleteQuestion,
                            children: (0, o.jsx)(f.default, {
                                name: "far fa-trash-alt"
                            })
                        })
                    })]
                }) : null
            })]
        })
    };
    var O = (0, h.observer)((e => {
        const t = (0, x.useLocalObservable)((() => ({
                _id: e.id,
                text: e.question.text,
                type: e.question.type,
                answers: e.question.answers.map(((t, n) => ({
                    _id: `${e.id}-answer-${n}`,
                    text: t.text,
                    correct: t.correct,
                    textType: t.textType
                })))
            }))),
            [n, r, s] = (0, g.useBoolean)(!1),
            [l, d] = i.useState(e.status),
            [f, h, y] = (0, g.useBoolean)(!1),
            b = i.useCallback((() => {
                e.deleteQuestion(e.id)
            }), [e.id]);
        i.useEffect((() => {
            if (l !== e.status && (d(e.status), e.status === v.GameSubmittedQuestionStatus.accepted && u.default.success({
                    message: "Question Accepted!",
                    description: "Your question was added to the kit!"
                }), e.status === v.GameSubmittedQuestionStatus.rejected)) {
                const e = Math.random().toString();
                u.default.error({
                    message: "Question Rejected",
                    description: "Your question was rejected and sent back for you to modify.",
                    btn: (0, o.jsx)(c.default, {
                        onClick: () => {
                            r(), u.default.destroy(e)
                        },
                        children: "Modify Question"
                    }),
                    key: e
                })
            }
        }), [e.status]);
        const w = l !== v.GameSubmittedQuestionStatus.accepted;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(a.default, {
                question: t,
                showAllAnswers: !0,
                blockToggleShowAnswers: !0,
                customStyle: {
                    marginBottom: 20
                },
                customBodyStyle: {
                    padding: 0
                },
                customTopComponent: (0, o.jsx)(j, {
                    canEdit: w,
                    openEditor: r,
                    deleteQuestion: b,
                    status: l
                }),
                customContentStyle: {
                    padding: 24,
                    paddingTop: 14
                }
            }), (0, o.jsx)(p.default, {
                visible: !(!n || !w),
                close: s,
                existingQuestion: t,
                submitQuestion: n => {
                    if (f) return;
                    h();
                    const r = (0, m.default)(n);
                    (0, g.request)({
                        url: "/api/kitcollab/question/edit",
                        data: {
                            questionId: e.id,
                            question: r,
                            userSessionId: e.userSessionId
                        },
                        success: () => {
                            d(v.GameSubmittedQuestionStatus.waiting), (e => {
                                Object.keys(e).forEach((n => {
                                    t[n] = e[n]
                                }))
                            })(n), s()
                        },
                        error: e => {
                            (0, g.throwMessageError)({
                                e: e,
                                default: {
                                    title: "Error updating question. Try again later."
                                }
                            })
                        },
                        both: () => y()
                    })
                },
                imagesBlocked: !0,
                audioBlocked: !0,
                latexBlocked: !0,
                loading: f,
                buttonLabel: l === v.GameSubmittedQuestionStatus.rejected ? "Resubmit" : "Save"
            })]
        })
    }));
    const S = s.default.div.attrs({
            className: "maxWidth flex vc between"
        })(y || (y = C`
  transition: background 0.3s;
  color: ${0};
  padding: 14px 24px;
  z-index: 999;
`), l.default.White),
        k = s.default.div.attrs({
            className: "flex vc"
        })(b || (b = C`
  font-size: 16px;
  line-height: 1;
`)),
        N = s.default.div.attrs({
            className: "flex vc"
        })(w || (w = C`
  font-size: 16px;
`))
})), n.register("py2Xr", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = e => (0, o.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), n.register("cnteN", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = e => ({
        text: e.text,
        type: e.type,
        answers: e.answers.map((e => {
            const t = {
                text: e.text,
                correct: e.correct
            };
            return e.textType ? {
                ...t,
                textType: e.textType
            } : t
        }))
    })
})), n.register("gjtX9", (function(t, r) {
    e(t.exports, "default", (function() {
        return v
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("7ECC6"),
        s = n("lKmIF"),
        l = n("69SUA"),
        c = n("py2Xr"),
        u = n("2FDaO"),
        d = n("iMOcM"),
        f = n("b1wB5"),
        p = n("cnteN");
    let g, m, h, x = e => e;
    var v = e => {
        const t = a.useRef(),
            [n, r, s] = (0, d.useBoolean)(!1),
            [l, u] = a.useState(!1),
            [g, m, h] = (0, d.useBoolean)(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(i.default, {
                style: {
                    marginBottom: 20
                },
                hoverable: !0,
                onClick: r,
                children: (0, o.jsx)(y, {
                    children: (0, o.jsxs)("div", {
                        className: "flex-center flex-column maxWidth",
                        children: [(0, o.jsx)(b, {
                            children: (0, o.jsx)(c.default, {
                                name: "fas fa-plus"
                            })
                        }), (0, o.jsx)(w, {
                            children: "Contribute New Question"
                        })]
                    })
                })
            }), (0, o.jsx)(f.default, {
                ref: t,
                visible: n,
                close: s,
                submitQuestion: t => {
                    if (g) return;
                    m();
                    const n = (0, p.default)(t);
                    (0, d.request)({
                        url: `/api/kitcollab/contribute/question/${e.sessionId}`,
                        data: {
                            question: n,
                            userName: e.userName,
                            userSessionId: e.userSessionId
                        },
                        success: t => {
                            u(!0), e.addQuestion(t, n), s()
                        },
                        error: e => {
                            (0, d.throwMessageError)({
                                e: e,
                                default: {
                                    title: "Error submitting question. Try again later."
                                }
                            })
                        },
                        both: () => h()
                    })
                },
                imagesBlocked: !0,
                audioBlocked: !0,
                latexBlocked: !0,
                loading: g,
                afterClose: () => {
                    l && t.current && t.current.clear(), u(!1)
                }
            })]
        })
    };
    const y = u.default.div(g || (g = x`
  color: ${0};
  font-family: ${0};
  padding: 30px;
  text-align: center;
  @media (max-width: 660px) {
    padding: 30px 10px;
  }
`), s.default.Black, l.Fonts.SFPro),
        b = u.default.div.attrs({
            className: "flex-center"
        })(m || (m = x`
  font-size: 22px;
  background: #2e7d32;
  color: ${0};
  height: 43px;
  width: 43px;
  border-radius: 50%;
`), s.default.White),
        w = u.default.div(h || (h = x`
  font-size: 26px;
  line-height: 1;
  margin-top: 16px;
  font-weight: ${0};
  @media (max-width: 660px) {
    line-height: 1.5;
  }
`), l.FontWeights.Bold)
})), n.register("1c2UH", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("2FDaO"),
        i = n("362wb"),
        s = n("gVfMI");
    let l;
    var c = e => (0, o.jsxs)(u, {
        children: [(0, o.jsx)(i.default, {
            creatorName: e.creatorName,
            gameName: e.gameName
        }), (0, o.jsx)(s.default, {
            sessionId: e.sessionId,
            creatorName: e.creatorName,
            canAccess: e.canAccess,
            mustBeLoggedIn: e.mustBeLoggedIn,
            switchToDashboardScreen: e.switchToDashboardScreen,
            setUserName: e.setUserName,
            setUserSessionId: e.setUserSessionId
        })]
    });
    const u = a.default.div(l || (l = (e => e)``))
})), n.register("362wb", (function(t, r) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = n("hxEiv"),
        a = n("69SUA");
    n("fywoC");
    var i = n("2FDaO"),
        s = n("fC6cp");
    let l, c, u, d, f = e => e;
    var p = e => (0, o.jsxs)(g, {
        children: [(0, o.jsx)(m, {}), (0, o.jsx)(h, {
            children: "KitCollab"
        }), (0, o.jsxs)(x, {
            children: [(0, o.jsx)("b", {
                children: e.creatorName
            }), " invited you to contribute questions to their", " ", (0, o.jsx)("b", {
                children: e.gameName
            }), " kit. Once you enter, you can submit questions to be added to the kit."]
        }), (0, o.jsx)(s.default, {
            style: {
                margin: "30px 0px"
            }
        })]
    });
    const g = i.default.div.attrs({
            className: "maxWidth flex-center flex-column"
        })(l || (l = f``)),
        m = i.default.img.attrs({
            src: "/client/img/svgLogo.svg"
        })(c || (c = f`
  height: 24px;
  opacity: 0.8;
`)),
        h = i.default.div(u || (u = f`
  font-size: 48px;
  font-weight: ${0};
  line-height: 1;
  margin-top: 10px;
`), a.FontWeights.UltraBold),
        x = i.default.div(d || (d = f`
  font-size: 18px;
  margin-top: 15px;
`))
})), n.register("gVfMI", (function(t, r) {
    e(t.exports, "default", (function() {
        return b
    }));
    var o = n("hxEiv"),
        a = n("93yIm"),
        i = n("b9Zw0"),
        s = n("iMOcM"),
        l = n("fywoC"),
        c = n("2FDaO"),
        u = n("iROck");
    let d, f, p, g = e => e;
    const m = e => (0, o.jsx)(a.default, {
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
        h = e => {
            const [t, n] = l.useState("");
            l.useEffect((() => {
                e.onNameChange(t)
            }), [t]);
            const r = () => {
                t && e.join()
            };
            return (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(i.default, {
                    size: "large",
                    placeholder: "Enter your name...",
                    style: {
                        height: 45,
                        marginBottom: 10
                    },
                    autoFocus: !0,
                    value: t,
                    onChange: e => {
                        n(e.target.value.trimStart())
                    },
                    maxLength: 48,
                    onPressEnter: r
                }), (0, o.jsx)(m, {
                    onClick: r,
                    loading: e.loading,
                    label: "Enter",
                    disabled: !t
                })]
            })
        },
        x = e => (0, o.jsx)(m, {
            onClick: e.join,
            loading: e.loading,
            label: "Enter"
        }),
        v = e => (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(m, {
                label: "Login",
                onClick: () => {
                    (0, u.NavigateTo)((0, s.getLoginLink)(window.location.pathname))
                },
                style: {
                    marginBottom: 15
                }
            }), (0, o.jsxs)(C, {
                children: ["To enter, you must be in a class ran by ", e.creatorName, "."]
            })]
        }),
        y = e => (0, o.jsxs)(j, {
            children: ["This KitCollab is only open to those in a class ran by ", e.creatorName, "."]
        });
    var b = e => {
        const {
            sessionId: t,
            creatorName: n,
            canAccess: r,
            mustBeLoggedIn: a
        } = e, [i, c] = l.useState(!1), [u, d] = l.useState(""), f = () => {
            i || (c(!0), (0, s.request)({
                url: `/api/kitcollab/session/join/${t}`,
                data: {
                    name: u
                },
                success: t => {
                    t && t.id && (u && e.setUserName(u), e.setUserSessionId(t.id)), e.switchToDashboardScreen()
                },
                error: e => {
                    (0, s.throwMessageError)({
                        e: e,
                        default: {
                            title: "Error joining. Please try again later."
                        }
                    }), c(!1)
                }
            }))
        };
        return (0, o.jsx)(w, {
            children: (() => {
                const e = (0, s.isLoggedIn)();
                return a || e ? e ? r ? (0, o.jsx)(x, {
                    join: f,
                    loading: i
                }) : (0, o.jsx)(y, {
                    creatorName: n
                }) : (0, o.jsx)(v, {
                    creatorName: n
                }) : (0, o.jsx)(h, {
                    join: f,
                    onNameChange: d,
                    loading: i
                })
            })()
        })
    };
    const w = c.default.div.attrs({
            className: "maxWidth"
        })(d || (d = g``)),
        C = c.default.div.attrs({
            className: "maxWidth"
        })(f || (f = g`
  font-size: 16px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`)),
        j = c.default.div.attrs({
            className: "maxWidth"
        })(p || (p = g`
  font-size: 16px;
  text-align: center;
  padding: 20px 30px;
  border-radius: 50px;
  background: #ffebee;
  border: 2px solid #e53935;
`))
})), n.register("iROck", (function(t, r) {
    e(t.exports, "NavigateTo", (function() {
        return a
    }));
    var o = n("bd8je");
    const a = e => {
        o.history.push(e)
    }
})), n.register("cO2Su", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("2FDaO"),
        i = n("lKmIF");
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
})), n.register("90UiM", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("7WFzL"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "CopyOutlined";
    var c = a.forwardRef(l)
})), n.register("7WFzL", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                }
            }]
        },
        name: "copy",
        theme: "outlined"
    }
})), n.register("9g8O0", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("ewhoP"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DeleteOutlined";
    var c = a.forwardRef(l)
})), n.register("ewhoP", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
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
})), n.register("83ivs", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("6tWM4"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "EditOutlined";
    var c = a.forwardRef(l)
})), n.register("6tWM4", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                }
            }]
        },
        name: "edit",
        theme: "outlined"
    }
})), n.register("hy09K", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("eLGc8"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "PaperClipOutlined";
    var c = a.forwardRef(l)
})), n.register("eLGc8", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"
                }
            }]
        },
        name: "paper-clip",
        theme: "outlined"
    }
})), n.register("5WQCk", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("wzfg8"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "PlayCircleOutlined";
    var c = a.forwardRef(l)
})), n.register("wzfg8", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
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
                    d: "M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"
                }
            }]
        },
        name: "play-circle",
        theme: "outlined"
    }
})), n.register("kuEJ4", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("iI4DW"),
        a = n("fywoC"),
        i = n("4gMdJ");

    function s(e, t, n) {
        return function(r) {
            const {
                prefixCls: s,
                style: l
            } = r, c = a.useRef(null), [u, d] = a.useState(0), [f, p] = a.useState(0), [g, m] = (0, o.default)(!1, {
                value: r.open
            }), {
                getPrefixCls: h
            } = a.useContext(i.ConfigContext), x = h(t || "select", s);
            return a.useEffect((() => {
                if (m(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            d(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var r;
                            const o = n ? `.${n(x)}` : `.${x}-dropdown`,
                                a = null === (r = c.current) || void 0 === r ? void 0 : r.querySelector(o);
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
            }, a.createElement(e, Object.assign({}, r, {
                style: Object.assign(Object.assign({}, l), {
                    margin: 0
                }),
                open: g,
                visible: g,
                getPopupContainer: () => c.current
            }))))
        }
    }
})), n.register("hacAX", (function(t, r) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var o = n("lt5sb"),
        a = n("aWAHQ");
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
                antCls: n
            } = e, r = `${n}-${t}`, {
                inKeyframes: o,
                outKeyframes: i
            } = f[t];
            return [(0, a.initMotion)(r, o, i, e.motionDurationMid), {
                [`\n        ${r}-enter,\n        ${r}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${r}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), n.register("i5Qjx", (function(r, o) {
    e(r.exports, "SpaceContext", (function() {
        return g
    }), (function(e) {
        return g = e
    })), e(r.exports, "default", (function() {
        return x
    }), (function(e) {
        return x = e
    }));
    var a = n("fe1on"),
        i = n("jyxW7"),
        s = n("fywoC"),
        l = n("4gMdJ"),
        c = n("1eqVQ"),
        u = n("7yXSw"),
        d = n("c9Vcn"),
        f = n("5gjI2"),
        p = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };
    const g = s.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        m = {
            small: 8,
            middle: 16,
            large: 24
        };
    const h = e => {
        const {
            getPrefixCls: n,
            space: r,
            direction: o
        } = s.useContext(l.ConfigContext), {
            size: u = (null == r ? void 0 : r.size) || "small",
            align: h,
            className: x,
            rootClassName: v,
            children: y,
            direction: b = "horizontal",
            prefixCls: w,
            split: C,
            style: j,
            wrap: O = !1
        } = e, S = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), k = (0, c.default)(), [N, E] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? m[e] : e || 0
        }(e)))), [u]), I = (0, i.default)(y, {
            keepEmpty: !0
        }), z = void 0 === h && "horizontal" === b ? "center" : h, M = n("space", w), [P, $] = (0, f.default)(M), F = t(a)(M, $, `${M}-${b}`, {
            [`${M}-rtl`]: "rtl" === o,
            [`${M}-align-${z}`]: z
        }, x, v), K = `${M}-item`, D = "rtl" === o ? "marginLeft" : "marginRight";
        let B = 0;
        const R = I.map(((e, t) => {
                null != e && (B = t);
                const n = e && e.key || `${K}-${t}`;
                return s.createElement(d.default, {
                    className: K,
                    key: n,
                    direction: b,
                    index: t,
                    marginDirection: D,
                    split: C,
                    wrap: O
                }, e)
            })),
            W = s.useMemo((() => ({
                horizontalSize: N,
                verticalSize: E,
                latestIndex: B,
                supportFlexGap: k
            })), [N, E, B, k]);
        if (0 === I.length) return null;
        const L = {};
        return O && (L.flexWrap = "wrap", k || (L.marginBottom = -E)), k && (L.columnGap = N, L.rowGap = E), P(s.createElement("div", Object.assign({
            className: F,
            style: Object.assign(Object.assign({}, L), j)
        }, S), s.createElement(g.Provider, {
            value: W
        }, R)))
    };
    h.Compact = u.default;
    var x = h
})), n.register("1eqVQ", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("fywoC"),
        a = n("azMeL"),
        i = () => {
            const [e, t] = o.useState(!1);
            return o.useEffect((() => {
                t((0, a.detectFlexGapSupported)())
            }), []), e
        }
})), n.register("c9Vcn", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("fywoC"),
        a = n("i5Qjx");

    function i(e) {
        let {
            className: t,
            direction: n,
            index: r,
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
        let g = {};
        return p || ("vertical" === n ? r < f && (g = {
            marginBottom: u / (l ? 2 : 1)
        }) : g = Object.assign(Object.assign({}, r < f && {
            [i]: u / (l ? 2 : 1)
        }), c && {
            paddingBottom: d
        })), null == s ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: g
        }, s), r < f && l && o.createElement("span", {
            className: `${t}-split`,
            style: g
        }, l))
    }
})), n.register("dhxiD", (function(e, t) {
    var r = n("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var n, a, i, s, l, c, u = !1;
        t || (t = {}), n = t.debug || !1;
        try {
            if (i = r(), s = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(r) {
                    if (r.stopPropagation(), t.format)
                        if (r.preventDefault(), void 0 === r.clipboardData) {
                            n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var a = o[t.format] || o.default;
                            window.clipboardData.setData(a, e)
                        } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                    t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), l.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (r) {
            n && console.error("unable to copy using execCommand: ", r), n && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (r) {
                n && console.error("unable to copy using clipboardData: ", r), n && console.error("falling back to prompt"), a = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
            }
        } finally {
            l && ("function" == typeof l.removeRange ? l.removeRange(s) : l.removeAllRanges()), c && document.body.removeChild(c), i()
        }
        return u
    }
})), n.register("1fK2g", (function(e, t) {
    e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
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
                "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach((function(t) {
                    e.addRange(t)
                })), t && t.focus()
            }
    }
})), n.register("5g49A", (function(r, o) {
    e(r.exports, "default", (function() {
        return h
    }), (function(e) {
        return h = e
    }));
    var a = n("legzE"),
        i = n("fe1on"),
        s = n("fywoC"),
        l = n("4gMdJ"),
        c = n("2iORQ"),
        u = n("eM84N"),
        d = n("8elTB"),
        f = n("jfXop"),
        p = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };
    const g = (e, n) => {
            var {
                prefixCls: r,
                className: o,
                rootClassName: d,
                style: g,
                children: m,
                icon: h,
                color: x,
                onClose: v,
                closeIcon: y,
                closable: b = !1
            } = e, w = p(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
            const {
                getPrefixCls: C,
                direction: j
            } = s.useContext(l.ConfigContext), [O, S] = s.useState(!0);
            s.useEffect((() => {
                "visible" in w && S(w.visible)
            }), [w.visible]);
            const k = (0, c.isPresetColor)(x) || (0, c.isPresetStatusColor)(x),
                N = Object.assign({
                    backgroundColor: x && !k ? x : void 0
                }, g),
                E = C("tag", r),
                [I, z] = (0, f.default)(E),
                M = t(i)(E, {
                    [`${E}-${x}`]: k,
                    [`${E}-has-color`]: x && !k,
                    [`${E}-hidden`]: !O,
                    [`${E}-rtl`]: "rtl" === j
                }, o, d, z),
                P = e => {
                    e.stopPropagation(), null == v || v(e), e.defaultPrevented || S(!1)
                },
                $ = "function" == typeof w.onClick || m && "a" === m.type,
                F = h || null,
                K = F ? s.createElement(s.Fragment, null, F, s.createElement("span", null, m)) : m,
                D = s.createElement("span", Object.assign({}, w, {
                    ref: n,
                    className: M,
                    style: N
                }), K, b ? y ? s.createElement("span", {
                    className: `${E}-close-icon`,
                    onClick: P
                }, y) : s.createElement(a.default, {
                    className: `${E}-close-icon`,
                    onClick: P
                }) : null);
            return I($ ? s.createElement(u.default, null, D) : D)
        },
        m = s.forwardRef(g);
    m.CheckableTag = d.default;
    var h = m
})), n.register("8elTB", (function(r, o) {
    e(r.exports, "default", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = n("fe1on"),
        i = n("fywoC"),
        s = n("4gMdJ"),
        l = n("jfXop"),
        c = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };
    var u = e => {
        var {
            prefixCls: n,
            className: r,
            checked: o,
            onChange: u,
            onClick: d
        } = e, f = c(e, ["prefixCls", "className", "checked", "onChange", "onClick"]);
        const {
            getPrefixCls: p
        } = i.useContext(s.ConfigContext), g = p("tag", n), [m, h] = (0, l.default)(g), x = t(a)(g, {
            [`${g}-checkable`]: !0,
            [`${g}-checkable-checked`]: o
        }, r, h);
        return m(i.createElement("span", Object.assign({}, f, {
            className: x,
            onClick: e => {
                null == u || u(!o), null == d || d(e)
            }
        })))
    }
})), n.register("jfXop", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("huF4L"),
        a = n("1QMe3"),
        i = n("3pCmM"),
        s = n("10VQw"),
        l = n("kCC5O");
    const c = (e, t, n) => {
            const r = (0, i.default)(n);
            return {
                [`${e.componentCls}-${t}`]: {
                    color: e[`color${n}`],
                    background: e[`color${r}Bg`],
                    borderColor: e[`color${r}Border`]
                }
            }
        },
        u = e => (0, s.genPresetColor)(e, ((t, n) => {
            let {
                textColor: r,
                lightBorderColor: o,
                lightColor: a,
                darkColor: i
            } = n;
            return {
                [`${e.componentCls}-${t}`]: {
                    color: r,
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
                lineWidth: n,
                tagPaddingHorizontal: r,
                componentCls: o
            } = e, a = r - n, i = t - n;
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
            lineHeight: n,
            lineWidth: r,
            fontSizeIcon: o
        } = e, i = Math.round(t * n), s = e.fontSizeSM, l = i - 2 * r, f = e.colorFillAlter, p = e.colorText, g = (0, a.merge)(e, {
            tagFontSize: s,
            tagLineHeight: l,
            tagDefaultBg: f,
            tagDefaultColor: p,
            tagIconSize: o - 2 * r,
            tagPaddingHorizontal: 8
        });
        return [d(g), u(g), c(g, "success", "Success"), c(g, "processing", "Info"), c(g, "error", "Error"), c(g, "warning", "Warning")]
    }))
})), n.register("3pCmM", (function(t, n) {
    function r(e) {
        if ("string" != typeof e) return e;
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("fK8ya", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("2FDaO"),
        s = n("fBuQJ"),
        l = n("lKmIF"),
        c = n("1djzF");
    let u;
    const d = i.default.img.attrs((e => ({
        src: e.image
    })))(u || (u = (e => e)`
  cursor: pointer;
  height: ${0}px;
  width: ${0}px;
  margin-right: ${0}px;
  border-radius: 5px;
  ${0}
  flex-shrink: 0;
  object-fit: cover;
`), (e => e.size), (e => e.size), (e => e.customRightMargin ? e.customRightMargin : 0), (e => e.showBorder && `border: solid ${l.default.Black} 1px;`));
    var f = e => {
        const [t, n] = a.useState(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(d, {
                ...e,
                onClick: t => {
                    t.stopPropagation(), e.onClick && e.onClick(), e.blockModalOpen || n(!0)
                }
            }), (0, o.jsx)(s.default, {
                open: t,
                onCancel: e => {
                    e.stopPropagation(), n(!1)
                },
                footer: null,
                closable: !1,
                children: (0, o.jsx)("img", {
                    src: (0, c.getCloudinaryUrl)(e.image),
                    style: {
                        width: "100%"
                    }
                })
            })]
        })
    }
})), n.register("1djzF", (function(t, n) {
    e(t.exports, "getCloudinaryUrl", (function() {
        return r
    }));
    const r = e => {
            const t = o(e);
            return t ? e.includes("/video/upload") ? `https://${a}/video/upload/${t}` : `https://${a}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        o = e => {
            if (!l.some((t => e.includes(t)))) return null;
            if (e.includes(i) && !e.includes(`/${s}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const n = t[t.length - 2],
                r = t[t.length - 1];
            return n && r && n.startsWith("v") ? `${n}/${r}` : null
        },
        a = "media.gimkit.com",
        i = "res.cloudinary.com",
        s = "gimkit-production",
        l = [a, i]
})), n.register("6WS0O", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        sideMargin: 50,
        optionWidth: 200
    }
})), n.register("kLpOI", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("ayjhg"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "CheckOutlined";
    var c = a.forwardRef(l)
})), n.register("ayjhg", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
            }]
        },
        name: "check",
        theme: "outlined"
    }
})), n.register("6gxPk", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("5D7Fe"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DownOutlined";
    var c = a.forwardRef(l)
})), n.register("5D7Fe", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                }
            }]
        },
        name: "down",
        theme: "outlined"
    }
})), n.register("kyvf1", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("hxEiv"),
        a = n("beXRF");
    n("fywoC");
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
})), n.register("5AR3F", (function(r, o) {
    e(r.exports, "default", (function() {
        return h
    }));
    var a = n("2ic9V"),
        i = n("iStnv"),
        s = n("hzerz"),
        l = n("46jhs"),
        c = n("hn4Tf"),
        u = n("7NK35"),
        d = n("b1RjK"),
        f = n("17aYs"),
        p = n("fywoC"),
        g = n("fe1on"),
        m = function(e) {
            (0, d.default)(r, e);
            var n = (0, f.default)(r);

            function r(e) {
                var t;
                (0, c.default)(this, r), (t = n.call(this, e)).handleChange = function(e) {
                    var n = t.props,
                        r = n.disabled,
                        o = n.onChange;
                    r || ("checked" in t.props || t.setState({
                        checked: e.target.checked
                    }), o && o({
                        target: (0, l.default)((0, l.default)({}, t.props), {}, {
                            checked: e.target.checked
                        }),
                        stopPropagation: function() {
                            e.stopPropagation()
                        },
                        preventDefault: function() {
                            e.preventDefault()
                        },
                        nativeEvent: e.nativeEvent
                    }))
                }, t.saveInput = function(e) {
                    t.input = e
                };
                var o = "checked" in e ? e.checked : e.defaultChecked;
                return t.state = {
                    checked: o
                }, t
            }
            return (0, u.default)(r, [{
                key: "focus",
                value: function() {
                    this.input.focus()
                }
            }, {
                key: "blur",
                value: function() {
                    this.input.blur()
                }
            }, {
                key: "render",
                value: function() {
                    var e, n = this.props,
                        r = n.prefixCls,
                        o = n.className,
                        l = n.style,
                        c = n.name,
                        u = n.id,
                        d = n.type,
                        f = n.disabled,
                        m = n.readOnly,
                        h = n.tabIndex,
                        x = n.onClick,
                        v = n.onFocus,
                        y = n.onBlur,
                        b = n.onKeyDown,
                        w = n.onKeyPress,
                        C = n.onKeyUp,
                        j = n.autoFocus,
                        O = n.value,
                        S = n.required,
                        k = (0, s.default)(n, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]),
                        N = Object.keys(k).reduce((function(e, t) {
                            return "aria-" !== t.substr(0, 5) && "data-" !== t.substr(0, 5) && "role" !== t || (e[t] = k[t]), e
                        }), {}),
                        E = this.state.checked,
                        I = t(g)(r, o, (e = {}, (0, i.default)(e, "".concat(r, "-checked"), E), (0, i.default)(e, "".concat(r, "-disabled"), f), e));
                    return t(p).createElement("span", {
                        className: I,
                        style: l
                    }, t(p).createElement("input", (0, a.default)({
                        name: c,
                        id: u,
                        type: d,
                        required: S,
                        readOnly: m,
                        disabled: f,
                        tabIndex: h,
                        className: "".concat(r, "-input"),
                        checked: !!E,
                        onClick: x,
                        onFocus: v,
                        onBlur: y,
                        onKeyUp: C,
                        onKeyDown: b,
                        onKeyPress: w,
                        onChange: this.handleChange,
                        autoFocus: j,
                        ref: this.saveInput,
                        value: O
                    }, N)), t(p).createElement("span", {
                        className: "".concat(r, "-inner")
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return "checked" in e ? (0, l.default)((0, l.default)({}, t), {}, {
                        checked: e.checked
                    }) : null
                }
            }]), r
        }(p.Component);
    m.defaultProps = {
        prefixCls: "rc-checkbox",
        className: "",
        style: {},
        type: "checkbox",
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var h = m
})), n.register("2ic9V", (function(t, n) {
    function r() {
        return r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, r.apply(this, arguments)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("iStnv", (function(t, n) {
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("hzerz", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("cK78M");

    function a(e, t) {
        if (null == e) return {};
        var n, r, a = (0, o.default)(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }
})), n.register("cK78M", (function(t, n) {
    function r(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("46jhs", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("iStnv");

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(n), !0).forEach((function(t) {
                (0, o.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
})), n.register("hn4Tf", (function(t, n) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("7NK35", (function(t, n) {
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }
    e(t.exports, "default", (function() {
        return o
    }))
})), n.register("b1RjK", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("63PCo");

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && (0, o.default)(e, t)
    }
})), n.register("63PCo", (function(t, n) {
    function r(e, t) {
        return r = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, r(e, t)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("17aYs", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("bArAQ"),
        a = n("lcgmN"),
        i = n("erlXZ");

    function s(e) {
        var t = (0, a.default)();
        return function() {
            var n, r = (0, o.default)(e);
            if (t) {
                var a = (0, o.default)(this).constructor;
                n = Reflect.construct(r, arguments, a)
            } else n = r.apply(this, arguments);
            return (0, i.default)(this, n)
        }
    }
})), n.register("bArAQ", (function(t, n) {
    function r(e) {
        return r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, r(e)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("lcgmN", (function(t, n) {
    function r() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("erlXZ", (function(r, o) {
    e(r.exports, "default", (function() {
        return s
    }));
    var a = n("1eKqi"),
        i = n("cdb2f");

    function s(e, n) {
        if (n && ("object" === t(a)(n) || "function" == typeof n)) return n;
        if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
        return (0, i.default)(e)
    }
})), n.register("1eKqi", (function(e, t) {
    function n(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = n = function(e) {
            return typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = n = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0), n(t)
    }
    e.exports = n, e.exports.default = e.exports, e.exports.__esModule = !0
})), n.register("cdb2f", (function(t, n) {
    function r(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("fgoFz", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("hxEiv"),
        a = n("fywoC");
    const i = a.lazy((() => n("h3n1W")));
    var s = e => (0, o.jsx)(a.Suspense, {
        fallback: e.fallback || null,
        children: (0, o.jsx)(i, {
            latex: e.latex
        })
    })
})), n.register("h3n1W", (function(e, t) {
    e.exports = Promise.all([import("./" + n("ihc6Q").resolve("8pe9D")), import("./" + n("ihc6Q").resolve("5OCdz"))]).then((() => n("9YSp3")))
})), n.register("9kZfj", (function(t, r) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return a
    }));
    var o = n("hrYih");
    const a = () => "annual-only" === o.default.getFeatureFlag("annual-only-pro")
})), n.register("aYYSA", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("5UEB4"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "StarOutlined";
    var c = a.forwardRef(l)
})), n.register("5UEB4", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
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
})), n.register("56tQE", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("fywoC"),
        a = n("3KQc0"),
        i = n("9iNNJ");
    var s = (e, t) => {
        const [n, r] = o.useState((() => {
            var n, r;
            const o = e && "current" in e ? e.current : e;
            return o ? [o.offsetWidth, o.offsetHeight] : [null !== (n = null == t ? void 0 : t.initialWidth) && void 0 !== n ? n : 0, null !== (r = null == t ? void 0 : t.initialHeight) && void 0 !== r ? r : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && r([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, a.default)(e, (e => {
            const t = e.target;
            r([t.offsetWidth, t.offsetHeight])
        })), n
    }
})), n.register("3KQc0", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = n("6rvT3"),
        a = n("9iNNJ"),
        i = n("3Yjty"),
        s = n("f1PHW");
    let l;
    const c = () => l || (l = function() {
        const e = new Map,
            t = new(0, o.default)((0, s.default)(((t, n) => {
                var r;
                if (1 === t.length) null === (r = e.get(t[0].target)) || void 0 === r || r(t[0], n);
                else
                    for (let r = 0; r < t.length; r++) {
                        var o;
                        null === (o = e.get(t[r].target)) || void 0 === o || o(t[r], n)
                    }
            })));
        return {
            observer: t,
            subscribe(n, r) {
                t.observe(n), e.set(n, r)
            },
            unsubscribe(n) {
                t.unobserve(n), e.delete(n)
            }
        }
    }());
    var u = function(e, t) {
        const n = c(),
            r = (0, i.default)(t);
        return (0, a.default)((() => {
            let t = !1;
            const o = e && "current" in e ? e.current : e;
            if (o) return n.subscribe(o, ((e, n) => {
                t || r.current(e, n)
            })), () => {
                t = !0, n.unsubscribe(o)
            }
        }), [e, n, r]), n.observer
    }
})), n.register("9iNNJ", (function(r, o) {
    e(r.exports, "default", (function() {
        return a
    }));
    var a = t(n("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), n.register("3Yjty", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("fywoC");
    var a = e => {
        const t = o.useRef(e);
        return o.useEffect((() => {
            t.current = e
        })), t
    }
})), n.register("f1PHW", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = function(e) {
        var t = [],
            n = null,
            r = function() {
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                t = o, n || (n = requestAnimationFrame((function() {
                    n = null, e.apply(void 0, t)
                })))
            };
        return r.cancel = function() {
            n && (cancelAnimationFrame(n), n = null)
        }, r
    }
})), n.register("eFy2j", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("fywoC");

    function a() {
        const [, e] = o.useReducer((e => e + 1), 0);
        return e
    }
})), n.register("kPX2r", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("1qdsf"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "SaveOutlined";
    var c = a.forwardRef(l)
})), n.register("1qdsf", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"
                }
            }]
        },
        name: "save",
        theme: "outlined"
    }
})), n.register("4eEdH", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("ddWN5"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DownloadOutlined";
    var c = a.forwardRef(l)
})), n.register("ddWN5", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "download",
        theme: "outlined"
    }
}));