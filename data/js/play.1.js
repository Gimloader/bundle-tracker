function a(b) {
    Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    });
}

function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}

function c(d) {
    return d && d.__esModule ? d.default : d;
}
var d = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
d.register('.....', function(e, f) {
    a(e.exports), b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....');
    var _i = j => (0, g.jsx)(g.Fragment, {
        children: (0, g.jsx)(h.default, {
            ...j
        })
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _g;
    });
    var _g = d('.....').default;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    var _o = p => (h.useEffect(() => {
        (0, k.startLoop)(), document.addEventListener('click', q => {
            (0, n.legitEvent)(q) || q.stopPropagation();
        });
    }, []), (0, g.jsx)(m.default.Provider, {
        value: j.default,
        children: (0, g.jsx)(i.Provider, {
            ...j.default,
            children: (0, g.jsx)(l.default, {
                ...p
            })
        })
    }));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _x;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....'),
        w = d('.....');
    var _x = {
        gameValues: new(0, l.default)(),
        gameOptions: new(0, k.default)(),
        user: new(0, t.default)(),
        questions: new(0, o.default)(),
        powerups: new(0, n.default)(),
        balance: new(0, g.default)(),
        engine: new(0, h.default)(),
        theme: new(0, p.default)(),
        navigation: new(0, m.default)(),
        upgrades: new(0, s.default)(),
        translations: new(0, q.default)(),
        entities: new(0, i.default)(),
        ui: new(0, r.default)(),
        events: new(0, j.default)(),
        imposter: new(0, u.default)(),
        draw: new(0, v.default)(),
        pardy: new(0, w.default)()
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            this.balance = 0, this.maxBalance = 0, this.balanceChangeIfCorrect = 1, this.balanceChangeIfIncorrect = -1, this.incomeMultiplier = 1, this.streakAmount = 0, this.customColor = '', (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'balance', void 0), (0, g.__decorate)([h.observable], i.prototype, 'maxBalance', void 0), (0, g.__decorate)([h.observable], i.prototype, 'balanceChangeIfCorrect', void 0), (0, g.__decorate)([h.observable], i.prototype, 'balanceChangeIfIncorrect', void 0), (0, g.__decorate)([h.observable], i.prototype, 'incomeMultiplier', void 0), (0, g.__decorate)([h.observable], i.prototype, 'streakAmount', void 0), (0, g.__decorate)([h.observable], i.prototype, 'customColor', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            this.game = null, this.client = null, this.findingServerForGame = !1, this.errorFindingServerForGame = !1, this.attemptingToConnect = !1, this.hasConnected = !1, this.connected = !1, this.connectionError = !1, this.hasLeftRoom = !1, this.hasJoinedRoom = !1, this.joinedRoom = !1, this.attemptingToJoinRoom = !1, this.errorJoiningRoom = !1, this.roomError = null, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'game', void 0), (0, g.__decorate)([h.observable], i.prototype, 'client', void 0), (0, g.__decorate)([h.observable], i.prototype, 'findingServerForGame', void 0), (0, g.__decorate)([h.observable], i.prototype, 'errorFindingServerForGame', void 0), (0, g.__decorate)([h.observable], i.prototype, 'attemptingToConnect', void 0), (0, g.__decorate)([h.observable], i.prototype, 'hasConnected', void 0), (0, g.__decorate)([h.observable], i.prototype, 'connected', void 0), (0, g.__decorate)([h.observable], i.prototype, 'connectionError', void 0), (0, g.__decorate)([h.observable], i.prototype, 'hasLeftRoom', void 0), (0, g.__decorate)([h.observable], i.prototype, 'hasJoinedRoom', void 0), (0, g.__decorate)([h.observable], i.prototype, 'joinedRoom', void 0), (0, g.__decorate)([h.observable], i.prototype, 'attemptingToJoinRoom', void 0), (0, g.__decorate)([h.observable], i.prototype, 'errorJoiningRoom', void 0), (0, g.__decorate)([h.observable], i.prototype, 'roomError', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            this.defendingHomebase = null, this.lava = null, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'defendingHomebase', void 0), (0, g.__decorate)([h.observable], i.prototype, 'lava', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = class {};
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    class j {
        get formattedGameOptions() {
            return (0, h.toJS)(this);
        }
        constructor() {
            this.type = i.GameType.live, this.goal = {
                type: i.GameGoal.time,
                value: 10
            }, this.specialGameType = h.observable.array(), this.group = '', this.currency = '$', this.language = 'en', this.startingCash = 0, this.handicap = -50, this.clapping = !0, this.powerups = !0, this.themes = !0, this.cleanPowerupsOnly = !1, this.allowGoogleTranslate = !1, this.enablePowerupRNGAnimation = !1, this.music = !0, this.modeOptions = {}, this.setGameOptions = k => {
                Object.keys(k).forEach(l => {
                    null !== this[l] && ('specialGameType' === l ? this.specialGameType.replace(k.specialGameType) : this[l] = k[l]);
                });
            }, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], j.prototype, 'type', void 0), (0, g.__decorate)([h.observable], j.prototype, 'goal', void 0), (0, g.__decorate)([h.observable], j.prototype, 'specialGameType', void 0), (0, g.__decorate)([h.observable], j.prototype, 'group', void 0), (0, g.__decorate)([h.observable], j.prototype, 'currency', void 0), (0, g.__decorate)([h.observable], j.prototype, 'language', void 0), (0, g.__decorate)([h.observable], j.prototype, 'startingCash', void 0), (0, g.__decorate)([h.observable], j.prototype, 'handicap', void 0), (0, g.__decorate)([h.observable], j.prototype, 'clapping', void 0), (0, g.__decorate)([h.observable], j.prototype, 'powerups', void 0), (0, g.__decorate)([h.observable], j.prototype, 'themes', void 0), (0, g.__decorate)([h.observable], j.prototype, 'cleanPowerupsOnly', void 0), (0, g.__decorate)([h.observable], j.prototype, 'allowGoogleTranslate', void 0), (0, g.__decorate)([h.observable], j.prototype, 'enablePowerupRNGAnimation', void 0), (0, g.__decorate)([h.observable], j.prototype, 'music', void 0), (0, g.__decorate)([h.observable], j.prototype, 'modeOptions', void 0), (0, g.__decorate)([h.action.bound], j.prototype, 'setGameOptions', void 0), (0, g.__decorate)([h.computed], j.prototype, 'formattedGameOptions', null);
    var _k = j;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            this.connected = !1, this.connectionError = !1, this.gameStatus = null, this.gameCode = null, this.players = h.observable.array(), this.teams = h.observable.array(), this.nonDismissMessage = {
                message: '',
                title: '',
                link: '',
                buttonText: ''
            }, this.thanosValues = null, this.news = h.observable.array([]), (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'connected', void 0), (0, g.__decorate)([h.observable], i.prototype, 'connectionError', void 0), (0, g.__decorate)([h.observable], i.prototype, 'gameStatus', void 0), (0, g.__decorate)([h.observable], i.prototype, 'gameCode', void 0), (0, g.__decorate)([h.observable], i.prototype, 'players', void 0), (0, g.__decorate)([h.observable], i.prototype, 'teams', void 0), (0, g.__decorate)([h.observable], i.prototype, 'nonDismissMessage', void 0), (0, g.__decorate)([h.observable], i.prototype, 'thanosValues', void 0), (0, g.__decorate)([h.observable], i.prototype, 'defendingHomebaseResults', void 0), (0, g.__decorate)([h.observable], i.prototype, 'news', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    b(e.exports, 'ShopTab', function() {
        return _j;
    }), b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    let _j;
    var k;
    (k = _j || (_j = {})).lava = 'lava', k.defendingHomebase = 'defendingHomebase', k.upgrades = 'upgrades', k.powerups = 'powerups', k.themes = 'themes', k.powerupsNonMusic = 'powerupsNonMusic', k.powerupsMusic = 'powerupsMusic';
    class l {
        changeRoute(m) {
            this.currentRoute = m;
        }
        constructor() {
            this.currentRoute = h.default.join, this.canChangeRoute = !0, this.drawerOpen = !1, this.settingsOpen = !1, this.leaderboardDrawerOpen = !1, this.currentShopTab = _j.upgrades, this.powerupRNGAnimationDone = !1, this.visitedPowerupSection = !1, this.attackModal = {
                open: !1,
                powerup: ''
            }, (0, i.makeObservable)(this);
        }
    }
    (0, g.__decorate)([i.observable], l.prototype, 'currentRoute', void 0), (0, g.__decorate)([i.observable], l.prototype, 'canChangeRoute', void 0), (0, g.__decorate)([i.observable], l.prototype, 'drawerOpen', void 0), (0, g.__decorate)([i.observable], l.prototype, 'settingsOpen', void 0), (0, g.__decorate)([i.observable], l.prototype, 'leaderboardDrawerOpen', void 0), (0, g.__decorate)([i.observable], l.prototype, 'currentShopTab', void 0), (0, g.__decorate)([i.observable], l.prototype, 'powerupRNGAnimationDone', void 0), (0, g.__decorate)([i.observable], l.prototype, 'visitedPowerupSection', void 0), (0, g.__decorate)([i.observable], l.prototype, 'attackModal', void 0), (0, g.__decorate)([i.action.bound], l.prototype, 'changeRoute', null);
    var _m = l;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    const g = '/play';
    var _h = {
        base: g,
        join: g + '/join',
        waiting: g + '/waiting',
        gameOver: g + '/results',
        questions: g + '/questions',
        team: g + '/team',
        shop: g + '/shop',
        upgrade: g + '/upgrade',
        nonDismissMessage: '/message',
        imposterMode: '/imposter-mode',
        drawMode: '/draw-mode',
        pardyMode: '/pardy-mode'
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    class j {
        get activePowerups() {
            return (0, h.uniq)(this.personalActivePowerups.concat(this.teamActivePowerups));
        }
        get appliedPowerups() {
            return (0, h.uniq)(this.personalAppliedPowerups.concat(this.teamAppliedPowerups));
        }
        constructor() {
            this.availablePowerups = i.observable.array(), this.disabledPowerups = i.observable.array(), this.purchasedPowerups = i.observable.array(), this.usedPowerups = i.observable.array(), this.personalActivePowerups = i.observable.array(), this.teamActivePowerups = i.observable.array(), this.personalAppliedPowerups = i.observable.array(), this.teamAppliedPowerups = i.observable.array(), this.hasShownHelperModal = !1, this.screenAttack = {
                powerupName: '',
                attackerName: '',
                fullScreen: !1
            }, this.linkPartnerName = '', (0, i.makeObservable)(this);
        }
    }
    (0, g.__decorate)([i.observable], j.prototype, 'availablePowerups', void 0), (0, g.__decorate)([i.observable], j.prototype, 'disabledPowerups', void 0), (0, g.__decorate)([i.observable], j.prototype, 'purchasedPowerups', void 0), (0, g.__decorate)([i.observable], j.prototype, 'usedPowerups', void 0), (0, g.__decorate)([i.observable], j.prototype, 'personalActivePowerups', void 0), (0, g.__decorate)([i.observable], j.prototype, 'teamActivePowerups', void 0), (0, g.__decorate)([i.observable], j.prototype, 'personalAppliedPowerups', void 0), (0, g.__decorate)([i.observable], j.prototype, 'teamAppliedPowerups', void 0), (0, g.__decorate)([i.computed], j.prototype, 'activePowerups', null), (0, g.__decorate)([i.computed], j.prototype, 'appliedPowerups', null), (0, g.__decorate)([i.observable], j.prototype, 'hasShownHelperModal', void 0), (0, g.__decorate)([i.observable], j.prototype, 'screenAttack', void 0), (0, g.__decorate)([i.observable], j.prototype, 'linkPartnerName', void 0);
    var _k = j;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    class n {
        constructor() {
            (0, g.default)(this, 'eqt', ''), (0, g.default)(this, 'questionsAnsweredCorrectly', 0), (0, g.default)(this, 'questionsAnsweredIncorrectly', 0), this.ceq = null, this.currentQuestionIndex = 0, this.questionList = k.observable.array(), this.lastQuestion = '', this.canAnswerQuestion = !0, this.lockedViewingCorrectAnswer = !1, this.lastQuestionAnsweredTimestamp = 0, this.currentQuestionLoaded = !1, this.transitioningToNextQuestion = !1, this.setQuestions = o => {
                this.eqt = (0, l.EncryptData)(o, 'questions');
            }, this.nextQuestion = () => {
                this.setCurrentQuestion(this.currentQuestionIndex + 1);
            }, this.setCurrentQuestion = o => {
                const p = (0, i.questionLocation)();
                if (!p || !p.length)
                    return;
                const q = this.questionList.length;
                this.currentQuestionIndex = o >= q ? 0 : o;
                const r = p.find(s => s._id === this.questionList[this.currentQuestionIndex]);
                r && (this.ceq = (0, l.EncryptData)({
                    ...r,
                    answers: (0, j.shuffle)(r.answers)
                }, r._id), this.currentQuestionLoaded = !0);
            }, this.questionAnswered = (o, p) => {
                this.lastQuestionAnsweredTimestamp = Date.now() / 1000, this.lastQuestionCorrect = o, this.lastQuestion = p, this.canAnswerQuestion = !1, setTimeout(() => {
                    this.canAnswerQuestion = !0;
                }, m.CSS_TRANSITION_TIMEOUT);
            }, (0, k.makeObservable)(this);
        }
    }
    (0, h.__decorate)([k.observable], n.prototype, 'ceq', void 0), (0, h.__decorate)([k.observable], n.prototype, 'currentQuestionIndex', void 0), (0, h.__decorate)([k.observable], n.prototype, 'questionList', void 0), (0, h.__decorate)([k.observable], n.prototype, 'lastQuestion', void 0), (0, h.__decorate)([k.observable], n.prototype, 'lastQuestionCorrect', void 0), (0, h.__decorate)([k.observable], n.prototype, 'canAnswerQuestion', void 0), (0, h.__decorate)([k.observable], n.prototype, 'lockedViewingCorrectAnswer', void 0), (0, h.__decorate)([k.observable], n.prototype, 'lastQuestionAnsweredTimestamp', void 0), (0, h.__decorate)([k.observable], n.prototype, 'currentQuestionLoaded', void 0), (0, h.__decorate)([k.observable], n.prototype, 'transitioningToNextQuestion', void 0), (0, h.__decorate)([k.action.bound], n.prototype, 'setQuestions', void 0), (0, h.__decorate)([k.action.bound], n.prototype, 'nextQuestion', void 0), (0, h.__decorate)([k.action.bound], n.prototype, 'setCurrentQuestion', void 0), (0, h.__decorate)([k.action.bound], n.prototype, 'questionAnswered', void 0);
    var _o = n;
}), d.register('.....', function(e, f) {
    b(e.exports, 'questionAnswered', function() {
        return _v;
    }), b(e.exports, 'send', function() {
        return _W;
    }), b(e.exports, 'plural', function() {
        return _w;
    }), b(e.exports, 'numberWithCommas', function() {
        return _x;
    }), b(e.exports, 'getMoney', function() {
        return _y;
    }), b(e.exports, 'inDrawMode', function() {
        return _cb;
    }), b(e.exports, 'toggleDrawer', function() {
        return _z;
    }), b(e.exports, 'purchaseTheme', function() {
        return _A;
    }), b(e.exports, 'upgradeNameToKey', function() {
        return _B;
    }), b(e.exports, 'toast', function() {
        return _C;
    }), b(e.exports, 'capitalizeFirstLetter', function() {
        return _D;
    }), b(e.exports, 'getTeamName', function() {
        return _E;
    }), b(e.exports, 'teamPlayerNames', function() {
        return _F;
    }), b(e.exports, 'getTeamColor', function() {
        return _G;
    }), b(e.exports, 'getTeamIcon', function() {
        return _H;
    }), b(e.exports, 'inTeamMode', function() {
        return _I;
    }), b(e.exports, 'attack', function() {
        return _J;
    }), b(e.exports, 'getPowerupDescription', function() {
        return _K;
    }), b(e.exports, 'questionLocation', function() {
        return _L;
    }), b(e.exports, 'inPardyMode', function() {
        return _eb;
    }), b(e.exports, 'blockShopping', function() {
        return _M;
    }), b(e.exports, 'getAssetPath', function() {
        return _N;
    }), b(e.exports, 'getPowerupName', function() {
        return _O;
    }), b(e.exports, 'getUpgradeCost', function() {
        return _P;
    }), b(e.exports, 'startGame', function() {
        return _Q;
    }), b(e.exports, 'inImposterMode', function() {
        return _bb;
    }), b(e.exports, 'changeRoute', function() {
        return _R;
    }), b(e.exports, 'inZombiesVsHumansMode', function() {
        return _fb;
    }), b(e.exports, 'requestDefendingHomebase', function() {
        return _S;
    }), b(e.exports, 'defendingHomebaseResultsInfo', function() {
        return _T;
    }), b(e.exports, 'listenForLeave', function() {
        return _U;
    }), b(e.exports, 'nonDismissMessage', function() {
        return _V;
    }), b(e.exports, 'inThanosMode', function() {
        return _X;
    }), b(e.exports, 'inQrScanMode', function() {
        return _Y;
    }), b(e.exports, 'inBossBattleMode', function() {
        return _Z;
    }), b(e.exports, 'inHiddenMode', function() {
        return _$;
    }), b(e.exports, 'inLavaMode', function() {
        return _ab;
    }), b(e.exports, 'inComebackMode', function() {
        return _db;
    }), b(e.exports, 'shopName', function() {
        return _hb;
    }), b(e.exports, 'mainFontName', function() {
        return _ib;
    });
    d('.....');
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....');
    const _v = w => {
            if (!l.default.questions.canAnswerQuestion)
                return !1;
            const x = l.default.questions.ceq ? (0, s.DecryptData)(l.default.questions.ceq) : null;
            let y = !1;
            if (x) {
                const z = x.answers.filter(A => A.correct);
                x.type === m.QuestionType.textInput && z.map(A => _gb(A.text)).includes(_gb(w)) && (y = !0), x.type === m.QuestionType.multipleChoice && z.map(A => A._id).includes(w) && (y = !0), l.default.questions.questionAnswered(y, x._id), _W(n.default.questionAnswered, {
                    questionId: x._id,
                    answer: w
                }), l.default.questions.transitioningToNextQuestion = !0;
            }
            return y;
        },
        _w = (x, y, z) => 1 === y ? x : z || x + 's',
        _x = y => y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        _y = z => {
            if (_cb()) {
                const A = Math.round(z);
                return `${ _x(A) } ${ _w('point', A) }`;
            }
            return (z < 0 ? '-' : '') + l.default.gameOptions.currency + _x(Math.round(Math.abs(z)));
        },
        _z = (A, B) => {
            B || j.woosh.play(), l.default.navigation.drawerOpen = A, 1 == A && (l.default.navigation.settingsOpen = !1);
        },
        _A = B => {
            _W(n.default.themePurchased, B);
        },
        _B = C => C === i.upgradeNames.moneyPerQuestion ? 'moneyPerQuestion' : C === i.upgradeNames.streakBonus ? 'streakBonus' : C === i.upgradeNames.multiplier ? 'multiplier' : 'insurance',
        _C = (D, E) => {
            const {
                type: F,
                blockSound: G
            } = E;
            G || ('error' === F ? j.error.play() : 'success' === F ? j.success.play() : j.alert.play()), g.toast[F || 'info'](D, {
                position: g.toast.POSITION.TOP_RIGHT,
                autoClose: 200 * D.length + 1000
            });
        },
        _D = E => E ? E.charAt(0).toUpperCase() + E.slice(1) : '',
        _E = F => _D(F),
        _F = G => {
            let H = '';
            return G.forEach((I, J) => {
                H += I, J + 1 !== G.length && (H += ', ');
            }), H;
        },
        _G = H => {
            let I = null;
            return I = H ? l.default.gameValues.teams.find(J => J.id === H) : l.default.user.team, I && I.color ? I.color.background : h.default.White;
        },
        _H = I => {
            let J = null;
            return J = I ? l.default.gameValues.teams.find(K => K.id === I) : l.default.user.team, J && J.icon ? J.icon : null;
        },
        _I = () => [
            r.TEAMS,
            r.HUMAN_ZOMBIE_DEFENDING_HOMEBASE,
            r.BOSS_BATTLE
        ].includes(l.default.gameOptions.specialGameType[0]),
        _J = (K, L) => {
            const M = l.default.navigation.attackModal;
            _W(n.default.powerupAttack, {
                name: M.powerup,
                target: K
            });
        },
        _K = L => L.replace('#', _I() ? 'team' : 'player'),
        _L = () => l.default.questions.eqt ? (0, s.DecryptData)(l.default.questions.eqt) : [],
        _M = () => _eb();

    function _N(O) {
        return '/assets/play/' + O;
    }
    const _O = P => P.displayName ? P.displayName : P.name,
        _P = Q => Q * l.default.upgrades.upgradePricingDiscount,
        _Q = () => {
            let R = o.default.questions;
            _eb() && (R = o.default.pardyMode), _bb() && (0, u.loadFont)('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'), _cb() && (0, u.loadFont)('https://fonts.googleapis.com/css2?family=Pangolin&display=swap'), _R(R), _fb() && _S();
        },
        _R = S => {
            l.default.navigation.currentRoute !== S && (l.default.navigation.canChangeRoute ? l.default.navigation.currentRoute !== o.default.nonDismissMessage && (S === o.default.questions && _eb() || S === o.default.shop && _M() || l.default.navigation.changeRoute(S)) : setTimeout(() => _R(S), t.CSS_TRANSITION_TIMEOUT));
        },
        _S = () => _W(n.default.requestPlayerDefendingHomebase),
        _T = () => {
            let U = !1;
            const V = l.default.gameValues.defendingHomebaseResults;
            return V && V.winner && V.winner.linked && l.default.user.team.id === V.winner.linked && (U = !0), {
                won: U,
                text: U ? 'You Won!' : '\uD83D\uDE25'
            };
        },
        _U = () => {
            window.onbeforeunload = () => {
                const V = l.default.navigation.currentRoute;
                return !![
                    o.default.waiting,
                    o.default.questions,
                    o.default.shop,
                    o.default.upgrade,
                    o.default.team
                ].includes(V) || null;
            };
        },
        _V = (W, X) => {
            l.default.gameValues.nonDismissMessage.title = X, l.default.gameValues.nonDismissMessage.message = W, _R(o.default.nonDismissMessage);
        },
        _W = (X, Y) => {
            const Z = l.default.engine.game;
            Z && Z.send(X, Y);
        },
        _X = () => l.default.gameOptions.specialGameType.includes(k.THANOS),
        _Y = () => l.default.gameOptions.specialGameType.includes(k.SHOP_QR_SCAN),
        _Z = () => l.default.gameOptions.specialGameType.includes(r.BOSS_BATTLE),
        _$ = () => l.default.gameOptions.specialGameType.includes(k.HIDDEN),
        _ab = () => l.default.gameOptions.specialGameType.includes(k.LAVA),
        _bb = () => l.default.gameOptions.specialGameType.includes(k.IMPOSTER),
        _cb = () => l.default.gameOptions.specialGameType.includes(k.DRAW),
        _db = () => l.default.gameOptions.specialGameType.includes(k.COMEBACK),
        _eb = () => l.default.gameOptions.specialGameType.includes(k.PARDY),
        _fb = () => l.default.gameOptions.specialGameType.includes(r.HUMAN_ZOMBIE_DEFENDING_HOMEBASE),
        _gb = hb => {
            let ib = hb.trim();
            return ib = ib.replace(/[\u2018\u2019]/g, '\'').replace(/[\u201C\u201D]/g, '"'), ib = ib.toLowerCase(), ib;
        },
        _hb = () => _bb() ? 'Mission Control' : 'Shop',
        _ib = () => _cb() ? p.DRAW_MODE_FONT : q.default.mainFontName;
}), d.register('.....', function(e, f) {
    var g, h;
    b(e.exports, 'ToastContainer', function() {
        return g;
    }, function(i) {
        return g = i;
    }), b(e.exports, 'toast', function() {
        return h;
    }, function(i) {
        return h = i;
    });
    var i = _m(d('.....'));
    g = i.default;
    var j = d('.....');
    j.Bounce, j.Slide, j.Zoom, j.Flip;
    var k = d('.....');
    k.POSITION, k.TYPE;
    var l = _m(d('.....'));

    function _m(n) {
        return n && n.__esModule ? n : {
            default: n
        };
    }
    h = l.default, _m(d('.....')).default;
}), d.register('.....', function(e, f) {
    var g, h;
    a(e.exports), b(e.exports, '__esModule', function() {
        return g;
    }, function(i) {
        return g = i;
    }), b(e.exports, 'default', function() {
        return h;
    }, function(i) {
        return h = i;
    }), g = !0, h = void 0;
    var i = function(j) {
            if (j && j.__esModule)
                return j;
            var k = {};
            if (null != j)
                for (var l in j)
                    if (Object.prototype.hasOwnProperty.call(j, l)) {
                        var m = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(j, l) : {};
                        m.get || m.set ? Object.defineProperty(k, l, m) : k[l] = j[l];
                    }
            return k.default = j, k;
        }(d('.....')),
        j = _s(d('.....')),
        k = _s(d('.....')),
        l = _s(d('.....')),
        m = _s(d('.....')),
        n = _s(d('.....')),
        o = d('.....'),
        p = d('.....'),
        q = _s(d('.....')),
        r = d('.....');

    function _s(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }

    function t(u) {
        return function(v) {
            if (Array.isArray(v)) {
                for (var w = 0, x = new Array(v.length); w < v.length; w++)
                    x[w] = v[w];
                return x;
            }
        }(u) || function(v) {
            if (Symbol.iterator in Object(v) || '[object Arguments]' === Object.prototype.toString.call(v))
                return Array.from(v);
        }(u) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
        }();
    }

    function u() {
        return u = Object.assign || function(v) {
            for (var w = 1; w < arguments.length; w++) {
                var x = arguments[w];
                for (var y in x)
                    Object.prototype.hasOwnProperty.call(x, y) && (v[y] = x[y]);
            }
            return v;
        }, u.apply(this, arguments);
    }
    var v = function(w) {
        var x, y;

        function z() {
            for (var A, B = arguments.length, C = new Array(B), D = 0; D < B; D++)
                z[D] = arguments[D];
            return (A = w.call.apply(w, [this].concat(z)) || this).state = {
                toast: []
            }, A.toastKey = 1, A.collection = {}, A.isToastActive = function(E) {
                return -1 !== A.state.toast.indexOf(E);
            }, A;
        }
        B = w, (A = z).prototype = Object.create(B.prototype), A.prototype.constructor = A, A.__proto__ = B;
        var E = z.prototype;
        return E.componentDidMount = function() {
            var F = this;
            q.default.on(p.ACTION.SHOW, function(G, H) {
                return F.show(G, H);
            }).on(p.ACTION.CLEAR, function(G) {
                return G ? F.removeToast(G) : F.clear();
            }).emit(p.ACTION.DID_MOUNT, this);
        }, E.componentWillUnmount = function() {
            q.default.off(p.ACTION.SHOW).off(p.ACTION.CLEAR).emit(p.ACTION.WILL_UNMOUNT);
        }, E.removeToast = function(F) {
            this.setState({
                toast: this.state.toast.filter(function(G) {
                    return G !== F;
                })
            }, this.dispatchChange);
        }, E.dispatchChange = function() {
            q.default.emit(p.ACTION.ON_CHANGE, this.state.toast.length);
        }, E.makeCloseButton = function(F, G, H) {
            var I = this,
                J = this.props.closeButton;
            return ((0, i.isValidElement)(F) || !1 === F) && (J = F), !1 !== J && (0, i.cloneElement)(J, {
                closeToast: function() {
                    return I.removeToast(G);
                },
                type: H
            });
        }, E.getAutoCloseDelay = function(F) {
            return !1 === F || (0, r.isValidDelay)(F) ? F : this.props.autoClose;
        }, E.canBeRendered = function(F) {
            return (0, i.isValidElement)(F) || 'string' == typeof F || 'number' == typeof F || 'function' == typeof F;
        }, E.parseClassName = function(F) {
            return 'string' == typeof F ? F : null !== F && 'object' == typeof F && 'toString' in F ? F.toString() : null;
        }, E.show = function(F, G) {
            var H, I = this;
            if (!this.canBeRendered(F))
                throw new Error('The element you provided cannot be rendered. You provided an element of type ' + typeof F);
            var J = G.toastId,
                K = function() {
                    return I.removeToast(J);
                },
                L = {
                    id: J,
                    key: G.key || this.toastKey++,
                    type: G.type,
                    closeToast: K,
                    updateId: G.updateId,
                    rtl: this.props.rtl,
                    position: G.position || this.props.position,
                    transition: G.transition || this.props.transition,
                    className: this.parseClassName(G.className || this.props.toastClassName),
                    bodyClassName: this.parseClassName(G.bodyClassName || this.props.bodyClassName),
                    closeButton: this.makeCloseButton(G.closeButton, J, G.type),
                    pauseOnHover: 'boolean' == typeof G.pauseOnHover ? G.pauseOnHover : this.props.pauseOnHover,
                    pauseOnFocusLoss: 'boolean' == typeof G.pauseOnFocusLoss ? G.pauseOnFocusLoss : this.props.pauseOnFocusLoss,
                    draggable: 'boolean' == typeof G.draggable ? G.draggable : this.props.draggable,
                    draggablePercent: 'number' != typeof G.draggablePercent || isNaN(G.draggablePercent) ? this.props.draggablePercent : G.draggablePercent,
                    closeOnClick: 'boolean' == typeof G.closeOnClick ? G.closeOnClick : this.props.closeOnClick,
                    progressClassName: this.parseClassName(G.progressClassName || this.props.progressClassName),
                    progressStyle: this.props.progressStyle,
                    autoClose: this.getAutoCloseDelay(G.autoClose),
                    hideProgressBar: 'boolean' == typeof G.hideProgressBar ? G.hideProgressBar : this.props.hideProgressBar,
                    progress: parseFloat(G.progress),
                    isProgressDone: G.isProgressDone
                };
            'function' == typeof G.onOpen && (L.onOpen = G.onOpen), 'function' == typeof G.onClose && (L.onClose = G.onClose), (0, i.isValidElement)(F) && 'string' != typeof F.type && 'number' != typeof F.type ? F = (0, i.cloneElement)(F, {
                closeToast: K
            }) : 'function' == typeof F && (F = F({
                closeToast: K
            })), this.collection = u({}, this.collection, ((H = {})[J] = {
                position: L.position,
                options: L,
                content: F
            }, H)), this.setState({
                toast: (L.updateId ? t(this.state.toast) : t(this.state.toast).concat([J])).filter(function(M) {
                    return M !== G.staleToastId;
                })
            }, this.dispatchChange);
        }, E.makeToast = function(F, G) {
            return i.default.createElement(m.default, u({}, G, {
                isDocumentHidden: this.state.isDocumentHidden,
                key: 'toast-' + G.key
            }), F);
        }, E.clear = function() {
            this.setState({
                toast: []
            });
        }, E.renderToast = function() {
            var F = this,
                G = {},
                H = this.props,
                I = H.className,
                J = H.style;
            return (H.newestOnTop ? Object.keys(this.collection).reverse() : Object.keys(this.collection)).forEach(function(K) {
                var L = F.collection[K],
                    M = L.position,
                    N = L.options,
                    O = L.content;
                G[M] || (G[M] = []), -1 !== F.state.toast.indexOf(N.id) ? G[M].push(F.makeToast(O, N)) : (G[M].push(null), delete F.collection[K]);
            }), Object.keys(G).map(function(K) {
                var L = 1 === G[K].length && null === G[K][0],
                    M = {
                        className: (0, k.default)('Toastify__toast-container', 'Toastify__toast-container--' + K, {
                            'Toastify__toast-container--rtl': F.props.rtl
                        }, F.parseClassName(I)),
                        style: L ? u({}, J, {
                            pointerEvents: 'none'
                        }) : u({}, J)
                    };
                return i.default.createElement(l.default, u({}, M, {
                    key: 'container-' + K
                }), G[K]);
            });
        }, E.render = function() {
            return i.default.createElement('div', {
                className: 'Toastify'
            }, this.renderToast());
        }, z;
    }(i.Component);
    v.propTypes = {
        position: j.default.oneOf((0, r.objectValues)(p.POSITION)),
        autoClose: r.falseOrDelay,
        closeButton: r.falseOrElement,
        hideProgressBar: j.default.bool,
        pauseOnHover: j.default.bool,
        closeOnClick: j.default.bool,
        newestOnTop: j.default.bool,
        className: j.default.oneOfType([
            j.default.string,
            j.default.object
        ]),
        style: j.default.object,
        toastClassName: j.default.oneOfType([
            j.default.string,
            j.default.object
        ]),
        bodyClassName: j.default.oneOfType([
            j.default.string,
            j.default.object
        ]),
        progressClassName: j.default.oneOfType([
            j.default.string,
            j.default.object
        ]),
        progressStyle: j.default.object,
        transition: j.default.func,
        rtl: j.default.bool,
        draggable: j.default.bool,
        draggablePercent: j.default.number,
        pauseOnFocusLoss: j.default.bool
    }, v.defaultProps = {
        position: p.POSITION.TOP_RIGHT,
        transition: o.Bounce,
        rtl: !1,
        autoClose: 5000,
        hideProgressBar: !1,
        closeButton: i.default.createElement(n.default, null),
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
    }, h = v;
}), d.register('.....', function(e, f) {
    var g, h;
    a(e.exports), b(e.exports, '__esModule', function() {
        return g;
    }, function(i) {
        return g = i;
    }), b(e.exports, 'default', function() {
        return h;
    }, function(i) {
        return h = i;
    }), g = !0, h = void 0;
    var i = function(j) {
            if (j && j.__esModule)
                return j;
            var k = {};
            if (null != j)
                for (var l in j)
                    if (Object.prototype.hasOwnProperty.call(j, l)) {
                        var m = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(j, l) : {};
                        m.get || m.set ? Object.defineProperty(k, l, m) : k[l] = j[l];
                    }
            return k.default = j, k;
        }(d('.....')),
        j = _o(d('.....')),
        k = _o(d('.....')),
        l = _o(d('.....')),
        m = d('.....'),
        n = d('.....');

    function _o(p) {
        return p && p.__esModule ? p : {
            default: p
        };
    }

    function p() {
        return p = Object.assign || function(q) {
            for (var r = 1; r < arguments.length; r++) {
                var s = arguments[r];
                for (var t in s)
                    Object.prototype.hasOwnProperty.call(s, t) && (q[t] = s[t]);
            }
            return q;
        }, p.apply(this, arguments);
    }

    function q(r) {
        return r.targetTouches && r.targetTouches.length >= 1 ? r.targetTouches[0].clientX : r.clientX;
    }

    function r(s) {
        return s.targetTouches && s.targetTouches.length >= 1 ? s.targetTouches[0].clientY : s.clientY;
    }
    var s = function() {},
        t = function(u) {
            var v, w;

            function x() {
                for (var y, z = arguments.length, A = new Array(z), B = 0; B < z; B++)
                    x[B] = arguments[B];
                return (y = u.call.apply(u, [this].concat(x)) || this).state = {
                    isRunning: !0,
                    preventExitTransition: !1
                }, y.flag = {
                    canCloseOnClick: !0,
                    canDrag: !1
                }, y.drag = {
                    start: 0,
                    x: 0,
                    y: 0,
                    deltaX: 0,
                    removalDistance: 0
                }, y.ref = null, y.pauseToast = function() {
                    y.props.autoClose && y.setState({
                        isRunning: !1
                    });
                }, y.playToast = function() {
                    y.props.autoClose && y.setState({
                        isRunning: !0
                    });
                }, y.onDragStart = function(C) {
                    y.flag.canCloseOnClick = !0, y.flag.canDrag = !0, y.ref.style.transition = '', y.drag.start = y.drag.x = q(C.nativeEvent), y.drag.removalDistance = y.ref.offsetWidth * (y.props.draggablePercent / 100);
                }, y.onDragMove = function(C) {
                    y.flag.canDrag && (y.state.isRunning && y.pauseToast(), y.drag.x = q(C), y.drag.deltaX = y.drag.x - y.drag.start, y.drag.start !== y.drag.x && (y.flag.canCloseOnClick = !1), y.ref.style.transform = 'translateX(' + y.drag.deltaX + 'px)', y.ref.style.opacity = 1 - Math.abs(y.drag.deltaX / y.drag.removalDistance));
                }, y.onDragEnd = function(C) {
                    if (y.flag.canDrag) {
                        if (y.flag.canDrag = !1, Math.abs(y.drag.deltaX) > y.drag.removalDistance)
                            return void y.setState({
                                preventExitTransition: !0
                            }, y.props.closeToast);
                        y.drag.y = r(C), y.ref.style.transition = 'transform 0.2s, opacity 0.2s', y.ref.style.transform = 'translateX(0)', y.ref.style.opacity = 1;
                    }
                }, y.onDragTransitionEnd = function() {
                    var C = y.ref.getBoundingClientRect(),
                        D = C.top,
                        E = C.bottom,
                        F = C.left,
                        G = C.right;
                    y.props.pauseOnHover && y.drag.x >= F && y.drag.x <= G && y.drag.y >= D && y.drag.y <= E ? y.pauseToast() : y.playToast();
                }, y;
            }
            z = u, (y = x).prototype = Object.create(z.prototype), y.prototype.constructor = y, y.__proto__ = z;
            var C = x.prototype;
            return C.componentDidMount = function() {
                this.props.onOpen(this.props.children.props), this.props.draggable && this.bindDragEvents(), this.props.pauseOnFocusLoss && this.bindFocusEvents();
            }, C.componentDidUpdate = function(D) {
                D.draggable !== this.props.draggable && (this.props.draggable ? this.bindDragEvents() : this.unbindDragEvents()), D.pauseOnFocusLoss !== this.props.pauseOnFocusLoss && (this.props.pauseOnFocusLoss ? this.bindFocusEvents() : this.unbindFocusEvents());
            }, C.componentWillUnmount = function() {
                this.props.onClose(this.props.children.props), this.props.draggable && this.unbindDragEvents(), this.props.pauseOnFocusLoss && this.unbindFocusEvents();
            }, C.bindFocusEvents = function() {
                window.addEventListener('focus', this.playToast), window.addEventListener('blur', this.pauseToast);
            }, C.unbindFocusEvents = function() {
                window.removeEventListener('focus', this.playToast), window.removeEventListener('blur', this.pauseToast);
            }, C.bindDragEvents = function() {
                document.addEventListener('mousemove', this.onDragMove), document.addEventListener('mouseup', this.onDragEnd), document.addEventListener('touchmove', this.onDragMove), document.addEventListener('touchend', this.onDragEnd);
            }, C.unbindDragEvents = function() {
                document.removeEventListener('mousemove', this.onDragMove), document.removeEventListener('mouseup', this.onDragEnd), document.removeEventListener('touchmove', this.onDragMove), document.removeEventListener('touchend', this.onDragEnd);
            }, C.render = function() {
                var D = this,
                    E = this.props,
                    F = E.closeButton,
                    G = E.children,
                    H = E.autoClose,
                    I = E.pauseOnHover,
                    J = E.closeOnClick,
                    K = E.type,
                    L = E.hideProgressBar,
                    M = E.closeToast,
                    N = E.transition,
                    O = E.position,
                    P = E.onExited,
                    Q = E.className,
                    R = E.bodyClassName,
                    S = E.progressClassName,
                    T = E.progressStyle,
                    U = E.updateId,
                    V = E.role,
                    W = E.progress,
                    X = E.isProgressDone,
                    Y = E.rtl,
                    Z = {
                        className: (0, k.default)('Toastify__toast', 'Toastify__toast--' + K, {
                            'Toastify__toast--rtl': Y
                        }, Q)
                    };
                H && I && (Z.onMouseEnter = this.pauseToast, Z.onMouseLeave = this.playToast), J && (Z.onClick = function() {
                    return D.flag.canCloseOnClick && M();
                });
                var $ = parseFloat(W) === W;
                return i.default.createElement(N, {
                    in: this.props.in,
                    appear: !0,
                    unmountOnExit: !0,
                    onExited: P,
                    position: O,
                    preventExitTransition: this.state.preventExitTransition
                }, i.default.createElement('div', p({}, Z, {
                    ref: function(ab) {
                        return D.ref = ab;
                    },
                    onMouseDown: this.onDragStart,
                    onTouchStart: this.onDragStart,
                    onTransitionEnd: this.onDragTransitionEnd
                }), i.default.createElement('div', p({}, this.props.in && {
                    role: V
                }, {
                    className: (0, k.default)('Toastify__toast-body', R)
                }), G), F && F, (H || $) && i.default.createElement(l.default, p({}, U && !$ ? {
                    key: 'pb-' + U
                } : {}, {
                    rtl: Y,
                    delay: H,
                    isRunning: this.state.isRunning,
                    closeToast: M,
                    hide: L,
                    type: K,
                    style: T,
                    className: S,
                    controlledProgress: $,
                    isProgressDone: X,
                    progress: W
                }))));
            }, x;
        }(i.Component);
    t.propTypes = {
        closeButton: n.falseOrElement.isRequired,
        autoClose: n.falseOrDelay.isRequired,
        children: j.default.node.isRequired,
        closeToast: j.default.func.isRequired,
        position: j.default.oneOf((0, n.objectValues)(m.POSITION)).isRequired,
        pauseOnHover: j.default.bool.isRequired,
        pauseOnFocusLoss: j.default.bool.isRequired,
        closeOnClick: j.default.bool.isRequired,
        transition: j.default.func.isRequired,
        rtl: j.default.bool.isRequired,
        hideProgressBar: j.default.bool.isRequired,
        draggable: j.default.bool.isRequired,
        draggablePercent: j.default.number.isRequired,
        in: j.default.bool,
        onExited: j.default.func,
        onOpen: j.default.func,
        onClose: j.default.func,
        type: j.default.oneOf((0, n.objectValues)(m.TYPE)),
        className: j.default.oneOfType([
            j.default.string,
            j.default.object
        ]),
        bodyClassName: j.default.oneOfType([
            j.default.string,
            j.default.object
        ]),
        progressClassName: j.default.oneOfType([
            j.default.string,
            j.default.object
        ]),
        progressStyle: j.default.object,
        progress: j.default.number,
        isProgressDone: j.default.bool,
        updateId: j.default.oneOfType([
            j.default.string,
            j.default.number
        ]),
        ariaLabel: j.default.string
    }, t.defaultProps = {
        type: m.TYPE.DEFAULT,
        in: !0,
        onOpen: s,
        onClose: s,
        className: null,
        bodyClassName: null,
        progressClassName: null,
        updateId: null,
        role: 'alert'
    }, h = t;
}), d.register('.....', function(e, f) {
    var g, h;
    a(e.exports), b(e.exports, '__esModule', function() {
        return g;
    }, function(i) {
        return g = i;
    }), b(e.exports, 'default', function() {
        return h;
    }, function(i) {
        return h = i;
    }), g = !0, h = void 0;
    var i = _n(d('.....')),
        j = _n(d('.....')),
        k = _n(d('.....')),
        l = d('.....'),
        m = d('.....');

    function _n(o) {
        return o && o.__esModule ? o : {
            default: o
        };
    }

    function o() {
        return o = Object.assign || function(p) {
            for (var q = 1; q < arguments.length; q++) {
                var r = arguments[q];
                for (var s in r)
                    Object.prototype.hasOwnProperty.call(r, s) && (p[s] = r[s]);
            }
            return p;
        }, o.apply(this, arguments);
    }

    function p(q) {
        var r, s = q.delay,
            t = q.isRunning,
            u = q.closeToast,
            v = q.type,
            w = q.hide,
            x = q.className,
            y = q.style,
            z = q.controlledProgress,
            A = q.progress,
            B = q.isProgressDone,
            C = q.rtl,
            D = o({}, y, {
                animationDuration: s + 'ms',
                animationPlayState: t ? 'running' : 'paused',
                opacity: w ? 0 : 1,
                transform: z ? 'scaleX(' + _n + ')' : null
            }),
            E = (0, k.default)('Toastify__progress-bar', z ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated', 'Toastify__progress-bar--' + v, {
                'Toastify__progress-bar--rtl': C
            }, x),
            F = ((r = {})[z && p ? 'onTransitionEnd' : 'onAnimationEnd'] = z && !p ? null : u, r);
        return i.default.createElement('div', o({
            className: E,
            style: D
        }, F));
    }
    p.propTypes = {
        delay: z.falseOrDelay.isRequired,
        isRunning: x.default.bool.isRequired,
        closeToast: x.default.func.isRequired,
        rtl: x.default.bool.isRequired,
        type: x.default.string,
        hide: x.default.bool,
        className: x.default.oneOfType([
            x.default.string,
            x.default.object
        ]),
        progress: x.default.number,
        controlledProgress: x.default.bool,
        isProgressDone: x.default.bool
    }, p.defaultProps = {
        type: y.TYPE.DEFAULT,
        hide: !1
    }, w = p;
}), d.register('.....', function(e, f) {
    var g, h, i;
    b(e.exports, 'ACTION', function() {
        return g;
    }, function(j) {
        return g = j;
    }), b(e.exports, 'TYPE', function() {
        return h;
    }, function(j) {
        return h = j;
    }), b(e.exports, 'POSITION', function() {
        return i;
    }, function(j) {
        return i = j;
    }), g = h = i = void 0;
    i = {
        TOP_LEFT: 'top-left',
        TOP_RIGHT: 'top-right',
        TOP_CENTER: 'top-center',
        BOTTOM_LEFT: 'bottom-left',
        BOTTOM_RIGHT: 'bottom-right',
        BOTTOM_CENTER: 'bottom-center'
    };
    h = {
        INFO: 'info',
        SUCCESS: 'success',
        WARNING: 'warning',
        ERROR: 'error',
        DEFAULT: 'default'
    };
    g = {
        SHOW: 0,
        CLEAR: 1,
        DID_MOUNT: 2,
        WILL_UNMOUNT: 3,
        ON_CHANGE: 4
    };
}), d.register('.....', function(e, f) {
    var g, h, i, j;
    b(e.exports, 'isValidDelay', function() {
        return g;
    }, function(k) {
        return g = k;
    }), b(e.exports, 'objectValues', function() {
        return h;
    }, function(k) {
        return h = k;
    }), b(e.exports, 'falseOrElement', function() {
        return i;
    }, function(k) {
        return i = k;
    }), b(e.exports, 'falseOrDelay', function() {
        return j;
    }, function(k) {
        return j = k;
    }), g = _l, h = function(k) {
        return Object.keys(k).map(function(l) {
            return k[l];
        });
    }, i = j = void 0;
    var k = d('.....');

    function _l(m) {
        return 'number' == typeof m && !isNaN(m) && m > 0;
    }

    function m(n) {
        return n.isRequired = function(o, p, q) {
            if (void 0 === o[p])
                return new Error('The prop ' + p + ' is marked as required in \n      ' + q + ', but its value is undefined.');
            n(o, p, q);
        }, n;
    }
    var n = m(function(o, p, q) {
        var r = o[p];
        return !1 === r || _l(r) ? null : new Error(q + ' expect ' + p + ' \n      to be a valid Number > 0 or equal to false. ' + r + ' given.');
    });
    j = n;
    var o = m(function(p, q, r) {
        var s = p[q];
        return !1 === s || (0, k.isValidElement)(s) ? null : new Error(r + ' expect ' + q + ' \n      to be a valid react element or equal to false. ' + s + ' given.');
    });
    i = o;
}), d.register('.....', function(e, f) {
    var g, h;
    a(e.exports), b(e.exports, '__esModule', function() {
        return g;
    }, function(i) {
        return g = i;
    }), b(e.exports, 'default', function() {
        return h;
    }, function(i) {
        return h = i;
    }), g = !0, h = void 0;
    var i = _k(d('.....')),
        j = _k(d('.....'));

    function _k(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }

    function l(m) {
        var n = m.closeToast,
            o = m.type,
            p = m.ariaLabel;
        return i.default.createElement('button', {
            className: 'Toastify__close-button Toastify__close-button--' + o,
            type: 'button',
            onClick: n,
            'aria-label': p
        }, '\u2716');
    }
    l.propTypes = {
        closeToast: j.default.func,
        arialLabel: j.default.string
    }, l.defaultProps = {
        ariaLabel: 'close'
    }, h = l;
}), d.register('.....', function(e, f) {
    var g, h, i, j;
    b(e.exports, 'Flip', function() {
        return g;
    }, function(k) {
        return g = k;
    }), b(e.exports, 'Zoom', function() {
        return h;
    }, function(k) {
        return h = k;
    }), b(e.exports, 'Slide', function() {
        return i;
    }, function(k) {
        return i = k;
    }), b(e.exports, 'Bounce', function() {
        return j;
    }, function(k) {
        return j = k;
    }), g = h = i = j = void 0;
    var k, l = (k = d('.....')) && k.__esModule ? k : {
        default: k
    };
    var m = (0, l.default)({
        enter: 'Toastify__bounce-enter',
        exit: 'Toastify__bounce-exit',
        appendPosition: !0
    });
    j = m;
    var n = (0, l.default)({
        enter: 'Toastify__slide-enter',
        exit: 'Toastify__slide-exit',
        duration: [
            450,
            750
        ],
        appendPosition: !0
    });
    i = n;
    var o = (0, l.default)({
        enter: 'Toastify__zoom-enter',
        exit: 'Toastify__zoom-exit'
    });
    h = o;
    var p = (0, l.default)({
        enter: 'Toastify__flip-enter',
        exit: 'Toastify__flip-exit'
    });
    g = p;
}), d.register('.....', function(e, f) {
    var g, h;
    a(e.exports), b(e.exports, '__esModule', function() {
        return g;
    }, function(i) {
        return g = i;
    }), b(e.exports, 'default', function() {
        return h;
    }, function(i) {
        return h = i;
    }), g = !0, h = function(i) {
        var j = i.enter,
            k = i.exit,
            l = i.duration,
            m = void 0 === l ? 750 : l,
            n = i.appendPosition,
            o = void 0 !== n && n;
        return function(p) {
            var q, r, s = p.children,
                t = p.position,
                u = p.preventExitTransition,
                v = function(w, x) {
                    if (null == w)
                        return {};
                    var y, z, A = {},
                        B = Object.keys(w);
                    for (z = 0; z < B.length; z++)
                        y = B[z], x.indexOf(y) >= 0 || (A[y] = w[y]);
                    return A;
                }(p, [
                    'children',
                    'position',
                    'preventExitTransition'
                ]),
                w = o ? j + '--' + t : j,
                x = o ? k + '--' + t : k;
            Array.isArray(m) && 2 === m.length ? (q = m[0], r = m[1]) : q = r = m;
            return _i.default.createElement(_j.default, _l({}, v, {
                timeout: u ? 0 : {
                    enter: q,
                    exit: r
                },
                onEnter: function(y) {
                    y.classList.add(w), y.style.animationFillMode = 'forwards', y.style.animationDuration = 0.001 * q + 's';
                },
                onEntered: function(y) {
                    y.classList.remove(w), y.style.cssText = '';
                },
                onExit: u ? _m : function(y) {
                    y.classList.add(x), y.style.animationFillMode = 'forwards', y.style.animationDuration = 0.001 * r + 's';
                }
            }), s);
        };
    };
    var _i = _k(d('.....')),
        _j = _k(d('.....'));

    function _k(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }

    function _l() {
        return _l = Object.assign || function(m) {
            for (var n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                for (var p in o)
                    Object.prototype.hasOwnProperty.call(o, p) && (m[p] = o[p]);
            }
            return m;
        }, _l.apply(this, arguments);
    }
    var _m = function() {};
}), d.register('.....', function(e, f) {
    var g, h;
    a(e.exports), b(e.exports, '__esModule', function() {
        return g;
    }, function(i) {
        return g = i;
    }), b(e.exports, 'default', function() {
        return h;
    }, function(i) {
        return h = i;
    }), g = !0, h = void 0;
    var i = {
        list: new Map(),
        on: function(j, k) {
            return this.list.has(j) || this.list.set(j, []), this.list.get(j).push(k), this;
        },
        off: function(j) {
            return this.list.delete(j), this;
        },
        emit: function(j) {
            for (var k = arguments.length, l = new Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++)
                l[m - 1] = arguments[m];
            return !!this.list.has(j) && (this.list.get(j).forEach(function(n) {
                return setTimeout(function() {
                    return n.call.apply(n, [null].concat(l));
                }, 0);
            }), !0);
        }
    };
    h = i;
}), d.register('.....', function(e, f) {
    var g, h;
    a(e.exports), b(e.exports, '__esModule', function() {
        return g;
    }, function(i) {
        return g = i;
    }), b(e.exports, 'default', function() {
        return h;
    }, function(i) {
        return h = i;
    }), g = !0, h = void 0;
    var i, j = (i = d('.....')) && i.__esModule ? i : {
            default: i
        },
        k = d('.....');

    function l() {
        return l = Object.assign || function(m) {
            for (var n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                for (var p in o)
                    Object.prototype.hasOwnProperty.call(o, p) && (m[p] = o[p]);
            }
            return m;
        }, l.apply(this, arguments);
    }
    var m = null,
        n = [],
        o = function() {
            return !1;
        };

    function p(q, r) {
        return l({}, q, {
            type: r,
            toastId: _r(q)
        });
    }

    function q() {
        return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
    }

    function _r(s) {
        return s && ('string' == typeof s.toastId || 'number' == typeof s.toastId && !isNaN(s.toastId)) ? s.toastId : q();
    }

    function s(t, u) {
        return null !== m ? j.default.emit(k.ACTION.SHOW, t, u) : n.push({
            action: k.ACTION.SHOW,
            content: t,
            options: u
        }), u.toastId;
    }
    var t = l(function(u, v) {
        return s(u, p(v, v && v.type || k.TYPE.DEFAULT));
    }, {
        success: function(u, v) {
            return s(u, p(v, k.TYPE.SUCCESS));
        },
        info: function(u, v) {
            return s(u, p(v, k.TYPE.INFO));
        },
        warn: function(u, v) {
            return s(u, p(v, k.TYPE.WARNING));
        },
        warning: function(u, v) {
            return s(u, p(v, k.TYPE.WARNING));
        },
        error: function(u, v) {
            return s(u, p(v, k.TYPE.ERROR));
        },
        dismiss: function(u) {
            return void 0 === u && (u = null), m && j.default.emit(k.ACTION.CLEAR, u);
        },
        isActive: o,
        update: function(u, v) {
            setTimeout(function() {
                if (m && void 0 !== m.collection[u]) {
                    var w = m.collection[u],
                        x = w.options,
                        y = w.content,
                        z = l({}, x, v, {
                            toastId: v.toastId || u
                        });
                    v.toastId && v.toastId !== u ? z.staleToastId = u : z.updateId = q();
                    var A = void 0 !== z.render ? z.render : y;
                    delete z.render, s(A, z);
                }
            }, 0);
        },
        done: function(u, v) {
            void 0 === v && (v = 1), t.update(u, {
                progress: v,
                isProgressDone: !0
            });
        },
        onChange: function(u) {
            'function' == typeof u && j.default.on(k.ACTION.ON_CHANGE, u);
        },
        POSITION: k.POSITION,
        TYPE: k.TYPE
    });
    j.default.on(k.ACTION.DID_MOUNT, function(u) {
        m = u, t.isActive = function(v) {
            return m.isToastActive(v);
        }, n.forEach(function(v) {
            j.default.emit(v.action, v.content, v.options);
        }), n = [];
    }).on(k.ACTION.WILL_UNMOUNT, function() {
        m = null, t.isActive = o;
    }), h = t;
}), d.register('.....', function(e, f) {
    b(e.exports, 'upgradeNames', function() {
        return d;
    });
    const g = {
        moneyPerQuestion: 'Money Per Question',
        streakBonus: 'Streak Bonus',
        multiplier: 'Multiplier',
        insurance: 'Insurance'
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'correct', function() {
        return _i;
    }), b(e.exports, 'incorrect', function() {
        return _j;
    }), b(e.exports, 'click', function() {
        return _k;
    }), b(e.exports, 'click2', function() {
        return _l;
    }), b(e.exports, 'applyTheme', function() {
        return _m;
    }), b(e.exports, 'successClick', function() {
        return _n;
    }), b(e.exports, 'woosh', function() {
        return _o;
    }), b(e.exports, 'done', function() {
        return _p;
    }), b(e.exports, 'celebrate', function() {
        return _q;
    }), b(e.exports, 'error', function() {
        return _r;
    }), b(e.exports, 'success', function() {
        return _s;
    }), b(e.exports, 'alert', function() {
        return _t;
    }), b(e.exports, 'clap', function() {
        return _u;
    }), b(e.exports, 'pop', function() {
        return _v;
    }), b(e.exports, 'freeze', function() {
        return _w;
    }), b(e.exports, 'stone', function() {
        return _x;
    }), b(e.exports, 'drain', function() {
        return _y;
    }), b(e.exports, 'pieSlice', function() {
        return _z;
    }), b(e.exports, 'spark', function() {
        return _A;
    }), b(e.exports, 'bounce', function() {
        return _B;
    });
    var g = d('.....'),
        h = d('.....');
    const _i = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('correct.mp3')]
        }),
        _j = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('incorrect.mp3')]
        }),
        _k = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('click.wav')]
        }),
        _l = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('click2.wav')]
        }),
        _m = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('applyTheme.wav')]
        }),
        _n = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('successClick.wav')]
        }),
        _o = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('woosh.wav')]
        }),
        _p = (new(0, g.Howl)({
            src: [(0, h.getAssetPath)('splash.wav')]
        }), new(0, g.Howl)({
            src: [(0, h.getAssetPath)('done.wav')]
        })),
        _q = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('celebrate.mp3')],
            volume: 0.5
        }),
        _r = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('error.wav')]
        }),
        _s = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('success.wav')]
        }),
        _t = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('alert.wav')]
        }),
        _u = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('clap.wav')]
        }),
        _v = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('pop.mp3')]
        }),
        _w = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('freeze.mp3')]
        }),
        _x = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('stone.mp3')]
        }),
        _y = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('drain.mp3')],
            volume: 0.7
        }),
        _z = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('pieSlice.mp3')]
        }),
        _A = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('spark.mp3')],
            volume: 0.4
        }),
        _B = new(0, g.Howl)({
            src: [(0, h.getAssetPath)('bounce.wav')]
        });
}), d.register('.....', function(e, f) {
    b(e.exports, 'THANOS', function() {
        return d;
    }), b(e.exports, 'HIDDEN', function() {
        return _h;
    }), b(e.exports, 'SHOP_QR_SCAN', function() {
        return _i;
    }), b(e.exports, 'DEFENDING_HOMEBASE', function() {
        return _j;
    }), b(e.exports, 'LAVA', function() {
        return _k;
    }), b(e.exports, 'IMPOSTER', function() {
        return _l;
    }), b(e.exports, 'DRAW', function() {
        return _m;
    }), b(e.exports, 'COMEBACK', function() {
        return _n;
    }), b(e.exports, 'PARDY', function() {
        return _o;
    });
    const g = 'THANOS',
        _h = 'HIDDEN',
        _i = 'SHOP_QR_SCAN',
        _j = 'DEFENDING_HOMEBASE',
        _k = 'LAVA',
        _l = 'IMPOSTER',
        _m = 'DRAW',
        _n = 'COMEBACK',
        _o = 'PARDY';
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = {
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
}), d.register('.....', function(e, f) {
    b(e.exports, 'DRAW_MODE_FONT', function() {
        return d;
    });
    const g = '\'Pangolin\', sans-serif';
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _g;
    });
    var _g = d('.....').default;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    const g = '"Product Sans"';
    var _h = {
        mainFontName: g,
        name: g + ', sans-serif',
        important: g + ', sans-serif!important'
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'CLASSIC', function() {
        return d;
    }), b(e.exports, 'TEAMS', function() {
        return _h;
    }), b(e.exports, 'THANOS', function() {
        return _i;
    }), b(e.exports, 'BOSS_BATTLE', function() {
        return _j;
    }), b(e.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return _k;
    }), b(e.exports, 'LAVA', function() {
        return _l;
    }), b(e.exports, 'IMPOSTER', function() {
        return _m;
    }), b(e.exports, 'DRAW', function() {
        return _n;
    }), b(e.exports, 'PARDY', function() {
        return _o;
    });
    const g = 'CLASSIC',
        _h = 'TEAMS',
        _i = 'THANOS',
        _j = 'BOSS_BATTLE',
        _k = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        _l = 'LAVA',
        _m = 'IMPOSTER',
        _n = 'DRAW',
        _o = 'PARDY';
}), d.register('.....', function(e, f) {
    b(e.exports, 'CSS_TRANSITION_TIMEOUT', function() {
        return d;
    });
    const g = 250;
}), d.register('.....', function(e, f) {
    b(e.exports, 'defaultShopColor', function() {
        return _k;
    }), b(e.exports, 'defaultContinueColor', function() {
        return _l;
    }), b(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    const j = d('.....').themes.filter(k => 'Default' === k.name)[0],
        _k = {
            background: '#311B92',
            text: h.default.White
        },
        _l = {
            background: '#1A237E',
            text: h.default.White
        };
    class m {
        constructor() {
            this.theme = {
                defaultBackground: j.question.background,
                question: j.question,
                palette: j.palette,
                response: {
                    correctAnswer: {
                        background: '#388E3C',
                        text: h.default.White
                    },
                    incorrectAnswer: {
                        background: '#B71C1C',
                        text: h.default.White
                    },
                    shop: _k,
                    continue: _l
                },
                desktopBreakpoint: 650
            }, this.availableThemes = i.observable.array(), this.disabledThemes = i.observable.array(), this.themeName = j.name, this.ownedThemes = i.observable.array(), (0, i.makeObservable)(this);
        }
    }
    (0, g.__decorate)([i.observable], m.prototype, 'theme', void 0), (0, g.__decorate)([i.observable], m.prototype, 'availableThemes', void 0), (0, g.__decorate)([i.observable], m.prototype, 'disabledThemes', void 0), (0, g.__decorate)([i.observable], m.prototype, 'themeName', void 0), (0, g.__decorate)([i.observable], m.prototype, 'ownedThemes', void 0);
    var _n = m;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'translations', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            this.fullBlackScreen = !1, this.snowing = !1, this.blurredScreen = !1, this.showingSuccessModal = !1, this.successModalInfo = {
                icon: '',
                background: '',
                color: '',
                title: '',
                description: '',
                sound: '',
                textOptions: null
            }, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'fullBlackScreen', void 0), (0, g.__decorate)([h.observable], i.prototype, 'snowing', void 0), (0, g.__decorate)([h.observable], i.prototype, 'blurredScreen', void 0), (0, g.__decorate)([h.observable], i.prototype, 'showingSuccessModal', void 0), (0, g.__decorate)([h.observable], i.prototype, 'successModalInfo', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    b(e.exports, 'upgradeNames', function() {
        return _i;
    }), b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....');
    const _i = {
        moneyPerQuestion: 'Money Per Question',
        streakBonus: 'Streak Bonus',
        multiplier: 'Multiplier',
        insurance: 'Insurance'
    };
    class j {
        constructor() {
            this.upgradePricingDiscount = 1, this.upgrades = h.observable.array(), this.currentlySelectedUpgrade = _i.moneyPerQuestion, this.upgradeLevels = {
                moneyPerQuestion: 1,
                streakBonus: 1,
                multiplier: 1,
                insurance: 1
            }, this.upgradeLevelTabs = {
                moneyPerQuestion: 2,
                streakBonus: 2,
                multiplier: 2,
                insurance: 2
            }, this.homebaseUpgades = h.observable.array(), this.lavaUpgrades = h.observable.array(), (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], j.prototype, 'upgradePricingDiscount', void 0), (0, g.__decorate)([h.observable], j.prototype, 'upgrades', void 0), (0, g.__decorate)([h.observable], j.prototype, 'currentlySelectedUpgrade', void 0), (0, g.__decorate)([h.observable], j.prototype, 'upgradeLevels', void 0), (0, g.__decorate)([h.observable], j.prototype, 'upgradeLevelTabs', void 0), (0, g.__decorate)([h.observable], j.prototype, 'homebaseUpgades', void 0), (0, g.__decorate)([h.observable], j.prototype, 'lavaUpgrades', void 0);
    var _k = j;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            this.name = '', this.groupId = '', this.groupMemberId = '', this.theme = 'Default', this.team = null, this.place = 1, this.readToMeEnabled = !1, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'name', void 0), (0, g.__decorate)([h.observable], i.prototype, 'groupId', void 0), (0, g.__decorate)([h.observable], i.prototype, 'groupMemberId', void 0), (0, g.__decorate)([h.observable], i.prototype, 'theme', void 0), (0, g.__decorate)([h.observable], i.prototype, 'team', void 0), (0, g.__decorate)([h.observable], i.prototype, 'place', void 0), (0, g.__decorate)([h.observable], i.prototype, 'readToMeEnabled', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    b(e.exports, 'ImposterStatus', function() {
        return _i;
    }), b(e.exports, 'PersonRole', function() {
        return _k;
    }), b(e.exports, 'ImposterShopItemId', function() {
        return _m;
    }), b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....');
    let _i;
    var j;
    let _k;
    var l;
    let _m;
    var n;
    (j = _i || (_i = {})).intro = 'intro', j.questions = 'questions', j.discussion = 'discussion', j.voting = 'voting', j.votingResult = 'votingResult', (l = _k || (_k = {})).detective = 'detective', l.imposter = 'imposter', (n = _m || (_m = {})).donate = 'donate', n.privateInvestigation = 'privateInvestigation', n.publicInvestigation = 'publicInvestigation', n.meeting = 'meeting', n.investigationRemover = 'investigationRemover', n.fakeInvestigation = 'fakeInvestigation', n.noteViewer = 'noteViewer', n.blendIn = 'blendIn', n.clearListRemover = 'clearListRemover';
    class o {
        constructor() {
            this.status = _i.intro, this.me = null, this.meetingsLeft = 0, this.impostersLeft = 0, this.investigationsLeft = 0, this.epl = null, this.shopItems = h.observable.array(), this.currentShopItem = null, this.currentShopItemModalVisible = !1, this.noteDrawerOpen = !1, this.roleModalOpen = !0, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], o.prototype, 'status', void 0), (0, g.__decorate)([h.observable], o.prototype, 'me', void 0), (0, g.__decorate)([h.observable], o.prototype, 'meetingsLeft', void 0), (0, g.__decorate)([h.observable], o.prototype, 'impostersLeft', void 0), (0, g.__decorate)([h.observable], o.prototype, 'investigationsLeft', void 0), (0, g.__decorate)([h.observable], o.prototype, 'epl', void 0), (0, g.__decorate)([h.observable], o.prototype, 'shopItems', void 0), (0, g.__decorate)([h.observable], o.prototype, 'currentShopItem', void 0), (0, g.__decorate)([h.observable], o.prototype, 'currentShopItemModalVisible', void 0), (0, g.__decorate)([h.observable], o.prototype, 'noteDrawerOpen', void 0), (0, g.__decorate)([h.observable], o.prototype, 'roleModalOpen', void 0);
    var _p = o;
}), d.register('.....', function(e, f) {
    b(e.exports, 'PointAdditionType', function() {
        return _i;
    }), b(e.exports, 'DrawRole', function() {
        return _k;
    }), b(e.exports, 'DrawStatus', function() {
        return _m;
    }), b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....');
    let _i;
    var j;
    let _k;
    var l;
    let _m;
    var n;
    (j = _i || (_i = {})).correct = 'correct', j.speed = 'speed', j.firstGuess = 'firstGuess', j.goodDrawer = 'goodDrawer', (l = _k || (_k = {})).drawer = 'Drawer', l.guesser = 'Guesser', (n = _m || (_m = {})).pickDrawer = 'pickDrawer', n.termSelection = 'termSelection', n.drawing = 'drawing', n.results = 'results';
    class o {
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
                role: _k.guesser,
                lastRound: null,
                answeredCorrectly: !1
            }, this.status = _m.pickDrawer, this.latestLine = null, this.latestFeedItem = null, this.shouldClearCanvas = !1, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], o.prototype, 'round', void 0), (0, g.__decorate)([h.observable], o.prototype, 'me', void 0), (0, g.__decorate)([h.observable], o.prototype, 'status', void 0), (0, g.__decorate)([h.observable], o.prototype, 'latestLine', void 0), (0, g.__decorate)([h.observable], o.prototype, 'latestFeedItem', void 0), (0, g.__decorate)([h.observable], o.prototype, 'shouldClearCanvas', void 0);
    var _p = o;
}), d.register('.....', function(e, f) {
    b(e.exports, 'PardyScreen', function() {
        return _i;
    }), b(e.exports, 'PardyQuestionScreen', function() {
        return _k;
    }), b(e.exports, 'PardyQuestionStatus', function() {
        return _m;
    }), b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....');
    let _i;
    var j;
    let _k;
    var l;
    let _m;
    var n;
    (j = _i || (_i = {})).home = 'home', j.question = 'question', j.answer = 'answer', (l = _k || (_k = {})).preview = 'preview', l.finale = 'finale', l.question = 'question', (n = _m || (_m = {})).preview = 'preview', n.ask = 'ask', n.timesUp = 'timesUp';
    class o {
        constructor() {
            this.screen = _i.home, this.questionScreen = _k.preview, this.questionStatus = _m.preview, this.powers = h.observable.array(), this.power = '', this.powerOptions = h.observable.array(), this.currentQuestion = null, this.animatingQuestionScreenOut = !1, this.animatingBetScreenOut = !1, this.answered = !1, this.answeredCorrectly = !1, this.answerResponseItems = h.observable.array(), this.maxBet = 1, this.currentBet = 0, this.tips = h.observable.array(), this.answerLockedInWittyMessages = h.observable.array(), this.correctWittyMessages = h.observable.array(), this.incorrectWittyMessages = h.observable.array(), (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], o.prototype, 'screen', void 0), (0, g.__decorate)([h.observable], o.prototype, 'questionScreen', void 0), (0, g.__decorate)([h.observable], o.prototype, 'questionStatus', void 0), (0, g.__decorate)([h.observable], o.prototype, 'powers', void 0), (0, g.__decorate)([h.observable], o.prototype, 'power', void 0), (0, g.__decorate)([h.observable], o.prototype, 'powerOptions', void 0), (0, g.__decorate)([h.observable], o.prototype, 'currentQuestion', void 0), (0, g.__decorate)([h.observable], o.prototype, 'animatingQuestionScreenOut', void 0), (0, g.__decorate)([h.observable], o.prototype, 'animatingBetScreenOut', void 0), (0, g.__decorate)([h.observable], o.prototype, 'answered', void 0), (0, g.__decorate)([h.observable], o.prototype, 'answeredCorrectly', void 0), (0, g.__decorate)([h.observable], o.prototype, 'answerResponseItems', void 0), (0, g.__decorate)([h.observable], o.prototype, 'maxBet', void 0), (0, g.__decorate)([h.observable], o.prototype, 'currentBet', void 0), (0, g.__decorate)([h.observable], o.prototype, 'tips', void 0), (0, g.__decorate)([h.observable], o.prototype, 'answerLockedInWittyMessages', void 0), (0, g.__decorate)([h.observable], o.prototype, 'correctWittyMessages', void 0), (0, g.__decorate)([h.observable], o.prototype, 'incorrectWittyMessages', void 0);
    var _p = o;
}), d.register('.....', function(e, f) {
    b(e.exports, 'startLoop', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    const i = () => {
            h.default.forEach(j => {
                var k;
                window[j] && (k = j, setTimeout(() => {
                    (0, g.send)('REDBOAT', k);
                }, 130));
            });
        },
        _j = () => {
            setInterval(i, 10000);
        };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = [
        'clickElement',
        'Exploit',
        'msgpack',
        'AYO_YOU_SHOULDNT_BE_HERE_ROCKS_NETWORK_VAREDZP',
        'getAnswer'
    ];
    var _h = [
        g[0],
        g[1],
        g[2],
        g[3]
    ];
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....');
    const q = (0, h.default)({
        typography: {
            fontFamily: [
                k.default.mainFontName,
                'sans-serif'
            ].join(',')
        }
    });
    var _r = (0, o.observer)(s => {
        const {
            theme: t
        } = l.useContext(p.default);
        return (0, g.jsx)(i.default, {
            theme: q,
            children: (0, g.jsx)(m.ThemeProvider, {
                theme: (0, n.toJS)(t.theme),
                children: (0, g.jsx)(g.Fragment, {
                    children: (0, g.jsx)(j.default, {
                        ...s
                    })
                })
            })
        });
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....'),
        j = d('.....'),
        k = d('.....');
    var _l = function(m) {
        var n = m.children,
            o = m.theme,
            p = (0, j.default)(),
            q = c(h).useMemo(function() {
                var r = null === p ? o : function(s, t) {
                    return 'function' == typeof t ? t(s) : (0, g.default)((0, g.default)({}, s), t);
                }(p, o);
                return null != r && (r[k.default] = null !== p), r;
            }, [
                o,
                p
            ]);
        return c(h).createElement(i.default.Provider, {
            value: q
        }, n);
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var _i = j => (0, g.jsx)(h.default, {
        ...j
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _C;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....');
    let v, w, x, y = z => z;
    const z = k.default.div(v || (v = y`
  display: flex;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  color: ${ 0 };
`), u.default.Black),
        A = k.default.div(w || (w = y`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  font-family: ${ 0 };
  user-select: none;
  ${ 0 }
  transition: filter 1s;
  overflow: hidden;
`), l.default.name, B => B.blurred && 'filter: blur(5px);'),
        B = k.default.div(x || (x = y`
  height: 0px;
  width: 0px;
  .toast-body {
    font-family: ${ 0 };
  }
`), l.default.name);
    var _C = (0, j.observer)(D => {
        const {
            ui: E
        } = h.useContext(t.default);
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(p.default, {
                    children: (0, g.jsx)(z, {
                        children: (0, g.jsxs)(A, {
                            blurred: E.blurredScreen,
                            children: [
                                (0, g.jsx)(m.default, {}),
                                (0, g.jsx)(n.default, {
                                    ...D
                                })
                            ]
                        })
                    })
                }),
                (0, g.jsx)(B, {
                    children: (0, g.jsx)(i.ToastContainer, {
                        bodyClassName: 'toast-body'
                    })
                }),
                (0, g.jsx)(q.default, {}),
                (0, g.jsx)(r.default, {}),
                (0, g.jsx)(s.default, {}),
                (0, g.jsx)(o.default, {})
            ]
        });
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    class m extends h.Component {
        render() {
            return (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(j.default, {}),
                    (0, g.jsx)(l.default, {}),
                    (0, g.jsx)(k.default, {}),
                    (0, g.jsx)(i.default, {})
                ]
            });
        }
    }
    var _n = m;
}), d.register('.....', function(e, f) {
    b(e.exports, 'DISABLED_PATHS', function() {
        return _E;
    }), b(e.exports, 'default', function() {
        return _I;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....');
    d('.....');
    var w = d('.....'),
        x = d('.....'),
        y = d('.....');
    let z, A, B, C = D => D;
    const D = [
            m.default.join,
            m.default.drawMode
        ],
        _E = [
            m.default.waiting,
            m.default.gameOver,
            m.default.team,
            m.default.nonDismissMessage,
            m.default.imposterMode
        ],
        F = q.default.div(z || (z = C`
  flex: 0 1 auto;
  color: ${ 0 };
`), k.default.White),
        G = q.default.div(A || (A = C`
  height: ${ 0 }px;
  background: #4252af;
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${ 0 };
  z-index: 1;
`), 63, l.default.basic),
        H = q.default.div(B || (B = C`
  width: 100%;
  display: flex;
  align-items: center;
`));
    var _I = (0, o.observer)(() => {
        const {
            balance: J,
            user: K,
            navigation: L,
            powerups: M,
            questions: {
                lockedViewingCorrectAnswer: N
            }
        } = p.useContext(y.default), O = p.useCallback(() => {
            if (!N)
                return L.currentRoute === m.default.questions ? (0, n.changeRoute)(m.default.shop) : (0, n.changeRoute)(m.default.questions);
        }, [
            L.currentRoute,
            N
        ]), P = p.useCallback(() => {
            const Q = {
                fontWeight: 900,
                cursor: 'pointer',
                fontSize: 22
            };
            return K.team ? {
                ...Q,
                padding: 5,
                backgroundColor: (0, n.getTeamColor)(),
                borderRadius: 4
            } : Q;
        }, [K.team]), Q = p.useCallback(() => (0, n.toggleDrawer)(!0), []), R = () => (0, n.inHiddenMode)() || M.appliedPowerups.includes(w.PowerupNames.cashConcealer) ? (0, g.jsx)('div', {}) : (0, g.jsx)('div', {
            onClick: O,
            style: P(),
            children: (0, n.getMoney)(J.balance)
        });
        return D.includes(L.currentRoute) ? null : _E.includes(L.currentRoute) ? (0, g.jsx)(G, {
            children: (0, g.jsx)(H, {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: (0, g.jsx)('img', {
                    src: '/client/img/svgLogoWhite.svg',
                    style: {
                        height: 30
                    }
                })
            })
        }) : (0, g.jsxs)(F, {
            children: [
                (0, g.jsx)(G, {
                    children: (0, g.jsxs)(H, {
                        style: {
                            paddingLeft: 8,
                            paddingRight: 10
                        },
                        children: [
                            (0, g.jsx)(r.default, {}),
                            (0, g.jsx)(h.default, {
                                onClick: Q,
                                color: 'inherit',
                                'aria-label': 'Menu',
                                children: (0, g.jsx)(j.default, {})
                            }),
                            (0, g.jsx)(t.default, {}),
                            (0, g.jsx)(s.default, {}),
                            (0, g.jsx)(x.default, {}),
                            (0, g.jsx)(u.default, {}),
                            (0, g.jsxs)('div', {
                                style: {
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    color: J.customColor ? J.customColor : 'inherit',
                                    transition: 'color 0.25s'
                                },
                                children: [
                                    (0, g.jsx)('div', {}),
                                    (0, g.jsx)('div', {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center'
                                        },
                                        children: (0, g.jsx)('div', {
                                            children: K.team ? (0, g.jsx)(i.default, {
                                                title: (0, g.jsx)('div', {
                                                    style: {
                                                        fontSize: 19,
                                                        padding: 5
                                                    },
                                                    children: (0, n.capitalizeFirstLetter)(K.team.id)
                                                }),
                                                placement: 'left',
                                                children: R()
                                            }) : R()
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, g.jsx)(v.default, {})
            ]
        });
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = i.forwardRef(function(p, q) {
            var r = p.edge,
                s = void 0 !== r && r,
                t = p.children,
                u = p.classes,
                v = p.className,
                w = p.color,
                x = void 0 === w ? 'default' : w,
                y = p.disabled,
                z = void 0 !== y && y,
                A = p.disableFocusRipple,
                B = void 0 !== A && A,
                C = p.size,
                D = void 0 === C ? 'medium' : C,
                E = (0, h.default)(p, [
                    'edge',
                    'children',
                    'classes',
                    'className',
                    'color',
                    'disabled',
                    'disableFocusRipple',
                    'size'
                ]);
            return i.createElement(m.default, (0, g.default)({
                className: (0, j.default)(u.root, v, 'default' !== x && u['color'.concat((0, n.default)(x))], z && u.disabled, 'small' === D && u['size'.concat((0, n.default)(D))], {
                    start: u.edgeStart,
                    end: u.edgeEnd
                } [s]),
                centerRipple: !0,
                focusRipple: !B,
                disabled: z,
                ref: q
            }, E), i.createElement('span', {
                className: u.label
            }, t));
        }),
        _p = (0, k.default)(function(q) {
            return {
                root: {
                    textAlign: 'center',
                    flex: '0 0 auto',
                    fontSize: q.typography.pxToRem(24),
                    padding: 12,
                    borderRadius: '50%',
                    overflow: 'visible',
                    color: q.palette.action.active,
                    transition: q.transitions.create('background-color', {
                        duration: q.transitions.duration.shortest
                    }),
                    '&:hover': {
                        backgroundColor: (0, l.fade)(q.palette.action.active, q.palette.action.hoverOpacity),
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    },
                    '&$disabled': {
                        backgroundColor: 'transparent',
                        color: q.palette.action.disabled
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
                    color: q.palette.primary.main,
                    '&:hover': {
                        backgroundColor: (0, l.fade)(q.palette.primary.main, q.palette.action.hoverOpacity),
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                colorSecondary: {
                    color: q.palette.secondary.main,
                    '&:hover': {
                        backgroundColor: (0, l.fade)(q.palette.secondary.main, q.palette.action.hoverOpacity),
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                disabled: {},
                sizeSmall: {
                    padding: 3,
                    fontSize: q.typography.pxToRem(18)
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
        })(o);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'
        }), 'Menu');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');

    function _j(k, l) {
        var m = c(h).memo(c(h).forwardRef(function(n, o) {
            return c(h).createElement(i.default, (0, g.default)({
                ref: o
            }, n), k);
        }));
        return m.muiName = i.default.muiName, m;
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = {
        basic: '0px 4px 33px -6px rgba(0, 0, 0, 0.46)'
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _t;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    const r = s => (0, i.jsx)('div', {
        style: {
            color: l.default.White
        },
        children: (0, i.jsx)(j.default, {
            onClick: s.goBack,
            color: 'inherit',
            children: (0, i.jsx)(k.default, {})
        })
    });
    let s = class extends q.Component {
        render() {
            return this.props.navigation.currentRoute === m.default.upgrade ? (0, i.jsx)(r, {
                goBack: this.goBack
            }) : null;
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'goBack', () => {
                n.click.play(), (0, o.changeRoute)(m.default.shop);
            });
        }
    };
    s = (0, h.__decorate)([
        (0, p.inject)('navigation'),
        p.observer
    ], s);
    var _t = s;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'
        }), 'ArrowBack');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    var _r = (0, l.observer)(() => {
        const {
            navigation: s,
            questions: t,
            user: u,
            pardy: v
        } = m.useContext(n.default);
        return (0, g.jsx)(g.Fragment, {
            children: u.readToMeEnabled && o.default.hasFinishedReading() && o.default.canPlayAgain() && (s.currentRoute === k.default.questions || s.currentRoute === k.default.pardyMode) && (0, g.jsx)('div', {
                style: {
                    color: j.default.White
                },
                children: (0, g.jsx)(h.default, {
                    onClick: () => {
                        (0, p.inPardyMode)() ? o.default.play(v.currentQuestion): o.default.play((0, q.DecryptData)(t.ceq));
                    },
                    color: 'inherit',
                    children: (0, g.jsx)(i.default, {})
                })
            })
        });
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z'
        }), 'Hearing');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....');
    var _h = d('.....').createContext(g.default);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....');
    let q = class extends n.Component {
        render() {
            return this.props.gameOptions.type !== o.GameType.live || (0, p.inLavaMode)() || (0, p.inZombiesVsHumansMode)() || (0, p.inImposterMode)() || (0, p.inHiddenMode)() || (0, p.inPardyMode)() ? null : (0, i.jsx)(j.default, {
                onClick: this.open,
                color: 'inherit',
                'aria-label': 'Leaderboard',
                children: (0, i.jsx)(c(k), {})
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'open', () => {
                this.props.navigation.leaderboardDrawerOpen = !0, (0, l.fetchLatestLeaderboardStats)();
            });
        }
    };
    q = (0, h.__decorate)([
        (0, m.inject)('navigation', 'gameOptions'),
        m.observer
    ], q);
    var _r = q;
}), d.register('.....', function(e, f) {
    var g = d('.....');
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    }), e.exports.default = void 0;
    var h = g(d('.....')),
        i = (0, g(d('.....')).default)(h.default.createElement('path', {
            d: 'M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z'
        }), 'Games');
    e.exports.default = i;
}), d.register('.....', function(e, f) {
    e.exports = function(g) {
        return g && g.__esModule ? g : {
            default: g
        };
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'leaderboardSorter', function() {
        return _n;
    }), b(e.exports, 'fetchLatestLeaderboardStats', function() {
        return _o;
    }), b(e.exports, 'default', function() {
        return _q;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    const _n = o => {
            const p = (0, j.inThanosMode)() ? 'stones' : 'balance';
            return o.slice().sort((q, r) => q[p] === r[p] ? 0 : q[p] > r[p] ? -1 : 1);
        },
        _o = () => (0, j.send)((0, j.inTeamMode)() ? i.default.requestTeamLeaderboard : i.default.requestPlayerLeaderboard);
    let p = class extends l.Component {
        componentDidMount() {
            _o();
        }
        render() {
            const q = (0, j.inTeamMode)();
            let r = [],
                s = [];
            return q && !this.props.gameValues.teams.length ? null : q || this.props.gameValues.players.length ? (q ? r = _n(this.props.gameValues.teams) : s = _n(this.props.gameValues.players), (0, h.jsx)('div', {
                style: {
                    width: '100%'
                },
                children: q ? r.map((t, u) => (0, h.jsx)(m.default, {
                    item: t,
                    position: u + 1,
                    isPlayer: !1,
                    usePowerupAction: this.props.usePowerupAction,
                    parentAction: this.props.parentAction,
                    showSelf: this.props.showSelf,
                    showHidden: this.props.showHidden,
                    customBorderRadius: this.props.customItemBorderRadius
                }, t.id)) : s.map((t, u) => (0, h.jsx)(m.default, {
                    item: t,
                    position: u + 1,
                    isPlayer: !0,
                    usePowerupAction: this.props.usePowerupAction,
                    parentAction: this.props.parentAction,
                    showSelf: this.props.showSelf,
                    showHidden: this.props.showHidden,
                    customBorderRadius: this.props.customItemBorderRadius
                }, t.id))
            })) : null;
        }
    };
    p = (0, g.__decorate)([
        (0, k.inject)('gameValues', 'gameOptions'),
        k.observer
    ], p);
    var _q = p;
}), d.register('.....', function(e, f) {
    b(e.exports, 'LINK_ICON', function() {
        return _B;
    }), b(e.exports, 'default', function() {
        return _I;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....');
    d('.....');
    var q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....');
    let w, x, y, z, A = B => B;
    const _B = 'fas fa-link',
        C = u.default.div(w || (w = A`
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
`), D => D.backgroundColor, D => D.customBorderRadius || 3, D => D.textColor, o.default.basic, () => (0, r.mainFontName)()),
        D = u.default.div(x || (x = A`
  display: flex;
  align-items: center;
  flex: 1;
`)),
        E = u.default.div(y || (y = A`
  height: 40px;
  margin-right: 5px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ 0 };
  color: ${ 0 };
`), F => F.backgroundColor, F => F.textColor),
        F = u.default.div(z || (z = A`
  font-weight: normal;
  font-size: 15px;
`)),
        G = H => {
            let I = '';
            return H.players.forEach((J, K) => {
                I += J, K + 1 !== H.players.length && (I += ', ');
            }), I;
        };
    let H = class extends t.Component {
        render() {
            const I = this.props,
                J = this.getIcon();
            if (I.item.activePowerups.includes(q.PowerupNames.undercover) && !this.props.showHidden)
                return null;
            const {
                isPlayer: K
            } = I;
            if (K) {
                const L = I.item;
                if (L.id === (0, p.identifier)() && !this.props.showSelf)
                    return null;
                const M = this.props.theme.availableThemes.filter(N => N.name === L.theme)[0];
                M || (M.name = 'Default');
                let N = n.default.White,
                    O = n.default.Black;
                return 'Default' !== M.name && (N = M.question.background, O = M.question.text), (0, i.jsxs)(C, {
                    backgroundColor: N,
                    textColor: O,
                    customBorderRadius: this.props.customBorderRadius,
                    children: [
                        (0, i.jsxs)(D, {
                            children: [
                                (0, i.jsx)(E, {
                                    backgroundColor: M.palette[0].background,
                                    textColor: M.palette[0].text,
                                    children: (0, i.jsx)(m.default, {
                                        paddingHorizontal: 7,
                                        paddingVertical: 7,
                                        text: J ? (0, i.jsx)(k.default, {
                                            name: J
                                        }) : I.position.toString()
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    onClick: this.toggleBalanceVisiblity,
                                    style: {
                                        width: 'calc(100% - 50px)',
                                        marginLeft: 7,
                                        cursor: 'pointer'
                                    },
                                    children: this.state.showingBalance ? (0, r.inThanosMode)() ? `${ L.stones } stone${ 1 === L.stones ? '' : 's' }` : (0, r.getMoney)(L.balance) : L.name
                                })
                            ]
                        }),
                        this.props.usePowerupAction && (0, i.jsx)('div', {
                            style: {
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: 15
                            },
                            children: (0, i.jsx)(j.default, {
                                type: this.canUsePowerup() ? 'primary' : 'disabled',
                                label: (0, i.jsx)(l.default, {
                                    text: this.getUseButtonText()
                                }),
                                size: 'small',
                                onClick: this.attack
                            })
                        })
                    ]
                });
            }
            const N = I.item;
            return N.id !== I.user.team.id || this.props.showSelf ? (0, i.jsxs)(C, {
                backgroundColor: n.default.White,
                textColor: n.default.Black,
                customBorderRadius: this.props.customBorderRadius,
                children: [
                    (0, i.jsxs)(D, {
                        children: [
                            (0, i.jsx)(E, {
                                backgroundColor: (0, r.getTeamColor)(N.id),
                                textColor: n.default.White,
                                children: (0, i.jsx)(m.default, {
                                    paddingHorizontal: 7,
                                    paddingVertical: 7,
                                    text: J ? (0, i.jsx)(k.default, {
                                        name: J
                                    }) : I.position.toString()
                                })
                            }),
                            (0, i.jsxs)('div', {
                                onClick: this.toggleBalanceVisiblity,
                                style: {
                                    width: 'calc(100% - 50px)',
                                    marginLeft: 7,
                                    cursor: 'pointer'
                                },
                                children: [
                                    (0, i.jsx)('div', {
                                        children: this.state.showingBalance ? (0, r.getMoney)(N.balance) : (0, i.jsx)(l.default, {
                                            text: (0, r.getTeamName)(N.id)
                                        })
                                    }),
                                    (0, i.jsx)(F, {
                                        children: G(N)
                                    })
                                ]
                            })
                        ]
                    }),
                    this.props.usePowerupAction && (0, i.jsx)('div', {
                        style: {
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: 15
                        },
                        children: (0, i.jsx)(j.default, {
                            type: this.canUsePowerup() ? 'primary' : 'disabled',
                            label: (0, i.jsx)(l.default, {
                                text: this.getUseButtonText()
                            }),
                            size: 'small',
                            onClick: this.attack
                        })
                    })
                ]
            }) : null;
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                showingBalance: !1
            }), (0, g.default)(this, 'canUsePowerup', () => {
                const I = this.props.navigation.attackModal.powerup;
                return !I || (I === q.PowerupNames.giving || !this.props.item.activePowerups.includes(q.PowerupNames.shield) && (I !== q.PowerupNames.link || !this.props.item.activePowerups.includes(q.PowerupNames.link)));
            }), (0, g.default)(this, 'getIcon', () => {
                const I = this.props.item.activePowerups;
                if (I.includes(q.PowerupNames.shield))
                    return 'fas fa-shield-alt';
                if (I.includes(q.PowerupNames.link))
                    return _B;
                if (this.props.isPlayer)
                    return null;
                {
                    const J = this.props.item;
                    return (0, r.getTeamIcon)(J.id);
                }
            }), (0, g.default)(this, 'getUseButtonText', () => {
                const I = this.props.navigation.attackModal.powerup;
                return I === q.PowerupNames.link ? 'Link' : I === q.PowerupNames.giving ? 'Give' : 'Use';
            }), (0, g.default)(this, 'attack', () => {
                if (this.props.isPlayer) {
                    const I = this.props.item;
                    (0, r.attack)(I.id, I.name);
                } else {
                    const J = this.props.item;
                    (0, r.attack)(J.id, (0, r.getTeamName)(J.id));
                }
                this.props.parentAction && this.props.parentAction();
            }), (0, g.default)(this, 'toggleBalanceVisiblity', () => {
                ((0, r.inThanosMode)() || !(0, r.inHiddenMode)() && ((0, r.inTeamMode)() || this.props.gameValues.gameStatus !== v.GameStatus.gameplay)) && this.setState({
                    showingBalance: !this.state.showingBalance
                });
            });
        }
    };
    H = (0, h.__decorate)([
        (0, s.inject)('engine', 'user', 'theme', 'gameOptions', 'navigation', 'gameValues'),
        s.observer
    ], H);
    var _I = H;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');
    class _i extends h.Component {
        render() {
            return (0, g.jsx)('i', {
                className: this.props.name,
                style: this.props.style
            });
        }
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    let l = class extends i.Component {
        componentDidUpdate(m) {
            m.text !== this.props.text && (this.setState({
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
                }) : void this.requestTranslation().then(m => {
                    this.props.translations[this.props.text] = m, this.setState({
                        text: m
                    });
                }).catch();
        }
        render() {
            return this.buildString();
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                text: this.props.text
            }), (0, g.default)(this, 'buildString', () => {
                let m = this.state.text;
                return this.props.suffix && (m += this.props.suffix), m;
            }), (0, g.default)(this, 'requestTranslation', async () => {
                try {
                    return (await k.default.post('/api/translate', {
                        to: this.props.gameOptions.language,
                        text: this.props.text
                    })).data;
                } catch (e) {
                    return this.props.text;
                }
            });
        }
    };
    l = (0, h.__decorate)([
        (0, j.inject)('translations', 'gameOptions'),
        j.observer
    ], l);
    var _m = l;
}), d.register('.....', function(e, f) {
    b(e.exports, 'identifier', function() {
        return _t;
    }), b(e.exports, 'default', function() {
        return _u;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....');
    const _t = () => {
        var u, v;
        return (null === l.default || void 0 === l.default || null === (u = l.default.engine) || void 0 === u || null === (v = u.client) || void 0 === v ? void 0 : v.id) || '';
    };
    var _u = v => {
        l.default.engine.game = v;
        const w = p.default.map(x => x());
        v.onMessage.add((x, y) => {
            const z = {
                action: x,
                payload: y
            };
            if (z.action !== m.default.stateUpdate) {
                if (z.action === m.default.playerJoinsStaticState) {
                    const A = y;
                    return l.default.gameOptions.setGameOptions(A.gameOptions), l.default.upgrades.upgrades.replace(A.upgrades), l.default.theme.availableThemes.replace(A.themes), l.default.powerups.availablePowerups.replace(A.powerups), A.news && l.default.gameValues.news.replace(A.news), A.gameOptions.specialGameType.includes(j.DEFENDING_HOMEBASE) && (l.default.navigation.currentShopTab = k.ShopTab.defendingHomebase), void(A.gameOptions.specialGameType.includes(j.PARDY) && (0, s.loadFont)('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap'));
                }
                if (z.action === m.default.updatedPlayerLeaderboard) {
                    let B = 1;
                    return (0, g.leaderboardSorter)(z.payload.items).forEach((C, D) => {
                        C.id === _t() && (B = D + 1);
                    }), l.default.user.place = B, void l.default.gameValues.players.replace(z.payload.items);
                }
                if (z.action === m.default.updatedTeamLeaderboard) {
                    let B = 1;
                    return (0, g.leaderboardSorter)(z.payload.items).forEach((C, D) => {
                        C.id === l.default.user.team.id && (B = D + 1);
                    }), l.default.user.place = B, void l.default.gameValues.teams.replace(z.payload.items);
                }
                if (z.action !== m.default.toast)
                    if (z.action !== m.default.nonDismissMessage)
                        if (z.action !== m.default.thanosResults)
                            if (z.action === m.default.balanceFlashRed && (l.default.balance.customColor = '#f44336', h.drain.play(), setTimeout(() => l.default.balance.customColor = '', 1000)), z.action !== m.default.deflected)
                                if (z.action !== m.default.enablePowerupRNGAnimation) {
                                    if (z.action === m.default.availableHomebaseUpgrades)
                                        return l.default.navigation.currentShopTab = k.ShopTab.defendingHomebase, void l.default.upgrades.homebaseUpgades.replace(z.payload);
                                    if (z.action !== m.default.defendingHomebaseStatus)
                                        if (z.action !== m.default.defendingHomebaseResults) {
                                            if (z.action === m.default.playAgainNewGameCode)
                                                return l.default.user.groupMemberId || localStorage.setItem(q.LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME, l.default.user.name), void(window.location.href = `/join?gc=${ z.payload }`);
                                            if (z.action === m.default.availableLavaUpgrades)
                                                return l.default.navigation.currentShopTab = k.ShopTab.lava, void l.default.upgrades.lavaUpgrades.replace(y);
                                            if (z.action !== m.default.lavaResults) {
                                                if (z.action !== m.default.successModalInfo)
                                                    z.action !== m.default.imposter.people ? z.action !== m.default.draw.line ? z.action !== m.default.draw.feedItem ? z.action !== m.default.draw.clear || (l.default.draw.shouldClearCanvas = !0) : l.default.draw.latestFeedItem = y : l.default.draw.latestLine = y : l.default.imposter.epl = (0, r.EncryptData)(y, 'impostor');
                                                else if (l.default.ui.successModalInfo = y, l.default.ui.showingSuccessModal = !0, y.sound) {
                                                    new(0, o.Howl)({
                                                        src: [(0, i.getAssetPath)(y.sound)]
                                                    }).play();
                                                }
                                            } else
                                                l.default.entities.lava = y;
                                        } else
                                            l.default.gameValues.defendingHomebaseResults = z.payload;
                                    else
                                        l.default.entities.defendingHomebase = z.payload;
                                } else
                                    l.default.gameOptions.enablePowerupRNGAnimation = !0;
                else
                    h.bounce.play();
                else
                    l.default.gameValues.thanosValues = z.payload;
                else
                    (0, i.nonDismissMessage)(z.payload.message, z.payload.title);
                else
                    (0, i.toast)(z.payload.message, z.payload);
            } else
                (0, n.default)({
                    type: y.type,
                    value: y.value
                }, w);
        });
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = {
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
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    let l = !1;
    var _m = (n, o) => {
        const {
            type: p,
            value: q
        } = n;
        if (p === j.default.balance)
            return h.default.balance.balance = q, void(q > h.default.balance.maxBalance && (h.default.balance.maxBalance = q));
        if (p === j.default.balanceChange)
            return h.default.balance.balanceChangeIfCorrect = q.balanceChangeIfCorrect, void(h.default.balance.balanceChangeIfIncorrect = q.balanceChangeIfIncorrect);
        if (p === j.default.gameQuestions)
            return void h.default.questions.setQuestions(q);
        if (p === j.default.playerQuestionList)
            return h.default.questions.questionList.replace(q.questionList), void(h.default.questions.ceq && !h.default.questions.transitioningToNextQuestion || h.default.questions.setCurrentQuestion(q.questionIndex));
        if (p === j.default.playerQuestionListIndex)
            return void(h.default.questions.transitioningToNextQuestion && h.default.questions.setCurrentQuestion(q));
        if (p === j.default.purchasedPowerups)
            return void h.default.powerups.purchasedPowerups.replace(q);
        if (p === j.default.usedPowerups)
            return void h.default.powerups.usedPowerups.replace(q);
        if (p === j.default.personalActivePowerups)
            return void h.default.powerups.personalActivePowerups.replace(q);
        if (p === j.default.teamActivePowerups)
            return void h.default.powerups.teamActivePowerups.replace(q);
        if (p === j.default.name)
            return 'Player [Still Entering Name]' === q ? void(h.default.engine.hasLeftRoom && window.location.reload()) : void(h.default.user.name = q);
        if (p === j.default.group)
            return h.default.user.groupId = q.groupId, void(h.default.user.groupMemberId = q.groupMemberId);
        if (p === j.default.theme) {
            const r = q,
                s = h.default.theme.availableThemes.filter(t => t && t.name && t.name === r)[0];
            if (!s)
                return;
            return h.default.theme.themeName = r, h.default.theme.theme.defaultBackground = s.question.background, h.default.theme.theme.question = s.question, h.default.theme.theme.palette = s.palette, void('Default' === r ? (h.default.theme.theme.response.shop = i.defaultShopColor, h.default.theme.theme.response.continue = i.defaultContinueColor) : (h.default.theme.theme.response.shop = s.palette[0], h.default.theme.theme.response.continue = s.palette[1]));
        }
        if (p === j.default.purchasedThemes)
            return void h.default.theme.ownedThemes.replace(q);
        if (p === j.default.upgradeLevels)
            return void(h.default.upgrades.upgradeLevels = q);
        if (p === j.default.upgradePricingDiscount)
            return void(h.default.upgrades.upgradePricingDiscount = q);
        if (p === j.default.gameStatus)
            return h.default.gameValues.gameStatus = q, void(l || (l = !0, (0, k.default)()));
        if (p === j.default.incomeMultiplier)
            return void(h.default.balance.incomeMultiplier = q);
        if (p === j.default.linkInfo)
            return void(h.default.powerups.linkPartnerName = q.name);
        if (p === j.default.teamInfo)
            return void(h.default.user.team = q);
        if (p === j.default.maxBalance)
            return void(h.default.balance.maxBalance = q);
        if (p === j.default.disabledPowerups)
            return void h.default.powerups.disabledPowerups.replace(q);
        if (p === j.default.fullScreenPlayerBlack)
            return void(h.default.ui.fullBlackScreen = q.on);
        if (p === j.default.screenAttack)
            return q && (h.default.powerups.screenAttack.attackerName = q.attackerName, h.default.powerups.screenAttack.powerupName = q.powerupName, h.default.powerups.screenAttack.fullScreen = q.fullScreen), void(0, g.onScreenAttackChanged)();
        if (p === j.default.streakAmount)
            return void(h.default.balance.streakAmount = q);
        if (p === j.default.appliedPowerups)
            return void h.default.powerups.personalAppliedPowerups.replace(q);
        if (p === j.default.teamAppliedPowerups)
            return void h.default.powerups.teamAppliedPowerups.replace(q);
        if (p === j.default.imposter.status)
            return h.default.imposter.status = q, void(h.default.imposter.currentShopItemModalVisible = !1);
        if (p === j.default.imposter.shopItems)
            return void h.default.imposter.shopItems.replace(q);
        if (p === j.default.imposter.person)
            return void(h.default.imposter.me = q);
        if (p === j.default.imposter.remainingInvestigations)
            return void(h.default.imposter.investigationsLeft = q);
        if (p === j.default.imposter.remainingMeetings)
            return void(h.default.imposter.meetingsLeft = q);
        if (p === j.default.imposter.remainingImposters)
            return void(h.default.imposter.impostersLeft = q);
        if (p === j.default.questionsAnsweredCorrectly)
            return void(h.default.questions.questionsAnsweredCorrectly = q);
        if (p === j.default.questionsAnsweredIncorrectly)
            return void(h.default.questions.questionsAnsweredIncorrectly = q);
        const t = s.find(u => u.key === r.type);
        t && t.listener.applyPatches(r.value);
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'backgroundImage', function() {
        return _m;
    }), b(e.exports, 'onAttack', function() {
        return _n;
    }), b(e.exports, 'getVerb', function() {
        return _o;
    }), b(e.exports, 'getTitle', function() {
        return _p;
    }), b(e.exports, 'getIconColor', function() {
        return _q;
    }), b(e.exports, 'getIcon', function() {
        return _r;
    }), b(e.exports, 'onScreenAttackChanged', function() {
        return _s;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    const l = () => k.default && k.default.powerups && k.default.powerups.screenAttack && k.default.powerups.screenAttack.powerupName ? k.default.powerups.screenAttack.powerupName : '',
        _m = () => {
            const n = l();
            return n === h.PowerupNames.icer ? (0, j.getAssetPath)('iced.jpeg') : n === h.PowerupNames.pumpkinPie ? (0, j.getAssetPath)('pied.jpeg') : '';
        },
        _n = () => {
            const o = l();
            o === h.PowerupNames.icer && i.freeze.play(), o === h.PowerupNames.pumpkinPie && i.pieSlice.play();
        },
        _o = () => {
            const p = l();
            return p === h.PowerupNames.icer ? 'Frozen' : p === h.PowerupNames.pumpkinPie ? 'Pied' : '';
        },
        _p = () => {
            const q = l();
            return q === h.PowerupNames.icer ? 'You\'re Frozen!' : q === h.PowerupNames.pumpkinPie ? 'You\'ve been Pied!' : '';
        },
        _q = () => {
            const r = l();
            return r === h.PowerupNames.icer ? g.default.White : r === h.PowerupNames.pumpkinPie ? '#e65100' : g.default.White;
        },
        _r = () => {
            const s = l();
            return s === h.PowerupNames.icer ? 'far fa-snowflake' : s === h.PowerupNames.pumpkinPie ? 'far fa-pie' : '';
        },
        _s = () => {
            const t = k.default.powerups.screenAttack;
            t.powerupName && t.powerupName === h.PowerupNames.blurredScreen ? t.powerupName === h.PowerupNames.blurredScreen && (k.default.ui.blurredScreen = !0) : k.default.ui.blurredScreen && (k.default.ui.blurredScreen = !1);
        };
}), d.register('.....', function(e, f) {
    b(e.exports, 'PowerupCategory', function() {
        return d('.....').PowerupCategory;
    }), b(e.exports, 'PowerupNames', function() {
        return d('.....').PowerupNames;
    }), d('.....');
}), d.register('.....', function(e, f) {
    b(e.exports, 'PowerupNames', function() {
        return d;
    }), b(e.exports, 'PowerupCategory', function() {
        return _h;
    });
    const g = {
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
    let _h;
    (_h || (_h = {})).specialSound = 'specialSound';
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = {
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
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    var _k = () => {
        j.default.gameValues.gameStatus !== g.GameStatus.results ? j.default.gameValues.gameStatus !== g.GameStatus.teams ? j.default.gameValues.gameStatus !== g.GameStatus.gameplay ? (0, i.changeRoute)(h.default.waiting) : (0, i.startGame)() : (0, i.changeRoute)(h.default.team) : (0, i.changeRoute)(h.default.gameOver);
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    }), d('.....');
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....');
    var _l = [
        g.default,
        h.default,
        i.default,
        j.default,
        k.default
    ];
}), d.register('.....', function(e, f) {
    b(e.exports, 'Round', function() {
        return d('.....').default;
    }), b(e.exports, 'Person', function() {
        return d('.....').default;
    }), b(e.exports, 'Status', function() {
        return d('.....').default;
    });
    d('.....'), d('.....'), d('.....');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    const j = [
        'secondsLeft',
        'term',
        'drawer',
        'drawingBase64',
        'termOptions',
        'revealText'
    ];
    var _k = () => {
        const l = new(0, h.default)();
        return j.forEach(m => {
            l.onPropChange(m, n => {
                g.default.draw.round[m] = n;
            });
        }), {
            key: i.default.draw.round,
            listener: l
        };
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    const j = [
        'answeredCorrectly',
        'lastRound',
        'role'
    ];
    var _k = () => {
        const l = new(0, h.default)();
        return j.forEach(m => {
            l.onPropChange(m, n => {
                g.default.draw.me[m] = n;
            });
        }), {
            key: i.default.draw.person,
            listener: l
        };
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    var _j = () => {
        const k = new(0, h.default)();
        return k.onPropChange('value', l => {
            g.default.draw.status = l;
        }), {
            key: i.default.draw.status,
            listener: k
        };
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'PardyState', function() {
        return d('.....').default;
    }), b(e.exports, 'PardyPerson', function() {
        return d('.....').default;
    });
    d('.....'), d('.....');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    const l = [
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
        m = [
            'powers',
            'tips',
            'answerLockedInWittyMessages',
            'correctWittyMessages',
            'incorrectWittyMessages'
        ];
    var _n = () => {
        const o = new(0, h.default)();
        return l.forEach(p => {
            o.onPropChange(p, q => {
                if (m.includes(p))
                    g.default.pardy[p].replace(q);
                else if ('currentQuestionId' === p) {
                    const r = (0, j.questionLocation)().find(s => s._id === q);
                    r && (g.default.pardy.currentQuestion = {
                        ...r,
                        answers: (0, i.shuffle)(r.answers)
                    });
                } else
                    g.default.pardy[r] = q;
            });
        }), {
            key: k.default.pardy.state,
            listener: o
        };
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    const j = [
            'answerResponseItems',
            'powerOptions'
        ],
        k = [
            'power',
            'answered',
            'answeredCorrectly',
            'answerResponseItems',
            'maxBet',
            'currentBet',
            'powerOptions'
        ];
    var _l = () => {
        const m = new(0, h.default)();
        return k.forEach(n => {
            m.onPropChange(n, o => {
                j.includes(n) ? g.default.pardy[n].replace(o) : g.default.pardy[n] = o;
            });
        }), {
            key: i.default.pardy.person,
            listener: m
        };
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'Preview', function() {
        return _q;
    }), b(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    let o;
    const p = d('.....').default.div(o || (o = (q => q)`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ 0 };
  color: ${ 0 };
  margin-right: 5px;
`), q => q.colors.background, q => q.colors.text),
        _q = r => (0, h.jsx)(i.default, {
            placement: 'right',
            title: r.name ? (0, h.jsx)('div', {
                style: {
                    fontSize: 15
                },
                children: (0, h.jsx)(k.default, {
                    text: r.name + ' active'
                })
            }) : null,
            children: (0, h.jsx)(p, {
                colors: r.color,
                children: (0, h.jsx)(j.default, {
                    name: r.icon
                })
            })
        });
    let r = class extends n.Component {
        render() {
            const s = this.props.powerups.availablePowerups.filter(t => this.props.powerups.activePowerups.includes(t.name));
            return (0, h.jsx)('div', {
                style: {
                    display: 'flex'
                },
                children: s.map(t => (0, h.jsx)(_q, {
                    name: (0, l.getPowerupName)(t),
                    icon: t.icon,
                    color: t.color
                }, t.name))
            });
        }
    };
    r = (0, g.__decorate)([
        (0, m.inject)('powerups'),
        m.observer
    ], r);
    var _s = r;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _x;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    let s, t, u, v = w => w,
        w = class extends j.Component {
            render() {
                if ((0, q.inImposterMode)() || (0, q.inPardyMode)())
                    return null;
                const {
                    balance: x
                } = this.props, y = this.canShow(), z = (0, p.default)({
                    moneyPerQuestion: this.findUpgradeValue(r.upgradeNames.moneyPerQuestion),
                    streakBonus: this.findUpgradeValue(r.upgradeNames.streakBonus),
                    multiplier: this.findUpgradeValue(r.upgradeNames.multiplier),
                    incomeMultiplier: x.incomeMultiplier,
                    activePowerups: this.props.powerups.activePowerups
                });
                return (0, i.jsx)(_y, {
                    animate: {
                        height: y ? 'auto' : 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    children: (0, i.jsx)(_z, {
                        children: (0, i.jsx)(_A, {
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
                            children: z.map((A, B) => (0, i.jsx)(o.default, {
                                index: B,
                                amount: this.props.balance.streakAmount === B ? Math.max(A, x.balanceChangeIfCorrect) : A,
                                onX: this.changeX,
                                selected: this.props.balance.streakAmount === B,
                                hideArrow: B >= 99
                            }, `money-item-${ B }`))
                        })
                    })
                });
            }
            constructor(...e) {
                super(...e), (0, g.default)(this, 'state', {
                    xValue: 0
                }), (0, g.default)(this, 'changeX', x => this.setState({
                    xValue: x
                })), (0, g.default)(this, 'findUpgradeValue', x => {
                    const y = this.props.upgrades.upgrades.find(z => z.name === x);
                    if (!y)
                        return 1;
                    const z = y.levels[this.props.upgrades.upgradeLevels[(0, q.upgradeNameToKey)(x)] - 1];
                    return z ? z.value : 1;
                }), (0, g.default)(this, 'canShow', () => {
                    const {
                        navigation: {
                            currentRoute: x
                        },
                        upgrades: y
                    } = this.props;
                    return !!y.upgrades.length && (x === m.default.questions || x === m.default.upgrade);
                });
            }
        };
    w = (0, h.__decorate)([
        (0, l.inject)('navigation', 'balance', 'upgrades', 'powerups'),
        l.observer
    ], w);
    var _x = w;
    const _y = (0, k.default)(n.motion.div)(s || (s = v`
  width: 100%;
  background: #4252af;
  overflow: hidden;
`)),
        _z = k.default.div(t || (t = v`
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 7.5px;
  width: 100%;
`)),
        _A = (0, k.default)(n.motion.div)(u || (u = v`
  display: flex;
  align-items: center;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    let l, m, n, o = p => p;
    var _p = q => {
        const r = h.useRef(),
            s = `bonus-item-index-${ q.index }`;
        return h.useEffect(() => {
            if (q.selected) {
                const t = document.getElementById(s);
                t && q.onX(t.offsetLeft);
            }
        }, [
            q.selected,
            q.amount
        ]), (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsxs)(_q, {
                    id: s,
                    ref: r,
                    children: [
                        (0, g.jsx)(_r, {
                            children: q.index
                        }),
                        (0, g.jsx)(_s, {
                            children: (0, k.getMoney)(q.amount)
                        })
                    ]
                }),
                q.hideArrow ? null : (0, g.jsx)(j.default, {
                    style: {
                        marginRight: 30,
                        opacity: 0.5
                    },
                    name: 'fas fa-long-arrow-right'
                })
            ]
        });
    };
    const _q = i.default.div(l || (l = o`
  margin-right: 30px;
`)),
        _r = i.default.div(m || (m = o`
  font-size: 11px;
  margin-bottom: 2px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`)),
        _s = i.default.div(n || (n = o`
  padding: 8px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    }), d('.....');
    var g = d('.....');
    var _h = i => {
        const {
            moneyPerQuestion: j,
            streakBonus: k,
            multiplier: l,
            incomeMultiplier: m,
            activePowerups: n
        } = i, o = n.includes(g.PowerupNames.minuteMoreEarnings);
        return Array.from(Array(100).keys()).map((p, q) => {
            let r = j;
            return r += k * q, r *= l, r *= m, o && (r *= 2), Math.round(r);
        });
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    let o = class extends m.Component {
        render() {
            return (0, n.inImposterMode)() ? (0, i.jsx)(j.default, {
                onClick: this.open,
                color: 'inherit',
                'aria-label': 'notes',
                children: (0, i.jsx)(c(k), {})
            }) : null;
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'open', () => {
                this.props.imposter.noteDrawerOpen = !0;
            });
        }
    };
    o = (0, h.__decorate)([
        (0, l.inject)('imposter'),
        l.observer
    ], o);
    var _p = o;
}), d.register('.....', function(e, f) {
    var g = d('.....');
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    }), e.exports.default = void 0;
    var h = g(d('.....')),
        i = (0, g(d('.....')).default)(h.default.createElement('path', {
            d: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'
        }), 'Description');
    e.exports.default = i;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _D;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....'),
        w = d('.....'),
        x = d('.....'),
        y = d('.....'),
        z = d('.....'),
        A = d('.....'),
        B = d('.....'),
        C = d('.....');
    var _D = (0, u.observer)(() => {
        var E;
        const {
            navigation: F,
            user: G,
            questions: {
                lockedViewingCorrectAnswer: H
            }
        } = v.useContext(C.default), I = H, J = () => (0, t.toggleDrawer)(!1), K = F.drawerOpen;
        return r.DISABLED_PATHS.includes(F.currentRoute) ? null : (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(x.default, {}),
                (0, g.jsx)(h.default, {
                    open: K,
                    onClose: J,
                    children: (0, g.jsxs)('div', {
                        className: 'flex flex-column maxHeight',
                        style: {
                            width: '70vw',
                            maxWidth: 300
                        },
                        children: [
                            (0, g.jsx)('div', {
                                className: 'maxWidth scroll-y',
                                style: {
                                    flex: 1,
                                    overflowX: 'hidden'
                                },
                                children: F.settingsOpen ? (0, g.jsx)(i.default, {
                                    style: {
                                        width: '100%'
                                    },
                                    component: 'nav',
                                    children: (0, g.jsxs)(j.default, {
                                        children: [
                                            (0, g.jsx)(l.default, {
                                                primary: (0, g.jsx)(q.default, {
                                                    text: 'Read to Me'
                                                })
                                            }),
                                            (0, g.jsx)(z.default, {
                                                checked: G.readToMeEnabled,
                                                onChange: L => {
                                                    G.readToMeEnabled = L;
                                                }
                                            })
                                        ]
                                    })
                                }) : (0, t.inPardyMode)() ? (0, g.jsx)(B.default, {}) : (0, g.jsxs)(g.Fragment, {
                                    children: [
                                        (0, g.jsxs)(i.default, {
                                            style: {
                                                width: '100%'
                                            },
                                            component: 'nav',
                                            children: [
                                                (0, g.jsx)(w.default, {}),
                                                (0, g.jsx)(B.default, {}),
                                                (0, g.jsx)(p.default, {
                                                    to: s.default.questions,
                                                    onClick: J,
                                                    disabled: I,
                                                    children: (0, g.jsxs)(j.default, {
                                                        button: !0,
                                                        children: [
                                                            (0, g.jsx)(k.default, {
                                                                children: (0, g.jsx)(n.default, {})
                                                            }),
                                                            (0, g.jsx)(l.default, {
                                                                primary: (0, g.jsx)(q.default, {
                                                                    text: 'Questions'
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                !(0, t.blockShopping)() && (0, g.jsx)(p.default, {
                                                    to: s.default.shop,
                                                    onClick: J,
                                                    disabled: I,
                                                    children: (0, g.jsxs)(j.default, {
                                                        button: !0,
                                                        children: [
                                                            (0, g.jsx)(k.default, {
                                                                children: (0, t.inImposterMode)() ? (0, g.jsx)(m.default, {}) : (0, g.jsx)(o.default, {})
                                                            }),
                                                            (0, g.jsx)(l.default, {
                                                                primary: (0, g.jsx)(q.default, {
                                                                    text: (0, t.shopName)()
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, g.jsx)(y.default, {})
                                    ]
                                })
                            }),
                            (0, g.jsx)(A.default, {
                                playerName: G.name,
                                teamName: null === (E = G.team) || void 0 === E ? void 0 : E.id,
                                onClickSettings: () => F.settingsOpen = !0,
                                onBack: () => F.settingsOpen = !1,
                                isSettingsOpen: F.settingsOpen
                            })
                        ]
                    })
                })
            ]
        });
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _v;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = {
            left: 'right',
            right: 'left',
            top: 'down',
            bottom: 'up'
        };
    var t = {
            enter: q.duration.enteringScreen,
            exit: q.duration.leavingScreen
        },
        u = i.forwardRef(function(v, w) {
            var x = v.anchor,
                y = void 0 === x ? 'left' : x,
                z = v.BackdropProps,
                A = v.children,
                B = v.classes,
                C = v.className,
                D = v.elevation,
                E = void 0 === D ? 16 : D,
                F = v.ModalProps,
                G = (F = void 0 === F ? {} : F).BackdropProps,
                H = (0, h.default)(F, ['BackdropProps']),
                I = v.onClose,
                J = v.open,
                K = void 0 !== J && J,
                L = v.PaperProps,
                M = void 0 === L ? {} : L,
                N = v.SlideProps,
                O = v.TransitionComponent,
                P = void 0 === O ? n.default : O,
                Q = v.transitionDuration,
                R = void 0 === Q ? t : Q,
                S = v.variant,
                T = void 0 === S ? 'temporary' : S,
                U = (0, h.default)(v, [
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
                V = (0, r.default)(),
                W = i.useRef(!1);
            i.useEffect(function() {
                W.current = !0;
            }, []);
            var X = function(Y, Z) {
                    return 'rtl' === Y.direction && function($) {
                        return -1 !== [
                            'left',
                            'right'
                        ].indexOf($);
                    }(Z) ? s[Z] : Z;
                }(V, y),
                Y = i.createElement(o.default, (0, g.default)({
                    elevation: 'temporary' === T ? E : 0,
                    square: !0
                }, M, {
                    className: (0, j.default)(B.paper, B['paperAnchor'.concat((0, p.default)(X))], M.className, 'temporary' !== T && B['paperAnchorDocked'.concat((0, p.default)(X))])
                }), A);
            if ('permanent' === T)
                return i.createElement('div', (0, g.default)({
                    className: (0, j.default)(B.root, B.docked, C),
                    ref: w
                }, U), Y);
            var Z = i.createElement(P, (0, g.default)({
                in: K,
                direction: s[X],
                timeout: R,
                appear: W.current
            }, N), Y);
            return 'persistent' === T ? i.createElement('div', (0, g.default)({
                className: (0, j.default)(B.root, B.docked, C),
                ref: w
            }, U), Z) : i.createElement(k.default, (0, g.default)({
                BackdropProps: (0, g.default)({}, z, G, {
                    transitionDuration: R
                }),
                BackdropComponent: l.default,
                className: (0, j.default)(B.root, B.modal, C),
                open: K,
                onClose: I,
                ref: w
            }, U, H), Z);
        }),
        _v = (0, m.default)(function(w) {
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
                    zIndex: w.zIndex.drawer,
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
                    borderRight: '1px solid '.concat(w.palette.divider)
                },
                paperAnchorDockedTop: {
                    borderBottom: '1px solid '.concat(w.palette.divider)
                },
                paperAnchorDockedRight: {
                    borderLeft: '1px solid '.concat(w.palette.divider)
                },
                paperAnchorDockedBottom: {
                    borderTop: '1px solid '.concat(w.palette.divider)
                },
                modal: {}
            };
        }, {
            name: 'MuiDrawer',
            flip: !1
        })(u);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _w;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    d('.....');
    var k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....');
    var v = new(0, s.default)(),
        _w = i.forwardRef(function(x, y) {
            var z = (0, l.default)(),
                A = (0, k.default)({
                    name: 'MuiModal',
                    props: (0, h.default)({}, x),
                    theme: z
                }),
                B = A.BackdropComponent,
                C = void 0 === B ? u.default : B,
                D = A.BackdropProps,
                E = A.children,
                F = A.closeAfterTransition,
                G = void 0 !== F && F,
                H = A.container,
                I = A.disableAutoFocus,
                J = void 0 !== I && I,
                K = A.disableBackdropClick,
                L = void 0 !== K && K,
                M = A.disableEnforceFocus,
                N = void 0 !== M && M,
                O = A.disableEscapeKeyDown,
                P = void 0 !== O && O,
                Q = A.disablePortal,
                R = void 0 !== Q && Q,
                S = A.disableRestoreFocus,
                T = void 0 !== S && S,
                U = A.disableScrollLock,
                V = void 0 !== U && U,
                W = A.hideBackdrop,
                X = void 0 !== W && W,
                Y = A.keepMounted,
                Z = void 0 !== Y && Y,
                $ = A.manager,
                ab = void 0 === $ ? v : $,
                bb = A.onBackdropClick,
                cb = A.onClose,
                db = A.onEscapeKeyDown,
                eb = A.onRendered,
                fb = A.open,
                gb = (0, g.default)(A, [
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
                hb = i.useState(!0),
                ib = hb[0],
                jb = hb[1],
                kb = i.useRef({}),
                lb = i.useRef(null),
                mb = i.useRef(null),
                nb = (0, p.default)(mb, y),
                ob = function(pb) {
                    return !!pb.children && pb.children.props.hasOwnProperty('in');
                }(A),
                pb = function() {
                    return (0, m.default)(lb.current);
                },
                qb = function() {
                    return kb.current.modalRef = mb.current, kb.current.mountNode = lb.current, kb.current;
                },
                rb = function() {
                    ab.mount(qb(), {
                        disableScrollLock: V
                    }), mb.current.scrollTop = 0;
                },
                sb = (0, q.default)(function() {
                    var tb = function(ub) {
                        return ub = 'function' == typeof ub ? ub() : ub, j.findDOMNode(ub);
                    }(H) || pb().body;
                    ab.add(qb(), tb), mb.current && rb();
                }),
                tb = i.useCallback(function() {
                    return ab.isTopModal(qb());
                }, [ab]),
                ub = (0, q.default)(function(vb) {
                    lb.current = vb, vb && (eb && eb(), fb && tb() ? rb() : (0, s.ariaHidden)(mb.current, !0));
                }),
                vb = i.useCallback(function() {
                    ab.remove(qb());
                }, [ab]);
            if (i.useEffect(function() {
                    return function() {
                        vb();
                    };
                }, [vb]), i.useEffect(function() {
                    fb ? sb() : ob && G || vb();
                }, [
                    fb,
                    vb,
                    ob,
                    G,
                    sb
                ]), !Z && !fb && (!ob || ib))
                return null;
            var wb = function(xb) {
                    return {
                        root: {
                            position: 'fixed',
                            zIndex: xb.zIndex.modal,
                            right: 0,
                            bottom: 0,
                            top: 0,
                            left: 0
                        },
                        hidden: {
                            visibility: 'hidden'
                        }
                    };
                }(z || {
                    zIndex: r.default
                }),
                xb = {};
            return void 0 === E.props.tabIndex && (xb.tabIndex = E.props.tabIndex || '-1'), ob && (xb.onEnter = (0, o.default)(function() {
                jb(!1);
            }, E.props.onEnter), xb.onExited = (0, o.default)(function() {
                jb(!0), G && vb();
            }, E.props.onExited)), i.createElement(n.default, {
                ref: ub,
                container: H,
                disablePortal: R
            }, i.createElement('div', (0, h.default)({
                ref: nb,
                onKeyDown: function(yb) {
                    'Escape' === yb.key && tb() && (db && db(yb), P || (yb.stopPropagation(), cb && cb(yb, 'escapeKeyDown')));
                },
                role: 'presentation'
            }, gb, {
                style: (0, h.default)({}, wb.root, !fb && ib ? wb.hidden : {}, gb.style)
            }), X ? null : i.createElement(C, (0, h.default)({
                open: fb,
                onClick: function(yb) {
                    yb.target === yb.currentTarget && (bb && bb(yb), !L && cb && cb(yb, 'backdropClick'));
                }
            }, D)), i.createElement(t.default, {
                disableEnforceFocus: N,
                disableAutoFocus: J,
                disableRestoreFocus: T,
                getDoc: pb,
                isEnabled: tb,
                open: fb
            }, i.cloneElement(E, xb))));
        });
}), d.register('.....', function(e, f) {
    function g(h) {
        return h && h.ownerDocument || document;
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'ariaHidden', function() {
        return _m;
    }), b(e.exports, 'default', function() {
        return _D;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');

    function _m(n, o) {
        o ? n.setAttribute('aria-hidden', 'true') : n.removeAttribute('aria-hidden');
    }

    function n(o) {
        return parseInt(window.getComputedStyle(o)['padding-right'], 10) || 0;
    }

    function o(p, q, r) {
        var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
            t = arguments.length > 4 ? arguments[4] : void 0,
            u = [
                q,
                r
            ].concat((0, i.default)(s)),
            v = [
                'TEMPLATE',
                'SCRIPT',
                'STYLE'
            ];
        [].forEach.call(p.children, function(w) {
            1 === w.nodeType && -1 === u.indexOf(w) && -1 === v.indexOf(w.tagName) && _m(w, t);
        });
    }

    function t(u, v) {
        var w = -1;
        return u.some(function(x, y) {
            return !!v(x) && (w = y, !0);
        }), w;
    }

    function v(w, x) {
        var y, z = [],
            A = [],
            B = w.container;
        if (!x.disableScrollLock) {
            if (function(C) {
                    var D = (0, k.default)(C);
                    return D.body === C ? (0, l.default)(D).innerWidth > D.documentElement.clientWidth : C.scrollHeight > C.clientHeight;
                }(B)) {
                var C = (0, v.default)();
                z.push({
                    value: B.style.paddingRight,
                    key: 'padding-right',
                    el: B
                }), B.style['padding-right'] = ''.concat(n(B) + C, 'px'), y = (0, k.default)(B).querySelectorAll('.mui-fixed'), [].forEach.call(y, function(D) {
                    A.push(D.style.paddingRight), D.style.paddingRight = ''.concat(n(D) + C, 'px');
                });
            }
            var D = B.parentElement,
                E = 'HTML' === _m.nodeName && 'scroll' === window.getComputedStyle(_m)['overflow-y'] ? _m : B;
            z.push({
                value: o.style.overflow,
                key: 'overflow',
                el: o
            }), o.style.overflow = 'hidden';
        }
        return function() {
            y && [].forEach.call(y, function(F, G) {
                A[G] ? F.style.paddingRight = A[G] : F.style.removeProperty('padding-right');
            }), z.forEach(function(F) {
                var G = F.value,
                    H = F.el,
                    I = F.key;
                G ? H.style.setProperty(I, G) : H.style.removeProperty(I);
            });
        };
    }
    var _D = function() {
        function E() {
            (0, A.default)(this, E), this.modals = [], this.containers = [];
        }
        return (0, B.default)(E, [{
                key: 'add',
                value: function(F, G) {
                    var H = this.modals.indexOf(F);
                    if (-1 !== H)
                        return H;
                    H = this.modals.length, this.modals.push(F), F.modalRef && _m(F.modalRef, !1);
                    var I = function(J) {
                        var K = [];
                        return [].forEach.call(J.children, function(L) {
                            L.getAttribute && 'true' === L.getAttribute('aria-hidden') && K.push(L);
                        }), K;
                    }(G);
                    o(G, F.mountNode, F.modalRef, I, !0);
                    var J = t(this.containers, function(K) {
                        return K.container === G;
                    });
                    return -1 !== J ? (this.containers[J].modals.push(F), H) : (this.containers.push({
                        modals: [F],
                        container: G,
                        restore: null,
                        hiddenSiblingNodes: I
                    }), H);
                }
            },
            {
                key: 'mount',
                value: function(F, G) {
                    var H = t(this.containers, function(I) {
                            return -1 !== I.modals.indexOf(F);
                        }),
                        I = this.containers[H];
                    I.restore || (I.restore = v(I, G));
                }
            },
            {
                key: 'remove',
                value: function(F) {
                    var G = this.modals.indexOf(F);
                    if (-1 === G)
                        return G;
                    var H = t(this.containers, function(I) {
                            return -1 !== I.modals.indexOf(F);
                        }),
                        I = this.containers[H];
                    if (I.modals.splice(I.modals.indexOf(F), 1), this.modals.splice(G, 1), 0 === I.modals.length)
                        I.restore && I.restore(), F.modalRef && _m(F.modalRef, !0), o(I.container, F.mountNode, F.modalRef, I.hiddenSiblingNodes, !1), this.containers.splice(H, 1);
                    else {
                        var J = I.modals[I.modals.length - 1];
                        J.modalRef && _m(J.modalRef, !1);
                    }
                    return G;
                }
            },
            {
                key: 'isTopModal',
                value: function(F) {
                    return this.modals.length > 0 && this.modals[this.modals.length - 1] === F;
                }
            }
        ]), E;
    }();
}), d.register('.....', function(e, f) {
    function g(h, i) {
        if (!(h instanceof i))
            throw new TypeError('Cannot call a class as a function');
    }
    b(e.exports, 'default', function() {
        return g;
    });
}), d.register('.....', function(e, f) {
    function g() {
        var h = document.createElement('div');
        h.style.width = '99px', h.style.height = '99px', h.style.position = 'absolute', h.style.top = '-9999px', h.style.overflow = 'scroll', document.body.appendChild(h);
        var i = h.offsetWidth - h.clientWidth;
        return document.body.removeChild(h), i;
    }
    i(h.exports, 'default', function() {
        return g;
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....');

    function _h(i) {
        return (0, g.default)(i).defaultView || window;
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....'),
        j = d('.....');
    var _k = function(l) {
        var m = l.children,
            n = l.disableAutoFocus,
            o = void 0 !== n && n,
            p = l.disableEnforceFocus,
            q = void 0 !== p && p,
            r = l.disableRestoreFocus,
            s = void 0 !== r && r,
            t = l.getDoc,
            u = l.isEnabled,
            v = l.open,
            w = g.useRef(),
            x = g.useRef(null),
            y = g.useRef(null),
            z = g.useRef(),
            A = g.useRef(null),
            B = g.useCallback(function(C) {
                A.current = h.findDOMNode(C);
            }, []),
            C = (0, j.default)(m.ref, B),
            D = g.useRef();
        return g.useEffect(function() {
            D.current = v;
        }, [v]), !D.current && v && 'undefined' != typeof window && (z.current = t().activeElement), g.useEffect(function() {
            if (v) {
                var E = (0, i.default)(A.current);
                o || !A.current || A.current.contains(E.activeElement) || (A.current.hasAttribute('tabIndex') || A.current.setAttribute('tabIndex', -1), A.current.focus());
                var F = function() {
                        E.hasFocus() && !q && u() && !w.current ? A.current && !A.current.contains(E.activeElement) && A.current.focus() : w.current = !1;
                    },
                    G = function(H) {
                        !q && u() && 9 === H.keyCode && E.activeElement === A.current && (w.current = !0, H.shiftKey ? y.current.focus() : x.current.focus());
                    };
                E.addEventListener('focus', F, !0), E.addEventListener('keydown', G, !0);
                var H = setInterval(function() {
                    F();
                }, 50);
                return function() {
                    clearInterval(H), E.removeEventListener('focus', F, !0), E.removeEventListener('keydown', G, !0), s || (z.current && z.current.focus && z.current.focus(), z.current = null);
                };
            }
        }, [
            o,
            q,
            s,
            u,
            v
        ]), g.createElement(g.Fragment, null, g.createElement('div', {
            tabIndex: 0,
            ref: x,
            'data-test': 'sentinelStart'
        }), g.cloneElement(m, {
            ref: C
        }), g.createElement('div', {
            tabIndex: 0,
            ref: y,
            'data-test': 'sentinelEnd'
        }));
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = {
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
        _k = i.forwardRef(function(l, m) {
            var n = l.invisible,
                o = void 0 !== n && n,
                p = l.open,
                q = (0, h.default)(l, [
                    'invisible',
                    'open'
                ]);
            return p ? i.createElement('div', (0, g.default)({
                'aria-hidden': !0,
                ref: m
            }, q, {
                style: (0, g.default)({}, j.root, o ? j.invisible : {}, q.style)
            })) : null;
        });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = i.forwardRef(function(n, o) {
            var p = n.children,
                q = n.classes,
                r = n.className,
                s = n.invisible,
                t = void 0 !== s && s,
                u = n.open,
                v = n.transitionDuration,
                w = n.TransitionComponent,
                x = void 0 === w ? l.default : w,
                y = (0, h.default)(n, [
                    'children',
                    'classes',
                    'className',
                    'invisible',
                    'open',
                    'transitionDuration',
                    'TransitionComponent'
                ]);
            return i.createElement(x, (0, g.default)({
                in: u,
                timeout: v
            }, y), i.createElement('div', {
                className: (0, j.default)(q.root, r, t && q.invisible),
                'aria-hidden': !0,
                ref: o
            }, p));
        }),
        _n = (0, k.default)({
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
        })(m);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    d('.....');
    var k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = {
            entering: {
                opacity: 1
            },
            entered: {
                opacity: 1
            }
        },
        q = {
            enter: l.duration.enteringScreen,
            exit: l.duration.leavingScreen
        },
        _r = j.forwardRef(function(s, t) {
            var u = s.children,
                v = s.disableStrictModeCompat,
                w = void 0 !== v && v,
                x = s.in,
                y = s.onEnter,
                z = s.onEntered,
                A = s.onEntering,
                B = s.onExit,
                C = s.onExited,
                D = s.onExiting,
                E = s.style,
                F = s.TransitionComponent,
                G = void 0 === F ? k.default : F,
                H = s.timeout,
                I = void 0 === H ? q : H,
                J = (0, i.default)(s, [
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
                K = (0, m.default)(),
                L = K.unstable_strictMode && !w,
                M = j.useRef(null),
                N = (0, o.default)(u.ref, t),
                O = (0, o.default)(L ? M : void 0, N),
                P = function(Q) {
                    return function(R, S) {
                        if (Q) {
                            var T = L ? [
                                    M.current,
                                    R
                                ] : [
                                    R,
                                    S
                                ],
                                U = (0, h.default)(T, 2),
                                V = U[0],
                                W = U[1];
                            void 0 === W ? Q(V) : Q(V, W);
                        }
                    };
                },
                Q = P(A),
                R = P(function(S, T) {
                    (0, n.reflow)(S);
                    var U = (0, n.getTransitionProps)({
                        style: E,
                        timeout: I
                    }, {
                        mode: 'enter'
                    });
                    S.style.webkitTransition = K.transitions.create('opacity', U), S.style.transition = K.transitions.create('opacity', U), y && y(S, T);
                }),
                S = P(z),
                T = P(D),
                U = P(function(V) {
                    var W = (0, n.getTransitionProps)({
                        style: E,
                        timeout: I
                    }, {
                        mode: 'exit'
                    });
                    V.style.webkitTransition = K.transitions.create('opacity', W), V.style.transition = K.transitions.create('opacity', W), B && B(V);
                }),
                V = P(C);
            return j.createElement(G, (0, g.default)({
                appear: !0,
                in: x,
                nodeRef: L ? M : void 0,
                onEnter: R,
                onEntered: S,
                onEntering: Q,
                onExit: U,
                onExited: V,
                onExiting: T,
                timeout: I
            }, J), function(W, X) {
                return j.cloneElement(u, (0, g.default)({
                    style: (0, g.default)({
                        opacity: 0,
                        visibility: 'exited' !== W || x ? void 0 : 'hidden'
                    }, p[W], E, u.props.style),
                    ref: O
                }, X));
            });
        });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _t;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....');

    function q(r, s) {
        var t = function(u, v) {
            var w, x = v.getBoundingClientRect();
            if (v.fakeTransform)
                w = v.fakeTransform;
            else {
                var y = window.getComputedStyle(v);
                w = y.getPropertyValue('-webkit-transform') || y.getPropertyValue('transform');
            }
            var z = 0,
                A = 0;
            if (w && 'none' !== w && 'string' == typeof w) {
                var B = w.split('(')[1].split(')')[0].split(',');
                z = parseInt(B[4], 10), A = parseInt(B[5], 10);
            }
            return 'left' === u ? 'translateX('.concat(window.innerWidth, 'px) translateX(').concat(z - x.left, 'px)') : 'right' === u ? 'translateX(-'.concat(x.left + x.width - z, 'px)') : 'up' === u ? 'translateY('.concat(window.innerHeight, 'px) translateY(').concat(A - x.top, 'px)') : 'translateY(-'.concat(x.top + x.height - A, 'px)');
        }(r, s);
        t && (s.style.webkitTransform = t, s.style.transform = t);
    }
    var s = {
            enter: o.duration.enteringScreen,
            exit: o.duration.leavingScreen
        },
        _t = i.forwardRef(function(u, v) {
            var w = u.children,
                x = u.direction,
                y = void 0 === x ? 'down' : x,
                z = u.in,
                A = u.onEnter,
                B = u.onEntered,
                C = u.onEntering,
                D = u.onExit,
                E = u.onExited,
                F = u.onExiting,
                G = u.style,
                H = u.timeout,
                I = void 0 === H ? s : H,
                J = u.TransitionComponent,
                K = void 0 === J ? l.default : J,
                L = (0, h.default)(u, [
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
                M = (0, n.default)(),
                N = i.useRef(null),
                O = i.useCallback(function(P) {
                    N.current = j.findDOMNode(P);
                }, []),
                P = (0, m.default)(w.ref, O),
                Q = (0, m.default)(P, v),
                R = function(S) {
                    return function(T) {
                        S && (void 0 === T ? S(N.current) : S(N.current, T));
                    };
                },
                S = R(function(T, U) {
                    q(y, T), (0, p.reflow)(T), A && A(T, U);
                }),
                T = R(function(U, V) {
                    var W = (0, p.getTransitionProps)({
                        timeout: I,
                        style: G
                    }, {
                        mode: 'enter'
                    });
                    U.style.webkitTransition = M.transitions.create('-webkit-transform', (0, g.default)({}, W, {
                        easing: M.transitions.easing.easeOut
                    })), U.style.transition = M.transitions.create('transform', (0, g.default)({}, W, {
                        easing: M.transitions.easing.easeOut
                    })), U.style.webkitTransform = 'none', U.style.transform = 'none', C && C(U, V);
                }),
                U = R(B),
                V = R(F),
                W = R(function(X) {
                    var Y = (0, p.getTransitionProps)({
                        timeout: I,
                        style: G
                    }, {
                        mode: 'exit'
                    });
                    X.style.webkitTransition = M.transitions.create('-webkit-transform', (0, g.default)({}, Y, {
                        easing: M.transitions.easing.sharp
                    })), X.style.transition = M.transitions.create('transform', (0, g.default)({}, Y, {
                        easing: M.transitions.easing.sharp
                    })), q(y, X), D && D(X);
                }),
                X = R(function(Y) {
                    Y.style.webkitTransition = '', Y.style.transition = '', E && E(Y);
                }),
                Y = i.useCallback(function() {
                    N.current && q(y, N.current);
                }, [y]);
            return i.useEffect(function() {
                if (!z && 'down' !== y && 'right' !== y) {
                    var Z = (0, k.default)(function() {
                        N.current && q(y, N.current);
                    });
                    return window.addEventListener('resize', Z),
                        function() {
                            Z.clear(), window.removeEventListener('resize', Z);
                        };
                }
            }, [
                y,
                z
            ]), i.useEffect(function() {
                z || Y();
            }, [
                z,
                Y
            ]), i.createElement(K, (0, g.default)({
                nodeRef: N,
                onEnter: S,
                onEntered: U,
                onEntering: T,
                onExit: W,
                onExited: X,
                onExiting: V,
                appear: !0,
                in: z,
                timeout: I
            }, L), function(Z, $) {
                return i.cloneElement(w, (0, g.default)({
                    ref: Q,
                    style: (0, g.default)({
                        visibility: 'exited' !== Z || z ? void 0 : 'hidden'
                    }, G, w.props.style)
                }, $));
            });
        });
}), d.register('.....', function(e, f) {
    function g(h) {
        var i, j = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 166;

        function k() {
            for (var l = arguments.length, m = new Array(k), n = 0; n < k; n++)
                m[n] = arguments[n];
            var o = this,
                p = function() {
                    h.apply(o, m);
                };
            clearTimeout(i), i = setTimeout(p, j);
        }
        return k.clear = function() {
            clearTimeout(i);
        }, k;
    }
    i(e.exports, 'default', function() {
        return g;
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = i.forwardRef(function(m, n) {
            var o = m.classes,
                p = m.className,
                q = m.component,
                r = void 0 === q ? 'div' : q,
                s = m.square,
                t = void 0 !== s && s,
                u = m.elevation,
                v = void 0 === u ? 1 : u,
                w = m.variant,
                x = void 0 === w ? 'elevation' : w,
                y = (0, g.default)(m, [
                    'classes',
                    'className',
                    'component',
                    'square',
                    'elevation',
                    'variant'
                ]);
            return i.createElement(r, (0, h.default)({
                className: (0, j.default)(o.root, p, 'outlined' === x ? o.outlined : o['elevation'.concat(v)], !t && o.rounded),
                ref: n
            }, y));
        }),
        _m = (0, k.default)(function(n) {
            var o = {};
            return n.shadows.forEach(function(p, q) {
                o['elevation'.concat(q)] = {
                    boxShadow: p
                };
            }), (0, h.default)({
                root: {
                    backgroundColor: n.palette.background.paper,
                    color: n.palette.text.primary,
                    transition: n.transitions.create('box-shadow')
                },
                rounded: {
                    borderRadius: n.shape.borderRadius
                },
                outlined: {
                    border: '1px solid '.concat(n.palette.divider)
                }
            }, o);
        }, {
            name: 'MuiPaper'
        })(l);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = i.forwardRef(function(n, o) {
            var p = n.children,
                q = n.classes,
                r = n.className,
                s = n.component,
                t = void 0 === s ? 'ul' : s,
                u = n.dense,
                v = void 0 !== u && u,
                w = n.disablePadding,
                x = void 0 !== w && w,
                y = n.subheader,
                z = (0, h.default)(n, [
                    'children',
                    'classes',
                    'className',
                    'component',
                    'dense',
                    'disablePadding',
                    'subheader'
                ]),
                A = i.useMemo(function() {
                    return {
                        dense: v
                    };
                }, [v]);
            return i.createElement(l.default.Provider, {
                value: A
            }, i.createElement(t, (0, g.default)({
                className: (0, j.default)(q.root, r, v && q.dense, !x && q.padding, y && q.subheader),
                ref: o
            }, z), y, p));
        }),
        _n = (0, k.default)({
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
        })(m);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _g;
    });
    var _g = d('.....').createContext({});
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = 'undefined' == typeof window ? i.useEffect : i.useLayoutEffect,
        r = i.forwardRef(function(s, t) {
            var u = s.alignItems,
                v = void 0 === u ? 'center' : u,
                w = s.autoFocus,
                x = void 0 !== w && w,
                y = s.button,
                z = void 0 !== y && y,
                A = s.children,
                B = s.classes,
                C = s.className,
                D = s.component,
                E = s.ContainerComponent,
                F = void 0 === E ? 'li' : E,
                G = s.ContainerProps,
                H = (G = void 0 === G ? {} : G).className,
                I = (0, h.default)(G, ['className']),
                J = s.dense,
                K = void 0 !== J && J,
                L = s.disabled,
                M = void 0 !== L && L,
                N = s.disableGutters,
                O = void 0 !== N && N,
                P = s.divider,
                Q = void 0 !== P && P,
                R = s.focusVisibleClassName,
                S = s.selected,
                T = void 0 !== S && S,
                U = (0, h.default)(s, [
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
                V = i.useContext(o.default),
                W = {
                    dense: K || V.dense || !1,
                    alignItems: v
                },
                X = i.useRef(null);
            q(function() {
                x && X.current && X.current.focus();
            }, [x]);
            var Y = i.Children.toArray(A),
                Z = Y.length && (0, m.default)(Y[Y.length - 1], ['ListItemSecondaryAction']),
                $ = i.useCallback(function(ab) {
                    X.current = p.findDOMNode(ab);
                }, []),
                ab = (0, n.default)($, t),
                bb = (0, g.default)({
                    className: (0, j.default)(B.root, C, W.dense && B.dense, !O && B.gutters, Q && B.divider, M && B.disabled, z && B.button, 'center' !== v && B.alignItemsFlexStart, Z && B.secondaryAction, T && B.selected),
                    disabled: M
                }, U),
                cb = D || 'li';
            return z && (bb.component = D || 'div', bb.focusVisibleClassName = (0, j.default)(B.focusVisible, R), cb = l.default), Z ? (cb = bb.component || D ? cb : 'div', 'li' === F && ('li' === cb ? cb = 'div' : 'li' === bb.component && (bb.component = 'div')), i.createElement(o.default.Provider, {
                value: W
            }, i.createElement(F, (0, g.default)({
                className: (0, j.default)(B.container, H),
                ref: ab
            }, I), i.createElement(cb, bb, Y), Y.pop()))) : i.createElement(o.default.Provider, {
                value: W
            }, i.createElement(cb, (0, g.default)({
                ref: ab
            }, bb), Y));
        }),
        _s = (0, k.default)(function(t) {
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
                        backgroundColor: t.palette.action.selected
                    },
                    '&$selected, &$selected:hover': {
                        backgroundColor: t.palette.action.selected
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
                    borderBottom: '1px solid '.concat(t.palette.divider),
                    backgroundClip: 'padding-box'
                },
                gutters: {
                    paddingLeft: 16,
                    paddingRight: 16
                },
                button: {
                    transition: t.transitions.create('background-color', {
                        duration: t.transitions.duration.shortest
                    }),
                    '&:hover': {
                        textDecoration: 'none',
                        backgroundColor: t.palette.action.hover,
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
        })(r);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....');

    function _h(i, j) {
        return g.isValidElement(i) && -1 !== j.indexOf(i.type.muiName);
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = i.forwardRef(function(n, o) {
            var p = n.classes,
                q = n.className,
                r = (0, h.default)(n, [
                    'classes',
                    'className'
                ]),
                s = i.useContext(l.default);
            return i.createElement('div', (0, g.default)({
                className: (0, j.default)(p.root, q, 'flex-start' === s.alignItems && p.alignItemsFlexStart),
                ref: o
            }, r));
        }),
        _n = (0, k.default)(function(o) {
            return {
                root: {
                    minWidth: 56,
                    color: o.palette.action.active,
                    flexShrink: 0,
                    display: 'inline-flex'
                },
                alignItemsFlexStart: {
                    marginTop: 8
                }
            };
        }, {
            name: 'MuiListItemIcon'
        })(m);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = i.forwardRef(function(o, p) {
            var q = o.children,
                r = o.classes,
                s = o.className,
                t = o.disableTypography,
                u = void 0 !== t && t,
                v = o.inset,
                w = void 0 !== v && v,
                x = o.primary,
                y = o.primaryTypographyProps,
                z = o.secondary,
                A = o.secondaryTypographyProps,
                B = (0, h.default)(o, [
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
                C = i.useContext(m.default).dense,
                D = null != x ? x : q;
            null == D || D.type === l.default || u || (D = i.createElement(l.default, (0, g.default)({
                variant: C ? 'body2' : 'body1',
                className: r.primary,
                component: 'span',
                display: 'block'
            }, y), D));
            var E = z;
            return null == E || E.type === l.default || u || (E = i.createElement(l.default, (0, g.default)({
                variant: 'body2',
                className: r.secondary,
                color: 'textSecondary',
                display: 'block'
            }, A), E)), i.createElement('div', (0, g.default)({
                className: (0, j.default)(r.root, s, C && r.dense, w && r.inset, D && E && r.multiline),
                ref: p
            }, B), D, E);
        }),
        _o = (0, k.default)({
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
        })(n);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = {
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
        n = i.forwardRef(function(o, p) {
            var q = o.align,
                r = void 0 === q ? 'inherit' : q,
                s = o.classes,
                t = o.className,
                u = o.color,
                v = void 0 === u ? 'initial' : u,
                w = o.component,
                x = o.display,
                y = void 0 === x ? 'initial' : x,
                z = o.gutterBottom,
                A = void 0 !== z && z,
                B = o.noWrap,
                C = void 0 !== B && B,
                D = o.paragraph,
                E = void 0 !== D && D,
                F = o.variant,
                G = void 0 === F ? 'body1' : F,
                H = o.variantMapping,
                I = void 0 === H ? m : H,
                J = (0, h.default)(o, [
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
                K = w || (E ? 'p' : I[G] || m[G]) || 'span';
            return i.createElement(K, (0, g.default)({
                className: (0, j.default)(s.root, t, 'inherit' !== G && s[G], 'initial' !== v && s['color'.concat((0, l.default)(v))], C && s.noWrap, A && s.gutterBottom, E && s.paragraph, 'inherit' !== r && s['align'.concat((0, l.default)(r))], 'initial' !== y && s['display'.concat((0, l.default)(y))]),
                ref: p
            }, J));
        }),
        _o = (0, k.default)(function(p) {
            return {
                root: {
                    margin: 0
                },
                body2: p.typography.body2,
                body1: p.typography.body1,
                caption: p.typography.caption,
                button: p.typography.button,
                h1: p.typography.h1,
                h2: p.typography.h2,
                h3: p.typography.h3,
                h4: p.typography.h4,
                h5: p.typography.h5,
                h6: p.typography.h6,
                subtitle1: p.typography.subtitle1,
                subtitle2: p.typography.subtitle2,
                overline: p.typography.overline,
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
                    color: p.palette.primary.main
                },
                colorSecondary: {
                    color: p.palette.secondary.main
                },
                colorTextPrimary: {
                    color: p.palette.text.primary
                },
                colorTextSecondary: {
                    color: p.palette.text.secondary
                },
                colorError: {
                    color: p.palette.error.main
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
        })(n);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9c.39-.67-.09-1.5-.86-1.5H13l2.49-6.65c.25-.65-.23-1.35-.93-1.35H8c-.55 0-1 .45-1 1z'
        }), 'FlashOnRounded');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z'
        }), 'QuestionAnswer');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z'
        }), 'Shop');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....');
    var _i = j => (0, g.jsx)('span', {
        onClick: () => {
            j.disabled || (j.onClick && j.onClick(), (0, h.changeRoute)(j.to));
        },
        children: j.children
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _u;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....');
    let q, r, s = t => t;
    let t = class extends n.Component {
        render() {
            return this.props.powerups.linkPartnerName ? (0, h.jsx)(o.default, {
                children: (0, h.jsxs)('div', {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: [
                        (0, h.jsx)('div', {
                            style: {
                                background: l.default.DarkSuccessGreen,
                                color: l.default.White,
                                height: 43,
                                width: 43,
                                marginRight: 7,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: (0, h.jsx)(i.default, {
                                name: j.LINK_ICON
                            })
                        }),
                        (0, h.jsxs)('div', {
                            style: {
                                fontWeight: 'bold'
                            },
                            children: [
                                (0, h.jsx)(_v, {
                                    children: (0, h.jsx)(k.default, {
                                        text: 'Link Active'
                                    })
                                }),
                                (0, h.jsx)(_w, {
                                    children: this.props.powerups.linkPartnerName
                                })
                            ]
                        })
                    ]
                })
            }) : null;
        }
    };
    t = (0, g.__decorate)([
        (0, m.inject)('powerups'),
        m.observer
    ], t);
    var _u = t;
    const _v = p.default.div(q || (q = s`
  font-size: 17px;
  opacity: 0.8;
`)),
        _w = p.default.div(r || (r = s`
  font-size: 20px;
  text-overflow: ellipsis;
  width: 261px;
  white-space: nowrap;
  overflow: hidden;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....');
    let h;
    var _i = d('.....').default.div(h || (h = (j => j)`
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
`), g.default.name);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _D;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    d('.....');
    var o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....');
    let t, u, v, w, x = y => y;
    const y = s.default.div(t || (t = x`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: ${ 0 };
`), n.default.name),
        z = s.default.div(u || (u = x`
  font-size: 38px;
  margin-left: 5px;
  font-weight: 900;
`)),
        A = s.default.div(v || (v = x`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: ${ 0 };
  color: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
`), B => B.backgroundColor, B => B.textColor),
        B = s.default.div(w || (w = x`
  font-size: 19px;
  opacity: 0.8;
  margin-bottom: 7px;
  font-family: ${ 0 };
`), n.default.name);
    let C = class extends r.Component {
        render() {
            const D = (this.props.powerups.availablePowerups.filter(E => E.name === this.props.navigation.attackModal.powerup) || [])[0];
            if (!D)
                return null;
            const E = !(D.name === o.PowerupNames.link && this.props.powerups.activePowerups.includes(o.PowerupNames.shield));
            return (0, i.jsxs)(l.default, {
                open: this.props.navigation.attackModal.open,
                close: this.close,
                customMaxWidth: '90%',
                customWidth: '600px',
                children: [
                    (0, i.jsxs)(y, {
                        children: [
                            (0, i.jsx)(A, {
                                backgroundColor: D.color.background,
                                textColor: D.color.text,
                                children: (0, i.jsx)(j.default, {
                                    name: D.icon
                                })
                            }),
                            (0, i.jsx)(z, {
                                children: (0, i.jsx)(m.default, {
                                    text: (0, p.getPowerupName)(D)
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(B, {
                        children: (0, i.jsx)(m.default, {
                            text: E ? (0, p.getPowerupDescription)(D.description) : 'This powerup is disabled while shield is active'
                        })
                    }),
                    E && (0, i.jsx)(k.default, {
                        usePowerupAction: !0,
                        parentAction: this.close
                    })
                ]
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'close', () => this.props.navigation.attackModal.open = !1);
        }
    };
    C = (0, h.__decorate)([
        (0, q.inject)('powerups', 'navigation'),
        q.observer
    ], C);
    var _D = C;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _z;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    let s, t, u = v => v;
    const v = m.default.div(s || (s = u`
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
`), p.default.name),
        w = m.default.div(t || (t = u`
  background: ${ 0 };
  border-radius: 4px;
  box-shadow: ${ 0 };
  animation-duration: 0.5s;
  ${ 0 }
  padding: ${ 0 };
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 9999999999999;
`), o.default.White, q.default.basic, x => x.fullScreen ? '\n  height: 100%;\n  width: 100%;\n  ' : `\n  max-width: ${ x.customMaxWidth ? x.customMaxWidth : '540px' };\n  ${ x.customWidth ? 'width: ' + x.customWidth + ';' : null }\n  max-height: 79vh;\n  margin: 20px;\n  `, x => x.customPadding || '18px'),
        x = y => y.stopPropagation();
    let y = class extends j.Component {
        static getDerivedStateFromProps(z, A) {
            return !z.open && A.open ? (r.done.play(), {
                exiting: !0,
                open: !1
            }) : z.open && !A.open ? {
                exiting: !1,
                open: !0
            } : null;
        }
        componentDidUpdate(z, A) {
            this.state.exiting && !A.exiting && setTimeout(() => this.setState({
                exiting: !1
            }), 500);
        }
        render() {
            const {
                close: z,
                gameValues: {
                    gameStatus: A
                }
            } = this.props, {
                open: B,
                exiting: C
            } = this.state;
            if (!B && !C)
                return null;
            if (A === n.GameStatus.results)
                return null;
            const D = C ? 'fadeOut' : 'fadeIn',
                E = C ? 'zoomOut' : 'zoomIn';
            return k.createPortal((0, i.jsx)(v, {
                className: `animated ${ D }`,
                onClick: z,
                children: (0, i.jsx)(w, {
                    onClick: x,
                    fullScreen: this.props.fullscreen,
                    className: `animated ${ E }`,
                    customPadding: this.props.customPadding,
                    customMaxWidth: this.props.customMaxWidth,
                    customWidth: this.props.customWidth,
                    style: this.props.customStyle,
                    children: this.props.children
                })
            }), document.body);
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                exiting: !1,
                open: !1
            });
        }
    };
    y = (0, h.__decorate)([
        (0, l.inject)('gameValues'),
        l.observer
    ], y);
    var _z = y;
}), d.register('.....', function(e, f) {
    let g;
    var h;
    let i;
    var j;
    let k;
    var l;
    let m;
    var n;
    b(e.exports, 'GameStatus', function() {
        return k;
    }), (h = g || (g = {})).multipleChoice = 'mc', h.textInput = 'text', (j = i || (i = {})).public = 'public', j.private = 'private', (l = k || (k = {})).setup = 'setup', l.join = 'join', l.teams = 'teams', l.gameplay = 'gameplay', l.results = 'results', (n = m || (m = {})).time = 'time', n.race = 'race', n.allIn = 'allIn';
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n = class extends l.Component {
        render() {
            const o = this.useablePowerups();
            return o.length < 1 ? null : (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsx)(j.default, {}),
                    (0, i.jsx)('div', {
                        style: {
                            height: 5
                        }
                    }),
                    o.map(p => (0, i.jsx)(m.default, {
                        powerup: p
                    }, p.name))
                ]
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'useablePowerups', () => this.props.powerups.availablePowerups.filter(o => this.props.powerups.purchasedPowerups.includes(o.name) && !this.props.powerups.usedPowerups.includes(o.name)));
        }
    };
    n = (0, h.__decorate)([
        (0, k.inject)('powerups'),
        k.observer
    ], n);
    var _o = n;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = i.forwardRef(function(n, o) {
            var p = n.absolute,
                q = void 0 !== p && p,
                r = n.classes,
                s = n.className,
                t = n.component,
                u = void 0 === t ? 'hr' : t,
                v = n.flexItem,
                w = void 0 !== v && v,
                x = n.light,
                y = void 0 !== x && x,
                z = n.orientation,
                A = void 0 === z ? 'horizontal' : z,
                B = n.role,
                C = void 0 === B ? 'hr' !== u ? 'separator' : void 0 : B,
                D = n.variant,
                E = void 0 === D ? 'fullWidth' : D,
                F = (0, h.default)(n, [
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
            return i.createElement(u, (0, g.default)({
                className: (0, j.default)(r.root, s, 'fullWidth' !== E && r[E], q && r.absolute, w && r.flexItem, y && r.light, 'vertical' === A && r.vertical),
                role: C,
                ref: o
            }, F));
        }),
        _n = (0, k.default)(function(o) {
            return {
                root: {
                    height: 1,
                    margin: 0,
                    border: 'none',
                    flexShrink: 0,
                    backgroundColor: o.palette.divider
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
                    backgroundColor: (0, l.fade)(o.palette.divider, 0.08)
                },
                middle: {
                    marginLeft: o.spacing(2),
                    marginRight: o.spacing(2)
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
        })(m);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _G;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    d('.....');
    var s = d('.....'),
        t = d('.....'),
        u = d('.....');
    let v, w, x, y, z = A => A;
    const A = [
            s.PowerupNames.pumpkinPie,
            s.PowerupNames.icer,
            s.PowerupNames.reducer,
            s.PowerupNames.subtractor,
            s.PowerupNames.giving,
            s.PowerupNames.link,
            s.PowerupNames.blurredScreen,
            s.PowerupNames.cashConcealer,
            s.PowerupNames.outnumbered
        ],
        B = t.default.div(v || (v = z`
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
`), n.default.name),
        C = t.default.div(w || (w = z`
  display: flex;
  align-items: center;
`)),
        D = t.default.div(x || (x = z`
  background-color: ${ 0 };
  color: ${ 0 };
  height: 38px;
  width: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`), E => E.colors.background, E => E.colors.text),
        E = t.default.div(y || (y = z`
  font-size: 18px;
  font-weight: bold;
  margin-left: 7px;
`));
    let F = class extends q.Component {
        render() {
            const {
                powerup: G
            } = this.props;
            return (0, i.jsx)('div', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                },
                children: (0, i.jsxs)(B, {
                    children: [
                        (0, i.jsxs)(C, {
                            children: [
                                (0, i.jsx)(j.default, {
                                    title: (0, i.jsx)('div', {
                                        style: {
                                            fontSize: 15
                                        },
                                        children: (0, i.jsx)(m.default, {
                                            text: (0, o.getPowerupDescription)(G.description)
                                        })
                                    }),
                                    children: (0, i.jsx)(D, {
                                        colors: G.color,
                                        children: (0, i.jsx)(l.default, {
                                            name: G.icon
                                        })
                                    })
                                }),
                                (0, i.jsx)(E, {
                                    children: (0, i.jsx)(m.default, {
                                        text: (0, o.getPowerupName)(G)
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(k.default, {
                            onClick: this.activatePowerup,
                            label: (0, i.jsx)(m.default, {
                                text: 'Use'
                            }),
                            type: this.props.powerups.activePowerups.includes(G.name) ? 'disabled' : 'primary',
                            size: 'small'
                        })
                    ]
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'activatePowerup', () => {
                this.props.powerup.name.includes('Stone') ? u.stone.play() : (u.successClick.play(), this.props.powerup.name !== s.PowerupNames.repurchasePowerups && (0, o.toggleDrawer)(!1)), (0, o.send)(r.default.powerupActivated, this.props.powerup.name), A.includes(this.props.powerup.name) && (this.props.navigation.attackModal.powerup = this.props.powerup.name, this.props.navigation.attackModal.open = !0);
            });
        }
    };
    F = (0, h.__decorate)([
        (0, p.inject)('powerups', 'navigation'),
        p.observer
    ], F);
    var _G = F;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m, n, o, p, q, r = s => s;
    var _s = t => (0, g.jsxs)(_t, {
        children: [
            (0, g.jsxs)(_u, {
                children: [
                    (0, g.jsx)(_v, {
                        children: t.playerName
                    }),
                    t.teamName && (0, g.jsx)(_w, {
                        children: t.teamName
                    })
                ]
            }),
            (0, g.jsx)(_x, {
                children: (0, g.jsx)(l.default, {
                    style: {
                        color: 'rgba(117, 117, 117, 1.0)'
                    },
                    onClick: t.isSettingsOpen ? t.onBack : t.onClickSettings,
                    children: t.isSettingsOpen ? (0, g.jsx)(i.default, {}) : (0, g.jsx)(j.default, {})
                })
            })
        ]
    });
    const _t = h.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(m || (m = r`
  font-family: ${ 0 };
  flex-shrink: 0;
  padding: 12px 16px;
  padding-right: 5px;
  background-color: #f2f2f2;
`), k.mainFontName),
        _u = h.default.div.attrs({
            className: 'flex flex-column hc'
        })(n || (n = r`
  align-items: flex-start;
  overflow: hidden;
`)),
        _v = h.default.div(o || (o = r`
  color: #222222;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
`)),
        _w = h.default.div(p || (p = r`
  font-size: 12px;
  color: #696969;
`)),
        _x = h.default.div(q || (q = r`
  margin-left: 10px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z'
        }), 'KeyboardBackspace');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            transform: 'scale(1.2, 1.2)',
            d: 'M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'
        }), 'Settings');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _v;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n, o, p, q, r, s, t, u = v => v;
    var _v = (0, j.observer)(() => {
        const {
            pardy: w
        } = k.useContext(i.default), x = w.powers.find(y => y.id === w.power);
        return x ? (0, g.jsx)(_w, {
            children: (0, g.jsxs)(_x, {
                children: [
                    (0, g.jsx)(_y, {
                        style: {
                            backgroundColor: x.background
                        },
                        children: (0, g.jsx)(_z, {
                            src: x.image
                        })
                    }),
                    (0, g.jsxs)(_A, {
                        children: [
                            (0, g.jsx)(_B, {
                                children: x.name
                            }),
                            (0, g.jsx)(_C, {
                                children: x.description
                            })
                        ]
                    })
                ]
            })
        }) : null;
    });
    const _w = l.default.div.attrs({
            className: 'maxWidth'
        })(n || (n = u`
  font-family: ${ 0 };
  padding: 15px;
`), m.mainFontName),
        _x = l.default.div.attrs({
            className: 'maxWidth light-shadow'
        })(o || (o = u`
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 0px;
  border-radius: 5px;
  overflow: hidden;
`)),
        _y = l.default.div.attrs({
            className: 'maxWidth flex-center'
        })(p || (p = u`
  height: 80px;
`)),
        _z = l.default.img(q || (q = u`
  height: 40px;
  filter: drop-shadow(2px 2px 2px #222);
`)),
        _A = l.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(r || (r = u`
  background: ${ 0 };
  padding: 20px 15px;
  text-align: center;
`), h.default.Snow),
        _B = l.default.div(s || (s = u`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 2px;
`)),
        _C = l.default.div(t || (t = u`
  font-size: 14px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _t;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    let r, s = class extends k.Component {
        render() {
            const t = this.props.imposter.noteDrawerOpen;
            return (0, m.inImposterMode)() ? (0, i.jsx)(n.StyledDrawer, {
                closable: !1,
                placement: 'left',
                visible: t,
                onClose: this.close,
                width: window.innerWidth > 500 ? 364 : '80vw',
                bodyStyle: {
                    height: '100%',
                    overflow: 'hidden',
                    padding: 0,
                    fontFamily: '\'Space Grotesk\', monospace'
                },
                children: (0, i.jsxs)(n.LeaderboardContainer, {
                    style: {
                        paddingLeft: 20,
                        paddingRight: 20
                    },
                    children: [
                        (0, i.jsxs)(_u, {
                            children: [
                                (0, i.jsx)('span', {
                                    role: 'img',
                                    'aria-label': 'notebook',
                                    children: '\uD83D\uDCD3'
                                }),
                                ' ',
                                'Notebook'
                            ]
                        }),
                        (0, i.jsx)(l.default, {
                            minRows: 8
                        }),
                        (0, i.jsx)(p.default, {
                            type: 'info',
                            style: {
                                marginTop: 17,
                                marginBottom: 25
                            },
                            message: (0, i.jsx)(q.default, {
                                text: 'Tip'
                            }),
                            description: (0, i.jsx)(q.default, {
                                text: 'Pay attention to the Investigation Log for more clues.'
                            }),
                            showIcon: !0
                        })
                    ]
                })
            }) : null;
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'close', () => this.props.imposter.noteDrawerOpen = !1);
        }
    };
    s = (0, h.__decorate)([
        (0, j.inject)('imposter'),
        j.observer
    ], s);
    var _t = s;
    const _u = o.default.div(r || (r = (v => v)`
  font-weight: 900;
  font-size: 34px;
  margin-top: 10px;
  margin-bottom: 7px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _q;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    const {
        TextArea: o
    } = k.default;
    let p = class extends j.Component {
        componentWillUnmount() {
            this.save();
        }
        render() {
            return this.props.imposter.me ? (0, i.jsx)(o, {
                placeholder: 'Leave notes or observations here!',
                value: this.props.imposter.me.notes,
                onChange: this.handleChange,
                onBlur: this.onBlur,
                autoSize: {
                    minRows: this.props.minRows || 4
                }
            }) : null;
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'handleChange', q => {
                this.props.imposter.me.notes = q.target.value;
            }), (0, g.default)(this, 'onBlur', () => this.save()), (0, g.default)(this, 'save', () => {
                (0, m.send)(n.default.imposter.notes, this.props.imposter.me.notes);
            });
        }
    };
    p = (0, h.__decorate)([
        (0, l.inject)('imposter'),
        l.observer
    ], p);
    var _q = p;
}), d.register('.....', function(e, f) {
    b(e.exports, 'StyledDrawer', function() {
        return _s;
    }), b(e.exports, 'LeaderboardContainer', function() {
        return _v;
    }), b(e.exports, 'default', function() {
        return _u;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....');
    let p, q, r = s => s;
    const _s = (0, m.default)(j.default)(p || (p = r`
  .ant-drawer-wrapper-body {
    width: 100%;
    height: 100%;
  }
`));
    let t = class extends l.Component {
        render() {
            return this.props.gameOptions.type !== n.GameType.live ? null : (0, i.jsx)(_s, {
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
                children: (0, i.jsx)(_v, {
                    children: (0, i.jsx)(o.default, {})
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'close', () => this.props.navigation.leaderboardDrawerOpen = !1);
        }
    };
    t = (0, h.__decorate)([
        (0, k.inject)('navigation', 'gameOptions'),
        k.observer
    ], t);
    var _u = t;
    const _v = m.default.div(q || (q = r`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    class j extends i.Component {
        render() {
            return (0, g.jsx)(i.Fragment, {
                children: (0, g.jsx)(h.default, {
                    showSelf: !0,
                    customItemBorderRadius: 7
                })
            });
        }
    }
    var _k = j;
}), d.register('.....', function(e, f) {
    b(e.exports, 'Container', function() {
        return _Q;
    }), b(e.exports, 'default', function() {
        return _W;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....'),
        w = d('.....'),
        x = d('.....'),
        y = d('.....'),
        z = d('.....'),
        A = d('.....'),
        B = d('.....'),
        C = d('.....'),
        D = d('.....'),
        E = d('.....'),
        F = d('.....'),
        G = d('.....'),
        H = d('.....'),
        I = d('.....'),
        J = d('.....'),
        K = d('.....');
    let L;
    const M = [k.default.questions],
        N = () => (0, J.sample)('abcdefghijklmnopqrstuvwxyz'.split('')),
        O = N(),
        P = N(),
        _Q = n.default.div.withConfig({
            displayName: `sc-${ O + P }`
        }).attrs({
            className: 'maxAll flex-column'
        })(L || (L = (R => R)`
  flex: 1 1 auto;
  min-height: 0;
  background: ${ 0 };
  overflow-x: hidden;
  overflow-y: hidden;
`), R => R.customBackground || R.theme.defaultBackground),
        R = {
            width: '100%',
            height: '100%'
        },
        S = T => {
            if (T.currentRoute === T.path) {
                const U = T.component;
                return (0, g.jsx)(U, {});
            }
            return null;
        },
        T = () => v.default.navigation.canChangeRoute = !1,
        U = () => v.default.navigation.canChangeRoute = !0,
        V = W => {
            const [X, Y] = l.useState(!0);
            return l.useEffect(() => {
                Y(!1);
            }, []), (0, g.jsx)(m.TransitionGroup, {
                style: R,
                children: (0, g.jsx)(m.CSSTransition, {
                    style: R,
                    timeout: K.CSS_TRANSITION_TIMEOUT,
                    onExit: T,
                    onEntered: U,
                    classNames: M.includes(W.currentRoute) || X ? '' : 'fade-router',
                    children: (0, g.jsxs)(g.Fragment, {
                        children: [
                            (0, g.jsx)(S, {
                                currentRoute: W.currentRoute,
                                path: k.default.upgrade,
                                component: j.default
                            }),
                            (0, g.jsx)(S, {
                                currentRoute: W.currentRoute,
                                path: k.default.shop,
                                component: i.default
                            }),
                            (0, g.jsx)(S, {
                                currentRoute: W.currentRoute,
                                path: k.default.questions,
                                component: q.default
                            }),
                            (0, g.jsx)(S, {
                                currentRoute: W.currentRoute,
                                path: k.default.team,
                                component: p.default
                            }),
                            (0, g.jsx)(S, {
                                currentRoute: W.currentRoute,
                                path: k.default.waiting,
                                component: h.default
                            }),
                            (0, g.jsx)(S, {
                                currentRoute: W.currentRoute,
                                path: k.default.gameOver,
                                component: o.default
                            }),
                            (0, g.jsx)(S, {
                                currentRoute: W.currentRoute,
                                path: k.default.nonDismissMessage,
                                component: y.default
                            }),
                            (0, g.jsx)(S, {
                                currentRoute: W.currentRoute,
                                path: k.default.imposterMode,
                                component: B.default
                            }),
                            (0, g.jsx)(S, {
                                currentRoute: W.currentRoute,
                                path: k.default.drawMode,
                                component: C.default
                            }),
                            (0, g.jsx)(S, {
                                currentRoute: W.currentRoute,
                                path: k.default.pardyMode,
                                component: D.default
                            }),
                            (0, g.jsx)(S, {
                                currentRoute: W.currentRoute,
                                path: k.default.join,
                                component: E.default
                            })
                        ]
                    })
                }, W.currentRoute)
            });
        };
    var _W = (0, u.observer)(X => {
        const {
            gameValues: Y,
            navigation: Z
        } = l.useContext(H.default);
        return l.useEffect(() => {
            X.joinDetails && ((0, I.default)({
                serverUrl: X.joinDetails.serverUrl,
                roomId: X.joinDetails.roomId,
                intentId: X.joinDetails.intentId
            }), (0, t.when)(() => Y.gameStatus === w.GameStatus.results, () => {
                (0, s.changeRoute)(k.default.gameOver);
            }), (0, s.listenForLeave)());
        }, []), (0, g.jsxs)(_Q, {
            children: [
                (0, g.jsx)(V, {
                    currentRoute: Z.currentRoute
                }),
                (0, g.jsx)(r.default, {}),
                (0, g.jsx)(F.default, {}),
                (0, g.jsx)(x.default, {}),
                (0, g.jsx)(z.default, {}),
                (0, g.jsx)(A.default, {}),
                (0, g.jsx)(G.default, {})
            ]
        });
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'ITEM_MAX_WIDTH', function() {
        return _t;
    }), b(e.exports, 'default', function() {
        return _z;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = (m = d('.....'), d('.....')),
        o = d('.....'),
        p = d('.....');
    let q, r, s = t => t;
    const _t = 600,
        u = l.default.div(q || (q = s`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  background: ${ 0 };
  -webkit-overflow-scrolling: touch;
`), m.backgroundCanvasColor),
        v = l.default.div(r || (r = s`
  width: 90%;
  max-width: ${ 0 }px;
  min-height: 100%;
`), _t);
    let w;
    var x;
    (x = w || (w = {})).information = 'information', x.drawing = 'drawing';
    let y = class extends k.Component {
        render() {
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.default, {}),
                    this.getContent()
                ]
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                screen: w.information
            }), (0, g.default)(this, 'switchToDrawing', () => {
                this.setState({
                    screen: w.drawing
                });
            }), (0, g.default)(this, 'getContent', () => this.state.screen === w.information ? (0, i.jsx)(u, {
                onClick: this.switchToDrawing,
                children: (0, i.jsxs)(v, {
                    children: [
                        (0, i.jsx)('div', {
                            style: {
                                height: 20
                            }
                        }),
                        (0, i.jsx)(n.default, {}),
                        this.props.gameValues.news.map(z => (0, i.jsx)(o.default, {
                            item: z
                        }, z.description)),
                        (0, i.jsx)('div', {
                            style: {
                                height: 20
                            }
                        })
                    ]
                })
            }) : (0, i.jsx)(m.default, {}));
        }
    };
    y = (0, h.__decorate)([
        (0, j.inject)('gameValues'),
        j.observer
    ], y);
    var _z = y;
}), d.register('.....', function(e, f) {
    b(e.exports, 'backgroundCanvasColor', function() {
        return _r;
    }), b(e.exports, 'defaultDrawingColor', function() {
        return _s;
    }), b(e.exports, 'secondaryDrawingColor', function() {
        return _t;
    }), b(e.exports, 'default', function() {
        return _w;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....');
    let p;
    const q = 'gimkit-draw-canvas',
        _r = () => (0, m.inImposterMode)() ? '#313639' : (0, m.inLavaMode)() ? '#263238' : (0, m.inPardyMode)() ? '#525380' : '#4caf50',
        _s = () => (0, m.inImposterMode)() ? l.default.White : (0, m.inLavaMode)() || (0, m.inPardyMode)() ? '#ffeb3b' : '#424242',
        _t = () => (0, m.inImposterMode)() ? '#ffee58' : (0, m.inThanosMode)() ? '#5e35b1' : (0, m.inLavaMode)() ? '#ff6f00' : (0, m.inPardyMode)() ? '#99f6a9' : '#e1f5fe',
        u = k.default.div(p || (p = (v => v)`
  height: 100%;
  width: 100%;
  background: ${ 0 };
`), _r);
    class v extends i.Component {
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
                width: w,
                height: x
            } = this.state;
            return (0, h.jsx)(h.Fragment, {
                children: (0, h.jsxs)(u, {
                    id: q,
                    children: [
                        (0, h.jsx)(j.default, {
                            canvasHeight: x,
                            canvasWidth: w,
                            brushRadius: this.state.drawState.brushSize,
                            brushColor: this.state.drawState.brushColor,
                            hideGrid: !0,
                            style: {
                                background: _r
                            },
                            lazyRadius: 0,
                            catenaryColor: this.state.drawState.brushColor
                        }),
                        (0, h.jsx)(n.default, {
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
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                width: 0,
                height: 0,
                drawState: {
                    brushColor: _s(),
                    brushSize: o.default.pen
                },
                showingControls: !0
            }), (0, g.default)(this, 'changeBrushColor', w => {
                this.setState({
                    drawState: {
                        ...this.state.drawState,
                        brushColor: w,
                        brushSize: this.state.drawState.brushSize === o.default.eraser ? o.default.pen : this.state.drawState.brushSize
                    }
                });
            }), (0, g.default)(this, 'changeBrushSize', w => {
                this.setState({
                    drawState: {
                        ...this.state.drawState,
                        brushSize: w,
                        brushColor: _s()
                    }
                });
            }), (0, g.default)(this, 'changeToEraser', () => this.setState({
                drawState: {
                    brushSize: o.default.eraser,
                    brushColor: _r()
                }
            })), (0, g.default)(this, 'onTouch', w => {
                w.preventDefault();
            }), (0, g.default)(this, 'onResize', () => {
                const w = document.getElementById(q).clientHeight,
                    x = document.getElementById(q).clientWidth;
                this.setState({
                    height: w,
                    width: x
                });
            });
        }
    }
    var _w = v;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _t;
    });
    var g, h, i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = Object.assign || function(p) {
            for (var q = 1; q < arguments.length; q++) {
                var r = arguments[q];
                for (var s in r)
                    Object.prototype.hasOwnProperty.call(r, s) && (p[s] = r[s]);
            }
            return p;
        };

    function p(q, r) {
        return {
            x: q.x + (r.x - q.x) / 2,
            y: q.y + (r.y - q.y) / 2
        };
    }
    var q = {
            display: 'block',
            position: 'absolute'
        },
        r = [{
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
        s = c(j).oneOfType([
            c(j).number,
            c(j).string
        ]),
        _t = (h = g = function(u) {
            function v(w) {
                ! function(x, y) {
                    if (!(x instanceof y))
                        throw new TypeError('Cannot call a class as a function');
                }(this, v);
                var x = function(y, z) {
                    if (!y)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !z || 'object' != typeof z && 'function' != typeof z ? y : z;
                }(this, u.call(this, w));
                return x.componentWillUnmount = function() {
                    x.canvasObserver.unobserve(x.canvasContainer);
                }, x.drawImage = function() {
                    x.props.imgSrc && (x.image = new Image(), x.image.crossOrigin = 'anonymous', x.image.onload = function() {
                        return (0, n.default)({
                            ctx: x.ctx.grid,
                            img: x.image
                        });
                    }, x.image.src = x.props.imgSrc);
                }, x.undo = function() {
                    var y = x.lines.slice(0, -1);
                    x.clear(), x.simulateDrawingLines({
                        lines: y,
                        immediate: !0
                    }), x.triggerOnChange();
                }, x.getSaveData = function() {
                    return JSON.stringify({
                        lines: x.lines,
                        width: x.props.canvasWidth,
                        height: x.props.canvasHeight
                    });
                }, x.loadSaveData = function(y) {
                    var z = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.props.immediateLoading;
                    if ('string' != typeof y)
                        throw new Error('saveData needs to be of type string!');
                    var A = JSON.parse(y),
                        B = A.lines,
                        C = A.width,
                        D = A.height;
                    if (!B || 'function' != typeof B.push)
                        throw new Error('saveData.lines needs to be an array!');
                    if (x.clear(), C === x.props.canvasWidth && D === x.props.canvasHeight)
                        x.simulateDrawingLines({
                            lines: B,
                            immediate: z
                        });
                    else {
                        var E = x.props.canvasWidth / C,
                            F = x.props.canvasHeight / D,
                            G = (E + F) / 2;
                        x.simulateDrawingLines({
                            lines: B.map(function(H) {
                                return o({}, H, {
                                    points: H.points.map(function(I) {
                                        return {
                                            x: I.x * E,
                                            y: I.y * F
                                        };
                                    }),
                                    brushRadius: H.brushRadius * G
                                });
                            }),
                            immediate: z
                        });
                    }
                }, x.simulateDrawingLines = function(y) {
                    var z = y.lines,
                        A = y.immediate,
                        B = 0,
                        C = A ? 0 : x.props.loadTimeOffset;
                    z.forEach(function(D) {
                        var E = D.points,
                            F = D.brushColor,
                            G = D.brushRadius;
                        if (A)
                            return x.drawPoints({
                                points: E,
                                brushColor: F,
                                brushRadius: G
                            }), x.points = E, void x.saveLine({
                                brushColor: F,
                                brushRadius: G
                            });
                        for (var H = function(I) {
                                B += C, window.setTimeout(function() {
                                    x.drawPoints({
                                        points: E.slice(0, I + 1),
                                        brushColor: F,
                                        brushRadius: G
                                    });
                                }, B);
                            }, I = 1; I < E.length; I++)
                            H(I);
                        B += C, window.setTimeout(function() {
                            x.points = E, x.saveLine({
                                brushColor: F,
                                brushRadius: G
                            });
                        }, B);
                    });
                }, x.handleDrawStart = function(y) {
                    y.preventDefault(), x.isPressing = !0;
                    var z = x.getPointerPos(y),
                        A = z.x,
                        B = z.y;
                    y.touches && y.touches.length > 0 && x.lazy.update({
                        x: A,
                        y: B
                    }, {
                        both: !0
                    }), x.handlePointerMove(A, B);
                }, x.handleDrawMove = function(y) {
                    y.preventDefault();
                    var z = x.getPointerPos(y),
                        A = z.x,
                        B = z.y;
                    x.handlePointerMove(A, B);
                }, x.handleDrawEnd = function(y) {
                    y.preventDefault(), x.handleDrawMove(y), x.isDrawing = !1, x.isPressing = !1, x.saveLine();
                }, x.handleCanvasResize = function(y, z) {
                    var A = x.getSaveData(),
                        B = y,
                        C = Array.isArray(B),
                        D = 0;
                    for (B = C ? B : B[Symbol.iterator]();;) {
                        var E;
                        if (C) {
                            if (D >= B.length)
                                break;
                            E = B[D++];
                        } else {
                            if ((D = B.next()).done)
                                break;
                            E = D.value;
                        }
                        var F = E.contentRect,
                            G = F.width,
                            H = F.height;
                        x.setCanvasSize(x.canvas.interface, G, H), x.setCanvasSize(x.canvas.drawing, G, H), x.setCanvasSize(x.canvas.temp, G, H), x.setCanvasSize(x.canvas.grid, G, H), x.drawGrid(x.ctx.grid), x.drawImage(), x.loop({
                            once: !0
                        });
                    }
                    x.loadSaveData(A, !0);
                }, x.setCanvasSize = function(y, z, A) {
                    y.width = z, y.height = A, y.style.width = z, y.style.height = A;
                }, x.getPointerPos = function(y) {
                    var z = x.canvas.interface.getBoundingClientRect(),
                        A = y.clientX,
                        B = y.clientY;
                    return y.changedTouches && y.changedTouches.length > 0 && (A = y.changedTouches[0].clientX, B = y.changedTouches[0].clientY), {
                        x: A - z.left,
                        y: B - z.top
                    };
                }, x.handlePointerMove = function(y, z) {
                    if (!x.props.disabled) {
                        x.lazy.update({
                            x: y,
                            y: z
                        });
                        var A = !x.lazy.isEnabled();
                        (x.isPressing && !x.isDrawing || A && x.isPressing) && (x.isDrawing = !0, x.points.push(x.lazy.brush.toObject())), x.isDrawing && (x.points.push(x.lazy.brush.toObject()), x.drawPoints({
                            points: x.points,
                            brushColor: x.props.brushColor,
                            brushRadius: x.props.brushRadius
                        })), x.mouseHasMoved = !0;
                    }
                }, x.drawPoints = function(y) {
                    var z = y.points,
                        A = y.brushColor,
                        B = y.brushRadius;
                    x.ctx.temp.lineJoin = 'round', x.ctx.temp.lineCap = 'round', x.ctx.temp.strokeStyle = A, x.ctx.temp.clearRect(0, 0, x.ctx.temp.canvas.width, x.ctx.temp.canvas.height), x.ctx.temp.lineWidth = 2 * B;
                    var C = z[0],
                        D = z[1];
                    x.ctx.temp.moveTo(D.x, D.y), x.ctx.temp.beginPath();
                    for (var E = 1, F = z.length; E < F; E++) {
                        var G = p(C, D);
                        x.ctx.temp.quadraticCurveTo(C.x, C.y, G.x, G.y), C = z[E], D = z[E + 1];
                    }
                    x.ctx.temp.lineTo(C.x, C.y), x.ctx.temp.stroke();
                }, x.saveLine = function() {
                    var y = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        z = y.brushColor,
                        A = y.brushRadius;
                    if (!(x.points.length < 2)) {
                        x.lines.push({
                            points: [].concat(x.points),
                            brushColor: z || x.props.brushColor,
                            brushRadius: A || x.props.brushRadius
                        }), x.points.length = 0;
                        var B = x.canvas.temp.width,
                            C = x.canvas.temp.height;
                        x.ctx.drawing.drawImage(x.canvas.temp, 0, 0, B, C), x.ctx.temp.clearRect(0, 0, B, C), x.triggerOnChange();
                    }
                }, x.triggerOnChange = function() {
                    x.props.onChange && x.props.onChange(x);
                }, x.clear = function() {
                    x.lines = [], x.valuesChanged = !0, x.ctx.drawing.clearRect(0, 0, x.canvas.drawing.width, x.canvas.drawing.height), x.ctx.temp.clearRect(0, 0, x.canvas.temp.width, x.canvas.temp.height);
                }, x.loop = function() {
                    var y = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        z = y.once,
                        A = void 0 !== z && z;
                    if (x.mouseHasMoved || x.valuesChanged) {
                        var B = x.lazy.getPointerCoordinates(),
                            C = x.lazy.getBrushCoordinates();
                        x.drawInterface(x.ctx.interface, B, C), x.mouseHasMoved = !1, x.valuesChanged = !1;
                    }
                    A || window.requestAnimationFrame(function() {
                        x.loop();
                    });
                }, x.drawGrid = function(y) {
                    if (!x.props.hideGrid) {
                        y.clearRect(0, 0, y.canvas.width, y.canvas.height), y.beginPath(), y.setLineDash([
                            5,
                            1
                        ]), y.setLineDash([]), y.strokeStyle = x.props.gridColor, y.lineWidth = 0.5;
                        for (var z = 0; z < y.canvas.width;)
                            z += 25, y.moveTo(z, 0), y.lineTo(z, y.canvas.height);
                        y.stroke();
                        for (var A = 0; A < y.canvas.height;)
                            A += 25, y.moveTo(0, A), y.lineTo(y.canvas.width, A);
                        y.stroke();
                    }
                }, x.drawInterface = function(y, z, A) {
                    x.props.hideInterface || (y.clearRect(0, 0, y.canvas.width, y.canvas.height), y.beginPath(), y.fillStyle = x.props.brushColor, y.arc(A.x, A.y, x.props.brushRadius, 0, 2 * Math.PI, !0), y.fill(), y.beginPath(), y.fillStyle = x.props.catenaryColor, y.arc(z.x, z.y, 4, 0, 2 * Math.PI, !0), y.fill(), x.lazy.isEnabled() && (y.beginPath(), y.lineWidth = 2, y.lineCap = 'round', y.setLineDash([
                        2,
                        4
                    ]), y.strokeStyle = x.props.catenaryColor, x.catenary.drawToCanvas(x.ctx.interface, A, z, x.chainLength), y.stroke()), y.beginPath(), y.fillStyle = x.props.catenaryColor, y.arc(A.x, A.y, 2, 0, 2 * Math.PI, !0), y.fill());
                }, x.canvas = {}, x.ctx = {}, x.catenary = new(0, l.Catenary)(), x.points = [], x.lines = [], x.mouseHasMoved = !0, x.valuesChanged = !0, x.isDrawing = !1, x.isPressing = !1, x;
            }
            return function(x, y) {
                if ('function' != typeof y && null !== y)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof y);
                x.prototype = Object.create(y && y.prototype, {
                    constructor: {
                        value: x,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(x, y) : x.__proto__ = y);
            }(v, u), v.prototype.componentDidMount = function() {
                var x = this;
                this.lazy = new(0, k.LazyBrush)({
                    radius: this.props.lazyRadius * window.devicePixelRatio,
                    enabled: !0,
                    initialPoint: {
                        x: window.innerWidth / 2,
                        y: window.innerHeight / 2
                    }
                }), this.chainLength = this.props.lazyRadius * window.devicePixelRatio, this.canvasObserver = new(0, m.default)(function(y, z) {
                    return x.handleCanvasResize(y, z);
                }), this.canvasObserver.observe(this.canvasContainer), this.drawImage(), this.loop(), window.setTimeout(function() {
                    var y = window.innerWidth / 2,
                        z = window.innerHeight / 2;
                    x.lazy.update({
                        x: y - x.chainLength / 4,
                        y: z
                    }, {
                        both: !0
                    }), x.lazy.update({
                        x: y + x.chainLength / 4,
                        y: z
                    }, {
                        both: !1
                    }), x.mouseHasMoved = !0, x.valuesChanged = !0, x.clear(), x.props.saveData && x.loadSaveData(x.props.saveData);
                }, 100);
            }, v.prototype.componentDidUpdate = function(x) {
                x.lazyRadius !== this.props.lazyRadius && (this.chainLength = this.props.lazyRadius * window.devicePixelRatio, this.lazy.setRadius(this.props.lazyRadius * window.devicePixelRatio)), x.saveData !== this.props.saveData && this.loadSaveData(this.props.saveData), JSON.stringify(x) !== JSON.stringify(this.props) && (this.valuesChanged = !0);
            }, v.prototype.render = function() {
                var x = this;
                return c(i).createElement('div', {
                    className: this.props.className,
                    style: o({
                        display: 'block',
                        background: this.props.backgroundColor,
                        touchAction: 'none',
                        width: this.props.canvasWidth,
                        height: this.props.canvasHeight
                    }, this.props.style),
                    ref: function(y) {
                        y && (x.canvasContainer = y);
                    }
                }, r.map(function(y) {
                    var z = y.name,
                        A = y.zIndex,
                        B = 'interface' === z;
                    return c(i).createElement('canvas', {
                        key: z,
                        ref: function(C) {
                            C && (x.canvas[z] = C, x.ctx[z] = C.getContext('2d'));
                        },
                        style: o({}, q, {
                            zIndex: A
                        }),
                        onMouseDown: B ? x.handleDrawStart : void 0,
                        onMouseMove: B ? x.handleDrawMove : void 0,
                        onMouseUp: B ? x.handleDrawEnd : void 0,
                        onMouseOut: B ? x.handleDrawEnd : void 0,
                        onTouchStart: B ? x.handleDrawStart : void 0,
                        onTouchMove: B ? x.handleDrawMove : void 0,
                        onTouchEnd: B ? x.handleDrawEnd : void 0,
                        onTouchCancel: B ? x.handleDrawEnd : void 0
                    });
                }));
            }, v;
        }(i.PureComponent), g.propTypes = {
            onChange: c(j).func,
            loadTimeOffset: c(j).number,
            lazyRadius: c(j).number,
            brushRadius: c(j).number,
            brushColor: c(j).string,
            catenaryColor: c(j).string,
            gridColor: c(j).string,
            backgroundColor: c(j).string,
            hideGrid: c(j).bool,
            canvasWidth: s,
            canvasHeight: s,
            disabled: c(j).bool,
            imgSrc: c(j).string,
            saveData: c(j).string,
            immediateLoading: c(j).bool,
            hideInterface: c(j).bool
        }, g.defaultProps = {
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
        }, h);
}), d.register('.....', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    }), e.exports.LazyPoint = e.exports.Point = e.exports.LazyBrush = void 0;
    var g = _j(d('.....')),
        h = _j(d('.....')),
        i = _j(d('.....'));

    function _j(k) {
        return k && k.__esModule ? k : {
            default: k
        };
    }
    e.exports.LazyBrush = g.default, e.exports.Point = h.default, e.exports.LazyPoint = i.default;
}), d.register('.....', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    var g, h = function() {
            function i(j, k) {
                for (var l = 0; l < k.length; l++) {
                    var m = k[l];
                    m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(j, m.key, m);
                }
            }
            return function(l, m, n) {
                return m && i(l.prototype, m), n && i(l, n), l;
            };
        }(),
        i = d('.....'),
        j = (g = i) && g.__esModule ? g : {
            default: g
        };

    function k(l, m) {
        if (!(l instanceof m))
            throw new TypeError('Cannot call a class as a function');
    }
    var l = function() {
        function m() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = n.radius,
                p = void 0 === o ? 30 : o,
                q = n.enabled,
                r = void 0 === q || q,
                s = n.initialPoint,
                t = void 0 === s ? {
                    x: 0,
                    y: 0
                } : s;
            k(this, m), this.radius = p, this._isEnabled = r, this.pointer = new j.default(t.x, t.y), this.brush = new j.default(t.x, t.y), this.angle = 0, this.distance = 0, this._hasMoved = !1;
        }
        return q(m, [{
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
                value: function(u) {
                    this.radius = u;
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
                value: function(u) {
                    var v = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        w = v.both,
                        x = void 0 !== w && w;
                    return this._hasMoved = !1, !(this.pointer.equalsTo(u) && !x) && (this.pointer.update(u), x ? (this._hasMoved = !0, this.brush.update(u), !0) : (this._isEnabled ? (this.distance = this.pointer.getDistanceTo(this.brush), this.angle = this.pointer.getAngleTo(this.brush), this.distance > this.radius && (this.brush.moveByAngle(this.angle, this.distance - this.radius), this._hasMoved = !0)) : (this.distance = 0, this.angle = 0, this.brush.update(u), this._hasMoved = !0), !0));
                }
            }
        ]), m;
    }();
    e.exports.default = l;
}), d.register('.....', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    var g, h = function() {
            function i(j, k) {
                for (var l = 0; l < k.length; l++) {
                    var m = k[l];
                    m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(j, m.key, m);
                }
            }
            return function(l, m, n) {
                return m && i(l.prototype, m), n && i(l, n), l;
            };
        }(),
        i = d('.....'),
        j = (g = i) && g.__esModule ? g : {
            default: g
        };

    function k(l, m) {
        if (!(l instanceof m))
            throw new TypeError('Cannot call a class as a function');
    }

    function l(m, n) {
        if (!m)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return !n || 'object' != typeof n && 'function' != typeof n ? m : n;
    }
    var m = function(n) {
        function o() {
            return k(this, o), l(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments));
        }
        return function(p, q) {
            if ('function' != typeof q && null !== q)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof q);
            p.prototype = Object.create(q && q.prototype, {
                constructor: {
                    value: p,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), q && (Object.setPrototypeOf ? Object.setPrototypeOf(p, q) : p.__proto__ = q);
        }(o, n), h(o, [{
                key: 'update',
                value: function(p) {
                    this.x = p.x, this.y = p.y;
                }
            },
            {
                key: 'moveByAngle',
                value: function(p, q) {
                    var r = p + Math.PI / 2;
                    this.x = this.x + Math.sin(r) * q, this.y = this.y - Math.cos(r) * q;
                }
            },
            {
                key: 'equalsTo',
                value: function(p) {
                    return this.x === p.x && this.y === p.y;
                }
            },
            {
                key: 'getDifferenceTo',
                value: function(p) {
                    return new j.default(this.x - p.x, this.y - p.y);
                }
            },
            {
                key: 'getDistanceTo',
                value: function(p) {
                    var q = this.getDifferenceTo(p);
                    return Math.sqrt(Math.pow(q.x, 2) + Math.pow(q.y, 2));
                }
            },
            {
                key: 'getAngleTo',
                value: function(p) {
                    var q = this.getDifferenceTo(p);
                    return Math.atan2(q.y, q.x);
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
        ]), o;
    }(j.default);
    e.exports.default = m;
}), d.register('.....', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    e.exports.default = function e(g, h) {
        ! function(i, j) {
            if (!(i instanceof j))
                throw new TypeError('Cannot call a class as a function');
        }(this, e), this.x = g, this.y = h;
    };
}), d.register('.....', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    }), e.exports.Point = e.exports.Catenary = void 0;
    var g = _i(d('.....')),
        h = _i(d('.....'));

    function _i(j) {
        return j && j.__esModule ? j : {
            default: j
        };
    }
    e.exports.Catenary = g.default, e.exports.Point = h.default;
}), d.register('.....', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    var g, h = function() {
            function i(j, k) {
                for (var l = 0; l < k.length; l++) {
                    var m = k[l];
                    m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(j, m.key, m);
                }
            }
            return function(l, m, n) {
                return m && i(l.prototype, m), n && i(l, n), l;
            };
        }(),
        i = d('.....'),
        j = (g = i) && g.__esModule ? g : {
            default: g
        };

    function k(l, m) {
        if (!(l instanceof m))
            throw new TypeError('Cannot call a class as a function');
    }
    var l = function() {
        function m() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = n.segments,
                p = void 0 === o ? 50 : o,
                q = n.iterationLimit,
                r = void 0 === q ? 100 : q;
            k(this, m), this.p1 = new j.default(), this.p2 = new j.default(), this.segments = p, this.iterationLimit = r;
        }
        return q(m, [{
                key: 'drawToCanvas',
                value: function(s, t, u, v) {
                    this.p1.update(t), this.p2.update(u);
                    var w = this.p1.x > this.p2.x,
                        x = w ? this.p2 : this.p1,
                        y = w ? this.p1 : this.p2,
                        z = [],
                        A = !0;
                    if (x.getDistanceTo(y) < v)
                        if (y.x - x.x > 0.01) {
                            var B = y.x - x.x,
                                C = y.y - x.y,
                                D = -this.getCatenaryParameter(B, C, v, this.iterationLimit),
                                E = 0.5 * (D * Math.log((v + C) / (v - C)) - B),
                                F = D * Math.cosh(E / D),
                                G = x.x - E,
                                H = x.y - F;
                            z = this.getCurve(D, x, y, G, H, this.segments), A = !1;
                        } else {
                            var I = 0.5 * (x.x + y.x),
                                J = 0.5 * (x.y + y.y + v);
                            z = [
                                [
                                    x.x,
                                    x.y
                                ],
                                [
                                    I,
                                    J
                                ],
                                [
                                    y.x,
                                    y.y
                                ]
                            ];
                        }
                    else
                        z = [
                            [
                                x.x,
                                x.y
                            ],
                            [
                                y.x,
                                y.y
                            ]
                        ];
                    return A ? this.drawLine(z, s) : this.drawCurve(z, s), z;
                }
            },
            {
                key: 'getCatenaryParameter',
                value: function(s, t, u, v) {
                    for (var w = Math.sqrt(u * u - t * t) / s, x = Math.acosh(w) + 1, y = -1, z = 0; Math.abs(x - y) > 0.000001 && z < v;)
                        y = x, x -= (Math.sinh(x) - w * x) / (Math.cosh(x) - w), z++;
                    return s / (2 * x);
                }
            },
            {
                key: 'getCurve',
                value: function(s, t, u, v, w, x) {
                    for (var y = [
                            t.x,
                            s * Math.cosh((t.x - v) / s) + w
                        ], z = u.x - t.x, A = x - 1, B = 0; B < A; B++) {
                        var C = t.x + z * (B + 0.5) / A,
                            D = s * Math.cosh((C - v) / s) + w;
                        y.push(C, D);
                    }
                    return y.push(u.x, s * Math.cosh((u.x - v) / s) + w), y;
                }
            },
            {
                key: 'drawLine',
                value: function(s, t) {
                    t.moveTo(s[0][0], s[0][1]), t.lineTo(s[1][0], s[1][1]);
                }
            },
            {
                key: 'drawCurve',
                value: function(s, t) {
                    var u = 0.5 * s.length - 1,
                        v = s[2],
                        w = s[3],
                        x = [];
                    t.moveTo(s[0], s[1]);
                    for (var y = 2; y < u; y++) {
                        var z = s[2 * y],
                            A = s[2 * y + 1],
                            B = 0.5 * (z + v),
                            C = 0.5 * (A + w);
                        x.push([
                            v,
                            w,
                            B,
                            C
                        ]), t.quadraticCurveTo(v, w, B, C), v = z, w = A;
                    }
                    return u = s.length, t.quadraticCurveTo(s[u - 4], s[u - 3], s[u - 2], s[u - 1]), x;
                }
            }
        ]), m;
    }();
    e.exports.default = l;
}), d.register('.....', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    var g = function() {
        function h(i, j) {
            for (var k = 0; k < j.length; k++) {
                var l = j[k];
                l.enumerable = l.enumerable || !1, l.configurable = !0, 'value' in l && (l.writable = !0), Object.defineProperty(i, l.key, l);
            }
        }
        return function(k, l, m) {
            return l && h(k.prototype, l), m && h(k, m), k;
        };
    }();
    var h = function() {
        function i(j, k) {
            ! function(l, m) {
                if (!(l instanceof m))
                    throw new TypeError('Cannot call a class as a function');
            }(this, i), this.x = j, this.y = k;
        }
        return g(i, [{
                key: 'update',
                value: function(j) {
                    this.x = j.x, this.y = j.y;
                }
            },
            {
                key: 'getDifferenceTo',
                value: function(j) {
                    return new i(this.x - j.x, this.y - j.y);
                }
            },
            {
                key: 'getDistanceTo',
                value: function(j) {
                    var k = this.getDifferenceTo(j);
                    return Math.sqrt(Math.pow(k.x, 2) + Math.pow(k.y, 2));
                }
            }
        ]), i;
    }();
    e.exports.default = h;
}), d.register('.....', function(e, f) {
    function g() {
        var h = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = h.ctx,
            j = h.img,
            k = h.x,
            l = h.y,
            m = h.w,
            n = h.h,
            o = h.offsetX,
            p = h.offsetY;
        'number' != typeof g && (g = 0), 'number' != typeof l && (l = 0), 'number' != typeof m && (m = i.canvas.width), 'number' != typeof n && (n = i.canvas.height), 'number' != typeof o && (o = 0.5), 'number' != typeof p && (p = 0.5), o < 0 && (o = 0), p < 0 && (p = 0), o > 1 && (o = 1), p > 1 && (p = 1);
        var q, r, s, t, u = j.width,
            v = j.height,
            w = Math.min(m / u, n / v),
            x = u * w,
            y = v * w,
            z = 1;
        x < m && (z = m / x), Math.abs(z - 1) < 1e-14 && y < n && (z = n / y), (q = (u - (s = u / ((x *= z) / m))) * o) < 0 && (q = 0), (r = (v - (t = v / ((y *= z) / n))) * p) < 0 && (r = 0), s > u && (s = u), t > v && (t = v), i.drawImage(j, q, r, s, t, g, l, m, n);
    }
    i(h.exports, 'default', function() {
        return g;
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _x;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    let o, p, q, r = s => s;
    const s = l.default.div(o || (o = r`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
`)),
        t = l.default.div(p || (p = r`
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
`), j.default.DisabledGray, j.default.White),
        u = l.default.div(q || (q = r`
  cursor: pointer;
  font-size: 35px;
  background: ${ 0 };
  color: ${ 0 };
  padding: 5px;
  border-radius: 6px;
`), v => v.enabled ? '#E0E0E0' : 'transparent', v => v.customColor ? v.customColor : j.default.Black),
        v = {
            borderColor: j.default.Black,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: '50%'
        };
    class w extends k.Component {
        render() {
            if (!this.props.show)
                return null;
            const {
                drawState: x
            } = this.props;
            return (0, h.jsx)(s, {
                children: (0, h.jsxs)(t, {
                    children: [
                        (0, h.jsx)(u, {
                            customColor: m.defaultDrawingColor,
                            enabled: x.brushColor === (0, m.defaultDrawingColor)(),
                            onClick: this.changeToDefaultColor,
                            children: (0, h.jsx)(i.default, {
                                name: 'fas fa-circle',
                                style: v
                            })
                        }),
                        (0, h.jsx)(u, {
                            onClick: this.changeToSecondaryColor,
                            enabled: x.brushColor === (0, m.secondaryDrawingColor)(),
                            customColor: (0, m.secondaryDrawingColor)(),
                            children: (0, h.jsx)(i.default, {
                                name: 'fas fa-circle',
                                style: v
                            })
                        }),
                        (0, h.jsx)('div', {
                            style: {
                                height: 35,
                                width: 5,
                                background: j.default.DisabledGray,
                                marginLeft: 10,
                                marginRight: 10
                            }
                        }),
                        (0, h.jsx)(u, {
                            onClick: this.changeToPen,
                            enabled: x.brushColor !== (0, m.backgroundCanvasColor)() && x.brushSize === n.default.pen,
                            children: (0, h.jsx)(i.default, {
                                name: 'fas fa-pen'
                            })
                        }),
                        (0, h.jsx)(u, {
                            onClick: this.changeToMarker,
                            enabled: x.brushColor !== (0, m.backgroundCanvasColor)() && x.brushSize === n.default.marker,
                            children: (0, h.jsx)(i.default, {
                                name: 'fas fa-marker'
                            })
                        }),
                        (0, h.jsx)(u, {
                            onClick: this.props.changeToEraser,
                            enabled: x.brushColor === (0, m.backgroundCanvasColor)(),
                            children: (0, h.jsx)(i.default, {
                                name: 'fas fa-eraser'
                            })
                        })
                    ]
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'changeToDefaultColor', () => this.props.changeColor((0, m.defaultDrawingColor)())), (0, g.default)(this, 'changeToSecondaryColor', () => this.props.changeColor((0, m.secondaryDrawingColor)())), (0, g.default)(this, 'changeToPen', () => this.props.changeSize(n.default.pen)), (0, g.default)(this, 'changeToMarker', () => this.props.changeSize(n.default.marker));
        }
    }
    var _x = w;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = {
        pen: 8,
        marker: 18,
        eraser: 18
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _D;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    d('.....');
    var m = d('.....'),
        n = d('.....'),
        o = d('.....');
    let p, q, r, s, t, u, v = w => w;
    const w = m.default.div(p || (p = v`
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
`), k.default.basic, () => (0, l.darken)(0.3, (0, n.backgroundCanvasColor)()), j.default.White),
        x = m.default.div(q || (q = v`
  font-size: 37px;
  margin-bottom: 4px;
`)),
        y = m.default.div(r || (r = v`
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
`), k.default.basic),
        z = m.default.div(s || (s = v`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 5px;
`)),
        A = m.default.div(t || (t = v`
  font-size: 20px;
`)),
        B = m.default.div(u || (u = v`
  color: rgba(255, 255, 255, 0.6);
  font-size: 17px;
  margin-top: 2px;
`)),
        C = D => (0, g.jsxs)(y, {
            children: [
                (0, g.jsx)('div', {
                    style: {
                        fontSize: 31,
                        flexShrink: 0
                    },
                    children: (0, g.jsx)(h.default, {
                        name: D.icon
                    })
                }),
                (0, g.jsx)('div', {
                    style: {
                        marginLeft: 15
                    },
                    children: (0, g.jsx)(i.default, {
                        text: D.message
                    })
                })
            ]
        });
    var _D = () => (0, g.jsxs)(w, {
        children: [
            (0, g.jsx)(x, {
                children: (0, g.jsx)(i.default, {
                    text: (0, o.inImposterMode)() ? 'Ready for liftoff?' : 'Get ready...'
                })
            }),
            (0, o.inLavaMode)() ? (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(C, {
                        icon: 'fas fa-volcano',
                        message: 'The lava is rising...'
                    }),
                    (0, g.jsx)(C, {
                        icon: 'fas fa-building',
                        message: 'Work together to keep your building above the lava'
                    }),
                    (0, g.jsx)(C, {
                        icon: 'fas fa-shopping-bag',
                        message: 'Purchase builds in the shop'
                    }),
                    (0, g.jsx)(C, {
                        icon: 'fas fa-star',
                        message: 'Survive as long as you can'
                    })
                ]
            }) : (0, o.inImposterMode)() ? (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(C, {
                        icon: 'fa fa-user-astronaut',
                        message: 'Crewmates: run investigations and collect evidence to vote the impostors off the ship!'
                    }),
                    (0, g.jsx)(C, {
                        icon: 'fa fa-user-secret',
                        message: 'Impostors: sabotage crewmate investigations and blend in. Try not to get voted off!'
                    }),
                    (0, g.jsx)(C, {
                        icon: 'fa fa-info-circle',
                        message: 'We\'ll reveal your role once we liftoff.'
                    })
                ]
            }) : (0, o.inDrawMode)() ? (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(C, {
                        icon: 'fa fa-question-circle',
                        message: 'For each round, guess the term being drawn!'
                    }),
                    (0, g.jsx)(C, {
                        icon: 'fa fa-chart-line',
                        message: 'Gain points by guessing correctly.'
                    }),
                    (0, g.jsx)(C, {
                        icon: 'fa fa-trophy',
                        message: 'Have the most points by the end to be declared the winner!'
                    })
                ]
            }) : (0, o.inPardyMode)() ? (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(C, {
                        icon: 'far fa-money-bill-alt',
                        message: 'For each round, answer the question correctly to earn cash!'
                    }),
                    (0, g.jsx)(C, {
                        icon: 'fas fa-bolt',
                        message: 'Pick a power that fits your play-style to come out on top.'
                    }),
                    (0, g.jsx)(C, {
                        icon: 'fas fa-sack-dollar',
                        message: 'Make your final bet in The Finale!'
                    })
                ]
            }) : (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(C, {
                        icon: 'far fa-money-bill-alt',
                        message: 'Answer questions to earn cash'
                    }),
                    (0, g.jsx)(C, {
                        icon: 'fas fa-shopping-cart',
                        message: 'Purchase upgrades and powerups with your cash'
                    }),
                    (0, g.jsx)(C, {
                        icon: 'fas fa-level-up-alt',
                        message: 'Earn cash faster!'
                    })
                ]
            }),
            (0, g.jsxs)(z, {
                children: [
                    (0, g.jsx)(A, {
                        children: (0, g.jsx)(i.default, {
                            text: 'You can draw while you\'re waiting!'
                        })
                    }),
                    (0, g.jsx)(B, {
                        children: (0, g.jsx)(i.default, {
                            text: 'Click/tap here to draw!'
                        })
                    })
                ]
            })
        ]
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    d('.....');
    var l = d('.....'),
        m = d('.....');
    let n, o, p, q = r => r;
    var _r = s => {
        const {
            tag: t,
            header: u,
            image: v,
            description: w
        } = s.item;
        let x = !1;
        if ((t || u || v || w) && (x = !0), !x)
            return null;
        return (0, g.jsxs)(_s, {
            onClick: y => {
                y.stopPropagation();
            },
            children: [
                t && (0, g.jsx)(h.default, {
                    color: 'secondary',
                    style: {
                        marginBottom: 10,
                        fontWeight: 900
                    },
                    label: t
                }),
                u && (0, g.jsx)(_t, {
                    children: u
                }),
                v && (0, g.jsx)('img', {
                    src: v,
                    style: {
                        maxWidth: '100%',
                        maxHeight: 170,
                        borderRadius: 5,
                        boxShadow: k.default.basic,
                        marginBottom: w ? 10 : 0,
                        marginTop: u || t ? 10 : 0
                    }
                }),
                w && (0, g.jsx)(_u, {
                    dangerouslySetInnerHTML: {
                        __html: w
                    }
                })
            ]
        });
    };
    const _s = l.default.div(n || (n = q`
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
`), () => m.ITEM_MAX_WIDTH, k.default.basic, i.default.White, j.default.mainFontName),
        _t = l.default.div(o || (o = q`
  font-size: 28px;
  font-weight: bold;
`)),
        _u = l.default.div(p || (p = q`
  font-weight: normal;
  font-family: ${ 0 };
  font-size: 16px;
  margin-top: 10px;
  text-align: left;
`), j.default.name);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....');

    function q(r) {
        return 'Backspace' === r.key || 'Delete' === r.key;
    }
    var r = i.forwardRef(function(s, t) {
            var u = s.avatar,
                v = s.classes,
                w = s.className,
                x = s.clickable,
                y = s.color,
                z = void 0 === y ? 'default' : y,
                A = s.component,
                B = s.deleteIcon,
                C = s.disabled,
                D = void 0 !== C && C,
                E = s.icon,
                F = s.label,
                G = s.onClick,
                H = s.onDelete,
                I = s.onKeyDown,
                J = s.onKeyUp,
                K = s.size,
                L = void 0 === K ? 'medium' : K,
                M = s.variant,
                N = void 0 === M ? 'default' : M,
                O = (0, h.default)(s, [
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
                P = i.useRef(null),
                Q = (0, n.default)(P, t),
                R = function(S) {
                    S.stopPropagation(), H && H(S);
                },
                S = !(!1 === x || !G) || x,
                T = 'small' === L,
                U = A || (S ? p.default : 'div'),
                V = U === p.default ? {
                    component: 'div'
                } : {},
                W = null;
            if (H) {
                var X = (0, j.default)('default' !== z && ('default' === N ? v['deleteIconColor'.concat((0, o.default)(z))] : v['deleteIconOutlinedColor'.concat((0, o.default)(z))]), T && v.deleteIconSmall);
                W = B && i.isValidElement(B) ? i.cloneElement(B, {
                    className: (0, j.default)(B.props.className, v.deleteIcon, X),
                    onClick: R
                }) : i.createElement(k.default, {
                    className: (0, j.default)(v.deleteIcon, X),
                    onClick: R
                });
            }
            var Y = null;
            u && i.isValidElement(u) && (Y = i.cloneElement(u, {
                className: (0, j.default)(v.avatar, u.props.className, T && v.avatarSmall, 'default' !== z && v['avatarColor'.concat((0, o.default)(z))])
            }));
            var Z = null;
            return E && i.isValidElement(E) && (Z = i.cloneElement(E, {
                className: (0, j.default)(v.icon, E.props.className, T && v.iconSmall, 'default' !== z && v['iconColor'.concat((0, o.default)(z))])
            })), i.createElement(U, (0, g.default)({
                role: S || H ? 'button' : void 0,
                className: (0, j.default)(v.root, w, 'default' !== z && [
                    v['color'.concat((0, o.default)(z))],
                    S && v['clickableColor'.concat((0, o.default)(z))],
                    H && v['deletableColor'.concat((0, o.default)(z))]
                ], 'default' !== N && [
                    v.outlined,
                    {
                        primary: v.outlinedPrimary,
                        secondary: v.outlinedSecondary
                    } [z]
                ], D && v.disabled, T && v.sizeSmall, S && v.clickable, H && v.deletable),
                'aria-disabled': !!D || void 0,
                tabIndex: S || H ? 0 : void 0,
                onClick: G,
                onKeyDown: function($) {
                    $.currentTarget === $.target && q($) && $.preventDefault(), I && I($);
                },
                onKeyUp: function($) {
                    $.currentTarget === $.target && (H && q($) ? H($) : 'Escape' === $.key && P.current && P.current.blur()), J && J($);
                },
                ref: Q
            }, V, O), Y || Z, i.createElement('span', {
                className: (0, j.default)(v.label, T && v.labelSmall)
            }, F), W);
        }),
        _s = (0, l.default)(function(t) {
            var u = 'light' === t.palette.type ? t.palette.grey[300] : t.palette.grey[700],
                v = (0, m.fade)(t.palette.text.primary, 0.26);
            return {
                root: {
                    fontFamily: t.typography.fontFamily,
                    fontSize: t.typography.pxToRem(13),
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 32,
                    color: t.palette.getContrastText(u),
                    backgroundColor: u,
                    borderRadius: 16,
                    whiteSpace: 'nowrap',
                    transition: t.transitions.create([
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
                        color: 'light' === t.palette.type ? t.palette.grey[700] : t.palette.grey[300],
                        fontSize: t.typography.pxToRem(12)
                    },
                    '& $avatarColorPrimary': {
                        color: t.palette.primary.contrastText,
                        backgroundColor: t.palette.primary.dark
                    },
                    '& $avatarColorSecondary': {
                        color: t.palette.secondary.contrastText,
                        backgroundColor: t.palette.secondary.dark
                    },
                    '& $avatarSmall': {
                        marginLeft: 4,
                        marginRight: -4,
                        width: 18,
                        height: 18,
                        fontSize: t.typography.pxToRem(10)
                    }
                },
                sizeSmall: {
                    height: 24
                },
                colorPrimary: {
                    backgroundColor: t.palette.primary.main,
                    color: t.palette.primary.contrastText
                },
                colorSecondary: {
                    backgroundColor: t.palette.secondary.main,
                    color: t.palette.secondary.contrastText
                },
                disabled: {},
                clickable: {
                    userSelect: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    cursor: 'pointer',
                    '&:hover, &:focus': {
                        backgroundColor: (0, m.emphasize)(u, 0.08)
                    },
                    '&:active': {
                        boxShadow: t.shadows[1]
                    }
                },
                clickableColorPrimary: {
                    '&:hover, &:focus': {
                        backgroundColor: (0, m.emphasize)(t.palette.primary.main, 0.08)
                    }
                },
                clickableColorSecondary: {
                    '&:hover, &:focus': {
                        backgroundColor: (0, m.emphasize)(t.palette.secondary.main, 0.08)
                    }
                },
                deletable: {
                    '&:focus': {
                        backgroundColor: (0, m.emphasize)(u, 0.08)
                    }
                },
                deletableColorPrimary: {
                    '&:focus': {
                        backgroundColor: (0, m.emphasize)(t.palette.primary.main, 0.2)
                    }
                },
                deletableColorSecondary: {
                    '&:focus': {
                        backgroundColor: (0, m.emphasize)(t.palette.secondary.main, 0.2)
                    }
                },
                outlined: {
                    backgroundColor: 'transparent',
                    border: '1px solid '.concat('light' === t.palette.type ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
                    '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
                        backgroundColor: (0, m.fade)(t.palette.text.primary, t.palette.action.hoverOpacity)
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
                    color: t.palette.primary.main,
                    border: '1px solid '.concat(t.palette.primary.main),
                    '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
                        backgroundColor: (0, m.fade)(t.palette.primary.main, t.palette.action.hoverOpacity)
                    }
                },
                outlinedSecondary: {
                    color: t.palette.secondary.main,
                    border: '1px solid '.concat(t.palette.secondary.main),
                    '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
                        backgroundColor: (0, m.fade)(t.palette.secondary.main, t.palette.action.hoverOpacity)
                    }
                },
                avatar: {},
                avatarSmall: {},
                avatarColorPrimary: {},
                avatarColorSecondary: {},
                icon: {
                    color: 'light' === t.palette.type ? t.palette.grey[700] : t.palette.grey[300],
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
                    color: v,
                    height: 22,
                    width: 22,
                    cursor: 'pointer',
                    margin: '0 5px 0 -6px',
                    '&:hover': {
                        color: (0, m.fade)(v, 0.4)
                    }
                },
                deleteIconSmall: {
                    height: 16,
                    width: 16,
                    marginRight: 4,
                    marginLeft: -4
                },
                deleteIconColorPrimary: {
                    color: (0, m.fade)(t.palette.primary.contrastText, 0.7),
                    '&:hover, &:active': {
                        color: t.palette.primary.contrastText
                    }
                },
                deleteIconColorSecondary: {
                    color: (0, m.fade)(t.palette.secondary.contrastText, 0.7),
                    '&:hover, &:active': {
                        color: t.palette.secondary.contrastText
                    }
                },
                deleteIconOutlinedColorPrimary: {
                    color: (0, m.fade)(t.palette.primary.main, 0.7),
                    '&:hover, &:active': {
                        color: t.palette.primary.main
                    }
                },
                deleteIconOutlinedColorSecondary: {
                    color: (0, m.fade)(t.palette.secondary.main, 0.7),
                    '&:hover, &:active': {
                        color: t.palette.secondary.main
                    }
                }
            };
        }, {
            name: 'MuiChip'
        })(r);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(g.createElement('path', {
            d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
        }), 'Cancel');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');

    function _j(k, l) {
        var m = function(n, o) {
            return c(h).createElement(i.default, (0, g.default)({
                ref: o
            }, n), k);
        };
        return m.muiName = i.default.muiName, c(h).memo(c(h).forwardRef(m));
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    let o = class extends m.Component {
        componentDidMount() {
            (0, k.when)(() => this.props.gameValues.gameStatus === n.GameStatus.gameplay || this.props.gameValues.gameStatus === n.GameStatus.teams || this.props.gameValues.gameStatus === n.GameStatus.results, () => {
                this.props.gameValues.gameStatus !== n.GameStatus.teams ? this.props.gameValues.gameStatus !== n.GameStatus.results ? (0, j.startGame)() : (0, j.changeRoute)(i.default.gameOver) : (0, j.changeRoute)(i.default.team);
            }, {});
        }
        render() {
            return null;
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                hasCalledStart: !1
            });
        }
    };
    o = (0, h.__decorate)([
        (0, l.inject)('gameValues', 'gameOptions'),
        l.observer
    ], o);
    var _p = o;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _B;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....'),
        w = d('.....'),
        x = d('.....'),
        y = d('.....');
    d('.....');
    var z = d('.....');
    let A = class extends t.Component {
        componentDidMount() {
            (0, r.blockShopping)() && (0, r.changeRoute)(p.default.questions);
        }
        render() {
            return (0, i.jsx)(k.Container, {
                customBackground: j.default.White,
                children: this.getContent()
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'changeShopTab', B => {
                q.click2.play(), this.props.navigation.currentShopTab = B;
            }), (0, g.default)(this, 'getContent', () => {
                return (0, r.inQrScanMode)() ? (0, i.jsx)(w.default, {}) : (0, r.inImposterMode)() ? (0, i.jsx)(y.default, {}) : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (e = this.props.navigation.currentShopTab, e === u.ShopTab.upgrades ? (0, i.jsx)(o.default, {}) : e === u.ShopTab.powerups ? (0, i.jsx)(m.default, {}) : e === u.ShopTab.defendingHomebase ? (0, i.jsx)(v.default, {}) : e === u.ShopTab.lava ? (0, i.jsx)(x.default, {}) : e === u.ShopTab.powerupsNonMusic ? (0, i.jsx)(m.default, {
                            hidePowerup: B => !(!B.category || !B.category.includes(z.PowerupCategory.specialSound))
                        }) : e === u.ShopTab.powerupsMusic ? (0, i.jsx)(m.default, {
                            hidePowerup: B => !B.category || !B.category.includes(z.PowerupCategory.specialSound)
                        }) : (0, i.jsx)(n.default, {})),
                        (0, i.jsx)(l.default, {
                            changeShopTab: this.changeShopTab,
                            value: this.props.navigation.currentShopTab
                        })
                    ]
                });
                var B;
            });
        }
    };
    A = (0, h.__decorate)([
        (0, s.inject)('navigation'),
        s.observer
    ], A);
    var _B = A;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _z;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....');
    let w;
    const x = (0, d('.....').default)(j.default)(w || (w = (y => y)`
  height: 68px !important;
  border-top-color: rgba(0, 0, 0, 0.6);
  border-top-style: solid;
  border-top-width: 2px;
`));
    let y = class extends u.Component {
        render() {
            return (0, i.jsxs)(x, {
                value: this.props.value,
                onChange: this.handleTabChange,
                style: {
                    zIndex: 0
                },
                showLabels: !0,
                children: [
                    (0, s.inLavaMode)() && (0, i.jsx)(k.default, {
                        label: (0, i.jsx)(r.default, {
                            text: 'Build'
                        }),
                        icon: (0, i.jsx)(l.default, {}),
                        value: v.ShopTab.lava
                    }),
                    (0, s.inZombiesVsHumansMode)() && (0, i.jsx)(k.default, {
                        label: (0, i.jsx)(r.default, {
                            text: 'Home'
                        }),
                        icon: (0, i.jsx)(n.default, {}),
                        value: v.ShopTab.defendingHomebase
                    }),
                    (0, i.jsx)(k.default, {
                        label: (0, i.jsx)(r.default, {
                            text: 'Upgrades'
                        }),
                        icon: (0, i.jsx)(q.default, {}),
                        value: v.ShopTab.upgrades
                    }),
                    this.canShowPowerups() && (0, i.jsx)(k.default, {
                        label: (0, i.jsx)(r.default, {
                            text: (0, s.inThanosMode)() ? 'Items' : 'Powerups'
                        }),
                        icon: (0, i.jsx)(p.default, {}),
                        value: v.ShopTab.powerups
                    }),
                    (0, s.inComebackMode)() && (0, i.jsx)(k.default, {
                        label: (0, i.jsx)(r.default, {
                            text: 'Powerups'
                        }),
                        icon: (0, i.jsx)(p.default, {}),
                        value: v.ShopTab.powerupsNonMusic
                    }),
                    this.props.gameOptions.music && (0, s.inComebackMode)() && (0, i.jsx)(k.default, {
                        label: (0, i.jsx)(r.default, {
                            text: 'Music'
                        }),
                        icon: (0, i.jsx)(o.default, {}),
                        value: v.ShopTab.powerupsMusic
                    }),
                    this.canShowThemes() && (0, i.jsx)(k.default, {
                        label: (0, i.jsx)(r.default, {
                            text: 'Themes'
                        }),
                        icon: (0, i.jsx)(m.default, {}),
                        value: v.ShopTab.themes
                    })
                ]
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'canShowPowerups', () => this.props.gameOptions.powerups && !(0, s.inComebackMode)()), (0, g.default)(this, 'canShowThemes', () => this.props.gameOptions.themes), (0, g.default)(this, 'handleTabChange', (z, A) => {
                this.props.changeShopTab(A);
            });
        }
    };
    y = (0, h.__decorate)([
        (0, t.inject)('gameOptions'),
        t.observer
    ], y);
    var _z = y;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....'), d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = i.forwardRef(function(m, n) {
            var o = m.children,
                p = m.classes,
                q = m.className,
                r = m.component,
                s = void 0 === r ? 'div' : r,
                t = m.onChange,
                u = m.showLabels,
                v = void 0 !== u && u,
                w = m.value,
                x = (0, h.default)(m, [
                    'children',
                    'classes',
                    'className',
                    'component',
                    'onChange',
                    'showLabels',
                    'value'
                ]);
            return i.createElement(s, (0, g.default)({
                className: (0, j.default)(p.root, q),
                ref: n
            }, x), i.Children.map(o, function(y, z) {
                if (!i.isValidElement(y))
                    return null;
                var A = void 0 === y.props.value ? z : y.props.value;
                return i.cloneElement(y, {
                    selected: A === w,
                    showLabel: void 0 !== y.props.showLabel ? y.props.showLabel : v,
                    value: A,
                    onChange: t
                });
            }));
        }),
        _m = (0, k.default)(function(n) {
            return {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    height: 56,
                    backgroundColor: n.palette.background.paper
                }
            };
        }, {
            name: 'MuiBottomNavigation'
        })(l);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = i.forwardRef(function(n, o) {
            var p = n.classes,
                q = n.className,
                r = n.icon,
                s = n.label,
                t = n.onChange,
                u = n.onClick,
                v = n.selected,
                w = n.showLabel,
                x = n.value,
                y = (0, h.default)(n, [
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
            return i.createElement(l.default, (0, g.default)({
                ref: o,
                className: (0, j.default)(p.root, q, v ? p.selected : !w && p.iconOnly),
                focusRipple: !0,
                onClick: function(z) {
                    t && t(z, x), u && u(z);
                }
            }, y), i.createElement('span', {
                className: p.wrapper
            }, r, i.createElement('span', {
                className: (0, j.default)(p.label, v ? p.selected : !w && p.iconOnly)
            }, s)));
        }),
        _n = (0, k.default)(function(o) {
            return {
                root: {
                    transition: o.transitions.create([
                        'color',
                        'padding-top'
                    ], {
                        duration: o.transitions.duration.short
                    }),
                    padding: '6px 12px 8px',
                    minWidth: 80,
                    maxWidth: 168,
                    color: o.palette.text.secondary,
                    flex: '1',
                    '&$iconOnly': {
                        paddingTop: 16
                    },
                    '&$selected': {
                        paddingTop: 6,
                        color: o.palette.primary.main
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
                    fontFamily: o.typography.fontFamily,
                    fontSize: o.typography.pxToRem(12),
                    opacity: 1,
                    transition: 'font-size 0.2s, opacity 0.2s',
                    transitionDelay: '0.1s',
                    '&$iconOnly': {
                        opacity: 0,
                        transitionDelay: '0s'
                    },
                    '&$selected': {
                        fontSize: o.typography.pxToRem(14)
                    }
                }
            };
        }, {
            name: 'MuiBottomNavigationAction'
        })(m);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'
        }), 'Build');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z'
        }), 'FormatPaint');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
        }), 'Home');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'
        }), 'MusicNote');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z'
        }), 'Power');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....'),
        _h = (0, d('.....').default)(c(g).createElement('path', {
            d: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'
        }), 'TrendingUp');
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _F;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    let r, s, t, u, v, w, x = y => y;
    var y;
    (y = w || (w = {})).treasure = 'Treaure', y.powerups = 'Powerups';
    const z = p.default.div(r || (r = x`
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`)),
        A = p.default.div(s || (s = x`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-right: 10px;
`)),
        B = p.default.h2(t || (t = x`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 700px) {
    font-size: 40px;
  }
`)),
        C = p.default.div(u || (u = x`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
`)),
        D = p.default.img.attrs({
            src: (0, m.getAssetPath)('treasure.svg')
        })(v || (v = x`
  width: 50%;
  max-width: 250px;
  max-height: 25vh;
  cursor: pointer;
`));
    let E = class extends o.Component {
        render() {
            return (0, i.jsx)(z, {
                children: this.renderScreens()
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                showPowerupsHelperModal: !1,
                showTreasureChest: !0,
                currentScreen: this.props.gameOptions.enablePowerupRNGAnimation && !this.props.navigation.powerupRNGAnimationDone ? w.treasure : w.powerups
            }), (0, g.default)(this, 'renderScreens', () => {
                const {
                    currentScreen: F
                } = this.state;
                let G = null;
                return F === w.treasure ? G = this.treasureChestScreen() : F === w.powerups && (G = this.powerupsScreen()), G;
            }), (0, g.default)(this, 'treasureChestScreen', () => (0, i.jsxs)(C, {
                className: !this.state.showTreasureChest && 'animated fadeOut',
                children: [
                    (0, i.jsx)(B, {
                        children: (0, i.jsx)(j.default, {
                            text: 'Open The Treasure Chest To Unlock Your Powerups!'
                        })
                    }),
                    (0, i.jsx)(D, {
                        className: this.state.showTreasureChest ? 'animated pulse infinite' : 'animated bounceOut',
                        onClick: this.hideTreasureChest
                    })
                ]
            })), (0, g.default)(this, 'powerupsScreen', () => (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A, {
                        className: this.props.gameOptions.enablePowerupRNGAnimation && !this.props.navigation.visitedPowerupSection ? 'animated fadeIn' : '',
                        children: this.props.powerups.availablePowerups.filter(F => !this.props.powerups.disabledPowerups.includes(F.name) && (!this.props.hidePowerup || !this.props.hidePowerup(F))).map(F => (0, i.jsx)(k.default, {
                            powerup: F,
                            openModal: this.openModal
                        }, F.name))
                    }),
                    (0, i.jsx)(q.default, {
                        open: this.state.showPowerupsHelperModal,
                        close: this.closeModal,
                        closeAndReturnToQuestions: this.closeAndReturnToQuestions
                    })
                ]
            })), (0, g.default)(this, 'hideTreasureChest', () => {
                this.props.navigation.powerupRNGAnimationDone = !0, this.setState({
                    showTreasureChest: !1
                }, () => setTimeout(() => this.setState({
                    currentScreen: w.powerups
                }, () => setTimeout(() => this.props.navigation.visitedPowerupSection = !0, 500)), 1000));
            }), (0, g.default)(this, 'openModal', () => this.setState({
                showPowerupsHelperModal: !0
            })), (0, g.default)(this, 'closeAndReturnToQuestions', () => {
                this.closeModal(), setTimeout(() => (0, m.changeRoute)(l.default.questions), 510);
            }), (0, g.default)(this, 'closeModal', () => {
                this.setState({
                    showPowerupsHelperModal: !1
                });
            });
        }
    };
    E = (0, h.__decorate)([
        (0, n.inject)('powerups', 'gameOptions', 'navigation'),
        n.observer
    ], E);
    var _F = E;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _H;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....');
    let v, w, x, y, z, A = B => B;
    const B = u.default.div(v || (v = A`
  box-shadow: ${ 0 };
  flex-grow: 1;
  width: 510px;
  border-radius: ${ 0 }px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`), n.default.basic, 5),
        C = u.default.div(w || (w = A`
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
`), D => D.colors.background, D => D.colors.text, 5, 5),
        D = u.default.div(x || (x = A`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: flex-end;
`)),
        E = u.default.div(y || (y = A`
  font-weight: bold;
  font-size: 26px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`)),
        F = u.default.div(z || (z = A`
  color: rgba(0, 0, 0, 0.7);
`));
    let G = class extends t.Component {
        render() {
            const {
                powerup: H
            } = this.props, I = this.getButtonDetails();
            return (0, i.jsxs)(B, {
                children: [
                    (0, i.jsxs)(C, {
                        colors: H.color,
                        children: [
                            (0, i.jsx)(l.default, {
                                name: H.icon
                            }),
                            H.customTag && (0, i.jsx)(j.default, {
                                style: {
                                    marginTop: 5
                                },
                                label: H.customTag
                            })
                        ]
                    }),
                    (0, i.jsxs)(D, {
                        children: [
                            (0, i.jsxs)('div', {
                                style: {
                                    marginRight: 10
                                },
                                children: [
                                    (0, i.jsx)(E, {
                                        children: (0, i.jsx)('div', {
                                            style: {
                                                marginRight: 5
                                            },
                                            children: (0, i.jsx)(m.default, {
                                                text: (0, r.getPowerupName)(H)
                                            })
                                        })
                                    }),
                                    (0, i.jsx)(F, {
                                        children: (0, i.jsx)(m.default, {
                                            text: (0, r.getPowerupDescription)(H.description)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(k.default, {
                                type: I.type,
                                label: (0, i.jsx)(m.default, {
                                    text: I.label,
                                    disableIfContains: this.props.gameOptions.currency
                                }),
                                onClick: I.onClick
                            })
                        ]
                    })
                ]
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'getCost', () => 5 * Math.ceil((this.props.balance.balance * this.props.powerup.percentageCost + this.props.powerup.baseCost) / 5)), (0, g.default)(this, 'getButtonDetails', () => {
                const {
                    balance: H,
                    powerup: I
                } = this.props, J = this.getCost(), K = H.balance >= J && !this.props.powerups.purchasedPowerups.includes(I.name);
                return {
                    label: this.props.powerups.purchasedPowerups.includes(I.name) ? this.props.powerups.usedPowerups.includes(I.name) ? 'Used' : 'Purchased' : (0, r.getMoney)(J),
                    type: K ? 'primary' : 'disabled',
                    onClick: K ? this.purchase : null
                };
            }), (0, g.default)(this, 'purchase', () => {
                q.successClick.play(), this.props.powerups.hasShownHelperModal || this.props.powerup.autoActivate || (this.props.powerups.hasShownHelperModal = !0, this.props.openModal()), (0, r.send)(o.default.powerupPurchased, this.props.powerup.name), this.props.powerup.autoActivate && (0, r.changeRoute)(p.default.questions);
            });
        }
    };
    G = (0, h.__decorate)([
        (0, s.inject)('powerups', 'gameOptions', 'balance'),
        s.observer
    ], G);
    var _H = G;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _x;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....');
    let p, q, r, s = t => t;
    const t = o.default.div(p || (p = s`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${ 0 };
`), k.default.name),
        u = o.default.div(q || (q = s`
  font-weight: bold;
  font-size: 29px;
`)),
        v = o.default.div(r || (r = s`
  font-size: 21px;
  text-align: center;
  margin-bottom: 15px;
`));
    class w extends n.Component {
        render() {
            return (0, g.jsx)(i.default, {
                open: this.props.open,
                close: this.props.close,
                children: (0, g.jsxs)(t, {
                    children: [
                        (0, g.jsx)(u, {
                            children: (0, g.jsx)(j.default, {
                                text: 'Powerup Purchased!'
                            })
                        }),
                        (0, g.jsx)(v, {
                            children: (0, g.jsx)(j.default, {
                                text: 'Activate your powerup via the tray menu'
                            })
                        }),
                        (0, g.jsx)('img', {
                            src: (0, m.getAssetPath)('PowerupTutorial.gif'),
                            style: {
                                maxHeight: 270,
                                borderRadius: 3,
                                boxShadow: l.default.basic,
                                marginBottom: 15
                            }
                        }),
                        (0, g.jsx)(h.default, {
                            type: 'secondary',
                            size: 'large',
                            onClick: this.props.closeAndReturnToQuestions,
                            label: (0, g.jsx)(j.default, {
                                text: 'Got It'
                            })
                        })
                    ]
                })
            });
        }
    }
    var _x = w;
}), d.register('.....', function(e, f) {
    b(e.exports, 'Container', function() {
        return _p;
    }), b(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m, n, o = p => p;
    const _p = l.default.div(m || (m = o`
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`)),
        q = l.default.div(n || (n = o`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
`));
    let r = class extends k.Component {
        render() {
            const {
                theme: {
                    availableThemes: s
                }
            } = this.props;
            return (0, h.jsx)(_p, {
                children: (0, h.jsx)(q, {
                    children: s.slice().sort((t, u) => t.cost - u.cost).filter(t => !this.props.theme.disabledThemes.includes(t.name)).map(t => (0, h.jsx)(i.default, {
                        specifiedTheme: t
                    }, t.name))
                })
            });
        }
    };
    r = (0, g.__decorate)([
        (0, j.inject)('theme'),
        j.observer
    ], r);
    var _s = r;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _I;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....');
    let u, v, w, x, y, z, A = B => B;
    const B = t.default.div(u || (u = A`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 470px;
  border-radius: ${ 0 }px;
  margin: 10px;
  box-shadow: ${ 0 };
`), 5, l.default.basic),
        C = t.default.div(v || (v = A`
  width: 100%;
  height: 100px;
  display: flex;
`)),
        D = t.default.div(w || (w = A`
  height: 100%;
  width: 25%;
  border-top-left-radius: ${ 0 }px;
  border-top-right-radius: ${ 0 }px;
  background: ${ 0 };
`), E => 0 === E.index ? 5 : 0, E => 3 === E.index ? 5 : 0, E => E.color),
        E = t.default.div(x || (x = A`
  border-bottom-left-radius: ${ 0 }px;
  border-bottom-right-radius: ${ 0 }px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`), 5, 5),
        F = t.default.div(y || (y = A`
  color: rgba(0, 0, 0, 0.7);
`)),
        G = t.default.div(z || (z = A`
  font-weight: bold;
  font-size: 26px;
  font-weight: bold;
`));
    let H = class extends r.Component {
        render() {
            const I = this.getButtonDetails(),
                J = this.props.specifiedTheme;
            return (0, i.jsxs)(B, {
                children: [
                    (0, i.jsx)(C, {
                        children: J.palette.map((K, L) => (0, i.jsx)(D, {
                            index: L,
                            color: K.background
                        }, K.background + L))
                    }),
                    (0, i.jsxs)(E, {
                        children: [
                            (0, i.jsxs)('div', {
                                style: {
                                    marginRight: 10
                                },
                                children: [
                                    (0, i.jsx)(G, {
                                        children: J.name
                                    }),
                                    (0, i.jsx)(F, {
                                        children: (0, i.jsx)(k.default, {
                                            text: J.description
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(j.default, {
                                onClick: I.onClick,
                                type: I.type,
                                label: I.text
                            })
                        ]
                    })
                ]
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'getButtonDetails', () => {
                if (this.ownsTheme())
                    return this.canApplyTheme() ? {
                        type: 'secondary',
                        text: (0, i.jsx)(k.default, {
                            text: 'Apply'
                        }),
                        onClick: () => {
                            o.applyTheme.play(), this.props.navigation.currentShopTab = s.ShopTab.upgrades, (0, p.send)(m.default.themeApplied, this.props.specifiedTheme.name), (0, p.changeRoute)(n.default.questions);
                        }
                    } : {
                        type: 'disabled',
                        text: (0, i.jsx)(k.default, {
                            text: 'Applied'
                        })
                    };
                const I = (0, p.getMoney)(this.props.specifiedTheme.cost);
                return this.canPurchaseTheme() ? {
                    type: 'primary',
                    text: I,
                    onClick: () => {
                        o.successClick.play(), (0, p.purchaseTheme)(this.props.specifiedTheme.name);
                    }
                } : {
                    type: 'disabled',
                    text: I
                };
            }), (0, g.default)(this, 'ownsTheme', () => this.props.theme.ownedThemes.includes(this.props.specifiedTheme.name)), (0, g.default)(this, 'canApplyTheme', () => this.ownsTheme() && this.props.theme.themeName !== this.props.specifiedTheme.name), (0, g.default)(this, 'canPurchaseTheme', () => !this.ownsTheme() && this.props.specifiedTheme.cost <= this.props.balance.balance);
        }
    };
    H = (0, h.__decorate)([
        (0, q.inject)('balance', 'theme', 'navigation'),
        q.observer
    ], H);
    var _I = H;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m;
    const n = d('.....').default.div(m || (m = (o => o)`
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
`), i.default.BackgroundGray, i.default.Black);
    let o = class extends l.Component {
        render() {
            const {
                upgrades: p
            } = this.props;
            return (0, h.jsx)(n, {
                children: p.upgrades.map((q, r) => (0, h.jsx)(j.default, {
                    title: q.name,
                    description: q.description,
                    icon: q.icon,
                    index: r
                }, q.name))
            });
        }
    };
    o = (0, g.__decorate)([
        (0, k.inject)('upgrades'),
        k.observer
    ], o);
    var _p = o;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _g;
    });
    var _g = d('.....').default;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _z;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....');
    let t, u, v = w => w;
    const w = s.default.div(t || (t = v`
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
`), k.default.White, k.default.Black, l.default.basic, x => x.breakpoint),
        x = s.default.div(u || (u = v`
  margin-left: 10px;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-right: 12px;
  @media (min-width: ${ 0 }px) {
    text-align: center;
  }
`), y => y.breakpoint);
    let y = class extends r.Component {
        render() {
            return (0, i.jsxs)(w, {
                onClick: this.handleClick,
                breakpoint: 700,
                children: [
                    (0, i.jsx)(m.default, {
                        index: this.props.index,
                        name: this.props.icon,
                        desktopBreakpoint: 700
                    }),
                    (0, i.jsxs)(x, {
                        breakpoint: 700,
                        children: [
                            (0, i.jsx)('div', {
                                style: {
                                    fontWeight: 'bold',
                                    fontSize: 24
                                },
                                children: (0, i.jsx)(j.default, {
                                    text: this.props.title
                                })
                            }),
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(j.default, {
                                    text: this.props.description
                                })
                            })
                        ]
                    })
                ]
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'handleClick', () => {
                o.click.play(), this.props.upgrades.currentlySelectedUpgrade = this.props.title, (0, p.changeRoute)(n.default.upgrade);
            });
        }
    };
    y = (0, h.__decorate)([
        (0, q.inject)('upgrades'),
        q.observer
    ], y);
    var _z = y;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    let k;
    const l = d('.....').default.div(k || (k = (m => m)`
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
`), m => m.theme.palette[m.index].background, m => m.theme.palette[m.index].text, m => `${ m.breakpoint }px`);
    class _m extends j.Component {
        componentDidMount() {
            window.addEventListener('resize', this.updateWidth);
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.updateWidth);
        }
        render() {
            return (0, h.jsx)(l, {
                breakpoint: this.props.desktopBreakpoint,
                index: this.props.index,
                children: (0, h.jsx)(i.default, {
                    name: this.props.name
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                screenWidth: 0
            }), (0, g.default)(this, 'updateWidth', () => {
                this.setState({
                    screenWidth: window.innerWidth
                });
            });
        }
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _u;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    let s, t = class extends n.Component {
        componentDidMount() {
            (0, l.requestDefendingHomebase)(), this.checkHomebaseInterval = setInterval(() => {
                (0, l.requestDefendingHomebase)();
            }, 5000);
        }
        componentWillUnmount() {
            this.checkHomebaseInterval && clearInterval(this.checkHomebaseInterval);
        }
        render() {
            return (0, i.jsx)(p.Container, {
                style: {
                    display: 'flex',
                    justifyContent: 'center'
                },
                children: (0, i.jsxs)(_v, {
                    children: [
                        (0, i.jsx)(q.default, {}),
                        this.props.upgrades.homebaseUpgades.map(u => {
                            const v = this.getCost(u.baseCost, u.percentageCost),
                                w = this.props.balance.balance >= v;
                            return (0, i.jsx)(r.default, {
                                name: u.name,
                                description: u.description,
                                cost: v,
                                canAfford: w,
                                icon: u.icon,
                                background: u.background,
                                onClick: () => {
                                    w && ((0, l.send)(j.default.upgradeDefendingHomebase, {
                                        id: u.id
                                    }), (0, l.changeRoute)(k.default.questions));
                                }
                            }, u.id);
                        }),
                        (0, i.jsx)('div', {
                            style: {
                                height: 20,
                                width: '100%'
                            }
                        })
                    ]
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'checkHomebaseInterval', null), (0, g.default)(this, 'getCost', (u, v) => 5 * Math.ceil((u + v * this.props.balance.maxBalance) / 5));
        }
    };
    t = (0, h.__decorate)([
        (0, m.inject)('upgrades', 'balance'),
        m.observer
    ], t);
    var _u = t;
    const _v = o.default.div(s || (s = (w => w)`
  width: 100%;
  max-width: 700px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'Container', function() {
        return _w;
    }), b(e.exports, 'IconContainer', function() {
        return _x;
    }), b(e.exports, 'default', function() {
        return _v;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    let r, s, t = u => u;
    let u = class extends p.Component {
        render() {
            const v = this.props.entities.defendingHomebase;
            return v ? (0, h.jsxs)(_w, {
                children: [
                    (0, h.jsx)(_x, {
                        colors: {
                            text: l.default.White,
                            background: v.backgroundColor
                        },
                        children: (0, h.jsx)(j.default, {
                            name: v.icon
                        })
                    }),
                    (0, h.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        },
                        children: [
                            (0, h.jsx)('div', {
                                style: {
                                    fontWeight: 900,
                                    fontSize: 35
                                },
                                children: (0, h.jsx)(k.default, {
                                    text: v.name
                                })
                            }),
                            (0, h.jsxs)('div', {
                                style: {
                                    fontSize: 23,
                                    marginTop: -5
                                },
                                children: [
                                    (0, n.numberWithCommas)(v.health),
                                    '/',
                                    (0, n.numberWithCommas)(v.maxHealth),
                                    ' ',
                                    (0, h.jsx)(k.default, {
                                        text: 'health'
                                    })
                                ]
                            }),
                            (0, h.jsx)(i.default, {
                                style: {
                                    width: '100%',
                                    marginTop: 5,
                                    marginBottom: 10,
                                    maxWidth: 400
                                }
                            }),
                            (0, h.jsxs)('div', {
                                children: [
                                    (0, h.jsx)(k.default, {
                                        text: 'Losing'
                                    }),
                                    ' ',
                                    (0, h.jsx)('b', {
                                        children: (0, n.numberWithCommas)((b = v.healthDecreasePerTick, Math.round(10 * b) / 10))
                                    }),
                                    ' ',
                                    (0, h.jsx)(k.default, {
                                        text: 'health per second'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : null;
            var w;
        }
    };
    u = (0, g.__decorate)([
        (0, o.inject)('entities'),
        o.observer
    ], u);
    var _v = u;
    const _w = q.default.div(r || (r = t`
  margin: 20px;
  border-radius: ${ 0 }px;
  box-shadow: ${ 0 };
`), 5, m.default.basic),
        _x = q.default.div(s || (s = t`
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
`), y => y.colors.background, y => y.colors.text, 5, 5);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _t;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....');
    let p, q, r = s => s;
    class s extends n.Component {
        render() {
            const t = this.props;
            return (0, g.jsxs)(_u, {
                style: t.style,
                children: [
                    (0, g.jsx)(_v, {
                        colors: {
                            text: k.default.White,
                            background: t.background
                        },
                        children: (0, g.jsx)(i.default, {
                            name: t.icon
                        })
                    }),
                    (0, g.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between'
                        },
                        children: [
                            (0, g.jsxs)('div', {
                                className: 'flex flex-column',
                                style: {
                                    alignItems: 'flex-start'
                                },
                                children: [
                                    t.aboveNameComponent ? t.aboveNameComponent : null,
                                    (0, g.jsx)('div', {
                                        style: {
                                            fontWeight: 900,
                                            fontSize: 25
                                        },
                                        children: (0, g.jsx)(j.default, {
                                            text: t.name
                                        })
                                    }),
                                    (0, g.jsx)('div', {
                                        children: (0, g.jsx)(j.default, {
                                            text: t.description
                                        })
                                    })
                                ]
                            }),
                            (0, g.jsx)('div', {
                                children: (0, g.jsx)(h.default, {
                                    type: t.canAfford ? 'primary' : 'disabled',
                                    size: 'medium',
                                    label: (0, m.getMoney)(t.cost),
                                    style: {
                                        marginLeft: 25
                                    },
                                    onClick: t.onClick
                                })
                            })
                        ]
                    })
                ]
            });
        }
    }
    var _t = s;
    const _u = o.default.div(p || (p = r`
  margin: 20px;
  border-radius: ${ 0 }px;
  box-shadow: ${ 0 };
`), 5, l.default.basic),
        _v = o.default.div(q || (q = r`
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
`), w => w.colors.background, w => w.colors.text, 5, 5);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _A;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....');
    let u, v, w = x => x;
    const x = r.default.div(u || (u = w`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${ 0 };
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
`), j.default.White),
        y = r.default.div(v || (v = w`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 9px;
`));
    let z = class extends o.Component {
        render() {
            return this.getContent();
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                showReader: !0,
                screen: ''
            }), (0, g.default)(this, 'handleScan', A => {
                if (A && JSON.parse(A)) {
                    const B = JSON.parse(A);
                    B.route && (l.applyTheme.play(), this.setState({
                        showReader: !1,
                        screen: B.route
                    }, () => {
                        'moneyPerQuestion' === this.state.screen && this.onUpgradeScanned(q.upgradeNames.moneyPerQuestion), 'streakBonus' === this.state.screen && this.onUpgradeScanned(q.upgradeNames.streakBonus), 'multiplier' === this.state.screen && this.onUpgradeScanned(q.upgradeNames.multiplier), 'insurance' === this.state.screen && this.onUpgradeScanned(q.upgradeNames.insurance);
                    }));
                }
            }), (0, g.default)(this, 'getContent', () => this.state.showReader ? (0, i.jsxs)(x, {
                children: [
                    (0, i.jsx)(y, {
                        children: 'Find a KitCode to scan!'
                    }),
                    (0, i.jsx)(c(p), {
                        onScan: this.handleScan,
                        style: {
                            width: 300,
                            height: 300
                        },
                        onError: null
                    })
                ]
            }) : 'themes' === this.state.screen ? (0, i.jsx)(t.default, {}) : 'powerups' === this.state.screen ? (0, i.jsx)(s.default, {}) : null), (0, g.default)(this, 'onUpgradeScanned', A => {
                this.props.upgrades.currentlySelectedUpgrade = A, (0, m.changeRoute)(k.default.upgrade);
            });
        }
    };
    z = (0, h.__decorate)([
        (0, n.inject)('upgrades'),
        n.observer
    ], z);
    var _A = z;
}), d.register('.....', function(e, f) {
    var g, h, i = Object.assign || function(j) {
            for (var k = 1; k < arguments.length; k++) {
                var l = arguments[k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (j[m] = l[m]);
            }
            return j;
        },
        j = function() {
            function k(l, m) {
                for (var n = 0; n < m.length; n++) {
                    var o = m[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(l, o.key, o);
                }
            }
            return function(n, o, p) {
                return o && k(n.prototype, o), p && k(n, p), n;
            };
        }();
    var k = d('.....'),
        l = k.Component,
        m = d('.....'),
        n = d('.....'),
        o = n.getDeviceId,
        p = (n.getFacingModePattern, d('.....')),
        q = d('.....');
    d('.....');
    var r = q(['!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.jsQR=e():o.jsQR=e()}("undefined"!=typeof self?self:this,function(){return function(o){function e(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return o[t].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var r={};return e.m=o,e.c=r,e.d=function(o,r,t){e.o(o,r)||Object.defineProperty(o,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(r,"a",r),r},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p="",e(e.s=3)}([function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o,e){this.width=e,this.height=o.length/e,this.data=o}return o.createEmpty=function(e,r){return new o(new Uint8ClampedArray(e*r),e)},o.prototype.get=function(o,e){return!(o<0||o>=this.width||e<0||e>=this.height)&&!!this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r?1:0},o.prototype.setRegion=function(o,e,r,t,c){for(var s=e;s<e+t;s++)for(var a=o;a<o+r;a++)this.set(a,s,!!c)},o}();e.BitMatrix=t},function(o,e,r){"use strict";function t(o,e){return o^e}Object.defineProperty(e,"__esModule",{value:!0});var c=r(2);e.addOrSubtractGF=t;var s=function(){function o(o,e,r){this.primitive=o,this.size=e,this.generatorBase=r,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var t=1,s=0;s<this.size;s++)this.expTable[s]=t,(t*=2)>=this.size&&(t=(t^this.primitive)&this.size-1);for(var s=0;s<this.size-1;s++)this.logTable[this.expTable[s]]=s;this.zero=new c.default(this,Uint8ClampedArray.from([0])),this.one=new c.default(this,Uint8ClampedArray.from([1]))}return o.prototype.multiply=function(o,e){return 0===o||0===e?0:this.expTable[(this.logTable[o]+this.logTable[e])%(this.size-1)]},o.prototype.inverse=function(o){if(0===o)throw new Error("Can\'t invert 0");return this.expTable[this.size-this.logTable[o]-1]},o.prototype.buildMonomial=function(o,e){if(o<0)throw new Error("Invalid monomial degree less than 0");if(0===e)return this.zero;var r=new Uint8ClampedArray(o+1);return r[0]=e,new c.default(this,r)},o.prototype.log=function(o){if(0===o)throw new Error("Can\'t take log(0)");return this.logTable[o]},o.prototype.exp=function(o){return this.expTable[o]},o}();e.default=s},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r(1),c=function(){function o(o,e){if(0===e.length)throw new Error("No coefficients.");this.field=o;var r=e.length;if(r>1&&0===e[0]){for(var t=1;t<r&&0===e[t];)t++;if(t===r)this.coefficients=o.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(r-t);for(var c=0;c<this.coefficients.length;c++)this.coefficients[c]=e[t+c]}}else this.coefficients=e}return o.prototype.degree=function(){return this.coefficients.length-1},o.prototype.isZero=function(){return 0===this.coefficients[0]},o.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},o.prototype.addOrSubtract=function(e){if(this.isZero())return e;if(e.isZero())return this;var r=this.coefficients,c=e.coefficients;r.length>c.length&&(n=[c,r],r=n[0],c=n[1]);for(var s=new Uint8ClampedArray(c.length),a=c.length-r.length,d=0;d<a;d++)s[d]=c[d];for(var d=a;d<c.length;d++)s[d]=t.addOrSubtractGF(r[d-a],c[d]);return new o(this.field,s);var n},o.prototype.multiply=function(e){if(0===e)return this.field.zero;if(1===e)return this;for(var r=this.coefficients.length,t=new Uint8ClampedArray(r),c=0;c<r;c++)t[c]=this.field.multiply(this.coefficients[c],e);return new o(this.field,t)},o.prototype.multiplyPoly=function(e){if(this.isZero()||e.isZero())return this.field.zero;for(var r=this.coefficients,c=r.length,s=e.coefficients,a=s.length,d=new Uint8ClampedArray(c+a-1),n=0;n<c;n++)for(var l=r[n],i=0;i<a;i++)d[n+i]=t.addOrSubtractGF(d[n+i],this.field.multiply(l,s[i]));return new o(this.field,d)},o.prototype.multiplyByMonomial=function(e,r){if(e<0)throw new Error("Invalid degree less than 0");if(0===r)return this.field.zero;for(var t=this.coefficients.length,c=new Uint8ClampedArray(t+e),s=0;s<t;s++)c[s]=this.field.multiply(this.coefficients[s],r);return new o(this.field,c)},o.prototype.evaluateAt=function(o){var e=0;if(0===o)return this.getCoefficient(0);var r=this.coefficients.length;if(1===o)return this.coefficients.forEach(function(o){e=t.addOrSubtractGF(e,o)}),e;e=this.coefficients[0];for(var c=1;c<r;c++)e=t.addOrSubtractGF(this.field.multiply(o,e),this.coefficients[c]);return e},o}();e.default=c},function(o,e,r){"use strict";function t(o){var e=n.locate(o);if(!e)return null;var r=d.extract(o,e),t=a.decode(r.matrix);return t?{binaryData:t.bytes,data:t.text,chunks:t.chunks,location:{topRightCorner:r.mappingFunction(e.dimension,0),topLeftCorner:r.mappingFunction(0,0),bottomRightCorner:r.mappingFunction(e.dimension,e.dimension),bottomLeftCorner:r.mappingFunction(0,e.dimension),topRightFinderPattern:e.topRight,topLeftFinderPattern:e.topLeft,bottomLeftFinderPattern:e.bottomLeft,bottomRightAlignmentPattern:e.alignmentPattern}}:null}function c(o,e,r,c){void 0===c&&(c={});var a=l;Object.keys(a||{}).forEach(function(o){a[o]=c[o]||a[o]});var d="attemptBoth"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,n="onlyInvert"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,i=s.binarize(o,e,r,d),B=i.binarized,k=i.inverted,u=t(n?k:B);return u||"attemptBoth"!==a.inversionAttempts&&"invertFirst"!==a.inversionAttempts||(u=t(n?B:k)),u}Object.defineProperty(e,"__esModule",{value:!0});var s=r(4),a=r(5),d=r(11),n=r(12),l={inversionAttempts:"attemptBoth"};c.default=c,e.default=c},function(o,e,r){"use strict";function t(o,e,r){return o<e?e:o>r?r:o}function c(o,e,r,c){if(o.length!==e*r*4)throw new Error("Malformed data passed to binarizer.");for(var l=new n(e,r),i=0;i<e;i++)for(var B=0;B<r;B++){var k=o[4*(B*e+i)+0],u=o[4*(B*e+i)+1],C=o[4*(B*e+i)+2];l.set(i,B,.2126*k+.7152*u+.0722*C)}for(var m=Math.ceil(e/a),f=Math.ceil(r/a),w=new n(m,f),P=0;P<f;P++)for(var v=0;v<m;v++){for(var h=0,p=1/0,y=0,B=0;B<a;B++)for(var i=0;i<a;i++){var b=l.get(v*a+i,P*a+B);h+=b,p=Math.min(p,b),y=Math.max(y,b)}var g=h/Math.pow(a,2);if(y-p<=d&&(g=p/2,P>0&&v>0)){var x=(w.get(v,P-1)+2*w.get(v-1,P)+w.get(v-1,P-1))/4;p<x&&(g=x)}w.set(v,P,g)}var M=s.BitMatrix.createEmpty(e,r),L=null;c&&(L=s.BitMatrix.createEmpty(e,r));for(var P=0;P<f;P++)for(var v=0;v<m;v++){for(var N=t(v,2,m-3),I=t(P,2,f-3),h=0,O=-2;O<=2;O++)for(var z=-2;z<=2;z++)h+=w.get(N+O,I+z);for(var S=h/25,O=0;O<a;O++)for(var z=0;z<a;z++){var i=v*a+O,B=P*a+z,X=l.get(i,B);M.set(i,B,X<=S),c&&L.set(i,B,!(X<=S))}}return c?{binarized:M,inverted:L}:{binarized:M}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(0),a=8,d=24,n=function(){function o(o,e){this.width=o,this.data=new Uint8ClampedArray(o*e)}return o.prototype.get=function(o,e){return this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r},o}();e.binarize=c},function(o,e,r){"use strict";function t(o,e){for(var r=o^e,t=0;r;)t++,r&=r-1;return t}function c(o,e){return e<<1|o}function s(o){var e=17+4*o.versionNumber,r=k.BitMatrix.createEmpty(e,e);r.setRegion(0,0,9,9,!0),r.setRegion(e-8,0,8,9,!0),r.setRegion(0,e-8,9,8,!0);for(var t=0,c=o.alignmentPatternCenters;t<c.length;t++)for(var s=c[t],a=0,d=o.alignmentPatternCenters;a<d.length;a++){var n=d[a];6===s&&6===n||6===s&&n===e-7||s===e-7&&6===n||r.setRegion(s-2,n-2,5,5,!0)}return r.setRegion(6,9,1,e-17,!0),r.setRegion(9,6,e-17,1,!0),o.versionNumber>6&&(r.setRegion(e-11,0,3,6,!0),r.setRegion(0,e-11,6,3,!0)),r}function a(o,e,r){for(var t=w[r.dataMask],a=o.height,d=s(e),n=[],l=0,i=0,B=!0,k=a-1;k>0;k-=2){6===k&&k--;for(var u=0;u<a;u++)for(var C=B?a-1-u:u,m=0;m<2;m++){var f=k-m;if(!d.get(f,C)){i++;var P=o.get(f,C);t({y:C,x:f})&&(P=!P),l=c(P,l),8===i&&(n.push(l),i=0,l=0)}}B=!B}return n}function d(o){var e=o.height,r=Math.floor((e-17)/4);if(r<=6)return m.VERSIONS[r-1];for(var s=0,a=5;a>=0;a--)for(var d=e-9;d>=e-11;d--)s=c(o.get(d,a),s);for(var n=0,d=5;d>=0;d--)for(var a=e-9;a>=e-11;a--)n=c(o.get(d,a),n);for(var l,i=1/0,B=0,k=m.VERSIONS;B<k.length;B++){var u=k[B];if(u.infoBits===s||u.infoBits===n)return u;var C=t(s,u.infoBits);C<i&&(l=u,i=C),C=t(n,u.infoBits),C<i&&(l=u,i=C)}return i<=3?l:void 0}function n(o){for(var e=0,r=0;r<=8;r++)6!==r&&(e=c(o.get(r,8),e));for(var s=7;s>=0;s--)6!==s&&(e=c(o.get(8,s),e));for(var a=o.height,d=0,s=a-1;s>=a-7;s--)d=c(o.get(8,s),d);for(var r=a-8;r<a;r++)d=c(o.get(r,8),d);for(var n=1/0,l=null,i=0,B=f;i<B.length;i++){var k=B[i],u=k.bits,C=k.formatInfo;if(u===e||u===d)return C;var m=t(e,u);m<n&&(l=C,n=m),e!==d&&(m=t(d,u))<n&&(l=C,n=m)}return n<=3?l:null}function l(o,e,r){var t=e.errorCorrectionLevels[r],c=[],s=0;if(t.ecBlocks.forEach(function(o){for(var e=0;e<o.numBlocks;e++)c.push({numDataCodewords:o.dataCodewordsPerBlock,codewords:[]}),s+=o.dataCodewordsPerBlock+t.ecCodewordsPerBlock}),o.length<s)return null;o=o.slice(0,s);for(var a=t.ecBlocks[0].dataCodewordsPerBlock,d=0;d<a;d++)for(var n=0,l=c;n<l.length;n++){var i=l[n];i.codewords.push(o.shift())}if(t.ecBlocks.length>1)for(var B=t.ecBlocks[0].numBlocks,k=t.ecBlocks[1].numBlocks,d=0;d<k;d++)c[B+d].codewords.push(o.shift());for(;o.length>0;)for(var u=0,C=c;u<C.length;u++){var i=C[u];i.codewords.push(o.shift())}return c}function i(o){var e=d(o);if(!e)return null;var r=n(o);if(!r)return null;var t=a(o,e,r),c=l(t,e,r.errorCorrectionLevel);if(!c)return null;for(var s=c.reduce(function(o,e){return o+e.numDataCodewords},0),i=new Uint8ClampedArray(s),B=0,k=0,m=c;k<m.length;k++){var f=m[k],w=C.decode(f.codewords,f.codewords.length-f.numDataCodewords);if(!w)return null;for(var P=0;P<f.numDataCodewords;P++)i[B++]=w[P]}try{return u.decode(i,e.versionNumber)}catch(o){return null}}function B(o){if(null==o)return null;var e=i(o);if(e)return e;for(var r=0;r<o.width;r++)for(var t=r+1;t<o.height;t++)o.get(r,t)!==o.get(t,r)&&(o.set(r,t,!o.get(r,t)),o.set(t,r,!o.get(t,r)));return i(o)}Object.defineProperty(e,"__esModule",{value:!0});var k=r(0),u=r(6),C=r(9),m=r(10),f=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],w=[function(o){return(o.y+o.x)%2==0},function(o){return o.y%2==0},function(o){return o.x%3==0},function(o){return(o.y+o.x)%3==0},function(o){return(Math.floor(o.y/2)+Math.floor(o.x/3))%2==0},function(o){return o.x*o.y%2+o.x*o.y%3==0},function(o){return(o.y*o.x%2+o.y*o.x%3)%2==0},function(o){return((o.y+o.x)%2+o.y*o.x%3)%2==0}];e.decode=B},function(o,e,r){"use strict";function t(o,e){for(var r=[],t="",c=[10,12,14][e],s=o.readBits(c);s>=3;){var a=o.readBits(10);if(a>=1e3)throw new Error("Invalid numeric value above 999");var d=Math.floor(a/100),n=Math.floor(a/10)%10,l=a%10;r.push(48+d,48+n,48+l),t+=d.toString()+n.toString()+l.toString(),s-=3}if(2===s){var a=o.readBits(7);if(a>=100)throw new Error("Invalid numeric value above 99");var d=Math.floor(a/10),n=a%10;r.push(48+d,48+n),t+=d.toString()+n.toString()}else if(1===s){var a=o.readBits(4);if(a>=10)throw new Error("Invalid numeric value above 9");r.push(48+a),t+=a.toString()}return{bytes:r,text:t}}function c(o,e){for(var r=[],t="",c=[9,11,13][e],s=o.readBits(c);s>=2;){var a=o.readBits(11),d=Math.floor(a/45),n=a%45;r.push(k[d].charCodeAt(0),k[n].charCodeAt(0)),t+=k[d]+k[n],s-=2}if(1===s){var d=o.readBits(6);r.push(k[d].charCodeAt(0)),t+=k[d]}return{bytes:r,text:t}}function s(o,e){for(var r=[],t="",c=[8,16,16][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(8);r.push(d)}try{t+=decodeURIComponent(r.map(function(o){return"%"+("0"+o.toString(16)).substr(-2)}).join(""))}catch(o){}return{bytes:r,text:t}}function a(o,e){for(var r=[],t="",c=[8,10,12][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(13),n=Math.floor(d/192)<<8|d%192;n+=n<7936?33088:49472,r.push(n>>8,255&n),t+=String.fromCharCode(i.shiftJISTable[n])}return{bytes:r,text:t}}function d(o,e){for(var r=new l.BitStream(o),d=e<=9?0:e<=26?1:2,i={text:"",bytes:[],chunks:[]};r.available()>=4;){var k=r.readBits(4);if(k===B.Terminator)return i;if(k===B.ECI)0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(7)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(14)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(21)}):i.chunks.push({type:n.ECI,assignmentNumber:-1});else if(k===B.Numeric){var u=t(r,d);i.text+=u.text,(w=i.bytes).push.apply(w,u.bytes),i.chunks.push({type:n.Numeric,text:u.text})}else if(k===B.Alphanumeric){var C=c(r,d);i.text+=C.text,(P=i.bytes).push.apply(P,C.bytes),i.chunks.push({type:n.Alphanumeric,text:C.text})}else if(k===B.Byte){var m=s(r,d);i.text+=m.text,(v=i.bytes).push.apply(v,m.bytes),i.chunks.push({type:n.Byte,bytes:m.bytes,text:m.text})}else if(k===B.Kanji){var f=a(r,d);i.text+=f.text,(h=i.bytes).push.apply(h,f.bytes),i.chunks.push({type:n.Kanji,bytes:f.bytes,text:f.text})}}var w,P,v,h}Object.defineProperty(e,"__esModule",{value:!0});var n,l=r(7),i=r(8);!function(o){o.Numeric="numeric",o.Alphanumeric="alphanumeric",o.Byte="byte",o.Kanji="kanji",o.ECI="eci"}(n=e.Mode||(e.Mode={}));var B;!function(o){o[o.Terminator=0]="Terminator",o[o.Numeric=1]="Numeric",o[o.Alphanumeric=2]="Alphanumeric",o[o.Byte=4]="Byte",o[o.Kanji=8]="Kanji",o[o.ECI=7]="ECI"}(B||(B={}));var k=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];e.decode=d},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o){this.byteOffset=0,this.bitOffset=0,this.bytes=o}return o.prototype.readBits=function(o){if(o<1||o>32||o>this.available())throw new Error("Cannot read "+o.toString()+" bits");var e=0;if(this.bitOffset>0){var r=8-this.bitOffset,t=o<r?o:r,c=r-t,s=255>>8-t<<c;e=(this.bytes[this.byteOffset]&s)>>c,o-=t,this.bitOffset+=t,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++)}if(o>0){for(;o>=8;)e=e<<8|255&this.bytes[this.byteOffset],this.byteOffset++,o-=8;if(o>0){var c=8-o,s=255>>c<<c;e=e<<o|(this.bytes[this.byteOffset]&s)>>c,this.bitOffset+=o}}return e},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o}();e.BitStream=t},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,\n36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,\n39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,\n59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(o,e,r){"use strict";function t(o,e,r,t){e.degree()<r.degree()&&(w=[r,e],e=w[0],r=w[1]);for(var c=e,s=r,a=o.zero,d=o.one;s.degree()>=t/2;){var n=c,l=a;if(c=s,a=d,c.isZero())return null;s=n;for(var i=o.zero,B=c.getCoefficient(c.degree()),k=o.inverse(B);s.degree()>=c.degree()&&!s.isZero();){var u=s.degree()-c.degree(),C=o.multiply(s.getCoefficient(s.degree()),k);i=i.addOrSubtract(o.buildMonomial(u,C)),s=s.addOrSubtract(c.multiplyByMonomial(u,C))}if(d=i.multiplyPoly(a).addOrSubtract(l),s.degree()>=c.degree())return null}var m=d.getCoefficient(0);if(0===m)return null;var f=o.inverse(m);return[d.multiply(f),s.multiply(f)];var w}function c(o,e){var r=e.degree();if(1===r)return[e.getCoefficient(1)];for(var t=new Array(r),c=0,s=1;s<o.size&&c<r;s++)0===e.evaluateAt(s)&&(t[c]=o.inverse(s),c++);return c!==r?null:t}function s(o,e,r){for(var t=r.length,c=new Array(t),s=0;s<t;s++){for(var a=o.inverse(r[s]),n=1,l=0;l<t;l++)s!==l&&(n=o.multiply(n,d.addOrSubtractGF(1,o.multiply(r[l],a))));c[s]=o.multiply(e.evaluateAt(a),o.inverse(n)),0!==o.generatorBase&&(c[s]=o.multiply(c[s],a))}return c}function a(o,e){var r=new Uint8ClampedArray(o.length);r.set(o);for(var a=new d.default(285,256,0),l=new n.default(a,r),i=new Uint8ClampedArray(e),B=!1,k=0;k<e;k++){var u=l.evaluateAt(a.exp(k+a.generatorBase));i[i.length-1-k]=u,0!==u&&(B=!0)}if(!B)return r;var C=new n.default(a,i),m=t(a,a.buildMonomial(e,1),C,e);if(null===m)return null;var f=c(a,m[0]);if(null==f)return null;for(var w=s(a,m[1],f),P=0;P<f.length;P++){var v=r.length-1-a.log(f[P]);if(v<0)return null;r[v]=d.addOrSubtractGF(r[v],w[P])}return r}Object.defineProperty(e,"__esModule",{value:!0});var d=r(1),n=r(2);e.decode=a},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(o,e,r){"use strict";function t(o,e,r,t){var c=o.x-e.x+r.x-t.x,s=o.y-e.y+r.y-t.y;if(0===c&&0===s)return{a11:e.x-o.x,a12:e.y-o.y,a13:0,a21:r.x-e.x,a22:r.y-e.y,a23:0,a31:o.x,a32:o.y,a33:1};var a=e.x-r.x,d=t.x-r.x,n=e.y-r.y,l=t.y-r.y,i=a*l-d*n,B=(c*l-d*s)/i,k=(a*s-c*n)/i;return{a11:e.x-o.x+B*e.x,a12:e.y-o.y+B*e.y,a13:B,a21:t.x-o.x+k*t.x,a22:t.y-o.y+k*t.y,a23:k,a31:o.x,a32:o.y,a33:1}}function c(o,e,r,c){var s=t(o,e,r,c);return{a11:s.a22*s.a33-s.a23*s.a32,a12:s.a13*s.a32-s.a12*s.a33,a13:s.a12*s.a23-s.a13*s.a22,a21:s.a23*s.a31-s.a21*s.a33,a22:s.a11*s.a33-s.a13*s.a31,a23:s.a13*s.a21-s.a11*s.a23,a31:s.a21*s.a32-s.a22*s.a31,a32:s.a12*s.a31-s.a11*s.a32,a33:s.a11*s.a22-s.a12*s.a21}}function s(o,e){return{a11:o.a11*e.a11+o.a21*e.a12+o.a31*e.a13,a12:o.a12*e.a11+o.a22*e.a12+o.a32*e.a13,a13:o.a13*e.a11+o.a23*e.a12+o.a33*e.a13,a21:o.a11*e.a21+o.a21*e.a22+o.a31*e.a23,a22:o.a12*e.a21+o.a22*e.a22+o.a32*e.a23,a23:o.a13*e.a21+o.a23*e.a22+o.a33*e.a23,a31:o.a11*e.a31+o.a21*e.a32+o.a31*e.a33,a32:o.a12*e.a31+o.a22*e.a32+o.a32*e.a33,a33:o.a13*e.a31+o.a23*e.a32+o.a33*e.a33}}function a(o,e){for(var r=c({x:3.5,y:3.5},{x:e.dimension-3.5,y:3.5},{x:e.dimension-6.5,y:e.dimension-6.5},{x:3.5,y:e.dimension-3.5}),a=t(e.topLeft,e.topRight,e.alignmentPattern,e.bottomLeft),n=s(a,r),l=d.BitMatrix.createEmpty(e.dimension,e.dimension),i=function(o,e){var r=n.a13*o+n.a23*e+n.a33;return{x:(n.a11*o+n.a21*e+n.a31)/r,y:(n.a12*o+n.a22*e+n.a32)/r}},B=0;B<e.dimension;B++)for(var k=0;k<e.dimension;k++){var u=k+.5,C=B+.5,m=i(u,C);l.set(k,B,o.get(Math.floor(m.x),Math.floor(m.y)))}return{matrix:l,mappingFunction:i}}Object.defineProperty(e,"__esModule",{value:!0});var d=r(0);e.extract=a},function(o,e,r){"use strict";function t(o){return o.reduce(function(o,e){return o+e})}function c(o,e,r){var t,c,s,a=C(o,e),d=C(e,r),n=C(o,r);return d>=a&&d>=n?(l=[e,o,r],t=l[0],c=l[1],s=l[2]):n>=d&&n>=a?(i=[o,e,r],t=i[0],c=i[1],s=i[2]):(B=[o,r,e],t=B[0],c=B[1],s=B[2]),(s.x-c.x)*(t.y-c.y)-(s.y-c.y)*(t.x-c.x)<0&&(k=[s,t],t=k[0],s=k[1]),{bottomLeft:t,topLeft:c,topRight:s};var l,i,B,k}function s(o,e,r,c){var s=(t(d(o,r,c,5))/7+t(d(o,e,c,5))/7+t(d(r,o,c,5))/7+t(d(e,o,c,5))/7)/4;if(s<1)throw new Error("Invalid module size");var a=Math.round(C(o,e)/s),n=Math.round(C(o,r)/s),l=Math.floor((a+n)/2)+7;switch(l%4){case 0:l++;break;case 2:l--}return{dimension:l,moduleSize:s}}function a(o,e,r,t){var c,s,a,d,n=[{x:Math.floor(o.x),y:Math.floor(o.y)}],l=Math.abs(e.y-o.y)>Math.abs(e.x-o.x);l?(c=Math.floor(o.y),s=Math.floor(o.x),a=Math.floor(e.y),d=Math.floor(e.x)):(c=Math.floor(o.x),s=Math.floor(o.y),a=Math.floor(e.x),d=Math.floor(e.y));for(var i=Math.abs(a-c),B=Math.abs(d-s),k=Math.floor(-i/2),u=c<a?1:-1,m=s<d?1:-1,f=!0,w=c,P=s;w!==a+u;w+=u){var v=l?P:w,h=l?w:P;if(r.get(v,h)!==f&&(f=!f,n.push({x:v,y:h}),n.length===t+1))break;if((k+=B)>0){if(P===d)break;P+=m,k-=i}}for(var p=[],y=0;y<t;y++)n[y]&&n[y+1]?p.push(C(n[y],n[y+1])):p.push(0);return p}function d(o,e,r,t){var c=e.y-o.y,s=e.x-o.x,d=a(o,e,r,Math.ceil(t/2)),n=a(o,{x:o.x-s,y:o.y-c},r,Math.ceil(t/2)),l=d.shift()+n.shift()-1;return(i=n.concat(l)).concat.apply(i,d);var i}function n(o,e){var r=t(o)/t(e),c=0;return e.forEach(function(e,t){c+=Math.pow(o[t]-e*r,2)}),{averageSize:r,error:c}}function l(o,e,r){try{var t=d(o,{x:-1,y:o.y},r,e.length),c=d(o,{x:o.x,y:-1},r,e.length),s={x:Math.max(0,o.x-o.y)-1,y:Math.max(0,o.y-o.x)-1},a=d(o,s,r,e.length),l={x:Math.min(r.width,o.x+o.y)+1,y:Math.min(r.height,o.y+o.x)+1},i=d(o,l,r,e.length),B=n(t,e),k=n(c,e),u=n(a,e),C=n(i,e),m=Math.sqrt(B.error*B.error+k.error*k.error+u.error*u.error+C.error*C.error),f=(B.averageSize+k.averageSize+u.averageSize+C.averageSize)/4;return m+(Math.pow(B.averageSize-f,2)+Math.pow(k.averageSize-f,2)+Math.pow(u.averageSize-f,2)+Math.pow(C.averageSize-f,2))/f}catch(o){return 1/0}}function i(o){for(var e=[],r=[],a=[],d=[],n=0;n<=o.height;n++)!function(c){for(var s=0,n=!1,l=[0,0,0,0,0],i=-1;i<=o.width;i++)!function(e){var a=o.get(e,c);if(a===n)s++;else{l=[l[1],l[2],l[3],l[4],s],s=1,n=a;var i=t(l)/7,B=Math.abs(l[0]-i)<i&&Math.abs(l[1]-i)<i&&Math.abs(l[2]-3*i)<3*i&&Math.abs(l[3]-i)<i&&Math.abs(l[4]-i)<i&&!a,C=t(l.slice(-3))/3,m=Math.abs(l[2]-C)<C&&Math.abs(l[3]-C)<C&&Math.abs(l[4]-C)<C&&a;if(B){var f=e-l[3]-l[4],w=f-l[2],P={startX:w,endX:f,y:c},v=r.filter(function(o){return w>=o.bottom.startX&&w<=o.bottom.endX||f>=o.bottom.startX&&w<=o.bottom.endX||w<=o.bottom.startX&&f>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:r.push({top:P,bottom:P})}if(m){var h=e-l[4],p=h-l[3],P={startX:p,y:c,endX:h},v=d.filter(function(o){return p>=o.bottom.startX&&p<=o.bottom.endX||h>=o.bottom.startX&&p<=o.bottom.endX||p<=o.bottom.startX&&h>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:d.push({top:P,bottom:P})}}}(i);e.push.apply(e,r.filter(function(o){return o.bottom.y!==c&&o.bottom.y-o.top.y>=2})),r=r.filter(function(o){return o.bottom.y===c}),a.push.apply(a,d.filter(function(o){return o.bottom.y!==c})),d=d.filter(function(o){return o.bottom.y===c})}(n);e.push.apply(e,r.filter(function(o){return o.bottom.y-o.top.y>=2})),a.push.apply(a,d);var i=e.filter(function(o){return o.bottom.y-o.top.y>=2}).map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.round(r),Math.round(c))){\nvar s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1],a=t(s)/s.length;return{score:l({x:Math.round(r),y:Math.round(c)},[1,1,3,1,1],o),x:r,y:c,size:a}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}).map(function(o,e,r){if(e>B)return null;var t=r.filter(function(o,r){return e!==r}).map(function(e){return{x:e.x,y:e.y,score:e.score+Math.pow(e.size-o.size,2)/o.size,size:e.size}}).sort(function(o,e){return o.score-e.score});if(t.length<2)return null;var c=o.score+t[0].score+t[1].score;return{points:[o].concat(t.slice(0,2)),score:c}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score});if(0===i.length)return null;var m,f,w=c(i[0].points[0],i[0].points[1],i[0].points[2]),P=w.topRight,v=w.topLeft,h=w.bottomLeft;try{L=s(v,P,h,o),m=L.dimension,f=L.moduleSize}catch(o){return null}var p={x:P.x-v.x+h.x,y:P.y-v.y+h.y},y=(C(v,h)+C(v,P))/2/f,b=1-3/y,g={x:v.x+b*(p.x-v.x),y:v.y+b*(p.y-v.y)},x=a.map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.floor(r),Math.floor(c))){var s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1];t(s);return{x:r,y:c,score:l({x:Math.floor(r),y:Math.floor(c)},[1,1,1],o)+C({x:r,y:c},g)}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}),M=y>=15&&x.length?x[0]:g;return{alignmentPattern:{x:M.x,y:M.y},bottomLeft:{x:h.x,y:h.y},dimension:m,topLeft:{x:v.x,y:v.y},topRight:{x:P.x,y:P.y}};var L}Object.defineProperty(e,"__esModule",{value:!0});var B=4,k=.5,u=1.5,C=function(o,e){return Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2))};e.locate=i}]).default}),self.addEventListener("message",function(o){var e=jsQR(o.data.data,o.data.width,o.data.height);e?postMessage(e.data):postMessage(null)});'], {
            type: 'application/javascript'
        }),
        s = [
            'delay',
            'legacyMode',
            'facingMode'
        ];
    e.exports = (h = g = function(t) {
        function u(v) {
            ! function(w, x) {
                if (!(w instanceof x))
                    throw new TypeError('Cannot call a class as a function');
            }(this, u);
            var w = function(x, y) {
                if (!x)
                    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                return !y || 'object' != typeof y && 'function' != typeof y ? x : y;
            }(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, v));
            return w.els = {}, w.state = {
                mirrorVideo: !1
            }, w.initiate = w.initiate.bind(w), w.initiateLegacyMode = w.initiateLegacyMode.bind(w), w.check = w.check.bind(w), w.handleVideo = w.handleVideo.bind(w), w.handleLoadStart = w.handleLoadStart.bind(w), w.handleInputChange = w.handleInputChange.bind(w), w.clearComponent = w.clearComponent.bind(w), w.handleReaderLoad = w.handleReaderLoad.bind(w), w.openImageDialog = w.openImageDialog.bind(w), w.handleWorkerMessage = w.handleWorkerMessage.bind(w), w.setRefFactory = w.setRefFactory.bind(w), w;
        }
        return function(w, x) {
            if ('function' != typeof x && null !== x)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof x);
            w.prototype = Object.create(x && x.prototype, {
                constructor: {
                    value: w,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(w, x) : w.__proto__ = x);
        }(u, t), j(u, [{
                key: 'componentDidMount',
                value: function() {
                    this.worker = new Worker(URL.createObjectURL(r)), this.worker.onmessage = this.handleWorkerMessage, this.props.legacyMode ? this.initiateLegacyMode() : this.initiate();
                }
            },
            {
                key: 'componentWillReceiveProps',
                value: function(w) {
                    var x = p(this.props, w, s),
                        y = !0,
                        z = !1,
                        A = void 0;
                    try {
                        for (var B, C = x[Symbol.iterator](); !(y = (B = C.next()).done); y = !0) {
                            var D = B.value;
                            if ('facingMode' == D) {
                                this.clearComponent(), this.initiate(w);
                                break;
                            }
                            if ('delay' == D)
                                0 != this.props.delay || w.legacyMode || (this.timeout = setTimeout(this.check, w.delay)), 0 == w.delay && clearTimeout(this.timeout);
                            else if ('legacyMode' == D) {
                                this.props.legacyMode && !w.legacyMode ? (this.clearComponent(), this.initiate(w)) : (this.clearComponent(), this.componentDidUpdate = this.initiateLegacyMode);
                                break;
                            }
                        }
                    } catch (w) {
                        z = !0, A = w;
                    } finally {
                        try {
                            !y && C.return && C.return();
                        } finally {
                            if (z)
                                throw A;
                        }
                    }
                }
            },
            {
                key: 'shouldComponentUpdate',
                value: function(w, x) {
                    return x !== this.state || p(this.props, w, s).length > 0;
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
                    var w = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        x = w.onError,
                        y = w.facingMode,
                        z = /firefox/i.test(navigator.userAgent),
                        A = {};
                    navigator.mediaDevices && 'function' == typeof navigator.mediaDevices.getSupportedConstraints && (A = navigator.mediaDevices.getSupportedConstraints());
                    var B = {};
                    A.facingMode && (B.facingMode = {
                        ideal: y
                    }), A.frameRate && (B.frameRate = {
                        ideal: 25,
                        min: 10
                    });
                    var C = A.facingMode || z ? Promise.resolve(w.constraints || B) : o(y).then(function(D) {
                        return Object.assign({}, {
                            deviceId: D
                        }, w.constraints);
                    });
                    C.then(function(D) {
                        return navigator.mediaDevices.getUserMedia({
                            video: D
                        });
                    }).then(this.handleVideo).catch(x);
                }
            },
            {
                key: 'handleVideo',
                value: function(w) {
                    var x = this.els.preview,
                        y = this.props.facingMode;
                    if (!x)
                        return setTimeout(this.handleVideo, 200, w);
                    void 0 !== (x || {}).srcObject ? x.srcObject = w : void 0 !== x.mozSrcObject ? x.mozSrcObject = w : window.URL.createObjectURL ? x.src = window.URL.createObjectURL(w) : window.webkitURL ? x.src = window.webkitURL.createObjectURL(w) : x.src = w, x.playsInline = !0;
                    var z = w.getTracks()[0];
                    this.stopCamera = z.stop.bind(z), x.addEventListener('loadstart', this.handleLoadStart), this.setState({
                        mirrorVideo: 'user' == y,
                        streamLabel: z.label
                    });
                }
            },
            {
                key: 'handleLoadStart',
                value: function() {
                    var w = this.props,
                        x = w.delay,
                        y = w.onLoad,
                        z = this.state,
                        A = z.mirrorVideo,
                        B = z.streamLabel,
                        C = this.els.preview;
                    C.play(), 'function' == typeof y && y({
                        mirrorVideo: A,
                        streamLabel: B
                    }), 'number' == typeof x && (this.timeout = setTimeout(this.check, x)), C.removeEventListener('loadstart', this.handleLoadStart);
                }
            },
            {
                key: 'check',
                value: function() {
                    var w = this.props,
                        x = w.legacyMode,
                        y = w.resolution,
                        z = w.delay,
                        A = this.els,
                        B = A.preview,
                        C = A.canvas,
                        D = A.img,
                        E = Math.floor(x ? D.naturalWidth : B.videoWidth),
                        F = Math.floor(x ? D.naturalHeight : B.videoHeight),
                        G = 0,
                        H = 0;
                    if (x) {
                        var I = y / (E > F ? E : F);
                        F *= I, E *= I, C.width = E, C.height = F;
                    } else {
                        var J = y / (E < F ? E : F);
                        H = ((F *= J) - y) / 2 * -1, G = ((E *= J) - y) / 2 * -1, C.width = y, C.height = y;
                    }
                    var K = B && B.readyState === B.HAVE_ENOUGH_DATA;
                    if (x || K) {
                        var L = C.getContext('2d');
                        L.drawImage(x ? D : B, G, H, E, F);
                        var M = L.getImageData(0, 0, C.width, C.height);
                        this.worker.postMessage(M);
                    } else
                        this.timeout = setTimeout(this.check, z);
                }
            },
            {
                key: 'handleWorkerMessage',
                value: function(w) {
                    var x = this.props,
                        y = x.onScan,
                        z = x.legacyMode,
                        A = x.delay;
                    y(w.data || null), !z && 'number' == typeof A && this.worker && (this.timeout = setTimeout(this.check, A));
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
                value: function(w) {
                    var x = w.target.files[0];
                    this.reader.readAsDataURL(x);
                }
            },
            {
                key: 'handleReaderLoad',
                value: function(w) {
                    this.els.img.src = w.target.result;
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
                value: function(w) {
                    var x = this;
                    return function(y) {
                        x.els[w] = y;
                    };
                }
            },
            {
                key: 'render',
                value: function() {
                    var w = this.props,
                        x = w.style,
                        y = w.className,
                        z = w.onImageLoad,
                        A = w.legacyMode,
                        B = w.showViewFinder,
                        C = (w.facingMode, {
                            display: 'none'
                        }),
                        D = {
                            top: 0,
                            left: 0,
                            display: 'block',
                            position: 'absolute',
                            overflow: 'hidden',
                            width: '100%',
                            height: '100%'
                        },
                        E = i({}, D, {
                            objectFit: 'cover',
                            transform: this.state.mirrorVideo ? 'scaleX(-1)' : void 0
                        }),
                        F = i({}, D, {
                            objectFit: 'scale-down'
                        });
                    return k.createElement('section', {
                        className: y,
                        style: x
                    }, k.createElement('section', {
                        style: {
                            overflow: 'hidden',
                            position: 'relative',
                            width: '100%',
                            paddingTop: '100%'
                        }
                    }, !A && B ? k.createElement('div', {
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
                    }) : null, A ? k.createElement('input', {
                        style: C,
                        type: 'file',
                        accept: 'image/*',
                        ref: this.setRefFactory('input'),
                        onChange: this.handleInputChange
                    }) : null, A ? k.createElement('img', {
                        style: F,
                        ref: this.setRefFactory('img'),
                        onLoad: z
                    }) : k.createElement('video', {
                        style: E,
                        ref: this.setRefFactory('preview')
                    }), k.createElement('canvas', {
                        style: C,
                        ref: this.setRefFactory('canvas')
                    })));
                }
            }
        ]), u;
    }(l), g.propTypes = {
        onScan: m.func.isRequired,
        onError: m.func.isRequired,
        onLoad: m.func,
        onImageLoad: m.func,
        delay: m.oneOfType([
            m.number,
            m.bool
        ]),
        facingMode: m.oneOf([
            'user',
            'environment'
        ]),
        legacyMode: m.bool,
        resolution: m.number,
        showViewFinder: m.bool,
        style: m.any,
        className: m.string,
        constraints: m.object
    }, g.defaultProps = {
        delay: 500,
        resolution: 600,
        facingMode: 'environment',
        showViewFinder: !0,
        constraints: null
    }, h);
}), d.register('.....', function(e, f) {
    var g = d('.....').NoVideoInputDevicesError;

    function h(i, j, k) {
        return i.length > 0 ? i[0].deviceId : 1 == j.length || 'user' == k ? j[0].deviceId : j[1].deviceId;
    }
    var i = function(j) {
        return 'environment' == j ? /rear|back|environment/gi : /front|user|face/gi;
    };
    e.exports = {
        getDeviceId: function(j) {
            var k = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
            return new Promise(function(l, m) {
                var n = void 0;
                try {
                    n = navigator.mediaDevices.enumerateDevices();
                } catch (j) {
                    m(new g());
                }
                n.then(function(o) {
                    var p = o.filter(function(q) {
                        return 'videoinput' == q.kind;
                    });
                    if (p.length < 1)
                        m(new g());
                    else {
                        var q = i(j),
                            r = p.filter(function(s) {
                                var t = s.label;
                                return q.test(t);
                            });
                        l(k(r, p, j));
                    }
                });
            });
        },
        getFacingModePattern: i
    };
}), d.register('.....', function(e, f) {
    function g() {
        this.name = 'NoVideoInputDevicesError', this.message = 'No video input devices found';
    }
    g.prototype = new Error(), e.exports = {
        NoVideoInputDevicesError: g
    };
}), d.register('.....', function(e, f) {
    e.exports = function(g, h, i) {
        var j = [];
        return i.forEach(function(k) {
            g[k] != h[k] && j.push(k);
        }), j;
    };
}), d.register('.....', function(e, f) {
    e.exports = function(g, h) {
        g = g || [], h = h || {};
        try {
            return new Blob(g, h);
        } catch (n) {
            if ('TypeError' !== n.name)
                throw n;
            for (var i = new(window.BlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder)(), j = 0; j < g.length; j += 1)
                i.append(g[j]);
            return i.getBlob(h.type);
        }
    };
}), d.register('.....', function(e, f) {
    (0, d('.....').adapterFactory)({
        window: 'undefined' == typeof window ? void 0 : window
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'adapterFactory', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');

    function _m({
        window: n
    } = {}, o = {
        shimChrome: !0,
        shimFirefox: !0,
        shimEdge: !0,
        shimSafari: !0
    }) {
        const p = g.log,
            q = g.detectBrowser(n),
            r = {
                browserDetails: q,
                commonShim: l,
                extractVersion: g.extractVersion,
                disableLog: g.disableLog,
                disableWarnings: g.disableWarnings
            };
        switch (q.browser) {
            case 'chrome':
                if (!h || !h.shimPeerConnection || !o.shimChrome)
                    return p('Chrome shim is not included in this adapter release.'), _m;
                if (null === q.version)
                    return p('Chrome shim can not determine version, not shimming.'), _m;
                p('adapter.js shimming chrome.'), _m.browserShim = h, h.shimGetUserMedia(n), h.shimMediaStream(n), h.shimPeerConnection(n), h.shimOnTrack(n), h.shimAddTrackRemoveTrack(n), h.shimGetSendersWithDtmf(n), h.shimGetStats(n), h.shimSenderReceiverGetStats(n), h.fixNegotiationNeeded(n), l.shimRTCIceCandidate(n), l.shimConnectionState(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n), l.removeAllowExtmapMixed(n);
                break;
            case 'firefox':
                if (!j || !j.shimPeerConnection || !o.shimFirefox)
                    return p('Firefox shim is not included in this adapter release.'), _m;
                p('adapter.js shimming firefox.'), _m.browserShim = j, j.shimGetUserMedia(n), j.shimPeerConnection(n), j.shimOnTrack(n), j.shimRemoveStream(n), j.shimSenderGetStats(n), j.shimReceiverGetStats(n), j.shimRTCDataChannel(n), j.shimAddTransceiver(n), j.shimGetParameters(n), j.shimCreateOffer(n), j.shimCreateAnswer(n), l.shimRTCIceCandidate(n), l.shimConnectionState(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n);
                break;
            case 'edge':
                if (!i || !i.shimPeerConnection || !o.shimEdge)
                    return p('MS edge shim is not included in this adapter release.'), _m;
                p('adapter.js shimming edge.'), _m.browserShim = i, i.shimGetUserMedia(n), i.shimGetDisplayMedia(n), i.shimPeerConnection(n), i.shimReplaceTrack(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n);
                break;
            case 'safari':
                if (!k || !o.shimSafari)
                    return p('Safari shim is not included in this adapter release.'), _m;
                p('adapter.js shimming safari.'), _m.browserShim = k, k.shimRTCIceServerUrls(n), k.shimCreateOfferLegacy(n), k.shimCallbacksAPI(n), k.shimLocalStreamsAPI(n), k.shimRemoteStreamsAPI(n), k.shimTrackEventTransceiver(n), k.shimGetUserMedia(n), k.shimAudioContext(n), l.shimRTCIceCandidate(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n), l.removeAllowExtmapMixed(n);
                break;
            default:
                p('Unsupported browser!');
        }
        return _m;
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'extractVersion', function() {
        return _i;
    }), b(e.exports, 'wrapPeerConnectionEvent', function() {
        return _k;
    }), b(e.exports, 'disableLog', function() {
        return _o;
    }), b(e.exports, 'disableWarnings', function() {
        return _p;
    }), b(e.exports, 'log', function() {
        return _q;
    }), b(e.exports, 'deprecated', function() {
        return _r;
    }), b(e.exports, 'detectBrowser', function() {
        return _s;
    }), b(e.exports, 'compactObject', function() {
        return _w;
    }), b(e.exports, 'filterStats', function() {
        return _y;
    });
    let g = !0,
        h = !0;

    function _i(j, k, l) {
        const m = j.match(k);
        return g && g.length >= l && parseInt(g[l], 10);
    }

    function _k(l, m, n) {
        if (!l.RTCPeerConnection)
            return;
        const o = l.RTCPeerConnection.prototype,
            p = g.addEventListener;
        g.addEventListener = function(q, r) {
            if (q !== m)
                return h.apply(this, arguments);
            const s = t => {
                const u = n(t);
                u && (r.handleEvent ? r.handleEvent(u) : r(u));
            };
            return this._eventMap = this._eventMap || {}, this._eventMap[m] || (this._eventMap[m] = new Map()), this._eventMap[m].set(r, s), h.apply(this, [
                q,
                s
            ]);
        };
        const q = g.removeEventListener;
        g.removeEventListener = function(r, s) {
            if (r !== m || !this._eventMap || !this._eventMap[m])
                return _i.apply(this, arguments);
            if (!this._eventMap[m].has(s))
                return _i.apply(this, arguments);
            const t = this._eventMap[m].get(s);
            return this._eventMap[m].delete(s), 0 === this._eventMap[m].size && delete this._eventMap[m], 0 === Object.keys(this._eventMap).length && delete this._eventMap, _i.apply(this, [
                r,
                t
            ]);
        }, Object.defineProperty(g, 'on' + m, {
            get() {
                return this['_on' + m];
            },
            set(r) {
                this['_on' + m] && (this.removeEventListener(m, this['_on' + m]), delete this['_on' + m]), r && this.addEventListener(m, this['_on' + m] = r);
            },
            enumerable: !0,
            configurable: !0
        });
    }

    function _o(p) {
        return 'boolean' != typeof p ? new Error('Argument type: ' + typeof p + '. Please use a boolean.') : (g = p, p ? 'adapter.js logging disabled' : 'adapter.js logging enabled');
    }

    function _p(q) {
        return 'boolean' != typeof q ? new Error('Argument type: ' + typeof q + '. Please use a boolean.') : (h = !q, 'adapter.js deprecation warnings ' + (q ? 'disabled' : 'enabled'));
    }

    function _q() {
        if ('object' == typeof window) {
            if (g)
                return;
            'undefined' != typeof console && 'function' == typeof console.log && console.log.apply(console, arguments);
        }
    }

    function _r(s, t) {
        h && console.warn(s + ' is deprecated, please use ' + t + ' instead.');
    }

    function _s(t) {
        const u = {
            browser: null,
            version: null
        };
        if (void 0 === t || !t.navigator)
            return u.browser = 'Not a browser.', u;
        const {
            navigator: v
        } = t;
        if (v.mozGetUserMedia)
            u.browser = 'firefox', u.version = _i(v.userAgent, /Firefox\/(\d+)\./, 1);
        else if (v.webkitGetUserMedia || !1 === t.isSecureContext && t.webkitRTCPeerConnection && !t.RTCIceGatherer)
            u.browser = 'chrome', u.version = _i(v.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
        else if (v.mediaDevices && v.userAgent.match(/Edge\/(\d+).(\d+)$/))
            u.browser = 'edge', u.version = _i(v.userAgent, /Edge\/(\d+).(\d+)$/, 2);
        else {
            if (!t.RTCPeerConnection || !v.userAgent.match(/AppleWebKit\/(\d+)\./))
                return u.browser = 'Not a supported browser.', u;
            u.browser = 'safari', u.version = _i(v.userAgent, /AppleWebKit\/(\d+)\./, 1), u.supportsUnifiedPlan = t.RTCRtpTransceiver && 'currentDirection' in t.RTCRtpTransceiver.prototype;
        }
        return u;
    }

    function v(w) {
        return '[object Object]' === Object.prototype.toString.call(w);
    }

    function _w(x) {
        return v(x) ? Object.keys(x).reduce(function(y, z) {
            const A = v(x[z]),
                B = A ? _w(x[z]) : x[z],
                C = A && !Object.keys(B).length;
            return void 0 === B || C ? y : Object.assign(y, {
                [z]: B
            });
        }, {}) : x;
    }

    function x(y, z, A) {
        z && !A.has(z.id) && (A.set(z.id, z), Object.keys(z).forEach(B => {
            B.endsWith('Id') ? x(y, y.get(z[B]), A) : B.endsWith('Ids') && z[B].forEach(C => {
                x(y, y.get(C), A);
            });
        }));
    }

    function _y(z, A, B) {
        const C = B ? 'outbound-rtp' : 'inbound-rtp',
            D = new Map();
        if (null === A)
            return h;
        const E = [];
        return z.forEach(F => {
            'track' === F.type && F.trackIdentifier === A.id && _i.push(F);
        }), _i.forEach(F => {
            z.forEach(G => {
                G.type === g && G.trackId === F.id && x(z, G, h);
            });
        }), h;
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'shimMediaStream', function() {
        return _h;
    }), b(e.exports, 'shimOnTrack', function() {
        return _i;
    }), b(e.exports, 'shimGetSendersWithDtmf', function() {
        return _k;
    }), b(e.exports, 'shimGetStats', function() {
        return _r;
    }), b(e.exports, 'shimSenderReceiverGetStats', function() {
        return _t;
    }), b(e.exports, 'shimAddTrackRemoveTrackWithNative', function() {
        return _y;
    }), b(e.exports, 'shimAddTrackRemoveTrack', function() {
        return _D;
    }), b(e.exports, 'shimPeerConnection', function() {
        return _K;
    }), b(e.exports, 'fixNegotiationNeeded', function() {
        return _O;
    }), b(e.exports, 'shimGetUserMedia', function() {
        return d('.....').shimGetUserMedia;
    }), b(e.exports, 'shimGetDisplayMedia', function() {
        return d('.....').shimGetDisplayMedia;
    });
    var g = d('.....');
    d('.....'), d('.....');

    function _h(i) {
        i.MediaStream = i.MediaStream || i.webkitMediaStream;
    }

    function _i(j) {
        if ('object' == typeof j && j.RTCPeerConnection && !('ontrack' in j.RTCPeerConnection.prototype)) {
            Object.defineProperty(j.RTCPeerConnection.prototype, 'ontrack', {
                get() {
                    return this._ontrack;
                },
                set(k) {
                    this._ontrack && this.removeEventListener('track', this._ontrack), this.addEventListener('track', this._ontrack = k);
                },
                enumerable: !0,
                configurable: !0
            });
            const k = j.RTCPeerConnection.prototype.setRemoteDescription;
            j.RTCPeerConnection.prototype.setRemoteDescription = function() {
                return this._ontrackpoly || (this._ontrackpoly = l => {
                    l.stream.addEventListener('addtrack', m => {
                        let n;
                        n = j.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(o => o.track && o.track.id === m.track.id) : {
                            track: m.track
                        };
                        const o = new Event('track');
                        o.track = m.track, o.receiver = n, o.transceiver = {
                            receiver: n
                        }, o.streams = [l.stream], this.dispatchEvent(o);
                    }), l.stream.getTracks().forEach(m => {
                        let n;
                        n = j.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(o => o.track && o.track.id === m.id) : {
                            track: m
                        };
                        const o = new Event('track');
                        o.track = m, o.receiver = n, o.transceiver = {
                            receiver: n
                        }, o.streams = [l.stream], this.dispatchEvent(o);
                    });
                }, this.addEventListener('addstream', this._ontrackpoly)), k.apply(this, arguments);
            };
        } else
            g.wrapPeerConnectionEvent(j, 'track', l => (l.transceiver || Object.defineProperty(l, 'transceiver', {
                value: {
                    receiver: l.receiver
                }
            }), l));
    }

    function _k(l) {
        if ('object' == typeof l && l.RTCPeerConnection && !('getSenders' in l.RTCPeerConnection.prototype) && 'createDTMFSender' in l.RTCPeerConnection.prototype) {
            const m = function(n, o) {
                return {
                    track: o,
                    get dtmf() {
                        return void 0 === this._dtmf && ('audio' === o.kind ? this._dtmf = n.createDTMFSender(o) : this._dtmf = null), this._dtmf;
                    },
                    _pc: n
                };
            };
            if (!l.RTCPeerConnection.prototype.getSenders) {
                l.RTCPeerConnection.prototype.getSenders = function() {
                    return this._senders = this._senders || [], this._senders.slice();
                };
                const n = l.RTCPeerConnection.prototype.addTrack;
                l.RTCPeerConnection.prototype.addTrack = function(o, p) {
                    let q = n.apply(this, arguments);
                    return q || (q = m(this, o), this._senders.push(q)), q;
                };
                const o = l.RTCPeerConnection.prototype.removeTrack;
                l.RTCPeerConnection.prototype.removeTrack = function(p) {
                    o.apply(this, arguments);
                    const q = this._senders.indexOf(p); -
                    1 !== q && this._senders.splice(q, 1);
                };
            }
            const p = l.RTCPeerConnection.prototype.addStream;
            l.RTCPeerConnection.prototype.addStream = function(q) {
                this._senders = this._senders || [], p.apply(this, [q]), q.getTracks().forEach(r => {
                    this._senders.push(m(this, r));
                });
            };
            const q = l.RTCPeerConnection.prototype.removeStream;
            l.RTCPeerConnection.prototype.removeStream = function(r) {
                this._senders = this._senders || [], q.apply(this, [r]), r.getTracks().forEach(s => {
                    const t = this._senders.find(u => u.track === s);
                    t && this._senders.splice(this._senders.indexOf(t), 1);
                });
            };
        } else if ('object' == typeof l && l.RTCPeerConnection && 'getSenders' in l.RTCPeerConnection.prototype && 'createDTMFSender' in l.RTCPeerConnection.prototype && l.RTCRtpSender && !('dtmf' in l.RTCRtpSender.prototype)) {
            const r = l.RTCPeerConnection.prototype.getSenders;
            l.RTCPeerConnection.prototype.getSenders = function() {
                const s = r.apply(this, []);
                return s.forEach(t => t._pc = this), s;
            }, Object.defineProperty(l.RTCRtpSender.prototype, 'dtmf', {
                get() {
                    return void 0 === this._dtmf && ('audio' === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
                }
            });
        }
    }

    function _r(s) {
        if (!s.RTCPeerConnection)
            return;
        const t = s.RTCPeerConnection.prototype.getStats;
        s.RTCPeerConnection.prototype.getStats = function() {
            const [u, v, w] = arguments;
            if (arguments.length > 0 && 'function' == typeof u)
                return t.apply(this, arguments);
            if (0 === t.length && (0 === arguments.length || 'function' != typeof u))
                return t.apply(this, []);
            const x = function(y) {
                    const z = {};
                    return y.result().forEach(A => {
                        const B = {
                            id: A.id,
                            timestamp: A.timestamp,
                            type: {
                                localcandidate: 'local-candidate',
                                remotecandidate: 'remote-candidate'
                            } [A.type] || A.type
                        };
                        A.names().forEach(C => {
                            B[C] = A.stat(C);
                        }), z[B.id] = B;
                    }), z;
                },
                y = function(z) {
                    return new Map(Object.keys(z).map(A => [
                        A,
                        z[A]
                    ]));
                };
            if (arguments.length >= 2) {
                const z = function(A) {
                    v(y(x(A)));
                };
                return t.apply(this, [
                    w,
                    u
                ]);
            }
            return new Promise((A, B) => {
                t.apply(this, [
                    function(C) {
                        A(y(x(C)));
                    },
                    B
                ]);
            }).then(v, w);
        };
    }

    function _t(u) {
        if (!('object' == typeof u && u.RTCPeerConnection && u.RTCRtpSender && u.RTCRtpReceiver))
            return;
        if (!('getStats' in u.RTCRtpSender.prototype)) {
            const v = u.RTCPeerConnection.prototype.getSenders;
            v && (u.RTCPeerConnection.prototype.getSenders = function() {
                const w = v.apply(this, []);
                return w.forEach(x => x._pc = this), w;
            });
            const w = u.RTCPeerConnection.prototype.addTrack;
            w && (u.RTCPeerConnection.prototype.addTrack = function() {
                const x = w.apply(this, arguments);
                return x._pc = this, x;
            }), u.RTCRtpSender.prototype.getStats = function() {
                const x = this;
                return this._pc.getStats().then(y => g.filterStats(y, x.track, !0));
            };
        }
        if (!('getStats' in u.RTCRtpReceiver.prototype)) {
            const x = u.RTCPeerConnection.prototype.getReceivers;
            x && (u.RTCPeerConnection.prototype.getReceivers = function() {
                const y = x.apply(this, []);
                return y.forEach(z => z._pc = this), y;
            }), g.wrapPeerConnectionEvent(u, 'track', y => (y.receiver._pc = y.srcElement, y)), u.RTCRtpReceiver.prototype.getStats = function() {
                const y = this;
                return this._pc.getStats().then(z => g.filterStats(z, y.track, !1));
            };
        }
        if (!('getStats' in u.RTCRtpSender.prototype) || !('getStats' in u.RTCRtpReceiver.prototype))
            return;
        const y = u.RTCPeerConnection.prototype.getStats;
        u.RTCPeerConnection.prototype.getStats = function() {
            if (arguments.length > 0 && arguments[0] instanceof u.MediaStreamTrack) {
                const z = arguments[0];
                let A, B, C;
                return this.getSenders().forEach(D => {
                    D.track === z && (A ? C = !0 : A = D);
                }), this.getReceivers().forEach(D => (D.track === z && (B ? C = !0 : B = D), D.track === z)), C || A && B ? Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError')) : A ? A.getStats() : B ? B.getStats() : Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
            }
            return y.apply(this, arguments);
        };
    }

    function _y(z) {
        z.RTCPeerConnection.prototype.getLocalStreams = function() {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(A => this._shimmedLocalStreams[A][0]);
        };
        const A = z.RTCPeerConnection.prototype.addTrack;
        z.RTCPeerConnection.prototype.addTrack = function(B, C) {
            if (!C)
                return A.apply(this, arguments);
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            const D = A.apply(this, arguments);
            return this._shimmedLocalStreams[C.id] ? -1 === this._shimmedLocalStreams[C.id].indexOf(D) && this._shimmedLocalStreams[C.id].push(D) : this._shimmedLocalStreams[C.id] = [
                C,
                D
            ], D;
        };
        const B = z.RTCPeerConnection.prototype.addStream;
        z.RTCPeerConnection.prototype.addStream = function(C) {
            this._shimmedLocalStreams = this._shimmedLocalStreams || {}, C.getTracks().forEach(D => {
                if (this.getSenders().find(E => E.track === D))
                    throw new DOMException('Track already exists.', 'InvalidAccessError');
            });
            const D = this.getSenders();
            B.apply(this, arguments);
            const E = this.getSenders().filter(F => -1 === D.indexOf(F));
            this._shimmedLocalStreams[C.id] = [C].concat(E);
        };
        const C = z.RTCPeerConnection.prototype.removeStream;
        z.RTCPeerConnection.prototype.removeStream = function(D) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[D.id], C.apply(this, arguments);
        };
        const D = z.RTCPeerConnection.prototype.removeTrack;
        z.RTCPeerConnection.prototype.removeTrack = function(E) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, E && Object.keys(this._shimmedLocalStreams).forEach(F => {
                const G = this._shimmedLocalStreams[F].indexOf(E); -
                1 !== G && this._shimmedLocalStreams[F].splice(G, 1), 1 === this._shimmedLocalStreams[F].length && delete this._shimmedLocalStreams[F];
            }), D.apply(this, arguments);
        };
    }

    function _D(E) {
        if (!E.RTCPeerConnection)
            return;
        const F = D.detectBrowser(E);
        if (E.RTCPeerConnection.prototype.addTrack && F.version >= 65)
            return _y(E);
        const G = E.RTCPeerConnection.prototype.getLocalStreams;
        E.RTCPeerConnection.prototype.getLocalStreams = function() {
            const H = G.apply(this);
            return this._reverseStreams = this._reverseStreams || {}, H.map(I => this._reverseStreams[I.id]);
        };
        const H = E.RTCPeerConnection.prototype.addStream;
        E.RTCPeerConnection.prototype.addStream = function(I) {
            if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, I.getTracks().forEach(J => {
                    if (this.getSenders().find(K => K.track === J))
                        throw new DOMException('Track already exists.', 'InvalidAccessError');
                }), !this._reverseStreams[I.id]) {
                const J = new E.MediaStream(I.getTracks());
                this._streams[I.id] = J, this._reverseStreams[J.id] = I, I = J;
            }
            H.apply(this, [I]);
        };
        const I = E.RTCPeerConnection.prototype.removeStream;

        function J(K, L) {
            let M = L.sdp;
            return Object.keys(K._reverseStreams || []).forEach(N => {
                const O = K._reverseStreams[N],
                    P = K._streams[O.id];
                M = M.replace(new RegExp(P.id, 'g'), O.id);
            }), new RTCSessionDescription({
                type: L.type,
                sdp: M
            });
        }

        function K(L, M) {
            let N = M.sdp;
            return Object.keys(L._reverseStreams || []).forEach(O => {
                const P = L._reverseStreams[O],
                    Q = L._streams[P.id];
                N = N.replace(new RegExp(P.id, 'g'), Q.id);
            }), new RTCSessionDescription({
                type: M.type,
                sdp: N
            });
        }
        E.RTCPeerConnection.prototype.removeStream = function(L) {
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, _h.apply(this, [this._streams[L.id] || L]), delete this._reverseStreams[this._streams[L.id] ? this._streams[L.id].id : L.id], delete this._streams[L.id];
        }, E.RTCPeerConnection.prototype.addTrack = function(L, M) {
            if ('closed' === this.signalingState)
                throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            const N = [].slice.call(arguments, 1);
            if (1 !== N.length || !N[0].getTracks().find(O => O === L))
                throw new DOMException('The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.', 'NotSupportedError');
            const O = this.getSenders().find(P => P.track === L);
            if (O)
                throw new DOMException('Track already exists.', 'InvalidAccessError');
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
            const P = this._streams[M.id];
            if (P)
                P.addTrack(L), Promise.resolve().then(() => {
                    this.dispatchEvent(new Event('negotiationneeded'));
                });
            else {
                const Q = new E.MediaStream([L]);
                this._streams[M.id] = Q, this._reverseStreams[Q.id] = M, this.addStream(Q);
            }
            return this.getSenders().find(R => R.track === L);
        }, [
            'createOffer',
            'createAnswer'
        ].forEach(function(L) {
            const M = E.RTCPeerConnection.prototype[L],
                N = {
                    [L]() {
                        const O = arguments;
                        return arguments.length && 'function' == typeof arguments[0] ? M.apply(this, [
                            P => {
                                const Q = J(this, P);
                                O[0].apply(null, [Q]);
                            },
                            P => {
                                O[1] && O[1].apply(null, P);
                            },
                            arguments[2]
                        ]) : M.apply(this, arguments).then(P => J(this, P));
                    }
                };
            E.RTCPeerConnection.prototype[L] = N[L];
        });
        const L = E.RTCPeerConnection.prototype.setLocalDescription;
        E.RTCPeerConnection.prototype.setLocalDescription = function() {
            return arguments.length && arguments[0].type ? (arguments[0] = K(this, arguments[0]), _r.apply(this, arguments)) : _r.apply(this, arguments);
        };
        const M = Object.getOwnPropertyDescriptor(E.RTCPeerConnection.prototype, 'localDescription');
        Object.defineProperty(E.RTCPeerConnection.prototype, 'localDescription', {
            get() {
                const N = _t.get.apply(this);
                return '' === N.type ? N : J(this, N);
            }
        }), E.RTCPeerConnection.prototype.removeTrack = function(N) {
            if ('closed' === this.signalingState)
                throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            if (!N._pc)
                throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.', 'TypeError');
            if (!(N._pc === this))
                throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
            let O;
            this._streams = this._streams || {}, Object.keys(this._streams).forEach(P => {
                this._streams[P].getTracks().find(Q => N.track === Q) && (O = this._streams[P]);
            }), O && (1 === O.getTracks().length ? this.removeStream(this._reverseStreams[O.id]) : O.removeTrack(N.track), this.dispatchEvent(new Event('negotiationneeded')));
        };
    }

    function _K(L) {
        const M = D.detectBrowser(L);
        if (!L.RTCPeerConnection && L.webkitRTCPeerConnection && (L.RTCPeerConnection = L.webkitRTCPeerConnection), !L.RTCPeerConnection)
            return;
        const N = 0 === L.RTCPeerConnection.prototype.addIceCandidate.length;
        M.version < 53 && [
            'setLocalDescription',
            'setRemoteDescription',
            'addIceCandidate'
        ].forEach(function(O) {
            const P = L.RTCPeerConnection.prototype[O],
                Q = {
                    [O]() {
                        return arguments[0] = new('addIceCandidate' === O ? L.RTCIceCandidate : L.RTCSessionDescription)(arguments[0]), P.apply(this, arguments);
                    }
                };
            L.RTCPeerConnection.prototype[O] = Q[O];
        });
        const O = L.RTCPeerConnection.prototype.addIceCandidate;
        L.RTCPeerConnection.prototype.addIceCandidate = function() {
            return N || arguments[0] ? M.version < 78 && arguments[0] && '' === arguments[0].candidate ? Promise.resolve() : O.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
        };
    }

    function _O(P) {
        const Q = D.detectBrowser(P);
        D.wrapPeerConnectionEvent(P, 'negotiationneeded', R => {
            const S = R.target;
            if (!(Q.version < 72 || S.getConfiguration && 'plan-b' === S.getConfiguration().sdpSemantics) || 'stable' === S.signalingState)
                return R;
        });
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'shimGetUserMedia', function() {
        return _i;
    });
    var g = d('.....');
    const h = g.log;

    function _i(j) {
        const k = j && j.navigator;
        if (!k.mediaDevices)
            return;
        const l = g.detectBrowser(j),
            m = function(n) {
                if ('object' != typeof n || n.mandatory || n.optional)
                    return n;
                const o = {};
                return Object.keys(n).forEach(p => {
                    if ('require' === p || 'advanced' === p || 'mediaSource' === p)
                        return;
                    const q = 'object' == typeof n[p] ? n[p] : {
                        ideal: n[p]
                    };
                    void 0 !== q.exact && 'number' == typeof q.exact && (q.min = q.max = q.exact);
                    const r = function(s, t) {
                        return s ? s + t.charAt(0).toUpperCase() + t.slice(1) : 'deviceId' === t ? 'sourceId' : t;
                    };
                    if (void 0 !== q.ideal) {
                        o.optional = o.optional || [];
                        let s = {};
                        'number' == typeof q.ideal ? (s[r('min', p)] = q.ideal, o.optional.push(s), s = {}, s[r('max', p)] = q.ideal, o.optional.push(s)) : (s[r('', p)] = q.ideal, o.optional.push(s));
                    }
                    void 0 !== q.exact && 'number' != typeof q.exact ? (o.mandatory = o.mandatory || {}, o.mandatory[r('', p)] = q.exact) : [
                        'min',
                        'max'
                    ].forEach(s => {
                        void 0 !== q[s] && (o.mandatory = o.mandatory || {}, o.mandatory[r(s, p)] = q[s]);
                    });
                }), n.advanced && (o.optional = (o.optional || []).concat(n.advanced)), o;
            },
            n = function(o, p) {
                if (l.version >= 61)
                    return p(o);
                if ((o = JSON.parse(JSON.stringify(o))) && 'object' == typeof o.audio) {
                    const q = function(r, s, t) {
                        s in r && !(t in r) && (r[t] = r[s], delete r[s]);
                    };
                    q((o = JSON.parse(JSON.stringify(o))).audio, 'autoGainControl', 'googAutoGainControl'), q(o.audio, 'noiseSuppression', 'googNoiseSuppression'), o.audio = m(o.audio);
                }
                if (o && 'object' == typeof o.video) {
                    let r = o.video.facingMode;
                    r = r && ('object' == typeof r ? r : {
                        ideal: r
                    });
                    const s = l.version < 66;
                    if (r && ('user' === r.exact || 'environment' === r.exact || 'user' === r.ideal || 'environment' === r.ideal) && (!q.mediaDevices.getSupportedConstraints || !q.mediaDevices.getSupportedConstraints().facingMode || s)) {
                        let t;
                        if (delete o.video.facingMode, 'environment' === r.exact || 'environment' === r.ideal ? t = [
                                'back',
                                'rear'
                            ] : 'user' !== r.exact && 'user' !== r.ideal || (t = ['front']), t)
                            return q.mediaDevices.enumerateDevices().then(u => {
                                let v = (u = u.filter(w => 'videoinput' === w.kind)).find(w => t.some(x => w.label.toLowerCase().includes(x)));
                                return !v && u.length && t.includes('back') && (v = u[u.length - 1]), v && (o.video.deviceId = r.exact ? {
                                    exact: v.deviceId
                                } : {
                                    ideal: v.deviceId
                                }), o.video = m(o.video), h('chrome: ' + JSON.stringify(o)), p(o);
                            });
                    }
                    o.video = m(o.video);
                }
                return h('chrome: ' + JSON.stringify(o)), p(o);
            },
            o = function(p) {
                return l.version >= 64 ? p : {
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
                    } [p.name] || p.name,
                    message: p.message,
                    constraint: p.constraint || p.constraintName,
                    toString() {
                        return this.name + (this.message && ': ') + this.message;
                    }
                };
            };
        if (k.getUserMedia = function(p, q, r) {
                _i(p, s => {
                    k.webkitGetUserMedia(s, q, t => {
                        r && r(o(t));
                    });
                });
            }.bind(k), k.mediaDevices.getUserMedia) {
            const p = k.mediaDevices.getUserMedia.bind(k.mediaDevices);
            k.mediaDevices.getUserMedia = function(q) {
                return _i(q, r => j(r).then(s => {
                    if (r.audio && !s.getAudioTracks().length || r.video && !s.getVideoTracks().length)
                        throw s.getTracks().forEach(t => {
                            t.stop();
                        }), new DOMException('', 'NotFoundError');
                    return s;
                }, s => Promise.reject(o(s))));
            };
        }
    }
}), d.register('.....', function(e, f) {
    function g(h, i) {
        h.navigator.mediaDevices && 'getDisplayMedia' in h.navigator.mediaDevices || h.navigator.mediaDevices && ('function' == typeof i ? h.navigator.mediaDevices.getDisplayMedia = function(j) {
            return i(j).then(k => {
                const l = j.video && j.video.width,
                    m = j.video && j.video.height,
                    n = j.video && j.video.frameRate;
                return j.video = {
                    mandatory: {
                        chromeMediaSource: 'desktop',
                        chromeMediaSourceId: k,
                        maxFrameRate: n || 3
                    }
                }, l && (j.video.mandatory.maxWidth = l), m && (j.video.mandatory.maxHeight = m), h.navigator.mediaDevices.getUserMedia(j);
            });
        } : console.error('shimGetDisplayMedia: getSourceId argument is not a function'));
    }
    b(e.exports, 'shimGetDisplayMedia', function() {
        return g;
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'shimPeerConnection', function() {
        return _j;
    }), b(e.exports, 'shimReplaceTrack', function() {
        return _n;
    }), b(e.exports, 'shimGetUserMedia', function() {
        return d('.....').shimGetUserMedia;
    }), b(e.exports, 'shimGetDisplayMedia', function() {
        return d('.....').shimGetDisplayMedia;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....'), d('.....');

    function _j(k) {
        const l = g.detectBrowser(k);
        if (k.RTCIceGatherer && (k.RTCIceCandidate || (k.RTCIceCandidate = function(m) {
                return m;
            }), k.RTCSessionDescription || (k.RTCSessionDescription = function(m) {
                return m;
            }), l.version < 15025)) {
            const m = Object.getOwnPropertyDescriptor(k.MediaStreamTrack.prototype, 'enabled');
            Object.defineProperty(k.MediaStreamTrack.prototype, 'enabled', {
                set(n) {
                    m.set.call(this, n);
                    const o = new Event('enabled');
                    o.enabled = n, this.dispatchEvent(o);
                }
            });
        }
        k.RTCRtpSender && !('dtmf' in k.RTCRtpSender.prototype) && Object.defineProperty(k.RTCRtpSender.prototype, 'dtmf', {
            get() {
                return void 0 === this._dtmf && ('audio' === this.track.kind ? this._dtmf = new k.RTCDtmfSender(this) : 'video' === this.track.kind && (this._dtmf = null)), this._dtmf;
            }
        }), k.RTCDtmfSender && !k.RTCDTMFSender && (k.RTCDTMFSender = k.RTCDtmfSender);
        const n = c(i)(k, m.version);
        k.RTCPeerConnection = function(o) {
            return o && o.iceServers && (o.iceServers = (0, h.filterIceServers)(o.iceServers, m.version), g.log('ICE servers after filtering:', o.iceServers)), new n(o);
        }, k.RTCPeerConnection.prototype = n.prototype;
    }

    function _n(o) {
        o.RTCRtpSender && !('replaceTrack' in o.RTCRtpSender.prototype) && (o.RTCRtpSender.prototype.replaceTrack = o.RTCRtpSender.prototype.setTrack);
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'filterIceServers', function() {
        return _h;
    });
    var g = d('.....');

    function _h(i, j) {
        let k = !1;
        return (i = JSON.parse(JSON.stringify(i))).filter(l => {
            if (l && (l.urls || l.url)) {
                let m = l.urls || l.url;
                l.url && !l.urls && g.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                const n = 'string' == typeof m;
                return n && (m = [m]), m = m.filter(o => {
                    if (0 === o.indexOf('stun:'))
                        return !1;
                    const p = o.startsWith('turn') && !o.startsWith('turn:[') && o.includes('transport=udp');
                    return p && !k ? (k = !0, !0) : p && !k;
                }), delete l.url, l.urls = n ? m[0] : m, !!m.length;
            }
        });
    }
}), d.register('.....', function(e, f) {
    var g = d('.....');

    function h(i, j, k, l, m) {
        var n = g.writeRtpDescription(i.kind, j);
        if (n += g.writeIceParameters(i.iceGatherer.getLocalParameters()), n += g.writeDtlsParameters(i.dtlsTransport.getLocalParameters(), 'offer' === k ? 'actpass' : m || 'active'), n += 'a=mid:' + i.mid + '\r\n', i.rtpSender && i.rtpReceiver ? n += 'a=sendrecv\r\n' : i.rtpSender ? n += 'a=sendonly\r\n' : i.rtpReceiver ? n += 'a=recvonly\r\n' : n += 'a=inactive\r\n', i.rtpSender) {
            var o = i.rtpSender._initialTrackId || i.rtpSender.track.id;
            i.rtpSender._initialTrackId = o;
            var p = 'msid:' + (l ? l.id : '-') + ' ' + o + '\r\n';
            n += 'a=' + p, n += 'a=ssrc:' + i.sendEncodingParameters[0].ssrc + ' ' + p, i.sendEncodingParameters[0].rtx && (n += 'a=ssrc:' + i.sendEncodingParameters[0].rtx.ssrc + ' ' + p, n += 'a=ssrc-group:FID ' + i.sendEncodingParameters[0].ssrc + ' ' + i.sendEncodingParameters[0].rtx.ssrc + '\r\n');
        }
        return n += 'a=ssrc:' + i.sendEncodingParameters[0].ssrc + ' cname:' + g.localCName + '\r\n', i.rtpSender && i.sendEncodingParameters[0].rtx && (n += 'a=ssrc:' + i.sendEncodingParameters[0].rtx.ssrc + ' cname:' + g.localCName + '\r\n'), n;
    }

    function l(m, n) {
        var o = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: []
            },
            p = function(q, r) {
                q = parseInt(q, 10);
                for (var s = 0; s < r.length; s++)
                    if (r[s].payloadType === q || r[s].preferredPayloadType === q)
                        return r[s];
            },
            q = function(r, s, t, u) {
                var v = p(r.parameters.apt, t),
                    w = p(s.parameters.apt, u);
                return v && w && v.name.toLowerCase() === w.name.toLowerCase();
            };
        return m.codecs.forEach(function(r) {
            for (var s = 0; s < n.codecs.length; s++) {
                var t = n.codecs[s];
                if (r.name.toLowerCase() === t.name.toLowerCase() && r.clockRate === t.clockRate) {
                    if ('rtx' === r.name.toLowerCase() && r.parameters && t.parameters.apt && !h(r, t, m.codecs, n.codecs))
                        continue;
                    (t = JSON.parse(JSON.stringify(t))).numChannels = Math.min(r.numChannels, t.numChannels), o.codecs.push(t), t.rtcpFeedback = t.rtcpFeedback.filter(function(u) {
                        for (var v = 0; v < r.rtcpFeedback.length; v++)
                            if (r.rtcpFeedback[v].type === u.type && r.rtcpFeedback[v].parameter === u.parameter)
                                return !0;
                        return !1;
                    });
                    break;
                }
            }
        }), m.headerExtensions.forEach(function(r) {
            for (var s = 0; s < n.headerExtensions.length; s++) {
                var t = n.headerExtensions[s];
                if (r.uri === t.uri) {
                    o.headerExtensions.push(t);
                    break;
                }
            }
        }), o;
    }

    function p(q, r, s) {
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
        } [r][q].indexOf(s);
    }

    function q(r, s) {
        var t = r.getRemoteCandidates().find(function(u) {
            return s.foundation === u.foundation && s.ip === u.ip && s.port === u.port && s.priority === u.priority && s.protocol === u.protocol && s.type === u.type;
        });
        return t || r.addRemoteCandidate(s), !t;
    }

    function s(t, u) {
        var v = new Error(u);
        return v.name = t, v.code = {
            NotSupportedError: 9,
            InvalidStateError: 11,
            InvalidAccessError: 15,
            TypeError: void 0,
            OperationError: void 0
        } [t], v;
    }
    e.exports = function(u, v) {
        function w(x, y) {
            y.addTrack(x), y.dispatchEvent(new u.MediaStreamTrackEvent('addtrack', {
                track: x
            }));
        }

        function x(y, z, A, B) {
            var C = new Event('track');
            C.track = z, C.receiver = A, C.transceiver = {
                receiver: A
            }, C.streams = B, u.setTimeout(function() {
                y._dispatchEvent('track', C);
            });
        }
        var z = function(A) {
            var B = this,
                C = document.createDocumentFragment();
            if ([
                    'addEventListener',
                    'removeEventListener',
                    'dispatchEvent'
                ].forEach(function(D) {
                    B[D] = C[D].bind(C);
                }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = 'stable', this.iceConnectionState = 'new', this.connectionState = 'new', this.iceGatheringState = 'new', A = JSON.parse(JSON.stringify(A || {})), this.usingBundle = 'max-bundle' === A.bundlePolicy, 'negotiate' === A.rtcpMuxPolicy)
                throw s('NotSupportedError', 'rtcpMuxPolicy \'negotiate\' is not supported');
            switch (A.rtcpMuxPolicy || (A.rtcpMuxPolicy = 'require'), A.iceTransportPolicy) {
                case 'all':
                case 'relay':
                    break;
                default:
                    A.iceTransportPolicy = 'all';
            }
            switch (A.bundlePolicy) {
                case 'balanced':
                case 'max-compat':
                case 'max-bundle':
                    break;
                default:
                    A.bundlePolicy = 'balanced';
            }
            if (A.iceServers = function(D, E) {
                    var F = !1;
                    return (D = JSON.parse(JSON.stringify(D))).filter(function(G) {
                        if (G && (G.urls || G.url)) {
                            var H = G.urls || G.url;
                            G.url && !G.urls && console.warn('RTCIceServer.url is deprecated! Use urls instead.');
                            var I = 'string' == typeof H;
                            return I && (H = [H]), H = H.filter(function(J) {
                                return 0 !== J.indexOf('turn:') || -1 === J.indexOf('transport=udp') || -1 !== J.indexOf('turn:[') || F ? 0 === J.indexOf('stun:') && E >= 14393 && -1 === J.indexOf('?transport=udp') : (F = !0, !0);
                            }), delete G.url, G.urls = I ? H[0] : H, !!H.length;
                        }
                    });
                }(A.iceServers || [], v), this._iceGatherers = [], A.iceCandidatePoolSize)
                for (var D = A.iceCandidatePoolSize; D > 0; D--)
                    this._iceGatherers.push(new u.RTCIceGatherer({
                        iceServers: A.iceServers,
                        gatherPolicy: A.iceTransportPolicy
                    }));
            else
                A.iceCandidatePoolSize = 0;
            this._config = A, this.transceivers = [], this._sdpSessionId = v.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1;
        };
        Object.defineProperty(z.prototype, 'localDescription', {
            configurable: !0,
            get: function() {
                return this._localDescription;
            }
        }), Object.defineProperty(z.prototype, 'remoteDescription', {
            configurable: !0,
            get: function() {
                return this._remoteDescription;
            }
        }), z.prototype.onicecandidate = null, z.prototype.onaddstream = null, z.prototype.ontrack = null, z.prototype.onremovestream = null, z.prototype.onsignalingstatechange = null, z.prototype.oniceconnectionstatechange = null, z.prototype.onconnectionstatechange = null, z.prototype.onicegatheringstatechange = null, z.prototype.onnegotiationneeded = null, z.prototype.ondatachannel = null, z.prototype._dispatchEvent = function(A, B) {
            this._isClosed || (this.dispatchEvent(B), 'function' == typeof this['on' + A] && this['on' + A](B));
        }, z.prototype._emitGatheringStateChange = function() {
            var A = new Event('icegatheringstatechange');
            this._dispatchEvent('icegatheringstatechange', A);
        }, z.prototype.getConfiguration = function() {
            return this._config;
        }, z.prototype.getLocalStreams = function() {
            return this.localStreams;
        }, z.prototype.getRemoteStreams = function() {
            return this.remoteStreams;
        }, z.prototype._createTransceiver = function(A, B) {
            var C = this.transceivers.length > 0,
                D = {
                    track: null,
                    iceGatherer: null,
                    iceTransport: null,
                    dtlsTransport: null,
                    localCapabilities: null,
                    remoteCapabilities: null,
                    rtpSender: null,
                    rtpReceiver: null,
                    kind: A,
                    mid: null,
                    sendEncodingParameters: null,
                    recvEncodingParameters: null,
                    stream: null,
                    associatedRemoteMediaStreams: [],
                    wantReceive: !0
                };
            if (this.usingBundle && C)
                D.iceTransport = this.transceivers[0].iceTransport, D.dtlsTransport = this.transceivers[0].dtlsTransport;
            else {
                var E = this._createIceAndDtlsTransports();
                D.iceTransport = E.iceTransport, D.dtlsTransport = E.dtlsTransport;
            }
            return B || this.transceivers.push(D), D;
        }, z.prototype.addTrack = function(A, B) {
            if (this._isClosed)
                throw s('InvalidStateError', 'Attempted to call addTrack on a closed peerconnection.');
            var C;
            if (this.transceivers.find(function(D) {
                    return D.track === A;
                }))
                throw s('InvalidAccessError', 'Track already exists.');
            for (var D = 0; D < this.transceivers.length; D++)
                this.transceivers[D].track || this.transceivers[D].kind !== A.kind || (C = this.transceivers[D]);
            return C || (C = this._createTransceiver(A.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(B) && this.localStreams.push(B), C.track = A, C.stream = B, C.rtpSender = new u.RTCRtpSender(A, C.dtlsTransport), C.rtpSender;
        }, z.prototype.addStream = function(A) {
            var B = this;
            if (v >= 15025)
                A.getTracks().forEach(function(C) {
                    B.addTrack(C, A);
                });
            else {
                var C = A.clone();
                A.getTracks().forEach(function(D, E) {
                    var F = C.getTracks()[E];
                    D.addEventListener('enabled', function(G) {
                        F.enabled = G.enabled;
                    });
                }), C.getTracks().forEach(function(D) {
                    B.addTrack(D, C);
                });
            }
        }, z.prototype.removeTrack = function(A) {
            if (this._isClosed)
                throw s('InvalidStateError', 'Attempted to call removeTrack on a closed peerconnection.');
            if (!(A instanceof u.RTCRtpSender))
                throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.');
            var B = this.transceivers.find(function(C) {
                return C.rtpSender === A;
            });
            if (!B)
                throw s('InvalidAccessError', 'Sender was not created by this connection.');
            var C = B.stream;
            B.rtpSender.stop(), B.rtpSender = null, B.track = null, B.stream = null, -1 === this.transceivers.map(function(D) {
                return D.stream;
            }).indexOf(C) && this.localStreams.indexOf(C) > -1 && this.localStreams.splice(this.localStreams.indexOf(C), 1), this._maybeFireNegotiationNeeded();
        }, z.prototype.removeStream = function(A) {
            var B = this;
            A.getTracks().forEach(function(C) {
                var D = B.getSenders().find(function(E) {
                    return E.track === C;
                });
                D && B.removeTrack(D);
            });
        }, z.prototype.getSenders = function() {
            return this.transceivers.filter(function(A) {
                return !!A.rtpSender;
            }).map(function(A) {
                return A.rtpSender;
            });
        }, z.prototype.getReceivers = function() {
            return this.transceivers.filter(function(A) {
                return !!A.rtpReceiver;
            }).map(function(A) {
                return A.rtpReceiver;
            });
        }, z.prototype._createIceGatherer = function(A, B) {
            var C = this;
            if (B && A > 0)
                return this.transceivers[0].iceGatherer;
            if (this._iceGatherers.length)
                return this._iceGatherers.shift();
            var D = new u.RTCIceGatherer({
                iceServers: this._config.iceServers,
                gatherPolicy: this._config.iceTransportPolicy
            });
            return Object.defineProperty(D, 'state', {
                value: 'new',
                writable: !0
            }), this.transceivers[A].bufferedCandidateEvents = [], this.transceivers[A].bufferCandidates = function(E) {
                var F = !E.candidate || 0 === Object.keys(E.candidate).length;
                D.state = F ? 'completed' : 'gathering', null !== C.transceivers[A].bufferedCandidateEvents && C.transceivers[A].bufferedCandidateEvents.push(E);
            }, D.addEventListener('localcandidate', this.transceivers[A].bufferCandidates), D;
        }, z.prototype._gather = function(A, B) {
            var C = this,
                D = this.transceivers[B].iceGatherer;
            if (!D.onlocalcandidate) {
                var E = this.transceivers[B].bufferedCandidateEvents;
                this.transceivers[B].bufferedCandidateEvents = null, D.removeEventListener('localcandidate', this.transceivers[B].bufferCandidates), D.onlocalcandidate = function(F) {
                    if (!(C.usingBundle && B > 0)) {
                        var G = new Event('icecandidate');
                        G.candidate = {
                            sdpMid: A,
                            sdpMLineIndex: B
                        };
                        var H = F.candidate,
                            I = !H || 0 === Object.keys(H).length;
                        if (I)
                            'new' !== D.state && 'gathering' !== D.state || (D.state = 'completed');
                        else {
                            'new' === D.state && (D.state = 'gathering'), H.component = 1, H.ufrag = D.getLocalParameters().usernameFragment;
                            var J = v.writeCandidate(H);
                            G.candidate = Object.assign(G.candidate, v.parseCandidate(J)), G.candidate.candidate = J, G.candidate.toJSON = function() {
                                return {
                                    candidate: G.candidate.candidate,
                                    sdpMid: G.candidate.sdpMid,
                                    sdpMLineIndex: G.candidate.sdpMLineIndex,
                                    usernameFragment: G.candidate.usernameFragment
                                };
                            };
                        }
                        var K = v.getMediaSections(C._localDescription.sdp);
                        K[G.candidate.sdpMLineIndex] += I ? 'a=end-of-candidates\r\n' : 'a=' + G.candidate.candidate + '\r\n', C._localDescription.sdp = v.getDescription(C._localDescription.sdp) + K.join('');
                        var L = C.transceivers.every(function(M) {
                            return M.iceGatherer && 'completed' === M.iceGatherer.state;
                        });
                        'gathering' !== C.iceGatheringState && (C.iceGatheringState = 'gathering', C._emitGatheringStateChange()), I || C._dispatchEvent('icecandidate', G), L && (C._dispatchEvent('icecandidate', new Event('icecandidate')), C.iceGatheringState = 'complete', C._emitGatheringStateChange());
                    }
                }, u.setTimeout(function() {
                    E.forEach(function(F) {
                        D.onlocalcandidate(F);
                    });
                }, 0);
            }
        }, z.prototype._createIceAndDtlsTransports = function() {
            var A = this,
                B = new u.RTCIceTransport(null);
            B.onicestatechange = function() {
                A._updateIceConnectionState(), A._updateConnectionState();
            };
            var C = new u.RTCDtlsTransport(B);
            return C.ondtlsstatechange = function() {
                A._updateConnectionState();
            }, C.onerror = function() {
                Object.defineProperty(C, 'state', {
                    value: 'failed',
                    writable: !0
                }), A._updateConnectionState();
            }, {
                iceTransport: B,
                dtlsTransport: C
            };
        }, z.prototype._disposeIceAndDtlsTransports = function(A) {
            var B = this.transceivers[A].iceGatherer;
            B && (delete B.onlocalcandidate, delete this.transceivers[A].iceGatherer);
            var C = this.transceivers[A].iceTransport;
            C && (delete C.onicestatechange, delete this.transceivers[A].iceTransport);
            var D = this.transceivers[A].dtlsTransport;
            D && (delete D.ondtlsstatechange, delete D.onerror, delete this.transceivers[A].dtlsTransport);
        }, z.prototype._transceive = function(A, B, C) {
            var D = C(A.localCapabilities, A.remoteCapabilities);
            B && A.rtpSender && (D.encodings = A.sendEncodingParameters, D.rtcp = {
                cname: v.localCName,
                compound: A.rtcpParameters.compound
            }, A.recvEncodingParameters.length && (D.rtcp.ssrc = A.recvEncodingParameters[0].ssrc), A.rtpSender.send(D)), C && A.rtpReceiver && D.codecs.length > 0 && ('video' === A.kind && A.recvEncodingParameters && v < 15019 && A.recvEncodingParameters.forEach(function(E) {
                delete E.rtx;
            }), A.recvEncodingParameters.length ? D.encodings = A.recvEncodingParameters : D.encodings = [{}], D.rtcp = {
                compound: A.rtcpParameters.compound
            }, A.rtcpParameters.cname && (D.rtcp.cname = A.rtcpParameters.cname), A.sendEncodingParameters.length && (D.rtcp.ssrc = A.sendEncodingParameters[0].ssrc), A.rtpReceiver.receive(D));
        }, z.prototype.setLocalDescription = function(A) {
            var B, C, D = this;
            if (-1 === [
                    'offer',
                    'answer'
                ].indexOf(A.type))
                return Promise.reject(s('TypeError', 'Unsupported type "' + A.type + '"'));
            if (!p('setLocalDescription', A.type, D.signalingState) || D._isClosed)
                return Promise.reject(s('InvalidStateError', 'Can not set local ' + A.type + ' in state ' + D.signalingState));
            if ('offer' === A.type)
                B = v.splitSections(A.sdp), C = B.shift(), B.forEach(function(E, F) {
                    var G = v.parseRtpParameters(E);
                    D.transceivers[F].localCapabilities = G;
                }), D.transceivers.forEach(function(E, F) {
                    D._gather(E.mid, F);
                });
            else if ('answer' === A.type) {
                B = v.splitSections(D._remoteDescription.sdp), C = B.shift();
                var E = v.matchPrefix(C, 'a=ice-lite').length > 0;
                B.forEach(function(F, G) {
                    var H = D.transceivers[G],
                        I = H.iceGatherer,
                        J = H.iceTransport,
                        K = H.dtlsTransport,
                        L = H.localCapabilities,
                        M = H.remoteCapabilities;
                    if (!(v.isRejected(F) && 0 === v.matchPrefix(F, 'a=bundle-only').length) && !H.rejected) {
                        var N = v.getIceParameters(F, C),
                            O = v.getDtlsParameters(F, C);
                        E && (O.role = 'server'), D.usingBundle && 0 !== G || (D._gather(H.mid, G), 'new' === J.state && J.start(I, N, E ? 'controlling' : 'controlled'), 'new' === K.state && K.start(O));
                        var P = C(L, M);
                        D._transceive(H, P.codecs.length > 0, !1);
                    }
                });
            }
            return D._localDescription = {
                type: A.type,
                sdp: A.sdp
            }, 'offer' === A.type ? D._updateSignalingState('have-local-offer') : D._updateSignalingState('stable'), Promise.resolve();
        }, z.prototype.setRemoteDescription = function(A) {
            var B = this;
            if (-1 === [
                    'offer',
                    'answer'
                ].indexOf(A.type))
                return Promise.reject(s('TypeError', 'Unsupported type "' + A.type + '"'));
            if (!p('setRemoteDescription', A.type, B.signalingState) || B._isClosed)
                return Promise.reject(s('InvalidStateError', 'Can not set remote ' + A.type + ' in state ' + B.signalingState));
            var C = {};
            B.remoteStreams.forEach(function(D) {
                C[D.id] = D;
            });
            var D = [],
                E = v.splitSections(A.sdp),
                F = E.shift(),
                G = v.matchPrefix(F, 'a=ice-lite').length > 0,
                H = v.matchPrefix(F, 'a=group:BUNDLE ').length > 0;
            B.usingBundle = H;
            var I = v.matchPrefix(F, 'a=ice-options:')[0];
            return B.canTrickleIceCandidates = !!I && I.substr(14).split(' ').indexOf('trickle') >= 0, E.forEach(function(J, K) {
                var L = v.splitLines(J),
                    M = v.getKind(J),
                    N = v.isRejected(J) && 0 === v.matchPrefix(J, 'a=bundle-only').length,
                    O = L[0].substr(2).split(' ')[2],
                    P = v.getDirection(J, F),
                    Q = v.parseMsid(J),
                    R = v.getMid(J) || v.generateIdentifier();
                if (N || 'application' === M && ('DTLS/SCTP' === O || 'UDP/DTLS/SCTP' === O))
                    B.transceivers[K] = {
                        mid: R,
                        kind: M,
                        protocol: O,
                        rejected: !0
                    };
                else {
                    var S, T, U, V, W, X, Y, Z, $;
                    !N && B.transceivers[K] && B.transceivers[K].rejected && (B.transceivers[K] = B._createTransceiver(M, !0));
                    var ab, bb, cb = v.parseRtpParameters(J);
                    N || (ab = v.getIceParameters(J, F), (bb = v.getDtlsParameters(J, F)).role = 'client'), Y = v.parseRtpEncodingParameters(J);
                    var db = v.parseRtcpParameters(J),
                        eb = v.matchPrefix(J, 'a=end-of-candidates', F).length > 0,
                        fb = v.matchPrefix(J, 'a=candidate:').map(function(gb) {
                            return v.parseCandidate(gb);
                        }).filter(function(gb) {
                            return 1 === gb.component;
                        });
                    if (('offer' === A.type || 'answer' === A.type) && !N && H && K > 0 && B.transceivers[K] && (B._disposeIceAndDtlsTransports(K), B.transceivers[K].iceGatherer = B.transceivers[0].iceGatherer, B.transceivers[K].iceTransport = B.transceivers[0].iceTransport, B.transceivers[K].dtlsTransport = B.transceivers[0].dtlsTransport, B.transceivers[K].rtpSender && B.transceivers[K].rtpSender.setTransport(B.transceivers[0].dtlsTransport), B.transceivers[K].rtpReceiver && B.transceivers[K].rtpReceiver.setTransport(B.transceivers[0].dtlsTransport)), 'offer' !== A.type || N) {
                        if ('answer' === A.type && !N) {
                            T = (S = B.transceivers[K]).iceGatherer, U = S.iceTransport, V = S.dtlsTransport, W = S.rtpReceiver, X = S.sendEncodingParameters, Z = S.localCapabilities, B.transceivers[K].recvEncodingParameters = Y, B.transceivers[K].remoteCapabilities = cb, B.transceivers[K].rtcpParameters = db, fb.length && 'new' === U.state && (!G && !eb || H && 0 !== K ? fb.forEach(function(gb) {
                                q(S.iceTransport, gb);
                            }) : U.setRemoteCandidates(fb)), H && 0 !== K || ('new' === U.state && U.start(T, ab, 'controlling'), 'new' === V.state && V.start(bb)), !C(S.localCapabilities, S.remoteCapabilities).codecs.filter(function(gb) {
                                return 'rtx' === gb.name.toLowerCase();
                            }).length && S.sendEncodingParameters[0].rtx && delete S.sendEncodingParameters[0].rtx, B._transceive(S, 'sendrecv' === P || 'recvonly' === P, 'sendrecv' === P || 'sendonly' === P), !W || 'sendrecv' !== P && 'sendonly' !== P ? delete S.rtpReceiver : ($ = W.track, Q ? (C[Q.stream] || (C[Q.stream] = new u.MediaStream()), w($, C[Q.stream]), D.push([
                                $,
                                W,
                                C[Q.stream]
                            ])) : (C.default || (C.default = new u.MediaStream()), w($, C.default), D.push([
                                $,
                                W,
                                C.default
                            ])));
                        }
                    } else {
                        (S = B.transceivers[K] || B._createTransceiver(M)).mid = R, S.iceGatherer || (S.iceGatherer = B._createIceGatherer(K, H)), fb.length && 'new' === S.iceTransport.state && (!eb || H && 0 !== K ? fb.forEach(function(gb) {
                            q(S.iceTransport, gb);
                        }) : S.iceTransport.setRemoteCandidates(fb)), Z = u.RTCRtpReceiver.getCapabilities(M), v < 15019 && (Z.codecs = Z.codecs.filter(function(gb) {
                            return 'rtx' !== gb.name;
                        })), X = S.sendEncodingParameters || [{
                            ssrc: 1001 * (2 * K + 2)
                        }];
                        var gb, hb = !1;
                        if ('sendrecv' === P || 'sendonly' === P) {
                            if (hb = !S.rtpReceiver, W = S.rtpReceiver || new u.RTCRtpReceiver(S.dtlsTransport, M), hb)
                                $ = W.track, Q && '-' === Q.stream || (Q ? (C[Q.stream] || (C[Q.stream] = new u.MediaStream(), Object.defineProperty(C[Q.stream], 'id', {
                                    get: function() {
                                        return Q.stream;
                                    }
                                })), Object.defineProperty($, 'id', {
                                    get: function() {
                                        return Q.track;
                                    }
                                }), gb = C[Q.stream]) : (C.default || (C.default = new u.MediaStream()), gb = C.default)), gb && (w($, gb), S.associatedRemoteMediaStreams.push(gb)), D.push([
                                    $,
                                    W,
                                    gb
                                ]);
                        } else
                            S.rtpReceiver && S.rtpReceiver.track && (S.associatedRemoteMediaStreams.forEach(function(ib) {
                                var jb = ib.getTracks().find(function(kb) {
                                    return kb.id === S.rtpReceiver.track.id;
                                });
                                jb && function(kb, lb) {
                                    lb.removeTrack(kb), lb.dispatchEvent(new u.MediaStreamTrackEvent('removetrack', {
                                        track: kb
                                    }));
                                }(jb, ib);
                            }), S.associatedRemoteMediaStreams = []);
                        S.localCapabilities = Z, S.remoteCapabilities = cb, S.rtpReceiver = W, S.rtcpParameters = db, S.sendEncodingParameters = X, S.recvEncodingParameters = Y, B._transceive(B.transceivers[K], !1, hb);
                    }
                }
            }), void 0 === B._dtlsRole && (B._dtlsRole = 'offer' === A.type ? 'active' : 'passive'), B._remoteDescription = {
                type: A.type,
                sdp: A.sdp
            }, 'offer' === A.type ? B._updateSignalingState('have-remote-offer') : B._updateSignalingState('stable'), Object.keys(C).forEach(function(J) {
                var K = C[J];
                if (K.getTracks().length) {
                    if (-1 === B.remoteStreams.indexOf(K)) {
                        B.remoteStreams.push(K);
                        var L = new Event('addstream');
                        L.stream = K, u.setTimeout(function() {
                            B._dispatchEvent('addstream', L);
                        });
                    }
                    D.forEach(function(M) {
                        var N = M[0],
                            O = M[1];
                        K.id === M[2].id && x(B, N, O, [K]);
                    });
                }
            }), D.forEach(function(J) {
                J[2] || x(B, J[0], J[1], []);
            }), u.setTimeout(function() {
                B && B.transceivers && B.transceivers.forEach(function(J) {
                    J.iceTransport && 'new' === J.iceTransport.state && J.iceTransport.getRemoteCandidates().length > 0 && (console.warn('Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification'), J.iceTransport.addRemoteCandidate({}));
                });
            }, 4000), Promise.resolve();
        }, z.prototype.close = function() {
            this.transceivers.forEach(function(A) {
                A.iceTransport && A.iceTransport.stop(), A.dtlsTransport && A.dtlsTransport.stop(), A.rtpSender && A.rtpSender.stop(), A.rtpReceiver && A.rtpReceiver.stop();
            }), this._isClosed = !0, this._updateSignalingState('closed');
        }, z.prototype._updateSignalingState = function(A) {
            this.signalingState = A;
            var B = new Event('signalingstatechange');
            this._dispatchEvent('signalingstatechange', B);
        }, z.prototype._maybeFireNegotiationNeeded = function() {
            var A = this;
            'stable' === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, u.setTimeout(function() {
                if (A.needNegotiation) {
                    A.needNegotiation = !1;
                    var B = new Event('negotiationneeded');
                    A._dispatchEvent('negotiationneeded', B);
                }
            }, 0));
        }, z.prototype._updateIceConnectionState = function() {
            var A, B = {
                new: 0,
                closed: 0,
                checking: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach(function(C) {
                    C.iceTransport && !C.rejected && B[C.iceTransport.state]++;
                }), A = 'new', B.failed > 0 ? A = 'failed' : B.checking > 0 ? A = 'checking' : B.disconnected > 0 ? A = 'disconnected' : B.new > 0 ? A = 'new' : B.connected > 0 ? A = 'connected' : B.completed > 0 && (A = 'completed'), A !== this.iceConnectionState) {
                this.iceConnectionState = A;
                var C = new Event('iceconnectionstatechange');
                this._dispatchEvent('iceconnectionstatechange', C);
            }
        }, z.prototype._updateConnectionState = function() {
            var A, B = {
                new: 0,
                closed: 0,
                connecting: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach(function(C) {
                    C.iceTransport && C.dtlsTransport && !C.rejected && (B[C.iceTransport.state]++, B[C.dtlsTransport.state]++);
                }), B.connected += B.completed, A = 'new', B.failed > 0 ? A = 'failed' : B.connecting > 0 ? A = 'connecting' : B.disconnected > 0 ? A = 'disconnected' : B.new > 0 ? A = 'new' : B.connected > 0 && (A = 'connected'), A !== this.connectionState) {
                this.connectionState = A;
                var C = new Event('connectionstatechange');
                this._dispatchEvent('connectionstatechange', C);
            }
        }, z.prototype.createOffer = function() {
            var A = this;
            if (A._isClosed)
                return Promise.reject(s('InvalidStateError', 'Can not call createOffer after close'));
            var B = A.transceivers.filter(function(C) {
                    return 'audio' === C.kind;
                }).length,
                C = A.transceivers.filter(function(D) {
                    return 'video' === D.kind;
                }).length,
                D = arguments[0];
            if (D) {
                if (D.mandatory || D.optional)
                    throw new TypeError('Legacy mandatory/optional constraints not supported.');
                void 0 !== D.offerToReceiveAudio && (B = !0 === D.offerToReceiveAudio ? 1 : !1 === D.offerToReceiveAudio ? 0 : D.offerToReceiveAudio), void 0 !== D.offerToReceiveVideo && (C = !0 === D.offerToReceiveVideo ? 1 : !1 === D.offerToReceiveVideo ? 0 : D.offerToReceiveVideo);
            }
            for (A.transceivers.forEach(function(E) {
                    'audio' === E.kind ? --B < 0 && (E.wantReceive = !1) : 'video' === E.kind && --C < 0 && (E.wantReceive = !1);
                }); B > 0 || C > 0;)
                B > 0 && (A._createTransceiver('audio'), B--), C > 0 && (A._createTransceiver('video'), C--);
            var E = v.writeSessionBoilerplate(A._sdpSessionId, A._sdpSessionVersion++);
            A.transceivers.forEach(function(F, G) {
                var H = F.track,
                    I = F.kind,
                    J = F.mid || v.generateIdentifier();
                F.mid = J, F.iceGatherer || (F.iceGatherer = A._createIceGatherer(G, A.usingBundle));
                var K = u.RTCRtpSender.getCapabilities(I);
                v < 15019 && (K.codecs = K.codecs.filter(function(L) {
                    return 'rtx' !== L.name;
                })), K.codecs.forEach(function(L) {
                    'H264' === L.name && void 0 === L.parameters['level-asymmetry-allowed'] && (L.parameters['level-asymmetry-allowed'] = '1'), F.remoteCapabilities && F.remoteCapabilities.codecs && F.remoteCapabilities.codecs.forEach(function(M) {
                        L.name.toLowerCase() === M.name.toLowerCase() && L.clockRate === M.clockRate && (L.preferredPayloadType = M.payloadType);
                    });
                }), K.headerExtensions.forEach(function(L) {
                    (F.remoteCapabilities && F.remoteCapabilities.headerExtensions || []).forEach(function(M) {
                        L.uri === M.uri && (L.id = M.id);
                    });
                });
                var L = F.sendEncodingParameters || [{
                    ssrc: 1001 * (2 * G + 1)
                }];
                H && v >= 15019 && 'video' === I && !L[0].rtx && (L[0].rtx = {
                    ssrc: L[0].ssrc + 1
                }), F.wantReceive && (F.rtpReceiver = new u.RTCRtpReceiver(F.dtlsTransport, I)), F.localCapabilities = K, F.sendEncodingParameters = L;
            }), 'max-compat' !== A._config.bundlePolicy && (E += 'a=group:BUNDLE ' + A.transceivers.map(function(F) {
                return F.mid;
            }).join(' ') + '\r\n'), E += 'a=ice-options:trickle\r\n', A.transceivers.forEach(function(F, G) {
                E += h(F, F.localCapabilities, 'offer', F.stream, A._dtlsRole), E += 'a=rtcp-rsize\r\n', !F.iceGatherer || 'new' === A.iceGatheringState || 0 !== G && A.usingBundle || (F.iceGatherer.getLocalCandidates().forEach(function(H) {
                    H.component = 1, E += 'a=' + v.writeCandidate(H) + '\r\n';
                }), 'completed' === F.iceGatherer.state && (E += 'a=end-of-candidates\r\n'));
            });
            var F = new u.RTCSessionDescription({
                type: 'offer',
                sdp: E
            });
            return Promise.resolve(F);
        }, z.prototype.createAnswer = function() {
            var A = this;
            if (A._isClosed)
                return Promise.reject(s('InvalidStateError', 'Can not call createAnswer after close'));
            if ('have-remote-offer' !== A.signalingState && 'have-local-pranswer' !== A.signalingState)
                return Promise.reject(s('InvalidStateError', 'Can not call createAnswer in signalingState ' + A.signalingState));
            var B = v.writeSessionBoilerplate(A._sdpSessionId, A._sdpSessionVersion++);
            A.usingBundle && (B += 'a=group:BUNDLE ' + A.transceivers.map(function(C) {
                return C.mid;
            }).join(' ') + '\r\n'), B += 'a=ice-options:trickle\r\n';
            var C = v.getMediaSections(A._remoteDescription.sdp).length;
            A.transceivers.forEach(function(D, E) {
                if (!(E + 1 > C)) {
                    if (D.rejected)
                        return 'application' === D.kind ? 'DTLS/SCTP' === D.protocol ? B += 'm=application 0 DTLS/SCTP 5000\r\n' : B += 'm=application 0 ' + D.protocol + ' webrtc-datachannel\r\n' : 'audio' === D.kind ? B += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n' : 'video' === D.kind && (B += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n'), void(B += 'c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:' + D.mid + '\r\n');
                    var F;
                    if (D.stream)
                        'audio' === D.kind ? F = D.stream.getAudioTracks()[0] : 'video' === D.kind && (F = D.stream.getVideoTracks()[0]), F && v >= 15019 && 'video' === D.kind && !D.sendEncodingParameters[0].rtx && (D.sendEncodingParameters[0].rtx = {
                            ssrc: D.sendEncodingParameters[0].ssrc + 1
                        });
                    var G = C(D.localCapabilities, D.remoteCapabilities);
                    !G.codecs.filter(function(H) {
                        return 'rtx' === H.name.toLowerCase();
                    }).length && D.sendEncodingParameters[0].rtx && delete D.sendEncodingParameters[0].rtx, B += h(D, G, 'answer', D.stream, A._dtlsRole), D.rtcpParameters && D.rtcpParameters.reducedSize && (B += 'a=rtcp-rsize\r\n');
                }
            });
            var D = new u.RTCSessionDescription({
                type: 'answer',
                sdp: B
            });
            return Promise.resolve(D);
        }, z.prototype.addIceCandidate = function(A) {
            var B, C = this;
            return A && void 0 === A.sdpMLineIndex && !A.sdpMid ? Promise.reject(new TypeError('sdpMLineIndex or sdpMid required')) : new Promise(function(D, E) {
                if (!C._remoteDescription)
                    return E(s('InvalidStateError', 'Can not add ICE candidate without a remote description'));
                if (A && '' !== A.candidate) {
                    var F = A.sdpMLineIndex;
                    if (A.sdpMid)
                        for (var G = 0; G < C.transceivers.length; G++)
                            if (C.transceivers[G].mid === A.sdpMid) {
                                F = G;
                                break;
                            }
                    var H = C.transceivers[F];
                    if (!H)
                        return E(s('OperationError', 'Can not add ICE candidate'));
                    if (H.rejected)
                        return D();
                    var I = Object.keys(A.candidate).length > 0 ? v.parseCandidate(A.candidate) : {};
                    if ('tcp' === I.protocol && (0 === I.port || 9 === I.port))
                        return D();
                    if (I.component && 1 !== I.component)
                        return D();
                    if ((0 === F || F > 0 && H.iceTransport !== C.transceivers[0].iceTransport) && !q(H.iceTransport, I))
                        return E(s('OperationError', 'Can not add ICE candidate'));
                    var J = A.candidate.trim();
                    0 === J.indexOf('a=') && (J = J.substr(2)), (B = v.getMediaSections(C._remoteDescription.sdp))[F] += 'a=' + (I.type ? J : 'end-of-candidates') + '\r\n', C._remoteDescription.sdp = v.getDescription(C._remoteDescription.sdp) + B.join('');
                } else
                    for (var K = 0; K < C.transceivers.length && (C.transceivers[K].rejected || (C.transceivers[K].iceTransport.addRemoteCandidate({}), (B = v.getMediaSections(C._remoteDescription.sdp))[K] += 'a=end-of-candidates\r\n', C._remoteDescription.sdp = v.getDescription(C._remoteDescription.sdp) + B.join(''), !C.usingBundle)); K++);
                D();
            });
        }, z.prototype.getStats = function(A) {
            if (A && A instanceof u.MediaStreamTrack) {
                var B = null;
                if (this.transceivers.forEach(function(C) {
                        C.rtpSender && C.rtpSender.track === A ? B = C.rtpSender : C.rtpReceiver && C.rtpReceiver.track === A && (B = C.rtpReceiver);
                    }), !B)
                    throw s('InvalidAccessError', 'Invalid selector.');
                return B.getStats();
            }
            var C = [];
            return this.transceivers.forEach(function(D) {
                [
                    'rtpSender',
                    'rtpReceiver',
                    'iceGatherer',
                    'iceTransport',
                    'dtlsTransport'
                ].forEach(function(E) {
                    D[E] && C.push(D[E].getStats());
                });
            }), Promise.all(C).then(function(D) {
                var E = new Map();
                return D.forEach(function(F) {
                    F.forEach(function(G) {
                        E.set(G.id, G);
                    });
                }), E;
            });
        };
        [
            'RTCRtpSender',
            'RTCRtpReceiver',
            'RTCIceGatherer',
            'RTCIceTransport',
            'RTCDtlsTransport'
        ].forEach(function(A) {
            var B = u[A];
            if (B && B.prototype && B.prototype.getStats) {
                var C = B.prototype.getStats;
                B.prototype.getStats = function() {
                    return C.apply(this).then(function(D) {
                        var E = new Map();
                        return Object.keys(D).forEach(function(F) {
                            var G;
                            D[F].type = {
                                inboundrtp: 'inbound-rtp',
                                outboundrtp: 'outbound-rtp',
                                candidatepair: 'candidate-pair',
                                localcandidate: 'local-candidate',
                                remotecandidate: 'remote-candidate'
                            } [(G = D[F]).type] || G.type, E.set(F, D[F]);
                        }), E;
                    });
                };
            }
        });
        var A = [
            'createOffer',
            'createAnswer'
        ];
        return A.forEach(function(B) {
            var C = z.prototype[B];
            z.prototype[B] = function() {
                var D = arguments;
                return 'function' == typeof D[0] || 'function' == typeof D[1] ? C.apply(this, [arguments[2]]).then(function(E) {
                    'function' == typeof D[0] && D[0].apply(null, [E]);
                }, function(E) {
                    'function' == typeof D[1] && D[1].apply(null, [E]);
                }) : C.apply(this, arguments);
            };
        }), (A = [
            'setLocalDescription',
            'setRemoteDescription',
            'addIceCandidate'
        ]).forEach(function(B) {
            var C = z.prototype[B];
            z.prototype[B] = function() {
                var D = arguments;
                return 'function' == typeof D[1] || 'function' == typeof D[2] ? C.apply(this, arguments).then(function() {
                    'function' == typeof D[1] && D[1].apply(null);
                }, function(E) {
                    'function' == typeof D[2] && D[2].apply(null, [E]);
                }) : C.apply(this, arguments);
            };
        }), ['getStats'].forEach(function(B) {
            var C = z.prototype[B];
            z.prototype[B] = function() {
                var D = arguments;
                return 'function' == typeof D[1] ? C.apply(this, arguments).then(function() {
                    'function' == typeof D[1] && D[1].apply(null);
                }) : C.apply(this, arguments);
            };
        }), z;
    };
}), d.register('.....', function(e, f) {
    var g = {
        generateIdentifier: function() {
            return Math.random().toString(36).substr(2, 10);
        }
    };
    g.localCName = g.generateIdentifier(), g.splitLines = function(h) {
        return h.trim().split('\n').map(function(i) {
            return i.trim();
        });
    }, g.splitSections = function(h) {
        return h.split('\nm=').map(function(i, j) {
            return (j > 0 ? 'm=' + i : i).trim() + '\r\n';
        });
    }, g.getDescription = function(h) {
        var i = g.splitSections(h);
        return i && i[0];
    }, g.getMediaSections = function(h) {
        var i = g.splitSections(h);
        return i.shift(), i;
    }, g.matchPrefix = function(h, i) {
        return g.splitLines(h).filter(function(j) {
            return 0 === j.indexOf(i);
        });
    }, g.parseCandidate = function(h) {
        for (var i, j = {
                foundation: (i = 0 === h.indexOf('a=candidate:') ? h.substring(12).split(' ') : h.substring(10).split(' '))[0],
                component: parseInt(i[1], 10),
                protocol: i[2].toLowerCase(),
                priority: parseInt(i[3], 10),
                ip: i[4],
                address: i[4],
                port: parseInt(i[5], 10),
                type: i[7]
            }, k = 8; k < i.length; k += 2)
            switch (i[k]) {
                case 'raddr':
                    j.relatedAddress = i[k + 1];
                    break;
                case 'rport':
                    j.relatedPort = parseInt(i[k + 1], 10);
                    break;
                case 'tcptype':
                    j.tcpType = i[k + 1];
                    break;
                case 'ufrag':
                    j.ufrag = i[k + 1], j.usernameFragment = i[k + 1];
                    break;
                default:
                    j[i[k]] = i[k + 1];
            }
        return j;
    }, g.writeCandidate = function(h) {
        var i = [];
        i.push(h.foundation), i.push(h.component), i.push(h.protocol.toUpperCase()), i.push(h.priority), i.push(h.address || h.ip), i.push(h.port);
        var j = h.type;
        return i.push('typ'), i.push(j), 'host' !== j && h.relatedAddress && h.relatedPort && (i.push('raddr'), i.push(h.relatedAddress), i.push('rport'), i.push(h.relatedPort)), h.tcpType && 'tcp' === h.protocol.toLowerCase() && (i.push('tcptype'), i.push(h.tcpType)), (h.usernameFragment || h.ufrag) && (i.push('ufrag'), i.push(h.usernameFragment || h.ufrag)), 'candidate:' + i.join(' ');
    }, g.parseIceOptions = function(h) {
        return h.substr(14).split(' ');
    }, g.parseRtpMap = function(h) {
        var i = h.substr(9).split(' '),
            j = {
                payloadType: parseInt(i.shift(), 10)
            };
        return i = i[0].split('/'), j.name = i[0], j.clockRate = parseInt(i[1], 10), j.channels = 3 === i.length ? parseInt(i[2], 10) : 1, j.numChannels = j.channels, j;
    }, g.writeRtpMap = function(h) {
        var i = h.payloadType;
        void 0 !== h.preferredPayloadType && (i = h.preferredPayloadType);
        var j = h.channels || h.numChannels || 1;
        return 'a=rtpmap:' + i + ' ' + h.name + '/' + h.clockRate + (1 !== j ? '/' + j : '') + '\r\n';
    }, g.parseExtmap = function(h) {
        var i = h.substr(9).split(' ');
        return {
            id: parseInt(i[0], 10),
            direction: i[0].indexOf('/') > 0 ? i[0].split('/')[1] : 'sendrecv',
            uri: i[1]
        };
    }, g.writeExtmap = function(h) {
        return 'a=extmap:' + (h.id || h.preferredId) + (h.direction && 'sendrecv' !== h.direction ? '/' + h.direction : '') + ' ' + h.uri + '\r\n';
    }, g.parseFmtp = function(h) {
        for (var i, j = {}, k = h.substr(h.indexOf(' ') + 1).split(';'), l = 0; l < k.length; l++)
            j[(i = k[l].trim().split('='))[0].trim()] = i[1];
        return j;
    }, g.writeFmtp = function(h) {
        var i = '',
            j = h.payloadType;
        if (void 0 !== h.preferredPayloadType && (j = h.preferredPayloadType), h.parameters && Object.keys(h.parameters).length) {
            var k = [];
            Object.keys(h.parameters).forEach(function(l) {
                h.parameters[l] ? k.push(l + '=' + h.parameters[l]) : k.push(l);
            }), i += 'a=fmtp:' + j + ' ' + k.join(';') + '\r\n';
        }
        return i;
    }, g.parseRtcpFb = function(h) {
        var i = h.substr(h.indexOf(' ') + 1).split(' ');
        return {
            type: i.shift(),
            parameter: i.join(' ')
        };
    }, g.writeRtcpFb = function(h) {
        var i = '',
            j = h.payloadType;
        return void 0 !== h.preferredPayloadType && (j = h.preferredPayloadType), h.rtcpFeedback && h.rtcpFeedback.length && h.rtcpFeedback.forEach(function(k) {
            i += 'a=rtcp-fb:' + j + ' ' + k.type + (k.parameter && k.parameter.length ? ' ' + k.parameter : '') + '\r\n';
        }), i;
    }, g.parseSsrcMedia = function(h) {
        var i = h.indexOf(' '),
            j = {
                ssrc: parseInt(h.substr(7, i - 7), 10)
            },
            k = h.indexOf(':', i);
        return k > -1 ? (j.attribute = h.substr(i + 1, k - i - 1), j.value = h.substr(k + 1)) : j.attribute = h.substr(i + 1), j;
    }, g.parseSsrcGroup = function(h) {
        var i = h.substr(13).split(' ');
        return {
            semantics: i.shift(),
            ssrcs: i.map(function(j) {
                return parseInt(j, 10);
            })
        };
    }, g.getMid = function(h) {
        var i = g.matchPrefix(h, 'a=mid:')[0];
        if (i)
            return i.substr(6);
    }, g.parseFingerprint = function(h) {
        var i = h.substr(14).split(' ');
        return {
            algorithm: i[0].toLowerCase(),
            value: i[1]
        };
    }, g.getDtlsParameters = function(h, i) {
        return {
            role: 'auto',
            fingerprints: g.matchPrefix(h + i, 'a=fingerprint:').map(g.parseFingerprint)
        };
    }, g.writeDtlsParameters = function(h, i) {
        var j = 'a=setup:' + i + '\r\n';
        return h.fingerprints.forEach(function(k) {
            j += 'a=fingerprint:' + k.algorithm + ' ' + k.value + '\r\n';
        }), j;
    }, g.parseCryptoLine = function(h) {
        var i = h.substr(9).split(' ');
        return {
            tag: parseInt(i[0], 10),
            cryptoSuite: i[1],
            keyParams: i[2],
            sessionParams: i.slice(3)
        };
    }, g.writeCryptoLine = function(h) {
        return 'a=crypto:' + h.tag + ' ' + h.cryptoSuite + ' ' + ('object' == typeof h.keyParams ? g.writeCryptoKeyParams(h.keyParams) : h.keyParams) + (h.sessionParams ? ' ' + h.sessionParams.join(' ') : '') + '\r\n';
    }, g.parseCryptoKeyParams = function(h) {
        if (0 !== h.indexOf('inline:'))
            return null;
        var i = h.substr(7).split('|');
        return {
            keyMethod: 'inline',
            keySalt: i[0],
            lifeTime: i[1],
            mkiValue: i[2] ? i[2].split(':')[0] : void 0,
            mkiLength: i[2] ? i[2].split(':')[1] : void 0
        };
    }, g.writeCryptoKeyParams = function(h) {
        return h.keyMethod + ':' + h.keySalt + (h.lifeTime ? '|' + h.lifeTime : '') + (h.mkiValue && h.mkiLength ? '|' + h.mkiValue + ':' + h.mkiLength : '');
    }, g.getCryptoParameters = function(h, i) {
        return g.matchPrefix(h + i, 'a=crypto:').map(g.parseCryptoLine);
    }, g.getIceParameters = function(h, i) {
        var j = g.matchPrefix(h + i, 'a=ice-ufrag:')[0],
            k = g.matchPrefix(h + i, 'a=ice-pwd:')[0];
        return j && k ? {
            usernameFragment: j.substr(12),
            password: k.substr(10)
        } : null;
    }, g.writeIceParameters = function(h) {
        return 'a=ice-ufrag:' + h.usernameFragment + '\r\na=ice-pwd:' + h.password + '\r\n';
    }, g.parseRtpParameters = function(h) {
        for (var i = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: []
            }, j = g.splitLines(h)[0].split(' '), k = 3; k < j.length; k++) {
            var l = j[k],
                m = g.matchPrefix(h, 'a=rtpmap:' + l + ' ')[0];
            if (m) {
                var n = g.parseRtpMap(m),
                    o = g.matchPrefix(h, 'a=fmtp:' + l + ' ');
                switch (n.parameters = o.length ? g.parseFmtp(o[0]) : {}, n.rtcpFeedback = g.matchPrefix(h, 'a=rtcp-fb:' + l + ' ').map(g.parseRtcpFb), i.codecs.push(n), n.name.toUpperCase()) {
                    case 'RED':
                    case 'ULPFEC':
                        i.fecMechanisms.push(n.name.toUpperCase());
                }
            }
        }
        return g.matchPrefix(h, 'a=extmap:').forEach(function(p) {
            i.headerExtensions.push(g.parseExtmap(p));
        }), i;
    }, g.writeRtpDescription = function(h, i) {
        var j = '';
        j += 'm=' + h + ' ', j += i.codecs.length > 0 ? '9' : '0', j += ' UDP/TLS/RTP/SAVPF ', j += i.codecs.map(function(k) {
            return void 0 !== k.preferredPayloadType ? k.preferredPayloadType : k.payloadType;
        }).join(' ') + '\r\n', j += 'c=IN IP4 0.0.0.0\r\n', j += 'a=rtcp:9 IN IP4 0.0.0.0\r\n', i.codecs.forEach(function(k) {
            j += g.writeRtpMap(k), j += g.writeFmtp(k), j += g.writeRtcpFb(k);
        });
        var k = 0;
        return i.codecs.forEach(function(l) {
            l.maxptime > k && (k = l.maxptime);
        }), k > 0 && (j += 'a=maxptime:' + k + '\r\n'), j += 'a=rtcp-mux\r\n', i.headerExtensions && i.headerExtensions.forEach(function(l) {
            j += g.writeExtmap(l);
        }), j;
    }, g.parseRtpEncodingParameters = function(h) {
        var i, j = [],
            k = g.parseRtpParameters(h),
            l = -1 !== k.fecMechanisms.indexOf('RED'),
            m = -1 !== k.fecMechanisms.indexOf('ULPFEC'),
            n = g.matchPrefix(h, 'a=ssrc:').map(function(o) {
                return g.parseSsrcMedia(o);
            }).filter(function(o) {
                return 'cname' === o.attribute;
            }),
            o = n.length > 0 && n[0].ssrc,
            p = g.matchPrefix(h, 'a=ssrc-group:FID').map(function(q) {
                return q.substr(17).split(' ').map(function(r) {
                    return parseInt(r, 10);
                });
            });
        p.length > 0 && p[0].length > 1 && p[0][0] === o && (i = p[0][1]), k.codecs.forEach(function(q) {
            if ('RTX' === q.name.toUpperCase() && q.parameters.apt) {
                var r = {
                    ssrc: o,
                    codecPayloadType: parseInt(q.parameters.apt, 10)
                };
                o && i && (r.rtx = {
                    ssrc: i
                }), j.push(r), l && ((r = JSON.parse(JSON.stringify(r))).fec = {
                    ssrc: o,
                    mechanism: m ? 'red+ulpfec' : 'red'
                }, j.push(r));
            }
        }), 0 === j.length && o && j.push({
            ssrc: o
        });
        var q = g.matchPrefix(h, 'b=');
        return q.length && (q = 0 === q[0].indexOf('b=TIAS:') ? parseInt(q[0].substr(7), 10) : 0 === q[0].indexOf('b=AS:') ? 950 * parseInt(q[0].substr(5), 10) - 16000 : void 0, j.forEach(function(r) {
            r.maxBitrate = q;
        })), j;
    }, g.parseRtcpParameters = function(h) {
        var i = {},
            j = g.matchPrefix(h, 'a=ssrc:').map(function(k) {
                return g.parseSsrcMedia(k);
            }).filter(function(k) {
                return 'cname' === k.attribute;
            })[0];
        j && (i.cname = j.value, i.ssrc = j.ssrc);
        var k = g.matchPrefix(h, 'a=rtcp-rsize');
        i.reducedSize = k.length > 0, i.compound = 0 === k.length;
        var l = g.matchPrefix(h, 'a=rtcp-mux');
        return i.mux = l.length > 0, i;
    }, g.parseMsid = function(h) {
        var i, j = g.matchPrefix(h, 'a=msid:');
        if (1 === j.length)
            return {
                stream: (i = j[0].substr(7).split(' '))[0],
                track: i[1]
            };
        var k = g.matchPrefix(h, 'a=ssrc:').map(function(l) {
            return g.parseSsrcMedia(l);
        }).filter(function(l) {
            return 'msid' === l.attribute;
        });
        return k.length > 0 ? {
            stream: (i = k[0].value.split(' '))[0],
            track: i[1]
        } : void 0;
    }, g.parseSctpDescription = function(h) {
        var i, j = g.parseMLine(h),
            k = g.matchPrefix(h, 'a=max-message-size:');
        k.length > 0 && (i = parseInt(k[0].substr(19), 10)), isNaN(i) && (i = 65536);
        var l = g.matchPrefix(h, 'a=sctp-port:');
        if (l.length > 0)
            return {
                port: parseInt(l[0].substr(12), 10),
                protocol: j.fmt,
                maxMessageSize: i
            };
        if (g.matchPrefix(h, 'a=sctpmap:').length > 0) {
            var m = g.matchPrefix(h, 'a=sctpmap:')[0].substr(10).split(' ');
            return {
                port: parseInt(m[0], 10),
                protocol: m[1],
                maxMessageSize: i
            };
        }
    }, g.writeSctpDescription = function(h, i) {
        var j = [];
        return j = 'DTLS/SCTP' !== h.protocol ? [
            'm=' + h.kind + ' 9 ' + h.protocol + ' ' + i.protocol + '\r\n',
            'c=IN IP4 0.0.0.0\r\n',
            'a=sctp-port:' + i.port + '\r\n'
        ] : [
            'm=' + h.kind + ' 9 ' + h.protocol + ' ' + i.port + '\r\n',
            'c=IN IP4 0.0.0.0\r\n',
            'a=sctpmap:' + i.port + ' ' + i.protocol + ' 65535\r\n'
        ], void 0 !== i.maxMessageSize && j.push('a=max-message-size:' + i.maxMessageSize + '\r\n'), j.join('');
    }, g.generateSessionId = function() {
        return Math.random().toString().substr(2, 21);
    }, g.writeSessionBoilerplate = function(h, i, j) {
        var k = void 0 !== i ? i : 2;
        return 'v=0\r\no=' + (j || 'thisisadapterortc') + ' ' + (h || g.generateSessionId()) + ' ' + k + ' IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n';
    }, g.writeMediaSection = function(h, i, j, k) {
        var l = g.writeRtpDescription(h.kind, i);
        if (l += g.writeIceParameters(h.iceGatherer.getLocalParameters()), l += g.writeDtlsParameters(h.dtlsTransport.getLocalParameters(), 'offer' === j ? 'actpass' : 'active'), l += 'a=mid:' + h.mid + '\r\n', h.direction ? l += 'a=' + h.direction + '\r\n' : h.rtpSender && h.rtpReceiver ? l += 'a=sendrecv\r\n' : h.rtpSender ? l += 'a=sendonly\r\n' : h.rtpReceiver ? l += 'a=recvonly\r\n' : l += 'a=inactive\r\n', h.rtpSender) {
            var m = 'msid:' + k.id + ' ' + h.rtpSender.track.id + '\r\n';
            l += 'a=' + m, l += 'a=ssrc:' + h.sendEncodingParameters[0].ssrc + ' ' + m, h.sendEncodingParameters[0].rtx && (l += 'a=ssrc:' + h.sendEncodingParameters[0].rtx.ssrc + ' ' + m, l += 'a=ssrc-group:FID ' + h.sendEncodingParameters[0].ssrc + ' ' + h.sendEncodingParameters[0].rtx.ssrc + '\r\n');
        }
        return l += 'a=ssrc:' + h.sendEncodingParameters[0].ssrc + ' cname:' + g.localCName + '\r\n', h.rtpSender && h.sendEncodingParameters[0].rtx && (l += 'a=ssrc:' + h.sendEncodingParameters[0].rtx.ssrc + ' cname:' + g.localCName + '\r\n'), l;
    }, g.getDirection = function(h, i) {
        for (var j = g.splitLines(h), k = 0; k < j.length; k++)
            switch (j[k]) {
                case 'a=sendrecv':
                case 'a=sendonly':
                case 'a=recvonly':
                case 'a=inactive':
                    return j[k].substr(2);
            }
        return i ? g.getDirection(i) : 'sendrecv';
    }, g.getKind = function(h) {
        return g.splitLines(h)[0].split(' ')[0].substr(2);
    }, g.isRejected = function(h) {
        return '0' === h.split(' ', 2)[1];
    }, g.parseMLine = function(h) {
        var i = g.splitLines(h)[0].substr(2).split(' ');
        return {
            kind: i[0],
            port: parseInt(i[1], 10),
            protocol: i[2],
            fmt: i.slice(3).join(' ')
        };
    }, g.parseOLine = function(h) {
        var i = g.matchPrefix(h, 'o=')[0].substr(2).split(' ');
        return {
            username: i[0],
            sessionId: i[1],
            sessionVersion: parseInt(i[2], 10),
            netType: i[3],
            addressType: i[4],
            address: i[5]
        };
    }, g.isValidSDP = function(h) {
        if ('string' != typeof h || 0 === h.length)
            return !1;
        for (var i = g.splitLines(h), j = 0; j < i.length; j++)
            if (i[j].length < 2 || '=' !== i[j].charAt(1))
                return !1;
        return !0;
    }, e.exports = g;
}), d.register('.....', function(e, f) {
    function g(h) {
        const i = h && h.navigator,
            j = i.mediaDevices.getUserMedia.bind(i.mediaDevices);
        i.mediaDevices.getUserMedia = function(k) {
            return j(k).catch(l => Promise.reject(function(m) {
                return {
                    name: {
                        PermissionDeniedError: 'NotAllowedError'
                    } [m.name] || m.name,
                    message: m.message,
                    constraint: m.constraint,
                    toString() {
                        return this.name;
                    }
                };
            }(l)));
        };
    }
    i(e.exports, 'shimGetUserMedia', function() {
        return g;
    });
}), d.register('.....', function(e, f) {
    function g(h) {
        'getDisplayMedia' in h.navigator && h.navigator.mediaDevices && (h.navigator.mediaDevices && 'getDisplayMedia' in h.navigator.mediaDevices || (h.navigator.mediaDevices.getDisplayMedia = h.navigator.getDisplayMedia.bind(h.navigator)));
    }
    b(e.exports, 'shimGetDisplayMedia', function() {
        return g;
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'shimOnTrack', function() {
        return _h;
    }), b(e.exports, 'shimPeerConnection', function() {
        return _i;
    }), b(e.exports, 'shimSenderGetStats', function() {
        return _n;
    }), b(e.exports, 'shimReceiverGetStats', function() {
        return _q;
    }), b(e.exports, 'shimRemoveStream', function() {
        return _s;
    }), b(e.exports, 'shimRTCDataChannel', function() {
        return _t;
    }), b(e.exports, 'shimAddTransceiver', function() {
        return _u;
    }), b(e.exports, 'shimGetParameters', function() {
        return _w;
    }), b(e.exports, 'shimCreateOffer', function() {
        return _y;
    }), b(e.exports, 'shimCreateAnswer', function() {
        return _A;
    }), b(e.exports, 'shimGetUserMedia', function() {
        return d('.....').shimGetUserMedia;
    }), b(e.exports, 'shimGetDisplayMedia', function() {
        return d('.....').shimGetDisplayMedia;
    });
    var g = d('.....');
    d('.....'), d('.....');

    function _h(i) {
        'object' == typeof i && i.RTCTrackEvent && 'receiver' in i.RTCTrackEvent.prototype && !('transceiver' in i.RTCTrackEvent.prototype) && Object.defineProperty(i.RTCTrackEvent.prototype, 'transceiver', {
            get() {
                return {
                    receiver: this.receiver
                };
            }
        });
    }

    function _i(j) {
        const k = g.detectBrowser(j);
        if ('object' != typeof j || !j.RTCPeerConnection && !j.mozRTCPeerConnection)
            return;
        if (!j.RTCPeerConnection && j.mozRTCPeerConnection && (j.RTCPeerConnection = j.mozRTCPeerConnection), k.version < 53 && [
                'setLocalDescription',
                'setRemoteDescription',
                'addIceCandidate'
            ].forEach(function(l) {
                const m = j.RTCPeerConnection.prototype[l],
                    n = {
                        [l]() {
                            return arguments[0] = new('addIceCandidate' === l ? j.RTCIceCandidate : j.RTCSessionDescription)(arguments[0]), m.apply(this, arguments);
                        }
                    };
                j.RTCPeerConnection.prototype[l] = n[l];
            }), k.version < 68) {
            const l = j.RTCPeerConnection.prototype.addIceCandidate;
            j.RTCPeerConnection.prototype.addIceCandidate = function() {
                return arguments[0] ? arguments[0] && '' === arguments[0].candidate ? Promise.resolve() : l.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
            };
        }
        const m = {
                inboundrtp: 'inbound-rtp',
                outboundrtp: 'outbound-rtp',
                candidatepair: 'candidate-pair',
                localcandidate: 'local-candidate',
                remotecandidate: 'remote-candidate'
            },
            n = j.RTCPeerConnection.prototype.getStats;
        j.RTCPeerConnection.prototype.getStats = function() {
            const [o, p, q] = arguments;
            return n.apply(this, [o || null]).then(r => {
                if (l.version < 53 && !p)
                    try {
                        r.forEach(s => {
                            s.type = m[s.type] || s.type;
                        });
                    } catch (l) {
                        if ('TypeError' !== l.name)
                            throw l;
                        r.forEach((s, t) => {
                            r.set(t, Object.assign({}, s, {
                                type: m[s.type] || s.type
                            }));
                        });
                    }
                return r;
            }).then(p, q);
        };
    }

    function _n(o) {
        if ('object' != typeof o || !o.RTCPeerConnection || !o.RTCRtpSender)
            return;
        if (o.RTCRtpSender && 'getStats' in o.RTCRtpSender.prototype)
            return;
        const p = o.RTCPeerConnection.prototype.getSenders;
        p && (o.RTCPeerConnection.prototype.getSenders = function() {
            const q = p.apply(this, []);
            return q.forEach(r => r._pc = this), q;
        });
        const q = o.RTCPeerConnection.prototype.addTrack;
        q && (o.RTCPeerConnection.prototype.addTrack = function() {
            const r = q.apply(this, arguments);
            return r._pc = this, r;
        }), o.RTCRtpSender.prototype.getStats = function() {
            return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
        };
    }

    function _q(r) {
        if ('object' != typeof r || !r.RTCPeerConnection || !r.RTCRtpSender)
            return;
        if (r.RTCRtpSender && 'getStats' in r.RTCRtpReceiver.prototype)
            return;
        const s = r.RTCPeerConnection.prototype.getReceivers;
        s && (r.RTCPeerConnection.prototype.getReceivers = function() {
            const t = s.apply(this, []);
            return t.forEach(u => u._pc = this), t;
        }), g.wrapPeerConnectionEvent(r, 'track', t => (t.receiver._pc = t.srcElement, t)), r.RTCRtpReceiver.prototype.getStats = function() {
            return this._pc.getStats(this.track);
        };
    }

    function _s(t) {
        t.RTCPeerConnection && !('removeStream' in t.RTCPeerConnection.prototype) && (t.RTCPeerConnection.prototype.removeStream = function(u) {
            g.deprecated('removeStream', 'removeTrack'), this.getSenders().forEach(v => {
                v.track && u.getTracks().includes(v.track) && this.removeTrack(v);
            });
        });
    }

    function _t(u) {
        u.DataChannel && !u.RTCDataChannel && (u.RTCDataChannel = u.DataChannel);
    }

    function _u(v) {
        if ('object' != typeof v || !v.RTCPeerConnection)
            return;
        const w = v.RTCPeerConnection.prototype.addTransceiver;
        w && (v.RTCPeerConnection.prototype.addTransceiver = function() {
            this.setParametersPromises = [];
            const x = arguments[1],
                y = x && 'sendEncodings' in x;
            y && x.sendEncodings.forEach(z => {
                if ('rid' in z) {
                    if (!/^[a-z0-9]{0,16}$/i.test(z.rid))
                        throw new TypeError('Invalid RID value provided.');
                }
                if ('scaleResolutionDownBy' in z && !(parseFloat(z.scaleResolutionDownBy) >= 1))
                    throw new RangeError('scale_resolution_down_by must be >= 1.0');
                if ('maxFramerate' in z && !(parseFloat(z.maxFramerate) >= 0))
                    throw new RangeError('max_framerate must be >= 0.0');
            });
            const z = w.apply(this, arguments);
            if (y) {
                const {
                    sender: A
                } = z, B = A.getParameters();
                (!('encodings' in B) || 1 === B.encodings.length && 0 === Object.keys(B.encodings[0]).length) && (B.encodings = x.sendEncodings, A.sendEncodings = x.sendEncodings, this.setParametersPromises.push(A.setParameters(B).then(() => {
                    delete A.sendEncodings;
                }).catch(() => {
                    delete A.sendEncodings;
                })));
            }
            return z;
        });
    }

    function _w(x) {
        if ('object' != typeof x || !x.RTCRtpSender)
            return;
        const y = x.RTCRtpSender.prototype.getParameters;
        y && (x.RTCRtpSender.prototype.getParameters = function() {
            const z = y.apply(this, arguments);
            return 'encodings' in z || (z.encodings = [].concat(this.sendEncodings || [{}])), z;
        });
    }

    function _y(z) {
        if ('object' != typeof z || !z.RTCPeerConnection)
            return;
        const A = z.RTCPeerConnection.prototype.createOffer;
        z.RTCPeerConnection.prototype.createOffer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => A.apply(this, arguments)).finally(() => {
                this.setParametersPromises = [];
            }) : A.apply(this, arguments);
        };
    }

    function _A(B) {
        if ('object' != typeof B || !B.RTCPeerConnection)
            return;
        const C = B.RTCPeerConnection.prototype.createAnswer;
        B.RTCPeerConnection.prototype.createAnswer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => C.apply(this, arguments)).finally(() => {
                this.setParametersPromises = [];
            }) : C.apply(this, arguments);
        };
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'shimGetUserMedia', function() {
        return _h;
    });
    var g = d('.....');

    function _h(i) {
        const j = g.detectBrowser(i),
            k = i && i.navigator,
            l = i && i.MediaStreamTrack;
        if (k.getUserMedia = function(m, n, o) {
                g.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia'), k.mediaDevices.getUserMedia(m).then(n, o);
            }, !(j.version > 55 && 'autoGainControl' in k.mediaDevices.getSupportedConstraints())) {
            const m = function(n, o, p) {
                    o in n && !(p in n) && (n[p] = n[o], delete n[o]);
                },
                n = k.mediaDevices.getUserMedia.bind(k.mediaDevices);
            if (k.mediaDevices.getUserMedia = function(o) {
                    return 'object' == typeof o && 'object' == typeof o.audio && (o = JSON.parse(JSON.stringify(o)), i(o.audio, 'autoGainControl', 'mozAutoGainControl'), i(o.audio, 'noiseSuppression', 'mozNoiseSuppression')), n(o);
                }, l && l.prototype.getSettings) {
                const o = l.prototype.getSettings;
                l.prototype.getSettings = function() {
                    const p = o.apply(this, arguments);
                    return i(p, 'mozAutoGainControl', 'autoGainControl'), i(p, 'mozNoiseSuppression', 'noiseSuppression'), p;
                };
            }
            if (l && l.prototype.applyConstraints) {
                const p = l.prototype.applyConstraints;
                l.prototype.applyConstraints = function(q) {
                    return 'audio' === this.kind && 'object' == typeof q && (q = JSON.parse(JSON.stringify(q)), i(q, 'autoGainControl', 'mozAutoGainControl'), i(q, 'noiseSuppression', 'mozNoiseSuppression')), p.apply(this, [q]);
                };
            }
        }
    }
}), d.register('.....', function(e, f) {
    function g(h, i) {
        h.navigator.mediaDevices && 'getDisplayMedia' in h.navigator.mediaDevices || h.navigator.mediaDevices && (h.navigator.mediaDevices.getDisplayMedia = function(j) {
            if (!j || !j.video) {
                const k = new DOMException('getDisplayMedia without video constraints is undefined');
                return k.name = 'NotFoundError', k.code = 8, Promise.reject(k);
            }
            return !0 === j.video ? j.video = {
                mediaSource: i
            } : j.video.mediaSource = i, k.navigator.mediaDevices.getUserMedia(j);
        });
    }
    b(e.exports, 'shimGetDisplayMedia', function() {
        return g;
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'shimLocalStreamsAPI', function() {
        return _h;
    }), b(e.exports, 'shimRemoteStreamsAPI', function() {
        return _j;
    }), b(e.exports, 'shimCallbacksAPI', function() {
        return _l;
    }), b(e.exports, 'shimGetUserMedia', function() {
        return _s;
    }), b(e.exports, 'shimConstraints', function() {
        return _w;
    }), b(e.exports, 'shimRTCIceServerUrls', function() {
        return _x;
    }), b(e.exports, 'shimTrackEventTransceiver', function() {
        return _z;
    }), b(e.exports, 'shimCreateOfferLegacy', function() {
        return _A;
    }), b(e.exports, 'shimAudioContext', function() {
        return _C;
    });
    var g = d('.....');

    function _h(i) {
        if ('object' == typeof i && i.RTCPeerConnection) {
            if ('getLocalStreams' in i.RTCPeerConnection.prototype || (i.RTCPeerConnection.prototype.getLocalStreams = function() {
                    return this._localStreams || (this._localStreams = []), this._localStreams;
                }), !('addStream' in i.RTCPeerConnection.prototype)) {
                const j = i.RTCPeerConnection.prototype.addTrack;
                i.RTCPeerConnection.prototype.addStream = function(k) {
                    this._localStreams || (this._localStreams = []), this._localStreams.includes(k) || this._localStreams.push(k), k.getAudioTracks().forEach(l => j.call(this, l, k)), k.getVideoTracks().forEach(l => j.call(this, l, k));
                }, i.RTCPeerConnection.prototype.addTrack = function(k, ...f) {
                    return f && f.forEach(l => {
                        this._localStreams ? this._localStreams.includes(l) || this._localStreams.push(l) : this._localStreams = [l];
                    }), j.apply(this, arguments);
                };
            }
            'removeStream' in i.RTCPeerConnection.prototype || (i.RTCPeerConnection.prototype.removeStream = function(k) {
                this._localStreams || (this._localStreams = []);
                const l = this._localStreams.indexOf(k);
                if (-1 === l)
                    return;
                this._localStreams.splice(l, 1);
                const m = k.getTracks();
                this.getSenders().forEach(n => {
                    m.includes(n.track) && this.removeTrack(n);
                });
            });
        }
    }

    function _j(k) {
        if ('object' == typeof k && k.RTCPeerConnection && ('getRemoteStreams' in k.RTCPeerConnection.prototype || (k.RTCPeerConnection.prototype.getRemoteStreams = function() {
                return this._remoteStreams ? this._remoteStreams : [];
            }), !('onaddstream' in k.RTCPeerConnection.prototype))) {
            Object.defineProperty(k.RTCPeerConnection.prototype, 'onaddstream', {
                get() {
                    return this._onaddstream;
                },
                set(l) {
                    this._onaddstream && (this.removeEventListener('addstream', this._onaddstream), this.removeEventListener('track', this._onaddstreampoly)), this.addEventListener('addstream', this._onaddstream = l), this.addEventListener('track', this._onaddstreampoly = m => {
                        m.streams.forEach(n => {
                            if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(n))
                                return;
                            this._remoteStreams.push(n);
                            const o = new Event('addstream');
                            o.stream = n, this.dispatchEvent(o);
                        });
                    });
                }
            });
            const l = k.RTCPeerConnection.prototype.setRemoteDescription;
            k.RTCPeerConnection.prototype.setRemoteDescription = function() {
                const m = this;
                return this._onaddstreampoly || this.addEventListener('track', this._onaddstreampoly = function(n) {
                    n.streams.forEach(o => {
                        if (m._remoteStreams || (m._remoteStreams = []), m._remoteStreams.indexOf(o) >= 0)
                            return;
                        m._remoteStreams.push(o);
                        const p = new Event('addstream');
                        p.stream = o, m.dispatchEvent(p);
                    });
                }), l.apply(m, arguments);
            };
        }
    }

    function _l(m) {
        if ('object' != typeof m || !m.RTCPeerConnection)
            return;
        const n = m.RTCPeerConnection.prototype,
            o = n.createOffer,
            p = n.createAnswer,
            q = n.setLocalDescription,
            r = n.setRemoteDescription,
            s = n.addIceCandidate;
        n.createOffer = function(t, u) {
            const v = arguments.length >= 2 ? arguments[2] : arguments[0],
                w = o.apply(this, [v]);
            return u ? (w.then(t, u), Promise.resolve()) : w;
        }, n.createAnswer = function(t, u) {
            const v = arguments.length >= 2 ? arguments[2] : arguments[0],
                w = p.apply(this, [v]);
            return u ? (w.then(t, u), Promise.resolve()) : w;
        };
        let t = function(u, v, w) {
            const x = q.apply(this, [u]);
            return w ? (x.then(v, w), Promise.resolve()) : x;
        };
        n.setLocalDescription = t, t = function(u, v, w) {
            const x = _h.apply(this, [u]);
            return w ? (x.then(v, w), Promise.resolve()) : x;
        }, n.setRemoteDescription = t, t = function(u, v, w) {
            const x = _j.apply(this, [u]);
            return w ? (x.then(v, w), Promise.resolve()) : x;
        }, n.addIceCandidate = t;
    }

    function _s(t) {
        const u = t && t.navigator;
        if (u.mediaDevices && u.mediaDevices.getUserMedia) {
            const v = u.mediaDevices,
                w = t.getUserMedia.bind(t);
            u.mediaDevices.getUserMedia = x => w(_w(x));
        }!u.getUserMedia && u.mediaDevices && u.mediaDevices.getUserMedia && (u.getUserMedia = function(x, y, z) {
            u.mediaDevices.getUserMedia(x).then(y, z);
        }.bind(u));
    }

    function _w(x) {
        return x && void 0 !== x.video ? Object.assign({}, x, {
            video: q.compactObject(x.video)
        }) : x;
    }

    function _x(y) {
        if (!y.RTCPeerConnection)
            return;
        const z = y.RTCPeerConnection;
        y.RTCPeerConnection = function(A, B) {
            if (A && A.iceServers) {
                const C = [];
                for (let D = 0; D < A.iceServers.length; D++) {
                    let E = A.iceServers[D];
                    !E.hasOwnProperty('urls') && E.hasOwnProperty('url') ? (q.deprecated('RTCIceServer.url', 'RTCIceServer.urls'), E = JSON.parse(JSON.stringify(E)), E.urls = E.url, delete E.url, C.push(E)) : C.push(A.iceServers[D]);
                }
                A.iceServers = C;
            }
            return new C(A, B);
        }, y.RTCPeerConnection.prototype = z.prototype, 'generateCertificate' in z && Object.defineProperty(y.RTCPeerConnection, 'generateCertificate', {
            get: () => z.generateCertificate
        });
    }

    function _z(A) {
        'object' == typeof A && A.RTCTrackEvent && 'receiver' in A.RTCTrackEvent.prototype && !('transceiver' in A.RTCTrackEvent.prototype) && Object.defineProperty(A.RTCTrackEvent.prototype, 'transceiver', {
            get() {
                return {
                    receiver: this.receiver
                };
            }
        });
    }

    function _A(B) {
        const C = B.RTCPeerConnection.prototype.createOffer;
        B.RTCPeerConnection.prototype.createOffer = function(D) {
            if (D) {
                void 0 !== D.offerToReceiveAudio && (D.offerToReceiveAudio = !!D.offerToReceiveAudio);
                const E = this.getTransceivers().find(F => 'audio' === F.receiver.track.kind);
                !1 === D.offerToReceiveAudio && E ? 'sendrecv' === E.direction ? E.setDirection ? E.setDirection('sendonly') : E.direction = 'sendonly' : 'recvonly' === E.direction && (E.setDirection ? E.setDirection('inactive') : E.direction = 'inactive') : !0 !== D.offerToReceiveAudio || E || this.addTransceiver('audio'), void 0 !== D.offerToReceiveVideo && (D.offerToReceiveVideo = !!D.offerToReceiveVideo);
                const F = this.getTransceivers().find(G => 'video' === G.receiver.track.kind);
                !1 === D.offerToReceiveVideo && F ? 'sendrecv' === F.direction ? F.setDirection ? F.setDirection('sendonly') : F.direction = 'sendonly' : 'recvonly' === F.direction && (F.setDirection ? F.setDirection('inactive') : F.direction = 'inactive') : !0 !== D.offerToReceiveVideo || F || this.addTransceiver('video');
            }
            return E.apply(this, arguments);
        };
    }

    function _C(D) {
        'object' != typeof D || D.AudioContext || (D.AudioContext = D.webkitAudioContext);
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'shimRTCIceCandidate', function() {
        return _i;
    }), b(e.exports, 'shimMaxMessageSize', function() {
        return _k;
    }), b(e.exports, 'shimSendThrowTypeError', function() {
        return _r;
    }), b(e.exports, 'shimConnectionState', function() {
        return _u;
    }), b(e.exports, 'removeAllowExtmapMixed', function() {
        return _w;
    });
    var g = d('.....'),
        h = d('.....');

    function _i(j) {
        if (!j.RTCIceCandidate || j.RTCIceCandidate && 'foundation' in j.RTCIceCandidate.prototype)
            return;
        const k = j.RTCIceCandidate;
        j.RTCIceCandidate = function(l) {
            if ('object' == typeof l && l.candidate && 0 === l.candidate.indexOf('a=') && ((l = JSON.parse(JSON.stringify(l))).candidate = l.candidate.substr(2)), l.candidate && l.candidate.length) {
                const m = new k(l),
                    n = c(g).parseCandidate(l.candidate),
                    o = Object.assign(m, n);
                return o.toJSON = function() {
                    return {
                        candidate: o.candidate,
                        sdpMid: o.sdpMid,
                        sdpMLineIndex: o.sdpMLineIndex,
                        usernameFragment: o.usernameFragment
                    };
                }, o;
            }
            return new k(l);
        }, j.RTCIceCandidate.prototype = k.prototype, h.wrapPeerConnectionEvent(j, 'icecandidate', l => (l.candidate && Object.defineProperty(l, 'candidate', {
            value: new j.RTCIceCandidate(l.candidate),
            writable: 'false'
        }), l));
    }

    function _k(l) {
        if (!l.RTCPeerConnection)
            return;
        const m = h.detectBrowser(l);
        'sctp' in l.RTCPeerConnection.prototype || Object.defineProperty(l.RTCPeerConnection.prototype, 'sctp', {
            get() {
                return void 0 === this._sctp ? null : this._sctp;
            }
        });
        const n = function(o) {
                if (!o || !o.sdp)
                    return !1;
                const p = c(g).splitSections(o.sdp);
                return p.shift(), p.some(q => {
                    const r = c(g).parseMLine(q);
                    return r && 'application' === r.kind && -1 !== r.protocol.indexOf('SCTP');
                });
            },
            o = function(p) {
                const q = p.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                if (null === q || q.length < 2)
                    return -1;
                const r = parseInt(q[1], 10);
                return r != r ? -1 : r;
            },
            p = function(q) {
                let r = 65536;
                return 'firefox' === m.browser && (r = m.version < 57 ? -1 === q ? 16384 : 2147483637 : m.version < 60 ? 57 === m.version ? 65535 : 65536 : 2147483637), r;
            },
            q = function(r, s) {
                let t = 65536;
                'firefox' === m.browser && 57 === m.version && (t = 65535);
                const u = c(g).matchPrefix(r.sdp, 'a=max-message-size:');
                return u.length > 0 ? t = parseInt(u[0].substr(19), 10) : 'firefox' === m.browser && -1 !== s && (t = 2147483637), t;
            },
            _r = l.RTCPeerConnection.prototype.setRemoteDescription;
        l.RTCPeerConnection.prototype.setRemoteDescription = function() {
            if (this._sctp = null, 'chrome' === m.browser && m.version >= 76) {
                const {
                    sdpSemantics: s
                } = this.getConfiguration();
                'plan-b' === s && Object.defineProperty(this, 'sctp', {
                    get() {
                        return void 0 === this._sctp ? null : this._sctp;
                    },
                    enumerable: !0,
                    configurable: !0
                });
            }
            if (n(arguments[0])) {
                const t = o(arguments[0]),
                    u = _i(t),
                    v = _k(arguments[0], t);
                let w;
                w = 0 === u && 0 === v ? Number.POSITIVE_INFINITY : 0 === u || 0 === v ? Math.max(u, v) : Math.min(u, v);
                const x = {};
                Object.defineProperty(x, 'maxMessageSize', {
                    get: () => w
                }), this._sctp = x;
            }
            return _r.apply(this, arguments);
        };
    }

    function r(s) {
        if (!s.RTCPeerConnection || !('createDataChannel' in s.RTCPeerConnection.prototype))
            return;

        function t(u, v) {
            const w = u.send;
            u.send = function() {
                const x = arguments[0],
                    y = x.length || x.size || x.byteLength;
                if ('open' === u.readyState && v.sctp && y > v.sctp.maxMessageSize)
                    throw new TypeError('Message too large (can send a maximum of ' + v.sctp.maxMessageSize + ' bytes)');
                return w.apply(u, arguments);
            };
        }
        const v = s.RTCPeerConnection.prototype.createDataChannel;
        s.RTCPeerConnection.prototype.createDataChannel = function() {
            const w = v.apply(this, arguments);
            return t(w, this), w;
        }, h.wrapPeerConnectionEvent(s, 'datachannel', w => (t(w.channel, w.target), w));
    }

    function _u(v) {
        if (!v.RTCPeerConnection || 'connectionState' in v.RTCPeerConnection.prototype)
            return;
        const w = v.RTCPeerConnection.prototype;
        Object.defineProperty(w, 'connectionState', {
            get() {
                return {
                    completed: 'connected',
                    checking: 'connecting'
                } [this.iceConnectionState] || this.iceConnectionState;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(w, 'onconnectionstatechange', {
            get() {
                return this._onconnectionstatechange || null;
            },
            set(x) {
                this._onconnectionstatechange && (this.removeEventListener('connectionstatechange', this._onconnectionstatechange), delete this._onconnectionstatechange), x && this.addEventListener('connectionstatechange', this._onconnectionstatechange = x);
            },
            enumerable: !0,
            configurable: !0
        }), [
            'setLocalDescription',
            'setRemoteDescription'
        ].forEach(x => {
            const y = w[x];
            w[x] = function() {
                return this._connectionstatechangepoly || (this._connectionstatechangepoly = z => {
                    const A = z.target;
                    if (A._lastConnectionState !== A.connectionState) {
                        A._lastConnectionState = A.connectionState;
                        const B = new Event('connectionstatechange', z);
                        A.dispatchEvent(B);
                    }
                    return z;
                }, this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly)), y.apply(this, arguments);
            };
        });
    }

    function _w(x) {
        if (!x.RTCPeerConnection)
            return;
        const y = h.detectBrowser(x);
        if ('chrome' === y.browser && y.version >= 71)
            return;
        if ('safari' === y.browser && y.version >= 605)
            return;
        const z = x.RTCPeerConnection.prototype.setRemoteDescription;
        x.RTCPeerConnection.prototype.setRemoteDescription = function(A) {
            return A && A.sdp && -1 !== A.sdp.indexOf('\na=extmap-allow-mixed') && (A.sdp = A.sdp.split('\n').filter(B => 'a=extmap-allow-mixed' !== B.trim()).join('\n')), z.apply(this, arguments);
        };
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'Content', function() {
        return _v;
    }), b(e.exports, 'default', function() {
        return _u;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    let s, t = class extends k.Component {
        render() {
            const {
                upgrades: {
                    lavaUpgrades: u
                }
            } = this.props;
            return (0, i.jsx)(m.Container, {
                style: {
                    display: 'flex',
                    justifyContent: 'center'
                },
                children: (0, i.jsxs)(_v, {
                    children: [
                        (0, i.jsx)(n.default, {}),
                        u.map(v => (0, i.jsx)(o.default, {
                            icon: v.icon,
                            background: v.background,
                            name: v.name,
                            description: v.description,
                            cost: v.price,
                            canAfford: this.canAffordUpgrade(v.id),
                            onClick: () => this.purchaseUpgrade(v.id)
                        }, `lava-upgrade-${ v.id }`)),
                        (0, i.jsx)('div', {
                            style: {
                                height: 20,
                                width: '100%'
                            }
                        })
                    ]
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'canAffordUpgrade', u => {
                const v = this.props.upgrades.lavaUpgrades.find(w => w.id === u);
                return !!v && this.props.balance.balance >= v.price;
            }), (0, g.default)(this, 'purchaseUpgrade', u => {
                this.canAffordUpgrade(u) && ((0, p.send)(q.default.lavaPurchasePiece, {
                    type: u
                }), (0, p.changeRoute)(r.default.questions));
            });
        }
    };
    t = (0, h.__decorate)([
        (0, j.inject)('upgrades', 'balance'),
        j.observer
    ], t);
    var _u = t;
    const _v = l.default.div(s || (s = (w => w)`
  width: 100%;
  max-width: 700px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    let r = class extends n.Component {
        render() {
            return this.props.entities.lava ? (0, h.jsxs)(o.Container, {
                children: [
                    (0, h.jsx)(o.IconContainer, {
                        colors: {
                            text: k.default.White,
                            background: '#009624'
                        },
                        children: (0, h.jsx)(i.default, {
                            name: 'fas fa-wrench fa-flip-horizontal'
                        })
                    }),
                    (0, h.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        },
                        children: [
                            (0, h.jsx)('div', {
                                style: {
                                    fontWeight: 900,
                                    fontSize: 35,
                                    lineHeight: '35px',
                                    marginTop: 4
                                },
                                children: (0, h.jsx)(j.default, {
                                    text: 'Build'
                                })
                            }),
                            (0, h.jsx)(p.default, {
                                style: {
                                    marginBottom: 15,
                                    marginTop: 18
                                }
                            }),
                            (0, h.jsxs)('div', {
                                style: {
                                    fontSize: 16,
                                    textAlign: 'center'
                                },
                                children: [
                                    (0, h.jsxs)('b', {
                                        children: [
                                            (0, h.jsx)(j.default, {
                                                text: 'Building Height'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, l.numberWithCommas)(this.props.entities.lava.buildHeight),
                                    ' ',
                                    (0, h.jsx)(j.default, {
                                        text: (0, q.plural)('block', this.props.entities.lava.buildHeight)
                                    }),
                                    (0, h.jsx)('br', {}),
                                    (0, h.jsxs)('b', {
                                        children: [
                                            (0, h.jsx)(j.default, {
                                                text: 'Lava Height'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, l.numberWithCommas)(this.props.entities.lava.lavaHeight),
                                    ' ',
                                    (0, h.jsx)(j.default, {
                                        text: (0, q.plural)('block', this.props.entities.lava.lavaHeight)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : null;
        }
    };
    r = (0, g.__decorate)([
        (0, m.inject)('entities'),
        m.observer
    ], r);
    var _s = r;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _A;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....');
    let w;
    const x = [
        j.ImposterShopItemId.fakeInvestigation,
        j.ImposterShopItemId.investigationRemover,
        j.ImposterShopItemId.privateInvestigation,
        j.ImposterShopItemId.publicInvestigation
    ];
    let y = class extends l.Component {
        render() {
            return (0, i.jsx)(n.Container, {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    background: '#cfd8dc',
                    fontFamily: '\'Space Grotesk\', monospace'
                },
                children: (0, i.jsxs)(o.Content, {
                    children: [
                        (0, i.jsx)(q.default, {}),
                        this.props.imposter.shopItems.map(z => (0, i.jsx)(m.default, {
                            style: {
                                color: p.default.White,
                                background: '#000a12'
                            },
                            icon: z.icon,
                            background: z.background,
                            name: z.name,
                            description: z.description,
                            cost: z.cost,
                            canAfford: this.canPurchaseItem(z.id),
                            aboveNameComponent: this.isItemNotAvailable(z.id) ? (0, i.jsx)(_z, {}) : null,
                            onClick: () => this.purchaseItem(z.id)
                        }, `imposter-item-${ z.id }`)),
                        (0, i.jsx)('div', {
                            style: {
                                height: 25
                            }
                        })
                    ]
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'isItemNotAvailable', z => !(0 !== this.props.imposter.investigationsLeft || !x.includes(z)) || !(z !== j.ImposterShopItemId.blendIn || !this.props.imposter.me || !this.props.imposter.me.blendingIn)), (0, g.default)(this, 'canPurchaseItem', z => !this.isItemNotAvailable(z) && this.canAffordItem(z)), (0, g.default)(this, 'canAffordItem', z => {
                const A = this.props.imposter.shopItems.find(B => B.id === z);
                return !!A && this.props.balance.balance >= A.cost;
            }), (0, g.default)(this, 'purchaseItem', z => {
                if (x.includes(z) && z !== j.ImposterShopItemId.investigationRemover || z === j.ImposterShopItemId.donate || z === j.ImposterShopItemId.noteViewer || z === j.ImposterShopItemId.clearListRemover)
                    return this.props.imposter.currentShopItem = z, void(this.props.imposter.currentShopItemModalVisible = !0);
                (0, t.send)(u.default.imposter.purchase, {
                    item: z
                }), z !== j.ImposterShopItemId.meeting && (0, t.changeRoute)(v.default.questions);
            });
        }
    };
    y = (0, h.__decorate)([
        (0, k.inject)('imposter', 'balance'),
        k.observer
    ], y);
    const _z = () => (0, i.jsx)(_B, {
        children: (0, i.jsx)(s.default, {
            text: 'Not Available'
        })
    });
    var _A = y;
    const _B = r.default.div(w || (w = (C => C)`
  background: #d32f2f;
  font-size: 14px;
  padding: 3px 11px;
  border-radius: 8px;
  margin-bottom: 2px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    let r = class extends m.Component {
        render() {
            const {
                me: s,
                investigationsLeft: t,
                meetingsLeft: u,
                impostersLeft: v
            } = this.props.imposter;
            if (!s)
                return null;
            const w = s.role === p.PersonRole.imposter;
            return (0, h.jsxs)(n.Container, {
                style: {
                    background: '#263238',
                    color: k.default.White
                },
                children: [
                    (0, h.jsx)(n.IconContainer, {
                        colors: {
                            text: '#ffeb3b',
                            background: '#000a12'
                        },
                        children: (0, h.jsx)(i.default, {
                            name: 'far fa-space-station-moon-alt'
                        })
                    }),
                    (0, h.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        },
                        children: [
                            (0, h.jsx)('div', {
                                style: {
                                    fontWeight: 900,
                                    fontSize: 35,
                                    lineHeight: '35px',
                                    marginTop: 4
                                },
                                children: (0, h.jsx)(j.default, {
                                    text: 'Mission Control'
                                })
                            }),
                            (0, h.jsx)(o.default, {
                                style: {
                                    marginBottom: 15,
                                    marginTop: 18
                                }
                            }),
                            (0, h.jsxs)('div', {
                                style: {
                                    fontSize: 16,
                                    textAlign: 'center'
                                },
                                children: [
                                    (0, h.jsxs)('b', {
                                        children: [
                                            (0, h.jsx)(j.default, {
                                                text: 'Investigations Left'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, q.numberWithCommas)(t),
                                    (0, h.jsx)('br', {}),
                                    !w && (0, h.jsxs)(h.Fragment, {
                                        children: [
                                            (0, h.jsxs)('b', {
                                                children: [
                                                    (0, h.jsx)(j.default, {
                                                        text: 'Impostors Left'
                                                    }),
                                                    ':'
                                                ]
                                            }),
                                            ' ',
                                            (0, q.numberWithCommas)(v),
                                            (0, h.jsx)('br', {})
                                        ]
                                    }),
                                    (0, h.jsxs)('b', {
                                        children: [
                                            (0, h.jsx)(j.default, {
                                                text: 'Meetings Left'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, q.numberWithCommas)(u)
                                ]
                            })
                        ]
                    })
                ]
            });
        }
    };
    r = (0, g.__decorate)([
        (0, l.inject)('imposter'),
        l.observer
    ], r);
    var _s = r;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _u;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    let r;
    const s = d('.....').default.div(r || (r = (t => t)`
  height: 100%;
  width: 100%;
  background: ${ 0 };
  display: flex;
  align-items: center;
  flex-direction: column;
`), j.default.BackgroundGray);
    let t = class extends q.Component {
        render() {
            const u = this.props.upgrades.upgrades.filter(v => v.name === this.props.upgrades.currentlySelectedUpgrade)[0],
                v = this.props.upgrades.upgradeLevelTabs[(0, o.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)];
            return (0, i.jsxs)(s, {
                children: [
                    (0, i.jsx)(k.default, {
                        onPurchase: this.markAsPurchased
                    }),
                    (0, i.jsx)(m.default, {
                        levels: u.levels,
                        active: v
                    }),
                    (0, i.jsx)(l.default, {
                        open: this.state.purchased,
                        onContinue: this.closeModal
                    })
                ]
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                purchased: !1
            }), (0, g.default)(this, 'closeModal', u => {
                this.setState({
                    purchased: !1
                }, () => u ? setTimeout(() => (0, o.changeRoute)(n.default.questions), 300) : null);
            }), (0, g.default)(this, 'markAsPurchased', () => this.setState({
                purchased: !0
            }));
        }
    };
    t = (0, h.__decorate)([
        (0, p.inject)('upgrades'),
        p.observer
    ], t);
    var _u = t;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _G;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....');
    let t, u, v, w, x, y = z => z;
    const z = '4px',
        A = s.default.div(t || (t = y`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        B = s.default.div(u || (u = y`
  height: 90%;
  max-height: 500px;
  width: 90%;
  max-width: 700px;
  border-radius: ${ 0 };
  box-shadow: ${ 0 };
  background: ${ 0 };
  color: ${ 0 };
`), z, m.default.basic, C => C.theme.question.background, C => C.theme.question.text),
        C = s.default.div(v || (v = y`
  height: 20%;
  border-top-left-radius: ${ 0 };
  border-top-right-radius: ${ 0 };
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`), z, z),
        D = s.default.div(w || (w = y`
  height: 50%;
  width: 100%;
`)),
        E = s.default.div(x || (x = y`
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
`), F => F.disabled ? l.default.DisabledGray : 'rgba(255,255,255,0.2)', F => F.disabled ? 'not-allowed' : 'pointer', l.default.White, z, z, F => F.disabled ? l.default.DisabledGray : 'rgba(255,255,255,0.25)');
    let F = class extends r.Component {
        render() {
            const G = this.getBuyDetails();
            return (0, i.jsx)(A, {
                children: (0, i.jsxs)(B, {
                    children: [
                        (0, i.jsx)(C, {
                            children: (0, i.jsx)(k.default, {
                                paddingHorizontal: 30,
                                max: 40,
                                text: (0, i.jsx)(j.default, {
                                    text: this.getTitle()
                                })
                            })
                        }),
                        (0, i.jsx)(D, {
                            children: (0, i.jsx)(k.default, {
                                mode: 'multi',
                                max: 200,
                                text: this.getValue()
                            })
                        }),
                        (0, i.jsx)(E, {
                            onClick: G.onClick,
                            disabled: G.disabled,
                            children: (0, i.jsx)(k.default, {
                                max: 45,
                                paddingHorizontal: 20,
                                paddingVertical: 20,
                                text: G.disabledAllText ? (0, i.jsx)(j.default, {
                                    text: 'Buy for',
                                    suffix: ` ${ G.text }`
                                }) : (0, i.jsx)(j.default, {
                                    text: G.text
                                })
                            })
                        })
                    ]
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'canPurchase', () => this.ownedLevel() < this.currentlySelectedLevel() && this.getPrice() <= this.props.balance.balance), (0, g.default)(this, 'currentlySelectedLevel', () => this.props.upgrades.upgradeLevelTabs[(0, p.upgradeNameToKey)(this.currentUpgrade().name)]), (0, g.default)(this, 'ownedLevel', () => this.props.upgrades.upgradeLevels[(0, p.upgradeNameToKey)(this.currentUpgrade().name)]), (0, g.default)(this, 'currentUpgrade', () => this.props.upgrades.upgrades.filter(G => G.name === this.props.upgrades.currentlySelectedUpgrade)[0]), (0, g.default)(this, 'getTitle', () => {
                const G = this.currentUpgrade();
                return G.name === o.upgradeNames.insurance ? 'Amount Covered' : G.name;
            }), (0, g.default)(this, 'getValue', () => {
                const G = this.currentUpgrade(),
                    H = this.getLevel().value;
                return G.name === o.upgradeNames.insurance ? Math.round(100 * (1 - H)) + '%' : G.name === o.upgradeNames.multiplier ? H + 'x' : (0, p.getMoney)(H * this.props.balance.incomeMultiplier);
            }), (0, g.default)(this, 'getBuyDetails', () => {
                if (this.ownedLevel() >= this.currentlySelectedLevel())
                    return {
                        text: 'Already Owned',
                        disabled: !0,
                        onClick: null
                    };
                const G = this.canPurchase();
                return {
                    text: (0, p.getMoney)(this.getPrice()),
                    disabled: !G,
                    onClick: G ? this.purchaseUpgrade : null,
                    disabledAllText: !0
                };
            }), (0, g.default)(this, 'purchaseUpgrade', () => {
                const G = this.currentUpgrade(),
                    H = this.currentlySelectedLevel();
                (0, p.send)(n.default.upgradePurchased, {
                    upgradeName: G.name,
                    level: H
                }), this.props.onPurchase();
            }), (0, g.default)(this, 'getLevel', () => {
                const G = this.currentlySelectedLevel();
                return this.currentUpgrade().levels.filter((H, I) => I + 1 === G)[0];
            }), (0, g.default)(this, 'getPrice', () => (0, p.getUpgradeCost)(this.getLevel().price));
        }
    };
    F = (0, h.__decorate)([
        (0, q.inject)('upgrades', 'balance'),
        q.observer
    ], F);
    var _G = F;
}), d.register('.....', function(e, f) {
    b(e.exports, 'confettiConfig', function() {
        return _B;
    }), b(e.exports, 'default', function() {
        return _I;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....');
    let v, w, x, y, z, A = B => B;
    const _B = {
            angle: 90,
            spread: 67,
            startVelocity: 60,
            elementCount: 50,
            decay: 0.87
        },
        C = u.default.div(v || (v = A`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: ${ 0 };
  display: ${ 0 };
`), D => D.open ? 0 : -1, D => D.visible ? 'flex' : 'none'),
        D = u.default.div(w || (w = A`
  background: ${ 0 };
  font-family: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), m.default.White, n.default.name),
        E = u.default.div(x || (x = A`
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 2.5s;
`)),
        F = u.default.div(y || (y = A`
  font-weight: bold;
  font-size: 45px;
`)),
        G = u.default.div(z || (z = A`
  font-size: 23px;
  text-align: center;
`));
    let H = class extends s.Component {
        componentDidUpdate(I) {
            this.props.open && !I.open && (p.celebrate.play(), setTimeout(() => this.setState({
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
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(k.default, {
                        open: this.props.open,
                        close: this.closeWithoutMovingForward,
                        customMaxWidth: '500px',
                        children: (0, i.jsxs)(D, {
                            children: [
                                (0, i.jsx)(E, {
                                    className: 'animated pulse infinite',
                                    children: (0, i.jsx)('img', {
                                        style: {
                                            maxHeight: 150
                                        },
                                        src: (0, q.getAssetPath)('balloons.svg')
                                    })
                                }),
                                (0, i.jsxs)(F, {
                                    children: [
                                        (0, i.jsx)(l.default, {
                                            text: 'Purchased'
                                        }),
                                        '!'
                                    ]
                                }),
                                (0, i.jsx)(G, {
                                    children: (0, i.jsx)(l.default, {
                                        text: this.getDescription()
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    style: {
                                        marginTop: 10
                                    },
                                    children: (0, i.jsx)(j.default, {
                                        onClick: this.closeWithMovingForward,
                                        type: 'primary',
                                        label: (0, i.jsx)(l.default, {
                                            text: 'Continue to Questions'
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)(C, {
                        visible: this.state.showConfetti,
                        open: this.props.open,
                        children: (0, i.jsx)(c(t), {
                            active: this.state.showConfetti,
                            config: _B
                        })
                    })
                ]
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                showConfetti: !1
            }), (0, g.default)(this, 'upgradeName', () => this.props.upgrades.currentlySelectedUpgrade), (0, g.default)(this, 'upgradeDetails', () => {
                const I = this.props.upgrades.upgrades.filter(J => J.name === this.upgradeName())[0];
                let J = 1;
                return {
                    ...I.levels.filter((K, L) => L + 1 === this.props.upgrades.upgradeLevelTabs[(0, q.upgradeNameToKey)(this.upgradeName())] && (J = L + 1, !0))[0],
                    level: J
                };
            }), (0, g.default)(this, 'closeWithMovingForward', () => this.close(!0)), (0, g.default)(this, 'closeWithoutMovingForward', () => this.close(!1)), (0, g.default)(this, 'close', I => {
                this.setState({
                    showConfetti: !1
                }, () => this.props.onContinue(I));
            }), (0, g.default)(this, 'handleKeyDown', ({
                keyCode: I = 0
            }) => {
                13 === I && this.props.open && this.props.onContinue(!0);
            }), (0, g.default)(this, 'getDescription', () => {
                const I = this.upgradeDetails().value,
                    J = this.upgradeName();
                return J === o.upgradeNames.moneyPerQuestion ? `You will now earn/lose ${ (0, q.getMoney)(I * this.props.balance.incomeMultiplier) } per question.` : J === o.upgradeNames.streakBonus ? `You'll now earn an extra ${ (0, q.getMoney)(I * this.props.balance.incomeMultiplier) } for each question you answer correctly in a row.` : J === o.upgradeNames.multiplier ? `Each question's earnings/loss will now be multiplied by ${ (0, q.numberWithCommas)(I) }x.` : J === o.upgradeNames.insurance ? `After answering incorrectly, you will now only have to pay back ${ 100 * I }% of the cost.` : null;
            });
        }
    };
    H = (0, h.__decorate)([
        (0, r.inject)('upgrades', 'balance'),
        r.observer
    ], H);
    var _I = H;
}), d.register('.....', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    var g, h = function() {
            function i(j, k) {
                for (var l = 0; l < k.length; l++) {
                    var m = k[l];
                    m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(j, m.key, m);
                }
            }
            return function(l, m, n) {
                return m && i(l.prototype, m), n && i(l, n), l;
            };
        }(),
        i = d('.....'),
        j = (g = i) && g.__esModule ? g : {
            default: g
        },
        k = d('.....');
    var l = {
            position: 'relative'
        },
        m = function(n) {
            function o(p) {
                ! function(q, r) {
                    if (!(q instanceof r))
                        throw new TypeError('Cannot call a class as a function');
                }(this, o);
                var q = function(r, s) {
                    if (!r)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !s || 'object' != typeof s && 'function' != typeof s ? r : s;
                }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, p));
                return q.setRef = q.setRef.bind(q), q;
            }
            return function(q, r) {
                if ('function' != typeof r && null !== r)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof r);
                q.prototype = Object.create(r && r.prototype, {
                    constructor: {
                        value: q,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(q, r) : q.__proto__ = r);
            }(o, n), h(o, [{
                    key: 'componentWillReceiveProps',
                    value: function(q) {
                        q.active && !this.props.active && (0, k.confetti)(this.container, q.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(q) {
                        this.container = q;
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return j.default.createElement('div', {
                            className: this.props.className,
                            style: l,
                            ref: this.setRef
                        });
                    }
                }
            ]), o;
        }(i.Component);
    e.exports.default = m;
}), d.register('.....', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    }), e.exports.confetti = function(g) {
        var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = Object.assign({}, _n, h),
            j = i.elementCount,
            k = i.colors,
            l = i.width,
            m = i.height,
            n = i.angle,
            o = i.spread,
            p = i.startVelocity,
            q = i.decay,
            r = i.duration,
            s = i.random,
            t = c(g, j, k, l, m),
            u = t.map(function(v) {
                return {
                    element: v,
                    physics: d(n, o, p, s)
                };
            });
        return _m(g, u, q, r);
    };

    function g(h, i, j, k, l) {
        return Array.from({
            length: i
        }).map(function(m, n) {
            var o = document.createElement('div'),
                p = j[n % j.length];
            return o.style['background-color'] = p, o.style.width = k, o.style.height = l, o.style.position = 'absolute', o.style.willChange = 'transform, opacity', h.appendChild(o), o;
        });
    }

    function h(i, j, k, l) {
        var _m = i * (Math.PI / 180),
            _n = j * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * l(),
            wobbleSpeed: 0.1 + 0.1 * l(),
            velocity: 0.5 * k + l() * k,
            angle2D: -_m + (0.5 * _n - l() * _n),
            angle3D: -Math.PI / 4 + l() * (Math.PI / 2),
            tiltAngle: l() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * l()
        };
    }

    function k(l, m, n, o) {
        var p = void 0;
        return new Promise(function(q) {
            requestAnimationFrame(function i(r) {
                k || (k = r);
                var s = k === r ? 0 : (r - k) / o;
                m.forEach(function(t) {
                    return function(u, v, w) {
                        u.physics.x += Math.cos(u.physics.angle2D) * u.physics.velocity, u.physics.y += Math.sin(u.physics.angle2D) * u.physics.velocity, u.physics.z += Math.sin(u.physics.angle3D) * u.physics.velocity, u.physics.wobble += u.physics.wobbleSpeed, u.physics.velocity *= w, u.physics.y += 3, u.physics.tiltAngle += u.physics.tiltAngleSpeed;
                        var x = u.physics,
                            y = x.x,
                            z = x.y,
                            A = x.tiltAngle,
                            B = x.wobble,
                            C = 'translate3d(' + (y + 10 * Math.cos(B)) + 'px, ' + (z + 10 * Math.sin(B)) + 'px, 0) rotate3d(1, 1, 1, ' + A + 'rad)';
                        u.element.style.transform = C, u.element.style.opacity = 1 - v;
                    }(t, s, n);
                }), r - k < o ? requestAnimationFrame(i) : (m.forEach(function(t) {
                    if (t.element.parentNode === l)
                        return l.removeChild(t.element);
                }), q());
            });
        });
    }
    var m = {
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
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    let o;
    const p = d('.....').default.div(o || (o = (q => q)`
  height: 40%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`));
    let q = class extends n.Component {
        componentDidMount() {
            document.addEventListener('keydown', this.handleKeyDown);
        }
        componentWillUnmount() {
            document.removeEventListener('keydown', this.handleKeyDown);
        }
        render() {
            const r = this.currentLevel();
            return (0, i.jsx)(p, {
                children: this.props.levels.map((s, t) => (0, i.jsx)(j.default, {
                    level: t + 1,
                    changeLevel: this.changeLevel,
                    chosen: t + 1 === this.props.active,
                    canAfford: this.props.balance.balance >= (0, l.getUpgradeCost)(s.price),
                    alreadyPurchased: r >= t + 1
                }, s.value))
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'changeLevel', r => {
                r !== this.props.active && (k.click2.play(), this.props.upgrades.upgradeLevelTabs[(0, l.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)] = r);
            }), (0, g.default)(this, 'currentLevel', () => this.props.upgrades.upgradeLevels[(0, l.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)]), (0, g.default)(this, 'getNextPosition', r => {
                const s = this.props.active;
                return 'left' === r && 1 !== s && 6 !== s ? s - 1 : 'right' === r && 5 !== s && 10 !== s ? s + 1 : 'up' === r && s - 5 > 0 ? s - 5 : 'down' === r && s + 5 < 11 ? s + 5 : s;
            }), (0, g.default)(this, 'handleKeyDown', ({
                keyCode: r = 0
            }) => {
                37 !== r && 65 !== r || this.changeLevel(this.getNextPosition('left')), 38 !== r && 87 !== r || this.changeLevel(this.getNextPosition('up')), 39 !== r && 68 !== r || this.changeLevel(this.getNextPosition('right')), 40 !== r && 83 !== r || this.changeLevel(this.getNextPosition('down'));
            });
        }
    };
    q = (0, h.__decorate)([
        (0, m.inject)('upgrades', 'balance'),
        m.observer
    ], q);
    var _r = q;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    let o, p, q = r => r;
    class r extends m.Component {
        render() {
            return (0, h.jsx)(_t, {
                onMouseDown: this.changeLevel,
                chosen: this.props.chosen,
                children: (0, h.jsx)(k.default, {
                    mode: 'single',
                    max: 30,
                    paddingHorizontal: 10,
                    text: (0, h.jsxs)(_u, {
                        children: [
                            (0, h.jsx)('div', {
                                style: {
                                    color: this.getCircleColor(),
                                    marginRight: 3
                                },
                                children: (0, h.jsx)(i.default, {
                                    name: 'fas fa-circle'
                                })
                            }),
                            (0, h.jsx)('div', {
                                children: (0, h.jsx)(j.default, {
                                    text: 'Level ' + this.props.level
                                })
                            })
                        ]
                    })
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'getCircleColor', () => this.props.alreadyPurchased ? 'gray' : this.props.canAfford ? 'green' : 'red'), (0, g.default)(this, 'changeLevel', () => this.props.changeLevel(this.props.level));
        }
    }
    var _s = r;
    const _t = n.default.div(o || (o = q`
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
`), u => u.chosen ? '#28004c' : '#0D0019', l.default.White),
        _u = n.default.div(p || (p = q`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 570px) {
    flex-direction: column;
  }
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _z;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....');
    let t, u, v = w => w;
    const w = m.default.div.attrs({
            className: 'scroll-y'
        })(t || (t = v`
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ 0 }) repeat 0 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: ${ 0 };
`), (0, j.getAssetPath)('background.png'), () => (0, j.mainFontName)()),
        x = m.default.div(u || (u = v`
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
`), y => y.animationDelay),
        y = z => {
            const A = (B, C) => (Math.pow(10, C) + ~~B).toString().substring(1),
                B = z % 60;
            return `${ A(Math.floor(z / 60), 2) }:${ A(B, 2) }`;
        };
    var _z = (0, k.observer)(() => {
        const {
            entities: {
                lava: A
            },
            balance: B,
            questions: C
        } = l.useContext(s.default);
        if ((0, j.inImposterMode)())
            return (0, g.jsx)(r.default, {});
        let D = 0;
        return (0, j.inBossBattleMode)() && (D = 11), (0, j.inZombiesVsHumansMode)() && (D = 17), (0, j.inPardyMode)() && (D = 16), A && (D = 13), (0, g.jsx)(w, {
            children: (0, g.jsxs)(x, {
                className: 'animated zoomInDown',
                animationDelay: D,
                children: [
                    (0, g.jsx)(p.default, {
                        customText: A ? '\uD83C\uDF0B Game Over!' : (0, j.inZombiesVsHumansMode)() ? (0, j.defendingHomebaseResultsInfo)().text : null
                    }),
                    (0, j.inZombiesVsHumansMode)() ? (0, j.defendingHomebaseResultsInfo)().won ? (0, g.jsx)(n.default, {}) : null : (0, g.jsx)(n.default, {}),
                    A ? (0, g.jsxs)(g.Fragment, {
                        children: [
                            (0, g.jsx)(o.default, {
                                customColor: '#1B5E20',
                                amount: y(A.secondsLasted),
                                tagline: (0, g.jsx)(i.default, {
                                    text: 'Lava Survival Time'
                                })
                            }),
                            (0, g.jsx)(o.default, {
                                amount: `${ (0, j.numberWithCommas)(A.buildHeight) } ${ (0, q.plural)('block', A.buildHeight) }`,
                                tagline: (0, g.jsx)(i.default, {
                                    text: 'Building Height'
                                })
                            }),
                            (0, g.jsx)(o.default, {
                                amount: `${ (0, j.numberWithCommas)(A.buildPieces) } ${ (0, q.plural)('piece', A.buildPieces) }`,
                                tagline: (0, g.jsx)(i.default, {
                                    text: 'Building Pieces'
                                })
                            })
                        ]
                    }) : null,
                    (0, g.jsx)(o.default, {
                        amount: (0, j.getMoney)(B.balance),
                        tagline: (0, g.jsx)(i.default, {
                            text: (0, j.inDrawMode)() ? 'Final Score' : 'Final Balance'
                        })
                    }),
                    !(0, j.inDrawMode)() && (0, g.jsxs)(g.Fragment, {
                        children: [
                            (0, g.jsx)(o.default, {
                                customColor: '#1B5E20',
                                amount: (0, j.numberWithCommas)(C.questionsAnsweredCorrectly),
                                tagline: (0, g.jsx)(i.default, {
                                    text: 'Questions Answered Correctly'
                                })
                            }),
                            (0, g.jsx)(o.default, {
                                customColor: '#DD2C00',
                                amount: (0, j.numberWithCommas)(C.questionsAnsweredIncorrectly),
                                tagline: (0, g.jsx)(i.default, {
                                    text: 'Questions Answered Incorrectly'
                                })
                            })
                        ]
                    }),
                    !(0, j.inZombiesVsHumansMode)() && !A && (0, g.jsx)(h.default, {
                        showSelf: !0
                    })
                ]
            })
        });
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _v;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    d('.....');
    var o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    let s;
    const t = d('.....').default.div(s || (s = (u => u)`
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
`), m.default.basic, l.default.White, u => u.theme.question.background, u => u.theme.question.text);
    let u = class extends r.Component {
        render() {
            return this.props.gameOptions.clapping ? (0, i.jsx)(t, {
                onClick: this.onClap,
                children: (0, i.jsx)(j.default, {
                    max: 75,
                    text: (0, i.jsxs)('div', {
                        className: 'animated pulse infinite',
                        children: [
                            (0, k.getClappingEmoji)(),
                            ' ',
                            (0, p.numberWithCommas)(this.state.clapCount)
                        ]
                    })
                })
            }) : null;
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                clapCount: 0
            }), (0, g.default)(this, 'onClap', () => {
                const v = this.props.powerups.activePowerups.includes(o.PowerupNames.clapMultiplier) ? 10 : 1;
                (0, k.getClapSound)().play(), (0, p.send)(n.default.clap, {
                    amount: v
                }), this.setState({
                    clapCount: this.state.clapCount + v
                });
            });
        }
    };
    u = (0, h.__decorate)([
        (0, q.inject)('gameOptions', 'powerups'),
        q.observer
    ], u);
    var _v = u;
}), d.register('.....', function(e, f) {
    b(e.exports, 'getClappingEmoji', function() {
        return _h;
    }), b(e.exports, 'getClapSound', function() {
        return _i;
    });
    var g = d('.....');
    const _h = () => '\uD83D\uDC4F',
        _i = () => g.clap;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....');
    let k, l, m, n = o => o;
    const o = j.default.div(k || (k = n`
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
`), i.default.White),
        p = j.default.div(l || (l = n`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
`)),
        q = j.default.div(m || (m = n`
  height: 72px;
  width: 100%;
  color: ${ 0 };
`), r => r.customColor ? r.customColor : i.default.Black);
    var _r = s => (0, g.jsxs)(o, {
        children: [
            (0, g.jsx)(p, {
                children: s.tagline
            }),
            (0, g.jsx)(q, {
                customColor: s.customColor,
                children: (0, g.jsx)(h.default, {
                    paddingHorizontal: 10,
                    paddingVertical: 0,
                    max: 72,
                    text: s.amount
                })
            })
        ]
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _t;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....');
    let q;
    const r = s => {
            const t = s % 10,
                u = s % 100;
            return 1 === t && 11 !== u ? s + 'st' : 2 === t && 12 !== u ? s + 'nd' : 3 === t && 13 !== u ? s + 'rd' : s + 'th';
        },
        s = o.default.div(q || (q = (t => t)`
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
`), i.default.White, j.default.basic);
    var _t = (0, l.observer)(u => {
        const [v, w] = m.useState(!1), {
            user: x
        } = m.useContext(p.default);
        return m.useEffect(() => {
            setTimeout(() => {
                w(!0);
            }, 7100);
        }, []), (0, g.jsxs)(s, {
            children: [
                (0, g.jsx)(c(n), {
                    active: v,
                    config: {
                        ...k.confettiConfig,
                        angle: 270
                    }
                }),
                (0, g.jsx)(h.default, {
                    customClass: 'animated fadeIn',
                    customStyle: {
                        animationDelay: '7s'
                    },
                    max: 250,
                    text: u.customText || r(x.place) + '!'
                })
            ]
        });
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _A;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    let r, s, t, u, v, w, x, y, z = A => A;
    var _A = (0, m.observer)(() => {
        const {
            imposter: B
        } = n.useContext(q.default), C = B.impostersLeft >= 1, D = (0, p.DecryptData)(B.epl) || [];
        return n.useEffect(() => {
            (0, j.send)(i.default.imposter.requestPeople);
        }, []), (0, g.jsx)(_B, {
            children: (0, g.jsxs)(_C, {
                children: [
                    (0, g.jsx)(_D, {
                        children: (0, g.jsx)(k.default, {
                            max: 120,
                            paddingVertical: 0,
                            paddingHorizontal: 0,
                            text: (C ? 'Impostors' : 'Crewmates') + ' Win'
                        })
                    }),
                    (0, g.jsxs)(_E, {
                        children: [
                            (0, g.jsx)(_F, {
                                style: {
                                    background: C ? '#d32f2f' : '#4caf50'
                                }
                            }),
                            (0, g.jsx)(_G, {
                                children: (0, g.jsx)(_H, {
                                    src: (0, j.getAssetPath)(C ? 'astronaut2.svg' : 'astronaut.svg')
                                })
                            })
                        ]
                    }),
                    (0, g.jsxs)(_I, {
                        children: [
                            (0, g.jsxs)('b', {
                                children: [
                                    (0, j.plural)('Impostor', D.filter(E => E.role === l.PersonRole.imposter).length),
                                    ':'
                                ]
                            }),
                            ' ',
                            (0, j.teamPlayerNames)(D.filter(E => E.role === l.PersonRole.imposter).map(E => E.name))
                        ]
                    })
                ]
            })
        });
    });
    const _B = o.default.div.attrs({
            className: 'flex hc maxWidth maxHeight scroll-y'
        })(r || (r = z`
  background: ${ 0 };
  color: ${ 0 };
  align-items: flex-start;
`), h.default.Black, h.default.White),
        _C = o.default.div.attrs({
            className: 'flex flex-column vc animated fadeIn'
        })(s || (s = z`
  animation-duration: 12s;
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: 'Space Grotesk', monospace;
  text-align: center;
  width: 80%;
  max-width: 500px;
`)),
        _D = o.default.div.attrs({
            className: 'maxWidth'
        })(t || (t = z`
  height: 77px;
  font-weight: 700;
`)),
        _E = o.default.div(u || (u = z`
  height: 250px;
  width: 300px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 75px;
`)),
        _F = o.default.div.attrs({
            className: 'maxWidth maxHeight animated pulse infinite'
        })(v || (v = z`
  border-radius: 50%;
  animation-duration: 2.5s;
  filter: blur(50px);
`)),
        _G = o.default.div.attrs({
            className: 'flex maxWidth hc vc'
        })(w || (w = z`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`)),
        _H = o.default.img(x || (x = z`
  filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.4));
  height: 160px;
`)),
        _I = o.default.div(y || (y = z`
  font-size: 24px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _x;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    let r, s, t = u => u;
    const u = (0, o.default)(q.Card)(r || (r = t`
  @media (min-width: 760px) and (min-height: 719px) {
    transform: scale(1.5);
  }
`)),
        v = o.default.div(s || (s = t`
  background: ${ 0 };
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`), w => w.background);
    let w = class extends n.Component {
        componentDidMount() {
            (0, l.when)(() => this.props.gameValues.gameStatus === p.GameStatus.gameplay, () => (0, k.startGame)());
        }
        render() {
            const {
                user: x
            } = this.props, y = x.team && x.team.meta && x.team.meta.isBoss;
            return (0, h.jsx)(v, {
                background: (0, k.getTeamColor)(),
                children: (0, h.jsx)(u, {
                    children: x.team ? (0, h.jsxs)(h.Fragment, {
                        children: [
                            y ? (0, h.jsx)('img', {
                                src: (0, k.getAssetPath)('power-fight.svg'),
                                style: {
                                    width: '40%'
                                }
                            }) : (0, h.jsx)('img', {
                                src: (0, k.getAssetPath)('team.svg'),
                                style: {
                                    width: '60%'
                                }
                            }),
                            (0, h.jsx)(q.Title, {
                                children: (0, h.jsx)(j.default, {
                                    text: (0, k.capitalizeFirstLetter)(x.team.id)
                                })
                            }),
                            (0, h.jsx)(q.Details, {
                                children: y ? (0, h.jsx)(j.default, {
                                    text: 'You\'re the boss. Ready to face the challengers?'
                                }) : (0, k.inZombiesVsHumansMode)() ? (0, h.jsx)(j.default, {
                                    text: 'Get ready for battle!'
                                }) : (0, h.jsx)(j.default, {
                                    text: 'Go find the rest of your team!'
                                })
                            })
                        ]
                    }) : (0, h.jsx)(i.default, {})
                })
            });
        }
    };
    w = (0, g.__decorate)([
        (0, m.inject)('user', 'gameValues'),
        m.observer
    ], w);
    var _x = w;
}), d.register('.....', function(e, f) {
    b(e.exports, 'Title', function() {
        return _n;
    }), b(e.exports, 'Details', function() {
        return _o;
    }), b(e.exports, 'Card', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    let j, k, l, m = n => n;
    const _n = g.default.div(j || (j = m`
  font-size: 34px;
  font-weight: bold;
`)),
        _o = g.default.div(k || (k = m`
  font-size: 21px;
  margin-bottom: 7px;
`)),
        _p = g.default.div(l || (l = m`
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
`), h.default.basic, i.default.White);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....');
    var _p = (0, i.observer)(() => {
        const {
            questions: q,
            balance: r,
            gameOptions: s,
            user: t,
            translations: u,
            imposter: v,
            theme: w
        } = c(h).useContext(o.default);
        c(h).useEffect(() => (q.lockedViewingCorrectAnswer = !1, () => {
            q.lockedViewingCorrectAnswer = !1;
        }), []);
        const x = y => (0, m.inImposterMode)() ? `${ y <= 0 ? '-' : '+' }${ (0, m.numberWithCommas)(Math.round(Math.abs(y))) }` : `${ y > 0 ? '+' : '' }${ (0, m.getMoney)(y) }`,
            y = () => {
                const z = (0, m.questionLocation)().find(A => A._id === q.lastQuestion);
                return z || null;
            };
        return (0, g.jsx)(j.default, {
            continueAction: () => {
                q.transitioningToNextQuestion = !1;
            },
            ecc: q.ceq,
            lastQuestion: y(),
            lastQuestionCorrectAnswer: (() => {
                const z = y();
                if (!z)
                    return null;
                let A = z.answers.find(B => B.correct);
                return A || (A = {
                    text: 'No Correct Answer',
                    correct: !1,
                    _id: 'no-correct-answer'
                }), A;
            })(),
            lastQuestionAnsweredCorrect: q.lastQuestionCorrect,
            onQuestionAnswered: z => (0, m.questionAnswered)(z),
            nextQuestion: q.nextQuestion,
            responseActions: (() => {
                const z = [];
                return q.lastQuestionCorrect && ((0, m.blockShopping)() || z.push({
                    handleClick: () => (0, m.changeRoute)(n.default.shop),
                    background: w.theme.response.shop.background,
                    text: (0, m.shopName)()
                })), z;
            })(),
            textShownWhenAnsweringCorrectly: x(r.balanceChangeIfCorrect),
            textShownWhenAnsweringIncorrectly: x(r.balanceChangeIfIncorrect),
            correctSound: (0, m.inImposterMode)() ? l.spark : l.correct,
            incorrectSound: l.incorrect,
            onActionSound: l.click,
            language: s.language,
            translations: u.translations,
            allowGoogleTranslate: s.allowGoogleTranslate,
            readToMeEnabled: t.readToMeEnabled,
            blockKeyboardEvents: v.noteDrawerOpen,
            defaultBackgroundColor: w.theme.defaultBackground,
            continueButtonColor: w.theme.response.continue,
            answerColors: w.theme.palette,
            questionColor: w.theme.question,
            textInputButtonColor: w.theme.palette[2],
            correctAnswerColor: (0, m.inImposterMode)() ? {
                background: k.default.Black,
                text: '#ffeb3b'
            } : w.theme.response.correctAnswer,
            incorrectAnswerColor: w.theme.response.incorrectAnswer,
            onLockedChange: z => {
                q.lockedViewingCorrectAnswer = z;
            }
        });
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    let l = class extends j.Component {
        render() {
            return this.props.powerups.screenAttack.powerupName && this.props.powerups.screenAttack.attackerName && this.props.powerups.screenAttack.fullScreen ? (0, h.jsx)(k.default, {}) : null;
        }
    };
    l = (0, g.__decorate)([
        (0, i.inject)('powerups'),
        i.observer
    ], l);
    var _m = l;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _D;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    let o, p, q, r, s, t, u = v => v;
    const v = w => new Promise(x => setTimeout(x, w)),
        w = n.default.div(o || (o = u`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${ 0 };
`), j.default.Black),
        x = n.default.div(p || (p = u`
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
`), y => y.backgroundImage, j.default.White),
        y = n.default.div(q || (q = u`
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
        z = n.default.div(r || (r = u`
  font-size: 37px;
  margin-bottom: 3px;
`)),
        A = n.default.div(s || (s = u`
  font-size: 20px;
  opacity: 0.8;
`)),
        B = n.default.div(t || (t = u`
  font-size: 23px;
`));
    let C = class extends l.Component {
        componentDidMount() {
            this.mounted = !0, this.beginCountdown(), (0, m.onAttack)();
        }
        componentWillUnmount() {
            this.mounted = !1;
        }
        render() {
            const D = this.secondsLeft();
            return (0, i.jsx)(w, {
                children: (0, i.jsx)(x, {
                    backgroundImage: (0, m.backgroundImage)(),
                    children: (0, i.jsxs)(y, {
                        children: [
                            (0, i.jsx)(z, {
                                children: (0, m.getTitle)()
                            }),
                            (0, i.jsxs)(A, {
                                children: [
                                    (0, m.getVerb)(),
                                    ' by ',
                                    this.props.powerups.screenAttack.attackerName
                                ]
                            }),
                            (0, i.jsx)('i', {
                                style: {
                                    color: (0, m.getIconColor)(),
                                    fontSize: 95,
                                    marginTop: 10,
                                    marginBottom: 10
                                },
                                className: `${ (0, m.getIcon)() } animated pulse infinite`
                            }),
                            (0, i.jsxs)(B, {
                                children: [
                                    'Wait ',
                                    D,
                                    ' ',
                                    'second' + (1 === D ? '' : 's')
                                ]
                            })
                        ]
                    })
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                secondsPassed: 0
            }), (0, g.default)(this, 'mounted', !1), (0, g.default)(this, 'beginCountdown', async () => {
                for (let D = 0; D < 15; D++)
                    await v(1000), this.addSecond();
                this.mounted && this.setState({
                    secondsPassed: 0
                });
            }), (0, g.default)(this, 'addSecond', () => {
                this.mounted && this.setState({
                    secondsPassed: this.state.secondsPassed + 1
                });
            }), (0, g.default)(this, 'secondsLeft', () => 15 - this.state.secondsPassed);
        }
    };
    C = (0, h.__decorate)([(0, k.inject)('powerups')], C);
    var _D = C;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    let l = class extends j.Component {
        render() {
            return this.props.gameValues.thanosValues ? (0, h.jsx)(k.default, {}) : null;
        }
    };
    l = (0, g.__decorate)([
        (0, i.inject)('gameValues'),
        i.observer
    ], l);
    var _m = l;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _F;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    let r, s, t, u = v => v;
    const v = {
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
        w = {
            hidden: {
                opacity: 0
            },
            show: {
                opacity: 1
            }
        },
        x = y => (0, i.jsx)(q.motion.div, {
            variants: w,
            initial: 'hidden',
            transition: {
                duration: 1.2
            },
            children: (0, i.jsx)(l.Preview, {
                color: {
                    text: j.default.White,
                    background: y.color
                },
                icon: 'far fa-gem'
            })
        }),
        y = p.default.div(r || (r = u`
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
`), j.default.Black, j.default.White),
        z = p.default.div(s || (s = u`
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
        A = p.default.div(t || (t = u`
  animation-duration: 3s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`));
    let B;
    var C;
    (C = B || (B = {})).winner = 'Winner', C.waiting = 'Waiting', C.resultsShowing = 'Results Showing', C.result = 'Result';
    const D = E => {
        let F = '';
        return E.forEach((G, H) => {
            F += G, H + 1 !== E.length && (F += ', ');
        }), F;
    };
    let E = class extends o.Component {
        componentDidMount() {
            (0, m.toggleDrawer)(!1, !0), setTimeout(() => this.setState({
                showStones: !0
            }), 1200), setTimeout(() => this.setState({
                stage: B.waiting
            }), 11400);
            const F = this.props.gameValues.thanosValues.showAt,
                G = setInterval(() => {
                    const H = Math.round((F - Date.now()) / 1000);
                    if (H <= 0)
                        return this.setState({
                            stage: B.resultsShowing
                        }), setTimeout(() => this.setState({
                            stage: B.result
                        }), 4000 * (this.props.gameValues.thanosValues.saved.length + this.props.gameValues.thanosValues.snapped.length)), void clearInterval(G);
                    this.setState({
                        secondsLeft: H
                    });
                }, 200);
        }
        render() {
            return (0, i.jsx)(y, {
                children: (0, i.jsx)(z, {
                    children: this.getContent()
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                stage: B.winner,
                secondsLeft: 0,
                showStones: !1
            }), (0, g.default)(this, 'getContent', () => {
                const {
                    thanosValues: F
                } = this.props.gameValues;
                if (this.state.stage === B.waiting)
                    return (0, i.jsx)('div', {
                        children: (0, i.jsxs)(A, {
                            className: 'animated fadeIn',
                            children: [
                                (0, i.jsx)('div', {
                                    style: {
                                        fontSize: 25
                                    },
                                    children: 'The snap is about to happen...'
                                }),
                                (0, i.jsxs)('b', {
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
                if (this.state.stage === B.resultsShowing)
                    return (0, i.jsx)(A, {
                        children: (0, i.jsx)('div', {
                            style: {
                                fontSize: 25,
                                textAlign: 'center',
                                maxWidth: 500
                            },
                            children: 'Look up! The snap results are showing...'
                        })
                    });
                if (this.state.stage === B.result) {
                    const G = (0, k.identifier)();
                    let H = !0,
                        I = 'You Got Snapped!',
                        J = '';
                    if (F.saved.map(K => K.id).includes(G)) {
                        H = !1, I = 'You Survived The Snap!';
                        J = `You survived along with ${ D(F.saved.filter(K => K.id !== G).map(K => K.name)) }`;
                    } else
                        F.winner.id === G ? (H = !1, I = 'You Won!', J = `You snapped ${ D(F.snapped.map(K => K.name)) }`) : J = `You got snapped along with ${ D(F.snapped.filter(K => K.id !== G).map(K => K.name)) }`;
                    return (0, i.jsx)('div', {
                        children: (0, i.jsxs)(A, {
                            style: {
                                animationDuration: '22s'
                            },
                            className: H ? 'animated fadeOut' : '',
                            children: [
                                (0, i.jsx)('b', {
                                    style: {
                                        fontSize: 46,
                                        textAlign: 'center'
                                    },
                                    children: I
                                }),
                                (0, i.jsx)('div', {
                                    style: {
                                        margin: 10,
                                        maxWidth: 500,
                                        textAlign: 'center'
                                    },
                                    children: J
                                })
                            ]
                        })
                    }, '3');
                }
                return this.state.stage === B.winner ? (0, i.jsx)('div', {
                    children: (0, i.jsxs)(A, {
                        className: 'animated fadeIn',
                        children: [
                            (0, i.jsx)('b', {
                                style: {
                                    fontSize: 43
                                },
                                children: F.winner.name
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    fontSize: 25
                                },
                                children: 'acquired all 6 Infinity Stones'
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    height: 10
                                }
                            }),
                            (0, i.jsxs)(q.motion.div, {
                                animate: this.state.showStones ? 'show' : 'hidden',
                                style: {
                                    display: 'flex'
                                },
                                variants: v,
                                children: [
                                    (0, i.jsx)(x, {
                                        color: '#f4511e'
                                    }),
                                    (0, i.jsx)(x, {
                                        color: '#388e3c'
                                    }),
                                    (0, i.jsx)(x, {
                                        color: '#1976d2'
                                    }),
                                    (0, i.jsx)(x, {
                                        color: '#ffcc80'
                                    }),
                                    (0, i.jsx)(x, {
                                        color: '#d32f2f'
                                    }),
                                    (0, i.jsx)(x, {
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
    E = (0, h.__decorate)([(0, n.inject)('gameValues')], E);
    var _F = E;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _q;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....');
    let p = class extends m.Component {
        render() {
            return (0, i.jsx)(o.BackgroundContainer, {
                children: (0, i.jsxs)(n.Card, {
                    children: [
                        (0, i.jsx)(n.Title, {
                            children: (0, i.jsx)(k.default, {
                                text: this.props.gameValues.nonDismissMessage.title
                            })
                        }),
                        (0, i.jsx)(n.Details, {
                            children: (0, i.jsx)(k.default, {
                                text: this.props.gameValues.nonDismissMessage.message
                            })
                        }),
                        (0, i.jsx)(j.default, {
                            label: this.props.gameValues.nonDismissMessage.buttonText || 'Join New Game',
                            onClick: this.handleClick,
                            type: 'secondary'
                        })
                    ]
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'handleClick', () => {
                this.props.gameValues.nonDismissMessage.link ? window.location.href = this.props.gameValues.nonDismissMessage.link : window.location.reload();
            });
        }
    };
    p = (0, h.__decorate)([
        (0, l.inject)('gameValues'),
        l.observer
    ], p);
    var _q = p;
}), d.register('.....', function(e, f) {
    b(e.exports, 'BackgroundContainer', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    let i;
    const _j = g.default.div(i || (i = (k => k)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ 0 }) repeat 0 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`), (0, h.getAssetPath)('background.png'));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m, n = class extends k.Component {
        render() {
            return this.props.ui.fullBlackScreen ? (0, h.jsx)(_p, {}) : null;
        }
    };
    n = (0, g.__decorate)([
        (0, j.inject)('ui'),
        j.observer
    ], n);
    var _o = n;
    const _p = l.default.div(m || (m = (q => q)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999999999999999999;
  background: ${ 0 };
`), i.default.Black);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    let l = class extends j.Component {
        render() {
            return (0, h.jsx)(k.default, {
                isSnowing: this.props.ui.snowing
            });
        }
    };
    l = (0, g.__decorate)([
        (0, i.inject)('ui'),
        i.observer
    ], l);
    var _m = l;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    class k extends i.Component {
        componentDidUpdate(l) {
            this.state.hasShown || !l.isSnowing && this.props.isSnowing && (this.setState({
                hasShown: !0
            }), (0, j.default)());
        }
        render() {
            return (0, h.jsx)('canvas', {
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
        constructor(...e) {
            super(...e), (0, g.default)(this, 'state', {
                hasShown: !1
            });
        }
    }
    var _l = k;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');

    function _i() {
        var j = !0,
            k = document.getElementById('snow-canv');
        if (k) {
            for (var l, m = k.getContext('2d'), n = k.width = window.innerWidth, o = k.height = window.innerHeight, p = [], q = 0; q < 29; ++q)
                (l = new _u()).y = Math.random() * (o + 50), l.x = Math.random() * _i, l.t = Math.random() * (2 * Math.PI), l.sz = 100 / (10 + 100 * Math.random()) * 1.3, l.sp = 0.15 * Math.pow(0.8 * l.sz, 2) * 1, l.sp = l.sp < 1 ? 1 : l.sp, p.push(l);
            _r(), (0, h.reaction)(() => g.default.ui.isSnowing, () => {
                const r = g.default.ui.isSnowing;
                !j && r ? (j = r, _r()) : j = r;
            });
        }

        function _r() {
            if (j) {
                window.requestAnimationFrame(_r), m.clearRect(0, 0, _i, o), m.fillRect(0, 0, _i, o), m.fill();
                for (var s = 0; s < p.length; ++s) {
                    var t = p[s];
                    t.t += 0.05, t.t = t.t >= 2 * Math.PI ? 0 : t.t, t.y += t.sp, t.x += Math.sin(1 * t.t) * (0.3 * t.sz), t.y > o + 50 && (t.y = -10 - 20 * Math.random()), t.x > _i + 20 && (t.x = -20), t.x < -20 && (t.x = _i + 20), t.draw();
                }
            }
        }

        function _u() {
            this.draw = function() {
                this.g = m.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz), this.g.addColorStop(0, 'hsla(255,255%,255%,1)'), this.g.addColorStop(1, 'hsla(255,255%,255%,0)'), m.moveTo(this.x, this.y), m.fillStyle = this.g, m.beginPath(), m.arc(this.x, this.y, this.sz, 0, 2 * Math.PI, !0), m.fill();
            };
        }
    }
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _u;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    let s, t = class extends o.Component {
        render() {
            return (0, i.jsx)(_v, {
                children: this.getContent()
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'getContent', () => {
                const {
                    status: u
                } = this.props.imposter;
                return u === m.ImposterStatus.discussion || u === m.ImposterStatus.voting ? (0, i.jsx)(q.default, {}) : u === m.ImposterStatus.votingResult ? (0, i.jsx)(r.default, {
                    text: 'Look at your captain\'s screen for voting results.'
                }) : u === m.ImposterStatus.intro ? (0, i.jsx)(r.default, {
                    text: 'Look at your captain\'s screen for instructions.'
                }) : (u == m.ImposterStatus.questions && (0, l.changeRoute)(k.default.questions), null);
            });
        }
    };
    t = (0, h.__decorate)([
        (0, n.inject)('imposter'),
        n.observer
    ], t);
    var _u = t;
    const _v = p.default.div(s || (s = (w => w)`
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
`), j.default.White);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _z;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....');
    let u, v, w, x = y => y,
        y = class extends o.Component {
            render() {
                return (0, i.jsx)(_A, {
                    children: (0, i.jsx)(_B, {
                        children: (0, i.jsxs)(_C, {
                            children: [
                                (0, i.jsx)(q.default, {}),
                                this.getContent()
                            ]
                        })
                    })
                });
            }
            constructor(...e) {
                super(...e), (0, g.default)(this, 'getContent', () => {
                    const {
                        me: z,
                        status: A
                    } = this.props.imposter;
                    return z && z.votedOff ? (0, i.jsx)(j.default, {
                        type: 'warning',
                        showIcon: !0,
                        message: 'Voted Off',
                        description: 'You\'ve been voted off and cannot contribute.',
                        style: {
                            textAlign: 'left',
                            marginTop: 35
                        }
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', {
                                style: {
                                    marginTop: 25,
                                    marginBottom: 20
                                },
                                className: 'maxWidth',
                                children: (0, i.jsxs)(k.default, {
                                    children: [
                                        (0, i.jsx)('span', {
                                            role: 'img',
                                            'aria-label': 'notebook',
                                            children: '\uD83D\uDCD3'
                                        }),
                                        ' ',
                                        'Notebook'
                                    ]
                                })
                            }),
                            (0, i.jsx)(r.default, {}),
                            A === m.ImposterStatus.discussion ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        style: {
                                            marginTop: 25,
                                            marginBottom: 20
                                        },
                                        className: 'maxWidth',
                                        children: (0, i.jsxs)(k.default, {
                                            children: [
                                                (0, i.jsx)('span', {
                                                    role: 'img',
                                                    'aria-label': 'astronaut',
                                                    children: '\uD83D\uDC69‍\uD83D\uDE80'
                                                }),
                                                ' ',
                                                'People'
                                            ]
                                        })
                                    }),
                                    (0, i.jsx)(s.default, {})
                                ]
                            }) : (0, i.jsx)(t.default, {})
                        ]
                    });
                });
            }
        };
    y = (0, h.__decorate)([
        (0, n.inject)('imposter'),
        n.observer
    ], y);
    var _z = y;
    const _A = p.default.div.attrs({
            className: 'maxWidth maxHeight flex hc'
        })(u || (u = x``)),
        _B = p.default.div.attrs({
            className: 'scroll-y'
        })(v || (v = x`
  flex: 1;
`)),
        _C = p.default.div(w || (w = x`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 25px;
  width: 90%;
  max-width: 600px;
  background: ${ 0 };
  color: ${ 0 };
`), l.default.White, l.default.Black);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _u;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    let o, p, q, r, s = t => t,
        t = class extends m.Component {
            render() {
                return (0, i.jsxs)(_v, {
                    children: [
                        (0, i.jsx)(_w, {
                            src: this.getImage()
                        }),
                        (0, i.jsx)(_x, {
                            children: this.getTitle()
                        }),
                        (0, i.jsx)(_y, {
                            children: this.getDescription()
                        })
                    ]
                });
            }
            constructor(...e) {
                super(...e), (0, g.default)(this, 'getImage', () => {
                    const {
                        status: u
                    } = this.props.imposter;
                    return u === k.ImposterStatus.discussion ? (0, j.getAssetPath)('discussion.svg') : (0, j.getAssetPath)('vote.svg');
                }), (0, g.default)(this, 'getTitle', () => {
                    const {
                        status: u
                    } = this.props.imposter;
                    return u === k.ImposterStatus.discussion ? 'Discussion' : 'Vote';
                }), (0, g.default)(this, 'getDescription', () => {
                    const {
                        status: u
                    } = this.props.imposter;
                    return u === k.ImposterStatus.discussion ? 'Who is the impostor?' : 'Vote out who you think the impostor is!';
                });
            }
        };
    t = (0, h.__decorate)([
        (0, l.inject)('imposter'),
        l.observer
    ], t);
    var _u = t;
    const _v = n.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(o || (o = s``)),
        _w = n.default.img(p || (p = s`
  max-width: 150px;
  margin-top: 15px;
`)),
        _x = n.default.div(q || (q = s`
  margin-top: 10px;
  font-weight: bold;
  font-size: 50px;
`)),
        _y = n.default.div(r || (r = s`
  font-size: 21px;
  color: rgba(0, 0, 0, 0.9);
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    let r;
    var _s = (0, l.observer)(t => {
        const {
            imposter: u
        } = m.useContext(p.default);
        m.useEffect(() => {
            (0, j.send)(i.default.imposter.requestPeople);
        }, []);
        const {
            showAction: v,
            actionText: w,
            onSelect: x
        } = t, {
            epl: y,
            me: z
        } = u, A = (0, o.DecryptData)(y) || [];
        if (!z)
            return null;
        const B = z && z.role === k.PersonRole.imposter;
        return (0, g.jsx)(_t, {
            children: A.filter(C => C.id !== z.id && (!C.votedOff && (!t.filter || t.filter(C)))).map(C => (0, g.jsx)(q.default, {
                name: C.name,
                nameColor: C.markedAsClear ? h.default.DarkSuccessGreen : C.role === k.PersonRole.imposter && B ? '#c62828' : h.default.Black,
                description: C.markedAsClear ? 'On the clear list' : C.role === k.PersonRole.imposter && B ? 'An Impostor' : void 0,
                button: v ? {
                    label: w,
                    onClick: () => x(C.id)
                } : null
            }, C.id))
        });
    });
    const _t = n.default.div.attrs({
        className: 'maxWidth'
    })(r || (r = (u => u)``));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _q;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....'),
        j = d('.....');
    let k, l, m, n, o, p = q => q;
    var _q = r => (0, g.jsxs)(_r, {
        children: [
            (0, g.jsxs)(_s, {
                children: [
                    (0, g.jsx)(_t, {
                        style: {
                            color: r.nameColor || j.default.Black
                        },
                        children: r.name
                    }),
                    r.description && (0, g.jsx)(_u, {
                        children: r.description
                    })
                ]
            }),
            r.button && (0, g.jsx)(_v, {
                children: (0, g.jsx)(i.default, {
                    type: 'primary',
                    onClick: r.button.onClick,
                    label: r.button.label,
                    size: 'small'
                })
            })
        ]
    });
    const _r = h.default.div.attrs({
            className: 'flex vc light-shadow'
        })(k || (k = p`
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
        _s = h.default.div(l || (l = p``)),
        _t = h.default.div(m || (m = p`
  font-size: 22px;
  font-weight: 500;
  overflow-wrap: anywhere;
`)),
        _u = h.default.div(n || (n = p`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
`)),
        _v = h.default.div(o || (o = p`
  flex-shrink: 0;
  margin-left: 10px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    let r = class extends p.Component {
        render() {
            const {
                me: s
            } = this.props.imposter;
            return s && s.currentVote ? (0, i.jsx)(j.default, {
                type: 'success',
                showIcon: !0,
                message: 'Voted!',
                description: 'Your vote is in!',
                style: {
                    textAlign: 'left',
                    marginTop: 20
                }
            }) : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        style: {
                            marginTop: 25,
                            marginBottom: 20
                        },
                        className: 'maxWidth',
                        children: (0, i.jsx)(k.default, {
                            children: '\uD83D\uDC69‍\uD83D\uDE80 People'
                        })
                    }),
                    (0, i.jsx)(q.default, {
                        showAction: !0,
                        actionText: 'Vote',
                        onSelect: this.vote
                    })
                ]
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'vote', s => {
                m.successClick.play(), (0, n.send)(l.default.imposter.vote, s);
            });
        }
    };
    r = (0, h.__decorate)([
        (0, o.inject)('imposter'),
        o.observer
    ], r);
    var _s = r;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....');
    let j, k, l = m => m;
    var _m = n => (0, g.jsx)(_n, {
        children: (0, g.jsx)(_o, {
            children: (0, g.jsx)(h.default, {
                text: n.text
            })
        })
    });
    const _n = i.default.div.attrs({
            className: 'flex hc vc maxWidth maxHeight'
        })(j || (j = l``)),
        _o = i.default.div(k || (k = l`
  background: rgba(97, 97, 97, 0.8);
  padding: 48px;
  border-radius: 8px;
  font-size: 22px;
  border-style: solid;
  border-color: #ff9800;
  border-width: 3px;
  margin: 30px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....');
    let q;
    var _r = (0, n.observer)(() => {
        const {
            draw: {
                status: s
            }
        } = h.useContext(o.default);
        return (0, g.jsx)(_s, {
            children: s === p.DrawStatus.drawing ? (0, g.jsx)(i.default, {}) : (0, g.jsx)(l.default, {})
        });
    });
    const _s = j.default.div.attrs({
        className: 'maxWidth maxHeight'
    })(q || (q = (t => t)`
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
`), () => (0, m.mainFontName)(), k.default.Black);
}), d.register('.....', function(e, f) {
    b(e.exports, 'MOBILE_BREAKPOINT', function() {
        return _t;
    }), b(e.exports, 'default', function() {
        return _u;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    let s;
    const _t = 890;
    var _u = (0, m.observer)(() => {
        var v;
        const {
            draw: w
        } = h.useContext(n.default), x = h.useRef(), [y, z] = h.useState(l.colors[0]), [A, B] = h.useState(l.sizes[1]), [C, D] = h.useState(), E = (null == w || null === (v = w.me) || void 0 === v ? void 0 : v.role) === o.DrawRole.drawer, F = h.useMemo(() => w.round.drawingBase64, []);
        h.useEffect(() => {
            const G = (0, r.reaction)(() => w.latestLine, H => {
                    var I;
                    H && !E && (null == x || null === (I = x.current) || void 0 === I || I.addLine(H));
                }),
                H = (0, r.reaction)(() => w.round.drawingBase64, I => {
                    var J;
                    I && !E && (null == x || null === (J = x.current) || void 0 === J || J.drawImage(I));
                }),
                I = (0, r.reaction)(() => w.shouldClearCanvas, J => {
                    J && E && (_K(), w.shouldClearCanvas = !1);
                });
            return () => {
                G(), H(), I();
            };
        }, [E]);
        const G = h.useCallback(H => {
                E && (0, p.send)(q.default.draw.lineDrawn, H);
            }, [E]),
            H = h.useCallback(I => {
                E && (0, p.send)(q.default.draw.imageDrawn, I);
            }, [E]),
            I = h.useMemo(() => w.round.secondsLeft ? `${ w.round.secondsLeft } ${ (0, p.plural)('second', w.round.secondsLeft) } left...` : 'Time\'s up!', [w.round.secondsLeft]),
            J = !(!E || !w.round.secondsLeft),
            _K = () => {
                x.current && E && x.current.clear();
            };
        return (0, g.jsxs)(_v, {
            children: [
                (0, g.jsx)(j.default, {
                    canEdit: J,
                    color: y,
                    brushSize: A,
                    initialImage: F,
                    canvasRef: x,
                    emitLine: G,
                    emitImage: H,
                    term: w.round.term,
                    isDrawer: E,
                    drawerName: w.round.drawer.name,
                    revealText: w.round.revealText,
                    timeText: I,
                    secondsLeft: w.round.secondsLeft,
                    hidingTerm: C
                }),
                (0, g.jsx)(k.default, {
                    isDrawer: E,
                    setColor: z,
                    setBrushSize: B,
                    color: y,
                    brushSize: A,
                    undo: () => {
                        x.current && E && x.current.undo();
                    },
                    clear: _K,
                    guessedCorrectly: w.me.answeredCorrectly,
                    secondsLeft: w.round.secondsLeft,
                    timeText: I,
                    term: w.round.term,
                    hidingTerm: C,
                    setHidingTerm: D
                })
            ]
        });
    });
    const _v = i.default.div.attrs({
        className: 'maxWidth maxHeight flex'
    })(s || (s = (w => w)`
  align-items: stretch;
  @media (max-width: ${ 0 }px) {
    flex-direction: column;
  }
`), _t);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _y;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....');
    let p, q, r, s, t, u, v, w = x => x;
    const x = y => {
        const z = y.text.split('');
        return (0, g.jsx)(g.Fragment, {
            children: (0, g.jsx)('span', {
                children: z.map((A, B) => {
                    const C = `letter-${ B }`;
                    return ' ' !== A || y.noTimeLeft ? (0, g.jsx)(i.Fragment, {
                        children: A
                    }, C) : (0, g.jsx)(i.Fragment, {
                        children: '\xA0\xA0\xA0'
                    }, C);
                })
            })
        });
    };
    var _y = z => {
        const A = i.useRef(null),
            [B, C] = (0, l.default)(A),
            D = (0, n.useWindowWidth)(),
            E = Math.min(B / 4, C / 3),
            F = 4 * E,
            G = 3 * E,
            H = D < m.MOBILE_BREAKPOINT ? z.timeText : z.isDrawer ? 'You\'re drawing...' : null,
            I = z.isDrawer ? null : (0, g.jsxs)('span', {
                children: [
                    'Drawer: ',
                    (0, g.jsx)('b', {
                        children: z.drawerName
                    })
                ]
            });
        return (0, g.jsx)(_z, {
            children: (0, g.jsxs)(_A, {
                children: [
                    (0, g.jsxs)(_B, {
                        children: [
                            H ? (0, g.jsx)(_C, {
                                children: H
                            }) : null,
                            (0, g.jsx)(_D, {
                                children: z.isDrawer ? z.hidingTerm ? 'Term Hidden' : z.term : (0, g.jsx)(x, {
                                    text: z.revealText,
                                    noTimeLeft: !z.secondsLeft
                                })
                            })
                        ]
                    }),
                    (0, g.jsx)(_E, {
                        ref: A,
                        children: F && G ? (0, g.jsx)(k.HandDrawnDiv, {
                            style: {
                                width: F,
                                height: G
                            },
                            children: (0, g.jsx)(h.default, {
                                ref: z.canvasRef,
                                width: F,
                                height: G,
                                canEdit: z.canEdit,
                                color: z.color,
                                strokeWidth: z.brushSize,
                                emitLine: z.emitLine,
                                onLatestImage: z.emitImage,
                                initialImage: z.initialImage
                            })
                        }) : null
                    }),
                    I ? (0, g.jsx)(_F, {
                        children: I
                    }) : null
                ]
            })
        });
    };
    const _z = j.default.div(p || (p = w`
  flex: 1;
  overflow: hidden;
  @media (max-width: ${ 0 }px) {
    overflow: visible;
    height: 60vh;
  }
`), () => m.MOBILE_BREAKPOINT),
        _A = j.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column vc'
        })(q || (q = w`
  padding: 20px;
  max-height: 100%;
  overflow: hidden;
  @media (max-width: ${ 0 }px) {
    padding: 20px 15px;
  }
`), () => m.MOBILE_BREAKPOINT),
        _B = j.default.div.attrs({
            className: 'flex flex-column vc'
        })(r || (r = w`
  margin-bottom: 10px;
  @media (max-width: ${ 0 }px) {
    margin-bottom: 7px;
  }
`), () => m.MOBILE_BREAKPOINT),
        _C = j.default.div(s || (s = w`
  font-size: 23px;
  @media (max-width: ${ 0 }px) {
    font-size: 18px;
  }
`), () => m.MOBILE_BREAKPOINT),
        _D = j.default.div(t || (t = w`
  font-size: 41px;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    font-size: 32px;
  }
`), o.FontWeights.Bold, () => m.MOBILE_BREAKPOINT),
        _E = j.default.div.attrs({
            className: 'flex hc vc maxWidth'
        })(u || (u = w`
  flex: 1;
  overflow: hidden;
`)),
        _F = j.default.div(v || (v = w`
  margin-top: 15px;
  font-size: 19px;
  @media (max-width: ${ 0 }px) {
    display: none;
  }
`), () => m.MOBILE_BREAKPOINT);
}), d.register('.....', function(e, f) {
    b(e.exports, 'HandDrawnDiv', function() {
        return _i;
    });
    var g = d('.....');
    let h;
    const _i = d('.....').default.div(h || (h = (j => j)`
  border: solid
    ${ 0 }px
    ${ 0 };
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  overflow: hidden;
  -webkit-transform: translateZ(0); // needed in Safari for some weird reason
`), j => void 0 !== j.borderWidth ? j.borderWidth : 3, g.default.Black);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    var _j = (k, l) => {
        const [m, n] = g.useState(() => {
            var o, p;
            const q = k && 'current' in k ? k.current : k;
            return q ? [
                q.offsetWidth,
                q.offsetHeight
            ] : [
                null !== (o = null == l ? void 0 : l.initialWidth) && void 0 !== o ? o : 0,
                null !== (p = null == l ? void 0 : l.initialHeight) && void 0 !== p ? p : 0
            ];
        });
        return (0, i.default)(() => {
            const o = k && 'current' in k ? k.current : k;
            o && n([
                o.offsetWidth,
                o.offsetHeight
            ]);
        }, [k]), (0, h.default)(k, o => {
            const p = o.target;
            n([
                p.offsetWidth,
                p.offsetHeight
            ]);
        }), m;
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    let k;
    const l = () => k || (k = function() {
        const m = new Map(),
            n = new(0, g.default)((0, j.default)((o, p) => {
                var q;
                if (1 === o.length)
                    null === (q = m.get(o[0].target)) || void 0 === q || q(o[0], p);
                else
                    for (let r = 0; r < o.length; r++) {
                        var s;
                        null === (s = m.get(o[r].target)) || void 0 === s || s(o[r], p);
                    }
            }));
        return {
            observer: n,
            subscribe(o, p) {
                n.observe(o), m.set(o, p);
            },
            unsubscribe(o) {
                n.unobserve(o), m.delete(o);
            }
        };
    }());
    var _m = function(n, o) {
        const p = l(),
            q = (0, i.default)(o);
        return (0, h.default)(() => {
            let r = !1;
            const s = n && 'current' in n ? n.current : n;
            if (s)
                return p.subscribe(s, (t, u) => {
                    r || q.current(t, u);
                }), () => {
                    r = !0, p.unsubscribe(s);
                };
        }, [
            n,
            p,
            q
        ]), p.observer;
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _g;
    });
    var _g = c(d('.....'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....');
    var _h = i => {
        const j = g.useRef(i);
        return g.useEffect(() => {
            j.current = i;
        }), j;
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = function(h) {
        var i = [],
            j = null,
            k = function() {
                for (var l = arguments.length, m = new Array(l), n = 0; n < l; n++)
                    m[n] = arguments[n];
                i = m, j || (j = requestAnimationFrame(function() {
                    j = null, h.apply(void 0, i);
                }));
            };
        return k.cancel = function() {
            j && (cancelAnimationFrame(j), j = null);
        }, k;
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'useWindowWidth', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....');
    const i = {},
        j = 'undefined' == typeof window ? null : window,
        k = () => [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ],
        l = (m = n) => {
            const {
                wait: o,
                leading: p,
                initialWidth: q = 0,
                initialHeight: r = 0
            } = m, [s, t] = (0, g.useDebounce)('undefined' == typeof document ? [
                q,
                r
            ] : k, o, p), u = () => t(k);
            return (0, h.default)(j, 'resize', u), (0, h.default)(j, 'orientationchange', u), s;
        },
        _m = n => l(n)[0];
}), d.register('.....', function(e, f) {
    b(e.exports, 'useDebounceCallback', function() {
        return _i;
    }), b(e.exports, 'useDebounce', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    const _i = (j, k = 100, l = !1) => {
            const m = (0, h.default)(j),
                n = g.useRef(),
                o = [
                    k,
                    l,
                    m
                ];

            function p() {
                n.current && clearTimeout(n.current), n.current = void 0;
            }

            function q() {
                n.current = void 0;
            }
            return g.useEffect(() => p, o), g.useCallback(function() {
                const r = arguments,
                    {
                        current: s
                    } = n;
                if (void 0 === s && l)
                    return n.current = setTimeout(q, k), m.current.apply(null, r);
                s && clearTimeout(s), n.current = setTimeout(() => {
                    n.current = void 0, m.current.apply(null, r);
                }, k);
            }, o);
        },
        _j = (k, l, m) => {
            const n = g.useState(k);
            return [
                n[0],
                _i(n[1], l, m)
            ];
        };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');
    var _i = function(j, k, l, m) {
        const n = g.useRef(l),
            o = g.useRef(m);
        (0, h.default)(() => {
            n.current = l, o.current = m;
        }), (0, h.default)(() => {
            const p = j && 'current' in j ? j.current : j;
            if (!p)
                return;
            let q = 0;

            function r(...j) {
                q || n.current.apply(this, j);
            }
            p.addEventListener(k, r);
            const s = o.current;
            return () => {
                q = 1, p.removeEventListener(k, r), s && s();
            };
        }, [
            j,
            k
        ]);
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    let l;
    var _m = n => (0, g.jsx)(_n, {
        children: n.isDrawer ? (0, g.jsx)(j.default, {
            setColor: n.setColor,
            setBrushSize: n.setBrushSize,
            clear: n.clear,
            undo: n.undo,
            color: n.color,
            brushSize: n.brushSize,
            timeText: n.timeText,
            hidingTerm: n.hidingTerm,
            setHidingTerm: n.setHidingTerm
        }) : (0, g.jsx)(k.default, {
            guessedCorrectly: n.guessedCorrectly,
            secondsLeft: n.secondsLeft,
            timeText: n.timeText,
            term: n.term
        })
    });
    const _n = h.default.div.attrs({
        className: 'scroll-y flex flex-column'
    })(l || (l = (o => o)`
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
`), () => i.MOBILE_BREAKPOINT);
}), d.register('.....', function(e, f) {
    b(e.exports, 'colors', function() {
        return _w;
    }), b(e.exports, 'sizes', function() {
        return _x;
    }), b(e.exports, 'default', function() {
        return _y;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    d('.....');
    var k = d('.....'),
        l = d('.....');
    let m, n, o, p, q, r, s, t, u = v => v;
    const v = '#7cb342',
        _w = [
            i.default.Black,
            i.default.White,
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
        _x = [
            5,
            10,
            20,
            40
        ];
    var _y = z => (0, g.jsxs)(g.Fragment, {
        children: [
            (0, g.jsxs)(_z, {
                children: [
                    (0, g.jsx)(_A, {
                        children: 'Color'
                    }),
                    (0, g.jsx)(_B, {
                        children: _w.map(A => (0, g.jsx)(_C, {
                            color: A,
                            selected: A === z.color,
                            onClick: () => {
                                j.pop.play(), z.setColor(A);
                            }
                        }, A))
                    }),
                    (0, g.jsx)(_A, {
                        children: 'Brush Size'
                    }),
                    (0, g.jsx)(_B, {
                        children: _x.map(A => (0, g.jsx)(_D, {
                            onClick: () => {
                                j.pop.play(), z.setBrushSize(A);
                            },
                            selected: A === z.brushSize,
                            children: (0, g.jsx)('div', {
                                style: {
                                    width: A,
                                    height: A,
                                    borderRadius: '50%',
                                    background: 'black'
                                }
                            })
                        }, `size-${ A }`))
                    }),
                    (0, g.jsx)(_A, {
                        children: 'Tools'
                    }),
                    (0, g.jsxs)(_B, {
                        children: [
                            (0, g.jsxs)(_E, {
                                onClick: () => {
                                    j.pop.play(), z.undo();
                                },
                                children: [
                                    (0, g.jsx)(_F, {
                                        className: 'fas fa-undo'
                                    }),
                                    ' Undo'
                                ]
                            }),
                            (0, g.jsxs)(_E, {
                                onClick: () => {
                                    j.pop.play(), z.clear();
                                },
                                children: [
                                    (0, g.jsx)(_F, {
                                        className: 'far fa-trash'
                                    }),
                                    ' Clear'
                                ]
                            }),
                            (0, g.jsxs)(_E, {
                                onClick: () => {
                                    z.setHidingTerm(!z.hidingTerm);
                                },
                                children: [
                                    (0, g.jsx)(_F, {
                                        className: z.hidingTerm ? 'fas fa-eye' : 'fas fa-eye-slash'
                                    }),
                                    ' ',
                                    z.hidingTerm ? 'Show Term' : 'Hide Term'
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, g.jsx)(_G, {
                children: z.timeText
            })
        ]
    });
    const _z = k.default.div(m || (m = u`
  padding: 20px;
`)),
        _A = k.default.div(n || (n = u`
  font-weight: ${ 0 };
  font-size: 34px;
`), h.FontWeights.Bold),
        _B = k.default.div.attrs({
            className: 'flex maxWidth wrap'
        })(o || (o = u`
  margin-top: 5px;
  margin-bottom: 15px;
`)),
        _C = k.default.div(p || (p = u`
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
`), D => D.color, D => D.selected ? 4 : 2, D => D.selected ? v : i.default.Black),
        _D = k.default.div.attrs({
            className: 'flex hc vc'
        })(q || (q = u`
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
`), E => E.selected ? 4 : 2, E => E.selected ? v : i.default.Black),
        _E = k.default.div.attrs({
            className: 'flex hc vc'
        })(r || (r = u`
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
`), i.default.Black),
        _F = k.default.i(s || (s = u`
  margin-right: 10px;
`)),
        _G = k.default.div(t || (t = u`
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
`), () => l.MOBILE_BREAKPOINT);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _y;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    let s, t, u, v, w, x = y => y;
    var _y = (0, p.observer)(z => {
        const A = j.useRef(null),
            [B, C] = j.useState(''),
            {
                gameOptions: {
                    modeOptions: D
                }
            } = j.useContext(q.default);
        j.useEffect(() => {
            z.guessedCorrectly && C('');
        }, [z.guessedCorrectly]), j.useEffect(() => {
            0 === z.secondsLeft && C('');
        }, [z.secondsLeft]);
        const E = j.useMemo(() => {
                const F = z.term.split('');
                return (0, o.uniq)(F.filter(G => {
                    return !(1 === (F = G).length && (' ' === F || '.' === F || ',' === F || !isNaN(Number(F)) || F.match(/[a-z]/i)));
                    var H;
                }));
            }, [z.term]),
            F = () => {
                B && !z.guessedCorrectly && ((0, l.send)(m.default.draw.guess, B), C(''));
            },
            G = !z.secondsLeft,
            H = z.guessedCorrectly ? 'You guessed correctly!' : G ? 'Time\'s up!' : 'Type your guess here!',
            I = z.guessedCorrectly || G;
        return (0, g.jsxs)(_z, {
            children: [
                (0, g.jsx)(_A, {
                    children: z.timeText
                }),
                (0, g.jsxs)(_B, {
                    children: [
                        (0, g.jsx)(n.default, {}),
                        (0, g.jsxs)(_C, {
                            children: [
                                E.length && D && D.symbolKeyboardEnabled ? (0, g.jsx)('div', {
                                    className: 'flex vc',
                                    style: {
                                        marginBottom: 10
                                    },
                                    children: E.map(J => (0, g.jsx)(h.default, {
                                        size: 'small',
                                        type: 'dashed',
                                        style: {
                                            marginRight: 5
                                        },
                                        disabled: I,
                                        onClick: () => {
                                            return g = J, B.length < 21 && C(`${ B }${ g }`), void(A.current && A.current.focus());
                                            var K;
                                        },
                                        children: J
                                    }, `non-traditional-${ J }`))
                                }) : null,
                                (0, g.jsxs)(_D, {
                                    children: [
                                        (0, g.jsx)(i.default, {
                                            ref: A,
                                            autoFocus: !0,
                                            placeholder: H,
                                            size: 'large',
                                            value: B,
                                            onChange: J => {
                                                C(J.target.value);
                                            },
                                            onPressEnter: F,
                                            disabled: I,
                                            maxLength: 21
                                        }),
                                        (0, g.jsx)(h.default, {
                                            onClick: F,
                                            style: {
                                                marginLeft: 10
                                            },
                                            type: 'primary',
                                            size: 'large',
                                            disabled: I,
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
    const _z = k.default.div.attrs({
            className: 'flex flex-column'
        })(s || (s = x`
  flex: 1;
  overflow: hidden;
`)),
        _A = k.default.div(t || (t = x`
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 2px;
  padding: 20px;
  font-size: 16px;
  line-height: 1;
  @media (max-width: ${ 0 }px) {
    display: none;
  }
`), () => r.MOBILE_BREAKPOINT),
        _B = k.default.div.attrs({
            className: 'flex flex-column'
        })(u || (u = x`
  flex: 1;
  padding: 0px 20px;
  overflow: hidden;
`)),
        _C = k.default.div(v || (v = x`
  padding-bottom: 20px;
`)),
        _D = k.default.div.attrs({
            className: 'flex'
        })(w || (w = x``));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....');
    let p;
    const q = r => {
        const {
            name: s,
            action: t,
            translateAllowed: u,
            nameColor: v,
            actionColor: w,
            important: x
        } = r.item, y = x && t && !s;
        return (0, g.jsxs)('div', {
            style: {
                fontSize: 17
            },
            children: [
                s && (0, g.jsxs)(g.Fragment, {
                    children: [
                        (0, g.jsx)('b', {
                            style: {
                                color: v || l.default.Black
                            },
                            children: s
                        }),
                        '\xA0'
                    ]
                }),
                t && (0, g.jsx)('span', {
                    style: {
                        color: w || l.default.Black,
                        fontWeight: y ? 'bold' : 'normal'
                    },
                    children: u ? (0, g.jsx)(m.default, {
                        text: t
                    }) : t
                })
            ]
        });
    };
    var _r = (0, j.observer)(() => {
        const s = h.useRef(null),
            [t, u] = h.useState([]),
            {
                draw: v
            } = h.useContext(i.default),
            w = (0, n.debounce)(x => {
                u(y => [
                    ...y,
                    x
                ]);
            }, 200);
        return h.useEffect(() => {
            const x = (0, k.reaction)(() => v.latestFeedItem, y => {
                y && (z => {
                    z.important ? u(A => [
                        ...A,
                        z
                    ]) : w(z);
                })({
                    ...y,
                    id: Date.now().toString() + Math.random().toString()
                });
            });
            return () => x();
        }, []), h.useEffect(() => {
            s.current && (s.current.scrollTop = s.current.scrollHeight);
        }, [t.length]), (0, g.jsx)(_s, {
            ref: s,
            children: (0, n.takeRight)(t, 60).map(x => (0, g.jsx)(q, {
                item: x
            }, `guess-item-${ x.id }`))
        });
    });
    const _s = o.default.div.attrs({
        className: 'flex flex-column'
    })(p || (p = (t => t)`
  flex: 1;
  overflow: hidden;
  justify-content: flex-end;
  padding-bottom: 15px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....');
    let q;
    var _r = (0, n.observer)(() => {
        const {
            draw: s
        } = h.useContext(o.default);
        return (0, g.jsxs)(_s, {
            children: [
                (0, g.jsx)(i.default, {}),
                s.status === p.DrawStatus.termSelection && (null == s || null === (b = s.me) || void 0 === b ? void 0 : b.role) === p.DrawRole.drawer ? (0, g.jsx)(l.default, {}) : s.status === p.DrawStatus.results ? (0, g.jsx)(m.default, {
                    additions: (null == s || null === (f = s.me) || void 0 === f ? void 0 : f.lastRound) || [],
                    isDrawer: (null == s || null === (d = s.me) || void 0 === d ? void 0 : d.role) === p.DrawRole.drawer
                }) : (0, g.jsx)(k.default, {})
            ]
        });
        var t, u, v;
    });
    const _s = j.default.div.attrs({
        className: 'maxWidth maxHeight flex flex-column'
    })(q || (q = (t => t)``));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n;
    var _o = (0, k.observer)(() => {
        const {
            balance: p
        } = l.useContext(j.default);
        return (0, g.jsx)(_p, {
            children: (0, i.getMoney)(p.balance)
        });
    });
    const _p = m.default.div.attrs({
        className: 'maxWidth flex'
    })(n || (n = (q => q)`
  padding: 10px 20px;
  background: #4252af;
  color: ${ 0 };
  justify-content: flex-end;
  font-size: 23px;
  font-weight: bold;
  box-shadow: 0 4px 8px -2px gray;
`), h.default.White);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....');
    let j;
    var _k = () => (0, g.jsx)(_l, {
        children: (0, g.jsx)(h.default, {
            text: 'Waiting for round to begin...'
        })
    });
    const _l = i.default.div.attrs({
        className: 'flex hc vc'
    })(j || (j = (m => m)`
  flex: 1;
  text-align: center;
  font-size: 38px;
  padding: 40px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _y;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    let s, t, u, v, w, x = y => y;
    var _y = (0, o.observer)(() => {
        const {
            draw: {
                round: {
                    termOptions: z
                }
            }
        } = p.useContext(n.default);
        return (0, g.jsx)(_z, {
            children: (0, g.jsx)('div', {
                className: 'maxWidth flex hc',
                children: (0, g.jsxs)(_A, {
                    children: [
                        (0, g.jsx)(_B, {
                            children: (0, g.jsx)(m.default, {
                                text: 'You are this round\'s drawer!'
                            })
                        }),
                        (0, g.jsx)(_C, {
                            children: (0, g.jsx)(m.default, {
                                text: 'Which term do you want to draw?'
                            })
                        }),
                        (0, g.jsx)(h.default, {}),
                        (0, g.jsx)('div', {
                            style: {
                                height: 7
                            }
                        }),
                        z.map(A => (0, g.jsx)(_D, {
                            onClick: () => {
                                return b = A.id, (0, l.send)(k.default.draw.termSelected, b);
                                var B;
                            },
                            children: A.term
                        }, A.id))
                    ]
                })
            })
        });
    });
    const _z = q.default.div.attrs({
            className: 'flex flex-column vc scroll-y'
        })(s || (s = x`
  flex: 1;
  padding: 40px 0px;
`)),
        _A = (0, q.default)(r.HandDrawnDiv).attrs({
            className: 'animated fadeInDown'
        })(t || (t = x`
  width: 700px;
  max-width: 90%;
  padding: 35px;
  background: ${ 0 };
`), j.default.White),
        _B = q.default.div(u || (u = x`
  font-size: 22px;
  color: #1b5e20;
`)),
        _C = q.default.div(v || (v = x`
  font-size: 32px;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        _D = (0, q.default)(r.HandDrawnDiv).attrs({
            className: 'maxWidth'
        })(w || (w = x`
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
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _x;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    let o, p, q, r, s, t, u = v => v;
    const v = [
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
        w = (x, y) => x + y.amount;
    var _x = y => {
        const z = y.additions.reduce(w, 0) || 0,
            A = z > 0;
        return (0, g.jsx)(_y, {
            className: 'flex',
            correct: A,
            children: (0, g.jsx)(_z, {
                children: (0, g.jsxs)(_A, {
                    children: [
                        (0, g.jsx)(_B, {
                            children: y.isDrawer && A ? (0, g.jsx)(m.default, {
                                text: 'Nice work!'
                            }) : `+ ${ (0, n.getMoney)(z) }`
                        }),
                        (0, g.jsx)(_C, {
                            children: A ? (0, g.jsx)(g.Fragment, {
                                children: y.additions.map(B => {
                                    return (0, g.jsxs)(_D, {
                                        children: [
                                            '+ ',
                                            (0, n.getMoney)(B.amount),
                                            ' ',
                                            (z = B.type, A = B.metadata, z === l.PointAdditionType.correct ? (0, g.jsx)(m.default, {
                                                text: 'for correct guess'
                                            }) : z === l.PointAdditionType.firstGuess ? (0, g.jsx)(m.default, {
                                                text: 'for correct first guess'
                                            }) : z === l.PointAdditionType.speed ? (0, g.jsx)(m.default, {
                                                text: 'for speed'
                                            }) : z === l.PointAdditionType.goodDrawer && A && 'number' == typeof A ? `for ${ A } ${ (0, n.plural)('person', A, 'people') } guessing your drawing correctly!` : '')
                                        ]
                                    }, B.type);
                                    var C, D;
                                })
                            }) : (0, g.jsx)(g.Fragment, {
                                children: (0, g.jsx)(_D, {
                                    children: (0, g.jsx)(m.default, {
                                        text: y.isDrawer ? 'You tried your best!' : (0, i.sample)(v)
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        });
    };
    const _y = j.default.div.attrs({
            className: 'scroll-y'
        })(o || (o = u`
  flex: 1;
  background: ${ 0 };
  color: ${ 0 };
`), z => z.correct ? 'rgba(56, 142, 60, 0.85)' : 'rgba(123, 31, 162, 0.85)', h.default.White),
        _z = j.default.div(p || (p = u`
  margin: auto;
`)),
        _A = j.default.div.attrs({
            className: 'flex flex-column vc'
        })(q || (q = u`
  margin: 40px;
  @media (max-width: ${ 0 }px) {
    margin: 30px;
  }
`), () => k.MOBILE_BREAKPOINT),
        _B = j.default.div(r || (r = u`
  font-size: 70px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  @media (max-width: ${ 0 }px) {
    font-size: 55px;
  }
`), () => k.MOBILE_BREAKPOINT),
        _C = j.default.div(s || (s = u``)),
        _D = j.default.div(t || (t = u`
  font-size: 26px;
  @media (max-width: ${ 0 }px) {
    font-size: 22px;
  }
`), () => k.MOBILE_BREAKPOINT);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _x;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....');
    let w;
    var _x = (0, s.observer)(() => {
        const {
            pardy: y
        } = i.useContext(t.default);
        return (0, g.jsx)(_y, {
            children: (() => {
                if (y.screen === u.PardyScreen.question) {
                    if (y.questionScreen === u.PardyQuestionScreen.finale)
                        return !y.currentBet || y.animatingBetScreenOut ? (0, g.jsx)(q.default, {}) : (0, g.jsx)(r.default, {});
                    if (y.questionStatus === u.PardyQuestionStatus.preview)
                        return (0, g.jsx)(n.default, {});
                    if (y.questionStatus === u.PardyQuestionStatus.ask || y.questionStatus === u.PardyQuestionStatus.timesUp)
                        return y.answered && !y.animatingQuestionScreenOut ? (0, g.jsx)(v.default, {}) : (0, g.jsx)(p.default, {
                            timesUp: y.questionStatus === u.PardyQuestionStatus.timesUp,
                            answered: y.answered
                        });
                }
                return y.answerResponseItems.length ? (0, g.jsx)(o.default, {
                    correct: y.answeredCorrectly,
                    reasons: y.answerResponseItems
                }) : (0, g.jsx)(m.default, {});
            })()
        });
    });
    const _y = j.default.div.attrs({
        className: 'maxAll'
    })(w || (w = (z => z)`
  font-family: 'Londrina Solid', cursive;
  font-weight: ${ 0 };
  background: ${ 0 };
  color: ${ 0 };
  user-select: none;
`), k.FontWeights.Light, l.default.background, h.default.White);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = {
        background: '#0f1150',
        questionBackground: '#303f9f',
        answerResponseCorrect: '#2e7d32',
        answerResponseIncorrect: '#c62828'
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....');
    var _i = () => (0, g.jsx)(h.default, {
        message: 'Waiting for round to begin...'
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....');
    let j, k, l, m = n => n;
    var _n = o => (0, g.jsx)(_o, {
        children: (0, g.jsxs)(_p, {
            children: [
                (0, g.jsx)('div', {
                    className: 'loader',
                    style: {
                        margin: 0
                    }
                }),
                (0, g.jsx)(_q, {
                    children: o.message
                })
            ]
        })
    });
    const _o = i.default.div.attrs({
            className: 'maxAll flex-center'
        })(j || (j = m``)),
        _p = i.default.div.attrs({
            className: 'flex-center flex-column'
        })(k || (k = m`
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
`), h.FontWeights.Normal, 650),
        _q = i.default.div(l || (l = m`
  margin-top: 25px;
  font-size: 32px;
  @media (max-width: ${ 0 }px) {
    font-size: 20px;
    margin-top: 20px;
  }
`), 650);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....');
    var _i = () => (0, g.jsx)(h.default, {
        message: 'Get ready to answer!'
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _z;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....');
    let t, u, v, w, x, y = z => z;
    var _z = (0, q.observer)(A => {
        const {
            pardy: {
                correctWittyMessages: B,
                incorrectWittyMessages: C
            }
        } = j.useContext(r.default), [D, E] = j.useState(!1), {
            correct: F,
            reasons: G
        } = A, H = j.useMemo(() => (0, s.sample)(B), []), I = j.useMemo(() => (0, s.sample)(C), []);
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(_A, {
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
                        background: F ? p.default.answerResponseCorrect : p.default.answerResponseIncorrect
                    },
                    children: (0, g.jsxs)(_B, {
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
                            (0, g.jsx)(_C, {
                                className: F ? 'fal fa-check-circle' : 'fal fa-times-circle'
                            }),
                            (0, g.jsx)(_D, {
                                children: (0, g.jsx)(o.default, {
                                    text: (F ? 'Correct' : 'Incorrect') + '!'
                                })
                            }),
                            (0, g.jsx)(_E, {
                                children: F ? H : I
                            }),
                            (0, g.jsx)('div', {
                                style: {
                                    height: 60
                                }
                            }),
                            (0, g.jsx)(n.default, {
                                reasons: G,
                                onReasonsAnimatedIn: () => {
                                    F && E(!0);
                                }
                            })
                        ]
                    })
                }),
                D ? (0, g.jsx)(m.default, {}) : null
            ]
        });
    });
    const _A = (0, k.default)(l.motion.div).attrs({
            className: 'maxAll scroll-y'
        })(t || (t = y``)),
        _B = (0, k.default)(l.motion.div).attrs({
            className: 'maxWidth flex-center flex-column'
        })(u || (u = y`
  min-height: 100%;
  padding: 40px 20px;
  text-align: center;
`)),
        _C = k.default.i(v || (v = y`
  color: ${ 0 };
  font-size: 144px;
`), h.default.White),
        _D = k.default.div(w || (w = y`
  font-weight: ${ 0 };
  font-size: 64px;
  margin-top: 10px;
`), i.FontWeights.Normal),
        _E = k.default.div(x || (x = y`
  font-size: 22px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'),
        i = d('.....');
    let j;
    const k = {
            intensity: 4
        },
        l = {
            width: '100%',
            height: '100%'
        };
    var _m = () => (0, g.jsx)(_n, {
        children: (0, g.jsx)(i.Fireworks, {
            options: k,
            style: l
        })
    });
    const _n = h.default.div.attrs({
        className: 'maxWidth maxHeight'
    })(j || (j = (o => o)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....');
    let k, l, m = n => n;
    var _n = o => (0, g.jsx)(_o, {
        initial: 'hidden',
        animate: 'show',
        onAnimationComplete: o.onReasonsAnimatedIn,
        children: o.reasons.map(p => (0, g.jsx)(_p, {
            children: p
        }, p))
    });
    const _o = (0, j.default)(i.motion.div).attrs({
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
        })(k || (k = m``)),
        _p = (0, j.default)(i.motion.div).attrs({
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
        })(l || (l = m`
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${ 0 };
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  font-size: 24px;
`), h.default.White);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _v;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....');
    let p, q, r, s, t = u => u;
    const u = () => (0, g.jsx)(_y, {
        children: (0, g.jsx)(_z, {
            children: (0, g.jsx)(o.default, {
                text: 'Time\'s Up!',
                max: 80,
                noBold: !0,
                paddingHorizontal: '10%'
            })
        })
    });
    var _v = w => (0, g.jsxs)(g.Fragment, {
        children: [
            (0, g.jsx)(_w, {
                initial: {
                    background: l.default.background
                },
                animate: {
                    background: l.default.questionBackground
                },
                transition: {
                    duration: 1.2,
                    ease: 'easeOut'
                },
                children: (0, g.jsx)(_x, {
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
                    children: (0, g.jsx)(h.default, {})
                })
            }),
            w.timesUp && !w.answered ? (0, g.jsx)(u, {}) : null
        ]
    });
    const _w = (0, i.default)(k.motion.div).attrs({
            className: 'maxAll'
        })(p || (p = t``)),
        _x = (0, i.default)(k.motion.div).attrs({
            className: 'maxAll'
        })(q || (q = t`
  font-family: ${ 0 };
  overflow: hidden;
  color: ${ 0 };
`), j.default.mainFontName, m.default.Black),
        _y = i.default.div.attrs({
            className: 'maxAll flex-center animated fadeIn'
        })(r || (r = t`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`)),
        _z = i.default.div.attrs({
            className: 'medium-shadow animated jackInTheBox'
        })(s || (s = t`
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
`), l.default.questionBackground, m.default.White, n.FontWeights.Normal);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _q;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....');
    var _q = (0, n.observer)(() => {
        const [r, s] = o.useState(!1), {
            user: t,
            pardy: u
        } = o.useContext(l.default);
        o.useEffect(() => (u.animatingQuestionScreenOut = !1, () => u.animatingQuestionScreenOut = !1), []);
        const v = u.currentQuestion;
        return r && !u.animatingQuestionScreenOut ? null : v ? (0, g.jsx)(m.default, {
            ecc: (0, p.EncryptData)(v, v._id),
            onQuestionAnswered: w => (j.click.play(), s(!0), u.animatingQuestionScreenOut = !0, (0, k.send)(i.default.questionAnswered, {
                questionId: u.currentQuestion._id,
                answer: w
            }), !1),
            beforeOpenAnswerResponse: () => {
                u.animatingQuestionScreenOut = !1;
            },
            readToMeEnabled: t.readToMeEnabled,
            questionColor: {
                background: 'transparent',
                text: h.default.White
            },
            defaultBackgroundColor: 'transparent',
            blockKeyboardEvents: !0
        }) : null;
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _E;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....');
    let v, w, x, y, z, A, B, C = D => D;
    const D = 700;
    var _E = (0, r.observer)(() => {
        const {
            pardy: F
        } = s.useContext(p.default), [G, H] = s.useState(0), [I, J] = s.useState(!1), K = F.maxBet, L = () => {
            if (!G)
                return;
            const M = Math.max(1, Math.min(G, K));
            (0, o.send)(n.default.pardy.setBet, M), F.animatingBetScreenOut = !0, F.currentBet = M, t();
        }, M = () => J(!0);
        return (0, g.jsx)(m.default, {
            children: (0, g.jsx)(_F, {
                initial: {
                    background: 'rgba(0,0,0,0)'
                },
                animate: {
                    background: I ? u.default.background : 'rgba(0,0,0,0)'
                },
                transition: {
                    duration: 0.7
                },
                children: (0, g.jsx)(_G, {
                    children: (0, g.jsxs)(_H, {
                        initial: {
                            opacity: 0,
                            y: 50,
                            scale: 0.8,
                            x: 0
                        },
                        animate: I ? {
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
                            F.animatingBetScreenOut = !1;
                        },
                        children: [
                            (0, g.jsx)(_I, {
                                children: 'The Finale'
                            }),
                            (0, g.jsx)(_J, {
                                children: 'Place Your Bet!'
                            }),
                            (0, g.jsxs)('div', {
                                className: 'flex maxWidth vc',
                                children: [
                                    (0, g.jsx)('div', {
                                        style: {
                                            fontSize: 26,
                                            marginRight: 10
                                        },
                                        children: '$'
                                    }),
                                    (0, g.jsx)(j.default, {
                                        size: 'large',
                                        placeholder: '1,000',
                                        min: 1,
                                        max: K,
                                        autoFocus: !0,
                                        formatter: N => {
                                            if (!N)
                                                return '';
                                            let O = 1;
                                            return O = Number(N), isNaN(O) && (O = 1), O = Math.max(1, Math.min(O, K)), (0, o.numberWithCommas)(O);
                                        },
                                        parser: N => Number(N.replace(',', '')),
                                        onChange: H,
                                        style: {
                                            width: '100%',
                                            height: 55,
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: k.default.White,
                                            fontSize: 26,
                                            background: 'rgba(0,0,0,0.2)'
                                        },
                                        step: 1,
                                        onPressEnter: L
                                    })
                                ]
                            }),
                            (0, g.jsx)(i.default, {
                                style: {
                                    margin: '40px 0px'
                                }
                            }),
                            (0, g.jsxs)(_K, {
                                children: [
                                    (0, g.jsxs)(_L, {
                                        children: [
                                            'Max Bet: ',
                                            (0, o.getMoney)(K)
                                        ]
                                    }),
                                    (0, g.jsx)(h.default, {
                                        size: 'large',
                                        type: 'primary',
                                        style: {
                                            height: 50,
                                            width: 200
                                        },
                                        onClick: L,
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
    const _F = (0, t.default)(q.motion.div).attrs({
            className: 'maxAll scroll-y'
        })(v || (v = C``)),
        _G = t.default.div.attrs({
            className: 'maxWidth flex-center'
        })(w || (w = C`
  min-height: 100%;
  padding: 30px 0px;
`)),
        _H = (0, t.default)(q.motion.div).attrs({
            className: 'flex-column flex-center medium-shadow'
        })(x || (x = C`
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
`), k.default.White, k.default.Black, D),
        _I = t.default.div(y || (y = C`
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
`), k.default.Black, l.FontWeights.UltraBold, D),
        _J = t.default.div(z || (z = C`
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`), l.FontWeights.Normal, D),
        _K = t.default.div.attrs({
            className: 'flex maxWidth vc between'
        })(A || (A = C`
  @media (max-width: ${ 0 }px) {
    flex-direction: column;
  }
`), D),
        _L = t.default.div(B || (B = C`
  font-size: 18px;
  @media (max-width: ${ 0 }px) {
    margin-bottom: 10px;
  }
`), D);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _t;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    let o, p, q, r, s = t => t;
    var _t = (0, m.observer)(() => {
        const {
            pardy: {
                currentBet: u
            }
        } = h.useContext(j.default);
        return (0, g.jsx)(_u, {
            children: (0, g.jsxs)(_v, {
                children: [
                    (0, g.jsx)(_w, {}),
                    (0, g.jsxs)(_x, {
                        children: [
                            'Your bet of ',
                            (0, g.jsx)('b', {
                                children: (0, i.getMoney)(u)
                            }),
                            ' is in!'
                        ]
                    })
                ]
            })
        });
    });
    const _u = n.default.div.attrs({
            className: 'maxAll flex-center'
        })(o || (o = s``)),
        _v = (0, n.default)(l.motion.div).attrs({
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
        })(p || (p = s`
  background: rgba(255, 255, 255, 0.15);
  padding: 50px;
  border-radius: 5px;
  margin: 30px;
  text-align: center;
`)),
        _w = (0, n.default)(k.default).attrs({
            name: 'fas fa-check',
            className: 'animated pulse infinite'
        })(q || (q = s`
  font-size: 64px;
  margin-bottom: 25px;
`)),
        _x = n.default.div(r || (r = s`
  font-size: 32px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....');
    d('.....');
    var _h = i => (0, g.jsx)('i', {
        className: `${ i.name }${ i.className ? ` ${ i.className }` : '' }`,
        style: i.style
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _z;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....');
    let q, r, s, t, u, v, w, x = y => y;
    const y = 650;
    var _z = (0, m.observer)(() => {
        const {
            pardy: {
                tips: A,
                answerLockedInWittyMessages: B
            }
        } = n.useContext(j.default), C = n.useMemo(() => (0, l.sample)(B), []), D = n.useMemo(() => (0, l.sample)(A), []);
        return (0, g.jsxs)(_A, {
            initial: {
                background: p.default.questionBackground
            },
            animate: {
                background: p.default.background
            },
            transition: {
                duration: 1.3
            },
            children: [
                (0, g.jsxs)(_B, {
                    children: [
                        (0, g.jsx)(_C, {}),
                        (0, g.jsx)(_D, {
                            children: 'Answer locked in!'
                        }),
                        (0, g.jsx)(_E, {
                            children: C
                        })
                    ]
                }),
                (0, g.jsx)(_F, {
                    children: (0, g.jsx)(_G, {
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
                            __html: D
                        }
                    })
                })
            ]
        });
    });
    const _A = (0, o.default)(k.motion.div).attrs({
            className: 'maxAll flex-center'
        })(q || (q = x``)),
        _B = o.default.div.attrs({
            className: 'flex-center flex-column animated jackInTheBox'
        })(r || (r = x`
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  @media (max-width: ${ 0 }px) {
    padding: 40px 20px;
  }
`), y),
        _C = o.default.img.attrs({
            src: (0, i.getAssetPath)('lock.svg'),
            className: 'animated pulse infinite'
        })(s || (s = x`
  height: 120px;
  animation-duration: 3s;
  @media (max-width: ${ 0 }px) {
    height: 100px;
  }
`), y),
        _D = o.default.div(t || (t = x`
  font-size: 52px;
  margin-top: 15px;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    font-size: 36px;
    margin-top: 10px;
  }
`), h.FontWeights.Normal, y),
        _E = o.default.div(u || (u = x`
  font-size: 22px;
  margin-top: 10px;
  @media (max-width: ${ 0 }px) {
    font-size: 14px;
    margin-top: 8px;
  }
`), y),
        _F = o.default.div.attrs({
            className: 'maxAll flex hc'
        })(v || (v = x`
  position: absolute;
  top: 0;
  left: 0;
  align-items: flex-end;
  pointer-events: none;
`)),
        _G = (0, o.default)(k.motion.div)(w || (w = x`
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
`), y);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....');
    var _k = () => (0, g.jsx)(j.BackgroundContainer, {
        children: (0, g.jsx)(h.default, {
            style: {
                color: i.default.White
            },
            size: 48
        })
    });
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _M;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    d('.....');
    var s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....'),
        w = d('.....'),
        x = d('.....'),
        y = d('.....');
    let z, A, B, C, D, E, F, G, H = I => I;
    const I = 800,
        J = 700,
        K = L => (0, g.jsx)(_U, {
            background: L.color,
            onClick: L.select,
            children: L.num
        }),
        L = M => {
            const N = new(0, w.Howl)({
                    src: [(0, m.getAssetPath)('numberSwitch.mp3')]
                }),
                O = new(0, w.Howl)({
                    src: [(0, m.getAssetPath)('numberLogo.mp3')]
                }),
                P = new(0, w.Howl)({
                    src: [(0, m.getAssetPath)('numberSuccess.mp3')]
                }),
                Q = new(0, w.Howl)({
                    src: [(0, m.getAssetPath)('numberError.mp3')]
                }),
                [R] = h.useState((0, p.shuffle)(Array.from(Array(9).keys()).map(S => S + 1))),
                [S, T] = h.useState(1),
                [U, V] = h.useState(!1),
                [W, X] = h.useState(!1);
            h.useEffect(() => {
                (0, y.loadFont)('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap'), O.play();
            }, []);
            const Y = Z => U ? '#ffebee' : Z < S ? '#c8e6c9' : '#fff8e1';
            return (0, g.jsx)(_N, {
                children: (0, g.jsx)(_O, {
                    animate: {
                        opacity: W ? 0 : 1
                    },
                    transition: {
                        duration: 0.8
                    },
                    initial: {
                        opacity: 0
                    },
                    children: (0, g.jsxs)(_P, {
                        animate: {
                            opacity: W ? 0 : 1,
                            y: W ? 20 : 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        children: [
                            (0, g.jsx)(_Q, {}),
                            (0, g.jsx)(_R, {
                                children: (0, g.jsx)(x.default, {
                                    text: 'Outnumbered'
                                })
                            }),
                            (0, g.jsxs)(_S, {
                                children: [
                                    'by ',
                                    M.name,
                                    '.'
                                ]
                            }),
                            (0, g.jsx)(o.default, {}),
                            (0, g.jsx)(_T, {
                                children: R.map(Z => (0, g.jsx)(K, {
                                    num: Z,
                                    color: Y(Z),
                                    select: () => ($ => {
                                        10 !== S && ($ !== S ? (T(1), V(!0), Q.play(), setTimeout(() => {
                                            V(!1);
                                        }, 1000)) : (T($ + 1), V(!1), 9 === $ ? (setTimeout(() => {
                                            X(!0);
                                        }, 350), setTimeout(() => {
                                            M.onFinish();
                                        }, 1200), P.play()) : N.play()));
                                    })(Z)
                                }, `numblock-${ Z }`))
                            })
                        ]
                    })
                })
            });
        };
    var _M = (0, q.observer)(() => {
        var N;
        const {
            powerups: O,
            gameValues: P
        } = h.useContext(r.default);
        return (null == O || null === (N = O.screenAttack) || void 0 === N ? void 0 : N.powerupName) !== s.PowerupNames.outnumbered || P.gameStatus !== v.GameStatus.gameplay || P.nonDismissMessage.title ? null : (0, g.jsx)(L, {
            name: O.screenAttack.attackerName,
            onFinish: () => {
                O.screenAttack = {
                    powerupName: '',
                    attackerName: '',
                    fullScreen: !1
                }, (0, m.send)(u.default.outnumberedComplete);
            }
        });
    });
    const _N = i.default.div.attrs({
            className: 'maxWidth maxHeight'
        })(z || (z = H`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
`)),
        _O = (0, i.default)(j.motion.div).attrs({
            className: 'maxWidth maxHeight flex hc vc'
        })(A || (A = H`
  background: rgba(0, 0, 0, 0.35);
`)),
        _P = (0, i.default)(j.motion.div).attrs({
            className: 'flex flex-column hc vc'
        })(B || (B = H`
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
`), k.default.Black, k.default.White, l.default.basic, I, J),
        _Q = i.default.img.attrs({
            src: (0, m.getAssetPath)('numbers.svg'),
            alt: 'number blocks'
        })(C || (C = H`
  height: 125px;
  @media (max-width: ${ 0 }px),
    (max-height: ${ 0 }px) {
    height: 110px;
  }
  @media (max-width: 550px) {
    height: 80px;
  }
`), I, J),
        _R = i.default.div(D || (D = H`
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
`), n.FontWeights.Bold, t.default.mainFontName, I, J),
        _S = i.default.div(E || (E = H`
  font-size: 21px;
  @media (max-width: ${ 0 }px),
    (max-height: ${ 0 }px) {
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
  }
`), I, J),
        _T = i.default.div(F || (F = H`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    '. . .'
    '. . .'
    '. . .';
`)),
        _U = i.default.div.attrs({
            className: 'flex hc vc'
        })(G || (G = H`
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
`), n.FontWeights.Bold, V => V.background);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _A;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....');
    let t, u, v, w, x = y => y;
    const y = [
            s.default.waiting,
            s.default.pardyMode
        ],
        z = (0, p.observer)(() => {
            const {
                pardy: A,
                navigation: {
                    currentRoute: B
                }
            } = h.useContext(q.default), C = h.useMemo(() => !(A.power || !y.includes(B) || !A.powers.length || !A.powerOptions.length), [
                A.power,
                B,
                A.powers.length,
                A.powerOptions.length
            ]);
            return (0, g.jsx)(i.default, {
                open: C,
                close: () => !1,
                customWidth: '700px',
                customMaxWidth: '95%',
                customPadding: '0px',
                customStyle: {
                    border: `3px solid ${ l.default.White }`
                },
                children: (0, g.jsxs)(_B, {
                    children: [
                        (0, g.jsxs)(_C, {
                            children: [
                                (0, g.jsx)(_D, {
                                    children: 'Pick Your'
                                }),
                                (0, g.jsx)(_E, {
                                    children: 'Power!'
                                })
                            ]
                        }),
                        (0, g.jsx)(n.default, {
                            style: {
                                margin: '30px 0px'
                            }
                        }),
                        A.powers.filter(D => A.powerOptions.includes(D.id)).map(D => (0, g.jsx)(o.default, {
                            id: D.id,
                            name: D.name,
                            image: D.image,
                            description: D.description,
                            background: D.background
                        }, D.id))
                    ]
                })
            });
        });
    var _A = (0, p.observer)(() => {
        const {
            gameOptions: {
                specialGameType: B
            }
        } = h.useContext(q.default);
        return B && B.includes(r.PARDY) ? (0, g.jsx)(z, {}) : null;
    });
    const _B = j.default.div.attrs({
            className: 'maxWidth'
        })(t || (t = x`
  padding: 40px;
  background: ${ 0 };
  color: ${ 0 };
  font-family: 'Londrina Solid', cursive;
  font-weight: ${ 0 };
`), m.default.background, l.default.White, k.FontWeights.Light),
        _C = j.default.div.attrs({
            className: 'maxWidth flex-column flex-center'
        })(u || (u = x`
  text-transform: uppercase;
  line-height: 1;
  text-shadow: 0px 3px 3px ${ 0 };
`), l.default.Black),
        _D = j.default.div(v || (v = x`
  font-size: 42px;
`)),
        _E = j.default.div(w || (w = x`
  font-size: 84px;
  font-weight: ${ 0 };
`), k.FontWeights.Bold);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _u;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    d('.....');
    var m = d('.....');
    let n, o, p, q, r, s, t = u => u;
    var _u = v => (0, g.jsxs)(_v, {
        children: [
            (0, g.jsx)(_w, {
                style: {
                    background: v.background
                },
                children: (0, g.jsx)(_x, {
                    src: v.image
                })
            }),
            (0, g.jsxs)(_y, {
                children: [
                    (0, g.jsx)(_z, {
                        children: v.name
                    }),
                    (0, g.jsx)(_A, {
                        children: v.description
                    }),
                    (0, g.jsx)(l.default, {
                        type: 'primary',
                        style: {
                            width: 250
                        },
                        size: 'small',
                        label: 'Select',
                        onClick: () => {
                            (0, k.send)(j.default.pardy.setPower, v.id);
                        }
                    })
                ]
            })
        ]
    });
    const _v = m.default.div.attrs({
            className: 'maxWidth medium-shadow'
        })(n || (n = t`
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 3px solid #90a4ae;
  color: ${ 0 };
  background: ${ 0 };
  text-align: center;
`), h.default.Black, h.default.White),
        _w = m.default.div.attrs({
            className: 'maxWidth flex-center'
        })(o || (o = t`
  height: 80px;
`)),
        _x = m.default.img(p || (p = t`
  height: 42px;
  filter: drop-shadow(2px 2px 2px #222);
`)),
        _y = m.default.div.attrs({
            className: 'maxWidth flex-column flex-center'
        })(q || (q = t`
  padding: 20px;
  background: #f5f5f5;
`)),
        _z = m.default.div(r || (r = t`
  font-weight: ${ 0 };
  font-size: 34px;
`), i.FontWeights.Normal),
        _A = m.default.div(s || (s = t`
  font-size: 18px;
  margin-bottom: 15px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');
    var _i = async j => {
        const {
            serverUrl: k,
            roomId: l,
            intentId: m
        } = j, n = {
            intent: m
        };
        (0, g.isLoggedIn)() && (n.authToken = (0, g.getUser)().token), (0, h.default)({
            joinOptions: {
                serverUrl: k,
                roomId: l,
                options: n
            },
            disposeOnError: !1
        });
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    var _k = l => {
        const {
            joinOptions: m,
            createOptions: n
        } = l;
        if (!m && !n)
            return;
        const o = () => {
            h.default.engine.attemptingToConnect = !1, h.default.engine.hasConnected = !1, h.default.engine.connected = !1, h.default.engine.connectionError = !1, h.default.engine.joinedRoom = !1, h.default.engine.attemptingToJoinRoom = !1, h.default.engine.errorJoiningRoom = !1, h.default.engine.roomError = null;
        };
        o(), h.default.engine.attemptingToConnect = !0;
        const p = new(0, g.Client)(m ? m.serverUrl : n.serverUrl, {
                transports: ['websocket'],
                clientIdSuffix: '-play'
            }),
            q = p.onConnectError.add(r => {
                console.log({
                    connectionError: r
                }), l.onConnectError && l.onConnectError(r), l.disposeOnError && o(), h.default.engine.connectionError = !0, h.default.engine.attemptingToConnect = !1;
            });
        p.onConnect.add(() => {
            q(), h.default.engine.client = p, h.default.engine.connected = !0, h.default.engine.hasConnected = !0, h.default.engine.attemptingToConnect = !1, h.default.engine.attemptingToJoinRoom = !0, p.onConnectError.add(() => {
                h.default.engine.connectionError = !0;
            }), p.onConnect.add(() => {
                h.default.engine.connected = !0, h.default.engine.connectionError = !1, h.default.engine.attemptingToConnect = !1, h.default.engine.attemptingToJoinRoom = !0;
            }), p.onReconnect.add(() => {
                h.default.engine.connected = !0, h.default.engine.connectionError = !1, h.default.engine.attemptingToConnect = !1, h.default.engine.attemptingToJoinRoom = !0;
            }), h.default.engine.attemptingToJoinRoom = !0;
            const r = m ? p.joinRoom(m.roomId, m.options) : p.createRoom(n.roomType, n.options);
            r.onJoinAttempt.add(() => {
                h.default.engine.attemptingToJoinRoom = !0;
            }), r.onJoinError.add(s => {
                console.log({
                    roomJoinError: s
                }), l.onRoomJoinError && l.onRoomJoinError(s), h.default.engine.roomError = s, h.default.engine.errorJoiningRoom = !0, h.default.engine.attemptingToJoinRoom = !1;
            });
            const s = r.onJoinError.add(() => {
                l.disposeOnError && o();
            });
            r.onJoin.add(() => {
                (0, i.default)(r), (0, j.default)(), l.onRoomJoin && l.onRoomJoin(), h.default.engine.hasJoinedRoom = !0;
            }, !0), r.onJoin.add(() => {
                s(), h.default.engine.joinedRoom = !0, h.default.engine.attemptingToJoinRoom = !1, h.default.engine.game || (h.default.engine.game = r);
            }), r.onLeave.add(() => {
                h.default.engine.joinedRoom = !1;
            });
        }, !0), p.onDisconnect.add(() => {
            h.default.engine.attemptingToConnect = !0, h.default.engine.connected = !1, l.onDisconnect && l.onDisconnect();
        });
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    var _l = () => {
        (0, h.reaction)(() => k.default.powerups.activePowerups, m => {
            m.includes(j.PowerupNames.fivePercentBot) ? k.default.ui.snowing = !0 : k.default.ui.snowing = !1;
        }), (0, h.reaction)(() => k.default.navigation.leaderboardDrawerOpen, () => g.woosh.play()), (0, h.reaction)(() => k.default.imposter.status, () => (0, i.default)()), (0, h.reaction)(() => k.default.gameValues.gameStatus, () => (0, i.default)()), (0, h.reaction)(() => k.default.navigation.currentRoute, () => (0, i.default)());
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    const l = [
        g.default.questions,
        g.default.shop
    ];
    var _m = () => {
        if (j.default.gameValues.gameStatus === k.GameStatus.gameplay)
            return (0, h.inImposterMode)() ? j.default.imposter.status === i.ImposterStatus.questions ? void(l.includes(j.default.navigation.currentRoute) || (0, h.changeRoute)(g.default.questions)) : void(0, h.changeRoute)(g.default.imposterMode) : void((0, h.inDrawMode)() ? (0, h.changeRoute)(g.default.drawMode) : (0, h.inPardyMode)() && (0, h.changeRoute)(g.default.pardyMode));
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _x;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....');
    const v = 'https://status.gimkit.com';
    let w = class extends r.Component {
        render() {
            const {
                engine: x,
                gameValues: y,
                navigation: z
            } = this.props, A = ((B, C, D) => !(C.gameStatus === s.GameStatus.results || (!B.connectionError || B.game) && !B.errorFindingServerForGame && !B.errorJoiningRoom && (D.currentRoute === t.default.join || !B.game || B.joinedRoom || D.currentRoute === t.default.nonDismissMessage)))(x, y, z);
            return z.currentRoute === t.default.join ? (0, i.jsx)(m.default, {
                open: A,
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
            }) : (0, i.jsx)(l.default, {
                open: A,
                placement: 'bottom',
                closable: !1,
                height: 'auto',
                children: this.getContent()
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'getLoading', () => {
                const {
                    engine: x
                } = this.props;
                return !x.errorJoiningRoom && (!x.errorFindingServerForGame && !(!x.game && x.connectionError));
            }), (0, g.default)(this, 'getContent', () => {
                const x = this.getLoading();
                return (0, i.jsxs)('div', {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        fontFamily: p.default.name,
                        color: o.default.Black,
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: [
                        x && (0, i.jsx)(n.default, {
                            size: 'large',
                            style: {
                                marginBottom: 10
                            }
                        }),
                        !x && (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(j.default, {
                                    style: {
                                        color: 'red',
                                        fontSize: 51
                                    }
                                }),
                                (0, i.jsx)(k.default, {})
                            ]
                        }),
                        (0, i.jsx)('div', {
                            style: {
                                textAlign: 'center',
                                fontSize: 23,
                                fontWeight: 'bold'
                            },
                            children: this.getMessage()
                        })
                    ]
                });
            }), (0, g.default)(this, 'getMessage', () => {
                const {
                    engine: x
                } = this.props;
                if (x.errorFindingServerForGame)
                    return (0, i.jsxs)('span', {
                        children: [
                            'We couldn\'t find any available game servers. Gimkit might be down. Check ',
                            (0, i.jsx)('a', {
                                href: v,
                                children: v
                            }),
                            ' for more info.'
                        ]
                    });
                if (!x.game && x.connectionError)
                    return (0, i.jsxs)('span', {
                        children: [
                            'Your network is blocking connection to our game servers. Get more details on how to fix this ',
                            (0, i.jsx)('a', {
                                href: 'https://www.gimkit.com/connection',
                                children: 'here.'
                            })
                        ]
                    });
                if (x.errorJoiningRoom) {
                    const y = (0, u.default)(x.roomError);
                    return (0, i.jsxs)('span', {
                        children: [
                            (0, i.jsx)('span', {
                                style: {
                                    fontSize: 23
                                },
                                children: y.title
                            }),
                            (0, i.jsx)('br', {}),
                            (0, i.jsx)('span', {
                                style: {
                                    fontWeight: 'normal',
                                    fontSize: 18
                                },
                                children: y.description
                            })
                        ]
                    });
                }
                return x.attemptingToConnect ? (0, i.jsxs)('span', {
                    children: [
                        'Disconnected!',
                        ' ',
                        (0, i.jsx)('span', {
                            style: {
                                fontWeight: 'normal'
                            },
                            children: 'Attempting to reconnect...'
                        })
                    ]
                }) : x.attemptingToJoinRoom ? (0, i.jsxs)('span', {
                    children: [
                        'Connected!',
                        ' ',
                        (0, i.jsx)('span', {
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
    w = (0, h.__decorate)([
        (0, q.inject)('engine', 'gameValues', 'navigation'),
        q.observer
    ], w);
    var _x = w;
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'CloseCircleOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = {
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
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....');
    var _h = i => {
        let j = 'Error joining game',
            k = '',
            l = 'string' == typeof i ? i : i.type;
        if ('MAX_PLAYERS' === l) {
            let {
                message: m
            } = i;
            j = m.title ? m.title : 'Game full', k = m.description ? m.description : 'There are too many players in this game';
        } else
            'HOST_DISCONNECTED' === l ? (j = 'All done.', k = 'The host for this game has left.') : 'GAME_FINISHED' === l ? (j = 'Game ended.', k = 'This game has already ended.') : 'INVALID_INTENT' === l ? (j = 'Reservation expired', k = 'Your reservation to join this game has expired. Refresh and try joining again.') : l && l.includes && l.includes('No data found') ? g.default.engine.hasJoinedRoom ? (j = 'All gone.', k = 'The game you were in no longer exists.') : (j = 'No game found.', k = 'The game you were trying to join does not exist.') : k = 'An unknown error occurred.';
        return {
            title: j,
            description: k
        };
    };
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _t;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....');
    let o, p, q, r = s => s,
        s = class extends m.Component {
            render() {
                return (0, i.jsx)(k.default, {
                    open: this.props.ui.showingSuccessModal,
                    close: this.close,
                    customWidth: '570px',
                    customPadding: '26px',
                    children: this.getContent()
                });
            }
            constructor(...e) {
                super(...e), (0, g.default)(this, 'close', () => this.props.ui.showingSuccessModal = !1), (0, g.default)(this, 'getContent', () => {
                    const {
                        successModalInfo: t
                    } = this.props.ui;
                    if (!t || !t.title)
                        return null;
                    const {
                        textOptions: u
                    } = t, {
                        icon: v,
                        background: w,
                        color: x,
                        title: y,
                        description: z
                    } = t;
                    return (0, i.jsxs)('div', {
                        style: {
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        },
                        children: [
                            (0, i.jsx)(_u, {
                                style: {
                                    background: w,
                                    color: x
                                },
                                children: (0, i.jsx)('i', {
                                    className: v
                                })
                            }),
                            (0, i.jsx)(_v, {
                                children: y
                            }),
                            (0, i.jsx)(_w, {
                                style: {
                                    textAlign: u && u.align ? u.align : 'center',
                                    whiteSpace: u && u.customLines ? 'pre-wrap' : 'normal'
                                },
                                children: z
                            }),
                            (0, i.jsx)(j.default, {
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
    s = (0, h.__decorate)([
        (0, l.inject)('ui'),
        l.observer
    ], s);
    var _t = s;
    const _u = n.default.div(o || (o = r`
  height: 78px;
  width: 78px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
`)),
        _v = n.default.div(p || (p = r`
  font-size: 38px;
  font-weight: 900;
  margin-top: 6px;
`)),
        _w = n.default.div(q || (q = r`
  font-size: 18px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _G;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....');
    let v, w, x, y, z, A, B, C = D => D;
    const D = E => {
            if (E === q.ImposterShopItemId.clearListRemover)
                return F => !F.canNeverBeClear && F.role === q.PersonRole.detective;
        },
        E = F => {
            const G = F.items.find(H => H.id === F.shopItem);
            return G ? (0, i.jsxs)(_H, {
                children: [
                    (0, i.jsxs)(_I, {
                        style: {
                            color: j.default.White,
                            background: G.background
                        },
                        children: [
                            (0, i.jsx)(_J, {
                                children: (0, i.jsx)(n.default, {
                                    style: {
                                        fontSize: 34
                                    },
                                    name: G.icon
                                })
                            }),
                            (0, i.jsxs)(_K, {
                                children: [
                                    (0, i.jsx)(_L, {
                                        children: (0, i.jsx)(p.default, {
                                            text: G.name
                                        })
                                    }),
                                    (0, i.jsx)(_M, {
                                        children: (0, i.jsx)(p.default, {
                                            text: G.description
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(_N, {
                        children: (0, i.jsx)(u.default, {
                            actionText: (f = G.id, f === q.ImposterShopItemId.fakeInvestigation || f === q.ImposterShopItemId.privateInvestigation || f === q.ImposterShopItemId.publicInvestigation ? 'Investigate' : f === q.ImposterShopItemId.donate ? 'Donate' : 'Use'),
                            showAction: !0,
                            onSelect: F.handleSelect,
                            filter: D(G.id)
                        })
                    })
                ]
            }) : (F.close(), null);
            var H;
        };
    let F = class extends s.Component {
        render() {
            if (!this.props.imposter.me)
                return null;
            const {
                imposter: G
            } = this.props, H = G.currentShopItemModalVisible;
            return (0, i.jsx)(o.default, {
                open: H,
                close: this.close,
                customMaxWidth: '90%',
                customWidth: '600px',
                customPadding: '0px',
                children: (0, i.jsx)(E, {
                    shopItem: G.currentShopItem,
                    items: G.shopItems,
                    close: this.close,
                    handleSelect: this.handlePersonSelect
                })
            });
        }
        constructor(...e) {
            super(...e), (0, g.default)(this, 'close', () => {
                this.props.imposter.currentShopItemModalVisible = !1;
            }), (0, g.default)(this, 'handlePersonSelect', G => {
                (0, m.send)(k.default.imposter.purchase, {
                    item: this.props.imposter.currentShopItem,
                    on: G
                }), (0, m.changeRoute)(l.default.questions), this.close();
            });
        }
    };
    F = (0, h.__decorate)([
        (0, r.inject)('imposter'),
        r.observer
    ], F);
    var _G = F;
    const _H = t.default.div.attrs({
            className: 'maxWidth flex flex-column'
        })(v || (v = C`
  font-family: 'Space Grotesk', monospace;
`)),
        _I = t.default.div(w || (w = C`
  height: 170px;
  padding: 20px;
`)),
        _J = t.default.div.attrs({
            className: 'flex maxWidth vc hc'
        })(x || (x = C`
  height: 60px;
`)),
        _K = t.default.div(y || (y = C`
  text-align: center;
  margin-top: 4px;
`)),
        _L = t.default.div(z || (z = C`
  font-size: 25px;
  font-weight: 900;
`)),
        _M = t.default.div(A || (A = C`
  font-size: 14px;
`)),
        _N = t.default.div.attrs({
            className: 'maxWidth'
        })(B || (B = C`
  padding: 20px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _E;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    let s, t, u, v, w, x, y, z, A, B = C => C;
    var C;
    (C = A || (A = {})).intro = 'intro', C.role = 'role';
    const D = (0, n.observer)(() => {
        const [E, F] = o.useState(A.intro), {
            imposter: G
        } = o.useContext(r.default), H = () => {
            E !== A.intro && (G.roleModalOpen = !1);
        }, I = () => {
            F(A.role);
        }, J = () => G.me.role === m.PersonRole.imposter, K = () => {
            const {
                epl: L,
                impostersLeft: M,
                me: N
            } = G, O = (0, q.DecryptData)(L) || [];
            let P = [];
            if (J()) {
                const Q = O.filter(R => R.role === m.PersonRole.imposter && R.id !== N.id);
                Q.length && P.push(`Other ${ (0, i.plural)('Impostor', Q.length) }: ${ (0, i.teamPlayerNames)(Q.map(R => R.name)) }`), P.push('Visit Mission Control to decrease the number of investigations\n      crewmates can have.'), P.push('Blend in by running fake investigations or putting on a disguise.');
            } else
                P.push(`There ${ 1 === M ? 'is' : 'are' } ${ M } ${ (0, i.plural)('impostor', M) } on board. Find and vote them out!`), P.push('Run investigations in Mission Control to rule out fellow crewmates.'), P.push('Use your notebook to keep track of your suspicions.'), P.push('Call a meeting when you\'re ready to vote someone out.');
            return P;
        }, L = G.roleModalOpen && G.status !== m.ImposterStatus.intro;
        return (0, g.jsx)(k.default, {
            open: L,
            close: H,
            customPadding: '0px',
            customWidth: '600px',
            customMaxWidth: '600px',
            children: (0, g.jsx)(_F, {
                children: E === A.intro ? (0, g.jsxs)(g.Fragment, {
                    children: [
                        (0, g.jsx)(_G, {
                            children: (0, g.jsx)(l.default, {
                                text: 'Welcome aboard.'
                            })
                        }),
                        (0, g.jsx)(_H, {}),
                        (0, g.jsx)(_I, {
                            children: (0, g.jsx)(l.default, {
                                text: 'Make sure nobody can see your screen, and then click to view your\n            role!'
                            })
                        }),
                        (0, g.jsx)(j.default, {
                            style: {
                                width: '100%'
                            },
                            size: 'medium',
                            type: 'primary',
                            onClick: I,
                            label: (0, g.jsx)(l.default, {
                                text: 'View Role'
                            })
                        })
                    ]
                }) : (0, g.jsxs)(g.Fragment, {
                    children: [
                        (0, g.jsx)(_J, {
                            children: (0, g.jsx)(l.default, {
                                text: 'You are ' + (J() ? 'an' : 'a')
                            })
                        }),
                        (0, g.jsx)(_K, {
                            children: (0, g.jsx)(l.default, {
                                text: J() ? 'Impostor' : 'Crewmate'
                            })
                        }),
                        (0, g.jsx)(_L, {
                            children: K().map(M => (0, g.jsx)(_M, {
                                children: (0, g.jsx)(l.default, {
                                    text: M
                                })
                            }, M))
                        }),
                        (0, g.jsx)(j.default, {
                            style: {
                                marginTop: 5
                            },
                            size: 'medium',
                            type: 'primary',
                            onClick: H,
                            label: (0, g.jsx)(l.default, {
                                text: 'Close'
                            })
                        })
                    ]
                })
            })
        });
    });
    var _E = (0, n.observer)(() => {
        const {
            imposter: F
        } = o.useContext(r.default);
        return F.me ? (0, g.jsx)(D, {}) : null;
    });
    const _F = p.default.div.attrs({
            className: 'maxWidth flex flex-column hc vc'
        })(s || (s = B`
  background: ${ 0 };
  color: ${ 0 };
  padding: 40px;
  font-family: 'Space Grotesk', monospace;
  text-align: center;
`), h.default.Black, h.default.White),
        _G = p.default.div(t || (t = B`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 16px;
`)),
        _H = p.default.img.attrs({
            src: (0, i.getAssetPath)('space-ship.svg')
        })(u || (u = B`
  height: 125px;
`)),
        _I = p.default.div(v || (v = B`
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 18px;
`)),
        _J = p.default.div(w || (w = B`
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: -8px;
`)),
        _K = p.default.div(x || (x = B`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 20px;
`)),
        _L = p.default.ul.attrs({
            className: 'maxWidth'
        })(y || (y = B`
  font-size: 16px;
  text-align: left;
`)),
        _M = p.default.li(z || (z = B`
  margin-bottom: 13px;
`));
}), d.register('.....', function(e, f) {
    b(e.exports, 'legitEvent', function() {
        return d;
    });
    const g = h => !h || (!0 !== h.isTrusted && !1 !== h.isTrusted || h.isTrusted);
}), d.register('.....', function(e, f) {
    b(e.exports, 'getCloudinaryUrl', function() {
        return d;
    });
    const g = h => {
            const i = _h(h);
            return i ? h.includes('/video/upload') ? `https://${ _i }/video/upload/${ i }` : `https://${ _i }/image/upload/f_auto,fl_lossy,q_auto/${ i }` : h;
        },
        _h = i => {
            if (!_l.some(j => i.includes(j)))
                return null;
            if (i.includes(_j) && !i.includes(`/${ _k }/`))
                return null;
            const j = i.split('/');
            if (!j || !j.length || j.length < 2)
                return null;
            const k = j[j.length - 2],
                l = j[j.length - 1];
            return k && l && k.startsWith('v') ? `${ k }/${ l }` : null;
        },
        _i = 'media.gimkit.com',
        _j = 'res.cloudinary.com',
        _k = 'gimkit-production',
        _l = [
            _i,
            _j
        ];
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'DownOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return d;
    });
    var g = {
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
}), d.register('.....', function(e, f) {
    b(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    const i = h.lazy(() => d('.....'));
    var _j = k => (0, g.jsx)(h.Suspense, {
        fallback: k.fallback || null,
        children: (0, g.jsx)(i, {
            latex: k.latex
        })
    });
}), d.register('.....', function(e, f) {
    e.exports = Promise.all([
        import('./' + d('.....').resolve('emcKB')),
        import('./' + d('.....').resolve('5OCdz'))
    ]).then(() => d('.....'));
}), d.register('.....', function(e, f) {
    b(e.exports, 'useMotionValue', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');

    function _k(l) {
        const m = (0, j.useConstant)(() => (0, h.motionValue)(l)),
            {
                isStatic: n
            } = (0, g.useContext)(i.MotionConfigContext);
        if (n) {
            const [, o] = (0, g.useState)(l);
            (0, g.useEffect)(() => m.on('change', o), []);
        }
        return m;
    }
});