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
var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    r = n.parcelRequire388b;
r.register("d7rWR", (function(t, n) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("3N4v4");
    var s = () => (0, o.jsx)(o.Fragment, {
        children: (0, o.jsx)(i.default, {})
    })
})), r.register("3N4v4", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = r("3hul2").default
})), r.register("3hul2", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("hxEiv"),
        o = r("lpEVe");
    r("fywoC");
    var i = r("fIZtR"),
        s = r("8VwfN"),
        l = r("iMOcM"),
        d = r("VvPwO");
    var u = () => (0, a.jsx)(d.default.Provider, {
        value: i.default,
        children: (0, a.jsxs)(o.Provider, {
            ...i.default,
            children: [(0, a.jsx)(l.Title, {
                title: "Host",
                description: "Host a game of Gimkit, an online strategic game show for the classroom."
            }), (0, a.jsx)(s.default, {})]
        })
    })
})), r.register("fIZtR", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var a = r("bUCDo"),
        o = r("7UXI3"),
        i = r("8wMLW"),
        s = r("b7JfB"),
        l = r("cqF0o"),
        d = r("doYBw"),
        u = r("gua1k"),
        c = r("9QOVd"),
        f = r("jzh6Y"),
        p = r("1Sazk"),
        h = r("dsoN9"),
        m = r("ipXVN"),
        g = r("gMFss"),
        x = r("jg5Z3"),
        v = r("7FlfX");
    var y = {
        kit: new(0, d.default),
        players: new(0, u.default),
        gameValues: new(0, l.default),
        gameOptions: new(0, s.default),
        engine: new(0, a.default),
        stats: new(0, f.default),
        translations: new(0, p.default),
        powerups: new(0, c.default),
        ui: new(0, h.default),
        entities: new(0, o.default),
        events: new(0, i.default),
        imposter: new(0, m.default),
        draw: new(0, g.default),
        pardy: new(0, x.default),
        metadata: new(0, v.default)
    }
})), r.register("bUCDo", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    class i {
        constructor() {
            this.findingServerForGame = !1, this.errorFindingServerForGame = !1, this.attemptingToConnect = !1, this.hasConnected = !1, this.connected = !1, this.connectionError = !1, this.joinedRoom = !1, this.attemptingToJoinRoom = !1, this.errorJoiningRoom = !1, this.roomError = null, (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], i.prototype, "game", void 0), (0, a.__decorate)([o.observable], i.prototype, "client", void 0), (0, a.__decorate)([o.observable], i.prototype, "findingServerForGame", void 0), (0, a.__decorate)([o.observable], i.prototype, "errorFindingServerForGame", void 0), (0, a.__decorate)([o.observable], i.prototype, "attemptingToConnect", void 0), (0, a.__decorate)([o.observable], i.prototype, "hasConnected", void 0), (0, a.__decorate)([o.observable], i.prototype, "connected", void 0), (0, a.__decorate)([o.observable], i.prototype, "connectionError", void 0), (0, a.__decorate)([o.observable], i.prototype, "joinedRoom", void 0), (0, a.__decorate)([o.observable], i.prototype, "attemptingToJoinRoom", void 0), (0, a.__decorate)([o.observable], i.prototype, "errorJoiningRoom", void 0), (0, a.__decorate)([o.observable], i.prototype, "roomError", void 0);
    var s = i
})), r.register("7UXI3", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    class i {
        constructor() {
            this.defendingHomebase = o.observable.array(), this.lava = null, (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], i.prototype, "defendingHomebase", void 0), (0, a.__decorate)([o.observable], i.prototype, "lava", void 0);
    var s = i
})), r.register("8wMLW", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = class {}
})), r.register("b7JfB", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("kHqmx"),
        o = r("4MuSt"),
        i = r("j2XHK");
    class s {
        get formattedGameOptions() {
            return (0, o.toJS)(this)
        }
        constructor() {
            this.type = i.GameType.live, this.goal = {
                type: i.GameGoal.time,
                value: 10
            }, this.specialGameType = o.observable.array(), this.currency = "$", this.language = "en", this.startingCash = 0, this.handicap = -50, this.clapping = !0, this.joinInLate = !0, this.powerups = !0, this.themes = !0, this.cleanPowerupsOnly = !1, this.allowGoogleTranslate = !1, this.music = !0, this.modeOptions = {}, this.setGameOptionsFromStorage = (e, t) => {
                Object.keys(e).forEach((n => {
                    null !== this[n] && ("group" !== n && "specialGameType" !== n && "modeOptions" !== n || t) && (this[n] = e[n])
                }))
            }, (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], s.prototype, "type", void 0), (0, a.__decorate)([o.observable], s.prototype, "goal", void 0), (0, a.__decorate)([o.observable], s.prototype, "specialGameType", void 0), (0, a.__decorate)([o.observable], s.prototype, "currency", void 0), (0, a.__decorate)([o.observable], s.prototype, "language", void 0), (0, a.__decorate)([o.observable], s.prototype, "startingCash", void 0), (0, a.__decorate)([o.observable], s.prototype, "handicap", void 0), (0, a.__decorate)([o.observable], s.prototype, "clapping", void 0), (0, a.__decorate)([o.observable], s.prototype, "joinInLate", void 0), (0, a.__decorate)([o.observable], s.prototype, "powerups", void 0), (0, a.__decorate)([o.observable], s.prototype, "themes", void 0), (0, a.__decorate)([o.observable], s.prototype, "cleanPowerupsOnly", void 0), (0, a.__decorate)([o.observable], s.prototype, "allowGoogleTranslate", void 0), (0, a.__decorate)([o.observable], s.prototype, "music", void 0), (0, a.__decorate)([o.observable], s.prototype, "modeOptions", void 0), (0, a.__decorate)([o.action.bound], s.prototype, "setGameOptionsFromStorage", void 0), (0, a.__decorate)([o.computed], s.prototype, "formattedGameOptions", null);
    var l = s
})), r.register("cqF0o", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("4MuSt"),
        s = r("j2XHK");
    class l {
        constructor() {
            (0, a.default)(this, "availableThemes", i.observable.array()), this.currentRoute = s.GameStatus.setup, this.gameCode = "", this.clapCount = 0, this.reportId = "", this.activityItems = i.observable.array(), this.thanosValues = null, this.bossId = null, this.showBossBattleModal = !1, this.gameEndDate = 0, this.defendingHomebaseResults = null, this.roomIntentErrorMessage = "", (0, i.makeObservable)(this)
        }
    }(0, o.__decorate)([i.observable], l.prototype, "currentRoute", void 0), (0, o.__decorate)([i.observable], l.prototype, "gameCode", void 0), (0, o.__decorate)([i.observable], l.prototype, "clapCount", void 0), (0, o.__decorate)([i.observable], l.prototype, "reportId", void 0), (0, o.__decorate)([i.observable], l.prototype, "activityItems", void 0), (0, o.__decorate)([i.observable], l.prototype, "thanosValues", void 0), (0, o.__decorate)([i.observable], l.prototype, "bossId", void 0), (0, o.__decorate)([i.observable], l.prototype, "showBossBattleModal", void 0), (0, o.__decorate)([i.observable], l.prototype, "gameEndDate", void 0), (0, o.__decorate)([i.observable], l.prototype, "defendingHomebaseResults", void 0), (0, o.__decorate)([i.observable], l.prototype, "roomIntentErrorMessage", void 0);
    var d = l
})), r.register("doYBw", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("divCp");
    var o = class {
        constructor() {
            (0, a.default)(this, "questions", [])
        }
    }
})), r.register("gua1k", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    const i = (e, t) => e + t.balance,
        s = (e, t) => e + t.stones;
    class l {
        get filteredPlayers() {
            return this.players.filter((e => "Player [Still Entering Name]" !== e.name))
        }
        get totalStones() {
            return this.players.reduce(s, 0)
        }
        get totalBalance() {
            return this.teams.length ? this.teams.reduce(i, 0) : this.players.reduce(i, 0)
        }
        constructor() {
            this.players = o.observable.array([]), this.teams = o.observable.array(), this.finalResults = o.observable.array(), (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], l.prototype, "players", void 0), (0, a.__decorate)([o.observable], l.prototype, "teams", void 0), (0, a.__decorate)([o.observable], l.prototype, "finalResults", void 0), (0, a.__decorate)([o.computed], l.prototype, "filteredPlayers", null), (0, a.__decorate)([o.computed], l.prototype, "totalStones", null), (0, a.__decorate)([o.computed], l.prototype, "totalBalance", null);
    var d = l
})), r.register("9QOVd", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    class i {
        constructor() {
            this.specialSongIsPlaying = !1, (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], i.prototype, "specialSongIsPlaying", void 0);
    var s = i
})), r.register("jzh6Y", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    class i {
        constructor() {
            this.playerStats = o.observable.array(), (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], i.prototype, "playerStats", void 0);
    var s = i
})), r.register("1Sazk", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    class i {
        constructor() {
            (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], i.prototype, "translations", void 0);
    var s = i
})), r.register("dsoN9", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("kHqmx"),
        o = r("4MuSt"),
        i = r("d1LT2");
    class s {
        constructor() {
            this.backgroundColor = i.default.BackgroundPurple, this.showingBossPreScreen = !1, this.showingLavaPreScreen = !1, this.showingHumansVsZombiesPreScreen = !1, this.snowing = !1, this.showingClassTip = !1, (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], s.prototype, "backgroundColor", void 0), (0, a.__decorate)([o.observable], s.prototype, "showingBossPreScreen", void 0), (0, a.__decorate)([o.observable], s.prototype, "showingLavaPreScreen", void 0), (0, a.__decorate)([o.observable], s.prototype, "showingHumansVsZombiesPreScreen", void 0), (0, a.__decorate)([o.observable], s.prototype, "snowing", void 0), (0, a.__decorate)([o.observable], s.prototype, "showingClassTip", void 0);
    var l = s
})), r.register("d1LT2", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        Black: "#000000",
        White: "#FFFFFF",
        BackgroundPurple: "#673ab7",
        SuccessGreen: "#4bb543",
        LightSuccessGreen: "#6abf69",
        DisabledGray: "#838383",
        Gold: "#FFD700",
        ErrorRed: "#d32f2f",
        LovePink: "#e91e63",
        DarkSummerOrange: "#bf360c"
    }
})), r.register("ipXVN", (function(t, n) {
    e(t.exports, "PersonRole", (function() {
        return i
    })), e(t.exports, "ImposterStatus", (function() {
        return l
    })), e(t.exports, "default", (function() {
        return c
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    let i;
    var s;
    let l;
    var d;
    (s = i || (i = {})).detective = "detective", s.imposter = "imposter", (d = l || (l = {})).intro = "intro", d.questions = "questions", d.discussion = "discussion", d.voting = "voting", d.votingResult = "votingResult";
    class u {
        constructor() {
            this.status = l.intro, this.meetingsLeft = 5, this.investigationsLeft = 0, this.impostersLeft = 0, this.votes = 0, this.meetingResults = null, this.people = o.observable.array(), (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], u.prototype, "status", void 0), (0, a.__decorate)([o.observable], u.prototype, "meetingsLeft", void 0), (0, a.__decorate)([o.observable], u.prototype, "investigationsLeft", void 0), (0, a.__decorate)([o.observable], u.prototype, "impostersLeft", void 0), (0, a.__decorate)([o.observable], u.prototype, "votes", void 0), (0, a.__decorate)([o.observable], u.prototype, "meetingResults", void 0), (0, a.__decorate)([o.observable], u.prototype, "people", void 0);
    var c = u
})), r.register("gMFss", (function(t, n) {
    e(t.exports, "DrawStatus", (function() {
        return i
    })), e(t.exports, "default", (function() {
        return d
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    let i;
    var s;
    (s = i || (i = {})).pickDrawer = "pickDrawer", s.termSelection = "termSelection", s.drawing = "drawing", s.results = "results";
    class l {
        constructor() {
            this.status = i.pickDrawer, this.round = {
                term: "",
                secondsLeft: 999,
                drawingBase64: "",
                revealText: "",
                drawer: {
                    id: "",
                    name: ""
                }
            }, this.latestLine = null, this.latestFeedItem = null, this.personCount = null, this.everybodyGotLastRoundCorrect = !1, this.showingFeed = !0, this.pointAdditions = o.observable.array(), this.drawingHistory = o.observable.array(), this.drawingsModalOpen = !1, (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], l.prototype, "status", void 0), (0, a.__decorate)([o.observable], l.prototype, "round", void 0), (0, a.__decorate)([o.observable], l.prototype, "latestLine", void 0), (0, a.__decorate)([o.observable], l.prototype, "latestFeedItem", void 0), (0, a.__decorate)([o.observable], l.prototype, "personCount", void 0), (0, a.__decorate)([o.observable], l.prototype, "everybodyGotLastRoundCorrect", void 0), (0, a.__decorate)([o.observable], l.prototype, "showingFeed", void 0), (0, a.__decorate)([o.observable], l.prototype, "pointAdditions", void 0), (0, a.__decorate)([o.observable], l.prototype, "drawingHistory", void 0), (0, a.__decorate)([o.observable], l.prototype, "drawingsModalOpen", void 0);
    var d = l
})), r.register("jg5Z3", (function(t, n) {
    e(t.exports, "PardyScreen", (function() {
        return i
    })), e(t.exports, "PardyQuestionScreen", (function() {
        return l
    })), e(t.exports, "PardyQuestionStatus", (function() {
        return u
    })), e(t.exports, "default", (function() {
        return p
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    let i;
    var s;
    let l;
    var d;
    let u;
    var c;
    (s = i || (i = {})).home = "home", s.question = "question", s.answer = "answer", (d = l || (l = {})).preview = "preview", d.finale = "finale", d.question = "question", (c = u || (u = {})).preview = "preview", c.ask = "ask", c.timesUp = "timesUp";
    class f {
        constructor() {
            this.screen = i.home, this.questionScreen = l.preview, this.questionStatus = u.preview, this.currentRound = null, this.disabledSections = o.observable.array(), this.board = null, this.powers = o.observable.array(), this.playerCount = 0, this.betsPlaced = 0, this.playersAnswered = 0, this.playersAnsweredCorrectly = 0, this.nameOfFirstPlayerToAnswerCorrectly = "", (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], f.prototype, "screen", void 0), (0, a.__decorate)([o.observable], f.prototype, "questionScreen", void 0), (0, a.__decorate)([o.observable], f.prototype, "questionStatus", void 0), (0, a.__decorate)([o.observable], f.prototype, "currentRound", void 0), (0, a.__decorate)([o.observable], f.prototype, "disabledSections", void 0), (0, a.__decorate)([o.observable], f.prototype, "board", void 0), (0, a.__decorate)([o.observable], f.prototype, "powers", void 0), (0, a.__decorate)([o.observable], f.prototype, "finaleQuestionId", void 0), (0, a.__decorate)([o.observable], f.prototype, "playerCount", void 0), (0, a.__decorate)([o.observable], f.prototype, "betsPlaced", void 0), (0, a.__decorate)([o.observable], f.prototype, "playersAnswered", void 0), (0, a.__decorate)([o.observable], f.prototype, "playersAnsweredCorrectly", void 0), (0, a.__decorate)([o.observable], f.prototype, "nameOfFirstPlayerToAnswerCorrectly", void 0);
    var p = f
})), r.register("7FlfX", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("kHqmx"),
        o = r("4MuSt");
    class i {
        constructor() {
            this.hasReceivedHostStaticState = !1, this.currentGameIsUsingGroups = !1, (0, o.makeObservable)(this)
        }
    }(0, a.__decorate)([o.observable], i.prototype, "hasReceivedHostStaticState", void 0), (0, a.__decorate)([o.observable], i.prototype, "currentGameIsUsingGroups", void 0);
    var s = i
})), r.register("8VwfN", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = r("hxEiv"),
        o = r("d1LT2"),
        i = r("lpEVe"),
        s = r("fywoC"),
        l = r("2FDaO"),
        d = r("75KvC"),
        u = r("VvPwO"),
        c = r("j2XHK");
    let f;
    const p = (0, i.observer)((() => {
            const {
                ui: {
                    backgroundColor: e
                },
                gameValues: {
                    currentRoute: t
                }
            } = s.useContext(u.default), n = t === c.GameStatus.setup || t === c.GameStatus.join;
            return (0, a.jsx)(h, {
                backgroundColor: e,
                instantAnimateBackground: n,
                children: (0, a.jsx)(d.default, {})
            })
        })),
        h = l.default.div(f || (f = (e => e)`
  min-height: 100vh;
  width: 100%;
  color: ${0};
  background: ${0};
  transition: background ${0}s;
  display: flex;
  flex-direction: column;
`), o.default.White, (e => e.backgroundColor), (e => e.instantAnimateBackground ? 0 : .5));
    var m = p
})), r.register("75KvC", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv"),
        o = r("j2XHK");
    r("fywoC");
    var i = r("fSSOY"),
        s = r("kgrPl"),
        l = r("dmRSZ"),
        d = r("Y0vmn"),
        u = r("3dwzi"),
        c = r("54vnf"),
        f = r("3Oq7q"),
        p = r("l2N87"),
        h = r("ltZy9"),
        m = r("bBgo6");
    var g = () => (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.default, {
            route: o.GameStatus.gameplay,
            component: l.default
        }), (0, a.jsx)(i.default, {
            route: o.GameStatus.join,
            component: d.default
        }), (0, a.jsx)(i.default, {
            route: o.GameStatus.results,
            component: c.default
        }), (0, a.jsx)(i.default, {
            route: o.GameStatus.setup,
            component: f.default
        }), (0, a.jsx)(i.default, {
            route: o.GameStatus.teams,
            component: p.default
        }), (0, a.jsx)(u.default, {}), (0, a.jsx)(s.default, {}), (0, a.jsx)(m.default, {}), (0, a.jsx)(h.default, {})]
    })
})), r.register("fSSOY", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("lpEVe"),
        s = r("fywoC");
    let l = class extends s.Component {
        render() {
            const {
                route: e
            } = this.props;
            if (this.props.gameValues.currentRoute !== e) return null;
            const t = this.props.component;
            return (0, o.jsx)(t, {})
        }
    };
    l = (0, a.__decorate)([(0, i.inject)("gameValues"), i.observer], l);
    var d = l
})), r.register("kgrPl", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("lpEVe"),
        s = r("fywoC"),
        l = r("1GhBq");
    let d = class extends s.Component {
        render() {
            return (0, o.jsx)(l.default, {
                isSnowing: this.props.ui.snowing
            })
        }
    };
    d = (0, a.__decorate)([(0, i.inject)("ui"), i.observer], d);
    var u = d
})), r.register("1GhBq", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("divCp"),
        o = r("hxEiv"),
        i = r("fywoC"),
        s = r("9vO80");
    class l extends i.Component {
        componentDidUpdate(e) {
            this.state.hasShown || !e.isSnowing && this.props.isSnowing && (this.setState({
                hasShown: !0
            }), (0, s.default)())
        }
        render() {
            return (0, o.jsx)("canvas", {
                style: {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    pointerEvents: "none",
                    display: this.props.isSnowing ? "initial" : "none"
                },
                id: "snow-canv"
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                hasShown: !1
            })
        }
    }
    var d = l
})), r.register("9vO80", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fIZtR"),
        o = r("4MuSt");

    function i() {
        var e = !0,
            t = document.getElementById("snow-canv");
        if (t) {
            for (var n, r = t.getContext("2d"), i = t.width = window.innerWidth, s = t.height = window.innerHeight, l = [], d = 0; d < 29; ++d)(n = new c).y = Math.random() * (s + 50), n.x = Math.random() * i, n.t = Math.random() * (2 * Math.PI), n.sz = 100 / (10 + 100 * Math.random()) * 1.3, n.sp = .15 * Math.pow(.8 * n.sz, 2) * 1, n.sp = n.sp < 1 ? 1 : n.sp, l.push(n);
            u(), (0, o.reaction)((() => a.default.ui.isSnowing), (() => {
                const t = a.default.ui.isSnowing;
                !e && t ? (e = t, u()) : e = t
            }))
        }

        function u() {
            if (e) {
                window.requestAnimationFrame(u), r.clearRect(0, 0, i, s), r.fillRect(0, 0, i, s), r.fill();
                for (var t = 0; t < l.length; ++t) {
                    var n = l[t];
                    n.t += .05, n.t = n.t >= 2 * Math.PI ? 0 : n.t, n.y += n.sp, n.x += Math.sin(1 * n.t) * (.3 * n.sz), n.y > s + 50 && (n.y = -10 - 20 * Math.random()), n.x > i + 20 && (n.x = -20), n.x < -20 && (n.x = i + 20), n.draw()
                }
            }
        }

        function c() {
            this.draw = function() {
                this.g = r.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz), this.g.addColorStop(0, "hsla(255,255%,255%,1)"), this.g.addColorStop(1, "hsla(255,255%,255%,0)"), r.moveTo(this.x, this.y), r.fillStyle = this.g, r.beginPath(), r.arc(this.x, this.y, this.sz, 0, 2 * Math.PI, !0), r.fill()
            }
        }
    }
})), r.register("dmRSZ", (function(t, n) {
    e(t.exports, "default", (function() {
        return C
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("5Z32P"),
        s = r("d1LT2"),
        l = r("bbvHy"),
        d = r("4MuSt"),
        u = r("lpEVe"),
        c = r("fywoC"),
        f = r("2FDaO"),
        p = r("e9EGN"),
        h = r("7v4WS"),
        m = r("hKgA8"),
        g = r("kW7Ys"),
        x = r("hNcZR"),
        v = r("5ybCh"),
        y = r("52895");
    let b;
    const w = f.default.div(b || (b = (e => e)`
  height: 100vh;
  width: 100%;
  font-family: ${0};
  display: flex;
  flex-direction: column;
`), l.default.fontFamilyName);
    let j = class extends c.Component {
        componentDidMount() {
            if (this.props.blockComponentDidMountScript) return;
            (0, i.addActivityItem)({
                name: "The Game",
                action: "has started!",
                customTextColor: s.default.LightSuccessGreen
            });
            const e = (0, i.getMusicTrack)();
            this.props.gameOptions.music && (e.playing() || (0, i.inDrawMode)() || (0, i.inPardyMode)() || e.play()), (0, d.reaction)((() => this.props.gameOptions.music), (t => {
                t ? e.playing() || (0, i.inDrawMode)() || (0, i.inPardyMode)() || e.play() : (0, i.inPardyMode)() || e.pause()
            }))
        }
        render() {
            return (0, i.inZombiesVsHumansMode)() ? (0, o.jsx)(m.default, {}) : (0, i.inLavaMode)() ? (0, o.jsx)(g.default, {}) : (0, i.inImposterMode)() ? (0, o.jsx)(x.default, {}) : (0, i.inDrawMode)() ? (0, o.jsx)(v.default, {}) : (0, i.inPardyMode)() ? (0, o.jsx)(y.default, {}) : (0, o.jsxs)(w, {
                children: [(0, o.jsx)(p.default, {}), (0, o.jsx)(h.default, {})]
            })
        }
    };
    j = (0, a.__decorate)([(0, u.inject)("gameOptions"), u.observer], j);
    var C = j
})), r.register("5Z32P", (function(t, n) {
    e(t.exports, "plural", (function() {
        return g
    })), e(t.exports, "numberWithCommas", (function() {
        return x
    })), e(t.exports, "getMoney", (function() {
        return v
    })), e(t.exports, "inDrawMode", (function() {
        return V
    })), e(t.exports, "banPlayer", (function() {
        return y
    })), e(t.exports, "addActivityItem", (function() {
        return b
    })), e(t.exports, "inTeamMode", (function() {
        return w
    })), e(t.exports, "getTeamColor", (function() {
        return j
    })), e(t.exports, "endGame", (function() {
        return C
    })), e(t.exports, "inThanosMode", (function() {
        return T
    })), e(t.exports, "inZombiesVsHumansMode", (function() {
        return I
    })), e(t.exports, "getMusicTrack", (function() {
        return E
    })), e(t.exports, "inImposterMode", (function() {
        return F
    })), e(t.exports, "inLavaMode", (function() {
        return R
    })), e(t.exports, "startSpecialSong", (function() {
        return S
    })), e(t.exports, "getAssetPath", (function() {
        return L
    })), e(t.exports, "getQueryVariable", (function() {
        return O
    })), e(t.exports, "playSound", (function() {
        return k
    })), e(t.exports, "stopSound", (function() {
        return P
    })), e(t.exports, "send", (function() {
        return M
    })), e(t.exports, "HideIfTabbedAway", (function() {
        return D
    })), e(t.exports, "musicIsOn", (function() {
        return _
    })), e(t.exports, "inHiddenMode", (function() {
        return A
    })), e(t.exports, "inBossBattleMode", (function() {
        return N
    })), e(t.exports, "inPardyMode", (function() {
        return H
    })), e(t.exports, "inProduction", (function() {
        return B
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("fucqw"),
        i = (r("bBunw"), r("d1LT2")),
        s = r("fIZtR"),
        l = r("j2XHK"),
        d = r("h1Mb4"),
        u = r("lSvNo"),
        c = r("6yrsF"),
        f = r("cmvpZ"),
        p = r("kGQzo"),
        h = r("5vs73");
    const m = function() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        },
        g = (e, t, n) => 1 === t ? e : n || e + "s",
        x = e => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        v = e => {
            const t = Math.round(e);
            return V() ? `${x(t)} ${g("point",t)}` : (t < 0 ? "-" : "") + s.default.gameOptions.currency + x(Math.abs(t))
        },
        y = e => {
            s.default.engine.game.send(d.default.kickPlayer, e), s.default.players.players.replace(s.default.players.players.filter((t => t.id !== e))), s.default.ui.showingClassTip || s.default.metadata.currentGameIsUsingGroups || (s.default.ui.showingClassTip = !0)
        },
        b = e => {
            s.default.gameValues.activityItems.replace([...(0, f.takeRight)(s.default.gameValues.activityItems, 22), {
                ...e,
                key: m() + m() + "-" + m() + "-" + m() + "-" + m()
            }])
        },
        w = () => [h.TEAMS, u.HUMAN_ZOMBIE_DEFENDING_HOMEBASE, u.BOSS_BATTLE].includes(s.default.gameOptions.specialGameType[0]),
        j = e => {
            const t = s.default.players.teams.findIndex((t => t.id === e));
            return -1 !== t ? s.default.players.teams[t].color.background : i.default.White
        },
        C = e => {
            if ((T() || I()) && !e) return;
            const t = E();
            F() || t.fade(o.MUSIC_VOLUME, 0, 1e3), setTimeout((() => {
                w() ? s.default.engine.game.send(d.default.requestTeamLeaderboard, "final") : s.default.engine.game.send(d.default.requestPlayerLeaderboard, "final"), s.default.gameValues.currentRoute = l.GameStatus.results
            }), 500)
        };
    const E = () => T() ? o.default.thanos.thanos : I() ? o.default.halloween : R() ? o.default.lava.panther : F() ? o.default.imposter.mysteriousCase : V() ? o.default.draw.background : o.default.realityShow,
        S = (e, t) => {
            const n = s.default.gameOptions.music,
                r = E();
            s.default.powerups.specialSongIsPlaying || (n && r.fade(o.MUSIC_VOLUME, 0, 1e3), setTimeout((() => {
                const a = new(0, c.Howl)({
                    src: [L(e)],
                    volume: .9
                });
                a.play(), s.default.powerups.specialSongIsPlaying = !0;
                const i = String(s.default.ui.backgroundColor);
                s.default.ui.backgroundColor = t, a.on("end", (() => {
                    s.default.powerups.specialSongIsPlaying = !1, s.default.ui.backgroundColor = i, n && s.default.gameValues.currentRoute === l.GameStatus.gameplay && r.fade(0, o.MUSIC_VOLUME, 1e3)
                }))
            }), 1e3))
        },
        O = e => {
            const t = window.location.search.substring(1).split("&");
            for (let n = 0; n < t.length; n++) {
                const r = t[n].split("=");
                if (r[0] === e) return r[1]
            }
            return null
        },
        k = (e, t) => {
            const n = () => {
                t.onEnd && t.onEnd()
            };
            void 0 !== t.volume ? e.volume(t.volume) : e.volume(1), t.fadeIn && e.volume(0), e.play(), t.fadeIn && e.fade(0, void 0 !== t.volume ? t.volume : 1, t.fadeInDuration || 1e3), e.once("play", (() => {
                t.onPlay && t.onPlay(), t.fadeOut && setTimeout((() => {
                    e.fade(t.volume || 1, 0, 1e3)
                }), 1e3 * (e.duration() - 1))
            }));
            const r = () => {
                t.onError ? t.onError() : n()
            };
            return e.once("end", n), e.once("loaderror", r), e.once("playerror", r), e
        },
        P = (e, t, n = 1e3) => {
            t ? (e.fade(e.volume(), 0, n), setTimeout((() => e.stop()), n)) : e.stop()
        },
        M = (e, t) => {
            const n = s.default.engine.game;
            n && n.send(e, t)
        },
        D = e => (0, p.default)() ? (0, a.jsx)(a.Fragment, {
            children: e.children
        }) : (0, a.jsx)("div", {}),
        _ = () => !0 === s.default.gameOptions.music,
        T = () => s.default.gameOptions.specialGameType.includes(u.THANOS),
        A = () => s.default.gameOptions.specialGameType.includes(u.HIDDEN),
        N = () => s.default.gameOptions.specialGameType.includes(u.BOSS_BATTLE),
        I = () => s.default.gameOptions.specialGameType.includes(u.HUMAN_ZOMBIE_DEFENDING_HOMEBASE),
        R = () => s.default.gameOptions.specialGameType.includes(u.LAVA),
        F = () => s.default.gameOptions.specialGameType.includes(u.IMPOSTER),
        V = () => s.default.gameOptions.specialGameType.includes(u.DRAW),
        H = () => s.default.gameOptions.specialGameType.includes(u.PARDY);

    function B() {
        return !0
    }

    function L(e) {
        return "/assets/host/" + e
    }
})), r.register("fucqw", (function(t, n) {
    e(t.exports, "MUSIC_VOLUME", (function() {
        return i
    })), e(t.exports, "default", (function() {
        return d
    }));
    var a = r("6yrsF"),
        o = r("5Z32P");
    const i = .45,
        s = !1,
        l = e => new(0, a.Howl)({
            src: [(0, o.getAssetPath)(`${e}.mp3`)],
            preload: s
        });
    var d = {
        realityShow: new(0, a.Howl)({
            src: [(0, o.getAssetPath)("reality-show.mp3")],
            loop: !0,
            volume: i,
            preload: s
        }),
        thanos: {
            thanos: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("thanos.mp3")],
                loop: !0,
                volume: i,
                preload: s
            }),
            wind: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("wind.mp3")],
                preload: s
            }),
            successDing: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("successDing.mp3")],
                preload: s
            })
        },
        winner: new(0, a.Howl)({
            src: [(0, o.getAssetPath)("winner.mp3")],
            preload: s
        }),
        celebrate: new(0, a.Howl)({
            src: [(0, o.getAssetPath)("celebrate.mp3")],
            preload: s
        }),
        bossBattle: {
            darkAmbience: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("darkAmbience.mp3")],
                preload: s
            }),
            award: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("award.mp3")],
                volume: .7,
                preload: s
            }),
            getAmped: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("getAmped.mp3")],
                preload: s
            })
        },
        imposter: {
            tensionBuild: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("tensionBuild.mp3")],
                preload: s,
                volume: .7
            }),
            spaceshipAmbience: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("spaceshipAmbience.mp3")],
                preload: s,
                loop: !0
            }),
            typing: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("typing.mp3")],
                preload: s
            }),
            crewmateWin: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("crewmateWin.mp3")],
                preload: s
            }),
            imposterWin: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("imposterWin.mp3")],
                preload: s
            }),
            meetingBoom: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("meetingBoom.mp3")],
                preload: s
            }),
            mystery: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("mystery.mp3")],
                preload: s
            }),
            spaceDoorOpen: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("spaceDoorOpen.mp3")],
                preload: s
            }),
            mysteriousCase: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("mysteriousCase.mp3")],
                preload: s,
                loop: !0
            })
        },
        draw: {
            roundStart: new(0, a.Howl)({
                src: (0, o.getAssetPath)("roundStart.mp3"),
                preload: s
            }),
            funk: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("drawFunk.mp3")],
                preload: s
            }),
            winner: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("drawWinner.mp3")],
                preload: s
            }),
            background: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("drawBackground.mp3")],
                preload: s,
                loop: !0
            })
        },
        pardy: {
            music: new(0, a.Howl)({
                src: (0, o.getAssetPath)("pardyMusic.mp3"),
                preload: s,
                loop: !0
            }),
            riser: l("pardyRiser"),
            countdown: l("pardyCountdown"),
            tick: l("pardyTick"),
            swoosh: l("pardySwoosh"),
            roundStart: l("roundStart"),
            complete: l("pardyComplete"),
            finaleMusic: new(0, a.Howl)({
                src: (0, o.getAssetPath)("pardyFinaleMusic.mp3"),
                preload: s,
                loop: !0
            }),
            drumRoll: l("pardyDrumRoll")
        },
        eventBoom: new(0, a.Howl)({
            src: [(0, o.getAssetPath)("eventBoom.wav")],
            preload: s
        }),
        suspense: new(0, a.Howl)({
            src: [(0, o.getAssetPath)("suspense.wav")],
            volume: .45,
            preload: s
        }),
        halloween: new(0, a.Howl)({
            src: [(0, o.getAssetPath)("halloween.mp3")],
            loop: !0,
            volume: i,
            preload: s
        }),
        engagingSuspense: new(0, a.Howl)({
            src: [(0, o.getAssetPath)("engagingSuspense.mp3")],
            preload: s
        }),
        fanfare: new(0, a.Howl)({
            src: [(0, o.getAssetPath)("fanfare.mp3")],
            preload: s
        }),
        boom: new(0, a.Howl)({
            src: [(0, o.getAssetPath)("boom.mp3")],
            preload: s
        }),
        lava: {
            panther: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("panther.mp3")],
                loop: !0,
                preload: s,
                volume: .25
            }),
            pantherShort: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("pantherShort.mp3")],
                preload: s,
                volume: .4
            }),
            lavaRumble: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("lavaRumble.mp3")],
                loop: !0,
                preload: s
            }),
            egyptFanfare: new(0, a.Howl)({
                src: [(0, o.getAssetPath)("egyptFanfare.mp3")],
                preload: s,
                volume: .5
            })
        }
    }
})), r.register("h1Mb4", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        requestHostClientIdFromGameCode: "REQUEST_HOST_ID",
        newGameStatus: "NEW_GAME_STATUS",
        questionAnswered: "QUESTION_ANSWERED",
        upgradePurchased: "UPGRADE_PURCHASED",
        powerupPurchased: "POWERUP_PURCHASED",
        powerupActivated: "POWERUP_ACTIVATED",
        powerupAttack: "POWERUP_ATTACK",
        requestPlayerLeaderboard: "PLAYER_LEADERBOARD_REQUESTED",
        requestTeamLeaderboard: "TEAM_LEADERBOARD_REQUESTED",
        requestDefendingHomebase: "REQUEST_DEFENDING_HOMEBASE",
        themePurchased: "THEME_PURCHASED",
        themeApplied: "THEME_APPLIED",
        clap: "CLAP",
        makeTeams: "MAKE_TEAMS",
        playerStats: "PLAYER_STATS",
        kickPlayer: "KICK_PLAYER",
        requestPlayerDefendingHomebase: "REQUEST_PLAYER_DEFENDING_HOMEBASE",
        upgradeDefendingHomebase: "UPGRADE_DEFENDING_HOMEBASE",
        leaderboardChangeBalance: "LEADERBOARD_CHANGE_BALANCE",
        leaderboardFreezePlayer: "LEADERBOARD_FREEZE_PLAYER",
        leaderboardSendMessage: "LEADERBOARD_SEND_MESSAGE",
        playAgain: "PLAY_AGAIN",
        lavaPurchasePiece: "LAVA_PURCHASE_PIECE",
        hostIncreaseLavaHeight: "HOST_INCREASE_LAVA_HEIGHT",
        imposter: {
            requestPeople: "IMPOSTER_MODE_REQUEST_PEOPLE",
            status: "IMPOSTER_MODE_STATUS",
            purchase: "IMPOSTER_MODE_PURCHASE",
            vote: "IMPOSTER_MODE_VOTE",
            notes: "IMPOSTER_MODE_NOTES",
            imposterWin: "IMPOSTER_MODE_IMPOSTER_WIN"
        },
        draw: {
            createRound: "DRAW_MODE_CREATE_ROUND",
            termSelected: "DRAW_MODE_TERM_SELECTED",
            lineDrawn: "DRAW_MODE_LD",
            imageDrawn: "DRAW_MODE_ID",
            guess: "DRAW_MODE_GUESS",
            endRound: "DRAW_MODE_END_ROUND",
            clear: "DRAW_MODE_CLEAR"
        },
        outnumberedComplete: "OUTNUMBERED_COMPLETE",
        pardy: {
            setNewRoundDetails: "PARDY_SET_NEW_ROUND_DETAILS",
            setScreen: "PARDY_SET_SCREEN",
            setQuestionScreen: "PARDY_QUESTION_SCREEN",
            setQuestionStatus: "PARDY_SET_QUESTION_STATUS",
            setPower: "PARDY_SET_POWER",
            setBet: "PARDY_SET_BET"
        }
    }
})), r.register("lSvNo", (function(t, n) {
    e(t.exports, "THANOS", (function() {
        return r
    })), e(t.exports, "HIDDEN", (function() {
        return a
    })), e(t.exports, "BOSS_BATTLE", (function() {
        return o
    })), e(t.exports, "SHOP_QR_SCAN", (function() {
        return i
    })), e(t.exports, "HUMAN_ZOMBIE_DEFENDING_HOMEBASE", (function() {
        return s
    })), e(t.exports, "LAVA", (function() {
        return l
    })), e(t.exports, "IMPOSTER", (function() {
        return d
    })), e(t.exports, "DRAW", (function() {
        return u
    })), e(t.exports, "COMEBACK", (function() {
        return c
    })), e(t.exports, "PARDY", (function() {
        return f
    }));
    const r = "THANOS",
        a = "HIDDEN",
        o = "BOSS_BATTLE",
        i = "SHOP_QR_SCAN",
        s = "HUMAN_ZOMBIE_DEFENDING_HOMEBASE",
        l = "LAVA",
        d = "IMPOSTER",
        u = "DRAW",
        c = "COMEBACK",
        f = "PARDY"
})), r.register("kGQzo", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("fywoC"),
        o = r("lombu"),
        i = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    a = !1,
                    o = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    a = !0, o = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (a) throw o
                    }
                }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        s = o.isSupported && o.visibility,
        l = function() {
            var e = (0, o.getHandlerArgs)(),
                t = i(e, 1)[0],
                n = (0, a.useState)(t),
                r = i(n, 2),
                l = r[0],
                d = r[1];
            return (0, a.useEffect)((function() {
                if (s) {
                    var e = function() {
                        var e = (0, o.getHandlerArgs)(),
                            t = i(e, 1)[0];
                        d(t)
                    };
                    return document.addEventListener(o.visibility.event, e),
                        function() {
                            document.removeEventListener(o.visibility.event, e)
                        }
                }
            }), []), l
        }
})), r.register("lombu", (function(t, n) {
    e(t.exports, "isSupported", (function() {
        return o
    })), e(t.exports, "visibility", (function() {
        return i
    })), e(t.exports, "getHandlerArgs", (function() {
        return s
    }));
    var r = "undefined" != typeof document,
        a = [{
            hidden: "hidden",
            event: "visibilitychange",
            state: "visibilityState"
        }, {
            hidden: "webkitHidden",
            event: "webkitvisibilitychange",
            state: "webkitVisibilityState"
        }, {
            hidden: "mozHidden",
            event: "mozvisibilitychange",
            state: "mozVisibilityState"
        }, {
            hidden: "msHidden",
            event: "msvisibilitychange",
            state: "msVisibilityState"
        }, {
            hidden: "oHidden",
            event: "ovisibilitychange",
            state: "oVisibilityState"
        }],
        o = r && Boolean(document.addEventListener),
        i = function() {
            if (!o) return null;
            var e = !0,
                t = !1,
                n = void 0;
            try {
                for (var r, i = a[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                    var s = r.value;
                    if (s.hidden in document) return s
                }
            } catch (e) {
                t = !0, n = e
            } finally {
                try {
                    !e && i.return && i.return()
                } finally {
                    if (t) throw n
                }
            }
            return null
        }(),
        s = function() {
            if (!i) return [!0, "visible"];
            var e = i.hidden,
                t = i.state;
            return [!document[e], document[t]]
        }
})), r.register("5vs73", (function(t, n) {
    e(t.exports, "CLASSIC", (function() {
        return r
    })), e(t.exports, "TEAMS", (function() {
        return a
    })), e(t.exports, "THANOS", (function() {
        return o
    })), e(t.exports, "BOSS_BATTLE", (function() {
        return i
    })), e(t.exports, "HUMAN_ZOMBIE_DEFENDING_HOMEBASE", (function() {
        return s
    })), e(t.exports, "LAVA", (function() {
        return l
    })), e(t.exports, "IMPOSTER", (function() {
        return d
    })), e(t.exports, "DRAW", (function() {
        return u
    })), e(t.exports, "PARDY", (function() {
        return c
    }));
    const r = "CLASSIC",
        a = "TEAMS",
        o = "THANOS",
        i = "BOSS_BATTLE",
        s = "HUMAN_ZOMBIE_DEFENDING_HOMEBASE",
        l = "LAVA",
        d = "IMPOSTER",
        u = "DRAW",
        c = "PARDY"
})), r.register("bbvHy", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        normal: "\n  font-family: 'Product Sans', sans-serif;\n  font-weight: 400;\n",
        bold: "\n    font-family: 'Product Sans', sans-serif;\n    font-weight: 800;\n  ",
        black: "\n  font-family: 'Product Sans', sans-serif;\n  font-weight: 900;\n",
        fontFamilyName: "Product Sans, sans-serif"
    }
})), r.register("e9EGN", (function(n, a) {
    e(n.exports, "default", (function() {
        return w
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        s = r("hxEiv"),
        l = r("e4KJZ"),
        d = r("5Z32P"),
        u = r("lpEVe"),
        c = r("fywoC"),
        f = r("D9uHZ"),
        p = r("j2XHK"),
        h = r("eLbyq"),
        m = r("bTJ8B"),
        g = r("7uYFt"),
        x = r("kVS28"),
        v = r("fiiqH");
    const y = e => (0, s.jsxs)("span", {
        children: [e.minutes, ":", e.seconds]
    });
    let b = class extends c.Component {
        componentDidMount() {
            this.props.gameValues.gameEndDate || (this.props.gameValues.gameEndDate = this.state.startDate + 6e4 * this.props.gameOptions.goal.value)
        }
        render() {
            const e = this.getGameGoalText();
            return (0, s.jsxs)(m.Container, {
                children: [(0, s.jsxs)(m.HeaderSectionContainer, {
                    customCSS: "\n          display: flex;\n          align-items: center;\n        ",
                    children: [(0, s.jsx)("img", {
                        src: "/client/img/svgLogoWhite.svg",
                        style: {
                            height: 30
                        }
                    }), this.props.gameOptions.joinInLate ? (0, s.jsx)(l.default, {
                        title: "Game Code (Click to enlarge)",
                        children: (0, s.jsx)(m.GameCode, {
                            onClick: this.toggleLargeCode,
                            showLargeCode: this.state.showLargeCode,
                            children: this.props.gameValues.gameCode
                        })
                    }) : null]
                }), (0, s.jsx)(m.HeaderSectionContainer, {
                    customWidth: 50,
                    children: !(0, d.inZombiesVsHumansMode)() && (0, s.jsx)(m.Goal, {
                        children: (0, d.inThanosMode)() ? "Collect All 6 Infinity Stones" : "TIME" === e ? this.timeRender() : e
                    })
                }), (0, s.jsx)(m.HeaderSectionContainer, {
                    customCSS: "\n          justify-content: flex-end;\n          display: flex;\n        ",
                    children: (0, s.jsxs)("div", {
                        style: {
                            display: "flex"
                        },
                        children: [!(0, d.inProduction)() && (0, s.jsx)(h.default, {
                            onClick: this.newGame,
                            icon: (0, s.jsx)(g.default, {}),
                            tooltipMessage: "[DEV] Start New Game"
                        }), (0, s.jsx)(h.default, {
                            onClick: this.toggleMusic,
                            icon: (0, s.jsx)(v.default, {}),
                            tooltipMessage: "Toggle Music"
                        }), !(0, d.inThanosMode)() && !(0, d.inZombiesVsHumansMode)() && (0, s.jsx)(h.default, {
                            onClick: this.endGame,
                            icon: (0, s.jsx)(x.default, {}),
                            tooltipMessage: "End Game"
                        })]
                    })
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                startDate: Date.now(),
                showLargeCode: !1
            }), (0, o.default)(this, "toggleLargeCode", (() => this.setState({
                showLargeCode: !this.state.showLargeCode
            }))), (0, o.default)(this, "endGame", (() => {
                (0, d.endGame)(!0)
            })), (0, o.default)(this, "toggleMusic", (() => {
                this.props.gameOptions.music = !this.props.gameOptions.music
            })), (0, o.default)(this, "newGame", (() => {
                this.props.engine.game.send("DEV_NEW_GAME"), setTimeout((() => window.location.reload()), 200)
            })), (0, o.default)(this, "timeRender", (() => this.props.gameValues.gameEndDate ? (0, s.jsx)(t(f), {
                renderer: y,
                onComplete: d.endGame,
                date: this.props.gameValues.gameEndDate
            }) : null)), (0, o.default)(this, "getGameGoalText", (() => {
                const {
                    gameOptions: {
                        goal: e
                    }
                } = this.props;
                return e.type === p.GameGoal.allIn ? `Reach ${(0,d.getMoney)(e.value)}` : e.type === p.GameGoal.race ? `First to ${(0,d.getMoney)(e.value)}` : e.type === p.GameGoal.time ? "TIME" : ""
            }))
        }
    };
    b = (0, i.__decorate)([(0, u.inject)("gameValues", "gameOptions", "ui", "engine"), u.observer], b);
    var w = b
})), r.register("D9uHZ", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.getTimeDifference = e.exports.zeroPad = void 0;
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = s(r("fywoC")),
        i = s(r("djNMu"));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = e.exports.zeroPad = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            if (0 === t) return e;
            var n = String(e);
            return n.length >= t ? n : ("0".repeat(t) + n).slice(-1 * t)
        },
        d = e.exports.getTimeDifference = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.now,
                r = void 0 === n ? Date.now : n,
                a = t.precision,
                o = void 0 === a ? 0 : a,
                i = t.controlled,
                s = void 0 !== i && i,
                l = "string" == typeof e ? new Date(e) : e,
                d = parseInt(1e3 * (Math.max(0, s ? l : l - r()) / 1e3).toFixed(Math.max(0, Math.min(20, o))), 10),
                u = d / 1e3;
            return {
                total: d,
                days: Math.floor(u / 86400),
                hours: Math.floor(u / 3600 % 24),
                minutes: Math.floor(u / 60 % 60),
                seconds: Math.floor(u % 60),
                milliseconds: Number((u % 1 * 1e3).toFixed()),
                completed: d <= 0
            }
        },
        u = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                c.call(r);
                var a = r.props,
                    o = a.date,
                    i = a.now,
                    s = a.precision,
                    l = a.controlled;
                return r.mounted = !1, r.state = n({}, d(o, {
                    now: i,
                    precision: s,
                    controlled: l
                })), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), a(t, [{
                key: "componentDidMount",
                value: function() {
                    this.mounted = !0, this.props.controlled || (this.interval = setInterval(this.tick, this.props.intervalDelay))
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = e.date,
                        n = e.now,
                        r = e.precision,
                        a = e.controlled;
                    this.setDeltaState(d(t, {
                        now: n,
                        precision: r,
                        controlled: a
                    }))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.mounted = !1, this.clearInterval()
                }
            }, {
                key: "setDeltaState",
                value: function(e) {
                    !this.state.completed && e.completed && (this.clearInterval(), this.props.onComplete && this.props.onComplete(e)), this.mounted && this.setState(n({}, e))
                }
            }, {
                key: "getFormattedDelta",
                value: function() {
                    var e = this.state,
                        t = e.days,
                        n = e.hours,
                        r = this.state,
                        a = r.minutes,
                        o = r.seconds,
                        i = this.props,
                        s = i.daysInHours,
                        d = i.zeroPadLength;
                    return s ? (n = l(n + 24 * t, d), t = null) : n = l(n, Math.min(2, d)), {
                        days: t,
                        hours: n,
                        minutes: l(a, Math.min(2, d)),
                        seconds: l(o, Math.min(2, d))
                    }
                }
            }, {
                key: "clearInterval",
                value: function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }, t
                }((function() {
                    clearInterval(this.interval), delete this.interval
                }))
            }, {
                key: "render",
                value: function() {
                    var e = this.getFormattedDelta();
                    if (this.props.renderer) return this.props.renderer(n({}, this.props, this.state, e));
                    if (this.state.completed && this.props.children) {
                        var t = n({}, this.props, this.state, e);
                        return delete t.children, o.default.cloneElement(this.props.children, {
                            countdown: t
                        })
                    }
                    var r = e.days,
                        a = e.hours,
                        i = e.minutes,
                        s = e.seconds;
                    return o.default.createElement("span", null, r, null != r ? ":" : "", a, ":", i, ":", s)
                }
            }]), t
        }(o.default.Component),
        c = function() {
            var e = this;
            this.tick = function() {
                var t = e.props,
                    r = t.date,
                    a = t.now,
                    o = t.precision,
                    i = t.controlled,
                    s = t.onTick,
                    l = d(r, {
                        now: a,
                        precision: o,
                        controlled: i
                    });
                e.setDeltaState(n({}, l)), s && l.total > 0 && s(l)
            }
        };
    e.exports.default = u, u.propTypes = {
        date: i.default.oneOfType([i.default.instanceOf(Date), i.default.string, i.default.number]).isRequired,
        daysInHours: i.default.bool,
        zeroPadLength: i.default.number,
        controlled: i.default.bool,
        intervalDelay: i.default.number,
        precision: i.default.number,
        children: i.default.any,
        renderer: i.default.func,
        now: i.default.func,
        onTick: i.default.func,
        onComplete: i.default.func
    }, u.defaultProps = {
        daysInHours: !1,
        zeroPadLength: 2,
        controlled: !1,
        intervalDelay: 1e3,
        precision: 0,
        children: null
    }
})), r.register("eLbyq", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("hxEiv"),
        o = r("93yIm"),
        i = r("e4KJZ");
    r("fywoC");
    var s = e => (0, a.jsx)(i.default, {
        placement: "leftBottom",
        title: e.tooltipMessage,
        children: (0, a.jsx)(o.default, {
            style: {
                marginLeft: 5
            },
            onClick: e.onClick,
            type: "primary",
            shape: "circle",
            icon: e.icon,
            size: "large"
        })
    })
})), r.register("bTJ8B", (function(t, n) {
    e(t.exports, "Container", (function() {
        return c
    })), e(t.exports, "GameCode", (function() {
        return f
    })), e(t.exports, "Goal", (function() {
        return p
    })), e(t.exports, "HeaderSectionContainer", (function() {
        return h
    }));
    var a = r("bbvHy"),
        o = r("2FDaO");
    let i, s, l, d, u = e => e;
    const c = o.default.div(i || (i = u`
  height: 64px;
  width: 100%;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding-left: 22px;
  padding-right: 22px;
  display: flex;
  align-items: center;
`)),
        f = o.default.div(s || (s = u`
  padding: 6px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  font-family: ${0};
  ${0}
`), a.default.fontFamilyName, (e => e.showLargeCode ? "\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    background: rgba(0, 0, 0, 0.9);\n    z-index: 99999;\n    font-size: 150px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  " : null)),
        p = o.default.div(l || (l = u`
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  font-size: 29px;
  ${0};
`), a.default.black),
        h = o.default.div(d || (d = u`
  ${0}
  width: ${0}%;
;
`), (e => e.customCSS ? e.customCSS : ""), (e => e.customWidth ? e.customWidth : 25))
})), r.register("7uYFt", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("hC3BQ"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "EnterOutlined";
    var d = o.forwardRef(l)
})), r.register("hC3BQ", (function(t, n) {
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
                    d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "enter",
        theme: "outlined"
    }
})), r.register("kVS28", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("4GmeK"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "LogoutOutlined";
    var d = o.forwardRef(l)
})), r.register("4GmeK", (function(t, n) {
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
                    d: "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"
                }
            }]
        },
        name: "logout",
        theme: "outlined"
    }
})), r.register("fiiqH", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("3IHak"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "SoundOutlined";
    var d = o.forwardRef(l)
})), r.register("3IHak", (function(t, n) {
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
                    d: "M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z"
                }
            }]
        },
        name: "sound",
        theme: "outlined"
    }
})), r.register("7v4WS", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("5Z32P"),
        i = r("fywoC"),
        s = r("2FDaO"),
        l = r("auTQy"),
        d = r("4XM0b");
    let u;
    const c = s.default.div(u || (u = (e => e)`
  min-height: 0;
  flex: 1;
  display: flex;
  min-height: 0;
`));
    class f extends i.Component {
        render() {
            return (0, a.jsxs)(c, {
                children: [(0, a.jsx)(l.default, {
                    forceShowBalance: (0, o.inThanosMode)()
                }), (0, a.jsx)(d.default, {})]
            })
        }
    }
    var p = f
})), r.register("auTQy", (function(t, n) {
    e(t.exports, "leaderboardSorter", (function() {
        return g
    })), e(t.exports, "default", (function() {
        return y
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("a3l0i"),
        s = r("5Z32P"),
        l = r("lpEVe"),
        d = r("fywoC"),
        u = r("2cVVi"),
        c = r("2FDaO"),
        f = r("j2XHK"),
        p = r("dBAHx"),
        h = r("5vs73");
    let m;
    const g = e => {
            const t = (0, s.inThanosMode)() ? "stones" : "balance";
            return e.slice().sort(((e, n) => e[t] === n[t] ? 0 : e[t] > n[t] ? -1 : 1))
        },
        x = c.default.div(m || (m = (e => e)`
  max-width: ${0};
  ${0} min-width: 420px;
  flex: 1;
  min-height: 0;
  ${0} display: flex;
  flex-direction: column;
`), (e => e.customWidth ? e.customMaxWidth : "420px"), (e => e.customWidth ? "width:" + e.customWidth + ";" : null), (e => e.blockScroll ? null : "overflow: scroll;"));
    let v = class extends d.Component {
        render() {
            const e = (0, s.inTeamMode)(),
                t = g(e ? this.props.players.teams : this.props.players.players),
                n = (0, s.inBossBattleMode)();
            return (0, o.jsx)(x, {
                customWidth: this.props.customWidth,
                customMaxWidth: this.props.customMaxWidth,
                blockScroll: this.props.blockScroll,
                className: this.props.customClassName,
                style: {
                    overflow: this.props.overflow ? "visible" : "auto",
                    animationDelay: n ? "0s" : "7.4s",
                    animationDuration: n ? "7.4s" : "1s"
                },
                children: (0, o.jsx)(s.HideIfTabbedAway, {
                    children: (0, o.jsx)(u.default, {
                        style: {
                            paddingTop: 11
                        },
                        children: t.map(((t, n) => this.props.hideTop3 && n + 1 <= 3 ? null : (0, o.jsx)(p.default, {
                            position: n + 1,
                            data: t,
                            isPlayer: !e,
                            gameGoal: this.props.gameOptions.goal,
                            themes: this.props.gameValues.availableThemes,
                            hidden: !this.props.showHidden && t.activePowerups.includes(i.PowerupNames.undercover),
                            hideName: !(!(0, s.inHiddenMode)() || this.props.gameValues.currentRoute !== f.GameStatus.gameplay),
                            hideBalance: !this.props.forceShowBalance && (this.props.gameValues.currentRoute === f.GameStatus.gameplay && !(!(0, s.inHiddenMode)() && !this.props.gameOptions.specialGameType.includes(h.CLASSIC)))
                        }, t.id || t.name)))
                    })
                })
            })
        }
    };
    v = (0, a.__decorate)([(0, l.inject)("players", "gameOptions", "gameValues"), l.observer], v);
    var y = v
})), r.register("a3l0i", (function(t, n) {
    e(t.exports, "PowerupNames", (function() {
        return r
    }));
    const r = {
        secondChance: "Second Chance",
        fiftyFifty: "Fifty Fifty",
        subtractor: "Subtractor",
        reducer: "Reducer",
        shield: "Shield",
        discounter: "Discounter",
        miniBonus: "Mini Bonus",
        megaBonus: "Mega Bonus",
        spiderWeb: "Spider Web",
        trickOrTreat: "Trick Or Treat",
        pumpkinPie: "Pumpkin Pie",
        fivePercentBot: "5 Percent Bot",
        giving: "Giving",
        repurchasePowerups: "repurchasePowerups",
        link: "Link",
        deflector: "Deflector",
        undercover: "Undercover",
        firstStone: "Reality Stone",
        secondStone: "Soul Stone",
        thirdStone: "Mind Stone",
        fourthStone: "Space Stone",
        fifthStone: "Time Stone",
        sixthStone: "Power Stone"
    }
})), r.register("dBAHx", (function(t, n) {
    e(t.exports, "getTeamPlayerNames", (function() {
        return O
    })), e(t.exports, "default", (function() {
        return V
    }));
    var a = r("divCp"),
        o = r("hxEiv"),
        i = r("c72PM"),
        s = r("9xElQ"),
        l = r("5Z32P"),
        d = r("d1LT2"),
        u = r("bbvHy"),
        c = r("7mCD4"),
        f = r("fywoC"),
        p = r("2FDaO"),
        h = r("j2XHK"),
        m = r("4TNyn");
    let g, x, v, y, b, w, j, C, E, S = e => e;
    const O = e => {
            let t = "";
            return e.forEach(((n, r) => {
                t += n, r + 1 !== e.length && (t += ", ")
            })), t
        },
        k = p.default.div(g || (g = S`
  background: ${0};
  color: ${0};
  padding: 7px;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
  flex: 1;
  min-height: 0;
  margin: 0px 15px 10px 15px;
  box-shadow: ${0};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.25s;
  transition: background 0.25s;
`), (e => e.background), (e => e.text), c.default.basic),
        P = p.default.div(x || (x = S`
  ${0};
  font-size: ${0}px;
`), u.default.black, (e => e.large ? 34 : 23)),
        M = p.default.div(v || (v = S`
  ${0};
  font-size: ${0}px;
  margin-left: 7px;
  margin-right: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`), u.default.bold, (e => e.large ? 30 : 20)),
        D = p.default.div(y || (y = S`
  font-size: ${0}px;
`), (e => e.large ? 30 : 20)),
        _ = p.default.div(b || (b = S`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`)),
        T = p.default.div(w || (w = S`
  display: flex;
  align-items: center;
`)),
        A = p.default.div(j || (j = S`
  height: ${0}px;
  width: ${0}px;
  border-radius: 4px;
  background: ${0};
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`), (e => e.large ? 37 : 25), (e => e.large ? 37 : 25), (e => e.background)),
        N = p.default.div(C || (C = S`
  font-size: ${0}px;
  ${0};
`), (e => e.large ? 37 : 25), u.default.bold),
        I = p.default.div(E || (E = S`
  font-size: ${0}px;
  text-align: center;
`), (e => e.large ? 24 : 16)),
        R = "takes the lead";
    class F extends f.Component {
        componentDidUpdate(e) {
            if (this.props.gameGoal.type === h.GameGoal.race && this.props.data.balance >= this.props.gameGoal.value)(0, l.endGame)();
            else if (1 === this.props.position && 1 !== e.position) {
                if (this.props.hidden) return;
                if (this.props.isPlayer) {
                    const e = this.props.data;
                    (0, l.addActivityItem)({
                        name: (0, l.inHiddenMode)() ? "Someone" : e.name,
                        action: R,
                        customTextColor: d.default.LightSuccessGreen
                    })
                } else {
                    const e = this.props.data;
                    (0, l.addActivityItem)({
                        name: e.id,
                        action: R,
                        customTextColor: d.default.LightSuccessGreen
                    })
                }
            }
        }
        render() {
            if (this.props.hidden) return null;
            const {
                position: e
            } = this.props;
            if (this.props.isPlayer) {
                const t = this.props.data,
                    n = this.getColors();
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(k, {
                        style: {
                            cursor: "pointer"
                        },
                        onClick: this.openDrawer,
                        ...n,
                        children: [(0, o.jsxs)(P, {
                            large: this.props.large,
                            children: [e, "."]
                        }), (0, o.jsx)(M, {
                            large: this.props.large,
                            children: this.props.hideName ? "Someone" : t.name
                        }), (0, o.jsx)(D, {
                            large: this.props.large,
                            children: this.props.hideBalance ? "" : null !== t.stones && void 0 !== t.stones ? `${t.stones} ${(0,l.plural)("stone",t.stones)}` : (0, l.getMoney)(t.balance)
                        })]
                    }), (0, o.jsx)(s.default, {
                        maskClosable: !0,
                        closable: !1,
                        onClose: this.closeDrawer,
                        open: this.state.drawerVisible,
                        placement: "bottom",
                        height: "auto",
                        rootStyle: {
                            fontFamily: u.default.fontFamilyName,
                            color: d.default.Black
                        },
                        children: (0, o.jsx)(m.default, {
                            close: this.closeDrawer,
                            playerId: t.id,
                            playerName: t.name,
                            playerBalance: t.balance,
                            playerStones: t.stones
                        })
                    })]
                })
            }
            const t = this.props.data;
            return (0, o.jsxs)(k, {
                background: d.default.White,
                text: d.default.Black,
                children: [(0, o.jsxs)(P, {
                    large: this.props.large,
                    children: [e, "."]
                }), (0, o.jsxs)(_, {
                    children: [(0, o.jsxs)(T, {
                        children: [(0, o.jsx)(A, {
                            large: this.props.large,
                            background: (0, l.getTeamColor)(t.id),
                            children: t.icon && (0, o.jsx)("i", {
                                className: t.icon,
                                style: {
                                    color: t.color.text
                                }
                            })
                        }), (0, o.jsx)(N, {
                            large: this.props.large,
                            children: (0, o.jsx)(i.default, {
                                text: t.id
                            })
                        })]
                    }), (0, o.jsx)(I, {
                        large: this.props.large,
                        children: this.getTeamPlayerNames()
                    })]
                }), (0, o.jsx)(D, {
                    large: this.props.large,
                    children: (0, l.getMoney)(t.balance)
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                drawerVisible: !1
            }), (0, a.default)(this, "openDrawer", (() => this.setState({
                drawerVisible: !0
            }))), (0, a.default)(this, "closeDrawer", (() => this.setState({
                drawerVisible: !1
            }))), (0, a.default)(this, "getTeamPlayerNames", (() => {
                const e = this.props.data;
                return O(e.players)
            })), (0, a.default)(this, "getColors", (() => {
                const e = this.props.data,
                    {
                        theme: t
                    } = e,
                    n = this.props.themes,
                    r = n.filter((e => e.name === t)).length > 0 ? n.filter((e => e.name === t))[0] : n.filter((e => "Default" === e.name))[0];
                return "Default" === r.name ? {
                    background: d.default.White,
                    text: d.default.Black
                } : {
                    background: r.question.background,
                    text: r.question.text
                }
            }))
        }
    }
    var V = F
})), r.register("c72PM", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("bBunw"),
        s = r("lpEVe"),
        l = r("fywoC");
    let d = class extends l.Component {
        componentDidUpdate(e) {
            e.text !== this.props.text && (this.setState({
                text: this.props.text
            }), this.onTranslate())
        }
        componentDidMount() {
            this.onTranslate()
        }
        onTranslate() {
            if ("en" !== this.props.gameOptions.language && !this.props.text.includes(this.props.disableIfContains)) return this.props.translations[this.props.text] ? this.setState({
                text: this.props.translations[this.props.text]
            }) : void this.requestTranslation().then((e => {
                this.props.translations[this.props.text] = e, this.setState({
                    text: e
                })
            })).catch()
        }
        render() {
            return this.buildString()
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                text: this.props.text
            }), (0, a.default)(this, "buildString", (() => {
                let e = this.state.text;
                return this.props.suffix && (e += this.props.suffix), e
            })), (0, a.default)(this, "requestTranslation", (async () => {
                try {
                    return (await i.default.post("/api/translate", {
                        to: this.props.gameOptions.language,
                        text: this.props.text
                    })).data
                } catch (e) {
                    return this.props.text
                }
            }))
        }
    };
    d = (0, o.__decorate)([(0, s.inject)("translations", "gameOptions"), s.observer], d);
    var u = d
})), r.register("7mCD4", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        basic: "0px 4px 33px -6px rgba(0, 0, 0, 0.46)",
        light: "0 4px 14px 0 rgba(0, 0, 0, 0.2)"
    }
})), r.register("4TNyn", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = r("divCp"),
        o = r("hxEiv"),
        i = r("e4KJZ"),
        s = r("h1Mb4"),
        l = r("5Z32P"),
        d = r("d1LT2"),
        u = r("fywoC"),
        c = r("2FDaO");
    let f;
    const p = e => (0, o.jsx)(i.default, {
        title: e.tooltip,
        placement: "bottomRight",
        children: (0, o.jsx)(g, {
            onClick: e.handleClick,
            backgroundColor: e.backgroundColor,
            children: (0, o.jsx)("i", {
                className: e.icon
            })
        })
    });
    class h extends u.Component {
        render() {
            const e = void 0 === this.props.playerBalance ? `${this.props.playerStones} stones` : (0, l.getMoney)(this.props.playerBalance || 0);
            return (0, o.jsxs)("div", {
                style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [(0, o.jsxs)("div", {
                    style: {
                        fontWeight: "bold",
                        fontSize: 40,
                        flex: 1,
                        marginRight: 50,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    },
                    children: [this.props.playerName, " ", (0, o.jsxs)("span", {
                        style: {
                            opacity: .8
                        },
                        children: ["(", e, ")"]
                    })]
                }), (0, o.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap"
                    },
                    children: [(0, o.jsx)(p, {
                        icon: "fas fa-user-slash",
                        handleClick: this.kickPlayer,
                        tooltip: "Remove From Game",
                        backgroundColor: "#c62828"
                    }), (0, o.jsx)(p, {
                        icon: "fas fa-plus",
                        handleClick: this.increaseBalance,
                        tooltip: "Increase Balance by 10%",
                        backgroundColor: "#1b5e20"
                    }), (0, o.jsx)(p, {
                        icon: "fas fa-minus",
                        handleClick: this.decreaseBalance,
                        tooltip: "Decrease Balance By 10%",
                        backgroundColor: "#ac1900"
                    }), (0, o.jsx)(p, {
                        icon: "fas fa-snowflake",
                        handleClick: this.freezePlayer,
                        tooltip: "Freeze",
                        backgroundColor: "#424242"
                    })]
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "kickPlayer", (() => {
                (0, l.banPlayer)(this.props.playerId), this.props.close()
            })), (0, a.default)(this, "increaseBalance", (() => {
                (0, l.send)(s.default.leaderboardChangeBalance, {
                    balancePercentageChange: .1,
                    playerId: this.props.playerId
                }), this.props.close()
            })), (0, a.default)(this, "decreaseBalance", (() => {
                (0, l.send)(s.default.leaderboardChangeBalance, {
                    balancePercentageChange: -.1,
                    playerId: this.props.playerId
                }), this.props.close()
            })), (0, a.default)(this, "freezePlayer", (() => {
                (0, l.send)(s.default.leaderboardFreezePlayer, {
                    playerId: this.props.playerId
                }), this.props.close()
            }))
        }
    }
    var m = h;
    const g = c.default.div(f || (f = (e => e)`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  display: flex;
  margin-right: 7px;
  justify-content: center;
  align-items: center;
  background: ${0};
  color: ${0};
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    border-width: 4px;
  }
`), (e => e.backgroundColor), d.default.White)
})), r.register("4XM0b", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("2FDaO"),
        s = r("9EEcU"),
        l = r("32K3F");
    let d;
    const u = i.default.div(d || (d = (e => e)`
  min-height: 0;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`));
    class c extends o.Component {
        render() {
            return (0, a.jsxs)(u, {
                children: [(0, a.jsx)(l.default, {}), (0, a.jsx)(s.default, {})]
            })
        }
    }
    var f = c
})), r.register("9EEcU", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("7mCD4"),
        l = r("lpEVe"),
        d = r("fywoC"),
        u = r("2cVVi"),
        c = r("2FDaO"),
        f = r("a31dM"),
        p = r("5Z32P");
    let h;
    const m = c.default.div(h || (h = (e => e)`
  height: 45%;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-right: 10px;
  box-shadow: ${0};
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
`), s.default.basic);
    let g = class extends d.Component {
        render() {
            return this.getContent()
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "getContent", (() => this.props.withoutContainer ? this.getFeed() : (0, i.jsx)(m, {
                children: this.getFeed()
            }))), (0, a.default)(this, "getFeed", (() => {
                const e = this.props.gameValues.activityItems.slice().reverse();
                return (0, i.jsx)(u.default, {
                    enterAnimation: "accordionVertical",
                    style: {
                        padding: 8
                    },
                    children: e.map((e => (0, i.jsx)(f.default, {
                        customFont: this.props.customFont,
                        item: e
                    }, "ai-" + e.key)))
                })
            }))
        }
    };
    g = (0, o.__decorate)([(0, l.inject)("gameValues"), l.observer], g);
    var x = e => (0, i.jsx)(p.HideIfTabbedAway, {
        children: (0, i.jsx)(g, {
            ...e
        })
    })
})), r.register("a31dM", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv"),
        o = r("c72PM"),
        i = r("d1LT2"),
        s = r("bbvHy"),
        l = r("fywoC"),
        d = r("2FDaO");
    let u, c, f = e => e;
    const p = d.default.div(u || (u = f`
  color: ${0};
  margin-bottom: 5px;
  font-size: 21px;
  padding: 5px;
  box-sizing: border-box;
`), i.default.White),
        h = d.default.span(c || (c = f`
  color: ${0};
  font-weight: 800;
`), (e => e.customColor ? e.customColor : i.default.Gold));
    class m extends l.Component {
        render() {
            return (0, a.jsxs)(p, {
                style: {
                    fontFamily: this.props.customFont || s.default.fontFamilyName
                },
                children: [(0, a.jsx)(h, {
                    customColor: this.props.item.customTextColor,
                    children: this.props.item.name + " "
                }), (0, a.jsx)("span", {
                    children: (0, a.jsx)(o.default, {
                        text: this.props.item.action
                    })
                })]
            })
        }
    }
    var g = m
})), r.register("32K3F", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv"),
        o = r("5Z32P"),
        i = r("7mCD4"),
        s = r("lpEVe"),
        l = r("fywoC"),
        d = r("2FDaO"),
        u = r("14gNB"),
        c = r("1OPPR"),
        f = r("VvPwO");
    let p;
    const h = l.lazy((() => r("dPDk2"))),
        m = d.default.div(p || (p = (e => e)`
  height: 55%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 8px;
  box-shadow: ${0};
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  position: relative;
  .c3 {
    flex: 1;
  }

  .c3-circle {
    fill: #ffd700;
  }
  .c3-line {
    stroke-width: 4px;
    stroke: white !important;
  }
`), i.default.basic);
    var g = (0, s.observer)((() => {
        const {
            innerWidth: e,
            innerHeight: t
        } = (0, c.useWindowSize)(), {
            players: n
        } = l.useContext(f.default), r = (0, o.inThanosMode)() ? n.totalStones : n.totalBalance;
        return (0, a.jsxs)(m, {
            id: "gimkit-balance-tracker",
            children: [(0, a.jsx)(o.HideIfTabbedAway, {
                children: (0, a.jsx)(u.default, {
                    width: e,
                    height: t,
                    balance: r
                })
            }), (0, a.jsx)(l.Suspense, {
                fallback: null,
                children: (0, a.jsx)(h, {
                    balance: r
                })
            })]
        })
    }))
})), r.register("14gNB", (function(n, a) {
    e(n.exports, "default", (function() {
        return E
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        s = r("hxEiv"),
        l = r("5Z32P"),
        d = r("bbvHy"),
        u = r("7mCD4"),
        c = r("lpEVe"),
        f = r("fywoC"),
        p = r("ZdUON"),
        h = r("2FDaO"),
        m = r("j2XHK");
    let g, x, v = e => e;
    const y = e => (0, l.getMoney)(e),
        b = e => `${e} ${(0,l.plural)("stone",e)}`,
        w = h.default.div(g || (g = v`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${0};
`), d.default.black),
        j = h.default.div(x || (x = v`
  font-size: ${0}px;
  background: rgba(0, 0, 0, 0.9);
  padding: 4vh 5vw;
  line-height: 1;
  border-radius: calc(1vw + 1vh);
  box-shadow: ${0};
  z-index: 5;
`), (e => e.fontSize), u.default.basic);
    let C = class extends f.Component {
        static getDerivedStateFromProps(e, t) {
            return {
                lastBalance: t.currentBalance,
                currentBalance: e.balance
            }
        }
        componentDidUpdate() {
            this.props.gameOptions.goal.type === m.GameGoal.allIn && this.state.currentBalance >= this.props.gameOptions.goal.value && (0, l.endGame)()
        }
        render() {
            const e = (0, l.inThanosMode)() ? b : y,
                n = (r = this.props.width, a = this.props.height, o = e(this.state.currentBalance).length, (r + a) / 2 / (o + (o < 3 ? 4 : 2)) * .9);
            var r, a, o;
            return (0, s.jsx)(w, {
                children: (0, s.jsx)(j, {
                    fontSize: n,
                    children: (0, s.jsx)(t(p), {
                        start: this.state.lastBalance,
                        end: this.state.currentBalance,
                        formattingFn: (0, l.inThanosMode)() ? b : y,
                        duration: .6
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                lastBalance: 0,
                currentBalance: 0
            })
        }
    };
    C = (0, i.__decorate)([(0, c.inject)("gameOptions"), c.observer], C);
    var E = C
})), r.register("ZdUON", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var n = r("fywoC"),
        a = r("ikowl");

    function o(e, t) {
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
            t % 2 ? o(Object(n), !0).forEach((function(t) {
                s(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l() {
        return l = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, l.apply(this, arguments)
    }

    function d(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
            if (null == e) return {};
            var n, r, a = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }
    var u = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? n.useLayoutEffect : n.useEffect;

    function c(e) {
        var t = n.useRef(e);
        return u((function() {
            t.current = e
        })), n.useCallback((function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return t.current.apply(void 0, n)
        }), [])
    }
    var f = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"],
        p = {
            decimal: ".",
            delay: null,
            prefix: "",
            suffix: "",
            duration: 2,
            start: 0,
            startOnMount: !0,
            enableReinitialize: !0
        },
        h = function(e) {
            var t = n.useMemo((function() {
                    return i(i({}, p), e)
                }), [e]),
                r = t.ref,
                o = t.startOnMount,
                s = t.enableReinitialize,
                l = t.delay,
                u = t.onEnd,
                h = t.onStart,
                m = t.onPauseResume,
                g = t.onReset,
                x = t.onUpdate,
                v = d(t, f),
                y = n.useRef(),
                b = n.useRef(),
                w = n.useRef(!1),
                j = c((function() {
                    return function(e, t) {
                        var n = t.decimal,
                            r = t.decimals,
                            o = t.duration,
                            i = t.easingFn,
                            s = t.end,
                            l = t.formattingFn,
                            d = t.numerals,
                            u = t.prefix,
                            c = t.separator,
                            f = t.start,
                            p = t.suffix,
                            h = t.useEasing,
                            m = t.enableScrollSpy,
                            g = t.scrollSpyDelay,
                            x = t.scrollSpyOnce;
                        return new a.CountUp(e, s, {
                            startVal: f,
                            duration: o,
                            decimal: n,
                            decimalPlaces: r,
                            easingFn: i,
                            formattingFn: l,
                            numerals: d,
                            separator: c,
                            prefix: u,
                            suffix: p,
                            useEasing: h,
                            useGrouping: !!c,
                            enableScrollSpy: m,
                            scrollSpyDelay: g,
                            scrollSpyOnce: x
                        })
                    }("string" == typeof r ? r : r.current, v)
                })),
                C = c((function(e) {
                    var t = y.current;
                    if (t && !e) return t;
                    var n = j();
                    return y.current = n, n
                })),
                E = c((function() {
                    var e = function() {
                        return C(!0).start((function() {
                            null == u || u({
                                pauseResume: S,
                                reset: O,
                                start: P,
                                update: k
                            })
                        }))
                    };
                    l && l > 0 ? b.current = setTimeout(e, 1e3 * l) : e(), null == h || h({
                        pauseResume: S,
                        reset: O,
                        update: k
                    })
                })),
                S = c((function() {
                    C().pauseResume(), null == m || m({
                        reset: O,
                        start: P,
                        update: k
                    })
                })),
                O = c((function() {
                    C().el && (b.current && clearTimeout(b.current), C().reset(), null == g || g({
                        pauseResume: S,
                        start: P,
                        update: k
                    }))
                })),
                k = c((function(e) {
                    C().update(e), null == x || x({
                        pauseResume: S,
                        reset: O,
                        start: P
                    })
                })),
                P = c((function() {
                    O(), E()
                })),
                M = c((function(e) {
                    o && (e && O(), E())
                }));
            return n.useEffect((function() {
                w.current ? s && M(!0) : (w.current = !0, M())
            }), [s, w, M, l, e.start, e.suffix, e.prefix, e.duration, e.separator, e.decimals, e.decimal, e.formattingFn]), n.useEffect((function() {
                return function() {
                    O()
                }
            }), [O]), {
                start: P,
                pauseResume: S,
                reset: O,
                update: k,
                getCountUp: C
            }
        },
        m = ["className", "redraw", "containerProps", "children", "style"];
    e.exports.default = function(e) {
        var t = e.className,
            r = e.redraw,
            a = e.containerProps,
            o = e.children,
            s = e.style,
            u = d(e, m),
            f = n.useRef(null),
            p = n.useRef(!1),
            g = h(i(i({}, u), {}, {
                ref: f,
                startOnMount: "function" != typeof o || 0 === e.delay,
                enableReinitialize: !1
            })),
            x = g.start,
            v = g.reset,
            y = g.update,
            b = g.pauseResume,
            w = g.getCountUp,
            j = c((function() {
                x()
            })),
            C = c((function(t) {
                e.preserveValue || v(), y(t)
            })),
            E = c((function() {
                "function" != typeof e.children || f.current instanceof Element ? w() : console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')
            }));
        n.useEffect((function() {
            E()
        }), [E]), n.useEffect((function() {
            p.current && C(e.end)
        }), [e.end, C]);
        var S = r && e;
        return n.useEffect((function() {
            r && p.current && j()
        }), [j, r, S]), n.useEffect((function() {
            !r && p.current && j()
        }), [j, r, e.start, e.suffix, e.prefix, e.duration, e.separator, e.decimals, e.decimal, e.className, e.formattingFn]), n.useEffect((function() {
            p.current = !0
        }), []), "function" == typeof o ? o({
            countUpRef: f,
            start: x,
            reset: v,
            update: y,
            pauseResume: b,
            getCountUp: w
        }) : n.createElement("span", l({
            className: t,
            ref: f,
            style: s
        }, a), void 0 !== e.start ? w().formattingFn(e.start) : "")
    }, e.exports.useCountUp = h
})), r.register("ikowl", (function(t, n) {
    e(t.exports, "CountUp", (function() {
        return a
    }), (function(e) {
        return a = e
    }));
    var r = function() {
            return (r = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }).apply(this, arguments)
        },
        a = function() {
            function e(e, t, n) {
                var a = this;
                this.endVal = t, this.options = n, this.version = "2.3.2", this.defaults = {
                    startVal: 0,
                    decimalPlaces: 0,
                    duration: 2,
                    useEasing: !0,
                    useGrouping: !0,
                    smartEasingThreshold: 999,
                    smartEasingAmount: 333,
                    separator: ",",
                    decimal: ".",
                    prefix: "",
                    suffix: "",
                    enableScrollSpy: !1,
                    scrollSpyDelay: 200,
                    scrollSpyOnce: !1
                }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(e) {
                    a.startTime || (a.startTime = e);
                    var t = e - a.startTime;
                    a.remaining = a.duration - t, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(t, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(t, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (t / a.duration);
                    var n = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
                    a.frameVal = n ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), t < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.callback && a.callback()
                }, this.formatNumber = function(e) {
                    var t, n, r, o, i = e < 0 ? "-" : "";
                    t = Math.abs(e).toFixed(a.options.decimalPlaces);
                    var s = (t += "").split(".");
                    if (n = s[0], r = s.length > 1 ? a.options.decimal + s[1] : "", a.options.useGrouping) {
                        o = "";
                        for (var l = 0, d = n.length; l < d; ++l) 0 !== l && l % 3 == 0 && (o = a.options.separator + o), o = n[d - l - 1] + o;
                        n = o
                    }
                    return a.options.numerals && a.options.numerals.length && (n = n.replace(/[0-9]/g, (function(e) {
                        return a.options.numerals[+e]
                    })), r = r.replace(/[0-9]/g, (function(e) {
                        return a.options.numerals[+e]
                    }))), i + a.options.prefix + n + r + a.options.suffix
                }, this.easeOutExpo = function(e, t, n, r) {
                    return n * (1 - Math.pow(2, -10 * e / r)) * 1024 / 1023 + t
                }, this.options = r(r({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(t), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof e ? document.getElementById(e) : e, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, e) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push((function() {
                    return a.handleScroll(a)
                })), window.onscroll = function() {
                    window.onScrollFns.forEach((function(e) {
                        return e()
                    }))
                }, this.handleScroll(this)))
            }
            return e.prototype.handleScroll = function(e) {
                if (e && window && !e.once) {
                    var t = window.innerHeight + window.scrollY,
                        n = e.el.getBoundingClientRect(),
                        r = n.top + n.height + window.pageYOffset;
                    r < t && r > window.scrollY && e.paused ? (e.paused = !1, setTimeout((function() {
                        return e.start()
                    }), e.options.scrollSpyDelay), e.options.scrollSpyOnce && (e.once = !0)) : window.scrollY > r && !e.paused && e.reset()
                }
            }, e.prototype.determineDirectionAndSmartEasing = function() {
                var e = this.finalEndVal ? this.finalEndVal : this.endVal;
                this.countDown = this.startVal > e;
                var t = e - this.startVal;
                if (Math.abs(t) > this.options.smartEasingThreshold && this.options.useEasing) {
                    this.finalEndVal = e;
                    var n = this.countDown ? 1 : -1;
                    this.endVal = e + n * this.options.smartEasingAmount, this.duration = this.duration / 2
                } else this.endVal = e, this.finalEndVal = null;
                null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
            }, e.prototype.start = function(e) {
                this.error || (this.callback = e, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
            }, e.prototype.pauseResume = function() {
                this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
            }, e.prototype.reset = function() {
                cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
            }, e.prototype.update = function(e) {
                cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(e), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
            }, e.prototype.printValue = function(e) {
                var t = this.formattingFn(e);
                "INPUT" === this.el.tagName ? this.el.value = t : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = t : this.el.innerHTML = t
            }, e.prototype.ensureNumber = function(e) {
                return "number" == typeof e && !isNaN(e)
            }, e.prototype.validateValue = function(e) {
                var t = Number(e);
                return this.ensureNumber(t) ? t : (this.error = "[CountUp] invalid start or end value: ".concat(e), null)
            }, e.prototype.resetDuration = function() {
                this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
            }, e
        }()
})), r.register("1OPPR", (function(t, n) {
    e(t.exports, "useWindowSize", (function() {
        return l
    }));
    var a = r("fywoC"),
        o = r("6Ejon"),
        i = {
            innerHeight: null,
            innerWidth: null,
            outerHeight: null,
            outerWidth: null
        };

    function s() {
        return {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth
        }
    }

    function l() {
        var e = (0, a.useState)((function() {
                return "undefined" != typeof window ? s() : i
            })),
            t = e[0],
            n = e[1];
        return (0, o.useIsomorphicEffect)((function() {
            function e() {
                n(s())
            }
            if ("undefined" != typeof window) return window.addEventListener("resize", e),
                function() {
                    window.removeEventListener("resize", e)
                };
            console.warn("useWindowSize: window is undefined.")
        }), []), t
    }
})), r.register("6Ejon", (function(t, n) {
    e(t.exports, "useIsomorphicEffect", (function() {
        return o
    }));
    var a = r("fywoC"),
        o = "undefined" == typeof window ? a.useEffect : a.useLayoutEffect
})), r.register("VvPwO", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC"),
        o = r("fIZtR");
    var i = a.createContext(o.default)
})), r.register("dPDk2", (function(e, t) {
    e.exports = import("./" + r("ihc6Q").resolve("gBSGY")).then((() => r("9X5CI")))
})), r.register("hKgA8", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv"),
        o = r("9EEcU"),
        i = r("e9EGN");
    r("fywoC");
    var s = r("2FDaO"),
        l = r("bCi2d"),
        d = r("cPGmn"),
        u = r("iMOcM");
    let c, f, p, h, m = e => e;
    var g = () => ((0, d.useDidMount)((() => {
        (0, u.loadFont)("https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap")
    })), (0, a.jsxs)(x, {
        children: [(0, a.jsx)(i.default, {}), (0, a.jsxs)(v, {
            children: [(0, a.jsx)(y, {
                children: (0, a.jsx)(l.default, {})
            }), (0, a.jsx)(b, {
                children: (0, a.jsx)(o.default, {
                    withoutContainer: !0
                })
            })]
        })]
    }));
    const x = s.default.div(c || (c = m`
  height: 100vh;
  width: 100%;
  display: flex;
  background: #151515;
  flex-direction: column;
`)),
        v = s.default.div(f || (f = m`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`)),
        y = s.default.div(p || (p = m`
  font-family: ${0};
  height: 65%;
  width: 100%;
`), "'Bowlby One SC', cursive"),
        b = s.default.div(h || (h = m`
  height: 35%;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 7px;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`))
})), r.register("bCi2d", (function(t, n) {
    e(t.exports, "getImage", (function() {
        return h
    })), e(t.exports, "default", (function() {
        return g
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("5Z32P"),
        s = r("d1LT2"),
        l = r("lpEVe"),
        d = r("fywoC"),
        u = r("2FDaO"),
        c = r("loi6A");
    let f;
    const p = "halloween-zombie",
        h = e => e === p ? (0, i.getAssetPath)("zombie-head.svg") : (0, i.getAssetPath)("support.svg");
    let m = class extends d.Component {
        render() {
            return (0, o.jsx)(x, {
                children: this.props.entities.defendingHomebase.map((e => {
                    return (0, o.jsx)(c.default, {
                        backgroundColor: (t = e.id, "halloween-human" === t ? "#003c8f" : t === p ? "#494949" : s.default.Black),
                        color: s.default.White,
                        maxHealth: e.maxHealth,
                        currentHealth: e.health,
                        name: e.name,
                        image: h(e.id)
                    }, `base-${e.id}`);
                    var t
                }))
            })
        }
    };
    m = (0, a.__decorate)([(0, l.inject)("entities"), l.observer], m);
    var g = m;
    const x = u.default.div(f || (f = (e => e)`
  width: 100%;
  height: 100%;
  display: flex;
`))
})), r.register("loi6A", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var a = r("hxEiv"),
        o = r("c72PM"),
        i = r("fI2SP"),
        s = r("5Z32P"),
        l = r("bbvHy"),
        d = r("fywoC"),
        u = r("lKmIF");
    class c extends d.Component {
        render() {
            const e = this.props,
                t = e.currentHealth / e.maxHealth * 100;
            return (0, a.jsxs)("div", {
                style: {
                    width: "50%",
                    height: "100%",
                    padding: 25,
                    boxSizing: "border-box",
                    color: e.color,
                    background: e.backgroundColor,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: [(0, a.jsx)("img", {
                    src: e.image,
                    style: {
                        width: 150
                    }
                }), (0, a.jsx)("div", {
                    style: {
                        fontSize: 50
                    },
                    children: e.name
                }), (0, a.jsx)(i.default, {
                    percent: t,
                    status: "active",
                    showInfo: !1,
                    style: {
                        width: "80%",
                        maxWidth: 155,
                        zoom: 2.7,
                        marginTop: -9
                    },
                    trailColor: u.default.White,
                    strokeColor: "#66bb6a"
                }), (0, a.jsxs)("div", {
                    style: {
                        fontFamily: l.default.fontFamilyName,
                        fontWeight: "bold",
                        fontSize: 18,
                        opacity: .7,
                        marginTop: -8
                    },
                    children: [(0, s.numberWithCommas)(e.currentHealth), " /", " ", (0, s.numberWithCommas)(e.maxHealth), " ", (0, a.jsx)(o.default, {
                        text: "health"
                    })]
                })]
            })
        }
    }
    var f = c
})), r.register("kW7Ys", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("fucqw"),
        l = r("5Z32P"),
        d = r("bbvHy"),
        u = r("lpEVe"),
        c = r("fywoC"),
        f = r("2FDaO"),
        p = r("9NYHG"),
        h = r("hM6dD"),
        m = r("7AXVP"),
        g = r("gmcFm");
    let x, v = class extends c.Component {
        componentDidMount() {
            this.sound = (0, l.playSound)(s.default.lava.lavaRumble, {})
        }
        componentWillUnmount() {
            this.sound && (0, l.stopSound)(s.default.lava.lavaRumble)
        }
        render() {
            const {
                lava: e
            } = this.props.entities;
            return e ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)(b, {
                    children: [(0, i.jsx)(m.default, {
                        buildHeight: e.buildHeight,
                        lavaHeight: e.lavaHeight,
                        seconds: e.secondsLasted,
                        gameCode: this.props.gameValues.gameCode
                    }), (0, i.jsx)(g.default, {
                        buildHeight: e.buildHeight,
                        lavaHeight: e.lavaHeight,
                        lavaSpeed: e.lavaIncreaseSpeed,
                        buildsInProgress: e.buildsInProgress
                    })]
                }), (0, i.jsx)(p.default, {}), (0, i.jsx)(h.default, {})]
            }) : null
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "sound", null)
        }
    };
    v = (0, o.__decorate)([(0, u.inject)("entities", "gameValues"), u.observer], v);
    var y = v;
    const b = f.default.div.attrs({
        className: "animated fadeIn"
    })(x || (x = (e => e)`
  height: 100vh;
  width: 100vw;
  background: transparent;
  z-index: 2;
  display: flex;
  font-family: ${0};
`), d.default.fontFamilyName)
})), r.register("9NYHG", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("2FDaO");
    let i;
    var s = () => (0, a.jsx)(l, {
        children: (0, a.jsxs)("div", {
            className: "lavaBackground",
            children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
        })
    });
    const l = o.default.div(i || (i = (e => e)`
  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  .lavaBackground {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #303027;
    overflow: hidden;
  }

  .lavaBackground span {
    width: 27vmin;
    height: 27vmin;
    border-radius: 27vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 32;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .lavaBackground span:nth-child(0) {
    color: #e85e02;
    top: 27%;
    left: 91%;
    animation-duration: 52s;
    animation-delay: -162s;
    transform-origin: -17vw -20vh;
    box-shadow: -54vmin 0 6.996404648475373vmin currentColor;
  }
  .lavaBackground span:nth-child(1) {
    color: #b9342d;
    top: 96%;
    left: 91%;
    animation-duration: 135s;
    animation-delay: -91s;
    transform-origin: 0vw -17vh;
    box-shadow: 54vmin 0 6.946853329600785vmin currentColor;
  }
  .lavaBackground span:nth-child(2) {
    color: #e85e02;
    top: 37%;
    left: 31%;
    animation-duration: 107s;
    animation-delay: -136s;
    transform-origin: -9vw 1vh;
    box-shadow: 54vmin 0 6.808577985043389vmin currentColor;
  }
  .lavaBackground span:nth-child(3) {
    color: #e85e02;
    top: 95%;
    left: 66%;
    animation-duration: 145s;
    animation-delay: -172s;
    transform-origin: 9vw 8vh;
    box-shadow: 54vmin 0 7.197320037421205vmin currentColor;
  }
  .lavaBackground span:nth-child(4) {
    color: #b9342d;
    top: 20%;
    left: 83%;
    animation-duration: 76s;
    animation-delay: -126s;
    transform-origin: -23vw -21vh;
    box-shadow: -54vmin 0 7.4970522686813235vmin currentColor;
  }
  .lavaBackground span:nth-child(5) {
    color: #b9342d;
    top: 91%;
    left: 76%;
    animation-duration: 139s;
    animation-delay: -157s;
    transform-origin: -13vw -3vh;
    box-shadow: 54vmin 0 7.205267208382558vmin currentColor;
  }
  .lavaBackground span:nth-child(6) {
    color: #e85e02;
    top: 21%;
    left: 27%;
    animation-duration: 73s;
    animation-delay: -86s;
    transform-origin: -6vw 5vh;
    box-shadow: -54vmin 0 7.105408146722796vmin currentColor;
  }
  .lavaBackground span:nth-child(7) {
    color: #e85e02;
    top: 15%;
    left: 9%;
    animation-duration: 35s;
    animation-delay: -108s;
    transform-origin: 4vw 11vh;
    box-shadow: 54vmin 0 7.296202264610487vmin currentColor;
  }
  .lavaBackground span:nth-child(8) {
    color: #b9342d;
    top: 27%;
    left: 26%;
    animation-duration: 67s;
    animation-delay: -129s;
    transform-origin: 23vw -21vh;
    box-shadow: 54vmin 0 7.296591331750194vmin currentColor;
  }
  .lavaBackground span:nth-child(9) {
    color: #e85e02;
    top: 69%;
    left: 13%;
    animation-duration: 150s;
    animation-delay: -25s;
    transform-origin: -23vw -8vh;
    box-shadow: -54vmin 0 6.977955267057887vmin currentColor;
  }
  .lavaBackground span:nth-child(10) {
    color: #b9342d;
    top: 100%;
    left: 70%;
    animation-duration: 118s;
    animation-delay: -67s;
    transform-origin: 25vw -24vh;
    box-shadow: -54vmin 0 6.854780659200712vmin currentColor;
  }
  .lavaBackground span:nth-child(11) {
    color: #b9342d;
    top: 40%;
    left: 48%;
    animation-duration: 120s;
    animation-delay: -11s;
    transform-origin: 13vw -5vh;
    box-shadow: 54vmin 0 6.953330467768818vmin currentColor;
  }
  .lavaBackground span:nth-child(12) {
    color: #b9342d;
    top: 81%;
    left: 18%;
    animation-duration: 69s;
    animation-delay: -61s;
    transform-origin: -4vw -21vh;
    box-shadow: -54vmin 0 6.766750508427784vmin currentColor;
  }
  .lavaBackground span:nth-child(13) {
    color: #e85e02;
    top: 96%;
    left: 32%;
    animation-duration: 135s;
    animation-delay: -139s;
    transform-origin: 3vw -13vh;
    box-shadow: 54vmin 0 7.684675615848153vmin currentColor;
  }
  .lavaBackground span:nth-child(14) {
    color: #b9342d;
    top: 57%;
    left: 9%;
    animation-duration: 9s;
    animation-delay: -156s;
    transform-origin: 21vw 22vh;
    box-shadow: 54vmin 0 7.683781970903858vmin currentColor;
  }
  .lavaBackground span:nth-child(15) {
    color: #b9342d;
    top: 77%;
    left: 49%;
    animation-duration: 106s;
    animation-delay: -149s;
    transform-origin: 6vw -20vh;
    box-shadow: -54vmin 0 7.741772705960666vmin currentColor;
  }
  .lavaBackground span:nth-child(16) {
    color: #e85e02;
    top: 88%;
    left: 68%;
    animation-duration: 125s;
    animation-delay: -100s;
    transform-origin: 23vw -19vh;
    box-shadow: 54vmin 0 6.831698893645452vmin currentColor;
  }
  .lavaBackground span:nth-child(17) {
    color: #e85e02;
    top: 5%;
    left: 54%;
    animation-duration: 53s;
    animation-delay: -153s;
    transform-origin: -6vw -10vh;
    box-shadow: -54vmin 0 7.3578363135070015vmin currentColor;
  }
  .lavaBackground span:nth-child(18) {
    color: #b9342d;
    top: 25%;
    left: 79%;
    animation-duration: 24s;
    animation-delay: -36s;
    transform-origin: -18vw -11vh;
    box-shadow: 54vmin 0 7.411246749707873vmin currentColor;
  }
`))
})), r.register("hM6dD", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("bbvHy"),
        s = r("lpEVe"),
        l = r("fywoC"),
        d = r("2FDaO");
    let u, c, f, p = e => e,
        h = class extends l.Component {
            render() {
                return this.props.entities.lava && this.props.entities.lava.lavaIncreasePaused ? (0, o.jsxs)(g, {
                    children: [(0, o.jsx)(x, {}), (0, o.jsx)(v, {
                        children: "Lava Paused!"
                    })]
                }) : null
            }
        };
    h = (0, a.__decorate)([(0, s.inject)("entities"), s.observer], h);
    var m = h;
    const g = d.default.div.attrs({
            className: "animated fadeIn"
        })(u || (u = p`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${0};
`), i.default.fontFamilyName),
        x = d.default.i.attrs({
            className: "fas fa-pause-circle"
        })(c || (c = p`
  font-size: 100px;
  color: #f5f5f5;
`)),
        v = d.default.div(f || (f = p`
  margin-left: 30px;
  font-size: 57px;
  font-weight: bold;
`))
})), r.register("7AXVP", (function(n, a) {
    e(n.exports, "getTimerFromSeconds", (function() {
        return O
    })), e(n.exports, "default", (function() {
        return k
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        s = r("2FDaO"),
        l = r("3TLyK"),
        d = r("6vbUb"),
        u = r("5Z32P"),
        c = r("9EEcU");
    let f, p, h, m, g, x, v, y, b, w, j, C, E, S = e => e;
    const O = e => {
        const t = (e, t) => (Math.pow(10, t) + ~~e).toString().substring(1),
            n = e % 60;
        return `${t(Math.floor(e/60),2)}:${t(n,2)}`
    };
    var k = e => {
        const {
            buildHeight: n,
            lavaHeight: r,
            seconds: a
        } = e, s = !!("undefined" != typeof window && window && window.navigator && navigator.userAgent.indexOf("Firefox") > 0);
        i.useEffect((() => {
            n < r && (0, u.endGame)()
        }), [r]);
        const f = ((e, t) => {
                if (t / e > .8) return Math.round(1.2 * e);
                const n = Math.round(e).toString().length;
                let r = "";
                for (let e = 0; e < n; e++) r += "9";
                let a = Number(r) + 1;
                return a *= 1.1, Math.round(a)
            })(n, r),
            p = Math.round(n / f * 100),
            h = Math.round(r / f * 100);
        return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(P, {
                children: [(0, o.jsxs)("div", {
                    className: "maxWidth",
                    style: {
                        transform: "translateY(156px)"
                    },
                    children: [(0, o.jsx)(t(l), {
                        fill: "rgba(244,114,9,0.8)",
                        paused: !1,
                        options: {
                            height: 10,
                            amplitude: 8,
                            speed: .45,
                            points: 6
                        }
                    }), (0, o.jsx)(d.motion.div, {
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: `${h+1}vh`
                        },
                        transition: {
                            duration: 2
                        },
                        style: {
                            width: "100%",
                            marginTop: s ? -7 : -6.5,
                            background: "linear-gradient(180deg, rgba(244,114,9,0.8) 0%, rgba(208,8,8,0.8) 100%)"
                        }
                    })]
                }), (0, o.jsx)(A, {
                    children: (0, o.jsxs)(N, {
                        children: [(0, o.jsxs)(R, {
                            children: [(0, o.jsxs)(F, {
                                children: [(0, u.numberWithCommas)(n), " ", (0, u.plural)("block", n)]
                            }), (0, o.jsxs)(V, {
                                children: [(0, o.jsx)(B, {}), (0, o.jsx)(H, {
                                    initial: {
                                        height: 0
                                    },
                                    animate: {
                                        height: `${p}vh`
                                    },
                                    transition: {
                                        duration: 2
                                    }
                                })]
                            })]
                        }), (0, o.jsx)(I, {
                            children: (0, o.jsx)(c.default, {
                                withoutContainer: !0
                            })
                        })]
                    })
                }), (0, o.jsx)(M, {
                    children: (0, o.jsxs)(D, {
                        children: [(0, o.jsx)(_, {
                            children: O(a)
                        }), (0, o.jsxs)(T, {
                            children: [(0, o.jsx)("b", {
                                children: "Game Code:"
                            }), " ", e.gameCode]
                        })]
                    })
                })]
            })
        })
    };
    const P = s.default.div(f || (f = S`
  width: calc(100% - 350px);
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  overflow: hidden;
`)),
        M = s.default.div(p || (p = S`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`)),
        D = s.default.div(h || (h = S`
  background: rgba(0, 0, 0, 0.7);
  min-width: 300px;
  padding: 15px;
  margin-top: 35px;
  border-radius: 10px;
  border-style: solid;
  border-color: #ffcc80;
  border-width: 3px;
  display: flex;
  flex-direction: column;
  text-align: center;
`)),
        _ = s.default.div(m || (m = S`
  font-size: 70px;
  line-height: 70px;
`)),
        T = s.default.div(g || (g = S`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 5px;
`)),
        A = s.default.div(x || (x = S`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
`)),
        N = s.default.div(v || (v = S`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`)),
        I = s.default.div(y || (y = S`
  width: 330px;
  flex-shrink: 0;
  margin-left: 50px;
  background: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  margin-right: 50px;
  height: 250px;
`)),
        R = s.default.div(b || (b = S`
  transform: translateY(${0}px);
  width: 250px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  z-index: -1;
`), 156),
        F = s.default.div(w || (w = S`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
`)),
        V = s.default.div(j || (j = S`
  background: url(${0});
  background-size: 168px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0px 0px 72px -21px rgba(194, 194, 194, 1);
  border-style: solid;
  border-width: 6px;
  border-color: rgba(255, 255, 255, 0.8);
  border-bottom-style: none;
  width: 100%;
`), (0, u.getAssetPath)("brickTexture.jpg")),
        H = (0, s.default)(d.motion.div)(C || (C = S`
  width: 100%;
`)),
        B = s.default.div(E || (E = S`
  width: 100%;
  height: ${0}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), 150)
})), r.register("3TLyK", (function(e, t) {
    e.exports, e.exports = function(e, t) {
        function n(e) {
            return e && "object" == typeof e && "default" in e ? e : {
                default: e
            }
        }
        var r = n(e),
            a = n(t);

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function u(e, t) {
            return (u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function c(e, t) {
            if (null == e) return {};
            var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function f(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function p(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = d(e);
                if (t) {
                    var a = d(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else n = r.apply(this, arguments);
                return function(e, t) {
                    return !t || "object" != typeof t && "function" != typeof t ? f(e) : t
                }(this, n)
            }
        }

        function h(e) {
            var t = e.options,
                n = c(e, ["options"]);
            return r.default.createElement(m, s({}, g, t, n))
        }
        var m = function() {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && u(e, t)
                }(n, e.Component);
                var t = p(n);

                function n(e) {
                    var a;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), i(f(a = t.call(this, e)), "width", (function() {
                        return a.container.current.offsetWidth
                    })), i(f(a), "height", (function() {
                        return a.container.current.offsetHeight
                    })), a.container = r.default.createRef(), a.state = {
                        path: ""
                    }, a.lastUpdate = 0, a.elapsed = 0, a.step = 0, a.update = a.update.bind(f(a)), a
                }
                return function(e, t, n) {
                    t && o(e.prototype, t), n && o(e, n)
                }(n, [{
                    key: "calculateWavePoints",
                    value: function() {
                        for (var e = [], t = 0; t <= Math.max(this.props.points, 1); t++) {
                            var n = t / this.props.points * this.width(),
                                r = (this.step + (t + t % this.props.points)) * this.props.speed * 100,
                                a = Math.sin(r / 100) * this.props.amplitude,
                                o = Math.sin(r / 100) * a + this.props.height;
                            e.push({
                                x: n,
                                y: o
                            })
                        }
                        return e
                    }
                }, {
                    key: "buildPath",
                    value: function(e) {
                        function t(e, t) {
                            return " C ".concat(e.x, " ").concat(e.y, " ").concat(e.x, " ").concat(e.y, " ").concat(t.x, " ").concat(t.y)
                        }
                        var n = "M ".concat(e[0].x, " ").concat(e[0].y),
                            r = {
                                x: (e[1].x - e[0].x) / 2,
                                y: e[1].y - e[0].y + e[0].y + (e[1].y - e[0].y)
                            };
                        n += t(r, e[1]);
                        for (var a = r, o = 1; o < e.length - 1; o++) n += t(a = {
                            x: e[o].x - a.x + e[o].x,
                            y: e[o].y - a.y + e[o].y
                        }, e[o + 1]);
                        return (n += " L ".concat(this.width(), " ").concat(this.height())) + " L 0 ".concat(this.height(), " Z")
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        this.setState({
                            path: this.buildPath(this.calculateWavePoints())
                        })
                    }
                }, {
                    key: "draw",
                    value: function() {
                        if (!this.props.paused) {
                            var e = new Date;
                            this.elapsed += e - this.lastUpdate, this.lastUpdate = e
                        }
                        this.step = this.elapsed * Math.PI / 1e3, this.redraw()
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.draw(), this.frameId && this.resume()
                    }
                }, {
                    key: "resume",
                    value: function() {
                        this.frameId = window.requestAnimationFrame(this.update), this.lastUpdate = new Date
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.frameId || this.resume()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.cancelAnimationFrame(this.frameId), this.frameId = 0
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.style,
                            n = e.className,
                            a = e.fill,
                            o = (e.paused, e.children),
                            d = e.id,
                            u = (e.d, e.ref, c(e, ["style", "className", "fill", "paused", "children", "id", "d", "ref"]));
                        return r.default.createElement("div", {
                            style: function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                                        i(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                width: "100%",
                                display: "inline-block"
                            }, t),
                            className: n,
                            id: d,
                            ref: this.container
                        }, r.default.createElement("svg", {
                            width: "100%",
                            height: "100%",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, o, r.default.createElement("path", s({
                            d: this.state.path,
                            fill: a
                        }, u))))
                    }
                }]), n
            }(),
            g = {
                height: 20,
                amplitude: 20,
                speed: .15,
                points: 3
            };
        return h.defaultProps = {
            paused: !1,
            fill: "#fff"
        }, h.propTypes = {
            paused: a.default.bool,
            fill: a.default.string,
            options: a.default.object
        }, h
    }(r("fywoC"), r("djNMu"))
})), r.register("gmcFm", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var a = r("hxEiv"),
        o = r("jcnZx"),
        i = r("93yIm"),
        s = r("fC6cp"),
        l = r("axHII"),
        d = r("h1Mb4"),
        u = r("5Z32P"),
        c = r("d1LT2"),
        f = r("iMOcM");
    r("fywoC");
    var p = r("2FDaO"),
        h = r("aBMqx");
    let m, g, x = e => e;
    var v = e => (0, a.jsx)(y, {
        children: (0, a.jsxs)(b, {
            children: [(0, a.jsx)(h.default, {
                icon: "fas fa-volcano",
                title: "Lava Height",
                value: e.lavaHeight,
                label: (0, f.plural)("block", e.lavaHeight),
                footer: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.default, {
                        style: {
                            background: c.default.White,
                            marginTop: 15,
                            marginBottom: 15
                        }
                    }), (0, a.jsx)(i.default, {
                        onClick: () => {
                            (0, u.send)(d.default.hostIncreaseLavaHeight, {
                                amount: .1
                            }), l.default.success({
                                message: "Lava height increased by 10%!",
                                placement: "bottomRight"
                            })
                        },
                        block: !0,
                        icon: (0, a.jsx)(o.default, {}),
                        type: "primary",
                        children: "Increase Lava Height by 10%"
                    })]
                })
            }), (0, a.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, a.jsx)(h.default, {
                icon: "fas fa-building",
                title: "Building Height",
                value: e.buildHeight,
                label: (0, f.plural)("block", e.buildHeight)
            }), (0, a.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, a.jsx)(h.default, {
                icon: "fas fa-tachometer-fast",
                title: "Lava Increase Speed",
                value: e.lavaSpeed,
                label: `${(0,f.plural)("block",e.lavaSpeed)} per second`
            }), (0, a.jsx)("div", {
                style: {
                    height: 15
                }
            }), (0, a.jsx)(h.default, {
                icon: "fas fa-hammer",
                title: "Builds In Progress",
                value: e.buildsInProgress
            }), (0, a.jsx)("div", {
                style: {
                    height: 30
                }
            })]
        })
    });
    const y = p.default.div(m || (m = x`
  width: 350px;
  height: 100%;
  overflow-y: auto;
  border-left-style: solid;
  border-left-width: 5px;
  border-left-color: rgba(0, 0, 0, 0.2);
`)),
        b = p.default.div(g || (g = x`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
`))
})), r.register("jcnZx", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("gegjz"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "ArrowUpOutlined";
    var d = o.forwardRef(l)
})), r.register("gegjz", (function(t, n) {
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
                    d: "M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"
                }
            }]
        },
        name: "arrow-up",
        theme: "outlined"
    }
})), r.register("aBMqx", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = r("hxEiv"),
        o = r("5Z32P");
    r("fywoC");
    var i = r("2FDaO");
    let s, l, d, u, c, f, p, h = e => e;
    var m = e => (0, a.jsxs)(g, {
        children: [(0, a.jsxs)(x, {
            children: [(0, a.jsx)(v, {
                className: e.icon
            }), (0, a.jsx)(y, {
                children: e.title
            })]
        }), (0, a.jsxs)(b, {
            children: [(0, a.jsx)(w, {
                children: (0, o.numberWithCommas)(e.value)
            }), e.label ? (0, a.jsx)(j, {
                children: e.label
            }) : null, e.footer ? e.footer : null]
        })]
    });
    const g = i.default.div(s || (s = h`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.8);
`)),
        x = i.default.div(l || (l = h`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  padding: 10px;
  padding-left: 20px;
`)),
        v = i.default.i(d || (d = h`
  font-size: 15px;
  line-height: 15px;
  margin-right: 8px;
`)),
        y = i.default.div(u || (u = h`
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
`)),
        b = i.default.div(c || (c = h`
  width: 100%;
  padding: 20px;
`)),
        w = i.default.div(f || (f = h`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
`)),
        j = i.default.div(p || (p = h`
  font-size: 16px;
  line-height: 16px;
  margin-top: 4px;
`))
})), r.register("hNcZR", (function(t, n) {
    e(t.exports, "Container", (function() {
        return O
    })), e(t.exports, "Content", (function() {
        return k
    })), e(t.exports, "default", (function() {
        return S
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("d1LT2"),
        l = r("fywoC"),
        d = r("2FDaO"),
        u = r("1Jbaq"),
        c = r("kbkQd"),
        f = r("lODYe"),
        p = r("elJoj"),
        h = r("01t0B"),
        m = r("5Z32P"),
        g = r("fucqw"),
        x = r("69urK"),
        v = r("lpEVe"),
        y = r("ipXVN"),
        b = r("iMOcM");
    let w, j, C = e => e,
        E = class extends l.Component {
            componentDidMount() {
                (0, b.loadFont)("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"), setTimeout((() => {
                    (0, m.playSound)(g.default.imposter.spaceshipAmbience, {
                        volume: .16
                    })
                }), 1800)
            }
            render() {
                return (0, i.jsxs)(O, {
                    children: [(0, i.jsx)(u.default, {}), (0, i.jsx)(k, {
                        children: this.getContent()
                    })]
                })
            }
            constructor(...e) {
                super(...e), (0, a.default)(this, "getContent", (() => {
                    const {
                        status: e
                    } = this.props.imposter;
                    return e === y.ImposterStatus.intro ? (0, i.jsx)(x.default, {}) : e === y.ImposterStatus.questions ? (0, i.jsx)(c.default, {}) : e === y.ImposterStatus.discussion ? (0, i.jsx)(f.default, {}) : e === y.ImposterStatus.voting ? (0, i.jsx)(p.default, {}) : e === y.ImposterStatus.votingResult ? (0, i.jsx)(h.default, {}) : null
                }))
            }
        };
    E = (0, o.__decorate)([(0, v.inject)("imposter"), v.observer], E);
    var S = E;
    const O = d.default.div(w || (w = C`
  flex: 1;
  background: ${0};
  color: ${0};
  display: flex;
`), s.default.Black, s.default.White),
        k = d.default.div(j || (j = C`
  flex: 1;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
`))
})), r.register("1Jbaq", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("2FDaO"),
        s = r("5Z32P");
    let l;
    class d extends o.Component {
        render() {
            return (0, a.jsxs)(c, {
                children: [(0, a.jsx)("div", {
                    className: "stars"
                }), (0, a.jsx)("div", {
                    className: "twinkling"
                }), (0, a.jsx)("div", {
                    className: "clouds"
                })]
            })
        }
    }
    var u = d;
    const c = i.default.div(l || (l = (e => e)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;

  .stars,
  .twinkling,
  .clouds {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .stars {
    z-index: 0;
    background: #000 url('${0}') repeat top
      center;
  }

  .twinkling {
    z-index: 1;
    background: transparent url('${0}') repeat top
      center;
    animation: move-twink-back 200s linear infinite;
  }

  .clouds {
    z-index: 2;
    background:transparent url('${0}') repeat top
      center;
    animation: move-clouds-back 200s linear infinite;
  }

  @keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }

  @keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
`), (0, s.getAssetPath)("stars.png"), (0, s.getAssetPath)("twinkling.png"), (0, s.getAssetPath)("clouds.png"))
})), r.register("kbkQd", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("5Z32P"),
        l = r("lpEVe"),
        d = r("fywoC"),
        u = r("2FDaO"),
        c = r("jWX5L"),
        f = r("79dix");
    let p, h, m = e => e,
        g = class extends d.Component {
            componentDidUpdate() {
                this.checkForGameToEnd()
            }
            componentWillUnmount() {
                (0, s.getMusicTrack)().fade(.27, 0, 100)
            }
            componentDidMount() {
                this.checkForGameToEnd(), this.shouldGameEnd() || (0, s.getMusicTrack)().fade(0, .27, 1e3)
            }
            render() {
                return this.shouldGameEnd() ? null : (0, i.jsx)(v, {
                    children: (0, i.jsxs)(y, {
                        className: "animated fadeIn",
                        children: [(0, i.jsx)(c.default, {}), (0, i.jsx)(f.default, {})]
                    })
                })
            }
            constructor(...e) {
                super(...e), (0, a.default)(this, "checkForGameToEnd", (() => {
                    this.shouldGameEnd() && (0, s.endGame)()
                })), (0, a.default)(this, "shouldGameEnd", (() => {
                    const {
                        meetingsLeft: e,
                        impostersLeft: t
                    } = this.props.imposter;
                    return !e || !t || e < t
                }))
            }
        };
    g = (0, o.__decorate)([(0, l.inject)("imposter"), l.observer], g);
    var x = g;
    const v = u.default.div(p || (p = m`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 100vw;
`)),
        y = u.default.div(h || (h = m`
  flex: 1;
  display: flex;
  overflow: hidden;
`))
})), r.register("jWX5L", (function(t, n) {
    e(t.exports, "default", (function() {
        return k
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("4m84g"),
        l = r("d1LT2"),
        d = r("fywoC"),
        u = r("2FDaO"),
        c = r("9Sq3L"),
        f = r("kVS28"),
        p = r("93yIm"),
        h = r("eZwx5"),
        m = r("lpEVe"),
        g = r("5Z32P"),
        x = r("h1Mb4"),
        v = r("c72PM");
    let y, b, w, j, C, E, S = e => e,
        O = class extends d.Component {
            render() {
                const e = this.props.imposter.people.filter((e => e.markedAsClear));
                return (0, i.jsxs)(P, {
                    children: [(0, i.jsxs)(M, {
                        children: [this.canShowClearList() ? (0, i.jsx)(_, {
                            children: (0, i.jsx)(v.default, {
                                text: s.imposterStrings.clearList
                            })
                        }) : null, e.map((e => (0, i.jsx)(T, {
                            children: e.name
                        }, `clear-${e.id}`)))]
                    }), (0, i.jsxs)(D, {
                        children: [(0, i.jsx)(p.default, {
                            size: "large",
                            block: !0,
                            type: "primary",
                            icon: (0, i.jsx)(c.default, {}),
                            style: {
                                marginBottom: 10
                            },
                            onClick: h.default,
                            children: (0, i.jsx)(v.default, {
                                text: "Call Meeting"
                            })
                        }), (0, i.jsx)(p.default, {
                            block: !0,
                            icon: (0, i.jsx)(f.default, {}),
                            type: "primary",
                            onClick: this.endGameEarly,
                            style: {
                                background: l.default.BackgroundPurple,
                                borderColor: l.default.BackgroundPurple
                            },
                            children: (0, i.jsx)(v.default, {
                                text: "End Game Early (Impostors Win)"
                            })
                        }), (0, i.jsxs)(A, {
                            children: [(0, i.jsxs)("b", {
                                children: [(0, i.jsx)(v.default, {
                                    text: "Game Code"
                                }), ":"]
                            }), " ", this.props.gameValues.gameCode]
                        })]
                    })]
                })
            }
            constructor(...e) {
                super(...e), (0, a.default)(this, "canShowClearList", (() => {
                    const {
                        modeOptions: e
                    } = this.props.gameOptions;
                    return !(!e || !e.allowPublicInvestigations)
                })), (0, a.default)(this, "endGameEarly", (() => {
                    (0, g.send)(x.default.imposter.imposterWin)
                }))
            }
        };
    O = (0, o.__decorate)([(0, m.inject)("imposter", "gameValues", "gameOptions"), m.observer], O);
    var k = O;
    const P = u.default.div(y || (y = S`
  width: 350px;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  height: 100%;
  font-family: ${0};
  display: flex;
  flex-direction: column;
  border-right-style: solid;
  border-color: rgba(255, 255, 255, 0.5);
  border-right-width: 2px;
`), s.imposterFontName),
        M = u.default.div(b || (b = S`
  padding: 20px;
  flex: 1;
  overflow-y: auto;
`)),
        D = u.default.div(w || (w = S`
  flex-shrink: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-top-style: solid;
  border-color: rgba(255, 255, 255, 0.5);
  border-width: 2px;
`)),
        _ = u.default.div(j || (j = S`
  font-size: 44px;
  line-height: 44px;
  font-weight: bold;
  margin-bottom: 15px;
`)),
        T = u.default.div(C || (C = S`
  background: rgba(0, 0, 0, 0.4);
  padding: 14px;
  font-size: 16px;
  line-height: 16px;
  border-style: solid;
  border-color: #388e3c;
  border-width: 2px;
  border-radius: 7px;
  color: ${0};
  margin-bottom: 10px;
  width: 100%;
`), l.default.White),
        A = u.default.div(E || (E = S`
  opacity: 0.9;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`))
})), r.register("4m84g", (function(t, n) {
    e(t.exports, "imposterStrings", (function() {
        return r
    })), e(t.exports, "imposterFontName", (function() {
        return a
    }));
    const r = {
            goal: "Locate the impostors and vote them off the spaceship!",
            discussionHeader: "Discussion Time",
            discussionDescription: "Who is the impostor?",
            discussionActionWaiting: "When everyone is finished discussing...",
            startVoting: "Start Voting",
            voteHeader: "Vote!",
            voteDescription: "Vote out who you think the impostor is!",
            endVotingEarly: "End Voting Early",
            clearList: "Clear List",
            investigationLog: "Investigation Log"
        },
        a = '"Space Grotesk", monospace'
})), r.register("9Sq3L", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("03xXg"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "BulbOutlined";
    var d = o.forwardRef(l)
})), r.register("03xXg", (function(t, n) {
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
                    d: "M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"
                }
            }]
        },
        name: "bulb",
        theme: "outlined"
    }
})), r.register("eZwx5", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("ipXVN"),
        o = r("fIZtR");
    var i = () => {
        o.default.imposter.status === a.ImposterStatus.questions && (o.default.imposter.status = a.ImposterStatus.discussion)
    }
})), r.register("79dix", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var a = r("hxEiv"),
        o = r("4m84g"),
        i = r("fywoC"),
        s = r("2FDaO"),
        l = r("95yuZ"),
        d = r("bzIhM");
    let u;
    class c extends i.Component {
        render() {
            return (0, a.jsxs)(p, {
                children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(l.default, {})]
            })
        }
    }
    var f = c;
    const p = s.default.div(u || (u = (e => e)`
  flex: 1;
  overflow: hidden;
  font-family: ${0};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), o.imposterFontName)
})), r.register("95yuZ", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("9EEcU"),
        s = r("2FDaO"),
        l = r("4m84g"),
        d = r("c72PM");
    let u, c, f, p = e => e;
    class h extends o.Component {
        render() {
            return (0, a.jsxs)(g, {
                children: [(0, a.jsx)(x, {
                    children: (0, a.jsx)(d.default, {
                        text: l.imposterStrings.investigationLog
                    })
                }), (0, a.jsx)(v, {
                    children: (0, a.jsx)(i.default, {
                        withoutContainer: !0,
                        customFont: l.imposterFontName
                    })
                })]
            })
        }
    }
    var m = h;
    const g = s.default.div(u || (u = p`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 35px;
  overflow: hidden;
`)),
        x = s.default.div(c || (c = p`
  font-size: 44px;
  line-height: 44px;
  font-weight: bold;
  margin-bottom: 15px;
`)),
        v = s.default.div(f || (f = p`
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
  padding: 30px;
  padding-bottom: 0px;
  border-radius: 12px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.2);
  border-width: 3px;
  border-bottom-width: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`))
})), r.register("bzIhM", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("c72PM"),
        s = r("5Z32P"),
        l = r("lpEVe"),
        d = r("fywoC"),
        u = r("2FDaO");
    let c, f, p, h, m, g = e => e;
    const x = e => (0, o.jsxs)(j, {
        children: [(0, o.jsx)(C, {
            children: e.num
        }), (0, o.jsx)(E, {
            children: (0, o.jsx)(i.default, {
                text: `${(0,s.plural)(e.stat,e.num)} left`
            })
        })]
    });
    let v = class extends d.Component {
        render() {
            const {
                imposter: {
                    investigationsLeft: e,
                    meetingsLeft: t,
                    impostersLeft: n
                }
            } = this.props;
            return (0, o.jsxs)(b, {
                children: [(0, o.jsx)(x, {
                    num: n,
                    stat: "impostor"
                }), (0, o.jsx)(w, {}), (0, o.jsx)(x, {
                    num: t,
                    stat: "meeting"
                }), (0, o.jsx)(w, {}), (0, o.jsx)(x, {
                    num: e,
                    stat: "investigation"
                })]
            })
        }
    };
    v = (0, a.__decorate)([(0, l.inject)("imposter"), l.observer], v);
    var y = v;
    const b = u.default.div(c || (c = g`
  flex-shrink: 0;
  padding: 0px 35px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.2);
  border-width: 3px;
  display: flex;
  height: 180px;
  margin-top: 35px;
  text-align: center;
  max-width: 90%;
  overflow: hidden;
`)),
        w = u.default.div(f || (f = g`
  height: 100%;
  width: 3px;
  background: rgba(255, 255, 255, 0.2);
  margin-left: 35px;
  margin-right: 35px;
`)),
        j = u.default.div(p || (p = g`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`)),
        C = u.default.div(h || (h = g`
  font-size: 42px;
  line-height: 42px;
  font-weight: bold;
`)),
        E = u.default.div(m || (m = g`
  font-size: 18px;
  line-height: 18px;
  margin-top: 10px;
`))
})), r.register("lODYe", (function(t, n) {
    e(t.exports, "Container", (function() {
        return k
    })), e(t.exports, "ContentContainer", (function() {
        return P
    })), e(t.exports, "Image", (function() {
        return M
    })), e(t.exports, "Title", (function() {
        return D
    })), e(t.exports, "Description", (function() {
        return _
    })), e(t.exports, "Divider", (function() {
        return T
    })), e(t.exports, "ActionText", (function() {
        return A
    })), e(t.exports, "default", (function() {
        return O
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("93yIm"),
        l = r("4m84g"),
        d = r("c72PM"),
        u = r("fucqw"),
        c = r("5Z32P"),
        f = r("d1LT2"),
        p = r("ipXVN"),
        h = r("lpEVe"),
        m = r("fywoC"),
        g = r("2FDaO");
    let x, v, y, b, w, j, C, E = e => e,
        S = class extends m.Component {
            componentDidMount() {
                u.default.imposter.spaceshipAmbience.fade(.16, 0, 250), (0, c.playSound)(u.default.imposter.meetingBoom, {
                    volume: .7
                })
            }
            componentWillUnmount() {
                u.default.imposter.spaceshipAmbience.fade(0, .16, 2500)
            }
            render() {
                return (0, i.jsx)(k, {
                    children: (0, i.jsxs)(P, {
                        className: "animated zoomInDown",
                        style: {
                            animationDelay: "0.6s",
                            animationDuration: "2.2s"
                        },
                        children: [(0, i.jsx)(M, {
                            src: (0, c.getAssetPath)("discussion.svg")
                        }), (0, i.jsx)(D, {
                            children: (0, i.jsx)(d.default, {
                                text: l.imposterStrings.discussionHeader
                            })
                        }), (0, i.jsx)(_, {
                            children: (0, i.jsx)(d.default, {
                                text: l.imposterStrings.discussionDescription
                            })
                        }), (0, i.jsx)(T, {}), (0, i.jsx)(A, {
                            children: (0, i.jsx)(d.default, {
                                text: l.imposterStrings.discussionActionWaiting
                            })
                        }), (0, i.jsx)(s.default, {
                            onClick: this.startVoting,
                            style: {
                                height: 60
                            },
                            block: !0,
                            type: "primary",
                            size: "large",
                            children: l.imposterStrings.startVoting
                        })]
                    })
                })
            }
            constructor(...e) {
                super(...e), (0, a.default)(this, "startVoting", (() => this.props.imposter.status = p.ImposterStatus.voting))
            }
        };
    S = (0, o.__decorate)([(0, h.inject)("imposter"), h.observer], S);
    var O = S;
    const k = g.default.div.attrs({
            className: "maxWidth maxHeight scroll-y flex hc vc"
        })(x || (x = E`
  font-family: ${0};
`), l.imposterFontName),
        P = g.default.div.attrs({
            className: "flex hc vc flex-column"
        })(v || (v = E`
  margin: 45px;
  background: rgba(255, 255, 255, 0.95);
  color: ${0};
  padding: 60px;
  border-radius: 10px;
  max-width: 650px;
`), f.default.Black),
        M = g.default.img(y || (y = E`
  height: 170px;
`)),
        D = g.default.div(b || (b = E`
  font-size: 52px;
  margin-top: 15px;
  font-weight: 900;
`)),
        _ = g.default.div(w || (w = E`
  font-size: 24px;
  line-height: 24px;
  margin-top: 2px;
`)),
        T = g.default.div(j || (j = E`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.6);
  margin-top: 30px;
  margin-bottom: 30px;
`)),
        A = g.default.div(C || (C = E`
  margin-bottom: 11px;
  font-size: 15px;
`))
})), r.register("elJoj", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("93yIm"),
        l = r("4m84g"),
        d = r("c72PM"),
        u = r("fucqw"),
        c = r("5Z32P"),
        f = r("ipXVN"),
        p = r("lpEVe"),
        h = r("fywoC"),
        m = r("lODYe");
    let g = class extends h.Component {
        componentDidMount() {
            u.default.imposter.spaceshipAmbience.fade(0, .16, 1e3)
        }
        componentDidUpdate() {
            0 !== this.props.imposter.votes && this.props.imposter.votes === this.possibleVotes() && this.endVoting()
        }
        componentWillUnmount() {
            this.props.imposter.votes = 0
        }
        render() {
            const e = this.possibleVotes();
            return (0, i.jsx)(m.Container, {
                children: (0, i.jsxs)(m.ContentContainer, {
                    children: [(0, i.jsx)(m.Image, {
                        src: (0, c.getAssetPath)("vote.svg")
                    }), (0, i.jsx)(m.Title, {
                        children: (0, i.jsx)(d.default, {
                            text: l.imposterStrings.voteHeader
                        })
                    }), (0, i.jsx)(m.Description, {
                        children: (0, i.jsx)(d.default, {
                            text: l.imposterStrings.voteDescription
                        })
                    }), (0, i.jsx)(m.Divider, {}), (0, i.jsx)(m.ActionText, {
                        children: `${this.props.imposter.votes}/${e} ${(0,c.plural)("vote",e)} in`
                    }), (0, i.jsx)(s.default, {
                        onClick: this.endVoting,
                        style: {
                            height: 60
                        },
                        block: !0,
                        type: "primary",
                        size: "large",
                        children: l.imposterStrings.endVotingEarly
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "possibleVotes", (() => this.props.imposter.people.filter((e => !e.votedOff)).length)), (0, a.default)(this, "endVoting", (() => {
                this.props.imposter.status = f.ImposterStatus.votingResult
            }))
        }
    };
    g = (0, o.__decorate)([(0, p.inject)("imposter"), p.observer], g);
    var x = g
})), r.register("01t0B", (function(t, n) {
    e(t.exports, "Container", (function() {
        return E
    })), e(t.exports, "Content", (function() {
        return S
    })), e(t.exports, "default", (function() {
        return C
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("4m84g"),
        l = r("fywoC"),
        d = r("2FDaO"),
        u = r("joGgZ"),
        c = r("8XViz"),
        f = r("dp4DX"),
        p = r("lpEVe"),
        h = r("ipXVN"),
        m = r("5Z32P"),
        g = r("fucqw");
    let x, v, y, b = e => e;
    var w;
    (w = y || (y = {})).boom = "boom", w.name = "name", w.reveal = "reveal", w.stats = "stats";
    let j = class extends l.Component {
        componentDidMount() {
            (0, m.playSound)(g.default.eventBoom, {}), setTimeout((() => {
                this.setToName()
            }), 2200)
        }
        render() {
            return (0, i.jsx)(E, {
                children: (0, i.jsx)(S, {
                    children: this.getContent()
                })
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                stage: y.boom
            }), (0, a.default)(this, "setToName", (() => this.setState({
                stage: y.name
            }))), (0, a.default)(this, "setToReveal", (() => this.setState({
                stage: y.reveal
            }))), (0, a.default)(this, "setToStats", (() => this.setState({
                stage: y.stats
            }))), (0, a.default)(this, "onFinish", (() => {
                0 === this.props.imposter.impostersLeft || 0 === this.props.imposter.meetingsLeft || this.props.imposter.meetingsLeft < this.props.imposter.impostersLeft ? (0, m.endGame)() : (this.props.imposter.status = h.ImposterStatus.questions, this.props.imposter.meetingResults = null)
            })), (0, a.default)(this, "getContent", (() => {
                if (!this.props.imposter.meetingResults) return null;
                const {
                    stage: e
                } = this.state;
                return e === y.boom ? null : e === y.name ? (0, i.jsx)(c.default, {
                    onFinish: this.setToReveal,
                    name: this.props.imposter.meetingResults.name
                }) : e === y.reveal ? (0, i.jsx)(u.default, {
                    onFinish: this.setToStats,
                    name: this.props.imposter.meetingResults.name,
                    wasImposter: this.props.imposter.meetingResults.wasImposter
                }) : (0, i.jsx)(f.default, {
                    onFinish: this.onFinish,
                    remainingImposters: this.props.imposter.impostersLeft,
                    meetingsLeft: this.props.imposter.meetingsLeft
                })
            }))
        }
    };
    j = (0, o.__decorate)([(0, p.inject)("imposter"), p.observer], j);
    var C = j;
    const E = d.default.div.attrs({
            className: "maxWidth maxHeight flex vc"
        })(x || (x = b`
  font-family: ${0};
  font-size: 36px;
  padding: 100px;
`), s.imposterFontName),
        S = d.default.div(v || (v = b``))
})), r.register("joGgZ", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("hxEiv"),
        o = r("fucqw"),
        i = r("5Z32P"),
        s = r("fywoC");
    var l = e => {
        const [t, n] = s.useState(!1);
        return s.useEffect((() => {
            setTimeout((() => {
                n(!0)
            }), 6770), (0, i.playSound)(o.default.imposter.tensionBuild, {
                volume: .53,
                onEnd: () => e.onFinish(),
                onError: () => {
                    setTimeout(e.onFinish, 1e4)
                }
            })
        }), []), (0, a.jsxs)("div", {
            className: "animated fadeIn",
            style: {
                animationDuration: "2s"
            },
            children: [e.name, " was", t && (e.wasImposter ? " an impostor." : " not an impostor.")]
        })
    }
})), r.register("8XViz", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("fucqw"),
        s = r("gtpxa");
    var l = e => {
        const [t, n] = o.useState(!1);
        return (0, a.jsx)("div", {
            className: t ? "animated fadeOut" : "",
            children: (0, a.jsx)(s.default, {
                text: `${e.name} was voted off the ship.`,
                sound: i.default.imposter.typing,
                soundDuration: 3600,
                onFinish: () => {
                    setTimeout((() => n(!0)), 2e3), setTimeout(e.onFinish, 3e3)
                }
            })
        })
    }
})), r.register("gtpxa", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("hxEiv"),
        o = r("5Z32P"),
        i = r("fywoC"),
        s = r("gelyL");
    var l = e => {
        i.useEffect((() => {
            e.sound && (0, o.playSound)(e.sound, {
                volume: e.volume
            })
        }), []);
        const t = e.text,
            n = e.pace ? e.pace : e.soundDuration ? Math.round(e.soundDuration / t.length) : 140;
        return (0, a.jsx)(s.WindupChildren, {
            onFinished: e.onFinish,
            children: (0, a.jsx)(s.Pace, {
                ms: n,
                children: t
            })
        })
    }
})), r.register("gelyL", (function(n, a) {
    e(n.exports, "Pace", (function() {
        return b
    })), e(n.exports, "WindupChildren", (function() {
        return N
    }));
    var o = r("fywoC");
    r("35miH");

    function i(e) {
        return 2 === e.length
    }

    function s(e) {
        return !!Array.isArray(e) && (3 === e.length && !(!Array.isArray(e[0]) || !Array.isArray(e[1])))
    }

    function l(e, t) {
        return [
            [], e.split(""), t
        ]
    }

    function d(e, t) {
        return [
            [], e, t
        ]
    }

    function u(e) {
        const [t, n] = e;
        return !(t.length > 0) && n.reduce(((t, n) => s(n) && s(e) && t ? u(n) : t), !0)
    }

    function c([e, t]) {
        return 0 === t.length
    }

    function f(e) {
        const t = v(e);
        return c(t) ? t : f(t)
    }

    function p(e) {
        if (u(e)) return e;
        const [t, n, r] = e, a = e => s(e) ? p(e) : e;
        return [
            [],
            [...t.map(a), ...n.map(a)], r
        ]
    }

    function h([e, t]) {
        const n = t.reduce(((e, t) => s(t) && !u(t) ? m(t) : e), void 0);
        if (n) return n;
        return e[e.length - 1]
    }

    function m(e) {
        const t = h(e);
        return s(t) ? m(t) : t
    }

    function g([e, t]) {
        const n = e.map((e => {
                if (s(e)) {
                    const [t, n, r] = e;
                    return [g(e), r]
                }
                return e
            })),
            [r] = t;
        if (s(r) && !u(r)) {
            const [e, t, a] = r;
            return [...n, [g(r), a]]
        }
        return n
    }

    function x([e, t]) {
        const [n] = t;
        return s(n) ? x(n) : n
    }

    function v(e) {
        if (c(e)) return e;
        const [t, n, r] = e, [a, ...o] = n;
        if (s(a)) {
            const e = v(a);
            return c(e) ? [
                [...t, e], o, r
            ] : [t, [e, ...o], r]
        }
        return [
            [...t, a], o, r
        ]
    }

    function y(e, t) {
        switch (e) {
            case "—":
            case "…":
                return 200;
            case ".":
            case ",":
                return 150;
            case "?":
            case "!":
                if ("!" !== t && "?" !== t) return 150;
            case "-":
            case " ":
            case "\n":
                return 0;
            default:
                return 20
        }
    }
    const b = ({
        children: e
    }) => t(o).createElement(t(o).Fragment, null, e);

    function w(e) {
        if (c(e)) return;
        const [t, n, r] = e, [a] = n;
        return a && s(a) ? w(a) : r.pace
    }
    const j = ({
        children: e
    }) => t(o).createElement(t(o).Fragment, null, e);

    function C(e) {
        return e.type === j
    }

    function E(e) {
        const [t, n, r] = e, a = h(e), [o] = n;
        let i = [];
        return a && s(a) && i.push(...E(a)), o && s(o) && !u(o) && i.push(...E(o)), r.onChar && i.push(r.onChar), i
    }

    function S(e) {
        return {
            windup: e,
            didFinishOnce: !1
        }
    }

    function O(e, t) {
        switch (t.type) {
            case "replace":
                return S(t.windup);
            case "next":
                return {
                    ...e, windup: v(e.windup)
                };
            case "rewind":
                return {
                    windup: p(e.windup), didFinishOnce: !1
                };
            case "fast-forward":
                return {
                    ...e, windup: f(e.windup)
                };
            case "finish":
                return {
                    ...e, didFinishOnce: !0
                };
            default:
                return e
        }
    }

    function k(e, t) {
        const [{
            windup: n,
            didFinishOnce: r
        }, a] = (0, o.useReducer)(O, e, S), i = (0, o.useRef)(null), s = c(n), l = (0, o.useCallback)((() => {
            s || (i.current && clearTimeout(i.current), a({
                type: "fast-forward"
            }))
        }), [s]), d = (0, o.useCallback)((() => {
            i.current && clearTimeout(i.current), a({
                type: "rewind"
            })
        }), []);
        return (0, o.useEffect)((() => {
            a({
                type: "replace",
                windup: e
            })
        }), [e]), (0, o.useEffect)((() => {
            i.current && clearTimeout(i.current), t.skipped && a({
                type: "fast-forward"
            }), !1 === t.skipped && a({
                type: "rewind"
            })
        }), [t.skipped]), (0, o.useEffect)((() => {
            const e = E(n),
                t = m(n);
            e.length > 0 && t && e.forEach((e => {
                e(t)
            }))
        }), [n]), (0, o.useEffect)((() => {
            if (!1 === r && s) {
                const e = setTimeout((() => {
                    t.onFinished && t.onFinished(), a({
                        type: "finish"
                    })
                }), 0);
                return () => {
                    clearTimeout(e)
                }
            }
        }), [r, s, t]), (0, o.useEffect)((() => {
            if (!s) {
                const e = w(n) || y,
                    t = m(n),
                    r = x(n);
                return i.current = setTimeout((() => {
                    a({
                        type: "next"
                    })
                }), t ? e(t, r) : 0), () => {
                    i.current && clearTimeout(i.current)
                }
            }
        }), [n, s]), {
            windup: n,
            skip: l,
            rewind: d,
            isFinished: s
        }
    }
    const P = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];

    function M(e) {
        const n = i(e) ? e[1] : e[2],
            r = i(e) ? e[0] : g(e),
            a = n.element || t(o).Fragment;
        if (n.props && Object.keys(n.props).includes("children")) return t(o).createElement(a, Object.assign({}, n.props));
        const s = r.reduce(((e, t) => {
            if ("string" == typeof t) {
                const n = e.slice(0, e.length - 1),
                    r = e[e.length - 1];
                return r && "string" == typeof r ? [...n, r + t] : [...e, t]
            }
            return [...e, M(t)]
        }), []);
        return "string" == typeof n.element && P.includes(n.element) ? t(o).createElement(a, Object.assign({
            key: n.key
        }, n.props)) : t(o).createElement(a, Object.assign({
            key: n.key
        }, n.props), s)
    }
    const D = ({}) => null;
    const _ = t(o).createContext({
        skip: () => {
            console.warn("Tried to use the useSkip hook outside of a WindupChildren component!!")
        },
        rewind: () => {
            console.warn("Tried to use the useRewind hook outside of a WindupChildren component!")
        },
        isFinished: !1
    });

    function T(e, n) {
        if ("string" == typeof n) return [...e, ...n.split("")];
        if ("number" == typeof n) return [...e, ...n.toString().split("")];
        if (!t(o).isValidElement(n)) return e;
        const {
            children: r,
            ...a
        } = n.props, i = n.type === b ? {
            pace: e => "ms" in n.props ? n.props.ms : n.props.getPace(e)
        } : {};
        const u = C(n) ? {
                onChar: n.props.fn
            } : {},
            c = n.key ? {
                key: n.key
            } : {};
        if (function(e) {
                return e.type === D
            }(n)) return [...e, l(" ", {
            element: t(o).Fragment,
            ...c,
            props: {},
            pace: () => n.props.ms
        })];
        if (void 0 === r) return [...e, l(" ", {
            element: n.type,
            props: a,
            ...c,
            ...i,
            ...u
        })];
        if ("string" == typeof r) return [...e, l(r, {
            element: n.type,
            props: a,
            ...c,
            ...i,
            ...u
        })];
        if (r instanceof Function) return [...e, l(" ", {
            element: n.type,
            props: {
                children: r,
                ...a
            },
            ...c,
            ...i,
            ...u
        })];
        const f = t(o).Children.toArray(r).reduce(T, []).map((e => {
            if (s(e)) {
                const [t, n, r] = e;
                return [t, n, {
                    ...i,
                    ...u,
                    ...r
                }]
            }
            return e
        }));
        return [...e, d(f, {
            element: n.type,
            props: a,
            ...c,
            ...i,
            ...u
        })]
    }

    function A(e) {
        return null == e ? "" : t(o).Children.map(e, (e => "string" == typeof e ? e : "number" == typeof e ? e.toString() : t(o).isValidElement(e) ? `#${e.key||""}<${A(e.props.children)}>` : "")).join(",")
    }
    const N = ({
        children: e,
        onFinished: n,
        skipped: r
    }) => {
        const a = function(e, t) {
                return (0, o.useMemo)(e, [A(t)])
            }((() => d(t(o).Children.toArray(e).reduce(T, []), {
                element: void 0
            })), e),
            {
                windup: i,
                skip: s,
                rewind: l,
                isFinished: u
            } = k(a, {
                onFinished: n,
                skipped: r
            });
        return t(o).createElement(_.Provider, {
            value: {
                skip: s,
                rewind: l,
                isFinished: u
            }
        }, M(i))
    }
})), r.register("35miH", (function(t, n) {
    function r(e, t, n) {
        const r = "OffscreenCanvas" in window,
            a = document.createElement("canvas"),
            o = r ? a.transferControlToOffscreen() : a;
        o.width = t;
        const i = o.getContext("2d");
        if (i) {
            i.font = n;
            return e.split(" ").reduce(((e, n) => {
                const [r] = e.slice(-1), a = [...r, n].join(" ");
                let {
                    width: o
                } = i.measureText(a);
                return o <= t ? [...e.slice(0, -1), [...r, n]] : 0 === r.length ? [...e.slice(0, -1), [n]] : [...e, [n]]
            }), [
                []
            ]).map((e => e.join(" "))).join("\n")
        }
        return console.warn("No canvas context was found, so the string was left as is!"), e
    }
    e(t.exports, "default", (function() {
        return a
    }));
    var a = function(e, t, n) {
        if (function(e) {
                return Array.isArray(e)
            }(e)) {
            return r(e.join(""), t, n).split("").reduce(((e, t, n) => "\n" === t ? [...e, n] : e), []).reduce(((e, t) => function(e, t) {
                const {
                    indexToInsertInto: n,
                    localPosition: r
                } = t.reduce((({
                    indexToInsertInto: t,
                    localPosition: n,
                    lengthOfPreceding: r
                }, a, o) => {
                    const i = a.length + r;
                    return !t && !n && e < i ? {
                        indexToInsertInto: o,
                        localPosition: e - r,
                        lengthOfPreceding: i
                    } : {
                        indexToInsertInto: t,
                        localPosition: n,
                        lengthOfPreceding: i
                    }
                }), {
                    indexToInsertInto: 0,
                    localPosition: 0,
                    lengthOfPreceding: 0
                });
                return t.map(((e, t) => t === n ? e.slice(0, r) + "\n" + e.slice(r) : e)).map((e => e.split("\n").map(((e, t, n) => t < n.length - 2 && t > 0 ? e.trim() : t < n.length - 2 ? e.trimRight() : t > 0 ? e.trimLeft() : e)).join("\n")))
            }(t, e)), e)
        }
        return r(e, t, n)
    }
})), r.register("dp4DX", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("hxEiv"),
        o = r("fucqw"),
        i = r("5Z32P");
    r("fywoC");
    var s = r("gtpxa");
    var l = e => (0, a.jsx)(s.default, {
        text: 0 === e.remainingImposters ? "0 impostors remain. Our research is saved!" : `${e.remainingImposters} ${(0,i.plural)("impostor",e.remainingImposters)} remain${1===e.remainingImposters?"s":""}. ${e.meetingsLeft} ${(0,i.plural)("meeting",e.meetingsLeft)} left.`,
        sound: o.default.imposter.typing,
        soundDuration: 3600,
        onFinish: () => {
            setTimeout(e.onFinish, 2200)
        }
    })
})), r.register("69urK", (function(n, a) {
    e(n.exports, "default", (function() {
        return C
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        s = r("hxEiv"),
        l = r("fucqw"),
        d = r("5Z32P"),
        u = r("ipXVN"),
        c = r("iMOcM"),
        f = r("lpEVe"),
        p = r("fywoC"),
        h = r("01t0B"),
        m = r("gtpxa"),
        g = r("i2sh8"),
        x = r("2FDaO"),
        v = r("93yIm");
    let y;
    let b = class extends p.Component {
        render() {
            return (0, s.jsx)(j, {
                gameOptions: this.props.gameOptions,
                imposter: this.props.imposter
            })
        }
    };
    b = (0, i.__decorate)([(0, f.inject)("gameOptions", "imposter"), f.observer], b);
    class w extends p.Component {
        componentDidMount() {
            (0, d.getMusicTrack)().fade(0, 0, 0), (0, d.playSound)(l.default.imposter.spaceDoorOpen, {
                volume: .7
            }), this.props.setTimeout((() => {
                this.setState({
                    show: !0
                })
            }), 3800)
        }
        render() {
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(h.Container, {
                    children: (0, s.jsx)(h.Content, {
                        className: this.state.exiting ? "animated fadeOut" : "",
                        children: this.state.show ? (0, s.jsx)(m.default, {
                            text: this.stages[this.state.stageIndex].text,
                            sound: l.default.imposter.typing,
                            soundDuration: 3600,
                            onFinish: this.nextStage
                        }, `imposter-intro-stage-${this.state.stageIndex}`) : null
                    })
                }), (0, s.jsxs)(E, {
                    children: [(0, s.jsx)("div", {}), (0, s.jsx)("div", {
                        children: (0, s.jsx)(v.default, {
                            type: "primary",
                            size: "large",
                            style: {
                                marginTop: 15,
                                marginRight: 15
                            },
                            onClick: this.close,
                            children: "Skip Instructions"
                        })
                    })]
                })]
            })
        }
        constructor(...e) {
            var t, n;
            super(...e), (0, o.default)(this, "state", {
                stageIndex: 0,
                show: !1,
                exiting: !1
            }), (0, o.default)(this, "stages", (t = (0, c.getUser)().lastName, n = this.props.gameOptions.modeOptions.numberOfImposters, [{
                text: `Crewmates, this is Captain ${t} here. We're in big trouble.`
            }, {
                text: `It appears ${n} ${(0,c.plural)("impostor",n)} ${1===n?"has":"have"} made it onto our spaceship in an attempt to steal our research.`
            }, {
                text: `To protect our research, we must eject ${1===n?"this impostor":"these impostors"} immediately.`
            }, {
                text: `Run investigations and call a meeting to vote the ${(0,c.plural)("impostor",n)} off the ship.`
            }, {
                text: "Our mission is relying on you. Don’t let me down."
            }])), (0, o.default)(this, "close", (() => this.props.imposter.status = u.ImposterStatus.questions)), (0, o.default)(this, "nextStage", (() => {
                const e = this.stages;
                this.props.setTimeout((() => {
                    e[this.state.stageIndex + 1] ? (this.state.stageIndex + 1 === 1 && this.props.setTimeout((() => {
                        (0, d.playSound)(l.default.imposter.mystery, {
                            volume: .64
                        })
                    }), 600), this.setState({
                        stageIndex: this.state.stageIndex + 1
                    })) : this.setState({
                        exiting: !0
                    }, (() => {
                        this.props.setTimeout((() => {
                            this.close()
                        }), 1100)
                    }))
                }), 2600)
            }))
        }
    }
    const j = t(g)(w);
    var C = b;
    const E = x.default.div(y || (y = (e => e)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`))
})), r.register("i2sh8", (function(e, t) {
    var n = r("fywoC"),
        a = r("eNaeR");
    e.exports = a(n)
})), r.register("eNaeR", (function(e, t) {
    var a = r("02yW9"),
        o = r("2uYa6"),
        i = r("9Dltm");
    e.exports = function(e) {
        var t = "undefined" == typeof window ? n : window,
            r = function(e, t, n) {
                return function(r, a) {
                    var o = Array.prototype.slice.call(arguments, 2),
                        i = e(function() {
                            t.call(this, i), "function" == typeof r && r.apply(this, o)
                        }.bind(this), a);
                    return this[n] ? this[n].push(i) : this[n] = [i], i
                }
            },
            s = function(e, t) {
                return function(n) {
                    if (this[t]) {
                        var r = this[t].indexOf(n); - 1 !== r && this[t].splice(r, 1)
                    }
                    e(n)
                }
            },
            l = "_ReactTimeout_timeouts",
            d = s(t.clearTimeout, l),
            u = r(t.setTimeout, d, l),
            c = "_ReactTimeout_intervals",
            f = s(t.clearInterval, c),
            p = r(t.setInterval, (function() {}), c),
            h = "_ReactTimeout_immediates",
            m = s(t.clearImmediate, h),
            g = r(t.setImmediate, m, h),
            x = "_ReactTimeout_rafs",
            v = s(t.cancelAnimationFrame, x),
            y = r(t.requestAnimationFrame, v, x),
            b = function(e) {
                return e && "function" == typeof e.slice ? e.slice(0) : []
            };
        return function(t) {
            var n = a({
                displayName: "ReactTimeout",
                setTimeout: u,
                clearTimeout: d,
                setInterval: p,
                clearInterval: f,
                setImmediate: g,
                clearImmediate: m,
                requestAnimationFrame: y,
                cancelAnimationFrame: v,
                componentWillUnmount: function() {
                    b(this[l]).forEach(this.clearTimeout), b(this[c]).forEach(this.clearInterval), b(this[h]).forEach(this.clearImmediate), b(this[x]).forEach(this.cancelAnimationFrame)
                },
                getWrappedInstance: function() {
                    return this.wrappedInstance
                },
                render: function() {
                    return e.createElement(t, o({}, this.props, {
                        ref: function(e) {
                            this.wrappedInstance = e
                        }.bind(this),
                        setTimeout: this.setTimeout,
                        clearTimeout: this.clearTimeout,
                        setInterval: this.setInterval,
                        clearInterval: this.clearInterval,
                        setImmediate: this.setImmediate,
                        clearImmediate: this.clearImmediate,
                        requestAnimationFrame: this.requestAnimationFrame,
                        cancelAnimationFrame: this.cancelAnimationFrame
                    }))
                }
            });
            return i(n, t)
        }
    }
})), r.register("02yW9", (function(e, t) {
    var n = r("fywoC"),
        a = r("8KBP0");
    if (void 0 === n) throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");
    var o = (new n.Component).updater;
    e.exports = a(n.Component, n.isValidElement, o)
})), r.register("8KBP0", (function(e, t) {
    var n = r("2uYa6"),
        a = {};

    function o(e, t, n, r, a, o, i, s) {
        if (!e) {
            var l;
            if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var d = [n, r, a, o, i, s],
                    u = 0;
                (l = new Error(t.replace(/%s/g, (function() {
                    return d[u++]
                })))).name = "Invariant Violation"
            }
            throw l.framesToPop = 1, l
        }
    }
    var i = "mixins";
    e.exports = function(e, t, r) {
        var s = [],
            l = {
                mixins: "DEFINE_MANY",
                statics: "DEFINE_MANY",
                propTypes: "DEFINE_MANY",
                contextTypes: "DEFINE_MANY",
                childContextTypes: "DEFINE_MANY",
                getDefaultProps: "DEFINE_MANY_MERGED",
                getInitialState: "DEFINE_MANY_MERGED",
                getChildContext: "DEFINE_MANY_MERGED",
                render: "DEFINE_ONCE",
                componentWillMount: "DEFINE_MANY",
                componentDidMount: "DEFINE_MANY",
                componentWillReceiveProps: "DEFINE_MANY",
                shouldComponentUpdate: "DEFINE_ONCE",
                componentWillUpdate: "DEFINE_MANY",
                componentDidUpdate: "DEFINE_MANY",
                componentWillUnmount: "DEFINE_MANY",
                UNSAFE_componentWillMount: "DEFINE_MANY",
                UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
                UNSAFE_componentWillUpdate: "DEFINE_MANY",
                updateComponent: "OVERRIDE_BASE"
            },
            d = {
                getDerivedStateFromProps: "DEFINE_MANY_MERGED"
            },
            u = {
                displayName: function(e, t) {
                    e.displayName = t
                },
                mixins: function(e, t) {
                    if (t)
                        for (var n = 0; n < t.length; n++) f(e, t[n])
                },
                childContextTypes: function(e, t) {
                    e.childContextTypes = n({}, e.childContextTypes, t)
                },
                contextTypes: function(e, t) {
                    e.contextTypes = n({}, e.contextTypes, t)
                },
                getDefaultProps: function(e, t) {
                    e.getDefaultProps ? e.getDefaultProps = h(e.getDefaultProps, t) : e.getDefaultProps = t
                },
                propTypes: function(e, t) {
                    e.propTypes = n({}, e.propTypes, t)
                },
                statics: function(e, t) {
                    ! function(e, t) {
                        if (!t) return;
                        for (var n in t) {
                            var r = t[n];
                            if (t.hasOwnProperty(n)) {
                                if (o(!(n in u), 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n), n in e) return o("DEFINE_MANY_MERGED" === (d.hasOwnProperty(n) ? d[n] : null), "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), void(e[n] = h(e[n], r));
                                e[n] = r
                            }
                        }
                    }(e, t)
                },
                autobind: function() {}
            };

        function c(e, t) {
            var n = l.hasOwnProperty(t) ? l[t] : null;
            y.hasOwnProperty(t) && o("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t), e && o("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t)
        }

        function f(e, n) {
            if (n) {
                o("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), o(!t(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                var r = e.prototype,
                    a = r.__reactAutoBindPairs;
                for (var s in n.hasOwnProperty(i) && u.mixins(e, n.mixins), n)
                    if (n.hasOwnProperty(s) && s !== i) {
                        var d = n[s],
                            f = r.hasOwnProperty(s);
                        if (c(f, s), u.hasOwnProperty(s)) u[s](e, d);
                        else {
                            var p = l.hasOwnProperty(s);
                            if ("function" == typeof d && !p && !f && !1 !== n.autobind) a.push(s, d), r[s] = d;
                            else if (f) {
                                var g = l[s];
                                o(p && ("DEFINE_MANY_MERGED" === g || "DEFINE_MANY" === g), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", g, s), "DEFINE_MANY_MERGED" === g ? r[s] = h(r[s], d) : "DEFINE_MANY" === g && (r[s] = m(r[s], d))
                            } else r[s] = d
                        }
                    }
            } else;
        }

        function p(e, t) {
            for (var n in o(e && t && "object" == typeof e && "object" == typeof t, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."), t) t.hasOwnProperty(n) && (o(void 0 === e[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n), e[n] = t[n]);
            return e
        }

        function h(e, t) {
            return function() {
                var n = e.apply(this, arguments),
                    r = t.apply(this, arguments);
                if (null == n) return r;
                if (null == r) return n;
                var a = {};
                return p(a, n), p(a, r), a
            }
        }

        function m(e, t) {
            return function() {
                e.apply(this, arguments), t.apply(this, arguments)
            }
        }

        function g(e, t) {
            return t.bind(e)
        }
        var x = {
                componentDidMount: function() {
                    this.__isMounted = !0
                }
            },
            v = {
                componentWillUnmount: function() {
                    this.__isMounted = !1
                }
            },
            y = {
                replaceState: function(e, t) {
                    this.updater.enqueueReplaceState(this, e, t)
                },
                isMounted: function() {
                    return !!this.__isMounted
                }
            },
            b = function() {};
        return n(b.prototype, e.prototype, y),
            function(e) {
                var t = function(e, n, i) {
                    this.__reactAutoBindPairs.length && function(e) {
                        for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
                            var r = t[n],
                                a = t[n + 1];
                            e[r] = g(e, a)
                        }
                    }(this), this.props = e, this.context = n, this.refs = a, this.updater = i || r, this.state = null;
                    var s = this.getInitialState ? this.getInitialState() : null;
                    o("object" == typeof s && !Array.isArray(s), "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent"), this.state = s
                };
                for (var n in t.prototype = new b, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], s.forEach(f.bind(null, t)), f(t, x), f(t, e), f(t, v), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), o(t.prototype.render, "createClass(...): Class specification must implement a `render` method."), l) t.prototype[n] || (t.prototype[n] = null);
                return t
            }
    }
})), r.register("9Dltm", (function(e, t) {
    var n = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        r = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        a = Object.defineProperty,
        o = Object.getOwnPropertyNames,
        i = Object.getOwnPropertySymbols,
        s = Object.getOwnPropertyDescriptor,
        l = Object.getPrototypeOf,
        d = l && l(Object);
    e.exports = function e(t, u, c) {
        if ("string" != typeof u) {
            if (d) {
                var f = l(u);
                f && f !== d && e(t, f, c)
            }
            var p = o(u);
            i && (p = p.concat(i(u)));
            for (var h = 0; h < p.length; ++h) {
                var m = p[h];
                if (!(n[m] || r[m] || c && c[m])) {
                    var g = s(u, m);
                    try {
                        a(t, m, g)
                    } catch (e) {}
                }
            }
            return t
        }
        return t
    }
})), r.register("5ybCh", (function(t, n) {
    e(t.exports, "GRID_BACKGROUND_CSS", (function() {
        return w
    })), e(t.exports, "default", (function() {
        return j
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("jhNI4"),
        s = r("2FDaO"),
        l = r("d1LT2"),
        d = r("htXI6"),
        u = r("lpl3s"),
        c = r("gMBUR"),
        f = r("lpEVe"),
        p = r("VvPwO"),
        h = r("gMFss"),
        m = r("fucqw"),
        g = r("fKxAL"),
        x = r("c64OL");
    let v, y, b = e => e;
    const w = "\nbackground-color: #f1f2f3;\nbackground-image: linear-gradient(\n    to right,\n    rgba(0, 0, 0, 0.05) 1px,\n    transparent 1px\n  ),\n  linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);\n\nbackground-size: 45px 45px;\nbackground-position: center;\n";
    var j = (0, f.observer)((() => {
        const {
            draw: {
                status: e
            }
        } = o.useContext(p.default);
        o.useEffect((() => {
            m.default.draw.background.volume(g.DRAW_MODE_BACKGROUND_MUSIC_VOLUME)
        }), []);
        return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(C, {
                children: [(0, a.jsx)(x.default, {}), (0, a.jsx)(E, {
                    children: e === h.DrawStatus.pickDrawer ? (0, a.jsx)(u.default, {}) : e === h.DrawStatus.termSelection ? (0, a.jsx)(c.default, {}) : e === h.DrawStatus.drawing ? (0, a.jsx)(i.default, {}) : e === h.DrawStatus.results ? (0, a.jsx)(d.default, {}) : null
                })]
            })
        })
    }));
    const C = s.default.div.attrs({
            className: "flex maxWidth flex-column"
        })(v || (v = b`
  height: 100vh;
  font-family: ${0};
  color: ${0};
  ${0}
  overflow: hidden;
`), g.DRAW_MODE_FONT, l.default.Black, w),
        E = s.default.div.attrs({
            className: "flex flex-column"
        })(y || (y = b`
  height: 100%;
  overflow: hidden;
`))
})), r.register("jhNI4", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("gkr9S"),
        s = r("2FDaO"),
        l = r("h46w5"),
        d = r("4kecK");
    let u;
    var c = () => {
        const [e, t] = o.useState(!1);
        return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(f, {
                className: e ? "animated fadeOut" : "",
                children: [(0, a.jsx)(l.default, {
                    fadeOut: () => t(!0)
                }), (0, a.jsx)(d.default, {}), (0, a.jsx)(i.default, {
                    isFadingOut: e
                })]
            })
        })
    };
    const f = s.default.div.attrs({
        className: "flex maxWidth maxHeight"
    })(u || (u = (e => e)`
  justify-content: space-between;
  position: relative;
`))
})), r.register("gkr9S", (function(n, a) {
    e(n.exports, "default", (function() {
        return k
    }));
    var o = r("hxEiv"),
        i = r("d1LT2"),
        s = r("fywoC"),
        l = r("2FDaO"),
        d = r("eJgdG"),
        u = r("4VBYx"),
        c = r("lpEVe"),
        f = r("VvPwO"),
        p = r("2RhIb"),
        h = r("4mnoM"),
        m = r("56tQE");
    let g, x, v, y, b, w, j = e => e;
    const C = {
            width: 667,
            height: 500
        },
        E = {
            width: 553,
            height: 400
        },
        S = {
            width: 360,
            height: 270
        },
        O = e => {
            const n = e.text.split(""),
                r = !n.includes("_") && e.noTimeLeft;
            return (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(h.ConfettiContainer, {
                    style: {
                        zIndex: r ? 9 : 0
                    },
                    children: (0, o.jsx)(t(p), {
                        config: h.confettiConfig,
                        active: r
                    })
                }), (0, o.jsx)(A, {
                    children: n.map(((e, t) => {
                        const n = `letter-${t}`;
                        return " " !== e || r ? (0, o.jsx)(s.Fragment, {
                            children: e
                        }, n) : (0, o.jsx)(s.Fragment, {
                            children: "   "
                        }, n)
                    }))
                })]
            })
        };
    var k = (0, c.observer)((e => {
        const {
            draw: {
                round: {
                    revealText: t,
                    drawer: n,
                    secondsLeft: r
                }
            }
        } = s.useContext(f.default), a = s.useRef(null), [i, l] = (0, m.default)(a), d = s.useMemo((() => 0 === r), [r]), c = s.useMemo((() => {
            let e = C;
            return (i < 790 || l < 700) && (e = E), (i < 680 || l < 530) && (e = S), e
        }), [i, l]);
        return (0, o.jsx)(P, {
            className: e.isFadingOut ? "animated fadeOut" : "",
            children: (0, o.jsxs)(M, {
                ref: a,
                children: [(0, o.jsx)(_, {
                    children: (0, o.jsx)(O, {
                        text: t,
                        noTimeLeft: d
                    })
                }), (0, o.jsx)(D, {
                    style: {
                        width: c.width,
                        height: c.height
                    },
                    children: (0, o.jsx)(u.default, {
                        width: c.width,
                        height: c.height
                    })
                }), (0, o.jsxs)(T, {
                    children: [(0, o.jsx)("b", {
                        children: "Drawer:"
                    }), " ", n.name]
                })]
            })
        })
    }));
    const P = l.default.div(g || (g = j`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`)),
        M = l.default.div.attrs({
            className: "maxWidth maxHeight flex flex-column vc hc"
        })(x || (x = j`
  overflow: hidden;
  z-index: 1;
`)),
        D = (0, l.default)(d.HandDrawnDiv)(v || (v = j`
  flex-shrink: 0;
  background: ${0};
  overflow: hidden;
`), i.default.White),
        _ = l.default.div(y || (y = j`
  font-size: 45px;
  margin-bottom: 10px;
`)),
        T = l.default.div(b || (b = j`
  font-size: 22px;
  margin-top: 10px;
`)),
        A = l.default.span(w || (w = j``))
})), r.register("eJgdG", (function(t, n) {
    e(t.exports, "HandDrawnDiv", (function() {
        return i
    }));
    var a = r("d1LT2");
    let o;
    const i = r("2FDaO").default.div(o || (o = (e => e)`
  border: solid
    ${0}px
    ${0};
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  overflow: hidden;
  -webkit-transform: translateZ(0); // needed in Safari for some weird reason
`), (e => void 0 !== e.borderWidth ? e.borderWidth : 3), a.default.Black)
})), r.register("4VBYx", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("hxEiv"),
        o = r("VvPwO"),
        i = r("bUoym"),
        s = r("4MuSt"),
        l = r("lpEVe"),
        d = r("fywoC");
    var u = (0, l.observer)((e => {
        const {
            draw: t
        } = d.useContext(o.default), n = d.useRef();
        return d.useEffect((() => {
            const e = (0, s.reaction)((() => t.latestLine), (e => {
                    var t;
                    e && (null == n || null === (t = n.current) || void 0 === t || t.addLine(e))
                })),
                r = (0, s.reaction)((() => t.round.drawingBase64), (e => {
                    var t;
                    e && (null == n || null === (t = n.current) || void 0 === t || t.drawImage(e))
                }));
            return () => {
                e(), r()
            }
        }), []), (0, a.jsx)(i.default, {
            ref: n,
            height: e.height,
            width: e.width,
            canEdit: !1
        })
    }))
})), r.register("2RhIb", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var n, a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = r("fywoC"),
        i = (n = o) && n.__esModule ? n : {
            default: n
        },
        s = r("3o5yH");
    var l = {
            position: "relative"
        },
        d = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.setRef = n.setRef.bind(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), a(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.active && !this.props.active && (0, s.confetti)(this.container, e.config)
                }
            }, {
                key: "setRef",
                value: function(e) {
                    this.container = e
                }
            }, {
                key: "render",
                value: function() {
                    return i.default.createElement("div", {
                        className: this.props.className,
                        style: l,
                        ref: this.setRef
                    })
                }
            }]), t
        }(o.Component);
    e.exports.default = d
})), r.register("3o5yH", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.confetti = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = Object.assign({}, o, t),
            s = i.elementCount,
            l = i.colors,
            d = i.width,
            u = i.height,
            c = i.angle,
            f = i.spread,
            p = i.startVelocity,
            h = i.decay,
            m = i.duration,
            g = i.random,
            x = n(e, s, l, d, u),
            v = x.map((function(e) {
                return {
                    element: e,
                    physics: r(c, f, p, g)
                }
            }));
        return a(e, v, h, m)
    };

    function n(e, t, n, r, a) {
        return Array.from({
            length: t
        }).map((function(t, o) {
            var i = document.createElement("div"),
                s = n[o % n.length];
            return i.style["background-color"] = s, i.style.width = r, i.style.height = a, i.style.position = "absolute", i.style.willChange = "transform, opacity", e.appendChild(i), i
        }))
    }

    function r(e, t, n, r) {
        var a = e * (Math.PI / 180),
            o = t * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * r(),
            wobbleSpeed: .1 + .1 * r(),
            velocity: .5 * n + r() * n,
            angle2D: -a + (.5 * o - r() * o),
            angle3D: -Math.PI / 4 + r() * (Math.PI / 2),
            tiltAngle: r() * Math.PI,
            tiltAngleSpeed: .1 + .3 * r()
        }
    }

    function a(e, t, n, r) {
        var a = void 0;
        return new Promise((function(o) {
            requestAnimationFrame((function i(s) {
                a || (a = s);
                var l = a === s ? 0 : (s - a) / r;
                t.forEach((function(e) {
                    return function(e, t, n) {
                        e.physics.x += Math.cos(e.physics.angle2D) * e.physics.velocity, e.physics.y += Math.sin(e.physics.angle2D) * e.physics.velocity, e.physics.z += Math.sin(e.physics.angle3D) * e.physics.velocity, e.physics.wobble += e.physics.wobbleSpeed, e.physics.velocity *= n, e.physics.y += 3, e.physics.tiltAngle += e.physics.tiltAngleSpeed;
                        var r = e.physics,
                            a = r.x,
                            o = r.y,
                            i = r.tiltAngle,
                            s = r.wobble,
                            l = "translate3d(" + (a + 10 * Math.cos(s)) + "px, " + (o + 10 * Math.sin(s)) + "px, 0) rotate3d(1, 1, 1, " + i + "rad)";
                        e.element.style.transform = l, e.element.style.opacity = 1 - t
                    }(e, l, n)
                })), s - a < r ? requestAnimationFrame(i) : (t.forEach((function(t) {
                    if (t.element.parentNode === e) return e.removeChild(t.element)
                })), o())
            }))
        }))
    }
    var o = {
        angle: 90,
        decay: .9,
        spread: 45,
        startVelocity: 45,
        elementCount: 50,
        width: "10px",
        height: "10px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        duration: 3e3,
        random: Math.random
    }
})), r.register("4mnoM", (function(n, a) {
    e(n.exports, "ConfettiContainer", (function() {
        return T
    })), e(n.exports, "confettiConfig", (function() {
        return A
    })), e(n.exports, "default", (function() {
        return I
    }));
    var o = r("divCp"),
        i = r("hxEiv"),
        s = r("c72PM"),
        l = r("dBAHx"),
        d = r("fucqw"),
        u = r("5Z32P"),
        c = r("d1LT2"),
        f = r("bbvHy"),
        p = r("7mCD4"),
        h = r("6edaj"),
        m = r("fywoC"),
        g = r("2RhIb"),
        x = r("2FDaO");
    let v, y, b, w, j, C, E, S = e => e;
    const O = x.default.div(v || (v = S`
  margin-top: 11.5%;
  animation-delay: ${0}s;
  background: ${0};
  color: ${0};
  width: 240px;
  padding-bottom: 15px;
  position: relative;
  border-radius: 6px;
  box-shadow: ${0};
  text-align: center;
  padding-top: 45px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  margin-left: 5px;
  margin-right: 5px;
  animation-duration: 2s;
  &:nth-child(2) {
    transform: scale(1.4);
    margin-right: 53px;
    margin-left: 53px;
    animation-duration: 3s;
  }
  margin-bottom: calc(2px + 1.3%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`), (e => e.animationDelay), (e => e.colors.background), (e => e.colors.text), p.default.basic),
        k = x.default.div(y || (y = S`
  position: absolute;
  top: -41px;
  left: 0;
  right: 0;
  margin: auto;
  width: 80px;
  height: 80px;
  background: ${0};
  border-radius: 50%;
  font-size: 28px;
  color: ${0};
  ${0};
`), (e => e.background), c.default.White, f.default.black),
        P = x.default.div(b || (b = S`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`)),
        M = x.default.div(w || (w = S`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 26px;
  ${0};
`), f.default.black),
        D = x.default.div(j || (j = S`
  ${0};
  width: 100%;
  font-size: 18px;
  margin-top: -4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`), f.default.bold),
        _ = x.default.div(C || (C = S`
  ${0};
  font-size: 14px;
  margin-left: 15px;
  margin-right: 15px;
`), f.default.normal),
        T = x.default.div(E || (E = S`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        A = {
            angle: 90,
            spread: 67,
            startVelocity: 60,
            elementCount: 50,
            decay: .87
        };
    class N extends m.Component {
        componentDidMount() {
            1 === this.props.position && setTimeout((() => {
                this.setState({
                    showConfetti: !0
                }), (0, u.inThanosMode)() || (0, u.inZombiesVsHumansMode)() || (0, u.playSound)(d.default.celebrate, {})
            }), 1e3 * (this.getAnimationDelay() + 2.3))
        }
        render() {
            const e = this.getColors();
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)(O, {
                    animationDelay: this.getAnimationDelay(),
                    colors: e,
                    className: "animated zoomInDown",
                    children: [(0, i.jsx)(k, {
                        background: this.getCircleBackground(),
                        children: (0, i.jsx)(P, {
                            children: this.getCircleMessage()
                        })
                    }), (0, i.jsx)(M, {
                        children: this.getMainName()
                    }), (0, i.jsx)(D, {
                        children: (0, u.getMoney)(this.props.snapshot.balance)
                    }), (0, i.jsx)(_, {
                        children: this.getDescription()
                    })]
                }), 1 === this.props.position ? (0, i.jsx)(T, {
                    children: (0, i.jsx)(t(g), {
                        active: this.state.showConfetti,
                        config: A
                    })
                }) : null]
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                showConfetti: !1
            }), (0, o.default)(this, "getColors", (() => {
                const {
                    isPlayer: e
                } = this.props;
                if (e) {
                    const e = this.props.snapshot,
                        {
                            theme: t
                        } = e,
                        n = this.props.themes,
                        r = n.filter((e => e.name === t)).length > 0 ? n.filter((e => e.name === t))[0] : n.filter((e => "Default" === e.name))[0];
                    return "Default" === r.name ? {
                        background: c.default.White,
                        text: c.default.Black
                    } : {
                        background: r.question.background,
                        text: r.question.text
                    }
                }
                const t = this.props.snapshot;
                return {
                    background: (0, h.darken)(.1, (0, u.getTeamColor)(t.id)),
                    text: c.default.White
                }
            })), (0, o.default)(this, "getMainName", (() => {
                const {
                    isPlayer: e
                } = this.props;
                if (e) {
                    return this.props.snapshot.name
                }
                const t = this.props.snapshot;
                return (0, i.jsx)(s.default, {
                    text: t.id
                })
            })), (0, o.default)(this, "getDescription", (() => {
                const {
                    isPlayer: e
                } = this.props;
                if (e) return "";
                const t = this.props.snapshot;
                return (0, l.getTeamPlayerNames)(t.players)
            })), (0, o.default)(this, "getAnimationDelay", (() => {
                const {
                    position: e
                } = this.props;
                return 1 === e ? 4.6 : 2 === e ? 2.7 : 0
            })), (0, o.default)(this, "getCircleMessage", (() => {
                const {
                    position: e
                } = this.props;
                return 1 === e ? "1st" : 2 === e ? "2nd" : "3rd"
            })), (0, o.default)(this, "getCircleBackground", (() => {
                const {
                    position: e
                } = this.props;
                return 1 === e ? "conic-gradient(#edc800, #e3b600, #f3cf00, #ffe800, #ffe900, #ffeb00, #ffe000, #ebc500, #e0b100, #f1cc00, #fcdc00, #ffe500, #fad900, #eec200, #e7b900, #f7d300, #ffe800, #ffe300, #f5d100, #e6b900, #e3b600, #f4d000, #ffe400, #ebc600, #e3b600, #f6d500, #ffe900, #ffe90a, #edc800) content-box, linear-gradient(#f6d600, #f6d600) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box" : 2 === e ? "conic-gradient(#d7d7d7, #c3c3c3, #cccccc, #c6c6c6, #d3d3d3, #d8d8d8, #d5d5d5, #d8d8d8, #d3d3d3, #c5c5c5, #c0c0c0, #bfbfbf, #d0d0d0, #d9d9d9, #d1d1d1, #c5c5c5, #c8c8c8, #d7d7d7, #d5d5d5, #cdcdcd, #c4c4c4, #d9d9d9, #cecece, #c5c5c5, #c5c5c5, #cdcdcd, #d8d8d8, #d9d9d9, #d7d7d7) content-box, linear-gradient(#d4d4d4, #d4d4d4) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box" : "conic-gradient(#e6c9bf, #d2b5aa, #cbaea3, #d4b5ab, #e5c3bd, #d9c0b4, #d9bcb1, #c5a399, #e3c6bc, #e7cac0, #dec0b5, #d3b6ab, #cfada1, #d4b6ac, #e2c6c0, #e2c6c0, #d2b1a6, #d2b1a6, #d1b4a9, #e1c4ba, #e5c9be, #dec1b6, #d3b6ab, #ceb0a6, #cfada3, #d2b5aa, #dabdb2, #e5c9be, #e6c9bf) content-box, linear-gradient(#e5c9be, #e5c9be) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box"
            }))
        }
    }
    var I = N
})), r.register("56tQE", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("fywoC"),
        o = r("3KQc0"),
        i = r("9iNNJ");
    var s = (e, t) => {
        const [n, r] = a.useState((() => {
            var n, r;
            const a = e && "current" in e ? e.current : e;
            return a ? [a.offsetWidth, a.offsetHeight] : [null !== (n = null == t ? void 0 : t.initialWidth) && void 0 !== n ? n : 0, null !== (r = null == t ? void 0 : t.initialHeight) && void 0 !== r ? r : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && r([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, o.default)(e, (e => {
            const t = e.target;
            r([t.offsetWidth, t.offsetHeight])
        })), n
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("6rvT3"),
        o = r("9iNNJ"),
        i = r("3Yjty"),
        s = r("f1PHW");
    let l;
    const d = () => l || (l = function() {
        const e = new Map,
            t = new(0, a.default)((0, s.default)(((t, n) => {
                var r;
                if (1 === t.length) null === (r = e.get(t[0].target)) || void 0 === r || r(t[0], n);
                else
                    for (let r = 0; r < t.length; r++) {
                        var a;
                        null === (a = e.get(t[r].target)) || void 0 === a || a(t[r], n)
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
        const n = d(),
            r = (0, i.default)(t);
        return (0, o.default)((() => {
            let t = !1;
            const a = e && "current" in e ? e.current : e;
            if (a) return n.subscribe(a, ((e, n) => {
                t || r.current(e, n)
            })), () => {
                t = !0, n.unsubscribe(a)
            }
        }), [e, n, r]), n.observer
    }
})), r.register("9iNNJ", (function(n, a) {
    e(n.exports, "default", (function() {
        return o
    }));
    var o = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC");
    var o = e => {
        const t = a.useRef(e);
        return a.useEffect((() => {
            t.current = e
        })), t
    }
})), r.register("f1PHW", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = function(e) {
        var t = [],
            n = null,
            r = function() {
                for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                t = a, n || (n = requestAnimationFrame((function() {
                    n = null, e.apply(void 0, t)
                })))
            };
        return r.cancel = function() {
            n && (cancelAnimationFrame(n), n = null)
        }, r
    }
})), r.register("h46w5", (function(t, n) {
    e(t.exports, "Container", (function() {
        return j
    })), e(t.exports, "default", (function() {
        return w
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("2FDaO"),
        s = r("5i6SE"),
        l = r("eJgdG"),
        d = r("d1LT2"),
        u = r("5Z32P"),
        c = r("lpEVe"),
        f = r("VvPwO"),
        p = r("jsEAx"),
        h = r("h1Mb4"),
        m = r("fucqw"),
        g = r("fKxAL");
    let x, v, y, b = e => e;
    var w = (0, c.observer)((e => {
        const {
            draw: t
        } = o.useContext(f.default);
        o.useEffect((() => {
            if (0 === t.round.secondsLeft) {
                let t;
                (0, u.musicIsOn)() && (t = setTimeout((() => {
                    m.default.draw.background.fade(m.default.draw.background.volume(), g.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 6e3)
                }), 3500));
                const n = setTimeout((() => e.fadeOut()), 6500),
                    r = setTimeout((() => {
                        (0, p.default)()
                    }), 8e3);
                return () => {
                    clearTimeout(n), clearTimeout(r), t && clearTimeout(t)
                }
            }
        }), [t.round.secondsLeft]), o.useEffect((() => {
            if (m.default.draw.roundStart.play(), (0, u.musicIsOn)()) {
                m.default.draw.background.fade(m.default.draw.background.volume(), 0, 400);
                const e = m.default.draw.funk,
                    n = 1.3,
                    r = 2,
                    a = t.round.secondsLeft,
                    o = .6,
                    i = e.duration() - a - n - o - r;
                return e.volume(0), e.seek(i), setTimeout((() => {
                    e.play(), e.fade(0, g.DRAW_MODE_MUSIC_VOLUME, 9e3)
                }), 1e3 * o), () => {
                    e.playing && e.stop()
                }
            }
        }), []);
        return (0, a.jsxs)(j, {
            children: [(0, a.jsx)("div", {
                children: (0, a.jsx)(s.default, {
                    iconOnLeft: !0,
                    icon: (0, u.getAssetPath)("hand-drawn-clock.svg"),
                    value: t.round.secondsLeft
                })
            }), (0, a.jsxs)("div", {
                style: {
                    marginBottom: 4
                },
                className: t.round.secondsLeft ? "" : "animated fadeOut",
                children: [(0, a.jsxs)(C, {
                    onClick: () => {
                        t.showingFeed = !t.showingFeed
                    },
                    children: [t.showingFeed ? "Hide" : "Show", " Feed"]
                }), (0, a.jsx)(C, {
                    onClick: () => {
                        (0, u.send)(h.default.draw.clear)
                    },
                    children: "Clear Canvas"
                }), (0, a.jsx)(E, {
                    onClick: p.default,
                    children: "End Round Early"
                })]
            })]
        })
    }));
    const j = i.default.div.attrs({
            className: "maxHeight flex flex-column"
        })(x || (x = b`
  padding: 20px 40px;
  z-index: 2;
  justify-content: space-between;
`)),
        C = i.default.div(v || (v = b`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 10px;
  text-decoration: underline;
  cursor: pointer;
`)),
        E = (0, i.default)(l.HandDrawnDiv).attrs({
            borderWidth: 2
        })(y || (y = b`
  text-transform: uppercase;
  cursor: pointer;
  line-height: 1;
  padding: 14px;
  font-size: 15px;
  background: ${0};
`), d.default.White)
})), r.register("5i6SE", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var a = r("hxEiv"),
        o = r("d1LT2");
    r("fywoC");
    var i = r("2FDaO");
    let s, l, d, u, c = e => e;
    var f = e => (0, a.jsxs)(p, {
        iconOnLeft: e.iconOnLeft,
        children: [(0, a.jsx)(h, {
            children: (0, a.jsx)(m, {
                src: e.icon
            })
        }), (0, a.jsx)(g, {
            children: e.value
        })]
    });
    const p = i.default.div.attrs({
            className: "flex flex-column"
        })(s || (s = c`
  align-items: ${0};
`), (e => e.iconOnLeft ? "flex-start" : "flex-end")),
        h = i.default.div.attrs({
            className: "flex hc vc"
        })(l || (l = c`
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 50%;
  border: solid 2px ${0};
  background: ${0};
  margin-bottom: -26px;
  position: relative;
`), o.default.Black, o.default.White),
        m = i.default.img.attrs({
            className: "maxWidth maxHeight"
        })(d || (d = c``)),
        g = i.default.div.attrs({
            className: "flex hc vc"
        })(u || (u = c`
  height: 100px;
  width: 100px;
  font-size: 31px;
  line-height: 1;
  border: solid 3px ${0};
  background: ${0};
  border-radius: 50%;
  margin-left: 6px;
`), o.default.Black, o.default.White)
})), r.register("jsEAx", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("h1Mb4"),
        o = r("5Z32P");
    var i = () => {
        (0, o.send)(a.default.draw.endRound)
    }
})), r.register("fKxAL", (function(t, n) {
    e(t.exports, "DRAW_MODE_MUSIC_VOLUME", (function() {
        return r
    })), e(t.exports, "DRAW_MODE_BACKGROUND_MUSIC_VOLUME", (function() {
        return a
    })), e(t.exports, "DRAW_MODE_FONT", (function() {
        return o
    }));
    const r = .7,
        a = .4,
        o = "'Pangolin', sans-serif"
})), r.register("4kecK", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("5Z32P"),
        i = r("VvPwO"),
        s = r("lpEVe"),
        l = r("fywoC"),
        d = r("5i6SE"),
        u = r("lrrnA"),
        c = r("h46w5"),
        f = r("jsEAx");
    var p = (0, s.observer)((() => {
        var e, t;
        const {
            draw: n
        } = l.useContext(i.default);
        l.useEffect((() => {
            var e, t, r;
            (null == n || null === (e = n.personCount) || void 0 === e ? void 0 : e.total) && (null == n || null === (t = n.personCount) || void 0 === t ? void 0 : t.total) === (null == n || null === (r = n.personCount) || void 0 === r ? void 0 : r.correct) && (n.everybodyGotLastRoundCorrect = !0, (0, f.default)())
        }), [null == n || null === (e = n.personCount) || void 0 === e ? void 0 : e.total, null == n || null === (t = n.personCount) || void 0 === t ? void 0 : t.correct]);
        return (0, a.jsxs)(c.Container, {
            children: [(0, a.jsx)("div", {
                children: (0, a.jsx)(d.default, {
                    iconOnLeft: !1,
                    icon: (0, o.getAssetPath)("hand-drawn-check.svg"),
                    value: (null == n ? void 0 : n.personCount) ? null == n ? void 0 : n.personCount.correct : 0
                })
            }), (0, a.jsx)("div", {
                children: (0, a.jsx)(u.default, {})
            })]
        })
    }))
})), r.register("lrrnA", (function(t, n) {
    e(t.exports, "default", (function() {
        return w
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("2cVVi"),
        s = r("2FDaO"),
        l = r("d1LT2"),
        d = r("cmvpZ"),
        u = r("eJgdG"),
        c = r("5Z32P"),
        f = r("lpEVe"),
        p = r("c72PM"),
        h = r("4MuSt"),
        m = r("VvPwO");
    let g, x, v = e => e;
    const y = (0, f.observer)((() => {
        const {
            draw: e
        } = o.useContext(m.default), [t, n] = o.useState([]), r = (0, d.debounce)((e => {
            n((t => [...t, e]))
        }), 120);
        o.useEffect((() => {
            const t = (0, h.reaction)((() => e.latestFeedItem), (e => {
                e && (e => {
                    e.important ? n((t => [...t, e])) : r(e)
                })({
                    ...e,
                    id: Date.now().toString() + Math.random().toString()
                })
            }));
            return () => t()
        }), []);
        const s = o.useMemo((() => {
            let e = window.innerHeight;
            if (!e) return 2;
            e -= 200;
            const t = Math.floor(e / 43);
            return Math.max(t - 1, 2)
        }), []);
        return e.showingFeed ? (0, a.jsx)(c.HideIfTabbedAway, {
            children: (0, a.jsx)("div", {
                style: {
                    position: "relative"
                },
                children: (0, a.jsx)(i.default, {
                    enterAnimation: "fade",
                    leaveAnimation: "accordionVertical",
                    duration: 150,
                    children: (0, d.takeRight)(t, s).map((e => (0, a.jsx)(b, {
                        item: e
                    }, `draw-feed-${e.id}`)))
                })
            })
        }) : null
    }));
    class b extends o.Component {
        render() {
            const {
                name: e,
                action: t,
                translateAllowed: n,
                nameColor: r,
                actionColor: o
            } = this.props.item;
            return (0, a.jsx)(j, {
                children: (0, a.jsxs)(C, {
                    children: [e && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("b", {
                            style: {
                                color: r || l.default.Black
                            },
                            children: e
                        }), " "]
                    }), t && (0, a.jsx)("span", {
                        style: {
                            color: o || l.default.Black
                        },
                        children: n ? (0, a.jsx)(p.default, {
                            text: t
                        }) : t
                    })]
                })
            })
        }
    }
    var w = y;
    const j = (0, s.default)(u.HandDrawnDiv).attrs({
            className: "flex vc",
            borderWidth: 2
        })(g || (g = v`
  width: 300px;
  margin-top: ${0}px;
  height: ${0}px;
  font-size: 16px;
  padding: 0px 14px;
  background: ${0};
  // We need to remove the border radius in Safari, otherwise it acts strange
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      border-radius: 0px;
    }
  }
`), 8, 35, l.default.White),
        C = s.default.span.attrs({
            className: "maxWidth"
        })(x || (x = v`
  text-overflow: ellipsis;
  white-space: nowrap;
`))
})), r.register("htXI6", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("2FDaO"),
        s = r("4tw0N"),
        l = r("l5arD"),
        d = r("b2O08"),
        u = r("5Z32P"),
        c = r("fucqw"),
        f = r("fKxAL");
    let p, h, m = e => e;
    var g = () => (o.useEffect((() => {
        (0, u.musicIsOn)() && c.default.draw.background.fade(c.default.draw.background.volume(), f.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 2e3)
    }), []), (0, a.jsxs)(x, {
        children: [(0, a.jsxs)(v, {
            children: [(0, a.jsx)(s.default, {}), (0, a.jsx)(l.default, {})]
        }), (0, a.jsx)(d.default, {})]
    }));
    const x = i.default.div.attrs({
            className: "maxWidth maxHeight flex flex-column"
        })(p || (p = m``)),
        v = i.default.div.attrs({
            className: "flex animated fadeIn"
        })(h || (h = m`
  flex: 1;
  overflow: hidden;
  animation-duration: 2.2s;
`))
})), r.register("4tw0N", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var a = r("hxEiv"),
        o = r("bUoym"),
        i = r("fywoC"),
        s = r("eJgdG"),
        l = r("2FDaO"),
        d = r("56tQE"),
        u = r("VvPwO"),
        c = r("d1LT2"),
        f = r("c72PM");
    let p, h, m, g, x = e => e;
    var v = () => {
        const {
            draw: {
                round: e,
                everybodyGotLastRoundCorrect: t,
                drawingHistory: n
            }
        } = i.useContext(u.default);
        i.useEffect((() => {
            e.drawingBase64 && n.push({
                image: e.drawingBase64,
                name: e.drawer.name,
                term: e.term,
                index: n.length
            })
        }), []);
        const r = i.useRef(null),
            [l, c] = (0, d.default)(r),
            p = Math.min(l / 4, (c - 120) / 3),
            h = 4 * p,
            m = 3 * p;
        return (0, a.jsx)(y, {
            children: (0, a.jsxs)(b, {
                ref: r,
                children: [(0, a.jsx)(w, {
                    children: e.term
                }), h && m ? (0, a.jsx)(s.HandDrawnDiv, {
                    style: {
                        width: h,
                        height: m
                    },
                    children: (0, a.jsx)(o.default, {
                        width: h,
                        height: m,
                        canEdit: !1,
                        initialImage: e.drawingBase64
                    })
                }) : null, t ? (0, a.jsx)(j, {
                    children: (0, a.jsx)(f.default, {
                        text: "Everybody guessed correctly!"
                    })
                }) : null]
            })
        })
    };
    const y = l.default.div.attrs({
            className: "maxHeight"
        })(p || (p = x`
  width: 50%;
  padding: 30px;
  padding-right: 15px;
`)),
        b = l.default.div.attrs({
            className: "maxWidth maxHeight flex flex-column hc vc"
        })(h || (h = x``)),
        w = l.default.div(m || (m = x`
  font-size: 40px;
  margin-bottom: 7px;
`)),
        j = l.default.div(g || (g = x`
  background: ${0};
  color: ${0};
  margin-top: 16px;
  padding: 5px 20px;
  border-radius: 55px;
  font-size: 17px;
`), c.default.SuccessGreen, c.default.White)
})), r.register("l5arD", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var a = r("hxEiv"),
        o = r("c72PM"),
        i = r("5Z32P"),
        s = r("VvPwO"),
        l = r("kC0Tv"),
        d = r("lpEVe"),
        u = r("fywoC"),
        c = r("2FDaO");
    let f, p, h, m, g = e => e;
    const x = e => (0, a.jsxs)(b, {
        children: [(0, a.jsx)(w, {
            children: e.name
        }), (0, a.jsxs)(j, {
            children: ["+ ", (0, i.getMoney)(e.amount)]
        })]
    });
    var v = (0, d.observer)((() => {
        const {
            draw: {
                pointAdditions: e
            }
        } = u.useContext(s.default);
        return (0, a.jsx)(y, {
            children: e.length ? (0, a.jsx)(a.Fragment, {
                children: e.map((e => (0, a.jsx)(x, {
                    name: e.name,
                    amount: e.amount
                }, `addition-${e.id}`)))
            }) : (0, a.jsx)("div", {
                className: "maxHeight maxWidth flex vc",
                children: (0, a.jsx)(b, {
                    children: (0, a.jsx)("div", {
                        className: "maxWidth",
                        style: {
                            textAlign: "center"
                        },
                        children: (0, a.jsx)(o.default, {
                            text: "Nobody was able to guess the term this time!"
                        })
                    })
                })
            })
        })
    }));
    const y = c.default.div.attrs({
            className: "maxHeight scroll-y"
        })(f || (f = g`
  width: 50%;
  padding: 30px;
  padding-left: 15px;
`)),
        b = c.default.div.attrs({
            className: "maxWidth flex vc light-shadow"
        })(p || (p = g`
  background: rgba(255, 255, 255, 0.8);
  border-style: solid;
  border-width: 2px;
  border-color: ${0};
  border-radius: 3px;
  padding: 30px 20px;
  margin-bottom: 10px;
  justify-content: space-between;
  font-size: 23px;
  line-height: 1;
  &:last-child {
    margin-bottom: 0px;
  }
`), l.default.Black),
        w = c.default.div(h || (h = g`
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`)),
        j = c.default.div(m || (m = g`
  color: #1b5e20;
  font-weight: bold;
  margin-left: 10px;
  flex-shrink: 0;
`))
})), r.register("kC0Tv", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = r("4aaLU").default
})), r.register("4aaLU", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        White: "white",
        Black: "black",
        BackgroundGray: "#eeeeee",
        PrimaryBlue: "#05f",
        SecondaryPurple: "#1E076B",
        DisabledGray: "#838383",
        LightSuccessGreen: "#6abf69",
        DarkSuccessGreen: "#2e7d32"
    }
})), r.register("b2O08", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var a = r("hxEiv"),
        o = r("lOxf1"),
        i = r("93yIm"),
        s = r("5Z32P"),
        l = r("gMFss"),
        d = r("VvPwO"),
        u = r("lpEVe"),
        c = r("fywoC"),
        f = r("2FDaO");
    let p;
    var h = (0, u.observer)((() => {
        const {
            draw: e
        } = c.useContext(d.default);
        return (0, a.jsxs)(m, {
            children: [(0, a.jsx)(i.default, {
                size: "large",
                type: "primary",
                style: {
                    marginRight: 15
                },
                icon: (0, a.jsx)(o.default, {}),
                onClick: () => {
                    e.status = l.DrawStatus.pickDrawer
                },
                children: "Start Next Round"
            }), (0, a.jsx)(i.default, {
                type: "link",
                onClick: () => (0, s.endGame)(),
                children: "End Game"
            })]
        })
    }));
    const m = f.default.div.attrs({
        className: "maxWidth flex hc vc"
    })(p || (p = (e => e)`
  flex-shrink: 0;
  padding: 25px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 16px rgb(0 0 0 / 50%);
`))
})), r.register("lOxf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("cpDNt"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "TrophyOutlined";
    var d = o.forwardRef(l)
})), r.register("cpDNt", (function(t, n) {
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
                    d: "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"
                }
            }]
        },
        name: "trophy",
        theme: "outlined"
    }
})), r.register("lpl3s", (function(t, n) {
    e(t.exports, "default", (function() {
        return b
    }));
    var a = r("hxEiv"),
        o = r("fC6cp"),
        i = r("c72PM"),
        s = r("5Z32P"),
        l = r("VvPwO"),
        d = r("kC0Tv"),
        u = r("lpEVe"),
        c = r("fywoC"),
        f = r("2FDaO"),
        p = r("iTdUP");
    let h, m, g, x, v, y = e => e;
    var b = (0, u.observer)((() => {
        const {
            draw: e
        } = c.useContext(l.default);
        return c.useEffect((() => {
            e.personCount = null, e.everybodyGotLastRoundCorrect = !1
        }), []), (0, a.jsx)(w, {
            children: (0, a.jsxs)(j, {
                children: [(0, a.jsx)(C, {}), (0, a.jsx)(E, {
                    children: (0, a.jsx)(i.default, {
                        text: "Who's drawing?"
                    })
                }), (0, a.jsx)(S, {
                    children: (0, a.jsx)(i.default, {
                        text: "Select the drawer for this round!"
                    })
                }), (0, a.jsx)(o.default, {}), (0, a.jsx)(p.default, {})]
            })
        })
    }));
    const w = f.default.div.attrs({
            className: "maxWidth maxHeight scroll-y flex hc"
        })(h || (h = y`
  align-items: flex-start;
`)),
        j = f.default.div.attrs({
            className: "flex flex-column vc medium-shadow"
        })(m || (m = y`
  width: 80%;
  max-width: 690px;
  background: rgba(255, 255, 255, 0.9);
  border-style: solid;
  border-width: 3px;
  border-color: ${0};
  border-radius: 8px;
  padding: 30px;
  margin: 20px;
`), d.default.Black),
        C = f.default.img.attrs({
            src: (0, s.getAssetPath)("drawing.svg")
        })(g || (g = y`
  height: 160px;
  margin-bottom: 14px;
`)),
        E = f.default.div(x || (x = y`
  font-size: 54px;
  font-weight: bold;
`)),
        S = f.default.div(v || (v = y`
  font-size: 23px;
`))
})), r.register("iTdUP", (function(t, n) {
    e(t.exports, "default", (function() {
        return b
    }));
    var a = r("hxEiv"),
        o = r("93yIm"),
        i = r("h1Mb4"),
        s = r("5Z32P"),
        l = r("VvPwO"),
        d = r("cmvpZ"),
        u = r("lpEVe"),
        c = r("fywoC"),
        f = r("2FDaO"),
        p = r("eJgdG");
    let h, m, g, x, v = e => e;
    const y = e => (0, a.jsxs)(C, {
        children: [(0, a.jsx)(E, {
            children: e.name
        }), (0, a.jsx)(o.default, {
            type: "dashed",
            onClick: e.onSelect,
            children: "Select"
        })]
    });
    var b = (0, u.observer)((() => {
        const {
            players: {
                players: e
            }
        } = c.useContext(l.default), t = e => {
            (0, s.send)(i.default.draw.createRound, e)
        };
        return (0, a.jsxs)(w, {
            children: [(0, a.jsxs)(j, {
                children: [(0, a.jsxs)("div", {
                    className: "flex vc",
                    children: [(0, a.jsx)("img", {
                        src: (0, s.getAssetPath)("dices.svg"),
                        style: {
                            height: 38
                        }
                    }), (0, a.jsx)("div", {
                        style: {
                            fontSize: 22,
                            fontWeight: "bold",
                            marginLeft: 13
                        },
                        children: "Random Student"
                    })]
                }), (0, a.jsx)(o.default, {
                    size: "large",
                    type: "primary",
                    onClick: () => {
                        if (!e.length) return;
                        const n = (0, d.sample)(e);
                        t(n.id)
                    },
                    children: "Select"
                })]
            }), e.slice().sort(((e, t) => ((e, t) => {
                const n = e.toLowerCase(),
                    r = t.toLowerCase();
                return n < r ? -1 : n > r ? 1 : 0
            })(e.name, t.name))).map((e => (0, a.jsx)(y, {
                name: e.name,
                onSelect: () => t(e.id)
            }, e.id)))]
        })
    }));
    const w = f.default.div.attrs({
            className: "maxWidth"
        })(h || (h = v``)),
        j = (0, f.default)(p.HandDrawnDiv).attrs({
            className: "maxWidth flex vc"
        })(m || (m = v`
  justify-content: space-between;
  padding: 12px 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
`)),
        C = f.default.div.attrs({
            className: "maxWidth flex vc"
        })(g || (g = v`
  justify-content: space-between;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.7);
  border-width: 1px;
  border-radius: 6px;
  padding: 12px 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  &:last-child {
    margin-bottom: 0px;
  }
`)),
        E = f.default.div(x || (x = v`
  font-size: 19px;
`))
})), r.register("gMBUR", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = r("hxEiv"),
        o = r("5Z32P"),
        i = r("VvPwO"),
        s = r("lpEVe"),
        l = r("fywoC"),
        d = r("2FDaO"),
        u = r("eJgdG");
    let c, f, p, h, m, g = e => e;
    var x = (0, s.observer)((() => {
        var e;
        const {
            draw: {
                round: t
            }
        } = l.useContext(i.default);
        return (null == t || null === (e = t.drawer) || void 0 === e ? void 0 : e.name) ? (0, a.jsx)(v, {
            children: (0, a.jsxs)(y, {
                children: [(0, a.jsx)(b, {}), (0, a.jsx)(w, {
                    children: "Get ready!"
                }), (0, a.jsxs)(j, {
                    children: [t.drawer.name, " is selecting a term..."]
                })]
            })
        }) : null
    }));
    const v = d.default.div.attrs({
            className: "maxWidth maxHeight flex hc vc"
        })(c || (c = g`
  padding: 30px;
  text-align: center;
`)),
        y = (0, d.default)(u.HandDrawnDiv).attrs({
            className: "flex hc vc flex-column medium-shadow"
        })(f || (f = g`
  height: 440px;
  width: 600px;
  background: rgba(255, 255, 255, 0.7);
`)),
        b = d.default.img.attrs({
            src: (0, o.getAssetPath)("paint.svg")
        })(p || (p = g`
  height: 160px;
`)),
        w = d.default.div(h || (h = g`
  margin-top: 20px;
  font-size: 68px;
  font-weight: bold;
`)),
        j = d.default.div(m || (m = g`
  font-size: 30px;
  margin-top: --6px;
`))
})), r.register("c64OL", (function(t, n) {
    e(t.exports, "default", (function() {
        return j
    }));
    var a = r("hxEiv"),
        o = r("fiiqH"),
        i = r("93yIm"),
        s = r("e4KJZ"),
        l = r("fucqw"),
        d = r("d1LT2"),
        u = r("bbvHy"),
        c = r("gMFss"),
        f = r("VvPwO"),
        p = r("lpEVe"),
        h = r("fywoC"),
        m = r("2FDaO"),
        g = r("fKxAL");
    let x, v, y, b, w = e => e;
    var j = (0, p.observer)((() => {
        const {
            gameValues: {
                gameCode: e
            },
            gameOptions: t,
            draw: n
        } = h.useContext(f.default);
        return (0, a.jsxs)(C, {
            children: [(0, a.jsxs)(E, {
                children: [(0, a.jsx)(S, {}), (0, a.jsxs)(O, {
                    children: [(0, a.jsx)("b", {
                        children: "Game Code:"
                    }), " ", e]
                })]
            }), (0, a.jsx)("div", {
                children: (0, a.jsx)(s.default, {
                    title: `Turn ${t.music?"Off":"On"} Music`,
                    placement: "left",
                    children: (0, a.jsx)(i.default, {
                        icon: (0, a.jsx)(o.default, {}),
                        type: "primary",
                        shape: "circle",
                        onClick: () => {
                            t.music ? (l.default.draw.background.volume(0), l.default.draw.funk.volume(0), t.music = !1) : (l.default.draw.background.volume(n.status === c.DrawStatus.drawing ? 0 : g.DRAW_MODE_BACKGROUND_MUSIC_VOLUME), l.default.draw.background.playing() || l.default.draw.background.play(), l.default.draw.funk.volume(g.DRAW_MODE_MUSIC_VOLUME), t.music = !0)
                        }
                    })
                })
            })]
        })
    }));
    const C = m.default.div.attrs({
            className: "light-shadow flex vc"
        })(x || (x = w`
  flex-shrink: 0;
  color: ${0};
  font-family: ${0};
  font-size: 13px;
  background: ${0};
  padding: 14px 19px;
  justify-content: space-between;
`), d.default.Black, u.default.fontFamilyName, d.default.White),
        E = m.default.div(v || (v = w``)),
        S = m.default.img.attrs({
            src: "/client/img/svgLogo.svg"
        })(y || (y = w`
  height: 22px;
`)),
        O = m.default.div(b || (b = w`
  font-size: 14px;
  margin-top: 10px;
  line-height: 1;
  opacity: 0.7;
`))
})), r.register("52895", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var a = r("hxEiv"),
        o = r("Ze8VX"),
        i = r("fywoC"),
        s = r("2FDaO"),
        l = r("gidBO"),
        d = r("lM1xV"),
        u = r("4SzF7"),
        c = r("8hWp6"),
        f = r("lpEVe"),
        p = r("VvPwO"),
        h = r("jg5Z3"),
        m = r("2RzCw");
    let g, x, v = e => e;
    var y = (0, f.observer)((() => {
        const {
            pardy: e
        } = i.useContext(p.default), t = () => {
            e.screen = h.PardyScreen.home
        }, n = !(!e || !e.currentRound || "Finale" !== e.currentRound.type) ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.2)";
        return (0, a.jsx)(o.AnimateSharedLayout, {
            children: (0, a.jsx)(m.default, {
                children: (0, a.jsxs)(b, {
                    style: {
                        background: n
                    },
                    children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(w, {
                        children: e.screen === h.PardyScreen.home ? (0, a.jsx)(l.default, {}) : e.screen === h.PardyScreen.answer ? (0, a.jsx)(c.default, {
                            setToHomeScreen: t
                        }) : (0, a.jsx)(u.default, {
                            setToHomeScreen: t
                        })
                    })]
                })
            })
        })
    }));
    const b = s.default.div.attrs({
            className: "flex flex-column"
        })(g || (g = v`
  font-family: 'Londrina Solid', cursive;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  div {
    overflow: hidden;
  }
`)),
        w = s.default.div(x || (x = v`
  flex: 1;
  overflow: hidden;
`))
})), r.register("Ze8VX", (function(t, n) {
    e(t.exports, "AnimateSharedLayout", (function() {
        return d
    }));
    var a = r("YpDI8"),
        o = r("fywoC"),
        i = r("8ATQJ"),
        s = r("1cjBH");
    let l = 0;
    const d = ({
        children: e
    }) => (o.useEffect((() => {
        (0, a.warning)(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
    }), []), o.createElement(s.LayoutGroup, {
        id: (0, i.useConstant)((() => "asl-" + l++))
    }, e))
})), r.register("1cjBH", (function(t, n) {
    e(t.exports, "LayoutGroup", (function() {
        return u
    }));
    var a = r("fywoC"),
        o = (a = r("fywoC"), r("4yEJY")),
        i = r("6IWqP"),
        s = r("1kM6N"),
        l = r("bu0YH");
    const d = e => !0 === e,
        u = ({
            children: e,
            id: t,
            inheritId: n,
            inherit: r = !0
        }) => {
            void 0 !== n && (r = n);
            const u = (0, a.useContext)(o.LayoutGroupContext),
                c = (0, a.useContext)(i.DeprecatedLayoutGroupContext),
                [f, p] = (0, s.useForceUpdate)(),
                h = (0, a.useRef)(null),
                m = u.id || c;
            null === h.current && ((e => d(!0 === e) || "id" === e)(r) && m && (t = t ? m + "-" + t : m), h.current = {
                id: t,
                group: d(r) && u.group || (0, l.nodeGroup)()
            });
            const g = (0, a.useMemo)((() => ({
                ...h.current,
                forceRender: f
            })), [p]);
            return a.createElement(o.LayoutGroupContext.Provider, {
                value: g
            }, e)
        }
})), r.register("6IWqP", (function(t, n) {
    e(t.exports, "DeprecatedLayoutGroupContext", (function() {
        return a
    }));
    const a = (0, r("fywoC").createContext)(null)
})), r.register("1kM6N", (function(t, n) {
    e(t.exports, "useForceUpdate", (function() {
        return s
    }));
    var a = r("jxOGN"),
        o = r("fywoC"),
        i = r("e54WO");

    function s() {
        const e = (0, i.useIsMounted)(),
            [t, n] = (0, o.useState)(0),
            r = (0, o.useCallback)((() => {
                e.current && n(t + 1)
            }), [t]);
        return [(0, o.useCallback)((() => a.sync.postRender(r)), [r]), t]
    }
})), r.register("e54WO", (function(t, n) {
    e(t.exports, "useIsMounted", (function() {
        return i
    }));
    var a = r("fywoC"),
        o = r("ib4tF");

    function i() {
        const e = (0, a.useRef)(!1);
        return (0, o.useIsomorphicLayoutEffect)((() => (e.current = !0, () => {
            e.current = !1
        })), []), e
    }
})), r.register("bu0YH", (function(t, n) {
    e(t.exports, "nodeGroup", (function() {
        return a
    }));
    const r = e => !e.isLayoutDirty && e.willUpdate(!1);

    function a() {
        const e = new Set,
            t = new WeakMap,
            n = () => e.forEach(r);
        return {
            add: r => {
                e.add(r), t.set(r, r.addEventListener("willUpdate", n))
            },
            remove: r => {
                var a;
                e.delete(r), null === (a = t.get(r)) || void 0 === a || a(), t.delete(r), n()
            },
            dirty: n
        }
    }
})), r.register("gidBO", (function(t, n) {
    e(t.exports, "PardyHomeScreen", (function() {
        return p
    })), e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("71VQD"),
        s = r("iPNro"),
        l = r("2FDaO"),
        d = r("l6l4m"),
        u = r("6vbUb");
    let c, f, p, h = e => e;
    var m;
    (m = p || (p = {})).board = "board", m.rankings = "rankings";
    var g = () => {
        const [e, t] = o.useState(p.board);
        return (0, a.jsxs)(x, {
            initial: {
                scale: .8,
                y: "20%",
                opacity: 0
            },
            animate: {
                scale: 1,
                y: 0,
                opacity: 1
            },
            transition: {
                duration: .7,
                ease: "easeOut"
            },
            children: [(0, a.jsx)(v, {
                children: e === p.rankings ? (0, a.jsx)(s.default, {}) : (0, a.jsx)(i.default, {})
            }), (0, a.jsx)(d.default, {
                screen: e,
                setToBoardScreen: () => t(p.board),
                setToRankingScreen: () => t(p.rankings)
            })]
        })
    };
    const x = (0, l.default)(u.motion.div).attrs({
            className: "flex maxWidth maxHeight flex-column"
        })(c || (c = h``)),
        v = l.default.div(f || (f = h`
  flex: 1;
  z-index: 1;
  overflow: hidden;
`))
})), r.register("71VQD", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("P8bmR"),
        s = r("2FDaO"),
        l = r("lpEVe"),
        d = r("VvPwO");
    let u;
    var c = (0, l.observer)((() => {
        const {
            pardy: {
                board: e
            }
        } = o.useContext(d.default);
        if (!e) return null;
        const t = `${Math.round(100/e.categories.length)}%`;
        return (0, a.jsx)(f, {
            children: e.categories.map(((n, r) => (0, a.jsx)(i.default, {
                category: n,
                width: t,
                totalCategories: e.categories.length,
                categoryIndex: r
            }, n.name)))
        })
    }));
    const f = s.default.div.attrs({
        className: "flex hc maxAll"
    })(u || (u = (e => e)`
  padding: 20px;
`))
})), r.register("P8bmR", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("7mSAm"),
        s = r("2FDaO"),
        l = r("d1LT2"),
        d = r("jg5Z3"),
        u = r("lpEVe"),
        c = r("VvPwO"),
        f = r("5Z32P"),
        p = r("fucqw");
    let h, m, g, x, v = e => e;
    var y = (0, u.observer)((e => {
        const {
            pardy: t
        } = o.useContext(c.default);
        return (0, a.jsxs)(b, {
            width: e.width,
            children: [(0, a.jsx)(w, {
                children: (0, a.jsx)(j, {
                    children: e.category.name
                })
            }), (0, a.jsx)(C, {
                children: e.category.items.map(((n, r) => (0, a.jsx)(i.default, {
                    id: n.id,
                    amount: n.amount,
                    totalCategories: e.totalCategories,
                    categoryIndex: e.categoryIndex,
                    itemIndex: r,
                    onSelect: () => {
                        return r = n.id, p.default.pardy.music.fade(p.default.pardy.music.volume(), 0, 500), (0, f.playSound)(p.default.pardy.riser, {}), t.currentRound = {
                            type: "Normal",
                            value: {
                                category: e.category.name,
                                id: r
                            }
                        }, t.questionScreen = d.PardyQuestionScreen.preview, t.questionStatus = d.PardyQuestionStatus.preview, void(t.screen = d.PardyScreen.question);
                        var r
                    },
                    disabled: t.disabledSections.includes(n.id)
                }, `${e.category.name}-${n.id}`)))
            })]
        })
    }));
    const b = s.default.div.attrs({
            className: "flex flex-column vc"
        })(h || (h = v`
  height: 100%;
  width: ${0};
  overflow: hidden;
`), (e => e.width)),
        w = s.default.div.attrs({
            className: "flex hc"
        })(m || (m = v`
  font-size: 32px;
  margin-bottom: 10px;
  flex-shrink: 0;
  text-shadow: 0px 3px 3px ${0};
  width: 100%;
`), l.default.Black),
        j = s.default.div(g || (g = v`
  max-width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`)),
        C = s.default.div(x || (x = v`
  flex: 1;
  width: 100%;
`))
})), r.register("7mSAm", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("5Z32P"),
        i = r("d1LT2");
    r("fywoC");
    var s = r("2FDaO"),
        l = r("6vbUb");
    let d, u, c, f = e => e;
    var p = e => {
        const t = ((e, t, n) => {
                let r = !1,
                    a = !1;
                return e < t || (r = !0), n < 5 || (a = !0), {
                    top: !0,
                    right: r,
                    bottom: a,
                    left: !0
                }
            })(e.categoryIndex + 1, e.totalCategories, e.itemIndex + 1),
            n = e => e ? 2 : 0;
        return (0, a.jsx)(h, {
            onClick: e.disabled ? void 0 : e.onSelect,
            style: {
                borderBottomWidth: n(t.bottom),
                borderTopWidth: n(t.top),
                borderLeftWidth: n(t.left),
                borderRightWidth: n(t.right),
                background: e.disabled ? "rgba(0,0,0,0.2" : "transparent",
                cursor: e.disabled ? "not-allowed" : "pointer"
            },
            children: (0, a.jsx)(m, {
                style: {
                    opacity: e.disabled ? .5 : 1,
                    pointerEvents: e.disabled ? "none" : "auto"
                },
                layoutId: `item-${e.id}`,
                children: (0, a.jsx)(g, {
                    layoutId: `item-${e.id}-amount`,
                    children: (0, o.getMoney)(e.amount)
                })
            })
        })
    };
    const h = s.default.div.attrs({
            className: "flex hc vc"
        })(d || (d = f`
  background: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-color: ${0};
  height: 20%;
  user-select: none;
`), i.default.White),
        m = (0, s.default)(l.motion.div).attrs({
            className: "maxAll flex-center"
        })(u || (u = f`
  text-shadow: 0px 2px 2px ${0};
  transition: background 0.25s;
  font-size: 26px;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`), i.default.Black),
        g = (0, s.default)(l.motion.div)(c || (c = f``))
})), r.register("iPNro", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("iTiBh"),
        s = r("2FDaO"),
        l = r("lpEVe"),
        d = r("VvPwO"),
        u = r("auTQy"),
        c = r("iMOcM");
    let f;
    var p = (0, l.observer)((() => {
        const {
            players: e,
            pardy: {
                powers: t
            }
        } = o.useContext(d.default), n = (0, u.leaderboardSorter)(e.filteredPlayers), r = n[0], s = n.filter(((e, t) => 0 !== t)), l = e => {
            if (!e) return null;
            const n = t.find((t => t.id === e));
            return n ? n.background : null
        };
        return (0, a.jsxs)("div", {
            className: "flex flex-column maxHeight scroll-y",
            style: {
                padding: 50
            },
            children: [(0, a.jsx)("div", {
                className: "maxWidth flex hc",
                style: {
                    marginTop: -10,
                    marginBottom: 40
                },
                children: r ? (0, a.jsx)(i.default, {
                    size: "large",
                    place: "1st",
                    name: r.name,
                    amount: r.balance,
                    backgroundColor: l(r.power)
                }) : null
            }), s && s.length ? (0, a.jsx)(h, {
                children: s.map(((e, t) => (0, a.jsx)(i.default, {
                    size: "normal",
                    backgroundColor: l(e.power),
                    name: e.name,
                    amount: e.balance,
                    place: (0, c.numberToRank)(t + 2)
                }, e.id)))
            }) : null]
        })
    }));
    const h = s.default.div.attrs({
        className: "flex wrap hc vc"
    })(f || (f = (e => e)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 20px;
  justify-content: center;
`))
})), r.register("iTiBh", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv"),
        o = r("lKmIF"),
        i = r("69SUA"),
        s = r("5Z32P"),
        l = r("bbvHy"),
        d = r("3W7rN");
    r("fywoC");
    var u = r("2FDaO");
    let c, f, p, h, m = e => e;
    var g = e => {
        const t = "normal" === e.size;
        return (0, a.jsxs)(x, {
            className: t ? "light-shadow" : "medium-shadow",
            style: {
                width: t ? 300 : 600
            },
            children: [(0, a.jsx)(v, {
                children: e.place
            }), (0, a.jsx)(y, {
                style: {
                    height: t ? 150 : 200,
                    backgroundColor: e.backgroundColor || "rgba(0,0,0,0.15)"
                },
                children: (0, a.jsx)(d.default, {
                    mode: "single",
                    text: e.name,
                    noBold: !0
                })
            }), (0, a.jsx)(b, {
                children: (0, s.getMoney)(e.amount)
            })]
        })
    };
    const x = u.default.div(c || (c = m`
  border-radius: 5px;
  border: 2px solid ${0};
  font-family: ${0};
  font-weight: ${0};
  max-width: 100%;
`), o.default.White, l.default.fontFamilyName, i.FontWeights.Bold),
        v = u.default.div.attrs({
            className: "maxWidth"
        })(f || (f = m`
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 22px;
  border-bottom: 2px solid ${0};
`), o.default.White),
        y = u.default.div.attrs({
            className: "flex hc vc maxWidth"
        })(p || (p = m`
  font-family: 'Londrina Solid', sans-serif;
  padding: 10px;
  text-shadow: #000 3px 3px 2px;
`)),
        b = u.default.div.attrs({
            className: "maxWidth"
        })(h || (h = m`
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 22px;
  border-top: 2px solid ${0};
`), o.default.White)
})), r.register("l6l4m", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("hxEiv"),
        o = r("93yIm");
    r("fywoC");
    var i = r("2FDaO"),
        s = r("gidBO");
    let l;
    var d = e => (0, a.jsxs)(u, {
        children: [(0, a.jsx)(o.default, {
            type: e.screen === s.PardyHomeScreen.board ? "primary" : "default",
            onClick: e.setToBoardScreen,
            style: {
                width: 140,
                marginRight: 10
            },
            children: "Board"
        }), (0, a.jsx)(o.default, {
            type: e.screen === s.PardyHomeScreen.rankings ? "primary" : "default",
            onClick: e.setToRankingScreen,
            style: {
                width: 140
            },
            children: "Rankings"
        })]
    });
    const u = i.default.div.attrs({
        className: "flex hc vc"
    })(l || (l = (e => e)`
  flex-shrink: 0;
  height: 60px;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  z-index: 2;
`))
})), r.register("lM1xV", (function(t, n) {
    e(t.exports, "default", (function() {
        return P
    }));
    var a = r("hxEiv"),
        o = r("gnAdP"),
        i = r("fucqw"),
        s = r("5Z32P"),
        l = r("d1LT2"),
        d = r("7mCD4"),
        u = r("VvPwO"),
        c = r("jg5Z3"),
        f = r("6vbUb"),
        p = r("lpEVe"),
        h = r("fywoC"),
        m = r("2FDaO"),
        g = r("iT5gE"),
        x = r("gvaaN"),
        v = r("jC71e");
    let y, b, w, j, C, E, S = e => e;
    const O = (0, p.observer)((() => {
            const {
                gameValues: {
                    gameCode: e
                },
                pardy: {
                    screen: t,
                    questionScreen: n,
                    questionStatus: r,
                    currentRound: l
                },
                gameOptions: d
            } = h.useContext(u.default), f = h.useMemo((() => t === c.PardyScreen.home), [t]), p = h.useCallback((() => {
                (0, s.endGame)()
            }), []), m = [{
                key: "skip-to-finale",
                label: "Skip To Finale",
                onClick: v.default,
                disabled: !f
            }, {
                key: "toggle-music",
                label: d.music ? "Mute" : "Enable Music",
                onClick: () => {
                    const e = !d.music;
                    if (d.music = e, e)
                        if (t === c.PardyScreen.question && n === c.PardyQuestionScreen.question && r === c.PardyQuestionStatus.ask) i.default.pardy.countdown.volume(g.default.countdownVolume);
                        else {
                            const e = t === c.PardyScreen.home,
                                a = t === c.PardyScreen.answer,
                                o = l && "Finale" === l.type,
                                s = n === c.PardyQuestionScreen.question && r === c.PardyQuestionStatus.timesUp;
                            (e || a || o || s) && (o ? i.default.pardy.finaleMusic.volume(g.default.finaleMusicVolume) : i.default.pardy.music.volume(g.default.musicVolume))
                        }
                    else i.default.pardy.music.volume(0), i.default.pardy.countdown.volume(0), i.default.pardy.finaleMusic.volume(0)
                }
            }];
            return (0, a.jsxs)(M, {
                children: [(0, a.jsxs)(D, {
                    children: ["Code: ", e]
                }), (0, a.jsx)(k, {}), (0, a.jsx)(N, {
                    children: (0, a.jsx)(o.default.Button, {
                        onClick: p,
                        menu: {
                            items: m
                        },
                        children: "End Game"
                    })
                })]
            })
        })),
        k = (0, p.observer)((() => {
            const {
                pardy: e
            } = h.useContext(u.default), t = (() => {
                const {
                    currentRound: t
                } = e;
                if (!t) return null;
                if ("Finale" === t.type) return "The Finale";
                const n = (0, x.default)();
                return n && n.categoryName && n.amount ? `${n.categoryName} - ${(0,s.getMoney)(n.amount)}` : null
            })(), n = !t || (e.screen === c.PardyScreen.home || e.questionScreen === c.PardyQuestionScreen.finale || e.questionScreen === c.PardyQuestionScreen.preview);
            return (0, a.jsx)(_, {
                children: (0, a.jsxs)(f.motion.div, {
                    initial: {
                        y: -50
                    },
                    animate: {
                        y: n ? -50 : 0
                    },
                    transition: {
                        duration: 1,
                        ease: "anticipate"
                    },
                    className: "maxWidth",
                    children: [(0, a.jsx)(A, {
                        children: t || ""
                    }), (0, a.jsx)(T, {
                        children: (0, a.jsx)("img", {
                            src: (0, s.getAssetPath)("pardyLogo.png"),
                            style: {
                                height: 45
                            }
                        })
                    })]
                })
            })
        }));
    var P = O;
    const M = m.default.div.attrs({
            className: "flex vc"
        })(y || (y = S`
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: ${0};
  padding: 20px;
  box-shadow: ${0};
  flex-shrink: 0;
  z-index: 2;
`), l.default.White, d.default.basic),
        D = m.default.div(b || (b = S`
  flex-shrink: 0;
  width: ${0}px;
`), 125),
        _ = m.default.div(w || (w = S`
  flex: 1;
  height: ${0}px;
  overflow: hidden;
`), 50),
        T = m.default.div.attrs({
            className: "flex-center"
        })(j || (j = S`
  height: ${0}px;
`), 50),
        A = m.default.div.attrs({
            className: "flex-center maxWidth"
        })(C || (C = S`
  height: ${0}px;
  font-size: 22px;
  font-weight: 400;
`), 50),
        N = m.default.div.attrs({
            className: "flex"
        })(E || (E = S`
  flex-shrink: 0;
  width: ${0}px;
  justify-content: flex-end;
`), 125)
})), r.register("iT5gE", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        musicVolume: .25,
        finaleMusicVolume: .45,
        countdownVolume: .4
    }
})), r.register("gvaaN", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fIZtR");
    var o = () => {
        const {
            currentRound: e,
            board: t,
            finaleQuestionId: n
        } = a.default.pardy;
        if ("Finale" === e.type) return {
            questionId: n
        };
        const {
            id: r,
            category: o
        } = e.value, i = t.categories.find((e => e.name === o));
        if (!i) return null;
        const s = i.items.find((e => e.id === r));
        return s ? {
            categoryItemId: s.id,
            amount: s.amount,
            categoryName: i.name,
            questionId: s.questionId
        } : null
    }
})), r.register("jC71e", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("jg5Z3"),
        o = r("fIZtR");
    var i = () => {
        o.default.pardy.currentRound = {
            type: "Finale",
            value: void 0
        }, o.default.pardy.questionScreen = a.PardyQuestionScreen.finale, o.default.pardy.questionStatus = a.PardyQuestionStatus.preview, o.default.pardy.screen = a.PardyScreen.question
    }
})), r.register("4SzF7", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var a = r("hxEiv"),
        o = r("VvPwO"),
        i = r("jg5Z3"),
        s = r("lpEVe"),
        l = r("fywoC"),
        d = r("h10FN"),
        u = r("hsXeL"),
        c = r("1lfpR");
    var f = (0, s.observer)((e => {
        const {
            pardy: t
        } = l.useContext(o.default), n = () => {
            t.questionScreen = i.PardyQuestionScreen.question
        };
        return t.questionScreen === i.PardyQuestionScreen.preview ? (0, a.jsx)(u.default, {
            setToQuestionScreen: n
        }) : t.questionScreen === i.PardyQuestionScreen.finale ? (0, a.jsx)(c.default, {
            setToQuestionScreen: n
        }) : (0, a.jsx)(d.default, {})
    }))
})), r.register("h10FN", (function(t, n) {
    e(t.exports, "default", (function() {
        return w
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("2FDaO"),
        s = r("hGYDA"),
        l = r("iypPO"),
        d = r("iXaAx"),
        u = r("6vbUb"),
        c = r("lpEVe"),
        f = r("VvPwO"),
        p = r("jg5Z3"),
        h = r("gvaaN"),
        m = r("fucqw"),
        g = r("5Z32P");
    let x, v, y = e => e;
    const b = {
        out: {
            opacity: 0,
            y: "-50%",
            x: 0
        },
        in: {
            opacity: 1,
            y: 0,
            x: 0
        },
        movingOut: {
            opacity: 0,
            y: 0,
            x: "-100%"
        }
    };
    var w = (0, c.observer)((() => {
        const {
            pardy: e
        } = o.useContext(f.default), [t, n] = o.useState(0), [r, i] = o.useState(!1), u = o.useMemo((() => !(0, h.default)().categoryItemId), []);
        o.useEffect((() => {
            e.questionScreen = p.PardyQuestionScreen.question;
            const t = (0, h.default)();
            t.categoryItemId && e.disabledSections.push(t.categoryItemId)
        }), []);
        const c = t => {
            e.questionStatus = p.PardyQuestionStatus.timesUp, t && ((0, g.playSound)(m.default.pardy.complete, {}), m.default.pardy.countdown.fade(m.default.pardy.countdown.volume(), 0, 600))
        };
        return (0, a.jsx)(j, {
            children: (0, a.jsxs)(C, {
                initial: b.out,
                animate: r ? b.movingOut : b.in,
                onAnimationComplete: () => {
                    r && (e.screen = p.PardyScreen.answer)
                },
                transition: {
                    duration: .7,
                    ease: "easeOut"
                },
                children: [(0, a.jsx)(s.default, {
                    setToAskScreen: () => e.questionStatus = p.PardyQuestionStatus.ask,
                    setToTimesUpScreen: c,
                    spaceBetweenQuestionAndEdgeOfContainer: t,
                    inFinale: u
                }), (0, a.jsx)(l.default, {
                    onSpaceBetweenChanged: e => n(e)
                }), (0, a.jsx)(d.default, {
                    animateOut: () => {
                        i(!0), setTimeout((() => {
                            (0, g.playSound)(m.default.pardy.swoosh, {})
                        }), 200)
                    },
                    spaceBetweenQuestionAndEdgeOfContainer: t,
                    setToTimesUpScreen: c
                })]
            })
        })
    }));
    const j = i.default.div.attrs({
            className: "maxWidth maxHeight"
        })(x || (x = y`
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
`)),
        C = (0, i.default)(u.motion.div).attrs({
            className: "maxWidth maxHeight flex flex-column"
        })(v || (v = y`
  overflow: hidden;
`))
})), r.register("hGYDA", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = r("hxEiv"),
        o = r("VvPwO"),
        i = r("jg5Z3"),
        s = r("Ze8VX"),
        l = r("lpEVe"),
        d = r("fywoC"),
        u = r("2FDaO"),
        c = r("eZfoL"),
        f = r("58SyU"),
        p = r("3ixRM");
    let h;
    var m = (0, l.observer)((e => {
        const {
            pardy: {
                questionStatus: t
            }
        } = d.useContext(o.default), [n, r] = d.useState(!1), l = t => {
            t && r(!0), e.setToTimesUpScreen(t)
        };
        return (0, a.jsx)(s.AnimateSharedLayout, {
            children: (0, a.jsx)(g, {
                children: t === i.PardyQuestionStatus.preview ? (0, a.jsx)(f.default, {
                    setToAskScreen: e.setToAskScreen,
                    spaceBetweenQuestionAndEdgeOfContainer: e.spaceBetweenQuestionAndEdgeOfContainer
                }) : t === i.PardyQuestionStatus.timesUp ? (0, a.jsx)(p.default, {
                    spaceBetweenQuestionAndEdgeOfContainer: e.spaceBetweenQuestionAndEdgeOfContainer,
                    everybodyAnswered: n,
                    inFinale: e.inFinale
                }) : t === i.PardyQuestionStatus.ask ? (0, a.jsx)(c.default, {
                    spaceBetweenQuestionAndEdgeOfContainer: e.spaceBetweenQuestionAndEdgeOfContainer,
                    setToTimesUpScreen: l
                }) : null
            })
        })
    }));
    const g = u.default.div.attrs({
        className: "maxWidth"
    })(h || (h = (e => e)`
  height: 25%;
`))
})), r.register("eZfoL", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("gwOp6"),
        s = r("2FDaO"),
        l = r("6vbUb"),
        d = r("lpEVe"),
        u = r("VvPwO"),
        c = r("iT5gE"),
        f = r("fucqw"),
        p = r("5Z32P");
    let h, m, g, x = e => e;
    var v = (0, d.observer)((e => {
        const {
            pardy: {
                playersAnswered: t,
                playerCount: n
            },
            gameOptions: r
        } = o.useContext(u.default), s = r.modeOptions;
        o.useEffect((() => {
            t === n && n && e.setToTimesUpScreen(!0)
        }), [t, n]), o.useEffect((() => {
            (0, p.playSound)(f.default.pardy.roundStart, {});
            const e = f.default.pardy.countdown;
            e.stop();
            const t = s.questionDuration,
                n = e.duration() - t - 6 - .6;
            e.volume(0), e.seek(n), setTimeout((() => {
                e.play(), e.fade(0, (0, p.musicIsOn)() ? c.default.countdownVolume : 0, 2700)
            }), 600)
        }), []);
        const l = o.useMemo((() => s.questionDuration), []);
        return (0, a.jsx)(y, {
            children: (0, a.jsxs)(b, {
                style: {
                    marginTop: e.spaceBetweenQuestionAndEdgeOfContainer
                },
                children: [(0, a.jsx)(i.default, {
                    seconds: l,
                    onFinish: e.setToTimesUpScreen
                }), (0, a.jsxs)(w, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .7
                    },
                    children: [t, "/", n, " answered"]
                })]
            })
        })
    }));
    const y = s.default.div.attrs({
            className: "maxWidth maxHeight flex vc hc"
        })(h || (h = x``)),
        b = s.default.div.attrs({
            className: "flex vc"
        })(m || (m = x`
  justify-content: space-between;
  width: 90%;
  opacity: 0.9;
`)),
        w = (0, s.default)(l.motion.div)(g || (g = x`
  font-size: 24px;
`))
})), r.register("gwOp6", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("hxEiv"),
        o = r("7a91g"),
        i = r("6vbUb"),
        s = r("fywoC"),
        l = r("2FDaO");
    let d;
    var u = e => {
        const [t, n] = s.useState(e.seconds);
        return (0, o.useIntervalWhen)((() => {
            t ? (n((e => e - 1)), e.onTick && e.onTick()) : e.onFinish()
        }), 1e3), (0, a.jsx)(c, {
            layoutId: "time-circle",
            transition: {
                duration: .5
            },
            style: e.style,
            children: t
        })
    };
    const c = (0, l.default)(i.motion.div).attrs({
        className: "flex hc vc"
    })(d || (d = (e => e)`
  height: 70px;
  width: 70px;
  font-size: 32px;
  border: 3px solid;
  border-radius: 50%;
  line-height: 1;
`))
})), r.register("7a91g", (function(t, n) {
    e(t.exports, "useIntervalWhen", (function() {
        return o
    }));
    var a = r("fywoC");

    function o(e, t, n, r) {
        void 0 === t && (t = 0), void 0 === n && (n = !0), void 0 === r && (r = !1);
        var o = (0, a.useRef)();

        function i() {
            o.current && o.current()
        }(0, a.useEffect)((function() {
            o.current = e
        })), (0, a.useEffect)((function() {
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
})), r.register("58SyU", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("hxEiv"),
        o = r("fucqw"),
        i = r("5Z32P");
    r("fywoC");
    var s = r("2FDaO"),
        l = r("gwOp6");
    let d;
    var u = e => (0, a.jsx)(c, {
        children: (0, a.jsx)(l.default, {
            seconds: 3,
            onFinish: e.setToAskScreen,
            style: {
                marginTop: e.spaceBetweenQuestionAndEdgeOfContainer
            },
            onTick: () => {
                (0, i.playSound)(o.default.pardy.tick, {})
            }
        })
    });
    const c = s.default.div.attrs({
        className: "flex maxWidth maxHeight hc vc"
    })(d || (d = (e => e)``))
})), r.register("3ixRM", (function(n, a) {
    e(n.exports, "default", (function() {
        return y
    }));
    var o = r("hxEiv"),
        i = r("4mnoM"),
        s = r("fywoC"),
        l = r("2FDaO"),
        d = r("2RhIb"),
        u = r("69SUA"),
        c = r("6vbUb"),
        f = r("5Z32P"),
        p = r("fucqw"),
        h = r("iT5gE");
    let m, g, x, v = e => e;
    var y = e => {
        const [n, r] = s.useState(!1);
        return s.useEffect((() => {
            r(!0), setTimeout((() => {
                if ((0, f.musicIsOn)()) {
                    const t = e.inFinale ? p.default.pardy.finaleMusic : p.default.pardy.music;
                    t.fade(t.volume(), e.inFinale ? h.default.finaleMusicVolume : h.default.musicVolume, 1e3)
                }
            }), 2500)
        }), []), (0, o.jsx)(b, {
            children: (0, o.jsxs)(w, {
                style: {
                    marginTop: e.spaceBetweenQuestionAndEdgeOfContainer
                },
                children: [(0, o.jsx)(i.ConfettiContainer, {
                    style: {
                        zIndex: 0
                    },
                    children: (0, o.jsx)(t(d), {
                        active: n,
                        config: i.confettiConfig
                    })
                }), (0, o.jsx)(j, {
                    initial: {
                        scale: 0,
                        opacity: .3
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        ease: "anticipate",
                        duration: .3
                    },
                    children: e.everybodyAnswered ? "Everybody answered!" : "Time's up!"
                })]
            })
        })
    };
    const b = l.default.div.attrs({
            className: "flex maxWidth maxHeight vc hc"
        })(m || (m = v``)),
        w = l.default.div(g || (g = v``)),
        j = (0, l.default)(c.motion.div)(x || (x = v`
  font-size: 36px;
  font-weight: ${0};
`), u.FontWeights.Bold)
})), r.register("iypPO", (function(t, n) {
    e(t.exports, "PardyQuestionContainer", (function() {
        return x
    })), e(t.exports, "PardyQuestionContent", (function() {
        return v
    })), e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv"),
        o = r("56tQE"),
        i = r("exv1w"),
        s = r("5fdt2"),
        l = r("Xyj21"),
        d = r("lpEVe"),
        u = r("fywoC"),
        c = r("2FDaO"),
        f = r("F40e1");
    let p, h, m = e => e;
    var g = (0, d.observer)((e => {
        const t = u.useRef(),
            [, n] = (0, o.default)(t),
            r = u.useRef(),
            [, d] = (0, o.default)(r),
            c = u.useMemo(f.default, []);
        if (!c) return null;
        u.useEffect((() => {
            const t = (n - d) / 2;
            e.onSpaceBetweenChanged(t)
        }), [n, d]);
        return (0, a.jsx)(x, {
            ref: t,
            children: (0, a.jsx)(v, {
                ref: r,
                children: c.text ? c.audio || c.image ? (0, a.jsx)(l.default, {
                    text: c.text,
                    image: c.image,
                    audio: c.audio,
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, a.jsx)(s.default, {
                    text: c.text || "Question",
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, a.jsx)(i.default, {
                    image: c.image,
                    audio: c.audio,
                    latex: c.latex
                })
            })
        })
    }));
    const x = c.default.div.attrs({
            className: "flex hc vc"
        })(p || (p = m`
  height: 50%;
  overflow: hidden;
`)),
        v = c.default.div.attrs({
            className: "flex hc"
        })(h || (h = m`
  font-size: 48px;
  width: 90%;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.13);
  text-align: center;
  overflow: hidden;
  height: 90%;
`))
})), r.register("F40e1", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fIZtR"),
        o = r("gvaaN");
    var i = () => {
        const e = (0, o.default)();
        if (!e) return null;
        return a.default.kit.questions.find((t => t._id === e.questionId))
    }
})), r.register("iXaAx", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("VvPwO"),
        i = r("jg5Z3"),
        s = r("lpEVe"),
        l = r("fywoC"),
        d = r("2FDaO"),
        u = r("hzhRT"),
        c = r("fo0mk");
    let f;
    var p = (0, s.observer)((e => {
        const {
            pardy: {
                questionStatus: t
            }
        } = l.useContext(o.default);
        return (0, a.jsx)(h, {
            children: t === i.PardyQuestionStatus.ask ? (0, a.jsx)(u.default, {
                spaceBetweenQuestionAndEdgeOfContainer: e.spaceBetweenQuestionAndEdgeOfContainer,
                setToTimesUpScreen: () => e.setToTimesUpScreen(!0)
            }) : t === i.PardyQuestionStatus.timesUp ? (0, a.jsx)(c.default, {
                spaceBetweenQuestionAndEdgeOfContainer: e.spaceBetweenQuestionAndEdgeOfContainer,
                animateOut: e.animateOut
            }) : null
        })
    }));
    const h = d.default.div.attrs({
        className: "maxWidth flex hc"
    })(f || (f = (e => e)`
  height: 25%;
`))
})), r.register("hzhRT", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv"),
        o = r("93yIm"),
        i = r("6vbUb");
    r("fywoC");
    var s = r("2FDaO");
    let l, d, u = e => e;
    var c = e => (0, a.jsx)(f, {
        children: (0, a.jsx)(p, {
            style: {
                marginBottom: e.spaceBetweenQuestionAndEdgeOfContainer
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: .7
            },
            children: (0, a.jsx)(o.default, {
                onClick: e.setToTimesUpScreen,
                type: "primary",
                size: "large",
                children: "End Round Early"
            })
        })
    });
    const f = s.default.div.attrs({
            className: "flex maxWidth maxHeight vc"
        })(l || (l = u`
  justify-content: flex-end;
  width: 90%;
`)),
        p = (0, s.default)(i.motion.div)(d || (d = u``))
})), r.register("fo0mk", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("6vbUb");
    r("fywoC");
    var i = r("2FDaO"),
        s = r("lU7Cx");
    let l, d, u, c = e => e;
    const f = {
        out: {
            opacity: 0,
            y: 60
        },
        in: {
            opacity: 1,
            y: 0
        }
    };
    var p = e => (0, a.jsx)(h, {
        children: (0, a.jsx)(m, {
            style: {
                marginBottom: e.spaceBetweenQuestionAndEdgeOfContainer
            },
            children: (0, a.jsx)(g, {
                initial: f.out,
                animate: f.in,
                transition: {
                    duration: .7,
                    delay: 1.3
                },
                children: (0, a.jsx)(s.default, {
                    delay: 2.5,
                    duration: 3.1,
                    onLoad: e.animateOut
                })
            })
        })
    });
    const h = i.default.div.attrs({
            className: "flex maxWidth maxHeight hc vc"
        })(l || (l = c``)),
        m = i.default.div(d || (d = c`
  width: 90%;
`)),
        g = (0, i.default)(o.motion.div).attrs({
            className: "maxWidth"
        })(u || (u = c``))
})), r.register("lU7Cx", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("6vbUb"),
        i = r("2FDaO");
    let s;
    var l = e => (0, a.jsx)(d, {
        style: {
            height: e.height || 15
        },
        children: (0, a.jsx)(o.motion.div, {
            initial: {
                width: 0
            },
            animate: {
                width: "100%"
            },
            transition: {
                delay: e.delay,
                duration: e.duration,
                ease: "easeInOut"
            },
            onAnimationComplete: e.onLoad,
            style: {
                background: "rgba(255, 255, 255, 0.7)",
                height: "100%"
            }
        })
    });
    const d = i.default.div.attrs({
        className: "maxWidth"
    })(s || (s = (e => e)`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 100px;
  overflow: hidden;
`))
})), r.register("hsXeL", (function(t, n) {
    e(t.exports, "default", (function() {
        return k
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("6vbUb"),
        s = r("2FDaO"),
        l = r("lKmIF"),
        d = r("5Z32P"),
        u = r("lU7Cx"),
        c = r("lpEVe"),
        f = r("gvaaN"),
        p = r("VvPwO"),
        h = r("jg5Z3"),
        m = r("fucqw");
    let g, x, v, y, b, w, j, C, E = e => e;
    const S = {
            out: {
                opacity: 0,
                y: 30
            },
            in: {
                opacity: 1,
                y: -30
            }
        },
        O = {
            in: {
                opacity: 1,
                y: 0
            },
            out: {
                opacity: 0,
                y: "100%"
            }
        };
    var k = (0, c.observer)((e => {
        const {
            pardy: t
        } = o.useContext(p.default), [n, r] = o.useState(!1), [i, s] = o.useState(!1), l = o.useMemo(f.default, []);
        o.useEffect((() => {
            t.questionScreen = h.PardyQuestionScreen.preview
        }), []);
        return l && l.categoryItemId && l.categoryName ? (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(P, {
                children: (0, a.jsx)(M, {
                    layoutId: `item-${l.categoryItemId}`,
                    transition: {
                        duration: .9
                    },
                    children: (0, a.jsxs)(D, {
                        initial: O.in,
                        animate: i ? O.out : O.in,
                        transition: {
                            delay: .3,
                            duration: .7
                        },
                        onAnimationComplete: () => {
                            i && e.setToQuestionScreen()
                        },
                        children: [(0, a.jsx)(T, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: .5
                            },
                            children: l.categoryName
                        }), (0, a.jsx)(A, {
                            layoutId: `item-${l.categoryItemId}-amount`,
                            transition: {
                                duration: .9
                            },
                            children: (0, d.getMoney)(l.amount)
                        })]
                    })
                })
            }), (0, a.jsx)(N, {
                children: (0, a.jsx)(I, {
                    initial: S.out,
                    animate: n ? S.out : S.in,
                    transition: {
                        delay: n ? 0 : .5,
                        duration: .5
                    },
                    children: (0, a.jsx)(u.default, {
                        delay: 1.2,
                        duration: 1.4,
                        onLoad: () => {
                            r(!0), s(!0), setTimeout((() => {
                                (0, d.playSound)(m.default.pardy.swoosh, {})
                            }), 200)
                        }
                    })
                })
            })]
        }) : null
    }));
    const P = s.default.div.attrs({
            className: "flex hc vc maxWidth maxHeight"
        })(g || (g = E``)),
        M = (0, s.default)(i.motion.div).attrs({
            className: "maxWidth maxHeight"
        })(x || (x = E`
  background: rgba(0, 0, 0, 0.2);
`)),
        D = (0, s.default)(i.motion.div).attrs({
            className: "flex flex-column hc vc maxWidth maxHeight"
        })(v || (v = E``)),
        _ = (0, s.default)(i.motion.div)(y || (y = E`
  text-shadow: 0px 5px 5px ${0};
`), l.default.Black),
        T = (0, s.default)(_)(b || (b = E`
  font-size: 42px;
`)),
        A = (0, s.default)(_)(w || (w = E`
  font-size: 142px;
`)),
        N = s.default.div.attrs({
            className: "maxWidth flex hc"
        })(j || (j = E`
  position: absolute;
  bottom: 0;
  left: 0;
`)),
        I = (0, s.default)(i.motion.div)(C || (C = E`
  width: 80%;
`))
})), r.register("1lfpR", (function(t, n) {
    e(t.exports, "ANIMATING_OUT_DURATION", (function() {
        return S
    })), e(t.exports, "default", (function() {
        return O
    }));
    var a = r("hxEiv"),
        o = r("69SUA"),
        i = r("fucqw"),
        s = r("5Z32P"),
        l = r("VvPwO"),
        d = r("jg5Z3"),
        u = r("6vbUb"),
        c = r("lpEVe"),
        f = r("fywoC"),
        p = r("2FDaO"),
        h = r("iT5gE"),
        m = r("d6cW3"),
        g = r("fi2fM");
    s = r("5Z32P");
    let x, v, y, b, w, j = e => e;
    const C = {
            out: {
                opacity: 0,
                background: "rgba(0,0,0,0)"
            },
            in: {
                opacity: 1,
                background: "rgba(15,12,41, 1)"
            },
            movingOut: {
                opacity: 1,
                background: "rgba(0,0,0,0.2)"
            }
        },
        E = {
            out: {
                opacity: 0,
                y: -70,
                scale: .9
            },
            in: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            movingOut: {
                y: "100%",
                scale: 1,
                opacity: 0
            }
        },
        S = .7;
    var O = (0, c.observer)((e => {
        const {
            pardy: t
        } = f.useContext(l.default), [n, r] = f.useState(!1);
        f.useEffect((() => {
            t.questionScreen = d.PardyQuestionScreen.finale
        }), []), f.useEffect((() => (i.default.pardy.music.fade(i.default.pardy.music.volume(), 0, 1e3), setTimeout((() => {
            (0, s.playSound)(i.default.pardy.finaleMusic, {
                volume: (0, s.musicIsOn)() ? h.default.finaleMusicVolume : 0,
                fadeInDuration: 3e3
            })
        }), 600), () => {
            i.default.pardy.finaleMusic.fade(i.default.pardy.finaleMusic.volume(), 0, 1500)
        })), []);
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(k, {
                initial: C.out,
                animate: n ? C.movingOut : C.in,
                transition: {
                    duration: n ? S : .5
                },
                onAnimationComplete: () => {
                    n && e.setToQuestionScreen()
                },
                children: (0, a.jsxs)(P, {
                    initial: E.out,
                    animate: n ? E.movingOut : E.in,
                    transition: {
                        duration: n ? S : 1.4,
                        delay: n ? 0 : 3,
                        ease: "easeOut"
                    },
                    children: [(0, a.jsx)(M, {
                        children: "The Finale"
                    }), (0, a.jsxs)(D, {
                        children: [(0, a.jsx)(_, {
                            children: "You will be asked one more question"
                        }), (0, a.jsx)(_, {
                            children: "Make your bet on whether or not you'll answer correctly"
                        }), (0, a.jsx)(_, {
                            children: "Bet as much or as little as you want; the maximum is your current cash amount"
                        }), (0, a.jsx)(_, {
                            children: "Powers are disabled for The Finale"
                        })]
                    }), (0, a.jsx)(m.default, {
                        exit: () => {
                            r(!0), setTimeout((() => {
                                (0, s.playSound)(i.default.pardy.swoosh, {})
                            }), 200)
                        }
                    })]
                })
            }), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(g.default, {
                    animatingOut: n
                }), (0, a.jsx)(g.default, {
                    animatingOut: n
                }), (0, a.jsx)(g.default, {
                    animatingOut: n
                }), (0, a.jsx)(g.default, {
                    animatingOut: n
                })]
            })]
        })
    }));
    const k = (0, p.default)(u.motion.div).attrs({
            className: "maxWidth maxHeight scroll-y"
        })(x || (x = j``)),
        P = (0, p.default)(u.motion.div).attrs({
            className: "maxWidth flex hc vc flex-column"
        })(v || (v = j`
  min-height: 100%;
  padding: 20px;
  z-index: 3;
`)),
        M = p.default.div(y || (y = j`
  text-transform: uppercase;
  font-size: 94px;
  font-weight: ${0};
  text-decoration: underline;
  margin-bottom: 20px;
`), o.FontWeights.UltraBold),
        D = p.default.ul(b || (b = j`
  font-size: 26px;
  font-weight: ${0};
`), o.FontWeights.Normal),
        _ = p.default.li(w || (w = j``))
})), r.register("d6cW3", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var a = r("hxEiv"),
        o = r("93yIm"),
        i = r("69SUA"),
        s = r("VvPwO"),
        l = r("lpEVe"),
        d = r("fywoC"),
        u = r("2FDaO");
    let c, f, p = e => e;
    var h = (0, l.observer)((e => {
        const {
            pardy: t
        } = d.useContext(s.default);
        return (0, a.jsxs)(m, {
            children: [(0, a.jsxs)(g, {
                children: [t.betsPlaced, "/", t.playerCount, " bets placed"]
            }), (0, a.jsx)(o.default, {
                onClick: e.exit,
                size: "large",
                type: "primary",
                style: {
                    height: 50,
                    width: 220
                },
                children: "Begin The Finale"
            })]
        })
    }));
    const m = u.default.div.attrs({
            className: "maxWidth flex vcc"
        })(c || (c = p`
  max-width: 900px;
  justify-content: space-between;
  margin-top: 40px;
`)),
        g = u.default.div(f || (f = p`
  font-size: 24px;
  font-weight: ${0};
`), i.FontWeights.Bold)
})), r.register("fi2fM", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv"),
        o = r("7a91g"),
        i = r("aFq3x"),
        s = r("6vbUb"),
        l = r("2FIWZ"),
        d = r("cmvpZ"),
        u = r("fywoC"),
        c = r("2FDaO"),
        f = r("1lfpR");
    let p, h, m = e => e;
    var g = e => {
        const {
            x: t,
            y: n
        } = y((0, d.random)(4e3, 9e3));
        return (0, a.jsx)(x, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: e.animatingOut ? 0 : 1
            },
            transition: {
                duration: e.animatingOut ? f.ANIMATING_OUT_DURATION : 1.4
            },
            children: (0, a.jsx)(v, {
                style: {
                    x: t,
                    y: n
                }
            })
        })
    };
    const x = (0, c.default)(s.motion.div).attrs({
            className: "maxWidth maxHeight"
        })(p || (p = m`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`)),
        v = (0, c.default)(s.motion.div)(h || (h = m`
  height: 220px;
  width: 220px;
  border-radius: 50%;
  filter: blur(4px);
  background: #fff59d;
  opacity: 0.2;
`)),
        y = (e = 5e3) => {
            const t = (0, l.useMotionValue)(0),
                n = (0, l.useMotionValue)(0),
                r = window.innerWidth,
                a = window.innerHeight,
                s = o => {
                    const s = (0, d.random)(0, r),
                        l = (0, d.random)(0, a);
                    o ? (t.set(s), n.set(l)) : ((0, i.animate)(t, s, {
                        duration: e / 1e3,
                        ease: "easeInOut"
                    }), (0, i.animate)(n, l, {
                        duration: e / 1e3,
                        ease: "easeInOut"
                    }))
                };
            return u.useEffect((() => {
                s(!0), s()
            }), []), (0, o.useIntervalWhen)(s, e), {
                x: t,
                y: n
            }
        }
})), r.register("2FIWZ", (function(t, n) {
    e(t.exports, "useMotionValue", (function() {
        return l
    }));
    var a = r("fywoC"),
        o = r("ajNLe"),
        i = r("lLAX0"),
        s = r("8ATQJ");

    function l(e) {
        const t = (0, s.useConstant)((() => (0, o.motionValue)(e))),
            {
                isStatic: n
            } = (0, a.useContext)(i.MotionConfigContext);
        if (n) {
            const [, n] = (0, a.useState)(e);
            (0, a.useEffect)((() => t.on("change", n)), [])
        }
        return t
    }
})), r.register("8hWp6", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = r("hxEiv"),
        o = r("fucqw"),
        i = r("5Z32P"),
        s = r("6vbUb"),
        l = r("fywoC"),
        d = r("2FDaO"),
        u = r("75Fcb"),
        c = r("i4pOb"),
        f = r("eoHwC");
    let p, h, m = e => e;
    const g = {
        initial: {
            x: "100%",
            opacity: 0,
            y: 0,
            scale: 1
        },
        in: {
            x: 0,
            opacity: 1,
            y: 0,
            scale: 1
        },
        out: {
            y: "-80%",
            x: 0,
            opacity: 1,
            scale: .8
        }
    };
    var x = e => {
        const [t, n] = l.useState(!1), [r, s] = l.useState(0), d = {
            out: {
                background: p = "#388e3c",
                opacity: 0
            },
            in: {
                background: p,
                opacity: 1
            }
        };
        var p;
        return (0, a.jsx)(v, {
            initial: {
                background: "rgba(0, 0, 0, 0.2)",
                opacity: 1
            },
            animate: t ? d.out : d.in,
            transition: {
                delay: t ? 0 : .2,
                duration: .7,
                ease: "easeOut"
            },
            onAnimationComplete: () => {
                t && e.setToHomeScreen()
            },
            children: (0, a.jsxs)(y, {
                initial: g.initial,
                animate: t ? g.out : g.in,
                transition: {
                    duration: .7,
                    ease: "easeOut"
                },
                children: [(0, a.jsx)(f.default, {
                    spaceBetweenContentAndEdgeOfContainer: r
                }), (0, a.jsx)(u.default, {
                    onSpaceBetweenChanged: s
                }), (0, a.jsx)(c.default, {
                    spaceBetweenContentAndEdgeOfContainer: r,
                    exit: () => {
                        n(!0), setTimeout((() => {
                            (0, i.playSound)(o.default.pardy.swoosh, {})
                        }), 200)
                    }
                })]
            })
        })
    };
    const v = (0, d.default)(s.motion.div).attrs({
            className: "maxWidth maxHeight"
        })(p || (p = m`
  overflow: hidden;
`)),
        y = (0, d.default)(s.motion.div).attrs({
            className: "maxWidth maxHeight"
        })(h || (h = m``))
})), r.register("75Fcb", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv"),
        o = r("56tQE"),
        i = r("5fdt2"),
        s = r("exv1w"),
        l = r("fywoC"),
        d = r("iypPO"),
        u = r("F40e1");
    var c = e => {
        const t = l.useRef(),
            [, n] = (0, o.default)(t),
            r = l.useRef(),
            [, c] = (0, o.default)(r);
        l.useEffect((() => {
            const t = (n - c) / 2;
            e.onSpaceBetweenChanged(t)
        }), [n, c]);
        const f = l.useMemo(u.default, []);
        if (!f) return null;
        const p = f.answers.find((e => e.correct));
        return (0, a.jsx)(d.PardyQuestionContainer, {
            ref: t,
            children: (0, a.jsx)(d.PardyQuestionContent, {
                ref: r,
                children: p ? p.text ? (0, a.jsx)(i.default, {
                    text: p.text,
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, a.jsx)(s.default, {
                    image: p.image,
                    latex: p.latex
                }) : (0, a.jsx)(i.default, {
                    text: "No Correct Answer!",
                    noBold: !0
                })
            })
        })
    }
})), r.register("i4pOb", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var a = r("hxEiv"),
        o = r("93yIm"),
        i = r("5Z32P"),
        s = r("VvPwO"),
        l = r("lpEVe"),
        d = r("fywoC"),
        u = r("2FDaO"),
        c = r("jC71e");
    let f, p, h, m, g, x = e => e;
    var v = (0, l.observer)((e => {
        const {
            pardy: {
                playerCount: t,
                playersAnsweredCorrectly: n,
                nameOfFirstPlayerToAnswerCorrectly: r,
                board: l,
                disabledSections: u,
                currentRound: f
            }
        } = d.useContext(s.default), p = d.useMemo((() => {
            if ("Finale" === f.type) return {
                text: "View Final Results",
                handler: () => {
                    (0, i.endGame)()
                }
            };
            let t = 0;
            return l.categories.forEach((e => {
                e.items.forEach((() => t += 1))
            })), u.length >= t ? {
                text: "Continue to The Finale",
                handler: () => {
                    (0, c.default)()
                }
            } : {
                text: "Continue",
                handler: () => {
                    e.exit()
                }
            }
        }), []);
        return (0, a.jsx)(y, {
            children: (0, a.jsxs)(b, {
                style: {
                    marginBottom: e.spaceBetweenContentAndEdgeOfContainer
                },
                children: [(0, a.jsxs)("div", {
                    children: [(0, a.jsxs)(w, {
                        children: [n, "/", t, " answered correctly"]
                    }), r ? (0, a.jsxs)(j, {
                        children: [r, " was the first to answer correctly!"]
                    }) : null]
                }), (0, a.jsx)(C, {
                    children: (0, a.jsx)(o.default, {
                        type: "primary",
                        size: "large",
                        style: {
                            width: 170
                        },
                        onClick: p.handler,
                        children: p.text
                    })
                })]
            })
        })
    }));
    const y = u.default.div.attrs({
            className: "maxWidth flex vc hc"
        })(f || (f = x`
  height: 25%;
`)),
        b = u.default.div.attrs({
            className: "flex"
        })(p || (p = x`
  width: 90%;
  justify-content: space-between;
  align-items: flex-end;
`)),
        w = u.default.div(h || (h = x`
  font-weight: 400;
  font-size: 22px;
`)),
        j = u.default.div(m || (m = x`
  font-weight: 300;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
`)),
        C = u.default.div(g || (g = x``))
})), r.register("eoHwC", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("2FDaO");
    let i, s, l, d = e => e;
    var u = e => (0, a.jsx)(c, {
        children: (0, a.jsx)(f, {
            style: {
                marginTop: e.spaceBetweenContentAndEdgeOfContainer
            },
            children: (0, a.jsx)(p, {
                children: "Answer:"
            })
        })
    });
    const c = o.default.div.attrs({
            className: "maxWidth flex vc hc"
        })(i || (i = d`
  height: 25%;
`)),
        f = o.default.div(s || (s = d``)),
        p = o.default.div(l || (l = d`
  font-size: 32px;
`))
})), r.register("2RzCw", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("2FDaO");
    let i, s, l = e => e;
    var d = e => (0, a.jsxs)(u, {
        children: [(0, a.jsx)("div", {
            className: "area",
            children: (0, a.jsxs)("ul", {
                className: "circles",
                children: [(0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {}), (0, a.jsx)("li", {})]
            })
        }), (0, a.jsx)(c, {
            children: e.children
        })]
    });
    const u = o.default.div(i || (i = l`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .area {
    background: #060ce9;
    background: linear-gradient(to left, #4527a0, #1565c0);
    width: 100%;
    height: 100%;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`)),
        c = o.default.div.attrs({
            className: "maxAll"
        })(s || (s = l`
  position: absolute;
  top: 0;
  left: 0;
`))
})), r.register("Y0vmn", (function(t, n) {
    e(t.exports, "default", (function() {
        return S
    }));
    var a = r("hxEiv"),
        o = r("bbvHy"),
        i = r("fywoC"),
        s = r("2FDaO"),
        l = r("1kWdb"),
        d = r("hmysc"),
        u = r("ewEPl"),
        c = r("4xKdQ"),
        f = r("lpEVe"),
        p = r("37RFW"),
        h = r("5Z32P"),
        m = r("fucqw"),
        g = r("fKxAL"),
        x = r("b6p6O"),
        v = r("VvPwO"),
        y = r("iT5gE");
    let b, w, j = e => e;
    const C = s.default.div(b || (b = j`
  height: 100vh;
  width: 100%;
  font-family: ${0};
  display: flex;
  animation-duration: 0.5s;
`), o.default.fontFamilyName),
        E = s.default.div.attrs({
            className: "animated fadeIn"
        })(w || (w = j`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`));
    var S = (0, f.observer)((() => {
        const {
            ui: e
        } = i.useContext(v.default);
        i.useEffect((() => {
            if ((0, h.musicIsOn)() && (0, h.inDrawMode)() && (0, h.playSound)(m.default.draw.background, {
                    volume: g.DRAW_MODE_BACKGROUND_MUSIC_VOLUME
                }), (0, h.inPardyMode)()) {
                const e = m.default.pardy.music;
                (0, h.playSound)(e, {
                    volume: (0, h.musicIsOn)() ? y.default.musicVolume : 0
                })
            }(0, h.inLavaMode)() && (e.backgroundColor = "#ac1900"), (0, h.inImposterMode)() && (e.backgroundColor = "#000a12"), (0, h.inDrawMode)() && (e.backgroundColor = "#f1f2f3")
        }), []);
        const t = i.useMemo((() => (0, h.inPardyMode)() ? x.default : i.Fragment), []);
        return e.showingLavaPreScreen ? (0, a.jsx)(p.default, {}) : (0, a.jsx)(t, {
            children: (0, a.jsxs)(C, {
                children: [(0, a.jsxs)(E, {
                    children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(c.default, {}), (0, a.jsx)(u.default, {})]
                }), (0, a.jsx)(l.default, {})]
            })
        })
    }))
})), r.register("1kWdb", (function(t, n) {
    e(t.exports, "default", (function() {
        return O
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("7ECC6"),
        l = r("fBuQJ"),
        d = r("5Z32P"),
        u = r("bbvHy"),
        c = r("lpEVe"),
        f = r("fywoC"),
        p = r("2FDaO"),
        h = r("j2XHK");
    let m, g, x, v, y = e => e;
    const b = (e, t) => {
            const n = e.name.toUpperCase(),
                r = t.name.toUpperCase();
            return n < r ? -1 : n > r ? 1 : 0
        },
        w = p.default.div(m || (m = y`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3px;
`)),
        j = p.default.img.attrs({
            src: `${(0,d.getAssetPath)("power-fight.svg")}`
        })(g || (g = y`
  height: 136px;
  margin-bottom: 12px;
  margin-top: 8px;
`)),
        C = p.default.h2(x || (x = y`
  font-size: 44px;
  font-family: 'Product Sans';
  font-weight: bold;
  margin-bottom: 3px;
`)),
        E = p.default.div(v || (v = y`
  display: flex;
  flex-wrap: wrap;
`));
    let S = class extends f.Component {
        render() {
            if (!this.props.gameValues.showBossBattleModal) return null;
            const e = this.props.players.filteredPlayers.reverse();
            return (0, i.jsxs)(l.default, {
                open: this.props.gameValues.showBossBattleModal,
                footer: null,
                maskClosable: !1,
                closable: !1,
                keyboard: !1,
                children: [(0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        className: "animated pulse infinite"
                    }), (0, i.jsx)(C, {
                        children: "Choose The Boss"
                    })]
                }), (0, i.jsx)("div", {
                    children: (0, i.jsx)(E, {
                        children: e.sort(b).map((e => (0, i.jsx)(s.default, {
                            "data-id": e.id,
                            style: {
                                display: "flex",
                                fontFamily: u.default.fontFamilyName,
                                margin: "4px",
                                fontSize: "17px",
                                color: "black"
                            },
                            bodyStyle: {
                                padding: "10px 24px"
                            },
                            hoverable: !0,
                            onClick: this.handleClick,
                            children: (0, i.jsx)("span", {
                                children: e.name
                            })
                        }, e.id)))
                    })
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "handleClick", (e => {
                this.props.gameValues.bossId = e.currentTarget.dataset.id, this.props.gameValues.currentRoute = h.GameStatus.teams
            }))
        }
    };
    S = (0, o.__decorate)([(0, c.inject)("engine", "players", "gameValues"), c.observer], S);
    var O = S
})), r.register("hmysc", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("lpEVe"),
        l = r("fywoC"),
        d = r("5Z32P"),
        u = r("d1LT2"),
        c = r("1XXdV"),
        f = r("4gMdJ"),
        p = r("l4uFh");
    let h = class extends l.Component {
        render() {
            return (0, i.jsx)(f.default, {
                theme: {
                    algorithm: p.default.darkAlgorithm,
                    token: {
                        colorBgBase: "#301C56"
                    }
                },
                children: (0, i.jsx)(c.default, {
                    gameCode: this.props.gameValues.gameCode,
                    background: this.getContainerBackground(),
                    color: this.getContainerColor(),
                    height: 220
                })
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "getContainerBackground", (() => (0, d.inDrawMode)() ? "rgba(0,0,0,0.1)" : "rgba(0, 0, 0, 0.4)")), (0, a.default)(this, "getContainerColor", (() => (0, d.inDrawMode)() ? u.default.Black : u.default.White))
        }
    };
    h = (0, o.__decorate)([(0, s.inject)("gameValues"), s.observer], h);
    var m = h
})), r.register("1XXdV", (function(n, a) {
    e(n.exports, "default", (function() {
        return w
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("dmyzc"),
        s = r("2FDaO"),
        l = r("iMOcM"),
        d = r("dhxiD"),
        u = r("cy4A6"),
        c = r("la5Qa"),
        f = r("cQy2p"),
        p = r("gHmyG"),
        h = r("aQuqp"),
        m = r("69SUA"),
        g = r("8UJqa");
    let x, v, y, b = e => e;
    var w = e => {
        const {
            gameCode: n
        } = e, r = () => `${(0,l.getDomain)()}/join?gc=${n}`, a = () => {
            t(d)(r()), u.default.success("Game link copied")
        };
        var i, s, x;
        return (0, o.jsxs)(j, {
            style: {
                background: null !== (i = e.background) && void 0 !== i ? i : "rgba(48, 28, 86, 0.9)",
                color: null !== (s = e.color) && void 0 !== s ? s : g.default.White,
                height: null !== (x = e.height) && void 0 !== x ? x : "auto"
            },
            children: [(0, o.jsxs)(C, {
                children: ["Go to ", (0, o.jsx)("b", {
                    children: window && window.location ? window.location.hostname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0] + "/join" : ""
                }), " and enter code"]
            }), e.gameCode ? (0, o.jsx)(c.default, {
                overlayInnerStyle: {
                    padding: 20
                },
                content: (0, o.jsxs)("div", {
                    children: [(0, o.jsx)(f.default, {
                        value: r(),
                        size: 350,
                        bordered: !1
                    }), (0, o.jsx)(h.default, {
                        block: !0,
                        onClick: a,
                        customFontWeight: m.FontWeights.Bold,
                        type: "success",
                        style: {
                            marginTop: 11
                        },
                        ariaLabel: "Copy Join Link",
                        children: "Copy Join Link"
                    })]
                }),
                children: (0, o.jsx)(E, {
                    onClick: a,
                    children: n
                })
            }) : (0, o.jsx)("div", {
                className: "flex-center",
                style: {
                    height: 106,
                    marginTop: 13
                },
                children: (0, o.jsx)(p.default, {
                    size: "large"
                })
            })]
        })
    };
    const j = (0, s.default)(i.default).attrs({
            className: "medium-shadow flex-column flex-center maxWidth"
        })(x || (x = b`
  line-height: 1;
  padding: 25px 40px;
`)),
        C = s.default.div(v || (v = b`
  font-size: 32px;
`)),
        E = s.default.div(y || (y = b`
  font-size: 106px;
  margin-top: 13px;
  font-weight: ${0};
  cursor: pointer;
`), m.FontWeights.UltraBold)
})), r.register("dmyzc", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = e => {
        const t = t => {
            t.stopPropagation(), e.onClick && e.onClick(t)
        };
        return (0, a.jsx)("div", {
            style: {
                ...e.style || {},
                pointerEvents: e.disable ? "none" : "all"
            },
            className: e.className,
            onMouseDown: t,
            onTouchStart: t,
            children: e.children
        })
    }
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        a = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, o, i, s, l, d, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), s = document.createRange(), l = document.getSelection(), (d = document.createElement("span")).textContent = e, d.ariaHidden = "true", d.style.all = "unset", d.style.position = "fixed", d.style.top = 0, d.style.clip = "rect(0, 0, 0, 0)", d.style.whiteSpace = "pre", d.style.webkitUserSelect = "text", d.style.MozUserSelect = "text", d.style.msUserSelect = "text", d.style.userSelect = "text", d.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var o = a[t.format] || a.default;
                            window.clipboardData.setData(o, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(d), s.selectNodeContents(d), l.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), o = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(o, e)
            }
        } finally {
            l && ("function" == typeof l.removeRange ? l.removeRange(s) : l.removeAllRanges()), d && document.body.removeChild(d), i()
        }
        return u
    }
})), r.register("1fK2g", (function(e, t) {
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
})), r.register("la5Qa", (function(n, a) {
    e(n.exports, "default", (function() {
        return g
    }), (function(e) {
        return g = e
    }));
    var o = r("fe1on"),
        i = r("fywoC"),
        s = r("4gMdJ"),
        l = r("e4KJZ"),
        d = r("1wAd6"),
        u = r("8pkwz"),
        c = r("72v7R"),
        f = r("bwoVE"),
        p = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
            }
            return n
        };
    const h = e => {
            let {
                title: t,
                content: n,
                prefixCls: r
            } = e;
            return t || n ? i.createElement(i.Fragment, null, t && i.createElement("div", {
                className: `${r}-title`
            }, (0, d.getRenderPropValue)(t)), i.createElement("div", {
                className: `${r}-inner-content`
            }, (0, d.getRenderPropValue)(n))) : null
        },
        m = i.forwardRef(((e, n) => {
            var r, a;
            const {
                prefixCls: d,
                title: c,
                content: m,
                overlayClassName: g,
                placement: x = "top",
                trigger: v = "hover",
                mouseEnterDelay: y = .1,
                mouseLeaveDelay: b = .1,
                overlayStyle: w = {},
                arrowPointAtCenter: j,
                arrow: C
            } = e, E = p(e, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "arrowPointAtCenter", "arrow"]), {
                getPrefixCls: S
            } = i.useContext(s.ConfigContext), O = S("popover", d), [k, P] = (0, f.default)(O), M = S(), D = t(o)(g, P), _ = null !== (a = null !== (r = "boolean" != typeof C && (null == C ? void 0 : C.arrowPointAtCenter)) && void 0 !== r ? r : j) && void 0 !== a && a, T = null != C ? C : {
                arrowPointAtCenter: _
            };
            return k(i.createElement(l.default, Object.assign({
                placement: x,
                arrow: T,
                trigger: v,
                mouseEnterDelay: y,
                mouseLeaveDelay: b,
                overlayStyle: w
            }, E, {
                prefixCls: O,
                overlayClassName: D,
                ref: n,
                overlay: i.createElement(h, {
                    prefixCls: O,
                    title: c,
                    content: m
                }),
                transitionName: (0, u.getTransitionName)(M, "zoom-big", E.transitionName),
                "data-popover-inject": !0
            })))
        }));
    m._InternalPanelDoNotUseOrYouWillBeFired = c.default;
    var g = m
})), r.register("1wAd6", (function(t, n) {
    e(t.exports, "getRenderPropValue", (function() {
        return r
    }));
    const r = e => e ? "function" == typeof e ? e() : e : null
})), r.register("72v7R", (function(n, a) {
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
    var o = r("fywoC"),
        i = r("fe1on"),
        s = r("jUIBx"),
        l = r("4gMdJ"),
        d = r("bwoVE"),
        u = r("1wAd6"),
        c = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
            }
            return n
        };
    const f = (e, t, n) => {
        if (t || n) return o.createElement(o.Fragment, null, t && o.createElement("div", {
            className: `${e}-title`
        }, (0, u.getRenderPropValue)(t)), o.createElement("div", {
            className: `${e}-inner-content`
        }, (0, u.getRenderPropValue)(n)))
    };

    function p(e) {
        const {
            hashId: n,
            prefixCls: r,
            className: a,
            style: l,
            placement: d = "top",
            title: u,
            content: c,
            children: p
        } = e;
        return o.createElement("div", {
            className: t(i)(n, r, `${r}-pure`, `${r}-placement-${d}`, a),
            style: l
        }, o.createElement(s.Popup, Object.assign({}, e, {
            className: n,
            prefixCls: r
        }), p || f(r, u, c)))
    }

    function h(e) {
        const {
            prefixCls: t
        } = e, n = c(e, ["prefixCls"]), {
            getPrefixCls: r
        } = o.useContext(l.ConfigContext), a = r("popover", t), [i, s] = (0, d.default)(a);
        return i(o.createElement(p, Object.assign({}, n, {
            prefixCls: a,
            hashId: s
        })))
    }
})), r.register("bwoVE", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("fvpzM"),
        o = r("huF4L"),
        i = r("1QMe3"),
        s = r("c66eu"),
        l = r("kCC5O"),
        d = r("1r9lV");
    const u = e => {
            const {
                componentCls: t,
                popoverBg: n,
                popoverColor: r,
                width: a,
                fontWeightStrong: o,
                popoverPadding: i,
                boxShadowSecondary: s,
                colorTextHeading: u,
                borderRadiusLG: c,
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
                        backgroundColor: n,
                        backgroundClip: "padding-box",
                        borderRadius: c,
                        boxShadow: s,
                        padding: i
                    },
                    [`${t}-title`]: {
                        minWidth: a,
                        marginBottom: p,
                        color: u,
                        fontWeight: o
                    },
                    [`${t}-inner-content`]: {
                        color: r
                    }
                })
            }, (0, d.default)(e, {
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
        c = e => {
            const {
                componentCls: t
            } = e;
            return {
                [t]: s.PresetColors.map((n => {
                    const r = e[`${n}-6`];
                    return {
                        [`&${t}-${n}`]: {
                            "--antd-arrow-background-color": r,
                            [`${t}-inner`]: {
                                backgroundColor: r
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
                lineWidth: n,
                lineType: r,
                colorSplit: a,
                paddingSM: o,
                controlHeight: i,
                fontSize: s,
                lineHeight: l,
                padding: d
            } = e, u = i - Math.round(s * l);
            return {
                [t]: {
                    [`${t}-inner`]: {
                        padding: 0
                    },
                    [`${t}-title`]: {
                        margin: 0,
                        padding: `${u/2}px ${d}px ${u/2-n}px`,
                        borderBottom: `${n}px ${r} ${a}`
                    },
                    [`${t}-inner-content`]: {
                        padding: `${o}px ${d}px`
                    }
                }
            }
        };
    var p = (0, o.default)("Popover", (e => {
        const {
            colorBgElevated: t,
            colorText: n,
            wireframe: r
        } = e, o = (0, i.merge)(e, {
            popoverBg: t,
            popoverColor: n,
            popoverPadding: 12
        });
        return [u(o), c(o), r && f(o), (0, a.initZoomMotion)(o, "zoom-big")]
    }), (e => {
        let {
            zIndexPopupBase: t
        } = e;
        return {
            zIndexPopup: t + 30,
            width: 177
        }
    }))
})), r.register("aQuqp", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv"),
        o = r("6edaj"),
        i = r("fywoC"),
        s = r("2FDaO"),
        l = r("69SUA"),
        d = r("8UJqa");
    let u;
    var c = e => {
        const t = e.size || "default",
            n = i.useMemo((() => e.customColor ? e.customColor : e.disabled ? "#546e7a" : "success" === e.type ? "#2e7d32" : "danger" === e.type ? "#c62828" : "#3f51b5"), [e.disabled, e.type, e.customColor]),
            r = i.useMemo((() => (0, o.darken)(.1, n)), [n]),
            s = i.useMemo((() => "small" === t || "default" === t ? 14 : 20), [t]),
            d = i.useMemo((() => "small" === t ? 6 : "default" === t ? 8 : 12), [t]),
            u = i.useMemo((() => {
                const n = "small" === t ? "8px" : "12px";
                return e.customHorizontalPadding ? `${n} ${e.customHorizontalPadding}px` : "small" === t ? `${n} 24px` : "default" === t ? `${n} 28px` : `${n} 42px`
            }), [t, e.customHorizontalPadding]),
            c = i.useMemo((() => "small" === t ? 41 : 49), [t]),
            p = i.useMemo((() => e.customFontWeight ? e.customFontWeight : "large" === t ? l.FontWeights.Bold : l.FontWeights.Normal), [e.customFontWeight, t]),
            h = () => {
                e.disabled || e.onClick && e.onClick()
            };
        return (0, a.jsx)(f, {
            style: Object.assign({
                pointerEvents: "all",
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: c
            }, e.style || {}),
            children: (0, a.jsxs)("button", {
                className: "btn-pushable",
                "aria-label": e.ariaLabel,
                onClick: e.usePointerDownEvent ? void 0 : h,
                onPointerDown: e.usePointerDownEvent ? h : void 0,
                style: {
                    cursor: e.disabled ? "not-allowed" : "pointer",
                    width: e.block ? "100%" : "auto"
                },
                children: [(0, a.jsx)("span", {
                    className: "btn-shadow",
                    style: {
                        borderRadius: d
                    }
                }), (0, a.jsx)("span", {
                    className: "btn-edge",
                    style: {
                        background: r,
                        borderRadius: d
                    }
                }), (0, a.jsx)("span", {
                    className: "btn-front",
                    style: {
                        background: n,
                        fontSize: s,
                        borderRadius: d,
                        padding: u,
                        fontWeight: p
                    },
                    children: e.children
                })]
            })
        })
    };
    const f = s.default.div.attrs({
        className: "flex"
    })(u || (u = (e => e)`
  align-items: flex-end;

  .btn-pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    outline: none;
    transition: filter 250ms;
  }
  .btn-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }
  .btn-edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background 0.25s;
  }
  .btn-front {
    display: block;
    position: relative;
    color: ${0};
    will-change: transform;
    transform: translateY(-4px);
    transition: background 0.25s, transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    user-select: none;
  }
  .btn-pushable:hover {
    filter: brightness(110%);
  }
  .btn-pushable:hover .btn-front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .btn-pushable:active .btn-front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  .btn-pushable:hover .btn-shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .btn-pushable:active .btn-shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
`), d.default.White)
})), r.register("8UJqa", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        White: "#FFFFFF",
        Black: "#000000",
        Yellow: "#FFFF00",
        Purple: "#673ab7"
    }
})), r.register("ewEPl", (function(t, n) {
    e(t.exports, "default", (function() {
        return E
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("c72PM"),
        l = r("5Z32P"),
        d = r("lpEVe"),
        u = r("fywoC"),
        c = r("2FDaO"),
        f = r("j2XHK"),
        p = r("4m84g"),
        h = r("d1LT2"),
        m = r("kLpOI"),
        g = r("l5RHB"),
        x = r("6T2GY"),
        v = r("gSG6u"),
        y = r("lOxf1"),
        b = r("dohZB");
    let w;
    const j = c.default.div(w || (w = (e => e)`
  padding: 18px;
  width: 100%;
  background: ${0};
  color: ${0};
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`), (e => e.background), (e => e.color));
    let C = class extends u.Component {
        render() {
            const e = (() => {
                const {
                    goal: {
                        type: e
                    }
                } = this.props.gameOptions;
                return (0, l.inThanosMode)() || (0, l.inZombiesVsHumansMode)() || (0, l.inLavaMode)() ? m.default : (0, l.inImposterMode)() ? v.default : (0, l.inDrawMode)() ? x.default : (0, l.inPardyMode)() ? y.default : e === f.GameGoal.time ? g.default : e === f.GameGoal.race ? y.default : e === f.GameGoal.allIn ? b.default : m.default
            })();
            return (0, i.jsxs)(j, {
                background: this.getContainerBackground(),
                color: this.getContainerColor(),
                children: [(0, i.jsx)(e, {
                    style: {
                        marginRight: 7
                    }
                }), (0, i.jsx)(s.default, {
                    text: this.getMessage()
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "getContainerBackground", (() => (0, l.inDrawMode)() ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.4)")), (0, a.default)(this, "getContainerColor", (() => (0, l.inDrawMode)() ? h.default.Black : h.default.White)), (0, a.default)(this, "getNoun", (e => {
                let t = "player";
                return (0, l.inTeamMode)() && (t = "team"), e && (t += "s"), t
            })), (0, a.default)(this, "getMessage", (() => {
                const e = this.props.gameOptions.goal,
                    {
                        type: t,
                        value: n
                    } = e;
                return (0, l.inThanosMode)() ? "Be the first to acquire all 6 Infinity Stones!" : (0, l.inZombiesVsHumansMode)() ? "Be the last team to survive!" : (0, l.inLavaMode)() ? "Work together to stay above the lava as long as you can!" : (0, l.inImposterMode)() ? p.imposterStrings.goal : (0, l.inDrawMode)() ? "Guess student drawings to earn the most points!" : (0, l.inPardyMode)() ? "Answer questions correctly & choose the right power to come out on top!" : t === f.GameGoal.time ? `Try to make as much money as you can in ${(0,l.numberWithCommas)(n)} ${(0,l.plural)("minute",n)}!` : t === f.GameGoal.race ? `The first ${this.getNoun()} to earn ${(0,l.getMoney)(n)} wins!` : t === f.GameGoal.allIn ? `The game ends once the combined balance of all ${this.getNoun(!0)} reaches ${(0,l.getMoney)(n)}!` : ""
            }))
        }
    };
    C = (0, o.__decorate)([(0, d.inject)("gameOptions"), d.observer], C);
    var E = C
})), r.register("kLpOI", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("ayjhg"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "CheckOutlined";
    var d = o.forwardRef(l)
})), r.register("ayjhg", (function(t, n) {
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
})), r.register("l5RHB", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("5xGm1"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "ClockCircleOutlined";
    var d = o.forwardRef(l)
})), r.register("5xGm1", (function(t, n) {
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
                    d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
                }
            }]
        },
        name: "clock-circle",
        theme: "outlined"
    }
})), r.register("6T2GY", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("iZbNQ"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "HighlightOutlined";
    var d = o.forwardRef(l)
})), r.register("iZbNQ", (function(t, n) {
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
                    d: "M957.6 507.4L603.2 158.2a7.9 7.9 0 00-11.2 0L353.3 393.4a8.03 8.03 0 00-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 00-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0011.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0011.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z"
                }
            }]
        },
        name: "highlight",
        theme: "outlined"
    }
})), r.register("gSG6u", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("Ofp5p"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "RocketOutlined";
    var d = o.forwardRef(l)
})), r.register("Ofp5p", (function(t, n) {
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
                    d: "M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z"
                }
            }]
        },
        name: "rocket",
        theme: "outlined"
    }
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("bVHCc"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "UsergroupAddOutlined";
    var d = o.forwardRef(l)
})), r.register("bVHCc", (function(t, n) {
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
                    d: "M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"
                }
            }]
        },
        name: "usergroup-add",
        theme: "outlined"
    }
})), r.register("4xKdQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return w
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("lpEVe"),
        l = r("fywoC"),
        d = r("2FDaO"),
        u = r("6AvJZ"),
        c = r("8NSvK"),
        f = r("d1LT2"),
        p = r("5Z32P");
    let h, m, g, x = e => e;
    const v = d.default.div.attrs({
            className: "scroll-y"
        })(h || (h = x`
  flex: 1;
  min-height: 0;
  color: ${0};
`), (e => e.color)),
        y = d.default.div(m || (m = x`
  width: 100%;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 10px;
`)),
        b = d.default.div(g || (g = x`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 15px;
`));
    let w = class extends l.Component {
        render() {
            return (0, i.jsx)(v, {
                color: this.getContainerColor(),
                children: (0, i.jsxs)(y, {
                    children: [(0, i.jsx)(c.default, {
                        amountOfPlayers: this.props.players.filteredPlayers.length
                    }), (0, i.jsx)(b, {
                        children: this.props.players.filteredPlayers.reverse().map((e => (0, i.jsx)(u.default, {
                            player: e
                        }, e.id)))
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "getContainerColor", (() => (0, p.inDrawMode)() ? f.default.Black : f.default.White))
        }
    };
    w = (0, o.__decorate)([(0, s.inject)("players"), s.observer], w)
})), r.register("6AvJZ", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("e4KJZ"),
        l = r("5Z32P"),
        d = r("bbvHy"),
        u = r("lpEVe"),
        c = r("fywoC");
    let f;
    const p = r("2FDaO").default.div(f || (f = (e => e)`
  background: rgba(255, 255, 255, 0.2);
  padding: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 5px;
  font-size: 33px;
  margin: 6px 12px 6px 0px;
  border: ${0};
  ${0};
  cursor: pointer;
  &:hover {
    text-decoration: line-through;
  }
`), (e => e.showBorder ? "2px solid" : "none"), d.default.normal);
    let h = class extends c.Component {
        render() {
            const {
                player: e
            } = this.props;
            return (0, i.jsx)(p, {
                onClick: this.banPlayer,
                showBorder: this.shouldShowBorder,
                children: (0, i.jsx)(s.default, {
                    title: "Remove from Game",
                    children: e.name
                })
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "shouldShowBorder", (0, l.inDrawMode)()), (0, a.default)(this, "banPlayer", (() => (0, l.banPlayer)(this.props.player.id)))
        }
    };
    h = (0, o.__decorate)([(0, u.inject)("kit", "gameOptions"), u.observer], h);
    var m = h
})), r.register("8NSvK", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = r("hxEiv"),
        o = r("5Z32P"),
        i = r("bbvHy"),
        s = r("fywoC"),
        l = r("2FDaO"),
        d = r("7cvtt");
    let u, c, f = e => e;
    const p = l.default.div(u || (u = f`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`)),
        h = l.default.div(c || (c = f`
  ${0};
  font-size: 28px;
`), i.default.black);
    var m = e => {
        const {
            amountOfPlayers: t
        } = e, n = s.useMemo((() => (0, o.inPardyMode)() ? "contestant" : "player"), []);
        return (0, a.jsxs)(p, {
            children: [(0, a.jsx)(h, {
                children: `${t} ${(0,o.plural)(n,t)}`
            }), (0, a.jsx)(d.default, {})]
        })
    }
})), r.register("7cvtt", (function(t, n) {
    e(t.exports, "default", (function() {
        return j
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("5Z32P"),
        l = r("d1LT2"),
        d = r("bbvHy"),
        u = r("7mCD4"),
        c = r("lpEVe"),
        f = r("6edaj"),
        p = r("fywoC"),
        h = r("2FDaO"),
        m = r("j2XHK");
    let g, x, v = e => e;
    const y = h.default.div(g || (g = v`
  display: flex;
  align-items: center;
`)),
        b = h.default.div(x || (x = v`
  padding: 6px 14px 6px 14px;
  border-radius: 4px;
  background: ${0};
  color: ${0};
  ${0};
  font-size: 24px;
  box-shadow: ${0};
  transition: all 0.23s;
  cursor: ${0};
  &:hover {
    background: ${0};
    transform: scale(1.04);
  }
`), (e => e.disabled ? l.default.DisabledGray : e.customColor || l.default.SuccessGreen), l.default.White, d.default.black, u.default.basic, (e => e.disabled ? "not-allowed" : "pointer"), (e => e.disabled ? l.default.DisabledGray : (0, f.lighten)(.1, e.customColor || l.default.SuccessGreen)));
    let w = class extends p.Component {
        render() {
            const e = this.getButtonInfo();
            let t = () => null;
            return e.disabled || (t = this.handleClick), (0, i.jsx)(y, {
                children: (0, i.jsx)(b, {
                    onClick: t,
                    disabled: e.disabled,
                    children: e.text
                })
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "playerCount", (() => this.props.players.filteredPlayers.length)), (0, a.default)(this, "handleClickCallback", (() => {
                !(0, s.inBossBattleMode)() || this.props.onTeamScreen ? !(0, s.inTeamMode)() || this.props.onTeamScreen ? (0, s.inBossBattleMode)() ? this.props.ui.showingBossPreScreen = !0 : (0, s.inZombiesVsHumansMode)() ? this.props.ui.showingHumansVsZombiesPreScreen = !0 : (0, s.inLavaMode)() ? this.props.ui.showingLavaPreScreen = !0 : this.props.gameValues.currentRoute = m.GameStatus.gameplay : this.props.gameValues.currentRoute = m.GameStatus.teams : this.props.gameValues.showBossBattleModal = !this.props.gameValues.showBossBattleModal
            })), (0, a.default)(this, "handleClick", (() => {
                this.handleClickCallback()
            })), (0, a.default)(this, "getButtonInfo", (() => {
                const e = this.playerCount(),
                    t = this.props.gameOptions;
                let n = "player";
                if ((0, s.inPardyMode)() && (n = "contestant"), (0, s.inBossBattleMode)() || (0, s.inZombiesVsHumansMode)()) {
                    const t = ((0, s.inBossBattleMode)() ? 3 : 2) - e;
                    return t > 0 && (0, s.inProduction)() ? {
                        disabled: !0,
                        text: `${t} more ${(0,s.plural)(n,t)} needed`
                    } : this.props.onTeamScreen ? {
                        disabled: !1,
                        text: "Start Game"
                    } : {
                        disabled: !1,
                        text: "Next"
                    }
                }
                if ((0, s.inImposterMode)()) {
                    const r = Math.max(3, 2 * t.modeOptions.numberOfImposters) - e;
                    if (r > 0 && (0, s.inProduction)()) return {
                        disabled: !0,
                        text: `${r} more ${(0,s.plural)(n,r)} needed`
                    }
                }
                if ((0, s.inDrawMode)()) {
                    const t = 2 - e;
                    if (t > 0 && (0, s.inProduction)()) return {
                        disabled: !0,
                        text: `${t} more ${(0,s.plural)(n,t)} needed`
                    }
                }
                if ((0, s.inThanosMode)()) {
                    const t = 2 - e;
                    if (t > 0 && (0, s.inProduction)()) return {
                        disabled: !0,
                        text: `${t} more ${(0,s.plural)(n,t)} needed`
                    }
                }
                if ((0, s.inTeamMode)() && !this.props.onTeamScreen) {
                    const r = 2 * (t.modeOptions.playersPerTeam || 4) - e;
                    return r > 0 && (0, s.inProduction)() ? {
                        disabled: !0,
                        text: `${r} more ${(0,s.plural)(n,r)} needed`
                    } : {
                        disabled: !1,
                        text: "Make Teams"
                    }
                }
                return {
                    disabled: 0 === e && (0, s.inProduction)(),
                    text: "Start Game"
                }
            }))
        }
    };
    w = (0, o.__decorate)([(0, c.inject)("gameOptions", "gameValues", "players", "kit", "ui"), c.observer], w);
    var j = w
})), r.register("37RFW", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("fucqw"),
        l = r("lpEVe"),
        d = r("fywoC"),
        u = r("2FDaO"),
        c = r("j2XHK"),
        f = r("iMOcM");
    let p, h, m, g = e => e;
    let x = class extends d.Component {
        componentDidMount() {
            (0, f.loadFont)("https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap"), s.default.lava.pantherShort.unload(), s.default.lava.pantherShort.load(), s.default.lava.pantherShort.on("load", (() => {
                this.startGame(), s.default.lava.pantherShort.play()
            })), s.default.lava.pantherShort.on("loaderror", this.startGame), s.default.lava.pantherShort.on("playerror", this.startGame)
        }
        render() {
            return (0, i.jsx)(y, {
                children: (0, i.jsx)(b, {
                    children: (0, i.jsx)(w, {
                        children: this.state.content
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                content: ""
            }), (0, a.default)(this, "getStages", (() => [{
                content: "",
                delay: 697
            }, {
                content: (0, i.jsx)("div", {
                    children: "The Lava is Rising!"
                }),
                delay: 3200
            }, {
                content: (0, i.jsx)("div", {
                    children: "Work together to keep your building above the lava"
                }),
                delay: 3200
            }, {
                content: (0, i.jsx)("div", {
                    children: "Purchase builds in the shop"
                }),
                delay: 3200
            }, {
                content: (0, i.jsx)("div", {
                    children: "Survive as long as you can!"
                }),
                delay: 2500
            }, {
                content: (0, i.jsx)("div", {
                    className: "animated zoomInDown",
                    style: {
                        zoom: 1.4
                    },
                    children: "The Floor Is Lava!"
                }),
                delay: 5e3
            }])), (0, a.default)(this, "setStage", (e => {
                const t = this.getStages()[e];
                if (!t) return this.props.gameValues.currentRoute = c.GameStatus.gameplay, void(this.props.ui.showingLavaPreScreen = !1);
                this.setState({
                    content: t.content
                }), setTimeout((() => this.setStage(e + 1)), t.delay)
            })), (0, a.default)(this, "startGame", (() => {
                this.setStage(0)
            }))
        }
    };
    x = (0, o.__decorate)([(0, l.inject)("gameValues", "ui"), l.observer], x);
    var v = x;
    const y = u.default.div(p || (p = g`
  background: linear-gradient(182deg, #c86300, #dd3725);
  background-size: 400% 400%;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`)),
        b = u.default.div(h || (h = g`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 65px;
  padding: 50px;
  font-family: ${0};
  text-align: center;
`), "'Bowlby One SC', cursive"),
        w = u.default.div(m || (m = g`
  max-width: 800px;
`))
})), r.register("3dwzi", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("lpEVe"),
        s = r("fywoC"),
        l = r("eSo73");
    let d = class extends s.Component {
        render() {
            return this.props.gameValues.thanosValues ? (0, o.jsx)(l.default, {}) : null
        }
    };
    d = (0, a.__decorate)([(0, i.inject)("gameValues"), i.observer], d);
    var u = d
})), r.register("eSo73", (function(t, n) {
    e(t.exports, "Container", (function() {
        return j
    })), e(t.exports, "default", (function() {
        return k
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("fucqw"),
        l = r("5Z32P"),
        d = r("d1LT2"),
        u = r("bbvHy"),
        c = r("cmvpZ"),
        f = r("lpEVe"),
        p = r("fywoC"),
        h = r("2FDaO"),
        m = r("j2XHK"),
        g = r("b1fbi");
    let x, v, y = e => e;
    const b = e => new Promise((t => setTimeout((() => t()), e))),
        w = e => {
            let t = "";
            return e.forEach(((n, r) => {
                t += n, r + 1 !== e.length && (t += ", ")
            })), t
        },
        j = h.default.div(x || (x = y`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${0};
  color: ${0};
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  overflow: scroll;
  ${0}
`), d.default.Black, d.default.White, u.default.normal),
        C = h.default.div(v || (v = y`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 736px) and (min-height: 483px) {
    transform: scale(1.7);
  }
`));
    let E;
    var S;
    (S = E || (E = {})).countdown = "Countdown", S.results = "Results", S.final = "Final";
    let O = class extends p.Component {
        componentDidMount() {
            s.default.thanos.thanos.stop(), this.props.gameValues.currentRoute = m.GameStatus.results, s.default.eventBoom.play();
            let e = !1;
            const t = this.props.gameValues.thanosValues.showAt,
                n = setInterval((() => {
                    const r = Math.round((t - Date.now()) / 1e3);
                    if (r <= 0) return this.showResults(), clearInterval(n);
                    8 !== r || e || (e = !0, s.default.suspense.play()), this.setState({
                        secondsLeft: r
                    })
                }), 200)
        }
        render() {
            return (0, i.jsx)(j, {
                children: (0, i.jsx)(C, {
                    children: this.getContent()
                })
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                stage: E.countdown,
                secondsLeft: 0,
                survivesResult: null
            }), (0, a.default)(this, "getContent", (() => this.state.stage === E.results ? (0, i.jsx)(g.default, {
                ...this.state.survivesResult
            }, this.state.survivesResult.id + "-parent") : this.state.stage === E.countdown ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    style: {
                        fontSize: 25
                    },
                    children: "The snap is about to happen..."
                }), (0, i.jsxs)("div", {
                    style: {
                        fontSize: 119,
                        fontWeight: 900
                    },
                    children: ["0:", this.state.secondsLeft < 10 ? `0${this.state.secondsLeft}` : this.state.secondsLeft]
                })]
            }) : this.state.stage === E.final ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("img", {
                    src: (0, l.getAssetPath)("gauntlet.svg"),
                    style: {
                        height: 121
                    },
                    className: "animated pulse infinite"
                }), (0, i.jsxs)("div", {
                    style: {
                        fontSize: 29
                    },
                    children: [(0, i.jsx)("span", {
                        style: {
                            color: "gold"
                        },
                        children: "Winner:"
                    }), " ", (0, i.jsx)("span", {
                        style: {
                            fontWeight: 900
                        },
                        children: this.props.gameValues.thanosValues.winner.name
                    })]
                }), (0, i.jsx)("div", {
                    style: {
                        height: 6
                    }
                }), (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)("div", {
                        style: {
                            maxWidth: 460
                        },
                        children: [(0, i.jsx)("b", {
                            style: {
                                color: "#a5d6a7"
                            },
                            children: "Survived The Snap:"
                        }), ` ${w(this.props.gameValues.thanosValues.saved.map((e=>e.name)))}`]
                    }), (0, i.jsx)("div", {
                        style: {
                            height: 12
                        }
                    }), (0, i.jsxs)("div", {
                        style: {
                            maxWidth: 460
                        },
                        children: [(0, i.jsx)("b", {
                            style: {
                                color: "#ef9a9a"
                            },
                            children: "Snapped:"
                        }), ` ${w(this.props.gameValues.thanosValues.snapped.map((e=>e.name)))}`]
                    })]
                })]
            }) : null)), (0, a.default)(this, "showResults", (async () => {
                const e = [];
                this.props.gameValues.thanosValues.saved.forEach((t => e.push({
                    survives: !0,
                    id: t.id,
                    name: t.name
                }))), this.props.gameValues.thanosValues.snapped.forEach((t => e.push({
                    survives: !1,
                    id: t.id,
                    name: t.name
                })));
                const t = (0, c.shuffle)(e);
                for (let e = 0; e < t.length; e++) 0 === e && s.default.eventBoom.play(), this.setState({
                    survivesResult: t[e],
                    stage: E.results
                }), await b(4e3);
                s.default.eventBoom.play(), this.setState({
                    stage: E.final
                })
            }))
        }
    };
    O = (0, o.__decorate)([(0, f.inject)("gameValues")], O);
    var k = O
})), r.register("b1fbi", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("divCp"),
        o = r("hxEiv"),
        i = r("fucqw"),
        s = r("fywoC");
    class l extends s.Component {
        componentDidMount() {
            this.props.survives ? setTimeout((() => {
                i.default.thanos.successDing.play(), this.setState({
                    showSurvived: !0
                })
            }), 1200) : setTimeout((() => {
                this.setState({
                    startHide: !0
                }), i.default.thanos.wind.play()
            }), 1400), setTimeout((() => {
                this.props.survives || this.setState({
                    show: !1
                })
            }), 3700)
        }
        render() {
            return this.state.show ? (0, o.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    animationDelay: "0.5s",
                    animationDuration: this.props.survives ? "0.3s" : this.state.startHide ? "2s" : "0.3s"
                },
                className: "animated " + (this.props.survives ? "fadeIn" : this.state.startHide ? "fadeOut" : "fadeIn"),
                children: [(0, o.jsx)("div", {
                    style: {
                        fontSize: 65,
                        fontWeight: 900
                    },
                    children: this.props.name
                }), (0, o.jsx)("div", {
                    style: {
                        opacity: this.state.showSurvived ? 1 : 0,
                        transition: "opacity 0.3s",
                        fontSize: 22,
                        color: "#a5d6a7"
                    },
                    children: "survived the snap!"
                }, this.props.id + "-secondary")]
            }, this.props.id) : null
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                showSurvived: !1,
                startHide: !1,
                show: !0
            })
        }
    }
    var d = l
})), r.register("54vnf", (function(t, n) {
    e(t.exports, "default", (function() {
        return S
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("fucqw"),
        l = r("5Z32P"),
        d = r("bbvHy"),
        u = r("4MuSt"),
        c = r("lpEVe"),
        f = r("fywoC"),
        p = r("2FDaO"),
        h = r("gwW58"),
        m = r("hGFhc"),
        g = r("iNMOL"),
        x = r("2ANlR"),
        v = r("dmyNI"),
        y = r("5epAE"),
        b = r("aNVoE"),
        w = r("1C9tr");
    let j;
    const C = p.default.div(j || (j = (e => e)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${0};
`), d.default.normal);
    let E = class extends f.Component {
        componentDidMount() {
            (0, u.when)((() => !!this.props.players.finalResults), (() => {
                this.setState({
                    show: !0
                }), (0, l.inThanosMode)() || (0, l.inBossBattleMode)() || (0, l.inZombiesVsHumansMode)() || (0, l.inLavaMode)() || (0, l.inImposterMode)() || (0, l.inDrawMode)() || (0, l.inPardyMode)() || s.default.winner.play()
            }))
        }
        render() {
            return this.state.show ? (0, l.inLavaMode)() ? (0, i.jsx)(v.default, {}) : (0, i.jsx)(C, {
                children: this.getContent()
            }) : (0, i.jsx)(C, {})
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                show: !1
            }), (0, a.default)(this, "getContent", (e => (0, l.inBossBattleMode)() && !e ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(h.default, {
                    contentWhenComplete: this.getContent(!0)
                })
            }) : (0, l.inZombiesVsHumansMode)() ? (0, i.jsx)(m.default, {}) : (0, l.inImposterMode)() ? (0, i.jsx)(y.default, {}) : (0, l.inDrawMode)() ? (0, i.jsx)(b.default, {}) : (0, l.inPardyMode)() ? (0, i.jsx)(w.default, {}) : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(g.default, {}), (0, i.jsx)(x.default, {})]
            })))
        }
    };
    E = (0, o.__decorate)([(0, c.inject)("players")], E);
    var S = E
})), r.register("gwW58", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("fucqw"),
        l = r("d1LT2"),
        d = r("lpEVe"),
        u = r("fywoC"),
        c = r("2FDaO"),
        f = r("iMOcM");
    let p;
    const h = "The Boss",
        m = e => (0, i.jsx)("div", {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: e.backgroundColor,
                padding: 35,
                boxSizing: "border-box",
                animationDuration: "12s",
                animationDelay: "3s",
                flexDirection: "column"
            },
            className: "animated fadeIn",
            children: e.children
        });
    let g = class extends u.Component {
        componentDidMount() {
            (0, f.loadFont)("https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap");
            const e = s.default.eventBoom;
            e.volume(1), e.play(), e.on("play", this.handlePlay), e.on("loaderror", this.handlePlay), e.on("playerror", this.handlePlay)
        }
        render() {
            return this.state.showFinalContent ? this.props.contentWhenComplete : (0, i.jsx)(v, {
                children: this.getContent()
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                showContent: !1,
                showFinalContent: !1
            }), (0, a.default)(this, "handlePlay", (() => {
                setTimeout((() => {
                    this.setState({
                        showContent: !0
                    });
                    (this.bossWon() ? s.default.bossBattle.darkAmbience : s.default.bossBattle.award).play(), setTimeout((() => {
                        this.setState({
                            showFinalContent: !0
                        })
                    }), 15e3)
                }), 2e3)
            })), (0, a.default)(this, "getContent", (() => this.state.showContent ? this.bossWon() ? (0, i.jsxs)(m, {
                backgroundColor: "#424242",
                children: [(0, i.jsxs)("div", {
                    children: [this.getBossName(), " Wins!"]
                }), (0, i.jsx)("div", {
                    style: {
                        fontSize: 58
                    },
                    children: "The Challengers Defeated!"
                })]
            }) : (0, i.jsxs)(m, {
                backgroundColor: "#2e7d32",
                children: [" ", (0, i.jsx)("div", {
                    children: "The Challengers Win!"
                }), (0, i.jsxs)("div", {
                    style: {
                        fontSize: 58
                    },
                    children: [this.getBossName(), " Defeated!"]
                })]
            }) : null)), (0, a.default)(this, "getBossName", (() => {
                let e = "The Boss";
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const t = this.props.players.teams.find((e => e.id === h));
                    t && t.players[0] && (e = t.players[0])
                }
                return e
            })), (0, a.default)(this, "bossWon", (() => {
                let e = !0;
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const t = this.props.players.teams.find((e => e.id === h));
                    if (t) {
                        const n = t.balance,
                            r = this.props.players.teams.find((e => e.id !== h));
                        r && r.balance > n && (e = !1)
                    }
                }
                return e
            }))
        }
    };
    g = (0, o.__decorate)([(0, d.inject)("players"), d.observer], g);
    var x = g;
    const v = c.default.div(p || (p = (e => e)`
  height: 100%;
  width: 100%;
  background: ${0};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${0};
  font-size: 72px;
  text-align: center;
`), l.default.Black, "'Bowlby One SC', cursive")
})), r.register("hGFhc", (function(t, n) {
    e(t.exports, "default", (function() {
        return w
    })), e(t.exports, "BackgroundMove", (function() {
        return j
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("dBAHx"),
        s = r("iNMOL"),
        l = r("c72PM"),
        d = r("fucqw"),
        u = r("lpEVe"),
        c = r("fywoC"),
        f = r("2FDaO"),
        p = r("eSo73"),
        h = r("bCi2d"),
        m = r("iMOcM");
    let g, x, v, y = e => e;
    let b = class extends c.Component {
        componentDidMount() {
            (0, m.loadFont)("https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap"), d.default.boom.play(), setTimeout((() => {
                d.default.fanfare.play()
            }), 8e3)
        }
        render() {
            const e = this.props.gameValues.defendingHomebaseResults;
            return e ? (0, o.jsx)(p.Container, {
                children: (0, o.jsx)(C, {
                    className: "animated fadeIn",
                    style: {
                        animationDuration: "12s",
                        animationDelay: "8s"
                    },
                    children: (0, o.jsxs)(E, {
                        children: [(0, o.jsx)(s.default, {}), (0, o.jsxs)("div", {
                            style: {
                                flex: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                padding: 35,
                                boxSizing: "border-box",
                                animationDelay: "14s",
                                animationDuration: "6s"
                            },
                            className: "animated zoomInDown",
                            children: [(0, o.jsx)("div", {
                                style: {
                                    fontSize: 40,
                                    opacity: .7
                                },
                                children: (0, o.jsx)(l.default, {
                                    text: `${e.loser.name} Defeated!`
                                })
                            }), (0, o.jsx)("img", {
                                src: (0, h.getImage)(e.winner.id),
                                style: {
                                    height: 150,
                                    marginTop: 20
                                },
                                className: "animated pulse infinite"
                            }), (0, o.jsx)("div", {
                                style: {
                                    fontSize: 91
                                },
                                children: (0, o.jsx)(l.default, {
                                    text: `${e.winner.name} Win!`
                                })
                            }), (0, o.jsxs)("div", {
                                style: {
                                    fontSize: 20
                                },
                                children: [(0, o.jsx)(l.default, {
                                    text: "Congratulations"
                                }), " ", (0, i.getTeamPlayerNames)(e.winnerPlayerNames), "!"]
                            })]
                        })]
                    })
                })
            }) : null
        }
    };
    b = (0, a.__decorate)([(0, u.inject)("gameValues"), u.observer], b);
    var w = b;
    const j = (0, f.keyframes)(g || (g = y`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`)),
        C = f.default.div(x || (x = y`
  font-family: ${0};
  height: 100%;
  width: 100%;
`), "'Bowlby One SC', cursive"),
        E = f.default.div(v || (v = y`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(270deg, #020a29, #087d17, #b67509);
  background-size: 600% 600%;
  animation: ${0} 21s ease infinite;
  text-align: center;
`), j)
})), r.register("iNMOL", (function(t, n) {
    e(t.exports, "default", (function() {
        return P
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("6T2GY"),
        l = r("k9bvH"),
        d = r("2NYjG"),
        u = r("93yIm"),
        c = r("42lPK"),
        f = r("h1Mb4"),
        p = r("5Z32P"),
        h = r("bbvHy"),
        m = r("7mCD4"),
        g = r("lpEVe"),
        x = r("fywoC"),
        v = r("2FDaO"),
        y = r("d1LT2");
    let b, w, j, C = e => e;
    const E = v.default.div(b || (b = C`
  background: rgba(0, 0, 0, 0.6);
  color: ${0};
  width: 100%;
  height: 81px;
  box-shadow: ${0};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 22px;
  padding-right: 22px;
  z-index: 999;
  ${0};
`), y.default.White, m.default.basic, h.default.bold),
        S = v.default.div(w || (w = C`
  width: 33% !important;
  ${0};
`), (e => e.customCSS ? e.customCSS : null)),
        O = v.default.div(j || (j = C`
  font-size: 32px;
`));
    let k = class extends x.Component {
        render() {
            return (0, i.jsxs)(E, {
                children: [(0, i.jsx)(S, {
                    style: {
                        textAlign: "left"
                    },
                    children: this.props.gameOptions.clapping && !(0, p.inImposterMode)() ? (0, i.jsxs)(O, {
                        children: [(0, c.getClappingEmoji)(), " ", (0, p.numberWithCommas)(this.props.gameValues.clapCount)]
                    }) : (0, i.jsx)("div", {})
                }), this.props.hideLogo ? (0, i.jsx)("div", {}) : (0, p.inPardyMode)() ? (0, i.jsx)("img", {
                    src: (0, p.getAssetPath)("pardyLogo.png"),
                    style: {
                        height: 45
                    }
                }) : (0, i.jsx)("img", {
                    src: "/client/img/svgLogoWhite.svg",
                    style: {
                        height: 41
                    }
                }), (0, i.jsx)(S, {
                    customCSS: "\n            display: flex;\n            justify-content: flex-end;",
                    children: (0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [this.props.gameValues.reportId ? (0, i.jsx)(u.default, {
                            onClick: this.openReport,
                            icon: (0, i.jsx)(d.default, {}),
                            size: "large",
                            type: "primary",
                            style: {
                                marginRight: 10
                            },
                            children: "View Report"
                        }) : null, (0, p.inDrawMode)() && (0, i.jsx)(u.default, {
                            icon: (0, i.jsx)(s.default, {}),
                            size: "large",
                            type: "primary",
                            onClick: this.openDrawingModal,
                            style: {
                                marginRight: 10
                            },
                            children: "View Drawings"
                        }), (0, i.jsx)(u.default, {
                            onClick: this.playAgain,
                            loading: this.state.loadingPlayAgain,
                            icon: (0, i.jsx)(l.default, {}),
                            size: "large",
                            type: "primary",
                            children: "Play Again"
                        })]
                    })
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                loadingPlayAgain: !1
            }), (0, a.default)(this, "openDrawingModal", (() => {
                this.props.draw.drawingsModalOpen = !0
            })), (0, a.default)(this, "openReport", (() => {
                window.open("/report/" + this.props.gameValues.reportId)
            })), (0, a.default)(this, "playAgain", (() => {
                this.state.loadingPlayAgain || (this.setState({
                    loadingPlayAgain: !0
                }), (0, p.send)(f.default.playAgain), setTimeout((() => {
                    this.setState({
                        loadingPlayAgain: !1
                    })
                }), 5e3))
            }))
        }
    };
    k = (0, o.__decorate)([(0, g.inject)("gameOptions", "gameValues", "draw"), g.observer], k);
    var P = k
})), r.register("k9bvH", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("4MPdf"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "RedoOutlined";
    var d = o.forwardRef(l)
})), r.register("4MPdf", (function(t, n) {
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
                    d: "M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"
                }
            }]
        },
        name: "redo",
        theme: "outlined"
    }
})), r.register("2NYjG", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("5hrq0"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "SolutionOutlined";
    var d = o.forwardRef(l)
})), r.register("5hrq0", (function(t, n) {
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
                    d: "M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z"
                }
            }]
        },
        name: "solution",
        theme: "outlined"
    }
})), r.register("42lPK", (function(t, n) {
    e(t.exports, "getClappingEmoji", (function() {
        return r
    }));
    const r = () => "👏"
})), r.register("2ANlR", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("auTQy"),
        s = r("4mnoM"),
        l = r("5Z32P"),
        d = r("lpEVe"),
        u = r("fywoC"),
        c = r("2FDaO");
    let f, p, h = e => e;
    const m = c.default.div.attrs({
            className: "scroll-y"
        })(f || (f = h`
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: center;
  min-height: 0;
`)),
        g = c.default.div(p || (p = h`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  max-width: 100vw;
`));
    let x = class extends u.Component {
        render() {
            const e = (0, l.inTeamMode)(),
                t = (0, l.inBossBattleMode)(),
                n = (0, i.leaderboardSorter)(this.props.players.finalResults);
            let r, a, d;
            return n[0] && (r = n[0]), n[1] && (a = n[1]), n[2] && (d = n[2]), (0, o.jsxs)(m, {
                children: [!t && (0, o.jsxs)(g, {
                    children: [d ? (0, o.jsx)(s.default, {
                        snapshot: d,
                        isPlayer: !e,
                        position: 3,
                        themes: this.props.gameValues.availableThemes
                    }) : null, r ? (0, o.jsx)(s.default, {
                        snapshot: r,
                        isPlayer: !e,
                        position: 1,
                        themes: this.props.gameValues.availableThemes
                    }) : null, a ? (0, o.jsx)(s.default, {
                        snapshot: a,
                        isPlayer: !e,
                        position: 2,
                        themes: this.props.gameValues.availableThemes
                    }) : null]
                }), (0, o.jsx)(i.default, {
                    customWidth: "881px",
                    customMaxWidth: "90%",
                    blockScroll: !0,
                    hideTop3: !t,
                    showHidden: !0,
                    overflow: !0,
                    customClassName: t ? "animated zoomInDown" : "animated fadeIn"
                })]
            })
        }
    };
    x = (0, a.__decorate)([(0, d.inject)("players", "gameValues", "gameOptions"), d.observer], x);
    var v = x
})), r.register("dmyNI", (function(t, n) {
    e(t.exports, "default", (function() {
        return S
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("fywoC"),
        l = r("iNMOL"),
        d = r("2FDaO"),
        u = r("ipzCk"),
        c = r("bbvHy"),
        f = r("ajXaz"),
        p = r("hGFhc"),
        h = r("8qj7Y"),
        m = r("fucqw"),
        g = r("d1LT2"),
        x = r("5Z32P"),
        v = r("lpEVe");
    let y, b, w, j, C = e => e,
        E = class extends s.Component {
            componentDidMount() {
                (0, x.playSound)(m.default.boom, {
                    volume: .6
                }), setTimeout((() => {
                    (0, x.playSound)(m.default.lava.egyptFanfare, {
                        volume: .5
                    })
                }), 5500), setTimeout((() => {
                    this.setState({
                        stage: 1
                    })
                }), 6e3), this.props.gameOptions.music && setTimeout((() => {
                    m.default.lava.panther.fade(0, .25, 1e3)
                }), 16e3)
            }
            render() {
                const {
                    lava: e
                } = this.props.entities;
                return 0 !== this.state.stage && e ? (0, i.jsx)(O, {
                    children: (0, i.jsx)(k, {
                        children: (0, i.jsxs)(P, {
                            children: [(0, i.jsx)("div", {
                                className: "maxWidth",
                                style: {
                                    flexShrink: 0,
                                    zIndex: 2
                                },
                                children: (0, i.jsx)(l.default, {})
                            }), (0, i.jsxs)(M, {
                                children: [(0, i.jsx)(u.default, {
                                    seconds: e.secondsLasted
                                }), (0, i.jsx)(f.default, {
                                    buildHeight: e.buildHeight,
                                    pieceCount: e.buildPieces
                                }), (0, i.jsx)(h.default, {})]
                            })]
                        })
                    })
                }) : (0, i.jsx)("div", {
                    style: {
                        height: "100vh",
                        width: "100%",
                        background: g.default.Black
                    }
                })
            }
            constructor(...e) {
                super(...e), (0, a.default)(this, "state", {
                    stage: 0
                })
            }
        };
    E = (0, o.__decorate)([(0, v.inject)("gameOptions", "entities"), v.observer], E);
    var S = E;
    const O = d.default.div.attrs({
            className: "maxWidth"
        })(y || (y = C`
  height: 100vh;
  background: ${0};
`), g.default.Black),
        k = d.default.div.attrs({
            className: "maxWidth maxHeight animated fadeIn"
        })(b || (b = C`
  animation-duration: 6s;
`)),
        P = d.default.div.attrs({
            className: "maxWidth maxHeight flex flex-column"
        })(w || (w = C`
  overflow: hidden;
  background: linear-gradient(285deg, #a62a16, #b5761f, #2f2d2a);
  background-size: 600% 600%;
  animation: ${0} 10s ease infinite;
  font-family: ${0};
`), p.BackgroundMove, c.default.fontFamilyName),
        M = d.default.div.attrs({
            className: "flex flex-column vc maxWidth animated fadeInDown"
        })(j || (j = C`
  flex: 1;
  z-index: 1;
  overflow-y: auto;
  padding-bottom: 50px;
  animation-duration: 8.2s;
`))
})), r.register("ipzCk", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("5Z32P");
    r("fywoC");
    var i = r("2FDaO"),
        s = r("7AXVP");
    let l, d, u, c, f = e => e;
    var p = e => (0, a.jsxs)(h, {
        children: [(0, a.jsx)(x, {
            style: {
                marginRight: 70,
                transform: "rotate(-16deg)"
            }
        }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(m, {
                children: "Lava Survival Time:"
            }), (0, a.jsx)(g, {
                children: (0, s.getTimerFromSeconds)(e.seconds)
            })]
        }), (0, a.jsx)(x, {
            style: {
                marginLeft: 70,
                transform: "rotate(16deg)"
            }
        })]
    });
    const h = i.default.div.attrs({
            className: "flex hc vc animated zoomInDown"
        })(l || (l = f`
  width: 100%;
  margin-top: 70px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  animation-delay: 7.7s;
  animation-duration: 1.5;
`)),
        m = i.default.div(d || (d = f`
  font-size: 28px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.9);
`)),
        g = i.default.div(u || (u = f`
  font-size: 146px;
  line-height: 146px;
  font-weight: bold;
  margin-top: 9px;
`)),
        x = i.default.img.attrs({
            src: (0, o.getAssetPath)("medal.svg")
        })(c || (c = f`
  height: 105px;
  opacity: 0.8;
`))
})), r.register("ajXaz", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv"),
        o = r("iMOcM");
    r("fywoC");
    var i = r("2FDaO"),
        s = r("aBMqx");
    let l, d, u = e => e;
    var c = e => (0, a.jsxs)(f, {
        children: [(0, a.jsx)(p, {
            children: (0, a.jsx)(s.default, {
                icon: "fas fa-building",
                title: "Building Height",
                value: e.buildHeight,
                label: (0, o.plural)("block", e.buildHeight)
            })
        }), (0, a.jsx)("div", {
            style: {
                width: 35
            }
        }), (0, a.jsx)(p, {
            children: (0, a.jsx)(s.default, {
                icon: "fas fa-tally",
                title: "Building Pieces",
                value: e.pieceCount,
                label: (0, o.plural)("piece", e.pieceCount)
            })
        })]
    });
    const f = i.default.div.attrs({
            className: "flex vc hc maxWidth"
        })(l || (l = u`
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
`)),
        p = i.default.div(d || (d = u`
  width: 350px;
`))
})), r.register("8qj7Y", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("lpEVe"),
        s = r("fywoC"),
        l = r("2FDaO"),
        d = r("dBAHx");
    let u, c = class extends s.Component {
        render() {
            return (0, o.jsxs)(p, {
                children: [(0, o.jsx)("b", {
                    children: "Builders:"
                }), " ", (0, d.getTeamPlayerNames)(this.props.players.players.map((e => e.name)))]
            })
        }
    };
    c = (0, a.__decorate)([(0, i.inject)("players"), i.observer], c);
    var f = c;
    const p = l.default.div(u || (u = (e => e)`
  width: 90%;
  max-width: 732px;
  font-size: 21px;
  opacity: 0.8;
  margin-top: 50px;
`))
})), r.register("5epAE", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("hNcZR"),
        s = r("1Jbaq"),
        l = r("iNMOL"),
        d = r("jSA7q"),
        u = r("2FDaO");
    let c;
    class f extends o.Component {
        render() {
            return (0, a.jsx)(i.Container, {
                children: (0, a.jsxs)(h, {
                    children: [(0, a.jsx)(s.default, {}), (0, a.jsxs)(i.Content, {
                        style: {
                            flexDirection: "column"
                        },
                        className: "maxHeight",
                        children: [(0, a.jsx)("div", {
                            className: "maxWidth",
                            style: {
                                flexShrink: 0
                            },
                            children: (0, a.jsx)(l.default, {
                                hideLogo: !0
                            })
                        }), (0, a.jsx)("div", {
                            style: {
                                flex: 1
                            },
                            className: "scroll-y",
                            children: (0, a.jsx)(d.default, {})
                        })]
                    })]
                })
            })
        }
    }
    var p = f;
    const h = u.default.div.attrs({
        className: "flex animated fadeIn"
    })(c || (c = (e => e)`
  flex: 1;
  animation-duration: 1.8s;
`))
})), r.register("jSA7q", (function(t, n) {
    e(t.exports, "default", (function() {
        return S
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("4m84g"),
        l = r("h1Mb4"),
        d = r("fucqw"),
        u = r("5Z32P"),
        c = r("ipXVN"),
        f = r("lpEVe"),
        p = r("fywoC"),
        h = r("2FDaO"),
        m = r("dBAHx");
    let g, x, v, y, b, w, j, C = e => e,
        E = class extends p.Component {
            componentDidMount() {
                (0, u.send)(l.default.imposter.requestPeople), this.impostersWon() ? (0, u.playSound)(d.default.imposter.imposterWin, {
                    volume: .8
                }) : (0, u.playSound)(d.default.imposter.crewmateWin, {
                    volume: .6
                })
            }
            render() {
                const e = this.impostersWon(),
                    t = this.imposterNames();
                return (0, i.jsxs)(O, {
                    children: [(0, i.jsxs)(k, {
                        children: [e ? "Impostors" : "Crewmates", " Win"]
                    }), (0, i.jsxs)(P, {
                        children: [(0, i.jsx)(M, {
                            style: {
                                background: e ? "#d32f2f" : "#4caf50"
                            }
                        }), (0, i.jsx)(D, {
                            children: (0, i.jsx)(_, {
                                src: (0, u.getAssetPath)(e ? "astronaut2.svg" : "astronaut.svg")
                            })
                        })]
                    }), (0, i.jsxs)(T, {
                        children: [(0, i.jsxs)("b", {
                            children: [(0, u.plural)("Impostor", this.props.imposter.people.filter((e => e.role === c.PersonRole.imposter)).length), ":"]
                        }), " ", t]
                    })]
                })
            }
            constructor(...e) {
                super(...e), (0, a.default)(this, "impostersWon", (() => this.props.imposter.impostersLeft >= 1)), (0, a.default)(this, "imposterNames", (() => (0, m.getTeamPlayerNames)(this.props.imposter.people.filter((e => e.role === c.PersonRole.imposter)).map((e => e.name)))))
            }
        };
    E = (0, o.__decorate)([(0, f.inject)("imposter"), f.observer], E);
    var S = E;
    const O = h.default.div.attrs({
            className: "flex flex-column vc animated fadeIn"
        })(g || (g = C`
  animation-duration: 12s;
  padding: 100px;
  padding-top: 25px;
  font-family: ${0};
  text-align: center;
`), s.imposterFontName),
        k = h.default.div(x || (x = C`
  font-size: 75px;
  font-weight: 700;
`)),
        P = h.default.div(v || (v = C`
  height: 250px;
  width: 300px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 75px;
`)),
        M = h.default.div.attrs({
            className: "maxWidth maxHeight animated pulse infinite"
        })(y || (y = C`
  border-radius: 50%;
  animation-duration: 2.5s;
  filter: blur(50px);
`)),
        D = h.default.div.attrs({
            className: "flex maxWidth hc vc"
        })(b || (b = C`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`)),
        _ = h.default.img(w || (w = C`
  filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.4));
  height: 160px;
`)),
        T = h.default.div(j || (j = C`
  font-size: 24px;
`))
})), r.register("aNVoE", (function(n, a) {
    e(n.exports, "default", (function() {
        return k
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        s = r("iNMOL"),
        l = r("2FDaO"),
        d = r("5ybCh"),
        u = r("d1LT2"),
        c = r("2MbBq"),
        f = r("eh4jC"),
        p = r("lpEVe"),
        h = r("auTQy"),
        m = r("VvPwO"),
        g = r("5Z32P"),
        x = r("fucqw"),
        v = r("4mnoM"),
        y = r("2RhIb"),
        b = r("fKxAL"),
        w = r("hb4so");
    let j, C, E, S = e => e;
    const O = (0, p.observer)((() => {
        const {
            players: {
                finalResults: e
            }
        } = i.useContext(m.default), [n, r] = i.useState(!1), [a, l] = i.useState(!1), [d, u] = i.useState(!1);
        i.useEffect((() => {
            (0, g.playSound)(x.default.draw.winner, {
                volume: .8
            }), setTimeout((() => {
                r(!0), setTimeout((() => {
                    l(!0)
                }), 600), setTimeout((() => {
                    u(!0), (0, g.musicIsOn)() && setTimeout((() => {
                        x.default.draw.background.fade(0, b.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 1500)
                    }), 2e3)
                }), 2e3)
            }), 2300)
        }), []);
        const p = (0, h.leaderboardSorter)(e),
            j = p.length ? p[0] : null,
            C = p.filter(((e, t) => t > 0));
        return (0, o.jsxs)(P, {
            children: [(0, o.jsx)(s.default, {}), (0, o.jsxs)(M, {
                children: [j ? (0, o.jsxs)("div", {
                    className: "maxWidth vc flex-column",
                    style: {
                        display: n ? "flex" : "none"
                    },
                    children: [(0, o.jsx)(v.ConfettiContainer, {
                        children: (0, o.jsx)(t(y), {
                            active: a,
                            config: v.confettiConfig
                        })
                    }), (0, o.jsx)(c.default, {
                        name: j.name,
                        amount: j.balance
                    })]
                }) : null, C && C.length && d ? (0, o.jsxs)("div", {
                    className: "maxWidth animated fadeIn flex flex-column vc",
                    children: [(0, o.jsx)(D, {}), (0, o.jsx)(f.default, {
                        people: C
                    })]
                }) : null]
            }), (0, o.jsx)(w.default, {})]
        })
    }));
    var k = (0, p.observer)((() => {
        const {
            players: {
                finalResults: e
            }
        } = i.useContext(m.default);
        return e ? (0, o.jsx)(O, {}) : null
    }));
    const P = l.default.div.attrs({
            className: "flex flex-column scroll-y"
        })(j || (j = S`
  flex: 1;
  font-family: ${0};
  color: ${0};
  ${0}
`), b.DRAW_MODE_FONT, u.default.Black, d.GRID_BACKGROUND_CSS),
        M = l.default.div.attrs({
            className: "scroll-y flex vc flex-column"
        })(C || (C = S`
  flex: 1;
  padding: 40px 0px;
`)),
        D = l.default.div(E || (E = S`
  width: 95%;
  max-width: 1200px;
  margin: 40px 0px;
  background: ${0};
  border-radius: 23%;
  flex-shrink: 0;
  height: 2px;
`), u.default.Black)
})), r.register("2MbBq", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = r("hxEiv"),
        o = r("5Z32P"),
        i = r("d1LT2");
    r("fywoC");
    var s = r("2FDaO"),
        l = r("eJgdG");
    let d, u, c, f, p, h, m = e => e;
    var g = e => (0, a.jsxs)(x, {
        children: [(0, a.jsx)(v, {
            children: (0, a.jsx)(y, {})
        }), (0, a.jsxs)(b, {
            children: [(0, a.jsx)(w, {
                children: e.name
            }), (0, a.jsx)(j, {
                children: (0, o.getMoney)(e.amount)
            })]
        })]
    });
    const x = s.default.div.attrs({
            className: "flex vc flex-column animated zoomInDown"
        })(d || (d = m`
  width: 90%;
  max-width: 580px;
`)),
        v = s.default.div.attrs({
            className: "flex hc vc light-shadow"
        })(u || (u = m`
  height: 162px;
  width: 162px;
  background: ${0};
  border-style: solid;
  border-width: 3px;
  border-color: ${0};
  border-radius: 50%;
  z-index: 2;
  margin-bottom: -60px;
  transform: rotate(352deg);
`), i.default.White, i.default.Black),
        y = s.default.img.attrs({
            src: (0, o.getAssetPath)("hand-drawn-trophy.svg")
        })(c || (c = m`
  height: 93px;
`)),
        b = (0, s.default)(l.HandDrawnDiv).attrs({
            className: "maxWidth flex flex-column vc medium-shadow"
        })(f || (f = m`
  padding: 30px;
  padding-top: 65px;
  background: ${0};
`), i.default.White),
        w = s.default.div(p || (p = m`
  font-size: 53px;
  font-weight: bold;
`)),
        j = s.default.div(h || (h = m`
  font-size: 24px;
`))
})), r.register("eh4jC", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = r("hxEiv"),
        o = r("5Z32P"),
        i = r("d1LT2"),
        s = r("iMOcM");
    r("fywoC");
    var l = r("2FDaO");
    let d, u, c, f, p, h, m = e => e;
    const g = e => (0, a.jsxs)(y, {
        children: [(0, a.jsxs)(b, {
            children: [(0, a.jsx)(w, {
                children: (0, s.numberToRank)(e.place)
            }), (0, a.jsx)(j, {
                children: e.name
            })]
        }), (0, a.jsx)(C, {
            children: (0, o.getMoney)(e.amount)
        })]
    });
    var x = e => (0, a.jsx)(v, {
        children: e.people.map(((e, t) => (0, a.jsx)(g, {
            name: e.name,
            amount: e.balance,
            place: t + 2
        }, `draw-leaderboard-${e.id}`)))
    });
    const v = l.default.div(d || (d = m`
  width: 90%;
  max-width: 780px;
`)),
        y = l.default.div.attrs({
            className: "flex vc maxWidth light-shadow"
        })(u || (u = m`
  justify-content: space-between;
  padding: 10px 20px;
  background: ${0};
  border-style: solid;
  border-color: ${0};
  border-width: 2px;
  border-radius: 4px;
  line-height: 1;
  margin-bottom: 10px;
`), i.default.White, i.default.Black),
        b = l.default.div.attrs({
            className: "flex vc"
        })(c || (c = m`
  margin-right: 20px;
`)),
        w = l.default.div.attrs({
            className: "flex hc vc"
        })(f || (f = m`
  height: 50px;
  width: 50px;
  border-style: solid;
  border-width: 2px;
  border-color: ${0};
  border-radius: 50%;
  font-size: 13px;
`), i.default.Black),
        j = l.default.div(p || (p = m`
  font-size: 21px;
  margin-left: 12px;
  font-weight: bold;
`)),
        C = l.default.div(h || (h = m`
  font-size: 18px;
`))
})), r.register("hb4so", (function(t, n) {
    e(t.exports, "default", (function() {
        return _
    }));
    var a = r("hxEiv"),
        o = r("93yIm"),
        i = r("fC6cp"),
        s = r("fBuQJ"),
        l = r("69SUA"),
        d = r("sgWtV"),
        u = r("d1LT2"),
        c = r("bbvHy"),
        f = r("VvPwO"),
        p = r("b1oE9"),
        h = r("iMOcM"),
        m = r("lpEVe"),
        g = r("fywoC"),
        x = r("2FDaO");
    let v, y, b, w, j, C, E, S, O, k, P, M = e => e;
    const D = e => {
        const [t, n] = g.useState(!1), [r, i] = g.useState(!1);
        return (0, a.jsxs)(T, {
            children: [(0, a.jsxs)(V, {
                children: [(0, a.jsxs)("div", {
                    children: [(0, a.jsx)(B, {
                        children: e.term
                    }), (0, a.jsx)(L, {
                        children: e.name
                    })]
                }), (0, a.jsx)(H, {
                    children: e.canPublish ? (0, a.jsx)(o.default, {
                        onClick: () => {
                            t || r || (n(!0), (0, h.request)({
                                url: "/api/v1/fun/draw-that/add",
                                method: "post",
                                data: {
                                    term: e.term,
                                    image: e.image
                                },
                                success: () => {
                                    i(!0)
                                },
                                error: () => (0, d.throwError)({
                                    title: "Error publishing"
                                }),
                                both: () => n(!1)
                            }))
                        },
                        type: "primary",
                        loading: t,
                        disabled: r,
                        children: r ? "Published" : "Publish"
                    }) : null
                })]
            }), (0, a.jsx)(W, {
                src: e.image
            })]
        })
    };
    var _ = (0, m.observer)((() => {
        const {
            draw: e
        } = g.useContext(f.default), t = (0, h.getUser)(), n = !(!t || (0, h.isStudent)(t) || !(0, h.isUpgraded)(t) || t.freeTrial && t.freeTrial.currentlyOnFreeTrial), r = (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(F, {
                children: "View drawings from your students down below!"
            }), (0, a.jsxs)(F, {
                children: ["Publish some drawings to our global", " ", (0, a.jsx)("a", {
                    href: p.DRAW_THAT_GALLERY,
                    target: "_blank",
                    children: (0, a.jsx)("b", {
                        children: "Draw That Art Gallery!"
                    })
                })]
            }), (0, a.jsx)(F, {
                children: "While their name will not be shared, please get the drawer's permission before publishing to the gallery."
            })]
        }), l = (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(F, {
                children: "View drawings from your students down below!"
            }), (0, a.jsxs)(F, {
                children: ["Checkout our", " ", (0, a.jsx)("a", {
                    href: p.DRAW_THAT_GALLERY,
                    target: "_blank",
                    children: (0, a.jsx)("b", {
                        children: "Draw That Art Gallery"
                    })
                }), " ", "to view drawings from classes around the world!"]
            }), (0, a.jsx)(F, {
                children: "For safety purposes, only paying subscribers can contribute art to the gallery."
            })]
        });
        return (0, a.jsxs)(s.default, {
            open: e.drawingsModalOpen,
            closable: !0,
            onCancel: () => {
                e.drawingsModalOpen = !1
            },
            style: {
                top: 20,
                fontFamily: c.default.fontFamilyName,
                color: u.default.Black
            },
            footer: null,
            children: [(0, a.jsxs)(A, {
                children: [(0, a.jsx)(N, {}), (0, a.jsx)(I, {
                    children: "Drawings"
                }), (0, a.jsx)(R, {
                    children: n ? r : l
                }), (0, a.jsx)(o.default, {
                    block: !0,
                    type: "primary",
                    target: "_blank",
                    href: p.DRAW_THAT_GALLERY,
                    children: "Visit Draw That Art Gallery"
                })]
            }), (0, a.jsx)(i.default, {}), e.drawingHistory.map(((e, t) => (0, a.jsx)(D, {
                image: e.image,
                name: e.name,
                term: e.term,
                canPublish: n
            }, `drawing-history-${e.index}`)))]
        })
    }));
    const T = x.default.div.attrs({
            className: "maxWidth flex flex-column vc"
        })(v || (v = M`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0px;
  }
`)),
        A = x.default.div.attrs({
            className: "maxWidth flex flex-column vc"
        })(y || (y = M`
  background: #fff3e0;
  padding: 20px;
  border-radius: 5px;
`)),
        N = x.default.img.attrs({
            src: "/client/img/drawThat/art-gallery.svg"
        })(b || (b = M`
  height: 65px;
`)),
        I = x.default.div(w || (w = M`
  font-size: 30px;
  margin-top: 6px;
  font-weight: ${0};
`), l.FontWeights.Bold),
        R = x.default.ul(j || (j = M`
  margin-top: 4px;
  font-size: 14px;
  li {
    margin-bottom: 5px;
  }
`)),
        F = x.default.li(C || (C = M`
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`)),
        V = x.default.div.attrs({
            className: "maxWidth flex vc"
        })(E || (E = M`
  justify-content: space-between;
  margin-bottom: 10px;
`)),
        H = x.default.div(S || (S = M`
  margin-left: 15px;
`)),
        B = x.default.div(O || (O = M`
  font-size: 22px;
  font-weight: ${0};
`), l.FontWeights.Bold),
        L = x.default.div(k || (k = M`
  font-size: 14px;
  opacity: 0.7;
`)),
        W = x.default.img.attrs({
            className: "maxWidth"
        })(P || (P = M`
  border: 2px solid #e8e8e8;
  border-radius: 4px;
`))
})), r.register("1C9tr", (function(t, n) {
    e(t.exports, "default", (function() {
        return j
    }));
    var a = r("hxEiv"),
        o = r("lKmIF"),
        i = r("69SUA"),
        s = r("fucqw"),
        l = r("VvPwO"),
        d = r("iMOcM"),
        u = r("6vbUb"),
        c = r("lpEVe"),
        f = r("fywoC"),
        p = r("2FDaO"),
        h = r("iNMOL"),
        m = r("2RzCw"),
        g = r("2iGhO"),
        x = r("3Bqqk");
    let v, y, b, w = e => e;
    var j = (0, c.observer)((() => {
        const {
            players: {
                players: e
            }
        } = f.useContext(l.default);
        f.useEffect((() => {
            s.default.pardy.countdown.stop(), s.default.pardy.music.fade(s.default.pardy.music.volume(), 0, 400), s.default.pardy.finaleMusic.fade(s.default.pardy.finaleMusic.volume(), 0, 400)
        }), []);
        const [t, n] = (0, d.useBoolean)(!(e.length >= 2));
        return (0, a.jsx)(C, {
            children: (0, a.jsx)(m.default, {
                children: (0, a.jsxs)(E, {
                    children: [(0, a.jsx)(h.default, {}), (0, a.jsx)(S, {
                        children: t ? (0, a.jsx)(g.default, {}) : (0, a.jsx)(x.default, {
                            setToLeaderboardScreen: n
                        })
                    })]
                })
            })
        })
    }));
    const C = p.default.div.attrs({
            className: "flex"
        })(v || (v = w`
  flex: 1;
  background: ${0};
  font-family: 'Londrina Solid', cursive;
  font-weight: ${0};
  overflow: hidden;
`), o.default.Black, i.FontWeights.Light),
        E = (0, p.default)(u.motion.div).attrs({
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: 1.4
            },
            className: "flex flex-column maxAll"
        })(y || (y = w`
  overflow: hidden;
`)),
        S = p.default.div(b || (b = w`
  flex: 1;
  overflow: hidden;
`))
})), r.register("2iGhO", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("iPNro"),
        i = r("2FDaO"),
        s = r("6vbUb");
    let l;
    var d = () => (0, a.jsx)(u, {
        initial: {
            x: "100%"
        },
        animate: {
            x: "0%"
        },
        transition: {
            duration: .6,
            ease: "easeOut"
        },
        children: (0, a.jsx)(o.default, {})
    });
    const u = (0, i.default)(s.motion.div).attrs({
        className: "maxAll"
    })(l || (l = (e => e)``))
})), r.register("3Bqqk", (function(n, a) {
    e(n.exports, "default", (function() {
        return D
    }));
    var o = r("hxEiv"),
        i = r("fC6cp"),
        s = r("69SUA"),
        l = r("fywoC"),
        d = r("2FDaO"),
        u = r("ZdUON"),
        c = r("5Z32P"),
        f = r("2RhIb"),
        p = r("4mnoM"),
        h = r("6vbUb"),
        m = r("lpEVe"),
        g = r("VvPwO"),
        x = r("auTQy"),
        v = r("cmvpZ"),
        y = r("fucqw"),
        b = r("iT5gE"),
        w = r("gb7nw");
    let j, C, E, S, O, k, P = e => e;
    const M = e => (0, o.jsxs)(A, {
        style: {
            background: e.isWinner ? "#005005" : "rgba(0, 0, 0, 0.6)"
        },
        className: e.isWinner ? "animated tada" : "",
        children: [(0, o.jsxs)(N, {
            children: ["Contestant ", e.contestantType]
        }), (0, o.jsx)(I, {
            children: e.contestantName
        }), (0, o.jsx)(i.default, {
            style: {
                margin: "12px 0px"
            }
        }), (0, o.jsx)(R, {
            children: (0, o.jsx)(t(u), {
                start: 0,
                end: e.balance,
                formattingFn: c.getMoney,
                duration: 6.5,
                delay: 1.8,
                onEnd: e.handleCountEnd
            })
        })]
    });
    var D = (0, m.observer)((e => {
        const {
            players: {
                players: n
            }
        } = l.useContext(g.default), [r, a] = l.useState(!1), i = l.useMemo((() => {
            const e = (0, x.leaderboardSorter)(n),
                t = [];
            return e[0] && t.push(e[0]), e[1] && t.push(e[1]), (0, v.shuffle)(t)
        }), []);
        l.useEffect((() => {
            i && 2 === i.length || e.setToLeaderboardScreen()
        }), [i]), l.useEffect((() => {
            setTimeout((() => {
                (0, c.playSound)(y.default.pardy.drumRoll, {
                    volume: .7
                })
            }), 1e3)
        }), []);
        if (!i || 2 !== i.length) return null;
        const s = i[0].balance > i[1].balance;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(_, {
                initial: {
                    y: "100%",
                    x: "0"
                },
                animate: {
                    y: "0%",
                    x: r ? "-100%" : "0%"
                },
                transition: {
                    delay: r ? 2.3 : .5,
                    duration: r ? .6 : 1.2,
                    ease: r ? "easeIn" : "easeOut"
                },
                onAnimationComplete: () => {
                    r && e.setToLeaderboardScreen()
                },
                children: (0, o.jsx)(w.default, {
                    children: (0, o.jsxs)(T, {
                        children: [(0, o.jsx)(M, {
                            contestantType: "A",
                            contestantName: i[0].name,
                            balance: i[0].balance,
                            handleCountEnd: () => {
                                (0, c.playSound)(y.default.celebrate, {}), setTimeout((() => {
                                    (0, c.musicIsOn)() && y.default.pardy.music.fade(y.default.pardy.music.volume(), b.default.musicVolume, 1e3)
                                }), 1e3), a(!0), setTimeout((() => {
                                    (0, c.playSound)(y.default.pardy.swoosh, {})
                                }), 2e3)
                            },
                            isWinner: !!r && s
                        }), (0, o.jsx)(M, {
                            contestantType: "B",
                            contestantName: i[1].name,
                            balance: i[1].balance,
                            isWinner: !!r && !s
                        })]
                    })
                })
            }), (0, o.jsx)(p.ConfettiContainer, {
                children: (0, o.jsx)(t(f), {
                    active: r,
                    config: p.confettiConfig
                })
            })]
        })
    }));
    const _ = (0, d.default)(h.motion.div).attrs({
            className: "maxAll"
        })(j || (j = P``)),
        T = d.default.div.attrs({
            className: "flex-center maxAll"
        })(C || (C = P`
  padding: 30px;
`)),
        A = d.default.div.attrs({
            className: "medium-shadow"
        })(E || (E = P`
  border: 3px solid;
  border-radius: 6px;
  padding: 25px;
  width: 350px;
  margin: 10px;
  flex-shrink: 0;
  animation-duration: 1.4s;
  transition: background 0.8s;
`)),
        N = d.default.div(S || (S = P`
  font-style: italic;
  text-transform: uppercase;
  font-size: 18px;
`)),
        I = d.default.div(O || (O = P`
  font-size: 32px;
  font-weight: ${0};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`), s.FontWeights.Normal),
        R = d.default.div(k || (k = P`
  font-size: 32px;
`))
})), r.register("gb7nw", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("2FDaO"),
        s = r("56tQE");
    let l, d, u, c = e => e;
    var f = e => {
        const t = o.useRef(null),
            [n, r] = (0, s.default)(t),
            i = Math.min(n / 800, r / 450);
        let l = 450 * i;
        isNaN(l) && (l = 0);
        let d = 800 * i;
        return isNaN(d) && (d = 0), (0, a.jsx)(p, {
            ref: t,
            children: (0, a.jsx)(h, {
                style: {
                    height: l,
                    width: d
                },
                children: (0, a.jsx)(m, {
                    style: {
                        transform: `scale(${i})`
                    },
                    children: e.children
                })
            })
        })
    };
    const p = i.default.div(l || (l = c`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        h = i.default.div(d || (d = c``)),
        m = i.default.div(u || (u = c`
  height: ${0}px;
  width: ${0}px;
  transform-origin: top left;
  display: flex;
  justify-content: center;
  align-items: center;
`), 450, 800)
})), r.register("3Oq7q", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = r("hxEiv"),
        o = r("9Mv96"),
        i = r("lKmIF"),
        s = r("VvPwO"),
        l = r("bi8Zx"),
        d = r("iMOcM"),
        u = r("lpEVe"),
        c = r("fywoC"),
        f = r("2FDaO"),
        p = r("5Z32P"),
        h = r("hRUCU"),
        m = r("28BAV");
    let g;
    var x = (0, u.observer)((() => {
        const {
            engine: e,
            gameValues: t,
            metadata: n
        } = c.useContext(s.default), r = (0, p.getQueryVariable)("id"), [u, f] = (0, d.useBoolean)(!1);
        return c.useEffect((() => {
            (0, m.default)(r, {
                onSuccess: () => {
                    f(), (0, h.default)()
                },
                onError: e => {
                    e && e.message && e.message.text ? t.roomIntentErrorMessage = e.message.text : t.roomIntentErrorMessage = "There was an error. Please refresh and try again."
                }
            })
        }), []), c.useEffect((() => {
            e.joinedRoom && u && n.hasReceivedHostStaticState && (t.currentRoute = l.GameStatus.join)
        }), [u, e.joinedRoom, n.hasReceivedHostStaticState]), (0, a.jsx)(v, {
            children: (0, a.jsx)(o.default, {
                style: {
                    color: i.default.White
                },
                size: 84
            }, "setup-loader")
        })
    }));
    const v = f.default.div.attrs({
        className: "maxAll flex-center flex-column"
    })(g || (g = (e => e)`
  color: ${0};
`), i.default.White)
})), r.register("9Mv96", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("kqQIs"),
        o = r("2Af7I"),
        i = r("fywoC");
    r("djNMu");
    var s = r("aWdbz"),
        l = r("cY4lv"),
        d = r("kYx4h"),
        u = 44;

    function c(e) {
        var t, n, r;
        return t = e, n = 0, r = 1, e = (Math.min(Math.max(n, t), r) - n) / (r - n), e = (e -= 1) * e * e + 1
    }
    var f = i.forwardRef((function(e, t) {
            var n, r = e.classes,
                l = e.className,
                f = e.color,
                p = void 0 === f ? "primary" : f,
                h = e.disableShrink,
                m = void 0 !== h && h,
                g = e.size,
                x = void 0 === g ? 40 : g,
                v = e.style,
                y = e.thickness,
                b = void 0 === y ? 3.6 : y,
                w = e.value,
                j = void 0 === w ? 0 : w,
                C = e.variant,
                E = void 0 === C ? "indeterminate" : C,
                S = (0, o.default)(e, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                O = {},
                k = {},
                P = {};
            if ("determinate" === E || "static" === E) {
                var M = 2 * Math.PI * ((u - b) / 2);
                O.strokeDasharray = M.toFixed(3), P["aria-valuenow"] = Math.round(j), "static" === E ? (O.strokeDashoffset = "".concat(((100 - j) / 100 * M).toFixed(3), "px"), k.transform = "rotate(-90deg)") : (O.strokeDashoffset = "".concat((n = (100 - j) / 100, n * n * M).toFixed(3), "px"), k.transform = "rotate(".concat((270 * c(j / 70)).toFixed(3), "deg)"))
            }
            return i.createElement("div", (0, a.default)({
                className: (0, s.default)(r.root, l, "inherit" !== p && r["color".concat((0, d.default)(p))], {
                    indeterminate: r.indeterminate,
                    static: r.static
                } [E]),
                style: (0, a.default)({
                    width: x,
                    height: x
                }, k, v),
                ref: t,
                role: "progressbar"
            }, P, S), i.createElement("svg", {
                className: r.svg,
                viewBox: "".concat(22, " ").concat(22, " ").concat(u, " ").concat(u)
            }, i.createElement("circle", {
                className: (0, s.default)(r.circle, m && r.circleDisableShrink, {
                    indeterminate: r.circleIndeterminate,
                    static: r.circleStatic
                } [E]),
                style: O,
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
})), r.register("bi8Zx", (function(t, n) {
    let r;
    var a;
    let o;
    var i;
    let s;
    var l;
    let d;
    var u;
    let c;
    var f;
    e(t.exports, "GameStatus", (function() {
        return s
    })), (a = r || (r = {})).multipleChoice = "mc", a.textInput = "text", (i = o || (o = {})).public = "public", i.private = "private", (l = s || (s = {})).setup = "setup", l.join = "join", l.teams = "teams", l.gameplay = "gameplay", l.results = "results", (u = d || (d = {})).classic = "classic", u.team = "team", (f = c || (c = {})).time = "time", f.race = "race", f.allIn = "allIn"
})), r.register("hRUCU", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("132uD");
    var o = () => {
        (0, a.default)().then().catch((e => !1))
    }
})), r.register("132uD", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("5Z32P"),
        o = r("9HBXY"),
        i = r("eOG2a"),
        s = r("iMOcM");
    var l = async () => {
        try {
            const e = await (0, o.default)();
            await (0, i.default)({
                createOptions: {
                    serverUrl: e.serverUrl,
                    roomType: "LiveGame",
                    options: {
                        intentId: (0, a.getQueryVariable)("id"),
                        authToken: (0, s.isLoggedIn)() ? (0, s.getUser)().token : ""
                    }
                }
            })
        } catch (e) {
            console.log({
                errorCreatingGame: e
            })
        }
    }
})), r.register("9HBXY", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("fIZtR"),
        o = r("iMOcM"),
        i = r("j2XHK");
    var s = async () => {
        try {
            a.default.engine.findingServerForGame = !0;
            let e = "";
            try {
                const t = await new Promise(((e, t) => {
                    (0, o.request)({
                        url: "/api/matchmaker/find-server-to-host-game",
                        data: {
                            source: i.ExperienceSource.original
                        },
                        success: t => {
                            e(t)
                        },
                        error: e => {
                            t(e)
                        }
                    })
                }));
                if (!t || !t.url) throw "No server response";
                e = t.url
            } catch (e) {
                throw a.default.engine.errorFindingServerForGame = !0, a.default.engine.findingServerForGame = !1, e
            }
            if (a.default.engine.findingServerForGame = !1, !e) throw new Error("No Server URL");
            return {
                serverUrl: e
            }
        } catch (e) {
            throw e
        }
    }
})), r.register("eOG2a", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("91OQF"),
        o = r("fIZtR"),
        i = r("9E5VH");
    var s = e => {
        const {
            joinOptions: t,
            createOptions: n
        } = e;
        if (!t && !n) return;
        const r = () => {
            o.default.engine.attemptingToConnect = !1, o.default.engine.hasConnected = !1, o.default.engine.connected = !1, o.default.engine.connectionError = !1, o.default.engine.joinedRoom = !1, o.default.engine.attemptingToJoinRoom = !1, o.default.engine.errorJoiningRoom = !1, o.default.engine.roomError = null
        };
        r(), o.default.engine.attemptingToConnect = !0;
        const s = new(0, a.Client)(t ? t.serverUrl : n.serverUrl, {
                transports: ["websocket"],
                clientIdSuffix: "-host"
            }),
            l = s.onConnectError.add((t => {
                console.log({
                    connectionError: t
                }), e.onConnectError && e.onConnectError(t), e.disposeOnError && r(), o.default.engine.connectionError = !0, o.default.engine.attemptingToConnect = !1
            }));
        s.onConnect.add((() => {
            l(), o.default.engine.client = s, o.default.engine.connected = !0, o.default.engine.hasConnected = !0, o.default.engine.attemptingToConnect = !1, o.default.engine.attemptingToJoinRoom = !0, s.onConnectError.add((() => {
                o.default.engine.connectionError = !0
            })), s.onConnect.add((() => {
                o.default.engine.connected = !0, o.default.engine.connectionError = !1, o.default.engine.attemptingToConnect = !1, o.default.engine.attemptingToJoinRoom = !0
            })), s.onReconnect.add((() => {
                o.default.engine.connected = !0, o.default.engine.connectionError = !1, o.default.engine.attemptingToConnect = !1, o.default.engine.attemptingToJoinRoom = !0
            })), o.default.engine.attemptingToJoinRoom = !0;
            const a = t ? s.joinRoom(t.roomId, t.options) : s.createRoom(n.roomType, n.options);
            a.onJoinAttempt.add((() => {
                o.default.engine.attemptingToJoinRoom = !0
            })), a.onJoinError.add((t => {
                console.log({
                    roomJoinError: t
                }), e.onRoomJoinError && e.onRoomJoinError(t), o.default.engine.roomError = t, o.default.engine.errorJoiningRoom = !0, o.default.engine.attemptingToJoinRoom = !1
            }));
            const d = a.onJoinError.add((() => {
                e.disposeOnError && r()
            }));
            a.onJoin.add((() => {
                (0, i.default)(a), e.onRoomJoin && e.onRoomJoin()
            }), !0), a.onJoin.add((() => {
                d(), o.default.engine.joinedRoom = !0, o.default.engine.attemptingToJoinRoom = !1, o.default.engine.game || (o.default.engine.game = a)
            })), a.onLeave.add((() => {
                o.default.engine.joinedRoom = !1
            }))
        }), !0), s.onDisconnect.add((() => {
            o.default.engine.attemptingToConnect = !0, o.default.engine.connected = !1, e.onDisconnect && e.onDisconnect()
        }))
    }
})), r.register("9E5VH", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var a = r("fBuQJ"),
        o = r("fucqw"),
        i = r("5Z32P"),
        s = r("fIZtR"),
        l = r("7oJsD"),
        d = r("dor0E"),
        u = r("lFZAu"),
        c = r("eZwx5"),
        f = r("dfjlR"),
        p = r("e7E1T"),
        h = r("iMOcM");
    const m = e => {
        o.default[e] && Object.keys(o.default[e]).forEach((t => {
            o.default[e][t] && o.default[e][t].load && o.default[e][t].load()
        }))
    };
    var g = e => {
        const t = f.default.map((e => e()));
        e.onMessage.add(((n, r) => {
            const u = {
                action: n,
                payload: r
            };
            if (u.action !== l.default.stateUpdate)
                if (u.action !== l.default.viewableGameCode) {
                    if (u.action === l.default.hostStaticState) {
                        if (s.default.metadata.hasReceivedHostStaticState) return;
                        return Object.keys(r.options || {}).forEach((e => {
                            s.default.gameOptions[e] = r.options[e]
                        })), s.default.gameValues.availableThemes.replace(r.themes), s.default.gameValues.gameCode = r.gameCode, Object.keys(o.default).forEach((e => {
                            o.default[e] && o.default[e].load && o.default[e].load()
                        })), (0, i.inImposterMode)() && m("imposter"), (0, i.inThanosMode)() && m("thanos"), (0, i.inLavaMode)() && m("lava"), (0, i.inBossBattleMode)() && m("bossBattle"), (0, i.inDrawMode)() && (m("draw"), (0, h.loadFont)("https://fonts.googleapis.com/css2?family=Pangolin&display=swap")), (0, i.inPardyMode)() && ((0, h.loadFont)("https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap"), m("pardy")), (0, p.default)(e), void(s.default.metadata.hasReceivedHostStaticState = !0)
                    }
                    if (u.action !== l.default.newActivityItem)
                        if (u.action !== l.default.newPlayerStats)
                            if (u.action !== l.default.specialSongPlayed)
                                if (u.action !== l.default.updatedPlayerLeaderboard)
                                    if (u.action !== l.default.updatedTeamLeaderboard)
                                        if (u.action !== l.default.clapCount)
                                            if (u.action !== l.default.thanosResults)
                                                if (u.action !== l.default.defendingHomebases) {
                                                    if (u.action === l.default.defendingHomebaseResults) return s.default.gameValues.defendingHomebaseResults = r, void(0, i.endGame)(!0);
                                                    if (u.action !== l.default.playAgainIntentId)
                                                        if (u.action === l.default.errorModal && a.default.error({
                                                                title: r.title,
                                                                content: r.content
                                                            }), u.action !== l.default.setReportId) {
                                                            if (u.action !== l.default.lavaResults) return u.action === l.default.imposter.quickStats ? (s.default.imposter.impostersLeft = r.impostersLeft, s.default.imposter.meetingsLeft = r.meetingsLeft, void(s.default.imposter.investigationsLeft = r.investigationsLeft)) : void(u.action !== l.default.imposter.people ? u.action !== l.default.imposter.meetingResults ? u.action !== l.default.imposter.callAMeeting ? u.action !== l.default.imposter.voteCount ? u.action !== l.default.draw.line ? u.action !== l.default.draw.feedItem ? u.action !== l.default.draw.personCount ? u.action !== l.default.draw.pointAdditions || s.default.draw.pointAdditions.replace(r) : s.default.draw.personCount = r : s.default.draw.latestFeedItem = r : s.default.draw.latestLine = r : s.default.imposter.votes = r : (0, c.default)() : s.default.imposter.meetingResults = r : s.default.imposter.people.replace(r));
                                                            s.default.entities.lava = r
                                                        } else s.default.gameValues.reportId = r.reportId;
                                                    else window.location.href = `/host?id=${r}`
                                                } else s.default.entities.defendingHomebase.replace(r);
                    else s.default.gameValues.thanosValues = r;
                    else s.default.gameValues.clapCount = r;
                    else "final" === r.key ? s.default.players.finalResults.replace(r.items) : s.default.players.teams.replace(r.items);
                    else "final" === r.key ? s.default.players.finalResults.replace(r.items) : s.default.players.players.replace(r.items);
                    else {
                        if (!r.audioFile || !r.background) return;
                        (0, i.startSpecialSong)(r.audioFile, r.background)
                    } else s.default.stats.playerStats.push(u.payload);
                    else(0, i.addActivityItem)(u.payload)
                } else s.default.gameValues.gameCode = r;
            else(0, d.default)(r.type, r.value, t)
        })), (0, u.default)(e)
    }
})), r.register("7oJsD", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        hostClientIdRecieved: "HOST_CLIENT_ID_RECIEVED",
        updatedPlayerLeaderboard: "UPDATED_PLAYER_LEADERBOARD",
        updatedTeamLeaderboard: "UPDATED_TEAM_LEADERBOARD",
        newActivityItem: "NEW_ACTIVITY_ITEM",
        toast: "TOAST",
        newCollabQuestion: "NEW_COLLAB_QUESTION",
        collabQuestionRejected: "COLLAB_QUESTION_REJECTED",
        newPlayerStats: "NEW_PLAYER_STATS",
        specialSongPlayed: "SPECIAL_SONG_PLAYED",
        nonDismissMessage: "NON_DISMISS_MESSAGE",
        hostStaticState: "HOST_STATIC_STATE",
        playerJoinsStaticState: "PLAYER_JOINS_STATIC_STATE",
        stateUpdate: "STATE_UPDATE",
        clapCount: "CLAP_COUNT",
        thanosResults: "THANOS_RESULTS",
        balanceFlashRed: "BALANCE_FLASH_RED",
        deflected: "DEFLECTED",
        enablePowerupRNGAnimation: "ENABLE_POWERUP_RNG_ANIMATION",
        defendingHomebases: "DEFENDING_HOMEBASES",
        availableHomebaseUpgrades: "AVAILABLE_HOMEBASE_UPGRADES",
        defendingHomebaseStatus: "DEFENDING_HOMEBASE_STATUS",
        defendingHomebaseResults: "DEFENDING_HOMEBASE_RESULTS",
        viewableGameCode: "VIEWABLE_GAME_CODE",
        playAgainIntentId: "PLAY_AGAIN_INTENT_ID",
        errorModal: "ERROR_MODAL",
        setReportId: "SET_REPORT_ID",
        availableLavaUpgrades: "AVAILABLE_LAVA_UPGRADES",
        lavaResults: "LAVA_RESULTS",
        successModalInfo: "SUCCESS_MODAL_INFO",
        imposter: {
            people: "IMPOSTER_MODE_PEOPLE",
            meetingResults: "IMPOSTER_MODE_MEETING_RESULTS",
            quickStats: "IMPOSTER_MODE_QUICK_STATS",
            callAMeeting: "IMPOSTER_MODE_CALL_A_MEETING",
            voteCount: "IMPOSTER_MODE_VOTE_IN_COUNT"
        },
        draw: {
            line: "DRAW_MODE_LINE",
            feedItem: "DRAW_MODE_FEED_ITEM",
            personCount: "DRAW_MODE_PERSON_COUNT",
            pointAdditions: "DRAW_MODE_POINT_ADDITIONS",
            clear: "DRAW_MODE_CLEAR"
        }
    }
})), r.register("dor0E", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fIZtR"),
        o = r("jQXWl");
    var i = (e, t, n) => {
        if (e === o.default.gameStatus) return void(a.default.gameValues.currentRoute !== t && (a.default.gameValues.currentRoute = t));
        const r = n.find((t => t.key === e));
        r && r.listener.applyPatches(t)
    }
})), r.register("jQXWl", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        playerQuestionList: "PLAYER_QUESTION_LIST",
        playerQuestionListIndex: "PLAYER_QUESTION_LIST_INDEX",
        gameQuestions: "GAME_QUESTIONS",
        purchasedPowerups: "PURCHASED_POWERUPS",
        usedPowerups: "USED_POWERUPS",
        personalActivePowerups: "PERSONAL_ACTIVE_POWERUPS",
        balance: "BALANCE",
        balanceChange: "BALANCE_CHANGE",
        name: "NAME",
        group: "GROUP",
        theme: "THEME",
        purchasedThemes: "PURCHASED_THEMES",
        upgradeLevels: "UPGRADE_LEVELS",
        upgradePricingDiscount: "UPGRADE_PRICING_DISCOUNT",
        gameStatus: "GAME_STATUS",
        incomeMultiplier: "INCOME_MULTIPLIER",
        teamActivePowerups: "TEAM_ACTIVE_POWERUPS",
        linkInfo: "LINK_INFO",
        teamInfo: "TEAM_INFO",
        maxBalance: "MAX_BALANCE",
        disabledPowerups: "DISABLED_POWERUPS",
        fullScreenPlayerBlack: "FULL_SCREEN_PLAYER_BLACK",
        screenAttack: "SCREEN_ATTACK",
        streakAmount: "STREAK_AMOUNT",
        appliedPowerups: "APPLIED_POWERUPS",
        teamAppliedPowerups: "TEAM_APPLIED_POWERUPS",
        imposter: {
            status: "IMPOSTER_MODE_STATUS",
            remainingInvestigations: "IMPOSTER_MODE_REMAINING_INVESTIGATIONS",
            remainingMeetings: "IMPOSTER_MODE_REMAINING_MEETINGS",
            remainingImposters: "IMPOSTER_MODE_REMAINING_IMPOSTERS",
            person: "IMPOSTER_MODE_PERSON",
            shopItems: "IMPOSTER_MODE_SHOP_ITEMS"
        },
        draw: {
            round: "DRAW_MODE_ROUND",
            person: "DRAW_MODE_PERSON",
            status: "DRAW_MODE_STATUS"
        },
        pardy: {
            state: "PARDY_MODE_STATE",
            person: "PARDY_MODE_PERSON"
        }
    }
})), r.register("lFZAu", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("5Z32P"),
        o = r("fIZtR"),
        i = r("j2XHK"),
        s = r("h1Mb4");
    const l = e => {
        const t = o.default.gameValues.currentRoute;
        if (t === i.GameStatus.join) return e.send(s.default.requestPlayerLeaderboard), void setTimeout((() => l(e)), 1e3);
        if (t === i.GameStatus.teams) return e.send(s.default.requestTeamLeaderboard), void setTimeout((() => l(e)), 4700);
        if (t === i.GameStatus.gameplay) {
            if ((0, a.inLavaMode)()) return;
            return (0, a.inImposterMode)() ? e.send(s.default.imposter.requestPeople) : (0, a.inZombiesVsHumansMode)() ? e.send(s.default.requestDefendingHomebase) : (0, a.inTeamMode)() ? e.send(s.default.requestTeamLeaderboard) : e.send(s.default.requestPlayerLeaderboard), void setTimeout((() => l(e)), 2500)
        }
        t !== i.GameStatus.results && setTimeout((() => l(e)), 1e3)
    };
    var d = l
})), r.register("dfjlR", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    })), r("d8ak9");
    var a = r("6o1OW"),
        o = r("ekja3");
    r("ewufp");
    var i = r("l4Q3s");
    var s = [a.default, o.default, i.default]
})), r.register("d8ak9", (function(t, n) {
    e(t.exports, "Round", (function() {
        return r("6o1OW").default
    })), e(t.exports, "Status", (function() {
        return r("ekja3").default
    }));
    r("6o1OW"), r("ekja3")
})), r.register("6o1OW", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("fIZtR"),
        o = r("77bLH"),
        i = r("jQXWl");
    const s = ["secondsLeft", "term", "drawer", "drawingBase64", "revealText"];
    var l = () => {
        const e = new(0, o.default);
        return s.forEach((t => {
            e.onPropChange(t, (e => {
                a.default.draw.round[t] = e
            }))
        })), {
            key: i.default.draw.round,
            listener: e
        }
    }
})), r.register("ekja3", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("fIZtR"),
        o = r("77bLH"),
        i = r("jQXWl");
    var s = () => {
        const e = new(0, o.default);
        return e.onPropChange("value", (e => {
            a.default.draw.status = e
        })), {
            key: i.default.draw.status,
            listener: e
        }
    }
})), r.register("ewufp", (function(t, n) {
    e(t.exports, "PardyState", (function() {
        return r("l4Q3s").default
    }));
    r("l4Q3s")
})), r.register("l4Q3s", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("fIZtR"),
        o = r("77bLH"),
        i = r("jQXWl");
    const s = ["board", "powers", "finaleQuestionId", "playerCount", "betsPlaced", "playersAnswered", "playersAnsweredCorrectly", "nameOfFirstPlayerToAnswerCorrectly"];
    var l = () => {
        const e = new(0, o.default);
        return s.forEach((t => {
            e.onPropChange(t, (e => {
                "powers" === t ? a.default.pardy.powers.replace(e) : a.default.pardy[t] = e
            }))
        })), {
            key: i.default.pardy.state,
            listener: e
        }
    }
})), r.register("e7E1T", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("5Z32P"),
        o = r("4MuSt"),
        i = r("fIZtR"),
        s = r("h1Mb4"),
        l = r("j2XHK");
    var d = e => {
        (0, o.reaction)((() => i.default.gameValues.currentRoute), (t => {
            l.GameStatus.gameplay, e.send(s.default.newGameStatus, t)
        })), (0, a.inImposterMode)() && (0, o.reaction)((() => i.default.imposter.status), (t => e.send(s.default.imposter.status, t))), (0, a.inPardyMode)() && ((0, o.reaction)((() => i.default.pardy.currentRound), (t => {
            e.send(s.default.pardy.setNewRoundDetails, t)
        })), (0, o.reaction)((() => i.default.pardy.screen), (t => {
            e.send(s.default.pardy.setScreen, t)
        })), (0, o.reaction)((() => i.default.pardy.questionScreen), (t => {
            e.send(s.default.pardy.setQuestionScreen, t)
        })), (0, o.reaction)((() => i.default.pardy.questionStatus), (t => {
            e.send(s.default.pardy.setQuestionStatus, t)
        })))
    }
})), r.register("28BAV", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("iMOcM"),
        o = r("fIZtR");
    var i = (e, t) => {
        (0, a.request)({
            url: `/api/matchmaker/intent/live-game/summary/${e}`,
            success: e => {
                o.default.kit.questions = e.questions, o.default.metadata.currentGameIsUsingGroups = !!e.usingGroups, t.onSuccess && t.onSuccess()
            },
            error: e => {
                t.onError && t.onError(e)
            }
        })
    }
})), r.register("l2N87", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("h1Mb4"),
        l = r("5Z32P"),
        d = r("lpEVe"),
        u = r("fywoC"),
        c = r("2FDaO"),
        f = r("cOOKZ"),
        p = r("9Lpzj"),
        h = r("huU7t"),
        m = r("9QpG8");
    let g;
    const x = c.default.div(g || (g = (e => e)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`));
    let v = class extends u.Component {
        componentDidMount() {
            (0, l.inBossBattleMode)() ? this.makeBossBattleTeams(): this.makeTeams(!0)
        }
        render() {
            const e = !(0, l.inBossBattleMode)();
            return this.props.ui.showingBossPreScreen ? (0, i.jsx)(f.default, {}) : this.props.ui.showingHumansVsZombiesPreScreen ? (0, i.jsx)(p.default, {}) : (0, i.jsxs)(x, {
                children: [(0, i.jsx)(h.default, {
                    reshuffle: e ? this.makeTeams : null
                }), (0, i.jsx)(m.default, {})]
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "makeBossBattleTeams", (() => {
                this.props.engine.game.send(s.default.makeTeams, {
                    boss: this.props.gameValues.bossId
                })
            })), (0, a.default)(this, "makeTeams", (e => {
                this.props.engine.game.send(s.default.makeTeams)
            }))
        }
    };
    v = (0, o.__decorate)([(0, d.inject)("engine", "gameOptions", "gameValues", "ui"), d.observer], v);
    var y = v
})), r.register("cOOKZ", (function(n, a) {
    e(n.exports, "default", (function() {
        return j
    }));
    var o = r("divCp"),
        i = r("kHqmx"),
        s = r("hxEiv"),
        l = r("4mnoM"),
        d = r("fucqw"),
        u = r("lpEVe"),
        c = r("fywoC"),
        f = r("2RhIb"),
        p = r("2FDaO"),
        h = r("j2XHK"),
        m = r("5Z32P"),
        g = r("iMOcM");
    let x, v, y, b = e => e;
    let w = class extends c.Component {
        componentDidMount() {
            (0, g.loadFont)("https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap"), (0, m.playSound)(d.default.bossBattle.getAmped, {
                volume: .45,
                onPlay: () => {
                    this.startGame()
                },
                onError: () => this.startGame()
            })
        }
        render() {
            return (0, s.jsx)(E, {
                children: (0, s.jsxs)(S, {
                    children: [(0, s.jsx)(l.ConfettiContainer, {
                        children: (0, s.jsx)(t(f), {
                            config: l.confettiConfig,
                            active: this.state.confettiActive
                        })
                    }), (0, s.jsx)(t(f), {
                        config: l.confettiConfig,
                        active: this.state.confettiActive
                    }), this.state.content]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                content: "",
                confettiActive: !1
            }), (0, o.default)(this, "getStages", (() => [{
                content: "",
                delay: 697
            }, {
                content: (0, s.jsx)("div", {
                    children: "Are You Ready..."
                }),
                delay: 2470
            }, {
                content: (0, s.jsx)("div", {
                    children: "To Battle..."
                }),
                delay: 2470
            }, {
                content: (0, s.jsx)("div", {
                    children: "The Biggest..."
                }),
                delay: 1300
            }, {
                content: (0, s.jsx)("div", {
                    children: "Baddest..."
                }),
                delay: 1100
            }, {
                content: (0, s.jsx)("div", {
                    children: "Boss"
                }),
                delay: 1200
            }, {
                content: (0, s.jsx)("div", {
                    children: "Ever?"
                }),
                delay: 1300
            }, {
                content: (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("div", {
                        style: {
                            zoom: 1.6
                        },
                        children: this.getBossName()
                    }), (0, s.jsx)("div", {
                        style: {
                            zoom: .7,
                            marginBottom: 32
                        },
                        children: "vs."
                    }), "The Challengers"]
                }),
                delay: 5e3
            }])), (0, o.default)(this, "setStage", (e => {
                const t = this.getStages(),
                    n = t[e];
                if (!n) return this.props.gameValues.currentRoute = h.GameStatus.gameplay, void(this.props.ui.showingBossPreScreen = !1);
                e + 1 === t.length && this.setState({
                    confettiActive: !0
                }), this.setState({
                    content: n.content
                }), setTimeout((() => this.setStage(e + 1)), n.delay)
            })), (0, o.default)(this, "startGame", (() => {
                this.setStage(0)
            })), (0, o.default)(this, "getBossName", (() => {
                let e = "The Boss";
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const t = this.props.players.teams.find((e => "The Boss" === e.id));
                    t && t.players[0] && (e = t.players[0])
                }
                return e
            }))
        }
    };
    w = (0, i.__decorate)([(0, u.inject)("players", "gameValues", "ui"), u.observer], w);
    var j = w;
    const C = (0, p.keyframes)(x || (x = b`
  from {
    transform: scale(0.7);
  }
  to {
    transform: scale(1);
  }
`)),
        E = p.default.div(v || (v = b`
  background: #b53d00;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`)),
        S = p.default.div(y || (y = b`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 65px;
  font-family: ${0};
  text-align: center;
  animation: ${0} 12s ease-in-out;
`), "'Bowlby One SC', cursive", C)
})), r.register("9Lpzj", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("fucqw"),
        l = r("lpEVe"),
        d = r("fywoC"),
        u = r("c72PM"),
        c = r("2FDaO"),
        f = r("j2XHK"),
        p = r("iMOcM");
    let h, m, g = e => e;
    let x = class extends d.Component {
        componentDidMount() {
            (0, p.loadFont)("https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap"), s.default.engagingSuspense.unload(), s.default.engagingSuspense.load(), s.default.engagingSuspense.on("load", (() => {
                this.startGame(), s.default.engagingSuspense.play()
            })), s.default.engagingSuspense.on("loaderror", this.startGame), s.default.engagingSuspense.on("playerror", this.startGame)
        }
        render() {
            return (0, i.jsx)(y, {
                children: (0, i.jsx)(b, {
                    children: this.state.content
                })
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                content: ""
            }), (0, a.default)(this, "getStages", (() => [{
                content: "",
                delay: 1300
            }, {
                content: (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.default, {
                        text: "Protect your team!"
                    })
                }),
                delay: 2800
            }, {
                content: (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.default, {
                        text: "Don't run out of health!"
                    })
                }),
                delay: 2900
            }, {
                content: (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.default, {
                        text: "Purchase team upgrades in the shop!"
                    })
                }),
                delay: 2900
            }, {
                content: (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.default, {
                        text: "Upgrade your team's health!"
                    })
                }),
                delay: 2800
            }, {
                content: (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.default, {
                        text: "Sabotage the other team!"
                    })
                }),
                delay: 2800
            }, {
                content: (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.default, {
                        text: "Last team remaining wins!"
                    })
                }),
                delay: 2200
            }, {
                content: (0, i.jsxs)("div", {
                    style: {
                        zoom: 1.4
                    },
                    className: "animated zoomInDown",
                    children: [(0, i.jsx)("div", {
                        children: "Humans"
                    }), (0, i.jsx)("div", {
                        children: "vs."
                    }), (0, i.jsx)("div", {
                        children: "Zombies"
                    })]
                }),
                delay: 5e3
            }])), (0, a.default)(this, "setStage", (e => {
                const t = this.getStages()[e];
                if (!t) return this.props.gameValues.currentRoute = f.GameStatus.gameplay, void(this.props.ui.showingHumansVsZombiesPreScreen = !1);
                this.setState({
                    content: t.content
                }), setTimeout((() => this.setStage(e + 1)), t.delay)
            })), (0, a.default)(this, "startGame", (() => {
                this.setStage(0)
            }))
        }
    };
    x = (0, o.__decorate)([(0, l.inject)("players", "gameValues", "ui"), l.observer], x);
    var v = x;
    const y = c.default.div(h || (h = g`
  background: rgb(96, 72, 6);
  background: radial-gradient(
    circle,
    rgba(96, 72, 6, 1) 0%,
    rgba(0, 0, 0, 1) 87%
  );
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`)),
        b = c.default.div(m || (m = g`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 50px;
  box-sizing: border-box;
  width: 100vw;
  font-size: 65px;
  font-family: ${0};
  text-align: center;
`), "'Bowlby One SC', cursive")
})), r.register("huU7t", (function(t, n) {
    e(t.exports, "HEADER_HEIGHT", (function() {
        return x
    })), e(t.exports, "default", (function() {
        return j
    }));
    var a = r("hxEiv"),
        o = r("k9bvH"),
        i = r("93yIm"),
        s = r("5Z32P"),
        l = r("bbvHy"),
        d = r("7mCD4"),
        u = r("fywoC"),
        c = r("2FDaO"),
        f = r("7cvtt");
    let p, h, m, g = e => e;
    const x = "83px",
        v = c.default.div(p || (p = g`
  height: ${0};
  width: 100%;
  box-shadow: ${0};
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;
`), x, d.default.basic),
        y = c.default.div(h || (h = g`
  ${0};
  font-size: 38px;
`), l.default.black),
        b = c.default.div(m || (m = g`
  display: flex;
  align-items: center;
`));
    class w extends u.Component {
        render() {
            return (0, a.jsxs)(v, {
                children: [(0, a.jsx)(y, {
                    children: !(0, s.inZombiesVsHumansMode)() && "Teams"
                }), (0, a.jsxs)(b, {
                    children: [this.props.reshuffle && (0, a.jsx)(i.default, {
                        type: "primary",
                        icon: (0, a.jsx)(o.default, {}),
                        style: {
                            fontFamily: l.default.fontFamilyName,
                            marginRight: 10
                        },
                        onClick: this.props.reshuffle,
                        children: "Reshuffle"
                    }), (0, a.jsx)(f.default, {
                        onTeamScreen: !0
                    })]
                })]
            })
        }
    }
    var j = w
})), r.register("9QpG8", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = r("kHqmx"),
        o = r("hxEiv"),
        i = r("gHmyG"),
        s = r("lpEVe"),
        l = r("fywoC"),
        d = r("2FDaO"),
        u = r("huU7t"),
        c = r("kQG0h");
    let f;
    const p = d.default.div(f || (f = (e => e)`
  max-height: calc(100vh - ${0});
  width: 100%;
  padding: 10px;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`), u.HEADER_HEIGHT);
    let h = class extends l.Component {
        render() {
            return (0, o.jsx)(p, {
                children: this.props.players.teams && this.props.players.teams.length ? this.props.players.teams.map((e => (0, o.jsx)(c.default, {
                    team: e
                }, e.id))) : (0, o.jsx)(i.default, {
                    style: {
                        marginTop: 10
                    },
                    size: "large"
                })
            })
        }
    };
    h = (0, a.__decorate)([(0, s.inject)("players"), s.observer], h);
    var m = h
})), r.register("kQG0h", (function(t, n) {
    e(t.exports, "default", (function() {
        return C
    }));
    var a = r("hxEiv"),
        o = r("fC6cp"),
        i = r("c72PM"),
        s = r("5Z32P"),
        l = r("d1LT2"),
        d = r("bbvHy"),
        u = r("7mCD4"),
        c = r("fywoC"),
        f = r("2FDaO");
    let p, h, m, g, x = e => e;
    const v = f.default.div(p || (p = x`
  width: 324px;
  margin: 12px;
  background: ${0};
  padding: 10px;
  border-radius: 4px;
  box-shadow: ${0};
  color: ${0};
`), l.default.White, u.default.basic, l.default.Black),
        y = f.default.div(h || (h = x`
  height: 36px;
  width: 36px;
  margin-right: 6px;
  border-radius: 5px;
  background-color: ${0};

  display: flex;
  align-items: center;
  justify-content: center;
`), (e => e.background)),
        b = f.default.div(m || (m = x`
  ${0};
  font-size: 23px;
  display: flex;
  align-items: center;
`), d.default.black),
        w = f.default.div(g || (g = x`
  ${0};
  font-size: 18px;
  background: rgba(0, 0, 0, 0.08);
  padding: 4px;
  padding-left: 7px;
  padding-right: 7px;
  width: 100%;
  margin-bottom: 5px;
  border-radius: 2px;
  &:last-child {
    margin-bottom: 0px;
  }
`), d.default.bold);
    class j extends c.Component {
        render() {
            const {
                team: e
            } = this.props;
            return (0, a.jsxs)(v, {
                children: [(0, a.jsxs)(b, {
                    children: [(0, a.jsx)(y, {
                        background: (0, s.getTeamColor)(e.id),
                        children: e.icon && (0, a.jsx)("i", {
                            className: e.icon,
                            style: {
                                color: e.color.text
                            }
                        })
                    }), (0, a.jsx)(i.default, {
                        text: e.id
                    })]
                }), (0, a.jsx)(o.default, {
                    style: {
                        marginTop: 7,
                        marginBottom: 7
                    }
                }), e.players.map((t => (0, a.jsx)(w, {
                    children: t
                }, e.balance + t)))]
            })
        }
    }
    var C = j
})), r.register("ltZy9", (function(t, n) {
    e(t.exports, "default", (function() {
        return j
    }));
    var a = r("divCp"),
        o = r("kHqmx"),
        i = r("hxEiv"),
        s = r("1GhWV"),
        l = r("93yIm"),
        d = r("fC6cp"),
        u = r("9xElQ"),
        c = r("fBuQJ"),
        f = r("gHmyG"),
        p = r("lpEVe"),
        h = r("fywoC"),
        m = r("1nqRf"),
        g = r("d1LT2"),
        x = r("bbvHy"),
        v = r("j2XHK"),
        y = r("b1oE9");
    const b = "https://status.gimkit.com";
    let w = class extends h.Component {
        render() {
            const {
                engine: e,
                gameValues: t
            } = this.props, n = ((e, t) => !((!t.roomIntentErrorMessage || t.currentRoute !== v.GameStatus.setup) && !e.errorFindingServerForGame && (t.currentRoute === v.GameStatus.results || !e.connectionError && (t.currentRoute === v.GameStatus.setup || !e.game || !e.errorJoiningRoom && e.joinedRoom))))(e, t);
            return t.currentRoute === v.GameStatus.setup ? (0, i.jsx)(c.default, {
                open: n,
                closable: !1,
                footer: null,
                width: 700,
                centered: !0,
                bodyStyle: {
                    padding: 40
                },
                children: this.getContent()
            }) : (0, i.jsx)(u.default, {
                open: n,
                placement: "bottom",
                closable: !1,
                height: "auto",
                children: this.getContent()
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "getLoading", (() => {
                const {
                    engine: e,
                    gameValues: t
                } = this.props;
                return (!t.roomIntentErrorMessage || t.currentRoute !== v.GameStatus.setup) && (!e.errorJoiningRoom && (!e.errorFindingServerForGame && !(!e.game && e.connectionError)))
            })), (0, a.default)(this, "getContent", (() => {
                const e = this.getLoading();
                return (0, i.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                        fontFamily: x.default.fontFamilyName,
                        color: g.default.Black,
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: [e && (0, i.jsx)(f.default, {
                        size: "large",
                        style: {
                            marginBottom: 10
                        }
                    }), !e && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s.default, {
                            style: {
                                color: "red",
                                fontSize: 51
                            }
                        }), (0, i.jsx)(d.default, {})]
                    }), (0, i.jsx)("div", {
                        style: {
                            textAlign: "center",
                            fontSize: 23,
                            fontWeight: "bold"
                        },
                        children: this.getMessage()
                    })]
                })
            })), (0, a.default)(this, "getMessage", (() => {
                const {
                    engine: e,
                    gameValues: t
                } = this.props;
                if (t.roomIntentErrorMessage && t.currentRoute === v.GameStatus.setup) return (0, i.jsxs)("div", {
                    className: "flex-center flex-column",
                    children: [(0, i.jsx)("div", {
                        children: t.roomIntentErrorMessage
                    }), (0, i.jsx)(l.default, {
                        size: "large",
                        type: "primary",
                        style: {
                            height: 50,
                            width: 300,
                            marginTop: 30
                        },
                        href: y.DASHBOARD,
                        children: (0, i.jsx)("div", {
                            className: "maxAll flex-center",
                            children: "Back To Dashboard"
                        })
                    })]
                });
                if (e.errorFindingServerForGame) return (0, i.jsxs)("span", {
                    children: ["We couldn't find any available game servers. Gimkit might be down. Check ", (0, i.jsx)("a", {
                        href: b,
                        children: b
                    }), " for more info."]
                });
                if (!e.game && e.connectionError) return (0, i.jsxs)("span", {
                    children: ["Your network is blocking connection to our game servers. Get more details on how to fix this ", (0, i.jsx)("a", {
                        href: "https://www.gimkit.com/connection",
                        children: "here."
                    })]
                });
                if (e.errorJoiningRoom) {
                    const t = (0, m.default)(e.roomError);
                    return (0, i.jsxs)("span", {
                        children: [(0, i.jsx)("span", {
                            style: {
                                fontSize: 23
                            },
                            children: t.title
                        }), (0, i.jsx)("br", {}), (0, i.jsx)("span", {
                            style: {
                                fontWeight: "normal",
                                fontSize: 18
                            },
                            children: t.description
                        })]
                    })
                }
                return e.attemptingToConnect ? (0, i.jsxs)("span", {
                    children: ["Disconnected!", " ", (0, i.jsx)("span", {
                        style: {
                            fontWeight: "normal"
                        },
                        children: "Attempting to reconnect..."
                    })]
                }) : e.attemptingToJoinRoom ? (0, i.jsxs)("span", {
                    children: ["Connected!", " ", (0, i.jsx)("span", {
                        style: {
                            fontWeight: "normal"
                        },
                        children: "Attempting to rejoin..."
                    })]
                }) : "Attempting to reconnect..."
            }))
        }
    };
    w = (0, o.__decorate)([(0, p.inject)("engine", "gameValues"), p.observer], w);
    var j = w
})), r.register("1GhWV", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("cpEDk"),
        s = r("dwKuN"),
        l = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "CloseCircleOutlined";
    var d = o.forwardRef(l)
})), r.register("cpEDk", (function(t, n) {
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
                    d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            }]
        },
        name: "close-circle",
        theme: "outlined"
    }
})), r.register("1nqRf", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = e => {
        let t = "Error joining game",
            n = "";
        return e && e.includes && e.includes("No data found") ? (t = "All done", n = "You were disconnected for too long, so we closed down the game you were hosting.") : n = `Error message - ${JSON.stringify(e)}`, {
            title: t,
            description: n
        }
    }
})), r.register("bBgo6", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv"),
        o = r("93yIm"),
        i = r("b1oE9"),
        s = r("9fvMK"),
        l = r("lpEVe"),
        d = r("fywoC"),
        u = r("VvPwO");
    var c = (0, l.observer)((() => {
        const {
            ui: e
        } = d.useContext(u.default);
        return e.showingClassTip ? (0, a.jsx)(s.default, {
            imageUrl: "/client/img/tips/class.jpeg",
            title: "Keep games safe with classes",
            description: (0, a.jsxs)(a.Fragment, {
                children: ["When you set up classes, nobody outside your class will be able to join live games. Plus, classes make it impossible for students to join with anything but their real name.", (0, a.jsx)(o.default, {
                    href: i.NEW_CLASS,
                    target: "_blank",
                    block: !0,
                    type: "primary",
                    style: {
                        marginTop: 20
                    },
                    children: "Create a class (opens in a new tab)"
                })]
            }),
            autoCloseDuration: 25
        }) : null
    }))
})), r.register("9fvMK", (function(t, n) {
    e(t.exports, "default", (function() {
        return w
    }));
    var a = r("hxEiv"),
        o = r("lKmIF"),
        i = r("69SUA"),
        s = r("fywoC"),
        l = r("kK88x"),
        d = r("2FDaO"),
        u = r("6vbUb");
    let c, f, p, h, m, g, x, v, y = e => e;
    const b = e => {
        const [t, n] = s.useState(!0), [r, o] = s.useState(!1);
        s.useEffect((() => {
            o(!0)
        }), []), s.useEffect((() => {
            const t = setTimeout((() => {
                i()
            }), 1e3 * e.autoCloseDuration);
            return () => clearTimeout(t)
        }), []);
        const i = () => o(!1);
        return t ? (0, a.jsxs)(j, {
            onAnimationComplete: () => {
                r || n(!1)
            },
            initial: {
                bottom: 0,
                opacity: 0
            },
            animate: {
                bottom: r ? 20 : 0,
                opacity: r ? 1 : 0
            },
            transition: {
                type: "spring",
                stiffness: 120
            },
            children: [(0, a.jsxs)(C, {
                children: [(0, a.jsx)(O, {
                    src: e.imageUrl
                }), (0, a.jsx)(E, {
                    onClick: i,
                    children: (0, a.jsx)(S, {})
                })]
            }), (0, a.jsxs)(k, {
                children: [(0, a.jsx)(P, {
                    children: e.title
                }), (0, a.jsx)(M, {
                    children: e.description
                })]
            })]
        }) : null
    };
    var w = e => (0, l.createPortal)((0, a.jsx)(b, {
        ...e
    }), document.body);
    const j = (0, d.default)(u.motion.div).attrs({
            className: "medium-shadow"
        })(c || (c = y`
  position: absolute;
  right: 20px;
  width: 350px;
  background: ${0};
  border-radius: 6px;
  color: ${0};
  overflow: hidden;
  font-family: ${0};
  z-index: 99999999;
`), o.default.White, o.default.Black, i.Fonts.SFPro),
        C = d.default.div.attrs({
            className: "maxWidth"
        })(f || (f = y`
  position: relative;
`)),
        E = d.default.div.attrs({
            className: "flex hc vc"
        })(p || (p = y`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  height: 25px;
  width: 25px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  font-size: 15px;
  transition: color 0.3s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`)),
        S = d.default.i.attrs({
            className: "fal fa-times"
        })(h || (h = y``)),
        O = d.default.img.attrs({
            className: "maxWidth"
        })(m || (m = y``)),
        k = d.default.div(g || (g = y`
  padding: 20px;
`)),
        P = d.default.div(x || (x = y`
  font-size: 22px;
  font-weight: ${0};
`), i.FontWeights.Bold),
        M = d.default.div(v || (v = y`
  font-size: 15px;
  margin-top: 7px;
`))
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("iI4DW"),
        o = r("fywoC"),
        i = r("4gMdJ");

    function s(e, t, n) {
        return function(r) {
            const {
                prefixCls: s,
                style: l
            } = r, d = o.useRef(null), [u, c] = o.useState(0), [f, p] = o.useState(0), [h, m] = (0, a.default)(!1, {
                value: r.open
            }), {
                getPrefixCls: g
            } = o.useContext(i.ConfigContext), x = g(t || "select", s);
            return o.useEffect((() => {
                if (m(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            c(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var r;
                            const a = n ? `.${n(x)}` : `.${x}-dropdown`,
                                o = null === (r = d.current) || void 0 === r ? void 0 : r.querySelector(a);
                            o && (clearInterval(t), e.observe(o))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), o.createElement(i.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, o.createElement("div", {
                ref: d,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: f
                }
            }, o.createElement(e, Object.assign({}, r, {
                style: Object.assign(Object.assign({}, l), {
                    margin: 0
                }),
                open: h,
                visible: h,
                getPopupContainer: () => d.current
            }))))
        }
    }
})), r.register("hacAX", (function(t, n) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var a = r("lt5sb"),
        o = r("aWAHQ");
    const i = new(0, a.Keyframes)("antMoveDownIn", {
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
        s = new(0, a.Keyframes)("antMoveDownOut", {
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
        l = new(0, a.Keyframes)("antMoveLeftIn", {
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
        d = new(0, a.Keyframes)("antMoveLeftOut", {
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
        u = new(0, a.Keyframes)("antMoveRightIn", {
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
        c = new(0, a.Keyframes)("antMoveRightOut", {
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
                inKeyframes: new(0, a.Keyframes)("antMoveUpIn", {
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
                outKeyframes: new(0, a.Keyframes)("antMoveUpOut", {
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
                outKeyframes: d
            },
            "move-right": {
                inKeyframes: u,
                outKeyframes: c
            }
        },
        p = (e, t) => {
            const {
                antCls: n
            } = e, r = `${n}-${t}`, {
                inKeyframes: a,
                outKeyframes: i
            } = f[t];
            return [(0, o.initMotion)(r, a, i, e.motionDurationMid), {
                [`\n        ${r}-enter,\n        ${r}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${r}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), r.register("i5Qjx", (function(n, a) {
    e(n.exports, "SpaceContext", (function() {
        return h
    }), (function(e) {
        return h = e
    })), e(n.exports, "default", (function() {
        return x
    }), (function(e) {
        return x = e
    }));
    var o = r("fe1on"),
        i = r("jyxW7"),
        s = r("fywoC"),
        l = r("4gMdJ"),
        d = r("1eqVQ"),
        u = r("7yXSw"),
        c = r("c9Vcn"),
        f = r("5gjI2"),
        p = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
            }
            return n
        };
    const h = s.createContext({
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
    const g = e => {
        const {
            getPrefixCls: n,
            space: r,
            direction: a
        } = s.useContext(l.ConfigContext), {
            size: u = (null == r ? void 0 : r.size) || "small",
            align: g,
            className: x,
            rootClassName: v,
            children: y,
            direction: b = "horizontal",
            prefixCls: w,
            split: j,
            style: C,
            wrap: E = !1
        } = e, S = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), O = (0, d.default)(), [k, P] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? m[e] : e || 0
        }(e)))), [u]), M = (0, i.default)(y, {
            keepEmpty: !0
        }), D = void 0 === g && "horizontal" === b ? "center" : g, _ = n("space", w), [T, A] = (0, f.default)(_), N = t(o)(_, A, `${_}-${b}`, {
            [`${_}-rtl`]: "rtl" === a,
            [`${_}-align-${D}`]: D
        }, x, v), I = `${_}-item`, R = "rtl" === a ? "marginLeft" : "marginRight";
        let F = 0;
        const V = M.map(((e, t) => {
                null != e && (F = t);
                const n = e && e.key || `${I}-${t}`;
                return s.createElement(c.default, {
                    className: I,
                    key: n,
                    direction: b,
                    index: t,
                    marginDirection: R,
                    split: j,
                    wrap: E
                }, e)
            })),
            H = s.useMemo((() => ({
                horizontalSize: k,
                verticalSize: P,
                latestIndex: F,
                supportFlexGap: O
            })), [k, P, F, O]);
        if (0 === M.length) return null;
        const B = {};
        return E && (B.flexWrap = "wrap", O || (B.marginBottom = -P)), O && (B.columnGap = k, B.rowGap = P), T(s.createElement("div", Object.assign({
            className: N,
            style: Object.assign(Object.assign({}, B), C)
        }, S), s.createElement(h.Provider, {
            value: H
        }, V)))
    };
    g.Compact = u.default;
    var x = g
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC"),
        o = r("azMeL"),
        i = () => {
            const [e, t] = a.useState(!1);
            return a.useEffect((() => {
                t((0, o.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC"),
        o = r("i5Qjx");

    function i(e) {
        let {
            className: t,
            direction: n,
            index: r,
            marginDirection: i,
            children: s,
            split: l,
            wrap: d
        } = e;
        const {
            horizontalSize: u,
            verticalSize: c,
            latestIndex: f,
            supportFlexGap: p
        } = a.useContext(o.SpaceContext);
        let h = {};
        return p || ("vertical" === n ? r < f && (h = {
            marginBottom: u / (l ? 2 : 1)
        }) : h = Object.assign(Object.assign({}, r < f && {
            [i]: u / (l ? 2 : 1)
        }), d && {
            paddingBottom: c
        })), null == s ? null : a.createElement(a.Fragment, null, a.createElement("div", {
            className: t,
            style: h
        }, s), r < f && l && a.createElement("span", {
            className: `${t}-split`,
            style: h
        }, l))
    }
})), r.register("1djzF", (function(t, n) {
    e(t.exports, "getCloudinaryUrl", (function() {
        return r
    }));
    const r = e => {
            const t = a(e);
            return t ? e.includes("/video/upload") ? `https://${o}/video/upload/${t}` : `https://${o}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        a = e => {
            if (!l.some((t => e.includes(t)))) return null;
            if (e.includes(i) && !e.includes(`/${s}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const n = t[t.length - 2],
                r = t[t.length - 1];
            return n && r && n.startsWith("v") ? `${n}/${r}` : null
        },
        o = "media.gimkit.com",
        i = "res.cloudinary.com",
        s = "gimkit-production",
        l = [o, i]
})), r.register("fgoFz", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("hxEiv"),
        o = r("fywoC");
    const i = o.lazy((() => r("h3n1W")));
    var s = e => (0, a.jsx)(o.Suspense, {
        fallback: e.fallback || null,
        children: (0, a.jsx)(i, {
            latex: e.latex
        })
    })
})), r.register("h3n1W", (function(e, t) {
    e.exports = Promise.all([import("./" + r("ihc6Q").resolve("8pe9D")), import("./" + r("ihc6Q").resolve("5OCdz"))]).then((() => r("9YSp3")))
})), r.register("8IEkO", (function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
})), r.register("h01rk", (function(e, t) {}));