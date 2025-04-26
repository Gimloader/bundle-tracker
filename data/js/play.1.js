function a(a) {
    Object.defineProperty(a, '__esModule', {
        value: !0,
        configurable: !0
    });
}

function b(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}

function c(a) {
    return a && a.__esModule ? a.default : a;
}
var d = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
d.register('xFLRJ', function(c, e) {
    a(c.exports), b(c.exports, 'default', function() {
        return g;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('2IsX9');
    var g = a => (0, e.jsx)(e.Fragment, {
        children: (0, e.jsx)(f.default, {
            ...a
        })
    });
}), d.register('2IsX9', function(a, c) {
    b(a.exports, 'default', function() {
        return e;
    });
    var e = d('FDG2R').default;
}), d.register('FDG2R', function(a, c) {
    b(a.exports, 'default', function() {
        return m;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('Vlfxs'),
        h = d('rlYg5'),
        i = d('Ob4Rg'),
        j = d('XthuH'),
        k = d('xxcnb'),
        l = d('YA33C');
    var m = a => (f.useEffect(() => {
        (0, i.startLoop)(), document.addEventListener('click', a => {
            (0, l.legitEvent)(a) || a.stopPropagation();
        });
    }, []), (0, e.jsx)(k.default.Provider, {
        value: h.default,
        children: (0, e.jsx)(g.Provider, {
            ...h.default,
            children: (0, e.jsx)(j.default, {
                ...a
            })
        })
    }));
}), d.register('rlYg5', function(a, c) {
    b(a.exports, 'default', function() {
        return v;
    });
    var e = d('ctXrw'),
        f = d('p8coZ'),
        g = d('dt4OP'),
        h = d('Qt3tk'),
        i = d('ZCFIC'),
        j = d('N/MWf'),
        k = d('zlZlL'),
        l = d('NkE+A'),
        m = d('7bsWJ'),
        n = d('Qm3Sw'),
        o = d('ttm6G'),
        p = d('bvO+a'),
        q = d('dpNxC'),
        r = d('hITC0'),
        s = d('TTKAH'),
        t = d('YqceC'),
        u = d('R6vGy');
    var v = {
        gameValues: new(0, j.default)(),
        gameOptions: new(0, i.default)(),
        user: new(0, r.default)(),
        questions: new(0, m.default)(),
        powerups: new(0, l.default)(),
        balance: new(0, e.default)(),
        engine: new(0, f.default)(),
        theme: new(0, n.default)(),
        navigation: new(0, k.default)(),
        upgrades: new(0, q.default)(),
        translations: new(0, o.default)(),
        entities: new(0, g.default)(),
        ui: new(0, p.default)(),
        events: new(0, h.default)(),
        imposter: new(0, s.default)(),
        draw: new(0, t.default)(),
        pardy: new(0, u.default)()
    };
}), d.register('ctXrw', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            this.balance = 0, this.maxBalance = 0, this.balanceChangeIfCorrect = 1, this.balanceChangeIfIncorrect = -1, this.incomeMultiplier = 1, this.streakAmount = 0, this.customColor = '', (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'balance', void 0), (0, e.__decorate)([f.observable], g.prototype, 'maxBalance', void 0), (0, e.__decorate)([f.observable], g.prototype, 'balanceChangeIfCorrect', void 0), (0, e.__decorate)([f.observable], g.prototype, 'balanceChangeIfIncorrect', void 0), (0, e.__decorate)([f.observable], g.prototype, 'incomeMultiplier', void 0), (0, e.__decorate)([f.observable], g.prototype, 'streakAmount', void 0), (0, e.__decorate)([f.observable], g.prototype, 'customColor', void 0);
    var h = i;
}), d.register('p8coZ', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            this.game = null, this.client = null, this.findingServerForGame = !1, this.errorFindingServerForGame = !1, this.attemptingToConnect = !1, this.hasConnected = !1, this.connected = !1, this.connectionError = !1, this.hasLeftRoom = !1, this.hasJoinedRoom = !1, this.joinedRoom = !1, this.attemptingToJoinRoom = !1, this.errorJoiningRoom = !1, this.roomError = null, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'game', void 0), (0, e.__decorate)([f.observable], g.prototype, 'client', void 0), (0, e.__decorate)([f.observable], g.prototype, 'findingServerForGame', void 0), (0, e.__decorate)([f.observable], g.prototype, 'errorFindingServerForGame', void 0), (0, e.__decorate)([f.observable], g.prototype, 'attemptingToConnect', void 0), (0, e.__decorate)([f.observable], g.prototype, 'hasConnected', void 0), (0, e.__decorate)([f.observable], g.prototype, 'connected', void 0), (0, e.__decorate)([f.observable], g.prototype, 'connectionError', void 0), (0, e.__decorate)([f.observable], g.prototype, 'hasLeftRoom', void 0), (0, e.__decorate)([f.observable], g.prototype, 'hasJoinedRoom', void 0), (0, e.__decorate)([f.observable], g.prototype, 'joinedRoom', void 0), (0, e.__decorate)([f.observable], g.prototype, 'attemptingToJoinRoom', void 0), (0, e.__decorate)([f.observable], g.prototype, 'errorJoiningRoom', void 0), (0, e.__decorate)([f.observable], g.prototype, 'roomError', void 0);
    var h = i;
}), d.register('dt4OP', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            this.defendingHomebase = null, this.lava = null, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'defendingHomebase', void 0), (0, e.__decorate)([f.observable], g.prototype, 'lava', void 0);
    var h = i;
}), d.register('Qt3tk', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = class {};
}), d.register('ZCFIC', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('6gioo'),
        f = d('UnUp5'),
        g = d('PDLD/2');
    class h {
        get formattedGameOptions() {
            return (0, f.toJS)(this);
        }
        constructor() {
            this.type = g.GameType.live, this.goal = {
                type: g.GameGoal.time,
                value: 10
            }, this.specialGameType = f.observable.array(), this.group = '', this.currency = '$', this.language = 'en', this.startingCash = 0, this.handicap = -50, this.clapping = !0, this.powerups = !0, this.themes = !0, this.cleanPowerupsOnly = !1, this.allowGoogleTranslate = !1, this.enablePowerupRNGAnimation = !1, this.music = !0, this.modeOptions = {}, this.setGameOptions = a => {
                Object.keys(a).forEach(b => {
                    null !== this[b] && ('specialGameType' === b ? this.specialGameType.replace(a.specialGameType) : this[b] = a[b]);
                });
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], h.prototype, 'type', void 0), (0, e.__decorate)([f.observable], h.prototype, 'goal', void 0), (0, e.__decorate)([f.observable], h.prototype, 'specialGameType', void 0), (0, e.__decorate)([f.observable], h.prototype, 'group', void 0), (0, e.__decorate)([f.observable], h.prototype, 'currency', void 0), (0, e.__decorate)([f.observable], h.prototype, 'language', void 0), (0, e.__decorate)([f.observable], h.prototype, 'startingCash', void 0), (0, e.__decorate)([f.observable], h.prototype, 'handicap', void 0), (0, e.__decorate)([f.observable], h.prototype, 'clapping', void 0), (0, e.__decorate)([f.observable], h.prototype, 'powerups', void 0), (0, e.__decorate)([f.observable], h.prototype, 'themes', void 0), (0, e.__decorate)([f.observable], h.prototype, 'cleanPowerupsOnly', void 0), (0, e.__decorate)([f.observable], h.prototype, 'allowGoogleTranslate', void 0), (0, e.__decorate)([f.observable], h.prototype, 'enablePowerupRNGAnimation', void 0), (0, e.__decorate)([f.observable], h.prototype, 'music', void 0), (0, e.__decorate)([f.observable], h.prototype, 'modeOptions', void 0), (0, e.__decorate)([f.action.bound], h.prototype, 'setGameOptions', void 0), (0, e.__decorate)([f.computed], h.prototype, 'formattedGameOptions', null);
    var i = j;
}), d.register('N/MWf', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            this.connected = !1, this.connectionError = !1, this.gameStatus = null, this.gameCode = null, this.players = f.observable.array(), this.teams = f.observable.array(), this.nonDismissMessage = {
                message: '',
                title: '',
                link: '',
                buttonText: ''
            }, this.thanosValues = null, this.news = f.observable.array([]), (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'connected', void 0), (0, e.__decorate)([f.observable], g.prototype, 'connectionError', void 0), (0, e.__decorate)([f.observable], g.prototype, 'gameStatus', void 0), (0, e.__decorate)([f.observable], g.prototype, 'gameCode', void 0), (0, e.__decorate)([f.observable], g.prototype, 'players', void 0), (0, e.__decorate)([f.observable], g.prototype, 'teams', void 0), (0, e.__decorate)([f.observable], g.prototype, 'nonDismissMessage', void 0), (0, e.__decorate)([f.observable], g.prototype, 'thanosValues', void 0), (0, e.__decorate)([f.observable], g.prototype, 'defendingHomebaseResults', void 0), (0, e.__decorate)([f.observable], g.prototype, 'news', void 0);
    var h = i;
}), d.register('zlZlL', function(a, c) {
    b(a.exports, 'ShopTab', function() {
        return h;
    }), b(a.exports, 'default', function() {
        return k;
    });
    var e = d('6gioo'),
        f = d('M8YtH'),
        g = d('UnUp5');
    let h;
    var i;
    (i = h || (h = {})).lava = 'lava', i.defendingHomebase = 'defendingHomebase', i.upgrades = 'upgrades', i.powerups = 'powerups', i.themes = 'themes', i.powerupsNonMusic = 'powerupsNonMusic', i.powerupsMusic = 'powerupsMusic';
    class j {
        changeRoute(a) {
            this.currentRoute = a;
        }
        constructor() {
            this.currentRoute = f.default.join, this.canChangeRoute = !0, this.drawerOpen = !1, this.settingsOpen = !1, this.leaderboardDrawerOpen = !1, this.currentShopTab = h.upgrades, this.powerupRNGAnimationDone = !1, this.visitedPowerupSection = !1, this.attackModal = {
                open: !1,
                powerup: ''
            }, (0, g.makeObservable)(this);
        }
    }
    (0, e.__decorate)([g.observable], j.prototype, 'currentRoute', void 0), (0, e.__decorate)([g.observable], j.prototype, 'canChangeRoute', void 0), (0, e.__decorate)([g.observable], j.prototype, 'drawerOpen', void 0), (0, e.__decorate)([g.observable], j.prototype, 'settingsOpen', void 0), (0, e.__decorate)([g.observable], j.prototype, 'leaderboardDrawerOpen', void 0), (0, e.__decorate)([g.observable], j.prototype, 'currentShopTab', void 0), (0, e.__decorate)([g.observable], j.prototype, 'powerupRNGAnimationDone', void 0), (0, e.__decorate)([g.observable], j.prototype, 'visitedPowerupSection', void 0), (0, e.__decorate)([g.observable], j.prototype, 'attackModal', void 0), (0, e.__decorate)([g.action.bound], j.prototype, 'changeRoute', null);
    var k = l;
}), d.register('M8YtH', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    const e = '/play';
    var f = {
        base: e,
        join: e + '/join',
        waiting: e + '/waiting',
        gameOver: e + '/results',
        questions: e + '/questions',
        team: e + '/team',
        shop: e + '/shop',
        upgrade: e + '/upgrade',
        nonDismissMessage: '/message',
        imposterMode: '/imposter-mode',
        drawMode: '/draw-mode',
        pardyMode: '/pardy-mode'
    };
}), d.register('NkE+A', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('6gioo'),
        f = d('4/f+U'),
        g = d('UnUp5');
    class h {
        get activePowerups() {
            return (0, f.uniq)(this.personalActivePowerups.concat(this.teamActivePowerups));
        }
        get appliedPowerups() {
            return (0, f.uniq)(this.personalAppliedPowerups.concat(this.teamAppliedPowerups));
        }
        constructor() {
            this.availablePowerups = g.observable.array(), this.disabledPowerups = g.observable.array(), this.purchasedPowerups = g.observable.array(), this.usedPowerups = g.observable.array(), this.personalActivePowerups = g.observable.array(), this.teamActivePowerups = g.observable.array(), this.personalAppliedPowerups = g.observable.array(), this.teamAppliedPowerups = g.observable.array(), this.hasShownHelperModal = !1, this.screenAttack = {
                powerupName: '',
                attackerName: '',
                fullScreen: !1
            }, this.linkPartnerName = '', (0, g.makeObservable)(this);
        }
    }
    (0, e.__decorate)([g.observable], h.prototype, 'availablePowerups', void 0), (0, e.__decorate)([g.observable], h.prototype, 'disabledPowerups', void 0), (0, e.__decorate)([g.observable], h.prototype, 'purchasedPowerups', void 0), (0, e.__decorate)([g.observable], h.prototype, 'usedPowerups', void 0), (0, e.__decorate)([g.observable], h.prototype, 'personalActivePowerups', void 0), (0, e.__decorate)([g.observable], h.prototype, 'teamActivePowerups', void 0), (0, e.__decorate)([g.observable], h.prototype, 'personalAppliedPowerups', void 0), (0, e.__decorate)([g.observable], h.prototype, 'teamAppliedPowerups', void 0), (0, e.__decorate)([g.computed], h.prototype, 'activePowerups', null), (0, e.__decorate)([g.computed], h.prototype, 'appliedPowerups', null), (0, e.__decorate)([g.observable], h.prototype, 'hasShownHelperModal', void 0), (0, e.__decorate)([g.observable], h.prototype, 'screenAttack', void 0), (0, e.__decorate)([g.observable], h.prototype, 'linkPartnerName', void 0);
    var i = j;
}), d.register('7bsWJ', function(a, c) {
    b(a.exports, 'default', function() {
        return m;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('lf3yz'),
        h = d('4/f+U'),
        i = d('UnUp5'),
        j = d('jh162'),
        k = d('fHPMn');
    class l {
        constructor() {
            (0, e.default)(this, 'eqt', ''), (0, e.default)(this, 'questionsAnsweredCorrectly', 0), (0, e.default)(this, 'questionsAnsweredIncorrectly', 0), this.ceq = null, this.currentQuestionIndex = 0, this.questionList = i.observable.array(), this.lastQuestion = '', this.canAnswerQuestion = !0, this.lockedViewingCorrectAnswer = !1, this.lastQuestionAnsweredTimestamp = 0, this.currentQuestionLoaded = !1, this.transitioningToNextQuestion = !1, this.setQuestions = a => {
                this.eqt = (0, j.EncryptData)(a, 'questions');
            }, this.nextQuestion = () => {
                this.setCurrentQuestion(this.currentQuestionIndex + 1);
            }, this.setCurrentQuestion = a => {
                const m = (0, g.questionLocation)();
                if (!m || !m.length)
                    return;
                const n = this.questionList.length;
                this.currentQuestionIndex = a >= n ? 0 : a;
                const o = m.find(a => a._id === this.questionList[this.currentQuestionIndex]);
                o && (this.ceq = (0, j.EncryptData)({
                    ...o,
                    answers: (0, h.shuffle)(o.answers)
                }, o._id), this.currentQuestionLoaded = !0);
            }, this.questionAnswered = (a, b) => {
                this.lastQuestionAnsweredTimestamp = Date.now() / 1000, this.lastQuestionCorrect = a, this.lastQuestion = b, this.canAnswerQuestion = !1, setTimeout(() => {
                    this.canAnswerQuestion = !0;
                }, k.CSS_TRANSITION_TIMEOUT);
            }, (0, i.makeObservable)(this);
        }
    }
    (0, f.__decorate)([i.observable], l.prototype, 'ceq', void 0), (0, f.__decorate)([i.observable], l.prototype, 'currentQuestionIndex', void 0), (0, f.__decorate)([i.observable], l.prototype, 'questionList', void 0), (0, f.__decorate)([i.observable], l.prototype, 'lastQuestion', void 0), (0, f.__decorate)([i.observable], l.prototype, 'lastQuestionCorrect', void 0), (0, f.__decorate)([i.observable], l.prototype, 'canAnswerQuestion', void 0), (0, f.__decorate)([i.observable], l.prototype, 'lockedViewingCorrectAnswer', void 0), (0, f.__decorate)([i.observable], l.prototype, 'lastQuestionAnsweredTimestamp', void 0), (0, f.__decorate)([i.observable], l.prototype, 'currentQuestionLoaded', void 0), (0, f.__decorate)([i.observable], l.prototype, 'transitioningToNextQuestion', void 0), (0, f.__decorate)([i.action.bound], l.prototype, 'setQuestions', void 0), (0, f.__decorate)([i.action.bound], l.prototype, 'nextQuestion', void 0), (0, f.__decorate)([i.action.bound], l.prototype, 'setCurrentQuestion', void 0), (0, f.__decorate)([i.action.bound], l.prototype, 'questionAnswered', void 0);
    var m = n;
}), d.register('lf3yz', function(a, c) {
    b(a.exports, 'questionAnswered', function() {
        return t;
    }), b(a.exports, 'send', function() {
        return U;
    }), b(a.exports, 'plural', function() {
        return u;
    }), b(a.exports, 'numberWithCommas', function() {
        return v;
    }), b(a.exports, 'getMoney', function() {
        return w;
    }), b(a.exports, 'inDrawMode', function() {
        return _;
    }), b(a.exports, 'toggleDrawer', function() {
        return x;
    }), b(a.exports, 'purchaseTheme', function() {
        return y;
    }), b(a.exports, 'upgradeNameToKey', function() {
        return z;
    }), b(a.exports, 'toast', function() {
        return A;
    }), b(a.exports, 'capitalizeFirstLetter', function() {
        return B;
    }), b(a.exports, 'getTeamName', function() {
        return C;
    }), b(a.exports, 'teamPlayerNames', function() {
        return D;
    }), b(a.exports, 'getTeamColor', function() {
        return E;
    }), b(a.exports, 'getTeamIcon', function() {
        return F;
    }), b(a.exports, 'inTeamMode', function() {
        return G;
    }), b(a.exports, 'attack', function() {
        return H;
    }), b(a.exports, 'getPowerupDescription', function() {
        return I;
    }), b(a.exports, 'questionLocation', function() {
        return J;
    }), b(a.exports, 'inPardyMode', function() {
        return bb;
    }), b(a.exports, 'blockShopping', function() {
        return K;
    }), b(a.exports, 'getAssetPath', function() {
        return L;
    }), b(a.exports, 'getPowerupName', function() {
        return M;
    }), b(a.exports, 'getUpgradeCost', function() {
        return N;
    }), b(a.exports, 'startGame', function() {
        return O;
    }), b(a.exports, 'inImposterMode', function() {
        return $;
    }), b(a.exports, 'changeRoute', function() {
        return P;
    }), b(a.exports, 'inZombiesVsHumansMode', function() {
        return cb;
    }), b(a.exports, 'requestDefendingHomebase', function() {
        return Q;
    }), b(a.exports, 'defendingHomebaseResultsInfo', function() {
        return R;
    }), b(a.exports, 'listenForLeave', function() {
        return S;
    }), b(a.exports, 'nonDismissMessage', function() {
        return T;
    }), b(a.exports, 'inThanosMode', function() {
        return V;
    }), b(a.exports, 'inQrScanMode', function() {
        return W;
    }), b(a.exports, 'inBossBattleMode', function() {
        return X;
    }), b(a.exports, 'inHiddenMode', function() {
        return Y;
    }), b(a.exports, 'inLavaMode', function() {
        return Z;
    }), b(a.exports, 'inComebackMode', function() {
        return ab;
    }), b(a.exports, 'shopName', function() {
        return eb;
    }), b(a.exports, 'mainFontName', function() {
        return fb;
    });
    d('qLBdK');
    var e = d('VWmG7'),
        f = d('VCvua0'),
        g = d('bAH0K'),
        h = d('UNaEe'),
        i = d('3kESF'),
        j = d('rlYg5'),
        k = d('PDLD/2'),
        l = d('cJ4UC'),
        m = d('M8YtH'),
        n = d('xGUNo'),
        o = d('qA0vg'),
        p = d('0wOVz'),
        q = d('jh162'),
        r = d('fHPMn'),
        s = d('PjB0f');
    const t = a => {
            if (!j.default.questions.canAnswerQuestion)
                return !1;
            const u = j.default.questions.ceq ? (0, q.DecryptData)(j.default.questions.ceq) : null;
            let v = !1;
            if (u) {
                const w = u.answers.filter(a => a.correct);
                u.type === k.QuestionType.textInput && w.map(a => db(a.text)).includes(db(a)) && (v = !0), u.type === k.QuestionType.multipleChoice && w.map(a => a._id).includes(a) && (v = !0), j.default.questions.questionAnswered(v, u._id), U(l.default.questionAnswered, {
                    questionId: u._id,
                    answer: a
                }), j.default.questions.transitioningToNextQuestion = !0;
            }
            return v;
        },
        u = (a, b, c) => 1 === b ? a : c || a + 's',
        v = a => a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        w = a => {
            if (_()) {
                const x = Math.round(a);
                return `${ v(x) } ${ u('point', x) }`;
            }
            return (a < 0 ? '-' : '') + j.default.gameOptions.currency + v(Math.round(Math.abs(a)));
        },
        x = (a, b) => {
            b || h.woosh.play(), j.default.navigation.drawerOpen = a, 1 == a && (j.default.navigation.settingsOpen = !1);
        },
        y = a => {
            U(l.default.themePurchased, a);
        },
        z = a => a === g.upgradeNames.moneyPerQuestion ? 'moneyPerQuestion' : a === g.upgradeNames.streakBonus ? 'streakBonus' : a === g.upgradeNames.multiplier ? 'multiplier' : 'insurance',
        A = (a, b) => {
            const {
                type: B,
                blockSound: C
            } = D;
            C || ('error' === B ? h.error.play() : 'success' === B ? h.success.play() : h.alert.play()), e.toast[B || 'info'](a, {
                position: e.toast.POSITION.TOP_RIGHT,
                autoClose: 200 * a.length + 1000
            });
        },
        B = a => a ? a.charAt(0).toUpperCase() + a.slice(1) : '',
        C = a => B(a),
        D = a => {
            let E = '';
            return a.forEach((c, d) => {
                E += c, d + 1 !== a.length && (E += ', ');
            }), E;
        },
        E = a => {
            let F = null;
            return F = a ? j.default.gameValues.teams.find(F => F.id === a) : j.default.user.team, F && F.color ? F.color.background : f.default.White;
        },
        F = a => {
            let G = null;
            return G = a ? j.default.gameValues.teams.find(G => G.id === a) : j.default.user.team, G && G.icon ? G.icon : null;
        },
        G = () => [
            p.TEAMS,
            p.HUMAN_ZOMBIE_DEFENDING_HOMEBASE,
            p.BOSS_BATTLE
        ].includes(j.default.gameOptions.specialGameType[0]),
        H = (a, b) => {
            const I = j.default.navigation.attackModal;
            U(l.default.powerupAttack, {
                name: I.powerup,
                target: a
            });
        },
        I = a => a.replace('#', G() ? 'team' : 'player'),
        J = () => j.default.questions.eqt ? (0, q.DecryptData)(j.default.questions.eqt) : [],
        K = () => bb();

    function L(a) {
        return '/assets/play/' + a;
    }
    const M = a => a.displayName ? a.displayName : a.name,
        N = a => a * j.default.upgrades.upgradePricingDiscount,
        O = () => {
            let P = m.default.questions;
            bb() && (P = m.default.pardyMode), $() && (0, s.loadFont)('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'), _() && (0, s.loadFont)('https://fonts.googleapis.com/css2?family=Pangolin&display=swap'), P(P), cb() && Q();
        },
        P = a => {
            j.default.navigation.currentRoute !== a && (j.default.navigation.canChangeRoute ? j.default.navigation.currentRoute !== m.default.nonDismissMessage && (a === m.default.questions && bb() || a === m.default.shop && K() || j.default.navigation.changeRoute(a)) : setTimeout(() => P(a), r.CSS_TRANSITION_TIMEOUT));
        },
        Q = () => U(l.default.requestPlayerDefendingHomebase),
        R = () => {
            let S = !1;
            const T = j.default.gameValues.defendingHomebaseResults;
            return T && T.winner && T.winner.linked && j.default.user.team.id === T.winner.linked && (S = !0), {
                won: S,
                text: S ? 'You Won!' : '\uD83D\uDE25'
            };
        },
        S = () => {
            window.onbeforeunload = () => {
                const T = j.default.navigation.currentRoute;
                return !![
                    m.default.waiting,
                    m.default.questions,
                    m.default.shop,
                    m.default.upgrade,
                    m.default.team
                ].includes(T) || null;
            };
        },
        T = (a, b) => {
            j.default.gameValues.nonDismissMessage.title = b, j.default.gameValues.nonDismissMessage.message = a, P(m.default.nonDismissMessage);
        },
        U = (a, b) => {
            const V = j.default.engine.game;
            V && V.send(a, b);
        },
        V = () => j.default.gameOptions.specialGameType.includes(i.THANOS),
        W = () => j.default.gameOptions.specialGameType.includes(i.SHOP_QR_SCAN),
        X = () => j.default.gameOptions.specialGameType.includes(p.BOSS_BATTLE),
        Y = () => j.default.gameOptions.specialGameType.includes(i.HIDDEN),
        Z = () => j.default.gameOptions.specialGameType.includes(i.LAVA),
        $ = () => j.default.gameOptions.specialGameType.includes(i.IMPOSTER),
        _ = () => j.default.gameOptions.specialGameType.includes(i.DRAW),
        ab = () => j.default.gameOptions.specialGameType.includes(i.COMEBACK),
        bb = () => j.default.gameOptions.specialGameType.includes(i.PARDY),
        cb = () => j.default.gameOptions.specialGameType.includes(p.HUMAN_ZOMBIE_DEFENDING_HOMEBASE),
        db = a => {
            let eb = a.trim();
            return eb = eb.replace(/[\u2018\u2019]/g, '\'').replace(/[\u201C\u201D]/g, '"'), eb = eb.toLowerCase(), eb;
        },
        eb = () => $() ? 'Mission Control' : 'Shop',
        fb = () => _() ? n.DRAW_MODE_FONT : o.default.mainFontName;
}), d.register('VWmG7', function(a, c) {
    var e, f;
    b(a.exports, 'ToastContainer', function() {
        return e;
    }, function(a) {
        return e = a;
    }), b(a.exports, 'toast', function() {
        return f;
    }, function(a) {
        return f = a;
    });
    var g = k(d('DcMbz'));
    e = g.default;
    var h = d('JgLpl');
    h.Bounce, h.Slide, h.Zoom, h.Flip;
    var i = d('euPKG');
    i.POSITION, i.TYPE;
    var j = k(d('Hb/EM'));

    function k(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    f = j.default, k(d('ubrZH')).default;
}), d.register('DcMbz', function(c, A) {
    var e, f;
    a(c.exports), b(c.exports, '__esModule', function() {
        return e;
    }, function(a) {
        return e = a;
    }), b(c.exports, 'default', function() {
        return f;
    }, function(a) {
        return f = a;
    }), e = !0, f = void 0;
    var g = function(a) {
            if (a && a.__esModule)
                return a;
            var h = {};
            if (null != a)
                for (var i in a)
                    if (Object.prototype.hasOwnProperty.call(a, i)) {
                        var j = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(a, i) : {};
                        j.get || j.set ? Object.defineProperty(h, i, j) : h[i] = a[i];
                    }
            return h.default = a, h;
        }(d('uPP4W')),
        h = q(d('uj3CK')),
        i = q(d('VAIs1')),
        j = q(d('qqaPE')),
        k = q(d('qVu9a')),
        l = q(d('gHXnt')),
        m = d('JgLpl'),
        n = d('euPKG'),
        o = q(d('iO67A')),
        p = d('z+8gD');

    function q(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }

    function r(a) {
        return function(a) {
            if (Array.isArray(a)) {
                for (var s = 0, t = new Array(a.length); s < a.length; s++)
                    t[s] = a[s];
                return t;
            }
        }(a) || function(a) {
            if (Symbol.iterator in Object(a) || '[object Arguments]' === Object.prototype.toString.call(a))
                return Array.from(a);
        }(a) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
        }();
    }

    function s() {
        return s = Object.assign || function(a) {
            for (var t = 1; t < n.length; t++) {
                var u = n[t];
                for (var v in u)
                    Object.prototype.hasOwnProperty.call(u, v) && (a[v] = u[v]);
            }
            return a;
        }, s.apply(this, n);
    }
    var t = function(a) {
        var u, v;

        function w() {
            for (var x, y = n.length, z = new Array(y), A = 0; A < y; A++)
                z[A] = n[A];
            return (x = a.call.apply(a, [this].concat(z)) || this).state = {
                toast: []
            }, x.toastKey = 1, x.collection = {}, x.isToastActive = function(a) {
                return -1 !== x.state.toast.indexOf(a);
            }, x;
        }
        v = a, (u = w).prototype = Object.create(v.prototype), u.prototype.constructor = u, u.__proto__ = v;
        var x = w.prototype;
        return x.componentDidMount = function() {
            var y = this;
            o.default.on(n.ACTION.SHOW, function(u, v) {
                return y.show(u, v);
            }).on(n.ACTION.CLEAR, function(u) {
                return u ? y.removeToast(u) : y.clear();
            }).emit(n.ACTION.DID_MOUNT, this);
        }, x.componentWillUnmount = function() {
            o.default.off(n.ACTION.SHOW).off(n.ACTION.CLEAR).emit(n.ACTION.WILL_UNMOUNT);
        }, x.removeToast = function(a) {
            this.setState({
                toast: this.state.toast.filter(function(u) {
                    return u !== a;
                })
            }, this.dispatchChange);
        }, x.dispatchChange = function() {
            o.default.emit(n.ACTION.ON_CHANGE, this.state.toast.length);
        }, x.makeCloseButton = function(a, u, v) {
            var y = this,
                z = this.props.closeButton;
            return ((0, g.isValidElement)(a) || !1 === a) && (z = a), !1 !== z && (0, g.cloneElement)(z, {
                closeToast: function() {
                    return y.removeToast(u);
                },
                type: v
            });
        }, x.getAutoCloseDelay = function(a) {
            return !1 === a || (0, p.isValidDelay)(a) ? a : this.props.autoClose;
        }, x.canBeRendered = function(a) {
            return (0, g.isValidElement)(a) || 'string' == typeof a || 'number' == typeof a || 'function' == typeof a;
        }, x.parseClassName = function(a) {
            return 'string' == typeof a ? a : null !== a && 'object' == typeof a && 'toString' in a ? a.toString() : null;
        }, x.show = function(a, u) {
            var y, z = this;
            if (!this.canBeRendered(a))
                throw new Error('The element you provided cannot be rendered. You provided an element of type ' + typeof a);
            var A = u.toastId,
                B = function() {
                    return z.removeToast(A);
                },
                C = {
                    id: A,
                    key: u.key || this.toastKey++,
                    type: u.type,
                    closeToast: B,
                    updateId: u.updateId,
                    rtl: this.props.rtl,
                    position: u.position || this.props.position,
                    transition: u.transition || this.props.transition,
                    className: this.parseClassName(u.className || this.props.toastClassName),
                    bodyClassName: this.parseClassName(u.bodyClassName || this.props.bodyClassName),
                    closeButton: this.makeCloseButton(u.closeButton, A, u.type),
                    pauseOnHover: 'boolean' == typeof u.pauseOnHover ? u.pauseOnHover : this.props.pauseOnHover,
                    pauseOnFocusLoss: 'boolean' == typeof u.pauseOnFocusLoss ? u.pauseOnFocusLoss : this.props.pauseOnFocusLoss,
                    draggable: 'boolean' == typeof u.draggable ? u.draggable : this.props.draggable,
                    draggablePercent: 'number' != typeof u.draggablePercent || isNaN(u.draggablePercent) ? this.props.draggablePercent : u.draggablePercent,
                    closeOnClick: 'boolean' == typeof u.closeOnClick ? u.closeOnClick : this.props.closeOnClick,
                    progressClassName: this.parseClassName(u.progressClassName || this.props.progressClassName),
                    progressStyle: this.props.progressStyle,
                    autoClose: this.getAutoCloseDelay(u.autoClose),
                    hideProgressBar: 'boolean' == typeof u.hideProgressBar ? u.hideProgressBar : this.props.hideProgressBar,
                    progress: parseFloat(u.progress),
                    isProgressDone: u.isProgressDone
                };
            'function' == typeof u.onOpen && (C.onOpen = u.onOpen), 'function' == typeof u.onClose && (C.onClose = u.onClose), (0, g.isValidElement)(a) && 'string' != typeof a.type && 'number' != typeof a.type ? a = (0, g.cloneElement)(a, {
                closeToast: B
            }) : 'function' == typeof a && (a = a({
                closeToast: B
            })), this.collection = s({}, this.collection, ((y = {})[A] = {
                position: C.position,
                options: C,
                content: a
            }, y)), this.setState({
                toast: (C.updateId ? r(this.state.toast) : r(this.state.toast).concat([A])).filter(function(a) {
                    return a !== u.staleToastId;
                })
            }, this.dispatchChange);
        }, x.makeToast = function(a, u) {
            return g.default.createElement(k.default, s({}, u, {
                isDocumentHidden: this.state.isDocumentHidden,
                key: 'toast-' + u.key
            }), a);
        }, x.clear = function() {
            this.setState({
                toast: []
            });
        }, x.renderToast = function() {
            var y = this,
                z = {},
                A = this.props,
                B = A.className,
                C = A.style;
            return (A.newestOnTop ? Object.keys(this.collection).reverse() : Object.keys(this.collection)).forEach(function(A) {
                var D = y.collection[A],
                    E = D.position,
                    F = D.options,
                    G = D.content;
                z[E] || (z[E] = []), -1 !== y.state.toast.indexOf(F.id) ? z[E].push(y.makeToast(G, F)) : (z[E].push(null), delete y.collection[A]);
            }), Object.keys(z).map(function(A) {
                var D = 1 === z[A].length && null === z[A][0],
                    E = {
                        className: (0, i.default)('Toastify__toast-container', 'Toastify__toast-container--' + A, {
                            'Toastify__toast-container--rtl': y.props.rtl
                        }, y.parseClassName(B)),
                        style: D ? s({}, C, {
                            pointerEvents: 'none'
                        }) : s({}, C)
                    };
                return g.default.createElement(j.default, s({}, E, {
                    key: 'container-' + A
                }), z[A]);
            });
        }, x.render = function() {
            return g.default.createElement('div', {
                className: 'Toastify'
            }, this.renderToast());
        }, w;
    }(g.Component);
    t.propTypes = {
        position: h.default.oneOf((0, p.objectValues)(n.POSITION)),
        autoClose: p.falseOrDelay,
        closeButton: p.falseOrElement,
        hideProgressBar: h.default.bool,
        pauseOnHover: h.default.bool,
        closeOnClick: h.default.bool,
        newestOnTop: h.default.bool,
        className: h.default.oneOfType([
            h.default.string,
            h.default.object
        ]),
        style: h.default.object,
        toastClassName: h.default.oneOfType([
            h.default.string,
            h.default.object
        ]),
        bodyClassName: h.default.oneOfType([
            h.default.string,
            h.default.object
        ]),
        progressClassName: h.default.oneOfType([
            h.default.string,
            h.default.object
        ]),
        progressStyle: h.default.object,
        transition: h.default.func,
        rtl: h.default.bool,
        draggable: h.default.bool,
        draggablePercent: h.default.number,
        pauseOnFocusLoss: h.default.bool
    }, t.defaultProps = {
        position: n.POSITION.TOP_RIGHT,
        transition: m.Bounce,
        rtl: !1,
        autoClose: 5000,
        hideProgressBar: !1,
        closeButton: g.default.createElement(l.default, null),
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
    }, f = t;
}), d.register('qVu9a', function(c, y) {
    var e, f;
    a(c.exports), b(c.exports, '__esModule', function() {
        return e;
    }, function(a) {
        return e = a;
    }), b(c.exports, 'default', function() {
        return f;
    }, function(a) {
        return f = a;
    }), e = !0, f = void 0;
    var g = function(a) {
            if (a && a.__esModule)
                return a;
            var h = {};
            if (null != a)
                for (var i in a)
                    if (Object.prototype.hasOwnProperty.call(a, i)) {
                        var j = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(a, i) : {};
                        j.get || j.set ? Object.defineProperty(h, i, j) : h[i] = a[i];
                    }
            return h.default = a, h;
        }(d('uPP4W')),
        h = m(d('uj3CK')),
        i = m(d('VAIs1')),
        j = m(d('epiy7')),
        k = d('euPKG'),
        l = d('z+8gD');

    function m(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }

    function n() {
        return n = Object.assign || function(a) {
            for (var o = 1; o < n.length; o++) {
                var p = n[o];
                for (var q in p)
                    Object.prototype.hasOwnProperty.call(p, q) && (a[q] = p[q]);
            }
            return a;
        }, n.apply(this, n);
    }

    function o(a) {
        return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientX : a.clientX;
    }

    function p(a) {
        return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientY : a.clientY;
    }
    var q = function() {},
        r = function(a) {
            var s, t;

            function u() {
                for (var v, w = n.length, x = new Array(w), y = 0; y < w; y++)
                    x[y] = n[y];
                return (v = a.call.apply(a, [this].concat(x)) || this).state = {
                    isRunning: !0,
                    preventExitTransition: !1
                }, v.flag = {
                    canCloseOnClick: !0,
                    canDrag: !1
                }, v.drag = {
                    start: 0,
                    x: 0,
                    y: 0,
                    deltaX: 0,
                    removalDistance: 0
                }, v.ref = null, v.pauseToast = function() {
                    v.props.autoClose && v.setState({
                        isRunning: !1
                    });
                }, v.playToast = function() {
                    v.props.autoClose && v.setState({
                        isRunning: !0
                    });
                }, v.onDragStart = function(a) {
                    v.flag.canCloseOnClick = !0, v.flag.canDrag = !0, v.ref.style.transition = '', v.drag.start = v.drag.x = o(a.nativeEvent), v.drag.removalDistance = v.ref.offsetWidth * (v.props.draggablePercent / 100);
                }, v.onDragMove = function(a) {
                    v.flag.canDrag && (v.state.isRunning && v.pauseToast(), v.drag.x = o(a), v.drag.deltaX = v.drag.x - v.drag.start, v.drag.start !== v.drag.x && (v.flag.canCloseOnClick = !1), v.ref.style.transform = 'translateX(' + v.drag.deltaX + 'px)', v.ref.style.opacity = 1 - Math.abs(v.drag.deltaX / v.drag.removalDistance));
                }, v.onDragEnd = function(a) {
                    if (v.flag.canDrag) {
                        if (v.flag.canDrag = !1, Math.abs(v.drag.deltaX) > v.drag.removalDistance)
                            return void v.setState({
                                preventExitTransition: !0
                            }, v.props.closeToast);
                        v.drag.y = p(a), v.ref.style.transition = 'transform 0.2s, opacity 0.2s', v.ref.style.transform = 'translateX(0)', v.ref.style.opacity = 1;
                    }
                }, v.onDragTransitionEnd = function() {
                    var z = v.ref.getBoundingClientRect(),
                        A = z.top,
                        B = z.bottom,
                        C = z.left,
                        D = z.right;
                    v.props.pauseOnHover && v.drag.x >= C && v.drag.x <= D && v.drag.y >= A && v.drag.y <= B ? v.pauseToast() : v.playToast();
                }, v;
            }
            t = a, (s = u).prototype = Object.create(t.prototype), s.prototype.constructor = s, s.__proto__ = t;
            var v = u.prototype;
            return v.componentDidMount = function() {
                this.props.onOpen(this.props.children.props), this.props.draggable && this.bindDragEvents(), this.props.pauseOnFocusLoss && this.bindFocusEvents();
            }, v.componentDidUpdate = function(a) {
                a.draggable !== this.props.draggable && (this.props.draggable ? this.bindDragEvents() : this.unbindDragEvents()), a.pauseOnFocusLoss !== this.props.pauseOnFocusLoss && (this.props.pauseOnFocusLoss ? this.bindFocusEvents() : this.unbindFocusEvents());
            }, v.componentWillUnmount = function() {
                this.props.onClose(this.props.children.props), this.props.draggable && this.unbindDragEvents(), this.props.pauseOnFocusLoss && this.unbindFocusEvents();
            }, v.bindFocusEvents = function() {
                window.addEventListener('focus', this.playToast), window.addEventListener('blur', this.pauseToast);
            }, v.unbindFocusEvents = function() {
                window.removeEventListener('focus', this.playToast), window.removeEventListener('blur', this.pauseToast);
            }, v.bindDragEvents = function() {
                document.addEventListener('mousemove', this.onDragMove), document.addEventListener('mouseup', this.onDragEnd), document.addEventListener('touchmove', this.onDragMove), document.addEventListener('touchend', this.onDragEnd);
            }, v.unbindDragEvents = function() {
                document.removeEventListener('mousemove', this.onDragMove), document.removeEventListener('mouseup', this.onDragEnd), document.removeEventListener('touchmove', this.onDragMove), document.removeEventListener('touchend', this.onDragEnd);
            }, v.render = function() {
                var w = this,
                    x = this.props,
                    y = x.closeButton,
                    z = x.children,
                    A = x.autoClose,
                    B = x.pauseOnHover,
                    C = x.closeOnClick,
                    D = x.type,
                    E = x.hideProgressBar,
                    F = x.closeToast,
                    G = x.transition,
                    H = x.position,
                    I = x.onExited,
                    J = x.className,
                    K = x.bodyClassName,
                    L = x.progressClassName,
                    M = x.progressStyle,
                    N = x.updateId,
                    O = x.role,
                    P = x.progress,
                    Q = x.isProgressDone,
                    R = x.rtl,
                    S = {
                        className: (0, i.default)('Toastify__toast', 'Toastify__toast--' + D, {
                            'Toastify__toast--rtl': R
                        }, J)
                    };
                A && B && (S.onMouseEnter = this.pauseToast, S.onMouseLeave = this.playToast), C && (S.onClick = function() {
                    return w.flag.canCloseOnClick && F();
                });
                var T = parseFloat(P) === P;
                return g.default.createElement(G, {
                    in: this.props.in,
                    appear: !0,
                    unmountOnExit: !0,
                    onExited: I,
                    position: H,
                    preventExitTransition: this.state.preventExitTransition
                }, g.default.createElement('div', n({}, S, {
                    ref: function(x) {
                        return w.ref = x;
                    },
                    onMouseDown: this.onDragStart,
                    onTouchStart: this.onDragStart,
                    onTransitionEnd: this.onDragTransitionEnd
                }), g.default.createElement('div', n({}, this.props.in && {
                    role: O
                }, {
                    className: (0, i.default)('Toastify__toast-body', K)
                }), z), y && y, (A || T) && g.default.createElement(j.default, n({}, N && !T ? {
                    key: 'pb-' + N
                } : {}, {
                    rtl: R,
                    delay: A,
                    isRunning: this.state.isRunning,
                    closeToast: F,
                    hide: E,
                    type: D,
                    style: M,
                    className: L,
                    controlledProgress: T,
                    isProgressDone: Q,
                    progress: P
                }))));
            }, u;
        }(g.Component);
    r.propTypes = {
        closeButton: l.falseOrElement.isRequired,
        autoClose: l.falseOrDelay.isRequired,
        children: h.default.node.isRequired,
        closeToast: h.default.func.isRequired,
        position: h.default.oneOf((0, l.objectValues)(k.POSITION)).isRequired,
        pauseOnHover: h.default.bool.isRequired,
        pauseOnFocusLoss: h.default.bool.isRequired,
        closeOnClick: h.default.bool.isRequired,
        transition: h.default.func.isRequired,
        rtl: h.default.bool.isRequired,
        hideProgressBar: h.default.bool.isRequired,
        draggable: h.default.bool.isRequired,
        draggablePercent: h.default.number.isRequired,
        in: h.default.bool,
        onExited: h.default.func,
        onOpen: h.default.func,
        onClose: h.default.func,
        type: h.default.oneOf((0, l.objectValues)(k.TYPE)),
        className: h.default.oneOfType([
            h.default.string,
            h.default.object
        ]),
        bodyClassName: h.default.oneOfType([
            h.default.string,
            h.default.object
        ]),
        progressClassName: h.default.oneOfType([
            h.default.string,
            h.default.object
        ]),
        progressStyle: h.default.object,
        progress: h.default.number,
        isProgressDone: h.default.bool,
        updateId: h.default.oneOfType([
            h.default.string,
            h.default.number
        ]),
        ariaLabel: h.default.string
    }, r.defaultProps = {
        type: k.TYPE.DEFAULT,
        in: !0,
        onOpen: q,
        onClose: q,
        className: null,
        bodyClassName: null,
        progressClassName: null,
        updateId: null,
        role: 'alert'
    }, f = r;
}), d.register('epiy7', function(c, r) {
    var e, f;
    a(c.exports), b(c.exports, '__esModule', function() {
        return e;
    }, function(a) {
        return e = a;
    }), b(c.exports, 'default', function() {
        return f;
    }, function(a) {
        return f = a;
    }), e = !0, f = void 0;
    var g = l(d('uPP4W')),
        h = l(d('uj3CK')),
        i = l(d('VAIs1')),
        j = d('euPKG'),
        k = d('z+8gD');

    function l(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }

    function m() {
        return m = Object.assign || function(a) {
            for (var n = 1; n < n.length; n++) {
                var o = n[n];
                for (var p in o)
                    Object.prototype.hasOwnProperty.call(o, p) && (a[p] = o[p]);
            }
            return a;
        }, m.apply(this, n);
    }

    function n(a) {
        var o, p = a.delay,
            q = a.isRunning,
            r = a.closeToast,
            s = a.type,
            t = a.hide,
            u = a.className,
            v = a.style,
            w = a.controlledProgress,
            x = a.progress,
            y = a.isProgressDone,
            z = a.rtl,
            A = m({}, v, {
                animationDuration: p + 'ms',
                animationPlayState: q ? 'running' : 'paused',
                opacity: t ? 0 : 1,
                transform: w ? 'scaleX(' + x + ')' : null
            }),
            B = (0, i.default)('Toastify__progress-bar', w ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated', 'Toastify__progress-bar--' + s, {
                'Toastify__progress-bar--rtl': z
            }, u),
            C = ((o = {})[w && y ? 'onTransitionEnd' : 'onAnimationEnd'] = w && !y ? null : r, o);
        return g.default.createElement('div', m({
            className: B,
            style: A
        }, C));
    }
    n.propTypes = {
        delay: k.falseOrDelay.isRequired,
        isRunning: h.default.bool.isRequired,
        closeToast: h.default.func.isRequired,
        rtl: h.default.bool.isRequired,
        type: h.default.string,
        hide: h.default.bool,
        className: h.default.oneOfType([
            h.default.string,
            h.default.object
        ]),
        progress: h.default.number,
        controlledProgress: h.default.bool,
        isProgressDone: h.default.bool
    }, n.defaultProps = {
        type: j.TYPE.DEFAULT,
        hide: !1
    }, f = n;
}), d.register('euPKG', function(a, c) {
    var e, f, g;
    b(a.exports, 'ACTION', function() {
        return e;
    }, function(a) {
        return e = a;
    }), b(a.exports, 'TYPE', function() {
        return f;
    }, function(a) {
        return f = a;
    }), b(a.exports, 'POSITION', function() {
        return g;
    }, function(a) {
        return g = a;
    }), e = f = g = void 0;
    g = {
        TOP_LEFT: 'top-left',
        TOP_RIGHT: 'top-right',
        TOP_CENTER: 'top-center',
        BOTTOM_LEFT: 'bottom-left',
        BOTTOM_RIGHT: 'bottom-right',
        BOTTOM_CENTER: 'bottom-center'
    };
    f = {
        INFO: 'info',
        SUCCESS: 'success',
        WARNING: 'warning',
        ERROR: 'error',
        DEFAULT: 'default'
    };
    e = {
        SHOW: 0,
        CLEAR: 1,
        DID_MOUNT: 2,
        WILL_UNMOUNT: 3,
        ON_CHANGE: 4
    };
}), d.register('z+8gD', function(a, c) {
    var e, f, g, h;
    b(a.exports, 'isValidDelay', function() {
        return e;
    }, function(a) {
        return e = a;
    }), b(a.exports, 'objectValues', function() {
        return f;
    }, function(a) {
        return f = a;
    }), b(a.exports, 'falseOrElement', function() {
        return g;
    }, function(a) {
        return g = a;
    }), b(a.exports, 'falseOrDelay', function() {
        return h;
    }, function(a) {
        return h = a;
    }), e = j, f = function(a) {
        return Object.keys(a).map(function(b) {
            return a[b];
        });
    }, g = h = void 0;
    var i = d('uPP4W');

    function j(a) {
        return 'number' == typeof a && !isNaN(a) && a > 0;
    }

    function k(a) {
        return a.isRequired = function(b, c, d) {
            if (void 0 === b[c])
                return new Error('The prop ' + c + ' is marked as required in \n      ' + d + ', but its value is undefined.');
            a(b, c, d);
        }, a;
    }
    var l = k(function(a, b, c) {
        var m = a[b];
        return !1 === m || j(m) ? null : new Error(c + ' expect ' + b + ' \n      to be a valid Number > 0 or equal to false. ' + m + ' given.');
    });
    h = l;
    var m = k(function(a, b, c) {
        var n = a[b];
        return !1 === n || (0, i.isValidElement)(n) ? null : new Error(c + ' expect ' + b + ' \n      to be a valid react element or equal to false. ' + n + ' given.');
    });
    g = m;
}), d.register('gHXnt', function(c, e) {
    var e, f;
    a(c.exports), b(c.exports, '__esModule', function() {
        return e;
    }, function(a) {
        return e = a;
    }), b(c.exports, 'default', function() {
        return f;
    }, function(a) {
        return f = a;
    }), e = !0, f = void 0;
    var g = i(d('uPP4W')),
        h = i(d('uj3CK'));

    function i(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }

    function j(a) {
        var k = a.closeToast,
            l = a.type,
            m = a.ariaLabel;
        return g.default.createElement('button', {
            className: 'Toastify__close-button Toastify__close-button--' + l,
            type: 'button',
            onClick: k,
            'aria-label': m
        }, '\u2716');
    }
    j.propTypes = {
        closeToast: h.default.func,
        arialLabel: h.default.string
    }, j.defaultProps = {
        ariaLabel: 'close'
    }, f = j;
}), d.register('JgLpl', function(a, c) {
    var e, f, g, h;
    b(a.exports, 'Flip', function() {
        return e;
    }, function(a) {
        return e = a;
    }), b(a.exports, 'Zoom', function() {
        return f;
    }, function(a) {
        return f = a;
    }), b(a.exports, 'Slide', function() {
        return g;
    }, function(a) {
        return g = a;
    }), b(a.exports, 'Bounce', function() {
        return h;
    }, function(a) {
        return h = a;
    }), e = f = g = h = void 0;
    var i, j = (i = d('ubrZH')) && i.__esModule ? i : {
        default: i
    };
    var k = (0, j.default)({
        enter: 'Toastify__bounce-enter',
        exit: 'Toastify__bounce-exit',
        appendPosition: !0
    });
    h = k;
    var l = (0, j.default)({
        enter: 'Toastify__slide-enter',
        exit: 'Toastify__slide-exit',
        duration: [
            450,
            750
        ],
        appendPosition: !0
    });
    g = l;
    var m = (0, j.default)({
        enter: 'Toastify__zoom-enter',
        exit: 'Toastify__zoom-exit'
    });
    f = m;
    var n = (0, j.default)({
        enter: 'Toastify__flip-enter',
        exit: 'Toastify__flip-exit'
    });
    e = n;
}), d.register('ubrZH', function(c, j) {
    var e, f;
    a(c.exports), b(c.exports, '__esModule', function() {
        return e;
    }, function(a) {
        return e = a;
    }), b(c.exports, 'default', function() {
        return f;
    }, function(a) {
        return f = a;
    }), e = !0, f = function(a) {
        var g = a.enter,
            h = a.exit,
            i = a.duration,
            j = void 0 === i ? 750 : i,
            k = a.appendPosition,
            l = void 0 !== k && k;
        return function(a) {
            var m, n, o = a.children,
                p = a.position,
                q = a.preventExitTransition,
                r = function(a, g) {
                    if (null == a)
                        return {};
                    var s, t, u = {},
                        v = Object.keys(a);
                    for (t = 0; t < v.length; t++)
                        s = v[t], g.indexOf(s) >= 0 || (u[s] = a[s]);
                    return u;
                }(a, [
                    'children',
                    'position',
                    'preventExitTransition'
                ]),
                s = l ? g + '--' + p : g,
                t = l ? h + '--' + p : h;
            Array.isArray(j) && 2 === j.length ? (m = j[0], n = j[1]) : m = n = j;
            return g.default.createElement(h.default, j({}, r, {
                timeout: q ? 0 : {
                    enter: m,
                    exit: n
                },
                onEnter: function(a) {
                    a.classList.add(s), a.style.animationFillMode = 'forwards', a.style.animationDuration = 0.001 * m + 's';
                },
                onEntered: function(a) {
                    a.classList.remove(s), a.style.cssText = '';
                },
                onExit: q ? k : function(a) {
                    a.classList.add(t), a.style.animationFillMode = 'forwards', a.style.animationDuration = 0.001 * n + 's';
                }
            }), o);
        };
    };
    var g = i(d('uPP4W')),
        h = i(d('1pIKt'));

    function i(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }

    function j() {
        return j = Object.assign || function(a) {
            for (var k = 1; k < n.length; k++) {
                var l = n[k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (a[m] = l[m]);
            }
            return a;
        }, j.apply(this, n);
    }
    var k = function() {};
}), d.register('iO67A', function(c, d) {
    var e, f;
    a(c.exports), b(c.exports, '__esModule', function() {
        return e;
    }, function(a) {
        return e = a;
    }), b(c.exports, 'default', function() {
        return f;
    }, function(a) {
        return f = a;
    }), e = !0, f = void 0;
    var g = {
        list: new Map(),
        on: function(a, b) {
            return this.list.has(a) || this.list.set(a, []), this.list.get(a).push(b), this;
        },
        off: function(a) {
            return this.list.delete(a), this;
        },
        emit: function(a) {
            for (var h = n.length, i = new Array(h > 1 ? h - 1 : 0), j = 1; j < h; j++)
                i[j - 1] = n[j];
            return !!this.list.has(a) && (this.list.get(a).forEach(function(a) {
                return setTimeout(function() {
                    return a.call.apply(a, [null].concat(i));
                }, 0);
            }), !0);
        }
    };
    f = g;
}), d.register('Hb/EM', function(c, u) {
    var e, f;
    a(c.exports), b(c.exports, '__esModule', function() {
        return e;
    }, function(a) {
        return e = a;
    }), b(c.exports, 'default', function() {
        return f;
    }, function(a) {
        return f = a;
    }), e = !0, f = void 0;
    var g, h = (g = d('iO67A')) && g.__esModule ? g : {
            default: g
        },
        i = d('euPKG');

    function j() {
        return j = Object.assign || function(a) {
            for (var k = 1; k < n.length; k++) {
                var l = n[k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (a[m] = l[m]);
            }
            return a;
        }, j.apply(this, n);
    }
    var k = null,
        l = [],
        m = function() {
            return !1;
        };

    function n(a, b) {
        return j({}, a, {
            type: b,
            toastId: p(a)
        });
    }

    function o() {
        return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
    }

    function p(a) {
        return a && ('string' == typeof a.toastId || 'number' == typeof a.toastId && !isNaN(a.toastId)) ? a.toastId : o();
    }

    function q(a, b) {
        return null !== k ? h.default.emit(i.ACTION.SHOW, a, b) : l.push({
            action: i.ACTION.SHOW,
            content: a,
            options: b
        }), b.toastId;
    }
    var r = j(function(a, b) {
        return q(a, n(b, b && b.type || i.TYPE.DEFAULT));
    }, {
        success: function(a, b) {
            return q(a, n(b, i.TYPE.SUCCESS));
        },
        info: function(a, b) {
            return q(a, n(b, i.TYPE.INFO));
        },
        warn: function(a, b) {
            return q(a, n(b, i.TYPE.WARNING));
        },
        warning: function(a, b) {
            return q(a, n(b, i.TYPE.WARNING));
        },
        error: function(a, b) {
            return q(a, n(b, i.TYPE.ERROR));
        },
        dismiss: function(a) {
            return void 0 === a && (a = null), k && h.default.emit(i.ACTION.CLEAR, a);
        },
        isActive: m,
        update: function(a, b) {
            setTimeout(function() {
                if (k && void 0 !== k.collection[a]) {
                    var s = k.collection[a],
                        t = s.options,
                        u = s.content,
                        v = j({}, t, b, {
                            toastId: b.toastId || a
                        });
                    b.toastId && b.toastId !== a ? v.staleToastId = a : v.updateId = o();
                    var w = void 0 !== v.render ? v.render : u;
                    delete v.render, q(w, v);
                }
            }, 0);
        },
        done: function(a, b) {
            void 0 === b && (b = 1), r.update(a, {
                progress: b,
                isProgressDone: !0
            });
        },
        onChange: function(a) {
            'function' == typeof a && h.default.on(i.ACTION.ON_CHANGE, a);
        },
        POSITION: i.POSITION,
        TYPE: i.TYPE
    });
    h.default.on(i.ACTION.DID_MOUNT, function(a) {
        k = a, r.isActive = function(a) {
            return k.isToastActive(a);
        }, l.forEach(function(a) {
            h.default.emit(a.action, a.content, a.options);
        }), l = [];
    }).on(i.ACTION.WILL_UNMOUNT, function() {
        k = null, r.isActive = m;
    }), f = r;
}), d.register('bAH0K', function(a, c) {
    b(a.exports, 'upgradeNames', function() {
        return d;
    });
    const e = {
        moneyPerQuestion: 'Money Per Question',
        streakBonus: 'Streak Bonus',
        multiplier: 'Multiplier',
        insurance: 'Insurance'
    };
}), d.register('UNaEe', function(a, c) {
    b(a.exports, 'correct', function() {
        return g;
    }), b(a.exports, 'incorrect', function() {
        return h;
    }), b(a.exports, 'click', function() {
        return i;
    }), b(a.exports, 'click2', function() {
        return j;
    }), b(a.exports, 'applyTheme', function() {
        return k;
    }), b(a.exports, 'successClick', function() {
        return l;
    }), b(a.exports, 'woosh', function() {
        return m;
    }), b(a.exports, 'done', function() {
        return n;
    }), b(a.exports, 'celebrate', function() {
        return o;
    }), b(a.exports, 'error', function() {
        return p;
    }), b(a.exports, 'success', function() {
        return q;
    }), b(a.exports, 'alert', function() {
        return r;
    }), b(a.exports, 'clap', function() {
        return s;
    }), b(a.exports, 'pop', function() {
        return t;
    }), b(a.exports, 'freeze', function() {
        return u;
    }), b(a.exports, 'stone', function() {
        return v;
    }), b(a.exports, 'drain', function() {
        return w;
    }), b(a.exports, 'pieSlice', function() {
        return x;
    }), b(a.exports, 'spark', function() {
        return y;
    }), b(a.exports, 'bounce', function() {
        return z;
    });
    var e = d('6yrsF'),
        f = d('lf3yz');
    const g = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('correct.mp3')]
        }),
        h = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('incorrect.mp3')]
        }),
        i = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('click.wav')]
        }),
        j = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('click2.wav')]
        }),
        k = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('applyTheme.wav')]
        }),
        l = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('successClick.wav')]
        }),
        m = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('woosh.wav')]
        }),
        n = (new(0, e.Howl)({
            src: [(0, f.getAssetPath)('splash.wav')]
        }), new(0, e.Howl)({
            src: [(0, f.getAssetPath)('done.wav')]
        })),
        o = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('celebrate.mp3')],
            volume: 0.5
        }),
        p = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('error.wav')]
        }),
        q = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('success.wav')]
        }),
        r = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('alert.wav')]
        }),
        s = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('clap.wav')]
        }),
        t = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('pop.mp3')]
        }),
        u = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('freeze.mp3')]
        }),
        v = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('stone.mp3')]
        }),
        w = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('drain.mp3')],
            volume: 0.7
        }),
        x = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('pieSlice.mp3')]
        }),
        y = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('spark.mp3')],
            volume: 0.4
        }),
        z = new(0, e.Howl)({
            src: [(0, f.getAssetPath)('bounce.wav')]
        });
}), d.register('3kESF', function(a, c) {
    b(a.exports, 'THANOS', function() {
        return d;
    }), b(a.exports, 'HIDDEN', function() {
        return f;
    }), b(a.exports, 'SHOP_QR_SCAN', function() {
        return g;
    }), b(a.exports, 'DEFENDING_HOMEBASE', function() {
        return h;
    }), b(a.exports, 'LAVA', function() {
        return i;
    }), b(a.exports, 'IMPOSTER', function() {
        return j;
    }), b(a.exports, 'DRAW', function() {
        return k;
    }), b(a.exports, 'COMEBACK', function() {
        return l;
    }), b(a.exports, 'PARDY', function() {
        return m;
    });
    const e = 'THANOS',
        f = 'HIDDEN',
        g = 'SHOP_QR_SCAN',
        h = 'DEFENDING_HOMEBASE',
        i = 'LAVA',
        j = 'IMPOSTER',
        k = 'DRAW',
        l = 'COMEBACK',
        m = 'PARDY';
}), d.register('cJ4UC', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = {
        requestHostClientIdFromGameCode: 'REQUEST_HOST_ID',
        playerUserDetails: 'PLAYER_USER_DETAILS',
        newGameStatus: 'NEW_GAME_STATUS',
        questionAnswered: 'QUESTION_ANSWERED',
        upgradePurchased: 'UPGRADE_PURCHASED',
        powerupPurchased: 'POWERUP_PURCHASED',
        powerupActivated: 'POWERUP_ACTIVATED',
        powerupAttack: 'POWERUP_ATTACK',
        requestPlayerLeaderboard: 'PLAYER_LEADERBOARD_REQUESTED',
        requestTeamLeaderboard: 'TEAM_LEADERBOARD_REQUESTED',
        requestDefendingHomebase: 'REQUEST_DEFENDING_HOMEBASE',
        themePurchased: 'THEME_PURCHASED',
        themeApplied: 'THEME_APPLIED',
        clap: 'CLAP',
        makeTeams: 'MAKE_TEAMS',
        playerStats: 'PLAYER_STATS',
        kickPlayer: 'KICK_PLAYER',
        requestPlayerDefendingHomebase: 'REQUEST_PLAYER_DEFENDING_HOMEBASE',
        upgradeDefendingHomebase: 'UPGRADE_DEFENDING_HOMEBASE',
        leaderboardChangeBalance: 'LEADERBOARD_CHANGE_BALANCE',
        leaderboardFreezePlayer: 'LEADERBOARD_FREEZE_PLAYER',
        leaderboardSendMessage: 'LEADERBOARD_SEND_MESSAGE',
        playAgain: 'PLAY_AGAIN',
        lavaPurchasePiece: 'LAVA_PURCHASE_PIECE',
        hostIncreaseLavaHeight: 'HOST_INCREASE_LAVA_HEIGHT',
        imposter: {
            requestPeople: 'IMPOSTER_MODE_REQUEST_PEOPLE',
            status: 'IMPOSTER_MODE_STATUS',
            purchase: 'IMPOSTER_MODE_PURCHASE',
            vote: 'IMPOSTER_MODE_VOTE',
            notes: 'IMPOSTER_MODE_NOTES',
            imposterWin: 'IMPOSTER_MODE_IMPOSTER_WIN'
        },
        draw: {
            createRound: 'DRAW_MODE_CREATE_ROUND',
            termSelected: 'DRAW_MODE_TERM_SELECTED',
            lineDrawn: 'DRAW_MODE_LD',
            imageDrawn: 'DRAW_MODE_ID',
            guess: 'DRAW_MODE_GUESS',
            endRound: 'DRAW_MODE_END_ROUND',
            clear: 'DRAW_MODE_CLEAR'
        },
        outnumberedComplete: 'OUTNUMBERED_COMPLETE',
        pardy: {
            setNewRoundDetails: 'PARDY_SET_NEW_ROUND_DETAILS',
            setScreen: 'PARDY_SET_SCREEN',
            setQuestionScreen: 'PARDY_QUESTION_SCREEN',
            setQuestionStatus: 'PARDY_SET_QUESTION_STATUS',
            setPower: 'PARDY_SET_POWER',
            setBet: 'PARDY_SET_BET'
        }
    };
}), d.register('xGUNo', function(a, c) {
    b(a.exports, 'DRAW_MODE_FONT', function() {
        return d;
    });
    const e = '\'Pangolin\', sans-serif';
}), d.register('qA0vg', function(a, c) {
    b(a.exports, 'default', function() {
        return e;
    });
    var e = d('AsIEN').default;
}), d.register('AsIEN', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    const e = '"Product Sans"';
    var f = {
        mainFontName: e,
        name: e + ', sans-serif',
        important: e + ', sans-serif!important'
    };
}), d.register('0wOVz', function(a, c) {
    b(a.exports, 'CLASSIC', function() {
        return d;
    }), b(a.exports, 'TEAMS', function() {
        return f;
    }), b(a.exports, 'THANOS', function() {
        return g;
    }), b(a.exports, 'BOSS_BATTLE', function() {
        return h;
    }), b(a.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return i;
    }), b(a.exports, 'LAVA', function() {
        return j;
    }), b(a.exports, 'IMPOSTER', function() {
        return k;
    }), b(a.exports, 'DRAW', function() {
        return l;
    }), b(a.exports, 'PARDY', function() {
        return m;
    });
    const e = 'CLASSIC',
        f = 'TEAMS',
        g = 'THANOS',
        h = 'BOSS_BATTLE',
        i = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        j = 'LAVA',
        k = 'IMPOSTER',
        l = 'DRAW',
        m = 'PARDY';
}), d.register('fHPMn', function(a, c) {
    b(a.exports, 'CSS_TRANSITION_TIMEOUT', function() {
        return d;
    });
    const e = 250;
}), d.register('Qm3Sw', function(a, c) {
    b(a.exports, 'defaultShopColor', function() {
        return i;
    }), b(a.exports, 'defaultContinueColor', function() {
        return j;
    }), b(a.exports, 'default', function() {
        return l;
    });
    var e = d('6gioo'),
        f = d('VCvua0'),
        g = d('UnUp5');
    const h = d('PDLD/2').themes.filter(a => 'Default' === a.name)[0],
        i = {
            background: '#311B92',
            text: f.default.White
        },
        j = {
            background: '#1A237E',
            text: f.default.White
        };
    class k {
        constructor() {
            this.theme = {
                defaultBackground: h.question.background,
                question: h.question,
                palette: h.palette,
                response: {
                    correctAnswer: {
                        background: '#388E3C',
                        text: f.default.White
                    },
                    incorrectAnswer: {
                        background: '#B71C1C',
                        text: f.default.White
                    },
                    shop: i,
                    continue: j
                },
                desktopBreakpoint: 650
            }, this.availableThemes = g.observable.array(), this.disabledThemes = g.observable.array(), this.themeName = h.name, this.ownedThemes = g.observable.array(), (0, g.makeObservable)(this);
        }
    }
    (0, e.__decorate)([g.observable], k.prototype, 'theme', void 0), (0, e.__decorate)([g.observable], k.prototype, 'availableThemes', void 0), (0, e.__decorate)([g.observable], k.prototype, 'disabledThemes', void 0), (0, e.__decorate)([g.observable], k.prototype, 'themeName', void 0), (0, e.__decorate)([g.observable], k.prototype, 'ownedThemes', void 0);
    var l = m;
}), d.register('ttm6G', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'translations', void 0);
    var h = i;
}), d.register('bvO+a', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            this.fullBlackScreen = !1, this.snowing = !1, this.blurredScreen = !1, this.showingSuccessModal = !1, this.successModalInfo = {
                icon: '',
                background: '',
                color: '',
                title: '',
                description: '',
                sound: '',
                textOptions: null
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'fullBlackScreen', void 0), (0, e.__decorate)([f.observable], g.prototype, 'snowing', void 0), (0, e.__decorate)([f.observable], g.prototype, 'blurredScreen', void 0), (0, e.__decorate)([f.observable], g.prototype, 'showingSuccessModal', void 0), (0, e.__decorate)([f.observable], g.prototype, 'successModalInfo', void 0);
    var h = i;
}), d.register('dpNxC', function(a, c) {
    b(a.exports, 'upgradeNames', function() {
        return g;
    }), b(a.exports, 'default', function() {
        return i;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    const g = {
        moneyPerQuestion: 'Money Per Question',
        streakBonus: 'Streak Bonus',
        multiplier: 'Multiplier',
        insurance: 'Insurance'
    };
    class h {
        constructor() {
            this.upgradePricingDiscount = 1, this.upgrades = f.observable.array(), this.currentlySelectedUpgrade = g.moneyPerQuestion, this.upgradeLevels = {
                moneyPerQuestion: 1,
                streakBonus: 1,
                multiplier: 1,
                insurance: 1
            }, this.upgradeLevelTabs = {
                moneyPerQuestion: 2,
                streakBonus: 2,
                multiplier: 2,
                insurance: 2
            }, this.homebaseUpgades = f.observable.array(), this.lavaUpgrades = f.observable.array(), (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], h.prototype, 'upgradePricingDiscount', void 0), (0, e.__decorate)([f.observable], h.prototype, 'upgrades', void 0), (0, e.__decorate)([f.observable], h.prototype, 'currentlySelectedUpgrade', void 0), (0, e.__decorate)([f.observable], h.prototype, 'upgradeLevels', void 0), (0, e.__decorate)([f.observable], h.prototype, 'upgradeLevelTabs', void 0), (0, e.__decorate)([f.observable], h.prototype, 'homebaseUpgades', void 0), (0, e.__decorate)([f.observable], h.prototype, 'lavaUpgrades', void 0);
    var i = j;
}), d.register('hITC0', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            this.name = '', this.groupId = '', this.groupMemberId = '', this.theme = 'Default', this.team = null, this.place = 1, this.readToMeEnabled = !1, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'name', void 0), (0, e.__decorate)([f.observable], g.prototype, 'groupId', void 0), (0, e.__decorate)([f.observable], g.prototype, 'groupMemberId', void 0), (0, e.__decorate)([f.observable], g.prototype, 'theme', void 0), (0, e.__decorate)([f.observable], g.prototype, 'team', void 0), (0, e.__decorate)([f.observable], g.prototype, 'place', void 0), (0, e.__decorate)([f.observable], g.prototype, 'readToMeEnabled', void 0);
    var h = i;
}), d.register('TTKAH', function(a, c) {
    b(a.exports, 'ImposterStatus', function() {
        return g;
    }), b(a.exports, 'PersonRole', function() {
        return i;
    }), b(a.exports, 'ImposterShopItemId', function() {
        return k;
    }), b(a.exports, 'default', function() {
        return n;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    let g;
    var h;
    let i;
    var j;
    let k;
    var l;
    (h = g || (g = {})).intro = 'intro', h.questions = 'questions', h.discussion = 'discussion', h.voting = 'voting', h.votingResult = 'votingResult', (j = i || (i = {})).detective = 'detective', j.imposter = 'imposter', (l = k || (k = {})).donate = 'donate', l.privateInvestigation = 'privateInvestigation', l.publicInvestigation = 'publicInvestigation', l.meeting = 'meeting', l.investigationRemover = 'investigationRemover', l.fakeInvestigation = 'fakeInvestigation', l.noteViewer = 'noteViewer', l.blendIn = 'blendIn', l.clearListRemover = 'clearListRemover';
    class m {
        constructor() {
            this.status = g.intro, this.me = null, this.meetingsLeft = 0, this.impostersLeft = 0, this.investigationsLeft = 0, this.epl = null, this.shopItems = f.observable.array(), this.currentShopItem = null, this.currentShopItemModalVisible = !1, this.noteDrawerOpen = !1, this.roleModalOpen = !0, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], m.prototype, 'status', void 0), (0, e.__decorate)([f.observable], m.prototype, 'me', void 0), (0, e.__decorate)([f.observable], m.prototype, 'meetingsLeft', void 0), (0, e.__decorate)([f.observable], m.prototype, 'impostersLeft', void 0), (0, e.__decorate)([f.observable], m.prototype, 'investigationsLeft', void 0), (0, e.__decorate)([f.observable], m.prototype, 'epl', void 0), (0, e.__decorate)([f.observable], m.prototype, 'shopItems', void 0), (0, e.__decorate)([f.observable], m.prototype, 'currentShopItem', void 0), (0, e.__decorate)([f.observable], m.prototype, 'currentShopItemModalVisible', void 0), (0, e.__decorate)([f.observable], m.prototype, 'noteDrawerOpen', void 0), (0, e.__decorate)([f.observable], m.prototype, 'roleModalOpen', void 0);
    var n = o;
}), d.register('YqceC', function(a, c) {
    b(a.exports, 'PointAdditionType', function() {
        return g;
    }), b(a.exports, 'DrawRole', function() {
        return i;
    }), b(a.exports, 'DrawStatus', function() {
        return k;
    }), b(a.exports, 'default', function() {
        return n;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    let g;
    var h;
    let i;
    var j;
    let k;
    var l;
    (h = g || (g = {})).correct = 'correct', h.speed = 'speed', h.firstGuess = 'firstGuess', h.goodDrawer = 'goodDrawer', (j = i || (i = {})).drawer = 'Drawer', j.guesser = 'Guesser', (l = k || (k = {})).pickDrawer = 'pickDrawer', l.termSelection = 'termSelection', l.drawing = 'drawing', l.results = 'results';
    class m {
        constructor() {
            this.round = {
                term: '',
                secondsLeft: 0,
                drawingBase64: '',
                revealText: '',
                drawer: {
                    id: '',
                    name: ''
                },
                termOptions: []
            }, this.me = {
                role: i.guesser,
                lastRound: null,
                answeredCorrectly: !1
            }, this.status = k.pickDrawer, this.latestLine = null, this.latestFeedItem = null, this.shouldClearCanvas = !1, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], m.prototype, 'round', void 0), (0, e.__decorate)([f.observable], m.prototype, 'me', void 0), (0, e.__decorate)([f.observable], m.prototype, 'status', void 0), (0, e.__decorate)([f.observable], m.prototype, 'latestLine', void 0), (0, e.__decorate)([f.observable], m.prototype, 'latestFeedItem', void 0), (0, e.__decorate)([f.observable], m.prototype, 'shouldClearCanvas', void 0);
    var n = o;
}), d.register('R6vGy', function(a, c) {
    b(a.exports, 'PardyScreen', function() {
        return g;
    }), b(a.exports, 'PardyQuestionScreen', function() {
        return i;
    }), b(a.exports, 'PardyQuestionStatus', function() {
        return k;
    }), b(a.exports, 'default', function() {
        return n;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    let g;
    var h;
    let i;
    var j;
    let k;
    var l;
    (h = g || (g = {})).home = 'home', h.question = 'question', h.answer = 'answer', (j = i || (i = {})).preview = 'preview', j.finale = 'finale', j.question = 'question', (l = k || (k = {})).preview = 'preview', l.ask = 'ask', l.timesUp = 'timesUp';
    class m {
        constructor() {
            this.screen = g.home, this.questionScreen = i.preview, this.questionStatus = k.preview, this.powers = f.observable.array(), this.power = '', this.powerOptions = f.observable.array(), this.currentQuestion = null, this.animatingQuestionScreenOut = !1, this.animatingBetScreenOut = !1, this.answered = !1, this.answeredCorrectly = !1, this.answerResponseItems = f.observable.array(), this.maxBet = 1, this.currentBet = 0, this.tips = f.observable.array(), this.answerLockedInWittyMessages = f.observable.array(), this.correctWittyMessages = f.observable.array(), this.incorrectWittyMessages = f.observable.array(), (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], m.prototype, 'screen', void 0), (0, e.__decorate)([f.observable], m.prototype, 'questionScreen', void 0), (0, e.__decorate)([f.observable], m.prototype, 'questionStatus', void 0), (0, e.__decorate)([f.observable], m.prototype, 'powers', void 0), (0, e.__decorate)([f.observable], m.prototype, 'power', void 0), (0, e.__decorate)([f.observable], m.prototype, 'powerOptions', void 0), (0, e.__decorate)([f.observable], m.prototype, 'currentQuestion', void 0), (0, e.__decorate)([f.observable], m.prototype, 'animatingQuestionScreenOut', void 0), (0, e.__decorate)([f.observable], m.prototype, 'animatingBetScreenOut', void 0), (0, e.__decorate)([f.observable], m.prototype, 'answered', void 0), (0, e.__decorate)([f.observable], m.prototype, 'answeredCorrectly', void 0), (0, e.__decorate)([f.observable], m.prototype, 'answerResponseItems', void 0), (0, e.__decorate)([f.observable], m.prototype, 'maxBet', void 0), (0, e.__decorate)([f.observable], m.prototype, 'currentBet', void 0), (0, e.__decorate)([f.observable], m.prototype, 'tips', void 0), (0, e.__decorate)([f.observable], m.prototype, 'answerLockedInWittyMessages', void 0), (0, e.__decorate)([f.observable], m.prototype, 'correctWittyMessages', void 0), (0, e.__decorate)([f.observable], m.prototype, 'incorrectWittyMessages', void 0);
    var n = o;
}), d.register('Ob4Rg', function(a, c) {
    b(a.exports, 'startLoop', function() {
        return h;
    });
    var e = d('lf3yz'),
        f = d('4nd22');
    const g = () => {
            f.default.forEach(a => {
                var h;
                window[a] && (h = a, setTimeout(() => {
                    (0, e.send)('REDBOAT', h);
                }, 130));
            });
        },
        h = () => {
            setInterval(g, 10000);
        };
}), d.register('4nd22', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = [
        'clickElement',
        'Exploit',
        'msgpack',
        'AYO_YOU_SHOULDNT_BE_HERE_ROCKS_NETWORK_VAREDZP',
        'getAnswer'
    ];
    var f = [
        e[0],
        e[1],
        e[2],
        e[3]
    ];
}), d.register('XthuH', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('v605W'),
        g = d('xnM+M'),
        h = d('3kIRU'),
        i = d('qA0vg'),
        j = d('uPP4W'),
        k = d('h99Nu'),
        l = d('UnUp5'),
        m = d('Vlfxs'),
        n = d('xxcnb');
    const o = (0, f.default)({
        typography: {
            fontFamily: [
                i.default.mainFontName,
                'sans-serif'
            ].join(',')
        }
    });
    var p = (0, m.observer)(a => {
        const {
            theme: q
        } = j.useContext(n.default);
        return (0, e.jsx)(g.default, {
            theme: o,
            children: (0, e.jsx)(k.ThemeProvider, {
                theme: (0, l.toJS)(q.theme),
                children: (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsx)(h.default, {
                        ...a
                    })
                })
            })
        });
    });
}), d.register('xnM+M', function(a, m) {
    b(a.exports, 'default', function() {
        return j;
    });
    var e = d('b5p1k12'),
        f = d('uPP4W');
    d('uj3CK');
    var g = d('cZSy0'),
        h = d('0BIkc'),
        i = d('6Futv');
    var j = function(a) {
        var k = a.children,
            l = a.theme,
            m = (0, h.default)(),
            n = c(f).useMemo(function() {
                var o = null === m ? l : function(o, k) {
                    return 'function' == typeof k ? k(o) : (0, e.default)((0, e.default)({}, o), k);
                }(m, l);
                return null != o && (o[i.default] = null !== m), o;
            }, [
                l,
                m
            ]);
        return c(f).createElement(g.default.Provider, {
            value: n
        }, k);
    };
}), d.register('3kIRU', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('8kSQZ'),
        f = d('PHip8');
    d('uPP4W');
    var g = a => (0, e.jsx)(f.default, {
        ...a
    });
}), d.register('PHip8', function(a, c) {
    b(a.exports, 'default', function() {
        return A;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('VWmG7'),
        h = d('Vlfxs'),
        i = d('h99Nu'),
        j = d('qA0vg'),
        k = d('wNEHu'),
        l = d('rdFK4'),
        m = d('o6Uo7'),
        n = d('kMQjd3'),
        o = d('rHwcN'),
        p = d('ClSR/'),
        q = d('Xa2SF'),
        r = d('xxcnb'),
        s = d('lmfrI');
    let t, u, v, w = a => a;
    const x = i.default.div(t || (t = w`
  display: flex;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  color: ${ 0 };
`), s.default.Black),
        y = i.default.div(u || (u = w`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  font-family: ${ 0 };
  user-select: none;
  ${ 0 }
  transition: filter 1s;
  overflow: hidden;
`), j.default.name, a => a.blurred && 'filter: blur(5px);'),
        z = i.default.div(v || (v = w`
  height: 0px;
  width: 0px;
  .toast-body {
    font-family: ${ 0 };
  }
`), j.default.name);
    var A = (0, h.observer)(a => {
        const {
            ui: B
        } = f.useContext(r.default);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(n.default, {
                    children: (0, e.jsx)(x, {
                        children: (0, e.jsxs)(y, {
                            blurred: B.blurredScreen,
                            children: [
                                (0, e.jsx)(k.default, {}),
                                (0, e.jsx)(l.default, {
                                    ...a
                                })
                            ]
                        })
                    })
                }),
                (0, e.jsx)(z, {
                    children: (0, e.jsx)(g.ToastContainer, {
                        bodyClassName: 'toast-body'
                    })
                }),
                (0, e.jsx)(o.default, {}),
                (0, e.jsx)(p.default, {}),
                (0, e.jsx)(q.default, {}),
                (0, e.jsx)(m.default, {})
            ]
        });
    });
}), d.register('wNEHu', function(a, c) {
    b(a.exports, 'default', function() {
        return l;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('1VYt0'),
        h = d('UkIQw'),
        i = d('Yf68A'),
        j = d('15ZCK');
    class k extends f.Component {
        render() {
            return (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(h.default, {}),
                    (0, e.jsx)(j.default, {}),
                    (0, e.jsx)(i.default, {}),
                    (0, e.jsx)(g.default, {})
                ]
            });
        }
    }
    var l = m;
}), d.register('1VYt0', function(a, c) {
    b(a.exports, 'DISABLED_PATHS', function() {
        return C;
    }), b(a.exports, 'default', function() {
        return G;
    });
    var e = d('8kSQZ'),
        f = d('TjlPk'),
        g = d('GJN+q'),
        h = d('u/9GL'),
        i = d('VCvua0'),
        j = d('5WRxN'),
        k = d('M8YtH'),
        l = d('lf3yz'),
        m = d('Vlfxs'),
        n = d('uPP4W'),
        o = d('h99Nu'),
        p = d('/RZey'),
        q = d('puB6G'),
        r = d('/pN7z'),
        s = d('hNywk'),
        t = d('0wJUo');
    d('/jgct');
    var u = d('k8riP'),
        v = d('c7n5p'),
        w = d('xxcnb');
    let x, y, z, A = a => a;
    const B = [
            k.default.join,
            k.default.drawMode
        ],
        C = [
            k.default.waiting,
            k.default.gameOver,
            k.default.team,
            k.default.nonDismissMessage,
            k.default.imposterMode
        ],
        D = o.default.div(x || (x = A`
  flex: 0 1 auto;
  color: ${ 0 };
`), i.default.White),
        E = o.default.div(y || (y = A`
  height: ${ 0 }px;
  background: #4252af;
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${ 0 };
  z-index: 1;
`), 63, j.default.basic),
        F = o.default.div(z || (z = A`
  width: 100%;
  display: flex;
  align-items: center;
`));
    var G = (0, m.observer)(() => {
        const {
            balance: H,
            user: I,
            navigation: J,
            powerups: K,
            questions: {
                lockedViewingCorrectAnswer: L
            }
        } = n.useContext(w.default), M = n.useCallback(() => {
            if (!L)
                return J.currentRoute === k.default.questions ? (0, l.changeRoute)(k.default.shop) : (0, l.changeRoute)(k.default.questions);
        }, [
            J.currentRoute,
            L
        ]), N = n.useCallback(() => {
            const O = {
                fontWeight: 900,
                cursor: 'pointer',
                fontSize: 22
            };
            return I.team ? {
                ...O,
                padding: 5,
                backgroundColor: (0, l.getTeamColor)(),
                borderRadius: 4
            } : O;
        }, [I.team]), O = n.useCallback(() => (0, l.toggleDrawer)(!0), []), P = () => (0, l.inHiddenMode)() || K.appliedPowerups.includes(u.PowerupNames.cashConcealer) ? (0, e.jsx)('div', {}) : (0, e.jsx)('div', {
            onClick: M,
            style: N(),
            children: (0, l.getMoney)(H.balance)
        });
        return B.includes(J.currentRoute) ? null : C.includes(J.currentRoute) ? (0, e.jsx)(E, {
            children: (0, e.jsx)(F, {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: (0, e.jsx)('img', {
                    src: '/client/img/svgLogoWhite.svg',
                    style: {
                        height: 30
                    }
                })
            })
        }) : (0, e.jsxs)(D, {
            children: [
                (0, e.jsx)(E, {
                    children: (0, e.jsxs)(F, {
                        style: {
                            paddingLeft: 8,
                            paddingRight: 10
                        },
                        children: [
                            (0, e.jsx)(p.default, {}),
                            (0, e.jsx)(f.default, {
                                onClick: O,
                                color: 'inherit',
                                'aria-label': 'Menu',
                                children: (0, e.jsx)(h.default, {})
                            }),
                            (0, e.jsx)(r.default, {}),
                            (0, e.jsx)(q.default, {}),
                            (0, e.jsx)(v.default, {}),
                            (0, e.jsx)(s.default, {}),
                            (0, e.jsxs)('div', {
                                style: {
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    color: H.customColor ? H.customColor : 'inherit',
                                    transition: 'color 0.25s'
                                },
                                children: [
                                    (0, e.jsx)('div', {}),
                                    (0, e.jsx)('div', {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center'
                                        },
                                        children: (0, e.jsx)('div', {
                                            children: I.team ? (0, e.jsx)(g.default, {
                                                title: (0, e.jsx)('div', {
                                                    style: {
                                                        fontSize: 19,
                                                        padding: 5
                                                    },
                                                    children: (0, l.capitalizeFirstLetter)(I.team.id)
                                                }),
                                                placement: 'left',
                                                children: P()
                                            }) : P()
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, e.jsx)(t.default, {})
            ]
        });
    });
}), d.register('TjlPk', function(a, c) {
    b(a.exports, 'default', function() {
        return s;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = d('66cIh'),
        k = d('8nGxX'),
        l = d('l/I4j'),
        m = g.forwardRef(function(a, b) {
            var n = a.edge,
                o = void 0 !== n && n,
                p = a.children,
                q = a.classes,
                r = a.className,
                s = a.color,
                t = void 0 === s ? 'default' : s,
                u = a.disabled,
                v = void 0 !== u && u,
                w = a.disableFocusRipple,
                x = void 0 !== w && w,
                y = a.size,
                z = void 0 === y ? 'medium' : y,
                A = (0, f.default)(a, [
                    'edge',
                    'children',
                    'classes',
                    'className',
                    'color',
                    'disabled',
                    'disableFocusRipple',
                    'size'
                ]);
            return g.createElement(k.default, (0, e.default)({
                className: (0, h.default)(q.root, r, 'default' !== t && q['color'.concat((0, l.default)(t))], v && q.disabled, 'small' === z && q['size'.concat((0, l.default)(z))], {
                    start: q.edgeStart,
                    end: q.edgeEnd
                } [o]),
                centerRipple: !0,
                focusRipple: !x,
                disabled: v,
                ref: b
            }, A), g.createElement('span', {
                className: q.label
            }, p));
        }),
        n = (0, i.default)(function(a) {
            return {
                root: {
                    textAlign: 'center',
                    flex: '0 0 auto',
                    fontSize: a.typography.pxToRem(24),
                    padding: 12,
                    borderRadius: '50%',
                    overflow: 'visible',
                    color: a.palette.action.active,
                    transition: a.transitions.create('background-color', {
                        duration: a.transitions.duration.shortest
                    }),
                    '&:hover': {
                        backgroundColor: (0, j.fade)(a.palette.action.active, a.palette.action.hoverOpacity),
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    },
                    '&$disabled': {
                        backgroundColor: 'transparent',
                        color: a.palette.action.disabled
                    }
                },
                edgeStart: {
                    marginLeft: -12,
                    '$sizeSmall&': {
                        marginLeft: -3
                    }
                },
                edgeEnd: {
                    marginRight: -12,
                    '$sizeSmall&': {
                        marginRight: -3
                    }
                },
                colorInherit: {
                    color: 'inherit'
                },
                colorPrimary: {
                    color: a.palette.primary.main,
                    '&:hover': {
                        backgroundColor: (0, j.fade)(a.palette.primary.main, a.palette.action.hoverOpacity),
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                colorSecondary: {
                    color: a.palette.secondary.main,
                    '&:hover': {
                        backgroundColor: (0, j.fade)(a.palette.secondary.main, a.palette.action.hoverOpacity),
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                disabled: {},
                sizeSmall: {
                    padding: 3,
                    fontSize: a.typography.pxToRem(18)
                },
                label: {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'inherit',
                    justifyContent: 'inherit'
                }
            };
        }, {
            name: 'MuiIconButton'
        })(m);
}), d.register('u/9GL', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'
        }), 'Menu');
}), d.register('8dyts', function(a, e) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('b5p1k12'),
        f = d('uPP4W'),
        g = d('3lnmR');

    function h(a, b) {
        var i = c(f).memo(c(f).forwardRef(function(b, i) {
            return c(f).createElement(g.default, (0, e.default)({
                ref: i
            }, b), a);
        }));
        return i.muiName = g.default.muiName, i;
    }
}), d.register('5WRxN', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = {
        basic: '0px 4px 33px -6px rgba(0, 0, 0, 0.46)'
    };
}), d.register('/RZey', function(a, c) {
    b(a.exports, 'default', function() {
        return r;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('TjlPk'),
        i = d('wHi3u'),
        j = d('VCvua0'),
        k = d('M8YtH'),
        l = d('UNaEe'),
        m = d('lf3yz'),
        n = d('Vlfxs'),
        o = d('uPP4W');
    const p = a => (0, g.jsx)('div', {
        style: {
            color: j.default.White
        },
        children: (0, g.jsx)(h.default, {
            onClick: a.goBack,
            color: 'inherit',
            children: (0, g.jsx)(i.default, {})
        })
    });
    let q = class extends o.Component {
        render() {
            return this.props.navigation.currentRoute === k.default.upgrade ? (0, g.jsx)(p, {
                goBack: this.goBack
            }) : null;
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'goBack', () => {
                l.click.play(), (0, m.changeRoute)(k.default.shop);
            });
        }
    };
    q = (0, f.__decorate)([
        (0, n.inject)('navigation'),
        n.observer
    ], q);
    var r = s;
}), d.register('wHi3u', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'
        }), 'ArrowBack');
}), d.register('puB6G', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('TjlPk'),
        g = d('9cAG4'),
        h = d('VCvua0'),
        i = d('M8YtH'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('xxcnb'),
        m = d('P8qrB'),
        n = d('lf3yz'),
        o = d('jh162');
    var p = (0, j.observer)(() => {
        const {
            navigation: q,
            questions: r,
            user: s,
            pardy: t
        } = k.useContext(l.default);
        return (0, e.jsx)(e.Fragment, {
            children: s.readToMeEnabled && m.default.hasFinishedReading() && m.default.canPlayAgain() && (q.currentRoute === i.default.questions || q.currentRoute === i.default.pardyMode) && (0, e.jsx)('div', {
                style: {
                    color: h.default.White
                },
                children: (0, e.jsx)(f.default, {
                    onClick: () => {
                        (0, n.inPardyMode)() ? m.default.play(t.currentQuestion): m.default.play((0, o.DecryptData)(r.ceq));
                    },
                    color: 'inherit',
                    children: (0, e.jsx)(g.default, {})
                })
            })
        });
    });
}), d.register('9cAG4', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z'
        }), 'Hearing');
}), d.register('xxcnb', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('rlYg5');
    var f = d('uPP4W').createContext(e.default);
}), d.register('/pN7z', function(a, f) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('TjlPk'),
        i = d('AAdzp'),
        j = d('OdbUb'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('PDLD/2'),
        n = d('lf3yz');
    let o = class extends l.Component {
        render() {
            return this.props.gameOptions.type !== m.GameType.live || (0, n.inLavaMode)() || (0, n.inZombiesVsHumansMode)() || (0, n.inImposterMode)() || (0, n.inHiddenMode)() || (0, n.inPardyMode)() ? null : (0, g.jsx)(h.default, {
                onClick: this.open,
                color: 'inherit',
                'aria-label': 'Leaderboard',
                children: (0, g.jsx)(c(i), {})
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'open', () => {
                this.props.navigation.leaderboardDrawerOpen = !0, (0, j.fetchLatestLeaderboardStats)();
            });
        }
    };
    o = (0, f.__decorate)([
        (0, k.inject)('navigation', 'gameOptions'),
        k.observer
    ], o);
    var p = q;
}), d.register('AAdzp', function(a, b) {
    var e = d('FV1v91');
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.default = void 0;
    var f = e(d('uPP4W')),
        g = (0, e(d('wuu0l')).default)(f.default.createElement('path', {
            d: 'M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z'
        }), 'Games');
    a.exports.default = g;
}), d.register('FV1v91', function(a, b) {
    a.exports = function(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    };
}), d.register('OdbUb', function(a, c) {
    b(a.exports, 'leaderboardSorter', function() {
        return l;
    }), b(a.exports, 'fetchLatestLeaderboardStats', function() {
        return m;
    }), b(a.exports, 'default', function() {
        return o;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('cJ4UC'),
        h = d('lf3yz'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('2I+oO');
    const l = a => {
            const m = (0, h.inThanosMode)() ? 'stones' : 'balance';
            return a.slice().sort((a, c) => a[m] === c[m] ? 0 : a[m] > c[m] ? -1 : 1);
        },
        m = () => (0, h.send)((0, h.inTeamMode)() ? g.default.requestTeamLeaderboard : g.default.requestPlayerLeaderboard);
    let n = class extends j.Component {
        componentDidMount() {
            m();
        }
        render() {
            const o = (0, h.inTeamMode)();
            let p = [],
                q = [];
            return o && !this.props.gameValues.teams.length ? null : o || this.props.gameValues.players.length ? (o ? p = l(this.props.gameValues.teams) : q = l(this.props.gameValues.players), (0, f.jsx)('div', {
                style: {
                    width: '100%'
                },
                children: o ? p.map((o, p) => (0, f.jsx)(k.default, {
                    item: o,
                    position: p + 1,
                    isPlayer: !1,
                    usePowerupAction: this.props.usePowerupAction,
                    parentAction: this.props.parentAction,
                    showSelf: this.props.showSelf,
                    showHidden: this.props.showHidden,
                    customBorderRadius: this.props.customItemBorderRadius
                }, o.id)) : q.map((o, p) => (0, f.jsx)(k.default, {
                    item: o,
                    position: p + 1,
                    isPlayer: !0,
                    usePowerupAction: this.props.usePowerupAction,
                    parentAction: this.props.parentAction,
                    showSelf: this.props.showSelf,
                    showHidden: this.props.showHidden,
                    customBorderRadius: this.props.customItemBorderRadius
                }, o.id))
            })) : null;
        }
    };
    n = (0, e.__decorate)([
        (0, i.inject)('gameValues', 'gameOptions'),
        i.observer
    ], n);
    var o = p;
}), d.register('2I+oO', function(a, c) {
    b(a.exports, 'LINK_ICON', function() {
        return z;
    }), b(a.exports, 'default', function() {
        return G;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('m96/N'),
        i = d('VDucS'),
        j = d('G5sHI'),
        k = d('4JvRz'),
        l = d('VCvua0'),
        m = d('5WRxN'),
        n = d('qpV7r');
    d('/jgct');
    var o = d('k8riP'),
        p = d('lf3yz'),
        q = d('Vlfxs'),
        r = d('uPP4W'),
        s = d('h99Nu'),
        t = d('PDLD/2');
    let u, v, w, x, y = a => a;
    const z = 'fas fa-link',
        A = s.default.div(u || (u = y`
  margin-top: 7px;
  margin-bottom: 7px;
  width: 100%;
  background: ${ 0 };
  border-radius: ${ 0 }px;
  color: ${ 0 };
  padding: 9px;
  box-sizing: border-box;
  box-shadow: ${ 0 };
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-weight: bold;
  font-size: 23px;
  align-items: center;
  font-family: ${ 0 };
`), a => a.backgroundColor, a => a.customBorderRadius || 3, a => a.textColor, m.default.basic, () => (0, p.mainFontName)()),
        B = s.default.div(v || (v = y`
  display: flex;
  align-items: center;
  flex: 1;
`)),
        C = s.default.div(w || (w = y`
  height: 40px;
  margin-right: 5px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ 0 };
  color: ${ 0 };
`), a => a.backgroundColor, a => a.textColor),
        D = s.default.div(x || (x = y`
  font-weight: normal;
  font-size: 15px;
`)),
        E = a => {
            let F = '';
            return a.players.forEach((c, d) => {
                F += c, d + 1 !== a.players.length && (F += ', ');
            }), F;
        };
    let F = class extends r.Component {
        render() {
            const G = this.props,
                H = this.getIcon();
            if (G.item.activePowerups.includes(o.PowerupNames.undercover) && !this.props.showHidden)
                return null;
            const {
                isPlayer: I
            } = J;
            if (I) {
                const K = J.item;
                if (K.id === (0, n.identifier)() && !this.props.showSelf)
                    return null;
                const L = this.props.theme.availableThemes.filter(J => J.name === K.theme)[0];
                L || (L.name = 'Default');
                let M = l.default.White,
                    N = l.default.Black;
                return 'Default' !== L.name && (M = L.question.background, N = L.question.text), (0, g.jsxs)(A, {
                    backgroundColor: M,
                    textColor: N,
                    customBorderRadius: this.props.customBorderRadius,
                    children: [
                        (0, g.jsxs)(B, {
                            children: [
                                (0, g.jsx)(C, {
                                    backgroundColor: L.palette[0].background,
                                    textColor: L.palette[0].text,
                                    children: (0, g.jsx)(k.default, {
                                        paddingHorizontal: 7,
                                        paddingVertical: 7,
                                        text: H ? (0, g.jsx)(i.default, {
                                            name: H
                                        }) : J.position.toString()
                                    })
                                }),
                                (0, g.jsx)('div', {
                                    onClick: this.toggleBalanceVisiblity,
                                    style: {
                                        width: 'calc(100% - 50px)',
                                        marginLeft: 7,
                                        cursor: 'pointer'
                                    },
                                    children: this.state.showingBalance ? (0, p.inThanosMode)() ? `${ K.stones } stone${ 1 === K.stones ? '' : 's' }` : (0, p.getMoney)(K.balance) : K.name
                                })
                            ]
                        }),
                        this.props.usePowerupAction && (0, g.jsx)('div', {
                            style: {
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: 15
                            },
                            children: (0, g.jsx)(h.default, {
                                type: this.canUsePowerup() ? 'primary' : 'disabled',
                                label: (0, g.jsx)(j.default, {
                                    text: this.getUseButtonText()
                                }),
                                size: 'small',
                                onClick: this.attack
                            })
                        })
                    ]
                });
            }
            const K = J.item;
            return K.id !== J.user.team.id || this.props.showSelf ? (0, g.jsxs)(A, {
                backgroundColor: l.default.White,
                textColor: l.default.Black,
                customBorderRadius: this.props.customBorderRadius,
                children: [
                    (0, g.jsxs)(B, {
                        children: [
                            (0, g.jsx)(C, {
                                backgroundColor: (0, p.getTeamColor)(K.id),
                                textColor: l.default.White,
                                children: (0, g.jsx)(k.default, {
                                    paddingHorizontal: 7,
                                    paddingVertical: 7,
                                    text: H ? (0, g.jsx)(i.default, {
                                        name: H
                                    }) : J.position.toString()
                                })
                            }),
                            (0, g.jsxs)('div', {
                                onClick: this.toggleBalanceVisiblity,
                                style: {
                                    width: 'calc(100% - 50px)',
                                    marginLeft: 7,
                                    cursor: 'pointer'
                                },
                                children: [
                                    (0, g.jsx)('div', {
                                        children: this.state.showingBalance ? (0, p.getMoney)(K.balance) : (0, g.jsx)(j.default, {
                                            text: (0, p.getTeamName)(K.id)
                                        })
                                    }),
                                    (0, g.jsx)(D, {
                                        children: E(K)
                                    })
                                ]
                            })
                        ]
                    }),
                    this.props.usePowerupAction && (0, g.jsx)('div', {
                        style: {
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: 15
                        },
                        children: (0, g.jsx)(h.default, {
                            type: this.canUsePowerup() ? 'primary' : 'disabled',
                            label: (0, g.jsx)(j.default, {
                                text: this.getUseButtonText()
                            }),
                            size: 'small',
                            onClick: this.attack
                        })
                    })
                ]
            }) : null;
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                showingBalance: !1
            }), (0, e.default)(this, 'canUsePowerup', () => {
                const G = this.props.navigation.attackModal.powerup;
                return !G || (G === o.PowerupNames.giving || !this.props.item.activePowerups.includes(o.PowerupNames.shield) && (G !== o.PowerupNames.link || !this.props.item.activePowerups.includes(o.PowerupNames.link)));
            }), (0, e.default)(this, 'getIcon', () => {
                const G = this.props.item.activePowerups;
                if (G.includes(o.PowerupNames.shield))
                    return 'fas fa-shield-alt';
                if (G.includes(o.PowerupNames.link))
                    return z;
                if (this.props.isPlayer)
                    return null;
                {
                    const H = this.props.item;
                    return (0, p.getTeamIcon)(H.id);
                }
            }), (0, e.default)(this, 'getUseButtonText', () => {
                const G = this.props.navigation.attackModal.powerup;
                return G === o.PowerupNames.link ? 'Link' : G === o.PowerupNames.giving ? 'Give' : 'Use';
            }), (0, e.default)(this, 'attack', () => {
                if (this.props.isPlayer) {
                    const G = this.props.item;
                    (0, p.attack)(G.id, G.name);
                } else {
                    const H = this.props.item;
                    (0, p.attack)(H.id, (0, p.getTeamName)(H.id));
                }
                this.props.parentAction && this.props.parentAction();
            }), (0, e.default)(this, 'toggleBalanceVisiblity', () => {
                ((0, p.inThanosMode)() || !(0, p.inHiddenMode)() && ((0, p.inTeamMode)() || this.props.gameValues.gameStatus !== t.GameStatus.gameplay)) && this.setState({
                    showingBalance: !this.state.showingBalance
                });
            });
        }
    };
    F = (0, f.__decorate)([
        (0, q.inject)('engine', 'user', 'theme', 'gameOptions', 'navigation', 'gameValues'),
        q.observer
    ], F);
    var G = H;
}), d.register('VDucS', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W');
    class g extends f.Component {
        render() {
            return (0, e.jsx)('i', {
                className: this.props.name,
                style: this.props.style
            });
        }
    }
}), d.register('G5sHI', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('uPP4W'),
        h = d('Vlfxs'),
        i = d('qLBdK');
    let j = class extends g.Component {
        componentDidUpdate(a) {
            a.text !== this.props.text && (this.setState({
                text: this.props.text
            }), this.onTranslate());
        }
        componentDidMount() {
            this.onTranslate();
        }
        onTranslate() {
            if ('en' !== this.props.gameOptions.language && !this.props.text.includes(this.props.disableIfContains))
                return this.props.translations[this.props.text] ? this.setState({
                    text: this.props.translations[this.props.text]
                }) : void this.requestTranslation().then(a => {
                    this.props.translations[this.props.text] = a, this.setState({
                        text: a
                    });
                }).catch();
        }
        render() {
            return this.buildString();
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                text: this.props.text
            }), (0, e.default)(this, 'buildString', () => {
                let k = this.state.text;
                return this.props.suffix && (k += this.props.suffix), k;
            }), (0, e.default)(this, 'requestTranslation', async () => {
                try {
                    return (await i.default.post('/api/translate', {
                        to: this.props.gameOptions.language,
                        text: this.props.text
                    })).data;
                } catch (a) {
                    return this.props.text;
                }
            });
        }
    };
    j = (0, f.__decorate)([
        (0, h.inject)('translations', 'gameOptions'),
        h.observer
    ], j);
    var k = l;
}), d.register('qpV7r', function(a, c) {
    b(a.exports, 'identifier', function() {
        return r;
    }), b(a.exports, 'default', function() {
        return s;
    });
    var e = d('OdbUb'),
        f = d('UNaEe'),
        g = d('lf3yz'),
        h = d('3kESF'),
        i = d('zlZlL'),
        j = d('rlYg5'),
        k = d('EaRxf'),
        l = d('HWMeU'),
        m = d('6yrsF'),
        n = d('knaZJ'),
        o = d('aOImO'),
        p = d('jh162'),
        q = d('PjB0f');
    const r = () => {
        var s, t;
        return (null === j.default || void 0 === j.default || null === (s = j.default.engine) || void 0 === s || null === (t = s.client) || void 0 === t ? void 0 : t.id) || '';
    };
    var s = a => {
        j.default.engine.game = a;
        const t = n.default.map(a => a());
        a.onMessage.add((a, c) => {
            const u = {
                action: a,
                payload: c
            };
            if (u.action !== k.default.stateUpdate) {
                if (u.action === k.default.playerJoinsStaticState) {
                    const v = w;
                    return j.default.gameOptions.setGameOptions(v.gameOptions), j.default.upgrades.upgrades.replace(v.upgrades), j.default.theme.availableThemes.replace(v.themes), j.default.powerups.availablePowerups.replace(v.powerups), v.news && j.default.gameValues.news.replace(v.news), v.gameOptions.specialGameType.includes(h.DEFENDING_HOMEBASE) && (j.default.navigation.currentShopTab = i.ShopTab.defendingHomebase), void(v.gameOptions.specialGameType.includes(h.PARDY) && (0, q.loadFont)('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap'));
                }
                if (u.action === k.default.updatedPlayerLeaderboard) {
                    let v = 1;
                    return (0, e.leaderboardSorter)(u.payload.items).forEach((t, c) => {
                        t.id === r() && (v = c + 1);
                    }), j.default.user.place = v, void j.default.gameValues.players.replace(u.payload.items);
                }
                if (u.action === k.default.updatedTeamLeaderboard) {
                    let v = 1;
                    return (0, e.leaderboardSorter)(u.payload.items).forEach((t, c) => {
                        t.id === j.default.user.team.id && (v = c + 1);
                    }), j.default.user.place = v, void j.default.gameValues.teams.replace(u.payload.items);
                }
                if (u.action !== k.default.toast)
                    if (u.action !== k.default.nonDismissMessage)
                        if (u.action !== k.default.thanosResults)
                            if (u.action === k.default.balanceFlashRed && (j.default.balance.customColor = '#f44336', f.drain.play(), setTimeout(() => j.default.balance.customColor = '', 1000)), u.action !== k.default.deflected)
                                if (u.action !== k.default.enablePowerupRNGAnimation) {
                                    if (u.action === k.default.availableHomebaseUpgrades)
                                        return j.default.navigation.currentShopTab = i.ShopTab.defendingHomebase, void j.default.upgrades.homebaseUpgades.replace(u.payload);
                                    if (u.action !== k.default.defendingHomebaseStatus)
                                        if (u.action !== k.default.defendingHomebaseResults) {
                                            if (u.action === k.default.playAgainNewGameCode)
                                                return j.default.user.groupMemberId || localStorage.setItem(o.LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME, j.default.user.name), void(window.location.href = `/join?gc=${ u.payload }`);
                                            if (u.action === k.default.availableLavaUpgrades)
                                                return j.default.navigation.currentShopTab = i.ShopTab.lava, void j.default.upgrades.lavaUpgrades.replace(c);
                                            if (u.action !== k.default.lavaResults) {
                                                if (u.action !== k.default.successModalInfo)
                                                    u.action !== k.default.imposter.people ? u.action !== k.default.draw.line ? u.action !== k.default.draw.feedItem ? u.action !== k.default.draw.clear || (j.default.draw.shouldClearCanvas = !0) : j.default.draw.latestFeedItem = c : j.default.draw.latestLine = c : j.default.imposter.epl = (0, p.EncryptData)(c, 'impostor');
                                                else if (j.default.ui.successModalInfo = c, j.default.ui.showingSuccessModal = !0, c.sound) {
                                                    new(0, m.Howl)({
                                                        src: [(0, g.getAssetPath)(c.sound)]
                                                    }).play();
                                                }
                                            } else
                                                j.default.entities.lava = c;
                                        } else
                                            j.default.gameValues.defendingHomebaseResults = u.payload;
                                    else
                                        j.default.entities.defendingHomebase = u.payload;
                                } else
                                    j.default.gameOptions.enablePowerupRNGAnimation = !0;
                else
                    f.bounce.play();
                else
                    j.default.gameValues.thanosValues = u.payload;
                else
                    (0, g.nonDismissMessage)(u.payload.message, u.payload.title);
                else
                    (0, g.toast)(u.payload.message, u.payload);
            } else
                (0, l.default)({
                    type: c.type,
                    value: c.value
                }, t);
        });
    };
}), d.register('EaRxf', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = {
        hostClientIdRecieved: 'HOST_CLIENT_ID_RECIEVED',
        updatedPlayerLeaderboard: 'UPDATED_PLAYER_LEADERBOARD',
        updatedTeamLeaderboard: 'UPDATED_TEAM_LEADERBOARD',
        newActivityItem: 'NEW_ACTIVITY_ITEM',
        toast: 'TOAST',
        newCollabQuestion: 'NEW_COLLAB_QUESTION',
        collabQuestionRejected: 'COLLAB_QUESTION_REJECTED',
        newPlayerStats: 'NEW_PLAYER_STATS',
        specialSongPlayed: 'SPECIAL_SONG_PLAYED',
        nonDismissMessage: 'NON_DISMISS_MESSAGE',
        hostStaticState: 'HOST_STATIC_STATE',
        playerJoinsStaticState: 'PLAYER_JOINS_STATIC_STATE',
        stateUpdate: 'STATE_UPDATE',
        clapCount: 'CLAP_COUNT',
        thanosResults: 'THANOS_RESULTS',
        balanceFlashRed: 'BALANCE_FLASH_RED',
        deflected: 'DEFLECTED',
        enablePowerupRNGAnimation: 'ENABLE_POWERUP_RNG_ANIMATION',
        defendingHomebases: 'DEFENDING_HOMEBASES',
        availableHomebaseUpgrades: 'AVAILABLE_HOMEBASE_UPGRADES',
        defendingHomebaseStatus: 'DEFENDING_HOMEBASE_STATUS',
        defendingHomebaseResults: 'DEFENDING_HOMEBASE_RESULTS',
        viewableGameCode: 'VIEWABLE_GAME_CODE',
        playAgainIntentId: 'PLAY_AGAIN_INTENT_ID',
        playAgainNewGameCode: 'PLAY_AGAIN_NEW_GAME_CODE',
        errorModal: 'ERROR_MODAL',
        setReportId: 'SET_REPORT_ID',
        availableLavaUpgrades: 'AVAILABLE_LAVA_UPGRADES',
        lavaResults: 'LAVA_RESULTS',
        successModalInfo: 'SUCCESS_MODAL_INFO',
        imposter: {
            people: 'IMPOSTER_MODE_PEOPLE',
            meetingResults: 'IMPOSTER_MODE_MEETING_RESULTS',
            quickStats: 'IMPOSTER_MODE_QUICK_STATS',
            callAMeeting: 'IMPOSTER_MODE_CALL_A_MEETING',
            voteCount: 'IMPOSTER_MODE_VOTE_IN_COUNT'
        },
        draw: {
            line: 'DRAW_MODE_LINE',
            feedItem: 'DRAW_MODE_FEED_ITEM',
            personCount: 'DRAW_MODE_PERSON_COUNT',
            pointAdditions: 'DRAW_MODE_POINT_ADDITIONS',
            clear: 'DRAW_MODE_CLEAR'
        }
    };
}), d.register('HWMeU', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('73Q94'),
        f = d('rlYg5'),
        g = d('Qm3Sw'),
        h = d('HwB43'),
        i = d('hBCh2');
    let j = !1;
    var k = (a, b) => {
        const {
            type: l,
            value: m
        } = n;
        if (l === h.default.balance)
            return f.default.balance.balance = m, void(m > f.default.balance.maxBalance && (f.default.balance.maxBalance = m));
        if (l === h.default.balanceChange)
            return f.default.balance.balanceChangeIfCorrect = m.balanceChangeIfCorrect, void(f.default.balance.balanceChangeIfIncorrect = m.balanceChangeIfIncorrect);
        if (l === h.default.gameQuestions)
            return void f.default.questions.setQuestions(m);
        if (l === h.default.playerQuestionList)
            return f.default.questions.questionList.replace(m.questionList), void(f.default.questions.ceq && !f.default.questions.transitioningToNextQuestion || f.default.questions.setCurrentQuestion(m.questionIndex));
        if (l === h.default.playerQuestionListIndex)
            return void(f.default.questions.transitioningToNextQuestion && f.default.questions.setCurrentQuestion(m));
        if (l === h.default.purchasedPowerups)
            return void f.default.powerups.purchasedPowerups.replace(m);
        if (l === h.default.usedPowerups)
            return void f.default.powerups.usedPowerups.replace(m);
        if (l === h.default.personalActivePowerups)
            return void f.default.powerups.personalActivePowerups.replace(m);
        if (l === h.default.teamActivePowerups)
            return void f.default.powerups.teamActivePowerups.replace(m);
        if (l === h.default.name)
            return 'Player [Still Entering Name]' === m ? void(f.default.engine.hasLeftRoom && window.location.reload()) : void(f.default.user.name = m);
        if (l === h.default.group)
            return f.default.user.groupId = m.groupId, void(f.default.user.groupMemberId = m.groupMemberId);
        if (l === h.default.theme) {
            const o = p,
                q = f.default.theme.availableThemes.filter(q => q && q.name && q.name === o)[0];
            if (!q)
                return;
            return f.default.theme.themeName = o, f.default.theme.theme.defaultBackground = q.question.background, f.default.theme.theme.question = q.question, f.default.theme.theme.palette = q.palette, void('Default' === o ? (f.default.theme.theme.response.shop = g.defaultShopColor, f.default.theme.theme.response.continue = g.defaultContinueColor) : (f.default.theme.theme.response.shop = q.palette[0], f.default.theme.theme.response.continue = q.palette[1]));
        }
        if (l === h.default.purchasedThemes)
            return void f.default.theme.ownedThemes.replace(m);
        if (l === h.default.upgradeLevels)
            return void(f.default.upgrades.upgradeLevels = m);
        if (l === h.default.upgradePricingDiscount)
            return void(f.default.upgrades.upgradePricingDiscount = m);
        if (l === h.default.gameStatus)
            return f.default.gameValues.gameStatus = m, void(j || (j = !0, (0, i.default)()));
        if (l === h.default.incomeMultiplier)
            return void(f.default.balance.incomeMultiplier = m);
        if (l === h.default.linkInfo)
            return void(f.default.powerups.linkPartnerName = m.name);
        if (l === h.default.teamInfo)
            return void(f.default.user.team = m);
        if (l === h.default.maxBalance)
            return void(f.default.balance.maxBalance = m);
        if (l === h.default.disabledPowerups)
            return void f.default.powerups.disabledPowerups.replace(m);
        if (l === h.default.fullScreenPlayerBlack)
            return void(f.default.ui.fullBlackScreen = m.on);
        if (l === h.default.screenAttack)
            return m && (f.default.powerups.screenAttack.attackerName = m.attackerName, f.default.powerups.screenAttack.powerupName = m.powerupName, f.default.powerups.screenAttack.fullScreen = m.fullScreen), void(0, e.onScreenAttackChanged)();
        if (l === h.default.streakAmount)
            return void(f.default.balance.streakAmount = m);
        if (l === h.default.appliedPowerups)
            return void f.default.powerups.personalAppliedPowerups.replace(m);
        if (l === h.default.teamAppliedPowerups)
            return void f.default.powerups.teamAppliedPowerups.replace(m);
        if (l === h.default.imposter.status)
            return f.default.imposter.status = m, void(f.default.imposter.currentShopItemModalVisible = !1);
        if (l === h.default.imposter.shopItems)
            return void f.default.imposter.shopItems.replace(m);
        if (l === h.default.imposter.person)
            return void(f.default.imposter.me = m);
        if (l === h.default.imposter.remainingInvestigations)
            return void(f.default.imposter.investigationsLeft = m);
        if (l === h.default.imposter.remainingMeetings)
            return void(f.default.imposter.meetingsLeft = m);
        if (l === h.default.imposter.remainingImposters)
            return void(f.default.imposter.impostersLeft = m);
        if (l === h.default.questionsAnsweredCorrectly)
            return void(f.default.questions.questionsAnsweredCorrectly = m);
        if (l === h.default.questionsAnsweredIncorrectly)
            return void(f.default.questions.questionsAnsweredIncorrectly = m);
        const o = b.find(b => b.key === n.type);
        o && o.listener.applyPatches(n.value);
    };
}), d.register('73Q94', function(a, c) {
    b(a.exports, 'backgroundImage', function() {
        return k;
    }), b(a.exports, 'onAttack', function() {
        return l;
    }), b(a.exports, 'getVerb', function() {
        return m;
    }), b(a.exports, 'getTitle', function() {
        return n;
    }), b(a.exports, 'getIconColor', function() {
        return o;
    }), b(a.exports, 'getIcon', function() {
        return p;
    }), b(a.exports, 'onScreenAttackChanged', function() {
        return q;
    });
    var e = d('VCvua0');
    d('/jgct');
    var f = d('k8riP'),
        g = d('UNaEe'),
        h = d('lf3yz'),
        i = d('rlYg5');
    const j = () => i.default && i.default.powerups && i.default.powerups.screenAttack && i.default.powerups.screenAttack.powerupName ? i.default.powerups.screenAttack.powerupName : '',
        k = () => {
            const l = j();
            return l === f.PowerupNames.icer ? (0, h.getAssetPath)('iced.jpeg') : l === f.PowerupNames.pumpkinPie ? (0, h.getAssetPath)('pied.jpeg') : '';
        },
        l = () => {
            const m = j();
            m === f.PowerupNames.icer && g.freeze.play(), m === f.PowerupNames.pumpkinPie && g.pieSlice.play();
        },
        m = () => {
            const n = j();
            return n === f.PowerupNames.icer ? 'Frozen' : n === f.PowerupNames.pumpkinPie ? 'Pied' : '';
        },
        n = () => {
            const o = j();
            return o === f.PowerupNames.icer ? 'You\'re Frozen!' : o === f.PowerupNames.pumpkinPie ? 'You\'ve been Pied!' : '';
        },
        o = () => {
            const p = j();
            return p === f.PowerupNames.icer ? e.default.White : p === f.PowerupNames.pumpkinPie ? '#e65100' : e.default.White;
        },
        p = () => {
            const q = j();
            return q === f.PowerupNames.icer ? 'far fa-snowflake' : q === f.PowerupNames.pumpkinPie ? 'far fa-pie' : '';
        },
        q = () => {
            const r = i.default.powerups.screenAttack;
            r.powerupName && r.powerupName === f.PowerupNames.blurredScreen ? r.powerupName === f.PowerupNames.blurredScreen && (i.default.ui.blurredScreen = !0) : i.default.ui.blurredScreen && (i.default.ui.blurredScreen = !1);
        };
}), d.register('/jgct', function(a, c) {
    b(a.exports, 'PowerupCategory', function() {
        return d('k8riP').PowerupCategory;
    }), b(a.exports, 'PowerupNames', function() {
        return d('k8riP').PowerupNames;
    }), d('k8riP');
}), d.register('k8riP', function(a, c) {
    b(a.exports, 'PowerupNames', function() {
        return d;
    }), b(a.exports, 'PowerupCategory', function() {
        return f;
    });
    const e = {
        secondChance: 'Second Chance',
        fiftyFifty: 'Fifty Fifty',
        subtractor: 'Subtractor',
        reducer: 'Reducer',
        shield: 'Shield',
        discounter: 'Discounter',
        miniBonus: 'Mini Bonus',
        megaBonus: 'Mega Bonus',
        spiderWeb: 'Spider Web',
        trickOrTreat: 'Trick Or Treat',
        pumpkinPie: 'Pumpkin Pie',
        icer: 'Icer',
        fivePercentBot: '5 Percent Bot',
        giving: 'Giving',
        repurchasePowerups: 'repurchasePowerups',
        link: 'Link',
        deflector: 'Deflector',
        undercover: 'Undercover',
        clapMultiplier: 'Clap Multiplier',
        blurredScreen: 'Blurred Screen',
        quadUpgrade: 'Quad Upgrade',
        streakSaver: 'Streak Saver',
        cashConcealer: 'Cash Concealer',
        outnumbered: 'outnumbered',
        minuteMoreEarnings: 'minuteMoreEarnings',
        firstStone: 'Reality Stone',
        secondStone: 'Soul Stone',
        thirdStone: 'Mind Stone',
        fourthStone: 'Space Stone',
        fifthStone: 'Time Stone',
        sixthStone: 'Power Stone',
        lavaInstantBuild: 'Lava Instant Build',
        lavaPauseGrowth: 'Lava Pause Growth'
    };
    let f;
    (f || (f = {})).specialSound = 'specialSound';
}), d.register('HwB43', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = {
        playerQuestionList: 'PLAYER_QUESTION_LIST',
        playerQuestionListIndex: 'PLAYER_QUESTION_LIST_INDEX',
        gameQuestions: 'GAME_QUESTIONS',
        purchasedPowerups: 'PURCHASED_POWERUPS',
        usedPowerups: 'USED_POWERUPS',
        personalActivePowerups: 'PERSONAL_ACTIVE_POWERUPS',
        balance: 'BALANCE',
        balanceChange: 'BALANCE_CHANGE',
        name: 'NAME',
        group: 'GROUP',
        theme: 'THEME',
        purchasedThemes: 'PURCHASED_THEMES',
        upgradeLevels: 'UPGRADE_LEVELS',
        upgradePricingDiscount: 'UPGRADE_PRICING_DISCOUNT',
        gameStatus: 'GAME_STATUS',
        incomeMultiplier: 'INCOME_MULTIPLIER',
        teamActivePowerups: 'TEAM_ACTIVE_POWERUPS',
        linkInfo: 'LINK_INFO',
        teamInfo: 'TEAM_INFO',
        maxBalance: 'MAX_BALANCE',
        disabledPowerups: 'DISABLED_POWERUPS',
        fullScreenPlayerBlack: 'FULL_SCREEN_PLAYER_BLACK',
        screenAttack: 'SCREEN_ATTACK',
        streakAmount: 'STREAK_AMOUNT',
        appliedPowerups: 'APPLIED_POWERUPS',
        teamAppliedPowerups: 'TEAM_APPLIED_POWERUPS',
        questionsAnsweredCorrectly: 'QUESTIONS_ANSWERED_CORRECTLY',
        questionsAnsweredIncorrectly: 'QUESTIONS_ANSWERED_INCORRECTLY',
        imposter: {
            status: 'IMPOSTER_MODE_STATUS',
            remainingInvestigations: 'IMPOSTER_MODE_REMAINING_INVESTIGATIONS',
            remainingMeetings: 'IMPOSTER_MODE_REMAINING_MEETINGS',
            remainingImposters: 'IMPOSTER_MODE_REMAINING_IMPOSTERS',
            person: 'IMPOSTER_MODE_PERSON',
            shopItems: 'IMPOSTER_MODE_SHOP_ITEMS'
        },
        draw: {
            round: 'DRAW_MODE_ROUND',
            person: 'DRAW_MODE_PERSON',
            status: 'DRAW_MODE_STATUS'
        },
        pardy: {
            state: 'PARDY_MODE_STATE',
            person: 'PARDY_MODE_PERSON'
        }
    };
}), d.register('hBCh2', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('PDLD/2'),
        f = d('M8YtH'),
        g = d('lf3yz'),
        h = d('rlYg5');
    var i = () => {
        h.default.gameValues.gameStatus !== e.GameStatus.results ? h.default.gameValues.gameStatus !== e.GameStatus.teams ? h.default.gameValues.gameStatus !== e.GameStatus.gameplay ? (0, g.changeRoute)(f.default.waiting) : (0, g.startGame)() : (0, g.changeRoute)(f.default.team) : (0, g.changeRoute)(f.default.gameOver);
    };
}), d.register('knaZJ', function(a, c) {
    b(a.exports, 'default', function() {
        return j;
    }), d('Wcxpx');
    var e = d('Qhnnx'),
        f = d('MbB/t'),
        g = d('K5oOP');
    d('af2qS');
    var h = d('dsM7r'),
        i = d('9kY2S');
    var j = [
        e.default,
        f.default,
        g.default,
        h.default,
        i.default
    ];
}), d.register('Wcxpx', function(a, c) {
    b(a.exports, 'Round', function() {
        return d('Qhnnx').default;
    }), b(a.exports, 'Person', function() {
        return d('MbB/t').default;
    }), b(a.exports, 'Status', function() {
        return d('K5oOP').default;
    });
    d('Qhnnx'), d('MbB/t'), d('K5oOP');
}), d.register('Qhnnx', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('rlYg5'),
        f = d('yaVwU'),
        g = d('HwB43');
    const h = [
        'secondsLeft',
        'term',
        'drawer',
        'drawingBase64',
        'termOptions',
        'revealText'
    ];
    var i = () => {
        const j = new(0, f.default)();
        return h.forEach(b => {
            j.onPropChange(b, j => {
                e.default.draw.round[b] = j;
            });
        }), {
            key: g.default.draw.round,
            listener: j
        };
    };
}), d.register('MbB/t', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('rlYg5'),
        f = d('yaVwU'),
        g = d('HwB43');
    const h = [
        'answeredCorrectly',
        'lastRound',
        'role'
    ];
    var i = () => {
        const j = new(0, f.default)();
        return h.forEach(b => {
            j.onPropChange(b, j => {
                e.default.draw.me[b] = j;
            });
        }), {
            key: g.default.draw.person,
            listener: j
        };
    };
}), d.register('K5oOP', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('rlYg5'),
        f = d('yaVwU'),
        g = d('HwB43');
    var h = () => {
        const i = new(0, f.default)();
        return i.onPropChange('value', i => {
            e.default.draw.status = i;
        }), {
            key: g.default.draw.status,
            listener: i
        };
    };
}), d.register('af2qS', function(a, c) {
    b(a.exports, 'PardyState', function() {
        return d('dsM7r').default;
    }), b(a.exports, 'PardyPerson', function() {
        return d('9kY2S').default;
    });
    d('dsM7r'), d('9kY2S');
}), d.register('dsM7r', function(a, c) {
    b(a.exports, 'default', function() {
        return l;
    });
    var e = d('rlYg5'),
        f = d('yaVwU'),
        g = d('4/f+U'),
        h = d('lf3yz'),
        i = d('HwB43');
    const j = [
            'screen',
            'questionScreen',
            'questionStatus',
            'powers',
            'currentQuestionId',
            'tips',
            'answerLockedInWittyMessages',
            'correctWittyMessages',
            'incorrectWittyMessages'
        ],
        k = [
            'powers',
            'tips',
            'answerLockedInWittyMessages',
            'correctWittyMessages',
            'incorrectWittyMessages'
        ];
    var l = () => {
        const m = new(0, f.default)();
        return j.forEach(b => {
            m.onPropChange(b, m => {
                if (k.includes(b))
                    e.default.pardy[b].replace(m);
                else if ('currentQuestionId' === b) {
                    const n = (0, h.questionLocation)().find(n => n._id === m);
                    n && (e.default.pardy.currentQuestion = {
                        ...n,
                        answers: (0, g.shuffle)(n.answers)
                    });
                } else
                    e.default.pardy[b] = m;
            });
        }), {
            key: i.default.pardy.state,
            listener: m
        };
    };
}), d.register('9kY2S', function(a, c) {
    b(a.exports, 'default', function() {
        return j;
    });
    var e = d('rlYg5'),
        f = d('yaVwU'),
        g = d('HwB43');
    const h = [
            'answerResponseItems',
            'powerOptions'
        ],
        i = [
            'power',
            'answered',
            'answeredCorrectly',
            'answerResponseItems',
            'maxBet',
            'currentBet',
            'powerOptions'
        ];
    var j = () => {
        const k = new(0, f.default)();
        return i.forEach(b => {
            k.onPropChange(b, k => {
                h.includes(b) ? e.default.pardy[b].replace(k) : e.default.pardy[b] = k;
            });
        }), {
            key: g.default.pardy.person,
            listener: k
        };
    };
}), d.register('hNywk', function(a, c) {
    b(a.exports, 'Preview', function() {
        return o;
    }), b(a.exports, 'default', function() {
        return q;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('GJN+q'),
        h = d('VDucS'),
        i = d('G5sHI'),
        j = d('lf3yz'),
        k = d('Vlfxs'),
        l = d('uPP4W');
    let m;
    const n = d('h99Nu').default.div(m || (m = (a => a)`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ 0 };
  color: ${ 0 };
  margin-right: 5px;
`), a => a.colors.background, a => a.colors.text),
        o = a => (0, f.jsx)(g.default, {
            placement: 'right',
            title: a.name ? (0, f.jsx)('div', {
                style: {
                    fontSize: 15
                },
                children: (0, f.jsx)(i.default, {
                    text: a.name + ' active'
                })
            }) : null,
            children: (0, f.jsx)(n, {
                colors: a.color,
                children: (0, f.jsx)(h.default, {
                    name: a.icon
                })
            })
        });
    let p = class extends l.Component {
        render() {
            const q = this.props.powerups.availablePowerups.filter(q => this.props.powerups.activePowerups.includes(q.name));
            return (0, f.jsx)('div', {
                style: {
                    display: 'flex'
                },
                children: q.map(q => (0, f.jsx)(o, {
                    name: (0, j.getPowerupName)(q),
                    icon: q.icon,
                    color: q.color
                }, q.name))
            });
        }
    };
    p = (0, e.__decorate)([
        (0, k.inject)('powerups'),
        k.observer
    ], p);
    var q = r;
}), d.register('0wJUo', function(a, c) {
    b(a.exports, 'default', function() {
        return v;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('uPP4W'),
        i = d('h99Nu'),
        j = d('Vlfxs'),
        k = d('M8YtH'),
        l = d('b9Bct'),
        m = d('x+Bwe'),
        n = d('rWLtZ'),
        o = d('lf3yz'),
        p = d('bAH0K');
    let q, r, s, t = a => a,
        u = class extends h.Component {
            render() {
                if ((0, o.inImposterMode)() || (0, o.inPardyMode)())
                    return null;
                const {
                    balance: v
                } = this.props, w = this.canShow(), x = (0, n.default)({
                    moneyPerQuestion: this.findUpgradeValue(p.upgradeNames.moneyPerQuestion),
                    streakBonus: this.findUpgradeValue(p.upgradeNames.streakBonus),
                    multiplier: this.findUpgradeValue(p.upgradeNames.multiplier),
                    incomeMultiplier: v.incomeMultiplier,
                    activePowerups: this.props.powerups.activePowerups
                });
                return (0, g.jsx)(x, {
                    animate: {
                        height: w ? 'auto' : 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    children: (0, g.jsx)(y, {
                        children: (0, g.jsx)(z, {
                            initial: {
                                x: 20
                            },
                            animate: {
                                x: this.state.xValue ? 20 - this.state.xValue : 20
                            },
                            transition: {
                                ease: 'anticipate',
                                duration: 0.6
                            },
                            children: x.map((w, x) => (0, g.jsx)(m.default, {
                                index: x,
                                amount: this.props.balance.streakAmount === x ? Math.max(w, v.balanceChangeIfCorrect) : w,
                                onX: this.changeX,
                                selected: this.props.balance.streakAmount === x,
                                hideArrow: x >= 99
                            }, `money-item-${ x }`))
                        })
                    })
                });
            }
            constructor(...a) {
                super(...a), (0, e.default)(this, 'state', {
                    xValue: 0
                }), (0, e.default)(this, 'changeX', a => this.setState({
                    xValue: a
                })), (0, e.default)(this, 'findUpgradeValue', a => {
                    const v = this.props.upgrades.upgrades.find(v => v.name === a);
                    if (!v)
                        return 1;
                    const w = v.levels[this.props.upgrades.upgradeLevels[(0, o.upgradeNameToKey)(a)] - 1];
                    return w ? w.value : 1;
                }), (0, e.default)(this, 'canShow', () => {
                    const {
                        navigation: {
                            currentRoute: v
                        },
                        upgrades: w
                    } = this.props;
                    return !!w.upgrades.length && (v === k.default.questions || v === k.default.upgrade);
                });
            }
        };
    u = (0, f.__decorate)([
        (0, j.inject)('navigation', 'balance', 'upgrades', 'powerups'),
        j.observer
    ], u);
    var v = w;
    const x = (0, i.default)(l.motion.div)(q || (q = t`
  width: 100%;
  background: #4252af;
  overflow: hidden;
`)),
        y = i.default.div(r || (r = t`
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 7.5px;
  width: 100%;
`)),
        z = (0, i.default)(l.motion.div)(s || (s = t`
  display: flex;
  align-items: center;
`));
}), d.register('x+Bwe', function(a, c) {
    b(a.exports, 'default', function() {
        return n;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('VDucS'),
        i = d('lf3yz');
    let j, k, l, m = a => a;
    var n = a => {
        const o = f.useRef(),
            p = `bonus-item-index-${ a.index }`;
        return f.useEffect(() => {
            if (a.selected) {
                const q = document.getElementById(p);
                q && a.onX(q.offsetLeft);
            }
        }, [
            a.selected,
            a.amount
        ]), (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(o, {
                    id: p,
                    ref: o,
                    children: [
                        (0, e.jsx)(p, {
                            children: a.index
                        }),
                        (0, e.jsx)(q, {
                            children: (0, i.getMoney)(a.amount)
                        })
                    ]
                }),
                a.hideArrow ? null : (0, e.jsx)(h.default, {
                    style: {
                        marginRight: 30,
                        opacity: 0.5
                    },
                    name: 'fas fa-long-arrow-right'
                })
            ]
        });
    };
    const o = g.default.div(j || (j = m`
  margin-right: 30px;
`)),
        p = g.default.div(k || (k = m`
  font-size: 11px;
  margin-bottom: 2px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`)),
        q = g.default.div(l || (l = m`
  padding: 8px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
`));
}), d.register('rWLtZ', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    }), d('/jgct');
    var e = d('k8riP');
    var f = a => {
        const {
            moneyPerQuestion: g,
            streakBonus: h,
            multiplier: i,
            incomeMultiplier: j,
            activePowerups: k
        } = l, m = k.includes(e.PowerupNames.minuteMoreEarnings);
        return Array.from(Array(100).keys()).map((l, e) => {
            let n = o;
            return n += h * e, n *= i, n *= j, m && (n *= 2), Math.round(n);
        });
    };
}), d.register('c7n5p', function(a, f) {
    b(a.exports, 'default', function() {
        return n;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('TjlPk'),
        i = d('gn5ep'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('lf3yz');
    let m = class extends k.Component {
        render() {
            return (0, l.inImposterMode)() ? (0, g.jsx)(h.default, {
                onClick: this.open,
                color: 'inherit',
                'aria-label': 'notes',
                children: (0, g.jsx)(c(i), {})
            }) : null;
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'open', () => {
                this.props.imposter.noteDrawerOpen = !0;
            });
        }
    };
    m = (0, f.__decorate)([
        (0, j.inject)('imposter'),
        j.observer
    ], m);
    var n = o;
}), d.register('gn5ep', function(a, b) {
    var e = d('FV1v91');
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.default = void 0;
    var f = e(d('uPP4W')),
        g = (0, e(d('wuu0l')).default)(f.default.createElement('path', {
            d: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'
        }), 'Description');
    a.exports.default = g;
}), d.register('UkIQw', function(a, c) {
    b(a.exports, 'default', function() {
        return B;
    });
    var e = d('8kSQZ'),
        f = d('anS6W'),
        g = d('HKXIy'),
        h = d('sUbB5'),
        i = d('HB3Xf'),
        j = d('6sbR6'),
        k = d('TKGwG'),
        l = d('mteAB'),
        m = d('145Dm'),
        n = d('PTbXe'),
        o = d('G5sHI'),
        p = d('1VYt0'),
        q = d('M8YtH'),
        r = d('lf3yz'),
        s = d('Vlfxs'),
        t = d('uPP4W'),
        u = d('ZGrtJ'),
        v = d('GFeZB'),
        w = d('kiCuj'),
        x = d('i0MGm'),
        y = d('Z24/y'),
        z = d('sluR5'),
        A = d('xxcnb');
    var B = (0, s.observer)(() => {
        var C;
        const {
            navigation: D,
            user: E,
            questions: {
                lockedViewingCorrectAnswer: F
            }
        } = t.useContext(A.default), G = H, I = () => (0, r.toggleDrawer)(!1), J = D.drawerOpen;
        return p.DISABLED_PATHS.includes(D.currentRoute) ? null : (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(v.default, {}),
                (0, e.jsx)(f.default, {
                    open: J,
                    onClose: I,
                    children: (0, e.jsxs)('div', {
                        className: 'flex flex-column maxHeight',
                        style: {
                            width: '70vw',
                            maxWidth: 300
                        },
                        children: [
                            (0, e.jsx)('div', {
                                className: 'maxWidth scroll-y',
                                style: {
                                    flex: 1,
                                    overflowX: 'hidden'
                                },
                                children: D.settingsOpen ? (0, e.jsx)(g.default, {
                                    style: {
                                        width: '100%'
                                    },
                                    component: 'nav',
                                    children: (0, e.jsxs)(h.default, {
                                        children: [
                                            (0, e.jsx)(j.default, {
                                                primary: (0, e.jsx)(o.default, {
                                                    text: 'Read to Me'
                                                })
                                            }),
                                            (0, e.jsx)(x.default, {
                                                checked: E.readToMeEnabled,
                                                onChange: C => {
                                                    E.readToMeEnabled = C;
                                                }
                                            })
                                        ]
                                    })
                                }) : (0, r.inPardyMode)() ? (0, e.jsx)(z.default, {}) : (0, e.jsxs)(e.Fragment, {
                                    children: [
                                        (0, e.jsxs)(g.default, {
                                            style: {
                                                width: '100%'
                                            },
                                            component: 'nav',
                                            children: [
                                                (0, e.jsx)(u.default, {}),
                                                (0, e.jsx)(z.default, {}),
                                                (0, e.jsx)(n.default, {
                                                    to: q.default.questions,
                                                    onClick: I,
                                                    disabled: G,
                                                    children: (0, e.jsxs)(h.default, {
                                                        button: !0,
                                                        children: [
                                                            (0, e.jsx)(i.default, {
                                                                children: (0, e.jsx)(l.default, {})
                                                            }),
                                                            (0, e.jsx)(j.default, {
                                                                primary: (0, e.jsx)(o.default, {
                                                                    text: 'Questions'
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                !(0, r.blockShopping)() && (0, e.jsx)(n.default, {
                                                    to: q.default.shop,
                                                    onClick: I,
                                                    disabled: G,
                                                    children: (0, e.jsxs)(h.default, {
                                                        button: !0,
                                                        children: [
                                                            (0, e.jsx)(i.default, {
                                                                children: (0, r.inImposterMode)() ? (0, e.jsx)(k.default, {}) : (0, e.jsx)(m.default, {})
                                                            }),
                                                            (0, e.jsx)(j.default, {
                                                                primary: (0, e.jsx)(o.default, {
                                                                    text: (0, r.shopName)()
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, e.jsx)(w.default, {})
                                    ]
                                })
                            }),
                            (0, e.jsx)(y.default, {
                                playerName: E.name,
                                teamName: null === (C = E.team) || void 0 === C ? void 0 : C.id,
                                onClickSettings: () => D.settingsOpen = !0,
                                onBack: () => D.settingsOpen = !1,
                                isSettingsOpen: D.settingsOpen
                            })
                        ]
                    })
                })
            ]
        });
    });
}), d.register('anS6W', function(a, c) {
    b(a.exports, 'default', function() {
        return y;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('g+YyX'),
        j = d('Ya7Gz'),
        k = d('knVNm'),
        l = d('JfS5I'),
        m = d('MobuN'),
        n = d('l/I4j'),
        o = d('zkT1P'),
        p = d('rNksQ'),
        q = {
            left: 'right',
            right: 'left',
            top: 'down',
            bottom: 'up'
        };
    var r = {
            enter: o.duration.enteringScreen,
            exit: o.duration.leavingScreen
        },
        s = g.forwardRef(function(a, b) {
            var t = a.anchor,
                u = void 0 === t ? 'left' : t,
                v = a.BackdropProps,
                w = a.children,
                x = a.classes,
                y = a.className,
                z = a.elevation,
                A = void 0 === z ? 16 : z,
                B = a.ModalProps,
                C = (B = void 0 === B ? {} : B).BackdropProps,
                D = (0, f.default)(B, ['BackdropProps']),
                E = a.onClose,
                F = a.open,
                G = void 0 !== F && F,
                H = a.PaperProps,
                I = void 0 === H ? {} : H,
                J = a.SlideProps,
                K = a.TransitionComponent,
                L = void 0 === K ? l.default : K,
                M = a.transitionDuration,
                N = void 0 === M ? r : M,
                O = a.variant,
                P = void 0 === O ? 'temporary' : O,
                Q = (0, f.default)(a, [
                    'anchor',
                    'BackdropProps',
                    'children',
                    'classes',
                    'className',
                    'elevation',
                    'ModalProps',
                    'onClose',
                    'open',
                    'PaperProps',
                    'SlideProps',
                    'TransitionComponent',
                    'transitionDuration',
                    'variant'
                ]),
                R = (0, p.default)(),
                S = g.useRef(!1);
            g.useEffect(function() {
                S.current = !0;
            }, []);
            var T = function(a, b) {
                    return 'rtl' === a.direction && function(a) {
                        return -1 !== [
                            'left',
                            'right'
                        ].indexOf(a);
                    }(b) ? q[b] : b;
                }(R, u),
                U = g.createElement(m.default, (0, e.default)({
                    elevation: 'temporary' === P ? A : 0,
                    square: !0
                }, I, {
                    className: (0, h.default)(x.paper, x['paperAnchor'.concat((0, n.default)(T))], I.className, 'temporary' !== P && x['paperAnchorDocked'.concat((0, n.default)(T))])
                }), w);
            if ('permanent' === P)
                return g.createElement('div', (0, e.default)({
                    className: (0, h.default)(x.root, x.docked, y),
                    ref: b
                }, Q), U);
            var V = g.createElement(L, (0, e.default)({
                in: G,
                direction: q[T],
                timeout: N,
                appear: S.current
            }, J), U);
            return 'persistent' === P ? g.createElement('div', (0, e.default)({
                className: (0, h.default)(x.root, x.docked, y),
                ref: b
            }, Q), V) : g.createElement(i.default, (0, e.default)({
                BackdropProps: (0, e.default)({}, v, C, {
                    transitionDuration: N
                }),
                BackdropComponent: j.default,
                className: (0, h.default)(x.root, x.modal, y),
                open: G,
                onClose: E,
                ref: b
            }, Q, D), V);
        }),
        t = (0, k.default)(function(a) {
            return {
                root: {},
                docked: {
                    flex: '0 0 auto'
                },
                paper: {
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    flex: '1 0 auto',
                    zIndex: a.zIndex.drawer,
                    WebkitOverflowScrolling: 'touch',
                    position: 'fixed',
                    top: 0,
                    outline: 0
                },
                paperAnchorLeft: {
                    left: 0,
                    right: 'auto'
                },
                paperAnchorRight: {
                    left: 'auto',
                    right: 0
                },
                paperAnchorTop: {
                    top: 0,
                    left: 0,
                    bottom: 'auto',
                    right: 0,
                    height: 'auto',
                    maxHeight: '100%'
                },
                paperAnchorBottom: {
                    top: 'auto',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    height: 'auto',
                    maxHeight: '100%'
                },
                paperAnchorDockedLeft: {
                    borderRight: '1px solid '.concat(a.palette.divider)
                },
                paperAnchorDockedTop: {
                    borderBottom: '1px solid '.concat(a.palette.divider)
                },
                paperAnchorDockedRight: {
                    borderLeft: '1px solid '.concat(a.palette.divider)
                },
                paperAnchorDockedBottom: {
                    borderTop: '1px solid '.concat(a.palette.divider)
                },
                modal: {}
            };
        }, {
            name: 'MuiDrawer',
            flip: !1
        })(s);
}), d.register('g+YyX', function(a, c) {
    b(a.exports, 'default', function() {
        return u;
    });
    var e = d('lWzbN'),
        f = d('b5p1k12'),
        g = d('uPP4W'),
        h = d('nLioi');
    d('uj3CK');
    var i = d('6g2Bo'),
        j = d('0BIkc'),
        k = d('BMa+2'),
        l = d('Mbr/s'),
        m = d('TVYCQ'),
        n = d('KsiaO'),
        o = d('Knu8L'),
        p = d('k1ZSI'),
        q = d('/RGEF'),
        r = d('uYpVh'),
        s = d('BenI7');
    var t = new(0, q.default)(),
        u = g.forwardRef(function(a, b) {
            var v = (0, j.default)(),
                w = (0, i.default)({
                    name: 'MuiModal',
                    props: (0, f.default)({}, a),
                    theme: v
                }),
                x = w.BackdropComponent,
                y = void 0 === x ? s.default : x,
                z = w.BackdropProps,
                A = w.children,
                B = w.closeAfterTransition,
                C = void 0 !== B && B,
                D = w.container,
                E = w.disableAutoFocus,
                F = void 0 !== E && E,
                G = w.disableBackdropClick,
                H = void 0 !== G && G,
                I = w.disableEnforceFocus,
                J = void 0 !== I && I,
                K = w.disableEscapeKeyDown,
                L = void 0 !== K && K,
                M = w.disablePortal,
                N = void 0 !== M && M,
                O = w.disableRestoreFocus,
                P = void 0 !== O && O,
                Q = w.disableScrollLock,
                R = void 0 !== Q && Q,
                S = w.hideBackdrop,
                T = void 0 !== S && S,
                U = w.keepMounted,
                V = void 0 !== U && U,
                W = w.manager,
                X = void 0 === W ? t : W,
                Y = w.onBackdropClick,
                Z = w.onClose,
                $ = w.onEscapeKeyDown,
                _ = w.onRendered,
                ab = w.open,
                bb = (0, e.default)(w, [
                    'BackdropComponent',
                    'BackdropProps',
                    'children',
                    'closeAfterTransition',
                    'container',
                    'disableAutoFocus',
                    'disableBackdropClick',
                    'disableEnforceFocus',
                    'disableEscapeKeyDown',
                    'disablePortal',
                    'disableRestoreFocus',
                    'disableScrollLock',
                    'hideBackdrop',
                    'keepMounted',
                    'manager',
                    'onBackdropClick',
                    'onClose',
                    'onEscapeKeyDown',
                    'onRendered',
                    'open'
                ]),
                cb = g.useState(!0),
                db = cb[0],
                eb = cb[1],
                fb = g.useRef({}),
                gb = g.useRef(null),
                hb = g.useRef(null),
                ib = (0, n.default)(hb, b),
                jb = function(a) {
                    return !!a.children && a.children.props.hasOwnProperty('in');
                }(w),
                kb = function() {
                    return (0, k.default)(gb.current);
                },
                lb = function() {
                    return fb.current.modalRef = hb.current, fb.current.mountNode = gb.current, fb.current;
                },
                mb = function() {
                    X.mount(lb(), {
                        disableScrollLock: R
                    }), hb.current.scrollTop = 0;
                },
                nb = (0, o.default)(function() {
                    var ob = function(ob) {
                        return ob = 'function' == typeof ob ? ob() : ob, h.findDOMNode(ob);
                    }(D) || kb().body;
                    X.add(lb(), ob), hb.current && mb();
                }),
                ob = g.useCallback(function() {
                    return X.isTopModal(lb());
                }, [X]),
                pb = (0, o.default)(function(a) {
                    gb.current = a, a && (_ && _(), ab && ob() ? mb() : (0, q.ariaHidden)(hb.current, !0));
                }),
                qb = g.useCallback(function() {
                    X.remove(lb());
                }, [X]);
            if (g.useEffect(function() {
                    return function() {
                        qb();
                    };
                }, [qb]), g.useEffect(function() {
                    ab ? nb() : jb && C || qb();
                }, [
                    ab,
                    qb,
                    jb,
                    C,
                    nb
                ]), !V && !ab && (!jb || db))
                return null;
            var rb = function(a) {
                    return {
                        root: {
                            position: 'fixed',
                            zIndex: a.zIndex.modal,
                            right: 0,
                            bottom: 0,
                            top: 0,
                            left: 0
                        },
                        hidden: {
                            visibility: 'hidden'
                        }
                    };
                }(v || {
                    zIndex: p.default
                }),
                sb = {};
            return void 0 === A.props.tabIndex && (sb.tabIndex = A.props.tabIndex || '-1'), jb && (sb.onEnter = (0, m.default)(function() {
                eb(!1);
            }, A.props.onEnter), sb.onExited = (0, m.default)(function() {
                eb(!0), C && qb();
            }, A.props.onExited)), g.createElement(l.default, {
                ref: pb,
                container: D,
                disablePortal: N
            }, g.createElement('div', (0, f.default)({
                ref: ib,
                onKeyDown: function(a) {
                    'Escape' === a.key && ob() && ($ && $(a), L || (a.stopPropagation(), Z && Z(a, 'escapeKeyDown')));
                },
                role: 'presentation'
            }, bb, {
                style: (0, f.default)({}, rb.root, !ab && db ? rb.hidden : {}, bb.style)
            }), T ? null : g.createElement(y, (0, f.default)({
                open: ab,
                onClick: function(a) {
                    a.target === a.currentTarget && (Y && Y(a), !H && Z && Z(a, 'backdropClick'));
                }
            }, z)), g.createElement(r.default, {
                disableEnforceFocus: J,
                disableAutoFocus: F,
                disableRestoreFocus: P,
                getDoc: kb,
                isEnabled: ob,
                open: ab
            }, g.cloneElement(A, sb))));
        });
}), d.register('BMa+2', function(a, c) {
    function e(a) {
        return a && a.ownerDocument || document;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('/RGEF', function(a, c) {
    b(a.exports, 'ariaHidden', function() {
        return k;
    }), b(a.exports, 'default', function() {
        return p;
    });
    var e = d('xTdzd'),
        f = d('zTitA15'),
        g = d('h1rqk'),
        h = d('eox5O'),
        i = d('BMa+2'),
        j = d('tjdhS');

    function k(a, b) {
        b ? a.setAttribute('aria-hidden', 'true') : a.removeAttribute('aria-hidden');
    }

    function l(a) {
        return parseInt(window.getComputedStyle(a)['padding-right'], 10) || 0;
    }

    function m(a, b, c) {
        var n = n.length > 3 && void 0 !== n[3] ? n[3] : [],
            o = n.length > 4 ? n[4] : void 0,
            p = [
                b,
                c
            ].concat((0, g.default)(n)),
            q = [
                'TEMPLATE',
                'SCRIPT',
                'STYLE'
            ];
        [].forEach.call(a.children, function(a) {
            1 === a.nodeType && -1 === p.indexOf(a) && -1 === q.indexOf(a.tagName) && k(a, o);
        });
    }

    function n(a, b) {
        var o = -1;
        return a.some(function(a, d) {
            return !!b(a) && (o = d, !0);
        }), o;
    }

    function o(a, b) {
        var p, q = [],
            r = [],
            s = a.container;
        if (!b.disableScrollLock) {
            if (function(a) {
                    var t = (0, i.default)(a);
                    return t.body === a ? (0, j.default)(t).innerWidth > t.documentElement.clientWidth : a.scrollHeight > a.clientHeight;
                }(s)) {
                var t = (0, h.default)();
                q.push({
                    value: s.style.paddingRight,
                    key: 'padding-right',
                    el: s
                }), s.style['padding-right'] = ''.concat(l(s) + t, 'px'), p = (0, i.default)(s).querySelectorAll('.mui-fixed'), [].forEach.call(p, function(a) {
                    r.push(a.style.paddingRight), a.style.paddingRight = ''.concat(l(a) + t, 'px');
                });
            }
            var t = s.parentElement,
                u = 'HTML' === t.nodeName && 'scroll' === window.getComputedStyle(t)['overflow-y'] ? t : s;
            q.push({
                value: u.style.overflow,
                key: 'overflow',
                el: u
            }), u.style.overflow = 'hidden';
        }
        return function() {
            p && [].forEach.call(p, function(a, b) {
                r[b] ? a.style.paddingRight = r[b] : a.style.removeProperty('padding-right');
            }), q.forEach(function(a) {
                var t = a.value,
                    u = a.el,
                    v = a.key;
                t ? u.style.setProperty(v, t) : u.style.removeProperty(v);
            });
        };
    }
    var p = function() {
        function q() {
            (0, e.default)(this, q), this.modals = [], this.containers = [];
        }
        return (0, f.default)(q, [{
                key: 'add',
                value: function(q, b) {
                    var r = this.modals.indexOf(q);
                    if (-1 !== r)
                        return r;
                    r = this.modals.length, this.modals.push(q), q.modalRef && k(q.modalRef, !1);
                    var s = function(q) {
                        var t = [];
                        return [].forEach.call(q.children, function(q) {
                            q.getAttribute && 'true' === q.getAttribute('aria-hidden') && t.push(q);
                        }), t;
                    }(b);
                    m(b, q.mountNode, q.modalRef, s, !0);
                    var t = n(this.containers, function(q) {
                        return q.container === b;
                    });
                    return -1 !== t ? (this.containers[t].modals.push(q), r) : (this.containers.push({
                        modals: [q],
                        container: b,
                        restore: null,
                        hiddenSiblingNodes: s
                    }), r);
                }
            },
            {
                key: 'mount',
                value: function(q, b) {
                    var r = n(this.containers, function(b) {
                            return -1 !== b.modals.indexOf(q);
                        }),
                        s = this.containers[r];
                    s.restore || (s.restore = o(s, b));
                }
            },
            {
                key: 'remove',
                value: function(q) {
                    var r = this.modals.indexOf(q);
                    if (-1 === r)
                        return r;
                    var s = n(this.containers, function(r) {
                            return -1 !== r.modals.indexOf(q);
                        }),
                        t = this.containers[s];
                    if (t.modals.splice(t.modals.indexOf(q), 1), this.modals.splice(r, 1), 0 === t.modals.length)
                        t.restore && t.restore(), q.modalRef && k(q.modalRef, !0), m(t.container, q.mountNode, q.modalRef, t.hiddenSiblingNodes, !1), this.containers.splice(s, 1);
                    else {
                        var u = t.modals[t.modals.length - 1];
                        u.modalRef && k(u.modalRef, !1);
                    }
                    return r;
                }
            },
            {
                key: 'isTopModal',
                value: function(q) {
                    return this.modals.length > 0 && this.modals[this.modals.length - 1] === q;
                }
            }
        ]), q;
    }();
}), d.register('xTdzd', function(a, c) {
    function e(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('eox5O', function(a, c) {
    function e() {
        var f = document.createElement('div');
        f.style.width = '99px', f.style.height = '99px', f.style.position = 'absolute', f.style.top = '-9999px', f.style.overflow = 'scroll', document.body.appendChild(f);
        var g = f.offsetWidth - f.clientWidth;
        return document.body.removeChild(f), g;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('tjdhS', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('BMa+2');

    function f(a) {
        return (0, e.default)(a).defaultView || window;
    }
}), d.register('uYpVh', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('uPP4W'),
        f = d('nLioi');
    d('uj3CK');
    var g = d('BMa+2'),
        h = d('KsiaO');
    var i = function(a) {
        var j = a.children,
            k = a.disableAutoFocus,
            l = void 0 !== k && k,
            m = a.disableEnforceFocus,
            n = void 0 !== m && m,
            o = a.disableRestoreFocus,
            p = void 0 !== o && o,
            q = a.getDoc,
            r = a.isEnabled,
            s = a.open,
            t = e.useRef(),
            u = e.useRef(null),
            v = e.useRef(null),
            w = e.useRef(),
            x = e.useRef(null),
            y = e.useCallback(function(a) {
                x.current = f.findDOMNode(a);
            }, []),
            z = (0, h.default)(j.ref, y),
            A = e.useRef();
        return e.useEffect(function() {
            A.current = s;
        }, [s]), !A.current && s && 'undefined' != typeof window && (w.current = q().activeElement), e.useEffect(function() {
            if (s) {
                var B = (0, g.default)(x.current);
                l || !x.current || x.current.contains(B.activeElement) || (x.current.hasAttribute('tabIndex') || x.current.setAttribute('tabIndex', -1), x.current.focus());
                var C = function() {
                        B.hasFocus() && !n && r() && !t.current ? x.current && !x.current.contains(B.activeElement) && x.current.focus() : t.current = !1;
                    },
                    D = function(C) {
                        !n && r() && 9 === C.keyCode && B.activeElement === x.current && (t.current = !0, C.shiftKey ? v.current.focus() : u.current.focus());
                    };
                B.addEventListener('focus', C, !0), B.addEventListener('keydown', D, !0);
                var E = setInterval(function() {
                    C();
                }, 50);
                return function() {
                    clearInterval(E), B.removeEventListener('focus', C, !0), B.removeEventListener('keydown', D, !0), p || (w.current && w.current.focus && w.current.focus(), w.current = null);
                };
            }
        }, [
            l,
            n,
            p,
            r,
            s
        ]), e.createElement(e.Fragment, null, e.createElement('div', {
            tabIndex: 0,
            ref: u,
            'data-test': 'sentinelStart'
        }), e.cloneElement(j, {
            ref: z
        }), e.createElement('div', {
            tabIndex: 0,
            ref: v,
            'data-test': 'sentinelEnd'
        }));
    };
}), d.register('BenI7', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = {
            root: {
                zIndex: -1,
                position: 'fixed',
                right: 0,
                bottom: 0,
                top: 0,
                left: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                WebkitTapHighlightColor: 'transparent'
            },
            invisible: {
                backgroundColor: 'transparent'
            }
        },
        i = g.forwardRef(function(a, b) {
            var j = a.invisible,
                k = void 0 !== j && j,
                l = a.open,
                m = (0, f.default)(a, [
                    'invisible',
                    'open'
                ]);
            return l ? g.createElement('div', (0, e.default)({
                'aria-hidden': !0,
                ref: b
            }, m, {
                style: (0, e.default)({}, h.root, k ? h.invisible : {}, m.style)
            })) : null;
        });
}), d.register('Ya7Gz', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = d('DujwZ'),
        k = g.forwardRef(function(a, b) {
            var l = a.children,
                m = a.classes,
                n = a.className,
                o = a.invisible,
                p = void 0 !== o && o,
                q = a.open,
                r = a.transitionDuration,
                s = a.TransitionComponent,
                t = void 0 === s ? j.default : s,
                u = (0, f.default)(a, [
                    'children',
                    'classes',
                    'className',
                    'invisible',
                    'open',
                    'transitionDuration',
                    'TransitionComponent'
                ]);
            return g.createElement(t, (0, e.default)({
                in: q,
                timeout: r
            }, u), g.createElement('div', {
                className: (0, h.default)(m.root, n, p && m.invisible),
                'aria-hidden': !0,
                ref: b
            }, l));
        }),
        l = (0, i.default)({
            root: {
                zIndex: -1,
                position: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                right: 0,
                bottom: 0,
                top: 0,
                left: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                WebkitTapHighlightColor: 'transparent'
            },
            invisible: {
                backgroundColor: 'transparent'
            }
        }, {
            name: 'MuiBackdrop'
        })(k);
}), d.register('DujwZ', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('b5p1k12'),
        f = d('frr34'),
        g = d('lWzbN'),
        h = d('uPP4W');
    d('uj3CK');
    var i = d('Ay789'),
        j = d('zkT1P'),
        k = d('rNksQ'),
        l = d('2QEw8'),
        m = d('KsiaO'),
        n = {
            entering: {
                opacity: 1
            },
            entered: {
                opacity: 1
            }
        },
        o = {
            enter: j.duration.enteringScreen,
            exit: j.duration.leavingScreen
        },
        p = h.forwardRef(function(a, b) {
            var q = a.children,
                r = a.disableStrictModeCompat,
                s = void 0 !== r && r,
                t = a.in,
                u = a.onEnter,
                v = a.onEntered,
                w = a.onEntering,
                x = a.onExit,
                y = a.onExited,
                z = a.onExiting,
                A = a.style,
                B = a.TransitionComponent,
                C = void 0 === B ? i.default : B,
                D = a.timeout,
                E = void 0 === D ? o : D,
                F = (0, g.default)(a, [
                    'children',
                    'disableStrictModeCompat',
                    'in',
                    'onEnter',
                    'onEntered',
                    'onEntering',
                    'onExit',
                    'onExited',
                    'onExiting',
                    'style',
                    'TransitionComponent',
                    'timeout'
                ]),
                G = (0, k.default)(),
                H = G.unstable_strictMode && !s,
                I = h.useRef(null),
                J = (0, m.default)(q.ref, b),
                K = (0, m.default)(H ? I : void 0, J),
                L = function(a) {
                    return function(b, q) {
                        if (a) {
                            var M = H ? [
                                    I.current,
                                    b
                                ] : [
                                    b,
                                    q
                                ],
                                N = (0, f.default)(M, 2),
                                O = N[0],
                                P = N[1];
                            void 0 === P ? a(O) : a(O, P);
                        }
                    };
                },
                M = L(w),
                N = L(function(a, b) {
                    (0, l.reflow)(a);
                    var O = (0, l.getTransitionProps)({
                        style: A,
                        timeout: E
                    }, {
                        mode: 'enter'
                    });
                    a.style.webkitTransition = G.transitions.create('opacity', O), a.style.transition = G.transitions.create('opacity', O), u && u(a, b);
                }),
                O = L(v),
                P = L(z),
                Q = L(function(a) {
                    var R = (0, l.getTransitionProps)({
                        style: A,
                        timeout: E
                    }, {
                        mode: 'exit'
                    });
                    a.style.webkitTransition = G.transitions.create('opacity', R), a.style.transition = G.transitions.create('opacity', R), x && x(a);
                }),
                R = L(y);
            return h.createElement(C, (0, e.default)({
                appear: !0,
                in: t,
                nodeRef: H ? I : void 0,
                onEnter: N,
                onEntered: O,
                onEntering: M,
                onExit: Q,
                onExited: R,
                onExiting: P,
                timeout: E
            }, F), function(a, b) {
                return h.cloneElement(q, (0, e.default)({
                    style: (0, e.default)({
                        opacity: 0,
                        visibility: 'exited' !== a || t ? void 0 : 'hidden'
                    }, n[a], A, q.props.style),
                    ref: K
                }, b));
            });
        });
}), d.register('JfS5I', function(a, c) {
    b(a.exports, 'default', function() {
        return q;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('nLioi'),
        i = d('pA9En'),
        j = d('Ay789'),
        k = d('KsiaO'),
        l = d('rNksQ'),
        m = d('zkT1P'),
        n = d('2QEw8');

    function o(a, b) {
        var p = function(a, b) {
            var q, r = b.getBoundingClientRect();
            if (b.fakeTransform)
                q = b.fakeTransform;
            else {
                var s = window.getComputedStyle(b);
                q = s.getPropertyValue('-webkit-transform') || s.getPropertyValue('transform');
            }
            var s = 0,
                t = 0;
            if (q && 'none' !== q && 'string' == typeof q) {
                var u = q.split('(')[1].split(')')[0].split(',');
                s = parseInt(u[4], 10), t = parseInt(u[5], 10);
            }
            return 'left' === a ? 'translateX('.concat(window.innerWidth, 'px) translateX(').concat(s - r.left, 'px)') : 'right' === a ? 'translateX(-'.concat(r.left + r.width - s, 'px)') : 'up' === a ? 'translateY('.concat(window.innerHeight, 'px) translateY(').concat(t - r.top, 'px)') : 'translateY(-'.concat(r.top + r.height - t, 'px)');
        }(a, b);
        p && (b.style.webkitTransform = p, b.style.transform = p);
    }
    var p = {
            enter: m.duration.enteringScreen,
            exit: m.duration.leavingScreen
        },
        q = g.forwardRef(function(a, b) {
            var r = a.children,
                s = a.direction,
                t = void 0 === s ? 'down' : s,
                u = a.in,
                v = a.onEnter,
                w = a.onEntered,
                x = a.onEntering,
                y = a.onExit,
                z = a.onExited,
                A = a.onExiting,
                B = a.style,
                C = a.timeout,
                D = void 0 === C ? p : C,
                E = a.TransitionComponent,
                F = void 0 === E ? j.default : E,
                G = (0, f.default)(a, [
                    'children',
                    'direction',
                    'in',
                    'onEnter',
                    'onEntered',
                    'onEntering',
                    'onExit',
                    'onExited',
                    'onExiting',
                    'style',
                    'timeout',
                    'TransitionComponent'
                ]),
                H = (0, l.default)(),
                I = g.useRef(null),
                J = g.useCallback(function(a) {
                    I.current = h.findDOMNode(a);
                }, []),
                K = (0, k.default)(r.ref, J),
                L = (0, k.default)(K, b),
                M = function(a) {
                    return function(b) {
                        a && (void 0 === b ? a(I.current) : a(I.current, b));
                    };
                },
                N = M(function(a, b) {
                    o(t, a), (0, n.reflow)(a), v && v(a, b);
                }),
                O = M(function(a, b) {
                    var P = (0, n.getTransitionProps)({
                        timeout: D,
                        style: B
                    }, {
                        mode: 'enter'
                    });
                    a.style.webkitTransition = H.transitions.create('-webkit-transform', (0, e.default)({}, P, {
                        easing: H.transitions.easing.easeOut
                    })), a.style.transition = H.transitions.create('transform', (0, e.default)({}, P, {
                        easing: H.transitions.easing.easeOut
                    })), a.style.webkitTransform = 'none', a.style.transform = 'none', x && x(a, b);
                }),
                P = M(w),
                Q = M(A),
                R = M(function(a) {
                    var S = (0, n.getTransitionProps)({
                        timeout: D,
                        style: B
                    }, {
                        mode: 'exit'
                    });
                    a.style.webkitTransition = H.transitions.create('-webkit-transform', (0, e.default)({}, S, {
                        easing: H.transitions.easing.sharp
                    })), a.style.transition = H.transitions.create('transform', (0, e.default)({}, S, {
                        easing: H.transitions.easing.sharp
                    })), o(t, a), y && y(a);
                }),
                S = M(function(a) {
                    a.style.webkitTransition = '', a.style.transition = '', z && z(a);
                }),
                T = g.useCallback(function() {
                    I.current && o(t, I.current);
                }, [t]);
            return g.useEffect(function() {
                if (!u && 'down' !== t && 'right' !== t) {
                    var U = (0, i.default)(function() {
                        I.current && o(t, I.current);
                    });
                    return window.addEventListener('resize', U),
                        function() {
                            U.clear(), window.removeEventListener('resize', U);
                        };
                }
            }, [
                t,
                u
            ]), g.useEffect(function() {
                u || T();
            }, [
                u,
                T
            ]), g.createElement(F, (0, e.default)({
                nodeRef: I,
                onEnter: N,
                onEntered: P,
                onEntering: O,
                onExit: R,
                onExited: S,
                onExiting: Q,
                appear: !0,
                in: u,
                timeout: D
            }, G), function(a, b) {
                return g.cloneElement(r, (0, e.default)({
                    ref: L,
                    style: (0, e.default)({
                        visibility: 'exited' !== a || u ? void 0 : 'hidden'
                    }, B, r.props.style)
                }, b));
            });
        });
}), d.register('pA9En', function(a, c) {
    function e(a) {
        var f, g = n.length > 1 && void 0 !== n[1] ? n[1] : 166;

        function h() {
            for (var i = n.length, j = new Array(i), k = 0; k < i; k++)
                j[k] = n[k];
            var l = this,
                m = function() {
                    a.apply(l, j);
                };
            clearTimeout(f), f = setTimeout(m, g);
        }
        return h.clear = function() {
            clearTimeout(f);
        }, h;
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('MobuN', function(a, c) {
    b(a.exports, 'default', function() {
        return o;
    });
    var e = d('lWzbN'),
        f = d('b5p1k12'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = g.forwardRef(function(a, b) {
            var k = a.classes,
                l = a.className,
                m = a.component,
                n = void 0 === m ? 'div' : m,
                o = a.square,
                p = void 0 !== o && o,
                q = a.elevation,
                r = void 0 === q ? 1 : q,
                s = a.variant,
                t = void 0 === s ? 'elevation' : s,
                u = (0, e.default)(a, [
                    'classes',
                    'className',
                    'component',
                    'square',
                    'elevation',
                    'variant'
                ]);
            return g.createElement(n, (0, f.default)({
                className: (0, h.default)(k.root, l, 'outlined' === t ? k.outlined : k['elevation'.concat(r)], !p && k.rounded),
                ref: b
            }, u));
        }),
        k = (0, i.default)(function(a) {
            var l = {};
            return a.shadows.forEach(function(a, c) {
                l['elevation'.concat(c)] = {
                    boxShadow: a
                };
            }), (0, f.default)({
                root: {
                    backgroundColor: a.palette.background.paper,
                    color: a.palette.text.primary,
                    transition: a.transitions.create('box-shadow')
                },
                rounded: {
                    borderRadius: a.shape.borderRadius
                },
                outlined: {
                    border: '1px solid '.concat(a.palette.divider)
                }
            }, l);
        }, {
            name: 'MuiPaper'
        })(j);
}), d.register('HKXIy', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = d('ntkuv'),
        k = g.forwardRef(function(a, b) {
            var l = a.children,
                m = a.classes,
                n = a.className,
                o = a.component,
                p = void 0 === o ? 'ul' : o,
                q = a.dense,
                r = void 0 !== q && q,
                s = a.disablePadding,
                t = void 0 !== s && s,
                u = a.subheader,
                v = (0, f.default)(a, [
                    'children',
                    'classes',
                    'className',
                    'component',
                    'dense',
                    'disablePadding',
                    'subheader'
                ]),
                w = g.useMemo(function() {
                    return {
                        dense: r
                    };
                }, [r]);
            return g.createElement(j.default.Provider, {
                value: w
            }, g.createElement(p, (0, e.default)({
                className: (0, h.default)(m.root, n, r && m.dense, !t && m.padding, u && m.subheader),
                ref: b
            }, v), u, l));
        }),
        l = (0, i.default)({
            root: {
                listStyle: 'none',
                margin: 0,
                padding: 0,
                position: 'relative'
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
            name: 'MuiList'
        })(k);
}), d.register('ntkuv', function(a, c) {
    b(a.exports, 'default', function() {
        return e;
    });
    var e = d('uPP4W').createContext({});
}), d.register('sUbB5', function(a, c) {
    b(a.exports, 'default', function() {
        return u;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = d('8nGxX'),
        k = d('m5Ln9'),
        l = d('KsiaO'),
        m = d('ntkuv'),
        n = d('nLioi'),
        o = 'undefined' == typeof window ? g.useEffect : g.useLayoutEffect,
        p = g.forwardRef(function(a, b) {
            var q = a.alignItems,
                r = void 0 === q ? 'center' : q,
                s = a.autoFocus,
                t = void 0 !== s && s,
                u = a.button,
                v = void 0 !== u && u,
                w = a.children,
                x = a.classes,
                y = a.className,
                z = a.component,
                A = a.ContainerComponent,
                B = void 0 === A ? 'li' : A,
                C = a.ContainerProps,
                D = (C = void 0 === C ? {} : C).className,
                E = (0, f.default)(C, ['className']),
                F = a.dense,
                G = void 0 !== F && F,
                H = a.disabled,
                I = void 0 !== H && H,
                J = a.disableGutters,
                K = void 0 !== J && J,
                L = a.divider,
                M = void 0 !== L && L,
                N = a.focusVisibleClassName,
                O = a.selected,
                P = void 0 !== O && O,
                Q = (0, f.default)(a, [
                    'alignItems',
                    'autoFocus',
                    'button',
                    'children',
                    'classes',
                    'className',
                    'component',
                    'ContainerComponent',
                    'ContainerProps',
                    'dense',
                    'disabled',
                    'disableGutters',
                    'divider',
                    'focusVisibleClassName',
                    'selected'
                ]),
                R = g.useContext(m.default),
                S = {
                    dense: G || R.dense || !1,
                    alignItems: r
                },
                T = g.useRef(null);
            o(function() {
                t && T.current && T.current.focus();
            }, [t]);
            var U = g.Children.toArray(w),
                V = U.length && (0, k.default)(U[U.length - 1], ['ListItemSecondaryAction']),
                W = g.useCallback(function(a) {
                    T.current = n.findDOMNode(a);
                }, []),
                X = (0, l.default)(W, b),
                Y = (0, e.default)({
                    className: (0, h.default)(x.root, y, S.dense && x.dense, !K && x.gutters, M && x.divider, I && x.disabled, v && x.button, 'center' !== r && x.alignItemsFlexStart, V && x.secondaryAction, P && x.selected),
                    disabled: I
                }, Q),
                Z = z || 'li';
            return v && (Y.component = z || 'div', Y.focusVisibleClassName = (0, h.default)(x.focusVisible, N), Z = j.default), V ? (Z = Y.component || z ? Z : 'div', 'li' === B && ('li' === Z ? Z = 'div' : 'li' === Y.component && (Y.component = 'div')), g.createElement(m.default.Provider, {
                value: S
            }, g.createElement(B, (0, e.default)({
                className: (0, h.default)(x.container, D),
                ref: X
            }, E), g.createElement(Z, Y, U), U.pop()))) : g.createElement(m.default.Provider, {
                value: S
            }, g.createElement(Z, (0, e.default)({
                ref: X
            }, Y), U));
        }),
        q = (0, i.default)(function(a) {
            return {
                root: {
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    position: 'relative',
                    textDecoration: 'none',
                    width: '100%',
                    boxSizing: 'border-box',
                    textAlign: 'left',
                    paddingTop: 8,
                    paddingBottom: 8,
                    '&$focusVisible': {
                        backgroundColor: a.palette.action.selected
                    },
                    '&$selected, &$selected:hover': {
                        backgroundColor: a.palette.action.selected
                    },
                    '&$disabled': {
                        opacity: 0.5
                    }
                },
                container: {
                    position: 'relative'
                },
                focusVisible: {},
                dense: {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                alignItemsFlexStart: {
                    alignItems: 'flex-start'
                },
                disabled: {},
                divider: {
                    borderBottom: '1px solid '.concat(a.palette.divider),
                    backgroundClip: 'padding-box'
                },
                gutters: {
                    paddingLeft: 16,
                    paddingRight: 16
                },
                button: {
                    transition: a.transitions.create('background-color', {
                        duration: a.transitions.duration.shortest
                    }),
                    '&:hover': {
                        textDecoration: 'none',
                        backgroundColor: a.palette.action.hover,
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                secondaryAction: {
                    paddingRight: 48
                },
                selected: {}
            };
        }, {
            name: 'MuiListItem'
        })(p);
}), d.register('m5Ln9', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W');

    function f(a, b) {
        return e.isValidElement(a) && -1 !== b.indexOf(a.type.muiName);
    }
}), d.register('HB3Xf', function(a, c) {
    b(a.exports, 'default', function() {
        return l;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = d('ntkuv'),
        k = g.forwardRef(function(a, b) {
            var l = a.classes,
                m = a.className,
                n = (0, f.default)(a, [
                    'classes',
                    'className'
                ]),
                o = g.useContext(j.default);
            return g.createElement('div', (0, e.default)({
                className: (0, h.default)(l.root, m, 'flex-start' === o.alignItems && l.alignItemsFlexStart),
                ref: b
            }, n));
        }),
        l = (0, i.default)(function(a) {
            return {
                root: {
                    minWidth: 56,
                    color: a.palette.action.active,
                    flexShrink: 0,
                    display: 'inline-flex'
                },
                alignItemsFlexStart: {
                    marginTop: 8
                }
            };
        }, {
            name: 'MuiListItemIcon'
        })(k);
}), d.register('6sbR6', function(a, c) {
    b(a.exports, 'default', function() {
        return q;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = d('yXgAO'),
        k = d('ntkuv'),
        l = g.forwardRef(function(a, b) {
            var m = a.children,
                n = a.classes,
                o = a.className,
                p = a.disableTypography,
                q = void 0 !== p && p,
                r = a.inset,
                s = void 0 !== r && r,
                t = a.primary,
                u = a.primaryTypographyProps,
                v = a.secondary,
                w = a.secondaryTypographyProps,
                x = (0, f.default)(a, [
                    'children',
                    'classes',
                    'className',
                    'disableTypography',
                    'inset',
                    'primary',
                    'primaryTypographyProps',
                    'secondary',
                    'secondaryTypographyProps'
                ]),
                y = g.useContext(k.default).dense,
                z = null != t ? t : m;
            null == z || z.type === j.default || q || (z = g.createElement(j.default, (0, e.default)({
                variant: y ? 'body2' : 'body1',
                className: n.primary,
                component: 'span',
                display: 'block'
            }, u), z));
            var A = B;
            return null == A || A.type === j.default || q || (A = g.createElement(j.default, (0, e.default)({
                variant: 'body2',
                className: n.secondary,
                color: 'textSecondary',
                display: 'block'
            }, w), A)), g.createElement('div', (0, e.default)({
                className: (0, h.default)(n.root, o, y && n.dense, s && n.inset, z && A && n.multiline),
                ref: b
            }, x), z, A);
        }),
        m = (0, i.default)({
            root: {
                flex: '1 1 auto',
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
            name: 'MuiListItemText'
        })(l);
}), d.register('yXgAO', function(a, c) {
    b(a.exports, 'default', function() {
        return q;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = d('l/I4j'),
        k = {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            subtitle1: 'h6',
            subtitle2: 'h6',
            body1: 'p',
            body2: 'p'
        },
        l = g.forwardRef(function(a, b) {
            var m = a.align,
                n = void 0 === m ? 'inherit' : m,
                o = a.classes,
                p = a.className,
                q = a.color,
                r = void 0 === q ? 'initial' : q,
                s = a.component,
                t = a.display,
                u = void 0 === t ? 'initial' : t,
                v = a.gutterBottom,
                w = void 0 !== v && v,
                x = a.noWrap,
                y = void 0 !== x && x,
                z = a.paragraph,
                A = void 0 !== z && z,
                B = a.variant,
                C = void 0 === B ? 'body1' : B,
                D = a.variantMapping,
                E = void 0 === D ? k : D,
                F = (0, f.default)(a, [
                    'align',
                    'classes',
                    'className',
                    'color',
                    'component',
                    'display',
                    'gutterBottom',
                    'noWrap',
                    'paragraph',
                    'variant',
                    'variantMapping'
                ]),
                G = s || (A ? 'p' : E[C] || k[C]) || 'span';
            return g.createElement(G, (0, e.default)({
                className: (0, h.default)(o.root, p, 'inherit' !== C && o[C], 'initial' !== r && o['color'.concat((0, j.default)(r))], y && o.noWrap, w && o.gutterBottom, A && o.paragraph, 'inherit' !== n && o['align'.concat((0, j.default)(n))], 'initial' !== u && o['display'.concat((0, j.default)(u))]),
                ref: b
            }, F));
        }),
        m = (0, i.default)(function(a) {
            return {
                root: {
                    margin: 0
                },
                body2: a.typography.body2,
                body1: a.typography.body1,
                caption: a.typography.caption,
                button: a.typography.button,
                h1: a.typography.h1,
                h2: a.typography.h2,
                h3: a.typography.h3,
                h4: a.typography.h4,
                h5: a.typography.h5,
                h6: a.typography.h6,
                subtitle1: a.typography.subtitle1,
                subtitle2: a.typography.subtitle2,
                overline: a.typography.overline,
                srOnly: {
                    position: 'absolute',
                    height: 1,
                    width: 1,
                    overflow: 'hidden'
                },
                alignLeft: {
                    textAlign: 'left'
                },
                alignCenter: {
                    textAlign: 'center'
                },
                alignRight: {
                    textAlign: 'right'
                },
                alignJustify: {
                    textAlign: 'justify'
                },
                noWrap: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                },
                gutterBottom: {
                    marginBottom: '0.35em'
                },
                paragraph: {
                    marginBottom: 16
                },
                colorInherit: {
                    color: 'inherit'
                },
                colorPrimary: {
                    color: a.palette.primary.main
                },
                colorSecondary: {
                    color: a.palette.secondary.main
                },
                colorTextPrimary: {
                    color: a.palette.text.primary
                },
                colorTextSecondary: {
                    color: a.palette.text.secondary
                },
                colorError: {
                    color: a.palette.error.main
                },
                displayInline: {
                    display: 'inline'
                },
                displayBlock: {
                    display: 'block'
                }
            };
        }, {
            name: 'MuiTypography'
        })(l);
}), d.register('TKGwG', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9c.39-.67-.09-1.5-.86-1.5H13l2.49-6.65c.25-.65-.23-1.35-.93-1.35H8c-.55 0-1 .45-1 1z'
        }), 'FlashOnRounded');
}), d.register('mteAB', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z'
        }), 'QuestionAnswer');
}), d.register('145Dm', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z'
        }), 'Shop');
}), d.register('PTbXe', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('lf3yz');
    var g = a => (0, e.jsx)('span', {
        onClick: () => {
            a.disabled || (a.onClick && a.onClick(), (0, f.changeRoute)(a.to));
        },
        children: a.children
    });
}), d.register('ZGrtJ', function(a, c) {
    b(a.exports, 'default', function() {
        return s;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('VDucS'),
        h = d('2I+oO'),
        i = d('G5sHI'),
        j = d('VCvua0'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('OO29g'),
        n = d('h99Nu');
    let o, p, q = a => a;
    let r = class extends l.Component {
        render() {
            return this.props.powerups.linkPartnerName ? (0, f.jsx)(m.default, {
                children: (0, f.jsxs)('div', {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: [
                        (0, f.jsx)('div', {
                            style: {
                                background: j.default.DarkSuccessGreen,
                                color: j.default.White,
                                height: 43,
                                width: 43,
                                marginRight: 7,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: (0, f.jsx)(g.default, {
                                name: h.LINK_ICON
                            })
                        }),
                        (0, f.jsxs)('div', {
                            style: {
                                fontWeight: 'bold'
                            },
                            children: [
                                (0, f.jsx)(u, {
                                    children: (0, f.jsx)(i.default, {
                                        text: 'Link Active'
                                    })
                                }),
                                (0, f.jsx)(v, {
                                    children: this.props.powerups.linkPartnerName
                                })
                            ]
                        })
                    ]
                })
            }) : null;
        }
    };
    r = (0, e.__decorate)([
        (0, k.inject)('powerups'),
        k.observer
    ], r);
    var s = t;
    const u = n.default.div(o || (o = q`
  font-size: 17px;
  opacity: 0.8;
`)),
        v = n.default.div(p || (p = q`
  font-size: 20px;
  text-overflow: ellipsis;
  width: 261px;
  white-space: nowrap;
  overflow: hidden;
`));
}), d.register('OO29g', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('qA0vg');
    let f;
    var g = d('h99Nu').default.div(f || (f = (a => a)`
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
  font-family: ${ 0 };
`), e.default.name);
}), d.register('GFeZB', function(a, c) {
    b(a.exports, 'default', function() {
        return B;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('VDucS'),
        i = d('OdbUb'),
        j = d('E1Ead'),
        k = d('G5sHI'),
        l = d('qA0vg');
    d('/jgct');
    var m = d('k8riP'),
        n = d('lf3yz'),
        o = d('Vlfxs'),
        p = d('uPP4W'),
        q = d('h99Nu');
    let r, s, t, u, v = a => a;
    const w = q.default.div(r || (r = v`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: ${ 0 };
`), l.default.name),
        x = q.default.div(s || (s = v`
  font-size: 38px;
  margin-left: 5px;
  font-weight: 900;
`)),
        y = q.default.div(t || (t = v`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: ${ 0 };
  color: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
`), a => a.backgroundColor, a => a.textColor),
        z = q.default.div(u || (u = v`
  font-size: 19px;
  opacity: 0.8;
  margin-bottom: 7px;
  font-family: ${ 0 };
`), l.default.name);
    let A = class extends p.Component {
        render() {
            const B = (this.props.powerups.availablePowerups.filter(B => B.name === this.props.navigation.attackModal.powerup) || [])[0];
            if (!B)
                return null;
            const C = !(B.name === m.PowerupNames.link && this.props.powerups.activePowerups.includes(m.PowerupNames.shield));
            return (0, g.jsxs)(j.default, {
                open: this.props.navigation.attackModal.open,
                close: this.close,
                customMaxWidth: '90%',
                customWidth: '600px',
                children: [
                    (0, g.jsxs)(w, {
                        children: [
                            (0, g.jsx)(y, {
                                backgroundColor: B.color.background,
                                textColor: B.color.text,
                                children: (0, g.jsx)(h.default, {
                                    name: B.icon
                                })
                            }),
                            (0, g.jsx)(x, {
                                children: (0, g.jsx)(k.default, {
                                    text: (0, n.getPowerupName)(B)
                                })
                            })
                        ]
                    }),
                    (0, g.jsx)(z, {
                        children: (0, g.jsx)(k.default, {
                            text: C ? (0, n.getPowerupDescription)(B.description) : 'This powerup is disabled while shield is active'
                        })
                    }),
                    C && (0, g.jsx)(i.default, {
                        usePowerupAction: !0,
                        parentAction: this.close
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'close', () => this.props.navigation.attackModal.open = !1);
        }
    };
    A = (0, f.__decorate)([
        (0, o.inject)('powerups', 'navigation'),
        o.observer
    ], A);
    var B = C;
}), d.register('E1Ead', function(a, c) {
    b(a.exports, 'default', function() {
        return x;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('uPP4W'),
        i = d('nLioi'),
        j = d('Vlfxs'),
        k = d('h99Nu'),
        l = d('nR50E'),
        m = d('VCvua0'),
        n = d('qA0vg'),
        o = d('5WRxN'),
        p = d('UNaEe');
    let q, r, s = a => a;
    const t = k.default.div(q || (q = s`
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
  font-family: ${ 0 };
  z-index: 9999999999999;
`), n.default.name),
        u = k.default.div(r || (r = s`
  background: ${ 0 };
  border-radius: 4px;
  box-shadow: ${ 0 };
  animation-duration: 0.5s;
  ${ 0 }
  padding: ${ 0 };
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 9999999999999;
`), m.default.White, o.default.basic, a => a.fullScreen ? '\n  height: 100%;\n  width: 100%;\n  ' : `\n  max-width: ${ a.customMaxWidth ? a.customMaxWidth : '540px' };\n  ${ a.customWidth ? 'width: ' + a.customWidth + ';' : null }\n  max-height: 79vh;\n  margin: 20px;\n  `, a => a.customPadding || '18px'),
        v = a => a.stopPropagation();
    let w = class extends h.Component {
        static getDerivedStateFromProps(a, b) {
            return !a.open && b.open ? (p.done.play(), {
                exiting: !0,
                open: !1
            }) : a.open && !b.open ? {
                exiting: !1,
                open: !0
            } : null;
        }
        componentDidUpdate(a, b) {
            this.state.exiting && !b.exiting && setTimeout(() => this.setState({
                exiting: !1
            }), 500);
        }
        render() {
            const {
                close: x,
                gameValues: {
                    gameStatus: y
                }
            } = this.props, {
                open: z,
                exiting: A
            } = this.state;
            if (!z && !A)
                return null;
            if (y === l.GameStatus.results)
                return null;
            const B = A ? 'fadeOut' : 'fadeIn',
                C = A ? 'zoomOut' : 'zoomIn';
            return i.createPortal((0, g.jsx)(t, {
                className: `animated ${ B }`,
                onClick: x,
                children: (0, g.jsx)(u, {
                    onClick: v,
                    fullScreen: this.props.fullscreen,
                    className: `animated ${ C }`,
                    customPadding: this.props.customPadding,
                    customMaxWidth: this.props.customMaxWidth,
                    customWidth: this.props.customWidth,
                    style: this.props.customStyle,
                    children: this.props.children
                })
            }), document.body);
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                exiting: !1,
                open: !1
            });
        }
    };
    w = (0, f.__decorate)([
        (0, j.inject)('gameValues'),
        j.observer
    ], w);
    var x = y;
}), d.register('nR50E', function(a, c) {
    let e;
    var f;
    let g;
    var h;
    let i;
    var j;
    let k;
    var l;
    b(a.exports, 'GameStatus', function() {
        return i;
    }), (f = e || (e = {})).multipleChoice = 'mc', f.textInput = 'text', (h = g || (g = {})).public = 'public', h.private = 'private', (j = i || (i = {})).setup = 'setup', j.join = 'join', j.teams = 'teams', j.gameplay = 'gameplay', j.results = 'results', (l = k || (k = {})).time = 'time', l.race = 'race', l.allIn = 'allIn';
}), d.register('kiCuj', function(a, c) {
    b(a.exports, 'default', function() {
        return m;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('xlmLC'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('oBNJL');
    let l = class extends j.Component {
        render() {
            const m = this.useablePowerups();
            return m.length < 1 ? null : (0, g.jsxs)(j.Fragment, {
                children: [
                    (0, g.jsx)(h.default, {}),
                    (0, g.jsx)('div', {
                        style: {
                            height: 5
                        }
                    }),
                    m.map(m => (0, g.jsx)(k.default, {
                        powerup: m
                    }, m.name))
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'useablePowerups', () => this.props.powerups.availablePowerups.filter(a => this.props.powerups.purchasedPowerups.includes(a.name) && !this.props.powerups.usedPowerups.includes(a.name)));
        }
    };
    l = (0, f.__decorate)([
        (0, i.inject)('powerups'),
        i.observer
    ], l);
    var m = n;
}), d.register('xlmLC', function(a, c) {
    b(a.exports, 'default', function() {
        return q;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = d('66cIh'),
        k = g.forwardRef(function(a, b) {
            var l = a.absolute,
                m = void 0 !== l && l,
                n = a.classes,
                o = a.className,
                p = a.component,
                q = void 0 === p ? 'hr' : p,
                r = a.flexItem,
                s = void 0 !== r && r,
                t = a.light,
                u = void 0 !== t && t,
                v = a.orientation,
                w = void 0 === v ? 'horizontal' : v,
                x = a.role,
                y = void 0 === x ? 'hr' !== q ? 'separator' : void 0 : x,
                z = a.variant,
                A = void 0 === z ? 'fullWidth' : z,
                B = (0, f.default)(a, [
                    'absolute',
                    'classes',
                    'className',
                    'component',
                    'flexItem',
                    'light',
                    'orientation',
                    'role',
                    'variant'
                ]);
            return g.createElement(q, (0, e.default)({
                className: (0, h.default)(n.root, o, 'fullWidth' !== A && n[A], m && n.absolute, s && n.flexItem, u && n.light, 'vertical' === w && n.vertical),
                role: y,
                ref: b
            }, B));
        }),
        l = (0, i.default)(function(a) {
            return {
                root: {
                    height: 1,
                    margin: 0,
                    border: 'none',
                    flexShrink: 0,
                    backgroundColor: a.palette.divider
                },
                absolute: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%'
                },
                inset: {
                    marginLeft: 72
                },
                light: {
                    backgroundColor: (0, j.fade)(a.palette.divider, 0.08)
                },
                middle: {
                    marginLeft: a.spacing(2),
                    marginRight: a.spacing(2)
                },
                vertical: {
                    height: '100%',
                    width: 1
                },
                flexItem: {
                    alignSelf: 'stretch',
                    height: 'auto'
                }
            };
        }, {
            name: 'MuiDivider'
        })(k);
}), d.register('oBNJL', function(a, c) {
    b(a.exports, 'default', function() {
        return E;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('GJN+q'),
        i = d('m96/N'),
        j = d('VDucS'),
        k = d('G5sHI'),
        l = d('qA0vg'),
        m = d('lf3yz'),
        n = d('Vlfxs'),
        o = d('uPP4W'),
        p = d('cJ4UC');
    d('/jgct');
    var q = d('k8riP'),
        r = d('h99Nu'),
        s = d('UNaEe');
    let t, u, v, w, x = a => a;
    const y = [
            q.PowerupNames.pumpkinPie,
            q.PowerupNames.icer,
            q.PowerupNames.reducer,
            q.PowerupNames.subtractor,
            q.PowerupNames.giving,
            q.PowerupNames.link,
            q.PowerupNames.blurredScreen,
            q.PowerupNames.cashConcealer,
            q.PowerupNames.outnumbered
        ],
        z = r.default.div(t || (t = x`
  margin: 5px;
  margin-bottom: 3px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${ 0 };
  border-style: solid;
  border-radius: 6px;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 2px;
  padding: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 52px;
`), l.default.name),
        A = r.default.div(u || (u = x`
  display: flex;
  align-items: center;
`)),
        B = r.default.div(v || (v = x`
  background-color: ${ 0 };
  color: ${ 0 };
  height: 38px;
  width: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`), a => a.colors.background, a => a.colors.text),
        C = r.default.div(w || (w = x`
  font-size: 18px;
  font-weight: bold;
  margin-left: 7px;
`));
    let D = class extends o.Component {
        render() {
            const {
                powerup: E
            } = this.props;
            return (0, g.jsx)('div', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                },
                children: (0, g.jsxs)(z, {
                    children: [
                        (0, g.jsxs)(A, {
                            children: [
                                (0, g.jsx)(h.default, {
                                    title: (0, g.jsx)('div', {
                                        style: {
                                            fontSize: 15
                                        },
                                        children: (0, g.jsx)(k.default, {
                                            text: (0, m.getPowerupDescription)(E.description)
                                        })
                                    }),
                                    children: (0, g.jsx)(B, {
                                        colors: E.color,
                                        children: (0, g.jsx)(j.default, {
                                            name: E.icon
                                        })
                                    })
                                }),
                                (0, g.jsx)(C, {
                                    children: (0, g.jsx)(k.default, {
                                        text: (0, m.getPowerupName)(E)
                                    })
                                })
                            ]
                        }),
                        (0, g.jsx)(i.default, {
                            onClick: this.activatePowerup,
                            label: (0, g.jsx)(k.default, {
                                text: 'Use'
                            }),
                            type: this.props.powerups.activePowerups.includes(E.name) ? 'disabled' : 'primary',
                            size: 'small'
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'activatePowerup', () => {
                this.props.powerup.name.includes('Stone') ? s.stone.play() : (s.successClick.play(), this.props.powerup.name !== q.PowerupNames.repurchasePowerups && (0, m.toggleDrawer)(!1)), (0, m.send)(p.default.powerupActivated, this.props.powerup.name), y.includes(this.props.powerup.name) && (this.props.navigation.attackModal.powerup = this.props.powerup.name, this.props.navigation.attackModal.open = !0);
            });
        }
    };
    D = (0, f.__decorate)([
        (0, n.inject)('powerups', 'navigation'),
        n.observer
    ], D);
    var E = F;
}), d.register('Z24/y', function(a, c) {
    b(a.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('h99Nu'),
        g = d('z/vys'),
        h = d('dip+j'),
        i = d('lf3yz'),
        j = d('TjlPk');
    let k, l, m, n, o, p = a => a;
    var q = a => (0, e.jsxs)(r, {
        children: [
            (0, e.jsxs)(s, {
                children: [
                    (0, e.jsx)(t, {
                        children: a.playerName
                    }),
                    a.teamName && (0, e.jsx)(u, {
                        children: a.teamName
                    })
                ]
            }),
            (0, e.jsx)(v, {
                children: (0, e.jsx)(j.default, {
                    style: {
                        color: 'rgba(117, 117, 117, 1.0)'
                    },
                    onClick: a.isSettingsOpen ? a.onBack : a.onClickSettings,
                    children: a.isSettingsOpen ? (0, e.jsx)(g.default, {}) : (0, e.jsx)(h.default, {})
                })
            })
        ]
    });
    const r = f.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(k || (k = p`
  font-family: ${ 0 };
  flex-shrink: 0;
  padding: 12px 16px;
  padding-right: 5px;
  background-color: #f2f2f2;
`), i.mainFontName),
        s = f.default.div.attrs({
            className: 'flex flex-column hc'
        })(l || (l = p`
  align-items: flex-start;
  overflow: hidden;
`)),
        t = f.default.div(m || (m = p`
  color: #222222;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
`)),
        u = f.default.div(n || (n = p`
  font-size: 12px;
  color: #696969;
`)),
        v = f.default.div(o || (o = p`
  margin-left: 10px;
`));
}), d.register('z/vys', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z'
        }), 'KeyboardBackspace');
}), d.register('dip+j', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            transform: 'scale(1.2, 1.2)',
            d: 'M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'
        }), 'Settings');
}), d.register('sluR5', function(a, c) {
    b(a.exports, 'default', function() {
        return t;
    });
    var e = d('8kSQZ'),
        f = d('lmfrI'),
        g = d('xxcnb'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('lf3yz');
    let l, m, n, o, p, q, r, s = a => a;
    var t = (0, h.observer)(() => {
        const {
            pardy: u
        } = i.useContext(g.default), v = u.powers.find(v => v.id === u.power);
        return v ? (0, e.jsx)(u, {
            children: (0, e.jsxs)(v, {
                children: [
                    (0, e.jsx)(w, {
                        style: {
                            backgroundColor: v.background
                        },
                        children: (0, e.jsx)(x, {
                            src: v.image
                        })
                    }),
                    (0, e.jsxs)(y, {
                        children: [
                            (0, e.jsx)(z, {
                                children: v.name
                            }),
                            (0, e.jsx)(A, {
                                children: v.description
                            })
                        ]
                    })
                ]
            })
        }) : null;
    });
    const u = j.default.div.attrs({
            className: 'maxWidth'
        })(l || (l = s`
  font-family: ${ 0 };
  padding: 15px;
`), k.mainFontName),
        v = j.default.div.attrs({
            className: 'maxWidth light-shadow'
        })(m || (m = s`
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 0px;
  border-radius: 5px;
  overflow: hidden;
`)),
        w = j.default.div.attrs({
            className: 'maxWidth flex-center'
        })(n || (n = s`
  height: 80px;
`)),
        x = j.default.img(o || (o = s`
  height: 40px;
  filter: drop-shadow(2px 2px 2px #222);
`)),
        y = j.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(p || (p = s`
  background: ${ 0 };
  padding: 20px 15px;
  text-align: center;
`), f.default.Snow),
        z = j.default.div(q || (q = s`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 2px;
`)),
        A = j.default.div(r || (r = s`
  font-size: 14px;
`));
}), d.register('Yf68A', function(a, c) {
    b(a.exports, 'default', function() {
        return r;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('LhZqx'),
        k = d('lf3yz'),
        l = d('15ZCK'),
        m = d('h99Nu'),
        n = d('bPH7V'),
        o = d('G5sHI');
    let p, q = class extends i.Component {
        render() {
            const r = this.props.imposter.noteDrawerOpen;
            return (0, k.inImposterMode)() ? (0, g.jsx)(l.StyledDrawer, {
                closable: !1,
                placement: 'left',
                visible: r,
                onClose: this.close,
                width: window.innerWidth > 500 ? 364 : '80vw',
                bodyStyle: {
                    height: '100%',
                    overflow: 'hidden',
                    padding: 0,
                    fontFamily: '\'Space Grotesk\', monospace'
                },
                children: (0, g.jsxs)(l.LeaderboardContainer, {
                    style: {
                        paddingLeft: 20,
                        paddingRight: 20
                    },
                    children: [
                        (0, g.jsxs)(t, {
                            children: [
                                (0, g.jsx)('span', {
                                    role: 'img',
                                    'aria-label': 'notebook',
                                    children: '\uD83D\uDCD3'
                                }),
                                ' ',
                                'Notebook'
                            ]
                        }),
                        (0, g.jsx)(j.default, {
                            minRows: 8
                        }),
                        (0, g.jsx)(n.default, {
                            type: 'info',
                            style: {
                                marginTop: 17,
                                marginBottom: 25
                            },
                            message: (0, g.jsx)(o.default, {
                                text: 'Tip'
                            }),
                            description: (0, g.jsx)(o.default, {
                                text: 'Pay attention to the Investigation Log for more clues.'
                            }),
                            showIcon: !0
                        })
                    ]
                })
            }) : null;
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'close', () => this.props.imposter.noteDrawerOpen = !1);
        }
    };
    q = (0, f.__decorate)([
        (0, h.inject)('imposter'),
        h.observer
    ], q);
    var r = s;
    const t = m.default.div(p || (p = (a => a)`
  font-weight: 900;
  font-size: 34px;
  margin-top: 10px;
  margin-bottom: 7px;
`));
}), d.register('LhZqx', function(a, c) {
    b(a.exports, 'default', function() {
        return o;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('uPP4W'),
        i = d('c6x8w'),
        j = d('Vlfxs'),
        k = d('lf3yz'),
        l = d('cJ4UC');
    const {
        TextArea: m
    } = i.default;
    let n = class extends h.Component {
        componentWillUnmount() {
            this.save();
        }
        render() {
            return this.props.imposter.me ? (0, g.jsx)(m, {
                placeholder: 'Leave notes or observations here!',
                value: this.props.imposter.me.notes,
                onChange: this.handleChange,
                onBlur: this.onBlur,
                autoSize: {
                    minRows: this.props.minRows || 4
                }
            }) : null;
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'handleChange', a => {
                this.props.imposter.me.notes = a.target.value;
            }), (0, e.default)(this, 'onBlur', () => this.save()), (0, e.default)(this, 'save', () => {
                (0, k.send)(l.default.imposter.notes, this.props.imposter.me.notes);
            });
        }
    };
    n = (0, f.__decorate)([
        (0, j.inject)('imposter'),
        j.observer
    ], n);
    var o = p;
}), d.register('15ZCK', function(a, c) {
    b(a.exports, 'StyledDrawer', function() {
        return q;
    }), b(a.exports, 'LeaderboardContainer', function() {
        return u;
    }), b(a.exports, 'default', function() {
        return s;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('KV+OV'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('h99Nu'),
        l = d('PDLD/2'),
        m = d('maRIh');
    let n, o, p = a => a;
    const q = (0, k.default)(h.default)(n || (n = p`
  .ant-drawer-wrapper-body {
    width: 100%;
    height: 100%;
  }
`));
    let r = class extends j.Component {
        render() {
            return this.props.gameOptions.type !== l.GameType.live ? null : (0, g.jsx)(q, {
                closable: !1,
                placement: 'left',
                visible: this.props.navigation.leaderboardDrawerOpen,
                onClose: this.close,
                width: window.innerWidth > 500 ? 364 : '80vw',
                bodyStyle: {
                    background: '#673AB7',
                    height: '100%',
                    overflow: 'hidden',
                    padding: 0
                },
                children: (0, g.jsx)(u, {
                    children: (0, g.jsx)(m.default, {})
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'close', () => this.props.navigation.leaderboardDrawerOpen = !1);
        }
    };
    r = (0, f.__decorate)([
        (0, i.inject)('navigation', 'gameOptions'),
        i.observer
    ], r);
    var s = t;
    const u = k.default.div(o || (o = p`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`));
}), d.register('maRIh', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('8kSQZ'),
        f = d('OdbUb'),
        g = d('uPP4W');
    class h extends g.Component {
        render() {
            return (0, e.jsx)(g.Fragment, {
                children: (0, e.jsx)(f.default, {
                    showSelf: !0,
                    customItemBorderRadius: 7
                })
            });
        }
    }
    var i = j;
}), d.register('rdFK4', function(a, c) {
    b(a.exports, 'Container', function() {
        return O;
    }), b(a.exports, 'default', function() {
        return U;
    });
    var e = d('8kSQZ'),
        f = d('QglvE'),
        g = d('afApC'),
        h = d('78M4L'),
        i = d('M8YtH'),
        j = d('uPP4W'),
        k = d('GuzpU'),
        l = d('h99Nu'),
        m = d('X3YCf'),
        n = d('ZMWrJ'),
        o = d('WYdGX'),
        p = d('WV9Rq'),
        q = d('lf3yz'),
        r = d('UnUp5'),
        s = d('Vlfxs'),
        t = d('rlYg5'),
        u = d('PDLD/2'),
        v = d('syyMk'),
        w = d('4mdMn'),
        x = d('ts2H+'),
        y = d('TSd8b'),
        z = d('2Pf+U'),
        A = d('jiTxJ'),
        B = d('jOyMO'),
        C = d('DwPm0'),
        D = d('E7D7Y'),
        E = d('ChzM0'),
        F = d('xxcnb'),
        G = d('TTju3'),
        H = d('4/f+U'),
        I = d('fHPMn');
    let J;
    const K = [i.default.questions],
        L = () => (0, H.sample)('abcdefghijklmnopqrstuvwxyz'.split('')),
        M = L(),
        N = L(),
        O = l.default.div.withConfig({
            displayName: `sc-${ M + N }`
        }).attrs({
            className: 'maxAll flex-column'
        })(J || (J = (a => a)`
  flex: 1 1 auto;
  min-height: 0;
  background: ${ 0 };
  overflow-x: hidden;
  overflow-y: hidden;
`), a => a.customBackground || a.theme.defaultBackground),
        P = {
            width: '100%',
            height: '100%'
        },
        Q = a => {
            if (a.currentRoute === a.path) {
                const R = a.component;
                return (0, e.jsx)(R, {});
            }
            return null;
        },
        R = () => t.default.navigation.canChangeRoute = !1,
        S = () => t.default.navigation.canChangeRoute = !0,
        T = a => {
            const [U, V] = j.useState(!0);
            return j.useEffect(() => {
                V(!1);
            }, []), (0, e.jsx)(k.TransitionGroup, {
                style: P,
                children: (0, e.jsx)(k.CSSTransition, {
                    style: P,
                    timeout: I.CSS_TRANSITION_TIMEOUT,
                    onExit: R,
                    onEntered: S,
                    classNames: K.includes(a.currentRoute) || U ? '' : 'fade-router',
                    children: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(Q, {
                                currentRoute: a.currentRoute,
                                path: i.default.upgrade,
                                component: h.default
                            }),
                            (0, e.jsx)(Q, {
                                currentRoute: a.currentRoute,
                                path: i.default.shop,
                                component: g.default
                            }),
                            (0, e.jsx)(Q, {
                                currentRoute: a.currentRoute,
                                path: i.default.questions,
                                component: o.default
                            }),
                            (0, e.jsx)(Q, {
                                currentRoute: a.currentRoute,
                                path: i.default.team,
                                component: n.default
                            }),
                            (0, e.jsx)(Q, {
                                currentRoute: a.currentRoute,
                                path: i.default.waiting,
                                component: f.default
                            }),
                            (0, e.jsx)(Q, {
                                currentRoute: a.currentRoute,
                                path: i.default.gameOver,
                                component: m.default
                            }),
                            (0, e.jsx)(Q, {
                                currentRoute: a.currentRoute,
                                path: i.default.nonDismissMessage,
                                component: w.default
                            }),
                            (0, e.jsx)(Q, {
                                currentRoute: a.currentRoute,
                                path: i.default.imposterMode,
                                component: z.default
                            }),
                            (0, e.jsx)(Q, {
                                currentRoute: a.currentRoute,
                                path: i.default.drawMode,
                                component: A.default
                            }),
                            (0, e.jsx)(Q, {
                                currentRoute: a.currentRoute,
                                path: i.default.pardyMode,
                                component: B.default
                            }),
                            (0, e.jsx)(Q, {
                                currentRoute: a.currentRoute,
                                path: i.default.join,
                                component: C.default
                            })
                        ]
                    })
                }, a.currentRoute)
            });
        };
    var U = (0, s.observer)(a => {
        const {
            gameValues: V,
            navigation: W
        } = j.useContext(F.default);
        return j.useEffect(() => {
            a.joinDetails && ((0, G.default)({
                serverUrl: a.joinDetails.serverUrl,
                roomId: a.joinDetails.roomId,
                intentId: a.joinDetails.intentId
            }), (0, r.when)(() => V.gameStatus === u.GameStatus.results, () => {
                (0, q.changeRoute)(i.default.gameOver);
            }), (0, q.listenForLeave)());
        }, []), (0, e.jsxs)(O, {
            children: [
                (0, e.jsx)(T, {
                    currentRoute: W.currentRoute
                }),
                (0, e.jsx)(p.default, {}),
                (0, e.jsx)(D.default, {}),
                (0, e.jsx)(v.default, {}),
                (0, e.jsx)(x.default, {}),
                (0, e.jsx)(y.default, {}),
                (0, e.jsx)(E.default, {})
            ]
        });
    });
}), d.register('QglvE', function(a, c) {
    b(a.exports, 'ITEM_MAX_WIDTH', function() {
        return r;
    }), b(a.exports, 'default', function() {
        return x;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('qjNPo'),
        l = (k = d('qjNPo'), d('4Th64')),
        m = d('53Lbp'),
        n = d('UX9ja');
    let o, p, q = a => a;
    const r = 600,
        s = j.default.div(o || (o = q`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  background: ${ 0 };
  -webkit-overflow-scrolling: touch;
`), k.backgroundCanvasColor),
        t = j.default.div(p || (p = q`
  width: 90%;
  max-width: ${ 0 }px;
  min-height: 100%;
`), r);
    let u;
    var v;
    (v = u || (u = {})).information = 'information', v.drawing = 'drawing';
    let w = class extends i.Component {
        render() {
            return (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(n.default, {}),
                    this.getContent()
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                screen: u.information
            }), (0, e.default)(this, 'switchToDrawing', () => {
                this.setState({
                    screen: u.drawing
                });
            }), (0, e.default)(this, 'getContent', () => this.state.screen === u.information ? (0, g.jsx)(s, {
                onClick: this.switchToDrawing,
                children: (0, g.jsxs)(t, {
                    children: [
                        (0, g.jsx)('div', {
                            style: {
                                height: 20
                            }
                        }),
                        (0, g.jsx)(l.default, {}),
                        this.props.gameValues.news.map(a => (0, g.jsx)(m.default, {
                            item: a
                        }, a.description)),
                        (0, g.jsx)('div', {
                            style: {
                                height: 20
                            }
                        })
                    ]
                })
            }) : (0, g.jsx)(k.default, {}));
        }
    };
    w = (0, f.__decorate)([
        (0, h.inject)('gameValues'),
        h.observer
    ], w);
    var x = y;
}), d.register('qjNPo', function(a, c) {
    b(a.exports, 'backgroundCanvasColor', function() {
        return p;
    }), b(a.exports, 'defaultDrawingColor', function() {
        return q;
    }), b(a.exports, 'secondaryDrawingColor', function() {
        return r;
    }), b(a.exports, 'default', function() {
        return u;
    });
    var e = d('UM8oI'),
        f = d('8kSQZ'),
        g = d('uPP4W'),
        h = d('TixT9'),
        i = d('h99Nu'),
        j = d('VCvua0'),
        k = d('lf3yz'),
        l = d('ZLhwq'),
        m = d('JDrLs');
    let n;
    const o = 'gimkit-draw-canvas',
        p = () => (0, k.inImposterMode)() ? '#313639' : (0, k.inLavaMode)() ? '#263238' : (0, k.inPardyMode)() ? '#525380' : '#4caf50',
        q = () => (0, k.inImposterMode)() ? j.default.White : (0, k.inLavaMode)() || (0, k.inPardyMode)() ? '#ffeb3b' : '#424242',
        r = () => (0, k.inImposterMode)() ? '#ffee58' : (0, k.inThanosMode)() ? '#5e35b1' : (0, k.inLavaMode)() ? '#ff6f00' : (0, k.inPardyMode)() ? '#99f6a9' : '#e1f5fe',
        s = i.default.div(n || (n = (a => a)`
  height: 100%;
  width: 100%;
  background: ${ 0 };
`), p);
    class t extends g.Component {
        componentDidMount() {
            this.onResize(), window.addEventListener('resize', this.onResize), document.addEventListener('touchmove', this.onTouch, {
                passive: !1
            });
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.onResize), document.removeEventListener('touchmove', this.onTouch);
        }
        render() {
            const {
                width: u,
                height: v
            } = this.state;
            return (0, f.jsx)(f.Fragment, {
                children: (0, f.jsxs)(s, {
                    id: o,
                    children: [
                        (0, f.jsx)(h.default, {
                            canvasHeight: v,
                            canvasWidth: u,
                            brushRadius: this.state.drawState.brushSize,
                            brushColor: this.state.drawState.brushColor,
                            hideGrid: !0,
                            style: {
                                background: p
                            },
                            lazyRadius: 0,
                            catenaryColor: this.state.drawState.brushColor
                        }),
                        (0, f.jsx)(l.default, {
                            show: this.state.showingControls,
                            drawState: this.state.drawState,
                            changeSize: this.changeBrushSize,
                            changeColor: this.changeBrushColor,
                            changeToEraser: this.changeToEraser
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                width: 0,
                height: 0,
                drawState: {
                    brushColor: q(),
                    brushSize: m.default.pen
                },
                showingControls: !0
            }), (0, e.default)(this, 'changeBrushColor', a => {
                this.setState({
                    drawState: {
                        ...this.state.drawState,
                        brushColor: a,
                        brushSize: this.state.drawState.brushSize === m.default.eraser ? m.default.pen : this.state.drawState.brushSize
                    }
                });
            }), (0, e.default)(this, 'changeBrushSize', a => {
                this.setState({
                    drawState: {
                        ...this.state.drawState,
                        brushSize: a,
                        brushColor: q()
                    }
                });
            }), (0, e.default)(this, 'changeToEraser', () => this.setState({
                drawState: {
                    brushSize: m.default.eraser,
                    brushColor: p()
                }
            })), (0, e.default)(this, 'onTouch', a => {
                a.preventDefault();
            }), (0, e.default)(this, 'onResize', () => {
                const u = document.getElementById(o).clientHeight,
                    v = document.getElementById(o).clientWidth;
                this.setState({
                    height: u,
                    width: v
                });
            });
        }
    }
    var u = v;
}), d.register('TixT9', function(a, w) {
    b(a.exports, 'default', function() {
        return r;
    });
    var e, f, g = d('uPP4W'),
        h = d('uj3CK'),
        i = d('fKlIn'),
        j = d('Eu7vL'),
        k = d('tDeyh'),
        l = d('EPYIw'),
        m = Object.assign || function(a) {
            for (var n = 1; n < n.length; n++) {
                var o = n[n];
                for (var p in o)
                    Object.prototype.hasOwnProperty.call(o, p) && (a[p] = o[p]);
            }
            return a;
        };

    function n(a, b) {
        return {
            x: a.x + (b.x - a.x) / 2,
            y: a.y + (b.y - a.y) / 2
        };
    }
    var o = {
            display: 'block',
            position: 'absolute'
        },
        p = [{
                name: 'interface',
                zIndex: 15
            },
            {
                name: 'drawing',
                zIndex: 11
            },
            {
                name: 'temp',
                zIndex: 12
            },
            {
                name: 'grid',
                zIndex: 10
            }
        ],
        q = c(h).oneOfType([
            c(h).number,
            c(h).string
        ]),
        r = (f = e = function(a) {
            function s(c) {
                ! function(a, s) {
                    if (!(a instanceof s))
                        throw new TypeError('Cannot call a class as a function');
                }(this, s);
                var t = function(a, s) {
                    if (!a)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !s || 'object' != typeof s && 'function' != typeof s ? a : s;
                }(this, a.call(this, c));
                return t.componentWillUnmount = function() {
                    t.canvasObserver.unobserve(t.canvasContainer);
                }, t.drawImage = function() {
                    t.props.imgSrc && (t.image = new Image(), t.image.crossOrigin = 'anonymous', t.image.onload = function() {
                        return (0, l.default)({
                            ctx: t.ctx.grid,
                            img: t.image
                        });
                    }, t.image.src = t.props.imgSrc);
                }, t.undo = function() {
                    var u = t.lines.slice(0, -1);
                    t.clear(), t.simulateDrawingLines({
                        lines: u,
                        immediate: !0
                    }), t.triggerOnChange();
                }, t.getSaveData = function() {
                    return JSON.stringify({
                        lines: t.lines,
                        width: t.props.canvasWidth,
                        height: t.props.canvasHeight
                    });
                }, t.loadSaveData = function(a) {
                    var u = n.length > 1 && void 0 !== n[1] ? n[1] : t.props.immediateLoading;
                    if ('string' != typeof a)
                        throw new Error('saveData needs to be of type string!');
                    var v = JSON.parse(a),
                        w = v.lines,
                        x = v.width,
                        y = v.height;
                    if (!w || 'function' != typeof w.push)
                        throw new Error('saveData.lines needs to be an array!');
                    if (t.clear(), x === t.props.canvasWidth && y === t.props.canvasHeight)
                        t.simulateDrawingLines({
                            lines: w,
                            immediate: u
                        });
                    else {
                        var z = t.props.canvasWidth / x,
                            A = t.props.canvasHeight / y,
                            B = (z + A) / 2;
                        t.simulateDrawingLines({
                            lines: w.map(function(a) {
                                return m({}, a, {
                                    points: a.points.map(function(a) {
                                        return {
                                            x: a.x * z,
                                            y: a.y * A
                                        };
                                    }),
                                    brushRadius: a.brushRadius * B
                                });
                            }),
                            immediate: u
                        });
                    }
                }, t.simulateDrawingLines = function(a) {
                    var u = a.lines,
                        v = a.immediate,
                        w = 0,
                        x = v ? 0 : t.props.loadTimeOffset;
                    u.forEach(function(a) {
                        var y = a.points,
                            z = a.brushColor,
                            A = a.brushRadius;
                        if (v)
                            return t.drawPoints({
                                points: y,
                                brushColor: z,
                                brushRadius: A
                            }), t.points = y, void t.saveLine({
                                brushColor: z,
                                brushRadius: A
                            });
                        for (var B = function(a) {
                                w += x, window.setTimeout(function() {
                                    t.drawPoints({
                                        points: y.slice(0, a + 1),
                                        brushColor: z,
                                        brushRadius: A
                                    });
                                }, w);
                            }, C = 1; C < y.length; C++)
                            B(C);
                        w += x, window.setTimeout(function() {
                            t.points = y, t.saveLine({
                                brushColor: z,
                                brushRadius: A
                            });
                        }, w);
                    });
                }, t.handleDrawStart = function(a) {
                    a.preventDefault(), t.isPressing = !0;
                    var u = t.getPointerPos(a),
                        v = u.x,
                        w = u.y;
                    a.touches && a.touches.length > 0 && t.lazy.update({
                        x: v,
                        y: w
                    }, {
                        both: !0
                    }), t.handlePointerMove(v, w);
                }, t.handleDrawMove = function(a) {
                    a.preventDefault();
                    var u = t.getPointerPos(a),
                        v = u.x,
                        w = u.y;
                    t.handlePointerMove(v, w);
                }, t.handleDrawEnd = function(a) {
                    a.preventDefault(), t.handleDrawMove(a), t.isDrawing = !1, t.isPressing = !1, t.saveLine();
                }, t.handleCanvasResize = function(a, s) {
                    var u = t.getSaveData(),
                        v = w,
                        x = Array.isArray(v),
                        y = 0;
                    for (v = x ? v : v[Symbol.iterator]();;) {
                        var z;
                        if (x) {
                            if (y >= v.length)
                                break;
                            z = v[y++];
                        } else {
                            if ((y = v.next()).done)
                                break;
                            z = y.value;
                        }
                        var A = z.contentRect,
                            B = A.width,
                            C = A.height;
                        t.setCanvasSize(t.canvas.interface, B, C), t.setCanvasSize(t.canvas.drawing, B, C), t.setCanvasSize(t.canvas.temp, B, C), t.setCanvasSize(t.canvas.grid, B, C), t.drawGrid(t.ctx.grid), t.drawImage(), t.loop({
                            once: !0
                        });
                    }
                    t.loadSaveData(u, !0);
                }, t.setCanvasSize = function(a, s, c) {
                    a.width = s, a.height = c, a.style.width = s, a.style.height = c;
                }, t.getPointerPos = function(a) {
                    var u = t.canvas.interface.getBoundingClientRect(),
                        v = a.clientX,
                        w = a.clientY;
                    return a.changedTouches && a.changedTouches.length > 0 && (v = a.changedTouches[0].clientX, w = a.changedTouches[0].clientY), {
                        x: v - u.left,
                        y: w - u.top
                    };
                }, t.handlePointerMove = function(a, s) {
                    if (!t.props.disabled) {
                        t.lazy.update({
                            x: a,
                            y: s
                        });
                        var u = !t.lazy.isEnabled();
                        (t.isPressing && !t.isDrawing || u && t.isPressing) && (t.isDrawing = !0, t.points.push(t.lazy.brush.toObject())), t.isDrawing && (t.points.push(t.lazy.brush.toObject()), t.drawPoints({
                            points: t.points,
                            brushColor: t.props.brushColor,
                            brushRadius: t.props.brushRadius
                        })), t.mouseHasMoved = !0;
                    }
                }, t.drawPoints = function(a) {
                    var u = a.points,
                        v = a.brushColor,
                        w = a.brushRadius;
                    t.ctx.temp.lineJoin = 'round', t.ctx.temp.lineCap = 'round', t.ctx.temp.strokeStyle = v, t.ctx.temp.clearRect(0, 0, t.ctx.temp.canvas.width, t.ctx.temp.canvas.height), t.ctx.temp.lineWidth = 2 * w;
                    var x = u[0],
                        y = u[1];
                    t.ctx.temp.moveTo(y.x, y.y), t.ctx.temp.beginPath();
                    for (var z = 1, A = u.length; z < A; z++) {
                        var B = n(x, y);
                        t.ctx.temp.quadraticCurveTo(x.x, x.y, B.x, B.y), x = u[z], y = u[z + 1];
                    }
                    t.ctx.temp.lineTo(x.x, x.y), t.ctx.temp.stroke();
                }, t.saveLine = function() {
                    var u = n.length > 0 && void 0 !== n[0] ? n[0] : {},
                        v = u.brushColor,
                        w = u.brushRadius;
                    if (!(t.points.length < 2)) {
                        t.lines.push({
                            points: [].concat(t.points),
                            brushColor: v || t.props.brushColor,
                            brushRadius: w || t.props.brushRadius
                        }), t.points.length = 0;
                        var x = t.canvas.temp.width,
                            y = t.canvas.temp.height;
                        t.ctx.drawing.drawImage(t.canvas.temp, 0, 0, x, y), t.ctx.temp.clearRect(0, 0, x, y), t.triggerOnChange();
                    }
                }, t.triggerOnChange = function() {
                    t.props.onChange && t.props.onChange(t);
                }, t.clear = function() {
                    t.lines = [], t.valuesChanged = !0, t.ctx.drawing.clearRect(0, 0, t.canvas.drawing.width, t.canvas.drawing.height), t.ctx.temp.clearRect(0, 0, t.canvas.temp.width, t.canvas.temp.height);
                }, t.loop = function() {
                    var u = n.length > 0 && void 0 !== n[0] ? n[0] : {},
                        v = u.once,
                        w = void 0 !== v && v;
                    if (t.mouseHasMoved || t.valuesChanged) {
                        var x = t.lazy.getPointerCoordinates(),
                            y = t.lazy.getBrushCoordinates();
                        t.drawInterface(t.ctx.interface, x, y), t.mouseHasMoved = !1, t.valuesChanged = !1;
                    }
                    w || window.requestAnimationFrame(function() {
                        t.loop();
                    });
                }, t.drawGrid = function(a) {
                    if (!t.props.hideGrid) {
                        a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.beginPath(), a.setLineDash([
                            5,
                            1
                        ]), a.setLineDash([]), a.strokeStyle = t.props.gridColor, a.lineWidth = 0.5;
                        for (var u = 0; u < a.canvas.width;)
                            u += 25, a.moveTo(u, 0), a.lineTo(u, a.canvas.height);
                        a.stroke();
                        for (var v = 0; v < a.canvas.height;)
                            v += 25, a.moveTo(0, v), a.lineTo(a.canvas.width, v);
                        a.stroke();
                    }
                }, t.drawInterface = function(a, s, c) {
                    t.props.hideInterface || (a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.beginPath(), a.fillStyle = t.props.brushColor, a.arc(c.x, c.y, t.props.brushRadius, 0, 2 * Math.PI, !0), a.fill(), a.beginPath(), a.fillStyle = t.props.catenaryColor, a.arc(s.x, s.y, 4, 0, 2 * Math.PI, !0), a.fill(), t.lazy.isEnabled() && (a.beginPath(), a.lineWidth = 2, a.lineCap = 'round', a.setLineDash([
                        2,
                        4
                    ]), a.strokeStyle = t.props.catenaryColor, t.catenary.drawToCanvas(t.ctx.interface, c, s, t.chainLength), a.stroke()), a.beginPath(), a.fillStyle = t.props.catenaryColor, a.arc(c.x, c.y, 2, 0, 2 * Math.PI, !0), a.fill());
                }, t.canvas = {}, t.ctx = {}, t.catenary = new(0, j.Catenary)(), t.points = [], t.lines = [], t.mouseHasMoved = !0, t.valuesChanged = !0, t.isDrawing = !1, t.isPressing = !1, t;
            }
            return function(a, s) {
                if ('function' != typeof s && null !== s)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof s);
                a.prototype = Object.create(s && s.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : a.__proto__ = s);
            }(s, a), s.prototype.componentDidMount = function() {
                var t = this;
                this.lazy = new(0, i.LazyBrush)({
                    radius: this.props.lazyRadius * window.devicePixelRatio,
                    enabled: !0,
                    initialPoint: {
                        x: window.innerWidth / 2,
                        y: window.innerHeight / 2
                    }
                }), this.chainLength = this.props.lazyRadius * window.devicePixelRatio, this.canvasObserver = new(0, k.default)(function(s, c) {
                    return t.handleCanvasResize(s, c);
                }), this.canvasObserver.observe(this.canvasContainer), this.drawImage(), this.loop(), window.setTimeout(function() {
                    var u = window.innerWidth / 2,
                        v = window.innerHeight / 2;
                    t.lazy.update({
                        x: u - t.chainLength / 4,
                        y: v
                    }, {
                        both: !0
                    }), t.lazy.update({
                        x: u + t.chainLength / 4,
                        y: v
                    }, {
                        both: !1
                    }), t.mouseHasMoved = !0, t.valuesChanged = !0, t.clear(), t.props.saveData && t.loadSaveData(t.props.saveData);
                }, 100);
            }, s.prototype.componentDidUpdate = function(a) {
                a.lazyRadius !== this.props.lazyRadius && (this.chainLength = this.props.lazyRadius * window.devicePixelRatio, this.lazy.setRadius(this.props.lazyRadius * window.devicePixelRatio)), a.saveData !== this.props.saveData && this.loadSaveData(this.props.saveData), JSON.stringify(a) !== JSON.stringify(this.props) && (this.valuesChanged = !0);
            }, s.prototype.render = function() {
                var t = this;
                return c(g).createElement('div', {
                    className: this.props.className,
                    style: m({
                        display: 'block',
                        background: this.props.backgroundColor,
                        touchAction: 'none',
                        width: this.props.canvasWidth,
                        height: this.props.canvasHeight
                    }, this.props.style),
                    ref: function(s) {
                        s && (t.canvasContainer = s);
                    }
                }, p.map(function(s) {
                    var u = s.name,
                        v = s.zIndex,
                        w = 'interface' === u;
                    return c(g).createElement('canvas', {
                        key: u,
                        ref: function(s) {
                            s && (t.canvas[u] = s, t.ctx[u] = s.getContext('2d'));
                        },
                        style: m({}, o, {
                            zIndex: v
                        }),
                        onMouseDown: w ? t.handleDrawStart : void 0,
                        onMouseMove: w ? t.handleDrawMove : void 0,
                        onMouseUp: w ? t.handleDrawEnd : void 0,
                        onMouseOut: w ? t.handleDrawEnd : void 0,
                        onTouchStart: w ? t.handleDrawStart : void 0,
                        onTouchMove: w ? t.handleDrawMove : void 0,
                        onTouchEnd: w ? t.handleDrawEnd : void 0,
                        onTouchCancel: w ? t.handleDrawEnd : void 0
                    });
                }));
            }, s;
        }(g.PureComponent), e.propTypes = {
            onChange: c(h).func,
            loadTimeOffset: c(h).number,
            lazyRadius: c(h).number,
            brushRadius: c(h).number,
            brushColor: c(h).string,
            catenaryColor: c(h).string,
            gridColor: c(h).string,
            backgroundColor: c(h).string,
            hideGrid: c(h).bool,
            canvasWidth: q,
            canvasHeight: q,
            disabled: c(h).bool,
            imgSrc: c(h).string,
            saveData: c(h).string,
            immediateLoading: c(h).bool,
            hideInterface: c(h).bool
        }, e.defaultProps = {
            onChange: null,
            loadTimeOffset: 5,
            lazyRadius: 12,
            brushRadius: 10,
            brushColor: '#444',
            catenaryColor: '#0a0302',
            gridColor: 'rgba(150,150,150,0.17)',
            backgroundColor: '#FFF',
            hideGrid: !1,
            canvasWidth: 400,
            canvasHeight: 400,
            disabled: !1,
            imgSrc: '',
            saveData: '',
            immediateLoading: !1,
            hideInterface: !1
        }, f);
}), d.register('fKlIn', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.LazyPoint = a.exports.Point = a.exports.LazyBrush = void 0;
    var e = h(d('r5Qc0')),
        f = h(d('Uz/h5')),
        g = h(d('a1WhK'));

    function h(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    a.exports.LazyBrush = e.default, a.exports.Point = f.default, a.exports.LazyPoint = g.default;
}), d.register('r5Qc0', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var e, f = function() {
            function g(g, b) {
                for (var h = 0; h < b.length; h++) {
                    var i = b[h];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(g, i.key, i);
                }
            }
            return function(b, e, d) {
                return e && g(b.prototype, e), d && g(b, d), b;
            };
        }(),
        g = d('a1WhK'),
        h = (e = g) && e.__esModule ? e : {
            default: e
        };

    function i(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }
    var j = function() {
        function k() {
            var l = n.length > 0 && void 0 !== n[0] ? n[0] : {},
                m = l.radius,
                n = void 0 === m ? 30 : m,
                o = l.enabled,
                p = void 0 === o || o,
                q = l.initialPoint,
                r = void 0 === q ? {
                    x: 0,
                    y: 0
                } : q;
            i(this, k), this.radius = n, this._isEnabled = p, this.pointer = new h.default(r.x, r.y), this.brush = new h.default(r.x, r.y), this.angle = 0, this.distance = 0, this._hasMoved = !1;
        }
        return f(k, [{
                key: 'enable',
                value: function() {
                    this._isEnabled = !0;
                }
            },
            {
                key: 'disable',
                value: function() {
                    this._isEnabled = !1;
                }
            },
            {
                key: 'isEnabled',
                value: function() {
                    return this._isEnabled;
                }
            },
            {
                key: 'setRadius',
                value: function(k) {
                    this.radius = k;
                }
            },
            {
                key: 'getRadius',
                value: function() {
                    return this.radius;
                }
            },
            {
                key: 'getBrushCoordinates',
                value: function() {
                    return this.brush.toObject();
                }
            },
            {
                key: 'getPointerCoordinates',
                value: function() {
                    return this.pointer.toObject();
                }
            },
            {
                key: 'getBrush',
                value: function() {
                    return this.brush;
                }
            },
            {
                key: 'getPointer',
                value: function() {
                    return this.pointer;
                }
            },
            {
                key: 'getAngle',
                value: function() {
                    return this.angle;
                }
            },
            {
                key: 'getDistance',
                value: function() {
                    return this.distance;
                }
            },
            {
                key: 'brushHasMoved',
                value: function() {
                    return this._hasMoved;
                }
            },
            {
                key: 'update',
                value: function(k) {
                    var l = n.length > 1 && void 0 !== n[1] ? n[1] : {},
                        m = l.both,
                        n = void 0 !== m && m;
                    return this._hasMoved = !1, !(this.pointer.equalsTo(k) && !n) && (this.pointer.update(k), n ? (this._hasMoved = !0, this.brush.update(k), !0) : (this._isEnabled ? (this.distance = this.pointer.getDistanceTo(this.brush), this.angle = this.pointer.getAngleTo(this.brush), this.distance > this.radius && (this.brush.moveByAngle(this.angle, this.distance - this.radius), this._hasMoved = !0)) : (this.distance = 0, this.angle = 0, this.brush.update(k), this._hasMoved = !0), !0));
                }
            }
        ]), k;
    }();
    a.exports.default = j;
}), d.register('a1WhK', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var e, f = function() {
            function g(g, b) {
                for (var h = 0; h < b.length; h++) {
                    var i = b[h];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(g, i.key, i);
                }
            }
            return function(b, e, d) {
                return e && g(b.prototype, e), d && g(b, d), b;
            };
        }(),
        g = d('Uz/h5'),
        h = (e = g) && e.__esModule ? e : {
            default: e
        };

    function i(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function j(a, b) {
        if (!a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return !b || 'object' != typeof b && 'function' != typeof b ? a : b;
    }
    var k = function(a) {
        function l() {
            return i(this, l), j(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, n));
        }
        return function(a, l) {
            if ('function' != typeof l && null !== l)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof l);
            a.prototype = Object.create(l && l.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : a.__proto__ = l);
        }(l, a), f(l, [{
                key: 'update',
                value: function(a) {
                    this.x = a.x, this.y = a.y;
                }
            },
            {
                key: 'moveByAngle',
                value: function(a, l) {
                    var m = a + Math.PI / 2;
                    this.x = this.x + Math.sin(m) * l, this.y = this.y - Math.cos(m) * l;
                }
            },
            {
                key: 'equalsTo',
                value: function(a) {
                    return this.x === a.x && this.y === a.y;
                }
            },
            {
                key: 'getDifferenceTo',
                value: function(a) {
                    return new h.default(this.x - a.x, this.y - a.y);
                }
            },
            {
                key: 'getDistanceTo',
                value: function(a) {
                    var m = this.getDifferenceTo(a);
                    return Math.sqrt(Math.pow(m.x, 2) + Math.pow(m.y, 2));
                }
            },
            {
                key: 'getAngleTo',
                value: function(a) {
                    var m = this.getDifferenceTo(a);
                    return Math.atan2(m.y, m.x);
                }
            },
            {
                key: 'toObject',
                value: function() {
                    return {
                        x: this.x,
                        y: this.y
                    };
                }
            }
        ]), l;
    }(h.default);
    a.exports.default = k;
}), d.register('Uz/h5', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    a.exports.default = function a(b, c) {
        ! function(a, b) {
            if (!(a instanceof b))
                throw new TypeError('Cannot call a class as a function');
        }(this, a), this.x = b, this.y = c;
    };
}), d.register('Eu7vL', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.Point = a.exports.Catenary = void 0;
    var e = g(d('E3L7+')),
        f = g(d('kOEK6'));

    function g(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    a.exports.Catenary = e.default, a.exports.Point = f.default;
}), d.register('E3L7+', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var e, f = function() {
            function g(g, b) {
                for (var h = 0; h < b.length; h++) {
                    var i = b[h];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(g, i.key, i);
                }
            }
            return function(b, e, d) {
                return e && g(b.prototype, e), d && g(b, d), b;
            };
        }(),
        g = d('kOEK6'),
        h = (e = g) && e.__esModule ? e : {
            default: e
        };

    function i(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }
    var j = function() {
        function k() {
            var l = n.length > 0 && void 0 !== n[0] ? n[0] : {},
                m = l.segments,
                n = void 0 === m ? 50 : m,
                o = l.iterationLimit,
                p = void 0 === o ? 100 : o;
            i(this, k), this.p1 = new h.default(), this.p2 = new h.default(), this.segments = n, this.iterationLimit = p;
        }
        return f(k, [{
                key: 'drawToCanvas',
                value: function(k, b, e, d) {
                    this.p1.update(b), this.p2.update(e);
                    var l = this.p1.x > this.p2.x,
                        m = l ? this.p2 : this.p1,
                        n = l ? this.p1 : this.p2,
                        o = [],
                        p = !0;
                    if (m.getDistanceTo(n) < d)
                        if (n.x - m.x > 0.01) {
                            var q = n.x - m.x,
                                r = n.y - m.y,
                                s = -this.getCatenaryParameter(q, r, d, this.iterationLimit),
                                t = 0.5 * (s * Math.log((d + r) / (d - r)) - q),
                                u = s * Math.cosh(t / s),
                                v = m.x - t,
                                w = m.y - u;
                            o = this.getCurve(s, m, n, v, w, this.segments), p = !1;
                        } else {
                            var x = 0.5 * (m.x + n.x),
                                y = 0.5 * (m.y + n.y + d);
                            o = [
                                [
                                    m.x,
                                    m.y
                                ],
                                [
                                    x,
                                    y
                                ],
                                [
                                    n.x,
                                    n.y
                                ]
                            ];
                        }
                    else
                        o = [
                            [
                                m.x,
                                m.y
                            ],
                            [
                                n.x,
                                n.y
                            ]
                        ];
                    return p ? this.drawLine(o, k) : this.drawCurve(o, k), o;
                }
            },
            {
                key: 'getCatenaryParameter',
                value: function(k, b, e, d) {
                    for (var l = Math.sqrt(e * e - b * b) / k, m = Math.acosh(l) + 1, n = -1, o = 0; Math.abs(m - n) > 0.000001 && o < d;)
                        n = m, m -= (Math.sinh(m) - l * m) / (Math.cosh(m) - l), o++;
                    return k / (2 * m);
                }
            },
            {
                key: 'getCurve',
                value: function(k, b, e, d, f, g) {
                    for (var l = [
                            b.x,
                            k * Math.cosh((b.x - d) / k) + f
                        ], m = e.x - b.x, n = g - 1, o = 0; o < n; o++) {
                        var p = b.x + m * (o + 0.5) / n,
                            q = k * Math.cosh((p - d) / k) + f;
                        l.push(p, q);
                    }
                    return l.push(e.x, k * Math.cosh((e.x - d) / k) + f), l;
                }
            },
            {
                key: 'drawLine',
                value: function(k, b) {
                    b.moveTo(k[0][0], k[0][1]), b.lineTo(k[1][0], k[1][1]);
                }
            },
            {
                key: 'drawCurve',
                value: function(k, b) {
                    var l = 0.5 * k.length - 1,
                        m = k[2],
                        n = k[3],
                        o = [];
                    b.moveTo(k[0], k[1]);
                    for (var p = 2; p < l; p++) {
                        var q = k[2 * p],
                            r = k[2 * p + 1],
                            s = 0.5 * (q + m),
                            t = 0.5 * (r + n);
                        o.push([
                            m,
                            n,
                            s,
                            t
                        ]), b.quadraticCurveTo(m, n, s, t), m = q, n = r;
                    }
                    return l = k.length, b.quadraticCurveTo(k[l - 4], k[l - 3], k[l - 2], k[l - 1]), o;
                }
            }
        ]), k;
    }();
    a.exports.default = j;
}), d.register('kOEK6', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var e = function() {
        function f(f, b) {
            for (var g = 0; g < b.length; g++) {
                var h = b[g];
                h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(f, h.key, h);
            }
        }
        return function(b, e, d) {
            return e && f(b.prototype, e), d && f(b, d), b;
        };
    }();
    var f = function() {
        function g(b, e) {
            ! function(g, b) {
                if (!(g instanceof b))
                    throw new TypeError('Cannot call a class as a function');
            }(this, g), this.x = b, this.y = e;
        }
        return e(g, [{
                key: 'update',
                value: function(g) {
                    this.x = g.x, this.y = g.y;
                }
            },
            {
                key: 'getDifferenceTo',
                value: function(b) {
                    return new g(this.x - b.x, this.y - b.y);
                }
            },
            {
                key: 'getDistanceTo',
                value: function(g) {
                    var h = this.getDifferenceTo(g);
                    return Math.sqrt(Math.pow(h.x, 2) + Math.pow(h.y, 2));
                }
            }
        ]), g;
    }();
    a.exports.default = f;
}), d.register('EPYIw', function(a, c) {
    function e() {
        var f = n.length > 0 && void 0 !== n[0] ? n[0] : {},
            g = f.ctx,
            h = f.img,
            i = f.x,
            j = f.y,
            k = f.w,
            l = f.h,
            m = f.offsetX,
            n = f.offsetY;
        'number' != typeof i && (i = 0), 'number' != typeof j && (j = 0), 'number' != typeof k && (k = g.canvas.width), 'number' != typeof l && (l = g.canvas.height), 'number' != typeof m && (m = 0.5), 'number' != typeof n && (n = 0.5), m < 0 && (m = 0), n < 0 && (n = 0), m > 1 && (m = 1), n > 1 && (n = 1);
        var o, p, q, r, s = h.width,
            t = h.height,
            u = Math.min(k / s, l / t),
            v = s * u,
            w = t * u,
            x = 1;
        v < k && (x = k / v), Math.abs(x - 1) < 1e-14 && w < l && (x = l / w), (o = (s - (q = s / ((v *= x) / k))) * m) < 0 && (o = 0), (p = (t - (r = t / ((w *= x) / l))) * n) < 0 && (p = 0), q > s && (q = s), r > t && (r = t), g.drawImage(h, o, p, q, r, i, j, k, l);
    }
    b(a.exports, 'default', function() {
        return e;
    });
}), d.register('ZLhwq', function(a, c) {
    b(a.exports, 'default', function() {
        return v;
    });
    var e = d('UM8oI'),
        f = d('8kSQZ'),
        g = d('VDucS'),
        h = d('VCvua0'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('qjNPo'),
        l = d('JDrLs');
    let m, n, o, p = a => a;
    const q = j.default.div(m || (m = p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
`)),
        r = j.default.div(n || (n = p`
  margin-bottom: 15px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${ 0 };
  border-width: 2px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ 0 };
`), h.default.DisabledGray, h.default.White),
        s = j.default.div(o || (o = p`
  cursor: pointer;
  font-size: 35px;
  background: ${ 0 };
  color: ${ 0 };
  padding: 5px;
  border-radius: 6px;
`), a => a.enabled ? '#E0E0E0' : 'transparent', a => a.customColor ? a.customColor : h.default.Black),
        t = {
            borderColor: h.default.Black,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: '50%'
        };
    class u extends i.Component {
        render() {
            if (!this.props.show)
                return null;
            const {
                drawState: v
            } = this.props;
            return (0, f.jsx)(q, {
                children: (0, f.jsxs)(r, {
                    children: [
                        (0, f.jsx)(s, {
                            customColor: k.defaultDrawingColor,
                            enabled: v.brushColor === (0, k.defaultDrawingColor)(),
                            onClick: this.changeToDefaultColor,
                            children: (0, f.jsx)(g.default, {
                                name: 'fas fa-circle',
                                style: t
                            })
                        }),
                        (0, f.jsx)(s, {
                            onClick: this.changeToSecondaryColor,
                            enabled: v.brushColor === (0, k.secondaryDrawingColor)(),
                            customColor: (0, k.secondaryDrawingColor)(),
                            children: (0, f.jsx)(g.default, {
                                name: 'fas fa-circle',
                                style: t
                            })
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                height: 35,
                                width: 5,
                                background: h.default.DisabledGray,
                                marginLeft: 10,
                                marginRight: 10
                            }
                        }),
                        (0, f.jsx)(s, {
                            onClick: this.changeToPen,
                            enabled: v.brushColor !== (0, k.backgroundCanvasColor)() && v.brushSize === l.default.pen,
                            children: (0, f.jsx)(g.default, {
                                name: 'fas fa-pen'
                            })
                        }),
                        (0, f.jsx)(s, {
                            onClick: this.changeToMarker,
                            enabled: v.brushColor !== (0, k.backgroundCanvasColor)() && v.brushSize === l.default.marker,
                            children: (0, f.jsx)(g.default, {
                                name: 'fas fa-marker'
                            })
                        }),
                        (0, f.jsx)(s, {
                            onClick: this.props.changeToEraser,
                            enabled: v.brushColor === (0, k.backgroundCanvasColor)(),
                            children: (0, f.jsx)(g.default, {
                                name: 'fas fa-eraser'
                            })
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'changeToDefaultColor', () => this.props.changeColor((0, k.defaultDrawingColor)())), (0, e.default)(this, 'changeToSecondaryColor', () => this.props.changeColor((0, k.secondaryDrawingColor)())), (0, e.default)(this, 'changeToPen', () => this.props.changeSize(l.default.pen)), (0, e.default)(this, 'changeToMarker', () => this.props.changeSize(l.default.marker));
        }
    }
    var v = w;
}), d.register('JDrLs', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = {
        pen: 8,
        marker: 18,
        eraser: 18
    };
}), d.register('4Th64', function(a, c) {
    b(a.exports, 'default', function() {
        return B;
    });
    var e = d('8kSQZ'),
        f = d('VDucS'),
        g = d('G5sHI'),
        h = d('VCvua0'),
        i = d('5WRxN'),
        j = d('CDq40');
    d('uPP4W');
    var k = d('h99Nu'),
        l = d('qjNPo'),
        m = d('lf3yz');
    let n, o, p, q, r, s, t = a => a;
    const u = k.default.div(n || (n = t`
  padding: 20px;
  box-sizing: border-box;
  box-shadow: ${ 0 };
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  pointer-events: auto;
  cursor: pointer;
  background: ${ 0 };
  color: ${ 0 };
  font-weight: 900;
`), i.default.basic, () => (0, j.darken)(0.3, (0, l.backgroundCanvasColor)()), h.default.White),
        v = k.default.div(o || (o = t`
  font-size: 37px;
  margin-bottom: 4px;
`)),
        w = k.default.div(p || (p = t`
  box-shadow: ${ 0 };
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
`), i.default.basic),
        x = k.default.div(q || (q = t`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 5px;
`)),
        y = k.default.div(r || (r = t`
  font-size: 20px;
`)),
        z = k.default.div(s || (s = t`
  color: rgba(255, 255, 255, 0.6);
  font-size: 17px;
  margin-top: 2px;
`)),
        A = a => (0, e.jsxs)(w, {
            children: [
                (0, e.jsx)('div', {
                    style: {
                        fontSize: 31,
                        flexShrink: 0
                    },
                    children: (0, e.jsx)(f.default, {
                        name: a.icon
                    })
                }),
                (0, e.jsx)('div', {
                    style: {
                        marginLeft: 15
                    },
                    children: (0, e.jsx)(g.default, {
                        text: a.message
                    })
                })
            ]
        });
    var B = () => (0, e.jsxs)(u, {
        children: [
            (0, e.jsx)(v, {
                children: (0, e.jsx)(g.default, {
                    text: (0, m.inImposterMode)() ? 'Ready for liftoff?' : 'Get ready...'
                })
            }),
            (0, m.inLavaMode)() ? (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(A, {
                        icon: 'fas fa-volcano',
                        message: 'The lava is rising...'
                    }),
                    (0, e.jsx)(A, {
                        icon: 'fas fa-building',
                        message: 'Work together to keep your building above the lava'
                    }),
                    (0, e.jsx)(A, {
                        icon: 'fas fa-shopping-bag',
                        message: 'Purchase builds in the shop'
                    }),
                    (0, e.jsx)(A, {
                        icon: 'fas fa-star',
                        message: 'Survive as long as you can'
                    })
                ]
            }) : (0, m.inImposterMode)() ? (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(A, {
                        icon: 'fa fa-user-astronaut',
                        message: 'Crewmates: run investigations and collect evidence to vote the impostors off the ship!'
                    }),
                    (0, e.jsx)(A, {
                        icon: 'fa fa-user-secret',
                        message: 'Impostors: sabotage crewmate investigations and blend in. Try not to get voted off!'
                    }),
                    (0, e.jsx)(A, {
                        icon: 'fa fa-info-circle',
                        message: 'We\'ll reveal your role once we liftoff.'
                    })
                ]
            }) : (0, m.inDrawMode)() ? (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(A, {
                        icon: 'fa fa-question-circle',
                        message: 'For each round, guess the term being drawn!'
                    }),
                    (0, e.jsx)(A, {
                        icon: 'fa fa-chart-line',
                        message: 'Gain points by guessing correctly.'
                    }),
                    (0, e.jsx)(A, {
                        icon: 'fa fa-trophy',
                        message: 'Have the most points by the end to be declared the winner!'
                    })
                ]
            }) : (0, m.inPardyMode)() ? (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(A, {
                        icon: 'far fa-money-bill-alt',
                        message: 'For each round, answer the question correctly to earn cash!'
                    }),
                    (0, e.jsx)(A, {
                        icon: 'fas fa-bolt',
                        message: 'Pick a power that fits your play-style to come out on top.'
                    }),
                    (0, e.jsx)(A, {
                        icon: 'fas fa-sack-dollar',
                        message: 'Make your final bet in The Finale!'
                    })
                ]
            }) : (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(A, {
                        icon: 'far fa-money-bill-alt',
                        message: 'Answer questions to earn cash'
                    }),
                    (0, e.jsx)(A, {
                        icon: 'fas fa-shopping-cart',
                        message: 'Purchase upgrades and powerups with your cash'
                    }),
                    (0, e.jsx)(A, {
                        icon: 'fas fa-level-up-alt',
                        message: 'Earn cash faster!'
                    })
                ]
            }),
            (0, e.jsxs)(x, {
                children: [
                    (0, e.jsx)(y, {
                        children: (0, e.jsx)(g.default, {
                            text: 'You can draw while you\'re waiting!'
                        })
                    }),
                    (0, e.jsx)(z, {
                        children: (0, e.jsx)(g.default, {
                            text: 'Click/tap here to draw!'
                        })
                    })
                ]
            })
        ]
    });
}), d.register('53Lbp', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('7IC8s'),
        g = d('VCvua0'),
        h = d('qA0vg'),
        i = d('5WRxN');
    d('uPP4W');
    var j = d('h99Nu'),
        k = d('QglvE');
    let l, m, n, o = a => a;
    var p = a => {
        const {
            tag: q,
            header: r,
            image: s,
            description: t
        } = a.item;
        let u = !1;
        if ((q || r || s || t) && (u = !0), !u)
            return null;
        return (0, e.jsxs)(q, {
            onClick: a => {
                a.stopPropagation();
            },
            children: [
                q && (0, e.jsx)(f.default, {
                    color: 'secondary',
                    style: {
                        marginBottom: 10,
                        fontWeight: 900
                    },
                    label: q
                }),
                r && (0, e.jsx)(r, {
                    children: r
                }),
                s && (0, e.jsx)('img', {
                    src: s,
                    style: {
                        maxWidth: '100%',
                        maxHeight: 170,
                        borderRadius: 5,
                        boxShadow: i.default.basic,
                        marginBottom: t ? 10 : 0,
                        marginTop: r || q ? 10 : 0
                    }
                }),
                t && (0, e.jsx)(s, {
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })
            ]
        });
    };
    const q = j.default.div(l || (l = o`
  width: 100%;
  box-sizing: border-box;
  max-width: ${ 0 }px;
  padding: 20px;
  box-shadow: ${ 0 };
  margin-top: 17px;
  border-radius: 7px;
  background: ${ 0 };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${ 0 };
`), () => k.ITEM_MAX_WIDTH, i.default.basic, g.default.White, h.default.mainFontName),
        r = j.default.div(m || (m = o`
  font-size: 28px;
  font-weight: bold;
`)),
        s = j.default.div(n || (n = o`
  font-weight: normal;
  font-family: ${ 0 };
  font-size: 16px;
  margin-top: 10px;
  text-align: left;
`), h.default.name);
}), d.register('7IC8s', function(a, c) {
    b(a.exports, 'default', function() {
        return v;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('T06OQ'),
        j = d('knVNm'),
        k = d('66cIh'),
        l = d('KsiaO'),
        m = d('l/I4j'),
        n = d('8nGxX');

    function o(a) {
        return 'Backspace' === a.key || 'Delete' === a.key;
    }
    var p = g.forwardRef(function(a, b) {
            var q = a.avatar,
                r = a.classes,
                s = a.className,
                t = a.clickable,
                u = a.color,
                v = void 0 === u ? 'default' : u,
                w = a.component,
                x = a.deleteIcon,
                y = a.disabled,
                z = void 0 !== y && y,
                A = a.icon,
                B = a.label,
                C = a.onClick,
                D = a.onDelete,
                E = a.onKeyDown,
                F = a.onKeyUp,
                G = a.size,
                H = void 0 === G ? 'medium' : G,
                I = a.variant,
                J = void 0 === I ? 'default' : I,
                K = (0, f.default)(a, [
                    'avatar',
                    'classes',
                    'className',
                    'clickable',
                    'color',
                    'component',
                    'deleteIcon',
                    'disabled',
                    'icon',
                    'label',
                    'onClick',
                    'onDelete',
                    'onKeyDown',
                    'onKeyUp',
                    'size',
                    'variant'
                ]),
                L = g.useRef(null),
                M = (0, l.default)(L, b),
                N = function(a) {
                    a.stopPropagation(), D && D(a);
                },
                O = !(!1 === t || !C) || t,
                P = 'small' === H,
                Q = w || (O ? n.default : 'div'),
                R = Q === n.default ? {
                    component: 'div'
                } : {},
                S = null;
            if (D) {
                var T = (0, h.default)('default' !== v && ('default' === J ? r['deleteIconColor'.concat((0, m.default)(v))] : r['deleteIconOutlinedColor'.concat((0, m.default)(v))]), P && r.deleteIconSmall);
                S = x && g.isValidElement(x) ? g.cloneElement(x, {
                    className: (0, h.default)(x.props.className, r.deleteIcon, T),
                    onClick: N
                }) : g.createElement(i.default, {
                    className: (0, h.default)(r.deleteIcon, T),
                    onClick: N
                });
            }
            var T = null;
            q && g.isValidElement(q) && (T = g.cloneElement(q, {
                className: (0, h.default)(r.avatar, q.props.className, P && r.avatarSmall, 'default' !== v && r['avatarColor'.concat((0, m.default)(v))])
            }));
            var U = null;
            return A && g.isValidElement(A) && (U = g.cloneElement(A, {
                className: (0, h.default)(r.icon, A.props.className, P && r.iconSmall, 'default' !== v && r['iconColor'.concat((0, m.default)(v))])
            })), g.createElement(Q, (0, e.default)({
                role: O || D ? 'button' : void 0,
                className: (0, h.default)(r.root, s, 'default' !== v && [
                    r['color'.concat((0, m.default)(v))],
                    O && r['clickableColor'.concat((0, m.default)(v))],
                    D && r['deletableColor'.concat((0, m.default)(v))]
                ], 'default' !== J && [
                    r.outlined,
                    {
                        primary: r.outlinedPrimary,
                        secondary: r.outlinedSecondary
                    } [v]
                ], z && r.disabled, P && r.sizeSmall, O && r.clickable, D && r.deletable),
                'aria-disabled': !!z || void 0,
                tabIndex: O || D ? 0 : void 0,
                onClick: C,
                onKeyDown: function(a) {
                    a.currentTarget === a.target && o(a) && a.preventDefault(), E && E(a);
                },
                onKeyUp: function(a) {
                    a.currentTarget === a.target && (D && o(a) ? D(a) : 'Escape' === a.key && L.current && L.current.blur()), F && F(a);
                },
                ref: M
            }, R, K), T || U, g.createElement('span', {
                className: (0, h.default)(r.label, P && r.labelSmall)
            }, B), S);
        }),
        q = (0, j.default)(function(a) {
            var r = 'light' === a.palette.type ? a.palette.grey[300] : a.palette.grey[700],
                s = (0, k.fade)(a.palette.text.primary, 0.26);
            return {
                root: {
                    fontFamily: a.typography.fontFamily,
                    fontSize: a.typography.pxToRem(13),
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 32,
                    color: a.palette.getContrastText(r),
                    backgroundColor: r,
                    borderRadius: 16,
                    whiteSpace: 'nowrap',
                    transition: a.transitions.create([
                        'background-color',
                        'box-shadow'
                    ]),
                    cursor: 'default',
                    outline: 0,
                    textDecoration: 'none',
                    border: 'none',
                    padding: 0,
                    verticalAlign: 'middle',
                    boxSizing: 'border-box',
                    '&$disabled': {
                        opacity: 0.5,
                        pointerEvents: 'none'
                    },
                    '& $avatar': {
                        marginLeft: 5,
                        marginRight: -6,
                        width: 24,
                        height: 24,
                        color: 'light' === a.palette.type ? a.palette.grey[700] : a.palette.grey[300],
                        fontSize: a.typography.pxToRem(12)
                    },
                    '& $avatarColorPrimary': {
                        color: a.palette.primary.contrastText,
                        backgroundColor: a.palette.primary.dark
                    },
                    '& $avatarColorSecondary': {
                        color: a.palette.secondary.contrastText,
                        backgroundColor: a.palette.secondary.dark
                    },
                    '& $avatarSmall': {
                        marginLeft: 4,
                        marginRight: -4,
                        width: 18,
                        height: 18,
                        fontSize: a.typography.pxToRem(10)
                    }
                },
                sizeSmall: {
                    height: 24
                },
                colorPrimary: {
                    backgroundColor: a.palette.primary.main,
                    color: a.palette.primary.contrastText
                },
                colorSecondary: {
                    backgroundColor: a.palette.secondary.main,
                    color: a.palette.secondary.contrastText
                },
                disabled: {},
                clickable: {
                    userSelect: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    cursor: 'pointer',
                    '&:hover, &:focus': {
                        backgroundColor: (0, k.emphasize)(r, 0.08)
                    },
                    '&:active': {
                        boxShadow: a.shadows[1]
                    }
                },
                clickableColorPrimary: {
                    '&:hover, &:focus': {
                        backgroundColor: (0, k.emphasize)(a.palette.primary.main, 0.08)
                    }
                },
                clickableColorSecondary: {
                    '&:hover, &:focus': {
                        backgroundColor: (0, k.emphasize)(a.palette.secondary.main, 0.08)
                    }
                },
                deletable: {
                    '&:focus': {
                        backgroundColor: (0, k.emphasize)(r, 0.08)
                    }
                },
                deletableColorPrimary: {
                    '&:focus': {
                        backgroundColor: (0, k.emphasize)(a.palette.primary.main, 0.2)
                    }
                },
                deletableColorSecondary: {
                    '&:focus': {
                        backgroundColor: (0, k.emphasize)(a.palette.secondary.main, 0.2)
                    }
                },
                outlined: {
                    backgroundColor: 'transparent',
                    border: '1px solid '.concat('light' === a.palette.type ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
                    '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
                        backgroundColor: (0, k.fade)(a.palette.text.primary, a.palette.action.hoverOpacity)
                    },
                    '& $avatar': {
                        marginLeft: 4
                    },
                    '& $avatarSmall': {
                        marginLeft: 2
                    },
                    '& $icon': {
                        marginLeft: 4
                    },
                    '& $iconSmall': {
                        marginLeft: 2
                    },
                    '& $deleteIcon': {
                        marginRight: 5
                    },
                    '& $deleteIconSmall': {
                        marginRight: 3
                    }
                },
                outlinedPrimary: {
                    color: a.palette.primary.main,
                    border: '1px solid '.concat(a.palette.primary.main),
                    '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
                        backgroundColor: (0, k.fade)(a.palette.primary.main, a.palette.action.hoverOpacity)
                    }
                },
                outlinedSecondary: {
                    color: a.palette.secondary.main,
                    border: '1px solid '.concat(a.palette.secondary.main),
                    '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
                        backgroundColor: (0, k.fade)(a.palette.secondary.main, a.palette.action.hoverOpacity)
                    }
                },
                avatar: {},
                avatarSmall: {},
                avatarColorPrimary: {},
                avatarColorSecondary: {},
                icon: {
                    color: 'light' === a.palette.type ? a.palette.grey[700] : a.palette.grey[300],
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
                    color: 'inherit'
                },
                iconColorSecondary: {
                    color: 'inherit'
                },
                label: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    paddingLeft: 12,
                    paddingRight: 12,
                    whiteSpace: 'nowrap'
                },
                labelSmall: {
                    paddingLeft: 8,
                    paddingRight: 8
                },
                deleteIcon: {
                    WebkitTapHighlightColor: 'transparent',
                    color: s,
                    height: 22,
                    width: 22,
                    cursor: 'pointer',
                    margin: '0 5px 0 -6px',
                    '&:hover': {
                        color: (0, k.fade)(s, 0.4)
                    }
                },
                deleteIconSmall: {
                    height: 16,
                    width: 16,
                    marginRight: 4,
                    marginLeft: -4
                },
                deleteIconColorPrimary: {
                    color: (0, k.fade)(a.palette.primary.contrastText, 0.7),
                    '&:hover, &:active': {
                        color: a.palette.primary.contrastText
                    }
                },
                deleteIconColorSecondary: {
                    color: (0, k.fade)(a.palette.secondary.contrastText, 0.7),
                    '&:hover, &:active': {
                        color: a.palette.secondary.contrastText
                    }
                },
                deleteIconOutlinedColorPrimary: {
                    color: (0, k.fade)(a.palette.primary.main, 0.7),
                    '&:hover, &:active': {
                        color: a.palette.primary.main
                    }
                },
                deleteIconOutlinedColorSecondary: {
                    color: (0, k.fade)(a.palette.secondary.main, 0.7),
                    '&:hover, &:active': {
                        color: a.palette.secondary.main
                    }
                }
            };
        }, {
            name: 'MuiChip'
        })(p);
}), d.register('T06OQ', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('AvKre').default)(e.createElement('path', {
            d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
        }), 'Cancel');
}), d.register('AvKre', function(a, e) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('b5p1k12'),
        f = d('uPP4W'),
        g = d('3lnmR');

    function h(a, b) {
        var i = function(b, i) {
            return c(f).createElement(g.default, (0, e.default)({
                ref: i
            }, b), a);
        };
        return i.muiName = g.default.muiName, c(f).memo(c(f).forwardRef(i));
    }
}), d.register('UX9ja', function(a, c) {
    b(a.exports, 'default', function() {
        return n;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('M8YtH'),
        h = d('lf3yz'),
        i = d('UnUp5'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('PDLD/2');
    let m = class extends k.Component {
        componentDidMount() {
            (0, i.when)(() => this.props.gameValues.gameStatus === l.GameStatus.gameplay || this.props.gameValues.gameStatus === l.GameStatus.teams || this.props.gameValues.gameStatus === l.GameStatus.results, () => {
                this.props.gameValues.gameStatus !== l.GameStatus.teams ? this.props.gameValues.gameStatus !== l.GameStatus.results ? (0, h.startGame)() : (0, h.changeRoute)(g.default.gameOver) : (0, h.changeRoute)(g.default.team);
            }, {});
        }
        render() {
            return null;
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                hasCalledStart: !1
            });
        }
    };
    m = (0, f.__decorate)([
        (0, j.inject)('gameValues', 'gameOptions'),
        j.observer
    ], m);
    var n = o;
}), d.register('afApC', function(a, c) {
    b(a.exports, 'default', function() {
        return z;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('VCvua0'),
        i = d('rdFK4'),
        j = d('jYs8b'),
        k = d('JVq9i'),
        l = d('MoXej'),
        m = d('Tw8MQ'),
        n = d('M8YtH'),
        o = d('UNaEe'),
        p = d('lf3yz'),
        q = d('Vlfxs'),
        r = d('uPP4W'),
        s = d('zlZlL'),
        t = d('zrAm/'),
        u = d('aJrc9'),
        v = d('rIUMG'),
        w = d('aX6SF');
    d('/jgct');
    var x = d('k8riP');
    let y = class extends r.Component {
        componentDidMount() {
            (0, p.blockShopping)() && (0, p.changeRoute)(n.default.questions);
        }
        render() {
            return (0, g.jsx)(i.Container, {
                customBackground: h.default.White,
                children: this.getContent()
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'changeShopTab', a => {
                o.click2.play(), this.props.navigation.currentShopTab = a;
            }), (0, e.default)(this, 'getContent', () => {
                return (0, p.inQrScanMode)() ? (0, g.jsx)(u.default, {}) : (0, p.inImposterMode)() ? (0, g.jsx)(w.default, {}) : (0, g.jsxs)(g.Fragment, {
                    children: [
                        (a = this.props.navigation.currentShopTab, a === s.ShopTab.upgrades ? (0, g.jsx)(m.default, {}) : a === s.ShopTab.powerups ? (0, g.jsx)(k.default, {}) : a === s.ShopTab.defendingHomebase ? (0, g.jsx)(t.default, {}) : a === s.ShopTab.lava ? (0, g.jsx)(v.default, {}) : a === s.ShopTab.powerupsNonMusic ? (0, g.jsx)(k.default, {
                            hidePowerup: a => !(!a.category || !a.category.includes(x.PowerupCategory.specialSound))
                        }) : a === s.ShopTab.powerupsMusic ? (0, g.jsx)(k.default, {
                            hidePowerup: a => !a.category || !a.category.includes(x.PowerupCategory.specialSound)
                        }) : (0, g.jsx)(l.default, {})),
                        (0, g.jsx)(j.default, {
                            changeShopTab: this.changeShopTab,
                            value: this.props.navigation.currentShopTab
                        })
                    ]
                });
                var z;
            });
        }
    };
    y = (0, f.__decorate)([
        (0, q.inject)('navigation'),
        q.observer
    ], y);
    var z = A;
}), d.register('jYs8b', function(a, c) {
    b(a.exports, 'default', function() {
        return x;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('D9VwO'),
        i = d('Wpune'),
        j = d('i2hi8'),
        k = d('JbwDr'),
        l = d('9BNXc'),
        m = d('jdkVQ'),
        n = d('Z881J'),
        o = d('VVGB6'),
        p = d('G5sHI'),
        q = d('lf3yz'),
        r = d('Vlfxs'),
        s = d('uPP4W'),
        t = d('zlZlL');
    let u;
    const v = (0, d('h99Nu').default)(h.default)(u || (u = (a => a)`
  height: 68px !important;
  border-top-color: rgba(0, 0, 0, 0.6);
  border-top-style: solid;
  border-top-width: 2px;
`));
    let w = class extends s.Component {
        render() {
            return (0, g.jsxs)(v, {
                value: this.props.value,
                onChange: this.handleTabChange,
                style: {
                    zIndex: 0
                },
                showLabels: !0,
                children: [
                    (0, q.inLavaMode)() && (0, g.jsx)(i.default, {
                        label: (0, g.jsx)(p.default, {
                            text: 'Build'
                        }),
                        icon: (0, g.jsx)(j.default, {}),
                        value: t.ShopTab.lava
                    }),
                    (0, q.inZombiesVsHumansMode)() && (0, g.jsx)(i.default, {
                        label: (0, g.jsx)(p.default, {
                            text: 'Home'
                        }),
                        icon: (0, g.jsx)(l.default, {}),
                        value: t.ShopTab.defendingHomebase
                    }),
                    (0, g.jsx)(i.default, {
                        label: (0, g.jsx)(p.default, {
                            text: 'Upgrades'
                        }),
                        icon: (0, g.jsx)(o.default, {}),
                        value: t.ShopTab.upgrades
                    }),
                    this.canShowPowerups() && (0, g.jsx)(i.default, {
                        label: (0, g.jsx)(p.default, {
                            text: (0, q.inThanosMode)() ? 'Items' : 'Powerups'
                        }),
                        icon: (0, g.jsx)(n.default, {}),
                        value: t.ShopTab.powerups
                    }),
                    (0, q.inComebackMode)() && (0, g.jsx)(i.default, {
                        label: (0, g.jsx)(p.default, {
                            text: 'Powerups'
                        }),
                        icon: (0, g.jsx)(n.default, {}),
                        value: t.ShopTab.powerupsNonMusic
                    }),
                    this.props.gameOptions.music && (0, q.inComebackMode)() && (0, g.jsx)(i.default, {
                        label: (0, g.jsx)(p.default, {
                            text: 'Music'
                        }),
                        icon: (0, g.jsx)(m.default, {}),
                        value: t.ShopTab.powerupsMusic
                    }),
                    this.canShowThemes() && (0, g.jsx)(i.default, {
                        label: (0, g.jsx)(p.default, {
                            text: 'Themes'
                        }),
                        icon: (0, g.jsx)(k.default, {}),
                        value: t.ShopTab.themes
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'canShowPowerups', () => this.props.gameOptions.powerups && !(0, q.inComebackMode)()), (0, e.default)(this, 'canShowThemes', () => this.props.gameOptions.themes), (0, e.default)(this, 'handleTabChange', (a, b) => {
                this.props.changeShopTab(b);
            });
        }
    };
    w = (0, f.__decorate)([
        (0, r.inject)('gameOptions'),
        r.observer
    ], w);
    var x = y;
}), d.register('D9VwO', function(a, c) {
    b(a.exports, 'default', function() {
        return o;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('vQh9m'), d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = g.forwardRef(function(a, b) {
            var k = a.children,
                l = a.classes,
                m = a.className,
                n = a.component,
                o = void 0 === n ? 'div' : n,
                p = a.onChange,
                q = a.showLabels,
                r = void 0 !== q && q,
                s = a.value,
                t = (0, f.default)(a, [
                    'children',
                    'classes',
                    'className',
                    'component',
                    'onChange',
                    'showLabels',
                    'value'
                ]);
            return g.createElement(o, (0, e.default)({
                className: (0, h.default)(l.root, m),
                ref: b
            }, t), g.Children.map(k, function(a, b) {
                if (!g.isValidElement(a))
                    return null;
                var u = void 0 === a.props.value ? b : a.props.value;
                return g.cloneElement(a, {
                    selected: u === s,
                    showLabel: void 0 !== a.props.showLabel ? a.props.showLabel : r,
                    value: u,
                    onChange: p
                });
            }));
        }),
        k = (0, i.default)(function(a) {
            return {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    height: 56,
                    backgroundColor: a.palette.background.paper
                }
            };
        }, {
            name: 'MuiBottomNavigation'
        })(j);
}), d.register('Wpune', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = d('8nGxX'),
        k = g.forwardRef(function(a, b) {
            var l = a.classes,
                m = a.className,
                n = a.icon,
                o = a.label,
                p = a.onChange,
                q = a.onClick,
                r = a.selected,
                s = a.showLabel,
                t = a.value,
                u = (0, f.default)(a, [
                    'classes',
                    'className',
                    'icon',
                    'label',
                    'onChange',
                    'onClick',
                    'selected',
                    'showLabel',
                    'value'
                ]);
            return g.createElement(j.default, (0, e.default)({
                ref: b,
                className: (0, h.default)(l.root, m, r ? l.selected : !s && l.iconOnly),
                focusRipple: !0,
                onClick: function(a) {
                    p && p(a, t), q && q(a);
                }
            }, u), g.createElement('span', {
                className: l.wrapper
            }, n, g.createElement('span', {
                className: (0, h.default)(l.label, r ? l.selected : !s && l.iconOnly)
            }, o)));
        }),
        l = (0, i.default)(function(a) {
            return {
                root: {
                    transition: a.transitions.create([
                        'color',
                        'padding-top'
                    ], {
                        duration: a.transitions.duration.short
                    }),
                    padding: '6px 12px 8px',
                    minWidth: 80,
                    maxWidth: 168,
                    color: a.palette.text.secondary,
                    flex: '1',
                    '&$iconOnly': {
                        paddingTop: 16
                    },
                    '&$selected': {
                        paddingTop: 6,
                        color: a.palette.primary.main
                    }
                },
                selected: {},
                iconOnly: {},
                wrapper: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    flexDirection: 'column'
                },
                label: {
                    fontFamily: a.typography.fontFamily,
                    fontSize: a.typography.pxToRem(12),
                    opacity: 1,
                    transition: 'font-size 0.2s, opacity 0.2s',
                    transitionDelay: '0.1s',
                    '&$iconOnly': {
                        opacity: 0,
                        transitionDelay: '0s'
                    },
                    '&$selected': {
                        fontSize: a.typography.pxToRem(14)
                    }
                }
            };
        }, {
            name: 'MuiBottomNavigationAction'
        })(k);
}), d.register('i2hi8', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'
        }), 'Build');
}), d.register('JbwDr', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z'
        }), 'FormatPaint');
}), d.register('9BNXc', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
        }), 'Home');
}), d.register('jdkVQ', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'
        }), 'MusicNote');
}), d.register('Z881J', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z'
        }), 'Power');
}), d.register('VVGB6', function(a, e) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = (0, d('8dyts').default)(c(e).createElement('path', {
            d: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'
        }), 'TrendingUp');
}), d.register('JVq9i', function(a, c) {
    b(a.exports, 'default', function() {
        return D;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('G5sHI'),
        i = d('0abqC'),
        j = d('M8YtH'),
        k = d('lf3yz'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('h99Nu'),
        o = d('v+vnP');
    let p, q, r, s, t, u, v = a => a;
    var w;
    (w = u || (u = {})).treasure = 'Treaure', w.powerups = 'Powerups';
    const x = n.default.div(p || (p = v`
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`)),
        y = n.default.div(q || (q = v`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-right: 10px;
`)),
        z = n.default.h2(r || (r = v`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 700px) {
    font-size: 40px;
  }
`)),
        A = n.default.div(s || (s = v`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
`)),
        B = n.default.img.attrs({
            src: (0, k.getAssetPath)('treasure.svg')
        })(t || (t = v`
  width: 50%;
  max-width: 250px;
  max-height: 25vh;
  cursor: pointer;
`));
    let C = class extends m.Component {
        render() {
            return (0, g.jsx)(x, {
                children: this.renderScreens()
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                showPowerupsHelperModal: !1,
                showTreasureChest: !0,
                currentScreen: this.props.gameOptions.enablePowerupRNGAnimation && !this.props.navigation.powerupRNGAnimationDone ? u.treasure : u.powerups
            }), (0, e.default)(this, 'renderScreens', () => {
                const {
                    currentScreen: D
                } = this.state;
                let E = null;
                return D === u.treasure ? E = this.treasureChestScreen() : D === u.powerups && (E = this.powerupsScreen()), E;
            }), (0, e.default)(this, 'treasureChestScreen', () => (0, g.jsxs)(A, {
                className: !this.state.showTreasureChest && 'animated fadeOut',
                children: [
                    (0, g.jsx)(z, {
                        children: (0, g.jsx)(h.default, {
                            text: 'Open The Treasure Chest To Unlock Your Powerups!'
                        })
                    }),
                    (0, g.jsx)(B, {
                        className: this.state.showTreasureChest ? 'animated pulse infinite' : 'animated bounceOut',
                        onClick: this.hideTreasureChest
                    })
                ]
            })), (0, e.default)(this, 'powerupsScreen', () => (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(y, {
                        className: this.props.gameOptions.enablePowerupRNGAnimation && !this.props.navigation.visitedPowerupSection ? 'animated fadeIn' : '',
                        children: this.props.powerups.availablePowerups.filter(a => !this.props.powerups.disabledPowerups.includes(a.name) && (!this.props.hidePowerup || !this.props.hidePowerup(a))).map(a => (0, g.jsx)(i.default, {
                            powerup: a,
                            openModal: this.openModal
                        }, a.name))
                    }),
                    (0, g.jsx)(o.default, {
                        open: this.state.showPowerupsHelperModal,
                        close: this.closeModal,
                        closeAndReturnToQuestions: this.closeAndReturnToQuestions
                    })
                ]
            })), (0, e.default)(this, 'hideTreasureChest', () => {
                this.props.navigation.powerupRNGAnimationDone = !0, this.setState({
                    showTreasureChest: !1
                }, () => setTimeout(() => this.setState({
                    currentScreen: u.powerups
                }, () => setTimeout(() => this.props.navigation.visitedPowerupSection = !0, 500)), 1000));
            }), (0, e.default)(this, 'openModal', () => this.setState({
                showPowerupsHelperModal: !0
            })), (0, e.default)(this, 'closeAndReturnToQuestions', () => {
                this.closeModal(), setTimeout(() => (0, k.changeRoute)(j.default.questions), 510);
            }), (0, e.default)(this, 'closeModal', () => {
                this.setState({
                    showPowerupsHelperModal: !1
                });
            });
        }
    };
    C = (0, f.__decorate)([
        (0, l.inject)('powerups', 'gameOptions', 'navigation'),
        l.observer
    ], C);
    var D = E;
}), d.register('0abqC', function(a, c) {
    b(a.exports, 'default', function() {
        return F;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('7IC8s'),
        i = d('m96/N'),
        j = d('VDucS'),
        k = d('G5sHI'),
        l = d('5WRxN'),
        m = d('cJ4UC'),
        n = d('M8YtH'),
        o = d('UNaEe'),
        p = d('lf3yz'),
        q = d('Vlfxs'),
        r = d('uPP4W'),
        s = d('h99Nu');
    let t, u, v, w, x, y = a => a;
    const z = s.default.div(t || (t = y`
  box-shadow: ${ 0 };
  flex-grow: 1;
  width: 510px;
  border-radius: ${ 0 }px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`), l.default.basic, 5),
        A = s.default.div(u || (u = y`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  box-sizing: border-box;
  background: ${ 0 };
  color: ${ 0 };
  border-top-left-radius: ${ 0 }px;
  border-top-right-radius: ${ 0 }px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  flex-grow: 1;
  flex-direction: column;
`), a => a.colors.background, a => a.colors.text, 5, 5),
        B = s.default.div(v || (v = y`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: flex-end;
`)),
        C = s.default.div(w || (w = y`
  font-weight: bold;
  font-size: 26px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`)),
        D = s.default.div(x || (x = y`
  color: rgba(0, 0, 0, 0.7);
`));
    let E = class extends r.Component {
        render() {
            const {
                powerup: F
            } = this.props, G = this.getButtonDetails();
            return (0, g.jsxs)(z, {
                children: [
                    (0, g.jsxs)(A, {
                        colors: F.color,
                        children: [
                            (0, g.jsx)(j.default, {
                                name: F.icon
                            }),
                            F.customTag && (0, g.jsx)(h.default, {
                                style: {
                                    marginTop: 5
                                },
                                label: F.customTag
                            })
                        ]
                    }),
                    (0, g.jsxs)(B, {
                        children: [
                            (0, g.jsxs)('div', {
                                style: {
                                    marginRight: 10
                                },
                                children: [
                                    (0, g.jsx)(C, {
                                        children: (0, g.jsx)('div', {
                                            style: {
                                                marginRight: 5
                                            },
                                            children: (0, g.jsx)(k.default, {
                                                text: (0, p.getPowerupName)(F)
                                            })
                                        })
                                    }),
                                    (0, g.jsx)(D, {
                                        children: (0, g.jsx)(k.default, {
                                            text: (0, p.getPowerupDescription)(F.description)
                                        })
                                    })
                                ]
                            }),
                            (0, g.jsx)(i.default, {
                                type: G.type,
                                label: (0, g.jsx)(k.default, {
                                    text: G.label,
                                    disableIfContains: this.props.gameOptions.currency
                                }),
                                onClick: G.onClick
                            })
                        ]
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'getCost', () => 5 * Math.ceil((this.props.balance.balance * this.props.powerup.percentageCost + this.props.powerup.baseCost) / 5)), (0, e.default)(this, 'getButtonDetails', () => {
                const {
                    balance: F,
                    powerup: G
                } = this.props, H = this.getCost(), I = F.balance >= H && !this.props.powerups.purchasedPowerups.includes(G.name);
                return {
                    label: this.props.powerups.purchasedPowerups.includes(G.name) ? this.props.powerups.usedPowerups.includes(G.name) ? 'Used' : 'Purchased' : (0, p.getMoney)(H),
                    type: I ? 'primary' : 'disabled',
                    onClick: I ? this.purchase : null
                };
            }), (0, e.default)(this, 'purchase', () => {
                o.successClick.play(), this.props.powerups.hasShownHelperModal || this.props.powerup.autoActivate || (this.props.powerups.hasShownHelperModal = !0, this.props.openModal()), (0, p.send)(m.default.powerupPurchased, this.props.powerup.name), this.props.powerup.autoActivate && (0, p.changeRoute)(n.default.questions);
            });
        }
    };
    E = (0, f.__decorate)([
        (0, q.inject)('powerups', 'gameOptions', 'balance'),
        q.observer
    ], E);
    var F = G;
}), d.register('v+vnP', function(a, c) {
    b(a.exports, 'default', function() {
        return v;
    });
    var e = d('8kSQZ'),
        f = d('m96/N'),
        g = d('E1Ead'),
        h = d('G5sHI'),
        i = d('qA0vg'),
        j = d('5WRxN'),
        k = d('lf3yz'),
        l = d('uPP4W'),
        m = d('h99Nu');
    let n, o, p, q = a => a;
    const r = m.default.div(n || (n = q`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${ 0 };
`), i.default.name),
        s = m.default.div(o || (o = q`
  font-weight: bold;
  font-size: 29px;
`)),
        t = m.default.div(p || (p = q`
  font-size: 21px;
  text-align: center;
  margin-bottom: 15px;
`));
    class u extends l.Component {
        render() {
            return (0, e.jsx)(g.default, {
                open: this.props.open,
                close: this.props.close,
                children: (0, e.jsxs)(r, {
                    children: [
                        (0, e.jsx)(s, {
                            children: (0, e.jsx)(h.default, {
                                text: 'Powerup Purchased!'
                            })
                        }),
                        (0, e.jsx)(t, {
                            children: (0, e.jsx)(h.default, {
                                text: 'Activate your powerup via the tray menu'
                            })
                        }),
                        (0, e.jsx)('img', {
                            src: (0, k.getAssetPath)('PowerupTutorial.gif'),
                            style: {
                                maxHeight: 270,
                                borderRadius: 3,
                                boxShadow: j.default.basic,
                                marginBottom: 15
                            }
                        }),
                        (0, e.jsx)(f.default, {
                            type: 'secondary',
                            size: 'large',
                            onClick: this.props.closeAndReturnToQuestions,
                            label: (0, e.jsx)(h.default, {
                                text: 'Got It'
                            })
                        })
                    ]
                })
            });
        }
    }
    var v = w;
}), d.register('MoXej', function(a, c) {
    b(a.exports, 'Container', function() {
        return n;
    }), b(a.exports, 'default', function() {
        return q;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('dwG90'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('h99Nu');
    let k, l, m = a => a;
    const n = j.default.div(k || (k = m`
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`)),
        o = j.default.div(l || (l = m`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
`));
    let p = class extends i.Component {
        render() {
            const {
                theme: {
                    availableThemes: q
                }
            } = this.props;
            return (0, f.jsx)(n, {
                children: (0, f.jsx)(o, {
                    children: q.slice().sort((q, b) => q.cost - b.cost).filter(q => !this.props.theme.disabledThemes.includes(q.name)).map(q => (0, f.jsx)(g.default, {
                        specifiedTheme: q
                    }, q.name))
                })
            });
        }
    };
    p = (0, e.__decorate)([
        (0, h.inject)('theme'),
        h.observer
    ], p);
    var q = r;
}), d.register('dwG90', function(a, c) {
    b(a.exports, 'default', function() {
        return G;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('m96/N'),
        i = d('G5sHI'),
        j = d('5WRxN'),
        k = d('cJ4UC'),
        l = d('M8YtH'),
        m = d('UNaEe'),
        n = d('lf3yz'),
        o = d('Vlfxs'),
        p = d('uPP4W'),
        q = d('zlZlL'),
        r = d('h99Nu');
    let s, t, u, v, w, x, y = a => a;
    const z = r.default.div(s || (s = y`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 470px;
  border-radius: ${ 0 }px;
  margin: 10px;
  box-shadow: ${ 0 };
`), 5, j.default.basic),
        A = r.default.div(t || (t = y`
  width: 100%;
  height: 100px;
  display: flex;
`)),
        B = r.default.div(u || (u = y`
  height: 100%;
  width: 25%;
  border-top-left-radius: ${ 0 }px;
  border-top-right-radius: ${ 0 }px;
  background: ${ 0 };
`), a => 0 === a.index ? 5 : 0, a => 3 === a.index ? 5 : 0, a => a.color),
        C = r.default.div(v || (v = y`
  border-bottom-left-radius: ${ 0 }px;
  border-bottom-right-radius: ${ 0 }px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`), 5, 5),
        D = r.default.div(w || (w = y`
  color: rgba(0, 0, 0, 0.7);
`)),
        E = r.default.div(x || (x = y`
  font-weight: bold;
  font-size: 26px;
  font-weight: bold;
`));
    let F = class extends p.Component {
        render() {
            const G = this.getButtonDetails(),
                H = this.props.specifiedTheme;
            return (0, g.jsxs)(z, {
                children: [
                    (0, g.jsx)(A, {
                        children: H.palette.map((G, H) => (0, g.jsx)(B, {
                            index: H,
                            color: G.background
                        }, G.background + H))
                    }),
                    (0, g.jsxs)(C, {
                        children: [
                            (0, g.jsxs)('div', {
                                style: {
                                    marginRight: 10
                                },
                                children: [
                                    (0, g.jsx)(E, {
                                        children: H.name
                                    }),
                                    (0, g.jsx)(D, {
                                        children: (0, g.jsx)(i.default, {
                                            text: H.description
                                        })
                                    })
                                ]
                            }),
                            (0, g.jsx)(h.default, {
                                onClick: G.onClick,
                                type: G.type,
                                label: G.text
                            })
                        ]
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'getButtonDetails', () => {
                if (this.ownsTheme())
                    return this.canApplyTheme() ? {
                        type: 'secondary',
                        text: (0, g.jsx)(i.default, {
                            text: 'Apply'
                        }),
                        onClick: () => {
                            m.applyTheme.play(), this.props.navigation.currentShopTab = q.ShopTab.upgrades, (0, n.send)(k.default.themeApplied, this.props.specifiedTheme.name), (0, n.changeRoute)(l.default.questions);
                        }
                    } : {
                        type: 'disabled',
                        text: (0, g.jsx)(i.default, {
                            text: 'Applied'
                        })
                    };
                const G = (0, n.getMoney)(this.props.specifiedTheme.cost);
                return this.canPurchaseTheme() ? {
                    type: 'primary',
                    text: G,
                    onClick: () => {
                        m.successClick.play(), (0, n.purchaseTheme)(this.props.specifiedTheme.name);
                    }
                } : {
                    type: 'disabled',
                    text: G
                };
            }), (0, e.default)(this, 'ownsTheme', () => this.props.theme.ownedThemes.includes(this.props.specifiedTheme.name)), (0, e.default)(this, 'canApplyTheme', () => this.ownsTheme() && this.props.theme.themeName !== this.props.specifiedTheme.name), (0, e.default)(this, 'canPurchaseTheme', () => !this.ownsTheme() && this.props.specifiedTheme.cost <= this.props.balance.balance);
        }
    };
    F = (0, f.__decorate)([
        (0, o.inject)('balance', 'theme', 'navigation'),
        o.observer
    ], F);
    var G = H;
}), d.register('Tw8MQ', function(a, c) {
    b(a.exports, 'default', function() {
        return n;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('VCvua0'),
        h = d('T8di/'),
        i = d('Vlfxs'),
        j = d('uPP4W');
    let k;
    const l = d('h99Nu').default.div(k || (k = (a => a)`
  flex: 1;
  background: ${ 0 };
  color: ${ 0 };
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
`), g.default.BackgroundGray, g.default.Black);
    let m = class extends j.Component {
        render() {
            const {
                upgrades: n
            } = this.props;
            return (0, f.jsx)(l, {
                children: n.upgrades.map((n, b) => (0, f.jsx)(h.default, {
                    title: n.name,
                    description: n.description,
                    icon: n.icon,
                    index: b
                }, n.name))
            });
        }
    };
    m = (0, e.__decorate)([
        (0, i.inject)('upgrades'),
        i.observer
    ], m);
    var n = o;
}), d.register('T8di/', function(a, c) {
    b(a.exports, 'default', function() {
        return e;
    });
    var e = d('l14ud').default;
}), d.register('l14ud', function(a, c) {
    b(a.exports, 'default', function() {
        return x;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('G5sHI'),
        i = d('VCvua0'),
        j = d('5WRxN'),
        k = d('pZF/U'),
        l = d('M8YtH'),
        m = d('UNaEe'),
        n = d('lf3yz'),
        o = d('Vlfxs'),
        p = d('uPP4W'),
        q = d('h99Nu');
    let r, s, t = a => a;
    const u = q.default.div(r || (r = t`
  margin-bottom: 10px;
  background: ${ 0 };
  display: flex;
  align-items: center;
  color: ${ 0 };
  border-radius: 4px;
  box-shadow: ${ 0 };
  width: 100%;
  height: calc(25% - 10px);
  min-height: 80px;
  cursor: pointer;
  @media (min-width: ${ 0 }px) {
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
`), i.default.White, i.default.Black, j.default.basic, a => a.breakpoint),
        v = q.default.div(s || (s = t`
  margin-left: 10px;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-right: 12px;
  @media (min-width: ${ 0 }px) {
    text-align: center;
  }
`), a => a.breakpoint);
    let w = class extends p.Component {
        render() {
            return (0, g.jsxs)(u, {
                onClick: this.handleClick,
                breakpoint: 700,
                children: [
                    (0, g.jsx)(k.default, {
                        index: this.props.index,
                        name: this.props.icon,
                        desktopBreakpoint: 700
                    }),
                    (0, g.jsxs)(v, {
                        breakpoint: 700,
                        children: [
                            (0, g.jsx)('div', {
                                style: {
                                    fontWeight: 'bold',
                                    fontSize: 24
                                },
                                children: (0, g.jsx)(h.default, {
                                    text: this.props.title
                                })
                            }),
                            (0, g.jsx)('div', {
                                children: (0, g.jsx)(h.default, {
                                    text: this.props.description
                                })
                            })
                        ]
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'handleClick', () => {
                m.click.play(), this.props.upgrades.currentlySelectedUpgrade = this.props.title, (0, n.changeRoute)(l.default.upgrade);
            });
        }
    };
    w = (0, f.__decorate)([
        (0, o.inject)('upgrades'),
        o.observer
    ], w);
    var x = y;
}), d.register('pZF/U', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('UM8oI'),
        f = d('8kSQZ'),
        g = d('VDucS'),
        h = d('uPP4W');
    let i;
    const j = d('h99Nu').default.div(i || (i = (a => a)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
  height: 100%;
  width: 6%;
  min-width: 44px;
  background: ${ 0 };
  color: ${ 0 };
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 25px;
  @media (min-width: ${ 0 }) {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    padding: 0px;
    font-size: 30px;
  }
`), a => a.theme.palette[a.index].background, a => a.theme.palette[a.index].text, a => `${ a.breakpoint }px`);
    class k extends h.Component {
        componentDidMount() {
            window.addEventListener('resize', this.updateWidth);
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.updateWidth);
        }
        render() {
            return (0, f.jsx)(j, {
                breakpoint: this.props.desktopBreakpoint,
                index: this.props.index,
                children: (0, f.jsx)(g.default, {
                    name: this.props.name
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                screenWidth: 0
            }), (0, e.default)(this, 'updateWidth', () => {
                this.setState({
                    screenWidth: window.innerWidth
                });
            });
        }
    }
}), d.register('zrAm/', function(a, c) {
    b(a.exports, 'default', function() {
        return s;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('cJ4UC'),
        i = d('M8YtH'),
        j = d('lf3yz'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('h99Nu'),
        n = d('MoXej'),
        o = d('Bhr9a'),
        p = d('ngoNz');
    let q, r = class extends l.Component {
        componentDidMount() {
            (0, j.requestDefendingHomebase)(), this.checkHomebaseInterval = setInterval(() => {
                (0, j.requestDefendingHomebase)();
            }, 5000);
        }
        componentWillUnmount() {
            this.checkHomebaseInterval && clearInterval(this.checkHomebaseInterval);
        }
        render() {
            return (0, g.jsx)(n.Container, {
                style: {
                    display: 'flex',
                    justifyContent: 'center'
                },
                children: (0, g.jsxs)(u, {
                    children: [
                        (0, g.jsx)(o.default, {}),
                        this.props.upgrades.homebaseUpgades.map(a => {
                            const s = this.getCost(a.baseCost, a.percentageCost),
                                t = this.props.balance.balance >= s;
                            return (0, g.jsx)(p.default, {
                                name: a.name,
                                description: a.description,
                                cost: s,
                                canAfford: t,
                                icon: a.icon,
                                background: a.background,
                                onClick: () => {
                                    t && ((0, j.send)(h.default.upgradeDefendingHomebase, {
                                        id: a.id
                                    }), (0, j.changeRoute)(i.default.questions));
                                }
                            }, a.id);
                        }),
                        (0, g.jsx)('div', {
                            style: {
                                height: 20,
                                width: '100%'
                            }
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'checkHomebaseInterval', null), (0, e.default)(this, 'getCost', (a, b) => 5 * Math.ceil((a + b * this.props.balance.maxBalance) / 5));
        }
    };
    r = (0, f.__decorate)([
        (0, k.inject)('upgrades', 'balance'),
        k.observer
    ], r);
    var s = t;
    const u = m.default.div(q || (q = (a => a)`
  width: 100%;
  max-width: 700px;
`));
}), d.register('Bhr9a', function(a, c) {
    b(a.exports, 'Container', function() {
        return v;
    }), b(a.exports, 'IconContainer', function() {
        return w;
    }), b(a.exports, 'default', function() {
        return t;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('xlmLC'),
        h = d('VDucS'),
        i = d('G5sHI'),
        j = d('VCvua0'),
        k = d('5WRxN'),
        l = d('lf3yz'),
        m = d('Vlfxs'),
        n = d('uPP4W'),
        o = d('h99Nu');
    let p, q, r = a => a;
    let s = class extends n.Component {
        render() {
            const t = this.props.entities.defendingHomebase;
            return t ? (0, f.jsxs)(v, {
                children: [
                    (0, f.jsx)(w, {
                        colors: {
                            text: j.default.White,
                            background: t.backgroundColor
                        },
                        children: (0, f.jsx)(h.default, {
                            name: t.icon
                        })
                    }),
                    (0, f.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        },
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    fontWeight: 900,
                                    fontSize: 35
                                },
                                children: (0, f.jsx)(i.default, {
                                    text: t.name
                                })
                            }),
                            (0, f.jsxs)('div', {
                                style: {
                                    fontSize: 23,
                                    marginTop: -5
                                },
                                children: [
                                    (0, l.numberWithCommas)(t.health),
                                    '/',
                                    (0, l.numberWithCommas)(t.maxHealth),
                                    ' ',
                                    (0, f.jsx)(i.default, {
                                        text: 'health'
                                    })
                                ]
                            }),
                            (0, f.jsx)(g.default, {
                                style: {
                                    width: '100%',
                                    marginTop: 5,
                                    marginBottom: 10,
                                    maxWidth: 400
                                }
                            }),
                            (0, f.jsxs)('div', {
                                children: [
                                    (0, f.jsx)(i.default, {
                                        text: 'Losing'
                                    }),
                                    ' ',
                                    (0, f.jsx)('b', {
                                        children: (0, l.numberWithCommas)((b = t.healthDecreasePerTick, Math.round(10 * b) / 10))
                                    }),
                                    ' ',
                                    (0, f.jsx)(i.default, {
                                        text: 'health per second'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : null;
            var u;
        }
    };
    s = (0, e.__decorate)([
        (0, m.inject)('entities'),
        m.observer
    ], s);
    var t = u;
    const v = o.default.div(p || (p = r`
  margin: 20px;
  border-radius: ${ 0 }px;
  box-shadow: ${ 0 };
`), 5, k.default.basic),
        w = o.default.div(q || (q = r`
  width: 100%;
  min-height: 120px;
  padding: 10px;
  box-sizing: border-box;
  background: ${ 0 };
  color: ${ 0 };
  border-top-left-radius: ${ 0 }px;
  border-top-right-radius: ${ 0 }px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  flex-grow: 1;
  flex-direction: column;
`), a => a.colors.background, a => a.colors.text, 5, 5);
}), d.register('ngoNz', function(a, c) {
    b(a.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ'),
        f = d('m96/N'),
        g = d('VDucS'),
        h = d('G5sHI'),
        i = d('VCvua0'),
        j = d('5WRxN'),
        k = d('lf3yz'),
        l = d('uPP4W'),
        m = d('h99Nu');
    let n, o, p = a => a;
    class q extends l.Component {
        render() {
            const r = this.props;
            return (0, e.jsxs)(t, {
                style: r.style,
                children: [
                    (0, e.jsx)(u, {
                        colors: {
                            text: i.default.White,
                            background: r.background
                        },
                        children: (0, e.jsx)(g.default, {
                            name: r.icon
                        })
                    }),
                    (0, e.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between'
                        },
                        children: [
                            (0, e.jsxs)('div', {
                                className: 'flex flex-column',
                                style: {
                                    alignItems: 'flex-start'
                                },
                                children: [
                                    r.aboveNameComponent ? r.aboveNameComponent : null,
                                    (0, e.jsx)('div', {
                                        style: {
                                            fontWeight: 900,
                                            fontSize: 25
                                        },
                                        children: (0, e.jsx)(h.default, {
                                            text: r.name
                                        })
                                    }),
                                    (0, e.jsx)('div', {
                                        children: (0, e.jsx)(h.default, {
                                            text: r.description
                                        })
                                    })
                                ]
                            }),
                            (0, e.jsx)('div', {
                                children: (0, e.jsx)(f.default, {
                                    type: r.canAfford ? 'primary' : 'disabled',
                                    size: 'medium',
                                    label: (0, k.getMoney)(r.cost),
                                    style: {
                                        marginLeft: 25
                                    },
                                    onClick: r.onClick
                                })
                            })
                        ]
                    })
                ]
            });
        }
    }
    var r = s;
    const t = m.default.div(n || (n = p`
  margin: 20px;
  border-radius: ${ 0 }px;
  box-shadow: ${ 0 };
`), 5, j.default.basic),
        u = m.default.div(o || (o = p`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  box-sizing: border-box;
  background: ${ 0 };
  color: ${ 0 };
  border-top-left-radius: ${ 0 }px;
  border-top-right-radius: ${ 0 }px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  flex-grow: 1;
  flex-direction: column;
`), a => a.colors.background, a => a.colors.text, 5, 5);
}), d.register('aJrc9', function(a, f) {
    b(a.exports, 'default', function() {
        return y;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('VCvua0'),
        i = d('M8YtH'),
        j = d('UNaEe'),
        k = d('lf3yz'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('5ag6t'),
        o = d('dpNxC'),
        p = d('h99Nu'),
        q = d('JVq9i'),
        r = d('MoXej');
    let s, t, u = a => a;
    const v = p.default.div(s || (s = u`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${ 0 };
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
`), h.default.White),
        w = p.default.div(t || (t = u`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 9px;
`));
    let x = class extends m.Component {
        render() {
            return this.getContent();
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                showReader: !0,
                screen: ''
            }), (0, e.default)(this, 'handleScan', a => {
                if (a && JSON.parse(a)) {
                    const y = JSON.parse(a);
                    y.route && (j.applyTheme.play(), this.setState({
                        showReader: !1,
                        screen: y.route
                    }, () => {
                        'moneyPerQuestion' === this.state.screen && this.onUpgradeScanned(o.upgradeNames.moneyPerQuestion), 'streakBonus' === this.state.screen && this.onUpgradeScanned(o.upgradeNames.streakBonus), 'multiplier' === this.state.screen && this.onUpgradeScanned(o.upgradeNames.multiplier), 'insurance' === this.state.screen && this.onUpgradeScanned(o.upgradeNames.insurance);
                    }));
                }
            }), (0, e.default)(this, 'getContent', () => this.state.showReader ? (0, g.jsxs)(v, {
                children: [
                    (0, g.jsx)(w, {
                        children: 'Find a KitCode to scan!'
                    }),
                    (0, g.jsx)(c(n), {
                        onScan: this.handleScan,
                        style: {
                            width: 300,
                            height: 300
                        },
                        onError: null
                    })
                ]
            }) : 'themes' === this.state.screen ? (0, g.jsx)(r.default, {}) : 'powerups' === this.state.screen ? (0, g.jsx)(q.default, {}) : null), (0, e.default)(this, 'onUpgradeScanned', a => {
                this.props.upgrades.currentlySelectedUpgrade = a, (0, k.changeRoute)(i.default.upgrade);
            });
        }
    };
    x = (0, f.__decorate)([
        (0, l.inject)('upgrades'),
        l.observer
    ], x);
    var y = z;
}), d.register('5ag6t', function(a, b) {
    var e, f, g = Object.assign || function(a) {
            for (var h = 1; h < n.length; h++) {
                var i = n[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (a[j] = i[j]);
            }
            return a;
        },
        h = function() {
            function i(i, b) {
                for (var j = 0; j < b.length; j++) {
                    var k = b[j];
                    k.enumerable = k.enumerable || !1, k.configurable = !0, 'value' in k && (k.writable = !0), Object.defineProperty(i, k.key, k);
                }
            }
            return function(b, e, d) {
                return e && i(b.prototype, e), d && i(b, d), b;
            };
        }();
    var i = d('uPP4W'),
        j = i.Component,
        k = d('uj3CK'),
        l = d('Gq3F5'),
        m = l.getDeviceId,
        n = (l.getFacingModePattern, d('32ebr')),
        o = d('fUCu4');
    d('zO16v');
    var p = o(['!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.jsQR=e():o.jsQR=e()}("undefined"!=typeof self?self:this,function(){return function(o){function e(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return o[t].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var r={};return e.m=o,e.c=r,e.d=function(o,r,t){e.o(o,r)||Object.defineProperty(o,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(r,"a",r),r},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p="",e(e.s=3)}([function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o,e){this.width=e,this.height=o.length/e,this.data=o}return o.createEmpty=function(e,r){return new o(new Uint8ClampedArray(e*r),e)},o.prototype.get=function(o,e){return!(o<0||o>=this.width||e<0||e>=this.height)&&!!this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r?1:0},o.prototype.setRegion=function(o,e,r,t,c){for(var s=e;s<e+t;s++)for(var a=o;a<o+r;a++)this.set(a,s,!!c)},o}();e.BitMatrix=t},function(o,e,r){"use strict";function t(o,e){return o^e}Object.defineProperty(e,"__esModule",{value:!0});var c=r(2);e.addOrSubtractGF=t;var s=function(){function o(o,e,r){this.primitive=o,this.size=e,this.generatorBase=r,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var t=1,s=0;s<this.size;s++)this.expTable[s]=t,(t*=2)>=this.size&&(t=(t^this.primitive)&this.size-1);for(var s=0;s<this.size-1;s++)this.logTable[this.expTable[s]]=s;this.zero=new c.default(this,Uint8ClampedArray.from([0])),this.one=new c.default(this,Uint8ClampedArray.from([1]))}return o.prototype.multiply=function(o,e){return 0===o||0===e?0:this.expTable[(this.logTable[o]+this.logTable[e])%(this.size-1)]},o.prototype.inverse=function(o){if(0===o)throw new Error("Can\'t invert 0");return this.expTable[this.size-this.logTable[o]-1]},o.prototype.buildMonomial=function(o,e){if(o<0)throw new Error("Invalid monomial degree less than 0");if(0===e)return this.zero;var r=new Uint8ClampedArray(o+1);return r[0]=e,new c.default(this,r)},o.prototype.log=function(o){if(0===o)throw new Error("Can\'t take log(0)");return this.logTable[o]},o.prototype.exp=function(o){return this.expTable[o]},o}();e.default=s},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r(1),c=function(){function o(o,e){if(0===e.length)throw new Error("No coefficients.");this.field=o;var r=e.length;if(r>1&&0===e[0]){for(var t=1;t<r&&0===e[t];)t++;if(t===r)this.coefficients=o.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(r-t);for(var c=0;c<this.coefficients.length;c++)this.coefficients[c]=e[t+c]}}else this.coefficients=e}return o.prototype.degree=function(){return this.coefficients.length-1},o.prototype.isZero=function(){return 0===this.coefficients[0]},o.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},o.prototype.addOrSubtract=function(e){if(this.isZero())return e;if(e.isZero())return this;var r=this.coefficients,c=e.coefficients;r.length>c.length&&(n=[c,r],r=n[0],c=n[1]);for(var s=new Uint8ClampedArray(c.length),a=c.length-r.length,d=0;d<a;d++)s[d]=c[d];for(var d=a;d<c.length;d++)s[d]=t.addOrSubtractGF(r[d-a],c[d]);return new o(this.field,s);var n},o.prototype.multiply=function(e){if(0===e)return this.field.zero;if(1===e)return this;for(var r=this.coefficients.length,t=new Uint8ClampedArray(r),c=0;c<r;c++)t[c]=this.field.multiply(this.coefficients[c],e);return new o(this.field,t)},o.prototype.multiplyPoly=function(e){if(this.isZero()||e.isZero())return this.field.zero;for(var r=this.coefficients,c=r.length,s=e.coefficients,a=s.length,d=new Uint8ClampedArray(c+a-1),n=0;n<c;n++)for(var l=r[n],i=0;i<a;i++)d[n+i]=t.addOrSubtractGF(d[n+i],this.field.multiply(l,s[i]));return new o(this.field,d)},o.prototype.multiplyByMonomial=function(e,r){if(e<0)throw new Error("Invalid degree less than 0");if(0===r)return this.field.zero;for(var t=this.coefficients.length,c=new Uint8ClampedArray(t+e),s=0;s<t;s++)c[s]=this.field.multiply(this.coefficients[s],r);return new o(this.field,c)},o.prototype.evaluateAt=function(o){var e=0;if(0===o)return this.getCoefficient(0);var r=this.coefficients.length;if(1===o)return this.coefficients.forEach(function(o){e=t.addOrSubtractGF(e,o)}),e;e=this.coefficients[0];for(var c=1;c<r;c++)e=t.addOrSubtractGF(this.field.multiply(o,e),this.coefficients[c]);return e},o}();e.default=c},function(o,e,r){"use strict";function t(o){var e=n.locate(o);if(!e)return null;var r=d.extract(o,e),t=a.decode(r.matrix);return t?{binaryData:t.bytes,data:t.text,chunks:t.chunks,location:{topRightCorner:r.mappingFunction(e.dimension,0),topLeftCorner:r.mappingFunction(0,0),bottomRightCorner:r.mappingFunction(e.dimension,e.dimension),bottomLeftCorner:r.mappingFunction(0,e.dimension),topRightFinderPattern:e.topRight,topLeftFinderPattern:e.topLeft,bottomLeftFinderPattern:e.bottomLeft,bottomRightAlignmentPattern:e.alignmentPattern}}:null}function c(o,e,r,c){void 0===c&&(c={});var a=l;Object.keys(a||{}).forEach(function(o){a[o]=c[o]||a[o]});var d="attemptBoth"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,n="onlyInvert"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,i=s.binarize(o,e,r,d),B=i.binarized,k=i.inverted,u=t(n?k:B);return u||"attemptBoth"!==a.inversionAttempts&&"invertFirst"!==a.inversionAttempts||(u=t(n?B:k)),u}Object.defineProperty(e,"__esModule",{value:!0});var s=r(4),a=r(5),d=r(11),n=r(12),l={inversionAttempts:"attemptBoth"};c.default=c,e.default=c},function(o,e,r){"use strict";function t(o,e,r){return o<e?e:o>r?r:o}function c(o,e,r,c){if(o.length!==e*r*4)throw new Error("Malformed data passed to binarizer.");for(var l=new n(e,r),i=0;i<e;i++)for(var B=0;B<r;B++){var k=o[4*(B*e+i)+0],u=o[4*(B*e+i)+1],C=o[4*(B*e+i)+2];l.set(i,B,.2126*k+.7152*u+.0722*C)}for(var m=Math.ceil(e/a),f=Math.ceil(r/a),w=new n(m,f),P=0;P<f;P++)for(var v=0;v<m;v++){for(var h=0,p=1/0,y=0,B=0;B<a;B++)for(var i=0;i<a;i++){var b=l.get(v*a+i,P*a+B);h+=b,p=Math.min(p,b),y=Math.max(y,b)}var g=h/Math.pow(a,2);if(y-p<=d&&(g=p/2,P>0&&v>0)){var x=(w.get(v,P-1)+2*w.get(v-1,P)+w.get(v-1,P-1))/4;p<x&&(g=x)}w.set(v,P,g)}var M=s.BitMatrix.createEmpty(e,r),L=null;c&&(L=s.BitMatrix.createEmpty(e,r));for(var P=0;P<f;P++)for(var v=0;v<m;v++){for(var N=t(v,2,m-3),I=t(P,2,f-3),h=0,O=-2;O<=2;O++)for(var z=-2;z<=2;z++)h+=w.get(N+O,I+z);for(var S=h/25,O=0;O<a;O++)for(var z=0;z<a;z++){var i=v*a+O,B=P*a+z,X=l.get(i,B);M.set(i,B,X<=S),c&&L.set(i,B,!(X<=S))}}return c?{binarized:M,inverted:L}:{binarized:M}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(0),a=8,d=24,n=function(){function o(o,e){this.width=o,this.data=new Uint8ClampedArray(o*e)}return o.prototype.get=function(o,e){return this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r},o}();e.binarize=c},function(o,e,r){"use strict";function t(o,e){for(var r=o^e,t=0;r;)t++,r&=r-1;return t}function c(o,e){return e<<1|o}function s(o){var e=17+4*o.versionNumber,r=k.BitMatrix.createEmpty(e,e);r.setRegion(0,0,9,9,!0),r.setRegion(e-8,0,8,9,!0),r.setRegion(0,e-8,9,8,!0);for(var t=0,c=o.alignmentPatternCenters;t<c.length;t++)for(var s=c[t],a=0,d=o.alignmentPatternCenters;a<d.length;a++){var n=d[a];6===s&&6===n||6===s&&n===e-7||s===e-7&&6===n||r.setRegion(s-2,n-2,5,5,!0)}return r.setRegion(6,9,1,e-17,!0),r.setRegion(9,6,e-17,1,!0),o.versionNumber>6&&(r.setRegion(e-11,0,3,6,!0),r.setRegion(0,e-11,6,3,!0)),r}function a(o,e,r){for(var t=w[r.dataMask],a=o.height,d=s(e),n=[],l=0,i=0,B=!0,k=a-1;k>0;k-=2){6===k&&k--;for(var u=0;u<a;u++)for(var C=B?a-1-u:u,m=0;m<2;m++){var f=k-m;if(!d.get(f,C)){i++;var P=o.get(f,C);t({y:C,x:f})&&(P=!P),l=c(P,l),8===i&&(n.push(l),i=0,l=0)}}B=!B}return n}function d(o){var e=o.height,r=Math.floor((e-17)/4);if(r<=6)return m.VERSIONS[r-1];for(var s=0,a=5;a>=0;a--)for(var d=e-9;d>=e-11;d--)s=c(o.get(d,a),s);for(var n=0,d=5;d>=0;d--)for(var a=e-9;a>=e-11;a--)n=c(o.get(d,a),n);for(var l,i=1/0,B=0,k=m.VERSIONS;B<k.length;B++){var u=k[B];if(u.infoBits===s||u.infoBits===n)return u;var C=t(s,u.infoBits);C<i&&(l=u,i=C),C=t(n,u.infoBits),C<i&&(l=u,i=C)}return i<=3?l:void 0}function n(o){for(var e=0,r=0;r<=8;r++)6!==r&&(e=c(o.get(r,8),e));for(var s=7;s>=0;s--)6!==s&&(e=c(o.get(8,s),e));for(var a=o.height,d=0,s=a-1;s>=a-7;s--)d=c(o.get(8,s),d);for(var r=a-8;r<a;r++)d=c(o.get(r,8),d);for(var n=1/0,l=null,i=0,B=f;i<B.length;i++){var k=B[i],u=k.bits,C=k.formatInfo;if(u===e||u===d)return C;var m=t(e,u);m<n&&(l=C,n=m),e!==d&&(m=t(d,u))<n&&(l=C,n=m)}return n<=3?l:null}function l(o,e,r){var t=e.errorCorrectionLevels[r],c=[],s=0;if(t.ecBlocks.forEach(function(o){for(var e=0;e<o.numBlocks;e++)c.push({numDataCodewords:o.dataCodewordsPerBlock,codewords:[]}),s+=o.dataCodewordsPerBlock+t.ecCodewordsPerBlock}),o.length<s)return null;o=o.slice(0,s);for(var a=t.ecBlocks[0].dataCodewordsPerBlock,d=0;d<a;d++)for(var n=0,l=c;n<l.length;n++){var i=l[n];i.codewords.push(o.shift())}if(t.ecBlocks.length>1)for(var B=t.ecBlocks[0].numBlocks,k=t.ecBlocks[1].numBlocks,d=0;d<k;d++)c[B+d].codewords.push(o.shift());for(;o.length>0;)for(var u=0,C=c;u<C.length;u++){var i=C[u];i.codewords.push(o.shift())}return c}function i(o){var e=d(o);if(!e)return null;var r=n(o);if(!r)return null;var t=a(o,e,r),c=l(t,e,r.errorCorrectionLevel);if(!c)return null;for(var s=c.reduce(function(o,e){return o+e.numDataCodewords},0),i=new Uint8ClampedArray(s),B=0,k=0,m=c;k<m.length;k++){var f=m[k],w=C.decode(f.codewords,f.codewords.length-f.numDataCodewords);if(!w)return null;for(var P=0;P<f.numDataCodewords;P++)i[B++]=w[P]}try{return u.decode(i,e.versionNumber)}catch(o){return null}}function B(o){if(null==o)return null;var e=i(o);if(e)return e;for(var r=0;r<o.width;r++)for(var t=r+1;t<o.height;t++)o.get(r,t)!==o.get(t,r)&&(o.set(r,t,!o.get(r,t)),o.set(t,r,!o.get(t,r)));return i(o)}Object.defineProperty(e,"__esModule",{value:!0});var k=r(0),u=r(6),C=r(9),m=r(10),f=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],w=[function(o){return(o.y+o.x)%2==0},function(o){return o.y%2==0},function(o){return o.x%3==0},function(o){return(o.y+o.x)%3==0},function(o){return(Math.floor(o.y/2)+Math.floor(o.x/3))%2==0},function(o){return o.x*o.y%2+o.x*o.y%3==0},function(o){return(o.y*o.x%2+o.y*o.x%3)%2==0},function(o){return((o.y+o.x)%2+o.y*o.x%3)%2==0}];e.decode=B},function(o,e,r){"use strict";function t(o,e){for(var r=[],t="",c=[10,12,14][e],s=o.readBits(c);s>=3;){var a=o.readBits(10);if(a>=1e3)throw new Error("Invalid numeric value above 999");var d=Math.floor(a/100),n=Math.floor(a/10)%10,l=a%10;r.push(48+d,48+n,48+l),t+=d.toString()+n.toString()+l.toString(),s-=3}if(2===s){var a=o.readBits(7);if(a>=100)throw new Error("Invalid numeric value above 99");var d=Math.floor(a/10),n=a%10;r.push(48+d,48+n),t+=d.toString()+n.toString()}else if(1===s){var a=o.readBits(4);if(a>=10)throw new Error("Invalid numeric value above 9");r.push(48+a),t+=a.toString()}return{bytes:r,text:t}}function c(o,e){for(var r=[],t="",c=[9,11,13][e],s=o.readBits(c);s>=2;){var a=o.readBits(11),d=Math.floor(a/45),n=a%45;r.push(k[d].charCodeAt(0),k[n].charCodeAt(0)),t+=k[d]+k[n],s-=2}if(1===s){var d=o.readBits(6);r.push(k[d].charCodeAt(0)),t+=k[d]}return{bytes:r,text:t}}function s(o,e){for(var r=[],t="",c=[8,16,16][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(8);r.push(d)}try{t+=decodeURIComponent(r.map(function(o){return"%"+("0"+o.toString(16)).substr(-2)}).join(""))}catch(o){}return{bytes:r,text:t}}function a(o,e){for(var r=[],t="",c=[8,10,12][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(13),n=Math.floor(d/192)<<8|d%192;n+=n<7936?33088:49472,r.push(n>>8,255&n),t+=String.fromCharCode(i.shiftJISTable[n])}return{bytes:r,text:t}}function d(o,e){for(var r=new l.BitStream(o),d=e<=9?0:e<=26?1:2,i={text:"",bytes:[],chunks:[]};r.available()>=4;){var k=r.readBits(4);if(k===B.Terminator)return i;if(k===B.ECI)0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(7)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(14)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(21)}):i.chunks.push({type:n.ECI,assignmentNumber:-1});else if(k===B.Numeric){var u=t(r,d);i.text+=u.text,(w=i.bytes).push.apply(w,u.bytes),i.chunks.push({type:n.Numeric,text:u.text})}else if(k===B.Alphanumeric){var C=c(r,d);i.text+=C.text,(P=i.bytes).push.apply(P,C.bytes),i.chunks.push({type:n.Alphanumeric,text:C.text})}else if(k===B.Byte){var m=s(r,d);i.text+=m.text,(v=i.bytes).push.apply(v,m.bytes),i.chunks.push({type:n.Byte,bytes:m.bytes,text:m.text})}else if(k===B.Kanji){var f=a(r,d);i.text+=f.text,(h=i.bytes).push.apply(h,f.bytes),i.chunks.push({type:n.Kanji,bytes:f.bytes,text:f.text})}}var w,P,v,h}Object.defineProperty(e,"__esModule",{value:!0});var n,l=r(7),i=r(8);!function(o){o.Numeric="numeric",o.Alphanumeric="alphanumeric",o.Byte="byte",o.Kanji="kanji",o.ECI="eci"}(n=e.Mode||(e.Mode={}));var B;!function(o){o[o.Terminator=0]="Terminator",o[o.Numeric=1]="Numeric",o[o.Alphanumeric=2]="Alphanumeric",o[o.Byte=4]="Byte",o[o.Kanji=8]="Kanji",o[o.ECI=7]="ECI"}(B||(B={}));var k=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];e.decode=d},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o){this.byteOffset=0,this.bitOffset=0,this.bytes=o}return o.prototype.readBits=function(o){if(o<1||o>32||o>this.available())throw new Error("Cannot read "+o.toString()+" bits");var e=0;if(this.bitOffset>0){var r=8-this.bitOffset,t=o<r?o:r,c=r-t,s=255>>8-t<<c;e=(this.bytes[this.byteOffset]&s)>>c,o-=t,this.bitOffset+=t,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++)}if(o>0){for(;o>=8;)e=e<<8|255&this.bytes[this.byteOffset],this.byteOffset++,o-=8;if(o>0){var c=8-o,s=255>>c<<c;e=e<<o|(this.bytes[this.byteOffset]&s)>>c,this.bitOffset+=o}}return e},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o}();e.BitStream=t},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,\n36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,\n39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,\n59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(o,e,r){"use strict";function t(o,e,r,t){e.degree()<r.degree()&&(w=[r,e],e=w[0],r=w[1]);for(var c=e,s=r,a=o.zero,d=o.one;s.degree()>=t/2;){var n=c,l=a;if(c=s,a=d,c.isZero())return null;s=n;for(var i=o.zero,B=c.getCoefficient(c.degree()),k=o.inverse(B);s.degree()>=c.degree()&&!s.isZero();){var u=s.degree()-c.degree(),C=o.multiply(s.getCoefficient(s.degree()),k);i=i.addOrSubtract(o.buildMonomial(u,C)),s=s.addOrSubtract(c.multiplyByMonomial(u,C))}if(d=i.multiplyPoly(a).addOrSubtract(l),s.degree()>=c.degree())return null}var m=d.getCoefficient(0);if(0===m)return null;var f=o.inverse(m);return[d.multiply(f),s.multiply(f)];var w}function c(o,e){var r=e.degree();if(1===r)return[e.getCoefficient(1)];for(var t=new Array(r),c=0,s=1;s<o.size&&c<r;s++)0===e.evaluateAt(s)&&(t[c]=o.inverse(s),c++);return c!==r?null:t}function s(o,e,r){for(var t=r.length,c=new Array(t),s=0;s<t;s++){for(var a=o.inverse(r[s]),n=1,l=0;l<t;l++)s!==l&&(n=o.multiply(n,d.addOrSubtractGF(1,o.multiply(r[l],a))));c[s]=o.multiply(e.evaluateAt(a),o.inverse(n)),0!==o.generatorBase&&(c[s]=o.multiply(c[s],a))}return c}function a(o,e){var r=new Uint8ClampedArray(o.length);r.set(o);for(var a=new d.default(285,256,0),l=new n.default(a,r),i=new Uint8ClampedArray(e),B=!1,k=0;k<e;k++){var u=l.evaluateAt(a.exp(k+a.generatorBase));i[i.length-1-k]=u,0!==u&&(B=!0)}if(!B)return r;var C=new n.default(a,i),m=t(a,a.buildMonomial(e,1),C,e);if(null===m)return null;var f=c(a,m[0]);if(null==f)return null;for(var w=s(a,m[1],f),P=0;P<f.length;P++){var v=r.length-1-a.log(f[P]);if(v<0)return null;r[v]=d.addOrSubtractGF(r[v],w[P])}return r}Object.defineProperty(e,"__esModule",{value:!0});var d=r(1),n=r(2);e.decode=a},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(o,e,r){"use strict";function t(o,e,r,t){var c=o.x-e.x+r.x-t.x,s=o.y-e.y+r.y-t.y;if(0===c&&0===s)return{a11:e.x-o.x,a12:e.y-o.y,a13:0,a21:r.x-e.x,a22:r.y-e.y,a23:0,a31:o.x,a32:o.y,a33:1};var a=e.x-r.x,d=t.x-r.x,n=e.y-r.y,l=t.y-r.y,i=a*l-d*n,B=(c*l-d*s)/i,k=(a*s-c*n)/i;return{a11:e.x-o.x+B*e.x,a12:e.y-o.y+B*e.y,a13:B,a21:t.x-o.x+k*t.x,a22:t.y-o.y+k*t.y,a23:k,a31:o.x,a32:o.y,a33:1}}function c(o,e,r,c){var s=t(o,e,r,c);return{a11:s.a22*s.a33-s.a23*s.a32,a12:s.a13*s.a32-s.a12*s.a33,a13:s.a12*s.a23-s.a13*s.a22,a21:s.a23*s.a31-s.a21*s.a33,a22:s.a11*s.a33-s.a13*s.a31,a23:s.a13*s.a21-s.a11*s.a23,a31:s.a21*s.a32-s.a22*s.a31,a32:s.a12*s.a31-s.a11*s.a32,a33:s.a11*s.a22-s.a12*s.a21}}function s(o,e){return{a11:o.a11*e.a11+o.a21*e.a12+o.a31*e.a13,a12:o.a12*e.a11+o.a22*e.a12+o.a32*e.a13,a13:o.a13*e.a11+o.a23*e.a12+o.a33*e.a13,a21:o.a11*e.a21+o.a21*e.a22+o.a31*e.a23,a22:o.a12*e.a21+o.a22*e.a22+o.a32*e.a23,a23:o.a13*e.a21+o.a23*e.a22+o.a33*e.a23,a31:o.a11*e.a31+o.a21*e.a32+o.a31*e.a33,a32:o.a12*e.a31+o.a22*e.a32+o.a32*e.a33,a33:o.a13*e.a31+o.a23*e.a32+o.a33*e.a33}}function a(o,e){for(var r=c({x:3.5,y:3.5},{x:e.dimension-3.5,y:3.5},{x:e.dimension-6.5,y:e.dimension-6.5},{x:3.5,y:e.dimension-3.5}),a=t(e.topLeft,e.topRight,e.alignmentPattern,e.bottomLeft),n=s(a,r),l=d.BitMatrix.createEmpty(e.dimension,e.dimension),i=function(o,e){var r=n.a13*o+n.a23*e+n.a33;return{x:(n.a11*o+n.a21*e+n.a31)/r,y:(n.a12*o+n.a22*e+n.a32)/r}},B=0;B<e.dimension;B++)for(var k=0;k<e.dimension;k++){var u=k+.5,C=B+.5,m=i(u,C);l.set(k,B,o.get(Math.floor(m.x),Math.floor(m.y)))}return{matrix:l,mappingFunction:i}}Object.defineProperty(e,"__esModule",{value:!0});var d=r(0);e.extract=a},function(o,e,r){"use strict";function t(o){return o.reduce(function(o,e){return o+e})}function c(o,e,r){var t,c,s,a=C(o,e),d=C(e,r),n=C(o,r);return d>=a&&d>=n?(l=[e,o,r],t=l[0],c=l[1],s=l[2]):n>=d&&n>=a?(i=[o,e,r],t=i[0],c=i[1],s=i[2]):(B=[o,r,e],t=B[0],c=B[1],s=B[2]),(s.x-c.x)*(t.y-c.y)-(s.y-c.y)*(t.x-c.x)<0&&(k=[s,t],t=k[0],s=k[1]),{bottomLeft:t,topLeft:c,topRight:s};var l,i,B,k}function s(o,e,r,c){var s=(t(d(o,r,c,5))/7+t(d(o,e,c,5))/7+t(d(r,o,c,5))/7+t(d(e,o,c,5))/7)/4;if(s<1)throw new Error("Invalid module size");var a=Math.round(C(o,e)/s),n=Math.round(C(o,r)/s),l=Math.floor((a+n)/2)+7;switch(l%4){case 0:l++;break;case 2:l--}return{dimension:l,moduleSize:s}}function a(o,e,r,t){var c,s,a,d,n=[{x:Math.floor(o.x),y:Math.floor(o.y)}],l=Math.abs(e.y-o.y)>Math.abs(e.x-o.x);l?(c=Math.floor(o.y),s=Math.floor(o.x),a=Math.floor(e.y),d=Math.floor(e.x)):(c=Math.floor(o.x),s=Math.floor(o.y),a=Math.floor(e.x),d=Math.floor(e.y));for(var i=Math.abs(a-c),B=Math.abs(d-s),k=Math.floor(-i/2),u=c<a?1:-1,m=s<d?1:-1,f=!0,w=c,P=s;w!==a+u;w+=u){var v=l?P:w,h=l?w:P;if(r.get(v,h)!==f&&(f=!f,n.push({x:v,y:h}),n.length===t+1))break;if((k+=B)>0){if(P===d)break;P+=m,k-=i}}for(var p=[],y=0;y<t;y++)n[y]&&n[y+1]?p.push(C(n[y],n[y+1])):p.push(0);return p}function d(o,e,r,t){var c=e.y-o.y,s=e.x-o.x,d=a(o,e,r,Math.ceil(t/2)),n=a(o,{x:o.x-s,y:o.y-c},r,Math.ceil(t/2)),l=d.shift()+n.shift()-1;return(i=n.concat(l)).concat.apply(i,d);var i}function n(o,e){var r=t(o)/t(e),c=0;return e.forEach(function(e,t){c+=Math.pow(o[t]-e*r,2)}),{averageSize:r,error:c}}function l(o,e,r){try{var t=d(o,{x:-1,y:o.y},r,e.length),c=d(o,{x:o.x,y:-1},r,e.length),s={x:Math.max(0,o.x-o.y)-1,y:Math.max(0,o.y-o.x)-1},a=d(o,s,r,e.length),l={x:Math.min(r.width,o.x+o.y)+1,y:Math.min(r.height,o.y+o.x)+1},i=d(o,l,r,e.length),B=n(t,e),k=n(c,e),u=n(a,e),C=n(i,e),m=Math.sqrt(B.error*B.error+k.error*k.error+u.error*u.error+C.error*C.error),f=(B.averageSize+k.averageSize+u.averageSize+C.averageSize)/4;return m+(Math.pow(B.averageSize-f,2)+Math.pow(k.averageSize-f,2)+Math.pow(u.averageSize-f,2)+Math.pow(C.averageSize-f,2))/f}catch(o){return 1/0}}function i(o){for(var e=[],r=[],a=[],d=[],n=0;n<=o.height;n++)!function(c){for(var s=0,n=!1,l=[0,0,0,0,0],i=-1;i<=o.width;i++)!function(e){var a=o.get(e,c);if(a===n)s++;else{l=[l[1],l[2],l[3],l[4],s],s=1,n=a;var i=t(l)/7,B=Math.abs(l[0]-i)<i&&Math.abs(l[1]-i)<i&&Math.abs(l[2]-3*i)<3*i&&Math.abs(l[3]-i)<i&&Math.abs(l[4]-i)<i&&!a,C=t(l.slice(-3))/3,m=Math.abs(l[2]-C)<C&&Math.abs(l[3]-C)<C&&Math.abs(l[4]-C)<C&&a;if(B){var f=e-l[3]-l[4],w=f-l[2],P={startX:w,endX:f,y:c},v=r.filter(function(o){return w>=o.bottom.startX&&w<=o.bottom.endX||f>=o.bottom.startX&&w<=o.bottom.endX||w<=o.bottom.startX&&f>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:r.push({top:P,bottom:P})}if(m){var h=e-l[4],p=h-l[3],P={startX:p,y:c,endX:h},v=d.filter(function(o){return p>=o.bottom.startX&&p<=o.bottom.endX||h>=o.bottom.startX&&p<=o.bottom.endX||p<=o.bottom.startX&&h>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:d.push({top:P,bottom:P})}}}(i);e.push.apply(e,r.filter(function(o){return o.bottom.y!==c&&o.bottom.y-o.top.y>=2})),r=r.filter(function(o){return o.bottom.y===c}),a.push.apply(a,d.filter(function(o){return o.bottom.y!==c})),d=d.filter(function(o){return o.bottom.y===c})}(n);e.push.apply(e,r.filter(function(o){return o.bottom.y-o.top.y>=2})),a.push.apply(a,d);var i=e.filter(function(o){return o.bottom.y-o.top.y>=2}).map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.round(r),Math.round(c))){\nvar s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1],a=t(s)/s.length;return{score:l({x:Math.round(r),y:Math.round(c)},[1,1,3,1,1],o),x:r,y:c,size:a}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}).map(function(o,e,r){if(e>B)return null;var t=r.filter(function(o,r){return e!==r}).map(function(e){return{x:e.x,y:e.y,score:e.score+Math.pow(e.size-o.size,2)/o.size,size:e.size}}).sort(function(o,e){return o.score-e.score});if(t.length<2)return null;var c=o.score+t[0].score+t[1].score;return{points:[o].concat(t.slice(0,2)),score:c}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score});if(0===i.length)return null;var m,f,w=c(i[0].points[0],i[0].points[1],i[0].points[2]),P=w.topRight,v=w.topLeft,h=w.bottomLeft;try{L=s(v,P,h,o),m=L.dimension,f=L.moduleSize}catch(o){return null}var p={x:P.x-v.x+h.x,y:P.y-v.y+h.y},y=(C(v,h)+C(v,P))/2/f,b=1-3/y,g={x:v.x+b*(p.x-v.x),y:v.y+b*(p.y-v.y)},x=a.map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.floor(r),Math.floor(c))){var s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1];t(s);return{x:r,y:c,score:l({x:Math.floor(r),y:Math.floor(c)},[1,1,1],o)+C({x:r,y:c},g)}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}),M=y>=15&&x.length?x[0]:g;return{alignmentPattern:{x:M.x,y:M.y},bottomLeft:{x:h.x,y:h.y},dimension:m,topLeft:{x:v.x,y:v.y},topRight:{x:P.x,y:P.y}};var L}Object.defineProperty(e,"__esModule",{value:!0});var B=4,k=.5,u=1.5,C=function(o,e){return Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2))};e.locate=i}]).default}),self.addEventListener("message",function(o){var e=jsQR(o.data.data,o.data.width,o.data.height);e?postMessage(e.data):postMessage(null)});'], {
            type: 'application/javascript'
        }),
        q = [
            'delay',
            'legacyMode',
            'facingMode'
        ];
    a.exports = (f = e = function(a) {
        function r(a) {
            ! function(a, r) {
                if (!(a instanceof r))
                    throw new TypeError('Cannot call a class as a function');
            }(this, r);
            var s = function(a, r) {
                if (!a)
                    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                return !r || 'object' != typeof r && 'function' != typeof r ? a : r;
            }(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, a));
            return s.els = {}, s.state = {
                mirrorVideo: !1
            }, s.initiate = s.initiate.bind(s), s.initiateLegacyMode = s.initiateLegacyMode.bind(s), s.check = s.check.bind(s), s.handleVideo = s.handleVideo.bind(s), s.handleLoadStart = s.handleLoadStart.bind(s), s.handleInputChange = s.handleInputChange.bind(s), s.clearComponent = s.clearComponent.bind(s), s.handleReaderLoad = s.handleReaderLoad.bind(s), s.openImageDialog = s.openImageDialog.bind(s), s.handleWorkerMessage = s.handleWorkerMessage.bind(s), s.setRefFactory = s.setRefFactory.bind(s), s;
        }
        return function(a, r) {
            if ('function' != typeof r && null !== r)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof r);
            a.prototype = Object.create(r && r.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(a, r) : a.__proto__ = r);
        }(r, a), h(r, [{
                key: 'componentDidMount',
                value: function() {
                    this.worker = new Worker(URL.createObjectURL(p)), this.worker.onmessage = this.handleWorkerMessage, this.props.legacyMode ? this.initiateLegacyMode() : this.initiate();
                }
            },
            {
                key: 'componentWillReceiveProps',
                value: function(a) {
                    var s = n(this.props, a, q),
                        t = !0,
                        u = !1,
                        v = void 0;
                    try {
                        for (var w, x = s[Symbol.iterator](); !(t = (w = x.next()).done); t = !0) {
                            var y = w.value;
                            if ('facingMode' == y) {
                                this.clearComponent(), this.initiate(a);
                                break;
                            }
                            if ('delay' == y)
                                0 != this.props.delay || a.legacyMode || (this.timeout = setTimeout(this.check, a.delay)), 0 == a.delay && clearTimeout(this.timeout);
                            else if ('legacyMode' == y) {
                                this.props.legacyMode && !a.legacyMode ? (this.clearComponent(), this.initiate(a)) : (this.clearComponent(), this.componentDidUpdate = this.initiateLegacyMode);
                                break;
                            }
                        }
                    } catch (a) {
                        u = !0, v = a;
                    } finally {
                        try {
                            !t && h.return && h.return();
                        } finally {
                            if (u)
                                throw v;
                        }
                    }
                }
            },
            {
                key: 'shouldComponentUpdate',
                value: function(a, r) {
                    return r !== this.state || n(this.props, a, q).length > 0;
                }
            },
            {
                key: 'componentWillUnmount',
                value: function() {
                    this.worker && (this.worker.terminate(), this.worker = void 0), this.clearComponent();
                }
            },
            {
                key: 'clearComponent',
                value: function() {
                    this.timeout && (clearTimeout(this.timeout), this.timeout = void 0), this.stopCamera && this.stopCamera(), this.reader && this.reader.removeEventListener('load', this.handleReaderLoad), this.els.img && this.els.img.removeEventListener('load', this.check);
                }
            },
            {
                key: 'initiate',
                value: function() {
                    var s = n.length > 0 && void 0 !== n[0] ? n[0] : this.props,
                        t = s.onError,
                        u = s.facingMode,
                        v = /firefox/i.test(navigator.userAgent),
                        w = {};
                    navigator.mediaDevices && 'function' == typeof navigator.mediaDevices.getSupportedConstraints && (w = navigator.mediaDevices.getSupportedConstraints());
                    var x = {};
                    w.facingMode && (x.facingMode = {
                        ideal: u
                    }), w.frameRate && (x.frameRate = {
                        ideal: 25,
                        min: 10
                    });
                    var y = w.facingMode || v ? Promise.resolve(s.constraints || x) : m(u).then(function(t) {
                        return Object.assign({}, {
                            deviceId: t
                        }, s.constraints);
                    });
                    y.then(function(s) {
                        return navigator.mediaDevices.getUserMedia({
                            video: s
                        });
                    }).then(this.handleVideo).catch(t);
                }
            },
            {
                key: 'handleVideo',
                value: function(a) {
                    var s = this.els.preview,
                        t = this.props.facingMode;
                    if (!s)
                        return setTimeout(this.handleVideo, 200, a);
                    void 0 !== (s || {}).srcObject ? s.srcObject = a : void 0 !== s.mozSrcObject ? s.mozSrcObject = a : window.URL.createObjectURL ? s.src = window.URL.createObjectURL(a) : window.webkitURL ? s.src = window.webkitURL.createObjectURL(a) : s.src = a, s.playsInline = !0;
                    var u = a.getTracks()[0];
                    this.stopCamera = u.stop.bind(u), s.addEventListener('loadstart', this.handleLoadStart), this.setState({
                        mirrorVideo: 'user' == t,
                        streamLabel: u.label
                    });
                }
            },
            {
                key: 'handleLoadStart',
                value: function() {
                    var v = this.props,
                        w = v.delay,
                        x = v.onLoad,
                        y = this.state,
                        z = y.mirrorVideo,
                        A = y.streamLabel,
                        B = this.els.preview;
                    B.play(), 'function' == typeof x && x({
                        mirrorVideo: z,
                        streamLabel: A
                    }), 'number' == typeof w && (this.timeout = setTimeout(this.check, w)), B.removeEventListener('loadstart', this.handleLoadStart);
                }
            },
            {
                key: 'check',
                value: function() {
                    var C = this.props,
                        D = C.legacyMode,
                        E = C.resolution,
                        F = C.delay,
                        G = this.els,
                        H = G.preview,
                        I = G.canvas,
                        J = G.img,
                        K = Math.floor(D ? J.naturalWidth : H.videoWidth),
                        L = Math.floor(D ? J.naturalHeight : H.videoHeight),
                        M = 0,
                        N = 0;
                    if (D) {
                        var O = E / (K > L ? K : L);
                        L *= O, K *= O, I.width = K, I.height = L;
                    } else {
                        var P = E / (K < L ? K : L);
                        N = ((L *= P) - E) / 2 * -1, M = ((K *= P) - E) / 2 * -1, I.width = E, I.height = E;
                    }
                    var O = H && H.readyState === H.HAVE_ENOUGH_DATA;
                    if (D || O) {
                        var P = I.getContext('2d');
                        P.drawImage(D ? J : H, M, N, K, L);
                        var Q = P.getImageData(0, 0, I.width, I.height);
                        this.worker.postMessage(Q);
                    } else
                        this.timeout = setTimeout(this.check, F);
                }
            },
            {
                key: 'handleWorkerMessage',
                value: function(a) {
                    var s = this.props,
                        t = s.onScan,
                        u = s.legacyMode,
                        v = s.delay;
                    t(a.data || null), !u && 'number' == typeof v && this.worker && (this.timeout = setTimeout(this.check, v));
                }
            },
            {
                key: 'initiateLegacyMode',
                value: function() {
                    this.reader = new FileReader(), this.reader.addEventListener('load', this.handleReaderLoad), this.els.img.addEventListener('load', this.check, !1), this.componentDidUpdate = void 0, 'function' == typeof this.props.onLoad && this.props.onLoad();
                }
            },
            {
                key: 'handleInputChange',
                value: function(a) {
                    var s = a.target.files[0];
                    this.reader.readAsDataURL(s);
                }
            },
            {
                key: 'handleReaderLoad',
                value: function(a) {
                    this.els.img.src = a.target.result;
                }
            },
            {
                key: 'openImageDialog',
                value: function() {
                    this.els.input.click();
                }
            },
            {
                key: 'setRefFactory',
                value: function(a) {
                    var s = this;
                    return function(e) {
                        s.els[a] = e;
                    };
                }
            },
            {
                key: 'render',
                value: function() {
                    var t = this.props,
                        u = t.style,
                        v = t.className,
                        w = t.onImageLoad,
                        x = t.legacyMode,
                        y = t.showViewFinder,
                        z = (t.facingMode, {
                            display: 'none'
                        }),
                        A = {
                            top: 0,
                            left: 0,
                            display: 'block',
                            position: 'absolute',
                            overflow: 'hidden',
                            width: '100%',
                            height: '100%'
                        },
                        B = g({}, A, {
                            objectFit: 'cover',
                            transform: this.state.mirrorVideo ? 'scaleX(-1)' : void 0
                        }),
                        C = g({}, A, {
                            objectFit: 'scale-down'
                        });
                    return i.createElement('section', {
                        className: v,
                        style: u
                    }, i.createElement('section', {
                        style: {
                            overflow: 'hidden',
                            position: 'relative',
                            width: '100%',
                            paddingTop: '100%'
                        }
                    }, !x && y ? i.createElement('div', {
                        style: {
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            boxSizing: 'border-box',
                            border: '50px solid rgba(0, 0, 0, 0.3)',
                            boxShadow: 'inset 0 0 0 5px rgba(255, 0, 0, 0.5)',
                            position: 'absolute',
                            width: '100%',
                            height: '100%'
                        }
                    }) : null, x ? i.createElement('input', {
                        style: z,
                        type: 'file',
                        accept: 'image/*',
                        ref: this.setRefFactory('input'),
                        onChange: this.handleInputChange
                    }) : null, x ? i.createElement('img', {
                        style: C,
                        ref: this.setRefFactory('img'),
                        onLoad: w
                    }) : i.createElement('video', {
                        style: B,
                        ref: this.setRefFactory('preview')
                    }), i.createElement('canvas', {
                        style: z,
                        ref: this.setRefFactory('canvas')
                    })));
                }
            }
        ]), r;
    }(j), e.propTypes = {
        onScan: k.func.isRequired,
        onError: k.func.isRequired,
        onLoad: k.func,
        onImageLoad: k.func,
        delay: k.oneOfType([
            k.number,
            k.bool
        ]),
        facingMode: k.oneOf([
            'user',
            'environment'
        ]),
        legacyMode: k.bool,
        resolution: k.number,
        showViewFinder: k.bool,
        style: k.any,
        className: k.string,
        constraints: k.object
    }, e.defaultProps = {
        delay: 500,
        resolution: 600,
        facingMode: 'environment',
        showViewFinder: !0,
        constraints: null
    }, f);
}), d.register('Gq3F5', function(a, b) {
    var e = d('+3GgW').NoVideoInputDevicesError;

    function f(a, b, e) {
        return a.length > 0 ? a[0].deviceId : 1 == b.length || 'user' == e ? b[0].deviceId : b[1].deviceId;
    }
    var g = function(a) {
        return 'environment' == a ? /rear|back|environment/gi : /front|user|face/gi;
    };
    a.exports = {
        getDeviceId: function(a) {
            var h = n.length > 1 && void 0 !== n[1] ? n[1] : f;
            return new Promise(function(d, f) {
                var i = void 0;
                try {
                    i = navigator.mediaDevices.enumerateDevices();
                } catch (a) {
                    f(new e());
                }
                i.then(function(i) {
                    var j = i.filter(function(a) {
                        return 'videoinput' == a.kind;
                    });
                    if (j.length < 1)
                        f(new e());
                    else {
                        var k = g(a),
                            l = j.filter(function(a) {
                                var m = a.label;
                                return k.test(m);
                            });
                        d(h(l, j, a));
                    }
                });
            });
        },
        getFacingModePattern: g
    };
}), d.register('+3GgW', function(a, b) {
    function e() {
        this.name = 'NoVideoInputDevicesError', this.message = 'No video input devices found';
    }
    e.prototype = new Error(), a.exports = {
        NoVideoInputDevicesError: e
    };
}), d.register('32ebr', function(a, b) {
    a.exports = function(a, b, c) {
        var e = [];
        return c.forEach(function(c) {
            a[c] != b[c] && e.push(c);
        }), e;
    };
}), d.register('fUCu4', function(a, b) {
    a.exports = function(a, b) {
        a = a || [], b = b || {};
        try {
            return new Blob(a, b);
        } catch (e) {
            if ('TypeError' !== e.name)
                throw e;
            for (var e = new(window.BlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder)(), f = 0; f < a.length; f += 1)
                e.append(a[f]);
            return e.getBlob(b.type);
        }
    };
}), d.register('zO16v', function(a, b) {
    (0, d('2wUyt').adapterFactory)({
        window: 'undefined' == typeof window ? void 0 : window
    });
}), d.register('2wUyt', function(a, c) {
    b(a.exports, 'adapterFactory', function() {
        return k;
    });
    var e = d('ieO59'),
        f = d('vJKfB'),
        g = d('JR87s'),
        h = d('SL7tz'),
        i = d('1lFYy'),
        j = d('kuebP');

    function k({
        window: l
    } = {}, m = {
        shimChrome: !0,
        shimFirefox: !0,
        shimEdge: !0,
        shimSafari: !0
    }) {
        const n = e.log,
            o = e.detectBrowser(l),
            p = {
                browserDetails: o,
                commonShim: j,
                extractVersion: e.extractVersion,
                disableLog: e.disableLog,
                disableWarnings: e.disableWarnings
            };
        switch (o.browser) {
            case 'chrome':
                if (!f || !f.shimPeerConnection || !m.shimChrome)
                    return n('Chrome shim is not included in this adapter release.'), p;
                if (null === o.version)
                    return n('Chrome shim can not determine version, not shimming.'), p;
                n('adapter.js shimming chrome.'), p.browserShim = f, f.shimGetUserMedia(l), f.shimMediaStream(l), f.shimPeerConnection(l), f.shimOnTrack(l), f.shimAddTrackRemoveTrack(l), f.shimGetSendersWithDtmf(l), f.shimGetStats(l), f.shimSenderReceiverGetStats(l), f.fixNegotiationNeeded(l), j.shimRTCIceCandidate(l), j.shimConnectionState(l), j.shimMaxMessageSize(l), j.shimSendThrowTypeError(l), j.removeAllowExtmapMixed(l);
                break;
            case 'firefox':
                if (!h || !h.shimPeerConnection || !m.shimFirefox)
                    return n('Firefox shim is not included in this adapter release.'), p;
                n('adapter.js shimming firefox.'), p.browserShim = h, h.shimGetUserMedia(l), h.shimPeerConnection(l), h.shimOnTrack(l), h.shimRemoveStream(l), h.shimSenderGetStats(l), h.shimReceiverGetStats(l), h.shimRTCDataChannel(l), h.shimAddTransceiver(l), h.shimGetParameters(l), h.shimCreateOffer(l), h.shimCreateAnswer(l), j.shimRTCIceCandidate(l), j.shimConnectionState(l), j.shimMaxMessageSize(l), j.shimSendThrowTypeError(l);
                break;
            case 'edge':
                if (!g || !g.shimPeerConnection || !m.shimEdge)
                    return n('MS edge shim is not included in this adapter release.'), p;
                n('adapter.js shimming edge.'), p.browserShim = g, g.shimGetUserMedia(l), g.shimGetDisplayMedia(l), g.shimPeerConnection(l), g.shimReplaceTrack(l), j.shimMaxMessageSize(l), j.shimSendThrowTypeError(l);
                break;
            case 'safari':
                if (!i || !m.shimSafari)
                    return n('Safari shim is not included in this adapter release.'), p;
                n('adapter.js shimming safari.'), p.browserShim = i, i.shimRTCIceServerUrls(l), i.shimCreateOfferLegacy(l), i.shimCallbacksAPI(l), i.shimLocalStreamsAPI(l), i.shimRemoteStreamsAPI(l), i.shimTrackEventTransceiver(l), i.shimGetUserMedia(l), i.shimAudioContext(l), j.shimRTCIceCandidate(l), j.shimMaxMessageSize(l), j.shimSendThrowTypeError(l), j.removeAllowExtmapMixed(l);
                break;
            default:
                n('Unsupported browser!');
        }
        return p;
    }
}), d.register('ieO59', function(a, c) {
    b(a.exports, 'extractVersion', function() {
        return g;
    }), b(a.exports, 'wrapPeerConnectionEvent', function() {
        return h;
    }), b(a.exports, 'disableLog', function() {
        return i;
    }), b(a.exports, 'disableWarnings', function() {
        return j;
    }), b(a.exports, 'log', function() {
        return k;
    }), b(a.exports, 'deprecated', function() {
        return l;
    }), b(a.exports, 'detectBrowser', function() {
        return m;
    }), b(a.exports, 'compactObject', function() {
        return o;
    }), b(a.exports, 'filterStats', function() {
        return q;
    });
    let e = !0,
        f = !0;

    function g(a, b, c) {
        const h = a.match(b);
        return h && h.length >= c && parseInt(h[c], 10);
    }

    function h(a, b, c) {
        if (!a.RTCPeerConnection)
            return;
        const i = a.RTCPeerConnection.prototype,
            j = i.addEventListener;
        i.addEventListener = function(a, i) {
            if (a !== b)
                return j.apply(this, n);
            const k = a => {
                const l = c(a);
                l && (i.handleEvent ? i.handleEvent(l) : i(l));
            };
            return this._eventMap = this._eventMap || {}, this._eventMap[b] || (this._eventMap[b] = new Map()), this._eventMap[b].set(i, k), j.apply(this, [
                a,
                k
            ]);
        };
        const k = i.removeEventListener;
        i.removeEventListener = function(a, c) {
            if (a !== b || !this._eventMap || !this._eventMap[b])
                return k.apply(this, n);
            if (!this._eventMap[b].has(c))
                return k.apply(this, n);
            const l = this._eventMap[b].get(c);
            return this._eventMap[b].delete(c), 0 === this._eventMap[b].size && delete this._eventMap[b], 0 === Object.keys(this._eventMap).length && delete this._eventMap, k.apply(this, [
                a,
                l
            ]);
        }, Object.defineProperty(i, 'on' + b, {
            get() {
                return this['_on' + b];
            },
            set(a) {
                this['_on' + b] && (this.removeEventListener(b, this['_on' + b]), delete this['_on' + b]), a && this.addEventListener(b, this['_on' + b] = a);
            },
            enumerable: !0,
            configurable: !0
        });
    }

    function i(a) {
        return 'boolean' != typeof a ? new Error('Argument type: ' + typeof a + '. Please use a boolean.') : (e = a, a ? 'adapter.js logging disabled' : 'adapter.js logging enabled');
    }

    function j(a) {
        return 'boolean' != typeof a ? new Error('Argument type: ' + typeof a + '. Please use a boolean.') : (f = !a, 'adapter.js deprecation warnings ' + (a ? 'disabled' : 'enabled'));
    }

    function k() {
        if ('object' == typeof window) {
            if (e)
                return;
            'undefined' != typeof console && 'function' == typeof console.log && console.log.apply(console, n);
        }
    }

    function l(a, b) {
        f && console.warn(a + ' is deprecated, please use ' + b + ' instead.');
    }

    function m(a) {
        const n = {
            browser: null,
            version: null
        };
        if (void 0 === a || !a.navigator)
            return n.browser = 'Not a browser.', n;
        const {
            navigator: o
        } = p;
        if (o.mozGetUserMedia)
            n.browser = 'firefox', n.version = g(o.userAgent, /Firefox\/(\d+)\./, 1);
        else if (o.webkitGetUserMedia || !1 === p.isSecureContext && p.webkitRTCPeerConnection && !p.RTCIceGatherer)
            n.browser = 'chrome', n.version = g(o.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
        else if (o.mediaDevices && o.userAgent.match(/Edge\/(\d+).(\d+)$/))
            n.browser = 'edge', n.version = g(o.userAgent, /Edge\/(\d+).(\d+)$/, 2);
        else {
            if (!p.RTCPeerConnection || !o.userAgent.match(/AppleWebKit\/(\d+)\./))
                return n.browser = 'Not a supported browser.', n;
            n.browser = 'safari', n.version = g(o.userAgent, /AppleWebKit\/(\d+)\./, 1), n.supportsUnifiedPlan = p.RTCRtpTransceiver && 'currentDirection' in p.RTCRtpTransceiver.prototype;
        }
        return n;
    }

    function n(a) {
        return '[object Object]' === Object.prototype.toString.call(a);
    }

    function o(a) {
        return n(a) ? Object.keys(a).reduce(function(b, c) {
            const p = n(a[c]),
                q = p ? o(a[c]) : a[c],
                r = p && !Object.keys(q).length;
            return void 0 === q || r ? b : Object.assign(b, {
                [c]: q
            });
        }, {}) : a;
    }

    function p(a, b, c) {
        b && !c.has(b.id) && (c.set(b.id, b), Object.keys(b).forEach(e => {
            e.endsWith('Id') ? p(a, a.get(b[e]), c) : e.endsWith('Ids') && b[e].forEach(b => {
                p(a, a.get(b), c);
            });
        }));
    }

    function q(a, b, c) {
        const r = c ? 'outbound-rtp' : 'inbound-rtp',
            s = new Map();
        if (null === b)
            return s;
        const t = [];
        return a.forEach(a => {
            'track' === a.type && a.trackIdentifier === b.id && t.push(a);
        }), t.forEach(b => {
            a.forEach(c => {
                c.type === r && c.trackId === b.id && p(a, c, s);
            });
        }), s;
    }
}), d.register('vJKfB', function(a, c) {
    b(a.exports, 'shimMediaStream', function() {
        return f;
    }), b(a.exports, 'shimOnTrack', function() {
        return g;
    }), b(a.exports, 'shimGetSendersWithDtmf', function() {
        return h;
    }), b(a.exports, 'shimGetStats', function() {
        return i;
    }), b(a.exports, 'shimSenderReceiverGetStats', function() {
        return j;
    }), b(a.exports, 'shimAddTrackRemoveTrackWithNative', function() {
        return k;
    }), b(a.exports, 'shimAddTrackRemoveTrack', function() {
        return l;
    }), b(a.exports, 'shimPeerConnection', function() {
        return m;
    }), b(a.exports, 'fixNegotiationNeeded', function() {
        return n;
    }), b(a.exports, 'shimGetUserMedia', function() {
        return d('NNa6n').shimGetUserMedia;
    }), b(a.exports, 'shimGetDisplayMedia', function() {
        return d('BVzwc').shimGetDisplayMedia;
    });
    var e = d('ieO59');
    d('NNa6n'), d('BVzwc');

    function f(a) {
        a.MediaStream = a.MediaStream || a.webkitMediaStream;
    }

    function g(a) {
        if ('object' == typeof a && a.RTCPeerConnection && !('ontrack' in a.RTCPeerConnection.prototype)) {
            Object.defineProperty(a.RTCPeerConnection.prototype, 'ontrack', {
                get() {
                    return this._ontrack;
                },
                set(a) {
                    this._ontrack && this.removeEventListener('track', this._ontrack), this.addEventListener('track', this._ontrack = a);
                },
                enumerable: !0,
                configurable: !0
            });
            const h = a.RTCPeerConnection.prototype.setRemoteDescription;
            a.RTCPeerConnection.prototype.setRemoteDescription = function() {
                return this._ontrackpoly || (this._ontrackpoly = h => {
                    h.stream.addEventListener('addtrack', c => {
                        let i;
                        i = a.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(a => a.track && a.track.id === c.track.id) : {
                            track: c.track
                        };
                        const j = new Event('track');
                        j.track = c.track, j.receiver = i, j.transceiver = {
                            receiver: i
                        }, j.streams = [h.stream], this.dispatchEvent(j);
                    }), h.stream.getTracks().forEach(c => {
                        let i;
                        i = a.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(a => a.track && a.track.id === c.id) : {
                            track: c
                        };
                        const j = new Event('track');
                        j.track = c, j.receiver = i, j.transceiver = {
                            receiver: i
                        }, j.streams = [h.stream], this.dispatchEvent(j);
                    });
                }, this.addEventListener('addstream', this._ontrackpoly)), h.apply(this, n);
            };
        } else
            e.wrapPeerConnectionEvent(a, 'track', a => (a.transceiver || Object.defineProperty(a, 'transceiver', {
                value: {
                    receiver: a.receiver
                }
            }), a));
    }

    function h(a) {
        if ('object' == typeof a && a.RTCPeerConnection && !('getSenders' in a.RTCPeerConnection.prototype) && 'createDTMFSender' in a.RTCPeerConnection.prototype) {
            const i = function(a, i) {
                return {
                    track: i,
                    get dtmf() {
                        return void 0 === this._dtmf && ('audio' === i.kind ? this._dtmf = a.createDTMFSender(i) : this._dtmf = null), this._dtmf;
                    },
                    _pc: a
                };
            };
            if (!a.RTCPeerConnection.prototype.getSenders) {
                a.RTCPeerConnection.prototype.getSenders = function() {
                    return this._senders = this._senders || [], this._senders.slice();
                };
                const j = a.RTCPeerConnection.prototype.addTrack;
                a.RTCPeerConnection.prototype.addTrack = function(a, d) {
                    let k = j.apply(this, n);
                    return k || (k = i(this, a), this._senders.push(k)), k;
                };
                const k = a.RTCPeerConnection.prototype.removeTrack;
                a.RTCPeerConnection.prototype.removeTrack = function(a) {
                    k.apply(this, n);
                    const l = this._senders.indexOf(a); -
                    1 !== l && this._senders.splice(l, 1);
                };
            }
            const j = a.RTCPeerConnection.prototype.addStream;
            a.RTCPeerConnection.prototype.addStream = function(a) {
                this._senders = this._senders || [], j.apply(this, [a]), a.getTracks().forEach(a => {
                    this._senders.push(i(this, a));
                });
            };
            const k = a.RTCPeerConnection.prototype.removeStream;
            a.RTCPeerConnection.prototype.removeStream = function(a) {
                this._senders = this._senders || [], k.apply(this, [a]), a.getTracks().forEach(a => {
                    const l = this._senders.find(l => l.track === a);
                    l && this._senders.splice(this._senders.indexOf(l), 1);
                });
            };
        } else if ('object' == typeof a && a.RTCPeerConnection && 'getSenders' in a.RTCPeerConnection.prototype && 'createDTMFSender' in a.RTCPeerConnection.prototype && a.RTCRtpSender && !('dtmf' in a.RTCRtpSender.prototype)) {
            const l = a.RTCPeerConnection.prototype.getSenders;
            a.RTCPeerConnection.prototype.getSenders = function() {
                const m = l.apply(this, []);
                return m.forEach(m => m._pc = this), m;
            }, Object.defineProperty(a.RTCRtpSender.prototype, 'dtmf', {
                get() {
                    return void 0 === this._dtmf && ('audio' === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
                }
            });
        }
    }

    function i(a) {
        if (!a.RTCPeerConnection)
            return;
        const j = a.RTCPeerConnection.prototype.getStats;
        a.RTCPeerConnection.prototype.getStats = function() {
            const [k, l, m] = n;
            if (n.length > 0 && 'function' == typeof k)
                return j.apply(this, n);
            if (0 === j.length && (0 === n.length || 'function' != typeof k))
                return j.apply(this, []);
            const o = function(k) {
                    const p = {};
                    return k.result().forEach(k => {
                        const q = {
                            id: k.id,
                            timestamp: k.timestamp,
                            type: {
                                localcandidate: 'local-candidate',
                                remotecandidate: 'remote-candidate'
                            } [k.type] || k.type
                        };
                        k.names().forEach(p => {
                            q[p] = k.stat(p);
                        }), p[q.id] = q;
                    }), p;
                },
                p = function(k) {
                    return new Map(Object.keys(k).map(j => [
                        j,
                        k[j]
                    ]));
                };
            if (n.length >= 2) {
                const q = function(k) {
                    l(p(o(k)));
                };
                return j.apply(this, [
                    q,
                    k
                ]);
            }
            return new Promise((k, l) => {
                j.apply(this, [
                    function(j) {
                        k(p(o(j)));
                    },
                    l
                ]);
            }).then(l, m);
        };
    }

    function j(a) {
        if (!('object' == typeof a && a.RTCPeerConnection && a.RTCRtpSender && a.RTCRtpReceiver))
            return;
        if (!('getStats' in a.RTCRtpSender.prototype)) {
            const k = a.RTCPeerConnection.prototype.getSenders;
            k && (a.RTCPeerConnection.prototype.getSenders = function() {
                const l = k.apply(this, []);
                return l.forEach(l => l._pc = this), l;
            });
            const l = a.RTCPeerConnection.prototype.addTrack;
            l && (a.RTCPeerConnection.prototype.addTrack = function() {
                const m = l.apply(this, v);
                return m._pc = this, m;
            }), a.RTCRtpSender.prototype.getStats = function() {
                const m = this;
                return this._pc.getStats().then(k => e.filterStats(k, m.track, !0));
            };
        }
        if (!('getStats' in a.RTCRtpReceiver.prototype)) {
            const k = a.RTCPeerConnection.prototype.getReceivers;
            k && (a.RTCPeerConnection.prototype.getReceivers = function() {
                const l = k.apply(this, []);
                return l.forEach(l => l._pc = this), l;
            }), e.wrapPeerConnectionEvent(a, 'track', a => (a.receiver._pc = a.srcElement, a)), a.RTCRtpReceiver.prototype.getStats = function() {
                const l = this;
                return this._pc.getStats().then(k => e.filterStats(k, l.track, !1));
            };
        }
        if (!('getStats' in a.RTCRtpSender.prototype) || !('getStats' in a.RTCRtpReceiver.prototype))
            return;
        const k = a.RTCPeerConnection.prototype.getStats;
        a.RTCPeerConnection.prototype.getStats = function() {
            if (v.length > 0 && v[0] instanceof a.MediaStreamTrack) {
                const l = v[0];
                let m, n, o;
                return this.getSenders().forEach(n => {
                    n.track === l && (m ? o = !0 : m = n);
                }), this.getReceivers().forEach(m => (m.track === l && (n ? o = !0 : n = m), m.track === l)), o || m && n ? Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError')) : m ? m.getStats() : n ? n.getStats() : Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
            }
            return k.apply(this, v);
        };
    }

    function k(a) {
        a.RTCPeerConnection.prototype.getLocalStreams = function() {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(a => this._shimmedLocalStreams[a][0]);
        };
        const l = a.RTCPeerConnection.prototype.addTrack;
        a.RTCPeerConnection.prototype.addTrack = function(a, c) {
            if (!c)
                return l.apply(this, v);
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            const m = l.apply(this, v);
            return this._shimmedLocalStreams[c.id] ? -1 === this._shimmedLocalStreams[c.id].indexOf(m) && this._shimmedLocalStreams[c.id].push(m) : this._shimmedLocalStreams[c.id] = [
                c,
                m
            ], m;
        };
        const m = a.RTCPeerConnection.prototype.addStream;
        a.RTCPeerConnection.prototype.addStream = function(a) {
            this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a.getTracks().forEach(a => {
                if (this.getSenders().find(l => l.track === a))
                    throw new DOMException('Track already exists.', 'InvalidAccessError');
            });
            const n = this.getSenders();
            m.apply(this, v);
            const o = this.getSenders().filter(a => -1 === n.indexOf(a));
            this._shimmedLocalStreams[a.id] = [a].concat(o);
        };
        const n = a.RTCPeerConnection.prototype.removeStream;
        a.RTCPeerConnection.prototype.removeStream = function(a) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[a.id], n.apply(this, v);
        };
        const o = a.RTCPeerConnection.prototype.removeTrack;
        a.RTCPeerConnection.prototype.removeTrack = function(a) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a && Object.keys(this._shimmedLocalStreams).forEach(l => {
                const p = this._shimmedLocalStreams[l].indexOf(a); -
                1 !== p && this._shimmedLocalStreams[l].splice(p, 1), 1 === this._shimmedLocalStreams[l].length && delete this._shimmedLocalStreams[l];
            }), o.apply(this, v);
        };
    }

    function l(a) {
        if (!a.RTCPeerConnection)
            return;
        const m = e.detectBrowser(a);
        if (a.RTCPeerConnection.prototype.addTrack && m.version >= 65)
            return k(a);
        const n = a.RTCPeerConnection.prototype.getLocalStreams;
        a.RTCPeerConnection.prototype.getLocalStreams = function() {
            const o = n.apply(this);
            return this._reverseStreams = this._reverseStreams || {}, o.map(o => this._reverseStreams[o.id]);
        };
        const o = a.RTCPeerConnection.prototype.addStream;
        a.RTCPeerConnection.prototype.addStream = function(m) {
            if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, m.getTracks().forEach(a => {
                    if (this.getSenders().find(m => m.track === a))
                        throw new DOMException('Track already exists.', 'InvalidAccessError');
                }), !this._reverseStreams[m.id]) {
                const p = new a.MediaStream(m.getTracks());
                this._streams[m.id] = p, this._reverseStreams[p.id] = m, m = p;
            }
            o.apply(this, [m]);
        };
        const p = a.RTCPeerConnection.prototype.removeStream;

        function q(a, m) {
            let r = m.sdp;
            return Object.keys(a._reverseStreams || []).forEach(m => {
                const s = a._reverseStreams[m],
                    t = a._streams[s.id];
                r = r.replace(new RegExp(t.id, 'g'), s.id);
            }), new RTCSessionDescription({
                type: m.type,
                sdp: r
            });
        }

        function r(a, m) {
            let s = m.sdp;
            return Object.keys(a._reverseStreams || []).forEach(m => {
                const t = a._reverseStreams[m],
                    u = a._streams[t.id];
                s = s.replace(new RegExp(t.id, 'g'), u.id);
            }), new RTCSessionDescription({
                type: m.type,
                sdp: s
            });
        }
        a.RTCPeerConnection.prototype.removeStream = function(a) {
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, p.apply(this, [this._streams[a.id] || a]), delete this._reverseStreams[this._streams[a.id] ? this._streams[a.id].id : a.id], delete this._streams[a.id];
        }, a.RTCPeerConnection.prototype.addTrack = function(m, n) {
            if ('closed' === this.signalingState)
                throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            const s = [].slice.call(v, 1);
            if (1 !== s.length || !s[0].getTracks().find(a => a === m))
                throw new DOMException('The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.', 'NotSupportedError');
            const t = this.getSenders().find(a => a.track === m);
            if (t)
                throw new DOMException('Track already exists.', 'InvalidAccessError');
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
            const u = this._streams[n.id];
            if (u)
                u.addTrack(m), Promise.resolve().then(() => {
                    this.dispatchEvent(new Event('negotiationneeded'));
                });
            else {
                const v = new a.MediaStream([m]);
                this._streams[n.id] = v, this._reverseStreams[v.id] = n, this.addStream(v);
            }
            return this.getSenders().find(a => a.track === m);
        }, [
            'createOffer',
            'createAnswer'
        ].forEach(function(m) {
            const s = a.RTCPeerConnection.prototype[m],
                t = {
                    [m]() {
                        const u = v;
                        return v.length && 'function' == typeof v[0] ? s.apply(this, [
                            m => {
                                const w = q(this, m);
                                u[0].apply(null, [w]);
                            },
                            m => {
                                u[1] && u[1].apply(null, m);
                            },
                            v[2]
                        ]) : s.apply(this, v).then(u => q(this, u));
                    }
                };
            a.RTCPeerConnection.prototype[m] = t[m];
        });
        const s = a.RTCPeerConnection.prototype.setLocalDescription;
        a.RTCPeerConnection.prototype.setLocalDescription = function() {
            return q.length && q[0].type ? (q[0] = r(this, q[0]), s.apply(this, q)) : s.apply(this, q);
        };
        const t = Object.getOwnPropertyDescriptor(a.RTCPeerConnection.prototype, 'localDescription');
        Object.defineProperty(a.RTCPeerConnection.prototype, 'localDescription', {
            get() {
                const u = t.get.apply(this);
                return '' === u.type ? u : q(this, u);
            }
        }), a.RTCPeerConnection.prototype.removeTrack = function(a) {
            if ('closed' === this.signalingState)
                throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            if (!a._pc)
                throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.', 'TypeError');
            if (!(a._pc === this))
                throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
            let u;
            this._streams = this._streams || {}, Object.keys(this._streams).forEach(n => {
                this._streams[n].getTracks().find(u => a.track === u) && (u = this._streams[n]);
            }), u && (1 === u.getTracks().length ? this.removeStream(this._reverseStreams[u.id]) : u.removeTrack(a.track), this.dispatchEvent(new Event('negotiationneeded')));
        };
    }

    function m(a) {
        const n = e.detectBrowser(a);
        if (!a.RTCPeerConnection && a.webkitRTCPeerConnection && (a.RTCPeerConnection = a.webkitRTCPeerConnection), !a.RTCPeerConnection)
            return;
        const o = 0 === a.RTCPeerConnection.prototype.addIceCandidate.length;
        n.version < 53 && [
            'setLocalDescription',
            'setRemoteDescription',
            'addIceCandidate'
        ].forEach(function(n) {
            const p = a.RTCPeerConnection.prototype[n],
                q = {
                    [n]() {
                        return q[0] = new('addIceCandidate' === n ? a.RTCIceCandidate : a.RTCSessionDescription)(q[0]), p.apply(this, q);
                    }
                };
            a.RTCPeerConnection.prototype[n] = q[n];
        });
        const p = a.RTCPeerConnection.prototype.addIceCandidate;
        a.RTCPeerConnection.prototype.addIceCandidate = function() {
            return o || q[0] ? n.version < 78 && q[0] && '' === q[0].candidate ? Promise.resolve() : p.apply(this, q) : (q[1] && q[1].apply(null), Promise.resolve());
        };
    }

    function n(a) {
        const o = e.detectBrowser(a);
        e.wrapPeerConnectionEvent(a, 'negotiationneeded', a => {
            const p = a.target;
            if (!(o.version < 72 || p.getConfiguration && 'plan-b' === p.getConfiguration().sdpSemantics) || 'stable' === p.signalingState)
                return a;
        });
    }
}), d.register('NNa6n', function(a, c) {
    b(a.exports, 'shimGetUserMedia', function() {
        return g;
    });
    var e = d('ieO59');
    const f = e.log;

    function g(a) {
        const h = a && a.navigator;
        if (!h.mediaDevices)
            return;
        const i = e.detectBrowser(a),
            j = function(a) {
                if ('object' != typeof a || a.mandatory || a.optional)
                    return a;
                const k = {};
                return Object.keys(a).forEach(i => {
                    if ('require' === i || 'advanced' === i || 'mediaSource' === i)
                        return;
                    const l = 'object' == typeof a[i] ? a[i] : {
                        ideal: a[i]
                    };
                    void 0 !== l.exact && 'number' == typeof l.exact && (l.min = l.max = l.exact);
                    const m = function(a, k) {
                        return a ? a + k.charAt(0).toUpperCase() + k.slice(1) : 'deviceId' === k ? 'sourceId' : k;
                    };
                    if (void 0 !== l.ideal) {
                        k.optional = k.optional || [];
                        let n = {};
                        'number' == typeof l.ideal ? (n[m('min', i)] = l.ideal, k.optional.push(n), n = {}, n[m('max', i)] = l.ideal, k.optional.push(n)) : (n[m('', i)] = l.ideal, k.optional.push(n));
                    }
                    void 0 !== l.exact && 'number' != typeof l.exact ? (k.mandatory = k.mandatory || {}, k.mandatory[m('', i)] = l.exact) : [
                        'min',
                        'max'
                    ].forEach(a => {
                        void 0 !== l[a] && (k.mandatory = k.mandatory || {}, k.mandatory[m(a, i)] = l[a]);
                    });
                }), a.advanced && (k.optional = (k.optional || []).concat(a.advanced)), k;
            },
            k = function(a, e) {
                if (i.version >= 61)
                    return e(a);
                if ((a = JSON.parse(JSON.stringify(a))) && 'object' == typeof a.audio) {
                    const l = function(a, l, i) {
                        l in a && !(i in a) && (a[i] = a[l], delete a[l]);
                    };
                    l((a = JSON.parse(JSON.stringify(a))).audio, 'autoGainControl', 'googAutoGainControl'), l(a.audio, 'noiseSuppression', 'googNoiseSuppression'), a.audio = j(a.audio);
                }
                if (a && 'object' == typeof a.video) {
                    let l = a.video.facingMode;
                    l = l && ('object' == typeof l ? l : {
                        ideal: l
                    });
                    const m = i.version < 66;
                    if (l && ('user' === l.exact || 'environment' === l.exact || 'user' === l.ideal || 'environment' === l.ideal) && (!h.mediaDevices.getSupportedConstraints || !h.mediaDevices.getSupportedConstraints().facingMode || m)) {
                        let n;
                        if (delete a.video.facingMode, 'environment' === l.exact || 'environment' === l.ideal ? n = [
                                'back',
                                'rear'
                            ] : 'user' !== l.exact && 'user' !== l.ideal || (n = ['front']), n)
                            return h.mediaDevices.enumerateDevices().then(h => {
                                let o = (h = h.filter(a => 'videoinput' === a.kind)).find(a => n.some(h => a.label.toLowerCase().includes(h)));
                                return !o && h.length && n.includes('back') && (o = h[h.length - 1]), o && (a.video.deviceId = l.exact ? {
                                    exact: o.deviceId
                                } : {
                                    ideal: o.deviceId
                                }), a.video = j(a.video), f('chrome: ' + JSON.stringify(a)), e(a);
                            });
                    }
                    a.video = j(a.video);
                }
                return f('chrome: ' + JSON.stringify(a)), e(a);
            },
            l = function(a) {
                return i.version >= 64 ? a : {
                    name: {
                        PermissionDeniedError: 'NotAllowedError',
                        PermissionDismissedError: 'NotAllowedError',
                        InvalidStateError: 'NotAllowedError',
                        DevicesNotFoundError: 'NotFoundError',
                        ConstraintNotSatisfiedError: 'OverconstrainedError',
                        TrackStartError: 'NotReadableError',
                        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
                        MediaDeviceKillSwitchOn: 'NotAllowedError',
                        TabCaptureError: 'AbortError',
                        ScreenCaptureError: 'AbortError',
                        DeviceCaptureError: 'AbortError'
                    } [a.name] || a.name,
                    message: a.message,
                    constraint: a.constraint || a.constraintName,
                    toString() {
                        return this.name + (this.message && ': ') + this.message;
                    }
                };
            };
        if (h.getUserMedia = function(a, i, j) {
                k(a, a => {
                    h.webkitGetUserMedia(a, i, a => {
                        j && j(l(a));
                    });
                });
            }.bind(h), h.mediaDevices.getUserMedia) {
            const m = h.mediaDevices.getUserMedia.bind(h.mediaDevices);
            h.mediaDevices.getUserMedia = function(h) {
                return k(h, h => m(h).then(m => {
                    if (h.audio && !m.getAudioTracks().length || h.video && !m.getVideoTracks().length)
                        throw m.getTracks().forEach(m => {
                            m.stop();
                        }), new DOMException('', 'NotFoundError');
                    return m;
                }, m => Promise.reject(l(m))));
            };
        }
    }
}), d.register('BVzwc', function(a, c) {
    function e(a, b) {
        a.navigator.mediaDevices && 'getDisplayMedia' in a.navigator.mediaDevices || a.navigator.mediaDevices && ('function' == typeof b ? a.navigator.mediaDevices.getDisplayMedia = function(c) {
            return b(c).then(b => {
                const f = c.video && c.video.width,
                    g = c.video && c.video.height,
                    h = c.video && c.video.frameRate;
                return c.video = {
                    mandatory: {
                        chromeMediaSource: 'desktop',
                        chromeMediaSourceId: b,
                        maxFrameRate: h || 3
                    }
                }, f && (c.video.mandatory.maxWidth = f), g && (c.video.mandatory.maxHeight = g), a.navigator.mediaDevices.getUserMedia(c);
            });
        } : console.error('shimGetDisplayMedia: getSourceId argument is not a function'));
    }
    b(a.exports, 'shimGetDisplayMedia', function() {
        return e;
    });
}), d.register('JR87s', function(a, e) {
    b(a.exports, 'shimPeerConnection', function() {
        return h;
    }), b(a.exports, 'shimReplaceTrack', function() {
        return i;
    }), b(a.exports, 'shimGetUserMedia', function() {
        return d('waycf').shimGetUserMedia;
    }), b(a.exports, 'shimGetDisplayMedia', function() {
        return d('xboIa').shimGetDisplayMedia;
    });
    var e = d('ieO59'),
        f = d('LSVpQ'),
        g = d('myjh+');
    d('waycf'), d('xboIa');

    function h(a) {
        const i = e.detectBrowser(a);
        if (a.RTCIceGatherer && (a.RTCIceCandidate || (a.RTCIceCandidate = function(a) {
                return a;
            }), a.RTCSessionDescription || (a.RTCSessionDescription = function(a) {
                return a;
            }), i.version < 15025)) {
            const j = Object.getOwnPropertyDescriptor(a.MediaStreamTrack.prototype, 'enabled');
            Object.defineProperty(a.MediaStreamTrack.prototype, 'enabled', {
                set(a) {
                    j.set.call(this, a);
                    const k = new Event('enabled');
                    k.enabled = a, this.dispatchEvent(k);
                }
            });
        }
        a.RTCRtpSender && !('dtmf' in a.RTCRtpSender.prototype) && Object.defineProperty(a.RTCRtpSender.prototype, 'dtmf', {
            get() {
                return void 0 === this._dtmf && ('audio' === this.track.kind ? this._dtmf = new a.RTCDtmfSender(this) : 'video' === this.track.kind && (this._dtmf = null)), this._dtmf;
            }
        }), a.RTCDtmfSender && !a.RTCDTMFSender && (a.RTCDTMFSender = a.RTCDtmfSender);
        const j = c(g)(a, i.version);
        a.RTCPeerConnection = function(a) {
            return a && a.iceServers && (a.iceServers = (0, f.filterIceServers)(a.iceServers, i.version), e.log('ICE servers after filtering:', a.iceServers)), new j(a);
        }, a.RTCPeerConnection.prototype = j.prototype;
    }

    function i(a) {
        a.RTCRtpSender && !('replaceTrack' in a.RTCRtpSender.prototype) && (a.RTCRtpSender.prototype.replaceTrack = a.RTCRtpSender.prototype.setTrack);
    }
}), d.register('LSVpQ', function(a, c) {
    b(a.exports, 'filterIceServers', function() {
        return f;
    });
    var e = d('ieO59');

    function f(a, b) {
        let g = !1;
        return (a = JSON.parse(JSON.stringify(a))).filter(a => {
            if (a && (a.urls || a.url)) {
                let h = a.urls || a.url;
                a.url && !a.urls && e.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                const i = 'string' == typeof h;
                return i && (h = [h]), h = h.filter(a => {
                    if (0 === a.indexOf('stun:'))
                        return !1;
                    const j = a.startsWith('turn') && !a.startsWith('turn:[') && a.includes('transport=udp');
                    return j && !g ? (g = !0, !0) : j && !g;
                }), delete a.url, a.urls = i ? h[0] : h, !!h.length;
            }
        });
    }
}), d.register('myjh+', function(a, b) {
    var e = d('taIQS');

    function f(a, b, d, f, g) {
        var g = e.writeRtpDescription(a.kind, b);
        if (g += e.writeIceParameters(a.iceGatherer.getLocalParameters()), g += e.writeDtlsParameters(a.dtlsTransport.getLocalParameters(), 'offer' === d ? 'actpass' : g || 'active'), g += 'a=mid:' + a.mid + '\r\n', a.rtpSender && a.rtpReceiver ? g += 'a=sendrecv\r\n' : a.rtpSender ? g += 'a=sendonly\r\n' : a.rtpReceiver ? g += 'a=recvonly\r\n' : g += 'a=inactive\r\n', a.rtpSender) {
            var h = a.rtpSender._initialTrackId || a.rtpSender.track.id;
            a.rtpSender._initialTrackId = h;
            var i = 'msid:' + (f ? f.id : '-') + ' ' + h + '\r\n';
            g += 'a=' + i, g += 'a=ssrc:' + a.sendEncodingParameters[0].ssrc + ' ' + i, a.sendEncodingParameters[0].rtx && (g += 'a=ssrc:' + a.sendEncodingParameters[0].rtx.ssrc + ' ' + i, g += 'a=ssrc-group:FID ' + a.sendEncodingParameters[0].ssrc + ' ' + a.sendEncodingParameters[0].rtx.ssrc + '\r\n');
        }
        return g += 'a=ssrc:' + a.sendEncodingParameters[0].ssrc + ' cname:' + e.localCName + '\r\n', a.rtpSender && a.sendEncodingParameters[0].rtx && (g += 'a=ssrc:' + a.sendEncodingParameters[0].rtx.ssrc + ' cname:' + e.localCName + '\r\n'), g;
    }

    function g(a, b) {
        var h = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: []
            },
            i = function(a, b) {
                a = parseInt(a, 10);
                for (var j = 0; j < b.length; j++)
                    if (b[j].payloadType === a || b[j].preferredPayloadType === a)
                        return b[j];
            },
            j = function(a, b, h, j) {
                var k = i(a.parameters.apt, h),
                    l = i(b.parameters.apt, j);
                return k && l && k.name.toLowerCase() === l.name.toLowerCase();
            };
        return a.codecs.forEach(function(i) {
            for (var k = 0; k < b.codecs.length; k++) {
                var l = b.codecs[k];
                if (i.name.toLowerCase() === l.name.toLowerCase() && i.clockRate === l.clockRate) {
                    if ('rtx' === i.name.toLowerCase() && i.parameters && l.parameters.apt && !j(i, l, a.codecs, b.codecs))
                        continue;
                    (l = JSON.parse(JSON.stringify(l))).numChannels = Math.min(i.numChannels, l.numChannels), h.codecs.push(l), l.rtcpFeedback = l.rtcpFeedback.filter(function(a) {
                        for (var m = 0; m < i.rtcpFeedback.length; m++)
                            if (i.rtcpFeedback[m].type === a.type && i.rtcpFeedback[m].parameter === a.parameter)
                                return !0;
                        return !1;
                    });
                    break;
                }
            }
        }), a.headerExtensions.forEach(function(a) {
            for (var k = 0; k < b.headerExtensions.length; k++) {
                var l = b.headerExtensions[k];
                if (a.uri === l.uri) {
                    h.headerExtensions.push(l);
                    break;
                }
            }
        }), h;
    }

    function h(a, b, e) {
        return -1 !== {
            offer: {
                setLocalDescription: [
                    'stable',
                    'have-local-offer'
                ],
                setRemoteDescription: [
                    'stable',
                    'have-remote-offer'
                ]
            },
            answer: {
                setLocalDescription: [
                    'have-remote-offer',
                    'have-local-pranswer'
                ],
                setRemoteDescription: [
                    'have-local-offer',
                    'have-remote-pranswer'
                ]
            }
        } [b][a].indexOf(e);
    }

    function i(a, b) {
        var j = a.getRemoteCandidates().find(function(a) {
            return b.foundation === a.foundation && b.ip === a.ip && b.port === a.port && b.priority === a.priority && b.protocol === a.protocol && b.type === a.type;
        });
        return j || a.addRemoteCandidate(b), !j;
    }

    function j(a, b) {
        var k = new Error(b);
        return k.name = a, k.code = {
            NotSupportedError: 9,
            InvalidStateError: 11,
            InvalidAccessError: 15,
            TypeError: void 0,
            OperationError: void 0
        } [a], k;
    }
    a.exports = function(a, b) {
        function k(b, e) {
            e.addTrack(b), e.dispatchEvent(new a.MediaStreamTrackEvent('addtrack', {
                track: b
            }));
        }

        function l(b, e, k, f) {
            var m = new Event('track');
            m.track = e, m.receiver = k, m.transceiver = {
                receiver: k
            }, m.streams = f, a.setTimeout(function() {
                b._dispatchEvent('track', m);
            });
        }
        var m = function(k) {
            var n = this,
                o = document.createDocumentFragment();
            if ([
                    'addEventListener',
                    'removeEventListener',
                    'dispatchEvent'
                ].forEach(function(a) {
                    n[a] = o[a].bind(o);
                }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = 'stable', this.iceConnectionState = 'new', this.connectionState = 'new', this.iceGatheringState = 'new', k = JSON.parse(JSON.stringify(k || {})), this.usingBundle = 'max-bundle' === k.bundlePolicy, 'negotiate' === k.rtcpMuxPolicy)
                throw j('NotSupportedError', 'rtcpMuxPolicy \'negotiate\' is not supported');
            switch (k.rtcpMuxPolicy || (k.rtcpMuxPolicy = 'require'), k.iceTransportPolicy) {
                case 'all':
                case 'relay':
                    break;
                default:
                    k.iceTransportPolicy = 'all';
            }
            switch (k.bundlePolicy) {
                case 'balanced':
                case 'max-compat':
                case 'max-bundle':
                    break;
                default:
                    k.bundlePolicy = 'balanced';
            }
            if (k.iceServers = function(a, b) {
                    var p = !1;
                    return (a = JSON.parse(JSON.stringify(a))).filter(function(a) {
                        if (a && (a.urls || a.url)) {
                            var q = a.urls || a.url;
                            a.url && !a.urls && console.warn('RTCIceServer.url is deprecated! Use urls instead.');
                            var r = 'string' == typeof q;
                            return r && (q = [q]), q = q.filter(function(a) {
                                return 0 !== a.indexOf('turn:') || -1 === a.indexOf('transport=udp') || -1 !== a.indexOf('turn:[') || p ? 0 === a.indexOf('stun:') && b >= 14393 && -1 === a.indexOf('?transport=udp') : (p = !0, !0);
                            }), delete a.url, a.urls = r ? q[0] : q, !!q.length;
                        }
                    });
                }(k.iceServers || [], b), this._iceGatherers = [], k.iceCandidatePoolSize)
                for (var p = k.iceCandidatePoolSize; p > 0; p--)
                    this._iceGatherers.push(new a.RTCIceGatherer({
                        iceServers: k.iceServers,
                        gatherPolicy: k.iceTransportPolicy
                    }));
            else
                k.iceCandidatePoolSize = 0;
            this._config = k, this.transceivers = [], this._sdpSessionId = e.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1;
        };
        Object.defineProperty(m.prototype, 'localDescription', {
            configurable: !0,
            get: function() {
                return this._localDescription;
            }
        }), Object.defineProperty(m.prototype, 'remoteDescription', {
            configurable: !0,
            get: function() {
                return this._remoteDescription;
            }
        }), m.prototype.onicecandidate = null, m.prototype.onaddstream = null, m.prototype.ontrack = null, m.prototype.onremovestream = null, m.prototype.onsignalingstatechange = null, m.prototype.oniceconnectionstatechange = null, m.prototype.onconnectionstatechange = null, m.prototype.onicegatheringstatechange = null, m.prototype.onnegotiationneeded = null, m.prototype.ondatachannel = null, m.prototype._dispatchEvent = function(a, b) {
            this._isClosed || (this.dispatchEvent(b), 'function' == typeof this['on' + a] && this['on' + a](b));
        }, m.prototype._emitGatheringStateChange = function() {
            var n = new Event('icegatheringstatechange');
            this._dispatchEvent('icegatheringstatechange', n);
        }, m.prototype.getConfiguration = function() {
            return this._config;
        }, m.prototype.getLocalStreams = function() {
            return this.localStreams;
        }, m.prototype.getRemoteStreams = function() {
            return this.remoteStreams;
        }, m.prototype._createTransceiver = function(a, b) {
            var n = this.transceivers.length > 0,
                o = {
                    track: null,
                    iceGatherer: null,
                    iceTransport: null,
                    dtlsTransport: null,
                    localCapabilities: null,
                    remoteCapabilities: null,
                    rtpSender: null,
                    rtpReceiver: null,
                    kind: a,
                    mid: null,
                    sendEncodingParameters: null,
                    recvEncodingParameters: null,
                    stream: null,
                    associatedRemoteMediaStreams: [],
                    wantReceive: !0
                };
            if (this.usingBundle && n)
                o.iceTransport = this.transceivers[0].iceTransport, o.dtlsTransport = this.transceivers[0].dtlsTransport;
            else {
                var p = this._createIceAndDtlsTransports();
                o.iceTransport = p.iceTransport, o.dtlsTransport = p.dtlsTransport;
            }
            return b || this.transceivers.push(o), o;
        }, m.prototype.addTrack = function(b, e) {
            if (this._isClosed)
                throw j('InvalidStateError', 'Attempted to call addTrack on a closed peerconnection.');
            var n;
            if (this.transceivers.find(function(a) {
                    return a.track === b;
                }))
                throw j('InvalidAccessError', 'Track already exists.');
            for (var o = 0; o < this.transceivers.length; o++)
                this.transceivers[o].track || this.transceivers[o].kind !== b.kind || (n = this.transceivers[o]);
            return n || (n = this._createTransceiver(b.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(e) && this.localStreams.push(e), n.track = b, n.stream = e, n.rtpSender = new a.RTCRtpSender(b, n.dtlsTransport), n.rtpSender;
        }, m.prototype.addStream = function(a) {
            var n = this;
            if (b >= 15025)
                a.getTracks().forEach(function(b) {
                    n.addTrack(b, a);
                });
            else {
                var o = a.clone();
                a.getTracks().forEach(function(a, b) {
                    var p = o.getTracks()[b];
                    a.addEventListener('enabled', function(a) {
                        p.enabled = a.enabled;
                    });
                }), o.getTracks().forEach(function(a) {
                    n.addTrack(a, o);
                });
            }
        }, m.prototype.removeTrack = function(b) {
            if (this._isClosed)
                throw j('InvalidStateError', 'Attempted to call removeTrack on a closed peerconnection.');
            if (!(b instanceof a.RTCRtpSender))
                throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.');
            var n = this.transceivers.find(function(a) {
                return a.rtpSender === b;
            });
            if (!n)
                throw j('InvalidAccessError', 'Sender was not created by this connection.');
            var o = n.stream;
            n.rtpSender.stop(), n.rtpSender = null, n.track = null, n.stream = null, -1 === this.transceivers.map(function(a) {
                return a.stream;
            }).indexOf(o) && this.localStreams.indexOf(o) > -1 && this.localStreams.splice(this.localStreams.indexOf(o), 1), this._maybeFireNegotiationNeeded();
        }, m.prototype.removeStream = function(a) {
            var n = this;
            a.getTracks().forEach(function(a) {
                var o = n.getSenders().find(function(n) {
                    return n.track === a;
                });
                o && n.removeTrack(o);
            });
        }, m.prototype.getSenders = function() {
            return this.transceivers.filter(function(a) {
                return !!a.rtpSender;
            }).map(function(a) {
                return a.rtpSender;
            });
        }, m.prototype.getReceivers = function() {
            return this.transceivers.filter(function(a) {
                return !!a.rtpReceiver;
            }).map(function(a) {
                return a.rtpReceiver;
            });
        }, m.prototype._createIceGatherer = function(b, e) {
            var n = this;
            if (e && b > 0)
                return this.transceivers[0].iceGatherer;
            if (this._iceGatherers.length)
                return this._iceGatherers.shift();
            var o = new a.RTCIceGatherer({
                iceServers: this._config.iceServers,
                gatherPolicy: this._config.iceTransportPolicy
            });
            return Object.defineProperty(o, 'state', {
                value: 'new',
                writable: !0
            }), this.transceivers[b].bufferedCandidateEvents = [], this.transceivers[b].bufferCandidates = function(a) {
                var p = !a.candidate || 0 === Object.keys(a.candidate).length;
                o.state = p ? 'completed' : 'gathering', null !== n.transceivers[b].bufferedCandidateEvents && n.transceivers[b].bufferedCandidateEvents.push(a);
            }, o.addEventListener('localcandidate', this.transceivers[b].bufferCandidates), o;
        }, m.prototype._gather = function(b, k) {
            var n = this,
                o = this.transceivers[k].iceGatherer;
            if (!o.onlocalcandidate) {
                var p = this.transceivers[k].bufferedCandidateEvents;
                this.transceivers[k].bufferedCandidateEvents = null, o.removeEventListener('localcandidate', this.transceivers[k].bufferCandidates), o.onlocalcandidate = function(a) {
                    if (!(n.usingBundle && k > 0)) {
                        var q = new Event('icecandidate');
                        q.candidate = {
                            sdpMid: b,
                            sdpMLineIndex: k
                        };
                        var r = a.candidate,
                            s = !r || 0 === Object.keys(r).length;
                        if (s)
                            'new' !== o.state && 'gathering' !== o.state || (o.state = 'completed');
                        else {
                            'new' === o.state && (o.state = 'gathering'), r.component = 1, r.ufrag = o.getLocalParameters().usernameFragment;
                            var t = e.writeCandidate(r);
                            q.candidate = Object.assign(q.candidate, e.parseCandidate(t)), q.candidate.candidate = t, q.candidate.toJSON = function() {
                                return {
                                    candidate: q.candidate.candidate,
                                    sdpMid: q.candidate.sdpMid,
                                    sdpMLineIndex: q.candidate.sdpMLineIndex,
                                    usernameFragment: q.candidate.usernameFragment
                                };
                            };
                        }
                        var t = e.getMediaSections(n._localDescription.sdp);
                        t[q.candidate.sdpMLineIndex] += s ? 'a=end-of-candidates\r\n' : 'a=' + q.candidate.candidate + '\r\n', n._localDescription.sdp = e.getDescription(n._localDescription.sdp) + t.join('');
                        var u = n.transceivers.every(function(a) {
                            return a.iceGatherer && 'completed' === a.iceGatherer.state;
                        });
                        'gathering' !== n.iceGatheringState && (n.iceGatheringState = 'gathering', n._emitGatheringStateChange()), s || n._dispatchEvent('icecandidate', q), u && (n._dispatchEvent('icecandidate', new Event('icecandidate')), n.iceGatheringState = 'complete', n._emitGatheringStateChange());
                    }
                }, a.setTimeout(function() {
                    p.forEach(function(a) {
                        o.onlocalcandidate(a);
                    });
                }, 0);
            }
        }, m.prototype._createIceAndDtlsTransports = function() {
            var n = this,
                o = new a.RTCIceTransport(null);
            o.onicestatechange = function() {
                n._updateIceConnectionState(), n._updateConnectionState();
            };
            var p = new a.RTCDtlsTransport(o);
            return p.ondtlsstatechange = function() {
                n._updateConnectionState();
            }, p.onerror = function() {
                Object.defineProperty(p, 'state', {
                    value: 'failed',
                    writable: !0
                }), n._updateConnectionState();
            }, {
                iceTransport: o,
                dtlsTransport: p
            };
        }, m.prototype._disposeIceAndDtlsTransports = function(a) {
            var n = this.transceivers[a].iceGatherer;
            n && (delete n.onlocalcandidate, delete this.transceivers[a].iceGatherer);
            var o = this.transceivers[a].iceTransport;
            o && (delete o.onicestatechange, delete this.transceivers[a].iceTransport);
            var p = this.transceivers[a].dtlsTransport;
            p && (delete p.ondtlsstatechange, delete p.onerror, delete this.transceivers[a].dtlsTransport);
        }, m.prototype._transceive = function(a, k, f) {
            var n = g(a.localCapabilities, a.remoteCapabilities);
            k && a.rtpSender && (n.encodings = a.sendEncodingParameters, n.rtcp = {
                cname: e.localCName,
                compound: a.rtcpParameters.compound
            }, a.recvEncodingParameters.length && (n.rtcp.ssrc = a.recvEncodingParameters[0].ssrc), a.rtpSender.send(n)), f && a.rtpReceiver && n.codecs.length > 0 && ('video' === a.kind && a.recvEncodingParameters && b < 15019 && a.recvEncodingParameters.forEach(function(a) {
                delete a.rtx;
            }), a.recvEncodingParameters.length ? n.encodings = a.recvEncodingParameters : n.encodings = [{}], n.rtcp = {
                compound: a.rtcpParameters.compound
            }, a.rtcpParameters.cname && (n.rtcp.cname = a.rtcpParameters.cname), a.sendEncodingParameters.length && (n.rtcp.ssrc = a.sendEncodingParameters[0].ssrc), a.rtpReceiver.receive(n));
        }, m.prototype.setLocalDescription = function(a) {
            var n, o, p = this;
            if (-1 === [
                    'offer',
                    'answer'
                ].indexOf(a.type))
                return Promise.reject(j('TypeError', 'Unsupported type "' + a.type + '"'));
            if (!h('setLocalDescription', a.type, p.signalingState) || p._isClosed)
                return Promise.reject(j('InvalidStateError', 'Can not set local ' + a.type + ' in state ' + p.signalingState));
            if ('offer' === a.type)
                n = e.splitSections(a.sdp), o = n.shift(), n.forEach(function(a, n) {
                    var q = e.parseRtpParameters(a);
                    p.transceivers[n].localCapabilities = q;
                }), p.transceivers.forEach(function(a, n) {
                    p._gather(a.mid, n);
                });
            else if ('answer' === a.type) {
                n = e.splitSections(p._remoteDescription.sdp), o = n.shift();
                var q = e.matchPrefix(o, 'a=ice-lite').length > 0;
                n.forEach(function(a, n) {
                    var r = p.transceivers[n],
                        s = r.iceGatherer,
                        t = r.iceTransport,
                        u = r.dtlsTransport,
                        v = r.localCapabilities,
                        w = r.remoteCapabilities;
                    if (!(e.isRejected(a) && 0 === e.matchPrefix(a, 'a=bundle-only').length) && !r.rejected) {
                        var x = e.getIceParameters(a, o),
                            y = e.getDtlsParameters(a, o);
                        q && (y.role = 'server'), p.usingBundle && 0 !== n || (p._gather(r.mid, n), 'new' === t.state && t.start(s, x, q ? 'controlling' : 'controlled'), 'new' === u.state && u.start(y));
                        var z = g(v, w);
                        p._transceive(r, z.codecs.length > 0, !1);
                    }
                });
            }
            return p._localDescription = {
                type: a.type,
                sdp: a.sdp
            }, 'offer' === a.type ? p._updateSignalingState('have-local-offer') : p._updateSignalingState('stable'), Promise.resolve();
        }, m.prototype.setRemoteDescription = function(f) {
            var n = this;
            if (-1 === [
                    'offer',
                    'answer'
                ].indexOf(f.type))
                return Promise.reject(j('TypeError', 'Unsupported type "' + f.type + '"'));
            if (!h('setRemoteDescription', f.type, n.signalingState) || n._isClosed)
                return Promise.reject(j('InvalidStateError', 'Can not set remote ' + f.type + ' in state ' + n.signalingState));
            var o = {};
            n.remoteStreams.forEach(function(a) {
                o[a.id] = a;
            });
            var p = [],
                q = e.splitSections(f.sdp),
                r = q.shift(),
                s = e.matchPrefix(r, 'a=ice-lite').length > 0,
                t = e.matchPrefix(r, 'a=group:BUNDLE ').length > 0;
            n.usingBundle = t;
            var u = e.matchPrefix(r, 'a=ice-options:')[0];
            return n.canTrickleIceCandidates = !!u && u.substr(14).split(' ').indexOf('trickle') >= 0, q.forEach(function(h, j) {
                var v = e.splitLines(h),
                    w = e.getKind(h),
                    x = e.isRejected(h) && 0 === e.matchPrefix(h, 'a=bundle-only').length,
                    y = v[0].substr(2).split(' ')[2],
                    z = e.getDirection(h, r),
                    A = e.parseMsid(h),
                    B = e.getMid(h) || e.generateIdentifier();
                if (x || 'application' === w && ('DTLS/SCTP' === y || 'UDP/DTLS/SCTP' === y))
                    n.transceivers[j] = {
                        mid: B,
                        kind: w,
                        protocol: y,
                        rejected: !0
                    };
                else {
                    var C, D, E, F, G, H, I, J, K;
                    !x && n.transceivers[j] && n.transceivers[j].rejected && (n.transceivers[j] = n._createTransceiver(w, !0));
                    var L, M, N = e.parseRtpParameters(h);
                    x || (L = e.getIceParameters(h, r), (M = e.getDtlsParameters(h, r)).role = 'client'), I = e.parseRtpEncodingParameters(h);
                    var O = e.parseRtcpParameters(h),
                        P = e.matchPrefix(h, 'a=end-of-candidates', r).length > 0,
                        Q = e.matchPrefix(h, 'a=candidate:').map(function(a) {
                            return e.parseCandidate(a);
                        }).filter(function(a) {
                            return 1 === a.component;
                        });
                    if (('offer' === f.type || 'answer' === f.type) && !x && t && j > 0 && n.transceivers[j] && (n._disposeIceAndDtlsTransports(j), n.transceivers[j].iceGatherer = n.transceivers[0].iceGatherer, n.transceivers[j].iceTransport = n.transceivers[0].iceTransport, n.transceivers[j].dtlsTransport = n.transceivers[0].dtlsTransport, n.transceivers[j].rtpSender && n.transceivers[j].rtpSender.setTransport(n.transceivers[0].dtlsTransport), n.transceivers[j].rtpReceiver && n.transceivers[j].rtpReceiver.setTransport(n.transceivers[0].dtlsTransport)), 'offer' !== f.type || x) {
                        if ('answer' === f.type && !x) {
                            D = (C = n.transceivers[j]).iceGatherer, E = C.iceTransport, F = C.dtlsTransport, G = C.rtpReceiver, H = C.sendEncodingParameters, J = C.localCapabilities, n.transceivers[j].recvEncodingParameters = I, n.transceivers[j].remoteCapabilities = N, n.transceivers[j].rtcpParameters = O, Q.length && 'new' === E.state && (!s && !P || t && 0 !== j ? Q.forEach(function(a) {
                                i(C.iceTransport, a);
                            }) : E.setRemoteCandidates(Q)), t && 0 !== j || ('new' === E.state && E.start(D, L, 'controlling'), 'new' === F.state && F.start(M)), !g(C.localCapabilities, C.remoteCapabilities).codecs.filter(function(a) {
                                return 'rtx' === a.name.toLowerCase();
                            }).length && C.sendEncodingParameters[0].rtx && delete C.sendEncodingParameters[0].rtx, n._transceive(C, 'sendrecv' === z || 'recvonly' === z, 'sendrecv' === z || 'sendonly' === z), !G || 'sendrecv' !== z && 'sendonly' !== z ? delete C.rtpReceiver : (K = G.track, A ? (o[A.stream] || (o[A.stream] = new a.MediaStream()), k(K, o[A.stream]), p.push([
                                K,
                                G,
                                o[A.stream]
                            ])) : (o.default || (o.default = new a.MediaStream()), k(K, o.default), p.push([
                                K,
                                G,
                                o.default
                            ])));
                        }
                    } else {
                        (C = n.transceivers[j] || n._createTransceiver(w)).mid = B, C.iceGatherer || (C.iceGatherer = n._createIceGatherer(j, t)), Q.length && 'new' === C.iceTransport.state && (!P || t && 0 !== j ? Q.forEach(function(a) {
                            i(C.iceTransport, a);
                        }) : C.iceTransport.setRemoteCandidates(Q)), J = a.RTCRtpReceiver.getCapabilities(w), b < 15019 && (J.codecs = J.codecs.filter(function(a) {
                            return 'rtx' !== a.name;
                        })), H = C.sendEncodingParameters || [{
                            ssrc: 1001 * (2 * j + 2)
                        }];
                        var R, S = !1;
                        if ('sendrecv' === z || 'sendonly' === z) {
                            if (S = !C.rtpReceiver, G = C.rtpReceiver || new a.RTCRtpReceiver(C.dtlsTransport, w), S)
                                K = G.track, A && '-' === A.stream || (A ? (o[A.stream] || (o[A.stream] = new a.MediaStream(), Object.defineProperty(o[A.stream], 'id', {
                                    get: function() {
                                        return A.stream;
                                    }
                                })), Object.defineProperty(K, 'id', {
                                    get: function() {
                                        return A.track;
                                    }
                                }), R = o[A.stream]) : (o.default || (o.default = new a.MediaStream()), R = o.default)), R && (k(K, R), C.associatedRemoteMediaStreams.push(R)), p.push([
                                    K,
                                    G,
                                    R
                                ]);
                        } else
                            C.rtpReceiver && C.rtpReceiver.track && (C.associatedRemoteMediaStreams.forEach(function(b) {
                                var T = b.getTracks().find(function(a) {
                                    return a.id === C.rtpReceiver.track.id;
                                });
                                T && function(b, T) {
                                    T.removeTrack(b), T.dispatchEvent(new a.MediaStreamTrackEvent('removetrack', {
                                        track: b
                                    }));
                                }(T, b);
                            }), C.associatedRemoteMediaStreams = []);
                        C.localCapabilities = J, C.remoteCapabilities = N, C.rtpReceiver = G, C.rtcpParameters = O, C.sendEncodingParameters = H, C.recvEncodingParameters = I, n._transceive(n.transceivers[j], !1, S);
                    }
                }
            }), void 0 === n._dtlsRole && (n._dtlsRole = 'offer' === f.type ? 'active' : 'passive'), n._remoteDescription = {
                type: f.type,
                sdp: f.sdp
            }, 'offer' === f.type ? n._updateSignalingState('have-remote-offer') : n._updateSignalingState('stable'), Object.keys(o).forEach(function(b) {
                var v = o[b];
                if (v.getTracks().length) {
                    if (-1 === n.remoteStreams.indexOf(v)) {
                        n.remoteStreams.push(v);
                        var w = new Event('addstream');
                        w.stream = v, a.setTimeout(function() {
                            n._dispatchEvent('addstream', w);
                        });
                    }
                    p.forEach(function(a) {
                        var w = a[0],
                            x = a[1];
                        v.id === a[2].id && l(n, w, x, [v]);
                    });
                }
            }), p.forEach(function(a) {
                a[2] || l(n, a[0], a[1], []);
            }), a.setTimeout(function() {
                n && n.transceivers && n.transceivers.forEach(function(a) {
                    a.iceTransport && 'new' === a.iceTransport.state && a.iceTransport.getRemoteCandidates().length > 0 && (console.warn('Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification'), a.iceTransport.addRemoteCandidate({}));
                });
            }, 4000), Promise.resolve();
        }, m.prototype.close = function() {
            this.transceivers.forEach(function(a) {
                a.iceTransport && a.iceTransport.stop(), a.dtlsTransport && a.dtlsTransport.stop(), a.rtpSender && a.rtpSender.stop(), a.rtpReceiver && a.rtpReceiver.stop();
            }), this._isClosed = !0, this._updateSignalingState('closed');
        }, m.prototype._updateSignalingState = function(a) {
            this.signalingState = a;
            var n = new Event('signalingstatechange');
            this._dispatchEvent('signalingstatechange', n);
        }, m.prototype._maybeFireNegotiationNeeded = function() {
            var n = this;
            'stable' === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, a.setTimeout(function() {
                if (n.needNegotiation) {
                    n.needNegotiation = !1;
                    var o = new Event('negotiationneeded');
                    n._dispatchEvent('negotiationneeded', o);
                }
            }, 0));
        }, m.prototype._updateIceConnectionState = function() {
            var n, o = {
                new: 0,
                closed: 0,
                checking: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach(function(n) {
                    n.iceTransport && !n.rejected && o[n.iceTransport.state]++;
                }), n = 'new', o.failed > 0 ? n = 'failed' : o.checking > 0 ? n = 'checking' : o.disconnected > 0 ? n = 'disconnected' : o.new > 0 ? n = 'new' : o.connected > 0 ? n = 'connected' : o.completed > 0 && (n = 'completed'), n !== this.iceConnectionState) {
                this.iceConnectionState = n;
                var p = new Event('iceconnectionstatechange');
                this._dispatchEvent('iceconnectionstatechange', p);
            }
        }, m.prototype._updateConnectionState = function() {
            var n, o = {
                new: 0,
                closed: 0,
                connecting: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach(function(n) {
                    n.iceTransport && n.dtlsTransport && !n.rejected && (o[n.iceTransport.state]++, o[n.dtlsTransport.state]++);
                }), o.connected += o.completed, n = 'new', o.failed > 0 ? n = 'failed' : o.connecting > 0 ? n = 'connecting' : o.disconnected > 0 ? n = 'disconnected' : o.new > 0 ? n = 'new' : o.connected > 0 && (n = 'connected'), n !== this.connectionState) {
                this.connectionState = n;
                var p = new Event('connectionstatechange');
                this._dispatchEvent('connectionstatechange', p);
            }
        }, m.prototype.createOffer = function() {
            var n = this;
            if (n._isClosed)
                return Promise.reject(j('InvalidStateError', 'Can not call createOffer after close'));
            var o = n.transceivers.filter(function(a) {
                    return 'audio' === a.kind;
                }).length,
                p = n.transceivers.filter(function(a) {
                    return 'video' === a.kind;
                }).length,
                q = q[0];
            if (q) {
                if (q.mandatory || q.optional)
                    throw new TypeError('Legacy mandatory/optional constraints not supported.');
                void 0 !== q.offerToReceiveAudio && (o = !0 === q.offerToReceiveAudio ? 1 : !1 === q.offerToReceiveAudio ? 0 : q.offerToReceiveAudio), void 0 !== q.offerToReceiveVideo && (p = !0 === q.offerToReceiveVideo ? 1 : !1 === q.offerToReceiveVideo ? 0 : q.offerToReceiveVideo);
            }
            for (n.transceivers.forEach(function(a) {
                    'audio' === a.kind ? --o < 0 && (a.wantReceive = !1) : 'video' === a.kind && --p < 0 && (a.wantReceive = !1);
                }); o > 0 || p > 0;)
                o > 0 && (n._createTransceiver('audio'), o--), p > 0 && (n._createTransceiver('video'), p--);
            var r = e.writeSessionBoilerplate(n._sdpSessionId, n._sdpSessionVersion++);
            n.transceivers.forEach(function(f, o) {
                var s = f.track,
                    t = f.kind,
                    u = f.mid || e.generateIdentifier();
                f.mid = u, f.iceGatherer || (f.iceGatherer = n._createIceGatherer(o, n.usingBundle));
                var v = a.RTCRtpSender.getCapabilities(t);
                b < 15019 && (v.codecs = v.codecs.filter(function(a) {
                    return 'rtx' !== a.name;
                })), v.codecs.forEach(function(a) {
                    'H264' === a.name && void 0 === a.parameters['level-asymmetry-allowed'] && (a.parameters['level-asymmetry-allowed'] = '1'), f.remoteCapabilities && f.remoteCapabilities.codecs && f.remoteCapabilities.codecs.forEach(function(b) {
                        a.name.toLowerCase() === b.name.toLowerCase() && a.clockRate === b.clockRate && (a.preferredPayloadType = b.payloadType);
                    });
                }), v.headerExtensions.forEach(function(a) {
                    (f.remoteCapabilities && f.remoteCapabilities.headerExtensions || []).forEach(function(b) {
                        a.uri === b.uri && (a.id = b.id);
                    });
                });
                var w = f.sendEncodingParameters || [{
                    ssrc: 1001 * (2 * o + 1)
                }];
                s && b >= 15019 && 'video' === t && !w[0].rtx && (w[0].rtx = {
                    ssrc: w[0].ssrc + 1
                }), f.wantReceive && (f.rtpReceiver = new a.RTCRtpReceiver(f.dtlsTransport, t)), f.localCapabilities = v, f.sendEncodingParameters = w;
            }), 'max-compat' !== n._config.bundlePolicy && (r += 'a=group:BUNDLE ' + n.transceivers.map(function(a) {
                return a.mid;
            }).join(' ') + '\r\n'), r += 'a=ice-options:trickle\r\n', n.transceivers.forEach(function(a, b) {
                r += f(a, a.localCapabilities, 'offer', a.stream, n._dtlsRole), r += 'a=rtcp-rsize\r\n', !a.iceGatherer || 'new' === n.iceGatheringState || 0 !== b && n.usingBundle || (a.iceGatherer.getLocalCandidates().forEach(function(a) {
                    a.component = 1, r += 'a=' + e.writeCandidate(a) + '\r\n';
                }), 'completed' === a.iceGatherer.state && (r += 'a=end-of-candidates\r\n'));
            });
            var s = new a.RTCSessionDescription({
                type: 'offer',
                sdp: r
            });
            return Promise.resolve(s);
        }, m.prototype.createAnswer = function() {
            var n = this;
            if (n._isClosed)
                return Promise.reject(j('InvalidStateError', 'Can not call createAnswer after close'));
            if ('have-remote-offer' !== n.signalingState && 'have-local-pranswer' !== n.signalingState)
                return Promise.reject(j('InvalidStateError', 'Can not call createAnswer in signalingState ' + n.signalingState));
            var o = e.writeSessionBoilerplate(n._sdpSessionId, n._sdpSessionVersion++);
            n.usingBundle && (o += 'a=group:BUNDLE ' + n.transceivers.map(function(a) {
                return a.mid;
            }).join(' ') + '\r\n'), o += 'a=ice-options:trickle\r\n';
            var p = e.getMediaSections(n._remoteDescription.sdp).length;
            n.transceivers.forEach(function(a, e) {
                if (!(e + 1 > p)) {
                    if (a.rejected)
                        return 'application' === a.kind ? 'DTLS/SCTP' === a.protocol ? o += 'm=application 0 DTLS/SCTP 5000\r\n' : o += 'm=application 0 ' + a.protocol + ' webrtc-datachannel\r\n' : 'audio' === a.kind ? o += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n' : 'video' === a.kind && (o += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n'), void(o += 'c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:' + a.mid + '\r\n');
                    var q;
                    if (a.stream)
                        'audio' === a.kind ? q = a.stream.getAudioTracks()[0] : 'video' === a.kind && (q = a.stream.getVideoTracks()[0]), q && b >= 15019 && 'video' === a.kind && !a.sendEncodingParameters[0].rtx && (a.sendEncodingParameters[0].rtx = {
                            ssrc: a.sendEncodingParameters[0].ssrc + 1
                        });
                    var r = g(a.localCapabilities, a.remoteCapabilities);
                    !r.codecs.filter(function(a) {
                        return 'rtx' === a.name.toLowerCase();
                    }).length && a.sendEncodingParameters[0].rtx && delete a.sendEncodingParameters[0].rtx, o += f(a, r, 'answer', a.stream, n._dtlsRole), a.rtcpParameters && a.rtcpParameters.reducedSize && (o += 'a=rtcp-rsize\r\n');
                }
            });
            var q = new a.RTCSessionDescription({
                type: 'answer',
                sdp: o
            });
            return Promise.resolve(q);
        }, m.prototype.addIceCandidate = function(a) {
            var n, o = this;
            return a && void 0 === a.sdpMLineIndex && !a.sdpMid ? Promise.reject(new TypeError('sdpMLineIndex or sdpMid required')) : new Promise(function(f, g) {
                if (!o._remoteDescription)
                    return g(j('InvalidStateError', 'Can not add ICE candidate without a remote description'));
                if (a && '' !== a.candidate) {
                    var p = a.sdpMLineIndex;
                    if (a.sdpMid)
                        for (var q = 0; q < o.transceivers.length; q++)
                            if (o.transceivers[q].mid === a.sdpMid) {
                                p = q;
                                break;
                            }
                    var q = o.transceivers[p];
                    if (!q)
                        return g(j('OperationError', 'Can not add ICE candidate'));
                    if (q.rejected)
                        return f();
                    var r = Object.keys(a.candidate).length > 0 ? e.parseCandidate(a.candidate) : {};
                    if ('tcp' === r.protocol && (0 === r.port || 9 === r.port))
                        return f();
                    if (r.component && 1 !== r.component)
                        return f();
                    if ((0 === p || p > 0 && q.iceTransport !== o.transceivers[0].iceTransport) && !i(q.iceTransport, r))
                        return g(j('OperationError', 'Can not add ICE candidate'));
                    var s = a.candidate.trim();
                    0 === s.indexOf('a=') && (s = s.substr(2)), (n = e.getMediaSections(o._remoteDescription.sdp))[p] += 'a=' + (r.type ? s : 'end-of-candidates') + '\r\n', o._remoteDescription.sdp = e.getDescription(o._remoteDescription.sdp) + n.join('');
                } else
                    for (var p = 0; p < o.transceivers.length && (o.transceivers[p].rejected || (o.transceivers[p].iceTransport.addRemoteCandidate({}), (n = e.getMediaSections(o._remoteDescription.sdp))[p] += 'a=end-of-candidates\r\n', o._remoteDescription.sdp = e.getDescription(o._remoteDescription.sdp) + n.join(''), !o.usingBundle)); p++);
                f();
            });
        }, m.prototype.getStats = function(b) {
            if (b && b instanceof a.MediaStreamTrack) {
                var n = null;
                if (this.transceivers.forEach(function(a) {
                        a.rtpSender && a.rtpSender.track === b ? n = a.rtpSender : a.rtpReceiver && a.rtpReceiver.track === b && (n = a.rtpReceiver);
                    }), !n)
                    throw j('InvalidAccessError', 'Invalid selector.');
                return n.getStats();
            }
            var n = [];
            return this.transceivers.forEach(function(a) {
                [
                    'rtpSender',
                    'rtpReceiver',
                    'iceGatherer',
                    'iceTransport',
                    'dtlsTransport'
                ].forEach(function(b) {
                    a[b] && n.push(a[b].getStats());
                });
            }), Promise.all(n).then(function(a) {
                var o = new Map();
                return a.forEach(function(a) {
                    a.forEach(function(a) {
                        o.set(a.id, a);
                    });
                }), o;
            });
        };
        [
            'RTCRtpSender',
            'RTCRtpReceiver',
            'RTCIceGatherer',
            'RTCIceTransport',
            'RTCDtlsTransport'
        ].forEach(function(b) {
            var n = a[b];
            if (n && n.prototype && n.prototype.getStats) {
                var o = n.prototype.getStats;
                n.prototype.getStats = function() {
                    return o.apply(this).then(function(a) {
                        var p = new Map();
                        return Object.keys(a).forEach(function(n) {
                            var q;
                            a[n].type = {
                                inboundrtp: 'inbound-rtp',
                                outboundrtp: 'outbound-rtp',
                                candidatepair: 'candidate-pair',
                                localcandidate: 'local-candidate',
                                remotecandidate: 'remote-candidate'
                            } [(q = a[n]).type] || q.type, p.set(n, a[n]);
                        }), p;
                    });
                };
            }
        });
        var n = [
            'createOffer',
            'createAnswer'
        ];
        return n.forEach(function(a) {
            var o = m.prototype[a];
            m.prototype[a] = function() {
                var p = q;
                return 'function' == typeof p[0] || 'function' == typeof p[1] ? o.apply(this, [q[2]]).then(function(o) {
                    'function' == typeof p[0] && p[0].apply(null, [o]);
                }, function(o) {
                    'function' == typeof p[1] && p[1].apply(null, [o]);
                }) : o.apply(this, q);
            };
        }), (n = [
            'setLocalDescription',
            'setRemoteDescription',
            'addIceCandidate'
        ]).forEach(function(a) {
            var o = m.prototype[a];
            m.prototype[a] = function() {
                var p = q;
                return 'function' == typeof p[1] || 'function' == typeof p[2] ? o.apply(this, q).then(function() {
                    'function' == typeof p[1] && p[1].apply(null);
                }, function(o) {
                    'function' == typeof p[2] && p[2].apply(null, [o]);
                }) : o.apply(this, q);
            };
        }), ['getStats'].forEach(function(a) {
            var o = m.prototype[a];
            m.prototype[a] = function() {
                var p = q;
                return 'function' == typeof p[1] ? o.apply(this, q).then(function() {
                    'function' == typeof p[1] && p[1].apply(null);
                }) : o.apply(this, q);
            };
        }), m;
    };
}), d.register('taIQS', function(a, b) {
    var e = {
        generateIdentifier: function() {
            return Math.random().toString(36).substr(2, 10);
        }
    };
    e.localCName = e.generateIdentifier(), e.splitLines = function(a) {
        return a.trim().split('\n').map(function(a) {
            return a.trim();
        });
    }, e.splitSections = function(a) {
        return a.split('\nm=').map(function(a, b) {
            return (b > 0 ? 'm=' + a : a).trim() + '\r\n';
        });
    }, e.getDescription = function(a) {
        var f = e.splitSections(a);
        return f && f[0];
    }, e.getMediaSections = function(a) {
        var f = e.splitSections(a);
        return f.shift(), f;
    }, e.matchPrefix = function(a, b) {
        return e.splitLines(a).filter(function(a) {
            return 0 === a.indexOf(b);
        });
    }, e.parseCandidate = function(a) {
        for (var f, g = {
                foundation: (f = 0 === a.indexOf('a=candidate:') ? a.substring(12).split(' ') : a.substring(10).split(' '))[0],
                component: parseInt(f[1], 10),
                protocol: f[2].toLowerCase(),
                priority: parseInt(f[3], 10),
                ip: f[4],
                address: f[4],
                port: parseInt(f[5], 10),
                type: f[7]
            }, h = 8; h < f.length; h += 2)
            switch (f[h]) {
                case 'raddr':
                    g.relatedAddress = f[h + 1];
                    break;
                case 'rport':
                    g.relatedPort = parseInt(f[h + 1], 10);
                    break;
                case 'tcptype':
                    g.tcpType = f[h + 1];
                    break;
                case 'ufrag':
                    g.ufrag = f[h + 1], g.usernameFragment = f[h + 1];
                    break;
                default:
                    g[f[h]] = f[h + 1];
            }
        return g;
    }, e.writeCandidate = function(a) {
        var f = [];
        f.push(a.foundation), f.push(a.component), f.push(a.protocol.toUpperCase()), f.push(a.priority), f.push(a.address || a.ip), f.push(a.port);
        var g = a.type;
        return f.push('typ'), f.push(g), 'host' !== g && a.relatedAddress && a.relatedPort && (f.push('raddr'), f.push(a.relatedAddress), f.push('rport'), f.push(a.relatedPort)), a.tcpType && 'tcp' === a.protocol.toLowerCase() && (f.push('tcptype'), f.push(a.tcpType)), (a.usernameFragment || a.ufrag) && (f.push('ufrag'), f.push(a.usernameFragment || a.ufrag)), 'candidate:' + f.join(' ');
    }, e.parseIceOptions = function(a) {
        return a.substr(14).split(' ');
    }, e.parseRtpMap = function(a) {
        var f = a.substr(9).split(' '),
            g = {
                payloadType: parseInt(f.shift(), 10)
            };
        return f = f[0].split('/'), g.name = f[0], g.clockRate = parseInt(f[1], 10), g.channels = 3 === f.length ? parseInt(f[2], 10) : 1, g.numChannels = g.channels, g;
    }, e.writeRtpMap = function(a) {
        var f = a.payloadType;
        void 0 !== a.preferredPayloadType && (f = a.preferredPayloadType);
        var g = a.channels || a.numChannels || 1;
        return 'a=rtpmap:' + f + ' ' + a.name + '/' + a.clockRate + (1 !== g ? '/' + g : '') + '\r\n';
    }, e.parseExtmap = function(a) {
        var f = a.substr(9).split(' ');
        return {
            id: parseInt(f[0], 10),
            direction: f[0].indexOf('/') > 0 ? f[0].split('/')[1] : 'sendrecv',
            uri: f[1]
        };
    }, e.writeExtmap = function(a) {
        return 'a=extmap:' + (a.id || a.preferredId) + (a.direction && 'sendrecv' !== a.direction ? '/' + a.direction : '') + ' ' + a.uri + '\r\n';
    }, e.parseFmtp = function(a) {
        for (var f, g = {}, h = a.substr(a.indexOf(' ') + 1).split(';'), i = 0; i < h.length; i++)
            g[(f = h[i].trim().split('='))[0].trim()] = f[1];
        return g;
    }, e.writeFmtp = function(a) {
        var f = '',
            g = a.payloadType;
        if (void 0 !== a.preferredPayloadType && (g = a.preferredPayloadType), a.parameters && Object.keys(a.parameters).length) {
            var h = [];
            Object.keys(a.parameters).forEach(function(f) {
                a.parameters[f] ? h.push(f + '=' + a.parameters[f]) : h.push(f);
            }), f += 'a=fmtp:' + g + ' ' + h.join(';') + '\r\n';
        }
        return f;
    }, e.parseRtcpFb = function(a) {
        var f = a.substr(a.indexOf(' ') + 1).split(' ');
        return {
            type: f.shift(),
            parameter: f.join(' ')
        };
    }, e.writeRtcpFb = function(a) {
        var f = '',
            g = a.payloadType;
        return void 0 !== a.preferredPayloadType && (g = a.preferredPayloadType), a.rtcpFeedback && a.rtcpFeedback.length && a.rtcpFeedback.forEach(function(a) {
            f += 'a=rtcp-fb:' + g + ' ' + a.type + (a.parameter && a.parameter.length ? ' ' + a.parameter : '') + '\r\n';
        }), f;
    }, e.parseSsrcMedia = function(a) {
        var f = a.indexOf(' '),
            g = {
                ssrc: parseInt(a.substr(7, f - 7), 10)
            },
            h = a.indexOf(':', f);
        return h > -1 ? (g.attribute = a.substr(f + 1, h - f - 1), g.value = a.substr(h + 1)) : g.attribute = a.substr(f + 1), g;
    }, e.parseSsrcGroup = function(a) {
        var f = a.substr(13).split(' ');
        return {
            semantics: f.shift(),
            ssrcs: f.map(function(a) {
                return parseInt(a, 10);
            })
        };
    }, e.getMid = function(a) {
        var f = e.matchPrefix(a, 'a=mid:')[0];
        if (f)
            return f.substr(6);
    }, e.parseFingerprint = function(a) {
        var f = a.substr(14).split(' ');
        return {
            algorithm: f[0].toLowerCase(),
            value: f[1]
        };
    }, e.getDtlsParameters = function(a, b) {
        return {
            role: 'auto',
            fingerprints: e.matchPrefix(a + b, 'a=fingerprint:').map(e.parseFingerprint)
        };
    }, e.writeDtlsParameters = function(a, b) {
        var f = 'a=setup:' + b + '\r\n';
        return a.fingerprints.forEach(function(a) {
            f += 'a=fingerprint:' + a.algorithm + ' ' + a.value + '\r\n';
        }), f;
    }, e.parseCryptoLine = function(a) {
        var f = a.substr(9).split(' ');
        return {
            tag: parseInt(f[0], 10),
            cryptoSuite: f[1],
            keyParams: f[2],
            sessionParams: f.slice(3)
        };
    }, e.writeCryptoLine = function(a) {
        return 'a=crypto:' + a.tag + ' ' + a.cryptoSuite + ' ' + ('object' == typeof a.keyParams ? e.writeCryptoKeyParams(a.keyParams) : a.keyParams) + (a.sessionParams ? ' ' + a.sessionParams.join(' ') : '') + '\r\n';
    }, e.parseCryptoKeyParams = function(a) {
        if (0 !== a.indexOf('inline:'))
            return null;
        var f = a.substr(7).split('|');
        return {
            keyMethod: 'inline',
            keySalt: f[0],
            lifeTime: f[1],
            mkiValue: f[2] ? f[2].split(':')[0] : void 0,
            mkiLength: f[2] ? f[2].split(':')[1] : void 0
        };
    }, e.writeCryptoKeyParams = function(a) {
        return a.keyMethod + ':' + a.keySalt + (a.lifeTime ? '|' + a.lifeTime : '') + (a.mkiValue && a.mkiLength ? '|' + a.mkiValue + ':' + a.mkiLength : '');
    }, e.getCryptoParameters = function(a, b) {
        return e.matchPrefix(a + b, 'a=crypto:').map(e.parseCryptoLine);
    }, e.getIceParameters = function(a, b) {
        var f = e.matchPrefix(a + b, 'a=ice-ufrag:')[0],
            g = e.matchPrefix(a + b, 'a=ice-pwd:')[0];
        return f && g ? {
            usernameFragment: f.substr(12),
            password: g.substr(10)
        } : null;
    }, e.writeIceParameters = function(a) {
        return 'a=ice-ufrag:' + a.usernameFragment + '\r\na=ice-pwd:' + a.password + '\r\n';
    }, e.parseRtpParameters = function(a) {
        for (var f = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: []
            }, g = e.splitLines(a)[0].split(' '), h = 3; h < g.length; h++) {
            var i = g[h],
                j = e.matchPrefix(a, 'a=rtpmap:' + i + ' ')[0];
            if (j) {
                var k = e.parseRtpMap(j),
                    l = e.matchPrefix(a, 'a=fmtp:' + i + ' ');
                switch (k.parameters = l.length ? e.parseFmtp(l[0]) : {}, k.rtcpFeedback = e.matchPrefix(a, 'a=rtcp-fb:' + i + ' ').map(e.parseRtcpFb), f.codecs.push(k), k.name.toUpperCase()) {
                    case 'RED':
                    case 'ULPFEC':
                        f.fecMechanisms.push(k.name.toUpperCase());
                }
            }
        }
        return e.matchPrefix(a, 'a=extmap:').forEach(function(a) {
            f.headerExtensions.push(e.parseExtmap(a));
        }), f;
    }, e.writeRtpDescription = function(a, b) {
        var f = '';
        f += 'm=' + a + ' ', f += b.codecs.length > 0 ? '9' : '0', f += ' UDP/TLS/RTP/SAVPF ', f += b.codecs.map(function(a) {
            return void 0 !== a.preferredPayloadType ? a.preferredPayloadType : a.payloadType;
        }).join(' ') + '\r\n', f += 'c=IN IP4 0.0.0.0\r\n', f += 'a=rtcp:9 IN IP4 0.0.0.0\r\n', b.codecs.forEach(function(a) {
            f += e.writeRtpMap(a), f += e.writeFmtp(a), f += e.writeRtcpFb(a);
        });
        var g = 0;
        return b.codecs.forEach(function(a) {
            a.maxptime > g && (g = a.maxptime);
        }), g > 0 && (f += 'a=maxptime:' + g + '\r\n'), f += 'a=rtcp-mux\r\n', b.headerExtensions && b.headerExtensions.forEach(function(a) {
            f += e.writeExtmap(a);
        }), f;
    }, e.parseRtpEncodingParameters = function(a) {
        var f, g = [],
            h = e.parseRtpParameters(a),
            i = -1 !== h.fecMechanisms.indexOf('RED'),
            j = -1 !== h.fecMechanisms.indexOf('ULPFEC'),
            k = e.matchPrefix(a, 'a=ssrc:').map(function(a) {
                return e.parseSsrcMedia(a);
            }).filter(function(a) {
                return 'cname' === a.attribute;
            }),
            l = k.length > 0 && k[0].ssrc,
            m = e.matchPrefix(a, 'a=ssrc-group:FID').map(function(a) {
                return a.substr(17).split(' ').map(function(a) {
                    return parseInt(a, 10);
                });
            });
        m.length > 0 && m[0].length > 1 && m[0][0] === l && (f = m[0][1]), h.codecs.forEach(function(a) {
            if ('RTX' === a.name.toUpperCase() && a.parameters.apt) {
                var n = {
                    ssrc: l,
                    codecPayloadType: parseInt(a.parameters.apt, 10)
                };
                l && f && (n.rtx = {
                    ssrc: f
                }), g.push(n), i && ((n = JSON.parse(JSON.stringify(n))).fec = {
                    ssrc: l,
                    mechanism: j ? 'red+ulpfec' : 'red'
                }, g.push(n));
            }
        }), 0 === g.length && l && g.push({
            ssrc: l
        });
        var n = e.matchPrefix(a, 'b=');
        return n.length && (n = 0 === n[0].indexOf('b=TIAS:') ? parseInt(n[0].substr(7), 10) : 0 === n[0].indexOf('b=AS:') ? 950 * parseInt(n[0].substr(5), 10) - 16000 : void 0, g.forEach(function(a) {
            a.maxBitrate = n;
        })), g;
    }, e.parseRtcpParameters = function(a) {
        var f = {},
            g = e.matchPrefix(a, 'a=ssrc:').map(function(a) {
                return e.parseSsrcMedia(a);
            }).filter(function(a) {
                return 'cname' === a.attribute;
            })[0];
        g && (f.cname = g.value, f.ssrc = g.ssrc);
        var h = e.matchPrefix(a, 'a=rtcp-rsize');
        f.reducedSize = h.length > 0, f.compound = 0 === h.length;
        var i = e.matchPrefix(a, 'a=rtcp-mux');
        return f.mux = i.length > 0, f;
    }, e.parseMsid = function(a) {
        var f, g = e.matchPrefix(a, 'a=msid:');
        if (1 === g.length)
            return {
                stream: (f = g[0].substr(7).split(' '))[0],
                track: f[1]
            };
        var h = e.matchPrefix(a, 'a=ssrc:').map(function(a) {
            return e.parseSsrcMedia(a);
        }).filter(function(a) {
            return 'msid' === a.attribute;
        });
        return h.length > 0 ? {
            stream: (f = h[0].value.split(' '))[0],
            track: f[1]
        } : void 0;
    }, e.parseSctpDescription = function(a) {
        var f, g = e.parseMLine(a),
            h = e.matchPrefix(a, 'a=max-message-size:');
        h.length > 0 && (f = parseInt(h[0].substr(19), 10)), isNaN(f) && (f = 65536);
        var i = e.matchPrefix(a, 'a=sctp-port:');
        if (i.length > 0)
            return {
                port: parseInt(i[0].substr(12), 10),
                protocol: g.fmt,
                maxMessageSize: f
            };
        if (e.matchPrefix(a, 'a=sctpmap:').length > 0) {
            var j = e.matchPrefix(a, 'a=sctpmap:')[0].substr(10).split(' ');
            return {
                port: parseInt(j[0], 10),
                protocol: j[1],
                maxMessageSize: f
            };
        }
    }, e.writeSctpDescription = function(a, b) {
        var f = [];
        return f = 'DTLS/SCTP' !== a.protocol ? [
            'm=' + a.kind + ' 9 ' + a.protocol + ' ' + b.protocol + '\r\n',
            'c=IN IP4 0.0.0.0\r\n',
            'a=sctp-port:' + b.port + '\r\n'
        ] : [
            'm=' + a.kind + ' 9 ' + a.protocol + ' ' + b.port + '\r\n',
            'c=IN IP4 0.0.0.0\r\n',
            'a=sctpmap:' + b.port + ' ' + b.protocol + ' 65535\r\n'
        ], void 0 !== b.maxMessageSize && f.push('a=max-message-size:' + b.maxMessageSize + '\r\n'), f.join('');
    }, e.generateSessionId = function() {
        return Math.random().toString().substr(2, 21);
    }, e.writeSessionBoilerplate = function(a, b, d) {
        var f = void 0 !== b ? b : 2;
        return 'v=0\r\no=' + (d || 'thisisadapterortc') + ' ' + (a || e.generateSessionId()) + ' ' + f + ' IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n';
    }, e.writeMediaSection = function(a, b, d, g) {
        var f = e.writeRtpDescription(a.kind, b);
        if (f += e.writeIceParameters(a.iceGatherer.getLocalParameters()), f += e.writeDtlsParameters(a.dtlsTransport.getLocalParameters(), 'offer' === d ? 'actpass' : 'active'), f += 'a=mid:' + a.mid + '\r\n', a.direction ? f += 'a=' + a.direction + '\r\n' : a.rtpSender && a.rtpReceiver ? f += 'a=sendrecv\r\n' : a.rtpSender ? f += 'a=sendonly\r\n' : a.rtpReceiver ? f += 'a=recvonly\r\n' : f += 'a=inactive\r\n', a.rtpSender) {
            var g = 'msid:' + g.id + ' ' + a.rtpSender.track.id + '\r\n';
            f += 'a=' + g, f += 'a=ssrc:' + a.sendEncodingParameters[0].ssrc + ' ' + g, a.sendEncodingParameters[0].rtx && (f += 'a=ssrc:' + a.sendEncodingParameters[0].rtx.ssrc + ' ' + g, f += 'a=ssrc-group:FID ' + a.sendEncodingParameters[0].ssrc + ' ' + a.sendEncodingParameters[0].rtx.ssrc + '\r\n');
        }
        return f += 'a=ssrc:' + a.sendEncodingParameters[0].ssrc + ' cname:' + e.localCName + '\r\n', a.rtpSender && a.sendEncodingParameters[0].rtx && (f += 'a=ssrc:' + a.sendEncodingParameters[0].rtx.ssrc + ' cname:' + e.localCName + '\r\n'), f;
    }, e.getDirection = function(a, b) {
        for (var f = e.splitLines(a), g = 0; g < f.length; g++)
            switch (f[g]) {
                case 'a=sendrecv':
                case 'a=sendonly':
                case 'a=recvonly':
                case 'a=inactive':
                    return f[g].substr(2);
            }
        return b ? e.getDirection(b) : 'sendrecv';
    }, e.getKind = function(a) {
        return e.splitLines(a)[0].split(' ')[0].substr(2);
    }, e.isRejected = function(a) {
        return '0' === a.split(' ', 2)[1];
    }, e.parseMLine = function(a) {
        var f = e.splitLines(a)[0].substr(2).split(' ');
        return {
            kind: f[0],
            port: parseInt(f[1], 10),
            protocol: f[2],
            fmt: f.slice(3).join(' ')
        };
    }, e.parseOLine = function(a) {
        var f = e.matchPrefix(a, 'o=')[0].substr(2).split(' ');
        return {
            username: f[0],
            sessionId: f[1],
            sessionVersion: parseInt(f[2], 10),
            netType: f[3],
            addressType: f[4],
            address: f[5]
        };
    }, e.isValidSDP = function(a) {
        if ('string' != typeof a || 0 === a.length)
            return !1;
        for (var f = e.splitLines(a), g = 0; g < f.length; g++)
            if (f[g].length < 2 || '=' !== f[g].charAt(1))
                return !1;
        return !0;
    }, a.exports = e;
}), d.register('waycf', function(a, c) {
    function e(a) {
        const f = a && a.navigator,
            g = f.mediaDevices.getUserMedia.bind(f.mediaDevices);
        f.mediaDevices.getUserMedia = function(a) {
            return g(a).catch(a => Promise.reject(function(a) {
                return {
                    name: {
                        PermissionDeniedError: 'NotAllowedError'
                    } [a.name] || a.name,
                    message: a.message,
                    constraint: a.constraint,
                    toString() {
                        return this.name;
                    }
                };
            }(a)));
        };
    }
    b(a.exports, 'shimGetUserMedia', function() {
        return e;
    });
}), d.register('xboIa', function(a, c) {
    function e(a) {
        'getDisplayMedia' in a.navigator && a.navigator.mediaDevices && (a.navigator.mediaDevices && 'getDisplayMedia' in a.navigator.mediaDevices || (a.navigator.mediaDevices.getDisplayMedia = a.navigator.getDisplayMedia.bind(a.navigator)));
    }
    b(a.exports, 'shimGetDisplayMedia', function() {
        return e;
    });
}), d.register('SL7tz', function(a, c) {
    b(a.exports, 'shimOnTrack', function() {
        return f;
    }), b(a.exports, 'shimPeerConnection', function() {
        return g;
    }), b(a.exports, 'shimSenderGetStats', function() {
        return h;
    }), b(a.exports, 'shimReceiverGetStats', function() {
        return i;
    }), b(a.exports, 'shimRemoveStream', function() {
        return j;
    }), b(a.exports, 'shimRTCDataChannel', function() {
        return k;
    }), b(a.exports, 'shimAddTransceiver', function() {
        return l;
    }), b(a.exports, 'shimGetParameters', function() {
        return m;
    }), b(a.exports, 'shimCreateOffer', function() {
        return n;
    }), b(a.exports, 'shimCreateAnswer', function() {
        return o;
    }), b(a.exports, 'shimGetUserMedia', function() {
        return d('ATe7G').shimGetUserMedia;
    }), b(a.exports, 'shimGetDisplayMedia', function() {
        return d('J/PW3').shimGetDisplayMedia;
    });
    var e = d('ieO59');
    d('ATe7G'), d('J/PW3');

    function f(a) {
        'object' == typeof a && a.RTCTrackEvent && 'receiver' in a.RTCTrackEvent.prototype && !('transceiver' in a.RTCTrackEvent.prototype) && Object.defineProperty(a.RTCTrackEvent.prototype, 'transceiver', {
            get() {
                return {
                    receiver: this.receiver
                };
            }
        });
    }

    function g(a) {
        const h = e.detectBrowser(a);
        if ('object' != typeof a || !a.RTCPeerConnection && !a.mozRTCPeerConnection)
            return;
        if (!a.RTCPeerConnection && a.mozRTCPeerConnection && (a.RTCPeerConnection = a.mozRTCPeerConnection), h.version < 53 && [
                'setLocalDescription',
                'setRemoteDescription',
                'addIceCandidate'
            ].forEach(function(h) {
                const i = a.RTCPeerConnection.prototype[h],
                    j = {
                        [h]() {
                            return n[0] = new('addIceCandidate' === h ? a.RTCIceCandidate : a.RTCSessionDescription)(n[0]), i.apply(this, n);
                        }
                    };
                a.RTCPeerConnection.prototype[h] = j[h];
            }), h.version < 68) {
            const i = a.RTCPeerConnection.prototype.addIceCandidate;
            a.RTCPeerConnection.prototype.addIceCandidate = function() {
                return n[0] ? n[0] && '' === n[0].candidate ? Promise.resolve() : i.apply(this, n) : (n[1] && n[1].apply(null), Promise.resolve());
            };
        }
        const i = {
                inboundrtp: 'inbound-rtp',
                outboundrtp: 'outbound-rtp',
                candidatepair: 'candidate-pair',
                localcandidate: 'local-candidate',
                remotecandidate: 'remote-candidate'
            },
            j = a.RTCPeerConnection.prototype.getStats;
        a.RTCPeerConnection.prototype.getStats = function() {
            const [k, l, m] = n;
            return j.apply(this, [k || null]).then(k => {
                if (h.version < 53 && !l)
                    try {
                        k.forEach(k => {
                            k.type = i[k.type] || k.type;
                        });
                    } catch (h) {
                        if ('TypeError' !== h.name)
                            throw h;
                        k.forEach((h, j) => {
                            k.set(j, Object.assign({}, h, {
                                type: i[h.type] || h.type
                            }));
                        });
                    }
                return k;
            }).then(l, m);
        };
    }

    function h(a) {
        if ('object' != typeof a || !a.RTCPeerConnection || !a.RTCRtpSender)
            return;
        if (a.RTCRtpSender && 'getStats' in a.RTCRtpSender.prototype)
            return;
        const i = a.RTCPeerConnection.prototype.getSenders;
        i && (a.RTCPeerConnection.prototype.getSenders = function() {
            const j = i.apply(this, []);
            return j.forEach(j => j._pc = this), j;
        });
        const j = a.RTCPeerConnection.prototype.addTrack;
        j && (a.RTCPeerConnection.prototype.addTrack = function() {
            const k = j.apply(this, p);
            return k._pc = this, k;
        }), a.RTCRtpSender.prototype.getStats = function() {
            return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
        };
    }

    function i(a) {
        if ('object' != typeof a || !a.RTCPeerConnection || !a.RTCRtpSender)
            return;
        if (a.RTCRtpSender && 'getStats' in a.RTCRtpReceiver.prototype)
            return;
        const j = a.RTCPeerConnection.prototype.getReceivers;
        j && (a.RTCPeerConnection.prototype.getReceivers = function() {
            const k = j.apply(this, []);
            return k.forEach(k => k._pc = this), k;
        }), e.wrapPeerConnectionEvent(a, 'track', a => (a.receiver._pc = a.srcElement, a)), a.RTCRtpReceiver.prototype.getStats = function() {
            return this._pc.getStats(this.track);
        };
    }

    function j(a) {
        a.RTCPeerConnection && !('removeStream' in a.RTCPeerConnection.prototype) && (a.RTCPeerConnection.prototype.removeStream = function(a) {
            e.deprecated('removeStream', 'removeTrack'), this.getSenders().forEach(b => {
                b.track && a.getTracks().includes(b.track) && this.removeTrack(b);
            });
        });
    }

    function k(a) {
        a.DataChannel && !a.RTCDataChannel && (a.RTCDataChannel = a.DataChannel);
    }

    function l(a) {
        if ('object' != typeof a || !a.RTCPeerConnection)
            return;
        const m = a.RTCPeerConnection.prototype.addTransceiver;
        m && (a.RTCPeerConnection.prototype.addTransceiver = function() {
            this.setParametersPromises = [];
            const n = p[1],
                o = n && 'sendEncodings' in n;
            o && n.sendEncodings.forEach(n => {
                if ('rid' in n) {
                    if (!/^[a-z0-9]{0,16}$/i.test(n.rid))
                        throw new TypeError('Invalid RID value provided.');
                }
                if ('scaleResolutionDownBy' in n && !(parseFloat(n.scaleResolutionDownBy) >= 1))
                    throw new RangeError('scale_resolution_down_by must be >= 1.0');
                if ('maxFramerate' in n && !(parseFloat(n.maxFramerate) >= 0))
                    throw new RangeError('max_framerate must be >= 0.0');
            });
            const p = m.apply(this, p);
            if (o) {
                const {
                    sender: q
                } = r, s = q.getParameters();
                (!('encodings' in s) || 1 === s.encodings.length && 0 === Object.keys(s.encodings[0]).length) && (s.encodings = n.sendEncodings, q.sendEncodings = n.sendEncodings, this.setParametersPromises.push(q.setParameters(s).then(() => {
                    delete q.sendEncodings;
                }).catch(() => {
                    delete q.sendEncodings;
                })));
            }
            return p;
        });
    }

    function m(a) {
        if ('object' != typeof a || !a.RTCRtpSender)
            return;
        const n = a.RTCRtpSender.prototype.getParameters;
        n && (a.RTCRtpSender.prototype.getParameters = function() {
            const o = n.apply(this, p);
            return 'encodings' in o || (o.encodings = [].concat(this.sendEncodings || [{}])), o;
        });
    }

    function n(a) {
        if ('object' != typeof a || !a.RTCPeerConnection)
            return;
        const o = a.RTCPeerConnection.prototype.createOffer;
        a.RTCPeerConnection.prototype.createOffer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => o.apply(this, p)).finally(() => {
                this.setParametersPromises = [];
            }) : o.apply(this, p);
        };
    }

    function o(a) {
        if ('object' != typeof a || !a.RTCPeerConnection)
            return;
        const p = a.RTCPeerConnection.prototype.createAnswer;
        a.RTCPeerConnection.prototype.createAnswer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => p.apply(this, p)).finally(() => {
                this.setParametersPromises = [];
            }) : p.apply(this, p);
        };
    }
}), d.register('ATe7G', function(a, c) {
    b(a.exports, 'shimGetUserMedia', function() {
        return f;
    });
    var e = d('ieO59');

    function f(a) {
        const g = e.detectBrowser(a),
            h = a && a.navigator,
            i = a && a.MediaStreamTrack;
        if (h.getUserMedia = function(a, g, i) {
                e.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia'), h.mediaDevices.getUserMedia(a).then(g, i);
            }, !(g.version > 55 && 'autoGainControl' in h.mediaDevices.getSupportedConstraints())) {
            const j = function(j, g, h) {
                    g in j && !(h in j) && (j[h] = j[g], delete j[g]);
                },
                k = h.mediaDevices.getUserMedia.bind(h.mediaDevices);
            if (h.mediaDevices.getUserMedia = function(h) {
                    return 'object' == typeof h && 'object' == typeof h.audio && (h = JSON.parse(JSON.stringify(h)), j(h.audio, 'autoGainControl', 'mozAutoGainControl'), j(h.audio, 'noiseSuppression', 'mozNoiseSuppression')), k(h);
                }, i && i.prototype.getSettings) {
                const l = i.prototype.getSettings;
                i.prototype.getSettings = function() {
                    const m = l.apply(this, p);
                    return j(m, 'mozAutoGainControl', 'autoGainControl'), j(m, 'mozNoiseSuppression', 'noiseSuppression'), m;
                };
            }
            if (i && i.prototype.applyConstraints) {
                const l = i.prototype.applyConstraints;
                i.prototype.applyConstraints = function(h) {
                    return 'audio' === this.kind && 'object' == typeof h && (h = JSON.parse(JSON.stringify(h)), j(h, 'autoGainControl', 'mozAutoGainControl'), j(h, 'noiseSuppression', 'mozNoiseSuppression')), l.apply(this, [h]);
                };
            }
        }
    }
}), d.register('J/PW3', function(a, c) {
    function e(a, b) {
        a.navigator.mediaDevices && 'getDisplayMedia' in a.navigator.mediaDevices || a.navigator.mediaDevices && (a.navigator.mediaDevices.getDisplayMedia = function(c) {
            if (!c || !c.video) {
                const f = new DOMException('getDisplayMedia without video constraints is undefined');
                return f.name = 'NotFoundError', f.code = 8, Promise.reject(f);
            }
            return !0 === c.video ? c.video = {
                mediaSource: b
            } : c.video.mediaSource = b, a.navigator.mediaDevices.getUserMedia(c);
        });
    }
    b(a.exports, 'shimGetDisplayMedia', function() {
        return e;
    });
}), d.register('1lFYy', function(a, c) {
    b(a.exports, 'shimLocalStreamsAPI', function() {
        return f;
    }), b(a.exports, 'shimRemoteStreamsAPI', function() {
        return g;
    }), b(a.exports, 'shimCallbacksAPI', function() {
        return h;
    }), b(a.exports, 'shimGetUserMedia', function() {
        return i;
    }), b(a.exports, 'shimConstraints', function() {
        return j;
    }), b(a.exports, 'shimRTCIceServerUrls', function() {
        return k;
    }), b(a.exports, 'shimTrackEventTransceiver', function() {
        return l;
    }), b(a.exports, 'shimCreateOfferLegacy', function() {
        return m;
    }), b(a.exports, 'shimAudioContext', function() {
        return n;
    });
    var e = d('ieO59');

    function f(a) {
        if ('object' == typeof a && a.RTCPeerConnection) {
            if ('getLocalStreams' in a.RTCPeerConnection.prototype || (a.RTCPeerConnection.prototype.getLocalStreams = function() {
                    return this._localStreams || (this._localStreams = []), this._localStreams;
                }), !('addStream' in a.RTCPeerConnection.prototype)) {
                const g = a.RTCPeerConnection.prototype.addTrack;
                a.RTCPeerConnection.prototype.addStream = function(a) {
                    this._localStreams || (this._localStreams = []), this._localStreams.includes(a) || this._localStreams.push(a), a.getAudioTracks().forEach(c => g.call(this, c, a)), a.getVideoTracks().forEach(c => g.call(this, c, a));
                }, a.RTCPeerConnection.prototype.addTrack = function(a, ...c) {
                    return c && c.forEach(a => {
                        this._localStreams ? this._localStreams.includes(a) || this._localStreams.push(a) : this._localStreams = [a];
                    }), g.apply(this, p);
                };
            }
            'removeStream' in a.RTCPeerConnection.prototype || (a.RTCPeerConnection.prototype.removeStream = function(a) {
                this._localStreams || (this._localStreams = []);
                const g = this._localStreams.indexOf(a);
                if (-1 === g)
                    return;
                this._localStreams.splice(g, 1);
                const h = a.getTracks();
                this.getSenders().forEach(a => {
                    h.includes(a.track) && this.removeTrack(a);
                });
            });
        }
    }

    function g(a) {
        if ('object' == typeof a && a.RTCPeerConnection && ('getRemoteStreams' in a.RTCPeerConnection.prototype || (a.RTCPeerConnection.prototype.getRemoteStreams = function() {
                return this._remoteStreams ? this._remoteStreams : [];
            }), !('onaddstream' in a.RTCPeerConnection.prototype))) {
            Object.defineProperty(a.RTCPeerConnection.prototype, 'onaddstream', {
                get() {
                    return this._onaddstream;
                },
                set(a) {
                    this._onaddstream && (this.removeEventListener('addstream', this._onaddstream), this.removeEventListener('track', this._onaddstreampoly)), this.addEventListener('addstream', this._onaddstream = a), this.addEventListener('track', this._onaddstreampoly = a => {
                        a.streams.forEach(a => {
                            if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(a))
                                return;
                            this._remoteStreams.push(a);
                            const h = new Event('addstream');
                            h.stream = a, this.dispatchEvent(h);
                        });
                    });
                }
            });
            const h = a.RTCPeerConnection.prototype.setRemoteDescription;
            a.RTCPeerConnection.prototype.setRemoteDescription = function() {
                const i = this;
                return this._onaddstreampoly || this.addEventListener('track', this._onaddstreampoly = function(h) {
                    h.streams.forEach(h => {
                        if (i._remoteStreams || (i._remoteStreams = []), i._remoteStreams.indexOf(h) >= 0)
                            return;
                        i._remoteStreams.push(h);
                        const j = new Event('addstream');
                        j.stream = h, i.dispatchEvent(j);
                    });
                }), h.apply(i, p);
            };
        }
    }

    function h(a) {
        if ('object' != typeof a || !a.RTCPeerConnection)
            return;
        const i = a.RTCPeerConnection.prototype,
            j = i.createOffer,
            k = i.createAnswer,
            l = i.setLocalDescription,
            m = i.setRemoteDescription,
            n = i.addIceCandidate;
        i.createOffer = function(a, i) {
            const o = p.length >= 2 ? p[2] : p[0],
                p = j.apply(this, [o]);
            return i ? (p.then(a, i), Promise.resolve()) : p;
        }, i.createAnswer = function(a, i) {
            const o = p.length >= 2 ? p[2] : p[0],
                p = k.apply(this, [o]);
            return i ? (p.then(a, i), Promise.resolve()) : p;
        };
        let o = function(a, i, j) {
            const p = l.apply(this, [a]);
            return j ? (p.then(i, j), Promise.resolve()) : p;
        };
        i.setLocalDescription = o, o = function(a, i, j) {
            const p = m.apply(this, [a]);
            return j ? (p.then(i, j), Promise.resolve()) : p;
        }, i.setRemoteDescription = o, o = function(a, i, j) {
            const p = n.apply(this, [a]);
            return j ? (p.then(i, j), Promise.resolve()) : p;
        }, i.addIceCandidate = o;
    }

    function i(a) {
        const j = a && a.navigator;
        if (j.mediaDevices && j.mediaDevices.getUserMedia) {
            const k = j.mediaDevices,
                l = k.getUserMedia.bind(k);
            j.mediaDevices.getUserMedia = k => l(j(k));
        }!j.getUserMedia && j.mediaDevices && j.mediaDevices.getUserMedia && (j.getUserMedia = function(a, c, d) {
            j.mediaDevices.getUserMedia(a).then(c, d);
        }.bind(j));
    }

    function j(a) {
        return a && void 0 !== a.video ? Object.assign({}, a, {
            video: e.compactObject(a.video)
        }) : a;
    }

    function k(a) {
        if (!a.RTCPeerConnection)
            return;
        const l = a.RTCPeerConnection;
        a.RTCPeerConnection = function(a, c) {
            if (a && a.iceServers) {
                const m = [];
                for (let n = 0; n < a.iceServers.length; n++) {
                    let o = a.iceServers[n];
                    !o.hasOwnProperty('urls') && o.hasOwnProperty('url') ? (e.deprecated('RTCIceServer.url', 'RTCIceServer.urls'), o = JSON.parse(JSON.stringify(o)), o.urls = o.url, delete o.url, m.push(o)) : m.push(a.iceServers[n]);
                }
                a.iceServers = m;
            }
            return new l(a, c);
        }, a.RTCPeerConnection.prototype = l.prototype, 'generateCertificate' in l && Object.defineProperty(a.RTCPeerConnection, 'generateCertificate', {
            get: () => l.generateCertificate
        });
    }

    function l(a) {
        'object' == typeof a && a.RTCTrackEvent && 'receiver' in a.RTCTrackEvent.prototype && !('transceiver' in a.RTCTrackEvent.prototype) && Object.defineProperty(a.RTCTrackEvent.prototype, 'transceiver', {
            get() {
                return {
                    receiver: this.receiver
                };
            }
        });
    }

    function m(a) {
        const n = a.RTCPeerConnection.prototype.createOffer;
        a.RTCPeerConnection.prototype.createOffer = function(a) {
            if (a) {
                void 0 !== a.offerToReceiveAudio && (a.offerToReceiveAudio = !!a.offerToReceiveAudio);
                const o = this.getTransceivers().find(a => 'audio' === a.receiver.track.kind);
                !1 === a.offerToReceiveAudio && o ? 'sendrecv' === o.direction ? o.setDirection ? o.setDirection('sendonly') : o.direction = 'sendonly' : 'recvonly' === o.direction && (o.setDirection ? o.setDirection('inactive') : o.direction = 'inactive') : !0 !== a.offerToReceiveAudio || o || this.addTransceiver('audio'), void 0 !== a.offerToReceiveVideo && (a.offerToReceiveVideo = !!a.offerToReceiveVideo);
                const p = this.getTransceivers().find(a => 'video' === a.receiver.track.kind);
                !1 === a.offerToReceiveVideo && p ? 'sendrecv' === p.direction ? p.setDirection ? p.setDirection('sendonly') : p.direction = 'sendonly' : 'recvonly' === p.direction && (p.setDirection ? p.setDirection('inactive') : p.direction = 'inactive') : !0 !== a.offerToReceiveVideo || p || this.addTransceiver('video');
            }
            return n.apply(this, p);
        };
    }

    function n(a) {
        'object' != typeof a || a.AudioContext || (a.AudioContext = a.webkitAudioContext);
    }
}), d.register('kuebP', function(a, j) {
    b(a.exports, 'shimRTCIceCandidate', function() {
        return g;
    }), b(a.exports, 'shimMaxMessageSize', function() {
        return h;
    }), b(a.exports, 'shimSendThrowTypeError', function() {
        return n;
    }), b(a.exports, 'shimConnectionState', function() {
        return j;
    }), b(a.exports, 'removeAllowExtmapMixed', function() {
        return k;
    });
    var e = d('taIQS'),
        f = d('ieO59');

    function g(a) {
        if (!a.RTCIceCandidate || a.RTCIceCandidate && 'foundation' in a.RTCIceCandidate.prototype)
            return;
        const h = a.RTCIceCandidate;
        a.RTCIceCandidate = function(a) {
            if ('object' == typeof a && a.candidate && 0 === a.candidate.indexOf('a=') && ((a = JSON.parse(JSON.stringify(a))).candidate = a.candidate.substr(2)), a.candidate && a.candidate.length) {
                const i = new h(a),
                    j = c(e).parseCandidate(a.candidate),
                    k = Object.assign(i, j);
                return k.toJSON = function() {
                    return {
                        candidate: k.candidate,
                        sdpMid: k.sdpMid,
                        sdpMLineIndex: k.sdpMLineIndex,
                        usernameFragment: k.usernameFragment
                    };
                }, k;
            }
            return new h(a);
        }, a.RTCIceCandidate.prototype = h.prototype, f.wrapPeerConnectionEvent(a, 'icecandidate', h => (h.candidate && Object.defineProperty(h, 'candidate', {
            value: new a.RTCIceCandidate(h.candidate),
            writable: 'false'
        }), h));
    }

    function h(a) {
        if (!a.RTCPeerConnection)
            return;
        const i = f.detectBrowser(a);
        'sctp' in a.RTCPeerConnection.prototype || Object.defineProperty(a.RTCPeerConnection.prototype, 'sctp', {
            get() {
                return void 0 === this._sctp ? null : this._sctp;
            }
        });
        const j = function(a) {
                if (!a || !a.sdp)
                    return !1;
                const k = c(e).splitSections(a.sdp);
                return k.shift(), k.some(a => {
                    const l = c(e).parseMLine(a);
                    return l && 'application' === l.kind && -1 !== l.protocol.indexOf('SCTP');
                });
            },
            k = function(a) {
                const l = a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                if (null === l || l.length < 2)
                    return -1;
                const m = parseInt(l[1], 10);
                return m != m ? -1 : m;
            },
            l = function(a) {
                let m = 65536;
                return 'firefox' === i.browser && (m = i.version < 57 ? -1 === a ? 16384 : 2147483637 : i.version < 60 ? 57 === i.version ? 65535 : 65536 : 2147483637), m;
            },
            m = function(a, j) {
                let n = 65536;
                'firefox' === i.browser && 57 === i.version && (n = 65535);
                const o = c(e).matchPrefix(a.sdp, 'a=max-message-size:');
                return o.length > 0 ? n = parseInt(o[0].substr(19), 10) : 'firefox' === i.browser && -1 !== j && (n = 2147483637), n;
            },
            n = a.RTCPeerConnection.prototype.setRemoteDescription;
        a.RTCPeerConnection.prototype.setRemoteDescription = function() {
            if (this._sctp = null, 'chrome' === i.browser && i.version >= 76) {
                const {
                    sdpSemantics: o
                } = this.getConfiguration();
                'plan-b' === o && Object.defineProperty(this, 'sctp', {
                    get() {
                        return void 0 === this._sctp ? null : this._sctp;
                    },
                    enumerable: !0,
                    configurable: !0
                });
            }
            if (j(p[0])) {
                const o = k(p[0]),
                    p = l(o),
                    q = m(p[0], o);
                let r;
                r = 0 === p && 0 === q ? Number.POSITIVE_INFINITY : 0 === p || 0 === q ? Math.max(p, q) : Math.min(p, q);
                const s = {};
                Object.defineProperty(s, 'maxMessageSize', {
                    get: () => r
                }), this._sctp = s;
            }
            return n.apply(this, p);
        };
    }

    function i(a) {
        if (!a.RTCPeerConnection || !('createDataChannel' in a.RTCPeerConnection.prototype))
            return;

        function j(a, j) {
            const k = a.send;
            a.send = function() {
                const l = p[0],
                    m = l.length || l.size || l.byteLength;
                if ('open' === a.readyState && j.sctp && m > j.sctp.maxMessageSize)
                    throw new TypeError('Message too large (can send a maximum of ' + j.sctp.maxMessageSize + ' bytes)');
                return k.apply(a, p);
            };
        }
        const k = a.RTCPeerConnection.prototype.createDataChannel;
        a.RTCPeerConnection.prototype.createDataChannel = function() {
            const l = k.apply(this, p);
            return j(l, this), l;
        }, f.wrapPeerConnectionEvent(a, 'datachannel', a => (j(a.channel, a.target), a));
    }

    function j(a) {
        if (!a.RTCPeerConnection || 'connectionState' in a.RTCPeerConnection.prototype)
            return;
        const k = a.RTCPeerConnection.prototype;
        Object.defineProperty(k, 'connectionState', {
            get() {
                return {
                    completed: 'connected',
                    checking: 'connecting'
                } [this.iceConnectionState] || this.iceConnectionState;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(k, 'onconnectionstatechange', {
            get() {
                return this._onconnectionstatechange || null;
            },
            set(a) {
                this._onconnectionstatechange && (this.removeEventListener('connectionstatechange', this._onconnectionstatechange), delete this._onconnectionstatechange), a && this.addEventListener('connectionstatechange', this._onconnectionstatechange = a);
            },
            enumerable: !0,
            configurable: !0
        }), [
            'setLocalDescription',
            'setRemoteDescription'
        ].forEach(a => {
            const l = k[a];
            k[a] = function() {
                return this._connectionstatechangepoly || (this._connectionstatechangepoly = a => {
                    const m = a.target;
                    if (m._lastConnectionState !== m.connectionState) {
                        m._lastConnectionState = m.connectionState;
                        const n = new Event('connectionstatechange', a);
                        m.dispatchEvent(n);
                    }
                    return a;
                }, this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly)), l.apply(this, p);
            };
        });
    }

    function k(a) {
        if (!a.RTCPeerConnection)
            return;
        const l = f.detectBrowser(a);
        if ('chrome' === l.browser && l.version >= 71)
            return;
        if ('safari' === l.browser && l.version >= 605)
            return;
        const m = a.RTCPeerConnection.prototype.setRemoteDescription;
        a.RTCPeerConnection.prototype.setRemoteDescription = function(a) {
            return a && a.sdp && -1 !== a.sdp.indexOf('\na=extmap-allow-mixed') && (a.sdp = a.sdp.split('\n').filter(a => 'a=extmap-allow-mixed' !== a.trim()).join('\n')), m.apply(this, p);
        };
    }
}), d.register('rIUMG', function(a, c) {
    b(a.exports, 'Content', function() {
        return u;
    }), b(a.exports, 'default', function() {
        return s;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('MoXej'),
        l = d('6N5M/'),
        m = d('ngoNz'),
        n = d('lf3yz'),
        o = d('cJ4UC'),
        p = d('M8YtH');
    let q, r = class extends i.Component {
        render() {
            const {
                upgrades: {
                    lavaUpgrades: s
                }
            } = this.props;
            return (0, g.jsx)(k.Container, {
                style: {
                    display: 'flex',
                    justifyContent: 'center'
                },
                children: (0, g.jsxs)(u, {
                    children: [
                        (0, g.jsx)(l.default, {}),
                        s.map(s => (0, g.jsx)(m.default, {
                            icon: s.icon,
                            background: s.background,
                            name: s.name,
                            description: s.description,
                            cost: s.price,
                            canAfford: this.canAffordUpgrade(s.id),
                            onClick: () => this.purchaseUpgrade(s.id)
                        }, `lava-upgrade-${ s.id }`)),
                        (0, g.jsx)('div', {
                            style: {
                                height: 20,
                                width: '100%'
                            }
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'canAffordUpgrade', a => {
                const s = this.props.upgrades.lavaUpgrades.find(s => s.id === a);
                return !!s && this.props.balance.balance >= s.price;
            }), (0, e.default)(this, 'purchaseUpgrade', a => {
                this.canAffordUpgrade(a) && ((0, n.send)(o.default.lavaPurchasePiece, {
                    type: a
                }), (0, n.changeRoute)(p.default.questions));
            });
        }
    };
    r = (0, f.__decorate)([
        (0, h.inject)('upgrades', 'balance'),
        h.observer
    ], r);
    var s = t;
    const u = j.default.div(q || (q = (a => a)`
  width: 100%;
  max-width: 700px;
`));
}), d.register('6N5M/', function(a, c) {
    b(a.exports, 'default', function() {
        return q;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('VDucS'),
        h = d('G5sHI'),
        i = d('VCvua0'),
        j = d('lf3yz'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('Bhr9a'),
        n = d('ExtIT'),
        o = d('PjB0f');
    let p = class extends l.Component {
        render() {
            return this.props.entities.lava ? (0, f.jsxs)(m.Container, {
                children: [
                    (0, f.jsx)(m.IconContainer, {
                        colors: {
                            text: i.default.White,
                            background: '#009624'
                        },
                        children: (0, f.jsx)(g.default, {
                            name: 'fas fa-wrench fa-flip-horizontal'
                        })
                    }),
                    (0, f.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        },
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    fontWeight: 900,
                                    fontSize: 35,
                                    lineHeight: '35px',
                                    marginTop: 4
                                },
                                children: (0, f.jsx)(h.default, {
                                    text: 'Build'
                                })
                            }),
                            (0, f.jsx)(n.default, {
                                style: {
                                    marginBottom: 15,
                                    marginTop: 18
                                }
                            }),
                            (0, f.jsxs)('div', {
                                style: {
                                    fontSize: 16,
                                    textAlign: 'center'
                                },
                                children: [
                                    (0, f.jsxs)('b', {
                                        children: [
                                            (0, f.jsx)(h.default, {
                                                text: 'Building Height'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, j.numberWithCommas)(this.props.entities.lava.buildHeight),
                                    ' ',
                                    (0, f.jsx)(h.default, {
                                        text: (0, o.plural)('block', this.props.entities.lava.buildHeight)
                                    }),
                                    (0, f.jsx)('br', {}),
                                    (0, f.jsxs)('b', {
                                        children: [
                                            (0, f.jsx)(h.default, {
                                                text: 'Lava Height'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, j.numberWithCommas)(this.props.entities.lava.lavaHeight),
                                    ' ',
                                    (0, f.jsx)(h.default, {
                                        text: (0, o.plural)('block', this.props.entities.lava.lavaHeight)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : null;
        }
    };
    p = (0, e.__decorate)([
        (0, k.inject)('entities'),
        k.observer
    ], p);
    var q = r;
}), d.register('aX6SF', function(a, c) {
    b(a.exports, 'default', function() {
        return y;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('TTKAH'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('ngoNz'),
        l = d('MoXej'),
        m = d('rIUMG'),
        n = d('VCvua0'),
        o = d('SfqXF'),
        p = d('h99Nu'),
        q = d('G5sHI'),
        r = d('lf3yz'),
        s = d('cJ4UC'),
        t = d('M8YtH');
    let u;
    const v = [
        h.ImposterShopItemId.fakeInvestigation,
        h.ImposterShopItemId.investigationRemover,
        h.ImposterShopItemId.privateInvestigation,
        h.ImposterShopItemId.publicInvestigation
    ];
    let w = class extends j.Component {
        render() {
            return (0, g.jsx)(l.Container, {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    background: '#cfd8dc',
                    fontFamily: '\'Space Grotesk\', monospace'
                },
                children: (0, g.jsxs)(m.Content, {
                    children: [
                        (0, g.jsx)(o.default, {}),
                        this.props.imposter.shopItems.map(a => (0, g.jsx)(k.default, {
                            style: {
                                color: n.default.White,
                                background: '#000a12'
                            },
                            icon: a.icon,
                            background: a.background,
                            name: a.name,
                            description: a.description,
                            cost: a.cost,
                            canAfford: this.canPurchaseItem(a.id),
                            aboveNameComponent: this.isItemNotAvailable(a.id) ? (0, g.jsx)(x, {}) : null,
                            onClick: () => this.purchaseItem(a.id)
                        }, `imposter-item-${ a.id }`)),
                        (0, g.jsx)('div', {
                            style: {
                                height: 25
                            }
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'isItemNotAvailable', a => !(0 !== this.props.imposter.investigationsLeft || !v.includes(a)) || !(a !== h.ImposterShopItemId.blendIn || !this.props.imposter.me || !this.props.imposter.me.blendingIn)), (0, e.default)(this, 'canPurchaseItem', a => !this.isItemNotAvailable(a) && this.canAffordItem(a)), (0, e.default)(this, 'canAffordItem', a => {
                const x = this.props.imposter.shopItems.find(x => x.id === a);
                return !!x && this.props.balance.balance >= x.cost;
            }), (0, e.default)(this, 'purchaseItem', a => {
                if (v.includes(a) && a !== h.ImposterShopItemId.investigationRemover || a === h.ImposterShopItemId.donate || a === h.ImposterShopItemId.noteViewer || a === h.ImposterShopItemId.clearListRemover)
                    return this.props.imposter.currentShopItem = a, void(this.props.imposter.currentShopItemModalVisible = !0);
                (0, r.send)(s.default.imposter.purchase, {
                    item: a
                }), a !== h.ImposterShopItemId.meeting && (0, r.changeRoute)(t.default.questions);
            });
        }
    };
    w = (0, f.__decorate)([
        (0, i.inject)('imposter', 'balance'),
        i.observer
    ], w);
    const x = () => (0, g.jsx)(A, {
        children: (0, g.jsx)(q.default, {
            text: 'Not Available'
        })
    });
    var y = z;
    const A = p.default.div(u || (u = (a => a)`
  background: #d32f2f;
  font-size: 14px;
  padding: 3px 11px;
  border-radius: 8px;
  margin-bottom: 2px;
`));
}), d.register('SfqXF', function(a, c) {
    b(a.exports, 'default', function() {
        return q;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('VDucS'),
        h = d('G5sHI'),
        i = d('VCvua0'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('Bhr9a'),
        m = d('ExtIT'),
        n = d('TTKAH'),
        o = d('lf3yz');
    let p = class extends k.Component {
        render() {
            const {
                me: q,
                investigationsLeft: r,
                meetingsLeft: s,
                impostersLeft: t
            } = this.props.imposter;
            if (!q)
                return null;
            const u = q.role === n.PersonRole.imposter;
            return (0, f.jsxs)(l.Container, {
                style: {
                    background: '#263238',
                    color: i.default.White
                },
                children: [
                    (0, f.jsx)(l.IconContainer, {
                        colors: {
                            text: '#ffeb3b',
                            background: '#000a12'
                        },
                        children: (0, f.jsx)(g.default, {
                            name: 'far fa-space-station-moon-alt'
                        })
                    }),
                    (0, f.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        },
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    fontWeight: 900,
                                    fontSize: 35,
                                    lineHeight: '35px',
                                    marginTop: 4
                                },
                                children: (0, f.jsx)(h.default, {
                                    text: 'Mission Control'
                                })
                            }),
                            (0, f.jsx)(m.default, {
                                style: {
                                    marginBottom: 15,
                                    marginTop: 18
                                }
                            }),
                            (0, f.jsxs)('div', {
                                style: {
                                    fontSize: 16,
                                    textAlign: 'center'
                                },
                                children: [
                                    (0, f.jsxs)('b', {
                                        children: [
                                            (0, f.jsx)(h.default, {
                                                text: 'Investigations Left'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, o.numberWithCommas)(r),
                                    (0, f.jsx)('br', {}),
                                    !u && (0, f.jsxs)(f.Fragment, {
                                        children: [
                                            (0, f.jsxs)('b', {
                                                children: [
                                                    (0, f.jsx)(h.default, {
                                                        text: 'Impostors Left'
                                                    }),
                                                    ':'
                                                ]
                                            }),
                                            ' ',
                                            (0, o.numberWithCommas)(t),
                                            (0, f.jsx)('br', {})
                                        ]
                                    }),
                                    (0, f.jsxs)('b', {
                                        children: [
                                            (0, f.jsx)(h.default, {
                                                text: 'Meetings Left'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, o.numberWithCommas)(s)
                                ]
                            })
                        ]
                    })
                ]
            });
        }
    };
    p = (0, e.__decorate)([
        (0, j.inject)('imposter'),
        j.observer
    ], p);
    var q = r;
}), d.register('78M4L', function(a, c) {
    b(a.exports, 'default', function() {
        return s;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('VCvua0'),
        i = d('t8Dt1'),
        j = d('iZ2Xr'),
        k = d('ENrTc'),
        l = d('M8YtH'),
        m = d('lf3yz'),
        n = d('Vlfxs'),
        o = d('uPP4W');
    let p;
    const q = d('h99Nu').default.div(p || (p = (a => a)`
  height: 100%;
  width: 100%;
  background: ${ 0 };
  display: flex;
  align-items: center;
  flex-direction: column;
`), h.default.BackgroundGray);
    let r = class extends o.Component {
        render() {
            const s = this.props.upgrades.upgrades.filter(s => s.name === this.props.upgrades.currentlySelectedUpgrade)[0],
                t = this.props.upgrades.upgradeLevelTabs[(0, m.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)];
            return (0, g.jsxs)(q, {
                children: [
                    (0, g.jsx)(i.default, {
                        onPurchase: this.markAsPurchased
                    }),
                    (0, g.jsx)(k.default, {
                        levels: s.levels,
                        active: t
                    }),
                    (0, g.jsx)(j.default, {
                        open: this.state.purchased,
                        onContinue: this.closeModal
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                purchased: !1
            }), (0, e.default)(this, 'closeModal', a => {
                this.setState({
                    purchased: !1
                }, () => a ? setTimeout(() => (0, m.changeRoute)(l.default.questions), 300) : null);
            }), (0, e.default)(this, 'markAsPurchased', () => this.setState({
                purchased: !0
            }));
        }
    };
    r = (0, f.__decorate)([
        (0, n.inject)('upgrades'),
        n.observer
    ], r);
    var s = t;
}), d.register('t8Dt1', function(a, c) {
    b(a.exports, 'default', function() {
        return E;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('G5sHI'),
        i = d('4JvRz'),
        j = d('VCvua0'),
        k = d('5WRxN'),
        l = d('cJ4UC'),
        m = d('bAH0K'),
        n = d('lf3yz'),
        o = d('Vlfxs'),
        p = d('uPP4W'),
        q = d('h99Nu');
    let r, s, t, u, v, w = a => a;
    const x = '4px',
        y = q.default.div(r || (r = w`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        z = q.default.div(s || (s = w`
  height: 90%;
  max-height: 500px;
  width: 90%;
  max-width: 700px;
  border-radius: ${ 0 };
  box-shadow: ${ 0 };
  background: ${ 0 };
  color: ${ 0 };
`), x, k.default.basic, a => a.theme.question.background, a => a.theme.question.text),
        A = q.default.div(t || (t = w`
  height: 20%;
  border-top-left-radius: ${ 0 };
  border-top-right-radius: ${ 0 };
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`), x, x),
        B = q.default.div(u || (u = w`
  height: 50%;
  width: 100%;
`)),
        C = q.default.div(v || (v = w`
  height: 30%;
  width: 100%;
  background: ${ 0 };
  cursor: ${ 0 };
  color: ${ 0 };
  border-bottom-left-radius: ${ 0 };
  border-bottom-right-radius: ${ 0 };
  transition: background 0.25s;
  &:hover {
    background: ${ 0 };
  }
`), a => a.disabled ? j.default.DisabledGray : 'rgba(255,255,255,0.2)', a => a.disabled ? 'not-allowed' : 'pointer', j.default.White, x, x, a => a.disabled ? j.default.DisabledGray : 'rgba(255,255,255,0.25)');
    let D = class extends p.Component {
        render() {
            const E = this.getBuyDetails();
            return (0, g.jsx)(y, {
                children: (0, g.jsxs)(z, {
                    children: [
                        (0, g.jsx)(A, {
                            children: (0, g.jsx)(i.default, {
                                paddingHorizontal: 30,
                                max: 40,
                                text: (0, g.jsx)(h.default, {
                                    text: this.getTitle()
                                })
                            })
                        }),
                        (0, g.jsx)(B, {
                            children: (0, g.jsx)(i.default, {
                                mode: 'multi',
                                max: 200,
                                text: this.getValue()
                            })
                        }),
                        (0, g.jsx)(C, {
                            onClick: E.onClick,
                            disabled: E.disabled,
                            children: (0, g.jsx)(i.default, {
                                max: 45,
                                paddingHorizontal: 20,
                                paddingVertical: 20,
                                text: E.disabledAllText ? (0, g.jsx)(h.default, {
                                    text: 'Buy for',
                                    suffix: ` ${ E.text }`
                                }) : (0, g.jsx)(h.default, {
                                    text: E.text
                                })
                            })
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'canPurchase', () => this.ownedLevel() < this.currentlySelectedLevel() && this.getPrice() <= this.props.balance.balance), (0, e.default)(this, 'currentlySelectedLevel', () => this.props.upgrades.upgradeLevelTabs[(0, n.upgradeNameToKey)(this.currentUpgrade().name)]), (0, e.default)(this, 'ownedLevel', () => this.props.upgrades.upgradeLevels[(0, n.upgradeNameToKey)(this.currentUpgrade().name)]), (0, e.default)(this, 'currentUpgrade', () => this.props.upgrades.upgrades.filter(a => a.name === this.props.upgrades.currentlySelectedUpgrade)[0]), (0, e.default)(this, 'getTitle', () => {
                const E = this.currentUpgrade();
                return E.name === m.upgradeNames.insurance ? 'Amount Covered' : E.name;
            }), (0, e.default)(this, 'getValue', () => {
                const E = this.currentUpgrade(),
                    F = this.getLevel().value;
                return E.name === m.upgradeNames.insurance ? Math.round(100 * (1 - F)) + '%' : E.name === m.upgradeNames.multiplier ? F + 'x' : (0, n.getMoney)(F * this.props.balance.incomeMultiplier);
            }), (0, e.default)(this, 'getBuyDetails', () => {
                if (this.ownedLevel() >= this.currentlySelectedLevel())
                    return {
                        text: 'Already Owned',
                        disabled: !0,
                        onClick: null
                    };
                const E = this.canPurchase();
                return {
                    text: (0, n.getMoney)(this.getPrice()),
                    disabled: !E,
                    onClick: E ? this.purchaseUpgrade : null,
                    disabledAllText: !0
                };
            }), (0, e.default)(this, 'purchaseUpgrade', () => {
                const E = this.currentUpgrade(),
                    F = this.currentlySelectedLevel();
                (0, n.send)(l.default.upgradePurchased, {
                    upgradeName: E.name,
                    level: F
                }), this.props.onPurchase();
            }), (0, e.default)(this, 'getLevel', () => {
                const E = this.currentlySelectedLevel();
                return this.currentUpgrade().levels.filter((b, c) => c + 1 === E)[0];
            }), (0, e.default)(this, 'getPrice', () => (0, n.getUpgradeCost)(this.getLevel().price));
        }
    };
    D = (0, f.__decorate)([
        (0, o.inject)('upgrades', 'balance'),
        o.observer
    ], D);
    var E = F;
}), d.register('iZ2Xr', function(a, f) {
    b(a.exports, 'confettiConfig', function() {
        return z;
    }), b(a.exports, 'default', function() {
        return G;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('m96/N'),
        i = d('E1Ead'),
        j = d('G5sHI'),
        k = d('VCvua0'),
        l = d('qA0vg'),
        m = d('bAH0K'),
        n = d('UNaEe'),
        o = d('lf3yz'),
        p = d('Vlfxs'),
        q = d('uPP4W'),
        r = d('wiooy2'),
        s = d('h99Nu');
    let t, u, v, w, x, y = a => a;
    const z = {
            angle: 90,
            spread: 67,
            startVelocity: 60,
            elementCount: 50,
            decay: 0.87
        },
        A = s.default.div(t || (t = y`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: ${ 0 };
  display: ${ 0 };
`), a => a.open ? 0 : -1, a => a.visible ? 'flex' : 'none'),
        B = s.default.div(u || (u = y`
  background: ${ 0 };
  font-family: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), k.default.White, l.default.name),
        C = s.default.div(v || (v = y`
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 2.5s;
`)),
        D = s.default.div(w || (w = y`
  font-weight: bold;
  font-size: 45px;
`)),
        E = s.default.div(x || (x = y`
  font-size: 23px;
  text-align: center;
`));
    let F = class extends q.Component {
        componentDidUpdate(a) {
            this.props.open && !a.open && (n.celebrate.play(), setTimeout(() => this.setState({
                showConfetti: !0
            }), 1000));
        }
        componentDidMount() {
            document.addEventListener('keydown', this.handleKeyDown);
        }
        componentWillUnmount() {
            document.removeEventListener('keydown', this.handleKeyDown);
        }
        render() {
            return (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(i.default, {
                        open: this.props.open,
                        close: this.closeWithoutMovingForward,
                        customMaxWidth: '500px',
                        children: (0, g.jsxs)(B, {
                            children: [
                                (0, g.jsx)(C, {
                                    className: 'animated pulse infinite',
                                    children: (0, g.jsx)('img', {
                                        style: {
                                            maxHeight: 150
                                        },
                                        src: (0, o.getAssetPath)('balloons.svg')
                                    })
                                }),
                                (0, g.jsxs)(D, {
                                    children: [
                                        (0, g.jsx)(j.default, {
                                            text: 'Purchased'
                                        }),
                                        '!'
                                    ]
                                }),
                                (0, g.jsx)(E, {
                                    children: (0, g.jsx)(j.default, {
                                        text: this.getDescription()
                                    })
                                }),
                                (0, g.jsx)('div', {
                                    style: {
                                        marginTop: 10
                                    },
                                    children: (0, g.jsx)(h.default, {
                                        onClick: this.closeWithMovingForward,
                                        type: 'primary',
                                        label: (0, g.jsx)(j.default, {
                                            text: 'Continue to Questions'
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    (0, g.jsx)(A, {
                        visible: this.state.showConfetti,
                        open: this.props.open,
                        children: (0, g.jsx)(c(r), {
                            active: this.state.showConfetti,
                            config: z
                        })
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                showConfetti: !1
            }), (0, e.default)(this, 'upgradeName', () => this.props.upgrades.currentlySelectedUpgrade), (0, e.default)(this, 'upgradeDetails', () => {
                const G = this.props.upgrades.upgrades.filter(G => G.name === this.upgradeName())[0];
                let H = 1;
                return {
                    ...G.levels.filter((G, c) => c + 1 === this.props.upgrades.upgradeLevelTabs[(0, o.upgradeNameToKey)(this.upgradeName())] && (H = c + 1, !0))[0],
                    level: H
                };
            }), (0, e.default)(this, 'closeWithMovingForward', () => this.close(!0)), (0, e.default)(this, 'closeWithoutMovingForward', () => this.close(!1)), (0, e.default)(this, 'close', a => {
                this.setState({
                    showConfetti: !1
                }, () => this.props.onContinue(a));
            }), (0, e.default)(this, 'handleKeyDown', ({
                keyCode: G = 0
            }) => {
                13 === G && this.props.open && this.props.onContinue(!0);
            }), (0, e.default)(this, 'getDescription', () => {
                const H = this.upgradeDetails().value,
                    I = this.upgradeName();
                return I === m.upgradeNames.moneyPerQuestion ? `You will now earn/lose ${ (0, o.getMoney)(H * this.props.balance.incomeMultiplier) } per question.` : I === m.upgradeNames.streakBonus ? `You'll now earn an extra ${ (0, o.getMoney)(H * this.props.balance.incomeMultiplier) } for each question you answer correctly in a row.` : I === m.upgradeNames.multiplier ? `Each question's earnings/loss will now be multiplied by ${ (0, o.numberWithCommas)(H) }x.` : I === m.upgradeNames.insurance ? `After answering incorrectly, you will now only have to pay back ${ 100 * H }% of the cost.` : null;
            });
        }
    };
    F = (0, f.__decorate)([
        (0, p.inject)('upgrades', 'balance'),
        p.observer
    ], F);
    var G = H;
}), d.register('wiooy2', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var e, f = function() {
            function g(g, b) {
                for (var h = 0; h < b.length; h++) {
                    var i = b[h];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(g, i.key, i);
                }
            }
            return function(b, e, d) {
                return e && g(b.prototype, e), d && g(b, d), b;
            };
        }(),
        g = d('uPP4W'),
        h = (e = g) && e.__esModule ? e : {
            default: e
        },
        i = d('alDvw');
    var j = {
            position: 'relative'
        },
        k = function(a) {
            function l(a) {
                ! function(a, l) {
                    if (!(a instanceof l))
                        throw new TypeError('Cannot call a class as a function');
                }(this, l);
                var m = function(a, l) {
                    if (!a)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !l || 'object' != typeof l && 'function' != typeof l ? a : l;
                }(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, a));
                return m.setRef = m.setRef.bind(m), m;
            }
            return function(a, l) {
                if ('function' != typeof l && null !== l)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof l);
                a.prototype = Object.create(l && l.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : a.__proto__ = l);
            }(l, a), f(l, [{
                    key: 'componentWillReceiveProps',
                    value: function(a) {
                        a.active && !this.props.active && (0, i.confetti)(this.container, a.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(a) {
                        this.container = a;
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return h.default.createElement('div', {
                            className: this.props.className,
                            style: j,
                            ref: this.setRef
                        });
                    }
                }
            ]), l;
        }(g.Component);
    a.exports.default = k;
}), d.register('alDvw', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.confetti = function(a) {
        var e = p.length > 1 && void 0 !== p[1] ? p[1] : {},
            f = Object.assign({}, h, e),
            g = f.elementCount,
            h = f.colors,
            i = f.width,
            j = f.height,
            k = f.angle,
            l = f.spread,
            m = f.startVelocity,
            n = f.decay,
            o = f.duration,
            p = f.random,
            q = c(a, g, h, i, j),
            r = q.map(function(a) {
                return {
                    element: a,
                    physics: d(k, l, m, p)
                };
            });
        return g(a, r, n, o);
    };

    function e(a, b, e, d, g) {
        return Array.from({
            length: b
        }).map(function(b, h) {
            var f = document.createElement('div'),
                g = e[h % e.length];
            return f.style['background-color'] = g, f.style.width = d, f.style.height = g, f.style.position = 'absolute', f.style.willChange = 'transform, opacity', a.appendChild(f), f;
        });
    }

    function f(a, b, e, f) {
        var g = a * (Math.PI / 180),
            h = b * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * f(),
            wobbleSpeed: 0.1 + 0.1 * f(),
            velocity: 0.5 * e + f() * e,
            angle2D: -g + (0.5 * h - f() * h),
            angle3D: -Math.PI / 4 + f() * (Math.PI / 2),
            tiltAngle: f() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * f()
        };
    }

    function g(a, b, e, f) {
        var h = void 0;
        return new Promise(function(l) {
            requestAnimationFrame(function m(n) {
                h || (h = n);
                var i = h === n ? 0 : (n - h) / f;
                b.forEach(function(a) {
                    return function(a, b, e) {
                        a.physics.x += Math.cos(a.physics.angle2D) * a.physics.velocity, a.physics.y += Math.sin(a.physics.angle2D) * a.physics.velocity, a.physics.z += Math.sin(a.physics.angle3D) * a.physics.velocity, a.physics.wobble += a.physics.wobbleSpeed, a.physics.velocity *= e, a.physics.y += 3, a.physics.tiltAngle += a.physics.tiltAngleSpeed;
                        var j = a.physics,
                            k = j.x,
                            l = j.y,
                            m = j.tiltAngle,
                            n = j.wobble,
                            o = 'translate3d(' + (k + 10 * Math.cos(n)) + 'px, ' + (l + 10 * Math.sin(n)) + 'px, 0) rotate3d(1, 1, 1, ' + m + 'rad)';
                        a.element.style.transform = o, a.element.style.opacity = 1 - b;
                    }(a, i, e);
                }), h - h < f ? requestAnimationFrame(g) : (b.forEach(function(b) {
                    if (b.element.parentNode === a)
                        return a.removeChild(b.element);
                }), h());
            });
        });
    }
    var h = {
        angle: 90,
        decay: 0.9,
        spread: 45,
        startVelocity: 45,
        elementCount: 50,
        width: '10px',
        height: '10px',
        colors: [
            '#a864fd',
            '#29cdff',
            '#78ff44',
            '#ff718d',
            '#fdff6a'
        ],
        duration: 3000,
        random: Math.random
    };
}), d.register('ENrTc', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('SDap/'),
        i = d('UNaEe'),
        j = d('lf3yz'),
        k = d('Vlfxs'),
        l = d('uPP4W');
    let m;
    const n = d('h99Nu').default.div(m || (m = (a => a)`
  height: 40%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`));
    let o = class extends l.Component {
        componentDidMount() {
            document.addEventListener('keydown', this.handleKeyDown);
        }
        componentWillUnmount() {
            document.removeEventListener('keydown', this.handleKeyDown);
        }
        render() {
            const p = this.currentLevel();
            return (0, g.jsx)(n, {
                children: this.props.levels.map((b, c) => (0, g.jsx)(h.default, {
                    level: c + 1,
                    changeLevel: this.changeLevel,
                    chosen: c + 1 === this.props.active,
                    canAfford: this.props.balance.balance >= (0, j.getUpgradeCost)(b.price),
                    alreadyPurchased: p >= c + 1
                }, b.value))
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'changeLevel', a => {
                a !== this.props.active && (i.click2.play(), this.props.upgrades.upgradeLevelTabs[(0, j.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)] = a);
            }), (0, e.default)(this, 'currentLevel', () => this.props.upgrades.upgradeLevels[(0, j.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)]), (0, e.default)(this, 'getNextPosition', a => {
                const p = this.props.active;
                return 'left' === a && 1 !== p && 6 !== p ? p - 1 : 'right' === a && 5 !== p && 10 !== p ? p + 1 : 'up' === a && p - 5 > 0 ? p - 5 : 'down' === a && p + 5 < 11 ? p + 5 : p;
            }), (0, e.default)(this, 'handleKeyDown', ({
                keyCode: p = 0
            }) => {
                37 !== p && 65 !== p || this.changeLevel(this.getNextPosition('left')), 38 !== p && 87 !== p || this.changeLevel(this.getNextPosition('up')), 39 !== p && 68 !== p || this.changeLevel(this.getNextPosition('right')), 40 !== p && 83 !== p || this.changeLevel(this.getNextPosition('down'));
            });
        }
    };
    o = (0, f.__decorate)([
        (0, k.inject)('upgrades', 'balance'),
        k.observer
    ], o);
    var p = q;
}), d.register('SDap/', function(a, c) {
    b(a.exports, 'default', function() {
        return q;
    });
    var e = d('UM8oI'),
        f = d('8kSQZ'),
        g = d('VDucS'),
        h = d('G5sHI'),
        i = d('4JvRz'),
        j = d('VCvua0'),
        k = d('uPP4W'),
        l = d('h99Nu');
    let m, n, o = a => a;
    class p extends k.Component {
        render() {
            return (0, f.jsx)(s, {
                onMouseDown: this.changeLevel,
                chosen: this.props.chosen,
                children: (0, f.jsx)(i.default, {
                    mode: 'single',
                    max: 30,
                    paddingHorizontal: 10,
                    text: (0, f.jsxs)(t, {
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    color: this.getCircleColor(),
                                    marginRight: 3
                                },
                                children: (0, f.jsx)(g.default, {
                                    name: 'fas fa-circle'
                                })
                            }),
                            (0, f.jsx)('div', {
                                children: (0, f.jsx)(h.default, {
                                    text: 'Level ' + this.props.level
                                })
                            })
                        ]
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'getCircleColor', () => this.props.alreadyPurchased ? 'gray' : this.props.canAfford ? 'green' : 'red'), (0, e.default)(this, 'changeLevel', () => this.props.changeLevel(this.props.level));
        }
    }
    var q = r;
    const s = l.default.div(m || (m = o`
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
  background: ${ 0 };
  color: ${ 0 };
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
`), a => a.chosen ? '#28004c' : '#0D0019', j.default.White),
        t = l.default.div(n || (n = o`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 570px) {
    flex-direction: column;
  }
`));
}), d.register('X3YCf', function(a, c) {
    b(a.exports, 'default', function() {
        return x;
    });
    var e = d('8kSQZ'),
        f = d('OdbUb'),
        g = d('G5sHI'),
        h = d('lf3yz'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('h99Nu'),
        l = d('YxLak'),
        m = d('OpXcJ'),
        n = d('qZYWR'),
        o = d('PjB0f'),
        p = d('AFecU'),
        q = d('xxcnb');
    let r, s, t = a => a;
    const u = k.default.div.attrs({
            className: 'scroll-y'
        })(r || (r = t`
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ 0 }) repeat 0 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: ${ 0 };
`), (0, h.getAssetPath)('background.png'), () => (0, h.mainFontName)()),
        v = k.default.div(s || (s = t`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 90%;
  max-width: 700px;
  animation-delay: ${ 0 }s;
  animation-duration: 7s;
`), a => a.animationDelay),
        w = a => {
            const x = (a, x) => (Math.pow(10, x) + ~~a).toString().substring(1),
                y = a % 60;
            return `${ x(Math.floor(a / 60), 2) }:${ x(y, 2) }`;
        };
    var x = (0, i.observer)(() => {
        const {
            entities: {
                lava: y
            },
            balance: z,
            questions: A
        } = j.useContext(q.default);
        if ((0, h.inImposterMode)())
            return (0, e.jsx)(p.default, {});
        let B = 0;
        return (0, h.inBossBattleMode)() && (B = 11), (0, h.inZombiesVsHumansMode)() && (B = 17), (0, h.inPardyMode)() && (B = 16), y && (B = 13), (0, e.jsx)(u, {
            children: (0, e.jsxs)(v, {
                className: 'animated zoomInDown',
                animationDelay: B,
                children: [
                    (0, e.jsx)(n.default, {
                        customText: y ? '\uD83C\uDF0B Game Over!' : (0, h.inZombiesVsHumansMode)() ? (0, h.defendingHomebaseResultsInfo)().text : null
                    }),
                    (0, h.inZombiesVsHumansMode)() ? (0, h.defendingHomebaseResultsInfo)().won ? (0, e.jsx)(l.default, {}) : null : (0, e.jsx)(l.default, {}),
                    y ? (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(m.default, {
                                customColor: '#1B5E20',
                                amount: w(y.secondsLasted),
                                tagline: (0, e.jsx)(g.default, {
                                    text: 'Lava Survival Time'
                                })
                            }),
                            (0, e.jsx)(m.default, {
                                amount: `${ (0, h.numberWithCommas)(y.buildHeight) } ${ (0, o.plural)('block', y.buildHeight) }`,
                                tagline: (0, e.jsx)(g.default, {
                                    text: 'Building Height'
                                })
                            }),
                            (0, e.jsx)(m.default, {
                                amount: `${ (0, h.numberWithCommas)(y.buildPieces) } ${ (0, o.plural)('piece', y.buildPieces) }`,
                                tagline: (0, e.jsx)(g.default, {
                                    text: 'Building Pieces'
                                })
                            })
                        ]
                    }) : null,
                    (0, e.jsx)(m.default, {
                        amount: (0, h.getMoney)(z.balance),
                        tagline: (0, e.jsx)(g.default, {
                            text: (0, h.inDrawMode)() ? 'Final Score' : 'Final Balance'
                        })
                    }),
                    !(0, h.inDrawMode)() && (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(m.default, {
                                customColor: '#1B5E20',
                                amount: (0, h.numberWithCommas)(A.questionsAnsweredCorrectly),
                                tagline: (0, e.jsx)(g.default, {
                                    text: 'Questions Answered Correctly'
                                })
                            }),
                            (0, e.jsx)(m.default, {
                                customColor: '#DD2C00',
                                amount: (0, h.numberWithCommas)(A.questionsAnsweredIncorrectly),
                                tagline: (0, e.jsx)(g.default, {
                                    text: 'Questions Answered Incorrectly'
                                })
                            })
                        ]
                    }),
                    !(0, h.inZombiesVsHumansMode)() && !y && (0, e.jsx)(f.default, {
                        showSelf: !0
                    })
                ]
            })
        });
    });
}), d.register('YxLak', function(a, c) {
    b(a.exports, 'default', function() {
        return t;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('4JvRz'),
        i = d('x91v2'),
        j = d('VCvua0'),
        k = d('5WRxN'),
        l = d('cJ4UC');
    d('/jgct');
    var m = d('k8riP'),
        n = d('lf3yz'),
        o = d('Vlfxs'),
        p = d('uPP4W');
    let q;
    const r = d('h99Nu').default.div(q || (q = (a => a)`
  height: 20vh;
  box-shadow: ${ 0 };
  background: ${ 0 };
  width: 100%;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: all 0.21s;
  box-sizing: border-box;
  &:hover {
    background: ${ 0 };
    color: ${ 0 };
  }
`), k.default.basic, j.default.White, a => a.theme.question.background, a => a.theme.question.text);
    let s = class extends p.Component {
        render() {
            return this.props.gameOptions.clapping ? (0, g.jsx)(r, {
                onClick: this.onClap,
                children: (0, g.jsx)(h.default, {
                    max: 75,
                    text: (0, g.jsxs)('div', {
                        className: 'animated pulse infinite',
                        children: [
                            (0, i.getClappingEmoji)(),
                            ' ',
                            (0, n.numberWithCommas)(this.state.clapCount)
                        ]
                    })
                })
            }) : null;
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                clapCount: 0
            }), (0, e.default)(this, 'onClap', () => {
                const t = this.props.powerups.activePowerups.includes(m.PowerupNames.clapMultiplier) ? 10 : 1;
                (0, i.getClapSound)().play(), (0, n.send)(l.default.clap, {
                    amount: t
                }), this.setState({
                    clapCount: this.state.clapCount + t
                });
            });
        }
    };
    s = (0, f.__decorate)([
        (0, o.inject)('gameOptions', 'powerups'),
        o.observer
    ], s);
    var t = u;
}), d.register('x91v2', function(a, c) {
    b(a.exports, 'getClappingEmoji', function() {
        return f;
    }), b(a.exports, 'getClapSound', function() {
        return g;
    });
    var e = d('UNaEe');
    const f = () => '\uD83D\uDC4F',
        g = () => e.clap;
}), d.register('OpXcJ', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('4JvRz'),
        g = d('VCvua0');
    d('uPP4W');
    var h = d('h99Nu');
    let i, j, k, l = a => a;
    const m = h.default.div(i || (i = l`
  box-sizing: border-box;
  background: ${ 0 };
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
`), g.default.White),
        n = h.default.div(j || (j = l`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
`)),
        o = h.default.div(k || (k = l`
  height: 72px;
  width: 100%;
  color: ${ 0 };
`), a => a.customColor ? a.customColor : g.default.Black);
    var p = a => (0, e.jsxs)(m, {
        children: [
            (0, e.jsx)(n, {
                children: a.tagline
            }),
            (0, e.jsx)(o, {
                customColor: a.customColor,
                children: (0, e.jsx)(f.default, {
                    paddingHorizontal: 10,
                    paddingVertical: 0,
                    max: 72,
                    text: a.amount
                })
            })
        ]
    });
}), d.register('qZYWR', function(a, u) {
    b(a.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ'),
        f = d('4JvRz'),
        g = d('VCvua0'),
        h = d('5WRxN'),
        i = d('iZ2Xr'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('wiooy2'),
        m = d('h99Nu'),
        n = d('xxcnb');
    let o;
    const p = a => {
            const q = a % 10,
                r = a % 100;
            return 1 === q && 11 !== r ? a + 'st' : 2 === q && 12 !== r ? a + 'nd' : 3 === q && 13 !== r ? a + 'rd' : a + 'th';
        },
        q = m.default.div(o || (o = (a => a)`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${ 0 };
  box-shadow: ${ 0 };
  border-radius: 8px;
  margin-bottom: 5px;
  animation-delay: 7s;
`), g.default.White, h.default.basic);
    var r = (0, j.observer)(a => {
        const [s, t] = k.useState(!1), {
            user: u
        } = k.useContext(n.default);
        return k.useEffect(() => {
            setTimeout(() => {
                t(!0);
            }, 7100);
        }, []), (0, e.jsxs)(q, {
            children: [
                (0, e.jsx)(c(l), {
                    active: s,
                    config: {
                        ...i.confettiConfig,
                        angle: 270
                    }
                }),
                (0, e.jsx)(f.default, {
                    customClass: 'animated fadeIn',
                    customStyle: {
                        animationDelay: '7s'
                    },
                    max: 250,
                    text: a.customText || p(u.place) + '!'
                })
            ]
        });
    });
}), d.register('AFecU', function(a, c) {
    b(a.exports, 'default', function() {
        return y;
    });
    var e = d('8kSQZ'),
        f = d('VCvua0'),
        g = d('cJ4UC'),
        h = d('lf3yz'),
        i = d('4JvRz'),
        j = d('TTKAH'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('h99Nu'),
        n = d('jh162'),
        o = d('xxcnb');
    let p, q, r, s, t, u, v, w, x = a => a;
    var y = (0, k.observer)(() => {
        const {
            imposter: z
        } = l.useContext(o.default), A = z.impostersLeft >= 1, B = (0, n.DecryptData)(z.epl) || [];
        return l.useEffect(() => {
            (0, h.send)(g.default.imposter.requestPeople);
        }, []), (0, e.jsx)(z, {
            children: (0, e.jsxs)(A, {
                children: [
                    (0, e.jsx)(B, {
                        children: (0, e.jsx)(i.default, {
                            max: 120,
                            paddingVertical: 0,
                            paddingHorizontal: 0,
                            text: (A ? 'Impostors' : 'Crewmates') + ' Win'
                        })
                    }),
                    (0, e.jsxs)(C, {
                        children: [
                            (0, e.jsx)(D, {
                                style: {
                                    background: A ? '#d32f2f' : '#4caf50'
                                }
                            }),
                            (0, e.jsx)(E, {
                                children: (0, e.jsx)(F, {
                                    src: (0, h.getAssetPath)(A ? 'astronaut2.svg' : 'astronaut.svg')
                                })
                            })
                        ]
                    }),
                    (0, e.jsxs)(G, {
                        children: [
                            (0, e.jsxs)('b', {
                                children: [
                                    (0, h.plural)('Impostor', B.filter(z => z.role === j.PersonRole.imposter).length),
                                    ':'
                                ]
                            }),
                            ' ',
                            (0, h.teamPlayerNames)(B.filter(z => z.role === j.PersonRole.imposter).map(z => z.name))
                        ]
                    })
                ]
            })
        });
    });
    const z = m.default.div.attrs({
            className: 'flex hc maxWidth maxHeight scroll-y'
        })(p || (p = x`
  background: ${ 0 };
  color: ${ 0 };
  align-items: flex-start;
`), f.default.Black, f.default.White),
        A = m.default.div.attrs({
            className: 'flex flex-column vc animated fadeIn'
        })(q || (q = x`
  animation-duration: 12s;
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: 'Space Grotesk', monospace;
  text-align: center;
  width: 80%;
  max-width: 500px;
`)),
        B = m.default.div.attrs({
            className: 'maxWidth'
        })(r || (r = x`
  height: 77px;
  font-weight: 700;
`)),
        C = m.default.div(s || (s = x`
  height: 250px;
  width: 300px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 75px;
`)),
        D = m.default.div.attrs({
            className: 'maxWidth maxHeight animated pulse infinite'
        })(t || (t = x`
  border-radius: 50%;
  animation-duration: 2.5s;
  filter: blur(50px);
`)),
        E = m.default.div.attrs({
            className: 'flex maxWidth hc vc'
        })(u || (u = x`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`)),
        F = m.default.img(v || (v = x`
  filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.4));
  height: 160px;
`)),
        G = m.default.div(w || (w = x`
  font-size: 24px;
`));
}), d.register('ZMWrJ', function(a, c) {
    b(a.exports, 'default', function() {
        return v;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('fgVTE0'),
        h = d('G5sHI'),
        i = d('lf3yz'),
        j = d('UnUp5'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('h99Nu'),
        n = d('PDLD/2'),
        o = d('M50B1');
    let p, q, r = a => a;
    const s = (0, m.default)(o.Card)(p || (p = r`
  @media (min-width: 760px) and (min-height: 719px) {
    transform: scale(1.5);
  }
`)),
        t = m.default.div(q || (q = r`
  background: ${ 0 };
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`), a => a.background);
    let u = class extends l.Component {
        componentDidMount() {
            (0, j.when)(() => this.props.gameValues.gameStatus === n.GameStatus.gameplay, () => (0, i.startGame)());
        }
        render() {
            const {
                user: v
            } = this.props, w = v.team && v.team.meta && v.team.meta.isBoss;
            return (0, f.jsx)(t, {
                background: (0, i.getTeamColor)(),
                children: (0, f.jsx)(s, {
                    children: v.team ? (0, f.jsxs)(f.Fragment, {
                        children: [
                            w ? (0, f.jsx)('img', {
                                src: (0, i.getAssetPath)('power-fight.svg'),
                                style: {
                                    width: '40%'
                                }
                            }) : (0, f.jsx)('img', {
                                src: (0, i.getAssetPath)('team.svg'),
                                style: {
                                    width: '60%'
                                }
                            }),
                            (0, f.jsx)(o.Title, {
                                children: (0, f.jsx)(h.default, {
                                    text: (0, i.capitalizeFirstLetter)(v.team.id)
                                })
                            }),
                            (0, f.jsx)(o.Details, {
                                children: w ? (0, f.jsx)(h.default, {
                                    text: 'You\'re the boss. Ready to face the challengers?'
                                }) : (0, i.inZombiesVsHumansMode)() ? (0, f.jsx)(h.default, {
                                    text: 'Get ready for battle!'
                                }) : (0, f.jsx)(h.default, {
                                    text: 'Go find the rest of your team!'
                                })
                            })
                        ]
                    }) : (0, f.jsx)(g.default, {})
                })
            });
        }
    };
    u = (0, e.__decorate)([
        (0, k.inject)('user', 'gameValues'),
        k.observer
    ], u);
    var v = w;
}), d.register('M50B1', function(a, c) {
    b(a.exports, 'Title', function() {
        return l;
    }), b(a.exports, 'Details', function() {
        return m;
    }), b(a.exports, 'Card', function() {
        return n;
    });
    var e = d('h99Nu'),
        f = d('5WRxN'),
        g = d('VCvua0');
    let h, i, j, k = a => a;
    const l = e.default.div(h || (h = k`
  font-size: 34px;
  font-weight: bold;
`)),
        m = e.default.div(i || (i = k`
  font-size: 21px;
  margin-bottom: 7px;
`)),
        n = e.default.div(j || (j = k`
  padding: 20px;
  margin: 15px;
  box-shadow: ${ 0 };
  background: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  text-align: center;
  max-width: 400px;
  box-sizing: border-box;
`), f.default.basic, g.default.White);
}), d.register('WYdGX', function(a, r) {
    b(a.exports, 'default', function() {
        return n;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('Vlfxs'),
        h = d('OK62W'),
        i = d('lmfrI'),
        j = d('UNaEe'),
        k = d('lf3yz'),
        l = d('M8YtH'),
        m = d('xxcnb');
    var n = (0, g.observer)(() => {
        const {
            questions: o,
            balance: p,
            gameOptions: q,
            user: r,
            translations: s,
            imposter: t,
            theme: u
        } = c(f).useContext(m.default);
        c(f).useEffect(() => (o.lockedViewingCorrectAnswer = !1, () => {
            o.lockedViewingCorrectAnswer = !1;
        }), []);
        const v = o => (0, k.inImposterMode)() ? `${ o <= 0 ? '-' : '+' }${ (0, k.numberWithCommas)(Math.round(Math.abs(o))) }` : `${ o > 0 ? '+' : '' }${ (0, k.getMoney)(o) }`,
            w = () => {
                const x = (0, k.questionLocation)().find(x => x._id === o.lastQuestion);
                return x || null;
            };
        return (0, e.jsx)(h.default, {
            continueAction: () => {
                o.transitioningToNextQuestion = !1;
            },
            ecc: o.ceq,
            lastQuestion: w(),
            lastQuestionCorrectAnswer: (() => {
                const x = w();
                if (!x)
                    return null;
                let y = x.answers.find(x => x.correct);
                return y || (y = {
                    text: 'No Correct Answer',
                    correct: !1,
                    _id: 'no-correct-answer'
                }), y;
            })(),
            lastQuestionAnsweredCorrect: o.lastQuestionCorrect,
            onQuestionAnswered: o => (0, k.questionAnswered)(o),
            nextQuestion: o.nextQuestion,
            responseActions: (() => {
                const x = [];
                return o.lastQuestionCorrect && ((0, k.blockShopping)() || x.push({
                    handleClick: () => (0, k.changeRoute)(l.default.shop),
                    background: u.theme.response.shop.background,
                    text: (0, k.shopName)()
                })), x;
            })(),
            textShownWhenAnsweringCorrectly: v(p.balanceChangeIfCorrect),
            textShownWhenAnsweringIncorrectly: v(p.balanceChangeIfIncorrect),
            correctSound: (0, k.inImposterMode)() ? j.spark : j.correct,
            incorrectSound: j.incorrect,
            onActionSound: j.click,
            language: q.language,
            translations: s.translations,
            allowGoogleTranslate: q.allowGoogleTranslate,
            readToMeEnabled: r.readToMeEnabled,
            blockKeyboardEvents: t.noteDrawerOpen,
            defaultBackgroundColor: u.theme.defaultBackground,
            continueButtonColor: u.theme.response.continue,
            answerColors: u.theme.palette,
            questionColor: u.theme.question,
            textInputButtonColor: u.theme.palette[2],
            correctAnswerColor: (0, k.inImposterMode)() ? {
                background: i.default.Black,
                text: '#ffeb3b'
            } : u.theme.response.correctAnswer,
            incorrectAnswerColor: u.theme.response.incorrectAnswer,
            onLockedChange: p => {
                o.lockedViewingCorrectAnswer = p;
            }
        });
    });
}), d.register('WV9Rq', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('Vlfxs'),
        h = d('uPP4W'),
        i = d('H8zEb');
    let j = class extends h.Component {
        render() {
            return this.props.powerups.screenAttack.powerupName && this.props.powerups.screenAttack.attackerName && this.props.powerups.screenAttack.fullScreen ? (0, f.jsx)(i.default, {}) : null;
        }
    };
    j = (0, e.__decorate)([
        (0, g.inject)('powerups'),
        g.observer
    ], j);
    var k = l;
}), d.register('H8zEb', function(a, c) {
    b(a.exports, 'default', function() {
        return B;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('VCvua0'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('73Q94'),
        l = d('h99Nu');
    let m, n, o, p, q, r, s = a => a;
    const t = a => new Promise(b => setTimeout(b, a)),
        u = l.default.div(m || (m = s`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${ 0 };
`), h.default.Black),
        v = l.default.div(n || (n = s`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
url("${ 0 }");
  background-size: cover;
  background-position: center;
  color: ${ 0 };
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`), a => a.backgroundImage, h.default.White),
        w = l.default.div(o || (o = s`
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
        x = l.default.div(p || (p = s`
  font-size: 37px;
  margin-bottom: 3px;
`)),
        y = l.default.div(q || (q = s`
  font-size: 20px;
  opacity: 0.8;
`)),
        z = l.default.div(r || (r = s`
  font-size: 23px;
`));
    let A = class extends j.Component {
        componentDidMount() {
            this.mounted = !0, this.beginCountdown(), (0, k.onAttack)();
        }
        componentWillUnmount() {
            this.mounted = !1;
        }
        render() {
            const B = this.secondsLeft();
            return (0, g.jsx)(u, {
                children: (0, g.jsx)(v, {
                    backgroundImage: (0, k.backgroundImage)(),
                    children: (0, g.jsxs)(w, {
                        children: [
                            (0, g.jsx)(x, {
                                children: (0, k.getTitle)()
                            }),
                            (0, g.jsxs)(y, {
                                children: [
                                    (0, k.getVerb)(),
                                    ' by ',
                                    this.props.powerups.screenAttack.attackerName
                                ]
                            }),
                            (0, g.jsx)('i', {
                                style: {
                                    color: (0, k.getIconColor)(),
                                    fontSize: 95,
                                    marginTop: 10,
                                    marginBottom: 10
                                },
                                className: `${ (0, k.getIcon)() } animated pulse infinite`
                            }),
                            (0, g.jsxs)(z, {
                                children: [
                                    'Wait ',
                                    B,
                                    ' ',
                                    'second' + (1 === B ? '' : 's')
                                ]
                            })
                        ]
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                secondsPassed: 0
            }), (0, e.default)(this, 'mounted', !1), (0, e.default)(this, 'beginCountdown', async () => {
                for (let B = 0; B < 15; B++)
                    await t(1000), this.addSecond();
                this.mounted && this.setState({
                    secondsPassed: 0
                });
            }), (0, e.default)(this, 'addSecond', () => {
                this.mounted && this.setState({
                    secondsPassed: this.state.secondsPassed + 1
                });
            }), (0, e.default)(this, 'secondsLeft', () => 15 - this.state.secondsPassed);
        }
    };
    A = (0, f.__decorate)([(0, i.inject)('powerups')], A);
    var B = C;
}), d.register('syyMk', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('Vlfxs'),
        h = d('uPP4W'),
        i = d('Wtw0r');
    let j = class extends h.Component {
        render() {
            return this.props.gameValues.thanosValues ? (0, f.jsx)(i.default, {}) : null;
        }
    };
    j = (0, e.__decorate)([
        (0, g.inject)('gameValues'),
        g.observer
    ], j);
    var k = l;
}), d.register('Wtw0r', function(a, c) {
    b(a.exports, 'default', function() {
        return D;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('VCvua0'),
        i = d('qpV7r'),
        j = d('hNywk'),
        k = d('lf3yz'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('h99Nu'),
        o = d('b9Bct');
    let p, q, r, s = a => a;
    const t = {
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
        u = {
            hidden: {
                opacity: 0
            },
            show: {
                opacity: 1
            }
        },
        v = a => (0, g.jsx)(o.motion.div, {
            variants: u,
            initial: 'hidden',
            transition: {
                duration: 1.2
            },
            children: (0, g.jsx)(j.Preview, {
                color: {
                    text: h.default.White,
                    background: a.color
                },
                icon: 'far fa-gem'
            })
        }),
        w = n.default.div(p || (p = s`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${ 0 };
  color: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
`), h.default.Black, h.default.White),
        x = n.default.div(q || (q = s`
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
        y = n.default.div(r || (r = s`
  animation-duration: 3s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`));
    let z;
    var A;
    (A = z || (z = {})).winner = 'Winner', A.waiting = 'Waiting', A.resultsShowing = 'Results Showing', A.result = 'Result';
    const B = a => {
        let C = '';
        return a.forEach((c, d) => {
            C += c, d + 1 !== a.length && (C += ', ');
        }), C;
    };
    let C = class extends m.Component {
        componentDidMount() {
            (0, k.toggleDrawer)(!1, !0), setTimeout(() => this.setState({
                showStones: !0
            }), 1200), setTimeout(() => this.setState({
                stage: z.waiting
            }), 11400);
            const D = this.props.gameValues.thanosValues.showAt,
                E = setInterval(() => {
                    const F = Math.round((D - Date.now()) / 1000);
                    if (F <= 0)
                        return this.setState({
                            stage: z.resultsShowing
                        }), setTimeout(() => this.setState({
                            stage: z.result
                        }), 4000 * (this.props.gameValues.thanosValues.saved.length + this.props.gameValues.thanosValues.snapped.length)), void clearInterval(E);
                    this.setState({
                        secondsLeft: F
                    });
                }, 200);
        }
        render() {
            return (0, g.jsx)(w, {
                children: (0, g.jsx)(x, {
                    children: this.getContent()
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                stage: z.winner,
                secondsLeft: 0,
                showStones: !1
            }), (0, e.default)(this, 'getContent', () => {
                const {
                    thanosValues: D
                } = this.props.gameValues;
                if (this.state.stage === z.waiting)
                    return (0, g.jsx)('div', {
                        children: (0, g.jsxs)(y, {
                            className: 'animated fadeIn',
                            children: [
                                (0, g.jsx)('div', {
                                    style: {
                                        fontSize: 25
                                    },
                                    children: 'The snap is about to happen...'
                                }),
                                (0, g.jsxs)('b', {
                                    style: {
                                        fontSize: 119
                                    },
                                    children: [
                                        '0:',
                                        this.state.secondsLeft < 10 ? `0${ this.state.secondsLeft }` : this.state.secondsLeft
                                    ]
                                })
                            ]
                        })
                    }, '2');
                if (this.state.stage === z.resultsShowing)
                    return (0, g.jsx)(y, {
                        children: (0, g.jsx)('div', {
                            style: {
                                fontSize: 25,
                                textAlign: 'center',
                                maxWidth: 500
                            },
                            children: 'Look up! The snap results are showing...'
                        })
                    });
                if (this.state.stage === z.result) {
                    const E = (0, i.identifier)();
                    let F = !0,
                        G = 'You Got Snapped!',
                        H = '';
                    if (D.saved.map(D => D.id).includes(E)) {
                        F = !1, G = 'You Survived The Snap!';
                        H = `You survived along with ${ B(D.saved.filter(D => D.id !== E).map(D => D.name)) }`;
                    } else
                        D.winner.id === E ? (F = !1, G = 'You Won!', H = `You snapped ${ B(D.snapped.map(D => D.name)) }`) : H = `You got snapped along with ${ B(D.snapped.filter(D => D.id !== E).map(D => D.name)) }`;
                    return (0, g.jsx)('div', {
                        children: (0, g.jsxs)(y, {
                            style: {
                                animationDuration: '22s'
                            },
                            className: F ? 'animated fadeOut' : '',
                            children: [
                                (0, g.jsx)('b', {
                                    style: {
                                        fontSize: 46,
                                        textAlign: 'center'
                                    },
                                    children: G
                                }),
                                (0, g.jsx)('div', {
                                    style: {
                                        margin: 10,
                                        maxWidth: 500,
                                        textAlign: 'center'
                                    },
                                    children: H
                                })
                            ]
                        })
                    }, '3');
                }
                return this.state.stage === z.winner ? (0, g.jsx)('div', {
                    children: (0, g.jsxs)(y, {
                        className: 'animated fadeIn',
                        children: [
                            (0, g.jsx)('b', {
                                style: {
                                    fontSize: 43
                                },
                                children: D.winner.name
                            }),
                            (0, g.jsx)('div', {
                                style: {
                                    fontSize: 25
                                },
                                children: 'acquired all 6 Infinity Stones'
                            }),
                            (0, g.jsx)('div', {
                                style: {
                                    height: 10
                                }
                            }),
                            (0, g.jsxs)(o.motion.div, {
                                animate: this.state.showStones ? 'show' : 'hidden',
                                style: {
                                    display: 'flex'
                                },
                                variants: t,
                                children: [
                                    (0, g.jsx)(v, {
                                        color: '#f4511e'
                                    }),
                                    (0, g.jsx)(v, {
                                        color: '#388e3c'
                                    }),
                                    (0, g.jsx)(v, {
                                        color: '#1976d2'
                                    }),
                                    (0, g.jsx)(v, {
                                        color: '#ffcc80'
                                    }),
                                    (0, g.jsx)(v, {
                                        color: '#d32f2f'
                                    }),
                                    (0, g.jsx)(v, {
                                        color: '#4527a0'
                                    })
                                ]
                            })
                        ]
                    })
                }, '1') : null;
            });
        }
    };
    C = (0, f.__decorate)([(0, l.inject)('gameValues')], C);
    var D = E;
}), d.register('4mdMn', function(a, c) {
    b(a.exports, 'default', function() {
        return o;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('m96/N'),
        i = d('G5sHI'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('M50B1'),
        m = d('QyyBz');
    let n = class extends k.Component {
        render() {
            return (0, g.jsx)(m.BackgroundContainer, {
                children: (0, g.jsxs)(l.Card, {
                    children: [
                        (0, g.jsx)(l.Title, {
                            children: (0, g.jsx)(i.default, {
                                text: this.props.gameValues.nonDismissMessage.title
                            })
                        }),
                        (0, g.jsx)(l.Details, {
                            children: (0, g.jsx)(i.default, {
                                text: this.props.gameValues.nonDismissMessage.message
                            })
                        }),
                        (0, g.jsx)(h.default, {
                            label: this.props.gameValues.nonDismissMessage.buttonText || 'Join New Game',
                            onClick: this.handleClick,
                            type: 'secondary'
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'handleClick', () => {
                this.props.gameValues.nonDismissMessage.link ? window.location.href = this.props.gameValues.nonDismissMessage.link : window.location.reload();
            });
        }
    };
    n = (0, f.__decorate)([
        (0, j.inject)('gameValues'),
        j.observer
    ], n);
    var o = p;
}), d.register('QyyBz', function(a, c) {
    b(a.exports, 'BackgroundContainer', function() {
        return h;
    });
    var e = d('h99Nu'),
        f = d('lf3yz');
    let g;
    const h = e.default.div(g || (g = (a => a)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ 0 }) repeat 0 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`), (0, f.getAssetPath)('background.png'));
}), d.register('ts2H+', function(a, c) {
    b(a.exports, 'default', function() {
        return m;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('VCvua0'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('h99Nu');
    let k, l = class extends i.Component {
        render() {
            return this.props.ui.fullBlackScreen ? (0, f.jsx)(o, {}) : null;
        }
    };
    l = (0, e.__decorate)([
        (0, h.inject)('ui'),
        h.observer
    ], l);
    var m = n;
    const o = j.default.div(k || (k = (a => a)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999999999999999999;
  background: ${ 0 };
`), g.default.Black);
}), d.register('TSd8b', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('Vlfxs'),
        h = d('uPP4W'),
        i = d('GcrLh');
    let j = class extends h.Component {
        render() {
            return (0, f.jsx)(i.default, {
                isSnowing: this.props.ui.snowing
            });
        }
    };
    j = (0, e.__decorate)([
        (0, g.inject)('ui'),
        g.observer
    ], j);
    var k = l;
}), d.register('GcrLh', function(a, c) {
    b(a.exports, 'default', function() {
        return j;
    });
    var e = d('UM8oI'),
        f = d('8kSQZ'),
        g = d('uPP4W'),
        h = d('Ztuf/');
    class i extends g.Component {
        componentDidUpdate(a) {
            this.state.hasShown || !a.isSnowing && this.props.isSnowing && (this.setState({
                hasShown: !0
            }), (0, h.default)());
        }
        render() {
            return (0, f.jsx)('canvas', {
                style: {
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    pointerEvents: 'none',
                    display: this.props.isSnowing ? 'initial' : 'none'
                },
                id: 'snow-canv'
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                hasShown: !1
            });
        }
    }
    var j = k;
}), d.register('Ztuf/', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('rlYg5'),
        f = d('UnUp5');

    function g() {
        var h = !0,
            i = document.getElementById('snow-canv');
        if (i) {
            for (var j, k = i.getContext('2d'), l = i.width = window.innerWidth, m = i.height = window.innerHeight, n = [], o = 0; o < 29; ++o)
                (j = new k()).y = Math.random() * (m + 50), j.x = Math.random() * l, j.t = Math.random() * (2 * Math.PI), j.sz = 100 / (10 + 100 * Math.random()) * 1.3, j.sp = 0.15 * Math.pow(0.8 * j.sz, 2) * 1, j.sp = j.sp < 1 ? 1 : j.sp, n.push(j);
            j(), (0, f.reaction)(() => e.default.ui.isSnowing, () => {
                const p = e.default.ui.isSnowing;
                !h && p ? (h = p, j()) : h = p;
            });
        }

        function j() {
            if (h) {
                window.requestAnimationFrame(j), d.clearRect(0, 0, g, h), d.fillRect(0, 0, g, h), d.fill();
                for (var k = 0; k < i.length; ++k) {
                    var l = i[k];
                    l.t += 0.05, l.t = l.t >= 2 * Math.PI ? 0 : l.t, l.y += l.sp, l.x += Math.sin(1 * l.t) * (0.3 * l.sz), l.y > h + 50 && (l.y = -10 - 20 * Math.random()), l.x > g + 20 && (l.x = -20), l.x < -20 && (l.x = g + 20), l.draw();
                }
            }
        }

        function k() {
            this.draw = function() {
                this.g = d.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz), this.g.addColorStop(0, 'hsla(255,255%,255%,1)'), this.g.addColorStop(1, 'hsla(255,255%,255%,0)'), d.moveTo(this.x, this.y), d.fillStyle = this.g, d.beginPath(), d.arc(this.x, this.y, this.sz, 0, 2 * Math.PI, !0), d.fill();
            };
        }
    }
}), d.register('2Pf+U', function(a, c) {
    b(a.exports, 'default', function() {
        return s;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('VCvua0'),
        i = d('M8YtH'),
        j = d('lf3yz'),
        k = d('TTKAH'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('h99Nu'),
        o = d('gDZC8'),
        p = d('QV33B');
    let q, r = class extends m.Component {
        render() {
            return (0, g.jsx)(u, {
                children: this.getContent()
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'getContent', () => {
                const {
                    status: s
                } = this.props.imposter;
                return s === k.ImposterStatus.discussion || s === k.ImposterStatus.voting ? (0, g.jsx)(o.default, {}) : s === k.ImposterStatus.votingResult ? (0, g.jsx)(p.default, {
                    text: 'Look at your captain\'s screen for voting results.'
                }) : s === k.ImposterStatus.intro ? (0, g.jsx)(p.default, {
                    text: 'Look at your captain\'s screen for instructions.'
                }) : (s == k.ImposterStatus.questions && (0, j.changeRoute)(i.default.questions), null);
            });
        }
    };
    r = (0, f.__decorate)([
        (0, l.inject)('imposter'),
        l.observer
    ], r);
    var s = t;
    const u = n.default.div(q || (q = (a => a)`
  color: ${ 0 };
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
`), h.default.White);
}), d.register('gDZC8', function(a, c) {
    b(a.exports, 'default', function() {
        return x;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('bPH7V'),
        i = d('ExtIT'),
        j = d('VCvua0'),
        k = d('TTKAH'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('h99Nu'),
        o = d('9liBo'),
        p = d('LhZqx'),
        q = d('dW0cW'),
        r = d('S/ldk');
    let s, t, u, v = a => a,
        w = class extends m.Component {
            render() {
                return (0, g.jsx)(z, {
                    children: (0, g.jsx)(A, {
                        children: (0, g.jsxs)(B, {
                            children: [
                                (0, g.jsx)(o.default, {}),
                                this.getContent()
                            ]
                        })
                    })
                });
            }
            constructor(...a) {
                super(...a), (0, e.default)(this, 'getContent', () => {
                    const {
                        me: x,
                        status: y
                    } = this.props.imposter;
                    return x && x.votedOff ? (0, g.jsx)(h.default, {
                        type: 'warning',
                        showIcon: !0,
                        message: 'Voted Off',
                        description: 'You\'ve been voted off and cannot contribute.',
                        style: {
                            textAlign: 'left',
                            marginTop: 35
                        }
                    }) : (0, g.jsxs)(g.Fragment, {
                        children: [
                            (0, g.jsx)('div', {
                                style: {
                                    marginTop: 25,
                                    marginBottom: 20
                                },
                                className: 'maxWidth',
                                children: (0, g.jsxs)(i.default, {
                                    children: [
                                        (0, g.jsx)('span', {
                                            role: 'img',
                                            'aria-label': 'notebook',
                                            children: '\uD83D\uDCD3'
                                        }),
                                        ' ',
                                        'Notebook'
                                    ]
                                })
                            }),
                            (0, g.jsx)(p.default, {}),
                            y === k.ImposterStatus.discussion ? (0, g.jsxs)(g.Fragment, {
                                children: [
                                    (0, g.jsx)('div', {
                                        style: {
                                            marginTop: 25,
                                            marginBottom: 20
                                        },
                                        className: 'maxWidth',
                                        children: (0, g.jsxs)(i.default, {
                                            children: [
                                                (0, g.jsx)('span', {
                                                    role: 'img',
                                                    'aria-label': 'astronaut',
                                                    children: '\uD83D\uDC69‍\uD83D\uDE80'
                                                }),
                                                ' ',
                                                'People'
                                            ]
                                        })
                                    }),
                                    (0, g.jsx)(q.default, {})
                                ]
                            }) : (0, g.jsx)(r.default, {})
                        ]
                    });
                });
            }
        };
    w = (0, f.__decorate)([
        (0, l.inject)('imposter'),
        l.observer
    ], w);
    var x = y;
    const z = n.default.div.attrs({
            className: 'maxWidth maxHeight flex hc'
        })(s || (s = v``)),
        A = n.default.div.attrs({
            className: 'scroll-y'
        })(t || (t = v`
  flex: 1;
`)),
        B = n.default.div(u || (u = v`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 25px;
  width: 90%;
  max-width: 600px;
  background: ${ 0 };
  color: ${ 0 };
`), j.default.White, j.default.Black);
}), d.register('9liBo', function(a, c) {
    b(a.exports, 'default', function() {
        return s;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('lf3yz'),
        i = d('TTKAH'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('h99Nu');
    let m, n, o, p, q = a => a,
        r = class extends k.Component {
            render() {
                return (0, g.jsxs)(u, {
                    children: [
                        (0, g.jsx)(v, {
                            src: this.getImage()
                        }),
                        (0, g.jsx)(w, {
                            children: this.getTitle()
                        }),
                        (0, g.jsx)(x, {
                            children: this.getDescription()
                        })
                    ]
                });
            }
            constructor(...a) {
                super(...a), (0, e.default)(this, 'getImage', () => {
                    const {
                        status: s
                    } = this.props.imposter;
                    return s === i.ImposterStatus.discussion ? (0, h.getAssetPath)('discussion.svg') : (0, h.getAssetPath)('vote.svg');
                }), (0, e.default)(this, 'getTitle', () => {
                    const {
                        status: s
                    } = this.props.imposter;
                    return s === i.ImposterStatus.discussion ? 'Discussion' : 'Vote';
                }), (0, e.default)(this, 'getDescription', () => {
                    const {
                        status: s
                    } = this.props.imposter;
                    return s === i.ImposterStatus.discussion ? 'Who is the impostor?' : 'Vote out who you think the impostor is!';
                });
            }
        };
    r = (0, f.__decorate)([
        (0, j.inject)('imposter'),
        j.observer
    ], r);
    var s = t;
    const u = l.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(m || (m = q``)),
        v = l.default.img(n || (n = q`
  max-width: 150px;
  margin-top: 15px;
`)),
        w = l.default.div(o || (o = q`
  margin-top: 10px;
  font-weight: bold;
  font-size: 50px;
`)),
        x = l.default.div(p || (p = q`
  font-size: 21px;
  color: rgba(0, 0, 0, 0.9);
`));
}), d.register('dW0cW', function(a, c) {
    b(a.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('VCvua0'),
        g = d('cJ4UC'),
        h = d('lf3yz'),
        i = d('TTKAH'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('h99Nu'),
        m = d('jh162'),
        n = d('xxcnb'),
        o = d('GQ1RD');
    let p;
    var q = (0, j.observer)(a => {
        const {
            imposter: r
        } = k.useContext(n.default);
        k.useEffect(() => {
            (0, h.send)(g.default.imposter.requestPeople);
        }, []);
        const {
            showAction: s,
            actionText: t,
            onSelect: u
        } = v, {
            epl: w,
            me: x
        } = y, z = (0, m.DecryptData)(w) || [];
        if (!x)
            return null;
        const A = x && x.role === i.PersonRole.imposter;
        return (0, e.jsx)(r, {
            children: z.filter(y => y.id !== x.id && (!y.votedOff && (!v.filter || v.filter(y)))).map(v => (0, e.jsx)(o.default, {
                name: v.name,
                nameColor: v.markedAsClear ? f.default.DarkSuccessGreen : v.role === i.PersonRole.imposter && A ? '#c62828' : f.default.Black,
                description: v.markedAsClear ? 'On the clear list' : v.role === i.PersonRole.imposter && A ? 'An Impostor' : void 0,
                button: s ? {
                    label: t,
                    onClick: () => u(v.id)
                } : null
            }, v.id))
        });
    });
    const r = l.default.div.attrs({
        className: 'maxWidth'
    })(p || (p = (a => a)``));
}), d.register('GQ1RD', function(a, c) {
    b(a.exports, 'default', function() {
        return o;
    });
    var e = d('8kSQZ'),
        f = d('h99Nu');
    d('uPP4W');
    var g = d('m96/N'),
        h = d('VCvua0');
    let i, j, k, l, m, n = a => a;
    var o = a => (0, e.jsxs)(p, {
        children: [
            (0, e.jsxs)(q, {
                children: [
                    (0, e.jsx)(r, {
                        style: {
                            color: a.nameColor || h.default.Black
                        },
                        children: a.name
                    }),
                    a.description && (0, e.jsx)(s, {
                        children: a.description
                    })
                ]
            }),
            a.button && (0, e.jsx)(t, {
                children: (0, e.jsx)(g.default, {
                    type: 'primary',
                    onClick: a.button.onClick,
                    label: a.button.label,
                    size: 'small'
                })
            })
        ]
    });
    const p = f.default.div.attrs({
            className: 'flex vc light-shadow'
        })(i || (i = n`
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
        q = f.default.div(j || (j = n``)),
        r = f.default.div(k || (k = n`
  font-size: 22px;
  font-weight: 500;
  overflow-wrap: anywhere;
`)),
        s = f.default.div(l || (l = n`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
`)),
        t = f.default.div(m || (m = n`
  flex-shrink: 0;
  margin-left: 10px;
`));
}), d.register('S/ldk', function(a, c) {
    b(a.exports, 'default', function() {
        return q;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('bPH7V'),
        i = d('ExtIT'),
        j = d('cJ4UC'),
        k = d('UNaEe'),
        l = d('lf3yz'),
        m = d('Vlfxs'),
        n = d('uPP4W'),
        o = d('dW0cW');
    let p = class extends n.Component {
        render() {
            const {
                me: q
            } = this.props.imposter;
            return q && q.currentVote ? (0, g.jsx)(h.default, {
                type: 'success',
                showIcon: !0,
                message: 'Voted!',
                description: 'Your vote is in!',
                style: {
                    textAlign: 'left',
                    marginTop: 20
                }
            }) : (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)('div', {
                        style: {
                            marginTop: 25,
                            marginBottom: 20
                        },
                        className: 'maxWidth',
                        children: (0, g.jsx)(i.default, {
                            children: '\uD83D\uDC69‍\uD83D\uDE80 People'
                        })
                    }),
                    (0, g.jsx)(o.default, {
                        showAction: !0,
                        actionText: 'Vote',
                        onSelect: this.vote
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'vote', a => {
                k.successClick.play(), (0, l.send)(j.default.imposter.vote, a);
            });
        }
    };
    p = (0, f.__decorate)([
        (0, m.inject)('imposter'),
        m.observer
    ], p);
    var q = r;
}), d.register('QV33B', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('8kSQZ'),
        f = d('G5sHI');
    d('uPP4W');
    var g = d('h99Nu');
    let h, i, j = a => a;
    var k = a => (0, e.jsx)(l, {
        children: (0, e.jsx)(m, {
            children: (0, e.jsx)(f.default, {
                text: a.text
            })
        })
    });
    const l = g.default.div.attrs({
            className: 'flex hc vc maxWidth maxHeight'
        })(h || (h = j``)),
        m = g.default.div(i || (i = j`
  background: rgba(97, 97, 97, 0.8);
  padding: 48px;
  border-radius: 8px;
  font-size: 22px;
  border-style: solid;
  border-color: #ff9800;
  border-width: 3px;
  margin: 30px;
`));
}), d.register('jiTxJ', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('FZ4Xx'),
        h = d('h99Nu'),
        i = d('VCvua0'),
        j = d('+gUQR'),
        k = d('lf3yz'),
        l = d('Vlfxs'),
        m = d('xxcnb'),
        n = d('YqceC');
    let o;
    var p = (0, l.observer)(() => {
        const {
            draw: {
                status: q
            }
        } = f.useContext(m.default);
        return (0, e.jsx)(q, {
            children: q === n.DrawStatus.drawing ? (0, e.jsx)(g.default, {}) : (0, e.jsx)(j.default, {})
        });
    });
    const q = h.default.div.attrs({
        className: 'maxWidth maxHeight'
    })(o || (o = (a => a)`
  font-family: ${ 0 };
  color: ${ 0 };
  background-color: #f1f2f3;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);

  background-size: 45px 45px;
  background-position: center;
`), () => (0, k.mainFontName)(), i.default.Black);
}), d.register('FZ4Xx', function(a, c) {
    b(a.exports, 'MOBILE_BREAKPOINT', function() {
        return r;
    }), b(a.exports, 'default', function() {
        return s;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('iVq7t'),
        i = d('nGf+a'),
        j = d('fTCUn'),
        k = d('Vlfxs'),
        l = d('xxcnb'),
        m = d('YqceC'),
        n = d('lf3yz'),
        o = d('cJ4UC'),
        p = d('UnUp5');
    let q;
    const r = 890;
    var s = (0, k.observer)(() => {
        var t;
        const {
            draw: u
        } = f.useContext(l.default), v = f.useRef(), [w, x] = f.useState(j.colors[0]), [y, z] = f.useState(j.sizes[1]), [A, B] = f.useState(), C = (null == u || null === (t = u.me) || void 0 === t ? void 0 : t.role) === m.DrawRole.drawer, D = f.useMemo(() => u.round.drawingBase64, []);
        f.useEffect(() => {
            const E = (0, p.reaction)(() => u.latestLine, E => {
                    var F;
                    E && !C && (null == v || null === (F = v.current) || void 0 === F || F.addLine(E));
                }),
                F = (0, p.reaction)(() => u.round.drawingBase64, E => {
                    var G;
                    E && !C && (null == v || null === (G = v.current) || void 0 === G || G.drawImage(E));
                }),
                G = (0, p.reaction)(() => u.shouldClearCanvas, E => {
                    E && C && (I(), u.shouldClearCanvas = !1);
                });
            return () => {
                E(), F(), G();
            };
        }, [C]);
        const E = f.useCallback(t => {
                C && (0, n.send)(o.default.draw.lineDrawn, t);
            }, [C]),
            F = f.useCallback(t => {
                C && (0, n.send)(o.default.draw.imageDrawn, t);
            }, [C]),
            G = f.useMemo(() => u.round.secondsLeft ? `${ u.round.secondsLeft } ${ (0, n.plural)('second', u.round.secondsLeft) } left...` : 'Time\'s up!', [u.round.secondsLeft]),
            H = !(!C || !u.round.secondsLeft),
            I = () => {
                v.current && C && v.current.clear();
            };
        return (0, e.jsxs)(t, {
            children: [
                (0, e.jsx)(h.default, {
                    canEdit: H,
                    color: w,
                    brushSize: y,
                    initialImage: D,
                    canvasRef: v,
                    emitLine: E,
                    emitImage: F,
                    term: u.round.term,
                    isDrawer: C,
                    drawerName: u.round.drawer.name,
                    revealText: u.round.revealText,
                    timeText: G,
                    secondsLeft: u.round.secondsLeft,
                    hidingTerm: A
                }),
                (0, e.jsx)(i.default, {
                    isDrawer: C,
                    setColor: x,
                    setBrushSize: z,
                    color: w,
                    brushSize: y,
                    undo: () => {
                        v.current && C && v.current.undo();
                    },
                    clear: I,
                    guessedCorrectly: u.me.answeredCorrectly,
                    secondsLeft: u.round.secondsLeft,
                    timeText: G,
                    term: u.round.term,
                    hidingTerm: A,
                    setHidingTerm: B
                })
            ]
        });
    });
    const t = g.default.div.attrs({
        className: 'maxWidth maxHeight flex'
    })(q || (q = (a => a)`
  align-items: stretch;
  @media (max-width: ${ 0 }px) {
    flex-direction: column;
  }
`), r);
}), d.register('iVq7t', function(a, c) {
    b(a.exports, 'default', function() {
        return w;
    });
    var e = d('8kSQZ'),
        f = d('CFzKE'),
        g = d('uPP4W'),
        h = d('h99Nu'),
        i = d('6Td6J'),
        j = d('U8PGt'),
        k = d('FZ4Xx'),
        l = d('PH1z8'),
        m = d('gSUVO');
    let n, o, p, q, r, s, t, u = a => a;
    const v = a => {
        const w = a.text.split('');
        return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)('span', {
                children: w.map((w, c) => {
                    const x = `letter-${ c }`;
                    return ' ' !== w || a.noTimeLeft ? (0, e.jsx)(g.Fragment, {
                        children: w
                    }, x) : (0, e.jsx)(g.Fragment, {
                        children: '\xA0\xA0\xA0'
                    }, x);
                })
            })
        });
    };
    var w = a => {
        const x = g.useRef(null),
            [y, z] = (0, j.default)(x),
            A = (0, l.useWindowWidth)(),
            B = Math.min(y / 4, z / 3),
            C = 4 * B,
            D = 3 * B,
            E = A < k.MOBILE_BREAKPOINT ? a.timeText : a.isDrawer ? 'You\'re drawing...' : null,
            F = a.isDrawer ? null : (0, e.jsxs)('span', {
                children: [
                    'Drawer: ',
                    (0, e.jsx)('b', {
                        children: a.drawerName
                    })
                ]
            });
        return (0, e.jsx)(x, {
            children: (0, e.jsxs)(y, {
                children: [
                    (0, e.jsxs)(z, {
                        children: [
                            E ? (0, e.jsx)(A, {
                                children: E
                            }) : null,
                            (0, e.jsx)(B, {
                                children: a.isDrawer ? a.hidingTerm ? 'Term Hidden' : a.term : (0, e.jsx)(v, {
                                    text: a.revealText,
                                    noTimeLeft: !a.secondsLeft
                                })
                            })
                        ]
                    }),
                    (0, e.jsx)(C, {
                        ref: x,
                        children: C && D ? (0, e.jsx)(i.HandDrawnDiv, {
                            style: {
                                width: C,
                                height: D
                            },
                            children: (0, e.jsx)(f.default, {
                                ref: a.canvasRef,
                                width: C,
                                height: D,
                                canEdit: a.canEdit,
                                color: a.color,
                                strokeWidth: a.brushSize,
                                emitLine: a.emitLine,
                                onLatestImage: a.emitImage,
                                initialImage: a.initialImage
                            })
                        }) : null
                    }),
                    F ? (0, e.jsx)(D, {
                        children: F
                    }) : null
                ]
            })
        });
    };
    const x = h.default.div(n || (n = u`
  flex: 1;
  overflow: hidden;
  @media (max-width: ${ 0 }px) {
    overflow: visible;
    height: 60vh;
  }
`), () => k.MOBILE_BREAKPOINT),
        y = h.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column vc'
        })(o || (o = u`
  padding: 20px;
  max-height: 100%;
  overflow: hidden;
  @media (max-width: ${ 0 }px) {
    padding: 20px 15px;
  }
`), () => k.MOBILE_BREAKPOINT),
        z = h.default.div.attrs({
            className: 'flex flex-column vc'
        })(p || (p = u`
  margin-bottom: 10px;
  @media (max-width: ${ 0 }px) {
    margin-bottom: 7px;
  }
`), () => k.MOBILE_BREAKPOINT),
        A = h.default.div(q || (q = u`
  font-size: 23px;
  @media (max-width: ${ 0 }px) {
    font-size: 18px;
  }
`), () => k.MOBILE_BREAKPOINT),
        B = h.default.div(r || (r = u`
  font-size: 41px;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    font-size: 32px;
  }
`), m.FontWeights.Bold, () => k.MOBILE_BREAKPOINT),
        C = h.default.div.attrs({
            className: 'flex hc vc maxWidth'
        })(s || (s = u`
  flex: 1;
  overflow: hidden;
`)),
        D = h.default.div(t || (t = u`
  margin-top: 15px;
  font-size: 19px;
  @media (max-width: ${ 0 }px) {
    display: none;
  }
`), () => k.MOBILE_BREAKPOINT);
}), d.register('6Td6J', function(a, c) {
    b(a.exports, 'HandDrawnDiv', function() {
        return g;
    });
    var e = d('VCvua0');
    let f;
    const g = d('h99Nu').default.div(f || (f = (a => a)`
  border: solid
    ${ 0 }px
    ${ 0 };
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  overflow: hidden;
  -webkit-transform: translateZ(0); // needed in Safari for some weird reason
`), a => void 0 !== a.borderWidth ? a.borderWidth : 3, e.default.Black);
}), d.register('U8PGt', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('uPP4W'),
        f = d('KBP3q'),
        g = d('vxwW1');
    var h = (a, b) => {
        const [i, j] = e.useState(() => {
            var k, l;
            const m = a && 'current' in a ? a.current : a;
            return m ? [
                m.offsetWidth,
                m.offsetHeight
            ] : [
                null !== (k = null == b ? void 0 : b.initialWidth) && void 0 !== k ? k : 0,
                null !== (l = null == b ? void 0 : b.initialHeight) && void 0 !== l ? l : 0
            ];
        });
        return (0, g.default)(() => {
            const k = a && 'current' in a ? a.current : a;
            k && j([
                k.offsetWidth,
                k.offsetHeight
            ]);
        }, [a]), (0, f.default)(a, a => {
            const k = a.target;
            j([
                k.offsetWidth,
                k.offsetHeight
            ]);
        }), i;
    };
}), d.register('KBP3q', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('tDeyh'),
        f = d('vxwW1'),
        g = d('X8LPJ'),
        h = d('wZuO1');
    let i;
    const j = () => i || (i = function() {
        const k = new Map(),
            l = new(0, e.default)((0, h.default)((l, c) => {
                var m;
                if (1 === l.length)
                    null === (m = k.get(l[0].target)) || void 0 === m || m(l[0], c);
                else
                    for (let n = 0; n < l.length; n++) {
                        var o;
                        null === (o = k.get(l[n].target)) || void 0 === o || o(l[n], c);
                    }
            }));
        return {
            observer: l,
            subscribe(c, d) {
                l.observe(c), k.set(c, d);
            },
            unsubscribe(c) {
                l.unobserve(c), k.delete(c);
            }
        };
    }());
    var k = function(a, b) {
        const l = j(),
            m = (0, g.default)(b);
        return (0, f.default)(() => {
            let n = !1;
            const o = a && 'current' in a ? a.current : a;
            if (o)
                return l.subscribe(o, (a, l) => {
                    n || m.current(a, l);
                }), () => {
                    n = !0, l.unsubscribe(o);
                };
        }, [
            a,
            l,
            m
        ]), l.observer;
    };
}), d.register('vxwW1', function(a, e) {
    b(a.exports, 'default', function() {
        return e;
    });
    var e = c(d('uPP4W'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), d.register('X8LPJ', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W');
    var f = a => {
        const g = e.useRef(a);
        return e.useEffect(() => {
            g.current = a;
        }), g;
    };
}), d.register('wZuO1', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = function(a) {
        var f = [],
            g = null,
            h = function() {
                for (var i = p.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = p[k];
                f = j, g || (g = requestAnimationFrame(function() {
                    g = null, a.apply(void 0, f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
}), d.register('PH1z8', function(a, c) {
    b(a.exports, 'useWindowWidth', function() {
        return r;
    });
    var e = d('WtdZG'),
        f = d('iYpge');
    const g = {},
        h = 'undefined' == typeof window ? null : window,
        i = () => [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ],
        j = (k = l) => {
            const {
                wait: m,
                leading: n,
                initialWidth: o = 0,
                initialHeight: p = 0
            } = q, [r, s] = (0, e.useDebounce)('undefined' == typeof document ? [
                o,
                p
            ] : i, m, n), t = () => s(i);
            return (0, f.default)(h, 'resize', t), (0, f.default)(h, 'orientationchange', t), r;
        },
        m = k => j(k)[0];
}), d.register('WtdZG', function(a, c) {
    b(a.exports, 'useDebounceCallback', function() {
        return g;
    }), b(a.exports, 'useDebounce', function() {
        return l;
    });
    var e = d('uPP4W'),
        f = d('X8LPJ');
    const g = (a, h = 100, i = !1) => {
            const j = (0, f.default)(a),
                k = e.useRef(),
                l = [
                    h,
                    i,
                    j
                ];

            function m() {
                k.current && clearTimeout(k.current), k.current = void 0;
            }

            function n() {
                k.current = void 0;
            }
            return e.useEffect(() => m, l), e.useCallback(function() {
                const o = p,
                    {
                        current: q
                    } = r;
                if (void 0 === q && i)
                    return r.current = setTimeout(n, h), j.current.apply(null, o);
                q && clearTimeout(q), r.current = setTimeout(() => {
                    r.current = void 0, j.current.apply(null, o);
                }, h);
            }, l);
        },
        j = (a, h, i) => {
            const k = e.useState(a);
            return [
                k[0],
                g(k[1], h, i)
            ];
        };
}), d.register('iYpge', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('uPP4W'),
        f = d('vxwW1');
    var g = function(a, b, c, d) {
        const h = e.useRef(c),
            i = e.useRef(d);
        (0, f.default)(() => {
            h.current = c, i.current = d;
        }), (0, f.default)(() => {
            const j = a && 'current' in a ? a.current : a;
            if (!j)
                return;
            let k = 0;

            function l(...a) {
                k || h.current.apply(this, a);
            }
            j.addEventListener(b, l);
            const m = i.current;
            return () => {
                k = 1, j.removeEventListener(b, l), m && m();
            };
        }, [
            a,
            b
        ]);
    };
}), d.register('nGf+a', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('h99Nu'),
        g = d('FZ4Xx'),
        h = d('fTCUn'),
        i = d('mn71Q');
    let j;
    var k = a => (0, e.jsx)(l, {
        children: a.isDrawer ? (0, e.jsx)(h.default, {
            setColor: a.setColor,
            setBrushSize: a.setBrushSize,
            clear: a.clear,
            undo: a.undo,
            color: a.color,
            brushSize: a.brushSize,
            timeText: a.timeText,
            hidingTerm: a.hidingTerm,
            setHidingTerm: a.setHidingTerm
        }) : (0, e.jsx)(i.default, {
            guessedCorrectly: a.guessedCorrectly,
            secondsLeft: a.secondsLeft,
            timeText: a.timeText,
            term: a.term
        })
    });
    const l = f.default.div.attrs({
        className: 'scroll-y flex flex-column'
    })(j || (j = (a => a)`
  flex-shrink: 0;
  width: 400px;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
  justify-content: space-between;
  @media (max-width: ${ 0 }px) {
    flex: 1;
    width: 100%;
  }
`), () => g.MOBILE_BREAKPOINT);
}), d.register('fTCUn', function(a, c) {
    b(a.exports, 'colors', function() {
        return u;
    }), b(a.exports, 'sizes', function() {
        return v;
    }), b(a.exports, 'default', function() {
        return w;
    });
    var e = d('8kSQZ'),
        f = d('gSUVO'),
        g = d('VCvua0'),
        h = d('UNaEe');
    d('uPP4W');
    var i = d('h99Nu'),
        j = d('FZ4Xx');
    let k, l, m, n, o, p, q, r, s = a => a;
    const t = '#7cb342',
        u = [
            g.default.Black,
            g.default.White,
            '#C1C1C1',
            '#EF130B',
            '#FF7100',
            '#FFE400',
            '#00CC00',
            '#00B2FF',
            '#231FD3',
            '#A300BA',
            '#D37CAA',
            '#A0522D'
        ],
        v = [
            5,
            10,
            20,
            40
        ];
    var w = a => (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsxs)(x, {
                children: [
                    (0, e.jsx)(y, {
                        children: 'Color'
                    }),
                    (0, e.jsx)(z, {
                        children: u.map(b => (0, e.jsx)(A, {
                            color: b,
                            selected: b === a.color,
                            onClick: () => {
                                h.pop.play(), a.setColor(b);
                            }
                        }, b))
                    }),
                    (0, e.jsx)(y, {
                        children: 'Brush Size'
                    }),
                    (0, e.jsx)(z, {
                        children: v.map(b => (0, e.jsx)(B, {
                            onClick: () => {
                                h.pop.play(), a.setBrushSize(b);
                            },
                            selected: b === a.brushSize,
                            children: (0, e.jsx)('div', {
                                style: {
                                    width: b,
                                    height: b,
                                    borderRadius: '50%',
                                    background: 'black'
                                }
                            })
                        }, `size-${ b }`))
                    }),
                    (0, e.jsx)(y, {
                        children: 'Tools'
                    }),
                    (0, e.jsxs)(z, {
                        children: [
                            (0, e.jsxs)(C, {
                                onClick: () => {
                                    h.pop.play(), a.undo();
                                },
                                children: [
                                    (0, e.jsx)(D, {
                                        className: 'fas fa-undo'
                                    }),
                                    ' Undo'
                                ]
                            }),
                            (0, e.jsxs)(C, {
                                onClick: () => {
                                    h.pop.play(), a.clear();
                                },
                                children: [
                                    (0, e.jsx)(D, {
                                        className: 'far fa-trash'
                                    }),
                                    ' Clear'
                                ]
                            }),
                            (0, e.jsxs)(C, {
                                onClick: () => {
                                    a.setHidingTerm(!a.hidingTerm);
                                },
                                children: [
                                    (0, e.jsx)(D, {
                                        className: a.hidingTerm ? 'fas fa-eye' : 'fas fa-eye-slash'
                                    }),
                                    ' ',
                                    a.hidingTerm ? 'Show Term' : 'Hide Term'
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, e.jsx)(E, {
                children: a.timeText
            })
        ]
    });
    const x = i.default.div(k || (k = s`
  padding: 20px;
`)),
        y = i.default.div(l || (l = s`
  font-weight: ${ 0 };
  font-size: 34px;
`), f.FontWeights.Bold),
        z = i.default.div.attrs({
            className: 'flex maxWidth wrap'
        })(m || (m = s`
  margin-top: 5px;
  margin-bottom: 15px;
`)),
        A = i.default.div(n || (n = s`
  background: ${ 0 };
  height: 50px;
  width: 50px;
  margin-right: 7px;
  margin-bottom: 7px;
  border-radius: 50%;
  border-style: solid;
  border-width: ${ 0 }px;
  border-color: ${ 0 };
  cursor: pointer;
  transition: transform 0.25s;
  will-change: transform;
  &:hover {
    transform: scale(1.05);
  }
`), a => a.color, a => a.selected ? 4 : 2, a => a.selected ? t : g.default.Black),
        B = i.default.div.attrs({
            className: 'flex hc vc'
        })(o || (o = s`
  height: 60px;
  width: 70px;
  margin-right: 7px;
  margin-bottom: 7px;
  border-radius: 3px;
  border-style: solid;
  border-width: ${ 0 }px;
  border-color: ${ 0 };
  cursor: pointer;
  transition: transform 0.25s;
  will-change: transform;
  &:hover {
    transform: scale(1.05);
  }
`), a => a.selected ? 4 : 2, a => a.selected ? t : g.default.Black),
        C = i.default.div.attrs({
            className: 'flex hc vc'
        })(p || (p = s`
  padding: 10px 20px;
  font-size: 20px;
  margin-right: 7px;
  margin-bottom: 7px;
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  border-color: ${ 0 };
  cursor: pointer;
  transition: transform 0.25s;
  will-change: transform;
  &:hover {
    transform: scale(1.05);
  }
`), g.default.Black),
        D = i.default.i(q || (q = s`
  margin-right: 10px;
`)),
        E = i.default.div(r || (r = s`
  border-top-style: solid;
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-width: 2px;
  padding: 20px;
  font-size: 16px;
  line-height: 1;
  margin-top: 30px;
  @media (max-width: ${ 0 }px) {
    display: none;
  }
`), () => j.MOBILE_BREAKPOINT);
}), d.register('mn71Q', function(a, c) {
    b(a.exports, 'default', function() {
        return w;
    });
    var e = d('8kSQZ'),
        f = d('IsmrL'),
        g = d('c6x8w'),
        h = d('uPP4W'),
        i = d('h99Nu'),
        j = d('lf3yz'),
        k = d('cJ4UC'),
        l = d('sih+9'),
        m = d('4/f+U'),
        n = d('Vlfxs'),
        o = d('xxcnb'),
        p = d('FZ4Xx');
    let q, r, s, t, u, v = a => a;
    var w = (0, n.observer)(a => {
        const x = h.useRef(null),
            [y, z] = h.useState(''),
            {
                gameOptions: {
                    modeOptions: A
                }
            } = h.useContext(o.default);
        h.useEffect(() => {
            a.guessedCorrectly && z('');
        }, [a.guessedCorrectly]), h.useEffect(() => {
            0 === a.secondsLeft && z('');
        }, [a.secondsLeft]);
        const B = h.useMemo(() => {
                const C = a.term.split('');
                return (0, m.uniq)(C.filter(a => {
                    return !(1 === (C = a).length && (' ' === C || '.' === C || ',' === C || !isNaN(Number(C)) || C.match(/[a-z]/i)));
                    var D;
                }));
            }, [a.term]),
            C = () => {
                y && !a.guessedCorrectly && ((0, j.send)(k.default.draw.guess, y), z(''));
            },
            D = !a.secondsLeft,
            E = a.guessedCorrectly ? 'You guessed correctly!' : D ? 'Time\'s up!' : 'Type your guess here!',
            F = a.guessedCorrectly || D;
        return (0, e.jsxs)(x, {
            children: [
                (0, e.jsx)(y, {
                    children: a.timeText
                }),
                (0, e.jsxs)(z, {
                    children: [
                        (0, e.jsx)(l.default, {}),
                        (0, e.jsxs)(A, {
                            children: [
                                B.length && A && A.symbolKeyboardEnabled ? (0, e.jsx)('div', {
                                    className: 'flex vc',
                                    style: {
                                        marginBottom: 10
                                    },
                                    children: B.map(a => (0, e.jsx)(f.default, {
                                        size: 'small',
                                        type: 'dashed',
                                        style: {
                                            marginRight: 5
                                        },
                                        disabled: F,
                                        onClick: () => {
                                            return e = a, y.length < 21 && z(`${ y }${ e }`), void(x.current && x.current.focus());
                                            var G;
                                        },
                                        children: a
                                    }, `non-traditional-${ a }`))
                                }) : null,
                                (0, e.jsxs)(B, {
                                    children: [
                                        (0, e.jsx)(g.default, {
                                            ref: x,
                                            autoFocus: !0,
                                            placeholder: E,
                                            size: 'large',
                                            value: y,
                                            onChange: a => {
                                                z(a.target.value);
                                            },
                                            onPressEnter: C,
                                            disabled: F,
                                            maxLength: 21
                                        }),
                                        (0, e.jsx)(f.default, {
                                            onClick: C,
                                            style: {
                                                marginLeft: 10
                                            },
                                            type: 'primary',
                                            size: 'large',
                                            disabled: F,
                                            children: 'Submit'
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    });
    const x = i.default.div.attrs({
            className: 'flex flex-column'
        })(q || (q = v`
  flex: 1;
  overflow: hidden;
`)),
        y = i.default.div(r || (r = v`
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 2px;
  padding: 20px;
  font-size: 16px;
  line-height: 1;
  @media (max-width: ${ 0 }px) {
    display: none;
  }
`), () => p.MOBILE_BREAKPOINT),
        z = i.default.div.attrs({
            className: 'flex flex-column'
        })(s || (s = v`
  flex: 1;
  padding: 0px 20px;
  overflow: hidden;
`)),
        A = i.default.div(t || (t = v`
  padding-bottom: 20px;
`)),
        B = i.default.div.attrs({
            className: 'flex'
        })(u || (u = v``));
}), d.register('sih+9', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('xxcnb'),
        h = d('Vlfxs'),
        i = d('UnUp5'),
        j = d('VCvua0'),
        k = d('G5sHI'),
        l = d('4/f+U'),
        m = d('h99Nu');
    let n;
    const o = a => {
        const {
            name: p,
            action: q,
            translateAllowed: r,
            nameColor: s,
            actionColor: t,
            important: u
        } = a.item, v = u && q && !p;
        return (0, e.jsxs)('div', {
            style: {
                fontSize: 17
            },
            children: [
                p && (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)('b', {
                            style: {
                                color: s || j.default.Black
                            },
                            children: p
                        }),
                        '\xA0'
                    ]
                }),
                q && (0, e.jsx)('span', {
                    style: {
                        color: t || j.default.Black,
                        fontWeight: v ? 'bold' : 'normal'
                    },
                    children: r ? (0, e.jsx)(k.default, {
                        text: q
                    }) : q
                })
            ]
        });
    };
    var p = (0, h.observer)(() => {
        const q = f.useRef(null),
            [r, s] = f.useState([]),
            {
                draw: t
            } = f.useContext(g.default),
            u = (0, l.debounce)(q => {
                s(r => [
                    ...r,
                    q
                ]);
            }, 200);
        return f.useEffect(() => {
            const v = (0, i.reaction)(() => t.latestFeedItem, v => {
                v && (v => {
                    v.important ? s(r => [
                        ...r,
                        v
                    ]) : u(v);
                })({
                    ...v,
                    id: Date.now().toString() + Math.random().toString()
                });
            });
            return () => v();
        }, []), f.useEffect(() => {
            q.current && (q.current.scrollTop = q.current.scrollHeight);
        }, [r.length]), (0, e.jsx)(q, {
            ref: q,
            children: (0, l.takeRight)(r, 60).map(q => (0, e.jsx)(o, {
                item: q
            }, `guess-item-${ q.id }`))
        });
    });
    const q = m.default.div.attrs({
        className: 'flex flex-column'
    })(n || (n = (a => a)`
  flex: 1;
  overflow: hidden;
  justify-content: flex-end;
  padding-bottom: 15px;
`));
}), d.register('+gUQR', function(a, c) {
    b(a.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('RalIG'),
        h = d('h99Nu'),
        i = d('CPo6i'),
        j = d('oZ18a'),
        k = d('pzuzs'),
        l = d('Vlfxs'),
        m = d('xxcnb'),
        n = d('YqceC');
    let o;
    var p = (0, l.observer)(() => {
        const {
            draw: q
        } = f.useContext(m.default);
        return (0, e.jsxs)(q, {
            children: [
                (0, e.jsx)(g.default, {}),
                q.status === n.DrawStatus.termSelection && (null == q || null === (b = q.me) || void 0 === b ? void 0 : b.role) === n.DrawRole.drawer ? (0, e.jsx)(j.default, {}) : q.status === n.DrawStatus.results ? (0, e.jsx)(k.default, {
                    additions: (null == q || null === (c = q.me) || void 0 === c ? void 0 : c.lastRound) || [],
                    isDrawer: (null == q || null === (d = q.me) || void 0 === d ? void 0 : d.role) === n.DrawRole.drawer
                }) : (0, e.jsx)(i.default, {})
            ]
        });
        var r, s, t;
    });
    const q = h.default.div.attrs({
        className: 'maxWidth maxHeight flex flex-column'
    })(o || (o = (a => a)``));
}), d.register('RalIG', function(a, c) {
    b(a.exports, 'default', function() {
        return m;
    });
    var e = d('8kSQZ'),
        f = d('VCvua0'),
        g = d('lf3yz'),
        h = d('xxcnb'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('h99Nu');
    let l;
    var m = (0, i.observer)(() => {
        const {
            balance: n
        } = j.useContext(h.default);
        return (0, e.jsx)(n, {
            children: (0, g.getMoney)(n.balance)
        });
    });
    const n = k.default.div.attrs({
        className: 'maxWidth flex'
    })(l || (l = (a => a)`
  padding: 10px 20px;
  background: #4252af;
  color: ${ 0 };
  justify-content: flex-end;
  font-size: 23px;
  font-weight: bold;
  box-shadow: 0 4px 8px -2px gray;
`), f.default.White);
}), d.register('CPo6i', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('8kSQZ'),
        f = d('G5sHI');
    d('uPP4W');
    var g = d('h99Nu');
    let h;
    var i = () => (0, e.jsx)(j, {
        children: (0, e.jsx)(f.default, {
            text: 'Waiting for round to begin...'
        })
    });
    const j = g.default.div.attrs({
        className: 'flex hc vc'
    })(h || (h = (a => a)`
  flex: 1;
  text-align: center;
  font-size: 38px;
  padding: 40px;
`));
}), d.register('oZ18a', function(a, c) {
    b(a.exports, 'default', function() {
        return w;
    });
    var e = d('8kSQZ'),
        f = d('ExtIT'),
        g = d('gSUVO'),
        h = d('VCvua0'),
        i = d('cJ4UC'),
        j = d('lf3yz'),
        k = d('G5sHI'),
        l = d('xxcnb'),
        m = d('Vlfxs'),
        n = d('uPP4W'),
        o = d('h99Nu'),
        p = d('6Td6J');
    let q, r, s, t, u, v = a => a;
    var w = (0, m.observer)(() => {
        const {
            draw: {
                round: {
                    termOptions: x
                }
            }
        } = n.useContext(l.default);
        return (0, e.jsx)(x, {
            children: (0, e.jsx)('div', {
                className: 'maxWidth flex hc',
                children: (0, e.jsxs)(y, {
                    children: [
                        (0, e.jsx)(z, {
                            children: (0, e.jsx)(k.default, {
                                text: 'You are this round\'s drawer!'
                            })
                        }),
                        (0, e.jsx)(A, {
                            children: (0, e.jsx)(k.default, {
                                text: 'Which term do you want to draw?'
                            })
                        }),
                        (0, e.jsx)(f.default, {}),
                        (0, e.jsx)('div', {
                            style: {
                                height: 7
                            }
                        }),
                        x.map(x => (0, e.jsx)(B, {
                            onClick: () => {
                                return b = x.id, (0, j.send)(i.default.draw.termSelected, b);
                                var y;
                            },
                            children: x.term
                        }, x.id))
                    ]
                })
            })
        });
    });
    const x = o.default.div.attrs({
            className: 'flex flex-column vc scroll-y'
        })(q || (q = v`
  flex: 1;
  padding: 40px 0px;
`)),
        y = (0, o.default)(p.HandDrawnDiv).attrs({
            className: 'animated fadeInDown'
        })(r || (r = v`
  width: 700px;
  max-width: 90%;
  padding: 35px;
  background: ${ 0 };
`), h.default.White),
        z = o.default.div(s || (s = v`
  font-size: 22px;
  color: #1b5e20;
`)),
        A = o.default.div(t || (t = v`
  font-size: 32px;
  font-weight: ${ 0 };
`), g.FontWeights.Bold),
        B = (0, o.default)(p.HandDrawnDiv).attrs({
            className: 'maxWidth'
        })(u || (u = v`
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
`));
}), d.register('pzuzs', function(a, c) {
    b(a.exports, 'default', function() {
        return v;
    });
    var e = d('8kSQZ'),
        f = d('VCvua0'),
        g = d('4/f+U');
    d('uPP4W');
    var h = d('h99Nu'),
        i = d('FZ4Xx'),
        j = d('YqceC'),
        k = d('G5sHI'),
        l = d('lf3yz');
    let m, n, o, p, q, r, s = a => a;
    const t = [
            'Don\'t worry, you\'ll get it next time!',
            'You must have drawn a blank.',
            'Being honest, even I couldn\'t tell what that was.',
            'Let\'s just pretend that didn\'t happen.',
            'You tried your best!',
            'Yeah, that wasn\'t an easy one.',
            'You were on the right track!',
            'We don\'t talk about it.',
            'You can still catch up!'
        ],
        u = (a, b) => a + b.amount;
    var v = a => {
        const w = a.additions.reduce(u, 0) || 0,
            x = w > 0;
        return (0, e.jsx)(w, {
            className: 'flex',
            correct: x,
            children: (0, e.jsx)(x, {
                children: (0, e.jsxs)(y, {
                    children: [
                        (0, e.jsx)(z, {
                            children: a.isDrawer && x ? (0, e.jsx)(k.default, {
                                text: 'Nice work!'
                            }) : `+ ${ (0, l.getMoney)(w) }`
                        }),
                        (0, e.jsx)(A, {
                            children: x ? (0, e.jsx)(e.Fragment, {
                                children: a.additions.map(a => {
                                    return (0, e.jsxs)(B, {
                                        children: [
                                            '+ ',
                                            (0, l.getMoney)(a.amount),
                                            ' ',
                                            (w = a.type, x = a.metadata, w === j.PointAdditionType.correct ? (0, e.jsx)(k.default, {
                                                text: 'for correct guess'
                                            }) : w === j.PointAdditionType.firstGuess ? (0, e.jsx)(k.default, {
                                                text: 'for correct first guess'
                                            }) : w === j.PointAdditionType.speed ? (0, e.jsx)(k.default, {
                                                text: 'for speed'
                                            }) : w === j.PointAdditionType.goodDrawer && x && 'number' == typeof x ? `for ${ x } ${ (0, l.plural)('person', x, 'people') } guessing your drawing correctly!` : '')
                                        ]
                                    }, a.type);
                                    var y, z;
                                })
                            }) : (0, e.jsx)(e.Fragment, {
                                children: (0, e.jsx)(B, {
                                    children: (0, e.jsx)(k.default, {
                                        text: a.isDrawer ? 'You tried your best!' : (0, g.sample)(t)
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        });
    };
    const w = h.default.div.attrs({
            className: 'scroll-y'
        })(m || (m = s`
  flex: 1;
  background: ${ 0 };
  color: ${ 0 };
`), a => a.correct ? 'rgba(56, 142, 60, 0.85)' : 'rgba(123, 31, 162, 0.85)', f.default.White),
        x = h.default.div(n || (n = s`
  margin: auto;
`)),
        y = h.default.div.attrs({
            className: 'flex flex-column vc'
        })(o || (o = s`
  margin: 40px;
  @media (max-width: ${ 0 }px) {
    margin: 30px;
  }
`), () => i.MOBILE_BREAKPOINT),
        z = h.default.div(p || (p = s`
  font-size: 70px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  @media (max-width: ${ 0 }px) {
    font-size: 55px;
  }
`), () => i.MOBILE_BREAKPOINT),
        A = h.default.div(q || (q = s``)),
        B = h.default.div(r || (r = s`
  font-size: 26px;
  @media (max-width: ${ 0 }px) {
    font-size: 22px;
  }
`), () => i.MOBILE_BREAKPOINT);
}), d.register('jOyMO', function(a, c) {
    b(a.exports, 'default', function() {
        return v;
    });
    var e = d('8kSQZ'),
        f = d('lmfrI'),
        g = d('uPP4W'),
        h = d('h99Nu'),
        i = d('gSUVO'),
        j = d('B7Zpf'),
        k = d('oVsaz'),
        l = d('CYXNn'),
        m = d('fsGDh'),
        n = d('wQcMA'),
        o = d('e/yx3'),
        p = d('SQBls'),
        q = d('Vlfxs'),
        r = d('xxcnb'),
        s = d('R6vGy'),
        t = d('OLHe3');
    let u;
    var v = (0, q.observer)(() => {
        const {
            pardy: w
        } = g.useContext(r.default);
        return (0, e.jsx)(w, {
            children: (() => {
                if (w.screen === s.PardyScreen.question) {
                    if (w.questionScreen === s.PardyQuestionScreen.finale)
                        return !w.currentBet || w.animatingBetScreenOut ? (0, e.jsx)(o.default, {}) : (0, e.jsx)(p.default, {});
                    if (w.questionStatus === s.PardyQuestionStatus.preview)
                        return (0, e.jsx)(l.default, {});
                    if (w.questionStatus === s.PardyQuestionStatus.ask || w.questionStatus === s.PardyQuestionStatus.timesUp)
                        return w.answered && !w.animatingQuestionScreenOut ? (0, e.jsx)(t.default, {}) : (0, e.jsx)(n.default, {
                            timesUp: w.questionStatus === s.PardyQuestionStatus.timesUp,
                            answered: w.answered
                        });
                }
                return w.answerResponseItems.length ? (0, e.jsx)(m.default, {
                    correct: w.answeredCorrectly,
                    reasons: w.answerResponseItems
                }) : (0, e.jsx)(k.default, {});
            })()
        });
    });
    const w = h.default.div.attrs({
        className: 'maxAll'
    })(u || (u = (a => a)`
  font-family: 'Londrina Solid', cursive;
  font-weight: ${ 0 };
  background: ${ 0 };
  color: ${ 0 };
  user-select: none;
`), i.FontWeights.Light, j.default.background, f.default.White);
}), d.register('B7Zpf', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = {
        background: '#0f1150',
        questionBackground: '#303f9f',
        answerResponseCorrect: '#2e7d32',
        answerResponseIncorrect: '#c62828'
    };
}), d.register('oVsaz', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('JW32H');
    var g = () => (0, e.jsx)(f.default, {
        message: 'Waiting for round to begin...'
    });
}), d.register('JW32H', function(a, c) {
    b(a.exports, 'default', function() {
        return l;
    });
    var e = d('8kSQZ'),
        f = d('gSUVO');
    d('uPP4W');
    var g = d('h99Nu');
    let h, i, j, k = a => a;
    var l = a => (0, e.jsx)(m, {
        children: (0, e.jsxs)(n, {
            children: [
                (0, e.jsx)('div', {
                    className: 'loader',
                    style: {
                        margin: 0
                    }
                }),
                (0, e.jsx)(o, {
                    children: a.message
                })
            ]
        })
    });
    const m = g.default.div.attrs({
            className: 'maxAll flex-center'
        })(h || (h = k``)),
        n = g.default.div.attrs({
            className: 'flex-center flex-column'
        })(i || (i = k`
  background: rgba(255, 255, 255, 0.15);
  padding: 50px;
  border-radius: 5px;
  margin: 30px;
  text-align: center;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    margin: 20px;
    padding: 35px;
  }
`), f.FontWeights.Normal, 650),
        o = g.default.div(j || (j = k`
  margin-top: 25px;
  font-size: 32px;
  @media (max-width: ${ 0 }px) {
    font-size: 20px;
    margin-top: 20px;
  }
`), 650);
}), d.register('CYXNn', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('JW32H');
    var g = () => (0, e.jsx)(f.default, {
        message: 'Get ready to answer!'
    });
}), d.register('fsGDh', function(a, c) {
    b(a.exports, 'default', function() {
        return x;
    });
    var e = d('8kSQZ'),
        f = d('lmfrI'),
        g = d('gSUVO'),
        h = d('uPP4W'),
        i = d('h99Nu'),
        j = d('b9Bct'),
        k = d('crxso'),
        l = d('/GvHq'),
        m = d('G5sHI'),
        n = d('B7Zpf'),
        o = d('Vlfxs'),
        p = d('xxcnb'),
        q = d('4/f+U');
    let r, s, t, u, v, w = a => a;
    var x = (0, o.observer)(a => {
        const {
            pardy: {
                correctWittyMessages: y,
                incorrectWittyMessages: z
            }
        } = h.useContext(p.default), [A, B] = h.useState(!1), {
            correct: C,
            reasons: D
        } = E, F = h.useMemo(() => (0, q.sample)(y), []), G = h.useMemo(() => (0, q.sample)(z), []);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(y, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.7
                    },
                    style: {
                        background: C ? n.default.answerResponseCorrect : n.default.answerResponseIncorrect
                    },
                    children: (0, e.jsxs)(z, {
                        initial: {
                            opacity: 0,
                            y: '-50%'
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.6,
                            ease: 'easeOut'
                        },
                        children: [
                            (0, e.jsx)(A, {
                                className: C ? 'fal fa-check-circle' : 'fal fa-times-circle'
                            }),
                            (0, e.jsx)(B, {
                                children: (0, e.jsx)(m.default, {
                                    text: (C ? 'Correct' : 'Incorrect') + '!'
                                })
                            }),
                            (0, e.jsx)(C, {
                                children: C ? F : G
                            }),
                            (0, e.jsx)('div', {
                                style: {
                                    height: 60
                                }
                            }),
                            (0, e.jsx)(l.default, {
                                reasons: D,
                                onReasonsAnimatedIn: () => {
                                    C && B(!0);
                                }
                            })
                        ]
                    })
                }),
                A ? (0, e.jsx)(k.default, {}) : null
            ]
        });
    });
    const y = (0, i.default)(j.motion.div).attrs({
            className: 'maxAll scroll-y'
        })(r || (r = w``)),
        z = (0, i.default)(j.motion.div).attrs({
            className: 'maxWidth flex-center flex-column'
        })(s || (s = w`
  min-height: 100%;
  padding: 40px 20px;
  text-align: center;
`)),
        A = i.default.i(t || (t = w`
  color: ${ 0 };
  font-size: 144px;
`), f.default.White),
        B = i.default.div(u || (u = w`
  font-weight: ${ 0 };
  font-size: 64px;
  margin-top: 10px;
`), g.FontWeights.Normal),
        C = i.default.div(v || (v = w`
  font-size: 22px;
`));
}), d.register('crxso', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('h99Nu'),
        g = d('4GmKU');
    let h;
    const i = {
            intensity: 4
        },
        j = {
            width: '100%',
            height: '100%'
        };
    var k = () => (0, e.jsx)(l, {
        children: (0, e.jsx)(g.Fireworks, {
            options: i,
            style: j
        })
    });
    const l = f.default.div.attrs({
        className: 'maxWidth maxHeight'
    })(h || (h = (a => a)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`));
}), d.register('/GvHq', function(a, c) {
    b(a.exports, 'default', function() {
        return l;
    });
    var e = d('8kSQZ'),
        f = d('lmfrI'),
        g = d('b9Bct');
    d('uPP4W');
    var h = d('h99Nu');
    let i, j, k = a => a;
    var l = a => (0, e.jsx)(m, {
        initial: 'hidden',
        animate: 'show',
        onAnimationComplete: a.onReasonsAnimatedIn,
        children: a.reasons.map(a => (0, e.jsx)(n, {
            children: a
        }, a))
    });
    const m = (0, h.default)(g.motion.div).attrs({
            className: 'maxWidth flex-center flex-column',
            variants: {
                hidden: {
                    opacity: 0
                },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.4,
                        delayChildren: 1.3
                    }
                }
            }
        })(i || (i = k``)),
        n = (0, h.default)(g.motion.div).attrs({
            className: 'maxWidth',
            variants: {
                hidden: {
                    opacity: 0,
                    scale: 0.4
                },
                show: {
                    opacity: 1,
                    scale: 1
                }
            },
            transition: {
                duration: 0.3,
                ease: 'easeOut'
            }
        })(j || (j = k`
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${ 0 };
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  font-size: 24px;
`), f.default.White);
}), d.register('wQcMA', function(a, c) {
    b(a.exports, 'default', function() {
        return t;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('CcYOR'),
        g = d('h99Nu'),
        h = d('AsIEN'),
        i = d('b9Bct'),
        j = d('B7Zpf'),
        k = d('lmfrI'),
        l = d('gSUVO'),
        m = d('4JvRz');
    let n, o, p, q, r = a => a;
    const s = () => (0, e.jsx)(w, {
        children: (0, e.jsx)(x, {
            children: (0, e.jsx)(m.default, {
                text: 'Time\'s Up!',
                max: 80,
                noBold: !0,
                paddingHorizontal: '10%'
            })
        })
    });
    var t = a => (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsx)(u, {
                initial: {
                    background: j.default.background
                },
                animate: {
                    background: j.default.questionBackground
                },
                transition: {
                    duration: 1.2,
                    ease: 'easeOut'
                },
                children: (0, e.jsx)(v, {
                    initial: {
                        opacity: 0,
                        y: '100%'
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        ease: 'easeOut'
                    },
                    children: (0, e.jsx)(f.default, {})
                })
            }),
            a.timesUp && !a.answered ? (0, e.jsx)(s, {}) : null
        ]
    });
    const u = (0, g.default)(i.motion.div).attrs({
            className: 'maxAll'
        })(n || (n = r``)),
        v = (0, g.default)(i.motion.div).attrs({
            className: 'maxAll'
        })(o || (o = r`
  font-family: ${ 0 };
  overflow: hidden;
  color: ${ 0 };
`), h.default.mainFontName, k.default.Black),
        w = g.default.div.attrs({
            className: 'maxAll flex-center animated fadeIn'
        })(p || (p = r`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`)),
        x = g.default.div.attrs({
            className: 'medium-shadow animated jackInTheBox'
        })(q || (q = r`
  background: ${ 0 };
  color: ${ 0 };
  width: 80%;
  max-width: 700px;
  height: 40%;
  max-height: 240px;
  font-weight: ${ 0 };
  border-radius: 10px;
  border: 3px solid;
  animation-delay: 0.5;
`), j.default.questionBackground, k.default.White, l.FontWeights.Normal);
}), d.register('CcYOR', function(a, c) {
    b(a.exports, 'default', function() {
        return o;
    });
    var e = d('8kSQZ'),
        f = d('lmfrI'),
        g = d('cJ4UC'),
        h = d('UNaEe'),
        i = d('lf3yz'),
        j = d('xxcnb'),
        k = d('OK62W'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('jh162');
    var o = (0, l.observer)(() => {
        const [p, q] = m.useState(!1), {
            user: r,
            pardy: s
        } = m.useContext(j.default);
        m.useEffect(() => (s.animatingQuestionScreenOut = !1, () => s.animatingQuestionScreenOut = !1), []);
        const t = s.currentQuestion;
        return p && !s.animatingQuestionScreenOut ? null : t ? (0, e.jsx)(k.default, {
            ecc: (0, n.EncryptData)(t, t._id),
            onQuestionAnswered: p => (h.click.play(), q(!0), s.animatingQuestionScreenOut = !0, (0, i.send)(g.default.questionAnswered, {
                questionId: s.currentQuestion._id,
                answer: p
            }), !1),
            beforeOpenAnswerResponse: () => {
                s.animatingQuestionScreenOut = !1;
            },
            readToMeEnabled: r.readToMeEnabled,
            questionColor: {
                background: 'transparent',
                text: f.default.White
            },
            defaultBackgroundColor: 'transparent',
            blockKeyboardEvents: !0
        }) : null;
    });
}), d.register('e/yx3', function(a, c) {
    b(a.exports, 'default', function() {
        return C;
    });
    var e = d('8kSQZ'),
        f = d('IsmrL'),
        g = d('ExtIT'),
        h = d('TNIOj'),
        i = d('lmfrI'),
        j = d('gSUVO'),
        k = d('RBz1q'),
        l = d('cJ4UC'),
        m = d('lf3yz'),
        n = d('xxcnb'),
        o = d('b9Bct'),
        p = d('Vlfxs'),
        q = d('uPP4W'),
        r = d('h99Nu'),
        s = d('B7Zpf');
    let t, u, v, w, x, y, z, A = a => a;
    const B = 700;
    var C = (0, p.observer)(() => {
        const {
            pardy: D
        } = q.useContext(n.default), [E, F] = q.useState(0), [G, H] = q.useState(!1), I = D.maxBet, J = () => {
            if (!E)
                return;
            const K = Math.max(1, Math.min(E, I));
            (0, m.send)(l.default.pardy.setBet, K), D.animatingBetScreenOut = !0, D.currentBet = K, r();
        }, K = () => H(!0);
        return (0, e.jsx)(k.default, {
            children: (0, e.jsx)(D, {
                initial: {
                    background: 'rgba(0,0,0,0)'
                },
                animate: {
                    background: G ? s.default.background : 'rgba(0,0,0,0)'
                },
                transition: {
                    duration: 0.7
                },
                children: (0, e.jsx)(E, {
                    children: (0, e.jsxs)(F, {
                        initial: {
                            opacity: 0,
                            y: 50,
                            scale: 0.8,
                            x: 0
                        },
                        animate: G ? {
                            opacity: 0,
                            y: 0,
                            scale: 1,
                            x: '-100%'
                        } : {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.7
                        },
                        onAnimationComplete: () => {
                            D.animatingBetScreenOut = !1;
                        },
                        children: [
                            (0, e.jsx)(G, {
                                children: 'The Finale'
                            }),
                            (0, e.jsx)(H, {
                                children: 'Place Your Bet!'
                            }),
                            (0, e.jsxs)('div', {
                                className: 'flex maxWidth vc',
                                children: [
                                    (0, e.jsx)('div', {
                                        style: {
                                            fontSize: 26,
                                            marginRight: 10
                                        },
                                        children: '$'
                                    }),
                                    (0, e.jsx)(h.default, {
                                        size: 'large',
                                        placeholder: '1,000',
                                        min: 1,
                                        max: I,
                                        autoFocus: !0,
                                        formatter: D => {
                                            if (!D)
                                                return '';
                                            let L = 1;
                                            return L = Number(D), isNaN(L) && (L = 1), L = Math.max(1, Math.min(L, I)), (0, m.numberWithCommas)(L);
                                        },
                                        parser: D => Number(D.replace(',', '')),
                                        onChange: F,
                                        style: {
                                            width: '100%',
                                            height: 55,
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: i.default.White,
                                            fontSize: 26,
                                            background: 'rgba(0,0,0,0.2)'
                                        },
                                        step: 1,
                                        onPressEnter: J
                                    })
                                ]
                            }),
                            (0, e.jsx)(g.default, {
                                style: {
                                    margin: '40px 0px'
                                }
                            }),
                            (0, e.jsxs)(I, {
                                children: [
                                    (0, e.jsxs)(J, {
                                        children: [
                                            'Max Bet: ',
                                            (0, m.getMoney)(I)
                                        ]
                                    }),
                                    (0, e.jsx)(f.default, {
                                        size: 'large',
                                        type: 'primary',
                                        style: {
                                            height: 50,
                                            width: 200
                                        },
                                        onClick: J,
                                        children: 'Place Bet'
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        });
    });
    const D = (0, r.default)(o.motion.div).attrs({
            className: 'maxAll scroll-y'
        })(t || (t = A``)),
        E = r.default.div.attrs({
            className: 'maxWidth flex-center'
        })(u || (u = A`
  min-height: 100%;
  padding: 30px 0px;
`)),
        F = (0, r.default)(o.motion.div).attrs({
            className: 'flex-column flex-center medium-shadow'
        })(v || (v = A`
  background: rgba(255, 255, 255, 0.1);
  color: ${ 0 };
  padding: 60px 70px;
  border-radius: 5px;
  width: 90%;
  max-width: 700px;
  text-shadow: 0px 2px 2px ${ 0 };
  border: 4px solid #fffde7;
  text-align: center;
  @media (max-width: ${ 0 }px) {
    padding: 40px 30px;
  }
  .ant-input-number-input-wrap {
    width: 100%;
  }
`), i.default.White, i.default.Black, B),
        G = r.default.div(w || (w = A`
  text-shadow: 0px 3px 3px ${ 0 };
  text-transform: uppercase;
  font-weight: ${ 0 };
  font-size: 72px;
  line-height: 1;
  margin-bottom: 10px;
  @media (max-width: ${ 0 }px) {
    font-size: 64px;
    margin-bottom: 10px;
  }
`), i.default.Black, j.FontWeights.UltraBold, B),
        H = r.default.div(x || (x = A`
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`), j.FontWeights.Normal, B),
        I = r.default.div.attrs({
            className: 'flex maxWidth vc between'
        })(y || (y = A`
  @media (max-width: ${ 0 }px) {
    flex-direction: column;
  }
`), B),
        J = r.default.div(z || (z = A`
  font-size: 18px;
  @media (max-width: ${ 0 }px) {
    margin-bottom: 10px;
  }
`), B);
}), d.register('SQBls', function(a, c) {
    b(a.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('lf3yz'),
        h = d('xxcnb'),
        i = d('iMnBi'),
        j = d('b9Bct'),
        k = d('Vlfxs'),
        l = d('h99Nu');
    let m, n, o, p, q = a => a;
    var r = (0, k.observer)(() => {
        const {
            pardy: {
                currentBet: s
            }
        } = f.useContext(h.default);
        return (0, e.jsx)(s, {
            children: (0, e.jsxs)(t, {
                children: [
                    (0, e.jsx)(u, {}),
                    (0, e.jsxs)(v, {
                        children: [
                            'Your bet of ',
                            (0, e.jsx)('b', {
                                children: (0, g.getMoney)(s)
                            }),
                            ' is in!'
                        ]
                    })
                ]
            })
        });
    });
    const s = l.default.div.attrs({
            className: 'maxAll flex-center'
        })(m || (m = q``)),
        t = (0, l.default)(j.motion.div).attrs({
            className: 'flex-center flex-column',
            initial: {
                opacity: 0,
                x: '100%'
            },
            animate: {
                opacity: 1,
                x: 0
            },
            transition: {
                duration: 0.7
            }
        })(n || (n = q`
  background: rgba(255, 255, 255, 0.15);
  padding: 50px;
  border-radius: 5px;
  margin: 30px;
  text-align: center;
`)),
        u = (0, l.default)(i.default).attrs({
            name: 'fas fa-check',
            className: 'animated pulse infinite'
        })(o || (o = q`
  font-size: 64px;
  margin-bottom: 25px;
`)),
        v = l.default.div(p || (p = q`
  font-size: 32px;
`));
}), d.register('iMnBi', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = a => (0, e.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), d.register('OLHe3', function(a, c) {
    b(a.exports, 'default', function() {
        return x;
    });
    var e = d('8kSQZ'),
        f = d('gSUVO'),
        g = d('lf3yz'),
        h = d('xxcnb'),
        i = d('b9Bct'),
        j = d('4/f+U'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('h99Nu'),
        n = d('B7Zpf');
    let o, p, q, r, s, t, u, v = a => a;
    const w = 650;
    var x = (0, k.observer)(() => {
        const {
            pardy: {
                tips: y,
                answerLockedInWittyMessages: z
            }
        } = l.useContext(h.default), A = l.useMemo(() => (0, j.sample)(z), []), B = l.useMemo(() => (0, j.sample)(y), []);
        return (0, e.jsxs)(y, {
            initial: {
                background: n.default.questionBackground
            },
            animate: {
                background: n.default.background
            },
            transition: {
                duration: 1.3
            },
            children: [
                (0, e.jsxs)(z, {
                    children: [
                        (0, e.jsx)(A, {}),
                        (0, e.jsx)(B, {
                            children: 'Answer locked in!'
                        }),
                        (0, e.jsx)(C, {
                            children: A
                        })
                    ]
                }),
                (0, e.jsx)(D, {
                    children: (0, e.jsx)(E, {
                        initial: {
                            y: '100%'
                        },
                        animate: {
                            y: 0
                        },
                        transition: {
                            duration: 1.5,
                            delay: 3
                        },
                        dangerouslySetInnerHTML: {
                            __html: B
                        }
                    })
                })
            ]
        });
    });
    const y = (0, m.default)(i.motion.div).attrs({
            className: 'maxAll flex-center'
        })(o || (o = v``)),
        z = m.default.div.attrs({
            className: 'flex-center flex-column animated jackInTheBox'
        })(p || (p = v`
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  @media (max-width: ${ 0 }px) {
    padding: 40px 20px;
  }
`), w),
        A = m.default.img.attrs({
            src: (0, g.getAssetPath)('lock.svg'),
            className: 'animated pulse infinite'
        })(q || (q = v`
  height: 120px;
  animation-duration: 3s;
  @media (max-width: ${ 0 }px) {
    height: 100px;
  }
`), w),
        B = m.default.div(r || (r = v`
  font-size: 52px;
  margin-top: 15px;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    font-size: 36px;
    margin-top: 10px;
  }
`), f.FontWeights.Normal, w),
        C = m.default.div(s || (s = v`
  font-size: 22px;
  margin-top: 10px;
  @media (max-width: ${ 0 }px) {
    font-size: 14px;
    margin-top: 8px;
  }
`), w),
        D = m.default.div.attrs({
            className: 'maxAll flex hc'
        })(t || (t = v`
  position: absolute;
  top: 0;
  left: 0;
  align-items: flex-end;
  pointer-events: none;
`)),
        E = (0, m.default)(i.motion.div)(u || (u = v`
  padding: 15px;
  width: 90%;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  font-size: 18px;
  @media (max-width: ${ 0 }px) {
    font-size: 14px;
    padding: 12px;
  }
`), w);
}), d.register('DwPm0', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('8kSQZ'),
        f = d('fgVTE0'),
        g = d('lmfrI');
    d('uPP4W');
    var h = d('QyyBz');
    var i = () => (0, e.jsx)(h.BackgroundContainer, {
        children: (0, e.jsx)(f.default, {
            style: {
                color: g.default.White
            },
            size: 48
        })
    });
}), d.register('E7D7Y', function(a, c) {
    b(a.exports, 'default', function() {
        return K;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('b9Bct'),
        i = d('VCvua0'),
        j = d('5WRxN'),
        k = d('lf3yz'),
        l = d('gSUVO'),
        m = d('ExtIT'),
        n = d('4/f+U'),
        o = d('Vlfxs'),
        p = d('xxcnb');
    d('/jgct');
    var q = d('k8riP'),
        r = d('qA0vg'),
        s = d('cJ4UC'),
        t = d('PDLD/2'),
        u = d('6yrsF'),
        v = d('G5sHI'),
        w = d('PjB0f');
    let x, y, z, A, B, C, D, E, F = a => a;
    const G = 800,
        H = 700,
        I = a => (0, e.jsx)(S, {
            background: a.color,
            onClick: a.select,
            children: a.num
        }),
        J = a => {
            const K = new(0, u.Howl)({
                    src: [(0, k.getAssetPath)('numberSwitch.mp3')]
                }),
                L = new(0, u.Howl)({
                    src: [(0, k.getAssetPath)('numberLogo.mp3')]
                }),
                M = new(0, u.Howl)({
                    src: [(0, k.getAssetPath)('numberSuccess.mp3')]
                }),
                N = new(0, u.Howl)({
                    src: [(0, k.getAssetPath)('numberError.mp3')]
                }),
                [O] = f.useState((0, n.shuffle)(Array.from(Array(9).keys()).map(a => a + 1))),
                [P, Q] = f.useState(1),
                [R, S] = f.useState(!1),
                [T, U] = f.useState(!1);
            f.useEffect(() => {
                (0, w.loadFont)('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap'), L.play();
            }, []);
            const V = a => R ? '#ffebee' : a < P ? '#c8e6c9' : '#fff8e1';
            return (0, e.jsx)(L, {
                children: (0, e.jsx)(M, {
                    animate: {
                        opacity: T ? 0 : 1
                    },
                    transition: {
                        duration: 0.8
                    },
                    initial: {
                        opacity: 0
                    },
                    children: (0, e.jsxs)(N, {
                        animate: {
                            opacity: T ? 0 : 1,
                            y: T ? 20 : 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        children: [
                            (0, e.jsx)(O, {}),
                            (0, e.jsx)(P, {
                                children: (0, e.jsx)(v.default, {
                                    text: 'Outnumbered'
                                })
                            }),
                            (0, e.jsxs)(Q, {
                                children: [
                                    'by ',
                                    a.name,
                                    '.'
                                ]
                            }),
                            (0, e.jsx)(m.default, {}),
                            (0, e.jsx)(R, {
                                children: O.map(L => (0, e.jsx)(I, {
                                    num: L,
                                    color: V(L),
                                    select: () => (L => {
                                        10 !== P && (L !== P ? (Q(1), S(!0), N.play(), setTimeout(() => {
                                            S(!1);
                                        }, 1000)) : (Q(L + 1), S(!1), 9 === L ? (setTimeout(() => {
                                            U(!0);
                                        }, 350), setTimeout(() => {
                                            a.onFinish();
                                        }, 1200), M.play()) : K.play()));
                                    })(L)
                                }, `numblock-${ L }`))
                            })
                        ]
                    })
                })
            });
        };
    var K = (0, o.observer)(() => {
        var L;
        const {
            powerups: M,
            gameValues: N
        } = f.useContext(p.default);
        return (null == M || null === (L = M.screenAttack) || void 0 === L ? void 0 : L.powerupName) !== q.PowerupNames.outnumbered || N.gameStatus !== t.GameStatus.gameplay || N.nonDismissMessage.title ? null : (0, e.jsx)(J, {
            name: M.screenAttack.attackerName,
            onFinish: () => {
                M.screenAttack = {
                    powerupName: '',
                    attackerName: '',
                    fullScreen: !1
                }, (0, k.send)(s.default.outnumberedComplete);
            }
        });
    });
    const L = g.default.div.attrs({
            className: 'maxWidth maxHeight'
        })(x || (x = F`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
`)),
        M = (0, g.default)(h.motion.div).attrs({
            className: 'maxWidth maxHeight flex hc vc'
        })(y || (y = F`
  background: rgba(0, 0, 0, 0.35);
`)),
        N = (0, g.default)(h.motion.div).attrs({
            className: 'flex flex-column hc vc'
        })(z || (z = F`
  padding: 60px;
  color: ${ 0 };
  background: ${ 0 };
  border-radius: 5px;
  box-shadow: ${ 0 };
  @media (max-width: ${ 0 }px),
    (max-height: ${ 0 }px) {
    padding: 35px;
  }
  @media (max-width: 550px) {
    padding: 25px;
  }
`), i.default.Black, i.default.White, j.default.basic, G, H),
        O = g.default.img.attrs({
            src: (0, k.getAssetPath)('numbers.svg'),
            alt: 'number blocks'
        })(A || (A = F`
  height: 125px;
  @media (max-width: ${ 0 }px),
    (max-height: ${ 0 }px) {
    height: 110px;
  }
  @media (max-width: 550px) {
    height: 80px;
  }
`), G, H),
        P = g.default.div(B || (B = F`
  font-size: 48px;
  font-weight: ${ 0 };
  margin-top: 12px;
  text-transform: uppercase;
  font-family: 'Dela Gothic One', '${ 0 }';
  @media (max-width: ${ 0 }px),
    (max-height: ${ 0 }px) {
    font-size: 30px;
    margin-top: 10px;
  }
  @media (max-width: 550px) {
    font-size: 24px;
    margin-top: 8px;
  }
`), l.FontWeights.Bold, r.default.mainFontName, G, H),
        Q = g.default.div(C || (C = F`
  font-size: 21px;
  @media (max-width: ${ 0 }px),
    (max-height: ${ 0 }px) {
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
  }
`), G, H),
        R = g.default.div(D || (D = F`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    '. . .'
    '. . .'
    '. . .';
`)),
        S = g.default.div.attrs({
            className: 'flex hc vc'
        })(E || (E = F`
  width: 90px;
  height: 75px;
  border: 2px solid black;
  border-radius: 4px;
  font-weight: ${ 0 };
  font-size: 20px;
  background: ${ 0 };
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 550px) {
    width: 70px;
  }
  @media (max-height: 450px) {
    height: 50px;
  }
`), l.FontWeights.Bold, a => a.background);
}), d.register('ChzM0', function(a, c) {
    b(a.exports, 'default', function() {
        return y;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('E1Ead'),
        h = d('h99Nu'),
        i = d('gSUVO'),
        j = d('lmfrI'),
        k = d('B7Zpf'),
        l = d('ExtIT'),
        m = d('1OOAO'),
        n = d('Vlfxs'),
        o = d('xxcnb'),
        p = d('3kESF'),
        q = d('M8YtH');
    let r, s, t, u, v = a => a;
    const w = [
            q.default.waiting,
            q.default.pardyMode
        ],
        x = (0, n.observer)(() => {
            const {
                pardy: y,
                navigation: {
                    currentRoute: z
                }
            } = f.useContext(o.default), A = f.useMemo(() => !(y.power || !w.includes(z) || !y.powers.length || !y.powerOptions.length), [
                y.power,
                z,
                y.powers.length,
                y.powerOptions.length
            ]);
            return (0, e.jsx)(g.default, {
                open: A,
                close: () => !1,
                customWidth: '700px',
                customMaxWidth: '95%',
                customPadding: '0px',
                customStyle: {
                    border: `3px solid ${ j.default.White }`
                },
                children: (0, e.jsxs)(z, {
                    children: [
                        (0, e.jsxs)(A, {
                            children: [
                                (0, e.jsx)(B, {
                                    children: 'Pick Your'
                                }),
                                (0, e.jsx)(C, {
                                    children: 'Power!'
                                })
                            ]
                        }),
                        (0, e.jsx)(l.default, {
                            style: {
                                margin: '30px 0px'
                            }
                        }),
                        y.powers.filter(z => y.powerOptions.includes(z.id)).map(y => (0, e.jsx)(m.default, {
                            id: y.id,
                            name: y.name,
                            image: y.image,
                            description: y.description,
                            background: y.background
                        }, y.id))
                    ]
                })
            });
        });
    var y = (0, n.observer)(() => {
        const {
            gameOptions: {
                specialGameType: z
            }
        } = f.useContext(o.default);
        return z && z.includes(p.PARDY) ? (0, e.jsx)(x, {}) : null;
    });
    const z = h.default.div.attrs({
            className: 'maxWidth'
        })(r || (r = v`
  padding: 40px;
  background: ${ 0 };
  color: ${ 0 };
  font-family: 'Londrina Solid', cursive;
  font-weight: ${ 0 };
`), k.default.background, j.default.White, i.FontWeights.Light),
        A = h.default.div.attrs({
            className: 'maxWidth flex-column flex-center'
        })(s || (s = v`
  text-transform: uppercase;
  line-height: 1;
  text-shadow: 0px 3px 3px ${ 0 };
`), j.default.Black),
        B = h.default.div(t || (t = v`
  font-size: 42px;
`)),
        C = h.default.div(u || (u = v`
  font-size: 84px;
  font-weight: ${ 0 };
`), i.FontWeights.Bold);
}), d.register('1OOAO', function(a, c) {
    b(a.exports, 'default', function() {
        return s;
    });
    var e = d('8kSQZ'),
        f = d('lmfrI'),
        g = d('gSUVO'),
        h = d('cJ4UC'),
        i = d('lf3yz'),
        j = d('m96/N');
    d('uPP4W');
    var k = d('h99Nu');
    let l, m, n, o, p, q, r = a => a;
    var s = a => (0, e.jsxs)(t, {
        children: [
            (0, e.jsx)(u, {
                style: {
                    background: a.background
                },
                children: (0, e.jsx)(v, {
                    src: a.image
                })
            }),
            (0, e.jsxs)(w, {
                children: [
                    (0, e.jsx)(x, {
                        children: a.name
                    }),
                    (0, e.jsx)(y, {
                        children: a.description
                    }),
                    (0, e.jsx)(j.default, {
                        type: 'primary',
                        style: {
                            width: 250
                        },
                        size: 'small',
                        label: 'Select',
                        onClick: () => {
                            (0, i.send)(h.default.pardy.setPower, a.id);
                        }
                    })
                ]
            })
        ]
    });
    const t = k.default.div.attrs({
            className: 'maxWidth medium-shadow'
        })(l || (l = r`
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 3px solid #90a4ae;
  color: ${ 0 };
  background: ${ 0 };
  text-align: center;
`), f.default.Black, f.default.White),
        u = k.default.div.attrs({
            className: 'maxWidth flex-center'
        })(m || (m = r`
  height: 80px;
`)),
        v = k.default.img(n || (n = r`
  height: 42px;
  filter: drop-shadow(2px 2px 2px #222);
`)),
        w = k.default.div.attrs({
            className: 'maxWidth flex-column flex-center'
        })(o || (o = r`
  padding: 20px;
  background: #f5f5f5;
`)),
        x = k.default.div(p || (p = r`
  font-weight: ${ 0 };
  font-size: 34px;
`), g.FontWeights.Normal),
        y = k.default.div(q || (q = r`
  font-size: 18px;
  margin-bottom: 15px;
`));
}), d.register('TTju3', function(a, c) {
    b(a.exports, 'default', function() {
        return g;
    });
    var e = d('PjB0f'),
        f = d('L7XMv');
    var g = async a => {
        const {
            serverUrl: h,
            roomId: i,
            intentId: j
        } = k, l = {
            intent: j
        };
        (0, e.isLoggedIn)() && (l.authToken = (0, e.getUser)().token), (0, f.default)({
            joinOptions: {
                serverUrl: h,
                roomId: i,
                options: l
            },
            disposeOnError: !1
        });
    };
}), d.register('L7XMv', function(a, c) {
    b(a.exports, 'default', function() {
        return i;
    });
    var e = d('+KLzG'),
        f = d('rlYg5'),
        g = d('qpV7r'),
        h = d('SsxYH');
    var i = a => {
        const {
            joinOptions: j,
            createOptions: k
        } = l;
        if (!j && !k)
            return;
        const m = () => {
            f.default.engine.attemptingToConnect = !1, f.default.engine.hasConnected = !1, f.default.engine.connected = !1, f.default.engine.connectionError = !1, f.default.engine.joinedRoom = !1, f.default.engine.attemptingToJoinRoom = !1, f.default.engine.errorJoiningRoom = !1, f.default.engine.roomError = null;
        };
        m(), f.default.engine.attemptingToConnect = !0;
        const n = new(0, e.Client)(j ? j.serverUrl : k.serverUrl, {
                transports: ['websocket'],
                clientIdSuffix: '-play'
            }),
            o = n.onConnectError.add(j => {
                console.log({
                    connectionError: j
                }), l.onConnectError && l.onConnectError(j), l.disposeOnError && m(), f.default.engine.connectionError = !0, f.default.engine.attemptingToConnect = !1;
            });
        n.onConnect.add(() => {
            o(), f.default.engine.client = n, f.default.engine.connected = !0, f.default.engine.hasConnected = !0, f.default.engine.attemptingToConnect = !1, f.default.engine.attemptingToJoinRoom = !0, n.onConnectError.add(() => {
                f.default.engine.connectionError = !0;
            }), n.onConnect.add(() => {
                f.default.engine.connected = !0, f.default.engine.connectionError = !1, f.default.engine.attemptingToConnect = !1, f.default.engine.attemptingToJoinRoom = !0;
            }), n.onReconnect.add(() => {
                f.default.engine.connected = !0, f.default.engine.connectionError = !1, f.default.engine.attemptingToConnect = !1, f.default.engine.attemptingToJoinRoom = !0;
            }), f.default.engine.attemptingToJoinRoom = !0;
            const p = j ? n.joinRoom(j.roomId, j.options) : n.createRoom(k.roomType, k.options);
            p.onJoinAttempt.add(() => {
                f.default.engine.attemptingToJoinRoom = !0;
            }), p.onJoinError.add(j => {
                console.log({
                    roomJoinError: j
                }), l.onRoomJoinError && l.onRoomJoinError(j), f.default.engine.roomError = j, f.default.engine.errorJoiningRoom = !0, f.default.engine.attemptingToJoinRoom = !1;
            });
            const q = p.onJoinError.add(() => {
                l.disposeOnError && m();
            });
            p.onJoin.add(() => {
                (0, g.default)(p), (0, h.default)(), l.onRoomJoin && l.onRoomJoin(), f.default.engine.hasJoinedRoom = !0;
            }, !0), p.onJoin.add(() => {
                q(), f.default.engine.joinedRoom = !0, f.default.engine.attemptingToJoinRoom = !1, f.default.engine.game || (f.default.engine.game = p);
            }), p.onLeave.add(() => {
                f.default.engine.joinedRoom = !1;
            });
        }, !0), n.onDisconnect.add(() => {
            f.default.engine.attemptingToConnect = !0, f.default.engine.connected = !1, l.onDisconnect && l.onDisconnect();
        });
    };
}), d.register('SsxYH', function(a, c) {
    b(a.exports, 'default', function() {
        return j;
    });
    var e = d('UNaEe'),
        f = d('UnUp5'),
        g = d('vc7LH'),
        h = d('k8riP'),
        i = d('rlYg5');
    var j = () => {
        (0, f.reaction)(() => i.default.powerups.activePowerups, a => {
            a.includes(h.PowerupNames.fivePercentBot) ? i.default.ui.snowing = !0 : i.default.ui.snowing = !1;
        }), (0, f.reaction)(() => i.default.navigation.leaderboardDrawerOpen, () => e.woosh.play()), (0, f.reaction)(() => i.default.imposter.status, () => (0, g.default)()), (0, f.reaction)(() => i.default.gameValues.gameStatus, () => (0, g.default)()), (0, f.reaction)(() => i.default.navigation.currentRoute, () => (0, g.default)());
    };
}), d.register('vc7LH', function(a, c) {
    b(a.exports, 'default', function() {
        return k;
    });
    var e = d('M8YtH'),
        f = d('lf3yz'),
        g = d('TTKAH'),
        h = d('rlYg5'),
        i = d('PDLD/2');
    const j = [
        e.default.questions,
        e.default.shop
    ];
    var k = () => {
        if (h.default.gameValues.gameStatus === i.GameStatus.gameplay)
            return (0, f.inImposterMode)() ? h.default.imposter.status === g.ImposterStatus.questions ? void(j.includes(h.default.navigation.currentRoute) || (0, f.changeRoute)(e.default.questions)) : void(0, f.changeRoute)(e.default.imposterMode) : void((0, f.inDrawMode)() ? (0, f.changeRoute)(e.default.drawMode) : (0, f.inPardyMode)() && (0, f.changeRoute)(e.default.pardyMode));
    };
}), d.register('o6Uo7', function(a, c) {
    b(a.exports, 'default', function() {
        return v;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('j3/1r'),
        i = d('ExtIT'),
        j = d('KV+OV'),
        k = d('cR5QE'),
        l = d('iHElh'),
        m = d('lmfrI'),
        n = d('AsIEN'),
        o = d('Vlfxs'),
        p = d('uPP4W'),
        q = d('PDLD/2'),
        r = d('M8YtH'),
        s = d('J7gvH');
    const t = 'https://status.gimkit.com';
    let u = class extends p.Component {
        render() {
            const {
                engine: v,
                gameValues: w,
                navigation: x
            } = this.props, y = ((v, w, x) => !(w.gameStatus === q.GameStatus.results || (!v.connectionError || v.game) && !v.errorFindingServerForGame && !v.errorJoiningRoom && (x.currentRoute === r.default.join || !v.game || v.joinedRoom || x.currentRoute === r.default.nonDismissMessage)))(v, w, x);
            return x.currentRoute === r.default.join ? (0, g.jsx)(k.default, {
                open: y,
                closable: !1,
                footer: null,
                width: 700,
                centered: !0,
                bodyStyle: {
                    padding: 40
                },
                maskStyle: {
                    background: 'transparent'
                },
                children: this.getContent()
            }) : (0, g.jsx)(j.default, {
                open: y,
                placement: 'bottom',
                closable: !1,
                height: 'auto',
                children: this.getContent()
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'getLoading', () => {
                const {
                    engine: v
                } = this.props;
                return !v.errorJoiningRoom && (!v.errorFindingServerForGame && !(!v.game && v.connectionError));
            }), (0, e.default)(this, 'getContent', () => {
                const v = this.getLoading();
                return (0, g.jsxs)('div', {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        fontFamily: n.default.name,
                        color: m.default.Black,
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: [
                        v && (0, g.jsx)(l.default, {
                            size: 'large',
                            style: {
                                marginBottom: 10
                            }
                        }),
                        !v && (0, g.jsxs)(g.Fragment, {
                            children: [
                                (0, g.jsx)(h.default, {
                                    style: {
                                        color: 'red',
                                        fontSize: 51
                                    }
                                }),
                                (0, g.jsx)(i.default, {})
                            ]
                        }),
                        (0, g.jsx)('div', {
                            style: {
                                textAlign: 'center',
                                fontSize: 23,
                                fontWeight: 'bold'
                            },
                            children: this.getMessage()
                        })
                    ]
                });
            }), (0, e.default)(this, 'getMessage', () => {
                const {
                    engine: v
                } = this.props;
                if (v.errorFindingServerForGame)
                    return (0, g.jsxs)('span', {
                        children: [
                            'We couldn\'t find any available game servers. Gimkit might be down. Check ',
                            (0, g.jsx)('a', {
                                href: t,
                                children: t
                            }),
                            ' for more info.'
                        ]
                    });
                if (!v.game && v.connectionError)
                    return (0, g.jsxs)('span', {
                        children: [
                            'Your network is blocking connection to our game servers. Get more details on how to fix this ',
                            (0, g.jsx)('a', {
                                href: 'https://www.gimkit.com/connection',
                                children: 'here.'
                            })
                        ]
                    });
                if (v.errorJoiningRoom) {
                    const w = (0, s.default)(v.roomError);
                    return (0, g.jsxs)('span', {
                        children: [
                            (0, g.jsx)('span', {
                                style: {
                                    fontSize: 23
                                },
                                children: w.title
                            }),
                            (0, g.jsx)('br', {}),
                            (0, g.jsx)('span', {
                                style: {
                                    fontWeight: 'normal',
                                    fontSize: 18
                                },
                                children: w.description
                            })
                        ]
                    });
                }
                return v.attemptingToConnect ? (0, g.jsxs)('span', {
                    children: [
                        'Disconnected!',
                        ' ',
                        (0, g.jsx)('span', {
                            style: {
                                fontWeight: 'normal'
                            },
                            children: 'Attempting to reconnect...'
                        })
                    ]
                }) : v.attemptingToJoinRoom ? (0, g.jsxs)('span', {
                    children: [
                        'Connected!',
                        ' ',
                        (0, g.jsx)('span', {
                            style: {
                                fontWeight: 'normal'
                            },
                            children: 'Attempting to rejoin...'
                        })
                    ]
                }) : 'Attempting to reconnect...';
            });
        }
    };
    u = (0, f.__decorate)([
        (0, o.inject)('engine', 'gameValues', 'navigation'),
        o.observer
    ], u);
    var v = w;
}), d.register('j3/1r', function(a, c) {
    b(a.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('xxsym'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'CloseCircleOutlined';
    var j = f.forwardRef(i);
}), d.register('xxsym', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                }
            ]
        },
        name: 'close-circle',
        theme: 'outlined'
    };
}), d.register('J7gvH', function(a, c) {
    b(a.exports, 'default', function() {
        return f;
    });
    var e = d('rlYg5');
    var f = a => {
        let g = 'Error joining game',
            h = '',
            i = 'string' == typeof a ? a : a.type;
        if ('MAX_PLAYERS' === i) {
            let {
                message: j
            } = k;
            g = j.title ? j.title : 'Game full', h = j.description ? j.description : 'There are too many players in this game';
        } else
            'HOST_DISCONNECTED' === i ? (g = 'All done.', h = 'The host for this game has left.') : 'GAME_FINISHED' === i ? (g = 'Game ended.', h = 'This game has already ended.') : 'INVALID_INTENT' === i ? (g = 'Reservation expired', h = 'Your reservation to join this game has expired. Refresh and try joining again.') : i && i.includes && i.includes('No data found') ? e.default.engine.hasJoinedRoom ? (g = 'All gone.', h = 'The game you were in no longer exists.') : (g = 'No game found.', h = 'The game you were trying to join does not exist.') : h = 'An unknown error occurred.';
        return {
            title: g,
            description: h
        };
    };
}), d.register('rHwcN', function(a, c) {
    b(a.exports, 'default', function() {
        return r;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('m96/N'),
        i = d('E1Ead'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('h99Nu');
    let m, n, o, p = a => a,
        q = class extends k.Component {
            render() {
                return (0, g.jsx)(i.default, {
                    open: this.props.ui.showingSuccessModal,
                    close: this.close,
                    customWidth: '570px',
                    customPadding: '26px',
                    children: this.getContent()
                });
            }
            constructor(...a) {
                super(...a), (0, e.default)(this, 'close', () => this.props.ui.showingSuccessModal = !1), (0, e.default)(this, 'getContent', () => {
                    const {
                        successModalInfo: r
                    } = this.props.ui;
                    if (!r || !r.title)
                        return null;
                    const {
                        textOptions: s
                    } = t, {
                        icon: u,
                        background: v,
                        color: w,
                        title: x,
                        description: y
                    } = z;
                    return (0, g.jsxs)('div', {
                        style: {
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        },
                        children: [
                            (0, g.jsx)(t, {
                                style: {
                                    background: v,
                                    color: w
                                },
                                children: (0, g.jsx)('i', {
                                    className: u
                                })
                            }),
                            (0, g.jsx)(u, {
                                children: x
                            }),
                            (0, g.jsx)(v, {
                                style: {
                                    textAlign: s && s.align ? s.align : 'center',
                                    whiteSpace: s && s.customLines ? 'pre-wrap' : 'normal'
                                },
                                children: y
                            }),
                            (0, g.jsx)(h.default, {
                                onClick: this.close,
                                style: {
                                    marginTop: 14
                                },
                                type: 'secondary',
                                label: 'Close',
                                size: 'medium'
                            })
                        ]
                    });
                });
            }
        };
    q = (0, f.__decorate)([
        (0, j.inject)('ui'),
        j.observer
    ], q);
    var r = s;
    const t = l.default.div(m || (m = p`
  height: 78px;
  width: 78px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
`)),
        u = l.default.div(n || (n = p`
  font-size: 38px;
  font-weight: 900;
  margin-top: 6px;
`)),
        v = l.default.div(o || (o = p`
  font-size: 18px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`));
}), d.register('ClSR/', function(a, c) {
    b(a.exports, 'default', function() {
        return E;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('VCvua0'),
        i = d('cJ4UC'),
        j = d('M8YtH'),
        k = d('lf3yz'),
        l = d('VDucS'),
        m = d('E1Ead'),
        n = d('G5sHI'),
        o = d('TTKAH'),
        p = d('Vlfxs'),
        q = d('uPP4W'),
        r = d('h99Nu'),
        s = d('dW0cW');
    let t, u, v, w, x, y, z, A = a => a;
    const B = a => {
            if (a === o.ImposterShopItemId.clearListRemover)
                return a => !a.canNeverBeClear && a.role === o.PersonRole.detective;
        },
        C = a => {
            const D = a.items.find(D => D.id === a.shopItem);
            return D ? (0, g.jsxs)(G, {
                children: [
                    (0, g.jsxs)(H, {
                        style: {
                            color: h.default.White,
                            background: D.background
                        },
                        children: [
                            (0, g.jsx)(I, {
                                children: (0, g.jsx)(l.default, {
                                    style: {
                                        fontSize: 34
                                    },
                                    name: D.icon
                                })
                            }),
                            (0, g.jsxs)(J, {
                                children: [
                                    (0, g.jsx)(K, {
                                        children: (0, g.jsx)(n.default, {
                                            text: D.name
                                        })
                                    }),
                                    (0, g.jsx)(L, {
                                        children: (0, g.jsx)(n.default, {
                                            text: D.description
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, g.jsx)(M, {
                        children: (0, g.jsx)(s.default, {
                            actionText: (c = D.id, c === o.ImposterShopItemId.fakeInvestigation || c === o.ImposterShopItemId.privateInvestigation || c === o.ImposterShopItemId.publicInvestigation ? 'Investigate' : c === o.ImposterShopItemId.donate ? 'Donate' : 'Use'),
                            showAction: !0,
                            onSelect: a.handleSelect,
                            filter: B(D.id)
                        })
                    })
                ]
            }) : (a.close(), null);
            var E;
        };
    let D = class extends q.Component {
        render() {
            if (!this.props.imposter.me)
                return null;
            const {
                imposter: E
            } = this.props, F = E.currentShopItemModalVisible;
            return (0, g.jsx)(m.default, {
                open: F,
                close: this.close,
                customMaxWidth: '90%',
                customWidth: '600px',
                customPadding: '0px',
                children: (0, g.jsx)(C, {
                    shopItem: E.currentShopItem,
                    items: E.shopItems,
                    close: this.close,
                    handleSelect: this.handlePersonSelect
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'close', () => {
                this.props.imposter.currentShopItemModalVisible = !1;
            }), (0, e.default)(this, 'handlePersonSelect', a => {
                (0, k.send)(i.default.imposter.purchase, {
                    item: this.props.imposter.currentShopItem,
                    on: a
                }), (0, k.changeRoute)(j.default.questions), this.close();
            });
        }
    };
    D = (0, f.__decorate)([
        (0, p.inject)('imposter'),
        p.observer
    ], D);
    var E = F;
    const G = r.default.div.attrs({
            className: 'maxWidth flex flex-column'
        })(t || (t = A`
  font-family: 'Space Grotesk', monospace;
`)),
        H = r.default.div(u || (u = A`
  height: 170px;
  padding: 20px;
`)),
        I = r.default.div.attrs({
            className: 'flex maxWidth vc hc'
        })(v || (v = A`
  height: 60px;
`)),
        J = r.default.div(w || (w = A`
  text-align: center;
  margin-top: 4px;
`)),
        K = r.default.div(x || (x = A`
  font-size: 25px;
  font-weight: 900;
`)),
        L = r.default.div(y || (y = A`
  font-size: 14px;
`)),
        M = r.default.div.attrs({
            className: 'maxWidth'
        })(z || (z = A`
  padding: 20px;
`));
}), d.register('Xa2SF', function(a, c) {
    b(a.exports, 'default', function() {
        return C;
    });
    var e = d('8kSQZ'),
        f = d('VCvua0'),
        g = d('lf3yz'),
        h = d('m96/N'),
        i = d('E1Ead'),
        j = d('G5sHI'),
        k = d('TTKAH'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('h99Nu'),
        o = d('jh162'),
        p = d('xxcnb');
    let q, r, s, t, u, v, w, x, y, z = a => a;
    var A;
    (A = y || (y = {})).intro = 'intro', A.role = 'role';
    const B = (0, l.observer)(() => {
        const [C, D] = m.useState(y.intro), {
            imposter: E
        } = m.useContext(p.default), F = () => {
            C !== y.intro && (E.roleModalOpen = !1);
        }, G = () => {
            D(y.role);
        }, H = () => E.me.role === k.PersonRole.imposter, I = () => {
            const {
                epl: J,
                impostersLeft: K,
                me: L
            } = M, N = (0, o.DecryptData)(J) || [];
            let O = [];
            if (H()) {
                const P = N.filter(P => P.role === k.PersonRole.imposter && P.id !== L.id);
                P.length && O.push(`Other ${ (0, g.plural)('Impostor', P.length) }: ${ (0, g.teamPlayerNames)(P.map(P => P.name)) }`), O.push('Visit Mission Control to decrease the number of investigations\n      crewmates can have.'), O.push('Blend in by running fake investigations or putting on a disguise.');
            } else
                O.push(`There ${ 1 === K ? 'is' : 'are' } ${ K } ${ (0, g.plural)('impostor', K) } on board. Find and vote them out!`), O.push('Run investigations in Mission Control to rule out fellow crewmates.'), O.push('Use your notebook to keep track of your suspicions.'), O.push('Call a meeting when you\'re ready to vote someone out.');
            return O;
        }, J = E.roleModalOpen && E.status !== k.ImposterStatus.intro;
        return (0, e.jsx)(i.default, {
            open: J,
            close: F,
            customPadding: '0px',
            customWidth: '600px',
            customMaxWidth: '600px',
            children: (0, e.jsx)(D, {
                children: C === y.intro ? (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)(E, {
                            children: (0, e.jsx)(j.default, {
                                text: 'Welcome aboard.'
                            })
                        }),
                        (0, e.jsx)(F, {}),
                        (0, e.jsx)(G, {
                            children: (0, e.jsx)(j.default, {
                                text: 'Make sure nobody can see your screen, and then click to view your\n            role!'
                            })
                        }),
                        (0, e.jsx)(h.default, {
                            style: {
                                width: '100%'
                            },
                            size: 'medium',
                            type: 'primary',
                            onClick: G,
                            label: (0, e.jsx)(j.default, {
                                text: 'View Role'
                            })
                        })
                    ]
                }) : (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)(H, {
                            children: (0, e.jsx)(j.default, {
                                text: 'You are ' + (H() ? 'an' : 'a')
                            })
                        }),
                        (0, e.jsx)(I, {
                            children: (0, e.jsx)(j.default, {
                                text: H() ? 'Impostor' : 'Crewmate'
                            })
                        }),
                        (0, e.jsx)(J, {
                            children: I().map(C => (0, e.jsx)(K, {
                                children: (0, e.jsx)(j.default, {
                                    text: C
                                })
                            }, C))
                        }),
                        (0, e.jsx)(h.default, {
                            style: {
                                marginTop: 5
                            },
                            size: 'medium',
                            type: 'primary',
                            onClick: F,
                            label: (0, e.jsx)(j.default, {
                                text: 'Close'
                            })
                        })
                    ]
                })
            })
        });
    });
    var C = (0, l.observer)(() => {
        const {
            imposter: D
        } = m.useContext(p.default);
        return D.me ? (0, e.jsx)(B, {}) : null;
    });
    const D = n.default.div.attrs({
            className: 'maxWidth flex flex-column hc vc'
        })(q || (q = z`
  background: ${ 0 };
  color: ${ 0 };
  padding: 40px;
  font-family: 'Space Grotesk', monospace;
  text-align: center;
`), f.default.Black, f.default.White),
        E = n.default.div(r || (r = z`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 16px;
`)),
        F = n.default.img.attrs({
            src: (0, g.getAssetPath)('space-ship.svg')
        })(s || (s = z`
  height: 125px;
`)),
        G = n.default.div(t || (t = z`
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 18px;
`)),
        H = n.default.div(u || (u = z`
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: -8px;
`)),
        I = n.default.div(v || (v = z`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 20px;
`)),
        J = n.default.ul.attrs({
            className: 'maxWidth'
        })(w || (w = z`
  font-size: 16px;
  text-align: left;
`)),
        K = n.default.li(x || (x = z`
  margin-bottom: 13px;
`));
}), d.register('YA33C', function(a, c) {
    b(a.exports, 'legitEvent', function() {
        return d;
    });
    const e = a => !a || (!0 !== a.isTrusted && !1 !== a.isTrusted || a.isTrusted);
}), d.register('2WDH6', function(a, c) {
    b(a.exports, 'getCloudinaryUrl', function() {
        return d;
    });
    const e = a => {
            const f = f(a);
            return f ? a.includes('/video/upload') ? `https://${ g }/video/upload/${ f }` : `https://${ g }/image/upload/f_auto,fl_lossy,q_auto/${ f }` : a;
        },
        f = a => {
            if (!j.some(b => a.includes(b)))
                return null;
            if (a.includes(h) && !a.includes(`/${ i }/`))
                return null;
            const g = a.split('/');
            if (!g || !g.length || g.length < 2)
                return null;
            const h = g[g.length - 2],
                i = g[g.length - 1];
            return h && i && h.startsWith('v') ? `${ h }/${ i }` : null;
        },
        g = 'media.gimkit.com',
        h = 'res.cloudinary.com',
        i = 'gimkit-production',
        j = [
            g,
            h
        ];
}), d.register('JegR3', function(a, c) {
    b(a.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('WKaIG'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'DownOutlined';
    var j = f.forwardRef(i);
}), d.register('WKaIG', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
                }
            }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), d.register('bTRJM', function(a, c) {
    b(a.exports, 'default', function() {
        return h;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W');
    const g = f.lazy(() => d('FhxEZ0'));
    var h = a => (0, e.jsx)(f.Suspense, {
        fallback: a.fallback || null,
        children: (0, e.jsx)(g, {
            latex: a.latex
        })
    });
}), d.register('FhxEZ0', function(a, b) {
    a.exports = Promise.all([
        import('./' + d('tIOy4').resolve('8pe9D')),
        import('./' + d('tIOy4').resolve('5OCdz'))
    ]).then(() => d('feyVh'));
}), d.register('FNaij', function(a, c) {
    b(a.exports, 'useMotionValue', function() {
        return i;
    });
    var e = d('uPP4W'),
        f = d('G27XW'),
        g = d('PdvoJ'),
        h = d('W07Lg');

    function i(a) {
        const j = (0, h.useConstant)(() => (0, f.motionValue)(a)),
            {
                isStatic: k
            } = (0, e.useContext)(g.MotionConfigContext);
        if (k) {
            const [, l] = (0, e.useState)(a);
            (0, e.useEffect)(() => j.on('change', l), []);
        }
        return j;
    }
});