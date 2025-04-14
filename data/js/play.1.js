function e(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0,
        configurable: !0
    })
}

function t(e, t, r, o) {
    Object.defineProperty(e, t, {
        get: r,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}

function r(e) {
    return e && e.__esModule ? e.default : e
}
var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
o.register("9GaDR", (function(r, n) {
    e(r.exports), t(r.exports, "default", (function() {
        return s
    }));
    var a = o("hxEiv");
    o("fywoC");
    var i = o("gcnAC");
    var s = e => (0, a.jsx)(a.Fragment, {
        children: (0, a.jsx)(i.default, {
            ...e
        })
    })
})), o.register("gcnAC", (function(e, r) {
    t(e.exports, "default", (function() {
        return n
    }));
    var n = o("5gPPd").default
})), o.register("5gPPd", (function(e, r) {
    t(e.exports, "default", (function() {
        return p
    }));
    var n = o("hxEiv"),
        a = o("fywoC"),
        i = o("lpEVe"),
        s = o("kcsKB"),
        c = o("l6fQm"),
        d = o("gRSQ1"),
        l = o("fQMql"),
        u = o("lCOXQ");
    var p = e => (a.useEffect((() => {
        (0, c.startLoop)(), document.addEventListener("click", (e => {
            (0, u.legitEvent)(e) || e.stopPropagation()
        }))
    }), []), (0, n.jsx)(l.default.Provider, {
        value: s.default,
        children: (0, n.jsx)(i.Provider, {
            ...s.default,
            children: (0, n.jsx)(d.default, {
                ...e
            })
        })
    }))
})), o.register("kcsKB", (function(e, r) {
    t(e.exports, "default", (function() {
        return w
    }));
    var n = o("ffUJT"),
        a = o("dGLQG"),
        i = o("bLquY"),
        s = o("2gTUt"),
        c = o("iS8F1"),
        d = o("bjuaL"),
        l = o("jBnVG"),
        u = o("a541u"),
        p = o("9qknb"),
        f = o("5ArpY"),
        h = o("fP0DJ"),
        m = o("lxxek"),
        g = o("3bLNC"),
        v = o("7ItHC"),
        x = o("7CIMU"),
        y = o("2L9cU"),
        b = o("2Xedd");
    var w = {
        gameValues: new(0, d.default),
        gameOptions: new(0, c.default),
        user: new(0, v.default),
        questions: new(0, p.default),
        powerups: new(0, u.default),
        balance: new(0, n.default),
        engine: new(0, a.default),
        theme: new(0, f.default),
        navigation: new(0, l.default),
        upgrades: new(0, g.default),
        translations: new(0, h.default),
        entities: new(0, i.default),
        ui: new(0, m.default),
        events: new(0, s.default),
        imposter: new(0, x.default),
        draw: new(0, y.default),
        pardy: new(0, b.default)
    }
})), o.register("ffUJT", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var n = o("kHqmx"),
        a = o("4MuSt");
    class i {
        constructor() {
            this.balance = 0, this.maxBalance = 0, this.balanceChangeIfCorrect = 1, this.balanceChangeIfIncorrect = -1, this.incomeMultiplier = 1, this.streakAmount = 0, this.customColor = "", (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], i.prototype, "balance", void 0), (0, n.__decorate)([a.observable], i.prototype, "maxBalance", void 0), (0, n.__decorate)([a.observable], i.prototype, "balanceChangeIfCorrect", void 0), (0, n.__decorate)([a.observable], i.prototype, "balanceChangeIfIncorrect", void 0), (0, n.__decorate)([a.observable], i.prototype, "incomeMultiplier", void 0), (0, n.__decorate)([a.observable], i.prototype, "streakAmount", void 0), (0, n.__decorate)([a.observable], i.prototype, "customColor", void 0);
    var s = i
})), o.register("dGLQG", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var n = o("kHqmx"),
        a = o("4MuSt");
    class i {
        constructor() {
            this.game = null, this.client = null, this.findingServerForGame = !1, this.errorFindingServerForGame = !1, this.attemptingToConnect = !1, this.hasConnected = !1, this.connected = !1, this.connectionError = !1, this.hasLeftRoom = !1, this.hasJoinedRoom = !1, this.joinedRoom = !1, this.attemptingToJoinRoom = !1, this.errorJoiningRoom = !1, this.roomError = null, (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], i.prototype, "game", void 0), (0, n.__decorate)([a.observable], i.prototype, "client", void 0), (0, n.__decorate)([a.observable], i.prototype, "findingServerForGame", void 0), (0, n.__decorate)([a.observable], i.prototype, "errorFindingServerForGame", void 0), (0, n.__decorate)([a.observable], i.prototype, "attemptingToConnect", void 0), (0, n.__decorate)([a.observable], i.prototype, "hasConnected", void 0), (0, n.__decorate)([a.observable], i.prototype, "connected", void 0), (0, n.__decorate)([a.observable], i.prototype, "connectionError", void 0), (0, n.__decorate)([a.observable], i.prototype, "hasLeftRoom", void 0), (0, n.__decorate)([a.observable], i.prototype, "hasJoinedRoom", void 0), (0, n.__decorate)([a.observable], i.prototype, "joinedRoom", void 0), (0, n.__decorate)([a.observable], i.prototype, "attemptingToJoinRoom", void 0), (0, n.__decorate)([a.observable], i.prototype, "errorJoiningRoom", void 0), (0, n.__decorate)([a.observable], i.prototype, "roomError", void 0);
    var s = i
})), o.register("bLquY", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var n = o("kHqmx"),
        a = o("4MuSt");
    class i {
        constructor() {
            this.defendingHomebase = null, this.lava = null, (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], i.prototype, "defendingHomebase", void 0), (0, n.__decorate)([a.observable], i.prototype, "lava", void 0);
    var s = i
})), o.register("2gTUt", (function(e, r) {
    t(e.exports, "default", (function() {
        return o
    }));
    var o = class {}
})), o.register("iS8F1", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var n = o("kHqmx"),
        a = o("4MuSt"),
        i = o("j2XHK");
    class s {
        get formattedGameOptions() {
            return (0, a.toJS)(this)
        }
        constructor() {
            this.type = i.GameType.live, this.goal = {
                type: i.GameGoal.time,
                value: 10
            }, this.specialGameType = a.observable.array(), this.group = "", this.currency = "$", this.language = "en", this.startingCash = 0, this.handicap = -50, this.clapping = !0, this.powerups = !0, this.themes = !0, this.cleanPowerupsOnly = !1, this.allowGoogleTranslate = !1, this.enablePowerupRNGAnimation = !1, this.music = !0, this.modeOptions = {}, this.setGameOptions = e => {
                Object.keys(e).forEach((t => {
                    null !== this[t] && ("specialGameType" === t ? this.specialGameType.replace(e.specialGameType) : this[t] = e[t])
                }))
            }, (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], s.prototype, "type", void 0), (0, n.__decorate)([a.observable], s.prototype, "goal", void 0), (0, n.__decorate)([a.observable], s.prototype, "specialGameType", void 0), (0, n.__decorate)([a.observable], s.prototype, "group", void 0), (0, n.__decorate)([a.observable], s.prototype, "currency", void 0), (0, n.__decorate)([a.observable], s.prototype, "language", void 0), (0, n.__decorate)([a.observable], s.prototype, "startingCash", void 0), (0, n.__decorate)([a.observable], s.prototype, "handicap", void 0), (0, n.__decorate)([a.observable], s.prototype, "clapping", void 0), (0, n.__decorate)([a.observable], s.prototype, "powerups", void 0), (0, n.__decorate)([a.observable], s.prototype, "themes", void 0), (0, n.__decorate)([a.observable], s.prototype, "cleanPowerupsOnly", void 0), (0, n.__decorate)([a.observable], s.prototype, "allowGoogleTranslate", void 0), (0, n.__decorate)([a.observable], s.prototype, "enablePowerupRNGAnimation", void 0), (0, n.__decorate)([a.observable], s.prototype, "music", void 0), (0, n.__decorate)([a.observable], s.prototype, "modeOptions", void 0), (0, n.__decorate)([a.action.bound], s.prototype, "setGameOptions", void 0), (0, n.__decorate)([a.computed], s.prototype, "formattedGameOptions", null);
    var c = s
})), o.register("bjuaL", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var n = o("kHqmx"),
        a = o("4MuSt");
    class i {
        constructor() {
            this.connected = !1, this.connectionError = !1, this.gameStatus = null, this.gameCode = null, this.players = a.observable.array(), this.teams = a.observable.array(), this.nonDismissMessage = {
                message: "",
                title: "",
                link: "",
                buttonText: ""
            }, this.thanosValues = null, this.news = a.observable.array([]), (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], i.prototype, "connected", void 0), (0, n.__decorate)([a.observable], i.prototype, "connectionError", void 0), (0, n.__decorate)([a.observable], i.prototype, "gameStatus", void 0), (0, n.__decorate)([a.observable], i.prototype, "gameCode", void 0), (0, n.__decorate)([a.observable], i.prototype, "players", void 0), (0, n.__decorate)([a.observable], i.prototype, "teams", void 0), (0, n.__decorate)([a.observable], i.prototype, "nonDismissMessage", void 0), (0, n.__decorate)([a.observable], i.prototype, "thanosValues", void 0), (0, n.__decorate)([a.observable], i.prototype, "defendingHomebaseResults", void 0), (0, n.__decorate)([a.observable], i.prototype, "news", void 0);
    var s = i
})), o.register("jBnVG", (function(e, r) {
    t(e.exports, "ShopTab", (function() {
        return s
    })), t(e.exports, "default", (function() {
        return l
    }));
    var n = o("kHqmx"),
        a = o("i6SGg"),
        i = o("4MuSt");
    let s;
    var c;
    (c = s || (s = {})).lava = "lava", c.defendingHomebase = "defendingHomebase", c.upgrades = "upgrades", c.powerups = "powerups", c.themes = "themes", c.powerupsNonMusic = "powerupsNonMusic", c.powerupsMusic = "powerupsMusic";
    class d {
        changeRoute(e) {
            this.currentRoute = e
        }
        constructor() {
            this.currentRoute = a.default.join, this.canChangeRoute = !0, this.drawerOpen = !1, this.settingsOpen = !1, this.leaderboardDrawerOpen = !1, this.currentShopTab = s.upgrades, this.powerupRNGAnimationDone = !1, this.visitedPowerupSection = !1, this.attackModal = {
                open: !1,
                powerup: ""
            }, (0, i.makeObservable)(this)
        }
    }(0, n.__decorate)([i.observable], d.prototype, "currentRoute", void 0), (0, n.__decorate)([i.observable], d.prototype, "canChangeRoute", void 0), (0, n.__decorate)([i.observable], d.prototype, "drawerOpen", void 0), (0, n.__decorate)([i.observable], d.prototype, "settingsOpen", void 0), (0, n.__decorate)([i.observable], d.prototype, "leaderboardDrawerOpen", void 0), (0, n.__decorate)([i.observable], d.prototype, "currentShopTab", void 0), (0, n.__decorate)([i.observable], d.prototype, "powerupRNGAnimationDone", void 0), (0, n.__decorate)([i.observable], d.prototype, "visitedPowerupSection", void 0), (0, n.__decorate)([i.observable], d.prototype, "attackModal", void 0), (0, n.__decorate)([i.action.bound], d.prototype, "changeRoute", null);
    var l = d
})), o.register("i6SGg", (function(e, r) {
    t(e.exports, "default", (function() {
        return n
    }));
    const o = "/play";
    var n = {
        base: o,
        join: o + "/join",
        waiting: o + "/waiting",
        gameOver: o + "/results",
        questions: o + "/questions",
        team: o + "/team",
        shop: o + "/shop",
        upgrade: o + "/upgrade",
        nonDismissMessage: "/message",
        imposterMode: "/imposter-mode",
        drawMode: "/draw-mode",
        pardyMode: "/pardy-mode"
    }
})), o.register("a541u", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var n = o("kHqmx"),
        a = o("cmvpZ"),
        i = o("4MuSt");
    class s {
        get activePowerups() {
            return (0, a.uniq)(this.personalActivePowerups.concat(this.teamActivePowerups))
        }
        get appliedPowerups() {
            return (0, a.uniq)(this.personalAppliedPowerups.concat(this.teamAppliedPowerups))
        }
        constructor() {
            this.availablePowerups = i.observable.array(), this.disabledPowerups = i.observable.array(), this.purchasedPowerups = i.observable.array(), this.usedPowerups = i.observable.array(), this.personalActivePowerups = i.observable.array(), this.teamActivePowerups = i.observable.array(), this.personalAppliedPowerups = i.observable.array(), this.teamAppliedPowerups = i.observable.array(), this.hasShownHelperModal = !1, this.screenAttack = {
                powerupName: "",
                attackerName: "",
                fullScreen: !1
            }, this.linkPartnerName = "", (0, i.makeObservable)(this)
        }
    }(0, n.__decorate)([i.observable], s.prototype, "availablePowerups", void 0), (0, n.__decorate)([i.observable], s.prototype, "disabledPowerups", void 0), (0, n.__decorate)([i.observable], s.prototype, "purchasedPowerups", void 0), (0, n.__decorate)([i.observable], s.prototype, "usedPowerups", void 0), (0, n.__decorate)([i.observable], s.prototype, "personalActivePowerups", void 0), (0, n.__decorate)([i.observable], s.prototype, "teamActivePowerups", void 0), (0, n.__decorate)([i.observable], s.prototype, "personalAppliedPowerups", void 0), (0, n.__decorate)([i.observable], s.prototype, "teamAppliedPowerups", void 0), (0, n.__decorate)([i.computed], s.prototype, "activePowerups", null), (0, n.__decorate)([i.computed], s.prototype, "appliedPowerups", null), (0, n.__decorate)([i.observable], s.prototype, "hasShownHelperModal", void 0), (0, n.__decorate)([i.observable], s.prototype, "screenAttack", void 0), (0, n.__decorate)([i.observable], s.prototype, "linkPartnerName", void 0);
    var c = s
})), o.register("9qknb", (function(e, r) {
    t(e.exports, "default", (function() {
        return p
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("eEMhJ"),
        s = o("cmvpZ"),
        c = o("4MuSt"),
        d = o("jcI11"),
        l = o("1Q66o");
    class u {
        constructor() {
            (0, n.default)(this, "eqt", ""), (0, n.default)(this, "questionsAnsweredCorrectly", 0), (0, n.default)(this, "questionsAnsweredIncorrectly", 0), this.ceq = null, this.currentQuestionIndex = 0, this.questionList = c.observable.array(), this.lastQuestion = "", this.canAnswerQuestion = !0, this.lockedViewingCorrectAnswer = !1, this.lastQuestionAnsweredTimestamp = 0, this.currentQuestionLoaded = !1, this.transitioningToNextQuestion = !1, this.setQuestions = e => {
                this.eqt = (0, d.EncryptData)(e, "questions")
            }, this.nextQuestion = () => {
                this.setCurrentQuestion(this.currentQuestionIndex + 1)
            }, this.setCurrentQuestion = e => {
                const t = (0, i.questionLocation)();
                if (!t || !t.length) return;
                const r = this.questionList.length;
                this.currentQuestionIndex = e >= r ? 0 : e;
                const o = t.find((e => e._id === this.questionList[this.currentQuestionIndex]));
                o && (this.ceq = (0, d.EncryptData)({
                    ...o,
                    answers: (0, s.shuffle)(o.answers)
                }, o._id), this.currentQuestionLoaded = !0)
            }, this.questionAnswered = (e, t) => {
                this.lastQuestionAnsweredTimestamp = Date.now() / 1e3, this.lastQuestionCorrect = e, this.lastQuestion = t, this.canAnswerQuestion = !1, setTimeout((() => {
                    this.canAnswerQuestion = !0
                }), l.CSS_TRANSITION_TIMEOUT)
            }, (0, c.makeObservable)(this)
        }
    }(0, a.__decorate)([c.observable], u.prototype, "ceq", void 0), (0, a.__decorate)([c.observable], u.prototype, "currentQuestionIndex", void 0), (0, a.__decorate)([c.observable], u.prototype, "questionList", void 0), (0, a.__decorate)([c.observable], u.prototype, "lastQuestion", void 0), (0, a.__decorate)([c.observable], u.prototype, "lastQuestionCorrect", void 0), (0, a.__decorate)([c.observable], u.prototype, "canAnswerQuestion", void 0), (0, a.__decorate)([c.observable], u.prototype, "lockedViewingCorrectAnswer", void 0), (0, a.__decorate)([c.observable], u.prototype, "lastQuestionAnsweredTimestamp", void 0), (0, a.__decorate)([c.observable], u.prototype, "currentQuestionLoaded", void 0), (0, a.__decorate)([c.observable], u.prototype, "transitioningToNextQuestion", void 0), (0, a.__decorate)([c.action.bound], u.prototype, "setQuestions", void 0), (0, a.__decorate)([c.action.bound], u.prototype, "nextQuestion", void 0), (0, a.__decorate)([c.action.bound], u.prototype, "setCurrentQuestion", void 0), (0, a.__decorate)([c.action.bound], u.prototype, "questionAnswered", void 0);
    var p = u
})), o.register("eEMhJ", (function(e, r) {
    t(e.exports, "questionAnswered", (function() {
        return y
    })), t(e.exports, "send", (function() {
        return q
    })), t(e.exports, "plural", (function() {
        return b
    })), t(e.exports, "numberWithCommas", (function() {
        return w
    })), t(e.exports, "getMoney", (function() {
        return C
    })), t(e.exports, "inDrawMode", (function() {
        return Z
    })), t(e.exports, "toggleDrawer", (function() {
        return k
    })), t(e.exports, "purchaseTheme", (function() {
        return P
    })), t(e.exports, "upgradeNameToKey", (function() {
        return E
    })), t(e.exports, "toast", (function() {
        return S
    })), t(e.exports, "capitalizeFirstLetter", (function() {
        return T
    })), t(e.exports, "getTeamName", (function() {
        return B
    })), t(e.exports, "teamPlayerNames", (function() {
        return j
    })), t(e.exports, "getTeamColor", (function() {
        return M
    })), t(e.exports, "getTeamIcon", (function() {
        return _
    })), t(e.exports, "inTeamMode", (function() {
        return R
    })), t(e.exports, "attack", (function() {
        return O
    })), t(e.exports, "getPowerupDescription", (function() {
        return I
    })), t(e.exports, "questionLocation", (function() {
        return D
    })), t(e.exports, "inPardyMode", (function() {
        return te
    })), t(e.exports, "blockShopping", (function() {
        return A
    })), t(e.exports, "getAssetPath", (function() {
        return N
    })), t(e.exports, "getPowerupName", (function() {
        return L
    })), t(e.exports, "getUpgradeCost", (function() {
        return z
    })), t(e.exports, "startGame", (function() {
        return F
    })), t(e.exports, "inImposterMode", (function() {
        return X
    })), t(e.exports, "changeRoute", (function() {
        return H
    })), t(e.exports, "inZombiesVsHumansMode", (function() {
        return re
    })), t(e.exports, "requestDefendingHomebase", (function() {
        return W
    })), t(e.exports, "defendingHomebaseResultsInfo", (function() {
        return V
    })), t(e.exports, "listenForLeave", (function() {
        return G
    })), t(e.exports, "nonDismissMessage", (function() {
        return U
    })), t(e.exports, "inThanosMode", (function() {
        return $
    })), t(e.exports, "inQrScanMode", (function() {
        return Q
    })), t(e.exports, "inBossBattleMode", (function() {
        return K
    })), t(e.exports, "inHiddenMode", (function() {
        return J
    })), t(e.exports, "inLavaMode", (function() {
        return Y
    })), t(e.exports, "inComebackMode", (function() {
        return ee
    })), t(e.exports, "shopName", (function() {
        return ne
    })), t(e.exports, "mainFontName", (function() {
        return ae
    }));
    o("bBunw");
    var n = o("9es0Y"),
        a = o("kC0Tv"),
        i = o("86Vcm"),
        s = o("6sear"),
        c = o("k5Bua"),
        d = o("kcsKB"),
        l = o("j2XHK"),
        u = o("49Os1"),
        p = o("i6SGg"),
        f = o("jPiH0"),
        h = o("l360q"),
        m = o("5vs73"),
        g = o("jcI11"),
        v = o("1Q66o"),
        x = o("iMOcM");
    const y = e => {
            if (!d.default.questions.canAnswerQuestion) return !1;
            const t = d.default.questions.ceq ? (0, g.DecryptData)(d.default.questions.ceq) : null;
            let r = !1;
            if (t) {
                const o = t.answers.filter((e => e.correct));
                t.type === l.QuestionType.textInput && o.map((e => oe(e.text))).includes(oe(e)) && (r = !0), t.type === l.QuestionType.multipleChoice && o.map((e => e._id)).includes(e) && (r = !0), d.default.questions.questionAnswered(r, t._id), q(u.default.questionAnswered, {
                    questionId: t._id,
                    answer: e
                }), d.default.questions.transitioningToNextQuestion = !0
            }
            return r
        },
        b = (e, t, r) => 1 === t ? e : r || e + "s",
        w = e => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        C = e => {
            if (Z()) {
                const t = Math.round(e);
                return `${w(t)} ${b("point",t)}`
            }
            return (e < 0 ? "-" : "") + d.default.gameOptions.currency + w(Math.round(Math.abs(e)))
        },
        k = (e, t) => {
            t || s.woosh.play(), d.default.navigation.drawerOpen = e, 1 == e && (d.default.navigation.settingsOpen = !1)
        },
        P = e => {
            q(u.default.themePurchased, e)
        },
        E = e => e === i.upgradeNames.moneyPerQuestion ? "moneyPerQuestion" : e === i.upgradeNames.streakBonus ? "streakBonus" : e === i.upgradeNames.multiplier ? "multiplier" : "insurance",
        S = (e, t) => {
            const {
                type: r,
                blockSound: o
            } = t;
            o || ("error" === r ? s.error.play() : "success" === r ? s.success.play() : s.alert.play()), n.toast[r || "info"](e, {
                position: n.toast.POSITION.TOP_RIGHT,
                autoClose: 200 * e.length + 1e3
            })
        },
        T = e => e ? e.charAt(0).toUpperCase() + e.slice(1) : "",
        B = e => T(e),
        j = e => {
            let t = "";
            return e.forEach(((r, o) => {
                t += r, o + 1 !== e.length && (t += ", ")
            })), t
        },
        M = e => {
            let t = null;
            return t = e ? d.default.gameValues.teams.find((t => t.id === e)) : d.default.user.team, t && t.color ? t.color.background : a.default.White
        },
        _ = e => {
            let t = null;
            return t = e ? d.default.gameValues.teams.find((t => t.id === e)) : d.default.user.team, t && t.icon ? t.icon : null
        },
        R = () => [m.TEAMS, m.HUMAN_ZOMBIE_DEFENDING_HOMEBASE, m.BOSS_BATTLE].includes(d.default.gameOptions.specialGameType[0]),
        O = (e, t) => {
            const r = d.default.navigation.attackModal;
            q(u.default.powerupAttack, {
                name: r.powerup,
                target: e
            })
        },
        I = e => e.replace("#", R() ? "team" : "player"),
        D = () => d.default.questions.eqt ? (0, g.DecryptData)(d.default.questions.eqt) : [],
        A = () => te();

    function N(e) {
        return "/assets/play/" + e
    }
    const L = e => e.displayName ? e.displayName : e.name,
        z = e => e * d.default.upgrades.upgradePricingDiscount,
        F = () => {
            let e = p.default.questions;
            te() && (e = p.default.pardyMode), X() && (0, x.loadFont)("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"), Z() && (0, x.loadFont)("https://fonts.googleapis.com/css2?family=Pangolin&display=swap"), H(e), re() && W()
        },
        H = e => {
            d.default.navigation.currentRoute !== e && (d.default.navigation.canChangeRoute ? d.default.navigation.currentRoute !== p.default.nonDismissMessage && (e === p.default.questions && te() || e === p.default.shop && A() || d.default.navigation.changeRoute(e)) : setTimeout((() => H(e)), v.CSS_TRANSITION_TIMEOUT))
        },
        W = () => q(u.default.requestPlayerDefendingHomebase),
        V = () => {
            let e = !1;
            const t = d.default.gameValues.defendingHomebaseResults;
            return t && t.winner && t.winner.linked && d.default.user.team.id === t.winner.linked && (e = !0), {
                won: e,
                text: e ? "You Won!" : "😥"
            }
        },
        G = () => {
            window.onbeforeunload = () => {
                const e = d.default.navigation.currentRoute;
                return !![p.default.waiting, p.default.questions, p.default.shop, p.default.upgrade, p.default.team].includes(e) || null
            }
        },
        U = (e, t) => {
            d.default.gameValues.nonDismissMessage.title = t, d.default.gameValues.nonDismissMessage.message = e, H(p.default.nonDismissMessage)
        },
        q = (e, t) => {
            const r = d.default.engine.game;
            r && r.send(e, t)
        },
        $ = () => d.default.gameOptions.specialGameType.includes(c.THANOS),
        Q = () => d.default.gameOptions.specialGameType.includes(c.SHOP_QR_SCAN),
        K = () => d.default.gameOptions.specialGameType.includes(m.BOSS_BATTLE),
        J = () => d.default.gameOptions.specialGameType.includes(c.HIDDEN),
        Y = () => d.default.gameOptions.specialGameType.includes(c.LAVA),
        X = () => d.default.gameOptions.specialGameType.includes(c.IMPOSTER),
        Z = () => d.default.gameOptions.specialGameType.includes(c.DRAW),
        ee = () => d.default.gameOptions.specialGameType.includes(c.COMEBACK),
        te = () => d.default.gameOptions.specialGameType.includes(c.PARDY),
        re = () => d.default.gameOptions.specialGameType.includes(m.HUMAN_ZOMBIE_DEFENDING_HOMEBASE),
        oe = e => {
            let t = e.trim();
            return t = t.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"'), t = t.toLowerCase(), t
        },
        ne = () => X() ? "Mission Control" : "Shop",
        ae = () => Z() ? f.DRAW_MODE_FONT : h.default.mainFontName
})), o.register("9es0Y", (function(e, r) {
    var n, a;
    t(e.exports, "ToastContainer", (function() {
        return n
    }), (function(e) {
        return n = e
    })), t(e.exports, "toast", (function() {
        return a
    }), (function(e) {
        return a = e
    }));
    var i = l(o("7o0TJ"));
    n = i.default;
    var s = o("76BYz");
    s.Bounce, s.Slide, s.Zoom, s.Flip;
    var c = o("8v6gd");
    c.POSITION, c.TYPE;
    var d = l(o("l621T"));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    a = d.default, l(o("dVVUn")).default
})), o.register("7o0TJ", (function(r, n) {
    var a, i;
    e(r.exports), t(r.exports, "__esModule", (function() {
        return a
    }), (function(e) {
        return a = e
    })), t(r.exports, "default", (function() {
        return i
    }), (function(e) {
        return i = e
    })), a = !0, i = void 0;
    var s = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                        o.get || o.set ? Object.defineProperty(t, r, o) : t[r] = e[r]
                    } return t.default = e, t
        }(o("fywoC")),
        c = v(o("djNMu")),
        d = v(o("fe1on")),
        l = v(o("6ooH2")),
        u = v(o("hkI9x")),
        p = v(o("5IkvD")),
        f = o("76BYz"),
        h = o("8v6gd"),
        m = v(o("62mGT")),
        g = o("eyaRw");

    function v(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function x(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function y() {
        return y = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        }, y.apply(this, arguments)
    }
    var b = function(e) {
        var t, r;

        function o() {
            for (var t, r = arguments.length, o = new Array(r), n = 0; n < r; n++) o[n] = arguments[n];
            return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                toast: []
            }, t.toastKey = 1, t.collection = {}, t.isToastActive = function(e) {
                return -1 !== t.state.toast.indexOf(e)
            }, t
        }
        r = e, (t = o).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
        var n = o.prototype;
        return n.componentDidMount = function() {
            var e = this;
            m.default.on(h.ACTION.SHOW, (function(t, r) {
                return e.show(t, r)
            })).on(h.ACTION.CLEAR, (function(t) {
                return t ? e.removeToast(t) : e.clear()
            })).emit(h.ACTION.DID_MOUNT, this)
        }, n.componentWillUnmount = function() {
            m.default.off(h.ACTION.SHOW).off(h.ACTION.CLEAR).emit(h.ACTION.WILL_UNMOUNT)
        }, n.removeToast = function(e) {
            this.setState({
                toast: this.state.toast.filter((function(t) {
                    return t !== e
                }))
            }, this.dispatchChange)
        }, n.dispatchChange = function() {
            m.default.emit(h.ACTION.ON_CHANGE, this.state.toast.length)
        }, n.makeCloseButton = function(e, t, r) {
            var o = this,
                n = this.props.closeButton;
            return ((0, s.isValidElement)(e) || !1 === e) && (n = e), !1 !== n && (0, s.cloneElement)(n, {
                closeToast: function() {
                    return o.removeToast(t)
                },
                type: r
            })
        }, n.getAutoCloseDelay = function(e) {
            return !1 === e || (0, g.isValidDelay)(e) ? e : this.props.autoClose
        }, n.canBeRendered = function(e) {
            return (0, s.isValidElement)(e) || "string" == typeof e || "number" == typeof e || "function" == typeof e
        }, n.parseClassName = function(e) {
            return "string" == typeof e ? e : null !== e && "object" == typeof e && "toString" in e ? e.toString() : null
        }, n.show = function(e, t) {
            var r, o = this;
            if (!this.canBeRendered(e)) throw new Error("The element you provided cannot be rendered. You provided an element of type " + typeof e);
            var n = t.toastId,
                a = function() {
                    return o.removeToast(n)
                },
                i = {
                    id: n,
                    key: t.key || this.toastKey++,
                    type: t.type,
                    closeToast: a,
                    updateId: t.updateId,
                    rtl: this.props.rtl,
                    position: t.position || this.props.position,
                    transition: t.transition || this.props.transition,
                    className: this.parseClassName(t.className || this.props.toastClassName),
                    bodyClassName: this.parseClassName(t.bodyClassName || this.props.bodyClassName),
                    closeButton: this.makeCloseButton(t.closeButton, n, t.type),
                    pauseOnHover: "boolean" == typeof t.pauseOnHover ? t.pauseOnHover : this.props.pauseOnHover,
                    pauseOnFocusLoss: "boolean" == typeof t.pauseOnFocusLoss ? t.pauseOnFocusLoss : this.props.pauseOnFocusLoss,
                    draggable: "boolean" == typeof t.draggable ? t.draggable : this.props.draggable,
                    draggablePercent: "number" != typeof t.draggablePercent || isNaN(t.draggablePercent) ? this.props.draggablePercent : t.draggablePercent,
                    closeOnClick: "boolean" == typeof t.closeOnClick ? t.closeOnClick : this.props.closeOnClick,
                    progressClassName: this.parseClassName(t.progressClassName || this.props.progressClassName),
                    progressStyle: this.props.progressStyle,
                    autoClose: this.getAutoCloseDelay(t.autoClose),
                    hideProgressBar: "boolean" == typeof t.hideProgressBar ? t.hideProgressBar : this.props.hideProgressBar,
                    progress: parseFloat(t.progress),
                    isProgressDone: t.isProgressDone
                };
            "function" == typeof t.onOpen && (i.onOpen = t.onOpen), "function" == typeof t.onClose && (i.onClose = t.onClose), (0, s.isValidElement)(e) && "string" != typeof e.type && "number" != typeof e.type ? e = (0, s.cloneElement)(e, {
                closeToast: a
            }) : "function" == typeof e && (e = e({
                closeToast: a
            })), this.collection = y({}, this.collection, ((r = {})[n] = {
                position: i.position,
                options: i,
                content: e
            }, r)), this.setState({
                toast: (i.updateId ? x(this.state.toast) : x(this.state.toast).concat([n])).filter((function(e) {
                    return e !== t.staleToastId
                }))
            }, this.dispatchChange)
        }, n.makeToast = function(e, t) {
            return s.default.createElement(u.default, y({}, t, {
                isDocumentHidden: this.state.isDocumentHidden,
                key: "toast-" + t.key
            }), e)
        }, n.clear = function() {
            this.setState({
                toast: []
            })
        }, n.renderToast = function() {
            var e = this,
                t = {},
                r = this.props,
                o = r.className,
                n = r.style;
            return (r.newestOnTop ? Object.keys(this.collection).reverse() : Object.keys(this.collection)).forEach((function(r) {
                var o = e.collection[r],
                    n = o.position,
                    a = o.options,
                    i = o.content;
                t[n] || (t[n] = []), -1 !== e.state.toast.indexOf(a.id) ? t[n].push(e.makeToast(i, a)) : (t[n].push(null), delete e.collection[r])
            })), Object.keys(t).map((function(r) {
                var a = 1 === t[r].length && null === t[r][0],
                    i = {
                        className: (0, d.default)("Toastify__toast-container", "Toastify__toast-container--" + r, {
                            "Toastify__toast-container--rtl": e.props.rtl
                        }, e.parseClassName(o)),
                        style: a ? y({}, n, {
                            pointerEvents: "none"
                        }) : y({}, n)
                    };
                return s.default.createElement(l.default, y({}, i, {
                    key: "container-" + r
                }), t[r])
            }))
        }, n.render = function() {
            return s.default.createElement("div", {
                className: "Toastify"
            }, this.renderToast())
        }, o
    }(s.Component);
    b.propTypes = {
        position: c.default.oneOf((0, g.objectValues)(h.POSITION)),
        autoClose: g.falseOrDelay,
        closeButton: g.falseOrElement,
        hideProgressBar: c.default.bool,
        pauseOnHover: c.default.bool,
        closeOnClick: c.default.bool,
        newestOnTop: c.default.bool,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        style: c.default.object,
        toastClassName: c.default.oneOfType([c.default.string, c.default.object]),
        bodyClassName: c.default.oneOfType([c.default.string, c.default.object]),
        progressClassName: c.default.oneOfType([c.default.string, c.default.object]),
        progressStyle: c.default.object,
        transition: c.default.func,
        rtl: c.default.bool,
        draggable: c.default.bool,
        draggablePercent: c.default.number,
        pauseOnFocusLoss: c.default.bool
    }, b.defaultProps = {
        position: h.POSITION.TOP_RIGHT,
        transition: f.Bounce,
        rtl: !1,
        autoClose: 5e3,
        hideProgressBar: !1,
        closeButton: s.default.createElement(p.default, null),
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        closeOnClick: !0,
        newestOnTop: !1,
        draggable: !0,
        draggablePercent: 80,
        className: null,
        style: null,
        toastClassName: null,
        bodyClassName: null,
        progressClassName: null,
        progressStyle: null
    }, i = b
})), o.register("hkI9x", (function(r, n) {
    var a, i;
    e(r.exports), t(r.exports, "__esModule", (function() {
        return a
    }), (function(e) {
        return a = e
    })), t(r.exports, "default", (function() {
        return i
    }), (function(e) {
        return i = e
    })), a = !0, i = void 0;
    var s = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                        o.get || o.set ? Object.defineProperty(t, r, o) : t[r] = e[r]
                    } return t.default = e, t
        }(o("fywoC")),
        c = f(o("djNMu")),
        d = f(o("fe1on")),
        l = f(o("7fR2C")),
        u = o("8v6gd"),
        p = o("eyaRw");

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function h() {
        return h = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        }, h.apply(this, arguments)
    }

    function m(e) {
        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
    }

    function g(e) {
        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
    }
    var v = function() {},
        x = function(e) {
            var t, r;

            function o() {
                for (var t, r = arguments.length, o = new Array(r), n = 0; n < r; n++) o[n] = arguments[n];
                return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                    isRunning: !0,
                    preventExitTransition: !1
                }, t.flag = {
                    canCloseOnClick: !0,
                    canDrag: !1
                }, t.drag = {
                    start: 0,
                    x: 0,
                    y: 0,
                    deltaX: 0,
                    removalDistance: 0
                }, t.ref = null, t.pauseToast = function() {
                    t.props.autoClose && t.setState({
                        isRunning: !1
                    })
                }, t.playToast = function() {
                    t.props.autoClose && t.setState({
                        isRunning: !0
                    })
                }, t.onDragStart = function(e) {
                    t.flag.canCloseOnClick = !0, t.flag.canDrag = !0, t.ref.style.transition = "", t.drag.start = t.drag.x = m(e.nativeEvent), t.drag.removalDistance = t.ref.offsetWidth * (t.props.draggablePercent / 100)
                }, t.onDragMove = function(e) {
                    t.flag.canDrag && (t.state.isRunning && t.pauseToast(), t.drag.x = m(e), t.drag.deltaX = t.drag.x - t.drag.start, t.drag.start !== t.drag.x && (t.flag.canCloseOnClick = !1), t.ref.style.transform = "translateX(" + t.drag.deltaX + "px)", t.ref.style.opacity = 1 - Math.abs(t.drag.deltaX / t.drag.removalDistance))
                }, t.onDragEnd = function(e) {
                    if (t.flag.canDrag) {
                        if (t.flag.canDrag = !1, Math.abs(t.drag.deltaX) > t.drag.removalDistance) return void t.setState({
                            preventExitTransition: !0
                        }, t.props.closeToast);
                        t.drag.y = g(e), t.ref.style.transition = "transform 0.2s, opacity 0.2s", t.ref.style.transform = "translateX(0)", t.ref.style.opacity = 1
                    }
                }, t.onDragTransitionEnd = function() {
                    var e = t.ref.getBoundingClientRect(),
                        r = e.top,
                        o = e.bottom,
                        n = e.left,
                        a = e.right;
                    t.props.pauseOnHover && t.drag.x >= n && t.drag.x <= a && t.drag.y >= r && t.drag.y <= o ? t.pauseToast() : t.playToast()
                }, t
            }
            r = e, (t = o).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
            var n = o.prototype;
            return n.componentDidMount = function() {
                this.props.onOpen(this.props.children.props), this.props.draggable && this.bindDragEvents(), this.props.pauseOnFocusLoss && this.bindFocusEvents()
            }, n.componentDidUpdate = function(e) {
                e.draggable !== this.props.draggable && (this.props.draggable ? this.bindDragEvents() : this.unbindDragEvents()), e.pauseOnFocusLoss !== this.props.pauseOnFocusLoss && (this.props.pauseOnFocusLoss ? this.bindFocusEvents() : this.unbindFocusEvents())
            }, n.componentWillUnmount = function() {
                this.props.onClose(this.props.children.props), this.props.draggable && this.unbindDragEvents(), this.props.pauseOnFocusLoss && this.unbindFocusEvents()
            }, n.bindFocusEvents = function() {
                window.addEventListener("focus", this.playToast), window.addEventListener("blur", this.pauseToast)
            }, n.unbindFocusEvents = function() {
                window.removeEventListener("focus", this.playToast), window.removeEventListener("blur", this.pauseToast)
            }, n.bindDragEvents = function() {
                document.addEventListener("mousemove", this.onDragMove), document.addEventListener("mouseup", this.onDragEnd), document.addEventListener("touchmove", this.onDragMove), document.addEventListener("touchend", this.onDragEnd)
            }, n.unbindDragEvents = function() {
                document.removeEventListener("mousemove", this.onDragMove), document.removeEventListener("mouseup", this.onDragEnd), document.removeEventListener("touchmove", this.onDragMove), document.removeEventListener("touchend", this.onDragEnd)
            }, n.render = function() {
                var e = this,
                    t = this.props,
                    r = t.closeButton,
                    o = t.children,
                    n = t.autoClose,
                    a = t.pauseOnHover,
                    i = t.closeOnClick,
                    c = t.type,
                    u = t.hideProgressBar,
                    p = t.closeToast,
                    f = t.transition,
                    m = t.position,
                    g = t.onExited,
                    v = t.className,
                    x = t.bodyClassName,
                    y = t.progressClassName,
                    b = t.progressStyle,
                    w = t.updateId,
                    C = t.role,
                    k = t.progress,
                    P = t.isProgressDone,
                    E = t.rtl,
                    S = {
                        className: (0, d.default)("Toastify__toast", "Toastify__toast--" + c, {
                            "Toastify__toast--rtl": E
                        }, v)
                    };
                n && a && (S.onMouseEnter = this.pauseToast, S.onMouseLeave = this.playToast), i && (S.onClick = function() {
                    return e.flag.canCloseOnClick && p()
                });
                var T = parseFloat(k) === k;
                return s.default.createElement(f, {
                    in: this.props.in,
                    appear: !0,
                    unmountOnExit: !0,
                    onExited: g,
                    position: m,
                    preventExitTransition: this.state.preventExitTransition
                }, s.default.createElement("div", h({}, S, {
                    ref: function(t) {
                        return e.ref = t
                    },
                    onMouseDown: this.onDragStart,
                    onTouchStart: this.onDragStart,
                    onTransitionEnd: this.onDragTransitionEnd
                }), s.default.createElement("div", h({}, this.props.in && {
                    role: C
                }, {
                    className: (0, d.default)("Toastify__toast-body", x)
                }), o), r && r, (n || T) && s.default.createElement(l.default, h({}, w && !T ? {
                    key: "pb-" + w
                } : {}, {
                    rtl: E,
                    delay: n,
                    isRunning: this.state.isRunning,
                    closeToast: p,
                    hide: u,
                    type: c,
                    style: b,
                    className: y,
                    controlledProgress: T,
                    isProgressDone: P,
                    progress: k
                }))))
            }, o
        }(s.Component);
    x.propTypes = {
        closeButton: p.falseOrElement.isRequired,
        autoClose: p.falseOrDelay.isRequired,
        children: c.default.node.isRequired,
        closeToast: c.default.func.isRequired,
        position: c.default.oneOf((0, p.objectValues)(u.POSITION)).isRequired,
        pauseOnHover: c.default.bool.isRequired,
        pauseOnFocusLoss: c.default.bool.isRequired,
        closeOnClick: c.default.bool.isRequired,
        transition: c.default.func.isRequired,
        rtl: c.default.bool.isRequired,
        hideProgressBar: c.default.bool.isRequired,
        draggable: c.default.bool.isRequired,
        draggablePercent: c.default.number.isRequired,
        in: c.default.bool,
        onExited: c.default.func,
        onOpen: c.default.func,
        onClose: c.default.func,
        type: c.default.oneOf((0, p.objectValues)(u.TYPE)),
        className: c.default.oneOfType([c.default.string, c.default.object]),
        bodyClassName: c.default.oneOfType([c.default.string, c.default.object]),
        progressClassName: c.default.oneOfType([c.default.string, c.default.object]),
        progressStyle: c.default.object,
        progress: c.default.number,
        isProgressDone: c.default.bool,
        updateId: c.default.oneOfType([c.default.string, c.default.number]),
        ariaLabel: c.default.string
    }, x.defaultProps = {
        type: u.TYPE.DEFAULT,
        in: !0,
        onOpen: v,
        onClose: v,
        className: null,
        bodyClassName: null,
        progressClassName: null,
        updateId: null,
        role: "alert"
    }, i = x
})), o.register("7fR2C", (function(r, n) {
    var a, i;
    e(r.exports), t(r.exports, "__esModule", (function() {
        return a
    }), (function(e) {
        return a = e
    })), t(r.exports, "default", (function() {
        return i
    }), (function(e) {
        return i = e
    })), a = !0, i = void 0;
    var s = p(o("fywoC")),
        c = p(o("djNMu")),
        d = p(o("fe1on")),
        l = o("8v6gd"),
        u = o("eyaRw");

    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function f() {
        return f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        }, f.apply(this, arguments)
    }

    function h(e) {
        var t, r = e.delay,
            o = e.isRunning,
            n = e.closeToast,
            a = e.type,
            i = e.hide,
            c = e.className,
            l = e.style,
            u = e.controlledProgress,
            p = e.progress,
            h = e.isProgressDone,
            m = e.rtl,
            g = f({}, l, {
                animationDuration: r + "ms",
                animationPlayState: o ? "running" : "paused",
                opacity: i ? 0 : 1,
                transform: u ? "scaleX(" + p + ")" : null
            }),
            v = (0, d.default)("Toastify__progress-bar", u ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar--" + a, {
                "Toastify__progress-bar--rtl": m
            }, c),
            x = ((t = {})[u && h ? "onTransitionEnd" : "onAnimationEnd"] = u && !h ? null : n, t);
        return s.default.createElement("div", f({
            className: v,
            style: g
        }, x))
    }
    h.propTypes = {
        delay: u.falseOrDelay.isRequired,
        isRunning: c.default.bool.isRequired,
        closeToast: c.default.func.isRequired,
        rtl: c.default.bool.isRequired,
        type: c.default.string,
        hide: c.default.bool,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        progress: c.default.number,
        controlledProgress: c.default.bool,
        isProgressDone: c.default.bool
    }, h.defaultProps = {
        type: l.TYPE.DEFAULT,
        hide: !1
    }, i = h
})), o.register("8v6gd", (function(e, r) {
    var o, n, a;
    t(e.exports, "ACTION", (function() {
        return o
    }), (function(e) {
        return o = e
    })), t(e.exports, "TYPE", (function() {
        return n
    }), (function(e) {
        return n = e
    })), t(e.exports, "POSITION", (function() {
        return a
    }), (function(e) {
        return a = e
    })), o = n = a = void 0;
    a = {
        TOP_LEFT: "top-left",
        TOP_RIGHT: "top-right",
        TOP_CENTER: "top-center",
        BOTTOM_LEFT: "bottom-left",
        BOTTOM_RIGHT: "bottom-right",
        BOTTOM_CENTER: "bottom-center"
    };
    n = {
        INFO: "info",
        SUCCESS: "success",
        WARNING: "warning",
        ERROR: "error",
        DEFAULT: "default"
    };
    o = {
        SHOW: 0,
        CLEAR: 1,
        DID_MOUNT: 2,
        WILL_UNMOUNT: 3,
        ON_CHANGE: 4
    }
})), o.register("eyaRw", (function(e, r) {
    var n, a, i, s;
    t(e.exports, "isValidDelay", (function() {
        return n
    }), (function(e) {
        return n = e
    })), t(e.exports, "objectValues", (function() {
        return a
    }), (function(e) {
        return a = e
    })), t(e.exports, "falseOrElement", (function() {
        return i
    }), (function(e) {
        return i = e
    })), t(e.exports, "falseOrDelay", (function() {
        return s
    }), (function(e) {
        return s = e
    })), n = d, a = function(e) {
        return Object.keys(e).map((function(t) {
            return e[t]
        }))
    }, i = s = void 0;
    var c = o("fywoC");

    function d(e) {
        return "number" == typeof e && !isNaN(e) && e > 0
    }

    function l(e) {
        return e.isRequired = function(t, r, o) {
            if (void 0 === t[r]) return new Error("The prop " + r + " is marked as required in \n      " + o + ", but its value is undefined.");
            e(t, r, o)
        }, e
    }
    var u = l((function(e, t, r) {
        var o = e[t];
        return !1 === o || d(o) ? null : new Error(r + " expect " + t + " \n      to be a valid Number > 0 or equal to false. " + o + " given.")
    }));
    s = u;
    var p = l((function(e, t, r) {
        var o = e[t];
        return !1 === o || (0, c.isValidElement)(o) ? null : new Error(r + " expect " + t + " \n      to be a valid react element or equal to false. " + o + " given.")
    }));
    i = p
})), o.register("5IkvD", (function(r, n) {
    var a, i;
    e(r.exports), t(r.exports, "__esModule", (function() {
        return a
    }), (function(e) {
        return a = e
    })), t(r.exports, "default", (function() {
        return i
    }), (function(e) {
        return i = e
    })), a = !0, i = void 0;
    var s = d(o("fywoC")),
        c = d(o("djNMu"));

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function l(e) {
        var t = e.closeToast,
            r = e.type,
            o = e.ariaLabel;
        return s.default.createElement("button", {
            className: "Toastify__close-button Toastify__close-button--" + r,
            type: "button",
            onClick: t,
            "aria-label": o
        }, "✖")
    }
    l.propTypes = {
        closeToast: c.default.func,
        arialLabel: c.default.string
    }, l.defaultProps = {
        ariaLabel: "close"
    }, i = l
})), o.register("76BYz", (function(e, r) {
    var n, a, i, s;
    t(e.exports, "Flip", (function() {
        return n
    }), (function(e) {
        return n = e
    })), t(e.exports, "Zoom", (function() {
        return a
    }), (function(e) {
        return a = e
    })), t(e.exports, "Slide", (function() {
        return i
    }), (function(e) {
        return i = e
    })), t(e.exports, "Bounce", (function() {
        return s
    }), (function(e) {
        return s = e
    })), n = a = i = s = void 0;
    var c, d = (c = o("dVVUn")) && c.__esModule ? c : {
        default: c
    };
    var l = (0, d.default)({
        enter: "Toastify__bounce-enter",
        exit: "Toastify__bounce-exit",
        appendPosition: !0
    });
    s = l;
    var u = (0, d.default)({
        enter: "Toastify__slide-enter",
        exit: "Toastify__slide-exit",
        duration: [450, 750],
        appendPosition: !0
    });
    i = u;
    var p = (0, d.default)({
        enter: "Toastify__zoom-enter",
        exit: "Toastify__zoom-exit"
    });
    a = p;
    var f = (0, d.default)({
        enter: "Toastify__flip-enter",
        exit: "Toastify__flip-exit"
    });
    n = f
})), o.register("dVVUn", (function(r, n) {
    var a, i;
    e(r.exports), t(r.exports, "__esModule", (function() {
        return a
    }), (function(e) {
        return a = e
    })), t(r.exports, "default", (function() {
        return i
    }), (function(e) {
        return i = e
    })), a = !0, i = function(e) {
        var t = e.enter,
            r = e.exit,
            o = e.duration,
            n = void 0 === o ? 750 : o,
            a = e.appendPosition,
            i = void 0 !== a && a;
        return function(e) {
            var o, a, d = e.children,
                p = e.position,
                f = e.preventExitTransition,
                h = function(e, t) {
                    if (null == e) return {};
                    var r, o, n = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) r = a[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, ["children", "position", "preventExitTransition"]),
                m = i ? t + "--" + p : t,
                g = i ? r + "--" + p : r;
            Array.isArray(n) && 2 === n.length ? (o = n[0], a = n[1]) : o = a = n;
            return s.default.createElement(c.default, l({}, h, {
                timeout: f ? 0 : {
                    enter: o,
                    exit: a
                },
                onEnter: function(e) {
                    e.classList.add(m), e.style.animationFillMode = "forwards", e.style.animationDuration = .001 * o + "s"
                },
                onEntered: function(e) {
                    e.classList.remove(m), e.style.cssText = ""
                },
                onExit: f ? u : function(e) {
                    e.classList.add(g), e.style.animationFillMode = "forwards", e.style.animationDuration = .001 * a + "s"
                }
            }), d)
        }
    };
    var s = d(o("fywoC")),
        c = d(o("b8Dcx"));

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function l() {
        return l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        }, l.apply(this, arguments)
    }
    var u = function() {}
})), o.register("62mGT", (function(r, o) {
    var n, a;
    e(r.exports), t(r.exports, "__esModule", (function() {
        return n
    }), (function(e) {
        return n = e
    })), t(r.exports, "default", (function() {
        return a
    }), (function(e) {
        return a = e
    })), n = !0, a = void 0;
    var i = {
        list: new Map,
        on: function(e, t) {
            return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
        },
        off: function(e) {
            return this.list.delete(e), this
        },
        emit: function(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
            return !!this.list.has(e) && (this.list.get(e).forEach((function(e) {
                return setTimeout((function() {
                    return e.call.apply(e, [null].concat(r))
                }), 0)
            })), !0)
        }
    };
    a = i
})), o.register("l621T", (function(r, n) {
    var a, i;
    e(r.exports), t(r.exports, "__esModule", (function() {
        return a
    }), (function(e) {
        return a = e
    })), t(r.exports, "default", (function() {
        return i
    }), (function(e) {
        return i = e
    })), a = !0, i = void 0;
    var s, c = (s = o("62mGT")) && s.__esModule ? s : {
            default: s
        },
        d = o("8v6gd");

    function l() {
        return l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        }, l.apply(this, arguments)
    }
    var u = null,
        p = [],
        f = function() {
            return !1
        };

    function h(e, t) {
        return l({}, e, {
            type: t,
            toastId: g(e)
        })
    }

    function m() {
        return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10)
    }

    function g(e) {
        return e && ("string" == typeof e.toastId || "number" == typeof e.toastId && !isNaN(e.toastId)) ? e.toastId : m()
    }

    function v(e, t) {
        return null !== u ? c.default.emit(d.ACTION.SHOW, e, t) : p.push({
            action: d.ACTION.SHOW,
            content: e,
            options: t
        }), t.toastId
    }
    var x = l((function(e, t) {
        return v(e, h(t, t && t.type || d.TYPE.DEFAULT))
    }), {
        success: function(e, t) {
            return v(e, h(t, d.TYPE.SUCCESS))
        },
        info: function(e, t) {
            return v(e, h(t, d.TYPE.INFO))
        },
        warn: function(e, t) {
            return v(e, h(t, d.TYPE.WARNING))
        },
        warning: function(e, t) {
            return v(e, h(t, d.TYPE.WARNING))
        },
        error: function(e, t) {
            return v(e, h(t, d.TYPE.ERROR))
        },
        dismiss: function(e) {
            return void 0 === e && (e = null), u && c.default.emit(d.ACTION.CLEAR, e)
        },
        isActive: f,
        update: function(e, t) {
            setTimeout((function() {
                if (u && void 0 !== u.collection[e]) {
                    var r = u.collection[e],
                        o = r.options,
                        n = r.content,
                        a = l({}, o, t, {
                            toastId: t.toastId || e
                        });
                    t.toastId && t.toastId !== e ? a.staleToastId = e : a.updateId = m();
                    var i = void 0 !== a.render ? a.render : n;
                    delete a.render, v(i, a)
                }
            }), 0)
        },
        done: function(e, t) {
            void 0 === t && (t = 1), x.update(e, {
                progress: t,
                isProgressDone: !0
            })
        },
        onChange: function(e) {
            "function" == typeof e && c.default.on(d.ACTION.ON_CHANGE, e)
        },
        POSITION: d.POSITION,
        TYPE: d.TYPE
    });
    c.default.on(d.ACTION.DID_MOUNT, (function(e) {
        u = e, x.isActive = function(e) {
            return u.isToastActive(e)
        }, p.forEach((function(e) {
            c.default.emit(e.action, e.content, e.options)
        })), p = []
    })).on(d.ACTION.WILL_UNMOUNT, (function() {
        u = null, x.isActive = f
    })), i = x
})), o.register("86Vcm", (function(e, r) {
    t(e.exports, "upgradeNames", (function() {
        return o
    }));
    const o = {
        moneyPerQuestion: "Money Per Question",
        streakBonus: "Streak Bonus",
        multiplier: "Multiplier",
        insurance: "Insurance"
    }
})), o.register("6sear", (function(e, r) {
    t(e.exports, "correct", (function() {
        return i
    })), t(e.exports, "incorrect", (function() {
        return s
    })), t(e.exports, "click", (function() {
        return c
    })), t(e.exports, "click2", (function() {
        return d
    })), t(e.exports, "applyTheme", (function() {
        return l
    })), t(e.exports, "successClick", (function() {
        return u
    })), t(e.exports, "woosh", (function() {
        return p
    })), t(e.exports, "done", (function() {
        return f
    })), t(e.exports, "celebrate", (function() {
        return h
    })), t(e.exports, "error", (function() {
        return m
    })), t(e.exports, "success", (function() {
        return g
    })), t(e.exports, "alert", (function() {
        return v
    })), t(e.exports, "clap", (function() {
        return x
    })), t(e.exports, "pop", (function() {
        return y
    })), t(e.exports, "freeze", (function() {
        return b
    })), t(e.exports, "stone", (function() {
        return w
    })), t(e.exports, "drain", (function() {
        return C
    })), t(e.exports, "pieSlice", (function() {
        return k
    })), t(e.exports, "spark", (function() {
        return P
    })), t(e.exports, "bounce", (function() {
        return E
    }));
    var n = o("6yrsF"),
        a = o("eEMhJ");
    const i = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("correct.mp3")]
        }),
        s = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("incorrect.mp3")]
        }),
        c = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("click.wav")]
        }),
        d = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("click2.wav")]
        }),
        l = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("applyTheme.wav")]
        }),
        u = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("successClick.wav")]
        }),
        p = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("woosh.wav")]
        }),
        f = (new(0, n.Howl)({
            src: [(0, a.getAssetPath)("splash.wav")]
        }), new(0, n.Howl)({
            src: [(0, a.getAssetPath)("done.wav")]
        })),
        h = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("celebrate.mp3")],
            volume: .5
        }),
        m = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("error.wav")]
        }),
        g = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("success.wav")]
        }),
        v = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("alert.wav")]
        }),
        x = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("clap.wav")]
        }),
        y = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("pop.mp3")]
        }),
        b = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("freeze.mp3")]
        }),
        w = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("stone.mp3")]
        }),
        C = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("drain.mp3")],
            volume: .7
        }),
        k = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("pieSlice.mp3")]
        }),
        P = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("spark.mp3")],
            volume: .4
        }),
        E = new(0, n.Howl)({
            src: [(0, a.getAssetPath)("bounce.wav")]
        })
})), o.register("k5Bua", (function(e, r) {
    t(e.exports, "THANOS", (function() {
        return o
    })), t(e.exports, "HIDDEN", (function() {
        return n
    })), t(e.exports, "SHOP_QR_SCAN", (function() {
        return a
    })), t(e.exports, "DEFENDING_HOMEBASE", (function() {
        return i
    })), t(e.exports, "LAVA", (function() {
        return s
    })), t(e.exports, "IMPOSTER", (function() {
        return c
    })), t(e.exports, "DRAW", (function() {
        return d
    })), t(e.exports, "COMEBACK", (function() {
        return l
    })), t(e.exports, "PARDY", (function() {
        return u
    }));
    const o = "THANOS",
        n = "HIDDEN",
        a = "SHOP_QR_SCAN",
        i = "DEFENDING_HOMEBASE",
        s = "LAVA",
        c = "IMPOSTER",
        d = "DRAW",
        l = "COMEBACK",
        u = "PARDY"
})), o.register("49Os1", (function(e, r) {
    t(e.exports, "default", (function() {
        return o
    }));
    var o = {
        requestHostClientIdFromGameCode: "REQUEST_HOST_ID",
        playerUserDetails: "PLAYER_USER_DETAILS",
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
})), o.register("jPiH0", (function(e, r) {
    t(e.exports, "DRAW_MODE_FONT", (function() {
        return o
    }));
    const o = "'Pangolin', sans-serif"
})), o.register("l360q", (function(e, r) {
    t(e.exports, "default", (function() {
        return n
    }));
    var n = o("6mX5n").default
})), o.register("6mX5n", (function(e, r) {
    t(e.exports, "default", (function() {
        return n
    }));
    const o = '"Product Sans"';
    var n = {
        mainFontName: o,
        name: o + ", sans-serif",
        important: o + ", sans-serif!important"
    }
})), o.register("5vs73", (function(e, r) {
    t(e.exports, "CLASSIC", (function() {
        return o
    })), t(e.exports, "TEAMS", (function() {
        return n
    })), t(e.exports, "THANOS", (function() {
        return a
    })), t(e.exports, "BOSS_BATTLE", (function() {
        return i
    })), t(e.exports, "HUMAN_ZOMBIE_DEFENDING_HOMEBASE", (function() {
        return s
    })), t(e.exports, "LAVA", (function() {
        return c
    })), t(e.exports, "IMPOSTER", (function() {
        return d
    })), t(e.exports, "DRAW", (function() {
        return l
    })), t(e.exports, "PARDY", (function() {
        return u
    }));
    const o = "CLASSIC",
        n = "TEAMS",
        a = "THANOS",
        i = "BOSS_BATTLE",
        s = "HUMAN_ZOMBIE_DEFENDING_HOMEBASE",
        c = "LAVA",
        d = "IMPOSTER",
        l = "DRAW",
        u = "PARDY"
})), o.register("1Q66o", (function(e, r) {
    t(e.exports, "CSS_TRANSITION_TIMEOUT", (function() {
        return o
    }));
    const o = 250
})), o.register("5ArpY", (function(e, r) {
    t(e.exports, "defaultShopColor", (function() {
        return c
    })), t(e.exports, "defaultContinueColor", (function() {
        return d
    })), t(e.exports, "default", (function() {
        return u
    }));
    var n = o("kHqmx"),
        a = o("kC0Tv"),
        i = o("4MuSt");
    const s = o("j2XHK").themes.filter((e => "Default" === e.name))[0],
        c = {
            background: "#311B92",
            text: a.default.White
        },
        d = {
            background: "#1A237E",
            text: a.default.White
        };
    class l {
        constructor() {
            this.theme = {
                defaultBackground: s.question.background,
                question: s.question,
                palette: s.palette,
                response: {
                    correctAnswer: {
                        background: "#388E3C",
                        text: a.default.White
                    },
                    incorrectAnswer: {
                        background: "#B71C1C",
                        text: a.default.White
                    },
                    shop: c,
                    continue: d
                },
                desktopBreakpoint: 650
            }, this.availableThemes = i.observable.array(), this.disabledThemes = i.observable.array(), this.themeName = s.name, this.ownedThemes = i.observable.array(), (0, i.makeObservable)(this)
        }
    }(0, n.__decorate)([i.observable], l.prototype, "theme", void 0), (0, n.__decorate)([i.observable], l.prototype, "availableThemes", void 0), (0, n.__decorate)([i.observable], l.prototype, "disabledThemes", void 0), (0, n.__decorate)([i.observable], l.prototype, "themeName", void 0), (0, n.__decorate)([i.observable], l.prototype, "ownedThemes", void 0);
    var u = l
})), o.register("fP0DJ", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var n = o("kHqmx"),
        a = o("4MuSt");
    class i {
        constructor() {
            (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], i.prototype, "translations", void 0);
    var s = i
})), o.register("lxxek", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var n = o("kHqmx"),
        a = o("4MuSt");
    class i {
        constructor() {
            this.fullBlackScreen = !1, this.snowing = !1, this.blurredScreen = !1, this.showingSuccessModal = !1, this.successModalInfo = {
                icon: "",
                background: "",
                color: "",
                title: "",
                description: "",
                sound: "",
                textOptions: null
            }, (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], i.prototype, "fullBlackScreen", void 0), (0, n.__decorate)([a.observable], i.prototype, "snowing", void 0), (0, n.__decorate)([a.observable], i.prototype, "blurredScreen", void 0), (0, n.__decorate)([a.observable], i.prototype, "showingSuccessModal", void 0), (0, n.__decorate)([a.observable], i.prototype, "successModalInfo", void 0);
    var s = i
})), o.register("3bLNC", (function(e, r) {
    t(e.exports, "upgradeNames", (function() {
        return i
    })), t(e.exports, "default", (function() {
        return c
    }));
    var n = o("kHqmx"),
        a = o("4MuSt");
    const i = {
        moneyPerQuestion: "Money Per Question",
        streakBonus: "Streak Bonus",
        multiplier: "Multiplier",
        insurance: "Insurance"
    };
    class s {
        constructor() {
            this.upgradePricingDiscount = 1, this.upgrades = a.observable.array(), this.currentlySelectedUpgrade = i.moneyPerQuestion, this.upgradeLevels = {
                moneyPerQuestion: 1,
                streakBonus: 1,
                multiplier: 1,
                insurance: 1
            }, this.upgradeLevelTabs = {
                moneyPerQuestion: 2,
                streakBonus: 2,
                multiplier: 2,
                insurance: 2
            }, this.homebaseUpgades = a.observable.array(), this.lavaUpgrades = a.observable.array(), (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], s.prototype, "upgradePricingDiscount", void 0), (0, n.__decorate)([a.observable], s.prototype, "upgrades", void 0), (0, n.__decorate)([a.observable], s.prototype, "currentlySelectedUpgrade", void 0), (0, n.__decorate)([a.observable], s.prototype, "upgradeLevels", void 0), (0, n.__decorate)([a.observable], s.prototype, "upgradeLevelTabs", void 0), (0, n.__decorate)([a.observable], s.prototype, "homebaseUpgades", void 0), (0, n.__decorate)([a.observable], s.prototype, "lavaUpgrades", void 0);
    var c = s
})), o.register("7ItHC", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var n = o("kHqmx"),
        a = o("4MuSt");
    class i {
        constructor() {
            this.name = "", this.groupId = "", this.groupMemberId = "", this.theme = "Default", this.team = null, this.place = 1, this.readToMeEnabled = !1, (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], i.prototype, "name", void 0), (0, n.__decorate)([a.observable], i.prototype, "groupId", void 0), (0, n.__decorate)([a.observable], i.prototype, "groupMemberId", void 0), (0, n.__decorate)([a.observable], i.prototype, "theme", void 0), (0, n.__decorate)([a.observable], i.prototype, "team", void 0), (0, n.__decorate)([a.observable], i.prototype, "place", void 0), (0, n.__decorate)([a.observable], i.prototype, "readToMeEnabled", void 0);
    var s = i
})), o.register("7CIMU", (function(e, r) {
    t(e.exports, "ImposterStatus", (function() {
        return i
    })), t(e.exports, "PersonRole", (function() {
        return c
    })), t(e.exports, "ImposterShopItemId", (function() {
        return l
    })), t(e.exports, "default", (function() {
        return f
    }));
    var n = o("kHqmx"),
        a = o("4MuSt");
    let i;
    var s;
    let c;
    var d;
    let l;
    var u;
    (s = i || (i = {})).intro = "intro", s.questions = "questions", s.discussion = "discussion", s.voting = "voting", s.votingResult = "votingResult", (d = c || (c = {})).detective = "detective", d.imposter = "imposter", (u = l || (l = {})).donate = "donate", u.privateInvestigation = "privateInvestigation", u.publicInvestigation = "publicInvestigation", u.meeting = "meeting", u.investigationRemover = "investigationRemover", u.fakeInvestigation = "fakeInvestigation", u.noteViewer = "noteViewer", u.blendIn = "blendIn", u.clearListRemover = "clearListRemover";
    class p {
        constructor() {
            this.status = i.intro, this.me = null, this.meetingsLeft = 0, this.impostersLeft = 0, this.investigationsLeft = 0, this.epl = null, this.shopItems = a.observable.array(), this.currentShopItem = null, this.currentShopItemModalVisible = !1, this.noteDrawerOpen = !1, this.roleModalOpen = !0, (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], p.prototype, "status", void 0), (0, n.__decorate)([a.observable], p.prototype, "me", void 0), (0, n.__decorate)([a.observable], p.prototype, "meetingsLeft", void 0), (0, n.__decorate)([a.observable], p.prototype, "impostersLeft", void 0), (0, n.__decorate)([a.observable], p.prototype, "investigationsLeft", void 0), (0, n.__decorate)([a.observable], p.prototype, "epl", void 0), (0, n.__decorate)([a.observable], p.prototype, "shopItems", void 0), (0, n.__decorate)([a.observable], p.prototype, "currentShopItem", void 0), (0, n.__decorate)([a.observable], p.prototype, "currentShopItemModalVisible", void 0), (0, n.__decorate)([a.observable], p.prototype, "noteDrawerOpen", void 0), (0, n.__decorate)([a.observable], p.prototype, "roleModalOpen", void 0);
    var f = p
})), o.register("2L9cU", (function(e, r) {
    t(e.exports, "PointAdditionType", (function() {
        return i
    })), t(e.exports, "DrawRole", (function() {
        return c
    })), t(e.exports, "DrawStatus", (function() {
        return l
    })), t(e.exports, "default", (function() {
        return f
    }));
    var n = o("kHqmx"),
        a = o("4MuSt");
    let i;
    var s;
    let c;
    var d;
    let l;
    var u;
    (s = i || (i = {})).correct = "correct", s.speed = "speed", s.firstGuess = "firstGuess", s.goodDrawer = "goodDrawer", (d = c || (c = {})).drawer = "Drawer", d.guesser = "Guesser", (u = l || (l = {})).pickDrawer = "pickDrawer", u.termSelection = "termSelection", u.drawing = "drawing", u.results = "results";
    class p {
        constructor() {
            this.round = {
                term: "",
                secondsLeft: 0,
                drawingBase64: "",
                revealText: "",
                drawer: {
                    id: "",
                    name: ""
                },
                termOptions: []
            }, this.me = {
                role: c.guesser,
                lastRound: null,
                answeredCorrectly: !1
            }, this.status = l.pickDrawer, this.latestLine = null, this.latestFeedItem = null, this.shouldClearCanvas = !1, (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], p.prototype, "round", void 0), (0, n.__decorate)([a.observable], p.prototype, "me", void 0), (0, n.__decorate)([a.observable], p.prototype, "status", void 0), (0, n.__decorate)([a.observable], p.prototype, "latestLine", void 0), (0, n.__decorate)([a.observable], p.prototype, "latestFeedItem", void 0), (0, n.__decorate)([a.observable], p.prototype, "shouldClearCanvas", void 0);
    var f = p
})), o.register("2Xedd", (function(e, r) {
    t(e.exports, "PardyScreen", (function() {
        return i
    })), t(e.exports, "PardyQuestionScreen", (function() {
        return c
    })), t(e.exports, "PardyQuestionStatus", (function() {
        return l
    })), t(e.exports, "default", (function() {
        return f
    }));
    var n = o("kHqmx"),
        a = o("4MuSt");
    let i;
    var s;
    let c;
    var d;
    let l;
    var u;
    (s = i || (i = {})).home = "home", s.question = "question", s.answer = "answer", (d = c || (c = {})).preview = "preview", d.finale = "finale", d.question = "question", (u = l || (l = {})).preview = "preview", u.ask = "ask", u.timesUp = "timesUp";
    class p {
        constructor() {
            this.screen = i.home, this.questionScreen = c.preview, this.questionStatus = l.preview, this.powers = a.observable.array(), this.power = "", this.powerOptions = a.observable.array(), this.currentQuestion = null, this.animatingQuestionScreenOut = !1, this.animatingBetScreenOut = !1, this.answered = !1, this.answeredCorrectly = !1, this.answerResponseItems = a.observable.array(), this.maxBet = 1, this.currentBet = 0, this.tips = a.observable.array(), this.answerLockedInWittyMessages = a.observable.array(), this.correctWittyMessages = a.observable.array(), this.incorrectWittyMessages = a.observable.array(), (0, a.makeObservable)(this)
        }
    }(0, n.__decorate)([a.observable], p.prototype, "screen", void 0), (0, n.__decorate)([a.observable], p.prototype, "questionScreen", void 0), (0, n.__decorate)([a.observable], p.prototype, "questionStatus", void 0), (0, n.__decorate)([a.observable], p.prototype, "powers", void 0), (0, n.__decorate)([a.observable], p.prototype, "power", void 0), (0, n.__decorate)([a.observable], p.prototype, "powerOptions", void 0), (0, n.__decorate)([a.observable], p.prototype, "currentQuestion", void 0), (0, n.__decorate)([a.observable], p.prototype, "animatingQuestionScreenOut", void 0), (0, n.__decorate)([a.observable], p.prototype, "animatingBetScreenOut", void 0), (0, n.__decorate)([a.observable], p.prototype, "answered", void 0), (0, n.__decorate)([a.observable], p.prototype, "answeredCorrectly", void 0), (0, n.__decorate)([a.observable], p.prototype, "answerResponseItems", void 0), (0, n.__decorate)([a.observable], p.prototype, "maxBet", void 0), (0, n.__decorate)([a.observable], p.prototype, "currentBet", void 0), (0, n.__decorate)([a.observable], p.prototype, "tips", void 0), (0, n.__decorate)([a.observable], p.prototype, "answerLockedInWittyMessages", void 0), (0, n.__decorate)([a.observable], p.prototype, "correctWittyMessages", void 0), (0, n.__decorate)([a.observable], p.prototype, "incorrectWittyMessages", void 0);
    var f = p
})), o.register("l6fQm", (function(e, r) {
    t(e.exports, "startLoop", (function() {
        return s
    }));
    var n = o("eEMhJ"),
        a = o("ic45h");
    const i = () => {
            a.default.forEach((e => {
                var t;
                window[e] && (t = e, setTimeout((() => {
                    (0, n.send)("REDBOAT", t)
                }), 130))
            }))
        },
        s = () => {
            setInterval(i, 1e4)
        }
})), o.register("ic45h", (function(e, r) {
    t(e.exports, "default", (function() {
        return n
    }));
    var o = ["clickElement", "Exploit", "msgpack", "AYO_YOU_SHOULDNT_BE_HERE_ROCKS_NETWORK_VAREDZP", "getAnswer"];
    var n = [o[0], o[1], o[2], o[3]]
})), o.register("gRSQ1", (function(e, r) {
    t(e.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv"),
        a = o("4ezcE"),
        i = o("gwjrg"),
        s = o("h503Q"),
        c = o("l360q"),
        d = o("fywoC"),
        l = o("2FDaO"),
        u = o("4MuSt"),
        p = o("lpEVe"),
        f = o("fQMql");
    const h = (0, a.default)({
        typography: {
            fontFamily: [c.default.mainFontName, "sans-serif"].join(",")
        }
    });
    var m = (0, p.observer)((e => {
        const {
            theme: t
        } = d.useContext(f.default);
        return (0, n.jsx)(i.default, {
            theme: h,
            children: (0, n.jsx)(l.ThemeProvider, {
                theme: (0, u.toJS)(t.theme),
                children: (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(s.default, {
                        ...e
                    })
                })
            })
        })
    }))
})), o.register("gwjrg", (function(e, n) {
    t(e.exports, "default", (function() {
        return l
    }));
    var a = o("kqQIs"),
        i = o("fywoC");
    o("djNMu");
    var s = o("3viKG"),
        c = o("fwDf4"),
        d = o("2QGO5");
    var l = function(e) {
        var t = e.children,
            o = e.theme,
            n = (0, c.default)(),
            l = r(i).useMemo((function() {
                var e = null === n ? o : function(e, t) {
                    return "function" == typeof t ? t(e) : (0, a.default)((0, a.default)({}, e), t)
                }(n, o);
                return null != e && (e[d.default] = null !== n), e
            }), [o, n]);
        return r(i).createElement(s.default.Provider, {
            value: l
        }, t)
    }
})), o.register("h503Q", (function(e, r) {
    t(e.exports, "default", (function() {
        return i
    }));
    var n = o("hxEiv"),
        a = o("hLlX2");
    o("fywoC");
    var i = e => (0, n.jsx)(a.default, {
        ...e
    })
})), o.register("hLlX2", (function(e, r) {
    t(e.exports, "default", (function() {
        return S
    }));
    var n = o("hxEiv"),
        a = o("fywoC"),
        i = o("9es0Y"),
        s = o("lpEVe"),
        c = o("2FDaO"),
        d = o("l360q"),
        l = o("6ODUt"),
        u = o("bHPgO"),
        p = o("5xW2O"),
        f = o("lJSKF"),
        h = o("cckSe"),
        m = o("8YGuP"),
        g = o("gMHS1"),
        v = o("fQMql"),
        x = o("lKmIF");
    let y, b, w, C = e => e;
    const k = c.default.div(y || (y = C`
  display: flex;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  color: ${0};
`), x.default.Black),
        P = c.default.div(b || (b = C`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  font-family: ${0};
  user-select: none;
  ${0}
  transition: filter 1s;
  overflow: hidden;
`), d.default.name, (e => e.blurred && "filter: blur(5px);")),
        E = c.default.div(w || (w = C`
  height: 0px;
  width: 0px;
  .toast-body {
    font-family: ${0};
  }
`), d.default.name);
    var S = (0, s.observer)((e => {
        const {
            ui: t
        } = a.useContext(v.default);
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(f.default, {
                children: (0, n.jsx)(k, {
                    children: (0, n.jsxs)(P, {
                        blurred: t.blurredScreen,
                        children: [(0, n.jsx)(l.default, {}), (0, n.jsx)(u.default, {
                            ...e
                        })]
                    })
                })
            }), (0, n.jsx)(E, {
                children: (0, n.jsx)(i.ToastContainer, {
                    bodyClassName: "toast-body"
                })
            }), (0, n.jsx)(h.default, {}), (0, n.jsx)(m.default, {}), (0, n.jsx)(g.default, {}), (0, n.jsx)(p.default, {})]
        })
    }))
})), o.register("6ODUt", (function(e, r) {
    t(e.exports, "default", (function() {
        return u
    }));
    var n = o("hxEiv"),
        a = o("fywoC"),
        i = o("1hRKQ"),
        s = o("dIw53"),
        c = o("k1Bp0"),
        d = o("i2MAF");
    class l extends a.Component {
        render() {
            return (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.default, {}), (0, n.jsx)(d.default, {}), (0, n.jsx)(c.default, {}), (0, n.jsx)(i.default, {})]
            })
        }
    }
    var u = l
})), o.register("1hRKQ", (function(e, r) {
    t(e.exports, "DISABLED_PATHS", (function() {
        return B
    })), t(e.exports, "default", (function() {
        return R
    }));
    var n = o("hxEiv"),
        a = o("ggxqK"),
        i = o("5RLZo"),
        s = o("7v7bl"),
        c = o("kC0Tv"),
        d = o("hbfMQ"),
        l = o("i6SGg"),
        u = o("eEMhJ"),
        p = o("lpEVe"),
        f = o("fywoC"),
        h = o("2FDaO"),
        m = o("4rTw1"),
        g = o("62e6O"),
        v = o("hWv3v"),
        x = o("8ceRK"),
        y = o("5e6Nf");
    o("jlxb2");
    var b = o("1rlgk"),
        w = o("iG4sB"),
        C = o("fQMql");
    let k, P, E, S = e => e;
    const T = [l.default.join, l.default.drawMode],
        B = [l.default.waiting, l.default.gameOver, l.default.team, l.default.nonDismissMessage, l.default.imposterMode],
        j = h.default.div(k || (k = S`
  flex: 0 1 auto;
  color: ${0};
`), c.default.White),
        M = h.default.div(P || (P = S`
  height: ${0}px;
  background: #4252af;
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${0};
  z-index: 1;
`), 63, d.default.basic),
        _ = h.default.div(E || (E = S`
  width: 100%;
  display: flex;
  align-items: center;
`));
    var R = (0, p.observer)((() => {
        const {
            balance: e,
            user: t,
            navigation: r,
            powerups: o,
            questions: {
                lockedViewingCorrectAnswer: c
            }
        } = f.useContext(C.default), d = f.useCallback((() => {
            if (!c) return r.currentRoute === l.default.questions ? (0, u.changeRoute)(l.default.shop) : (0, u.changeRoute)(l.default.questions)
        }), [r.currentRoute, c]), p = f.useCallback((() => {
            const e = {
                fontWeight: 900,
                cursor: "pointer",
                fontSize: 22
            };
            return t.team ? {
                ...e,
                padding: 5,
                backgroundColor: (0, u.getTeamColor)(),
                borderRadius: 4
            } : e
        }), [t.team]), h = f.useCallback((() => (0, u.toggleDrawer)(!0)), []), k = () => (0, u.inHiddenMode)() || o.appliedPowerups.includes(b.PowerupNames.cashConcealer) ? (0, n.jsx)("div", {}) : (0, n.jsx)("div", {
            onClick: d,
            style: p(),
            children: (0, u.getMoney)(e.balance)
        });
        return T.includes(r.currentRoute) ? null : B.includes(r.currentRoute) ? (0, n.jsx)(M, {
            children: (0, n.jsx)(_, {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: (0, n.jsx)("img", {
                    src: "/client/img/svgLogoWhite.svg",
                    style: {
                        height: 30
                    }
                })
            })
        }) : (0, n.jsxs)(j, {
            children: [(0, n.jsx)(M, {
                children: (0, n.jsxs)(_, {
                    style: {
                        paddingLeft: 8,
                        paddingRight: 10
                    },
                    children: [(0, n.jsx)(m.default, {}), (0, n.jsx)(a.default, {
                        onClick: h,
                        color: "inherit",
                        "aria-label": "Menu",
                        children: (0, n.jsx)(s.default, {})
                    }), (0, n.jsx)(v.default, {}), (0, n.jsx)(g.default, {}), (0, n.jsx)(w.default, {}), (0, n.jsx)(x.default, {}), (0, n.jsxs)("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: e.customColor ? e.customColor : "inherit",
                            transition: "color 0.25s"
                        },
                        children: [(0, n.jsx)("div", {}), (0, n.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: (0, n.jsx)("div", {
                                children: t.team ? (0, n.jsx)(i.default, {
                                    title: (0, n.jsx)("div", {
                                        style: {
                                            fontSize: 19,
                                            padding: 5
                                        },
                                        children: (0, u.capitalizeFirstLetter)(t.team.id)
                                    }),
                                    placement: "left",
                                    children: k()
                                }) : k()
                            })
                        })]
                    })]
                })
            }), (0, n.jsx)(y.default, {})]
        })
    }))
})), o.register("ggxqK", (function(e, r) {
    t(e.exports, "default", (function() {
        return f
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("cY4lv"),
        d = o("jhlnr"),
        l = o("7s22H"),
        u = o("kYx4h"),
        p = i.forwardRef((function(e, t) {
            var r = e.edge,
                o = void 0 !== r && r,
                c = e.children,
                d = e.classes,
                p = e.className,
                f = e.color,
                h = void 0 === f ? "default" : f,
                m = e.disabled,
                g = void 0 !== m && m,
                v = e.disableFocusRipple,
                x = void 0 !== v && v,
                y = e.size,
                b = void 0 === y ? "medium" : y,
                w = (0, a.default)(e, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);
            return i.createElement(l.default, (0, n.default)({
                className: (0, s.default)(d.root, p, "default" !== h && d["color".concat((0, u.default)(h))], g && d.disabled, "small" === b && d["size".concat((0, u.default)(b))], {
                    start: d.edgeStart,
                    end: d.edgeEnd
                } [o]),
                centerRipple: !0,
                focusRipple: !x,
                disabled: g,
                ref: t
            }, w), i.createElement("span", {
                className: d.label
            }, c))
        })),
        f = (0, c.default)((function(e) {
            return {
                root: {
                    textAlign: "center",
                    flex: "0 0 auto",
                    fontSize: e.typography.pxToRem(24),
                    padding: 12,
                    borderRadius: "50%",
                    overflow: "visible",
                    color: e.palette.action.active,
                    transition: e.transitions.create("background-color", {
                        duration: e.transitions.duration.shortest
                    }),
                    "&:hover": {
                        backgroundColor: (0, d.fade)(e.palette.action.active, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    },
                    "&$disabled": {
                        backgroundColor: "transparent",
                        color: e.palette.action.disabled
                    }
                },
                edgeStart: {
                    marginLeft: -12,
                    "$sizeSmall&": {
                        marginLeft: -3
                    }
                },
                edgeEnd: {
                    marginRight: -12,
                    "$sizeSmall&": {
                        marginRight: -3
                    }
                },
                colorInherit: {
                    color: "inherit"
                },
                colorPrimary: {
                    color: e.palette.primary.main,
                    "&:hover": {
                        backgroundColor: (0, d.fade)(e.palette.primary.main, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    }
                },
                colorSecondary: {
                    color: e.palette.secondary.main,
                    "&:hover": {
                        backgroundColor: (0, d.fade)(e.palette.secondary.main, e.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    }
                },
                disabled: {},
                sizeSmall: {
                    padding: 3,
                    fontSize: e.typography.pxToRem(18)
                },
                label: {
                    width: "100%",
                    display: "flex",
                    alignItems: "inherit",
                    justifyContent: "inherit"
                }
            }
        }), {
            name: "MuiIconButton"
        })(p)
})), o.register("7v7bl", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
        }), "Menu")
})), o.register("9yGbA", (function(e, n) {
    t(e.exports, "default", (function() {
        return c
    }));
    var a = o("kqQIs"),
        i = o("fywoC"),
        s = o("fpXJx");

    function c(e, t) {
        var o = r(i).memo(r(i).forwardRef((function(t, o) {
            return r(i).createElement(s.default, (0, a.default)({
                ref: o
            }, t), e)
        })));
        return o.muiName = s.default.muiName, o
    }
})), o.register("hbfMQ", (function(e, r) {
    t(e.exports, "default", (function() {
        return o
    }));
    var o = {
        basic: "0px 4px 33px -6px rgba(0, 0, 0, 0.46)"
    }
})), o.register("4rTw1", (function(e, r) {
    t(e.exports, "default", (function() {
        return v
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("ggxqK"),
        c = o("492tx"),
        d = o("kC0Tv"),
        l = o("i6SGg"),
        u = o("6sear"),
        p = o("eEMhJ"),
        f = o("lpEVe"),
        h = o("fywoC");
    const m = e => (0, i.jsx)("div", {
        style: {
            color: d.default.White
        },
        children: (0, i.jsx)(s.default, {
            onClick: e.goBack,
            color: "inherit",
            children: (0, i.jsx)(c.default, {})
        })
    });
    let g = class extends h.Component {
        render() {
            return this.props.navigation.currentRoute === l.default.upgrade ? (0, i.jsx)(m, {
                goBack: this.goBack
            }) : null
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "goBack", (() => {
                u.click.play(), (0, p.changeRoute)(l.default.shop)
            }))
        }
    };
    g = (0, a.__decorate)([(0, f.inject)("navigation"), f.observer], g);
    var v = g
})), o.register("492tx", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        }), "ArrowBack")
})), o.register("62e6O", (function(e, r) {
    t(e.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv"),
        a = o("ggxqK"),
        i = o("a7KZL"),
        s = o("kC0Tv"),
        c = o("i6SGg"),
        d = o("lpEVe"),
        l = o("fywoC"),
        u = o("fQMql"),
        p = o("5xS5K"),
        f = o("eEMhJ"),
        h = o("jcI11");
    var m = (0, d.observer)((() => {
        const {
            navigation: e,
            questions: t,
            user: r,
            pardy: o
        } = l.useContext(u.default);
        return (0, n.jsx)(n.Fragment, {
            children: r.readToMeEnabled && p.default.hasFinishedReading() && p.default.canPlayAgain() && (e.currentRoute === c.default.questions || e.currentRoute === c.default.pardyMode) && (0, n.jsx)("div", {
                style: {
                    color: s.default.White
                },
                children: (0, n.jsx)(a.default, {
                    onClick: () => {
                        (0, f.inPardyMode)() ? p.default.play(o.currentQuestion): p.default.play((0, h.DecryptData)(t.ceq))
                    },
                    color: "inherit",
                    children: (0, n.jsx)(i.default, {})
                })
            })
        })
    }))
})), o.register("a7KZL", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"
        }), "Hearing")
})), o.register("fQMql", (function(e, r) {
    t(e.exports, "default", (function() {
        return a
    }));
    var n = o("kcsKB");
    var a = o("fywoC").createContext(n.default)
})), o.register("hWv3v", (function(e, n) {
    t(e.exports, "default", (function() {
        return g
    }));
    var a = o("divCp"),
        i = o("kHqmx"),
        s = o("hxEiv"),
        c = o("ggxqK"),
        d = o("12Iw0"),
        l = o("9GW62"),
        u = o("lpEVe"),
        p = o("fywoC"),
        f = o("j2XHK"),
        h = o("eEMhJ");
    let m = class extends p.Component {
        render() {
            return this.props.gameOptions.type !== f.GameType.live || (0, h.inLavaMode)() || (0, h.inZombiesVsHumansMode)() || (0, h.inImposterMode)() || (0, h.inHiddenMode)() || (0, h.inPardyMode)() ? null : (0, s.jsx)(c.default, {
                onClick: this.open,
                color: "inherit",
                "aria-label": "Leaderboard",
                children: (0, s.jsx)(r(d), {})
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "open", (() => {
                this.props.navigation.leaderboardDrawerOpen = !0, (0, l.fetchLatestLeaderboardStats)()
            }))
        }
    };
    m = (0, i.__decorate)([(0, u.inject)("navigation", "gameOptions"), u.observer], m);
    var g = m
})), o.register("12Iw0", (function(e, t) {
    var r = o("8IEkO");
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.default = void 0;
    var n = r(o("fywoC")),
        a = (0, r(o("54q3O")).default)(n.default.createElement("path", {
            d: "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"
        }), "Games");
    e.exports.default = a
})), o.register("8IEkO", (function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
})), o.register("9GW62", (function(e, r) {
    t(e.exports, "leaderboardSorter", (function() {
        return u
    })), t(e.exports, "fetchLatestLeaderboardStats", (function() {
        return p
    })), t(e.exports, "default", (function() {
        return h
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("49Os1"),
        s = o("eEMhJ"),
        c = o("lpEVe"),
        d = o("fywoC"),
        l = o("cjBfv");
    const u = e => {
            const t = (0, s.inThanosMode)() ? "stones" : "balance";
            return e.slice().sort(((e, r) => e[t] === r[t] ? 0 : e[t] > r[t] ? -1 : 1))
        },
        p = () => (0, s.send)((0, s.inTeamMode)() ? i.default.requestTeamLeaderboard : i.default.requestPlayerLeaderboard);
    let f = class extends d.Component {
        componentDidMount() {
            p()
        }
        render() {
            const e = (0, s.inTeamMode)();
            let t = [],
                r = [];
            return e && !this.props.gameValues.teams.length ? null : e || this.props.gameValues.players.length ? (e ? t = u(this.props.gameValues.teams) : r = u(this.props.gameValues.players), (0, a.jsx)("div", {
                style: {
                    width: "100%"
                },
                children: e ? t.map(((e, t) => (0, a.jsx)(l.default, {
                    item: e,
                    position: t + 1,
                    isPlayer: !1,
                    usePowerupAction: this.props.usePowerupAction,
                    parentAction: this.props.parentAction,
                    showSelf: this.props.showSelf,
                    showHidden: this.props.showHidden,
                    customBorderRadius: this.props.customItemBorderRadius
                }, e.id))) : r.map(((e, t) => (0, a.jsx)(l.default, {
                    item: e,
                    position: t + 1,
                    isPlayer: !0,
                    usePowerupAction: this.props.usePowerupAction,
                    parentAction: this.props.parentAction,
                    showSelf: this.props.showSelf,
                    showHidden: this.props.showHidden,
                    customBorderRadius: this.props.customItemBorderRadius
                }, e.id)))
            })) : null
        }
    };
    f = (0, n.__decorate)([(0, c.inject)("gameValues", "gameOptions"), c.observer], f);
    var h = f
})), o.register("cjBfv", (function(e, r) {
    t(e.exports, "LINK_ICON", (function() {
        return E
    })), t(e.exports, "default", (function() {
        return R
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("7SwYo"),
        c = o("5933e"),
        d = o("b9PLE"),
        l = o("fgUFi"),
        u = o("kC0Tv"),
        p = o("hbfMQ"),
        f = o("8nYP6");
    o("jlxb2");
    var h = o("1rlgk"),
        m = o("eEMhJ"),
        g = o("lpEVe"),
        v = o("fywoC"),
        x = o("2FDaO"),
        y = o("j2XHK");
    let b, w, C, k, P = e => e;
    const E = "fas fa-link",
        S = x.default.div(b || (b = P`
  margin-top: 7px;
  margin-bottom: 7px;
  width: 100%;
  background: ${0};
  border-radius: ${0}px;
  color: ${0};
  padding: 9px;
  box-sizing: border-box;
  box-shadow: ${0};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-weight: bold;
  font-size: 23px;
  align-items: center;
  font-family: ${0};
`), (e => e.backgroundColor), (e => e.customBorderRadius || 3), (e => e.textColor), p.default.basic, (() => (0, m.mainFontName)())),
        T = x.default.div(w || (w = P`
  display: flex;
  align-items: center;
  flex: 1;
`)),
        B = x.default.div(C || (C = P`
  height: 40px;
  margin-right: 5px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${0};
  color: ${0};
`), (e => e.backgroundColor), (e => e.textColor)),
        j = x.default.div(k || (k = P`
  font-weight: normal;
  font-size: 15px;
`)),
        M = e => {
            let t = "";
            return e.players.forEach(((r, o) => {
                t += r, o + 1 !== e.players.length && (t += ", ")
            })), t
        };
    let _ = class extends v.Component {
        render() {
            const e = this.props,
                t = this.getIcon();
            if (e.item.activePowerups.includes(h.PowerupNames.undercover) && !this.props.showHidden) return null;
            const {
                isPlayer: r
            } = e;
            if (r) {
                const r = e.item;
                if (r.id === (0, f.identifier)() && !this.props.showSelf) return null;
                const o = this.props.theme.availableThemes.filter((e => e.name === r.theme))[0];
                o || (o.name = "Default");
                let n = u.default.White,
                    a = u.default.Black;
                return "Default" !== o.name && (n = o.question.background, a = o.question.text), (0, i.jsxs)(S, {
                    backgroundColor: n,
                    textColor: a,
                    customBorderRadius: this.props.customBorderRadius,
                    children: [(0, i.jsxs)(T, {
                        children: [(0, i.jsx)(B, {
                            backgroundColor: o.palette[0].background,
                            textColor: o.palette[0].text,
                            children: (0, i.jsx)(l.default, {
                                paddingHorizontal: 7,
                                paddingVertical: 7,
                                text: t ? (0, i.jsx)(c.default, {
                                    name: t
                                }) : e.position.toString()
                            })
                        }), (0, i.jsx)("div", {
                            onClick: this.toggleBalanceVisiblity,
                            style: {
                                width: "calc(100% - 50px)",
                                marginLeft: 7,
                                cursor: "pointer"
                            },
                            children: this.state.showingBalance ? (0, m.inThanosMode)() ? `${r.stones} stone${1===r.stones?"":"s"}` : (0, m.getMoney)(r.balance) : r.name
                        })]
                    }), this.props.usePowerupAction && (0, i.jsx)("div", {
                        style: {
                            height: 40,
                            display: "flex",
                            alignItems: "center",
                            marginLeft: 15
                        },
                        children: (0, i.jsx)(s.default, {
                            type: this.canUsePowerup() ? "primary" : "disabled",
                            label: (0, i.jsx)(d.default, {
                                text: this.getUseButtonText()
                            }),
                            size: "small",
                            onClick: this.attack
                        })
                    })]
                })
            }
            const o = e.item;
            return o.id !== e.user.team.id || this.props.showSelf ? (0, i.jsxs)(S, {
                backgroundColor: u.default.White,
                textColor: u.default.Black,
                customBorderRadius: this.props.customBorderRadius,
                children: [(0, i.jsxs)(T, {
                    children: [(0, i.jsx)(B, {
                        backgroundColor: (0, m.getTeamColor)(o.id),
                        textColor: u.default.White,
                        children: (0, i.jsx)(l.default, {
                            paddingHorizontal: 7,
                            paddingVertical: 7,
                            text: t ? (0, i.jsx)(c.default, {
                                name: t
                            }) : e.position.toString()
                        })
                    }), (0, i.jsxs)("div", {
                        onClick: this.toggleBalanceVisiblity,
                        style: {
                            width: "calc(100% - 50px)",
                            marginLeft: 7,
                            cursor: "pointer"
                        },
                        children: [(0, i.jsx)("div", {
                            children: this.state.showingBalance ? (0, m.getMoney)(o.balance) : (0, i.jsx)(d.default, {
                                text: (0, m.getTeamName)(o.id)
                            })
                        }), (0, i.jsx)(j, {
                            children: M(o)
                        })]
                    })]
                }), this.props.usePowerupAction && (0, i.jsx)("div", {
                    style: {
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 15
                    },
                    children: (0, i.jsx)(s.default, {
                        type: this.canUsePowerup() ? "primary" : "disabled",
                        label: (0, i.jsx)(d.default, {
                            text: this.getUseButtonText()
                        }),
                        size: "small",
                        onClick: this.attack
                    })
                })]
            }) : null
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "state", {
                showingBalance: !1
            }), (0, n.default)(this, "canUsePowerup", (() => {
                const e = this.props.navigation.attackModal.powerup;
                return !e || (e === h.PowerupNames.giving || !this.props.item.activePowerups.includes(h.PowerupNames.shield) && (e !== h.PowerupNames.link || !this.props.item.activePowerups.includes(h.PowerupNames.link)))
            })), (0, n.default)(this, "getIcon", (() => {
                const e = this.props.item.activePowerups;
                if (e.includes(h.PowerupNames.shield)) return "fas fa-shield-alt";
                if (e.includes(h.PowerupNames.link)) return E;
                if (this.props.isPlayer) return null;
                {
                    const e = this.props.item;
                    return (0, m.getTeamIcon)(e.id)
                }
            })), (0, n.default)(this, "getUseButtonText", (() => {
                const e = this.props.navigation.attackModal.powerup;
                return e === h.PowerupNames.link ? "Link" : e === h.PowerupNames.giving ? "Give" : "Use"
            })), (0, n.default)(this, "attack", (() => {
                if (this.props.isPlayer) {
                    const e = this.props.item;
                    (0, m.attack)(e.id, e.name)
                } else {
                    const e = this.props.item;
                    (0, m.attack)(e.id, (0, m.getTeamName)(e.id))
                }
                this.props.parentAction && this.props.parentAction()
            })), (0, n.default)(this, "toggleBalanceVisiblity", (() => {
                ((0, m.inThanosMode)() || !(0, m.inHiddenMode)() && ((0, m.inTeamMode)() || this.props.gameValues.gameStatus !== y.GameStatus.gameplay)) && this.setState({
                    showingBalance: !this.state.showingBalance
                })
            }))
        }
    };
    _ = (0, a.__decorate)([(0, g.inject)("engine", "user", "theme", "gameOptions", "navigation", "gameValues"), g.observer], _);
    var R = _
})), o.register("5933e", (function(e, r) {
    t(e.exports, "default", (function() {
        return i
    }));
    var n = o("hxEiv"),
        a = o("fywoC");
    class i extends a.Component {
        render() {
            return (0, n.jsx)("i", {
                className: this.props.name,
                style: this.props.style
            })
        }
    }
})), o.register("b9PLE", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("fywoC"),
        s = o("lpEVe"),
        c = o("bBunw");
    let d = class extends i.Component {
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
            super(...e), (0, n.default)(this, "state", {
                text: this.props.text
            }), (0, n.default)(this, "buildString", (() => {
                let e = this.state.text;
                return this.props.suffix && (e += this.props.suffix), e
            })), (0, n.default)(this, "requestTranslation", (async () => {
                try {
                    return (await c.default.post("/api/translate", {
                        to: this.props.gameOptions.language,
                        text: this.props.text
                    })).data
                } catch (e) {
                    return this.props.text
                }
            }))
        }
    };
    d = (0, a.__decorate)([(0, s.inject)("translations", "gameOptions"), s.observer], d);
    var l = d
})), o.register("8nYP6", (function(e, r) {
    t(e.exports, "identifier", (function() {
        return v
    })), t(e.exports, "default", (function() {
        return x
    }));
    var n = o("9GW62"),
        a = o("6sear"),
        i = o("eEMhJ"),
        s = o("k5Bua"),
        c = o("jBnVG"),
        d = o("kcsKB"),
        l = o("2tdhF"),
        u = o("eNoph"),
        p = o("6yrsF"),
        f = o("3fpus"),
        h = o("6bUl4"),
        m = o("jcI11"),
        g = o("iMOcM");
    const v = () => {
        var e, t;
        return (null === d.default || void 0 === d.default || null === (e = d.default.engine) || void 0 === e || null === (t = e.client) || void 0 === t ? void 0 : t.id) || ""
    };
    var x = e => {
        d.default.engine.game = e;
        const t = f.default.map((e => e()));
        e.onMessage.add(((e, r) => {
            const o = {
                action: e,
                payload: r
            };
            if (o.action !== l.default.stateUpdate) {
                if (o.action === l.default.playerJoinsStaticState) {
                    const e = r;
                    return d.default.gameOptions.setGameOptions(e.gameOptions), d.default.upgrades.upgrades.replace(e.upgrades), d.default.theme.availableThemes.replace(e.themes), d.default.powerups.availablePowerups.replace(e.powerups), e.news && d.default.gameValues.news.replace(e.news), e.gameOptions.specialGameType.includes(s.DEFENDING_HOMEBASE) && (d.default.navigation.currentShopTab = c.ShopTab.defendingHomebase), void(e.gameOptions.specialGameType.includes(s.PARDY) && (0, g.loadFont)("https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap"))
                }
                if (o.action === l.default.updatedPlayerLeaderboard) {
                    let e = 1;
                    return (0, n.leaderboardSorter)(o.payload.items).forEach(((t, r) => {
                        t.id === v() && (e = r + 1)
                    })), d.default.user.place = e, void d.default.gameValues.players.replace(o.payload.items)
                }
                if (o.action === l.default.updatedTeamLeaderboard) {
                    let e = 1;
                    return (0, n.leaderboardSorter)(o.payload.items).forEach(((t, r) => {
                        t.id === d.default.user.team.id && (e = r + 1)
                    })), d.default.user.place = e, void d.default.gameValues.teams.replace(o.payload.items)
                }
                if (o.action !== l.default.toast)
                    if (o.action !== l.default.nonDismissMessage)
                        if (o.action !== l.default.thanosResults)
                            if (o.action === l.default.balanceFlashRed && (d.default.balance.customColor = "#f44336", a.drain.play(), setTimeout((() => d.default.balance.customColor = ""), 1e3)), o.action !== l.default.deflected)
                                if (o.action !== l.default.enablePowerupRNGAnimation) {
                                    if (o.action === l.default.availableHomebaseUpgrades) return d.default.navigation.currentShopTab = c.ShopTab.defendingHomebase, void d.default.upgrades.homebaseUpgades.replace(o.payload);
                                    if (o.action !== l.default.defendingHomebaseStatus)
                                        if (o.action !== l.default.defendingHomebaseResults) {
                                            if (o.action === l.default.playAgainNewGameCode) return d.default.user.groupMemberId || localStorage.setItem(h.LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME, d.default.user.name), void(window.location.href = `/join?gc=${o.payload}`);
                                            if (o.action === l.default.availableLavaUpgrades) return d.default.navigation.currentShopTab = c.ShopTab.lava, void d.default.upgrades.lavaUpgrades.replace(r);
                                            if (o.action !== l.default.lavaResults) {
                                                if (o.action !== l.default.successModalInfo) o.action !== l.default.imposter.people ? o.action !== l.default.draw.line ? o.action !== l.default.draw.feedItem ? o.action !== l.default.draw.clear || (d.default.draw.shouldClearCanvas = !0) : d.default.draw.latestFeedItem = r : d.default.draw.latestLine = r : d.default.imposter.epl = (0, m.EncryptData)(r, "impostor");
                                                else if (d.default.ui.successModalInfo = r, d.default.ui.showingSuccessModal = !0, r.sound) {
                                                    new(0, p.Howl)({
                                                        src: [(0, i.getAssetPath)(r.sound)]
                                                    }).play()
                                                }
                                            } else d.default.entities.lava = r
                                        } else d.default.gameValues.defendingHomebaseResults = o.payload;
                                    else d.default.entities.defendingHomebase = o.payload
                                } else d.default.gameOptions.enablePowerupRNGAnimation = !0;
                else a.bounce.play();
                else d.default.gameValues.thanosValues = o.payload;
                else(0, i.nonDismissMessage)(o.payload.message, o.payload.title);
                else(0, i.toast)(o.payload.message, o.payload)
            } else(0, u.default)({
                type: r.type,
                value: r.value
            }, t)
        }))
    }
})), o.register("2tdhF", (function(e, r) {
    t(e.exports, "default", (function() {
        return o
    }));
    var o = {
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
        playAgainNewGameCode: "PLAY_AGAIN_NEW_GAME_CODE",
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
})), o.register("eNoph", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("f6w71"),
        a = o("kcsKB"),
        i = o("5ArpY"),
        s = o("6Hr3r"),
        c = o("6MiKm");
    let d = !1;
    var l = (e, t) => {
        const {
            type: r,
            value: o
        } = e;
        if (r === s.default.balance) return a.default.balance.balance = o, void(o > a.default.balance.maxBalance && (a.default.balance.maxBalance = o));
        if (r === s.default.balanceChange) return a.default.balance.balanceChangeIfCorrect = o.balanceChangeIfCorrect, void(a.default.balance.balanceChangeIfIncorrect = o.balanceChangeIfIncorrect);
        if (r === s.default.gameQuestions) return void a.default.questions.setQuestions(o);
        if (r === s.default.playerQuestionList) return a.default.questions.questionList.replace(o.questionList), void(a.default.questions.ceq && !a.default.questions.transitioningToNextQuestion || a.default.questions.setCurrentQuestion(o.questionIndex));
        if (r === s.default.playerQuestionListIndex) return void(a.default.questions.transitioningToNextQuestion && a.default.questions.setCurrentQuestion(o));
        if (r === s.default.purchasedPowerups) return void a.default.powerups.purchasedPowerups.replace(o);
        if (r === s.default.usedPowerups) return void a.default.powerups.usedPowerups.replace(o);
        if (r === s.default.personalActivePowerups) return void a.default.powerups.personalActivePowerups.replace(o);
        if (r === s.default.teamActivePowerups) return void a.default.powerups.teamActivePowerups.replace(o);
        if (r === s.default.name) return "Player [Still Entering Name]" === o ? void(a.default.engine.hasLeftRoom && window.location.reload()) : void(a.default.user.name = o);
        if (r === s.default.group) return a.default.user.groupId = o.groupId, void(a.default.user.groupMemberId = o.groupMemberId);
        if (r === s.default.theme) {
            const e = o,
                t = a.default.theme.availableThemes.filter((t => t && t.name && t.name === e))[0];
            if (!t) return;
            return a.default.theme.themeName = e, a.default.theme.theme.defaultBackground = t.question.background, a.default.theme.theme.question = t.question, a.default.theme.theme.palette = t.palette, void("Default" === e ? (a.default.theme.theme.response.shop = i.defaultShopColor, a.default.theme.theme.response.continue = i.defaultContinueColor) : (a.default.theme.theme.response.shop = t.palette[0], a.default.theme.theme.response.continue = t.palette[1]))
        }
        if (r === s.default.purchasedThemes) return void a.default.theme.ownedThemes.replace(o);
        if (r === s.default.upgradeLevels) return void(a.default.upgrades.upgradeLevels = o);
        if (r === s.default.upgradePricingDiscount) return void(a.default.upgrades.upgradePricingDiscount = o);
        if (r === s.default.gameStatus) return a.default.gameValues.gameStatus = o, void(d || (d = !0, (0, c.default)()));
        if (r === s.default.incomeMultiplier) return void(a.default.balance.incomeMultiplier = o);
        if (r === s.default.linkInfo) return void(a.default.powerups.linkPartnerName = o.name);
        if (r === s.default.teamInfo) return void(a.default.user.team = o);
        if (r === s.default.maxBalance) return void(a.default.balance.maxBalance = o);
        if (r === s.default.disabledPowerups) return void a.default.powerups.disabledPowerups.replace(o);
        if (r === s.default.fullScreenPlayerBlack) return void(a.default.ui.fullBlackScreen = o.on);
        if (r === s.default.screenAttack) return o && (a.default.powerups.screenAttack.attackerName = o.attackerName, a.default.powerups.screenAttack.powerupName = o.powerupName, a.default.powerups.screenAttack.fullScreen = o.fullScreen), void(0, n.onScreenAttackChanged)();
        if (r === s.default.streakAmount) return void(a.default.balance.streakAmount = o);
        if (r === s.default.appliedPowerups) return void a.default.powerups.personalAppliedPowerups.replace(o);
        if (r === s.default.teamAppliedPowerups) return void a.default.powerups.teamAppliedPowerups.replace(o);
        if (r === s.default.imposter.status) return a.default.imposter.status = o, void(a.default.imposter.currentShopItemModalVisible = !1);
        if (r === s.default.imposter.shopItems) return void a.default.imposter.shopItems.replace(o);
        if (r === s.default.imposter.person) return void(a.default.imposter.me = o);
        if (r === s.default.imposter.remainingInvestigations) return void(a.default.imposter.investigationsLeft = o);
        if (r === s.default.imposter.remainingMeetings) return void(a.default.imposter.meetingsLeft = o);
        if (r === s.default.imposter.remainingImposters) return void(a.default.imposter.impostersLeft = o);
        if (r === s.default.questionsAnsweredCorrectly) return void(a.default.questions.questionsAnsweredCorrectly = o);
        if (r === s.default.questionsAnsweredIncorrectly) return void(a.default.questions.questionsAnsweredIncorrectly = o);
        const l = t.find((t => t.key === e.type));
        l && l.listener.applyPatches(e.value)
    }
})), o.register("f6w71", (function(e, r) {
    t(e.exports, "backgroundImage", (function() {
        return l
    })), t(e.exports, "onAttack", (function() {
        return u
    })), t(e.exports, "getVerb", (function() {
        return p
    })), t(e.exports, "getTitle", (function() {
        return f
    })), t(e.exports, "getIconColor", (function() {
        return h
    })), t(e.exports, "getIcon", (function() {
        return m
    })), t(e.exports, "onScreenAttackChanged", (function() {
        return g
    }));
    var n = o("kC0Tv");
    o("jlxb2");
    var a = o("1rlgk"),
        i = o("6sear"),
        s = o("eEMhJ"),
        c = o("kcsKB");
    const d = () => c.default && c.default.powerups && c.default.powerups.screenAttack && c.default.powerups.screenAttack.powerupName ? c.default.powerups.screenAttack.powerupName : "",
        l = () => {
            const e = d();
            return e === a.PowerupNames.icer ? (0, s.getAssetPath)("iced.jpeg") : e === a.PowerupNames.pumpkinPie ? (0, s.getAssetPath)("pied.jpeg") : ""
        },
        u = () => {
            const e = d();
            e === a.PowerupNames.icer && i.freeze.play(), e === a.PowerupNames.pumpkinPie && i.pieSlice.play()
        },
        p = () => {
            const e = d();
            return e === a.PowerupNames.icer ? "Frozen" : e === a.PowerupNames.pumpkinPie ? "Pied" : ""
        },
        f = () => {
            const e = d();
            return e === a.PowerupNames.icer ? "You're Frozen!" : e === a.PowerupNames.pumpkinPie ? "You've been Pied!" : ""
        },
        h = () => {
            const e = d();
            return e === a.PowerupNames.icer ? n.default.White : e === a.PowerupNames.pumpkinPie ? "#e65100" : n.default.White
        },
        m = () => {
            const e = d();
            return e === a.PowerupNames.icer ? "far fa-snowflake" : e === a.PowerupNames.pumpkinPie ? "far fa-pie" : ""
        },
        g = () => {
            const e = c.default.powerups.screenAttack;
            e.powerupName && e.powerupName === a.PowerupNames.blurredScreen ? e.powerupName === a.PowerupNames.blurredScreen && (c.default.ui.blurredScreen = !0) : c.default.ui.blurredScreen && (c.default.ui.blurredScreen = !1)
        }
})), o.register("jlxb2", (function(e, r) {
    t(e.exports, "PowerupCategory", (function() {
        return o("1rlgk").PowerupCategory
    })), t(e.exports, "PowerupNames", (function() {
        return o("1rlgk").PowerupNames
    })), o("1rlgk")
})), o.register("1rlgk", (function(e, r) {
    t(e.exports, "PowerupNames", (function() {
        return o
    })), t(e.exports, "PowerupCategory", (function() {
        return n
    }));
    const o = {
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
        icer: "Icer",
        fivePercentBot: "5 Percent Bot",
        giving: "Giving",
        repurchasePowerups: "repurchasePowerups",
        link: "Link",
        deflector: "Deflector",
        undercover: "Undercover",
        clapMultiplier: "Clap Multiplier",
        blurredScreen: "Blurred Screen",
        quadUpgrade: "Quad Upgrade",
        streakSaver: "Streak Saver",
        cashConcealer: "Cash Concealer",
        outnumbered: "outnumbered",
        minuteMoreEarnings: "minuteMoreEarnings",
        firstStone: "Reality Stone",
        secondStone: "Soul Stone",
        thirdStone: "Mind Stone",
        fourthStone: "Space Stone",
        fifthStone: "Time Stone",
        sixthStone: "Power Stone",
        lavaInstantBuild: "Lava Instant Build",
        lavaPauseGrowth: "Lava Pause Growth"
    };
    let n;
    (n || (n = {})).specialSound = "specialSound"
})), o.register("6Hr3r", (function(e, r) {
    t(e.exports, "default", (function() {
        return o
    }));
    var o = {
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
        questionsAnsweredCorrectly: "QUESTIONS_ANSWERED_CORRECTLY",
        questionsAnsweredIncorrectly: "QUESTIONS_ANSWERED_INCORRECTLY",
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
})), o.register("6MiKm", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var n = o("j2XHK"),
        a = o("i6SGg"),
        i = o("eEMhJ"),
        s = o("kcsKB");
    var c = () => {
        s.default.gameValues.gameStatus !== n.GameStatus.results ? s.default.gameValues.gameStatus !== n.GameStatus.teams ? s.default.gameValues.gameStatus !== n.GameStatus.gameplay ? (0, i.changeRoute)(a.default.waiting) : (0, i.startGame)() : (0, i.changeRoute)(a.default.team) : (0, i.changeRoute)(a.default.gameOver)
    }
})), o.register("3fpus", (function(e, r) {
    t(e.exports, "default", (function() {
        return d
    })), o("cLnOu");
    var n = o("dpiVF"),
        a = o("ca8x2"),
        i = o("3sItK");
    o("9L2Ej");
    var s = o("hNVkk"),
        c = o("e6JV2");
    var d = [n.default, a.default, i.default, s.default, c.default]
})), o.register("cLnOu", (function(e, r) {
    t(e.exports, "Round", (function() {
        return o("dpiVF").default
    })), t(e.exports, "Person", (function() {
        return o("ca8x2").default
    })), t(e.exports, "Status", (function() {
        return o("3sItK").default
    }));
    o("dpiVF"), o("ca8x2"), o("3sItK")
})), o.register("dpiVF", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var n = o("kcsKB"),
        a = o("77bLH"),
        i = o("6Hr3r");
    const s = ["secondsLeft", "term", "drawer", "drawingBase64", "termOptions", "revealText"];
    var c = () => {
        const e = new(0, a.default);
        return s.forEach((t => {
            e.onPropChange(t, (e => {
                n.default.draw.round[t] = e
            }))
        })), {
            key: i.default.draw.round,
            listener: e
        }
    }
})), o.register("ca8x2", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var n = o("kcsKB"),
        a = o("77bLH"),
        i = o("6Hr3r");
    const s = ["answeredCorrectly", "lastRound", "role"];
    var c = () => {
        const e = new(0, a.default);
        return s.forEach((t => {
            e.onPropChange(t, (e => {
                n.default.draw.me[t] = e
            }))
        })), {
            key: i.default.draw.person,
            listener: e
        }
    }
})), o.register("3sItK", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var n = o("kcsKB"),
        a = o("77bLH"),
        i = o("6Hr3r");
    var s = () => {
        const e = new(0, a.default);
        return e.onPropChange("value", (e => {
            n.default.draw.status = e
        })), {
            key: i.default.draw.status,
            listener: e
        }
    }
})), o.register("9L2Ej", (function(e, r) {
    t(e.exports, "PardyState", (function() {
        return o("hNVkk").default
    })), t(e.exports, "PardyPerson", (function() {
        return o("e6JV2").default
    }));
    o("hNVkk"), o("e6JV2")
})), o.register("hNVkk", (function(e, r) {
    t(e.exports, "default", (function() {
        return u
    }));
    var n = o("kcsKB"),
        a = o("77bLH"),
        i = o("cmvpZ"),
        s = o("eEMhJ"),
        c = o("6Hr3r");
    const d = ["screen", "questionScreen", "questionStatus", "powers", "currentQuestionId", "tips", "answerLockedInWittyMessages", "correctWittyMessages", "incorrectWittyMessages"],
        l = ["powers", "tips", "answerLockedInWittyMessages", "correctWittyMessages", "incorrectWittyMessages"];
    var u = () => {
        const e = new(0, a.default);
        return d.forEach((t => {
            e.onPropChange(t, (e => {
                if (l.includes(t)) n.default.pardy[t].replace(e);
                else if ("currentQuestionId" === t) {
                    const t = (0, s.questionLocation)().find((t => t._id === e));
                    t && (n.default.pardy.currentQuestion = {
                        ...t,
                        answers: (0, i.shuffle)(t.answers)
                    })
                } else n.default.pardy[t] = e
            }))
        })), {
            key: c.default.pardy.state,
            listener: e
        }
    }
})), o.register("e6JV2", (function(e, r) {
    t(e.exports, "default", (function() {
        return d
    }));
    var n = o("kcsKB"),
        a = o("77bLH"),
        i = o("6Hr3r");
    const s = ["answerResponseItems", "powerOptions"],
        c = ["power", "answered", "answeredCorrectly", "answerResponseItems", "maxBet", "currentBet", "powerOptions"];
    var d = () => {
        const e = new(0, a.default);
        return c.forEach((t => {
            e.onPropChange(t, (e => {
                s.includes(t) ? n.default.pardy[t].replace(e) : n.default.pardy[t] = e
            }))
        })), {
            key: i.default.pardy.person,
            listener: e
        }
    }
})), o.register("8ceRK", (function(e, r) {
    t(e.exports, "Preview", (function() {
        return h
    })), t(e.exports, "default", (function() {
        return g
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("5RLZo"),
        s = o("5933e"),
        c = o("b9PLE"),
        d = o("eEMhJ"),
        l = o("lpEVe"),
        u = o("fywoC");
    let p;
    const f = o("2FDaO").default.div(p || (p = (e => e)`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${0};
  color: ${0};
  margin-right: 5px;
`), (e => e.colors.background), (e => e.colors.text)),
        h = e => (0, a.jsx)(i.default, {
            placement: "right",
            title: e.name ? (0, a.jsx)("div", {
                style: {
                    fontSize: 15
                },
                children: (0, a.jsx)(c.default, {
                    text: e.name + " active"
                })
            }) : null,
            children: (0, a.jsx)(f, {
                colors: e.color,
                children: (0, a.jsx)(s.default, {
                    name: e.icon
                })
            })
        });
    let m = class extends u.Component {
        render() {
            const e = this.props.powerups.availablePowerups.filter((e => this.props.powerups.activePowerups.includes(e.name)));
            return (0, a.jsx)("div", {
                style: {
                    display: "flex"
                },
                children: e.map((e => (0, a.jsx)(h, {
                    name: (0, d.getPowerupName)(e),
                    icon: e.icon,
                    color: e.color
                }, e.name)))
            })
        }
    };
    m = (0, n.__decorate)([(0, l.inject)("powerups"), l.observer], m);
    var g = m
})), o.register("5e6Nf", (function(e, r) {
    t(e.exports, "default", (function() {
        return w
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("fywoC"),
        c = o("2FDaO"),
        d = o("lpEVe"),
        l = o("i6SGg"),
        u = o("6vbUb"),
        p = o("f5HoS"),
        f = o("7tPKK"),
        h = o("eEMhJ"),
        m = o("86Vcm");
    let g, v, x, y = e => e,
        b = class extends s.Component {
            render() {
                if ((0, h.inImposterMode)() || (0, h.inPardyMode)()) return null;
                const {
                    balance: e
                } = this.props, t = this.canShow(), r = (0, f.default)({
                    moneyPerQuestion: this.findUpgradeValue(m.upgradeNames.moneyPerQuestion),
                    streakBonus: this.findUpgradeValue(m.upgradeNames.streakBonus),
                    multiplier: this.findUpgradeValue(m.upgradeNames.multiplier),
                    incomeMultiplier: e.incomeMultiplier,
                    activePowerups: this.props.powerups.activePowerups
                });
                return (0, i.jsx)(C, {
                    animate: {
                        height: t ? "auto" : 0
                    },
                    transition: {
                        duration: .3
                    },
                    children: (0, i.jsx)(k, {
                        children: (0, i.jsx)(P, {
                            initial: {
                                x: 20
                            },
                            animate: {
                                x: this.state.xValue ? 20 - this.state.xValue : 20
                            },
                            transition: {
                                ease: "anticipate",
                                duration: .6
                            },
                            children: r.map(((t, r) => (0, i.jsx)(p.default, {
                                index: r,
                                amount: this.props.balance.streakAmount === r ? Math.max(t, e.balanceChangeIfCorrect) : t,
                                onX: this.changeX,
                                selected: this.props.balance.streakAmount === r,
                                hideArrow: r >= 99
                            }, `money-item-${r}`)))
                        })
                    })
                })
            }
            constructor(...e) {
                super(...e), (0, n.default)(this, "state", {
                    xValue: 0
                }), (0, n.default)(this, "changeX", (e => this.setState({
                    xValue: e
                }))), (0, n.default)(this, "findUpgradeValue", (e => {
                    const t = this.props.upgrades.upgrades.find((t => t.name === e));
                    if (!t) return 1;
                    const r = t.levels[this.props.upgrades.upgradeLevels[(0, h.upgradeNameToKey)(e)] - 1];
                    return r ? r.value : 1
                })), (0, n.default)(this, "canShow", (() => {
                    const {
                        navigation: {
                            currentRoute: e
                        },
                        upgrades: t
                    } = this.props;
                    return !!t.upgrades.length && (e === l.default.questions || e === l.default.upgrade)
                }))
            }
        };
    b = (0, a.__decorate)([(0, d.inject)("navigation", "balance", "upgrades", "powerups"), d.observer], b);
    var w = b;
    const C = (0, c.default)(u.motion.div)(g || (g = y`
  width: 100%;
  background: #4252af;
  overflow: hidden;
`)),
        k = c.default.div(v || (v = y`
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 7.5px;
  width: 100%;
`)),
        P = (0, c.default)(u.motion.div)(x || (x = y`
  display: flex;
  align-items: center;
`))
})), o.register("f5HoS", (function(e, r) {
    t(e.exports, "default", (function() {
        return f
    }));
    var n = o("hxEiv"),
        a = o("fywoC"),
        i = o("2FDaO"),
        s = o("5933e"),
        c = o("eEMhJ");
    let d, l, u, p = e => e;
    var f = e => {
        const t = a.useRef(),
            r = `bonus-item-index-${e.index}`;
        return a.useEffect((() => {
            if (e.selected) {
                const t = document.getElementById(r);
                t && e.onX(t.offsetLeft)
            }
        }), [e.selected, e.amount]), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)(h, {
                id: r,
                ref: t,
                children: [(0, n.jsx)(m, {
                    children: e.index
                }), (0, n.jsx)(g, {
                    children: (0, c.getMoney)(e.amount)
                })]
            }), e.hideArrow ? null : (0, n.jsx)(s.default, {
                style: {
                    marginRight: 30,
                    opacity: .5
                },
                name: "fas fa-long-arrow-right"
            })]
        })
    };
    const h = i.default.div(d || (d = p`
  margin-right: 30px;
`)),
        m = i.default.div(l || (l = p`
  font-size: 11px;
  margin-bottom: 2px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`)),
        g = i.default.div(u || (u = p`
  padding: 8px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
`))
})), o.register("7tPKK", (function(e, r) {
    t(e.exports, "default", (function() {
        return a
    })), o("jlxb2");
    var n = o("1rlgk");
    var a = e => {
        const {
            moneyPerQuestion: t,
            streakBonus: r,
            multiplier: o,
            incomeMultiplier: a,
            activePowerups: i
        } = e, s = i.includes(n.PowerupNames.minuteMoreEarnings);
        return Array.from(Array(100).keys()).map(((e, n) => {
            let i = t;
            return i += r * n, i *= o, i *= a, s && (i *= 2), Math.round(i)
        }))
    }
})), o.register("iG4sB", (function(e, n) {
    t(e.exports, "default", (function() {
        return h
    }));
    var a = o("divCp"),
        i = o("kHqmx"),
        s = o("hxEiv"),
        c = o("ggxqK"),
        d = o("gCFJz"),
        l = o("lpEVe"),
        u = o("fywoC"),
        p = o("eEMhJ");
    let f = class extends u.Component {
        render() {
            return (0, p.inImposterMode)() ? (0, s.jsx)(c.default, {
                onClick: this.open,
                color: "inherit",
                "aria-label": "notes",
                children: (0, s.jsx)(r(d), {})
            }) : null
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "open", (() => {
                this.props.imposter.noteDrawerOpen = !0
            }))
        }
    };
    f = (0, i.__decorate)([(0, l.inject)("imposter"), l.observer], f);
    var h = f
})), o.register("gCFJz", (function(e, t) {
    var r = o("8IEkO");
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.default = void 0;
    var n = r(o("fywoC")),
        a = (0, r(o("54q3O")).default)(n.default.createElement("path", {
            d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
        }), "Description");
    e.exports.default = a
})), o.register("dIw53", (function(e, r) {
    t(e.exports, "default", (function() {
        return T
    }));
    var n = o("hxEiv"),
        a = o("1RMgG"),
        i = o("4RxZe"),
        s = o("2kOFA"),
        c = o("kDvAf"),
        d = o("f5DLu"),
        l = o("5hQnP"),
        u = o("55G3C"),
        p = o("bS5EK"),
        f = o("7UGEB"),
        h = o("b9PLE"),
        m = o("1hRKQ"),
        g = o("i6SGg"),
        v = o("eEMhJ"),
        x = o("lpEVe"),
        y = o("fywoC"),
        b = o("12wv3"),
        w = o("gmzvT"),
        C = o("8sB3x"),
        k = o("l89Zc"),
        P = o("bxjsJ"),
        E = o("3lLKz"),
        S = o("fQMql");
    var T = (0, x.observer)((() => {
        var e;
        const {
            navigation: t,
            user: r,
            questions: {
                lockedViewingCorrectAnswer: o
            }
        } = y.useContext(S.default), x = o, T = () => (0, v.toggleDrawer)(!1), B = t.drawerOpen;
        return m.DISABLED_PATHS.includes(t.currentRoute) ? null : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(w.default, {}), (0, n.jsx)(a.default, {
                open: B,
                onClose: T,
                children: (0, n.jsxs)("div", {
                    className: "flex flex-column maxHeight",
                    style: {
                        width: "70vw",
                        maxWidth: 300
                    },
                    children: [(0, n.jsx)("div", {
                        className: "maxWidth scroll-y",
                        style: {
                            flex: 1,
                            overflowX: "hidden"
                        },
                        children: t.settingsOpen ? (0, n.jsx)(i.default, {
                            style: {
                                width: "100%"
                            },
                            component: "nav",
                            children: (0, n.jsxs)(s.default, {
                                children: [(0, n.jsx)(d.default, {
                                    primary: (0, n.jsx)(h.default, {
                                        text: "Read to Me"
                                    })
                                }), (0, n.jsx)(k.default, {
                                    checked: r.readToMeEnabled,
                                    onChange: e => {
                                        r.readToMeEnabled = e
                                    }
                                })]
                            })
                        }) : (0, v.inPardyMode)() ? (0, n.jsx)(E.default, {}) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(i.default, {
                                style: {
                                    width: "100%"
                                },
                                component: "nav",
                                children: [(0, n.jsx)(b.default, {}), (0, n.jsx)(E.default, {}), (0, n.jsx)(f.default, {
                                    to: g.default.questions,
                                    onClick: T,
                                    disabled: x,
                                    children: (0, n.jsxs)(s.default, {
                                        button: !0,
                                        children: [(0, n.jsx)(c.default, {
                                            children: (0, n.jsx)(u.default, {})
                                        }), (0, n.jsx)(d.default, {
                                            primary: (0, n.jsx)(h.default, {
                                                text: "Questions"
                                            })
                                        })]
                                    })
                                }), !(0, v.blockShopping)() && (0, n.jsx)(f.default, {
                                    to: g.default.shop,
                                    onClick: T,
                                    disabled: x,
                                    children: (0, n.jsxs)(s.default, {
                                        button: !0,
                                        children: [(0, n.jsx)(c.default, {
                                            children: (0, v.inImposterMode)() ? (0, n.jsx)(l.default, {}) : (0, n.jsx)(p.default, {})
                                        }), (0, n.jsx)(d.default, {
                                            primary: (0, n.jsx)(h.default, {
                                                text: (0, v.shopName)()
                                            })
                                        })]
                                    })
                                })]
                            }), (0, n.jsx)(C.default, {})]
                        })
                    }), (0, n.jsx)(P.default, {
                        playerName: r.name,
                        teamName: null === (e = r.team) || void 0 === e ? void 0 : e.id,
                        onClickSettings: () => t.settingsOpen = !0,
                        onBack: () => t.settingsOpen = !1,
                        isSettingsOpen: t.settingsOpen
                    })]
                })
            })]
        })
    }))
})), o.register("1RMgG", (function(e, r) {
    t(e.exports, "default", (function() {
        return y
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("11bI8"),
        d = o("5e8wR"),
        l = o("cY4lv"),
        u = o("9GypZ"),
        p = o("iWvmV"),
        f = o("kYx4h"),
        h = o("dEeRT"),
        m = o("cZQw4"),
        g = {
            left: "right",
            right: "left",
            top: "down",
            bottom: "up"
        };
    var v = {
            enter: h.duration.enteringScreen,
            exit: h.duration.leavingScreen
        },
        x = i.forwardRef((function(e, t) {
            var r = e.anchor,
                o = void 0 === r ? "left" : r,
                l = e.BackdropProps,
                h = e.children,
                x = e.classes,
                y = e.className,
                b = e.elevation,
                w = void 0 === b ? 16 : b,
                C = e.ModalProps,
                k = (C = void 0 === C ? {} : C).BackdropProps,
                P = (0, a.default)(C, ["BackdropProps"]),
                E = e.onClose,
                S = e.open,
                T = void 0 !== S && S,
                B = e.PaperProps,
                j = void 0 === B ? {} : B,
                M = e.SlideProps,
                _ = e.TransitionComponent,
                R = void 0 === _ ? u.default : _,
                O = e.transitionDuration,
                I = void 0 === O ? v : O,
                D = e.variant,
                A = void 0 === D ? "temporary" : D,
                N = (0, a.default)(e, ["anchor", "BackdropProps", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"]),
                L = (0, m.default)(),
                z = i.useRef(!1);
            i.useEffect((function() {
                z.current = !0
            }), []);
            var F = function(e, t) {
                    return "rtl" === e.direction && function(e) {
                        return -1 !== ["left", "right"].indexOf(e)
                    }(t) ? g[t] : t
                }(L, o),
                H = i.createElement(p.default, (0, n.default)({
                    elevation: "temporary" === A ? w : 0,
                    square: !0
                }, j, {
                    className: (0, s.default)(x.paper, x["paperAnchor".concat((0, f.default)(F))], j.className, "temporary" !== A && x["paperAnchorDocked".concat((0, f.default)(F))])
                }), h);
            if ("permanent" === A) return i.createElement("div", (0, n.default)({
                className: (0, s.default)(x.root, x.docked, y),
                ref: t
            }, N), H);
            var W = i.createElement(R, (0, n.default)({
                in: T,
                direction: g[F],
                timeout: I,
                appear: z.current
            }, M), H);
            return "persistent" === A ? i.createElement("div", (0, n.default)({
                className: (0, s.default)(x.root, x.docked, y),
                ref: t
            }, N), W) : i.createElement(c.default, (0, n.default)({
                BackdropProps: (0, n.default)({}, l, k, {
                    transitionDuration: I
                }),
                BackdropComponent: d.default,
                className: (0, s.default)(x.root, x.modal, y),
                open: T,
                onClose: E,
                ref: t
            }, N, P), W)
        })),
        y = (0, l.default)((function(e) {
            return {
                root: {},
                docked: {
                    flex: "0 0 auto"
                },
                paper: {
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    flex: "1 0 auto",
                    zIndex: e.zIndex.drawer,
                    WebkitOverflowScrolling: "touch",
                    position: "fixed",
                    top: 0,
                    outline: 0
                },
                paperAnchorLeft: {
                    left: 0,
                    right: "auto"
                },
                paperAnchorRight: {
                    left: "auto",
                    right: 0
                },
                paperAnchorTop: {
                    top: 0,
                    left: 0,
                    bottom: "auto",
                    right: 0,
                    height: "auto",
                    maxHeight: "100%"
                },
                paperAnchorBottom: {
                    top: "auto",
                    left: 0,
                    bottom: 0,
                    right: 0,
                    height: "auto",
                    maxHeight: "100%"
                },
                paperAnchorDockedLeft: {
                    borderRight: "1px solid ".concat(e.palette.divider)
                },
                paperAnchorDockedTop: {
                    borderBottom: "1px solid ".concat(e.palette.divider)
                },
                paperAnchorDockedRight: {
                    borderLeft: "1px solid ".concat(e.palette.divider)
                },
                paperAnchorDockedBottom: {
                    borderTop: "1px solid ".concat(e.palette.divider)
                },
                modal: {}
            }
        }), {
            name: "MuiDrawer",
            flip: !1
        })(x)
})), o.register("11bI8", (function(e, r) {
    t(e.exports, "default", (function() {
        return b
    }));
    var n = o("2Af7I"),
        a = o("kqQIs"),
        i = o("fywoC"),
        s = o("kK88x");
    o("djNMu");
    var c = o("aHhAM"),
        d = o("fwDf4"),
        l = o("409zj"),
        u = o("hVZrw"),
        p = o("iWSMy"),
        f = o("eV2r6"),
        h = o("knNeR"),
        m = o("702AV"),
        g = o("cY5Km"),
        v = o("gaxyU"),
        x = o("jY6fy");
    var y = new(0, g.default),
        b = i.forwardRef((function(e, t) {
            var r = (0, d.default)(),
                o = (0, c.default)({
                    name: "MuiModal",
                    props: (0, a.default)({}, e),
                    theme: r
                }),
                b = o.BackdropComponent,
                w = void 0 === b ? x.default : b,
                C = o.BackdropProps,
                k = o.children,
                P = o.closeAfterTransition,
                E = void 0 !== P && P,
                S = o.container,
                T = o.disableAutoFocus,
                B = void 0 !== T && T,
                j = o.disableBackdropClick,
                M = void 0 !== j && j,
                _ = o.disableEnforceFocus,
                R = void 0 !== _ && _,
                O = o.disableEscapeKeyDown,
                I = void 0 !== O && O,
                D = o.disablePortal,
                A = void 0 !== D && D,
                N = o.disableRestoreFocus,
                L = void 0 !== N && N,
                z = o.disableScrollLock,
                F = void 0 !== z && z,
                H = o.hideBackdrop,
                W = void 0 !== H && H,
                V = o.keepMounted,
                G = void 0 !== V && V,
                U = o.manager,
                q = void 0 === U ? y : U,
                $ = o.onBackdropClick,
                Q = o.onClose,
                K = o.onEscapeKeyDown,
                J = o.onRendered,
                Y = o.open,
                X = (0, n.default)(o, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]),
                Z = i.useState(!0),
                ee = Z[0],
                te = Z[1],
                re = i.useRef({}),
                oe = i.useRef(null),
                ne = i.useRef(null),
                ae = (0, f.default)(ne, t),
                ie = function(e) {
                    return !!e.children && e.children.props.hasOwnProperty("in")
                }(o),
                se = function() {
                    return (0, l.default)(oe.current)
                },
                ce = function() {
                    return re.current.modalRef = ne.current, re.current.mountNode = oe.current, re.current
                },
                de = function() {
                    q.mount(ce(), {
                        disableScrollLock: F
                    }), ne.current.scrollTop = 0
                },
                le = (0, h.default)((function() {
                    var e = function(e) {
                        return e = "function" == typeof e ? e() : e, s.findDOMNode(e)
                    }(S) || se().body;
                    q.add(ce(), e), ne.current && de()
                })),
                ue = i.useCallback((function() {
                    return q.isTopModal(ce())
                }), [q]),
                pe = (0, h.default)((function(e) {
                    oe.current = e, e && (J && J(), Y && ue() ? de() : (0, g.ariaHidden)(ne.current, !0))
                })),
                fe = i.useCallback((function() {
                    q.remove(ce())
                }), [q]);
            if (i.useEffect((function() {
                    return function() {
                        fe()
                    }
                }), [fe]), i.useEffect((function() {
                    Y ? le() : ie && E || fe()
                }), [Y, fe, ie, E, le]), !G && !Y && (!ie || ee)) return null;
            var he = function(e) {
                    return {
                        root: {
                            position: "fixed",
                            zIndex: e.zIndex.modal,
                            right: 0,
                            bottom: 0,
                            top: 0,
                            left: 0
                        },
                        hidden: {
                            visibility: "hidden"
                        }
                    }
                }(r || {
                    zIndex: m.default
                }),
                me = {};
            return void 0 === k.props.tabIndex && (me.tabIndex = k.props.tabIndex || "-1"), ie && (me.onEnter = (0, p.default)((function() {
                te(!1)
            }), k.props.onEnter), me.onExited = (0, p.default)((function() {
                te(!0), E && fe()
            }), k.props.onExited)), i.createElement(u.default, {
                ref: pe,
                container: S,
                disablePortal: A
            }, i.createElement("div", (0, a.default)({
                ref: ae,
                onKeyDown: function(e) {
                    "Escape" === e.key && ue() && (K && K(e), I || (e.stopPropagation(), Q && Q(e, "escapeKeyDown")))
                },
                role: "presentation"
            }, X, {
                style: (0, a.default)({}, he.root, !Y && ee ? he.hidden : {}, X.style)
            }), W ? null : i.createElement(w, (0, a.default)({
                open: Y,
                onClick: function(e) {
                    e.target === e.currentTarget && ($ && $(e), !M && Q && Q(e, "backdropClick"))
                }
            }, C)), i.createElement(v.default, {
                disableEnforceFocus: R,
                disableAutoFocus: B,
                disableRestoreFocus: L,
                getDoc: se,
                isEnabled: ue,
                open: Y
            }, i.cloneElement(k, me))))
        }))
})), o.register("409zj", (function(e, r) {
    function o(e) {
        return e && e.ownerDocument || document
    }
    t(e.exports, "default", (function() {
        return o
    }))
})), o.register("cY5Km", (function(e, r) {
    t(e.exports, "ariaHidden", (function() {
        return l
    })), t(e.exports, "default", (function() {
        return m
    }));
    var n = o("7qYtC"),
        a = o("1Byax"),
        i = o("9qi0g"),
        s = o("lBdKX"),
        c = o("409zj"),
        d = o("1ovLT");

    function l(e, t) {
        t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
    }

    function u(e) {
        return parseInt(window.getComputedStyle(e)["padding-right"], 10) || 0
    }

    function p(e, t, r) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = [t, r].concat((0, i.default)(o)),
            s = ["TEMPLATE", "SCRIPT", "STYLE"];
        [].forEach.call(e.children, (function(e) {
            1 === e.nodeType && -1 === a.indexOf(e) && -1 === s.indexOf(e.tagName) && l(e, n)
        }))
    }

    function f(e, t) {
        var r = -1;
        return e.some((function(e, o) {
            return !!t(e) && (r = o, !0)
        })), r
    }

    function h(e, t) {
        var r, o = [],
            n = [],
            a = e.container;
        if (!t.disableScrollLock) {
            if (function(e) {
                    var t = (0, c.default)(e);
                    return t.body === e ? (0, d.default)(t).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
                }(a)) {
                var i = (0, s.default)();
                o.push({
                    value: a.style.paddingRight,
                    key: "padding-right",
                    el: a
                }), a.style["padding-right"] = "".concat(u(a) + i, "px"), r = (0, c.default)(a).querySelectorAll(".mui-fixed"), [].forEach.call(r, (function(e) {
                    n.push(e.style.paddingRight), e.style.paddingRight = "".concat(u(e) + i, "px")
                }))
            }
            var l = a.parentElement,
                p = "HTML" === l.nodeName && "scroll" === window.getComputedStyle(l)["overflow-y"] ? l : a;
            o.push({
                value: p.style.overflow,
                key: "overflow",
                el: p
            }), p.style.overflow = "hidden"
        }
        return function() {
            r && [].forEach.call(r, (function(e, t) {
                n[t] ? e.style.paddingRight = n[t] : e.style.removeProperty("padding-right")
            })), o.forEach((function(e) {
                var t = e.value,
                    r = e.el,
                    o = e.key;
                t ? r.style.setProperty(o, t) : r.style.removeProperty(o)
            }))
        }
    }
    var m = function() {
        function e() {
            (0, n.default)(this, e), this.modals = [], this.containers = []
        }
        return (0, a.default)(e, [{
            key: "add",
            value: function(e, t) {
                var r = this.modals.indexOf(e);
                if (-1 !== r) return r;
                r = this.modals.length, this.modals.push(e), e.modalRef && l(e.modalRef, !1);
                var o = function(e) {
                    var t = [];
                    return [].forEach.call(e.children, (function(e) {
                        e.getAttribute && "true" === e.getAttribute("aria-hidden") && t.push(e)
                    })), t
                }(t);
                p(t, e.mountNode, e.modalRef, o, !0);
                var n = f(this.containers, (function(e) {
                    return e.container === t
                }));
                return -1 !== n ? (this.containers[n].modals.push(e), r) : (this.containers.push({
                    modals: [e],
                    container: t,
                    restore: null,
                    hiddenSiblingNodes: o
                }), r)
            }
        }, {
            key: "mount",
            value: function(e, t) {
                var r = f(this.containers, (function(t) {
                        return -1 !== t.modals.indexOf(e)
                    })),
                    o = this.containers[r];
                o.restore || (o.restore = h(o, t))
            }
        }, {
            key: "remove",
            value: function(e) {
                var t = this.modals.indexOf(e);
                if (-1 === t) return t;
                var r = f(this.containers, (function(t) {
                        return -1 !== t.modals.indexOf(e)
                    })),
                    o = this.containers[r];
                if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(t, 1), 0 === o.modals.length) o.restore && o.restore(), e.modalRef && l(e.modalRef, !0), p(o.container, e.mountNode, e.modalRef, o.hiddenSiblingNodes, !1), this.containers.splice(r, 1);
                else {
                    var n = o.modals[o.modals.length - 1];
                    n.modalRef && l(n.modalRef, !1)
                }
                return t
            }
        }, {
            key: "isTopModal",
            value: function(e) {
                return this.modals.length > 0 && this.modals[this.modals.length - 1] === e
            }
        }]), e
    }()
})), o.register("7qYtC", (function(e, r) {
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t(e.exports, "default", (function() {
        return o
    }))
})), o.register("lBdKX", (function(e, r) {
    function o() {
        var e = document.createElement("div");
        e.style.width = "99px", e.style.height = "99px", e.style.position = "absolute", e.style.top = "-9999px", e.style.overflow = "scroll", document.body.appendChild(e);
        var t = e.offsetWidth - e.clientWidth;
        return document.body.removeChild(e), t
    }
    t(e.exports, "default", (function() {
        return o
    }))
})), o.register("1ovLT", (function(e, r) {
    t(e.exports, "default", (function() {
        return a
    }));
    var n = o("409zj");

    function a(e) {
        return (0, n.default)(e).defaultView || window
    }
})), o.register("gaxyU", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var n = o("fywoC"),
        a = o("kK88x");
    o("djNMu");
    var i = o("409zj"),
        s = o("eV2r6");
    var c = function(e) {
        var t = e.children,
            r = e.disableAutoFocus,
            o = void 0 !== r && r,
            c = e.disableEnforceFocus,
            d = void 0 !== c && c,
            l = e.disableRestoreFocus,
            u = void 0 !== l && l,
            p = e.getDoc,
            f = e.isEnabled,
            h = e.open,
            m = n.useRef(),
            g = n.useRef(null),
            v = n.useRef(null),
            x = n.useRef(),
            y = n.useRef(null),
            b = n.useCallback((function(e) {
                y.current = a.findDOMNode(e)
            }), []),
            w = (0, s.default)(t.ref, b),
            C = n.useRef();
        return n.useEffect((function() {
            C.current = h
        }), [h]), !C.current && h && "undefined" != typeof window && (x.current = p().activeElement), n.useEffect((function() {
            if (h) {
                var e = (0, i.default)(y.current);
                o || !y.current || y.current.contains(e.activeElement) || (y.current.hasAttribute("tabIndex") || y.current.setAttribute("tabIndex", -1), y.current.focus());
                var t = function() {
                        e.hasFocus() && !d && f() && !m.current ? y.current && !y.current.contains(e.activeElement) && y.current.focus() : m.current = !1
                    },
                    r = function(t) {
                        !d && f() && 9 === t.keyCode && e.activeElement === y.current && (m.current = !0, t.shiftKey ? v.current.focus() : g.current.focus())
                    };
                e.addEventListener("focus", t, !0), e.addEventListener("keydown", r, !0);
                var n = setInterval((function() {
                    t()
                }), 50);
                return function() {
                    clearInterval(n), e.removeEventListener("focus", t, !0), e.removeEventListener("keydown", r, !0), u || (x.current && x.current.focus && x.current.focus(), x.current = null)
                }
            }
        }), [o, d, u, f, h]), n.createElement(n.Fragment, null, n.createElement("div", {
            tabIndex: 0,
            ref: g,
            "data-test": "sentinelStart"
        }), n.cloneElement(t, {
            ref: w
        }), n.createElement("div", {
            tabIndex: 0,
            ref: v,
            "data-test": "sentinelEnd"
        }))
    }
})), o.register("jY6fy", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = {
            root: {
                zIndex: -1,
                position: "fixed",
                right: 0,
                bottom: 0,
                top: 0,
                left: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                WebkitTapHighlightColor: "transparent"
            },
            invisible: {
                backgroundColor: "transparent"
            }
        },
        c = i.forwardRef((function(e, t) {
            var r = e.invisible,
                o = void 0 !== r && r,
                c = e.open,
                d = (0, a.default)(e, ["invisible", "open"]);
            return c ? i.createElement("div", (0, n.default)({
                "aria-hidden": !0,
                ref: t
            }, d, {
                style: (0, n.default)({}, s.root, o ? s.invisible : {}, d.style)
            })) : null
        }))
})), o.register("5e8wR", (function(e, r) {
    t(e.exports, "default", (function() {
        return u
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("cY4lv"),
        d = o("dNl1y"),
        l = i.forwardRef((function(e, t) {
            var r = e.children,
                o = e.classes,
                c = e.className,
                l = e.invisible,
                u = void 0 !== l && l,
                p = e.open,
                f = e.transitionDuration,
                h = e.TransitionComponent,
                m = void 0 === h ? d.default : h,
                g = (0, a.default)(e, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"]);
            return i.createElement(m, (0, n.default)({
                in: p,
                timeout: f
            }, g), i.createElement("div", {
                className: (0, s.default)(o.root, c, u && o.invisible),
                "aria-hidden": !0,
                ref: t
            }, r))
        })),
        u = (0, c.default)({
            root: {
                zIndex: -1,
                position: "fixed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                right: 0,
                bottom: 0,
                top: 0,
                left: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                WebkitTapHighlightColor: "transparent"
            },
            invisible: {
                backgroundColor: "transparent"
            }
        }, {
            name: "MuiBackdrop"
        })(l)
})), o.register("dNl1y", (function(e, r) {
    t(e.exports, "default", (function() {
        return m
    }));
    var n = o("kqQIs"),
        a = o("87waR"),
        i = o("2Af7I"),
        s = o("fywoC");
    o("djNMu");
    var c = o("ai5WO"),
        d = o("dEeRT"),
        l = o("cZQw4"),
        u = o("idRy1"),
        p = o("eV2r6"),
        f = {
            entering: {
                opacity: 1
            },
            entered: {
                opacity: 1
            }
        },
        h = {
            enter: d.duration.enteringScreen,
            exit: d.duration.leavingScreen
        },
        m = s.forwardRef((function(e, t) {
            var r = e.children,
                o = e.disableStrictModeCompat,
                d = void 0 !== o && o,
                m = e.in,
                g = e.onEnter,
                v = e.onEntered,
                x = e.onEntering,
                y = e.onExit,
                b = e.onExited,
                w = e.onExiting,
                C = e.style,
                k = e.TransitionComponent,
                P = void 0 === k ? c.default : k,
                E = e.timeout,
                S = void 0 === E ? h : E,
                T = (0, i.default)(e, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"]),
                B = (0, l.default)(),
                j = B.unstable_strictMode && !d,
                M = s.useRef(null),
                _ = (0, p.default)(r.ref, t),
                R = (0, p.default)(j ? M : void 0, _),
                O = function(e) {
                    return function(t, r) {
                        if (e) {
                            var o = j ? [M.current, t] : [t, r],
                                n = (0, a.default)(o, 2),
                                i = n[0],
                                s = n[1];
                            void 0 === s ? e(i) : e(i, s)
                        }
                    }
                },
                I = O(x),
                D = O((function(e, t) {
                    (0, u.reflow)(e);
                    var r = (0, u.getTransitionProps)({
                        style: C,
                        timeout: S
                    }, {
                        mode: "enter"
                    });
                    e.style.webkitTransition = B.transitions.create("opacity", r), e.style.transition = B.transitions.create("opacity", r), g && g(e, t)
                })),
                A = O(v),
                N = O(w),
                L = O((function(e) {
                    var t = (0, u.getTransitionProps)({
                        style: C,
                        timeout: S
                    }, {
                        mode: "exit"
                    });
                    e.style.webkitTransition = B.transitions.create("opacity", t), e.style.transition = B.transitions.create("opacity", t), y && y(e)
                })),
                z = O(b);
            return s.createElement(P, (0, n.default)({
                appear: !0,
                in: m,
                nodeRef: j ? M : void 0,
                onEnter: D,
                onEntered: A,
                onEntering: I,
                onExit: L,
                onExited: z,
                onExiting: N,
                timeout: S
            }, T), (function(e, t) {
                return s.cloneElement(r, (0, n.default)({
                    style: (0, n.default)({
                        opacity: 0,
                        visibility: "exited" !== e || m ? void 0 : "hidden"
                    }, f[e], C, r.props.style),
                    ref: R
                }, t))
            }))
        }))
})), o.register("9GypZ", (function(e, r) {
    t(e.exports, "default", (function() {
        return g
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("kK88x"),
        c = o("7XXg8"),
        d = o("ai5WO"),
        l = o("eV2r6"),
        u = o("cZQw4"),
        p = o("dEeRT"),
        f = o("idRy1");

    function h(e, t) {
        var r = function(e, t) {
            var r, o = t.getBoundingClientRect();
            if (t.fakeTransform) r = t.fakeTransform;
            else {
                var n = window.getComputedStyle(t);
                r = n.getPropertyValue("-webkit-transform") || n.getPropertyValue("transform")
            }
            var a = 0,
                i = 0;
            if (r && "none" !== r && "string" == typeof r) {
                var s = r.split("(")[1].split(")")[0].split(",");
                a = parseInt(s[4], 10), i = parseInt(s[5], 10)
            }
            return "left" === e ? "translateX(".concat(window.innerWidth, "px) translateX(").concat(a - o.left, "px)") : "right" === e ? "translateX(-".concat(o.left + o.width - a, "px)") : "up" === e ? "translateY(".concat(window.innerHeight, "px) translateY(").concat(i - o.top, "px)") : "translateY(-".concat(o.top + o.height - i, "px)")
        }(e, t);
        r && (t.style.webkitTransform = r, t.style.transform = r)
    }
    var m = {
            enter: p.duration.enteringScreen,
            exit: p.duration.leavingScreen
        },
        g = i.forwardRef((function(e, t) {
            var r = e.children,
                o = e.direction,
                p = void 0 === o ? "down" : o,
                g = e.in,
                v = e.onEnter,
                x = e.onEntered,
                y = e.onEntering,
                b = e.onExit,
                w = e.onExited,
                C = e.onExiting,
                k = e.style,
                P = e.timeout,
                E = void 0 === P ? m : P,
                S = e.TransitionComponent,
                T = void 0 === S ? d.default : S,
                B = (0, a.default)(e, ["children", "direction", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]),
                j = (0, u.default)(),
                M = i.useRef(null),
                _ = i.useCallback((function(e) {
                    M.current = s.findDOMNode(e)
                }), []),
                R = (0, l.default)(r.ref, _),
                O = (0, l.default)(R, t),
                I = function(e) {
                    return function(t) {
                        e && (void 0 === t ? e(M.current) : e(M.current, t))
                    }
                },
                D = I((function(e, t) {
                    h(p, e), (0, f.reflow)(e), v && v(e, t)
                })),
                A = I((function(e, t) {
                    var r = (0, f.getTransitionProps)({
                        timeout: E,
                        style: k
                    }, {
                        mode: "enter"
                    });
                    e.style.webkitTransition = j.transitions.create("-webkit-transform", (0, n.default)({}, r, {
                        easing: j.transitions.easing.easeOut
                    })), e.style.transition = j.transitions.create("transform", (0, n.default)({}, r, {
                        easing: j.transitions.easing.easeOut
                    })), e.style.webkitTransform = "none", e.style.transform = "none", y && y(e, t)
                })),
                N = I(x),
                L = I(C),
                z = I((function(e) {
                    var t = (0, f.getTransitionProps)({
                        timeout: E,
                        style: k
                    }, {
                        mode: "exit"
                    });
                    e.style.webkitTransition = j.transitions.create("-webkit-transform", (0, n.default)({}, t, {
                        easing: j.transitions.easing.sharp
                    })), e.style.transition = j.transitions.create("transform", (0, n.default)({}, t, {
                        easing: j.transitions.easing.sharp
                    })), h(p, e), b && b(e)
                })),
                F = I((function(e) {
                    e.style.webkitTransition = "", e.style.transition = "", w && w(e)
                })),
                H = i.useCallback((function() {
                    M.current && h(p, M.current)
                }), [p]);
            return i.useEffect((function() {
                if (!g && "down" !== p && "right" !== p) {
                    var e = (0, c.default)((function() {
                        M.current && h(p, M.current)
                    }));
                    return window.addEventListener("resize", e),
                        function() {
                            e.clear(), window.removeEventListener("resize", e)
                        }
                }
            }), [p, g]), i.useEffect((function() {
                g || H()
            }), [g, H]), i.createElement(T, (0, n.default)({
                nodeRef: M,
                onEnter: D,
                onEntered: N,
                onEntering: A,
                onExit: z,
                onExited: F,
                onExiting: L,
                appear: !0,
                in: g,
                timeout: E
            }, B), (function(e, t) {
                return i.cloneElement(r, (0, n.default)({
                    ref: O,
                    style: (0, n.default)({
                        visibility: "exited" !== e || g ? void 0 : "hidden"
                    }, k, r.props.style)
                }, t))
            }))
        }))
})), o.register("7XXg8", (function(e, r) {
    function o(e) {
        var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 166;

        function o() {
            for (var o = arguments.length, n = new Array(o), a = 0; a < o; a++) n[a] = arguments[a];
            var i = this,
                s = function() {
                    e.apply(i, n)
                };
            clearTimeout(t), t = setTimeout(s, r)
        }
        return o.clear = function() {
            clearTimeout(t)
        }, o
    }
    t(e.exports, "default", (function() {
        return o
    }))
})), o.register("iWvmV", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("2Af7I"),
        a = o("kqQIs"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("cY4lv"),
        d = i.forwardRef((function(e, t) {
            var r = e.classes,
                o = e.className,
                c = e.component,
                d = void 0 === c ? "div" : c,
                l = e.square,
                u = void 0 !== l && l,
                p = e.elevation,
                f = void 0 === p ? 1 : p,
                h = e.variant,
                m = void 0 === h ? "elevation" : h,
                g = (0, n.default)(e, ["classes", "className", "component", "square", "elevation", "variant"]);
            return i.createElement(d, (0, a.default)({
                className: (0, s.default)(r.root, o, "outlined" === m ? r.outlined : r["elevation".concat(f)], !u && r.rounded),
                ref: t
            }, g))
        })),
        l = (0, c.default)((function(e) {
            var t = {};
            return e.shadows.forEach((function(e, r) {
                t["elevation".concat(r)] = {
                    boxShadow: e
                }
            })), (0, a.default)({
                root: {
                    backgroundColor: e.palette.background.paper,
                    color: e.palette.text.primary,
                    transition: e.transitions.create("box-shadow")
                },
                rounded: {
                    borderRadius: e.shape.borderRadius
                },
                outlined: {
                    border: "1px solid ".concat(e.palette.divider)
                }
            }, t)
        }), {
            name: "MuiPaper"
        })(d)
})), o.register("4RxZe", (function(e, r) {
    t(e.exports, "default", (function() {
        return u
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("cY4lv"),
        d = o("dPATK"),
        l = i.forwardRef((function(e, t) {
            var r = e.children,
                o = e.classes,
                c = e.className,
                l = e.component,
                u = void 0 === l ? "ul" : l,
                p = e.dense,
                f = void 0 !== p && p,
                h = e.disablePadding,
                m = void 0 !== h && h,
                g = e.subheader,
                v = (0, a.default)(e, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]),
                x = i.useMemo((function() {
                    return {
                        dense: f
                    }
                }), [f]);
            return i.createElement(d.default.Provider, {
                value: x
            }, i.createElement(u, (0, n.default)({
                className: (0, s.default)(o.root, c, f && o.dense, !m && o.padding, g && o.subheader),
                ref: t
            }, v), g, r))
        })),
        u = (0, c.default)({
            root: {
                listStyle: "none",
                margin: 0,
                padding: 0,
                position: "relative"
            },
            padding: {
                paddingTop: 8,
                paddingBottom: 8
            },
            dense: {},
            subheader: {
                paddingTop: 0
            }
        }, {
            name: "MuiList"
        })(l)
})), o.register("dPATK", (function(e, r) {
    t(e.exports, "default", (function() {
        return n
    }));
    var n = o("fywoC").createContext({})
})), o.register("2kOFA", (function(e, r) {
    t(e.exports, "default", (function() {
        return g
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("cY4lv"),
        d = o("7s22H"),
        l = o("3IP7d"),
        u = o("eV2r6"),
        p = o("dPATK"),
        f = o("kK88x"),
        h = "undefined" == typeof window ? i.useEffect : i.useLayoutEffect,
        m = i.forwardRef((function(e, t) {
            var r = e.alignItems,
                o = void 0 === r ? "center" : r,
                c = e.autoFocus,
                m = void 0 !== c && c,
                g = e.button,
                v = void 0 !== g && g,
                x = e.children,
                y = e.classes,
                b = e.className,
                w = e.component,
                C = e.ContainerComponent,
                k = void 0 === C ? "li" : C,
                P = e.ContainerProps,
                E = (P = void 0 === P ? {} : P).className,
                S = (0, a.default)(P, ["className"]),
                T = e.dense,
                B = void 0 !== T && T,
                j = e.disabled,
                M = void 0 !== j && j,
                _ = e.disableGutters,
                R = void 0 !== _ && _,
                O = e.divider,
                I = void 0 !== O && O,
                D = e.focusVisibleClassName,
                A = e.selected,
                N = void 0 !== A && A,
                L = (0, a.default)(e, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]),
                z = i.useContext(p.default),
                F = {
                    dense: B || z.dense || !1,
                    alignItems: o
                },
                H = i.useRef(null);
            h((function() {
                m && H.current && H.current.focus()
            }), [m]);
            var W = i.Children.toArray(x),
                V = W.length && (0, l.default)(W[W.length - 1], ["ListItemSecondaryAction"]),
                G = i.useCallback((function(e) {
                    H.current = f.findDOMNode(e)
                }), []),
                U = (0, u.default)(G, t),
                q = (0, n.default)({
                    className: (0, s.default)(y.root, b, F.dense && y.dense, !R && y.gutters, I && y.divider, M && y.disabled, v && y.button, "center" !== o && y.alignItemsFlexStart, V && y.secondaryAction, N && y.selected),
                    disabled: M
                }, L),
                $ = w || "li";
            return v && (q.component = w || "div", q.focusVisibleClassName = (0, s.default)(y.focusVisible, D), $ = d.default), V ? ($ = q.component || w ? $ : "div", "li" === k && ("li" === $ ? $ = "div" : "li" === q.component && (q.component = "div")), i.createElement(p.default.Provider, {
                value: F
            }, i.createElement(k, (0, n.default)({
                className: (0, s.default)(y.container, E),
                ref: U
            }, S), i.createElement($, q, W), W.pop()))) : i.createElement(p.default.Provider, {
                value: F
            }, i.createElement($, (0, n.default)({
                ref: U
            }, q), W))
        })),
        g = (0, c.default)((function(e) {
            return {
                root: {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    position: "relative",
                    textDecoration: "none",
                    width: "100%",
                    boxSizing: "border-box",
                    textAlign: "left",
                    paddingTop: 8,
                    paddingBottom: 8,
                    "&$focusVisible": {
                        backgroundColor: e.palette.action.selected
                    },
                    "&$selected, &$selected:hover": {
                        backgroundColor: e.palette.action.selected
                    },
                    "&$disabled": {
                        opacity: .5
                    }
                },
                container: {
                    position: "relative"
                },
                focusVisible: {},
                dense: {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                alignItemsFlexStart: {
                    alignItems: "flex-start"
                },
                disabled: {},
                divider: {
                    borderBottom: "1px solid ".concat(e.palette.divider),
                    backgroundClip: "padding-box"
                },
                gutters: {
                    paddingLeft: 16,
                    paddingRight: 16
                },
                button: {
                    transition: e.transitions.create("background-color", {
                        duration: e.transitions.duration.shortest
                    }),
                    "&:hover": {
                        textDecoration: "none",
                        backgroundColor: e.palette.action.hover,
                        "@media (hover: none)": {
                            backgroundColor: "transparent"
                        }
                    }
                },
                secondaryAction: {
                    paddingRight: 48
                },
                selected: {}
            }
        }), {
            name: "MuiListItem"
        })(m)
})), o.register("3IP7d", (function(e, r) {
    t(e.exports, "default", (function() {
        return a
    }));
    var n = o("fywoC");

    function a(e, t) {
        return n.isValidElement(e) && -1 !== t.indexOf(e.type.muiName)
    }
})), o.register("kDvAf", (function(e, r) {
    t(e.exports, "default", (function() {
        return u
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("cY4lv"),
        d = o("dPATK"),
        l = i.forwardRef((function(e, t) {
            var r = e.classes,
                o = e.className,
                c = (0, a.default)(e, ["classes", "className"]),
                l = i.useContext(d.default);
            return i.createElement("div", (0, n.default)({
                className: (0, s.default)(r.root, o, "flex-start" === l.alignItems && r.alignItemsFlexStart),
                ref: t
            }, c))
        })),
        u = (0, c.default)((function(e) {
            return {
                root: {
                    minWidth: 56,
                    color: e.palette.action.active,
                    flexShrink: 0,
                    display: "inline-flex"
                },
                alignItemsFlexStart: {
                    marginTop: 8
                }
            }
        }), {
            name: "MuiListItemIcon"
        })(l)
})), o.register("f5DLu", (function(e, r) {
    t(e.exports, "default", (function() {
        return p
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("cY4lv"),
        d = o("cSAzO"),
        l = o("dPATK"),
        u = i.forwardRef((function(e, t) {
            var r = e.children,
                o = e.classes,
                c = e.className,
                u = e.disableTypography,
                p = void 0 !== u && u,
                f = e.inset,
                h = void 0 !== f && f,
                m = e.primary,
                g = e.primaryTypographyProps,
                v = e.secondary,
                x = e.secondaryTypographyProps,
                y = (0, a.default)(e, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]),
                b = i.useContext(l.default).dense,
                w = null != m ? m : r;
            null == w || w.type === d.default || p || (w = i.createElement(d.default, (0, n.default)({
                variant: b ? "body2" : "body1",
                className: o.primary,
                component: "span",
                display: "block"
            }, g), w));
            var C = v;
            return null == C || C.type === d.default || p || (C = i.createElement(d.default, (0, n.default)({
                variant: "body2",
                className: o.secondary,
                color: "textSecondary",
                display: "block"
            }, x), C)), i.createElement("div", (0, n.default)({
                className: (0, s.default)(o.root, c, b && o.dense, h && o.inset, w && C && o.multiline),
                ref: t
            }, y), w, C)
        })),
        p = (0, c.default)({
            root: {
                flex: "1 1 auto",
                minWidth: 0,
                marginTop: 4,
                marginBottom: 4
            },
            multiline: {
                marginTop: 6,
                marginBottom: 6
            },
            dense: {},
            inset: {
                paddingLeft: 56
            },
            primary: {},
            secondary: {}
        }, {
            name: "MuiListItemText"
        })(u)
})), o.register("cSAzO", (function(e, r) {
    t(e.exports, "default", (function() {
        return p
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("cY4lv"),
        d = o("kYx4h"),
        l = {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            subtitle1: "h6",
            subtitle2: "h6",
            body1: "p",
            body2: "p"
        },
        u = i.forwardRef((function(e, t) {
            var r = e.align,
                o = void 0 === r ? "inherit" : r,
                c = e.classes,
                u = e.className,
                p = e.color,
                f = void 0 === p ? "initial" : p,
                h = e.component,
                m = e.display,
                g = void 0 === m ? "initial" : m,
                v = e.gutterBottom,
                x = void 0 !== v && v,
                y = e.noWrap,
                b = void 0 !== y && y,
                w = e.paragraph,
                C = void 0 !== w && w,
                k = e.variant,
                P = void 0 === k ? "body1" : k,
                E = e.variantMapping,
                S = void 0 === E ? l : E,
                T = (0, a.default)(e, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]),
                B = h || (C ? "p" : S[P] || l[P]) || "span";
            return i.createElement(B, (0, n.default)({
                className: (0, s.default)(c.root, u, "inherit" !== P && c[P], "initial" !== f && c["color".concat((0, d.default)(f))], b && c.noWrap, x && c.gutterBottom, C && c.paragraph, "inherit" !== o && c["align".concat((0, d.default)(o))], "initial" !== g && c["display".concat((0, d.default)(g))]),
                ref: t
            }, T))
        })),
        p = (0, c.default)((function(e) {
            return {
                root: {
                    margin: 0
                },
                body2: e.typography.body2,
                body1: e.typography.body1,
                caption: e.typography.caption,
                button: e.typography.button,
                h1: e.typography.h1,
                h2: e.typography.h2,
                h3: e.typography.h3,
                h4: e.typography.h4,
                h5: e.typography.h5,
                h6: e.typography.h6,
                subtitle1: e.typography.subtitle1,
                subtitle2: e.typography.subtitle2,
                overline: e.typography.overline,
                srOnly: {
                    position: "absolute",
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                },
                alignLeft: {
                    textAlign: "left"
                },
                alignCenter: {
                    textAlign: "center"
                },
                alignRight: {
                    textAlign: "right"
                },
                alignJustify: {
                    textAlign: "justify"
                },
                noWrap: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                gutterBottom: {
                    marginBottom: "0.35em"
                },
                paragraph: {
                    marginBottom: 16
                },
                colorInherit: {
                    color: "inherit"
                },
                colorPrimary: {
                    color: e.palette.primary.main
                },
                colorSecondary: {
                    color: e.palette.secondary.main
                },
                colorTextPrimary: {
                    color: e.palette.text.primary
                },
                colorTextSecondary: {
                    color: e.palette.text.secondary
                },
                colorError: {
                    color: e.palette.error.main
                },
                displayInline: {
                    display: "inline"
                },
                displayBlock: {
                    display: "block"
                }
            }
        }), {
            name: "MuiTypography"
        })(u)
})), o.register("5hQnP", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9c.39-.67-.09-1.5-.86-1.5H13l2.49-6.65c.25-.65-.23-1.35-.93-1.35H8c-.55 0-1 .45-1 1z"
        }), "FlashOnRounded")
})), o.register("55G3C", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
        }), "QuestionAnswer")
})), o.register("bS5EK", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"
        }), "Shop")
})), o.register("7UGEB", (function(e, r) {
    t(e.exports, "default", (function() {
        return i
    }));
    var n = o("hxEiv");
    o("fywoC");
    var a = o("eEMhJ");
    var i = e => (0, n.jsx)("span", {
        onClick: () => {
            e.disabled || (e.onClick && e.onClick(), (0, a.changeRoute)(e.to))
        },
        children: e.children
    })
})), o.register("12wv3", (function(e, r) {
    t(e.exports, "default", (function() {
        return x
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("5933e"),
        s = o("cjBfv"),
        c = o("b9PLE"),
        d = o("kC0Tv"),
        l = o("lpEVe"),
        u = o("fywoC"),
        p = o("28YkJ"),
        f = o("2FDaO");
    let h, m, g = e => e;
    let v = class extends u.Component {
        render() {
            return this.props.powerups.linkPartnerName ? (0, a.jsx)(p.default, {
                children: (0, a.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: [(0, a.jsx)("div", {
                        style: {
                            background: d.default.DarkSuccessGreen,
                            color: d.default.White,
                            height: 43,
                            width: 43,
                            marginRight: 7,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: (0, a.jsx)(i.default, {
                            name: s.LINK_ICON
                        })
                    }), (0, a.jsxs)("div", {
                        style: {
                            fontWeight: "bold"
                        },
                        children: [(0, a.jsx)(y, {
                            children: (0, a.jsx)(c.default, {
                                text: "Link Active"
                            })
                        }), (0, a.jsx)(b, {
                            children: this.props.powerups.linkPartnerName
                        })]
                    })]
                })
            }) : null
        }
    };
    v = (0, n.__decorate)([(0, l.inject)("powerups"), l.observer], v);
    var x = v;
    const y = f.default.div(h || (h = g`
  font-size: 17px;
  opacity: 0.8;
`)),
        b = f.default.div(m || (m = g`
  font-size: 20px;
  text-overflow: ellipsis;
  width: 261px;
  white-space: nowrap;
  overflow: hidden;
`))
})), o.register("28YkJ", (function(e, r) {
    t(e.exports, "default", (function() {
        return i
    }));
    var n = o("l360q");
    let a;
    var i = o("2FDaO").default.div(a || (a = (e => e)`
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 2px;
  border-radius: 6px;
  margin-bottom: 5px;
  font-family: ${0};
`), n.default.name)
})), o.register("gmzvT", (function(e, r) {
    t(e.exports, "default", (function() {
        return T
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("5933e"),
        c = o("9GW62"),
        d = o("fThXt"),
        l = o("b9PLE"),
        u = o("l360q");
    o("jlxb2");
    var p = o("1rlgk"),
        f = o("eEMhJ"),
        h = o("lpEVe"),
        m = o("fywoC"),
        g = o("2FDaO");
    let v, x, y, b, w = e => e;
    const C = g.default.div(v || (v = w`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: ${0};
`), u.default.name),
        k = g.default.div(x || (x = w`
  font-size: 38px;
  margin-left: 5px;
  font-weight: 900;
`)),
        P = g.default.div(y || (y = w`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: ${0};
  color: ${0};
  display: flex;
  justify-content: center;
  align-items: center;
`), (e => e.backgroundColor), (e => e.textColor)),
        E = g.default.div(b || (b = w`
  font-size: 19px;
  opacity: 0.8;
  margin-bottom: 7px;
  font-family: ${0};
`), u.default.name);
    let S = class extends m.Component {
        render() {
            const e = (this.props.powerups.availablePowerups.filter((e => e.name === this.props.navigation.attackModal.powerup)) || [])[0];
            if (!e) return null;
            const t = !(e.name === p.PowerupNames.link && this.props.powerups.activePowerups.includes(p.PowerupNames.shield));
            return (0, i.jsxs)(d.default, {
                open: this.props.navigation.attackModal.open,
                close: this.close,
                customMaxWidth: "90%",
                customWidth: "600px",
                children: [(0, i.jsxs)(C, {
                    children: [(0, i.jsx)(P, {
                        backgroundColor: e.color.background,
                        textColor: e.color.text,
                        children: (0, i.jsx)(s.default, {
                            name: e.icon
                        })
                    }), (0, i.jsx)(k, {
                        children: (0, i.jsx)(l.default, {
                            text: (0, f.getPowerupName)(e)
                        })
                    })]
                }), (0, i.jsx)(E, {
                    children: (0, i.jsx)(l.default, {
                        text: t ? (0, f.getPowerupDescription)(e.description) : "This powerup is disabled while shield is active"
                    })
                }), t && (0, i.jsx)(c.default, {
                    usePowerupAction: !0,
                    parentAction: this.close
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "close", (() => this.props.navigation.attackModal.open = !1))
        }
    };
    S = (0, a.__decorate)([(0, h.inject)("powerups", "navigation"), h.observer], S);
    var T = S
})), o.register("fThXt", (function(e, r) {
    t(e.exports, "default", (function() {
        return k
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("fywoC"),
        c = o("kK88x"),
        d = o("lpEVe"),
        l = o("2FDaO"),
        u = o("aCLJC"),
        p = o("kC0Tv"),
        f = o("l360q"),
        h = o("hbfMQ"),
        m = o("6sear");
    let g, v, x = e => e;
    const y = l.default.div(g || (g = x`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  animation-duration: 0.5;
  font-family: ${0};
  z-index: 9999999999999;
`), f.default.name),
        b = l.default.div(v || (v = x`
  background: ${0};
  border-radius: 4px;
  box-shadow: ${0};
  animation-duration: 0.5s;
  ${0}
  padding: ${0};
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 9999999999999;
`), p.default.White, h.default.basic, (e => e.fullScreen ? "\n  height: 100%;\n  width: 100%;\n  " : `\n  max-width: ${e.customMaxWidth?e.customMaxWidth:"540px"};\n  ${e.customWidth?"width: "+e.customWidth+";":null}\n  max-height: 79vh;\n  margin: 20px;\n  `), (e => e.customPadding || "18px")),
        w = e => e.stopPropagation();
    let C = class extends s.Component {
        static getDerivedStateFromProps(e, t) {
            return !e.open && t.open ? (m.done.play(), {
                exiting: !0,
                open: !1
            }) : e.open && !t.open ? {
                exiting: !1,
                open: !0
            } : null
        }
        componentDidUpdate(e, t) {
            this.state.exiting && !t.exiting && setTimeout((() => this.setState({
                exiting: !1
            })), 500)
        }
        render() {
            const {
                close: e,
                gameValues: {
                    gameStatus: t
                }
            } = this.props, {
                open: r,
                exiting: o
            } = this.state;
            if (!r && !o) return null;
            if (t === u.GameStatus.results) return null;
            const n = o ? "fadeOut" : "fadeIn",
                a = o ? "zoomOut" : "zoomIn";
            return c.createPortal((0, i.jsx)(y, {
                className: `animated ${n}`,
                onClick: e,
                children: (0, i.jsx)(b, {
                    onClick: w,
                    fullScreen: this.props.fullscreen,
                    className: `animated ${a}`,
                    customPadding: this.props.customPadding,
                    customMaxWidth: this.props.customMaxWidth,
                    customWidth: this.props.customWidth,
                    style: this.props.customStyle,
                    children: this.props.children
                })
            }), document.body)
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "state", {
                exiting: !1,
                open: !1
            })
        }
    };
    C = (0, a.__decorate)([(0, d.inject)("gameValues"), d.observer], C);
    var k = C
})), o.register("aCLJC", (function(e, r) {
    let o;
    var n;
    let a;
    var i;
    let s;
    var c;
    let d;
    var l;
    t(e.exports, "GameStatus", (function() {
        return s
    })), (n = o || (o = {})).multipleChoice = "mc", n.textInput = "text", (i = a || (a = {})).public = "public", i.private = "private", (c = s || (s = {})).setup = "setup", c.join = "join", c.teams = "teams", c.gameplay = "gameplay", c.results = "results", (l = d || (d = {})).time = "time", l.race = "race", l.allIn = "allIn"
})), o.register("8sB3x", (function(e, r) {
    t(e.exports, "default", (function() {
        return p
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("6VgSE"),
        c = o("lpEVe"),
        d = o("fywoC"),
        l = o("9SFAP");
    let u = class extends d.Component {
        render() {
            const e = this.useablePowerups();
            return e.length < 1 ? null : (0, i.jsxs)(d.Fragment, {
                children: [(0, i.jsx)(s.default, {}), (0, i.jsx)("div", {
                    style: {
                        height: 5
                    }
                }), e.map((e => (0, i.jsx)(l.default, {
                    powerup: e
                }, e.name)))]
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "useablePowerups", (() => this.props.powerups.availablePowerups.filter((e => this.props.powerups.purchasedPowerups.includes(e.name) && !this.props.powerups.usedPowerups.includes(e.name)))))
        }
    };
    u = (0, a.__decorate)([(0, c.inject)("powerups"), c.observer], u);
    var p = u
})), o.register("6VgSE", (function(e, r) {
    t(e.exports, "default", (function() {
        return u
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("cY4lv"),
        d = o("jhlnr"),
        l = i.forwardRef((function(e, t) {
            var r = e.absolute,
                o = void 0 !== r && r,
                c = e.classes,
                d = e.className,
                l = e.component,
                u = void 0 === l ? "hr" : l,
                p = e.flexItem,
                f = void 0 !== p && p,
                h = e.light,
                m = void 0 !== h && h,
                g = e.orientation,
                v = void 0 === g ? "horizontal" : g,
                x = e.role,
                y = void 0 === x ? "hr" !== u ? "separator" : void 0 : x,
                b = e.variant,
                w = void 0 === b ? "fullWidth" : b,
                C = (0, a.default)(e, ["absolute", "classes", "className", "component", "flexItem", "light", "orientation", "role", "variant"]);
            return i.createElement(u, (0, n.default)({
                className: (0, s.default)(c.root, d, "fullWidth" !== w && c[w], o && c.absolute, f && c.flexItem, m && c.light, "vertical" === v && c.vertical),
                role: y,
                ref: t
            }, C))
        })),
        u = (0, c.default)((function(e) {
            return {
                root: {
                    height: 1,
                    margin: 0,
                    border: "none",
                    flexShrink: 0,
                    backgroundColor: e.palette.divider
                },
                absolute: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%"
                },
                inset: {
                    marginLeft: 72
                },
                light: {
                    backgroundColor: (0, d.fade)(e.palette.divider, .08)
                },
                middle: {
                    marginLeft: e.spacing(2),
                    marginRight: e.spacing(2)
                },
                vertical: {
                    height: "100%",
                    width: 1
                },
                flexItem: {
                    alignSelf: "stretch",
                    height: "auto"
                }
            }
        }), {
            name: "MuiDivider"
        })(l)
})), o.register("9SFAP", (function(e, r) {
    t(e.exports, "default", (function() {
        return M
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("5RLZo"),
        c = o("7SwYo"),
        d = o("5933e"),
        l = o("b9PLE"),
        u = o("l360q"),
        p = o("eEMhJ"),
        f = o("lpEVe"),
        h = o("fywoC"),
        m = o("49Os1");
    o("jlxb2");
    var g = o("1rlgk"),
        v = o("2FDaO"),
        x = o("6sear");
    let y, b, w, C, k = e => e;
    const P = [g.PowerupNames.pumpkinPie, g.PowerupNames.icer, g.PowerupNames.reducer, g.PowerupNames.subtractor, g.PowerupNames.giving, g.PowerupNames.link, g.PowerupNames.blurredScreen, g.PowerupNames.cashConcealer, g.PowerupNames.outnumbered],
        E = v.default.div(y || (y = k`
  margin: 5px;
  margin-bottom: 3px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${0};
  border-style: solid;
  border-radius: 6px;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 2px;
  padding: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 52px;
`), u.default.name),
        S = v.default.div(b || (b = k`
  display: flex;
  align-items: center;
`)),
        T = v.default.div(w || (w = k`
  background-color: ${0};
  color: ${0};
  height: 38px;
  width: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`), (e => e.colors.background), (e => e.colors.text)),
        B = v.default.div(C || (C = k`
  font-size: 18px;
  font-weight: bold;
  margin-left: 7px;
`));
    let j = class extends h.Component {
        render() {
            const {
                powerup: e
            } = this.props;
            return (0, i.jsx)("div", {
                style: {
                    display: "inline-block",
                    width: "100%"
                },
                children: (0, i.jsxs)(E, {
                    children: [(0, i.jsxs)(S, {
                        children: [(0, i.jsx)(s.default, {
                            title: (0, i.jsx)("div", {
                                style: {
                                    fontSize: 15
                                },
                                children: (0, i.jsx)(l.default, {
                                    text: (0, p.getPowerupDescription)(e.description)
                                })
                            }),
                            children: (0, i.jsx)(T, {
                                colors: e.color,
                                children: (0, i.jsx)(d.default, {
                                    name: e.icon
                                })
                            })
                        }), (0, i.jsx)(B, {
                            children: (0, i.jsx)(l.default, {
                                text: (0, p.getPowerupName)(e)
                            })
                        })]
                    }), (0, i.jsx)(c.default, {
                        onClick: this.activatePowerup,
                        label: (0, i.jsx)(l.default, {
                            text: "Use"
                        }),
                        type: this.props.powerups.activePowerups.includes(e.name) ? "disabled" : "primary",
                        size: "small"
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "activatePowerup", (() => {
                this.props.powerup.name.includes("Stone") ? x.stone.play() : (x.successClick.play(), this.props.powerup.name !== g.PowerupNames.repurchasePowerups && (0, p.toggleDrawer)(!1)), (0, p.send)(m.default.powerupActivated, this.props.powerup.name), P.includes(this.props.powerup.name) && (this.props.navigation.attackModal.powerup = this.props.powerup.name, this.props.navigation.attackModal.open = !0)
            }))
        }
    };
    j = (0, a.__decorate)([(0, f.inject)("powerups", "navigation"), f.observer], j);
    var M = j
})), o.register("bxjsJ", (function(e, r) {
    t(e.exports, "default", (function() {
        return g
    }));
    var n = o("hxEiv");
    o("fywoC");
    var a = o("2FDaO"),
        i = o("gLlKC"),
        s = o("j11qd"),
        c = o("eEMhJ"),
        d = o("ggxqK");
    let l, u, p, f, h, m = e => e;
    var g = e => (0, n.jsxs)(v, {
        children: [(0, n.jsxs)(x, {
            children: [(0, n.jsx)(y, {
                children: e.playerName
            }), e.teamName && (0, n.jsx)(b, {
                children: e.teamName
            })]
        }), (0, n.jsx)(w, {
            children: (0, n.jsx)(d.default, {
                style: {
                    color: "rgba(117, 117, 117, 1.0)"
                },
                onClick: e.isSettingsOpen ? e.onBack : e.onClickSettings,
                children: e.isSettingsOpen ? (0, n.jsx)(i.default, {}) : (0, n.jsx)(s.default, {})
            })
        })]
    });
    const v = a.default.div.attrs({
            className: "maxWidth flex vc between"
        })(l || (l = m`
  font-family: ${0};
  flex-shrink: 0;
  padding: 12px 16px;
  padding-right: 5px;
  background-color: #f2f2f2;
`), c.mainFontName),
        x = a.default.div.attrs({
            className: "flex flex-column hc"
        })(u || (u = m`
  align-items: flex-start;
  overflow: hidden;
`)),
        y = a.default.div(p || (p = m`
  color: #222222;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
`)),
        b = a.default.div(f || (f = m`
  font-size: 12px;
  color: #696969;
`)),
        w = a.default.div(h || (h = m`
  margin-left: 10px;
`))
})), o.register("gLlKC", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
        }), "KeyboardBackspace")
})), o.register("j11qd", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            transform: "scale(1.2, 1.2)",
            d: "M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
        }), "Settings")
})), o.register("3lLKz", (function(e, r) {
    t(e.exports, "default", (function() {
        return y
    }));
    var n = o("hxEiv"),
        a = o("lKmIF"),
        i = o("fQMql"),
        s = o("lpEVe"),
        c = o("fywoC"),
        d = o("2FDaO"),
        l = o("eEMhJ");
    let u, p, f, h, m, g, v, x = e => e;
    var y = (0, s.observer)((() => {
        const {
            pardy: e
        } = c.useContext(i.default), t = e.powers.find((t => t.id === e.power));
        return t ? (0, n.jsx)(b, {
            children: (0, n.jsxs)(w, {
                children: [(0, n.jsx)(C, {
                    style: {
                        backgroundColor: t.background
                    },
                    children: (0, n.jsx)(k, {
                        src: t.image
                    })
                }), (0, n.jsxs)(P, {
                    children: [(0, n.jsx)(E, {
                        children: t.name
                    }), (0, n.jsx)(S, {
                        children: t.description
                    })]
                })]
            })
        }) : null
    }));
    const b = d.default.div.attrs({
            className: "maxWidth"
        })(u || (u = x`
  font-family: ${0};
  padding: 15px;
`), l.mainFontName),
        w = d.default.div.attrs({
            className: "maxWidth light-shadow"
        })(p || (p = x`
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 0px;
  border-radius: 5px;
  overflow: hidden;
`)),
        C = d.default.div.attrs({
            className: "maxWidth flex-center"
        })(f || (f = x`
  height: 80px;
`)),
        k = d.default.img(h || (h = x`
  height: 40px;
  filter: drop-shadow(2px 2px 2px #222);
`)),
        P = d.default.div.attrs({
            className: "maxWidth flex-center flex-column"
        })(m || (m = x`
  background: ${0};
  padding: 20px 15px;
  text-align: center;
`), a.default.Snow),
        E = d.default.div(g || (g = x`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 2px;
`)),
        S = d.default.div(v || (v = x`
  font-size: 14px;
`))
})), o.register("k1Bp0", (function(e, r) {
    t(e.exports, "default", (function() {
        return v
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("lpEVe"),
        c = o("fywoC"),
        d = o("a3xbj"),
        l = o("eEMhJ"),
        u = o("i2MAF"),
        p = o("2FDaO"),
        f = o("bfV0l"),
        h = o("b9PLE");
    let m, g = class extends c.Component {
        render() {
            const e = this.props.imposter.noteDrawerOpen;
            return (0, l.inImposterMode)() ? (0, i.jsx)(u.StyledDrawer, {
                closable: !1,
                placement: "left",
                visible: e,
                onClose: this.close,
                width: window.innerWidth > 500 ? 364 : "80vw",
                bodyStyle: {
                    height: "100%",
                    overflow: "hidden",
                    padding: 0,
                    fontFamily: "'Space Grotesk', monospace"
                },
                children: (0, i.jsxs)(u.LeaderboardContainer, {
                    style: {
                        paddingLeft: 20,
                        paddingRight: 20
                    },
                    children: [(0, i.jsxs)(x, {
                        children: [(0, i.jsx)("span", {
                            role: "img",
                            "aria-label": "notebook",
                            children: "📓"
                        }), " ", "Notebook"]
                    }), (0, i.jsx)(d.default, {
                        minRows: 8
                    }), (0, i.jsx)(f.default, {
                        type: "info",
                        style: {
                            marginTop: 17,
                            marginBottom: 25
                        },
                        message: (0, i.jsx)(h.default, {
                            text: "Tip"
                        }),
                        description: (0, i.jsx)(h.default, {
                            text: "Pay attention to the Investigation Log for more clues."
                        }),
                        showIcon: !0
                    })]
                })
            }) : null
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "close", (() => this.props.imposter.noteDrawerOpen = !1))
        }
    };
    g = (0, a.__decorate)([(0, s.inject)("imposter"), s.observer], g);
    var v = g;
    const x = p.default.div(m || (m = (e => e)`
  font-weight: 900;
  font-size: 34px;
  margin-top: 10px;
  margin-bottom: 7px;
`))
})), o.register("a3xbj", (function(e, r) {
    t(e.exports, "default", (function() {
        return h
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("fywoC"),
        c = o("b9Zw0"),
        d = o("lpEVe"),
        l = o("eEMhJ"),
        u = o("49Os1");
    const {
        TextArea: p
    } = c.default;
    let f = class extends s.Component {
        componentWillUnmount() {
            this.save()
        }
        render() {
            return this.props.imposter.me ? (0, i.jsx)(p, {
                placeholder: "Leave notes or observations here!",
                value: this.props.imposter.me.notes,
                onChange: this.handleChange,
                onBlur: this.onBlur,
                autoSize: {
                    minRows: this.props.minRows || 4
                }
            }) : null
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "handleChange", (e => {
                this.props.imposter.me.notes = e.target.value
            })), (0, n.default)(this, "onBlur", (() => this.save())), (0, n.default)(this, "save", (() => {
                (0, l.send)(u.default.imposter.notes, this.props.imposter.me.notes)
            }))
        }
    };
    f = (0, a.__decorate)([(0, d.inject)("imposter"), d.observer], f);
    var h = f
})), o.register("i2MAF", (function(e, r) {
    t(e.exports, "StyledDrawer", (function() {
        return g
    })), t(e.exports, "LeaderboardContainer", (function() {
        return y
    })), t(e.exports, "default", (function() {
        return x
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("9xElQ"),
        c = o("lpEVe"),
        d = o("fywoC"),
        l = o("2FDaO"),
        u = o("j2XHK"),
        p = o("5AUCh");
    let f, h, m = e => e;
    const g = (0, l.default)(s.default)(f || (f = m`
  .ant-drawer-wrapper-body {
    width: 100%;
    height: 100%;
  }
`));
    let v = class extends d.Component {
        render() {
            return this.props.gameOptions.type !== u.GameType.live ? null : (0, i.jsx)(g, {
                closable: !1,
                placement: "left",
                visible: this.props.navigation.leaderboardDrawerOpen,
                onClose: this.close,
                width: window.innerWidth > 500 ? 364 : "80vw",
                bodyStyle: {
                    background: "#673AB7",
                    height: "100%",
                    overflow: "hidden",
                    padding: 0
                },
                children: (0, i.jsx)(y, {
                    children: (0, i.jsx)(p.default, {})
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "close", (() => this.props.navigation.leaderboardDrawerOpen = !1))
        }
    };
    v = (0, a.__decorate)([(0, c.inject)("navigation", "gameOptions"), c.observer], v);
    var x = v;
    const y = l.default.div(h || (h = m`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`))
})), o.register("5AUCh", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var n = o("hxEiv"),
        a = o("9GW62"),
        i = o("fywoC");
    class s extends i.Component {
        render() {
            return (0, n.jsx)(i.Fragment, {
                children: (0, n.jsx)(a.default, {
                    showSelf: !0,
                    customItemBorderRadius: 7
                })
            })
        }
    }
    var c = s
})), o.register("bHPgO", (function(e, r) {
    t(e.exports, "Container", (function() {
        return F
    })), t(e.exports, "default", (function() {
        return q
    }));
    var n = o("hxEiv"),
        a = o("6YArk"),
        i = o("5FGuG"),
        s = o("cNzbt"),
        c = o("i6SGg"),
        d = o("fywoC"),
        l = o("69hpJ"),
        u = o("2FDaO"),
        p = o("iLcra"),
        f = o("d2Ye6"),
        h = o("LLwiS"),
        m = o("8RCOQ"),
        g = o("eEMhJ"),
        v = o("4MuSt"),
        x = o("lpEVe"),
        y = o("kcsKB"),
        b = o("j2XHK"),
        w = o("gxPzp"),
        C = o("3Lkct"),
        k = o("klFLy"),
        P = o("1yEHC"),
        E = o("9D5rK"),
        S = o("9bZfY"),
        T = o("l4810"),
        B = o("iKzHX"),
        j = o("fhcUk"),
        M = o("eVMwe"),
        _ = o("fQMql"),
        R = o("fymL9"),
        O = o("cmvpZ"),
        I = o("1Q66o");
    let D;
    const A = [c.default.questions],
        N = () => (0, O.sample)("abcdefghijklmnopqrstuvwxyz".split("")),
        L = N(),
        z = N(),
        F = u.default.div.withConfig({
            displayName: `sc-${L+z}`
        }).attrs({
            className: "maxAll flex-column"
        })(D || (D = (e => e)`
  flex: 1 1 auto;
  min-height: 0;
  background: ${0};
  overflow-x: hidden;
  overflow-y: hidden;
`), (e => e.customBackground || e.theme.defaultBackground)),
        H = {
            width: "100%",
            height: "100%"
        },
        W = e => {
            if (e.currentRoute === e.path) {
                const t = e.component;
                return (0, n.jsx)(t, {})
            }
            return null
        },
        V = () => y.default.navigation.canChangeRoute = !1,
        G = () => y.default.navigation.canChangeRoute = !0,
        U = e => {
            const [t, r] = d.useState(!0);
            return d.useEffect((() => {
                r(!1)
            }), []), (0, n.jsx)(l.TransitionGroup, {
                style: H,
                children: (0, n.jsx)(l.CSSTransition, {
                    style: H,
                    timeout: I.CSS_TRANSITION_TIMEOUT,
                    onExit: V,
                    onEntered: G,
                    classNames: A.includes(e.currentRoute) || t ? "" : "fade-router",
                    children: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(W, {
                            currentRoute: e.currentRoute,
                            path: c.default.upgrade,
                            component: s.default
                        }), (0, n.jsx)(W, {
                            currentRoute: e.currentRoute,
                            path: c.default.shop,
                            component: i.default
                        }), (0, n.jsx)(W, {
                            currentRoute: e.currentRoute,
                            path: c.default.questions,
                            component: h.default
                        }), (0, n.jsx)(W, {
                            currentRoute: e.currentRoute,
                            path: c.default.team,
                            component: f.default
                        }), (0, n.jsx)(W, {
                            currentRoute: e.currentRoute,
                            path: c.default.waiting,
                            component: a.default
                        }), (0, n.jsx)(W, {
                            currentRoute: e.currentRoute,
                            path: c.default.gameOver,
                            component: p.default
                        }), (0, n.jsx)(W, {
                            currentRoute: e.currentRoute,
                            path: c.default.nonDismissMessage,
                            component: C.default
                        }), (0, n.jsx)(W, {
                            currentRoute: e.currentRoute,
                            path: c.default.imposterMode,
                            component: E.default
                        }), (0, n.jsx)(W, {
                            currentRoute: e.currentRoute,
                            path: c.default.drawMode,
                            component: S.default
                        }), (0, n.jsx)(W, {
                            currentRoute: e.currentRoute,
                            path: c.default.pardyMode,
                            component: T.default
                        }), (0, n.jsx)(W, {
                            currentRoute: e.currentRoute,
                            path: c.default.join,
                            component: B.default
                        })]
                    })
                }, e.currentRoute)
            })
        };
    var q = (0, x.observer)((e => {
        const {
            gameValues: t,
            navigation: r
        } = d.useContext(_.default);
        return d.useEffect((() => {
            e.joinDetails && ((0, R.default)({
                serverUrl: e.joinDetails.serverUrl,
                roomId: e.joinDetails.roomId,
                intentId: e.joinDetails.intentId
            }), (0, v.when)((() => t.gameStatus === b.GameStatus.results), (() => {
                (0, g.changeRoute)(c.default.gameOver)
            })), (0, g.listenForLeave)())
        }), []), (0, n.jsxs)(F, {
            children: [(0, n.jsx)(U, {
                currentRoute: r.currentRoute
            }), (0, n.jsx)(m.default, {}), (0, n.jsx)(j.default, {}), (0, n.jsx)(w.default, {}), (0, n.jsx)(k.default, {}), (0, n.jsx)(P.default, {}), (0, n.jsx)(M.default, {})]
        })
    }))
})), o.register("6YArk", (function(e, r) {
    t(e.exports, "ITEM_MAX_WIDTH", (function() {
        return v
    })), t(e.exports, "default", (function() {
        return k
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("lpEVe"),
        c = o("fywoC"),
        d = o("2FDaO"),
        l = o("71sEC"),
        u = (l = o("71sEC"), o("jSwWq")),
        p = o("fVPxP"),
        f = o("2mgHs");
    let h, m, g = e => e;
    const v = 600,
        x = d.default.div(h || (h = g`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  background: ${0};
  -webkit-overflow-scrolling: touch;
`), l.backgroundCanvasColor),
        y = d.default.div(m || (m = g`
  width: 90%;
  max-width: ${0}px;
  min-height: 100%;
`), v);
    let b;
    var w;
    (w = b || (b = {})).information = "information", w.drawing = "drawing";
    let C = class extends c.Component {
        render() {
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(f.default, {}), this.getContent()]
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "state", {
                screen: b.information
            }), (0, n.default)(this, "switchToDrawing", (() => {
                this.setState({
                    screen: b.drawing
                })
            })), (0, n.default)(this, "getContent", (() => this.state.screen === b.information ? (0, i.jsx)(x, {
                onClick: this.switchToDrawing,
                children: (0, i.jsxs)(y, {
                    children: [(0, i.jsx)("div", {
                        style: {
                            height: 20
                        }
                    }), (0, i.jsx)(u.default, {}), this.props.gameValues.news.map((e => (0, i.jsx)(p.default, {
                        item: e
                    }, e.description))), (0, i.jsx)("div", {
                        style: {
                            height: 20
                        }
                    })]
                })
            }) : (0, i.jsx)(l.default, {})))
        }
    };
    C = (0, a.__decorate)([(0, s.inject)("gameValues"), s.observer], C);
    var k = C
})), o.register("71sEC", (function(e, r) {
    t(e.exports, "backgroundCanvasColor", (function() {
        return m
    })), t(e.exports, "defaultDrawingColor", (function() {
        return g
    })), t(e.exports, "secondaryDrawingColor", (function() {
        return v
    })), t(e.exports, "default", (function() {
        return b
    }));
    var n = o("divCp"),
        a = o("hxEiv"),
        i = o("fywoC"),
        s = o("f17Dp"),
        c = o("2FDaO"),
        d = o("kC0Tv"),
        l = o("eEMhJ"),
        u = o("bPX1S"),
        p = o("kuVn3");
    let f;
    const h = "gimkit-draw-canvas",
        m = () => (0, l.inImposterMode)() ? "#313639" : (0, l.inLavaMode)() ? "#263238" : (0, l.inPardyMode)() ? "#525380" : "#4caf50",
        g = () => (0, l.inImposterMode)() ? d.default.White : (0, l.inLavaMode)() || (0, l.inPardyMode)() ? "#ffeb3b" : "#424242",
        v = () => (0, l.inImposterMode)() ? "#ffee58" : (0, l.inThanosMode)() ? "#5e35b1" : (0, l.inLavaMode)() ? "#ff6f00" : (0, l.inPardyMode)() ? "#99f6a9" : "#e1f5fe",
        x = c.default.div(f || (f = (e => e)`
  height: 100%;
  width: 100%;
  background: ${0};
`), m);
    class y extends i.Component {
        componentDidMount() {
            this.onResize(), window.addEventListener("resize", this.onResize), document.addEventListener("touchmove", this.onTouch, {
                passive: !1
            })
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.onResize), document.removeEventListener("touchmove", this.onTouch)
        }
        render() {
            const {
                width: e,
                height: t
            } = this.state;
            return (0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)(x, {
                    id: h,
                    children: [(0, a.jsx)(s.default, {
                        canvasHeight: t,
                        canvasWidth: e,
                        brushRadius: this.state.drawState.brushSize,
                        brushColor: this.state.drawState.brushColor,
                        hideGrid: !0,
                        style: {
                            background: m
                        },
                        lazyRadius: 0,
                        catenaryColor: this.state.drawState.brushColor
                    }), (0, a.jsx)(u.default, {
                        show: this.state.showingControls,
                        drawState: this.state.drawState,
                        changeSize: this.changeBrushSize,
                        changeColor: this.changeBrushColor,
                        changeToEraser: this.changeToEraser
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "state", {
                width: 0,
                height: 0,
                drawState: {
                    brushColor: g(),
                    brushSize: p.default.pen
                },
                showingControls: !0
            }), (0, n.default)(this, "changeBrushColor", (e => {
                this.setState({
                    drawState: {
                        ...this.state.drawState,
                        brushColor: e,
                        brushSize: this.state.drawState.brushSize === p.default.eraser ? p.default.pen : this.state.drawState.brushSize
                    }
                })
            })), (0, n.default)(this, "changeBrushSize", (e => {
                this.setState({
                    drawState: {
                        ...this.state.drawState,
                        brushSize: e,
                        brushColor: g()
                    }
                })
            })), (0, n.default)(this, "changeToEraser", (() => this.setState({
                drawState: {
                    brushSize: p.default.eraser,
                    brushColor: m()
                }
            }))), (0, n.default)(this, "onTouch", (e => {
                e.preventDefault()
            })), (0, n.default)(this, "onResize", (() => {
                const e = document.getElementById(h).clientHeight,
                    t = document.getElementById(h).clientWidth;
                this.setState({
                    height: e,
                    width: t
                })
            }))
        }
    }
    var b = y
})), o.register("f17Dp", (function(e, n) {
    t(e.exports, "default", (function() {
        return x
    }));
    var a, i, s = o("fywoC"),
        c = o("djNMu"),
        d = o("9vJOM"),
        l = o("hJZyY"),
        u = o("6rvT3"),
        p = o("jat4Y"),
        f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        };

    function h(e, t) {
        return {
            x: e.x + (t.x - e.x) / 2,
            y: e.y + (t.y - e.y) / 2
        }
    }
    var m = {
            display: "block",
            position: "absolute"
        },
        g = [{
            name: "interface",
            zIndex: 15
        }, {
            name: "drawing",
            zIndex: 11
        }, {
            name: "temp",
            zIndex: 12
        }, {
            name: "grid",
            zIndex: 10
        }],
        v = r(c).oneOfType([r(c).number, r(c).string]),
        x = (i = a = function(e) {
            function t(r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, e.call(this, r));
                return o.componentWillUnmount = function() {
                    o.canvasObserver.unobserve(o.canvasContainer)
                }, o.drawImage = function() {
                    o.props.imgSrc && (o.image = new Image, o.image.crossOrigin = "anonymous", o.image.onload = function() {
                        return (0, p.default)({
                            ctx: o.ctx.grid,
                            img: o.image
                        })
                    }, o.image.src = o.props.imgSrc)
                }, o.undo = function() {
                    var e = o.lines.slice(0, -1);
                    o.clear(), o.simulateDrawingLines({
                        lines: e,
                        immediate: !0
                    }), o.triggerOnChange()
                }, o.getSaveData = function() {
                    return JSON.stringify({
                        lines: o.lines,
                        width: o.props.canvasWidth,
                        height: o.props.canvasHeight
                    })
                }, o.loadSaveData = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.props.immediateLoading;
                    if ("string" != typeof e) throw new Error("saveData needs to be of type string!");
                    var r = JSON.parse(e),
                        n = r.lines,
                        a = r.width,
                        i = r.height;
                    if (!n || "function" != typeof n.push) throw new Error("saveData.lines needs to be an array!");
                    if (o.clear(), a === o.props.canvasWidth && i === o.props.canvasHeight) o.simulateDrawingLines({
                        lines: n,
                        immediate: t
                    });
                    else {
                        var s = o.props.canvasWidth / a,
                            c = o.props.canvasHeight / i,
                            d = (s + c) / 2;
                        o.simulateDrawingLines({
                            lines: n.map((function(e) {
                                return f({}, e, {
                                    points: e.points.map((function(e) {
                                        return {
                                            x: e.x * s,
                                            y: e.y * c
                                        }
                                    })),
                                    brushRadius: e.brushRadius * d
                                })
                            })),
                            immediate: t
                        })
                    }
                }, o.simulateDrawingLines = function(e) {
                    var t = e.lines,
                        r = e.immediate,
                        n = 0,
                        a = r ? 0 : o.props.loadTimeOffset;
                    t.forEach((function(e) {
                        var t = e.points,
                            i = e.brushColor,
                            s = e.brushRadius;
                        if (r) return o.drawPoints({
                            points: t,
                            brushColor: i,
                            brushRadius: s
                        }), o.points = t, void o.saveLine({
                            brushColor: i,
                            brushRadius: s
                        });
                        for (var c = function(e) {
                                n += a, window.setTimeout((function() {
                                    o.drawPoints({
                                        points: t.slice(0, e + 1),
                                        brushColor: i,
                                        brushRadius: s
                                    })
                                }), n)
                            }, d = 1; d < t.length; d++) c(d);
                        n += a, window.setTimeout((function() {
                            o.points = t, o.saveLine({
                                brushColor: i,
                                brushRadius: s
                            })
                        }), n)
                    }))
                }, o.handleDrawStart = function(e) {
                    e.preventDefault(), o.isPressing = !0;
                    var t = o.getPointerPos(e),
                        r = t.x,
                        n = t.y;
                    e.touches && e.touches.length > 0 && o.lazy.update({
                        x: r,
                        y: n
                    }, {
                        both: !0
                    }), o.handlePointerMove(r, n)
                }, o.handleDrawMove = function(e) {
                    e.preventDefault();
                    var t = o.getPointerPos(e),
                        r = t.x,
                        n = t.y;
                    o.handlePointerMove(r, n)
                }, o.handleDrawEnd = function(e) {
                    e.preventDefault(), o.handleDrawMove(e), o.isDrawing = !1, o.isPressing = !1, o.saveLine()
                }, o.handleCanvasResize = function(e, t) {
                    var r = o.getSaveData(),
                        n = e,
                        a = Array.isArray(n),
                        i = 0;
                    for (n = a ? n : n[Symbol.iterator]();;) {
                        var s;
                        if (a) {
                            if (i >= n.length) break;
                            s = n[i++]
                        } else {
                            if ((i = n.next()).done) break;
                            s = i.value
                        }
                        var c = s.contentRect,
                            d = c.width,
                            l = c.height;
                        o.setCanvasSize(o.canvas.interface, d, l), o.setCanvasSize(o.canvas.drawing, d, l), o.setCanvasSize(o.canvas.temp, d, l), o.setCanvasSize(o.canvas.grid, d, l), o.drawGrid(o.ctx.grid), o.drawImage(), o.loop({
                            once: !0
                        })
                    }
                    o.loadSaveData(r, !0)
                }, o.setCanvasSize = function(e, t, r) {
                    e.width = t, e.height = r, e.style.width = t, e.style.height = r
                }, o.getPointerPos = function(e) {
                    var t = o.canvas.interface.getBoundingClientRect(),
                        r = e.clientX,
                        n = e.clientY;
                    return e.changedTouches && e.changedTouches.length > 0 && (r = e.changedTouches[0].clientX, n = e.changedTouches[0].clientY), {
                        x: r - t.left,
                        y: n - t.top
                    }
                }, o.handlePointerMove = function(e, t) {
                    if (!o.props.disabled) {
                        o.lazy.update({
                            x: e,
                            y: t
                        });
                        var r = !o.lazy.isEnabled();
                        (o.isPressing && !o.isDrawing || r && o.isPressing) && (o.isDrawing = !0, o.points.push(o.lazy.brush.toObject())), o.isDrawing && (o.points.push(o.lazy.brush.toObject()), o.drawPoints({
                            points: o.points,
                            brushColor: o.props.brushColor,
                            brushRadius: o.props.brushRadius
                        })), o.mouseHasMoved = !0
                    }
                }, o.drawPoints = function(e) {
                    var t = e.points,
                        r = e.brushColor,
                        n = e.brushRadius;
                    o.ctx.temp.lineJoin = "round", o.ctx.temp.lineCap = "round", o.ctx.temp.strokeStyle = r, o.ctx.temp.clearRect(0, 0, o.ctx.temp.canvas.width, o.ctx.temp.canvas.height), o.ctx.temp.lineWidth = 2 * n;
                    var a = t[0],
                        i = t[1];
                    o.ctx.temp.moveTo(i.x, i.y), o.ctx.temp.beginPath();
                    for (var s = 1, c = t.length; s < c; s++) {
                        var d = h(a, i);
                        o.ctx.temp.quadraticCurveTo(a.x, a.y, d.x, d.y), a = t[s], i = t[s + 1]
                    }
                    o.ctx.temp.lineTo(a.x, a.y), o.ctx.temp.stroke()
                }, o.saveLine = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.brushColor,
                        r = e.brushRadius;
                    if (!(o.points.length < 2)) {
                        o.lines.push({
                            points: [].concat(o.points),
                            brushColor: t || o.props.brushColor,
                            brushRadius: r || o.props.brushRadius
                        }), o.points.length = 0;
                        var n = o.canvas.temp.width,
                            a = o.canvas.temp.height;
                        o.ctx.drawing.drawImage(o.canvas.temp, 0, 0, n, a), o.ctx.temp.clearRect(0, 0, n, a), o.triggerOnChange()
                    }
                }, o.triggerOnChange = function() {
                    o.props.onChange && o.props.onChange(o)
                }, o.clear = function() {
                    o.lines = [], o.valuesChanged = !0, o.ctx.drawing.clearRect(0, 0, o.canvas.drawing.width, o.canvas.drawing.height), o.ctx.temp.clearRect(0, 0, o.canvas.temp.width, o.canvas.temp.height)
                }, o.loop = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.once,
                        r = void 0 !== t && t;
                    if (o.mouseHasMoved || o.valuesChanged) {
                        var n = o.lazy.getPointerCoordinates(),
                            a = o.lazy.getBrushCoordinates();
                        o.drawInterface(o.ctx.interface, n, a), o.mouseHasMoved = !1, o.valuesChanged = !1
                    }
                    r || window.requestAnimationFrame((function() {
                        o.loop()
                    }))
                }, o.drawGrid = function(e) {
                    if (!o.props.hideGrid) {
                        e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.beginPath(), e.setLineDash([5, 1]), e.setLineDash([]), e.strokeStyle = o.props.gridColor, e.lineWidth = .5;
                        for (var t = 0; t < e.canvas.width;) t += 25, e.moveTo(t, 0), e.lineTo(t, e.canvas.height);
                        e.stroke();
                        for (var r = 0; r < e.canvas.height;) r += 25, e.moveTo(0, r), e.lineTo(e.canvas.width, r);
                        e.stroke()
                    }
                }, o.drawInterface = function(e, t, r) {
                    o.props.hideInterface || (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.beginPath(), e.fillStyle = o.props.brushColor, e.arc(r.x, r.y, o.props.brushRadius, 0, 2 * Math.PI, !0), e.fill(), e.beginPath(), e.fillStyle = o.props.catenaryColor, e.arc(t.x, t.y, 4, 0, 2 * Math.PI, !0), e.fill(), o.lazy.isEnabled() && (e.beginPath(), e.lineWidth = 2, e.lineCap = "round", e.setLineDash([2, 4]), e.strokeStyle = o.props.catenaryColor, o.catenary.drawToCanvas(o.ctx.interface, r, t, o.chainLength), e.stroke()), e.beginPath(), e.fillStyle = o.props.catenaryColor, e.arc(r.x, r.y, 2, 0, 2 * Math.PI, !0), e.fill())
                }, o.canvas = {}, o.ctx = {}, o.catenary = new(0, l.Catenary), o.points = [], o.lines = [], o.mouseHasMoved = !0, o.valuesChanged = !0, o.isDrawing = !1, o.isPressing = !1, o
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
            }(t, e), t.prototype.componentDidMount = function() {
                var e = this;
                this.lazy = new(0, d.LazyBrush)({
                    radius: this.props.lazyRadius * window.devicePixelRatio,
                    enabled: !0,
                    initialPoint: {
                        x: window.innerWidth / 2,
                        y: window.innerHeight / 2
                    }
                }), this.chainLength = this.props.lazyRadius * window.devicePixelRatio, this.canvasObserver = new(0, u.default)((function(t, r) {
                    return e.handleCanvasResize(t, r)
                })), this.canvasObserver.observe(this.canvasContainer), this.drawImage(), this.loop(), window.setTimeout((function() {
                    var t = window.innerWidth / 2,
                        r = window.innerHeight / 2;
                    e.lazy.update({
                        x: t - e.chainLength / 4,
                        y: r
                    }, {
                        both: !0
                    }), e.lazy.update({
                        x: t + e.chainLength / 4,
                        y: r
                    }, {
                        both: !1
                    }), e.mouseHasMoved = !0, e.valuesChanged = !0, e.clear(), e.props.saveData && e.loadSaveData(e.props.saveData)
                }), 100)
            }, t.prototype.componentDidUpdate = function(e) {
                e.lazyRadius !== this.props.lazyRadius && (this.chainLength = this.props.lazyRadius * window.devicePixelRatio, this.lazy.setRadius(this.props.lazyRadius * window.devicePixelRatio)), e.saveData !== this.props.saveData && this.loadSaveData(this.props.saveData), JSON.stringify(e) !== JSON.stringify(this.props) && (this.valuesChanged = !0)
            }, t.prototype.render = function() {
                var e = this;
                return r(s).createElement("div", {
                    className: this.props.className,
                    style: f({
                        display: "block",
                        background: this.props.backgroundColor,
                        touchAction: "none",
                        width: this.props.canvasWidth,
                        height: this.props.canvasHeight
                    }, this.props.style),
                    ref: function(t) {
                        t && (e.canvasContainer = t)
                    }
                }, g.map((function(t) {
                    var o = t.name,
                        n = t.zIndex,
                        a = "interface" === o;
                    return r(s).createElement("canvas", {
                        key: o,
                        ref: function(t) {
                            t && (e.canvas[o] = t, e.ctx[o] = t.getContext("2d"))
                        },
                        style: f({}, m, {
                            zIndex: n
                        }),
                        onMouseDown: a ? e.handleDrawStart : void 0,
                        onMouseMove: a ? e.handleDrawMove : void 0,
                        onMouseUp: a ? e.handleDrawEnd : void 0,
                        onMouseOut: a ? e.handleDrawEnd : void 0,
                        onTouchStart: a ? e.handleDrawStart : void 0,
                        onTouchMove: a ? e.handleDrawMove : void 0,
                        onTouchEnd: a ? e.handleDrawEnd : void 0,
                        onTouchCancel: a ? e.handleDrawEnd : void 0
                    })
                })))
            }, t
        }(s.PureComponent), a.propTypes = {
            onChange: r(c).func,
            loadTimeOffset: r(c).number,
            lazyRadius: r(c).number,
            brushRadius: r(c).number,
            brushColor: r(c).string,
            catenaryColor: r(c).string,
            gridColor: r(c).string,
            backgroundColor: r(c).string,
            hideGrid: r(c).bool,
            canvasWidth: v,
            canvasHeight: v,
            disabled: r(c).bool,
            imgSrc: r(c).string,
            saveData: r(c).string,
            immediateLoading: r(c).bool,
            hideInterface: r(c).bool
        }, a.defaultProps = {
            onChange: null,
            loadTimeOffset: 5,
            lazyRadius: 12,
            brushRadius: 10,
            brushColor: "#444",
            catenaryColor: "#0a0302",
            gridColor: "rgba(150,150,150,0.17)",
            backgroundColor: "#FFF",
            hideGrid: !1,
            canvasWidth: 400,
            canvasHeight: 400,
            disabled: !1,
            imgSrc: "",
            saveData: "",
            immediateLoading: !1,
            hideInterface: !1
        }, i)
})), o.register("9vJOM", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.LazyPoint = e.exports.Point = e.exports.LazyBrush = void 0;
    var r = i(o("7PJM4")),
        n = i(o("8QrLF")),
        a = i(o("1iorg"));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    e.exports.LazyBrush = r.default, e.exports.Point = n.default, e.exports.LazyPoint = a.default
})), o.register("7PJM4", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var r, n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) {
                return r && e(t.prototype, r), o && e(t, o), t
            }
        }(),
        a = o("1iorg"),
        i = (r = a) && r.__esModule ? r : {
            default: r
        };

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var c = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = t.radius,
                o = void 0 === r ? 30 : r,
                n = t.enabled,
                a = void 0 === n || n,
                c = t.initialPoint,
                d = void 0 === c ? {
                    x: 0,
                    y: 0
                } : c;
            s(this, e), this.radius = o, this._isEnabled = a, this.pointer = new i.default(d.x, d.y), this.brush = new i.default(d.x, d.y), this.angle = 0, this.distance = 0, this._hasMoved = !1
        }
        return n(e, [{
            key: "enable",
            value: function() {
                this._isEnabled = !0
            }
        }, {
            key: "disable",
            value: function() {
                this._isEnabled = !1
            }
        }, {
            key: "isEnabled",
            value: function() {
                return this._isEnabled
            }
        }, {
            key: "setRadius",
            value: function(e) {
                this.radius = e
            }
        }, {
            key: "getRadius",
            value: function() {
                return this.radius
            }
        }, {
            key: "getBrushCoordinates",
            value: function() {
                return this.brush.toObject()
            }
        }, {
            key: "getPointerCoordinates",
            value: function() {
                return this.pointer.toObject()
            }
        }, {
            key: "getBrush",
            value: function() {
                return this.brush
            }
        }, {
            key: "getPointer",
            value: function() {
                return this.pointer
            }
        }, {
            key: "getAngle",
            value: function() {
                return this.angle
            }
        }, {
            key: "getDistance",
            value: function() {
                return this.distance
            }
        }, {
            key: "brushHasMoved",
            value: function() {
                return this._hasMoved
            }
        }, {
            key: "update",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.both,
                    o = void 0 !== r && r;
                return this._hasMoved = !1, !(this.pointer.equalsTo(e) && !o) && (this.pointer.update(e), o ? (this._hasMoved = !0, this.brush.update(e), !0) : (this._isEnabled ? (this.distance = this.pointer.getDistanceTo(this.brush), this.angle = this.pointer.getAngleTo(this.brush), this.distance > this.radius && (this.brush.moveByAngle(this.angle, this.distance - this.radius), this._hasMoved = !0)) : (this.distance = 0, this.angle = 0, this.brush.update(e), this._hasMoved = !0), !0))
            }
        }]), e
    }();
    e.exports.default = c
})), o.register("1iorg", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var r, n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) {
                return r && e(t.prototype, r), o && e(t, o), t
            }
        }(),
        a = o("8QrLF"),
        i = (r = a) && r.__esModule ? r : {
            default: r
        };

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var d = function(e) {
        function t() {
            return s(this, t), c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
        }(t, e), n(t, [{
            key: "update",
            value: function(e) {
                this.x = e.x, this.y = e.y
            }
        }, {
            key: "moveByAngle",
            value: function(e, t) {
                var r = e + Math.PI / 2;
                this.x = this.x + Math.sin(r) * t, this.y = this.y - Math.cos(r) * t
            }
        }, {
            key: "equalsTo",
            value: function(e) {
                return this.x === e.x && this.y === e.y
            }
        }, {
            key: "getDifferenceTo",
            value: function(e) {
                return new i.default(this.x - e.x, this.y - e.y)
            }
        }, {
            key: "getDistanceTo",
            value: function(e) {
                var t = this.getDifferenceTo(e);
                return Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2))
            }
        }, {
            key: "getAngleTo",
            value: function(e) {
                var t = this.getDifferenceTo(e);
                return Math.atan2(t.y, t.x)
            }
        }, {
            key: "toObject",
            value: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            }
        }]), t
    }(i.default);
    e.exports.default = d
})), o.register("8QrLF", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    e.exports.default = function e(t, r) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.x = t, this.y = r
    }
})), o.register("hJZyY", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.Point = e.exports.Catenary = void 0;
    var r = a(o("cg56b")),
        n = a(o("inNi5"));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    e.exports.Catenary = r.default, e.exports.Point = n.default
})), o.register("cg56b", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var r, n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) {
                return r && e(t.prototype, r), o && e(t, o), t
            }
        }(),
        a = o("inNi5"),
        i = (r = a) && r.__esModule ? r : {
            default: r
        };

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var c = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = t.segments,
                o = void 0 === r ? 50 : r,
                n = t.iterationLimit,
                a = void 0 === n ? 100 : n;
            s(this, e), this.p1 = new i.default, this.p2 = new i.default, this.segments = o, this.iterationLimit = a
        }
        return n(e, [{
            key: "drawToCanvas",
            value: function(e, t, r, o) {
                this.p1.update(t), this.p2.update(r);
                var n = this.p1.x > this.p2.x,
                    a = n ? this.p2 : this.p1,
                    i = n ? this.p1 : this.p2,
                    s = [],
                    c = !0;
                if (a.getDistanceTo(i) < o)
                    if (i.x - a.x > .01) {
                        var d = i.x - a.x,
                            l = i.y - a.y,
                            u = -this.getCatenaryParameter(d, l, o, this.iterationLimit),
                            p = .5 * (u * Math.log((o + l) / (o - l)) - d),
                            f = u * Math.cosh(p / u),
                            h = a.x - p,
                            m = a.y - f;
                        s = this.getCurve(u, a, i, h, m, this.segments), c = !1
                    } else {
                        var g = .5 * (a.x + i.x),
                            v = .5 * (a.y + i.y + o);
                        s = [
                            [a.x, a.y],
                            [g, v],
                            [i.x, i.y]
                        ]
                    }
                else s = [
                    [a.x, a.y],
                    [i.x, i.y]
                ];
                return c ? this.drawLine(s, e) : this.drawCurve(s, e), s
            }
        }, {
            key: "getCatenaryParameter",
            value: function(e, t, r, o) {
                for (var n = Math.sqrt(r * r - t * t) / e, a = Math.acosh(n) + 1, i = -1, s = 0; Math.abs(a - i) > 1e-6 && s < o;) i = a, a -= (Math.sinh(a) - n * a) / (Math.cosh(a) - n), s++;
                return e / (2 * a)
            }
        }, {
            key: "getCurve",
            value: function(e, t, r, o, n, a) {
                for (var i = [t.x, e * Math.cosh((t.x - o) / e) + n], s = r.x - t.x, c = a - 1, d = 0; d < c; d++) {
                    var l = t.x + s * (d + .5) / c,
                        u = e * Math.cosh((l - o) / e) + n;
                    i.push(l, u)
                }
                return i.push(r.x, e * Math.cosh((r.x - o) / e) + n), i
            }
        }, {
            key: "drawLine",
            value: function(e, t) {
                t.moveTo(e[0][0], e[0][1]), t.lineTo(e[1][0], e[1][1])
            }
        }, {
            key: "drawCurve",
            value: function(e, t) {
                var r = .5 * e.length - 1,
                    o = e[2],
                    n = e[3],
                    a = [];
                t.moveTo(e[0], e[1]);
                for (var i = 2; i < r; i++) {
                    var s = e[2 * i],
                        c = e[2 * i + 1],
                        d = .5 * (s + o),
                        l = .5 * (c + n);
                    a.push([o, n, d, l]), t.quadraticCurveTo(o, n, d, l), o = s, n = c
                }
                return r = e.length, t.quadraticCurveTo(e[r - 4], e[r - 3], e[r - 2], e[r - 1]), a
            }
        }]), e
    }();
    e.exports.default = c
})), o.register("inNi5", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, r, o) {
            return r && e(t.prototype, r), o && e(t, o), t
        }
    }();
    var o = function() {
        function e(t, r) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.x = t, this.y = r
        }
        return r(e, [{
            key: "update",
            value: function(e) {
                this.x = e.x, this.y = e.y
            }
        }, {
            key: "getDifferenceTo",
            value: function(t) {
                return new e(this.x - t.x, this.y - t.y)
            }
        }, {
            key: "getDistanceTo",
            value: function(e) {
                var t = this.getDifferenceTo(e);
                return Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2))
            }
        }]), e
    }();
    e.exports.default = o
})), o.register("jat4Y", (function(e, r) {
    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.ctx,
            r = e.img,
            o = e.x,
            n = e.y,
            a = e.w,
            i = e.h,
            s = e.offsetX,
            c = e.offsetY;
        "number" != typeof o && (o = 0), "number" != typeof n && (n = 0), "number" != typeof a && (a = t.canvas.width), "number" != typeof i && (i = t.canvas.height), "number" != typeof s && (s = .5), "number" != typeof c && (c = .5), s < 0 && (s = 0), c < 0 && (c = 0), s > 1 && (s = 1), c > 1 && (c = 1);
        var d, l, u, p, f = r.width,
            h = r.height,
            m = Math.min(a / f, i / h),
            g = f * m,
            v = h * m,
            x = 1;
        g < a && (x = a / g), Math.abs(x - 1) < 1e-14 && v < i && (x = i / v), (d = (f - (u = f / ((g *= x) / a))) * s) < 0 && (d = 0), (l = (h - (p = h / ((v *= x) / i))) * c) < 0 && (l = 0), u > f && (u = f), p > h && (p = h), t.drawImage(r, d, l, u, p, o, n, a, i)
    }
    t(e.exports, "default", (function() {
        return o
    }))
})), o.register("bPX1S", (function(e, r) {
    t(e.exports, "default", (function() {
        return w
    }));
    var n = o("divCp"),
        a = o("hxEiv"),
        i = o("5933e"),
        s = o("kC0Tv"),
        c = o("fywoC"),
        d = o("2FDaO"),
        l = o("71sEC"),
        u = o("kuVn3");
    let p, f, h, m = e => e;
    const g = d.default.div(p || (p = m`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
`)),
        v = d.default.div(f || (f = m`
  margin-bottom: 15px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${0};
  border-width: 2px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${0};
`), s.default.DisabledGray, s.default.White),
        x = d.default.div(h || (h = m`
  cursor: pointer;
  font-size: 35px;
  background: ${0};
  color: ${0};
  padding: 5px;
  border-radius: 6px;
`), (e => e.enabled ? "#E0E0E0" : "transparent"), (e => e.customColor ? e.customColor : s.default.Black)),
        y = {
            borderColor: s.default.Black,
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: "50%"
        };
    class b extends c.Component {
        render() {
            if (!this.props.show) return null;
            const {
                drawState: e
            } = this.props;
            return (0, a.jsx)(g, {
                children: (0, a.jsxs)(v, {
                    children: [(0, a.jsx)(x, {
                        customColor: l.defaultDrawingColor,
                        enabled: e.brushColor === (0, l.defaultDrawingColor)(),
                        onClick: this.changeToDefaultColor,
                        children: (0, a.jsx)(i.default, {
                            name: "fas fa-circle",
                            style: y
                        })
                    }), (0, a.jsx)(x, {
                        onClick: this.changeToSecondaryColor,
                        enabled: e.brushColor === (0, l.secondaryDrawingColor)(),
                        customColor: (0, l.secondaryDrawingColor)(),
                        children: (0, a.jsx)(i.default, {
                            name: "fas fa-circle",
                            style: y
                        })
                    }), (0, a.jsx)("div", {
                        style: {
                            height: 35,
                            width: 5,
                            background: s.default.DisabledGray,
                            marginLeft: 10,
                            marginRight: 10
                        }
                    }), (0, a.jsx)(x, {
                        onClick: this.changeToPen,
                        enabled: e.brushColor !== (0, l.backgroundCanvasColor)() && e.brushSize === u.default.pen,
                        children: (0, a.jsx)(i.default, {
                            name: "fas fa-pen"
                        })
                    }), (0, a.jsx)(x, {
                        onClick: this.changeToMarker,
                        enabled: e.brushColor !== (0, l.backgroundCanvasColor)() && e.brushSize === u.default.marker,
                        children: (0, a.jsx)(i.default, {
                            name: "fas fa-marker"
                        })
                    }), (0, a.jsx)(x, {
                        onClick: this.props.changeToEraser,
                        enabled: e.brushColor === (0, l.backgroundCanvasColor)(),
                        children: (0, a.jsx)(i.default, {
                            name: "fas fa-eraser"
                        })
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "changeToDefaultColor", (() => this.props.changeColor((0, l.defaultDrawingColor)()))), (0, n.default)(this, "changeToSecondaryColor", (() => this.props.changeColor((0, l.secondaryDrawingColor)()))), (0, n.default)(this, "changeToPen", (() => this.props.changeSize(u.default.pen))), (0, n.default)(this, "changeToMarker", (() => this.props.changeSize(u.default.marker)))
        }
    }
    var w = b
})), o.register("kuVn3", (function(e, r) {
    t(e.exports, "default", (function() {
        return o
    }));
    var o = {
        pen: 8,
        marker: 18,
        eraser: 18
    }
})), o.register("jSwWq", (function(e, r) {
    t(e.exports, "default", (function() {
        return T
    }));
    var n = o("hxEiv"),
        a = o("5933e"),
        i = o("b9PLE"),
        s = o("kC0Tv"),
        c = o("hbfMQ"),
        d = o("6edaj");
    o("fywoC");
    var l = o("2FDaO"),
        u = o("71sEC"),
        p = o("eEMhJ");
    let f, h, m, g, v, x, y = e => e;
    const b = l.default.div(f || (f = y`
  padding: 20px;
  box-sizing: border-box;
  box-shadow: ${0};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  pointer-events: auto;
  cursor: pointer;
  background: ${0};
  color: ${0};
  font-weight: 900;
`), c.default.basic, (() => (0, d.darken)(.3, (0, u.backgroundCanvasColor)())), s.default.White),
        w = l.default.div(h || (h = y`
  font-size: 37px;
  margin-bottom: 4px;
`)),
        C = l.default.div(m || (m = y`
  box-shadow: ${0};
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 5px;
  box-sizing: border-box;
  border-style: solid;
  border-width: 2px;
`), c.default.basic),
        k = l.default.div(g || (g = y`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 5px;
`)),
        P = l.default.div(v || (v = y`
  font-size: 20px;
`)),
        E = l.default.div(x || (x = y`
  color: rgba(255, 255, 255, 0.6);
  font-size: 17px;
  margin-top: 2px;
`)),
        S = e => (0, n.jsxs)(C, {
            children: [(0, n.jsx)("div", {
                style: {
                    fontSize: 31,
                    flexShrink: 0
                },
                children: (0, n.jsx)(a.default, {
                    name: e.icon
                })
            }), (0, n.jsx)("div", {
                style: {
                    marginLeft: 15
                },
                children: (0, n.jsx)(i.default, {
                    text: e.message
                })
            })]
        });
    var T = () => (0, n.jsxs)(b, {
        children: [(0, n.jsx)(w, {
            children: (0, n.jsx)(i.default, {
                text: (0, p.inImposterMode)() ? "Ready for liftoff?" : "Get ready..."
            })
        }), (0, p.inLavaMode)() ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(S, {
                icon: "fas fa-volcano",
                message: "The lava is rising..."
            }), (0, n.jsx)(S, {
                icon: "fas fa-building",
                message: "Work together to keep your building above the lava"
            }), (0, n.jsx)(S, {
                icon: "fas fa-shopping-bag",
                message: "Purchase builds in the shop"
            }), (0, n.jsx)(S, {
                icon: "fas fa-star",
                message: "Survive as long as you can"
            })]
        }) : (0, p.inImposterMode)() ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(S, {
                icon: "fa fa-user-astronaut",
                message: "Crewmates: run investigations and collect evidence to vote the impostors off the ship!"
            }), (0, n.jsx)(S, {
                icon: "fa fa-user-secret",
                message: "Impostors: sabotage crewmate investigations and blend in. Try not to get voted off!"
            }), (0, n.jsx)(S, {
                icon: "fa fa-info-circle",
                message: "We'll reveal your role once we liftoff."
            })]
        }) : (0, p.inDrawMode)() ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(S, {
                icon: "fa fa-question-circle",
                message: "For each round, guess the term being drawn!"
            }), (0, n.jsx)(S, {
                icon: "fa fa-chart-line",
                message: "Gain points by guessing correctly."
            }), (0, n.jsx)(S, {
                icon: "fa fa-trophy",
                message: "Have the most points by the end to be declared the winner!"
            })]
        }) : (0, p.inPardyMode)() ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(S, {
                icon: "far fa-money-bill-alt",
                message: "For each round, answer the question correctly to earn cash!"
            }), (0, n.jsx)(S, {
                icon: "fas fa-bolt",
                message: "Pick a power that fits your play-style to come out on top."
            }), (0, n.jsx)(S, {
                icon: "fas fa-sack-dollar",
                message: "Make your final bet in The Finale!"
            })]
        }) : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(S, {
                icon: "far fa-money-bill-alt",
                message: "Answer questions to earn cash"
            }), (0, n.jsx)(S, {
                icon: "fas fa-shopping-cart",
                message: "Purchase upgrades and powerups with your cash"
            }), (0, n.jsx)(S, {
                icon: "fas fa-level-up-alt",
                message: "Earn cash faster!"
            })]
        }), (0, n.jsxs)(k, {
            children: [(0, n.jsx)(P, {
                children: (0, n.jsx)(i.default, {
                    text: "You can draw while you're waiting!"
                })
            }), (0, n.jsx)(E, {
                children: (0, n.jsx)(i.default, {
                    text: "Click/tap here to draw!"
                })
            })]
        })]
    })
})), o.register("fVPxP", (function(e, r) {
    t(e.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv"),
        a = o("c6knh"),
        i = o("kC0Tv"),
        s = o("l360q"),
        c = o("hbfMQ");
    o("fywoC");
    var d = o("2FDaO"),
        l = o("6YArk");
    let u, p, f, h = e => e;
    var m = e => {
        const {
            tag: t,
            header: r,
            image: o,
            description: i
        } = e.item;
        let s = !1;
        if ((t || r || o || i) && (s = !0), !s) return null;
        return (0, n.jsxs)(g, {
            onClick: e => {
                e.stopPropagation()
            },
            children: [t && (0, n.jsx)(a.default, {
                color: "secondary",
                style: {
                    marginBottom: 10,
                    fontWeight: 900
                },
                label: t
            }), r && (0, n.jsx)(v, {
                children: r
            }), o && (0, n.jsx)("img", {
                src: o,
                style: {
                    maxWidth: "100%",
                    maxHeight: 170,
                    borderRadius: 5,
                    boxShadow: c.default.basic,
                    marginBottom: i ? 10 : 0,
                    marginTop: r || t ? 10 : 0
                }
            }), i && (0, n.jsx)(x, {
                dangerouslySetInnerHTML: {
                    __html: i
                }
            })]
        })
    };
    const g = d.default.div(u || (u = h`
  width: 100%;
  box-sizing: border-box;
  max-width: ${0}px;
  padding: 20px;
  box-shadow: ${0};
  margin-top: 17px;
  border-radius: 7px;
  background: ${0};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${0};
`), (() => l.ITEM_MAX_WIDTH), c.default.basic, i.default.White, s.default.mainFontName),
        v = d.default.div(p || (p = h`
  font-size: 28px;
  font-weight: bold;
`)),
        x = d.default.div(f || (f = h`
  font-weight: normal;
  font-family: ${0};
  font-size: 16px;
  margin-top: 10px;
  text-align: left;
`), s.default.name)
})), o.register("c6knh", (function(e, r) {
    t(e.exports, "default", (function() {
        return g
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("1zy3n"),
        d = o("cY4lv"),
        l = o("jhlnr"),
        u = o("eV2r6"),
        p = o("kYx4h"),
        f = o("7s22H");

    function h(e) {
        return "Backspace" === e.key || "Delete" === e.key
    }
    var m = i.forwardRef((function(e, t) {
            var r = e.avatar,
                o = e.classes,
                d = e.className,
                l = e.clickable,
                m = e.color,
                g = void 0 === m ? "default" : m,
                v = e.component,
                x = e.deleteIcon,
                y = e.disabled,
                b = void 0 !== y && y,
                w = e.icon,
                C = e.label,
                k = e.onClick,
                P = e.onDelete,
                E = e.onKeyDown,
                S = e.onKeyUp,
                T = e.size,
                B = void 0 === T ? "medium" : T,
                j = e.variant,
                M = void 0 === j ? "default" : j,
                _ = (0, a.default)(e, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]),
                R = i.useRef(null),
                O = (0, u.default)(R, t),
                I = function(e) {
                    e.stopPropagation(), P && P(e)
                },
                D = !(!1 === l || !k) || l,
                A = "small" === B,
                N = v || (D ? f.default : "div"),
                L = N === f.default ? {
                    component: "div"
                } : {},
                z = null;
            if (P) {
                var F = (0, s.default)("default" !== g && ("default" === M ? o["deleteIconColor".concat((0, p.default)(g))] : o["deleteIconOutlinedColor".concat((0, p.default)(g))]), A && o.deleteIconSmall);
                z = x && i.isValidElement(x) ? i.cloneElement(x, {
                    className: (0, s.default)(x.props.className, o.deleteIcon, F),
                    onClick: I
                }) : i.createElement(c.default, {
                    className: (0, s.default)(o.deleteIcon, F),
                    onClick: I
                })
            }
            var H = null;
            r && i.isValidElement(r) && (H = i.cloneElement(r, {
                className: (0, s.default)(o.avatar, r.props.className, A && o.avatarSmall, "default" !== g && o["avatarColor".concat((0, p.default)(g))])
            }));
            var W = null;
            return w && i.isValidElement(w) && (W = i.cloneElement(w, {
                className: (0, s.default)(o.icon, w.props.className, A && o.iconSmall, "default" !== g && o["iconColor".concat((0, p.default)(g))])
            })), i.createElement(N, (0, n.default)({
                role: D || P ? "button" : void 0,
                className: (0, s.default)(o.root, d, "default" !== g && [o["color".concat((0, p.default)(g))], D && o["clickableColor".concat((0, p.default)(g))], P && o["deletableColor".concat((0, p.default)(g))]], "default" !== M && [o.outlined, {
                    primary: o.outlinedPrimary,
                    secondary: o.outlinedSecondary
                } [g]], b && o.disabled, A && o.sizeSmall, D && o.clickable, P && o.deletable),
                "aria-disabled": !!b || void 0,
                tabIndex: D || P ? 0 : void 0,
                onClick: k,
                onKeyDown: function(e) {
                    e.currentTarget === e.target && h(e) && e.preventDefault(), E && E(e)
                },
                onKeyUp: function(e) {
                    e.currentTarget === e.target && (P && h(e) ? P(e) : "Escape" === e.key && R.current && R.current.blur()), S && S(e)
                },
                ref: O
            }, L, _), H || W, i.createElement("span", {
                className: (0, s.default)(o.label, A && o.labelSmall)
            }, C), z)
        })),
        g = (0, d.default)((function(e) {
            var t = "light" === e.palette.type ? e.palette.grey[300] : e.palette.grey[700],
                r = (0, l.fade)(e.palette.text.primary, .26);
            return {
                root: {
                    fontFamily: e.typography.fontFamily,
                    fontSize: e.typography.pxToRem(13),
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 32,
                    color: e.palette.getContrastText(t),
                    backgroundColor: t,
                    borderRadius: 16,
                    whiteSpace: "nowrap",
                    transition: e.transitions.create(["background-color", "box-shadow"]),
                    cursor: "default",
                    outline: 0,
                    textDecoration: "none",
                    border: "none",
                    padding: 0,
                    verticalAlign: "middle",
                    boxSizing: "border-box",
                    "&$disabled": {
                        opacity: .5,
                        pointerEvents: "none"
                    },
                    "& $avatar": {
                        marginLeft: 5,
                        marginRight: -6,
                        width: 24,
                        height: 24,
                        color: "light" === e.palette.type ? e.palette.grey[700] : e.palette.grey[300],
                        fontSize: e.typography.pxToRem(12)
                    },
                    "& $avatarColorPrimary": {
                        color: e.palette.primary.contrastText,
                        backgroundColor: e.palette.primary.dark
                    },
                    "& $avatarColorSecondary": {
                        color: e.palette.secondary.contrastText,
                        backgroundColor: e.palette.secondary.dark
                    },
                    "& $avatarSmall": {
                        marginLeft: 4,
                        marginRight: -4,
                        width: 18,
                        height: 18,
                        fontSize: e.typography.pxToRem(10)
                    }
                },
                sizeSmall: {
                    height: 24
                },
                colorPrimary: {
                    backgroundColor: e.palette.primary.main,
                    color: e.palette.primary.contrastText
                },
                colorSecondary: {
                    backgroundColor: e.palette.secondary.main,
                    color: e.palette.secondary.contrastText
                },
                disabled: {},
                clickable: {
                    userSelect: "none",
                    WebkitTapHighlightColor: "transparent",
                    cursor: "pointer",
                    "&:hover, &:focus": {
                        backgroundColor: (0, l.emphasize)(t, .08)
                    },
                    "&:active": {
                        boxShadow: e.shadows[1]
                    }
                },
                clickableColorPrimary: {
                    "&:hover, &:focus": {
                        backgroundColor: (0, l.emphasize)(e.palette.primary.main, .08)
                    }
                },
                clickableColorSecondary: {
                    "&:hover, &:focus": {
                        backgroundColor: (0, l.emphasize)(e.palette.secondary.main, .08)
                    }
                },
                deletable: {
                    "&:focus": {
                        backgroundColor: (0, l.emphasize)(t, .08)
                    }
                },
                deletableColorPrimary: {
                    "&:focus": {
                        backgroundColor: (0, l.emphasize)(e.palette.primary.main, .2)
                    }
                },
                deletableColorSecondary: {
                    "&:focus": {
                        backgroundColor: (0, l.emphasize)(e.palette.secondary.main, .2)
                    }
                },
                outlined: {
                    backgroundColor: "transparent",
                    border: "1px solid ".concat("light" === e.palette.type ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
                    "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
                        backgroundColor: (0, l.fade)(e.palette.text.primary, e.palette.action.hoverOpacity)
                    },
                    "& $avatar": {
                        marginLeft: 4
                    },
                    "& $avatarSmall": {
                        marginLeft: 2
                    },
                    "& $icon": {
                        marginLeft: 4
                    },
                    "& $iconSmall": {
                        marginLeft: 2
                    },
                    "& $deleteIcon": {
                        marginRight: 5
                    },
                    "& $deleteIconSmall": {
                        marginRight: 3
                    }
                },
                outlinedPrimary: {
                    color: e.palette.primary.main,
                    border: "1px solid ".concat(e.palette.primary.main),
                    "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
                        backgroundColor: (0, l.fade)(e.palette.primary.main, e.palette.action.hoverOpacity)
                    }
                },
                outlinedSecondary: {
                    color: e.palette.secondary.main,
                    border: "1px solid ".concat(e.palette.secondary.main),
                    "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
                        backgroundColor: (0, l.fade)(e.palette.secondary.main, e.palette.action.hoverOpacity)
                    }
                },
                avatar: {},
                avatarSmall: {},
                avatarColorPrimary: {},
                avatarColorSecondary: {},
                icon: {
                    color: "light" === e.palette.type ? e.palette.grey[700] : e.palette.grey[300],
                    marginLeft: 5,
                    marginRight: -6
                },
                iconSmall: {
                    width: 18,
                    height: 18,
                    marginLeft: 4,
                    marginRight: -4
                },
                iconColorPrimary: {
                    color: "inherit"
                },
                iconColorSecondary: {
                    color: "inherit"
                },
                label: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    paddingLeft: 12,
                    paddingRight: 12,
                    whiteSpace: "nowrap"
                },
                labelSmall: {
                    paddingLeft: 8,
                    paddingRight: 8
                },
                deleteIcon: {
                    WebkitTapHighlightColor: "transparent",
                    color: r,
                    height: 22,
                    width: 22,
                    cursor: "pointer",
                    margin: "0 5px 0 -6px",
                    "&:hover": {
                        color: (0, l.fade)(r, .4)
                    }
                },
                deleteIconSmall: {
                    height: 16,
                    width: 16,
                    marginRight: 4,
                    marginLeft: -4
                },
                deleteIconColorPrimary: {
                    color: (0, l.fade)(e.palette.primary.contrastText, .7),
                    "&:hover, &:active": {
                        color: e.palette.primary.contrastText
                    }
                },
                deleteIconColorSecondary: {
                    color: (0, l.fade)(e.palette.secondary.contrastText, .7),
                    "&:hover, &:active": {
                        color: e.palette.secondary.contrastText
                    }
                },
                deleteIconOutlinedColorPrimary: {
                    color: (0, l.fade)(e.palette.primary.main, .7),
                    "&:hover, &:active": {
                        color: e.palette.primary.main
                    }
                },
                deleteIconOutlinedColorSecondary: {
                    color: (0, l.fade)(e.palette.secondary.main, .7),
                    "&:hover, &:active": {
                        color: e.palette.secondary.main
                    }
                }
            }
        }), {
            name: "MuiChip"
        })(m)
})), o.register("1zy3n", (function(e, r) {
    t(e.exports, "default", (function() {
        return a
    }));
    var n = o("fywoC"),
        a = (0, o("hoImK").default)(n.createElement("path", {
            d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
        }), "Cancel")
})), o.register("hoImK", (function(e, n) {
    t(e.exports, "default", (function() {
        return c
    }));
    var a = o("kqQIs"),
        i = o("fywoC"),
        s = o("fpXJx");

    function c(e, t) {
        var o = function(t, o) {
            return r(i).createElement(s.default, (0, a.default)({
                ref: o
            }, t), e)
        };
        return o.muiName = s.default.muiName, r(i).memo(r(i).forwardRef(o))
    }
})), o.register("2mgHs", (function(e, r) {
    t(e.exports, "default", (function() {
        return f
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("i6SGg"),
        s = o("eEMhJ"),
        c = o("4MuSt"),
        d = o("lpEVe"),
        l = o("fywoC"),
        u = o("j2XHK");
    let p = class extends l.Component {
        componentDidMount() {
            (0, c.when)((() => this.props.gameValues.gameStatus === u.GameStatus.gameplay || this.props.gameValues.gameStatus === u.GameStatus.teams || this.props.gameValues.gameStatus === u.GameStatus.results), (() => {
                this.props.gameValues.gameStatus !== u.GameStatus.teams ? this.props.gameValues.gameStatus !== u.GameStatus.results ? (0, s.startGame)() : (0, s.changeRoute)(i.default.gameOver) : (0, s.changeRoute)(i.default.team)
            }), {})
        }
        render() {
            return null
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "state", {
                hasCalledStart: !1
            })
        }
    };
    p = (0, a.__decorate)([(0, d.inject)("gameValues", "gameOptions"), d.observer], p);
    var f = p
})), o.register("5FGuG", (function(e, r) {
    t(e.exports, "default", (function() {
        return E
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("kC0Tv"),
        c = o("bHPgO"),
        d = o("7u1Wh"),
        l = o("kCitn"),
        u = o("cgMKQ"),
        p = o("7uCCN"),
        f = o("i6SGg"),
        h = o("6sear"),
        m = o("eEMhJ"),
        g = o("lpEVe"),
        v = o("fywoC"),
        x = o("jBnVG"),
        y = o("azqzu"),
        b = o("kCjnm"),
        w = o("4AKYb"),
        C = o("aQX7f");
    o("jlxb2");
    var k = o("1rlgk");
    let P = class extends v.Component {
        componentDidMount() {
            (0, m.blockShopping)() && (0, m.changeRoute)(f.default.questions)
        }
        render() {
            return (0, i.jsx)(c.Container, {
                customBackground: s.default.White,
                children: this.getContent()
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "changeShopTab", (e => {
                h.click2.play(), this.props.navigation.currentShopTab = e
            })), (0, n.default)(this, "getContent", (() => {
                return (0, m.inQrScanMode)() ? (0, i.jsx)(b.default, {}) : (0, m.inImposterMode)() ? (0, i.jsx)(C.default, {}) : (0, i.jsxs)(i.Fragment, {
                    children: [(e = this.props.navigation.currentShopTab, e === x.ShopTab.upgrades ? (0, i.jsx)(p.default, {}) : e === x.ShopTab.powerups ? (0, i.jsx)(l.default, {}) : e === x.ShopTab.defendingHomebase ? (0, i.jsx)(y.default, {}) : e === x.ShopTab.lava ? (0, i.jsx)(w.default, {}) : e === x.ShopTab.powerupsNonMusic ? (0, i.jsx)(l.default, {
                        hidePowerup: e => !(!e.category || !e.category.includes(k.PowerupCategory.specialSound))
                    }) : e === x.ShopTab.powerupsMusic ? (0, i.jsx)(l.default, {
                        hidePowerup: e => !e.category || !e.category.includes(k.PowerupCategory.specialSound)
                    }) : (0, i.jsx)(u.default, {})), (0, i.jsx)(d.default, {
                        changeShopTab: this.changeShopTab,
                        value: this.props.navigation.currentShopTab
                    })]
                });
                var e
            }))
        }
    };
    P = (0, a.__decorate)([(0, g.inject)("navigation"), g.observer], P);
    var E = P
})), o.register("7u1Wh", (function(e, r) {
    t(e.exports, "default", (function() {
        return k
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("dOp1i"),
        c = o("FRS4I"),
        d = o("9y6iX"),
        l = o("3Kwbv"),
        u = o("7grRY"),
        p = o("ihwEg"),
        f = o("3LYbX"),
        h = o("dDXs8"),
        m = o("b9PLE"),
        g = o("eEMhJ"),
        v = o("lpEVe"),
        x = o("fywoC"),
        y = o("jBnVG");
    let b;
    const w = (0, o("2FDaO").default)(s.default)(b || (b = (e => e)`
  height: 68px !important;
  border-top-color: rgba(0, 0, 0, 0.6);
  border-top-style: solid;
  border-top-width: 2px;
`));
    let C = class extends x.Component {
        render() {
            return (0, i.jsxs)(w, {
                value: this.props.value,
                onChange: this.handleTabChange,
                style: {
                    zIndex: 0
                },
                showLabels: !0,
                children: [(0, g.inLavaMode)() && (0, i.jsx)(c.default, {
                    label: (0, i.jsx)(m.default, {
                        text: "Build"
                    }),
                    icon: (0, i.jsx)(d.default, {}),
                    value: y.ShopTab.lava
                }), (0, g.inZombiesVsHumansMode)() && (0, i.jsx)(c.default, {
                    label: (0, i.jsx)(m.default, {
                        text: "Home"
                    }),
                    icon: (0, i.jsx)(u.default, {}),
                    value: y.ShopTab.defendingHomebase
                }), (0, i.jsx)(c.default, {
                    label: (0, i.jsx)(m.default, {
                        text: "Upgrades"
                    }),
                    icon: (0, i.jsx)(h.default, {}),
                    value: y.ShopTab.upgrades
                }), this.canShowPowerups() && (0, i.jsx)(c.default, {
                    label: (0, i.jsx)(m.default, {
                        text: (0, g.inThanosMode)() ? "Items" : "Powerups"
                    }),
                    icon: (0, i.jsx)(f.default, {}),
                    value: y.ShopTab.powerups
                }), (0, g.inComebackMode)() && (0, i.jsx)(c.default, {
                    label: (0, i.jsx)(m.default, {
                        text: "Powerups"
                    }),
                    icon: (0, i.jsx)(f.default, {}),
                    value: y.ShopTab.powerupsNonMusic
                }), this.props.gameOptions.music && (0, g.inComebackMode)() && (0, i.jsx)(c.default, {
                    label: (0, i.jsx)(m.default, {
                        text: "Music"
                    }),
                    icon: (0, i.jsx)(p.default, {}),
                    value: y.ShopTab.powerupsMusic
                }), this.canShowThemes() && (0, i.jsx)(c.default, {
                    label: (0, i.jsx)(m.default, {
                        text: "Themes"
                    }),
                    icon: (0, i.jsx)(l.default, {}),
                    value: y.ShopTab.themes
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "canShowPowerups", (() => this.props.gameOptions.powerups && !(0, g.inComebackMode)())), (0, n.default)(this, "canShowThemes", (() => this.props.gameOptions.themes)), (0, n.default)(this, "handleTabChange", ((e, t) => {
                this.props.changeShopTab(t)
            }))
        }
    };
    C = (0, a.__decorate)([(0, v.inject)("gameOptions"), v.observer], C);
    var k = C
})), o.register("dOp1i", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("gA1Br"), o("djNMu");
    var s = o("aWdbz"),
        c = o("cY4lv"),
        d = i.forwardRef((function(e, t) {
            var r = e.children,
                o = e.classes,
                c = e.className,
                d = e.component,
                l = void 0 === d ? "div" : d,
                u = e.onChange,
                p = e.showLabels,
                f = void 0 !== p && p,
                h = e.value,
                m = (0, a.default)(e, ["children", "classes", "className", "component", "onChange", "showLabels", "value"]);
            return i.createElement(l, (0, n.default)({
                className: (0, s.default)(o.root, c),
                ref: t
            }, m), i.Children.map(r, (function(e, t) {
                if (!i.isValidElement(e)) return null;
                var r = void 0 === e.props.value ? t : e.props.value;
                return i.cloneElement(e, {
                    selected: r === h,
                    showLabel: void 0 !== e.props.showLabel ? e.props.showLabel : f,
                    value: r,
                    onChange: u
                })
            })))
        })),
        l = (0, c.default)((function(e) {
            return {
                root: {
                    display: "flex",
                    justifyContent: "center",
                    height: 56,
                    backgroundColor: e.palette.background.paper
                }
            }
        }), {
            name: "MuiBottomNavigation"
        })(d)
})), o.register("FRS4I", (function(e, r) {
    t(e.exports, "default", (function() {
        return u
    }));
    var n = o("kqQIs"),
        a = o("2Af7I"),
        i = o("fywoC");
    o("djNMu");
    var s = o("aWdbz"),
        c = o("cY4lv"),
        d = o("7s22H"),
        l = i.forwardRef((function(e, t) {
            var r = e.classes,
                o = e.className,
                c = e.icon,
                l = e.label,
                u = e.onChange,
                p = e.onClick,
                f = e.selected,
                h = e.showLabel,
                m = e.value,
                g = (0, a.default)(e, ["classes", "className", "icon", "label", "onChange", "onClick", "selected", "showLabel", "value"]);
            return i.createElement(d.default, (0, n.default)({
                ref: t,
                className: (0, s.default)(r.root, o, f ? r.selected : !h && r.iconOnly),
                focusRipple: !0,
                onClick: function(e) {
                    u && u(e, m), p && p(e)
                }
            }, g), i.createElement("span", {
                className: r.wrapper
            }, c, i.createElement("span", {
                className: (0, s.default)(r.label, f ? r.selected : !h && r.iconOnly)
            }, l)))
        })),
        u = (0, c.default)((function(e) {
            return {
                root: {
                    transition: e.transitions.create(["color", "padding-top"], {
                        duration: e.transitions.duration.short
                    }),
                    padding: "6px 12px 8px",
                    minWidth: 80,
                    maxWidth: 168,
                    color: e.palette.text.secondary,
                    flex: "1",
                    "&$iconOnly": {
                        paddingTop: 16
                    },
                    "&$selected": {
                        paddingTop: 6,
                        color: e.palette.primary.main
                    }
                },
                selected: {},
                iconOnly: {},
                wrapper: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    flexDirection: "column"
                },
                label: {
                    fontFamily: e.typography.fontFamily,
                    fontSize: e.typography.pxToRem(12),
                    opacity: 1,
                    transition: "font-size 0.2s, opacity 0.2s",
                    transitionDelay: "0.1s",
                    "&$iconOnly": {
                        opacity: 0,
                        transitionDelay: "0s"
                    },
                    "&$selected": {
                        fontSize: e.typography.pxToRem(14)
                    }
                }
            }
        }), {
            name: "MuiBottomNavigationAction"
        })(l)
})), o.register("9y6iX", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
        }), "Build")
})), o.register("3Kwbv", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"
        }), "FormatPaint")
})), o.register("7grRY", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
        }), "Home")
})), o.register("ihwEg", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
        }), "MusicNote")
})), o.register("3LYbX", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"
        }), "Power")
})), o.register("dDXs8", (function(e, n) {
    t(e.exports, "default", (function() {
        return i
    }));
    var a = o("fywoC"),
        i = (0, o("9yGbA").default)(r(a).createElement("path", {
            d: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
        }), "TrendingUp")
})), o.register("kCitn", (function(e, r) {
    t(e.exports, "default", (function() {
        return j
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("b9PLE"),
        c = o("l7LOM"),
        d = o("i6SGg"),
        l = o("eEMhJ"),
        u = o("lpEVe"),
        p = o("fywoC"),
        f = o("2FDaO"),
        h = o("hdEuf");
    let m, g, v, x, y, b, w = e => e;
    var C;
    (C = b || (b = {})).treasure = "Treaure", C.powerups = "Powerups";
    const k = f.default.div(m || (m = w`
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`)),
        P = f.default.div(g || (g = w`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-right: 10px;
`)),
        E = f.default.h2(v || (v = w`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 700px) {
    font-size: 40px;
  }
`)),
        S = f.default.div(x || (x = w`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
`)),
        T = f.default.img.attrs({
            src: (0, l.getAssetPath)("treasure.svg")
        })(y || (y = w`
  width: 50%;
  max-width: 250px;
  max-height: 25vh;
  cursor: pointer;
`));
    let B = class extends p.Component {
        render() {
            return (0, i.jsx)(k, {
                children: this.renderScreens()
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "state", {
                showPowerupsHelperModal: !1,
                showTreasureChest: !0,
                currentScreen: this.props.gameOptions.enablePowerupRNGAnimation && !this.props.navigation.powerupRNGAnimationDone ? b.treasure : b.powerups
            }), (0, n.default)(this, "renderScreens", (() => {
                const {
                    currentScreen: e
                } = this.state;
                let t = null;
                return e === b.treasure ? t = this.treasureChestScreen() : e === b.powerups && (t = this.powerupsScreen()), t
            })), (0, n.default)(this, "treasureChestScreen", (() => (0, i.jsxs)(S, {
                className: !this.state.showTreasureChest && "animated fadeOut",
                children: [(0, i.jsx)(E, {
                    children: (0, i.jsx)(s.default, {
                        text: "Open The Treasure Chest To Unlock Your Powerups!"
                    })
                }), (0, i.jsx)(T, {
                    className: this.state.showTreasureChest ? "animated pulse infinite" : "animated bounceOut",
                    onClick: this.hideTreasureChest
                })]
            }))), (0, n.default)(this, "powerupsScreen", (() => (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(P, {
                    className: this.props.gameOptions.enablePowerupRNGAnimation && !this.props.navigation.visitedPowerupSection ? "animated fadeIn" : "",
                    children: this.props.powerups.availablePowerups.filter((e => !this.props.powerups.disabledPowerups.includes(e.name) && (!this.props.hidePowerup || !this.props.hidePowerup(e)))).map((e => (0, i.jsx)(c.default, {
                        powerup: e,
                        openModal: this.openModal
                    }, e.name)))
                }), (0, i.jsx)(h.default, {
                    open: this.state.showPowerupsHelperModal,
                    close: this.closeModal,
                    closeAndReturnToQuestions: this.closeAndReturnToQuestions
                })]
            }))), (0, n.default)(this, "hideTreasureChest", (() => {
                this.props.navigation.powerupRNGAnimationDone = !0, this.setState({
                    showTreasureChest: !1
                }, (() => setTimeout((() => this.setState({
                    currentScreen: b.powerups
                }, (() => setTimeout((() => this.props.navigation.visitedPowerupSection = !0), 500)))), 1e3)))
            })), (0, n.default)(this, "openModal", (() => this.setState({
                showPowerupsHelperModal: !0
            }))), (0, n.default)(this, "closeAndReturnToQuestions", (() => {
                this.closeModal(), setTimeout((() => (0, l.changeRoute)(d.default.questions)), 510)
            })), (0, n.default)(this, "closeModal", (() => {
                this.setState({
                    showPowerupsHelperModal: !1
                })
            }))
        }
    };
    B = (0, a.__decorate)([(0, u.inject)("powerups", "gameOptions", "navigation"), u.observer], B);
    var j = B
})), o.register("l7LOM", (function(e, r) {
    t(e.exports, "default", (function() {
        return _
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("c6knh"),
        c = o("7SwYo"),
        d = o("5933e"),
        l = o("b9PLE"),
        u = o("hbfMQ"),
        p = o("49Os1"),
        f = o("i6SGg"),
        h = o("6sear"),
        m = o("eEMhJ"),
        g = o("lpEVe"),
        v = o("fywoC"),
        x = o("2FDaO");
    let y, b, w, C, k, P = e => e;
    const E = x.default.div(y || (y = P`
  box-shadow: ${0};
  flex-grow: 1;
  width: 510px;
  border-radius: ${0}px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`), u.default.basic, 5),
        S = x.default.div(b || (b = P`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  box-sizing: border-box;
  background: ${0};
  color: ${0};
  border-top-left-radius: ${0}px;
  border-top-right-radius: ${0}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  flex-grow: 1;
  flex-direction: column;
`), (e => e.colors.background), (e => e.colors.text), 5, 5),
        T = x.default.div(w || (w = P`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: flex-end;
`)),
        B = x.default.div(C || (C = P`
  font-weight: bold;
  font-size: 26px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`)),
        j = x.default.div(k || (k = P`
  color: rgba(0, 0, 0, 0.7);
`));
    let M = class extends v.Component {
        render() {
            const {
                powerup: e
            } = this.props, t = this.getButtonDetails();
            return (0, i.jsxs)(E, {
                children: [(0, i.jsxs)(S, {
                    colors: e.color,
                    children: [(0, i.jsx)(d.default, {
                        name: e.icon
                    }), e.customTag && (0, i.jsx)(s.default, {
                        style: {
                            marginTop: 5
                        },
                        label: e.customTag
                    })]
                }), (0, i.jsxs)(T, {
                    children: [(0, i.jsxs)("div", {
                        style: {
                            marginRight: 10
                        },
                        children: [(0, i.jsx)(B, {
                            children: (0, i.jsx)("div", {
                                style: {
                                    marginRight: 5
                                },
                                children: (0, i.jsx)(l.default, {
                                    text: (0, m.getPowerupName)(e)
                                })
                            })
                        }), (0, i.jsx)(j, {
                            children: (0, i.jsx)(l.default, {
                                text: (0, m.getPowerupDescription)(e.description)
                            })
                        })]
                    }), (0, i.jsx)(c.default, {
                        type: t.type,
                        label: (0, i.jsx)(l.default, {
                            text: t.label,
                            disableIfContains: this.props.gameOptions.currency
                        }),
                        onClick: t.onClick
                    })]
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "getCost", (() => 5 * Math.ceil((this.props.balance.balance * this.props.powerup.percentageCost + this.props.powerup.baseCost) / 5))), (0, n.default)(this, "getButtonDetails", (() => {
                const {
                    balance: e,
                    powerup: t
                } = this.props, r = this.getCost(), o = e.balance >= r && !this.props.powerups.purchasedPowerups.includes(t.name);
                return {
                    label: this.props.powerups.purchasedPowerups.includes(t.name) ? this.props.powerups.usedPowerups.includes(t.name) ? "Used" : "Purchased" : (0, m.getMoney)(r),
                    type: o ? "primary" : "disabled",
                    onClick: o ? this.purchase : null
                }
            })), (0, n.default)(this, "purchase", (() => {
                h.successClick.play(), this.props.powerups.hasShownHelperModal || this.props.powerup.autoActivate || (this.props.powerups.hasShownHelperModal = !0, this.props.openModal()), (0, m.send)(p.default.powerupPurchased, this.props.powerup.name), this.props.powerup.autoActivate && (0, m.changeRoute)(f.default.questions)
            }))
        }
    };
    M = (0, a.__decorate)([(0, g.inject)("powerups", "gameOptions", "balance"), g.observer], M);
    var _ = M
})), o.register("hdEuf", (function(e, r) {
    t(e.exports, "default", (function() {
        return w
    }));
    var n = o("hxEiv"),
        a = o("7SwYo"),
        i = o("fThXt"),
        s = o("b9PLE"),
        c = o("l360q"),
        d = o("hbfMQ"),
        l = o("eEMhJ"),
        u = o("fywoC"),
        p = o("2FDaO");
    let f, h, m, g = e => e;
    const v = p.default.div(f || (f = g`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${0};
`), c.default.name),
        x = p.default.div(h || (h = g`
  font-weight: bold;
  font-size: 29px;
`)),
        y = p.default.div(m || (m = g`
  font-size: 21px;
  text-align: center;
  margin-bottom: 15px;
`));
    class b extends u.Component {
        render() {
            return (0, n.jsx)(i.default, {
                open: this.props.open,
                close: this.props.close,
                children: (0, n.jsxs)(v, {
                    children: [(0, n.jsx)(x, {
                        children: (0, n.jsx)(s.default, {
                            text: "Powerup Purchased!"
                        })
                    }), (0, n.jsx)(y, {
                        children: (0, n.jsx)(s.default, {
                            text: "Activate your powerup via the tray menu"
                        })
                    }), (0, n.jsx)("img", {
                        src: (0, l.getAssetPath)("PowerupTutorial.gif"),
                        style: {
                            maxHeight: 270,
                            borderRadius: 3,
                            boxShadow: d.default.basic,
                            marginBottom: 15
                        }
                    }), (0, n.jsx)(a.default, {
                        type: "secondary",
                        size: "large",
                        onClick: this.props.closeAndReturnToQuestions,
                        label: (0, n.jsx)(s.default, {
                            text: "Got It"
                        })
                    })]
                })
            })
        }
    }
    var w = b
})), o.register("cgMKQ", (function(e, r) {
    t(e.exports, "Container", (function() {
        return f
    })), t(e.exports, "default", (function() {
        return g
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("aR7jF"),
        s = o("lpEVe"),
        c = o("fywoC"),
        d = o("2FDaO");
    let l, u, p = e => e;
    const f = d.default.div(l || (l = p`
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`)),
        h = d.default.div(u || (u = p`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
`));
    let m = class extends c.Component {
        render() {
            const {
                theme: {
                    availableThemes: e
                }
            } = this.props;
            return (0, a.jsx)(f, {
                children: (0, a.jsx)(h, {
                    children: e.slice().sort(((e, t) => e.cost - t.cost)).filter((e => !this.props.theme.disabledThemes.includes(e.name))).map((e => (0, a.jsx)(i.default, {
                        specifiedTheme: e
                    }, e.name)))
                })
            })
        }
    };
    m = (0, n.__decorate)([(0, s.inject)("theme"), s.observer], m);
    var g = m
})), o.register("aR7jF", (function(e, r) {
    t(e.exports, "default", (function() {
        return R
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("7SwYo"),
        c = o("b9PLE"),
        d = o("hbfMQ"),
        l = o("49Os1"),
        u = o("i6SGg"),
        p = o("6sear"),
        f = o("eEMhJ"),
        h = o("lpEVe"),
        m = o("fywoC"),
        g = o("jBnVG"),
        v = o("2FDaO");
    let x, y, b, w, C, k, P = e => e;
    const E = v.default.div(x || (x = P`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 470px;
  border-radius: ${0}px;
  margin: 10px;
  box-shadow: ${0};
`), 5, d.default.basic),
        S = v.default.div(y || (y = P`
  width: 100%;
  height: 100px;
  display: flex;
`)),
        T = v.default.div(b || (b = P`
  height: 100%;
  width: 25%;
  border-top-left-radius: ${0}px;
  border-top-right-radius: ${0}px;
  background: ${0};
`), (e => 0 === e.index ? 5 : 0), (e => 3 === e.index ? 5 : 0), (e => e.color)),
        B = v.default.div(w || (w = P`
  border-bottom-left-radius: ${0}px;
  border-bottom-right-radius: ${0}px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`), 5, 5),
        j = v.default.div(C || (C = P`
  color: rgba(0, 0, 0, 0.7);
`)),
        M = v.default.div(k || (k = P`
  font-weight: bold;
  font-size: 26px;
  font-weight: bold;
`));
    let _ = class extends m.Component {
        render() {
            const e = this.getButtonDetails(),
                t = this.props.specifiedTheme;
            return (0, i.jsxs)(E, {
                children: [(0, i.jsx)(S, {
                    children: t.palette.map(((e, t) => (0, i.jsx)(T, {
                        index: t,
                        color: e.background
                    }, e.background + t)))
                }), (0, i.jsxs)(B, {
                    children: [(0, i.jsxs)("div", {
                        style: {
                            marginRight: 10
                        },
                        children: [(0, i.jsx)(M, {
                            children: t.name
                        }), (0, i.jsx)(j, {
                            children: (0, i.jsx)(c.default, {
                                text: t.description
                            })
                        })]
                    }), (0, i.jsx)(s.default, {
                        onClick: e.onClick,
                        type: e.type,
                        label: e.text
                    })]
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "getButtonDetails", (() => {
                if (this.ownsTheme()) return this.canApplyTheme() ? {
                    type: "secondary",
                    text: (0, i.jsx)(c.default, {
                        text: "Apply"
                    }),
                    onClick: () => {
                        p.applyTheme.play(), this.props.navigation.currentShopTab = g.ShopTab.upgrades, (0, f.send)(l.default.themeApplied, this.props.specifiedTheme.name), (0, f.changeRoute)(u.default.questions)
                    }
                } : {
                    type: "disabled",
                    text: (0, i.jsx)(c.default, {
                        text: "Applied"
                    })
                };
                const e = (0, f.getMoney)(this.props.specifiedTheme.cost);
                return this.canPurchaseTheme() ? {
                    type: "primary",
                    text: e,
                    onClick: () => {
                        p.successClick.play(), (0, f.purchaseTheme)(this.props.specifiedTheme.name)
                    }
                } : {
                    type: "disabled",
                    text: e
                }
            })), (0, n.default)(this, "ownsTheme", (() => this.props.theme.ownedThemes.includes(this.props.specifiedTheme.name))), (0, n.default)(this, "canApplyTheme", (() => this.ownsTheme() && this.props.theme.themeName !== this.props.specifiedTheme.name)), (0, n.default)(this, "canPurchaseTheme", (() => !this.ownsTheme() && this.props.specifiedTheme.cost <= this.props.balance.balance))
        }
    };
    _ = (0, a.__decorate)([(0, h.inject)("balance", "theme", "navigation"), h.observer], _);
    var R = _
})), o.register("7uCCN", (function(e, r) {
    t(e.exports, "default", (function() {
        return f
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("kC0Tv"),
        s = o("6DKxu"),
        c = o("lpEVe"),
        d = o("fywoC");
    let l;
    const u = o("2FDaO").default.div(l || (l = (e => e)`
  flex: 1;
  background: ${0};
  color: ${0};
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
`), i.default.BackgroundGray, i.default.Black);
    let p = class extends d.Component {
        render() {
            const {
                upgrades: e
            } = this.props;
            return (0, a.jsx)(u, {
                children: e.upgrades.map(((e, t) => (0, a.jsx)(s.default, {
                    title: e.name,
                    description: e.description,
                    icon: e.icon,
                    index: t
                }, e.name)))
            })
        }
    };
    p = (0, n.__decorate)([(0, c.inject)("upgrades"), c.observer], p);
    var f = p
})), o.register("6DKxu", (function(e, r) {
    t(e.exports, "default", (function() {
        return n
    }));
    var n = o("5Boii").default
})), o.register("5Boii", (function(e, r) {
    t(e.exports, "default", (function() {
        return k
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("b9PLE"),
        c = o("kC0Tv"),
        d = o("hbfMQ"),
        l = o("dVMuI"),
        u = o("i6SGg"),
        p = o("6sear"),
        f = o("eEMhJ"),
        h = o("lpEVe"),
        m = o("fywoC"),
        g = o("2FDaO");
    let v, x, y = e => e;
    const b = g.default.div(v || (v = y`
  margin-bottom: 10px;
  background: ${0};
  display: flex;
  align-items: center;
  color: ${0};
  border-radius: 4px;
  box-shadow: ${0};
  width: 100%;
  height: calc(25% - 10px);
  min-height: 80px;
  cursor: pointer;
  @media (min-width: ${0}px) {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: calc(50% - 20px);
    height: calc(50% - 20px);
    flex-direction: column;
    justify-content: center;
    transition: transform 0.25s;
    &:hover {
      transform: scale(1.02);
    }
  }
`), c.default.White, c.default.Black, d.default.basic, (e => e.breakpoint)),
        w = g.default.div(x || (x = y`
  margin-left: 10px;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-right: 12px;
  @media (min-width: ${0}px) {
    text-align: center;
  }
`), (e => e.breakpoint));
    let C = class extends m.Component {
        render() {
            return (0, i.jsxs)(b, {
                onClick: this.handleClick,
                breakpoint: 700,
                children: [(0, i.jsx)(l.default, {
                    index: this.props.index,
                    name: this.props.icon,
                    desktopBreakpoint: 700
                }), (0, i.jsxs)(w, {
                    breakpoint: 700,
                    children: [(0, i.jsx)("div", {
                        style: {
                            fontWeight: "bold",
                            fontSize: 24
                        },
                        children: (0, i.jsx)(s.default, {
                            text: this.props.title
                        })
                    }), (0, i.jsx)("div", {
                        children: (0, i.jsx)(s.default, {
                            text: this.props.description
                        })
                    })]
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "handleClick", (() => {
                p.click.play(), this.props.upgrades.currentlySelectedUpgrade = this.props.title, (0, f.changeRoute)(u.default.upgrade)
            }))
        }
    };
    C = (0, a.__decorate)([(0, h.inject)("upgrades"), h.observer], C);
    var k = C
})), o.register("dVMuI", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("divCp"),
        a = o("hxEiv"),
        i = o("5933e"),
        s = o("fywoC");
    let c;
    const d = o("2FDaO").default.div(c || (c = (e => e)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
  height: 100%;
  width: 6%;
  min-width: 44px;
  background: ${0};
  color: ${0};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 25px;
  @media (min-width: ${0}) {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    padding: 0px;
    font-size: 30px;
  }
`), (e => e.theme.palette[e.index].background), (e => e.theme.palette[e.index].text), (e => `${e.breakpoint}px`));
    class l extends s.Component {
        componentDidMount() {
            window.addEventListener("resize", this.updateWidth)
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.updateWidth)
        }
        render() {
            return (0, a.jsx)(d, {
                breakpoint: this.props.desktopBreakpoint,
                index: this.props.index,
                children: (0, a.jsx)(i.default, {
                    name: this.props.name
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "state", {
                screenWidth: 0
            }), (0, n.default)(this, "updateWidth", (() => {
                this.setState({
                    screenWidth: window.innerWidth
                })
            }))
        }
    }
})), o.register("azqzu", (function(e, r) {
    t(e.exports, "default", (function() {
        return x
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("49Os1"),
        c = o("i6SGg"),
        d = o("eEMhJ"),
        l = o("lpEVe"),
        u = o("fywoC"),
        p = o("2FDaO"),
        f = o("cgMKQ"),
        h = o("7ci8h"),
        m = o("3TR33");
    let g, v = class extends u.Component {
        componentDidMount() {
            (0, d.requestDefendingHomebase)(), this.checkHomebaseInterval = setInterval((() => {
                (0, d.requestDefendingHomebase)()
            }), 5e3)
        }
        componentWillUnmount() {
            this.checkHomebaseInterval && clearInterval(this.checkHomebaseInterval)
        }
        render() {
            return (0, i.jsx)(f.Container, {
                style: {
                    display: "flex",
                    justifyContent: "center"
                },
                children: (0, i.jsxs)(y, {
                    children: [(0, i.jsx)(h.default, {}), this.props.upgrades.homebaseUpgades.map((e => {
                        const t = this.getCost(e.baseCost, e.percentageCost),
                            r = this.props.balance.balance >= t;
                        return (0, i.jsx)(m.default, {
                            name: e.name,
                            description: e.description,
                            cost: t,
                            canAfford: r,
                            icon: e.icon,
                            background: e.background,
                            onClick: () => {
                                r && ((0, d.send)(s.default.upgradeDefendingHomebase, {
                                    id: e.id
                                }), (0, d.changeRoute)(c.default.questions))
                            }
                        }, e.id)
                    })), (0, i.jsx)("div", {
                        style: {
                            height: 20,
                            width: "100%"
                        }
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "checkHomebaseInterval", null), (0, n.default)(this, "getCost", ((e, t) => 5 * Math.ceil((e + t * this.props.balance.maxBalance) / 5)))
        }
    };
    v = (0, a.__decorate)([(0, l.inject)("upgrades", "balance"), l.observer], v);
    var x = v;
    const y = p.default.div(g || (g = (e => e)`
  width: 100%;
  max-width: 700px;
`))
})), o.register("7ci8h", (function(e, r) {
    t(e.exports, "Container", (function() {
        return b
    })), t(e.exports, "IconContainer", (function() {
        return w
    })), t(e.exports, "default", (function() {
        return y
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("6VgSE"),
        s = o("5933e"),
        c = o("b9PLE"),
        d = o("kC0Tv"),
        l = o("hbfMQ"),
        u = o("eEMhJ"),
        p = o("lpEVe"),
        f = o("fywoC"),
        h = o("2FDaO");
    let m, g, v = e => e;
    let x = class extends f.Component {
        render() {
            const e = this.props.entities.defendingHomebase;
            return e ? (0, a.jsxs)(b, {
                children: [(0, a.jsx)(w, {
                    colors: {
                        text: d.default.White,
                        background: e.backgroundColor
                    },
                    children: (0, a.jsx)(s.default, {
                        name: e.icon
                    })
                }), (0, a.jsxs)("div", {
                    style: {
                        padding: 23,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    },
                    children: [(0, a.jsx)("div", {
                        style: {
                            fontWeight: 900,
                            fontSize: 35
                        },
                        children: (0, a.jsx)(c.default, {
                            text: e.name
                        })
                    }), (0, a.jsxs)("div", {
                        style: {
                            fontSize: 23,
                            marginTop: -5
                        },
                        children: [(0, u.numberWithCommas)(e.health), "/", (0, u.numberWithCommas)(e.maxHealth), " ", (0, a.jsx)(c.default, {
                            text: "health"
                        })]
                    }), (0, a.jsx)(i.default, {
                        style: {
                            width: "100%",
                            marginTop: 5,
                            marginBottom: 10,
                            maxWidth: 400
                        }
                    }), (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(c.default, {
                            text: "Losing"
                        }), " ", (0, a.jsx)("b", {
                            children: (0, u.numberWithCommas)((t = e.healthDecreasePerTick, Math.round(10 * t) / 10))
                        }), " ", (0, a.jsx)(c.default, {
                            text: "health per second"
                        })]
                    })]
                })]
            }) : null;
            var t
        }
    };
    x = (0, n.__decorate)([(0, p.inject)("entities"), p.observer], x);
    var y = x;
    const b = h.default.div(m || (m = v`
  margin: 20px;
  border-radius: ${0}px;
  box-shadow: ${0};
`), 5, l.default.basic),
        w = h.default.div(g || (g = v`
  width: 100%;
  min-height: 120px;
  padding: 10px;
  box-sizing: border-box;
  background: ${0};
  color: ${0};
  border-top-left-radius: ${0}px;
  border-top-right-radius: ${0}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  flex-grow: 1;
  flex-direction: column;
`), (e => e.colors.background), (e => e.colors.text), 5, 5)
})), o.register("3TR33", (function(e, r) {
    t(e.exports, "default", (function() {
        return v
    }));
    var n = o("hxEiv"),
        a = o("7SwYo"),
        i = o("5933e"),
        s = o("b9PLE"),
        c = o("kC0Tv"),
        d = o("hbfMQ"),
        l = o("eEMhJ"),
        u = o("fywoC"),
        p = o("2FDaO");
    let f, h, m = e => e;
    class g extends u.Component {
        render() {
            const e = this.props;
            return (0, n.jsxs)(x, {
                style: e.style,
                children: [(0, n.jsx)(y, {
                    colors: {
                        text: c.default.White,
                        background: e.background
                    },
                    children: (0, n.jsx)(i.default, {
                        name: e.icon
                    })
                }), (0, n.jsxs)("div", {
                    style: {
                        padding: 23,
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    },
                    children: [(0, n.jsxs)("div", {
                        className: "flex flex-column",
                        style: {
                            alignItems: "flex-start"
                        },
                        children: [e.aboveNameComponent ? e.aboveNameComponent : null, (0, n.jsx)("div", {
                            style: {
                                fontWeight: 900,
                                fontSize: 25
                            },
                            children: (0, n.jsx)(s.default, {
                                text: e.name
                            })
                        }), (0, n.jsx)("div", {
                            children: (0, n.jsx)(s.default, {
                                text: e.description
                            })
                        })]
                    }), (0, n.jsx)("div", {
                        children: (0, n.jsx)(a.default, {
                            type: e.canAfford ? "primary" : "disabled",
                            size: "medium",
                            label: (0, l.getMoney)(e.cost),
                            style: {
                                marginLeft: 25
                            },
                            onClick: e.onClick
                        })
                    })]
                })]
            })
        }
    }
    var v = g;
    const x = p.default.div(f || (f = m`
  margin: 20px;
  border-radius: ${0}px;
  box-shadow: ${0};
`), 5, d.default.basic),
        y = p.default.div(h || (h = m`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  box-sizing: border-box;
  background: ${0};
  color: ${0};
  border-top-left-radius: ${0}px;
  border-top-right-radius: ${0}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  flex-grow: 1;
  flex-direction: column;
`), (e => e.colors.background), (e => e.colors.text), 5, 5)
})), o.register("kCjnm", (function(e, n) {
    t(e.exports, "default", (function() {
        return E
    }));
    var a = o("divCp"),
        i = o("kHqmx"),
        s = o("hxEiv"),
        c = o("kC0Tv"),
        d = o("i6SGg"),
        l = o("6sear"),
        u = o("eEMhJ"),
        p = o("lpEVe"),
        f = o("fywoC"),
        h = o("eXJ7C"),
        m = o("3bLNC"),
        g = o("2FDaO"),
        v = o("kCitn"),
        x = o("cgMKQ");
    let y, b, w = e => e;
    const C = g.default.div(y || (y = w`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${0};
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
`), c.default.White),
        k = g.default.div(b || (b = w`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 9px;
`));
    let P = class extends f.Component {
        render() {
            return this.getContent()
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                showReader: !0,
                screen: ""
            }), (0, a.default)(this, "handleScan", (e => {
                if (e && JSON.parse(e)) {
                    const t = JSON.parse(e);
                    t.route && (l.applyTheme.play(), this.setState({
                        showReader: !1,
                        screen: t.route
                    }, (() => {
                        "moneyPerQuestion" === this.state.screen && this.onUpgradeScanned(m.upgradeNames.moneyPerQuestion), "streakBonus" === this.state.screen && this.onUpgradeScanned(m.upgradeNames.streakBonus), "multiplier" === this.state.screen && this.onUpgradeScanned(m.upgradeNames.multiplier), "insurance" === this.state.screen && this.onUpgradeScanned(m.upgradeNames.insurance)
                    })))
                }
            })), (0, a.default)(this, "getContent", (() => this.state.showReader ? (0, s.jsxs)(C, {
                children: [(0, s.jsx)(k, {
                    children: "Find a KitCode to scan!"
                }), (0, s.jsx)(r(h), {
                    onScan: this.handleScan,
                    style: {
                        width: 300,
                        height: 300
                    },
                    onError: null
                })]
            }) : "themes" === this.state.screen ? (0, s.jsx)(x.default, {}) : "powerups" === this.state.screen ? (0, s.jsx)(v.default, {}) : null)), (0, a.default)(this, "onUpgradeScanned", (e => {
                this.props.upgrades.currentlySelectedUpgrade = e, (0, u.changeRoute)(d.default.upgrade)
            }))
        }
    };
    P = (0, i.__decorate)([(0, p.inject)("upgrades"), p.observer], P);
    var E = P
})), o.register("eXJ7C", (function(e, t) {
    var r, n, a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        },
        i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) {
                return r && e(t.prototype, r), o && e(t, o), t
            }
        }();
    var s = o("fywoC"),
        c = s.Component,
        d = o("djNMu"),
        l = o("caTVa"),
        u = l.getDeviceId,
        p = (l.getFacingModePattern, o("bk9Hw")),
        f = o("dy616");
    o("eBYTx");
    var h = f(['!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.jsQR=e():o.jsQR=e()}("undefined"!=typeof self?self:this,function(){return function(o){function e(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return o[t].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var r={};return e.m=o,e.c=r,e.d=function(o,r,t){e.o(o,r)||Object.defineProperty(o,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(r,"a",r),r},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p="",e(e.s=3)}([function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o,e){this.width=e,this.height=o.length/e,this.data=o}return o.createEmpty=function(e,r){return new o(new Uint8ClampedArray(e*r),e)},o.prototype.get=function(o,e){return!(o<0||o>=this.width||e<0||e>=this.height)&&!!this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r?1:0},o.prototype.setRegion=function(o,e,r,t,c){for(var s=e;s<e+t;s++)for(var a=o;a<o+r;a++)this.set(a,s,!!c)},o}();e.BitMatrix=t},function(o,e,r){"use strict";function t(o,e){return o^e}Object.defineProperty(e,"__esModule",{value:!0});var c=r(2);e.addOrSubtractGF=t;var s=function(){function o(o,e,r){this.primitive=o,this.size=e,this.generatorBase=r,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var t=1,s=0;s<this.size;s++)this.expTable[s]=t,(t*=2)>=this.size&&(t=(t^this.primitive)&this.size-1);for(var s=0;s<this.size-1;s++)this.logTable[this.expTable[s]]=s;this.zero=new c.default(this,Uint8ClampedArray.from([0])),this.one=new c.default(this,Uint8ClampedArray.from([1]))}return o.prototype.multiply=function(o,e){return 0===o||0===e?0:this.expTable[(this.logTable[o]+this.logTable[e])%(this.size-1)]},o.prototype.inverse=function(o){if(0===o)throw new Error("Can\'t invert 0");return this.expTable[this.size-this.logTable[o]-1]},o.prototype.buildMonomial=function(o,e){if(o<0)throw new Error("Invalid monomial degree less than 0");if(0===e)return this.zero;var r=new Uint8ClampedArray(o+1);return r[0]=e,new c.default(this,r)},o.prototype.log=function(o){if(0===o)throw new Error("Can\'t take log(0)");return this.logTable[o]},o.prototype.exp=function(o){return this.expTable[o]},o}();e.default=s},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r(1),c=function(){function o(o,e){if(0===e.length)throw new Error("No coefficients.");this.field=o;var r=e.length;if(r>1&&0===e[0]){for(var t=1;t<r&&0===e[t];)t++;if(t===r)this.coefficients=o.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(r-t);for(var c=0;c<this.coefficients.length;c++)this.coefficients[c]=e[t+c]}}else this.coefficients=e}return o.prototype.degree=function(){return this.coefficients.length-1},o.prototype.isZero=function(){return 0===this.coefficients[0]},o.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},o.prototype.addOrSubtract=function(e){if(this.isZero())return e;if(e.isZero())return this;var r=this.coefficients,c=e.coefficients;r.length>c.length&&(n=[c,r],r=n[0],c=n[1]);for(var s=new Uint8ClampedArray(c.length),a=c.length-r.length,d=0;d<a;d++)s[d]=c[d];for(var d=a;d<c.length;d++)s[d]=t.addOrSubtractGF(r[d-a],c[d]);return new o(this.field,s);var n},o.prototype.multiply=function(e){if(0===e)return this.field.zero;if(1===e)return this;for(var r=this.coefficients.length,t=new Uint8ClampedArray(r),c=0;c<r;c++)t[c]=this.field.multiply(this.coefficients[c],e);return new o(this.field,t)},o.prototype.multiplyPoly=function(e){if(this.isZero()||e.isZero())return this.field.zero;for(var r=this.coefficients,c=r.length,s=e.coefficients,a=s.length,d=new Uint8ClampedArray(c+a-1),n=0;n<c;n++)for(var l=r[n],i=0;i<a;i++)d[n+i]=t.addOrSubtractGF(d[n+i],this.field.multiply(l,s[i]));return new o(this.field,d)},o.prototype.multiplyByMonomial=function(e,r){if(e<0)throw new Error("Invalid degree less than 0");if(0===r)return this.field.zero;for(var t=this.coefficients.length,c=new Uint8ClampedArray(t+e),s=0;s<t;s++)c[s]=this.field.multiply(this.coefficients[s],r);return new o(this.field,c)},o.prototype.evaluateAt=function(o){var e=0;if(0===o)return this.getCoefficient(0);var r=this.coefficients.length;if(1===o)return this.coefficients.forEach(function(o){e=t.addOrSubtractGF(e,o)}),e;e=this.coefficients[0];for(var c=1;c<r;c++)e=t.addOrSubtractGF(this.field.multiply(o,e),this.coefficients[c]);return e},o}();e.default=c},function(o,e,r){"use strict";function t(o){var e=n.locate(o);if(!e)return null;var r=d.extract(o,e),t=a.decode(r.matrix);return t?{binaryData:t.bytes,data:t.text,chunks:t.chunks,location:{topRightCorner:r.mappingFunction(e.dimension,0),topLeftCorner:r.mappingFunction(0,0),bottomRightCorner:r.mappingFunction(e.dimension,e.dimension),bottomLeftCorner:r.mappingFunction(0,e.dimension),topRightFinderPattern:e.topRight,topLeftFinderPattern:e.topLeft,bottomLeftFinderPattern:e.bottomLeft,bottomRightAlignmentPattern:e.alignmentPattern}}:null}function c(o,e,r,c){void 0===c&&(c={});var a=l;Object.keys(a||{}).forEach(function(o){a[o]=c[o]||a[o]});var d="attemptBoth"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,n="onlyInvert"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,i=s.binarize(o,e,r,d),B=i.binarized,k=i.inverted,u=t(n?k:B);return u||"attemptBoth"!==a.inversionAttempts&&"invertFirst"!==a.inversionAttempts||(u=t(n?B:k)),u}Object.defineProperty(e,"__esModule",{value:!0});var s=r(4),a=r(5),d=r(11),n=r(12),l={inversionAttempts:"attemptBoth"};c.default=c,e.default=c},function(o,e,r){"use strict";function t(o,e,r){return o<e?e:o>r?r:o}function c(o,e,r,c){if(o.length!==e*r*4)throw new Error("Malformed data passed to binarizer.");for(var l=new n(e,r),i=0;i<e;i++)for(var B=0;B<r;B++){var k=o[4*(B*e+i)+0],u=o[4*(B*e+i)+1],C=o[4*(B*e+i)+2];l.set(i,B,.2126*k+.7152*u+.0722*C)}for(var m=Math.ceil(e/a),f=Math.ceil(r/a),w=new n(m,f),P=0;P<f;P++)for(var v=0;v<m;v++){for(var h=0,p=1/0,y=0,B=0;B<a;B++)for(var i=0;i<a;i++){var b=l.get(v*a+i,P*a+B);h+=b,p=Math.min(p,b),y=Math.max(y,b)}var g=h/Math.pow(a,2);if(y-p<=d&&(g=p/2,P>0&&v>0)){var x=(w.get(v,P-1)+2*w.get(v-1,P)+w.get(v-1,P-1))/4;p<x&&(g=x)}w.set(v,P,g)}var M=s.BitMatrix.createEmpty(e,r),L=null;c&&(L=s.BitMatrix.createEmpty(e,r));for(var P=0;P<f;P++)for(var v=0;v<m;v++){for(var N=t(v,2,m-3),I=t(P,2,f-3),h=0,O=-2;O<=2;O++)for(var z=-2;z<=2;z++)h+=w.get(N+O,I+z);for(var S=h/25,O=0;O<a;O++)for(var z=0;z<a;z++){var i=v*a+O,B=P*a+z,X=l.get(i,B);M.set(i,B,X<=S),c&&L.set(i,B,!(X<=S))}}return c?{binarized:M,inverted:L}:{binarized:M}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(0),a=8,d=24,n=function(){function o(o,e){this.width=o,this.data=new Uint8ClampedArray(o*e)}return o.prototype.get=function(o,e){return this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r},o}();e.binarize=c},function(o,e,r){"use strict";function t(o,e){for(var r=o^e,t=0;r;)t++,r&=r-1;return t}function c(o,e){return e<<1|o}function s(o){var e=17+4*o.versionNumber,r=k.BitMatrix.createEmpty(e,e);r.setRegion(0,0,9,9,!0),r.setRegion(e-8,0,8,9,!0),r.setRegion(0,e-8,9,8,!0);for(var t=0,c=o.alignmentPatternCenters;t<c.length;t++)for(var s=c[t],a=0,d=o.alignmentPatternCenters;a<d.length;a++){var n=d[a];6===s&&6===n||6===s&&n===e-7||s===e-7&&6===n||r.setRegion(s-2,n-2,5,5,!0)}return r.setRegion(6,9,1,e-17,!0),r.setRegion(9,6,e-17,1,!0),o.versionNumber>6&&(r.setRegion(e-11,0,3,6,!0),r.setRegion(0,e-11,6,3,!0)),r}function a(o,e,r){for(var t=w[r.dataMask],a=o.height,d=s(e),n=[],l=0,i=0,B=!0,k=a-1;k>0;k-=2){6===k&&k--;for(var u=0;u<a;u++)for(var C=B?a-1-u:u,m=0;m<2;m++){var f=k-m;if(!d.get(f,C)){i++;var P=o.get(f,C);t({y:C,x:f})&&(P=!P),l=c(P,l),8===i&&(n.push(l),i=0,l=0)}}B=!B}return n}function d(o){var e=o.height,r=Math.floor((e-17)/4);if(r<=6)return m.VERSIONS[r-1];for(var s=0,a=5;a>=0;a--)for(var d=e-9;d>=e-11;d--)s=c(o.get(d,a),s);for(var n=0,d=5;d>=0;d--)for(var a=e-9;a>=e-11;a--)n=c(o.get(d,a),n);for(var l,i=1/0,B=0,k=m.VERSIONS;B<k.length;B++){var u=k[B];if(u.infoBits===s||u.infoBits===n)return u;var C=t(s,u.infoBits);C<i&&(l=u,i=C),C=t(n,u.infoBits),C<i&&(l=u,i=C)}return i<=3?l:void 0}function n(o){for(var e=0,r=0;r<=8;r++)6!==r&&(e=c(o.get(r,8),e));for(var s=7;s>=0;s--)6!==s&&(e=c(o.get(8,s),e));for(var a=o.height,d=0,s=a-1;s>=a-7;s--)d=c(o.get(8,s),d);for(var r=a-8;r<a;r++)d=c(o.get(r,8),d);for(var n=1/0,l=null,i=0,B=f;i<B.length;i++){var k=B[i],u=k.bits,C=k.formatInfo;if(u===e||u===d)return C;var m=t(e,u);m<n&&(l=C,n=m),e!==d&&(m=t(d,u))<n&&(l=C,n=m)}return n<=3?l:null}function l(o,e,r){var t=e.errorCorrectionLevels[r],c=[],s=0;if(t.ecBlocks.forEach(function(o){for(var e=0;e<o.numBlocks;e++)c.push({numDataCodewords:o.dataCodewordsPerBlock,codewords:[]}),s+=o.dataCodewordsPerBlock+t.ecCodewordsPerBlock}),o.length<s)return null;o=o.slice(0,s);for(var a=t.ecBlocks[0].dataCodewordsPerBlock,d=0;d<a;d++)for(var n=0,l=c;n<l.length;n++){var i=l[n];i.codewords.push(o.shift())}if(t.ecBlocks.length>1)for(var B=t.ecBlocks[0].numBlocks,k=t.ecBlocks[1].numBlocks,d=0;d<k;d++)c[B+d].codewords.push(o.shift());for(;o.length>0;)for(var u=0,C=c;u<C.length;u++){var i=C[u];i.codewords.push(o.shift())}return c}function i(o){var e=d(o);if(!e)return null;var r=n(o);if(!r)return null;var t=a(o,e,r),c=l(t,e,r.errorCorrectionLevel);if(!c)return null;for(var s=c.reduce(function(o,e){return o+e.numDataCodewords},0),i=new Uint8ClampedArray(s),B=0,k=0,m=c;k<m.length;k++){var f=m[k],w=C.decode(f.codewords,f.codewords.length-f.numDataCodewords);if(!w)return null;for(var P=0;P<f.numDataCodewords;P++)i[B++]=w[P]}try{return u.decode(i,e.versionNumber)}catch(o){return null}}function B(o){if(null==o)return null;var e=i(o);if(e)return e;for(var r=0;r<o.width;r++)for(var t=r+1;t<o.height;t++)o.get(r,t)!==o.get(t,r)&&(o.set(r,t,!o.get(r,t)),o.set(t,r,!o.get(t,r)));return i(o)}Object.defineProperty(e,"__esModule",{value:!0});var k=r(0),u=r(6),C=r(9),m=r(10),f=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],w=[function(o){return(o.y+o.x)%2==0},function(o){return o.y%2==0},function(o){return o.x%3==0},function(o){return(o.y+o.x)%3==0},function(o){return(Math.floor(o.y/2)+Math.floor(o.x/3))%2==0},function(o){return o.x*o.y%2+o.x*o.y%3==0},function(o){return(o.y*o.x%2+o.y*o.x%3)%2==0},function(o){return((o.y+o.x)%2+o.y*o.x%3)%2==0}];e.decode=B},function(o,e,r){"use strict";function t(o,e){for(var r=[],t="",c=[10,12,14][e],s=o.readBits(c);s>=3;){var a=o.readBits(10);if(a>=1e3)throw new Error("Invalid numeric value above 999");var d=Math.floor(a/100),n=Math.floor(a/10)%10,l=a%10;r.push(48+d,48+n,48+l),t+=d.toString()+n.toString()+l.toString(),s-=3}if(2===s){var a=o.readBits(7);if(a>=100)throw new Error("Invalid numeric value above 99");var d=Math.floor(a/10),n=a%10;r.push(48+d,48+n),t+=d.toString()+n.toString()}else if(1===s){var a=o.readBits(4);if(a>=10)throw new Error("Invalid numeric value above 9");r.push(48+a),t+=a.toString()}return{bytes:r,text:t}}function c(o,e){for(var r=[],t="",c=[9,11,13][e],s=o.readBits(c);s>=2;){var a=o.readBits(11),d=Math.floor(a/45),n=a%45;r.push(k[d].charCodeAt(0),k[n].charCodeAt(0)),t+=k[d]+k[n],s-=2}if(1===s){var d=o.readBits(6);r.push(k[d].charCodeAt(0)),t+=k[d]}return{bytes:r,text:t}}function s(o,e){for(var r=[],t="",c=[8,16,16][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(8);r.push(d)}try{t+=decodeURIComponent(r.map(function(o){return"%"+("0"+o.toString(16)).substr(-2)}).join(""))}catch(o){}return{bytes:r,text:t}}function a(o,e){for(var r=[],t="",c=[8,10,12][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(13),n=Math.floor(d/192)<<8|d%192;n+=n<7936?33088:49472,r.push(n>>8,255&n),t+=String.fromCharCode(i.shiftJISTable[n])}return{bytes:r,text:t}}function d(o,e){for(var r=new l.BitStream(o),d=e<=9?0:e<=26?1:2,i={text:"",bytes:[],chunks:[]};r.available()>=4;){var k=r.readBits(4);if(k===B.Terminator)return i;if(k===B.ECI)0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(7)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(14)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(21)}):i.chunks.push({type:n.ECI,assignmentNumber:-1});else if(k===B.Numeric){var u=t(r,d);i.text+=u.text,(w=i.bytes).push.apply(w,u.bytes),i.chunks.push({type:n.Numeric,text:u.text})}else if(k===B.Alphanumeric){var C=c(r,d);i.text+=C.text,(P=i.bytes).push.apply(P,C.bytes),i.chunks.push({type:n.Alphanumeric,text:C.text})}else if(k===B.Byte){var m=s(r,d);i.text+=m.text,(v=i.bytes).push.apply(v,m.bytes),i.chunks.push({type:n.Byte,bytes:m.bytes,text:m.text})}else if(k===B.Kanji){var f=a(r,d);i.text+=f.text,(h=i.bytes).push.apply(h,f.bytes),i.chunks.push({type:n.Kanji,bytes:f.bytes,text:f.text})}}var w,P,v,h}Object.defineProperty(e,"__esModule",{value:!0});var n,l=r(7),i=r(8);!function(o){o.Numeric="numeric",o.Alphanumeric="alphanumeric",o.Byte="byte",o.Kanji="kanji",o.ECI="eci"}(n=e.Mode||(e.Mode={}));var B;!function(o){o[o.Terminator=0]="Terminator",o[o.Numeric=1]="Numeric",o[o.Alphanumeric=2]="Alphanumeric",o[o.Byte=4]="Byte",o[o.Kanji=8]="Kanji",o[o.ECI=7]="ECI"}(B||(B={}));var k=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];e.decode=d},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o){this.byteOffset=0,this.bitOffset=0,this.bytes=o}return o.prototype.readBits=function(o){if(o<1||o>32||o>this.available())throw new Error("Cannot read "+o.toString()+" bits");var e=0;if(this.bitOffset>0){var r=8-this.bitOffset,t=o<r?o:r,c=r-t,s=255>>8-t<<c;e=(this.bytes[this.byteOffset]&s)>>c,o-=t,this.bitOffset+=t,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++)}if(o>0){for(;o>=8;)e=e<<8|255&this.bytes[this.byteOffset],this.byteOffset++,o-=8;if(o>0){var c=8-o,s=255>>c<<c;e=e<<o|(this.bytes[this.byteOffset]&s)>>c,this.bitOffset+=o}}return e},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o}();e.BitStream=t},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,\n36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,\n39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,\n59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(o,e,r){"use strict";function t(o,e,r,t){e.degree()<r.degree()&&(w=[r,e],e=w[0],r=w[1]);for(var c=e,s=r,a=o.zero,d=o.one;s.degree()>=t/2;){var n=c,l=a;if(c=s,a=d,c.isZero())return null;s=n;for(var i=o.zero,B=c.getCoefficient(c.degree()),k=o.inverse(B);s.degree()>=c.degree()&&!s.isZero();){var u=s.degree()-c.degree(),C=o.multiply(s.getCoefficient(s.degree()),k);i=i.addOrSubtract(o.buildMonomial(u,C)),s=s.addOrSubtract(c.multiplyByMonomial(u,C))}if(d=i.multiplyPoly(a).addOrSubtract(l),s.degree()>=c.degree())return null}var m=d.getCoefficient(0);if(0===m)return null;var f=o.inverse(m);return[d.multiply(f),s.multiply(f)];var w}function c(o,e){var r=e.degree();if(1===r)return[e.getCoefficient(1)];for(var t=new Array(r),c=0,s=1;s<o.size&&c<r;s++)0===e.evaluateAt(s)&&(t[c]=o.inverse(s),c++);return c!==r?null:t}function s(o,e,r){for(var t=r.length,c=new Array(t),s=0;s<t;s++){for(var a=o.inverse(r[s]),n=1,l=0;l<t;l++)s!==l&&(n=o.multiply(n,d.addOrSubtractGF(1,o.multiply(r[l],a))));c[s]=o.multiply(e.evaluateAt(a),o.inverse(n)),0!==o.generatorBase&&(c[s]=o.multiply(c[s],a))}return c}function a(o,e){var r=new Uint8ClampedArray(o.length);r.set(o);for(var a=new d.default(285,256,0),l=new n.default(a,r),i=new Uint8ClampedArray(e),B=!1,k=0;k<e;k++){var u=l.evaluateAt(a.exp(k+a.generatorBase));i[i.length-1-k]=u,0!==u&&(B=!0)}if(!B)return r;var C=new n.default(a,i),m=t(a,a.buildMonomial(e,1),C,e);if(null===m)return null;var f=c(a,m[0]);if(null==f)return null;for(var w=s(a,m[1],f),P=0;P<f.length;P++){var v=r.length-1-a.log(f[P]);if(v<0)return null;r[v]=d.addOrSubtractGF(r[v],w[P])}return r}Object.defineProperty(e,"__esModule",{value:!0});var d=r(1),n=r(2);e.decode=a},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(o,e,r){"use strict";function t(o,e,r,t){var c=o.x-e.x+r.x-t.x,s=o.y-e.y+r.y-t.y;if(0===c&&0===s)return{a11:e.x-o.x,a12:e.y-o.y,a13:0,a21:r.x-e.x,a22:r.y-e.y,a23:0,a31:o.x,a32:o.y,a33:1};var a=e.x-r.x,d=t.x-r.x,n=e.y-r.y,l=t.y-r.y,i=a*l-d*n,B=(c*l-d*s)/i,k=(a*s-c*n)/i;return{a11:e.x-o.x+B*e.x,a12:e.y-o.y+B*e.y,a13:B,a21:t.x-o.x+k*t.x,a22:t.y-o.y+k*t.y,a23:k,a31:o.x,a32:o.y,a33:1}}function c(o,e,r,c){var s=t(o,e,r,c);return{a11:s.a22*s.a33-s.a23*s.a32,a12:s.a13*s.a32-s.a12*s.a33,a13:s.a12*s.a23-s.a13*s.a22,a21:s.a23*s.a31-s.a21*s.a33,a22:s.a11*s.a33-s.a13*s.a31,a23:s.a13*s.a21-s.a11*s.a23,a31:s.a21*s.a32-s.a22*s.a31,a32:s.a12*s.a31-s.a11*s.a32,a33:s.a11*s.a22-s.a12*s.a21}}function s(o,e){return{a11:o.a11*e.a11+o.a21*e.a12+o.a31*e.a13,a12:o.a12*e.a11+o.a22*e.a12+o.a32*e.a13,a13:o.a13*e.a11+o.a23*e.a12+o.a33*e.a13,a21:o.a11*e.a21+o.a21*e.a22+o.a31*e.a23,a22:o.a12*e.a21+o.a22*e.a22+o.a32*e.a23,a23:o.a13*e.a21+o.a23*e.a22+o.a33*e.a23,a31:o.a11*e.a31+o.a21*e.a32+o.a31*e.a33,a32:o.a12*e.a31+o.a22*e.a32+o.a32*e.a33,a33:o.a13*e.a31+o.a23*e.a32+o.a33*e.a33}}function a(o,e){for(var r=c({x:3.5,y:3.5},{x:e.dimension-3.5,y:3.5},{x:e.dimension-6.5,y:e.dimension-6.5},{x:3.5,y:e.dimension-3.5}),a=t(e.topLeft,e.topRight,e.alignmentPattern,e.bottomLeft),n=s(a,r),l=d.BitMatrix.createEmpty(e.dimension,e.dimension),i=function(o,e){var r=n.a13*o+n.a23*e+n.a33;return{x:(n.a11*o+n.a21*e+n.a31)/r,y:(n.a12*o+n.a22*e+n.a32)/r}},B=0;B<e.dimension;B++)for(var k=0;k<e.dimension;k++){var u=k+.5,C=B+.5,m=i(u,C);l.set(k,B,o.get(Math.floor(m.x),Math.floor(m.y)))}return{matrix:l,mappingFunction:i}}Object.defineProperty(e,"__esModule",{value:!0});var d=r(0);e.extract=a},function(o,e,r){"use strict";function t(o){return o.reduce(function(o,e){return o+e})}function c(o,e,r){var t,c,s,a=C(o,e),d=C(e,r),n=C(o,r);return d>=a&&d>=n?(l=[e,o,r],t=l[0],c=l[1],s=l[2]):n>=d&&n>=a?(i=[o,e,r],t=i[0],c=i[1],s=i[2]):(B=[o,r,e],t=B[0],c=B[1],s=B[2]),(s.x-c.x)*(t.y-c.y)-(s.y-c.y)*(t.x-c.x)<0&&(k=[s,t],t=k[0],s=k[1]),{bottomLeft:t,topLeft:c,topRight:s};var l,i,B,k}function s(o,e,r,c){var s=(t(d(o,r,c,5))/7+t(d(o,e,c,5))/7+t(d(r,o,c,5))/7+t(d(e,o,c,5))/7)/4;if(s<1)throw new Error("Invalid module size");var a=Math.round(C(o,e)/s),n=Math.round(C(o,r)/s),l=Math.floor((a+n)/2)+7;switch(l%4){case 0:l++;break;case 2:l--}return{dimension:l,moduleSize:s}}function a(o,e,r,t){var c,s,a,d,n=[{x:Math.floor(o.x),y:Math.floor(o.y)}],l=Math.abs(e.y-o.y)>Math.abs(e.x-o.x);l?(c=Math.floor(o.y),s=Math.floor(o.x),a=Math.floor(e.y),d=Math.floor(e.x)):(c=Math.floor(o.x),s=Math.floor(o.y),a=Math.floor(e.x),d=Math.floor(e.y));for(var i=Math.abs(a-c),B=Math.abs(d-s),k=Math.floor(-i/2),u=c<a?1:-1,m=s<d?1:-1,f=!0,w=c,P=s;w!==a+u;w+=u){var v=l?P:w,h=l?w:P;if(r.get(v,h)!==f&&(f=!f,n.push({x:v,y:h}),n.length===t+1))break;if((k+=B)>0){if(P===d)break;P+=m,k-=i}}for(var p=[],y=0;y<t;y++)n[y]&&n[y+1]?p.push(C(n[y],n[y+1])):p.push(0);return p}function d(o,e,r,t){var c=e.y-o.y,s=e.x-o.x,d=a(o,e,r,Math.ceil(t/2)),n=a(o,{x:o.x-s,y:o.y-c},r,Math.ceil(t/2)),l=d.shift()+n.shift()-1;return(i=n.concat(l)).concat.apply(i,d);var i}function n(o,e){var r=t(o)/t(e),c=0;return e.forEach(function(e,t){c+=Math.pow(o[t]-e*r,2)}),{averageSize:r,error:c}}function l(o,e,r){try{var t=d(o,{x:-1,y:o.y},r,e.length),c=d(o,{x:o.x,y:-1},r,e.length),s={x:Math.max(0,o.x-o.y)-1,y:Math.max(0,o.y-o.x)-1},a=d(o,s,r,e.length),l={x:Math.min(r.width,o.x+o.y)+1,y:Math.min(r.height,o.y+o.x)+1},i=d(o,l,r,e.length),B=n(t,e),k=n(c,e),u=n(a,e),C=n(i,e),m=Math.sqrt(B.error*B.error+k.error*k.error+u.error*u.error+C.error*C.error),f=(B.averageSize+k.averageSize+u.averageSize+C.averageSize)/4;return m+(Math.pow(B.averageSize-f,2)+Math.pow(k.averageSize-f,2)+Math.pow(u.averageSize-f,2)+Math.pow(C.averageSize-f,2))/f}catch(o){return 1/0}}function i(o){for(var e=[],r=[],a=[],d=[],n=0;n<=o.height;n++)!function(c){for(var s=0,n=!1,l=[0,0,0,0,0],i=-1;i<=o.width;i++)!function(e){var a=o.get(e,c);if(a===n)s++;else{l=[l[1],l[2],l[3],l[4],s],s=1,n=a;var i=t(l)/7,B=Math.abs(l[0]-i)<i&&Math.abs(l[1]-i)<i&&Math.abs(l[2]-3*i)<3*i&&Math.abs(l[3]-i)<i&&Math.abs(l[4]-i)<i&&!a,C=t(l.slice(-3))/3,m=Math.abs(l[2]-C)<C&&Math.abs(l[3]-C)<C&&Math.abs(l[4]-C)<C&&a;if(B){var f=e-l[3]-l[4],w=f-l[2],P={startX:w,endX:f,y:c},v=r.filter(function(o){return w>=o.bottom.startX&&w<=o.bottom.endX||f>=o.bottom.startX&&w<=o.bottom.endX||w<=o.bottom.startX&&f>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:r.push({top:P,bottom:P})}if(m){var h=e-l[4],p=h-l[3],P={startX:p,y:c,endX:h},v=d.filter(function(o){return p>=o.bottom.startX&&p<=o.bottom.endX||h>=o.bottom.startX&&p<=o.bottom.endX||p<=o.bottom.startX&&h>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:d.push({top:P,bottom:P})}}}(i);e.push.apply(e,r.filter(function(o){return o.bottom.y!==c&&o.bottom.y-o.top.y>=2})),r=r.filter(function(o){return o.bottom.y===c}),a.push.apply(a,d.filter(function(o){return o.bottom.y!==c})),d=d.filter(function(o){return o.bottom.y===c})}(n);e.push.apply(e,r.filter(function(o){return o.bottom.y-o.top.y>=2})),a.push.apply(a,d);var i=e.filter(function(o){return o.bottom.y-o.top.y>=2}).map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.round(r),Math.round(c))){\nvar s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1],a=t(s)/s.length;return{score:l({x:Math.round(r),y:Math.round(c)},[1,1,3,1,1],o),x:r,y:c,size:a}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}).map(function(o,e,r){if(e>B)return null;var t=r.filter(function(o,r){return e!==r}).map(function(e){return{x:e.x,y:e.y,score:e.score+Math.pow(e.size-o.size,2)/o.size,size:e.size}}).sort(function(o,e){return o.score-e.score});if(t.length<2)return null;var c=o.score+t[0].score+t[1].score;return{points:[o].concat(t.slice(0,2)),score:c}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score});if(0===i.length)return null;var m,f,w=c(i[0].points[0],i[0].points[1],i[0].points[2]),P=w.topRight,v=w.topLeft,h=w.bottomLeft;try{L=s(v,P,h,o),m=L.dimension,f=L.moduleSize}catch(o){return null}var p={x:P.x-v.x+h.x,y:P.y-v.y+h.y},y=(C(v,h)+C(v,P))/2/f,b=1-3/y,g={x:v.x+b*(p.x-v.x),y:v.y+b*(p.y-v.y)},x=a.map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.floor(r),Math.floor(c))){var s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1];t(s);return{x:r,y:c,score:l({x:Math.floor(r),y:Math.floor(c)},[1,1,1],o)+C({x:r,y:c},g)}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}),M=y>=15&&x.length?x[0]:g;return{alignmentPattern:{x:M.x,y:M.y},bottomLeft:{x:h.x,y:h.y},dimension:m,topLeft:{x:v.x,y:v.y},topRight:{x:P.x,y:P.y}};var L}Object.defineProperty(e,"__esModule",{value:!0});var B=4,k=.5,u=1.5,C=function(o,e){return Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2))};e.locate=i}]).default}),self.addEventListener("message",function(o){var e=jsQR(o.data.data,o.data.width,o.data.height);e?postMessage(e.data):postMessage(null)});'], {
            type: "application/javascript"
        }),
        m = ["delay", "legacyMode", "facingMode"];
    e.exports = (n = r = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return r.els = {}, r.state = {
                mirrorVideo: !1
            }, r.initiate = r.initiate.bind(r), r.initiateLegacyMode = r.initiateLegacyMode.bind(r), r.check = r.check.bind(r), r.handleVideo = r.handleVideo.bind(r), r.handleLoadStart = r.handleLoadStart.bind(r), r.handleInputChange = r.handleInputChange.bind(r), r.clearComponent = r.clearComponent.bind(r), r.handleReaderLoad = r.handleReaderLoad.bind(r), r.openImageDialog = r.openImageDialog.bind(r), r.handleWorkerMessage = r.handleWorkerMessage.bind(r), r.setRefFactory = r.setRefFactory.bind(r), r
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
        }(t, e), i(t, [{
            key: "componentDidMount",
            value: function() {
                this.worker = new Worker(URL.createObjectURL(h)), this.worker.onmessage = this.handleWorkerMessage, this.props.legacyMode ? this.initiateLegacyMode() : this.initiate()
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                var t = p(this.props, e, m),
                    r = !0,
                    o = !1,
                    n = void 0;
                try {
                    for (var a, i = t[Symbol.iterator](); !(r = (a = i.next()).done); r = !0) {
                        var s = a.value;
                        if ("facingMode" == s) {
                            this.clearComponent(), this.initiate(e);
                            break
                        }
                        if ("delay" == s) 0 != this.props.delay || e.legacyMode || (this.timeout = setTimeout(this.check, e.delay)), 0 == e.delay && clearTimeout(this.timeout);
                        else if ("legacyMode" == s) {
                            this.props.legacyMode && !e.legacyMode ? (this.clearComponent(), this.initiate(e)) : (this.clearComponent(), this.componentDidUpdate = this.initiateLegacyMode);
                            break
                        }
                    }
                } catch (e) {
                    o = !0, n = e
                } finally {
                    try {
                        !r && i.return && i.return()
                    } finally {
                        if (o) throw n
                    }
                }
            }
        }, {
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return t !== this.state || p(this.props, e, m).length > 0
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.worker && (this.worker.terminate(), this.worker = void 0), this.clearComponent()
            }
        }, {
            key: "clearComponent",
            value: function() {
                this.timeout && (clearTimeout(this.timeout), this.timeout = void 0), this.stopCamera && this.stopCamera(), this.reader && this.reader.removeEventListener("load", this.handleReaderLoad), this.els.img && this.els.img.removeEventListener("load", this.check)
            }
        }, {
            key: "initiate",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                    t = e.onError,
                    r = e.facingMode,
                    o = /firefox/i.test(navigator.userAgent),
                    n = {};
                navigator.mediaDevices && "function" == typeof navigator.mediaDevices.getSupportedConstraints && (n = navigator.mediaDevices.getSupportedConstraints());
                var a = {};
                n.facingMode && (a.facingMode = {
                    ideal: r
                }), n.frameRate && (a.frameRate = {
                    ideal: 25,
                    min: 10
                });
                var i = n.facingMode || o ? Promise.resolve(e.constraints || a) : u(r).then((function(t) {
                    return Object.assign({}, {
                        deviceId: t
                    }, e.constraints)
                }));
                i.then((function(e) {
                    return navigator.mediaDevices.getUserMedia({
                        video: e
                    })
                })).then(this.handleVideo).catch(t)
            }
        }, {
            key: "handleVideo",
            value: function(e) {
                var t = this.els.preview,
                    r = this.props.facingMode;
                if (!t) return setTimeout(this.handleVideo, 200, e);
                void 0 !== (t || {}).srcObject ? t.srcObject = e : void 0 !== t.mozSrcObject ? t.mozSrcObject = e : window.URL.createObjectURL ? t.src = window.URL.createObjectURL(e) : window.webkitURL ? t.src = window.webkitURL.createObjectURL(e) : t.src = e, t.playsInline = !0;
                var o = e.getTracks()[0];
                this.stopCamera = o.stop.bind(o), t.addEventListener("loadstart", this.handleLoadStart), this.setState({
                    mirrorVideo: "user" == r,
                    streamLabel: o.label
                })
            }
        }, {
            key: "handleLoadStart",
            value: function() {
                var e = this.props,
                    t = e.delay,
                    r = e.onLoad,
                    o = this.state,
                    n = o.mirrorVideo,
                    a = o.streamLabel,
                    i = this.els.preview;
                i.play(), "function" == typeof r && r({
                    mirrorVideo: n,
                    streamLabel: a
                }), "number" == typeof t && (this.timeout = setTimeout(this.check, t)), i.removeEventListener("loadstart", this.handleLoadStart)
            }
        }, {
            key: "check",
            value: function() {
                var e = this.props,
                    t = e.legacyMode,
                    r = e.resolution,
                    o = e.delay,
                    n = this.els,
                    a = n.preview,
                    i = n.canvas,
                    s = n.img,
                    c = Math.floor(t ? s.naturalWidth : a.videoWidth),
                    d = Math.floor(t ? s.naturalHeight : a.videoHeight),
                    l = 0,
                    u = 0;
                if (t) {
                    var p = r / (c > d ? c : d);
                    d *= p, c *= p, i.width = c, i.height = d
                } else {
                    var f = r / (c < d ? c : d);
                    u = ((d *= f) - r) / 2 * -1, l = ((c *= f) - r) / 2 * -1, i.width = r, i.height = r
                }
                var h = a && a.readyState === a.HAVE_ENOUGH_DATA;
                if (t || h) {
                    var m = i.getContext("2d");
                    m.drawImage(t ? s : a, l, u, c, d);
                    var g = m.getImageData(0, 0, i.width, i.height);
                    this.worker.postMessage(g)
                } else this.timeout = setTimeout(this.check, o)
            }
        }, {
            key: "handleWorkerMessage",
            value: function(e) {
                var t = this.props,
                    r = t.onScan,
                    o = t.legacyMode,
                    n = t.delay;
                r(e.data || null), !o && "number" == typeof n && this.worker && (this.timeout = setTimeout(this.check, n))
            }
        }, {
            key: "initiateLegacyMode",
            value: function() {
                this.reader = new FileReader, this.reader.addEventListener("load", this.handleReaderLoad), this.els.img.addEventListener("load", this.check, !1), this.componentDidUpdate = void 0, "function" == typeof this.props.onLoad && this.props.onLoad()
            }
        }, {
            key: "handleInputChange",
            value: function(e) {
                var t = e.target.files[0];
                this.reader.readAsDataURL(t)
            }
        }, {
            key: "handleReaderLoad",
            value: function(e) {
                this.els.img.src = e.target.result
            }
        }, {
            key: "openImageDialog",
            value: function() {
                this.els.input.click()
            }
        }, {
            key: "setRefFactory",
            value: function(e) {
                var t = this;
                return function(r) {
                    t.els[e] = r
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.style,
                    r = e.className,
                    o = e.onImageLoad,
                    n = e.legacyMode,
                    i = e.showViewFinder,
                    c = (e.facingMode, {
                        display: "none"
                    }),
                    d = {
                        top: 0,
                        left: 0,
                        display: "block",
                        position: "absolute",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%"
                    },
                    l = a({}, d, {
                        objectFit: "cover",
                        transform: this.state.mirrorVideo ? "scaleX(-1)" : void 0
                    }),
                    u = a({}, d, {
                        objectFit: "scale-down"
                    });
                return s.createElement("section", {
                    className: r,
                    style: t
                }, s.createElement("section", {
                    style: {
                        overflow: "hidden",
                        position: "relative",
                        width: "100%",
                        paddingTop: "100%"
                    }
                }, !n && i ? s.createElement("div", {
                    style: {
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        boxSizing: "border-box",
                        border: "50px solid rgba(0, 0, 0, 0.3)",
                        boxShadow: "inset 0 0 0 5px rgba(255, 0, 0, 0.5)",
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }
                }) : null, n ? s.createElement("input", {
                    style: c,
                    type: "file",
                    accept: "image/*",
                    ref: this.setRefFactory("input"),
                    onChange: this.handleInputChange
                }) : null, n ? s.createElement("img", {
                    style: u,
                    ref: this.setRefFactory("img"),
                    onLoad: o
                }) : s.createElement("video", {
                    style: l,
                    ref: this.setRefFactory("preview")
                }), s.createElement("canvas", {
                    style: c,
                    ref: this.setRefFactory("canvas")
                })))
            }
        }]), t
    }(c), r.propTypes = {
        onScan: d.func.isRequired,
        onError: d.func.isRequired,
        onLoad: d.func,
        onImageLoad: d.func,
        delay: d.oneOfType([d.number, d.bool]),
        facingMode: d.oneOf(["user", "environment"]),
        legacyMode: d.bool,
        resolution: d.number,
        showViewFinder: d.bool,
        style: d.any,
        className: d.string,
        constraints: d.object
    }, r.defaultProps = {
        delay: 500,
        resolution: 600,
        facingMode: "environment",
        showViewFinder: !0,
        constraints: null
    }, n)
})), o.register("caTVa", (function(e, t) {
    var r = o("h62br").NoVideoInputDevicesError;

    function n(e, t, r) {
        return e.length > 0 ? e[0].deviceId : 1 == t.length || "user" == r ? t[0].deviceId : t[1].deviceId
    }
    var a = function(e) {
        return "environment" == e ? /rear|back|environment/gi : /front|user|face/gi
    };
    e.exports = {
        getDeviceId: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
            return new Promise((function(o, n) {
                var i = void 0;
                try {
                    i = navigator.mediaDevices.enumerateDevices()
                } catch (e) {
                    n(new r)
                }
                i.then((function(i) {
                    var s = i.filter((function(e) {
                        return "videoinput" == e.kind
                    }));
                    if (s.length < 1) n(new r);
                    else {
                        var c = a(e),
                            d = s.filter((function(e) {
                                var t = e.label;
                                return c.test(t)
                            }));
                        o(t(d, s, e))
                    }
                }))
            }))
        },
        getFacingModePattern: a
    }
})), o.register("h62br", (function(e, t) {
    function r() {
        this.name = "NoVideoInputDevicesError", this.message = "No video input devices found"
    }
    r.prototype = new Error, e.exports = {
        NoVideoInputDevicesError: r
    }
})), o.register("bk9Hw", (function(e, t) {
    e.exports = function(e, t, r) {
        var o = [];
        return r.forEach((function(r) {
            e[r] != t[r] && o.push(r)
        })), o
    }
})), o.register("dy616", (function(e, t) {
    e.exports = function(e, t) {
        e = e || [], t = t || {};
        try {
            return new Blob(e, t)
        } catch (n) {
            if ("TypeError" !== n.name) throw n;
            for (var r = new(window.BlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder), o = 0; o < e.length; o += 1) r.append(e[o]);
            return r.getBlob(t.type)
        }
    }
})), o.register("eBYTx", (function(e, t) {
    (0, o("kX78X").adapterFactory)({
        window: "undefined" == typeof window ? void 0 : window
    })
})), o.register("kX78X", (function(e, r) {
    t(e.exports, "adapterFactory", (function() {
        return l
    }));
    var n = o("5HIzo"),
        a = o("7yB2b"),
        i = o("1s2yO"),
        s = o("5qah9"),
        c = o("8rf2v"),
        d = o("g1Mt2");

    function l({
        window: e
    } = {}, t = {
        shimChrome: !0,
        shimFirefox: !0,
        shimEdge: !0,
        shimSafari: !0
    }) {
        const r = n.log,
            o = n.detectBrowser(e),
            l = {
                browserDetails: o,
                commonShim: d,
                extractVersion: n.extractVersion,
                disableLog: n.disableLog,
                disableWarnings: n.disableWarnings
            };
        switch (o.browser) {
            case "chrome":
                if (!a || !a.shimPeerConnection || !t.shimChrome) return r("Chrome shim is not included in this adapter release."), l;
                if (null === o.version) return r("Chrome shim can not determine version, not shimming."), l;
                r("adapter.js shimming chrome."), l.browserShim = a, a.shimGetUserMedia(e), a.shimMediaStream(e), a.shimPeerConnection(e), a.shimOnTrack(e), a.shimAddTrackRemoveTrack(e), a.shimGetSendersWithDtmf(e), a.shimGetStats(e), a.shimSenderReceiverGetStats(e), a.fixNegotiationNeeded(e), d.shimRTCIceCandidate(e), d.shimConnectionState(e), d.shimMaxMessageSize(e), d.shimSendThrowTypeError(e), d.removeAllowExtmapMixed(e);
                break;
            case "firefox":
                if (!s || !s.shimPeerConnection || !t.shimFirefox) return r("Firefox shim is not included in this adapter release."), l;
                r("adapter.js shimming firefox."), l.browserShim = s, s.shimGetUserMedia(e), s.shimPeerConnection(e), s.shimOnTrack(e), s.shimRemoveStream(e), s.shimSenderGetStats(e), s.shimReceiverGetStats(e), s.shimRTCDataChannel(e), s.shimAddTransceiver(e), s.shimGetParameters(e), s.shimCreateOffer(e), s.shimCreateAnswer(e), d.shimRTCIceCandidate(e), d.shimConnectionState(e), d.shimMaxMessageSize(e), d.shimSendThrowTypeError(e);
                break;
            case "edge":
                if (!i || !i.shimPeerConnection || !t.shimEdge) return r("MS edge shim is not included in this adapter release."), l;
                r("adapter.js shimming edge."), l.browserShim = i, i.shimGetUserMedia(e), i.shimGetDisplayMedia(e), i.shimPeerConnection(e), i.shimReplaceTrack(e), d.shimMaxMessageSize(e), d.shimSendThrowTypeError(e);
                break;
            case "safari":
                if (!c || !t.shimSafari) return r("Safari shim is not included in this adapter release."), l;
                r("adapter.js shimming safari."), l.browserShim = c, c.shimRTCIceServerUrls(e), c.shimCreateOfferLegacy(e), c.shimCallbacksAPI(e), c.shimLocalStreamsAPI(e), c.shimRemoteStreamsAPI(e), c.shimTrackEventTransceiver(e), c.shimGetUserMedia(e), c.shimAudioContext(e), d.shimRTCIceCandidate(e), d.shimMaxMessageSize(e), d.shimSendThrowTypeError(e), d.removeAllowExtmapMixed(e);
                break;
            default:
                r("Unsupported browser!")
        }
        return l
    }
})), o.register("5HIzo", (function(e, r) {
    t(e.exports, "extractVersion", (function() {
        return a
    })), t(e.exports, "wrapPeerConnectionEvent", (function() {
        return i
    })), t(e.exports, "disableLog", (function() {
        return s
    })), t(e.exports, "disableWarnings", (function() {
        return c
    })), t(e.exports, "log", (function() {
        return d
    })), t(e.exports, "deprecated", (function() {
        return l
    })), t(e.exports, "detectBrowser", (function() {
        return u
    })), t(e.exports, "compactObject", (function() {
        return f
    })), t(e.exports, "filterStats", (function() {
        return m
    }));
    let o = !0,
        n = !0;

    function a(e, t, r) {
        const o = e.match(t);
        return o && o.length >= r && parseInt(o[r], 10)
    }

    function i(e, t, r) {
        if (!e.RTCPeerConnection) return;
        const o = e.RTCPeerConnection.prototype,
            n = o.addEventListener;
        o.addEventListener = function(e, o) {
            if (e !== t) return n.apply(this, arguments);
            const a = e => {
                const t = r(e);
                t && (o.handleEvent ? o.handleEvent(t) : o(t))
            };
            return this._eventMap = this._eventMap || {}, this._eventMap[t] || (this._eventMap[t] = new Map), this._eventMap[t].set(o, a), n.apply(this, [e, a])
        };
        const a = o.removeEventListener;
        o.removeEventListener = function(e, r) {
            if (e !== t || !this._eventMap || !this._eventMap[t]) return a.apply(this, arguments);
            if (!this._eventMap[t].has(r)) return a.apply(this, arguments);
            const o = this._eventMap[t].get(r);
            return this._eventMap[t].delete(r), 0 === this._eventMap[t].size && delete this._eventMap[t], 0 === Object.keys(this._eventMap).length && delete this._eventMap, a.apply(this, [e, o])
        }, Object.defineProperty(o, "on" + t, {
            get() {
                return this["_on" + t]
            },
            set(e) {
                this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e)
            },
            enumerable: !0,
            configurable: !0
        })
    }

    function s(e) {
        return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (o = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
    }

    function c(e) {
        return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (n = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
    }

    function d() {
        if ("object" == typeof window) {
            if (o) return;
            "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
        }
    }

    function l(e, t) {
        n && console.warn(e + " is deprecated, please use " + t + " instead.")
    }

    function u(e) {
        const t = {
            browser: null,
            version: null
        };
        if (void 0 === e || !e.navigator) return t.browser = "Not a browser.", t;
        const {
            navigator: r
        } = e;
        if (r.mozGetUserMedia) t.browser = "firefox", t.version = a(r.userAgent, /Firefox\/(\d+)\./, 1);
        else if (r.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer) t.browser = "chrome", t.version = a(r.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
        else if (r.mediaDevices && r.userAgent.match(/Edge\/(\d+).(\d+)$/)) t.browser = "edge", t.version = a(r.userAgent, /Edge\/(\d+).(\d+)$/, 2);
        else {
            if (!e.RTCPeerConnection || !r.userAgent.match(/AppleWebKit\/(\d+)\./)) return t.browser = "Not a supported browser.", t;
            t.browser = "safari", t.version = a(r.userAgent, /AppleWebKit\/(\d+)\./, 1), t.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype
        }
        return t
    }

    function p(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function f(e) {
        return p(e) ? Object.keys(e).reduce((function(t, r) {
            const o = p(e[r]),
                n = o ? f(e[r]) : e[r],
                a = o && !Object.keys(n).length;
            return void 0 === n || a ? t : Object.assign(t, {
                [r]: n
            })
        }), {}) : e
    }

    function h(e, t, r) {
        t && !r.has(t.id) && (r.set(t.id, t), Object.keys(t).forEach((o => {
            o.endsWith("Id") ? h(e, e.get(t[o]), r) : o.endsWith("Ids") && t[o].forEach((t => {
                h(e, e.get(t), r)
            }))
        })))
    }

    function m(e, t, r) {
        const o = r ? "outbound-rtp" : "inbound-rtp",
            n = new Map;
        if (null === t) return n;
        const a = [];
        return e.forEach((e => {
            "track" === e.type && e.trackIdentifier === t.id && a.push(e)
        })), a.forEach((t => {
            e.forEach((r => {
                r.type === o && r.trackId === t.id && h(e, r, n)
            }))
        })), n
    }
})), o.register("7yB2b", (function(e, r) {
    t(e.exports, "shimMediaStream", (function() {
        return a
    })), t(e.exports, "shimOnTrack", (function() {
        return i
    })), t(e.exports, "shimGetSendersWithDtmf", (function() {
        return s
    })), t(e.exports, "shimGetStats", (function() {
        return c
    })), t(e.exports, "shimSenderReceiverGetStats", (function() {
        return d
    })), t(e.exports, "shimAddTrackRemoveTrackWithNative", (function() {
        return l
    })), t(e.exports, "shimAddTrackRemoveTrack", (function() {
        return u
    })), t(e.exports, "shimPeerConnection", (function() {
        return p
    })), t(e.exports, "fixNegotiationNeeded", (function() {
        return f
    })), t(e.exports, "shimGetUserMedia", (function() {
        return o("bV6xM").shimGetUserMedia
    })), t(e.exports, "shimGetDisplayMedia", (function() {
        return o("4MhvK").shimGetDisplayMedia
    }));
    var n = o("5HIzo");
    o("bV6xM"), o("4MhvK");

    function a(e) {
        e.MediaStream = e.MediaStream || e.webkitMediaStream
    }

    function i(e) {
        if ("object" == typeof e && e.RTCPeerConnection && !("ontrack" in e.RTCPeerConnection.prototype)) {
            Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                get() {
                    return this._ontrack
                },
                set(e) {
                    this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e)
                },
                enumerable: !0,
                configurable: !0
            });
            const t = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                return this._ontrackpoly || (this._ontrackpoly = t => {
                    t.stream.addEventListener("addtrack", (r => {
                        let o;
                        o = e.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((e => e.track && e.track.id === r.track.id)) : {
                            track: r.track
                        };
                        const n = new Event("track");
                        n.track = r.track, n.receiver = o, n.transceiver = {
                            receiver: o
                        }, n.streams = [t.stream], this.dispatchEvent(n)
                    })), t.stream.getTracks().forEach((r => {
                        let o;
                        o = e.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((e => e.track && e.track.id === r.id)) : {
                            track: r
                        };
                        const n = new Event("track");
                        n.track = r, n.receiver = o, n.transceiver = {
                            receiver: o
                        }, n.streams = [t.stream], this.dispatchEvent(n)
                    }))
                }, this.addEventListener("addstream", this._ontrackpoly)), t.apply(this, arguments)
            }
        } else n.wrapPeerConnectionEvent(e, "track", (e => (e.transceiver || Object.defineProperty(e, "transceiver", {
            value: {
                receiver: e.receiver
            }
        }), e)))
    }

    function s(e) {
        if ("object" == typeof e && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
            const t = function(e, t) {
                return {
                    track: t,
                    get dtmf() {
                        return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf
                    },
                    _pc: e
                }
            };
            if (!e.RTCPeerConnection.prototype.getSenders) {
                e.RTCPeerConnection.prototype.getSenders = function() {
                    return this._senders = this._senders || [], this._senders.slice()
                };
                const r = e.RTCPeerConnection.prototype.addTrack;
                e.RTCPeerConnection.prototype.addTrack = function(e, o) {
                    let n = r.apply(this, arguments);
                    return n || (n = t(this, e), this._senders.push(n)), n
                };
                const o = e.RTCPeerConnection.prototype.removeTrack;
                e.RTCPeerConnection.prototype.removeTrack = function(e) {
                    o.apply(this, arguments);
                    const t = this._senders.indexOf(e); - 1 !== t && this._senders.splice(t, 1)
                }
            }
            const r = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function(e) {
                this._senders = this._senders || [], r.apply(this, [e]), e.getTracks().forEach((e => {
                    this._senders.push(t(this, e))
                }))
            };
            const o = e.RTCPeerConnection.prototype.removeStream;
            e.RTCPeerConnection.prototype.removeStream = function(e) {
                this._senders = this._senders || [], o.apply(this, [e]), e.getTracks().forEach((e => {
                    const t = this._senders.find((t => t.track === e));
                    t && this._senders.splice(this._senders.indexOf(t), 1)
                }))
            }
        } else if ("object" == typeof e && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
            const t = e.RTCPeerConnection.prototype.getSenders;
            e.RTCPeerConnection.prototype.getSenders = function() {
                const e = t.apply(this, []);
                return e.forEach((e => e._pc = this)), e
            }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                get() {
                    return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
                }
            })
        }
    }

    function c(e) {
        if (!e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection.prototype.getStats;
        e.RTCPeerConnection.prototype.getStats = function() {
            const [e, r, o] = arguments;
            if (arguments.length > 0 && "function" == typeof e) return t.apply(this, arguments);
            if (0 === t.length && (0 === arguments.length || "function" != typeof e)) return t.apply(this, []);
            const n = function(e) {
                    const t = {};
                    return e.result().forEach((e => {
                        const r = {
                            id: e.id,
                            timestamp: e.timestamp,
                            type: {
                                localcandidate: "local-candidate",
                                remotecandidate: "remote-candidate"
                            } [e.type] || e.type
                        };
                        e.names().forEach((t => {
                            r[t] = e.stat(t)
                        })), t[r.id] = r
                    })), t
                },
                a = function(e) {
                    return new Map(Object.keys(e).map((t => [t, e[t]])))
                };
            if (arguments.length >= 2) {
                const o = function(e) {
                    r(a(n(e)))
                };
                return t.apply(this, [o, e])
            }
            return new Promise(((e, r) => {
                t.apply(this, [function(t) {
                    e(a(n(t)))
                }, r])
            })).then(r, o)
        }
    }

    function d(e) {
        if (!("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) return;
        if (!("getStats" in e.RTCRtpSender.prototype)) {
            const t = e.RTCPeerConnection.prototype.getSenders;
            t && (e.RTCPeerConnection.prototype.getSenders = function() {
                const e = t.apply(this, []);
                return e.forEach((e => e._pc = this)), e
            });
            const r = e.RTCPeerConnection.prototype.addTrack;
            r && (e.RTCPeerConnection.prototype.addTrack = function() {
                const e = r.apply(this, arguments);
                return e._pc = this, e
            }), e.RTCRtpSender.prototype.getStats = function() {
                const e = this;
                return this._pc.getStats().then((t => n.filterStats(t, e.track, !0)))
            }
        }
        if (!("getStats" in e.RTCRtpReceiver.prototype)) {
            const t = e.RTCPeerConnection.prototype.getReceivers;
            t && (e.RTCPeerConnection.prototype.getReceivers = function() {
                const e = t.apply(this, []);
                return e.forEach((e => e._pc = this)), e
            }), n.wrapPeerConnectionEvent(e, "track", (e => (e.receiver._pc = e.srcElement, e))), e.RTCRtpReceiver.prototype.getStats = function() {
                const e = this;
                return this._pc.getStats().then((t => n.filterStats(t, e.track, !1)))
            }
        }
        if (!("getStats" in e.RTCRtpSender.prototype) || !("getStats" in e.RTCRtpReceiver.prototype)) return;
        const t = e.RTCPeerConnection.prototype.getStats;
        e.RTCPeerConnection.prototype.getStats = function() {
            if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
                const e = arguments[0];
                let t, r, o;
                return this.getSenders().forEach((r => {
                    r.track === e && (t ? o = !0 : t = r)
                })), this.getReceivers().forEach((t => (t.track === e && (r ? o = !0 : r = t), t.track === e))), o || t && r ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : t ? t.getStats() : r ? r.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
            }
            return t.apply(this, arguments)
        }
    }

    function l(e) {
        e.RTCPeerConnection.prototype.getLocalStreams = function() {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((e => this._shimmedLocalStreams[e][0]))
        };
        const t = e.RTCPeerConnection.prototype.addTrack;
        e.RTCPeerConnection.prototype.addTrack = function(e, r) {
            if (!r) return t.apply(this, arguments);
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            const o = t.apply(this, arguments);
            return this._shimmedLocalStreams[r.id] ? -1 === this._shimmedLocalStreams[r.id].indexOf(o) && this._shimmedLocalStreams[r.id].push(o) : this._shimmedLocalStreams[r.id] = [r, o], o
        };
        const r = e.RTCPeerConnection.prototype.addStream;
        e.RTCPeerConnection.prototype.addStream = function(e) {
            this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach((e => {
                if (this.getSenders().find((t => t.track === e))) throw new DOMException("Track already exists.", "InvalidAccessError")
            }));
            const t = this.getSenders();
            r.apply(this, arguments);
            const o = this.getSenders().filter((e => -1 === t.indexOf(e)));
            this._shimmedLocalStreams[e.id] = [e].concat(o)
        };
        const o = e.RTCPeerConnection.prototype.removeStream;
        e.RTCPeerConnection.prototype.removeStream = function(e) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], o.apply(this, arguments)
        };
        const n = e.RTCPeerConnection.prototype.removeTrack;
        e.RTCPeerConnection.prototype.removeTrack = function(e) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach((t => {
                const r = this._shimmedLocalStreams[t].indexOf(e); - 1 !== r && this._shimmedLocalStreams[t].splice(r, 1), 1 === this._shimmedLocalStreams[t].length && delete this._shimmedLocalStreams[t]
            })), n.apply(this, arguments)
        }
    }

    function u(e) {
        if (!e.RTCPeerConnection) return;
        const t = n.detectBrowser(e);
        if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return l(e);
        const r = e.RTCPeerConnection.prototype.getLocalStreams;
        e.RTCPeerConnection.prototype.getLocalStreams = function() {
            const e = r.apply(this);
            return this._reverseStreams = this._reverseStreams || {}, e.map((e => this._reverseStreams[e.id]))
        };
        const o = e.RTCPeerConnection.prototype.addStream;
        e.RTCPeerConnection.prototype.addStream = function(t) {
            if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t.getTracks().forEach((e => {
                    if (this.getSenders().find((t => t.track === e))) throw new DOMException("Track already exists.", "InvalidAccessError")
                })), !this._reverseStreams[t.id]) {
                const r = new e.MediaStream(t.getTracks());
                this._streams[t.id] = r, this._reverseStreams[r.id] = t, t = r
            }
            o.apply(this, [t])
        };
        const a = e.RTCPeerConnection.prototype.removeStream;

        function i(e, t) {
            let r = t.sdp;
            return Object.keys(e._reverseStreams || []).forEach((t => {
                const o = e._reverseStreams[t],
                    n = e._streams[o.id];
                r = r.replace(new RegExp(n.id, "g"), o.id)
            })), new RTCSessionDescription({
                type: t.type,
                sdp: r
            })
        }

        function s(e, t) {
            let r = t.sdp;
            return Object.keys(e._reverseStreams || []).forEach((t => {
                const o = e._reverseStreams[t],
                    n = e._streams[o.id];
                r = r.replace(new RegExp(o.id, "g"), n.id)
            })), new RTCSessionDescription({
                type: t.type,
                sdp: r
            })
        }
        e.RTCPeerConnection.prototype.removeStream = function(e) {
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, a.apply(this, [this._streams[e.id] || e]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id]
        }, e.RTCPeerConnection.prototype.addTrack = function(t, r) {
            if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
            const o = [].slice.call(arguments, 1);
            if (1 !== o.length || !o[0].getTracks().find((e => e === t))) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
            const n = this.getSenders().find((e => e.track === t));
            if (n) throw new DOMException("Track already exists.", "InvalidAccessError");
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
            const a = this._streams[r.id];
            if (a) a.addTrack(t), Promise.resolve().then((() => {
                this.dispatchEvent(new Event("negotiationneeded"))
            }));
            else {
                const o = new e.MediaStream([t]);
                this._streams[r.id] = o, this._reverseStreams[o.id] = r, this.addStream(o)
            }
            return this.getSenders().find((e => e.track === t))
        }, ["createOffer", "createAnswer"].forEach((function(t) {
            const r = e.RTCPeerConnection.prototype[t],
                o = {
                    [t]() {
                        const e = arguments;
                        return arguments.length && "function" == typeof arguments[0] ? r.apply(this, [t => {
                            const r = i(this, t);
                            e[0].apply(null, [r])
                        }, t => {
                            e[1] && e[1].apply(null, t)
                        }, arguments[2]]) : r.apply(this, arguments).then((e => i(this, e)))
                    }
                };
            e.RTCPeerConnection.prototype[t] = o[t]
        }));
        const c = e.RTCPeerConnection.prototype.setLocalDescription;
        e.RTCPeerConnection.prototype.setLocalDescription = function() {
            return arguments.length && arguments[0].type ? (arguments[0] = s(this, arguments[0]), c.apply(this, arguments)) : c.apply(this, arguments)
        };
        const d = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
        Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
            get() {
                const e = d.get.apply(this);
                return "" === e.type ? e : i(this, e)
            }
        }), e.RTCPeerConnection.prototype.removeTrack = function(e) {
            if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
            if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
            if (!(e._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
            let t;
            this._streams = this._streams || {}, Object.keys(this._streams).forEach((r => {
                this._streams[r].getTracks().find((t => e.track === t)) && (t = this._streams[r])
            })), t && (1 === t.getTracks().length ? this.removeStream(this._reverseStreams[t.id]) : t.removeTrack(e.track), this.dispatchEvent(new Event("negotiationneeded")))
        }
    }

    function p(e) {
        const t = n.detectBrowser(e);
        if (!e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), !e.RTCPeerConnection) return;
        const r = 0 === e.RTCPeerConnection.prototype.addIceCandidate.length;
        t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(t) {
            const r = e.RTCPeerConnection.prototype[t],
                o = {
                    [t]() {
                        return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments)
                    }
                };
            e.RTCPeerConnection.prototype[t] = o[t]
        }));
        const o = e.RTCPeerConnection.prototype.addIceCandidate;
        e.RTCPeerConnection.prototype.addIceCandidate = function() {
            return r || arguments[0] ? t.version < 78 && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : o.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
        }
    }

    function f(e) {
        const t = n.detectBrowser(e);
        n.wrapPeerConnectionEvent(e, "negotiationneeded", (e => {
            const r = e.target;
            if (!(t.version < 72 || r.getConfiguration && "plan-b" === r.getConfiguration().sdpSemantics) || "stable" === r.signalingState) return e
        }))
    }
})), o.register("bV6xM", (function(e, r) {
    t(e.exports, "shimGetUserMedia", (function() {
        return i
    }));
    var n = o("5HIzo");
    const a = n.log;

    function i(e) {
        const t = e && e.navigator;
        if (!t.mediaDevices) return;
        const r = n.detectBrowser(e),
            o = function(e) {
                if ("object" != typeof e || e.mandatory || e.optional) return e;
                const t = {};
                return Object.keys(e).forEach((r => {
                    if ("require" === r || "advanced" === r || "mediaSource" === r) return;
                    const o = "object" == typeof e[r] ? e[r] : {
                        ideal: e[r]
                    };
                    void 0 !== o.exact && "number" == typeof o.exact && (o.min = o.max = o.exact);
                    const n = function(e, t) {
                        return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                    };
                    if (void 0 !== o.ideal) {
                        t.optional = t.optional || [];
                        let e = {};
                        "number" == typeof o.ideal ? (e[n("min", r)] = o.ideal, t.optional.push(e), e = {}, e[n("max", r)] = o.ideal, t.optional.push(e)) : (e[n("", r)] = o.ideal, t.optional.push(e))
                    }
                    void 0 !== o.exact && "number" != typeof o.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[n("", r)] = o.exact) : ["min", "max"].forEach((e => {
                        void 0 !== o[e] && (t.mandatory = t.mandatory || {}, t.mandatory[n(e, r)] = o[e])
                    }))
                })), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
            },
            i = function(e, n) {
                if (r.version >= 61) return n(e);
                if ((e = JSON.parse(JSON.stringify(e))) && "object" == typeof e.audio) {
                    const t = function(e, t, r) {
                        t in e && !(r in e) && (e[r] = e[t], delete e[t])
                    };
                    t((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), t(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = o(e.audio)
                }
                if (e && "object" == typeof e.video) {
                    let i = e.video.facingMode;
                    i = i && ("object" == typeof i ? i : {
                        ideal: i
                    });
                    const s = r.version < 66;
                    if (i && ("user" === i.exact || "environment" === i.exact || "user" === i.ideal || "environment" === i.ideal) && (!t.mediaDevices.getSupportedConstraints || !t.mediaDevices.getSupportedConstraints().facingMode || s)) {
                        let r;
                        if (delete e.video.facingMode, "environment" === i.exact || "environment" === i.ideal ? r = ["back", "rear"] : "user" !== i.exact && "user" !== i.ideal || (r = ["front"]), r) return t.mediaDevices.enumerateDevices().then((t => {
                            let s = (t = t.filter((e => "videoinput" === e.kind))).find((e => r.some((t => e.label.toLowerCase().includes(t)))));
                            return !s && t.length && r.includes("back") && (s = t[t.length - 1]), s && (e.video.deviceId = i.exact ? {
                                exact: s.deviceId
                            } : {
                                ideal: s.deviceId
                            }), e.video = o(e.video), a("chrome: " + JSON.stringify(e)), n(e)
                        }))
                    }
                    e.video = o(e.video)
                }
                return a("chrome: " + JSON.stringify(e)), n(e)
            },
            s = function(e) {
                return r.version >= 64 ? e : {
                    name: {
                        PermissionDeniedError: "NotAllowedError",
                        PermissionDismissedError: "NotAllowedError",
                        InvalidStateError: "NotAllowedError",
                        DevicesNotFoundError: "NotFoundError",
                        ConstraintNotSatisfiedError: "OverconstrainedError",
                        TrackStartError: "NotReadableError",
                        MediaDeviceFailedDueToShutdown: "NotAllowedError",
                        MediaDeviceKillSwitchOn: "NotAllowedError",
                        TabCaptureError: "AbortError",
                        ScreenCaptureError: "AbortError",
                        DeviceCaptureError: "AbortError"
                    } [e.name] || e.name,
                    message: e.message,
                    constraint: e.constraint || e.constraintName,
                    toString() {
                        return this.name + (this.message && ": ") + this.message
                    }
                }
            };
        if (t.getUserMedia = function(e, r, o) {
                i(e, (e => {
                    t.webkitGetUserMedia(e, r, (e => {
                        o && o(s(e))
                    }))
                }))
            }.bind(t), t.mediaDevices.getUserMedia) {
            const e = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
            t.mediaDevices.getUserMedia = function(t) {
                return i(t, (t => e(t).then((e => {
                    if (t.audio && !e.getAudioTracks().length || t.video && !e.getVideoTracks().length) throw e.getTracks().forEach((e => {
                        e.stop()
                    })), new DOMException("", "NotFoundError");
                    return e
                }), (e => Promise.reject(s(e))))))
            }
        }
    }
})), o.register("4MhvK", (function(e, r) {
    function o(e, t) {
        e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && ("function" == typeof t ? e.navigator.mediaDevices.getDisplayMedia = function(r) {
            return t(r).then((t => {
                const o = r.video && r.video.width,
                    n = r.video && r.video.height,
                    a = r.video && r.video.frameRate;
                return r.video = {
                    mandatory: {
                        chromeMediaSource: "desktop",
                        chromeMediaSourceId: t,
                        maxFrameRate: a || 3
                    }
                }, o && (r.video.mandatory.maxWidth = o), n && (r.video.mandatory.maxHeight = n), e.navigator.mediaDevices.getUserMedia(r)
            }))
        } : console.error("shimGetDisplayMedia: getSourceId argument is not a function"))
    }
    t(e.exports, "shimGetDisplayMedia", (function() {
        return o
    }))
})), o.register("1s2yO", (function(e, n) {
    t(e.exports, "shimPeerConnection", (function() {
        return c
    })), t(e.exports, "shimReplaceTrack", (function() {
        return d
    })), t(e.exports, "shimGetUserMedia", (function() {
        return o("daa5A").shimGetUserMedia
    })), t(e.exports, "shimGetDisplayMedia", (function() {
        return o("ipMbf").shimGetDisplayMedia
    }));
    var a = o("5HIzo"),
        i = o("7V3W5"),
        s = o("2vOe0");
    o("daa5A"), o("ipMbf");

    function c(e) {
        const t = a.detectBrowser(e);
        if (e.RTCIceGatherer && (e.RTCIceCandidate || (e.RTCIceCandidate = function(e) {
                return e
            }), e.RTCSessionDescription || (e.RTCSessionDescription = function(e) {
                return e
            }), t.version < 15025)) {
            const t = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");
            Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
                set(e) {
                    t.set.call(this, e);
                    const r = new Event("enabled");
                    r.enabled = e, this.dispatchEvent(r)
                }
            })
        }
        e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype) && Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
            get() {
                return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf
            }
        }), e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
        const o = r(s)(e, t.version);
        e.RTCPeerConnection = function(e) {
            return e && e.iceServers && (e.iceServers = (0, i.filterIceServers)(e.iceServers, t.version), a.log("ICE servers after filtering:", e.iceServers)), new o(e)
        }, e.RTCPeerConnection.prototype = o.prototype
    }

    function d(e) {
        e.RTCRtpSender && !("replaceTrack" in e.RTCRtpSender.prototype) && (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack)
    }
})), o.register("7V3W5", (function(e, r) {
    t(e.exports, "filterIceServers", (function() {
        return a
    }));
    var n = o("5HIzo");

    function a(e, t) {
        let r = !1;
        return (e = JSON.parse(JSON.stringify(e))).filter((e => {
            if (e && (e.urls || e.url)) {
                let t = e.urls || e.url;
                e.url && !e.urls && n.deprecated("RTCIceServer.url", "RTCIceServer.urls");
                const o = "string" == typeof t;
                return o && (t = [t]), t = t.filter((e => {
                    if (0 === e.indexOf("stun:")) return !1;
                    const t = e.startsWith("turn") && !e.startsWith("turn:[") && e.includes("transport=udp");
                    return t && !r ? (r = !0, !0) : t && !r
                })), delete e.url, e.urls = o ? t[0] : t, !!t.length
            }
        }))
    }
})), o.register("2vOe0", (function(e, t) {
    var r = o("lAOss");

    function n(e, t, o, n, a) {
        var i = r.writeRtpDescription(e.kind, t);
        if (i += r.writeIceParameters(e.iceGatherer.getLocalParameters()), i += r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === o ? "actpass" : a || "active"), i += "a=mid:" + e.mid + "\r\n", e.rtpSender && e.rtpReceiver ? i += "a=sendrecv\r\n" : e.rtpSender ? i += "a=sendonly\r\n" : e.rtpReceiver ? i += "a=recvonly\r\n" : i += "a=inactive\r\n", e.rtpSender) {
            var s = e.rtpSender._initialTrackId || e.rtpSender.track.id;
            e.rtpSender._initialTrackId = s;
            var c = "msid:" + (n ? n.id : "-") + " " + s + "\r\n";
            i += "a=" + c, i += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + c, e.sendEncodingParameters[0].rtx && (i += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + c, i += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
        }
        return i += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + r.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (i += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + r.localCName + "\r\n"), i
    }

    function a(e, t) {
        var r = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: []
            },
            o = function(e, t) {
                e = parseInt(e, 10);
                for (var r = 0; r < t.length; r++)
                    if (t[r].payloadType === e || t[r].preferredPayloadType === e) return t[r]
            },
            n = function(e, t, r, n) {
                var a = o(e.parameters.apt, r),
                    i = o(t.parameters.apt, n);
                return a && i && a.name.toLowerCase() === i.name.toLowerCase()
            };
        return e.codecs.forEach((function(o) {
            for (var a = 0; a < t.codecs.length; a++) {
                var i = t.codecs[a];
                if (o.name.toLowerCase() === i.name.toLowerCase() && o.clockRate === i.clockRate) {
                    if ("rtx" === o.name.toLowerCase() && o.parameters && i.parameters.apt && !n(o, i, e.codecs, t.codecs)) continue;
                    (i = JSON.parse(JSON.stringify(i))).numChannels = Math.min(o.numChannels, i.numChannels), r.codecs.push(i), i.rtcpFeedback = i.rtcpFeedback.filter((function(e) {
                        for (var t = 0; t < o.rtcpFeedback.length; t++)
                            if (o.rtcpFeedback[t].type === e.type && o.rtcpFeedback[t].parameter === e.parameter) return !0;
                        return !1
                    }));
                    break
                }
            }
        })), e.headerExtensions.forEach((function(e) {
            for (var o = 0; o < t.headerExtensions.length; o++) {
                var n = t.headerExtensions[o];
                if (e.uri === n.uri) {
                    r.headerExtensions.push(n);
                    break
                }
            }
        })), r
    }

    function i(e, t, r) {
        return -1 !== {
            offer: {
                setLocalDescription: ["stable", "have-local-offer"],
                setRemoteDescription: ["stable", "have-remote-offer"]
            },
            answer: {
                setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
                setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
            }
        } [t][e].indexOf(r)
    }

    function s(e, t) {
        var r = e.getRemoteCandidates().find((function(e) {
            return t.foundation === e.foundation && t.ip === e.ip && t.port === e.port && t.priority === e.priority && t.protocol === e.protocol && t.type === e.type
        }));
        return r || e.addRemoteCandidate(t), !r
    }

    function c(e, t) {
        var r = new Error(t);
        return r.name = e, r.code = {
            NotSupportedError: 9,
            InvalidStateError: 11,
            InvalidAccessError: 15,
            TypeError: void 0,
            OperationError: void 0
        } [e], r
    }
    e.exports = function(e, t) {
        function o(t, r) {
            r.addTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent("addtrack", {
                track: t
            }))
        }

        function d(t, r, o, n) {
            var a = new Event("track");
            a.track = r, a.receiver = o, a.transceiver = {
                receiver: o
            }, a.streams = n, e.setTimeout((function() {
                t._dispatchEvent("track", a)
            }))
        }
        var l = function(o) {
            var n = this,
                a = document.createDocumentFragment();
            if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach((function(e) {
                    n[e] = a[e].bind(a)
                })), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", o = JSON.parse(JSON.stringify(o || {})), this.usingBundle = "max-bundle" === o.bundlePolicy, "negotiate" === o.rtcpMuxPolicy) throw c("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
            switch (o.rtcpMuxPolicy || (o.rtcpMuxPolicy = "require"), o.iceTransportPolicy) {
                case "all":
                case "relay":
                    break;
                default:
                    o.iceTransportPolicy = "all"
            }
            switch (o.bundlePolicy) {
                case "balanced":
                case "max-compat":
                case "max-bundle":
                    break;
                default:
                    o.bundlePolicy = "balanced"
            }
            if (o.iceServers = function(e, t) {
                    var r = !1;
                    return (e = JSON.parse(JSON.stringify(e))).filter((function(e) {
                        if (e && (e.urls || e.url)) {
                            var o = e.urls || e.url;
                            e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                            var n = "string" == typeof o;
                            return n && (o = [o]), o = o.filter((function(e) {
                                return 0 !== e.indexOf("turn:") || -1 === e.indexOf("transport=udp") || -1 !== e.indexOf("turn:[") || r ? 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp") : (r = !0, !0)
                            })), delete e.url, e.urls = n ? o[0] : o, !!o.length
                        }
                    }))
                }(o.iceServers || [], t), this._iceGatherers = [], o.iceCandidatePoolSize)
                for (var i = o.iceCandidatePoolSize; i > 0; i--) this._iceGatherers.push(new e.RTCIceGatherer({
                    iceServers: o.iceServers,
                    gatherPolicy: o.iceTransportPolicy
                }));
            else o.iceCandidatePoolSize = 0;
            this._config = o, this.transceivers = [], this._sdpSessionId = r.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1
        };
        Object.defineProperty(l.prototype, "localDescription", {
            configurable: !0,
            get: function() {
                return this._localDescription
            }
        }), Object.defineProperty(l.prototype, "remoteDescription", {
            configurable: !0,
            get: function() {
                return this._remoteDescription
            }
        }), l.prototype.onicecandidate = null, l.prototype.onaddstream = null, l.prototype.ontrack = null, l.prototype.onremovestream = null, l.prototype.onsignalingstatechange = null, l.prototype.oniceconnectionstatechange = null, l.prototype.onconnectionstatechange = null, l.prototype.onicegatheringstatechange = null, l.prototype.onnegotiationneeded = null, l.prototype.ondatachannel = null, l.prototype._dispatchEvent = function(e, t) {
            this._isClosed || (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t))
        }, l.prototype._emitGatheringStateChange = function() {
            var e = new Event("icegatheringstatechange");
            this._dispatchEvent("icegatheringstatechange", e)
        }, l.prototype.getConfiguration = function() {
            return this._config
        }, l.prototype.getLocalStreams = function() {
            return this.localStreams
        }, l.prototype.getRemoteStreams = function() {
            return this.remoteStreams
        }, l.prototype._createTransceiver = function(e, t) {
            var r = this.transceivers.length > 0,
                o = {
                    track: null,
                    iceGatherer: null,
                    iceTransport: null,
                    dtlsTransport: null,
                    localCapabilities: null,
                    remoteCapabilities: null,
                    rtpSender: null,
                    rtpReceiver: null,
                    kind: e,
                    mid: null,
                    sendEncodingParameters: null,
                    recvEncodingParameters: null,
                    stream: null,
                    associatedRemoteMediaStreams: [],
                    wantReceive: !0
                };
            if (this.usingBundle && r) o.iceTransport = this.transceivers[0].iceTransport, o.dtlsTransport = this.transceivers[0].dtlsTransport;
            else {
                var n = this._createIceAndDtlsTransports();
                o.iceTransport = n.iceTransport, o.dtlsTransport = n.dtlsTransport
            }
            return t || this.transceivers.push(o), o
        }, l.prototype.addTrack = function(t, r) {
            if (this._isClosed) throw c("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
            var o;
            if (this.transceivers.find((function(e) {
                    return e.track === t
                }))) throw c("InvalidAccessError", "Track already exists.");
            for (var n = 0; n < this.transceivers.length; n++) this.transceivers[n].track || this.transceivers[n].kind !== t.kind || (o = this.transceivers[n]);
            return o || (o = this._createTransceiver(t.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(r) && this.localStreams.push(r), o.track = t, o.stream = r, o.rtpSender = new e.RTCRtpSender(t, o.dtlsTransport), o.rtpSender
        }, l.prototype.addStream = function(e) {
            var r = this;
            if (t >= 15025) e.getTracks().forEach((function(t) {
                r.addTrack(t, e)
            }));
            else {
                var o = e.clone();
                e.getTracks().forEach((function(e, t) {
                    var r = o.getTracks()[t];
                    e.addEventListener("enabled", (function(e) {
                        r.enabled = e.enabled
                    }))
                })), o.getTracks().forEach((function(e) {
                    r.addTrack(e, o)
                }))
            }
        }, l.prototype.removeTrack = function(t) {
            if (this._isClosed) throw c("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
            if (!(t instanceof e.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
            var r = this.transceivers.find((function(e) {
                return e.rtpSender === t
            }));
            if (!r) throw c("InvalidAccessError", "Sender was not created by this connection.");
            var o = r.stream;
            r.rtpSender.stop(), r.rtpSender = null, r.track = null, r.stream = null, -1 === this.transceivers.map((function(e) {
                return e.stream
            })).indexOf(o) && this.localStreams.indexOf(o) > -1 && this.localStreams.splice(this.localStreams.indexOf(o), 1), this._maybeFireNegotiationNeeded()
        }, l.prototype.removeStream = function(e) {
            var t = this;
            e.getTracks().forEach((function(e) {
                var r = t.getSenders().find((function(t) {
                    return t.track === e
                }));
                r && t.removeTrack(r)
            }))
        }, l.prototype.getSenders = function() {
            return this.transceivers.filter((function(e) {
                return !!e.rtpSender
            })).map((function(e) {
                return e.rtpSender
            }))
        }, l.prototype.getReceivers = function() {
            return this.transceivers.filter((function(e) {
                return !!e.rtpReceiver
            })).map((function(e) {
                return e.rtpReceiver
            }))
        }, l.prototype._createIceGatherer = function(t, r) {
            var o = this;
            if (r && t > 0) return this.transceivers[0].iceGatherer;
            if (this._iceGatherers.length) return this._iceGatherers.shift();
            var n = new e.RTCIceGatherer({
                iceServers: this._config.iceServers,
                gatherPolicy: this._config.iceTransportPolicy
            });
            return Object.defineProperty(n, "state", {
                value: "new",
                writable: !0
            }), this.transceivers[t].bufferedCandidateEvents = [], this.transceivers[t].bufferCandidates = function(e) {
                var r = !e.candidate || 0 === Object.keys(e.candidate).length;
                n.state = r ? "completed" : "gathering", null !== o.transceivers[t].bufferedCandidateEvents && o.transceivers[t].bufferedCandidateEvents.push(e)
            }, n.addEventListener("localcandidate", this.transceivers[t].bufferCandidates), n
        }, l.prototype._gather = function(t, o) {
            var n = this,
                a = this.transceivers[o].iceGatherer;
            if (!a.onlocalcandidate) {
                var i = this.transceivers[o].bufferedCandidateEvents;
                this.transceivers[o].bufferedCandidateEvents = null, a.removeEventListener("localcandidate", this.transceivers[o].bufferCandidates), a.onlocalcandidate = function(e) {
                    if (!(n.usingBundle && o > 0)) {
                        var i = new Event("icecandidate");
                        i.candidate = {
                            sdpMid: t,
                            sdpMLineIndex: o
                        };
                        var s = e.candidate,
                            c = !s || 0 === Object.keys(s).length;
                        if (c) "new" !== a.state && "gathering" !== a.state || (a.state = "completed");
                        else {
                            "new" === a.state && (a.state = "gathering"), s.component = 1, s.ufrag = a.getLocalParameters().usernameFragment;
                            var d = r.writeCandidate(s);
                            i.candidate = Object.assign(i.candidate, r.parseCandidate(d)), i.candidate.candidate = d, i.candidate.toJSON = function() {
                                return {
                                    candidate: i.candidate.candidate,
                                    sdpMid: i.candidate.sdpMid,
                                    sdpMLineIndex: i.candidate.sdpMLineIndex,
                                    usernameFragment: i.candidate.usernameFragment
                                }
                            }
                        }
                        var l = r.getMediaSections(n._localDescription.sdp);
                        l[i.candidate.sdpMLineIndex] += c ? "a=end-of-candidates\r\n" : "a=" + i.candidate.candidate + "\r\n", n._localDescription.sdp = r.getDescription(n._localDescription.sdp) + l.join("");
                        var u = n.transceivers.every((function(e) {
                            return e.iceGatherer && "completed" === e.iceGatherer.state
                        }));
                        "gathering" !== n.iceGatheringState && (n.iceGatheringState = "gathering", n._emitGatheringStateChange()), c || n._dispatchEvent("icecandidate", i), u && (n._dispatchEvent("icecandidate", new Event("icecandidate")), n.iceGatheringState = "complete", n._emitGatheringStateChange())
                    }
                }, e.setTimeout((function() {
                    i.forEach((function(e) {
                        a.onlocalcandidate(e)
                    }))
                }), 0)
            }
        }, l.prototype._createIceAndDtlsTransports = function() {
            var t = this,
                r = new e.RTCIceTransport(null);
            r.onicestatechange = function() {
                t._updateIceConnectionState(), t._updateConnectionState()
            };
            var o = new e.RTCDtlsTransport(r);
            return o.ondtlsstatechange = function() {
                t._updateConnectionState()
            }, o.onerror = function() {
                Object.defineProperty(o, "state", {
                    value: "failed",
                    writable: !0
                }), t._updateConnectionState()
            }, {
                iceTransport: r,
                dtlsTransport: o
            }
        }, l.prototype._disposeIceAndDtlsTransports = function(e) {
            var t = this.transceivers[e].iceGatherer;
            t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
            var r = this.transceivers[e].iceTransport;
            r && (delete r.onicestatechange, delete this.transceivers[e].iceTransport);
            var o = this.transceivers[e].dtlsTransport;
            o && (delete o.ondtlsstatechange, delete o.onerror, delete this.transceivers[e].dtlsTransport)
        }, l.prototype._transceive = function(e, o, n) {
            var i = a(e.localCapabilities, e.remoteCapabilities);
            o && e.rtpSender && (i.encodings = e.sendEncodingParameters, i.rtcp = {
                cname: r.localCName,
                compound: e.rtcpParameters.compound
            }, e.recvEncodingParameters.length && (i.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(i)), n && e.rtpReceiver && i.codecs.length > 0 && ("video" === e.kind && e.recvEncodingParameters && t < 15019 && e.recvEncodingParameters.forEach((function(e) {
                delete e.rtx
            })), e.recvEncodingParameters.length ? i.encodings = e.recvEncodingParameters : i.encodings = [{}], i.rtcp = {
                compound: e.rtcpParameters.compound
            }, e.rtcpParameters.cname && (i.rtcp.cname = e.rtcpParameters.cname), e.sendEncodingParameters.length && (i.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(i))
        }, l.prototype.setLocalDescription = function(e) {
            var t, o, n = this;
            if (-1 === ["offer", "answer"].indexOf(e.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + e.type + '"'));
            if (!i("setLocalDescription", e.type, n.signalingState) || n._isClosed) return Promise.reject(c("InvalidStateError", "Can not set local " + e.type + " in state " + n.signalingState));
            if ("offer" === e.type) t = r.splitSections(e.sdp), o = t.shift(), t.forEach((function(e, t) {
                var o = r.parseRtpParameters(e);
                n.transceivers[t].localCapabilities = o
            })), n.transceivers.forEach((function(e, t) {
                n._gather(e.mid, t)
            }));
            else if ("answer" === e.type) {
                t = r.splitSections(n._remoteDescription.sdp), o = t.shift();
                var s = r.matchPrefix(o, "a=ice-lite").length > 0;
                t.forEach((function(e, t) {
                    var i = n.transceivers[t],
                        c = i.iceGatherer,
                        d = i.iceTransport,
                        l = i.dtlsTransport,
                        u = i.localCapabilities,
                        p = i.remoteCapabilities;
                    if (!(r.isRejected(e) && 0 === r.matchPrefix(e, "a=bundle-only").length) && !i.rejected) {
                        var f = r.getIceParameters(e, o),
                            h = r.getDtlsParameters(e, o);
                        s && (h.role = "server"), n.usingBundle && 0 !== t || (n._gather(i.mid, t), "new" === d.state && d.start(c, f, s ? "controlling" : "controlled"), "new" === l.state && l.start(h));
                        var m = a(u, p);
                        n._transceive(i, m.codecs.length > 0, !1)
                    }
                }))
            }
            return n._localDescription = {
                type: e.type,
                sdp: e.sdp
            }, "offer" === e.type ? n._updateSignalingState("have-local-offer") : n._updateSignalingState("stable"), Promise.resolve()
        }, l.prototype.setRemoteDescription = function(n) {
            var l = this;
            if (-1 === ["offer", "answer"].indexOf(n.type)) return Promise.reject(c("TypeError", 'Unsupported type "' + n.type + '"'));
            if (!i("setRemoteDescription", n.type, l.signalingState) || l._isClosed) return Promise.reject(c("InvalidStateError", "Can not set remote " + n.type + " in state " + l.signalingState));
            var u = {};
            l.remoteStreams.forEach((function(e) {
                u[e.id] = e
            }));
            var p = [],
                f = r.splitSections(n.sdp),
                h = f.shift(),
                m = r.matchPrefix(h, "a=ice-lite").length > 0,
                g = r.matchPrefix(h, "a=group:BUNDLE ").length > 0;
            l.usingBundle = g;
            var v = r.matchPrefix(h, "a=ice-options:")[0];
            return l.canTrickleIceCandidates = !!v && v.substr(14).split(" ").indexOf("trickle") >= 0, f.forEach((function(i, c) {
                var d = r.splitLines(i),
                    f = r.getKind(i),
                    v = r.isRejected(i) && 0 === r.matchPrefix(i, "a=bundle-only").length,
                    x = d[0].substr(2).split(" ")[2],
                    y = r.getDirection(i, h),
                    b = r.parseMsid(i),
                    w = r.getMid(i) || r.generateIdentifier();
                if (v || "application" === f && ("DTLS/SCTP" === x || "UDP/DTLS/SCTP" === x)) l.transceivers[c] = {
                    mid: w,
                    kind: f,
                    protocol: x,
                    rejected: !0
                };
                else {
                    var C, k, P, E, S, T, B, j, M;
                    !v && l.transceivers[c] && l.transceivers[c].rejected && (l.transceivers[c] = l._createTransceiver(f, !0));
                    var _, R, O = r.parseRtpParameters(i);
                    v || (_ = r.getIceParameters(i, h), (R = r.getDtlsParameters(i, h)).role = "client"), B = r.parseRtpEncodingParameters(i);
                    var I = r.parseRtcpParameters(i),
                        D = r.matchPrefix(i, "a=end-of-candidates", h).length > 0,
                        A = r.matchPrefix(i, "a=candidate:").map((function(e) {
                            return r.parseCandidate(e)
                        })).filter((function(e) {
                            return 1 === e.component
                        }));
                    if (("offer" === n.type || "answer" === n.type) && !v && g && c > 0 && l.transceivers[c] && (l._disposeIceAndDtlsTransports(c), l.transceivers[c].iceGatherer = l.transceivers[0].iceGatherer, l.transceivers[c].iceTransport = l.transceivers[0].iceTransport, l.transceivers[c].dtlsTransport = l.transceivers[0].dtlsTransport, l.transceivers[c].rtpSender && l.transceivers[c].rtpSender.setTransport(l.transceivers[0].dtlsTransport), l.transceivers[c].rtpReceiver && l.transceivers[c].rtpReceiver.setTransport(l.transceivers[0].dtlsTransport)), "offer" !== n.type || v) {
                        if ("answer" === n.type && !v) {
                            k = (C = l.transceivers[c]).iceGatherer, P = C.iceTransport, E = C.dtlsTransport, S = C.rtpReceiver, T = C.sendEncodingParameters, j = C.localCapabilities, l.transceivers[c].recvEncodingParameters = B, l.transceivers[c].remoteCapabilities = O, l.transceivers[c].rtcpParameters = I, A.length && "new" === P.state && (!m && !D || g && 0 !== c ? A.forEach((function(e) {
                                s(C.iceTransport, e)
                            })) : P.setRemoteCandidates(A)), g && 0 !== c || ("new" === P.state && P.start(k, _, "controlling"), "new" === E.state && E.start(R)), !a(C.localCapabilities, C.remoteCapabilities).codecs.filter((function(e) {
                                return "rtx" === e.name.toLowerCase()
                            })).length && C.sendEncodingParameters[0].rtx && delete C.sendEncodingParameters[0].rtx, l._transceive(C, "sendrecv" === y || "recvonly" === y, "sendrecv" === y || "sendonly" === y), !S || "sendrecv" !== y && "sendonly" !== y ? delete C.rtpReceiver : (M = S.track, b ? (u[b.stream] || (u[b.stream] = new e.MediaStream), o(M, u[b.stream]), p.push([M, S, u[b.stream]])) : (u.default || (u.default = new e.MediaStream), o(M, u.default), p.push([M, S, u.default])))
                        }
                    } else {
                        (C = l.transceivers[c] || l._createTransceiver(f)).mid = w, C.iceGatherer || (C.iceGatherer = l._createIceGatherer(c, g)), A.length && "new" === C.iceTransport.state && (!D || g && 0 !== c ? A.forEach((function(e) {
                            s(C.iceTransport, e)
                        })) : C.iceTransport.setRemoteCandidates(A)), j = e.RTCRtpReceiver.getCapabilities(f), t < 15019 && (j.codecs = j.codecs.filter((function(e) {
                            return "rtx" !== e.name
                        }))), T = C.sendEncodingParameters || [{
                            ssrc: 1001 * (2 * c + 2)
                        }];
                        var N, L = !1;
                        if ("sendrecv" === y || "sendonly" === y) {
                            if (L = !C.rtpReceiver, S = C.rtpReceiver || new e.RTCRtpReceiver(C.dtlsTransport, f), L) M = S.track, b && "-" === b.stream || (b ? (u[b.stream] || (u[b.stream] = new e.MediaStream, Object.defineProperty(u[b.stream], "id", {
                                get: function() {
                                    return b.stream
                                }
                            })), Object.defineProperty(M, "id", {
                                get: function() {
                                    return b.track
                                }
                            }), N = u[b.stream]) : (u.default || (u.default = new e.MediaStream), N = u.default)), N && (o(M, N), C.associatedRemoteMediaStreams.push(N)), p.push([M, S, N])
                        } else C.rtpReceiver && C.rtpReceiver.track && (C.associatedRemoteMediaStreams.forEach((function(t) {
                            var r = t.getTracks().find((function(e) {
                                return e.id === C.rtpReceiver.track.id
                            }));
                            r && function(t, r) {
                                r.removeTrack(t), r.dispatchEvent(new e.MediaStreamTrackEvent("removetrack", {
                                    track: t
                                }))
                            }(r, t)
                        })), C.associatedRemoteMediaStreams = []);
                        C.localCapabilities = j, C.remoteCapabilities = O, C.rtpReceiver = S, C.rtcpParameters = I, C.sendEncodingParameters = T, C.recvEncodingParameters = B, l._transceive(l.transceivers[c], !1, L)
                    }
                }
            })), void 0 === l._dtlsRole && (l._dtlsRole = "offer" === n.type ? "active" : "passive"), l._remoteDescription = {
                type: n.type,
                sdp: n.sdp
            }, "offer" === n.type ? l._updateSignalingState("have-remote-offer") : l._updateSignalingState("stable"), Object.keys(u).forEach((function(t) {
                var r = u[t];
                if (r.getTracks().length) {
                    if (-1 === l.remoteStreams.indexOf(r)) {
                        l.remoteStreams.push(r);
                        var o = new Event("addstream");
                        o.stream = r, e.setTimeout((function() {
                            l._dispatchEvent("addstream", o)
                        }))
                    }
                    p.forEach((function(e) {
                        var t = e[0],
                            o = e[1];
                        r.id === e[2].id && d(l, t, o, [r])
                    }))
                }
            })), p.forEach((function(e) {
                e[2] || d(l, e[0], e[1], [])
            })), e.setTimeout((function() {
                l && l.transceivers && l.transceivers.forEach((function(e) {
                    e.iceTransport && "new" === e.iceTransport.state && e.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e.iceTransport.addRemoteCandidate({}))
                }))
            }), 4e3), Promise.resolve()
        }, l.prototype.close = function() {
            this.transceivers.forEach((function(e) {
                e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop()
            })), this._isClosed = !0, this._updateSignalingState("closed")
        }, l.prototype._updateSignalingState = function(e) {
            this.signalingState = e;
            var t = new Event("signalingstatechange");
            this._dispatchEvent("signalingstatechange", t)
        }, l.prototype._maybeFireNegotiationNeeded = function() {
            var t = this;
            "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, e.setTimeout((function() {
                if (t.needNegotiation) {
                    t.needNegotiation = !1;
                    var e = new Event("negotiationneeded");
                    t._dispatchEvent("negotiationneeded", e)
                }
            }), 0))
        }, l.prototype._updateIceConnectionState = function() {
            var e, t = {
                new: 0,
                closed: 0,
                checking: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach((function(e) {
                    e.iceTransport && !e.rejected && t[e.iceTransport.state]++
                })), e = "new", t.failed > 0 ? e = "failed" : t.checking > 0 ? e = "checking" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 ? e = "connected" : t.completed > 0 && (e = "completed"), e !== this.iceConnectionState) {
                this.iceConnectionState = e;
                var r = new Event("iceconnectionstatechange");
                this._dispatchEvent("iceconnectionstatechange", r)
            }
        }, l.prototype._updateConnectionState = function() {
            var e, t = {
                new: 0,
                closed: 0,
                connecting: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach((function(e) {
                    e.iceTransport && e.dtlsTransport && !e.rejected && (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++)
                })), t.connected += t.completed, e = "new", t.failed > 0 ? e = "failed" : t.connecting > 0 ? e = "connecting" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 && (e = "connected"), e !== this.connectionState) {
                this.connectionState = e;
                var r = new Event("connectionstatechange");
                this._dispatchEvent("connectionstatechange", r)
            }
        }, l.prototype.createOffer = function() {
            var o = this;
            if (o._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createOffer after close"));
            var a = o.transceivers.filter((function(e) {
                    return "audio" === e.kind
                })).length,
                i = o.transceivers.filter((function(e) {
                    return "video" === e.kind
                })).length,
                s = arguments[0];
            if (s) {
                if (s.mandatory || s.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                void 0 !== s.offerToReceiveAudio && (a = !0 === s.offerToReceiveAudio ? 1 : !1 === s.offerToReceiveAudio ? 0 : s.offerToReceiveAudio), void 0 !== s.offerToReceiveVideo && (i = !0 === s.offerToReceiveVideo ? 1 : !1 === s.offerToReceiveVideo ? 0 : s.offerToReceiveVideo)
            }
            for (o.transceivers.forEach((function(e) {
                    "audio" === e.kind ? --a < 0 && (e.wantReceive = !1) : "video" === e.kind && --i < 0 && (e.wantReceive = !1)
                })); a > 0 || i > 0;) a > 0 && (o._createTransceiver("audio"), a--), i > 0 && (o._createTransceiver("video"), i--);
            var d = r.writeSessionBoilerplate(o._sdpSessionId, o._sdpSessionVersion++);
            o.transceivers.forEach((function(n, a) {
                var i = n.track,
                    s = n.kind,
                    c = n.mid || r.generateIdentifier();
                n.mid = c, n.iceGatherer || (n.iceGatherer = o._createIceGatherer(a, o.usingBundle));
                var d = e.RTCRtpSender.getCapabilities(s);
                t < 15019 && (d.codecs = d.codecs.filter((function(e) {
                    return "rtx" !== e.name
                }))), d.codecs.forEach((function(e) {
                    "H264" === e.name && void 0 === e.parameters["level-asymmetry-allowed"] && (e.parameters["level-asymmetry-allowed"] = "1"), n.remoteCapabilities && n.remoteCapabilities.codecs && n.remoteCapabilities.codecs.forEach((function(t) {
                        e.name.toLowerCase() === t.name.toLowerCase() && e.clockRate === t.clockRate && (e.preferredPayloadType = t.payloadType)
                    }))
                })), d.headerExtensions.forEach((function(e) {
                    (n.remoteCapabilities && n.remoteCapabilities.headerExtensions || []).forEach((function(t) {
                        e.uri === t.uri && (e.id = t.id)
                    }))
                }));
                var l = n.sendEncodingParameters || [{
                    ssrc: 1001 * (2 * a + 1)
                }];
                i && t >= 15019 && "video" === s && !l[0].rtx && (l[0].rtx = {
                    ssrc: l[0].ssrc + 1
                }), n.wantReceive && (n.rtpReceiver = new e.RTCRtpReceiver(n.dtlsTransport, s)), n.localCapabilities = d, n.sendEncodingParameters = l
            })), "max-compat" !== o._config.bundlePolicy && (d += "a=group:BUNDLE " + o.transceivers.map((function(e) {
                return e.mid
            })).join(" ") + "\r\n"), d += "a=ice-options:trickle\r\n", o.transceivers.forEach((function(e, t) {
                d += n(e, e.localCapabilities, "offer", e.stream, o._dtlsRole), d += "a=rtcp-rsize\r\n", !e.iceGatherer || "new" === o.iceGatheringState || 0 !== t && o.usingBundle || (e.iceGatherer.getLocalCandidates().forEach((function(e) {
                    e.component = 1, d += "a=" + r.writeCandidate(e) + "\r\n"
                })), "completed" === e.iceGatherer.state && (d += "a=end-of-candidates\r\n"))
            }));
            var l = new e.RTCSessionDescription({
                type: "offer",
                sdp: d
            });
            return Promise.resolve(l)
        }, l.prototype.createAnswer = function() {
            var o = this;
            if (o._isClosed) return Promise.reject(c("InvalidStateError", "Can not call createAnswer after close"));
            if ("have-remote-offer" !== o.signalingState && "have-local-pranswer" !== o.signalingState) return Promise.reject(c("InvalidStateError", "Can not call createAnswer in signalingState " + o.signalingState));
            var i = r.writeSessionBoilerplate(o._sdpSessionId, o._sdpSessionVersion++);
            o.usingBundle && (i += "a=group:BUNDLE " + o.transceivers.map((function(e) {
                return e.mid
            })).join(" ") + "\r\n"), i += "a=ice-options:trickle\r\n";
            var s = r.getMediaSections(o._remoteDescription.sdp).length;
            o.transceivers.forEach((function(e, r) {
                if (!(r + 1 > s)) {
                    if (e.rejected) return "application" === e.kind ? "DTLS/SCTP" === e.protocol ? i += "m=application 0 DTLS/SCTP 5000\r\n" : i += "m=application 0 " + e.protocol + " webrtc-datachannel\r\n" : "audio" === e.kind ? i += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e.kind && (i += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void(i += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n");
                    var c;
                    if (e.stream) "audio" === e.kind ? c = e.stream.getAudioTracks()[0] : "video" === e.kind && (c = e.stream.getVideoTracks()[0]), c && t >= 15019 && "video" === e.kind && !e.sendEncodingParameters[0].rtx && (e.sendEncodingParameters[0].rtx = {
                        ssrc: e.sendEncodingParameters[0].ssrc + 1
                    });
                    var d = a(e.localCapabilities, e.remoteCapabilities);
                    !d.codecs.filter((function(e) {
                        return "rtx" === e.name.toLowerCase()
                    })).length && e.sendEncodingParameters[0].rtx && delete e.sendEncodingParameters[0].rtx, i += n(e, d, "answer", e.stream, o._dtlsRole), e.rtcpParameters && e.rtcpParameters.reducedSize && (i += "a=rtcp-rsize\r\n")
                }
            }));
            var d = new e.RTCSessionDescription({
                type: "answer",
                sdp: i
            });
            return Promise.resolve(d)
        }, l.prototype.addIceCandidate = function(e) {
            var t, o = this;
            return e && void 0 === e.sdpMLineIndex && !e.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise((function(n, a) {
                if (!o._remoteDescription) return a(c("InvalidStateError", "Can not add ICE candidate without a remote description"));
                if (e && "" !== e.candidate) {
                    var i = e.sdpMLineIndex;
                    if (e.sdpMid)
                        for (var d = 0; d < o.transceivers.length; d++)
                            if (o.transceivers[d].mid === e.sdpMid) {
                                i = d;
                                break
                            } var l = o.transceivers[i];
                    if (!l) return a(c("OperationError", "Can not add ICE candidate"));
                    if (l.rejected) return n();
                    var u = Object.keys(e.candidate).length > 0 ? r.parseCandidate(e.candidate) : {};
                    if ("tcp" === u.protocol && (0 === u.port || 9 === u.port)) return n();
                    if (u.component && 1 !== u.component) return n();
                    if ((0 === i || i > 0 && l.iceTransport !== o.transceivers[0].iceTransport) && !s(l.iceTransport, u)) return a(c("OperationError", "Can not add ICE candidate"));
                    var p = e.candidate.trim();
                    0 === p.indexOf("a=") && (p = p.substr(2)), (t = r.getMediaSections(o._remoteDescription.sdp))[i] += "a=" + (u.type ? p : "end-of-candidates") + "\r\n", o._remoteDescription.sdp = r.getDescription(o._remoteDescription.sdp) + t.join("")
                } else
                    for (var f = 0; f < o.transceivers.length && (o.transceivers[f].rejected || (o.transceivers[f].iceTransport.addRemoteCandidate({}), (t = r.getMediaSections(o._remoteDescription.sdp))[f] += "a=end-of-candidates\r\n", o._remoteDescription.sdp = r.getDescription(o._remoteDescription.sdp) + t.join(""), !o.usingBundle)); f++);
                n()
            }))
        }, l.prototype.getStats = function(t) {
            if (t && t instanceof e.MediaStreamTrack) {
                var r = null;
                if (this.transceivers.forEach((function(e) {
                        e.rtpSender && e.rtpSender.track === t ? r = e.rtpSender : e.rtpReceiver && e.rtpReceiver.track === t && (r = e.rtpReceiver)
                    })), !r) throw c("InvalidAccessError", "Invalid selector.");
                return r.getStats()
            }
            var o = [];
            return this.transceivers.forEach((function(e) {
                ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach((function(t) {
                    e[t] && o.push(e[t].getStats())
                }))
            })), Promise.all(o).then((function(e) {
                var t = new Map;
                return e.forEach((function(e) {
                    e.forEach((function(e) {
                        t.set(e.id, e)
                    }))
                })), t
            }))
        };
        ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach((function(t) {
            var r = e[t];
            if (r && r.prototype && r.prototype.getStats) {
                var o = r.prototype.getStats;
                r.prototype.getStats = function() {
                    return o.apply(this).then((function(e) {
                        var t = new Map;
                        return Object.keys(e).forEach((function(r) {
                            var o;
                            e[r].type = {
                                inboundrtp: "inbound-rtp",
                                outboundrtp: "outbound-rtp",
                                candidatepair: "candidate-pair",
                                localcandidate: "local-candidate",
                                remotecandidate: "remote-candidate"
                            } [(o = e[r]).type] || o.type, t.set(r, e[r])
                        })), t
                    }))
                }
            }
        }));
        var u = ["createOffer", "createAnswer"];
        return u.forEach((function(e) {
            var t = l.prototype[e];
            l.prototype[e] = function() {
                var e = arguments;
                return "function" == typeof e[0] || "function" == typeof e[1] ? t.apply(this, [arguments[2]]).then((function(t) {
                    "function" == typeof e[0] && e[0].apply(null, [t])
                }), (function(t) {
                    "function" == typeof e[1] && e[1].apply(null, [t])
                })) : t.apply(this, arguments)
            }
        })), (u = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach((function(e) {
            var t = l.prototype[e];
            l.prototype[e] = function() {
                var e = arguments;
                return "function" == typeof e[1] || "function" == typeof e[2] ? t.apply(this, arguments).then((function() {
                    "function" == typeof e[1] && e[1].apply(null)
                }), (function(t) {
                    "function" == typeof e[2] && e[2].apply(null, [t])
                })) : t.apply(this, arguments)
            }
        })), ["getStats"].forEach((function(e) {
            var t = l.prototype[e];
            l.prototype[e] = function() {
                var e = arguments;
                return "function" == typeof e[1] ? t.apply(this, arguments).then((function() {
                    "function" == typeof e[1] && e[1].apply(null)
                })) : t.apply(this, arguments)
            }
        })), l
    }
})), o.register("lAOss", (function(e, t) {
    var r = {
        generateIdentifier: function() {
            return Math.random().toString(36).substr(2, 10)
        }
    };
    r.localCName = r.generateIdentifier(), r.splitLines = function(e) {
        return e.trim().split("\n").map((function(e) {
            return e.trim()
        }))
    }, r.splitSections = function(e) {
        return e.split("\nm=").map((function(e, t) {
            return (t > 0 ? "m=" + e : e).trim() + "\r\n"
        }))
    }, r.getDescription = function(e) {
        var t = r.splitSections(e);
        return t && t[0]
    }, r.getMediaSections = function(e) {
        var t = r.splitSections(e);
        return t.shift(), t
    }, r.matchPrefix = function(e, t) {
        return r.splitLines(e).filter((function(e) {
            return 0 === e.indexOf(t)
        }))
    }, r.parseCandidate = function(e) {
        for (var t, r = {
                foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
                component: parseInt(t[1], 10),
                protocol: t[2].toLowerCase(),
                priority: parseInt(t[3], 10),
                ip: t[4],
                address: t[4],
                port: parseInt(t[5], 10),
                type: t[7]
            }, o = 8; o < t.length; o += 2) switch (t[o]) {
            case "raddr":
                r.relatedAddress = t[o + 1];
                break;
            case "rport":
                r.relatedPort = parseInt(t[o + 1], 10);
                break;
            case "tcptype":
                r.tcpType = t[o + 1];
                break;
            case "ufrag":
                r.ufrag = t[o + 1], r.usernameFragment = t[o + 1];
                break;
            default:
                r[t[o]] = t[o + 1]
        }
        return r
    }, r.writeCandidate = function(e) {
        var t = [];
        t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
        var r = e.type;
        return t.push("typ"), t.push(r), "host" !== r && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ")
    }, r.parseIceOptions = function(e) {
        return e.substr(14).split(" ")
    }, r.parseRtpMap = function(e) {
        var t = e.substr(9).split(" "),
            r = {
                payloadType: parseInt(t.shift(), 10)
            };
        return t = t[0].split("/"), r.name = t[0], r.clockRate = parseInt(t[1], 10), r.channels = 3 === t.length ? parseInt(t[2], 10) : 1, r.numChannels = r.channels, r
    }, r.writeRtpMap = function(e) {
        var t = e.payloadType;
        void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
        var r = e.channels || e.numChannels || 1;
        return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== r ? "/" + r : "") + "\r\n"
    }, r.parseExtmap = function(e) {
        var t = e.substr(9).split(" ");
        return {
            id: parseInt(t[0], 10),
            direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
            uri: t[1]
        }
    }, r.writeExtmap = function(e) {
        return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n"
    }, r.parseFmtp = function(e) {
        for (var t, r = {}, o = e.substr(e.indexOf(" ") + 1).split(";"), n = 0; n < o.length; n++) r[(t = o[n].trim().split("="))[0].trim()] = t[1];
        return r
    }, r.writeFmtp = function(e) {
        var t = "",
            r = e.payloadType;
        if (void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
            var o = [];
            Object.keys(e.parameters).forEach((function(t) {
                e.parameters[t] ? o.push(t + "=" + e.parameters[t]) : o.push(t)
            })), t += "a=fmtp:" + r + " " + o.join(";") + "\r\n"
        }
        return t
    }, r.parseRtcpFb = function(e) {
        var t = e.substr(e.indexOf(" ") + 1).split(" ");
        return {
            type: t.shift(),
            parameter: t.join(" ")
        }
    }, r.writeRtcpFb = function(e) {
        var t = "",
            r = e.payloadType;
        return void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach((function(e) {
            t += "a=rtcp-fb:" + r + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n"
        })), t
    }, r.parseSsrcMedia = function(e) {
        var t = e.indexOf(" "),
            r = {
                ssrc: parseInt(e.substr(7, t - 7), 10)
            },
            o = e.indexOf(":", t);
        return o > -1 ? (r.attribute = e.substr(t + 1, o - t - 1), r.value = e.substr(o + 1)) : r.attribute = e.substr(t + 1), r
    }, r.parseSsrcGroup = function(e) {
        var t = e.substr(13).split(" ");
        return {
            semantics: t.shift(),
            ssrcs: t.map((function(e) {
                return parseInt(e, 10)
            }))
        }
    }, r.getMid = function(e) {
        var t = r.matchPrefix(e, "a=mid:")[0];
        if (t) return t.substr(6)
    }, r.parseFingerprint = function(e) {
        var t = e.substr(14).split(" ");
        return {
            algorithm: t[0].toLowerCase(),
            value: t[1]
        }
    }, r.getDtlsParameters = function(e, t) {
        return {
            role: "auto",
            fingerprints: r.matchPrefix(e + t, "a=fingerprint:").map(r.parseFingerprint)
        }
    }, r.writeDtlsParameters = function(e, t) {
        var r = "a=setup:" + t + "\r\n";
        return e.fingerprints.forEach((function(e) {
            r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
        })), r
    }, r.parseCryptoLine = function(e) {
        var t = e.substr(9).split(" ");
        return {
            tag: parseInt(t[0], 10),
            cryptoSuite: t[1],
            keyParams: t[2],
            sessionParams: t.slice(3)
        }
    }, r.writeCryptoLine = function(e) {
        return "a=crypto:" + e.tag + " " + e.cryptoSuite + " " + ("object" == typeof e.keyParams ? r.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? " " + e.sessionParams.join(" ") : "") + "\r\n"
    }, r.parseCryptoKeyParams = function(e) {
        if (0 !== e.indexOf("inline:")) return null;
        var t = e.substr(7).split("|");
        return {
            keyMethod: "inline",
            keySalt: t[0],
            lifeTime: t[1],
            mkiValue: t[2] ? t[2].split(":")[0] : void 0,
            mkiLength: t[2] ? t[2].split(":")[1] : void 0
        }
    }, r.writeCryptoKeyParams = function(e) {
        return e.keyMethod + ":" + e.keySalt + (e.lifeTime ? "|" + e.lifeTime : "") + (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "")
    }, r.getCryptoParameters = function(e, t) {
        return r.matchPrefix(e + t, "a=crypto:").map(r.parseCryptoLine)
    }, r.getIceParameters = function(e, t) {
        var o = r.matchPrefix(e + t, "a=ice-ufrag:")[0],
            n = r.matchPrefix(e + t, "a=ice-pwd:")[0];
        return o && n ? {
            usernameFragment: o.substr(12),
            password: n.substr(10)
        } : null
    }, r.writeIceParameters = function(e) {
        return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
    }, r.parseRtpParameters = function(e) {
        for (var t = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: []
            }, o = r.splitLines(e)[0].split(" "), n = 3; n < o.length; n++) {
            var a = o[n],
                i = r.matchPrefix(e, "a=rtpmap:" + a + " ")[0];
            if (i) {
                var s = r.parseRtpMap(i),
                    c = r.matchPrefix(e, "a=fmtp:" + a + " ");
                switch (s.parameters = c.length ? r.parseFmtp(c[0]) : {}, s.rtcpFeedback = r.matchPrefix(e, "a=rtcp-fb:" + a + " ").map(r.parseRtcpFb), t.codecs.push(s), s.name.toUpperCase()) {
                    case "RED":
                    case "ULPFEC":
                        t.fecMechanisms.push(s.name.toUpperCase())
                }
            }
        }
        return r.matchPrefix(e, "a=extmap:").forEach((function(e) {
            t.headerExtensions.push(r.parseExtmap(e))
        })), t
    }, r.writeRtpDescription = function(e, t) {
        var o = "";
        o += "m=" + e + " ", o += t.codecs.length > 0 ? "9" : "0", o += " UDP/TLS/RTP/SAVPF ", o += t.codecs.map((function(e) {
            return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
        })).join(" ") + "\r\n", o += "c=IN IP4 0.0.0.0\r\n", o += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach((function(e) {
            o += r.writeRtpMap(e), o += r.writeFmtp(e), o += r.writeRtcpFb(e)
        }));
        var n = 0;
        return t.codecs.forEach((function(e) {
            e.maxptime > n && (n = e.maxptime)
        })), n > 0 && (o += "a=maxptime:" + n + "\r\n"), o += "a=rtcp-mux\r\n", t.headerExtensions && t.headerExtensions.forEach((function(e) {
            o += r.writeExtmap(e)
        })), o
    }, r.parseRtpEncodingParameters = function(e) {
        var t, o = [],
            n = r.parseRtpParameters(e),
            a = -1 !== n.fecMechanisms.indexOf("RED"),
            i = -1 !== n.fecMechanisms.indexOf("ULPFEC"),
            s = r.matchPrefix(e, "a=ssrc:").map((function(e) {
                return r.parseSsrcMedia(e)
            })).filter((function(e) {
                return "cname" === e.attribute
            })),
            c = s.length > 0 && s[0].ssrc,
            d = r.matchPrefix(e, "a=ssrc-group:FID").map((function(e) {
                return e.substr(17).split(" ").map((function(e) {
                    return parseInt(e, 10)
                }))
            }));
        d.length > 0 && d[0].length > 1 && d[0][0] === c && (t = d[0][1]), n.codecs.forEach((function(e) {
            if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                var r = {
                    ssrc: c,
                    codecPayloadType: parseInt(e.parameters.apt, 10)
                };
                c && t && (r.rtx = {
                    ssrc: t
                }), o.push(r), a && ((r = JSON.parse(JSON.stringify(r))).fec = {
                    ssrc: c,
                    mechanism: i ? "red+ulpfec" : "red"
                }, o.push(r))
            }
        })), 0 === o.length && c && o.push({
            ssrc: c
        });
        var l = r.matchPrefix(e, "b=");
        return l.length && (l = 0 === l[0].indexOf("b=TIAS:") ? parseInt(l[0].substr(7), 10) : 0 === l[0].indexOf("b=AS:") ? 950 * parseInt(l[0].substr(5), 10) - 16e3 : void 0, o.forEach((function(e) {
            e.maxBitrate = l
        }))), o
    }, r.parseRtcpParameters = function(e) {
        var t = {},
            o = r.matchPrefix(e, "a=ssrc:").map((function(e) {
                return r.parseSsrcMedia(e)
            })).filter((function(e) {
                return "cname" === e.attribute
            }))[0];
        o && (t.cname = o.value, t.ssrc = o.ssrc);
        var n = r.matchPrefix(e, "a=rtcp-rsize");
        t.reducedSize = n.length > 0, t.compound = 0 === n.length;
        var a = r.matchPrefix(e, "a=rtcp-mux");
        return t.mux = a.length > 0, t
    }, r.parseMsid = function(e) {
        var t, o = r.matchPrefix(e, "a=msid:");
        if (1 === o.length) return {
            stream: (t = o[0].substr(7).split(" "))[0],
            track: t[1]
        };
        var n = r.matchPrefix(e, "a=ssrc:").map((function(e) {
            return r.parseSsrcMedia(e)
        })).filter((function(e) {
            return "msid" === e.attribute
        }));
        return n.length > 0 ? {
            stream: (t = n[0].value.split(" "))[0],
            track: t[1]
        } : void 0
    }, r.parseSctpDescription = function(e) {
        var t, o = r.parseMLine(e),
            n = r.matchPrefix(e, "a=max-message-size:");
        n.length > 0 && (t = parseInt(n[0].substr(19), 10)), isNaN(t) && (t = 65536);
        var a = r.matchPrefix(e, "a=sctp-port:");
        if (a.length > 0) return {
            port: parseInt(a[0].substr(12), 10),
            protocol: o.fmt,
            maxMessageSize: t
        };
        if (r.matchPrefix(e, "a=sctpmap:").length > 0) {
            var i = r.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
            return {
                port: parseInt(i[0], 10),
                protocol: i[1],
                maxMessageSize: t
            }
        }
    }, r.writeSctpDescription = function(e, t) {
        var r = [];
        return r = "DTLS/SCTP" !== e.protocol ? ["m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t.port + "\r\n"] : ["m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n"], void 0 !== t.maxMessageSize && r.push("a=max-message-size:" + t.maxMessageSize + "\r\n"), r.join("")
    }, r.generateSessionId = function() {
        return Math.random().toString().substr(2, 21)
    }, r.writeSessionBoilerplate = function(e, t, o) {
        var n = void 0 !== t ? t : 2;
        return "v=0\r\no=" + (o || "thisisadapterortc") + " " + (e || r.generateSessionId()) + " " + n + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
    }, r.writeMediaSection = function(e, t, o, n) {
        var a = r.writeRtpDescription(e.kind, t);
        if (a += r.writeIceParameters(e.iceGatherer.getLocalParameters()), a += r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === o ? "actpass" : "active"), a += "a=mid:" + e.mid + "\r\n", e.direction ? a += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? a += "a=sendrecv\r\n" : e.rtpSender ? a += "a=sendonly\r\n" : e.rtpReceiver ? a += "a=recvonly\r\n" : a += "a=inactive\r\n", e.rtpSender) {
            var i = "msid:" + n.id + " " + e.rtpSender.track.id + "\r\n";
            a += "a=" + i, a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + i, e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + i, a += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
        }
        return a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + r.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + r.localCName + "\r\n"), a
    }, r.getDirection = function(e, t) {
        for (var o = r.splitLines(e), n = 0; n < o.length; n++) switch (o[n]) {
            case "a=sendrecv":
            case "a=sendonly":
            case "a=recvonly":
            case "a=inactive":
                return o[n].substr(2)
        }
        return t ? r.getDirection(t) : "sendrecv"
    }, r.getKind = function(e) {
        return r.splitLines(e)[0].split(" ")[0].substr(2)
    }, r.isRejected = function(e) {
        return "0" === e.split(" ", 2)[1]
    }, r.parseMLine = function(e) {
        var t = r.splitLines(e)[0].substr(2).split(" ");
        return {
            kind: t[0],
            port: parseInt(t[1], 10),
            protocol: t[2],
            fmt: t.slice(3).join(" ")
        }
    }, r.parseOLine = function(e) {
        var t = r.matchPrefix(e, "o=")[0].substr(2).split(" ");
        return {
            username: t[0],
            sessionId: t[1],
            sessionVersion: parseInt(t[2], 10),
            netType: t[3],
            addressType: t[4],
            address: t[5]
        }
    }, r.isValidSDP = function(e) {
        if ("string" != typeof e || 0 === e.length) return !1;
        for (var t = r.splitLines(e), o = 0; o < t.length; o++)
            if (t[o].length < 2 || "=" !== t[o].charAt(1)) return !1;
        return !0
    }, e.exports = r
})), o.register("daa5A", (function(e, r) {
    function o(e) {
        const t = e && e.navigator,
            r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
        t.mediaDevices.getUserMedia = function(e) {
            return r(e).catch((e => Promise.reject(function(e) {
                return {
                    name: {
                        PermissionDeniedError: "NotAllowedError"
                    } [e.name] || e.name,
                    message: e.message,
                    constraint: e.constraint,
                    toString() {
                        return this.name
                    }
                }
            }(e))))
        }
    }
    t(e.exports, "shimGetUserMedia", (function() {
        return o
    }))
})), o.register("ipMbf", (function(e, r) {
    function o(e) {
        "getDisplayMedia" in e.navigator && e.navigator.mediaDevices && (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator)))
    }
    t(e.exports, "shimGetDisplayMedia", (function() {
        return o
    }))
})), o.register("5qah9", (function(e, r) {
    t(e.exports, "shimOnTrack", (function() {
        return a
    })), t(e.exports, "shimPeerConnection", (function() {
        return i
    })), t(e.exports, "shimSenderGetStats", (function() {
        return s
    })), t(e.exports, "shimReceiverGetStats", (function() {
        return c
    })), t(e.exports, "shimRemoveStream", (function() {
        return d
    })), t(e.exports, "shimRTCDataChannel", (function() {
        return l
    })), t(e.exports, "shimAddTransceiver", (function() {
        return u
    })), t(e.exports, "shimGetParameters", (function() {
        return p
    })), t(e.exports, "shimCreateOffer", (function() {
        return f
    })), t(e.exports, "shimCreateAnswer", (function() {
        return h
    })), t(e.exports, "shimGetUserMedia", (function() {
        return o("3UJKn").shimGetUserMedia
    })), t(e.exports, "shimGetDisplayMedia", (function() {
        return o("kpKjj").shimGetDisplayMedia
    }));
    var n = o("5HIzo");
    o("3UJKn"), o("kpKjj");

    function a(e) {
        "object" == typeof e && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
            get() {
                return {
                    receiver: this.receiver
                }
            }
        })
    }

    function i(e) {
        const t = n.detectBrowser(e);
        if ("object" != typeof e || !e.RTCPeerConnection && !e.mozRTCPeerConnection) return;
        if (!e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(t) {
                const r = e.RTCPeerConnection.prototype[t],
                    o = {
                        [t]() {
                            return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), r.apply(this, arguments)
                        }
                    };
                e.RTCPeerConnection.prototype[t] = o[t]
            })), t.version < 68) {
            const t = e.RTCPeerConnection.prototype.addIceCandidate;
            e.RTCPeerConnection.prototype.addIceCandidate = function() {
                return arguments[0] ? arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : t.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
            }
        }
        const r = {
                inboundrtp: "inbound-rtp",
                outboundrtp: "outbound-rtp",
                candidatepair: "candidate-pair",
                localcandidate: "local-candidate",
                remotecandidate: "remote-candidate"
            },
            o = e.RTCPeerConnection.prototype.getStats;
        e.RTCPeerConnection.prototype.getStats = function() {
            const [e, n, a] = arguments;
            return o.apply(this, [e || null]).then((e => {
                if (t.version < 53 && !n) try {
                    e.forEach((e => {
                        e.type = r[e.type] || e.type
                    }))
                } catch (t) {
                    if ("TypeError" !== t.name) throw t;
                    e.forEach(((t, o) => {
                        e.set(o, Object.assign({}, t, {
                            type: r[t.type] || t.type
                        }))
                    }))
                }
                return e
            })).then(n, a)
        }
    }

    function s(e) {
        if ("object" != typeof e || !e.RTCPeerConnection || !e.RTCRtpSender) return;
        if (e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
        const t = e.RTCPeerConnection.prototype.getSenders;
        t && (e.RTCPeerConnection.prototype.getSenders = function() {
            const e = t.apply(this, []);
            return e.forEach((e => e._pc = this)), e
        });
        const r = e.RTCPeerConnection.prototype.addTrack;
        r && (e.RTCPeerConnection.prototype.addTrack = function() {
            const e = r.apply(this, arguments);
            return e._pc = this, e
        }), e.RTCRtpSender.prototype.getStats = function() {
            return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
        }
    }

    function c(e) {
        if ("object" != typeof e || !e.RTCPeerConnection || !e.RTCRtpSender) return;
        if (e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
        const t = e.RTCPeerConnection.prototype.getReceivers;
        t && (e.RTCPeerConnection.prototype.getReceivers = function() {
            const e = t.apply(this, []);
            return e.forEach((e => e._pc = this)), e
        }), n.wrapPeerConnectionEvent(e, "track", (e => (e.receiver._pc = e.srcElement, e))), e.RTCRtpReceiver.prototype.getStats = function() {
            return this._pc.getStats(this.track)
        }
    }

    function d(e) {
        e.RTCPeerConnection && !("removeStream" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.removeStream = function(e) {
            n.deprecated("removeStream", "removeTrack"), this.getSenders().forEach((t => {
                t.track && e.getTracks().includes(t.track) && this.removeTrack(t)
            }))
        })
    }

    function l(e) {
        e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel)
    }

    function u(e) {
        if ("object" != typeof e || !e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection.prototype.addTransceiver;
        t && (e.RTCPeerConnection.prototype.addTransceiver = function() {
            this.setParametersPromises = [];
            const e = arguments[1],
                r = e && "sendEncodings" in e;
            r && e.sendEncodings.forEach((e => {
                if ("rid" in e) {
                    if (!/^[a-z0-9]{0,16}$/i.test(e.rid)) throw new TypeError("Invalid RID value provided.")
                }
                if ("scaleResolutionDownBy" in e && !(parseFloat(e.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
                if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0")
            }));
            const o = t.apply(this, arguments);
            if (r) {
                const {
                    sender: t
                } = o, r = t.getParameters();
                (!("encodings" in r) || 1 === r.encodings.length && 0 === Object.keys(r.encodings[0]).length) && (r.encodings = e.sendEncodings, t.sendEncodings = e.sendEncodings, this.setParametersPromises.push(t.setParameters(r).then((() => {
                    delete t.sendEncodings
                })).catch((() => {
                    delete t.sendEncodings
                }))))
            }
            return o
        })
    }

    function p(e) {
        if ("object" != typeof e || !e.RTCRtpSender) return;
        const t = e.RTCRtpSender.prototype.getParameters;
        t && (e.RTCRtpSender.prototype.getParameters = function() {
            const e = t.apply(this, arguments);
            return "encodings" in e || (e.encodings = [].concat(this.sendEncodings || [{}])), e
        })
    }

    function f(e) {
        if ("object" != typeof e || !e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection.prototype.createOffer;
        e.RTCPeerConnection.prototype.createOffer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then((() => t.apply(this, arguments))).finally((() => {
                this.setParametersPromises = []
            })) : t.apply(this, arguments)
        }
    }

    function h(e) {
        if ("object" != typeof e || !e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection.prototype.createAnswer;
        e.RTCPeerConnection.prototype.createAnswer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then((() => t.apply(this, arguments))).finally((() => {
                this.setParametersPromises = []
            })) : t.apply(this, arguments)
        }
    }
})), o.register("3UJKn", (function(e, r) {
    t(e.exports, "shimGetUserMedia", (function() {
        return a
    }));
    var n = o("5HIzo");

    function a(e) {
        const t = n.detectBrowser(e),
            r = e && e.navigator,
            o = e && e.MediaStreamTrack;
        if (r.getUserMedia = function(e, t, o) {
                n.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), r.mediaDevices.getUserMedia(e).then(t, o)
            }, !(t.version > 55 && "autoGainControl" in r.mediaDevices.getSupportedConstraints())) {
            const e = function(e, t, r) {
                    t in e && !(r in e) && (e[r] = e[t], delete e[t])
                },
                t = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
            if (r.mediaDevices.getUserMedia = function(r) {
                    return "object" == typeof r && "object" == typeof r.audio && (r = JSON.parse(JSON.stringify(r)), e(r.audio, "autoGainControl", "mozAutoGainControl"), e(r.audio, "noiseSuppression", "mozNoiseSuppression")), t(r)
                }, o && o.prototype.getSettings) {
                const t = o.prototype.getSettings;
                o.prototype.getSettings = function() {
                    const r = t.apply(this, arguments);
                    return e(r, "mozAutoGainControl", "autoGainControl"), e(r, "mozNoiseSuppression", "noiseSuppression"), r
                }
            }
            if (o && o.prototype.applyConstraints) {
                const t = o.prototype.applyConstraints;
                o.prototype.applyConstraints = function(r) {
                    return "audio" === this.kind && "object" == typeof r && (r = JSON.parse(JSON.stringify(r)), e(r, "autoGainControl", "mozAutoGainControl"), e(r, "noiseSuppression", "mozNoiseSuppression")), t.apply(this, [r])
                }
            }
        }
    }
})), o.register("kpKjj", (function(e, r) {
    function o(e, t) {
        e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function(r) {
            if (!r || !r.video) {
                const e = new DOMException("getDisplayMedia without video constraints is undefined");
                return e.name = "NotFoundError", e.code = 8, Promise.reject(e)
            }
            return !0 === r.video ? r.video = {
                mediaSource: t
            } : r.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(r)
        })
    }
    t(e.exports, "shimGetDisplayMedia", (function() {
        return o
    }))
})), o.register("8rf2v", (function(e, r) {
    t(e.exports, "shimLocalStreamsAPI", (function() {
        return a
    })), t(e.exports, "shimRemoteStreamsAPI", (function() {
        return i
    })), t(e.exports, "shimCallbacksAPI", (function() {
        return s
    })), t(e.exports, "shimGetUserMedia", (function() {
        return c
    })), t(e.exports, "shimConstraints", (function() {
        return d
    })), t(e.exports, "shimRTCIceServerUrls", (function() {
        return l
    })), t(e.exports, "shimTrackEventTransceiver", (function() {
        return u
    })), t(e.exports, "shimCreateOfferLegacy", (function() {
        return p
    })), t(e.exports, "shimAudioContext", (function() {
        return f
    }));
    var n = o("5HIzo");

    function a(e) {
        if ("object" == typeof e && e.RTCPeerConnection) {
            if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function() {
                    return this._localStreams || (this._localStreams = []), this._localStreams
                }), !("addStream" in e.RTCPeerConnection.prototype)) {
                const t = e.RTCPeerConnection.prototype.addTrack;
                e.RTCPeerConnection.prototype.addStream = function(e) {
                    this._localStreams || (this._localStreams = []), this._localStreams.includes(e) || this._localStreams.push(e), e.getAudioTracks().forEach((r => t.call(this, r, e))), e.getVideoTracks().forEach((r => t.call(this, r, e)))
                }, e.RTCPeerConnection.prototype.addTrack = function(e, ...r) {
                    return r && r.forEach((e => {
                        this._localStreams ? this._localStreams.includes(e) || this._localStreams.push(e) : this._localStreams = [e]
                    })), t.apply(this, arguments)
                }
            }
            "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(e) {
                this._localStreams || (this._localStreams = []);
                const t = this._localStreams.indexOf(e);
                if (-1 === t) return;
                this._localStreams.splice(t, 1);
                const r = e.getTracks();
                this.getSenders().forEach((e => {
                    r.includes(e.track) && this.removeTrack(e)
                }))
            })
        }
    }

    function i(e) {
        if ("object" == typeof e && e.RTCPeerConnection && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
                return this._remoteStreams ? this._remoteStreams : []
            }), !("onaddstream" in e.RTCPeerConnection.prototype))) {
            Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
                get() {
                    return this._onaddstream
                },
                set(e) {
                    this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = e => {
                        e.streams.forEach((e => {
                            if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(e)) return;
                            this._remoteStreams.push(e);
                            const t = new Event("addstream");
                            t.stream = e, this.dispatchEvent(t)
                        }))
                    })
                }
            });
            const t = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                const e = this;
                return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t) {
                    t.streams.forEach((t => {
                        if (e._remoteStreams || (e._remoteStreams = []), e._remoteStreams.indexOf(t) >= 0) return;
                        e._remoteStreams.push(t);
                        const r = new Event("addstream");
                        r.stream = t, e.dispatchEvent(r)
                    }))
                }), t.apply(e, arguments)
            }
        }
    }

    function s(e) {
        if ("object" != typeof e || !e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection.prototype,
            r = t.createOffer,
            o = t.createAnswer,
            n = t.setLocalDescription,
            a = t.setRemoteDescription,
            i = t.addIceCandidate;
        t.createOffer = function(e, t) {
            const o = arguments.length >= 2 ? arguments[2] : arguments[0],
                n = r.apply(this, [o]);
            return t ? (n.then(e, t), Promise.resolve()) : n
        }, t.createAnswer = function(e, t) {
            const r = arguments.length >= 2 ? arguments[2] : arguments[0],
                n = o.apply(this, [r]);
            return t ? (n.then(e, t), Promise.resolve()) : n
        };
        let s = function(e, t, r) {
            const o = n.apply(this, [e]);
            return r ? (o.then(t, r), Promise.resolve()) : o
        };
        t.setLocalDescription = s, s = function(e, t, r) {
            const o = a.apply(this, [e]);
            return r ? (o.then(t, r), Promise.resolve()) : o
        }, t.setRemoteDescription = s, s = function(e, t, r) {
            const o = i.apply(this, [e]);
            return r ? (o.then(t, r), Promise.resolve()) : o
        }, t.addIceCandidate = s
    }

    function c(e) {
        const t = e && e.navigator;
        if (t.mediaDevices && t.mediaDevices.getUserMedia) {
            const e = t.mediaDevices,
                r = e.getUserMedia.bind(e);
            t.mediaDevices.getUserMedia = e => r(d(e))
        }!t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function(e, r, o) {
            t.mediaDevices.getUserMedia(e).then(r, o)
        }.bind(t))
    }

    function d(e) {
        return e && void 0 !== e.video ? Object.assign({}, e, {
            video: n.compactObject(e.video)
        }) : e
    }

    function l(e) {
        if (!e.RTCPeerConnection) return;
        const t = e.RTCPeerConnection;
        e.RTCPeerConnection = function(e, r) {
            if (e && e.iceServers) {
                const t = [];
                for (let r = 0; r < e.iceServers.length; r++) {
                    let o = e.iceServers[r];
                    !o.hasOwnProperty("urls") && o.hasOwnProperty("url") ? (n.deprecated("RTCIceServer.url", "RTCIceServer.urls"), o = JSON.parse(JSON.stringify(o)), o.urls = o.url, delete o.url, t.push(o)) : t.push(e.iceServers[r])
                }
                e.iceServers = t
            }
            return new t(e, r)
        }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in t && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
            get: () => t.generateCertificate
        })
    }

    function u(e) {
        "object" == typeof e && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
            get() {
                return {
                    receiver: this.receiver
                }
            }
        })
    }

    function p(e) {
        const t = e.RTCPeerConnection.prototype.createOffer;
        e.RTCPeerConnection.prototype.createOffer = function(e) {
            if (e) {
                void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                const t = this.getTransceivers().find((e => "audio" === e.receiver.track.kind));
                !1 === e.offerToReceiveAudio && t ? "sendrecv" === t.direction ? t.setDirection ? t.setDirection("sendonly") : t.direction = "sendonly" : "recvonly" === t.direction && (t.setDirection ? t.setDirection("inactive") : t.direction = "inactive") : !0 !== e.offerToReceiveAudio || t || this.addTransceiver("audio"), void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                const r = this.getTransceivers().find((e => "video" === e.receiver.track.kind));
                !1 === e.offerToReceiveVideo && r ? "sendrecv" === r.direction ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : "recvonly" === r.direction && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : !0 !== e.offerToReceiveVideo || r || this.addTransceiver("video")
            }
            return t.apply(this, arguments)
        }
    }

    function f(e) {
        "object" != typeof e || e.AudioContext || (e.AudioContext = e.webkitAudioContext)
    }
})), o.register("g1Mt2", (function(e, n) {
    t(e.exports, "shimRTCIceCandidate", (function() {
        return s
    })), t(e.exports, "shimMaxMessageSize", (function() {
        return c
    })), t(e.exports, "shimSendThrowTypeError", (function() {
        return d
    })), t(e.exports, "shimConnectionState", (function() {
        return l
    })), t(e.exports, "removeAllowExtmapMixed", (function() {
        return u
    }));
    var a = o("lAOss"),
        i = o("5HIzo");

    function s(e) {
        if (!e.RTCIceCandidate || e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype) return;
        const t = e.RTCIceCandidate;
        e.RTCIceCandidate = function(e) {
            if ("object" == typeof e && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) {
                const o = new t(e),
                    n = r(a).parseCandidate(e.candidate),
                    i = Object.assign(o, n);
                return i.toJSON = function() {
                    return {
                        candidate: i.candidate,
                        sdpMid: i.sdpMid,
                        sdpMLineIndex: i.sdpMLineIndex,
                        usernameFragment: i.usernameFragment
                    }
                }, i
            }
            return new t(e)
        }, e.RTCIceCandidate.prototype = t.prototype, i.wrapPeerConnectionEvent(e, "icecandidate", (t => (t.candidate && Object.defineProperty(t, "candidate", {
            value: new e.RTCIceCandidate(t.candidate),
            writable: "false"
        }), t)))
    }

    function c(e) {
        if (!e.RTCPeerConnection) return;
        const t = i.detectBrowser(e);
        "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
            get() {
                return void 0 === this._sctp ? null : this._sctp
            }
        });
        const o = function(e) {
                if (!e || !e.sdp) return !1;
                const t = r(a).splitSections(e.sdp);
                return t.shift(), t.some((e => {
                    const t = r(a).parseMLine(e);
                    return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP")
                }))
            },
            n = function(e) {
                const t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                if (null === t || t.length < 2) return -1;
                const r = parseInt(t[1], 10);
                return r != r ? -1 : r
            },
            s = function(e) {
                let r = 65536;
                return "firefox" === t.browser && (r = t.version < 57 ? -1 === e ? 16384 : 2147483637 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 2147483637), r
            },
            c = function(e, o) {
                let n = 65536;
                "firefox" === t.browser && 57 === t.version && (n = 65535);
                const i = r(a).matchPrefix(e.sdp, "a=max-message-size:");
                return i.length > 0 ? n = parseInt(i[0].substr(19), 10) : "firefox" === t.browser && -1 !== o && (n = 2147483637), n
            },
            d = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function() {
            if (this._sctp = null, "chrome" === t.browser && t.version >= 76) {
                const {
                    sdpSemantics: e
                } = this.getConfiguration();
                "plan-b" === e && Object.defineProperty(this, "sctp", {
                    get() {
                        return void 0 === this._sctp ? null : this._sctp
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }
            if (o(arguments[0])) {
                const e = n(arguments[0]),
                    t = s(e),
                    r = c(arguments[0], e);
                let o;
                o = 0 === t && 0 === r ? Number.POSITIVE_INFINITY : 0 === t || 0 === r ? Math.max(t, r) : Math.min(t, r);
                const a = {};
                Object.defineProperty(a, "maxMessageSize", {
                    get: () => o
                }), this._sctp = a
            }
            return d.apply(this, arguments)
        }
    }

    function d(e) {
        if (!e.RTCPeerConnection || !("createDataChannel" in e.RTCPeerConnection.prototype)) return;

        function t(e, t) {
            const r = e.send;
            e.send = function() {
                const o = arguments[0],
                    n = o.length || o.size || o.byteLength;
                if ("open" === e.readyState && t.sctp && n > t.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
                return r.apply(e, arguments)
            }
        }
        const r = e.RTCPeerConnection.prototype.createDataChannel;
        e.RTCPeerConnection.prototype.createDataChannel = function() {
            const e = r.apply(this, arguments);
            return t(e, this), e
        }, i.wrapPeerConnectionEvent(e, "datachannel", (e => (t(e.channel, e.target), e)))
    }

    function l(e) {
        if (!e.RTCPeerConnection || "connectionState" in e.RTCPeerConnection.prototype) return;
        const t = e.RTCPeerConnection.prototype;
        Object.defineProperty(t, "connectionState", {
            get() {
                return {
                    completed: "connected",
                    checking: "connecting"
                } [this.iceConnectionState] || this.iceConnectionState
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "onconnectionstatechange", {
            get() {
                return this._onconnectionstatechange || null
            },
            set(e) {
                this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e)
            },
            enumerable: !0,
            configurable: !0
        }), ["setLocalDescription", "setRemoteDescription"].forEach((e => {
            const r = t[e];
            t[e] = function() {
                return this._connectionstatechangepoly || (this._connectionstatechangepoly = e => {
                    const t = e.target;
                    if (t._lastConnectionState !== t.connectionState) {
                        t._lastConnectionState = t.connectionState;
                        const r = new Event("connectionstatechange", e);
                        t.dispatchEvent(r)
                    }
                    return e
                }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), r.apply(this, arguments)
            }
        }))
    }

    function u(e) {
        if (!e.RTCPeerConnection) return;
        const t = i.detectBrowser(e);
        if ("chrome" === t.browser && t.version >= 71) return;
        if ("safari" === t.browser && t.version >= 605) return;
        const r = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function(e) {
            return e && e.sdp && -1 !== e.sdp.indexOf("\na=extmap-allow-mixed") && (e.sdp = e.sdp.split("\n").filter((e => "a=extmap-allow-mixed" !== e.trim())).join("\n")), r.apply(this, arguments)
        }
    }
})), o.register("4AKYb", (function(e, r) {
    t(e.exports, "Content", (function() {
        return y
    })), t(e.exports, "default", (function() {
        return x
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("lpEVe"),
        c = o("fywoC"),
        d = o("2FDaO"),
        l = o("cgMKQ"),
        u = o("9NjT5"),
        p = o("3TR33"),
        f = o("eEMhJ"),
        h = o("49Os1"),
        m = o("i6SGg");
    let g, v = class extends c.Component {
        render() {
            const {
                upgrades: {
                    lavaUpgrades: e
                }
            } = this.props;
            return (0, i.jsx)(l.Container, {
                style: {
                    display: "flex",
                    justifyContent: "center"
                },
                children: (0, i.jsxs)(y, {
                    children: [(0, i.jsx)(u.default, {}), e.map((e => (0, i.jsx)(p.default, {
                        icon: e.icon,
                        background: e.background,
                        name: e.name,
                        description: e.description,
                        cost: e.price,
                        canAfford: this.canAffordUpgrade(e.id),
                        onClick: () => this.purchaseUpgrade(e.id)
                    }, `lava-upgrade-${e.id}`))), (0, i.jsx)("div", {
                        style: {
                            height: 20,
                            width: "100%"
                        }
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "canAffordUpgrade", (e => {
                const t = this.props.upgrades.lavaUpgrades.find((t => t.id === e));
                return !!t && this.props.balance.balance >= t.price
            })), (0, n.default)(this, "purchaseUpgrade", (e => {
                this.canAffordUpgrade(e) && ((0, f.send)(h.default.lavaPurchasePiece, {
                    type: e
                }), (0, f.changeRoute)(m.default.questions))
            }))
        }
    };
    v = (0, a.__decorate)([(0, s.inject)("upgrades", "balance"), s.observer], v);
    var x = v;
    const y = d.default.div(g || (g = (e => e)`
  width: 100%;
  max-width: 700px;
`))
})), o.register("9NjT5", (function(e, r) {
    t(e.exports, "default", (function() {
        return g
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("5933e"),
        s = o("b9PLE"),
        c = o("kC0Tv"),
        d = o("eEMhJ"),
        l = o("lpEVe"),
        u = o("fywoC"),
        p = o("7ci8h"),
        f = o("fC6cp"),
        h = o("iMOcM");
    let m = class extends u.Component {
        render() {
            return this.props.entities.lava ? (0, a.jsxs)(p.Container, {
                children: [(0, a.jsx)(p.IconContainer, {
                    colors: {
                        text: c.default.White,
                        background: "#009624"
                    },
                    children: (0, a.jsx)(i.default, {
                        name: "fas fa-wrench fa-flip-horizontal"
                    })
                }), (0, a.jsxs)("div", {
                    style: {
                        padding: 23,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    },
                    children: [(0, a.jsx)("div", {
                        style: {
                            fontWeight: 900,
                            fontSize: 35,
                            lineHeight: "35px",
                            marginTop: 4
                        },
                        children: (0, a.jsx)(s.default, {
                            text: "Build"
                        })
                    }), (0, a.jsx)(f.default, {
                        style: {
                            marginBottom: 15,
                            marginTop: 18
                        }
                    }), (0, a.jsxs)("div", {
                        style: {
                            fontSize: 16,
                            textAlign: "center"
                        },
                        children: [(0, a.jsxs)("b", {
                            children: [(0, a.jsx)(s.default, {
                                text: "Building Height"
                            }), ":"]
                        }), " ", (0, d.numberWithCommas)(this.props.entities.lava.buildHeight), " ", (0, a.jsx)(s.default, {
                            text: (0, h.plural)("block", this.props.entities.lava.buildHeight)
                        }), (0, a.jsx)("br", {}), (0, a.jsxs)("b", {
                            children: [(0, a.jsx)(s.default, {
                                text: "Lava Height"
                            }), ":"]
                        }), " ", (0, d.numberWithCommas)(this.props.entities.lava.lavaHeight), " ", (0, a.jsx)(s.default, {
                            text: (0, h.plural)("block", this.props.entities.lava.lavaHeight)
                        })]
                    })]
                })]
            }) : null
        }
    };
    m = (0, n.__decorate)([(0, l.inject)("entities"), l.observer], m);
    var g = m
})), o.register("aQX7f", (function(e, r) {
    t(e.exports, "default", (function() {
        return P
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("7CIMU"),
        c = o("lpEVe"),
        d = o("fywoC"),
        l = o("3TR33"),
        u = o("cgMKQ"),
        p = o("4AKYb"),
        f = o("kC0Tv"),
        h = o("lxNTL"),
        m = o("2FDaO"),
        g = o("b9PLE"),
        v = o("eEMhJ"),
        x = o("49Os1"),
        y = o("i6SGg");
    let b;
    const w = [s.ImposterShopItemId.fakeInvestigation, s.ImposterShopItemId.investigationRemover, s.ImposterShopItemId.privateInvestigation, s.ImposterShopItemId.publicInvestigation];
    let C = class extends d.Component {
        render() {
            return (0, i.jsx)(u.Container, {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    background: "#cfd8dc",
                    fontFamily: "'Space Grotesk', monospace"
                },
                children: (0, i.jsxs)(p.Content, {
                    children: [(0, i.jsx)(h.default, {}), this.props.imposter.shopItems.map((e => (0, i.jsx)(l.default, {
                        style: {
                            color: f.default.White,
                            background: "#000a12"
                        },
                        icon: e.icon,
                        background: e.background,
                        name: e.name,
                        description: e.description,
                        cost: e.cost,
                        canAfford: this.canPurchaseItem(e.id),
                        aboveNameComponent: this.isItemNotAvailable(e.id) ? (0, i.jsx)(k, {}) : null,
                        onClick: () => this.purchaseItem(e.id)
                    }, `imposter-item-${e.id}`))), (0, i.jsx)("div", {
                        style: {
                            height: 25
                        }
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "isItemNotAvailable", (e => !(0 !== this.props.imposter.investigationsLeft || !w.includes(e)) || !(e !== s.ImposterShopItemId.blendIn || !this.props.imposter.me || !this.props.imposter.me.blendingIn))), (0, n.default)(this, "canPurchaseItem", (e => !this.isItemNotAvailable(e) && this.canAffordItem(e))), (0, n.default)(this, "canAffordItem", (e => {
                const t = this.props.imposter.shopItems.find((t => t.id === e));
                return !!t && this.props.balance.balance >= t.cost
            })), (0, n.default)(this, "purchaseItem", (e => {
                if (w.includes(e) && e !== s.ImposterShopItemId.investigationRemover || e === s.ImposterShopItemId.donate || e === s.ImposterShopItemId.noteViewer || e === s.ImposterShopItemId.clearListRemover) return this.props.imposter.currentShopItem = e, void(this.props.imposter.currentShopItemModalVisible = !0);
                (0, v.send)(x.default.imposter.purchase, {
                    item: e
                }), e !== s.ImposterShopItemId.meeting && (0, v.changeRoute)(y.default.questions)
            }))
        }
    };
    C = (0, a.__decorate)([(0, c.inject)("imposter", "balance"), c.observer], C);
    const k = () => (0, i.jsx)(E, {
        children: (0, i.jsx)(g.default, {
            text: "Not Available"
        })
    });
    var P = C;
    const E = m.default.div(b || (b = (e => e)`
  background: #d32f2f;
  font-size: 14px;
  padding: 3px 11px;
  border-radius: 8px;
  margin-bottom: 2px;
`))
})), o.register("lxNTL", (function(e, r) {
    t(e.exports, "default", (function() {
        return g
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("5933e"),
        s = o("b9PLE"),
        c = o("kC0Tv"),
        d = o("lpEVe"),
        l = o("fywoC"),
        u = o("7ci8h"),
        p = o("fC6cp"),
        f = o("7CIMU"),
        h = o("eEMhJ");
    let m = class extends l.Component {
        render() {
            const {
                me: e,
                investigationsLeft: t,
                meetingsLeft: r,
                impostersLeft: o
            } = this.props.imposter;
            if (!e) return null;
            const n = e.role === f.PersonRole.imposter;
            return (0, a.jsxs)(u.Container, {
                style: {
                    background: "#263238",
                    color: c.default.White
                },
                children: [(0, a.jsx)(u.IconContainer, {
                    colors: {
                        text: "#ffeb3b",
                        background: "#000a12"
                    },
                    children: (0, a.jsx)(i.default, {
                        name: "far fa-space-station-moon-alt"
                    })
                }), (0, a.jsxs)("div", {
                    style: {
                        padding: 23,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    },
                    children: [(0, a.jsx)("div", {
                        style: {
                            fontWeight: 900,
                            fontSize: 35,
                            lineHeight: "35px",
                            marginTop: 4
                        },
                        children: (0, a.jsx)(s.default, {
                            text: "Mission Control"
                        })
                    }), (0, a.jsx)(p.default, {
                        style: {
                            marginBottom: 15,
                            marginTop: 18
                        }
                    }), (0, a.jsxs)("div", {
                        style: {
                            fontSize: 16,
                            textAlign: "center"
                        },
                        children: [(0, a.jsxs)("b", {
                            children: [(0, a.jsx)(s.default, {
                                text: "Investigations Left"
                            }), ":"]
                        }), " ", (0, h.numberWithCommas)(t), (0, a.jsx)("br", {}), !n && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("b", {
                                children: [(0, a.jsx)(s.default, {
                                    text: "Impostors Left"
                                }), ":"]
                            }), " ", (0, h.numberWithCommas)(o), (0, a.jsx)("br", {})]
                        }), (0, a.jsxs)("b", {
                            children: [(0, a.jsx)(s.default, {
                                text: "Meetings Left"
                            }), ":"]
                        }), " ", (0, h.numberWithCommas)(r)]
                    })]
                })]
            })
        }
    };
    m = (0, n.__decorate)([(0, d.inject)("imposter"), d.observer], m);
    var g = m
})), o.register("cNzbt", (function(e, r) {
    t(e.exports, "default", (function() {
        return x
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("kC0Tv"),
        c = o("gOiTR"),
        d = o("li10k"),
        l = o("1fqs1"),
        u = o("i6SGg"),
        p = o("eEMhJ"),
        f = o("lpEVe"),
        h = o("fywoC");
    let m;
    const g = o("2FDaO").default.div(m || (m = (e => e)`
  height: 100%;
  width: 100%;
  background: ${0};
  display: flex;
  align-items: center;
  flex-direction: column;
`), s.default.BackgroundGray);
    let v = class extends h.Component {
        render() {
            const e = this.props.upgrades.upgrades.filter((e => e.name === this.props.upgrades.currentlySelectedUpgrade))[0],
                t = this.props.upgrades.upgradeLevelTabs[(0, p.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)];
            return (0, i.jsxs)(g, {
                children: [(0, i.jsx)(c.default, {
                    onPurchase: this.markAsPurchased
                }), (0, i.jsx)(l.default, {
                    levels: e.levels,
                    active: t
                }), (0, i.jsx)(d.default, {
                    open: this.state.purchased,
                    onContinue: this.closeModal
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "state", {
                purchased: !1
            }), (0, n.default)(this, "closeModal", (e => {
                this.setState({
                    purchased: !1
                }, (() => e ? setTimeout((() => (0, p.changeRoute)(u.default.questions)), 300) : null))
            })), (0, n.default)(this, "markAsPurchased", (() => this.setState({
                purchased: !0
            })))
        }
    };
    v = (0, a.__decorate)([(0, f.inject)("upgrades"), f.observer], v);
    var x = v
})), o.register("gOiTR", (function(e, r) {
    t(e.exports, "default", (function() {
        return M
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("b9PLE"),
        c = o("fgUFi"),
        d = o("kC0Tv"),
        l = o("hbfMQ"),
        u = o("49Os1"),
        p = o("86Vcm"),
        f = o("eEMhJ"),
        h = o("lpEVe"),
        m = o("fywoC"),
        g = o("2FDaO");
    let v, x, y, b, w, C = e => e;
    const k = "4px",
        P = g.default.div(v || (v = C`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        E = g.default.div(x || (x = C`
  height: 90%;
  max-height: 500px;
  width: 90%;
  max-width: 700px;
  border-radius: ${0};
  box-shadow: ${0};
  background: ${0};
  color: ${0};
`), k, l.default.basic, (e => e.theme.question.background), (e => e.theme.question.text)),
        S = g.default.div(y || (y = C`
  height: 20%;
  border-top-left-radius: ${0};
  border-top-right-radius: ${0};
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`), k, k),
        T = g.default.div(b || (b = C`
  height: 50%;
  width: 100%;
`)),
        B = g.default.div(w || (w = C`
  height: 30%;
  width: 100%;
  background: ${0};
  cursor: ${0};
  color: ${0};
  border-bottom-left-radius: ${0};
  border-bottom-right-radius: ${0};
  transition: background 0.25s;
  &:hover {
    background: ${0};
  }
`), (e => e.disabled ? d.default.DisabledGray : "rgba(255,255,255,0.2)"), (e => e.disabled ? "not-allowed" : "pointer"), d.default.White, k, k, (e => e.disabled ? d.default.DisabledGray : "rgba(255,255,255,0.25)"));
    let j = class extends m.Component {
        render() {
            const e = this.getBuyDetails();
            return (0, i.jsx)(P, {
                children: (0, i.jsxs)(E, {
                    children: [(0, i.jsx)(S, {
                        children: (0, i.jsx)(c.default, {
                            paddingHorizontal: 30,
                            max: 40,
                            text: (0, i.jsx)(s.default, {
                                text: this.getTitle()
                            })
                        })
                    }), (0, i.jsx)(T, {
                        children: (0, i.jsx)(c.default, {
                            mode: "multi",
                            max: 200,
                            text: this.getValue()
                        })
                    }), (0, i.jsx)(B, {
                        onClick: e.onClick,
                        disabled: e.disabled,
                        children: (0, i.jsx)(c.default, {
                            max: 45,
                            paddingHorizontal: 20,
                            paddingVertical: 20,
                            text: e.disabledAllText ? (0, i.jsx)(s.default, {
                                text: "Buy for",
                                suffix: ` ${e.text}`
                            }) : (0, i.jsx)(s.default, {
                                text: e.text
                            })
                        })
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "canPurchase", (() => this.ownedLevel() < this.currentlySelectedLevel() && this.getPrice() <= this.props.balance.balance)), (0, n.default)(this, "currentlySelectedLevel", (() => this.props.upgrades.upgradeLevelTabs[(0, f.upgradeNameToKey)(this.currentUpgrade().name)])), (0, n.default)(this, "ownedLevel", (() => this.props.upgrades.upgradeLevels[(0, f.upgradeNameToKey)(this.currentUpgrade().name)])), (0, n.default)(this, "currentUpgrade", (() => this.props.upgrades.upgrades.filter((e => e.name === this.props.upgrades.currentlySelectedUpgrade))[0])), (0, n.default)(this, "getTitle", (() => {
                const e = this.currentUpgrade();
                return e.name === p.upgradeNames.insurance ? "Amount Covered" : e.name
            })), (0, n.default)(this, "getValue", (() => {
                const e = this.currentUpgrade(),
                    t = this.getLevel().value;
                return e.name === p.upgradeNames.insurance ? Math.round(100 * (1 - t)) + "%" : e.name === p.upgradeNames.multiplier ? t + "x" : (0, f.getMoney)(t * this.props.balance.incomeMultiplier)
            })), (0, n.default)(this, "getBuyDetails", (() => {
                if (this.ownedLevel() >= this.currentlySelectedLevel()) return {
                    text: "Already Owned",
                    disabled: !0,
                    onClick: null
                };
                const e = this.canPurchase();
                return {
                    text: (0, f.getMoney)(this.getPrice()),
                    disabled: !e,
                    onClick: e ? this.purchaseUpgrade : null,
                    disabledAllText: !0
                }
            })), (0, n.default)(this, "purchaseUpgrade", (() => {
                const e = this.currentUpgrade(),
                    t = this.currentlySelectedLevel();
                (0, f.send)(u.default.upgradePurchased, {
                    upgradeName: e.name,
                    level: t
                }), this.props.onPurchase()
            })), (0, n.default)(this, "getLevel", (() => {
                const e = this.currentlySelectedLevel();
                return this.currentUpgrade().levels.filter(((t, r) => r + 1 === e))[0]
            })), (0, n.default)(this, "getPrice", (() => (0, f.getUpgradeCost)(this.getLevel().price)))
        }
    };
    j = (0, a.__decorate)([(0, h.inject)("upgrades", "balance"), h.observer], j);
    var M = j
})), o.register("li10k", (function(e, n) {
    t(e.exports, "confettiConfig", (function() {
        return S
    })), t(e.exports, "default", (function() {
        return O
    }));
    var a = o("divCp"),
        i = o("kHqmx"),
        s = o("hxEiv"),
        c = o("7SwYo"),
        d = o("fThXt"),
        l = o("b9PLE"),
        u = o("kC0Tv"),
        p = o("l360q"),
        f = o("86Vcm"),
        h = o("6sear"),
        m = o("eEMhJ"),
        g = o("lpEVe"),
        v = o("fywoC"),
        x = o("2RhIb"),
        y = o("2FDaO");
    let b, w, C, k, P, E = e => e;
    const S = {
            angle: 90,
            spread: 67,
            startVelocity: 60,
            elementCount: 50,
            decay: .87
        },
        T = y.default.div(b || (b = E`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: ${0};
  display: ${0};
`), (e => e.open ? 0 : -1), (e => e.visible ? "flex" : "none")),
        B = y.default.div(w || (w = E`
  background: ${0};
  font-family: ${0};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), u.default.White, p.default.name),
        j = y.default.div(C || (C = E`
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 2.5s;
`)),
        M = y.default.div(k || (k = E`
  font-weight: bold;
  font-size: 45px;
`)),
        _ = y.default.div(P || (P = E`
  font-size: 23px;
  text-align: center;
`));
    let R = class extends v.Component {
        componentDidUpdate(e) {
            this.props.open && !e.open && (h.celebrate.play(), setTimeout((() => this.setState({
                showConfetti: !0
            })), 1e3))
        }
        componentDidMount() {
            document.addEventListener("keydown", this.handleKeyDown)
        }
        componentWillUnmount() {
            document.removeEventListener("keydown", this.handleKeyDown)
        }
        render() {
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(d.default, {
                    open: this.props.open,
                    close: this.closeWithoutMovingForward,
                    customMaxWidth: "500px",
                    children: (0, s.jsxs)(B, {
                        children: [(0, s.jsx)(j, {
                            className: "animated pulse infinite",
                            children: (0, s.jsx)("img", {
                                style: {
                                    maxHeight: 150
                                },
                                src: (0, m.getAssetPath)("balloons.svg")
                            })
                        }), (0, s.jsxs)(M, {
                            children: [(0, s.jsx)(l.default, {
                                text: "Purchased"
                            }), "!"]
                        }), (0, s.jsx)(_, {
                            children: (0, s.jsx)(l.default, {
                                text: this.getDescription()
                            })
                        }), (0, s.jsx)("div", {
                            style: {
                                marginTop: 10
                            },
                            children: (0, s.jsx)(c.default, {
                                onClick: this.closeWithMovingForward,
                                type: "primary",
                                label: (0, s.jsx)(l.default, {
                                    text: "Continue to Questions"
                                })
                            })
                        })]
                    })
                }), (0, s.jsx)(T, {
                    visible: this.state.showConfetti,
                    open: this.props.open,
                    children: (0, s.jsx)(r(x), {
                        active: this.state.showConfetti,
                        config: S
                    })
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, a.default)(this, "state", {
                showConfetti: !1
            }), (0, a.default)(this, "upgradeName", (() => this.props.upgrades.currentlySelectedUpgrade)), (0, a.default)(this, "upgradeDetails", (() => {
                const e = this.props.upgrades.upgrades.filter((e => e.name === this.upgradeName()))[0];
                let t = 1;
                return {
                    ...e.levels.filter(((e, r) => r + 1 === this.props.upgrades.upgradeLevelTabs[(0, m.upgradeNameToKey)(this.upgradeName())] && (t = r + 1, !0)))[0],
                    level: t
                }
            })), (0, a.default)(this, "closeWithMovingForward", (() => this.close(!0))), (0, a.default)(this, "closeWithoutMovingForward", (() => this.close(!1))), (0, a.default)(this, "close", (e => {
                this.setState({
                    showConfetti: !1
                }, (() => this.props.onContinue(e)))
            })), (0, a.default)(this, "handleKeyDown", (({
                keyCode: e = 0
            }) => {
                13 === e && this.props.open && this.props.onContinue(!0)
            })), (0, a.default)(this, "getDescription", (() => {
                const e = this.upgradeDetails().value,
                    t = this.upgradeName();
                return t === f.upgradeNames.moneyPerQuestion ? `You will now earn/lose ${(0,m.getMoney)(e*this.props.balance.incomeMultiplier)} per question.` : t === f.upgradeNames.streakBonus ? `You'll now earn an extra ${(0,m.getMoney)(e*this.props.balance.incomeMultiplier)} for each question you answer correctly in a row.` : t === f.upgradeNames.multiplier ? `Each question's earnings/loss will now be multiplied by ${(0,m.numberWithCommas)(e)}x.` : t === f.upgradeNames.insurance ? `After answering incorrectly, you will now only have to pay back ${100*e}% of the cost.` : null
            }))
        }
    };
    R = (0, i.__decorate)([(0, g.inject)("upgrades", "balance"), g.observer], R);
    var O = R
})), o.register("2RhIb", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var r, n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, r, o) {
                return r && e(t.prototype, r), o && e(t, o), t
            }
        }(),
        a = o("fywoC"),
        i = (r = a) && r.__esModule ? r : {
            default: r
        },
        s = o("3o5yH");
    var c = {
            position: "relative"
        },
        d = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return r.setRef = r.setRef.bind(r), r
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
            }(t, e), n(t, [{
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
                        style: c,
                        ref: this.setRef
                    })
                }
            }]), t
        }(a.Component);
    e.exports.default = d
})), o.register("3o5yH", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.confetti = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = Object.assign({}, a, t),
            s = i.elementCount,
            c = i.colors,
            d = i.width,
            l = i.height,
            u = i.angle,
            p = i.spread,
            f = i.startVelocity,
            h = i.decay,
            m = i.duration,
            g = i.random,
            v = r(e, s, c, d, l),
            x = v.map((function(e) {
                return {
                    element: e,
                    physics: o(u, p, f, g)
                }
            }));
        return n(e, x, h, m)
    };

    function r(e, t, r, o, n) {
        return Array.from({
            length: t
        }).map((function(t, a) {
            var i = document.createElement("div"),
                s = r[a % r.length];
            return i.style["background-color"] = s, i.style.width = o, i.style.height = n, i.style.position = "absolute", i.style.willChange = "transform, opacity", e.appendChild(i), i
        }))
    }

    function o(e, t, r, o) {
        var n = e * (Math.PI / 180),
            a = t * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * o(),
            wobbleSpeed: .1 + .1 * o(),
            velocity: .5 * r + o() * r,
            angle2D: -n + (.5 * a - o() * a),
            angle3D: -Math.PI / 4 + o() * (Math.PI / 2),
            tiltAngle: o() * Math.PI,
            tiltAngleSpeed: .1 + .3 * o()
        }
    }

    function n(e, t, r, o) {
        var n = void 0;
        return new Promise((function(a) {
            requestAnimationFrame((function i(s) {
                n || (n = s);
                var c = n === s ? 0 : (s - n) / o;
                t.forEach((function(e) {
                    return function(e, t, r) {
                        e.physics.x += Math.cos(e.physics.angle2D) * e.physics.velocity, e.physics.y += Math.sin(e.physics.angle2D) * e.physics.velocity, e.physics.z += Math.sin(e.physics.angle3D) * e.physics.velocity, e.physics.wobble += e.physics.wobbleSpeed, e.physics.velocity *= r, e.physics.y += 3, e.physics.tiltAngle += e.physics.tiltAngleSpeed;
                        var o = e.physics,
                            n = o.x,
                            a = o.y,
                            i = o.tiltAngle,
                            s = o.wobble,
                            c = "translate3d(" + (n + 10 * Math.cos(s)) + "px, " + (a + 10 * Math.sin(s)) + "px, 0) rotate3d(1, 1, 1, " + i + "rad)";
                        e.element.style.transform = c, e.element.style.opacity = 1 - t
                    }(e, c, r)
                })), s - n < o ? requestAnimationFrame(i) : (t.forEach((function(t) {
                    if (t.element.parentNode === e) return e.removeChild(t.element)
                })), a())
            }))
        }))
    }
    var a = {
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
})), o.register("1fqs1", (function(e, r) {
    t(e.exports, "default", (function() {
        return m
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("iM6w4"),
        c = o("6sear"),
        d = o("eEMhJ"),
        l = o("lpEVe"),
        u = o("fywoC");
    let p;
    const f = o("2FDaO").default.div(p || (p = (e => e)`
  height: 40%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`));
    let h = class extends u.Component {
        componentDidMount() {
            document.addEventListener("keydown", this.handleKeyDown)
        }
        componentWillUnmount() {
            document.removeEventListener("keydown", this.handleKeyDown)
        }
        render() {
            const e = this.currentLevel();
            return (0, i.jsx)(f, {
                children: this.props.levels.map(((t, r) => (0, i.jsx)(s.default, {
                    level: r + 1,
                    changeLevel: this.changeLevel,
                    chosen: r + 1 === this.props.active,
                    canAfford: this.props.balance.balance >= (0, d.getUpgradeCost)(t.price),
                    alreadyPurchased: e >= r + 1
                }, t.value)))
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "changeLevel", (e => {
                e !== this.props.active && (c.click2.play(), this.props.upgrades.upgradeLevelTabs[(0, d.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)] = e)
            })), (0, n.default)(this, "currentLevel", (() => this.props.upgrades.upgradeLevels[(0, d.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)])), (0, n.default)(this, "getNextPosition", (e => {
                const t = this.props.active;
                return "left" === e && 1 !== t && 6 !== t ? t - 1 : "right" === e && 5 !== t && 10 !== t ? t + 1 : "up" === e && t - 5 > 0 ? t - 5 : "down" === e && t + 5 < 11 ? t + 5 : t
            })), (0, n.default)(this, "handleKeyDown", (({
                keyCode: e = 0
            }) => {
                37 !== e && 65 !== e || this.changeLevel(this.getNextPosition("left")), 38 !== e && 87 !== e || this.changeLevel(this.getNextPosition("up")), 39 !== e && 68 !== e || this.changeLevel(this.getNextPosition("right")), 40 !== e && 83 !== e || this.changeLevel(this.getNextPosition("down"))
            }))
        }
    };
    h = (0, a.__decorate)([(0, l.inject)("upgrades", "balance"), l.observer], h);
    var m = h
})), o.register("iM6w4", (function(e, r) {
    t(e.exports, "default", (function() {
        return g
    }));
    var n = o("divCp"),
        a = o("hxEiv"),
        i = o("5933e"),
        s = o("b9PLE"),
        c = o("fgUFi"),
        d = o("kC0Tv"),
        l = o("fywoC"),
        u = o("2FDaO");
    let p, f, h = e => e;
    class m extends l.Component {
        render() {
            return (0, a.jsx)(v, {
                onMouseDown: this.changeLevel,
                chosen: this.props.chosen,
                children: (0, a.jsx)(c.default, {
                    mode: "single",
                    max: 30,
                    paddingHorizontal: 10,
                    text: (0, a.jsxs)(x, {
                        children: [(0, a.jsx)("div", {
                            style: {
                                color: this.getCircleColor(),
                                marginRight: 3
                            },
                            children: (0, a.jsx)(i.default, {
                                name: "fas fa-circle"
                            })
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)(s.default, {
                                text: "Level " + this.props.level
                            })
                        })]
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "getCircleColor", (() => this.props.alreadyPurchased ? "gray" : this.props.canAfford ? "green" : "red")), (0, n.default)(this, "changeLevel", (() => this.props.changeLevel(this.props.level)))
        }
    }
    var g = m;
    const v = u.default.div(p || (p = h`
  width: 20%;
  height: 50%;
  border-style: solid;
  border-width: 0.17em;
  box-sizing: border-box;
  display: flex;
  border-color: rgba(255, 255, 255, 0.7);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${0};
  color: ${0};
  &:nth-child(1),
  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    border-right-style: none;
    border-bottom-style: none;
  }
  &:nth-child(5) {
    border-bottom-style: none;
  }
  &:nth-child(6),
  :nth-child(7),
  :nth-child(8),
  :nth-child(9) {
    border-right-style: none;
  }
`), (e => e.chosen ? "#28004c" : "#0D0019"), d.default.White),
        x = u.default.div(f || (f = h`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 570px) {
    flex-direction: column;
  }
`))
})), o.register("iLcra", (function(e, r) {
    t(e.exports, "default", (function() {
        return k
    }));
    var n = o("hxEiv"),
        a = o("9GW62"),
        i = o("b9PLE"),
        s = o("eEMhJ"),
        c = o("lpEVe"),
        d = o("fywoC"),
        l = o("2FDaO"),
        u = o("dxF3f"),
        p = o("F0BFD"),
        f = o("eVWDi"),
        h = o("iMOcM"),
        m = o("2bQJ3"),
        g = o("fQMql");
    let v, x, y = e => e;
    const b = l.default.div.attrs({
            className: "scroll-y"
        })(v || (v = y`
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${0}) repeat 0 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: ${0};
`), (0, s.getAssetPath)("background.png"), (() => (0, s.mainFontName)())),
        w = l.default.div(x || (x = y`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 90%;
  max-width: 700px;
  animation-delay: ${0}s;
  animation-duration: 7s;
`), (e => e.animationDelay)),
        C = e => {
            const t = (e, t) => (Math.pow(10, t) + ~~e).toString().substring(1),
                r = e % 60;
            return `${t(Math.floor(e/60),2)}:${t(r,2)}`
        };
    var k = (0, c.observer)((() => {
        const {
            entities: {
                lava: e
            },
            balance: t,
            questions: r
        } = d.useContext(g.default);
        if ((0, s.inImposterMode)()) return (0, n.jsx)(m.default, {});
        let o = 0;
        return (0, s.inBossBattleMode)() && (o = 11), (0, s.inZombiesVsHumansMode)() && (o = 17), (0, s.inPardyMode)() && (o = 16), e && (o = 13), (0, n.jsx)(b, {
            children: (0, n.jsxs)(w, {
                className: "animated zoomInDown",
                animationDelay: o,
                children: [(0, n.jsx)(f.default, {
                    customText: e ? "🌋 Game Over!" : (0, s.inZombiesVsHumansMode)() ? (0, s.defendingHomebaseResultsInfo)().text : null
                }), (0, s.inZombiesVsHumansMode)() ? (0, s.defendingHomebaseResultsInfo)().won ? (0, n.jsx)(u.default, {}) : null : (0, n.jsx)(u.default, {}), e ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(p.default, {
                        customColor: "#1B5E20",
                        amount: C(e.secondsLasted),
                        tagline: (0, n.jsx)(i.default, {
                            text: "Lava Survival Time"
                        })
                    }), (0, n.jsx)(p.default, {
                        amount: `${(0,s.numberWithCommas)(e.buildHeight)} ${(0,h.plural)("block",e.buildHeight)}`,
                        tagline: (0, n.jsx)(i.default, {
                            text: "Building Height"
                        })
                    }), (0, n.jsx)(p.default, {
                        amount: `${(0,s.numberWithCommas)(e.buildPieces)} ${(0,h.plural)("piece",e.buildPieces)}`,
                        tagline: (0, n.jsx)(i.default, {
                            text: "Building Pieces"
                        })
                    })]
                }) : null, (0, n.jsx)(p.default, {
                    amount: (0, s.getMoney)(t.balance),
                    tagline: (0, n.jsx)(i.default, {
                        text: (0, s.inDrawMode)() ? "Final Score" : "Final Balance"
                    })
                }), !(0, s.inDrawMode)() && (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(p.default, {
                        customColor: "#1B5E20",
                        amount: (0, s.numberWithCommas)(r.questionsAnsweredCorrectly),
                        tagline: (0, n.jsx)(i.default, {
                            text: "Questions Answered Correctly"
                        })
                    }), (0, n.jsx)(p.default, {
                        customColor: "#DD2C00",
                        amount: (0, s.numberWithCommas)(r.questionsAnsweredIncorrectly),
                        tagline: (0, n.jsx)(i.default, {
                            text: "Questions Answered Incorrectly"
                        })
                    })]
                }), !(0, s.inZombiesVsHumansMode)() && !e && (0, n.jsx)(a.default, {
                    showSelf: !0
                })]
            })
        })
    }))
})), o.register("dxF3f", (function(e, r) {
    t(e.exports, "default", (function() {
        return y
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("fgUFi"),
        c = o("3ukmh"),
        d = o("kC0Tv"),
        l = o("hbfMQ"),
        u = o("49Os1");
    o("jlxb2");
    var p = o("1rlgk"),
        f = o("eEMhJ"),
        h = o("lpEVe"),
        m = o("fywoC");
    let g;
    const v = o("2FDaO").default.div(g || (g = (e => e)`
  height: 20vh;
  box-shadow: ${0};
  background: ${0};
  width: 100%;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: all 0.21s;
  box-sizing: border-box;
  &:hover {
    background: ${0};
    color: ${0};
  }
`), l.default.basic, d.default.White, (e => e.theme.question.background), (e => e.theme.question.text));
    let x = class extends m.Component {
        render() {
            return this.props.gameOptions.clapping ? (0, i.jsx)(v, {
                onClick: this.onClap,
                children: (0, i.jsx)(s.default, {
                    max: 75,
                    text: (0, i.jsxs)("div", {
                        className: "animated pulse infinite",
                        children: [(0, c.getClappingEmoji)(), " ", (0, f.numberWithCommas)(this.state.clapCount)]
                    })
                })
            }) : null
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "state", {
                clapCount: 0
            }), (0, n.default)(this, "onClap", (() => {
                const e = this.props.powerups.activePowerups.includes(p.PowerupNames.clapMultiplier) ? 10 : 1;
                (0, c.getClapSound)().play(), (0, f.send)(u.default.clap, {
                    amount: e
                }), this.setState({
                    clapCount: this.state.clapCount + e
                })
            }))
        }
    };
    x = (0, a.__decorate)([(0, h.inject)("gameOptions", "powerups"), h.observer], x);
    var y = x
})), o.register("3ukmh", (function(e, r) {
    t(e.exports, "getClappingEmoji", (function() {
        return a
    })), t(e.exports, "getClapSound", (function() {
        return i
    }));
    var n = o("6sear");
    const a = () => "👏",
        i = () => n.clap
})), o.register("F0BFD", (function(e, r) {
    t(e.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv"),
        a = o("fgUFi"),
        i = o("kC0Tv");
    o("fywoC");
    var s = o("2FDaO");
    let c, d, l, u = e => e;
    const p = s.default.div(c || (c = u`
  box-sizing: border-box;
  background: ${0};
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), i.default.White),
        f = s.default.div(d || (d = u`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
`)),
        h = s.default.div(l || (l = u`
  height: 72px;
  width: 100%;
  color: ${0};
`), (e => e.customColor ? e.customColor : i.default.Black));
    var m = e => (0, n.jsxs)(p, {
        children: [(0, n.jsx)(f, {
            children: e.tagline
        }), (0, n.jsx)(h, {
            customColor: e.customColor,
            children: (0, n.jsx)(a.default, {
                paddingHorizontal: 10,
                paddingVertical: 0,
                max: 72,
                text: e.amount
            })
        })]
    })
})), o.register("eVWDi", (function(e, n) {
    t(e.exports, "default", (function() {
        return x
    }));
    var a = o("hxEiv"),
        i = o("fgUFi"),
        s = o("kC0Tv"),
        c = o("hbfMQ"),
        d = o("li10k"),
        l = o("lpEVe"),
        u = o("fywoC"),
        p = o("2RhIb"),
        f = o("2FDaO"),
        h = o("fQMql");
    let m;
    const g = e => {
            const t = e % 10,
                r = e % 100;
            return 1 === t && 11 !== r ? e + "st" : 2 === t && 12 !== r ? e + "nd" : 3 === t && 13 !== r ? e + "rd" : e + "th"
        },
        v = f.default.div(m || (m = (e => e)`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${0};
  box-shadow: ${0};
  border-radius: 8px;
  margin-bottom: 5px;
  animation-delay: 7s;
`), s.default.White, c.default.basic);
    var x = (0, l.observer)((e => {
        const [t, o] = u.useState(!1), {
            user: n
        } = u.useContext(h.default);
        return u.useEffect((() => {
            setTimeout((() => {
                o(!0)
            }), 7100)
        }), []), (0, a.jsxs)(v, {
            children: [(0, a.jsx)(r(p), {
                active: t,
                config: {
                    ...d.confettiConfig,
                    angle: 270
                }
            }), (0, a.jsx)(i.default, {
                customClass: "animated fadeIn",
                customStyle: {
                    animationDelay: "7s"
                },
                max: 250,
                text: e.customText || g(n.place) + "!"
            })]
        })
    }))
})), o.register("2bQJ3", (function(e, r) {
    t(e.exports, "default", (function() {
        return P
    }));
    var n = o("hxEiv"),
        a = o("kC0Tv"),
        i = o("49Os1"),
        s = o("eEMhJ"),
        c = o("fgUFi"),
        d = o("7CIMU"),
        l = o("lpEVe"),
        u = o("fywoC"),
        p = o("2FDaO"),
        f = o("jcI11"),
        h = o("fQMql");
    let m, g, v, x, y, b, w, C, k = e => e;
    var P = (0, l.observer)((() => {
        const {
            imposter: e
        } = u.useContext(h.default), t = e.impostersLeft >= 1, r = (0, f.DecryptData)(e.epl) || [];
        return u.useEffect((() => {
            (0, s.send)(i.default.imposter.requestPeople)
        }), []), (0, n.jsx)(E, {
            children: (0, n.jsxs)(S, {
                children: [(0, n.jsx)(T, {
                    children: (0, n.jsx)(c.default, {
                        max: 120,
                        paddingVertical: 0,
                        paddingHorizontal: 0,
                        text: (t ? "Impostors" : "Crewmates") + " Win"
                    })
                }), (0, n.jsxs)(B, {
                    children: [(0, n.jsx)(j, {
                        style: {
                            background: t ? "#d32f2f" : "#4caf50"
                        }
                    }), (0, n.jsx)(M, {
                        children: (0, n.jsx)(_, {
                            src: (0, s.getAssetPath)(t ? "astronaut2.svg" : "astronaut.svg")
                        })
                    })]
                }), (0, n.jsxs)(R, {
                    children: [(0, n.jsxs)("b", {
                        children: [(0, s.plural)("Impostor", r.filter((e => e.role === d.PersonRole.imposter)).length), ":"]
                    }), " ", (0, s.teamPlayerNames)(r.filter((e => e.role === d.PersonRole.imposter)).map((e => e.name)))]
                })]
            })
        })
    }));
    const E = p.default.div.attrs({
            className: "flex hc maxWidth maxHeight scroll-y"
        })(m || (m = k`
  background: ${0};
  color: ${0};
  align-items: flex-start;
`), a.default.Black, a.default.White),
        S = p.default.div.attrs({
            className: "flex flex-column vc animated fadeIn"
        })(g || (g = k`
  animation-duration: 12s;
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: 'Space Grotesk', monospace;
  text-align: center;
  width: 80%;
  max-width: 500px;
`)),
        T = p.default.div.attrs({
            className: "maxWidth"
        })(v || (v = k`
  height: 77px;
  font-weight: 700;
`)),
        B = p.default.div(x || (x = k`
  height: 250px;
  width: 300px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 75px;
`)),
        j = p.default.div.attrs({
            className: "maxWidth maxHeight animated pulse infinite"
        })(y || (y = k`
  border-radius: 50%;
  animation-duration: 2.5s;
  filter: blur(50px);
`)),
        M = p.default.div.attrs({
            className: "flex maxWidth hc vc"
        })(b || (b = k`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`)),
        _ = p.default.img(w || (w = k`
  filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.4));
  height: 160px;
`)),
        R = p.default.div(C || (C = k`
  font-size: 24px;
`))
})), o.register("d2Ye6", (function(e, r) {
    t(e.exports, "default", (function() {
        return w
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("9Mv96"),
        s = o("b9PLE"),
        c = o("eEMhJ"),
        d = o("4MuSt"),
        l = o("lpEVe"),
        u = o("fywoC"),
        p = o("2FDaO"),
        f = o("j2XHK"),
        h = o("c7Gd1");
    let m, g, v = e => e;
    const x = (0, p.default)(h.Card)(m || (m = v`
  @media (min-width: 760px) and (min-height: 719px) {
    transform: scale(1.5);
  }
`)),
        y = p.default.div(g || (g = v`
  background: ${0};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`), (e => e.background));
    let b = class extends u.Component {
        componentDidMount() {
            (0, d.when)((() => this.props.gameValues.gameStatus === f.GameStatus.gameplay), (() => (0, c.startGame)()))
        }
        render() {
            const {
                user: e
            } = this.props, t = e.team && e.team.meta && e.team.meta.isBoss;
            return (0, a.jsx)(y, {
                background: (0, c.getTeamColor)(),
                children: (0, a.jsx)(x, {
                    children: e.team ? (0, a.jsxs)(a.Fragment, {
                        children: [t ? (0, a.jsx)("img", {
                            src: (0, c.getAssetPath)("power-fight.svg"),
                            style: {
                                width: "40%"
                            }
                        }) : (0, a.jsx)("img", {
                            src: (0, c.getAssetPath)("team.svg"),
                            style: {
                                width: "60%"
                            }
                        }), (0, a.jsx)(h.Title, {
                            children: (0, a.jsx)(s.default, {
                                text: (0, c.capitalizeFirstLetter)(e.team.id)
                            })
                        }), (0, a.jsx)(h.Details, {
                            children: t ? (0, a.jsx)(s.default, {
                                text: "You're the boss. Ready to face the challengers?"
                            }) : (0, c.inZombiesVsHumansMode)() ? (0, a.jsx)(s.default, {
                                text: "Get ready for battle!"
                            }) : (0, a.jsx)(s.default, {
                                text: "Go find the rest of your team!"
                            })
                        })]
                    }) : (0, a.jsx)(i.default, {})
                })
            })
        }
    };
    b = (0, n.__decorate)([(0, l.inject)("user", "gameValues"), l.observer], b);
    var w = b
})), o.register("c7Gd1", (function(e, r) {
    t(e.exports, "Title", (function() {
        return u
    })), t(e.exports, "Details", (function() {
        return p
    })), t(e.exports, "Card", (function() {
        return f
    }));
    var n = o("2FDaO"),
        a = o("hbfMQ"),
        i = o("kC0Tv");
    let s, c, d, l = e => e;
    const u = n.default.div(s || (s = l`
  font-size: 34px;
  font-weight: bold;
`)),
        p = n.default.div(c || (c = l`
  font-size: 21px;
  margin-bottom: 7px;
`)),
        f = n.default.div(d || (d = l`
  padding: 20px;
  margin: 15px;
  box-shadow: ${0};
  background: ${0};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  text-align: center;
  max-width: 400px;
  box-sizing: border-box;
`), a.default.basic, i.default.White)
})), o.register("LLwiS", (function(e, n) {
    t(e.exports, "default", (function() {
        return h
    }));
    var a = o("hxEiv"),
        i = o("fywoC"),
        s = o("lpEVe"),
        c = o("r8ulO"),
        d = o("lKmIF"),
        l = o("6sear"),
        u = o("eEMhJ"),
        p = o("i6SGg"),
        f = o("fQMql");
    var h = (0, s.observer)((() => {
        const {
            questions: e,
            balance: t,
            gameOptions: o,
            user: n,
            translations: s,
            imposter: h,
            theme: m
        } = r(i).useContext(f.default);
        r(i).useEffect((() => (e.lockedViewingCorrectAnswer = !1, () => {
            e.lockedViewingCorrectAnswer = !1
        })), []);
        const g = e => (0, u.inImposterMode)() ? `${e<=0?"-":"+"}${(0,u.numberWithCommas)(Math.round(Math.abs(e)))}` : `${e>0?"+":""}${(0,u.getMoney)(e)}`,
            v = () => {
                const t = (0, u.questionLocation)().find((t => t._id === e.lastQuestion));
                return t || null
            };
        return (0, a.jsx)(c.default, {
            continueAction: () => {
                e.transitioningToNextQuestion = !1
            },
            ecc: e.ceq,
            lastQuestion: v(),
            lastQuestionCorrectAnswer: (() => {
                const e = v();
                if (!e) return null;
                let t = e.answers.find((e => e.correct));
                return t || (t = {
                    text: "No Correct Answer",
                    correct: !1,
                    _id: "no-correct-answer"
                }), t
            })(),
            lastQuestionAnsweredCorrect: e.lastQuestionCorrect,
            onQuestionAnswered: e => (0, u.questionAnswered)(e),
            nextQuestion: e.nextQuestion,
            responseActions: (() => {
                const t = [];
                return e.lastQuestionCorrect && ((0, u.blockShopping)() || t.push({
                    handleClick: () => (0, u.changeRoute)(p.default.shop),
                    background: m.theme.response.shop.background,
                    text: (0, u.shopName)()
                })), t
            })(),
            textShownWhenAnsweringCorrectly: g(t.balanceChangeIfCorrect),
            textShownWhenAnsweringIncorrectly: g(t.balanceChangeIfIncorrect),
            correctSound: (0, u.inImposterMode)() ? l.spark : l.correct,
            incorrectSound: l.incorrect,
            onActionSound: l.click,
            language: o.language,
            translations: s.translations,
            allowGoogleTranslate: o.allowGoogleTranslate,
            readToMeEnabled: n.readToMeEnabled,
            blockKeyboardEvents: h.noteDrawerOpen,
            defaultBackgroundColor: m.theme.defaultBackground,
            continueButtonColor: m.theme.response.continue,
            answerColors: m.theme.palette,
            questionColor: m.theme.question,
            textInputButtonColor: m.theme.palette[2],
            correctAnswerColor: (0, u.inImposterMode)() ? {
                background: d.default.Black,
                text: "#ffeb3b"
            } : m.theme.response.correctAnswer,
            incorrectAnswerColor: m.theme.response.incorrectAnswer,
            onLockedChange: t => {
                e.lockedViewingCorrectAnswer = t
            }
        })
    }))
})), o.register("8RCOQ", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("lpEVe"),
        s = o("fywoC"),
        c = o("04QpK");
    let d = class extends s.Component {
        render() {
            return this.props.powerups.screenAttack.powerupName && this.props.powerups.screenAttack.attackerName && this.props.powerups.screenAttack.fullScreen ? (0, a.jsx)(c.default, {}) : null
        }
    };
    d = (0, n.__decorate)([(0, i.inject)("powerups"), i.observer], d);
    var l = d
})), o.register("04QpK", (function(e, r) {
    t(e.exports, "default", (function() {
        return T
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("kC0Tv"),
        c = o("lpEVe"),
        d = o("fywoC"),
        l = o("f6w71"),
        u = o("2FDaO");
    let p, f, h, m, g, v, x = e => e;
    const y = e => new Promise((t => setTimeout(t, e))),
        b = u.default.div(p || (p = x`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${0};
`), s.default.Black),
        w = u.default.div(f || (f = x`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
url("${0}");
  background-size: cover;
  background-position: center;
  color: ${0};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`), (e => e.backgroundImage), s.default.White),
        C = u.default.div(h || (h = x`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 736px) and (min-height: 483px) {
    transform: scale(1.4);
  }
  font-weight: bold;
`)),
        k = u.default.div(m || (m = x`
  font-size: 37px;
  margin-bottom: 3px;
`)),
        P = u.default.div(g || (g = x`
  font-size: 20px;
  opacity: 0.8;
`)),
        E = u.default.div(v || (v = x`
  font-size: 23px;
`));
    let S = class extends d.Component {
        componentDidMount() {
            this.mounted = !0, this.beginCountdown(), (0, l.onAttack)()
        }
        componentWillUnmount() {
            this.mounted = !1
        }
        render() {
            const e = this.secondsLeft();
            return (0, i.jsx)(b, {
                children: (0, i.jsx)(w, {
                    backgroundImage: (0, l.backgroundImage)(),
                    children: (0, i.jsxs)(C, {
                        children: [(0, i.jsx)(k, {
                            children: (0, l.getTitle)()
                        }), (0, i.jsxs)(P, {
                            children: [(0, l.getVerb)(), " by ", this.props.powerups.screenAttack.attackerName]
                        }), (0, i.jsx)("i", {
                            style: {
                                color: (0, l.getIconColor)(),
                                fontSize: 95,
                                marginTop: 10,
                                marginBottom: 10
                            },
                            className: `${(0,l.getIcon)()} animated pulse infinite`
                        }), (0, i.jsxs)(E, {
                            children: ["Wait ", e, " ", "second" + (1 === e ? "" : "s")]
                        })]
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "state", {
                secondsPassed: 0
            }), (0, n.default)(this, "mounted", !1), (0, n.default)(this, "beginCountdown", (async () => {
                for (let e = 0; e < 15; e++) await y(1e3), this.addSecond();
                this.mounted && this.setState({
                    secondsPassed: 0
                })
            })), (0, n.default)(this, "addSecond", (() => {
                this.mounted && this.setState({
                    secondsPassed: this.state.secondsPassed + 1
                })
            })), (0, n.default)(this, "secondsLeft", (() => 15 - this.state.secondsPassed))
        }
    };
    S = (0, a.__decorate)([(0, c.inject)("powerups")], S);
    var T = S
})), o.register("gxPzp", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("lpEVe"),
        s = o("fywoC"),
        c = o("4z8sy");
    let d = class extends s.Component {
        render() {
            return this.props.gameValues.thanosValues ? (0, a.jsx)(c.default, {}) : null
        }
    };
    d = (0, n.__decorate)([(0, i.inject)("gameValues"), i.observer], d);
    var l = d
})), o.register("4z8sy", (function(e, r) {
    t(e.exports, "default", (function() {
        return j
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("kC0Tv"),
        c = o("8nYP6"),
        d = o("8ceRK"),
        l = o("eEMhJ"),
        u = o("lpEVe"),
        p = o("fywoC"),
        f = o("2FDaO"),
        h = o("6vbUb");
    let m, g, v, x = e => e;
    const y = {
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: 1.2
                }
            },
            hidden: {
                opacity: 1
            }
        },
        b = {
            hidden: {
                opacity: 0
            },
            show: {
                opacity: 1
            }
        },
        w = e => (0, i.jsx)(h.motion.div, {
            variants: b,
            initial: "hidden",
            transition: {
                duration: 1.2
            },
            children: (0, i.jsx)(d.Preview, {
                color: {
                    text: s.default.White,
                    background: e.color
                },
                icon: "far fa-gem"
            })
        }),
        C = f.default.div(m || (m = x`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${0};
  color: ${0};
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
`), s.default.Black, s.default.White),
        k = f.default.div(g || (g = x`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 736px) and (min-height: 483px) {
    transform: scale(1.4);
  }
`)),
        P = f.default.div(v || (v = x`
  animation-duration: 3s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`));
    let E;
    var S;
    (S = E || (E = {})).winner = "Winner", S.waiting = "Waiting", S.resultsShowing = "Results Showing", S.result = "Result";
    const T = e => {
        let t = "";
        return e.forEach(((r, o) => {
            t += r, o + 1 !== e.length && (t += ", ")
        })), t
    };
    let B = class extends p.Component {
        componentDidMount() {
            (0, l.toggleDrawer)(!1, !0), setTimeout((() => this.setState({
                showStones: !0
            })), 1200), setTimeout((() => this.setState({
                stage: E.waiting
            })), 11400);
            const e = this.props.gameValues.thanosValues.showAt,
                t = setInterval((() => {
                    const r = Math.round((e - Date.now()) / 1e3);
                    if (r <= 0) return this.setState({
                        stage: E.resultsShowing
                    }), setTimeout((() => this.setState({
                        stage: E.result
                    })), 4e3 * (this.props.gameValues.thanosValues.saved.length + this.props.gameValues.thanosValues.snapped.length)), void clearInterval(t);
                    this.setState({
                        secondsLeft: r
                    })
                }), 200)
        }
        render() {
            return (0, i.jsx)(C, {
                children: (0, i.jsx)(k, {
                    children: this.getContent()
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "state", {
                stage: E.winner,
                secondsLeft: 0,
                showStones: !1
            }), (0, n.default)(this, "getContent", (() => {
                const {
                    thanosValues: e
                } = this.props.gameValues;
                if (this.state.stage === E.waiting) return (0, i.jsx)("div", {
                    children: (0, i.jsxs)(P, {
                        className: "animated fadeIn",
                        children: [(0, i.jsx)("div", {
                            style: {
                                fontSize: 25
                            },
                            children: "The snap is about to happen..."
                        }), (0, i.jsxs)("b", {
                            style: {
                                fontSize: 119
                            },
                            children: ["0:", this.state.secondsLeft < 10 ? `0${this.state.secondsLeft}` : this.state.secondsLeft]
                        })]
                    })
                }, "2");
                if (this.state.stage === E.resultsShowing) return (0, i.jsx)(P, {
                    children: (0, i.jsx)("div", {
                        style: {
                            fontSize: 25,
                            textAlign: "center",
                            maxWidth: 500
                        },
                        children: "Look up! The snap results are showing..."
                    })
                });
                if (this.state.stage === E.result) {
                    const t = (0, c.identifier)();
                    let r = !0,
                        o = "You Got Snapped!",
                        n = "";
                    if (e.saved.map((e => e.id)).includes(t)) {
                        r = !1, o = "You Survived The Snap!";
                        n = `You survived along with ${T(e.saved.filter((e=>e.id!==t)).map((e=>e.name)))}`
                    } else e.winner.id === t ? (r = !1, o = "You Won!", n = `You snapped ${T(e.snapped.map((e=>e.name)))}`) : n = `You got snapped along with ${T(e.snapped.filter((e=>e.id!==t)).map((e=>e.name)))}`;
                    return (0, i.jsx)("div", {
                        children: (0, i.jsxs)(P, {
                            style: {
                                animationDuration: "22s"
                            },
                            className: r ? "animated fadeOut" : "",
                            children: [(0, i.jsx)("b", {
                                style: {
                                    fontSize: 46,
                                    textAlign: "center"
                                },
                                children: o
                            }), (0, i.jsx)("div", {
                                style: {
                                    margin: 10,
                                    maxWidth: 500,
                                    textAlign: "center"
                                },
                                children: n
                            })]
                        })
                    }, "3")
                }
                return this.state.stage === E.winner ? (0, i.jsx)("div", {
                    children: (0, i.jsxs)(P, {
                        className: "animated fadeIn",
                        children: [(0, i.jsx)("b", {
                            style: {
                                fontSize: 43
                            },
                            children: e.winner.name
                        }), (0, i.jsx)("div", {
                            style: {
                                fontSize: 25
                            },
                            children: "acquired all 6 Infinity Stones"
                        }), (0, i.jsx)("div", {
                            style: {
                                height: 10
                            }
                        }), (0, i.jsxs)(h.motion.div, {
                            animate: this.state.showStones ? "show" : "hidden",
                            style: {
                                display: "flex"
                            },
                            variants: y,
                            children: [(0, i.jsx)(w, {
                                color: "#f4511e"
                            }), (0, i.jsx)(w, {
                                color: "#388e3c"
                            }), (0, i.jsx)(w, {
                                color: "#1976d2"
                            }), (0, i.jsx)(w, {
                                color: "#ffcc80"
                            }), (0, i.jsx)(w, {
                                color: "#d32f2f"
                            }), (0, i.jsx)(w, {
                                color: "#4527a0"
                            })]
                        })]
                    })
                }, "1") : null
            }))
        }
    };
    B = (0, a.__decorate)([(0, u.inject)("gameValues")], B);
    var j = B
})), o.register("3Lkct", (function(e, r) {
    t(e.exports, "default", (function() {
        return h
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("7SwYo"),
        c = o("b9PLE"),
        d = o("lpEVe"),
        l = o("fywoC"),
        u = o("c7Gd1"),
        p = o("7xd6F");
    let f = class extends l.Component {
        render() {
            return (0, i.jsx)(p.BackgroundContainer, {
                children: (0, i.jsxs)(u.Card, {
                    children: [(0, i.jsx)(u.Title, {
                        children: (0, i.jsx)(c.default, {
                            text: this.props.gameValues.nonDismissMessage.title
                        })
                    }), (0, i.jsx)(u.Details, {
                        children: (0, i.jsx)(c.default, {
                            text: this.props.gameValues.nonDismissMessage.message
                        })
                    }), (0, i.jsx)(s.default, {
                        label: this.props.gameValues.nonDismissMessage.buttonText || "Join New Game",
                        onClick: this.handleClick,
                        type: "secondary"
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "handleClick", (() => {
                this.props.gameValues.nonDismissMessage.link ? window.location.href = this.props.gameValues.nonDismissMessage.link : window.location.reload()
            }))
        }
    };
    f = (0, a.__decorate)([(0, d.inject)("gameValues"), d.observer], f);
    var h = f
})), o.register("7xd6F", (function(e, r) {
    t(e.exports, "BackgroundContainer", (function() {
        return s
    }));
    var n = o("2FDaO"),
        a = o("eEMhJ");
    let i;
    const s = n.default.div(i || (i = (e => e)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${0}) repeat 0 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`), (0, a.getAssetPath)("background.png"))
})), o.register("klFLy", (function(e, r) {
    t(e.exports, "default", (function() {
        return p
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("kC0Tv"),
        s = o("lpEVe"),
        c = o("fywoC"),
        d = o("2FDaO");
    let l, u = class extends c.Component {
        render() {
            return this.props.ui.fullBlackScreen ? (0, a.jsx)(f, {}) : null
        }
    };
    u = (0, n.__decorate)([(0, s.inject)("ui"), s.observer], u);
    var p = u;
    const f = d.default.div(l || (l = (e => e)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999999999999999999;
  background: ${0};
`), i.default.Black)
})), o.register("1yEHC", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("kHqmx"),
        a = o("hxEiv"),
        i = o("lpEVe"),
        s = o("fywoC"),
        c = o("i94cG");
    let d = class extends s.Component {
        render() {
            return (0, a.jsx)(c.default, {
                isSnowing: this.props.ui.snowing
            })
        }
    };
    d = (0, n.__decorate)([(0, i.inject)("ui"), i.observer], d);
    var l = d
})), o.register("i94cG", (function(e, r) {
    t(e.exports, "default", (function() {
        return d
    }));
    var n = o("divCp"),
        a = o("hxEiv"),
        i = o("fywoC"),
        s = o("c4nMm");
    class c extends i.Component {
        componentDidUpdate(e) {
            this.state.hasShown || !e.isSnowing && this.props.isSnowing && (this.setState({
                hasShown: !0
            }), (0, s.default)())
        }
        render() {
            return (0, a.jsx)("canvas", {
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
            super(...e), (0, n.default)(this, "state", {
                hasShown: !1
            })
        }
    }
    var d = c
})), o.register("c4nMm", (function(e, r) {
    t(e.exports, "default", (function() {
        return i
    }));
    var n = o("kcsKB"),
        a = o("4MuSt");

    function i() {
        var e = !0,
            t = document.getElementById("snow-canv");
        if (t) {
            for (var r, o = t.getContext("2d"), i = t.width = window.innerWidth, s = t.height = window.innerHeight, c = [], d = 0; d < 29; ++d)(r = new u).y = Math.random() * (s + 50), r.x = Math.random() * i, r.t = Math.random() * (2 * Math.PI), r.sz = 100 / (10 + 100 * Math.random()) * 1.3, r.sp = .15 * Math.pow(.8 * r.sz, 2) * 1, r.sp = r.sp < 1 ? 1 : r.sp, c.push(r);
            l(), (0, a.reaction)((() => n.default.ui.isSnowing), (() => {
                const t = n.default.ui.isSnowing;
                !e && t ? (e = t, l()) : e = t
            }))
        }

        function l() {
            if (e) {
                window.requestAnimationFrame(l), o.clearRect(0, 0, i, s), o.fillRect(0, 0, i, s), o.fill();
                for (var t = 0; t < c.length; ++t) {
                    var r = c[t];
                    r.t += .05, r.t = r.t >= 2 * Math.PI ? 0 : r.t, r.y += r.sp, r.x += Math.sin(1 * r.t) * (.3 * r.sz), r.y > s + 50 && (r.y = -10 - 20 * Math.random()), r.x > i + 20 && (r.x = -20), r.x < -20 && (r.x = i + 20), r.draw()
                }
            }
        }

        function u() {
            this.draw = function() {
                this.g = o.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz), this.g.addColorStop(0, "hsla(255,255%,255%,1)"), this.g.addColorStop(1, "hsla(255,255%,255%,0)"), o.moveTo(this.x, this.y), o.fillStyle = this.g, o.beginPath(), o.arc(this.x, this.y, this.sz, 0, 2 * Math.PI, !0), o.fill()
            }
        }
    }
})), o.register("9D5rK", (function(e, r) {
    t(e.exports, "default", (function() {
        return x
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("kC0Tv"),
        c = o("i6SGg"),
        d = o("eEMhJ"),
        l = o("7CIMU"),
        u = o("lpEVe"),
        p = o("fywoC"),
        f = o("2FDaO"),
        h = o("7nZqk"),
        m = o("6NnFI");
    let g, v = class extends p.Component {
        render() {
            return (0, i.jsx)(y, {
                children: this.getContent()
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "getContent", (() => {
                const {
                    status: e
                } = this.props.imposter;
                return e === l.ImposterStatus.discussion || e === l.ImposterStatus.voting ? (0, i.jsx)(h.default, {}) : e === l.ImposterStatus.votingResult ? (0, i.jsx)(m.default, {
                    text: "Look at your captain's screen for voting results."
                }) : e === l.ImposterStatus.intro ? (0, i.jsx)(m.default, {
                    text: "Look at your captain's screen for instructions."
                }) : (e == l.ImposterStatus.questions && (0, d.changeRoute)(c.default.questions), null)
            }))
        }
    };
    v = (0, a.__decorate)([(0, u.inject)("imposter"), u.observer], v);
    var x = v;
    const y = f.default.div(g || (g = (e => e)`
  color: ${0};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Space Grotesk', monospace;
  background-size: cover;
  background-position: center;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('https://images.unsplash.com/photo-1535007726788-fed8106a64cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80');
  text-align: center;
`), s.default.White)
})), o.register("7nZqk", (function(e, r) {
    t(e.exports, "default", (function() {
        return k
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("bfV0l"),
        c = o("fC6cp"),
        d = o("kC0Tv"),
        l = o("7CIMU"),
        u = o("lpEVe"),
        p = o("fywoC"),
        f = o("2FDaO"),
        h = o("dtbMr"),
        m = o("a3xbj"),
        g = o("5w7mk"),
        v = o("805Ik");
    let x, y, b, w = e => e,
        C = class extends p.Component {
            render() {
                return (0, i.jsx)(P, {
                    children: (0, i.jsx)(E, {
                        children: (0, i.jsxs)(S, {
                            children: [(0, i.jsx)(h.default, {}), this.getContent()]
                        })
                    })
                })
            }
            constructor(...e) {
                super(...e), (0, n.default)(this, "getContent", (() => {
                    const {
                        me: e,
                        status: t
                    } = this.props.imposter;
                    return e && e.votedOff ? (0, i.jsx)(s.default, {
                        type: "warning",
                        showIcon: !0,
                        message: "Voted Off",
                        description: "You've been voted off and cannot contribute.",
                        style: {
                            textAlign: "left",
                            marginTop: 35
                        }
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            style: {
                                marginTop: 25,
                                marginBottom: 20
                            },
                            className: "maxWidth",
                            children: (0, i.jsxs)(c.default, {
                                children: [(0, i.jsx)("span", {
                                    role: "img",
                                    "aria-label": "notebook",
                                    children: "📓"
                                }), " ", "Notebook"]
                            })
                        }), (0, i.jsx)(m.default, {}), t === l.ImposterStatus.discussion ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                style: {
                                    marginTop: 25,
                                    marginBottom: 20
                                },
                                className: "maxWidth",
                                children: (0, i.jsxs)(c.default, {
                                    children: [(0, i.jsx)("span", {
                                        role: "img",
                                        "aria-label": "astronaut",
                                        children: "👩‍🚀"
                                    }), " ", "People"]
                                })
                            }), (0, i.jsx)(g.default, {})]
                        }) : (0, i.jsx)(v.default, {})]
                    })
                }))
            }
        };
    C = (0, a.__decorate)([(0, u.inject)("imposter"), u.observer], C);
    var k = C;
    const P = f.default.div.attrs({
            className: "maxWidth maxHeight flex hc"
        })(x || (x = w``)),
        E = f.default.div.attrs({
            className: "scroll-y"
        })(y || (y = w`
  flex: 1;
`)),
        S = f.default.div(b || (b = w`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 25px;
  width: 90%;
  max-width: 600px;
  background: ${0};
  color: ${0};
`), d.default.White, d.default.Black)
})), o.register("dtbMr", (function(e, r) {
    t(e.exports, "default", (function() {
        return x
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("eEMhJ"),
        c = o("7CIMU"),
        d = o("lpEVe"),
        l = o("fywoC"),
        u = o("2FDaO");
    let p, f, h, m, g = e => e,
        v = class extends l.Component {
            render() {
                return (0, i.jsxs)(y, {
                    children: [(0, i.jsx)(b, {
                        src: this.getImage()
                    }), (0, i.jsx)(w, {
                        children: this.getTitle()
                    }), (0, i.jsx)(C, {
                        children: this.getDescription()
                    })]
                })
            }
            constructor(...e) {
                super(...e), (0, n.default)(this, "getImage", (() => {
                    const {
                        status: e
                    } = this.props.imposter;
                    return e === c.ImposterStatus.discussion ? (0, s.getAssetPath)("discussion.svg") : (0, s.getAssetPath)("vote.svg")
                })), (0, n.default)(this, "getTitle", (() => {
                    const {
                        status: e
                    } = this.props.imposter;
                    return e === c.ImposterStatus.discussion ? "Discussion" : "Vote"
                })), (0, n.default)(this, "getDescription", (() => {
                    const {
                        status: e
                    } = this.props.imposter;
                    return e === c.ImposterStatus.discussion ? "Who is the impostor?" : "Vote out who you think the impostor is!"
                }))
            }
        };
    v = (0, a.__decorate)([(0, d.inject)("imposter"), d.observer], v);
    var x = v;
    const y = u.default.div.attrs({
            className: "maxWidth flex flex-column vc"
        })(p || (p = g``)),
        b = u.default.img(f || (f = g`
  max-width: 150px;
  margin-top: 15px;
`)),
        w = u.default.div(h || (h = g`
  margin-top: 10px;
  font-weight: bold;
  font-size: 50px;
`)),
        C = u.default.div(m || (m = g`
  font-size: 21px;
  color: rgba(0, 0, 0, 0.9);
`))
})), o.register("5w7mk", (function(e, r) {
    t(e.exports, "default", (function() {
        return g
    }));
    var n = o("hxEiv"),
        a = o("kC0Tv"),
        i = o("49Os1"),
        s = o("eEMhJ"),
        c = o("7CIMU"),
        d = o("lpEVe"),
        l = o("fywoC"),
        u = o("2FDaO"),
        p = o("jcI11"),
        f = o("fQMql"),
        h = o("kK8EA");
    let m;
    var g = (0, d.observer)((e => {
        const {
            imposter: t
        } = l.useContext(f.default);
        l.useEffect((() => {
            (0, s.send)(i.default.imposter.requestPeople)
        }), []);
        const {
            showAction: r,
            actionText: o,
            onSelect: d
        } = e, {
            epl: u,
            me: m
        } = t, g = (0, p.DecryptData)(u) || [];
        if (!m) return null;
        const x = m && m.role === c.PersonRole.imposter;
        return (0, n.jsx)(v, {
            children: g.filter((t => t.id !== m.id && (!t.votedOff && (!e.filter || e.filter(t))))).map((e => (0, n.jsx)(h.default, {
                name: e.name,
                nameColor: e.markedAsClear ? a.default.DarkSuccessGreen : e.role === c.PersonRole.imposter && x ? "#c62828" : a.default.Black,
                description: e.markedAsClear ? "On the clear list" : e.role === c.PersonRole.imposter && x ? "An Impostor" : void 0,
                button: r ? {
                    label: o,
                    onClick: () => d(e.id)
                } : null
            }, e.id)))
        })
    }));
    const v = u.default.div.attrs({
        className: "maxWidth"
    })(m || (m = (e => e)``))
})), o.register("kK8EA", (function(e, r) {
    t(e.exports, "default", (function() {
        return h
    }));
    var n = o("hxEiv"),
        a = o("2FDaO");
    o("fywoC");
    var i = o("7SwYo"),
        s = o("kC0Tv");
    let c, d, l, u, p, f = e => e;
    var h = e => (0, n.jsxs)(m, {
        children: [(0, n.jsxs)(g, {
            children: [(0, n.jsx)(v, {
                style: {
                    color: e.nameColor || s.default.Black
                },
                children: e.name
            }), e.description && (0, n.jsx)(x, {
                children: e.description
            })]
        }), e.button && (0, n.jsx)(y, {
            children: (0, n.jsx)(i.default, {
                type: "primary",
                onClick: e.button.onClick,
                label: e.button.label,
                size: "small"
            })
        })]
    });
    const m = a.default.div.attrs({
            className: "flex vc light-shadow"
        })(c || (c = f`
  margin-top: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  text-align: left;
  padding: 13px 20px;
  border-radius: 7px;
  justify-content: space-between;
  max-width: 100%;
  overflow: hidden;
`)),
        g = a.default.div(d || (d = f``)),
        v = a.default.div(l || (l = f`
  font-size: 22px;
  font-weight: 500;
  overflow-wrap: anywhere;
`)),
        x = a.default.div(u || (u = f`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
`)),
        y = a.default.div(p || (p = f`
  flex-shrink: 0;
  margin-left: 10px;
`))
})), o.register("805Ik", (function(e, r) {
    t(e.exports, "default", (function() {
        return g
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("bfV0l"),
        c = o("fC6cp"),
        d = o("49Os1"),
        l = o("6sear"),
        u = o("eEMhJ"),
        p = o("lpEVe"),
        f = o("fywoC"),
        h = o("5w7mk");
    let m = class extends f.Component {
        render() {
            const {
                me: e
            } = this.props.imposter;
            return e && e.currentVote ? (0, i.jsx)(s.default, {
                type: "success",
                showIcon: !0,
                message: "Voted!",
                description: "Your vote is in!",
                style: {
                    textAlign: "left",
                    marginTop: 20
                }
            }) : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    style: {
                        marginTop: 25,
                        marginBottom: 20
                    },
                    className: "maxWidth",
                    children: (0, i.jsx)(c.default, {
                        children: "👩‍🚀 People"
                    })
                }), (0, i.jsx)(h.default, {
                    showAction: !0,
                    actionText: "Vote",
                    onSelect: this.vote
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "vote", (e => {
                l.successClick.play(), (0, u.send)(d.default.imposter.vote, e)
            }))
        }
    };
    m = (0, a.__decorate)([(0, p.inject)("imposter"), p.observer], m);
    var g = m
})), o.register("6NnFI", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("hxEiv"),
        a = o("b9PLE");
    o("fywoC");
    var i = o("2FDaO");
    let s, c, d = e => e;
    var l = e => (0, n.jsx)(u, {
        children: (0, n.jsx)(p, {
            children: (0, n.jsx)(a.default, {
                text: e.text
            })
        })
    });
    const u = i.default.div.attrs({
            className: "flex hc vc maxWidth maxHeight"
        })(s || (s = d``)),
        p = i.default.div(c || (c = d`
  background: rgba(97, 97, 97, 0.8);
  padding: 48px;
  border-radius: 8px;
  font-size: 22px;
  border-style: solid;
  border-color: #ff9800;
  border-width: 3px;
  margin: 30px;
`))
})), o.register("9bZfY", (function(e, r) {
    t(e.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv"),
        a = o("fywoC"),
        i = o("cQDyT"),
        s = o("2FDaO"),
        c = o("kC0Tv"),
        d = o("fmZMS"),
        l = o("eEMhJ"),
        u = o("lpEVe"),
        p = o("fQMql"),
        f = o("2L9cU");
    let h;
    var m = (0, u.observer)((() => {
        const {
            draw: {
                status: e
            }
        } = a.useContext(p.default);
        return (0, n.jsx)(g, {
            children: e === f.DrawStatus.drawing ? (0, n.jsx)(i.default, {}) : (0, n.jsx)(d.default, {})
        })
    }));
    const g = s.default.div.attrs({
        className: "maxWidth maxHeight"
    })(h || (h = (e => e)`
  font-family: ${0};
  color: ${0};
  background-color: #f1f2f3;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);

  background-size: 45px 45px;
  background-position: center;
`), (() => (0, l.mainFontName)()), c.default.Black)
})), o.register("cQDyT", (function(e, r) {
    t(e.exports, "MOBILE_BREAKPOINT", (function() {
        return v
    })), t(e.exports, "default", (function() {
        return x
    }));
    var n = o("hxEiv"),
        a = o("fywoC"),
        i = o("2FDaO"),
        s = o("2cuU2"),
        c = o("6dYp4"),
        d = o("f8GpZ"),
        l = o("lpEVe"),
        u = o("fQMql"),
        p = o("2L9cU"),
        f = o("eEMhJ"),
        h = o("49Os1"),
        m = o("4MuSt");
    let g;
    const v = 890;
    var x = (0, l.observer)((() => {
        var e;
        const {
            draw: t
        } = a.useContext(u.default), r = a.useRef(), [o, i] = a.useState(d.colors[0]), [l, g] = a.useState(d.sizes[1]), [v, x] = a.useState(), b = (null == t || null === (e = t.me) || void 0 === e ? void 0 : e.role) === p.DrawRole.drawer, w = a.useMemo((() => t.round.drawingBase64), []);
        a.useEffect((() => {
            const e = (0, m.reaction)((() => t.latestLine), (e => {
                    var t;
                    e && !b && (null == r || null === (t = r.current) || void 0 === t || t.addLine(e))
                })),
                o = (0, m.reaction)((() => t.round.drawingBase64), (e => {
                    var t;
                    e && !b && (null == r || null === (t = r.current) || void 0 === t || t.drawImage(e))
                })),
                n = (0, m.reaction)((() => t.shouldClearCanvas), (e => {
                    e && b && (S(), t.shouldClearCanvas = !1)
                }));
            return () => {
                e(), o(), n()
            }
        }), [b]);
        const C = a.useCallback((e => {
                b && (0, f.send)(h.default.draw.lineDrawn, e)
            }), [b]),
            k = a.useCallback((e => {
                b && (0, f.send)(h.default.draw.imageDrawn, e)
            }), [b]),
            P = a.useMemo((() => t.round.secondsLeft ? `${t.round.secondsLeft} ${(0,f.plural)("second",t.round.secondsLeft)} left...` : "Time's up!"), [t.round.secondsLeft]),
            E = !(!b || !t.round.secondsLeft),
            S = () => {
                r.current && b && r.current.clear()
            };
        return (0, n.jsxs)(y, {
            children: [(0, n.jsx)(s.default, {
                canEdit: E,
                color: o,
                brushSize: l,
                initialImage: w,
                canvasRef: r,
                emitLine: C,
                emitImage: k,
                term: t.round.term,
                isDrawer: b,
                drawerName: t.round.drawer.name,
                revealText: t.round.revealText,
                timeText: P,
                secondsLeft: t.round.secondsLeft,
                hidingTerm: v
            }), (0, n.jsx)(c.default, {
                isDrawer: b,
                setColor: i,
                setBrushSize: g,
                color: o,
                brushSize: l,
                undo: () => {
                    r.current && b && r.current.undo()
                },
                clear: S,
                guessedCorrectly: t.me.answeredCorrectly,
                secondsLeft: t.round.secondsLeft,
                timeText: P,
                term: t.round.term,
                hidingTerm: v,
                setHidingTerm: x
            })]
        })
    }));
    const y = i.default.div.attrs({
        className: "maxWidth maxHeight flex"
    })(g || (g = (e => e)`
  align-items: stretch;
  @media (max-width: ${0}px) {
    flex-direction: column;
  }
`), v)
})), o.register("2cuU2", (function(e, r) {
    t(e.exports, "default", (function() {
        return C
    }));
    var n = o("hxEiv"),
        a = o("bUoym"),
        i = o("fywoC"),
        s = o("2FDaO"),
        c = o("5EOU3"),
        d = o("56tQE"),
        l = o("cQDyT"),
        u = o("3K8JB"),
        p = o("69SUA");
    let f, h, m, g, v, x, y, b = e => e;
    const w = e => {
        const t = e.text.split("");
        return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)("span", {
                children: t.map(((t, r) => {
                    const o = `letter-${r}`;
                    return " " !== t || e.noTimeLeft ? (0, n.jsx)(i.Fragment, {
                        children: t
                    }, o) : (0, n.jsx)(i.Fragment, {
                        children: "   "
                    }, o)
                }))
            })
        })
    };
    var C = e => {
        const t = i.useRef(null),
            [r, o] = (0, d.default)(t),
            s = (0, u.useWindowWidth)(),
            p = Math.min(r / 4, o / 3),
            f = 4 * p,
            h = 3 * p,
            m = s < l.MOBILE_BREAKPOINT ? e.timeText : e.isDrawer ? "You're drawing..." : null,
            g = e.isDrawer ? null : (0, n.jsxs)("span", {
                children: ["Drawer: ", (0, n.jsx)("b", {
                    children: e.drawerName
                })]
            });
        return (0, n.jsx)(k, {
            children: (0, n.jsxs)(P, {
                children: [(0, n.jsxs)(E, {
                    children: [m ? (0, n.jsx)(S, {
                        children: m
                    }) : null, (0, n.jsx)(T, {
                        children: e.isDrawer ? e.hidingTerm ? "Term Hidden" : e.term : (0, n.jsx)(w, {
                            text: e.revealText,
                            noTimeLeft: !e.secondsLeft
                        })
                    })]
                }), (0, n.jsx)(B, {
                    ref: t,
                    children: f && h ? (0, n.jsx)(c.HandDrawnDiv, {
                        style: {
                            width: f,
                            height: h
                        },
                        children: (0, n.jsx)(a.default, {
                            ref: e.canvasRef,
                            width: f,
                            height: h,
                            canEdit: e.canEdit,
                            color: e.color,
                            strokeWidth: e.brushSize,
                            emitLine: e.emitLine,
                            onLatestImage: e.emitImage,
                            initialImage: e.initialImage
                        })
                    }) : null
                }), g ? (0, n.jsx)(j, {
                    children: g
                }) : null]
            })
        })
    };
    const k = s.default.div(f || (f = b`
  flex: 1;
  overflow: hidden;
  @media (max-width: ${0}px) {
    overflow: visible;
    height: 60vh;
  }
`), (() => l.MOBILE_BREAKPOINT)),
        P = s.default.div.attrs({
            className: "maxWidth maxHeight flex flex-column vc"
        })(h || (h = b`
  padding: 20px;
  max-height: 100%;
  overflow: hidden;
  @media (max-width: ${0}px) {
    padding: 20px 15px;
  }
`), (() => l.MOBILE_BREAKPOINT)),
        E = s.default.div.attrs({
            className: "flex flex-column vc"
        })(m || (m = b`
  margin-bottom: 10px;
  @media (max-width: ${0}px) {
    margin-bottom: 7px;
  }
`), (() => l.MOBILE_BREAKPOINT)),
        S = s.default.div(g || (g = b`
  font-size: 23px;
  @media (max-width: ${0}px) {
    font-size: 18px;
  }
`), (() => l.MOBILE_BREAKPOINT)),
        T = s.default.div(v || (v = b`
  font-size: 41px;
  font-weight: ${0};
  @media (max-width: ${0}px) {
    font-size: 32px;
  }
`), p.FontWeights.Bold, (() => l.MOBILE_BREAKPOINT)),
        B = s.default.div.attrs({
            className: "flex hc vc maxWidth"
        })(x || (x = b`
  flex: 1;
  overflow: hidden;
`)),
        j = s.default.div(y || (y = b`
  margin-top: 15px;
  font-size: 19px;
  @media (max-width: ${0}px) {
    display: none;
  }
`), (() => l.MOBILE_BREAKPOINT))
})), o.register("5EOU3", (function(e, r) {
    t(e.exports, "HandDrawnDiv", (function() {
        return i
    }));
    var n = o("kC0Tv");
    let a;
    const i = o("2FDaO").default.div(a || (a = (e => e)`
  border: solid
    ${0}px
    ${0};
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  overflow: hidden;
  -webkit-transform: translateZ(0); // needed in Safari for some weird reason
`), (e => void 0 !== e.borderWidth ? e.borderWidth : 3), n.default.Black)
})), o.register("56tQE", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var n = o("fywoC"),
        a = o("3KQc0"),
        i = o("9iNNJ");
    var s = (e, t) => {
        const [r, o] = n.useState((() => {
            var r, o;
            const n = e && "current" in e ? e.current : e;
            return n ? [n.offsetWidth, n.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (o = null == t ? void 0 : t.initialHeight) && void 0 !== o ? o : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && o([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, a.default)(e, (e => {
            const t = e.target;
            o([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), o.register("3KQc0", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("6rvT3"),
        a = o("9iNNJ"),
        i = o("3Yjty"),
        s = o("f1PHW");
    let c;
    const d = () => c || (c = function() {
        const e = new Map,
            t = new(0, n.default)((0, s.default)(((t, r) => {
                var o;
                if (1 === t.length) null === (o = e.get(t[0].target)) || void 0 === o || o(t[0], r);
                else
                    for (let o = 0; o < t.length; o++) {
                        var n;
                        null === (n = e.get(t[o].target)) || void 0 === n || n(t[o], r)
                    }
            })));
        return {
            observer: t,
            subscribe(r, o) {
                t.observe(r), e.set(r, o)
            },
            unsubscribe(r) {
                t.unobserve(r), e.delete(r)
            }
        }
    }());
    var l = function(e, t) {
        const r = d(),
            o = (0, i.default)(t);
        return (0, a.default)((() => {
            let t = !1;
            const n = e && "current" in e ? e.current : e;
            if (n) return r.subscribe(n, ((e, r) => {
                t || o.current(e, r)
            })), () => {
                t = !0, r.unsubscribe(n)
            }
        }), [e, r, o]), r.observer
    }
})), o.register("9iNNJ", (function(e, n) {
    t(e.exports, "default", (function() {
        return a
    }));
    var a = r(o("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), o.register("3Yjty", (function(e, r) {
    t(e.exports, "default", (function() {
        return a
    }));
    var n = o("fywoC");
    var a = e => {
        const t = n.useRef(e);
        return n.useEffect((() => {
            t.current = e
        })), t
    }
})), o.register("f1PHW", (function(e, r) {
    t(e.exports, "default", (function() {
        return o
    }));
    var o = function(e) {
        var t = [],
            r = null,
            o = function() {
                for (var o = arguments.length, n = new Array(o), a = 0; a < o; a++) n[a] = arguments[a];
                t = n, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return o.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, o
    }
})), o.register("3K8JB", (function(e, r) {
    t(e.exports, "useWindowWidth", (function() {
        return l
    }));
    var n = o("9u945"),
        a = o("2X7YA");
    const i = {},
        s = "undefined" == typeof window ? null : window,
        c = () => [document.documentElement.clientWidth, document.documentElement.clientHeight],
        d = (e = i) => {
            const {
                wait: t,
                leading: r,
                initialWidth: o = 0,
                initialHeight: d = 0
            } = e, [l, u] = (0, n.useDebounce)("undefined" == typeof document ? [o, d] : c, t, r), p = () => u(c);
            return (0, a.default)(s, "resize", p), (0, a.default)(s, "orientationchange", p), l
        },
        l = e => d(e)[0]
})), o.register("9u945", (function(e, r) {
    t(e.exports, "useDebounceCallback", (function() {
        return i
    })), t(e.exports, "useDebounce", (function() {
        return s
    }));
    var n = o("fywoC"),
        a = o("3Yjty");
    const i = (e, t = 100, r = !1) => {
            const o = (0, a.default)(e),
                i = n.useRef(),
                s = [t, r, o];

            function c() {
                i.current && clearTimeout(i.current), i.current = void 0
            }

            function d() {
                i.current = void 0
            }
            return n.useEffect((() => c), s), n.useCallback((function() {
                const e = arguments,
                    {
                        current: n
                    } = i;
                if (void 0 === n && r) return i.current = setTimeout(d, t), o.current.apply(null, e);
                n && clearTimeout(n), i.current = setTimeout((() => {
                    i.current = void 0, o.current.apply(null, e)
                }), t)
            }), s)
        },
        s = (e, t, r) => {
            const o = n.useState(e);
            return [o[0], i(o[1], t, r)]
        }
})), o.register("2X7YA", (function(e, r) {
    t(e.exports, "default", (function() {
        return i
    }));
    var n = o("fywoC"),
        a = o("9iNNJ");
    var i = function(e, t, r, o) {
        const i = n.useRef(r),
            s = n.useRef(o);
        (0, a.default)((() => {
            i.current = r, s.current = o
        })), (0, a.default)((() => {
            const r = e && "current" in e ? e.current : e;
            if (!r) return;
            let o = 0;

            function n(...e) {
                o || i.current.apply(this, e)
            }
            r.addEventListener(t, n);
            const a = s.current;
            return () => {
                o = 1, r.removeEventListener(t, n), a && a()
            }
        }), [e, t])
    }
})), o.register("6dYp4", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("hxEiv");
    o("fywoC");
    var a = o("2FDaO"),
        i = o("cQDyT"),
        s = o("f8GpZ"),
        c = o("wTJ8A");
    let d;
    var l = e => (0, n.jsx)(u, {
        children: e.isDrawer ? (0, n.jsx)(s.default, {
            setColor: e.setColor,
            setBrushSize: e.setBrushSize,
            clear: e.clear,
            undo: e.undo,
            color: e.color,
            brushSize: e.brushSize,
            timeText: e.timeText,
            hidingTerm: e.hidingTerm,
            setHidingTerm: e.setHidingTerm
        }) : (0, n.jsx)(c.default, {
            guessedCorrectly: e.guessedCorrectly,
            secondsLeft: e.secondsLeft,
            timeText: e.timeText,
            term: e.term
        })
    });
    const u = a.default.div.attrs({
        className: "scroll-y flex flex-column"
    })(d || (d = (e => e)`
  flex-shrink: 0;
  width: 400px;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
  justify-content: space-between;
  @media (max-width: ${0}px) {
    flex: 1;
    width: 100%;
  }
`), (() => i.MOBILE_BREAKPOINT))
})), o.register("f8GpZ", (function(e, r) {
    t(e.exports, "colors", (function() {
        return b
    })), t(e.exports, "sizes", (function() {
        return w
    })), t(e.exports, "default", (function() {
        return C
    }));
    var n = o("hxEiv"),
        a = o("69SUA"),
        i = o("kC0Tv"),
        s = o("6sear");
    o("fywoC");
    var c = o("2FDaO"),
        d = o("cQDyT");
    let l, u, p, f, h, m, g, v, x = e => e;
    const y = "#7cb342",
        b = [i.default.Black, i.default.White, "#C1C1C1", "#EF130B", "#FF7100", "#FFE400", "#00CC00", "#00B2FF", "#231FD3", "#A300BA", "#D37CAA", "#A0522D"],
        w = [5, 10, 20, 40];
    var C = e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(k, {
            children: [(0, n.jsx)(P, {
                children: "Color"
            }), (0, n.jsx)(E, {
                children: b.map((t => (0, n.jsx)(S, {
                    color: t,
                    selected: t === e.color,
                    onClick: () => {
                        s.pop.play(), e.setColor(t)
                    }
                }, t)))
            }), (0, n.jsx)(P, {
                children: "Brush Size"
            }), (0, n.jsx)(E, {
                children: w.map((t => (0, n.jsx)(T, {
                    onClick: () => {
                        s.pop.play(), e.setBrushSize(t)
                    },
                    selected: t === e.brushSize,
                    children: (0, n.jsx)("div", {
                        style: {
                            width: t,
                            height: t,
                            borderRadius: "50%",
                            background: "black"
                        }
                    })
                }, `size-${t}`)))
            }), (0, n.jsx)(P, {
                children: "Tools"
            }), (0, n.jsxs)(E, {
                children: [(0, n.jsxs)(B, {
                    onClick: () => {
                        s.pop.play(), e.undo()
                    },
                    children: [(0, n.jsx)(j, {
                        className: "fas fa-undo"
                    }), " Undo"]
                }), (0, n.jsxs)(B, {
                    onClick: () => {
                        s.pop.play(), e.clear()
                    },
                    children: [(0, n.jsx)(j, {
                        className: "far fa-trash"
                    }), " Clear"]
                }), (0, n.jsxs)(B, {
                    onClick: () => {
                        e.setHidingTerm(!e.hidingTerm)
                    },
                    children: [(0, n.jsx)(j, {
                        className: e.hidingTerm ? "fas fa-eye" : "fas fa-eye-slash"
                    }), " ", e.hidingTerm ? "Show Term" : "Hide Term"]
                })]
            })]
        }), (0, n.jsx)(M, {
            children: e.timeText
        })]
    });
    const k = c.default.div(l || (l = x`
  padding: 20px;
`)),
        P = c.default.div(u || (u = x`
  font-weight: ${0};
  font-size: 34px;
`), a.FontWeights.Bold),
        E = c.default.div.attrs({
            className: "flex maxWidth wrap"
        })(p || (p = x`
  margin-top: 5px;
  margin-bottom: 15px;
`)),
        S = c.default.div(f || (f = x`
  background: ${0};
  height: 50px;
  width: 50px;
  margin-right: 7px;
  margin-bottom: 7px;
  border-radius: 50%;
  border-style: solid;
  border-width: ${0}px;
  border-color: ${0};
  cursor: pointer;
  transition: transform 0.25s;
  will-change: transform;
  &:hover {
    transform: scale(1.05);
  }
`), (e => e.color), (e => e.selected ? 4 : 2), (e => e.selected ? y : i.default.Black)),
        T = c.default.div.attrs({
            className: "flex hc vc"
        })(h || (h = x`
  height: 60px;
  width: 70px;
  margin-right: 7px;
  margin-bottom: 7px;
  border-radius: 3px;
  border-style: solid;
  border-width: ${0}px;
  border-color: ${0};
  cursor: pointer;
  transition: transform 0.25s;
  will-change: transform;
  &:hover {
    transform: scale(1.05);
  }
`), (e => e.selected ? 4 : 2), (e => e.selected ? y : i.default.Black)),
        B = c.default.div.attrs({
            className: "flex hc vc"
        })(m || (m = x`
  padding: 10px 20px;
  font-size: 20px;
  margin-right: 7px;
  margin-bottom: 7px;
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  border-color: ${0};
  cursor: pointer;
  transition: transform 0.25s;
  will-change: transform;
  &:hover {
    transform: scale(1.05);
  }
`), i.default.Black),
        j = c.default.i(g || (g = x`
  margin-right: 10px;
`)),
        M = c.default.div(v || (v = x`
  border-top-style: solid;
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-width: 2px;
  padding: 20px;
  font-size: 16px;
  line-height: 1;
  margin-top: 30px;
  @media (max-width: ${0}px) {
    display: none;
  }
`), (() => d.MOBILE_BREAKPOINT))
})), o.register("wTJ8A", (function(e, r) {
    t(e.exports, "default", (function() {
        return C
    }));
    var n = o("hxEiv"),
        a = o("93yIm"),
        i = o("b9Zw0"),
        s = o("fywoC"),
        c = o("2FDaO"),
        d = o("eEMhJ"),
        l = o("49Os1"),
        u = o("hNNOL"),
        p = o("cmvpZ"),
        f = o("lpEVe"),
        h = o("fQMql"),
        m = o("cQDyT");
    let g, v, x, y, b, w = e => e;
    var C = (0, f.observer)((e => {
        const t = s.useRef(null),
            [r, o] = s.useState(""),
            {
                gameOptions: {
                    modeOptions: c
                }
            } = s.useContext(h.default);
        s.useEffect((() => {
            e.guessedCorrectly && o("")
        }), [e.guessedCorrectly]), s.useEffect((() => {
            0 === e.secondsLeft && o("")
        }), [e.secondsLeft]);
        const f = s.useMemo((() => {
                const t = e.term.split("");
                return (0, p.uniq)(t.filter((e => {
                    return !(1 === (t = e).length && (" " === t || "." === t || "," === t || !isNaN(Number(t)) || t.match(/[a-z]/i)));
                    var t
                })))
            }), [e.term]),
            m = () => {
                r && !e.guessedCorrectly && ((0, d.send)(l.default.draw.guess, r), o(""))
            },
            g = !e.secondsLeft,
            v = e.guessedCorrectly ? "You guessed correctly!" : g ? "Time's up!" : "Type your guess here!",
            x = e.guessedCorrectly || g;
        return (0, n.jsxs)(k, {
            children: [(0, n.jsx)(P, {
                children: e.timeText
            }), (0, n.jsxs)(E, {
                children: [(0, n.jsx)(u.default, {}), (0, n.jsxs)(S, {
                    children: [f.length && c && c.symbolKeyboardEnabled ? (0, n.jsx)("div", {
                        className: "flex vc",
                        style: {
                            marginBottom: 10
                        },
                        children: f.map((e => (0, n.jsx)(a.default, {
                            size: "small",
                            type: "dashed",
                            style: {
                                marginRight: 5
                            },
                            disabled: x,
                            onClick: () => {
                                return n = e, r.length < 21 && o(`${r}${n}`), void(t.current && t.current.focus());
                                var n
                            },
                            children: e
                        }, `non-traditional-${e}`)))
                    }) : null, (0, n.jsxs)(T, {
                        children: [(0, n.jsx)(i.default, {
                            ref: t,
                            autoFocus: !0,
                            placeholder: v,
                            size: "large",
                            value: r,
                            onChange: e => {
                                o(e.target.value)
                            },
                            onPressEnter: m,
                            disabled: x,
                            maxLength: 21
                        }), (0, n.jsx)(a.default, {
                            onClick: m,
                            style: {
                                marginLeft: 10
                            },
                            type: "primary",
                            size: "large",
                            disabled: x,
                            children: "Submit"
                        })]
                    })]
                })]
            })]
        })
    }));
    const k = c.default.div.attrs({
            className: "flex flex-column"
        })(g || (g = w`
  flex: 1;
  overflow: hidden;
`)),
        P = c.default.div(v || (v = w`
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 2px;
  padding: 20px;
  font-size: 16px;
  line-height: 1;
  @media (max-width: ${0}px) {
    display: none;
  }
`), (() => m.MOBILE_BREAKPOINT)),
        E = c.default.div.attrs({
            className: "flex flex-column"
        })(x || (x = w`
  flex: 1;
  padding: 0px 20px;
  overflow: hidden;
`)),
        S = c.default.div(y || (y = w`
  padding-bottom: 20px;
`)),
        T = c.default.div.attrs({
            className: "flex"
        })(b || (b = w``))
})), o.register("hNNOL", (function(e, r) {
    t(e.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv"),
        a = o("fywoC"),
        i = o("fQMql"),
        s = o("lpEVe"),
        c = o("4MuSt"),
        d = o("kC0Tv"),
        l = o("b9PLE"),
        u = o("cmvpZ"),
        p = o("2FDaO");
    let f;
    const h = e => {
        const {
            name: t,
            action: r,
            translateAllowed: o,
            nameColor: a,
            actionColor: i,
            important: s
        } = e.item, c = s && r && !t;
        return (0, n.jsxs)("div", {
            style: {
                fontSize: 17
            },
            children: [t && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("b", {
                    style: {
                        color: a || d.default.Black
                    },
                    children: t
                }), " "]
            }), r && (0, n.jsx)("span", {
                style: {
                    color: i || d.default.Black,
                    fontWeight: c ? "bold" : "normal"
                },
                children: o ? (0, n.jsx)(l.default, {
                    text: r
                }) : r
            })]
        })
    };
    var m = (0, s.observer)((() => {
        const e = a.useRef(null),
            [t, r] = a.useState([]),
            {
                draw: o
            } = a.useContext(i.default),
            s = (0, u.debounce)((e => {
                r((t => [...t, e]))
            }), 200);
        return a.useEffect((() => {
            const e = (0, c.reaction)((() => o.latestFeedItem), (e => {
                e && (e => {
                    e.important ? r((t => [...t, e])) : s(e)
                })({
                    ...e,
                    id: Date.now().toString() + Math.random().toString()
                })
            }));
            return () => e()
        }), []), a.useEffect((() => {
            e.current && (e.current.scrollTop = e.current.scrollHeight)
        }), [t.length]), (0, n.jsx)(g, {
            ref: e,
            children: (0, u.takeRight)(t, 60).map((e => (0, n.jsx)(h, {
                item: e
            }, `guess-item-${e.id}`)))
        })
    }));
    const g = p.default.div.attrs({
        className: "flex flex-column"
    })(f || (f = (e => e)`
  flex: 1;
  overflow: hidden;
  justify-content: flex-end;
  padding-bottom: 15px;
`))
})), o.register("fmZMS", (function(e, r) {
    t(e.exports, "default", (function() {
        return m
    }));
    var n = o("hxEiv"),
        a = o("fywoC"),
        i = o("1GsNb"),
        s = o("2FDaO"),
        c = o("7OwT7"),
        d = o("dYAeB"),
        l = o("bcb07"),
        u = o("lpEVe"),
        p = o("fQMql"),
        f = o("2L9cU");
    let h;
    var m = (0, u.observer)((() => {
        const {
            draw: e
        } = a.useContext(p.default);
        return (0, n.jsxs)(g, {
            children: [(0, n.jsx)(i.default, {}), e.status === f.DrawStatus.termSelection && (null == e || null === (t = e.me) || void 0 === t ? void 0 : t.role) === f.DrawRole.drawer ? (0, n.jsx)(d.default, {}) : e.status === f.DrawStatus.results ? (0, n.jsx)(l.default, {
                additions: (null == e || null === (r = e.me) || void 0 === r ? void 0 : r.lastRound) || [],
                isDrawer: (null == e || null === (o = e.me) || void 0 === o ? void 0 : o.role) === f.DrawRole.drawer
            }) : (0, n.jsx)(c.default, {})]
        });
        var t, r, o
    }));
    const g = s.default.div.attrs({
        className: "maxWidth maxHeight flex flex-column"
    })(h || (h = (e => e)``))
})), o.register("1GsNb", (function(e, r) {
    t(e.exports, "default", (function() {
        return p
    }));
    var n = o("hxEiv"),
        a = o("kC0Tv"),
        i = o("eEMhJ"),
        s = o("fQMql"),
        c = o("lpEVe"),
        d = o("fywoC"),
        l = o("2FDaO");
    let u;
    var p = (0, c.observer)((() => {
        const {
            balance: e
        } = d.useContext(s.default);
        return (0, n.jsx)(f, {
            children: (0, i.getMoney)(e.balance)
        })
    }));
    const f = l.default.div.attrs({
        className: "maxWidth flex"
    })(u || (u = (e => e)`
  padding: 10px 20px;
  background: #4252af;
  color: ${0};
  justify-content: flex-end;
  font-size: 23px;
  font-weight: bold;
  box-shadow: 0 4px 8px -2px gray;
`), a.default.White)
})), o.register("7OwT7", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var n = o("hxEiv"),
        a = o("b9PLE");
    o("fywoC");
    var i = o("2FDaO");
    let s;
    var c = () => (0, n.jsx)(d, {
        children: (0, n.jsx)(a.default, {
            text: "Waiting for round to begin..."
        })
    });
    const d = i.default.div.attrs({
        className: "flex hc vc"
    })(s || (s = (e => e)`
  flex: 1;
  text-align: center;
  font-size: 38px;
  padding: 40px;
`))
})), o.register("dYAeB", (function(e, r) {
    t(e.exports, "default", (function() {
        return C
    }));
    var n = o("hxEiv"),
        a = o("fC6cp"),
        i = o("69SUA"),
        s = o("kC0Tv"),
        c = o("49Os1"),
        d = o("eEMhJ"),
        l = o("b9PLE"),
        u = o("fQMql"),
        p = o("lpEVe"),
        f = o("fywoC"),
        h = o("2FDaO"),
        m = o("5EOU3");
    let g, v, x, y, b, w = e => e;
    var C = (0, p.observer)((() => {
        const {
            draw: {
                round: {
                    termOptions: e
                }
            }
        } = f.useContext(u.default);
        return (0, n.jsx)(k, {
            children: (0, n.jsx)("div", {
                className: "maxWidth flex hc",
                children: (0, n.jsxs)(P, {
                    children: [(0, n.jsx)(E, {
                        children: (0, n.jsx)(l.default, {
                            text: "You are this round's drawer!"
                        })
                    }), (0, n.jsx)(S, {
                        children: (0, n.jsx)(l.default, {
                            text: "Which term do you want to draw?"
                        })
                    }), (0, n.jsx)(a.default, {}), (0, n.jsx)("div", {
                        style: {
                            height: 7
                        }
                    }), e.map((e => (0, n.jsx)(T, {
                        onClick: () => {
                            return t = e.id, (0, d.send)(c.default.draw.termSelected, t);
                            var t
                        },
                        children: e.term
                    }, e.id)))]
                })
            })
        })
    }));
    const k = h.default.div.attrs({
            className: "flex flex-column vc scroll-y"
        })(g || (g = w`
  flex: 1;
  padding: 40px 0px;
`)),
        P = (0, h.default)(m.HandDrawnDiv).attrs({
            className: "animated fadeInDown"
        })(v || (v = w`
  width: 700px;
  max-width: 90%;
  padding: 35px;
  background: ${0};
`), s.default.White),
        E = h.default.div(x || (x = w`
  font-size: 22px;
  color: #1b5e20;
`)),
        S = h.default.div(y || (y = w`
  font-size: 32px;
  font-weight: ${0};
`), i.FontWeights.Bold),
        T = (0, h.default)(m.HandDrawnDiv).attrs({
            className: "maxWidth"
        })(b || (b = w`
  padding: 10px 20px;
  background-color: #fdfafa;
  font-size: 22px;
  cursor: pointer;
  transition: transform 0.3s;
  will-change: transform;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.03);
  }
  &:last-child {
    margin-bottom: 0px;
  }
`))
})), o.register("bcb07", (function(e, r) {
    t(e.exports, "default", (function() {
        return w
    }));
    var n = o("hxEiv"),
        a = o("kC0Tv"),
        i = o("cmvpZ");
    o("fywoC");
    var s = o("2FDaO"),
        c = o("cQDyT"),
        d = o("2L9cU"),
        l = o("b9PLE"),
        u = o("eEMhJ");
    let p, f, h, m, g, v, x = e => e;
    const y = ["Don't worry, you'll get it next time!", "You must have drawn a blank.", "Being honest, even I couldn't tell what that was.", "Let's just pretend that didn't happen.", "You tried your best!", "Yeah, that wasn't an easy one.", "You were on the right track!", "We don't talk about it.", "You can still catch up!"],
        b = (e, t) => e + t.amount;
    var w = e => {
        const t = e.additions.reduce(b, 0) || 0,
            r = t > 0;
        return (0, n.jsx)(C, {
            className: "flex",
            correct: r,
            children: (0, n.jsx)(k, {
                children: (0, n.jsxs)(P, {
                    children: [(0, n.jsx)(E, {
                        children: e.isDrawer && r ? (0, n.jsx)(l.default, {
                            text: "Nice work!"
                        }) : `+ ${(0,u.getMoney)(t)}`
                    }), (0, n.jsx)(S, {
                        children: r ? (0, n.jsx)(n.Fragment, {
                            children: e.additions.map((e => {
                                return (0, n.jsxs)(T, {
                                    children: ["+ ", (0, u.getMoney)(e.amount), " ", (t = e.type, r = e.metadata, t === d.PointAdditionType.correct ? (0, n.jsx)(l.default, {
                                        text: "for correct guess"
                                    }) : t === d.PointAdditionType.firstGuess ? (0, n.jsx)(l.default, {
                                        text: "for correct first guess"
                                    }) : t === d.PointAdditionType.speed ? (0, n.jsx)(l.default, {
                                        text: "for speed"
                                    }) : t === d.PointAdditionType.goodDrawer && r && "number" == typeof r ? `for ${r} ${(0,u.plural)("person",r,"people")} guessing your drawing correctly!` : "")]
                                }, e.type);
                                var t, r
                            }))
                        }) : (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)(T, {
                                children: (0, n.jsx)(l.default, {
                                    text: e.isDrawer ? "You tried your best!" : (0, i.sample)(y)
                                })
                            })
                        })
                    })]
                })
            })
        })
    };
    const C = s.default.div.attrs({
            className: "scroll-y"
        })(p || (p = x`
  flex: 1;
  background: ${0};
  color: ${0};
`), (e => e.correct ? "rgba(56, 142, 60, 0.85)" : "rgba(123, 31, 162, 0.85)"), a.default.White),
        k = s.default.div(f || (f = x`
  margin: auto;
`)),
        P = s.default.div.attrs({
            className: "flex flex-column vc"
        })(h || (h = x`
  margin: 40px;
  @media (max-width: ${0}px) {
    margin: 30px;
  }
`), (() => c.MOBILE_BREAKPOINT)),
        E = s.default.div(m || (m = x`
  font-size: 70px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  @media (max-width: ${0}px) {
    font-size: 55px;
  }
`), (() => c.MOBILE_BREAKPOINT)),
        S = s.default.div(g || (g = x``)),
        T = s.default.div(v || (v = x`
  font-size: 26px;
  @media (max-width: ${0}px) {
    font-size: 22px;
  }
`), (() => c.MOBILE_BREAKPOINT))
})), o.register("l4810", (function(e, r) {
    t(e.exports, "default", (function() {
        return w
    }));
    var n = o("hxEiv"),
        a = o("lKmIF"),
        i = o("fywoC"),
        s = o("2FDaO"),
        c = o("69SUA"),
        d = o("c0AJQ"),
        l = o("6YYLR"),
        u = o("fWA22"),
        p = o("ke51z"),
        f = o("gU8RR"),
        h = o("596WL"),
        m = o("i9BWX"),
        g = o("lpEVe"),
        v = o("fQMql"),
        x = o("2Xedd"),
        y = o("0cc7D");
    let b;
    var w = (0, g.observer)((() => {
        const {
            pardy: e
        } = i.useContext(v.default);
        return (0, n.jsx)(C, {
            children: (() => {
                if (e.screen === x.PardyScreen.question) {
                    if (e.questionScreen === x.PardyQuestionScreen.finale) return !e.currentBet || e.animatingBetScreenOut ? (0, n.jsx)(h.default, {}) : (0, n.jsx)(m.default, {});
                    if (e.questionStatus === x.PardyQuestionStatus.preview) return (0, n.jsx)(u.default, {});
                    if (e.questionStatus === x.PardyQuestionStatus.ask || e.questionStatus === x.PardyQuestionStatus.timesUp) return e.answered && !e.animatingQuestionScreenOut ? (0, n.jsx)(y.default, {}) : (0, n.jsx)(f.default, {
                        timesUp: e.questionStatus === x.PardyQuestionStatus.timesUp,
                        answered: e.answered
                    })
                }
                return e.answerResponseItems.length ? (0, n.jsx)(p.default, {
                    correct: e.answeredCorrectly,
                    reasons: e.answerResponseItems
                }) : (0, n.jsx)(l.default, {})
            })()
        })
    }));
    const C = s.default.div.attrs({
        className: "maxAll"
    })(b || (b = (e => e)`
  font-family: 'Londrina Solid', cursive;
  font-weight: ${0};
  background: ${0};
  color: ${0};
  user-select: none;
`), c.FontWeights.Light, d.default.background, a.default.White)
})), o.register("c0AJQ", (function(e, r) {
    t(e.exports, "default", (function() {
        return o
    }));
    var o = {
        background: "#0f1150",
        questionBackground: "#303f9f",
        answerResponseCorrect: "#2e7d32",
        answerResponseIncorrect: "#c62828"
    }
})), o.register("6YYLR", (function(e, r) {
    t(e.exports, "default", (function() {
        return i
    }));
    var n = o("hxEiv");
    o("fywoC");
    var a = o("aevD9");
    var i = () => (0, n.jsx)(a.default, {
        message: "Waiting for round to begin..."
    })
})), o.register("aevD9", (function(e, r) {
    t(e.exports, "default", (function() {
        return u
    }));
    var n = o("hxEiv"),
        a = o("69SUA");
    o("fywoC");
    var i = o("2FDaO");
    let s, c, d, l = e => e;
    var u = e => (0, n.jsx)(p, {
        children: (0, n.jsxs)(f, {
            children: [(0, n.jsx)("div", {
                className: "loader",
                style: {
                    margin: 0
                }
            }), (0, n.jsx)(h, {
                children: e.message
            })]
        })
    });
    const p = i.default.div.attrs({
            className: "maxAll flex-center"
        })(s || (s = l``)),
        f = i.default.div.attrs({
            className: "flex-center flex-column"
        })(c || (c = l`
  background: rgba(255, 255, 255, 0.15);
  padding: 50px;
  border-radius: 5px;
  margin: 30px;
  text-align: center;
  font-weight: ${0};
  @media (max-width: ${0}px) {
    margin: 20px;
    padding: 35px;
  }
`), a.FontWeights.Normal, 650),
        h = i.default.div(d || (d = l`
  margin-top: 25px;
  font-size: 32px;
  @media (max-width: ${0}px) {
    font-size: 20px;
    margin-top: 20px;
  }
`), 650)
})), o.register("fWA22", (function(e, r) {
    t(e.exports, "default", (function() {
        return i
    }));
    var n = o("hxEiv");
    o("fywoC");
    var a = o("aevD9");
    var i = () => (0, n.jsx)(a.default, {
        message: "Get ready to answer!"
    })
})), o.register("ke51z", (function(e, r) {
    t(e.exports, "default", (function() {
        return k
    }));
    var n = o("hxEiv"),
        a = o("lKmIF"),
        i = o("69SUA"),
        s = o("fywoC"),
        c = o("2FDaO"),
        d = o("6vbUb"),
        l = o("lj4Mk"),
        u = o("gSKjs"),
        p = o("b9PLE"),
        f = o("c0AJQ"),
        h = o("lpEVe"),
        m = o("fQMql"),
        g = o("cmvpZ");
    let v, x, y, b, w, C = e => e;
    var k = (0, h.observer)((e => {
        const {
            pardy: {
                correctWittyMessages: t,
                incorrectWittyMessages: r
            }
        } = s.useContext(m.default), [o, a] = s.useState(!1), {
            correct: i,
            reasons: c
        } = e, d = s.useMemo((() => (0, g.sample)(t)), []), h = s.useMemo((() => (0, g.sample)(r)), []);
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(P, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: .7
                },
                style: {
                    background: i ? f.default.answerResponseCorrect : f.default.answerResponseIncorrect
                },
                children: (0, n.jsxs)(E, {
                    initial: {
                        opacity: 0,
                        y: "-50%"
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .6,
                        ease: "easeOut"
                    },
                    children: [(0, n.jsx)(S, {
                        className: i ? "fal fa-check-circle" : "fal fa-times-circle"
                    }), (0, n.jsx)(T, {
                        children: (0, n.jsx)(p.default, {
                            text: (i ? "Correct" : "Incorrect") + "!"
                        })
                    }), (0, n.jsx)(B, {
                        children: i ? d : h
                    }), (0, n.jsx)("div", {
                        style: {
                            height: 60
                        }
                    }), (0, n.jsx)(u.default, {
                        reasons: c,
                        onReasonsAnimatedIn: () => {
                            i && a(!0)
                        }
                    })]
                })
            }), o ? (0, n.jsx)(l.default, {}) : null]
        })
    }));
    const P = (0, c.default)(d.motion.div).attrs({
            className: "maxAll scroll-y"
        })(v || (v = C``)),
        E = (0, c.default)(d.motion.div).attrs({
            className: "maxWidth flex-center flex-column"
        })(x || (x = C`
  min-height: 100%;
  padding: 40px 20px;
  text-align: center;
`)),
        S = c.default.i(y || (y = C`
  color: ${0};
  font-size: 144px;
`), a.default.White),
        T = c.default.div(b || (b = C`
  font-weight: ${0};
  font-size: 64px;
  margin-top: 10px;
`), i.FontWeights.Normal),
        B = c.default.div(w || (w = C`
  font-size: 22px;
`))
})), o.register("lj4Mk", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("hxEiv");
    o("fywoC");
    var a = o("2FDaO"),
        i = o("iC8LK");
    let s;
    const c = {
            intensity: 4
        },
        d = {
            width: "100%",
            height: "100%"
        };
    var l = () => (0, n.jsx)(u, {
        children: (0, n.jsx)(i.Fireworks, {
            options: c,
            style: d
        })
    });
    const u = a.default.div.attrs({
        className: "maxWidth maxHeight"
    })(s || (s = (e => e)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`))
})), o.register("gSKjs", (function(e, r) {
    t(e.exports, "default", (function() {
        return u
    }));
    var n = o("hxEiv"),
        a = o("lKmIF"),
        i = o("6vbUb");
    o("fywoC");
    var s = o("2FDaO");
    let c, d, l = e => e;
    var u = e => (0, n.jsx)(p, {
        initial: "hidden",
        animate: "show",
        onAnimationComplete: e.onReasonsAnimatedIn,
        children: e.reasons.map((e => (0, n.jsx)(f, {
            children: e
        }, e)))
    });
    const p = (0, s.default)(i.motion.div).attrs({
            className: "maxWidth flex-center flex-column",
            variants: {
                hidden: {
                    opacity: 0
                },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: .4,
                        delayChildren: 1.3
                    }
                }
            }
        })(c || (c = l``)),
        f = (0, s.default)(i.motion.div).attrs({
            className: "maxWidth",
            variants: {
                hidden: {
                    opacity: 0,
                    scale: .4
                },
                show: {
                    opacity: 1,
                    scale: 1
                }
            },
            transition: {
                duration: .3,
                ease: "easeOut"
            }
        })(d || (d = l`
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${0};
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  font-size: 24px;
`), a.default.White)
})), o.register("gU8RR", (function(e, r) {
    t(e.exports, "default", (function() {
        return y
    }));
    var n = o("hxEiv");
    o("fywoC");
    var a = o("kbIXl"),
        i = o("2FDaO"),
        s = o("6mX5n"),
        c = o("6vbUb"),
        d = o("c0AJQ"),
        l = o("lKmIF"),
        u = o("69SUA"),
        p = o("fgUFi");
    let f, h, m, g, v = e => e;
    const x = () => (0, n.jsx)(C, {
        children: (0, n.jsx)(k, {
            children: (0, n.jsx)(p.default, {
                text: "Time's Up!",
                max: 80,
                noBold: !0,
                paddingHorizontal: "10%"
            })
        })
    });
    var y = e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(b, {
            initial: {
                background: d.default.background
            },
            animate: {
                background: d.default.questionBackground
            },
            transition: {
                duration: 1.2,
                ease: "easeOut"
            },
            children: (0, n.jsx)(w, {
                initial: {
                    opacity: 0,
                    y: "100%"
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    ease: "easeOut"
                },
                children: (0, n.jsx)(a.default, {})
            })
        }), e.timesUp && !e.answered ? (0, n.jsx)(x, {}) : null]
    });
    const b = (0, i.default)(c.motion.div).attrs({
            className: "maxAll"
        })(f || (f = v``)),
        w = (0, i.default)(c.motion.div).attrs({
            className: "maxAll"
        })(h || (h = v`
  font-family: ${0};
  overflow: hidden;
  color: ${0};
`), s.default.mainFontName, l.default.Black),
        C = i.default.div.attrs({
            className: "maxAll flex-center animated fadeIn"
        })(m || (m = v`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`)),
        k = i.default.div.attrs({
            className: "medium-shadow animated jackInTheBox"
        })(g || (g = v`
  background: ${0};
  color: ${0};
  width: 80%;
  max-width: 700px;
  height: 40%;
  max-height: 240px;
  font-weight: ${0};
  border-radius: 10px;
  border: 3px solid;
  animation-delay: 0.5;
`), d.default.questionBackground, l.default.White, u.FontWeights.Normal)
})), o.register("kbIXl", (function(e, r) {
    t(e.exports, "default", (function() {
        return h
    }));
    var n = o("hxEiv"),
        a = o("lKmIF"),
        i = o("49Os1"),
        s = o("6sear"),
        c = o("eEMhJ"),
        d = o("fQMql"),
        l = o("r8ulO"),
        u = o("lpEVe"),
        p = o("fywoC"),
        f = o("jcI11");
    var h = (0, u.observer)((() => {
        const [e, t] = p.useState(!1), {
            user: r,
            pardy: o
        } = p.useContext(d.default);
        p.useEffect((() => (o.animatingQuestionScreenOut = !1, () => o.animatingQuestionScreenOut = !1)), []);
        const u = o.currentQuestion;
        return e && !o.animatingQuestionScreenOut ? null : u ? (0, n.jsx)(l.default, {
            ecc: (0, f.EncryptData)(u, u._id),
            onQuestionAnswered: e => (s.click.play(), t(!0), o.animatingQuestionScreenOut = !0, (0, c.send)(i.default.questionAnswered, {
                questionId: o.currentQuestion._id,
                answer: e
            }), !1),
            beforeOpenAnswerResponse: () => {
                o.animatingQuestionScreenOut = !1
            },
            readToMeEnabled: r.readToMeEnabled,
            questionColor: {
                background: "transparent",
                text: a.default.White
            },
            defaultBackgroundColor: "transparent",
            blockKeyboardEvents: !0
        }) : null
    }))
})), o.register("596WL", (function(e, r) {
    t(e.exports, "default", (function() {
        return B
    }));
    var n = o("hxEiv"),
        a = o("93yIm"),
        i = o("fC6cp"),
        s = o("8K4sH"),
        c = o("lKmIF"),
        d = o("69SUA"),
        l = o("b6p6O"),
        u = o("49Os1"),
        p = o("eEMhJ"),
        f = o("fQMql"),
        h = o("6vbUb"),
        m = o("lpEVe"),
        g = o("fywoC"),
        v = o("2FDaO"),
        x = o("c0AJQ");
    let y, b, w, C, k, P, E, S = e => e;
    const T = 700;
    var B = (0, m.observer)((() => {
        const {
            pardy: e
        } = g.useContext(f.default), [t, r] = g.useState(0), [o, d] = g.useState(!1), h = e.maxBet, m = () => {
            if (!t) return;
            const r = Math.max(1, Math.min(t, h));
            (0, p.send)(u.default.pardy.setBet, r), e.animatingBetScreenOut = !0, e.currentBet = r, v()
        }, v = () => d(!0);
        return (0, n.jsx)(l.default, {
            children: (0, n.jsx)(j, {
                initial: {
                    background: "rgba(0,0,0,0)"
                },
                animate: {
                    background: o ? x.default.background : "rgba(0,0,0,0)"
                },
                transition: {
                    duration: .7
                },
                children: (0, n.jsx)(M, {
                    children: (0, n.jsxs)(_, {
                        initial: {
                            opacity: 0,
                            y: 50,
                            scale: .8,
                            x: 0
                        },
                        animate: o ? {
                            opacity: 0,
                            y: 0,
                            scale: 1,
                            x: "-100%"
                        } : {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            x: 0
                        },
                        transition: {
                            duration: .7
                        },
                        onAnimationComplete: () => {
                            e.animatingBetScreenOut = !1
                        },
                        children: [(0, n.jsx)(R, {
                            children: "The Finale"
                        }), (0, n.jsx)(O, {
                            children: "Place Your Bet!"
                        }), (0, n.jsxs)("div", {
                            className: "flex maxWidth vc",
                            children: [(0, n.jsx)("div", {
                                style: {
                                    fontSize: 26,
                                    marginRight: 10
                                },
                                children: "$"
                            }), (0, n.jsx)(s.default, {
                                size: "large",
                                placeholder: "1,000",
                                min: 1,
                                max: h,
                                autoFocus: !0,
                                formatter: e => {
                                    if (!e) return "";
                                    let t = 1;
                                    return t = Number(e), isNaN(t) && (t = 1), t = Math.max(1, Math.min(t, h)), (0, p.numberWithCommas)(t)
                                },
                                parser: e => Number(e.replace(",", "")),
                                onChange: r,
                                style: {
                                    width: "100%",
                                    height: 55,
                                    display: "flex",
                                    alignItems: "center",
                                    color: c.default.White,
                                    fontSize: 26,
                                    background: "rgba(0,0,0,0.2)"
                                },
                                step: 1,
                                onPressEnter: m
                            })]
                        }), (0, n.jsx)(i.default, {
                            style: {
                                margin: "40px 0px"
                            }
                        }), (0, n.jsxs)(I, {
                            children: [(0, n.jsxs)(D, {
                                children: ["Max Bet: ", (0, p.getMoney)(h)]
                            }), (0, n.jsx)(a.default, {
                                size: "large",
                                type: "primary",
                                style: {
                                    height: 50,
                                    width: 200
                                },
                                onClick: m,
                                children: "Place Bet"
                            })]
                        })]
                    })
                })
            })
        })
    }));
    const j = (0, v.default)(h.motion.div).attrs({
            className: "maxAll scroll-y"
        })(y || (y = S``)),
        M = v.default.div.attrs({
            className: "maxWidth flex-center"
        })(b || (b = S`
  min-height: 100%;
  padding: 30px 0px;
`)),
        _ = (0, v.default)(h.motion.div).attrs({
            className: "flex-column flex-center medium-shadow"
        })(w || (w = S`
  background: rgba(255, 255, 255, 0.1);
  color: ${0};
  padding: 60px 70px;
  border-radius: 5px;
  width: 90%;
  max-width: 700px;
  text-shadow: 0px 2px 2px ${0};
  border: 4px solid #fffde7;
  text-align: center;
  @media (max-width: ${0}px) {
    padding: 40px 30px;
  }
  .ant-input-number-input-wrap {
    width: 100%;
  }
`), c.default.White, c.default.Black, T),
        R = v.default.div(C || (C = S`
  text-shadow: 0px 3px 3px ${0};
  text-transform: uppercase;
  font-weight: ${0};
  font-size: 72px;
  line-height: 1;
  margin-bottom: 10px;
  @media (max-width: ${0}px) {
    font-size: 64px;
    margin-bottom: 10px;
  }
`), c.default.Black, d.FontWeights.UltraBold, T),
        O = v.default.div(k || (k = S`
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: ${0};
  @media (max-width: ${0}px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`), d.FontWeights.Normal, T),
        I = v.default.div.attrs({
            className: "flex maxWidth vc between"
        })(P || (P = S`
  @media (max-width: ${0}px) {
    flex-direction: column;
  }
`), T),
        D = v.default.div(E || (E = S`
  font-size: 18px;
  @media (max-width: ${0}px) {
    margin-bottom: 10px;
  }
`), T)
})), o.register("i9BWX", (function(e, r) {
    t(e.exports, "default", (function() {
        return v
    }));
    var n = o("hxEiv"),
        a = o("fywoC"),
        i = o("eEMhJ"),
        s = o("fQMql"),
        c = o("py2Xr"),
        d = o("6vbUb"),
        l = o("lpEVe"),
        u = o("2FDaO");
    let p, f, h, m, g = e => e;
    var v = (0, l.observer)((() => {
        const {
            pardy: {
                currentBet: e
            }
        } = a.useContext(s.default);
        return (0, n.jsx)(x, {
            children: (0, n.jsxs)(y, {
                children: [(0, n.jsx)(b, {}), (0, n.jsxs)(w, {
                    children: ["Your bet of ", (0, n.jsx)("b", {
                        children: (0, i.getMoney)(e)
                    }), " is in!"]
                })]
            })
        })
    }));
    const x = u.default.div.attrs({
            className: "maxAll flex-center"
        })(p || (p = g``)),
        y = (0, u.default)(d.motion.div).attrs({
            className: "flex-center flex-column",
            initial: {
                opacity: 0,
                x: "100%"
            },
            animate: {
                opacity: 1,
                x: 0
            },
            transition: {
                duration: .7
            }
        })(f || (f = g`
  background: rgba(255, 255, 255, 0.15);
  padding: 50px;
  border-radius: 5px;
  margin: 30px;
  text-align: center;
`)),
        b = (0, u.default)(c.default).attrs({
            name: "fas fa-check",
            className: "animated pulse infinite"
        })(h || (h = g`
  font-size: 64px;
  margin-bottom: 25px;
`)),
        w = u.default.div(m || (m = g`
  font-size: 32px;
`))
})), o.register("py2Xr", (function(e, r) {
    t(e.exports, "default", (function() {
        return a
    }));
    var n = o("hxEiv");
    o("fywoC");
    var a = e => (0, n.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), o.register("0cc7D", (function(e, r) {
    t(e.exports, "default", (function() {
        return k
    }));
    var n = o("hxEiv"),
        a = o("69SUA"),
        i = o("eEMhJ"),
        s = o("fQMql"),
        c = o("6vbUb"),
        d = o("cmvpZ"),
        l = o("lpEVe"),
        u = o("fywoC"),
        p = o("2FDaO"),
        f = o("c0AJQ");
    let h, m, g, v, x, y, b, w = e => e;
    const C = 650;
    var k = (0, l.observer)((() => {
        const {
            pardy: {
                tips: e,
                answerLockedInWittyMessages: t
            }
        } = u.useContext(s.default), r = u.useMemo((() => (0, d.sample)(t)), []), o = u.useMemo((() => (0, d.sample)(e)), []);
        return (0, n.jsxs)(P, {
            initial: {
                background: f.default.questionBackground
            },
            animate: {
                background: f.default.background
            },
            transition: {
                duration: 1.3
            },
            children: [(0, n.jsxs)(E, {
                children: [(0, n.jsx)(S, {}), (0, n.jsx)(T, {
                    children: "Answer locked in!"
                }), (0, n.jsx)(B, {
                    children: r
                })]
            }), (0, n.jsx)(j, {
                children: (0, n.jsx)(M, {
                    initial: {
                        y: "100%"
                    },
                    animate: {
                        y: 0
                    },
                    transition: {
                        duration: 1.5,
                        delay: 3
                    },
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                })
            })]
        })
    }));
    const P = (0, p.default)(c.motion.div).attrs({
            className: "maxAll flex-center"
        })(h || (h = w``)),
        E = p.default.div.attrs({
            className: "flex-center flex-column animated jackInTheBox"
        })(m || (m = w`
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  @media (max-width: ${0}px) {
    padding: 40px 20px;
  }
`), C),
        S = p.default.img.attrs({
            src: (0, i.getAssetPath)("lock.svg"),
            className: "animated pulse infinite"
        })(g || (g = w`
  height: 120px;
  animation-duration: 3s;
  @media (max-width: ${0}px) {
    height: 100px;
  }
`), C),
        T = p.default.div(v || (v = w`
  font-size: 52px;
  margin-top: 15px;
  font-weight: ${0};
  @media (max-width: ${0}px) {
    font-size: 36px;
    margin-top: 10px;
  }
`), a.FontWeights.Normal, C),
        B = p.default.div(x || (x = w`
  font-size: 22px;
  margin-top: 10px;
  @media (max-width: ${0}px) {
    font-size: 14px;
    margin-top: 8px;
  }
`), C),
        j = p.default.div.attrs({
            className: "maxAll flex hc"
        })(y || (y = w`
  position: absolute;
  top: 0;
  left: 0;
  align-items: flex-end;
  pointer-events: none;
`)),
        M = (0, p.default)(c.motion.div)(b || (b = w`
  padding: 15px;
  width: 90%;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  font-size: 18px;
  @media (max-width: ${0}px) {
    font-size: 14px;
    padding: 12px;
  }
`), C)
})), o.register("iKzHX", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var n = o("hxEiv"),
        a = o("9Mv96"),
        i = o("lKmIF");
    o("fywoC");
    var s = o("7xd6F");
    var c = () => (0, n.jsx)(s.BackgroundContainer, {
        children: (0, n.jsx)(a.default, {
            style: {
                color: i.default.White
            },
            size: 48
        })
    })
})), o.register("fhcUk", (function(e, r) {
    t(e.exports, "default", (function() {
        return A
    }));
    var n = o("hxEiv"),
        a = o("fywoC"),
        i = o("2FDaO"),
        s = o("6vbUb"),
        c = o("kC0Tv"),
        d = o("hbfMQ"),
        l = o("eEMhJ"),
        u = o("69SUA"),
        p = o("fC6cp"),
        f = o("cmvpZ"),
        h = o("lpEVe"),
        m = o("fQMql");
    o("jlxb2");
    var g = o("1rlgk"),
        v = o("l360q"),
        x = o("49Os1"),
        y = o("j2XHK"),
        b = o("6yrsF"),
        w = o("b9PLE"),
        C = o("iMOcM");
    let k, P, E, S, T, B, j, M, _ = e => e;
    const R = 800,
        O = 700,
        I = e => (0, n.jsx)(G, {
            background: e.color,
            onClick: e.select,
            children: e.num
        }),
        D = e => {
            const t = new(0, b.Howl)({
                    src: [(0, l.getAssetPath)("numberSwitch.mp3")]
                }),
                r = new(0, b.Howl)({
                    src: [(0, l.getAssetPath)("numberLogo.mp3")]
                }),
                o = new(0, b.Howl)({
                    src: [(0, l.getAssetPath)("numberSuccess.mp3")]
                }),
                i = new(0, b.Howl)({
                    src: [(0, l.getAssetPath)("numberError.mp3")]
                }),
                [s] = a.useState((0, f.shuffle)(Array.from(Array(9).keys()).map((e => e + 1)))),
                [c, d] = a.useState(1),
                [u, h] = a.useState(!1),
                [m, g] = a.useState(!1);
            a.useEffect((() => {
                (0, C.loadFont)("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap"), r.play()
            }), []);
            const v = e => u ? "#ffebee" : e < c ? "#c8e6c9" : "#fff8e1";
            return (0, n.jsx)(N, {
                children: (0, n.jsx)(L, {
                    animate: {
                        opacity: m ? 0 : 1
                    },
                    transition: {
                        duration: .8
                    },
                    initial: {
                        opacity: 0
                    },
                    children: (0, n.jsxs)(z, {
                        animate: {
                            opacity: m ? 0 : 1,
                            y: m ? 20 : 0
                        },
                        transition: {
                            duration: .8
                        },
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        children: [(0, n.jsx)(F, {}), (0, n.jsx)(H, {
                            children: (0, n.jsx)(w.default, {
                                text: "Outnumbered"
                            })
                        }), (0, n.jsxs)(W, {
                            children: ["by ", e.name, "."]
                        }), (0, n.jsx)(p.default, {}), (0, n.jsx)(V, {
                            children: s.map((r => (0, n.jsx)(I, {
                                num: r,
                                color: v(r),
                                select: () => (r => {
                                    10 !== c && (r !== c ? (d(1), h(!0), i.play(), setTimeout((() => {
                                        h(!1)
                                    }), 1e3)) : (d(r + 1), h(!1), 9 === r ? (setTimeout((() => {
                                        g(!0)
                                    }), 350), setTimeout((() => {
                                        e.onFinish()
                                    }), 1200), o.play()) : t.play()))
                                })(r)
                            }, `numblock-${r}`)))
                        })]
                    })
                })
            })
        };
    var A = (0, h.observer)((() => {
        var e;
        const {
            powerups: t,
            gameValues: r
        } = a.useContext(m.default);
        return (null == t || null === (e = t.screenAttack) || void 0 === e ? void 0 : e.powerupName) !== g.PowerupNames.outnumbered || r.gameStatus !== y.GameStatus.gameplay || r.nonDismissMessage.title ? null : (0, n.jsx)(D, {
            name: t.screenAttack.attackerName,
            onFinish: () => {
                t.screenAttack = {
                    powerupName: "",
                    attackerName: "",
                    fullScreen: !1
                }, (0, l.send)(x.default.outnumberedComplete)
            }
        })
    }));
    const N = i.default.div.attrs({
            className: "maxWidth maxHeight"
        })(k || (k = _`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
`)),
        L = (0, i.default)(s.motion.div).attrs({
            className: "maxWidth maxHeight flex hc vc"
        })(P || (P = _`
  background: rgba(0, 0, 0, 0.35);
`)),
        z = (0, i.default)(s.motion.div).attrs({
            className: "flex flex-column hc vc"
        })(E || (E = _`
  padding: 60px;
  color: ${0};
  background: ${0};
  border-radius: 5px;
  box-shadow: ${0};
  @media (max-width: ${0}px),
    (max-height: ${0}px) {
    padding: 35px;
  }
  @media (max-width: 550px) {
    padding: 25px;
  }
`), c.default.Black, c.default.White, d.default.basic, R, O),
        F = i.default.img.attrs({
            src: (0, l.getAssetPath)("numbers.svg"),
            alt: "number blocks"
        })(S || (S = _`
  height: 125px;
  @media (max-width: ${0}px),
    (max-height: ${0}px) {
    height: 110px;
  }
  @media (max-width: 550px) {
    height: 80px;
  }
`), R, O),
        H = i.default.div(T || (T = _`
  font-size: 48px;
  font-weight: ${0};
  margin-top: 12px;
  text-transform: uppercase;
  font-family: 'Dela Gothic One', '${0}';
  @media (max-width: ${0}px),
    (max-height: ${0}px) {
    font-size: 30px;
    margin-top: 10px;
  }
  @media (max-width: 550px) {
    font-size: 24px;
    margin-top: 8px;
  }
`), u.FontWeights.Bold, v.default.mainFontName, R, O),
        W = i.default.div(B || (B = _`
  font-size: 21px;
  @media (max-width: ${0}px),
    (max-height: ${0}px) {
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
  }
`), R, O),
        V = i.default.div(j || (j = _`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    '. . .'
    '. . .'
    '. . .';
`)),
        G = i.default.div.attrs({
            className: "flex hc vc"
        })(M || (M = _`
  width: 90px;
  height: 75px;
  border: 2px solid black;
  border-radius: 4px;
  font-weight: ${0};
  font-size: 20px;
  background: ${0};
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 550px) {
    width: 70px;
  }
  @media (max-height: 450px) {
    height: 50px;
  }
`), u.FontWeights.Bold, (e => e.background))
})), o.register("eVMwe", (function(e, r) {
    t(e.exports, "default", (function() {
        return P
    }));
    var n = o("hxEiv"),
        a = o("fywoC"),
        i = o("fThXt"),
        s = o("2FDaO"),
        c = o("69SUA"),
        d = o("lKmIF"),
        l = o("c0AJQ"),
        u = o("fC6cp"),
        p = o("k4l7h"),
        f = o("lpEVe"),
        h = o("fQMql"),
        m = o("k5Bua"),
        g = o("i6SGg");
    let v, x, y, b, w = e => e;
    const C = [g.default.waiting, g.default.pardyMode],
        k = (0, f.observer)((() => {
            const {
                pardy: e,
                navigation: {
                    currentRoute: t
                }
            } = a.useContext(h.default), r = a.useMemo((() => !(e.power || !C.includes(t) || !e.powers.length || !e.powerOptions.length)), [e.power, t, e.powers.length, e.powerOptions.length]);
            return (0, n.jsx)(i.default, {
                open: r,
                close: () => !1,
                customWidth: "700px",
                customMaxWidth: "95%",
                customPadding: "0px",
                customStyle: {
                    border: `3px solid ${d.default.White}`
                },
                children: (0, n.jsxs)(E, {
                    children: [(0, n.jsxs)(S, {
                        children: [(0, n.jsx)(T, {
                            children: "Pick Your"
                        }), (0, n.jsx)(B, {
                            children: "Power!"
                        })]
                    }), (0, n.jsx)(u.default, {
                        style: {
                            margin: "30px 0px"
                        }
                    }), e.powers.filter((t => e.powerOptions.includes(t.id))).map((e => (0, n.jsx)(p.default, {
                        id: e.id,
                        name: e.name,
                        image: e.image,
                        description: e.description,
                        background: e.background
                    }, e.id)))]
                })
            })
        }));
    var P = (0, f.observer)((() => {
        const {
            gameOptions: {
                specialGameType: e
            }
        } = a.useContext(h.default);
        return e && e.includes(m.PARDY) ? (0, n.jsx)(k, {}) : null
    }));
    const E = s.default.div.attrs({
            className: "maxWidth"
        })(v || (v = w`
  padding: 40px;
  background: ${0};
  color: ${0};
  font-family: 'Londrina Solid', cursive;
  font-weight: ${0};
`), l.default.background, d.default.White, c.FontWeights.Light),
        S = s.default.div.attrs({
            className: "maxWidth flex-column flex-center"
        })(x || (x = w`
  text-transform: uppercase;
  line-height: 1;
  text-shadow: 0px 3px 3px ${0};
`), d.default.Black),
        T = s.default.div(y || (y = w`
  font-size: 42px;
`)),
        B = s.default.div(b || (b = w`
  font-size: 84px;
  font-weight: ${0};
`), c.FontWeights.Bold)
})), o.register("k4l7h", (function(e, r) {
    t(e.exports, "default", (function() {
        return x
    }));
    var n = o("hxEiv"),
        a = o("lKmIF"),
        i = o("69SUA"),
        s = o("49Os1"),
        c = o("eEMhJ"),
        d = o("7SwYo");
    o("fywoC");
    var l = o("2FDaO");
    let u, p, f, h, m, g, v = e => e;
    var x = e => (0, n.jsxs)(y, {
        children: [(0, n.jsx)(b, {
            style: {
                background: e.background
            },
            children: (0, n.jsx)(w, {
                src: e.image
            })
        }), (0, n.jsxs)(C, {
            children: [(0, n.jsx)(k, {
                children: e.name
            }), (0, n.jsx)(P, {
                children: e.description
            }), (0, n.jsx)(d.default, {
                type: "primary",
                style: {
                    width: 250
                },
                size: "small",
                label: "Select",
                onClick: () => {
                    (0, c.send)(s.default.pardy.setPower, e.id)
                }
            })]
        })]
    });
    const y = l.default.div.attrs({
            className: "maxWidth medium-shadow"
        })(u || (u = v`
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 3px solid #90a4ae;
  color: ${0};
  background: ${0};
  text-align: center;
`), a.default.Black, a.default.White),
        b = l.default.div.attrs({
            className: "maxWidth flex-center"
        })(p || (p = v`
  height: 80px;
`)),
        w = l.default.img(f || (f = v`
  height: 42px;
  filter: drop-shadow(2px 2px 2px #222);
`)),
        C = l.default.div.attrs({
            className: "maxWidth flex-column flex-center"
        })(h || (h = v`
  padding: 20px;
  background: #f5f5f5;
`)),
        k = l.default.div(m || (m = v`
  font-weight: ${0};
  font-size: 34px;
`), i.FontWeights.Normal),
        P = l.default.div(g || (g = v`
  font-size: 18px;
  margin-bottom: 15px;
`))
})), o.register("fymL9", (function(e, r) {
    t(e.exports, "default", (function() {
        return i
    }));
    var n = o("iMOcM"),
        a = o("lL7NR");
    var i = async e => {
        const {
            serverUrl: t,
            roomId: r,
            intentId: o
        } = e, i = {
            intent: o
        };
        (0, n.isLoggedIn)() && (i.authToken = (0, n.getUser)().token), (0, a.default)({
            joinOptions: {
                serverUrl: t,
                roomId: r,
                options: i
            },
            disposeOnError: !1
        })
    }
})), o.register("lL7NR", (function(e, r) {
    t(e.exports, "default", (function() {
        return c
    }));
    var n = o("91OQF"),
        a = o("kcsKB"),
        i = o("8nYP6"),
        s = o("6xFdZ");
    var c = e => {
        const {
            joinOptions: t,
            createOptions: r
        } = e;
        if (!t && !r) return;
        const o = () => {
            a.default.engine.attemptingToConnect = !1, a.default.engine.hasConnected = !1, a.default.engine.connected = !1, a.default.engine.connectionError = !1, a.default.engine.joinedRoom = !1, a.default.engine.attemptingToJoinRoom = !1, a.default.engine.errorJoiningRoom = !1, a.default.engine.roomError = null
        };
        o(), a.default.engine.attemptingToConnect = !0;
        const c = new(0, n.Client)(t ? t.serverUrl : r.serverUrl, {
                transports: ["websocket"],
                clientIdSuffix: "-play"
            }),
            d = c.onConnectError.add((t => {
                console.log({
                    connectionError: t
                }), e.onConnectError && e.onConnectError(t), e.disposeOnError && o(), a.default.engine.connectionError = !0, a.default.engine.attemptingToConnect = !1
            }));
        c.onConnect.add((() => {
            d(), a.default.engine.client = c, a.default.engine.connected = !0, a.default.engine.hasConnected = !0, a.default.engine.attemptingToConnect = !1, a.default.engine.attemptingToJoinRoom = !0, c.onConnectError.add((() => {
                a.default.engine.connectionError = !0
            })), c.onConnect.add((() => {
                a.default.engine.connected = !0, a.default.engine.connectionError = !1, a.default.engine.attemptingToConnect = !1, a.default.engine.attemptingToJoinRoom = !0
            })), c.onReconnect.add((() => {
                a.default.engine.connected = !0, a.default.engine.connectionError = !1, a.default.engine.attemptingToConnect = !1, a.default.engine.attemptingToJoinRoom = !0
            })), a.default.engine.attemptingToJoinRoom = !0;
            const n = t ? c.joinRoom(t.roomId, t.options) : c.createRoom(r.roomType, r.options);
            n.onJoinAttempt.add((() => {
                a.default.engine.attemptingToJoinRoom = !0
            })), n.onJoinError.add((t => {
                console.log({
                    roomJoinError: t
                }), e.onRoomJoinError && e.onRoomJoinError(t), a.default.engine.roomError = t, a.default.engine.errorJoiningRoom = !0, a.default.engine.attemptingToJoinRoom = !1
            }));
            const l = n.onJoinError.add((() => {
                e.disposeOnError && o()
            }));
            n.onJoin.add((() => {
                (0, i.default)(n), (0, s.default)(), e.onRoomJoin && e.onRoomJoin(), a.default.engine.hasJoinedRoom = !0
            }), !0), n.onJoin.add((() => {
                l(), a.default.engine.joinedRoom = !0, a.default.engine.attemptingToJoinRoom = !1, a.default.engine.game || (a.default.engine.game = n)
            })), n.onLeave.add((() => {
                a.default.engine.joinedRoom = !1
            }))
        }), !0), c.onDisconnect.add((() => {
            a.default.engine.attemptingToConnect = !0, a.default.engine.connected = !1, e.onDisconnect && e.onDisconnect()
        }))
    }
})), o.register("6xFdZ", (function(e, r) {
    t(e.exports, "default", (function() {
        return d
    }));
    var n = o("6sear"),
        a = o("4MuSt"),
        i = o("9HHXJ"),
        s = o("1rlgk"),
        c = o("kcsKB");
    var d = () => {
        (0, a.reaction)((() => c.default.powerups.activePowerups), (e => {
            e.includes(s.PowerupNames.fivePercentBot) ? c.default.ui.snowing = !0 : c.default.ui.snowing = !1
        })), (0, a.reaction)((() => c.default.navigation.leaderboardDrawerOpen), (() => n.woosh.play())), (0, a.reaction)((() => c.default.imposter.status), (() => (0, i.default)())), (0, a.reaction)((() => c.default.gameValues.gameStatus), (() => (0, i.default)())), (0, a.reaction)((() => c.default.navigation.currentRoute), (() => (0, i.default)()))
    }
})), o.register("9HHXJ", (function(e, r) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = o("i6SGg"),
        a = o("eEMhJ"),
        i = o("7CIMU"),
        s = o("kcsKB"),
        c = o("j2XHK");
    const d = [n.default.questions, n.default.shop];
    var l = () => {
        if (s.default.gameValues.gameStatus === c.GameStatus.gameplay) return (0, a.inImposterMode)() ? s.default.imposter.status === i.ImposterStatus.questions ? void(d.includes(s.default.navigation.currentRoute) || (0, a.changeRoute)(n.default.questions)) : void(0, a.changeRoute)(n.default.imposterMode) : void((0, a.inDrawMode)() ? (0, a.changeRoute)(n.default.drawMode) : (0, a.inPardyMode)() && (0, a.changeRoute)(n.default.pardyMode))
    }
})), o.register("5xW2O", (function(e, r) {
    t(e.exports, "default", (function() {
        return w
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("1GhWV"),
        c = o("fC6cp"),
        d = o("9xElQ"),
        l = o("fBuQJ"),
        u = o("gHmyG"),
        p = o("lKmIF"),
        f = o("6mX5n"),
        h = o("lpEVe"),
        m = o("fywoC"),
        g = o("j2XHK"),
        v = o("i6SGg"),
        x = o("gXHSQ");
    const y = "https://status.gimkit.com";
    let b = class extends m.Component {
        render() {
            const {
                engine: e,
                gameValues: t,
                navigation: r
            } = this.props, o = ((e, t, r) => !(t.gameStatus === g.GameStatus.results || (!e.connectionError || e.game) && !e.errorFindingServerForGame && !e.errorJoiningRoom && (r.currentRoute === v.default.join || !e.game || e.joinedRoom || r.currentRoute === v.default.nonDismissMessage)))(e, t, r);
            return r.currentRoute === v.default.join ? (0, i.jsx)(l.default, {
                open: o,
                closable: !1,
                footer: null,
                width: 700,
                centered: !0,
                bodyStyle: {
                    padding: 40
                },
                maskStyle: {
                    background: "transparent"
                },
                children: this.getContent()
            }) : (0, i.jsx)(d.default, {
                open: o,
                placement: "bottom",
                closable: !1,
                height: "auto",
                children: this.getContent()
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "getLoading", (() => {
                const {
                    engine: e
                } = this.props;
                return !e.errorJoiningRoom && (!e.errorFindingServerForGame && !(!e.game && e.connectionError))
            })), (0, n.default)(this, "getContent", (() => {
                const e = this.getLoading();
                return (0, i.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                        fontFamily: f.default.name,
                        color: p.default.Black,
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: [e && (0, i.jsx)(u.default, {
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
                        }), (0, i.jsx)(c.default, {})]
                    }), (0, i.jsx)("div", {
                        style: {
                            textAlign: "center",
                            fontSize: 23,
                            fontWeight: "bold"
                        },
                        children: this.getMessage()
                    })]
                })
            })), (0, n.default)(this, "getMessage", (() => {
                const {
                    engine: e
                } = this.props;
                if (e.errorFindingServerForGame) return (0, i.jsxs)("span", {
                    children: ["We couldn't find any available game servers. Gimkit might be down. Check ", (0, i.jsx)("a", {
                        href: y,
                        children: y
                    }), " for more info."]
                });
                if (!e.game && e.connectionError) return (0, i.jsxs)("span", {
                    children: ["Your network is blocking connection to our game servers. Get more details on how to fix this ", (0, i.jsx)("a", {
                        href: "https://www.gimkit.com/connection",
                        children: "here."
                    })]
                });
                if (e.errorJoiningRoom) {
                    const t = (0, x.default)(e.roomError);
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
    b = (0, a.__decorate)([(0, h.inject)("engine", "gameValues", "navigation"), h.observer], b);
    var w = b
})), o.register("1GhWV", (function(e, r) {
    t(e.exports, "default", (function() {
        return d
    }));
    var n = o("dnh3u"),
        a = o("fywoC"),
        i = o("cpEDk"),
        s = o("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, n.default)((0, n.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "CloseCircleOutlined";
    var d = a.forwardRef(c)
})), o.register("cpEDk", (function(e, r) {
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
})), o.register("gXHSQ", (function(e, r) {
    t(e.exports, "default", (function() {
        return a
    }));
    var n = o("kcsKB");
    var a = e => {
        let t = "Error joining game",
            r = "",
            o = "string" == typeof e ? e : e.type;
        if ("MAX_PLAYERS" === o) {
            let {
                message: o
            } = e;
            t = o.title ? o.title : "Game full", r = o.description ? o.description : "There are too many players in this game"
        } else "HOST_DISCONNECTED" === o ? (t = "All done.", r = "The host for this game has left.") : "GAME_FINISHED" === o ? (t = "Game ended.", r = "This game has already ended.") : "INVALID_INTENT" === o ? (t = "Reservation expired", r = "Your reservation to join this game has expired. Refresh and try joining again.") : o && o.includes && o.includes("No data found") ? n.default.engine.hasJoinedRoom ? (t = "All gone.", r = "The game you were in no longer exists.") : (t = "No game found.", r = "The game you were trying to join does not exist.") : r = "An unknown error occurred.";
        return {
            title: t,
            description: r
        }
    }
})), o.register("cckSe", (function(e, r) {
    t(e.exports, "default", (function() {
        return v
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("7SwYo"),
        c = o("fThXt"),
        d = o("lpEVe"),
        l = o("fywoC"),
        u = o("2FDaO");
    let p, f, h, m = e => e,
        g = class extends l.Component {
            render() {
                return (0, i.jsx)(c.default, {
                    open: this.props.ui.showingSuccessModal,
                    close: this.close,
                    customWidth: "570px",
                    customPadding: "26px",
                    children: this.getContent()
                })
            }
            constructor(...e) {
                super(...e), (0, n.default)(this, "close", (() => this.props.ui.showingSuccessModal = !1)), (0, n.default)(this, "getContent", (() => {
                    const {
                        successModalInfo: e
                    } = this.props.ui;
                    if (!e || !e.title) return null;
                    const {
                        textOptions: t
                    } = e, {
                        icon: r,
                        background: o,
                        color: n,
                        title: a,
                        description: c
                    } = e;
                    return (0, i.jsxs)("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center"
                        },
                        children: [(0, i.jsx)(x, {
                            style: {
                                background: o,
                                color: n
                            },
                            children: (0, i.jsx)("i", {
                                className: r
                            })
                        }), (0, i.jsx)(y, {
                            children: a
                        }), (0, i.jsx)(b, {
                            style: {
                                textAlign: t && t.align ? t.align : "center",
                                whiteSpace: t && t.customLines ? "pre-wrap" : "normal"
                            },
                            children: c
                        }), (0, i.jsx)(s.default, {
                            onClick: this.close,
                            style: {
                                marginTop: 14
                            },
                            type: "secondary",
                            label: "Close",
                            size: "medium"
                        })]
                    })
                }))
            }
        };
    g = (0, a.__decorate)([(0, d.inject)("ui"), d.observer], g);
    var v = g;
    const x = u.default.div(p || (p = m`
  height: 78px;
  width: 78px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
`)),
        y = u.default.div(f || (f = m`
  font-size: 38px;
  font-weight: 900;
  margin-top: 6px;
`)),
        b = u.default.div(h || (h = m`
  font-size: 18px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`))
})), o.register("8YGuP", (function(e, r) {
    t(e.exports, "default", (function() {
        return M
    }));
    var n = o("divCp"),
        a = o("kHqmx"),
        i = o("hxEiv"),
        s = o("kC0Tv"),
        c = o("49Os1"),
        d = o("i6SGg"),
        l = o("eEMhJ"),
        u = o("5933e"),
        p = o("fThXt"),
        f = o("b9PLE"),
        h = o("7CIMU"),
        m = o("lpEVe"),
        g = o("fywoC"),
        v = o("2FDaO"),
        x = o("5w7mk");
    let y, b, w, C, k, P, E, S = e => e;
    const T = e => {
            if (e === h.ImposterShopItemId.clearListRemover) return e => !e.canNeverBeClear && e.role === h.PersonRole.detective
        },
        B = e => {
            const t = e.items.find((t => t.id === e.shopItem));
            return t ? (0, i.jsxs)(_, {
                children: [(0, i.jsxs)(R, {
                    style: {
                        color: s.default.White,
                        background: t.background
                    },
                    children: [(0, i.jsx)(O, {
                        children: (0, i.jsx)(u.default, {
                            style: {
                                fontSize: 34
                            },
                            name: t.icon
                        })
                    }), (0, i.jsxs)(I, {
                        children: [(0, i.jsx)(D, {
                            children: (0, i.jsx)(f.default, {
                                text: t.name
                            })
                        }), (0, i.jsx)(A, {
                            children: (0, i.jsx)(f.default, {
                                text: t.description
                            })
                        })]
                    })]
                }), (0, i.jsx)(N, {
                    children: (0, i.jsx)(x.default, {
                        actionText: (r = t.id, r === h.ImposterShopItemId.fakeInvestigation || r === h.ImposterShopItemId.privateInvestigation || r === h.ImposterShopItemId.publicInvestigation ? "Investigate" : r === h.ImposterShopItemId.donate ? "Donate" : "Use"),
                        showAction: !0,
                        onSelect: e.handleSelect,
                        filter: T(t.id)
                    })
                })]
            }) : (e.close(), null);
            var r
        };
    let j = class extends g.Component {
        render() {
            if (!this.props.imposter.me) return null;
            const {
                imposter: e
            } = this.props, t = e.currentShopItemModalVisible;
            return (0, i.jsx)(p.default, {
                open: t,
                close: this.close,
                customMaxWidth: "90%",
                customWidth: "600px",
                customPadding: "0px",
                children: (0, i.jsx)(B, {
                    shopItem: e.currentShopItem,
                    items: e.shopItems,
                    close: this.close,
                    handleSelect: this.handlePersonSelect
                })
            })
        }
        constructor(...e) {
            super(...e), (0, n.default)(this, "close", (() => {
                this.props.imposter.currentShopItemModalVisible = !1
            })), (0, n.default)(this, "handlePersonSelect", (e => {
                (0, l.send)(c.default.imposter.purchase, {
                    item: this.props.imposter.currentShopItem,
                    on: e
                }), (0, l.changeRoute)(d.default.questions), this.close()
            }))
        }
    };
    j = (0, a.__decorate)([(0, m.inject)("imposter"), m.observer], j);
    var M = j;
    const _ = v.default.div.attrs({
            className: "maxWidth flex flex-column"
        })(y || (y = S`
  font-family: 'Space Grotesk', monospace;
`)),
        R = v.default.div(b || (b = S`
  height: 170px;
  padding: 20px;
`)),
        O = v.default.div.attrs({
            className: "flex maxWidth vc hc"
        })(w || (w = S`
  height: 60px;
`)),
        I = v.default.div(C || (C = S`
  text-align: center;
  margin-top: 4px;
`)),
        D = v.default.div(k || (k = S`
  font-size: 25px;
  font-weight: 900;
`)),
        A = v.default.div(P || (P = S`
  font-size: 14px;
`)),
        N = v.default.div.attrs({
            className: "maxWidth"
        })(E || (E = S`
  padding: 20px;
`))
})), o.register("gMHS1", (function(e, r) {
    t(e.exports, "default", (function() {
        return B
    }));
    var n = o("hxEiv"),
        a = o("kC0Tv"),
        i = o("eEMhJ"),
        s = o("7SwYo"),
        c = o("fThXt"),
        d = o("b9PLE"),
        l = o("7CIMU"),
        u = o("lpEVe"),
        p = o("fywoC"),
        f = o("2FDaO"),
        h = o("jcI11"),
        m = o("fQMql");
    let g, v, x, y, b, w, C, k, P, E = e => e;
    var S;
    (S = P || (P = {})).intro = "intro", S.role = "role";
    const T = (0, u.observer)((() => {
        const [e, t] = p.useState(P.intro), {
            imposter: r
        } = p.useContext(m.default), o = () => {
            e !== P.intro && (r.roleModalOpen = !1)
        }, a = () => {
            t(P.role)
        }, u = () => r.me.role === l.PersonRole.imposter, f = () => {
            const {
                epl: e,
                impostersLeft: t,
                me: o
            } = r, n = (0, h.DecryptData)(e) || [];
            let a = [];
            if (u()) {
                const e = n.filter((e => e.role === l.PersonRole.imposter && e.id !== o.id));
                e.length && a.push(`Other ${(0,i.plural)("Impostor",e.length)}: ${(0,i.teamPlayerNames)(e.map((e=>e.name)))}`), a.push("Visit Mission Control to decrease the number of investigations\n      crewmates can have."), a.push("Blend in by running fake investigations or putting on a disguise.")
            } else a.push(`There ${1===t?"is":"are"} ${t} ${(0,i.plural)("impostor",t)} on board. Find and vote them out!`), a.push("Run investigations in Mission Control to rule out fellow crewmates."), a.push("Use your notebook to keep track of your suspicions."), a.push("Call a meeting when you're ready to vote someone out.");
            return a
        }, g = r.roleModalOpen && r.status !== l.ImposterStatus.intro;
        return (0, n.jsx)(c.default, {
            open: g,
            close: o,
            customPadding: "0px",
            customWidth: "600px",
            customMaxWidth: "600px",
            children: (0, n.jsx)(j, {
                children: e === P.intro ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(M, {
                        children: (0, n.jsx)(d.default, {
                            text: "Welcome aboard."
                        })
                    }), (0, n.jsx)(_, {}), (0, n.jsx)(R, {
                        children: (0, n.jsx)(d.default, {
                            text: "Make sure nobody can see your screen, and then click to view your\n            role!"
                        })
                    }), (0, n.jsx)(s.default, {
                        style: {
                            width: "100%"
                        },
                        size: "medium",
                        type: "primary",
                        onClick: a,
                        label: (0, n.jsx)(d.default, {
                            text: "View Role"
                        })
                    })]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(O, {
                        children: (0, n.jsx)(d.default, {
                            text: "You are " + (u() ? "an" : "a")
                        })
                    }), (0, n.jsx)(I, {
                        children: (0, n.jsx)(d.default, {
                            text: u() ? "Impostor" : "Crewmate"
                        })
                    }), (0, n.jsx)(D, {
                        children: f().map((e => (0, n.jsx)(A, {
                            children: (0, n.jsx)(d.default, {
                                text: e
                            })
                        }, e)))
                    }), (0, n.jsx)(s.default, {
                        style: {
                            marginTop: 5
                        },
                        size: "medium",
                        type: "primary",
                        onClick: o,
                        label: (0, n.jsx)(d.default, {
                            text: "Close"
                        })
                    })]
                })
            })
        })
    }));
    var B = (0, u.observer)((() => {
        const {
            imposter: e
        } = p.useContext(m.default);
        return e.me ? (0, n.jsx)(T, {}) : null
    }));
    const j = f.default.div.attrs({
            className: "maxWidth flex flex-column hc vc"
        })(g || (g = E`
  background: ${0};
  color: ${0};
  padding: 40px;
  font-family: 'Space Grotesk', monospace;
  text-align: center;
`), a.default.Black, a.default.White),
        M = f.default.div(v || (v = E`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 16px;
`)),
        _ = f.default.img.attrs({
            src: (0, i.getAssetPath)("space-ship.svg")
        })(x || (x = E`
  height: 125px;
`)),
        R = f.default.div(y || (y = E`
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 18px;
`)),
        O = f.default.div(b || (b = E`
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: -8px;
`)),
        I = f.default.div(w || (w = E`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 20px;
`)),
        D = f.default.ul.attrs({
            className: "maxWidth"
        })(C || (C = E`
  font-size: 16px;
  text-align: left;
`)),
        A = f.default.li(k || (k = E`
  margin-bottom: 13px;
`))
})), o.register("lCOXQ", (function(e, r) {
    t(e.exports, "legitEvent", (function() {
        return o
    }));
    const o = e => !e || (!0 !== e.isTrusted && !1 !== e.isTrusted || e.isTrusted)
})), o.register("1djzF", (function(e, r) {
    t(e.exports, "getCloudinaryUrl", (function() {
        return o
    }));
    const o = e => {
            const t = n(e);
            return t ? e.includes("/video/upload") ? `https://${a}/video/upload/${t}` : `https://${a}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        n = e => {
            if (!c.some((t => e.includes(t)))) return null;
            if (e.includes(i) && !e.includes(`/${s}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const r = t[t.length - 2],
                o = t[t.length - 1];
            return r && o && r.startsWith("v") ? `${r}/${o}` : null
        },
        a = "media.gimkit.com",
        i = "res.cloudinary.com",
        s = "gimkit-production",
        c = [a, i]
})), o.register("6gxPk", (function(e, r) {
    t(e.exports, "default", (function() {
        return d
    }));
    var n = o("dnh3u"),
        a = o("fywoC"),
        i = o("5D7Fe"),
        s = o("dwKuN"),
        c = function(e, t) {
            return a.createElement(s.default, (0, n.default)((0, n.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    c.displayName = "DownOutlined";
    var d = a.forwardRef(c)
})), o.register("5D7Fe", (function(e, r) {
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
                    d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                }
            }]
        },
        name: "down",
        theme: "outlined"
    }
})), o.register("fgoFz", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var n = o("hxEiv"),
        a = o("fywoC");
    const i = a.lazy((() => o("h3n1W")));
    var s = e => (0, n.jsx)(a.Suspense, {
        fallback: e.fallback || null,
        children: (0, n.jsx)(i, {
            latex: e.latex
        })
    })
})), o.register("h3n1W", (function(e, t) {
    e.exports = Promise.all([import("./" + o("ihc6Q").resolve("8pe9D")), import("./" + o("ihc6Q").resolve("5OCdz"))]).then((() => o("9YSp3")))
})), o.register("2FIWZ", (function(e, r) {
    t(e.exports, "useMotionValue", (function() {
        return c
    }));
    var n = o("fywoC"),
        a = o("ajNLe"),
        i = o("lLAX0"),
        s = o("8ATQJ");

    function c(e) {
        const t = (0, s.useConstant)((() => (0, a.motionValue)(e))),
            {
                isStatic: r
            } = (0, n.useContext)(i.MotionConfigContext);
        if (r) {
            const [, r] = (0, n.useState)(e);
            (0, n.useEffect)((() => t.on("change", r)), [])
        }
        return t
    }
}));