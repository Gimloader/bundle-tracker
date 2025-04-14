function t(t, e, s, o) {
    Object.defineProperty(t, e, {
        get: s,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("8FJCY", (function(s, o) {
    t(s.exports, "default", (function() {
        return k
    }));
    var n = e("divCp"),
        i = e("hxEiv"),
        a = e("fywoC"),
        l = e("iUwFC"),
        r = e("ibETQ"),
        c = e("90UiM"),
        u = e("83ivs"),
        d = e("jbbXK"),
        p = e("93yIm"),
        f = e("7ECC6"),
        h = e("4I2uy"),
        m = e("fC6cp"),
        g = e("5g49A"),
        x = e("e4KJZ"),
        w = e("2FDaO"),
        v = e("69SUA"),
        y = e("lKmIF"),
        C = e("aAdm0"),
        j = e("1djzF");
    let b;
    const A = (0, w.default)(f.default)(b || (b = (t => t)`
  font-family: ${0};
  color: ${0};
  margin-bottom: 5px !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: max-content;
  cursor: pointer;
`), (t => t.font ? t.font : v.Fonts.SFPro), y.default.Black);
    class S extends a.Component {
        componentDidUpdate(t) {
            t.showAllAnswers !== this.props.showAllAnswers && (this.props.showAllAnswers ? this.setState({
                showingAnswers: !0
            }) : this.setState({
                showingAnswers: !1
            }))
        }
        render() {
            const {
                question: t,
                showCheckbox: e,
                checked: s,
                canEdit: o,
                canAdd: n,
                fontFamily: f
            } = this.props;
            let w = v.Fonts.SFPro;
            f && (w = f);
            const y = t.audio && !t.text && !t.image && !t.latex;
            return (0, i.jsxs)(A, {
                font: w,
                style: this.props.customStyle,
                bodyStyle: Object.assign(this.props.customBodyStyle || {}, {
                    width: "100%"
                }),
                hoverable: !0,
                onClick: this.toggleShowingAnswers,
                children: [this.props.customTopComponent ? this.props.customTopComponent : null, (0, i.jsxs)("div", {
                    style: this.props.customContentStyle,
                    children: [(0, i.jsxs)("div", {
                        style: {
                            justifyContent: "space-between"
                        },
                        className: "flex vc maxWidth",
                        children: [(0, i.jsxs)("div", {
                            className: "flex vc",
                            children: [e && (0, i.jsx)(h.default, {
                                style: {
                                    zoom: 1.3,
                                    marginRight: 10,
                                    marginTop: 4
                                },
                                onChange: this.props.handleCheckChange,
                                onClick: t => t.stopPropagation(),
                                checked: s
                            }), (0, i.jsx)(C.default, {
                                text: t.text,
                                image: t.image,
                                latex: t.latex,
                                customImageMargin: 10,
                                customImageSize: 72
                            }), t.audio && (0, i.jsx)(x.default, {
                                title: "Play Audio",
                                children: (0, i.jsx)(p.default, {
                                    style: {
                                        marginLeft: y ? 0 : 10,
                                        marginRight: y ? 10 : 0
                                    },
                                    type: "primary",
                                    shape: "circle",
                                    icon: (0, i.jsx)(r.default, {}),
                                    onClick: this.onAudioPress
                                })
                            }), y && (0, i.jsx)(C.default, {
                                text: "Audio Only Question",
                                customTextColor: "#bdbdbd"
                            }), t.type === l.QuestionType.textInput && (0, i.jsx)(g.default, {
                                color: "magenta",
                                style: {
                                    marginLeft: 10,
                                    fontFamily: w
                                },
                                children: "Text Input"
                            })]
                        }), o && (0, i.jsxs)("div", {
                            className: "flex vc",
                            style: {
                                marginLeft: 10
                            },
                            children: [(0, i.jsx)(x.default, {
                                title: "Copy",
                                placement: "bottom",
                                children: (0, i.jsx)(p.default, {
                                    shape: "circle",
                                    icon: (0, i.jsx)(c.default, {}),
                                    onClick: this.props.onCopyClicked,
                                    size: "small",
                                    style: {
                                        marginRight: 5
                                    }
                                })
                            }), (0, i.jsx)(x.default, {
                                title: "Edit",
                                placement: "bottom",
                                children: (0, i.jsx)(p.default, {
                                    shape: "circle",
                                    icon: (0, i.jsx)(u.default, {}),
                                    size: "small",
                                    onClick: this.props.onEditClicked
                                })
                            })]
                        }), n && (0, i.jsx)(x.default, {
                            title: "Add Question",
                            placement: "left",
                            children: (0, i.jsx)(d.default, {
                                style: {
                                    fontSize: 19
                                },
                                onClick: this.props.onAddClicked
                            })
                        }), this.props.customRightComponent ? this.props.customRightComponent : null]
                    }), this.state.showingAnswers && (0, i.jsx)("div", {
                        style: {
                            height: 12
                        }
                    }), this.state.showingAnswers && (0, i.jsx)("div", {
                        className: "maxWidth",
                        style: {
                            paddingLeft: e ? 34 : 0
                        },
                        children: t.answers.map(((e, s) => (0, i.jsxs)(a.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: "flex vc",
                                children: [(0, i.jsx)(C.default, {
                                    text: e.text,
                                    image: e.image,
                                    latex: e.latex,
                                    customTextColor: e.correct ? "green" : null,
                                    customFontSize: 18,
                                    customFontWeight: 400,
                                    blockOutsideClicks: !0
                                }), e.image || e.latex ? (0, i.jsx)(g.default, {
                                    color: e.correct ? "green" : "red",
                                    style: {
                                        marginLeft: e.image ? 2 : 12
                                    },
                                    children: e.correct ? "Correct" : "Incorrect"
                                }) : null]
                            }), s + 1 !== t.answers.length && (0, i.jsx)(m.default, {
                                style: {
                                    marginTop: 6,
                                    marginBottom: 6
                                }
                            })]
                        }, e._id)))
                    })]
                }), this.props.customBottomComponent ? this.props.customBottomComponent : null]
            })
        }
        constructor(...t) {
            super(...t), (0, n.default)(this, "state", {
                showingAnswers: this.props.showAllAnswers
            }), (0, n.default)(this, "toggleShowingAnswers", (() => {
                this.props.blockToggleShowAnswers || this.setState({
                    showingAnswers: !this.state.showingAnswers
                })
            })), (0, n.default)(this, "onAudioPress", (t => {
                t.stopPropagation();
                new Audio((0, j.getCloudinaryUrl)(this.props.question.audio)).play()
            }))
        }
    }
    var k = S
})), e.register("iUwFC", (function(e, s) {
    let o;
    var n;
    let i;
    var a;
    let l;
    var r;
    let c;
    var u;
    let d;
    var p;
    let f;
    let h;
    var m;
    t(e.exports, "Privacy", (function() {
        return o
    })), t(e.exports, "QuestionType", (function() {
        return l
    })), t(e.exports, "TextInputAnswerType", (function() {
        return c
    })), t(e.exports, "HubItemType", (function() {
        return f
    })), t(e.exports, "HubItemStatus", (function() {
        return h
    })), (n = o || (o = {})).public = "public", n.private = "private", (a = i || (i = {})).basic = "basic", a.go = "go", a.pro = "pro", (r = l || (l = {})).multipleChoice = "mc", r.textInput = "text", (u = c || (c = {}))[u.exact = 1] = "exact", u[u.contains = 2] = "contains", (p = d || (d = {})).reachedCashGoal = "reached-cash-goal", p.reachedMaxTime = "reached-max-time", (f || (f = {})).mapAssignment = "mapAssignment", (m = h || (h = {})).completed = "completed", m.inProgress = "inProgress", m.notStarted = "notStarted"
})), e.register("ibETQ", (function(s, o) {
    t(s.exports, "default", (function() {
        return c
    }));
    var n = e("dnh3u"),
        i = e("fywoC"),
        a = e("jxTA8"),
        l = e("dwKuN"),
        r = function(t, e) {
            return i.createElement(l.default, (0, n.default)((0, n.default)({}, t), {}, {
                ref: e,
                icon: a.default
            }))
        };
    r.displayName = "AudioOutlined";
    var c = i.forwardRef(r)
})), e.register("jxTA8", (function(e, s) {
    t(e.exports, "default", (function() {
        return o
    }));
    var o = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"
                }
            }]
        },
        name: "audio",
        theme: "outlined"
    }
})), e.register("jbbXK", (function(s, o) {
    t(s.exports, "default", (function() {
        return c
    }));
    var n = e("dnh3u"),
        i = e("fywoC"),
        a = e("9oKRO"),
        l = e("dwKuN"),
        r = function(t, e) {
            return i.createElement(l.default, (0, n.default)((0, n.default)({}, t), {}, {
                ref: e,
                icon: a.default
            }))
        };
    r.displayName = "PlusCircleOutlined";
    var c = i.forwardRef(r)
})), e.register("9oKRO", (function(e, s) {
    t(e.exports, "default", (function() {
        return o
    }));
    var o = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            }]
        },
        name: "plus-circle",
        theme: "outlined"
    }
})), e.register("aAdm0", (function(s, o) {
    t(s.exports, "default", (function() {
        return g
    }));
    var n = e("hxEiv");
    e("fywoC");
    var i = e("2FDaO"),
        a = e("lKmIF"),
        l = e("fK8ya"),
        r = e("fgoFz");
    let c, u, d, p = t => t;
    const f = i.default.div(c || (c = p`
  display: flex;
  align-items: center;
`)),
        h = i.default.div(u || (u = p`
  color: ${0};
  font-size: ${0}px;
  font-weight: ${0};
`), (t => t.customTextColor ? t.customTextColor : a.default.Black), (t => t.customFontSize ? t.customFontSize : 26), (t => t.customFontWeight ? t.customFontWeight : 600)),
        m = i.default.div(d || (d = p``));
    var g = t => {
        var e;
        return (0, n.jsxs)(f, {
            onClick: e => t.blockOutsideClicks ? e.stopPropagation() : null,
            children: [t.image && (0, n.jsx)(l.default, {
                image: t.image,
                size: t.customImageSize || 45,
                customRightMargin: t.customImageMargin || 5,
                showBorder: !0
            }), t.latex ? (0, n.jsx)(m, {
                style: (null === (e = t.text) || void 0 === e ? void 0 : e.length) ? {
                    color: a.default.Black,
                    padding: 20,
                    border: `1px solid ${a.default.Black}`,
                    borderRadius: 5,
                    marginRight: 10,
                    fontSize: t.customFontSize || 26
                } : {
                    color: a.default.Black,
                    fontSize: t.customFontSize || 26
                },
                children: (0, n.jsx)(r.default, {
                    latex: t.latex
                })
            }) : null, (0, n.jsx)(h, {
                ...t,
                children: t.text
            })]
        })
    }
}));