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
r.register("c7hsW", (function(t, n) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return m
    }));
    var i = r("hxEiv");
    r("fywoC");
    var a = r("b0EOS"),
        s = r("hywOl"),
        l = r("46bRO"),
        c = r("3uz2P"),
        u = r("lpEVe"),
        d = r("5O6vk"),
        f = r("eC3dm"),
        p = r("4Rzth"),
        h = (c = r("3uz2P"), r("dwAz0")),
        g = r("lqbc4");
    var m = () => ((0, g.useWillUnmount)((() => {
        d.default.editor.reset(), d.default.kitDetails.reset(), d.default.kitCollab.reset()
    })), (0, i.jsxs)(a.default, {
        children: [(0, i.jsx)(s.default, {
            children: (0, i.jsxs)("title", {
                children: [l.COMPANY_NAME, " | Kit Creator"]
            })
        }), (0, i.jsx)(h.default.Provider, {
            value: d.default,
            children: (0, i.jsx)(u.Provider, {
                ...d.default,
                children: (0, i.jsxs)(c.Routes, {
                    children: [(0, i.jsx)(c.Route, {
                        path: ":kitId/*",
                        element: (0, i.jsx)(f.default, {})
                    }), (0, i.jsx)(c.Route, {
                        path: "/",
                        element: (0, i.jsx)(p.default, {})
                    })]
                })
            })
        })]
    }))
})), r.register("b0EOS", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("2FDaO"),
        i = r("69SUA");
    let a;
    var s = o.default.div(a || (a = (e => e)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${0} !important;
`), i.Fonts.SFPro)
})), r.register("5O6vk", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("fwE7b"),
        i = r("cDyBs"),
        a = r("fvlKO");
    var s = {
        kitDetails: new(0, o.default),
        editor: new(0, i.default),
        kitCollab: new(0, a.default)
    }
})), r.register("fwE7b", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("kHqmx"),
        i = r("4MuSt"),
        a = r("j2XHK");
    const s = a.Privacy.public;
    class l {
        constructor() {
            this.id = "", this.title = "", this.image = "", this.language = null, this.subject = null, this.gradeLevel = null, this.privacy = s, this.reset = () => {
                this.id = "", this.title = "", this.image = "", this.language = null, this.subject = null, this.gradeLevel = null, this.privacy = s
            }, (0, i.makeObservable)(this)
        }
    }(0, o.__decorate)([i.observable], l.prototype, "id", void 0), (0, o.__decorate)([i.observable], l.prototype, "title", void 0), (0, o.__decorate)([i.observable], l.prototype, "image", void 0), (0, o.__decorate)([i.observable], l.prototype, "language", void 0), (0, o.__decorate)([i.observable], l.prototype, "subject", void 0), (0, o.__decorate)([i.observable], l.prototype, "gradeLevel", void 0), (0, o.__decorate)([i.observable], l.prototype, "privacy", void 0), (0, o.__decorate)([i.action], l.prototype, "reset", void 0);
    var c = l
})), r.register("j2XHK", (function(t, r) {
    let n;
    var o;
    let i;
    var a;
    let s;
    var l;
    let c;
    let u;
    var d;
    e(t.exports, "QuestionType", (function() {
        return n
    })), e(t.exports, "Privacy", (function() {
        return i
    })), e(t.exports, "GameStatus", (function() {
        return s
    })), e(t.exports, "GameType", (function() {
        return c
    })), e(t.exports, "GameGoal", (function() {
        return u
    })), e(t.exports, "themes", (function() {
        return m
    })), e(t.exports, "ExperienceSource", (function() {
        return v
    })), (o = n || (n = {})).multipleChoice = "mc", o.textInput = "text", (a = i || (i = {})).public = "public", a.private = "private", (l = s || (s = {})).setup = "setup", l.join = "join", l.teams = "teams", l.gameplay = "gameplay", l.results = "results", (c || (c = {})).live = "live", (d = u || (u = {})).time = "time", d.race = "race", d.allIn = "allIn";
    const f = "#ffffff",
        p = "#000000";
    let h;
    var g;
    (g = h || (h = {})).easy = "easy", g.medium = "medium", g.hard = "hard", g.veryHard = "veryHard", g.veryVeryHard = "veryVeryHard";
    const m = [{
        cost: 0,
        name: "Default",
        description: "Works fine, that's all",
        question: {
            background: "#303f9f",
            text: f
        },
        palette: [{
            background: "#771322",
            text: f
        }, {
            background: "#A85C15",
            text: f
        }, {
            background: "#0D6B33",
            text: f
        }, {
            background: "#076296",
            text: f
        }],
        owned: !0,
        isActive: !0
    }, {
        cost: 5,
        name: "Thanksgiving",
        description: "The perfect theme to show your thanks",
        question: {
            background: "#6C2F00",
            text: f
        },
        palette: [{
            background: "#9E682A",
            text: f
        }, {
            background: "#B54730",
            text: f
        }, {
            background: "#8A9748",
            text: f
        }, {
            background: "#F1B930",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 10,
        name: "Night",
        description: "A little easier on the eyes",
        question: {
            background: "#000a12",
            text: f
        },
        palette: [{
            background: "#263238",
            text: f
        }, {
            background: "#37474f",
            text: f
        }, {
            background: "#455a64",
            text: f
        }, {
            background: "#546e7a",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 5e5,
        name: "Thanos",
        description: "Perfectly balanced, as all things should be",
        question: {
            background: "#0D0019",
            text: f
        },
        palette: [{
            background: "#220044",
            text: f
        }, {
            background: "#330066",
            text: f
        }, {
            background: "#3E007C",
            text: f
        }, {
            background: "#4F1787",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 2e3,
        name: "Ocean",
        description: "Under the sea...",
        question: {
            background: "#000063",
            text: f
        },
        palette: [{
            background: "#283593",
            text: f
        }, {
            background: "#076296",
            text: f
        }, {
            background: "#0277bd",
            text: f
        }, {
            background: "#1565c0",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e5,
        name: "Forest",
        description: "A walk through the woods",
        question: {
            background: "#4c3d33",
            text: f
        },
        palette: [{
            background: "#385645",
            text: f
        }, {
            background: "#425C49",
            text: f
        }, {
            background: "#415641",
            text: f
        }, {
            background: "#4C6349",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1250,
        name: "Sunset",
        description: "Take a breather",
        question: {
            background: "#7F7496",
            text: f
        },
        palette: [{
            background: "#F46F5A",
            text: f
        }, {
            background: "#ED712D",
            text: f
        }, {
            background: "#7A596A",
            text: f
        }, {
            background: "#E8AB3C",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 750,
        name: "Pastel",
        description: "Lighten the mood",
        question: {
            background: "#FFbfd1",
            text: "#434343"
        },
        palette: [{
            background: "#FFA69E",
            text: "#5b5b5b"
        }, {
            background: "#FCF6BF",
            text: "#5b5b5b"
        }, {
            background: "#D0F4DE",
            text: "#5b5b5b"
        }, {
            background: "#93E1D8",
            text: "#5b5b5b"
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 500,
        name: "Retro",
        description: "Old school...",
        question: {
            background: "#9C0022",
            text: f
        },
        palette: [{
            background: "#001D3B",
            text: f
        }, {
            background: "#FFAE52",
            text: f
        }, {
            background: "#FE5963",
            text: f
        }, {
            background: "#A71C94",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e8,
        name: "Pure Gold",
        description: "Now you're just showing off",
        question: {
            background: p,
            text: "#FFCD2B"
        },
        palette: [{
            background: "#FFCD2B",
            text: p
        }, {
            background: "#FFC721",
            text: p
        }, {
            background: "#FFD147",
            text: p
        }, {
            background: "#FFCD38",
            text: p
        }],
        owned: !1,
        isActive: !1
    }];
    let v;
    var x;
    (x = v || (v = {})).original = "original", x.map = "map"
})), r.register("cDyBs", (function(t, n) {
    e(t.exports, "defaultError", (function() {
        return a
    })), e(t.exports, "default", (function() {
        return l
    }));
    var o = r("kHqmx"),
        i = r("4MuSt");
    r("iUwFC");
    const a = () => ({
        message: ""
    });
    class s {
        constructor() {
            this.questions = i.observable.array(), this.questionsChecked = i.observable.array(), this.currentlyEditingQuestionId = "", this.editSessionCounted = !1, this.error = a(), this.reset = () => {
                this.questions.replace([]), this.questionsChecked.replace([]), this.editSessionCounted = !1, this.error = a()
            }, (0, i.makeObservable)(this)
        }
    }(0, o.__decorate)([i.observable], s.prototype, "questions", void 0), (0, o.__decorate)([i.observable], s.prototype, "questionsChecked", void 0), (0, o.__decorate)([i.observable], s.prototype, "currentlyEditingQuestionId", void 0), (0, o.__decorate)([i.observable], s.prototype, "editSessionCounted", void 0), (0, o.__decorate)([i.observable], s.prototype, "error", void 0), (0, o.__decorate)([i.action], s.prototype, "reset", void 0);
    var l = s
})), r.register("iUwFC", (function(t, r) {
    let n;
    var o;
    let i;
    var a;
    let s;
    var l;
    let c;
    var u;
    let d;
    var f;
    let p;
    let h;
    var g;
    e(t.exports, "Privacy", (function() {
        return n
    })), e(t.exports, "QuestionType", (function() {
        return s
    })), e(t.exports, "TextInputAnswerType", (function() {
        return c
    })), e(t.exports, "HubItemType", (function() {
        return p
    })), e(t.exports, "HubItemStatus", (function() {
        return h
    })), (o = n || (n = {})).public = "public", o.private = "private", (a = i || (i = {})).basic = "basic", a.go = "go", a.pro = "pro", (l = s || (s = {})).multipleChoice = "mc", l.textInput = "text", (u = c || (c = {}))[u.exact = 1] = "exact", u[u.contains = 2] = "contains", (f = d || (d = {})).reachedCashGoal = "reached-cash-goal", f.reachedMaxTime = "reached-max-time", (p || (p = {})).mapAssignment = "mapAssignment", (g = h || (h = {})).completed = "completed", g.inProgress = "inProgress", g.notStarted = "notStarted"
})), r.register("fvlKO", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("kHqmx"),
        i = r("4MuSt");
    class a {
        constructor() {
            this.panelOpen = false, this.enabled = false, this.waitingQuestions = 0, this.sessionId = "", this.isPublic = true, this.hasFetchedFirstBatchOfQuestions = false, this.questions = i.observable.array(), this.reset = () => {
                this.panelOpen = false, this.enabled = false, this.waitingQuestions = 0, this.sessionId = "", this.isPublic = true, this.hasFetchedFirstBatchOfQuestions = false, this.questions.replace([])
            }, (0, i.makeObservable)(this)
        }
    }(0, o.__decorate)([i.observable], a.prototype, "panelOpen", void 0), (0, o.__decorate)([i.observable], a.prototype, "enabled", void 0), (0, o.__decorate)([i.observable], a.prototype, "waitingQuestions", void 0), (0, o.__decorate)([i.observable], a.prototype, "sessionId", void 0), (0, o.__decorate)([i.observable], a.prototype, "isPublic", void 0), (0, o.__decorate)([i.observable], a.prototype, "hasFetchedFirstBatchOfQuestions", void 0), (0, o.__decorate)([i.observable], a.prototype, "questions", void 0), (0, o.__decorate)([i.action], a.prototype, "reset", void 0);
    var s = a
})), r.register("eC3dm", (function(t, n) {
    e(t.exports, "default", (function() {
        return j
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("2FDaO"),
        s = r("ekayL"),
        l = r("bicoH"),
        c = r("29sAe"),
        u = r("dv6QI"),
        d = r("8duGu"),
        f = r("kQtwK"),
        p = r("guo1A"),
        h = r("kktyq"),
        g = r("fmRCu"),
        m = r("avpEw"),
        v = r("dwAz0"),
        x = r("beXRF"),
        y = r("cSKYy");
    let b, C, w = e => e;
    const k = a.default.div(b || (b = w`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`));
    var j = (0, y.observer)((() => {
        const e = (0, x.useLocation)(),
            {
                kitDetails: t,
                editor: r
            } = i.useContext(v.default);
        return t.id ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(k, {
                children: [(0, o.jsx)(s.default, {}), (0, o.jsx)(l.default, {})]
            }), (0, o.jsx)(c.default, {}), (0, o.jsx)(u.default, {}), (0, o.jsx)(d.default, {}), (0, o.jsx)(f.default, {}), (0, o.jsx)(h.default, {}), (0, o.jsx)(g.default, {}), (0, o.jsx)(m.default, {}), e.pathname.endsWith("editor") && 0 === r.questions.length && (0, o.jsx)(S, {})]
        }) : (0, o.jsx)(p.default, {})
    }));
    const S = a.default.div(C || (C = w`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
  z-index: 9;
`))
})), r.register("ekayL", (function(t, n) {
    e(t.exports, "HEADER_HEIGHT", (function() {
        return g
    })), e(t.exports, "default", (function() {
        return y
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("2FDaO"),
        s = r("lKmIF"),
        l = r("aLoQR"),
        c = r("gPkKT"),
        u = r("ebw20"),
        d = r("5BL8x");
    let f, p, h = e => e;
    const g = 90,
        m = a.default.div.attrs({
            className: "flex flex-column"
        })(f || (f = h`
  border-right: 1px solid ${0};
  height: 100%;
  width: ${0}px;
  box-sizing: border-box;
  position: relative;
  overflow: visible;
`), s.default.BorderGray, 323),
        v = a.default.div.attrs({
            className: "maxWidth scroll-y"
        })(p || (p = h`
  flex: 1;
`));
    class x extends i.Component {
        render() {
            return (0, o.jsxs)(m, {
                children: [(0, o.jsx)(l.default, {}), (0, o.jsxs)(v, {
                    children: [(0, o.jsx)(u.default, {}), (0, o.jsx)(c.default, {})]
                }), (0, o.jsx)(d.default, {})]
            })
        }
    }
    var y = x
})), r.register("aLoQR", (function(t, n) {
    e(t.exports, "default", (function() {
        return T
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("2FDaO"),
        c = r("69SUA"),
        u = r("lpEVe"),
        d = r("fK8ya"),
        f = r("ekayL"),
        p = r("lKmIF"),
        h = r("e4KJZ"),
        g = r("k4Vk5"),
        m = r("i2Byx"),
        v = r("py2Xr"),
        x = r("j2XHK"),
        y = r("9Y9ze");
    let b, C, w, k, j = e => e;
    const S = l.default.div(b || (b = j`
  height: ${0}px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  box-sizing: border-box;
  color: ${0};
  border-bottom: 1px solid ${0};
  overflow: hidden;
  div {
    overflow: hidden;
  }
`), (() => f.HEADER_HEIGHT), p.default.Black, p.default.BorderGray),
        E = l.default.div(C || (C = j`
  display: flex;
  align-items: center;
`)),
        O = l.default.div(w || (w = j`
  font-size: 23px;
  font-weight: ${0};
  margin-bottom: -6px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
`), c.FontWeights.UltraBold),
        I = l.default.div.attrs({
            className: "flex vc"
        })(k || (k = j`
  font-size: 10px;
  line-height: 1;
  background: #cfd8dc;
  color: #546e7a;
  padding: 4px 8px;
  border-radius: 100px;
  margin-top: 6px;
  cursor: pointer;
`));
    let M = class extends s.Component {
        render() {
            const e = this.props.kitDetails.privacy === x.Privacy.public;
            return (0, a.jsxs)(S, {
                children: [(0, a.jsxs)(E, {
                    children: [(0, a.jsx)(h.default, {
                        placement: "right",
                        title: "Change Cover Image",
                        children: (0, a.jsx)("div", {
                            children: (0, a.jsx)(d.default, {
                                image: this.props.kitDetails.image,
                                size: 50,
                                blockModalOpen: !0,
                                onClick: this.toggleEditingImageModal
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        style: {
                            marginLeft: 10,
                            flex: 1,
                            overflow: "hidden"
                        },
                        children: [(0, a.jsx)(h.default, {
                            placement: "right",
                            title: "Rename",
                            children: (0, a.jsx)(O, {
                                onClick: this.toggleEditingTitleModal,
                                children: this.props.kitDetails.title.trim() || "Untitled Kit"
                            })
                        }), (0, a.jsx)("div", {
                            className: "flex",
                            children: (0, a.jsx)(h.default, {
                                placement: "right",
                                title: "Change Privacy",
                                children: (0, a.jsxs)(I, {
                                    onClick: this.togglePrivacyModal,
                                    children: [(0, a.jsx)(v.default, {
                                        name: e ? "fas fa-unlock" : "fas fa-lock",
                                        style: {
                                            marginRight: 3,
                                            fontSize: 8
                                        }
                                    }), (0, a.jsx)("div", {
                                        children: e ? "Public" : "Private"
                                    })]
                                })
                            })
                        })]
                    })]
                }), (0, a.jsx)(g.default, {
                    closeModal: this.toggleEditingTitleModal,
                    visible: this.state.isEditingTitle
                }), (0, a.jsx)(m.default, {
                    closeModal: this.toggleEditingImageModal,
                    visible: this.state.isEditingImage
                }), (0, a.jsx)(y.default, {
                    closeModal: this.togglePrivacyModal,
                    visible: this.state.isEditingPrivacy
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                isEditingTitle: !1,
                isEditingImage: !1,
                isEditingPrivacy: !1
            }), (0, o.default)(this, "toggleEditingTitleModal", (() => this.setState({
                isEditingTitle: !this.state.isEditingTitle
            }))), (0, o.default)(this, "toggleEditingImageModal", (() => {
                this.setState({
                    isEditingImage: !this.state.isEditingImage
                })
            })), (0, o.default)(this, "togglePrivacyModal", (() => {
                this.setState({
                    isEditingPrivacy: !this.state.isEditingPrivacy
                })
            }))
        }
    };
    M = (0, i.__decorate)([(0, u.inject)("kitDetails"), u.observer], M);
    var T = M
})), r.register("fK8ya", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("2FDaO"),
        s = r("fBuQJ"),
        l = r("lKmIF"),
        c = r("1djzF");
    let u;
    const d = a.default.img.attrs((e => ({
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
        const [t, r] = i.useState(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(d, {
                ...e,
                onClick: t => {
                    t.stopPropagation(), e.onClick && e.onClick(), e.blockModalOpen || r(!0)
                }
            }), (0, o.jsx)(s.default, {
                open: t,
                onCancel: e => {
                    e.stopPropagation(), r(!1)
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
})), r.register("1djzF", (function(t, r) {
    e(t.exports, "getCloudinaryUrl", (function() {
        return n
    }));
    const n = e => {
            const t = o(e);
            return t ? e.includes("/video/upload") ? `https://${i}/video/upload/${t}` : `https://${i}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        o = e => {
            if (!l.some((t => e.includes(t)))) return null;
            if (e.includes(a) && !e.includes(`/${s}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const r = t[t.length - 2],
                n = t[t.length - 1];
            return r && n && r.startsWith("v") ? `${r}/${n}` : null
        },
        i = "media.gimkit.com",
        a = "res.cloudinary.com",
        s = "gimkit-production",
        l = [i, a]
})), r.register("k4Vk5", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("93yIm"),
        c = r("b9Zw0"),
        u = r("fBuQJ"),
        d = r("30u1u"),
        f = r("lpEVe"),
        p = r("7Dn1R");
    let h = class extends s.Component {
        render() {
            return (0, a.jsx)(u.default, {
                open: this.props.visible,
                title: `Rename "${this.props.kitDetails.title}"`,
                onCancel: this.props.closeModal,
                closable: !0,
                footer: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.default, {
                        onClick: this.props.closeModal,
                        children: "Cancel"
                    }), (0, a.jsx)(l.default, {
                        onClick: this.onRename,
                        disabled: !this.canRename(),
                        type: "primary",
                        children: "Rename"
                    })]
                }),
                children: (0, a.jsx)(c.default, {
                    placeholder: "New name...",
                    onChange: this.handleChange,
                    maxLength: d.MAX_KIT_NAME_LENGTH,
                    onPressEnter: this.onRename
                })
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                newTitle: ""
            }), (0, o.default)(this, "canRename", (() => !!this.state.newTitle.trim())), (0, o.default)(this, "onRename", (() => {
                this.canRename() && ((0, p.default)(this.state.newTitle), this.props.closeModal())
            })), (0, o.default)(this, "handleChange", (e => {
                this.setState({
                    newTitle: e.target.value
                })
            }))
        }
    };
    h = (0, i.__decorate)([(0, f.inject)("kitDetails"), f.observer], h);
    var g = h
})), r.register("30u1u", (function(t, n) {
    e(t.exports, "MAX_KIT_NAME_LENGTH", (function() {
        return k
    })), e(t.exports, "default", (function() {
        return O
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("e5yx4"),
        c = r("93yIm"),
        u = r("fC6cp"),
        d = r("b9Zw0"),
        f = r("lqzWa"),
        p = r("h0NTP"),
        h = r("bNqCy"),
        g = r("lpEVe"),
        m = r("7c9vD"),
        v = r("44D8I"),
        x = r("5mRwo"),
        y = r("beXRF"),
        b = r("b1oE9"),
        C = r("69SUA"),
        w = r("iMOcM");
    const k = 30,
        j = f.default.Option,
        S = e => (0, a.jsx)(p.default, {
            style: {
                fontWeight: "bold",
                fontSize: 25
            },
            children: e
        });
    let E = class extends s.Component {
        componentDidMount() {
            const e = localStorage.getItem(x.LocalStorageNames.editorDefaultLanguage),
                t = localStorage.getItem(x.LocalStorageNames.editorDefaultSubject) || (0, w.getUser)().areaOfExpertise,
                r = localStorage.getItem(x.LocalStorageNames.editorDefaultGradeLevel) || (0, w.getUser)().gradeLevel;
            e && (this.props.kitDetails.language = e), t && (this.props.kitDetails.subject = t), r && (this.props.kitDetails.gradeLevel = r)
        }
        render() {
            const {
                kitDetails: {
                    title: e,
                    language: t,
                    subject: r
                }
            } = this.props, n = !!(e && t && r);
            return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)(y.Link, {
                    style: {
                        fontSize: 14,
                        marginBottom: -5,
                        fontFamily: C.Fonts.SFPro
                    },
                    to: b.DASHBOARD,
                    children: [(0, a.jsx)("i", {
                        className: "fas fa-arrow-alt-left",
                        style: {
                            marginRight: 3
                        }
                    }), (0, a.jsx)("span", {
                        children: " Go Back"
                    })]
                }), (0, a.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    },
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsx)(p.default, {
                            style: {
                                fontWeight: 900,
                                fontSize: 42
                            },
                            children: l.CREATE_A_KIT_HEADER
                        }), (0, a.jsx)(p.default, {
                            style: {
                                fontSize: 20,
                                marginTop: -15
                            },
                            children: l.CREATE_A_KIT_SUBHEADER
                        })]
                    }), (0, a.jsx)("img", {
                        src: "/client/img/editor/think.svg",
                        style: {
                            height: 80
                        }
                    })]
                }), (0, a.jsx)(u.default, {}), S("Name"), (0, a.jsx)(d.default, {
                    size: "large",
                    onChange: this.onKitTitleNameChange,
                    placeholder: "Kit name",
                    maxLength: k
                }), (0, a.jsx)("div", {
                    style: {
                        height: 10
                    }
                }), S("Language"), (0, a.jsx)(f.default, {
                    style: {
                        width: "100%"
                    },
                    size: "large",
                    value: t ? (0, m.getLanguageName)(t) : void 0,
                    placeholder: "No language selected",
                    showSearch: !0,
                    onChange: this.onLanguageSelected,
                    optionFilterProp: "children",
                    filterOption: (e, t) => t.props.children.toLowerCase().indexOf(e.toLowerCase()) >= 0,
                    children: (0, m.getListOfLanguages)().map((e => (0, a.jsx)(j, {
                        value: e,
                        children: e
                    }, e)))
                }), (0, a.jsx)("div", {
                    style: {
                        height: 10
                    }
                }), S("Subject"), (0, a.jsx)(f.default, {
                    style: {
                        width: "100%"
                    },
                    size: "large",
                    placeholder: "No subject selected",
                    value: r || void 0,
                    onChange: this.onSubjectSelected,
                    children: v.optionsForAreaOfExpertise.map((e => (0, a.jsx)(j, {
                        value: e,
                        children: e
                    }, e)))
                }), (0, a.jsx)("div", {
                    style: {
                        height: 10
                    }
                }), (0, a.jsx)(u.default, {}), (0, a.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    },
                    children: [(0, a.jsx)(h.default, {
                        link: "https://www.notion.so/gimkit/Language-Subject-7ed3f1e88cc84ccaac1a282a0a4017db"
                    }), (0, a.jsx)(c.default, {
                        disabled: !n,
                        onClick: this.props.onNext,
                        type: "primary",
                        size: "large",
                        children: "Next"
                    })]
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "onKitTitleNameChange", (e => this.props.kitDetails.title = e.target.value)), (0, o.default)(this, "onLanguageSelected", (e => {
                const t = (0, m.getLanguageKey)(e);
                localStorage.setItem(x.LocalStorageNames.editorDefaultLanguage, t), this.props.kitDetails.language = t
            })), (0, o.default)(this, "onSubjectSelected", (e => {
                localStorage.setItem(x.LocalStorageNames.editorDefaultSubject, e), this.props.kitDetails.subject = e
            }))
        }
    };
    E = (0, i.__decorate)([(0, g.inject)("kitDetails"), g.observer], E);
    var O = E
})), r.register("e5yx4", (function(t, r) {
    e(t.exports, "CREATE_A_KIT_HEADER", (function() {
        return n
    })), e(t.exports, "CREATE_A_KIT_SUBHEADER", (function() {
        return o
    }));
    const n = "New Kit",
        o = "Let's get started!"
})), r.register("bNqCy", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("d55E8"),
        a = r("93yIm"),
        s = r("e4KJZ");
    var l = e => (0, o.jsx)(s.default, {
        title: "Learn more on why we collect this data",
        children: (0, o.jsx)(a.default, {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            shape: "circle",
            icon: (0, o.jsx)(i.default, {}),
            href: e.link || "",
            target: "_blank"
        })
    })
})), r.register("d55E8", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("l6faa"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "LockOutlined";
    var c = i.forwardRef(l)
})), r.register("l6faa", (function(t, r) {
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
                    d: "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"
                }
            }]
        },
        name: "lock",
        theme: "outlined"
    }
})), r.register("7c9vD", (function(t, r) {
    e(t.exports, "getListOfLanguages", (function() {
        return o
    })), e(t.exports, "getLanguageKey", (function() {
        return i
    })), e(t.exports, "getLanguageName", (function() {
        return a
    }));
    const n = {
            en: "English",
            af: "Afrikaans",
            sq: "Albanian",
            am: "Amharic",
            ar: "Arabic",
            hy: "Armenian",
            az: "Azerbaijani",
            eu: "Basque",
            be: "Belarusian",
            bn: "Bengali",
            bs: "Bosnian",
            bg: "Bulgarian",
            ca: "Catalan",
            ceb: "Cebuano",
            ny: "Chichewa",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            co: "Corsican",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            eo: "Esperanto",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            fy: "Frisian",
            gl: "Galician",
            ka: "Georgian",
            de: "German",
            el: "Greek",
            gu: "Gujarati",
            ht: "Haitian Creole",
            ha: "Hausa",
            haw: "Hawaiian",
            iw: "Hebrew",
            hi: "Hindi",
            hmn: "Hmong",
            hu: "Hungarian",
            is: "Icelandic",
            ig: "Igbo",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            jw: "Javanese",
            kn: "Kannada",
            kk: "Kazakh",
            km: "Khmer",
            ko: "Korean",
            ku: "Kurdish (Kurmanji)",
            ky: "Kyrgyz",
            lo: "Lao",
            la: "Latin",
            lv: "Latvian",
            lt: "Lithuanian",
            lb: "Luxembourgish",
            mk: "Macedonian",
            mg: "Malagasy",
            ms: "Malay",
            ml: "Malayalam",
            mt: "Maltese",
            mi: "Maori",
            mr: "Marathi",
            mn: "Mongolian",
            my: "Myanmar (Burmese)",
            ne: "Nepali",
            no: "Norwegian",
            ps: "Pashto",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ma: "Punjabi",
            ro: "Romanian",
            ru: "Russian",
            sm: "Samoan",
            gd: "Scots Gaelic",
            sr: "Serbian",
            st: "Sesotho",
            sn: "Shona",
            sd: "Sindhi",
            si: "Sinhala",
            sk: "Slovak",
            sl: "Slovenian",
            so: "Somali",
            es: "Spanish",
            su: "Sundanese",
            sw: "Swahili",
            sv: "Swedish",
            tg: "Tajik",
            ta: "Tamil",
            te: "Telugu",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            ur: "Urdu",
            uz: "Uzbek",
            vi: "Vietnamese",
            cy: "Welsh",
            xh: "Xhosa",
            yi: "Yiddish",
            yo: "Yoruba",
            zu: "Zulu"
        },
        o = () => Object.keys(n).map((e => n[e])),
        i = e => Object.keys(n).filter((t => n[t] === e))[0],
        a = e => n[e]
})), r.register("44D8I", (function(t, n) {
    e(t.exports, "optionsForAreaOfExpertise", (function() {
        return h
    })), e(t.exports, "default", (function() {
        return m
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("dEUk2"),
        s = r("fC6cp"),
        l = r("lqzWa"),
        c = r("7abSH"),
        u = r("bcnSK"),
        d = r("g4NpA"),
        f = r("lLJEv"),
        p = r("b1oE9");
    const h = ["STEM", "Arts", "Communications", "Computer Science", "Counselor", "Deaf Education", "World Languages", "Speech and Language", "English/Language Arts", "American Sign Language", "Science", "Special Education", "Gifted and Talented", "Technology", "Engineering", "Math", "History and Social Studies", "Health/Physical Education", "English Language Learner (ELL)", "Family & Consumer Science (FACS)", "Homeschool", "School Administrator", "Librarian", "Technology/Instructional Coach", "Other"].sort(),
        g = ["Pre-K", "Elementary School", "Middle School", "High School", "Post High School", "Other School", "Not Using For School", "Other"];
    var m = () => {
        const {
            login: e
        } = i.useContext(u.default), [t, r] = i.useState(""), [n, m] = i.useState(""), v = !t || !n;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(a.Title, {
                children: "💡 Area of Expertise"
            }), (0, o.jsx)(l.default, {
                style: {
                    width: "100%"
                },
                placeholder: "Select one...",
                size: "large",
                onChange: e => r(e),
                optionFilterProp: "label",
                showSearch: !0,
                options: h.map((e => ({
                    value: e,
                    label: e
                })))
            }), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, o.jsx)(a.Title, {
                children: "🎂 Grade Level"
            }), (0, o.jsx)(l.default, {
                style: {
                    width: "100%"
                },
                placeholder: "Select one...",
                size: "large",
                onChange: e => m(e),
                optionFilterProp: "label",
                showSearch: !0,
                options: g.map((e => ({
                    value: e,
                    label: e
                })))
            }), (0, o.jsx)(c.default, {
                size: "large",
                style: {
                    marginTop: 10
                },
                disabled: v,
                onClick: () => {
                    v || (e.areaOfExpertise = t, e.gradeLevel = n, e.informationNeeded.replace(e.informationNeeded.filter((e => e !== d.informationTypes.areaOfExpertise && e !== d.informationTypes.gradeLevel))))
                },
                children: "Continue"
            }), (0, o.jsx)(s.default, {}), (0, o.jsxs)("div", {
                style: {
                    textAlign: "center"
                },
                children: ["By continuing, you agree to our", " ", (0, o.jsx)("a", {
                    href: p.PRIVACY_POLICY,
                    target: "_blank",
                    children: "Privacy Policy"
                }), " ", "and", " ", (0, o.jsx)("a", {
                    href: p.TERMS_OF_SERVICE,
                    target: "_blank",
                    children: "Terms Of Service"
                }), "."]
            }), (0, o.jsx)("div", {
                style: {
                    height: 25
                }
            }), (0, o.jsx)(f.default, {
                link: "https://www.notion.so/gimkit/Area-of-Expertise-Grade-Level-a435b570d18844c78f323708686e0f52"
            })]
        })
    }
})), r.register("dEUk2", (function(t, n) {
    e(t.exports, "MAX_LENGTH_FIRST_NAME", (function() {
        return g
    })), e(t.exports, "MAX_LENGTH_LAST_NAME", (function() {
        return m
    })), e(t.exports, "Title", (function() {
        return v
    })), e(t.exports, "default", (function() {
        return y
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("bcnSK"),
        s = r("69SUA"),
        l = r("lKmIF"),
        c = r("fC6cp"),
        u = r("b9Zw0"),
        d = r("7abSH"),
        f = r("g4NpA"),
        p = r("lLJEv"),
        h = r("9BRL0");
    const g = 20,
        m = 25,
        v = e => (0, o.jsx)("div", {
            style: {
                fontFamily: s.Fonts.SFPro,
                fontWeight: s.FontWeights.Bold,
                color: l.default.Black,
                fontSize: 18
            },
            children: e.children
        }),
        x = {
            width: "100%",
            display: "flex",
            marginTop: 0,
            minHeight: 0
        };
    var y = () => {
        const {
            login: e
        } = i.useContext(a.default), [t, r] = i.useState(e.firstName), [n, s] = i.useState(e.lastName), [l, y] = i.useState(e.password), b = () => {
            let r = !0;
            return e.informationNeeded.includes(f.informationTypes.firstName) && (t || (r = !1)), e.informationNeeded.includes(f.informationTypes.lastName) && (n || (r = !1)), e.informationNeeded.includes(f.informationTypes.accountPassword) && (!l || l.length < 6) && (r = !1), r
        }, C = () => {
            b() && (t && (e.firstName = t), n && (e.lastName = n), l && (e.password = l), e.informationNeeded.replace(e.informationNeeded.filter((e => e !== f.informationTypes.firstName && e !== f.informationTypes.lastName && e !== f.informationTypes.accountPassword))))
        }, w = e.accountType === h.default.student;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(v, {
                children: "First Name"
            }), (0, o.jsx)(u.default, {
                maxLength: g,
                style: x,
                size: "large",
                placeholder: "First Name here...",
                onChange: e => r(e.target.value),
                onPressEnter: C,
                autoFocus: !0
            }), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, o.jsxs)(v, {
                children: ["Last ", w ? "Initial" : "Name"]
            }), (0, o.jsx)(u.default, {
                maxLength: w ? 1 : m,
                style: x,
                size: "large",
                placeholder: `Last ${w?"Initial":"Name"} here...`,
                onChange: e => s(e.target.value),
                onPressEnter: C
            }), e.informationNeeded.includes(f.informationTypes.accountPassword) && (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(c.default, {}), (0, o.jsx)(v, {
                    children: "Password"
                }), (0, o.jsx)("div", {
                    style: {
                        fontSize: 12,
                        marginTop: -5,
                        marginBottom: 4
                    },
                    children: "Must contain at least 6 characters"
                }), (0, o.jsx)(u.default.Password, {
                    style: x,
                    onChange: e => y(e.target.value),
                    placeholder: "Password here...",
                    size: "large",
                    maxLength: 96,
                    onPressEnter: C
                })]
            }), (0, o.jsx)(c.default, {}), (0, o.jsx)(d.default, {
                disabled: !b(),
                onClick: C,
                style: {
                    width: "100%"
                },
                size: "large",
                children: "Continue"
            }), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), !w && (0, o.jsx)(p.default, {
                link: "https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061"
            })]
        })
    }
})), r.register("bcnSK", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC"),
        i = r("bSGy0");
    var a = o.createContext(i.default)
})), r.register("bSGy0", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("g4NpA"),
        i = r("lvpm8");
    var a = {
        login: new(0, o.default),
        navigation: new(0, i.default)
    }
})), r.register("g4NpA", (function(t, n) {
    e(t.exports, "informationTypes", (function() {
        return a
    })), e(t.exports, "default", (function() {
        return j
    }));
    var o = r("kHqmx"),
        i = r("4MuSt");
    const a = {
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
            password: h,
            schoolId: g,
            districtId: m,
            country: v,
            areaOfExpertise: x,
            gradeLevel: y,
            organization: b,
            acceptsLatestPolicies: C,
            authenticated: w
        } = s;
    class k {
        constructor() {
            this.userExists = l, this.email = c, this.accountType = u, this.googleToken = d, this.firstName = f, this.lastName = p, this.password = h, this.schoolId = g, this.districtId = m, this.country = v, this.areaOfExpertise = x, this.gradeLevel = y, this.organization = b, this.acceptsLatestPolicies = C, this.authenticated = w, this.informationNeeded = i.observable.array([a.email]), this.reset = () => {
                Object.keys(s).forEach((e => this[e] = s[e])), this.informationNeeded.replace([a.email])
            }, (0, i.makeObservable)(this)
        }
    }(0, o.__decorate)([i.observable], k.prototype, "userExists", void 0), (0, o.__decorate)([i.observable], k.prototype, "email", void 0), (0, o.__decorate)([i.observable], k.prototype, "accountType", void 0), (0, o.__decorate)([i.observable], k.prototype, "googleToken", void 0), (0, o.__decorate)([i.observable], k.prototype, "firstName", void 0), (0, o.__decorate)([i.observable], k.prototype, "lastName", void 0), (0, o.__decorate)([i.observable], k.prototype, "password", void 0), (0, o.__decorate)([i.observable], k.prototype, "schoolId", void 0), (0, o.__decorate)([i.observable], k.prototype, "districtId", void 0), (0, o.__decorate)([i.observable], k.prototype, "country", void 0), (0, o.__decorate)([i.observable], k.prototype, "areaOfExpertise", void 0), (0, o.__decorate)([i.observable], k.prototype, "gradeLevel", void 0), (0, o.__decorate)([i.observable], k.prototype, "organization", void 0), (0, o.__decorate)([i.observable], k.prototype, "acceptsLatestPolicies", void 0), (0, o.__decorate)([i.observable], k.prototype, "authenticated", void 0), (0, o.__decorate)([i.observable], k.prototype, "informationNeeded", void 0), (0, o.__decorate)([i.action], k.prototype, "reset", void 0);
    var j = k
})), r.register("lvpm8", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var o = r("kHqmx"),
        i = r("4MuSt");
    const a = {
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
            classJoiningId: h,
            classJoiningName: g,
            classJoiningTeacherName: m
        } = a;
    class v {
        constructor() {
            this.currentStage = s, this.emailSignInBlocked = l, this.creatingAccount = c, this.loggingIn = u, this.updatingAccountInformation = d, this.loginError = f, this.redirectUri = p, this.classJoiningId = h, this.classJoiningName = g, this.classJoiningTeacherName = m, this.reset = () => {
                Object.keys(a).forEach((e => this[e] = a[e]))
            }, (0, i.makeObservable)(this)
        }
    }(0, o.__decorate)([i.observable], v.prototype, "currentStage", void 0), (0, o.__decorate)([i.observable], v.prototype, "emailSignInBlocked", void 0), (0, o.__decorate)([i.observable], v.prototype, "creatingAccount", void 0), (0, o.__decorate)([i.observable], v.prototype, "loggingIn", void 0), (0, o.__decorate)([i.observable], v.prototype, "updatingAccountInformation", void 0), (0, o.__decorate)([i.observable], v.prototype, "loginError", void 0), (0, o.__decorate)([i.observable], v.prototype, "redirectUri", void 0), (0, o.__decorate)([i.observable], v.prototype, "classJoiningId", void 0), (0, o.__decorate)([i.observable], v.prototype, "classJoiningName", void 0), (0, o.__decorate)([i.observable], v.prototype, "classJoiningTeacherName", void 0), (0, o.__decorate)([i.action], v.prototype, "reset", void 0);
    var x = v
})), r.register("9ZLc2", (function(t, r) {
    let n;
    var o;
    e(t.exports, "default", (function() {
        return i
    })), (o = n || (n = {})).email = "email", o.password = "password", o.accountType = "accountType", o.studentSpecificInfo = "studentSpecificInfo", o.nameAndPassword = "nameAndPassword", o.school = "school", o.educatorSpecificInfo = "educatorSpecificInfo", o.nonSchoolSpecificInfo = "nonSchoolSpecificInfo", o.acceptPolicies = "acceptPolicies", o.verifyClass = "verifyClass";
    var i = n
})), r.register("7abSH", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("lpEVe"),
        a = r("93yIm");
    var s = (0, i.observer)((e => (0, o.jsx)(a.default, {
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
})), r.register("lLJEv", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("bNqCy");
    var a = e => (0, o.jsxs)("div", {
        style: {
            justifyContent: "space-between"
        },
        className: "flex maxWidth",
        children: [(0, o.jsx)("div", {}), (0, o.jsx)(i.default, {
            link: e.link
        })]
    })
})), r.register("9BRL0", (function(t, r) {
    let n;
    var o;
    e(t.exports, "default", (function() {
        return i
    })), (o = n || (n = {})).educator = "educator", o.student = "student", o.guardian = "guardian", o.nonSchool = "nonSchool";
    var i = n
})), r.register("5mRwo", (function(t, r) {
    let n;
    var o;
    let i;
    var a;
    e(t.exports, "LocalStorageNames", (function() {
        return i
    })), (o = n || (n = {})).time = "time", o.target = "target", o.race = "race", o.allIn = "allIn", (a = i || (i = {})).language = "gimkit-3.0-game-language", a.currency = "gimkit-game-currency", a.music = "gimkit-music-track", a.allowGoogleTranslate = "gimkit-google-translate-allowed", a.editorDefaultLanguage = "gimkit-editor-v4-default-language", a.editorDefaultGradeLevel = "gimkit-editor-v4-default-grade-level", a.editorDefaultSubject = "gimkit-editor-v4-default-subject", a.cosmosBlockedInGame = "gimkit-cosmos-blocked-in-game", a.hookSavedOptions = "gimkit-hook-saved-options"
})), r.register("7Dn1R", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("5O6vk"),
        i = r("iMOcM");
    var a = e => {
        (0, i.request)({
            url: "/api/v1/editor/rename",
            method: "post",
            data: {
                kitId: o.default.kitDetails.id,
                title: e
            },
            success: e => {
                e && e.newName && (o.default.kitDetails.title = e.newName)
            },
            error: () => !1
        })
    }
})), r.register("i2Byx", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("93yIm"),
        c = r("fBuQJ"),
        u = r("lpEVe"),
        d = r("ePZZc"),
        f = r("djZND");
    let p = class extends s.Component {
        render() {
            return (0, a.jsx)(c.default, {
                open: this.props.visible,
                onCancel: this.props.closeModal,
                style: {
                    top: 20
                },
                title: "New cover photo",
                closable: !0,
                footer: (0, a.jsx)(l.default, {
                    onClick: this.props.closeModal,
                    children: "Cancel"
                }),
                children: (0, a.jsx)("div", {
                    style: {
                        maxHeight: "55vh"
                    },
                    className: "scroll disable-scrollbars",
                    children: (0, a.jsx)(d.default, {
                        defaultSearchTerm: this.props.kitDetails.title,
                        onImagePicked: this.onImagePicked
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "onImagePicked", (e => {
                (0, f.default)(e), this.props.closeModal()
            }))
        }
    };
    p = (0, i.__decorate)([(0, u.inject)("kitDetails"), u.observer], p);
    var h = p
})), r.register("djZND", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("5O6vk"),
        i = r("iMOcM");
    var a = e => {
        (0, i.request)({
            url: "/api/v1/editor/changePhoto",
            method: "post",
            data: {
                kitId: o.default.kitDetails.id,
                photo: e
            },
            success: () => {
                o.default.kitDetails.image = e
            },
            error: () => !1
        })
    }
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = e => (0, o.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("9Y9ze", (function(t, n) {
    e(t.exports, "default", (function() {
        return w
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("93yIm"),
        c = r("7ECC6"),
        u = r("fBuQJ"),
        d = r("f1yKZ"),
        f = r("lpEVe"),
        p = r("lKmIF"),
        h = r("69SUA"),
        g = r("j2XHK"),
        m = r("7vStp"),
        v = r("d55E8"),
        x = r("5JNZi");
    const y = {
            color: p.default.Black,
            fontFamily: h.Fonts.SFPro,
            marginBottom: 6
        },
        b = e => (0, a.jsx)(c.default, {
            style: {
                marginBottom: 10
            },
            children: (0, a.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    color: p.default.Black,
                    fontFamily: h.Fonts.SFPro
                },
                children: [(0, a.jsx)("div", {
                    style: {
                        marginRight: 10,
                        fontSize: 24
                    },
                    children: e.icon
                }), (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("div", {
                        style: {
                            fontWeight: h.FontWeights.UltraBold
                        },
                        children: e.name
                    }), (0, a.jsx)("div", {
                        children: e.description
                    })]
                })]
            })
        });
    let C = class extends s.Component {
        render() {
            const e = this.props.kitDetails.privacy;
            return (0, a.jsx)(u.default, {
                open: this.props.visible,
                title: "Change Privacy",
                onCancel: this.props.closeModal,
                footer: (0, a.jsx)(l.default, {
                    onClick: this.props.closeModal,
                    children: "Close"
                }),
                style: {
                    top: 20
                },
                closable: !0,
                children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(d.default.Group, {
                        value: e,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            marginTop: 15
                        },
                        onChange: this.onChange,
                        children: [(0, a.jsx)(d.default, {
                            value: g.Privacy.public,
                            style: y,
                            children: "Public"
                        }), (0, a.jsx)(d.default, {
                            value: g.Privacy.private,
                            style: y,
                            children: "Private"
                        })]
                    }), (0, a.jsx)("div", {
                        style: {
                            height: 15
                        }
                    }), (0, a.jsx)(b, {
                        name: "Public",
                        description: "Visible in search results and accessible via direct link.",
                        icon: (0, a.jsx)(x.default, {})
                    }), (0, a.jsx)(b, {
                        name: "Private",
                        description: "Hidden from search results and only visible to you.",
                        icon: (0, a.jsx)(v.default, {})
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                newTitle: ""
            }), (0, o.default)(this, "onChange", (e => {
                const t = e.target.value;
                (0, m.default)(t)
            }))
        }
    };
    C = (0, i.__decorate)([(0, f.inject)("kitDetails"), f.observer], C);
    var w = C
})), r.register("f1yKZ", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("cZxaK"),
        i = r("59VTw"),
        a = r("dOhjT");
    const s = i.default;
    s.Button = a.default, s.Group = o.default, s.__ANT_RADIO = !0;
    var l = s
})), r.register("cZxaK", (function(n, o) {
    e(n.exports, "default", (function() {
        return g
    }));
    var i = r("fe1on"),
        a = r("iI4DW"),
        s = r("fywoC"),
        l = r("4gMdJ"),
        c = r("3Ocec"),
        u = r("jiZrK"),
        d = r("aqg3x"),
        f = r("59VTw"),
        p = r("2Lvty");
    const h = s.forwardRef(((e, r) => {
        const {
            getPrefixCls: n,
            direction: o
        } = s.useContext(l.ConfigContext), h = s.useContext(c.default), [g, m] = (0, a.default)(e.defaultValue, {
            value: e.value
        }), {
            prefixCls: v,
            className: x,
            rootClassName: y,
            options: b,
            buttonStyle: C = "outline",
            disabled: w,
            children: k,
            size: j,
            style: S,
            id: E,
            onMouseEnter: O,
            onMouseLeave: I,
            onFocus: M,
            onBlur: T
        } = e, N = n("radio", v), F = `${N}-group`, [P, R] = (0, p.default)(N);
        let z = k;
        b && b.length > 0 && (z = b.map((e => "string" == typeof e || "number" == typeof e ? s.createElement(f.default, {
            key: e.toString(),
            prefixCls: N,
            disabled: w,
            value: e,
            checked: g === e
        }, e) : s.createElement(f.default, {
            key: `radio-group-value-options-${e.value}`,
            prefixCls: N,
            disabled: e.disabled || w,
            value: e.value,
            checked: g === e.value,
            style: e.style
        }, e.label))));
        const D = j || h,
            A = t(i)(F, `${F}-${C}`, {
                [`${F}-${D}`]: D,
                [`${F}-rtl`]: "rtl" === o
            }, x, y, R);
        return P(s.createElement("div", Object.assign({}, (0, u.default)(e), {
            className: A,
            style: S,
            onMouseEnter: O,
            onMouseLeave: I,
            onFocus: M,
            onBlur: T,
            id: E,
            ref: r
        }), s.createElement(d.RadioGroupContextProvider, {
            value: {
                onChange: t => {
                    const r = g,
                        n = t.target.value;
                    "value" in e || m(n);
                    const {
                        onChange: o
                    } = e;
                    o && n !== r && o(t)
                },
                value: g,
                disabled: e.disabled,
                name: e.name,
                optionType: e.optionType
            }
        }, z)))
    }));
    var g = s.memo(h)
})), r.register("aqg3x", (function(t, n) {
    e(t.exports, "RadioGroupContextProvider", (function() {
        return a
    })), e(t.exports, "default", (function() {
        return s
    })), e(t.exports, "RadioOptionTypeContext", (function() {
        return l
    })), e(t.exports, "RadioOptionTypeContextProvider", (function() {
        return c
    }));
    var o = r("fywoC");
    const i = o.createContext(null),
        a = i.Provider;
    var s = i;
    const l = o.createContext(null),
        c = l.Provider
})), r.register("59VTw", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var i = r("fe1on"),
        a = r("5AR3F"),
        s = r("fk9zJ"),
        l = r("fywoC"),
        c = r("4gMdJ"),
        u = r("cmARv"),
        d = r("jIMUD"),
        f = r("aqg3x"),
        p = r("2Lvty"),
        h = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const g = (e, r) => {
        var n, o;
        const g = l.useContext(f.default),
            m = l.useContext(f.RadioOptionTypeContext),
            {
                getPrefixCls: v,
                direction: x
            } = l.useContext(c.ConfigContext),
            y = l.useRef(),
            b = (0, s.composeRef)(r, y),
            {
                isFormItemInput: C
            } = l.useContext(d.FormItemInputContext),
            w = t => {
                var r, n;
                null === (r = e.onChange) || void 0 === r || r.call(e, t), null === (n = null == g ? void 0 : g.onChange) || void 0 === n || n.call(g, t)
            },
            {
                prefixCls: k,
                className: j,
                rootClassName: S,
                children: E,
                style: O
            } = e,
            I = h(e, ["prefixCls", "className", "rootClassName", "children", "style"]),
            M = v("radio", k),
            T = "button" === ((null == g ? void 0 : g.optionType) || m) ? `${M}-button` : M,
            [N, F] = (0, p.default)(M),
            P = Object.assign({}, I),
            R = l.useContext(u.default);
        g && (P.name = g.name, P.onChange = w, P.checked = e.value === g.value, P.disabled = null !== (n = P.disabled) && void 0 !== n ? n : g.disabled), P.disabled = null !== (o = P.disabled) && void 0 !== o ? o : R;
        const z = t(i)(`${T}-wrapper`, {
            [`${T}-wrapper-checked`]: P.checked,
            [`${T}-wrapper-disabled`]: P.disabled,
            [`${T}-wrapper-rtl`]: "rtl" === x,
            [`${T}-wrapper-in-form-item`]: C
        }, j, S, F);
        return N(l.createElement("label", {
            className: z,
            style: O,
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave
        }, l.createElement(a.default, Object.assign({}, P, {
            type: "radio",
            prefixCls: T,
            ref: b
        })), void 0 !== E ? l.createElement("span", null, E) : null))
    };
    var m = l.forwardRef(g)
})), r.register("5AR3F", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }));
    var i = r("2ic9V"),
        a = r("iStnv"),
        s = r("hzerz"),
        l = r("46jhs"),
        c = r("hn4Tf"),
        u = r("7NK35"),
        d = r("b1RjK"),
        f = r("17aYs"),
        p = r("fywoC"),
        h = r("fe1on"),
        g = function(e) {
            (0, d.default)(n, e);
            var r = (0, f.default)(n);

            function n(e) {
                var t;
                (0, c.default)(this, n), (t = r.call(this, e)).handleChange = function(e) {
                    var r = t.props,
                        n = r.disabled,
                        o = r.onChange;
                    n || ("checked" in t.props || t.setState({
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
            return (0, u.default)(n, [{
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
                    var e, r = this.props,
                        n = r.prefixCls,
                        o = r.className,
                        l = r.style,
                        c = r.name,
                        u = r.id,
                        d = r.type,
                        f = r.disabled,
                        g = r.readOnly,
                        m = r.tabIndex,
                        v = r.onClick,
                        x = r.onFocus,
                        y = r.onBlur,
                        b = r.onKeyDown,
                        C = r.onKeyPress,
                        w = r.onKeyUp,
                        k = r.autoFocus,
                        j = r.value,
                        S = r.required,
                        E = (0, s.default)(r, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]),
                        O = Object.keys(E).reduce((function(e, t) {
                            return "aria-" !== t.substr(0, 5) && "data-" !== t.substr(0, 5) && "role" !== t || (e[t] = E[t]), e
                        }), {}),
                        I = this.state.checked,
                        M = t(h)(n, o, (e = {}, (0, a.default)(e, "".concat(n, "-checked"), I), (0, a.default)(e, "".concat(n, "-disabled"), f), e));
                    return t(p).createElement("span", {
                        className: M,
                        style: l
                    }, t(p).createElement("input", (0, i.default)({
                        name: c,
                        id: u,
                        type: d,
                        required: S,
                        readOnly: g,
                        disabled: f,
                        tabIndex: m,
                        className: "".concat(n, "-input"),
                        checked: !!I,
                        onClick: v,
                        onFocus: x,
                        onBlur: y,
                        onKeyUp: w,
                        onKeyDown: b,
                        onKeyPress: C,
                        onChange: this.handleChange,
                        autoFocus: k,
                        ref: this.saveInput,
                        value: j
                    }, O)), t(p).createElement("span", {
                        className: "".concat(n, "-inner")
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return "checked" in e ? (0, l.default)((0, l.default)({}, t), {}, {
                        checked: e.checked
                    }) : null
                }
            }]), n
        }(p.Component);
    g.defaultProps = {
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
    var m = g
})), r.register("2ic9V", (function(t, r) {
    function n() {
        return n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, n.apply(this, arguments)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("iStnv", (function(t, r) {
    function n(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("hzerz", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("cK78M");

    function i(e, t) {
        if (null == e) return {};
        var r, n, i = (0, o.default)(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
    }
})), r.register("cK78M", (function(t, r) {
    function n(e, t) {
        if (null == e) return {};
        var r, n, o = {},
            i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("46jhs", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("iStnv");

    function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(r), !0).forEach((function(t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
})), r.register("hn4Tf", (function(t, r) {
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("7NK35", (function(t, r) {
    function n(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function o(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
    e(t.exports, "default", (function() {
        return o
    }))
})), r.register("b1RjK", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("63PCo");

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && (0, o.default)(e, t)
    }
})), r.register("63PCo", (function(t, r) {
    function n(e, t) {
        return n = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, n(e, t)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("17aYs", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("bArAQ"),
        i = r("lcgmN"),
        a = r("erlXZ");

    function s(e) {
        var t = (0, i.default)();
        return function() {
            var r, n = (0, o.default)(e);
            if (t) {
                var i = (0, o.default)(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else r = n.apply(this, arguments);
            return (0, a.default)(this, r)
        }
    }
})), r.register("bArAQ", (function(t, r) {
    function n(e) {
        return n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, n(e)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("lcgmN", (function(t, r) {
    function n() {
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
        return n
    }))
})), r.register("erlXZ", (function(n, o) {
    e(n.exports, "default", (function() {
        return s
    }));
    var i = r("1eKqi"),
        a = r("cdb2f");

    function s(e, r) {
        if (r && ("object" === t(i)(r) || "function" == typeof r)) return r;
        if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
        return (0, a.default)(e)
    }
})), r.register("1eKqi", (function(e, t) {
    function r(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = r = function(e) {
            return typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = r = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0), r(t)
    }
    e.exports = r, e.exports.default = e.exports, e.exports.__esModule = !0
})), r.register("cdb2f", (function(t, r) {
    function n(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("2Lvty", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("lt5sb"),
        i = r("huF4L"),
        a = r("1QMe3"),
        s = r("kCC5O");
    const l = new(0, o.Keyframes)("antRadioEffect", {
            "0%": {
                transform: "scale(1)",
                opacity: .5
            },
            "100%": {
                transform: "scale(1.6)",
                opacity: 0
            }
        }),
        c = e => {
            const {
                componentCls: t,
                antCls: r
            } = e, n = `${t}-group`;
            return {
                [n]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                    display: "inline-block",
                    fontSize: 0,
                    [`&${n}-rtl`]: {
                        direction: "rtl"
                    },
                    [`${r}-badge ${r}-badge-count`]: {
                        zIndex: 1
                    },
                    [`> ${r}-badge:not(:first-child) > ${r}-button-wrapper`]: {
                        borderInlineStart: "none"
                    }
                })
            }
        },
        u = e => {
            const {
                componentCls: t,
                radioWrapperMarginRight: r,
                radioCheckedColor: n,
                radioSize: o,
                motionDurationSlow: i,
                motionDurationMid: a,
                motionEaseInOut: c,
                motionEaseInOutCirc: u,
                radioButtonBg: d,
                colorBorder: f,
                lineWidth: p,
                radioDotSize: h,
                colorBgContainerDisabled: g,
                colorTextDisabled: m,
                paddingXS: v,
                radioDotDisabledColor: x,
                lineType: y,
                radioDotDisabledSize: b,
                wireframe: C,
                colorWhite: w
            } = e, k = `${t}-inner`;
            return {
                [`${t}-wrapper`]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "baseline",
                    marginInlineStart: 0,
                    marginInlineEnd: r,
                    cursor: "pointer",
                    [`&${t}-wrapper-rtl`]: {
                        direction: "rtl"
                    },
                    "&-disabled": {
                        cursor: "not-allowed",
                        color: e.colorTextDisabled
                    },
                    "&::after": {
                        display: "inline-block",
                        width: 0,
                        overflow: "hidden",
                        content: '"\\a0"'
                    },
                    [`${t}-checked::after`]: {
                        position: "absolute",
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        width: "100%",
                        height: "100%",
                        border: `${p}px ${y} ${n}`,
                        borderRadius: "50%",
                        visibility: "hidden",
                        animationName: l,
                        animationDuration: i,
                        animationTimingFunction: c,
                        animationFillMode: "both",
                        content: '""'
                    },
                    [t]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                        position: "relative",
                        display: "inline-block",
                        outline: "none",
                        cursor: "pointer",
                        alignSelf: "center"
                    }),
                    [`${t}-wrapper:hover &,\n        &:hover ${k}`]: {
                        borderColor: n
                    },
                    [`${t}-input:focus-visible + ${k}`]: Object.assign({}, (0, s.genFocusOutline)(e)),
                    [`${t}:hover::after, ${t}-wrapper:hover &::after`]: {
                        visibility: "visible"
                    },
                    [`${t}-inner`]: {
                        "&::after": {
                            boxSizing: "border-box",
                            position: "absolute",
                            insetBlockStart: "50%",
                            insetInlineStart: "50%",
                            display: "block",
                            width: o,
                            height: o,
                            marginBlockStart: o / -2,
                            marginInlineStart: o / -2,
                            backgroundColor: C ? n : w,
                            borderBlockStart: 0,
                            borderInlineStart: 0,
                            borderRadius: o,
                            transform: "scale(0)",
                            opacity: 0,
                            transition: `all ${i} ${u}`,
                            content: '""'
                        },
                        boxSizing: "border-box",
                        position: "relative",
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        display: "block",
                        width: o,
                        height: o,
                        backgroundColor: d,
                        borderColor: f,
                        borderStyle: "solid",
                        borderWidth: p,
                        borderRadius: "50%",
                        transition: `all ${a}`
                    },
                    [`${t}-input`]: {
                        position: "absolute",
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 1,
                        cursor: "pointer",
                        opacity: 0
                    },
                    [`${t}-checked`]: {
                        [k]: {
                            borderColor: n,
                            backgroundColor: C ? d : n,
                            "&::after": {
                                transform: `scale(${h/o})`,
                                opacity: 1,
                                transition: `all ${i} ${u}`
                            }
                        }
                    },
                    [`${t}-disabled`]: {
                        cursor: "not-allowed",
                        [k]: {
                            backgroundColor: g,
                            borderColor: f,
                            cursor: "not-allowed",
                            "&::after": {
                                backgroundColor: x
                            }
                        },
                        [`${t}-input`]: {
                            cursor: "not-allowed"
                        },
                        [`${t}-disabled + span`]: {
                            color: m,
                            cursor: "not-allowed"
                        },
                        [`&${t}-checked`]: {
                            [k]: {
                                "&::after": {
                                    transform: `scale(${b/o})`
                                }
                            }
                        }
                    },
                    [`span${t} + *`]: {
                        paddingInlineStart: v,
                        paddingInlineEnd: v
                    }
                })
            }
        },
        d = e => {
            const {
                radioButtonColor: t,
                controlHeight: r,
                componentCls: n,
                lineWidth: o,
                lineType: i,
                colorBorder: a,
                motionDurationSlow: l,
                motionDurationMid: c,
                radioButtonPaddingHorizontal: u,
                fontSize: d,
                radioButtonBg: f,
                fontSizeLG: p,
                controlHeightLG: h,
                controlHeightSM: g,
                paddingXS: m,
                borderRadius: v,
                borderRadiusSM: x,
                borderRadiusLG: y,
                radioCheckedColor: b,
                radioButtonCheckedBg: C,
                radioButtonHoverColor: w,
                radioButtonActiveColor: k,
                radioSolidCheckedColor: j,
                colorTextDisabled: S,
                colorBgContainerDisabled: E,
                radioDisabledButtonCheckedColor: O,
                radioDisabledButtonCheckedBg: I
            } = e;
            return {
                [`${n}-button-wrapper`]: {
                    position: "relative",
                    display: "inline-block",
                    height: r,
                    margin: 0,
                    paddingInline: u,
                    paddingBlock: 0,
                    color: t,
                    fontSize: d,
                    lineHeight: r - 2 * o + "px",
                    background: f,
                    border: `${o}px ${i} ${a}`,
                    borderBlockStartWidth: o + .02,
                    borderInlineStartWidth: 0,
                    borderInlineEndWidth: o,
                    cursor: "pointer",
                    transition: [`color ${c}`, `background ${c}`, `border-color ${c}`, `box-shadow ${c}`].join(","),
                    a: {
                        color: t
                    },
                    [`> ${n}-button`]: {
                        position: "absolute",
                        insetBlockStart: 0,
                        insetInlineStart: 0,
                        zIndex: -1,
                        width: "100%",
                        height: "100%"
                    },
                    "&:not(:first-child)": {
                        "&::before": {
                            position: "absolute",
                            insetBlockStart: -o,
                            insetInlineStart: -o,
                            display: "block",
                            boxSizing: "content-box",
                            width: 1,
                            height: "100%",
                            paddingBlock: o,
                            paddingInline: 0,
                            backgroundColor: a,
                            transition: `background-color ${l}`,
                            content: '""'
                        }
                    },
                    "&:first-child": {
                        borderInlineStart: `${o}px ${i} ${a}`,
                        borderStartStartRadius: v,
                        borderEndStartRadius: v
                    },
                    "&:last-child": {
                        borderStartEndRadius: v,
                        borderEndEndRadius: v
                    },
                    "&:first-child:last-child": {
                        borderRadius: v
                    },
                    [`${n}-group-large &`]: {
                        height: h,
                        fontSize: p,
                        lineHeight: h - 2 * o + "px",
                        "&:first-child": {
                            borderStartStartRadius: y,
                            borderEndStartRadius: y
                        },
                        "&:last-child": {
                            borderStartEndRadius: y,
                            borderEndEndRadius: y
                        }
                    },
                    [`${n}-group-small &`]: {
                        height: g,
                        paddingInline: m - o,
                        paddingBlock: 0,
                        lineHeight: g - 2 * o + "px",
                        "&:first-child": {
                            borderStartStartRadius: x,
                            borderEndStartRadius: x
                        },
                        "&:last-child": {
                            borderStartEndRadius: x,
                            borderEndEndRadius: x
                        }
                    },
                    "&:hover": {
                        position: "relative",
                        color: b
                    },
                    "&:has(:focus-visible)": Object.assign({}, (0, s.genFocusOutline)(e)),
                    [`${n}-inner, input[type='checkbox'], input[type='radio']`]: {
                        width: 0,
                        height: 0,
                        opacity: 0,
                        pointerEvents: "none"
                    },
                    [`&-checked:not(${n}-button-wrapper-disabled)`]: {
                        zIndex: 1,
                        color: b,
                        background: C,
                        borderColor: b,
                        "&::before": {
                            backgroundColor: b
                        },
                        "&:first-child": {
                            borderColor: b
                        },
                        "&:hover": {
                            color: w,
                            borderColor: w,
                            "&::before": {
                                backgroundColor: w
                            }
                        },
                        "&:active": {
                            color: k,
                            borderColor: k,
                            "&::before": {
                                backgroundColor: k
                            }
                        }
                    },
                    [`${n}-group-solid &-checked:not(${n}-button-wrapper-disabled)`]: {
                        color: j,
                        background: b,
                        borderColor: b,
                        "&:hover": {
                            color: j,
                            background: w,
                            borderColor: w
                        },
                        "&:active": {
                            color: j,
                            background: k,
                            borderColor: k
                        }
                    },
                    "&-disabled": {
                        color: S,
                        backgroundColor: E,
                        borderColor: a,
                        cursor: "not-allowed",
                        "&:first-child, &:hover": {
                            color: S,
                            backgroundColor: E,
                            borderColor: a
                        }
                    },
                    [`&-disabled${n}-button-wrapper-checked`]: {
                        color: O,
                        backgroundColor: I,
                        borderColor: a,
                        boxShadow: "none"
                    }
                }
            }
        };
    var f = (0, i.default)("Radio", (e => {
        const {
            padding: t,
            lineWidth: r,
            controlItemBgActiveDisabled: n,
            colorTextDisabled: o,
            colorBgContainer: i,
            fontSizeLG: s,
            controlOutline: l,
            colorPrimaryHover: f,
            colorPrimaryActive: p,
            colorText: h,
            colorPrimary: g,
            marginXS: m,
            controlOutlineWidth: v,
            colorTextLightSolid: x,
            wireframe: y
        } = e, b = `0 0 0 ${v}px ${l}`, C = b, w = s, k = w - 8, j = y ? k : w - 2 * (4 + r), S = g, E = h, O = f, I = p, M = t - r, T = o, N = m, F = (0, a.merge)(e, {
            radioFocusShadow: b,
            radioButtonFocusShadow: C,
            radioSize: w,
            radioDotSize: j,
            radioDotDisabledSize: k,
            radioCheckedColor: S,
            radioDotDisabledColor: o,
            radioSolidCheckedColor: x,
            radioButtonBg: i,
            radioButtonCheckedBg: i,
            radioButtonColor: E,
            radioButtonHoverColor: O,
            radioButtonActiveColor: I,
            radioButtonPaddingHorizontal: M,
            radioDisabledButtonCheckedBg: n,
            radioDisabledButtonCheckedColor: T,
            radioWrapperMarginRight: N
        });
        return [c(F), u(F), d(F)]
    }))
})), r.register("dOhjT", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var o = r("fywoC"),
        i = r("4gMdJ"),
        a = r("aqg3x"),
        s = r("59VTw"),
        l = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const c = (e, t) => {
        const {
            getPrefixCls: r
        } = o.useContext(i.ConfigContext), {
            prefixCls: n
        } = e, c = l(e, ["prefixCls"]), u = r("radio", n);
        return o.createElement(a.RadioOptionTypeContextProvider, {
            value: "button"
        }, o.createElement(s.default, Object.assign({
            prefixCls: u
        }, c, {
            type: "radio",
            ref: t
        })))
    };
    var u = o.forwardRef(c)
})), r.register("7vStp", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("iMOcM"),
        i = r("5O6vk");
    var a = e => {
        (0, o.request)({
            url: "/api/games/privacy",
            method: "post",
            data: {
                id: i.default.kitDetails.id,
                privacy: e
            },
            success: () => {
                i.default.kitDetails.privacy = e
            },
            error: () => !1
        })
    }
})), r.register("5JNZi", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("eao6Z"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "UnlockOutlined";
    var c = i.forwardRef(l)
})), r.register("eao6Z", (function(t, r) {
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
                    d: "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"
                }
            }]
        },
        name: "unlock",
        theme: "outlined"
    }
})), r.register("gPkKT", (function(t, n) {
    e(t.exports, "default", (function() {
        return C
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("2FDaO"),
        s = r("lKmIF"),
        l = r("ih5vo"),
        c = r("lpEVe"),
        u = r("lz1ZO"),
        d = r("dwAz0"),
        f = r("iMOcM"),
        p = r("hlwr3"),
        h = r("cpVgj"),
        g = r("hjoUW"),
        m = r("gSG6u"),
        v = r("b8HM9"),
        x = r("beXRF"),
        y = r("hFybW");
    let b;
    var C = (0, c.observer)((() => {
        const e = (0, x.useLocation)(),
            {
                editor: t,
                kitCollab: r
            } = i.useContext(d.default);
        return (0, o.jsx)(w, {
            overlayVisible: 0 === t.questions.length && e.pathname.endsWith("editor"),
            children: (0, o.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column"
                },
                children: [(0, o.jsx)(y.default, {
                    icon: g.default,
                    title: "Add Question",
                    onClick: () => (0, u.default)(l.addNewQuestion),
                    blockBackground: !0
                }), (0, o.jsx)(y.default, {
                    icon: m.default,
                    title: "Create with Flashcards",
                    onClick: () => (0, u.default)(l.flashcardHomebase),
                    blockBackground: !0
                }), (0, f.isStudent)() ? null : (0, o.jsx)(y.default, {
                    icon: p.default,
                    title: "Collaborate With KitCollab" + (r.waitingQuestions ? ` (${r.waitingQuestions})` : ""),
                    onClick: () => (0, u.default)(l.kitCollab),
                    blockBackground: !0
                }), (0, o.jsx)(y.default, {
                    icon: h.default,
                    title: "Add from Question Bank",
                    onClick: () => (0, u.default)(l.questionBank),
                    blockBackground: !0
                }), (0, o.jsx)(y.default, {
                    icon: v.default,
                    title: "Import from Spreadsheet",
                    onClick: () => (0, u.default)(l.spreadsheet),
                    blockBackground: !0
                })]
            })
        })
    }));
    const w = a.default.div(b || (b = (e => e)`
  background: ${0};
  display: flex;
  align-items: center;
  z-index: ${0};
  position: ${0};
  width: 100%;
`), s.default.White, (e => e.overlayVisible ? 101 : 1), (e => e.overlayVisible ? "relative" : "static"))
})), r.register("ih5vo", (function(t, n) {
    e(t.exports, "editorBase", (function() {
        return i
    })), e(t.exports, "addNewQuestion", (function() {
        return a
    })), e(t.exports, "flashcardImport", (function() {
        return s
    })), e(t.exports, "spreadsheet", (function() {
        return l
    })), e(t.exports, "createWithFlashcards", (function() {
        return c
    })), e(t.exports, "flashcardHomebase", (function() {
        return u
    })), e(t.exports, "questionBank", (function() {
        return d
    })), e(t.exports, "kitCollab", (function() {
        return f
    }));
    var o = r("b1oE9");
    const i = e => (e => o.KIT_CREATOR + "/" + e)(e) + "/editor",
        a = e => i(e) + "/question",
        s = e => i(e) + "/flashcard-import",
        l = e => i(e) + "/spreadsheet",
        c = e => i(e) + "/flashcard-create",
        u = e => i(e) + "/flashcard-home",
        d = e => i(e) + "/question-bank",
        f = e => i(e) + "/kit-collab"
})), r.register("lz1ZO", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("iROck"),
        i = r("5O6vk");
    var a = e => {
        const t = i.default.kitDetails.id || "kitId";
        return (0, o.NavigateTo)(e(t))
    }
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return i
    }));
    var o = r("bd8je");
    const i = e => {
        o.history.push(e)
    }
})), r.register("dwAz0", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC"),
        i = r("5O6vk");
    var a = o.createContext(i.default)
})), r.register("hlwr3", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("cHJNO"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "ApiOutlined";
    var c = i.forwardRef(l)
})), r.register("cHJNO", (function(t, r) {
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
                    d: "M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 00-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 000 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 00-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 00-11.3 0L363 475.3l-43-43a7.85 7.85 0 00-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 000 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 01-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 01-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z"
                }
            }]
        },
        name: "api",
        theme: "outlined"
    }
})), r.register("cpVgj", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("byLH5"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "FunnelPlotOutlined";
    var c = i.forwardRef(l)
})), r.register("byLH5", (function(t, r) {
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
                    d: "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 607.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V607.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V650h182.9v148zm9.6-226.6l-8.4 14.6H419.3l-8.4-14.6L334.4 438h355.2L613 571.4zM726.3 374H297.7l-85-148h598.6l-85 148z"
                }
            }]
        },
        name: "funnel-plot",
        theme: "outlined"
    }
})), r.register("gSG6u", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("Ofp5p"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "RocketOutlined";
    var c = i.forwardRef(l)
})), r.register("Ofp5p", (function(t, r) {
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
                    d: "M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z"
                }
            }]
        },
        name: "rocket",
        theme: "outlined"
    }
})), r.register("b8HM9", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("3XNMa"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "TableOutlined";
    var c = i.forwardRef(l)
})), r.register("3XNMa", (function(t, r) {
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
                    d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"
                }
            }]
        },
        name: "table",
        theme: "outlined"
    }
})), r.register("hFybW", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("2FDaO"),
        s = r("lKmIF"),
        l = r("69SUA");
    let c, u, d, f = e => e;
    const p = "#1890FF",
        h = a.default.div(c || (c = f`
  width: 100%;
  box-sizing: border-box;
  font-family: ${0};
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: ${0}px;
  align-items: center;
  padding-left: 24px;
  padding-right: 16px;
  background: ${0};
  color: ${0};
  ${0}
  transition: all 0.25s;
  &:hover {
    color: ${0};
  }
`), l.Fonts.SFPro, 14, (e => e.selected && !e.blockBackground ? "#E5F7FE" : s.default.White), (e => e.selected ? p : "rgba(0,0,0,.65)"), (e => e.selected && !e.blockStripe && "border-right: 3px solid " + p + ";"), p),
        g = a.default.div.attrs({
            className: "flex vc maxWidth"
        })(u || (u = f``)),
        m = a.default.div(d || (d = f``));
    class v extends i.Component {
        render() {
            const {
                title: e,
                onClick: t,
                selected: r,
                blockStripe: n,
                blockBackground: i
            } = this.props, a = this.props.icon;
            return (0, o.jsxs)(h, {
                selected: r,
                blockStripe: n,
                blockBackground: i,
                onClick: t,
                className: this.props.className,
                ...this.props.style,
                children: [a ? (0, o.jsx)(a, {
                    style: {
                        fontSize: 14,
                        marginRight: 10
                    },
                    theme: this.props.customIconColor ? "twoTone" : "outlined",
                    twoToneColor: this.props.customIconColor || ""
                }) : null, (0, o.jsxs)(g, {
                    children: [(0, o.jsx)(m, {
                        children: e
                    }), this.props.customRightComponent ? this.props.customRightComponent : null]
                })]
            })
        }
    }
    var x = v
})), r.register("ebw20", (function(t, n) {
    e(t.exports, "QUESTION_LIMIT", (function() {
        return c
    })), e(t.exports, "default", (function() {
        return d
    }));
    var o = r("kHqmx"),
        i = r("hxEiv"),
        a = r("fywoC"),
        s = r("bfV0l"),
        l = r("lpEVe");
    const c = 400;
    let u = class extends a.Component {
        render() {
            return this.props.editor.questions.length < c ? null : (0, i.jsx)(s.default, {
                message: "Question Limit Reached",
                description: `Kits cannot contain more than ${c} questions.`,
                type: "error",
                style: {
                    margin: 10
                }
            })
        }
    };
    u = (0, o.__decorate)([(0, l.inject)("editor"), l.observer], u);
    var d = u
})), r.register("5BL8x", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("kHqmx"),
        i = r("hxEiv"),
        a = r("lpEVe"),
        s = r("fywoC"),
        l = r("2FDaO"),
        c = r("lKmIF"),
        u = r("py2Xr");
    let d, f = class extends s.Component {
        render() {
            return this.props.editor.questions.length ? (0, i.jsxs)(h, {
                children: [(0, i.jsx)(u.default, {
                    name: "fad fa-check-circle",
                    style: {
                        marginRight: 6,
                        color: "#2e7d32"
                    }
                }), " ", "All changes saved"]
            }) : null
        }
    };
    f = (0, o.__decorate)([(0, a.inject)("editor"), a.observer], f);
    var p = f;
    const h = l.default.div.attrs({
        className: "flex hc vc"
    })(d || (d = (e => e)`
  font-size: 14px;
  border-top: 1px solid ${0};
  padding: 15px;
  line-height: 1;
`), c.default.BorderGray)
})), r.register("bicoH", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        a = r("lKmIF"),
        s = r("8dAY6"),
        l = r("4PsHX");
    let c;
    const u = i.default.div(c || (c = (e => e)`
  flex: 1;
  width: 100%;
  height: 100%;
  color: ${0};
  background: ${0};
  display: flex;
  flex-direction: column;
`), a.default.Black, a.default.Snow);
    var d = () => (0, o.jsxs)(u, {
        children: [(0, o.jsx)(s.default, {}), (0, o.jsx)(l.default, {})]
    })
})), r.register("8dAY6", (function(t, n) {
    e(t.exports, "RIGHT_SIDE_HEADER_PADDING", (function() {
        return g
    })), e(t.exports, "default", (function() {
        return x
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("2FDaO"),
        c = r("lKmIF"),
        u = r("ekayL"),
        d = r("lpEVe"),
        f = r("3DUvW"),
        p = r("94rin");
    let h;
    const g = 20;
    let m = class extends s.Component {
        render() {
            return (0, a.jsx)(v, {
                children: this.getContent()
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "getContent", (() => this.props.editor.questionsChecked.length ? (0, a.jsx)(f.default, {}) : (0, a.jsx)(p.default, {})))
        }
    };
    m = (0, i.__decorate)([(0, d.inject)("editor"), d.observer], m);
    const v = l.default.div(h || (h = (e => e)`
  background: ${0};
  height: ${0}px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid ${0};
`), c.default.White, u.HEADER_HEIGHT, c.default.BorderGray);
    var x = m
})), r.register("3DUvW", (function(t, n) {
    e(t.exports, "default", (function() {
        return w
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("lpEVe"),
        c = r("2FDaO"),
        u = r("69SUA"),
        d = r("iMOcM"),
        f = r("9g8O0"),
        p = r("93yIm"),
        h = r("5iOka"),
        g = r("bM9ve"),
        m = r("8dAY6");
    let v, x, y, b = e => e,
        C = class extends s.Component {
            render() {
                const e = this.props.editor.questionsChecked.length;
                return (0, a.jsxs)(k, {
                    children: [(0, a.jsx)(j, {
                        onClick: this.onSelectQuestionCount,
                        children: `${e} ${(0,d.plural)("question",e)} selected`
                    }), (0, a.jsxs)(S, {
                        children: [(0, a.jsx)(p.default, {
                            size: "large",
                            onClick: this.convertSelectedQuestions,
                            children: "Convert to Text Input"
                        }), (0, a.jsx)(p.default, {
                            onClick: this.deleteSelectedQuestions,
                            style: {
                                marginLeft: 5
                            },
                            type: "primary",
                            icon: (0, a.jsx)(f.default, {}),
                            size: "large",
                            children: "Delete"
                        })]
                    })]
                })
            }
            constructor(...e) {
                super(...e), (0, o.default)(this, "onSelectQuestionCount", (() => {
                    this.props.editor.questionsChecked.length === this.props.editor.questions.length ? this.props.editor.questionsChecked.replace([]) : this.props.editor.questionsChecked.replace(this.props.editor.questions.map((e => e._id)))
                })), (0, o.default)(this, "deleteSelectedQuestions", (() => {
                    (0, h.default)(this.props.editor.questionsChecked)
                })), (0, o.default)(this, "convertSelectedQuestions", (() => {
                    (0, g.default)(this.props.editor.questionsChecked)
                }))
            }
        };
    C = (0, i.__decorate)([(0, l.inject)("editor"), l.observer], C);
    var w = C;
    const k = c.default.div(v || (v = b`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: ${0}px;
`), (() => m.RIGHT_SIDE_HEADER_PADDING)),
        j = c.default.div(x || (x = b`
  font-weight: ${0};
  font-size: 20px;
  cursor: pointer;
`), u.FontWeights.Bold),
        S = c.default.div(y || (y = b`
  display: flex;
  align-items: center;
`))
})), r.register("9g8O0", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("ewhoP"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "DeleteOutlined";
    var c = i.forwardRef(l)
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
})), r.register("5iOka", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("iMOcM"),
        i = r("5O6vk"),
        a = r("sgWtV"),
        s = r("4MuSt");
    var l = e => {
        const t = (0, s.toJS)(e);
        (0, o.request)({
            url: "/api/v1/editor/questions/remove",
            method: "post",
            data: {
                questions: e,
                kitId: i.default.kitDetails.id
            },
            success: () => {
                i.default.editor.questionsChecked.replace([]);
                const e = i.default.editor.questions.filter((e => !t.includes(e._id)));
                i.default.editor.questions.replace(e)
            },
            error: () => (0, a.throwError)({
                title: "Error deleting questions..."
            })
        })
    }
})), r.register("bM9ve", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("iMOcM"),
        i = r("5O6vk"),
        a = r("sgWtV"),
        s = r("4MuSt");
    var l = e => {
        const t = (0, s.toJS)(e);
        (0, o.request)({
            url: "/api/v1/editor/questions/convert-text-input",
            method: "post",
            data: {
                questions: t,
                kitId: i.default.kitDetails.id
            },
            success: e => {
                let t = {};
                e.forEach((e => t[e._id] = e)), i.default.editor.questionsChecked.replace([]);
                const r = i.default.editor.questions.map((e => t[e._id] ? t[e._id] : e));
                i.default.editor.questions.replace(r)
            },
            error: () => (0, a.throwError)({
                title: "Error converting questions...",
                content: "One of the questions might have an image or equation as the answer, which cannot be converted to a text input question"
            })
        })
    }
})), r.register("94rin", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        a = r("8dAY6"),
        s = r("kLpOI"),
        l = r("93yIm"),
        c = r("b1oE9"),
        u = r("kyvf1");
    let d;
    var f = () => (0, o.jsx)(p, {
        children: (0, o.jsx)(u.default, {
            to: c.DASHBOARD,
            children: (0, o.jsx)(l.default, {
                size: "large",
                icon: (0, o.jsx)(s.default, {}),
                type: "primary",
                children: "All Done"
            })
        })
    });
    const p = i.default.div(d || (d = (e => e)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${0}px;
`), (() => a.RIGHT_SIDE_HEADER_PADDING))
})), r.register("kLpOI", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("ayjhg"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "CheckOutlined";
    var c = i.forwardRef(l)
})), r.register("ayjhg", (function(t, r) {
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
                    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
            }]
        },
        name: "check",
        theme: "outlined"
    }
})), r.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("hxEiv"),
        i = r("beXRF");
    r("fywoC");
    var a = e => e.external || !e.to ? (0, o.jsx)("a", {
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
    }) : (0, o.jsx)(i.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), r.register("4PsHX", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = r("divCp"),
        i = r("hxEiv"),
        a = r("fywoC"),
        s = r("446vs");
    let l;
    const c = r("2FDaO").default.div.attrs({
        className: "scroll"
    })(l || (l = (e => e)`
  height: 100%;
  width: 100%;
  flex: 1;
  div {
    box-sizing: border-box;
  }
`));
    class u extends a.Component {
        render() {
            return (0, i.jsx)(c, {
                ref: this.containerRef,
                children: (0, i.jsx)(s.default, {
                    scrollToTop: this.scrollToTop
                })
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "containerRef", a.createRef()), (0, o.default)(this, "scrollToTop", (() => {
                this.containerRef.current && this.containerRef.current.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }))
        }
    }
    var d = u
})), r.register("446vs", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("2FDaO"),
        s = r("lpEVe"),
        l = r("8FJCY"),
        c = r("ih5vo"),
        u = r("lz1ZO"),
        d = r("6V5qK"),
        f = r("fWcoZ"),
        p = r("dwAz0");
    let h;
    const g = (0, s.observer)((e => {
            const {
                editor: t,
                kitDetails: r
            } = i.useContext(p.default);
            return (0, o.jsx)(m, {
                children: t.questions.map((n => (0, o.jsx)("div", {
                    children: (0, o.jsx)(l.default, {
                        question: n,
                        showCheckbox: !0,
                        checked: t.questionsChecked.includes(n._id),
                        handleCheckChange: e => {
                            const r = e.target.checked;
                            r && t.questionsChecked.push(n._id), r || t.questionsChecked.replace(t.questionsChecked.filter((e => e !== n._id)))
                        },
                        canEdit: !0,
                        onEditClicked: e => {
                            e.stopPropagation(), t.currentlyEditingQuestionId = n._id, (0, u.default)(c.addNewQuestion)
                        },
                        onCopyClicked: t => {
                            t.stopPropagation();
                            const o = (0, f.questionToAddedQuestion)(n, r.id);
                            (0, d.default)([{
                                ...o,
                                source: n.source || "editor"
                            }], (() => {
                                e.scrollToTop()
                            }))
                        }
                    }, n._id)
                }, n._id)))
            })
        })),
        m = a.default.div(h || (h = (e => e)`
  padding: ${0}px;
`), 10);
    var v = g
})), r.register("8FJCY", (function(t, n) {
    e(t.exports, "default", (function() {
        return E
    }));
    var o = r("divCp"),
        i = r("hxEiv"),
        a = r("fywoC"),
        s = r("iUwFC"),
        l = r("ibETQ"),
        c = r("90UiM"),
        u = r("83ivs"),
        d = r("jbbXK"),
        f = r("93yIm"),
        p = r("7ECC6"),
        h = r("4I2uy"),
        g = r("fC6cp"),
        m = r("5g49A"),
        v = r("e4KJZ"),
        x = r("2FDaO"),
        y = r("69SUA"),
        b = r("lKmIF"),
        C = r("aAdm0"),
        w = r("1djzF");
    let k;
    const j = (0, x.default)(p.default)(k || (k = (e => e)`
  font-family: ${0};
  color: ${0};
  margin-bottom: 5px !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: max-content;
  cursor: pointer;
`), (e => e.font ? e.font : y.Fonts.SFPro), b.default.Black);
    class S extends a.Component {
        componentDidUpdate(e) {
            e.showAllAnswers !== this.props.showAllAnswers && (this.props.showAllAnswers ? this.setState({
                showingAnswers: !0
            }) : this.setState({
                showingAnswers: !1
            }))
        }
        render() {
            const {
                question: e,
                showCheckbox: t,
                checked: r,
                canEdit: n,
                canAdd: o,
                fontFamily: p
            } = this.props;
            let x = y.Fonts.SFPro;
            p && (x = p);
            const b = e.audio && !e.text && !e.image && !e.latex;
            return (0, i.jsxs)(j, {
                font: x,
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
                            children: [t && (0, i.jsx)(h.default, {
                                style: {
                                    zoom: 1.3,
                                    marginRight: 10,
                                    marginTop: 4
                                },
                                onChange: this.props.handleCheckChange,
                                onClick: e => e.stopPropagation(),
                                checked: r
                            }), (0, i.jsx)(C.default, {
                                text: e.text,
                                image: e.image,
                                latex: e.latex,
                                customImageMargin: 10,
                                customImageSize: 72
                            }), e.audio && (0, i.jsx)(v.default, {
                                title: "Play Audio",
                                children: (0, i.jsx)(f.default, {
                                    style: {
                                        marginLeft: b ? 0 : 10,
                                        marginRight: b ? 10 : 0
                                    },
                                    type: "primary",
                                    shape: "circle",
                                    icon: (0, i.jsx)(l.default, {}),
                                    onClick: this.onAudioPress
                                })
                            }), b && (0, i.jsx)(C.default, {
                                text: "Audio Only Question",
                                customTextColor: "#bdbdbd"
                            }), e.type === s.QuestionType.textInput && (0, i.jsx)(m.default, {
                                color: "magenta",
                                style: {
                                    marginLeft: 10,
                                    fontFamily: x
                                },
                                children: "Text Input"
                            })]
                        }), n && (0, i.jsxs)("div", {
                            className: "flex vc",
                            style: {
                                marginLeft: 10
                            },
                            children: [(0, i.jsx)(v.default, {
                                title: "Copy",
                                placement: "bottom",
                                children: (0, i.jsx)(f.default, {
                                    shape: "circle",
                                    icon: (0, i.jsx)(c.default, {}),
                                    onClick: this.props.onCopyClicked,
                                    size: "small",
                                    style: {
                                        marginRight: 5
                                    }
                                })
                            }), (0, i.jsx)(v.default, {
                                title: "Edit",
                                placement: "bottom",
                                children: (0, i.jsx)(f.default, {
                                    shape: "circle",
                                    icon: (0, i.jsx)(u.default, {}),
                                    size: "small",
                                    onClick: this.props.onEditClicked
                                })
                            })]
                        }), o && (0, i.jsx)(v.default, {
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
                            paddingLeft: t ? 34 : 0
                        },
                        children: e.answers.map(((t, r) => (0, i.jsxs)(a.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: "flex vc",
                                children: [(0, i.jsx)(C.default, {
                                    text: t.text,
                                    image: t.image,
                                    latex: t.latex,
                                    customTextColor: t.correct ? "green" : null,
                                    customFontSize: 18,
                                    customFontWeight: 400,
                                    blockOutsideClicks: !0
                                }), t.image || t.latex ? (0, i.jsx)(m.default, {
                                    color: t.correct ? "green" : "red",
                                    style: {
                                        marginLeft: t.image ? 2 : 12
                                    },
                                    children: t.correct ? "Correct" : "Incorrect"
                                }) : null]
                            }), r + 1 !== e.answers.length && (0, i.jsx)(g.default, {
                                style: {
                                    marginTop: 6,
                                    marginBottom: 6
                                }
                            })]
                        }, t._id)))
                    })]
                }), this.props.customBottomComponent ? this.props.customBottomComponent : null]
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                showingAnswers: this.props.showAllAnswers
            }), (0, o.default)(this, "toggleShowingAnswers", (() => {
                this.props.blockToggleShowAnswers || this.setState({
                    showingAnswers: !this.state.showingAnswers
                })
            })), (0, o.default)(this, "onAudioPress", (e => {
                e.stopPropagation();
                new Audio((0, w.getCloudinaryUrl)(this.props.question.audio)).play()
            }))
        }
    }
    var E = S
})), r.register("ibETQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("jxTA8"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "AudioOutlined";
    var c = i.forwardRef(l)
})), r.register("jxTA8", (function(t, r) {
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
                    d: "M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"
                }
            }]
        },
        name: "audio",
        theme: "outlined"
    }
})), r.register("90UiM", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("7WFzL"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "CopyOutlined";
    var c = i.forwardRef(l)
})), r.register("7WFzL", (function(t, r) {
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
                    d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                }
            }]
        },
        name: "copy",
        theme: "outlined"
    }
})), r.register("83ivs", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("6tWM4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "EditOutlined";
    var c = i.forwardRef(l)
})), r.register("6tWM4", (function(t, r) {
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
                    d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                }
            }]
        },
        name: "edit",
        theme: "outlined"
    }
})), r.register("jbbXK", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("9oKRO"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "PlusCircleOutlined";
    var c = i.forwardRef(l)
})), r.register("9oKRO", (function(t, r) {
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
})), r.register("4I2uy", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("dtIp3"),
        i = r("eFQZy");
    const a = o.default;
    a.Group = i.default, a.__ANT_CHECKBOX = !0;
    var s = a
})), r.register("dtIp3", (function(n, o) {
    e(n.exports, "default", (function() {
        return g
    }), (function(e) {
        return g = e
    }));
    var i = r("fe1on"),
        a = r("5AR3F"),
        s = r("fywoC"),
        l = r("4gMdJ"),
        c = r("jIMUD"),
        u = r("eFQZy"),
        d = r("cmARv"),
        f = r("m9O7S"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const h = (e, r) => {
        var n, {
                prefixCls: o,
                className: h,
                rootClassName: g,
                children: m,
                indeterminate: v = !1,
                style: x,
                onMouseEnter: y,
                onMouseLeave: b,
                skipGroup: C = !1,
                disabled: w
            } = e,
            k = p(e, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]);
        const {
            getPrefixCls: j,
            direction: S
        } = s.useContext(l.ConfigContext), E = s.useContext(u.GroupContext), {
            isFormItemInput: O
        } = s.useContext(c.FormItemInputContext), I = s.useContext(d.default), M = null !== (n = (null == E ? void 0 : E.disabled) || w) && void 0 !== n ? n : I, T = s.useRef(k.value);
        s.useEffect((() => {
            null == E || E.registerValue(k.value)
        }), []), s.useEffect((() => {
            if (!C) return k.value !== T.current && (null == E || E.cancelValue(T.current), null == E || E.registerValue(k.value), T.current = k.value), () => null == E ? void 0 : E.cancelValue(k.value)
        }), [k.value]);
        const N = j("checkbox", o),
            [F, P] = (0, f.default)(N),
            R = Object.assign({}, k);
        E && !C && (R.onChange = function() {
            k.onChange && k.onChange.apply(k, arguments), E.toggleOption && E.toggleOption({
                label: m,
                value: k.value
            })
        }, R.name = E.name, R.checked = E.value.includes(k.value));
        const z = t(i)({
                [`${N}-wrapper`]: !0,
                [`${N}-rtl`]: "rtl" === S,
                [`${N}-wrapper-checked`]: R.checked,
                [`${N}-wrapper-disabled`]: M,
                [`${N}-wrapper-in-form-item`]: O
            }, h, g, P),
            D = t(i)({
                [`${N}-indeterminate`]: v
            }, P),
            A = v ? "mixed" : void 0;
        return F(s.createElement("label", {
            className: z,
            style: x,
            onMouseEnter: y,
            onMouseLeave: b
        }, s.createElement(a.default, Object.assign({
            "aria-checked": A
        }, R, {
            prefixCls: N,
            className: D,
            disabled: M,
            ref: r
        })), void 0 !== m && s.createElement("span", null, m)))
    };
    var g = s.forwardRef(h)
})), r.register("eFQZy", (function(n, o) {
    e(n.exports, "GroupContext", (function() {
        return p
    }), (function(e) {
        return p = e
    })), e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var i = r("5Toxq"),
        a = r("fe1on"),
        s = r("8mdco"),
        l = r("fywoC"),
        c = r("4gMdJ"),
        u = r("dtIp3"),
        d = r("m9O7S"),
        f = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const p = l.createContext(null),
        h = (e, r) => {
            var {
                defaultValue: n,
                children: o,
                options: h = [],
                prefixCls: g,
                className: m,
                rootClassName: v,
                style: x,
                onChange: y
            } = e, b = f(e, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]);
            const {
                getPrefixCls: C,
                direction: w
            } = l.useContext(c.ConfigContext), [k, j] = l.useState(b.value || n || []), [S, E] = l.useState([]);
            l.useEffect((() => {
                "value" in b && j(b.value || [])
            }), [b.value]);
            const O = () => h.map((e => "string" == typeof e || "number" == typeof e ? {
                    label: e,
                    value: e
                } : e)),
                I = C("checkbox", g),
                M = `${I}-group`,
                [T, N] = (0, d.default)(I),
                F = (0, s.default)(b, ["value", "disabled"]);
            h && h.length > 0 && (o = O().map((e => l.createElement(u.default, {
                prefixCls: I,
                key: e.value.toString(),
                disabled: "disabled" in e ? e.disabled : b.disabled,
                value: e.value,
                checked: k.includes(e.value),
                onChange: e.onChange,
                className: `${M}-item`,
                style: e.style
            }, e.label))));
            const P = {
                    toggleOption: e => {
                        const t = k.indexOf(e.value),
                            r = (0, i.default)(k); - 1 === t ? r.push(e.value) : r.splice(t, 1), "value" in b || j(r);
                        const n = O();
                        null == y || y(r.filter((e => S.includes(e))).sort(((e, t) => n.findIndex((t => t.value === e)) - n.findIndex((e => e.value === t)))))
                    },
                    value: k,
                    disabled: b.disabled,
                    name: b.name,
                    registerValue: e => {
                        E((t => [].concat((0, i.default)(t), [e])))
                    },
                    cancelValue: e => {
                        E((t => t.filter((t => t !== e))))
                    }
                },
                R = t(a)(M, {
                    [`${M}-rtl`]: "rtl" === w
                }, m, v, N);
            return T(l.createElement("div", Object.assign({
                className: R,
                style: x
            }, F, {
                ref: r
            }), l.createElement(p.Provider, {
                value: P
            }, o)))
        },
        g = l.forwardRef(h);
    var m = l.memo(g)
})), r.register("m9O7S", (function(t, n) {
    e(t.exports, "getStyle", (function() {
        return u
    })), e(t.exports, "default", (function() {
        return d
    }));
    var o = r("lt5sb"),
        i = r("huF4L"),
        a = r("1QMe3"),
        s = r("kCC5O");
    const l = new(0, o.Keyframes)("antCheckboxEffect", {
            "0%": {
                transform: "scale(1)",
                opacity: .5
            },
            "100%": {
                transform: "scale(1.6)",
                opacity: 0
            }
        }),
        c = e => {
            const {
                checkboxCls: t
            } = e, r = `${t}-wrapper`;
            return [{
                [`${t}-group`]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                    display: "inline-flex"
                }),
                [r]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                    display: "inline-flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    "&:after": {
                        display: "inline-block",
                        width: 0,
                        overflow: "hidden",
                        content: "'\\a0'"
                    },
                    [`& + ${r}`]: {
                        marginInlineStart: e.marginXS
                    },
                    [`&${r}-in-form-item`]: {
                        'input[type="checkbox"]': {
                            width: 14,
                            height: 14
                        }
                    }
                }),
                [t]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                    top: "0.2em",
                    position: "relative",
                    whiteSpace: "nowrap",
                    lineHeight: 1,
                    cursor: "pointer",
                    [`${t}-input`]: {
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                        opacity: 0,
                        [`&:focus-visible + ${t}-inner`]: Object.assign({}, (0, s.genFocusOutline)(e))
                    },
                    [`${t}-inner`]: {
                        boxSizing: "border-box",
                        position: "relative",
                        top: 0,
                        insetInlineStart: 0,
                        display: "block",
                        width: e.checkboxSize,
                        height: e.checkboxSize,
                        direction: "ltr",
                        backgroundColor: e.colorBgContainer,
                        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                        borderRadius: e.borderRadiusSM,
                        borderCollapse: "separate",
                        transition: `all ${e.motionDurationSlow}`,
                        "&:after": {
                            boxSizing: "border-box",
                            position: "absolute",
                            top: "50%",
                            insetInlineStart: "21.5%",
                            display: "table",
                            width: e.checkboxSize / 14 * 5,
                            height: e.checkboxSize / 14 * 8,
                            border: `${e.lineWidthBold}px solid ${e.colorWhite}`,
                            borderTop: 0,
                            borderInlineStart: 0,
                            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
                            opacity: 0,
                            content: '""',
                            transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
                        }
                    },
                    "& + span": {
                        paddingInlineStart: e.paddingXS,
                        paddingInlineEnd: e.paddingXS
                    }
                })
            }, {
                [t]: {
                    "&-indeterminate": {
                        [`${t}-inner`]: {
                            "&:after": {
                                top: "50%",
                                insetInlineStart: "50%",
                                width: e.fontSizeLG / 2,
                                height: e.fontSizeLG / 2,
                                backgroundColor: e.colorPrimary,
                                border: 0,
                                transform: "translate(-50%, -50%) scale(1)",
                                opacity: 1,
                                content: '""'
                            }
                        }
                    }
                }
            }, {
                [`${r}:hover ${t}:after`]: {
                    visibility: "visible"
                },
                [`\n        ${r}:not(${r}-disabled),\n        ${t}:not(${t}-disabled)\n      `]: {
                    [`&:hover ${t}-inner`]: {
                        borderColor: e.colorPrimary
                    }
                },
                [`${r}:not(${r}-disabled)`]: {
                    [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
                        backgroundColor: e.colorPrimaryHover,
                        borderColor: "transparent"
                    },
                    [`&:hover ${t}-checked:not(${t}-disabled):after`]: {
                        borderColor: e.colorPrimaryHover
                    }
                }
            }, {
                [`${t}-checked`]: {
                    [`${t}-inner`]: {
                        backgroundColor: e.colorPrimary,
                        borderColor: e.colorPrimary,
                        "&:after": {
                            opacity: 1,
                            transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
                            transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
                        }
                    },
                    "&:after": {
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: e.borderRadiusSM,
                        visibility: "hidden",
                        border: `${e.lineWidthBold}px solid ${e.colorPrimary}`,
                        animationName: l,
                        animationDuration: e.motionDurationSlow,
                        animationTimingFunction: "ease-in-out",
                        animationFillMode: "backwards",
                        content: '""',
                        transition: `all ${e.motionDurationSlow}`
                    }
                },
                [`\n        ${r}-checked:not(${r}-disabled),\n        ${t}-checked:not(${t}-disabled)\n      `]: {
                    [`&:hover ${t}-inner`]: {
                        backgroundColor: e.colorPrimaryHover,
                        borderColor: "transparent"
                    },
                    [`&:hover ${t}:after`]: {
                        borderColor: e.colorPrimaryHover
                    }
                }
            }, {
                [`${r}-disabled`]: {
                    cursor: "not-allowed"
                },
                [`${t}-disabled`]: {
                    [`&, ${t}-input`]: {
                        cursor: "not-allowed",
                        pointerEvents: "none"
                    },
                    [`${t}-inner`]: {
                        background: e.colorBgContainerDisabled,
                        borderColor: e.colorBorder,
                        "&:after": {
                            borderColor: e.colorTextDisabled
                        }
                    },
                    "&:after": {
                        display: "none"
                    },
                    "& + span": {
                        color: e.colorTextDisabled
                    },
                    [`&${t}-indeterminate ${t}-inner::after`]: {
                        background: e.colorTextDisabled
                    }
                }
            }]
        };

    function u(e, t) {
        const r = (0, a.merge)(t, {
            checkboxCls: `.${e}`,
            checkboxSize: t.controlInteractiveSize
        });
        return [c(r)]
    }
    var d = (0, i.default)("Checkbox", ((e, t) => {
        let {
            prefixCls: r
        } = t;
        return [u(r, e)]
    }))
})), r.register("5g49A", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var i = r("legzE"),
        a = r("fe1on"),
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
    const h = (e, r) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: d,
                style: h,
                children: g,
                icon: m,
                color: v,
                onClose: x,
                closeIcon: y,
                closable: b = !1
            } = e, C = p(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
            const {
                getPrefixCls: w,
                direction: k
            } = s.useContext(l.ConfigContext), [j, S] = s.useState(!0);
            s.useEffect((() => {
                "visible" in C && S(C.visible)
            }), [C.visible]);
            const E = (0, c.isPresetColor)(v) || (0, c.isPresetStatusColor)(v),
                O = Object.assign({
                    backgroundColor: v && !E ? v : void 0
                }, h),
                I = w("tag", n),
                [M, T] = (0, f.default)(I),
                N = t(a)(I, {
                    [`${I}-${v}`]: E,
                    [`${I}-has-color`]: v && !E,
                    [`${I}-hidden`]: !j,
                    [`${I}-rtl`]: "rtl" === k
                }, o, d, T),
                F = e => {
                    e.stopPropagation(), null == x || x(e), e.defaultPrevented || S(!1)
                },
                P = "function" == typeof C.onClick || g && "a" === g.type,
                R = m || null,
                z = R ? s.createElement(s.Fragment, null, R, s.createElement("span", null, g)) : g,
                D = s.createElement("span", Object.assign({}, C, {
                    ref: r,
                    className: N,
                    style: O
                }), z, b ? y ? s.createElement("span", {
                    className: `${I}-close-icon`,
                    onClick: F
                }, y) : s.createElement(i.default, {
                    className: `${I}-close-icon`,
                    onClick: F
                }) : null);
            return M(P ? s.createElement(u.default, null, D) : D)
        },
        g = s.forwardRef(h);
    g.CheckableTag = d.default;
    var m = g
})), r.register("8elTB", (function(n, o) {
    e(n.exports, "default", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var i = r("fe1on"),
        a = r("fywoC"),
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
        } = a.useContext(s.ConfigContext), h = p("tag", r), [g, m] = (0, l.default)(h), v = t(i)(h, {
            [`${h}-checkable`]: !0,
            [`${h}-checkable-checked`]: o
        }, n, m);
        return g(a.createElement("span", Object.assign({}, f, {
            className: v,
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
        i = r("1QMe3"),
        a = r("3pCmM"),
        s = r("10VQw"),
        l = r("kCC5O");
    const c = (e, t, r) => {
            const n = (0, a.default)(r);
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
                lightColor: i,
                darkColor: a
            } = r;
            return {
                [`${e.componentCls}-${t}`]: {
                    color: n,
                    background: i,
                    borderColor: o,
                    "&-inverse": {
                        color: e.colorTextLightSolid,
                        background: a,
                        borderColor: a
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
            } = e, i = n - r, a = t - r;
            return {
                [o]: Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
                    display: "inline-block",
                    height: "auto",
                    marginInlineEnd: e.marginXS,
                    paddingInline: i,
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
                        marginInlineStart: a,
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
                        marginInlineStart: i
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
        } = e, a = Math.round(t * r), s = e.fontSizeSM, l = a - 2 * n, f = e.colorFillAlter, p = e.colorText, h = (0, i.merge)(e, {
            tagFontSize: s,
            tagLineHeight: l,
            tagDefaultBg: f,
            tagDefaultColor: p,
            tagIconSize: o - 2 * n,
            tagPaddingHorizontal: 8
        });
        return [d(h), u(h), c(h, "success", "Success"), c(h, "processing", "Info"), c(h, "error", "Error"), c(h, "warning", "Warning")]
    }))
})), r.register("3pCmM", (function(t, r) {
    function n(e) {
        if ("string" != typeof e) return e;
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("aAdm0", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        a = r("lKmIF"),
        s = r("fK8ya"),
        l = r("fgoFz");
    let c, u, d, f = e => e;
    const p = i.default.div(c || (c = f`
  display: flex;
  align-items: center;
`)),
        h = i.default.div(u || (u = f`
  color: ${0};
  font-size: ${0}px;
  font-weight: ${0};
`), (e => e.customTextColor ? e.customTextColor : a.default.Black), (e => e.customFontSize ? e.customFontSize : 26), (e => e.customFontWeight ? e.customFontWeight : 600)),
        g = i.default.div(d || (d = f``));
    var m = e => {
        var t;
        return (0, o.jsxs)(p, {
            onClick: t => e.blockOutsideClicks ? t.stopPropagation() : null,
            children: [e.image && (0, o.jsx)(s.default, {
                image: e.image,
                size: e.customImageSize || 45,
                customRightMargin: e.customImageMargin || 5,
                showBorder: !0
            }), e.latex ? (0, o.jsx)(g, {
                style: (null === (t = e.text) || void 0 === t ? void 0 : t.length) ? {
                    color: a.default.Black,
                    padding: 20,
                    border: `1px solid ${a.default.Black}`,
                    borderRadius: 5,
                    marginRight: 10,
                    fontSize: e.customFontSize || 26
                } : {
                    color: a.default.Black,
                    fontSize: e.customFontSize || 26
                },
                children: (0, o.jsx)(l.default, {
                    latex: e.latex
                })
            }) : null, (0, o.jsx)(h, {
                ...e,
                children: e.text
            })]
        })
    }
})), r.register("fgoFz", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv"),
        i = r("fywoC");
    const a = i.lazy((() => r("h3n1W")));
    var s = e => (0, o.jsx)(i.Suspense, {
        fallback: e.fallback || null,
        children: (0, o.jsx)(a, {
            latex: e.latex
        })
    })
})), r.register("h3n1W", (function(e, t) {
    e.exports = Promise.all([import("./" + r("ihc6Q").resolve("8pe9D")), import("./" + r("ihc6Q").resolve("5OCdz"))]).then((() => r("9YSp3")))
})), r.register("6V5qK", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("iMOcM"),
        i = r("5O6vk"),
        a = r("4MuSt"),
        s = r("ih5vo"),
        l = r("cDyBs"),
        c = r("ebw20"),
        u = r("kt4bI"),
        d = r("lz1ZO");
    var f = (e, t, r) => {
        const n = i.default.editor.questions.length,
            f = c.QUESTION_LIMIT - n,
            p = e.filter(((e, t) => t < f));
        i.default.editor.error = (0, l.defaultError)(), (0, o.request)({
            url: "/api/v1/editor/questions/add",
            method: "post",
            data: {
                questions: p
            },
            success: e => {
                (0, u.default)();
                let t = (0, a.toJS)(i.default.editor.questions);
                e.filter((e => !e.replaced)).forEach((e => t[r && r.pushToBottom ? "push" : "unshift"](e.question)));
                e.filter((e => null !== e.replaced)).forEach((e => {
                    t = t.map((t => t._id !== e.replaced ? t : e.question))
                })), i.default.editor.questions.replace(t), r && r.stay || (0, d.default)(s.editorBase)
            },
            error: e => {
                e && e.message && e.message.text && (i.default.editor.error.message = e.message.text)
            },
            both: () => {
                t && t()
            }
        })
    }
})), r.register("kt4bI", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("5O6vk"),
        i = r("iMOcM");
    var a = () => {
        o.default.editor.editSessionCounted || (0, i.request)({
            url: "/api/v1/editor/edit-session",
            method: "post",
            data: {
                kitId: o.default.kitDetails.id
            },
            success: () => o.default.editor.editSessionCounted = !0,
            error: () => !1
        })
    }
})), r.register("fWcoZ", (function(t, n) {
    e(t.exports, "questionToAddedQuestion", (function() {
        return w
    })), e(t.exports, "default", (function() {
        return S
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("hjoUW"),
        c = r("93yIm"),
        u = r("9xElQ"),
        d = r("hdT9U"),
        f = r("57c8e"),
        p = r("lKmIF"),
        h = r("8FJCY"),
        g = r("2cVVi"),
        m = r("6V5qK"),
        v = r("lpEVe"),
        x = r("ebw20");
    const {
        TabPane: y
    } = d.default;
    let b;
    var C;
    (C = b || (b = {})).search = "search", C.myKits = "myKits";
    const w = (e, t) => ({
            questionText: e.text,
            image: e.image,
            audio: e.audio,
            latex: e.latex,
            type: e.type,
            source: "import",
            answers: e.answers.map((e => ({
                correct: e.correct,
                text: e.text,
                image: e.image,
                latex: e.latex,
                textType: e.textType
            }))),
            kitId: t
        }),
        k = {
            selectedTab: b.search,
            addedQuestionIds: []
        };
    let j = class extends s.Component {
        render() {
            const {
                visible: e,
                close: t
            } = this.props;
            return (0, a.jsxs)(u.default, {
                destroyOnClose: !0,
                open: e,
                width: "100%",
                placement: "bottom",
                height: "80vh",
                bodyStyle: {
                    overflow: "hidden"
                },
                onClose: t,
                closable: !0,
                children: [(0, a.jsxs)(d.default, {
                    onChange: this.handleTabChange,
                    type: "card",
                    activeKey: this.state.selectedTab,
                    children: [(0, a.jsx)(y, {
                        tab: "Search"
                    }, b.search), (0, a.jsx)(y, {
                        tab: "My Kits"
                    }, b.myKits)]
                }), this.getSearch()]
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", k), (0, o.default)(this, "handleTabChange", (e => {
                this.setState({
                    selectedTab: e
                })
            })), (0, o.default)(this, "addQuestion", (e => {
                this.setState({
                    addedQuestionIds: [...this.state.addedQuestionIds, e._id]
                }), (0, m.default)([w(e, this.props.kitDetails.id)], (() => !1), {
                    stay: !0
                })
            })), (0, o.default)(this, "renderQuestions", (e => {
                const t = e.filter((e => !this.state.addedQuestionIds.includes(e._id)));
                if (!t.length) return null;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: "maxWidth flex",
                        style: {
                            justifyContent: "space-between",
                            marginBottom: 10
                        },
                        children: [(0, a.jsx)("div", {}), (0, a.jsx)(c.default, {
                            onClick: () => {
                                (0, m.default)(t.map((e => w(e, this.props.kitDetails.id))))
                            },
                            type: "primary",
                            icon: (0, a.jsx)(l.default, {}),
                            children: "Add All Questions"
                        })]
                    }), (0, a.jsx)(g.default, {
                        children: t.map((e => (0, a.jsx)("div", {
                            children: (0, a.jsx)(h.default, {
                                question: e,
                                showAllAnswers: !0,
                                canAdd: !0,
                                onAddClicked: t => {
                                    t.stopPropagation(), this.addQuestion(e)
                                }
                            })
                        }, e._id)))
                    })]
                })
            })), (0, o.default)(this, "getSearch", (() => (0, a.jsx)(f.default, {
                questionRenderer: this.renderQuestions,
                showMyKits: this.state.selectedTab === b.myKits,
                questionFetchLimit: x.QUESTION_LIMIT,
                customHeight: "calc(80vh - 104px)",
                customLeftSidePadding: "0px 15px 0px 0px",
                customBackgroundColor: p.default.White,
                searchQuery: this.props.kitDetails.title || void 0,
                blockKitRedirect: !0,
                isFromQuestionBank: !0,
                blockChangingUrl: !0
            })))
        }
    };
    j = (0, i.__decorate)([(0, v.inject)("kitDetails"), v.observer], j);
    var S = j
})), r.register("57c8e", (function(n, o) {
    e(n.exports, "default", (function() {
        return k
    }));
    var i = r("divCp"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("c6Gty"),
        c = r("iMOcM"),
        u = r("6KLxl"),
        d = r("grHGb"),
        f = r("8FJCY"),
        p = r("sgWtV"),
        h = r("1HsHH"),
        g = r("cmvpZ"),
        m = r("69SUA"),
        v = r("beXRF"),
        x = r("7c9vD"),
        y = r("lmFTK"),
        b = r("2nCEo");
    const C = "GIMKIT_SEARCH_CACHE";
    class w extends s.Component {
        componentDidMount() {
            this.state.searchQuery && this.onSearch(!0)
        }
        componentDidUpdate(e, t) {
            this.state.language === t.language && this.state.subject === t.subject && this.state.sort === t.sort && this.props.showMyKits === e.showMyKits || this.onSearch(!0)
        }
        render() {
            return (0, a.jsxs)(a.Fragment, {
                children: [this.props.overrideTitle && (0, a.jsx)(c.Title, {
                    title: `Kits about "${this.props.searchQuery}"`
                }), (0, a.jsxs)(l.Container, {
                    customBackgroundColor: this.props.customBackgroundColor,
                    customHeight: this.props.customHeight,
                    children: [(0, a.jsx)(d.LeftSide, {
                        customPadding: this.props.customLeftSidePadding,
                        children: (0, a.jsxs)("div", {
                            children: [!this.props.showMyKits && (0, a.jsx)("div", {
                                style: {
                                    position: "sticky",
                                    top: 0,
                                    zIndex: 999
                                },
                                className: "maxWidth",
                                children: (0, a.jsx)(y.default, {
                                    onSearch: this.onSearch,
                                    searchQuery: this.state.draftSearchQuery,
                                    onUpdateSearchQuery: this.onUpdateSearchQuery,
                                    language: this.state.language,
                                    onLanguageSelected: this.onLanguageSelected,
                                    subject: this.state.subject,
                                    onSubjectSelected: this.onSubjectSelected,
                                    sort: this.state.sort,
                                    onSortSelected: this.onSortSelected,
                                    loading: this.state.loading,
                                    showFilters: this.state.showFilters
                                })
                            }), this.getLeftSide()]
                        })
                    }), (0, a.jsx)(d.RightSide, {
                        children: this.getRightSide()
                    })]
                })]
            })
        }
        constructor(e) {
            super(e), (0, i.default)(this, "state", {
                loading: !1,
                currentKit: "",
                questions: [],
                page: 0,
                hasMore: !0,
                error: !1,
                results: [],
                searchQuery: this.props.searchQuery,
                draftSearchQuery: this.props.searchQuery,
                language: void 0,
                subject: void 0,
                sort: y.SortOptions.relevant,
                showFilters: !1,
                firstSearch: !0,
                fetchingResults: !1
            }), (0, i.default)(this, "fetchSearchResults", (() => {
                const e = this.state.searchQuery;
                if (e && this.state.hasMore && !this.state.fetchingResults) {
                    this.setState({
                        fetchingResults: !0,
                        error: !1
                    });
                    const t = {
                        query: e,
                        page: this.state.page,
                        sort: this.state.sort
                    };
                    this.state.language && (t.language = (0, x.getLanguageKey)(this.state.language)), this.state.subject && (t.subject = this.state.subject), (0, c.request)({
                        url: "/api/games/search",
                        data: t,
                        cacheKey: C,
                        success: e => {
                            this.setState({
                                results: [...this.state.results, ...e.results],
                                hasMore: e.hasMore,
                                page: e.page
                            })
                        },
                        error: () => {
                            this.setState({
                                error: !0
                            }), (0, p.throwError)({
                                title: "Error searching",
                                content: "Please try again"
                            })
                        },
                        both: () => {
                            if (!this.props.blockChangingUrl) {
                                const t = new URL(window.location.href);
                                t.searchParams.set("q", e), window.history.pushState({}, "", t)
                            }
                            this.setState({
                                showFilters: !0,
                                loading: !1,
                                firstSearch: !1,
                                fetchingResults: !1
                            })
                        }
                    })
                } else this.setState({
                    loading: !1
                })
            })), (0, i.default)(this, "fetchMyKits", (() => {
                this.setState({
                    fetchingResults: !0
                }), (0, c.request)({
                    cacheKey: C,
                    url: "/api/games/summary/me",
                    method: "GET",
                    success: e => {
                        this.setState({
                            results: e.games.map((e => ({
                                _id: e._id,
                                title: e.title,
                                gif: e.gif,
                                questions: 0,
                                creator: "",
                                dateCreated: t(b)(e.createdAt).toISOString()
                            })))
                        })
                    },
                    error: () => (0, p.throwError)({
                        title: "Error fetching Kits"
                    }),
                    both: () => this.setState({
                        hasMore: !1,
                        loading: !1,
                        fetchingResults: !1
                    })
                })
            })), (0, i.default)(this, "fetchQuestions", (e => {
                (0, c.request)({
                    url: `/api/games/questions/search/${e}?limit=${this.props.questionFetchLimit||30}`,
                    cacheKey: C,
                    method: "get",
                    success: t => {
                        const r = t.reverse();
                        this.setState({
                            questions: r,
                            currentKit: e
                        })
                    },
                    error: () => !1
                })
            })), (0, i.default)(this, "onSearch", (e => {
                this.state.fetchingResults || this.setState({
                    searchQuery: this.state.draftSearchQuery,
                    loading: e,
                    currentKit: "",
                    results: [],
                    questions: [],
                    page: 0,
                    hasMore: !0,
                    firstSearch: !0
                }, this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults)
            })), (0, i.default)(this, "debouncedHover", (0, g.debounce)((e => {
                document.getElementById("right-side-search").scrollTo(0, 0), this.fetchQuestions(e._id)
            }), 50)), (0, i.default)(this, "onUpdateSearchQuery", (e => {
                this.setState({
                    draftSearchQuery: e
                })
            })), (0, i.default)(this, "onLanguageSelected", (e => {
                this.setState({
                    language: e
                })
            })), (0, i.default)(this, "onSubjectSelected", (e => {
                this.setState({
                    subject: e
                })
            })), (0, i.default)(this, "onSortSelected", (e => {
                this.setState({
                    sort: e
                })
            })), (0, i.default)(this, "getLeftSide", (() => this.state.results.length || this.state.loading || this.state.firstSearch ? (0, a.jsx)(h.default, {
                dataLength: this.state.results.length,
                hasMore: this.state.hasMore,
                style: {
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    paddingTop: 18,
                    overflow: "visible"
                },
                scrollableTarget: "left-side-search",
                next: this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults,
                loader: null,
                children: this.state.results.map(((e, t) => (0, a.jsx)(s.Fragment, {
                    children: (0, a.jsx)(u.default, {
                        id: e._id,
                        title: e.title,
                        gif: e.gif,
                        handleHover: () => this.debouncedHover(e),
                        numberOfQuestions: e.questions,
                        blockRedirect: this.props.blockKitRedirect,
                        creator: e.creator,
                        dateCreated: e.dateCreated,
                        redirectOnImageClick: !0,
                        size: "normal",
                        selected: this.state.currentKit === e._id,
                        blockHoverable: !0
                    }, e._id)
                }, `read-item-${e._id}`)))
            }) : !this.state.results.length && (0, a.jsx)("div", {
                className: "maxWidth flex hc vc flex-column",
                children: (0, a.jsxs)("div", {
                    style: {
                        padding: "0 38px",
                        marginTop: 42,
                        textAlign: "center"
                    },
                    children: [(0, a.jsx)("img", {
                        src: "/client/img/icons/sad.svg"
                    }), (0, a.jsxs)("div", {
                        style: {
                            marginTop: 18,
                            fontFamily: m.Fonts.SFPro,
                            fontSize: 20
                        },
                        children: [(0, a.jsx)("div", {
                            children: "We couldn't find any results."
                        }), !this.props.isFromQuestionBank && (0, a.jsxs)("div", {
                            style: {
                                marginTop: 24
                            },
                            children: ["Try another search or maybe", " ", (0, a.jsx)(v.Link, {
                                to: "/create",
                                children: "make your own kit!"
                            })]
                        })]
                    })]
                })
            }))), (0, i.default)(this, "getRightSide", (() => this.props.questionRenderer ? this.props.questionRenderer(this.state.questions) : this.state.questions.map((e => (0, a.jsx)(f.default, {
                question: e,
                showAllAnswers: !0
            }, e._id)))))
        }
    }
    var k = w
})), r.register("6KLxl", (function(n, o) {
    e(n.exports, "default", (function() {
        return B
    }));
    var i = r("hxEiv");
    r("fywoC");
    var a = r("7ECC6"),
        s = r("fC6cp"),
        l = r("69SUA"),
        c = r("fK8ya"),
        u = r("2FDaO"),
        d = r("iMOcM"),
        f = r("lKmIF"),
        p = r("kyvf1"),
        h = r("iROck"),
        g = r("2nCEo");
    let m, v, x, y, b, C, w, k, j, S, E, O = e => e;
    const I = (0, u.default)(p.default).attrs({
            className: "maxWidth"
        })(m || (m = O`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
`)),
        M = (0, u.default)(a.default)(v || (v = O`
  background-color: ${0};
  border-radius: 7px;
  border: 2px solid ${0};
  font-family: ${0};
`), f.default.White, f.default.BorderGray, l.Fonts.SFPro),
        T = u.default.div.attrs({
            className: "flex-column"
        })(x || (x = O`
  padding: 20px;
  width: calc(100% - ${0}px);
`), 178),
        N = u.default.div(y || (y = O`
  margin-left: 7px;
  flex: 1;
  overflow: hidden;
`)),
        F = u.default.div(b || (b = O`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: ${0};
`), l.FontWeights.Bold),
        P = u.default.div(C || (C = O`
  overflow: visible;
  letter-spacing: 0px;
  line-height: 1.2;
`)),
        R = u.default.div(w || (w = O`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;
`)),
        z = u.default.div(k || (k = O`
  font-size: 13px;
  opacity: 0.8;
  font-family: ${0};
`), l.Fonts.SFPro),
        D = u.default.i(j || (j = O`
  width: 17px;
  margin-right: 10px;
  font-size: 17px;
`)),
        A = (0, u.default)(D).attrs({
            className: "fad fa-list"
        })(S || (S = O``)),
        $ = (0, u.default)(D).attrs({
            className: "fad fa-calendar-alt"
        })(E || (E = O``));
    var B = e => {
        const r = "normal" === e.size;
        return (0, i.jsx)(I, {
            to: e.blockRedirect ? void 0 : `/view/${e.id}`,
            children: (0, i.jsx)(M, {
                className: "maxWidth",
                onMouseEnter: e.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !e.blockHoverable,
                style: {
                    backgroundColor: e.selected ? "#eeeeee" : f.default.White
                },
                children: (0, i.jsxs)("div", {
                    className: "flex maxWidth",
                    children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)(c.default, {
                            image: e.gif,
                            size: r ? 178 : 148,
                            onClick: e.redirectOnImageClick && (() => e.blockRedirect ? null : (0, h.NavigateTo)(`/view/${e.id}`))
                        })
                    }), (0, i.jsx)(T, {
                        children: (0, i.jsxs)(N, {
                            children: [(0, i.jsx)(F, {
                                style: {
                                    fontSize: r ? 32 : 23
                                },
                                children: e.title
                            }), e.creator && (0, i.jsx)(P, {
                                style: {
                                    fontSize: r ? 18 : 16
                                },
                                children: (0, d.capitalizeFirstLetter)(e.creator)
                            }), (0, i.jsx)(s.default, {
                                style: {
                                    margin: "16px 0px 18px 0px"
                                }
                            }), !!e.numberOfQuestions && (0, i.jsxs)(R, {
                                children: [(0, i.jsx)(A, {}), (0, i.jsxs)("span", {
                                    children: [e.numberOfQuestions ? e.numberOfQuestions : "", " ", e.numberOfQuestions ? (0, d.plural)("question", e.numberOfQuestions) : ""]
                                })]
                            }), e.dateCreated && r && (0, i.jsxs)(z, {
                                children: [(0, i.jsx)($, {}), (0, i.jsxs)("span", {
                                    children: ["Created ", t(g)(e.dateCreated).fromNow()]
                                })]
                            })]
                        })
                    })]
                })
            })
        })
    }
})), r.register("grHGb", (function(t, n) {
    e(t.exports, "LeftSide", (function() {
        return d
    })), e(t.exports, "RightSide", (function() {
        return f
    }));
    var o = r("2FDaO"),
        i = r("lKmIF"),
        a = r("69SUA");
    let s, l, c, u = e => e;
    const d = o.default.div.attrs({
            id: "left-side-search",
            className: "scroll-y"
        })(s || (s = u`
  width: 647px;
  background: ${0};
  border-right: 1px solid ${0};
  box-sizing: border-box;
  padding: ${0};
  padding-top: 0px;
`), i.default.White, i.default.BorderGray, (e => e.customPadding ? e.customPadding : "15px")),
        f = o.default.div.attrs({
            id: "right-side-search",
            className: "scroll-y"
        })(l || (l = u`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`));
    o.default.div(c || (c = u`
  font-size: 20px;
  font-weight: ${0};
  margin-bottom: 2px;
`), a.FontWeights.Bold)
})), r.register("1HsHH", (function(n, o) {
    e(n.exports, "default", (function() {
        return p
    }));
    var i = r("fywoC"),
        a = function(e, t) {
            return a = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            }, a(e, t)
        };
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var s = function() {
        return s = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }, s.apply(this, arguments)
    };
    var l = "Pixel",
        c = "Percent",
        u = {
            unit: c,
            value: .8
        };

    function d(e) {
        return "number" == typeof e ? {
            unit: c,
            value: 100 * e
        } : "string" == typeof e ? e.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: l,
            value: parseFloat(e)
        } : e.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: c,
            value: parseFloat(e)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), u) : (console.warn("scrollThreshold should be string or number"), u)
    }
    var f = function(e) {
            function r(t) {
                var r = e.call(this, t) || this;
                return r.lastScrollTop = 0, r.actionTriggered = !1, r.startY = 0, r.currentY = 0, r.dragging = !1, r.maxPullDownDistance = 0, r.getScrollableTarget = function() {
                    return r.props.scrollableTarget instanceof HTMLElement ? r.props.scrollableTarget : "string" == typeof r.props.scrollableTarget ? document.getElementById(r.props.scrollableTarget) : (null === r.props.scrollableTarget && console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "), null)
                }, r.onStart = function(e) {
                    r.lastScrollTop || (r.dragging = !0, e instanceof MouseEvent ? r.startY = e.pageY : e instanceof TouchEvent && (r.startY = e.touches[0].pageY), r.currentY = r.startY, r._infScroll && (r._infScroll.style.willChange = "transform", r._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)"))
                }, r.onMove = function(e) {
                    r.dragging && (e instanceof MouseEvent ? r.currentY = e.pageY : e instanceof TouchEvent && (r.currentY = e.touches[0].pageY), r.currentY < r.startY || (r.currentY - r.startY >= Number(r.props.pullDownToRefreshThreshold) && r.setState({
                        pullToRefreshThresholdBreached: !0
                    }), r.currentY - r.startY > 1.5 * r.maxPullDownDistance || r._infScroll && (r._infScroll.style.overflow = "visible", r._infScroll.style.transform = "translate3d(0px, " + (r.currentY - r.startY) + "px, 0px)")))
                }, r.onEnd = function() {
                    r.startY = 0, r.currentY = 0, r.dragging = !1, r.state.pullToRefreshThresholdBreached && (r.props.refreshFunction && r.props.refreshFunction(), r.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame((function() {
                        r._infScroll && (r._infScroll.style.overflow = "auto", r._infScroll.style.transform = "none", r._infScroll.style.willChange = "none")
                    }))
                }, r.onScrollListener = function(e) {
                    "function" == typeof r.props.onScroll && setTimeout((function() {
                        return r.props.onScroll && r.props.onScroll(e)
                    }), 0);
                    var t = r.props.height || r._scrollableNode ? e.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    r.actionTriggered || ((r.props.inverse ? r.isElementAtTop(t, r.props.scrollThreshold) : r.isElementAtBottom(t, r.props.scrollThreshold)) && r.props.hasMore && (r.actionTriggered = !0, r.setState({
                        showLoader: !0
                    }), r.props.next && r.props.next()), r.lastScrollTop = t.scrollTop)
                }, r.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, r.throttledOnScrollListener = function(e, t, r, n) {
                    var o, i = !1,
                        a = 0;

                    function s() {
                        o && clearTimeout(o)
                    }

                    function l() {
                        var l = this,
                            c = Date.now() - a,
                            u = arguments;

                        function d() {
                            a = Date.now(), r.apply(l, u)
                        }

                        function f() {
                            o = void 0
                        }
                        i || (n && !o && d(), s(), void 0 === n && c > e ? d() : !0 !== t && (o = setTimeout(n ? f : d, void 0 === n ? e - c : e)))
                    }
                    return "boolean" != typeof t && (n = r, r = t, t = void 0), l.cancel = function() {
                        s(), i = !0
                    }, l
                }(150, r.onScrollListener).bind(r), r.onStart = r.onStart.bind(r), r.onMove = r.onMove.bind(r), r.onEnd = r.onEnd.bind(r), r
            }
            return function(e, t) {
                function r() {
                    this.constructor = e
                }
                a(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }(r, e), r.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength) throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener("scroll", this.throttledOnScrollListener), "number" == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener("touchstart", this.onStart), this.el.addEventListener("touchmove", this.onMove), this.el.addEventListener("touchend", this.onEnd), this.el.addEventListener("mousedown", this.onStart), this.el.addEventListener("mousemove", this.onMove), this.el.addEventListener("mouseup", this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), "function" != typeof this.props.refreshFunction)) throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')
            }, r.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener("scroll", this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener("touchstart", this.onStart), this.el.removeEventListener("touchmove", this.onMove), this.el.removeEventListener("touchend", this.onEnd), this.el.removeEventListener("mousedown", this.onStart), this.el.removeEventListener("mousemove", this.onMove), this.el.removeEventListener("mouseup", this.onEnd)))
            }, r.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                this.props.dataLength !== e.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }))
            }, r.prototype.isElementAtTop = function(e, t) {
                void 0 === t && (t = .8);
                var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                    n = d(t);
                return n.unit === l ? e.scrollTop <= n.value + r - e.scrollHeight + 1 || 0 === e.scrollTop : e.scrollTop <= n.value / 100 + r - e.scrollHeight + 1 || 0 === e.scrollTop
            }, r.prototype.isElementAtBottom = function(e, t) {
                void 0 === t && (t = .8);
                var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                    n = d(t);
                return n.unit === l ? e.scrollTop + r >= e.scrollHeight - n.value : e.scrollTop + r >= n.value / 100 * e.scrollHeight
            }, r.prototype.render = function() {
                var e = this,
                    r = s({
                        height: this.props.height || "auto",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch"
                    }, this.props.style),
                    n = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    o = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: "auto"
                    } : {};
                return t(i).createElement("div", {
                    style: o,
                    className: "infinite-scroll-component__outerdiv"
                }, t(i).createElement("div", {
                    className: "infinite-scroll-component " + (this.props.className || ""),
                    ref: function(t) {
                        return e._infScroll = t
                    },
                    style: r
                }, this.props.pullDownToRefresh && t(i).createElement("div", {
                    style: {
                        position: "relative"
                    },
                    ref: function(t) {
                        return e._pullDown = t
                    }
                }, t(i).createElement("div", {
                    style: {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !n && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage))
            }, r
        }(i.Component),
        p = f
})), r.register("lmFTK", (function(t, n) {
    e(t.exports, "SortOptions", (function() {
        return b
    })), e(t.exports, "default", (function() {
        return w
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        a = r("93yIm"),
        s = r("b9Zw0"),
        l = r("la5Qa"),
        c = r("lqzWa"),
        u = r("44D8I"),
        d = r("7c9vD"),
        f = r("69SUA"),
        p = r("fetBE"),
        h = r("jIPHX");
    let g, m, v = e => e;
    const x = i.default.div(g || (g = v`
  width: 71px;
  height: 17px;
  line-height: 1.2;
  font-weight: ${0};
  font-family: ${0};
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 4px;
`), f.FontWeights.Bold, f.Fonts.SFPro),
        y = (0, i.default)(l.default).attrs({
            placement: "bottomLeft",
            trigger: "click",
            overlayStyle: {
                width: 220
            }
        })(m || (m = v``));
    let b;
    var C;
    (C = b || (b = {})).relevant = "relevant", C.recent = "recent";
    var w = e => (0, o.jsxs)("div", {
        className: "maxWidth",
        style: {
            borderBottom: e.showFilters ? "1px solid #e8e8e8" : "",
            background: "white",
            paddingTop: 16,
            paddingBottom: 18
        },
        children: [(0, o.jsx)(s.default.Search, {
            placeholder: "Search for kits...",
            onSearch: e.onSearch,
            size: "large",
            enterButton: !0,
            autoFocus: !0,
            style: {
                flex: 1
            },
            loading: e.loading,
            value: e.searchQuery,
            onChange: t => e.onUpdateSearchQuery(t.target.value)
        }), (0, o.jsxs)("div", {
            style: {
                marginTop: 13,
                visibility: e.showFilters ? "visible" : "hidden"
            },
            children: [(0, o.jsx)(y, {
                content: (0, o.jsxs)("div", {
                    className: "maxWidth",
                    children: [(0, o.jsx)(x, {
                        children: "Language:"
                    }), (0, o.jsx)(c.default, {
                        showSearch: !0,
                        allowClear: !0,
                        placeholder: "All Languages",
                        className: "maxWidth",
                        value: e.language,
                        onChange: t => e.onLanguageSelected(t),
                        children: [...(0, d.getListOfLanguages)()].map((e => (0, o.jsx)(c.default.Option, {
                            value: e,
                            children: e
                        }, e)))
                    }), (0, o.jsx)(x, {
                        style: {
                            marginTop: 12
                        },
                        children: "Subject:"
                    }), (0, o.jsx)(c.default, {
                        showSearch: !0,
                        allowClear: !0,
                        placeholder: "All Subjects",
                        className: "maxWidth",
                        value: e.subject,
                        onChange: t => e.onSubjectSelected(t),
                        children: [...u.optionsForAreaOfExpertise].map((e => (0, o.jsx)(c.default.Option, {
                            value: e,
                            children: e
                        }, e)))
                    })]
                }),
                children: (0, o.jsx)(a.default, {
                    style: {
                        marginRight: 12
                    },
                    icon: (0, o.jsx)(p.default, {}),
                    size: "small",
                    type: e.language || e.subject ? "primary" : "default",
                    children: "Filter"
                })
            }), (0, o.jsx)(y, {
                content: (0, o.jsxs)("div", {
                    className: "maxWidth",
                    children: [(0, o.jsx)(x, {
                        children: "Sort By:"
                    }), (0, o.jsxs)(c.default, {
                        className: "maxWidth",
                        value: e.sort,
                        onChange: t => e.onSortSelected(t),
                        children: [(0, o.jsx)(c.default.Option, {
                            value: b.relevant,
                            children: "Most Relevant"
                        }), (0, o.jsx)(c.default.Option, {
                            value: b.recent,
                            children: "Most Recent"
                        })]
                    })]
                }),
                children: (0, o.jsx)(a.default, {
                    icon: (0, o.jsx)(h.default, {}),
                    size: "small",
                    children: "Sort"
                })
            })]
        })]
    })
})), r.register("la5Qa", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var i = r("fe1on"),
        a = r("fywoC"),
        s = r("4gMdJ"),
        l = r("e4KJZ"),
        c = r("1wAd6"),
        u = r("8pkwz"),
        d = r("72v7R"),
        f = r("bwoVE"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const h = e => {
            let {
                title: t,
                content: r,
                prefixCls: n
            } = e;
            return t || r ? a.createElement(a.Fragment, null, t && a.createElement("div", {
                className: `${n}-title`
            }, (0, c.getRenderPropValue)(t)), a.createElement("div", {
                className: `${n}-inner-content`
            }, (0, c.getRenderPropValue)(r))) : null
        },
        g = a.forwardRef(((e, r) => {
            var n, o;
            const {
                prefixCls: c,
                title: d,
                content: g,
                overlayClassName: m,
                placement: v = "top",
                trigger: x = "hover",
                mouseEnterDelay: y = .1,
                mouseLeaveDelay: b = .1,
                overlayStyle: C = {},
                arrowPointAtCenter: w,
                arrow: k
            } = e, j = p(e, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "arrowPointAtCenter", "arrow"]), {
                getPrefixCls: S
            } = a.useContext(s.ConfigContext), E = S("popover", c), [O, I] = (0, f.default)(E), M = S(), T = t(i)(m, I), N = null !== (o = null !== (n = "boolean" != typeof k && (null == k ? void 0 : k.arrowPointAtCenter)) && void 0 !== n ? n : w) && void 0 !== o && o, F = null != k ? k : {
                arrowPointAtCenter: N
            };
            return O(a.createElement(l.default, Object.assign({
                placement: v,
                arrow: F,
                trigger: x,
                mouseEnterDelay: y,
                mouseLeaveDelay: b,
                overlayStyle: C
            }, j, {
                prefixCls: E,
                overlayClassName: T,
                ref: r,
                overlay: a.createElement(h, {
                    prefixCls: E,
                    title: d,
                    content: g
                }),
                transitionName: (0, u.getTransitionName)(M, "zoom-big", j.transitionName),
                "data-popover-inject": !0
            })))
        }));
    g._InternalPanelDoNotUseOrYouWillBeFired = d.default;
    var m = g
})), r.register("1wAd6", (function(t, r) {
    e(t.exports, "getRenderPropValue", (function() {
        return n
    }));
    const n = e => e ? "function" == typeof e ? e() : e : null
})), r.register("72v7R", (function(n, o) {
    e(n.exports, "getOverlay", (function() {
        return f
    }), (function(e) {
        return f = e
    })), e(n.exports, "RawPurePanel", (function() {
        return p
    }), (function(e) {
        return p = e
    })), e(n.exports, "default", (function() {
        return h
    }), (function(e) {
        return h = e
    }));
    var i = r("fywoC"),
        a = r("fe1on"),
        s = r("jUIBx"),
        l = r("4gMdJ"),
        c = r("bwoVE"),
        u = r("1wAd6"),
        d = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const f = (e, t, r) => {
        if (t || r) return i.createElement(i.Fragment, null, t && i.createElement("div", {
            className: `${e}-title`
        }, (0, u.getRenderPropValue)(t)), i.createElement("div", {
            className: `${e}-inner-content`
        }, (0, u.getRenderPropValue)(r)))
    };

    function p(e) {
        const {
            hashId: r,
            prefixCls: n,
            className: o,
            style: l,
            placement: c = "top",
            title: u,
            content: d,
            children: p
        } = e;
        return i.createElement("div", {
            className: t(a)(r, n, `${n}-pure`, `${n}-placement-${c}`, o),
            style: l
        }, i.createElement(s.Popup, Object.assign({}, e, {
            className: r,
            prefixCls: n
        }), p || f(n, u, d)))
    }

    function h(e) {
        const {
            prefixCls: t
        } = e, r = d(e, ["prefixCls"]), {
            getPrefixCls: n
        } = i.useContext(l.ConfigContext), o = n("popover", t), [a, s] = (0, c.default)(o);
        return a(i.createElement(p, Object.assign({}, r, {
            prefixCls: o,
            hashId: s
        })))
    }
})), r.register("bwoVE", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("fvpzM"),
        i = r("huF4L"),
        a = r("1QMe3"),
        s = r("c66eu"),
        l = r("kCC5O"),
        c = r("1r9lV");
    const u = e => {
            const {
                componentCls: t,
                popoverBg: r,
                popoverColor: n,
                width: o,
                fontWeightStrong: i,
                popoverPadding: a,
                boxShadowSecondary: s,
                colorTextHeading: u,
                borderRadiusLG: d,
                zIndexPopup: f,
                marginXS: p,
                colorBgElevated: h
            } = e;
            return [{
                [t]: Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
                    position: "absolute",
                    top: 0,
                    left: {
                        _skip_check_: !0,
                        value: 0
                    },
                    zIndex: f,
                    fontWeight: "normal",
                    whiteSpace: "normal",
                    textAlign: "start",
                    cursor: "auto",
                    userSelect: "text",
                    "--antd-arrow-background-color": h,
                    "&-rtl": {
                        direction: "rtl"
                    },
                    "&-hidden": {
                        display: "none"
                    },
                    [`${t}-content`]: {
                        position: "relative"
                    },
                    [`${t}-inner`]: {
                        backgroundColor: r,
                        backgroundClip: "padding-box",
                        borderRadius: d,
                        boxShadow: s,
                        padding: a
                    },
                    [`${t}-title`]: {
                        minWidth: o,
                        marginBottom: p,
                        color: u,
                        fontWeight: i
                    },
                    [`${t}-inner-content`]: {
                        color: n
                    }
                })
            }, (0, c.default)(e, {
                colorBg: "var(--antd-arrow-background-color)"
            }), {
                [`${t}-pure`]: {
                    position: "relative",
                    maxWidth: "none",
                    [`${t}-content`]: {
                        display: "inline-block"
                    }
                }
            }]
        },
        d = e => {
            const {
                componentCls: t
            } = e;
            return {
                [t]: s.PresetColors.map((r => {
                    const n = e[`${r}-6`];
                    return {
                        [`&${t}-${r}`]: {
                            "--antd-arrow-background-color": n,
                            [`${t}-inner`]: {
                                backgroundColor: n
                            },
                            [`${t}-arrow`]: {
                                background: "transparent"
                            }
                        }
                    }
                }))
            }
        },
        f = e => {
            const {
                componentCls: t,
                lineWidth: r,
                lineType: n,
                colorSplit: o,
                paddingSM: i,
                controlHeight: a,
                fontSize: s,
                lineHeight: l,
                padding: c
            } = e, u = a - Math.round(s * l);
            return {
                [t]: {
                    [`${t}-inner`]: {
                        padding: 0
                    },
                    [`${t}-title`]: {
                        margin: 0,
                        padding: `${u/2}px ${c}px ${u/2-r}px`,
                        borderBottom: `${r}px ${n} ${o}`
                    },
                    [`${t}-inner-content`]: {
                        padding: `${i}px ${c}px`
                    }
                }
            }
        };
    var p = (0, i.default)("Popover", (e => {
        const {
            colorBgElevated: t,
            colorText: r,
            wireframe: n
        } = e, i = (0, a.merge)(e, {
            popoverBg: t,
            popoverColor: r,
            popoverPadding: 12
        });
        return [u(i), d(i), n && f(i), (0, o.initZoomMotion)(i, "zoom-big")]
    }), (e => {
        let {
            zIndexPopupBase: t
        } = e;
        return {
            zIndexPopup: t + 30,
            width: 177
        }
    }))
})), r.register("fetBE", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("d22pb"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "FilterOutlined";
    var c = i.forwardRef(l)
})), r.register("d22pb", (function(t, r) {
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
                    d: "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"
                }
            }]
        },
        name: "filter",
        theme: "outlined"
    }
})), r.register("jIPHX", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("8rWtt"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "SortDescendingOutlined";
    var c = i.forwardRef(l)
})), r.register("8rWtt", (function(t, r) {
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
                    d: "M839.6 433.8L749 150.5a9.24 9.24 0 00-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 00-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 00-9.2-9.3zM310.3 167.1a8 8 0 00-12.6 0L185.7 309c-4.2 5.3-.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z"
                }
            }]
        },
        name: "sort-descending",
        theme: "outlined"
    }
})), r.register("29sAe", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = r("hxEiv"),
        i = r("iMOcM"),
        a = r("lpEVe"),
        s = r("fywoC"),
        l = r("beXRF"),
        c = r("ih5vo"),
        u = r("6V5qK"),
        d = r("dwAz0"),
        f = r("lz1ZO"),
        p = r("b1wB5"),
        h = r("ebw20");
    var g = (0, a.observer)((() => {
        const {
            editor: e,
            kitDetails: {
                id: t
            }
        } = s.useContext(d.default), r = (0, l.useLocation)(), [n, a, g] = (0, i.useBoolean)(!1), m = s.useRef(), v = s.useMemo((() => !e.currentlyEditingQuestionId && e.questions.length >= h.QUESTION_LIMIT), [e.questions.length, e.currentlyEditingQuestionId]), x = s.useMemo((() => r.pathname.endsWith("question")), [r.pathname.length]), y = s.useMemo((() => {
            if (e.currentlyEditingQuestionId) return e.questions.find((t => t._id === e.currentlyEditingQuestionId))
        }), [e.currentlyEditingQuestionId]), b = () => {
            e.currentlyEditingQuestionId = ""
        };
        return (0, o.jsx)(p.default, {
            ref: m,
            visible: x,
            close: () => (0, f.default)(c.editorBase),
            existingQuestion: y,
            submitQuestion: e => {
                a(), (0, u.default)([{
                    questionText: e.text,
                    image: e.image,
                    audio: e.audio,
                    latex: e.latex,
                    type: e.type,
                    source: "editor",
                    answers: e.answers.filter((e => {
                        var t;
                        const r = null === (t = e.text) || void 0 === t ? void 0 : t.trim();
                        return !!(null == r ? void 0 : r.length) || (e.latex || e.image)
                    })),
                    kitId: t,
                    replacingQuestion: e._id || ""
                }], (() => {
                    g()
                }))
            },
            afterClose: () => {
                m.current && m.current.clear(), b()
            },
            buttonLabel: y ? "Save" : "Add",
            loading: n,
            blockAddingNewQuestions: v,
            errorMessage: e.error ? e.error.message : ""
        })
    }))
})), r.register("dv6QI", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("ih5vo"),
        a = r("5JGKV"),
        s = r("lz1ZO"),
        l = r("beXRF");
    var c = () => {
        const e = (0, l.useLocation)().pathname.endsWith("flashcard-import");
        return (0, o.jsx)(a.default, {
            visible: e,
            close: () => (0, s.default)(i.editorBase)
        })
    }
})), r.register("5JGKV", (function(t, n) {
    e(t.exports, "default", (function() {
        return T
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("fi9M3"),
        c = r("93yIm"),
        u = r("b9Zw0"),
        d = r("fBuQJ"),
        f = r("e4KJZ"),
        p = r("2FDaO"),
        h = r("h0NTP"),
        g = r("69SUA"),
        m = r("8dpJp"),
        v = r("6V5qK"),
        x = r("iUwFC"),
        y = r("lpEVe"),
        b = r("37fUe"),
        C = r("dGSwC"),
        w = r("cDyBs"),
        k = r("cmvpZ");
    let j;
    const {
        TextArea: S
    } = u.default;
    let E;
    var O;
    (O = E || (E = {})).find = "Find", O.export = "Export", O.paste = "Paste";
    const I = {
        screen: E.find,
        textAreaInput: "",
        overlayOpen: !1,
        loading: !1
    };
    let M = class extends s.Component {
        componentDidUpdate(e) {
            !this.props.visible && e.visible && (this.setState(I), this.props.editor.error = (0, w.defaultError)())
        }
        render() {
            const {
                visible: e,
                close: t
            } = this.props;
            return (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(d.default, {
                    destroyOnClose: !0,
                    open: e,
                    width: 670,
                    style: {
                        top: 20
                    },
                    footer: null,
                    onCancel: t,
                    closable: !1,
                    children: (0, a.jsxs)(N, {
                        children: [this.getContent(), (0, a.jsx)(C.default, {})]
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", I), (0, o.default)(this, "skipToLastStep", (() => this.setState({
                screen: E.paste
            }))), (0, o.default)(this, "toggleOverlay", (() => this.setState({
                overlayOpen: !this.state.overlayOpen
            }))), (0, o.default)(this, "flip", (() => this.setState({
                textAreaInput: (0, m.flip)(this.state.textAreaInput)
            }))), (0, o.default)(this, "getContent", (() => {
                const e = (0, m.MakeBaseQuestions)((0, m.MakeQuizletQuestionMap)(this.state.textAreaInput));
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: "flex maxWidth vc",
                        style: {
                            justifyContent: "space-between"
                        },
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(h.default, {
                                style: {
                                    fontWeight: g.FontWeights.UltraBold,
                                    fontSize: 35
                                },
                                children: "Import a Set"
                            }), (0, a.jsx)(h.default, {
                                style: {
                                    fontSize: 18,
                                    marginTop: -6,
                                    lineHeight: "20px"
                                },
                                children: (0, a.jsx)("span", {
                                    children: "Find a flashcard set and paste the text below."
                                })
                            })]
                        }), (0, a.jsx)(f.default, {
                            title: "Need Help?",
                            children: (0, a.jsx)(c.default, {
                                href: "https://help.gimkit.com/en/article/importing-a-flashcard-set-ti90sw/?1570044230345",
                                target: "_blank",
                                size: "large",
                                icon: (0, a.jsx)(l.default, {}),
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                shape: "circle",
                                type: "dashed"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        style: {
                            height: 10
                        }
                    }), (0, a.jsx)(S, {
                        style: {
                            height: 200,
                            fontSize: 16
                        },
                        placeholder: "Paste here...",
                        onChange: this.onTextAreaChanged,
                        value: this.state.textAreaInput
                    }), (0, a.jsx)(c.default, {
                        style: {
                            width: "100%",
                            marginTop: 6
                        },
                        disabled: !(e.length > 1),
                        onClick: this.addQuestions,
                        type: "primary",
                        size: "large",
                        loading: this.state.loading,
                        children: "Create"
                    }), (0, a.jsx)("div", {
                        style: {
                            height: 3
                        }
                    }), e.length > 1 && (0, a.jsxs)("div", {
                        className: "flex vc",
                        style: {
                            justifyContent: "space-between"
                        },
                        children: [(0, a.jsx)(h.default, {
                            style: {
                                cursor: "pointer",
                                opacity: .5
                            },
                            onClick: this.toggleOverlay,
                            children: "Preview Questions"
                        }), (0, a.jsx)(h.default, {
                            onClick: this.flip,
                            style: {
                                cursor: "pointer",
                                opacity: .5
                            },
                            children: "Flip Term/Definition"
                        })]
                    }), (0, a.jsx)(b.default, {
                        visible: this.state.overlayOpen,
                        questions: e,
                        close: this.toggleOverlay
                    })]
                })
            })), (0, o.default)(this, "addQuestions", (() => {
                const e = (0, m.MakeBaseQuestions)((0, m.MakeQuizletQuestionMap)(this.state.textAreaInput));
                if (!e.length) return;
                this.setState({
                    loading: !0
                });
                const t = e.reverse().map((e => ({
                    questionText: e.text,
                    image: e.image,
                    type: x.QuestionType.multipleChoice,
                    source: "flashcard-import",
                    answers: e.answers,
                    kitId: this.props.kitDetails.id
                })));
                (0, k.chunk)(t, 20).forEach((e => {
                    (0, v.default)(e, (() => this.setState({
                        loading: !1
                    })), {
                        pushToBottom: !0
                    })
                }))
            })), (0, o.default)(this, "onTextAreaChanged", (e => {
                this.setState({
                    textAreaInput: e.target.value
                })
            }))
        }
    };
    M = (0, i.__decorate)([(0, y.inject)("kitDetails", "editor"), y.observer], M);
    var T = M;
    const N = p.default.div(j || (j = (e => e)`
  .ant-steps-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`))
})), r.register("fi9M3", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("6byKL"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "QuestionOutlined";
    var c = i.forwardRef(l)
})), r.register("6byKL", (function(t, r) {
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
                    d: "M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 00-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z"
                }
            }]
        },
        name: "question",
        theme: "outlined"
    }
})), r.register("8dpJp", (function(t, n) {
    e(t.exports, "MakeQuizletQuestionMap", (function() {
        return s
    })), e(t.exports, "MakeBaseQuestions", (function() {
        return l
    })), e(t.exports, "flip", (function() {
        return c
    }));
    var o = r("cmvpZ");
    const i = e => null != e.match(/\.(jpeg|jpg|gif|png)$/),
        a = e => e.text ? e.text : e.image ? e.image : "",
        s = e => e.split("\n").map((e => {
            let t = {
                question: {
                    text: null,
                    image: null,
                    audio: null
                },
                answer: {
                    text: null,
                    image: null
                }
            };
            const r = e.split("\t").filter((e => e && e.length > 0));
            if (r.length <= 1) return null;
            if (3 === r.length) return i(r[0]) ? (t.question.image = r[0], t.question.text = r[1], t.answer.text = r[2]) : (t.question.text = r[0], t.answer.text = r[1], t.question.image = r[2]), t;
            t.question.text = r[0];
            i(r[1]) ? t.answer.image = r[1] : t.answer.text = r[1];
            return t
        })).filter((e => !(!e || !e.question.text && !e.question.image || !e.answer.image && !e.answer.text))),
        l = e => {
            const t = e.map((t => {
                const r = [{
                        ...t.answer,
                        correct: !0
                    }],
                    n = () => {
                        let t = !1;
                        for (let n = 0; n < 10; n++) {
                            if (t) return;
                            const n = (0, o.shuffle)(e)[0];
                            let i = !1;
                            r.forEach((e => {
                                a(e) === a(n.answer) && (i = !0)
                            })), i || (r.push({
                                ...n.answer,
                                correct: !1
                            }), t = !0)
                        }
                        t || r.push({
                            text: "---",
                            image: null,
                            correct: !1
                        })
                    };
                return n(), n(), n(), {
                    text: t.question.text,
                    image: t.question.image,
                    audio: t.question.audio,
                    latex: t.question.latex,
                    answers: r
                }
            }));
            return t && t.length ? t : []
        },
        c = e => {
            let t = "";
            const r = e.split("\n").map((e => e.split("\t").reverse()));
            return r.forEach(((e, n) => {
                e.forEach(((o, i) => {
                    t += o, i + 1 === e.length ? n + 1 !== r.length && (t += "\n") : t += "\t"
                }))
            })), t
        }
})), r.register("37fUe", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("9xElQ"),
        a = r("iUwFC"),
        s = r("8FJCY");
    var l = e => {
        const t = e.questions.map(((e, t) => ({
            _id: "quizlet-question-" + t,
            text: e.text,
            type: a.QuestionType.multipleChoice,
            image: e.image,
            audio: e.audio,
            latex: e.latex,
            answers: e.answers.map(((e, r) => ({
                _id: "quizlet-answer-" + t + "-" + r,
                text: e.text,
                image: e.image,
                latex: e.latex,
                correct: e.correct
            })))
        })));
        return (0, o.jsx)(i.default, {
            open: e.visible,
            placement: "right",
            closable: !0,
            destroyOnClose: !0,
            onClose: e.close,
            width: 515,
            children: t.map((e => (0, o.jsx)(s.default, {
                question: e,
                showAllAnswers: !0
            }, e._id)))
        })
    }
})), r.register("dGSwC", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("kHqmx"),
        i = r("hxEiv"),
        a = r("fywoC"),
        s = r("bfV0l"),
        l = r("lpEVe");
    let c = class extends a.Component {
        render() {
            return this.props.editor.error.message ? (0, i.jsx)(s.default, {
                message: "Error",
                description: this.props.editor.error.message,
                type: "error",
                showIcon: !0
            }) : null
        }
    };
    c = (0, o.__decorate)([(0, l.inject)("editor"), l.observer], c);
    var u = c
})), r.register("8duGu", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("ih5vo"),
        a = r("fWcoZ"),
        s = r("lz1ZO"),
        l = r("beXRF");
    var c = () => {
        const e = (0, l.useLocation)().pathname.endsWith("question-bank");
        return (0, o.jsx)(a.default, {
            visible: e,
            close: () => (0, s.default)(i.editorBase)
        })
    }
})), r.register("kQtwK", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("beXRF"),
        a = r("5j6rv");
    var s = () => {
        const e = (0, i.useNavigate)(),
            t = (0, i.useLocation)().pathname.endsWith("spreadsheet");
        return (0, o.jsx)(a.default, {
            visible: t,
            close: () => e(-1)
        })
    }
})), r.register("5j6rv", (function(t, n) {
    e(t.exports, "default", (function() {
        return N
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("kuXvx"),
        s = r("bfV0l"),
        l = r("93yIm"),
        c = r("7ECC6"),
        u = r("fBuQJ"),
        d = r("03g0M"),
        f = r("2FDaO"),
        p = r("69SUA"),
        h = r("lKmIF"),
        g = r("cOqKD"),
        m = r("6V5qK"),
        v = r("iUwFC"),
        x = r("lpEVe"),
        y = r("8dpJp"),
        b = r("dwAz0");
    let C, w, k, j = e => e;
    const S = e => (0, o.jsx)("a", {
            href: e.link,
            target: "_blank",
            style: {
                width: "100%"
            },
            children: (0, o.jsxs)(c.default, {
                style: {
                    fontFamily: p.Fonts.SFPro,
                    color: h.default.Black
                },
                hoverable: !0,
                children: [(0, o.jsx)("div", {
                    style: {
                        fontSize: 23,
                        fontWeight: p.FontWeights.UltraBold
                    },
                    children: e.title
                }), (0, o.jsx)("div", {
                    style: {
                        lineHeight: "17px"
                    },
                    children: e.description
                })]
            })
        }),
        E = e => e.filter((e => e && e.length > 0)),
        O = (0, x.observer)((e => {
            const {
                kitDetails: t
            } = i.useContext(b.default), [r, n] = i.useState(!1), [c, f] = i.useState(""), p = ({
                file: e
            }) => {
                f("");
                const r = [];
                g.parse(e, {
                    complete: e => {
                        if (e && e.data && e.data.length && e.data[0][0] && e.data[0][0].endsWith("Template 2")) {
                            const t = [];
                            e.data.forEach(((e, r) => {
                                r > 1 && e[0] && e[1] && t.push({
                                    question: {
                                        text: e[0]
                                    },
                                    answer: {
                                        text: e[1]
                                    }
                                })
                            })), (0, y.MakeBaseQuestions)(t).forEach((e => {
                                r.push({
                                    text: e.text,
                                    answers: e.answers.map((e => ({
                                        correct: e.correct,
                                        text: e.text
                                    })))
                                })
                            })), r && r.length || f("Invalid format. Make sure you're using our template and have a question and correct answer for each row.")
                        } else e && e.data && e.data[1] && E(e.data[1]).length >= 5 && e.data.forEach(((e, t) => {
                            if (t > 1) {
                                const t = E(e);
                                if (!t[0]) return;
                                const n = [];
                                for (let e = 1; e < t.length; e++) n.push({
                                    correct: 1 === e,
                                    text: t[e]
                                });
                                n.length >= 2 && r.push({
                                    text: t[0],
                                    answers: n
                                })
                            }
                        })), r && r.length || f("Invalid format. Make sure you're using our template and have a question, correct answer, and at least one incorrect answer for each row.");
                        r && r.length && (n(!0), (0, m.default)(r.map((e => ({
                            questionText: e.text,
                            type: v.QuestionType.multipleChoice,
                            answers: e.answers,
                            source: "spreadsheet",
                            kitId: t.id
                        }))), (() => n(!1))))
                    }
                })
            };
            return (0, o.jsx)(u.default, {
                open: e.visible,
                onCancel: e.close,
                footer: !1,
                width: 670,
                closable: !1,
                style: {
                    top: 20
                },
                children: (0, o.jsxs)(I, {
                    className: "flex maxWidth flex-column",
                    children: [(0, o.jsx)(M, {
                        children: "Import from Spreadsheet"
                    }), (0, o.jsx)(T, {
                        children: "Want to add questions super quickly? Add them in a spreadsheet and import them here! To get started, choose a template below. Fill out the spreadsheet with your questions & answers and download it as a CSV file."
                    }), (0, o.jsx)("div", {
                        style: {
                            height: 7
                        }
                    }), (0, o.jsxs)("div", {
                        className: "flex vc",
                        style: {
                            justifyContent: "space-between"
                        },
                        children: [(0, o.jsx)(S, {
                            title: "Template 1",
                            description: "Specify the question, correct answer, and incorrect answers",
                            link: "https://docs.google.com/spreadsheets/d/1UK4xg6vc1ph-tAOywBIyiArf_ck7QQFEq5p8t4LEcVw/copy"
                        }), (0, o.jsx)("div", {
                            style: {
                                width: 14
                            }
                        }), (0, o.jsx)(S, {
                            title: "Template 2",
                            description: "Specify just the question and correct answer",
                            link: "https://docs.google.com/spreadsheets/d/1OIoHEjTnzeBqceYynBV5WLEjF0J2yVFrIxCqquXokwE/copy"
                        })]
                    }), (0, o.jsx)("img", {
                        src: "/client/img/editor/spreadsheet.jpg",
                        style: {
                            width: "100%",
                            marginTop: 10,
                            border: "solid 1px",
                            borderRadius: 6
                        }
                    }), (0, o.jsxs)(d.default, {
                        style: {
                            width: "100%"
                        },
                        customRequest: p,
                        accept: ".csv",
                        showUploadList: !1,
                        children: [c ? (0, o.jsx)(s.default, {
                            type: "error",
                            message: c,
                            style: {
                                marginTop: 10
                            }
                        }) : null, (0, o.jsx)(l.default, {
                            type: "primary",
                            icon: (0, o.jsx)(a.default, {}),
                            style: {
                                width: "100%",
                                marginTop: 10
                            },
                            loading: r,
                            children: "Upload File"
                        })]
                    })]
                })
            })
        })),
        I = f.default.div(C || (C = j`
  .ant-upload.ant-upload-select {
    width: 100%;
  }
`)),
        M = f.default.div(w || (w = j`
  font-size: 27px;
  font-weight: ${0};
  color: ${0};
  font-family: ${0};
`), p.FontWeights.UltraBold, h.default.Black, p.Fonts.SFPro),
        T = f.default.div(k || (k = j`
  font-size: 16px;
  margin-top: -4px;
  line-height: 21px;
  color: ${0};
  font-family: ${0};
`), h.default.Black, p.Fonts.SFPro);
    var N = O
})), r.register("kuXvx", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("eDOL9"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "UploadOutlined";
    var c = i.forwardRef(l)
})), r.register("eDOL9", (function(t, r) {
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
                    d: "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "upload",
        theme: "outlined"
    }
})), r.register("guo1A", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        a = r("gHmyG"),
        s = r("9FC0t"),
        l = r("cPGmn"),
        c = r("3uz2P");
    let u;
    const d = i.default.div(u || (u = (e => e)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`));
    var f = () => {
        const {
            kitId: e
        } = (0, c.useParams)();
        return (0, l.useDidMount)((() => {
            (0, s.default)(e)
        })), (0, o.jsx)(d, {
            children: (0, o.jsx)(a.default, {
                size: "large"
            })
        })
    }
})), r.register("9FC0t", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("5O6vk"),
        i = r("iMOcM"),
        a = r("b1oE9"),
        s = r("iROck");
    var l = e => {
        (0, i.request)({
            url: `/api/games/fetch/${e}`,
            method: "get",
            success: e => {
                const {
                    kitDetails: t,
                    editor: r
                } = o.default, {
                    kit: n
                } = e;
                t.id = n._id, t.title = n.title, t.image = n.gif, t.privacy = n.privacy, r.questions.replace(n.questions)
            },
            error: e => {
                (0, s.NavigateTo)(a.DASHBOARD)
            }
        })
    }
})), r.register("kktyq", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("beXRF"),
        a = r("ih5vo"),
        s = r("lz1ZO"),
        l = r("2C3X9");
    var c = () => {
        const e = (0, i.useLocation)().pathname.endsWith("flashcard-create");
        return (0, o.jsx)(l.default, {
            visible: e,
            close: () => (0, s.default)(a.editorBase)
        })
    }
})), r.register("2C3X9", (function(t, n) {
    e(t.exports, "default", (function() {
        return E
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("93yIm"),
        c = r("fC6cp"),
        u = r("fBuQJ"),
        d = r("lKmIF"),
        f = r("69SUA"),
        p = r("1snYN"),
        h = r("37fUe"),
        g = r("iUwFC"),
        m = r("lpEVe"),
        v = r("dGSwC"),
        x = r("cmvpZ"),
        y = r("6V5qK"),
        b = r("8dpJp");
    const C = "flashcard-entry-editor",
        w = e => {
            let t = !1;
            return (e.text || e.audio || e.image || e.latex) && (t = !0), t
        },
        k = e => {
            let t = 0;
            return e.text && t++, e.image && t++, e.latex && t++, 1 === t
        },
        j = e => w(e.question) && k(e.answer);
    let S = class extends s.Component {
        componentDidMount() {
            if (localStorage.getItem(C)) {
                const e = JSON.parse(localStorage.getItem(C));
                e && e.length > 3 && this.setState({
                    questions: e
                })
            }
        }
        render() {
            return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)(u.default, {
                    open: this.props.visible,
                    onCancel: this.props.close,
                    width: 890,
                    closable: !1,
                    style: {
                        top: 20,
                        color: d.default.Black,
                        fontFamily: f.Fonts.SFPro
                    },
                    footer: (0, a.jsxs)("div", {
                        className: "flex maxWidth vc",
                        style: {
                            justifyContent: "space-between"
                        },
                        children: [(0, a.jsx)("a", {
                            onClick: this.toggleOverlay,
                            children: "Preview Questions"
                        }), (0, a.jsx)(l.default, {
                            onClick: this.addQuestions,
                            disabled: !this.canSubmit(),
                            type: "primary",
                            loading: this.state.loading,
                            children: "Create"
                        })]
                    }),
                    children: [(0, a.jsx)("div", {
                        style: {
                            fontSize: 34,
                            fontWeight: f.FontWeights.UltraBold,
                            cursor: "pointer"
                        },
                        onDoubleClick: this.deleteAllQuestions,
                        children: "📚 Create Flashcards"
                    }), (0, a.jsx)("div", {
                        style: {
                            fontSize: 20,
                            lineHeight: "20px",
                            marginTop: -5,
                            opacity: .8
                        },
                        children: "Save some time by entering a question and answer. We'll generate the incorrect answers for you!"
                    }), (0, a.jsx)(c.default, {}), this.state.questions.map(((e, t) => (0, a.jsx)(p.default, {
                        value: e,
                        onChange: e => this.handleQuestionChange(e, t)
                    }, "flashcard-create-" + t))), (0, a.jsx)(v.default, {})]
                }), (0, a.jsx)(h.default, {
                    questions: this.state.overlayVisible ? this.makeQuestions() : [],
                    visible: this.state.overlayVisible,
                    close: this.toggleOverlay
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                questions: [{
                    question: {
                        text: "",
                        audio: "",
                        image: "",
                        latex: ""
                    },
                    answer: {
                        text: "",
                        image: "",
                        latex: ""
                    }
                }, {
                    question: {
                        text: "",
                        audio: "",
                        image: "",
                        latex: ""
                    },
                    answer: {
                        text: "",
                        image: "",
                        latex: ""
                    }
                }, {
                    question: {
                        text: "",
                        audio: "",
                        image: "",
                        latex: ""
                    },
                    answer: {
                        text: "",
                        image: "",
                        latex: ""
                    }
                }, {
                    question: {
                        text: "",
                        audio: "",
                        image: "",
                        latex: ""
                    },
                    answer: {
                        text: "",
                        image: "",
                        latex: ""
                    }
                }],
                overlayVisible: !1,
                loading: !1
            }), (0, o.default)(this, "toggleOverlay", (() => this.setState({
                overlayVisible: !this.state.overlayVisible
            }))), (0, o.default)(this, "handleQuestionChange", ((e, t) => {
                let r = this.state.questions;
                t + 1 === this.state.questions.length && !this.state.questions[t + 1] && j(e) && r.length < 200 && r.push({
                    question: {
                        text: "",
                        audio: "",
                        image: "",
                        latex: ""
                    },
                    answer: {
                        text: "",
                        image: "",
                        latex: ""
                    }
                }), r = r.map(((r, n) => n !== t ? r : e)), r = r.filter(((e, t) => !(t > 3 && t + 1 !== r.length && !w(e.question) && !k(e.answer)))), localStorage.setItem(C, JSON.stringify(r)), this.setState({
                    questions: r
                })
            })), (0, o.default)(this, "makeQuestions", (() => (0, b.MakeBaseQuestions)(this.state.questions.filter((e => j(e)))))), (0, o.default)(this, "addQuestions", (() => {
                const e = this.makeQuestions();
                if (!e.length) return;
                this.setState({
                    loading: !0
                });
                const t = e.reverse().map((e => ({
                    questionText: e.text,
                    image: e.image,
                    audio: e.audio,
                    type: g.QuestionType.multipleChoice,
                    source: "flashcard-create",
                    answers: e.answers,
                    kitId: this.props.kitDetails.id
                })));
                (0, x.chunk)(t, 20).forEach((e => {
                    (0, y.default)(e, (() => {
                        this.setState({
                            loading: !1
                        }), this.deleteAllQuestions()
                    }))
                }))
            })), (0, o.default)(this, "deleteAllQuestions", (() => {
                localStorage.removeItem(C), this.setState({
                    questions: [{
                        question: {
                            text: "",
                            audio: "",
                            image: "",
                            latex: ""
                        },
                        answer: {
                            text: "",
                            image: "",
                            latex: ""
                        }
                    }, {
                        question: {
                            text: "",
                            audio: "",
                            image: "",
                            latex: ""
                        },
                        answer: {
                            text: "",
                            image: "",
                            latex: ""
                        }
                    }, {
                        question: {
                            text: "",
                            audio: "",
                            image: "",
                            latex: ""
                        },
                        answer: {
                            text: "",
                            image: "",
                            latex: ""
                        }
                    }, {
                        question: {
                            text: "",
                            audio: "",
                            image: "",
                            latex: ""
                        },
                        answer: {
                            text: "",
                            image: "",
                            latex: ""
                        }
                    }]
                })
            })), (0, o.default)(this, "canSubmit", (() => {
                let e = !0;
                return this.state.questions.forEach(((t, r) => {
                    r < 4 && (j(t) || (e = !1))
                })), e
            }))
        }
    };
    S = (0, i.__decorate)([(0, m.inject)("kitDetails"), m.observer], S);
    var E = S
})), r.register("1snYN", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        a = r("dfjig"),
        s = r("iMOcM");
    let l, c, u, d = e => e;
    const f = i.default.div(l || (l = d`
  width: 100%;
  display: flex;
  margin-bottom: 6px;
  align-items: center;
`)),
        p = i.default.div(c || (c = d`
  width: calc(50% - 10px);
  margin-right: 10px;
`)),
        h = i.default.div(u || (u = d`
  width: calc(50% - 10px);
`));
    var g = e => {
        const t = () => ({
                question: {
                    text: e.value.question.text,
                    image: e.value.question.image,
                    audio: e.value.question.audio,
                    latex: e.value.question.latex
                },
                answer: {
                    text: e.value.answer.text,
                    image: e.value.answer.image
                }
            }),
            {
                value: r
            } = e,
            {
                question: n,
                answer: i
            } = r;
        return (0, o.jsxs)(f, {
            children: [(0, o.jsx)(p, {
                children: (0, o.jsx)(a.default, {
                    text: n.text,
                    image: n.image,
                    audio: n.audio,
                    latex: n.latex,
                    onTextChange: r => {
                        const n = t();
                        e.onChange({
                            ...n,
                            question: {
                                ...n.question,
                                text: r
                            }
                        })
                    },
                    onImageChange: r => {
                        const n = t();
                        e.onChange({
                            ...n,
                            question: {
                                ...n.question,
                                image: r
                            }
                        })
                    },
                    onLatexChange: r => {
                        const n = t();
                        e.onChange({
                            ...n,
                            question: {
                                ...n.question,
                                latex: r
                            }
                        })
                    },
                    textAllowed: !0,
                    imageAllowed: !n.latex,
                    audioAllowed: window.MediaRecorder && !(0, s.isStudent)(),
                    latexAllowed: !n.image,
                    onAudioChange: r => {
                        const n = t();
                        e.onChange({
                            ...n,
                            question: {
                                ...n.question,
                                audio: r
                            }
                        })
                    },
                    placeholder: "Question..."
                })
            }), (0, o.jsx)(h, {
                children: (0, o.jsx)(a.default, {
                    text: i.text,
                    image: i.image,
                    latex: i.latex,
                    audio: null,
                    onTextChange: r => {
                        const n = t();
                        e.onChange({
                            ...n,
                            answer: {
                                ...n.answer,
                                text: r
                            }
                        })
                    },
                    onImageChange: r => {
                        const n = t();
                        e.onChange({
                            ...n,
                            answer: {
                                ...n.answer,
                                image: r
                            }
                        })
                    },
                    onLatexChange: r => {
                        const n = t();
                        e.onChange({
                            ...n,
                            answer: {
                                ...n.answer,
                                latex: r
                            }
                        })
                    },
                    imageAllowed: !i.text && !i.latex,
                    latexAllowed: !i.text && !i.image,
                    textAllowed: !i.image && !i.latex,
                    placeholder: "Answer...",
                    audioAllowed: !1
                })
            })]
        })
    }
})), r.register("dfjig", (function(t, n) {
    e(t.exports, "default", (function() {
        return C
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("2TdZR"),
        s = r("2FDaO"),
        l = r("ibETQ"),
        c = r("6jIfW"),
        u = r("7RWiL"),
        d = r("93yIm"),
        f = r("e4KJZ"),
        p = r("7Jt5L"),
        h = r("fK8ya"),
        g = r("c5Bl6"),
        m = r("iMOcM"),
        v = r("8j47p"),
        x = r("aj9M4"),
        y = r("1nYp9");
    let b;
    var C = e => {
        const [t, r] = i.useState(!1), [n, s] = i.useState(!1), [b, C] = i.useState(!1), [k, j, S] = (0, m.useBoolean)(!1), E = () => r(!0), O = () => s(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(w, {
                children: [(0, o.jsx)(a.default, {
                    value: e.text,
                    onTextChange: t => {
                        e.onTextChange(t)
                    },
                    disabled: !e.textAllowed,
                    placeholder: e.placeholder
                }), (0, o.jsxs)("div", {
                    className: "flex vc",
                    children: [!e.image && e.imageAllowed && (0, o.jsx)(f.default, {
                        title: "Add Photo",
                        children: (0, o.jsx)(d.default, {
                            onClick: E,
                            style: {
                                marginLeft: 4,
                                flexShrink: 0
                            },
                            icon: (0, o.jsx)(c.default, {}),
                            size: "large",
                            tabIndex: "-1"
                        })
                    }), e.image && (0, o.jsx)(h.default, {
                        image: e.image,
                        size: 38,
                        blockModalOpen: !0,
                        onClick: E,
                        showBorder: !0,
                        style: {
                            marginLeft: 4
                        }
                    }), e.audioAllowed && (0, o.jsx)(f.default, {
                        title: e.audio ? "Audio" : "Add Audio",
                        children: (0, o.jsx)(d.default, {
                            onClick: () => {
                                (0, m.isUpgraded)() ? s(!0): C(!0)
                            },
                            style: {
                                marginLeft: 4,
                                flexShrink: 0
                            },
                            icon: (0, o.jsx)(l.default, {}),
                            size: "large",
                            tabIndex: "-1"
                        })
                    }), e.latexAllowed && (0, o.jsx)(f.default, {
                        title: e.latex ? "Equation" : "Add Equation",
                        children: (0, o.jsx)(d.default, {
                            onClick: j,
                            style: {
                                marginLeft: 4,
                                flexShrink: 0
                            },
                            icon: (0, o.jsx)(u.default, {
                                style: {
                                    color: e.latex ? "green" : "inherit"
                                }
                            }),
                            size: "large",
                            tabIndex: "-1"
                        })
                    })]
                })]
            }), (0, o.jsx)(p.default, {
                visible: t,
                close: () => r(!1),
                currentImage: e.image,
                onImageChange: t => {
                    e.onImageChange(t)
                }
            }), (0, o.jsx)(g.default, {
                visible: n,
                audio: e.audio,
                close: O,
                onAudioChanged: t => {
                    var r;
                    r = t, e.onAudioChange && e.onAudioChange(r), O()
                }
            }), (0, o.jsx)(y.default, {
                visible: k,
                close: S,
                onChange: t => {
                    e.onLatexChange && e.onLatexChange(t)
                },
                latex: e.latex
            }), (0, o.jsx)(v.default, {
                id: "add audio",
                visible: b,
                close: () => C(!1),
                copy: {
                    title: x.AUDIO_TITLE,
                    description: x.AUDIO_DESCRIPTION
                }
            })]
        })
    };
    const w = s.default.div(b || (b = (e => e)`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 28px;
`))
})), r.register("fmRCu", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("beXRF"),
        a = r("ih5vo"),
        s = r("lz1ZO"),
        l = r("i1n14");
    var c = () => {
        const e = (0, i.useLocation)().pathname.endsWith("flashcard-home");
        return (0, o.jsx)(l.default, {
            visible: e,
            close: () => (0, s.default)(a.editorBase)
        })
    }
})), r.register("i1n14", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("gASJb"),
        c = r("jbbXK"),
        u = r("7ECC6"),
        d = r("fC6cp"),
        f = r("fBuQJ"),
        p = r("lKmIF"),
        h = r("69SUA"),
        g = r("ih5vo"),
        m = r("lpEVe"),
        v = r("iROck");
    let x = class extends s.Component {
        render() {
            return (0, a.jsxs)(f.default, {
                open: this.props.visible,
                onCancel: this.props.close,
                width: 500,
                style: {
                    top: 20,
                    color: p.default.Black,
                    fontFamily: h.Fonts.SFPro
                },
                footer: null,
                closable: !1,
                children: [(0, a.jsxs)(u.default, {
                    hoverable: !0,
                    style: {
                        color: p.default.Black,
                        fontFamily: h.Fonts.SFPro,
                        height: 210
                    },
                    onClick: this.createFlashcards,
                    bodyStyle: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        height: "100%"
                    },
                    children: [(0, a.jsx)(c.default, {
                        style: {
                            fontSize: 35
                        }
                    }), (0, a.jsx)("div", {
                        style: {
                            fontWeight: h.FontWeights.UltraBold,
                            fontSize: 25
                        },
                        className: "flex vc",
                        children: (0, a.jsx)("div", {
                            children: "Create Flashcards"
                        })
                    })]
                }), (0, a.jsx)("div", {
                    className: "flex",
                    children: (0, a.jsx)(d.default, {
                        children: "or..."
                    })
                }), (0, a.jsx)(u.default, {
                    hoverable: !0,
                    style: {
                        color: p.default.Black,
                        fontFamily: h.Fonts.SFPro
                    },
                    onClick: this.importFlashcards,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-column hc vc maxWidth",
                        children: [(0, a.jsx)(l.default, {
                            style: {
                                fontSize: 25
                            }
                        }), (0, a.jsx)("div", {
                            style: {
                                fontWeight: h.FontWeights.UltraBold,
                                fontSize: 22
                            },
                            className: "flex vc",
                            children: (0, a.jsx)("div", {
                                children: "Import Flashcards"
                            })
                        })]
                    })
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "createFlashcards", (() => (0, v.NavigateTo)((0, g.createWithFlashcards)(this.props.kitDetails.id)))), (0, o.default)(this, "importFlashcards", (() => (0, v.NavigateTo)((0, g.flashcardImport)(this.props.kitDetails.id))))
        }
    };
    x = (0, i.__decorate)([(0, m.inject)("kitDetails"), m.observer], x);
    var y = x
})), r.register("avpEw", (function(t, n) {
    e(t.exports, "default", (function() {
        return b
    }));
    var o = r("hxEiv"),
        i = r("9xElQ"),
        a = r("fywoC"),
        s = r("ih5vo"),
        l = r("lz1ZO"),
        c = r("2FDaO"),
        u = r("lKmIF"),
        d = r("69SUA"),
        f = r("lhIeC"),
        p = r("7dsDj"),
        h = r("2367p"),
        g = r("lpEVe"),
        m = r("dwAz0"),
        v = r("iMOcM"),
        x = r("beXRF");
    let y;
    var b = (0, g.observer)((() => {
        const {
            kitCollab: e
        } = a.useContext(m.default), t = (0, x.useLocation)(), r = a.useMemo((() => t.pathname.endsWith("kit-collab")), [t.pathname]);
        a.useEffect((() => {
            e.panelOpen = !!r
        }), [r]);
        const n = a.useCallback((() => {
            (0, l.default)(s.editorBase)
        }), []);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(i.default, {
                open: r,
                closable: !0,
                onClose: n,
                placement: "right",
                width: 520,
                bodyStyle: {
                    padding: 40,
                    paddingTop: 30
                },
                children: (0, o.jsx)(C, {
                    children: (0, v.isStudent)() ? null : e.enabled ? (0, o.jsx)(f.default, {}) : (0, o.jsx)(p.default, {})
                })
            }), (0, o.jsx)(h.default, {})]
        })
    }));
    const C = c.default.div.attrs({
        className: "maxWidth"
    })(y || (y = (e => e)`
  color: ${0};
  font-family: ${0};
`), u.default.Black, d.Fonts.SFPro)
})), r.register("lhIeC", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("fgKHH"),
        s = r("6zdGc"),
        l = r("fC6cp"),
        c = r("gHmyG"),
        u = r("2aVfY"),
        d = r("fPRw3"),
        f = r("iMOcM"),
        p = r("87JmJ"),
        h = r("lpEVe"),
        g = r("dwAz0"),
        m = r("RuMM8"),
        v = r("2cVVi");
    var x = (0, h.observer)((() => {
        const {
            kitCollab: e,
            kitDetails: t
        } = i.useContext(g.default), [r, n, h] = (0, f.useBoolean)(!1);
        return i.useEffect((() => {
            (0, m.default)()
        }), []), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)("div", {
                children: [(0, o.jsx)(s.default, {
                    openSettings: n
                }), (0, o.jsx)(a.default, {}), (0, o.jsx)(l.default, {
                    style: {
                        margin: "40px 0px"
                    }
                }), e.hasFetchedFirstBatchOfQuestions ? e.questions.length ? (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)(v.default, {
                        children: e.questions.map((r => (0, o.jsx)("div", {
                            className: "maxWidth",
                            children: (0, o.jsx)(u.default, {
                                id: r._id,
                                question: r.question,
                                creatorName: r.creatorName,
                                kitId: t.id,
                                sessionId: e.sessionId
                            })
                        }, r._id)))
                    })
                }) : (0, o.jsx)(d.default, {}) : (0, o.jsx)("div", {
                    className: "maxWidth flex-center",
                    children: (0, o.jsx)(c.default, {
                        size: "large"
                    })
                })]
            }), (0, o.jsx)(p.default, {
                open: r,
                close: h
            })]
        })
    }))
})), r.register("fgKHH", (function(n, o) {
    e(n.exports, "default", (function() {
        return C
    }));
    var i = r("hxEiv"),
        a = r("93yIm"),
        s = r("b9Zw0"),
        l = r("cy4A6"),
        c = r("iMOcM"),
        u = r("dhxiD"),
        d = r("lpEVe"),
        f = r("fywoC"),
        p = r("2FDaO"),
        h = r("dwAz0"),
        g = r("jDe0H");
    let m, v, x, y, b = e => e;
    var C = (0, d.observer)((() => {
        const [e, r, n] = (0, c.useBoolean)(!1), {
            kitCollab: o
        } = f.useContext(h.default), d = `${(0,c.getDomain)()}/kit-collab/${o.sessionId}`, p = f.useCallback((() => {
            t(u)(d), l.default.success("KitCollab link copied!")
        }), [d]);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(w, {
                children: [(0, i.jsx)(k, {
                    children: "Share the KitCollab link with anybody you want to contribute questions. Once they submit their questions, you'll see them pop up here for you to approve or reject."
                }), (0, i.jsxs)(j, {
                    children: [(0, i.jsx)("div", {
                        className: "maxWidth",
                        children: (0, i.jsx)(s.default, {
                            size: "large",
                            readOnly: !0,
                            style: {
                                width: "100%"
                            },
                            value: d
                        })
                    }), (0, i.jsxs)(S, {
                        children: [(0, i.jsx)(a.default, {
                            size: "large",
                            style: {
                                width: "50%"
                            },
                            onClick: r,
                            children: "View QR Code"
                        }), (0, i.jsx)("div", {
                            style: {
                                width: 10,
                                flexShrink: 0
                            }
                        }), (0, i.jsx)(a.default, {
                            onClick: p,
                            size: "large",
                            type: "primary",
                            style: {
                                width: "50%"
                            },
                            children: "Copy Link"
                        })]
                    })]
                })]
            }), (0, i.jsx)(g.default, {
                link: d,
                visible: e,
                close: n
            })]
        })
    }));
    const w = p.default.div.attrs({
            className: "maxWidth"
        })(m || (m = b`
  margin-top: 15px;
`)),
        k = p.default.div(v || (v = b`
  font-size: 18px;
`)),
        j = p.default.div.attrs({
            className: "flex-column"
        })(x || (x = b`
  margin-top: 20px;
`)),
        S = p.default.div.attrs({
            className: "maxWidth flex vc"
        })(y || (y = b`
  margin-top: 10px;
`))
})), r.register("cy4A6", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = r("5Toxq"),
        i = r("6ePNK"),
        a = r("fywoC"),
        s = r("4gMdJ"),
        l = r("ljTgW"),
        c = r("cPwbI"),
        u = r("dOFVj");
    let d = null,
        f = e => e(),
        p = [],
        h = {};
    const g = a.forwardRef(((e, t) => {
        const r = () => {
                const {
                    prefixCls: e,
                    container: t,
                    maxCount: r,
                    duration: n,
                    rtl: o,
                    top: i
                } = function() {
                    const {
                        prefixCls: e,
                        getContainer: t,
                        duration: r,
                        rtl: n,
                        maxCount: o,
                        top: i
                    } = h;
                    return {
                        prefixCls: null != e ? e : (0, s.globalConfig)().getPrefixCls("message"),
                        container: (null == t ? void 0 : t()) || document.body,
                        duration: r,
                        rtl: n,
                        maxCount: o,
                        top: i
                    }
                }();
                return {
                    prefixCls: e,
                    getContainer: () => t,
                    maxCount: r,
                    duration: n,
                    rtl: o,
                    top: i
                }
            },
            [n, o] = a.useState(r),
            [i, l] = (0, c.useInternalMessage)(n),
            u = (0, s.globalConfig)(),
            d = u.getRootPrefixCls(),
            f = u.getIconPrefixCls(),
            p = () => {
                o(r)
            };
        return a.useEffect(p, []), a.useImperativeHandle(t, (() => {
            const e = Object.assign({}, i);
            return Object.keys(e).forEach((t => {
                e[t] = function() {
                    return p(), i[t].apply(i, arguments)
                }
            })), {
                instance: e,
                sync: p
            }
        })), a.createElement(s.default, {
            prefixCls: d,
            iconPrefixCls: f
        }, l)
    }));

    function m() {
        if (!d) {
            const e = document.createDocumentFragment(),
                t = {
                    fragment: e
                };
            return d = t, void f((() => {
                (0, i.render)(a.createElement(g, {
                    ref: e => {
                        const {
                            instance: r,
                            sync: n
                        } = e || {};
                        Promise.resolve().then((() => {
                            !t.instance && r && (t.instance = r, t.sync = n, m())
                        }))
                    }
                }), e)
            }))
        }
        d.instance && (p.forEach((e => {
            const {
                type: t,
                skipped: r
            } = e;
            if (!r) switch (t) {
                case "open":
                    f((() => {
                        const t = d.instance.open(Object.assign(Object.assign({}, h), e.config));
                        null == t || t.then(e.resolve), e.setCloseFn(t)
                    }));
                    break;
                case "destroy":
                    f((() => {
                        null == d || d.instance.destroy(e.key)
                    }));
                    break;
                default:
                    f((() => {
                        var r;
                        const n = (r = d.instance)[t].apply(r, (0, o.default)(e.args));
                        null == n || n.then(e.resolve), e.setCloseFn(n)
                    }))
            }
        })), p = [])
    }

    function v(e, t) {
        const r = (0, u.wrapPromiseFn)((r => {
            let n;
            const o = {
                type: e,
                args: t,
                resolve: r,
                setCloseFn: e => {
                    n = e
                }
            };
            return p.push(o), () => {
                n ? f((() => {
                    n()
                })) : o.skipped = !0
            }
        }));
        return m(), r
    }
    const x = {
        open: function(e) {
            const t = (0, u.wrapPromiseFn)((t => {
                let r;
                const n = {
                    type: "open",
                    config: e,
                    resolve: t,
                    setCloseFn: e => {
                        r = e
                    }
                };
                return p.push(n), () => {
                    r ? f((() => {
                        r()
                    })) : n.skipped = !0
                }
            }));
            return m(), t
        },
        destroy: function(e) {
            p.push({
                type: "destroy",
                key: e
            }), m()
        },
        config: function(e) {
            h = Object.assign(Object.assign({}, h), e), f((() => {
                var e;
                null === (e = null == d ? void 0 : d.sync) || void 0 === e || e.call(d)
            }))
        },
        useMessage: c.default,
        _InternalPanelDoNotUseOrYouWillBeFired: l.default
    };
    ["success", "info", "warning", "error", "loading"].forEach((e => {
        x[e] = function() {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            return v(e, r)
        }
    }));
    var y = x
})), r.register("ljTgW", (function(n, o) {
    e(n.exports, "TypeIcon", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(n.exports, "PureContent", (function() {
        return v
    }), (function(e) {
        return v = e
    })), e(n.exports, "default", (function() {
        return x
    }), (function(e) {
        return x = e
    }));
    var i = r("fywoC"),
        a = r("kpdXN"),
        s = r("7Dx5R"),
        l = r("tdMvL"),
        c = r("26dWa"),
        u = r("bUZTl"),
        d = r("12hlY"),
        f = r("fe1on"),
        p = r("hQksj"),
        h = r("4gMdJ"),
        g = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const m = {
        info: i.createElement(u.default, null),
        success: i.createElement(c.default, null),
        error: i.createElement(l.default, null),
        warning: i.createElement(s.default, null),
        loading: i.createElement(a.default, null)
    };

    function v(e) {
        let {
            prefixCls: r,
            type: n,
            icon: o,
            children: a
        } = e;
        return i.createElement("div", {
            className: t(f)(`${r}-custom-content`, `${r}-${n}`)
        }, o || m[n], i.createElement("span", null, a))
    }

    function x(e) {
        const {
            prefixCls: r,
            className: n,
            type: o,
            icon: a,
            content: s
        } = e, l = g(e, ["prefixCls", "className", "type", "icon", "content"]), {
            getPrefixCls: c
        } = i.useContext(h.ConfigContext), u = r || c("message"), [, m] = (0, p.default)(u);
        return i.createElement(d.Notice, Object.assign({}, l, {
            prefixCls: u,
            className: t(f)(n, m, `${u}-notice-pure-panel`),
            eventKey: "pure",
            duration: null,
            content: i.createElement(v, {
                prefixCls: u,
                type: o,
                icon: a
            }, s)
        }))
    }
})), r.register("hQksj", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("lt5sb"),
        i = r("huF4L"),
        a = r("1QMe3"),
        s = r("kCC5O");
    const l = e => {
        const {
            componentCls: t,
            iconCls: r,
            boxShadow: n,
            colorBgElevated: i,
            colorSuccess: a,
            colorError: l,
            colorWarning: c,
            colorInfo: u,
            fontSizeLG: d,
            motionEaseInOutCirc: f,
            motionDurationSlow: p,
            marginXS: h,
            paddingXS: g,
            borderRadiusLG: m,
            zIndexPopup: v,
            messageNoticeContentPadding: x
        } = e, y = new(0, o.Keyframes)("MessageMoveIn", {
            "0%": {
                padding: 0,
                transform: "translateY(-100%)",
                opacity: 0
            },
            "100%": {
                padding: g,
                transform: "translateY(0)",
                opacity: 1
            }
        }), b = new(0, o.Keyframes)("MessageMoveOut", {
            "0%": {
                maxHeight: e.height,
                padding: g,
                opacity: 1
            },
            "100%": {
                maxHeight: 0,
                padding: 0,
                opacity: 0
            }
        });
        return [{
            [t]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                position: "fixed",
                top: h,
                width: "100%",
                pointerEvents: "none",
                zIndex: v,
                [`${t}-move-up`]: {
                    animationFillMode: "forwards"
                },
                [`\n        ${t}-move-up-appear,\n        ${t}-move-up-enter\n      `]: {
                    animationName: y,
                    animationDuration: p,
                    animationPlayState: "paused",
                    animationTimingFunction: f
                },
                [`\n        ${t}-move-up-appear${t}-move-up-appear-active,\n        ${t}-move-up-enter${t}-move-up-enter-active\n      `]: {
                    animationPlayState: "running"
                },
                [`${t}-move-up-leave`]: {
                    animationName: b,
                    animationDuration: p,
                    animationPlayState: "paused",
                    animationTimingFunction: f
                },
                [`${t}-move-up-leave${t}-move-up-leave-active`]: {
                    animationPlayState: "running"
                },
                "&-rtl": {
                    direction: "rtl",
                    span: {
                        direction: "rtl"
                    }
                }
            })
        }, {
            [`${t}-notice`]: {
                padding: g,
                textAlign: "center",
                [`${t}-custom-content > ${r}`]: {
                    verticalAlign: "text-bottom",
                    marginInlineEnd: h,
                    fontSize: d
                },
                [`${t}-notice-content`]: {
                    display: "inline-block",
                    padding: x,
                    background: i,
                    borderRadius: m,
                    boxShadow: n,
                    pointerEvents: "all"
                },
                [`${t}-success > ${r}`]: {
                    color: a
                },
                [`${t}-error > ${r}`]: {
                    color: l
                },
                [`${t}-warning > ${r}`]: {
                    color: c
                },
                [`\n        ${t}-info > ${r},\n        ${t}-loading > ${r}`]: {
                    color: u
                }
            }
        }, {
            [`${t}-notice-pure-panel`]: {
                padding: 0,
                textAlign: "start"
            }
        }]
    };
    var c = (0, i.default)("Message", (e => {
        const t = (0, a.merge)(e, {
            messageNoticeContentPadding: `${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`
        });
        return [l(t)]
    }), (e => ({
        height: 150,
        zIndexPopup: e.zIndexPopupBase + 10
    })))
})), r.register("cPwbI", (function(n, o) {
    e(n.exports, "useInternalMessage", (function() {
        return v
    }), (function(e) {
        return v = e
    })), e(n.exports, "default", (function() {
        return x
    }), (function(e) {
        return x = e
    }));
    var i = r("fywoC"),
        a = r("12hlY"),
        s = r("fe1on"),
        l = r("legzE"),
        c = r("4gMdJ"),
        u = r("hQksj"),
        d = r("dOFVj"),
        f = r("ljTgW"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const h = 3,
        g = i.forwardRef(((e, r) => {
            const {
                top: n,
                prefixCls: o,
                getContainer: f,
                maxCount: p,
                duration: g = h,
                rtl: m,
                transitionName: v,
                onAllRemoved: x
            } = e, {
                getPrefixCls: y,
                getPopupContainer: b
            } = i.useContext(c.ConfigContext), C = o || y("message"), [, w] = (0, u.default)(C), k = i.createElement("span", {
                className: `${C}-close-x`
            }, i.createElement(l.default, {
                className: `${C}-close-icon`
            })), [j, S] = (0, a.useNotification)({
                prefixCls: C,
                style: () => ({
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: null != n ? n : 8
                }),
                className: () => t(s)(w, m ? `${C}-rtl` : ""),
                motion: () => (0, d.getMotion)(C, v),
                closable: !1,
                closeIcon: k,
                duration: g,
                getContainer: () => (null == f ? void 0 : f()) || (null == b ? void 0 : b()) || document.body,
                maxCount: p,
                onAllRemoved: x
            });
            return i.useImperativeHandle(r, (() => Object.assign(Object.assign({}, j), {
                prefixCls: C,
                hashId: w
            }))), S
        }));
    let m = 0;

    function v(e) {
        const r = i.useRef(null);
        return [i.useMemo((() => {
            const e = e => {
                    var t;
                    null === (t = r.current) || void 0 === t || t.close(e)
                },
                n = n => {
                    if (!r.current) {
                        const e = () => {};
                        return e.then = () => {}, e
                    }
                    const {
                        open: o,
                        prefixCls: a,
                        hashId: l
                    } = r.current, c = `${a}-notice`, {
                        content: u,
                        icon: h,
                        type: g,
                        key: v,
                        className: x,
                        onClose: y
                    } = n, b = p(n, ["content", "icon", "type", "key", "className", "onClose"]);
                    let C = v;
                    return null == C && (m += 1, C = `antd-message-${m}`), (0, d.wrapPromiseFn)((r => (o(Object.assign(Object.assign({}, b), {
                        key: C,
                        content: i.createElement(f.PureContent, {
                            prefixCls: a,
                            type: g,
                            icon: h
                        }, u),
                        placement: "top",
                        className: t(s)(g && `${c}-${g}`, l, x),
                        onClose: () => {
                            null == y || y(), r()
                        }
                    })), () => {
                        e(C)
                    })))
                },
                o = {
                    open: n,
                    destroy: t => {
                        var n;
                        void 0 !== t ? e(t) : null === (n = r.current) || void 0 === n || n.destroy()
                    }
                };
            return ["info", "success", "warning", "error", "loading"].forEach((e => {
                o[e] = (t, r, o) => {
                    let i, a, s;
                    i = t && "object" == typeof t && "content" in t ? t : {
                        content: t
                    }, "function" == typeof r ? s = r : (a = r, s = o);
                    const l = Object.assign(Object.assign({
                        onClose: s,
                        duration: a
                    }, i), {
                        type: e
                    });
                    return n(l)
                }
            })), o
        }), []), i.createElement(g, Object.assign({
            key: "message-holder"
        }, e, {
            ref: r
        }))]
    }

    function x(e) {
        return v(e)
    }
})), r.register("dOFVj", (function(t, r) {
    function n(e, t) {
        return {
            motionName: null != t ? t : `${e}-move-up`
        }
    }

    function o(e) {
        let t;
        const r = new Promise((r => {
                t = e((() => {
                    r(!0)
                }))
            })),
            n = () => {
                null == t || t()
            };
        return n.then = (e, t) => r.then(e, t), n.promise = r, n
    }
    e(t.exports, "getMotion", (function() {
        return n
    })), e(t.exports, "wrapPromiseFn", (function() {
        return o
    }))
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, i, a, s, l, c, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (a = n(), s = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var i = o[t.format] || o.default;
                            window.clipboardData.setData(i, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), l.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), i = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, e)
            }
        } finally {
            l && ("function" == typeof l.removeRange ? l.removeRange(s) : l.removeAllRanges()), c && document.body.removeChild(c), a()
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
})), r.register("jDe0H", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        i = r("fBuQJ"),
        a = r("fywoC");
    const s = a.lazy((() => r("dJoBG")));
    var l = e => (0, o.jsx)(i.default, {
        open: e.visible,
        onCancel: e.close,
        footer: null,
        closable: !0,
        children: (0, o.jsx)("div", {
            className: "maxAll flex-center",
            children: (0, o.jsx)(a.Suspense, {
                fallback: null,
                children: (0, o.jsx)(s, {
                    link: e.link
                })
            })
        })
    })
})), r.register("dJoBG", (function(e, t) {
    e.exports = Promise.all([import("./" + r("ihc6Q").resolve("7pIGN")), import("./" + r("ihc6Q").resolve("i8Pm1"))]).then((() => r("2WtBw")))
})), r.register("6zdGc", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        a = r("69SUA"),
        s = r("py2Xr"),
        l = r("kyvf1");
    let c, u, d, f = e => e;
    var p = e => (0, o.jsxs)(h, {
        children: [(0, o.jsx)(g, {
            children: "KitCollab"
        }), (0, o.jsx)(m, {
            onClick: e.openSettings,
            children: (0, o.jsx)(s.default, {
                name: "fas fa-cog",
                style: {
                    color: "#616161"
                }
            })
        })]
    });
    const h = i.default.div.attrs({
            className: "flex maxWidth between"
        })(c || (c = f`
  line-height: 1;
  margin-top: 10px;
  align-items: flex-start;
`)),
        g = i.default.div(u || (u = f`
  font-size: 42px;
  font-weight: ${0};
`), a.FontWeights.UltraBold),
        m = (0, i.default)(l.default)(d || (d = f`
  font-size: 24px;
`))
})), r.register("2aVfY", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv"),
        i = r("hjoUW"),
        a = r("93yIm"),
        s = r("8FJCY"),
        l = r("fywoC"),
        c = r("2FDaO"),
        u = r("69SUA"),
        d = r("6V5qK"),
        f = r("lpEVe"),
        p = r("dwAz0"),
        h = r("iMOcM");
    let g, m, v = e => e;
    var x = (0, f.observer)((e => {
        const {
            id: t
        } = e, {
            kitCollab: r
        } = l.useContext(p.default), [n, c, f] = (0, h.useBoolean)(!1), g = {
            _id: `q-${t}`,
            text: e.question.text,
            type: e.question.type,
            answers: e.question.answers.map(((e, r) => ({
                _id: `${t}-answer-${r}`,
                correct: e.correct,
                text: e.text
            })))
        }, m = t => {
            (0, h.request)({
                url: "/api/kitcollab/question/action",
                data: {
                    sessionId: e.sessionId,
                    questionId: e.id,
                    accepted: t
                }
            })
        }, v = () => {
            r.questions.replace(r.questions.filter((t => t._id !== e.id))), r.waitingQuestions = r.questions.length
        };
        return (0, o.jsx)(s.default, {
            question: g,
            showAllAnswers: !0,
            blockToggleShowAnswers: !0,
            customStyle: {
                marginBottom: 20
            },
            customBottomComponent: (0, o.jsxs)(y, {
                children: [(0, o.jsxs)("div", {
                    className: "flex",
                    children: [(0, o.jsx)(a.default, {
                        type: "primary",
                        onClick: () => {
                            n || (c(), m(!0), (0, d.default)([{
                                questionText: g.text,
                                type: g.type,
                                answers: g.answers.map((e => ({
                                    text: e.text,
                                    correct: e.correct,
                                    textType: e.textType
                                }))),
                                source: "collab",
                                kitId: e.kitId
                            }], (() => {
                                f(), v()
                            }), {
                                stay: !0
                            }))
                        },
                        loading: n,
                        icon: (0, o.jsx)(i.default, {}),
                        children: "Add To Kit"
                    }), (0, o.jsx)(a.default, {
                        danger: !0,
                        type: "primary",
                        onClick: () => {
                            m(!1), v()
                        },
                        style: {
                            marginLeft: 5
                        },
                        children: "Reject"
                    })]
                }), (0, o.jsxs)(b, {
                    children: ["Submitted by", " ", (0, o.jsx)("span", {
                        style: {
                            fontWeight: u.FontWeights.Bold
                        },
                        children: e.creatorName
                    })]
                })]
            })
        })
    }));
    const y = c.default.div.attrs({
            className: "maxWidth"
        })(g || (g = v`
  margin-top: 16px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  line-height: 1;
`)),
        b = c.default.div(m || (m = v`
  margin-top: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
`))
})), r.register("fPRw3", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = r("hxEiv"),
        i = r("lKmIF");
    r("fywoC");
    var a = r("2FDaO");
    let s, l, c, u = e => e;
    var d = () => (0, o.jsxs)(f, {
        children: [(0, o.jsx)(p, {}), (0, o.jsx)(h, {
            children: "No questions to review. Once new questions are submitted, you'll find them here."
        })]
    });
    const f = a.default.div.attrs({
            className: "flex-center flex-column maxWidth"
        })(s || (s = u`
  border-style: dashed;
  border-radius: 4px;
  border-color: ${0};
  padding: 50px;
  border-width: 3px;
`), i.default.BorderGray),
        p = a.default.img.attrs({
            src: "/client/img/editor/empty.svg"
        })(l || (l = u`
  height: 50px;
`)),
        h = a.default.div(c || (c = u`
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
  color: #263238;
`))
})), r.register("87JmJ", (function(t, n) {
    e(t.exports, "default", (function() {
        return O
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("fC6cp"),
        s = r("9xElQ"),
        l = r("cy4A6"),
        c = r("fBuQJ"),
        u = r("l89Zc"),
        d = r("2FDaO"),
        f = r("lKmIF"),
        p = r("kyvf1"),
        h = r("69SUA"),
        g = r("b1oE9"),
        m = r("iMOcM"),
        v = r("lpEVe"),
        x = r("dwAz0"),
        y = r("lz1ZO"),
        b = r("ih5vo");
    let C, w, k, j, S, E = e => e;
    var O = (0, v.observer)((e => {
        const {
            kitCollab: t
        } = i.useContext(x.default), [r, n, d] = (0, m.useBoolean)(!1);
        return (0, o.jsx)(s.default, {
            open: e.open,
            onClose: e.close,
            width: 500,
            closable: !0,
            children: (0, o.jsxs)(I, {
                children: [(0, o.jsxs)(M, {
                    children: [(0, o.jsxs)(T, {
                        children: [(0, o.jsx)(N, {
                            children: "Private KitCollab"
                        }), (0, o.jsxs)(F, {
                            children: ["Only allow students in your classes to contribute questions. If you haven't already created a class, you can do so", " ", (0, o.jsx)(p.default, {
                                to: g.NEW_CLASS,
                                target: "_blank",
                                children: "here."
                            })]
                        })]
                    }), (0, o.jsx)(u.default, {
                        loading: r,
                        checked: !t.isPublic,
                        onChange: () => {
                            r || (n(), (0, m.request)({
                                url: `/api/kitcollab/toggle-privacy/${t.sessionId}`,
                                success: () => {
                                    t.isPublic = !t.isPublic
                                },
                                both: () => d()
                            }))
                        }
                    })]
                }), (0, o.jsx)(a.default, {}), (0, o.jsxs)("div", {
                    className: "flex-column",
                    children: [(0, o.jsx)(p.default, {
                        onClick: () => {
                            (0, m.request)({
                                url: `/api/kitcollab/session/reset-link/${t.sessionId}`,
                                success: r => {
                                    t.sessionId = r, c.default.success({
                                        title: "KitCollab link regenerated!",
                                        content: "The old link will no longer work for contributing questions. Please send students the updated link."
                                    }), e.close()
                                },
                                error: e => (0, m.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "There was an error. Please try again later."
                                    }
                                })
                            })
                        },
                        style: {
                            marginBottom: 5
                        },
                        children: "Regenerate KitCollab link"
                    }), (0, o.jsx)(p.default, {
                        onClick: () => {
                            c.default.confirm({
                                title: "Are you sure?",
                                content: "Disabling KitCollab will also delete any questions waiting to be accepted.",
                                okText: "Yes",
                                onOk: () => {
                                    (0, m.request)({
                                        url: "/api/kitcollab/session/delete",
                                        data: {
                                            sessionId: t.sessionId
                                        },
                                        success: () => {
                                            t.enabled = !1, t.sessionId = "", t.questions.replace([]), t.waitingQuestions = 0, t.hasFetchedFirstBatchOfQuestions = !1, (0, y.default)(b.editorBase), l.default.success("KitCollab disabled!")
                                        },
                                        error: e => {
                                            (0, m.throwMessageError)({
                                                e: e,
                                                default: {
                                                    title: "There was an error disabling KitCollab. Please try again later."
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        },
                        children: "Disable KitCollab"
                    })]
                })]
            })
        })
    }));
    const I = d.default.div(C || (C = E`
  color: ${0};
  font-family: ${0};
  font-size: 18px;
  padding-top: 35px;
`), f.default.Black, h.Fonts.SFPro),
        M = d.default.div.attrs({
            className: "flex vc"
        })(w || (w = E``)),
        T = d.default.div(k || (k = E`
  margin-right: 40px;
`)),
        N = d.default.div(j || (j = E`
  font-size: 24px;
  font-weight: ${0};
`), h.FontWeights.Bold),
        F = d.default.div(S || (S = E``))
})), r.register("RuMM8", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("iMOcM"),
        i = r("5O6vk");
    var a = () => {
        i.default.kitCollab.sessionId && (0, o.request)({
            url: `/api/kitcollab/questions/${i.default.kitCollab.sessionId}`,
            success: e => {
                i.default.kitCollab.questions.replace(e)
            },
            both: () => {
                i.default.kitCollab.hasFetchedFirstBatchOfQuestions = !0
            }
        })
    }
})), r.register("7dsDj", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv"),
        i = r("93yIm"),
        a = r("fC6cp"),
        s = r("69SUA"),
        l = r("iMOcM"),
        c = r("lpEVe"),
        u = r("fywoC"),
        d = r("2FDaO"),
        f = r("dwAz0");
    let p, h, g, m, v = e => e;
    var x = (0, c.observer)((() => {
        const {
            kitDetails: {
                id: e
            },
            kitCollab: t
        } = u.useContext(f.default), [r, n, s] = (0, l.useBoolean)(!1);
        return (0, o.jsxs)(y, {
            children: [(0, o.jsx)(b, {}), (0, o.jsx)(C, {
                children: "KitCollab"
            }), (0, o.jsx)(w, {
                children: "KitCollab allows anybody, including students, to contribute questions to your kit! Build a kit together in real-time, or asynchronously!"
            }), (0, o.jsx)(a.default, {}), (0, o.jsx)(i.default, {
                style: {
                    height: 60
                },
                size: "large",
                block: !0,
                type: "primary",
                loading: r,
                onClick: () => {
                    n(), (0, l.request)({
                        url: "/api/kitcollab/session/create",
                        data: {
                            gameId: e
                        },
                        success: e => {
                            t.sessionId = e, t.enabled = !0
                        },
                        error: e => {
                            (0, l.throwMessageError)({
                                e: e,
                                default: {
                                    title: "There was an error enabling KitCollab. Please try again later."
                                }
                            })
                        },
                        both: () => s
                    })
                },
                children: "Enable KitCollab"
            })]
        })
    }));
    const y = d.default.div.attrs({
            className: "flex-center flex-column maxAll"
        })(p || (p = v``)),
        b = d.default.img.attrs({
            src: "/client/img/editor/kitcollab.svg"
        })(h || (h = v`
  height: 140px;
`)),
        C = d.default.div(g || (g = v`
  font-size: 48px;
  margin-top: 10px;
  font-weight: ${0};
`), s.FontWeights.UltraBold),
        w = d.default.div(m || (m = v`
  font-size: 18px;
  margin-top: 2px;
`))
})), r.register("2367p", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("lpEVe"),
        i = r("fywoC"),
        a = r("2ixOa"),
        s = r("7a91g"),
        l = r("dwAz0"),
        c = r("RuMM8");
    var u = (0, o.observer)((() => {
        const {
            kitCollab: e
        } = i.useContext(l.default);
        i.useEffect((() => {
            (0, a.default)()
        }), []);
        return (0, s.useIntervalWhen)((() => {
            e.panelOpen && e.enabled && e.sessionId && (0, c.default)()
        }), 5e3), (0, s.useIntervalWhen)((() => {
            !e.panelOpen && e.sessionId && (0, a.default)()
        }), 1e4), null
    }))
})), r.register("2ixOa", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("iMOcM"),
        i = r("5O6vk");
    var a = () => {
        (0, o.isStudent)() || (0, o.request)({
            url: `/api/kitcollab/session/${i.default.kitDetails.id}`,
            success: e => {
                i.default.kitCollab.sessionId = e.sessionId, i.default.kitCollab.enabled = !0, i.default.kitCollab.waitingQuestions = e.questions, i.default.kitCollab.isPublic = e.isPublic
            },
            error: () => {
                i.default.kitCollab.sessionId = "", i.default.kitCollab.enabled = !1, i.default.kitCollab.waitingQuestions = 0
            }
        })
    }
})), r.register("7a91g", (function(t, n) {
    e(t.exports, "useIntervalWhen", (function() {
        return i
    }));
    var o = r("fywoC");

    function i(e, t, r, n) {
        void 0 === t && (t = 0), void 0 === r && (r = !0), void 0 === n && (n = !1);
        var i = (0, o.useRef)();

        function a() {
            i.current && i.current()
        }(0, o.useEffect)((function() {
            i.current = e
        })), (0, o.useEffect)((function() {
            if ("undefined" != typeof window) {
                if (r) {
                    n && a();
                    var e = window.setInterval(a, t);
                    return function() {
                        window.clearInterval(e)
                    }
                }
            } else console.warn("useIntervalWhen: window is undefined.")
        }), [r, t])
    }
})), r.register("4Rzth", (function(t, n) {
    e(t.exports, "default", (function() {
        return w
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        a = r("hxEiv"),
        s = r("fywoC"),
        l = r("fBuQJ"),
        c = r("30u1u"),
        u = r("ePZZc"),
        d = r("lpEVe"),
        f = r("iMOcM"),
        p = r("5O6vk"),
        h = r("ih5vo"),
        g = r("lz1ZO"),
        m = r("b1oE9"),
        v = r("iROck"),
        x = r("8p0tB");
    let y;
    var b;
    (b = y || (y = {})).details = "details", b.image = "image";
    let C = class extends s.Component {
        componentDidMount() {
            this.props.kitDetails.id && (0, v.NavigateTo)(m.DASHBOARD)
        }
        render() {
            return (0, a.jsx)("div", {
                children: (0, a.jsx)(l.default, {
                    open: !0,
                    style: {
                        top: 20
                    },
                    footer: null,
                    closable: !1,
                    children: (0, a.jsxs)("div", {
                        style: {
                            height: 510
                        },
                        className: "disable-scrollbars scroll",
                        children: [this.state.stage === y.details && (0, a.jsx)(c.default, {
                            onNext: this.onKitDetails
                        }), this.state.stage === y.image && (0, a.jsx)(u.default, {
                            title: "Choose a cover photo",
                            defaultSearchTerm: this.props.kitDetails.title,
                            onImagePicked: this.onImagePicked
                        })]
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                stage: y.details,
                creatingKit: !1,
                createdKit: !1
            }), (0, o.default)(this, "onKitDetails", (() => {
                this.switchToImageScreen()
            })), (0, o.default)(this, "onImagePicked", (e => {
                this.state.createdKit || this.state.creatingKit || (this.setState({
                    creatingKit: !0
                }), this.props.kitDetails.image = e, (0, f.request)({
                    url: "/api/v1/editor/create",
                    method: "POST",
                    data: {
                        title: this.props.kitDetails.title,
                        image: e,
                        gradeLevel: this.props.kitDetails.gradeLevel,
                        language: this.props.kitDetails.language,
                        subject: this.props.kitDetails.subject,
                        isPrivate: (0, f.isStudent)()
                    },
                    success: e => {
                        (0, x.AnalyticsTrackEvent)({
                            event: "kit_created"
                        }), this.setState({
                            createdKit: !0
                        });
                        const {
                            kitDetails: t,
                            editor: r
                        } = p.default;
                        r.editSessionCounted = !0, t.id = e._id, t.title = e.title, t.image = e.image, t.language = e.lang, t.gradeLevel = e.gradeLevel, t.privacy = e.privacy, (0, g.default)(h.editorBase)
                    },
                    error: e => l.default.error({
                        title: "Error Creating Kit",
                        content: e && e.message && e.message.text ? e.message.text : "Please try again"
                    }),
                    both: () => this.setState({
                        creatingKit: !1
                    })
                }))
            })), (0, o.default)(this, "switchToImageScreen", (() => this.setState({
                stage: y.image
            }))), (0, o.default)(this, "switchToDetailsScreen", (() => this.setState({
                stage: y.details
            })))
        }
    };
    C = (0, i.__decorate)([(0, d.inject)("kitDetails"), d.observer], C);
    var w = C
})), r.register("8p0tB", (function(t, n) {
    e(t.exports, "AnalyticsTrackEvent", (function() {
        return l
    }));
    var o = r("6fFlL"),
        i = r("iMOcM"),
        a = r("dOsOD"),
        s = r("amvOw");
    const l = e => {
        var t, r, n;
        if ((window.gtag && !(null === (t = e.blockedSource) || void 0 === t ? void 0 : t.google) && window.gtag("event", e.event, e.properties), a.AnalyticsFlags.educatorOnly) && (null === (n = (0, i.getUser)()) || void 0 === n ? void 0 : n.accountType) !== o.default.educator) return;
        (null === (r = e.blockedSource) || void 0 === r ? void 0 : r.posthog) || (0, s.TrackPostHogEvent)({
            event: e.event,
            properties: e.properties,
            force: e.forcePostHog
        })
    }
})), r.register("lqbc4", (function(t, n) {
    e(t.exports, "useWillUnmount", (function() {
        return i
    }));
    var o = r("fywoC");

    function i(e) {
        (0, o.useEffect)((function() {
            return e
        }), [])
    }
})), r.register("hy09K", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("eLGc8"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "PaperClipOutlined";
    var c = i.forwardRef(l)
})), r.register("eLGc8", (function(t, r) {
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
                    d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"
                }
            }]
        },
        name: "paper-clip",
        theme: "outlined"
    }
})), r.register("5WQCk", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("wzfg8"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "PlayCircleOutlined";
    var c = i.forwardRef(l)
})), r.register("wzfg8", (function(t, r) {
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
                    d: "M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"
                }
            }]
        },
        name: "play-circle",
        theme: "outlined"
    }
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("iI4DW"),
        i = r("fywoC"),
        a = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: l
            } = n, c = i.useRef(null), [u, d] = i.useState(0), [f, p] = i.useState(0), [h, g] = (0, o.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: m
            } = i.useContext(a.ConfigContext), v = m(t || "select", s);
            return i.useEffect((() => {
                if (g(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            d(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const o = r ? `.${r(v)}` : `.${v}-dropdown`,
                                i = null === (n = c.current) || void 0 === n ? void 0 : n.querySelector(o);
                            i && (clearInterval(t), e.observe(i))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), i.createElement(a.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, i.createElement("div", {
                ref: c,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: f
                }
            }, i.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, l), {
                    margin: 0
                }),
                open: h,
                visible: h,
                getPopupContainer: () => c.current
            }))))
        }
    }
})), r.register("hacAX", (function(t, n) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var o = r("lt5sb"),
        i = r("aWAHQ");
    const a = new(0, o.Keyframes)("antMoveDownIn", {
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
                inKeyframes: a,
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
                outKeyframes: a
            } = f[t];
            return [(0, i.initMotion)(n, o, a, e.motionDurationMid), {
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
        return h
    }), (function(e) {
        return h = e
    })), e(n.exports, "default", (function() {
        return v
    }), (function(e) {
        return v = e
    }));
    var i = r("fe1on"),
        a = r("jyxW7"),
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
    const h = s.createContext({
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
    const m = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: o
        } = s.useContext(l.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: m,
            className: v,
            rootClassName: x,
            children: y,
            direction: b = "horizontal",
            prefixCls: C,
            split: w,
            style: k,
            wrap: j = !1
        } = e, S = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), E = (0, c.default)(), [O, I] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? g[e] : e || 0
        }(e)))), [u]), M = (0, a.default)(y, {
            keepEmpty: !0
        }), T = void 0 === m && "horizontal" === b ? "center" : m, N = r("space", C), [F, P] = (0, f.default)(N), R = t(i)(N, P, `${N}-${b}`, {
            [`${N}-rtl`]: "rtl" === o,
            [`${N}-align-${T}`]: T
        }, v, x), z = `${N}-item`, D = "rtl" === o ? "marginLeft" : "marginRight";
        let A = 0;
        const $ = M.map(((e, t) => {
                null != e && (A = t);
                const r = e && e.key || `${z}-${t}`;
                return s.createElement(d.default, {
                    className: z,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: D,
                    split: w,
                    wrap: j
                }, e)
            })),
            B = s.useMemo((() => ({
                horizontalSize: O,
                verticalSize: I,
                latestIndex: A,
                supportFlexGap: E
            })), [O, I, A, E]);
        if (0 === M.length) return null;
        const _ = {};
        return j && (_.flexWrap = "wrap", E || (_.marginBottom = -I)), E && (_.columnGap = O, _.rowGap = I), F(s.createElement("div", Object.assign({
            className: R,
            style: Object.assign(Object.assign({}, _), k)
        }, S), s.createElement(h.Provider, {
            value: B
        }, $)))
    };
    m.Compact = u.default;
    var v = m
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC"),
        i = r("azMeL"),
        a = () => {
            const [e, t] = o.useState(!1);
            return o.useEffect((() => {
                t((0, i.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC"),
        i = r("i5Qjx");

    function a(e) {
        let {
            className: t,
            direction: r,
            index: n,
            marginDirection: a,
            children: s,
            split: l,
            wrap: c
        } = e;
        const {
            horizontalSize: u,
            verticalSize: d,
            latestIndex: f,
            supportFlexGap: p
        } = o.useContext(i.SpaceContext);
        let h = {};
        return p || ("vertical" === r ? n < f && (h = {
            marginBottom: u / (l ? 2 : 1)
        }) : h = Object.assign(Object.assign({}, n < f && {
            [a]: u / (l ? 2 : 1)
        }), c && {
            paddingBottom: d
        })), null == s ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: h
        }, s), n < f && l && o.createElement("span", {
            className: `${t}-split`,
            style: h
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
        return i
    }));
    var o = r("fywoC");

    function i(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, o.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, o.useState)((function() {
                return t.matches
            })),
            n = r[0],
            i = r[1];
        return (0, o.useEffect)((function() {
            i(t.matches);
            var e = function(e) {
                return i(e.matches)
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
        i = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var a = i(r("fywoC"));

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = a.useState(s()),
            t = e[0],
            r = e[1];
        return a.useLayoutEffect((function() {
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
        i = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
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
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
            return i(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var s = a(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            o = s.useRef(),
            i = s.useCallback((function() {
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
                var e = new ResizeObserver(i);
                return e.observe(o.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [o, i]), n({
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
})), r.register("69bEv", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        i = r("4Gnmi"),
        a = r("fywoC");
    const s = a.lazy((() => r("9mi4b")));
    var l = e => {
        const t = e.hideSkeleton ? (0, o.jsx)("div", {
            className: "maxWidth"
        }) : (0, o.jsx)("div", {
            className: "maxWidth",
            children: (0, o.jsx)(i.default, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return (0, o.jsx)(a.Suspense, {
            fallback: t,
            children: (0, o.jsx)(s, {
                ...e
            })
        })
    }
})), r.register("9mi4b", (function(e, t) {
    e.exports = Promise.all([r("g2MeW")(new URL(r("ihc6Q").resolve("2nG1U"), import.meta.url).toString()), import("./" + r("ihc6Q").resolve("6iUO5"))]).then((() => r("jLITb")))
})), r.register("l5RHB", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("5xGm1"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "ClockCircleOutlined";
    var c = i.forwardRef(l)
})), r.register("5xGm1", (function(t, r) {
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
                    d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
                }
            }]
        },
        name: "clock-circle",
        theme: "outlined"
    }
})), r.register("lOxf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("cpDNt"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "TrophyOutlined";
    var c = i.forwardRef(l)
})), r.register("cpDNt", (function(t, r) {
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
                    d: "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"
                }
            }]
        },
        name: "trophy",
        theme: "outlined"
    }
})), r.register("bbvHy", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        normal: "\n  font-family: 'Product Sans', sans-serif;\n  font-weight: 400;\n",
        bold: "\n    font-family: 'Product Sans', sans-serif;\n    font-weight: 800;\n  ",
        black: "\n  font-family: 'Product Sans', sans-serif;\n  font-weight: 900;\n",
        fontFamilyName: "Product Sans, sans-serif"
    }
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("bVHCc"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "UsergroupAddOutlined";
    var c = i.forwardRef(l)
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
})), r.register("kVS28", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("4GmeK"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "LogoutOutlined";
    var c = i.forwardRef(l)
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
})), r.register("6gxPk", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("5D7Fe"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "DownOutlined";
    var c = i.forwardRef(l)
})), r.register("5D7Fe", (function(t, r) {
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
                    d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                }
            }]
        },
        name: "down",
        theme: "outlined"
    }
})), r.register("5vs73", (function(t, r) {
    e(t.exports, "CLASSIC", (function() {
        return n
    })), e(t.exports, "TEAMS", (function() {
        return o
    })), e(t.exports, "THANOS", (function() {
        return i
    })), e(t.exports, "BOSS_BATTLE", (function() {
        return a
    })), e(t.exports, "HUMAN_ZOMBIE_DEFENDING_HOMEBASE", (function() {
        return s
    })), e(t.exports, "LAVA", (function() {
        return l
    })), e(t.exports, "IMPOSTER", (function() {
        return c
    })), e(t.exports, "DRAW", (function() {
        return u
    })), e(t.exports, "PARDY", (function() {
        return d
    }));
    const n = "CLASSIC",
        o = "TEAMS",
        i = "THANOS",
        a = "BOSS_BATTLE",
        s = "HUMAN_ZOMBIE_DEFENDING_HOMEBASE",
        l = "LAVA",
        c = "IMPOSTER",
        u = "DRAW",
        d = "PARDY"
})), r.register("f9d7r", (function(t, r) {
    let n;
    var o;
    e(t.exports, "HookType", (function() {
        return n
    })), (o = n || (n = {})).selectBox = "selectBox", o.kit = "kit", o.number = "number"
})), r.register("9kZfj", (function(t, n) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return i
    }));
    var o = r("hrYih");
    const i = () => "annual-only" === o.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("5UEB4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "StarOutlined";
    var c = i.forwardRef(l)
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
})), r.register("3aHwG", (function(t, r) {
    let n;
    var o;
    e(t.exports, "MapModeType", (function() {
        return n
    })), (o = n || (n = {})).liveGame = "liveGame", o.assignment = "assignment"
})), r.register("56tQE", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("fywoC"),
        i = r("3KQc0"),
        a = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = o.useState((() => {
            var r, n;
            const o = e && "current" in e ? e.current : e;
            return o ? [o.offsetWidth, o.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, a.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, i.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("6rvT3"),
        i = r("9iNNJ"),
        a = r("3Yjty"),
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
            n = (0, a.default)(t);
        return (0, i.default)((() => {
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
        return i
    }));
    var i = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC");
    var i = e => {
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
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                t = o, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return n.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, n
    }
})), r.register("9Mv96", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("kqQIs"),
        i = r("2Af7I"),
        a = r("fywoC");
    r("djNMu");
    var s = r("aWdbz"),
        l = r("cY4lv"),
        c = r("kYx4h"),
        u = 44;

    function d(e) {
        var t, r, n;
        return t = e, r = 0, n = 1, e = (Math.min(Math.max(r, t), n) - r) / (n - r), e = (e -= 1) * e * e + 1
    }
    var f = a.forwardRef((function(e, t) {
            var r, n = e.classes,
                l = e.className,
                f = e.color,
                p = void 0 === f ? "primary" : f,
                h = e.disableShrink,
                g = void 0 !== h && h,
                m = e.size,
                v = void 0 === m ? 40 : m,
                x = e.style,
                y = e.thickness,
                b = void 0 === y ? 3.6 : y,
                C = e.value,
                w = void 0 === C ? 0 : C,
                k = e.variant,
                j = void 0 === k ? "indeterminate" : k,
                S = (0, i.default)(e, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                E = {},
                O = {},
                I = {};
            if ("determinate" === j || "static" === j) {
                var M = 2 * Math.PI * ((u - b) / 2);
                E.strokeDasharray = M.toFixed(3), I["aria-valuenow"] = Math.round(w), "static" === j ? (E.strokeDashoffset = "".concat(((100 - w) / 100 * M).toFixed(3), "px"), O.transform = "rotate(-90deg)") : (E.strokeDashoffset = "".concat((r = (100 - w) / 100, r * r * M).toFixed(3), "px"), O.transform = "rotate(".concat((270 * d(w / 70)).toFixed(3), "deg)"))
            }
            return a.createElement("div", (0, o.default)({
                className: (0, s.default)(n.root, l, "inherit" !== p && n["color".concat((0, c.default)(p))], {
                    indeterminate: n.indeterminate,
                    static: n.static
                } [j]),
                style: (0, o.default)({
                    width: v,
                    height: v
                }, O, x),
                ref: t,
                role: "progressbar"
            }, I, S), a.createElement("svg", {
                className: n.svg,
                viewBox: "".concat(22, " ").concat(22, " ").concat(u, " ").concat(u)
            }, a.createElement("circle", {
                className: (0, s.default)(n.circle, g && n.circleDisableShrink, {
                    indeterminate: n.circleIndeterminate,
                    static: n.circleStatic
                } [j]),
                style: E,
                cx: u,
                cy: u,
                r: (u - b) / 2,
                fill: "none",
                strokeWidth: b
            })))
        })),
        p = (0, l.default)((function(e) {
            return {
                root: {
                    display: "inline-block"
                },
                static: {
                    transition: e.transitions.create("transform")
                },
                indeterminate: {
                    animation: "$circular-rotate 1.4s linear infinite"
                },
                colorPrimary: {
                    color: e.palette.primary.main
                },
                colorSecondary: {
                    color: e.palette.secondary.main
                },
                svg: {
                    display: "block"
                },
                circle: {
                    stroke: "currentColor"
                },
                circleStatic: {
                    transition: e.transitions.create("stroke-dashoffset")
                },
                circleIndeterminate: {
                    animation: "$circular-dash 1.4s ease-in-out infinite",
                    strokeDasharray: "80px, 200px",
                    strokeDashoffset: "0px"
                },
                "@keyframes circular-rotate": {
                    "0%": {
                        transformOrigin: "50% 50%"
                    },
                    "100%": {
                        transform: "rotate(360deg)"
                    }
                },
                "@keyframes circular-dash": {
                    "0%": {
                        strokeDasharray: "1px, 200px",
                        strokeDashoffset: "0px"
                    },
                    "50%": {
                        strokeDasharray: "100px, 200px",
                        strokeDashoffset: "-15px"
                    },
                    "100%": {
                        strokeDasharray: "100px, 200px",
                        strokeDashoffset: "-125px"
                    }
                },
                circleDisableShrink: {
                    animation: "none"
                }
            }
        }), {
            name: "MuiCircularProgress",
            flip: !1
        })(f)
})), r.register("lvQ9C", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("1HsHH"),
        s = r("iMOcM");
    var l = e => {
        const [t, r] = i.useState([]), [n] = i.useState(e.limit), [l, c] = i.useState(e.defaultPage), [u, d] = i.useState(!0), [f, p] = i.useState([]), [h, g] = i.useState(!1), m = i.useMemo((() => (e.modifyItems ? e.modifyItems(f) : f).map(((t, r) => e.toRender(t, r)))), [f.length, e.toRender]), v = () => {
            if (t.includes(l)) return;
            r((e => [...e, l]));
            const o = {
                page: l,
                limit: n
            };
            (0, s.request)({
                url: e.url,
                method: "post",
                cacheKey: e.cacheKey,
                data: e.modifyBody ? e.modifyBody(o) : o,
                success: (t, r) => {
                    e.onTotalItems && !h && (e.onTotalItems(t.totalItems), g(!0)), t.items.forEach((t => {
                        e.onItemFetched && e.onItemFetched(t, r)
                    })), p((e => [...e, ...t.items])), d(t.hasNextPage), c(t.nextPage)
                },
                error: () => {
                    e.onTotalItems && !h && (e.onTotalItems(0), g(!0)), d(!1)
                },
                both: () => r((e => e.filter((e => e !== o.page))))
            })
        };
        return i.useEffect(v, []), !u && e.forceEmptyMessage || !u && 0 === f.length && e.emptyMessage ? e.emptyMessage(f) : (0, o.jsxs)(a.default, {
            dataLength: f.length,
            hasMore: u,
            style: e.scrollStyle,
            next: v,
            loader: e.loader || (0, o.jsx)("div", {}),
            scrollThreshold: e.scrollThreshold,
            endMessage: e.endMessage ? e.endMessage(f) : null,
            scrollableTarget: e.scrollableTarget,
            children: [e.prefix ? e.prefix() : null, m]
        })
    }
})), r.register("cO2Su", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        a = r("lKmIF");
    let s;
    var l = e => (0, o.jsx)(c, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const c = i.default.div(s || (s = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${0};
  padding: 20px;
`), a.default.White)
})), r.register("bM2u5", (function(t, n) {
    e(t.exports, "GetHomepagePath", (function() {
        return l
    })), e(t.exports, "RedirectToHomepage", (function() {
        return c
    })), e(t.exports, "ReplaceToHomePage", (function() {
        return u
    }));
    var o = r("b1oE9"),
        i = r("bd8je"),
        a = r("iMOcM"),
        s = r("iROck");
    const l = () => (0, a.isLoggedIn)() ? (0, a.isStudent)() ? o.HOME : o.KITS : "/",
        c = () => {
            (0, s.NavigateTo)(l())
        },
        u = () => {
            i.history.replace(l())
        }
})), r.register("dFdNj", (function(t, n) {
    e(t.exports, "UpgradeModal_CopyKit", (function() {
        return a
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("46bRO");
    const a = {
        title: (0, o.jsx)(o.Fragment, {
            children: "Copy kits with Pro"
        }),
        description: (0, o.jsxs)(o.Fragment, {
            children: ["To copy kits and make them your own, upgrade to ", i.COMPANY_NAME, " Pro."]
        })
    }
})), r.register("eFy2j", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC");

    function i() {
        const [, e] = o.useReducer((e => e + 1), 0);
        return e
    }
})), r.register("gJKjM", (function(n, o) {
    e(n.exports, "responsiveArray", (function() {
        return s
    })), e(n.exports, "default", (function() {
        return l
    }));
    var i = r("fywoC"),
        a = r("2tfup");
    const s = ["xxl", "xl", "lg", "md", "sm", "xs"];

    function l() {
        const [, e] = (0, a.useToken)(), r = (e => ({
            xs: `(max-width: ${e.screenXSMax}px)`,
            sm: `(min-width: ${e.screenSM}px)`,
            md: `(min-width: ${e.screenMD}px)`,
            lg: `(min-width: ${e.screenLG}px)`,
            xl: `(min-width: ${e.screenXL}px)`,
            xxl: `(min-width: ${e.screenXXL}px)`
        }))((e => {
            const t = e,
                r = [].concat(s).reverse();
            return r.forEach(((e, n) => {
                const o = e.toUpperCase(),
                    i = `screen${o}Min`,
                    a = `screen${o}`;
                if (!(t[i] <= t[a])) throw new Error(`${i}<=${a} fails : !(${t[i]}<=${t[a]})`);
                if (n < r.length - 1) {
                    const e = `screen${o}Max`;
                    if (!(t[a] <= t[e])) throw new Error(`${a}<=${e} fails : !(${t[a]}<=${t[e]})`);
                    const i = `screen${r[n+1].toUpperCase()}Min`;
                    if (!(t[e] <= t[i])) throw new Error(`${e}<=${i} fails : !(${t[e]}<=${t[i]})`)
                }
            })), e
        })(e));
        return t(i).useMemo((() => {
            const e = new Map;
            let t = -1,
                n = {};
            return {
                matchHandlers: {},
                dispatch: t => (n = t, e.forEach((e => e(n))), e.size >= 1),
                subscribe(r) {
                    return e.size || this.register(), t += 1, e.set(t, r), r(n), t
                },
                unsubscribe(t) {
                    e.delete(t), e.size || this.unregister()
                },
                unregister() {
                    Object.keys(r).forEach((e => {
                        const t = r[e],
                            n = this.matchHandlers[t];
                        null == n || n.mql.removeListener(null == n ? void 0 : n.listener)
                    })), e.clear()
                },
                register() {
                    Object.keys(r).forEach((e => {
                        const t = r[e],
                            o = t => {
                                let {
                                    matches: r
                                } = t;
                                this.dispatch(Object.assign(Object.assign({}, n), {
                                    [e]: r
                                }))
                            },
                            i = window.matchMedia(t);
                        i.addListener(o), this.matchHandlers[t] = {
                            mql: i,
                            listener: o
                        }, o(i)
                    }))
                },
                responsiveMap: r
            }
        }), [e])
    }
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function o(e) {
        var t, r, o = (0, n.lazy)(e),
            i = (0, n.forwardRef)((function(e, r) {
                var i = (0, n.useRef)(null != t ? t : o);
                return (0, n.createElement)(i.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return i.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, i
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
        i = r("fywoC"),
        a = r("8N8s4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "QuestionCircleOutlined";
    var c = i.forwardRef(l)
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
})), r.register("c6BvM", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("hwpEJ"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "ShareAltOutlined";
    var c = i.forwardRef(l)
})), r.register("hwpEJ", (function(t, r) {
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
                    d: "M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"
                }
            }]
        },
        name: "share-alt",
        theme: "outlined"
    }
})), r.register("kxv2V", (function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    } : e.exports = function(e, t) {
        if (t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        }
    }
})), r.register("lJSKF", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("kQLx6");
    var a = e => {
        const t = (0, i.use100vh)();
        return (0, o.jsx)("div", {
            style: {
                height: t,
                width: "100%"
            },
            className: e.className,
            children: e.children
        })
    }
})), r.register("kQLx6", (function(n, o) {
    e(n.exports, "use100vh", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var i = r("fywoC"),
        a = function() {
            return a = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, a.apply(this, arguments)
        },
        s = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        },
        l = !1,
        c = (0, i.forwardRef)((function(e, r) {
            var n = e.style,
                o = s(e, ["style"]),
                c = u();
            !l && (null == n ? void 0 : n.height) && (l = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
            var d = a(a({}, n), {
                height: c ? c + "px" : "100vh"
            });
            return t(i).createElement("div", a({
                ref: r,
                style: d
            }, o))
        }));
    c.displayName = "Div100vh";

    function u() {
        var e = (0, i.useState)(d),
            t = e[0],
            r = e[1],
            n = function() {
                var e = (0, i.useState)(!1),
                    t = e[0],
                    r = e[1];
                return (0, i.useEffect)((function() {
                    f() && r(!0)
                }), []), t
            }();
        return (0, i.useEffect)((function() {
            if (n) return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                };

            function e() {
                var e = d();
                r(e)
            }
        }), [n]), n ? t : null
    }

    function d() {
        return f() ? window.innerHeight : null
    }

    function f() {
        return "undefined" != typeof window && "undefined" != typeof document
    }
})), r.register("kPX2r", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("1qdsf"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "SaveOutlined";
    var c = i.forwardRef(l)
})), r.register("1qdsf", (function(t, r) {
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
                    d: "M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"
                }
            }]
        },
        name: "save",
        theme: "outlined"
    }
})), r.register("4eEdH", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        i = r("fywoC"),
        a = r("ddWN5"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    l.displayName = "DownloadOutlined";
    var c = i.forwardRef(l)
})), r.register("ddWN5", (function(t, r) {
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
                    d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "download",
        theme: "outlined"
    }
})), r.register("eMRqp", (function(t, n) {
    e(t.exports, "useQuery", (function() {
        return s
    }));
    var o = r("46kpL"),
        i = r("bo3H2"),
        a = r("bncSc");

    function s(e, t, r) {
        const n = (0, o.parseQueryArgs)(e, t, r);
        return (0, a.useBaseQuery)(n, i.QueryObserver)
    }
})), r.register("bo3H2", (function(t, n) {
    e(t.exports, "QueryObserver", (function() {
        return c
    }));
    var o = r("46kpL"),
        i = r("j6pnp"),
        a = r("5uWxq"),
        s = r("6GJQG"),
        l = r("bgjsc");
    class c extends s.Subscribable {
        bindMethods() {
            this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
        }
        onSubscribe() {
            1 === this.listeners.length && (this.currentQuery.addObserver(this), u(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
        }
        onUnsubscribe() {
            this.listeners.length || this.destroy()
        }
        shouldFetchOnReconnect() {
            return d(this.currentQuery, this.options, this.options.refetchOnReconnect)
        }
        shouldFetchOnWindowFocus() {
            return d(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
        }
        destroy() {
            this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
        }
        setOptions(e, t) {
            const r = this.options,
                n = this.currentQuery;
            if (this.options = this.client.defaultQueryOptions(e), (0, o.shallowEqualObjects)(r, this.options) || this.client.getQueryCache().notify({
                    type: "observerOptionsUpdated",
                    query: this.currentQuery,
                    observer: this
                }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw new Error("Expected enabled to be a boolean");
            this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
            const i = this.hasListeners();
            i && f(this.currentQuery, n, this.options, r) && this.executeFetch(), this.updateResult(t), !i || this.currentQuery === n && this.options.enabled === r.enabled && this.options.staleTime === r.staleTime || this.updateStaleTimeout();
            const a = this.computeRefetchInterval();
            !i || this.currentQuery === n && this.options.enabled === r.enabled && a === this.currentRefetchInterval || this.updateRefetchInterval(a)
        }
        getOptimisticResult(e) {
            const t = this.client.getQueryCache().build(this.client, e);
            return this.createResult(t, e)
        }
        getCurrentResult() {
            return this.currentResult
        }
        trackResult(e) {
            const t = {};
            return Object.keys(e).forEach((r => {
                Object.defineProperty(t, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackedProps.add(r), e[r])
                })
            })), t
        }
        getCurrentQuery() {
            return this.currentQuery
        }
        remove() {
            this.client.getQueryCache().remove(this.currentQuery)
        }
        refetch({
            refetchPage: e,
            ...t
        } = {}) {
            return this.fetch({
                ...t,
                meta: {
                    refetchPage: e
                }
            })
        }
        fetchOptimistic(e) {
            const t = this.client.defaultQueryOptions(e),
                r = this.client.getQueryCache().build(this.client, t);
            return r.isFetchingOptimistic = !0, r.fetch().then((() => this.createResult(r, t)))
        }
        fetch(e) {
            var t;
            return this.executeFetch({
                ...e,
                cancelRefetch: null == (t = e.cancelRefetch) || t
            }).then((() => (this.updateResult(), this.currentResult)))
        }
        executeFetch(e) {
            this.updateQuery();
            let t = this.currentQuery.fetch(this.options, e);
            return null != e && e.throwOnError || (t = t.catch(o.noop)), t
        }
        updateStaleTimeout() {
            if (this.clearStaleTimeout(), o.isServer || this.currentResult.isStale || !(0, o.isValidTimeout)(this.options.staleTime)) return;
            const e = (0, o.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
            this.staleTimeoutId = setTimeout((() => {
                this.currentResult.isStale || this.updateResult()
            }), e)
        }
        computeRefetchInterval() {
            var e;
            return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e
        }
        updateRefetchInterval(e) {
            this.clearRefetchInterval(), this.currentRefetchInterval = e, !o.isServer && !1 !== this.options.enabled && (0, o.isValidTimeout)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval((() => {
                (this.options.refetchIntervalInBackground || a.focusManager.isFocused()) && this.executeFetch()
            }), this.currentRefetchInterval))
        }
        updateTimers() {
            this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
        }
        clearStaleTimeout() {
            this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
        }
        clearRefetchInterval() {
            this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
        }
        createResult(e, t) {
            const r = this.currentQuery,
                n = this.options,
                i = this.currentResult,
                a = this.currentResultState,
                s = this.currentResultOptions,
                c = e !== r,
                d = c ? e.state : this.currentQueryInitialState,
                h = c ? this.currentResult : this.previousQueryResult,
                {
                    state: g
                } = e;
            let m, {
                    dataUpdatedAt: v,
                    error: x,
                    errorUpdatedAt: y,
                    fetchStatus: b,
                    status: C
                } = g,
                w = !1,
                k = !1;
            if (t._optimisticResults) {
                const o = this.hasListeners(),
                    i = !o && u(e, t),
                    a = o && f(e, r, t, n);
                (i || a) && (b = (0, l.canFetch)(e.options.networkMode) ? "fetching" : "paused", v || (C = "loading")), "isRestoring" === t._optimisticResults && (b = "idle")
            }
            if (t.keepPreviousData && !g.dataUpdatedAt && null != h && h.isSuccess && "error" !== C) m = h.data, v = h.dataUpdatedAt, C = h.status, w = !0;
            else if (t.select && void 0 !== g.data)
                if (i && g.data === (null == a ? void 0 : a.data) && t.select === this.selectFn) m = this.selectResult;
                else try {
                    this.selectFn = t.select, m = t.select(g.data), m = (0, o.replaceData)(null == i ? void 0 : i.data, m, t), this.selectResult = m, this.selectError = null
                } catch (e) {
                    this.selectError = e
                } else m = g.data;
            if (void 0 !== t.placeholderData && void 0 === m && "loading" === C) {
                let e;
                if (null != i && i.isPlaceholderData && t.placeholderData === (null == s ? void 0 : s.placeholderData)) e = i.data;
                else if (e = "function" == typeof t.placeholderData ? t.placeholderData() : t.placeholderData, t.select && void 0 !== e) try {
                    e = t.select(e), this.selectError = null
                } catch (e) {
                    this.selectError = e
                }
                void 0 !== e && (C = "success", m = (0, o.replaceData)(null == i ? void 0 : i.data, e, t), k = !0)
            }
            this.selectError && (x = this.selectError, m = this.selectResult, y = Date.now(), C = "error");
            const j = "fetching" === b,
                S = "loading" === C,
                E = "error" === C;
            return {
                status: C,
                fetchStatus: b,
                isLoading: S,
                isSuccess: "success" === C,
                isError: E,
                isInitialLoading: S && j,
                data: m,
                dataUpdatedAt: v,
                error: x,
                errorUpdatedAt: y,
                failureCount: g.fetchFailureCount,
                failureReason: g.fetchFailureReason,
                errorUpdateCount: g.errorUpdateCount,
                isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
                isFetchedAfterMount: g.dataUpdateCount > d.dataUpdateCount || g.errorUpdateCount > d.errorUpdateCount,
                isFetching: j,
                isRefetching: j && !S,
                isLoadingError: E && 0 === g.dataUpdatedAt,
                isPaused: "paused" === b,
                isPlaceholderData: k,
                isPreviousData: w,
                isRefetchError: E && 0 !== g.dataUpdatedAt,
                isStale: p(e, t),
                refetch: this.refetch,
                remove: this.remove
            }
        }
        updateResult(e) {
            const t = this.currentResult,
                r = this.createResult(this.currentQuery, this.options);
            if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, o.shallowEqualObjects)(r, t)) return;
            this.currentResult = r;
            const n = {
                cache: !0
            };
            !1 !== (null == e ? void 0 : e.listeners) && (() => {
                if (!t) return !0;
                const {
                    notifyOnChangeProps: e
                } = this.options;
                if ("all" === e || !e && !this.trackedProps.size) return !0;
                const r = new Set(null != e ? e : this.trackedProps);
                return this.options.useErrorBoundary && r.add("error"), Object.keys(this.currentResult).some((e => {
                    const n = e;
                    return this.currentResult[n] !== t[n] && r.has(n)
                }))
            })() && (n.listeners = !0), this.notify({
                ...n,
                ...e
            })
        }
        updateQuery() {
            const e = this.client.getQueryCache().build(this.client, this.options);
            if (e === this.currentQuery) return;
            const t = this.currentQuery;
            this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
        }
        onQueryUpdate(e) {
            const t = {};
            "success" === e.type ? t.onSuccess = !e.manual : "error" !== e.type || (0, l.isCancelledError)(e.error) || (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
        }
        notify(e) {
            i.notifyManager.batch((() => {
                var t, r, n, o;
                if (e.onSuccess) null == (t = (r = this.options).onSuccess) || t.call(r, this.currentResult.data), null == (n = (o = this.options).onSettled) || n.call(o, this.currentResult.data, null);
                else if (e.onError) {
                    var i, a, s, l;
                    null == (i = (a = this.options).onError) || i.call(a, this.currentResult.error), null == (s = (l = this.options).onSettled) || s.call(l, void 0, this.currentResult.error)
                }
                e.listeners && this.listeners.forEach((e => {
                    e(this.currentResult)
                })), e.cache && this.client.getQueryCache().notify({
                    query: this.currentQuery,
                    type: "observerResultsUpdated"
                })
            }))
        }
        constructor(e, t) {
            super(), this.client = e, this.options = t, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(t)
        }
    }

    function u(e, t) {
        return function(e, t) {
            return !(!1 === t.enabled || e.state.dataUpdatedAt || "error" === e.state.status && !1 === t.retryOnMount)
        }(e, t) || e.state.dataUpdatedAt > 0 && d(e, t, t.refetchOnMount)
    }

    function d(e, t, r) {
        if (!1 !== t.enabled) {
            const n = "function" == typeof r ? r(e) : r;
            return "always" === n || !1 !== n && p(e, t)
        }
        return !1
    }

    function f(e, t, r, n) {
        return !1 !== r.enabled && (e !== t || !1 === n.enabled) && (!r.suspense || "error" !== e.state.status) && p(e, r)
    }

    function p(e, t) {
        return e.isStaleByTime(t.staleTime)
    }
})), r.register("bncSc", (function(t, n) {
    e(t.exports, "useBaseQuery", (function() {
        return f
    }));
    var o = r("fywoC"),
        i = r("42epJ"),
        a = r("j6pnp"),
        s = r("6ZDNw"),
        l = r("dhSIL"),
        c = r("kRhzV"),
        u = r("fQMWh"),
        d = r("8aW72");

    function f(e, t) {
        const r = (0, l.useQueryClient)({
                context: e.context
            }),
            n = (0, c.useIsRestoring)(),
            f = (0, s.useQueryErrorResetBoundary)(),
            p = r.defaultQueryOptions(e);
        p._optimisticResults = n ? "isRestoring" : "optimistic", p.onError && (p.onError = a.notifyManager.batchCalls(p.onError)), p.onSuccess && (p.onSuccess = a.notifyManager.batchCalls(p.onSuccess)), p.onSettled && (p.onSettled = a.notifyManager.batchCalls(p.onSettled)), (0, d.ensureStaleTime)(p), (0, u.ensurePreventErrorBoundaryRetry)(p, f), (0, u.useClearResetErrorBoundary)(f);
        const [h] = o.useState((() => new t(r, p))), g = h.getOptimisticResult(p);
        if ((0, i.useSyncExternalStore)(o.useCallback((e => n ? () => {} : h.subscribe(a.notifyManager.batchCalls(e))), [h, n]), (() => h.getCurrentResult()), (() => h.getCurrentResult())), o.useEffect((() => {
                h.setOptions(p, {
                    listeners: !1
                })
            }), [p, h]), (0, d.shouldSuspend)(p, g, n)) throw (0, d.fetchOptimistic)(p, h, f);
        if ((0, u.getHasError)({
                result: g,
                errorResetBoundary: f,
                useErrorBoundary: p.useErrorBoundary,
                query: h.getCurrentQuery()
            })) throw g.error;
        return p.notifyOnChangeProps ? g : h.trackResult(g)
    }
})), r.register("42epJ", (function(t, n) {
    e(t.exports, "useSyncExternalStore", (function() {
        return o
    }));
    const o = r("7Y9S5").useSyncExternalStore
})), r.register("7Y9S5", (function(e, t) {
    e.exports = r("cszZ9")
})), r.register("cszZ9", (function(t, n) {
    /**
     * @license React
     * use-sync-external-store-shim.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var o;
    e(t.exports, "useSyncExternalStore", (function() {
        return o
    }), (function(e) {
        return o = e
    }));
    var i = r("fywoC");
    var a = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        s = i.useState,
        l = i.useEffect,
        c = i.useLayoutEffect,
        u = i.useDebugValue;

    function d(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var r = t();
            return !a(e, r)
        } catch (e) {
            return !0
        }
    }
    var f = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var r = t(),
            n = s({
                inst: {
                    value: r,
                    getSnapshot: t
                }
            }),
            o = n[0].inst,
            i = n[1];
        return c((function() {
            o.value = r, o.getSnapshot = t, d(o) && i({
                inst: o
            })
        }), [e, r, t]), l((function() {
            return d(o) && i({
                inst: o
            }), e((function() {
                d(o) && i({
                    inst: o
                })
            }))
        }), [e]), u(r), r
    };
    o = void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : f
})), r.register("6ZDNw", (function(t, n) {
    e(t.exports, "useQueryErrorResetBoundary", (function() {
        return s
    }));
    var o = r("fywoC");

    function i() {
        let e = !1;
        return {
            clearReset: () => {
                e = !1
            },
            reset: () => {
                e = !0
            },
            isReset: () => e
        }
    }
    const a = o.createContext(i()),
        s = () => o.useContext(a)
})), r.register("kRhzV", (function(t, n) {
    e(t.exports, "useIsRestoring", (function() {
        return a
    }));
    var o = r("fywoC");
    const i = o.createContext(!1),
        a = () => o.useContext(i);
    i.Provider
})), r.register("fQMWh", (function(t, n) {
    e(t.exports, "ensurePreventErrorBoundaryRetry", (function() {
        return a
    })), e(t.exports, "useClearResetErrorBoundary", (function() {
        return s
    })), e(t.exports, "getHasError", (function() {
        return l
    }));
    var o = r("fywoC"),
        i = r("gmsrf");
    const a = (e, t) => {
            (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1))
        },
        s = e => {
            o.useEffect((() => {
                e.clearReset()
            }), [e])
        },
        l = ({
            result: e,
            errorResetBoundary: t,
            useErrorBoundary: r,
            query: n
        }) => e.isError && !t.isReset() && !e.isFetching && (0, i.shouldThrowError)(r, [e.error, n])
})), r.register("gmsrf", (function(t, r) {
    function n(e, t) {
        return "function" == typeof e ? e(...t) : !!e
    }
    e(t.exports, "shouldThrowError", (function() {
        return n
    }))
})), r.register("8aW72", (function(t, r) {
    e(t.exports, "ensureStaleTime", (function() {
        return n
    })), e(t.exports, "shouldSuspend", (function() {
        return o
    })), e(t.exports, "fetchOptimistic", (function() {
        return i
    }));
    const n = e => {
            e.suspense && "number" != typeof e.staleTime && (e.staleTime = 1e3)
        },
        o = (e, t, r) => (null == e ? void 0 : e.suspense) && ((e, t) => e.isLoading && e.isFetching && !t)(t, r),
        i = (e, t, r) => t.fetchOptimistic(e).then((({
            data: t
        }) => {
            null == e.onSuccess || e.onSuccess(t), null == e.onSettled || e.onSettled(t, null)
        })).catch((t => {
            r.clearReset(), null == e.onError || e.onError(t), null == e.onSettled || e.onSettled(void 0, t)
        }))
})), r.register("36y6c", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        i = r("lqzWa"),
        a = r("6WS0O"),
        s = r("36UFo");
    var l = e => (0, o.jsx)(s.default, {
        emoji: e.emoji,
        title: e.title,
        description: e.description,
        children: (0, o.jsx)(i.default, {
            value: e.value,
            style: {
                width: e.customWidth || a.default.optionWidth
            },
            size: "large",
            onChange: t => e.onValueChanged(t),
            disabled: e.readOnly,
            children: e.options.map((t => (0, o.jsx)(i.default.Option, {
                value: t.value,
                children: t.name
            }, `${e.title||"no-title"}-${t.value}`)))
        })
    })
})), r.register("36UFo", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("lmxut");
    var a = e => (0, o.jsxs)(i.OptionContainer, {
        children: [(0, o.jsxs)(i.OptionInfoContainer, {
            children: [e.emoji ? (0, o.jsx)(i.OptionEmoji, {
                children: e.emoji
            }) : null, (0, o.jsxs)("div", {
                children: [(0, o.jsx)(i.OptionTitle, {
                    children: e.title
                }), e.description ? (0, o.jsx)(i.OptionDescription, {
                    children: e.description
                }) : null]
            })]
        }), (0, o.jsx)(i.OptionChangerContainer, {
            children: e.children
        })]
    })
})), r.register("lmxut", (function(t, n) {
    e(t.exports, "OptionContainer", (function() {
        return p
    })), e(t.exports, "OptionInfoContainer", (function() {
        return h
    })), e(t.exports, "OptionEmoji", (function() {
        return g
    })), e(t.exports, "OptionTitle", (function() {
        return m
    })), e(t.exports, "OptionDescription", (function() {
        return v
    })), e(t.exports, "OptionChangerContainer", (function() {
        return x
    }));
    var o = r("69SUA"),
        i = r("2FDaO");
    let a, s, l, c, u, d, f = e => e;
    const p = i.default.div.attrs({
            className: "maxWidth flex vc between"
        })(a || (a = f`
  box-sizing: border-box;
  padding: 13px 20px;
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 14px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.23s;
  will-change: transform;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
  }
`)),
        h = i.default.div.attrs({
            className: "flex vc"
        })(s || (s = f``)),
        g = i.default.div(l || (l = f`
  font-size: 23px;
  margin-right: 10px;
`)),
        m = i.default.div(c || (c = f`
  font-size: 23px;
  font-weight: ${0};
`), o.FontWeights.Bold),
        v = i.default.div(u || (u = f`
  font-size: 15px;
  margin-top: -2px;
`)),
        x = i.default.div(d || (d = f`
  flex-shrink: 0;
  margin-left: 25px;
`))
})), r.register("dbbFP", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        a = r("6WS0O"),
        s = r("1pMe1"),
        l = r("36UFo"),
        c = r("cmvpZ"),
        u = r("gaBR9");
    var d = e => {
        const t = i.useCallback((t => {
            if ((0, c.isNil)(t) && e.allowEmpty) return t;
            let r = t ? e.step ? Math.round(t / e.step) * e.step : t : 0;
            return !(0, c.isNil)(e.min) && r < e.min ? r = e.min : !(0, c.isNil)(e.max) && r > e.max && (r = e.max), r
        }), [e.max, e.min, e.step]);
        i.useEffect((() => {
            (0, c.isNil)(e.value) || e.max && e.value > e.max && r(t(e.max))
        }), [e.value, e.max]);
        const r = r => {
            e.onValueChanged(t(r))
        };
        return (0, o.jsx)(l.default, {
            emoji: e.emoji,
            title: e.title,
            description: e.description,
            children: (0, o.jsx)(u.default, {
                size: "large",
                formatter: s.default,
                value: e.value,
                max: e.max,
                min: e.min,
                step: e.step,
                style: {
                    width: e.customWidth || a.default.optionWidth
                },
                onChange: r,
                disabled: e.readOnly
            })
        })
    }
})), r.register("1pMe1", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("iMOcM");
    var i = e => "" === e ? "" : isNaN(Number(e)) ? String(e) : (0, o.numberWithCommas)(Number(e))
})), r.register("gaBR9", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        i = r("8K4sH"),
        a = r("fywoC"),
        s = r("iMOcM");
    var l = e => {
        const [t, r] = a.useState(e.value), [n, l] = a.useState(e.value), [c, u, d] = (0, s.useBoolean)(!1);
        a.useEffect((() => {
            l(e.value), r(e.value)
        }), [e.value]);
        return (0, o.jsx)(i.default, {
            ...e,
            value: c ? t : n,
            onChange: e => {
                r(e)
            },
            onFocus: u,
            onBlur: () => {
                t !== n && e.onChange(t), d(), r(e.value)
            }
        })
    }
})), r.register("1VXVp", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("cmvpZ"),
        i = r("f9d7r"),
        a = r("5mRwo");
    const s = (e, t) => {
        var r;
        return null === (r = JSON.parse(localStorage.getItem(a.LocalStorageNames.hookSavedOptions) || "{}")[t]) || void 0 === r ? void 0 : r[e]
    };
    var l = e => {
        var t;
        const {
            hookJSON: r,
            experienceId: n,
            kitId: a
        } = e, l = {};
        return null == r || null === (t = r.hooks) || void 0 === t || t.forEach((e => {
            if (e.type === i.HookType.kit) l[e.key] = a || "";
            else if (e.type == i.HookType.selectBox) {
                const t = e.options;
                if (t.options.length) {
                    let r = t.options.find((e => e === t.defaultOption)) || t.options[0];
                    if (n) {
                        const o = s(e.key, n);
                        if (o) {
                            const e = t.options.find((e => e === o));
                            e && (r = e)
                        }
                    }
                    r && (l[e.key] = r)
                }
            } else if (e.type === i.HookType.number) {
                const t = e.options;
                let r = t.defaultValue;
                if (n) {
                    const i = s(e.key, n);
                    if (!(0, o.isNil)(i) && "number" == typeof i) {
                        let e = !1;
                        ((0, o.isNil)(t.min) || i > t.min) && ((0, o.isNil)(t.max) || i < t.max) && ((0, o.isNil)(t.step) || i % t.step == 0) && (e = !0), e && (r = i)
                    }
                }
                l[e.key] = r
            }
        })), l
    }
})), r.register("duwmE", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv"),
        i = r("4MuSt"),
        a = r("lpEVe"),
        s = r("fywoC"),
        l = r("kYeTD"),
        c = r("fMJkl"),
        u = r("8KPyf"),
        d = r("1VXVp");
    var f = (0, a.observer)((e => {
        const [t] = s.useState((() => (0, i.observable)(e.defaultState || (0, d.default)({
            hookJSON: e.hooks
        })))), r = (e, r) => {
            t[e] = r
        }, n = (0, i.toJS)(t), a = JSON.stringify(n);
        s.useEffect((() => {
            e.onConnectedResourcesChange && e.onConnectedResourcesChange((0, c.default)(e, n)), e.readOnly || e.onStateChange && e.onStateChange(n)
        }), [a, e.readOnly]);
        const f = (0, u.default)(e, n);
        return (0, o.jsxs)(o.Fragment, {
            children: [e.header ? e.header(f.length) : null, f.map(((t, i) => (0, o.jsxs)(s.Fragment, {
                children: [(0, o.jsx)(l.default, {
                    hook: t,
                    state: n,
                    modifyState: r,
                    location: e.location,
                    readOnly: e.readOnly
                }), i !== f.length - 1 && (0, o.jsx)("div", {
                    style: {
                        height: 10
                    }
                })]
            }, `hook-form-${t.key}`))), e.footer ? e.footer(f.length) : null]
        })
    }))
})), r.register("kYeTD", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("f9d7r"),
        a = r("1njXE"),
        s = r("bEHrS"),
        l = r("lPp5C");
    var c = e => {
        const t = e.state[e.hook.key],
            r = t => {
                e.modifyState(e.hook.key, t)
            };
        return e.hook.type === i.HookType.selectBox ? (0, o.jsx)(l.default, {
            value: t,
            onChange: r,
            hook: e.hook,
            readOnly: e.readOnly
        }) : e.hook.type === i.HookType.kit ? (0, o.jsx)(a.default, {
            value: t,
            onChange: r,
            hook: e.hook,
            location: e.location,
            readOnly: e.readOnly
        }) : e.hook.type === i.HookType.number ? (0, o.jsx)(s.default, {
            value: t,
            onChange: r,
            hook: e.hook,
            readOnly: e.readOnly
        }) : null
    }
})), r.register("1njXE", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("lC3yj"),
        a = r("ijMF4"),
        s = r("e3N7l");
    var l = e => {
        let {
            title: t,
            description: r
        } = (0, s.default)(e.hook);
        if (e.location === a.HookFormLocation.editor) {
            const e = "We're showing this hook for testing purposes, but this hook won't be visible when choosing this map from the Mode Picker.";
            r ? r += ` - ${e}` : r = e
        }
        return (0, o.jsx)(i.default, {
            title: t,
            description: r,
            value: e.value,
            onValueChanged: e.onChange,
            placeholder: "Kit ID",
            readOnly: e.readOnly
        })
    }
})), r.register("lC3yj", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("b9Zw0"),
        a = r("6WS0O"),
        s = r("36UFo");
    var l = e => (0, o.jsx)(s.default, {
        emoji: e.emoji,
        title: e.title,
        description: e.description,
        children: (0, o.jsx)(i.default, {
            size: "large",
            value: e.value,
            placeholder: e.placeholder,
            style: {
                width: e.customWidth || a.default.optionWidth
            },
            onChange: t => {
                e.onValueChanged(t.target.value)
            },
            disabled: e.readOnly
        })
    })
})), r.register("ijMF4", (function(t, r) {
    let n;
    var o;
    let i;
    e(t.exports, "HookFormLocation", (function() {
        return n
    })), e(t.exports, "IHookConnectedResourceType", (function() {
        return i
    })), (o = n || (n = {})).editor = "editor", o.experiencePicker = "experiencePicker", (i || (i = {})).kit = "kit"
})), r.register("e3N7l", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = e => {
        let t, r;
        return t = e.key, e.displayName && (t = e.displayName), e.displayDescription && (r = e.displayDescription), {
            title: t,
            description: r
        }
    }
})), r.register("bEHrS", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        i = r("cmvpZ");
    r("fywoC");
    var a = r("dbbFP"),
        s = r("e3N7l");
    var l = e => {
        const {
            title: t,
            description: r
        } = (0, s.default)(e.hook), n = e.hook.options;
        return (0, o.jsx)(a.default, {
            title: t,
            description: r,
            value: e.value,
            onValueChanged: t => {
                !(0, i.isNil)(t) || (0, i.isNil)(n.defaultValue) ? e.onChange(t): e.onChange(n.defaultValue)
            },
            min: n.min,
            max: n.max,
            step: n.step,
            allowEmpty: !0,
            readOnly: e.readOnly
        })
    }
})), r.register("lPp5C", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("36y6c"),
        a = r("e3N7l");
    var s = e => {
        const {
            title: t,
            description: r
        } = (0, a.default)(e.hook), n = e.hook.options;
        return (0, o.jsx)(i.default, {
            title: t,
            description: r,
            value: e.value,
            onValueChanged: e.onChange,
            options: n.options.map((e => ({
                value: e,
                name: e
            }))),
            readOnly: e.readOnly
        })
    }
})), r.register("fMJkl", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("cmvpZ"),
        i = r("f9d7r"),
        a = r("ijMF4"),
        s = r("8KPyf");
    var l = (e, t) => {
        const r = [];
        return (0, s.default)({
            ...e,
            location: a.HookFormLocation.editor
        }, t).forEach((e => {
            e.type === i.HookType.kit && t[e.key] && r.push({
                type: a.IHookConnectedResourceType.kit,
                value: t[e.key]
            })
        })), (0, o.uniqBy)(r, "value")
    }
})), r.register("8KPyf", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("lQVxa"),
        i = r("f9d7r"),
        a = r("ijMF4");
    var s = (e, t) => {
        var r, n;
        const s = [];
        return null == e || null === (r = e.hooks) || void 0 === r || null === (n = r.hooks) || void 0 === n || n.forEach((r => {
            var n;
            if (r.type === i.HookType.kit) {
                if (!!t[r.key] && e.location === a.HookFormLocation.experiencePicker) return
            }
            if (r.type === i.HookType.selectBox) {
                var l;
                const e = r.options;
                if (!(null == e || null === (l = e.options) || void 0 === l ? void 0 : l.length)) return
            }(null == r || null === (n = r.hiddenScenarios) || void 0 === n ? void 0 : n.find((r => {
                var n, i;
                if (!!!(null === (n = r.conditions) || void 0 === n ? void 0 : n.length)) return !1;
                return !!(null === (i = r.conditions) || void 0 === i ? void 0 : i.every((r => {
                    if (r.type === o.HiddenConditionType.hookValue) {
                        const e = r.options,
                            n = e.value,
                            i = t[e.key];
                        if (e.compare === o.HookValueHiddenConditionCompare.equal) {
                            if (n == i) return !0
                        } else if (e.compare === o.HookValueHiddenConditionCompare.notEqual && n != i) return !0
                    } else if (r.type === o.HiddenConditionType.modeType) {
                        const t = e.modeType,
                            n = r.options;
                        return n.compare === o.ModeTypeHiddenConditionCompare.equal ? t === n.mode : t !== n.mode
                    }
                    return !1
                })))
            }))) || s.push(r)
        })), s
    }
})), r.register("lQVxa", (function(t, r) {
    let n;
    var o;
    let i;
    var a;
    let s;
    var l;
    e(t.exports, "HiddenConditionType", (function() {
        return n
    })), e(t.exports, "HookValueHiddenConditionCompare", (function() {
        return i
    })), e(t.exports, "ModeTypeHiddenConditionCompare", (function() {
        return s
    })), (o = n || (n = {})).hookValue = "hookValue", o.modeType = "modeType", (a = i || (i = {})).equal = "EQUAL", a.notEqual = "NOT_EQUAL", (l = s || (s = {})).equal = "EQUAL", l.notEqual = "NOT_EQUAL"
}));